(ns enchilada.views.proxy
  (:use [compojure.core :only [defroutes GET]]
        [ring.util.response :only [header response]])
  (:require [clj-http.client :as http]))

(defn- add-headers [response headers]
  (if (nil? headers)
    response
    (let [item (first headers)]
      (recur 
        (header response (key item) (val item))
        (next headers)))))

(defn proxy-request [url]
   (let [{:keys [status headers body]} (http/get url {:as :byte-array})]
      (if (= status 200)
        (->
          (response (java.io.ByteArrayInputStream. body))
          (add-headers headers)
          (header "x-proxied-by" "Programming Enchiladas")))))

(defroutes routes
  (GET "/proxy" [:as req]
    (proxy-request (get-in req [:params :url]))))

