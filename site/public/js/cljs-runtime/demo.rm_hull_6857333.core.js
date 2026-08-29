goog.provide('demo.rm_hull_6857333.core');
demo.rm_hull_6857333.core.draw_path_segments = (function demo$rm_hull_6857333$core$draw_path_segments(ctx,snake,start,end){
var vec__25934 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(snake,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"size","size",1098693007)], null));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25934,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25934,(1),null);
var cell_size = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(snake,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null));
var offset = (cljs.core.quot(cell_size,(2)) + (1));
var seq__25937_26159 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(snake),start,end));
var chunk__25939_26160 = null;
var count__25940_26161 = (0);
var i__25941_26162 = (0);
while(true){
if((i__25941_26162 < count__25940_26161)){
var p_26163 = chunk__25939_26160.cljs$core$IIndexed$_nth$arity$2(null,i__25941_26162);
var x_26164 = cljs.core.rem(p_26163,w);
var y_26165 = cljs.core.rem(cljs.core.quot(p_26163,w),h);
monet.canvas.line_to((ctx.cljs$core$IFn$_invoke$arity$0 ? ctx.cljs$core$IFn$_invoke$arity$0() : ctx.call(null)),((x_26164 * cell_size) + offset),((y_26165 * cell_size) + offset));


var G__26167 = seq__25937_26159;
var G__26168 = chunk__25939_26160;
var G__26169 = count__25940_26161;
var G__26170 = (i__25941_26162 + (1));
seq__25937_26159 = G__26167;
chunk__25939_26160 = G__26168;
count__25940_26161 = G__26169;
i__25941_26162 = G__26170;
continue;
} else {
var temp__5825__auto___26172 = cljs.core.seq(seq__25937_26159);
if(temp__5825__auto___26172){
var seq__25937_26173__$1 = temp__5825__auto___26172;
if(cljs.core.chunked_seq_QMARK_(seq__25937_26173__$1)){
var c__5694__auto___26174 = cljs.core.chunk_first(seq__25937_26173__$1);
var G__26176 = cljs.core.chunk_rest(seq__25937_26173__$1);
var G__26177 = c__5694__auto___26174;
var G__26178 = cljs.core.count(c__5694__auto___26174);
var G__26179 = (0);
seq__25937_26159 = G__26176;
chunk__25939_26160 = G__26177;
count__25940_26161 = G__26178;
i__25941_26162 = G__26179;
continue;
} else {
var p_26180 = cljs.core.first(seq__25937_26173__$1);
var x_26181 = cljs.core.rem(p_26180,w);
var y_26182 = cljs.core.rem(cljs.core.quot(p_26180,w),h);
monet.canvas.line_to((ctx.cljs$core$IFn$_invoke$arity$0 ? ctx.cljs$core$IFn$_invoke$arity$0() : ctx.call(null)),((x_26181 * cell_size) + offset),((y_26182 * cell_size) + offset));


var G__26183 = cljs.core.next(seq__25937_26173__$1);
var G__26184 = null;
var G__26185 = (0);
var G__26186 = (0);
seq__25937_26159 = G__26183;
chunk__25939_26160 = G__26184;
count__25940_26161 = G__26185;
i__25941_26162 = G__26186;
continue;
}
} else {
}
}
break;
}

return ctx;
});
demo.rm_hull_6857333.core.eraser = (function demo$rm_hull_6857333$core$eraser(ctx,snake,p){
if((((p >= (0))) && ((p < new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(snake))))){
monet.canvas.close_path(monet.canvas.stroke(demo.rm_hull_6857333.core.draw_path_segments(monet.canvas.begin_path(monet.canvas.stroke_style(ctx,new cljs.core.Keyword(null,"erase-color","erase-color",1560278482).cljs$core$IFn$_invoke$arity$1(snake))),snake,p,(p + (2)))));
} else {
}

return ctx;
});
demo.rm_hull_6857333.core.draw_snake = (function demo$rm_hull_6857333$core$draw_snake(ctx,snake){
var start = cljs.core.deref(new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(snake));
var end = (start + new cljs.core.Keyword(null,"snake-length","snake-length",1392741290).cljs$core$IFn$_invoke$arity$1(snake));
return monet.canvas.close_path(monet.canvas.stroke(demo.rm_hull_6857333.core.draw_path_segments(monet.canvas.begin_path(monet.canvas.stroke_style(demo.rm_hull_6857333.core.eraser(monet.canvas.stroke_cap(monet.canvas.stroke_width(ctx,(4)),"square"),snake,(start - (1))),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(snake))),snake,start,end)));
});
demo.rm_hull_6857333.core.draw_cells = (function demo$rm_hull_6857333$core$draw_cells(ctx,maze,cell_size){
var vec__25981 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(maze);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25981,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25981,(1),null);
var seq__25990_26187 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(0)),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(maze)));
var chunk__25993_26188 = null;
var count__25994_26189 = (0);
var i__25995_26190 = (0);
while(true){
if((i__25995_26190 < count__25994_26189)){
var vec__26092_26191 = chunk__25993_26188.cljs$core$IIndexed$_nth$arity$2(null,i__25995_26190);
var p_26192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26092_26191,(0),null);
var walls_26193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26092_26191,(1),null);
var x_26194 = ((cell_size * cljs.core.rem(p_26192,w)) + (1));
var y_26195 = ((cell_size * cljs.core.rem(cljs.core.quot(p_26192,w),h)) + (1));
if(cljs.core.truth_(new cljs.core.Keyword(null,"north","north",651323902).cljs$core$IFn$_invoke$arity$1(walls_26193))){
monet.canvas.line_to(monet.canvas.move_to(ctx,x_26194,y_26195),(x_26194 + cell_size),y_26195);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"west","west",708776677).cljs$core$IFn$_invoke$arity$1(walls_26193))){
monet.canvas.line_to(monet.canvas.move_to(ctx,x_26194,y_26195),x_26194,(y_26195 + cell_size));
} else {
}


var G__26196 = seq__25990_26187;
var G__26197 = chunk__25993_26188;
var G__26198 = count__25994_26189;
var G__26199 = (i__25995_26190 + (1));
seq__25990_26187 = G__26196;
chunk__25993_26188 = G__26197;
count__25994_26189 = G__26198;
i__25995_26190 = G__26199;
continue;
} else {
var temp__5825__auto___26200 = cljs.core.seq(seq__25990_26187);
if(temp__5825__auto___26200){
var seq__25990_26201__$1 = temp__5825__auto___26200;
if(cljs.core.chunked_seq_QMARK_(seq__25990_26201__$1)){
var c__5694__auto___26202 = cljs.core.chunk_first(seq__25990_26201__$1);
var G__26203 = cljs.core.chunk_rest(seq__25990_26201__$1);
var G__26204 = c__5694__auto___26202;
var G__26205 = cljs.core.count(c__5694__auto___26202);
var G__26206 = (0);
seq__25990_26187 = G__26203;
chunk__25993_26188 = G__26204;
count__25994_26189 = G__26205;
i__25995_26190 = G__26206;
continue;
} else {
var vec__26096_26207 = cljs.core.first(seq__25990_26201__$1);
var p_26208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26096_26207,(0),null);
var walls_26209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26096_26207,(1),null);
var x_26210 = ((cell_size * cljs.core.rem(p_26208,w)) + (1));
var y_26211 = ((cell_size * cljs.core.rem(cljs.core.quot(p_26208,w),h)) + (1));
if(cljs.core.truth_(new cljs.core.Keyword(null,"north","north",651323902).cljs$core$IFn$_invoke$arity$1(walls_26209))){
monet.canvas.line_to(monet.canvas.move_to(ctx,x_26210,y_26211),(x_26210 + cell_size),y_26211);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"west","west",708776677).cljs$core$IFn$_invoke$arity$1(walls_26209))){
monet.canvas.line_to(monet.canvas.move_to(ctx,x_26210,y_26211),x_26210,(y_26211 + cell_size));
} else {
}


var G__26213 = cljs.core.next(seq__25990_26201__$1);
var G__26214 = null;
var G__26215 = (0);
var G__26216 = (0);
seq__25990_26187 = G__26213;
chunk__25993_26188 = G__26214;
count__25994_26189 = G__26215;
i__25995_26190 = G__26216;
continue;
}
} else {
}
}
break;
}

return ctx;
});
demo.rm_hull_6857333.core.draw_maze = (function demo$rm_hull_6857333$core$draw_maze(ctx,maze,cell_size){
var vec__26100 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(maze);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26100,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26100,(1),null);
return monet.canvas.close_path(monet.canvas.stroke(demo.rm_hull_6857333.core.draw_cells(monet.canvas.line_to(monet.canvas.line_to(monet.canvas.move_to(monet.canvas.begin_path(monet.canvas.stroke_style(monet.canvas.stroke_cap(monet.canvas.stroke_width(ctx,(2)),"square"),"#606060")),(0),((h * cell_size) + (1))),((w * cell_size) + (1)),((h * cell_size) + (1))),((w * cell_size) + (1)),(0)),maze,cell_size)));
});
demo.rm_hull_6857333.core.start_end = (function demo$rm_hull_6857333$core$start_end(snake_attrs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26110_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p1__26110_SHARP_),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(p1__26110_SHARP_)],null));
}),snake_attrs);
});
demo.rm_hull_6857333.core.create_snake = (function demo$rm_hull_6857333$core$create_snake(var_args){
var args__5903__auto__ = [];
var len__5897__auto___26217 = arguments.length;
var i__5898__auto___26218 = (0);
while(true){
if((i__5898__auto___26218 < len__5897__auto___26217)){
args__5903__auto__.push((arguments[i__5898__auto___26218]));

var G__26219 = (i__5898__auto___26218 + (1));
i__5898__auto___26218 = G__26219;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return demo.rm_hull_6857333.core.create_snake.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(demo.rm_hull_6857333.core.create_snake.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,maze,callback_fn,snake_attrs){
var solutions = demo.rm_hull_6857333.solver.solve(maze,demo.rm_hull_6857333.core.start_end(snake_attrs));
var seq__26123 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(solutions)));
var chunk__26125 = null;
var count__26126 = (0);
var i__26127 = (0);
while(true){
if((i__26127 < count__26126)){
var index = chunk__26125.cljs$core$IIndexed$_nth$arity$2(null,i__26127);
var path_26220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(solutions,index);
var attrs_26221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(snake_attrs,index);
var snake_length_26222 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(attrs_26221,new cljs.core.Keyword(null,"snake-length","snake-length",1392741290),cljs.core.count(path_26220));
var G__26144_26223 = ctx;
var G__26145_26224 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(attrs_26221,new cljs.core.Keyword(null,"maze","maze",1753749814),maze,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path","path",-188191168),path_26220,new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),new cljs.core.Keyword(null,"snake-length","snake-length",1392741290),snake_length_26222,new cljs.core.Keyword(null,"limit","limit",-1355822363),(cljs.core.count(path_26220) - snake_length_26222)], 0));
(callback_fn.cljs$core$IFn$_invoke$arity$2 ? callback_fn.cljs$core$IFn$_invoke$arity$2(G__26144_26223,G__26145_26224) : callback_fn.call(null,G__26144_26223,G__26145_26224));


var G__26225 = seq__26123;
var G__26226 = chunk__26125;
var G__26227 = count__26126;
var G__26228 = (i__26127 + (1));
seq__26123 = G__26225;
chunk__26125 = G__26226;
count__26126 = G__26227;
i__26127 = G__26228;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26123);
if(temp__5825__auto__){
var seq__26123__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26123__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__26123__$1);
var G__26229 = cljs.core.chunk_rest(seq__26123__$1);
var G__26230 = c__5694__auto__;
var G__26231 = cljs.core.count(c__5694__auto__);
var G__26232 = (0);
seq__26123 = G__26229;
chunk__26125 = G__26230;
count__26126 = G__26231;
i__26127 = G__26232;
continue;
} else {
var index = cljs.core.first(seq__26123__$1);
var path_26233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(solutions,index);
var attrs_26234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(snake_attrs,index);
var snake_length_26235 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(attrs_26234,new cljs.core.Keyword(null,"snake-length","snake-length",1392741290),cljs.core.count(path_26233));
var G__26149_26236 = ctx;
var G__26150_26237 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(attrs_26234,new cljs.core.Keyword(null,"maze","maze",1753749814),maze,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path","path",-188191168),path_26233,new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),new cljs.core.Keyword(null,"snake-length","snake-length",1392741290),snake_length_26235,new cljs.core.Keyword(null,"limit","limit",-1355822363),(cljs.core.count(path_26233) - snake_length_26235)], 0));
(callback_fn.cljs$core$IFn$_invoke$arity$2 ? callback_fn.cljs$core$IFn$_invoke$arity$2(G__26149_26236,G__26150_26237) : callback_fn.call(null,G__26149_26236,G__26150_26237));


var G__26239 = cljs.core.next(seq__26123__$1);
var G__26240 = null;
var G__26241 = (0);
var G__26242 = (0);
seq__26123 = G__26239;
chunk__26125 = G__26240;
count__26126 = G__26241;
i__26127 = G__26242;
continue;
}
} else {
return null;
}
}
break;
}
}));

(demo.rm_hull_6857333.core.create_snake.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(demo.rm_hull_6857333.core.create_snake.cljs$lang$applyTo = (function (seq26112){
var G__26113 = cljs.core.first(seq26112);
var seq26112__$1 = cljs.core.next(seq26112);
var G__26114 = cljs.core.first(seq26112__$1);
var seq26112__$2 = cljs.core.next(seq26112__$1);
var G__26115 = cljs.core.first(seq26112__$2);
var seq26112__$3 = cljs.core.next(seq26112__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26113,G__26114,G__26115,seq26112__$3);
}));

demo.rm_hull_6857333.core.reset_snake = (function demo$rm_hull_6857333$core$reset_snake(ctx,snake,callback_fn){
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(snake,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"path","path",-188191168)], null)),cljs.core.deref(new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(snake)));
var end = cljs.core.rand_int((cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(snake,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"size","size",1098693007)], null))) - (1)));
return demo.rm_hull_6857333.core.create_snake.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword(null,"maze","maze",1753749814).cljs$core$IFn$_invoke$arity$1(snake),callback_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(snake,new cljs.core.Keyword(null,"start","start",-355208981),start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),end], 0))], 0));
});
demo.rm_hull_6857333.core.animate = (function demo$rm_hull_6857333$core$animate(ctx,snake){
var loop = (function demo$rm_hull_6857333$core$animate_$_loop(){
if((cljs.core.deref(new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(snake)) <= new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(snake))){
(monet.core.animation_frame.cljs$core$IFn$_invoke$arity$1 ? monet.core.animation_frame.cljs$core$IFn$_invoke$arity$1(demo$rm_hull_6857333$core$animate_$_loop) : monet.core.animation_frame.call(null,demo$rm_hull_6857333$core$animate_$_loop));

demo.rm_hull_6857333.core.draw_snake(ctx,snake);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(snake),cljs.core.inc);
} else {
return null;
}
});
return loop();
});
demo.rm_hull_6857333.core.random_snakes = (function demo$rm_hull_6857333$core$random_snakes(cell_size,limit,n){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26156_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"erase-color","erase-color",1560278482),new cljs.core.Keyword(null,"snake-length","snake-length",1392741290)],[cljs.core.rand_int(limit),cljs.core.rand_int(limit),cell_size,p1__26156_SHARP_,"white",(8)]);
}),cljs.core.cycle(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#55B95F","red","#8182AE","#AC85B5","orange","yellow"], null)))));
});
jayq.core.document_ready((function (){
var cell_size = parseInt((enchilada.value_of.cljs$core$IFn$_invoke$arity$2 ? enchilada.value_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),(10)) : enchilada.value_of.call(null,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),(10))));
var draw_cmd = (enchilada.value_of.cljs$core$IFn$_invoke$arity$2 ? enchilada.value_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"draw","draw",1358331674),"snail") : enchilada.value_of.call(null,new cljs.core.Keyword(null,"draw","draw",1358331674),"snail"));
var width = (cljs.core.quot(cljs.core.first((enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0 ? enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0() : enchilada.canvas_size.call(null))),cell_size) - (1));
var height = (cljs.core.quot(cljs.core.second((enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0 ? enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0() : enchilada.canvas_size.call(null))),cell_size) - (1));
var limit = ((width * height) - (1));
var maze = demo.rm_hull_6857333.generator.create_maze(cljs.core.rand_int,width,height);
enchilada.core.show((enchilada.canvas.cljs$core$IFn$_invoke$arity$0 ? enchilada.canvas.cljs$core$IFn$_invoke$arity$0() : enchilada.canvas.call(null)));

demo.rm_hull_6857333.core.draw_maze(enchilada.ctx,maze,cell_size);

var G__26158 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(draw_cmd));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("path",G__26158)){
demo.rm_hull_6857333.core.create_snake.cljs$core$IFn$_invoke$arity$variadic(enchilada.ctx,maze,demo.rm_hull_6857333.core.draw_snake,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),limit,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),cell_size,new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"erase-color","erase-color",1560278482),"red"], null)], 0));

return (demo.rm_hull_6857333.core.hide_spinner.cljs$core$IFn$_invoke$arity$0 ? demo.rm_hull_6857333.core.hide_spinner.cljs$core$IFn$_invoke$arity$0() : demo.rm_hull_6857333.core.hide_spinner.call(null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("snail",G__26158)){
return demo.rm_hull_6857333.core.create_snake.cljs$core$IFn$_invoke$arity$variadic(enchilada.ctx,maze,demo.rm_hull_6857333.core.animate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),limit,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),cell_size,new cljs.core.Keyword(null,"color","color",1011675173),"#8182AE",new cljs.core.Keyword(null,"erase-color","erase-color",1560278482),"#E2E2F1",new cljs.core.Keyword(null,"snake-length","snake-length",1392741290),(3)], null)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("snake",G__26158)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(demo.rm_hull_6857333.core.create_snake,enchilada.ctx,maze,demo.rm_hull_6857333.core.animate),demo.rm_hull_6857333.core.random_snakes(cell_size,limit,(enchilada.value_of.cljs$core$IFn$_invoke$arity$2 ? enchilada.value_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"count","count",2139924085),(5)) : enchilada.value_of.call(null,new cljs.core.Keyword(null,"count","count",2139924085),(5)))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),G__26158)){
return null;
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26158))));

}
}
}
}
}));

//# sourceMappingURL=demo.rm_hull_6857333.core.js.map
