(ns enchilada.util.compiler
  (:use [enchilada.util.fs])
  (:require
    [cljs.closure :as cljsc]))

(def cljs-build-opts
  (let [valid-opts #{:simple :whitespace :advanced}]
    (fn [gist {:keys [debug optimization-level]}]
      (let [output-file (output-file gist)
            defaults { :output-to output-file
                       :source-map (str output-file ".map")
                       :output-dir (output-dir gist)
                       :optimizations (get valid-opts (keyword optimization-level) :advanced)
                       :incremental? true
                       :pretty-print false
                       :static-fns true
                       :externs ["resources/private/externs/arbor.js"
                                 "resources/private/externs/jquery.js"
                                 "resources/private/externs/three.js"
                                 "resources/private/externs/react.js"
                                 "resources/private/externs/PhiloGL.js"]
                       :foreign-libs [{:file "resources/private/js/react.js" :provides ["React"]}
                                      {:file "resources/private/js/three.js" :provides ["THREE"]}
                                      {:file "resources/private/js/gl-matrix-min.js" :provides ["mat3","mat4","vec3"]}
                                      {:file "resources/private/js/webgl-utils.js" :provides ["WebGLUtils"]}]
                       :libs ["resources/private/js/singult.js"]
                       :closure-warnings {:externs-validation :off
                                          :non-standard-jsdoc :off}}]
        (if debug
          (merge defaults {:optimizations :simple, :pretty-print true})
          defaults)))))

(defn generate-js [gist build-opts]
  (prepare gist)
  (cljsc/build
    (src-dir gist)
    (cljs-build-opts gist build-opts))
  gist)

(defn regenerate-if-stale [gist build-opts]
  (if (or (:debug build-opts) (stale? gist))
    (generate-js gist build-opts)
    gist))
