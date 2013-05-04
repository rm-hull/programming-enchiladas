(ns enchilada.util.compiler
  (:use [enchilada.util.fs])
  (:require [cljs.closure :as cljsc]))

(defn cljs-build-opts [gist debug]
  (let [defaults { :output-to (output-file gist)
                   :output-dir (temp-dir gist)
                   :optimizations :advanced
                   :pretty-print false
                   :externs ["externs/jquery.js"]
                   :libs ["resources/js/singult.js"] }]
    (if debug
      (merge defaults {:optimizations :simple, :pretty-print true})
      defaults)))   

(defn generate-js [gist debug]
  (prepare gist)
  (cljsc/build 
    (src-dir gist) 
    (cljs-build-opts gist debug)) 
  (clean temp-dir gist)
  (compress gist)
  gist)


(defn regenerate-if-stale [gist debug]
  (if (or debug (stale? gist))
    (generate-js gist debug)
    gist))

;(def x (generate-js 5201050))
