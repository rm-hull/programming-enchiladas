goog.provide('turtle.renderer.vector');
turtle.renderer.vector.transform = (function turtle$renderer$vector$transform(p__35393){
var vec__35395 = p__35393;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35395,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35395,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35395,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35395,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35395,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35395,(5),null);
return (""+"translate("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)+") scale("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(d)+")");
});
turtle.renderer.vector.d_instr = (function turtle$renderer$vector$d_instr(command){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(turtle.core.move_op_QMARK_(command))?"M":"L"))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(command)))+" ");
});
turtle.renderer.vector.style = (function turtle$renderer$vector$style(command){
return (""+"fill:none;stroke-width:3;stroke:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(command)))+";");
});
turtle.renderer.vector.duplicates = (function turtle$renderer$vector$duplicates(accumulator,next_value){
var last_value = cljs.core.last(accumulator);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_value,next_value)){
return accumulator;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accumulator,next_value);
}
});
turtle.renderer.vector.path = (function turtle$renderer$vector$path(p__35410){
var vec__35411 = p__35410;
var initial = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35411,(0),null);
var commands = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35411,(1),null);
var initial__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.last(initial),new cljs.core.Keyword(null,"move","move",-2110884309),true);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),turtle.renderer.vector.style(initial__$1),new cljs.core.Keyword(null,"d","d",1972142424),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(turtle.renderer.vector.duplicates,cljs.core.PersistentVector.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(turtle.renderer.vector.d_instr,cljs.core.cons(initial__$1,commands))))], null)], null);
});
turtle.renderer.vector.segmenter = (function turtle$renderer$vector$segmenter(data){
return cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__35418_SHARP_){
return cljs.core.contains_QMARK_(p1__35418_SHARP_,new cljs.core.Keyword(null,"color","color",1011675173));
}),data));
});
turtle.renderer.vector.__GT_svg = (function turtle$renderer$vector$__GT_svg(data,p__35428,bounds,matrix){
var vec__35429 = p__35428;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35429,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35429,(1),null);
var v35434 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"xmlns:xlink","xmlns:xlink",-316591054),"http://www.w3.org/1999/xlink",new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"zoomAndPan","zoomAndPan",-449580731),"magnify",new cljs.core.Keyword(null,"preserveAspectRatio","preserveAspectRatio",1832131817),"xMidYMid meet",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"version","version",425292698),"1.0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),turtle.renderer.vector.transform(matrix)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(turtle.renderer.vector.path,turtle.renderer.vector.segmenter(data))], null)], null);
var el__35340__auto__ = hipo.interpreter.create(v35434,null);
hipo.core.set_hiccup_BANG_(el__35340__auto__,v35434);

return el__35340__auto__;
});

//# sourceMappingURL=turtle.renderer.vector.js.map
