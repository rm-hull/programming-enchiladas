goog.provide('demo.swannodette_5882703.core');
demo.swannodette_5882703.core.timeout = (function demo$swannodette_5882703$core$timeout(ms){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
setTimeout((function (){
return cljs.core.async.close_BANG_(c);
}),ms);

return c;
});
var c__27470__auto___36492 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_36461){
var state_val_36462 = (state_36461[(1)]);
if((state_val_36462 === (1))){
var inst_36441 = demo.swannodette_5882703.core.timeout((1000));
var state_36461__$1 = state_36461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36461__$1,(2),inst_36441);
} else {
if((state_val_36462 === (2))){
var inst_36443 = (state_36461[(2)]);
var inst_36446 = console.log("Hello");
var inst_36447 = demo.swannodette_5882703.core.timeout((1000));
var state_36461__$1 = (function (){var statearr_36477 = state_36461;
(statearr_36477[(7)] = inst_36443);

(statearr_36477[(8)] = inst_36446);

return statearr_36477;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36461__$1,(3),inst_36447);
} else {
if((state_val_36462 === (3))){
var inst_36451 = (state_36461[(2)]);
var inst_36452 = console.log("async");
var inst_36454 = demo.swannodette_5882703.core.timeout((1000));
var state_36461__$1 = (function (){var statearr_36478 = state_36461;
(statearr_36478[(9)] = inst_36451);

(statearr_36478[(10)] = inst_36452);

return statearr_36478;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36461__$1,(4),inst_36454);
} else {
if((state_val_36462 === (4))){
var inst_36458 = (state_36461[(2)]);
var inst_36459 = console.log("world!");
var state_36461__$1 = (function (){var statearr_36479 = state_36461;
(statearr_36479[(11)] = inst_36458);

return statearr_36479;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36461__$1,inst_36459);
} else {
return null;
}
}
}
}
});
return (function() {
var demo$swannodette_5882703$core$state_machine__27042__auto__ = null;
var demo$swannodette_5882703$core$state_machine__27042__auto____0 = (function (){
var statearr_36480 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36480[(0)] = demo$swannodette_5882703$core$state_machine__27042__auto__);

(statearr_36480[(1)] = (1));

return statearr_36480;
});
var demo$swannodette_5882703$core$state_machine__27042__auto____1 = (function (state_36461){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_36461);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e36481){var ex__27046__auto__ = e36481;
var statearr_36482_36501 = state_36461;
(statearr_36482_36501[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_36461[(4)]))){
var statearr_36483_36502 = state_36461;
(statearr_36483_36502[(1)] = cljs.core.first((state_36461[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36503 = state_36461;
state_36461 = G__36503;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
demo$swannodette_5882703$core$state_machine__27042__auto__ = function(state_36461){
switch(arguments.length){
case 0:
return demo$swannodette_5882703$core$state_machine__27042__auto____0.call(this);
case 1:
return demo$swannodette_5882703$core$state_machine__27042__auto____1.call(this,state_36461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$swannodette_5882703$core$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = demo$swannodette_5882703$core$state_machine__27042__auto____0;
demo$swannodette_5882703$core$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = demo$swannodette_5882703$core$state_machine__27042__auto____1;
return demo$swannodette_5882703$core$state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_36488 = f__27471__auto__();
(statearr_36488[(6)] = c__27470__auto___36492);

return statearr_36488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));


//# sourceMappingURL=demo.swannodette_5882703.core.js.map
