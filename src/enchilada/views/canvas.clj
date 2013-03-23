(ns enchilada.views.canvas
  (:use [ring.util.response :only [file-response content-type header]]
        [hiccup.core :only [html]] 
        [hiccup.page :only [include-js]]
        [enchilada.util.compiler :only [regenerate-if-stale]]
        [enchilada.util.fs :only [gzip-file]]
        [enchilada.util.gist :only [fetch]]
        [enchilada.views.common]))

(defn page [gist & [req]]
  (layout (str "Programming Enchiladas: " (url gist))
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
