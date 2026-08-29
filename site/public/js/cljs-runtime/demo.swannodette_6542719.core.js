goog.provide('demo.swannodette_6542719.core');
demo.swannodette_6542719.core.f = (function demo$swannodette_6542719$core$f(left,right){
var c__27470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_36189){
var state_val_36190 = (state_36189[(1)]);
if((state_val_36190 === (1))){
var state_36189__$1 = state_36189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36189__$1,(3),right);
} else {
if((state_val_36190 === (2))){
var inst_36187 = (state_36189[(2)]);
var state_36189__$1 = state_36189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36189__$1,inst_36187);
} else {
if((state_val_36190 === (3))){
var inst_36184 = (state_36189[(2)]);
var inst_36185 = (inst_36184 + (1));
var state_36189__$1 = state_36189;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36189__$1,(2),left,inst_36185);
} else {
return null;
}
}
}
});
return (function() {
var demo$swannodette_6542719$core$f_$_state_machine__27042__auto__ = null;
var demo$swannodette_6542719$core$f_$_state_machine__27042__auto____0 = (function (){
var statearr_36191 = [null,null,null,null,null,null,null];
(statearr_36191[(0)] = demo$swannodette_6542719$core$f_$_state_machine__27042__auto__);

(statearr_36191[(1)] = (1));

return statearr_36191;
});
var demo$swannodette_6542719$core$f_$_state_machine__27042__auto____1 = (function (state_36189){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_36189);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e36192){var ex__27046__auto__ = e36192;
var statearr_36193_36231 = state_36189;
(statearr_36193_36231[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_36189[(4)]))){
var statearr_36194_36232 = state_36189;
(statearr_36194_36232[(1)] = cljs.core.first((state_36189[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36234 = state_36189;
state_36189 = G__36234;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
demo$swannodette_6542719$core$f_$_state_machine__27042__auto__ = function(state_36189){
switch(arguments.length){
case 0:
return demo$swannodette_6542719$core$f_$_state_machine__27042__auto____0.call(this);
case 1:
return demo$swannodette_6542719$core$f_$_state_machine__27042__auto____1.call(this,state_36189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$swannodette_6542719$core$f_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = demo$swannodette_6542719$core$f_$_state_machine__27042__auto____0;
demo$swannodette_6542719$core$f_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = demo$swannodette_6542719$core$f_$_state_machine__27042__auto____1;
return demo$swannodette_6542719$core$f_$_state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_36195 = f__27471__auto__();
(statearr_36195[(6)] = c__27470__auto__);

return statearr_36195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));

return c__27470__auto__;
});
var leftmost_36237 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var rightmost_36238 = (function (){var n = (100000);
var left = leftmost_36237;
while(true){
if((!((n > (0))))){
return left;
} else {
var right = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
demo.swannodette_6542719.core.f(left,right);

var G__36239 = (n - (1));
var G__36240 = right;
n = G__36239;
left = G__36240;
continue;
}
break;
}
})();
var c__27470__auto___36241 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_36212){
var state_val_36213 = (state_36212[(1)]);
if((state_val_36213 === (1))){
var inst_36200 = cljs.core.system_time();
var state_36212__$1 = (function (){var statearr_36214 = state_36212;
(statearr_36214[(7)] = inst_36200);

return statearr_36214;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36212__$1,(2),rightmost_36238,(1));
} else {
if((state_val_36213 === (2))){
var inst_36202 = (state_36212[(2)]);
var state_36212__$1 = (function (){var statearr_36216 = state_36212;
(statearr_36216[(8)] = inst_36202);

return statearr_36216;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36212__$1,(3),leftmost_36237);
} else {
if((state_val_36213 === (3))){
var inst_36200 = (state_36212[(7)]);
var inst_36204 = (state_36212[(2)]);
var inst_36205 = console.log(inst_36204);
var inst_36206 = cljs.core.system_time();
var inst_36207 = (inst_36206 - inst_36200);
var inst_36208 = inst_36207.toFixed((6));
var inst_36209 = (""+"Elapsed time: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36208)+" msecs");
var inst_36210 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_36209], 0));
var state_36212__$1 = (function (){var statearr_36217 = state_36212;
(statearr_36217[(9)] = inst_36210);

return statearr_36217;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36212__$1,inst_36205);
} else {
return null;
}
}
}
});
return (function() {
var demo$swannodette_6542719$core$state_machine__27042__auto__ = null;
var demo$swannodette_6542719$core$state_machine__27042__auto____0 = (function (){
var statearr_36222 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36222[(0)] = demo$swannodette_6542719$core$state_machine__27042__auto__);

(statearr_36222[(1)] = (1));

return statearr_36222;
});
var demo$swannodette_6542719$core$state_machine__27042__auto____1 = (function (state_36212){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_36212);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e36223){var ex__27046__auto__ = e36223;
var statearr_36225_36262 = state_36212;
(statearr_36225_36262[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_36212[(4)]))){
var statearr_36226_36263 = state_36212;
(statearr_36226_36263[(1)] = cljs.core.first((state_36212[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36265 = state_36212;
state_36212 = G__36265;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
demo$swannodette_6542719$core$state_machine__27042__auto__ = function(state_36212){
switch(arguments.length){
case 0:
return demo$swannodette_6542719$core$state_machine__27042__auto____0.call(this);
case 1:
return demo$swannodette_6542719$core$state_machine__27042__auto____1.call(this,state_36212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$swannodette_6542719$core$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = demo$swannodette_6542719$core$state_machine__27042__auto____0;
demo$swannodette_6542719$core$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = demo$swannodette_6542719$core$state_machine__27042__auto____1;
return demo$swannodette_6542719$core$state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_36230 = f__27471__auto__();
(statearr_36230[(6)] = c__27470__auto___36241);

return statearr_36230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));


//# sourceMappingURL=demo.swannodette_6542719.core.js.map
