goog.provide('demo.rm_hull_7145520.core');
demo.rm_hull_7145520.core.r = parseFloat((enchilada.value_of.cljs$core$IFn$_invoke$arity$2 ? enchilada.value_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"r","r",-471384190),3.0) : enchilada.value_of.call(null,new cljs.core.Keyword(null,"r","r",-471384190),3.0)));
demo.rm_hull_7145520.core.width = cljs.core.first((enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0 ? enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0() : enchilada.canvas_size.call(null)));
demo.rm_hull_7145520.core.height = cljs.core.second((enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0 ? enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0() : enchilada.canvas_size.call(null)));
demo.rm_hull_7145520.core.stepper = demo.rm_hull_7145520.rules.step(demo.rm_hull_7145520.core.width,demo.rm_hull_7145520.core.height,demo.rm_hull_7145520.core.r);
demo.rm_hull_7145520.core.rng = cljs.core.range.cljs$core$IFn$_invoke$arity$1(parseInt((enchilada.value_of.cljs$core$IFn$_invoke$arity$2 ? enchilada.value_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boids","boids",2106521410),(75)) : enchilada.value_of.call(null,new cljs.core.Keyword(null,"boids","boids",2106521410),(75)))));
demo.rm_hull_7145520.core.pi_over_2 = (Math.PI / (2));
demo.rm_hull_7145520.core.boids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (){
return demo.rm_hull_7145520.rules.make_boid((demo.rm_hull_7145520.core.width / (2)),(demo.rm_hull_7145520.core.height / (2)));
}),demo.rm_hull_7145520.core.rng);
demo.rm_hull_7145520.core.render_BANG_ = (function demo$rm_hull_7145520$core$render_BANG_(ctx,boids,size){
monet.canvas.fill_style(monet.canvas.stroke_style(monet.canvas.fill_rect(monet.canvas.fill_style(ctx,new cljs.core.Keyword(null,"white","white",-483998618)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"w","w",354169001),demo.rm_hull_7145520.core.width,new cljs.core.Keyword(null,"h","h",1109658740),demo.rm_hull_7145520.core.height], null)),new cljs.core.Keyword(null,"darkcyan","darkcyan",-1999655442)),new cljs.core.Keyword(null,"lightcyan","lightcyan",-481418530));

var seq__25689 = cljs.core.seq(boids);
var chunk__25691 = null;
var count__25692 = (0);
var i__25693 = (0);
while(true){
if((i__25693 < count__25692)){
var boid = chunk__25691.cljs$core$IIndexed$_nth$arity$2(null,i__25693);
var vec__25702_25730 = new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(boid);
var x_25731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25702_25730,(0),null);
var y_25732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25702_25730,(1),null);
var theta_25733 = (demo.rm_hull_7145520.vector.heading(new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(boid)) + demo.rm_hull_7145520.core.pi_over_2);
monet.canvas.restore(monet.canvas.stroke(monet.canvas.fill(monet.canvas.close_path(monet.canvas.line_to(monet.canvas.line_to(monet.canvas.move_to(monet.canvas.begin_path(monet.canvas.rotate(monet.canvas.translate(monet.canvas.save(ctx),x_25731,y_25732),theta_25733)),(0),(size * (-2))),(- size),(size * (2))),size,(size * (2)))))));


var G__25740 = seq__25689;
var G__25741 = chunk__25691;
var G__25742 = count__25692;
var G__25743 = (i__25693 + (1));
seq__25689 = G__25740;
chunk__25691 = G__25741;
count__25692 = G__25742;
i__25693 = G__25743;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__25689);
if(temp__5825__auto__){
var seq__25689__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25689__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__25689__$1);
var G__25744 = cljs.core.chunk_rest(seq__25689__$1);
var G__25745 = c__5694__auto__;
var G__25746 = cljs.core.count(c__5694__auto__);
var G__25747 = (0);
seq__25689 = G__25744;
chunk__25691 = G__25745;
count__25692 = G__25746;
i__25693 = G__25747;
continue;
} else {
var boid = cljs.core.first(seq__25689__$1);
var vec__25705_25748 = new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(boid);
var x_25749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25705_25748,(0),null);
var y_25750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25705_25748,(1),null);
var theta_25751 = (demo.rm_hull_7145520.vector.heading(new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(boid)) + demo.rm_hull_7145520.core.pi_over_2);
monet.canvas.restore(monet.canvas.stroke(monet.canvas.fill(monet.canvas.close_path(monet.canvas.line_to(monet.canvas.line_to(monet.canvas.move_to(monet.canvas.begin_path(monet.canvas.rotate(monet.canvas.translate(monet.canvas.save(ctx),x_25749,y_25750),theta_25751)),(0),(size * (-2))),(- size),(size * (2))),size,(size * (2)))))));


var G__25752 = cljs.core.next(seq__25689__$1);
var G__25753 = null;
var G__25754 = (0);
var G__25755 = (0);
seq__25689 = G__25752;
chunk__25691 = G__25753;
count__25692 = G__25754;
i__25693 = G__25755;
continue;
}
} else {
return null;
}
}
break;
}
});
demo.rm_hull_7145520.core.update = (function demo$rm_hull_7145520$core$update(demo.rm_hull_7145520.core,idx){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(demo.rm_hull_7145520.core.boids,idx,demo.rm_hull_7145520.core.stepper((demo.rm_hull_7145520.core.boids.cljs$core$IFn$_invoke$arity$1 ? demo.rm_hull_7145520.core.boids.cljs$core$IFn$_invoke$arity$1(idx) : demo.rm_hull_7145520.core.boids.call(null,idx)),demo.rm_hull_7145520.core.boids));
});
demo.rm_hull_7145520.core.animate = (function demo$rm_hull_7145520$core$animate(ctx,boids,size){
var loop = (function demo$rm_hull_7145520$core$animate_$_loop(state){
return (function (){
var G__25716_25756 = demo$rm_hull_7145520$core$animate_$_loop(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(demo.rm_hull_7145520.core.update,state,demo.rm_hull_7145520.core.rng));
(monet.core.animation_frame.cljs$core$IFn$_invoke$arity$1 ? monet.core.animation_frame.cljs$core$IFn$_invoke$arity$1(G__25716_25756) : monet.core.animation_frame.call(null,G__25716_25756));

return demo.rm_hull_7145520.core.render_BANG_(ctx,state,size);
});
});
var fexpr__25721 = loop(boids);
return (fexpr__25721.cljs$core$IFn$_invoke$arity$0 ? fexpr__25721.cljs$core$IFn$_invoke$arity$0() : fexpr__25721.call(null));
});
enchilada.core.show((enchilada.canvas.cljs$core$IFn$_invoke$arity$0 ? enchilada.canvas.cljs$core$IFn$_invoke$arity$0() : enchilada.canvas.call(null)));
demo.rm_hull_7145520.core.animate(enchilada.ctx,demo.rm_hull_7145520.core.boids,demo.rm_hull_7145520.core.r);

//# sourceMappingURL=demo.rm_hull_7145520.core.js.map
