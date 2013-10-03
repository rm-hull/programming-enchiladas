(ns enchilada
  (:use [monet.canvas :only [get-context]]
        [jayq.core :only [$ hide show append]]))

(def console ($ "div#console"))
(def canvas ($ :canvas#world))
(def ctx    (get-context (.get canvas 0) "2d"))
(def svg    ($ :svg#world))
(defn proxy-request [url] (str "/proxy?url=" (js/encodeURI url)))

(set! *print-fn*
     (fn [s]
       (.log js/console s)
       (show console)
       (append console (str "<p>" s "</p>"))))

(hide ($ :div#spinner))
