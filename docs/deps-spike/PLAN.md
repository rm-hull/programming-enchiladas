# Phase 0 — Dependency Feasibility Spike: Plan

## Objective

Determine whether 13 ClojureScript libraries from ~2014 era (used by rm-hull's
gists) can be loaded and compiled under modern shadow-cljs (CLJS 1.11.x). Identify
all blockers, compatibility issues, and required workarounds before building the
gist-to-shadow-cljs recompiler pipeline (Phases 1-5).

## Phase 0 Completed — Key Results

### ✅ Compiles Cleanly (0 errors, 0-1 warnings)
- **core.async** 1.9.865 — `:none` ✅, `:advanced` ✅, 0 warnings
- **core.logic** 1.1.1 — `:none` ✅, `:advanced` ✅, 0 warnings
- **priority-map** 1.2.1 — `:none` ✅, `:advanced` ✅, 0 warnings
- **jayq** 2.5.5 — `:none` ✅, `:advanced` ✅, 0 warnings
- **monet** 0.3.0 — `:none` ✅, `:advanced` ✅, 0 warnings
- **vomnibus** 0.3.2 — `:none` ✅, `:advanced` ✅, 0 warnings
- **om** 0.3.0 — `:none` ✅, `:advanced` ✅, 0 warnings
- **polyhedra** 0.0.1-SNAPSHOT — `:none` ✅, `:advanced` ✅, 1 warning

### ⚠️ Compiles With Warnings (0 errors)
- **dommy** 0.1.4-SNAPSHOT — 26 warnings (circular dep: attrs↔template)
- **big-bang** 0.0.1-SNAPSHOT — 26 warnings (inherited from dommy)
- **wireframes** 0.0.1-SNAPSHOT — 1 warning (parse-double redefinition)

### ⚠️ Compiles After 1-Line Patch (4 warnings)
- **c2** 0.2.3 — Patch `reflex/core.cljs`: remove bogus `:use-macros` line.
  After patch: 4 warnings (protocol methods, redef), 0 errors.

### ❌ Blocked — Needs Vendoring (2-4 hrs)
- **turtle** 0.1.11 — `turtle/core.clj` is JVM-only, no `.cljs` equivalent.
  Need to generate CLJS version (original project used `lein-dalap`).
  Also `turtle/renderer/vector.clj` uses deprecated `{:cljs (ns ...)}` metadata.

## Phase 1 — Toolchain Setup (Estimated: 2-3 days)

### 1a. deps.edn Configuration
- Single deps.edn with all 13 libraries as direct deps
- Exclusions: exclude unavailable/unparseable transitive deps (gloss, potemkin, etc.)
- Add missing deps explicitly (core.rrb-vector, cljs-dataview)
- See `/tmp/deps-spike/deps.edn` for the working configuration

### 1b. shadow-cljs.edn Configuration
- One build per library, each targeting a test namespace
- Foreign lib config for jQuery (jayq), React (om) — runtime JS deps
- See `/tmp/deps-spike/shadow-cljs.edn` for the working configuration

## Phase 2 — Namespace Rewriting (Estimated: 2-3 days)

### 2a. Macro Import Migration
Gists from the 2014 era use old-style macro imports that don't work in modern CLJS:

| Library      | Old gist style (BROKEN) | Modern style (WORKS) |
|---|---|---|
| core.async   | `(:require [cljs.core.async.macros :as am :refer [go]])` | `(:require-macros [cljs.core.async.macros :refer [go]])` |
| dommy        | `(:require [dommy.macros :only [sel1 node]])` | `(:require-macros [dommy.macros :refer [sel1 node]])` |
| core.logic   | `(:require-macros [cljs.core.logic.macros :refer [...]])` | Works as-is (re-exports exist) |
| om           | `(:require [om.core :as om :include-macros true])` | Works as-is (`:include-macros` still supported) |

**Rewrite rule**: For any `:require` form that references a `.clj` macro namespace,
convert to `:require-macros`.

### 2b. `:use` → `:require :refer`
Some libraries (c2) use `:use` in their ns forms. This is deprecated but still works.
No action needed for compilation. The gists themselves don't use `:use` in their
namespace declarations (they use `:require`).

### 2c. Old `clojure.core` → `cljs.core` Migration
Gists may use `clojure.core` namespaces that don't exist in CLJS. Common patterns:
- `clojure.string` → works in CLJS
- `clojure.set` → works in CLJS
- `clojure.walk` → works in CLJS
- `clojure.data` → works in CLJS
- `clojure.core` vars → CLJS has most, but some are missing

## Phase 3 — Gist Fetching & Analysis (Estimated: 1-2 days)

### 3a. Fetch Library Gists
13 libraries, ~20 gists total (some libraries have multiple gist variants).
Fetch from: https://gist.github.com/rm-hull/<gist-id>

### 3b. Parse and Analyze Gist Code
- Extract namespace declarations, `:require` forms, and top-level function calls
- Identify which libraries each gist uses
- Flag gists that use blocked libraries (turtle, c2-without-reflex-patch)
- Flag gists with old-style macro imports (need rewriting)

## Phase 4 — Compilation Pipeline (Estimated: 3-5 days)

### 4a. Vendored Libraries
Create `src/vendor/` directory:
```
src/vendor/turtle/core.cljs      — ported from .clj to CLJS
src/vendor/turtle/renderer/vector.cljs  — fixed ns form (was .clj with {:cljs metadata})
src/vendor/c2/reflex/core.cljs   — patched (removed bogus :use-macros)
```

### 4b. Gist Fetcher Module
Python script (`compiler/gist_fetch.py`) that:
1. Fetches gist content from GitHub API
2. Writes to `gists/<lib>/<gist-id>.cljs`
3. Applies namespace rewriting rules automatically

### 4c. Namespace Rewriting
For each fetched gist, apply transformations:
1. `(:require [cljs.core.async.macros :as am])` → `(:require-macros [cljs.core.async.macros :as am])`
2. `(:require [dommy.macros :only [...]])` → `(:require-macros [dommy.macros :refer [...]])`
3. `(:use [some.ns :only [...]])` → `(:require [some.ns :refer [...]])`
4. Fix `:refer-clojure` exclusions if needed
5. Add `:include-macros true` where old-style `:require` is used for CLJC namespaces

### 4d. Test Harness
- shadow-cljs build that compiles ALL library test namespaces + ALL gists together
- Report compilation errors per gist
- Flag gists that need manual intervention

## Phase 5 — Reporting (Estimated: 1 day)

Generate final report: which gists compile, which need patching, which need rewriting.

## Risk Assessment

| Risk | Severity | Mitigation |
|---|---|---|
| Turtle needs CLJS port of `turtle/core.clj` | High | Vendoring + manual port (~2 days) |
| c2's reflex dependency bug | Medium | 1-line patch in vendored copy |
| Macro import namespace rewriting | Medium | Automated rule-based transform |
| Old `:use` forms in deps | Low | Works in modern CLJS (deprecated but functional) |
| Circular deps in dommy (26 warnings) | Low | Compiles fine, runtime risk only in edge cases |
| core.async macro API changes | Medium | Need to check if gists use `put!`, `take!`, etc. that moved |
| React version mismatch (om 0.3.0 → React 0.8) | High (runtime) | Not a compile-time concern; runtime JS via npm |

## Files

- `deps.edn` — Dependency configuration (all 13 libs)
- `shadow-cljs.edn` — Build configuration (one build per library)
- `src/spike/*.cljs` — Test namespaces for each library
- `RESULTS.md` — Full test results table with root cause analysis
- `PLAN.md` — This file
