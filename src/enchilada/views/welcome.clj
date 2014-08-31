(ns enchilada.views.welcome
  (:use
    [compojure.core :only [defroutes GET]]
    [ring.util.response :only [redirect file-response response header content-type]]
    [hiccup.core :only [html]]
    [enchilada.services.gamification :only [top-n]]
    [enchilada.util.time-ago]
    [enchilada.util.markdown :only [simple-md]]
    [enchilada.util.twitter :as twitter]
    [enchilada.util.gist :only [login-id]]
    [enchilada.util.fs :only [is-filetype? work-files* fetch-gist png-img-file jpg-img-file]]
    [enchilada.views.common])
  (:require
    [clojure.string :as str]
    [clojure.java.io :as io]
    [me.raynes.fs :as fs]))

(def *default-sort-order* "latest")

(defn gallery-panel [gist]
  (when gist
    (let [login-id (login-id gist)
          last-updated (latest-commit-date gist)
          gist (fn [& props] (get-in gist props))
          owner (or (gist :owner) (gist :user))]
      [:div.gallery-panel
        [:div.gist-header
          [:div.meta
           [:h1
            [:div.author
             [:img {:src (owner :avatar_url) :width 26 :height 26 }]
             [:span [:a {:href login-id} (owner :login)]] " / "
             [:strong [:a {:href login-id} (first-filename gist)]]
             [:div.gist-timestamp
              [:span.datetime "Last updated "
               [:time {:title last-updated :datetime last-updated} (elapsed-time last-updated)]]
               (fork-info gist)]]]]]
        [:div.gist-description
         [:p (-> :description gist (limit 200) simple-md)]]
        [:div.gallery-picture
         [:a {:href (str (owner :login) "/" (gist :id)) :title (:filename (first (vals (gist :files))))}
           [:img {:src (str "_images/" (gist :id)) :width 400 :height 300}]]]])))

(def is-json? (partial is-filetype? ".json"))

(def user-id-regex #".*/(.*)/(.*).(json|png)")

(defn filename->gist [file]
  (let [[_ user id] (re-find user-id-regex (fs/absolute-path file))]
    {:id id :owner { :login user}}))

(defn mongo->gist [mongo-record]
  (let [[user id] (str/split (:gist mongo-record) #"/")]
    {:id id :owner { :login user}}))

(defn pick-mongo [n sort-param]
  (map
    mongo->gist
    (case sort-param
      "popular"    (top-n :visits -1 n)
      "unloved"    (top-n :visits 1 n)
      "latest"     (top-n :last_updated -1 n)
      "favourites" (top-n :stars -1 n))))

(defn pick-random [n]
  (->>
    (io/file "work/gists/cache")
    (work-files* is-json?)
    (map filename->gist)
    (shuffle)
    (take n)))

(defn to-int [s]
  (Integer/parseInt s))

(defn welcome [req]
  (let [num-items (to-int (get-in req [:query-params "n"] "10"))
        sort-param (get-in req [:query-params "sort"] *default-sort-order*)
        pick-ten (if (= sort-param "random")
                   (pick-random num-items)
                   (pick-mongo num-items sort-param))]
    (layout
      :title "Programming Enchiladas :: Gallery"
      :refresh (if (= sort-param "random") 3600)
      :sort-param sort-param
      :count-param num-items
      :home-page? true
      :content
        [:section.container
          [:h1
            [:i.fa.fa-film.fa-x2]
            "&nbsp;&nbsp;Gallery"
            [:div.stats [:span.share-buttons twitter/share-button]] ]
          [:div.gist-description
            [:p "A ClojureScript-based HTML5 Canvas and SVG Graphics Playground, much like "
               [:a {:href "http://bl.ocks.org/"} "http://bl.ocks.org/"]
               " but specifically designed for showcasing small ClojuresScript code demos: The underlying agenda is to show how small simple functional programs can generate complex behaviour."]
            [:p "This page shows some of the gists we know about. Why not add yours?"]]

          [:div.gallery-parent
           (ribbon "Fork me on GitHub!" "https://github.com/rm-hull/programming-enchiladas")
           (pmap (comp gallery-panel fetch-gist) pick-ten)]])))

(defn img-resource [[mime-type filename]]
  (if (fs/exists? (io/file filename))
    (->
      (file-response filename)
      (content-type mime-type))))

(defn fetch-image [id]
  (first
    (for [f [["image/png" (png-img-file {:id id})]
             ["image/jpg" (jpg-img-file {:id id})]
             ["image/png" "resources/public/images/coming-soon.png"]]
          :let [resource (img-resource f)]
          :when resource]
      resource)))

(defroutes routes
  (GET "/robots.txt" [] (file-response "resources/private/robots.txt"))
  (GET "/_images/:id" [id] (fetch-image id))
  (GET "/" [] welcome))
