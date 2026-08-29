(ns demo.rm-hull-8262502.core
  (:require [enchilada :refer [canvas ctx canvas-size]] [monet.canvas :refer [fill-style fill-rect]] [jayq.core :refer [show]] [cljs.core.async :refer [<! >! chan timeout go]]))

(def colors 
  (rand-nth [
    [
      "#E16889"
      "#FE853E"
      "#6EC59B"
      "#FDBA52"
      "#F5DED0"
      "#94614C"
      "#2D97D3"
      "#48C3CB" 
      "#A9A6D3"
      "#C0C1BC" 
    ]
    [
      "#FFD1DC"
      "#FFC0CB"
      "#FFB7C5"
      "#FC8EAC"
      "#E75480"
      "#DE5D83"
      "#DE3163"
      "#E30B5D"
      "#E0115F"
      "#C32148"
    ]]))

(defn make-cell [x y]
  (go 
    (while true
      (->
        ctx
        (fill-style (rand-nth colors))
        (fill-rect {:x x :y y :w 9 :h 9}))
      (<! (timeout (rand-int 1000))))))

(defn make-scene [rows cols]
  (dotimes [x cols]
    (dotimes [y rows]
      (make-cell (* 10 x) (* 10 y)))))

(enchilada.core/show (canvas))

(let [[width height] (canvas-size)]
  (make-scene 
    (/ height 10)
    (/ width 10)))