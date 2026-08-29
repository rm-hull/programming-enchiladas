goog.provide('demo.rm_hull_5278162.core');
dommy.core.insert_after_BANG_((function (){var dom25826 = document.createElementNS("http://www.w3.org/1999/xhtml","div");
dom25826.setAttribute("id","control-panel");

dom25826.appendChild((function (){var dom25828 = document.createElementNS("http://www.w3.org/1999/xhtml","label");
dom25828.setAttribute("for","colors");


dom25828.appendChild(document.createTextNode("# Colors:"));

return dom25828;
})());

dom25826.appendChild((function (){var dom25832 = document.createElementNS("http://www.w3.org/1999/xhtml","select");
dom25832.setAttribute("id","colors");

dom25832.appendChild(dommy.template.__GT_node_like((function (){var iter__5649__auto__ = (function demo$rm_hull_5278162$core$iter__25837(s__25838){
return (new cljs.core.LazySeq(null,(function (){
var s__25838__$1 = s__25838;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__25838__$1);
if(temp__5825__auto__){
var s__25838__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25838__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__25838__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__25840 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__25839 = (0);
while(true){
if((i__25839 < size__5648__auto__)){
var n = cljs.core._nth(c__5647__auto__,i__25839);
cljs.core.chunk_append(b__25840,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(10)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),(1)], null):cljs.core.PersistentArrayMap.EMPTY),n], null));

var G__26099 = (i__25839 + (1));
i__25839 = G__26099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25840),demo$rm_hull_5278162$core$iter__25837(cljs.core.chunk_rest(s__25838__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25840),null);
}
} else {
var n = cljs.core.first(s__25838__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(10)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),(1)], null):cljs.core.PersistentArrayMap.EMPTY),n], null),demo$rm_hull_5278162$core$iter__25837(cljs.core.rest(s__25838__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(217)));
})()));

return dom25832;
})());

dom25826.appendChild((function (){var dom25873 = document.createElementNS("http://www.w3.org/1999/xhtml","label");
dom25873.setAttribute("for","start");


dom25873.appendChild(document.createTextNode("Start:"));

return dom25873;
})());

dom25826.appendChild((function (){var dom25874 = document.createElementNS("http://www.w3.org/1999/xhtml","select");
dom25874.setAttribute("id","start");

dom25874.appendChild(dommy.template.__GT_node_like((function (){var iter__5649__auto__ = (function demo$rm_hull_5278162$core$iter__25875(s__25876){
return (new cljs.core.LazySeq(null,(function (){
var s__25876__$1 = s__25876;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__25876__$1);
if(temp__5825__auto__){
var s__25876__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25876__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__25876__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__25878 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__25877 = (0);
while(true){
if((i__25877 < size__5648__auto__)){
var n = cljs.core._nth(c__5647__auto__,i__25877);
cljs.core.chunk_append(b__25878,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),n], null));

var G__26104 = (i__25877 + (1));
i__25877 = G__26104;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25878),demo$rm_hull_5278162$core$iter__25875(cljs.core.chunk_rest(s__25876__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25878),null);
}
} else {
var n = cljs.core.first(s__25876__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),n], null),demo$rm_hull_5278162$core$iter__25875(cljs.core.rest(s__25876__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(217)));
})()));

return dom25874;
})());

dom25826.appendChild((function (){var dom25906 = document.createElementNS("http://www.w3.org/1999/xhtml","label");
dom25906.setAttribute("for","step");


dom25906.appendChild(document.createTextNode("# Step:"));

return dom25906;
})());

dom25826.appendChild((function (){var dom25908 = document.createElementNS("http://www.w3.org/1999/xhtml","select");
dom25908.setAttribute("id","step");

dom25908.appendChild(dommy.template.__GT_node_like((function (){var iter__5649__auto__ = (function demo$rm_hull_5278162$core$iter__25912(s__25913){
return (new cljs.core.LazySeq(null,(function (){
var s__25913__$1 = s__25913;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__25913__$1);
if(temp__5825__auto__){
var s__25913__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25913__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__25913__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__25915 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__25914 = (0);
while(true){
if((i__25914 < size__5648__auto__)){
var n = cljs.core._nth(c__5647__auto__,i__25914);
cljs.core.chunk_append(b__25915,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),n], null));

var G__26109 = (i__25914 + (1));
i__25914 = G__26109;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25915),demo$rm_hull_5278162$core$iter__25912(cljs.core.chunk_rest(s__25913__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25915),null);
}
} else {
var n = cljs.core.first(s__25913__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),n], null),demo$rm_hull_5278162$core$iter__25912(cljs.core.rest(s__25913__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(217)));
})()));

return dom25908;
})());

dom25826.appendChild((function (){var dom25924 = document.createElementNS("http://www.w3.org/1999/xhtml","label");
dom25924.setAttribute("for","direction");


dom25924.appendChild(document.createTextNode("Direction:"));

return dom25924;
})());

dom25826.appendChild((function (){var dom25927 = document.createElementNS("http://www.w3.org/1999/xhtml","select");
dom25927.setAttribute("id","direction");

dom25927.appendChild((function (){var dom25928 = document.createElementNS("http://www.w3.org/1999/xhtml","option");
dom25928.setAttribute("value",-0.005);


dom25928.appendChild(document.createTextNode("Anti-clockwise"));

return dom25928;
})());

dom25927.appendChild((function (){var dom25933 = document.createElementNS("http://www.w3.org/1999/xhtml","option");
dom25933.setAttribute("value",0.005);


dom25933.appendChild(document.createTextNode("Clockwise"));

return dom25933;
})());

return dom25927;
})());

return dom25826;
})(),document.getElementById("canvas-area"));
demo.rm_hull_5278162.core.color = document.querySelector("select#colors");
demo.rm_hull_5278162.core.start = document.querySelector("select#start");
demo.rm_hull_5278162.core.step = document.querySelector("select#step");
demo.rm_hull_5278162.core.direction = document.querySelector("select#direction");
demo.rm_hull_5278162.core.colors = (function demo$rm_hull_5278162$core$colors(){
return demo.rm_hull_5278162.color_chart.color_seq(parseInt(dommy.core.value(demo.rm_hull_5278162.core.color)),parseInt(dommy.core.value(demo.rm_hull_5278162.core.start)),parseInt(dommy.core.value(demo.rm_hull_5278162.core.step)));
});
demo.rm_hull_5278162.core.patches = (function demo$rm_hull_5278162$core$patches(n,offset,scale){
var tau = ((Math.pow((5),0.5) + (1)) / 2.0);
var angle = (((((2) - tau) * (2)) * Math.PI) + offset);
var drad = ((scale * tau) * 0.5);
var generator = (function (p__25949){
var map__25950 = p__25949;
var map__25950__$1 = cljs.core.__destructure_map(map__25950);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25950__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var theta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25950__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
var i__$1 = (i + (1));
var r = (scale * Math.pow(i__$1,0.5));
var theta__$1 = (theta + angle);
var x = (r * Math.cos(theta__$1));
var y = (r * Math.sin(theta__$1));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"r","r",-471384190),drad,new cljs.core.Keyword(null,"theta","theta",-427510258),theta__$1,new cljs.core.Keyword(null,"i","i",-1386841315),i__$1], null);
});
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.iterate(generator,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"r","r",-471384190),drad,new cljs.core.Keyword(null,"theta","theta",-427510258),(0),new cljs.core.Keyword(null,"i","i",-1386841315),(0)], null)));
});
demo.rm_hull_5278162.core.draw_points_BANG_ = (function demo$rm_hull_5278162$core$draw_points_BANG_(ctx,points,colors){
while(true){
if((points == null)){
return ctx;
} else {
var G__26119 = monet.canvas.circle(monet.canvas.fill_style(ctx,cljs.core.first(colors)),cljs.core.first(points));
var G__26120 = cljs.core.next(points);
var G__26121 = cljs.core.next(colors);
ctx = G__26119;
points = G__26120;
colors = G__26121;
continue;
}
break;
}
});
demo.rm_hull_5278162.core.draw_frame_BANG_ = (function demo$rm_hull_5278162$core$draw_frame_BANG_(ctx,w,h,points,colors){
return monet.canvas.rotate(demo.rm_hull_5278162.core.draw_points_BANG_(monet.canvas.fill_rect(monet.canvas.fill_style(ctx,"rgba(255,255,255,0.75)"),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.quot(w,(-2)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.quot(h,(-2)),new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"h","h",1109658740),h], null)),points,colors),parseFloat(dommy.core.value(demo.rm_hull_5278162.core.direction)));
});
demo.rm_hull_5278162.core.animate = (function demo$rm_hull_5278162$core$animate(ctx,w,h){
monet.canvas.translate((ctx.cljs$core$IFn$_invoke$arity$0 ? ctx.cljs$core$IFn$_invoke$arity$0() : ctx.call(null)),cljs.core.quot(w,(2)),cljs.core.quot(h,(2)));

var circles = demo.rm_hull_5278162.core.patches((1500),(0),(7));
var loop = (function demo$rm_hull_5278162$core$animate_$_loop(){
(monet.core.animation_frame.cljs$core$IFn$_invoke$arity$1 ? monet.core.animation_frame.cljs$core$IFn$_invoke$arity$1(demo$rm_hull_5278162$core$animate_$_loop) : monet.core.animation_frame.call(null,demo$rm_hull_5278162$core$animate_$_loop));

return demo.rm_hull_5278162.core.draw_frame_BANG_(ctx,w,h,circles,demo.rm_hull_5278162.core.colors());
});
return loop();
});
enchilada.core.show((enchilada.canvas.cljs$core$IFn$_invoke$arity$0 ? enchilada.canvas.cljs$core$IFn$_invoke$arity$0() : enchilada.canvas.call(null)));
demo.rm_hull_5278162.core.animate(enchilada.ctx,(800),(600));

//# sourceMappingURL=demo.rm_hull_5278162.core.js.map
