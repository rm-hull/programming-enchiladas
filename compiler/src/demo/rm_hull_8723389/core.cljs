(ns demo.rm-hull-8723389.core
  (:require [cljs.core.async :refer [<! chan mult tap go] :as async] [clojure.string :as str] [enchilada :refer [proxy-request]] [dommy.core :refer [insert-after!]] [dommy.template :as template] [big-bang.core :refer [big-bang]] [big-bang.package :refer [make-package]] [dataview.loader :refer [fetch-text]] [demo.rm-hull-8723389.human :as human] [demo.rm-hull-8723389.opponent :as opponent] [demo.rm-hull-8723389.referee :as referee])
  (:require-macros [dommy.macros :refer [sel1 sel node]]))

(def url-root "https://raw.github.com/rm-hull/big-bang/master/examples/rock-paper-scissors/")

(defn style [& styles ]
  [:style (str/join \newline styles)])

(defn player-div [id css-class title-text svg]
  [:div {:class (name css-class)}
   [:div.title [:h3 {:id (name id)} title-text]]
   [:div.graphic
     (template/html->nodes svg)]])

(defn init-play-area [human-svg opponent-svg]
  (->>
   (sel1 :#canvas-area)
   (insert-after!
     (node
       [:div#app
         (style
           "#app { font-family: monospace; }"
           "div.pull-right { float: right; width: 150px; padding: 7px; }"
           "div.leftpanel { float:left; margin: 20px; }"
           "div.rightpanel { margin: 20px; }"
           "#discourse-area { width: 850px; border: 1px grey solid; }"
           "#discourse-area h2 { padding: 15px; }")
         [:div#discourse-area
           [:div.pull-right [:p#winner][:p#score]]
           [:h2 "Let's play a game - select your weapon"]]
         (player-div :human :leftpanel "Choose:" human-svg)
         (player-div :opponent :rightpanel "Your opponent is waiting..." opponent-svg)
         [div {:style "clear:both;"}]]))))

(defn start-game [seed]
  (let [results-chan (chan)
        notify-chan  (chan)
        notify-mult  (mult notify-chan)
        notifos (fn [] (let [c (chan)] (tap notify-mult c) c))]
    (go
      (init-play-area
        (<! (fetch-text (proxy-request (str url-root "rps.svg"))))
        (<! (fetch-text (proxy-request (str url-root "vc.svg")))))

      ; referee
      (big-bang
        :initial-state referee/initial-state
        :to-draw referee/render
        :on-receive referee/incoming
        :receive-channel results-chan
        :send-channel notify-chan)

      ; opponent
      (big-bang
        :initial-state (opponent/initial-state seed)
        :to-draw opponent/render
        :on-receive opponent/incoming
        :receive-channel (notifos)
        :send-channel results-chan)

      ; human player
      (big-bang
        :initial-state human/initial-state
        :to-draw human/render
        :on-click human/update
        :event-target (sel :g.clickable)
        :on-receive human/incoming
        :receive-channel (notifos)
        :send-channel results-chan))))

(start-game (rand)) ; start the game with a random seed