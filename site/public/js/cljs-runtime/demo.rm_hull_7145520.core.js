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

var seq__25170 = cljs.core.seq(boids);
var chunk__25172 = null;
var count__25173 = (0);
var i__25174 = (0);
while(true){
if((i__25174 < count__25173)){
var boid = chunk__25172.cljs$core$IIndexed$_nth$arity$2(null,i__25174);
var vec__25193_25274 = new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(boid);
var x_25275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25193_25274,(0),null);
var y_25276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25193_25274,(1),null);
var theta_25277 = (demo.rm_hull_7145520.vector.heading(new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(boid)) + demo.rm_hull_7145520.core.pi_over_2);
monet.canvas.restore(monet.canvas.stroke(monet.canvas.fill(monet.canvas.close_path(monet.canvas.line_to(monet.canvas.line_to(monet.canvas.move_to(monet.canvas.begin_path(monet.canvas.rotate(monet.canvas.translate(monet.canvas.save(ctx),x_25275,y_25276),theta_25277)),(0),(size * (-2))),(- size),(size * (2))),size,(size * (2)))))));


var G__25304 = seq__25170;
var G__25305 = chunk__25172;
var G__25306 = count__25173;
var G__25307 = (i__25174 + (1));
seq__25170 = G__25304;
chunk__25172 = G__25305;
count__25173 = G__25306;
i__25174 = G__25307;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__25170);
if(temp__5825__auto__){
var seq__25170__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25170__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__25170__$1);
var G__25321 = cljs.core.chunk_rest(seq__25170__$1);
var G__25322 = c__5694__auto__;
var G__25323 = cljs.core.count(c__5694__auto__);
var G__25324 = (0);
seq__25170 = G__25321;
chunk__25172 = G__25322;
count__25173 = G__25323;
i__25174 = G__25324;
continue;
} else {
var boid = cljs.core.first(seq__25170__$1);
var vec__25202_25327 = new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(boid);
var x_25328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25202_25327,(0),null);
var y_25329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25202_25327,(1),null);
var theta_25330 = (demo.rm_hull_7145520.vector.heading(new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(boid)) + demo.rm_hull_7145520.core.pi_over_2);
monet.canvas.restore(monet.canvas.stroke(monet.canvas.fill(monet.canvas.close_path(monet.canvas.line_to(monet.canvas.line_to(monet.canvas.move_to(monet.canvas.begin_path(monet.canvas.rotate(monet.canvas.translate(monet.canvas.save(ctx),x_25328,y_25329),theta_25330)),(0),(size * (-2))),(- size),(size * (2))),size,(size * (2)))))));


var G__25365 = cljs.core.next(seq__25170__$1);
var G__25366 = null;
var G__25367 = (0);
var G__25368 = (0);
seq__25170 = G__25365;
chunk__25172 = G__25366;
count__25173 = G__25367;
i__25174 = G__25368;
continue;
}
} else {
return null;
}
}
break;
}
});
demo.rm_hull_7145520.core.update = (function demo$rm_hull_7145520$core$update(boids,idx){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(boids,idx,demo.rm_hull_7145520.core.stepper((boids.cljs$core$IFn$_invoke$arity$1 ? boids.cljs$core$IFn$_invoke$arity$1(idx) : boids.call(null,idx)),boids));
});
demo.rm_hull_7145520.core.animate = (function demo$rm_hull_7145520$core$animate(ctx,boids,size){
var loop = (function demo$rm_hull_7145520$core$animate_$_loop(state){
return (function (){
var G__25227_25386 = demo$rm_hull_7145520$core$animate_$_loop(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(demo.rm_hull_7145520.core.update,state,demo.rm_hull_7145520.core.rng));
(monet.core.animation_frame.cljs$core$IFn$_invoke$arity$1 ? monet.core.animation_frame.cljs$core$IFn$_invoke$arity$1(G__25227_25386) : monet.core.animation_frame.call(null,G__25227_25386));

return demo.rm_hull_7145520.core.render_BANG_(ctx,state,size);
});
});
var fexpr__25230 = loop(boids);
return (fexpr__25230.cljs$core$IFn$_invoke$arity$0 ? fexpr__25230.cljs$core$IFn$_invoke$arity$0() : fexpr__25230.call(null));
});
jayq.core.show(enchilada.canvas);
demo.rm_hull_7145520.core.animate(enchilada.ctx,demo.rm_hull_7145520.core.boids,demo.rm_hull_7145520.core.r);

//# sourceMappingURL=demo.rm_hull_7145520.core.js.map
