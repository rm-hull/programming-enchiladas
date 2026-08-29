goog.provide('demo.rm_hull_5285431.core');
/**
 * Unfolding the dragon
 */
demo.rm_hull_5285431.core.dragon_seq = (function (){var seq0 = (function demo$rm_hull_5285431$core$seq0(x,y){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(cljs.core.flatten(x),demo$rm_hull_5285431$core$seq0(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.Keyword(null,"right","right",-452581833),(90),y,new cljs.core.Keyword(null,"fwd","fwd",-1500039010),(20)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fwd","fwd",-1500039010),(20),x,new cljs.core.Keyword(null,"left","left",-399115937),(90),y], null)));
}),null,null));
});
return seq0(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
})();
enchilada.core.show((enchilada.canvas.cljs$core$IFn$_invoke$arity$0 ? enchilada.canvas.cljs$core$IFn$_invoke$arity$0() : enchilada.canvas.call(null)));
turtle.core.draw_BANG_.cljs$core$IFn$_invoke$arity$variadic(turtle.renderer.canvas.__GT_canvas(enchilada.ctx),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(demo.rm_hull_5285431.core.dragon_seq,(13)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(800),(600)], null)], 0));

//# sourceMappingURL=demo.rm_hull_5285431.core.js.map
