(defproject programming-enchiladas "0.1.0"
  :description "FIXME: write description"
  :url "http://programming-enchiladas.destructuring-bind.org"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2173"]
                 [org.clojure/data.json "0.2.4"]
                 [org.clojure/data.xml "0.0.7"]
                 [tailrecursion/cljs-priority-map "1.1.0" :exclusions [org.clojure/clojurescript]]
                 [org.clojure/core.async "0.1.278.0-76b25b-alpha" :exclusions [org.clojure/clojurescript]]
                 [org.clojure/core.logic "0.8.7" :exclusions [org.clojure/clojurescript]]
                 ;[org.clojure/core.match "0.2.0"]
                 [org.clojure/core.typed "0.2.51" :exclusions [org.clojure/clojurescript]]
                 [clj-stacktrace "0.2.8"]
                 [clj-http "0.9.2"]
                 [clj-time "0.7.0"]
                 [compojure "1.1.8"]
                 [ring/ring-core "1.3.0"]
                 [hiccup "1.0.5"]
                 [jayq "2.5.1" :exclusions [org.clojure/clojurescript]]
                 [com.keminglabs/c2 "0.2.3" :exclusions [org.clojure/clojurescript]]
                 [com.keminglabs/vomnibus "0.3.2" :exclusions [org.clojure/clojurescript]]
                 [com.keminglabs/singult "0.1.7-SNAPSHOT" :exclusions [org.clojure/clojurescript]]
                 [rm-hull/dommy "0.1.3-SNAPSHOT" :exclusions [org.clojure/clojurescript]]
                 [com.novemberain/monger "1.8.0"]
                 [me.raynes/fs "1.4.5"]
                 [rm-hull/monet "0.1.12" :exclusions [org.clojure/clojurescript]]
                 [rm-hull/turtle "0.1.9-SNAPSHOT" :exclusions [org.clojure/clojurescript]]
                 [rm-hull/wireframes "0.0.1-SNAPSHOT" :exclusions [org.clojure/clojurescript]]
                 [rm-hull/ring-gzip-middleware "0.1.7"]
                 [rm-hull/big-bang "0.0.1-SNAPSHOT" :exclusions [org.clojure/clojurescript]]
                 [rm-hull/cljs-dataview "0.0.1-SNAPSHOT" :exclusions [org.clojure/clojurescript]]
                 [rm-hull/polyhedra "0.0.1-SNAPSHOT" :exclusions [org.clojure/clojurescript]]
                 [om "0.3.0" :exclusions [org.clojure/clojurescript]]]
  :plugins [[lein-ring "0.8.10"]]
  :ring {:handler enchilada.handler/app}
  :profiles
  {:dev {:dependencies [[ring-mock "0.1.5"]]}}
  :min-lein-version "2.3.4"
  :global-vars { *warn-on-reflection* true})
