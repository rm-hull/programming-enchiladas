(ns spike.core-async
  ;; Modern import style — go/go-loop come from cljs.core.async via :require-macros
  ;; The OLD style (from the gists) uses [cljs.core.async.macros :refer [go]]
  ;; which no longer works because macros.clj is now a .clj file, not .cljc
  (:require [cljs.core.async :as async :refer [chan <! >! put! close! timeout mult tap go go-loop]]))

(defn ^:dev/after-load init []
  (println "core.async compiled OK"))
