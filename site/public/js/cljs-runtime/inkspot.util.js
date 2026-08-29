goog.provide('inkspot.util');
/**
 * Converts strings into punctuation-free keywords
 */
inkspot.util.name__GT_kword = (function inkspot$util$name__GT_kword(s){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(clojure.string.replace(clojure.string.trim(clojure.string.replace(cljs.core.name(s),/\W/," ")),/ +/,"-")));
});

//# sourceMappingURL=inkspot.util.js.map
