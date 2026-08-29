goog.provide('demo.rm_hull_5736733.core');
demo.rm_hull_5736733.core.greens = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25606_SHARP_){
return (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[(48),p1__25606_SHARP_,(48),(255)],null));
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
var G__25608 = arguments.length;
switch (G__25608) {
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
var len__5897__auto___25752 = arguments.length;
var i__5898__auto___25753 = (0);
while(true){
if((i__5898__auto___25753 < len__5897__auto___25752)){
args__5903__auto__.push((arguments[i__5898__auto___25753]));

var G__25754 = (i__5898__auto___25753 + (1));
i__5898__auto___25753 = G__25754;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return demo.rm_hull_5736733.core.load_image_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(demo.rm_hull_5736733.core.load_image_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25613){
var vec__25616 = p__25613;
var callback_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25616,(0),null);
var img_25758 = (new Image());
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading image: ",url], 0));

if(cljs.core.truth_(callback_fn)){
(img_25758.onload = (function (){
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(img_25758) : callback_fn.call(null,img_25758));
}));
} else {
}

(img_25758.crossOrigin = "anonymous");

(img_25758.src = (enchilada.proxy_request.cljs$core$IFn$_invoke$arity$1 ? enchilada.proxy_request.cljs$core$IFn$_invoke$arity$1(url) : enchilada.proxy_request.call(null,url)));

return demo.rm_hull_5736733.core.img;
}));

(demo.rm_hull_5736733.core.load_image_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(demo.rm_hull_5736733.core.load_image_BANG_.cljs$lang$applyTo = (function (seq25611){
var G__25612 = cljs.core.first(seq25611);
var seq25611__$1 = cljs.core.next(seq25611);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25612,seq25611__$1);
}));

demo.rm_hull_5736733.core.offset = (function demo$rm_hull_5736733$core$offset(p__25623,w){
var vec__25624 = p__25623;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25624,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25624,(1),null);
return (((y * w) + x) * (4));
});
demo.rm_hull_5736733.core.get_point = (function demo$rm_hull_5736733$core$get_point(arr,width,co_ords){
var offset = demo.rm_hull_5736733.core.offset(co_ords,width);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25627_SHARP_){
return (arr[p1__25627_SHARP_]);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2(offset,(offset + (4))));
});
demo.rm_hull_5736733.core.set_point_BANG_ = (function demo$rm_hull_5736733$core$set_point_BANG_(arr,width,co_ords,data){
var idx = demo.rm_hull_5736733.core.offset(co_ords,width);
var data__$1 = data;
while(true){
if(cljs.core.seq(data__$1)){
(arr[idx] = cljs.core.first(data__$1));

var G__25761 = (idx + (1));
var G__25762 = cljs.core.rest(data__$1);
idx = G__25761;
data__$1 = G__25762;
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
var seq__25631_25773 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(height));
var chunk__25639_25774 = null;
var count__25640_25775 = (0);
var i__25641_25776 = (0);
while(true){
if((i__25641_25776 < count__25640_25775)){
var y_25777 = chunk__25639_25774.cljs$core$IIndexed$_nth$arity$2(null,i__25641_25776);
var rand_row_25778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(rand_data),cljs.core.mod(y_25777,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rand_data)));
var seq__25643_25779 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((width - (1)),(-1),(-1)));
var chunk__25645_25780 = null;
var count__25646_25781 = (0);
var i__25647_25782 = (0);
while(true){
if((i__25647_25782 < count__25646_25781)){
var x_25783 = chunk__25645_25780.cljs$core$IIndexed$_nth$arity$2(null,i__25647_25782);
var depth_25786 = demo.rm_hull_5736733.core.depth(demo.rm_hull_5736733.core.get_point(data,width,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_25783,y_25777], null)));
set_pt_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_25783,y_25777], null),(((x_25783 > split_point))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(rand_row_25778,cljs.core.mod((x_25783 - depth_25786),rand_w)):demo.rm_hull_5736733.core.get_point(data,width,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x_25783 + rand_w) - depth_25786),y_25777], null))));


var G__25788 = seq__25643_25779;
var G__25789 = chunk__25645_25780;
var G__25790 = count__25646_25781;
var G__25791 = (i__25647_25782 + (1));
seq__25643_25779 = G__25788;
chunk__25645_25780 = G__25789;
count__25646_25781 = G__25790;
i__25647_25782 = G__25791;
continue;
} else {
var temp__5825__auto___25793 = cljs.core.seq(seq__25643_25779);
if(temp__5825__auto___25793){
var seq__25643_25794__$1 = temp__5825__auto___25793;
if(cljs.core.chunked_seq_QMARK_(seq__25643_25794__$1)){
var c__5694__auto___25795 = cljs.core.chunk_first(seq__25643_25794__$1);
var G__25796 = cljs.core.chunk_rest(seq__25643_25794__$1);
var G__25797 = c__5694__auto___25795;
var G__25798 = cljs.core.count(c__5694__auto___25795);
var G__25799 = (0);
seq__25643_25779 = G__25796;
chunk__25645_25780 = G__25797;
count__25646_25781 = G__25798;
i__25647_25782 = G__25799;
continue;
} else {
var x_25800 = cljs.core.first(seq__25643_25794__$1);
var depth_25801 = demo.rm_hull_5736733.core.depth(demo.rm_hull_5736733.core.get_point(data,width,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_25800,y_25777], null)));
set_pt_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_25800,y_25777], null),(((x_25800 > split_point))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(rand_row_25778,cljs.core.mod((x_25800 - depth_25801),rand_w)):demo.rm_hull_5736733.core.get_point(data,width,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x_25800 + rand_w) - depth_25801),y_25777], null))));


var G__25804 = cljs.core.next(seq__25643_25794__$1);
var G__25805 = null;
var G__25806 = (0);
var G__25807 = (0);
seq__25643_25779 = G__25804;
chunk__25645_25780 = G__25805;
count__25646_25781 = G__25806;
i__25647_25782 = G__25807;
continue;
}
} else {
}
}
break;
}

var G__25812 = seq__25631_25773;
var G__25813 = chunk__25639_25774;
var G__25814 = count__25640_25775;
var G__25815 = (i__25641_25776 + (1));
seq__25631_25773 = G__25812;
chunk__25639_25774 = G__25813;
count__25640_25775 = G__25814;
i__25641_25776 = G__25815;
continue;
} else {
var temp__5825__auto___25820 = cljs.core.seq(seq__25631_25773);
if(temp__5825__auto___25820){
var seq__25631_25821__$1 = temp__5825__auto___25820;
if(cljs.core.chunked_seq_QMARK_(seq__25631_25821__$1)){
var c__5694__auto___25822 = cljs.core.chunk_first(seq__25631_25821__$1);
var G__25823 = cljs.core.chunk_rest(seq__25631_25821__$1);
var G__25824 = c__5694__auto___25822;
var G__25825 = cljs.core.count(c__5694__auto___25822);
var G__25826 = (0);
seq__25631_25773 = G__25823;
chunk__25639_25774 = G__25824;
count__25640_25775 = G__25825;
i__25641_25776 = G__25826;
continue;
} else {
var y_25831 = cljs.core.first(seq__25631_25821__$1);
var rand_row_25832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(rand_data),cljs.core.mod(y_25831,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rand_data)));
var seq__25633_25833 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((width - (1)),(-1),(-1)));
var chunk__25635_25834 = null;
var count__25636_25835 = (0);
var i__25637_25836 = (0);
while(true){
if((i__25637_25836 < count__25636_25835)){
var x_25837 = chunk__25635_25834.cljs$core$IIndexed$_nth$arity$2(null,i__25637_25836);
var depth_25842 = demo.rm_hull_5736733.core.depth(demo.rm_hull_5736733.core.get_point(data,width,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_25837,y_25831], null)));
set_pt_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_25837,y_25831], null),(((x_25837 > split_point))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(rand_row_25832,cljs.core.mod((x_25837 - depth_25842),rand_w)):demo.rm_hull_5736733.core.get_point(data,width,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x_25837 + rand_w) - depth_25842),y_25831], null))));


var G__25849 = seq__25633_25833;
var G__25850 = chunk__25635_25834;
var G__25851 = count__25636_25835;
var G__25852 = (i__25637_25836 + (1));
seq__25633_25833 = G__25849;
chunk__25635_25834 = G__25850;
count__25636_25835 = G__25851;
i__25637_25836 = G__25852;
continue;
} else {
var temp__5825__auto___25857__$1 = cljs.core.seq(seq__25633_25833);
if(temp__5825__auto___25857__$1){
var seq__25633_25858__$1 = temp__5825__auto___25857__$1;
if(cljs.core.chunked_seq_QMARK_(seq__25633_25858__$1)){
var c__5694__auto___25859 = cljs.core.chunk_first(seq__25633_25858__$1);
var G__25860 = cljs.core.chunk_rest(seq__25633_25858__$1);
var G__25861 = c__5694__auto___25859;
var G__25862 = cljs.core.count(c__5694__auto___25859);
var G__25863 = (0);
seq__25633_25833 = G__25860;
chunk__25635_25834 = G__25861;
count__25636_25835 = G__25862;
i__25637_25836 = G__25863;
continue;
} else {
var x_25864 = cljs.core.first(seq__25633_25858__$1);
var depth_25865 = demo.rm_hull_5736733.core.depth(demo.rm_hull_5736733.core.get_point(data,width,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_25864,y_25831], null)));
set_pt_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_25864,y_25831], null),(((x_25864 > split_point))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(rand_row_25832,cljs.core.mod((x_25864 - depth_25865),rand_w)):demo.rm_hull_5736733.core.get_point(data,width,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x_25864 + rand_w) - depth_25865),y_25831], null))));


var G__25866 = cljs.core.next(seq__25633_25858__$1);
var G__25867 = null;
var G__25868 = (0);
var G__25869 = (0);
seq__25633_25833 = G__25866;
chunk__25635_25834 = G__25867;
count__25636_25835 = G__25868;
i__25637_25836 = G__25869;
continue;
}
} else {
}
}
break;
}

var G__25870 = cljs.core.next(seq__25631_25821__$1);
var G__25871 = null;
var G__25872 = (0);
var G__25873 = (0);
seq__25631_25773 = G__25870;
chunk__25639_25774 = G__25871;
count__25640_25775 = G__25872;
i__25641_25776 = G__25873;
continue;
}
} else {
}
}
break;
}

return enchilada.ctx.putImageData(depth_map,(0),(0));
});
jayq.core.show(enchilada.canvas);
demo.rm_hull_5736733.core.load_image_BANG_.cljs$core$IFn$_invoke$arity$variadic(demo.rm_hull_5736733.core.depthmap_url.cljs$core$IFn$_invoke$arity$0(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__25744_SHARP_){
return demo.rm_hull_5736733.core.generate_sird(p1__25744_SHARP_,demo.rm_hull_5736733.core.random_data((100),(100),demo.rm_hull_5736733.core.greens));
})], 0));

//# sourceMappingURL=demo.rm_hull_5736733.core.js.map
