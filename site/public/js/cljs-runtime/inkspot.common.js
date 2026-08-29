goog.provide('inkspot.common');
/**
 * Wrapper around integer parsing, but cross-compatible
 * across Clojure and ClojureScript
 */
inkspot.common.parse_int = (function inkspot$common$parse_int(var_args){
var G__22184 = arguments.length;
switch (G__22184) {
case 1:
return inkspot.common.parse_int.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return inkspot.common.parse_int.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(inkspot.common.parse_int.cljs$core$IFn$_invoke$arity$1 = (function (s){
return inkspot.common.parse_int.cljs$core$IFn$_invoke$arity$2(s,(10));
}));

(inkspot.common.parse_int.cljs$core$IFn$_invoke$arity$2 = (function (s,r){
if(cljs.core.empty_QMARK_(s)){
return null;
} else {
return parseInt(s,r);
}
}));

(inkspot.common.parse_int.cljs$lang$maxFixedArity = 2);

inkspot.common.parse_double = (function inkspot$common$parse_double(s){

if(cljs.core.empty_QMARK_(s)){
return null;
} else {
return parseFloat(s);
}
});

//# sourceMappingURL=inkspot.common.js.map
