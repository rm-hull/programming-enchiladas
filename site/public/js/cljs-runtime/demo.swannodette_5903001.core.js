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
var c__27470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_35462){
var state_val_35463 = (state_35462[(1)]);
if((state_val_35463 === (1))){
var inst_35452 = cljs.core.rand_int((100));
var inst_35453 = demo.swannodette_5903001.core.timeout(inst_35452);
var state_35462__$1 = state_35462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35462__$1,(2),inst_35453);
} else {
if((state_val_35463 === (2))){
var inst_35455 = (state_35462[(2)]);
var inst_35456 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35457 = [kind,query];
var inst_35458 = (new cljs.core.PersistentVector(null,2,(5),inst_35456,inst_35457,null));
var state_35462__$1 = (function (){var statearr_35473 = state_35462;
(statearr_35473[(7)] = inst_35455);

return statearr_35473;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35462__$1,(3),c,inst_35458);
} else {
if((state_val_35463 === (3))){
var inst_35460 = (state_35462[(2)]);
var state_35462__$1 = state_35462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35462__$1,inst_35460);
} else {
return null;
}
}
}
});
return (function() {
var demo$swannodette_5903001$core$fake_search_$_state_machine__27042__auto__ = null;
var demo$swannodette_5903001$core$fake_search_$_state_machine__27042__auto____0 = (function (){
var statearr_35475 = [null,null,null,null,null,null,null,null];
(statearr_35475[(0)] = demo$swannodette_5903001$core$fake_search_$_state_machine__27042__auto__);

(statearr_35475[(1)] = (1));

return statearr_35475;
});
var demo$swannodette_5903001$core$fake_search_$_state_machine__27042__auto____1 = (function (state_35462){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_35462);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e35476){var ex__27046__auto__ = e35476;
var statearr_35477_35851 = state_35462;
(statearr_35477_35851[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_35462[(4)]))){
var statearr_35478_35852 = state_35462;
(statearr_35478_35852[(1)] = cljs.core.first((state_35462[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35853 = state_35462;
state_35462 = G__35853;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
demo$swannodette_5903001$core$fake_search_$_state_machine__27042__auto__ = function(state_35462){
switch(arguments.length){
case 0:
return demo$swannodette_5903001$core$fake_search_$_state_machine__27042__auto____0.call(this);
case 1:
return demo$swannodette_5903001$core$fake_search_$_state_machine__27042__auto____1.call(this,state_35462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$swannodette_5903001$core$fake_search_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = demo$swannodette_5903001$core$fake_search_$_state_machine__27042__auto____0;
demo$swannodette_5903001$core$fake_search_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = demo$swannodette_5903001$core$fake_search_$_state_machine__27042__auto____1;
return demo$swannodette_5903001$core$fake_search_$_state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_35479 = f__27471__auto__();
(statearr_35479[(6)] = c__27470__auto__);

return statearr_35479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));

return c__27470__auto__;
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
var len__5897__auto___35857 = arguments.length;
var i__5898__auto___35858 = (0);
while(true){
if((i__5898__auto___35858 < len__5897__auto___35857)){
args__5903__auto__.push((arguments[i__5898__auto___35858]));

var G__35862 = (i__5898__auto___35858 + (1));
i__5898__auto___35858 = G__35862;
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
var seq__35490_35865 = cljs.core.seq(replicas);
var chunk__35491_35866 = null;
var count__35492_35867 = (0);
var i__35493_35868 = (0);
while(true){
if((i__35493_35868 < count__35492_35867)){
var replica_35869 = chunk__35491_35866.cljs$core$IIndexed$_nth$arity$2(null,i__35493_35868);
(replica_35869.cljs$core$IFn$_invoke$arity$2 ? replica_35869.cljs$core$IFn$_invoke$arity$2(c,query) : replica_35869.call(null,c,query));


var G__35870 = seq__35490_35865;
var G__35871 = chunk__35491_35866;
var G__35872 = count__35492_35867;
var G__35873 = (i__35493_35868 + (1));
seq__35490_35865 = G__35870;
chunk__35491_35866 = G__35871;
count__35492_35867 = G__35872;
i__35493_35868 = G__35873;
continue;
} else {
var temp__5825__auto___35874 = cljs.core.seq(seq__35490_35865);
if(temp__5825__auto___35874){
var seq__35490_35875__$1 = temp__5825__auto___35874;
if(cljs.core.chunked_seq_QMARK_(seq__35490_35875__$1)){
var c__5694__auto___35876 = cljs.core.chunk_first(seq__35490_35875__$1);
var G__35877 = cljs.core.chunk_rest(seq__35490_35875__$1);
var G__35878 = c__5694__auto___35876;
var G__35879 = cljs.core.count(c__5694__auto___35876);
var G__35880 = (0);
seq__35490_35865 = G__35877;
chunk__35491_35866 = G__35878;
count__35492_35867 = G__35879;
i__35493_35868 = G__35880;
continue;
} else {
var replica_35881 = cljs.core.first(seq__35490_35875__$1);
(replica_35881.cljs$core$IFn$_invoke$arity$2 ? replica_35881.cljs$core$IFn$_invoke$arity$2(c,query) : replica_35881.call(null,c,query));


var G__35882 = cljs.core.next(seq__35490_35875__$1);
var G__35883 = null;
var G__35884 = (0);
var G__35885 = (0);
seq__35490_35865 = G__35882;
chunk__35491_35866 = G__35883;
count__35492_35867 = G__35884;
i__35493_35868 = G__35885;
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
(demo.swannodette_5903001.core.fastest.cljs$lang$applyTo = (function (seq35486){
var G__35487 = cljs.core.first(seq35486);
var seq35486__$1 = cljs.core.next(seq35486);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35487,seq35486__$1);
}));

demo.swannodette_5903001.core.google = (function demo$swannodette_5903001$core$google(query){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var t = demo.swannodette_5903001.core.timeout((80));
var c__27470__auto___35896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_35503){
var state_val_35504 = (state_35503[(1)]);
if((state_val_35504 === (1))){
var inst_35497 = demo.swannodette_5903001.core.fastest.cljs$core$IFn$_invoke$arity$variadic(query,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([demo.swannodette_5903001.core.web1,demo.swannodette_5903001.core.web2], 0));
var state_35503__$1 = state_35503;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35503__$1,(3),inst_35497);
} else {
if((state_val_35504 === (2))){
var inst_35501 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35503__$1,inst_35501);
} else {
if((state_val_35504 === (3))){
var inst_35499 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35503__$1,(2),c,inst_35499);
} else {
return null;
}
}
}
});
return (function() {
var demo$swannodette_5903001$core$google_$_state_machine__27042__auto__ = null;
var demo$swannodette_5903001$core$google_$_state_machine__27042__auto____0 = (function (){
var statearr_35505 = [null,null,null,null,null,null,null];
(statearr_35505[(0)] = demo$swannodette_5903001$core$google_$_state_machine__27042__auto__);

(statearr_35505[(1)] = (1));

return statearr_35505;
});
var demo$swannodette_5903001$core$google_$_state_machine__27042__auto____1 = (function (state_35503){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_35503);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e35506){var ex__27046__auto__ = e35506;
var statearr_35507_35941 = state_35503;
(statearr_35507_35941[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_35503[(4)]))){
var statearr_35508_35942 = state_35503;
(statearr_35508_35942[(1)] = cljs.core.first((state_35503[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35943 = state_35503;
state_35503 = G__35943;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
demo$swannodette_5903001$core$google_$_state_machine__27042__auto__ = function(state_35503){
switch(arguments.length){
case 0:
return demo$swannodette_5903001$core$google_$_state_machine__27042__auto____0.call(this);
case 1:
return demo$swannodette_5903001$core$google_$_state_machine__27042__auto____1.call(this,state_35503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$swannodette_5903001$core$google_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = demo$swannodette_5903001$core$google_$_state_machine__27042__auto____0;
demo$swannodette_5903001$core$google_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = demo$swannodette_5903001$core$google_$_state_machine__27042__auto____1;
return demo$swannodette_5903001$core$google_$_state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_35509 = f__27471__auto__();
(statearr_35509[(6)] = c__27470__auto___35896);

return statearr_35509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));


var c__27470__auto___35944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_35516){
var state_val_35517 = (state_35516[(1)]);
if((state_val_35517 === (1))){
var inst_35510 = demo.swannodette_5903001.core.fastest.cljs$core$IFn$_invoke$arity$variadic(query,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([demo.swannodette_5903001.core.image1,demo.swannodette_5903001.core.image2], 0));
var state_35516__$1 = state_35516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35516__$1,(3),inst_35510);
} else {
if((state_val_35517 === (2))){
var inst_35514 = (state_35516[(2)]);
var state_35516__$1 = state_35516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35516__$1,inst_35514);
} else {
if((state_val_35517 === (3))){
var inst_35512 = (state_35516[(2)]);
var state_35516__$1 = state_35516;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35516__$1,(2),c,inst_35512);
} else {
return null;
}
}
}
});
return (function() {
var demo$swannodette_5903001$core$google_$_state_machine__27042__auto__ = null;
var demo$swannodette_5903001$core$google_$_state_machine__27042__auto____0 = (function (){
var statearr_35518 = [null,null,null,null,null,null,null];
(statearr_35518[(0)] = demo$swannodette_5903001$core$google_$_state_machine__27042__auto__);

(statearr_35518[(1)] = (1));

return statearr_35518;
});
var demo$swannodette_5903001$core$google_$_state_machine__27042__auto____1 = (function (state_35516){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_35516);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e35519){var ex__27046__auto__ = e35519;
var statearr_35520_35953 = state_35516;
(statearr_35520_35953[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_35516[(4)]))){
var statearr_35521_35955 = state_35516;
(statearr_35521_35955[(1)] = cljs.core.first((state_35516[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35956 = state_35516;
state_35516 = G__35956;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
demo$swannodette_5903001$core$google_$_state_machine__27042__auto__ = function(state_35516){
switch(arguments.length){
case 0:
return demo$swannodette_5903001$core$google_$_state_machine__27042__auto____0.call(this);
case 1:
return demo$swannodette_5903001$core$google_$_state_machine__27042__auto____1.call(this,state_35516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$swannodette_5903001$core$google_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = demo$swannodette_5903001$core$google_$_state_machine__27042__auto____0;
demo$swannodette_5903001$core$google_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = demo$swannodette_5903001$core$google_$_state_machine__27042__auto____1;
return demo$swannodette_5903001$core$google_$_state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_35522 = f__27471__auto__();
(statearr_35522[(6)] = c__27470__auto___35944);

return statearr_35522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));


var c__27470__auto___35957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_35529){
var state_val_35530 = (state_35529[(1)]);
if((state_val_35530 === (1))){
var inst_35523 = demo.swannodette_5903001.core.fastest.cljs$core$IFn$_invoke$arity$variadic(query,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([demo.swannodette_5903001.core.video1,demo.swannodette_5903001.core.video2], 0));
var state_35529__$1 = state_35529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35529__$1,(3),inst_35523);
} else {
if((state_val_35530 === (2))){
var inst_35527 = (state_35529[(2)]);
var state_35529__$1 = state_35529;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35529__$1,inst_35527);
} else {
if((state_val_35530 === (3))){
var inst_35525 = (state_35529[(2)]);
var state_35529__$1 = state_35529;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35529__$1,(2),c,inst_35525);
} else {
return null;
}
}
}
});
return (function() {
var demo$swannodette_5903001$core$google_$_state_machine__27042__auto__ = null;
var demo$swannodette_5903001$core$google_$_state_machine__27042__auto____0 = (function (){
var statearr_35533 = [null,null,null,null,null,null,null];
(statearr_35533[(0)] = demo$swannodette_5903001$core$google_$_state_machine__27042__auto__);

(statearr_35533[(1)] = (1));

return statearr_35533;
});
var demo$swannodette_5903001$core$google_$_state_machine__27042__auto____1 = (function (state_35529){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_35529);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e35534){var ex__27046__auto__ = e35534;
var statearr_35537_35963 = state_35529;
(statearr_35537_35963[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_35529[(4)]))){
var statearr_35539_35964 = state_35529;
(statearr_35539_35964[(1)] = cljs.core.first((state_35529[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35965 = state_35529;
state_35529 = G__35965;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
demo$swannodette_5903001$core$google_$_state_machine__27042__auto__ = function(state_35529){
switch(arguments.length){
case 0:
return demo$swannodette_5903001$core$google_$_state_machine__27042__auto____0.call(this);
case 1:
return demo$swannodette_5903001$core$google_$_state_machine__27042__auto____1.call(this,state_35529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$swannodette_5903001$core$google_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = demo$swannodette_5903001$core$google_$_state_machine__27042__auto____0;
demo$swannodette_5903001$core$google_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = demo$swannodette_5903001$core$google_$_state_machine__27042__auto____1;
return demo$swannodette_5903001$core$google_$_state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_35545 = f__27471__auto__();
(statearr_35545[(6)] = c__27470__auto___35957);

return statearr_35545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));


var c__27470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_35622){
var state_val_35624 = (state_35622[(1)]);
if((state_val_35624 === (7))){
var inst_35586 = (state_35622[(7)]);
var inst_35588 = (state_35622[(8)]);
var inst_35580 = (state_35622[(9)]);
var inst_35589 = (state_35622[(10)]);
var inst_35586__$1 = (state_35622[(2)]);
var inst_35587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35586__$1,(0),null);
var inst_35588__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35586__$1,(1),null);
var inst_35589__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35588__$1,inst_35580);
var state_35622__$1 = (function (){var statearr_35637 = state_35622;
(statearr_35637[(7)] = inst_35586__$1);

(statearr_35637[(11)] = inst_35587);

(statearr_35637[(8)] = inst_35588__$1);

(statearr_35637[(10)] = inst_35589__$1);

return statearr_35637;
})();
if(inst_35589__$1){
var statearr_35648_35970 = state_35622__$1;
(statearr_35648_35970[(1)] = (8));

} else {
var statearr_35654_35971 = state_35622__$1;
(statearr_35654_35971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35624 === (1))){
var inst_35548 = cljs.core.PersistentVector.EMPTY;
var inst_35549 = (0);
var inst_35550 = inst_35548;
var state_35622__$1 = (function (){var statearr_35657 = state_35622;
(statearr_35657[(12)] = inst_35549);

(statearr_35657[(13)] = inst_35550);

return statearr_35657;
})();
var statearr_35658_35972 = state_35622__$1;
(statearr_35658_35972[(2)] = null);

(statearr_35658_35972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35624 === (4))){
var inst_35550 = (state_35622[(13)]);
var state_35622__$1 = state_35622;
var statearr_35659_35973 = state_35622__$1;
(statearr_35659_35973[(2)] = inst_35550);

(statearr_35659_35973[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35624 === (15))){
var state_35622__$1 = state_35622;
var statearr_35660_35978 = state_35622__$1;
(statearr_35660_35978[(2)] = null);

(statearr_35660_35978[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35624 === (13))){
var inst_35550 = (state_35622[(13)]);
var inst_35560 = (state_35622[(14)]);
var inst_35614 = (state_35622[(2)]);
var inst_35615 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_35550,inst_35614);
var inst_35549 = inst_35560;
var inst_35550__$1 = inst_35615;
var state_35622__$1 = (function (){var statearr_35661 = state_35622;
(statearr_35661[(12)] = inst_35549);

(statearr_35661[(13)] = inst_35550__$1);

return statearr_35661;
})();
var statearr_35662_35979 = state_35622__$1;
(statearr_35662_35979[(2)] = null);

(statearr_35662_35979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35624 === (6))){
var inst_35618 = (state_35622[(2)]);
var state_35622__$1 = state_35622;
var statearr_35663_35980 = state_35622__$1;
(statearr_35663_35980[(2)] = inst_35618);

(statearr_35663_35980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35624 === (3))){
var inst_35620 = (state_35622[(2)]);
var state_35622__$1 = state_35622;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35622__$1,inst_35620);
} else {
if((state_val_35624 === (12))){
var inst_35588 = (state_35622[(8)]);
var inst_35602 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35588,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_35622__$1 = state_35622;
if(inst_35602){
var statearr_35664_35981 = state_35622__$1;
(statearr_35664_35981[(1)] = (14));

} else {
var statearr_35666_35982 = state_35622__$1;
(statearr_35666_35982[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35624 === (2))){
var inst_35549 = (state_35622[(12)]);
var inst_35555 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35549,(3));
var state_35622__$1 = state_35622;
if(inst_35555){
var statearr_35669_35984 = state_35622__$1;
(statearr_35669_35984[(1)] = (4));

} else {
var statearr_35670_35985 = state_35622__$1;
(statearr_35670_35985[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35624 === (11))){
var inst_35586 = (state_35622[(7)]);
var inst_35600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35586,(0),null);
var state_35622__$1 = state_35622;
var statearr_35671_35986 = state_35622__$1;
(statearr_35671_35986[(2)] = inst_35600);

(statearr_35671_35986[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35624 === (9))){
var inst_35588 = (state_35622[(8)]);
var inst_35581 = (state_35622[(15)]);
var inst_35593 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35588,inst_35581);
var state_35622__$1 = state_35622;
var statearr_35688_35989 = state_35622__$1;
(statearr_35688_35989[(2)] = inst_35593);

(statearr_35688_35989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35624 === (5))){
var inst_35549 = (state_35622[(12)]);
var inst_35580 = (state_35622[(9)]);
var inst_35581 = (state_35622[(15)]);
var inst_35560 = (inst_35549 + (1));
var inst_35580__$1 = c;
var inst_35581__$1 = t;
var inst_35582 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35583 = [inst_35580__$1,inst_35581__$1];
var inst_35584 = (new cljs.core.PersistentVector(null,2,(5),inst_35582,inst_35583,null));
var state_35622__$1 = (function (){var statearr_35692 = state_35622;
(statearr_35692[(14)] = inst_35560);

(statearr_35692[(9)] = inst_35580__$1);

(statearr_35692[(15)] = inst_35581__$1);

return statearr_35692;
})();
return cljs.core.async.ioc_alts_BANG_(state_35622__$1,(7),inst_35584);
} else {
if((state_val_35624 === (14))){
var inst_35587 = (state_35622[(11)]);
var state_35622__$1 = state_35622;
var statearr_35701_35993 = state_35622__$1;
(statearr_35701_35993[(2)] = inst_35587);

(statearr_35701_35993[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35624 === (16))){
var inst_35612 = (state_35622[(2)]);
var state_35622__$1 = state_35622;
var statearr_35704_35997 = state_35622__$1;
(statearr_35704_35997[(2)] = inst_35612);

(statearr_35704_35997[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35624 === (10))){
var inst_35595 = (state_35622[(2)]);
var state_35622__$1 = state_35622;
if(cljs.core.truth_(inst_35595)){
var statearr_35708_35998 = state_35622__$1;
(statearr_35708_35998[(1)] = (11));

} else {
var statearr_35709_35999 = state_35622__$1;
(statearr_35709_35999[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35624 === (8))){
var inst_35589 = (state_35622[(10)]);
var state_35622__$1 = state_35622;
var statearr_35711_36000 = state_35622__$1;
(statearr_35711_36000[(2)] = inst_35589);

(statearr_35711_36000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var demo$swannodette_5903001$core$google_$_state_machine__27042__auto__ = null;
var demo$swannodette_5903001$core$google_$_state_machine__27042__auto____0 = (function (){
var statearr_35716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35716[(0)] = demo$swannodette_5903001$core$google_$_state_machine__27042__auto__);

(statearr_35716[(1)] = (1));

return statearr_35716;
});
var demo$swannodette_5903001$core$google_$_state_machine__27042__auto____1 = (function (state_35622){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_35622);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e35717){var ex__27046__auto__ = e35717;
var statearr_35718_36001 = state_35622;
(statearr_35718_36001[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_35622[(4)]))){
var statearr_35720_36002 = state_35622;
(statearr_35720_36002[(1)] = cljs.core.first((state_35622[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36004 = state_35622;
state_35622 = G__36004;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
demo$swannodette_5903001$core$google_$_state_machine__27042__auto__ = function(state_35622){
switch(arguments.length){
case 0:
return demo$swannodette_5903001$core$google_$_state_machine__27042__auto____0.call(this);
case 1:
return demo$swannodette_5903001$core$google_$_state_machine__27042__auto____1.call(this,state_35622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$swannodette_5903001$core$google_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = demo$swannodette_5903001$core$google_$_state_machine__27042__auto____0;
demo$swannodette_5903001$core$google_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = demo$swannodette_5903001$core$google_$_state_machine__27042__auto____1;
return demo$swannodette_5903001$core$google_$_state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_35724 = f__27471__auto__();
(statearr_35724[(6)] = c__27470__auto__);

return statearr_35724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));

return c__27470__auto__;
});
var c__27470__auto___36005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_35730){
var state_val_35731 = (state_35730[(1)]);
if((state_val_35731 === (1))){
var inst_35725 = demo.swannodette_5903001.core.google("clojure");
var state_35730__$1 = state_35730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35730__$1,(2),inst_35725);
} else {
if((state_val_35731 === (2))){
var inst_35727 = (state_35730[(2)]);
var inst_35728 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_35727], 0));
var state_35730__$1 = state_35730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35730__$1,inst_35728);
} else {
return null;
}
}
});
return (function() {
var demo$swannodette_5903001$core$state_machine__27042__auto__ = null;
var demo$swannodette_5903001$core$state_machine__27042__auto____0 = (function (){
var statearr_35748 = [null,null,null,null,null,null,null];
(statearr_35748[(0)] = demo$swannodette_5903001$core$state_machine__27042__auto__);

(statearr_35748[(1)] = (1));

return statearr_35748;
});
var demo$swannodette_5903001$core$state_machine__27042__auto____1 = (function (state_35730){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_35730);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e35749){var ex__27046__auto__ = e35749;
var statearr_35750_36009 = state_35730;
(statearr_35750_36009[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_35730[(4)]))){
var statearr_35752_36010 = state_35730;
(statearr_35752_36010[(1)] = cljs.core.first((state_35730[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36011 = state_35730;
state_35730 = G__36011;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
demo$swannodette_5903001$core$state_machine__27042__auto__ = function(state_35730){
switch(arguments.length){
case 0:
return demo$swannodette_5903001$core$state_machine__27042__auto____0.call(this);
case 1:
return demo$swannodette_5903001$core$state_machine__27042__auto____1.call(this,state_35730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$swannodette_5903001$core$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = demo$swannodette_5903001$core$state_machine__27042__auto____0;
demo$swannodette_5903001$core$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = demo$swannodette_5903001$core$state_machine__27042__auto____1;
return demo$swannodette_5903001$core$state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_35777 = f__27471__auto__();
(statearr_35777[(6)] = c__27470__auto___36005);

return statearr_35777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));


//# sourceMappingURL=demo.swannodette_5903001.core.js.map
