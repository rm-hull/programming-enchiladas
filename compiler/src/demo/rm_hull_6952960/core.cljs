(ns demo.rm-hull-6952960.core
  (:require [cljs.core.logic :refer [lvar firsto membero]])
  (:require-macros [clojure.tools.macro :refer [symbol-macrolet]] [cljs.core.logic :refer [run == conde defne all]])
  (:refer-clojure :exclude [==]))

(defne righto [x y l]
  ([_ _ [x y . r]])
  ([_ _ [_ . r]] (righto x y r)))

(defn nexto [x y l]
  (conde
    [(righto x y l)]
    [(righto y x l)]))

;; who drinks water? who owns the zebra?
(defn zebrao [hs]
  (symbol-macrolet [_ (lvar)]
   (all
    (== [_ _  [_ _ :milk _ _] _ _] hs)
    (firsto hs [:norwegian _ _ _ _])
    (nexto [:norwegian _ _ _ _] [_ _ _ _ :blue] hs)
    (righto [_ _ _ _ :ivory] [_ _ _ _ :green] hs)
    (membero [:englishman _ _ _ :red] hs)
    (membero [_ :kools _ _ :yellow] hs)
    (membero [:spaniard _ _ :dog _] hs)
    (membero [_ _ :coffee _ :green] hs)
    (membero [:ukrainian _ :tea _ _] hs)
    (membero [_ :lucky-strikes :oj _ _] hs)
    (membero [:japanese :parliaments _ _ _] hs)
    (membero [_ :oldgolds _ :snails _] hs)
    (nexto [_ _ _ :horse _] [_ :kools _ _ _] hs)
    (nexto [_ _ _ :fox _] [_ :chesterfields _ _ _] hs))))

(defn zebra []
  (binding [*occurs-check* false] 
    (run 1 [q] (zebrao q))))

(time (println (zebra)))
;; Compatibility: *occurs-check* was removed in core.logic 1.1.1
(def ^:dynamic *occurs-check* true)
