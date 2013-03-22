(ns enchilada.util.compiler
  (:use [cljs.closure :only [build]]
        [enchilada.util.fs])
  (:require [clojure.java.io :as io]))

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

(defn cljs-build-opts [gist]
  { :output-to (output-file gist)
    :output-dir (temp-dir gist)
   ; :libs []
   ; :foreign-libs []
    :optimizations :advanced
    :pretty-print true
    :externs ["externs/jquery.js"]
    })   

(defn- validate 
  "Protect against mischeivous parent paths in a gist"
  [gist]
  (if (some (partial = "..") (vals gist))
    (throw (IllegalArgumentException. (pr-str gist)))))

(defn- clean-temp [gist]
  (delete (temp-dir gist)))

(defn- prepare-filesys [gist]
  (validate gist)
  (.mkdirs (.getParentFile (io/file (output-file gist)))) 
  ; TODO - download gist
  (io/copy (io/file "src/client/enchilada.cljs") (io/file (src-dir gist) "__enchilada.cljs"))
  (clean-temp gist))

(defn- compress-js [gist]
  (let [plain      (io/file (output-file gist))
        compressed (gzip-file gist)]
    (gzip plain compressed)
    (delete plain)))

(defn generate-js [gist]
  (prepare-filesys gist)
  (build 
    (src-dir gist) 
    (cljs-build-opts gist))
  (clean-temp gist)
  (compress-js gist))

;(def x { :user "rm-hull" :id 5201050 })
