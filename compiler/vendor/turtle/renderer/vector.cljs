;; Ported from turtle/renderer/vector.clj's {:cljs (ns ...)} metadata.
;; Original uses hiccup (JVM-only); CLJS version uses hipo.core.
(ns turtle.renderer.vector
  (:require
   [clojure.string :refer [join]]
   [turtle.core :refer [move-op?]]
   [hipo.core :as hipo]))

(defn- transform [[a b c d e f]]
  (str "translate(" e "," f ") scale(" a "," d ")"))

(defn- d-instr [command]
  (str
   (if (move-op? command) "M" "L")
   (join "," (:coords command))
   " "))

(defn- style [command]
  (str "fill:none;stroke-width:3;stroke:" (name (:color command)) ";"))

(defn- duplicates [accumulator next-value]
  (let [last-value (last accumulator)]
    (if (= last-value next-value)
      accumulator
      (conj accumulator next-value))))

(defn- path [[initial commands]]
  (let [initial (assoc (last initial) :move true)]
    [:path
     {:style (style initial)
      :d (->>
          commands
          (cons initial)
          (mapv d-instr)
          (reduce duplicates [])
          (apply str))}]))

(defn- segmenter [data]
  (->>
   data
   (partition-by #(contains? % :color))
   (partition-all 2)))

(defn ->svg [data [w h] bounds matrix]
  (hipo/create
   [:svg
    {:xmlns "http://www.w3.org/2000/svg"
     :xmlns:xlink "http://www.w3.org/1999/xlink"
     :width w :height h
     :zoomAndPan "magnify"
     :preserveAspectRatio "xMidYMid meet"
     :overflow "visible"
     :version "1.0"}
    [:g {:transform (transform matrix)}
     (map path (segmenter data))]]))
