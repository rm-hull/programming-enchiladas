goog.provide('demo.rm_hull_5694738.core');
demo.rm_hull_5694738.core.follow = (function demo$rm_hull_5694738$core$follow(lookup_table){
return (function (n){
var k = n;
var edges = cljs.core.PersistentArrayMap.EMPTY;
while(true){
var next_k = (lookup_table.cljs$core$IFn$_invoke$arity$1 ? lookup_table.cljs$core$IFn$_invoke$arity$1(k) : lookup_table.call(null,k));
if(cljs.core.truth_((edges.cljs$core$IFn$_invoke$arity$1 ? edges.cljs$core$IFn$_invoke$arity$1(next_k) : edges.call(null,next_k)))){
return edges;
} else {
var G__35667 = next_k;
var G__35668 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(edges,k,next_k);
k = G__35667;
edges = G__35668;
continue;
}
break;
}
});
});
demo.rm_hull_5694738.core.digraph = (function demo$rm_hull_5694738$core$digraph(n,f){
var lookup_table = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__35607_SHARP_){
return cljs.core.mod((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__35607_SHARP_) : f.call(null,p1__35607_SHARP_)),n);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(demo.rm_hull_5694738.core.follow(lookup_table),cljs.core.range.cljs$core$IFn$_invoke$arity$1(n)));
});
demo.rm_hull_5694738.core.fixed_point_QMARK_ = (function demo$rm_hull_5694738$core$fixed_point_QMARK_(p__35628){
var vec__35651 = p__35628;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35651,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35651,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b);
});

//# sourceMappingURL=demo.rm_hull_5694738.core.js.map
