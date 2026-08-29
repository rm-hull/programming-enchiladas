(ns demo.rm-hull-7098992.core
  (:require [enchilada :refer [canvas ctx value-of canvas-size]] [wireframes.renderer.canvas :refer [draw-solid ->canvas]] [wireframes.renderer.color :refer [wireframe solid]] [wireframes.transform :refer [combine rotate scale translate degrees->radians]] [wireframes.shapes.primitives :refer [transform-shape]] [wireframes.shapes.curved-solids :refer [make-torus make-wineglass make-sphere make-isosphere 
                                             make-mobius-strip make-klein-bottle make-klein-bagel]] [wireframes.shapes.platonic-solids :refer [cube tetrahedron icosahedron dodecahedron]] [demo.rm-hull-7098992.elite :refer [cobra-mk3]] [inkspot.color :refer [coerce]] [big-bang.core :refer [big-bang]] [monet.canvas :refer [get-context fill-rect fill-style]] [jayq.core :refer [show]]))

(def width (first (canvas-size)))
(def height (second (canvas-size)))

(defn inflate [shape multiplier]
  ((transform-shape (scale multiplier)) shape))

(def shape 
  (->
    (condp = (keyword (value-of :shape "torus"))
      :torus (make-torus 1 3 30 30)
      :wineglass (make-wineglass 20) 
      :sphere (make-sphere 3 30)
      :isosphere (make-isosphere 3 2)
      :mobius-strip (make-mobius-strip 50 10)
      :klein-bottle (make-klein-bottle 6 2 2 40)
      :klein-bagel (make-klein-bagel 2 40)
      :cobra cobra-mk3
      :cube cube
      :tetrahedron tetrahedron
      :icosahedron icosahedron
      :dodecahedron dodecahedron)
   (inflate (js/parseFloat (value-of :scale 1)))))

(def style
  (keyword (value-of :style :transparent)))

(def color
  (coerce (value-of :color :white)))

(def color-fn
  (condp = style
    :transparent (wireframe color style)
    :translucent (wireframe color style)
    :opaque (wireframe color style)
    :shaded (solid color)))

(defn render-shape 
  "Draws the shape at the given state of the world (the x,y,z rotation angles)"
  [[x y z]]
  (-> ctx
    (fill-style "rgba(255,255,255,0.75")
    (fill-rect { :x 0 :y 0 :w width :h height}))
  ((->canvas ctx)
    (partial draw-solid
      {:style style
       :focal-length 3
       :color-fn color-fn
       :shape shape
       :transform (combine
                    (rotate :x (degrees->radians x))
                    (rotate :y (degrees->radians y))
                    (rotate :z (degrees->radians z))
                    (translate 0 0 16))})
    [width height]))

(defn update-state 
  "Increment/decrement the rotation angles around the x,y and z axes"
  [event [x y z]]
  [(+ x 0.3) (- y 0.7) (+ z 0.5)])

(->
  ctx
  (fill-style :white)
  (fill-rect {:x 0 :y 0 :w width :h height}))

(enchilada.core/show (canvas))

(big-bang
  :initial-state [0 0 0]
  :on-tick update-state
  :to-draw render-shape)