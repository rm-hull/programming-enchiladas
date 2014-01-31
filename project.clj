(defproject programming-enchiladas "0.1.0"
  :description "FIXME: write description"
  :url "http://programming-enchiladas.destructuring-bind.org"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2156"]
                 [org.clojure/data.json "0.2.4"]
                 [org.clojure/data.xml "0.0.7"]
                 [tailrecursion/cljs-priority-map "1.0.3"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [org.clojure/core.logic "0.8.5"]
                 ;[org.clojure/core.match "0.2.0"]
                 [org.clojure/core.typed "0.2.26"]
                 [clj-stacktrace "0.2.7"]
                 [clj-http "0.7.8"]
                 [clj-time "0.6.0"]
                 [compojure "1.1.6"]
                 [ring/ring-core "1.2.1"]
                 [hiccup "1.0.5"]
                 [jayq "2.5.0"]
                 [com.keminglabs/c2 "0.2.3"]
                 [com.keminglabs/vomnibus "0.3.2"]
                 [com.keminglabs/singult "0.1.7-SNAPSHOT"]
                 [rm-hull/dommy "0.1.3-SNAPSHOT"]
                 [com.novemberain/monger "1.7.0"]
                 [me.raynes/fs "1.4.5"]
                 [rm-hull/monet "0.1.10"]
                 [rm-hull/turtle "0.1.9-SNAPSHOT"]
                 [rm-hull/wireframes "0.0.1-SNAPSHOT"]
                 [rm-hull/ring-gzip-middleware "0.1.7"]
                 [rm-hull/big-bang "0.0.1-SNAPSHOT"]
                 [rm-hull/cljs-dataview "0.0.1-SNAPSHOT"]
                 [om "0.3.0"]]
  :plugins [[lein-ring "0.8.3"]]
  :ring {:handler enchilada.handler/app}
  :profiles
  {:dev {:dependencies [[ring-mock "0.1.5"]]}}
  :min-lein-version "2.2.0"
  :global-vars { *warn-on-reflection* true})
