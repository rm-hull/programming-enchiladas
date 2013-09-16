(ns enchilada.util.compiler
  (:use [enchilada.util.fs])
  (:require [cljs.closure :as cljsc]))

(def cljs-build-opts
  (let [valid-opts #{:simple :whitespace :advanced}]
    (fn [gist {:keys [debug optimization-level]}]
      (let [output-file (output-file gist)
            defaults { :output-to output-file
                       :source-map (str output-file ".map")
                       :output-dir (temp-dir gist)
                       :optimizations (get valid-opts (keyword optimization-level) :advanced)
                       :pretty-print false
                       :static-fns true
                       :externs ["externs"]
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
