(ns enchilada.util.gist
  (:use [clj-time.format :only [parse]]
        [clj-time.coerce :only [to-long]])
  (:require [clj-http.client :as http]
            [clojure.data.json :as json]))

(defn- url [id] (str "https://api.github.com/gists/" id))

(defn fetch 
  "Parses a gist from JSON into a keyword hash"
  [id]
  (let [{:keys [status headers body] :as resp} (http/get (url id))]
      (if (= status 200)
        (json/read-str body :key-fn keyword))))

(defn login-id 
  "Constructs the github \"login/id\" path element"
  [gist]
  (str (get-in gist [:user :login]) "/" (:id gist)))

(defn last-modified 
  "Converts the updated_at field into a number of milliseconds since 1.1.1970"
  [gist]
  (-> (:updated_at gist) parse to-long))
