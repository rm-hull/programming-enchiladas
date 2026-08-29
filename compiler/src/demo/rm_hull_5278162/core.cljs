; chroma-spirals.cljs 
; loosely based on some python code written by Peter Derlien, University of Sheffield, March 2013
; Draws spiralling patterns of circles using the Golden Angle.
(ns demo.rm-hull-5278162.core
  (:require [monet.canvas :refer [fill-style fill-rect circle rotate translate composition-operation]] [monet.core :refer [animation-frame]] [enchilada :refer [ctx canvas]] [demo.rm-hull-5278162.color-chart :refer [color-seq]] [jayq.core :refer [show]] [dommy.core :refer [insert-after! value]] [dommy.template :refer [->node-like]])
  (:require-macros [dommy.macros :refer [sel1 node]]))
        
(->> 
  (sel1 :#canvas-area)
  (insert-after! 
    (node 
      [:div#control-panel
       [:label {:for "colors"} "# Colors:"]
       [:select#colors (for [n (range 1 217)] [:option (if (= n 10) {:selected 1} {}) n])]
       [:label {:for "start"} "Start:"]
       [:select#start (for [n (range 1 217)] [:option n])]
       [:label {:for "step"} "# Step:"]
       [:select#step (for [n (range 1 217)] [:option n])]
       [:label {:for "direction"} "Direction:"]
       [:select#direction 
         [:option {:value -0.005} "Anti-clockwise"] 
         [:option {:value 0.005}  "Clockwise"]]])))

(def color (sel1 :select#colors))
(def start (sel1 :select#start))
(def step  (sel1 :select#step))
(def direction (sel1 :select#direction))

(defn colors []
  (color-seq
    (js/parseInt (value color))
    (js/parseInt (value start))
    (js/parseInt (value step))))

(defn patches [n offset scale]
  (let [tau       (/ (inc (Math/pow 5 0.5)) 2.0) ; golden ratio approx = 1.618033989
        angle     (+ (* (- 2 tau) 2 Math/PI) offset)
        drad      (* scale tau 0.5)
        generator (fn [{:keys [i theta]}]
                    (let [i     (inc i)
                          r     (* scale (Math/pow i 0.5))
                          theta (+ theta angle)
                          x     (* r (Math/cos theta))
                          y     (* r (Math/sin theta))]
                      { :x x :y y :r drad :theta theta :i i }))]
    (->>
      { :x 0 :y 0 :r drad :theta 0 :i 0 }
      (iterate generator)
      (take n))))

(defn draw-points! [ctx points colors]
  (if (nil? points)
    ctx ; return for threading
    (->
      ctx
      (fill-style (first colors))
      (circle (first points))
      (recur
        (next points) 
        (next colors)))))

(defn draw-frame! [ctx w h points colors]
  (->
    ctx
    (fill-style "rgba(255,255,255,0.75)") ; dial-in a smidgen of motion blur
    (fill-rect { :x (quot w -2) :y (quot h -2) :w w :h h })
    ;(composition-operation :lighter)
    (draw-points! points colors)
    (rotate (js/parseFloat (value direction)))))

(defn animate [ctx w h]
  (translate (ctx) (quot w 2) (quot h 2))
  (let [circles (patches 1500 0 7)]
    (letfn [(loop [] 
              (animation-frame loop)
              (draw-frame! ctx w h circles (colors)))] 
      (loop))))

(enchilada.core/show (canvas))

(animate ctx 800 600)
