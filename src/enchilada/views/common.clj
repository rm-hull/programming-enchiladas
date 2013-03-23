(ns enchilada.views.common
  (:use ;[compojure.response]
        [hiccup.core :only [html]] 
        [hiccup.page :only [include-css include-js html5]]
        [enchilada.util.gist :only [login-id]]))

(defn url [gist & suffixes]
  (apply str "https://gist.github.com/" (login-id gist) suffixes))

(defn layout [title & content]
  (html5
    [:head
     [:title title]
     (include-css "/assets/css/default.css")
     (include-css "/assets/css/ribbon.css")
     (include-js "https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js")
     ]
    [:body
     [:div#wrapper content]]))

(defn ribbon [text href]
  (html
    [:div#ribbon
      [:p
        [:a {:href href :title href :rel "me"} text]]]))

(defn debug? [req]
   (= "true" (get-in req [:params :debug])))
