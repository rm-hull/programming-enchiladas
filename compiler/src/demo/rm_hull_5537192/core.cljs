(ns demo.rm-hull-5537192.core
  (:require [jayq.core :refer [show hide]] [c2.core :refer [unify]] [c2.geo.core :refer [geo->svg]] [c2.geo.projection :refer [albers]] [demo.rm-hull-5537192.world :refer [countries]] [enchilada :refer [canvas svg]] [c2.scale :as scale])
  (:require-macros [c2.util :refer [bind!]]))

(enchilada.core/hide (canvas))
(enchilada.core/show (svg))

(let [data (map (fn [[country geo]]
                  {:country country
                   :geo geo})
                countries)
      proj (albers :scale 190 :origin [0 0] :parallels [0, 0.1] :translate [590 250])]

  (bind! "svg#svg-area" 
    [:svg {:xmlns "http://www.w3.org/2000/svg"
             :preserveAspectRatio "xMinYMin meet"
             :width 960 :height 400
             :viewBox "0 0 950 500"}
  
       [:g.countries
        (unify data
               (fn [{:keys [country geo]}]
                 [:path.country {:name country
                                 :d (geo->svg geo
                                              :projection proj)
                                 :stroke "black"
                                 :fill "lightblue"
                                 }]))]]))