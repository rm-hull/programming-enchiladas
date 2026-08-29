(ns enchilada.util.macros)

;; inc! macro for mutating numeric fields on objects.
;; Calling conventions:
;;   (inc! obj field delta)  -- obj is object, field is keyword/string/symbol
;;   (inc! obj field)        -- delta defaults to 1
;;   (inc! (.-field obj) delta) -- 2-arg: first arg is property access form

(defmacro inc!
  ([a1 a2]
   ;; Two-arg form: either (obj field) or (.-field obj) delta
   (if (and (list? a1)
            (= 2 (count a1))
            (symbol? (first a1))
            (let [n (name (first a1))]
              (.startsWith n "-")))
     ;; Form: (.-field obj) delta -- first arg is property access
     (let [method-sym (first a1)
           obj-expr (second a1)
           field-name (subs (name method-sym) 1)]
       `(let [current# (aget ~obj-expr ~field-name)]
          (aset ~obj-expr ~field-name (+ current# ~a2))))
     ;; Form: obj field -- default delta to 1
     (let [field-name (cond
                       (keyword? a2) (name a2)
                       (string? a2) a2
                       (symbol? a2) (name a2))]
       (if field-name
         `(let [current# (aget ~a1 ~field-name)]
            (aset ~a1 ~field-name (+ current# 1)))
         ;; Fallback: a2 is a delta, a1 is an object
         `(let [current# (aget ~a1 "x")]
            (aset ~a1 "x" (+ current# ~a2)))))))
  ([obj field delta]
   ;; Three-arg form: obj field delta
   (let [field-name (cond
                     (keyword? field) (name field)
                     (string? field) field
                     (symbol? field) (name field))]
     `(let [current# (aget ~obj ~field-name)]
        (aset ~obj ~field-name (+ current# ~delta))))))

;; defonce macro
(defmacro defonce
  [name & body]
  `(if (.hasOwnProperty js/cljs.core '~name)
     (var ~name)
     (def ~name ~@body)))

;; log macro
(defmacro log [form]
  `(prn "log:" ~form))
