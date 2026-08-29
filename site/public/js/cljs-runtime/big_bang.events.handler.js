goog.provide('big_bang.events.handler');

/**
* @constructor
 * @implements {big_bang.protocol.IChannelSource}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
big_bang.events.handler.t_big_bang$events$handler33370 = (function (element,p__33351,map__33352,opts,event_type,prevent_default_QMARK_,ch,handler,meta33371){
this.element = element;
this.p__33351 = p__33351;
this.map__33352 = map__33352;
this.opts = opts;
this.event_type = event_type;
this.prevent_default_QMARK_ = prevent_default_QMARK_;
this.ch = ch;
this.handler = handler;
this.meta33371 = meta33371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(big_bang.events.handler.t_big_bang$events$handler33370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33372,meta33371__$1){
var self__ = this;
var _33372__$1 = this;
return (new big_bang.events.handler.t_big_bang$events$handler33370(self__.element,self__.p__33351,self__.map__33352,self__.opts,self__.event_type,self__.prevent_default_QMARK_,self__.ch,self__.handler,meta33371__$1));
}));

(big_bang.events.handler.t_big_bang$events$handler33370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33372){
var self__ = this;
var _33372__$1 = this;
return self__.meta33371;
}));

(big_bang.events.handler.t_big_bang$events$handler33370.prototype.big_bang$protocol$IChannelSource$ = cljs.core.PROTOCOL_SENTINEL);

(big_bang.events.handler.t_big_bang$events$handler33370.prototype.big_bang$protocol$IChannelSource$data_channel$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.ch;
}));

(big_bang.events.handler.t_big_bang$events$handler33370.prototype.big_bang$protocol$IChannelSource$shutdown_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.core.async.close_BANG_(self__.ch);

return self__.element.removeEventListener(self__.handler);
}));

(big_bang.events.handler.t_big_bang$events$handler33370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"p__33351","p__33351",-1432199710,null),new cljs.core.Symbol(null,"map__33352","map__33352",-250972127,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"event-type","event-type",1960254340,null),new cljs.core.Symbol(null,"prevent-default?","prevent-default?",474963639,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"meta33371","meta33371",-1813703582,null)], null);
}));

(big_bang.events.handler.t_big_bang$events$handler33370.cljs$lang$type = true);

(big_bang.events.handler.t_big_bang$events$handler33370.cljs$lang$ctorStr = "big-bang.events.handler/t_big_bang$events$handler33370");

(big_bang.events.handler.t_big_bang$events$handler33370.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"big-bang.events.handler/t_big_bang$events$handler33370");
}));

/**
 * Positional factory function for big-bang.events.handler/t_big_bang$events$handler33370.
 */
big_bang.events.handler.__GT_t_big_bang$events$handler33370 = (function big_bang$events$handler$__GT_t_big_bang$events$handler33370(element,p__33351,map__33352,opts,event_type,prevent_default_QMARK_,ch,handler,meta33371){
return (new big_bang.events.handler.t_big_bang$events$handler33370(element,p__33351,map__33352,opts,event_type,prevent_default_QMARK_,ch,handler,meta33371));
});


/**
 * Binds an event-type listener to the element. The event-type may be specified
 * as a string or keyword, but can match the published onkey.../onmouse.../etc
 * or custom events posted to components.
 * 
 * Returns a reified IChannelSource which exposes the delivery channel on to
 * which events are posted, and a mechanism to shutdown and de-install the
 * event listener.
 */
big_bang.events.handler.add_event_listener = (function big_bang$events$handler$add_event_listener(var_args){
var args__5903__auto__ = [];
var len__5897__auto___33381 = arguments.length;
var i__5898__auto___33382 = (0);
while(true){
if((i__5898__auto___33382 < len__5897__auto___33381)){
args__5903__auto__.push((arguments[i__5898__auto___33382]));

var G__33383 = (i__5898__auto___33382 + (1));
i__5898__auto___33382 = G__33383;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return big_bang.events.handler.add_event_listener.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(big_bang.events.handler.add_event_listener.cljs$core$IFn$_invoke$arity$variadic = (function (element,p__33351){
var map__33352 = p__33351;
var map__33352__$1 = cljs.core.__destructure_map(map__33352);
var opts = map__33352__$1;
var event_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33352__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var prevent_default_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33352__$1,new cljs.core.Keyword(null,"prevent-default?","prevent-default?",-1165567888));
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var handler = (function (event){
if(cljs.core.truth_(prevent_default_QMARK_)){
big_bang.events.browser.prevent_default(event);
} else {
}

var c__27470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_33362){
var state_val_33363 = (state_33362[(1)]);
if((state_val_33363 === (1))){
var state_33362__$1 = state_33362;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33362__$1,(2),ch,event);
} else {
if((state_val_33363 === (2))){
var inst_33360 = (state_33362[(2)]);
var state_33362__$1 = state_33362;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33362__$1,inst_33360);
} else {
return null;
}
}
});
return (function() {
var big_bang$events$handler$state_machine__27042__auto__ = null;
var big_bang$events$handler$state_machine__27042__auto____0 = (function (){
var statearr_33364 = [null,null,null,null,null,null,null];
(statearr_33364[(0)] = big_bang$events$handler$state_machine__27042__auto__);

(statearr_33364[(1)] = (1));

return statearr_33364;
});
var big_bang$events$handler$state_machine__27042__auto____1 = (function (state_33362){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_33362);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e33365){var ex__27046__auto__ = e33365;
var statearr_33366_33384 = state_33362;
(statearr_33366_33384[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_33362[(4)]))){
var statearr_33367_33385 = state_33362;
(statearr_33367_33385[(1)] = cljs.core.first((state_33362[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33386 = state_33362;
state_33362 = G__33386;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
big_bang$events$handler$state_machine__27042__auto__ = function(state_33362){
switch(arguments.length){
case 0:
return big_bang$events$handler$state_machine__27042__auto____0.call(this);
case 1:
return big_bang$events$handler$state_machine__27042__auto____1.call(this,state_33362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
big_bang$events$handler$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = big_bang$events$handler$state_machine__27042__auto____0;
big_bang$events$handler$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = big_bang$events$handler$state_machine__27042__auto____1;
return big_bang$events$handler$state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_33368 = f__27471__auto__();
(statearr_33368[(6)] = c__27470__auto__);

return statearr_33368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));

return c__27470__auto__;
});
element.addEventListener(cljs.core.name(event_type),handler);

return (new big_bang.events.handler.t_big_bang$events$handler33370(element,p__33351,map__33352__$1,opts,event_type,prevent_default_QMARK_,ch,handler,cljs.core.PersistentArrayMap.EMPTY));
}));

(big_bang.events.handler.add_event_listener.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(big_bang.events.handler.add_event_listener.cljs$lang$applyTo = (function (seq33349){
var G__33350 = cljs.core.first(seq33349);
var seq33349__$1 = cljs.core.next(seq33349);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33350,seq33349__$1);
}));


//# sourceMappingURL=big_bang.events.handler.js.map
