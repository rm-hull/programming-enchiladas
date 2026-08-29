(ns enchilada.core
  (:require
    [goog.dom :as dom]
    [goog.dom.TagName :as TagName]
    [goog.object :as gobj]))

;; DOM element references matching the Phase 5 skeleton.
;; jQuery is loaded via CDN (see site/_layouts/base.njk) and is available
;; when this namespace evaluates because the script tags are at the bottom
;; of the HTML page, after the DOM elements.  Gists use these as
;; jQuery-wrapped elements for jayq.core functions (show, hide, bind) and
;; also as raw DOM elements for monet.canvas functions.

(defn find-by-id [id]
  (dom/getElement id))

(defn _cached-canvas-el []
  (or (dom/getElement "canvas-area") (.-canvas-element js/window)))

(defn _cached-ctx []
  (let [c (dom/getElement "canvas-area")]
    (when c
      (or (.getContext ^js c "2d")
          (.getContext ^js c "moz-curve" "webkit-2d-context")))))

(defn _jq [el]
  "Wraps a DOM element in a jQuery object, or returns nil."
  (when (and el (exists? js/jQuery))
    (js/jQuery. el)))

;; ---------------------------------------------------------------------------
;; canvas, svg, webgl: jQuery-wrapped DOM elements
;; ---------------------------------------------------------------------------
;; Original enchilada.cljs: (def canvas ($ :#canvas-area))
;; Gists use these with jayq.core (show, hide, bind) which needs jQuery objects.

(def canvas
  (or (_jq (_cached-canvas-el))
      (find-by-id "canvas-area")))

(def svg
  (or (_jq (find-by-id "svg-area"))
      (find-by-id "svg-area")))

(def webgl
  (or (_jq (find-by-id "webgl-area"))
      (find-by-id "webgl-area")))

;; ---------------------------------------------------------------------------
;; ctx: raw 2D canvas context (not a function)
;; ---------------------------------------------------------------------------
;; Original enchilada.cljs: (def ctx (get-context (.get canvas 0) "2d"))
;; Gists use ctx directly: (fill-rect ctx {...}), :ctx ctx, (->canvas ctx), etc.
;; This matches monet.canvas's expected ctx type (CanvasRenderingContext2D).

(def ctx
  (let [c (dom/getElement "canvas-area")]
    (when c
      (or (.getContext ^js c "2d")
          (.getContext ^js c "moz-curve" "webkit-2d-context")))))

(defn console-el []
  (find-by-id "console"))

(defn error-div []
  (find-by-id "error-div"))

(def canvas-size-state
  "A map of the canvas element's dimensions."
  (atom {:width 800 :height 600}))

(defn canvas-size
  "Returns [width height] vector of the current canvas dimensions."
  []
  (let [s @canvas-size-state]
    [(:width s) (:height s)]))

(defn refresh-canvas-size! []
  (let [c (dom/getElement "canvas-area")]
    (when c
      (reset! canvas-size-state
              {:width (.-width c)
               :height (.-height c)}))))

;; --- utility functions gists expect from enchilada.core ---

(defn value-of
  "Returns the value of a keyword argument from a JS object, or falls back to options."
  ([k opts]
   (let [opts-map (if (map? opts) opts (js->clj opts :keywordize-keys true))]
     (get opts-map k)))
  ([opts]
   opts))

(defn to-js [x]
  (clj->js x))

(defn show [el]
  "Shows an element. Works with jQuery objects and raw DOM elements."
  (when el
    (if (and (exists? js/jQuery) ^boolean (js/jQuery.is jQuery el))
      (.show ^js el)
      (gobj/set el "style.display" "block"))))

(defn hide [el]
  "Hides an element. Works with jQuery objects and raw DOM elements."
  (when el
    (if (and (exists? js/jQuery) ^boolean (js/jQuery.is jQuery el))
      (.hide ^js el)
      (gobj/set el "style.display" "none"))))

;; proxy-request is intentionally stubbed — per the social-features decision we drop the
;; old server-side CORS proxy. This no-op returns the URL unchanged so gists that reference
;; it at compile/runtime still work.
(defn proxy-request [url]
  url)
