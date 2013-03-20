(ns enchilada.views.canvas
  (:use [hiccup.core :only [html]] 
        [hiccup.page :only [include-css include-js html5]]
        [hiccup.element :only [javascript-tag]]))

(defn- url [user gist & suffixes]
  (apply str "https://gist.github.com/" user "/" gist suffixes))

(defn- layout [user gist & content]
  (html5
    [:head
     [:title (str "Programming Enchiladas: " (url user gist))]
     (include-css "/assets/css/default.css")
     (include-css "/assets/css/ribbon.css")
     (include-js "https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js")
     (include-js (str "/cljs/" user "/" gist))
     ]
    [:body
     [:div#wrapper content]]))

(defn- ribbon [text href]
  (html
    [:div#ribbon
      [:p
        [:a {:href href :title href :rel "me"} text]]]))

(defn page [user gist]
  (layout user gist
    (html
      [:div
        (ribbon "Fork me on GitHub!" "https://github.com/rm-hull/programming-enchiladas")
        [:div#info]
        "Come back soon, we're not quite there yet... but in the meantime, here's your gist:" 
        [:canvas#world]
        (include-js  (url user gist ".js"))
       ])))
