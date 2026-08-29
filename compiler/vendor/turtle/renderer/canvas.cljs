(ns turtle.renderer.canvas
  (:require [monet.canvas :refer [save restore stroke-width stroke-cap stroke-style fill fill-style
                             begin-path line-to move-to stroke close-path transform]]))

(defn- draw-op [state]
  (if (or (:restore-point state) (:move state))
    move-to
    line-to))

(defn- draw-path-segments! [ctx data]
  (begin-path ctx)
  (loop [data data
         x1 0.0
         y1 0.0]
    (if (nil? data)
      (-> ctx stroke close-path) ; return the context for threading
      (let [state (first data)
            [x2 y2] (:coords state)]
        (when-let [color (:fill state)]
          (-> ctx
              close-path
              (fill-style color)
              fill
              stroke
              begin-path
              (move-to x1 y1)))
        (when-let [color (:color state)]
          (-> ctx
              stroke
              close-path
              (stroke-style color)
              begin-path
              (move-to x1 y1)))
        (apply (draw-op state) ctx (:coords state))
        (recur (next data) x2 y2)))))

(defn ->canvas [ctx]
  (fn [data [w h] bounds matrix]
    (.log js/console (pr-str "screen-size" [w h]))
    (.log js/console (pr-str "bounds" bounds))
    (.log js/console (pr-str "matrix" matrix))
    (->
     (apply transform ctx matrix)
     (stroke-width 3)
     (stroke-cap :square)
     (draw-path-segments! data))))
