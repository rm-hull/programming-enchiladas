goog.provide('demo.rm_hull_8776719.core');
demo.rm_hull_8776719.core.dimensions = (function (){var vec__25919 = (enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0 ? enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0() : enchilada.canvas_size.call(null));
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25919,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25919,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.quot(width,(-2)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.quot(height,(-2)),new cljs.core.Keyword(null,"w","w",354169001),width,new cljs.core.Keyword(null,"h","h",1109658740),height], null);
})();
demo.rm_hull_8776719.core.initial_state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"t","t",-1397832519),(0),new cljs.core.Keyword(null,"k","k",-2146297393),0.45,new cljs.core.Keyword(null,"ctx","ctx",-493610118),enchilada.ctx,new cljs.core.Keyword(null,"persistence","persistence",-203044807),(95),new cljs.core.Keyword(null,"clear?","clear?",1363344639),false], null);
demo.rm_hull_8776719.core.incoming = (function demo$rm_hull_8776719$core$incoming(event,world_state){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([world_state,event,(cljs.core.truth_(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(event))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear?","clear?",1363344639),true], null):null)], 0));
});
demo.rm_hull_8776719.core.tock = (function demo$rm_hull_8776719$core$tock(event,world_state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(world_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519)], null),cljs.core.inc),new cljs.core.Keyword(null,"clear?","clear?",1363344639),false);
});
demo.rm_hull_8776719.core.draw_point_BANG_ = (function demo$rm_hull_8776719$core$draw_point_BANG_(ctx,t,k){
var t__$1 = (t / (60));
var a = (1);
var b = (a / k);
var a_minus_b = (a - b);
var x = ((a_minus_b * Math.cos(t__$1)) + (b * Math.cos((t__$1 * (k - (1))))));
var y = ((a_minus_b * Math.sin(t__$1)) - (b * Math.sin((t__$1 * (k - (1))))));
var scale = (((k < 1.0))?((150) * k):(200));
return monet.canvas.circle(monet.canvas.fill_style(ctx,new cljs.core.Keyword(null,"red","red",-969428204)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(scale * x),new cljs.core.Keyword(null,"y","y",-1757859776),(scale * y),new cljs.core.Keyword(null,"r","r",-471384190),(3)], null));
});
demo.rm_hull_8776719.core.render_frame_BANG_ = (function demo$rm_hull_8776719$core$render_frame_BANG_(p__25922){
var map__25923 = p__25922;
var map__25923__$1 = cljs.core.__destructure_map(map__25923);
var world_state = map__25923__$1;
var clear_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25923__$1,new cljs.core.Keyword(null,"clear?","clear?",1363344639));
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25923__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25923__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var persistence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25923__$1,new cljs.core.Keyword(null,"persistence","persistence",-203044807));
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25923__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var color = (cljs.core.truth_(clear_QMARK_)?new cljs.core.Keyword(null,"white","white",-483998618):(""+"rgba(255,255,255,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((100) - persistence) / (100)))+")"));
return demo.rm_hull_8776719.core.draw_point_BANG_(monet.canvas.fill_rect(monet.canvas.fill_style(ctx,color),demo.rm_hull_8776719.core.dimensions),t,k);
});
var chan_26045 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
jayq.core.show(enchilada.canvas);

monet.canvas.translate(enchilada.ctx,cljs.core.quot((demo.rm_hull_8776719.core.dimensions.cljs$core$IFn$_invoke$arity$1 ? demo.rm_hull_8776719.core.dimensions.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"w","w",354169001)) : demo.rm_hull_8776719.core.dimensions.call(null,new cljs.core.Keyword(null,"w","w",354169001))),(2)),cljs.core.quot((demo.rm_hull_8776719.core.dimensions.cljs$core$IFn$_invoke$arity$1 ? demo.rm_hull_8776719.core.dimensions.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"h","h",1109658740)) : demo.rm_hull_8776719.core.dimensions.call(null,new cljs.core.Keyword(null,"h","h",1109658740))),(2)));

dommy.core.insert_after_BANG_((function (){var dom25924 = document.createElementNS("http://www.w3.org/1999/xhtml","div");
dom25924.appendChild(dommy.template.__GT_node_like(big_bang.components.slider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.Keyword(null,"label-text","label-text",-1566972381),"Persistence:",new cljs.core.Keyword(null,"min-value","min-value",-1119123315),(0),new cljs.core.Keyword(null,"max-value","max-value",687805168),(100),new cljs.core.Keyword(null,"initial-value","initial-value",470619381),(demo.rm_hull_8776719.core.initial_state.cljs$core$IFn$_invoke$arity$1 ? demo.rm_hull_8776719.core.initial_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"persistence","persistence",-203044807)) : demo.rm_hull_8776719.core.initial_state.call(null,new cljs.core.Keyword(null,"persistence","persistence",-203044807))),new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124),chan_26045], 0))));

dom25924.appendChild((function (){var dom25930 = document.createElementNS("http://www.w3.org/1999/xhtml","span");
dom25930.setAttribute("style",(dommy.core.style_str.cljs$core$IFn$_invoke$arity$1 ? dommy.core.style_str.cljs$core$IFn$_invoke$arity$1("padding-right: 100px") : dommy.core.style_str.call(null,"padding-right: 100px")));


return dom25930;
})());

dom25924.appendChild(dommy.template.__GT_node_like(big_bang.components.slider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"label-text","label-text",-1566972381),"k:",new cljs.core.Keyword(null,"min-value","min-value",-1119123315),0.05,new cljs.core.Keyword(null,"max-value","max-value",687805168),(10),new cljs.core.Keyword(null,"step","step",1288888124),0.05,new cljs.core.Keyword(null,"initial-value","initial-value",470619381),(demo.rm_hull_8776719.core.initial_state.cljs$core$IFn$_invoke$arity$1 ? demo.rm_hull_8776719.core.initial_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"k","k",-2146297393)) : demo.rm_hull_8776719.core.initial_state.call(null,new cljs.core.Keyword(null,"k","k",-2146297393))),new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124),chan_26045], 0))));

return dom25924;
})(),document.getElementById("canvas-area"));

big_bang.core.big_bang.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),demo.rm_hull_8776719.core.initial_state,new cljs.core.Keyword(null,"receive-channel","receive-channel",1240287920),chan_26045,new cljs.core.Keyword(null,"on-receive","on-receive",-706822243),demo.rm_hull_8776719.core.incoming,new cljs.core.Keyword(null,"on-tick","on-tick",-56973396),demo.rm_hull_8776719.core.tock,new cljs.core.Keyword(null,"to-draw","to-draw",-1467115105),demo.rm_hull_8776719.core.render_frame_BANG_], 0));

//# sourceMappingURL=demo.rm_hull_8776719.core.js.map
