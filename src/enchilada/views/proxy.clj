(ns enchilada.views.proxy
  (:use [compojure.core :only [defroutes GET]]
        [ring.util.response :only [content-type response]])
  (:require [clj-http.client :as http]))

(defn proxy-request [url]
   (let [{:keys [status headers body] :as resp} (http/get url)]
      (println headers)
      (if (= status 200)
        (->
          (response body)
          (content-type (:content-type headers))))))
; need to replicate all/most of the returned headers

(defroutes routes
  (GET "/proxy" [:as req]
    (proxy-request (get-in req [:params :url]))))
