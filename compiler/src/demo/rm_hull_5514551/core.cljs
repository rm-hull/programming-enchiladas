(ns demo.rm-hull-5514551.core
  (:require [jayq.core :refer [show hide]] [c2.core :refer [unify]] [c2.maths :refer [extent floor]] [c2.geo.core :refer [geo->svg]] [c2.geo.projection :refer [albers-usa]] [demo.rm-hull-5514551.us :refer [states]] [enchilada :refer [canvas svg]] [c2.scale :as scale] [vomnibus.color-brewer :as color-brewer])
  (:require-macros [c2.util :refer [bind!]]))

(enchilada.core/hide (canvas))
(enchilada.core/show (svg))

(let [data (map (fn [[state geo]]
                  {:state state
                   :geo geo
                   :value (rand)})
                states)

      color-scheme color-brewer/Greens-9
      color-scale (let [s (scale/linear :domain (extent (map :value data))
                                        :range [0 (dec (count color-scheme))])]
                    ;;todo: build interpolators so scales handle non-numeric ranges
                    (fn [d] (nth color-scheme (floor (s d)))))

      proj (albers-usa)]

  (bind! "svg#svg-area" 
    [:svg {:xmlns "http://www.w3.org/2000/svg"
             :preserveAspectRatio "xMinYMin meet"
             :width 960 :height 400
             :viewBox "0 0 950 500"}

      (unify 
        data
        (fn [{:keys [state geo value]}]
          [:g
            [:title state]
            [:path.state {:name state
                          :d (geo->svg geo :projection proj)
                          :stroke "black"
                          :fill (color-scale value)}]]))]))