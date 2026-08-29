goog.provide('wireframes.shapes.platonic_solids');
wireframes.shapes.platonic_solids.epsilon = 1.0E-5;
wireframes.shapes.platonic_solids._EQ_approx = (function wireframes$shapes$platonic_solids$_EQ_approx(x,y){
return (Math.abs((x - y)) < wireframes.shapes.platonic_solids.epsilon);
});
wireframes.shapes.platonic_solids.sqrt_2 = Math.sqrt((2));
wireframes.shapes.platonic_solids.sqrt_5 = Math.sqrt((5));
wireframes.shapes.platonic_solids.rho = ((wireframes.shapes.platonic_solids.sqrt_5 + (1)) / (2));
wireframes.shapes.platonic_solids._rho = (- wireframes.shapes.platonic_solids.rho);
wireframes.shapes.platonic_solids.tetrahedron = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [wireframes.transform.point.cljs$core$IFn$_invoke$arity$3((1),(0),((-1) / wireframes.shapes.platonic_solids.sqrt_2)),wireframes.transform.point.cljs$core$IFn$_invoke$arity$3((-1),(0),((-1) / wireframes.shapes.platonic_solids.sqrt_2)),wireframes.transform.point.cljs$core$IFn$_invoke$arity$3((0),(1),((1) / wireframes.shapes.platonic_solids.sqrt_2)),wireframes.transform.point.cljs$core$IFn$_invoke$arity$3((0),(-1),((1) / wireframes.shapes.platonic_solids.sqrt_2))], null),new cljs.core.Keyword(null,"polygons","polygons",-266433925),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(3)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(3)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)], null)], null)], null);
/**
 * Start with a square polygon, and extrude to a line alone the Z-plane.
 */
wireframes.shapes.platonic_solids.cube = wireframes.shapes.primitives.center_at_origin(wireframes.shapes.primitives.extrude.cljs$core$IFn$_invoke$arity$3(wireframes.shapes.primitives.make_polygon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([wireframes.shapes.primitives.make_point((0),(0),(0)),wireframes.shapes.primitives.make_point((0),(1),(0)),wireframes.shapes.primitives.make_point((1),(1),(0)),wireframes.shapes.primitives.make_point((1),(0),(0))], 0)),wireframes.transform.translate((0),(0),(1)),(1)));
/**
 * A regular octahedron composed of eight equilateral triangles
 */
wireframes.shapes.platonic_solids.octahedron = (function (){var points = cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5649__auto__ = (function wireframes$shapes$platonic_solids$iter__36698(s__36699){
return (new cljs.core.LazySeq(null,(function (){
var s__36699__$1 = s__36699;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36699__$1);
if(temp__5825__auto__){
var s__36699__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36699__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__36699__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__36701 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__36700 = (0);
while(true){
if((i__36700 < size__5648__auto__)){
var a = cljs.core._nth(c__5647__auto__,i__36700);
cljs.core.chunk_append(b__36701,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wireframes.transform.point.cljs$core$IFn$_invoke$arity$3(a,(0),(0)),wireframes.transform.point.cljs$core$IFn$_invoke$arity$3((0),a,(0)),wireframes.transform.point.cljs$core$IFn$_invoke$arity$3((0),(0),a)], null));

var G__36753 = (i__36700 + (1));
i__36700 = G__36753;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36701),wireframes$shapes$platonic_solids$iter__36698(cljs.core.chunk_rest(s__36699__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36701),null);
}
} else {
var a = cljs.core.first(s__36699__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wireframes.transform.point.cljs$core$IFn$_invoke$arity$3(a,(0),(0)),wireframes.transform.point.cljs$core$IFn$_invoke$arity$3((0),a,(0)),wireframes.transform.point.cljs$core$IFn$_invoke$arity$3((0),(0),a)], null),wireframes$shapes$platonic_solids$iter__36698(cljs.core.rest(s__36699__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null));
})()));
var polygons = cljs.core.vec((function (){var iter__5649__auto__ = (function wireframes$shapes$platonic_solids$iter__36712(s__36713){
return (new cljs.core.LazySeq(null,(function (){
var s__36713__$1 = s__36713;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36713__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var a = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__36713__$1,a,xs__6385__auto__,temp__5825__auto__,points){
return (function wireframes$shapes$platonic_solids$iter__36712_$_iter__36714(s__36715){
return (new cljs.core.LazySeq(null,((function (s__36713__$1,a,xs__6385__auto__,temp__5825__auto__,points){
return (function (){
var s__36715__$1 = s__36715;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__36715__$1);
if(temp__5825__auto____$1){
var xs__6385__auto____$1 = temp__5825__auto____$1;
var b = cljs.core.first(xs__6385__auto____$1);
var iterys__5645__auto__ = ((function (s__36715__$1,s__36713__$1,b,xs__6385__auto____$1,temp__5825__auto____$1,a,xs__6385__auto__,temp__5825__auto__,points){
return (function wireframes$shapes$platonic_solids$iter__36712_$_iter__36714_$_iter__36716(s__36717){
return (new cljs.core.LazySeq(null,((function (s__36715__$1,s__36713__$1,b,xs__6385__auto____$1,temp__5825__auto____$1,a,xs__6385__auto__,temp__5825__auto__,points){
return (function (){
var s__36717__$1 = s__36717;
while(true){
var temp__5825__auto____$2 = cljs.core.seq(s__36717__$1);
if(temp__5825__auto____$2){
var s__36717__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__36717__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__36717__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__36719 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__36718 = (0);
while(true){
if((i__36718 < size__5648__auto__)){
var c = cljs.core._nth(c__5647__auto__,i__36718);
if(((wireframes.shapes.platonic_solids._EQ_approx(wireframes.transform.distance((points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(a) : points.call(null,a)),(points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(b) : points.call(null,b))),wireframes.shapes.platonic_solids.sqrt_2)) && (((wireframes.shapes.platonic_solids._EQ_approx(wireframes.transform.distance((points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(a) : points.call(null,a)),(points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(c) : points.call(null,c))),wireframes.shapes.platonic_solids.sqrt_2)) && (wireframes.shapes.platonic_solids._EQ_approx(wireframes.transform.distance((points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(b) : points.call(null,b)),(points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(c) : points.call(null,c))),wireframes.shapes.platonic_solids.sqrt_2)))))){
cljs.core.chunk_append(b__36719,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null)], null));

var G__36757 = (i__36718 + (1));
i__36718 = G__36757;
continue;
} else {
var G__36758 = (i__36718 + (1));
i__36718 = G__36758;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36719),wireframes$shapes$platonic_solids$iter__36712_$_iter__36714_$_iter__36716(cljs.core.chunk_rest(s__36717__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36719),null);
}
} else {
var c = cljs.core.first(s__36717__$2);
if(((wireframes.shapes.platonic_solids._EQ_approx(wireframes.transform.distance((points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(a) : points.call(null,a)),(points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(b) : points.call(null,b))),wireframes.shapes.platonic_solids.sqrt_2)) && (((wireframes.shapes.platonic_solids._EQ_approx(wireframes.transform.distance((points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(a) : points.call(null,a)),(points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(c) : points.call(null,c))),wireframes.shapes.platonic_solids.sqrt_2)) && (wireframes.shapes.platonic_solids._EQ_approx(wireframes.transform.distance((points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(b) : points.call(null,b)),(points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(c) : points.call(null,c))),wireframes.shapes.platonic_solids.sqrt_2)))))){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null)], null),wireframes$shapes$platonic_solids$iter__36712_$_iter__36714_$_iter__36716(cljs.core.rest(s__36717__$2)));
} else {
var G__36759 = cljs.core.rest(s__36717__$2);
s__36717__$1 = G__36759;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__36715__$1,s__36713__$1,b,xs__6385__auto____$1,temp__5825__auto____$1,a,xs__6385__auto__,temp__5825__auto__,points))
,null,null));
});})(s__36715__$1,s__36713__$1,b,xs__6385__auto____$1,temp__5825__auto____$1,a,xs__6385__auto__,temp__5825__auto__,points))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(b)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,wireframes$shapes$platonic_solids$iter__36712_$_iter__36714(cljs.core.rest(s__36715__$1)));
} else {
var G__36760 = cljs.core.rest(s__36715__$1);
s__36715__$1 = G__36760;
continue;
}
} else {
return null;
}
break;
}
});})(s__36713__$1,a,xs__6385__auto__,temp__5825__auto__,points))
,null,null));
});})(s__36713__$1,a,xs__6385__auto__,temp__5825__auto__,points))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(a)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,wireframes$shapes$platonic_solids$iter__36712(cljs.core.rest(s__36713__$1)));
} else {
var G__36761 = cljs.core.rest(s__36713__$1);
s__36713__$1 = G__36761;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(points)));
})());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),points,new cljs.core.Keyword(null,"polygons","polygons",-266433925),polygons], null);
})();
/**
 * A 12-sided polyhedron with regular pentagonal faces
 */
wireframes.shapes.platonic_solids.dodecahedron = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,(function (){var iter__5649__auto__ = (function wireframes$shapes$platonic_solids$iter__36724(s__36725){
return (new cljs.core.LazySeq(null,(function (){
var s__36725__$1 = s__36725;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36725__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var x = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__36725__$1,x,xs__6385__auto__,temp__5825__auto__){
return (function wireframes$shapes$platonic_solids$iter__36724_$_iter__36726(s__36727){
return (new cljs.core.LazySeq(null,((function (s__36725__$1,x,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__36727__$1 = s__36727;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__36727__$1);
if(temp__5825__auto____$1){
var xs__6385__auto____$1 = temp__5825__auto____$1;
var y = cljs.core.first(xs__6385__auto____$1);
var iterys__5645__auto__ = ((function (s__36727__$1,s__36725__$1,y,xs__6385__auto____$1,temp__5825__auto____$1,x,xs__6385__auto__,temp__5825__auto__){
return (function wireframes$shapes$platonic_solids$iter__36724_$_iter__36726_$_iter__36728(s__36729){
return (new cljs.core.LazySeq(null,((function (s__36727__$1,s__36725__$1,y,xs__6385__auto____$1,temp__5825__auto____$1,x,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__36729__$1 = s__36729;
while(true){
var temp__5825__auto____$2 = cljs.core.seq(s__36729__$1);
if(temp__5825__auto____$2){
var s__36729__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__36729__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__36729__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__36731 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__36730 = (0);
while(true){
if((i__36730 < size__5648__auto__)){
var z = cljs.core._nth(c__5647__auto__,i__36730);
cljs.core.chunk_append(b__36731,wireframes.transform.point.cljs$core$IFn$_invoke$arity$3(x,y,z));

var G__36762 = (i__36730 + (1));
i__36730 = G__36762;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36731),wireframes$shapes$platonic_solids$iter__36724_$_iter__36726_$_iter__36728(cljs.core.chunk_rest(s__36729__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36731),null);
}
} else {
var z = cljs.core.first(s__36729__$2);
return cljs.core.cons(wireframes.transform.point.cljs$core$IFn$_invoke$arity$3(x,y,z),wireframes$shapes$platonic_solids$iter__36724_$_iter__36726_$_iter__36728(cljs.core.rest(s__36729__$2)));
}
} else {
return null;
}
break;
}
});})(s__36727__$1,s__36725__$1,y,xs__6385__auto____$1,temp__5825__auto____$1,x,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__36727__$1,s__36725__$1,y,xs__6385__auto____$1,temp__5825__auto____$1,x,xs__6385__auto__,temp__5825__auto__))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,wireframes$shapes$platonic_solids$iter__36724_$_iter__36726(cljs.core.rest(s__36727__$1)));
} else {
var G__36763 = cljs.core.rest(s__36727__$1);
s__36727__$1 = G__36763;
continue;
}
} else {
return null;
}
break;
}
});})(s__36725__$1,x,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__36725__$1,x,xs__6385__auto__,temp__5825__auto__))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,wireframes$shapes$platonic_solids$iter__36724(cljs.core.rest(s__36725__$1)));
} else {
var G__36764 = cljs.core.rest(s__36725__$1);
s__36725__$1 = G__36764;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null));
})(),(function (){var iter__5649__auto__ = (function wireframes$shapes$platonic_solids$iter__36732(s__36733){
return (new cljs.core.LazySeq(null,(function (){
var s__36733__$1 = s__36733;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36733__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var a = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__36733__$1,a,xs__6385__auto__,temp__5825__auto__){
return (function wireframes$shapes$platonic_solids$iter__36732_$_iter__36734(s__36735){
return (new cljs.core.LazySeq(null,((function (s__36733__$1,a,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__36735__$1 = s__36735;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__36735__$1);
if(temp__5825__auto____$1){
var s__36735__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36735__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__36735__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__36737 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__36736 = (0);
while(true){
if((i__36736 < size__5648__auto__)){
var b = cljs.core._nth(c__5647__auto__,i__36736);
cljs.core.chunk_append(b__36737,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__36736,s__36733__$1,b,c__5647__auto__,size__5648__auto__,b__36737,s__36735__$2,temp__5825__auto____$1,a,xs__6385__auto__,temp__5825__auto__){
return (function (p1__36723_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wireframes.transform.point,p1__36723_SHARP_);
});})(i__36736,s__36733__$1,b,c__5647__auto__,size__5648__auto__,b__36737,s__36735__$2,temp__5825__auto____$1,a,xs__6385__auto__,temp__5825__auto__))
,cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((3),(1),cljs.core.cycle(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),a,b], null))))));

var G__36765 = (i__36736 + (1));
i__36736 = G__36765;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36737),wireframes$shapes$platonic_solids$iter__36732_$_iter__36734(cljs.core.chunk_rest(s__36735__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36737),null);
}
} else {
var b = cljs.core.first(s__36735__$2);
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__36733__$1,b,s__36735__$2,temp__5825__auto____$1,a,xs__6385__auto__,temp__5825__auto__){
return (function (p1__36723_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wireframes.transform.point,p1__36723_SHARP_);
});})(s__36733__$1,b,s__36735__$2,temp__5825__auto____$1,a,xs__6385__auto__,temp__5825__auto__))
,cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((3),(1),cljs.core.cycle(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),a,b], null))))),wireframes$shapes$platonic_solids$iter__36732_$_iter__36734(cljs.core.rest(s__36735__$2)));
}
} else {
return null;
}
break;
}
});})(s__36733__$1,a,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__36733__$1,a,xs__6385__auto__,temp__5825__auto__))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- wireframes.shapes.platonic_solids.rho),wireframes.shapes.platonic_solids.rho], null)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,wireframes$shapes$platonic_solids$iter__36732(cljs.core.rest(s__36733__$1)));
} else {
var G__36766 = cljs.core.rest(s__36733__$1);
s__36733__$1 = G__36766;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((-1) / wireframes.shapes.platonic_solids.rho),((1) / wireframes.shapes.platonic_solids.rho)], null));
})())),new cljs.core.Keyword(null,"polygons","polygons",-266433925),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(14),(8),(0),(10),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(14),(8),(4),(13),(6)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(9),(0),(8),(4)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(9),(1),(11),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(10),(0),(9),(1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(10),(2),(12),(3)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(17),(11),(1),(16),(3)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(17),(11),(5),(19),(7)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(12),(2),(14),(6)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(12),(3),(17),(7)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(19),(13),(4),(15),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(19),(13),(6),(18),(7)], null)], null)], null)], null);
/**
 * A 20-sided polyhedron with triangular faces
 */
wireframes.shapes.platonic_solids.icosahedron = (function (){var points = cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5649__auto__ = (function wireframes$shapes$platonic_solids$iter__36739(s__36740){
return (new cljs.core.LazySeq(null,(function (){
var s__36740__$1 = s__36740;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36740__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var x = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__36740__$1,x,xs__6385__auto__,temp__5825__auto__){
return (function wireframes$shapes$platonic_solids$iter__36739_$_iter__36741(s__36742){
return (new cljs.core.LazySeq(null,((function (s__36740__$1,x,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__36742__$1 = s__36742;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__36742__$1);
if(temp__5825__auto____$1){
var s__36742__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36742__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__36742__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__36744 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__36743 = (0);
while(true){
if((i__36743 < size__5648__auto__)){
var y = cljs.core._nth(c__5647__auto__,i__36743);
cljs.core.chunk_append(b__36744,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wireframes.transform.point.cljs$core$IFn$_invoke$arity$3((0),x,y),wireframes.transform.point.cljs$core$IFn$_invoke$arity$3(x,y,(0)),wireframes.transform.point.cljs$core$IFn$_invoke$arity$3(y,(0),x)], null));

var G__36767 = (i__36743 + (1));
i__36743 = G__36767;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36744),wireframes$shapes$platonic_solids$iter__36739_$_iter__36741(cljs.core.chunk_rest(s__36742__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36744),null);
}
} else {
var y = cljs.core.first(s__36742__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wireframes.transform.point.cljs$core$IFn$_invoke$arity$3((0),x,y),wireframes.transform.point.cljs$core$IFn$_invoke$arity$3(x,y,(0)),wireframes.transform.point.cljs$core$IFn$_invoke$arity$3(y,(0),x)], null),wireframes$shapes$platonic_solids$iter__36739_$_iter__36741(cljs.core.rest(s__36742__$2)));
}
} else {
return null;
}
break;
}
});})(s__36740__$1,x,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__36740__$1,x,xs__6385__auto__,temp__5825__auto__))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wireframes.shapes.platonic_solids.rho,wireframes.shapes.platonic_solids._rho], null)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,wireframes$shapes$platonic_solids$iter__36739(cljs.core.rest(s__36740__$1)));
} else {
var G__36768 = cljs.core.rest(s__36740__$1);
s__36740__$1 = G__36768;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null));
})()));
var polygons = cljs.core.vec((function (){var iter__5649__auto__ = (function wireframes$shapes$platonic_solids$iter__36745(s__36746){
return (new cljs.core.LazySeq(null,(function (){
var s__36746__$1 = s__36746;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36746__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var a = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__36746__$1,a,xs__6385__auto__,temp__5825__auto__,points){
return (function wireframes$shapes$platonic_solids$iter__36745_$_iter__36747(s__36748){
return (new cljs.core.LazySeq(null,((function (s__36746__$1,a,xs__6385__auto__,temp__5825__auto__,points){
return (function (){
var s__36748__$1 = s__36748;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__36748__$1);
if(temp__5825__auto____$1){
var xs__6385__auto____$1 = temp__5825__auto____$1;
var b = cljs.core.first(xs__6385__auto____$1);
var iterys__5645__auto__ = ((function (s__36748__$1,s__36746__$1,b,xs__6385__auto____$1,temp__5825__auto____$1,a,xs__6385__auto__,temp__5825__auto__,points){
return (function wireframes$shapes$platonic_solids$iter__36745_$_iter__36747_$_iter__36749(s__36750){
return (new cljs.core.LazySeq(null,((function (s__36748__$1,s__36746__$1,b,xs__6385__auto____$1,temp__5825__auto____$1,a,xs__6385__auto__,temp__5825__auto__,points){
return (function (){
var s__36750__$1 = s__36750;
while(true){
var temp__5825__auto____$2 = cljs.core.seq(s__36750__$1);
if(temp__5825__auto____$2){
var s__36750__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__36750__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__36750__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__36752 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__36751 = (0);
while(true){
if((i__36751 < size__5648__auto__)){
var c = cljs.core._nth(c__5647__auto__,i__36751);
if(((wireframes.shapes.platonic_solids._EQ_approx(wireframes.transform.distance((points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(a) : points.call(null,a)),(points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(b) : points.call(null,b))),(2))) && (((wireframes.shapes.platonic_solids._EQ_approx(wireframes.transform.distance((points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(a) : points.call(null,a)),(points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(c) : points.call(null,c))),(2))) && (wireframes.shapes.platonic_solids._EQ_approx(wireframes.transform.distance((points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(b) : points.call(null,b)),(points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(c) : points.call(null,c))),(2))))))){
cljs.core.chunk_append(b__36752,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null)], null));

var G__36769 = (i__36751 + (1));
i__36751 = G__36769;
continue;
} else {
var G__36770 = (i__36751 + (1));
i__36751 = G__36770;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36752),wireframes$shapes$platonic_solids$iter__36745_$_iter__36747_$_iter__36749(cljs.core.chunk_rest(s__36750__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36752),null);
}
} else {
var c = cljs.core.first(s__36750__$2);
if(((wireframes.shapes.platonic_solids._EQ_approx(wireframes.transform.distance((points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(a) : points.call(null,a)),(points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(b) : points.call(null,b))),(2))) && (((wireframes.shapes.platonic_solids._EQ_approx(wireframes.transform.distance((points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(a) : points.call(null,a)),(points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(c) : points.call(null,c))),(2))) && (wireframes.shapes.platonic_solids._EQ_approx(wireframes.transform.distance((points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(b) : points.call(null,b)),(points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(c) : points.call(null,c))),(2))))))){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null)], null),wireframes$shapes$platonic_solids$iter__36745_$_iter__36747_$_iter__36749(cljs.core.rest(s__36750__$2)));
} else {
var G__36771 = cljs.core.rest(s__36750__$2);
s__36750__$1 = G__36771;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__36748__$1,s__36746__$1,b,xs__6385__auto____$1,temp__5825__auto____$1,a,xs__6385__auto__,temp__5825__auto__,points))
,null,null));
});})(s__36748__$1,s__36746__$1,b,xs__6385__auto____$1,temp__5825__auto____$1,a,xs__6385__auto__,temp__5825__auto__,points))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(b)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,wireframes$shapes$platonic_solids$iter__36745_$_iter__36747(cljs.core.rest(s__36748__$1)));
} else {
var G__36772 = cljs.core.rest(s__36748__$1);
s__36748__$1 = G__36772;
continue;
}
} else {
return null;
}
break;
}
});})(s__36746__$1,a,xs__6385__auto__,temp__5825__auto__,points))
,null,null));
});})(s__36746__$1,a,xs__6385__auto__,temp__5825__auto__,points))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(a)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,wireframes$shapes$platonic_solids$iter__36745(cljs.core.rest(s__36746__$1)));
} else {
var G__36773 = cljs.core.rest(s__36746__$1);
s__36746__$1 = G__36773;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(points)));
})());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),points,new cljs.core.Keyword(null,"polygons","polygons",-266433925),polygons], null);
})();

//# sourceMappingURL=wireframes.shapes.platonic_solids.js.map
