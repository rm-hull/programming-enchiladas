(ns enchilada.views.not-found
  (:use [hiccup.core :only [html]]
        [enchilada.views.common]))

(defn page [message & [req]]
  (layout
    :title "404"
    :content [:div#not-found [:p message]]))
