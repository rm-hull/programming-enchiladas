goog.provide('wireframes.renderer.color');
wireframes.renderer.color.tee = (function wireframes$renderer$color$tee(f){
return (function (x){
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));

return x;
});
});
wireframes.renderer.color.dup = (function wireframes$renderer$color$dup(x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
});
wireframes.renderer.color.black_edge = (function (){var black = inkspot.color.coerce(new cljs.core.Keyword(null,"black","black",1294279647));
return (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,black], null);
});
})();
/**
 * Adjusts the opacity of the given color, which can be one of the following
 * keywords:
 * 
 *    :transparent (0% opacity),
 *    :translucent (60% opacity),
 *    :opaque (100% opacity)
 * 
 *   Alternatively it can be specified as a float in the range 0.0 to 1.0
 */
wireframes.renderer.color.adjust_color = (function wireframes$renderer$color$adjust_color(color,opacity){
var alpha = (((opacity instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transparent","transparent",-2073609949),0.0,new cljs.core.Keyword(null,"translucent","translucent",-1428111933),0.6,new cljs.core.Keyword(null,"opaque","opaque",-1243552654),1.0], null),opacity,1.0):(((((opacity >= 0.0)) && (true)))?opacity:1.0
));
return inkspot.color.coerce(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [inkspot.color.red(color),inkspot.color.green(color),inkspot.color.blue(color),alpha], null));
});
wireframes.renderer.color.flat_color = (function wireframes$renderer$color$flat_color(var_args){
var args__5903__auto__ = [];
var len__5897__auto___32299 = arguments.length;
var i__5898__auto___32300 = (0);
while(true){
if((i__5898__auto___32300 < len__5897__auto___32299)){
args__5903__auto__.push((arguments[i__5898__auto___32300]));

var G__32301 = (i__5898__auto___32300 + (1));
i__5898__auto___32300 = G__32301;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return wireframes.renderer.color.flat_color.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(wireframes.renderer.color.flat_color.cljs$core$IFn$_invoke$arity$variadic = (function (color,p__32133){
var vec__32139 = p__32133;
var opacity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32139,(0),null);

var adjusted_color = (cljs.core.truth_(opacity)?wireframes.renderer.color.adjust_color(color,opacity):color);
return (function (points_3d,transformed_points,polygon){
return adjusted_color;
});
}));

(wireframes.renderer.color.flat_color.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(wireframes.renderer.color.flat_color.cljs$lang$applyTo = (function (seq32115){
var G__32119 = cljs.core.first(seq32115);
var seq32115__$1 = cljs.core.next(seq32115);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32119,seq32115__$1);
}));

wireframes.renderer.color.get_z = (function wireframes$renderer$color$get_z(p__32204){
var vec__32206 = p__32204;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32206,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32206,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32206,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32206,(3),null);
return z;
});
wireframes.renderer.color.spectral_z = (function wireframes$renderer$color$spectral_z(low,high){

var colors = inkspot.color_chart.color_mapper(cljs.core.reverse(inkspot.color_chart.spectrum((100))),low,high);
return (function (points_3d,transformed_points,polygon){
return colors((0.33 * cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(wireframes.renderer.color.get_z,points_3d),new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(polygon)))));
});
});
/**
 * Creates a [fill edge] fragment shader function which colors polygons
 * with a flat color fill with a black outline.
 */
wireframes.renderer.color.wireframe = (function wireframes$renderer$color$wireframe(var_args){
var args__5903__auto__ = [];
var len__5897__auto___32308 = arguments.length;
var i__5898__auto___32309 = (0);
while(true){
if((i__5898__auto___32309 < len__5897__auto___32308)){
args__5903__auto__.push((arguments[i__5898__auto___32309]));

var G__32310 = (i__5898__auto___32309 + (1));
i__5898__auto___32309 = G__32310;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return wireframes.renderer.color.wireframe.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(wireframes.renderer.color.wireframe.cljs$core$IFn$_invoke$arity$variadic = (function (p__32239){
var vec__32242 = p__32239;
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32242,(0),null);
var opacity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32242,(1),null);
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(wireframes.renderer.color.black_edge,wireframes.renderer.color.flat_color.cljs$core$IFn$_invoke$arity$variadic((function (){var or__5162__auto__ = color;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"white","white",-483998618);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opacity], 0)));
}));

(wireframes.renderer.color.wireframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(wireframes.renderer.color.wireframe.cljs$lang$applyTo = (function (seq32231){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32231));
}));

/**
 * Creates a [fill edge] fragment shader function which colors polygons
 * with a shaded color and no perceptible outline (i.e. the same color as
 * the fill), with a light source at the given position.
 */
wireframes.renderer.color.solid = (function wireframes$renderer$color$solid(var_args){
var args__5903__auto__ = [];
var len__5897__auto___32311 = arguments.length;
var i__5898__auto___32312 = (0);
while(true){
if((i__5898__auto___32312 < len__5897__auto___32311)){
args__5903__auto__.push((arguments[i__5898__auto___32312]));

var G__32313 = (i__5898__auto___32312 + (1));
i__5898__auto___32312 = G__32313;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return wireframes.renderer.color.solid.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(wireframes.renderer.color.solid.cljs$core$IFn$_invoke$arity$variadic = (function (p__32270){
var vec__32272 = p__32270;
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32272,(0),null);
var lighting_position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32272,(1),null);
var color__$1 = inkspot.color.coerce((function (){var or__5162__auto__ = color;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"white","white",-483998618);
}
})());
var rgba = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [inkspot.color.red(color__$1),inkspot.color.green(color__$1),inkspot.color.blue(color__$1),inkspot.color.alpha(color__$1)], null);
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(wireframes.renderer.color.dup,wireframes.renderer.lighting.positional_lighting_decorator((function (){var or__5162__auto__ = lighting_position;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return wireframes.renderer.lighting.default_position;
}
})(),wireframes.renderer.color.flat_color(rgba)));
}));

(wireframes.renderer.color.solid.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(wireframes.renderer.color.solid.cljs$lang$applyTo = (function (seq32249){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32249));
}));


//# sourceMappingURL=wireframes.renderer.color.js.map
