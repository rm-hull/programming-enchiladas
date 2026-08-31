[Programming Enchiladas](https://rm-hull.github.io/programming-enchiladas/)
======================

A ClojureScript-based HTML5 Canvas and SVG Graphics Playground, much like
http://bl.ocks.org/ but specifically designed for showcasing small
Clojurescript code demos: The underlying agenda is to show how small simple
functional programs can generate complex behaviour.

This is the **v2-nextgen** branch — a static rebuild of the original dynamic
Clojure/Ring application. The old `master` branch compiled ClojureScript gists
on the fly, server-side, via the JVM ClojureScript compiler. This version
fetches the same gists at **build time**, compiles them once with shadow-cljs,
and publishes the result as a plain static site via Eleventy + GitHub Pages.
No JVM, no server, no database at runtime — the JVM is only invoked during CI.

### How it works

1. **Fetch** — `fetcher/fetch-gists.mjs` reads `gists.yaml`, fetches each
   gist's content from the GitHub Gists API, and writes them to `demos/`.
2. **Compile** — `compiler/build-demos.mjs` copies each demo's source to
   `compiler/src/demos/<slug>/` (preserving original namespaces, applying
   compatibility transformations for macro imports), generates a minimal
   `shadow-cljs.edn` for that single demo, and compiles it with shadow-cljs.
   Each demo is compiled as a fully isolated build, so failures in one demo
   cannot affect others. A shared `enchilada.core` runtime is compiled once
   and loaded by all demos.
3. **Build** — Eleventy generates static HTML pages, Pagefind provides client-
   side search, and compiled JS bundles are copied to `site/public/js/`.

### Available client-side bindings

| Function | Notes |
|:---------|:------|
| enchilada/canvas | A canvas object, which you can resize, move, whatever. |
| enchilada/ctx | The graphics context, on to which you draw your stuff. |
| enchilada/svg | An SVG object, on to which you insert DOM stuff (initially hidden). |
| turtle.* | https://github.com/rm-hull/turtle graphics library |
| dommy.template/* | Templating based on Clojure's [Hiccup](https://github.com/weavejester/hiccup/) html templating library. |
| monet.* | All the https://github.com/rm-hull/monet canvas drawing functions. |
| jayq.* | https://github.com/ibdknox/jayq jQuery bindings. |
| c2.* | Kerninglabs C2 data visualization library. |
| vomnibus.* | https://github.com/lynaghk/vomnibus bindings. |
| cljs.core.logic/* | MiniKanren implementation. |
| cljs.core.async/* | Communicating sequential processes implementation. |
| tailrecursion.priority-map/* | Clojurescript implementation of data.priority-map |

### Examples

* [WebGL Photospheres](https://rm-hull.github.io/programming-enchiladas/rm-hull/9842972)
* [OM - Chess Demo](https://rm-hull.github.io/programming-enchiladas/rm-hull/8906851)
* [3D Polyhedra Taxonomy](https://rm-hull.github.io/programming-enchiladas/rm-hull/9261323)
* [Big-Bang - Rock Paper Scissors](https://rm-hull.github.io/programming-enchiladas/rm-hull/8723389)
* [Big-Bang - Parametric Equations](https://rm-hull.github.io/programming-enchiladas/rm-hull/8776719)
* [OM mouse move](https://rm-hull.github.io/programming-enchiladas/rm-hull/8617445) vs. [Big-Bang mouse move](https://rm-hull.github.io/programming-enchiladas/rm-hull/8617788)
* [OM - Google Maps](https://rm-hull.github.io/programming-enchiladas/nodename/8762403)
* [OM - Contacts Demo](https://rm-hull.github.io/programming-enchiladas/mynomoto/8787765)
* [WebGL Planets](https://rm-hull.github.io/programming-enchiladas/rm-hull/7778650)
* [Tumbling 3D Torus](https://rm-hull.github.io/programming-enchiladas/rm-hull/7098992)
* [Boids!](https://rm-hull.github.io/programming-enchiladas/rm-hull/7145520)
* [Dijkstra's Maze Solver](https://rm-hull.github.io/programming-enchiladas/rm-hull/6857333)
* [US Choropleth C2](https://rm-hull.github.io/programming-enchiladas/rm-hull/5514551)
* [World Choropleth C2](https://rm-hull.github.io/programming-enchiladas/rm-hull/5537192)
* [Quadratic Residues & Fixed Points](https://rm-hull.github.io/programming-enchiladas/rm-hull/5694738)
* [Psychedelic Animation](https://rm-hull.github.io/programming-enchiladas/rm-hull/5522065)
* [3D Auto-stereograms](https://rm-hull.github.io/programming-enchiladas/rm-hull/5736733)
* [Champernowne's Constant and other transcendentals](https://rm-hull.github.io/programming-enchiladas/rm-hull/5233367)
* [Flower of Life](https://rm-hull.github.io/programming-enchiladas/rm-hull/5257851)
* [Turmites](https://rm-hull.github.io/programming-enchiladas/rm-hull/5259306)
* [Chroma-Spirals](https://rm-hull.github.io/programming-enchiladas/rm-hull/5278162)
* [Heighway Dragon](https://rm-hull.github.io/programming-enchiladas/rm-hull/5285431)
* [Penrose Tiling](https://rm-hull.github.io/programming-enchiladas/rm-hull/5732587)
* [Arnold's Cat-map](https://rm-hull.github.io/programming-enchiladas/rm-hull/5491968)
* [ClojureScript says Boo!](https://rm-hull.github.io/programming-enchiladas/rm-hull/5201050)
* [Turtle graphics demo](https://rm-hull.github.io/programming-enchiladas/rm-hull/5229369)
* [Compilation error](https://rm-hull.github.io/programming-enchiladas/rm-hull/5272126)
* [Ajax example (from stack overflow)](https://rm-hull.github.io/programming-enchiladas/mjg123/1098417)
* [Core.async - Daisy chain benchmark](https://rm-hull.github.io/programming-enchiladas/swannodette/6542719)
* [Core.async - Rob Pike](https://rm-hull.github.io/programming-enchiladas/swannodette/5903001)
* [Core.async - Hello world!](https://rm-hull.github.io/programming-enchiladas/swannodette/5882703)
* [Core.async - Martin Trojer's Sine Generator](https://rm-hull.github.io/programming-enchiladas/rm-hull/7758795)
* [Core.async - Timothy Baldridge's Blocks](https://rm-hull.github.io/programming-enchiladas/rm-hull/8262502)
* [Core.logic - simple demo](https://rm-hull.github.io/programming-enchiladas/rm-hull/6816151)
* [Core.logic - Classic AI](https://rm-hull.github.io/programming-enchiladas/rm-hull/6816234)
* [Core.logic - Unit Test Suite](https://rm-hull.github.io/programming-enchiladas/rm-hull/6859633)
* [Core.logic - Einstein's Zebra Puzzle](https://rm-hull.github.io/programming-enchiladas/rm-hull/6952960)
* [ClojureScript Quine](https://rm-hull.github.io/programming-enchiladas/rm-hull/7060918)

### Prerequisites

You will need:

* [Node.js](https://nodejs.org/) 20+
* A JVM (Temurin 21 or similar) for shadow-cljs compilation
* GitHub CLI (`gh`) or a `GH_TOKEN` for authenticated API access

### Local development

```bash
# Fetch gist content
cd fetcher && npm install && node fetch-gists.mjs

# Compile ClojureScript demos (requires a JVM — Temurin 21 or similar)
cd ../compiler && npm install && node build-demos.mjs --clean

# Copy compiled JS to site
cp -r public/js/* ../site/public/js/generated

# Build and preview the site
cd ../site && npm install && npm start   # http://localhost:8080
```

### CI

GitHub Actions runs the full pipeline (fetch → compile → Eleventy build → Pagefind → Pages)
on every push and weekly. A `GH_TOKEN` repo secret is required for the fetcher to avoid
GitHub's unauthenticated API rate limit (60 req/hour).

## License

MIT License — see [LICENSE.md](LICENSE.md).
