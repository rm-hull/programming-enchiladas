(ns enchilada.services.gamification
  (:refer-clojure :exclude [sort find])
  (:require
    [monger.collection :as mc]
    [monger.core :as mg]
    [monger.operators :refer :all]
    [monger.query :refer :all]
    [enchilada.util.gist :refer :all]
    [clj-time.coerce :refer [to-long]]))

(defn- id [gist] {:gist (login-id gist)})

(def mongo-client
  (when-let [connection-details (System/getenv "MONGODB_URL")]
    (mg/connect-via-uri! connection-details)))

(def doc "gamification")

(defn increment-visits [gist]
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

(defn staleness [stats last-updated-dt]
  (- (to-long last-updated-dt) (get stats :last_updated 0)))

(defn set-last-updated [gist delta]
  (when mongo-client
    (mc/update doc (id gist) {$inc {:last_updated delta}} :upsert true)))

(defn top-n [field order n]
  (when mongo-client
    (->>
      (with-collection doc
        (find {})
        (fields [:gist :hidden])
        (sort (sorted-map field order))
        (limit n))
      (remove :hidden))))
