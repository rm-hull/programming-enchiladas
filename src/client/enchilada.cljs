(ns enchilada
  (:use
    [clojure.string :only [split]]
    [monet.canvas :only [get-context]]
    [monet.core :only [animation-frame]]
    [jayq.core :only [$ hide show append]]))

(def console ($ "div#console"))
(def canvas  ($ :#canvas-area))
(def svg     ($ :#svg-area))
(def webgl   ($ :#webgl-area))

(def ctx (get-context (.get canvas 0) "2d"))

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

(defn to-js [x]
  (cond
    (map? x)
      (let [out (js/Object.)]
        (doseq [[k v] x]
          (aset out (name k) (to-js v)))
        out)

    (= (type x) (type []))
      (apply array (map to-js x))

    :else x))

(hide ($ :div#spinner))
