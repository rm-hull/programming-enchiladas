#!/usr/bin/env node
/**
 * Phase 4 [REVISED]: Independent per-demo compilation orchestrator.
 *
 * Each demo is compiled as its own isolated shadow-cljs.edn build, executed via separate
 * `npx shadow-cljs` process. This completely eliminates the need for namespace rewriting.
 *
 * Why this approach:
 * - Gists keep their original namespaces (no risk of mangling ns forms, macros, etc.)
 * - If one demo fails, it cannot corrupt or break compilation of any other demo
 * - Debuggable: each demo produces its own shadow-cljs.edn and log file
 * - Simple: no complex multi-module merging logic
 *
 * Trade-off: ~3-5s JVM startup per demo. With 35 demos this is ~2-3min total, which is
 * acceptable since build time is not a critical concern per the project goals.
 *
 * Usage:
 *   node compiler/build-demos.mjs [--clean] [--demo <slug>...]
 */

import { execSync } from 'child_process';
import { readFileSync, readdirSync, mkdirSync, writeFileSync, existsSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');

const demosDir = join(repoRoot, 'demos');
const compilerDir = join(__dirname);
const outputDir = join(compilerDir, 'public', 'js', 'demos');
const logDir = join(compilerDir, 'target', 'compile-logs');
const tempDir = join(compilerDir, 'target', 'temp-configs');

function listSlugs() {
  const entries = readdirSync(demosDir, { withFileTypes: true });
  return entries
    .filter(e => e.isDirectory() && !e.name.startsWith('.'))
    .map(e => e.name)
    .sort();
}

function slugToSource(slug) {
  const meta = readMeta(slug);
  return join(demosDir, slug, meta.entry_file);
}

function slugToMeta(slug) {
  return join(demosDir, slug, 'meta.json');
}

function slugToOutputFile(slug) {
  return join(outputDir, slug, 'main.js');
}

function slugToLogFile(slug) {
  return join(logDir, `${slug}.log`);
}

function extractNamespace(sourceContent) {
  // Match (ns foo.bar ...) or (ns "foo.bar" ...) or (ns 'foo.bar ...)
  // Also handle the case where ns is the very first form
  const match = sourceContent.match(/^\s*\(ns\s+([^\s\)\"]+)/m);
  return match ? match[1].replace(/^['"]|['"]$/g, '') : null;
}

function ensureDir(path) {
  mkdirSync(path, { recursive: true });
}

function writeStub(slug, reason) {
  const outFile = slugToOutputFile(slug);
  ensureDir(dirname(outFile));
  const content = `// Demo '${slug}' unavailable\nconsole.error('Demo ${slug}: ${reason}');\n`;
  writeFileSync(outFile, content);
  console.log(`  -> Wrote stub: ${outFile}`);
}

function readMeta(slug) {
  const metaPath = slugToMeta(slug);
  if (!existsSync(metaPath)) return null;
  try {
    return JSON.parse(readFileSync(metaPath, 'utf-8'));
  } catch (e) {
    return null;
  }
}

function preprocessSource(sourceContent, demoNs) {
  // Apply compatibility transformations for legacy macro imports.
  // We do NOT rewrite namespaces — that stays original (per-demo isolation handles collisions).
  
  let result = sourceContent;
  
  // 1. Convert :use-macros to :require-macros (must happen before namespace fixes below)
  result = result.replace(/:use-macros\s+/g, ':require-macros ');
  
  // 2. cljs.core.async.macros: convert :require to :require-macros
  result = result.replace(
    /:require\s*\[cljs\.core\.async\.macros\s+([^\]]+)\]/g,
    (match, refs) => `:require-macros [cljs.core.async.macros ${refs}]`
  );
  
  // 3. dommy.macros: convert :require to :require-macros
  result = result.replace(
    /:require\s*\[dommy\.macros\s+([^\]]+)\]/g,
    (match, refs) => `:require-macros [dommy.macros ${refs}]`
  );
  
  // Also handle dommy.macros in :require-cljs
  result = result.replace(
    /:require-cljs\s*\[dommy\.macros\s+([^\]]+)\]/g,
    (match, refs) => `:require-macros [dommy.macros ${refs}]`
  );
  
  // 4. core.logic: In core.logic 1.1.1+, macros are in cljs.core.logic (not cljs.core.logic.macros)
  // Handle various forms: [cljs.core.logic.macros :as m], [cljs.core.logic.macros :refer [...]], etc.
  result = result.replace(
    /\[cljs\.core\.logic\.macros\s+([^\]]+)\]/g,
    (match, refs) => `[cljs.core.logic ${refs}]`
  );
  
  // 5. Convert :only -> :refer
  result = result.replace(/\[(\S+)\s+:only\s+\[([^\]]*)\]\]/g, '[$1 :refer [$2]]');
  
  // 6. Convert :use to :require (modern CLJS prefers :require)
  result = result.replace(/:use\s+/g, ':require ');
  
  // 7. Remove :include-macros true (deprecated in modern CLJS)
  result = result.replace(/:include-macros\s+true/g, '');
  
  // 8. Remove *occurs-check* from :refer lists (not available in core.logic 1.1.1+)
  result = result.replace(/(:refer\s*\[)([^\[]*)(\*occurs-check\*)([^\]]*)\]/g, '$1$2$4]');
  
  // 9. Neutralize (binding [*occurs-check* false] ...) → (do ...)
  result = result.replace(/\(binding\s*\[\*occurs-check\*\s+false\]\s*/g, '(do ');
  
  return result;
}

function copySourceToCompiler(slug, demoDir) {
  // Copy all .cljs files from the demo directory to compiler/src/demos/<slug>/
  // Each file's namespace must be extracted to determine its target path.
  // In Clojure, hyphens in namespace names are replaced with underscores in file paths
  // e.g., big-bang.examples.lorenz-attractor -> big_bang/examples/lorenz_attractor.cljs
  
  const cljsFiles = readdirSync(demoDir).filter(f => f.endsWith('.cljs'));
  
  for (const file of cljsFiles) {
    const sourceFile = join(demoDir, file);
    const sourceContent = readFileSync(sourceFile, 'utf-8');
    
    // Extract namespace from this file
    const ns = extractNamespace(sourceContent);
    if (!ns) {
      // No namespace declaration - skip this file (e.g., snippets)
      console.log(`  -> Skipping ${file} (no namespace declaration)`);
      continue;
    }
    
    const nsPath = ns.replace(/\./g, '/').replace(/-/g, '_');
    const targetFile = join(compilerDir, 'src', 'demos', slug, `${nsPath}.cljs`);
    ensureDir(dirname(targetFile));
    
    const processedContent = preprocessSource(sourceContent, ns);
    writeFileSync(targetFile, processedContent);
    console.log(`  -> Copied and preprocessed: ${file} -> ${targetFile}`);
  }
  
  return true;
}

function generateConfigForDemo(slug, demoNs) {
  // Generate a minimal shadow-cljs.edn for this single demo
  // We use :source-paths (without :deps true) so we can specify per-demo paths
  // The deps.edn provides Maven dependencies; shadow-cljs reads classpath from deps.edn
  const outputSubdir = `public/js/demos/${slug}`;
  const assetPath = `/js/demos/${slug}`;

  return `{:deps true
 :npm-deps true
 :builds
 {:demo
  {:target :browser
   :output-dir "${outputSubdir}"
   :asset-path "${assetPath}"
   :modules {:main {:entries [${demoNs}]}}
   :compiler-options {:infer-externs :auto
                      :foreign-libs [{:file "externs/arbor.js"}]}}}}`}

function updateDepsEdnForDemo(slug) {
  // Overwrite deps.edn :paths to include only this demo's source dir.
  // This ensures per-demo isolation - only one demo's sources are on the classpath.
  const depsPath = join(compilerDir, 'deps.edn');
  const depsContent = readFileSync(depsPath, 'utf-8');
  const demoSrcPath = `src/demos/${slug}`;
  
  // Replace :paths with a minimal set including the demo's source dir
  const updated = depsContent.replace(
    /:paths \[([^\]]+)\]/,
    `:paths ["src" "src/demos/${slug}" "vendor"]`
  );
  
  writeFileSync(depsPath, updated);
}

// Store original deps.edn content for restoration
let originalDepsEdn = null;

function saveDepsEdn() {
  const depsPath = join(compilerDir, 'deps.edn');
  originalDepsEdn = readFileSync(depsPath, 'utf-8');
}

function restoreDepsEdn() {
  if (originalDepsEdn !== null) {
    const depsPath = join(compilerDir, 'deps.edn');
    writeFileSync(depsPath, originalDepsEdn);
  }
}

function generateRuntimeConfig() {
  // Generate shadow-cljs.edn for the shared enchilada runtime library
  // Uses :deps true which reads from deps.edn (src/enchilada and vendor already in :paths)
  return `{:deps true
 :npm-deps true
 :builds
 {:enchilada-runtime
  {:target :browser
   :output-dir "public/js/runtime"
   :asset-path "/js/runtime"
   :modules {:main {:entries [enchilada]}}
   :compiler-options {:infer-externs :auto
                      :foreign-libs [{:file "externs/arbor.js"}]}}}}`
}

function compileRuntime() {
  const config = generateRuntimeConfig();
  // Write config as shadow-cljs.edn in compiler dir
  const configPath = join(compilerDir, 'shadow-cljs.edn');
  writeFileSync(configPath, config);
  
  console.log('=== Compiling shared runtime (enchilada.core) ===');
  
  const cmd = 'npx shadow-cljs release enchilada-runtime';
  
  try {
    const result = execSync(cmd, {
      cwd: compilerDir,
      encoding: 'utf-8',
      stdio: 'pipe'
    });
    
    // Copy the runtime output to the site's expected location
    const srcRuntime = join(compilerDir, 'public', 'js', 'runtime', 'main.js');
    const destRuntime = join(compilerDir, 'public', 'js', 'enchilada-runtime.js');
    ensureDir(dirname(destRuntime));
    if (existsSync(srcRuntime)) {
      execSync(`cp "${srcRuntime}" "${destRuntime}"`);
      console.log(`  ✓ Runtime compiled and copied to: ${destRuntime}`);
    } else {
      console.log('  ✗ Runtime output not found');
    }
    
    // Save log
    writeFileSync(join(logDir, 'runtime.log'), result);
    return { success: true, status: 'compiled' };
  } catch (e) {
    console.log('  ✗ Runtime compilation failed:', e.message);
    writeFileSync(join(logDir, 'runtime-failure.log'), 
                  `STDOUT:\n${e.stdout || ''}\nSTDERR:\n${e.stderr || ''}\nError: ${e.message}`);
    console.log('  -> Runtime failed. Per-demo builds may fail too, but we continue.');
    return { success: false, status: 'failed', error: e.message };
  }
}

function compileOne(slug) {
  const startTime = Date.now();
  console.log(`\n=== Compiling: ${slug} ===`);
  
  // Check if demo is broken
  const meta = readMeta(slug);
  if (meta && meta.broken) {
    console.log(`  -> Marked as broken/unavailable: ${meta.broken}`);
    writeStub(slug, meta.broken);
    return { slug, success: true, status: 'broken', duration: Date.now() - startTime };
  }
  
  // Check source file exists
  const sourceFile = slugToSource(slug);
  const demoDir = join(demosDir, slug);
  if (!existsSync(sourceFile)) {
    console.log('  -> Source file not found');
    writeStub(slug, 'Source file not found');
    return { slug, success: false, status: 'no-source', duration: Date.now() - startTime };
  }
  
  // Read and parse namespace from the entry file (primary entry point)
  const sourceContent = readFileSync(sourceFile, 'utf-8');
  const demoNs = extractNamespace(sourceContent);
  
  if (!demoNs) {
    console.log('  -> No valid namespace found in source');
    writeStub(slug, 'No (ns ...) form found in source');
    return { slug, success: false, status: 'no-namespace', duration: Date.now() - startTime };
  }
  
  console.log(`  -> Namespace: ${demoNs}`);
  
  try {
    // Step 1: Copy all .cljs files from the demo directory to compiler/src/demos/<slug>/
    // Namespace is preserved as-is; only macro compatibility transformations applied
    copySourceToCompiler(slug, demoDir);
    
    // Step 2: Update deps.edn :paths to include this demo's source dir
    // and write shadow-cljs.edn for this single demo
    updateDepsEdnForDemo(slug);
    const configContent = generateConfigForDemo(slug, demoNs);
    const configPath = join(compilerDir, 'shadow-cljs.edn');
    writeFileSync(configPath, configContent);
    console.log(`  -> Generated config: ${configPath}`);
    
    // Step 3: Compile with shadow-cljs (separate process per demo for isolation)
    console.log('  -> Compiling with shadow-cljs...');
    const cmd = 'npx shadow-cljs release demo';
    
    try {
      const result = execSync(cmd, {
        cwd: compilerDir,
        encoding: 'utf-8',
        stdio: 'pipe'
      });
      
      // Check output file was created
      const outputFile = slugToOutputFile(slug);
      if (existsSync(outputFile)) {
        console.log(`  ✓ Success in ${Date.now() - startTime}ms`);
        ensureDir(logDir);
        writeFileSync(slugToLogFile(slug), result);
        return { slug, success: true, status: 'compiled', duration: Date.now() - startTime };
      } else {
        console.log('  ✗ No output file produced');
        writeStub(slug, 'Compiler produced no output');
        ensureDir(logDir);
        writeFileSync(slugToLogFile(slug), result);
        return { slug, success: false, status: 'no-output', duration: Date.now() - startTime };
      }
      
    } catch (compileError) {
      console.log(`  ✗ Compile failed: ${compileError.message}`);
      const stderr = compileError.stderr || '';
      const stdout = compileError.stdout || '';
      console.log(`  STDERR: ${stderr.substring(0, 500)}`);
      
      // Save full logs
      ensureDir(logDir);
      writeFileSync(slugToLogFile(slug), 
                    `STDOUT:\n${stdout}\n\nSTDERR:\n${stderr}\n\nError: ${compileError.message}`);
      
      // Write stub
      writeStub(slug, 'Build failed - see compile logs');
      return { slug, success: false, status: 'compile-error', duration: Date.now() - startTime };
    }
    
  } catch (error) {
    console.log(`  ✗ Error: ${error.message}`);
    writeStub(slug, error.message);
    return { slug, success: false, status: 'exception', duration: Date.now() - startTime };
  }
}

function compileAll(selectedSlugs) {
  console.log(`=== Per-Demo Compilation Started ===`);
  console.log(`Compiling ${selectedSlugs.length} demos`);
  
  const results = selectedSlugs.map(compileOne);
  
  const successes = results.filter(r => r.success);
  const failures = results.filter(r => !r.success);
  
  console.log('\n=== Compilation Summary ===');
  console.log(`Total: ${results.length}`);
  console.log(`Compiled: ${successes.length}`);
  console.log(`Failed: ${failures.length}`);
  
  return results;
}

function main() {
  const args = process.argv.slice(2);
  const clean = args.includes('--clean') || args.includes('-c');
  const help = args.includes('--help') || args.includes('-h');
  
  if (help) {
    console.log('Usage: node build-demos.mjs [--clean] [--demo <slug>...]');
    console.log('');
    console.log('Options:');
    console.log('  --clean         Remove existing output');
    console.log('  --demo <slug>   Compile only specified demo(s)');
    process.exit(0);
  }
  
  // Parse --demo <slug> flags
  const selectedDemos = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--demo' && args[i + 1]) {
      selectedDemos.push(args[i + 1]);
      i++;
    }
  }
  
  // Clean if requested
  if (clean) {
    console.log('Cleaning output directories...');
    if (existsSync(outputDir)) rmSync(outputDir, { recursive: true });
    if (existsSync(join(compilerDir, 'target'))) rmSync(join(compilerDir, 'target'), { recursive: true });
    if (existsSync(join(compilerDir, 'src', 'demos'))) rmSync(join(compilerDir, 'src', 'demos'), { recursive: true });
    const shadowCache = join(compilerDir, '.shadow-cljs', 'builds', 'demo');
    if (existsSync(shadowCache)) rmSync(shadowCache, { recursive: true });
    ensureDir(outputDir);
    ensureDir(logDir);
  } else {
    ensureDir(outputDir);
    ensureDir(logDir);
  }
  
  // Compile shared runtime first
  // Save original deps.edn (will be modified per-demo)
  saveDepsEdn();
  
  const runtimeResult = compileRuntime();
  if (!runtimeResult.success) {
    console.log('WARNING: Runtime compilation failed. Demos may not load.');
  }
  
  // Determine which demos to compile
  const allSlugs = listSlugs();
  const slugs = selectedDemos.length > 0 
    ? selectedDemos.filter(s => allSlugs.includes(s))
    : allSlugs;
  
  if (slugs.length === 0) {
    restoreDepsEdn();
    process.exit(0);
  }
  
  compileAll(slugs);
  
  // Clean up: restore deps.edn and remove temporary shadow-cljs.edn
  restoreDepsEdn();
  const tempConfig = join(compilerDir, 'shadow-cljs.edn');
  if (existsSync(tempConfig)) {
    rmSync(tempConfig);
}
}

main();