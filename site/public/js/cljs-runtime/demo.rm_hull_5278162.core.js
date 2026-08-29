goog.provide('demo.rm_hull_5278162.core');
dommy.core.insert_after_BANG_((function (){var dom25910 = document.createElementNS("http://www.w3.org/1999/xhtml","div");
dom25910.setAttribute("id","control-panel");

dom25910.appendChild((function (){var dom25918 = document.createElementNS("http://www.w3.org/1999/xhtml","label");
dom25918.setAttribute("for","colors");


dom25918.appendChild(document.createTextNode("# Colors:"));

return dom25918;
})());

dom25910.appendChild((function (){var dom25925 = document.createElementNS("http://www.w3.org/1999/xhtml","select");
dom25925.setAttribute("id","colors");

dom25925.appendChild(dommy.template.__GT_node_like((function (){var iter__5649__auto__ = (function demo$rm_hull_5278162$core$iter__25926(s__25927){
return (new cljs.core.LazySeq(null,(function (){
var s__25927__$1 = s__25927;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__25927__$1);
if(temp__5825__auto__){
var s__25927__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25927__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__25927__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__25929 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__25928 = (0);
while(true){
if((i__25928 < size__5648__auto__)){
var n = cljs.core._nth(c__5647__auto__,i__25928);
cljs.core.chunk_append(b__25929,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(10)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),(1)], null):cljs.core.PersistentArrayMap.EMPTY),n], null));

var G__26093 = (i__25928 + (1));
i__25928 = G__26093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25929),demo$rm_hull_5278162$core$iter__25926(cljs.core.chunk_rest(s__25927__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25929),null);
}
} else {
var n = cljs.core.first(s__25927__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(10)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),(1)], null):cljs.core.PersistentArrayMap.EMPTY),n], null),demo$rm_hull_5278162$core$iter__25926(cljs.core.rest(s__25927__$2)));
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

return dom25925;
})());

dom25910.appendChild((function (){var dom25936 = document.createElementNS("http://www.w3.org/1999/xhtml","label");
dom25936.setAttribute("for","start");


dom25936.appendChild(document.createTextNode("Start:"));

return dom25936;
})());

dom25910.appendChild((function (){var dom25937 = document.createElementNS("http://www.w3.org/1999/xhtml","select");
dom25937.setAttribute("id","start");

dom25937.appendChild(dommy.template.__GT_node_like((function (){var iter__5649__auto__ = (function demo$rm_hull_5278162$core$iter__25938(s__25939){
return (new cljs.core.LazySeq(null,(function (){
var s__25939__$1 = s__25939;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__25939__$1);
if(temp__5825__auto__){
var s__25939__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25939__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__25939__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__25941 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__25940 = (0);
while(true){
if((i__25940 < size__5648__auto__)){
var n = cljs.core._nth(c__5647__auto__,i__25940);
cljs.core.chunk_append(b__25941,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),n], null));

var G__26094 = (i__25940 + (1));
i__25940 = G__26094;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25941),demo$rm_hull_5278162$core$iter__25938(cljs.core.chunk_rest(s__25939__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25941),null);
}
} else {
var n = cljs.core.first(s__25939__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),n], null),demo$rm_hull_5278162$core$iter__25938(cljs.core.rest(s__25939__$2)));
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

return dom25937;
})());

dom25910.appendChild((function (){var dom25942 = document.createElementNS("http://www.w3.org/1999/xhtml","label");
dom25942.setAttribute("for","step");


dom25942.appendChild(document.createTextNode("# Step:"));

return dom25942;
})());

dom25910.appendChild((function (){var dom25944 = document.createElementNS("http://www.w3.org/1999/xhtml","select");
dom25944.setAttribute("id","step");

dom25944.appendChild(dommy.template.__GT_node_like((function (){var iter__5649__auto__ = (function demo$rm_hull_5278162$core$iter__25945(s__25946){
return (new cljs.core.LazySeq(null,(function (){
var s__25946__$1 = s__25946;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__25946__$1);
if(temp__5825__auto__){
var s__25946__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25946__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__25946__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__25948 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__25947 = (0);
while(true){
if((i__25947 < size__5648__auto__)){
var n = cljs.core._nth(c__5647__auto__,i__25947);
cljs.core.chunk_append(b__25948,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),n], null));

var G__26095 = (i__25947 + (1));
i__25947 = G__26095;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25948),demo$rm_hull_5278162$core$iter__25945(cljs.core.chunk_rest(s__25946__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25948),null);
}
} else {
var n = cljs.core.first(s__25946__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),n], null),demo$rm_hull_5278162$core$iter__25945(cljs.core.rest(s__25946__$2)));
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

return dom25944;
})());

dom25910.appendChild((function (){var dom25961 = document.createElementNS("http://www.w3.org/1999/xhtml","label");
dom25961.setAttribute("for","direction");


dom25961.appendChild(document.createTextNode("Direction:"));

return dom25961;
})());

dom25910.appendChild((function (){var dom25962 = document.createElementNS("http://www.w3.org/1999/xhtml","select");
dom25962.setAttribute("id","direction");

dom25962.appendChild((function (){var dom25963 = document.createElementNS("http://www.w3.org/1999/xhtml","option");
dom25963.setAttribute("value",-0.005);


dom25963.appendChild(document.createTextNode("Anti-clockwise"));

return dom25963;
})());

dom25962.appendChild((function (){var dom25964 = document.createElementNS("http://www.w3.org/1999/xhtml","option");
dom25964.setAttribute("value",0.005);


dom25964.appendChild(document.createTextNode("Clockwise"));

return dom25964;
})());

return dom25962;
})());

return dom25910;
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
var generator = (function (p__25972){
var map__25973 = p__25972;
var map__25973__$1 = cljs.core.__destructure_map(map__25973);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25973__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var theta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25973__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
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
var G__26175 = monet.canvas.circle(monet.canvas.fill_style(ctx,cljs.core.first(colors)),cljs.core.first(points));
var G__26176 = cljs.core.next(points);
var G__26177 = cljs.core.next(colors);
ctx = G__26175;
points = G__26176;
colors = G__26177;
continue;
}
break;
}
});
demo.rm_hull_5278162.core.draw_frame_BANG_ = (function demo$rm_hull_5278162$core$draw_frame_BANG_(ctx,w,h,points,colors){
return monet.canvas.rotate(demo.rm_hull_5278162.core.draw_points_BANG_(monet.canvas.fill_rect(monet.canvas.fill_style(ctx,"rgba(255,255,255,0.75)"),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.quot(w,(-2)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.quot(h,(-2)),new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"h","h",1109658740),h], null)),points,colors),parseFloat(dommy.core.value(demo.rm_hull_5278162.core.direction)));
});
demo.rm_hull_5278162.core.animate = (function demo$rm_hull_5278162$core$animate(ctx,w,h){
monet.canvas.translate(ctx,cljs.core.quot(w,(2)),cljs.core.quot(h,(2)));

var circles = demo.rm_hull_5278162.core.patches((1500),(0),(7));
var loop = (function demo$rm_hull_5278162$core$animate_$_loop(){
(monet.core.animation_frame.cljs$core$IFn$_invoke$arity$1 ? monet.core.animation_frame.cljs$core$IFn$_invoke$arity$1(demo$rm_hull_5278162$core$animate_$_loop) : monet.core.animation_frame.call(null,demo$rm_hull_5278162$core$animate_$_loop));

return demo.rm_hull_5278162.core.draw_frame_BANG_(ctx,w,h,circles,demo.rm_hull_5278162.core.colors());
});
return loop();
});
jayq.core.show(enchilada.canvas);
demo.rm_hull_5278162.core.animate(enchilada.ctx,(800),(600));

//# sourceMappingURL=demo.rm_hull_5278162.core.js.map
