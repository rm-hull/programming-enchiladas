(ns enchilada.middleware.cache
  "Adds cache control headers to response"
  (:require [clojure.string :as str]))

(defn as-str
  "Like clojure.core/str, but if an argument is a keyword or symbol,
  its name will be used instead of its literal representation.

  Example:
     (str :foo :bar)     ;;=> \":foo:bar\"
     (as-str :foo :bar)  ;;=> \"foobar\"

  Note that this does not apply to keywords or symbols nested within
  data structures; they will be rendered as with str.

  Example:
     (str {:foo :bar})     ;;=> \"{:foo :bar}\"
     (as-str {:foo :bar})  ;;=> \"{:foo :bar}\" "
  ([] "")
  ([x] (if (instance? clojure.lang.Named x)
         (name x)
         (str x)))
  ([x & ys]
     ((fn [#^StringBuilder sb more]
        (if more
          (recur (. sb  (append (as-str (first more)))) (next more))
          (str sb)))
      (new StringBuilder #^String (as-str x)) ys)))

(defn get-path [^String uri]
  (when uri
    (let [idx (.indexOf uri "/" 1)]
      (if (neg? idx)
        uri
        (.substring uri 0 idx)))))

(defn header-option
  "Converts a header option KeyValue into a string."
  [[key val]]
  (cond
    (true? val)  (as-str key)
    (false? val) nil
    :otherwise   (as-str key "=" val)))

(defn header-options
  "Converts a map into an HTTP header options string."
  [m delimiter]
  (str/join delimiter
    (remove nil? (map header-option m))))

(defn overwrite [handler request headers]
  (if-let [response (handler request)]
    (assoc response :headers
           (merge (:headers response) headers))))

(defn wrap-cache-control
   "Middleware to set the Cache-Control http header. Map entries with boolean
   values either write their key if true, or nothing if false.
   Example:
   {:max-age 3600 :public false :must-revalidate true}
   => Cache-Control: max-age=3600, must-revalidate"
   [handler header-map cacheable]
   (fn [req]
     (if-not (cacheable (get-path (:uri req)))
       (handler req)
       (overwrite
         handler req
         {"Cache-Control" (header-options header-map ", ")}))))
