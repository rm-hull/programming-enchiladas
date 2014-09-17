(ns enchilada.simple-demo
  (:require
    [jayq.core :refer [show]]
    [enchilada :refer [ctx canvas]]
    [monet.canvas :refer [fill-style fill-rect]]))

(def dummy)

(show canvas)
(->
  ctx
  (fill-style :red)
  (fill-rect {:x 40 :y 70 :w 55 :h 47}))
