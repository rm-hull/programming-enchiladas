(ns enchilada.util.fs
  (:use [enchilada.util.gist :only [last-modified]])
  (:require [clojure.java.io :as io]
            [me.raynes.fs :as fs])
  (:import [java.io File]))

(defn- paths [& paths]
  (interpose "/" (flatten paths)))

(defn filename-template [prefix & suffix]
  (fn [gist]
    (apply str (concat (paths "work" "gists" prefix (get-in gist [:user :login]) (:id gist)) suffix))))

(def src-dir     (filename-template "src" "/"))
(def temp-dir    (filename-template "tmp" "/"))
(def output-file (filename-template "out" ".js"))

; Attribution: http://clojurescriptone.com/
(defn delete
  [& paths]
  (doseq [path paths
          file (reverse (file-seq (io/file path)))]
    (fs/delete file)))

(defn clean [^File f gist]
  (let [dir (io/file (f gist))]
    (delete dir)
    (fs/mkdirs dir)))

(defn write-file [^File file contents & [last-modified]]
  (spit file contents)
  (when last-modified
    (.setLastModified file last-modified)))

(defn- add-namespace [^String content]
  (if (neg? (.indexOf content "(ns"))
    (str "(ns " (gensym) ")\n\n" content)
    content))

(defn persist [gist]
  (clean src-dir gist)
  (let [last-modified (last-modified gist)
        dir           (src-dir gist)]
    (doseq [{filename :filename content :content} (vals (:files gist))]
      (write-file (io/file dir filename) (add-namespace content) last-modified))))

(defn prepare [gist]
  (fs/mkdirs (fs/parent (io/file (output-file gist))))
  (persist gist)
  (io/copy (io/file "src/client/enchilada.cljs") (io/file (src-dir gist) "__init.cljs"))
  (clean temp-dir gist))

(defn stale?
  "Checks to see if the generated javascript is stale (older than)
   compared to the last modified time on the gist"
  [gist]
  (<
    (fs/mod-time (io/file (output-file gist)))
    (last-modified gist)))
