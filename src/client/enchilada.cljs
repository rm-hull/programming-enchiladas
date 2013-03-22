(ns enchilada
  (:use [jayq.core :only [$]]))

(def canvas ($ :canvas#world)) 
(def ctx    (get-context (.get canvas 0) "2d")) 
