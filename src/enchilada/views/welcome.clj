(ns enchilada.views.welcome
  (:use [compojure.core :only [defroutes GET]]
        [ring.util.response :only [redirect file-response response header]]
        [hiccup.core :only [html]]
        [enchilada.util.time-ago]
        [enchilada.util.gist :only [login-id]]
        [enchilada.util.fs :only [is-filetype? work-files* fetch-gist image-file]]
        [enchilada.views.common])
  (:require [clojure.java.io :as io]
            [me.raynes.fs :as fs]))

(defn gallery-panel [gist]
  (let [login-id (login-id gist)
        gist (fn [& props] (get-in gist props))]
    [:div.gallery-panel
      [:div.gist-header
        [:div.meta
         [:h1
          [:div.author
           [:img {:src (gist :user :avatar_url) :width 26 :height 26 }]
           [:span [:a {:href login-id} (gist :user :login)]] " / "
           [:strong [:a {:href login-id} (:filename (first (vals (gist :files))))]]
           [:div.gist-timestamp
            [:span.datetime "Last updated "
             [:time {:title (gist :updated_at) :datetime (gist :updated_at)}] (elapsed-time (gist :updated_at))]]]]]]
      [:div.gist-description
       [:p (gist :description)]]
      [:div.gallery-picture
       [:a {:href (str (gist :user :login) "/" (gist :id)) :title (:filename (first (vals (gist :files))))}
         [:img {:src (str "images/" login-id ".png") :width 400 :height 300}]]]]))

(def is-json? (partial is-filetype? ".json"))

(def user-id-regex #".*/(.*)/(.*).(json|png)")

(defn filename->gist [file]
  (let [[_ user id] (re-find user-id-regex (fs/absolute-path file))]
    {:id id :user { :login user}}))

(defn welcome [req]
  (let [files    (work-files* is-json? (io/file "work/gists/cache"))
        pick-ten (take 10 (sort-by (fn [x] (rand)) files))
        gists    (map (comp fetch-gist filename->gist) pick-ten)]
    (layout "Programming Enchiladas :: Gallery"
      (html
        [:section.container
          [:h1 "Programming Enchiladas :: Gallery"]
          [:div.gist-description
            [:p "A sort-of gist for ClojureScript/canvas/SVG experiments, much like "
               [:a {:href "http://bl.ocks.org/"} "http://bl.ocks.org/"]
               " but geared specifically for on-the-fly ClojuresScript code generation: getting sick of setting up yet another lein/noir for every new folly, so it makes more sense to have a framework which loads public ClojureScript gists directly from github, compiles them on the fly and serves them out."]
            [:p "This page shows some of the gists we know about. Why not add yours?"]]

          [:div.gallery-parent
           (ribbon "Fork me on GitHub!" "https://github.com/rm-hull/programming-enchiladas")
           (map gallery-panel gists)]]))))

(defn fetch-image [login id]
  (let [filename (image-file {:id id :user {:login login}})]
    (->
      (if (fs/exists? (io/file filename))
        filename
        "resources/public/images/coming-soon.png")
      (file-response)
      (header "Cache-Control" "max-age=3600, must-revalidate"))))

(defroutes routes
  (GET "/robots.txt" [] (file-response "resources/private/robots.txt"))
  (GET "/images/:login/:id.png" [login id] (fetch-image login id))
  (GET "/" [] welcome))
