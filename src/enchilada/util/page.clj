(ns enchilada.util.page
  (:require
    [clojure.string :as str]
    [hiccup.core :refer [html]]
    [hiccup.util :refer [to-uri]]))

(defn include-async-js [& scripts]
  (for [script scripts]
    [:script {:type "text/javascript" :src (to-uri script) :async true}]))

(def ^:private url-regex #"((https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|])")

(defn add-anchors [text]
  (when text
    (str/replace text url-regex "<a href=\"$1\">$1</a>")))
