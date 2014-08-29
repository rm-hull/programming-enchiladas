(ns enchilada.util.twitter
  (:require
    [hiccup.core :refer [html]]
    [enchilada.views.common :refer [limit first-filename]]
    ))

;<meta name="twitter:card" content="summary_large_image">
;<meta name="twitter:site" content="@011101000111010">
;<meta name="twitter:title" content="rm-hull / fractal.cljs">
;<meta name="twitter:description" content="Mandlebrot &amp;amp; Julia fractal generator, based on clojure code originally described in http://webrot.destructuring-bind.org/mandlebrot. Click the left mouse button to zoom in, and the right button to zoom...">
;<meta name="twitter:creator" content="@011101000111010">
;<meta name="twitter:image:src" content="http://programming-enchiladas.destructuring-bind.org/_images/b30f4c0e7d499810e669">
;<meta name="twitter:domain" content="http://programming-enchiladas.destructuring-bind.org">

(def share-button
  (html
    [:a.twitter-share-button {:href "https://twitter.com/share" :data-hashtags "clojurescript" :data-lang "en"}]
    [:script "!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=\"https://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");"]))

(defn generate-card-metadata [twitter-handle site-url gist]
  (let [owner (or (gist :owner) (gist :user))]
    (when-not (empty? twitter-handle)
      (html
        [:meta {:name "twitter:card" :content "summary_large_image"}]
        [:meta {:name "twitter:site" :content twitter-handle}]
        [:meta {:name "twitter:title" :content (str "Programming Enchiladas :: " (owner :login) " / " (first-filename gist))}]
        [:meta {:name "twitter:description" :content (-> :description gist (limit 200))}]
        [:meta {:name "twitter:image:src" :content (str site-url "/_images/" (gist :id))}]))))
