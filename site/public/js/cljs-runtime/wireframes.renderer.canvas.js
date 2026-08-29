goog.provide('wireframes.renderer.canvas');
wireframes.renderer.canvas.walk_polygon = (function wireframes$renderer$canvas$walk_polygon(ctx,points_2d,polygon){
var vertices = new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(polygon);
var vec__30840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(points_2d,cljs.core.first(vertices));
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30840,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30840,(1),null);
monet.canvas.move_to(monet.canvas.begin_path(ctx),ax,ay);

var vs = cljs.core.next(vertices);
while(true){
if((vs == null)){
return monet.canvas.close_path(ctx);
} else {
var vec__30849 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(points_2d,cljs.core.first(vs));
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30849,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30849,(1),null);
monet.canvas.line_to(ctx,bx,by);

var G__30951 = cljs.core.next(vs);
vs = G__30951;
continue;
}
break;
}
});
wireframes.renderer.canvas.create_polygon_renderer = (function wireframes$renderer$canvas$create_polygon_renderer(ctx,points_2d,fragment_shader_fn){
return (function (polygon){
var vec__30863 = (fragment_shader_fn.cljs$core$IFn$_invoke$arity$1 ? fragment_shader_fn.cljs$core$IFn$_invoke$arity$1(polygon) : fragment_shader_fn.call(null,polygon));
var fill_color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30863,(0),null);
var edge_color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30863,(1),null);
return monet.canvas.stroke(monet.canvas.fill(monet.canvas.stroke_style(monet.canvas.fill_style(wireframes.renderer.canvas.walk_polygon(ctx,points_2d,polygon),fill_color),edge_color)));
});
});
wireframes.renderer.canvas.draw_solid = (function wireframes$renderer$canvas$draw_solid(p__30866,ctx){
var map__30869 = p__30866;
var map__30869__$1 = cljs.core.__destructure_map(map__30869);
var focal_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30869__$1,new cljs.core.Keyword(null,"focal-length","focal-length",-1978298454));
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30869__$1,new cljs.core.Keyword(null,"transform","transform",1381301764));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30869__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var color_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30869__$1,new cljs.core.Keyword(null,"color-fn","color-fn",1518098073));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30869__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var points_3d_30962 = wireframes.renderer.get_3d_points(transform,shape);
var points_2d_30963 = wireframes.renderer.get_2d_points(focal_length,points_3d_30962);
var key_fn_30964 = wireframes.renderer.priority_fill(cljs.core.memoize)(points_3d_30962);
var render_fn_30965 = wireframes.renderer.canvas.create_polygon_renderer(ctx,points_2d_30963,wireframes.renderer.shader(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape),points_3d_30962,color_fn));
var seq__30894_30966 = cljs.core.seq(wireframes.renderer.order_polygons(style,key_fn_30964,shape));
var chunk__30895_30967 = null;
var count__30896_30968 = (0);
var i__30897_30969 = (0);
while(true){
if((i__30897_30969 < count__30896_30968)){
var polygon_30970 = chunk__30895_30967.cljs$core$IIndexed$_nth$arity$2(null,i__30897_30969);
render_fn_30965(polygon_30970);


var G__30971 = seq__30894_30966;
var G__30972 = chunk__30895_30967;
var G__30973 = count__30896_30968;
var G__30974 = (i__30897_30969 + (1));
seq__30894_30966 = G__30971;
chunk__30895_30967 = G__30972;
count__30896_30968 = G__30973;
i__30897_30969 = G__30974;
continue;
} else {
var temp__5825__auto___30975 = cljs.core.seq(seq__30894_30966);
if(temp__5825__auto___30975){
var seq__30894_30976__$1 = temp__5825__auto___30975;
if(cljs.core.chunked_seq_QMARK_(seq__30894_30976__$1)){
var c__5694__auto___30977 = cljs.core.chunk_first(seq__30894_30976__$1);
var G__30978 = cljs.core.chunk_rest(seq__30894_30976__$1);
var G__30979 = c__5694__auto___30977;
var G__30980 = cljs.core.count(c__5694__auto___30977);
var G__30981 = (0);
seq__30894_30966 = G__30978;
chunk__30895_30967 = G__30979;
count__30896_30968 = G__30980;
i__30897_30969 = G__30981;
continue;
} else {
var polygon_30982 = cljs.core.first(seq__30894_30976__$1);
render_fn_30965(polygon_30982);


var G__30983 = cljs.core.next(seq__30894_30976__$1);
var G__30984 = null;
var G__30985 = (0);
var G__30986 = (0);
seq__30894_30966 = G__30983;
chunk__30895_30967 = G__30984;
count__30896_30968 = G__30985;
i__30897_30969 = G__30986;
continue;
}
} else {
}
}
break;
}

return ctx;
});
wireframes.renderer.canvas.__GT_canvas = (function wireframes$renderer$canvas$__GT_canvas(ctx){
return (function (draw_fn,p__30924){
var vec__30931 = p__30924;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30931,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30931,(1),null);
var s = wireframes.renderer.compute_scale(w,h);
var sw = (0.5 / w);
return monet.canvas.restore((function (){var G__30943 = monet.canvas.stroke_width(monet.canvas.scale(monet.canvas.translate(monet.canvas.stroke_style(monet.canvas.save(ctx),new cljs.core.Keyword(null,"black","black",1294279647)),(w / (2)),(h / (2))),s,s),sw);
return (draw_fn.cljs$core$IFn$_invoke$arity$1 ? draw_fn.cljs$core$IFn$_invoke$arity$1(G__30943) : draw_fn.call(null,G__30943));
})());
});
});

//# sourceMappingURL=wireframes.renderer.canvas.js.map
