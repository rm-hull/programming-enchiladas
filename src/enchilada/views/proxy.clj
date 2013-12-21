(ns enchilada.views.proxy
  (:use [compojure.core :only [defroutes GET]]
        [ring.util.response :only [header response]])
  (:require [clj-http.client :as http]
            [clojure.string :as str])
  (:import [java.io ByteArrayInputStream]))

(defn- add-original-headers [response headers]
  (if (nil? headers)
    response
    (let [item (first headers)]
      (recur
        (header response (key item) (val item))
        (next headers)))))

(defn- add-cors-headers [response request-headers]
  ; attribution: https://github.com/gr2m/CORS-Proxy/blob/master/src/corsproxy.coffee
  (let [x-headers (->>
                    (keys request-headers)
                    (filter #(.startsWith (str %) "x-")))
        headers (str
                  "accept, accept-charset, accept-encoding, "
                  "accept-language, authorization, content-length, "
                  "content-type, host, origin, proxy-connection, "
                  "referer, user-agent, x-requested-with, "
                  (str/join ", " x-headers))]
    (->
      response
      (header "access-control-allow-methods" "HEAD, POST, GET, PUT, PATCH, DELETE")
      (header "access-control-max-age" "8640") ; 24 hours
      (header "access-control-allow-headers" headers)
      (header "access-control-allow-credentials" "true")
      (header "access-control-allow-origin" (get request-headers :origin "*")))))

(defn proxy-request [req]
   (let [url (get-in req [:params :url])
         resp (http/get url {:as :byte-array})]
      (if (= (:status resp) 200)
        (->
          (response (ByteArrayInputStream. (:body resp)))
          (add-original-headers (:headers resp))
          (add-cors-headers (:headers req))
          (header "x-proxied-by" "Programming Enchiladas")))))

(defroutes routes
  (GET "/proxy" [:as req] (proxy-request req)))
