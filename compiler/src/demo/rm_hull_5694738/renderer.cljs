(ns demo.rm-hull-5694738.renderer
  (:require [arbor :as arbor] [enchilada :refer [ctx canvas value-of]] [demo.rm-hull-5694738.core :refer [digraph fixed-point?]] [jayq.core :refer [show]] [monet.canvas :refer [begin-path move-to line-to save translate rotate restore 
                          fill-style fill fill-rect circle text text-align text-baseline
                          stroke-style stroke-width stroke]]))

(defn draw-edge! [edge pt1 pt2]
  (let [x1 (.-x pt1) 
        y1 (.-y pt1)
        x2 (.-x pt2) 
        y2 (.-y pt2)
        angle (+ (Math/atan (/ (- y2 y1) (- x2 x1)))
                 (/ Math/PI (if (> x2 x1) 2 -2)))]
    (->
      ctx
      (move-to x1 y1)   ; line
      (line-to x2 y2)
      (save)            ; arrow on (x2,y2)
      (translate x2 y2)
      (rotate angle)
      (move-to 3 15)
      (line-to 0 8)
      (line-to -3 15)
      (restore))))

(defn draw-node! [node pt]
  (let [args {:x (.-x pt) :y (.-y pt) :r 10 :text (.-name node)}]
    (->
      ctx
      (fill-style :lightblue)
      (circle args)
      (fill)
      (fill-style :black)
      (text args))))

(deftype Renderer [init redraw])

(defn renderer [width height]
  (let [particle-system (atom nil)]
    (Renderer. 
      ; init
      (fn [system]
        (reset! particle-system system)
          (. @particle-system (screenSize width height))
          (. @particle-system (screenPadding 80)))

      ; redraw
      (fn []
        (-> 
          ctx
          (text-align :center)
          (text-baseline :middle)
          (fill-style :white) 
          (fill-rect {:x 0 :y 0 :w width :h height})
          (stroke-style :lightgrey)
          (stroke-width 1)
          (begin-path))

        (. @particle-system (eachEdge draw-edge!))
        (-> ctx (stroke))
        (. @particle-system (eachNode draw-node!))))))

(defn process [n f]
  (let [edges (digraph (js/parseInt n) f)
        sys   (arbor/ParticleSystem. 
                (js/parseInt (value-of :repulsion 200)) 
                (js/parseInt (value-of :stiffness 100)) 
                (js/parseFloat (value-of :friction 0.5))
                true)]  ; gravity
    (set! (.-renderer sys) (renderer 800 600))

    (doseq [[from to] (remove fixed-point? edges)]
      (.addEdge sys (str from) (str to) (clj->js {"length" 2})))

    (doseq [node (->> edges (filter fixed-point?) (map first))]
      (.addNode sys (str node) (clj->js {"mass" 1.0})))))

(enchilada.core/show (canvas))
(process 
  (value-of :num 51)
  (fn [x] (* x x)))