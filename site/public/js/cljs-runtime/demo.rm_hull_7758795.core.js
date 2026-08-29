goog.provide('demo.rm_hull_7758795.core');
demo.rm_hull_7758795.core.sin_vals = (function demo$rm_hull_7758795$core$sin_vals(offset){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25820_SHARP_){
return Math.sin(p1__25820_SHARP_);
}),cljs.core.iterate(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,0.1),offset));
});
var events_26180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__21914__auto___26181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21915__auto__ = (function (){var switch__21764__auto__ = (function (state_26021){
var state_val_26022 = (state_26021[(1)]);
if((state_val_26022 === (1))){
var inst_25945 = (0);
var state_26021__$1 = (function (){var statearr_26064 = state_26021;
(statearr_26064[(7)] = inst_25945);

return statearr_26064;
})();
var statearr_26076_26187 = state_26021__$1;
(statearr_26076_26187[(2)] = null);

(statearr_26076_26187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26022 === (2))){
var inst_25947 = cljs.core.async.timeout((200));
var state_26021__$1 = state_26021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26021__$1,(4),inst_25947);
} else {
if((state_val_26022 === (3))){
var inst_26019 = (state_26021[(2)]);
var state_26021__$1 = state_26021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26021__$1,inst_26019);
} else {
if((state_val_26022 === (4))){
var inst_25945 = (state_26021[(7)]);
var inst_25969 = (state_26021[(2)]);
var inst_26013 = demo.rm_hull_7758795.core.sin_vals(inst_25945);
var state_26021__$1 = (function (){var statearr_26110 = state_26021;
(statearr_26110[(8)] = inst_25969);

return statearr_26110;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26021__$1,(5),events_26180,inst_26013);
} else {
if((state_val_26022 === (5))){
var inst_25945 = (state_26021[(7)]);
var inst_26015 = (state_26021[(2)]);
var inst_26016 = (inst_25945 + (1));
var inst_25945__$1 = inst_26016;
var state_26021__$1 = (function (){var statearr_26111 = state_26021;
(statearr_26111[(9)] = inst_26015);

(statearr_26111[(7)] = inst_25945__$1);

return statearr_26111;
})();
var statearr_26114_26189 = state_26021__$1;
(statearr_26114_26189[(2)] = null);

(statearr_26114_26189[(1)] = (2));


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
var demo$rm_hull_7758795$core$state_machine__21765__auto__ = null;
var demo$rm_hull_7758795$core$state_machine__21765__auto____0 = (function (){
var statearr_26118 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26118[(0)] = demo$rm_hull_7758795$core$state_machine__21765__auto__);

(statearr_26118[(1)] = (1));

return statearr_26118;
});
var demo$rm_hull_7758795$core$state_machine__21765__auto____1 = (function (state_26021){
while(true){
var ret_value__21766__auto__ = (function (){try{while(true){
var result__21767__auto__ = switch__21764__auto__(state_26021);
if(cljs.core.keyword_identical_QMARK_(result__21767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21767__auto__;
}
break;
}
}catch (e26119){var ex__21768__auto__ = e26119;
var statearr_26120_26193 = state_26021;
(statearr_26120_26193[(2)] = ex__21768__auto__);


if(cljs.core.seq((state_26021[(4)]))){
var statearr_26121_26194 = state_26021;
(statearr_26121_26194[(1)] = cljs.core.first((state_26021[(4)])));

} else {
throw ex__21768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26196 = state_26021;
state_26021 = G__26196;
continue;
} else {
return ret_value__21766__auto__;
}
break;
}
});
demo$rm_hull_7758795$core$state_machine__21765__auto__ = function(state_26021){
switch(arguments.length){
case 0:
return demo$rm_hull_7758795$core$state_machine__21765__auto____0.call(this);
case 1:
return demo$rm_hull_7758795$core$state_machine__21765__auto____1.call(this,state_26021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$rm_hull_7758795$core$state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$0 = demo$rm_hull_7758795$core$state_machine__21765__auto____0;
demo$rm_hull_7758795$core$state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$1 = demo$rm_hull_7758795$core$state_machine__21765__auto____1;
return demo$rm_hull_7758795$core$state_machine__21765__auto__;
})()
})();
var state__21916__auto__ = (function (){var statearr_26125 = f__21915__auto__();
(statearr_26125[(6)] = c__21914__auto___26181);

return statearr_26125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21916__auto__);
}));


var c__21914__auto___26197 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21915__auto__ = (function (){var switch__21764__auto__ = (function (state_26150){
var state_val_26151 = (state_26150[(1)]);
if((state_val_26151 === (1))){
var inst_26131 = (0);
var state_26150__$1 = (function (){var statearr_26152 = state_26150;
(statearr_26152[(7)] = inst_26131);

return statearr_26152;
})();
var statearr_26153_26198 = state_26150__$1;
(statearr_26153_26198[(2)] = null);

(statearr_26153_26198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (2))){
var inst_26131 = (state_26150[(7)]);
var inst_26133 = (inst_26131 < (10));
var state_26150__$1 = state_26150;
if(cljs.core.truth_(inst_26133)){
var statearr_26154_26202 = state_26150__$1;
(statearr_26154_26202[(1)] = (4));

} else {
var statearr_26155_26203 = state_26150__$1;
(statearr_26155_26203[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (3))){
var inst_26148 = (state_26150[(2)]);
var state_26150__$1 = state_26150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26150__$1,inst_26148);
} else {
if((state_val_26151 === (4))){
var inst_26131 = (state_26150[(7)]);
var inst_26135 = (function (){var n__5762__auto__ = (10);
var _ = inst_26131;
return (function (x,y){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
});
})();
var inst_26136 = cljs.core.range.cljs$core$IFn$_invoke$arity$1((3));
var state_26150__$1 = (function (){var statearr_26158 = state_26150;
(statearr_26158[(8)] = inst_26135);

(statearr_26158[(9)] = inst_26136);

return statearr_26158;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26150__$1,(7),events_26180);
} else {
if((state_val_26151 === (5))){
var state_26150__$1 = state_26150;
var statearr_26163_26208 = state_26150__$1;
(statearr_26163_26208[(2)] = null);

(statearr_26163_26208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (6))){
var inst_26146 = (state_26150[(2)]);
var state_26150__$1 = state_26150;
var statearr_26165_26211 = state_26150__$1;
(statearr_26165_26211[(2)] = inst_26146);

(statearr_26165_26211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (7))){
var inst_26135 = (state_26150[(8)]);
var inst_26136 = (state_26150[(9)]);
var inst_26131 = (state_26150[(7)]);
var inst_26138 = (state_26150[(2)]);
var inst_26139 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),inst_26138);
var inst_26140 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(inst_26135,inst_26136,inst_26139);
var inst_26141 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26140], 0));
var inst_26142 = (inst_26131 + (1));
var inst_26131__$1 = inst_26142;
var state_26150__$1 = (function (){var statearr_26171 = state_26150;
(statearr_26171[(10)] = inst_26141);

(statearr_26171[(7)] = inst_26131__$1);

return statearr_26171;
})();
var statearr_26172_26221 = state_26150__$1;
(statearr_26172_26221[(2)] = null);

(statearr_26172_26221[(1)] = (2));


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
var demo$rm_hull_7758795$core$state_machine__21765__auto__ = null;
var demo$rm_hull_7758795$core$state_machine__21765__auto____0 = (function (){
var statearr_26173 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26173[(0)] = demo$rm_hull_7758795$core$state_machine__21765__auto__);

(statearr_26173[(1)] = (1));

return statearr_26173;
});
var demo$rm_hull_7758795$core$state_machine__21765__auto____1 = (function (state_26150){
while(true){
var ret_value__21766__auto__ = (function (){try{while(true){
var result__21767__auto__ = switch__21764__auto__(state_26150);
if(cljs.core.keyword_identical_QMARK_(result__21767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21767__auto__;
}
break;
}
}catch (e26174){var ex__21768__auto__ = e26174;
var statearr_26175_26223 = state_26150;
(statearr_26175_26223[(2)] = ex__21768__auto__);


if(cljs.core.seq((state_26150[(4)]))){
var statearr_26177_26230 = state_26150;
(statearr_26177_26230[(1)] = cljs.core.first((state_26150[(4)])));

} else {
throw ex__21768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26240 = state_26150;
state_26150 = G__26240;
continue;
} else {
return ret_value__21766__auto__;
}
break;
}
});
demo$rm_hull_7758795$core$state_machine__21765__auto__ = function(state_26150){
switch(arguments.length){
case 0:
return demo$rm_hull_7758795$core$state_machine__21765__auto____0.call(this);
case 1:
return demo$rm_hull_7758795$core$state_machine__21765__auto____1.call(this,state_26150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$rm_hull_7758795$core$state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$0 = demo$rm_hull_7758795$core$state_machine__21765__auto____0;
demo$rm_hull_7758795$core$state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$1 = demo$rm_hull_7758795$core$state_machine__21765__auto____1;
return demo$rm_hull_7758795$core$state_machine__21765__auto__;
})()
})();
var state__21916__auto__ = (function (){var statearr_26179 = f__21915__auto__();
(statearr_26179[(6)] = c__21914__auto___26197);

return statearr_26179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21916__auto__);
}));


//# sourceMappingURL=demo.rm_hull_7758795.core.js.map
