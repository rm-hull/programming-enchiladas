goog.provide('demo.rm_hull_8723389.referee');
demo.rm_hull_8723389.referee.initial_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"referee","referee",-280235880),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"human","human",-772334390),(0),new cljs.core.Keyword(null,"opponent","opponent",-373061632),(0)], null)], null);
demo.rm_hull_8723389.referee.render = (function demo$rm_hull_8723389$referee$render(world_state){
dommy.core.set_html_BANG_(document.getElementById("score"),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(world_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"human","human",-772334390)], null)))+" - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(world_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"opponent","opponent",-373061632)], null)))));

return dommy.core.set_html_BANG_(document.getElementById("winner"),(""+"Winner: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.name(cljs.core.get.cljs$core$IFn$_invoke$arity$3(world_state,new cljs.core.Keyword(null,"winner","winner",714604679),"???"))))));
});
demo.rm_hull_8723389.referee.beats_QMARK_ = (function demo$rm_hull_8723389$referee$beats_QMARK_(w1,w2){
var pred__26061 = cljs.core._EQ_;
var expr__26062 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w1,w2], null);
if(cljs.core.truth_((function (){var G__26065 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scissors","scissors",868919830),new cljs.core.Keyword(null,"paper","paper",-836673493)], null);
var G__26066 = expr__26062;
return (pred__26061.cljs$core$IFn$_invoke$arity$2 ? pred__26061.cljs$core$IFn$_invoke$arity$2(G__26065,G__26066) : pred__26061.call(null,G__26065,G__26066));
})())){
return true;
} else {
if(cljs.core.truth_((function (){var G__26070 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paper","paper",-836673493),new cljs.core.Keyword(null,"rock","rock",946709275)], null);
var G__26071 = expr__26062;
return (pred__26061.cljs$core$IFn$_invoke$arity$2 ? pred__26061.cljs$core$IFn$_invoke$arity$2(G__26070,G__26071) : pred__26061.call(null,G__26070,G__26071));
})())){
return true;
} else {
if(cljs.core.truth_((function (){var G__26074 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rock","rock",946709275),new cljs.core.Keyword(null,"scissors","scissors",868919830)], null);
var G__26075 = expr__26062;
return (pred__26061.cljs$core$IFn$_invoke$arity$2 ? pred__26061.cljs$core$IFn$_invoke$arity$2(G__26074,G__26075) : pred__26061.call(null,G__26074,G__26075));
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
var pred__26084 = cljs.core._EQ_;
var expr__26085 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b1,b2], null);
if(cljs.core.truth_((function (){var G__26089 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null);
var G__26090 = expr__26085;
return (pred__26084.cljs$core$IFn$_invoke$arity$2 ? pred__26084.cljs$core$IFn$_invoke$arity$2(G__26089,G__26090) : pred__26084.call(null,G__26089,G__26090));
})())){
return new cljs.core.Keyword(null,"human","human",-772334390);
} else {
if(cljs.core.truth_((function (){var G__26094 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null);
var G__26095 = expr__26085;
return (pred__26084.cljs$core$IFn$_invoke$arity$2 ? pred__26084.cljs$core$IFn$_invoke$arity$2(G__26094,G__26095) : pred__26084.call(null,G__26094,G__26095));
})())){
return new cljs.core.Keyword(null,"opponent","opponent",-373061632);
} else {
return new cljs.core.Keyword(null,"draw","draw",1358331674);
}
}
});
demo.rm_hull_8723389.referee.incoming = (function demo$rm_hull_8723389$referee$incoming(p__26104,world_state){
var map__26105 = p__26104;
var map__26105__$1 = cljs.core.__destructure_map(map__26105);
var event = map__26105__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26105__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var weapon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26105__$1,new cljs.core.Keyword(null,"weapon","weapon",-504830232));
var pred__26106 = cljs.core._EQ_;
var expr__26107 = from;
if(cljs.core.truth_((pred__26106.cljs$core$IFn$_invoke$arity$2 ? pred__26106.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"human","human",-772334390),expr__26107) : pred__26106.call(null,new cljs.core.Keyword(null,"human","human",-772334390),expr__26107)))){
return big_bang.package$.make_package(cljs.core.assoc_in(world_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),from], null),weapon),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"opponent","opponent",-373061632),new cljs.core.Keyword(null,"choose","choose",1680203305),true], null));
} else {
if(cljs.core.truth_((pred__26106.cljs$core$IFn$_invoke$arity$2 ? pred__26106.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"opponent","opponent",-373061632),expr__26107) : pred__26106.call(null,new cljs.core.Keyword(null,"opponent","opponent",-373061632),expr__26107)))){
var human_weapon = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(world_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"human","human",-772334390)], null));
var opponent_weapon = weapon;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(world_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"human","human",-772334390)], null),demo.rm_hull_8723389.referee.calc_score,human_weapon,opponent_weapon),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"opponent","opponent",-373061632)], null),demo.rm_hull_8723389.referee.calc_score,opponent_weapon,human_weapon),new cljs.core.Keyword(null,"winner","winner",714604679),demo.rm_hull_8723389.referee.winner(human_weapon,opponent_weapon));
} else {
return world_state;
}
}
});

//# sourceMappingURL=demo.rm_hull_8723389.referee.js.map
