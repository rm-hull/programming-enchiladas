goog.provide('c2.core');
c2.core.node_data = singult.core.node_data;
c2.core.unify = (function c2$core$unify(var_args){
var args__5903__auto__ = [];
var len__5897__auto___22457 = arguments.length;
var i__5898__auto___22458 = (0);
while(true){
if((i__5898__auto___22458 < len__5897__auto___22457)){
args__5903__auto__.push((arguments[i__5898__auto___22458]));

var G__22459 = (i__5898__auto___22458 + (1));
i__5898__auto___22458 = G__22459;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return c2.core.unify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(c2.core.unify.cljs$core$IFn$_invoke$arity$variadic = (function (data,mapping,args){
if(cljs.core.seq(data)){
var G__22435_22468 = cljs.core.first(data);
(mapping.cljs$core$IFn$_invoke$arity$1 ? mapping.cljs$core$IFn$_invoke$arity$1(G__22435_22468) : mapping.call(null,G__22435_22468));
} else {
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(singult.core.unify,data,mapping,args);
}));

(c2.core.unify.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(c2.core.unify.cljs$lang$applyTo = (function (seq22426){
var G__22427 = cljs.core.first(seq22426);
var seq22426__$1 = cljs.core.next(seq22426);
var G__22428 = cljs.core.first(seq22426__$1);
var seq22426__$2 = cljs.core.next(seq22426__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22427,G__22428,seq22426__$2);
}));


//# sourceMappingURL=c2.core.js.map
