(ns enchilada.handler
  (:use [compojure.core]
        [ring.middleware.params :only [wrap-params]] 
        [hiccup.middleware :only [wrap-base-url]])
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
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
  (GET "/cljs/:id" [id :as req] (canvas/serve-js id req))
  (GET "/:login/:id" [login id :as req] (canvas/page (gist login id) req))
  (route/resources "/assets")
  (route/not-found "You step in the stream, but the water has moved on."))

(def app
  (-> 
    (handler/site app-routes)
    (wrap-base-url)
    (wrap-params)))

