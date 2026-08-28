(ns spike.dommy
  (:require [dommy.core :as d]
            [dommy.template :as dt])
  (:require-macros [dommy.macros :as dm]))

(defn ^:dev/after-load init []
  (println "dommy compiled OK")
  (dm/sel1 :#test))
