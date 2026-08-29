goog.provide('wireframes.shapes.primitives');
wireframes.shapes.primitives.transform_shape = (function wireframes$shapes$primitives$transform_shape(transform){
return (function (p__33935){
var map__33937 = p__33935;
var map__33937__$1 = cljs.core.__destructure_map(map__33937);
var shape = map__33937__$1;
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33937__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(wireframes.transform.transform_point(transform),points));
});
});
/**
 * Shifts the vertex indexes by the given offset, preserving any existing
 * key/value pairs in the shape's polygons
 */
wireframes.shapes.primitives.update_vertex_indices = (function wireframes$shapes$primitives$update_vertex_indices(shape,offset){
var vec_updater = (function (xs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,offset),xs);
});
var map_updater = (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731)], null),vec_updater);
});
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygons","polygons",-266433925)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,map_updater));
});
/**
 * Add two or more shapes together
 */
wireframes.shapes.primitives.augment = (function wireframes$shapes$primitives$augment(var_args){
var G__33970 = arguments.length;
switch (G__33970) {
case 2:
return wireframes.shapes.primitives.augment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___34072 = arguments.length;
var i__5898__auto___34073 = (0);
while(true){
if((i__5898__auto___34073 < len__5897__auto___34072)){
args_arr__5922__auto__.push((arguments[i__5898__auto___34073]));

var G__34074 = (i__5898__auto___34073 + (1));
i__5898__auto___34073 = G__34074;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return wireframes.shapes.primitives.augment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(wireframes.shapes.primitives.augment.cljs$core$IFn$_invoke$arity$2 = (function (shape1,shape2){
var n = cljs.core.count(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape1));
var adj = wireframes.shapes.primitives.update_vertex_indices(shape2,n);
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(clojure.core.rrb_vector.catvec,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shape1,adj], 0));
}));

(wireframes.shapes.primitives.augment.cljs$core$IFn$_invoke$arity$variadic = (function (shape1,shape2,more){
var initial = wireframes.shapes.primitives.augment.cljs$core$IFn$_invoke$arity$2(shape1,shape2);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(wireframes.shapes.primitives.augment,initial,more);
}));

/** @this {Function} */
(wireframes.shapes.primitives.augment.cljs$lang$applyTo = (function (seq33967){
var G__33968 = cljs.core.first(seq33967);
var seq33967__$1 = cljs.core.next(seq33967);
var G__33969 = cljs.core.first(seq33967__$1);
var seq33967__$2 = cljs.core.next(seq33967__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33968,G__33969,seq33967__$2);
}));

(wireframes.shapes.primitives.augment.cljs$lang$maxFixedArity = (2));

wireframes.shapes.primitives.connect_polygons = (function wireframes$shapes$primitives$connect_polygons(extruded_shape,new_part,offset){
var num_points = cljs.core.count(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(new_part));
var polygons = (function (){var iter__5649__auto__ = (function wireframes$shapes$primitives$connect_polygons_$_iter__33981(s__33982){
return (new cljs.core.LazySeq(null,(function (){
var s__33982__$1 = s__33982;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__33982__$1);
if(temp__5825__auto__){
var s__33982__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33982__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__33982__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__33984 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__33983 = (0);
while(true){
if((i__33983 < size__5648__auto__)){
var a = cljs.core._nth(c__5647__auto__,i__33983);
var b = (a + (1));
var d = (b + num_points);
var c = (d - (1));
cljs.core.chunk_append(b__33984,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,d,c], null)], null));

var G__34075 = (i__33983 + (1));
i__33983 = G__34075;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33984),wireframes$shapes$primitives$connect_polygons_$_iter__33981(cljs.core.chunk_rest(s__33982__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33984),null);
}
} else {
var a = cljs.core.first(s__33982__$2);
var b = (a + (1));
var d = (b + num_points);
var c = (d - (1));
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,d,c], null)], null),wireframes$shapes$primitives$connect_polygons_$_iter__33981(cljs.core.rest(s__33982__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(offset,((offset + num_points) + (-1))));
})();
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(clojure.core.rrb_vector.catvec,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([extruded_shape,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"polygons","polygons",-266433925),clojure.core.rrb_vector.vec(polygons)], null)], 0));
});
/**
 * Given a shape, make a more complicated shape by copying it through the
 * transform n times, and connecting the corresponding points. This is more
 * powerful than the usual kind of extrusion, and can be used to create fairly
 * interesting shapes --- a snail shell from a circle, for instance.
 */
wireframes.shapes.primitives.extrude = (function wireframes$shapes$primitives$extrude(var_args){
var G__33991 = arguments.length;
switch (G__33991) {
case 3:
return wireframes.shapes.primitives.extrude.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return wireframes.shapes.primitives.extrude.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(wireframes.shapes.primitives.extrude.cljs$core$IFn$_invoke$arity$3 = (function (shape,transform,n){
return wireframes.shapes.primitives.extrude.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(wireframes.shapes.primitives.transform_shape(transform),shape),n);
}));

(wireframes.shapes.primitives.extrude.cljs$core$IFn$_invoke$arity$2 = (function (generator,n){
var i = (0);
var next_index = (0);
var extruded_part = cljs.core.first(generator);
var generator__$1 = cljs.core.next(generator);
while(true){
if((((i >= n)) || (cljs.core.empty_QMARK_(generator__$1)))){
return extruded_part;
} else {
var new_part = cljs.core.first(generator__$1);
var num_points = cljs.core.count(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(new_part));
var G__34077 = (i + (1));
var G__34078 = (next_index + num_points);
var G__34079 = wireframes.shapes.primitives.connect_polygons(wireframes.shapes.primitives.augment.cljs$core$IFn$_invoke$arity$2(extruded_part,new_part),new_part,next_index);
var G__34080 = cljs.core.next(generator__$1);
i = G__34077;
next_index = G__34078;
extruded_part = G__34079;
generator__$1 = G__34080;
continue;
}
break;
}
}));

(wireframes.shapes.primitives.extrude.cljs$lang$maxFixedArity = 3);

/**
 * Create a shape consisting of a single point
 */
wireframes.shapes.primitives.make_point = (function wireframes$shapes$primitives$make_point(x,y,z){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wireframes.transform.point.cljs$core$IFn$_invoke$arity$3(x,y,z)], null)], null);
});
/**
 * Creates a joined line consisting of the points of the form [x y z]
 */
wireframes.shapes.primitives.make_line = (function wireframes$shapes$primitives$make_line(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34081 = arguments.length;
var i__5898__auto___34082 = (0);
while(true){
if((i__5898__auto___34082 < len__5897__auto___34081)){
args__5903__auto__.push((arguments[i__5898__auto___34082]));

var G__34083 = (i__5898__auto___34082 + (1));
i__5898__auto___34082 = G__34083;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return wireframes.shapes.primitives.make_line.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(wireframes.shapes.primitives.make_line.cljs$core$IFn$_invoke$arity$variadic = (function (points){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,clojure.core.rrb_vector.catvec,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"polygons","polygons",-266433925),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__34011_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"vertices","vertices",2008905731)],[cljs.core.vec(p1__34011_SHARP_)]);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"points","points",-1486596883),points)))))], null),points);
}));

(wireframes.shapes.primitives.make_line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(wireframes.shapes.primitives.make_line.cljs$lang$applyTo = (function (seq34012){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34012));
}));

wireframes.shapes.primitives.make_polygon = (function wireframes$shapes$primitives$make_polygon(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34084 = arguments.length;
var i__5898__auto___34085 = (0);
while(true){
if((i__5898__auto___34085 < len__5897__auto___34084)){
args__5903__auto__.push((arguments[i__5898__auto___34085]));

var G__34086 = (i__5898__auto___34085 + (1));
i__5898__auto___34085 = G__34086;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return wireframes.shapes.primitives.make_polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(wireframes.shapes.primitives.make_polygon.cljs$core$IFn$_invoke$arity$variadic = (function (points){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,clojure.core.rrb_vector.catvec,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"polygons","polygons",-266433925),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"vertices","vertices",2008905731)],[cljs.core.vec(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"points","points",-1486596883),points))))])],null))], null),points);
}));

(wireframes.shapes.primitives.make_polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(wireframes.shapes.primitives.make_polygon.cljs$lang$applyTo = (function (seq34021){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34021));
}));

wireframes.shapes.primitives.make_grid = (function wireframes$shapes$primitives$make_grid(x,y,w,h){
return wireframes.shapes.primitives.extrude.cljs$core$IFn$_invoke$arity$3(wireframes.shapes.primitives.extrude.cljs$core$IFn$_invoke$arity$3(wireframes.shapes.primitives.make_point(x,y,(0)),wireframes.transform.translate((1),(0),(0)),w),wireframes.transform.translate((0),(1),(0)),h);
});
wireframes.shapes.primitives.mesh = (function wireframes$shapes$primitives$mesh(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34087 = arguments.length;
var i__5898__auto___34088 = (0);
while(true){
if((i__5898__auto___34088 < len__5897__auto___34087)){
args__5903__auto__.push((arguments[i__5898__auto___34088]));

var G__34089 = (i__5898__auto___34088 + (1));
i__5898__auto___34088 = G__34089;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return wireframes.shapes.primitives.mesh.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(wireframes.shapes.primitives.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (x_divisions,y_divisions,p__34039){
var vec__34042 = p__34039;
var x_periodic_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34042,(0),null);
var y_periodic_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34042,(1),null);
var m = ((x_divisions + (1)) * (y_divisions + (1)));
var iter__5649__auto__ = (function wireframes$shapes$primitives$iter__34045(s__34046){
return (new cljs.core.LazySeq(null,(function (){
var s__34046__$1 = s__34046;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__34046__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var j = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__34046__$1,j,xs__6385__auto__,temp__5825__auto__,m,vec__34042,x_periodic_QMARK_,y_periodic_QMARK_){
return (function wireframes$shapes$primitives$iter__34045_$_iter__34047(s__34048){
return (new cljs.core.LazySeq(null,((function (s__34046__$1,j,xs__6385__auto__,temp__5825__auto__,m,vec__34042,x_periodic_QMARK_,y_periodic_QMARK_){
return (function (){
var s__34048__$1 = s__34048;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__34048__$1);
if(temp__5825__auto____$1){
var s__34048__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34048__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__34048__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__34050 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__34049 = (0);
while(true){
if((i__34049 < size__5648__auto__)){
var i = cljs.core._nth(c__5647__auto__,i__34049);
var a = (i + (j * (x_divisions + (1))));
var b = (a + (1));
var c = cljs.core.mod((b + x_divisions),m);
var d = (c + (1));
cljs.core.chunk_append(b__34050,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,d,c], null)], null));

var G__34090 = (i__34049 + (1));
i__34049 = G__34090;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34050),wireframes$shapes$primitives$iter__34045_$_iter__34047(cljs.core.chunk_rest(s__34048__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34050),null);
}
} else {
var i = cljs.core.first(s__34048__$2);
var a = (i + (j * (x_divisions + (1))));
var b = (a + (1));
var c = cljs.core.mod((b + x_divisions),m);
var d = (c + (1));
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,d,c], null)], null),wireframes$shapes$primitives$iter__34045_$_iter__34047(cljs.core.rest(s__34048__$2)));
}
} else {
return null;
}
break;
}
});})(s__34046__$1,j,xs__6385__auto__,temp__5825__auto__,m,vec__34042,x_periodic_QMARK_,y_periodic_QMARK_))
,null,null));
});})(s__34046__$1,j,xs__6385__auto__,temp__5825__auto__,m,vec__34042,x_periodic_QMARK_,y_periodic_QMARK_))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(x_divisions)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,wireframes$shapes$primitives$iter__34045(cljs.core.rest(s__34046__$1)));
} else {
var G__34091 = cljs.core.rest(s__34046__$1);
s__34046__$1 = G__34091;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__34054 = (cljs.core.truth_(y_periodic_QMARK_)?cljs.core.inc:cljs.core.identity);
return (fexpr__34054.cljs$core$IFn$_invoke$arity$1 ? fexpr__34054.cljs$core$IFn$_invoke$arity$1(y_divisions) : fexpr__34054.call(null,y_divisions));
})()));
}));

(wireframes.shapes.primitives.mesh.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(wireframes.shapes.primitives.mesh.cljs$lang$applyTo = (function (seq34033){
var G__34034 = cljs.core.first(seq34033);
var seq34033__$1 = cljs.core.next(seq34033);
var G__34035 = cljs.core.first(seq34033__$1);
var seq34033__$2 = cljs.core.next(seq34033__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34034,G__34035,seq34033__$2);
}));

wireframes.shapes.primitives.make_surface = (function wireframes$shapes$primitives$make_surface(x_range,y_range,z_fn){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.vec((function (){var iter__5649__auto__ = (function wireframes$shapes$primitives$make_surface_$_iter__34055(s__34056){
return (new cljs.core.LazySeq(null,(function (){
var s__34056__$1 = s__34056;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__34056__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var x = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__34056__$1,x,xs__6385__auto__,temp__5825__auto__){
return (function wireframes$shapes$primitives$make_surface_$_iter__34055_$_iter__34057(s__34058){
return (new cljs.core.LazySeq(null,((function (s__34056__$1,x,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__34058__$1 = s__34058;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__34058__$1);
if(temp__5825__auto____$1){
var s__34058__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34058__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__34058__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__34060 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__34059 = (0);
while(true){
if((i__34059 < size__5648__auto__)){
var y = cljs.core._nth(c__5647__auto__,i__34059);
cljs.core.chunk_append(b__34060,wireframes.transform.point.cljs$core$IFn$_invoke$arity$3(x,y,(z_fn.cljs$core$IFn$_invoke$arity$2 ? z_fn.cljs$core$IFn$_invoke$arity$2(x,y) : z_fn.call(null,x,y))));

var G__34092 = (i__34059 + (1));
i__34059 = G__34092;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34060),wireframes$shapes$primitives$make_surface_$_iter__34055_$_iter__34057(cljs.core.chunk_rest(s__34058__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34060),null);
}
} else {
var y = cljs.core.first(s__34058__$2);
return cljs.core.cons(wireframes.transform.point.cljs$core$IFn$_invoke$arity$3(x,y,(z_fn.cljs$core$IFn$_invoke$arity$2 ? z_fn.cljs$core$IFn$_invoke$arity$2(x,y) : z_fn.call(null,x,y))),wireframes$shapes$primitives$make_surface_$_iter__34055_$_iter__34057(cljs.core.rest(s__34058__$2)));
}
} else {
return null;
}
break;
}
});})(s__34056__$1,x,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__34056__$1,x,xs__6385__auto__,temp__5825__auto__))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(y_range));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,wireframes$shapes$primitives$make_surface_$_iter__34055(cljs.core.rest(s__34056__$1)));
} else {
var G__34093 = cljs.core.rest(s__34056__$1);
s__34056__$1 = G__34093;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(x_range);
})()),new cljs.core.Keyword(null,"polygons","polygons",-266433925),cljs.core.vec(wireframes.shapes.primitives.mesh((cljs.core.count(x_range) - (1)),(cljs.core.count(y_range) - (1))))], null);
});
/**
 * Filters points that only participate in polygon faces
 */
wireframes.shapes.primitives.active_points = (function wireframes$shapes$primitives$active_points(shape){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__34061_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape),p1__34061_SHARP_);
}),cljs.core.set(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core.concat,new cljs.core.Keyword(null,"polygons","polygons",-266433925).cljs$core$IFn$_invoke$arity$1(shape)))));
});
/**
 * Calculates the minimum and maximum bounds for the shape
 */
wireframes.shapes.primitives.compute_bounds = (function wireframes$shapes$primitives$compute_bounds(shape){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(wireframes.transform.point,cljs.core.vector),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.max),wireframes.shapes.primitives.active_points(shape)));
});
/**
 * Determines the bounds of the shape, then shifts it to be centered at the origin.
 * Note only the bounds are used to determine the central point, rather than the
 * averaged centroids
 */
wireframes.shapes.primitives.center_at_origin = (function wireframes$shapes$primitives$center_at_origin(shape){
var vec__34062 = wireframes.shapes.primitives.compute_bounds(shape);
var vec__34065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34062,(0),null);
var min_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34065,(0),null);
var min_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34065,(1),null);
var min_z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34065,(2),null);
var vec__34068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34062,(1),null);
var max_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34068,(0),null);
var max_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34068,(1),null);
var max_z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34068,(2),null);
var width = (max_x - min_x);
var height = (max_y - min_y);
var depth = (max_z - min_z);
var transform = wireframes.shapes.primitives.transform_shape(wireframes.transform.translate(((- min_x) - (width / (2))),((- min_y) - (height / (2))),((- min_z) - (depth / (2)))));
return transform(shape);
});

//# sourceMappingURL=wireframes.shapes.primitives.js.map
