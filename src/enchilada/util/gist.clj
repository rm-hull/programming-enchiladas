(ns enchilada.util.gist
  (:require
    [clojure.string :as str]
    [clj-http.client :as http]
    [clojure.data.json :as json]
    [me.raynes.fs :refer [absolute-path]]
    [enchilada.util.fs :refer [fetch-gist]])
  (:import
    [java.util UUID]))

(defn- url [id] (str "https://api.github.com/gists/" id))

(def github-headers
  (merge
    {"Accept" "application/vnd.github.v3+json"}
    (when-let [token (get (System/getenv) "GITHUB_OAUTH_TOKEN")]
      {"authorization" (str "token " token)})))

(defn fetch
  "Fetches a gist from the mothership and parses it from JSON into a keyword hash"
  [owner id]
  (try
    (let [{:keys [status headers body]} (http/get (url id) {:headers github-headers})]
        (when (= status 200)
          (json/read-str body :key-fn keyword)))
    (catch Exception e
      (fetch-gist {:owner {:login owner} :id id}))))

(defn login-id
  "Constructs the github \"login/id\" path element"
  [gist]
  (str
    (or
      (get-in gist [:owner :login])
      (get-in gist [:user :login]))
    "/"
    (:id gist)))

(defn anonymous [src]
  {:owner {:login "__anonymous"}
   :id (str (UUID/randomUUID))
   :history []
   :files {"not_yet_created.cljs" {:filename "__temp.cljs" :content src }}})

(def user-id-regex #".*/(.*)/(.*).(json|png)")

(defn filename->gist [file]
  (let [[_ user id] (re-find user-id-regex (absolute-path file))]
    {:id id :owner { :login user}}))

(defn mongo->gist [mongo-record]
  (let [[user id] (str/split (:gist mongo-record) #"/")]
    {:id id :owner { :login user}}))
