goog.provide('demo.rm_hull_6857333.core');
demo.rm_hull_6857333.core.draw_path_segments = (function demo$rm_hull_6857333$core$draw_path_segments(ctx,snake,start,end){
var vec__25706 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(snake,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"size","size",1098693007)], null));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25706,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25706,(1),null);
var cell_size = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(snake,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null));
var offset = (cljs.core.quot(cell_size,(2)) + (1));
var seq__25710_25881 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(snake),start,end));
var chunk__25712_25882 = null;
var count__25713_25883 = (0);
var i__25714_25884 = (0);
while(true){
if((i__25714_25884 < count__25713_25883)){
var p_25885 = chunk__25712_25882.cljs$core$IIndexed$_nth$arity$2(null,i__25714_25884);
var x_25886 = cljs.core.rem(p_25885,w);
var y_25887 = cljs.core.rem(cljs.core.quot(p_25885,w),h);
monet.canvas.line_to(ctx,((x_25886 * cell_size) + offset),((y_25887 * cell_size) + offset));


var G__25888 = seq__25710_25881;
var G__25889 = chunk__25712_25882;
var G__25890 = count__25713_25883;
var G__25891 = (i__25714_25884 + (1));
seq__25710_25881 = G__25888;
chunk__25712_25882 = G__25889;
count__25713_25883 = G__25890;
i__25714_25884 = G__25891;
continue;
} else {
var temp__5825__auto___25892 = cljs.core.seq(seq__25710_25881);
if(temp__5825__auto___25892){
var seq__25710_25893__$1 = temp__5825__auto___25892;
if(cljs.core.chunked_seq_QMARK_(seq__25710_25893__$1)){
var c__5694__auto___25894 = cljs.core.chunk_first(seq__25710_25893__$1);
var G__25895 = cljs.core.chunk_rest(seq__25710_25893__$1);
var G__25896 = c__5694__auto___25894;
var G__25897 = cljs.core.count(c__5694__auto___25894);
var G__25898 = (0);
seq__25710_25881 = G__25895;
chunk__25712_25882 = G__25896;
count__25713_25883 = G__25897;
i__25714_25884 = G__25898;
continue;
} else {
var p_25899 = cljs.core.first(seq__25710_25893__$1);
var x_25900 = cljs.core.rem(p_25899,w);
var y_25901 = cljs.core.rem(cljs.core.quot(p_25899,w),h);
monet.canvas.line_to(ctx,((x_25900 * cell_size) + offset),((y_25901 * cell_size) + offset));


var G__25902 = cljs.core.next(seq__25710_25893__$1);
var G__25903 = null;
var G__25904 = (0);
var G__25905 = (0);
seq__25710_25881 = G__25902;
chunk__25712_25882 = G__25903;
count__25713_25883 = G__25904;
i__25714_25884 = G__25905;
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
var vec__25725 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(maze);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25725,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25725,(1),null);
var seq__25728_25906 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(0)),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(maze)));
var chunk__25730_25907 = null;
var count__25731_25908 = (0);
var i__25732_25909 = (0);
while(true){
if((i__25732_25909 < count__25731_25908)){
var vec__25741_25910 = chunk__25730_25907.cljs$core$IIndexed$_nth$arity$2(null,i__25732_25909);
var p_25911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25741_25910,(0),null);
var walls_25912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25741_25910,(1),null);
var x_25913 = ((cell_size * cljs.core.rem(p_25911,w)) + (1));
var y_25914 = ((cell_size * cljs.core.rem(cljs.core.quot(p_25911,w),h)) + (1));
if(cljs.core.truth_(new cljs.core.Keyword(null,"north","north",651323902).cljs$core$IFn$_invoke$arity$1(walls_25912))){
monet.canvas.line_to(monet.canvas.move_to(ctx,x_25913,y_25914),(x_25913 + cell_size),y_25914);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"west","west",708776677).cljs$core$IFn$_invoke$arity$1(walls_25912))){
monet.canvas.line_to(monet.canvas.move_to(ctx,x_25913,y_25914),x_25913,(y_25914 + cell_size));
} else {
}


var G__25915 = seq__25728_25906;
var G__25916 = chunk__25730_25907;
var G__25917 = count__25731_25908;
var G__25918 = (i__25732_25909 + (1));
seq__25728_25906 = G__25915;
chunk__25730_25907 = G__25916;
count__25731_25908 = G__25917;
i__25732_25909 = G__25918;
continue;
} else {
var temp__5825__auto___25919 = cljs.core.seq(seq__25728_25906);
if(temp__5825__auto___25919){
var seq__25728_25920__$1 = temp__5825__auto___25919;
if(cljs.core.chunked_seq_QMARK_(seq__25728_25920__$1)){
var c__5694__auto___25921 = cljs.core.chunk_first(seq__25728_25920__$1);
var G__25922 = cljs.core.chunk_rest(seq__25728_25920__$1);
var G__25923 = c__5694__auto___25921;
var G__25924 = cljs.core.count(c__5694__auto___25921);
var G__25925 = (0);
seq__25728_25906 = G__25922;
chunk__25730_25907 = G__25923;
count__25731_25908 = G__25924;
i__25732_25909 = G__25925;
continue;
} else {
var vec__25745_25926 = cljs.core.first(seq__25728_25920__$1);
var p_25927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25745_25926,(0),null);
var walls_25928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25745_25926,(1),null);
var x_25929 = ((cell_size * cljs.core.rem(p_25927,w)) + (1));
var y_25930 = ((cell_size * cljs.core.rem(cljs.core.quot(p_25927,w),h)) + (1));
if(cljs.core.truth_(new cljs.core.Keyword(null,"north","north",651323902).cljs$core$IFn$_invoke$arity$1(walls_25928))){
monet.canvas.line_to(monet.canvas.move_to(ctx,x_25929,y_25930),(x_25929 + cell_size),y_25930);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"west","west",708776677).cljs$core$IFn$_invoke$arity$1(walls_25928))){
monet.canvas.line_to(monet.canvas.move_to(ctx,x_25929,y_25930),x_25929,(y_25930 + cell_size));
} else {
}


var G__25931 = cljs.core.next(seq__25728_25920__$1);
var G__25932 = null;
var G__25933 = (0);
var G__25934 = (0);
seq__25728_25906 = G__25931;
chunk__25730_25907 = G__25932;
count__25731_25908 = G__25933;
i__25732_25909 = G__25934;
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
var vec__25755 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(maze);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25755,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25755,(1),null);
return monet.canvas.close_path(monet.canvas.stroke(demo.rm_hull_6857333.core.draw_cells(monet.canvas.line_to(monet.canvas.line_to(monet.canvas.move_to(monet.canvas.begin_path(monet.canvas.stroke_style(monet.canvas.stroke_cap(monet.canvas.stroke_width(ctx,(2)),"square"),"#606060")),(0),((h * cell_size) + (1))),((w * cell_size) + (1)),((h * cell_size) + (1))),((w * cell_size) + (1)),(0)),maze,cell_size)));
});
demo.rm_hull_6857333.core.start_end = (function demo$rm_hull_6857333$core$start_end(snake_attrs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25759_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p1__25759_SHARP_),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(p1__25759_SHARP_)],null));
}),snake_attrs);
});
demo.rm_hull_6857333.core.create_snake = (function demo$rm_hull_6857333$core$create_snake(var_args){
var args__5903__auto__ = [];
var len__5897__auto___25935 = arguments.length;
var i__5898__auto___25936 = (0);
while(true){
if((i__5898__auto___25936 < len__5897__auto___25935)){
args__5903__auto__.push((arguments[i__5898__auto___25936]));

var G__25937 = (i__5898__auto___25936 + (1));
i__5898__auto___25936 = G__25937;
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
var seq__25767 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(solutions)));
var chunk__25769 = null;
var count__25770 = (0);
var i__25771 = (0);
while(true){
if((i__25771 < count__25770)){
var index = chunk__25769.cljs$core$IIndexed$_nth$arity$2(null,i__25771);
var path_25938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(solutions,index);
var attrs_25939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(snake_attrs,index);
var snake_length_25940 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(attrs_25939,new cljs.core.Keyword(null,"snake-length","snake-length",1392741290),cljs.core.count(path_25938));
var G__25847_25941 = ctx;
var G__25848_25942 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(attrs_25939,new cljs.core.Keyword(null,"maze","maze",1753749814),maze,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path","path",-188191168),path_25938,new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),new cljs.core.Keyword(null,"snake-length","snake-length",1392741290),snake_length_25940,new cljs.core.Keyword(null,"limit","limit",-1355822363),(cljs.core.count(path_25938) - snake_length_25940)], 0));
(callback_fn.cljs$core$IFn$_invoke$arity$2 ? callback_fn.cljs$core$IFn$_invoke$arity$2(G__25847_25941,G__25848_25942) : callback_fn.call(null,G__25847_25941,G__25848_25942));


var G__25943 = seq__25767;
var G__25944 = chunk__25769;
var G__25945 = count__25770;
var G__25946 = (i__25771 + (1));
seq__25767 = G__25943;
chunk__25769 = G__25944;
count__25770 = G__25945;
i__25771 = G__25946;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__25767);
if(temp__5825__auto__){
var seq__25767__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25767__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__25767__$1);
var G__25947 = cljs.core.chunk_rest(seq__25767__$1);
var G__25948 = c__5694__auto__;
var G__25949 = cljs.core.count(c__5694__auto__);
var G__25950 = (0);
seq__25767 = G__25947;
chunk__25769 = G__25948;
count__25770 = G__25949;
i__25771 = G__25950;
continue;
} else {
var index = cljs.core.first(seq__25767__$1);
var path_25951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(solutions,index);
var attrs_25952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(snake_attrs,index);
var snake_length_25953 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(attrs_25952,new cljs.core.Keyword(null,"snake-length","snake-length",1392741290),cljs.core.count(path_25951));
var G__25874_25954 = ctx;
var G__25875_25955 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(attrs_25952,new cljs.core.Keyword(null,"maze","maze",1753749814),maze,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path","path",-188191168),path_25951,new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),new cljs.core.Keyword(null,"snake-length","snake-length",1392741290),snake_length_25953,new cljs.core.Keyword(null,"limit","limit",-1355822363),(cljs.core.count(path_25951) - snake_length_25953)], 0));
(callback_fn.cljs$core$IFn$_invoke$arity$2 ? callback_fn.cljs$core$IFn$_invoke$arity$2(G__25874_25954,G__25875_25955) : callback_fn.call(null,G__25874_25954,G__25875_25955));


var G__25956 = cljs.core.next(seq__25767__$1);
var G__25957 = null;
var G__25958 = (0);
var G__25959 = (0);
seq__25767 = G__25956;
chunk__25769 = G__25957;
count__25770 = G__25958;
i__25771 = G__25959;
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
(demo.rm_hull_6857333.core.create_snake.cljs$lang$applyTo = (function (seq25763){
var G__25764 = cljs.core.first(seq25763);
var seq25763__$1 = cljs.core.next(seq25763);
var G__25765 = cljs.core.first(seq25763__$1);
var seq25763__$2 = cljs.core.next(seq25763__$1);
var G__25766 = cljs.core.first(seq25763__$2);
var seq25763__$3 = cljs.core.next(seq25763__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25764,G__25765,G__25766,seq25763__$3);
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
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25876_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"erase-color","erase-color",1560278482),new cljs.core.Keyword(null,"snake-length","snake-length",1392741290)],[cljs.core.rand_int(limit),cljs.core.rand_int(limit),cell_size,p1__25876_SHARP_,"white",(8)]);
}),cljs.core.cycle(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#55B95F","red","#8182AE","#AC85B5","orange","yellow"], null)))));
});
jayq.core.document_ready((function (){
var cell_size = parseInt((enchilada.value_of.cljs$core$IFn$_invoke$arity$2 ? enchilada.value_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),(10)) : enchilada.value_of.call(null,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),(10))));
var draw_cmd = (enchilada.value_of.cljs$core$IFn$_invoke$arity$2 ? enchilada.value_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"draw","draw",1358331674),"snail") : enchilada.value_of.call(null,new cljs.core.Keyword(null,"draw","draw",1358331674),"snail"));
var width = (cljs.core.quot(cljs.core.first((enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0 ? enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0() : enchilada.canvas_size.call(null))),cell_size) - (1));
var height = (cljs.core.quot(cljs.core.second((enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0 ? enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0() : enchilada.canvas_size.call(null))),cell_size) - (1));
var limit = ((width * height) - (1));
var maze = demo.rm_hull_6857333.generator.create_maze(cljs.core.rand_int,width,height);
jayq.core.show(enchilada.canvas);

demo.rm_hull_6857333.core.draw_maze(enchilada.ctx,maze,cell_size);

var G__25877 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(draw_cmd));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("path",G__25877)){
demo.rm_hull_6857333.core.create_snake.cljs$core$IFn$_invoke$arity$variadic(enchilada.ctx,maze,demo.rm_hull_6857333.core.draw_snake,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),limit,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),cell_size,new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"erase-color","erase-color",1560278482),"red"], null)], 0));

return (demo.rm_hull_6857333.core.hide_spinner.cljs$core$IFn$_invoke$arity$0 ? demo.rm_hull_6857333.core.hide_spinner.cljs$core$IFn$_invoke$arity$0() : demo.rm_hull_6857333.core.hide_spinner.call(null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("snail",G__25877)){
return demo.rm_hull_6857333.core.create_snake.cljs$core$IFn$_invoke$arity$variadic(enchilada.ctx,maze,demo.rm_hull_6857333.core.animate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),limit,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),cell_size,new cljs.core.Keyword(null,"color","color",1011675173),"#8182AE",new cljs.core.Keyword(null,"erase-color","erase-color",1560278482),"#E2E2F1",new cljs.core.Keyword(null,"snake-length","snake-length",1392741290),(3)], null)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("snake",G__25877)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(demo.rm_hull_6857333.core.create_snake,enchilada.ctx,maze,demo.rm_hull_6857333.core.animate),demo.rm_hull_6857333.core.random_snakes(cell_size,limit,(enchilada.value_of.cljs$core$IFn$_invoke$arity$2 ? enchilada.value_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"count","count",2139924085),(5)) : enchilada.value_of.call(null,new cljs.core.Keyword(null,"count","count",2139924085),(5)))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),G__25877)){
return null;
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25877))));

}
}
}
}
}));

//# sourceMappingURL=demo.rm_hull_6857333.core.js.map
