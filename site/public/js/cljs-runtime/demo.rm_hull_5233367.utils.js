goog.provide('demo.rm_hull_5233367.utils');
demo.rm_hull_5233367.utils.integers = cljs.core.iterate(cljs.core.inc,(1));
demo.rm_hull_5233367.utils.digits = (function demo$rm_hull_5233367$utils$digits(var_args){
var G__36486 = arguments.length;
switch (G__36486) {
case 1:
return demo.rm_hull_5233367.utils.digits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return demo.rm_hull_5233367.utils.digits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(demo.rm_hull_5233367.utils.digits.cljs$core$IFn$_invoke$arity$1 = (function (n){
return demo.rm_hull_5233367.utils.digits.cljs$core$IFn$_invoke$arity$2(n,(10));
}));

(demo.rm_hull_5233367.utils.digits.cljs$core$IFn$_invoke$arity$2 = (function (n,radix){
var n__$1 = n;
var res = null;
while(true){
if((n__$1 === (0))){
return res;
} else {
var G__36515 = cljs.core.quot(n__$1,radix);
var G__36516 = cljs.core.cons(cljs.core.rem(n__$1,radix),res);
n__$1 = G__36515;
res = G__36516;
continue;
}
break;
}
}));

(demo.rm_hull_5233367.utils.digits.cljs$lang$maxFixedArity = 2);

demo.rm_hull_5233367.utils.coords = (function demo$rm_hull_5233367$utils$coords(var_args){
var args__5903__auto__ = [];
var len__5897__auto___36517 = arguments.length;
var i__5898__auto___36518 = (0);
while(true){
if((i__5898__auto___36518 < len__5897__auto___36517)){
args__5903__auto__.push((arguments[i__5898__auto___36518]));

var G__36519 = (i__5898__auto___36518 + (1));
i__5898__auto___36518 = G__36519;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return demo.rm_hull_5233367.utils.coords.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(demo.rm_hull_5233367.utils.coords.cljs$core$IFn$_invoke$arity$variadic = (function (w,h,p__36493){
var map__36494 = p__36493;
var map__36494__$1 = cljs.core.__destructure_map(map__36494);
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36494__$1,new cljs.core.Keyword(null,"step","step",1288888124),(1));
var iter__5649__auto__ = (function demo$rm_hull_5233367$utils$iter__36495(s__36496){
return (new cljs.core.LazySeq(null,(function (){
var s__36496__$1 = s__36496;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36496__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var y = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__36496__$1,y,xs__6385__auto__,temp__5825__auto__,map__36494,map__36494__$1,step){
return (function demo$rm_hull_5233367$utils$iter__36495_$_iter__36497(s__36498){
return (new cljs.core.LazySeq(null,((function (s__36496__$1,y,xs__6385__auto__,temp__5825__auto__,map__36494,map__36494__$1,step){
return (function (){
var s__36498__$1 = s__36498;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__36498__$1);
if(temp__5825__auto____$1){
var s__36498__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36498__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__36498__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__36500 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__36499 = (0);
while(true){
if((i__36499 < size__5648__auto__)){
var x = cljs.core._nth(c__5647__auto__,i__36499);
cljs.core.chunk_append(b__36500,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__36523 = (i__36499 + (1));
i__36499 = G__36523;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36500),demo$rm_hull_5233367$utils$iter__36495_$_iter__36497(cljs.core.chunk_rest(s__36498__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36500),null);
}
} else {
var x = cljs.core.first(s__36498__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),demo$rm_hull_5233367$utils$iter__36495_$_iter__36497(cljs.core.rest(s__36498__$2)));
}
} else {
return null;
}
break;
}
});})(s__36496__$1,y,xs__6385__auto__,temp__5825__auto__,map__36494,map__36494__$1,step))
,null,null));
});})(s__36496__$1,y,xs__6385__auto__,temp__5825__auto__,map__36494,map__36494__$1,step))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),w,step)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,demo$rm_hull_5233367$utils$iter__36495(cljs.core.rest(s__36496__$1)));
} else {
var G__36524 = cljs.core.rest(s__36496__$1);
s__36496__$1 = G__36524;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),h,step));
}));

(demo.rm_hull_5233367.utils.coords.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(demo.rm_hull_5233367.utils.coords.cljs$lang$applyTo = (function (seq36489){
var G__36490 = cljs.core.first(seq36489);
var seq36489__$1 = cljs.core.next(seq36489);
var G__36491 = cljs.core.first(seq36489__$1);
var seq36489__$2 = cljs.core.next(seq36489__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36490,G__36491,seq36489__$2);
}));


//# sourceMappingURL=demo.rm_hull_5233367.utils.js.map
