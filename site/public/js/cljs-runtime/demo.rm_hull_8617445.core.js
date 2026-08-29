goog.provide('demo.rm_hull_8617445.core');
dommy.core.insert_after_BANG_((function (){var dom35531 = document.createElementNS("http://www.w3.org/1999/xhtml","div");
dom35531.setAttribute("id","app");

return dom35531;
})(),document.getElementById("canvas-area"));
demo.rm_hull_8617445.core.listen = (function demo$rm_hull_8617445$core$listen(el,type){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
goog.events.listen(el,type,(function (p1__35532_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,p1__35532_SHARP_);
}));

return out;
});

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core35542 = (function (app,node,meta35543){
this.app = app;
this.node = node;
this.meta35543 = meta35543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core35542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35544,meta35543__$1){
var self__ = this;
var _35544__$1 = this;
return (new demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core35542(self__.app,self__.node,meta35543__$1));
}));

(demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core35542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35544){
var self__ = this;
var _35544__$1 = this;
return self__.meta35543;
}));

(demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core35542.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL);

(demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core35542.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var mouse_chan = cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.rm_hull_8617445.core.listen(window,goog.events.EventType.MOUSEMOVE)], null));
var c__27470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_35568){
var state_val_35569 = (state_35568[(1)]);
if((state_val_35569 === (1))){
var state_35568__$1 = state_35568;
var statearr_35574_35689 = state_35568__$1;
(statearr_35574_35689[(2)] = null);

(statearr_35574_35689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35569 === (2))){
var state_35568__$1 = state_35568;
var statearr_35575_35691 = state_35568__$1;
(statearr_35575_35691[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35569 === (3))){
var inst_35566 = (state_35568[(2)]);
var state_35568__$1 = state_35568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35568__$1,inst_35566);
} else {
if((state_val_35569 === (4))){
var state_35568__$1 = state_35568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35568__$1,(7),mouse_chan);
} else {
if((state_val_35569 === (5))){
var state_35568__$1 = state_35568;
var statearr_35590_35693 = state_35568__$1;
(statearr_35590_35693[(2)] = null);

(statearr_35590_35693[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35569 === (6))){
var inst_35564 = (state_35568[(2)]);
var state_35568__$1 = state_35568;
var statearr_35605_35695 = state_35568__$1;
(statearr_35605_35695[(2)] = inst_35564);

(statearr_35605_35695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35569 === (7))){
var inst_35556 = (state_35568[(2)]);
var inst_35557 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4(self__.app,cljs.core.assoc,new cljs.core.Keyword(null,"mouse","mouse",478628972),inst_35556);
var state_35568__$1 = (function (){var statearr_35606 = state_35568;
(statearr_35606[(7)] = inst_35557);

return statearr_35606;
})();
var statearr_35608_35698 = state_35568__$1;
(statearr_35608_35698[(2)] = null);

(statearr_35608_35698[(1)] = (2));


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
var demo$rm_hull_8617445$core$state_machine__27042__auto__ = null;
var demo$rm_hull_8617445$core$state_machine__27042__auto____0 = (function (){
var statearr_35609 = [null,null,null,null,null,null,null,null];
(statearr_35609[(0)] = demo$rm_hull_8617445$core$state_machine__27042__auto__);

(statearr_35609[(1)] = (1));

return statearr_35609;
});
var demo$rm_hull_8617445$core$state_machine__27042__auto____1 = (function (state_35568){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_35568);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e35672){var ex__27046__auto__ = e35672;
var statearr_35673_35700 = state_35568;
(statearr_35673_35700[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_35568[(4)]))){
var statearr_35674_35702 = state_35568;
(statearr_35674_35702[(1)] = cljs.core.first((state_35568[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35703 = state_35568;
state_35568 = G__35703;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
demo$rm_hull_8617445$core$state_machine__27042__auto__ = function(state_35568){
switch(arguments.length){
case 0:
return demo$rm_hull_8617445$core$state_machine__27042__auto____0.call(this);
case 1:
return demo$rm_hull_8617445$core$state_machine__27042__auto____1.call(this,state_35568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$rm_hull_8617445$core$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = demo$rm_hull_8617445$core$state_machine__27042__auto____0;
demo$rm_hull_8617445$core$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = demo$rm_hull_8617445$core$state_machine__27042__auto____1;
return demo$rm_hull_8617445$core$state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_35675 = f__27471__auto__();
(statearr_35675[(6)] = c__27470__auto__);

return statearr_35675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));

return c__27470__auto__;
}));

(demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core35542.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL);

(demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core35542.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.p(null,(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"mouse","mouse",478628972).cljs$core$IFn$_invoke$arity$1(self__.app);
if(cljs.core.truth_(temp__5825__auto__)){
var pos = temp__5825__auto__;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mouse","mouse",478628972).cljs$core$IFn$_invoke$arity$1(self__.app)], 0));
} else {
return null;
}
})());
}));

(demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core35542.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol(null,"meta35543","meta35543",175951904,null)], null);
}));

(demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core35542.cljs$lang$type = true);

(demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core35542.cljs$lang$ctorStr = "demo.rm-hull-8617445.core/t_demo$rm_hull_8617445$core35542");

(demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core35542.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"demo.rm-hull-8617445.core/t_demo$rm_hull_8617445$core35542");
}));

/**
 * Positional factory function for demo.rm-hull-8617445.core/t_demo$rm_hull_8617445$core35542.
 */
demo.rm_hull_8617445.core.__GT_t_demo$rm_hull_8617445$core35542 = (function demo$rm_hull_8617445$core$__GT_t_demo$rm_hull_8617445$core35542(app,node,meta35543){
return (new demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core35542(app,node,meta35543));
});


om.core.root.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mouse","mouse",478628972),null], null),(function (app,node){
return (new demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core35542(app,node,cljs.core.PersistentArrayMap.EMPTY));
}),document.getElementById("app"));

//# sourceMappingURL=demo.rm_hull_8617445.core.js.map
