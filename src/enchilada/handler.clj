(ns enchilada.handler
  (:use compojure.core
        [hiccup.middleware :only (wrap-base-url)])
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [enchilada.views.canvas :as canvas]))

(defroutes app-routes
  (GET "/" [] "Welcome - TODO")
  (GET "/stats" [] "stats page - TODO")
  (GET "/cljs/:user/:gist" [user gist] (str '(cljs/compile user gist)))
  (GET "/:user/:gist" [user gist] (canvas/page user gist))
  (route/resources "/assets")
  (route/not-found "Not Found"))

(def app
  (-> 
    (handler/site app-routes)
    (wrap-base-url)))
