goog.provide('wireframes.transform');
wireframes.transform.degrees__GT_radians = (function wireframes$transform$degrees__GT_radians(d){
return ((d * Math.PI) / 180.0);
});
/**
 * Constuctor for making points
 */
wireframes.transform.point = (function wireframes$transform$point(var_args){
var G__30382 = arguments.length;
switch (G__30382) {
case 1:
return wireframes.transform.point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return wireframes.transform.point.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(wireframes.transform.point.cljs$core$IFn$_invoke$arity$1 = (function (p__30392){
var vec__30393 = p__30392;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30393,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30393,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30393,(2),null);
return wireframes.transform.point.cljs$core$IFn$_invoke$arity$3(x,y,z);
}));

(wireframes.transform.point.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.double$,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z,(1)], null));
}));

(wireframes.transform.point.cljs$lang$maxFixedArity = 3);

/**
 * Convert a point back into a clojure vector
 */
wireframes.transform.vec = (function wireframes$transform$vec(point){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(point,(0),(3));
});
/**
 * Matrix builder
 */
wireframes.transform.matrix = (function wireframes$transform$matrix(var_args){
var args__5903__auto__ = [];
var len__5897__auto___30603 = arguments.length;
var i__5898__auto___30604 = (0);
while(true){
if((i__5898__auto___30604 < len__5897__auto___30603)){
args__5903__auto__.push((arguments[i__5898__auto___30604]));

var G__30605 = (i__5898__auto___30604 + (1));
i__5898__auto___30604 = G__30605;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return wireframes.transform.matrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(wireframes.transform.matrix.cljs$core$IFn$_invoke$arity$variadic = (function (rows){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30398_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.double$,p1__30398_SHARP_);
}),rows);
}));

(wireframes.transform.matrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(wireframes.transform.matrix.cljs$lang$applyTo = (function (seq30399){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30399));
}));

/**
 * A quaternion of sorts
 */
wireframes.transform.translate = (function wireframes$transform$translate(x,y,z){
return wireframes.transform.matrix.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),x], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0),y], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),z], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null)], 0));
});
wireframes.transform.scale = (function wireframes$transform$scale(var_args){
var G__30421 = arguments.length;
switch (G__30421) {
case 1:
return wireframes.transform.scale.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return wireframes.transform.scale.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(wireframes.transform.scale.cljs$core$IFn$_invoke$arity$1 = (function (s){
return wireframes.transform.scale.cljs$core$IFn$_invoke$arity$3(s,s,s);
}));

(wireframes.transform.scale.cljs$core$IFn$_invoke$arity$3 = (function (sx,sy,sz){
return wireframes.transform.matrix.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,(0),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),sy,(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),sz,(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null)], 0));
}));

(wireframes.transform.scale.cljs$lang$maxFixedArity = 3);

/**
 * Rotate around the given axis by theta radians
 */
wireframes.transform.rotate = (function wireframes$transform$rotate(axis,theta){
var s = Math.sin(theta);
var c = Math.cos(theta);
var pred__30427 = cljs.core._EQ_;
var expr__30428 = axis;
if(cljs.core.truth_((pred__30427.cljs$core$IFn$_invoke$arity$2 ? pred__30427.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__30428) : pred__30427.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__30428)))){
return wireframes.transform.matrix.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),c,(- s),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),s,c,(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null)], 0));
} else {
if(cljs.core.truth_((pred__30427.cljs$core$IFn$_invoke$arity$2 ? pred__30427.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__30428) : pred__30427.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__30428)))){
return wireframes.transform.matrix.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(0),s,(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- s),(0),c,(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null)], 0));
} else {
if(cljs.core.truth_((pred__30427.cljs$core$IFn$_invoke$arity$2 ? pred__30427.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"z","z",-789527183),expr__30428) : pred__30427.call(null,new cljs.core.Keyword(null,"z","z",-789527183),expr__30428)))){
return wireframes.transform.matrix.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(- s),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,c,(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null)], 0));
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__30428))));
}
}
}
});
wireframes.transform.identity = wireframes.transform.translate((0),(0),(0));
wireframes.transform.dot_product = (function wireframes$transform$dot_product(as,bs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,as,bs));
});
wireframes.transform.transform_point = (function wireframes$transform$transform_point(matrix){
return (function (p__30434){
var vec__30435 = p__30434;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30435,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30435,(1),null);
var az = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30435,(2),null);
var aw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30435,(3),null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__30441){
var vec__30443 = p__30441;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30443,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30443,(1),null);
var bz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30443,(2),null);
var bw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30443,(3),null);
return ((((ax * bx) + (ay * by)) + (az * bz)) + (aw * bw));
}),matrix);
});
});
wireframes.transform.transpose = (function wireframes$transform$transpose(matrix){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,matrix);
});
wireframes.transform.combine = (function wireframes$transform$combine(var_args){
var G__30483 = arguments.length;
switch (G__30483) {
case 2:
return wireframes.transform.combine.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___30617 = arguments.length;
var i__5898__auto___30619 = (0);
while(true){
if((i__5898__auto___30619 < len__5897__auto___30617)){
args_arr__5922__auto__.push((arguments[i__5898__auto___30619]));

var G__30621 = (i__5898__auto___30619 + (1));
i__5898__auto___30619 = G__30621;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return wireframes.transform.combine.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(wireframes.transform.combine.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var transposed = wireframes.transform.transpose(a);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(wireframes.transform.transform_point(transposed),b);
}));

(wireframes.transform.combine.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
var initial = wireframes.transform.combine.cljs$core$IFn$_invoke$arity$2(a,b);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(wireframes.transform.combine,initial,more);
}));

/** @this {Function} */
(wireframes.transform.combine.cljs$lang$applyTo = (function (seq30480){
var G__30481 = cljs.core.first(seq30480);
var seq30480__$1 = cljs.core.next(seq30480);
var G__30482 = cljs.core.first(seq30480__$1);
var seq30480__$2 = cljs.core.next(seq30480__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30481,G__30482,seq30480__$2);
}));

(wireframes.transform.combine.cljs$lang$maxFixedArity = (2));

/**
 * Constructs a perspective function for a given focal-length, which
 * can be used to project a 3D point into 2D cartesian co-ordinates.
 */
wireframes.transform.perspective = (function wireframes$transform$perspective(focal_length){
var focal_length__$1 = focal_length;
return (function (p__30498){
var vec__30499 = p__30498;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30499,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30499,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30499,(2),null);
var p = (focal_length__$1 / (focal_length__$1 - z));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p * x),(p * y)], null);
});
});
/**
 * Calculate the normal of a triangle
 */
wireframes.transform.normal = (function wireframes$transform$normal(p__30509,p__30510,p__30511){
var vec__30513 = p__30509;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30513,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30513,(1),null);
var az = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30513,(2),null);
var vec__30516 = p__30510;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30516,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30516,(1),null);
var bz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30516,(2),null);
var vec__30519 = p__30511;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30519,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30519,(1),null);
var cz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30519,(2),null);
var ux = (bx - ax);
var uy = (by - ay);
var uz = (bz - az);
var vx = (cx - ax);
var vy = (cy - ay);
var vz = (cz - az);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((uy * vz) - (uz * vy)),((uz * vx) - (ux * vz)),((ux * vy) - (uy * vx))], null);
});
/**
 * Calculate the centroid of a triangle
 */
wireframes.transform.centroid = (function wireframes$transform$centroid(p__30526,p__30527,p__30528){
var vec__30529 = p__30526;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30529,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30529,(1),null);
var az = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30529,(2),null);
var vec__30532 = p__30527;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30532,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30532,(1),null);
var bz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30532,(2),null);
var vec__30535 = p__30528;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30535,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30535,(1),null);
var cz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30535,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((ax + bx) + cx) / (3)),(((ay + by) + cy) / (3)),(((az + bz) + cz) / (3))], null);
});
/**
 * Calculate the midpoint of a line
 */
wireframes.transform.mid_point = (function wireframes$transform$mid_point(p__30543,p__30544){
var vec__30545 = p__30543;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30545,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30545,(1),null);
var az = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30545,(2),null);
var vec__30548 = p__30544;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30548,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30548,(1),null);
var bz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30548,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((ax + bx) / (2)),((ay + by) / (2)),((az + bz) / (2))], null);
});
wireframes.transform.sqr = (function wireframes$transform$sqr(x){
return (x * x);
});
/**
 * Distance between two points
 */
wireframes.transform.distance = (function wireframes$transform$distance(a,b){
return Math.sqrt(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(wireframes.transform.sqr,cljs.core._),a,b)));
});
/**
 * Attempts to break down the polygon (defined by the points) into an array
 * of triangles which represent the same surface area. NOTE: If the polygon
 * is already triangular (or less) in nature, then that polygon is returned
 * wrapped in an array.
 */
wireframes.transform.triangulate = (function wireframes$transform$triangulate(polygon){
if((cljs.core.count(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(polygon)) <= (3))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [polygon], null);
} else {
var acc = cljs.core.PersistentVector.EMPTY;
var G__30557 = new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(polygon);
var vec__30558 = G__30557;
var seq__30559 = cljs.core.seq(vec__30558);
var first__30560 = cljs.core.first(seq__30559);
var seq__30559__$1 = cljs.core.next(seq__30559);
var a = first__30560;
var first__30560__$1 = cljs.core.first(seq__30559__$1);
var seq__30559__$2 = cljs.core.next(seq__30559__$1);
var b = first__30560__$1;
var first__30560__$2 = cljs.core.first(seq__30559__$2);
var seq__30559__$3 = cljs.core.next(seq__30559__$2);
var c = first__30560__$2;
var more = seq__30559__$3;
var acc__$1 = acc;
var G__30557__$1 = G__30557;
while(true){
var acc__$2 = acc__$1;
var vec__30564 = G__30557__$1;
var seq__30565 = cljs.core.seq(vec__30564);
var first__30566 = cljs.core.first(seq__30565);
var seq__30565__$1 = cljs.core.next(seq__30565);
var a__$1 = first__30566;
var first__30566__$1 = cljs.core.first(seq__30565__$1);
var seq__30565__$2 = cljs.core.next(seq__30565__$1);
var b__$1 = first__30566__$1;
var first__30566__$2 = cljs.core.first(seq__30565__$2);
var seq__30565__$3 = cljs.core.next(seq__30565__$2);
var c__$1 = first__30566__$2;
var more__$1 = seq__30565__$3;
if(cljs.core.empty_QMARK_(more__$1)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(polygon,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1,c__$1], null)));
} else {
var G__30700 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(polygon,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1,c__$1], null)));
var G__30701 = cljs.core.cons(a__$1,cljs.core.cons(c__$1,more__$1));
acc__$1 = G__30700;
G__30557__$1 = G__30701;
continue;
}
break;
}
}
});
/**
 * Alter a sequence of polygons such that the output contains polygons
 * with no more than 3 sides: hence polygons with 4 or more sides are
 * split into triangles.
 */
wireframes.transform.reduce_polygons = (function wireframes$transform$reduce_polygons(polygons){
var acc = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var polygons__$1 = polygons;
while(true){
if(cljs.core.empty_QMARK_(polygons__$1)){
return cljs.core.persistent_BANG_(acc);
} else {
var vec__30571 = wireframes.transform.triangulate(cljs.core.first(polygons__$1));
var seq__30572 = cljs.core.seq(vec__30571);
var first__30573 = cljs.core.first(seq__30572);
var seq__30572__$1 = cljs.core.next(seq__30572);
var p = first__30573;
var ps = seq__30572__$1;
var G__30718 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,p);
var G__30719 = wireframes.common.simple_concat(ps,cljs.core.next(polygons__$1));
acc = G__30718;
polygons__$1 = G__30719;
continue;
}
break;
}
});
wireframes.transform.multiply = (function wireframes$transform$multiply(p__30576,n){
var vec__30577 = p__30576;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30577,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30577,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30577,(2),null);
return wireframes.transform.point.cljs$core$IFn$_invoke$arity$3((x * n),(y * n),(z * n));
});
wireframes.transform.divide = (function wireframes$transform$divide(p__30580,n){
var vec__30581 = p__30580;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30581,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30581,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30581,(2),null);
return wireframes.transform.point.cljs$core$IFn$_invoke$arity$3((x / n),(y / n),(z / n));
});
wireframes.transform.mag_sq = (function wireframes$transform$mag_sq(xyz){
return wireframes.transform.dot_product(xyz,xyz);
});
wireframes.transform.magnitude = (function wireframes$transform$magnitude(p__30585){
var vec__30588 = p__30585;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30588,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30588,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30588,(2),null);
return Math.sqrt(wireframes.transform.mag_sq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null)));
});
wireframes.transform.normalize = (function wireframes$transform$normalize(var_args){
var G__30592 = arguments.length;
switch (G__30592) {
case 1:
return wireframes.transform.normalize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return wireframes.transform.normalize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(wireframes.transform.normalize.cljs$core$IFn$_invoke$arity$1 = (function (xyz){
return wireframes.transform.normalize.cljs$core$IFn$_invoke$arity$2(xyz,1.0);
}));

(wireframes.transform.normalize.cljs$core$IFn$_invoke$arity$2 = (function (xyz,scale){
var m = (wireframes.transform.magnitude(xyz) / scale);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(m,(0))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(m,(1))))){
return wireframes.transform.divide(xyz,m);
} else {
return xyz;
}
}));

(wireframes.transform.normalize.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=wireframes.transform.js.map
