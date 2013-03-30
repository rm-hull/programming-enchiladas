(ns enchilada.views.canvas
  (:use [compojure.core :only [defroutes GET]]
        [ring.util.response :only [file-response content-type header]]
        [hiccup.core :only [html]] 
        [hiccup.element :only [image link-to]] 
        [hiccup.page :only [include-js]]
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
           [:strong (link-to (get :html_url) (:filename (first (vals (get :files))))) ]
           [:div.gist-timestamp
            [:span.datetime "Last updated " 
             [:time {:title (get :updated_at) :datetime (get :updated_at)}] (elapsed-time (get :updated_at))]]]]]] 
      [:div.gist-description
       [:p (get :description)]]]))

(defn render-page [{:keys [gist debug] :as model}]
  (layout (str "Programming Enchiladas: " (get-in gist [:user :login]) " / " (:filename (first (vals (:files gist)))))
    (html
      [:div
        (spinner "container grey")
        (meta-info gist)
        [:section.container 
         [:div#error]]
        [:section.container
         [:canvas#world { :width 800 :height 600 }]]
        (ribbon "Fork me on GitHub!" "https://github.com/rm-hull/programming-enchiladas")
        [:section.container 
         (include-js (url gist ".js"))]
        (include-js (str "/cljs/" (:id gist) (if debug "?debug=true" "")))
       ])))




