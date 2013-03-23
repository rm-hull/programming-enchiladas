(ns enchilada.views.canvas
  (:use [compojure.response]
        [ring.util.response :only [file-response content-type header]]
        [hiccup.core :only [html]] 
        [hiccup.page :only [include-css include-js html5]]
        [hiccup.element :only [javascript-tag]]
        [enchilada.util.compiler :only [regenerate-if-stale]]
        [enchilada.util.fs :only [gzip-file]]
        [enchilada.util.gist :only [fetch login-id]]
        ))

(defn- url [gist & suffixes]
  (apply str "https://gist.github.com/" (login-id gist) suffixes))

(defn- layout [gist & content]
  (html5
    [:head
     [:title (str "Programming Enchiladas: " (url gist))]
     (include-css "/assets/css/default.css")
     (include-css "/assets/css/ribbon.css")
     (include-js "https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js")
     ]
    [:body
     [:div#wrapper content]]))

(defn- ribbon [text href]
  (html
    [:div#ribbon
      [:p
        [:a {:href href :title href :rel "me"} text]]]))

(defn debug? [req]
   (= "true" (get-in req [:params :debug])))

(defn page [gist & [req]]
  (layout gist
    (html
      [:div
        (ribbon "Fork me on GitHub!" "https://github.com/rm-hull/programming-enchiladas")
        [:div#info]
        [:canvas#world { :width 800 :height 600 }]
        (include-js (url gist ".js"))
        (include-js (str "/cljs/" (:id gist) (if (debug? req) "?debug=true" "")))])))

(defn serve-js [id & [req]]
  (->
    (fetch id)
    (regenerate-if-stale (debug? req))
    (gzip-file)  
    (file-response)
    (content-type "application/javascript")
    (header "Content-Encoding" "gzip")))
