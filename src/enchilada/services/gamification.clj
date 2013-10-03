(ns enchilada.services.gamification
  (:use [clj-time.core :only [now]]
        [monger.operators]
        [enchilada.util.gist])
  (:require [monger.collection :as mc]
            [monger.core :as mg]
            [monger.joda-time]))

(defn- id [gist] {:gist (login-id gist)})

(def mongo-client
  (when-let [connection-details (System/getenv "MONGODB_URL")]
    (mg/connect-via-uri! connection-details)))

(def doc "gamification")

(defn update [gist]
  (when mongo-client
    (mc/update doc (id gist) {$inc {:visits 1}} :upsert true)))

(defn view [gist]
  (when mongo-client
    (mc/find-one-as-map doc (id gist))))

(defn star
  ([gist]
   (star gist 1))
  ([gist n]
   (when mongo-client
     (mc/update doc (id gist) {$inc {:stars n}} :upsert true))))

(defn unstar [gist]
  (when mongo-client
    (star gist -1)))
