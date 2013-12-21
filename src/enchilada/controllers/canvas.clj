(ns enchilada.controllers.canvas
  (:use [compojure.core :only [defroutes GET]]
        [ring.util.response :only [status file-response response content-type header]]
        [hiccup.core]
        [enchilada.util.compiler :only [regenerate-if-stale]]
        [enchilada.util.fs :only [output-file output-dir]]
        [enchilada.util.gist :only [fetch]]
        [enchilada.views.common :only [html-exception]]
        [enchilada.views.canvas :only [render-page]])
  (:require [enchilada.services.gamification :as gamification]))


(defn- debug? [req]
   (= "true" (get-in req [:params :debug])))

(defn- serve-js [{:keys [gist] :as build-opts}]
  (->
    (regenerate-if-stale gist build-opts)
    (output-file)
    (file-response)
    (content-type "application/javascript")))

(defn- serve-source-file [path file-type]
  (->
    (file-response path)
    (content-type file-type)))

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
  (let [gist (fetch id)]
    { :debug (debug? req)
      :optimization-level (get-in req [:params :optimization-level])
      :gist gist
      :stats (gamification/view gist)}))

(defn- perform-audits! [{:keys [gist] :as model}]
  (gamification/update gist)
  model)

(defroutes routes
  (GET ["/_cljs/:user/:id/generated.js", :id #"[a-f0-9]+"] [user id :as req]
       (-> (create-model id req) (wrap-error-handler serve-js)))

  (GET "/_cljs/*" [:as req]
       (let [path (subs (:uri req) 6)]
         (serve-source-file
           (str (output-dir nil) path)
           (if (.endsWith path ".js.map")
             "application/json"
             "text/plain"))))

  (GET "/:login/:id" [login id :as req]
       (-> (create-model id req) perform-audits! render-page)))
