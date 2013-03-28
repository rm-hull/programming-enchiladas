(ns enchilada.handler
  (:use [compojure.core]
        [ring.middleware.params :only [wrap-params]] 
        [hiccup.middleware :only [wrap-base-url]])
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [monger.core :as mg]
            [enchilada.views.not-found :as not-found]  
            [enchilada.views.canvas :as canvas]
            [enchilada.views.stats :as stats]  
            [enchilada.views.welcome :as welcome]))  

(when-let [connection-details (System/getenv "MONGO_URL")]
  (mg/connect-via-uri! connection-details)) 

(defroutes app-routes
  welcome/routes
  stats/routes
  canvas/routes
  (route/resources "/assets")
  (route/not-found (not-found/page "You step in the stream, but the water has moved on.")))

(def app
  (-> 
    (handler/site app-routes)
    (wrap-base-url)
    (wrap-params)))

