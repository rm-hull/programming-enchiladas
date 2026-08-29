goog.provide('turtle.core');
turtle.core.colors = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"black","black",1294279647),"#663300","#68FF33"], null);
/**
 * Calculates the smallest and largest [x,y] points
 */
turtle.core.bounding_box = (function turtle$core$bounding_box(coords){
var vec__27779 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.max),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,coords));
var min_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27779,(0),null);
var max_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27779,(1),null);
var vec__27782 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.max),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,coords));
var min_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27782,(0),null);
var max_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27782,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [min_x,min_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_x,max_y], null)], null);
});
turtle.core.extend_margin = (function turtle$core$extend_margin(p__27821,margin){
var vec__27824 = p__27821;
var vec__27830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27824,(0),null);
var min_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27830,(0),null);
var min_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27830,(1),null);
var vec__27833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27824,(1),null);
var max_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27833,(0),null);
var max_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27833,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(min_x - margin),(min_y - margin)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(max_x + margin),(max_y + margin)], null)], null);
});
turtle.core.adjust_to_zero = (function turtle$core$adjust_to_zero(p__27869){
var vec__27870 = p__27869;
var vec__27873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27870,(0),null);
var min_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27873,(0),null);
var min_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27873,(1),null);
var vec__27876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27870,(1),null);
var max_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27876,(0),null);
var max_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27876,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(max_x - min_x),(max_y - min_y)], null)], null);
});
turtle.core.radians = (Math.PI / 180.0);
turtle.core.deg__GT_rad = (function turtle$core$deg__GT_rad(theta){
return (theta * turtle.core.radians);
});
/**
 * Round a double to the given precision (number of significant digits)
 */
turtle.core.round_to = (function turtle$core$round_to(precision){
var factor = Math.pow((10),precision);
return (function (d){
return (Math.round((d * factor)) / factor);
});
});
turtle.core.round_5dp = turtle.core.round_to((5));
/**
 * Given a state (containing a heading), move forward by the supplied
 * distance.
 */
turtle.core.move_forward = (function turtle$core$move_forward(state,dist){
var rad = turtle.core.deg__GT_rad(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(state));
var vec__27900 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(state);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27900,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27900,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [turtle.core.round_5dp((x + (dist * Math.cos(rad)))),turtle.core.round_5dp((y + (dist * Math.sin(rad))))], null));
});
/**
 * Given a state, and an operation (either the + or - function),
 * update such that the new heading is altered by the angle
 */
turtle.core.turn = (function turtle$core$turn(op,state,angle){
var heading = new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.mod((op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(heading,angle) : op.call(null,heading,angle)),(360)));
});
turtle.core.update_color = (function turtle$core$update_color(state,color){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"color","color",1011675173),color);
});
turtle.core.update_fill = (function turtle$core$update_fill(state,color){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"fill","fill",883462889),color);
});
turtle.core.color_index = (function turtle$core$color_index(state,index){
return turtle.core.update_color(state,cljs.core.get.cljs$core$IFn$_invoke$arity$2(turtle.core.colors,index));
});
turtle.core.push_state = (function turtle$core$push_state(state,_){
var saved = cljs.core.select_keys(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.Keyword(null,"heading","heading",-1312171873)], null));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stack","stack",-793405930)], null),(function (p1__27944_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__27944_SHARP_,saved);
}));
});
turtle.core.pop_state = (function turtle$core$pop_state(state,_){
var restored = cljs.core.peek(new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(state));
if((restored == null)){
return state;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,restored,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"restore-point","restore-point",-1377063358),true], null)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stack","stack",-793405930)], null),cljs.core.pop);
}
});
turtle.core.goto_origin = (function turtle$core$goto_origin(state,_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"heading","heading",-1312171873),(90),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"restore-point","restore-point",-1377063358),true], null)], 0));
});
turtle.core.pen_ops = (function turtle$core$pen_ops(state,pen){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pen,new cljs.core.Keyword(null,"up","up",-269712113))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"move","move",-2110884309),true);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"move","move",-2110884309));
}
});
turtle.core.state_mapper = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color-index","color-index",560460581),new cljs.core.Keyword(null,"restore","restore",267172424),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"pen","pen",2006675445),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"fwd","fwd",-1500039010),new cljs.core.Keyword(null,"left","left",-399115937)],[turtle.core.update_color,turtle.core.color_index,turtle.core.pop_state,turtle.core.update_fill,turtle.core.push_state,turtle.core.pen_ops,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(turtle.core.turn,cljs.core._),turtle.core.goto_origin,turtle.core.move_forward,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(turtle.core.turn,cljs.core._PLUS_)]);
/**
 * Evolves the current state and a given command to determine the next state,
 * e.g. if the current position is (4,3) pointing north, then move to (4,4)
 * and turn in to the heading relative to the command.
 */
turtle.core.next_state = (function turtle$core$next_state(var_args){
var G__27975 = arguments.length;
switch (G__27975) {
case 0:
return turtle.core.next_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return turtle.core.next_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return turtle.core.next_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(turtle.core.next_state.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(turtle.core.next_state.cljs$core$IFn$_invoke$arity$1 = (function (curr_state){
return curr_state;
}));

(turtle.core.next_state.cljs$core$IFn$_invoke$arity$2 = (function (curr_state,p__27980){
var vec__27981 = p__27980;
var seq__27982 = cljs.core.seq(vec__27981);
var first__27983 = cljs.core.first(seq__27982);
var seq__27982__$1 = cljs.core.next(seq__27982);
var cmd = first__27983;
var vec__27984 = seq__27982__$1;
var peek_ahead = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27984,(0),null);
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(turtle.core.state_mapper,cmd);
if(cljs.core.truth_(temp__5823__auto__)){
var update_fn = temp__5823__auto__;
var G__27990 = cljs.core.select_keys(curr_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"move","move",-2110884309)], null));
var G__27991 = peek_ahead;
return (update_fn.cljs$core$IFn$_invoke$arity$2 ? update_fn.cljs$core$IFn$_invoke$arity$2(G__27990,G__27991) : update_fn.call(null,G__27990,G__27991));
} else {
return curr_state;
}
}));

(turtle.core.next_state.cljs$lang$maxFixedArity = 2);

turtle.core.process = (function turtle$core$process(cmds){
var init_state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),new cljs.core.Keyword(null,"heading","heading",-1312171873),(90),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(turtle.core.next_state,init_state,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__27994_SHARP_){
var G__28005 = cljs.core.first(p1__27994_SHARP_);
return (turtle.core.state_mapper.cljs$core$IFn$_invoke$arity$1 ? turtle.core.state_mapper.cljs$core$IFn$_invoke$arity$1(G__28005) : turtle.core.state_mapper.call(null,G__28005));
}),cljs.core.partition_all.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.flatten(cmds))));
});
/**
 * Calculates an affine transform matrix which will scale a drawing
 * constrained by the min/max bounds to the given screen co-ords. Note
 * that the drawing is flipped so (0,0) will be represented at (or near)
 * the lower edge, not the upper edge.
 */
turtle.core.calc_matrix_transform = (function turtle$core$calc_matrix_transform(p__28020,p__28021){
var vec__28022 = p__28020;
var screen_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28022,(0),null);
var screen_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28022,(1),null);
var vec__28025 = p__28021;
var vec__28028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28025,(0),null);
var min_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28028,(0),null);
var min_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28028,(1),null);
var vec__28031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28025,(1),null);
var max_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28031,(0),null);
var max_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28031,(1),null);
var scale_x = (screen_x / (max_x - min_x));
var scale_y = (screen_y / (max_y - min_y));
var scale = cljs.core.min.cljs$core$IFn$_invoke$arity$2(scale_x,scale_y);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(turtle.core.round_5dp,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale,0.0,0.0,(- scale),(scale * (- min_x)),(scale * max_y)], null));
});
turtle.core.draw_BANG_ = (function turtle$core$draw_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___28392 = arguments.length;
var i__5898__auto___28393 = (0);
while(true){
if((i__5898__auto___28393 < len__5897__auto___28392)){
args__5903__auto__.push((arguments[i__5898__auto___28393]));

var G__28394 = (i__5898__auto___28393 + (1));
i__5898__auto___28393 = G__28394;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return turtle.core.draw_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(turtle.core.draw_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (renderer,cmds,p__28087){
var vec__28088 = p__28087;
var screen_area = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28088,(0),null);
var data = turtle.core.process(cmds);
var bounds = turtle.core.extend_margin(turtle.core.bounding_box(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"coords","coords",-599429112),data)),(5));
var output = (((screen_area == null))?cljs.core.second(turtle.core.adjust_to_zero(bounds)):screen_area);
var matrix = turtle.core.calc_matrix_transform(output,bounds);
return (renderer.cljs$core$IFn$_invoke$arity$4 ? renderer.cljs$core$IFn$_invoke$arity$4(data,output,bounds,matrix) : renderer.call(null,data,output,bounds,matrix));
}));

(turtle.core.draw_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(turtle.core.draw_BANG_.cljs$lang$applyTo = (function (seq28048){
var G__28049 = cljs.core.first(seq28048);
var seq28048__$1 = cljs.core.next(seq28048);
var G__28050 = cljs.core.first(seq28048__$1);
var seq28048__$2 = cljs.core.next(seq28048__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28049,G__28050,seq28048__$2);
}));

turtle.core.move_op_QMARK_ = (function turtle$core$move_op_QMARK_(command){
var or__5162__auto__ = new cljs.core.Keyword(null,"restore-point","restore-point",-1377063358).cljs$core$IFn$_invoke$arity$1(command);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"move","move",-2110884309).cljs$core$IFn$_invoke$arity$1(command);
}
});

//# sourceMappingURL=turtle.core.js.map
