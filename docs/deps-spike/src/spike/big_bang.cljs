(ns spike.big-bang
  (:require [big-bang.core :refer [big-bang]]
            [big-bang.package :as pkg]
            [big-bang.components :as comp]
            [dommy.core :as d])
  (:require-macros [dommy.macros :as dm]
                   [cljs.core.async.macros :refer [go]]))

(defn ^:dev/after-load init []
  (println "big-bang compiled OK"))
