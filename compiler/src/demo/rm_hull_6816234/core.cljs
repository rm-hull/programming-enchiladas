(ns demo.rm-hull-6816234.core
  (:require [cljs.core.logic :refer [-take*]])
  (:require-macros [cljs.core.logic :as m]))

(m/defne moveo [before action after]
  ([[:middle :onbox :middle :hasnot]
    :grasp
    [:middle :onbox :middle :has]])
  ([[pos :onfloor pos has]
    :climb
    [pos :onbox pos has]])
  ([[pos1 :onfloor pos1 has]
    :push
    [pos2 :onfloor pos2 has]])
  ([[pos1 :onfloor box has]
    :walk
    [pos2 :onfloor box has]]))

(m/defne cangeto [state out]
  ([[_ _ _ :has] true])
  ([_ _] (m/fresh [action next]
           (moveo state action next)
           (cangeto next out))))

(println 
  (m/run 1 [q]
    (cangeto [:atdoor :onfloor :atwindow :hasnot] q))) ; (true)