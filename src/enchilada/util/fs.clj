(ns enchilada.util.fs
  (:use [enchilada.util.gist :only [last-modified]])
  (:require [clojure.java.io :as io])
  (:import [java.util.zip GZIPInputStream GZIPOutputStream]))

(defn- paths [& paths]
  (interpose "/" (flatten paths)))

(defn filename-template [prefix & suffix]
  (fn [gist]
    (let [shards (take 2 (map str (seq (get-in gist [:user :login]))))]
      (apply str (concat (paths "work" "gists" prefix shards (get-in gist [:user :login]) (:id gist)) suffix)))))

(def src-dir     (filename-template "src" "/"))
(def temp-dir    (filename-template "tmp" "/"))
(def output-file (filename-template "out" ".js"))
(def gzip-file   (filename-template "out" ".gz"))

; Attribution: https://gist.github.com/bpsm/1858654
(defn gzip
  "Writes the contents of input to output, compressed.
  input: something which can be copied from by io/copy.
  output: something which can be opend by io/output-stream.
      The bytes written to the resulting stream will be gzip compressed."
  [input output & opts]
  (with-open [output (-> output io/output-stream GZIPOutputStream.)]
    (apply io/copy input output opts)))

; Attribution: http://clojurescriptone.com/
(defn delete
  [& paths]
  (doseq [path paths
          file (reverse (file-seq (io/file path)))]
    (.delete file)))

(defn clean [f gist]
  (let [dir (io/file (f gist))]
    (delete dir)
    (.mkdirs dir)))

(defn write-file [file contents & [last-modified]]
  (spit file contents)
  (when last-modified
    (.setLastModified file last-modified)))

(defn persist [gist]
  (clean src-dir gist)
  (let [last-modified (last-modified gist)
        dir           (src-dir gist)]
    (doseq [{filename :filename content :content} (vals (:files gist))]
      (write-file (io/file dir filename) content last-modified))))

(defn prepare [gist]
  (.mkdirs (.getParentFile (io/file (output-file gist)))) 
  (persist gist)
  (io/copy (io/file "src/client/enchilada.cljs") (io/file (src-dir gist) "__init.cljs"))
  (clean temp-dir gist))

(defn compress [gist]
  (let [plain      (io/file (output-file gist))
        compressed (gzip-file gist)]
    (gzip plain compressed)
    (delete plain)))

(defn stale? 
  "Checks to see if the generated javascript is stale (older than) 
   compared to the last modified time on the gist"
  [gist]
  (< 
    (.lastModified (io/file (gzip-file gist))) 
    (last-modified gist)))
