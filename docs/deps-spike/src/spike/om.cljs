(ns spike.om
  ;; The old gists use :include-macros true, which is the old-style way
  ;; to load Clojure macros alongside the CLJS namespace
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(defn ^:dev/after-load init []
  (println "om compiled OK"))
