(ns enchilada.util.fs
  (:require
    [clojure.java.io :as io]
    [clojure.data.json :as json]
    [clj-time.format :refer [parse]]
    [clj-time.coerce :refer [to-long]]
    [me.raynes.fs :as fs])
  (:import
    [java.io File]))

(defn- paths [& paths]
  (interpose "/" (flatten paths)))

(defn filename-template [prefix & suffix]
  (fn [gist]
    (apply str (concat (paths "work" "gists" prefix (get-in gist [:user :login]) (:id gist)) suffix))))

(def src-dir     (filename-template "src" "/"))
(def temp-dir    (filename-template "tmp" "/"))
(def cache-file  (filename-template "cache" ".json"))
(def image-file  (filename-template "images" ".png"))
(def output-file (filename-template "out" "/generated.js"))
(def output-dir  (filename-template "out" "/"))

; Attribution: http://clojurescriptone.com/
(defn delete
  [& paths]
  (doseq [path paths
          file (reverse (file-seq (io/file path)))]
    (fs/delete file)))

(defn clean [f gist]
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

(defn last-modified
  "Converts the updated_at field into a number of milliseconds since 1.1.1970"
  [gist]
  (-> gist :updated_at parse to-long))

(defn persist [gist]
  (clean src-dir gist)
  (let [last-modified (last-modified gist)
        dir           (src-dir gist)]
    (doseq [{filename :filename content :content} (vals (:files gist))]
      (write-file (io/file dir filename) (add-namespace content) last-modified)))

  (fs/mkdirs (fs/parent (cache-file gist)))
  (with-open [w (io/writer (cache-file gist))]
    (json/write gist w :key-fn name)))

(defn fetch-gist
  "Fetches a gist from a local filestore, and parses it into a keyword hash"
  [gist]
  (with-open [r (io/reader (cache-file gist))]
    (json/read r :key-fn keyword)))

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

(defn is-filetype? [suffix ^File f]
  (and
    (fs/file? f)
    (.endsWith (.getName f) suffix)))

(defn work-files* [pred ^File dir]
  (filter pred (file-seq dir)))
