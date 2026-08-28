# Programming Enchiladas — Static Rebuild Plan

## Branching

All work described in this plan happens on the **`v2-nextgen`** branch of the existing
`rm-hull/programming-enchiladas` repo. `master` holds the old dynamic (Leiningen/Ring,
on-the-fly compilation) codebase and stays untouched and live throughout — there should be no
window where the site is down between the old dynamic version and the new static one. Don't merge,
rebase onto, or otherwise touch `master` as part of this work; treat `v2-nextgen` as a from-scratch
orphan branch (no shared history with `master`) that will only be reconciled with `master` (or used
to replace it) once the rebuild is verified end-to-end and a deliberate cutover decision is made.

## Goal

Re-implement [programming-enchiladas](https://github.com/rm-hull/programming-enchiladas) as a
static site: Eleventy + GitHub Pages, structured like
[news-barge](https://github.com/rm-hull/news-barge), same visual vibe as the original.
Demo `.cljs` source is fetched **live from public GitHub Gists at build time** (as the original
did) and compiled with **shadow-cljs** (JVM at build-time only — never at runtime, never on the
visitor's machine). Ratings / favourites / most-viewed / proxy-request are dropped; replaced with
latest / random / tag browsing + Pagefind search.

---

## Decisions already made

| Question | Decision |
|---|---|
| Gist source management | Fetch live from GitHub Gists at build time |
| Legacy library support | Full parity: jayq, c2, vomnibus, core.logic, core.async, turtle, dommy/hiccup, monet |
| Social features (ratings/favourites/proxy) | Dropped. Keep latest, random, tag browsing, search |

## Open questions still to resolve (flagged inline below, don't block Phase 0)

1. Exact original stylesheet/markup — needs pulling from the old repo's `resources/public` (I
   couldn't fetch the raw CSS directly; agent should clone/pull it as a Phase 1 task).
2. Whether `big-bang` (referenced as a TODO/partially-done feature in the old README) is needed
   for any of the ~35 gists in the current README list, or can be deferred.
3. Final domain — same `destructuring-bind.org` subdomain pattern as news-barge
   (`programming-enchiladas.destructuring-bind.org`), or plain `*.github.io`?

---

## Phase 0 — Dependency feasibility spike (DO THIS FIRST, before any scaffolding)

The riskiest assumption in "full parity" is that 2012–2014-era ClojureScript libraries
(`jayq`, `c2`, `vomnibus`, `tailrecursion.priority-map`, and possibly `dommy`) still resolve
and compile under a current shadow-cljs + Google Closure Compiler toolchain. `core.async`,
`core.logic`, and `monet` are much safer bets (actively maintained / simple enough to still work).

**Task:** Stand up a throwaway shadow-cljs scratch project and, for each library, attempt to:
- Resolve it as a Maven/Clojars dependency (most of these predate npm-based CLJS deps, so they're
  Clojars coordinates, not npm packages — pull them via `:deps` in `shadow-cljs.edn`).
- Compile a trivial namespace that requires it, at both `:none` and `:advanced` optimization.
- Note any missing externs, deprecated Closure Library APIs, or renamed namespaces.

**Output:** a short `docs/dependency-spike.md` recording, per library: works as-is / works with
patched externs / needs vendoring a fork / doesn't work (needs a shimmed replacement).
Where a library is dead on arrival, the fallback is **not** to silently drop it (parity was the
ask) but to vendor a minimal source copy into this repo (`compiler/vendor/`) and patch just enough
to compile — flagging it clearly in that doc so it's a visible, deliberate exception.

This phase determines whether Phase 4 is straightforward or needs vendoring work, so don't skip it.

---

## Repo layout (mirrors news-barge)

```
gists.yaml                 ← Edit this to add/remove/reorder demos
fetcher/
  fetch-gists.mjs           ← Node script: GitHub Gists API → demos/<slug>/
demos/                      ← Generated at build time (gitignored), one dir per gist
  <slug>/
    source.cljs             ← fetched file(s), ns-rewritten (see Phase 4)
    meta.json                ← owner, gist id, description, url, files, fetched_at
compiler/                   ← shadow-cljs project
  shadow-cljs.edn            ← :modules generated/updated from gists.yaml at build time
  src/enchilada/
    core.cljs                ← canvas / ctx / svg bindings (replaces old server-injected stack)
    ...                       ← anything else the old "stack" needs re-homing (big-bang, etc.)
  vendor/                    ← any patched/forked legacy libs from the Phase 0 spike
site/                        ← 11ty site
  eleventy.config.js
  index.njk                  ← latest demos
  random.njk                 ← client-side random redirect
  tags.njk                   ← tag index + per-tag listing
  demo.11ty.js                ← per-demo page, paginated over a "demos" collection
  search.njk                  ← Pagefind search
  public/
    css/style.css             ← ported original enchiladas look & feel
    js/<slug>.js               ← compiled demo bundles, copied in from compiler/ output
.github/workflows/
  build.yml                   ← fetch → compile → 11ty build → pagefind → deploy to Pages
AGENTS.md
README.md
LICENSE.md
docs/dependency-spike.md
```

---

## Data model — `gists.yaml`

Same spirit as news-barge's `sites.yaml`:

```yaml
demos:
  - owner: rm-hull
    gist_id: "5278162"
    title: Chroma-Spirals
    tags: [svg, colour, spirals]
    added: 2013-04-02

  - owner: swannodette
    gist_id: "5882703"
    title: "Core.async - Hello world!"
    tags: [core.async]
    added: 2013-06-22

  - owner: nodename
    gist_id: "8762403"
    title: "OM - Google Maps"
    tags: [om, maps]
    added: 2014-02-01
```

Fields:
- `owner`, `gist_id` — required, identifies the gist (mirrors the original's `/owner/id` routing).
- `title` — display title (the old site derived a title from gist metadata; being explicit here
  is more robust against gist edits/deletions).
- `tags` — free text, drives tag browsing + Pagefind facets.
- `added` — for "latest" sorting (since gists can be edited long after being added, this should be
  "date added to this site," not the gist's own timestamp).
- Optional `entry_file` — for multi-file gists, which file is the "main" one if not obvious.

---

## Phase-by-phase build

### Phase 1 — Scaffolding + look & feel
- Clone/pull the original repo's `resources/public` assets (CSS, ribbon corner graphic, spinner)
  and port them into `site/public/css/style.css`, adapting class names to whatever `demo.11ty.js`
  emits. Keep the ribbon ("Fork me on GitHub!"), the container layout, and the nav bar (now
  `random · latest · tags · search` instead of the old five-item nav).
- Basic Eleventy scaffold copied from news-barge's `site/` structure (`eleventy.config.js`,
  `npm start`, etc.), no real content yet — just the shell + layout.

### Phase 2 — Fetcher
- `fetcher/fetch-gists.mjs`: reads `gists.yaml`, hits `GET https://api.github.com/gists/:id` for
  each entry (unauthenticated is fine for a handful of gists, but use a `GH_TOKEN` repo secret —
  same as the original's `GITHUB_OAUTH_TOKEN` advice — to avoid the 60 req/hr anonymous ceiling).
- Writes `demos/<slug>/source.cljs` + `meta.json`. A "slug" should be a stable, URL-safe id derived
  from `owner + gist_id` (not from title, since titles can change).
- **Must not fail the whole build** if a gist was deleted or made private — log a warning, mark
  that demo `broken: true` in its `meta.json`, and let later phases render a "this gist is no
  longer available" stub page instead of crashing. (There's a nice bit of continuity here: the
  original README literally listed a "Compilation error" demo as a deliberate example — a
  vendored fallback page for missing/broken gists fits that same spirit.)

### Phase 3 — `enchilada.core` runtime namespace
Re-home what the old server used to inject per-request as the shared "stack":
- `enchilada/canvas`, `enchilada/ctx`, `enchilada/svg` → bind to `#canvas-area`, its 2D context,
  and `#svg-area` respectively, matching the DOM skeleton in Phase 5.
- Drop `enchilada/proxy-request` (per the social-features decision — no server to proxy through).
- Investigate whether `big-bang` was ever fully shipped in the old code (README lists it as a
  TODO that got struck through, implying it may exist) — if any gist in `gists.yaml` needs it,
  port it here; otherwise skip until a demo requires it.
- This is real ClojureScript source that lives in *this* repo (not fetched), since gists assume
  it's available to `:require`.

### Phase 4 — shadow-cljs multi-module compiler
- One shadow-cljs project, **not** one build per demo. Use `:modules` with one entry per demo so
  Closure/shadow-cljs can share the common chunk (cljs.core, enchilada.core, any shared libs)
  across all demos instead of duplicating it N times.
- Before compiling, each fetched `demos/<slug>/source.cljs` needs its `(ns ...)` form rewritten to
  a repo-unique namespace (e.g. `demo.<slug>`) and placed at the matching classpath-relative path
  (`compiler/src/demo/<slug>.cljs`) — CLJS requires namespace and file path to match, and gists
  very often reuse generic namespace names like `(ns example)`, which will collide across demos if
  left as-is. Preserve the rest of the `ns` form (`:require`s etc.) untouched.
- Handle multi-file gists similarly, one file per matching namespace.
- Wrap the whole-project compile so a single demo's compile error doesn't kill the build — shadow-
  cljs supports per-module builds; a failing module should produce a stub error bundle for that
  slug (again: an isolated "compilation error" placeholder is on-brand here) rather than aborting.
- This phase depends directly on Phase 0's findings — vendored/patched libraries go in
  `compiler/vendor/` and get wired into `shadow-cljs.edn` `:source-paths`.

### Phase 5 — Eleventy site
- `demo.11ty.js`: paginate over a "demos" collection (sourced from `gists.yaml` + fetch/compile
  metadata), emit one page per demo with the original DOM skeleton: `canvas#canvas-area`,
  `canvas#webgl-area`, `svg#svg-area`, `div#console`, error div, spinner, meta-info block (owner,
  gist link, title, description), ribbon. Include the compiled `<script>` tag for that demo's
  module.
- `index.njk` — latest N demos.
- `random.njk` — ships a tiny generated JSON index of slugs and a client-side script that redirects
  to a random one (true server-side random isn't available on a static host).
- `tags.njk` — tag index + per-tag listing pages.
- Attribution: every demo page should credit the original gist owner and link back to the gist
  itself (the old `canvas.clj` view already did this — carry it forward).

### Phase 6 — Pagefind search
- Same pattern as news-barge: `pagefind` runs as a post-build step over the rendered HTML, indexing
  title/description/tags/owner per demo page. No extra config needed beyond what news-barge's
  `search.njk` already demonstrates.

### Phase 7 — CI/CD
- `.github/workflows/build.yml`, modeled on news-barge's `scrape.yml`:
  - Triggers: push to main, `workflow_dispatch`, and a schedule (weekly is reasonable) to pick up
    upstream gist edits even without a repo change.
  - Steps: setup Node + a JVM (Temurin), run fetcher (needs `GH_TOKEN` secret), run shadow-cljs
    release build, copy compiled JS into `site/public/js/`, `npm run build` (11ty + pagefind),
    deploy via `actions/deploy-pages`.
  - Workflow permissions: read-and-write, Pages source set to GitHub Actions (same setup notes as
    news-barge's README).

### Phase 8 — Content migration
- Seed `gists.yaml` from the ~35 examples already listed in the old README (they're a good,
  varied test set: webgl, core.async, core.logic, svg, om, big-bang) rather than trying to
  discover every gist ever made against the old site.
- Treat this as the acceptance test for Phases 0–7: if this list builds clean (or fails loudly
  and gracefully per-demo, per Phase 2/4's error handling), the pipeline is sound.

---

## Non-goals (explicitly dropped, per the earlier decision)

- MongoDB-backed ratings, favourites, most-viewed, "unloved" sorting.
- `enchilada/proxy-request` CORS proxy.
- Server-side rendering / on-the-fly compilation of arbitrary gists at request time — everything
  is precompiled at build time now.

## Risks to call out to the agent up front

- Phase 0 may reveal that one or more of jayq/c2/vomnibus/priority-map genuinely won't compile
  without real vendoring effort — budget time for that rather than assuming a quick `:deps` add.
- GitHub API rate limits during CI without a token; make sure `GH_TOKEN` is set as a repo secret
  before the fetcher is exercised against the full demo list.
- Gists can be deleted/edited/made private at any time by their owners (this bit the original
  project too — see its "routing does not support private gists" bug) — the per-demo graceful
  degradation in Phases 2 and 4 is there specifically to keep one dead gist from breaking the
  whole site build.
