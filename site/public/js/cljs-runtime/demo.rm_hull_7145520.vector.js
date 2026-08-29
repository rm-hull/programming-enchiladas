goog.provide('demo.rm_hull_7145520.vector');
demo.rm_hull_7145520.vector.add = (function demo$rm_hull_7145520$vector$add(p__35825,p__35826){
var vec__35828 = p__35825;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35828,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35828,(1),null);
var vec__35831 = p__35826;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35831,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35831,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + x2),(y1 + y2)], null);
});
demo.rm_hull_7145520.vector.sub = (function demo$rm_hull_7145520$vector$sub(p__35835,p__35836){
var vec__35837 = p__35835;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35837,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35837,(1),null);
var vec__35840 = p__35836;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35840,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35840,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 - x2),(y1 - y2)], null);
});
demo.rm_hull_7145520.vector.mult = (function demo$rm_hull_7145520$vector$mult(p__35843,n){
var vec__35844 = p__35843;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35844,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35844,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x * n),(y * n)], null);
});
demo.rm_hull_7145520.vector.div = (function demo$rm_hull_7145520$vector$div(p__35856,n){
var vec__35859 = p__35856;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35859,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35859,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x / n),(y / n)], null);
});
demo.rm_hull_7145520.vector.dot = (function demo$rm_hull_7145520$vector$dot(p__35886,p__35887){
var vec__35897 = p__35886;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35897,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35897,(1),null);
var vec__35901 = p__35887;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35901,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35901,(1),null);
return ((x1 * x2) + (y1 * y2));
});
demo.rm_hull_7145520.vector.mag_sq = (function demo$rm_hull_7145520$vector$mag_sq(xy){
return demo.rm_hull_7145520.vector.dot(xy,xy);
});
demo.rm_hull_7145520.vector.mag = (function demo$rm_hull_7145520$vector$mag(xy){
return Math.sqrt(demo.rm_hull_7145520.vector.mag_sq(xy));
});
demo.rm_hull_7145520.vector.normalize = (function demo$rm_hull_7145520$vector$normalize(xy){
var m = demo.rm_hull_7145520.vector.mag(xy);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(m,(0))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(m,(1))))){
return demo.rm_hull_7145520.vector.div(xy,m);
} else {
return xy;
}
});
demo.rm_hull_7145520.vector.dist = (function demo$rm_hull_7145520$vector$dist(p__35945,p__35946){
var vec__35947 = p__35945;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35947,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35947,(1),null);
var vec__35950 = p__35946;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35950,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35950,(1),null);
var dx = (x1 - x2);
var dy = (y1 - y2);
return Math.sqrt(((dx * dx) + (dy * dy)));
});
demo.rm_hull_7145520.vector.limit = (function demo$rm_hull_7145520$vector$limit(xy,max){
if((demo.rm_hull_7145520.vector.mag_sq(xy) > (max * max))){
return demo.rm_hull_7145520.vector.mult(demo.rm_hull_7145520.vector.normalize(xy),max);
} else {
return xy;
}
});
demo.rm_hull_7145520.vector.rotate = (function demo$rm_hull_7145520$vector$rotate(p__35966,theta){
var vec__35967 = p__35966;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35967,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35967,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x * Math.cos(theta)) - (y * Math.sin(theta))),((x * Math.sin(theta)) + (y * Math.cos(theta)))], null);
});
demo.rm_hull_7145520.vector.heading = (function demo$rm_hull_7145520$vector$heading(p__35974){
var vec__35975 = p__35974;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35975,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35975,(1),null);
return (- Math.atan2((- y),x));
});
demo.rm_hull_7145520.vector.rand_vector = (function demo$rm_hull_7145520$vector$rand_vector(n){
var theta = (((2) * Math.PI) * cljs.core.rand.cljs$core$IFn$_invoke$arity$0());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(n * Math.sin(theta)),(n * Math.cos(theta))], null);
});
demo.rm_hull_7145520.vector.make_vector = (function demo$rm_hull_7145520$vector$make_vector(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
demo.rm_hull_7145520.vector.add_all = (function demo$rm_hull_7145520$vector$add_all(vectors){
var vs = vectors;
var accum_x = (0);
var accum_y = (0);
while(true){
if(cljs.core.empty_QMARK_(vs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [accum_x,accum_y], null);
} else {
var vec__35994 = cljs.core.first(vs);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35994,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35994,(1),null);
var G__36021 = cljs.core.rest(vs);
var G__36022 = (accum_x + x);
var G__36023 = (accum_y + y);
vs = G__36021;
accum_x = G__36022;
accum_y = G__36023;
continue;
}
break;
}
});

//# sourceMappingURL=demo.rm_hull_7145520.vector.js.map
