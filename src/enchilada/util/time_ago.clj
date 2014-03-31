(ns enchilada.util.time-ago
  (:require
    [clj-time.core :refer [interval now in-seconds in-minutes in-hours in-days in-months in-years]]
    [clj-time.coerce :refer [to-long from-long]]
    [clj-time.format :refer [parse]]))

(defn elapsed-time [start]
  (let [interval (interval start (now))]
    (cond
      (<= (in-seconds interval) 60) "just now"
      (=  (in-minutes interval)  1) "a minute ago"
      (<= (in-minutes interval) 60) (str (in-minutes interval) " minutes ago")
      (=  (in-hours interval)    1) "an hour ago"
      (<= (in-hours interval)   24) (str (in-hours interval) " hours ago")
      (=  (in-days interval)     1) "a day ago"
      (<= (in-days interval)    31) (str (in-days interval) " days ago")
      (=  (in-months interval)   1) "a month ago"
      (<= (in-months interval)  12) (str (in-months interval) " months ago")
      (=  (in-years interval)    1) "a year ago"
      :else                         (str (in-years interval) " years ago"))))

(defn latest-commit-date
  "Looks at the history to determine the most recent commit date"
  [gist]
  (->>
    gist
    :history
    (map (comp to-long parse :committed_at))
    (reduce max)
    (from-long)))
