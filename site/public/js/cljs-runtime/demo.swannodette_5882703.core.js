goog.provide('demo.swannodette_5882703.core');
demo.swannodette_5882703.core.timeout = (function demo$swannodette_5882703$core$timeout(ms){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
setTimeout((function (){
return cljs.core.async.close_BANG_(c);
}),ms);

return c;
});
var c__21914__auto___25102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21915__auto__ = (function (){var switch__21764__auto__ = (function (state_25061){
var state_val_25062 = (state_25061[(1)]);
if((state_val_25062 === (1))){
var inst_25048 = demo.swannodette_5882703.core.timeout((1000));
var state_25061__$1 = state_25061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25061__$1,(2),inst_25048);
} else {
if((state_val_25062 === (2))){
var inst_25050 = (state_25061[(2)]);
var inst_25051 = console.log("Hello");
var inst_25052 = demo.swannodette_5882703.core.timeout((1000));
var state_25061__$1 = (function (){var statearr_25065 = state_25061;
(statearr_25065[(7)] = inst_25050);

(statearr_25065[(8)] = inst_25051);

return statearr_25065;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25061__$1,(3),inst_25052);
} else {
if((state_val_25062 === (3))){
var inst_25054 = (state_25061[(2)]);
var inst_25055 = console.log("async");
var inst_25056 = demo.swannodette_5882703.core.timeout((1000));
var state_25061__$1 = (function (){var statearr_25066 = state_25061;
(statearr_25066[(9)] = inst_25054);

(statearr_25066[(10)] = inst_25055);

return statearr_25066;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25061__$1,(4),inst_25056);
} else {
if((state_val_25062 === (4))){
var inst_25058 = (state_25061[(2)]);
var inst_25059 = console.log("world!");
var state_25061__$1 = (function (){var statearr_25071 = state_25061;
(statearr_25071[(11)] = inst_25058);

return statearr_25071;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25061__$1,inst_25059);
} else {
return null;
}
}
}
}
});
return (function() {
var demo$swannodette_5882703$core$state_machine__21765__auto__ = null;
var demo$swannodette_5882703$core$state_machine__21765__auto____0 = (function (){
var statearr_25072 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25072[(0)] = demo$swannodette_5882703$core$state_machine__21765__auto__);

(statearr_25072[(1)] = (1));

return statearr_25072;
});
var demo$swannodette_5882703$core$state_machine__21765__auto____1 = (function (state_25061){
while(true){
var ret_value__21766__auto__ = (function (){try{while(true){
var result__21767__auto__ = switch__21764__auto__(state_25061);
if(cljs.core.keyword_identical_QMARK_(result__21767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21767__auto__;
}
break;
}
}catch (e25073){var ex__21768__auto__ = e25073;
var statearr_25074_25104 = state_25061;
(statearr_25074_25104[(2)] = ex__21768__auto__);


if(cljs.core.seq((state_25061[(4)]))){
var statearr_25075_25105 = state_25061;
(statearr_25075_25105[(1)] = cljs.core.first((state_25061[(4)])));

} else {
throw ex__21768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25106 = state_25061;
state_25061 = G__25106;
continue;
} else {
return ret_value__21766__auto__;
}
break;
}
});
demo$swannodette_5882703$core$state_machine__21765__auto__ = function(state_25061){
switch(arguments.length){
case 0:
return demo$swannodette_5882703$core$state_machine__21765__auto____0.call(this);
case 1:
return demo$swannodette_5882703$core$state_machine__21765__auto____1.call(this,state_25061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$swannodette_5882703$core$state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$0 = demo$swannodette_5882703$core$state_machine__21765__auto____0;
demo$swannodette_5882703$core$state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$1 = demo$swannodette_5882703$core$state_machine__21765__auto____1;
return demo$swannodette_5882703$core$state_machine__21765__auto__;
})()
})();
var state__21916__auto__ = (function (){var statearr_25088 = f__21915__auto__();
(statearr_25088[(6)] = c__21914__auto___25102);

return statearr_25088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21916__auto__);
}));


//# sourceMappingURL=demo.swannodette_5882703.core.js.map
