(ns spike.priority-map
  (:require [tailrecursion.priority-map :as pm]))

(defn ^:dev/after-load init []
  (println "priority-map compiled OK"))
