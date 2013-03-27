Programming Enchiladas
======================

A sort-of gist for clojurescript/canvas experiments: getting sick
of setting up yet another lein/noir (deprecated) for every new folly,
so it makes more sense to have a framework which loads public 
ClojureScript gists directly from github, compiles them on the fly 
and serves them out.

This allows shared/social and version-tracked editable ClojureScripts
to be run by anyone anywhere. In order to run https://gist.github.com/rm-hull/5201050
(for example), go to http://programming-enchiladas.destructuring-bind.org/rm-hull/5201050

As part of the available 'stack' (for want of a better word), the 
following client-side clojureScript bindings are available:

| Function | Notes |
|:---------|:------|
| enchilada/canvas | The canvas object, which you can resize, move, whatever. |
| enchilada/ctx | The graphics context, on to which you draw your stuff. |
| monet.* | All the https://github.com/rm-hull/monet drawing functions. |
| jayq.* | https://github.com/ibdknox/jayq jQuery bindings. |

**NOTE**: This software is definitely alpha work-in-progress, please treat as such.

## Prerequisites

You will need [Leiningen](https://github.com/technomancy/leiningen) 2.0.0 or
above installed.

## Running

To start a web server for the application, run:

    lein ring server

This will start the server at port 3000 or thereabouts. Then create your 
ClojureScript gist, and slot in the login and id, and hack on.

## Troubleshooting

Q. Why doesn't my clojurescript compile, it looks ok? 

A. Did you include a namespace, e.g. `(ns example)`

## Examples

Some more examples:

* [ClojureScript says Boo!](http://programming-enchiladas.destructuring-bind.org/rm-hull/5201050)

* [Turtle graphics demo](http://programming-enchiladas.destructuring-bind.org/rm-hull/5229369)

* [Champernowne's Constant and other transcendentals](http://programming-enchiladas.destructuring-bind.org/rm-hull/5233367)

* [Flower of Life](http://programming-enchiladas.destructuring-bind.org/rm-hull/5257851)

## TODO

* Compilation error reporting

* UI

* Stats / tracking

* More examples

* Documentation

* Stop using local storage - using Heroku's ephemeral FS not so good for permanent storage (github, Amazon S3 instead?)

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

## License

Copyright © 2013 Richard Hull
