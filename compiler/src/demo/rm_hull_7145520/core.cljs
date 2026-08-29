(ns demo.rm-hull-7145520.core
  (:require [enchilada :refer [canvas ctx value-of canvas-size]] [jayq.core :refer [show]] [monet.core :refer [animation-frame]] [monet.canvas :refer [save restore 
                             begin-path move-to line-to close-path 
                             stroke stroke-style fill fill-rect fill-style 
                             rotate translate]] [demo.rm-hull-7145520.rules :refer [step make-boid]] [demo.rm-hull-7145520.vector :refer [heading]]))

(def r (js/parseFloat (value-of :r 3.0)))
(def width (first (canvas-size)))
(def height (second (canvas-size)))
(def stepper (step width height r))
(def rng (range (js/parseInt (value-of :boids 75))))
(def pi-over-2 (/ Math/PI 2))

(def boids 
  (mapv 
    #(make-boid (/ width 2) (/ height 2))
    rng))

(defn render! [ctx boids size]
  (->
    ctx
    (fill-style :white)
    (fill-rect {:x 0 :y 0 :w width :h height})
    (stroke-style :darkcyan)
    (fill-style :lightcyan))
  (doseq [boid boids
          :let [[x y] (:location boid)
                theta (+ (heading (:velocity boid)) pi-over-2)]]
    (->
      ctx
      (save)
      (translate x y)
      (rotate theta)
      (begin-path)
      (move-to 0 (* size -2))
      (line-to (- size) (* size 2))
      (line-to size (* size 2))
      (close-path)
      (fill)
      (stroke)
      (restore))))

(defn update [boids idx]
  (assoc boids idx (stepper (boids idx) boids)))

(defn animate [ctx boids size]
  (letfn [(loop [state]
            (fn []
              (animation-frame (loop (reduce update state rng)))
              (render! ctx state size)))]
    ((loop boids))))

(enchilada.core/show (canvas))
(animate ctx boids r)