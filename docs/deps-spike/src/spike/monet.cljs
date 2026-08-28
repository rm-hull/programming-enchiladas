(ns spike.monet
  (:require [monet.canvas :as mc]
            [monet.core :as mcore]))

(defn ^:dev/after-load init []
  (println "monet compiled OK"))
