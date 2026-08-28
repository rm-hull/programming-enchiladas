(ns spike.jayq
  (:require [jayq.core :refer [$ hide show append]]
            [jayq.util :as ju]))

(defn ^:dev/after-load init []
  (println "jayq compiled OK")
  (hide ($ :#test))
  (show ($ :#test))
  (append ($ :#test) "<p>hello</p>")
  (ju/log "test"))
