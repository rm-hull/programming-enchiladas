(ns spike.turtle
  (:require [turtle.core :as t]
            [turtle.renderer.canvas :as tcanvas]
            [turtle.renderer.vector :as tsvg]))

(defn ^:dev/after-load init []
  (println "turtle compiled OK"))
