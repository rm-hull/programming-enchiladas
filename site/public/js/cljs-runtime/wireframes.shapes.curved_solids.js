goog.provide('wireframes.shapes.curved_solids');
wireframes.shapes.curved_solids.π = Math.PI;
wireframes.shapes.curved_solids.two_π = (2.0 * wireframes.shapes.curved_solids.π);
wireframes.shapes.curved_solids.intervals__GT_radians = (function (){var atan8 = (Math.atan(1.0) * 8.0);
return (function (num_intervals){
return (atan8 / num_intervals);
});
})();
/**
 * Approximate a circle in the X-Y plane around the origin wth radius r and n points
 */
wireframes.shapes.curved_solids.make_circle = (function wireframes$shapes$curved_solids$make_circle(r,n){
return wireframes.shapes.primitives.extrude.cljs$core$IFn$_invoke$arity$3(wireframes.shapes.primitives.make_point(Math.max(0.0,r),(0),(0)),wireframes.transform.rotate(new cljs.core.Keyword(null,"z","z",-789527183),wireframes.shapes.curved_solids.intervals__GT_radians(n)),n);
});
wireframes.shapes.curved_solids.make_bezier_spline = (function wireframes$shapes$curved_solids$make_bezier_spline(control_points,n){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,wireframes.transform.point),wireframes.bezier.line_points(n,control_points))], null);
});
/**
 * Approximate a torus with major radius r2 and minor radius r1,
 * with correspondingly n2 and n1 points around each axis.
 */
wireframes.shapes.curved_solids.make_torus = (function wireframes$shapes$curved_solids$make_torus(r1,r2,n1,n2){
var move = wireframes.shapes.primitives.transform_shape(wireframes.transform.translate(r2,(0),(0)));
var circle = move(wireframes.shapes.curved_solids.make_circle(r1,n1));
return wireframes.shapes.primitives.extrude.cljs$core$IFn$_invoke$arity$3(circle,wireframes.transform.rotate(new cljs.core.Keyword(null,"y","y",-1757859776),wireframes.shapes.curved_solids.intervals__GT_radians(n2)),n2);
});
wireframes.shapes.curved_solids.make_cylinder = (function wireframes$shapes$curved_solids$make_cylinder(r,n,h){
return wireframes.shapes.primitives.extrude.cljs$core$IFn$_invoke$arity$3(wireframes.shapes.curved_solids.make_circle(r,n),wireframes.transform.translate((0),(0),h),(1));
});
wireframes.shapes.curved_solids.make_cone = (function wireframes$shapes$curved_solids$make_cone(r,n,h){
return wireframes.shapes.primitives.extrude.cljs$core$IFn$_invoke$arity$3(wireframes.shapes.curved_solids.make_circle(r,n),wireframes.transform.combine.cljs$core$IFn$_invoke$arity$2(wireframes.transform.translate((0),(0),(1)),wireframes.transform.scale.cljs$core$IFn$_invoke$arity$1(0.9)),h);
});
wireframes.shapes.curved_solids.make_star = (function wireframes$shapes$curved_solids$make_star(r1,r2,n){
var angle = wireframes.shapes.curved_solids.intervals__GT_radians((n * (2)));
return wireframes.shapes.primitives.extrude.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__36775_SHARP_,p2__36774_SHARP_){
return wireframes.shapes.primitives.make_point((p2__36774_SHARP_ * Math.cos(p1__36775_SHARP_)),(p2__36774_SHARP_ * Math.sin(p1__36775_SHARP_)),(0));
}),cljs.core.iterate(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,angle),(0)),cljs.core.cycle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r1,r2], null))),(n * (2)));
});
/**
 * Approximate a sphere at the origin wth radius r and n points
 */
wireframes.shapes.curved_solids.make_sphere = (function wireframes$shapes$curved_solids$make_sphere(r,n){
var angle = wireframes.shapes.curved_solids.intervals__GT_radians((n * (2)));
return wireframes.shapes.primitives.extrude.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36777_SHARP_){
return wireframes.shapes.primitives.transform_shape(wireframes.transform.translate((0),(0),(r * Math.cos(p1__36777_SHARP_))))(wireframes.shapes.curved_solids.make_circle((r * Math.sin(p1__36777_SHARP_)),n));
}),cljs.core.iterate(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,angle),(0))),n);
});
wireframes.shapes.curved_solids.get_centroid = (function wireframes$shapes$curved_solids$get_centroid(shape,vertices,scale){
return wireframes.transform.normalize.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wireframes.transform.centroid,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.get,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape)),vertices)),scale);
});
wireframes.shapes.curved_solids.get_midpoint = (function wireframes$shapes$curved_solids$get_midpoint(shape,vertices){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wireframes.transform.mid_point,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.get,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape)),vertices));
});
wireframes.shapes.curved_solids.split_triangle = (function wireframes$shapes$curved_solids$split_triangle(shape,scale,face_index){
var vec__36779 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygons","polygons",-266433925),face_index,new cljs.core.Keyword(null,"vertices","vertices",2008905731)], null));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36779,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36779,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36779,(2),null);
var ab = (((3) * face_index) + cljs.core.count(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape)));
var bc = (ab + (1));
var ca = (bc + (1));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"polygons","polygons",-266433925),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,ab,ca], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,bc,ab], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,ca,bc], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,bc,ca], null)], null)], null),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wireframes.shapes.curved_solids.get_midpoint(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)),wireframes.shapes.curved_solids.get_midpoint(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c], null)),wireframes.shapes.curved_solids.get_midpoint(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,a], null))], null)], null);
});
wireframes.shapes.curved_solids.split_faces = (function wireframes$shapes$curved_solids$split_faces(shape,scale){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.concat),cljs.core.select_keys(shape,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null)),(function (){var iter__5649__auto__ = (function wireframes$shapes$curved_solids$split_faces_$_iter__36783(s__36784){
return (new cljs.core.LazySeq(null,(function (){
var s__36784__$1 = s__36784;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36784__$1);
if(temp__5825__auto__){
var s__36784__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36784__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__36784__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__36786 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__36785 = (0);
while(true){
if((i__36785 < size__5648__auto__)){
var i = cljs.core._nth(c__5647__auto__,i__36785);
cljs.core.chunk_append(b__36786,wireframes.shapes.curved_solids.split_triangle(shape,scale,i));

var G__36814 = (i__36785 + (1));
i__36785 = G__36814;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36786),wireframes$shapes$curved_solids$split_faces_$_iter__36783(cljs.core.chunk_rest(s__36784__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36786),null);
}
} else {
var i = cljs.core.first(s__36784__$2);
return cljs.core.cons(wireframes.shapes.curved_solids.split_triangle(shape,scale,i),wireframes$shapes$curved_solids$split_faces_$_iter__36783(cljs.core.rest(s__36784__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"polygons","polygons",-266433925).cljs$core$IFn$_invoke$arity$1(shape))));
})());
});
/**
 * Create an isosahedron iterated a number of times with radius r
 */
wireframes.shapes.curved_solids.make_isosphere = (function wireframes$shapes$curved_solids$make_isosphere(r,iterations){
var radius = wireframes.transform.magnitude(cljs.core.first(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(wireframes.shapes.platonic_solids.icosahedron)));
var i = iterations;
var s = wireframes.shapes.platonic_solids.icosahedron;
while(true){
if((i === (0))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,((function (i,s,radius){
return (function (p1__36787_SHARP_){
return wireframes.transform.normalize.cljs$core$IFn$_invoke$arity$2(p1__36787_SHARP_,r);
});})(i,s,radius))
));
} else {
var G__36815 = (i - (1));
var G__36816 = wireframes.shapes.curved_solids.split_faces(s,radius);
i = G__36815;
s = G__36816;
continue;
}
break;
}
});
wireframes.shapes.curved_solids.make_wineglass = (function wireframes$shapes$curved_solids$make_wineglass(n){
return wireframes.shapes.primitives.center_at_origin(wireframes.shapes.primitives.extrude.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wireframes.shapes.primitives.augment,(function (){var iter__5649__auto__ = (function wireframes$shapes$curved_solids$make_wineglass_$_iter__36789(s__36790){
return (new cljs.core.LazySeq(null,(function (){
var s__36790__$1 = s__36790;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36790__$1);
if(temp__5825__auto__){
var s__36790__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36790__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__36790__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__36792 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__36791 = (0);
while(true){
if((i__36791 < size__5648__auto__)){
var control_points = cljs.core._nth(c__5647__auto__,i__36791);
cljs.core.chunk_append(b__36792,wireframes.shapes.curved_solids.make_bezier_spline(control_points,(10)));

var G__36817 = (i__36791 + (1));
i__36791 = G__36817;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36792),wireframes$shapes$curved_solids$make_wineglass_$_iter__36789(cljs.core.chunk_rest(s__36790__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36792),null);
}
} else {
var control_points = cljs.core.first(s__36790__$2);
return cljs.core.cons(wireframes.shapes.curved_solids.make_bezier_spline(control_points,(10)),wireframes$shapes$curved_solids$make_wineglass_$_iter__36789(cljs.core.rest(s__36790__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.425,0.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.007,0.412,0.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.136,0.448,0.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.151,0.446,0.0], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.151,0.446,0.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.167,0.444,0.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.161,0.447,0.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.16,0.432,0.0], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.16,0.432,0.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.159,0.417,0.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.044,0.421,0.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.023,0.401,0.0], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.023,0.401,0.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.012,0.391,0.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.009,0.381,0.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.019,0.283,0.0], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.019,0.283,0.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.022,0.252,0.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.152,0.278,0.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.18,0.067,0.0], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.18,0.067,0.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.188,0.008,0.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.176,0.045,0.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.174,0.06,0.0], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.174,0.06,0.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.167,0.106,0.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.142,0.188,0.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.109,0.217,0.0], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.109,0.217,0.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.068,0.253,0.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.034,0.258,0.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.259,0.0], null)], null)], null));
})()),wireframes.transform.rotate(new cljs.core.Keyword(null,"y","y",-1757859776),wireframes.shapes.curved_solids.intervals__GT_radians(n)),n));
});
wireframes.shapes.curved_solids.make_mobius_strip = (function wireframes$shapes$curved_solids$make_mobius_strip(x_divisions,y_divisions){
var i = (wireframes.shapes.curved_solids.two_π / x_divisions);
var j = (2.0 / y_divisions);
var x = (function (u,v){
return ((((v / 2.0) * Math.cos((u / 2.0))) + (1)) * Math.cos(u));
});
var y = (function (u,v){
return ((((v / 2.0) * Math.cos((u / 2.0))) + (1)) * Math.sin(u));
});
var z = (function (u,v){
return ((v / 2.0) * Math.sin((u / 2.0)));
});
var u = cljs.core.range.cljs$core$IFn$_invoke$arity$3(0.0,(i + wireframes.shapes.curved_solids.two_π),i);
var v = cljs.core.range.cljs$core$IFn$_invoke$arity$3(-1.0,(j + 1.0),j);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"polygons","polygons",-266433925),cljs.core.vec(wireframes.shapes.primitives.mesh((cljs.core.count(u) - (1)),(cljs.core.count(v) - (1)))),new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.vec((function (){var iter__5649__auto__ = (function wireframes$shapes$curved_solids$make_mobius_strip_$_iter__36794(s__36795){
return (new cljs.core.LazySeq(null,(function (){
var s__36795__$1 = s__36795;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36795__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var v_SINGLEQUOTE_ = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__36795__$1,v_SINGLEQUOTE_,xs__6385__auto__,temp__5825__auto__,i,j,x,y,z,u,v){
return (function wireframes$shapes$curved_solids$make_mobius_strip_$_iter__36794_$_iter__36796(s__36797){
return (new cljs.core.LazySeq(null,((function (s__36795__$1,v_SINGLEQUOTE_,xs__6385__auto__,temp__5825__auto__,i,j,x,y,z,u,v){
return (function (){
var s__36797__$1 = s__36797;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__36797__$1);
if(temp__5825__auto____$1){
var s__36797__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36797__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__36797__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__36799 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__36798 = (0);
while(true){
if((i__36798 < size__5648__auto__)){
var u_SINGLEQUOTE_ = cljs.core._nth(c__5647__auto__,i__36798);
cljs.core.chunk_append(b__36799,wireframes.transform.point.cljs$core$IFn$_invoke$arity$3(x(u_SINGLEQUOTE_,v_SINGLEQUOTE_),y(u_SINGLEQUOTE_,v_SINGLEQUOTE_),z(u_SINGLEQUOTE_,v_SINGLEQUOTE_)));

var G__36818 = (i__36798 + (1));
i__36798 = G__36818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36799),wireframes$shapes$curved_solids$make_mobius_strip_$_iter__36794_$_iter__36796(cljs.core.chunk_rest(s__36797__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36799),null);
}
} else {
var u_SINGLEQUOTE_ = cljs.core.first(s__36797__$2);
return cljs.core.cons(wireframes.transform.point.cljs$core$IFn$_invoke$arity$3(x(u_SINGLEQUOTE_,v_SINGLEQUOTE_),y(u_SINGLEQUOTE_,v_SINGLEQUOTE_),z(u_SINGLEQUOTE_,v_SINGLEQUOTE_)),wireframes$shapes$curved_solids$make_mobius_strip_$_iter__36794_$_iter__36796(cljs.core.rest(s__36797__$2)));
}
} else {
return null;
}
break;
}
});})(s__36795__$1,v_SINGLEQUOTE_,xs__6385__auto__,temp__5825__auto__,i,j,x,y,z,u,v))
,null,null));
});})(s__36795__$1,v_SINGLEQUOTE_,xs__6385__auto__,temp__5825__auto__,i,j,x,y,z,u,v))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(u));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,wireframes$shapes$curved_solids$make_mobius_strip_$_iter__36794(cljs.core.rest(s__36795__$1)));
} else {
var G__36819 = cljs.core.rest(s__36795__$1);
s__36795__$1 = G__36819;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(v);
})())], null);
});
wireframes.shapes.curved_solids.make_klein_bagel = (function wireframes$shapes$curved_solids$make_klein_bagel(r,divisions){
var i = (wireframes.shapes.curved_solids.two_π / divisions);
var x = (function (r__$1,θ,v){
return (((r__$1 + (Math.cos((θ / (2))) * Math.sin(v))) + (- (Math.sin((θ / (2))) * Math.sin(((2) * v))))) * Math.cos(θ));
});
var y = (function (r__$1,θ,v){
return (((r__$1 + (Math.cos((θ / (2))) * Math.sin(v))) + (- (Math.sin((θ / (2))) * Math.sin(((2) * v))))) * Math.sin(θ));
});
var z = (function (r__$1,θ,v){
return ((Math.sin((θ / (2))) * Math.sin(v)) + (Math.cos((θ / (2))) * Math.sin(((2) * v))));
});
var θ = cljs.core.range.cljs$core$IFn$_invoke$arity$3(0.0,(i + wireframes.shapes.curved_solids.two_π),i);
var v = cljs.core.range.cljs$core$IFn$_invoke$arity$3(0.0,(i + wireframes.shapes.curved_solids.two_π),i);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"polygons","polygons",-266433925),cljs.core.vec(wireframes.shapes.primitives.mesh((cljs.core.count(θ) - (1)),(cljs.core.count(v) - (1)))),new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.vec((function (){var iter__5649__auto__ = (function wireframes$shapes$curved_solids$make_klein_bagel_$_iter__36802(s__36803){
return (new cljs.core.LazySeq(null,(function (){
var s__36803__$1 = s__36803;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36803__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var v_SINGLEQUOTE_ = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__36803__$1,v_SINGLEQUOTE_,xs__6385__auto__,temp__5825__auto__,i,x,y,z,θ,v){
return (function wireframes$shapes$curved_solids$make_klein_bagel_$_iter__36802_$_iter__36804(s__36805){
return (new cljs.core.LazySeq(null,((function (s__36803__$1,v_SINGLEQUOTE_,xs__6385__auto__,temp__5825__auto__,i,x,y,z,θ,v){
return (function (){
var s__36805__$1 = s__36805;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__36805__$1);
if(temp__5825__auto____$1){
var s__36805__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36805__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__36805__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__36807 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__36806 = (0);
while(true){
if((i__36806 < size__5648__auto__)){
var θ_SINGLEQUOTE_ = cljs.core._nth(c__5647__auto__,i__36806);
cljs.core.chunk_append(b__36807,wireframes.transform.point.cljs$core$IFn$_invoke$arity$3(x(r,θ_SINGLEQUOTE_,v_SINGLEQUOTE_),y(r,θ_SINGLEQUOTE_,v_SINGLEQUOTE_),z(r,θ_SINGLEQUOTE_,v_SINGLEQUOTE_)));

var G__36823 = (i__36806 + (1));
i__36806 = G__36823;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36807),wireframes$shapes$curved_solids$make_klein_bagel_$_iter__36802_$_iter__36804(cljs.core.chunk_rest(s__36805__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36807),null);
}
} else {
var θ_SINGLEQUOTE_ = cljs.core.first(s__36805__$2);
return cljs.core.cons(wireframes.transform.point.cljs$core$IFn$_invoke$arity$3(x(r,θ_SINGLEQUOTE_,v_SINGLEQUOTE_),y(r,θ_SINGLEQUOTE_,v_SINGLEQUOTE_),z(r,θ_SINGLEQUOTE_,v_SINGLEQUOTE_)),wireframes$shapes$curved_solids$make_klein_bagel_$_iter__36802_$_iter__36804(cljs.core.rest(s__36805__$2)));
}
} else {
return null;
}
break;
}
});})(s__36803__$1,v_SINGLEQUOTE_,xs__6385__auto__,temp__5825__auto__,i,x,y,z,θ,v))
,null,null));
});})(s__36803__$1,v_SINGLEQUOTE_,xs__6385__auto__,temp__5825__auto__,i,x,y,z,θ,v))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(θ));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,wireframes$shapes$curved_solids$make_klein_bagel_$_iter__36802(cljs.core.rest(s__36803__$1)));
} else {
var G__36824 = cljs.core.rest(s__36803__$1);
s__36803__$1 = G__36824;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(v);
})())], null);
});
wireframes.shapes.curved_solids.make_klein_bottle = (function wireframes$shapes$curved_solids$make_klein_bottle(length,loop,width,divisions){
var i = (wireframes.shapes.curved_solids.two_π / divisions);
var r = (function (u){
return (width * (1.0 - (Math.cos(u) / 2.0)));
});
var x = (function (u,v){
if((u < wireframes.shapes.curved_solids.π)){
return (((loop * Math.cos(u)) * (Math.sin(u) + (1))) + ((r(u) * Math.cos(u)) * Math.cos(v)));
} else {
return (((loop * Math.cos(u)) * (Math.sin(u) + (1))) + (r(u) * Math.cos((v + wireframes.shapes.curved_solids.π))));
}
});
var y = (function (u,v){
if((u < wireframes.shapes.curved_solids.π)){
return ((length * Math.sin(u)) + ((r(u) * Math.sin(u)) * Math.cos(v)));
} else {
return (length * Math.sin(u));
}
});
var z = (function (u,v){
return (r(u) * Math.sin(v));
});
var u = cljs.core.range.cljs$core$IFn$_invoke$arity$3(0.0,(i + wireframes.shapes.curved_solids.two_π),i);
var v = cljs.core.range.cljs$core$IFn$_invoke$arity$3(0.0,(i + wireframes.shapes.curved_solids.two_π),i);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"polygons","polygons",-266433925),cljs.core.vec(wireframes.shapes.primitives.mesh((cljs.core.count(u) - (1)),(cljs.core.count(v) - (1)))),new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.vec((function (){var iter__5649__auto__ = (function wireframes$shapes$curved_solids$make_klein_bottle_$_iter__36808(s__36809){
return (new cljs.core.LazySeq(null,(function (){
var s__36809__$1 = s__36809;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36809__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var v_SINGLEQUOTE_ = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__36809__$1,v_SINGLEQUOTE_,xs__6385__auto__,temp__5825__auto__,i,r,x,y,z,u,v){
return (function wireframes$shapes$curved_solids$make_klein_bottle_$_iter__36808_$_iter__36810(s__36811){
return (new cljs.core.LazySeq(null,((function (s__36809__$1,v_SINGLEQUOTE_,xs__6385__auto__,temp__5825__auto__,i,r,x,y,z,u,v){
return (function (){
var s__36811__$1 = s__36811;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__36811__$1);
if(temp__5825__auto____$1){
var s__36811__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36811__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__36811__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__36813 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__36812 = (0);
while(true){
if((i__36812 < size__5648__auto__)){
var u_SINGLEQUOTE_ = cljs.core._nth(c__5647__auto__,i__36812);
cljs.core.chunk_append(b__36813,wireframes.transform.point.cljs$core$IFn$_invoke$arity$3(x(u_SINGLEQUOTE_,v_SINGLEQUOTE_),y(u_SINGLEQUOTE_,v_SINGLEQUOTE_),z(u_SINGLEQUOTE_,v_SINGLEQUOTE_)));

var G__36832 = (i__36812 + (1));
i__36812 = G__36832;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36813),wireframes$shapes$curved_solids$make_klein_bottle_$_iter__36808_$_iter__36810(cljs.core.chunk_rest(s__36811__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36813),null);
}
} else {
var u_SINGLEQUOTE_ = cljs.core.first(s__36811__$2);
return cljs.core.cons(wireframes.transform.point.cljs$core$IFn$_invoke$arity$3(x(u_SINGLEQUOTE_,v_SINGLEQUOTE_),y(u_SINGLEQUOTE_,v_SINGLEQUOTE_),z(u_SINGLEQUOTE_,v_SINGLEQUOTE_)),wireframes$shapes$curved_solids$make_klein_bottle_$_iter__36808_$_iter__36810(cljs.core.rest(s__36811__$2)));
}
} else {
return null;
}
break;
}
});})(s__36809__$1,v_SINGLEQUOTE_,xs__6385__auto__,temp__5825__auto__,i,r,x,y,z,u,v))
,null,null));
});})(s__36809__$1,v_SINGLEQUOTE_,xs__6385__auto__,temp__5825__auto__,i,r,x,y,z,u,v))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(u));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,wireframes$shapes$curved_solids$make_klein_bottle_$_iter__36808(cljs.core.rest(s__36809__$1)));
} else {
var G__36833 = cljs.core.rest(s__36809__$1);
s__36809__$1 = G__36833;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(v);
})())], null);
});

//# sourceMappingURL=wireframes.shapes.curved_solids.js.map
