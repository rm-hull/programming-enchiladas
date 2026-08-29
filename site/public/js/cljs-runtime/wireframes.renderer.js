goog.provide('wireframes.renderer');
wireframes.renderer.shader = (function wireframes$renderer$shader(points_3d,transformed_points,color_fn){
return (function (polygon){
return (color_fn.cljs$core$IFn$_invoke$arity$3 ? color_fn.cljs$core$IFn$_invoke$arity$3(points_3d,transformed_points,polygon) : color_fn.call(null,points_3d,transformed_points,polygon));
});
});
wireframes.renderer.priority_fill = (function wireframes$renderer$priority_fill(cache_fn){
return (function (points_3d){
var G__30743 = (function (polygon){
var acc = 0.0;
var count = (0);
var points = new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(polygon);
while(true){
if(cljs.core.empty_QMARK_(points)){
return (acc / count);
} else {
var vec__30745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(points_3d,cljs.core.first(points));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30745,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30745,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30745,(2),null);
var G__30760 = (acc - z);
var G__30761 = (count + (1));
var G__30762 = cljs.core.rest(points);
acc = G__30760;
count = G__30761;
points = G__30762;
continue;
}
break;
}
});
return (cache_fn.cljs$core$IFn$_invoke$arity$1 ? cache_fn.cljs$core$IFn$_invoke$arity$1(G__30743) : cache_fn.call(null,G__30743));
});
});
wireframes.renderer.get_3d_points = (function wireframes$renderer$get_3d_points(transform,shape){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(wireframes.transform.transform_point(transform),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape));
});
wireframes.renderer.get_2d_points = (function wireframes$renderer$get_2d_points(focal_length,points_3d){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(wireframes.transform.perspective(focal_length),points_3d);
});
wireframes.renderer.compute_scale = (function wireframes$renderer$compute_scale(w,h){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2((w / (2)),(h / (2)));
});
wireframes.renderer.order_polygons = (function wireframes$renderer$order_polygons(style,keyfn,shape){
var polygons = new cljs.core.Keyword(null,"polygons","polygons",-266433925).cljs$core$IFn$_invoke$arity$1(shape);
var pred__30755 = cljs.core._EQ_;
var expr__30756 = style;
if(cljs.core.truth_((pred__30755.cljs$core$IFn$_invoke$arity$2 ? pred__30755.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transparent","transparent",-2073609949),expr__30756) : pred__30755.call(null,new cljs.core.Keyword(null,"transparent","transparent",-2073609949),expr__30756)))){
return polygons;
} else {
if(cljs.core.truth_((pred__30755.cljs$core$IFn$_invoke$arity$2 ? pred__30755.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shaded","shaded",561405058),expr__30756) : pred__30755.call(null,new cljs.core.Keyword(null,"shaded","shaded",561405058),expr__30756)))){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(keyfn,wireframes.transform.reduce_polygons(polygons));
} else {
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(keyfn,polygons);
}
}
});

//# sourceMappingURL=wireframes.renderer.js.map
