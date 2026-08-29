goog.provide('wireframes.renderer.lighting');
wireframes.renderer.lighting.default_position = wireframes.transform.point.cljs$core$IFn$_invoke$arity$3((10000),(-10000),(-1000000));
wireframes.renderer.lighting.brightness = (function wireframes$renderer$lighting$brightness(i,c){
return inkspot.color.coerce(inkspot.color.scale(c,i));
});
wireframes.renderer.lighting.compute_lighting = (function wireframes$renderer$lighting$compute_lighting(lighting_position){
var lx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lighting_position,(0));
var ly = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lighting_position,(1));
var lz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lighting_position,(2));
var v = Math.sqrt((((lx * lx) + (ly * ly)) + (lz * lz)));
return (function (normal){
var nx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(normal,(0));
var ny = cljs.core.get.cljs$core$IFn$_invoke$arity$2(normal,(1));
var nz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(normal,(2));
var dp = (((nx * lx) + (ny * ly)) + (nz * lz));
return Math.abs((dp / (v * Math.sqrt((((nx * nx) + (ny * ny)) + (nz * nz))))));
});
});
wireframes.renderer.lighting.positional_lighting_decorator = (function wireframes$renderer$lighting$positional_lighting_decorator(lighting_position,color_fn){
var lighting_fn = wireframes.renderer.lighting.compute_lighting(lighting_position);
return (function (points_3d,transformed_points,polygon){
var intensity = lighting_fn(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wireframes.transform.normal,cljs.core.map.cljs$core$IFn$_invoke$arity$2(transformed_points,new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(polygon))));
return wireframes.renderer.lighting.brightness(intensity,(color_fn.cljs$core$IFn$_invoke$arity$3 ? color_fn.cljs$core$IFn$_invoke$arity$3(points_3d,transformed_points,polygon) : color_fn.call(null,points_3d,transformed_points,polygon)));
});
});

//# sourceMappingURL=wireframes.renderer.lighting.js.map
