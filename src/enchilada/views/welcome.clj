(ns enchilada.views.welcome
  (:use
    [compojure.core :only [defroutes GET]]
    [ring.util.response :only [redirect file-response response header content-type]]
    [hiccup.core :only [html]]
    [enchilada.services.gamification :as gam]
    [enchilada.services.search :as search]
    [enchilada.util.time-ago]
    [enchilada.util.markdown :only [simple-md]]
    [enchilada.util.twitter :as twitter]
    [enchilada.util.gist :only [login-id filename->gist mongo->gist]]
    [enchilada.util.fs :only [is-json? work-files* fetch-gist png-img-file jpg-img-file]]
    [enchilada.views.common])
  (:require
    [clojure.string :as str]
    [clojure.java.io :as io]
    [me.raynes.fs :as fs]))

(def +default-sort-order+ "latest")

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

(defn take-1 [n coll]
  (if (neg? n)
    coll
    (take n coll)))

(defn pick-choice [n sort-param]
  (map
    mongo->gist
    (case sort-param
      "popular"    (gam/top-n :visits -1 n)
      "unloved"    (gam/top-n :visits 1 n)
      "favourites" (gam/top-n :stars -1 n)
                   (gam/top-n :last_updated -1 n))))

(defn pick-search [n search-param]
  (take-1 n (map first (search/query search-param))))

(defn pick-random [n]
  (->>
    (io/file "work/gists/cache")
    (work-files* is-json?)
    (map filename->gist)
    (shuffle)
    (take-1 n)))

(defn to-int [s]
  (Integer/parseInt s))

(defn welcome [req]
  (let [num-items    (to-int (get-in req [:query-params "n"] "20"))
        search-param (get-in req [:query-params "search"])
        sort-param   (if-not (empty? search-param)
                       "search"
                       (get-in req [:query-params "sort"] +default-sort-order+))
        picked-items (case sort-param
                       "random" (pick-random num-items)
                       "search" (pick-search num-items search-param)
                                (pick-choice num-items sort-param))]
    (layout
      :title "Programming Enchiladas :: Gallery"
      :refresh (if (= sort-param "random") 3600)
      :sort-param sort-param
      :search-param search-param
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
           (pmap (comp gallery-panel fetch-gist) picked-items)]])))

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
