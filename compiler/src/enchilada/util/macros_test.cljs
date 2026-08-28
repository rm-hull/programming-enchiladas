(ns enchilada.util.macros-test
  (:require [enchilada.core :refer [canvas]])
  (:require-macros [enchilada.util.macros :as m :refer [inc!]]))

;; Verify inc! macro compiles
(defonce test-obj (js-obj "x" 0))
(m/inc! test-obj :x 5)
(m/log test-obj)
