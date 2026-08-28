(ns spike.wireframes
  (:require [wireframes.renderer.canvas :as canvas]
            [wireframes.shapes.primitives :as primitives]))

(defn ^:dev/after-load init []
  (println "wireframes compiled OK"))
