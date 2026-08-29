#!/usr/bin/env node
/**
 * Phase 4a: Namespace re-writer for per-demo ClojureScript gists.
 *
 * For each demos/<slug>/:
 *   - Finds all *.cljs files
 *   - Rewrites internal namespace declarations to demo.<slug>.<original-leaf>
 *   - Rewrites :require/:use references to match mapped names
 *   - Migrates old-style macro requires (:require → :require-macros)
 *   - Migrates deprecated :only → :refer
 *   - Merges multiple :require forms into one
 *   - Fixes parameter names that incorrectly capture namespace names
 *   - Writes to compiler/src/demo/<slug>/<filename>.cljs (preserves structure)
 *
 * Run from repo root: node compiler/rewrite-demos.mjs
 */

import { readFileSync, readdirSync, mkdirSync, writeFileSync, rmSync } from 'fs';
import { join } from 'path';

const gistsDir = process.cwd();
const demosDir = join(gistsDir, 'demos');
const outputDir = join(gistsDir, 'compiler', 'src', 'demo');

const macroOnlyNamespaces = new Set([
  'cljs.core.async.macros',
  'dommy.macros',
  'cljs.core.async.macros',
  'dommy.macros',
  'c2.util',
  'clojure.core.logic.macros',
  'om.core.macros'
]);

const nsRemappings = [
  ['cljs.core.logic.macros', 'cljs.core.logic'],
];

const removedVars = new Set(['*occurs-check*']);

const compatDefs = `
;; Compatibility: *occurs-check* was removed in core.logic 1.1.1
(def ^:dynamic *occurs-check* true)
`;

function isExternalNs(nsName) {
  const externalPrefixes = [
    'clojure.', 'cljs.', 'goog.',
    'enchilada', 'monet', 'jayq', 'dommy', 'c2',
    'om', 'vomnibus', 'big-bang',
    'wireframes', 'polyhedra',
    'cljs-dataview', 'priority-map',
    'singult', 'react', 'three', 'hipo',
    'hiccup', 'core.async', 'core.logic', 'core.match'
  ];

  for (const prefix of externalPrefixes) {
    if (nsName === prefix) return true;
    if (nsName.startsWith(prefix + '.')) {
      const remaining = nsName.slice(prefix.length + 1);
      const nextSeg = remaining.split('.')[0];
      if ((prefix === 'polyhedra' && nextSeg === 'examples') ||
          (prefix === 'big-bang' && nextSeg === 'examples') ||
          (prefix === 'wireframes' && nextSeg === 'shapes')) {
        return false;
      }
      return true;
    }
  }
  return false;
}

function extractNs(source) {
  const match = source.match(/\(ns\s+([^\)\s]+)/);
  return match ? match[1] : null;
}

/**
 * Build a mapping of internal namespaces to demo-scoped names.
 * Clojure namespace names can contain hyphens, which map to underscores in file paths.
 * For simplicity, we use underscores in the namespace itself.
 */
function buildNsMap(slug, allNsNames, sourceNs) {
  const nsMap = new Map();
  let mainNs = sourceNs;
  const slugNs = slug; // Use dashes in namespace names (Clojure convention)

  if (!mainNs) {
    for (const nsName of allNsNames) {
      if (nsName === null) continue;
      if (!isExternalNs(nsName)) {
        mainNs = nsName;
        break;
      }
    }
  }

  for (const nsName of allNsNames) {
    if (nsName === null) continue;
    const isSrcNs = (nsName === sourceNs);
    if (isSrcNs) {
      nsMap.set(nsName, `demo.${slugNs}.core`);
      continue;
    }
    if (isExternalNs(nsName)) continue;
    if (nsName === mainNs) {
      nsMap.set(nsName, `demo.${slugNs}.core`);
    } else {
      const nsLeaf = nsName.split('.').pop();
      nsMap.set(nsName, `demo.${slugNs}.${nsLeaf}`);
    }
  }
  return nsMap;
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function fixUnclosedParens(source) {
  let paren = 0, bracket = 0, brace = 0;
  let inString = false, inComment = false, inChar = false;

  for (let i = 0; i < source.length; i++) {
    const c = source[i];
    if (inComment) { if (c === '\n') inComment = false; continue; }
    if (inChar) { inChar = false; continue; }
    if (inString) {
      if (c === '\\') { inChar = true; continue; }
      if (c === '"') inString = false;
      continue;
    }
    if (c === ';') { inComment = true; continue; }
    if (c === '"') { inString = true; continue; }
    if (c === '\\') { inChar = true; continue; }
    if (c === '(') paren++;
    else if (c === ')') paren--;
    else if (c === '[') bracket++;
    else if (c === ']') bracket--;
    else if (c === '{') brace++;
    else if (c === '}') brace--;
  }

  let closers = '';
  for (let j = 0; j < brace; j++) closers += '}';
  for (let j = 0; j < bracket; j++) closers += ']';
  for (let j = 0; j < paren; j++) closers += ')';

  if (closers) {
    console.log(`  [fix] Appended ${closers} to fix unclosed brackets`);
    return source + '\n' + closers;
  }
  return source;
}

function findNsFormBounds(source, start) {
  let depth = 0;
  let inStr = false, inComment = false, inChar = false;

  for (let i = start; i < source.length; i++) {
    const c = source[i];
    if (inComment) { if (c === '\n') inComment = false; continue; }
    if (inChar) { inChar = false; continue; }
    if (inStr) {
      if (c === '\\') { inChar = true; continue; }
      if (c === '"') inStr = false;
      continue;
    }
    if (c === ';') { inComment = true; continue; }
    if (c === '"') { inStr = true; continue; }
    if (c === '\\') { inChar = true; continue; }
    if (c === '(') depth++;
    else if (c === ')') {
      depth--;
      if (depth === 0) return { start, end: i + 1 };
    }
  }
  return null;
}

/**
 * Find a balanced [...] segment starting at or after position `start` in `text`.
 * Returns {content, start, end} or null.
 */
function findBalancedBracket(text, start) {
  const bracketStart = text.indexOf('[', start);
  if (bracketStart === -1) return null;
  let depth = 1;
  let inStr = false, inComment = false, inChar = false;
  for (let i = bracketStart + 1; i < text.length; i++) {
    const c = text[i];
    if (inComment) { if (c === '\n') inComment = false; continue; }
    if (inChar) { inChar = false; continue; }
    if (inStr) {
      if (c === '\\') { inChar = true; continue; }
      if (c === '"') inStr = false;
      continue;
    }
    if (c === ';') { inComment = true; continue; }
    if (c === '"') { inStr = true; continue; }
    if (c === '\\') { inChar = true; continue; }
    if (c === '[') depth++;
    else if (c === ']') {
      depth--;
      if (depth === 0) return { content: text.slice(bracketStart + 1, i), start: bracketStart, end: i + 1 };
    }
  }
  return null;
}

/**
 * Only rewrite namespace names inside the ns declaration form.
 * This avoids clobbering parameter names or other identifiers
 * that happen to match a namespace name.
 */
function rewriteNSDeclsOnly(source, nsMap) {
  let result = source;
  const nsFormStart = result.search(/^\s*\(ns\s+/m);
  if (nsFormStart === -1) return result;

  const bounds = findNsFormBounds(result, nsFormStart);
  if (!bounds) return result;

  const nsForm = result.slice(bounds.start, bounds.end);
  const parts = nsForm.split(/(:use|:require|:require-macros|:import|:use-macros)/g);

  // parts[0] is the first part before any keyword
  // parts[1], parts[3], parts[5]... are the keywords
  // parts[2], parts[4], parts[6]... are the content after each keyword

  let newNsForm = '';
  for (let i = 0; i < parts.length; i += 2) {
    if (i === 0) {
      // The initial part: (ns some-namespace ...
      // Rewrite the namespace name itself
      let part = parts[i];
      const nsMatch = part.match(/^(\s*\(\s*ns\s+)([^\s]+)/);
      if (nsMatch) {
        const oldNs = nsMatch[2];
        if (nsMap.has(oldNs)) {
          part = part.replace(oldNs, nsMap.get(oldNs));
        }
      }
      newNsForm += part;
    } else {
      // Content after a keyword (like :require)
      newNsForm += parts[i];
    }
    if (i + 1 < parts.length) {
      // This was a keyword
      newNsForm += parts[i + 1];
    }
  }

  // Also need to handle :only -> :refer and :use -> :require inside ns form
  // These transformations need to happen on the ns form content

  result = result.slice(0, bounds.start) + newNsForm + result.slice(bounds.end);
  return result;
}

function rewriteSource(source, nsMap) {
  let result = source;

  // Step 0: Fix unclosed parens
  result = fixUnclosedParens(result);

  // Step 1: Rewrite ns declaration namespace name
  const oldNs = extractNs(result);
  if (oldNs && nsMap.has(oldNs)) {
    const newNs = nsMap.get(oldNs);
    result = result.replace(/\(ns\s+[^\)\s]+/, `(ns ${newNs}`);
  }

  // Step 2: Rewrite internal namespace references - ONLY in the ns form
  // This is critical to avoid clobbering parameter names that match ns names
  const nsFormStart = result.search(/^\s*\(ns\s+/m);
  if (nsFormStart !== -1) {
    const bounds = findNsFormBounds(result, nsFormStart);
    if (bounds) {
      const nsForm = result.slice(bounds.start, bounds.end);
      let rewrittenNsForm = nsForm;

      // Replace namespace references inside [oldNs ...] patterns in the ns form only
      for (const [oldNs, newNs] of nsMap) {
        const pattern = new RegExp(`\\[${escapeRegex(oldNs)}\\s`, 'g');
        rewrittenNsForm = rewrittenNsForm.replace(pattern, (match) =>
          match.replace(oldNs, newNs)
        );
        const pattern2 = new RegExp(`\\[${escapeRegex(oldNs)}\\]`, 'g');
        rewrittenNsForm = rewrittenNsForm.replace(pattern2, `[${newNs}]`);
      }

      result = result.slice(0, bounds.start) + rewrittenNsForm + result.slice(bounds.end);
    }
  }

  // Step 3: Convert :use to :require (in the ns form)
  result = result.replace(
    /:use\s*\[([^\]]+)\]/g,
    (match, inner) => `:require [${inner}]`
  );

  // Step 3b: Convert :use-macros -> :require-macros
  result = result.replace(/:use-macros/, ':require-macros');

  // Step 4: Migrate :only → :refer
  result = result.replace(/\[(\S+)\s+:only\s+\[([^\]]*)\]\]/g, '[$1 :refer [$2]]');

  // Step 5: Apply namespace remappings (e.g. cljs.core.logic.macros → cljs.core.logic)
  for (const [oldName, newName] of nsRemappings) {
    const pattern = new RegExp(`\\[${escapeRegex(oldName)}\\s`, 'g');
    result = result.replace(pattern, (match) => match.replace(oldName, newName));
    const pattern2 = new RegExp(`\\[${escapeRegex(oldName)}\\]`, 'g');
    result = result.replace(pattern2, `[${newName}]`);
  }

  // Step 6: Convert macro-only :require to :require-macros
  for (const macroNs of macroOnlyNamespaces) {
    const pattern = new RegExp(`(:require\\s*\\[${escapeRegex(macroNs)}\\s)`, 'g');
    result = result.replace(pattern, (match) => match.replace(':require', ':require-macros'));
  }

  // Step 6b: Handle cljs.core.async.macros - merge its vars into cljs.core.async
  // In modern ClojureScript, core.async macros (go, alt!, etc.) are part of cljs.core.async
  // not a separate cljs.core.async.macros namespace
  {
    const asyncMacrosNs = 'cljs.core.async.macros';

    // Find and extract vars from [cljs.core.async.macros :as m :refer [vars]] blocks
    const reMacrosAs = new RegExp(
      '\\[' + '(' + escapeRegex(asyncMacrosNs) + ')' + '\\s+:as\\s+\\S+\\s+:refer\\s+\\[([^\\]]*)\\]\\]',
      'g'
    );
    const reMacrosRefer = new RegExp(
      '\\[' + '(' + escapeRegex(asyncMacrosNs) + ')' + '\\s+:refer\\s+\\[([^\\]]*)\\]\\]',
      'g'
    );
    const reMacrosBare = new RegExp(
      '\\[' + '(' + escapeRegex(asyncMacrosNs) + ')' + '\\s*\\]',
      'g'
    );

    const asyncMacrosVars = [];

    result = result.replace(reMacrosAs, (match, ns, vars) => {
      const v = vars.trim().split(/\\s+/).filter(Boolean);
      asyncMacrosVars.push(...v);
      return '';
    });

    result = result.replace(reMacrosRefer, (match, ns, vars) => {
      const v = vars.trim().split(/\\s+/).filter(Boolean);
      asyncMacrosVars.push(...v);
      return '';
    });

    result = result.replace(reMacrosBare, '');

    // Remove empty :require-macros or :require clauses left behind
    // e.g. (:require-macros ) or (:require )
    result = result.replace(/\(:require-macros\s*\)/g, '');
    result = result.replace(/\(:require\s*\)/g, '');

    // Add extracted vars to cljs.core.async require
    if (asyncMacrosVars.length > 0) {
      const asyncNs = 'cljs.core.async';

      // Pattern: [cljs.core.async :refer [existing-vars]]
      const reAsyncRefer = new RegExp(
        '(' + escapeRegex(asyncNs) + ')' + '\\s+:refer\\s+\\[([^\\]]*)\\]',
        'g'
      );
      let asyncAlreadyRefer = false;
      result = result.replace(reAsyncRefer, (match, ns, existingVars) => {
        asyncAlreadyRefer = true;
        const existingSet = new Set(existingVars.trim().split(/\\s+/).filter(Boolean));
        const newVars = asyncMacrosVars.filter(v => !existingSet.has(v));
        if (newVars.length > 0) {
          return ns + ' :refer [' + existingVars + ' ' + newVars.join(' ') + ']';
        }
        return match;
      });

      // Pattern: [cljs.core.async] without :refer
      const reAsyncBare = new RegExp(
        '\\[' + '(' + escapeRegex(asyncNs) + ')' + '\\s*\\]',
        'g'
      );
      result = result.replace(reAsyncBare, (match) => {
        return '[' + asyncNs + ' :refer [' + asyncMacrosVars.join(' ') + ']]';
      });

      // If cljs.core.async not found at all, add it before the closing paren
      if (!asyncAlreadyRefer && !result.includes(asyncNs)) {
        result = result.replace(/(:require\s*\[[^\]]*\])/, '$1 [' + asyncNs + ' :refer [' + asyncMacrosVars.join(' ') + ']]');
      }
    }
  }

  // Step 7: Remove references to vars that no longer exist
  for (const varName of removedVars) {
    result = result.replace(
      new RegExp(`(:refer\\s+\\[)([^\\]]*?)(?:${escapeRegex(varName)})([^\\]]*?)\\]`, 'g'),
      (match, prefix, before, after) => {
        let refs = (before + after).trim().replace(/\s+/g, ' ');
        return `${prefix}${refs}]`;
      }
    );
  }

  // Step 8: Append compatibility definitions if needed
  for (const varName of removedVars) {
    if (result.includes(varName)) {
      result += compatDefs;
    }
  }

  // Step 9: Fix jayq pattern - wrap fn vars in calls
  const jayqFnVars = ['canvas', 'svg', 'webgl', 'console-el', 'error-div',
    'canvas-area', 'webgl-area', 'svg-area', 'console'];
  const jayqWrapPattern = new RegExp(
    `\\((show|hide|add-class!|remove-class!|toggle-class!|show!|hidden\\?)\\s+(${jayqFnVars.join('|')})\\)`,
    'g'
  );
  result = result.replace(jayqWrapPattern, (match, fn, varName) => `(${fn} (${varName}))`);

  // Step 10: Replace unqualified show/hide with enchilada.core versions
  result = result.replace(/(?<!\.)\(show\s+/g, '(enchilada.core/show ');
  result = result.replace(/(?<!\.)\(hide\s+/g, '(enchilada.core/hide ');

  // Step 11: Fix monet.canvas calls - wrap ctx in call
  const monetCanvasFns = ['translate', 'rotate', 'save', 'restore', 'begin-path', 'end-path',
    'move-to', 'line-to', 'bezier-curve-to', 'stroke', 'fill',
    'fill-style', 'stroke-style', 'fill-rect', 'composition-operation',
    'circle'];
  for (const fn of monetCanvasFns) {
    result = result.replace(
      new RegExp(`\\((${fn})\\s+ctx\\b`, 'g'),
      '($1 (ctx)'
    );
  }

  // Step 12: Merge multiple :require forms in ns declaration
  const nsStart = result.search(/^\s*\(ns\s+/m);
  if (nsStart !== -1) {
    const bounds = findNsFormBounds(result, nsStart);
    if (bounds) {
      const nsForm = result.slice(bounds.start, bounds.end);

      // Find all :require/:require-macros [...] clauses with balanced brackets
      const reqClauses = [];
      let pos = 0;
      const keywords = [':require-macros', ':require'];
      while (pos < nsForm.length) {
        let foundIdx = -1;
        let foundKw = '';
        for (const kw of keywords) {
          const idx = nsForm.indexOf(kw, pos);
          if (idx !== -1 && (foundIdx === -1 || idx < foundIdx)) {
            foundIdx = idx;
            foundKw = kw;
          }
        }
        if (foundIdx === -1) break;

        // Make sure it's a keyword boundary
        const beforeChar = foundIdx > 0 ? nsForm[foundIdx - 1] : ' ';
        if (beforeChar !== ' ' && beforeChar !== '\n' && beforeChar !== '\t' && beforeChar !== '(') {
          pos = foundIdx + 1;
          continue;
        }

        // Find the full (:require [:ns ...] [ns ...]) clause by tracking depth
        // from the opening paren. The findBalancedBracket only finds the first [...]
        // block, but a :require clause can contain multiple [ns ...] sub-forms.
        let fullStart = foundIdx;
        let hasParen = false;
        if (foundIdx > 0 && nsForm[foundIdx - 1] === '(') {
          fullStart = foundIdx - 1;
          hasParen = true;
        }
        let fullEnd;
        if (hasParen) {
          // Scan from fullStart, tracking both paren and bracket depth
          let depth = 0;
          let bracketDepth = 0;
          for (let i = fullStart; i < nsForm.length; i++) {
            const ch = nsForm[i];
            if (ch === '[') bracketDepth++;
            else if (ch === ']') bracketDepth--;
            else if (ch === '(') depth++;
            else if (ch === ')') {
              depth--;
              if (depth === 0) { fullEnd = i + 1; break; }
            }
          }
        } else {
          const br = findBalancedBracket(nsForm, foundIdx);
          if (!br) { pos = foundIdx + 1; continue; }
          fullEnd = br.end;
        }
        
        // Collect all [ns ...] blocks inside the clause as the content
        // Each block is a full [ns :refer [syms]] form including its brackets
        let allContent = nsForm.slice(fullStart + 1, fullEnd - 1);
        const subBlocks = [];
        let p = 0;
        while (p < allContent.length) {
          const bi = allContent.indexOf('[', p);
          if (bi === -1) break;
          // Find matching ] with proper depth tracking
          let bd = 1;
          let be = bi + 1;
          for (let i = bi + 1; i < allContent.length; i++) {
            if (allContent[i] === '[') bd++;
            else if (allContent[i] === ']') { bd--; if (bd === 0) { be = i + 1; break; } }
          }
          subBlocks.push(allContent.slice(bi, be));
          p = be;
        }
        const content = subBlocks.join(' ');
        reqClauses.push({
          full: nsForm.slice(fullStart, fullEnd),
          content: content,
          keyword: foundKw
        });
        pos = fullEnd;
      }

      // Collect plain :require and :require-macros clauses separately
      const plainReqs = reqClauses.filter(c => c.keyword === ':require');
      const macroReqs = reqClauses.filter(c => c.keyword === ':require-macros');
      
      // Build the new ns form
      // Extract namespace name
      const nsNameMatch = nsForm.match(/^\s*\(\s*ns\s+([^\s)]+)/m);
      if (nsNameMatch) {
        const nsName = nsNameMatch[1];
        
        // Build the new require forms
        let requireForms = '';
        
        // Merge all plain :require clauses into one
        if (plainReqs.length > 1) {
          const allRequires = plainReqs.map(c => c.content).join(' ');
          requireForms += ':\n  (:require ' + allRequires.replace(/^:\s*/, '') + ')';
        } else if (plainReqs.length === 1) {
          requireForms += '\\n  ' + plainReqs[0].full;
        }
        
        // Keep :require-macros clauses as-is (don't merge them)
        for (const mr of macroReqs) {
          requireForms += ':\n  ' + mr.full;
        }
        
        // Extract any other content in the ns form (like :import) that's not a :require clause
        let otherContent = nsForm;
        for (const rc of reqClauses) {
          const idx = otherContent.indexOf(rc.full);
          if (idx !== -1) {
            otherContent = otherContent.slice(0, idx) + otherContent.slice(idx + rc.full.length);
          }
        }
        // Clean up: remove the ns name part and closing paren
        otherContent = otherContent.replace(/^\s*\(\s*ns\s+\S+/, '').trim();
        // Remove trailing closing paren
        otherContent = otherContent.replace(/\)\s*$/, '').trim();
        
        // Construct the new ns form
        let newForm = `(ns ${nsName}\n  (:require ${plainReqs.length > 1 ? plainReqs.map(c => c.content).join(' ') : ''}`;
        
        // Actually, let me take a simpler approach - reconstruct the ns form
        // Start fresh
        let newNsForm = '(ns ' + nsName;
        
        // Add merged :require if any
        if (plainReqs.length > 0) {
          const allReqs = plainReqs.map(c => c.content).join(' ');
          newNsForm += '\n  (:require ' + allReqs + ')';
        }
        
        // Add :require-macros clauses
        for (const mr of macroReqs) {
          // Extract just the inner content of the :require-macros clause
          newNsForm += '\n  (:require-macros ' + mr.content + ')';
        }
        
        // Add any remaining clauses (like :import)
        if (otherContent) {
          // Split by clauses - find (:import ...) etc
          const otherMatch = otherContent.match(/\(:\w+[^()]*\)/g);
          if (otherMatch) {
            for (const om of otherMatch) {
              newNsForm += '\n  ' + om.trim();
            }
          }
        }
        
        newNsForm += ')';
        
        result = result.slice(0, bounds.start) + newNsForm + result.slice(bounds.end);
      }
    }
  }

  return result;
}

function processDemos() {
  const demoEntries = readdirSync(demosDir, { withFileTypes: true })
    .filter(d => d.isDirectory());

  rmSync(outputDir, { recursive: true, force: true });
  mkdirSync(outputDir, { recursive: true });

  let count = 0;
  const errors = [];
  const modules = {};

  for (const entry of demoEntries) {
    const slug = entry.name;
    const demoDir = join(demosDir, slug);

    let broken = false;
    try {
      const meta = JSON.parse(readFileSync(join(demoDir, 'meta.json'), 'utf-8'));
      if (meta.broken) broken = true;
    } catch (e) {
      broken = true;
    }

    const slugNs = slug; // Use dashes in namespace names (Clojure convention)
    const slugDir = slug.replace(/-/g, '_'); // Underscores for directory/file paths

    if (broken) {
      const stubNs = `demo.${slugNs}.core`;
      const stubDir = join(outputDir, slugDir);
      mkdirSync(stubDir, { recursive: true });
      const stubContent = `(ns ${stubNs})\n;; Stub: demo "${slug}" is broken/unavailable\n`;
      writeFileSync(join(stubDir, 'core.cljs'), stubContent);
      modules[slug] = { entries: [stubNs] };
      continue;
    }

    let cljsFiles = [];
    try {
      const allFiles = readdirSync(demoDir);
      cljsFiles = allFiles.filter(f => f.endsWith('.cljs'));
    } catch (e) {
      errors.push(`${slug}: ${e.message}`);
      continue;
    }

    const allNsNames = [];
    let sourceNs = null;
    for (const file of cljsFiles) {
      const source = readFileSync(join(demoDir, file), 'utf-8');
      const nsName = extractNs(source);
      if (nsName) {
        allNsNames.push(nsName);
        if (file === 'source.cljs') {
          sourceNs = nsName;
        }
      }
    }

    const nsMap = buildNsMap(slug, allNsNames, sourceNs);
    let mainNs = null;
    const demoOutDir = join(outputDir, slugDir);
    mkdirSync(demoOutDir, { recursive: true });

    for (const file of cljsFiles) {
      const source = readFileSync(join(demoDir, file), 'utf-8');
      const oldNs = extractNs(source);
      if (!oldNs) continue;

      const rewritten = rewriteSource(source, nsMap);
      const newNs = nsMap.has(oldNs) ? nsMap.get(oldNs) : oldNs;

      const nsLeaf = newNs.split('.').pop().replace(/-/g, '_');
      const outFile = `${nsLeaf}.cljs`;
      writeFileSync(join(demoOutDir, outFile), rewritten);
      count++;

      if (file === 'source.cljs') {
        mainNs = newNs;
      }
    }

    if (!mainNs && allNsNames.length > 0) {
      const firstNs = allNsNames[0];
      mainNs = nsMap.has(firstNs) ? nsMap.get(firstNs) : firstNs;
    }

    if (mainNs) {
      modules[slug] = { entries: [mainNs] };
    }
  }

  console.log(`Rewrote ${count} source files to ${outputDir}`);
  if (errors.length > 0) {
    console.error(`${errors.length} errors:`, errors);
  }

  return modules;
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const modules = processDemos();
  writeFileSync(
    join(gistsDir, 'compiler', 'demo-modules.json'),
    JSON.stringify(modules, null, 2) + '\n'
  );
  console.log(`Generated demo-modules.json with ${Object.keys(modules).length} modules`);
}

export { processDemos };
