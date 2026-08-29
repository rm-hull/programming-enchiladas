(ns demo.rm-hull-5732587.core
  (:require [turtle.core :refer [draw!]] [turtle.renderer.vector :refer [->svg]] [turtle.renderer.canvas :refer [->canvas]] [enchilada :refer [ctx canvas svg]] [dommy.core :refer [set-html! insert-after! replace! hide! show!]] [jayq.core :refer [show]])
  (:require-macros [dommy.macros :refer [sel1]]))

(def L '(:left 36))
(def R '(:right 36))
(def F '(:fwd 60))
(def P :save)
(def Q :restore)
          
(def penrose-tiling-seq
  (letfn [(seq0 [a b c d e] 
            (lazy-seq 
              (cons 
                [P b Q R R P b Q R R P b Q R R P b Q R R P b Q]
                (seq0 
                  [c e R R d e L L L L b e P L c e L L L L a e Q R R]
                  [R c e L L d e P L L L a e L L b e Q R]
                  [L a e R R b e P R R R c e R R d e Q L]
                  [L L c e R R R R a e P R d e R R R R b e Q L L b e]
                  []))))]
    (seq0 [F] [F] [F] [F] [])))

;(enchilada.core/show (svg))
;
;(replace! 
;  (sel1 :svg#world) 
;  (draw! ->svg (nth penrose-tiling-seq 5) [800 600]))

(enchilada.core/show (canvas))

(draw! 
  (->canvas ctx) 
  (nth penrose-tiling-seq 5) [800 600])