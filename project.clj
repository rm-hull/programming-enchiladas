(defproject programming-enchiladas "0.1.0"
  :description "FIXME: write description"
  :url "http://programming-enchiladas.destructuring-bind.org"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-1835"]
                 [org.clojure/data.json "0.2.2"]
                 [org.clojure/data.xml "0.0.7"]
                 [clj-stacktrace "0.2.5"]
                 [clj-http "0.7.2"]
                 [clj-time "0.5.1"]
                 [compojure "1.1.5"]
                 [ring/ring-core "1.2.0-RC1"]
                 [hiccup "1.0.3"]
                 [jayq "2.3.0"]
                 [com.keminglabs/c2 "0.2.3"]
                 [com.keminglabs/vomnibus "0.3.2"]
                 [com.keminglabs/singult "0.1.7-SNAPSHOT"]
                 [prismatic/dommy "0.1.1"]
                 [com.novemberain/monger "1.5.0-rc1"]
                 [me.raynes/fs "1.4.2"]
                 [rm-hull/monet "0.1.7"]
                 [rm-hull/turtle "0.1.6"]] 
  :plugins [[lein-ring "0.8.3"]]
  :ring {:handler enchilada.handler/app}
  :profiles
  {:dev {:dependencies [[ring-mock "0.1.5"]]}}
  :min-lein-version "2.2.0"
  :global-vars { *warn-on-reflection* true})
