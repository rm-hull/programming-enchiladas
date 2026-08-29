(ns demo.rm-hull-6816151.core
  (:require [cljs.core.logic :refer [membero]])
  (:require-macros [cljs.core.logic :as m]))

(println
  (m/run* [q]
    (membero q '(:cat :dog :bird :bat :debra))))