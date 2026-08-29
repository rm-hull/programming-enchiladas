goog.provide('demo.rm_hull_8906851.core');
demo.rm_hull_8906851.core.pieces = cljs.core.PersistentHashMap.fromArrays(["BK","WQ","BP","BG","WG","WK","WP","BQ","BR","WB","BB","WR"],["\u265E","\u2655","\u265F","\u265A","\u2654","\u2658","\u2659","\u265B","\u265C","\u2657","\u265D","\u2656"]);
demo.rm_hull_8906851.core.starting_board = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["BR","BK","BB","BQ","BG","BB","BK","BR"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["BP","BP","BP","BP","BP","BP","BP","BP"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","","","","","",""], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","","","","","",""], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","","","","","",""], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","","","","","",""], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WP","WP","WP","WP","WP","WP","WP","WP"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WR","WK","WB","WQ","WG","WB","WK","WR"], null)], null);
demo.rm_hull_8906851.core.col_map = new cljs.core.PersistentArrayMap(null, 8, ["a",(0),"b",(1),"c",(2),"d",(3),"e",(4),"f",(5),"g",(6),"h",(7)], null);
demo.rm_hull_8906851.core.coords_from = (function demo$rm_hull_8906851$core$coords_from(square){
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(demo.rm_hull_8906851.core.col_map,cljs.core.first(square));
var parsed_row = parseInt(cljs.core.last(square));
var row = ((8) - parsed_row);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,column], null);
});
demo.rm_hull_8906851.core.move = (function demo$rm_hull_8906851$core$move(board,from_square,to_square){

var from_coords = demo.rm_hull_8906851.core.coords_from(from_square);
var to_coords = demo.rm_hull_8906851.core.coords_from(to_square);
var from_piece = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,from_coords);
return cljs.core.assoc_in(cljs.core.assoc_in(board,to_coords,from_piece),from_coords,"");
});
demo.rm_hull_8906851.core.style = (function demo$rm_hull_8906851$core$style(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34637 = arguments.length;
var i__5898__auto___34638 = (0);
while(true){
if((i__5898__auto___34638 < len__5897__auto___34637)){
args__5903__auto__.push((arguments[i__5898__auto___34638]));

var G__34639 = (i__5898__auto___34638 + (1));
i__5898__auto___34638 = G__34639;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return demo.rm_hull_8906851.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(demo.rm_hull_8906851.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
return React.DOM.style(null,clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",styles));
}));

(demo.rm_hull_8906851.core.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(demo.rm_hull_8906851.core.style.cljs$lang$applyTo = (function (seq34348){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34348));
}));

demo.rm_hull_8906851.core.draw_square = (function demo$rm_hull_8906851$core$draw_square(square){
return React.DOM.td(null,square);
});
demo.rm_hull_8906851.core.draw_row = (function demo$rm_hull_8906851$core$draw_row(row){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.tr,null,cljs.core.map.cljs$core$IFn$_invoke$arity$2(demo.rm_hull_8906851.core.draw_square,row));
});
demo.rm_hull_8906851.core.unicode_pieces = (function demo$rm_hull_8906851$core$unicode_pieces(board){
var iter__5649__auto__ = (function demo$rm_hull_8906851$core$unicode_pieces_$_iter__34357(s__34358){
return (new cljs.core.LazySeq(null,(function (){
var s__34358__$1 = s__34358;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__34358__$1);
if(temp__5825__auto__){
var s__34358__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34358__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__34358__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__34360 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__34359 = (0);
while(true){
if((i__34359 < size__5648__auto__)){
var row = cljs.core._nth(c__5647__auto__,i__34359);
cljs.core.chunk_append(b__34360,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__34359,row,c__5647__auto__,size__5648__auto__,b__34360,s__34358__$2,temp__5825__auto__){
return (function (p1__34356_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(demo.rm_hull_8906851.core.pieces,p1__34356_SHARP_,"");
});})(i__34359,row,c__5647__auto__,size__5648__auto__,b__34360,s__34358__$2,temp__5825__auto__))
,row));

var G__34640 = (i__34359 + (1));
i__34359 = G__34640;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34360),demo$rm_hull_8906851$core$unicode_pieces_$_iter__34357(cljs.core.chunk_rest(s__34358__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34360),null);
}
} else {
var row = cljs.core.first(s__34358__$2);
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (row,s__34358__$2,temp__5825__auto__){
return (function (p1__34356_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(demo.rm_hull_8906851.core.pieces,p1__34356_SHARP_,"");
});})(row,s__34358__$2,temp__5825__auto__))
,row),demo$rm_hull_8906851$core$unicode_pieces_$_iter__34357(cljs.core.rest(s__34358__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(board);
});

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
demo.rm_hull_8906851.core.t_demo$rm_hull_8906851$core34367 = (function (board,owner,meta34368){
this.board = board;
this.owner = owner;
this.meta34368 = meta34368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(demo.rm_hull_8906851.core.t_demo$rm_hull_8906851$core34367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34369,meta34368__$1){
var self__ = this;
var _34369__$1 = this;
return (new demo.rm_hull_8906851.core.t_demo$rm_hull_8906851$core34367(self__.board,self__.owner,meta34368__$1));
}));

(demo.rm_hull_8906851.core.t_demo$rm_hull_8906851$core34367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34369){
var self__ = this;
var _34369__$1 = this;
return self__.meta34368;
}));

(demo.rm_hull_8906851.core.t_demo$rm_hull_8906851$core34367.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL);

(demo.rm_hull_8906851.core.t_demo$rm_hull_8906851$core34367.prototype.om$core$IRender$render$arity$1 = (function (this__32626__auto__){
var self__ = this;
var this__32626__auto____$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(om.dom.table,({"className": "chess_board"}),demo.rm_hull_8906851.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([".chess_board tr:nth-child(even) td:nth-child(odd),\n         .chess_board tr:nth-child(odd) td:nth-child(even) { \n            background: white; \n            box-shadow: inset 0 0 10px rgba(0,0,0,.4);\n            -moz-box-shadow: inset 0 0 10px rgba(0,0,0,.4);\n            -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,.4);\n          }\n          .chess_board td { \n            background: red;\n            width: 60px; height: 60px; \n            font-size: 40px; \n            color: black; \n            text-align: center;\n          }"], 0)),(function (){var unicoded_board = demo.rm_hull_8906851.core.unicode_pieces(self__.board);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(demo.rm_hull_8906851.core.draw_row,unicoded_board);
})());
}));

(demo.rm_hull_8906851.core.t_demo$rm_hull_8906851$core34367.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta34368","meta34368",849171502,null)], null);
}));

(demo.rm_hull_8906851.core.t_demo$rm_hull_8906851$core34367.cljs$lang$type = true);

(demo.rm_hull_8906851.core.t_demo$rm_hull_8906851$core34367.cljs$lang$ctorStr = "demo.rm-hull-8906851.core/t_demo$rm_hull_8906851$core34367");

(demo.rm_hull_8906851.core.t_demo$rm_hull_8906851$core34367.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"demo.rm-hull-8906851.core/t_demo$rm_hull_8906851$core34367");
}));

/**
 * Positional factory function for demo.rm-hull-8906851.core/t_demo$rm_hull_8906851$core34367.
 */
demo.rm_hull_8906851.core.__GT_t_demo$rm_hull_8906851$core34367 = (function demo$rm_hull_8906851$core$__GT_t_demo$rm_hull_8906851$core34367(board,owner,meta34368){
return (new demo.rm_hull_8906851.core.t_demo$rm_hull_8906851$core34367(board,owner,meta34368));
});


demo.rm_hull_8906851.core.board = (function demo$rm_hull_8906851$core$board(board,owner){
return (new demo.rm_hull_8906851.core.t_demo$rm_hull_8906851$core34367(board,owner,null));
});
demo.rm_hull_8906851.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"board","board",-1907017633),demo.rm_hull_8906851.core.starting_board], null));
demo.rm_hull_8906851.core.app_history = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(demo.rm_hull_8906851.core.app_state)], null));
demo.rm_hull_8906851.core.start_chess_BANG_ = (function demo$rm_hull_8906851$core$start_chess_BANG_(){
return om.core.root.cljs$core$IFn$_invoke$arity$3(demo.rm_hull_8906851.core.app_state,(function (app,owner){
return om.core.build.cljs$core$IFn$_invoke$arity$2(demo.rm_hull_8906851.core.board,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(app));
}),document.getElementById("app"));
});
demo.rm_hull_8906851.core.reset_and_start_chess_BANG_ = (function demo$rm_hull_8906851$core$reset_and_start_chess_BANG_(){
cljs.core.reset_BANG_(demo.rm_hull_8906851.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"board","board",-1907017633),demo.rm_hull_8906851.core.starting_board], null));

cljs.core.reset_BANG_(demo.rm_hull_8906851.core.app_history,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(demo.rm_hull_8906851.core.app_state)], null));

return demo.rm_hull_8906851.core.start_chess_BANG_();
});
demo.rm_hull_8906851.core.move_BANG_ = (function demo$rm_hull_8906851$core$move_BANG_(from_square,to_square){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(demo.rm_hull_8906851.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null),demo.rm_hull_8906851.core.move,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from_square,to_square], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(demo.rm_hull_8906851.core.app_history,cljs.core.conj,cljs.core.deref(demo.rm_hull_8906851.core.app_state));
});
demo.rm_hull_8906851.core.the_world = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
demo.rm_hull_8906851.core.server_says = (function demo$rm_hull_8906851$core$server_says(move_string){
var from_square = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(move_string,(0),(2));
var to_square = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(move_string,(2));
return demo.rm_hull_8906851.core.move_BANG_(from_square,to_square);
});
demo.rm_hull_8906851.core.assimilate_novelty = (function demo$rm_hull_8906851$core$assimilate_novelty(world_channel){
var c__27470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_34389){
var state_val_34390 = (state_34389[(1)]);
if((state_val_34390 === (7))){
var inst_34376 = (state_34389[(7)]);
var inst_34376__$1 = (state_34389[(2)]);
var state_34389__$1 = (function (){var statearr_34391 = state_34389;
(statearr_34391[(7)] = inst_34376__$1);

return statearr_34391;
})();
if(cljs.core.truth_(inst_34376__$1)){
var statearr_34392_34645 = state_34389__$1;
(statearr_34392_34645[(1)] = (8));

} else {
var statearr_34393_34646 = state_34389__$1;
(statearr_34393_34646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (1))){
var state_34389__$1 = state_34389;
var statearr_34394_34647 = state_34389__$1;
(statearr_34394_34647[(2)] = null);

(statearr_34394_34647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (4))){
var state_34389__$1 = state_34389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34389__$1,(7),world_channel);
} else {
if((state_val_34390 === (6))){
var inst_34385 = (state_34389[(2)]);
var state_34389__$1 = state_34389;
var statearr_34395_34648 = state_34389__$1;
(statearr_34395_34648[(2)] = inst_34385);

(statearr_34395_34648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (3))){
var inst_34387 = (state_34389[(2)]);
var state_34389__$1 = state_34389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34389__$1,inst_34387);
} else {
if((state_val_34390 === (2))){
var state_34389__$1 = state_34389;
var statearr_34405_34649 = state_34389__$1;
(statearr_34405_34649[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (9))){
var state_34389__$1 = state_34389;
var statearr_34407_34650 = state_34389__$1;
(statearr_34407_34650[(2)] = null);

(statearr_34407_34650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (5))){
var state_34389__$1 = state_34389;
var statearr_34408_34651 = state_34389__$1;
(statearr_34408_34651[(2)] = null);

(statearr_34408_34651[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (10))){
var inst_34381 = (state_34389[(2)]);
var state_34389__$1 = (function (){var statearr_34409 = state_34389;
(statearr_34409[(8)] = inst_34381);

return statearr_34409;
})();
var statearr_34410_34652 = state_34389__$1;
(statearr_34410_34652[(2)] = null);

(statearr_34410_34652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (8))){
var inst_34376 = (state_34389[(7)]);
var inst_34378 = demo.rm_hull_8906851.core.server_says(inst_34376);
var state_34389__$1 = state_34389;
var statearr_34411_34653 = state_34389__$1;
(statearr_34411_34653[(2)] = inst_34378);

(statearr_34411_34653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var demo$rm_hull_8906851$core$assimilate_novelty_$_state_machine__27042__auto__ = null;
var demo$rm_hull_8906851$core$assimilate_novelty_$_state_machine__27042__auto____0 = (function (){
var statearr_34412 = [null,null,null,null,null,null,null,null,null];
(statearr_34412[(0)] = demo$rm_hull_8906851$core$assimilate_novelty_$_state_machine__27042__auto__);

(statearr_34412[(1)] = (1));

return statearr_34412;
});
var demo$rm_hull_8906851$core$assimilate_novelty_$_state_machine__27042__auto____1 = (function (state_34389){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_34389);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e34416){var ex__27046__auto__ = e34416;
var statearr_34417_34654 = state_34389;
(statearr_34417_34654[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_34389[(4)]))){
var statearr_34418_34655 = state_34389;
(statearr_34418_34655[(1)] = cljs.core.first((state_34389[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34656 = state_34389;
state_34389 = G__34656;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
demo$rm_hull_8906851$core$assimilate_novelty_$_state_machine__27042__auto__ = function(state_34389){
switch(arguments.length){
case 0:
return demo$rm_hull_8906851$core$assimilate_novelty_$_state_machine__27042__auto____0.call(this);
case 1:
return demo$rm_hull_8906851$core$assimilate_novelty_$_state_machine__27042__auto____1.call(this,state_34389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$rm_hull_8906851$core$assimilate_novelty_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = demo$rm_hull_8906851$core$assimilate_novelty_$_state_machine__27042__auto____0;
demo$rm_hull_8906851$core$assimilate_novelty_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = demo$rm_hull_8906851$core$assimilate_novelty_$_state_machine__27042__auto____1;
return demo$rm_hull_8906851$core$assimilate_novelty_$_state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_34419 = f__27471__auto__();
(statearr_34419[(6)] = c__27470__auto__);

return statearr_34419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));

return c__27470__auto__;
});
demo.rm_hull_8906851.core.replay_game = (function demo$rm_hull_8906851$core$replay_game(world_channel,moves){
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34423_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(world_channel,p1__34423_SHARP_);
}),moves));
});
demo.rm_hull_8906851.core.show_move_BANG_ = (function demo$rm_hull_8906851$core$show_move_BANG_(move_number){
return cljs.core.reset_BANG_(demo.rm_hull_8906851.core.app_state,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(demo.rm_hull_8906851.core.app_history),move_number));
});
demo.rm_hull_8906851.core.slideshow = (function demo$rm_hull_8906851$core$slideshow(start,finish){
var c__27470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_34483){
var state_val_34484 = (state_34483[(1)]);
if((state_val_34484 === (7))){
var inst_34440 = (state_34483[(7)]);
var inst_34437 = (state_34483[(8)]);
var inst_34438 = (state_34483[(9)]);
var inst_34439 = (state_34483[(10)]);
var inst_34453 = (state_34483[(2)]);
var inst_34454 = (inst_34440 + (1));
var tmp34485 = inst_34439;
var tmp34486 = inst_34438;
var tmp34487 = inst_34437;
var inst_34437__$1 = tmp34487;
var inst_34438__$1 = tmp34486;
var inst_34439__$1 = tmp34485;
var inst_34440__$1 = inst_34454;
var state_34483__$1 = (function (){var statearr_34489 = state_34483;
(statearr_34489[(11)] = inst_34453);

(statearr_34489[(8)] = inst_34437__$1);

(statearr_34489[(9)] = inst_34438__$1);

(statearr_34489[(10)] = inst_34439__$1);

(statearr_34489[(7)] = inst_34440__$1);

return statearr_34489;
})();
var statearr_34491_34660 = state_34483__$1;
(statearr_34491_34660[(2)] = null);

(statearr_34491_34660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34484 === (1))){
var inst_34435 = cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,finish);
var inst_34436 = cljs.core.seq(inst_34435);
var inst_34437 = inst_34436;
var inst_34438 = null;
var inst_34439 = (0);
var inst_34440 = (0);
var state_34483__$1 = (function (){var statearr_34492 = state_34483;
(statearr_34492[(8)] = inst_34437);

(statearr_34492[(9)] = inst_34438);

(statearr_34492[(10)] = inst_34439);

(statearr_34492[(7)] = inst_34440);

return statearr_34492;
})();
var statearr_34493_34661 = state_34483__$1;
(statearr_34493_34661[(2)] = null);

(statearr_34493_34661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34484 === (4))){
var inst_34438 = (state_34483[(9)]);
var inst_34440 = (state_34483[(7)]);
var inst_34449 = cljs.core._nth(inst_34438,inst_34440);
var inst_34450 = demo.rm_hull_8906851.core.show_move_BANG_(inst_34449);
var inst_34451 = cljs.core.async.timeout((150));
var state_34483__$1 = (function (){var statearr_34494 = state_34483;
(statearr_34494[(12)] = inst_34450);

return statearr_34494;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34483__$1,(7),inst_34451);
} else {
if((state_val_34484 === (13))){
var inst_34474 = (state_34483[(2)]);
var state_34483__$1 = state_34483;
var statearr_34495_34663 = state_34483__$1;
(statearr_34495_34663[(2)] = inst_34474);

(statearr_34495_34663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34484 === (6))){
var inst_34479 = (state_34483[(2)]);
var state_34483__$1 = state_34483;
var statearr_34500_34664 = state_34483__$1;
(statearr_34500_34664[(2)] = inst_34479);

(statearr_34500_34664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34484 === (3))){
var inst_34481 = (state_34483[(2)]);
var state_34483__$1 = state_34483;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34483__$1,inst_34481);
} else {
if((state_val_34484 === (12))){
var inst_34457 = (state_34483[(13)]);
var inst_34466 = cljs.core.first(inst_34457);
var inst_34467 = demo.rm_hull_8906851.core.show_move_BANG_(inst_34466);
var inst_34468 = cljs.core.async.timeout((150));
var state_34483__$1 = (function (){var statearr_34507 = state_34483;
(statearr_34507[(14)] = inst_34467);

return statearr_34507;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34483__$1,(14),inst_34468);
} else {
if((state_val_34484 === (2))){
var inst_34440 = (state_34483[(7)]);
var inst_34439 = (state_34483[(10)]);
var inst_34446 = (inst_34440 < inst_34439);
var inst_34447 = inst_34446;
var state_34483__$1 = state_34483;
if(cljs.core.truth_(inst_34447)){
var statearr_34511_34668 = state_34483__$1;
(statearr_34511_34668[(1)] = (4));

} else {
var statearr_34512_34669 = state_34483__$1;
(statearr_34512_34669[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34484 === (11))){
var inst_34457 = (state_34483[(13)]);
var inst_34461 = cljs.core.chunk_first(inst_34457);
var inst_34462 = cljs.core.chunk_rest(inst_34457);
var inst_34463 = cljs.core.count(inst_34461);
var inst_34437 = inst_34462;
var inst_34438 = inst_34461;
var inst_34439 = inst_34463;
var inst_34440 = (0);
var state_34483__$1 = (function (){var statearr_34513 = state_34483;
(statearr_34513[(8)] = inst_34437);

(statearr_34513[(9)] = inst_34438);

(statearr_34513[(10)] = inst_34439);

(statearr_34513[(7)] = inst_34440);

return statearr_34513;
})();
var statearr_34514_34670 = state_34483__$1;
(statearr_34514_34670[(2)] = null);

(statearr_34514_34670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34484 === (9))){
var state_34483__$1 = state_34483;
var statearr_34515_34671 = state_34483__$1;
(statearr_34515_34671[(2)] = null);

(statearr_34515_34671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34484 === (5))){
var inst_34437 = (state_34483[(8)]);
var inst_34457 = (state_34483[(13)]);
var inst_34457__$1 = cljs.core.seq(inst_34437);
var state_34483__$1 = (function (){var statearr_34522 = state_34483;
(statearr_34522[(13)] = inst_34457__$1);

return statearr_34522;
})();
if(inst_34457__$1){
var statearr_34523_34673 = state_34483__$1;
(statearr_34523_34673[(1)] = (8));

} else {
var statearr_34524_34674 = state_34483__$1;
(statearr_34524_34674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34484 === (14))){
var inst_34457 = (state_34483[(13)]);
var inst_34470 = (state_34483[(2)]);
var inst_34471 = cljs.core.next(inst_34457);
var inst_34437 = inst_34471;
var inst_34438 = null;
var inst_34439 = (0);
var inst_34440 = (0);
var state_34483__$1 = (function (){var statearr_34528 = state_34483;
(statearr_34528[(15)] = inst_34470);

(statearr_34528[(8)] = inst_34437);

(statearr_34528[(9)] = inst_34438);

(statearr_34528[(10)] = inst_34439);

(statearr_34528[(7)] = inst_34440);

return statearr_34528;
})();
var statearr_34529_34675 = state_34483__$1;
(statearr_34529_34675[(2)] = null);

(statearr_34529_34675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34484 === (10))){
var inst_34477 = (state_34483[(2)]);
var state_34483__$1 = state_34483;
var statearr_34530_34676 = state_34483__$1;
(statearr_34530_34676[(2)] = inst_34477);

(statearr_34530_34676[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34484 === (8))){
var inst_34457 = (state_34483[(13)]);
var inst_34459 = cljs.core.chunked_seq_QMARK_(inst_34457);
var state_34483__$1 = state_34483;
if(inst_34459){
var statearr_34531_34677 = state_34483__$1;
(statearr_34531_34677[(1)] = (11));

} else {
var statearr_34532_34678 = state_34483__$1;
(statearr_34532_34678[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var demo$rm_hull_8906851$core$slideshow_$_state_machine__27042__auto__ = null;
var demo$rm_hull_8906851$core$slideshow_$_state_machine__27042__auto____0 = (function (){
var statearr_34539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34539[(0)] = demo$rm_hull_8906851$core$slideshow_$_state_machine__27042__auto__);

(statearr_34539[(1)] = (1));

return statearr_34539;
});
var demo$rm_hull_8906851$core$slideshow_$_state_machine__27042__auto____1 = (function (state_34483){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_34483);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e34540){var ex__27046__auto__ = e34540;
var statearr_34541_34681 = state_34483;
(statearr_34541_34681[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_34483[(4)]))){
var statearr_34542_34682 = state_34483;
(statearr_34542_34682[(1)] = cljs.core.first((state_34483[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34683 = state_34483;
state_34483 = G__34683;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
demo$rm_hull_8906851$core$slideshow_$_state_machine__27042__auto__ = function(state_34483){
switch(arguments.length){
case 0:
return demo$rm_hull_8906851$core$slideshow_$_state_machine__27042__auto____0.call(this);
case 1:
return demo$rm_hull_8906851$core$slideshow_$_state_machine__27042__auto____1.call(this,state_34483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$rm_hull_8906851$core$slideshow_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = demo$rm_hull_8906851$core$slideshow_$_state_machine__27042__auto____0;
demo$rm_hull_8906851$core$slideshow_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = demo$rm_hull_8906851$core$slideshow_$_state_machine__27042__auto____1;
return demo$rm_hull_8906851$core$slideshow_$_state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_34546 = f__27471__auto__();
(statearr_34546[(6)] = c__27470__auto__);

return statearr_34546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));

return c__27470__auto__;
});
demo.rm_hull_8906851.core.cycle_every_state = (function demo$rm_hull_8906851$core$cycle_every_state(){
var seq__34549 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(cljs.core.deref(demo.rm_hull_8906851.core.app_history))));
var chunk__34550 = null;
var count__34551 = (0);
var i__34552 = (0);
while(true){
if((i__34552 < count__34551)){
var step = chunk__34550.cljs$core$IIndexed$_nth$arity$2(null,i__34552);
demo.rm_hull_8906851.core.show_move_BANG_(step);


var G__34684 = seq__34549;
var G__34685 = chunk__34550;
var G__34686 = count__34551;
var G__34687 = (i__34552 + (1));
seq__34549 = G__34684;
chunk__34550 = G__34685;
count__34551 = G__34686;
i__34552 = G__34687;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__34549);
if(temp__5825__auto__){
var seq__34549__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34549__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__34549__$1);
var G__34688 = cljs.core.chunk_rest(seq__34549__$1);
var G__34689 = c__5694__auto__;
var G__34690 = cljs.core.count(c__5694__auto__);
var G__34691 = (0);
seq__34549 = G__34688;
chunk__34550 = G__34689;
count__34551 = G__34690;
i__34552 = G__34691;
continue;
} else {
var step = cljs.core.first(seq__34549__$1);
demo.rm_hull_8906851.core.show_move_BANG_(step);


var G__34692 = cljs.core.next(seq__34549__$1);
var G__34693 = null;
var G__34694 = (0);
var G__34695 = (0);
seq__34549 = G__34692;
chunk__34550 = G__34693;
count__34551 = G__34694;
i__34552 = G__34695;
continue;
}
} else {
return null;
}
}
break;
}
});
demo.rm_hull_8906851.core.assimilate_novelty(demo.rm_hull_8906851.core.the_world);
demo.rm_hull_8906851.core.kasparov_topalov = (function demo$rm_hull_8906851$core$kasparov_topalov(the_world){
var moves = cljs.core.PersistentVector.fromArray(["e2e4","d7d6","d2d4","g8f6","b1c3","g7g6","c1e3","f8g7","d1d2","c7c6","f2f3","b7b5","g1e2","b8d7","e3h6","g7h6","d2h6","c8b7","a2a3","e7e5","e1c1","d8e7","c1b1","a7a6","e2c1","e8c8","c1b3","e5d4","d1d4","c6c5","d4d1","d7b6","g2g3","c8b8","b3a5","b7a8","f1h3","d6d5","h6f4","b8a7","h1e1","d5d4","c3d5","b6d5","e4d5","e7d6","d1d4","c5d4","e1e7","a7b6","f4d4","b6a5","b2b4","a5a4","d4c3","d6d5","e7a7","a8b7","a7b7","d5c4","c3f6","a4a3","f6a6","a3b4","c2c3","b4c3","a6a1","c3d2","a1b2","d2d1","h3f1","d8d2","b7d7","d2d7","f1c4","b5c4","b2h8","d7d3","h8a8","c4c3","a8a4","d1e1","f3f4","f7f5","b1c1","d3d2","a4a7"], true);
return demo.rm_hull_8906851.core.replay_game(the_world,moves);
});
demo.rm_hull_8906851.core.run_demo = (function demo$rm_hull_8906851$core$run_demo(){
demo.rm_hull_8906851.core.reset_and_start_chess_BANG_();

demo.rm_hull_8906851.core.kasparov_topalov(demo.rm_hull_8906851.core.the_world);

var c__27470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_34577){
var state_val_34578 = (state_34577[(1)]);
if((state_val_34578 === (1))){
var inst_34573 = cljs.core.deref(demo.rm_hull_8906851.core.app_history);
var inst_34574 = cljs.core.count(inst_34573);
var inst_34575 = demo.rm_hull_8906851.core.slideshow((0),inst_34574);
var state_34577__$1 = state_34577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34577__$1,inst_34575);
} else {
return null;
}
});
return (function() {
var demo$rm_hull_8906851$core$run_demo_$_state_machine__27042__auto__ = null;
var demo$rm_hull_8906851$core$run_demo_$_state_machine__27042__auto____0 = (function (){
var statearr_34580 = [null,null,null,null,null,null,null];
(statearr_34580[(0)] = demo$rm_hull_8906851$core$run_demo_$_state_machine__27042__auto__);

(statearr_34580[(1)] = (1));

return statearr_34580;
});
var demo$rm_hull_8906851$core$run_demo_$_state_machine__27042__auto____1 = (function (state_34577){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_34577);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e34581){var ex__27046__auto__ = e34581;
var statearr_34582_34697 = state_34577;
(statearr_34582_34697[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_34577[(4)]))){
var statearr_34583_34698 = state_34577;
(statearr_34583_34698[(1)] = cljs.core.first((state_34577[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34699 = state_34577;
state_34577 = G__34699;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
demo$rm_hull_8906851$core$run_demo_$_state_machine__27042__auto__ = function(state_34577){
switch(arguments.length){
case 0:
return demo$rm_hull_8906851$core$run_demo_$_state_machine__27042__auto____0.call(this);
case 1:
return demo$rm_hull_8906851$core$run_demo_$_state_machine__27042__auto____1.call(this,state_34577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$rm_hull_8906851$core$run_demo_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = demo$rm_hull_8906851$core$run_demo_$_state_machine__27042__auto____0;
demo$rm_hull_8906851$core$run_demo_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = demo$rm_hull_8906851$core$run_demo_$_state_machine__27042__auto____1;
return demo$rm_hull_8906851$core$run_demo_$_state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_34585 = f__27471__auto__();
(statearr_34585[(6)] = c__27470__auto__);

return statearr_34585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));

return c__27470__auto__;
});
(window.onload = demo.rm_hull_8906851.core.run_demo);

//# sourceMappingURL=demo.rm_hull_8906851.core.js.map
