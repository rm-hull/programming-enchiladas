;; Adapted from javascript version by Tristan Brehaut at 
;;   http://js1k.com/2013-spring/details/1362
(ns demo.rm-hull-5257851.core
  (:require [monet.canvas :refer [save restore begin-path end-path translate rotate 
                             stroke stroke-style fill-style fill-rect move-to 
                             bezier-curve-to composition-operation]] [monet.core :refer [animation-frame]] [jayq.core :refer [show]] [enchilada :refer [ctx canvas]]))

(defn generator [w h n]
  (fn [{ :keys [i x y red green blue]}]
    { :i (inc i)
      :x (int  (+ x (- (rand (quot w 8)) (quot w 16))))
      :y (* (quot h (- n)) i)
      :xd (rand-int 2)
      :yd (rand-int 2)
      :red (- red 8)     
      :green (+ green 4)     
      :blue (- blue 12)}))

(defn updater [w h]
  (fn [{:keys [i x y xd yd] :as points}]
    (if (zero? i)
      points
      (let [new-x (+ x xd)
            new-y (+ y yd)]
        (assoc points
          :x new-x
          :y new-y
          :xd (if (or (> new-x w) (< new-x (- w))) (- xd) xd)
          :yd (if (or (> new-y h) (< new-y (- h))) (- yd) yd))))))

(defn points [w h n]
  (->>
    {:i 0 :x 0 :y 0 :red 255 :green 255 :blue 255}
    (iterate (generator w h n))
    (take n)))

(defn get-color-from [{:keys [red green blue]}]
  (str "rgba(" red "," green "," blue ",0.075)"))

(defn draw-points! [ctx points]
  (loop [points (next points)]
    (if (nil? (next points))
      ctx
      (let [p1 (first points)
            p2 (second points)
            curve { :cp1x (:x p1) :cp1y (:y p1) :cp2x 0 :cp2y 0 :x (:x p2) :y (:y p2) }
            color (get-color-from p2)] 
        (doseq [_ (range 5)]
          (->
            ctx
            (begin-path)
            (move-to (:x p1) (:y p1))
            (bezier-curve-to curve)
            (stroke-style color)
            (stroke)
            (rotate 1.256637))) 
        (recur (next points))))))

(defn draw-frame! [ctx w h points]
  (->
    ctx
    (save)
    (fill-style "rgba(0,0,0,0.02)")
    (fill-rect { :x (quot w -2) :y (quot h -2) :w w :h h })
    (restore)
    (save)
    (composition-operation :lighter)
    (draw-points! points)
    (restore)
    (rotate 0.005)))

(defn animate [ctx w h]
  (translate (ctx) (quot w 2) (quot h 2))
  (let [data (atom (points w h 21))]
    (letfn [(loop [] 
              (animation-frame loop)
              (draw-frame! ctx w h (swap! data #(map (updater w h) %))))]
      (loop))))

(enchilada.core/show (canvas))

(animate ctx 800 600)
