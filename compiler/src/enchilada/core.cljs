(ns enchilada.core
  (:require
    [goog.dom :as dom]
    [goog.dom.TagName :as TagName]
    [goog.object :as gobj]))

;; DOM element references matching the Phase 5 skeleton (#canvas-area, #webgl-area, #svg-area, #console, #error-div).
;; These are resolved lazily at first access since the DOM may not be ready when the namespace loads.

(defn find-by-id [id]
  (dom/getElement id))

(defn _cached-canvas []
  (or (find-by-id "canvas-area") (.-canvas-element js/window)))

(defn _cached-ctx []
  (let [c (dom/getElement "canvas-area")]
    (when c
      (or (.getContext ^js c "2d")
          (.getContext ^js c "moz-curve" "webkit-2d-context")))))

;; `ctx` is a function that returns the current 2D canvas context.
;; Demos using monet.canvas should call @(ctx) or (ctx) to get the context.
(defn ctx []
  (_cached-ctx))

(defn canvas []
  (_cached-canvas))

(defn webgl []
  (find-by-id "webgl-area"))

(defn webgl-context []
  (let [c (webgl)]
    (when c
      (or (.getContext ^js c "webgl")
          (.getContext ^js c "experimental-webgl")))))

(defn svg []
  (find-by-id "svg-area"))

(defn console-el []
  (find-by-id "console"))

(defn error-div []
  (find-by-id "error-div"))

(def canvas-size-atom
  "A map of the canvas element's dimensions. Lazily computed so the canvas exists."
  (atom {:width 800 :height 600}))

(def canvas-size
  "Returns [width height] vector of the current canvas dimensions."
  (let [s @canvas-size-atom]
    [(:width s) (:height s)]))

(defn refresh-canvas-size! []
  (let [c (canvas)]
    (when c
      (reset! canvas-size-atom
              {:width (.-width c)
               :height (.-height c)}))))

;; --- utility functions gists expect from enchilada.core ---

(defn value-of
  "Returns the value of a keyword argument from a JS object, or falls back to options.
   Used by gists like `(value-of :texture (random-texture))`."
  ([k opts]
   (let [opts-map (if (map? opts) opts (js->clj opts :keywordize-keys true))]
     (get opts-map k)))
  ([opts]
   opts))

(defn to-js [x]
  (clj->js x))

(defn show [el]
  (when el
    (gobj/set el "style.display" "block")))

(defn hide [el]
  (when el
    (gobj/set el "style.display" "none")))

;; proxy-request is intentionally stubbed — per the social-features decision we drop the
;; old server-side CORS proxy. This no-op returns the URL unchanged so gists that reference
;; it at compile/runtime still work (they pass through the original URL).
(defn proxy-request [url]
  url)