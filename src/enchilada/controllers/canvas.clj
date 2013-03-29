(ns enchilada.controllers.canvas
  (:use [compojure.core :only [defroutes GET]]
        [ring.util.response :only [file-response content-type header]]
        [enchilada.util.compiler :only [regenerate-if-stale]]
        [enchilada.util.fs :only [gzip-file]]
        [enchilada.util.gist :only [fetch]]
        [enchilada.views.canvas :only [render-page]])
  (:require [enchilada.services.gamification :as gamification]))
  

(defn- debug? [req]
   (= "true" (get-in req [:params :debug])))

(defn- serve-js [{:keys [gist debug] :as model}]
  (->
    gist
    (regenerate-if-stale debug)
    (gzip-file)  
    (file-response)
    (content-type "application/javascript")
    (header "Content-Encoding" "gzip")))

(defn- create-model [id req]
  { :debug (debug? req) :gist (fetch id) })

(defn- perform-audits! [{:keys [gist] :as model}] 
  (gamification/update gist)
  model)

(defroutes routes 
  (GET "/cljs/:id" [id :as req] 
       (-> (create-model id req) serve-js))

  (GET "/:login/:id" [login id :as req] 
       (-> (create-model id req) perform-audits! render-page)))

