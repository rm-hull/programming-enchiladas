(ns demo.rm-hull-5233367.square-root
  (:require [demo.rm-hull-5233367.utils :refer [digits integers]]))

(defn number-pairs [n]
  (let [join (fn [[a b]] (+ (* 10 a) b))
        d (digits n)
        normalized (if (odd? (count d)) (cons 0 d) d)]
    (concat 
      (map join (partition 2 normalized))
      (repeat 0))))

(defn calc-y [x p]
  (* x (+ (* 20 p) x)))

(defn biggest-x [c p]
  (->> (iterate inc 0)
       (take-while #(<= (calc-y % p) c))
       last))

(defn- sqrt0 [xs r p]
  (let [c (+ (* r 100) (first xs))
        x (biggest-x c p)
        y (calc-y x p)
        r (- c y)
        p (+ (* 10 p) x)]
    (lazy-seq 
      (if (and (zero? c) (zero? r)) 
        nil 
        (cons x (sqrt0 (next xs) r p))))))

(defn digit-seq [n]
  (let [xs (number-pairs n)]
    (sqrt0 xs 0 0)))