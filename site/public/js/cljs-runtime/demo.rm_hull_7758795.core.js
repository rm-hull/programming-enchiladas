goog.provide('demo.rm_hull_7758795.core');
demo.rm_hull_7758795.core.sin_vals = (function demo$rm_hull_7758795$core$sin_vals(offset){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34183_SHARP_){
return Math.sin(p1__34183_SHARP_);
}),cljs.core.iterate(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,0.1),offset));
});
var events_34245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__27470__auto___34246 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_34197){
var state_val_34198 = (state_34197[(1)]);
if((state_val_34198 === (1))){
var inst_34184 = (0);
var state_34197__$1 = (function (){var statearr_34199 = state_34197;
(statearr_34199[(7)] = inst_34184);

return statearr_34199;
})();
var statearr_34200_34247 = state_34197__$1;
(statearr_34200_34247[(2)] = null);

(statearr_34200_34247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34198 === (2))){
var inst_34186 = cljs.core.async.timeout((200));
var state_34197__$1 = state_34197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34197__$1,(4),inst_34186);
} else {
if((state_val_34198 === (3))){
var inst_34195 = (state_34197[(2)]);
var state_34197__$1 = state_34197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34197__$1,inst_34195);
} else {
if((state_val_34198 === (4))){
var inst_34184 = (state_34197[(7)]);
var inst_34188 = (state_34197[(2)]);
var inst_34189 = demo.rm_hull_7758795.core.sin_vals(inst_34184);
var state_34197__$1 = (function (){var statearr_34201 = state_34197;
(statearr_34201[(8)] = inst_34188);

return statearr_34201;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34197__$1,(5),events_34245,inst_34189);
} else {
if((state_val_34198 === (5))){
var inst_34184 = (state_34197[(7)]);
var inst_34191 = (state_34197[(2)]);
var inst_34192 = (inst_34184 + (1));
var inst_34184__$1 = inst_34192;
var state_34197__$1 = (function (){var statearr_34202 = state_34197;
(statearr_34202[(9)] = inst_34191);

(statearr_34202[(7)] = inst_34184__$1);

return statearr_34202;
})();
var statearr_34203_34249 = state_34197__$1;
(statearr_34203_34249[(2)] = null);

(statearr_34203_34249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});
return (function() {
var demo$rm_hull_7758795$core$state_machine__27042__auto__ = null;
var demo$rm_hull_7758795$core$state_machine__27042__auto____0 = (function (){
var statearr_34205 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34205[(0)] = demo$rm_hull_7758795$core$state_machine__27042__auto__);

(statearr_34205[(1)] = (1));

return statearr_34205;
});
var demo$rm_hull_7758795$core$state_machine__27042__auto____1 = (function (state_34197){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_34197);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e34206){var ex__27046__auto__ = e34206;
var statearr_34207_34250 = state_34197;
(statearr_34207_34250[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_34197[(4)]))){
var statearr_34208_34251 = state_34197;
(statearr_34208_34251[(1)] = cljs.core.first((state_34197[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34252 = state_34197;
state_34197 = G__34252;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
demo$rm_hull_7758795$core$state_machine__27042__auto__ = function(state_34197){
switch(arguments.length){
case 0:
return demo$rm_hull_7758795$core$state_machine__27042__auto____0.call(this);
case 1:
return demo$rm_hull_7758795$core$state_machine__27042__auto____1.call(this,state_34197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$rm_hull_7758795$core$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = demo$rm_hull_7758795$core$state_machine__27042__auto____0;
demo$rm_hull_7758795$core$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = demo$rm_hull_7758795$core$state_machine__27042__auto____1;
return demo$rm_hull_7758795$core$state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_34209 = f__27471__auto__();
(statearr_34209[(6)] = c__27470__auto___34246);

return statearr_34209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));


var c__27470__auto___34253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_34229){
var state_val_34230 = (state_34229[(1)]);
if((state_val_34230 === (1))){
var inst_34210 = (0);
var state_34229__$1 = (function (){var statearr_34231 = state_34229;
(statearr_34231[(7)] = inst_34210);

return statearr_34231;
})();
var statearr_34232_34254 = state_34229__$1;
(statearr_34232_34254[(2)] = null);

(statearr_34232_34254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (2))){
var inst_34210 = (state_34229[(7)]);
var inst_34212 = (inst_34210 < (10));
var state_34229__$1 = state_34229;
if(cljs.core.truth_(inst_34212)){
var statearr_34233_34255 = state_34229__$1;
(statearr_34233_34255[(1)] = (4));

} else {
var statearr_34234_34256 = state_34229__$1;
(statearr_34234_34256[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (3))){
var inst_34227 = (state_34229[(2)]);
var state_34229__$1 = state_34229;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34229__$1,inst_34227);
} else {
if((state_val_34230 === (4))){
var inst_34210 = (state_34229[(7)]);
var inst_34214 = (function (){var n__5762__auto__ = (10);
var _ = inst_34210;
return (function (x,y){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
});
})();
var inst_34215 = cljs.core.range.cljs$core$IFn$_invoke$arity$1((3));
var state_34229__$1 = (function (){var statearr_34235 = state_34229;
(statearr_34235[(8)] = inst_34214);

(statearr_34235[(9)] = inst_34215);

return statearr_34235;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34229__$1,(7),events_34245);
} else {
if((state_val_34230 === (5))){
var state_34229__$1 = state_34229;
var statearr_34236_34258 = state_34229__$1;
(statearr_34236_34258[(2)] = null);

(statearr_34236_34258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (6))){
var inst_34225 = (state_34229[(2)]);
var state_34229__$1 = state_34229;
var statearr_34237_34259 = state_34229__$1;
(statearr_34237_34259[(2)] = inst_34225);

(statearr_34237_34259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (7))){
var inst_34214 = (state_34229[(8)]);
var inst_34215 = (state_34229[(9)]);
var inst_34210 = (state_34229[(7)]);
var inst_34217 = (state_34229[(2)]);
var inst_34218 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),inst_34217);
var inst_34219 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(inst_34214,inst_34215,inst_34218);
var inst_34220 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_34219], 0));
var inst_34221 = (inst_34210 + (1));
var inst_34210__$1 = inst_34221;
var state_34229__$1 = (function (){var statearr_34238 = state_34229;
(statearr_34238[(10)] = inst_34220);

(statearr_34238[(7)] = inst_34210__$1);

return statearr_34238;
})();
var statearr_34239_34260 = state_34229__$1;
(statearr_34239_34260[(2)] = null);

(statearr_34239_34260[(1)] = (2));


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
var demo$rm_hull_7758795$core$state_machine__27042__auto__ = null;
var demo$rm_hull_7758795$core$state_machine__27042__auto____0 = (function (){
var statearr_34240 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34240[(0)] = demo$rm_hull_7758795$core$state_machine__27042__auto__);

(statearr_34240[(1)] = (1));

return statearr_34240;
});
var demo$rm_hull_7758795$core$state_machine__27042__auto____1 = (function (state_34229){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_34229);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e34241){var ex__27046__auto__ = e34241;
var statearr_34242_34261 = state_34229;
(statearr_34242_34261[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_34229[(4)]))){
var statearr_34243_34262 = state_34229;
(statearr_34243_34262[(1)] = cljs.core.first((state_34229[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34263 = state_34229;
state_34229 = G__34263;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
demo$rm_hull_7758795$core$state_machine__27042__auto__ = function(state_34229){
switch(arguments.length){
case 0:
return demo$rm_hull_7758795$core$state_machine__27042__auto____0.call(this);
case 1:
return demo$rm_hull_7758795$core$state_machine__27042__auto____1.call(this,state_34229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$rm_hull_7758795$core$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = demo$rm_hull_7758795$core$state_machine__27042__auto____0;
demo$rm_hull_7758795$core$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = demo$rm_hull_7758795$core$state_machine__27042__auto____1;
return demo$rm_hull_7758795$core$state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_34244 = f__27471__auto__();
(statearr_34244[(6)] = c__27470__auto___34253);

return statearr_34244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));


//# sourceMappingURL=demo.rm_hull_7758795.core.js.map
