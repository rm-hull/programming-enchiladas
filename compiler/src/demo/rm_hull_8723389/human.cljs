(ns demo.rm-hull-8723389.human
  (:require [clojure.string :as str] [dommy.core :refer [attr set-html!]] [big-bang.events.browser :refer [target]] [big-bang.package :refer [make-package]])
  (:require-macros [dommy.macros :refer [sel1]]))

; An opponent just randomly picks one of Rock, Paper or Scissors from the
; list below when it is notified to choose by the referee. After which,
; it sends its results back to the referee

(def initial-state {:id :human})

(defn update [event world-state]
  (let [chosen-weapon (-> event target .-parentNode (attr "data-type") keyword)]
    (make-package
      (assoc world-state :weapon chosen-weapon)   ; new world-state
      {:from :human :weapon chosen-weapon})))     ; message

(defn incoming [event world-state]    ; does not act upon incoming messages presently
  world-state)

(defn render [world-state]
  (when-let [weapon (:weapon world-state)]
    (->
     (sel1 :#human)
     (set-html! (str "You chose: " (-> weapon name str/upper-case))))))