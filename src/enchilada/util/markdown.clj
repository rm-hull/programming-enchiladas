(ns enchilada.util.markdown
  (:require
    [clojure.string :as str]
    [hiccup.core :refer [html]]
    [hiccup.util :refer [to-uri]]))

(def ^:private url-regex )

(def ^:private transformations [
  ; URL's
  [#"((https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|])"
   "<a href=\"$1\">$1</a>"]

  ; Emphasis
  [#"([ '\"\(\[\{])_(.+?)_([ '\".,;:\)\]\}]?)"
   "$1<i>$2</i>$3"]

  ; Strong
  [#"([ '\"\(\[\{])\*\*(.+?)\*\*([ '\".,;:\)\]\}]?)"
   "$1<strong>$2</strong>$3"]
  ])

(defn apply-transform [text [regex replacement]]
  (str/replace text regex replacement))

(defn simple-md [text]
  (when text
    (reduce apply-transform text transformations)))
