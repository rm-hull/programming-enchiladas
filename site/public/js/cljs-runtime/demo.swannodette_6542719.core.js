goog.provide('demo.swannodette_6542719.core');
demo.swannodette_6542719.core.f = (function demo$swannodette_6542719$core$f(left,right){
var c__21914__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21915__auto__ = (function (){var switch__21764__auto__ = (function (state_25327){
var state_val_25328 = (state_25327[(1)]);
if((state_val_25328 === (1))){
var state_25327__$1 = state_25327;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25327__$1,(3),right);
} else {
if((state_val_25328 === (2))){
var inst_25325 = (state_25327[(2)]);
var state_25327__$1 = state_25327;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25327__$1,inst_25325);
} else {
if((state_val_25328 === (3))){
var inst_25322 = (state_25327[(2)]);
var inst_25323 = (inst_25322 + (1));
var state_25327__$1 = state_25327;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25327__$1,(2),left,inst_25323);
} else {
return null;
}
}
}
});
return (function() {
var demo$swannodette_6542719$core$f_$_state_machine__21765__auto__ = null;
var demo$swannodette_6542719$core$f_$_state_machine__21765__auto____0 = (function (){
var statearr_25334 = [null,null,null,null,null,null,null];
(statearr_25334[(0)] = demo$swannodette_6542719$core$f_$_state_machine__21765__auto__);

(statearr_25334[(1)] = (1));

return statearr_25334;
});
var demo$swannodette_6542719$core$f_$_state_machine__21765__auto____1 = (function (state_25327){
while(true){
var ret_value__21766__auto__ = (function (){try{while(true){
var result__21767__auto__ = switch__21764__auto__(state_25327);
if(cljs.core.keyword_identical_QMARK_(result__21767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21767__auto__;
}
break;
}
}catch (e25336){var ex__21768__auto__ = e25336;
var statearr_25337_25383 = state_25327;
(statearr_25337_25383[(2)] = ex__21768__auto__);


if(cljs.core.seq((state_25327[(4)]))){
var statearr_25338_25384 = state_25327;
(statearr_25338_25384[(1)] = cljs.core.first((state_25327[(4)])));

} else {
throw ex__21768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25386 = state_25327;
state_25327 = G__25386;
continue;
} else {
return ret_value__21766__auto__;
}
break;
}
});
demo$swannodette_6542719$core$f_$_state_machine__21765__auto__ = function(state_25327){
switch(arguments.length){
case 0:
return demo$swannodette_6542719$core$f_$_state_machine__21765__auto____0.call(this);
case 1:
return demo$swannodette_6542719$core$f_$_state_machine__21765__auto____1.call(this,state_25327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$swannodette_6542719$core$f_$_state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$0 = demo$swannodette_6542719$core$f_$_state_machine__21765__auto____0;
demo$swannodette_6542719$core$f_$_state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$1 = demo$swannodette_6542719$core$f_$_state_machine__21765__auto____1;
return demo$swannodette_6542719$core$f_$_state_machine__21765__auto__;
})()
})();
var state__21916__auto__ = (function (){var statearr_25339 = f__21915__auto__();
(statearr_25339[(6)] = c__21914__auto__);

return statearr_25339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21916__auto__);
}));

return c__21914__auto__;
});
var leftmost_25392 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var rightmost_25393 = (function (){var n = (100000);
var left = leftmost_25392;
while(true){
if((!((n > (0))))){
return left;
} else {
var right = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
demo.swannodette_6542719.core.f(left,right);

var G__25394 = (n - (1));
var G__25395 = right;
n = G__25394;
left = G__25395;
continue;
}
break;
}
})();
var c__21914__auto___25396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21915__auto__ = (function (){var switch__21764__auto__ = (function (state_25354){
var state_val_25355 = (state_25354[(1)]);
if((state_val_25355 === (1))){
var inst_25340 = cljs.core.system_time();
var state_25354__$1 = (function (){var statearr_25364 = state_25354;
(statearr_25364[(7)] = inst_25340);

return statearr_25364;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25354__$1,(2),rightmost_25393,(1));
} else {
if((state_val_25355 === (2))){
var inst_25342 = (state_25354[(2)]);
var state_25354__$1 = (function (){var statearr_25365 = state_25354;
(statearr_25365[(8)] = inst_25342);

return statearr_25365;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25354__$1,(3),leftmost_25392);
} else {
if((state_val_25355 === (3))){
var inst_25340 = (state_25354[(7)]);
var inst_25344 = (state_25354[(2)]);
var inst_25345 = console.log(inst_25344);
var inst_25346 = cljs.core.system_time();
var inst_25347 = (inst_25346 - inst_25340);
var inst_25348 = inst_25347.toFixed((6));
var inst_25349 = (""+"Elapsed time: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25348)+" msecs");
var inst_25350 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_25349], 0));
var state_25354__$1 = (function (){var statearr_25366 = state_25354;
(statearr_25366[(9)] = inst_25350);

return statearr_25366;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25354__$1,inst_25345);
} else {
return null;
}
}
}
});
return (function() {
var demo$swannodette_6542719$core$state_machine__21765__auto__ = null;
var demo$swannodette_6542719$core$state_machine__21765__auto____0 = (function (){
var statearr_25369 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25369[(0)] = demo$swannodette_6542719$core$state_machine__21765__auto__);

(statearr_25369[(1)] = (1));

return statearr_25369;
});
var demo$swannodette_6542719$core$state_machine__21765__auto____1 = (function (state_25354){
while(true){
var ret_value__21766__auto__ = (function (){try{while(true){
var result__21767__auto__ = switch__21764__auto__(state_25354);
if(cljs.core.keyword_identical_QMARK_(result__21767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21767__auto__;
}
break;
}
}catch (e25370){var ex__21768__auto__ = e25370;
var statearr_25372_25408 = state_25354;
(statearr_25372_25408[(2)] = ex__21768__auto__);


if(cljs.core.seq((state_25354[(4)]))){
var statearr_25373_25410 = state_25354;
(statearr_25373_25410[(1)] = cljs.core.first((state_25354[(4)])));

} else {
throw ex__21768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25412 = state_25354;
state_25354 = G__25412;
continue;
} else {
return ret_value__21766__auto__;
}
break;
}
});
demo$swannodette_6542719$core$state_machine__21765__auto__ = function(state_25354){
switch(arguments.length){
case 0:
return demo$swannodette_6542719$core$state_machine__21765__auto____0.call(this);
case 1:
return demo$swannodette_6542719$core$state_machine__21765__auto____1.call(this,state_25354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$swannodette_6542719$core$state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$0 = demo$swannodette_6542719$core$state_machine__21765__auto____0;
demo$swannodette_6542719$core$state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$1 = demo$swannodette_6542719$core$state_machine__21765__auto____1;
return demo$swannodette_6542719$core$state_machine__21765__auto__;
})()
})();
var state__21916__auto__ = (function (){var statearr_25375 = f__21915__auto__();
(statearr_25375[(6)] = c__21914__auto___25396);

return statearr_25375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21916__auto__);
}));


//# sourceMappingURL=demo.swannodette_6542719.core.js.map
