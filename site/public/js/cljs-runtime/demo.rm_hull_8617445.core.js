goog.provide('demo.rm_hull_8617445.core');
dommy.core.insert_after_BANG_((function (){var dom25628 = document.createElementNS("http://www.w3.org/1999/xhtml","div");
dom25628.setAttribute("id","app");

return dom25628;
})(),document.getElementById("canvas-area"));
demo.rm_hull_8617445.core.listen = (function demo$rm_hull_8617445$core$listen(el,type){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
goog.events.listen(el,type,(function (p1__25650_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,p1__25650_SHARP_);
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
demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core25665 = (function (app,node,meta25666){
this.app = app;
this.node = node;
this.meta25666 = meta25666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core25665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25667,meta25666__$1){
var self__ = this;
var _25667__$1 = this;
return (new demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core25665(self__.app,self__.node,meta25666__$1));
}));

(demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core25665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25667){
var self__ = this;
var _25667__$1 = this;
return self__.meta25666;
}));

(demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core25665.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL);

(demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core25665.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var mouse_chan = cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.rm_hull_8617445.core.listen(window,goog.events.EventType.MOUSEMOVE)], null));
var G__25691 = (function (){while(true){
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4(self__.app,cljs.core.assoc,new cljs.core.Keyword(null,"mouse","mouse",478628972),cljs.core.async._LT__BANG_(mouse_chan));

continue;

break;
}
})();
return (demo.rm_hull_8617445.core.go.cljs$core$IFn$_invoke$arity$1 ? demo.rm_hull_8617445.core.go.cljs$core$IFn$_invoke$arity$1(G__25691) : demo.rm_hull_8617445.core.go.call(null,G__25691));
}));

(demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core25665.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL);

(demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core25665.prototype.om$core$IRender$render$arity$1 = (function (_){
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

(demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core25665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol(null,"meta25666","meta25666",1293551297,null)], null);
}));

(demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core25665.cljs$lang$type = true);

(demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core25665.cljs$lang$ctorStr = "demo.rm-hull-8617445.core/t_demo$rm_hull_8617445$core25665");

(demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core25665.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"demo.rm-hull-8617445.core/t_demo$rm_hull_8617445$core25665");
}));

/**
 * Positional factory function for demo.rm-hull-8617445.core/t_demo$rm_hull_8617445$core25665.
 */
demo.rm_hull_8617445.core.__GT_t_demo$rm_hull_8617445$core25665 = (function demo$rm_hull_8617445$core$__GT_t_demo$rm_hull_8617445$core25665(app,node,meta25666){
return (new demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core25665(app,node,meta25666));
});


om.core.root.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mouse","mouse",478628972),null], null),(function (app,node){
return (new demo.rm_hull_8617445.core.t_demo$rm_hull_8617445$core25665(app,node,cljs.core.PersistentArrayMap.EMPTY));
}),document.getElementById("app"));

//# sourceMappingURL=demo.rm_hull_8617445.core.js.map
