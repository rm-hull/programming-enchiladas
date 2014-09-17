(ns bootstrapper
  (:require
    [figwheel.client :as fw :include-macros true]
    [enchilada :refer [canvas ctx]]

    ; Add some content in files under src/enchilada, and view http://localhost:3449
    ; Require some def from the target source file here
    ; e.g. [enchilada.demo :refer [dummy]]

    ))

(fw/watch-and-reload :jsload-callback (fn [] (print "reloaded")))
