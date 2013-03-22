(ns enchilada.util.compiler
  (:use [enchilada.util.fs])
  (:require [cljs.closure :as cljsc]))

(defn cljs-build-opts [gist]
  { :output-to (output-file gist)
    :output-dir (temp-dir gist)
    :optimizations :advanced
    :pretty-print false
    :externs ["externs/jquery.js"] })   

(defn generate-js [gist]
  (prepare gist)
  (cljsc/build 
    (src-dir gist) 
    (cljs-build-opts gist)) 
  (clean temp-dir gist)
  (compress gist)
  gist)


(defn regenerate-if-stale [gist]
  (if (stale? gist)
    (generate-js gist)
    gist))

;(def x (generate-js 5201050))
