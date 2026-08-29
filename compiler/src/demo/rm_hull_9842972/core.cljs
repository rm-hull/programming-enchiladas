(ns demo.rm-hull-9842972.core
  (:require [enchilada :refer [webgl proxy-request value-of show hide]] [jayq.core :refer [document-ready show hide $]])
  (:require-macros [enchilada.util.macros :as m]))
 
(enchilada.core/show ($ :div#spinner))

(def random-texture
  (let [locations ["Brimham Rocks, North Yorkshire, UK"
                   "Brimham Rocks 2, North Yorkshire, UK"
                   "Happisburgh Lighthouse, Norfolk, UK"
                   "Harlow Carr, Harrogate, UK"
                   "Knaresborough Castle, North Yorkshire, UK"
                   "Prainha - beach, Algarve, Portugal"
                   "Prainha - clifftop, Algarve, Portugal"
                   "Wells-next-the-Sea, Norfolk, UK"]]
    (fn []
      (rand-nth locations))))
 
(defn texture-uri [texture]
  (str "https://raw.github.com/rm-hull/photosphere/master/panoramas/padded/" texture ".jpg"))
 
(def filename
  (proxy-request
    (texture-uri
      (value-of :texture (random-texture)))))
 
(def globe
  (js/PhiloGL.O3D.Sphere.
    (clj->js
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
        delta-pos (mapv - pos @last-pos)
        matrix (.-matrix globe)]

    ; Rotate about the Y axis for horizontal movement
    ;(m/inc! (.-y (.-rotation globe)) (/ (delta-pos 0) -100))
    ; Rotate about the X axis for vertical movement
    ;(m/inc! (.-x (.-rotation globe)) (/ (delta-pos 1) -100))
    ;(.update globe)
    
    (.$rotateAxis matrix (/ (delta-pos 0) -100) (clj->js [0 1 0]))
    (.$rotateAxis matrix (/ (delta-pos 1) -100) (clj->js [1 0 0]))

    (swap! last-pos (constantly pos))))
 
(defn on-error [msg]
  (js/alert (str "There was an error creating the WebGL demo:\n\n" msg)))
 
(defn init [canvas scene gl]
  (.clearColor gl 1.0 1.0 1.0 1.0)
  (.clearDepth gl 1.0)
  (.enable gl (.-DEPTH_TEST gl))
  (.depthFunc gl (.-LEQUAL gl))
  (.viewport gl 0 0 (.-width canvas) (.-height canvas))
  (.add scene globe))
 
(defn draw [canvas scene gl]
  (.clear gl (bit-or (.-COLOR_BUFFER_BIT gl) (.-DEPTH_BUFFER_BIT gl)))
  (set! 
    (.. scene -config -lights)
    (clj->js 
      {:enable true
       :ambient {:r 1.0 :g 1.0 :b 1.0}
       :directional {:color {:r 0.0 :g 0.0 :b 0.0}
       :direction {:x -1.0 :y -1.0 :z -1.0}}}))
  (.render scene))
 
(defn on-load [app]
  (enchilada.core/show (webgl))
  (enchilada.core/hide ($ :div#spinner))
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
  {:position {:x 0 :y 0 :z -2.0}})
 
(def textures
  { :src [filename]
    :pixelStore [{:name "UNPACK_FLIP_Y_WEBGL" :value false }]
    :parameters [{:name "TEXTURE_MAG_FILTER" :value "LINEAR"}
                 {:name "TEXTURE_MIN_FILTER" :value "LINEAR"}
                 {:name "TEXTURE_WRAP_S" :value "CLAMP_TO_EDGE"}
                 {:name "TEXTURE_WRAP_T" :value "CLAMP_TO_EDGE"}]})
 
(defn webgl-start []
  (js/PhiloGL
    "webgl-area"
    (clj->js
      { :camera camera
        :textures textures
        :events {
          :onDragStart on-drag-start
          :onDragMove on-drag-move
          :onMouseWheel on-mouse-wheel}
        :onError on-error
        :onLoad on-load})))
 
(document-ready webgl-start)