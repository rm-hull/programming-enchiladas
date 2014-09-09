(ns enchilada.services.search
  (:require
    [clojure.string :as str]
    [me.raynes.fs :as fs]
    [caponia.index :as idx]
    [caponia.query :as qry]
    [clojure.java.io :as io]
    [enchilada.util.gist :refer [filename->gist]]
    [enchilada.util.fs :refer [work-files* is-json? fetch-gist]]))

(def ^:private fti (idx/make-index))

(defn ^:private text-file? [^String uri]
  (or (.endsWith uri ".txt") (.endsWith uri ".md")))

(defn index
  ([gist] (index gist true))
  ([gist clear-existing?]
    (let [id      (:id gist)
          user    (:login (or (:owner gist) (:user gist)))
          descr   (:description gist)
          fnames  (str/join " " (keys (:files gist)))
          content (str/join " " (map :content (filter (comp text-file? :filename) (vals (:files  gist)))))
          doc-id  {:id id :owner { :login user}}
          terms   (filter first [[user 3] [descr 2] [fnames 1] [content 1]])]
      (future
        (when clear-existing?
          (idx/unindex-all fti doc-id))
        (idx/index-text fti doc-id terms))
      gist)))

(defn ^:private drop-all [index]
  (send index assoc-in [:data] {}))

(defn index-all []
  (drop-all fti)
  (doseq [gist (->>
                 (io/file "work/gists/cache")
                 (work-files* is-json?)
                 (map (comp fetch-gist filename->gist)))]
    (index gist false)))

(defn query [search-text]
  (qry/do-search fti search-text))
