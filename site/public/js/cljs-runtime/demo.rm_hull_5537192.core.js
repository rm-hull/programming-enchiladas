goog.provide('demo.rm_hull_5537192.core');
jayq.core.hide(enchilada.canvas);
jayq.core.show(enchilada.svg);
var data_25713 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25691){
var vec__25692 = p__25691;
var country = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25692,(0),null);
var geo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25692,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"country","country",312965309),country,new cljs.core.Keyword(null,"geo","geo",-2054400503),geo], null);
}),demo.rm_hull_5537192.world.countries);
var proj_25714 = c2.geo.projection.albers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"scale","scale",-230427353),(190),new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"parallels","parallels",1548322555),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.1], null),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(590),(250)], null)], 0));
var co__21863__auto___25715 = (function (){var co__21808__auto__ = (new reflex.core.ComputedObservable(null,true,(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"preserveAspectRatio","preserveAspectRatio",1832131817),"xMinYMin meet",new cljs.core.Keyword(null,"width","width",-384071477),(960),new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 950 500"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.countries","g.countries",45600488),c2.core.unify(data_25713,(function (p__25709){
var map__25710 = p__25709;
var map__25710__$1 = cljs.core.__destructure_map(map__25710);
var country = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25710__$1,new cljs.core.Keyword(null,"country","country",312965309));
var geo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25710__$1,new cljs.core.Keyword(null,"geo","geo",-2054400503));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path.country","path.country",-1325282726),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),country,new cljs.core.Keyword(null,"d","d",1972142424),c2.geo.core.geo__GT_svg.cljs$core$IFn$_invoke$arity$variadic(geo,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"projection","projection",-412523042),proj_25714], 0)),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"fill","fill",883462889),"lightblue"], null)], null);
}))], null)], null);
}),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("computed-observable"),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null));
cljs.core.deref(co__21808__auto__);

return co__21808__auto__;
})();
var $el__21864__auto___25716 = c2.dom.__GT_dom("svg#svg-area");
singult.core.merge_BANG_($el__21864__auto___25716,cljs.core.deref(co__21863__auto___25715));

cljs.core.add_watch(co__21863__auto___25715,new cljs.core.Keyword(null,"update-dom","update-dom",1414664877),(function (){
return singult.core.merge_BANG_($el__21864__auto___25716,cljs.core.deref(co__21863__auto___25715));
}));


//# sourceMappingURL=demo.rm_hull_5537192.core.js.map
