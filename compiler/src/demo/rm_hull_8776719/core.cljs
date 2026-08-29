(ns demo.rm-hull-8776719.core
  (:require [cljs.core.async :as async] [dommy.core :refer [insert-after!]] [enchilada :refer [ctx canvas canvas-size]] [jayq.core :refer [show]] [monet.canvas :refer [fill-style fill-rect circle rotate translate]] [big-bang.core :refer [big-bang]] [big-bang.components :refer [slider]])
  (:require-macros [dommy.macros :refer [sel1 node]]))

(def dimensions 
  (let [[width height] (canvas-size)]
    {:x (quot width -2) :y (quot height -2) :w width :h height}))

(def initial-state 
  {:t 0
   :k 0.45
   :ctx ctx
   :persistence 95
   :clear? false})

(defn incoming [event world-state]
  (merge world-state event (if (:k event) {:clear? true})))

(defn tock [event world-state]
  (-> 
    world-state 
    (update-in [:t] inc)
    (assoc :clear? false)))

(defn draw-point! [ctx t k]
  (let [t (/ t 60)
        a 1
        b (/ a k)
        a-minus-b (- a b)
        x (+ (* a-minus-b (Math/cos t))
             (* b         (Math/cos (* t (dec k)))))
        y (- (* a-minus-b (Math/sin t))
             (* b         (Math/sin (* t (dec k)))))
        scale (if (< k 1.0) 
                (* 150 k) 
                200)]
    (->
      ctx
      (fill-style :red)
      (circle {:x (* scale x) :y (* scale y) :r 3}))))

(defn render-frame! [{:keys [clear? k t persistence ctx] :as world-state}]
  (let [color (if clear?
                :white
                (str "rgba(255,255,255," (double (/ (- 100 persistence) 100)) ")"))]
    (->
      ctx
      (fill-style color)
      (fill-rect dimensions)
      (draw-point! t k))))

(let [chan (async/chan)]

  (enchilada.core/show (canvas))
  (translate (ctx) (quot (dimensions :w) 2) (quot (dimensions :h) 2))

  (->>
    (sel1 :#canvas-area)
    (insert-after! (node
                     [:div
                       (slider
                         :id :persistence
                         :label-text "Persistence:"
                         :min-value 0
                         :max-value 100
                         :initial-value (initial-state :persistence)
                         :send-channel chan)
                       [:span {:style "padding-right: 100px"}]
                       (slider
                         :id :k
                         :label-text "k:"
                         :min-value 0.05
                         :max-value 10
                         :step 0.05
                         :initial-value (initial-state :k)
                         :send-channel chan)])))
  (big-bang
    :initial-state initial-state
    :receive-channel chan
    :on-receive incoming
    :on-tick tock
    :to-draw render-frame!))