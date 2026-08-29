(ns demo.rm-hull-5201050.core)

;; Print output goes to the output buffer

(doseq [a (range 10)
        b (range a)]
  (println a "x" b "=" (* a b)))

(js/alert "ClojureScript says 'Boo!'")
