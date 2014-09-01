(ns enchilada.views.not-found
  (:require
   [ring.util.response :as response]
   [enchilada.views.common :refer [layout]]))

(def messages [
  "You step in the stream, but the water has moved on."
  "Nothing to sea here. Keep clam."])

(defn page [& [req]]
  (response/not-found
    (layout
      :title "404"
      :content [:div#not-found
                [:p (rand-nth messages)]
                [:p.err404 "404"]])))
