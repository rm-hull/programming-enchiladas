(ns enchilada
  (:use [monet.canvas :only [get-context]]
        [jayq.core :only [$]]))

(def canvas ($ :canvas#world)) 
(def ctx    (get-context (.get canvas 0) "2d")) 
