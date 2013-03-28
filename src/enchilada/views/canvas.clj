(ns enchilada.views.canvas
  (:use [compojure.core :only [defroutes GET]]
        [ring.util.response :only [file-response content-type header]]
        [hiccup.core :only [html]] 
        [hiccup.element :only [image link-to]] 
        [hiccup.page :only [include-js]]
        [enchilada.util.compiler :only [regenerate-if-stale]]
        [enchilada.util.fs :only [gzip-file]]
        [enchilada.util.gist :only [fetch]]
        [enchilada.util.time-ago]
        [enchilada.views.common]))  

(defn- meta-info [gist]
  (let [get (fn [& props] (get-in gist props))]
    [:section.container
      [:div.gist-header
        [:div.meta
         [:h1
          [:div.author
           (image { :width 26 :height 26 } (get :user :avatar_url)) 
           [:span (link-to (get :user :html_url) (get :user :login))] " / " 
           [:strong (link-to (get :html_url) (first (keys (get :files)))) ]
           [:div.gist-timestamp
            [:span.datetime "Last updated " 
             [:time {:title (get :updated_at) :datetime (get :updated_at)}] (elapsed-time (get :updated_at))]]]]]] 
      [:div.gist-description
       [:p (get :description)]]]))

(defn- page [gist & [req]]
  (layout (str "Programming Enchiladas: " (get-in gist [:user :login]) " / " (:filename (first (vals (:files gist)))))
    (html
      [:div
        (spinner "container grey")
        (ribbon "Fork me on GitHub!" "https://github.com/rm-hull/programming-enchiladas")
        (meta-info gist)
        [:section.container 
         [:div#error]]
        [:section.container
         [:canvas#world { :width 800 :height 600 }]]
        [:section.container 
         (include-js (url gist ".js"))]
        (include-js (str "/cljs/" (:id gist) (if (debug? req) "?debug=true" "")))])))

(defn- serve-js [gist & [req]]
  (->
    gist
    (regenerate-if-stale (debug? req))
    (gzip-file)  
    (file-response)
    (content-type "application/javascript")
    (header "Content-Encoding" "gzip")))

(defroutes routes 
  (GET "/cljs/:id" [id :as req] (serve-js (fetch id) req))
  (GET "/:login/:id" [login id :as req] (page (fetch id) req)))

