Programming Enchiladas
======================

A sort-of gist for ClojureScript/canvas/SVG experiments, much like http://bl.ocks.org/ 
but geared specifically for on-the-fly ClojuresScript code generation: getting sick
of setting up yet another lein/noir for every new folly,
so it makes more sense to have a framework which loads public 
ClojureScript gists directly from github, compiles them on the fly 
and serves them out.

This allows shared/social and version-tracked editable ClojureScripts
to be run by anyone anywhere with a reasonably modern browser (tested in Chrome/FF/Safari).
In order to compile and run any .cljs files in gist
https://gist.github.com/rm-hull/5278162 (for example), go to 
http://programming-enchiladas.destructuring-bind.org/rm-hull/5278162 - see below
for more examples.

As part of the available 'stack' (for want of a better word), the 
following client-side clojureScript bindings are available:

| Function | Notes |
|:---------|:------|
| enchilada/canvas | A canvas object, which you can resize, move, whatever. |
| enchilada/ctx | The graphics context, on to which you draw your stuff. |
| enchilada/svg | An SVG object, on to which you insert DOM stuff (initially hidden). |
| enchilada/proxy-request | Returns a URL which will be proxied through self. |
| turtle.* | https://github.com/rm-hull/turtle graphics library |
| dommy.template/* |  Templating based on Clojure's [Hiccup](https://github.com/weavejester/hiccup/) html templating library. |
| monet.* | All the https://github.com/rm-hull/monet canvas drawing functions. |
| jayq.* | https://github.com/ibdknox/jayq jQuery bindings. |
| c2.* | Kerninglabs C2 data visualization library. |
| vomnibus.* | https://github.com/lynaghk/vomnibus bindings. |

The following javascript libraries are loaded and available:

* http://jquery.com/ v2.0.1
* http://arborjs.org/ v0.9.2

**NOTE**: This software is definitely alpha work-in-progress, please treat as such.

## Examples

* [Turtle graphics demo](http://programming-enchiladas.destructuring-bind.org/rm-hull/5229369)

* [US Choropleth C2](http://programming-enchiladas.destructuring-bind.org/rm-hull/5514551)

* [World Choropleth C2](http://programming-enchiladas.destructuring-bind.org/rm-hull/5537192)

* [Psychedelic Animation](http://programming-enchiladas.destructuring-bind.org/rm-hull/5522065)

* [Quadratic Residues & Fixed Points](http://programming-enchiladas.destructuring-bind.org/rm-hull/5694738?optimization-level=simple)

* [Champernowne's Constant and other transcendentals](http://programming-enchiladas.destructuring-bind.org/rm-hull/5233367)

* [Flower of Life](http://programming-enchiladas.destructuring-bind.org/rm-hull/5257851)

* [Turmites](http://programming-enchiladas.destructuring-bind.org/rm-hull/5259306)

* [Chroma-Spirals](http://programming-enchiladas.destructuring-bind.org/rm-hull/5278162)

* [Heighway Dragon](http://programming-enchiladas.destructuring-bind.org/rm-hull/5285431)

* [Arnold's Cat-map](http://programming-enchiladas.destructuring-bind.org/rm-hull/5491968)

* [ClojureScript says Boo!](http://programming-enchiladas.destructuring-bind.org/rm-hull/5201050)

* [Compilation error](http://programming-enchiladas.destructuring-bind.org/rm-hull/5272126)

## Prerequisites

You will need [Leiningen](https://github.com/technomancy/leiningen) 2.1.2 or
above installed.

## Running

To start a web server for the application, run:

    $ lein ring server

This will start the server at port 3000 or thereabouts. Then create your 
ClojureScript gist, and slot in the login and id, and hack on.

**Optional:** If a connection to a MongoDB database is supplied via config variable
MONGODB_URL as below (substitute values for user, password, host and db as appropriate),
then minimal usage stats will be written out for gamification purposes:

    $ export MONGODB_URL=mongodb://user:password@host:10046/db

If using heroku, add a config param:

    $ heroku config:add MONGODB_URL=mongodb://user:password@host:10046/db

**Optional:** By default, Github aggressively throttles requests if requests are anonymous 
(60 requests per hour); Set GITHUB_OAUTH_TOKEN to a generated authentication token to 
increase the rate limit to 5000 requests per hour:

    $ export GITHUB_OAUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxx

or 

    $ heroku config:add GITHUB_OAUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxx

(See application note on authorizing 3rd party access to github here:
http://developer.github.com/v3/oauth/#create-a-new-authorization)

## Troubleshooting

Q. Why doesn't my clojurescript compile, it looks ok? 

A1. Did you include a namespace? e.g. `(ns example)`

A2. Did you name it with a .cljs extension? 

## TODO

* UI -> home page (carousel of recently viewed, most viewed, rated, etc)

* UI -> allow in-page editing

* Stats / tracking

* More examples

* Documentation

* Stop using local storage - using Heroku's ephemeral FS not so good for permanent storage (github, Amazon S3 instead?)

* Sitemap based on mongo-db rather than Heroku's ephemeral FS.

* Capture all error scenarios (inc. Google closure warnings and errors & trap javascript errors)

## Contributing

If there are other ClojureScript (or JavaScript) libraries that would be
useful to include, please create a 
[new issue](https://github.com/rm-hull/programming-enchiladas/issues/new).

There is plenty to do, let me know if you can help out; submit a request 
for commit access.

## References

* _The (New) Turing Omnibus_, A.K.Dewdney

* http://himera.herokuapp.com/index.html

* http://codepen.io/stuffit/pen/KrAwx

* http://js1k.com/2013-spring/demo/1362

* http://bl.ocks.org

## License

Copyright © 2013 Richard Hull

Use/copy/fork as per: [Creative Commons](http://creativecommons.org/licenses/by/3.0/legalcode).
