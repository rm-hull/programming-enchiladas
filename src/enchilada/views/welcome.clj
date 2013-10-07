(ns enchilada.views.welcome
  (:use [compojure.core :only [defroutes GET]]
        [ring.util.response :only [redirect file-response]]
        [hiccup.core :only [html]]
        [hiccup.element :only [image link-to]]
        [hiccup.page :only [include-js]]))

(defroutes routes
  ;(GET "/" [] "Welcome - TODO"))
  (GET "/robots.txt" [] (file-response "resources/private/robots.txt"))
  (GET "/" [] (redirect "/sitemap.xml")))

