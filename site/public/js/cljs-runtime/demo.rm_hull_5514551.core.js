goog.provide('demo.rm_hull_5514551.core');
enchilada.core.hide((enchilada.canvas.cljs$core$IFn$_invoke$arity$0 ? enchilada.canvas.cljs$core$IFn$_invoke$arity$0() : enchilada.canvas.call(null)));
enchilada.core.show((enchilada.svg.cljs$core$IFn$_invoke$arity$0 ? enchilada.svg.cljs$core$IFn$_invoke$arity$0() : enchilada.svg.call(null)));
var data_25121 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25108){
var vec__25109 = p__25108;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25109,(0),null);
var geo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25109,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"geo","geo",-2054400503),geo,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.rand.cljs$core$IFn$_invoke$arity$0()], null);
}),demo.rm_hull_5514551.us.states);
var color_scheme_25122 = vomnibus.color_brewer.Greens_9;
var color_scale_25123 = (function (){var s = c2.scale.linear.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"domain","domain",1847214937),c2.maths.extent(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),data_25121)),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(cljs.core.count(color_scheme_25122) - (1))], null)], 0));
return (function (d){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(color_scheme_25122,c2.maths.floor((s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(d) : s.call(null,d))));
});
})();
var proj_25124 = c2.geo.projection.albers_usa();
var co__21848__auto___25128 = (function (){var co__21793__auto__ = (new reflex.core.ComputedObservable(null,true,(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"preserveAspectRatio","preserveAspectRatio",1832131817),"xMinYMin meet",new cljs.core.Keyword(null,"width","width",-384071477),(960),new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 950 500"], null),c2.core.unify(data_25121,(function (p__25113){
var map__25114 = p__25113;
var map__25114__$1 = cljs.core.__destructure_map(map__25114);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25114__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var geo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25114__$1,new cljs.core.Keyword(null,"geo","geo",-2054400503));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25114__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path.state","path.state",315868239),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),state,new cljs.core.Keyword(null,"d","d",1972142424),c2.geo.core.geo__GT_svg.cljs$core$IFn$_invoke$arity$variadic(geo,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"projection","projection",-412523042),proj_25124], 0)),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"fill","fill",883462889),color_scale_25123(value)], null)], null)], null);
}))], null);
}),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("computed-observable"),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null));
cljs.core.deref(co__21793__auto__);

return co__21793__auto__;
})();
var $el__21849__auto___25129 = c2.dom.__GT_dom("svg#svg-area");
singult.core.merge_BANG_($el__21849__auto___25129,cljs.core.deref(co__21848__auto___25128));

cljs.core.add_watch(co__21848__auto___25128,new cljs.core.Keyword(null,"update-dom","update-dom",1414664877),(function (){
return singult.core.merge_BANG_($el__21849__auto___25129,cljs.core.deref(co__21848__auto___25128));
}));


//# sourceMappingURL=demo.rm_hull_5514551.core.js.map
