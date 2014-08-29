(ns enchilada.controllers.canvas
  (:require
    [compojure.core :refer [defroutes GET]]
    [ring.util.response :refer [status file-response response content-type header]]
    [hiccup.core :refer :all]
    [enchilada.util.compiler :refer [regenerate-if-stale]]
    [enchilada.util.fs :refer [output-file output-dir]]
    [enchilada.util.gist :refer [fetch]]
    [enchilada.util.time-ago :refer [latest-commit-date]]
    [enchilada.views.common :refer [html-exception]]
    [enchilada.views.canvas :refer [render-page]]
    [enchilada.services.gamification :as gamification]))


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

(defn- create-model [user id req]
  (let [gist (fetch user id)]
    { :debug (debug? req)
      :optimization-level (get-in req [:params :optimization-level])
      :gist gist
      :request req
      :stats (gamification/view gist)}))

(defn- perform-audits! [{:keys [gist stats] :as model}]
  (gamification/increment-visits gist)
  (let [delta (gamification/staleness stats (latest-commit-date gist))]
    (when-not (zero? delta)
      (gamification/set-last-updated gist delta)))
  model)

(defroutes routes
  (GET ["/_cljs/:owner/:id/generated.js", :id #"[a-f0-9]+"] [owner id :as req]
       (-> (create-model owner id req) (wrap-error-handler serve-js)))

  (GET "/_cljs/*" [:as req]
       (let [path (subs (:uri req) 6)]
         (serve-source-file
           (str (output-dir nil) path)
           (if (.endsWith path ".js.map")
             "application/json"
             "text/plain"))))

  (GET "/:owner/:id" [owner id :as req]
       (-> (create-model owner id req) perform-audits! render-page)))
