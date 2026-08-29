goog.provide('demo.rm_hull_6857333.util');
/**
 * Converts [x,y] co-ords into an offset into the maze data
 */
demo.rm_hull_6857333.util.coord__GT_pos = (function demo$rm_hull_6857333$util$coord__GT_pos(p__36025,p__36026){
var vec__36027 = p__36025;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36027,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36027,(1),null);
var vec__36030 = p__36026;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36030,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36030,(1),null);
return ((cljs.core.rem(y,h) * w) + cljs.core.rem(x,w));
});
demo.rm_hull_6857333.util.add_if = (function demo$rm_hull_6857333$util$add_if(pred,then_clause,xs){
if(cljs.core.truth_(pred)){
return cljs.core.cons(then_clause,xs);
} else {
return xs;
}
});
demo.rm_hull_6857333.util.neighbours = cljs.core.memoize((function (p,p__36034){
var vec__36035 = p__36034;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36035,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36035,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__36033_SHARP_){
return (((p1__36033_SHARP_ >= (0))) && ((p1__36033_SHARP_ < (w * h))));
}),demo.rm_hull_6857333.util.add_if((cljs.core.rem(p,w) < (w - (1))),(p + (1)),demo.rm_hull_6857333.util.add_if((cljs.core.rem(p,w) > (0)),(p - (1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p - w),(p + w)], null))));
}));
/**
 * Checks to see if there is a wall between two (adjacent) points in the
 * maze. The return value will indicate the wall type (:north, :west, ..).
 * If the points aren't adjacent, nil is returned.
 */
demo.rm_hull_6857333.util.wall_between_QMARK_ = (function demo$rm_hull_6857333$util$wall_between_QMARK_(maze,p1,p2){
if((p1 > p2)){
return (demo.rm_hull_6857333.util.wall_between_QMARK_.cljs$core$IFn$_invoke$arity$3 ? demo.rm_hull_6857333.util.wall_between_QMARK_.cljs$core$IFn$_invoke$arity$3(maze,p2,p1) : demo.rm_hull_6857333.util.wall_between_QMARK_.call(null,maze,p2,p1));
} else {
var vec__36040 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(maze);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36040,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36040,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((p2 - p1),w)){
return new cljs.core.Keyword(null,"north","north",651323902).cljs$core$IFn$_invoke$arity$1((function (){var fexpr__36045 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(maze);
return (fexpr__36045.cljs$core$IFn$_invoke$arity$1 ? fexpr__36045.cljs$core$IFn$_invoke$arity$1(p2) : fexpr__36045.call(null,p2));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((p2 - p1),(1))){
return new cljs.core.Keyword(null,"west","west",708776677).cljs$core$IFn$_invoke$arity$1((function (){var fexpr__36047 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(maze);
return (fexpr__36047.cljs$core$IFn$_invoke$arity$1 ? fexpr__36047.cljs$core$IFn$_invoke$arity$1(p2) : fexpr__36047.call(null,p2));
})());
} else {
return null;
}
}
}
});

//# sourceMappingURL=demo.rm_hull_6857333.util.js.map
