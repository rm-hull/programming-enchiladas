goog.provide('c2.maths');
c2.maths.Pi = Math.PI;
c2.maths.Tau = ((2) * c2.maths.Pi);
c2.maths.e = Math.E;
c2.maths.radians_per_degree = (c2.maths.Pi / (180));
c2.maths.rad = (function c2$maths$rad(x){
return (c2.maths.radians_per_degree * x);
});
c2.maths.deg = (function c2$maths$deg(x){
return (x / c2.maths.radians_per_degree);
});
c2.maths.sin = (function c2$maths$sin(x){
return Math.sin(x);
});
c2.maths.asin = (function c2$maths$asin(x){
return Math.asin(x);
});
c2.maths.cos = (function c2$maths$cos(x){
return Math.cos(x);
});
c2.maths.acos = (function c2$maths$acos(x){
return Math.acos(x);
});
c2.maths.tan = (function c2$maths$tan(x){
return Math.tan(x);
});
c2.maths.atan = (function c2$maths$atan(x){
return Math.atan(x);
});
c2.maths.expt = (function c2$maths$expt(var_args){
var G__21878 = arguments.length;
switch (G__21878) {
case 1:
return c2.maths.expt.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c2.maths.expt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(c2.maths.expt.cljs$core$IFn$_invoke$arity$1 = (function (x){
return Math.exp(x);
}));

(c2.maths.expt.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return Math.pow(x,y);
}));

(c2.maths.expt.cljs$lang$maxFixedArity = 2);

c2.maths.sq = (function c2$maths$sq(x){
return c2.maths.expt.cljs$core$IFn$_invoke$arity$2(x,(2));
});
c2.maths.sqrt = (function c2$maths$sqrt(x){
return Math.sqrt(x);
});
c2.maths.floor = (function c2$maths$floor(x){
return Math.floor(x);
});
c2.maths.ceil = (function c2$maths$ceil(x){
return Math.ceil(x);
});
c2.maths.abs = (function c2$maths$abs(x){
return Math.abs(x);
});
c2.maths.log = (function c2$maths$log(var_args){
var G__21880 = arguments.length;
switch (G__21880) {
case 1:
return c2.maths.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c2.maths.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(c2.maths.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return Math.log(x);
}));

(c2.maths.log.cljs$core$IFn$_invoke$arity$2 = (function (base,x){
return (Math.log(x) / Math.log(base));
}));

(c2.maths.log.cljs$lang$maxFixedArity = 2);

c2.maths.log10 = (function c2$maths$log10(x){
return (Math.log(x) / Math.LN10);
});
/**
 * Returns 2-vector of min and max elements in xs.
 */
c2.maths.extent = (function c2$maths$extent(xs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,xs),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,xs)], null);
});
/**
 * Arithemetic mean of collection
 */
c2.maths.mean = (function c2$maths$mean(xs){
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,xs) / cljs.core.count(xs));
});
/**
 * Median of a collection.
 */
c2.maths.median = (function c2$maths$median(xs){
var sorted = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(xs);
var n = cljs.core.count(xs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1))){
return cljs.core.first(sorted);
} else {
if(cljs.core.odd_QMARK_(n)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted,((n + (1)) / (2)));
} else {
var mid = (n / (2));
return c2.maths.mean(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted,c2.maths.floor(mid)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted,c2.maths.ceil(mid))], null));

}
}
});
/**
 * Inclusive range; same as core/range, but includes the end.
 */
c2.maths.irange = (function c2$maths$irange(var_args){
var G__21900 = arguments.length;
switch (G__21900) {
case 1:
return c2.maths.irange.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c2.maths.irange.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c2.maths.irange.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(c2.maths.irange.cljs$core$IFn$_invoke$arity$1 = (function (start){
return cljs.core.range.cljs$core$IFn$_invoke$arity$1(start);
}));

(c2.maths.irange.cljs$core$IFn$_invoke$arity$2 = (function (start,end){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,end),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [end], null));
}));

(c2.maths.irange.cljs$core$IFn$_invoke$arity$3 = (function (start,end,step){
var r = cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,end,step);
if((cljs.core.mod(cljs.core.first(r),step) === cljs.core.mod(end,step))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [end], null));
} else {
return r;
}
}));

(c2.maths.irange.cljs$lang$maxFixedArity = 3);

/**
 * Checks if bottom <= x <= top.
 */
c2.maths.within_QMARK_ = (function c2$maths$within_QMARK_(x,p__21911){
var vec__21918 = p__21911;
var bottom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21918,(0),null);
var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21918,(1),null);
return (((bottom <= x)) && ((x <= top)));
});
c2.maths.add = (function c2$maths$add(var_args){
var args__5903__auto__ = [];
var len__5897__auto___22200 = arguments.length;
var i__5898__auto___22201 = (0);
while(true){
if((i__5898__auto___22201 < len__5897__auto___22200)){
args__5903__auto__.push((arguments[i__5898__auto___22201]));

var G__22202 = (i__5898__auto___22201 + (1));
i__5898__auto___22201 = G__22202;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return c2.maths.add.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(c2.maths.add.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (A,B){
if(((typeof A === 'number') && (typeof B === 'number'))){
return (A + B);
} else {
if(((cljs.core.coll_QMARK_(A)) && (cljs.core.coll_QMARK_(B)))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,A,B);
} else {
if(((typeof A === 'number') && (cljs.core.coll_QMARK_(B)))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,cljs.core.replicate(cljs.core.count(B),A),B);
} else {
if(((cljs.core.coll_QMARK_(A)) && (typeof B === 'number'))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,A,cljs.core.replicate(cljs.core.count(A),B));
} else {
return null;
}
}
}
}
}),args);
}));

(c2.maths.add.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c2.maths.add.cljs$lang$applyTo = (function (seq21932){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21932));
}));

c2.maths.sub = (function c2$maths$sub(var_args){
var args__5903__auto__ = [];
var len__5897__auto___22214 = arguments.length;
var i__5898__auto___22216 = (0);
while(true){
if((i__5898__auto___22216 < len__5897__auto___22214)){
args__5903__auto__.push((arguments[i__5898__auto___22216]));

var G__22218 = (i__5898__auto___22216 + (1));
i__5898__auto___22216 = G__22218;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return c2.maths.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(c2.maths.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
if(((typeof (0) === 'number') && (typeof cljs.core.first(args) === 'number'))){
return ((0) - cljs.core.first(args));
} else {
if(((cljs.core.coll_QMARK_((0))) && (cljs.core.coll_QMARK_(cljs.core.first(args))))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,(0),cljs.core.first(args));
} else {
if(((typeof (0) === 'number') && (cljs.core.coll_QMARK_(cljs.core.first(args))))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,cljs.core.replicate(cljs.core.count(cljs.core.first(args)),(0)),cljs.core.first(args));
} else {
if(((cljs.core.coll_QMARK_((0))) && (typeof cljs.core.first(args) === 'number'))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,(0),cljs.core.replicate(cljs.core.count((0)),cljs.core.first(args)));
} else {
return null;
}
}
}
}
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (A,B){
if(((typeof A === 'number') && (typeof B === 'number'))){
return (A - B);
} else {
if(((cljs.core.coll_QMARK_(A)) && (cljs.core.coll_QMARK_(B)))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,A,B);
} else {
if(((typeof A === 'number') && (cljs.core.coll_QMARK_(B)))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,cljs.core.replicate(cljs.core.count(B),A),B);
} else {
if(((cljs.core.coll_QMARK_(A)) && (typeof B === 'number'))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,A,cljs.core.replicate(cljs.core.count(A),B));
} else {
return null;
}
}
}
}
}),args);
}
}));

(c2.maths.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c2.maths.sub.cljs$lang$applyTo = (function (seq21997){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21997));
}));

c2.maths.mul = (function c2$maths$mul(var_args){
var args__5903__auto__ = [];
var len__5897__auto___22242 = arguments.length;
var i__5898__auto___22243 = (0);
while(true){
if((i__5898__auto___22243 < len__5897__auto___22242)){
args__5903__auto__.push((arguments[i__5898__auto___22243]));

var G__22244 = (i__5898__auto___22243 + (1));
i__5898__auto___22243 = G__22244;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return c2.maths.mul.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(c2.maths.mul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (A,B){
if(((typeof A === 'number') && (typeof B === 'number'))){
return (A * B);
} else {
if(((cljs.core.coll_QMARK_(A)) && (cljs.core.coll_QMARK_(B)))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,A,B);
} else {
if(((typeof A === 'number') && (cljs.core.coll_QMARK_(B)))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,cljs.core.replicate(cljs.core.count(B),A),B);
} else {
if(((cljs.core.coll_QMARK_(A)) && (typeof B === 'number'))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,A,cljs.core.replicate(cljs.core.count(A),B));
} else {
return null;
}
}
}
}
}),args);
}));

(c2.maths.mul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c2.maths.mul.cljs$lang$applyTo = (function (seq22038){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22038));
}));

c2.maths.div = (function c2$maths$div(var_args){
var args__5903__auto__ = [];
var len__5897__auto___22250 = arguments.length;
var i__5898__auto___22251 = (0);
while(true){
if((i__5898__auto___22251 < len__5897__auto___22250)){
args__5903__auto__.push((arguments[i__5898__auto___22251]));

var G__22254 = (i__5898__auto___22251 + (1));
i__5898__auto___22251 = G__22254;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return c2.maths.div.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(c2.maths.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
if(((typeof (1) === 'number') && (typeof cljs.core.first(args) === 'number'))){
return ((1) / cljs.core.first(args));
} else {
if(((cljs.core.coll_QMARK_((1))) && (cljs.core.coll_QMARK_(cljs.core.first(args))))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,(1),cljs.core.first(args));
} else {
if(((typeof (1) === 'number') && (cljs.core.coll_QMARK_(cljs.core.first(args))))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,cljs.core.replicate(cljs.core.count(cljs.core.first(args)),(1)),cljs.core.first(args));
} else {
if(((cljs.core.coll_QMARK_((1))) && (typeof cljs.core.first(args) === 'number'))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,(1),cljs.core.replicate(cljs.core.count((1)),cljs.core.first(args)));
} else {
return null;
}
}
}
}
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (A,B){
if(((typeof A === 'number') && (typeof B === 'number'))){
return (A / B);
} else {
if(((cljs.core.coll_QMARK_(A)) && (cljs.core.coll_QMARK_(B)))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,A,B);
} else {
if(((typeof A === 'number') && (cljs.core.coll_QMARK_(B)))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,cljs.core.replicate(cljs.core.count(B),A),B);
} else {
if(((cljs.core.coll_QMARK_(A)) && (typeof B === 'number'))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,A,cljs.core.replicate(cljs.core.count(A),B));
} else {
return null;
}
}
}
}
}),args);
}
}));

(c2.maths.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c2.maths.div.cljs$lang$applyTo = (function (seq22079){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22079));
}));

/**
 * Returns the quantiles of a dataset.
 * 
 * Kwargs:
 * 
 *   > *:probs*: ntiles of the data to return, defaults to `[0 0.25 0.5 0.75 1]`
 * 
 *   Algorithm is the same as R's quantile type=7.
 *   Transcribed from Jason Davies; https://github.com/jasondavies/science.js/blob/master/src/stats/quantiles.js
 */
c2.maths.quantile = (function c2$maths$quantile(var_args){
var args__5903__auto__ = [];
var len__5897__auto___22283 = arguments.length;
var i__5898__auto___22284 = (0);
while(true){
if((i__5898__auto___22284 < len__5897__auto___22283)){
args__5903__auto__.push((arguments[i__5898__auto___22284]));

var G__22287 = (i__5898__auto___22284 + (1));
i__5898__auto___22284 = G__22287;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return c2.maths.quantile.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(c2.maths.quantile.cljs$core$IFn$_invoke$arity$variadic = (function (data,p__22146){
var map__22148 = p__22146;
var map__22148__$1 = cljs.core.__destructure_map(map__22148);
var probs = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22148__$1,new cljs.core.Keyword(null,"probs","probs",-1201894224),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.25,0.5,0.75,(1)], null));
var xs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(data));
var n_1 = (cljs.core.count(xs) - (1));
var iter__5649__auto__ = (function c2$maths$iter__22157(s__22158){
return (new cljs.core.LazySeq(null,(function (){
var s__22158__$1 = s__22158;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22158__$1);
if(temp__5825__auto__){
var s__22158__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22158__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__22158__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__22165 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__22164 = (0);
while(true){
if((i__22164 < size__5648__auto__)){
var q = cljs.core._nth(c__5647__auto__,i__22164);
cljs.core.chunk_append(b__22165,(function (){var index = ((q * n_1) + (1));
var lo = (c2.maths.floor(index) | 0);
var h = (index - lo);
var a = (function (){var G__22166 = (lo - (1));
return (xs.cljs$core$IFn$_invoke$arity$1 ? xs.cljs$core$IFn$_invoke$arity$1(G__22166) : xs.call(null,G__22166));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(h,(0))){
return a;
} else {
return (a + (h * ((xs.cljs$core$IFn$_invoke$arity$1 ? xs.cljs$core$IFn$_invoke$arity$1(lo) : xs.call(null,lo)) - a)));
}
})());

var G__22314 = (i__22164 + (1));
i__22164 = G__22314;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22165),c2$maths$iter__22157(cljs.core.chunk_rest(s__22158__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22165),null);
}
} else {
var q = cljs.core.first(s__22158__$2);
return cljs.core.cons((function (){var index = ((q * n_1) + (1));
var lo = (c2.maths.floor(index) | 0);
var h = (index - lo);
var a = (function (){var G__22171 = (lo - (1));
return (xs.cljs$core$IFn$_invoke$arity$1 ? xs.cljs$core$IFn$_invoke$arity$1(G__22171) : xs.call(null,G__22171));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(h,(0))){
return a;
} else {
return (a + (h * ((xs.cljs$core$IFn$_invoke$arity$1 ? xs.cljs$core$IFn$_invoke$arity$1(lo) : xs.call(null,lo)) - a)));
}
})(),c2$maths$iter__22157(cljs.core.rest(s__22158__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(probs);
}));

(c2.maths.quantile.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c2.maths.quantile.cljs$lang$applyTo = (function (seq22136){
var G__22137 = cljs.core.first(seq22136);
var seq22136__$1 = cljs.core.next(seq22136);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22137,seq22136__$1);
}));


//# sourceMappingURL=c2.maths.js.map
