goog.provide('wireframes.common');
wireframes.common.parse_int = (function wireframes$common$parse_int(var_args){
var G__22163 = arguments.length;
switch (G__22163) {
case 1:
return wireframes.common.parse_int.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return wireframes.common.parse_int.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(wireframes.common.parse_int.cljs$core$IFn$_invoke$arity$1 = (function (s){
return wireframes.common.parse_int.cljs$core$IFn$_invoke$arity$2(s,(10));
}));

(wireframes.common.parse_int.cljs$core$IFn$_invoke$arity$2 = (function (s,r){
if(cljs.core.empty_QMARK_(s)){
return null;
} else {
return parseInt(s,r);
}
}));

(wireframes.common.parse_int.cljs$lang$maxFixedArity = 2);

wireframes.common.parse_double = (function wireframes$common$parse_double(s){
if(cljs.core.empty_QMARK_(s)){
return null;
} else {
return parseFloat(s);
}
});
wireframes.common.decrement_offset = (function wireframes$common$decrement_offset(n){
if((n == null)){
return null;
} else {
return (n - (1));
}
});
wireframes.common.parse_string = (function wireframes$common$parse_string(regex,element_converter,s){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(element_converter,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,regex));
});
wireframes.common.parse_csv = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(wireframes.common.parse_string,/,/);
/**
 * Useful for when (count xs) is small, cons's the xs onto the front of the ys
 * without the overhead of lazy thunking. Disadvantage is that for large xs
 * stack overflow may occur.
 */
wireframes.common.simple_concat = (function wireframes$common$simple_concat(xs,ys){
if(cljs.core.seq(xs)){
return cljs.core.cons(cljs.core.first(xs),(function (){var G__22172 = cljs.core.next(xs);
var G__22173 = ys;
return (wireframes.common.simple_concat.cljs$core$IFn$_invoke$arity$2 ? wireframes.common.simple_concat.cljs$core$IFn$_invoke$arity$2(G__22172,G__22173) : wireframes.common.simple_concat.call(null,G__22172,G__22173));
})());
} else {
return ys;
}
});
wireframes.common.pad = (function wireframes$common$pad(s,n){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,s,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n," ")),(0),n);
});

//# sourceMappingURL=wireframes.common.js.map
