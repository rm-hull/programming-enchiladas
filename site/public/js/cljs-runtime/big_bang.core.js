goog.provide('big_bang.core');
big_bang.core.animation_frame = (function (){var or__5162__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
var or__5162__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__5162__auto____$2)){
return or__5162__auto____$2;
} else {
var or__5162__auto____$3 = window.oRequestAnimationFrame;
if(cljs.core.truth_(or__5162__auto____$3)){
return or__5162__auto____$3;
} else {
var or__5162__auto____$4 = window.msRequestAnimationFrame;
if(cljs.core.truth_(or__5162__auto____$4)){
return or__5162__auto____$4;
} else {
return (function (callback){
return setTimeout(callback,(17));
});
}
}
}
}
}
})();
big_bang.core.send_message = (function big_bang$core$send_message(chan,msg){
if(cljs.core.truth_((function (){var and__5160__auto__ = chan;
if(cljs.core.truth_(and__5160__auto__)){
return msg;
} else {
return and__5160__auto__;
}
})())){
var c__27470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_33428){
var state_val_33429 = (state_33428[(1)]);
if((state_val_33429 === (1))){
var state_33428__$1 = state_33428;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33428__$1,(2),chan,msg);
} else {
if((state_val_33429 === (2))){
var inst_33426 = (state_33428[(2)]);
var state_33428__$1 = state_33428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33428__$1,inst_33426);
} else {
return null;
}
}
});
return (function() {
var big_bang$core$send_message_$_state_machine__27042__auto__ = null;
var big_bang$core$send_message_$_state_machine__27042__auto____0 = (function (){
var statearr_33430 = [null,null,null,null,null,null,null];
(statearr_33430[(0)] = big_bang$core$send_message_$_state_machine__27042__auto__);

(statearr_33430[(1)] = (1));

return statearr_33430;
});
var big_bang$core$send_message_$_state_machine__27042__auto____1 = (function (state_33428){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_33428);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e33431){var ex__27046__auto__ = e33431;
var statearr_33432_33692 = state_33428;
(statearr_33432_33692[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_33428[(4)]))){
var statearr_33433_33693 = state_33428;
(statearr_33433_33693[(1)] = cljs.core.first((state_33428[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33701 = state_33428;
state_33428 = G__33701;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
big_bang$core$send_message_$_state_machine__27042__auto__ = function(state_33428){
switch(arguments.length){
case 0:
return big_bang$core$send_message_$_state_machine__27042__auto____0.call(this);
case 1:
return big_bang$core$send_message_$_state_machine__27042__auto____1.call(this,state_33428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
big_bang$core$send_message_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = big_bang$core$send_message_$_state_machine__27042__auto____0;
big_bang$core$send_message_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = big_bang$core$send_message_$_state_machine__27042__auto____1;
return big_bang$core$send_message_$_state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_33434 = f__27471__auto__();
(statearr_33434[(6)] = c__27470__auto__);

return statearr_33434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));

return c__27470__auto__;
} else {
return null;
}
});
big_bang.core.make_event_source = (function big_bang$core$make_event_source(handler,event_target,event_type){
if(cljs.core.truth_(handler)){
return big_bang.events.handler.add_event_listener.cljs$core$IFn$_invoke$arity$variadic(event_target,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"event-type","event-type",319722813),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(event_type),new cljs.core.Keyword(null,"prevent-default?","prevent-default?",-1165567888),true], 0));
} else {
return big_bang.protocol.no_op();
}
});
big_bang.core.make_receive_source = (function big_bang$core$make_receive_source(handler,receive_channel){
if(cljs.core.truth_((function (){var and__5160__auto__ = handler;
if(cljs.core.truth_(and__5160__auto__)){
return receive_channel;
} else {
return and__5160__auto__;
}
})())){
return big_bang.protocol.wrap_channel(receive_channel);
} else {
return big_bang.protocol.no_op();
}
});
big_bang.core.make_timer_source = (function big_bang$core$make_timer_source(var_args){
var args__5903__auto__ = [];
var len__5897__auto___33747 = arguments.length;
var i__5898__auto___33751 = (0);
while(true){
if((i__5898__auto___33751 < len__5897__auto___33747)){
args__5903__auto__.push((arguments[i__5898__auto___33751]));

var G__33752 = (i__5898__auto___33751 + (1));
i__5898__auto___33751 = G__33752;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return big_bang.core.make_timer_source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(big_bang.core.make_timer_source.cljs$core$IFn$_invoke$arity$variadic = (function (handler,p__33437){
var vec__33438 = p__33437;
var interval_millis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33438,(0),null);
if(cljs.core.truth_(handler)){
return big_bang.timer.interval_ticker.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = interval_millis;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (17);
}
})());
} else {
return big_bang.protocol.no_op();
}
}));

(big_bang.core.make_timer_source.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(big_bang.core.make_timer_source.cljs$lang$applyTo = (function (seq33435){
var G__33436 = cljs.core.first(seq33435);
var seq33435__$1 = cljs.core.next(seq33435);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33436,seq33435__$1);
}));

big_bang.core.as_list = (function big_bang$core$as_list(element_or_coll){
if(cljs.core.truth_((function (){var or__5162__auto__ = cljs.core.seq_QMARK_(element_or_coll);
if(or__5162__auto__){
return or__5162__auto__;
} else {
return cljs.core.array_QMARK_(element_or_coll);
}
})())){
return element_or_coll;
} else {
return (new cljs.core.List(null,element_or_coll,null,(1),null));
}
});
big_bang.core.build_event_sources = (function big_bang$core$build_event_sources(p__33441){
var map__33442 = p__33441;
var map__33442__$1 = cljs.core.__destructure_map(map__33442);
var opts = map__33442__$1;
var event_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33442__$1,new cljs.core.Keyword(null,"event-target","event-target",1020690123));
var on_tick = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33442__$1,new cljs.core.Keyword(null,"on-tick","on-tick",-56973396));
var tick_rate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33442__$1,new cljs.core.Keyword(null,"tick-rate","tick-rate",601757549));
var on_receive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33442__$1,new cljs.core.Keyword(null,"on-receive","on-receive",-706822243));
var receive_channel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33442__$1,new cljs.core.Keyword(null,"receive-channel","receive-channel",1240287920));
var event_target__$1 = (function (){var or__5162__auto__ = event_target;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return document.body;
}
})();
var reserved_handler_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-tick","on-tick",-56973396),null,new cljs.core.Keyword(null,"on-receive","on-receive",-706822243),null], null), null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-name","event-name",927259778),"tick",new cljs.core.Keyword(null,"event-source","event-source",1675295181),big_bang.core.make_timer_source.cljs$core$IFn$_invoke$arity$variadic(on_tick,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick_rate], 0)),new cljs.core.Keyword(null,"handler","handler",-195596612),on_tick], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-name","event-name",927259778),"receive",new cljs.core.Keyword(null,"event-source","event-source",1675295181),big_bang.core.make_receive_source(on_receive,receive_channel),new cljs.core.Keyword(null,"handler","handler",-195596612),on_receive], null)], null),(function (){var iter__5649__auto__ = (function big_bang$core$build_event_sources_$_iter__33445(s__33446){
return (new cljs.core.LazySeq(null,(function (){
var s__33446__$1 = s__33446;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__33446__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__33451 = cljs.core.first(xs__6385__auto__);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33451,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33451,(1),null);
var vec__33454 = cljs.core.re_matches(/on-(.*)/,cljs.core.name(k));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33454,(0),null);
var event_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33454,(1),null);
if(cljs.core.truth_((function (){var and__5160__auto__ = event_type;
if(cljs.core.truth_(and__5160__auto__)){
return ((reserved_handler_names.cljs$core$IFn$_invoke$arity$1 ? reserved_handler_names.cljs$core$IFn$_invoke$arity$1(k) : reserved_handler_names.call(null,k)) == null);
} else {
return and__5160__auto__;
}
})())){
var iterys__5645__auto__ = ((function (s__33446__$1,vec__33454,_,event_type,vec__33451,k,v,xs__6385__auto__,temp__5825__auto__,event_target__$1,reserved_handler_names,map__33442,map__33442__$1,opts,event_target,on_tick,tick_rate,on_receive,receive_channel){
return (function big_bang$core$build_event_sources_$_iter__33445_$_iter__33447(s__33448){
return (new cljs.core.LazySeq(null,((function (s__33446__$1,vec__33454,_,event_type,vec__33451,k,v,xs__6385__auto__,temp__5825__auto__,event_target__$1,reserved_handler_names,map__33442,map__33442__$1,opts,event_target,on_tick,tick_rate,on_receive,receive_channel){
return (function (){
var s__33448__$1 = s__33448;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__33448__$1);
if(temp__5825__auto____$1){
var s__33448__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__33448__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__33448__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__33450 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__33449 = (0);
while(true){
if((i__33449 < size__5648__auto__)){
var target = cljs.core._nth(c__5647__auto__,i__33449);
cljs.core.chunk_append(b__33450,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-name","event-name",927259778),event_type,new cljs.core.Keyword(null,"event-source","event-source",1675295181),big_bang.core.make_event_source(v,target,event_type),new cljs.core.Keyword(null,"handler","handler",-195596612),v], null));

var G__33804 = (i__33449 + (1));
i__33449 = G__33804;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33450),big_bang$core$build_event_sources_$_iter__33445_$_iter__33447(cljs.core.chunk_rest(s__33448__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33450),null);
}
} else {
var target = cljs.core.first(s__33448__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-name","event-name",927259778),event_type,new cljs.core.Keyword(null,"event-source","event-source",1675295181),big_bang.core.make_event_source(v,target,event_type),new cljs.core.Keyword(null,"handler","handler",-195596612),v], null),big_bang$core$build_event_sources_$_iter__33445_$_iter__33447(cljs.core.rest(s__33448__$2)));
}
} else {
return null;
}
break;
}
});})(s__33446__$1,vec__33454,_,event_type,vec__33451,k,v,xs__6385__auto__,temp__5825__auto__,event_target__$1,reserved_handler_names,map__33442,map__33442__$1,opts,event_target,on_tick,tick_rate,on_receive,receive_channel))
,null,null));
});})(s__33446__$1,vec__33454,_,event_type,vec__33451,k,v,xs__6385__auto__,temp__5825__auto__,event_target__$1,reserved_handler_names,map__33442,map__33442__$1,opts,event_target,on_tick,tick_rate,on_receive,receive_channel))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(big_bang.core.as_list(event_target__$1)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,big_bang$core$build_event_sources_$_iter__33445(cljs.core.rest(s__33446__$1)));
} else {
var G__33808 = cljs.core.rest(s__33446__$1);
s__33446__$1 = G__33808;
continue;
}
} else {
var G__33809 = cljs.core.rest(s__33446__$1);
s__33446__$1 = G__33809;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(opts);
})());
});
big_bang.core.shutdown_all = (function big_bang$core$shutdown_all(handlers){
var seq__33462 = cljs.core.seq(handlers);
var chunk__33463 = null;
var count__33464 = (0);
var i__33465 = (0);
while(true){
if((i__33465 < count__33464)){
var handler = chunk__33463.cljs$core$IIndexed$_nth$arity$2(null,i__33465);
big_bang.protocol.shutdown_BANG_(handler);


var G__33811 = seq__33462;
var G__33812 = chunk__33463;
var G__33813 = count__33464;
var G__33814 = (i__33465 + (1));
seq__33462 = G__33811;
chunk__33463 = G__33812;
count__33464 = G__33813;
i__33465 = G__33814;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__33462);
if(temp__5825__auto__){
var seq__33462__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33462__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__33462__$1);
var G__33820 = cljs.core.chunk_rest(seq__33462__$1);
var G__33821 = c__5694__auto__;
var G__33822 = cljs.core.count(c__5694__auto__);
var G__33823 = (0);
seq__33462 = G__33820;
chunk__33463 = G__33821;
count__33464 = G__33822;
i__33465 = G__33823;
continue;
} else {
var handler = cljs.core.first(seq__33462__$1);
big_bang.protocol.shutdown_BANG_(handler);


var G__33824 = cljs.core.next(seq__33462__$1);
var G__33825 = null;
var G__33826 = (0);
var G__33827 = (0);
seq__33462 = G__33824;
chunk__33463 = G__33825;
count__33464 = G__33826;
i__33465 = G__33827;
continue;
}
} else {
return null;
}
}
break;
}
});
big_bang.core.build_dispatch_table = (function big_bang$core$build_dispatch_table(event_sources){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33467_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[big_bang.protocol.data_channel(new cljs.core.Keyword(null,"event-source","event-source",1675295181).cljs$core$IFn$_invoke$arity$1(p1__33467_SHARP_)),p1__33467_SHARP_],null));
}),event_sources));
});
/**
 * Loosely based on Racket's big-bang, but executes in a go-block.
 */
big_bang.core.big_bang = (function big_bang$core$big_bang(var_args){
var args__5903__auto__ = [];
var len__5897__auto___33828 = arguments.length;
var i__5898__auto___33829 = (0);
while(true){
if((i__5898__auto___33829 < len__5897__auto___33828)){
args__5903__auto__.push((arguments[i__5898__auto___33829]));

var G__33830 = (i__5898__auto___33829 + (1));
i__5898__auto___33829 = G__33830;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return big_bang.core.big_bang.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(big_bang.core.big_bang.cljs$core$IFn$_invoke$arity$variadic = (function (p__33474){
var map__33475 = p__33474;
var map__33475__$1 = cljs.core.__destructure_map(map__33475);
var opts = map__33475__$1;
var stop_when_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33475__$1,new cljs.core.Keyword(null,"stop-when?","stop-when?",492554457));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33475__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806));
var on_receive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33475__$1,new cljs.core.Keyword(null,"on-receive","on-receive",-706822243));
var max_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33475__$1,new cljs.core.Keyword(null,"max-frames","max-frames",2144779645));
var playback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33475__$1,new cljs.core.Keyword(null,"playback","playback",-2069416706));
var to_draw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33475__$1,new cljs.core.Keyword(null,"to-draw","to-draw",-1467115105));
var send_channel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33475__$1,new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124));
var event_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33475__$1,new cljs.core.Keyword(null,"event-target","event-target",1020690123));
var on_tick = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33475__$1,new cljs.core.Keyword(null,"on-tick","on-tick",-56973396));
var record_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33475__$1,new cljs.core.Keyword(null,"record?","record?",1349211532));
var tick_rate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33475__$1,new cljs.core.Keyword(null,"tick-rate","tick-rate",601757549));
var receive_channel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33475__$1,new cljs.core.Keyword(null,"receive-channel","receive-channel",1240287920));
var history_builder = (cljs.core.truth_(record_QMARK_)?cljs.core.conj:cljs.core.constantly(null));
var limit_reached_QMARK_ = (cljs.core.truth_(max_frames)?(function (p1__33469_SHARP_){
return (p1__33469_SHARP_ > max_frames);
}):cljs.core.constantly(false));
var stop_when_QMARK___$1 = (function (){var or__5162__auto__ = stop_when_QMARK_;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.constantly(false);
}
})();
var dispatch_table = big_bang.core.build_dispatch_table(big_bang.core.build_event_sources(opts));
var ports = cljs.core.vec(cljs.core.keys(dispatch_table));
if(cljs.core.truth_(to_draw)){
var G__33478_33851 = (function (){
return (to_draw.cljs$core$IFn$_invoke$arity$1 ? to_draw.cljs$core$IFn$_invoke$arity$1(initial_state) : to_draw.call(null,initial_state));
});
(big_bang.core.animation_frame.cljs$core$IFn$_invoke$arity$1 ? big_bang.core.animation_frame.cljs$core$IFn$_invoke$arity$1(G__33478_33851) : big_bang.core.animation_frame.call(null,G__33478_33851));
} else {
}

var c__27470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_33552){
var state_val_33553 = (state_33552[(1)]);
if((state_val_33553 === (7))){
var inst_33516 = (state_33552[(2)]);
var state_33552__$1 = state_33552;
if(cljs.core.truth_(inst_33516)){
var statearr_33560_33861 = state_33552__$1;
(statearr_33560_33861[(1)] = (8));

} else {
var statearr_33561_33863 = state_33552__$1;
(statearr_33561_33863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (1))){
var inst_33482 = initial_state;
var inst_33483 = cljs.core.PersistentVector.EMPTY;
var inst_33484 = inst_33482;
var inst_33485 = inst_33483;
var inst_33486 = (0);
var state_33552__$1 = (function (){var statearr_33564 = state_33552;
(statearr_33564[(7)] = inst_33484);

(statearr_33564[(8)] = inst_33485);

(statearr_33564[(9)] = inst_33486);

return statearr_33564;
})();
var statearr_33567_33867 = state_33552__$1;
(statearr_33567_33867[(2)] = null);

(statearr_33567_33867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (4))){
var inst_33493 = (state_33552[(10)]);
var inst_33496 = (state_33552[(11)]);
var inst_33500 = (state_33552[(12)]);
var inst_33494 = (state_33552[(13)]);
var inst_33484 = (state_33552[(7)]);
var inst_33502 = (state_33552[(14)]);
var inst_33506 = (state_33552[(15)]);
var inst_33486 = (state_33552[(9)]);
var inst_33509 = (state_33552[(16)]);
var inst_33493__$1 = (state_33552[(2)]);
var inst_33494__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33493__$1,(0),null);
var inst_33496__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33493__$1,(1),null);
var inst_33497 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33498 = [inst_33496__$1,new cljs.core.Keyword(null,"handler","handler",-195596612)];
var inst_33499 = (new cljs.core.PersistentVector(null,2,(5),inst_33497,inst_33498,null));
var inst_33500__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch_table,inst_33499);
var inst_33502__$1 = (inst_33500__$1.cljs$core$IFn$_invoke$arity$2 ? inst_33500__$1.cljs$core$IFn$_invoke$arity$2(inst_33494__$1,inst_33484) : inst_33500__$1.call(null,inst_33494__$1,inst_33484));
var inst_33505 = big_bang.package$.extract_world_state(inst_33502__$1);
var inst_33506__$1 = big_bang.package$.extract_message(inst_33502__$1);
var inst_33507 = big_bang.core.send_message(send_channel,inst_33506__$1);
var inst_33509__$1 = limit_reached_QMARK_(inst_33486);
var state_33552__$1 = (function (){var statearr_33569 = state_33552;
(statearr_33569[(10)] = inst_33493__$1);

(statearr_33569[(13)] = inst_33494__$1);

(statearr_33569[(11)] = inst_33496__$1);

(statearr_33569[(12)] = inst_33500__$1);

(statearr_33569[(14)] = inst_33502__$1);

(statearr_33569[(17)] = inst_33505);

(statearr_33569[(15)] = inst_33506__$1);

(statearr_33569[(18)] = inst_33507);

(statearr_33569[(16)] = inst_33509__$1);

return statearr_33569;
})();
if(cljs.core.truth_(inst_33509__$1)){
var statearr_33570_33880 = state_33552__$1;
(statearr_33570_33880[(1)] = (5));

} else {
var statearr_33572_33881 = state_33552__$1;
(statearr_33572_33881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (15))){
var state_33552__$1 = state_33552;
var statearr_33597_33882 = state_33552__$1;
(statearr_33597_33882[(2)] = null);

(statearr_33597_33882[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (13))){
var inst_33537 = (state_33552[(2)]);
var state_33552__$1 = state_33552;
if(cljs.core.truth_(inst_33537)){
var statearr_33598_33884 = state_33552__$1;
(statearr_33598_33884[(1)] = (14));

} else {
var statearr_33600_33886 = state_33552__$1;
(statearr_33600_33886[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (6))){
var inst_33505 = (state_33552[(17)]);
var inst_33513 = (stop_when_QMARK___$1.cljs$core$IFn$_invoke$arity$1 ? stop_when_QMARK___$1.cljs$core$IFn$_invoke$arity$1(inst_33505) : stop_when_QMARK___$1.call(null,inst_33505));
var state_33552__$1 = state_33552;
var statearr_33602_33888 = state_33552__$1;
(statearr_33602_33888[(2)] = inst_33513);

(statearr_33602_33888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (3))){
var inst_33550 = (state_33552[(2)]);
var state_33552__$1 = state_33552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33552__$1,inst_33550);
} else {
if((state_val_33553 === (12))){
var inst_33531 = (state_33552[(19)]);
var state_33552__$1 = state_33552;
var statearr_33607_33889 = state_33552__$1;
(statearr_33607_33889[(2)] = inst_33531);

(statearr_33607_33889[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (2))){
var state_33552__$1 = state_33552;
return cljs.core.async.ioc_alts_BANG_(state_33552__$1,(4),ports);
} else {
if((state_val_33553 === (11))){
var inst_33484 = (state_33552[(7)]);
var inst_33505 = (state_33552[(17)]);
var inst_33534 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_33484,inst_33505);
var state_33552__$1 = state_33552;
var statearr_33609_33890 = state_33552__$1;
(statearr_33609_33890[(2)] = inst_33534);

(statearr_33609_33890[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (9))){
var inst_33531 = (state_33552[(19)]);
var inst_33531__$1 = to_draw;
var state_33552__$1 = (function (){var statearr_33614 = state_33552;
(statearr_33614[(19)] = inst_33531__$1);

return statearr_33614;
})();
if(cljs.core.truth_(inst_33531__$1)){
var statearr_33615_33891 = state_33552__$1;
(statearr_33615_33891[(1)] = (11));

} else {
var statearr_33616_33892 = state_33552__$1;
(statearr_33616_33892[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (5))){
var inst_33509 = (state_33552[(16)]);
var state_33552__$1 = state_33552;
var statearr_33619_33893 = state_33552__$1;
(statearr_33619_33893[(2)] = inst_33509);

(statearr_33619_33893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (14))){
var inst_33484 = (state_33552[(7)]);
var inst_33500 = (state_33552[(12)]);
var inst_33506 = (state_33552[(15)]);
var inst_33486 = (state_33552[(9)]);
var inst_33494 = (state_33552[(13)]);
var inst_33485 = (state_33552[(8)]);
var inst_33502 = (state_33552[(14)]);
var inst_33496 = (state_33552[(11)]);
var inst_33505 = (state_33552[(17)]);
var inst_33493 = (state_33552[(10)]);
var inst_33539 = (function (){var world_state = inst_33484;
var handler = inst_33500;
var message = inst_33506;
var frame = inst_33486;
var value = inst_33494;
var history__$1 = inst_33485;
var handler_result = inst_33502;
var port = inst_33496;
var next_world_state = inst_33505;
var vec__33489 = inst_33493;
return (function (){
return (to_draw.cljs$core$IFn$_invoke$arity$1 ? to_draw.cljs$core$IFn$_invoke$arity$1(next_world_state) : to_draw.call(null,next_world_state));
});
})();
var inst_33540 = (big_bang.core.animation_frame.cljs$core$IFn$_invoke$arity$1 ? big_bang.core.animation_frame.cljs$core$IFn$_invoke$arity$1(inst_33539) : big_bang.core.animation_frame.call(null,inst_33539));
var state_33552__$1 = state_33552;
var statearr_33626_33896 = state_33552__$1;
(statearr_33626_33896[(2)] = inst_33540);

(statearr_33626_33896[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (16))){
var inst_33485 = (state_33552[(8)]);
var inst_33505 = (state_33552[(17)]);
var inst_33486 = (state_33552[(9)]);
var inst_33543 = (state_33552[(2)]);
var inst_33544 = (history_builder.cljs$core$IFn$_invoke$arity$2 ? history_builder.cljs$core$IFn$_invoke$arity$2(inst_33485,inst_33505) : history_builder.call(null,inst_33485,inst_33505));
var inst_33545 = (inst_33486 + (1));
var inst_33484 = inst_33505;
var inst_33485__$1 = inst_33544;
var inst_33486__$1 = inst_33545;
var state_33552__$1 = (function (){var statearr_33629 = state_33552;
(statearr_33629[(20)] = inst_33543);

(statearr_33629[(7)] = inst_33484);

(statearr_33629[(8)] = inst_33485__$1);

(statearr_33629[(9)] = inst_33486__$1);

return statearr_33629;
})();
var statearr_33630_33897 = state_33552__$1;
(statearr_33630_33897[(2)] = null);

(statearr_33630_33897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (10))){
var inst_33548 = (state_33552[(2)]);
var state_33552__$1 = state_33552;
var statearr_33632_33898 = state_33552__$1;
(statearr_33632_33898[(2)] = inst_33548);

(statearr_33632_33898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (8))){
var inst_33485 = (state_33552[(8)]);
var inst_33518 = cljs.core.vals(dispatch_table);
var inst_33519 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-source","event-source",1675295181),inst_33518);
var inst_33520 = big_bang.core.shutdown_all(inst_33519);
var state_33552__$1 = (function (){var statearr_33634 = state_33552;
(statearr_33634[(21)] = inst_33520);

return statearr_33634;
})();
var statearr_33638_33899 = state_33552__$1;
(statearr_33638_33899[(2)] = inst_33485);

(statearr_33638_33899[(1)] = (10));


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
var big_bang$core$state_machine__27042__auto__ = null;
var big_bang$core$state_machine__27042__auto____0 = (function (){
var statearr_33649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33649[(0)] = big_bang$core$state_machine__27042__auto__);

(statearr_33649[(1)] = (1));

return statearr_33649;
});
var big_bang$core$state_machine__27042__auto____1 = (function (state_33552){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_33552);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e33651){var ex__27046__auto__ = e33651;
var statearr_33653_33900 = state_33552;
(statearr_33653_33900[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_33552[(4)]))){
var statearr_33654_33901 = state_33552;
(statearr_33654_33901[(1)] = cljs.core.first((state_33552[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33902 = state_33552;
state_33552 = G__33902;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
big_bang$core$state_machine__27042__auto__ = function(state_33552){
switch(arguments.length){
case 0:
return big_bang$core$state_machine__27042__auto____0.call(this);
case 1:
return big_bang$core$state_machine__27042__auto____1.call(this,state_33552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
big_bang$core$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = big_bang$core$state_machine__27042__auto____0;
big_bang$core$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = big_bang$core$state_machine__27042__auto____1;
return big_bang$core$state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_33663 = f__27471__auto__();
(statearr_33663[(6)] = c__27470__auto__);

return statearr_33663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));

return c__27470__auto__;
}));

(big_bang.core.big_bang.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(big_bang.core.big_bang.cljs$lang$applyTo = (function (seq33472){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33472));
}));

big_bang.core.big_bang_BANG_ = big_bang.core.big_bang;

//# sourceMappingURL=big_bang.core.js.map
