(ns enchilada.views.sitemap
  (:use [compojure.core :only [defroutes GET]]
        [ring.util.response :only [content-type response]]
        [clojure.java.io :only [file]]
        [clojure.data.xml :only [emit-str sexp-as-element]]
        [clj-time.coerce :only [from-long]]
        [enchilada.util.fs :only [filename-template]])
  (:require [me.raynes.fs :as fs])
  (:import [java.io File]))

(defn work-files* [^File dir]
  (filter fs/file? (file-seq dir)))

(defn parent-and-name [^File f]
  (str (fs/name (fs/parent f)) "/" (fs/name f)))

(defn url-element [url chg-freq priority]
  (fn [^File f]
    [:url
      [:loc (str url "/" (parent-and-name f))]
      [:lastmod (str (from-long (fs/mod-time f)))]
      [:changefreq (name chg-freq)]
      [:priority priority]]))

(defn generate-sitemap [base-url work-dir]
  (sexp-as-element
    [:urlset {:xmlns "http://www.sitemaps.org/schemas/sitemap/0.9"}
      (map (url-element base-url :weekly 0.5) (work-files* work-dir))])) 

(defroutes routes
  (GET "/sitemap.xml" [:as req]
    (let [base-url (str (name (:scheme req)) "://" (:server-name req) ":" (:server-port req))]
      (->
        (response (emit-str (generate-sitemap base-url (file "work/gists/out")))) 
        (content-type "text/xml")))))
