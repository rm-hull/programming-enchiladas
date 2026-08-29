(ns demo.rm-hull-5285431.core
  (:require [turtle.core :refer [draw!]] [turtle.renderer.canvas :refer [->canvas]] [enchilada :refer [ctx canvas]] [jayq.core :refer [show]]))
          
(def dragon-seq
  "Unfolding the dragon"
  (letfn [(seq0 [x y] 
            (lazy-seq (cons (flatten x) (seq0 [x :right 90 y :fwd 20] [:fwd 20 x :left 90 y]))))]
    (seq0 [] [])))

(enchilada.core/show (canvas))

(draw! (->canvas ctx) (nth dragon-seq 13) [800 600])