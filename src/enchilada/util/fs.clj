(ns enchilada.util.fs
  (:require [clojure.java.io :as io])
  (:import [java.util.zip GZIPInputStream GZIPOutputStream]))

(defn- paths [& paths]
  (interpose "/" (flatten paths)))

(defn filename-template [prefix & suffix]
  (fn [gist]
    (let [shards (take 2 (map str (seq (:user gist))))]
      (apply str (concat (paths "work" "gists" prefix shards (:user gist) (:id gist)) suffix)))))

(def src-dir     (filename-template "src" "/"))
(def temp-dir    (filename-template "tmp" "/"))
(def output-file (filename-template "out" ".js"))
(def gzip-file   (filename-template "out" ".gz"))

; Attribution: http://clojurescriptone.com/
(defn- delete
  [& paths]
  (doseq [path paths
          file (reverse (file-seq (io/file path)))]
    (.delete file)))

; Attribution: https://gist.github.com/bpsm/1858654
(defn gzip
  "Writes the contents of input to output, compressed.
  input: something which can be copied from by io/copy.
  output: something which can be opend by io/output-stream.
      The bytes written to the resulting stream will be gzip compressed."
  [input output & opts]
  (with-open [output (-> output io/output-stream GZIPOutputStream.)]
    (apply io/copy input output opts)))

