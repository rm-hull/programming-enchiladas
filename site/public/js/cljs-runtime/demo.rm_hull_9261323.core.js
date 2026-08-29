goog.provide('demo.rm_hull_9261323.core');
demo.rm_hull_9261323.core.width = cljs.core.first((enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0 ? enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0() : enchilada.canvas_size.call(null)));
demo.rm_hull_9261323.core.height = cljs.core.second((enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0 ? enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0() : enchilada.canvas_size.call(null)));
demo.rm_hull_9261323.core.url_prefix = "https://raw.github.com/rm-hull/polyhedra/master/resources/netlib/";
demo.rm_hull_9261323.core.shapes_GT_ = (function demo$rm_hull_9261323$core$shapes_GT_(dest_chan){
var src_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__22090__auto___26122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22091__auto__ = (function (){var switch__21764__auto__ = (function (state_25818){
var state_val_25819 = (state_25818[(1)]);
if((state_val_25819 === (7))){
var inst_25814 = (state_25818[(2)]);
var state_25818__$1 = state_25818;
var statearr_25821_26129 = state_25818__$1;
(statearr_25821_26129[(2)] = inst_25814);

(statearr_25821_26129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (1))){
var state_25818__$1 = state_25818;
var statearr_25822_26130 = state_25818__$1;
(statearr_25822_26130[(2)] = null);

(statearr_25822_26130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (4))){
var inst_25795 = (state_25818[(7)]);
var inst_25795__$1 = (state_25818[(2)]);
var state_25818__$1 = (function (){var statearr_25823 = state_25818;
(statearr_25823[(7)] = inst_25795__$1);

return statearr_25823;
})();
if(cljs.core.truth_(inst_25795__$1)){
var statearr_25824_26131 = state_25818__$1;
(statearr_25824_26131[(1)] = (5));

} else {
var statearr_25825_26134 = state_25818__$1;
(statearr_25825_26134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (6))){
var state_25818__$1 = state_25818;
var statearr_25827_26135 = state_25818__$1;
(statearr_25827_26135[(2)] = null);

(statearr_25827_26135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (3))){
var inst_25816 = (state_25818[(2)]);
var state_25818__$1 = state_25818;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25818__$1,inst_25816);
} else {
if((state_val_25819 === (2))){
var state_25818__$1 = state_25818;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25818__$1,(4),src_chan);
} else {
if((state_val_25819 === (9))){
var inst_25797 = (state_25818[(8)]);
var inst_25803 = (state_25818[(2)]);
var inst_25804 = dataview.ops.create_reader(inst_25803);
var inst_25805 = polyhedra.core.shape_spec(inst_25804);
var inst_25806 = wireframes.shapes.primitives.center_at_origin(inst_25805);
var inst_25807 = [inst_25806];
var inst_25808 = cljs.core.PersistentHashMap.fromArrays(inst_25797,inst_25807);
var state_25818__$1 = state_25818;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25818__$1,(8),dest_chan,inst_25808);
} else {
if((state_val_25819 === (5))){
var inst_25795 = (state_25818[(7)]);
var inst_25797 = [new cljs.core.Keyword(null,"shape","shape",1190694006)];
var inst_25798 = new cljs.core.Keyword(null,"polyhedra","polyhedra",1956456888).cljs$core$IFn$_invoke$arity$1(inst_25795);
var inst_25799 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(demo.rm_hull_9261323.core.url_prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25798));
var inst_25800 = (enchilada.proxy_request.cljs$core$IFn$_invoke$arity$1 ? enchilada.proxy_request.cljs$core$IFn$_invoke$arity$1(inst_25799) : enchilada.proxy_request.call(null,inst_25799));
var inst_25801 = dataview.loader.fetch_blob(inst_25800);
var state_25818__$1 = (function (){var statearr_25829 = state_25818;
(statearr_25829[(8)] = inst_25797);

return statearr_25829;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25818__$1,(9),inst_25801);
} else {
if((state_val_25819 === (8))){
var inst_25810 = (state_25818[(2)]);
var state_25818__$1 = (function (){var statearr_25831 = state_25818;
(statearr_25831[(9)] = inst_25810);

return statearr_25831;
})();
var statearr_25833_26136 = state_25818__$1;
(statearr_25833_26136[(2)] = null);

(statearr_25833_26136[(1)] = (2));


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
}
}
});
return (function() {
var demo$rm_hull_9261323$core$shapes_GT__$_state_machine__21765__auto__ = null;
var demo$rm_hull_9261323$core$shapes_GT__$_state_machine__21765__auto____0 = (function (){
var statearr_25842 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25842[(0)] = demo$rm_hull_9261323$core$shapes_GT__$_state_machine__21765__auto__);

(statearr_25842[(1)] = (1));

return statearr_25842;
});
var demo$rm_hull_9261323$core$shapes_GT__$_state_machine__21765__auto____1 = (function (state_25818){
while(true){
var ret_value__21766__auto__ = (function (){try{while(true){
var result__21767__auto__ = switch__21764__auto__(state_25818);
if(cljs.core.keyword_identical_QMARK_(result__21767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21767__auto__;
}
break;
}
}catch (e25843){var ex__21768__auto__ = e25843;
var statearr_25844_26139 = state_25818;
(statearr_25844_26139[(2)] = ex__21768__auto__);


if(cljs.core.seq((state_25818[(4)]))){
var statearr_25846_26140 = state_25818;
(statearr_25846_26140[(1)] = cljs.core.first((state_25818[(4)])));

} else {
throw ex__21768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26141 = state_25818;
state_25818 = G__26141;
continue;
} else {
return ret_value__21766__auto__;
}
break;
}
});
demo$rm_hull_9261323$core$shapes_GT__$_state_machine__21765__auto__ = function(state_25818){
switch(arguments.length){
case 0:
return demo$rm_hull_9261323$core$shapes_GT__$_state_machine__21765__auto____0.call(this);
case 1:
return demo$rm_hull_9261323$core$shapes_GT__$_state_machine__21765__auto____1.call(this,state_25818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$rm_hull_9261323$core$shapes_GT__$_state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$0 = demo$rm_hull_9261323$core$shapes_GT__$_state_machine__21765__auto____0;
demo$rm_hull_9261323$core$shapes_GT__$_state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$1 = demo$rm_hull_9261323$core$shapes_GT__$_state_machine__21765__auto____1;
return demo$rm_hull_9261323$core$shapes_GT__$_state_machine__21765__auto__;
})()
})();
var state__22092__auto__ = (function (){var statearr_25849 = f__22091__auto__();
(statearr_25849[(6)] = c__22090__auto___26122);

return statearr_25849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22092__auto__);
}));


return src_chan;
});
demo.rm_hull_9261323.core.to_keyword_GT_ = (function demo$rm_hull_9261323$core$to_keyword_GT_(dest_chan){
var src_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__22090__auto___26142 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22091__auto__ = (function (){var switch__21764__auto__ = (function (state_25870){
var state_val_25871 = (state_25870[(1)]);
if((state_val_25871 === (1))){
var state_25870__$1 = state_25870;
var statearr_25872_26143 = state_25870__$1;
(statearr_25872_26143[(2)] = null);

(statearr_25872_26143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (2))){
var state_25870__$1 = state_25870;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25870__$1,(4),src_chan);
} else {
if((state_val_25871 === (3))){
var inst_25867 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25870__$1,inst_25867);
} else {
if((state_val_25871 === (4))){
var inst_25854 = (state_25870[(7)]);
var inst_25854__$1 = (state_25870[(2)]);
var state_25870__$1 = (function (){var statearr_25892 = state_25870;
(statearr_25892[(7)] = inst_25854__$1);

return statearr_25892;
})();
if(cljs.core.truth_(inst_25854__$1)){
var statearr_25893_26146 = state_25870__$1;
(statearr_25893_26146[(1)] = (5));

} else {
var statearr_25894_26147 = state_25870__$1;
(statearr_25894_26147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (5))){
var inst_25854 = (state_25870[(7)]);
var inst_25856 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25857 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_25858 = (new cljs.core.PersistentVector(null,1,(5),inst_25856,inst_25857,null));
var inst_25859 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_25854,inst_25858,cljs.core.keyword);
var state_25870__$1 = state_25870;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25870__$1,(8),dest_chan,inst_25859);
} else {
if((state_val_25871 === (6))){
var state_25870__$1 = state_25870;
var statearr_25905_26148 = state_25870__$1;
(statearr_25905_26148[(2)] = null);

(statearr_25905_26148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (7))){
var inst_25865 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25907_26151 = state_25870__$1;
(statearr_25907_26151[(2)] = inst_25865);

(statearr_25907_26151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (8))){
var inst_25861 = (state_25870[(2)]);
var state_25870__$1 = (function (){var statearr_25910 = state_25870;
(statearr_25910[(8)] = inst_25861);

return statearr_25910;
})();
var statearr_25911_26152 = state_25870__$1;
(statearr_25911_26152[(2)] = null);

(statearr_25911_26152[(1)] = (2));


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
}
});
return (function() {
var demo$rm_hull_9261323$core$to_keyword_GT__$_state_machine__21765__auto__ = null;
var demo$rm_hull_9261323$core$to_keyword_GT__$_state_machine__21765__auto____0 = (function (){
var statearr_25916 = [null,null,null,null,null,null,null,null,null];
(statearr_25916[(0)] = demo$rm_hull_9261323$core$to_keyword_GT__$_state_machine__21765__auto__);

(statearr_25916[(1)] = (1));

return statearr_25916;
});
var demo$rm_hull_9261323$core$to_keyword_GT__$_state_machine__21765__auto____1 = (function (state_25870){
while(true){
var ret_value__21766__auto__ = (function (){try{while(true){
var result__21767__auto__ = switch__21764__auto__(state_25870);
if(cljs.core.keyword_identical_QMARK_(result__21767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21767__auto__;
}
break;
}
}catch (e25917){var ex__21768__auto__ = e25917;
var statearr_25918_26153 = state_25870;
(statearr_25918_26153[(2)] = ex__21768__auto__);


if(cljs.core.seq((state_25870[(4)]))){
var statearr_25919_26154 = state_25870;
(statearr_25919_26154[(1)] = cljs.core.first((state_25870[(4)])));

} else {
throw ex__21768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26155 = state_25870;
state_25870 = G__26155;
continue;
} else {
return ret_value__21766__auto__;
}
break;
}
});
demo$rm_hull_9261323$core$to_keyword_GT__$_state_machine__21765__auto__ = function(state_25870){
switch(arguments.length){
case 0:
return demo$rm_hull_9261323$core$to_keyword_GT__$_state_machine__21765__auto____0.call(this);
case 1:
return demo$rm_hull_9261323$core$to_keyword_GT__$_state_machine__21765__auto____1.call(this,state_25870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$rm_hull_9261323$core$to_keyword_GT__$_state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$0 = demo$rm_hull_9261323$core$to_keyword_GT__$_state_machine__21765__auto____0;
demo$rm_hull_9261323$core$to_keyword_GT__$_state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$1 = demo$rm_hull_9261323$core$to_keyword_GT__$_state_machine__21765__auto____1;
return demo$rm_hull_9261323$core$to_keyword_GT__$_state_machine__21765__auto__;
})()
})();
var state__22092__auto__ = (function (){var statearr_25925 = f__22091__auto__();
(statearr_25925[(6)] = c__22090__auto___26142);

return statearr_25925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22092__auto__);
}));


return src_chan;
});
demo.rm_hull_9261323.core.color_fn = (function demo$rm_hull_9261323$core$color_fn(style,color){
var pred__25930 = cljs.core._EQ_;
var expr__25931 = style;
if(cljs.core.truth_((pred__25930.cljs$core$IFn$_invoke$arity$2 ? pred__25930.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transparent","transparent",-2073609949),expr__25931) : pred__25930.call(null,new cljs.core.Keyword(null,"transparent","transparent",-2073609949),expr__25931)))){
return wireframes.renderer.color.wireframe.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([color,style], 0));
} else {
if(cljs.core.truth_((pred__25930.cljs$core$IFn$_invoke$arity$2 ? pred__25930.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"translucent","translucent",-1428111933),expr__25931) : pred__25930.call(null,new cljs.core.Keyword(null,"translucent","translucent",-1428111933),expr__25931)))){
return wireframes.renderer.color.wireframe.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([color,style], 0));
} else {
if(cljs.core.truth_((pred__25930.cljs$core$IFn$_invoke$arity$2 ? pred__25930.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"opaque","opaque",-1243552654),expr__25931) : pred__25930.call(null,new cljs.core.Keyword(null,"opaque","opaque",-1243552654),expr__25931)))){
return wireframes.renderer.color.wireframe.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([color,style], 0));
} else {
if(cljs.core.truth_((pred__25930.cljs$core$IFn$_invoke$arity$2 ? pred__25930.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shaded","shaded",561405058),expr__25931) : pred__25930.call(null,new cljs.core.Keyword(null,"shaded","shaded",561405058),expr__25931)))){
return wireframes.renderer.color.solid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([color], 0));
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__25931))));
}
}
}
}
});
demo.rm_hull_9261323.core.transform = cljs.core.memoize((function (x,y,z,depth,offset_QMARK_){
return wireframes.transform.combine.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(offset_QMARK_)?wireframes.transform.translate(1.17,2.28,(0)):wireframes.transform.identity),wireframes.transform.rotate(new cljs.core.Keyword(null,"x","x",2099068185),wireframes.transform.degrees__GT_radians(x)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([wireframes.transform.rotate(new cljs.core.Keyword(null,"y","y",-1757859776),wireframes.transform.degrees__GT_radians(y)),wireframes.transform.rotate(new cljs.core.Keyword(null,"z","z",-789527183),wireframes.transform.degrees__GT_radians(z)),wireframes.transform.translate((0),(0),depth)], 0));
}));
demo.rm_hull_9261323.core.styles = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.Keyword(null,"translucent","translucent",-1428111933),new cljs.core.Keyword(null,"opaque","opaque",-1243552654),new cljs.core.Keyword(null,"shaded","shaded",561405058)], null));
demo.rm_hull_9261323.core.initial_state = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"depth","depth",1768663640),(12),new cljs.core.Keyword(null,"focal-length","focal-length",-1978298454),(3),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.second(demo.rm_hull_9261323.core.styles),new cljs.core.Keyword(null,"color","color",1011675173),"#EAF5FC",new cljs.core.Keyword(null,"offset?","offset?",-1603662060),false,new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"z","z",-789527183),(0)], null);
/**
 * Draws the shape at the given state of the world (the x,y,z rotation angles)
 */
demo.rm_hull_9261323.core.render_shape = (function demo$rm_hull_9261323$core$render_shape(p__25947){
var map__25948 = p__25947;
var map__25948__$1 = cljs.core.__destructure_map(map__25948);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25948__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25948__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25948__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var focal_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25948__$1,new cljs.core.Keyword(null,"focal-length","focal-length",-1978298454));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25948__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25948__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var offset_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25948__$1,new cljs.core.Keyword(null,"offset?","offset?",-1603662060));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25948__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25948__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
if(cljs.core.truth_(shape)){
(enchilada.ctx.fillStyle = "rgba(255,255,255,0.75");

enchilada.ctx.fillRect((0),(0),demo.rm_hull_9261323.core.width,demo.rm_hull_9261323.core.height);

return wireframes.renderer.canvas.__GT_canvas(enchilada.ctx)(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(wireframes.renderer.canvas.draw_solid,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"focal-length","focal-length",-1978298454),focal_length,new cljs.core.Keyword(null,"color-fn","color-fn",1518098073),demo.rm_hull_9261323.core.color_fn(style,color),new cljs.core.Keyword(null,"shape","shape",1190694006),shape,new cljs.core.Keyword(null,"transform","transform",1381301764),demo.rm_hull_9261323.core.transform(x,y,z,depth,offset_QMARK_)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.rm_hull_9261323.core.width,demo.rm_hull_9261323.core.height], null));
} else {
return null;
}
});
/**
 * Increment/decrement the rotation angles around the x,y and z axes
 */
demo.rm_hull_9261323.core.update_state = (function demo$rm_hull_9261323$core$update_state(event,p__25952){
var map__25954 = p__25952;
var map__25954__$1 = cljs.core.__destructure_map(map__25954);
var world_state = map__25954__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25954__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25954__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25954__$1,new cljs.core.Keyword(null,"z","z",-789527183));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(world_state,new cljs.core.Keyword(null,"x","x",2099068185),(x + 0.3)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - 0.7)),new cljs.core.Keyword(null,"z","z",-789527183),(z + 0.5));
});
demo.rm_hull_9261323.core.not_well_formed_QMARK_ = (function demo$rm_hull_9261323$core$not_well_formed_QMARK_(shape){
return (new cljs.core.Keyword(null,"polygons","polygons",-266433925).cljs$core$IFn$_invoke$arity$1(shape) == null);
});
demo.rm_hull_9261323.core.handle_incoming_msg = (function demo$rm_hull_9261323$core$handle_incoming_msg(event,world_state){
if(cljs.core.truth_((function (){var and__5160__auto__ = new cljs.core.Keyword(null,"shape","shape",1190694006).cljs$core$IFn$_invoke$arity$1(event);
if(cljs.core.truth_(and__5160__auto__)){
return demo.rm_hull_9261323.core.not_well_formed_QMARK_(new cljs.core.Keyword(null,"shape","shape",1190694006).cljs$core$IFn$_invoke$arity$1(event));
} else {
return and__5160__auto__;
}
})())){
alert((""+"Shape '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"name","name",1843675177)], null)))+"' is not a well-formed 3D solid: please try another."));
} else {
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([world_state,event], 0));
});
demo.rm_hull_9261323.core.start = (function demo$rm_hull_9261323$core$start(){
var updates_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__22090__auto___26157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22091__auto__ = (function (){var switch__21764__auto__ = (function (state_26091){
var state_val_26095 = (state_26091[(1)]);
if((state_val_26095 === (1))){
var inst_26034 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(demo.rm_hull_9261323.core.url_prefix)+"names.txt");
var inst_26036 = (enchilada.proxy_request.cljs$core$IFn$_invoke$arity$1 ? enchilada.proxy_request.cljs$core$IFn$_invoke$arity$1(inst_26034) : enchilada.proxy_request.call(null,inst_26034));
var inst_26038 = dataview.loader.fetch_text(inst_26036);
var state_26091__$1 = state_26091;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26091__$1,(2),inst_26038);
} else {
if((state_val_26095 === (2))){
var inst_26040 = (state_26091[(2)]);
var inst_26041 = clojure.string.split_lines(inst_26040);
var inst_26042 = cljs.core.vec(inst_26041);
var inst_26052 = document.createElementNS("http://www.w3.org/1999/xhtml","div");
var inst_26054 = document.createElementNS("http://www.w3.org/1999/xhtml","div");
var inst_26055 = cljs.core.count(inst_26042);
var inst_26056 = cljs.core.rand_int(inst_26055);
var inst_26057 = cljs.core.iterate(cljs.core.inc,(0));
var inst_26058 = cljs.core.zipmap(inst_26057,inst_26042);
var inst_26059 = demo.rm_hull_9261323.core.shapes_GT_(updates_chan);
var inst_26060 = big_bang.components.dropdown.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"polyhedra","polyhedra",1956456888),new cljs.core.Keyword(null,"label-text","label-text",-1566972381)," Polyhedra:",new cljs.core.Keyword(null,"initial-value","initial-value",470619381),inst_26056,new cljs.core.Keyword(null,"options","options",99638489),inst_26058,new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124),inst_26059], 0));
var inst_26061 = dommy.template.__GT_node_like(inst_26060);
var inst_26062 = inst_26054.appendChild(inst_26061);
var inst_26063 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(demo.rm_hull_9261323.core.initial_state);
var inst_26067 = cljs.core.zipmap(demo.rm_hull_9261323.core.styles,demo.rm_hull_9261323.core.styles);
var inst_26068 = demo.rm_hull_9261323.core.to_keyword_GT_(updates_chan);
var inst_26069 = big_bang.components.dropdown.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"label-text","label-text",-1566972381)," Style:",new cljs.core.Keyword(null,"initial-value","initial-value",470619381),inst_26063,new cljs.core.Keyword(null,"options","options",99638489),inst_26067,new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124),inst_26068], 0));
var inst_26070 = dommy.template.__GT_node_like(inst_26069);
var inst_26071 = inst_26054.appendChild(inst_26070);
var inst_26072 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(demo.rm_hull_9261323.core.initial_state);
var inst_26073 = big_bang.components.color_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"label-text","label-text",-1566972381)," Color:",new cljs.core.Keyword(null,"initial-value","initial-value",470619381),inst_26072,new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124),updates_chan], 0));
var inst_26074 = dommy.template.__GT_node_like(inst_26073);
var inst_26075 = inst_26054.appendChild(inst_26074);
var inst_26076 = inst_26052.appendChild(inst_26054);
var inst_26078 = document.createElementNS("http://www.w3.org/1999/xhtml","div");
var inst_26079 = new cljs.core.Keyword(null,"focal-length","focal-length",-1978298454).cljs$core$IFn$_invoke$arity$1(demo.rm_hull_9261323.core.initial_state);
var inst_26080 = big_bang.components.slider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"focal-length","focal-length",-1978298454),new cljs.core.Keyword(null,"label-text","label-text",-1566972381)," Focal Length:",new cljs.core.Keyword(null,"initial-value","initial-value",470619381),inst_26079,new cljs.core.Keyword(null,"min-value","min-value",-1119123315),(1),new cljs.core.Keyword(null,"max-value","max-value",687805168),(25),new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124),updates_chan], 0));
var inst_26081 = dommy.template.__GT_node_like(inst_26080);
var inst_26082 = inst_26078.appendChild(inst_26081);
var inst_26083 = new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(demo.rm_hull_9261323.core.initial_state);
var inst_26084 = big_bang.components.slider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"depth","depth",1768663640),new cljs.core.Keyword(null,"label-text","label-text",-1566972381)," Z-Depth:",new cljs.core.Keyword(null,"initial-value","initial-value",470619381),inst_26083,new cljs.core.Keyword(null,"min-value","min-value",-1119123315),(0),new cljs.core.Keyword(null,"max-value","max-value",687805168),(50),new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124),updates_chan], 0));
var inst_26085 = dommy.template.__GT_node_like(inst_26084);
var inst_26086 = inst_26078.appendChild(inst_26085);
var inst_26087 = inst_26052.appendChild(inst_26078);
var inst_26088 = document.getElementById("canvas-area");
var inst_26089 = dommy.core.insert_after_BANG_(inst_26052,inst_26088);
var state_26091__$1 = (function (){var statearr_26103 = state_26091;
(statearr_26103[(7)] = inst_26062);

(statearr_26103[(8)] = inst_26071);

(statearr_26103[(9)] = inst_26075);

(statearr_26103[(10)] = inst_26076);

(statearr_26103[(11)] = inst_26082);

(statearr_26103[(12)] = inst_26086);

(statearr_26103[(13)] = inst_26087);

return statearr_26103;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26091__$1,inst_26089);
} else {
return null;
}
}
});
return (function() {
var demo$rm_hull_9261323$core$start_$_state_machine__21765__auto__ = null;
var demo$rm_hull_9261323$core$start_$_state_machine__21765__auto____0 = (function (){
var statearr_26105 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26105[(0)] = demo$rm_hull_9261323$core$start_$_state_machine__21765__auto__);

(statearr_26105[(1)] = (1));

return statearr_26105;
});
var demo$rm_hull_9261323$core$start_$_state_machine__21765__auto____1 = (function (state_26091){
while(true){
var ret_value__21766__auto__ = (function (){try{while(true){
var result__21767__auto__ = switch__21764__auto__(state_26091);
if(cljs.core.keyword_identical_QMARK_(result__21767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21767__auto__;
}
break;
}
}catch (e26106){var ex__21768__auto__ = e26106;
var statearr_26107_26166 = state_26091;
(statearr_26107_26166[(2)] = ex__21768__auto__);


if(cljs.core.seq((state_26091[(4)]))){
var statearr_26108_26171 = state_26091;
(statearr_26108_26171[(1)] = cljs.core.first((state_26091[(4)])));

} else {
throw ex__21768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26175 = state_26091;
state_26091 = G__26175;
continue;
} else {
return ret_value__21766__auto__;
}
break;
}
});
demo$rm_hull_9261323$core$start_$_state_machine__21765__auto__ = function(state_26091){
switch(arguments.length){
case 0:
return demo$rm_hull_9261323$core$start_$_state_machine__21765__auto____0.call(this);
case 1:
return demo$rm_hull_9261323$core$start_$_state_machine__21765__auto____1.call(this,state_26091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$rm_hull_9261323$core$start_$_state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$0 = demo$rm_hull_9261323$core$start_$_state_machine__21765__auto____0;
demo$rm_hull_9261323$core$start_$_state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$1 = demo$rm_hull_9261323$core$start_$_state_machine__21765__auto____1;
return demo$rm_hull_9261323$core$start_$_state_machine__21765__auto__;
})()
})();
var state__22092__auto__ = (function (){var statearr_26111 = f__22091__auto__();
(statearr_26111[(6)] = c__22090__auto___26157);

return statearr_26111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22092__auto__);
}));


return big_bang.core.big_bang.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),demo.rm_hull_9261323.core.initial_state,new cljs.core.Keyword(null,"on-tick","on-tick",-56973396),demo.rm_hull_9261323.core.update_state,new cljs.core.Keyword(null,"to-draw","to-draw",-1467115105),demo.rm_hull_9261323.core.render_shape,new cljs.core.Keyword(null,"receive-channel","receive-channel",1240287920),updates_chan,new cljs.core.Keyword(null,"on-receive","on-receive",-706822243),demo.rm_hull_9261323.core.handle_incoming_msg], 0));
});
(enchilada.ctx.fillStyle = "white");
enchilada.ctx.fillRect((0),(0),demo.rm_hull_9261323.core.width,demo.rm_hull_9261323.core.height);
enchilada.core.show((enchilada.canvas.cljs$core$IFn$_invoke$arity$0 ? enchilada.canvas.cljs$core$IFn$_invoke$arity$0() : enchilada.canvas.call(null)));
demo.rm_hull_9261323.core.start();

//# sourceMappingURL=demo.rm_hull_9261323.core.js.map
