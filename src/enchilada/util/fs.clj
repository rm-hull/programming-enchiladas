(ns enchilada.util.fs
  (:require
    [clojure.java.io :as io]
    [clojure.data.json :as json]
    [clj-time.format :refer [parse]]
    [clj-time.coerce :refer [to-long]]
    [me.raynes.fs :as fs]
    [enchilada.util.time-ago :refer [latest-commit-date]])
  (:import
    [java.io File FileNotFoundException]))

(defn- paths [& paths]
  (interpose "/" (flatten paths)))

(defn filename-template [prefix & suffix]
  (fn [gist]
    (apply str (concat (paths "work" "gists" prefix (get-in gist [:owner :login]) (:id gist)) suffix))))

(def src-dir      (filename-template "src" "/"))
(def temp-dir     (filename-template "tmp" "/"))
(def cache-file   (filename-template "cache" ".json"))
(def png-img-file (filename-template "images" ".png"))
(def jpg-img-file (filename-template "images" ".jpg"))
(def output-file  (filename-template "out" "/generated.js"))
(def output-dir   (filename-template "out" "/"))

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

(defn persist [gist]
  (clean src-dir gist)
  (let [last-modified (to-long (latest-commit-date gist))
        dir           (src-dir gist)]
    (doseq [{filename :filename content :content} (vals (:files gist))]
      (write-file (io/file dir filename) (add-namespace content) last-modified)))

  (fs/mkdirs (fs/parent (cache-file gist)))
  (with-open [w (io/writer (cache-file gist))]
    (json/write gist w :key-fn name)))

(defn fetch-gist
  "Fetches a gist from a local filestore, and parses it into a keyword hash"
  [gist]
  (try
    (with-open [r (io/reader (cache-file gist))]
      (json/read r :key-fn keyword))
    (catch FileNotFoundException fnfe
      nil)))

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
    (to-long (latest-commit-date gist))))

(defn is-filetype? [suffix ^File f]
  (and
    (fs/file? f)
    (.endsWith (.getName f) suffix)))

(def is-json? (partial is-filetype? ".json"))

(defn work-files* [pred ^File dir]
  (filter pred (file-seq dir)))
