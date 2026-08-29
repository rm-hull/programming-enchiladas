(ns demo.rm-hull-5233367.demo
  (:require [monet.canvas :refer [fill-style rect]] [jayq.core :refer [show]] [enchilada :refer [ctx canvas]] [transcendental-numbers/utils :as utils] [transcendental-numbers/square-root :as sqrt] [transcendental-numbers/champernownes-constant :as champernowne]))

(def color-swatch 
  { :honeysuckle  "#E16889"
    :coral-rose   "#FE853E"
    :peapod       "#6EC59B"
    :beeswax      "#FDBA52"
    :silver-peony "#F5DED0"
    :russet       "#94614C"
    :regatta      "#2D97D3"
    :blue-curacao "#48C3CB" 
    :lavender     "#A9A6D3"
    :silver-cloud "#C0C1BC" })

(enchilada.core/show (canvas))

(let [size   4
      colors (vec (vals color-swatch))
      data   (map vector (utils/coords 800 600 :step size) champernowne/digit-seq)]
  (doseq [[[x y] digit] data]
    (-> 
      enchilada/ctx
      (fill-style (get colors digit))
      (rect {:x x :y y :w size :h size})))) 
