(ns enchilada.services.gamification
  (:use [clj-time.core :only [now]]
        [monger.operators]
        [enchilada.util.gist])
  (:require [monger.collection :as mc]
            [monger.joda-time]))

(defn- id [gist] {:gist (login-id gist)})

(def doc "gamification")

(defn update [gist]
  (mc/update doc (id gist) {$inc {:visits 1}} :upsert true))

(defn view [gist]
  (mc/find-one-as-map doc (id gist)))

(defn star [gist n]
  (mc/update doc (id gist) {$inc {:stars n}} :upsert true))

(defn unstar [gist]
  (star gist -1))
