goog.provide('demo.rm_hull_5257851.core');
demo.rm_hull_5257851.core.generator = (function demo$rm_hull_5257851$core$generator(w,h,n){
return (function (p__24981){
var map__24982 = p__24981;
var map__24982__$1 = cljs.core.__destructure_map(map__24982);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24982__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24982__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24982__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var red = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24982__$1,new cljs.core.Keyword(null,"red","red",-969428204));
var green = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24982__$1,new cljs.core.Keyword(null,"green","green",-945526839));
var blue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24982__$1,new cljs.core.Keyword(null,"blue","blue",-622100620));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"i","i",-1386841315),(i + (1)),new cljs.core.Keyword(null,"x","x",2099068185),((x + (cljs.core.rand.cljs$core$IFn$_invoke$arity$1(cljs.core.quot(w,(8))) - cljs.core.quot(w,(16)))) | 0),new cljs.core.Keyword(null,"y","y",-1757859776),(cljs.core.quot(h,(- n)) * i),new cljs.core.Keyword(null,"xd","xd",1766144837),cljs.core.rand_int((2)),new cljs.core.Keyword(null,"yd","yd",-1898855360),cljs.core.rand_int((2)),new cljs.core.Keyword(null,"red","red",-969428204),(red - (8)),new cljs.core.Keyword(null,"green","green",-945526839),(green + (4)),new cljs.core.Keyword(null,"blue","blue",-622100620),(blue - (12))], null);
});
});
demo.rm_hull_5257851.core.updater = (function demo$rm_hull_5257851$core$updater(w,h){
return (function (p__24990){
var map__24991 = p__24990;
var map__24991__$1 = cljs.core.__destructure_map(map__24991);
var points = map__24991__$1;
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var xd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword(null,"xd","xd",1766144837));
var yd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword(null,"yd","yd",-1898855360));
if((i === (0))){
return points;
} else {
var new_x = (x + xd);
var new_y = (y + yd);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(points,new cljs.core.Keyword(null,"x","x",2099068185),new_x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),new_y,new cljs.core.Keyword(null,"xd","xd",1766144837),(((((new_x > w)) || ((new_x < (- w)))))?(- xd):xd),new cljs.core.Keyword(null,"yd","yd",-1898855360),(((((new_y > h)) || ((new_y < (- h)))))?(- yd):yd)], 0));
}
});
});
demo.rm_hull_5257851.core.points = (function demo$rm_hull_5257851$core$points(w,h,n){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.iterate(demo.rm_hull_5257851.core.generator(w,h,n),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"i","i",-1386841315),(0),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"red","red",-969428204),(255),new cljs.core.Keyword(null,"green","green",-945526839),(255),new cljs.core.Keyword(null,"blue","blue",-622100620),(255)], null)));
});
demo.rm_hull_5257851.core.get_color_from = (function demo$rm_hull_5257851$core$get_color_from(p__25018){
var map__25022 = p__25018;
var map__25022__$1 = cljs.core.__destructure_map(map__25022);
var red = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25022__$1,new cljs.core.Keyword(null,"red","red",-969428204));
var green = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25022__$1,new cljs.core.Keyword(null,"green","green",-945526839));
var blue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25022__$1,new cljs.core.Keyword(null,"blue","blue",-622100620));
return (""+"rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(red)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(green)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blue)+",0.075)");
});
demo.rm_hull_5257851.core.draw_points_BANG_ = (function demo$rm_hull_5257851$core$draw_points_BANG_(ctx,points){
var points__$1 = cljs.core.next(points);
while(true){
if((cljs.core.next(points__$1) == null)){
return ctx;
} else {
var p1 = cljs.core.first(points__$1);
var p2 = cljs.core.second(points__$1);
var curve = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cp1x","cp1x",465245137),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.Keyword(null,"cp1y","cp1y",628283543),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.Keyword(null,"cp2x","cp2x",-1682644749),(0),new cljs.core.Keyword(null,"cp2y","cp2y",903335801),(0),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p2),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p2)], null);
var color = demo.rm_hull_5257851.core.get_color_from(p2);
var seq__25029_25162 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
var chunk__25030_25163 = null;
var count__25031_25164 = (0);
var i__25032_25165 = (0);
while(true){
if((i__25032_25165 < count__25031_25164)){
var __25166 = chunk__25030_25163.cljs$core$IIndexed$_nth$arity$2(null,i__25032_25165);
monet.canvas.rotate(monet.canvas.stroke(monet.canvas.stroke_style(monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$2(monet.canvas.move_to(monet.canvas.begin_path(ctx),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1)),curve),color)),1.256637);


var G__25167 = seq__25029_25162;
var G__25168 = chunk__25030_25163;
var G__25169 = count__25031_25164;
var G__25170 = (i__25032_25165 + (1));
seq__25029_25162 = G__25167;
chunk__25030_25163 = G__25168;
count__25031_25164 = G__25169;
i__25032_25165 = G__25170;
continue;
} else {
var temp__5825__auto___25171 = cljs.core.seq(seq__25029_25162);
if(temp__5825__auto___25171){
var seq__25029_25172__$1 = temp__5825__auto___25171;
if(cljs.core.chunked_seq_QMARK_(seq__25029_25172__$1)){
var c__5694__auto___25173 = cljs.core.chunk_first(seq__25029_25172__$1);
var G__25174 = cljs.core.chunk_rest(seq__25029_25172__$1);
var G__25175 = c__5694__auto___25173;
var G__25176 = cljs.core.count(c__5694__auto___25173);
var G__25177 = (0);
seq__25029_25162 = G__25174;
chunk__25030_25163 = G__25175;
count__25031_25164 = G__25176;
i__25032_25165 = G__25177;
continue;
} else {
var __25178 = cljs.core.first(seq__25029_25172__$1);
monet.canvas.rotate(monet.canvas.stroke(monet.canvas.stroke_style(monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$2(monet.canvas.move_to(monet.canvas.begin_path(ctx),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1)),curve),color)),1.256637);


var G__25181 = cljs.core.next(seq__25029_25172__$1);
var G__25182 = null;
var G__25183 = (0);
var G__25184 = (0);
seq__25029_25162 = G__25181;
chunk__25030_25163 = G__25182;
count__25031_25164 = G__25183;
i__25032_25165 = G__25184;
continue;
}
} else {
}
}
break;
}

var G__25185 = cljs.core.next(points__$1);
points__$1 = G__25185;
continue;
}
break;
}
});
demo.rm_hull_5257851.core.draw_frame_BANG_ = (function demo$rm_hull_5257851$core$draw_frame_BANG_(ctx,w,h,points){
return monet.canvas.rotate(monet.canvas.restore(demo.rm_hull_5257851.core.draw_points_BANG_(monet.canvas.composition_operation(monet.canvas.save(monet.canvas.restore(monet.canvas.fill_rect(monet.canvas.fill_style(monet.canvas.save(ctx),"rgba(0,0,0,0.02)"),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.quot(w,(-2)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.quot(h,(-2)),new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"h","h",1109658740),h], null)))),new cljs.core.Keyword(null,"lighter","lighter",285445884)),points)),0.005);
});
demo.rm_hull_5257851.core.animate = (function demo$rm_hull_5257851$core$animate(ctx,w,h){
monet.canvas.translate((ctx.cljs$core$IFn$_invoke$arity$0 ? ctx.cljs$core$IFn$_invoke$arity$0() : ctx.call(null)),cljs.core.quot(w,(2)),cljs.core.quot(h,(2)));

var data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(demo.rm_hull_5257851.core.points(w,h,(21)));
var loop = (function demo$rm_hull_5257851$core$animate_$_loop(){
(monet.core.animation_frame.cljs$core$IFn$_invoke$arity$1 ? monet.core.animation_frame.cljs$core$IFn$_invoke$arity$1(demo$rm_hull_5257851$core$animate_$_loop) : monet.core.animation_frame.call(null,demo$rm_hull_5257851$core$animate_$_loop));

return demo.rm_hull_5257851.core.draw_frame_BANG_(ctx,w,h,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(data,(function (p1__25126_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(demo.rm_hull_5257851.core.updater(w,h),p1__25126_SHARP_);
})));
});
return loop();
});
enchilada.core.show((enchilada.canvas.cljs$core$IFn$_invoke$arity$0 ? enchilada.canvas.cljs$core$IFn$_invoke$arity$0() : enchilada.canvas.call(null)));
demo.rm_hull_5257851.core.animate(enchilada.ctx,(800),(600));

//# sourceMappingURL=demo.rm_hull_5257851.core.js.map
