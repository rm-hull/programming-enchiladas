goog.provide('jayq.util');
jayq.util.wait = (function jayq$util$wait(ms,func){
return setTimeout(func, ms);
});
jayq.util.log = (function jayq$util$log(var_args){
var args__5903__auto__ = [];
var len__5897__auto___28901 = arguments.length;
var i__5898__auto___28902 = (0);
while(true){
if((i__5898__auto___28902 < len__5897__auto___28901)){
args__5903__auto__.push((arguments[i__5898__auto___28902]));

var G__28904 = (i__5898__auto___28902 + (1));
i__5898__auto___28902 = G__28904;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return jayq.util.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(jayq.util.log.cljs$core$IFn$_invoke$arity$variadic = (function (v,text){
var vs = ((typeof v === 'string')?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,v,text):v);
console.log(vs);

return v;
}));

(jayq.util.log.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(jayq.util.log.cljs$lang$applyTo = (function (seq28887){
var G__28888 = cljs.core.first(seq28887);
var seq28887__$1 = cljs.core.next(seq28887);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28888,seq28887__$1);
}));


//# sourceMappingURL=jayq.util.js.map
