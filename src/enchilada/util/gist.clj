(ns enchilada.util.gist
  (:require
    [clj-http.client :as http]
    [clojure.data.json :as json]
    [enchilada.util.fs :refer [fetch-gist]]))

(defn- url [id] (str "https://api.github.com/gists/" id))

(def github-authentication
  (when-let [token (get (System/getenv) "GITHUB_OAUTH_TOKEN")]
    {"authorization" (str "token " token)}))

(defn fetch
  "Fetches a gist from the mothership and parses it from JSON into a keyword hash"
  [user id]
  (try
    (let [{:keys [status headers body] :as resp} (http/get (url id) {:headers github-authentication})]
        (when (= status 200)
          (json/read-str body :key-fn keyword)))
    (catch Exception e
      (fetch-gist {:user {:login user} :id id}))))

(defn login-id
  "Constructs the github \"login/id\" path element"
  [gist]
  (str (get-in gist [:user :login]) "/" (:id gist)))


