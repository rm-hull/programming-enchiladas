(ns demo.rm-hull-5491968.core
  (:require [monet.canvas :refer [draw-image get-pixel composition-operation]] [monet.core :refer [animation-frame]] [enchilada :refer [ctx canvas proxy-request]] [jayq.core :refer [show]] [jayq.util :refer [wait]])
  (:require-macros [dommy.macros :refer [sel1 node]]))

(def cat-resources 
  [
    "https://gist.github.com/rm-hull/8859515c9dce89935ac2/raw/cat_01.jpg"
    "https://gist.github.com/rm-hull/8859515c9dce89935ac2/raw/cat_02.jpg"
    "https://gist.github.com/rm-hull/8859515c9dce89935ac2/raw/cat_03.jpg"
    "https://gist.github.com/rm-hull/8859515c9dce89935ac2/raw/cat_04.jpg"
    "https://gist.github.com/rm-hull/8859515c9dce89935ac2/raw/cat_05.jpg"
    "https://gist.github.com/rm-hull/8859515c9dce89935ac2/raw/cat_06.jpg"
    "https://gist.github.com/rm-hull/8859515c9dce89935ac2/raw/cat_07.jpg"
    "https://gist.github.com/rm-hull/8859515c9dce89935ac2/raw/cat_08.jpg"
  ])

(defn random-cat []
  (nth cat-resources (rand-int (count cat-resources))))

(defn load-image! [url & [callback-fn]]
  (let [img (js/Image.)]
    (when callback-fn
      (set! (.-onload img) (fn [] (callback-fn img))))
    (set! (.-crossOrigin img) "anonymous")
    (set! (.-src img) (proxy-request url)))
    img)

(defn offset [[x y] w]
  (* (+ (* y w) x) 4))

(defn pisano-period [n]
  (fn [x y]
    [(mod y n) (mod (+ x y) n)]))

(defn draw-frame! [ctx n mapper-fn]
  (let [image-in  (. ctx (getImageData 0 0 n n))
        image-out (. ctx (createImageData n n))
        data-in   (.-data image-in)
        data-out  (.-data image-out)]
  (doseq [y (range n)
          x (range n)
          :let [i (offset [x y] n)
                o (offset (mapper-fn x y) n)]
          c (range 4)]
    (aset data-out (+ o c) (aget data-in (+ i c))))
  (. ctx (putImageData image-out 0 0))
  ctx))

(defn animate [img]
  (let [width (.-width img)
        height (.-height img)]
    (draw-image ctx img { :x 0 :y 0 :w width :h height })
    (wait 
      2000 
      (fn []
        (let [n (max width height)
              mapper-fn (pisano-period n)]
          (letfn [(loop [] 
                    (animation-frame loop)
                    (draw-frame! ctx n mapper-fn))] 
            (loop)))))))

(enchilada.core/show (canvas))

(load-image! (random-cat) animate)