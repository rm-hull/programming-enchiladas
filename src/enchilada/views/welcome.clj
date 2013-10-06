(ns enchilada.views.welcome
  (:use [compojure.core :only [defroutes GET]]
        [ring.util.response :only [redirect]]
        [hiccup.core :only [html]]
        [hiccup.element :only [image link-to]]
        [hiccup.page :only [include-js]]))

(defroutes routes
  ;(GET "/" [] "Welcome - TODO"))
  (GET "/" [] (redirect "/sitemap.xml")))

