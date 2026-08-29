(ns demo.rm-hull-6857333.solver
  (:require [demo.rm-hull-6857333.util :refer [neighbours wall-between?]] [tailrecursion.priority-map :refer [priority-map]])) 

(defn- connecting-neighbours 
  "Yields a list of directly connected neighbours (i.e. adjacent cells with
   no walls between them)."
  [maze p]
  (->> (neighbours p (:size maze)) 
       (remove (partial wall-between? maze p))))
 
(defn- remove-longer-paths 
  "Filters out those neighbours from the predecessors whose length is greater
   than the current length"
  [pred neighbours curr-len]
  (remove #(if-let [old (pred %)] (>= curr-len (:length old))) neighbours))
 
(defn- path-length 
  "Given a map of predecessors of a specific start point, extract out the
   length for the cell at offset n."
  [pred n]
  (get-in pred [n :length] 0))

(defn- blend-in 
  "Blends the neighbours (as keys) into the map all with the same value."
  [map neighbours val]
  (if (empty? neighbours)
    map
    (apply (partial assoc map) (mapcat vector neighbours (repeat val)))))
 
(defn- build-predecessors 
  "Constructs a map of predessors for cells between 'start' and 'stop-at' cells."
  [maze start stop-at]
  (loop [pred   (hash-map start { :predecessor nil :length 0 }) 
         active (priority-map start 0)]
    (cond
      (empty? active) pred
      (= (first active) stop-at) pred
      :else (let [curr (ffirst active)
                  new-length  (inc (path-length pred curr))
                  neighbours  (remove-longer-paths pred (connecting-neighbours maze curr) new-length)
                  next-gen    (blend-in pred   neighbours (hash-map :predecessor curr :length new-length))
                  next-active (blend-in active neighbours new-length)]
              (recur
                next-gen
                (dissoc next-active curr))))))

;; Dijkstra's Graph Search
(defn shortest-path 
  "Recurses over the predecessors between 'from' and 'to' pulling out the 
   cells into an ordered list which represents the shortest path between
   the two points."
  [maze from to]
  (let [pred (build-predecessors maze from to)]
    (loop [n    to
           result nil]
      (let [p (get-in pred [n :predecessor])]
      (if (nil? p)
        (vec (cons n result))
        (recur p (cons n result)))))))

(defn solve [maze points]
  (let [f (fn [[from to]] (shortest-path maze from to))]
    (vec (map f points))))