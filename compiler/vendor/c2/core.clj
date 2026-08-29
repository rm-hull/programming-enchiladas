(ns c2.core
  (:require [clojure.string :refer [join]]))

(defn unify
  "Map `data` to hiccup vectors via provided `mapping` function."
  ([data mapping]
     (map mapping data))
  ([container data mapping]
      (into container (unify data mapping))))
