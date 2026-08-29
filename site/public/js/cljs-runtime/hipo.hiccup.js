goog.provide('hipo.hiccup');
hipo.hiccup.id_separator = "#";
hipo.hiccup.class_separator = ".";
hipo.hiccup.default_namespaces = new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null);
hipo.hiccup.key__GT_namespace = (function hipo$hiccup$key__GT_namespace(s,m){
if(cljs.core.truth_(s)){
var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(m),s);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(hipo.hiccup.default_namespaces,s);
}
} else {
return null;
}
});
hipo.hiccup.parse_tag_name = (function hipo$hiccup$parse_tag_name(s){
var i = s.indexOf(hipo.hiccup.id_separator);
if((i > (0))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i);
} else {
var j = s.indexOf(hipo.hiccup.class_separator);
if((j > (0))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),j);
} else {
return s;
}
}
});
hipo.hiccup.parse_id = (function hipo$hiccup$parse_id(s){
var i = s.indexOf(hipo.hiccup.id_separator);
if((i > (0))){
var j = s.indexOf(hipo.hiccup.class_separator);
if((j > (0))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(i + (1)),j);
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(i + (1)));
}
} else {
return null;
}
});
hipo.hiccup.parse_classes = (function hipo$hiccup$parse_classes(s){
var i = s.indexOf(hipo.hiccup.class_separator);
if((i > (0))){
var cs = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(i + (1)));
var s__$1 = cs;
while(true){
var i__$1 = s__$1.indexOf(hipo.hiccup.class_separator);
if((i__$1 > (0))){
var G__34289 = s__$1.replace(hipo.hiccup.class_separator," ");
s__$1 = G__34289;
continue;
} else {
return s__$1;
}
break;
}
} else {
return null;
}
});
hipo.hiccup.literal_QMARK_ = (function hipo$hiccup$literal_QMARK_(o){
return ((typeof o === 'string') || (((typeof o === 'number') || (((o === true) || (o === false))))));
});
hipo.hiccup.node = (function hipo$hiccup$node(v){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0));
});
hipo.hiccup.keyns = (function hipo$hiccup$keyns(h){
return cljs.core.namespace(hipo.hiccup.node(h));
});
hipo.hiccup.tag = (function hipo$hiccup$tag(v){
return hipo.hiccup.parse_tag_name(cljs.core.name(hipo.hiccup.node(v)));
});
hipo.hiccup.attributes = (function hipo$hiccup$attributes(v){
if(cljs.core.truth_(v)){
var n = cljs.core.name(hipo.hiccup.node(v));
var id = hipo.hiccup.parse_id(n);
var cs = hipo.hiccup.parse_classes(n);
var m_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core.map_QMARK_(m_QMARK_)){
if(cljs.core.truth_((function (){var and__5160__auto__ = id;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.contains_QMARK_(m_QMARK_,new cljs.core.Keyword(null,"id","id",-1388402092));
} else {
return and__5160__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot define id multiple times",cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core.truth_((function (){var or__5162__auto__ = id;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cs;
}
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m_QMARK_,(cljs.core.truth_(id)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null):null),(cljs.core.truth_(cs)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(m_QMARK_);
if(cljs.core.truth_(temp__5823__auto__)){
var c = temp__5823__auto__;
if(cljs.core.truth_(cs)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cs)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c));
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c));
}
} else {
return cs;
}
})()], null):null)], 0));
} else {
return m_QMARK_;
}
}
} else {
if(cljs.core.truth_((function (){var or__5162__auto__ = id;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cs;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),cs], null);
} else {
return null;
}
}
} else {
return null;
}
});
hipo.hiccup.children = (function hipo$hiccup$children(v){
var i = ((cljs.core.map_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null)))?(2):(1));
if((cljs.core.count(v) > i)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,i);
} else {
return null;
}
});
hipo.hiccup.flattened_QMARK_ = (function hipo$hiccup$flattened_QMARK_(v){
if((((v == null)) || (cljs.core.vector_QMARK_(v)))){
} else {
throw (new Error("Assert failed: (or (nil? v) (vector? v))"));
}

if(cljs.core.empty_QMARK_(v)){
return true;
} else {
var c = (cljs.core.count(v) - (1));
var i = (0);
while(true){
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,i);
if(((hipo.hiccup.literal_QMARK_(o)) || (cljs.core.vector_QMARK_(o)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,i)){
return true;
} else {
var G__34290 = (i + (1));
i = G__34290;
continue;
}
} else {
return false;
}
break;
}
}
});

/**
* @constructor
*/
hipo.hiccup.Sentinel = (function (){
});

(hipo.hiccup.Sentinel.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(hipo.hiccup.Sentinel.cljs$lang$type = true);

(hipo.hiccup.Sentinel.cljs$lang$ctorStr = "hipo.hiccup/Sentinel");

(hipo.hiccup.Sentinel.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"hipo.hiccup/Sentinel");
}));

/**
 * Positional factory function for hipo.hiccup/Sentinel.
 */
hipo.hiccup.__GT_Sentinel = (function hipo$hiccup$__GT_Sentinel(){
return (new hipo.hiccup.Sentinel());
});

hipo.hiccup.sentinel = (new hipo.hiccup.Sentinel());
hipo.hiccup.conjs_BANG_ = (function hipo$hiccup$conjs_BANG_(v,s){
while(true){
if(cljs.core.seq(s)){
var G__34291 = (function (){var f = cljs.core.first(s);
if(((hipo.hiccup.literal_QMARK_(f)) || (cljs.core.vector_QMARK_(f)))){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,f);
} else {
return (hipo.hiccup.conjs_BANG_.cljs$core$IFn$_invoke$arity$2 ? hipo.hiccup.conjs_BANG_.cljs$core$IFn$_invoke$arity$2(v,f) : hipo.hiccup.conjs_BANG_.call(null,v,f));
}
})();
var G__34292 = cljs.core.rest(s);
v = G__34291;
s = G__34292;
continue;
} else {
return v;
}
break;
}
});
hipo.hiccup.flatten_children = (function hipo$hiccup$flatten_children(v){
if((((v == null)) || (cljs.core.vector_QMARK_(v)))){
} else {
throw (new Error("Assert failed: (or (nil? v) (vector? v))"));
}

var _PERCENT_ = ((hipo.hiccup.flattened_QMARK_(v))?v:(function (){var acc = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var v__$1 = v;
while(true){
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v__$1,(0),hipo.hiccup.sentinel);
if((hipo.hiccup.sentinel === f)){
return cljs.core.persistent_BANG_(acc);
} else {
var G__34293 = ((cljs.core.seq_QMARK_(f))?hipo.hiccup.conjs_BANG_(acc,f):(((!((f == null))))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,f):acc
));
var G__34294 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v__$1,(1));
acc = G__34293;
v__$1 = G__34294;
continue;
}
break;
}
})());
if((((v == null)) || (cljs.core.vector_QMARK_(v)))){
} else {
throw (new Error("Assert failed: (or (nil? v) (vector? v))"));
}

return _PERCENT_;
});
hipo.hiccup.listener_name_QMARK_ = (function hipo$hiccup$listener_name_QMARK_(s){
return ((0) === s.indexOf("on-"));
});
hipo.hiccup.listener_name__GT_event_name = (function hipo$hiccup$listener_name__GT_event_name(s){
if(hipo.hiccup.listener_name_QMARK_(s)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(3));
} else {
return null;
}
});
hipo.hiccup.classes = (function hipo$hiccup$classes(s){
var s__$1 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,s);
if((!(cljs.core.empty_QMARK_(s__$1)))){
return clojure.string.trim(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",s__$1));
} else {
return null;
}
});

//# sourceMappingURL=hipo.hiccup.js.map
