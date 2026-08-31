# Phase 0 Dependency Feasibility Spike — Final Report

## Overview

This spike tested whether 13 ClojureScript libraries from ~2014 (used by the
rm-hull gists) can be loaded and compiled under modern **shadow-cljs 3.5.0**
(running on CLJS 1.11.x). Each library was tested at both `:none` (dev,
incremental) and `:advanced` (release) optimization levels. Test namespaces
(`src/spike/*.cljs`) exercise the main entry points and macro imports.

The shadow-cljs.edn uses **one build per library**, each pulling from a
**single deps.edn** with all 13 libraries as direct deps (with exclusions to
avoid version conflicts and unavailable transitive deps).

---

## Results Summary

| # | Library          | Version              | :none         | :advanced   | Warnings | Errors | Root Cause / Notes |
|---|---|---|---|---|---|---|---|
| 1 | **core.async**   | 1.9.865              | ✅ Pass      | ✅ Pass     | 0        | none   | Macros moved from `cljs.core.async.macros` to `cljs.core.async` namespace via `:require-macros`. Modern import works. |
| 2 | **core.logic**   | 1.1.1                | ✅ Pass      | ✅ Pass     | 0        | none   | Macros re-exported via `:refer`. Modern import works. |
| 3 | **priority-map** | 1.2.1                | ✅ Pass      | ✅ Pass     | 0        | none   | No macro issues. |
| 4 | **jayq**         | 2.5.5                | ✅ Pass      | ✅ Pass     | 0        | none   | External JS via npm (jQuery), no CLJS macro issues. |
| 5 | **monet**        | 0.3.0                | ✅ Pass      | ✅ Pass     | 0        | none   | Clean `.cljs` files, no `.clj` macro deps. |
| 6 | **dommy**        | 0.1.4-SNAPSHOT       | ✅ Pass      | ✅ Pass     | 26       | none   | **Circular dependency**: `dommy.attrs` references `dommy.template/->node-like` without requiring `dommy.template`. Warnings only, compilation succeeds. Macros in `.clj` file work via `:require-macros`. |
| 7 | **vomnibus**     | 0.3.2                | ✅ Pass      | ✅ Pass     | 0        | none   | Pure data (color schemes, geo data), no macro/CLOJ deps at compile time. |
| 8 | **om**           | 0.3.0                | ✅ Pass      | ✅ Pass     | 0        | none   | Both `.clj` (macros) + `.cljs` files. Macros via `:require-macros`. `:include-macros true` (gist style) still supported. |
| 9 | **big-bang**     | 0.0.1-SNAPSHOT       | ✅ Pass      | ✅ Pass     | 26       | none   | Inherits dommy's 26 warnings. Uses `:require-macros` for `cljs.core.async.macros` and `dommy.macros`. Compiles cleanly otherwise. |
| 10| **wireframes**   | 0.0.1-SNAPSHOT       | ✅ Pass      | ✅ Pass     | 1        | none   | 1 warning: `parse-double` redefined (now in `cljs.core`). Mix of `.clj`/`.cljs` files; `.cljs` versions exist for all required namespaces. |
| 11| **polyhedra**    | 0.0.1-SNAPSHOT       | ✅ Pass      | ✅ Pass     | 1        | none   | Single `polyhedra/core.cljs`. Inherits wireframes' `parse-double` warning. |
| 12| **c2**           | 0.2.3                | ⚠️ Pass*    | ⚠️ Pass*    | 4        | none (after patch) | **Bug in transitive dep**: `reflex.core` uses `:use-macros [reflex.macros :only [capture-derefed]]`, but `capture-derefed` is a **function** (in `reflex/core.cljs`), not a macro. Verified: after removing that line, c2 compiles at `:none` (4 warnings: 1 `redef` in c2/maths, 3 `protocol-invalid-method` in c2/scale) and `:advanced` (same 4). The `:use` forms in c2 namespaces still work in modern CLJS. |
| 13| **turtle**       | 0.1.11               | ❌ FAIL      | ❌ FAIL     | N/A      | `The required namespace "turtle.core" is not available. "turtle/core.clj" was found on the classpath.` | **Missing CLJS source**: `turtle/core.clj` is Clojure-only (`.clj`). The original project used `lein-dalap` (a Leiningen plugin) to generate a `.cljs` version of `turtle.core` during build. Without that plugin, no CLJS version exists. Additionally, `turtle/renderer/vector.clj` uses the deprecated `{:cljs (ns ...)}` metadata pattern, unsupported in modern CLJS. |

---

## Key Findings

### 1. Macro Namespace Migration (CLJS 0.0-2411 → 1.11)

**core.async**: In the old CLJS, `go`/`go-loop` macros were in `cljs.core.async.macros`.
The gists use `:require [cljs.core.async.macros :as async-macros]` — this **breaks**
in modern CLJS. The macros have been folded into the `cljs.core.async` namespace itself,
loaded via `:require-macros`. The namespace rewriting pass needs to:
- Replace `:require [cljs.core.async.macros :as ...]` → `:require-macros [cljs.core.async.macros :as ...]`
- OR change to `(:require [cljs.core.async :refer [go go-loop]])`

These transformations are applied automatically by `compiler/build-demos.mjs` as a preprocessing step.

**core.logic**: The gists use `:require-macros [cljs.core.logic.macros :refer [...]]`
which still works (the macro namespace still exists, just re-exports from `cljs.core.logic`).
But `(:require [cljs.core.logic :refer [run run* == conde ...]])` also works in modern CLJS.

**om**: Uses `:include-macros true` in `:require` — this is the old-style macro loading
that modern shadow-cljs still supports. Works as-is.

**dommy**: Macros in `.clj` file. Modern `:require-macros [dommy.macros ...]` works, but
the gists use `:require [dommy.macros :only [sel1 node]]` which **breaks**. 

**Resolution**: The namespace rewriting pass transforms these automatically. However,
with the new per-demo compilation architecture (see `compiler/build-demos.mjs`), each
demo is compiled in isolation and gists keep their original namespaces. The macro
rewriting is now handled as a source transformation step before compilation.

### 2. `.clj` Files Without CLJS Equivalents

| Library     | `.clj` file              | CLJS equivalent? | Problem                                    |
|---|---|---|---|
| **turtle**   | `turtle/core.clj`      | No              | No `.cljs` file. `turtle.core` not loadable from CLJS. |
| **turtle**   | `turtle/renderer/vector.clj` | `{:cljs (ns ...)}` | Deprecated metadata pattern, unsupported in modern CLJS. |
| **turtle**   | `turtle/renderer/bitmap.clj` | No        | Clojure-only (STL/OBJ file loaders). |
| **c2**       | `c2/util.clj`           | Yes (`c2/util.cljs`) | Has both — works if reflex bug is fixed. |
| **c2**       | `c2/maths.clj`           | Yes              | Has both — works. |
| **c2**       | `c2/geo/core.clj`        | Yes              | Has both — works. |
| **big-bang** | (internal `.cljs` only) | N/A             | All `.cljs` — compiles fine. |
| **monet**    | (no `.clj` files)       | N/A             | All `.cljs` — compiles fine. |
| **wireframes** | `wireframes/renderer/bitmap.clj` | No   | Clojure-only. Not required by CLJS code paths we tested. |
| **wireframes** | `wireframes/shapes/patch_loader.clj` | No | Clojure-only STL/OBJ loaders. |
| **wireframes** | `wireframes/shapes/stl_loader.clj` | No | Clojure-only. |
| **wireframes** | `wireframes/shapes/wavefront_loader.clj` | No | Clojure-only. |

### 3. Circular Dependencies

**dommy**: `dommy.attrs` uses `dommy.template/->node-like` but doesn't `:require`
`dommy.template`. Meanwhile `dommy.template` requires `dommy.attrs`. This circular
dependency produces 26 "undeclared var" warnings. It compiles at `:none` and `:advanced`
but may have runtime issues in certain code paths.

This affects **big-bang** (which requires `dommy.core`) — it inherits all 26 warnings.

### 4. Renamed/Shadowed Vars

**wireframes**: `wireframes.common/parse-double` clashes with `cljs.core/parse-double`
(added in newer CLJS). Generates a redefinition warning. Same issue affects **polyhedra**
(which transitively requires `wireframes.common`).

### 5. Version Conflicts

The deps.edn resolves these versions (with manual exclusions to prevent conflicts):
- `core.async` 1.9.865 (gists expect old alpha, but API is largely compatible)
- `core.match` 0.2.0-alpha12 (transitive from c2 — old, but on classpath)
- `om` 0.3.0 depends on React 0.8.0.1 — excluded (runtime JS concern, not compile-time)
- `core.rrb-vector` 0.0.11 (transitive from wireframes — added explicitly)

---

## Vendoring Recommendations

Based on the findings, libraries that need vendoring/patching before gist compilation:

### Requires Vendoring + Patching

| Library | File to patch | Change needed |
|---|---|---|
| **turtle** → `vendor/turtle/` | Add `turtle/core.cljs` | Port `turtle/core.clj` functions to CLJS (or use the `lein-dalap` generated output) |
| **turtle** → `vendor/turtle/` | Replace `turtle/renderer/vector.clj` | Use standard `ns` form instead of `{:cljs (ns ...)}` metadata |
| **c2** → `vendor/c2/` | Patch `reflex/core.cljs` (vendored as dep) | Remove `(:use-macros [reflex.macros :only [capture-derefed]])` line. `capture-derefed` is a function, not a macro. Verified: c2 compiles at `:none` and `:advanced` after this single-line fix. `:use` forms in c2 namespaces are fine.

### Requires Source Preprocessing Only (no vendoring)

| Library | Transformation needed |
|---|---|
| **core.async** | `:require [cljs.core.async.macros ...]` → `:require-macros [cljs.core.async.macros ...]` |
| **dommy** | `:require [dommy.macros ...]` → `:require-macros [dommy.macros ...]` |

These transformations are applied automatically by `compiler/build-demos.mjs` as a preprocessing step before compilation.

### No Action Needed

- core.logic, priority-map, jayq, monet, vomnibus, om, big-bang, wireframes, polyhedra —
  compile at both `:none` and `:advanced` with only warnings (no errors).

### Requires 1-Line Patch Only

- **c2**: Patch `reflex/core.cljs` (vendored). Remove the `:use-macros` line referencing
  the non-existent `capture-derefed` macro. After this, c2 compiles at `:none` and
  `:advanced` with only 4 warnings (protocol method signatures, `redef`).
