goog.provide('demo.rm_hull_6857333.solver');
/**
 * Yields a list of directly connected neighbours (i.e. adjacent cells with
 * no walls between them).
 */
demo.rm_hull_6857333.solver.connecting_neighbours = (function demo$rm_hull_6857333$solver$connecting_neighbours(maze,p){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(demo.rm_hull_6857333.util.wall_between_QMARK_,maze,p),demo.rm_hull_6857333.util.neighbours(p,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(maze)));
});
/**
 * Filters out those neighbours from the predecessors whose length is greater
 * than the current length
 */
demo.rm_hull_6857333.solver.remove_longer_paths = (function demo$rm_hull_6857333$solver$remove_longer_paths(pred,neighbours,curr_len){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36264_SHARP_){
var temp__5823__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__36264_SHARP_) : pred.call(null,p1__36264_SHARP_));
if(cljs.core.truth_(temp__5823__auto__)){
var old = temp__5823__auto__;
return (curr_len >= new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(old));
} else {
return null;
}
}),neighbours);
});
/**
 * Given a map of predecessors of a specific start point, extract out the
 * length for the cell at offset n.
 */
demo.rm_hull_6857333.solver.path_length = (function demo$rm_hull_6857333$solver$path_length(pred,n){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(pred,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,new cljs.core.Keyword(null,"length","length",588987862)], null),(0));
});
/**
 * Blends the neighbours (as keys) into the map all with the same value.
 */
demo.rm_hull_6857333.solver.blend_in = (function demo$rm_hull_6857333$solver$blend_in(map,neighbours,val){
if(cljs.core.empty_QMARK_(neighbours)){
return map;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,map),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([neighbours,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(val)], 0)));
}
});
/**
 * Constructs a map of predessors for cells between 'start' and 'stop-at' cells.
 */
demo.rm_hull_6857333.solver.build_predecessors = (function demo$rm_hull_6857333$solver$build_predecessors(maze,start,stop_at){
var pred = cljs.core.PersistentHashMap.fromArrays([start],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"predecessor","predecessor",-2068521836),null,new cljs.core.Keyword(null,"length","length",588987862),(0)], null)]);
var active = tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([start,(0)], 0));
while(true){
if(cljs.core.empty_QMARK_(active)){
return pred;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(active),stop_at)){
return pred;
} else {
var curr = cljs.core.ffirst(active);
var new_length = (demo.rm_hull_6857333.solver.path_length(pred,curr) + (1));
var neighbours = demo.rm_hull_6857333.solver.remove_longer_paths(pred,demo.rm_hull_6857333.solver.connecting_neighbours(maze,curr),new_length);
var next_gen = demo.rm_hull_6857333.solver.blend_in(pred,neighbours,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"predecessor","predecessor",-2068521836),new cljs.core.Keyword(null,"length","length",588987862)],[curr,new_length]));
var next_active = demo.rm_hull_6857333.solver.blend_in(active,neighbours,new_length);
var G__36276 = next_gen;
var G__36277 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(next_active,curr);
pred = G__36276;
active = G__36277;
continue;

}
}
break;
}
});
/**
 * Recurses over the predecessors between 'from' and 'to' pulling out the 
 * cells into an ordered list which represents the shortest path between
 * the two points.
 */
demo.rm_hull_6857333.solver.shortest_path = (function demo$rm_hull_6857333$solver$shortest_path(maze,from,to){
var pred = demo.rm_hull_6857333.solver.build_predecessors(maze,from,to);
var n = to;
var result = null;
while(true){
var p = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pred,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,new cljs.core.Keyword(null,"predecessor","predecessor",-2068521836)], null));
if((p == null)){
return cljs.core.vec(cljs.core.cons(n,result));
} else {
var G__36278 = p;
var G__36279 = cljs.core.cons(n,result);
n = G__36278;
result = G__36279;
continue;
}
break;
}
});
demo.rm_hull_6857333.solver.solve = (function demo$rm_hull_6857333$solver$solve(maze,points){
var f = (function (p__36271){
var vec__36272 = p__36271;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36272,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36272,(1),null);
return demo.rm_hull_6857333.solver.shortest_path(maze,from,to);
});
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,points));
});

//# sourceMappingURL=demo.rm_hull_6857333.solver.js.map
