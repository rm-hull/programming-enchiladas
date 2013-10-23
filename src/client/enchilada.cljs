(ns enchilada
  (:use
    [clojure.string :only [split]]
    [monet.canvas :only [get-context]]
    [jayq.core :only [$ hide show append]]))

(def console ($ "div#console"))
(def canvas ($ :canvas#world))
(def ctx    (get-context (.get canvas 0) "2d"))
(def svg    ($ :svg#world))

(set! *print-fn*
     (fn [s]
       (.log js/console s)
       (show console)
       (append console (str "<p>" s "</p>"))))

(defn proxy-request [url]
  (str "/proxy?url=" (js/encodeURI url)))

(defn canvas-size []
  [(.width canvas) (.height canvas)])

(defn- pair
  "Pulls apart a string separated by a = into constituent vector parts,
   coverts the key into a keyword"
  [s]
  (let [[k v] (split s #"=")]
    [(keyword k) v]))

(defn- get-params
  "Extracts a set of key-value pairs separated by & into a map"
  [s]
  (let [drop1 (apply str (drop 1 (seq s)))]
    (->>
      (split drop1 #"&")
      (map pair)
      (into {}))))

(defn value-of [k default]
  (let [params (get-params (.-search (.-location js/window)))]
    (get params k default)))

(defn url-params []
  (get-params (.-search (.-location js/window))))

(hide ($ :div#spinner))
