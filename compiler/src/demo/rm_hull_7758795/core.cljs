(ns demo.rm-hull-7758795.core
  (:require [cljs.core.async :refer [<! >! chan timeout go]]))


(defn sin-vals [offset]
  (map #(Math/sin %) (iterate (partial + 0.1) offset)))

(let [events (chan)]

  ;; produce seqs of sine values
  (go (loop [n 0]
           (<! (timeout 200))
           (>! events (sin-vals n))
           (recur (inc n))))

  (go
    (dotimes [_ 10]
      ;; Draw on screen
      (println
       (map (fn [x y] {:x x :y y})
            (range 3)
            (take 3 (<! events)))))))