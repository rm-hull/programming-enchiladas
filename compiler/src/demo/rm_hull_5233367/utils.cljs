(ns demo.rm-hull-5233367.utils)

(def integers (iterate inc 1))

(defn digits 
  ([n] (digits n 10))
  ([n ^long radix]
    (loop [n n
           res nil]
      (if (zero? n)
        res
        (recur 
          (quot n radix)
          (cons (rem n radix) res))))))

(defn coords [w h & {:keys [step] :or {step 1}}]
  (for [y (range 0 h step)
        x (range 0 w step)]
    [x y]))
