goog.provide('dommy.utils');
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
dommy.utils.dissoc_in = (function dommy$utils$dissoc_in(m,p__27066){
var vec__27068 = p__27066;
var seq__27069 = cljs.core.seq(vec__27068);
var first__27070 = cljs.core.first(seq__27069);
var seq__27069__$1 = cljs.core.next(seq__27069);
var k = first__27070;
var ks = seq__27069__$1;
if(cljs.core.truth_(m)){
var temp__5823__auto__ = (function (){var and__5160__auto__ = ks;
if(and__5160__auto__){
var G__27071 = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k));
var G__27072 = ks;
return (dommy.utils.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? dommy.utils.dissoc_in.cljs$core$IFn$_invoke$arity$2(G__27071,G__27072) : dommy.utils.dissoc_in.call(null,G__27071,G__27072));
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var res = temp__5823__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,res);
} else {
var res = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
dommy.utils.__GT_Array = (function dommy$utils$__GT_Array(array_like){
return Array.prototype.slice.call(array_like);
});
/**
 * Coerces strings and keywords to strings, while preserving namespace of
 * namespaced keywords
 */
dommy.utils.as_str = (function dommy$utils$as_str(s){
if((s instanceof cljs.core.Keyword)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__27078 = cljs.core.namespace(s);
if((G__27078 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27078)+"/");
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(s)));
} else {
return s;
}
});

//# sourceMappingURL=dommy.utils.js.map
