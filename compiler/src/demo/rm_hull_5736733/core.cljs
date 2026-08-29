(ns demo.rm-hull-5736733.core
  (:require [monet.canvas :refer [draw-image]] [enchilada :refer [canvas ctx proxy-request]] [jayq.core :refer [show]] [jayq.util :refer [log]]))

(def greens
  (map #(vector 0x30 % 0x30 0xFF) (range 0xCF)))

(defn random-data [w h colors]
  (let [v (vec colors)
        sz (count v)
        rnd-color #(get v (rand-int sz))]
    { :width w
      :height h
      :data (vec (repeatedly h
              #(vec (repeatedly w rnd-color))))})) 
        
(defn depthmap-url
  ([] (depthmap-url (rand-int 10)))
  ([n] (str "https://raw.github.com/rm-hull/depth-maps/master/" n ".jpg")))

(defn load-image! [url & [callback-fn]]
  (let [img (js/Image.)]
    (println "Loading image: " url)
    (when callback-fn
      (set! (.-onload img) (fn [] (callback-fn img))))
    (set! (.-crossOrigin img) "anonymous")
    (set! (.-src img) (proxy-request url)))
    img)

(defn offset [[x y] w]
  (* (+ (* y w) x) 4))

(defn get-point [arr width co-ords]
  (let [offset (offset co-ords width)]
    (map #(aget arr %) (range offset (+ offset 4)))))

(defn set-point! [arr width co-ords data]
  (loop [idx (offset co-ords width)
         data   data]
    (when (seq data)
      (aset arr idx (first data))
      (recur (inc idx) (rest data)))))

(defn depth 
  "Input data assumed to be [r g b a], normalize to range 0..31 from green byte"
  [data]
  (quot (second data) 8))

(defn generate-sird [img rand-data]
  (let [width     (.-width img)
        height    (.-height img)]
    (draw-image ctx img { :x 0 :y 0 :w width :h height })
    (let [depth-map   (. ctx (getImageData 0 0 width height))
          data        (.-data depth-map)
          rand-w      (:width rand-data)
          set-pt!     (partial set-point! data width)
          split-point (- width 1 rand-w)]
      (doseq [y (range height)
              :let [rand-row (get (:data rand-data) (mod y (:height rand-data)))]
              x (range (dec width) -1 -1)
              :let [depth (depth (get-point data width [x y]))]]
        (set-pt! 
          [x y]
          (if (> x split-point) 
            (get rand-row (mod (- x depth) rand-w))
            (get-point data width [(- (+ x rand-w) depth) y]))))
      (. ctx (putImageData depth-map 0 0)))))

(enchilada.core/show (canvas))

(load-image! 
  (depthmap-url) 
  #(generate-sird % (random-data 100 100 greens)))