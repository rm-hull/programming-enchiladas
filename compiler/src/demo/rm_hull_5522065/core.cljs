; rewritten in Clojurescript from javascript (originally by Piotr Stosur: http://js1k.com/2013-spring/demo/1431)
(ns demo.rm-hull-5522065.core
  (:require [enchilada :refer [canvas svg ctx]] [jayq.core :refer [show hide]] [monet.core :refer [animation-frame]] [monet.canvas :refer [fill-style fill-rect draw-image rotate translate]]))

(enchilada.core/show (canvas))
(enchilada.core/hide (svg))

(defn draw-frame! [img v t]
  (let [w (+ 600 (* (Math/sin t) 100))
        r (Math/floor (* (Math/sin (* t 3)) 255))
        g (Math/floor (* (Math/sin (* t 5)) 255))
        b (Math/floor (* (Math/sin (* t 7)) 255))]
    (->
      ctx
      (fill-style "rgba(0,0,0,0.005)")
      (fill-rect { :x 0 :y 0 :w w :h w })
      (fill-rect { :x w :y w :w w :h w })
      (fill-style (str "rgba(" r "," g "," b ",0.1)"))
      (fill-rect { :x w :y 0 :w w :h w })
      (fill-rect { :x 0 :y w :w w :h w })
      (draw-image img { :x 0 :y w :w w :h w })
      (draw-image img { :x w :y w :w w :h w })
      (draw-image img { :x w :y 0 :w w :h w })
      (draw-image img { :x 0 :y 0 :w w :h w })
      (translate v v)
      (rotate (* 0.01 (Math/abs (Math/sin t))))
      (translate (- v) (- v)))))

(defn animate [img v]
  (letfn [(loop [t]
            (fn []
              (animation-frame (loop (+ t 0.01))
              (draw-frame! img v t))))]
    ((loop 0))))
      
(animate (.get canvas 0) 450)