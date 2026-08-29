goog.provide('demo.rm_hull_7145520.rules');
demo.rm_hull_7145520.rules.max_speed = 2.0;
demo.rm_hull_7145520.rules.max_force = 0.03;
demo.rm_hull_7145520.rules.zero_vec = demo.rm_hull_7145520.vector.make_vector((0),(0));
demo.rm_hull_7145520.rules.make_boid = (function demo$rm_hull_7145520$rules$make_boid(x,y){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"location","location",1815599388),demo.rm_hull_7145520.vector.make_vector(x,y),new cljs.core.Keyword(null,"velocity","velocity",-581524355),demo.rm_hull_7145520.vector.rand_vector((1)),new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),demo.rm_hull_7145520.vector.make_vector((0),(0))], null);
});
demo.rm_hull_7145520.rules.apply_forces = (function demo$rm_hull_7145520$rules$apply_forces(boid,forces){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(boid,new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),demo.rm_hull_7145520.vector.add(new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421).cljs$core$IFn$_invoke$arity$1(boid),demo.rm_hull_7145520.vector.add_all(forces)));
});
demo.rm_hull_7145520.rules.diff = (function demo$rm_hull_7145520$rules$diff(location1,location2,dist){
return demo.rm_hull_7145520.vector.div(demo.rm_hull_7145520.vector.normalize(demo.rm_hull_7145520.vector.sub(location1,location2)),dist);
});
/**
 * Checks for nearby boids and steers away
 */
demo.rm_hull_7145520.rules.separate = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),demo.rm_hull_7145520.rules.zero_vec], null),new cljs.core.Keyword(null,"too-close?","too-close?",198641752),(function (d){
return (((d > 0.0)) && ((d < 25.0)));
}),new cljs.core.Keyword(null,"accumulator","accumulator",1546185501),(function (boid,other,d,p__36048){
var vec__36049 = p__36048;
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36049,(0),null);
var steer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36049,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(count + (1)),demo.rm_hull_7145520.vector.add(steer,demo.rm_hull_7145520.rules.diff(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(boid),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(other),d))], null);
}),new cljs.core.Keyword(null,"final","final",1157881357),(function (boid,p__36052){
while(true){
var vec__36053 = p__36052;
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36053,(0),null);
var steer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36053,(1),null);
if((count > (0))){
var G__36157 = boid;
var G__36158 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),demo.rm_hull_7145520.vector.div(steer,count)], null);
boid = G__36157;
p__36052 = G__36158;
continue;
} else {
if((demo.rm_hull_7145520.vector.mag(steer) > (0))){
return demo.rm_hull_7145520.vector.mult(demo.rm_hull_7145520.vector.limit(demo.rm_hull_7145520.vector.sub(demo.rm_hull_7145520.vector.mult(demo.rm_hull_7145520.vector.normalize(steer),demo.rm_hull_7145520.rules.max_speed),new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(boid)),demo.rm_hull_7145520.rules.max_force),1.5);
} else {
return demo.rm_hull_7145520.vector.mult(steer,1.5);

}
}
break;
}
})], null);
demo.rm_hull_7145520.rules.align = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),demo.rm_hull_7145520.rules.zero_vec], null),new cljs.core.Keyword(null,"too-close?","too-close?",198641752),(function (d){
return (((d > 0.0)) && ((d < 50.0)));
}),new cljs.core.Keyword(null,"accumulator","accumulator",1546185501),(function (boid,other,d,p__36065){
var vec__36066 = p__36065;
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36066,(0),null);
var sum = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36066,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(count + (1)),demo.rm_hull_7145520.vector.add(sum,new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(other))], null);
}),new cljs.core.Keyword(null,"final","final",1157881357),(function (boid,p__36069){
var vec__36070 = p__36069;
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36070,(0),null);
var sum = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36070,(1),null);
if((count > (0))){
return demo.rm_hull_7145520.vector.limit(demo.rm_hull_7145520.vector.sub(demo.rm_hull_7145520.vector.mult(demo.rm_hull_7145520.vector.normalize(demo.rm_hull_7145520.vector.div(sum,count)),demo.rm_hull_7145520.rules.max_speed),new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(boid)),demo.rm_hull_7145520.rules.max_force);
} else {
return demo.rm_hull_7145520.rules.zero_vec;
}
})], null);
demo.rm_hull_7145520.rules.cohesion = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),demo.rm_hull_7145520.rules.zero_vec], null),new cljs.core.Keyword(null,"too-close?","too-close?",198641752),(function (d){
return (((d > 0.0)) && ((d < 50.0)));
}),new cljs.core.Keyword(null,"accumulator","accumulator",1546185501),(function (boid,other,d,p__36073){
var vec__36074 = p__36073;
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36074,(0),null);
var sum = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36074,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(count + (1)),demo.rm_hull_7145520.vector.add(sum,new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(other))], null);
}),new cljs.core.Keyword(null,"final","final",1157881357),(function (boid,p__36086){
var vec__36087 = p__36086;
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36087,(0),null);
var sum = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36087,(1),null);
if((count > (0))){
return demo.rm_hull_7145520.vector.limit(demo.rm_hull_7145520.vector.sub(demo.rm_hull_7145520.vector.mult(demo.rm_hull_7145520.vector.normalize(demo.rm_hull_7145520.vector.sub(demo.rm_hull_7145520.vector.div(sum,count),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(boid))),demo.rm_hull_7145520.rules.max_speed),new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(boid)),demo.rm_hull_7145520.rules.max_force);
} else {
return demo.rm_hull_7145520.rules.zero_vec;
}
})], null);
demo.rm_hull_7145520.rules.calc_forces = (function demo$rm_hull_7145520$rules$calc_forces(var_args){
var args__5903__auto__ = [];
var len__5897__auto___36161 = arguments.length;
var i__5898__auto___36162 = (0);
while(true){
if((i__5898__auto___36162 < len__5897__auto___36161)){
args__5903__auto__.push((arguments[i__5898__auto___36162]));

var G__36163 = (i__5898__auto___36162 + (1));
i__5898__auto___36162 = G__36163;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return demo.rm_hull_7145520.rules.calc_forces.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(demo.rm_hull_7145520.rules.calc_forces.cljs$core$IFn$_invoke$arity$variadic = (function (boid,peers,forces){
var ps = peers;
var data = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init","init",-1875481434),forces);
while(true){
if(cljs.core.empty_QMARK_(ps)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (ps,data){
return (function (f,d){
var fexpr__36115 = new cljs.core.Keyword(null,"final","final",1157881357).cljs$core$IFn$_invoke$arity$1(f);
return (fexpr__36115.cljs$core$IFn$_invoke$arity$2 ? fexpr__36115.cljs$core$IFn$_invoke$arity$2(boid,d) : fexpr__36115.call(null,boid,d));
});})(ps,data))
,forces,data);
} else {
var other = cljs.core.first(ps);
var distance = demo.rm_hull_7145520.vector.dist(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(boid),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(other));
var G__36164 = cljs.core.next(ps);
var G__36165 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (ps,data,other,distance){
return (function (f,d){
if(cljs.core.truth_((function (){var fexpr__36119 = new cljs.core.Keyword(null,"too-close?","too-close?",198641752).cljs$core$IFn$_invoke$arity$1(f);
return (fexpr__36119.cljs$core$IFn$_invoke$arity$1 ? fexpr__36119.cljs$core$IFn$_invoke$arity$1(distance) : fexpr__36119.call(null,distance));
})())){
var fexpr__36120 = new cljs.core.Keyword(null,"accumulator","accumulator",1546185501).cljs$core$IFn$_invoke$arity$1(f);
return (fexpr__36120.cljs$core$IFn$_invoke$arity$4 ? fexpr__36120.cljs$core$IFn$_invoke$arity$4(boid,other,distance,d) : fexpr__36120.call(null,boid,other,distance,d));
} else {
return d;
}
});})(ps,data,other,distance))
,forces,data);
ps = G__36164;
data = G__36165;
continue;
}
break;
}
}));

(demo.rm_hull_7145520.rules.calc_forces.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(demo.rm_hull_7145520.rules.calc_forces.cljs$lang$applyTo = (function (seq36090){
var G__36094 = cljs.core.first(seq36090);
var seq36090__$1 = cljs.core.next(seq36090);
var G__36095 = cljs.core.first(seq36090__$1);
var seq36090__$2 = cljs.core.next(seq36090__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36094,G__36095,seq36090__$2);
}));

demo.rm_hull_7145520.rules.flock = (function demo$rm_hull_7145520$rules$flock(boid,peers){
return demo.rm_hull_7145520.rules.apply_forces(boid,demo.rm_hull_7145520.rules.calc_forces.cljs$core$IFn$_invoke$arity$variadic(boid,peers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([demo.rm_hull_7145520.rules.separate,demo.rm_hull_7145520.rules.align,demo.rm_hull_7145520.rules.cohesion], 0)));
});
demo.rm_hull_7145520.rules.update_location = (function demo$rm_hull_7145520$rules$update_location(boid){
var new_velocity = demo.rm_hull_7145520.vector.limit(demo.rm_hull_7145520.vector.add(new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(boid),new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421).cljs$core$IFn$_invoke$arity$1(boid)),demo.rm_hull_7145520.rules.max_speed);
var new_location = demo.rm_hull_7145520.vector.add(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(boid),new_velocity);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(boid,new cljs.core.Keyword(null,"location","location",1815599388),new_location,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"velocity","velocity",-581524355),new_velocity,new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),demo.rm_hull_7145520.rules.zero_vec], 0));
});
demo.rm_hull_7145520.rules.bounds = (function demo$rm_hull_7145520$rules$bounds(value,lower_limit,upper_limit){
if((value < lower_limit)){
return upper_limit;
} else {
if((value > upper_limit)){
return lower_limit;
} else {
return value;

}
}
});
demo.rm_hull_7145520.rules.wrap_around = (function demo$rm_hull_7145520$rules$wrap_around(boid,w,h,r){
var vec__36149 = new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(boid);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36149,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36149,(1),null);
var new_x = demo.rm_hull_7145520.rules.bounds(x,(- r),(w + r));
var new_y = demo.rm_hull_7145520.rules.bounds(y,(- r),(h + r));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,new_x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,new_y)))){
return boid;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(boid,new cljs.core.Keyword(null,"location","location",1815599388),demo.rm_hull_7145520.vector.make_vector(new_x,new_y));
}
});
demo.rm_hull_7145520.rules.step = (function demo$rm_hull_7145520$rules$step(w,h,r){
return (function (boid,peers){
return demo.rm_hull_7145520.rules.wrap_around(demo.rm_hull_7145520.rules.update_location(demo.rm_hull_7145520.rules.flock(boid,peers)),w,h,r);
});
});

//# sourceMappingURL=demo.rm_hull_7145520.rules.js.map
