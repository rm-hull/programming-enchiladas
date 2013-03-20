Programming Enchiladas
======================

A sort-of gist for clojurescript/canvas experiments: getting sick
of setting up yet another lein/noir (deprecated) for every new folly,
so it makes more sense to have a framework which loads public 
ClojureScript gists directly from github, compiles them on the fly 
and serves them out.

This allows shared/social and version-tracked editable ClojureScripts
to be run by anyone anywhere. In order to run https://gist.github.com/rm-hull/5201050 (for example),
go to http://programming-enchiladas.destructuring-bind.org/rm_hull/5201050


As part of the available 'stack' (for want of a better word), the 
following client-side clojureScript bindings are available:

| Function | Notes |
|:---------|:------|
| enchilada.ctx | The graphics context, on to which you draw your stuff. |
| monet.core.* | All the https://github.com/rm-hull/monet drawing functions. |
| jayq.core.* | https://github.com/ibdknox/jayq jQuery bindings. |

## Prerequisites

You will need [Leiningen][1] 1.7.0 or above installed.

[1]: https://github.com/technomancy/leiningen

## Running

To start a web server for the application, run:

    lein ring server

## Examples

TODO

## TODO

* UI

* ClojureScript compiler plugin

* Examples

* Documentation

## References

* _The (New) Turing Omnibus_, A.K.Dewdney

## License

Copyright © 2013 Richard Hull
