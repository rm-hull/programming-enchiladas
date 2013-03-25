(ns enchilada
  (:use [monet.canvas :only [get-context]]
        [jayq.core :only [$ hide]]))

(def canvas ($ :canvas#world)) 
(def ctx    (get-context (.get canvas 0) "2d")) 

(hide ($ :div#spinner))
