;; Draws a simple pentagon and other geometric stars using turtle graphics
;; 
;; Scale it to fit in a bounding-box of 750x550 px
(ns demo.rm-hull-5229369.core
  (:require [turtle.core :refer [draw!]] [turtle.renderer.canvas :refer [->canvas]] [jayq.core :refer [show]] [enchilada :refer [ctx canvas]]))
 
(defn move-to [x y]
  (list :origin, :pen :up, :fwd y, :right 90, :fwd x, :pen :down))
 
(defn polygon [turn-angle line-length steps]
  (let [basic-op (list :fwd line-length, :right turn-angle)]
    (take 
      (* steps (count basic-op))
      (cycle basic-op))))
 
(def commands
  (list 
    :color :blue
    (move-to 50 50)
    (polygon 144 100 5)
 
    :color :red
    (move-to 200 100)
    (polygon 72 70 5)
    :fill :yellow
 
    :color :green
    (move-to 200 200)
    (polygon 135 100 8)))
 
(enchilada.core/show (canvas))

(print (flatten commands))

(draw! (->canvas ctx) commands [750 550])