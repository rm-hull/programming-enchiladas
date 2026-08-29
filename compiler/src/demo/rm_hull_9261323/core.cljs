(ns demo.rm-hull-9261323.core
  (:require [clojure.string :refer [split-lines]] [cljs.core.async :refer [chan <! >! go]] [dommy.core :refer [insert-after!]] [enchilada :refer [ctx canvas canvas-size proxy-request]] [wireframes.renderer.canvas :refer [draw-solid ->canvas]] [wireframes.renderer.color :refer [wireframe solid]] [wireframes.transform :refer [combine rotate scale translate identity degrees->radians]] [wireframes.shapes.primitives :refer [transform-shape center-at-origin]] [big-bang.core :refer [big-bang]] [big-bang.components :refer [dropdown slider color-picker]] [dataview.loader :refer [fetch-blob fetch-text]] [dataview.ops :refer [create-reader]] [polyhedra.core :refer [shape-spec]] [jayq.core :refer [show]])
  (:require-macros [dommy.macros :refer [sel1 node]])
  (:refer-clojure :exclude [identity]))

(def width (first (canvas-size)))
(def height (second (canvas-size)))

(def url-prefix "https://raw.github.com/rm-hull/polyhedra/master/resources/netlib/")

(defn shapes> [dest-chan]
  (let [src-chan (chan 1)]
    (go
      (loop []
        (when-let [msg (<! src-chan)]
          (->>
            (:polyhedra msg)
            (str url-prefix)
            proxy-request
            fetch-blob
            <!
            create-reader
            shape-spec
            center-at-origin
            (hash-map :shape)
            (>! dest-chan))
          (recur))))
    src-chan))

(defn to-keyword> [dest-chan]
  (let [src-chan (chan 1)]
    (go
      (loop []
        (when-let [msg (<! src-chan)]
          (>! dest-chan (update-in msg [:style] keyword))
          (recur))))
    src-chan))

(defn color-fn [style color]
  (condp = style
    :transparent (wireframe color style)
    :translucent (wireframe color style)
    :opaque (wireframe color style)
    :shaded (solid color)))

(def transform
  (memoize
    (fn [x y z depth offset?]
      (combine
        (if offset? (translate 1.17 2.28 0) identity)
        (rotate :x (degrees->radians x))
        (rotate :y (degrees->radians y))
        (rotate :z (degrees->radians z))
        (translate 0 0 depth)))))

(def styles (map name [:transparent :translucent :opaque :shaded]))

(def initial-state
  {:depth 12
   :focal-length 3
   :style (second styles)
   :color "#EAF5FC"
   :offset? false
   :x 0
   :y 0
   :z 0 })

(defn render-shape
  "Draws the shape at the given state of the world (the x,y,z rotation angles)"
  [{:keys [shape style color focal-length depth offset? x y z]}]
  (when shape

    (set! (.-fillStyle ctx) "rgba(255,255,255,0.75")
    (.fillRect ctx  0 0 width height)

    ((->canvas ctx)
      (partial draw-solid
        {:style style
         :focal-length focal-length
         :color-fn (color-fn style color)
         :shape shape
         :transform (transform x y z depth offset?)})
      [width height])))

(defn update-state
  "Increment/decrement the rotation angles around the x,y and z axes"
  [event {:keys [x y z] :as world-state}]
  (->
    world-state
    (assoc :x (+ x 0.3))
    (assoc :y (- y 0.7))
    (assoc :z (+ z 0.5))))

(defn not-well-formed? [shape]
  (nil? (:polygons shape)))

(defn handle-incoming-msg [event world-state]
  (when (and (:shape event) (not-well-formed? (:shape event)))
    (js/alert 
      (str 
        "Shape '" (get-in event [:shape :name]) 
        "' is not a well-formed 3D solid: please try another.")))

  (merge world-state event))

(defn start []
  (let [updates-chan (chan 1)]
    (go
      (let [catalog-url (proxy-request (str url-prefix "names.txt"))
            names (vec (split-lines (<! (fetch-text catalog-url))))]
        (->>
          (sel1 :#canvas-area)
          (insert-after! (node
                           [:div
                             [:div
                               (dropdown
                                 :id :polyhedra
                                 :label-text " Polyhedra:"
                                 :initial-value (rand-int (count names))
                                 :options (zipmap (iterate inc 0) names)
                                 :send-channel (shapes> updates-chan))
                               (dropdown
                                 :id :style
                                 :label-text " Style:"
                                 :initial-value (:style initial-state)
                                 :options (zipmap styles styles)
                                 :send-channel (to-keyword> updates-chan))
                               (color-picker
                                 :id :color
                                 :label-text " Color:"
                                 :initial-value (:color initial-state)
                                 :send-channel updates-chan)]
                             [:div
                               (slider
                                 :id :focal-length
                                 :label-text " Focal Length:"
                                 :initial-value (:focal-length initial-state)
                                 :min-value 1
                                 :max-value 25
                                 :send-channel updates-chan)
                               (slider
                                 :id :depth
                                 :label-text " Z-Depth:"
                                 :initial-value (:depth initial-state)
                                 :min-value 0
                                 :max-value 50
                                 :send-channel updates-chan)]])))))

    (big-bang
      :initial-state initial-state
      :on-tick update-state
      :to-draw render-shape
      :receive-channel updates-chan
      :on-receive handle-incoming-msg)))

(set! (.-fillStyle ctx) "white")
(.fillRect ctx  0 0 width height)

(enchilada.core/show (canvas))
(start)