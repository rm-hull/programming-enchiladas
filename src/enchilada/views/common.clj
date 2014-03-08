(ns enchilada.views.common
  (:use [hiccup.core]
        [hiccup.page]
        [clj-stacktrace.core]
        [clj-stacktrace.repl]
        [enchilada.util.gist]
        [enchilada.util.page :only [include-async-js]])
  (:require [enchilada.util.google-analytics :as ga]))

(defn url [gist & suffixes]
  (apply str "https://gist.github.com/" (login-id gist) suffixes))

(defn spinner [css-class]
  (html
    [:div#spinner {:class css-class }
      [:div {:class "spinner"}
       (for [x (range 1 13)]
          (html
            [:div {:class (str "bar" x)}]))]]))

(def home-url "/")

(def keywords "clojure,clojurescript,gist,programming,lisp,github,html5,canvas,svg,webgl,3d,javascript,algorithms,computer,science,noir,compojure,ring,middleware,lein,leiningen")

(def blurb "A sort-of gist for ClojureScript/canvas/SVG experiments, much like http://bl.ocks.org/ but geared specifically for on-the-fly ClojuresScript code generation.")

(def header-bar
  [:div.header
   [:section.container
    [:a.header-logo {:href home-url :title "Explore other ClojureScript Gists"} [:i.fa.fa-cutlery] " Programming Enchiladas"]
    [:div.command-bar
     [:ul.top-nav]]]])

(defn layout [& {:keys [title content refresh]}]
  (html5
    [:head
     [:title title]
     [:meta {:name "keywords" :content keywords}]
     [:meta {:name "description" :content blurb}]

     (when refresh
       [:meta {:http-equiv "refresh" :content refresh}])
     [:link {:rel "icon" :type "image/png" :href "/assets/images/favicon.png"}]
     (include-css
       "//netdna.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.css"
       "/assets/css/default.css"
       "/assets/css/spinner.css"
       "/assets/css/ribbon.css")
     (include-js
       "https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"
       "/assets/js/arbor.js"
       "/assets/js/arbor-tween.js")
     (include-async-js
       "//cdnjs.cloudflare.com/ajax/libs/react/0.8.0/react.min.js"
       "/assets/js/doc.shim.js"
       "http://www.senchalabs.org/philogl/PhiloGL/build/PhiloGL.js")
     (ga/google-maps-jscript-api
       (System/getenv "GOOGLEMAPS_API_KEY")
       false)
     (ga/generate-tracking-script
       (System/getenv "GA_TRACKING_ID")
       (System/getenv "SITE_URL"))]
    [:body
     [:div.wrapper header-bar]
     [:div.wrapper content]]))

(defn ribbon [text href]
  (html
    [:a.github-ribbon {:href href :title href :rel "me"} text]))

(defn- elem-partial [elem]
  (if (:clojure elem)
    [:tr
      [:td.source (h (source-str elem))]
      [:td.method (h (clojure-method-str elem))]]
    [:tr
      [:td.source (h (source-str elem))]
      [:td.method (h (java-method-str elem))]]))

(defn remove-newlines [s]
  (clojure.string/replace s "\n" " "))

(defn replace-apostrophes [s]
  (clojure.string/replace s "'" "\\'"))

(defn html-exception [ex]
  (let [ex-seq    (iterate :cause (parse-exception ex))
        exception (first ex-seq)
        causes    (rest ex-seq)]
    (html
      [:div#stacktrace
        [:div#exception
          [:h3.info (h (remove-newlines (str ex)))]
          [:table.trace
            [:tbody (map elem-partial (:trace-elems exception))]]]
        (for [cause causes :while cause]
          [:div#causes
           [:h3.info "Caused by: "
                    (h (.getName (:class cause))) " "
                    (h (remove-newlines (replace-apostrophes (:message cause))))]
           [:table.trace
             [:tbody (map elem-partial (:trimmed-elems cause))]]])])))

