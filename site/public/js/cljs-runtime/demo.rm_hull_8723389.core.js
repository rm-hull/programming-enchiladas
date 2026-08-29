goog.provide('demo.rm_hull_8723389.core');
demo.rm_hull_8723389.core.url_root = "https://raw.github.com/rm-hull/big-bang/master/examples/rock-paper-scissors/";
demo.rm_hull_8723389.core.style = (function demo$rm_hull_8723389$core$style(var_args){
var args__5903__auto__ = [];
var len__5897__auto___26090 = arguments.length;
var i__5898__auto___26091 = (0);
while(true){
if((i__5898__auto___26091 < len__5897__auto___26090)){
args__5903__auto__.push((arguments[i__5898__auto___26091]));

var G__26092 = (i__5898__auto___26091 + (1));
i__5898__auto___26091 = G__26092;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return demo.rm_hull_8723389.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(demo.rm_hull_8723389.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",styles)], null);
}));

(demo.rm_hull_8723389.core.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(demo.rm_hull_8723389.core.style.cljs$lang$applyTo = (function (seq25943){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25943));
}));

demo.rm_hull_8723389.core.player_div = (function demo$rm_hull_8723389$core$player_div(id,css_class,title_text,svg){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name(css_class)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name(id)], null),title_text], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graphic","div.graphic",431076760),dommy.template.html__GT_nodes(svg)], null)], null);
});
demo.rm_hull_8723389.core.init_play_area = (function demo$rm_hull_8723389$core$init_play_area(human_svg,opponent_svg){
return dommy.core.insert_after_BANG_((function (){var dom25965 = document.createElementNS("http://www.w3.org/1999/xhtml","div");
dom25965.setAttribute("id","app");

dom25965.appendChild(dommy.template.__GT_node_like(demo.rm_hull_8723389.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#app { font-family: monospace; }","div.pull-right { float: right; width: 150px; padding: 7px; }","div.leftpanel { float:left; margin: 20px; }","div.rightpanel { margin: 20px; }","#discourse-area { width: 850px; border: 1px grey solid; }","#discourse-area h2 { padding: 15px; }"], 0))));

dom25965.appendChild((function (){var dom25966 = document.createElementNS("http://www.w3.org/1999/xhtml","div");
dom25966.setAttribute("id","discourse-area");

dom25966.appendChild((function (){var dom25967 = document.createElementNS("http://www.w3.org/1999/xhtml","div");
(dom25967.className = "pull-right");

dom25967.appendChild((function (){var dom25968 = document.createElementNS("http://www.w3.org/1999/xhtml","p");
dom25968.setAttribute("id","winner");

return dom25968;
})());

dom25967.appendChild((function (){var dom25969 = document.createElementNS("http://www.w3.org/1999/xhtml","p");
dom25969.setAttribute("id","score");

return dom25969;
})());

return dom25967;
})());

dom25966.appendChild((function (){var dom25970 = document.createElementNS("http://www.w3.org/1999/xhtml","h2");
dom25970.appendChild(document.createTextNode("Let's play a game - select your weapon"));

return dom25970;
})());

return dom25966;
})());

dom25965.appendChild(dommy.template.__GT_node_like(demo.rm_hull_8723389.core.player_div(new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"leftpanel","leftpanel",-483639501),"Choose:",human_svg)));

dom25965.appendChild(dommy.template.__GT_node_like(demo.rm_hull_8723389.core.player_div(new cljs.core.Keyword(null,"opponent","opponent",-373061632),new cljs.core.Keyword(null,"rightpanel","rightpanel",-1719366901),"Your opponent is waiting...",opponent_svg)));

dom25965.appendChild((function (){var dom25971 = document.createElementNS("http://www.w3.org/1999/xhtml","div");
dom25971.setAttribute("style",(dommy.core.style_str.cljs$core$IFn$_invoke$arity$1 ? dommy.core.style_str.cljs$core$IFn$_invoke$arity$1("clear:both;") : dommy.core.style_str.call(null,"clear:both;")));


return dom25971;
})());

return dom25965;
})(),document.getElementById("canvas-area"));
});
demo.rm_hull_8723389.core.start_game = (function demo$rm_hull_8723389$core$start_game(seed){
var results_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var notify_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var notify_mult = cljs.core.async.mult(notify_chan);
var notifos = (function (){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2(notify_mult,c);

return c;
});
var c__21911__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21912__auto__ = (function (){var switch__21764__auto__ = (function (state_26063){
var state_val_26064 = (state_26063[(1)]);
if((state_val_26064 === (1))){
var inst_25978 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(demo.rm_hull_8723389.core.url_root)+"rps.svg");
var inst_25979 = (enchilada.proxy_request.cljs$core$IFn$_invoke$arity$1 ? enchilada.proxy_request.cljs$core$IFn$_invoke$arity$1(inst_25978) : enchilada.proxy_request.call(null,inst_25978));
var inst_25980 = dataview.loader.fetch_text(inst_25979);
var state_26063__$1 = state_26063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26063__$1,(2),inst_25980);
} else {
if((state_val_26064 === (2))){
var inst_25982 = (state_26063[(2)]);
var inst_25983 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(demo.rm_hull_8723389.core.url_root)+"vc.svg");
var inst_25984 = (enchilada.proxy_request.cljs$core$IFn$_invoke$arity$1 ? enchilada.proxy_request.cljs$core$IFn$_invoke$arity$1(inst_25983) : enchilada.proxy_request.call(null,inst_25983));
var inst_25985 = dataview.loader.fetch_text(inst_25984);
var state_26063__$1 = (function (){var statearr_26065 = state_26063;
(statearr_26065[(7)] = inst_25982);

return statearr_26065;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26063__$1,(3),inst_25985);
} else {
if((state_val_26064 === (3))){
var inst_25982 = (state_26063[(7)]);
var inst_25992 = (state_26063[(2)]);
var inst_25993 = demo.rm_hull_8723389.core.init_play_area(inst_25982,inst_25992);
var inst_25994 = big_bang.core.big_bang.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),demo.rm_hull_8723389.referee.initial_state,new cljs.core.Keyword(null,"to-draw","to-draw",-1467115105),demo.rm_hull_8723389.referee.render,new cljs.core.Keyword(null,"on-receive","on-receive",-706822243),demo.rm_hull_8723389.referee.incoming,new cljs.core.Keyword(null,"receive-channel","receive-channel",1240287920),results_chan,new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124),notify_chan], 0));
var inst_26041 = demo.rm_hull_8723389.opponent.initial_state(seed);
var inst_26042 = notifos();
var inst_26043 = big_bang.core.big_bang.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),inst_26041,new cljs.core.Keyword(null,"to-draw","to-draw",-1467115105),demo.rm_hull_8723389.opponent.render,new cljs.core.Keyword(null,"on-receive","on-receive",-706822243),demo.rm_hull_8723389.opponent.incoming,new cljs.core.Keyword(null,"receive-channel","receive-channel",1240287920),inst_26042,new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124),results_chan], 0));
var inst_26058 = document.querySelectorAll("g.clickable");
var inst_26059 = dommy.utils.__GT_Array(inst_26058);
var inst_26060 = notifos();
var inst_26061 = big_bang.core.big_bang.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),demo.rm_hull_8723389.human.initial_state,new cljs.core.Keyword(null,"to-draw","to-draw",-1467115105),demo.rm_hull_8723389.human.render,new cljs.core.Keyword(null,"on-click","on-click",1632826543),demo.rm_hull_8723389.human.update,new cljs.core.Keyword(null,"event-target","event-target",1020690123),inst_26059,new cljs.core.Keyword(null,"on-receive","on-receive",-706822243),demo.rm_hull_8723389.human.incoming,new cljs.core.Keyword(null,"receive-channel","receive-channel",1240287920),inst_26060,new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124),results_chan], 0));
var state_26063__$1 = (function (){var statearr_26066 = state_26063;
(statearr_26066[(8)] = inst_25993);

(statearr_26066[(9)] = inst_25994);

(statearr_26066[(10)] = inst_26043);

return statearr_26066;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26063__$1,inst_26061);
} else {
return null;
}
}
}
});
return (function() {
var demo$rm_hull_8723389$core$start_game_$_state_machine__21765__auto__ = null;
var demo$rm_hull_8723389$core$start_game_$_state_machine__21765__auto____0 = (function (){
var statearr_26067 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26067[(0)] = demo$rm_hull_8723389$core$start_game_$_state_machine__21765__auto__);

(statearr_26067[(1)] = (1));

return statearr_26067;
});
var demo$rm_hull_8723389$core$start_game_$_state_machine__21765__auto____1 = (function (state_26063){
while(true){
var ret_value__21766__auto__ = (function (){try{while(true){
var result__21767__auto__ = switch__21764__auto__(state_26063);
if(cljs.core.keyword_identical_QMARK_(result__21767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21767__auto__;
}
break;
}
}catch (e26068){var ex__21768__auto__ = e26068;
var statearr_26069_26110 = state_26063;
(statearr_26069_26110[(2)] = ex__21768__auto__);


if(cljs.core.seq((state_26063[(4)]))){
var statearr_26070_26111 = state_26063;
(statearr_26070_26111[(1)] = cljs.core.first((state_26063[(4)])));

} else {
throw ex__21768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26112 = state_26063;
state_26063 = G__26112;
continue;
} else {
return ret_value__21766__auto__;
}
break;
}
});
demo$rm_hull_8723389$core$start_game_$_state_machine__21765__auto__ = function(state_26063){
switch(arguments.length){
case 0:
return demo$rm_hull_8723389$core$start_game_$_state_machine__21765__auto____0.call(this);
case 1:
return demo$rm_hull_8723389$core$start_game_$_state_machine__21765__auto____1.call(this,state_26063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$rm_hull_8723389$core$start_game_$_state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$0 = demo$rm_hull_8723389$core$start_game_$_state_machine__21765__auto____0;
demo$rm_hull_8723389$core$start_game_$_state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$1 = demo$rm_hull_8723389$core$start_game_$_state_machine__21765__auto____1;
return demo$rm_hull_8723389$core$start_game_$_state_machine__21765__auto__;
})()
})();
var state__21913__auto__ = (function (){var statearr_26071 = f__21912__auto__();
(statearr_26071[(6)] = c__21911__auto__);

return statearr_26071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21913__auto__);
}));

return c__21911__auto__;
});
demo.rm_hull_8723389.core.start_game(cljs.core.rand.cljs$core$IFn$_invoke$arity$0());

//# sourceMappingURL=demo.rm_hull_8723389.core.js.map
