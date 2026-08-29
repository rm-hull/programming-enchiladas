(ns demo.rm-hull-8617788.core
  (:require [big-bang.core :refer [big-bang]] [big-bang.events.browser :refer [client-coords]] [dommy.core :refer [insert-after!]])
  (:require-macros [dommy.macros :refer [sel1 node]]))

(->> 
  (sel1 :#canvas-area)
  (insert-after! (node [:div#app])))

(def app (sel1 :#app))

(defn update [event world-state] 
  (assoc world-state :mouse-coords (client-coords event)))

(defn render [world-state]
  (set! 
    (.-innerText app) 
    (pr-str (:mouse-coords world-state))))

(big-bang
  :initial-state {:mouse-coords [0 0]}
  :on-mousemove update
  :to-draw render)