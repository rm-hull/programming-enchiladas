(ns enchilada
  (:use [monet.canvas :only [get-context]]
        [jayq.core :only [$ hide]]))

(def canvas ($ :canvas#world)) 
(def ctx    (get-context (.get canvas 0) "2d")) 
(defn proxy-request [url] (str "/proxy?url=" (js/encodeURI url)))

(hide ($ :div#spinner))
