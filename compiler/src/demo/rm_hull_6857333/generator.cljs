(ns demo.rm-hull-6857333.generator
  (:require [demo.rm-hull-6857333.util :refer [neighbours]]))

(defn- init-maze
  "Initialize a maze of size (W x H) with all walls set"
  [^long w ^long h]
  { :size [w h]
    :data (into [] (repeat (* w h) #{ :north :west } ))})

(defn- knockdown-wall 
  "Knocks down the wall between the two given points in the maze. Assumes
   that they are adjacent, otherwise it doesn't make any sense (and wont
   actually make any difference anyway)"
  [maze ^long p1 ^long p2]
  (if (> p1 p2)
    (knockdown-wall maze p2 p1)
    (let [[w h] (:size maze)
          new-walls (cond 
                      (= (- p2 p1) w) (disj ((:data maze) p2) :north)
                      (= (- p2 p1) 1) (disj ((:data maze) p2) :west))]
      (assoc-in maze [:data p2] new-walls))))

(defn create-maze 
  "Recursively creates a maze based on the supplied dimensions. The visitor
   function allows a different strategy for selecting the next neighbour."
  [visitor-fn ^long w ^long h]
  (loop [maze    (init-maze w h)
         visited {0 true}
         stack   [0]]
    (if (empty? stack)
      maze
      (let [n (remove visited (neighbours (peek stack) (:size maze)))]
        (if (empty? n)
          (recur maze visited (pop stack))
          (let [np (nth n (visitor-fn (count n)))
                st (if (= (count n) 1) (pop stack) stack)]
            (recur 
              (knockdown-wall maze (peek stack) np)
              (assoc visited np true)
              (conj st np))))))))