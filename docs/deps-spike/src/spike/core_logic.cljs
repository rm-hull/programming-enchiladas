(ns spike.core-logic
  ;; Modern import — core.logic re-exports macros via :require-macros internally
  ;; Old style used [cljs.core.logic.macros :refer [run run* == conde conda condu fresh defne]]
  (:require [cljs.core.logic :as logic :refer [run run* == conde conda condu fresh defne matche all membero lvar lcons succeed fail conso nilo firsto resto emptyo appendo]]))

(defn ^:dev/after-load init []
  (println "core.logic compiled OK"))
