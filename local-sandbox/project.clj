(defproject enchilada-sandbox "0.0.1-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://programming-enchiladas.destructuring-bind.org"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.229"]
                 [figwheel "0.5.8"]
                 [tailrecursion/cljs-priority-map "1.2.0" :exclusions [org.clojure/clojurescript]]
                 [org.clojure/core.async "0.2.391" :exclusions [org.clojure/clojurescript]]
                 [org.clojure/core.logic "0.8.10" :exclusions [org.clojure/clojurescript]]
                 [org.clojure/core.typed "0.3.28" :exclusions [org.clojure/clojurescript]]
                 [jayq "2.5.4" :exclusions [org.clojure/clojurescript]]
                 [com.keminglabs/c2 "0.2.3" :exclusions [org.clojure/clojurescript]]
                 [com.keminglabs/vomnibus "0.3.2" :exclusions [org.clojure/clojurescript]]
                 [com.keminglabs/singult "0.1.7-SNAPSHOT" :exclusions [org.clojure/clojurescript]]
                 [rm-hull/dommy "0.1.4-SNAPSHOT" :exclusions [org.clojure/clojurescript]]
                 [spellhouse/clairvoyant "0.0-29-g825d69c"]
                 [rm-hull/cljs-webgl "0.1.5-SNAPSHOT"]
                 [rm-hull/monet "0.3.0" :exclusions [org.clojure/clojurescript]]
                 [rm-hull/turtle "0.1.9" :exclusions [org.clojure/clojurescript]]
                 [rm-hull/wireframes "0.0.1-SNAPSHOT" :exclusions [org.clojure/clojurescript cljs-webgl]]
                 [rm-hull/ring-gzip-middleware "0.1.7"]
                 [rm-hull/big-bang "0.0.1-SNAPSHOT" :exclusions [org.clojure/clojurescript]]
                 [rm-hull/cljs-dataview "0.0.1-SNAPSHOT" :exclusions [org.clojure/clojurescript]]
                 [rm-hull/polyhedra "0.0.1-SNAPSHOT" :exclusions [org.clojure/clojurescript]]
                 [rm-hull/inkspot "0.2.1" :exclusions [org.clojure/clojurescript]]
                 [om "0.7.3" :exclusions [org.clojure/clojurescript]]]
  :plugins [[lein-cljsbuild "1.1.4"]
            [lein-figwheel "0.5.8"]]
  :min-lein-version "2.4.2"
  :global-vars { *warn-on-reflection* true}
  :source-paths ["../src/enchilada/client" "src"]
  :resource-paths ["resources"]
  :figwheel {
    :http-server-root "public" ;; default and assumes "resources"
    :server-port 3449 ;; default
    :css-dirs ["resources/public/css"]}
  :cljsbuild {
    :builds {
      :sandbox {
        :id "sandbox"
        :source-paths ["../src/client" "src"]
        :compiler {
          :output-to "resources/public/js/compiled/generated.js"
          :output-dir "resources/public/js/compiled/out"
          :optimizations :none
          :source-map true
          :language-in :ecmascript5
          :language-out :ecmascript5
          :pretty-print true
          :static-fns true
          :externs ["../resources/private/externs/arbor.js"
                    "../resources/private/externs/jquery.js"
                    "../resources/private/externs/three.js"
                    "../resources/private/externs/react.js"
                    "../resources/private/externs/PhiloGL.js"]
          :foreign-libs [{:file "../resources/private/js/arbor.js" :provides ["arbor"]}
                         {:file "../resources/private/js/react.js" :provides ["React"]}
                         {:file "../resources/private/js/three.js" :provides ["THREE"]}
                         {:file "../resources/public/js/gl-matrix-min.js" :provides ["mat3","mat4","vec3"]}
                         {:file "../resources/public/js/webgl-utils.js" :provides ["WebGLUtils"]}]
          :libs ["../resources/private/js/singult.js"]}}}})
