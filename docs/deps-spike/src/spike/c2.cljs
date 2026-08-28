(ns spike.c2
  (:require [c2.core :as c2]))

(defn ^:dev/after-load init []
  (println "c2 compiled OK (fix reflex.core to compile)"))
