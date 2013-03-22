(ns enchilada.handler
  (:use compojure.core
        [hiccup.middleware :only (wrap-base-url)])
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
  (GET "/cljs/:id" [id] (canvas/serve-js id))
  (GET "/:login/:id" [login id] (canvas/page (gist login id)))
  (route/resources "/assets")
  (route/not-found "You step in the stream, but the water has moved on."))

(def app
  (-> 
    (handler/site app-routes)
    (wrap-base-url)))

