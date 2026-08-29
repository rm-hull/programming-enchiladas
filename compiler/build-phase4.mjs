#!/usr/bin/env node
/**
 * Phase 4: Full shadow-cljs compilation pipeline for per-demo JS bundles.
 *
 * Steps:
 *   1. Run fetcher/fetch-gists.mjs to fetch/update demo sources
 *   2. Run compiler/rewrite-demos.js to rewrite namespaces + generate module map
 *   3. Run compiler/gen-shadow-config.js to generate shadow-cljs.edn
 *   4. Run shadow-cljs compile :demos to produce per-demo JS bundles
 *   5. Copy compiled JS to site/public/js/
 *
 * Usage: node compiler/build-phase4.mjs
 */

import { execSync, spawnSync } from 'child_process';
import { mkdirSync, cpSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

const repoRoot = process.cwd();

function log(msg) {
  console.log(`\x1b[36m[Phase 4]\x1b[0m ${msg}`);
}

function exec(cmd, opts = {}) {
  log(`Running: ${cmd}`);
  return execSync(cmd, { stdio: 'inherit', cwd: repoRoot, ...opts });
}

try {
  // Step 1: Fetch gists (uses GH_TOKEN if available)
  log('Step 1: Fetching gists');
  exec('node fetcher/fetch-gists.mjs', { cwd: repoRoot });

  // Step 2: Rewrite demo namespaces
  log('Step 2: Rewriting demo namespaces');
  exec('node compiler/rewrite-demos.mjs', { cwd: repoRoot });

  // Step 3: Generate shadow-cljs config
  log('Step 3: Generating shadow-cljs.edn');
  exec('node compiler/gen-shadow-config.mjs', { cwd: repoRoot });

  // Step 4: Compile with shadow-cljs
  log('Step 4: Compiling demos with shadow-cljs');
  exec('npx shadow-cljs compile demos', { cwd: join(repoRoot, 'compiler') });

  // Step 5: Copy compiled JS to site
  log('Step 5: Copying compiled JS to site/public/js/generated/');
  const srcJsDir = join(repoRoot, 'compiler', 'public', 'js');
  const destRootJsDir = join(repoRoot, 'site', 'public', 'js');
  const destGenJsDir = join(destRootJsDir, 'generated');
  
  if (existsSync(srcJsDir)) {
    mkdirSync(destGenJsDir, { recursive: true });
    
    // Copy only the demo bundle JS files + main.js to generated/
    const filesToCopy = readdirSync(srcJsDir).filter(f => f.endsWith('.js'));
    for (const file of filesToCopy) {
      cpSync(join(srcJsDir, file), join(destGenJsDir, file));
    }
    // Copy cljs-runtime to the root /js/ directory (shared by all demos)
    const cljsRuntimeSrc = join(srcJsDir, 'cljs-runtime');
    if (existsSync(cljsRuntimeSrc)) {
      cpSync(cljsRuntimeSrc, join(destRootJsDir, 'cljs-runtime'), { recursive: true });
    }
    // Copy manifest to generated/ (needed for module loading)
    const manifestSrc = join(srcJsDir, 'manifest.edn');
    if (existsSync(manifestSrc)) {
      cpSync(manifestSrc, join(destGenJsDir, 'manifest.edn'));
    }
    
    log(`Copied ${filesToCopy.length} JS bundles + cljs-runtime to site/public/js/`);
    log(`  - main.js + demo bundles -> /js/generated/`);
    log(`  - cljs-runtime -> /js/cljs-runtime/`);
    
    // List generated demo files
    const demoFiles = filesToCopy.filter(f => f !== 'main.js');
    log(`Generated ${demoFiles.length} demo bundles: ${demoFiles.slice(0, 5).join(', ')}...`);
  }

  log('Phase 4 complete!');
} catch (e) {
  console.error('\x1b[31m[Phase 4 FAILED]\x1b[0m');
  console.error(e.message);
  process.exit(1);
}
