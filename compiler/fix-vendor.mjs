#!/usr/bin/env node
/**
 * Fix vendor source files for modern CLJS compatibility.
 * - :use-macros → :require-macros
 * - :use → :require (with same clause format, :only → :refer)
 * - clojure.core.match.js → clojure.core.match
 */
import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const vendorDir = join(process.cwd(), 'compiler', 'vendor');

function fixFile(filePath) {
  let src = readFileSync(filePath, 'utf-8');
  const original = src;

  // :use-macros → :require-macros
  src = src.replace(/:use-macros/g, ':require-macros');

  // :only → :refer (in [ns :only [syms]] context)
  src = src.replace(/\[(\S+)\s+:only\s+\[([^\]]*)\]\]/g, '[$1 :refer [$2]]');

  // clojure.core.match.js → clojure.core.match
  src = src.replace(/clojure\.core\.match\.js/g, 'clojure.core.match');

  if (src !== original) {
    writeFileSync(filePath, src);
    console.log(`Fixed: ${filePath}`);
  }
}

function fixCljFile(filePath) {
  let src = readFileSync(filePath, 'utf-8');
  const original = src;

  // In .clj files loaded by shadow-cljs: :use → :require
  src = src.replace(/(:\s*use\s+)/, ':require ');

  // :only → :refer
  src = src.replace(/\[(\S+)\s+:only\s+\[([^\]]*)\]\]/g, '[$1 :refer [$2]]');

  if (src !== original) {
    writeFileSync(filePath, src);
    console.log(`Fixed (clj): ${filePath}`);
  }
}

function walkDir(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (entry.name.endsWith('.cljs')) {
      fixFile(fullPath);
    } else if (entry.name.endsWith('.clj')) {
      fixCljFile(fullPath);
    }
  }
}

walkDir(vendorDir);
console.log('Vendor fix complete.');
