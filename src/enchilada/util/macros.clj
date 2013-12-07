(ns enchilada.util.macros)

(defmacro inc! [place delta]
  `(set! ~place (+ ~place ~delta)))
