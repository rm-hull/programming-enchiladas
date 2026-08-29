goog.provide('demo.rm_hull_8723389.core');
demo.rm_hull_8723389.core.url_root = "https://raw.github.com/rm-hull/big-bang/master/examples/rock-paper-scissors/";
demo.rm_hull_8723389.core.style = (function demo$rm_hull_8723389$core$style(var_args){
var args__5903__auto__ = [];
var len__5897__auto___25943 = arguments.length;
var i__5898__auto___25944 = (0);
while(true){
if((i__5898__auto___25944 < len__5897__auto___25943)){
args__5903__auto__.push((arguments[i__5898__auto___25944]));

var G__25945 = (i__5898__auto___25944 + (1));
i__5898__auto___25944 = G__25945;
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
(demo.rm_hull_8723389.core.style.cljs$lang$applyTo = (function (seq25820){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25820));
}));

demo.rm_hull_8723389.core.player_div = (function demo$rm_hull_8723389$core$player_div(id,css_class,title_text,svg){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name(css_class)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name(id)], null),title_text], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graphic","div.graphic",431076760),dommy.template.html__GT_nodes(svg)], null)], null);
});
demo.rm_hull_8723389.core.init_play_area = (function demo$rm_hull_8723389$core$init_play_area(human_svg,opponent_svg){
return dommy.core.insert_after_BANG_((function (){var dom25830 = document.createElementNS("http://www.w3.org/1999/xhtml","div");
dom25830.setAttribute("id","app");

dom25830.appendChild(dommy.template.__GT_node_like(demo.rm_hull_8723389.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#app { font-family: monospace; }","div.pull-right { float: right; width: 150px; padding: 7px; }","div.leftpanel { float:left; margin: 20px; }","div.rightpanel { margin: 20px; }","#discourse-area { width: 850px; border: 1px grey solid; }","#discourse-area h2 { padding: 15px; }"], 0))));

dom25830.appendChild((function (){var dom25836 = document.createElementNS("http://www.w3.org/1999/xhtml","div");
dom25836.setAttribute("id","discourse-area");

dom25836.appendChild((function (){var dom25841 = document.createElementNS("http://www.w3.org/1999/xhtml","div");
(dom25841.className = "pull-right");

dom25841.appendChild((function (){var dom25845 = document.createElementNS("http://www.w3.org/1999/xhtml","p");
dom25845.setAttribute("id","winner");

return dom25845;
})());

dom25841.appendChild((function (){var dom25848 = document.createElementNS("http://www.w3.org/1999/xhtml","p");
dom25848.setAttribute("id","score");

return dom25848;
})());

return dom25841;
})());

dom25836.appendChild((function (){var dom25851 = document.createElementNS("http://www.w3.org/1999/xhtml","h2");
dom25851.appendChild(document.createTextNode("Let's play a game - select your weapon"));

return dom25851;
})());

return dom25836;
})());

dom25830.appendChild(dommy.template.__GT_node_like(demo.rm_hull_8723389.core.player_div(new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"leftpanel","leftpanel",-483639501),"Choose:",human_svg)));

dom25830.appendChild(dommy.template.__GT_node_like(demo.rm_hull_8723389.core.player_div(new cljs.core.Keyword(null,"opponent","opponent",-373061632),new cljs.core.Keyword(null,"rightpanel","rightpanel",-1719366901),"Your opponent is waiting...",opponent_svg)));

dom25830.appendChild((function (){var dom25869 = document.createElementNS("http://www.w3.org/1999/xhtml","div");
dom25869.setAttribute("style",(dommy.core.style_str.cljs$core$IFn$_invoke$arity$1 ? dommy.core.style_str.cljs$core$IFn$_invoke$arity$1("clear:both;") : dommy.core.style_str.call(null,"clear:both;")));


return dom25869;
})());

return dom25830;
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
var c__22090__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22091__auto__ = (function (){var switch__21764__auto__ = (function (state_25903){
var state_val_25904 = (state_25903[(1)]);
if((state_val_25904 === (1))){
var inst_25879 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(demo.rm_hull_8723389.core.url_root)+"rps.svg");
var inst_25880 = (enchilada.proxy_request.cljs$core$IFn$_invoke$arity$1 ? enchilada.proxy_request.cljs$core$IFn$_invoke$arity$1(inst_25879) : enchilada.proxy_request.call(null,inst_25879));
var inst_25881 = dataview.loader.fetch_text(inst_25880);
var state_25903__$1 = state_25903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25903__$1,(2),inst_25881);
} else {
if((state_val_25904 === (2))){
var inst_25883 = (state_25903[(2)]);
var inst_25885 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(demo.rm_hull_8723389.core.url_root)+"vc.svg");
var inst_25886 = (enchilada.proxy_request.cljs$core$IFn$_invoke$arity$1 ? enchilada.proxy_request.cljs$core$IFn$_invoke$arity$1(inst_25885) : enchilada.proxy_request.call(null,inst_25885));
var inst_25887 = dataview.loader.fetch_text(inst_25886);
var state_25903__$1 = (function (){var statearr_25909 = state_25903;
(statearr_25909[(7)] = inst_25883);

return statearr_25909;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25903__$1,(3),inst_25887);
} else {
if((state_val_25904 === (3))){
var inst_25883 = (state_25903[(7)]);
var inst_25889 = (state_25903[(2)]);
var inst_25890 = demo.rm_hull_8723389.core.init_play_area(inst_25883,inst_25889);
var inst_25891 = big_bang.core.big_bang.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),demo.rm_hull_8723389.referee.initial_state,new cljs.core.Keyword(null,"to-draw","to-draw",-1467115105),demo.rm_hull_8723389.referee.render,new cljs.core.Keyword(null,"on-receive","on-receive",-706822243),demo.rm_hull_8723389.referee.incoming,new cljs.core.Keyword(null,"receive-channel","receive-channel",1240287920),results_chan,new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124),notify_chan], 0));
var inst_25895 = demo.rm_hull_8723389.opponent.initial_state(seed);
var inst_25896 = notifos();
var inst_25897 = big_bang.core.big_bang.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),inst_25895,new cljs.core.Keyword(null,"to-draw","to-draw",-1467115105),demo.rm_hull_8723389.opponent.render,new cljs.core.Keyword(null,"on-receive","on-receive",-706822243),demo.rm_hull_8723389.opponent.incoming,new cljs.core.Keyword(null,"receive-channel","receive-channel",1240287920),inst_25896,new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124),results_chan], 0));
var inst_25898 = document.querySelectorAll("g.clickable");
var inst_25899 = dommy.utils.__GT_Array(inst_25898);
var inst_25900 = notifos();
var inst_25901 = big_bang.core.big_bang.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),demo.rm_hull_8723389.human.initial_state,new cljs.core.Keyword(null,"to-draw","to-draw",-1467115105),demo.rm_hull_8723389.human.render,new cljs.core.Keyword(null,"on-click","on-click",1632826543),demo.rm_hull_8723389.human.update,new cljs.core.Keyword(null,"event-target","event-target",1020690123),inst_25899,new cljs.core.Keyword(null,"on-receive","on-receive",-706822243),demo.rm_hull_8723389.human.incoming,new cljs.core.Keyword(null,"receive-channel","receive-channel",1240287920),inst_25900,new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124),results_chan], 0));
var state_25903__$1 = (function (){var statearr_25920 = state_25903;
(statearr_25920[(8)] = inst_25890);

(statearr_25920[(9)] = inst_25891);

(statearr_25920[(10)] = inst_25897);

return statearr_25920;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25903__$1,inst_25901);
} else {
return null;
}
}
}
});
return (function() {
var demo$rm_hull_8723389$core$start_game_$_state_machine__21765__auto__ = null;
var demo$rm_hull_8723389$core$start_game_$_state_machine__21765__auto____0 = (function (){
var statearr_25921 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25921[(0)] = demo$rm_hull_8723389$core$start_game_$_state_machine__21765__auto__);

(statearr_25921[(1)] = (1));

return statearr_25921;
});
var demo$rm_hull_8723389$core$start_game_$_state_machine__21765__auto____1 = (function (state_25903){
while(true){
var ret_value__21766__auto__ = (function (){try{while(true){
var result__21767__auto__ = switch__21764__auto__(state_25903);
if(cljs.core.keyword_identical_QMARK_(result__21767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21767__auto__;
}
break;
}
}catch (e25922){var ex__21768__auto__ = e25922;
var statearr_25923_25957 = state_25903;
(statearr_25923_25957[(2)] = ex__21768__auto__);


if(cljs.core.seq((state_25903[(4)]))){
var statearr_25926_25958 = state_25903;
(statearr_25926_25958[(1)] = cljs.core.first((state_25903[(4)])));

} else {
throw ex__21768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25959 = state_25903;
state_25903 = G__25959;
continue;
} else {
return ret_value__21766__auto__;
}
break;
}
});
demo$rm_hull_8723389$core$start_game_$_state_machine__21765__auto__ = function(state_25903){
switch(arguments.length){
case 0:
return demo$rm_hull_8723389$core$start_game_$_state_machine__21765__auto____0.call(this);
case 1:
return demo$rm_hull_8723389$core$start_game_$_state_machine__21765__auto____1.call(this,state_25903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$rm_hull_8723389$core$start_game_$_state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$0 = demo$rm_hull_8723389$core$start_game_$_state_machine__21765__auto____0;
demo$rm_hull_8723389$core$start_game_$_state_machine__21765__auto__.cljs$core$IFn$_invoke$arity$1 = demo$rm_hull_8723389$core$start_game_$_state_machine__21765__auto____1;
return demo$rm_hull_8723389$core$start_game_$_state_machine__21765__auto__;
})()
})();
var state__22092__auto__ = (function (){var statearr_25929 = f__22091__auto__();
(statearr_25929[(6)] = c__22090__auto__);

return statearr_25929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22092__auto__);
}));

return c__22090__auto__;
});
demo.rm_hull_8723389.core.start_game(cljs.core.rand.cljs$core$IFn$_invoke$arity$0());

//# sourceMappingURL=demo.rm_hull_8723389.core.js.map
