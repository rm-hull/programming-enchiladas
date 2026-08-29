(ns demo.rm-hull-8723389.referee
  (:require [clojure.string :as str] [dommy.core :refer [attr set-html!]] [big-bang.package :refer [make-package]])
  (:require-macros [dommy.macros :refer [sel1]]))

; The referee is responsible for kicking the opponent into making a choice,
; and for collating responses as well as keeping track of the score and
; who won each round.

(def initial-state
  {:id :referee
   :score {:human 0 :opponent 0}})

(defn render [world-state]
  (->
    (sel1 :#score)
    (set-html! (str
                 (get-in world-state [:score :human])
                 " - "
                 (get-in world-state [:score :opponent]))))

  (->
    (sel1 :#winner)
    (set-html! (str "Winner: " (str/upper-case (name (get world-state :winner "???")))))))

(defn beats? [w1 w2]
  (condp = [w1 w2]
    [:scissors :paper]    true
    [:paper    :rock]     true
    [:rock     :scissors] true
                          false))

(defn calc-score [score w1 w2]
  (if (beats? w1 w2)
    (inc score)
    score))

(defn winner [w1 w2]
  (let [b1 (beats? w1 w2)
        b2 (beats? w2 w1)]
    (condp = [b1 b2]
      [true false] :human
      [false true] :opponent
                   :draw)))

(defn incoming [{:keys [from weapon] :as event} world-state]
  (condp = from
    :human
    (make-package
      (assoc-in world-state [:select from] weapon)
      {:to :opponent :choose true})

    :opponent
    (let [human-weapon (get-in world-state [:select :human])
          opponent-weapon weapon]
      (->
        world-state
        (update-in [:score :human]  calc-score human-weapon opponent-weapon)
        (update-in [:score :opponent] calc-score opponent-weapon human-weapon)
        (assoc :winner (winner human-weapon opponent-weapon))))

    ; default
    world-state))