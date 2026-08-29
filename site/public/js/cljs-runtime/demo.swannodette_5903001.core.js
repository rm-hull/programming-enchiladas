goog.provide('demo.swannodette_5903001.core');
demo.swannodette_5903001.core.timeout = (function demo$swannodette_5903001$core$timeout(ms){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
setTimeout((function (){
return cljs.core.async.close_BANG_(c);
}),ms);

return c;
});
demo.swannodette_5903001.core.fake_search = (function demo$swannodette_5903001$core$fake_search(kind){
return (function (c,query){
var G__25609 = cljs.core.async._LT__BANG_(demo.swannodette_5903001.core.timeout(cljs.core.rand_int((100))));
var G__25610 = cljs.core.async._GT__BANG_(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind,query], null));
return (demo.swannodette_5903001.core.go.cljs$core$IFn$_invoke$arity$2 ? demo.swannodette_5903001.core.go.cljs$core$IFn$_invoke$arity$2(G__25609,G__25610) : demo.swannodette_5903001.core.go.call(null,G__25609,G__25610));
});
});
demo.swannodette_5903001.core.web1 = demo.swannodette_5903001.core.fake_search(new cljs.core.Keyword(null,"web1","web1",-1174650695));
demo.swannodette_5903001.core.web2 = demo.swannodette_5903001.core.fake_search(new cljs.core.Keyword(null,"web2","web2",-1084558679));
demo.swannodette_5903001.core.image1 = demo.swannodette_5903001.core.fake_search(new cljs.core.Keyword(null,"image1","image1",-1807775062));
demo.swannodette_5903001.core.image2 = demo.swannodette_5903001.core.fake_search(new cljs.core.Keyword(null,"image2","image2",1782942225));
demo.swannodette_5903001.core.video1 = demo.swannodette_5903001.core.fake_search(new cljs.core.Keyword(null,"video1","video1",2082827824));
demo.swannodette_5903001.core.video2 = demo.swannodette_5903001.core.fake_search(new cljs.core.Keyword(null,"video2","video2",1533294772));
demo.swannodette_5903001.core.fastest = (function demo$swannodette_5903001$core$fastest(var_args){
var args__5903__auto__ = [];
var len__5897__auto___25662 = arguments.length;
var i__5898__auto___25663 = (0);
while(true){
if((i__5898__auto___25663 < len__5897__auto___25662)){
args__5903__auto__.push((arguments[i__5898__auto___25663]));

var G__25664 = (i__5898__auto___25663 + (1));
i__5898__auto___25663 = G__25664;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return demo.swannodette_5903001.core.fastest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(demo.swannodette_5903001.core.fastest.cljs$core$IFn$_invoke$arity$variadic = (function (query,replicas){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var seq__25619_25668 = cljs.core.seq(replicas);
var chunk__25620_25669 = null;
var count__25621_25670 = (0);
var i__25622_25671 = (0);
while(true){
if((i__25622_25671 < count__25621_25670)){
var replica_25672 = chunk__25620_25669.cljs$core$IIndexed$_nth$arity$2(null,i__25622_25671);
(replica_25672.cljs$core$IFn$_invoke$arity$2 ? replica_25672.cljs$core$IFn$_invoke$arity$2(c,query) : replica_25672.call(null,c,query));


var G__25673 = seq__25619_25668;
var G__25674 = chunk__25620_25669;
var G__25675 = count__25621_25670;
var G__25676 = (i__25622_25671 + (1));
seq__25619_25668 = G__25673;
chunk__25620_25669 = G__25674;
count__25621_25670 = G__25675;
i__25622_25671 = G__25676;
continue;
} else {
var temp__5825__auto___25677 = cljs.core.seq(seq__25619_25668);
if(temp__5825__auto___25677){
var seq__25619_25678__$1 = temp__5825__auto___25677;
if(cljs.core.chunked_seq_QMARK_(seq__25619_25678__$1)){
var c__5694__auto___25679 = cljs.core.chunk_first(seq__25619_25678__$1);
var G__25680 = cljs.core.chunk_rest(seq__25619_25678__$1);
var G__25681 = c__5694__auto___25679;
var G__25682 = cljs.core.count(c__5694__auto___25679);
var G__25683 = (0);
seq__25619_25668 = G__25680;
chunk__25620_25669 = G__25681;
count__25621_25670 = G__25682;
i__25622_25671 = G__25683;
continue;
} else {
var replica_25684 = cljs.core.first(seq__25619_25678__$1);
(replica_25684.cljs$core$IFn$_invoke$arity$2 ? replica_25684.cljs$core$IFn$_invoke$arity$2(c,query) : replica_25684.call(null,c,query));


var G__25685 = cljs.core.next(seq__25619_25678__$1);
var G__25686 = null;
var G__25687 = (0);
var G__25688 = (0);
seq__25619_25668 = G__25685;
chunk__25620_25669 = G__25686;
count__25621_25670 = G__25687;
i__25622_25671 = G__25688;
continue;
}
} else {
}
}
break;
}

return c;
}));

(demo.swannodette_5903001.core.fastest.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(demo.swannodette_5903001.core.fastest.cljs$lang$applyTo = (function (seq25614){
var G__25615 = cljs.core.first(seq25614);
var seq25614__$1 = cljs.core.next(seq25614);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25615,seq25614__$1);
}));

demo.swannodette_5903001.core.google = (function demo$swannodette_5903001$core$google(query){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var t = demo.swannodette_5903001.core.timeout((80));
var G__25649_25689 = cljs.core.async._GT__BANG_(c,cljs.core.async._LT__BANG_(demo.swannodette_5903001.core.fastest.cljs$core$IFn$_invoke$arity$variadic(query,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([demo.swannodette_5903001.core.web1,demo.swannodette_5903001.core.web2], 0))));
(demo.swannodette_5903001.core.go.cljs$core$IFn$_invoke$arity$1 ? demo.swannodette_5903001.core.go.cljs$core$IFn$_invoke$arity$1(G__25649_25689) : demo.swannodette_5903001.core.go.call(null,G__25649_25689));

var G__25651_25690 = cljs.core.async._GT__BANG_(c,cljs.core.async._LT__BANG_(demo.swannodette_5903001.core.fastest.cljs$core$IFn$_invoke$arity$variadic(query,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([demo.swannodette_5903001.core.image1,demo.swannodette_5903001.core.image2], 0))));
(demo.swannodette_5903001.core.go.cljs$core$IFn$_invoke$arity$1 ? demo.swannodette_5903001.core.go.cljs$core$IFn$_invoke$arity$1(G__25651_25690) : demo.swannodette_5903001.core.go.call(null,G__25651_25690));

var G__25652_25692 = cljs.core.async._GT__BANG_(c,cljs.core.async._LT__BANG_(demo.swannodette_5903001.core.fastest.cljs$core$IFn$_invoke$arity$variadic(query,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([demo.swannodette_5903001.core.video1,demo.swannodette_5903001.core.video2], 0))));
(demo.swannodette_5903001.core.go.cljs$core$IFn$_invoke$arity$1 ? demo.swannodette_5903001.core.go.cljs$core$IFn$_invoke$arity$1(G__25652_25692) : demo.swannodette_5903001.core.go.call(null,G__25652_25692));

var G__25653 = (function (){var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(3))){
return ret;
} else {
var G__25693 = (i + (1));
var G__25694 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(function (){var G__25657 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,t], null);
var G__25658 = (function (){var fexpr__25659 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.swannodette_5903001.core.v], null);
return (fexpr__25659.cljs$core$IFn$_invoke$arity$1 ? fexpr__25659.cljs$core$IFn$_invoke$arity$1(demo.swannodette_5903001.core.v) : fexpr__25659.call(null,demo.swannodette_5903001.core.v));
})();
return (demo.swannodette_5903001.core.alt_BANG_.cljs$core$IFn$_invoke$arity$2 ? demo.swannodette_5903001.core.alt_BANG_.cljs$core$IFn$_invoke$arity$2(G__25657,G__25658) : demo.swannodette_5903001.core.alt_BANG_.call(null,G__25657,G__25658));
})());
i = G__25693;
ret = G__25694;
continue;
}
break;
}
})();
return (demo.swannodette_5903001.core.go.cljs$core$IFn$_invoke$arity$1 ? demo.swannodette_5903001.core.go.cljs$core$IFn$_invoke$arity$1(G__25653) : demo.swannodette_5903001.core.go.call(null,G__25653));
});
var G__25660_25696 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.async._LT__BANG_(demo.swannodette_5903001.core.google("clojure"))], 0));
(demo.swannodette_5903001.core.go.cljs$core$IFn$_invoke$arity$1 ? demo.swannodette_5903001.core.go.cljs$core$IFn$_invoke$arity$1(G__25660_25696) : demo.swannodette_5903001.core.go.call(null,G__25660_25696));

//# sourceMappingURL=demo.swannodette_5903001.core.js.map
