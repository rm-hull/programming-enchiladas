# AGENTS.md

Operating instructions for any coding agent working in this repository.

## Where you are

You are working on the **`v2-nextgen`** branch of `rm-hull/programming-enchiladas`. This branch
is an orphan branch — it shares no git history with `master` and started from an empty tree.

`master` is the **original, live** codebase: a Clojure/Ring app (Leiningen) that fetches
ClojureScript gists on the fly and compiles them per-request via the JVM ClojureScript compiler.
It is still serving traffic. **Do not modify, merge from, or merge into `master`** as part of this
work. If you ever find yourself about to touch a file that only exists on `master`, stop — you're
in the wrong branch context.

The full design is in [`PLAN.md`](./PLAN.md) at the repo root. Read it before starting any
phase of work — it has the repo layout, the `gists.yaml` schema, the namespace-collision gotcha
in the compile step, and the per-demo error-isolation requirements, all of which are load-bearing
for how this is meant to fit together. Don't improvise around it without flagging the deviation.

## What this project is

A static rebuild of a 2013-era ClojureScript demo gallery. Each demo is a small `.cljs` script
living in someone's public GitHub Gist (canvas/SVG/WebGL sketches, core.async examples,
core.logic puzzles, etc.). The old site compiled these live, server-side, per request. This
rebuild fetches the same gists at **build time**, compiles them once with shadow-cljs, and
publishes the result as a plain static site via Eleventy + GitHub Pages. No JVM, no server, no
database at runtime — the JVM is only ever invoked during the CI build.

## Repository layout

See `PLAN.md` for the full breakdown. In short:

```
gists.yaml       ← source of truth: which gists to include, owner/id/title/tags
fetcher/         ← Node script pulling gist content from the GitHub API
demos/           ← generated at build time, gitignored
compiler/        ← shadow-cljs project (including the enchilada.core runtime + any vendored libs)
site/            ← 11ty site (templates, CSS, Pagefind search)
.github/workflows/build.yml
docs/dependency-spike.md   ← Phase 0 findings; check this before assuming a legacy lib "just works"
```

## Ground rules

- **`gists.yaml` is the only place demo membership is edited by hand.** Everything under `demos/`
  is generated output — don't hand-edit it, and don't commit it (it's fetched fresh on every
  build).
- **Don't fabricate data.** If a date, description, or attribution isn't available from the
  GitHub API or the gist itself, leave it out or mark it clearly as a placeholder rather than
  inventing something plausible-looking. This bit us already with `added` dates in `gists.yaml` —
  those are intentionally omitted pending real `created_at` values from the API.
- **One broken gist must never fail the whole build.** A deleted gist, a private gist, or a
  demo that fails to compile should degrade to a stub/error page for that one demo, with a
  logged warning — not a failed CI run. This is tested by design: `rm-hull/5272126`
  ("Compilation error") is deliberately included in `gists.yaml` to exercise this path.
- **Namespace rewriting is mandatory, not optional.** Gists frequently declare generic namespaces
  like `(ns example)`. Before compiling, rewrite each fetched gist's `ns` form to a repo-unique
  namespace (`demo.<slug>`) and place it at the matching classpath path. Skipping this will cause
  silent collisions across demos sharing a single shadow-cljs build.
- **Legacy library parity was an explicit choice**, not a default — full parity for jayq, c2,
  vomnibus, core.logic, core.async, turtle, dommy/hiccup, and monet was requested. If Phase 0's
  spike shows one of these doesn't compile cleanly under the current toolchain, the correct
  response is to vendor and patch it into `compiler/vendor/` and document the patch in
  `docs/dependency-spike.md` — not to quietly drop the library or the demos that need it.
- **Attribution matters.** Every demo page must credit and link back to the original gist and its
  owner (several demos in `gists.yaml` belong to people other than the repo owner — `swannodette`,
  `nodename`, `mynomoto`, `mjg123`). Don't lose this in templating.
- **Social features are gone on purpose.** Ratings, favourites, most-viewed/unloved sorting, and
  the `proxy-request` CORS binding were deliberately dropped for the static rebuild. Don't
  reintroduce them or add a database dependency to work around their absence — use latest/random/
  tag browsing and Pagefind search instead, per `PLAN.md`.

## Local development

```bash
# Fetch gist content
cd fetcher && npm install && node fetch-gists.mjs

# Compile ClojureScript demos (requires a JVM — Temurin 21 or similar)
cd ../compiler && npx shadow-cljs release main

# Build and preview the site
cd ../site && npm install && npm start   # http://localhost:8080
```

CI (`.github/workflows/build.yml`) runs the same sequence, plus Pagefind indexing and deploy to
GitHub Pages. A `GH_TOKEN` repo secret is required for the fetcher to avoid GitHub's unauthenticated
API rate limit (60 req/hour is not enough for a full rebuild across ~38+ gists).

## Definition of done for this branch

The acceptance test described in `PLAN.md` Phase 8: `gists.yaml`'s current seed list builds
cleanly end to end (fetch → compile → site → search), with any individual demo failures degrading
gracefully rather than failing CI. Only after that should cutover from `master` be discussed —
and that discussion happens with a human, not as something an agent decides unilaterally.