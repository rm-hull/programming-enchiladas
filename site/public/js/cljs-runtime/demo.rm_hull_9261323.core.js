goog.provide('demo.rm_hull_9261323.core');
demo.rm_hull_9261323.core.width = cljs.core.first((enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0 ? enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0() : enchilada.canvas_size.call(null)));
demo.rm_hull_9261323.core.height = cljs.core.second((enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0 ? enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0() : enchilada.canvas_size.call(null)));
demo.rm_hull_9261323.core.url_prefix = "https://raw.github.com/rm-hull/polyhedra/master/resources/netlib/";
demo.rm_hull_9261323.core.shapes_GT_ = (function demo$rm_hull_9261323$core$shapes_GT_(dest_chan){
var src_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__21911__auto___26054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21912__auto__ = (function (){var switch__21764__auto__ = (function (state_25753){
var state_val_25754 = (state_25753[(1)]);
if((state_val_25754 === (7))){
var inst_25744 = (state_25753[(2)]);
var state_25753__$1 = state_25753;
var statearr_25755_26055 = state_25753__$1;
(statearr_25755_26055[(2)] = inst_25744);

(statearr_25755_26055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (1))){
var state_25753__$1 = state_25753;
var statearr_25756_26056 = state_25753__$1;
(statearr_25756_26056[(2)] = null);

(statearr_25756_26056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (4))){
var inst_25719 = (state_25753[(7)]);
var inst_25719__$1 = (state_25753[(2)]);
var state_25753__$1 = (function (){var statearr_25757 = state_25753;
(statearr_25757[(7)] = inst_25719__$1);

return statearr_25757;
})();
if(cljs.core.truth_(inst_25719__$1)){
var statearr_25759_26057 = state_25753__$1;
(statearr_25759_26057[(1)] = (5));

} else {
var statearr_25761_26096 = state_25753__$1;
(statearr_25761_26096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (6))){
var state_25753__$1 = state_25753;
var statearr_25770_26097 = state_25753__$1;
(statearr_25770_26097[(2)] = null);

(statearr_25770_26097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (3))){
var inst_25746 = (state_25753[(2)]);
var state_25753__$1 = state_25753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25753__$1,inst_25746);
} else {
if((state_val_25754 === (2))){
var state_25753__$1 = state_25753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25753__$1,(4),src_chan);
} else {
if((state_val_25754 === (9))){
var inst_25721 = (state_25753[(8)]);
var inst_25727 = (state_25753[(2)]);
var inst_25728 = dataview.ops.create_reader(inst_25727);
var inst_25729 = polyhedra.core.shape_spec(inst_25728);
var inst_25730 = wireframes.shapes.primitives.center_at_origin(inst_25729);
var inst_25731 = [inst_25730];
var inst_25732 = cljs.core.PersistentHashMap.fromArrays(inst_25721,inst_25731);
var state_25753__$1 = state_25753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25753__$1,(8),dest_chan,inst_25732);
} else {
if((state_val_25754 === (5))){
var inst_25719 = (state_25753[(7)]);
var inst_25721 = [new cljs.core.Keyword(null,"shape","shape",1190694006)];
var inst_25722 = new cljs.core.Keyword(null,"polyhedra","polyhedra",1956456888).cljs$core$IFn$_invoke$arity$1(inst_25719);
var inst_25723 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(demo.rm_hull_9261323.core.url_prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25722));
var inst_25724 = (enchilada.proxy_request.cljs$core$IFn$_invoke$arity$1 ? enchilada.proxy_request.cljs$core$IFn$_invoke$arity$1(inst_25723) : enchilada.proxy_request.call(null,inst_25723));
var inst_25725 = dataview.loader.fetch_blob(inst_25724);
var state_25753__$1 = (function (){var statearr_25776 = state_25753;
(statearr_25776[(8)] = inst_25721);

return statearr_25776;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25753__$1,(9),inst_25725);
} else {
if((state_val_25754 === (8))){
var inst_25734 = (state_25753[(2)]);
var state_25753__$1 = (function (){var statearr_25777 = state_25753;
(statearr_25777[(9)] = inst_25734);

return statearr_25777;
})();
var statearr_25792_26101 = state_25753__$1;
(statearr_25792_26101[(2)] = null);

(statearr_25792_26101[(1)] = (2));


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
var statearr_25795 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25795[(0)] = demo$rm_hull_9261323$core$shapes_GT__$_state_machine__21765__auto__);

(statearr_25795[(1)] = (1));

return statearr_25795;
});
var demo$rm_hull_9261323$core$shapes_GT__$_state_machine__21765__auto____1 = (function (state_25753){
while(true){
var ret_value__21766__auto__ = (function (){try{while(true){
var result__21767__auto__ = switch__21764__auto__(state_25753);
if(cljs.core.keyword_identical_QMARK_(result__21767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21767__auto__;
}
break;
}
}catch (e25796){var ex__21768__auto__ = e25796;
var statearr_25797_26132 = state_25753;
(statearr_25797_26132[(2)] = ex__21768__auto__);


if(cljs.core.seq((state_25753[(4)]))){
var statearr_25809_26186 = state_25753;
(statearr_25809_26186[(1)] = cljs.core.first((state_25753[(4)])));

} else {
throw ex__21768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26188 = state_25753;
state_25753 = G__26188;
continue;
} else {
return ret_value__21766__auto__;
}
break;
}
});
demo$rm_hull_9261323$core$shapes_GT__$_state_machine__21765__auto__ = function(state_25753){
switch(arguments.length){
case 0:
return demo$rm_hull_9261323$core$shapes_GT__$_state_machine__21765__auto____0.call(this);
case 1:
return demo$rm_hull_9261323$core$shapes_GT__$_state_machine__21765__auto____1.call(this,state_25753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$rm_hull_9261323$core$shapes_GT__$_state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$0 = demo$rm_hull_9261323$core$shapes_GT__$_state_machine__21765__auto____0;
demo$rm_hull_9261323$core$shapes_GT__$_state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$1 = demo$rm_hull_9261323$core$shapes_GT__$_state_machine__21765__auto____1;
return demo$rm_hull_9261323$core$shapes_GT__$_state_machine__21765__auto__;
})()
})();
var state__21913__auto__ = (function (){var statearr_25833 = f__21912__auto__();
(statearr_25833[(6)] = c__21911__auto___26054);

return statearr_25833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21913__auto__);
}));


return src_chan;
});
demo.rm_hull_9261323.core.to_keyword_GT_ = (function demo$rm_hull_9261323$core$to_keyword_GT_(dest_chan){
var src_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__21911__auto___26189 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21912__auto__ = (function (){var switch__21764__auto__ = (function (state_25868){
var state_val_25869 = (state_25868[(1)]);
if((state_val_25869 === (1))){
var state_25868__$1 = state_25868;
var statearr_25896_26190 = state_25868__$1;
(statearr_25896_26190[(2)] = null);

(statearr_25896_26190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25869 === (2))){
var state_25868__$1 = state_25868;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25868__$1,(4),src_chan);
} else {
if((state_val_25869 === (3))){
var inst_25866 = (state_25868[(2)]);
var state_25868__$1 = state_25868;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25868__$1,inst_25866);
} else {
if((state_val_25869 === (4))){
var inst_25853 = (state_25868[(7)]);
var inst_25853__$1 = (state_25868[(2)]);
var state_25868__$1 = (function (){var statearr_25898 = state_25868;
(statearr_25898[(7)] = inst_25853__$1);

return statearr_25898;
})();
if(cljs.core.truth_(inst_25853__$1)){
var statearr_25899_26191 = state_25868__$1;
(statearr_25899_26191[(1)] = (5));

} else {
var statearr_25900_26192 = state_25868__$1;
(statearr_25900_26192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25869 === (5))){
var inst_25853 = (state_25868[(7)]);
var inst_25855 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25856 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_25857 = (new cljs.core.PersistentVector(null,1,(5),inst_25855,inst_25856,null));
var inst_25858 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_25853,inst_25857,cljs.core.keyword);
var state_25868__$1 = state_25868;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25868__$1,(8),dest_chan,inst_25858);
} else {
if((state_val_25869 === (6))){
var state_25868__$1 = state_25868;
var statearr_25901_26198 = state_25868__$1;
(statearr_25901_26198[(2)] = null);

(statearr_25901_26198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25869 === (7))){
var inst_25864 = (state_25868[(2)]);
var state_25868__$1 = state_25868;
var statearr_25902_26201 = state_25868__$1;
(statearr_25902_26201[(2)] = inst_25864);

(statearr_25902_26201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25869 === (8))){
var inst_25860 = (state_25868[(2)]);
var state_25868__$1 = (function (){var statearr_25903 = state_25868;
(statearr_25903[(8)] = inst_25860);

return statearr_25903;
})();
var statearr_25904_26202 = state_25868__$1;
(statearr_25904_26202[(2)] = null);

(statearr_25904_26202[(1)] = (2));


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
var statearr_25905 = [null,null,null,null,null,null,null,null,null];
(statearr_25905[(0)] = demo$rm_hull_9261323$core$to_keyword_GT__$_state_machine__21765__auto__);

(statearr_25905[(1)] = (1));

return statearr_25905;
});
var demo$rm_hull_9261323$core$to_keyword_GT__$_state_machine__21765__auto____1 = (function (state_25868){
while(true){
var ret_value__21766__auto__ = (function (){try{while(true){
var result__21767__auto__ = switch__21764__auto__(state_25868);
if(cljs.core.keyword_identical_QMARK_(result__21767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21767__auto__;
}
break;
}
}catch (e25906){var ex__21768__auto__ = e25906;
var statearr_25907_26207 = state_25868;
(statearr_25907_26207[(2)] = ex__21768__auto__);


if(cljs.core.seq((state_25868[(4)]))){
var statearr_25916_26208 = state_25868;
(statearr_25916_26208[(1)] = cljs.core.first((state_25868[(4)])));

} else {
throw ex__21768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26209 = state_25868;
state_25868 = G__26209;
continue;
} else {
return ret_value__21766__auto__;
}
break;
}
});
demo$rm_hull_9261323$core$to_keyword_GT__$_state_machine__21765__auto__ = function(state_25868){
switch(arguments.length){
case 0:
return demo$rm_hull_9261323$core$to_keyword_GT__$_state_machine__21765__auto____0.call(this);
case 1:
return demo$rm_hull_9261323$core$to_keyword_GT__$_state_machine__21765__auto____1.call(this,state_25868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$rm_hull_9261323$core$to_keyword_GT__$_state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$0 = demo$rm_hull_9261323$core$to_keyword_GT__$_state_machine__21765__auto____0;
demo$rm_hull_9261323$core$to_keyword_GT__$_state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$1 = demo$rm_hull_9261323$core$to_keyword_GT__$_state_machine__21765__auto____1;
return demo$rm_hull_9261323$core$to_keyword_GT__$_state_machine__21765__auto__;
})()
})();
var state__21913__auto__ = (function (){var statearr_25917 = f__21912__auto__();
(statearr_25917[(6)] = c__21911__auto___26189);

return statearr_25917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21913__auto__);
}));


return src_chan;
});
demo.rm_hull_9261323.core.color_fn = (function demo$rm_hull_9261323$core$color_fn(style,color){
var pred__25949 = cljs.core._EQ_;
var expr__25950 = style;
if(cljs.core.truth_((pred__25949.cljs$core$IFn$_invoke$arity$2 ? pred__25949.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transparent","transparent",-2073609949),expr__25950) : pred__25949.call(null,new cljs.core.Keyword(null,"transparent","transparent",-2073609949),expr__25950)))){
return wireframes.renderer.color.wireframe.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([color,style], 0));
} else {
if(cljs.core.truth_((pred__25949.cljs$core$IFn$_invoke$arity$2 ? pred__25949.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"translucent","translucent",-1428111933),expr__25950) : pred__25949.call(null,new cljs.core.Keyword(null,"translucent","translucent",-1428111933),expr__25950)))){
return wireframes.renderer.color.wireframe.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([color,style], 0));
} else {
if(cljs.core.truth_((pred__25949.cljs$core$IFn$_invoke$arity$2 ? pred__25949.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"opaque","opaque",-1243552654),expr__25950) : pred__25949.call(null,new cljs.core.Keyword(null,"opaque","opaque",-1243552654),expr__25950)))){
return wireframes.renderer.color.wireframe.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([color,style], 0));
} else {
if(cljs.core.truth_((pred__25949.cljs$core$IFn$_invoke$arity$2 ? pred__25949.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shaded","shaded",561405058),expr__25950) : pred__25949.call(null,new cljs.core.Keyword(null,"shaded","shaded",561405058),expr__25950)))){
return wireframes.renderer.color.solid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([color], 0));
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__25950))));
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
demo.rm_hull_9261323.core.render_shape = (function demo$rm_hull_9261323$core$render_shape(p__25974){
var map__25975 = p__25974;
var map__25975__$1 = cljs.core.__destructure_map(map__25975);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25975__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25975__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25975__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var focal_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25975__$1,new cljs.core.Keyword(null,"focal-length","focal-length",-1978298454));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25975__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25975__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var offset_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25975__$1,new cljs.core.Keyword(null,"offset?","offset?",-1603662060));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25975__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25975__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
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
demo.rm_hull_9261323.core.update_state = (function demo$rm_hull_9261323$core$update_state(event,p__25976){
var map__25977 = p__25976;
var map__25977__$1 = cljs.core.__destructure_map(map__25977);
var world_state = map__25977__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25977__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25977__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25977__$1,new cljs.core.Keyword(null,"z","z",-789527183));
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
var c__21911__auto___26218 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21912__auto__ = (function (){var switch__21764__auto__ = (function (state_26039){
var state_val_26040 = (state_26039[(1)]);
if((state_val_26040 === (1))){
var inst_25995 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(demo.rm_hull_9261323.core.url_prefix)+"names.txt");
var inst_25996 = (enchilada.proxy_request.cljs$core$IFn$_invoke$arity$1 ? enchilada.proxy_request.cljs$core$IFn$_invoke$arity$1(inst_25995) : enchilada.proxy_request.call(null,inst_25995));
var inst_25997 = dataview.loader.fetch_text(inst_25996);
var state_26039__$1 = state_26039;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26039__$1,(2),inst_25997);
} else {
if((state_val_26040 === (2))){
var inst_25999 = (state_26039[(2)]);
var inst_26000 = clojure.string.split_lines(inst_25999);
var inst_26001 = cljs.core.vec(inst_26000);
var inst_26003 = document.createElementNS("http://www.w3.org/1999/xhtml","div");
var inst_26005 = document.createElementNS("http://www.w3.org/1999/xhtml","div");
var inst_26006 = cljs.core.count(inst_26001);
var inst_26007 = cljs.core.rand_int(inst_26006);
var inst_26008 = cljs.core.iterate(cljs.core.inc,(0));
var inst_26009 = cljs.core.zipmap(inst_26008,inst_26001);
var inst_26010 = demo.rm_hull_9261323.core.shapes_GT_(updates_chan);
var inst_26011 = big_bang.components.dropdown.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"polyhedra","polyhedra",1956456888),new cljs.core.Keyword(null,"label-text","label-text",-1566972381)," Polyhedra:",new cljs.core.Keyword(null,"initial-value","initial-value",470619381),inst_26007,new cljs.core.Keyword(null,"options","options",99638489),inst_26009,new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124),inst_26010], 0));
var inst_26012 = dommy.template.__GT_node_like(inst_26011);
var inst_26013 = inst_26005.appendChild(inst_26012);
var inst_26014 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(demo.rm_hull_9261323.core.initial_state);
var inst_26015 = cljs.core.zipmap(demo.rm_hull_9261323.core.styles,demo.rm_hull_9261323.core.styles);
var inst_26016 = demo.rm_hull_9261323.core.to_keyword_GT_(updates_chan);
var inst_26017 = big_bang.components.dropdown.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"label-text","label-text",-1566972381)," Style:",new cljs.core.Keyword(null,"initial-value","initial-value",470619381),inst_26014,new cljs.core.Keyword(null,"options","options",99638489),inst_26015,new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124),inst_26016], 0));
var inst_26018 = dommy.template.__GT_node_like(inst_26017);
var inst_26019 = inst_26005.appendChild(inst_26018);
var inst_26020 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(demo.rm_hull_9261323.core.initial_state);
var inst_26021 = big_bang.components.color_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"label-text","label-text",-1566972381)," Color:",new cljs.core.Keyword(null,"initial-value","initial-value",470619381),inst_26020,new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124),updates_chan], 0));
var inst_26022 = dommy.template.__GT_node_like(inst_26021);
var inst_26023 = inst_26005.appendChild(inst_26022);
var inst_26024 = inst_26003.appendChild(inst_26005);
var inst_26026 = document.createElementNS("http://www.w3.org/1999/xhtml","div");
var inst_26027 = new cljs.core.Keyword(null,"focal-length","focal-length",-1978298454).cljs$core$IFn$_invoke$arity$1(demo.rm_hull_9261323.core.initial_state);
var inst_26028 = big_bang.components.slider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"focal-length","focal-length",-1978298454),new cljs.core.Keyword(null,"label-text","label-text",-1566972381)," Focal Length:",new cljs.core.Keyword(null,"initial-value","initial-value",470619381),inst_26027,new cljs.core.Keyword(null,"min-value","min-value",-1119123315),(1),new cljs.core.Keyword(null,"max-value","max-value",687805168),(25),new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124),updates_chan], 0));
var inst_26029 = dommy.template.__GT_node_like(inst_26028);
var inst_26030 = inst_26026.appendChild(inst_26029);
var inst_26031 = new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(demo.rm_hull_9261323.core.initial_state);
var inst_26032 = big_bang.components.slider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"depth","depth",1768663640),new cljs.core.Keyword(null,"label-text","label-text",-1566972381)," Z-Depth:",new cljs.core.Keyword(null,"initial-value","initial-value",470619381),inst_26031,new cljs.core.Keyword(null,"min-value","min-value",-1119123315),(0),new cljs.core.Keyword(null,"max-value","max-value",687805168),(50),new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124),updates_chan], 0));
var inst_26033 = dommy.template.__GT_node_like(inst_26032);
var inst_26034 = inst_26026.appendChild(inst_26033);
var inst_26035 = inst_26003.appendChild(inst_26026);
var inst_26036 = document.getElementById("canvas-area");
var inst_26037 = dommy.core.insert_after_BANG_(inst_26003,inst_26036);
var state_26039__$1 = (function (){var statearr_26044 = state_26039;
(statearr_26044[(7)] = inst_26013);

(statearr_26044[(8)] = inst_26019);

(statearr_26044[(9)] = inst_26023);

(statearr_26044[(10)] = inst_26024);

(statearr_26044[(11)] = inst_26030);

(statearr_26044[(12)] = inst_26034);

(statearr_26044[(13)] = inst_26035);

return statearr_26044;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26039__$1,inst_26037);
} else {
return null;
}
}
});
return (function() {
var demo$rm_hull_9261323$core$start_$_state_machine__21765__auto__ = null;
var demo$rm_hull_9261323$core$start_$_state_machine__21765__auto____0 = (function (){
var statearr_26046 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26046[(0)] = demo$rm_hull_9261323$core$start_$_state_machine__21765__auto__);

(statearr_26046[(1)] = (1));

return statearr_26046;
});
var demo$rm_hull_9261323$core$start_$_state_machine__21765__auto____1 = (function (state_26039){
while(true){
var ret_value__21766__auto__ = (function (){try{while(true){
var result__21767__auto__ = switch__21764__auto__(state_26039);
if(cljs.core.keyword_identical_QMARK_(result__21767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21767__auto__;
}
break;
}
}catch (e26047){var ex__21768__auto__ = e26047;
var statearr_26048_26240 = state_26039;
(statearr_26048_26240[(2)] = ex__21768__auto__);


if(cljs.core.seq((state_26039[(4)]))){
var statearr_26049_26241 = state_26039;
(statearr_26049_26241[(1)] = cljs.core.first((state_26039[(4)])));

} else {
throw ex__21768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26242 = state_26039;
state_26039 = G__26242;
continue;
} else {
return ret_value__21766__auto__;
}
break;
}
});
demo$rm_hull_9261323$core$start_$_state_machine__21765__auto__ = function(state_26039){
switch(arguments.length){
case 0:
return demo$rm_hull_9261323$core$start_$_state_machine__21765__auto____0.call(this);
case 1:
return demo$rm_hull_9261323$core$start_$_state_machine__21765__auto____1.call(this,state_26039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$rm_hull_9261323$core$start_$_state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$0 = demo$rm_hull_9261323$core$start_$_state_machine__21765__auto____0;
demo$rm_hull_9261323$core$start_$_state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$1 = demo$rm_hull_9261323$core$start_$_state_machine__21765__auto____1;
return demo$rm_hull_9261323$core$start_$_state_machine__21765__auto__;
})()
})();
var state__21913__auto__ = (function (){var statearr_26050 = f__21912__auto__();
(statearr_26050[(6)] = c__21911__auto___26218);

return statearr_26050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21913__auto__);
}));


return big_bang.core.big_bang.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),demo.rm_hull_9261323.core.initial_state,new cljs.core.Keyword(null,"on-tick","on-tick",-56973396),demo.rm_hull_9261323.core.update_state,new cljs.core.Keyword(null,"to-draw","to-draw",-1467115105),demo.rm_hull_9261323.core.render_shape,new cljs.core.Keyword(null,"receive-channel","receive-channel",1240287920),updates_chan,new cljs.core.Keyword(null,"on-receive","on-receive",-706822243),demo.rm_hull_9261323.core.handle_incoming_msg], 0));
});
(enchilada.ctx.fillStyle = "white");
enchilada.ctx.fillRect((0),(0),demo.rm_hull_9261323.core.width,demo.rm_hull_9261323.core.height);
jayq.core.show(enchilada.canvas);
demo.rm_hull_9261323.core.start();

//# sourceMappingURL=demo.rm_hull_9261323.core.js.map
