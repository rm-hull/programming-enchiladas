goog.provide('wireframes.bezier');
/**
 * Add two points
 */
wireframes.bezier.add = (function wireframes$bezier$add(pa,pb){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,pa,pb);
});
/**
 * Multiply a point [x,y,z] by a constant c
 */
wireframes.bezier.mult = (function wireframes$bezier$mult(pt,c){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,c),pt);
});
wireframes.bezier.evaluate_bezier_curve = (function wireframes$bezier$evaluate_bezier_curve(t,control_points){
var omt = ((1) - t);
var b = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [((omt * omt) * omt),((((3) * t) * omt) * omt),((((3) * t) * t) * omt),((t * t) * t)], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(wireframes.bezier.add,cljs.core.map.cljs$core$IFn$_invoke$arity$3(wireframes.bezier.mult,control_points,b));
});
wireframes.bezier.evaluate_bezier_patch = (function wireframes$bezier$evaluate_bezier_patch(u,v,control_points){
var u_curve = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(wireframes.bezier.evaluate_bezier_curve,u),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((4),control_points));
return wireframes.bezier.evaluate_bezier_curve(v,u_curve);
});
/**
 * Given a list of 4 control points, calculate the line points that fit the
 * bezier curve with the supplied number of divisions. The controlpoints may
 * be specified in 2D or 3D.
 */
wireframes.bezier.line_points = (function wireframes$bezier$line_points(divisions,control_points){
var divisions__$1 = divisions;
return cljs.core.vec((function (){var iter__5649__auto__ = (function wireframes$bezier$line_points_$_iter__36702(s__36703){
return (new cljs.core.LazySeq(null,(function (){
var s__36703__$1 = s__36703;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36703__$1);
if(temp__5825__auto__){
var s__36703__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36703__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__36703__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__36705 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__36704 = (0);
while(true){
if((i__36704 < size__5648__auto__)){
var i = cljs.core._nth(c__5647__auto__,i__36704);
cljs.core.chunk_append(b__36705,wireframes.bezier.evaluate_bezier_curve((i / divisions__$1),control_points));

var G__36720 = (i__36704 + (1));
i__36704 = G__36720;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36705),wireframes$bezier$line_points_$_iter__36702(cljs.core.chunk_rest(s__36703__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36705),null);
}
} else {
var i = cljs.core.first(s__36703__$2);
return cljs.core.cons(wireframes.bezier.evaluate_bezier_curve((i / divisions__$1),control_points),wireframes$bezier$line_points_$_iter__36702(cljs.core.rest(s__36703__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((divisions__$1 + (1))));
})());
});
/**
 * Given a grid of 16 (4 x 4) control points, calculate the surface points
 * with the supplied number of divisions. The control points may be specified
 * in 2D or 3D.
 */
wireframes.bezier.surface_points = (function wireframes$bezier$surface_points(divisions,control_points){
var divisions__$1 = divisions;
return cljs.core.vec((function (){var iter__5649__auto__ = (function wireframes$bezier$surface_points_$_iter__36706(s__36707){
return (new cljs.core.LazySeq(null,(function (){
var s__36707__$1 = s__36707;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36707__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var j = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__36707__$1,j,xs__6385__auto__,temp__5825__auto__,divisions__$1){
return (function wireframes$bezier$surface_points_$_iter__36706_$_iter__36708(s__36709){
return (new cljs.core.LazySeq(null,((function (s__36707__$1,j,xs__6385__auto__,temp__5825__auto__,divisions__$1){
return (function (){
var s__36709__$1 = s__36709;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__36709__$1);
if(temp__5825__auto____$1){
var s__36709__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36709__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__36709__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__36711 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__36710 = (0);
while(true){
if((i__36710 < size__5648__auto__)){
var i = cljs.core._nth(c__5647__auto__,i__36710);
cljs.core.chunk_append(b__36711,wireframes.bezier.evaluate_bezier_patch((i / divisions__$1),(j / divisions__$1),control_points));

var G__36721 = (i__36710 + (1));
i__36710 = G__36721;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36711),wireframes$bezier$surface_points_$_iter__36706_$_iter__36708(cljs.core.chunk_rest(s__36709__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36711),null);
}
} else {
var i = cljs.core.first(s__36709__$2);
return cljs.core.cons(wireframes.bezier.evaluate_bezier_patch((i / divisions__$1),(j / divisions__$1),control_points),wireframes$bezier$surface_points_$_iter__36706_$_iter__36708(cljs.core.rest(s__36709__$2)));
}
} else {
return null;
}
break;
}
});})(s__36707__$1,j,xs__6385__auto__,temp__5825__auto__,divisions__$1))
,null,null));
});})(s__36707__$1,j,xs__6385__auto__,temp__5825__auto__,divisions__$1))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((divisions__$1 + (1)))));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,wireframes$bezier$surface_points_$_iter__36706(cljs.core.rest(s__36707__$1)));
} else {
var G__36722 = cljs.core.rest(s__36707__$1);
s__36707__$1 = G__36722;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((divisions__$1 + (1))));
})());
});

//# sourceMappingURL=wireframes.bezier.js.map
