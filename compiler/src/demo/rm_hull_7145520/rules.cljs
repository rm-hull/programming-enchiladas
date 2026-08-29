(ns demo.rm-hull-7145520.rules
  (:require [demo.rm-hull-7145520.vector :refer [make-vector rand-vector add sub mult div normalize dist mag limit add-all]]))

(def max-speed 2.0)
(def max-force 0.03)
(def zero-vec (make-vector 0 0))

(defn make-boid [x y]
  {:location (make-vector x y)
   :velocity (rand-vector 1)
   :acceleration (make-vector 0 0)})

(defn- apply-forces [boid forces]
  (assoc boid
    :acceleration (add
                    (:acceleration boid)
                    (add-all forces))))

(defn- diff [location1 location2 dist]
  (->
    (sub location1 location2)
    normalize
    (div dist)))

(def separate
  "Checks for nearby boids and steers away"
 {:init [0 zero-vec]
  :too-close? (fn [d] (and (> d 0.0) (< d 25.0)))
  :accumulator
    (fn [boid other d [count steer]]
      [(inc count) (add steer (diff (:location boid) (:location other) d))])
  :final
    (fn [boid [count steer]]
      (cond
        (pos? count)       (recur boid [0 (div steer count)])
        (pos? (mag steer)) (->
                             steer
                             normalize
                             (mult max-speed)
                             (sub (:velocity boid))
                             (limit max-force)
                             (mult 1.5))
        :else              (mult steer 1.5)))})

(def align
 {:init [0 zero-vec]
  :too-close? (fn [d] (and (> d 0.0) (< d 50.0)))
  :accumulator
    (fn [boid other d [count sum]]
      [(inc count) (add sum (:velocity other))])
  :final
    (fn [boid [count sum]]
      (if (pos? count)
        (->
          sum
          (div count)
          normalize
          (mult max-speed)
          (sub (:velocity boid))
          (limit max-force))
        zero-vec))})

(def cohesion
 {:init [0 zero-vec]
  :too-close? (fn [d] (and (> d 0.0) (< d 50.0)))
  :accumulator
    (fn [boid other d [count sum]]
      [(inc count) (add sum (:location other))])
  :final
    (fn [boid [count sum]]
      (if (pos? count)
        (->
          sum
          (div count)
          (sub (:location boid))
          normalize
          (mult max-speed)
          (sub (:velocity boid))
          (limit max-force))
        zero-vec))})

(defn- calc-forces
  [boid peers & forces]
    (loop [ps   peers
           data (map :init forces)]
      ;(println data)
      (if (empty? ps)
        (map (fn [f d] ((:final f) boid d)) forces data)
        (let [other (first ps)
              distance (dist (:location boid) (:location other))]
          (recur
            (next ps)
            (map
              (fn [f d]
                   (if ((:too-close? f) distance)
                     ((:accumulator f) boid other distance d)
                     d))
              forces data))))))

(defn- flock [boid peers]
  (apply-forces boid
    (calc-forces boid peers
      separate
      align
      cohesion)))

(defn- update-location [boid]
  (let [new-velocity (->
                       (:velocity boid)
                       (add (:acceleration boid))
                       (limit max-speed))
        new-location (->
                       (:location boid)
                       (add new-velocity))]
    (assoc boid
      :location new-location
      :velocity new-velocity
      :acceleration zero-vec)))

(defn- bounds [value lower-limit upper-limit]
  (cond
    (< value lower-limit) upper-limit
    (> value upper-limit) lower-limit
    :else                 value))

(defn- wrap-around [boid w h r]
  (let [[x y] (:location boid)
        new-x (bounds x (- r) (+ w r))
        new-y (bounds y (- r) (+ h r))]
    (if (and (= x new-x) (= y new-y))
      boid
      (assoc boid :location (make-vector new-x new-y)))))

(defn step [w h r]
  (fn [boid peers]
    (->
      boid
      (flock peers)
      (update-location)
      (wrap-around w h r))))