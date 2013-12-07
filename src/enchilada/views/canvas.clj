(ns enchilada.views.canvas
  (:use [compojure.core :only [defroutes GET]]
        [ring.util.response :only [file-response content-type header]]
        [hiccup.core :only [html]]
        [hiccup.element :only [image link-to]]
        [hiccup.page :only [include-js]]
        [enchilada.util.time-ago]
        [enchilada.views.common]))

(defn- meta-info [gist stats]
  (let [gist (fn [& props] (get-in gist props))]
    [:section.container
      [:div.gist-header
        [:div.meta
         [:h1
          [:div.author
           (image { :width 26 :height 26 } (gist :user :avatar_url))
           [:span (link-to (gist :user :html_url) (gist :user :login))] " / "
           [:strong (link-to (gist :html_url) (:filename (first (vals (gist :files)))))]
           (when stats
             [:div.stats
              [:span.views (get stats :visits 1) " views "]
              [:span.stars [:a {:href :# :title "Star this gist"} (get stats :stars 0) " \u2605"]]])
           [:div.gist-timestamp
            [:span.datetime "Last updated "
             [:time {:title (gist :updated_at) :datetime (gist :updated_at)}] (elapsed-time (gist :updated_at))]]]]]]
      [:div.gist-description
       [:p (gist :description)]]]))

(defn- query-params [model]
  (let [params (select-keys model [:debug :optimization-level])]
    (when (seq params)
      (str "?" (clojure.string/join "&" (for [[k v] params] (str (name k) "=" v)))))))

(defn render-page [{:keys [gist debug stats] :as model}]
  (layout
    :title (str "Programming Enchiladas :: " (get-in gist [:user :login]) " / " (:filename (first (vals (:files gist)))))
    :content
      [:div
        (spinner "container grey")
        (meta-info gist stats)
        [:section.container
         [:div#error]]
        [:section.container
         [:canvas#canvas-area { :width 800 :height 600 }]
         [:svg#svg-area]
         [:div#console]]
       (ribbon "Fork me on GitHub!" "https://github.com/rm-hull/programming-enchiladas")
        [:section.container
         (include-js (url gist ".js"))]
        (include-js (str "/_cljs/" (get-in gist [:user :login]) "/" (:id gist) "/generated.js" (query-params model)))]))
