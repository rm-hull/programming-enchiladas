goog.provide('turtle.renderer.canvas');
turtle.renderer.canvas.draw_op = (function turtle$renderer$canvas$draw_op(state){
if(cljs.core.truth_((function (){var or__5162__auto__ = new cljs.core.Keyword(null,"restore-point","restore-point",-1377063358).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"move","move",-2110884309).cljs$core$IFn$_invoke$arity$1(state);
}
})())){
return monet.canvas.move_to;
} else {
return monet.canvas.line_to;
}
});
turtle.renderer.canvas.draw_path_segments_BANG_ = (function turtle$renderer$canvas$draw_path_segments_BANG_(ctx,data){
monet.canvas.begin_path(ctx);

var data__$1 = data;
var x1 = 0.0;
var y1 = 0.0;
while(true){
if((data__$1 == null)){
return monet.canvas.close_path(monet.canvas.stroke(ctx));
} else {
var state = cljs.core.first(data__$1);
var vec__30259 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(state);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30259,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30259,(1),null);
var temp__5825__auto___30293 = new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5825__auto___30293)){
var color_30294 = temp__5825__auto___30293;
monet.canvas.move_to(monet.canvas.begin_path(monet.canvas.stroke(monet.canvas.fill(monet.canvas.fill_style(monet.canvas.close_path(ctx),color_30294)))),x1,y1);
} else {
}

var temp__5825__auto___30295 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5825__auto___30295)){
var color_30298 = temp__5825__auto___30295;
monet.canvas.move_to(monet.canvas.begin_path(monet.canvas.stroke_style(monet.canvas.close_path(monet.canvas.stroke(ctx)),color_30298)),x1,y1);
} else {
}

cljs.core.apply.cljs$core$IFn$_invoke$arity$3(turtle.renderer.canvas.draw_op(state),ctx,new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(state));

var G__30303 = cljs.core.next(data__$1);
var G__30304 = x2;
var G__30305 = y2;
data__$1 = G__30303;
x1 = G__30304;
y1 = G__30305;
continue;
}
break;
}
});
turtle.renderer.canvas.__GT_canvas = (function turtle$renderer$canvas$__GT_canvas(ctx){
return (function (data,p__30268,bounds,matrix){
var vec__30269 = p__30268;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30269,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30269,(1),null);
console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["screen-size",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null)], 0)));

console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["bounds",bounds], 0)));

console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["matrix",matrix], 0)));

return turtle.renderer.canvas.draw_path_segments_BANG_(monet.canvas.stroke_cap(monet.canvas.stroke_width(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(monet.canvas.transform,ctx,matrix),(3)),new cljs.core.Keyword(null,"square","square",812434677)),data);
});
});

//# sourceMappingURL=turtle.renderer.canvas.js.map
