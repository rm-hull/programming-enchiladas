goog.provide('demo.rm_hull_5736733.core');
demo.rm_hull_5736733.core.greens = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25701_SHARP_){
return (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[(48),p1__25701_SHARP_,(48),(255)],null));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((207)));
demo.rm_hull_5736733.core.random_data = (function demo$rm_hull_5736733$core$random_data(w,h,colors){
var v = cljs.core.vec(colors);
var sz = cljs.core.count(v);
var rnd_color = (function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,cljs.core.rand_int(sz));
});
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(h,(function (){
return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(w,rnd_color));
})))], null);
});
demo.rm_hull_5736733.core.depthmap_url = (function demo$rm_hull_5736733$core$depthmap_url(var_args){
var G__25709 = arguments.length;
switch (G__25709) {
case 0:
return demo.rm_hull_5736733.core.depthmap_url.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return demo.rm_hull_5736733.core.depthmap_url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(demo.rm_hull_5736733.core.depthmap_url.cljs$core$IFn$_invoke$arity$0 = (function (){
return demo.rm_hull_5736733.core.depthmap_url.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((10)));
}));

(demo.rm_hull_5736733.core.depthmap_url.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (""+"https://raw.github.com/rm-hull/depth-maps/master/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)+".jpg");
}));

(demo.rm_hull_5736733.core.depthmap_url.cljs$lang$maxFixedArity = 1);

demo.rm_hull_5736733.core.load_image_BANG_ = (function demo$rm_hull_5736733$core$load_image_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___25953 = arguments.length;
var i__5898__auto___25955 = (0);
while(true){
if((i__5898__auto___25955 < len__5897__auto___25953)){
args__5903__auto__.push((arguments[i__5898__auto___25955]));

var G__25956 = (i__5898__auto___25955 + (1));
i__5898__auto___25955 = G__25956;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return demo.rm_hull_5736733.core.load_image_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(demo.rm_hull_5736733.core.load_image_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25717){
var vec__25718 = p__25717;
var callback_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25718,(0),null);
var img_25960 = (new Image());
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading image: ",url], 0));

if(cljs.core.truth_(callback_fn)){
(img_25960.onload = (function (){
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(img_25960) : callback_fn.call(null,img_25960));
}));
} else {
}

(img_25960.crossOrigin = "anonymous");

(img_25960.src = (enchilada.proxy_request.cljs$core$IFn$_invoke$arity$1 ? enchilada.proxy_request.cljs$core$IFn$_invoke$arity$1(url) : enchilada.proxy_request.call(null,url)));

return demo.rm_hull_5736733.core.img;
}));

(demo.rm_hull_5736733.core.load_image_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(demo.rm_hull_5736733.core.load_image_BANG_.cljs$lang$applyTo = (function (seq25710){
var G__25711 = cljs.core.first(seq25710);
var seq25710__$1 = cljs.core.next(seq25710);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25711,seq25710__$1);
}));

demo.rm_hull_5736733.core.offset = (function demo$rm_hull_5736733$core$offset(p__25725,w){
var vec__25726 = p__25725;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25726,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25726,(1),null);
return (((y * w) + x) * (4));
});
demo.rm_hull_5736733.core.get_point = (function demo$rm_hull_5736733$core$get_point(arr,width,co_ords){
var offset = demo.rm_hull_5736733.core.offset(co_ords,width);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25729_SHARP_){
return (arr[p1__25729_SHARP_]);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2(offset,(offset + (4))));
});
demo.rm_hull_5736733.core.set_point_BANG_ = (function demo$rm_hull_5736733$core$set_point_BANG_(arr,width,co_ords,data){
var idx = demo.rm_hull_5736733.core.offset(co_ords,width);
var data__$1 = data;
while(true){
if(cljs.core.seq(data__$1)){
(arr[idx] = cljs.core.first(data__$1));

var G__25961 = (idx + (1));
var G__25962 = cljs.core.rest(data__$1);
idx = G__25961;
data__$1 = G__25962;
continue;
} else {
return null;
}
break;
}
});
/**
 * Input data assumed to be [r g b a], normalize to range 0..31 from green byte
 */
demo.rm_hull_5736733.core.depth = (function demo$rm_hull_5736733$core$depth(data){
return cljs.core.quot(cljs.core.second(data),(8));
});
demo.rm_hull_5736733.core.generate_sird = (function demo$rm_hull_5736733$core$generate_sird(img,rand_data){
var width = img.width;
var height = img.height;
monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$3(enchilada.ctx,img,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"w","w",354169001),width,new cljs.core.Keyword(null,"h","h",1109658740),height], null));

var depth_map = enchilada.ctx.getImageData((0),(0),width,height);
var data = depth_map.data;
var rand_w = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rand_data);
var set_pt_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(demo.rm_hull_5736733.core.set_point_BANG_,data,width);
var split_point = ((width - (1)) - rand_w);
var seq__25767_25963 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(height));
var chunk__25775_25964 = null;
var count__25776_25965 = (0);
var i__25777_25966 = (0);
while(true){
if((i__25777_25966 < count__25776_25965)){
var y_25967 = chunk__25775_25964.cljs$core$IIndexed$_nth$arity$2(null,i__25777_25966);
var rand_row_25968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(rand_data),cljs.core.mod(y_25967,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rand_data)));
var seq__25779_25969 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((width - (1)),(-1),(-1)));
var chunk__25781_25970 = null;
var count__25782_25971 = (0);
var i__25783_25972 = (0);
while(true){
if((i__25783_25972 < count__25782_25971)){
var x_25973 = chunk__25781_25970.cljs$core$IIndexed$_nth$arity$2(null,i__25783_25972);
var depth_25974 = demo.rm_hull_5736733.core.depth(demo.rm_hull_5736733.core.get_point(data,width,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_25973,y_25967], null)));
set_pt_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_25973,y_25967], null),(((x_25973 > split_point))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(rand_row_25968,cljs.core.mod((x_25973 - depth_25974),rand_w)):demo.rm_hull_5736733.core.get_point(data,width,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x_25973 + rand_w) - depth_25974),y_25967], null))));


var G__25975 = seq__25779_25969;
var G__25976 = chunk__25781_25970;
var G__25977 = count__25782_25971;
var G__25978 = (i__25783_25972 + (1));
seq__25779_25969 = G__25975;
chunk__25781_25970 = G__25976;
count__25782_25971 = G__25977;
i__25783_25972 = G__25978;
continue;
} else {
var temp__5825__auto___25979 = cljs.core.seq(seq__25779_25969);
if(temp__5825__auto___25979){
var seq__25779_25980__$1 = temp__5825__auto___25979;
if(cljs.core.chunked_seq_QMARK_(seq__25779_25980__$1)){
var c__5694__auto___25984 = cljs.core.chunk_first(seq__25779_25980__$1);
var G__25985 = cljs.core.chunk_rest(seq__25779_25980__$1);
var G__25986 = c__5694__auto___25984;
var G__25987 = cljs.core.count(c__5694__auto___25984);
var G__25988 = (0);
seq__25779_25969 = G__25985;
chunk__25781_25970 = G__25986;
count__25782_25971 = G__25987;
i__25783_25972 = G__25988;
continue;
} else {
var x_25989 = cljs.core.first(seq__25779_25980__$1);
var depth_25991 = demo.rm_hull_5736733.core.depth(demo.rm_hull_5736733.core.get_point(data,width,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_25989,y_25967], null)));
set_pt_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_25989,y_25967], null),(((x_25989 > split_point))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(rand_row_25968,cljs.core.mod((x_25989 - depth_25991),rand_w)):demo.rm_hull_5736733.core.get_point(data,width,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x_25989 + rand_w) - depth_25991),y_25967], null))));


var G__25997 = cljs.core.next(seq__25779_25980__$1);
var G__25998 = null;
var G__25999 = (0);
var G__26000 = (0);
seq__25779_25969 = G__25997;
chunk__25781_25970 = G__25998;
count__25782_25971 = G__25999;
i__25783_25972 = G__26000;
continue;
}
} else {
}
}
break;
}

var G__26001 = seq__25767_25963;
var G__26002 = chunk__25775_25964;
var G__26003 = count__25776_25965;
var G__26004 = (i__25777_25966 + (1));
seq__25767_25963 = G__26001;
chunk__25775_25964 = G__26002;
count__25776_25965 = G__26003;
i__25777_25966 = G__26004;
continue;
} else {
var temp__5825__auto___26008 = cljs.core.seq(seq__25767_25963);
if(temp__5825__auto___26008){
var seq__25767_26009__$1 = temp__5825__auto___26008;
if(cljs.core.chunked_seq_QMARK_(seq__25767_26009__$1)){
var c__5694__auto___26010 = cljs.core.chunk_first(seq__25767_26009__$1);
var G__26011 = cljs.core.chunk_rest(seq__25767_26009__$1);
var G__26012 = c__5694__auto___26010;
var G__26013 = cljs.core.count(c__5694__auto___26010);
var G__26014 = (0);
seq__25767_25963 = G__26011;
chunk__25775_25964 = G__26012;
count__25776_25965 = G__26013;
i__25777_25966 = G__26014;
continue;
} else {
var y_26015 = cljs.core.first(seq__25767_26009__$1);
var rand_row_26016 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(rand_data),cljs.core.mod(y_26015,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rand_data)));
var seq__25769_26017 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((width - (1)),(-1),(-1)));
var chunk__25771_26018 = null;
var count__25772_26019 = (0);
var i__25773_26020 = (0);
while(true){
if((i__25773_26020 < count__25772_26019)){
var x_26021 = chunk__25771_26018.cljs$core$IIndexed$_nth$arity$2(null,i__25773_26020);
var depth_26022 = demo.rm_hull_5736733.core.depth(demo.rm_hull_5736733.core.get_point(data,width,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_26021,y_26015], null)));
set_pt_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_26021,y_26015], null),(((x_26021 > split_point))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(rand_row_26016,cljs.core.mod((x_26021 - depth_26022),rand_w)):demo.rm_hull_5736733.core.get_point(data,width,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x_26021 + rand_w) - depth_26022),y_26015], null))));


var G__26023 = seq__25769_26017;
var G__26024 = chunk__25771_26018;
var G__26025 = count__25772_26019;
var G__26026 = (i__25773_26020 + (1));
seq__25769_26017 = G__26023;
chunk__25771_26018 = G__26024;
count__25772_26019 = G__26025;
i__25773_26020 = G__26026;
continue;
} else {
var temp__5825__auto___26027__$1 = cljs.core.seq(seq__25769_26017);
if(temp__5825__auto___26027__$1){
var seq__25769_26028__$1 = temp__5825__auto___26027__$1;
if(cljs.core.chunked_seq_QMARK_(seq__25769_26028__$1)){
var c__5694__auto___26029 = cljs.core.chunk_first(seq__25769_26028__$1);
var G__26030 = cljs.core.chunk_rest(seq__25769_26028__$1);
var G__26031 = c__5694__auto___26029;
var G__26032 = cljs.core.count(c__5694__auto___26029);
var G__26033 = (0);
seq__25769_26017 = G__26030;
chunk__25771_26018 = G__26031;
count__25772_26019 = G__26032;
i__25773_26020 = G__26033;
continue;
} else {
var x_26035 = cljs.core.first(seq__25769_26028__$1);
var depth_26037 = demo.rm_hull_5736733.core.depth(demo.rm_hull_5736733.core.get_point(data,width,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_26035,y_26015], null)));
set_pt_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_26035,y_26015], null),(((x_26035 > split_point))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(rand_row_26016,cljs.core.mod((x_26035 - depth_26037),rand_w)):demo.rm_hull_5736733.core.get_point(data,width,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x_26035 + rand_w) - depth_26037),y_26015], null))));


var G__26043 = cljs.core.next(seq__25769_26028__$1);
var G__26044 = null;
var G__26045 = (0);
var G__26046 = (0);
seq__25769_26017 = G__26043;
chunk__25771_26018 = G__26044;
count__25772_26019 = G__26045;
i__25773_26020 = G__26046;
continue;
}
} else {
}
}
break;
}

var G__26048 = cljs.core.next(seq__25767_26009__$1);
var G__26049 = null;
var G__26050 = (0);
var G__26051 = (0);
seq__25767_25963 = G__26048;
chunk__25775_25964 = G__26049;
count__25776_25965 = G__26050;
i__25777_25966 = G__26051;
continue;
}
} else {
}
}
break;
}

return enchilada.ctx.putImageData(depth_map,(0),(0));
});
enchilada.core.show((enchilada.canvas.cljs$core$IFn$_invoke$arity$0 ? enchilada.canvas.cljs$core$IFn$_invoke$arity$0() : enchilada.canvas.call(null)));
demo.rm_hull_5736733.core.load_image_BANG_.cljs$core$IFn$_invoke$arity$variadic(demo.rm_hull_5736733.core.depthmap_url.cljs$core$IFn$_invoke$arity$0(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__25946_SHARP_){
return demo.rm_hull_5736733.core.generate_sird(p1__25946_SHARP_,demo.rm_hull_5736733.core.random_data((100),(100),demo.rm_hull_5736733.core.greens));
})], 0));

//# sourceMappingURL=demo.rm_hull_5736733.core.js.map
