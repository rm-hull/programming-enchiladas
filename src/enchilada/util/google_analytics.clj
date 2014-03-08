(ns enchilada.util.google-analytics
  (:require
    [clojure.string :as str]
    [enchilada.views.common :refer [include-async-js]]))

(def template
  "<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'TRACKING_ID', 'SITE_URL');
  ga('send', 'pageview');

</script>")

(def generate-tracking-script
  (memoize
    (fn [tracking-id site-url]
      (when-not (empty? tracking-id)
        (->
          template
          (str/replace "TRACKING_ID" tracking-id)
          (str/replace "SITE_URL" site-url))))))

(def google-maps-jscript-api
  (memoize
    (fn [api-key sensor?]
      (when-not (empty? api-key)
        (include-async-js
          (str "https://maps.googleapis.com/maps/api/js?key=" api-key "&sensor=" sensor?))))))


