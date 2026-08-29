;; Ported from turtle/core.clj to CLJS.
;; Original project used lein-dalap to generate this; we do a manual port.
;; All logic functions, no JVM interop. Uses cljs math instead of Math.
(ns turtle.core)

(def colors [:red :green :blue :yellow :cyan :magenta :orange :black "#663300" "#68FF33"])

(defn- bounding-box
  "Calculates the smallest and largest [x,y] points"
  [coords]
  (let [[min-x max-x] (apply (juxt min max) (map first coords))
        [min-y max-y] (apply (juxt min max) (map second coords))]
    [[min-x min-y] [max-x max-y]]))

(defn- extend-margin [[[min-x min-y] [max-x max-y]] margin]
  [[(- min-x margin) (- min-y margin)] [(+ max-x margin) (+ max-y margin)]])

(defn- adjust-to-zero [[[min-x min-y] [max-x max-y]]]
  [[0 0] [(- max-x min-x) (- max-y min-y)]])

(def radians (/ js/Math.PI 180.0))

(defn- deg->rad [^double theta]
  (* theta radians))

(defn round-to
  "Round a double to the given precision (number of significant digits)"
  [precision]
  (let [factor (js/Math.pow 10 precision)]
    (fn [d]
      (/ (js/Math.round (* d factor)) factor))))

(def round-5dp (round-to 5))

(defn- move-forward
  "Given a state (containing a heading), move forward by the supplied
   distance."
  [state ^double dist]
  (let [rad   (deg->rad (:heading state))
        [^double x ^double y] (:coords state)]
    (assoc state :coords [(round-5dp (+ x (* dist (js/Math.cos rad))))
                          (round-5dp (+ y (* dist (js/Math.sin rad))))])))

(defn- turn
  "Given a state, and an operation (either the + or - function),
   update such that the new heading is altered by the angle"
  [op state angle]
  (let [heading (:heading state)]
    (assoc state :heading (mod (op heading angle) 360))))

(defn- update-color [state color]
  (assoc state :color color))

(defn- update-fill [state color]
  (assoc state :fill color))

(defn- color-index [state index]
  (update-color state (get colors index)))

(defn- push-state [state _]
  (let [saved (select-keys state [:coords :heading])]
    (update-in state [:stack] #(conj % saved))))

(defn- pop-state [state _]
  (let [restored (peek (:stack state))]
    (if (nil? restored)
      state
      (-> state
          (merge restored {:restore-point true})
          (update-in [:stack] pop)))))

(defn- goto-origin [state _]
  (merge state {:coords [0 0] :heading 90 :stack [] :restore-point true}))

(defn- pen-ops [state pen]
  (if (= pen :up)
    (assoc state :move true) ; :move is sticky, :restore-point is not
    (dissoc state :move)))

(def state-mapper
  {:color   update-color
   :fill    update-fill
   :color-index color-index
   :left    (partial turn +)
   :right   (partial turn -)
   :fwd     move-forward
   :pen     pen-ops
   :save    push-state
   :restore pop-state
   :origin  goto-origin})

(defn- next-state
  "Evolves the current state and a given command to determine the next state,
   e.g. if the current position is (4,3) pointing north, then move to (4,4)
   and turn in to the heading relative to the command."
  ([] [])
  ([curr-state] curr-state)
  ([curr-state [cmd & [peek-ahead]]]
   (if-let [update-fn (get state-mapper cmd)]
     ; always need stack/heading/coords, but nothing else
     (update-fn (select-keys curr-state [:coords :heading :stack :move]) peek-ahead)
     curr-state)))

(defn- process [cmds]
  (let [init-state {:color :red :coords [0.0 0.0] :heading 90 :stack []}]
    (->>
     (flatten cmds)
     (partition-all 2 1)
     (filter #(state-mapper (first %)))
     (reductions next-state init-state))))

(defn- calc-matrix-transform
  "Calculates an affine transform matrix which will scale a drawing
   constrained by the min/max bounds to the given screen co-ords. Note
   that the drawing is flipped so (0,0) will be represented at (or near)
   the lower edge, not the upper edge."
  [[screen-x screen-y] [[min-x min-y] [max-x max-y]]]
  (let [scale-x (/ screen-x (- max-x min-x))
        scale-y (/ screen-y (- max-y min-y))
        scale   (min scale-x scale-y)]
    (mapv round-5dp [scale 0.0 0.0 (- scale) (* scale (- min-x)) (* scale max-y)])))

(defn draw! [renderer cmds & [screen-area]]
  (let [data   (process cmds)
        bounds (-> (map :coords data) bounding-box (extend-margin 5))
        output (if (nil? screen-area) (second (adjust-to-zero bounds)) screen-area)
        matrix (calc-matrix-transform output bounds)]
    (renderer data output bounds matrix)))

(defn move-op? [command]
  (or (:restore-point command) (:move command)))
