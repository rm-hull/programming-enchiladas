goog.provide('big_bang.timer');

/**
* @constructor
 * @implements {big_bang.protocol.IChannelSource}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
big_bang.timer.t_big_bang$timer33266 = (function (msec,payload_generator_fn,comm_chan,timer_chan,interval_fn,interval_id,meta33267){
this.msec = msec;
this.payload_generator_fn = payload_generator_fn;
this.comm_chan = comm_chan;
this.timer_chan = timer_chan;
this.interval_fn = interval_fn;
this.interval_id = interval_id;
this.meta33267 = meta33267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(big_bang.timer.t_big_bang$timer33266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33268,meta33267__$1){
var self__ = this;
var _33268__$1 = this;
return (new big_bang.timer.t_big_bang$timer33266(self__.msec,self__.payload_generator_fn,self__.comm_chan,self__.timer_chan,self__.interval_fn,self__.interval_id,meta33267__$1));
}));

(big_bang.timer.t_big_bang$timer33266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33268){
var self__ = this;
var _33268__$1 = this;
return self__.meta33267;
}));

(big_bang.timer.t_big_bang$timer33266.prototype.big_bang$protocol$IChannelSource$ = cljs.core.PROTOCOL_SENTINEL);

(big_bang.timer.t_big_bang$timer33266.prototype.big_bang$protocol$IChannelSource$data_channel$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.timer_chan;
}));

(big_bang.timer.t_big_bang$timer33266.prototype.big_bang$protocol$IChannelSource$shutdown_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var c__27470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_33280){
var state_val_33281 = (state_33280[(1)]);
if((state_val_33281 === (1))){
var inst_33277 = cljs.core.async.close_BANG_(self__.comm_chan);
var inst_33278 = clearInterval(self__.interval_id);
var state_33280__$1 = (function (){var statearr_33283 = state_33280;
(statearr_33283[(7)] = inst_33277);

return statearr_33283;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33280__$1,inst_33278);
} else {
return null;
}
});
return (function() {
var big_bang$timer$state_machine__27042__auto__ = null;
var big_bang$timer$state_machine__27042__auto____0 = (function (){
var statearr_33284 = [null,null,null,null,null,null,null,null];
(statearr_33284[(0)] = big_bang$timer$state_machine__27042__auto__);

(statearr_33284[(1)] = (1));

return statearr_33284;
});
var big_bang$timer$state_machine__27042__auto____1 = (function (state_33280){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_33280);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e33286){var ex__27046__auto__ = e33286;
var statearr_33287_33305 = state_33280;
(statearr_33287_33305[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_33280[(4)]))){
var statearr_33288_33306 = state_33280;
(statearr_33288_33306[(1)] = cljs.core.first((state_33280[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33307 = state_33280;
state_33280 = G__33307;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
big_bang$timer$state_machine__27042__auto__ = function(state_33280){
switch(arguments.length){
case 0:
return big_bang$timer$state_machine__27042__auto____0.call(this);
case 1:
return big_bang$timer$state_machine__27042__auto____1.call(this,state_33280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
big_bang$timer$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = big_bang$timer$state_machine__27042__auto____0;
big_bang$timer$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = big_bang$timer$state_machine__27042__auto____1;
return big_bang$timer$state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_33289 = f__27471__auto__();
(statearr_33289[(6)] = c__27470__auto__);

return statearr_33289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));

return c__27470__auto__;
}));

(big_bang.timer.t_big_bang$timer33266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"msec","msec",-1372914914,null),new cljs.core.Symbol(null,"payload-generator-fn","payload-generator-fn",-79001362,null),new cljs.core.Symbol(null,"comm-chan","comm-chan",1087841541,null),new cljs.core.Symbol(null,"timer-chan","timer-chan",370081541,null),new cljs.core.Symbol(null,"interval-fn","interval-fn",90923797,null),new cljs.core.Symbol(null,"interval-id","interval-id",1719816887,null),new cljs.core.Symbol(null,"meta33267","meta33267",1506025135,null)], null);
}));

(big_bang.timer.t_big_bang$timer33266.cljs$lang$type = true);

(big_bang.timer.t_big_bang$timer33266.cljs$lang$ctorStr = "big-bang.timer/t_big_bang$timer33266");

(big_bang.timer.t_big_bang$timer33266.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"big-bang.timer/t_big_bang$timer33266");
}));

/**
 * Positional factory function for big-bang.timer/t_big_bang$timer33266.
 */
big_bang.timer.__GT_t_big_bang$timer33266 = (function big_bang$timer$__GT_t_big_bang$timer33266(msec,payload_generator_fn,comm_chan,timer_chan,interval_fn,interval_id,meta33267){
return (new big_bang.timer.t_big_bang$timer33266(msec,payload_generator_fn,comm_chan,timer_chan,interval_fn,interval_id,meta33267));
});


/**
 * Creates and starts an interval timer, regularly delivering messages to a
 * timer channel, accessible via (data-channel ...) in the returned IChannelSource
 * object.
 * 
 * The payload message, by default, contains the system time in milliseconds,
 * but can be supplied via the second optional argument, which should be a
 * 0-arity function. It is assumed that it may have side-effects.
 */
big_bang.timer.interval_ticker = (function big_bang$timer$interval_ticker(var_args){
var G__33216 = arguments.length;
switch (G__33216) {
case 1:
return big_bang.timer.interval_ticker.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return big_bang.timer.interval_ticker.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(big_bang.timer.interval_ticker.cljs$core$IFn$_invoke$arity$1 = (function (msec){
return big_bang.timer.interval_ticker.cljs$core$IFn$_invoke$arity$2(msec,(function (){
return (new Date()).getTime();
}));
}));

(big_bang.timer.interval_ticker.cljs$core$IFn$_invoke$arity$2 = (function (msec,payload_generator_fn){
var comm_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var timer_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((1)));
var interval_fn = (function (){
var c__27470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_33232){
var state_val_33233 = (state_33232[(1)]);
if((state_val_33233 === (1))){
var state_33232__$1 = state_33232;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33232__$1,(2),comm_chan);
} else {
if((state_val_33233 === (2))){
var inst_33220 = (state_33232[(7)]);
var inst_33220__$1 = (state_33232[(2)]);
var state_33232__$1 = (function (){var statearr_33236 = state_33232;
(statearr_33236[(7)] = inst_33220__$1);

return statearr_33236;
})();
if(cljs.core.truth_(inst_33220__$1)){
var statearr_33237_33309 = state_33232__$1;
(statearr_33237_33309[(1)] = (3));

} else {
var statearr_33238_33310 = state_33232__$1;
(statearr_33238_33310[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (3))){
var inst_33222 = (payload_generator_fn.cljs$core$IFn$_invoke$arity$0 ? payload_generator_fn.cljs$core$IFn$_invoke$arity$0() : payload_generator_fn.call(null));
var state_33232__$1 = state_33232;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33232__$1,(6),timer_chan,inst_33222);
} else {
if((state_val_33233 === (4))){
var inst_33228 = cljs.core.async.close_BANG_(timer_chan);
var state_33232__$1 = state_33232;
var statearr_33244_33311 = state_33232__$1;
(statearr_33244_33311[(2)] = inst_33228);

(statearr_33244_33311[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (5))){
var inst_33230 = (state_33232[(2)]);
var state_33232__$1 = state_33232;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33232__$1,inst_33230);
} else {
if((state_val_33233 === (6))){
var inst_33220 = (state_33232[(7)]);
var inst_33224 = (state_33232[(2)]);
var state_33232__$1 = (function (){var statearr_33245 = state_33232;
(statearr_33245[(8)] = inst_33224);

return statearr_33245;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33232__$1,(7),comm_chan,inst_33220);
} else {
if((state_val_33233 === (7))){
var inst_33226 = (state_33232[(2)]);
var state_33232__$1 = state_33232;
var statearr_33246_33312 = state_33232__$1;
(statearr_33246_33312[(2)] = inst_33226);

(statearr_33246_33312[(1)] = (5));


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
});
return (function() {
var big_bang$timer$state_machine__27042__auto__ = null;
var big_bang$timer$state_machine__27042__auto____0 = (function (){
var statearr_33247 = [null,null,null,null,null,null,null,null,null];
(statearr_33247[(0)] = big_bang$timer$state_machine__27042__auto__);

(statearr_33247[(1)] = (1));

return statearr_33247;
});
var big_bang$timer$state_machine__27042__auto____1 = (function (state_33232){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_33232);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e33249){var ex__27046__auto__ = e33249;
var statearr_33251_33313 = state_33232;
(statearr_33251_33313[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_33232[(4)]))){
var statearr_33253_33314 = state_33232;
(statearr_33253_33314[(1)] = cljs.core.first((state_33232[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33315 = state_33232;
state_33232 = G__33315;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
big_bang$timer$state_machine__27042__auto__ = function(state_33232){
switch(arguments.length){
case 0:
return big_bang$timer$state_machine__27042__auto____0.call(this);
case 1:
return big_bang$timer$state_machine__27042__auto____1.call(this,state_33232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
big_bang$timer$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = big_bang$timer$state_machine__27042__auto____0;
big_bang$timer$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = big_bang$timer$state_machine__27042__auto____1;
return big_bang$timer$state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_33254 = f__27471__auto__();
(statearr_33254[(6)] = c__27470__auto__);

return statearr_33254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));

return c__27470__auto__;
});
var interval_id = setInterval(interval_fn,msec);
var c__27470__auto___33316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_33259){
var state_val_33260 = (state_33259[(1)]);
if((state_val_33260 === (1))){
var state_33259__$1 = state_33259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33259__$1,(2),comm_chan,interval_id);
} else {
if((state_val_33260 === (2))){
var inst_33257 = (state_33259[(2)]);
var state_33259__$1 = state_33259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33259__$1,inst_33257);
} else {
return null;
}
}
});
return (function() {
var big_bang$timer$state_machine__27042__auto__ = null;
var big_bang$timer$state_machine__27042__auto____0 = (function (){
var statearr_33261 = [null,null,null,null,null,null,null];
(statearr_33261[(0)] = big_bang$timer$state_machine__27042__auto__);

(statearr_33261[(1)] = (1));

return statearr_33261;
});
var big_bang$timer$state_machine__27042__auto____1 = (function (state_33259){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_33259);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e33262){var ex__27046__auto__ = e33262;
var statearr_33263_33320 = state_33259;
(statearr_33263_33320[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_33259[(4)]))){
var statearr_33264_33321 = state_33259;
(statearr_33264_33321[(1)] = cljs.core.first((state_33259[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33322 = state_33259;
state_33259 = G__33322;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
big_bang$timer$state_machine__27042__auto__ = function(state_33259){
switch(arguments.length){
case 0:
return big_bang$timer$state_machine__27042__auto____0.call(this);
case 1:
return big_bang$timer$state_machine__27042__auto____1.call(this,state_33259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
big_bang$timer$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = big_bang$timer$state_machine__27042__auto____0;
big_bang$timer$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = big_bang$timer$state_machine__27042__auto____1;
return big_bang$timer$state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_33265 = f__27471__auto__();
(statearr_33265[(6)] = c__27470__auto___33316);

return statearr_33265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));


return (new big_bang.timer.t_big_bang$timer33266(msec,payload_generator_fn,comm_chan,timer_chan,interval_fn,interval_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(big_bang.timer.interval_ticker.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=big_bang.timer.js.map
