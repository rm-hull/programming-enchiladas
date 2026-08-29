(ns demo.rm-hull-6857333.core
  (:require [enchilada :refer [canvas ctx value-of canvas-size]] [monet.canvas :refer [get-context stroke stroke-style stroke-cap begin-path close-path line-to move-to stroke-width]] [monet.core :refer [animation-frame]] [jayq.core :refer [$ document-ready data attr hide show]] [demo.rm-hull-6857333.util :refer [coord->pos]] [demo.rm-hull-6857333.generator :refer [create-maze]] [demo.rm-hull-6857333.solver :refer [solve]]))

(defn draw-path-segments [ctx snake start end]
  (let [[w h] (get-in snake [:maze :size])
        cell-size (get-in snake [:cell-size])
        offset (inc (quot cell-size 2))]
    (doseq [p (subvec (:path snake) start end)
            :let [x (rem p w)
                  y (rem (quot p w) h)]]
      (line-to (ctx) 
        (+ (* x cell-size) offset) 
        (+ (* y cell-size) offset)))
    ctx)) ; important to return ctx for threading

(defn eraser [ctx snake p]
  (if (and (>= p 0) (< p (:limit snake)))
    (-> 
      ctx
      (stroke-style (:erase-color snake))
      (begin-path)
      (draw-path-segments snake p (+ p 2))
      (stroke)
      (close-path)))
  ctx) ; important to return ctx for threading
 
(defn draw-snake [ctx snake]
  (let [start  (deref (:counter snake))
        end    (+ start (:snake-length snake))]
  (-> 
    ctx
    (stroke-width 4)
    (stroke-cap "square")
    (eraser snake (dec start))
    (stroke-style (:color snake))
    (begin-path)
    (draw-path-segments snake start end)
    (stroke)
    (close-path))))

(defn draw-cells [ctx maze cell-size]
  (let [[w h] (:size maze)]
    (doseq [[p walls] (map vector (iterate inc 0) (:data maze))
            :let [x (inc (* cell-size (rem p w)))
                  y (inc (* cell-size (rem (quot p w) h)))]]
      (when (:north walls) (-> ctx (move-to x y) (line-to (+ x cell-size) y)))
      (when (:west walls)  (-> ctx (move-to x y) (line-to x (+ y cell-size)))))
    ctx)) ; important to return ctx for threading

(defn draw-maze [ctx maze cell-size]
  (let [[w h] (:size maze)]
    (-> 
      ctx
      (stroke-width 2)
      (stroke-cap "square")
      (stroke-style "#606060")
      (begin-path)
      (move-to 0 (inc (* h cell-size)))
      (line-to (inc (* w cell-size)) (inc (* h cell-size)))
      (line-to (inc (* w cell-size)) 0)
      (draw-cells maze cell-size)   
      (stroke)
      (close-path))))

(defn start-end [snake-attrs]
  (map #(vector (:start %) (:end %)) snake-attrs))

(defn create-snake [ctx maze callback-fn & snake-attrs]
  (let [solutions (solve maze (start-end snake-attrs))]
    (doseq [index (range (count solutions)) 
            :let [path (nth solutions index)
                  attrs (nth snake-attrs index) 
                  snake-length (get attrs :snake-length (count path))]]
      (callback-fn 
        ctx 
        (assoc attrs
          :maze maze 
          :path path
          :counter (atom 0) 
          :snake-length snake-length
          :limit (- (count path) snake-length))))))
  
(defn reset-snake [ctx snake callback-fn]
  (let [start (nth (get-in snake [:maze :path]) @(:counter snake))
        end   (rand-int (dec (apply * (get-in snake [:maze :size]))))]
    (create-snake ctx (:maze snake) callback-fn (assoc snake :start start :end end))))

(defn animate [ctx snake]
  (letfn [(loop [] 
            (if (<= @(:counter snake) (:limit snake))
              (do
                (animation-frame loop)
                (draw-snake ctx snake)
                (swap! (:counter snake) inc))))]
     (loop)))

(defn random-snakes [cell-size limit n]
  (->> 
    (cycle ["#55B95F" "red" "#8182AE" "#AC85B5" "orange" "yellow"])
    (map #(hash-map :start (rand-int limit) :end (rand-int limit) :cell-size cell-size :color % :erase-color "white" :snake-length 8))
    (take n)
    vec))

(document-ready
  (fn []
    (let [cell-size (js/parseInt (value-of :cell-size 10))
          draw-cmd  (value-of :draw "snail")
          width     (dec (quot (first (canvas-size)) cell-size))
          height    (dec (quot (second (canvas-size)) cell-size))
          limit     (dec (* width height))
          maze      (create-maze rand-int width height)]
        (enchilada.core/show (canvas))
        (draw-maze ctx maze cell-size)
        (case (str draw-cmd) 
          "path"  (do (create-snake ctx maze draw-snake {:start 0 :end limit :cell-size cell-size :color "red" :erase-color "red"}) (hide-spinner))
          "snail" (create-snake ctx maze animate {:start 0 :end limit :cell-size cell-size :color "#8182AE" :erase-color "#E2E2F1" :snake-length 3})
          "snake" (apply (partial create-snake ctx maze animate) (random-snakes cell-size limit (value-of :count 5)))
          :else   nil))))