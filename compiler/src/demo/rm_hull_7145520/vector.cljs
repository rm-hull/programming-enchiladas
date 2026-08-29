(ns demo.rm-hull-7145520.vector)

(defn add [[x1 y1] [x2 y2]]
  [(+ x1 x2) (+ y1 y2)])

(defn sub [[x1 y1] [x2 y2]]
  [(- x1 x2) (- y1 y2)])

(defn mult [[x y] n]
  [(* x n) (* y n)])

(defn div [[x y] n]
  [(/ x n) (/ y n)])

(defn dot [[x1 y1] [x2 y2]]
  (+
    (* x1 x2)
    (* y1 y2)))

(defn mag-sq [xy]
  (dot xy xy))

(defn mag [xy]
  (Math/sqrt (mag-sq xy)))

(defn normalize [xy]
  (let [m (mag xy)]
    (if (and (not= m 0) (not= m 1))
      (div xy m)
      xy)))

(defn dist [[x1 y1] [x2 y2]]
  (let [dx (- x1 x2)
        dy (- y1 y2)]
    (Math/sqrt
      (+
       (* dx dx)
       (* dy dy)))))

(defn limit [xy max]
  (if (> (mag-sq xy) (* max max))
    (-> xy normalize (mult max))
    xy))

(defn rotate [[x y] theta]
  [
    (- (* x (Math/cos theta))
       (* y (Math/sin theta)))
    (+ (* x (Math/sin theta))
       (* y (Math/cos theta)))])

(defn heading [[x y]]
  (- (Math/atan2 (- y) x)))

(defn rand-vector [n]
  (let [theta (* 2 Math/PI (rand))]
    [(* n (Math/sin theta)) (* n (Math/cos theta))]))

(defn make-vector [x y]
  [x y])

(defn add-all [vectors]
  (loop [vs vectors
         accum-x 0
         accum-y 0]
    (if (empty? vs)
      [accum-x accum-y]
      (let [[x y] (first vs)]
        (recur
          (rest vs)
          (+ accum-x x)
          (+ accum-y y))))))