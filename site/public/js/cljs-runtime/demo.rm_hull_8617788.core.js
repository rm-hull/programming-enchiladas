goog.provide('demo.rm_hull_8617788.core');
dommy.core.insert_after_BANG_((function (){var dom25661 = document.createElementNS("http://www.w3.org/1999/xhtml","div");
dom25661.setAttribute("id","app");

return dom25661;
})(),document.getElementById("canvas-area"));
demo.rm_hull_8617788.core.app = document.getElementById("app");
demo.rm_hull_8617788.core.update = (function demo$rm_hull_8617788$core$update(event,world_state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(world_state,new cljs.core.Keyword(null,"mouse-coords","mouse-coords",-600181821),big_bang.events.browser.client_coords(event));
});
demo.rm_hull_8617788.core.render = (function demo$rm_hull_8617788$core$render(world_state){
return (demo.rm_hull_8617788.core.app.innerText = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mouse-coords","mouse-coords",-600181821).cljs$core$IFn$_invoke$arity$1(world_state)], 0)));
});
big_bang.core.big_bang.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mouse-coords","mouse-coords",-600181821),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),new cljs.core.Keyword(null,"on-mousemove","on-mousemove",-890666111),demo.rm_hull_8617788.core.update,new cljs.core.Keyword(null,"to-draw","to-draw",-1467115105),demo.rm_hull_8617788.core.render], 0));

//# sourceMappingURL=demo.rm_hull_8617788.core.js.map
