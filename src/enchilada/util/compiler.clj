(ns enchilada.util.compiler
  (:use [cljs.closure :only [build]]
        [enchilada.util.fs])
  (:require [clojure.java.io :as io]))


(defn cljs-build-opts [gist]
  { :output-to (output-file gist)
    :output-dir (temp-dir gist)
    :optimizations :advanced
    :pretty-print true
    :externs ["externs/jquery.js"] })   

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
