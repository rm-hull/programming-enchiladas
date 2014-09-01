(ns enchilada.views.create
  (:require
    [clojure.string :as str]
    [clojure.java.io :as io]
    [me.raynes.fs :as fs]
    [compojure.core :refer [defroutes GET POST]]
    [ring.util.response :refer [response file-response content-type]]
    [hiccup.core :refer [html]]
    [enchilada.util.fs :refer [clean src-dir temp-dir cache-file output-dir output-file]]
    [enchilada.util.gist :refer [anonymous]]
    [enchilada.util.compiler :refer [generate-js]]
    [enchilada.views.common :refer [spinner layout ribbon]]))

(defn create [req]
  (let []
    (layout
      :title "Programming Enchiladas :: Create"
      :home-page? false
      :extra-js ["//cdnjs.cloudflare.com/ajax/libs/ace/1.1.3/ace.js"
                 "//cdnjs.cloudflare.com/ajax/libs/ace/1.1.3/theme-clouds.js"
                 "//cdnjs.cloudflare.com/ajax/libs/ace/1.1.3/mode-clojure.js"
                 "//cdnjs.cloudflare.com/ajax/libs/ace/1.1.3/snippets/clojure.js"
                 "/_assets/js/create.js"
                 ]
      :content
        [:div
          [:section.container
            [:h1 [:i.fa.fa-bug] "&nbsp;&nbsp;Create"]
            [:div.gist-description
              [:p "Code up some ClojureScript, press " [:i "this"] " compile button "
               [:i.fa.fa-hand-o-right] " "
               [:a#compile {:href "#" :title "Compile clojurescript"} [:i.fa.fa-play-circle.fa-lg]]
               " to test it, and then save it as a gist."]]
            [:div.create-parent
             (spinner "container grey")
             (ribbon "Fork me on GitHub!" "https://github.com/rm-hull/programming-enchiladas")
             [:div#editor]]]
          [:section.container
           [:div#error]]
          [:section#main-arena.container
           [:canvas#canvas-area { :width 800 :height 600 }]
           [:canvas#webgl-area { :width 800 :height 600 }]
           [:svg#svg-area]
           [:div#console]]])))

(defn compile [req]
  (let [src (get-in req [:params :source])
        gist (anonymous src)]
    (generate-js gist {:debug true})
    (let [out (->
                (output-file gist)
                (file-response)
                (content-type "text/javascript"))]
      (doseq [path [src-dir temp-dir cache-file]]
        (clean path gist))
      out)))

(defroutes routes
  (GET "/_create" [:as req] (create req))
  (POST "/_create/compile" [:as req] (compile req)))
