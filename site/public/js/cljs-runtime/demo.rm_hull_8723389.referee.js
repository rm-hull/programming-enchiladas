goog.provide('demo.rm_hull_8723389.referee');
demo.rm_hull_8723389.referee.initial_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"referee","referee",-280235880),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"human","human",-772334390),(0),new cljs.core.Keyword(null,"opponent","opponent",-373061632),(0)], null)], null);
demo.rm_hull_8723389.referee.render = (function demo$rm_hull_8723389$referee$render(world_state){
dommy.core.set_html_BANG_(document.getElementById("score"),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(world_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"human","human",-772334390)], null)))+" - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(world_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"opponent","opponent",-373061632)], null)))));

return dommy.core.set_html_BANG_(document.getElementById("winner"),(""+"Winner: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.name(cljs.core.get.cljs$core$IFn$_invoke$arity$3(world_state,new cljs.core.Keyword(null,"winner","winner",714604679),"???"))))));
});
demo.rm_hull_8723389.referee.beats_QMARK_ = (function demo$rm_hull_8723389$referee$beats_QMARK_(w1,w2){
var pred__36438 = cljs.core._EQ_;
var expr__36439 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w1,w2], null);
if(cljs.core.truth_((function (){var G__36444 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scissors","scissors",868919830),new cljs.core.Keyword(null,"paper","paper",-836673493)], null);
var G__36445 = expr__36439;
return (pred__36438.cljs$core$IFn$_invoke$arity$2 ? pred__36438.cljs$core$IFn$_invoke$arity$2(G__36444,G__36445) : pred__36438.call(null,G__36444,G__36445));
})())){
return true;
} else {
if(cljs.core.truth_((function (){var G__36449 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper","paper",-836673493),new cljs.core.Keyword(null,"rock","rock",946709275)], null);
var G__36450 = expr__36439;
return (pred__36438.cljs$core$IFn$_invoke$arity$2 ? pred__36438.cljs$core$IFn$_invoke$arity$2(G__36449,G__36450) : pred__36438.call(null,G__36449,G__36450));
})())){
return true;
} else {
if(cljs.core.truth_((function (){var G__36455 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rock","rock",946709275),new cljs.core.Keyword(null,"scissors","scissors",868919830)], null);
var G__36456 = expr__36439;
return (pred__36438.cljs$core$IFn$_invoke$arity$2 ? pred__36438.cljs$core$IFn$_invoke$arity$2(G__36455,G__36456) : pred__36438.call(null,G__36455,G__36456));
})())){
return true;
} else {
return false;
}
}
}
});
demo.rm_hull_8723389.referee.calc_score = (function demo$rm_hull_8723389$referee$calc_score(score,w1,w2){
if(demo.rm_hull_8723389.referee.beats_QMARK_(w1,w2)){
return (score + (1));
} else {
return score;
}
});
demo.rm_hull_8723389.referee.winner = (function demo$rm_hull_8723389$referee$winner(w1,w2){
var b1 = demo.rm_hull_8723389.referee.beats_QMARK_(w1,w2);
var b2 = demo.rm_hull_8723389.referee.beats_QMARK_(w2,w1);
var pred__36463 = cljs.core._EQ_;
var expr__36464 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b1,b2], null);
if(cljs.core.truth_((function (){var G__36466 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null);
var G__36467 = expr__36464;
return (pred__36463.cljs$core$IFn$_invoke$arity$2 ? pred__36463.cljs$core$IFn$_invoke$arity$2(G__36466,G__36467) : pred__36463.call(null,G__36466,G__36467));
})())){
return new cljs.core.Keyword(null,"human","human",-772334390);
} else {
if(cljs.core.truth_((function (){var G__36469 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null);
var G__36470 = expr__36464;
return (pred__36463.cljs$core$IFn$_invoke$arity$2 ? pred__36463.cljs$core$IFn$_invoke$arity$2(G__36469,G__36470) : pred__36463.call(null,G__36469,G__36470));
})())){
return new cljs.core.Keyword(null,"opponent","opponent",-373061632);
} else {
return new cljs.core.Keyword(null,"draw","draw",1358331674);
}
}
});
demo.rm_hull_8723389.referee.incoming = (function demo$rm_hull_8723389$referee$incoming(p__36472,world_state){
var map__36473 = p__36472;
var map__36473__$1 = cljs.core.__destructure_map(map__36473);
var event = map__36473__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36473__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var weapon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36473__$1,new cljs.core.Keyword(null,"weapon","weapon",-504830232));
var pred__36474 = cljs.core._EQ_;
var expr__36475 = from;
if(cljs.core.truth_((pred__36474.cljs$core$IFn$_invoke$arity$2 ? pred__36474.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"human","human",-772334390),expr__36475) : pred__36474.call(null,new cljs.core.Keyword(null,"human","human",-772334390),expr__36475)))){
return big_bang.package$.make_package(cljs.core.assoc_in(world_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),from], null),weapon),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"opponent","opponent",-373061632),new cljs.core.Keyword(null,"choose","choose",1680203305),true], null));
} else {
if(cljs.core.truth_((pred__36474.cljs$core$IFn$_invoke$arity$2 ? pred__36474.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"opponent","opponent",-373061632),expr__36475) : pred__36474.call(null,new cljs.core.Keyword(null,"opponent","opponent",-373061632),expr__36475)))){
var human_weapon = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(world_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"human","human",-772334390)], null));
var opponent_weapon = weapon;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(world_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"human","human",-772334390)], null),demo.rm_hull_8723389.referee.calc_score,human_weapon,opponent_weapon),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"opponent","opponent",-373061632)], null),demo.rm_hull_8723389.referee.calc_score,opponent_weapon,human_weapon),new cljs.core.Keyword(null,"winner","winner",714604679),demo.rm_hull_8723389.referee.winner(human_weapon,opponent_weapon));
} else {
return world_state;
}
}
});

//# sourceMappingURL=demo.rm_hull_8723389.referee.js.map
