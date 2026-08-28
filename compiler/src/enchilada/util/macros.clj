(ns enchilada.util.macros)

;; inc! — simple increment macro for mutating a numeric field on an object
;; Used by: earth.cljs, photosphere.cljs
;; Note: the macro expands to code that uses gobj/get and gobj/set at runtime,
;; but the macro definition itself doesn't require goog.object (it's not on JVM classpath)
(defmacro inc!
  [obj field delta]
  (let [field-name (cond
                     (keyword? field) (name field)
                     (string? field) field
                     (symbol? field) (name field))]
    `(let [current# (aget ~obj ~field-name)]
       (aset ~obj ~field-name (+ current# ~delta)))))

;; defonce — define a var that won't be redefined on hot-reload (common in old gists).
;; cljs.core has defonce, but gists using :refer-macros may expect it here.
(defmacro defonce
  [name & body]
  `(if (.hasOwnProperty js/cljs.core '~name)
     (var ~name)
     (def ~name ~@body)))

;; log — debug helper
(defmacro log [form]
  `(prn "log:" ~form))
