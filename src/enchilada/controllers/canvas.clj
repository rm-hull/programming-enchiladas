(ns enchilada.controllers.canvas
  (:use [compojure.core :only [defroutes GET]]
        [ring.util.response :only [status file-response response content-type header]]
        [hiccup.core] 
        [enchilada.util.compiler :only [regenerate-if-stale]]
        [enchilada.util.fs :only [gzip-file]]
        [enchilada.util.gist :only [fetch]]
        [enchilada.views.common :only [html-exception]] 
        [enchilada.views.canvas :only [render-page]])
  (:require [enchilada.services.gamification :as gamification]))
  

(defn- debug? [req]
   (= "true" (get-in req [:params :debug])))

(defn- serve-js [{:keys [gist] :as build-opts}]
  (->
    (regenerate-if-stale gist build-opts)
    (gzip-file)  
    (file-response)
    (content-type "application/javascript")
    (header "Content-Encoding" "gzip")))

(defn- serve-error [ex]
  (-> 
    (str "$('div#spinner').hide();"
         "$('canvas#world').slideUp();"
         "$('div#error').html('" (html [:h1 "Compilation failed:"]) (html-exception ex) "').fadeIn();")
    (response)
    (content-type "application/javascript")))

(defn- wrap-error-handler [model f]
  (try
    (f model)
    (catch Exception ex (serve-error ex))))

(defn- create-model [id req]
  { :debug (debug? req) 
    :optimization-level (get-in req [:params :optimization-level])
    :gist (fetch id) })

(defn- perform-audits! [{:keys [gist] :as model}] 
  (gamification/update gist)
  model)

(defroutes routes 
  (GET "/cljs/:id" [id :as req] 
       (-> (create-model id req) (wrap-error-handler serve-js)))

  (GET "/:login/:id" [login id :as req] 
       (-> (create-model id req) perform-audits! render-page)))
