goog.provide('demo.rm_hull_8262502.core');
demo.rm_hull_8262502.core.colors = cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#E16889","#FE853E","#6EC59B","#FDBA52","#F5DED0","#94614C","#2D97D3","#48C3CB","#A9A6D3","#C0C1BC"], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#FFD1DC","#FFC0CB","#FFB7C5","#FC8EAC","#E75480","#DE5D83","#DE3163","#E30B5D","#E0115F","#C32148"], null)], null));
demo.rm_hull_8262502.core.make_cell = (function demo$rm_hull_8262502$core$make_cell(x,y){
var c__22090__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22091__auto__ = (function (){var switch__21764__auto__ = (function (state_25023){
var state_val_25024 = (state_25023[(1)]);
if((state_val_25024 === (1))){
var state_25023__$1 = state_25023;
var statearr_25039_25125 = state_25023__$1;
(statearr_25039_25125[(2)] = null);

(statearr_25039_25125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25024 === (2))){
var state_25023__$1 = state_25023;
var statearr_25059_25127 = state_25023__$1;
(statearr_25059_25127[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25024 === (3))){
var inst_25012 = (state_25023[(2)]);
var state_25023__$1 = state_25023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25023__$1,inst_25012);
} else {
if((state_val_25024 === (4))){
var inst_24993 = cljs.core.rand_nth(demo.rm_hull_8262502.core.colors);
var inst_24994 = monet.canvas.fill_style(enchilada.ctx,inst_24993);
var inst_24999 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)];
var inst_25000 = [x,y,(9),(9)];
var inst_25001 = cljs.core.PersistentHashMap.fromArrays(inst_24999,inst_25000);
var inst_25002 = monet.canvas.fill_rect(inst_24994,inst_25001);
var inst_25003 = cljs.core.rand_int((1000));
var inst_25004 = cljs.core.async.timeout(inst_25003);
var state_25023__$1 = (function (){var statearr_25081 = state_25023;
(statearr_25081[(7)] = inst_25002);

return statearr_25081;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25023__$1,(7),inst_25004);
} else {
if((state_val_25024 === (5))){
var state_25023__$1 = state_25023;
var statearr_25086_25130 = state_25023__$1;
(statearr_25086_25130[(2)] = null);

(statearr_25086_25130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25024 === (6))){
var inst_25010 = (state_25023[(2)]);
var state_25023__$1 = state_25023;
var statearr_25088_25131 = state_25023__$1;
(statearr_25088_25131[(2)] = inst_25010);

(statearr_25088_25131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25024 === (7))){
var inst_25006 = (state_25023[(2)]);
var state_25023__$1 = (function (){var statearr_25090 = state_25023;
(statearr_25090[(8)] = inst_25006);

return statearr_25090;
})();
var statearr_25092_25135 = state_25023__$1;
(statearr_25092_25135[(2)] = null);

(statearr_25092_25135[(1)] = (2));


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
var statearr_25095 = [null,null,null,null,null,null,null,null,null];
(statearr_25095[(0)] = demo$rm_hull_8262502$core$make_cell_$_state_machine__21765__auto__);

(statearr_25095[(1)] = (1));

return statearr_25095;
});
var demo$rm_hull_8262502$core$make_cell_$_state_machine__21765__auto____1 = (function (state_25023){
while(true){
var ret_value__21766__auto__ = (function (){try{while(true){
var result__21767__auto__ = switch__21764__auto__(state_25023);
if(cljs.core.keyword_identical_QMARK_(result__21767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21767__auto__;
}
break;
}
}catch (e25098){var ex__21768__auto__ = e25098;
var statearr_25099_25144 = state_25023;
(statearr_25099_25144[(2)] = ex__21768__auto__);


if(cljs.core.seq((state_25023[(4)]))){
var statearr_25106_25145 = state_25023;
(statearr_25106_25145[(1)] = cljs.core.first((state_25023[(4)])));

} else {
throw ex__21768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25146 = state_25023;
state_25023 = G__25146;
continue;
} else {
return ret_value__21766__auto__;
}
break;
}
});
demo$rm_hull_8262502$core$make_cell_$_state_machine__21765__auto__ = function(state_25023){
switch(arguments.length){
case 0:
return demo$rm_hull_8262502$core$make_cell_$_state_machine__21765__auto____0.call(this);
case 1:
return demo$rm_hull_8262502$core$make_cell_$_state_machine__21765__auto____1.call(this,state_25023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$rm_hull_8262502$core$make_cell_$_state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$0 = demo$rm_hull_8262502$core$make_cell_$_state_machine__21765__auto____0;
demo$rm_hull_8262502$core$make_cell_$_state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$1 = demo$rm_hull_8262502$core$make_cell_$_state_machine__21765__auto____1;
return demo$rm_hull_8262502$core$make_cell_$_state_machine__21765__auto__;
})()
})();
var state__22092__auto__ = (function (){var statearr_25107 = f__22091__auto__();
(statearr_25107[(6)] = c__22090__auto__);

return statearr_25107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22092__auto__);
}));

return c__22090__auto__;
});
demo.rm_hull_8262502.core.make_scene = (function demo$rm_hull_8262502$core$make_scene(rows,cols){
var n__5762__auto__ = cols;
var x = (0);
while(true){
if((x < n__5762__auto__)){
var n__5762__auto___25151__$1 = rows;
var y_25152 = (0);
while(true){
if((y_25152 < n__5762__auto___25151__$1)){
demo.rm_hull_8262502.core.make_cell(((10) * x),((10) * y_25152));

var G__25153 = (y_25152 + (1));
y_25152 = G__25153;
continue;
} else {
}
break;
}

var G__25155 = (x + (1));
x = G__25155;
continue;
} else {
return null;
}
break;
}
});
enchilada.core.show((enchilada.canvas.cljs$core$IFn$_invoke$arity$0 ? enchilada.canvas.cljs$core$IFn$_invoke$arity$0() : enchilada.canvas.call(null)));
var vec__25115_25157 = (enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0 ? enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0() : enchilada.canvas_size.call(null));
var width_25159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25115_25157,(0),null);
var height_25161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25115_25157,(1),null);
demo.rm_hull_8262502.core.make_scene((height_25161 / (10)),(width_25159 / (10)));

//# sourceMappingURL=demo.rm_hull_8262502.core.js.map
