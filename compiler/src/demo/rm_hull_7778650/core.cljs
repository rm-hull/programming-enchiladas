(ns demo.rm-hull-7778650.core
  (:require [enchilada :refer [webgl proxy-request value-of to-js]] [jayq.core :refer [document-ready show hide $]])
  (:require-macros [enchilada.util.macros :as m]))

(def random-texture
  (let [planets [:earth :jupiter :mars :mercury :moon
                 :neptune :saturn :sun :uranus :venus]]
    (fn []
      (nth planets (rand-int (count planets))))))

(defn texture-uri [texture]
  (str "https://raw.github.com/rm-hull/solar-textures/master/resources/" (name texture) ".jpg"))

(def filename
  (proxy-request
    (texture-uri
      (value-of :texture (random-texture)))))

(def globe
  (js/PhiloGL.O3D.Sphere.
    (to-js
      { :nlat 30
        :nlong 30
        :radius 2
        :textures filename})))

(def last-pos (atom [0 0]))

(defn on-drag-start [e]
  (swap! last-pos (constantly [(.-x e) (.-y e)])))

(def cam-ob (atom nil))

(defn on-drag-move [e]
  (let [pos [(.-x e) (.-y e)]
        delta-pos (mapv - pos @last-pos)]
    ;; for some reason, we need to switch y and x here to acquire sensible
    ;; rotation semantics. TODO: understand this properly
    (m/inc! (.-y (.-rotation globe)) (/ (delta-pos 0) 100))
    (m/inc! (.-x (.-rotation globe)) (/ (delta-pos 1) 100))
    (.update globe)
    (swap! last-pos (constantly pos))))

(defn on-mouse-wheel [e]
  (m/inc! (.-z (.-position @cam-ob)) (.-wheel e))
  (.update @cam-ob))

(defn on-error [msg]
  (js/alert (str "There was an error creating the WebGL demo:\n\n" msg)))

(defn init [canvas scene gl]
  (.clearColor gl 0.0 0.0 0.0 1.0)
  (.clearDepth gl 1.0)
  (.enable gl (.-DEPTH_TEST gl))
  (.depthFunc gl (.-LEQUAL gl))
  (.viewport gl 0 0 (.-width canvas) (.-height canvas))
  (.add scene globe))

(defn draw [canvas scene gl]
  (.clear gl (bit-or (.-COLOR_BUFFER_BIT gl) (.-DEPTH_BUFFER_BIT gl)))
  (set! (.. scene -config -lights)
        (to-js {:enable true
                :ambient {:r 0.2 :g 0.2 :b 0.2}
                :directional {:color {:r 0.8 :g 0.8 :b 0.8}
                              :direction {:x -1.0 :y -1.0 :z -1.0}}}))
  (.render scene))

(defn on-load [app]
  (let [canvas (.-canvas app)
        scene (.-scene app)
        gl (.-gl app)
        cam (.-camera app)]
    (init canvas scene gl)
    (reset! cam-ob cam)
    ((fn draw-and-request []
       (draw canvas scene gl)
       (js/PhiloGL.Fx.requestAnimationFrame draw-and-request)))))

(def camera
  {:position {:x 0 :y 0 :z -7}})

(def textures
  {:src [filename]
   :parameters [{:name "TEXTURE_MAG_FILTER" :value "LINEAR"}
                {:name "TEXTURE_MIN_FILTER" :value "LINEAR"}
                {:name "TEXTURE_WRAP_S" :value "CLAMP_TO_EDGE"}
                {:name "TEXTURE_WRAP_T" :value "CLAMP_TO_EDGE"}]})

(defn webgl-start []
  (enchilada.core/show (webgl))
  (js/PhiloGL
    "webgl-area"
    (to-js
      { :camera camera
        :textures textures
        :events {
          :onDragStart on-drag-start
          :onDragMove on-drag-move
          :onMouseWheel on-mouse-wheel}
        :onError on-error
          :onLoad on-load})))

(document-ready webgl-start)
