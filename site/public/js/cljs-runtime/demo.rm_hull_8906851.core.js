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
var len__5897__auto___25748 = arguments.length;
var i__5898__auto___25750 = (0);
while(true){
if((i__5898__auto___25750 < len__5897__auto___25748)){
args__5903__auto__.push((arguments[i__5898__auto___25750]));

var G__25751 = (i__5898__auto___25750 + (1));
i__5898__auto___25750 = G__25751;
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
(demo.rm_hull_8906851.core.style.cljs$lang$applyTo = (function (seq25695){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25695));
}));

demo.rm_hull_8906851.core.draw_square = (function demo$rm_hull_8906851$core$draw_square(square){
return React.DOM.td(null,square);
});
demo.rm_hull_8906851.core.draw_row = (function demo$rm_hull_8906851$core$draw_row(row){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.tr,null,cljs.core.map.cljs$core$IFn$_invoke$arity$2(demo.rm_hull_8906851.core.draw_square,row));
});
demo.rm_hull_8906851.core.unicode_pieces = (function demo$rm_hull_8906851$core$unicode_pieces(board){
var iter__5649__auto__ = (function demo$rm_hull_8906851$core$unicode_pieces_$_iter__25698(s__25699){
return (new cljs.core.LazySeq(null,(function (){
var s__25699__$1 = s__25699;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__25699__$1);
if(temp__5825__auto__){
var s__25699__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25699__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__25699__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__25701 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__25700 = (0);
while(true){
if((i__25700 < size__5648__auto__)){
var row = cljs.core._nth(c__5647__auto__,i__25700);
cljs.core.chunk_append(b__25701,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__25700,row,c__5647__auto__,size__5648__auto__,b__25701,s__25699__$2,temp__5825__auto__){
return (function (p1__25697_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(demo.rm_hull_8906851.core.pieces,p1__25697_SHARP_,"");
});})(i__25700,row,c__5647__auto__,size__5648__auto__,b__25701,s__25699__$2,temp__5825__auto__))
,row));

var G__25760 = (i__25700 + (1));
i__25700 = G__25760;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25701),demo$rm_hull_8906851$core$unicode_pieces_$_iter__25698(cljs.core.chunk_rest(s__25699__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25701),null);
}
} else {
var row = cljs.core.first(s__25699__$2);
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (row,s__25699__$2,temp__5825__auto__){
return (function (p1__25697_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(demo.rm_hull_8906851.core.pieces,p1__25697_SHARP_,"");
});})(row,s__25699__$2,temp__5825__auto__))
,row),demo$rm_hull_8906851$core$unicode_pieces_$_iter__25698(cljs.core.rest(s__25699__$2)));
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
demo.rm_hull_8906851.core.t_demo$rm_hull_8906851$core25702 = (function (board,owner,meta25703){
this.board = board;
this.owner = owner;
this.meta25703 = meta25703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(demo.rm_hull_8906851.core.t_demo$rm_hull_8906851$core25702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25704,meta25703__$1){
var self__ = this;
var _25704__$1 = this;
return (new demo.rm_hull_8906851.core.t_demo$rm_hull_8906851$core25702(self__.board,self__.owner,meta25703__$1));
}));

(demo.rm_hull_8906851.core.t_demo$rm_hull_8906851$core25702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25704){
var self__ = this;
var _25704__$1 = this;
return self__.meta25703;
}));

(demo.rm_hull_8906851.core.t_demo$rm_hull_8906851$core25702.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL);

(demo.rm_hull_8906851.core.t_demo$rm_hull_8906851$core25702.prototype.om$core$IRender$render$arity$1 = (function (this__24940__auto__){
var self__ = this;
var this__24940__auto____$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(om.dom.table,({"className": "chess_board"}),demo.rm_hull_8906851.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([".chess_board tr:nth-child(even) td:nth-child(odd),\n         .chess_board tr:nth-child(odd) td:nth-child(even) { \n            background: white; \n            box-shadow: inset 0 0 10px rgba(0,0,0,.4);\n            -moz-box-shadow: inset 0 0 10px rgba(0,0,0,.4);\n            -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,.4);\n          }\n          .chess_board td { \n            background: red;\n            width: 60px; height: 60px; \n            font-size: 40px; \n            color: black; \n            text-align: center;\n          }"], 0)),(function (){var unicoded_board = demo.rm_hull_8906851.core.unicode_pieces(self__.board);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(demo.rm_hull_8906851.core.draw_row,unicoded_board);
})());
}));

(demo.rm_hull_8906851.core.t_demo$rm_hull_8906851$core25702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta25703","meta25703",2105999256,null)], null);
}));

(demo.rm_hull_8906851.core.t_demo$rm_hull_8906851$core25702.cljs$lang$type = true);

(demo.rm_hull_8906851.core.t_demo$rm_hull_8906851$core25702.cljs$lang$ctorStr = "demo.rm-hull-8906851.core/t_demo$rm_hull_8906851$core25702");

(demo.rm_hull_8906851.core.t_demo$rm_hull_8906851$core25702.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"demo.rm-hull-8906851.core/t_demo$rm_hull_8906851$core25702");
}));

/**
 * Positional factory function for demo.rm-hull-8906851.core/t_demo$rm_hull_8906851$core25702.
 */
demo.rm_hull_8906851.core.__GT_t_demo$rm_hull_8906851$core25702 = (function demo$rm_hull_8906851$core$__GT_t_demo$rm_hull_8906851$core25702(board,owner,meta25703){
return (new demo.rm_hull_8906851.core.t_demo$rm_hull_8906851$core25702(board,owner,meta25703));
});


demo.rm_hull_8906851.core.board = (function demo$rm_hull_8906851$core$board(board,owner){
return (new demo.rm_hull_8906851.core.t_demo$rm_hull_8906851$core25702(board,owner,null));
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
var G__25705 = (function (){while(true){
var temp__5823__auto___25787 = cljs.core.async._LT__BANG_(world_channel);
if(cljs.core.truth_(temp__5823__auto___25787)){
var move_string_25792 = temp__5823__auto___25787;
demo.rm_hull_8906851.core.server_says(move_string_25792);
} else {
}

continue;

break;
}
})();
return (demo.rm_hull_8906851.core.go.cljs$core$IFn$_invoke$arity$1 ? demo.rm_hull_8906851.core.go.cljs$core$IFn$_invoke$arity$1(G__25705) : demo.rm_hull_8906851.core.go.call(null,G__25705));
});
demo.rm_hull_8906851.core.replay_game = (function demo$rm_hull_8906851$core$replay_game(world_channel,moves){
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25709_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(world_channel,p1__25709_SHARP_);
}),moves));
});
demo.rm_hull_8906851.core.show_move_BANG_ = (function demo$rm_hull_8906851$core$show_move_BANG_(move_number){
return cljs.core.reset_BANG_(demo.rm_hull_8906851.core.app_state,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(demo.rm_hull_8906851.core.app_history),move_number));
});
demo.rm_hull_8906851.core.slideshow = (function demo$rm_hull_8906851$core$slideshow(start,finish){
var G__25716 = (function (){var seq__25717 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,finish));
var chunk__25718 = null;
var count__25719 = (0);
var i__25720 = (0);
while(true){
if((i__25720 < count__25719)){
var step = chunk__25718.cljs$core$IIndexed$_nth$arity$2(null,i__25720);
demo.rm_hull_8906851.core.show_move_BANG_(step);

cljs.core.async._LT__BANG_(cljs.core.async.timeout((150)));


var G__25808 = seq__25717;
var G__25809 = chunk__25718;
var G__25810 = count__25719;
var G__25811 = (i__25720 + (1));
seq__25717 = G__25808;
chunk__25718 = G__25809;
count__25719 = G__25810;
i__25720 = G__25811;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__25717);
if(temp__5825__auto__){
var seq__25717__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25717__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__25717__$1);
var G__25816 = cljs.core.chunk_rest(seq__25717__$1);
var G__25817 = c__5694__auto__;
var G__25818 = cljs.core.count(c__5694__auto__);
var G__25819 = (0);
seq__25717 = G__25816;
chunk__25718 = G__25817;
count__25719 = G__25818;
i__25720 = G__25819;
continue;
} else {
var step = cljs.core.first(seq__25717__$1);
demo.rm_hull_8906851.core.show_move_BANG_(step);

cljs.core.async._LT__BANG_(cljs.core.async.timeout((150)));


var G__25827 = cljs.core.next(seq__25717__$1);
var G__25828 = null;
var G__25829 = (0);
var G__25830 = (0);
seq__25717 = G__25827;
chunk__25718 = G__25828;
count__25719 = G__25829;
i__25720 = G__25830;
continue;
}
} else {
return null;
}
}
break;
}
})();
return (demo.rm_hull_8906851.core.go.cljs$core$IFn$_invoke$arity$1 ? demo.rm_hull_8906851.core.go.cljs$core$IFn$_invoke$arity$1(G__25716) : demo.rm_hull_8906851.core.go.call(null,G__25716));
});
demo.rm_hull_8906851.core.cycle_every_state = (function demo$rm_hull_8906851$core$cycle_every_state(){
var seq__25721 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(cljs.core.deref(demo.rm_hull_8906851.core.app_history))));
var chunk__25722 = null;
var count__25723 = (0);
var i__25724 = (0);
while(true){
if((i__25724 < count__25723)){
var step = chunk__25722.cljs$core$IIndexed$_nth$arity$2(null,i__25724);
demo.rm_hull_8906851.core.show_move_BANG_(step);


var G__25838 = seq__25721;
var G__25839 = chunk__25722;
var G__25840 = count__25723;
var G__25841 = (i__25724 + (1));
seq__25721 = G__25838;
chunk__25722 = G__25839;
count__25723 = G__25840;
i__25724 = G__25841;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__25721);
if(temp__5825__auto__){
var seq__25721__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25721__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__25721__$1);
var G__25843 = cljs.core.chunk_rest(seq__25721__$1);
var G__25844 = c__5694__auto__;
var G__25845 = cljs.core.count(c__5694__auto__);
var G__25846 = (0);
seq__25721 = G__25843;
chunk__25722 = G__25844;
count__25723 = G__25845;
i__25724 = G__25846;
continue;
} else {
var step = cljs.core.first(seq__25721__$1);
demo.rm_hull_8906851.core.show_move_BANG_(step);


var G__25853 = cljs.core.next(seq__25721__$1);
var G__25854 = null;
var G__25855 = (0);
var G__25856 = (0);
seq__25721 = G__25853;
chunk__25722 = G__25854;
count__25723 = G__25855;
i__25724 = G__25856;
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

var G__25737 = demo.rm_hull_8906851.core.slideshow((0),cljs.core.count(cljs.core.deref(demo.rm_hull_8906851.core.app_history)));
return (demo.rm_hull_8906851.core.go.cljs$core$IFn$_invoke$arity$1 ? demo.rm_hull_8906851.core.go.cljs$core$IFn$_invoke$arity$1(G__25737) : demo.rm_hull_8906851.core.go.call(null,G__25737));
});
(window.onload = demo.rm_hull_8906851.core.run_demo);

//# sourceMappingURL=demo.rm_hull_8906851.core.js.map
