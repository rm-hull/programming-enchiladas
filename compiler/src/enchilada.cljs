;; enchilada.cljs — compatibility shim that re-exports from enchilada.core
;; so that gists using (:require [enchilada :only [...]]) continue to work
(ns enchilada
  (:require [enchilada.core :as core]))

;; Delegate each function/var to enchilada.core
(def canvas core/canvas)
(def ctx core/ctx)
(def webgl core/webgl)
(def webgl-context core/webgl-context)
(def svg core/svg)
(def console-el core/console-el)
(def error-div core/error-div)
(def canvas-size core/canvas-size)
(def refresh-canvas-size! core/refresh-canvas-size!)
(def value-of core/value-of)
(def to-js core/to-js)
(def show core/show)
(def hide core/hide)
(def proxy-request core/proxy-request)
