(ns enchilada.middleware.fso
  (:use [ring.util.response :only [file-response content-type]]))

(defn wrap-filesystem-object [handler regex]
  (fn [req]
    (let [path (:uri req)]
      (if (re-matches regex path)
        (-> (file-response path) (content-type "text/plain"))
        (handler req)))))

