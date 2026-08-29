goog.provide('demo.rm_hull_8723389.human');
demo.rm_hull_8723389.human.initial_state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"human","human",-772334390)], null);
demo.rm_hull_8723389.human.update = (function demo$rm_hull_8723389$human$update(event,world_state){
var chosen_weapon = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__25735 = big_bang.events.browser.target(event).parentNode;
var G__25736 = "data-type";
return (dommy.core.attr.cljs$core$IFn$_invoke$arity$2 ? dommy.core.attr.cljs$core$IFn$_invoke$arity$2(G__25735,G__25736) : dommy.core.attr.call(null,G__25735,G__25736));
})());
return big_bang.package$.make_package(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(world_state,new cljs.core.Keyword(null,"weapon","weapon",-504830232),chosen_weapon),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"weapon","weapon",-504830232),chosen_weapon], null));
});
demo.rm_hull_8723389.human.incoming = (function demo$rm_hull_8723389$human$incoming(event,world_state){
return world_state;
});
demo.rm_hull_8723389.human.render = (function demo$rm_hull_8723389$human$render(world_state){
var temp__5825__auto__ = new cljs.core.Keyword(null,"weapon","weapon",-504830232).cljs$core$IFn$_invoke$arity$1(world_state);
if(cljs.core.truth_(temp__5825__auto__)){
var weapon = temp__5825__auto__;
return dommy.core.set_html_BANG_(document.getElementById("human"),(""+"You chose: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.name(weapon)))));
} else {
return null;
}
});

//# sourceMappingURL=demo.rm_hull_8723389.human.js.map
