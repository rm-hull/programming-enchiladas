(ns enchilada.handler
  (:use [compojure.core]
        [ring.middleware.params :only [wrap-params]]
        [ring.middleware.gzip :only [wrap-gzip]]
        [enchilada.middleware.cache :only [wrap-cache-control]]
        [hiccup.middleware :only [wrap-base-url]]
        [enchilada.util.keepalive :only [ping]]
        [enchilada.util.fs])
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [enchilada.controllers.canvas :as canvas]
            [enchilada.views.not-found :as not-found]
            [enchilada.views.proxy :as proxy]
            [enchilada.views.create :as create]
            [enchilada.views.stats :as stats]
            [enchilada.views.sitemap :as sitemap]
            [enchilada.views.welcome :as welcome]))

(def keep-alive
  (when-let [url (System/getenv "KEEPALIVE_URL")]
    (ping url 47)))

(defroutes app-routes
  welcome/routes
  create/routes
  stats/routes
  canvas/routes
  sitemap/routes
  proxy/routes
  (route/resources "/assets")
  (route/not-found (not-found/page "You step in the stream, but the water has moved on.")))

(def app
  (->
    (handler/site app-routes)
    (wrap-gzip)
    (wrap-cache-control {:max-age 2592000 :public true :must-revalidate true} #{"/assets/images" "/assets/css" "/assets/js" "/images"})
    (wrap-base-url)
    (wrap-params)))

