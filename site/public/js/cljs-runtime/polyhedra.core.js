goog.provide('polyhedra.core');
polyhedra.core.parse_float = (function polyhedra$core$parse_float(s){
return parseFloat(s);
});
/**
 * Parses a netlib value: a value consists of a floating point number
 * optionally followed by an expression enclosed by '[]'.  The expression
 * is the exact value represented in bc(1) code. Note that this
 * implementation currently ignores the expression.
 */
polyhedra.core.value_spec = (function polyhedra$core$value_spec(reader){
var value = dataview.protocols.read_utf8_string(reader,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [" ",null,"\n",null,"[",null], null), null));
var delimiter_pos = (cljs.core.count(value) - (1));
var delimiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(value,delimiter_pos);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(delimiter,"[")){
dataview.protocols.read_utf8_string(reader,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["]",null], null), null));

dataview.protocols.read_utf8_string(reader,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"\n",null], null), null));
} else {
}

return polyhedra.core.parse_float(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),delimiter_pos));
});
polyhedra.core.keyword_spec = (function polyhedra$core$keyword_spec(reader){
var value = dataview.protocols.read_utf8_string(reader,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null));
var offset = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(value,(0)),":"))?(1):(0));
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,offset,(cljs.core.count(value) - (1))));
});
polyhedra.core.keyvalue_spec = (function polyhedra$core$keyvalue_spec(reader,kword){
var kw = polyhedra.core.keyword_spec(reader);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kw,kword)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(kword)+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(kw)))+"\n"+"(= kw kword)")));
}

return cljs.core.PersistentArrayMap.createAsIfByAssoc([kw,clojure.string.trim(dataview.protocols.read_utf8_string(reader,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)))]);
});
polyhedra.core.point_spec = (function polyhedra$core$point_spec(reader){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wireframes.transform.point,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((3),(function (){
return polyhedra.core.value_spec(reader);
}))));
});
polyhedra.core.number_list_spec = (function polyhedra$core$number_list_spec(reader){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,clojure.string.split.cljs$core$IFn$_invoke$arity$2(dataview.protocols.read_utf8_string(reader,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),/ /));
});
polyhedra.core.count_spec = (function polyhedra$core$count_spec(reader){
return cljs.core.first(polyhedra.core.number_list_spec(reader));
});
polyhedra.core.vertices_spec = (function polyhedra$core$vertices_spec(reader){
var kw = polyhedra.core.keyword_spec(reader);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kw,new cljs.core.Keyword(null,"vertices","vertices",2008905731))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Expected :vertices, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(kw)))+"\n"+"(= kw :vertices)")));
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.vec(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(polyhedra.core.count_spec(reader),(function (){
return polyhedra.core.point_spec(reader);
}))))], null);
});
polyhedra.core.face_spec = (function polyhedra$core$face_spec(reader){
var vec__35366 = polyhedra.core.number_list_spec(reader);
var seq__35367 = cljs.core.seq(vec__35366);
var first__35368 = cljs.core.first(seq__35367);
var seq__35367__$1 = cljs.core.next(seq__35367);
var n = first__35368;
var faces = seq__35367__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.count(faces))){
} else {
throw (new Error((""+"Assert failed: "+"Face count does not match actual"+"\n"+"(= n (count faces))")));
}

return cljs.core.vec(faces);
});
polyhedra.core.polygons_spec = (function polyhedra$core$polygons_spec(reader){
var kw = polyhedra.core.keyword_spec(reader);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kw,new cljs.core.Keyword(null,"solid","solid",-2023773691))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Expected :solid, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(kw)))+"\n"+"(= kw :solid)")));
}

var num_faces = polyhedra.core.count_spec(reader);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"polygons","polygons",-266433925),cljs.core.vec(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(num_faces,(function (){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"vertices","vertices",2008905731)],[polyhedra.core.face_spec(reader)]);
}))))], null);
});
polyhedra.core.shape_spec = (function polyhedra$core$shape_spec(reader){
var spec = new cljs.core.PersistentArrayMap(null, 4, [":name",(function (p1__35369_SHARP_){
return polyhedra.core.keyvalue_spec(p1__35369_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177));
}),":number",(function (p1__35370_SHARP_){
return polyhedra.core.keyvalue_spec(p1__35370_SHARP_,new cljs.core.Keyword(null,"number","number",1570378438));
}),":solid",polyhedra.core.polygons_spec,":vertices",polyhedra.core.vertices_spec], null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5649__auto__ = (function polyhedra$core$shape_spec_$_iter__35371(s__35372){
return (new cljs.core.LazySeq(null,(function (){
var s__35372__$1 = s__35372;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__35372__$1);
if(temp__5825__auto__){
var s__35372__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35372__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__35372__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__35374 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__35373 = (0);
while(true){
if((i__35373 < size__5648__auto__)){
var vec__35375 = cljs.core._nth(c__5647__auto__,i__35373);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35375,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35375,(1),null);
if(cljs.core.truth_(dataview.protocols.find_BANG_(reader,k))){
var v = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(reader) : f.call(null,reader));
cljs.core.chunk_append(b__35374,(function (){
dataview.protocols.rewind_BANG_(reader);

return v;
})()
);

var G__35414 = (i__35373 + (1));
i__35373 = G__35414;
continue;
} else {
var G__35416 = (i__35373 + (1));
i__35373 = G__35416;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35374),polyhedra$core$shape_spec_$_iter__35371(cljs.core.chunk_rest(s__35372__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35374),null);
}
} else {
var vec__35380 = cljs.core.first(s__35372__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35380,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35380,(1),null);
if(cljs.core.truth_(dataview.protocols.find_BANG_(reader,k))){
var v = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(reader) : f.call(null,reader));
return cljs.core.cons((function (){
dataview.protocols.rewind_BANG_(reader);

return v;
})()
,polyhedra$core$shape_spec_$_iter__35371(cljs.core.rest(s__35372__$2)));
} else {
var G__35419 = cljs.core.rest(s__35372__$2);
s__35372__$1 = G__35419;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(spec);
})()));
});

//# sourceMappingURL=polyhedra.core.js.map
