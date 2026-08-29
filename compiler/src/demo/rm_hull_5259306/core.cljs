;; Turmites
;; --------
;; A simple N-state two-color Turing machine which operates on a wrapped 
;; grid of black and white cells, and follows custom rules on every tick of 
;; a clock.
;; 
;; Predef rules derived from http://code.google.com/p/ruletablerepository/downloads/detail?name=Turmites.zip
;;
;; Copyright (c) Richard Hull 2012
;; 
;; Licensed as per the eclipse public license - v 1.0: https://www.eclipse.org/legal/epl-v10.html
;;
(ns demo.rm-hull-5259306.core
  (:require [enchilada :refer [ctx canvas]] [monet.canvas :refer [get-context get-pixel fill-rect fill-style save restore]] [monet.core :refer [animation-frame]] [jayq.core :refer [$ document-ready data text attr hide show bind prevent]] [jayq.util :refer [log]] [clojure.string :refer [split]]))

(def offsets 
  { :north [0 -1]
    :east  [1  0]
    :south [0  1]
    :west  [-1 0] })

(def directions
  { :north { 1 :north 2 :east  4 :south 8 :west  }
    :east  { 1 :east  2 :south 4 :west  8 :north }
    :south { 1 :south 2 :west  4 :north 8 :east  }
    :west  { 1 :west  2 :north 4 :east  8 :south }})

(def predef-rules
  { :langtons-ant "120080"
    :fibonacci "181181121010"
    :binary-counter "120010"
    :filled-triangle "081121110111"
    :box-spiral "011081120011"
    :striped-spiral "021080181020"
    :stepped-pyramid "021080181110"
    :contoured-island "021011121180"
    :woven-placemat "021021110021"
    :snowflake-ish "021121181180"
    :slow-city-builder "180011080081"
    :computer-art "180121020081"
    :ballon-bursting "180121021180"
    :horizontal-highway "181080110010"
    :highway1 "181080121120"
    ;:highway2 "181081121080"
    :filled-spiral "181010110120"
    :glaciers "181020080080"
    :fizzy-spill "181120080080"
    :nested-cabinets "181121110011"
    :cross "111081120111"
    :saw "111010020180"
    :curves-in-blocks "111011121010"
    :textured "111020080080"
    :diamond "111021180120"
    :coiled-rope "111180121010"
    :growth1 "120081180011"
    :square-spiral "120081180021"
    :loopy "120121010011"
    :square-ant "121081110010"
    ;:growth2 "121020081180"
    :distracted-spiral "121020010121"
    :cauliflower-stalk "121021110111"
    :worm-trails "121181121020"
    :two-way-highway "121110110011"
    :mould-bloom "121120010010"
    :highway3 "121120020111"
    :highway4 "121121181020"
    :square-diagonal "021121082080122180"
    ;:streak1 "181010022180121110"
    :streak2 "181012022111121110"
    :maze "181181110012081111"
    :cornices "182020180020080081"
    :highway5 "120022080020011180"
    :highway6 "121080122010180080"
   })

(defn- pair 
  "Pulls apart a string separated by a = into constituent vector parts,
   coverts the key into a keyword"
  [s]
  (let [[k v] (split s #"=")]
    [(keyword k) v]))

(defn get-params 
  "Extracts a set of key-value pairs separated by & into a map"
  [s] 
  (let [drop1 (apply str (drop 1 (seq s)))]
    (->> 
      (split drop1 #"&")
      (map pair)
      (into {})))) 

(defn parse-rules 
  "Slices & dices a linear rule  (e.g '120121010011') into state based 
   tuples (e.g: [[(1 2 0) (1 2 1)] [(0 1 0) (0 1 1)]] )"
  [s]
  (->>
    (seq s)
    (map int) ; not quite compatible with clojure!?!
    (partition 3)
    (partition 2)
    (map vec)
    vec))

(defn get-color 
  "Fetches the color at the given pixel on the canvas context"
  [ctx [x y] scale]
  (get-pixel ctx (* x scale) (* y scale)))

(defn set-color! [ctx [x y] scale color]
  (-> ctx
    (fill-style color)
    (fill-rect { :x (* x scale) :y (* y scale) :w scale :h scale})))

(def black? 
  (memoize
    (fn [color]
      (->> 
        [:green :blue]
        (map color)
        (reduce +)
        zero?))))

(defn current-position [turmite] 
  (get-in turmite [:current :position]))

(defn toggle-previous! [turmite]
  (let [prev (turmite :previous)
        color (if (= 0 (turmite :color)) "black" "white")]
    (if (seq (prev :position))
      (set-color! (turmite :ctx) (prev :position) (turmite :cell-size) color))))

(defn draw! [turmite color]
  (-> (turmite :ctx)
    (save)
    (set-color! 
      (current-position turmite) 
      (turmite :cell-size) 
      color) 
    (restore)))

(defn wrap [[x y] [w h]]
  [(mod x w) (mod y h)])

(defn color-mapper [color]
  (if (black? color) 0 1))

(defn next-triple [turmite]
  (let [state (get-in turmite [:current :state])
        color (color-mapper (get-color (turmite :ctx) (current-position turmite) (turmite :cell-size)))]
    (get-in turmite [:rule :parsed state color])))

(defn relative-direction [current nextdir]
  (get-in directions [current nextdir]))

(defn next-state 
  "The turmite is transitioned based on its current state and the color of 
   the underlying grid element according to its embedded rule definition."
  [turmite]
  (let [[color dir state] (next-triple turmite)
        new-direction (relative-direction (turmite :direction) dir)
        pos (wrap 
              (map + (current-position turmite) (new-direction offsets))
              (turmite :bounds))]
   (assoc turmite
     :generation (inc (turmite :generation))
     :direction new-direction
     :color     color
     :previous  (turmite :current)
     :current   {:position pos :color color :state state})))

(defn animate 
  "Main animation step-off point, which indefinitely schedules the next 
   animation frame, updating the termite based on its next state."
  [turmite]
  (letfn [(loop []
            (animation-frame loop)
            (let [t @turmite]
              (reset! turmite (next-state t))
              (toggle-previous! t)
              (draw! t "red")))]
    (log (pr-str @turmite))
    (loop)))

(defn create-turmite 
  "Creates the turmite map based on the desired position, screen dimensions,
   rule, etc."
  [ctx pos bounds cell-size rule]
  (atom
    {
      :generation 0
      :ctx ctx
      :cell-size cell-size
      :bounds bounds
      :direction (get [:north :east :south :west] (rand-int 4))
      :current { :position pos :color (color-mapper (get-color ctx pos cell-size)) :state 0}
      :previous nil
      :rule rule
     }))

(defn coords 
  "Gets the co-ordinates from the event, and scale to the cell size"
  [event scale] 
  [ (quot (.-offsetX event) scale)
    (quot (.-offsetY event) scale) ])

(defn get-rule 
  "Extracts and parses the rule from the URL query string. If no rule= 
   exists then one is selected at random. If the value is a predefined
   rule then that is used, otherwise an attempt is made to parse the
   value into a rule definition."
  [query-string]
  (let [input ((get-params query-string) :rule)
        label (if (nil? input)
                (nth (keys predef-rules) (rand-int (count predef-rules)))
                input)
        rule (get predef-rules (keyword label) input)
        ]
    { :name (name label) :data rule :parsed (parse-rules rule) }))

(defn available-area 
  "Calculates the maximum available screen size"
  []
  (let [div (first ($ :div#wrapper))]
    [ (.-offsetWidth div) (.-offsetHeight div) ]))



(document-ready
  (fn []
    (enchilada.core/show (canvas))

    (-> ctx (fill-style :black) (fill-rect { :x 0 :y 0 :w 800 :h 600}))

    (let [cell-size 3
          width 798
          height 600 
          rule (get-rule (.-search (.-location js/window)))]
    
      (bind canvas :click
        (fn [event]
          (prevent event)
          (animate (create-turmite ctx (coords event cell-size) [width height] cell-size rule))))
    
      (animate (create-turmite ctx [100 60] [width height] cell-size rule)))))