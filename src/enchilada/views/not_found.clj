(ns enchilada.views.not-found
  (:use [hiccup.core :only [html]] 
        [enchilada.views.common]))

(defn page [message & [req]]
  (layout "404"
    (html
      [:div#not-found [:p message]])))
