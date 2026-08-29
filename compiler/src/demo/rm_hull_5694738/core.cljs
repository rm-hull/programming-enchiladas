(ns demo.rm-hull-5694738.core)

(defn follow [lookup-table]
  (fn [n]
    (loop [k n
           edges {}] 
      (let [next-k (lookup-table k)] 
        (if (edges next-k)
          edges
          (recur next-k (assoc edges k next-k)))))))

(defn digraph [n f]
  (let [lookup-table (mapv #(mod (f %) n) (range n))]
    (apply merge (map (follow lookup-table) (range n))))) 

(defn fixed-point? [[a b]] (= a b))