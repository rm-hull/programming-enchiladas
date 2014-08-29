(ns enchilada.views.canvas
  (:use [compojure.core :only [defroutes GET]]
        [ring.util.response :only [file-response content-type header]]
        [hiccup.core :only [html]]
        [hiccup.element :only [image link-to]]
        [hiccup.page :only [include-js]]
        [enchilada.util.time-ago]
        [enchilada.util.page :only [include-async-js]]
        [enchilada.util.markdown :only [simple-md]]
        [enchilada.util.twitter :as twitter]
        [enchilada.views.common]))

(defn- meta-info  [gist stats]
  (let [last-updated (latest-commit-date gist)
        gist (fn [& props] (get-in gist props))
        owner (or (gist :owner) (gist :user))]
    [:section.container
      [:div.gist-header
        [:div.meta
         [:h1
          [:div.author
           (image { :width 26 :height 26 } (owner :avatar_url))
           [:span (link-to (owner :html_url) (owner :login))] " / "
           [:strong (link-to (gist :html_url) (first-filename gist))]
           (when stats
             [:div.stats
              [:span.share-buttons twitter/share-button]
              [:span.views (get stats :visits 1) " views "]
              [:span.stars [:a {:href :# :title "Star this gist"} (get stats :stars 0) " \u2605"]]])
           [:div.gist-timestamp
            [:span.datetime "Last updated "
             [:time {:title last-updated :datetime last-updated} (elapsed-time last-updated)]]
            (fork-info gist)]]]]]
      [:div.gist-description
       [:p (-> :description gist simple-md)]]]))

(defn- query-params [model]
  (let [params (select-keys model [:debug :optimization-level])]
    (when (seq params)
      (str "?" (clojure.string/join "&" (for [[k v] params] (str (name k) "=" v)))))))

(defn render-page [{:keys [gist debug stats] :as model}]
  (let [owner (or (gist :owner) (gist :user))]
    (layout
      :title (str "Programming Enchiladas :: " (owner :login) " / " (first-filename gist))
      :extra-metadata (twitter/generate-card-metadata
                        (System/getenv "TWITTER_HANDLE")
                        (System/getenv "FULL_SITE_URL")
                        gist)
      :content
        [:div
          (spinner "container grey")
          (meta-info gist stats)
          [:section.container
           [:div#error]]
          [:section#main-arena.container
           [:canvas#canvas-area { :width 800 :height 600 }]
           [:canvas#webgl-area { :width 800 :height 600 }]
           [:svg#svg-area]
           [:div#console]]
         (ribbon "Fork me on GitHub!" "https://github.com/rm-hull/programming-enchiladas")
          [:section.container
           (include-js (url gist ".js"))]
          (include-async-js (str "/_cljs/" (owner :login) "/" (:id gist) "/generated.js" (query-params model)))])))

