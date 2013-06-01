(ns enchilada.views.common
  (:use hiccup.core 
        hiccup.page
        clj-stacktrace.core 
        clj-stacktrace.repl
        enchilada.util.gist))

(defn url [gist & suffixes]
  (apply str "https://gist.github.com/" (login-id gist) suffixes))

(defn spinner [css-class]
  (html
    [:div#spinner {:class css-class }
      [:div {:class "spinner"}
       (for [x (range 1 13)]
          (html 
            [:div {:class (str "bar" x)}]))]]))

(defn layout [title & content]
  (html5
    [:head
     [:title title]
     [:link {:rel "icon" :type "image/png" :href "/assets/images/favicon.png"}]
     (include-css "/assets/css/default.css")
     (include-css "/assets/css/spinner.css")
     (include-css "/assets/css/ribbon.css")
     (include-js "https://ajax.googleapis.com/ajax/libs/jquery/2.0.1/jquery.min.js")
     (include-js "/assets/js/arbor.js")
     (include-js "/assets/js/arbor-tween.js")
     ]
    [:body
     [:div#wrapper content]]))

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
                    (h (remove-newlines (:message cause)))]
           [:table.trace
             [:tbody (map elem-partial (:trimmed-elems cause))]]])])))

