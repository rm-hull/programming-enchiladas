(ns enchilada.util.compiler
  (:use [enchilada.util.fs])
  (:require [cljs.closure :as cljsc]))

()

(def cljs-build-opts 
  (let [valid-opts #{:simple :whitespace :advanced}]
    (fn [gist {:keys [debug optimization-level]}]
      (let [defaults { :output-to (output-file gist)
                       :output-dir (temp-dir gist)
                       :optimizations (get valid-opts (keyword optimization-level) :advanced)
                       :pretty-print false
                       :externs ["externs/jquery.js"]
                       :libs ["resources/private/js/singult.js"] }]
        (if debug
          (merge defaults {:optimizations :simple, :pretty-print true})
          defaults)))))   

(defn generate-js [gist build-opts]
  (prepare gist)
  (cljsc/build 
    (src-dir gist) 
    (cljs-build-opts gist build-opts)) 
  (clean temp-dir gist)
  (compress gist)
  gist)


(defn regenerate-if-stale [gist build-opts]
  (if (or (:debug build-opts) (stale? gist))
    (generate-js gist build-opts)
    gist))
