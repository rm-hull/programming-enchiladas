goog.provide('demo.rm_hull_6857333.generator');
/**
 * Initialize a maze of size (W x H) with all walls set
 */
demo.rm_hull_6857333.generator.init_maze = (function demo$rm_hull_6857333$generator$init_maze(w,h){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w * h),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"west","west",708776677),null,new cljs.core.Keyword(null,"north","north",651323902),null], null), null)))], null);
});
/**
 * Knocks down the wall between the two given points in the maze. Assumes
 * that they are adjacent, otherwise it doesn't make any sense (and wont
 * actually make any difference anyway)
 */
demo.rm_hull_6857333.generator.knockdown_wall = (function demo$rm_hull_6857333$generator$knockdown_wall(maze,p1,p2){
if((p1 > p2)){
return (demo.rm_hull_6857333.generator.knockdown_wall.cljs$core$IFn$_invoke$arity$3 ? demo.rm_hull_6857333.generator.knockdown_wall.cljs$core$IFn$_invoke$arity$3(maze,p2,p1) : demo.rm_hull_6857333.generator.knockdown_wall.call(null,maze,p2,p1));
} else {
var vec__36091 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(maze);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36091,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36091,(1),null);
var new_walls = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((p2 - p1),w))?cljs.core.disj.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__36096 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(maze);
return (fexpr__36096.cljs$core$IFn$_invoke$arity$1 ? fexpr__36096.cljs$core$IFn$_invoke$arity$1(p2) : fexpr__36096.call(null,p2));
})(),new cljs.core.Keyword(null,"north","north",651323902)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((p2 - p1),(1)))?cljs.core.disj.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__36097 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(maze);
return (fexpr__36097.cljs$core$IFn$_invoke$arity$1 ? fexpr__36097.cljs$core$IFn$_invoke$arity$1(p2) : fexpr__36097.call(null,p2));
})(),new cljs.core.Keyword(null,"west","west",708776677)):null));
return cljs.core.assoc_in(maze,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),p2], null),new_walls);
}
});
/**
 * Recursively creates a maze based on the supplied dimensions. The visitor
 * function allows a different strategy for selecting the next neighbour.
 */
demo.rm_hull_6857333.generator.create_maze = (function demo$rm_hull_6857333$generator$create_maze(visitor_fn,w,h){
var maze = demo.rm_hull_6857333.generator.init_maze(w,h);
var visited = new cljs.core.PersistentArrayMap(null, 1, [(0),true], null);
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null);
while(true){
if(cljs.core.empty_QMARK_(stack)){
return maze;
} else {
var n = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(visited,demo.rm_hull_6857333.util.neighbours(cljs.core.peek(stack),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(maze)));
if(cljs.core.empty_QMARK_(n)){
var G__36122 = maze;
var G__36123 = visited;
var G__36124 = cljs.core.pop(stack);
maze = G__36122;
visited = G__36123;
stack = G__36124;
continue;
} else {
var np = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(n,(function (){var G__36108 = cljs.core.count(n);
return (visitor_fn.cljs$core$IFn$_invoke$arity$1 ? visitor_fn.cljs$core$IFn$_invoke$arity$1(G__36108) : visitor_fn.call(null,G__36108));
})());
var st = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(n),(1)))?cljs.core.pop(stack):stack);
var G__36125 = demo.rm_hull_6857333.generator.knockdown_wall(maze,cljs.core.peek(stack),np);
var G__36126 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(visited,np,true);
var G__36127 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(st,np);
maze = G__36125;
visited = G__36126;
stack = G__36127;
continue;
}
}
break;
}
});

//# sourceMappingURL=demo.rm_hull_6857333.generator.js.map
