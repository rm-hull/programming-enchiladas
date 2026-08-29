goog.provide('demo.rm_hull_5491968.core');
demo.rm_hull_5491968.core.cat_resources = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://gist.github.com/rm-hull/8859515c9dce89935ac2/raw/cat_01.jpg","https://gist.github.com/rm-hull/8859515c9dce89935ac2/raw/cat_02.jpg","https://gist.github.com/rm-hull/8859515c9dce89935ac2/raw/cat_03.jpg","https://gist.github.com/rm-hull/8859515c9dce89935ac2/raw/cat_04.jpg","https://gist.github.com/rm-hull/8859515c9dce89935ac2/raw/cat_05.jpg","https://gist.github.com/rm-hull/8859515c9dce89935ac2/raw/cat_06.jpg","https://gist.github.com/rm-hull/8859515c9dce89935ac2/raw/cat_07.jpg","https://gist.github.com/rm-hull/8859515c9dce89935ac2/raw/cat_08.jpg"], null);
demo.rm_hull_5491968.core.random_cat = (function demo$rm_hull_5491968$core$random_cat(){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(demo.rm_hull_5491968.core.cat_resources,cljs.core.rand_int(cljs.core.count(demo.rm_hull_5491968.core.cat_resources)));
});
demo.rm_hull_5491968.core.load_image_BANG_ = (function demo$rm_hull_5491968$core$load_image_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___25224 = arguments.length;
var i__5898__auto___25225 = (0);
while(true){
if((i__5898__auto___25225 < len__5897__auto___25224)){
args__5903__auto__.push((arguments[i__5898__auto___25225]));

var G__25226 = (i__5898__auto___25225 + (1));
i__5898__auto___25225 = G__25226;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return demo.rm_hull_5491968.core.load_image_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(demo.rm_hull_5491968.core.load_image_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24981){
var vec__24982 = p__24981;
var callback_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24982,(0),null);
var img_25228 = (new Image());
if(cljs.core.truth_(callback_fn)){
(img_25228.onload = (function (){
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(img_25228) : callback_fn.call(null,img_25228));
}));
} else {
}

(img_25228.crossOrigin = "anonymous");

(img_25228.src = (enchilada.proxy_request.cljs$core$IFn$_invoke$arity$1 ? enchilada.proxy_request.cljs$core$IFn$_invoke$arity$1(url) : enchilada.proxy_request.call(null,url)));

return demo.rm_hull_5491968.core.img;
}));

(demo.rm_hull_5491968.core.load_image_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(demo.rm_hull_5491968.core.load_image_BANG_.cljs$lang$applyTo = (function (seq24976){
var G__24977 = cljs.core.first(seq24976);
var seq24976__$1 = cljs.core.next(seq24976);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24977,seq24976__$1);
}));

demo.rm_hull_5491968.core.offset = (function demo$rm_hull_5491968$core$offset(p__24986,w){
var vec__24987 = p__24986;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24987,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24987,(1),null);
return (((y * w) + x) * (4));
});
demo.rm_hull_5491968.core.pisano_period = (function demo$rm_hull_5491968$core$pisano_period(n){
return (function (x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod(y,n),cljs.core.mod((x + y),n)], null);
});
});
demo.rm_hull_5491968.core.draw_frame_BANG_ = (function demo$rm_hull_5491968$core$draw_frame_BANG_(ctx,n,mapper_fn){
var image_in = ctx.getImageData((0),(0),n,n);
var image_out = ctx.createImageData(n,n);
var data_in = image_in.data;
var data_out = image_out.data;
var seq__24990_25234 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
var chunk__25005_25235 = null;
var count__25006_25236 = (0);
var i__25007_25237 = (0);
while(true){
if((i__25007_25237 < count__25006_25236)){
var y_25239 = chunk__25005_25235.cljs$core$IIndexed$_nth$arity$2(null,i__25007_25237);
var seq__25008_25241 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
var chunk__25014_25242 = null;
var count__25015_25243 = (0);
var i__25016_25244 = (0);
while(true){
if((i__25016_25244 < count__25015_25243)){
var x_25247 = chunk__25014_25242.cljs$core$IIndexed$_nth$arity$2(null,i__25016_25244);
var i_25249 = demo.rm_hull_5491968.core.offset(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_25247,y_25239], null),n);
var o_25250 = demo.rm_hull_5491968.core.offset((mapper_fn.cljs$core$IFn$_invoke$arity$2 ? mapper_fn.cljs$core$IFn$_invoke$arity$2(x_25247,y_25239) : mapper_fn.call(null,x_25247,y_25239)),n);
var seq__25018_25251 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
var chunk__25019_25252 = null;
var count__25020_25253 = (0);
var i__25021_25254 = (0);
while(true){
if((i__25021_25254 < count__25020_25253)){
var c_25255 = chunk__25019_25252.cljs$core$IIndexed$_nth$arity$2(null,i__25021_25254);
(data_out[(o_25250 + c_25255)] = (data_in[(i_25249 + c_25255)]));


var G__25258 = seq__25018_25251;
var G__25259 = chunk__25019_25252;
var G__25260 = count__25020_25253;
var G__25261 = (i__25021_25254 + (1));
seq__25018_25251 = G__25258;
chunk__25019_25252 = G__25259;
count__25020_25253 = G__25260;
i__25021_25254 = G__25261;
continue;
} else {
var temp__5825__auto___25262 = cljs.core.seq(seq__25018_25251);
if(temp__5825__auto___25262){
var seq__25018_25263__$1 = temp__5825__auto___25262;
if(cljs.core.chunked_seq_QMARK_(seq__25018_25263__$1)){
var c__5694__auto___25264 = cljs.core.chunk_first(seq__25018_25263__$1);
var G__25265 = cljs.core.chunk_rest(seq__25018_25263__$1);
var G__25266 = c__5694__auto___25264;
var G__25267 = cljs.core.count(c__5694__auto___25264);
var G__25268 = (0);
seq__25018_25251 = G__25265;
chunk__25019_25252 = G__25266;
count__25020_25253 = G__25267;
i__25021_25254 = G__25268;
continue;
} else {
var c_25270 = cljs.core.first(seq__25018_25263__$1);
(data_out[(o_25250 + c_25270)] = (data_in[(i_25249 + c_25270)]));


var G__25278 = cljs.core.next(seq__25018_25263__$1);
var G__25279 = null;
var G__25280 = (0);
var G__25281 = (0);
seq__25018_25251 = G__25278;
chunk__25019_25252 = G__25279;
count__25020_25253 = G__25280;
i__25021_25254 = G__25281;
continue;
}
} else {
}
}
break;
}

var G__25285 = seq__25008_25241;
var G__25286 = chunk__25014_25242;
var G__25287 = count__25015_25243;
var G__25288 = (i__25016_25244 + (1));
seq__25008_25241 = G__25285;
chunk__25014_25242 = G__25286;
count__25015_25243 = G__25287;
i__25016_25244 = G__25288;
continue;
} else {
var temp__5825__auto___25289 = cljs.core.seq(seq__25008_25241);
if(temp__5825__auto___25289){
var seq__25008_25290__$1 = temp__5825__auto___25289;
if(cljs.core.chunked_seq_QMARK_(seq__25008_25290__$1)){
var c__5694__auto___25291 = cljs.core.chunk_first(seq__25008_25290__$1);
var G__25292 = cljs.core.chunk_rest(seq__25008_25290__$1);
var G__25293 = c__5694__auto___25291;
var G__25294 = cljs.core.count(c__5694__auto___25291);
var G__25295 = (0);
seq__25008_25241 = G__25292;
chunk__25014_25242 = G__25293;
count__25015_25243 = G__25294;
i__25016_25244 = G__25295;
continue;
} else {
var x_25296 = cljs.core.first(seq__25008_25290__$1);
var i_25297 = demo.rm_hull_5491968.core.offset(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_25296,y_25239], null),n);
var o_25298 = demo.rm_hull_5491968.core.offset((mapper_fn.cljs$core$IFn$_invoke$arity$2 ? mapper_fn.cljs$core$IFn$_invoke$arity$2(x_25296,y_25239) : mapper_fn.call(null,x_25296,y_25239)),n);
var seq__25010_25300 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
var chunk__25011_25301 = null;
var count__25012_25302 = (0);
var i__25013_25303 = (0);
while(true){
if((i__25013_25303 < count__25012_25302)){
var c_25309 = chunk__25011_25301.cljs$core$IIndexed$_nth$arity$2(null,i__25013_25303);
(data_out[(o_25298 + c_25309)] = (data_in[(i_25297 + c_25309)]));


var G__25310 = seq__25010_25300;
var G__25311 = chunk__25011_25301;
var G__25312 = count__25012_25302;
var G__25313 = (i__25013_25303 + (1));
seq__25010_25300 = G__25310;
chunk__25011_25301 = G__25311;
count__25012_25302 = G__25312;
i__25013_25303 = G__25313;
continue;
} else {
var temp__5825__auto___25314__$1 = cljs.core.seq(seq__25010_25300);
if(temp__5825__auto___25314__$1){
var seq__25010_25315__$1 = temp__5825__auto___25314__$1;
if(cljs.core.chunked_seq_QMARK_(seq__25010_25315__$1)){
var c__5694__auto___25316 = cljs.core.chunk_first(seq__25010_25315__$1);
var G__25317 = cljs.core.chunk_rest(seq__25010_25315__$1);
var G__25318 = c__5694__auto___25316;
var G__25319 = cljs.core.count(c__5694__auto___25316);
var G__25320 = (0);
seq__25010_25300 = G__25317;
chunk__25011_25301 = G__25318;
count__25012_25302 = G__25319;
i__25013_25303 = G__25320;
continue;
} else {
var c_25326 = cljs.core.first(seq__25010_25315__$1);
(data_out[(o_25298 + c_25326)] = (data_in[(i_25297 + c_25326)]));


var G__25331 = cljs.core.next(seq__25010_25315__$1);
var G__25332 = null;
var G__25333 = (0);
var G__25334 = (0);
seq__25010_25300 = G__25331;
chunk__25011_25301 = G__25332;
count__25012_25302 = G__25333;
i__25013_25303 = G__25334;
continue;
}
} else {
}
}
break;
}

var G__25337 = cljs.core.next(seq__25008_25290__$1);
var G__25338 = null;
var G__25339 = (0);
var G__25340 = (0);
seq__25008_25241 = G__25337;
chunk__25014_25242 = G__25338;
count__25015_25243 = G__25339;
i__25016_25244 = G__25340;
continue;
}
} else {
}
}
break;
}

var G__25343 = seq__24990_25234;
var G__25344 = chunk__25005_25235;
var G__25345 = count__25006_25236;
var G__25346 = (i__25007_25237 + (1));
seq__24990_25234 = G__25343;
chunk__25005_25235 = G__25344;
count__25006_25236 = G__25345;
i__25007_25237 = G__25346;
continue;
} else {
var temp__5825__auto___25347 = cljs.core.seq(seq__24990_25234);
if(temp__5825__auto___25347){
var seq__24990_25348__$1 = temp__5825__auto___25347;
if(cljs.core.chunked_seq_QMARK_(seq__24990_25348__$1)){
var c__5694__auto___25349 = cljs.core.chunk_first(seq__24990_25348__$1);
var G__25350 = cljs.core.chunk_rest(seq__24990_25348__$1);
var G__25351 = c__5694__auto___25349;
var G__25352 = cljs.core.count(c__5694__auto___25349);
var G__25353 = (0);
seq__24990_25234 = G__25350;
chunk__25005_25235 = G__25351;
count__25006_25236 = G__25352;
i__25007_25237 = G__25353;
continue;
} else {
var y_25354 = cljs.core.first(seq__24990_25348__$1);
var seq__24991_25355 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
var chunk__24997_25356 = null;
var count__24998_25357 = (0);
var i__24999_25358 = (0);
while(true){
if((i__24999_25358 < count__24998_25357)){
var x_25362 = chunk__24997_25356.cljs$core$IIndexed$_nth$arity$2(null,i__24999_25358);
var i_25363 = demo.rm_hull_5491968.core.offset(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_25362,y_25354], null),n);
var o_25364 = demo.rm_hull_5491968.core.offset((mapper_fn.cljs$core$IFn$_invoke$arity$2 ? mapper_fn.cljs$core$IFn$_invoke$arity$2(x_25362,y_25354) : mapper_fn.call(null,x_25362,y_25354)),n);
var seq__25001_25369 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
var chunk__25002_25370 = null;
var count__25003_25371 = (0);
var i__25004_25372 = (0);
while(true){
if((i__25004_25372 < count__25003_25371)){
var c_25373 = chunk__25002_25370.cljs$core$IIndexed$_nth$arity$2(null,i__25004_25372);
(data_out[(o_25364 + c_25373)] = (data_in[(i_25363 + c_25373)]));


var G__25374 = seq__25001_25369;
var G__25375 = chunk__25002_25370;
var G__25376 = count__25003_25371;
var G__25377 = (i__25004_25372 + (1));
seq__25001_25369 = G__25374;
chunk__25002_25370 = G__25375;
count__25003_25371 = G__25376;
i__25004_25372 = G__25377;
continue;
} else {
var temp__5825__auto___25378__$1 = cljs.core.seq(seq__25001_25369);
if(temp__5825__auto___25378__$1){
var seq__25001_25379__$1 = temp__5825__auto___25378__$1;
if(cljs.core.chunked_seq_QMARK_(seq__25001_25379__$1)){
var c__5694__auto___25380 = cljs.core.chunk_first(seq__25001_25379__$1);
var G__25381 = cljs.core.chunk_rest(seq__25001_25379__$1);
var G__25382 = c__5694__auto___25380;
var G__25383 = cljs.core.count(c__5694__auto___25380);
var G__25384 = (0);
seq__25001_25369 = G__25381;
chunk__25002_25370 = G__25382;
count__25003_25371 = G__25383;
i__25004_25372 = G__25384;
continue;
} else {
var c_25385 = cljs.core.first(seq__25001_25379__$1);
(data_out[(o_25364 + c_25385)] = (data_in[(i_25363 + c_25385)]));


var G__25387 = cljs.core.next(seq__25001_25379__$1);
var G__25388 = null;
var G__25389 = (0);
var G__25390 = (0);
seq__25001_25369 = G__25387;
chunk__25002_25370 = G__25388;
count__25003_25371 = G__25389;
i__25004_25372 = G__25390;
continue;
}
} else {
}
}
break;
}

var G__25392 = seq__24991_25355;
var G__25393 = chunk__24997_25356;
var G__25394 = count__24998_25357;
var G__25395 = (i__24999_25358 + (1));
seq__24991_25355 = G__25392;
chunk__24997_25356 = G__25393;
count__24998_25357 = G__25394;
i__24999_25358 = G__25395;
continue;
} else {
var temp__5825__auto___25396__$1 = cljs.core.seq(seq__24991_25355);
if(temp__5825__auto___25396__$1){
var seq__24991_25397__$1 = temp__5825__auto___25396__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24991_25397__$1)){
var c__5694__auto___25398 = cljs.core.chunk_first(seq__24991_25397__$1);
var G__25401 = cljs.core.chunk_rest(seq__24991_25397__$1);
var G__25402 = c__5694__auto___25398;
var G__25403 = cljs.core.count(c__5694__auto___25398);
var G__25404 = (0);
seq__24991_25355 = G__25401;
chunk__24997_25356 = G__25402;
count__24998_25357 = G__25403;
i__24999_25358 = G__25404;
continue;
} else {
var x_25407 = cljs.core.first(seq__24991_25397__$1);
var i_25408 = demo.rm_hull_5491968.core.offset(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_25407,y_25354], null),n);
var o_25409 = demo.rm_hull_5491968.core.offset((mapper_fn.cljs$core$IFn$_invoke$arity$2 ? mapper_fn.cljs$core$IFn$_invoke$arity$2(x_25407,y_25354) : mapper_fn.call(null,x_25407,y_25354)),n);
var seq__24993_25412 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
var chunk__24994_25413 = null;
var count__24995_25414 = (0);
var i__24996_25415 = (0);
while(true){
if((i__24996_25415 < count__24995_25414)){
var c_25418 = chunk__24994_25413.cljs$core$IIndexed$_nth$arity$2(null,i__24996_25415);
(data_out[(o_25409 + c_25418)] = (data_in[(i_25408 + c_25418)]));


var G__25421 = seq__24993_25412;
var G__25422 = chunk__24994_25413;
var G__25423 = count__24995_25414;
var G__25424 = (i__24996_25415 + (1));
seq__24993_25412 = G__25421;
chunk__24994_25413 = G__25422;
count__24995_25414 = G__25423;
i__24996_25415 = G__25424;
continue;
} else {
var temp__5825__auto___25426__$2 = cljs.core.seq(seq__24993_25412);
if(temp__5825__auto___25426__$2){
var seq__24993_25427__$1 = temp__5825__auto___25426__$2;
if(cljs.core.chunked_seq_QMARK_(seq__24993_25427__$1)){
var c__5694__auto___25428 = cljs.core.chunk_first(seq__24993_25427__$1);
var G__25429 = cljs.core.chunk_rest(seq__24993_25427__$1);
var G__25430 = c__5694__auto___25428;
var G__25431 = cljs.core.count(c__5694__auto___25428);
var G__25432 = (0);
seq__24993_25412 = G__25429;
chunk__24994_25413 = G__25430;
count__24995_25414 = G__25431;
i__24996_25415 = G__25432;
continue;
} else {
var c_25433 = cljs.core.first(seq__24993_25427__$1);
(data_out[(o_25409 + c_25433)] = (data_in[(i_25408 + c_25433)]));


var G__25434 = cljs.core.next(seq__24993_25427__$1);
var G__25435 = null;
var G__25436 = (0);
var G__25437 = (0);
seq__24993_25412 = G__25434;
chunk__24994_25413 = G__25435;
count__24995_25414 = G__25436;
i__24996_25415 = G__25437;
continue;
}
} else {
}
}
break;
}

var G__25439 = cljs.core.next(seq__24991_25397__$1);
var G__25440 = null;
var G__25441 = (0);
var G__25442 = (0);
seq__24991_25355 = G__25439;
chunk__24997_25356 = G__25440;
count__24998_25357 = G__25441;
i__24999_25358 = G__25442;
continue;
}
} else {
}
}
break;
}

var G__25443 = cljs.core.next(seq__24990_25348__$1);
var G__25444 = null;
var G__25445 = (0);
var G__25446 = (0);
seq__24990_25234 = G__25443;
chunk__25005_25235 = G__25444;
count__25006_25236 = G__25445;
i__25007_25237 = G__25446;
continue;
}
} else {
}
}
break;
}

ctx.putImageData(image_out,(0),(0));

return ctx;
});
demo.rm_hull_5491968.core.animate = (function demo$rm_hull_5491968$core$animate(img){
var width = img.width;
var height = img.height;
monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$3(enchilada.ctx,img,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"w","w",354169001),width,new cljs.core.Keyword(null,"h","h",1109658740),height], null));

return jayq.util.wait((2000),(function (){
var n = cljs.core.max.cljs$core$IFn$_invoke$arity$2(width,height);
var mapper_fn = demo.rm_hull_5491968.core.pisano_period(n);
var loop = (function demo$rm_hull_5491968$core$animate_$_loop(){
(monet.core.animation_frame.cljs$core$IFn$_invoke$arity$1 ? monet.core.animation_frame.cljs$core$IFn$_invoke$arity$1(demo$rm_hull_5491968$core$animate_$_loop) : monet.core.animation_frame.call(null,demo$rm_hull_5491968$core$animate_$_loop));

return demo.rm_hull_5491968.core.draw_frame_BANG_(enchilada.ctx,n,mapper_fn);
});
return loop();
}));
});
jayq.core.show(enchilada.canvas);
demo.rm_hull_5491968.core.load_image_BANG_.cljs$core$IFn$_invoke$arity$variadic(demo.rm_hull_5491968.core.random_cat(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([demo.rm_hull_5491968.core.animate], 0));

//# sourceMappingURL=demo.rm_hull_5491968.core.js.map
