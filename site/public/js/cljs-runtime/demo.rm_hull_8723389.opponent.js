goog.provide('demo.rm_hull_8723389.opponent');
demo.rm_hull_8723389.opponent.choices = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rock","rock",946709275),new cljs.core.Keyword(null,"paper","paper",-836673493),new cljs.core.Keyword(null,"scissors","scissors",868919830)], null);
demo.rm_hull_8723389.opponent.make_rand_seq = (function demo$rm_hull_8723389$opponent$make_rand_seq(seed){
var m = Math.pow((2),(32));
var a = (1664525);
var c = (1013904223);
var seq0 = (function demo$rm_hull_8723389$opponent$make_rand_seq_$_seq0(seed__$1){
var value = (seed__$1 / m);
var new_seed = cljs.core.rem((c + (a * seed__$1)),m);
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(value,demo$rm_hull_8723389$opponent$make_rand_seq_$_seq0(new_seed));
}),null,null));
});
return seq0(seed);
});
demo.rm_hull_8723389.opponent.initial_state = (function demo$rm_hull_8723389$opponent$initial_state(seed){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"opponent","opponent",-373061632),new cljs.core.Keyword(null,"rnd-seq","rnd-seq",-917763914),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(demo.rm_hull_8723389.opponent.choices,cljs.core.int$,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,(3))),demo.rm_hull_8723389.opponent.make_rand_seq(seed))], null);
});
demo.rm_hull_8723389.opponent.render = (function demo$rm_hull_8723389$opponent$render(world_state){
var temp__5825__auto__ = new cljs.core.Keyword(null,"weapon","weapon",-504830232).cljs$core$IFn$_invoke$arity$1(world_state);
if(cljs.core.truth_(temp__5825__auto__)){
var weapon = temp__5825__auto__;
return dommy.core.set_html_BANG_(document.getElementById("opponent"),(""+"Your opponent chose: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.name(weapon)))));
} else {
return null;
}
});
demo.rm_hull_8723389.opponent.choose = (function demo$rm_hull_8723389$opponent$choose(world_state){
var rnd = new cljs.core.Keyword(null,"rnd-seq","rnd-seq",-917763914).cljs$core$IFn$_invoke$arity$1(world_state);
var chosen_weapon = cljs.core.first(rnd);
return big_bang.package$.make_package(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(world_state,new cljs.core.Keyword(null,"weapon","weapon",-504830232),chosen_weapon,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rnd-seq","rnd-seq",-917763914),cljs.core.rest(rnd)], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"opponent","opponent",-373061632),new cljs.core.Keyword(null,"weapon","weapon",-504830232),chosen_weapon], null));
});
demo.rm_hull_8723389.opponent.incoming = (function demo$rm_hull_8723389$opponent$incoming(event,world_state){
var pred__36525 = cljs.core._EQ_;
var expr__36526 = event;
if(cljs.core.truth_((function (){var G__36528 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"opponent","opponent",-373061632),new cljs.core.Keyword(null,"choose","choose",1680203305),true], null);
var G__36529 = expr__36526;
return (pred__36525.cljs$core$IFn$_invoke$arity$2 ? pred__36525.cljs$core$IFn$_invoke$arity$2(G__36528,G__36529) : pred__36525.call(null,G__36528,G__36529));
})())){
return demo.rm_hull_8723389.opponent.choose(world_state);
} else {
return world_state;
}
});

//# sourceMappingURL=demo.rm_hull_8723389.opponent.js.map
