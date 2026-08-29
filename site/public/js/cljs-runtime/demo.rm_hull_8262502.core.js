goog.provide('demo.rm_hull_8262502.core');
demo.rm_hull_8262502.core.colors = cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#E16889","#FE853E","#6EC59B","#FDBA52","#F5DED0","#94614C","#2D97D3","#48C3CB","#A9A6D3","#C0C1BC"], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#FFD1DC","#FFC0CB","#FFB7C5","#FC8EAC","#E75480","#DE5D83","#DE3163","#E30B5D","#E0115F","#C32148"], null)], null));
demo.rm_hull_8262502.core.make_cell = (function demo$rm_hull_8262502$core$make_cell(x,y){
var c__21911__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21912__auto__ = (function (){var switch__21764__auto__ = (function (state_24982){
var state_val_24984 = (state_24982[(1)]);
if((state_val_24984 === (1))){
var state_24982__$1 = state_24982;
var statearr_24998_25089 = state_24982__$1;
(statearr_24998_25089[(2)] = null);

(statearr_24998_25089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (2))){
var state_24982__$1 = state_24982;
var statearr_25001_25090 = state_24982__$1;
(statearr_25001_25090[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (3))){
var inst_24958 = (state_24982[(2)]);
var state_24982__$1 = state_24982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24982__$1,inst_24958);
} else {
if((state_val_24984 === (4))){
var inst_24917 = cljs.core.rand_nth(demo.rm_hull_8262502.core.colors);
var inst_24918 = monet.canvas.fill_style(enchilada.ctx,inst_24917);
var inst_24926 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)];
var inst_24927 = [x,y,(9),(9)];
var inst_24928 = cljs.core.PersistentHashMap.fromArrays(inst_24926,inst_24927);
var inst_24929 = monet.canvas.fill_rect(inst_24918,inst_24928);
var inst_24930 = cljs.core.rand_int((1000));
var inst_24931 = cljs.core.async.timeout(inst_24930);
var state_24982__$1 = (function (){var statearr_25014 = state_24982;
(statearr_25014[(7)] = inst_24929);

return statearr_25014;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24982__$1,(7),inst_24931);
} else {
if((state_val_24984 === (5))){
var state_24982__$1 = state_24982;
var statearr_25020_25091 = state_24982__$1;
(statearr_25020_25091[(2)] = null);

(statearr_25020_25091[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (6))){
var inst_24940 = (state_24982[(2)]);
var state_24982__$1 = state_24982;
var statearr_25021_25092 = state_24982__$1;
(statearr_25021_25092[(2)] = inst_24940);

(statearr_25021_25092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (7))){
var inst_24934 = (state_24982[(2)]);
var state_24982__$1 = (function (){var statearr_25022 = state_24982;
(statearr_25022[(8)] = inst_24934);

return statearr_25022;
})();
var statearr_25024_25097 = state_24982__$1;
(statearr_25024_25097[(2)] = null);

(statearr_25024_25097[(1)] = (2));


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
var demo$rm_hull_8262502$core$make_cell_$_state_machine__21765__auto__ = null;
var demo$rm_hull_8262502$core$make_cell_$_state_machine__21765__auto____0 = (function (){
var statearr_25027 = [null,null,null,null,null,null,null,null,null];
(statearr_25027[(0)] = demo$rm_hull_8262502$core$make_cell_$_state_machine__21765__auto__);

(statearr_25027[(1)] = (1));

return statearr_25027;
});
var demo$rm_hull_8262502$core$make_cell_$_state_machine__21765__auto____1 = (function (state_24982){
while(true){
var ret_value__21766__auto__ = (function (){try{while(true){
var result__21767__auto__ = switch__21764__auto__(state_24982);
if(cljs.core.keyword_identical_QMARK_(result__21767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21767__auto__;
}
break;
}
}catch (e25055){var ex__21768__auto__ = e25055;
var statearr_25056_25116 = state_24982;
(statearr_25056_25116[(2)] = ex__21768__auto__);


if(cljs.core.seq((state_24982[(4)]))){
var statearr_25057_25117 = state_24982;
(statearr_25057_25117[(1)] = cljs.core.first((state_24982[(4)])));

} else {
throw ex__21768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25118 = state_24982;
state_24982 = G__25118;
continue;
} else {
return ret_value__21766__auto__;
}
break;
}
});
demo$rm_hull_8262502$core$make_cell_$_state_machine__21765__auto__ = function(state_24982){
switch(arguments.length){
case 0:
return demo$rm_hull_8262502$core$make_cell_$_state_machine__21765__auto____0.call(this);
case 1:
return demo$rm_hull_8262502$core$make_cell_$_state_machine__21765__auto____1.call(this,state_24982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$rm_hull_8262502$core$make_cell_$_state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$0 = demo$rm_hull_8262502$core$make_cell_$_state_machine__21765__auto____0;
demo$rm_hull_8262502$core$make_cell_$_state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$1 = demo$rm_hull_8262502$core$make_cell_$_state_machine__21765__auto____1;
return demo$rm_hull_8262502$core$make_cell_$_state_machine__21765__auto__;
})()
})();
var state__21913__auto__ = (function (){var statearr_25061 = f__21912__auto__();
(statearr_25061[(6)] = c__21911__auto__);

return statearr_25061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21913__auto__);
}));

return c__21911__auto__;
});
demo.rm_hull_8262502.core.make_scene = (function demo$rm_hull_8262502$core$make_scene(rows,cols){
var n__5762__auto__ = cols;
var x = (0);
while(true){
if((x < n__5762__auto__)){
var n__5762__auto___25119__$1 = rows;
var y_25120 = (0);
while(true){
if((y_25120 < n__5762__auto___25119__$1)){
demo.rm_hull_8262502.core.make_cell(((10) * x),((10) * y_25120));

var G__25121 = (y_25120 + (1));
y_25120 = G__25121;
continue;
} else {
}
break;
}

var G__25122 = (x + (1));
x = G__25122;
continue;
} else {
return null;
}
break;
}
});
jayq.core.show(enchilada.canvas);
var vec__25062_25123 = (enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0 ? enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0() : enchilada.canvas_size.call(null));
var width_25124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25062_25123,(0),null);
var height_25125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25062_25123,(1),null);
demo.rm_hull_8262502.core.make_scene((height_25125 / (10)),(width_25124 / (10)));

//# sourceMappingURL=demo.rm_hull_8262502.core.js.map
