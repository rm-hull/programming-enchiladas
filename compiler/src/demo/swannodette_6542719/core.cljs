(ns demo.swannodette-6542719.core
  (:require [cljs.core.async :refer [chan <! >! go]]))

(defn f [left right]
  (go (>! left (inc (<! right)))))

(let [leftmost (chan)
      rightmost (loop [n 100000 left leftmost]
                  (if-not (pos? n)
                    left
                    (let [right (chan)]
                      (f left right)
                      (recur (dec n) right))))]
  (go (time (do
    (>! rightmost 1)
    (.log js/console (<! leftmost))))))

;; 100001
;; "Elapsed time: 139 msecs"
;; real  0m1.214s
;; user	0m1.074s
;; sys	0m0.162s