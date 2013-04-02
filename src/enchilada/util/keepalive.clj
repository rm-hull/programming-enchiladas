(ns enchilada.util.keepalive
  (:require [clj-http.client :as http]))

(defn ping [url delay-mins]
  (future 
    (Thread/sleep (* delay-mins 60 1000))
    (ping url delay-mins)
    (http/get url)))
