(ns enchilada.util.gist
  (:require [clj-http.client :as http]
            [clojure.data.json :as json]))

(defn- url [gist-id] (str "https://api.github.com/gists/" gist-id))

(defn fetch 
  "Parses a gist from JSON into an keyword hash"
  [gist-id]
  (let [{:keys [status headers body] :as resp} (http/get (url gist-id))]
      (if (= status 200)
        (json/read-str body :key-fn keyword))))

; https://api.github.com/gists/5201050
;
;(def x (fetch 5201050))
;
;(:raw_url (first (vals (:files x)))) 
;
;
;(-> x :files vals first :raw_url)
;
;(-> x :files vals first :content)
;
;
;(fetch 5201050) 
