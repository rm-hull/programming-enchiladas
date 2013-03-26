(ns enchilada.handler
  (:use [compojure.core]
        [ring.middleware.params :only [wrap-params]] 
        [hiccup.middleware :only [wrap-base-url]]
        [enchilada.util.gist :only [fetch]])  
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [enchilada.views.not-found :as not-found]  
            [enchilada.views.canvas :as canvas]))

(defn validate 
  "Protect against mischeivous parent paths in a gist"
  [& fields]
  (if (some (partial = "..") fields)
    (throw (IllegalArgumentException. "Invalid login/id"))))

(defn- gist [login id] 
  (validate login id) 
  {:user {:login login} :id (str id)})

(defroutes app-routes
  (GET "/" [] "Welcome - TODO")
  (GET "/stats" [] "stats page - TODO")
  (GET "/cljs/:id" [id :as req] (canvas/serve-js (fetch id) req))
  (GET "/:login/:id" [login id :as req] (canvas/page (fetch id) req))
  (route/resources "/assets")
  (route/not-found (not-found/page "You step in the stream, but the water has moved on.")))

(def app
  (-> 
    (handler/site app-routes)
    (wrap-base-url)
    (wrap-params)))

