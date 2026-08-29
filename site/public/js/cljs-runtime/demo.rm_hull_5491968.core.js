goog.provide('demo.rm_hull_5491968.core');
demo.rm_hull_5491968.core.cat_resources = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://gist.github.com/rm-hull/8859515c9dce89935ac2/raw/cat_01.jpg","https://gist.github.com/rm-hull/8859515c9dce89935ac2/raw/cat_02.jpg","https://gist.github.com/rm-hull/8859515c9dce89935ac2/raw/cat_03.jpg","https://gist.github.com/rm-hull/8859515c9dce89935ac2/raw/cat_04.jpg","https://gist.github.com/rm-hull/8859515c9dce89935ac2/raw/cat_05.jpg","https://gist.github.com/rm-hull/8859515c9dce89935ac2/raw/cat_06.jpg","https://gist.github.com/rm-hull/8859515c9dce89935ac2/raw/cat_07.jpg","https://gist.github.com/rm-hull/8859515c9dce89935ac2/raw/cat_08.jpg"], null);
demo.rm_hull_5491968.core.random_cat = (function demo$rm_hull_5491968$core$random_cat(){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(demo.rm_hull_5491968.core.cat_resources,cljs.core.rand_int(cljs.core.count(demo.rm_hull_5491968.core.cat_resources)));
});
demo.rm_hull_5491968.core.load_image_BANG_ = (function demo$rm_hull_5491968$core$load_image_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___25443 = arguments.length;
var i__5898__auto___25444 = (0);
while(true){
if((i__5898__auto___25444 < len__5897__auto___25443)){
args__5903__auto__.push((arguments[i__5898__auto___25444]));

var G__25448 = (i__5898__auto___25444 + (1));
i__5898__auto___25444 = G__25448;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return demo.rm_hull_5491968.core.load_image_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(demo.rm_hull_5491968.core.load_image_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24995){
var vec__24996 = p__24995;
var callback_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24996,(0),null);
var img_25451 = (new Image());
if(cljs.core.truth_(callback_fn)){
(img_25451.onload = (function (){
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(img_25451) : callback_fn.call(null,img_25451));
}));
} else {
}

(img_25451.crossOrigin = "anonymous");

(img_25451.src = (enchilada.proxy_request.cljs$core$IFn$_invoke$arity$1 ? enchilada.proxy_request.cljs$core$IFn$_invoke$arity$1(url) : enchilada.proxy_request.call(null,url)));

return demo.rm_hull_5491968.core.img;
}));

(demo.rm_hull_5491968.core.load_image_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(demo.rm_hull_5491968.core.load_image_BANG_.cljs$lang$applyTo = (function (seq24987){
var G__24988 = cljs.core.first(seq24987);
var seq24987__$1 = cljs.core.next(seq24987);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24988,seq24987__$1);
}));

demo.rm_hull_5491968.core.offset = (function demo$rm_hull_5491968$core$offset(p__25013,w){
var vec__25015 = p__25013;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25015,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25015,(1),null);
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
var seq__25044_25469 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
var chunk__25060_25470 = null;
var count__25061_25471 = (0);
var i__25062_25472 = (0);
while(true){
if((i__25062_25472 < count__25061_25471)){
var y_25474 = chunk__25060_25470.cljs$core$IIndexed$_nth$arity$2(null,i__25062_25472);
var seq__25063_25478 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
var chunk__25069_25479 = null;
var count__25070_25480 = (0);
var i__25071_25481 = (0);
while(true){
if((i__25071_25481 < count__25070_25480)){
var x_25485 = chunk__25069_25479.cljs$core$IIndexed$_nth$arity$2(null,i__25071_25481);
var i_25486 = demo.rm_hull_5491968.core.offset(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_25485,y_25474], null),n);
var o_25487 = demo.rm_hull_5491968.core.offset((mapper_fn.cljs$core$IFn$_invoke$arity$2 ? mapper_fn.cljs$core$IFn$_invoke$arity$2(x_25485,y_25474) : mapper_fn.call(null,x_25485,y_25474)),n);
var seq__25073_25488 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
var chunk__25075_25489 = null;
var count__25076_25490 = (0);
var i__25077_25491 = (0);
while(true){
if((i__25077_25491 < count__25076_25490)){
var c_25492 = chunk__25075_25489.cljs$core$IIndexed$_nth$arity$2(null,i__25077_25491);
(data_out[(o_25487 + c_25492)] = (data_in[(i_25486 + c_25492)]));


var G__25493 = seq__25073_25488;
var G__25494 = chunk__25075_25489;
var G__25495 = count__25076_25490;
var G__25496 = (i__25077_25491 + (1));
seq__25073_25488 = G__25493;
chunk__25075_25489 = G__25494;
count__25076_25490 = G__25495;
i__25077_25491 = G__25496;
continue;
} else {
var temp__5825__auto___25497 = cljs.core.seq(seq__25073_25488);
if(temp__5825__auto___25497){
var seq__25073_25498__$1 = temp__5825__auto___25497;
if(cljs.core.chunked_seq_QMARK_(seq__25073_25498__$1)){
var c__5694__auto___25500 = cljs.core.chunk_first(seq__25073_25498__$1);
var G__25501 = cljs.core.chunk_rest(seq__25073_25498__$1);
var G__25502 = c__5694__auto___25500;
var G__25503 = cljs.core.count(c__5694__auto___25500);
var G__25504 = (0);
seq__25073_25488 = G__25501;
chunk__25075_25489 = G__25502;
count__25076_25490 = G__25503;
i__25077_25491 = G__25504;
continue;
} else {
var c_25508 = cljs.core.first(seq__25073_25498__$1);
(data_out[(o_25487 + c_25508)] = (data_in[(i_25486 + c_25508)]));


var G__25512 = cljs.core.next(seq__25073_25498__$1);
var G__25513 = null;
var G__25514 = (0);
var G__25515 = (0);
seq__25073_25488 = G__25512;
chunk__25075_25489 = G__25513;
count__25076_25490 = G__25514;
i__25077_25491 = G__25515;
continue;
}
} else {
}
}
break;
}

var G__25516 = seq__25063_25478;
var G__25517 = chunk__25069_25479;
var G__25518 = count__25070_25480;
var G__25519 = (i__25071_25481 + (1));
seq__25063_25478 = G__25516;
chunk__25069_25479 = G__25517;
count__25070_25480 = G__25518;
i__25071_25481 = G__25519;
continue;
} else {
var temp__5825__auto___25520 = cljs.core.seq(seq__25063_25478);
if(temp__5825__auto___25520){
var seq__25063_25521__$1 = temp__5825__auto___25520;
if(cljs.core.chunked_seq_QMARK_(seq__25063_25521__$1)){
var c__5694__auto___25522 = cljs.core.chunk_first(seq__25063_25521__$1);
var G__25523 = cljs.core.chunk_rest(seq__25063_25521__$1);
var G__25524 = c__5694__auto___25522;
var G__25525 = cljs.core.count(c__5694__auto___25522);
var G__25526 = (0);
seq__25063_25478 = G__25523;
chunk__25069_25479 = G__25524;
count__25070_25480 = G__25525;
i__25071_25481 = G__25526;
continue;
} else {
var x_25527 = cljs.core.first(seq__25063_25521__$1);
var i_25528 = demo.rm_hull_5491968.core.offset(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_25527,y_25474], null),n);
var o_25529 = demo.rm_hull_5491968.core.offset((mapper_fn.cljs$core$IFn$_invoke$arity$2 ? mapper_fn.cljs$core$IFn$_invoke$arity$2(x_25527,y_25474) : mapper_fn.call(null,x_25527,y_25474)),n);
var seq__25065_25530 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
var chunk__25066_25531 = null;
var count__25067_25532 = (0);
var i__25068_25533 = (0);
while(true){
if((i__25068_25533 < count__25067_25532)){
var c_25534 = chunk__25066_25531.cljs$core$IIndexed$_nth$arity$2(null,i__25068_25533);
(data_out[(o_25529 + c_25534)] = (data_in[(i_25528 + c_25534)]));


var G__25535 = seq__25065_25530;
var G__25536 = chunk__25066_25531;
var G__25537 = count__25067_25532;
var G__25538 = (i__25068_25533 + (1));
seq__25065_25530 = G__25535;
chunk__25066_25531 = G__25536;
count__25067_25532 = G__25537;
i__25068_25533 = G__25538;
continue;
} else {
var temp__5825__auto___25545__$1 = cljs.core.seq(seq__25065_25530);
if(temp__5825__auto___25545__$1){
var seq__25065_25547__$1 = temp__5825__auto___25545__$1;
if(cljs.core.chunked_seq_QMARK_(seq__25065_25547__$1)){
var c__5694__auto___25552 = cljs.core.chunk_first(seq__25065_25547__$1);
var G__25553 = cljs.core.chunk_rest(seq__25065_25547__$1);
var G__25554 = c__5694__auto___25552;
var G__25555 = cljs.core.count(c__5694__auto___25552);
var G__25556 = (0);
seq__25065_25530 = G__25553;
chunk__25066_25531 = G__25554;
count__25067_25532 = G__25555;
i__25068_25533 = G__25556;
continue;
} else {
var c_25564 = cljs.core.first(seq__25065_25547__$1);
(data_out[(o_25529 + c_25564)] = (data_in[(i_25528 + c_25564)]));


var G__25566 = cljs.core.next(seq__25065_25547__$1);
var G__25567 = null;
var G__25568 = (0);
var G__25569 = (0);
seq__25065_25530 = G__25566;
chunk__25066_25531 = G__25567;
count__25067_25532 = G__25568;
i__25068_25533 = G__25569;
continue;
}
} else {
}
}
break;
}

var G__25570 = cljs.core.next(seq__25063_25521__$1);
var G__25571 = null;
var G__25572 = (0);
var G__25573 = (0);
seq__25063_25478 = G__25570;
chunk__25069_25479 = G__25571;
count__25070_25480 = G__25572;
i__25071_25481 = G__25573;
continue;
}
} else {
}
}
break;
}

var G__25574 = seq__25044_25469;
var G__25575 = chunk__25060_25470;
var G__25576 = count__25061_25471;
var G__25577 = (i__25062_25472 + (1));
seq__25044_25469 = G__25574;
chunk__25060_25470 = G__25575;
count__25061_25471 = G__25576;
i__25062_25472 = G__25577;
continue;
} else {
var temp__5825__auto___25579 = cljs.core.seq(seq__25044_25469);
if(temp__5825__auto___25579){
var seq__25044_25583__$1 = temp__5825__auto___25579;
if(cljs.core.chunked_seq_QMARK_(seq__25044_25583__$1)){
var c__5694__auto___25586 = cljs.core.chunk_first(seq__25044_25583__$1);
var G__25588 = cljs.core.chunk_rest(seq__25044_25583__$1);
var G__25589 = c__5694__auto___25586;
var G__25590 = cljs.core.count(c__5694__auto___25586);
var G__25591 = (0);
seq__25044_25469 = G__25588;
chunk__25060_25470 = G__25589;
count__25061_25471 = G__25590;
i__25062_25472 = G__25591;
continue;
} else {
var y_25593 = cljs.core.first(seq__25044_25583__$1);
var seq__25045_25594 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
var chunk__25051_25595 = null;
var count__25052_25596 = (0);
var i__25053_25597 = (0);
while(true){
if((i__25053_25597 < count__25052_25596)){
var x_25599 = chunk__25051_25595.cljs$core$IIndexed$_nth$arity$2(null,i__25053_25597);
var i_25600 = demo.rm_hull_5491968.core.offset(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_25599,y_25593], null),n);
var o_25601 = demo.rm_hull_5491968.core.offset((mapper_fn.cljs$core$IFn$_invoke$arity$2 ? mapper_fn.cljs$core$IFn$_invoke$arity$2(x_25599,y_25593) : mapper_fn.call(null,x_25599,y_25593)),n);
var seq__25055_25602 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
var chunk__25056_25603 = null;
var count__25057_25604 = (0);
var i__25058_25605 = (0);
while(true){
if((i__25058_25605 < count__25057_25604)){
var c_25606 = chunk__25056_25603.cljs$core$IIndexed$_nth$arity$2(null,i__25058_25605);
(data_out[(o_25601 + c_25606)] = (data_in[(i_25600 + c_25606)]));


var G__25607 = seq__25055_25602;
var G__25608 = chunk__25056_25603;
var G__25609 = count__25057_25604;
var G__25610 = (i__25058_25605 + (1));
seq__25055_25602 = G__25607;
chunk__25056_25603 = G__25608;
count__25057_25604 = G__25609;
i__25058_25605 = G__25610;
continue;
} else {
var temp__5825__auto___25611__$1 = cljs.core.seq(seq__25055_25602);
if(temp__5825__auto___25611__$1){
var seq__25055_25612__$1 = temp__5825__auto___25611__$1;
if(cljs.core.chunked_seq_QMARK_(seq__25055_25612__$1)){
var c__5694__auto___25613 = cljs.core.chunk_first(seq__25055_25612__$1);
var G__25614 = cljs.core.chunk_rest(seq__25055_25612__$1);
var G__25615 = c__5694__auto___25613;
var G__25616 = cljs.core.count(c__5694__auto___25613);
var G__25617 = (0);
seq__25055_25602 = G__25614;
chunk__25056_25603 = G__25615;
count__25057_25604 = G__25616;
i__25058_25605 = G__25617;
continue;
} else {
var c_25618 = cljs.core.first(seq__25055_25612__$1);
(data_out[(o_25601 + c_25618)] = (data_in[(i_25600 + c_25618)]));


var G__25619 = cljs.core.next(seq__25055_25612__$1);
var G__25620 = null;
var G__25621 = (0);
var G__25622 = (0);
seq__25055_25602 = G__25619;
chunk__25056_25603 = G__25620;
count__25057_25604 = G__25621;
i__25058_25605 = G__25622;
continue;
}
} else {
}
}
break;
}

var G__25625 = seq__25045_25594;
var G__25626 = chunk__25051_25595;
var G__25627 = count__25052_25596;
var G__25628 = (i__25053_25597 + (1));
seq__25045_25594 = G__25625;
chunk__25051_25595 = G__25626;
count__25052_25596 = G__25627;
i__25053_25597 = G__25628;
continue;
} else {
var temp__5825__auto___25629__$1 = cljs.core.seq(seq__25045_25594);
if(temp__5825__auto___25629__$1){
var seq__25045_25632__$1 = temp__5825__auto___25629__$1;
if(cljs.core.chunked_seq_QMARK_(seq__25045_25632__$1)){
var c__5694__auto___25633 = cljs.core.chunk_first(seq__25045_25632__$1);
var G__25634 = cljs.core.chunk_rest(seq__25045_25632__$1);
var G__25635 = c__5694__auto___25633;
var G__25636 = cljs.core.count(c__5694__auto___25633);
var G__25637 = (0);
seq__25045_25594 = G__25634;
chunk__25051_25595 = G__25635;
count__25052_25596 = G__25636;
i__25053_25597 = G__25637;
continue;
} else {
var x_25638 = cljs.core.first(seq__25045_25632__$1);
var i_25639 = demo.rm_hull_5491968.core.offset(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_25638,y_25593], null),n);
var o_25640 = demo.rm_hull_5491968.core.offset((mapper_fn.cljs$core$IFn$_invoke$arity$2 ? mapper_fn.cljs$core$IFn$_invoke$arity$2(x_25638,y_25593) : mapper_fn.call(null,x_25638,y_25593)),n);
var seq__25047_25641 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
var chunk__25048_25642 = null;
var count__25049_25643 = (0);
var i__25050_25644 = (0);
while(true){
if((i__25050_25644 < count__25049_25643)){
var c_25645 = chunk__25048_25642.cljs$core$IIndexed$_nth$arity$2(null,i__25050_25644);
(data_out[(o_25640 + c_25645)] = (data_in[(i_25639 + c_25645)]));


var G__25647 = seq__25047_25641;
var G__25648 = chunk__25048_25642;
var G__25649 = count__25049_25643;
var G__25650 = (i__25050_25644 + (1));
seq__25047_25641 = G__25647;
chunk__25048_25642 = G__25648;
count__25049_25643 = G__25649;
i__25050_25644 = G__25650;
continue;
} else {
var temp__5825__auto___25651__$2 = cljs.core.seq(seq__25047_25641);
if(temp__5825__auto___25651__$2){
var seq__25047_25652__$1 = temp__5825__auto___25651__$2;
if(cljs.core.chunked_seq_QMARK_(seq__25047_25652__$1)){
var c__5694__auto___25653 = cljs.core.chunk_first(seq__25047_25652__$1);
var G__25654 = cljs.core.chunk_rest(seq__25047_25652__$1);
var G__25655 = c__5694__auto___25653;
var G__25656 = cljs.core.count(c__5694__auto___25653);
var G__25657 = (0);
seq__25047_25641 = G__25654;
chunk__25048_25642 = G__25655;
count__25049_25643 = G__25656;
i__25050_25644 = G__25657;
continue;
} else {
var c_25659 = cljs.core.first(seq__25047_25652__$1);
(data_out[(o_25640 + c_25659)] = (data_in[(i_25639 + c_25659)]));


var G__25661 = cljs.core.next(seq__25047_25652__$1);
var G__25662 = null;
var G__25663 = (0);
var G__25664 = (0);
seq__25047_25641 = G__25661;
chunk__25048_25642 = G__25662;
count__25049_25643 = G__25663;
i__25050_25644 = G__25664;
continue;
}
} else {
}
}
break;
}

var G__25667 = cljs.core.next(seq__25045_25632__$1);
var G__25668 = null;
var G__25669 = (0);
var G__25670 = (0);
seq__25045_25594 = G__25667;
chunk__25051_25595 = G__25668;
count__25052_25596 = G__25669;
i__25053_25597 = G__25670;
continue;
}
} else {
}
}
break;
}

var G__25671 = cljs.core.next(seq__25044_25583__$1);
var G__25672 = null;
var G__25673 = (0);
var G__25674 = (0);
seq__25044_25469 = G__25671;
chunk__25060_25470 = G__25672;
count__25061_25471 = G__25673;
i__25062_25472 = G__25674;
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
enchilada.core.show((enchilada.canvas.cljs$core$IFn$_invoke$arity$0 ? enchilada.canvas.cljs$core$IFn$_invoke$arity$0() : enchilada.canvas.call(null)));
demo.rm_hull_5491968.core.load_image_BANG_.cljs$core$IFn$_invoke$arity$variadic(demo.rm_hull_5491968.core.random_cat(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([demo.rm_hull_5491968.core.animate], 0));

//# sourceMappingURL=demo.rm_hull_5491968.core.js.map
