goog.provide('hipo.interpreter');
hipo.interpreter.set_attribute_BANG_ = (function hipo$interpreter$set_attribute_BANG_(el,ns,tag,sok,ov,nv,p__34346){
var map__34347 = p__34346;
var map__34347__$1 = cljs.core.__destructure_map(map__34347);
var m = map__34347__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34347__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if((!((ov === nv)))){
var temp__5823__auto__ = hipo.hiccup.listener_name__GT_event_name(cljs.core.name(sok));
if(cljs.core.truth_(temp__5823__auto__)){
var en = temp__5823__auto__;
if((!(((cljs.core.map_QMARK_(ov)) && (((cljs.core.map_QMARK_(nv)) && ((new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ov) === new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nv))))))))){
var b__34277__auto__ = (function (){
var hn = (""+"hipo_listener_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(en));
var temp__5823__auto___34724__$1 = (el[hn]);
if(cljs.core.truth_(temp__5823__auto___34724__$1)){
var l_34725 = temp__5823__auto___34724__$1;
el.removeEventListener(en,l_34725);
} else {
}

var temp__5825__auto__ = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(nv);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return nv;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var nv__$1 = temp__5825__auto__;
el.addEventListener(en,nv__$1);

return (el[hn] = nv__$1);
} else {
return null;
}
});
var v__34278__auto__ = interceptors;
if(((cljs.core.not(v__34278__auto__)) || (cljs.core.empty_QMARK_(v__34278__auto__)))){
return b__34277__auto__();
} else {
return hipo.interceptor.call(b__34277__auto__,v__34278__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-handler","update-handler",1389859106):new cljs.core.Keyword(null,"remove-handler","remove-handler",389960218)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)], 0)));
}
} else {
return null;
}
} else {
var b__34277__auto__ = (function (){
return hipo.attribute.set_value_BANG_(el,m,ns,tag,sok,ov,nv);
});
var v__34278__auto__ = interceptors;
if(((cljs.core.not(v__34278__auto__)) || (cljs.core.empty_QMARK_(v__34278__auto__)))){
return b__34277__auto__();
} else {
return hipo.interceptor.call(b__34277__auto__,v__34278__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530):new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)], 0)));
}
}
} else {
return null;
}
});
hipo.interpreter.append_children_BANG_ = (function hipo$interpreter$append_children_BANG_(el,v,m){
if(cljs.core.vector_QMARK_(v)){
} else {
throw (new Error("Assert failed: (vector? v)"));
}

var v__$1 = hipo.hiccup.flatten_children(v);
while(true){
if(cljs.core.empty_QMARK_(v__$1)){
return null;
} else {
var temp__5823__auto___34726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__$1,(0));
if(cljs.core.truth_(temp__5823__auto___34726)){
var h_34727 = temp__5823__auto___34726;
el.appendChild((hipo.interpreter.create_child.cljs$core$IFn$_invoke$arity$2 ? hipo.interpreter.create_child.cljs$core$IFn$_invoke$arity$2(h_34727,m) : hipo.interpreter.create_child.call(null,h_34727,m)));
} else {
}

var G__34728 = cljs.core.rest(v__$1);
v__$1 = G__34728;
continue;
}
break;
}
});
hipo.interpreter.default_create_element = (function hipo$interpreter$default_create_element(ns,tag,attrs,m){
var el = hipo.dom.create_element(ns,tag);
var seq__34349_34729 = cljs.core.seq(attrs);
var chunk__34350_34730 = null;
var count__34351_34731 = (0);
var i__34352_34732 = (0);
while(true){
if((i__34352_34732 < count__34351_34731)){
var vec__34364_34733 = chunk__34350_34730.cljs$core$IIndexed$_nth$arity$2(null,i__34352_34732);
var sok_34734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34364_34733,(0),null);
var v_34735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34364_34733,(1),null);
if(cljs.core.truth_(v_34735)){
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok_34734,null,v_34735,m);
} else {
}


var G__34736 = seq__34349_34729;
var G__34737 = chunk__34350_34730;
var G__34738 = count__34351_34731;
var G__34739 = (i__34352_34732 + (1));
seq__34349_34729 = G__34736;
chunk__34350_34730 = G__34737;
count__34351_34731 = G__34738;
i__34352_34732 = G__34739;
continue;
} else {
var temp__5825__auto___34740 = cljs.core.seq(seq__34349_34729);
if(temp__5825__auto___34740){
var seq__34349_34741__$1 = temp__5825__auto___34740;
if(cljs.core.chunked_seq_QMARK_(seq__34349_34741__$1)){
var c__5694__auto___34742 = cljs.core.chunk_first(seq__34349_34741__$1);
var G__34743 = cljs.core.chunk_rest(seq__34349_34741__$1);
var G__34744 = c__5694__auto___34742;
var G__34745 = cljs.core.count(c__5694__auto___34742);
var G__34746 = (0);
seq__34349_34729 = G__34743;
chunk__34350_34730 = G__34744;
count__34351_34731 = G__34745;
i__34352_34732 = G__34746;
continue;
} else {
var vec__34370_34747 = cljs.core.first(seq__34349_34741__$1);
var sok_34748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34370_34747,(0),null);
var v_34749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34370_34747,(1),null);
if(cljs.core.truth_(v_34749)){
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok_34748,null,v_34749,m);
} else {
}


var G__34750 = cljs.core.next(seq__34349_34741__$1);
var G__34751 = null;
var G__34752 = (0);
var G__34753 = (0);
seq__34349_34729 = G__34750;
chunk__34350_34730 = G__34751;
count__34351_34731 = G__34752;
i__34352_34732 = G__34753;
continue;
}
} else {
}
}
break;
}

return el;
});
hipo.interpreter.create_element = (function hipo$interpreter$create_element(ns,tag,attrs,m){
var temp__5823__auto__ = new cljs.core.Keyword(null,"create-element-fn","create-element-fn",827380427).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(ns,tag,attrs,m) : f.call(null,ns,tag,attrs,m));
} else {
return hipo.interpreter.default_create_element(ns,tag,attrs,m);
}
});
hipo.interpreter.create_vector = (function hipo$interpreter$create_vector(h,m){
if(cljs.core.vector_QMARK_(h)){
} else {
throw (new Error("Assert failed: (vector? h)"));
}

var key = hipo.hiccup.keyns(h);
var tag = hipo.hiccup.tag(h);
var attrs = hipo.hiccup.attributes(h);
var children = hipo.hiccup.children(h);
var el = hipo.interpreter.create_element(hipo.hiccup.key__GT_namespace(key,m),tag,attrs,m);
if(cljs.core.truth_(children)){
hipo.interpreter.append_children_BANG_(el,children,m);
} else {
}

return el;
});
hipo.interpreter.create_child = (function hipo$interpreter$create_child(o,m){
if(((hipo.hiccup.literal_QMARK_(o)) || (cljs.core.vector_QMARK_(o)))){
} else {
throw (new Error("Assert failed: (or (hic/literal? o) (vector? o))"));
}

if(hipo.hiccup.literal_QMARK_(o)){
return document.createTextNode(o);
} else {
return hipo.interpreter.create_vector(o,m);
}
});
hipo.interpreter.append_to_parent = (function hipo$interpreter$append_to_parent(el,o,m){
if(cljs.core.seq_QMARK_(o)){
return hipo.interpreter.append_children_BANG_(el,cljs.core.vec(o),m);
} else {
if((!((o == null)))){
return el.appendChild(hipo.interpreter.create_child(o,m));
} else {
return null;
}
}
});
hipo.interpreter.create = (function hipo$interpreter$create(o,m){
if(cljs.core.seq_QMARK_(o)){
var f = document.createDocumentFragment();
hipo.interpreter.append_children_BANG_(f,cljs.core.vec(o),m);

return f;
} else {
if((!((o == null)))){
return hipo.interpreter.create_child(o,m);
} else {
return null;
}
}
});
hipo.interpreter.reconciliate_attributes_BANG_ = (function hipo$interpreter$reconciliate_attributes_BANG_(el,ns,tag,om__$1,nm,m){
var seq__34396_34754 = cljs.core.seq(nm);
var chunk__34398_34755 = null;
var count__34399_34756 = (0);
var i__34400_34757 = (0);
while(true){
if((i__34400_34757 < count__34399_34756)){
var vec__34420_34758 = chunk__34398_34755.cljs$core$IIndexed$_nth$arity$2(null,i__34400_34757);
var sok_34759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34420_34758,(0),null);
var nv_34760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34420_34758,(1),null);
var ov_34761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om__$1,sok_34759);
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok_34759,ov_34761,nv_34760,m);


var G__34762 = seq__34396_34754;
var G__34763 = chunk__34398_34755;
var G__34764 = count__34399_34756;
var G__34765 = (i__34400_34757 + (1));
seq__34396_34754 = G__34762;
chunk__34398_34755 = G__34763;
count__34399_34756 = G__34764;
i__34400_34757 = G__34765;
continue;
} else {
var temp__5825__auto___34766 = cljs.core.seq(seq__34396_34754);
if(temp__5825__auto___34766){
var seq__34396_34767__$1 = temp__5825__auto___34766;
if(cljs.core.chunked_seq_QMARK_(seq__34396_34767__$1)){
var c__5694__auto___34768 = cljs.core.chunk_first(seq__34396_34767__$1);
var G__34769 = cljs.core.chunk_rest(seq__34396_34767__$1);
var G__34770 = c__5694__auto___34768;
var G__34771 = cljs.core.count(c__5694__auto___34768);
var G__34772 = (0);
seq__34396_34754 = G__34769;
chunk__34398_34755 = G__34770;
count__34399_34756 = G__34771;
i__34400_34757 = G__34772;
continue;
} else {
var vec__34424_34773 = cljs.core.first(seq__34396_34767__$1);
var sok_34774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34424_34773,(0),null);
var nv_34775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34424_34773,(1),null);
var ov_34776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om__$1,sok_34774);
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok_34774,ov_34776,nv_34775,m);


var G__34777 = cljs.core.next(seq__34396_34767__$1);
var G__34778 = null;
var G__34779 = (0);
var G__34780 = (0);
seq__34396_34754 = G__34777;
chunk__34398_34755 = G__34778;
count__34399_34756 = G__34779;
i__34400_34757 = G__34780;
continue;
}
} else {
}
}
break;
}

var seq__34427 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(om__$1)),cljs.core.set(cljs.core.keys(nm))));
var chunk__34428 = null;
var count__34429 = (0);
var i__34430 = (0);
while(true){
if((i__34430 < count__34429)){
var sok = chunk__34428.cljs$core$IIndexed$_nth$arity$2(null,i__34430);
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok,cljs.core.get.cljs$core$IFn$_invoke$arity$2(om__$1,sok),null,m);


var G__34781 = seq__34427;
var G__34782 = chunk__34428;
var G__34783 = count__34429;
var G__34784 = (i__34430 + (1));
seq__34427 = G__34781;
chunk__34428 = G__34782;
count__34429 = G__34783;
i__34430 = G__34784;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__34427);
if(temp__5825__auto__){
var seq__34427__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34427__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__34427__$1);
var G__34786 = cljs.core.chunk_rest(seq__34427__$1);
var G__34787 = c__5694__auto__;
var G__34788 = cljs.core.count(c__5694__auto__);
var G__34789 = (0);
seq__34427 = G__34786;
chunk__34428 = G__34787;
count__34429 = G__34788;
i__34430 = G__34789;
continue;
} else {
var sok = cljs.core.first(seq__34427__$1);
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok,cljs.core.get.cljs$core$IFn$_invoke$arity$2(om__$1,sok),null,m);


var G__34791 = cljs.core.next(seq__34427__$1);
var G__34792 = null;
var G__34793 = (0);
var G__34794 = (0);
seq__34427 = G__34791;
chunk__34428 = G__34792;
count__34429 = G__34793;
i__34430 = G__34794;
continue;
}
} else {
return null;
}
}
break;
}
});
hipo.interpreter.child_key = (function hipo$interpreter$child_key(h){
return new cljs.core.Keyword("hipo","key","hipo/key",-1519246363).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(h));
});
hipo.interpreter.keyed_children__GT_indexed_map = (function hipo$interpreter$keyed_children__GT_indexed_map(v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5649__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__34442(s__34443){
return (new cljs.core.LazySeq(null,(function (){
var s__34443__$1 = s__34443;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__34443__$1);
if(temp__5825__auto__){
var s__34443__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34443__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__34443__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__34445 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__34444 = (0);
while(true){
if((i__34444 < size__5648__auto__)){
var ih = cljs.core._nth(c__5647__auto__,i__34444);
cljs.core.chunk_append(b__34445,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ih,(1))),ih], null));

var G__34795 = (i__34444 + (1));
i__34444 = G__34795;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34445),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__34442(cljs.core.chunk_rest(s__34443__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34445),null);
}
} else {
var ih = cljs.core.first(s__34443__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__34442(cljs.core.rest(s__34443__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,itm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,itm], null);
}),v));
})());
});
/**
 * Reconciliate a vector of children based on their associated key.
 */
hipo.interpreter.reconciliate_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_keyed_children_BANG_(el,och,nch,p__34488){
var map__34490 = p__34488;
var map__34490__$1 = cljs.core.__destructure_map(map__34490);
var m = map__34490__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34490__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var om__$1 = hipo.interpreter.keyed_children__GT_indexed_map(och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map(nch);
var cs = hipo.dom.children.cljs$core$IFn$_invoke$arity$2(el,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(nm)),cljs.core.set(cljs.core.keys(om__$1)))));
var seq__34496_34796 = cljs.core.seq(nm);
var chunk__34497_34797 = null;
var count__34498_34798 = (0);
var i__34499_34799 = (0);
while(true){
if((i__34499_34799 < count__34498_34798)){
var vec__34533_34800 = chunk__34497_34797.cljs$core$IIndexed$_nth$arity$2(null,i__34499_34799);
var i_34801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34533_34800,(0),null);
var vec__34536_34802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34533_34800,(1),null);
var ii_34803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34536_34802,(0),null);
var h_34804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34536_34802,(1),null);
var temp__5823__auto___34805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om__$1,i_34801);
if(cljs.core.truth_(temp__5823__auto___34805)){
var vec__34543_34806 = temp__5823__auto___34805;
var iii_34807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34543_34806,(0),null);
var oh_34808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34543_34806,(1),null);
var cel_34809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cs,iii_34807);
if((ii_34803 === iii_34807)){
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(cel_34809,oh_34808,h_34804,m) : hipo.interpreter.reconciliate_BANG_.call(null,cel_34809,oh_34808,h_34804,m));
} else {
var b__34277__auto___34810 = ((function (seq__34496_34796,chunk__34497_34797,count__34498_34798,i__34499_34799,cel_34809,vec__34543_34806,iii_34807,oh_34808,temp__5823__auto___34805,vec__34533_34800,i_34801,vec__34536_34802,ii_34803,h_34804,om__$1,nm,cs,map__34490,map__34490__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_34809);
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(ncel,oh_34808,h_34804,m) : hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_34808,h_34804,m));

return hipo.dom.insert_child_BANG_(el,ii_34803,ncel);
});})(seq__34496_34796,chunk__34497_34797,count__34498_34798,i__34499_34799,cel_34809,vec__34543_34806,iii_34807,oh_34808,temp__5823__auto___34805,vec__34533_34800,i_34801,vec__34536_34802,ii_34803,h_34804,om__$1,nm,cs,map__34490,map__34490__$1,m,interceptors))
;
var v__34278__auto___34811 = interceptors;
if(((cljs.core.not(v__34278__auto___34811)) || (cljs.core.empty_QMARK_(v__34278__auto___34811)))){
b__34277__auto___34810();
} else {
hipo.interceptor.call(b__34277__auto___34810,v__34278__auto___34811,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_34804,new cljs.core.Keyword(null,"index","index",-1531685915),ii_34803], null));
}
}
} else {
var b__34277__auto___34812 = ((function (seq__34496_34796,chunk__34497_34797,count__34498_34798,i__34499_34799,temp__5823__auto___34805,vec__34533_34800,i_34801,vec__34536_34802,ii_34803,h_34804,om__$1,nm,cs,map__34490,map__34490__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_(el,ii_34803,hipo.interpreter.create_child(h_34804,m));
});})(seq__34496_34796,chunk__34497_34797,count__34498_34798,i__34499_34799,temp__5823__auto___34805,vec__34533_34800,i_34801,vec__34536_34802,ii_34803,h_34804,om__$1,nm,cs,map__34490,map__34490__$1,m,interceptors))
;
var v__34278__auto___34813 = interceptors;
if(((cljs.core.not(v__34278__auto___34813)) || (cljs.core.empty_QMARK_(v__34278__auto___34813)))){
b__34277__auto___34812();
} else {
hipo.interceptor.call(b__34277__auto___34812,v__34278__auto___34813,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_34804,new cljs.core.Keyword(null,"index","index",-1531685915),ii_34803], null));
}
}


var G__34815 = seq__34496_34796;
var G__34816 = chunk__34497_34797;
var G__34817 = count__34498_34798;
var G__34818 = (i__34499_34799 + (1));
seq__34496_34796 = G__34815;
chunk__34497_34797 = G__34816;
count__34498_34798 = G__34817;
i__34499_34799 = G__34818;
continue;
} else {
var temp__5825__auto___34819 = cljs.core.seq(seq__34496_34796);
if(temp__5825__auto___34819){
var seq__34496_34821__$1 = temp__5825__auto___34819;
if(cljs.core.chunked_seq_QMARK_(seq__34496_34821__$1)){
var c__5694__auto___34822 = cljs.core.chunk_first(seq__34496_34821__$1);
var G__34823 = cljs.core.chunk_rest(seq__34496_34821__$1);
var G__34824 = c__5694__auto___34822;
var G__34825 = cljs.core.count(c__5694__auto___34822);
var G__34826 = (0);
seq__34496_34796 = G__34823;
chunk__34497_34797 = G__34824;
count__34498_34798 = G__34825;
i__34499_34799 = G__34826;
continue;
} else {
var vec__34586_34827 = cljs.core.first(seq__34496_34821__$1);
var i_34828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34586_34827,(0),null);
var vec__34589_34829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34586_34827,(1),null);
var ii_34830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34589_34829,(0),null);
var h_34831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34589_34829,(1),null);
var temp__5823__auto___34832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om__$1,i_34828);
if(cljs.core.truth_(temp__5823__auto___34832)){
var vec__34600_34833 = temp__5823__auto___34832;
var iii_34834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34600_34833,(0),null);
var oh_34835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34600_34833,(1),null);
var cel_34836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cs,iii_34834);
if((ii_34830 === iii_34834)){
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(cel_34836,oh_34835,h_34831,m) : hipo.interpreter.reconciliate_BANG_.call(null,cel_34836,oh_34835,h_34831,m));
} else {
var b__34277__auto___34837 = ((function (seq__34496_34796,chunk__34497_34797,count__34498_34798,i__34499_34799,cel_34836,vec__34600_34833,iii_34834,oh_34835,temp__5823__auto___34832,vec__34586_34827,i_34828,vec__34589_34829,ii_34830,h_34831,seq__34496_34821__$1,temp__5825__auto___34819,om__$1,nm,cs,map__34490,map__34490__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_34836);
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(ncel,oh_34835,h_34831,m) : hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_34835,h_34831,m));

return hipo.dom.insert_child_BANG_(el,ii_34830,ncel);
});})(seq__34496_34796,chunk__34497_34797,count__34498_34798,i__34499_34799,cel_34836,vec__34600_34833,iii_34834,oh_34835,temp__5823__auto___34832,vec__34586_34827,i_34828,vec__34589_34829,ii_34830,h_34831,seq__34496_34821__$1,temp__5825__auto___34819,om__$1,nm,cs,map__34490,map__34490__$1,m,interceptors))
;
var v__34278__auto___34838 = interceptors;
if(((cljs.core.not(v__34278__auto___34838)) || (cljs.core.empty_QMARK_(v__34278__auto___34838)))){
b__34277__auto___34837();
} else {
hipo.interceptor.call(b__34277__auto___34837,v__34278__auto___34838,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_34831,new cljs.core.Keyword(null,"index","index",-1531685915),ii_34830], null));
}
}
} else {
var b__34277__auto___34839 = ((function (seq__34496_34796,chunk__34497_34797,count__34498_34798,i__34499_34799,temp__5823__auto___34832,vec__34586_34827,i_34828,vec__34589_34829,ii_34830,h_34831,seq__34496_34821__$1,temp__5825__auto___34819,om__$1,nm,cs,map__34490,map__34490__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_(el,ii_34830,hipo.interpreter.create_child(h_34831,m));
});})(seq__34496_34796,chunk__34497_34797,count__34498_34798,i__34499_34799,temp__5823__auto___34832,vec__34586_34827,i_34828,vec__34589_34829,ii_34830,h_34831,seq__34496_34821__$1,temp__5825__auto___34819,om__$1,nm,cs,map__34490,map__34490__$1,m,interceptors))
;
var v__34278__auto___34840 = interceptors;
if(((cljs.core.not(v__34278__auto___34840)) || (cljs.core.empty_QMARK_(v__34278__auto___34840)))){
b__34277__auto___34839();
} else {
hipo.interceptor.call(b__34277__auto___34839,v__34278__auto___34840,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_34831,new cljs.core.Keyword(null,"index","index",-1531685915),ii_34830], null));
}
}


var G__34841 = cljs.core.next(seq__34496_34821__$1);
var G__34842 = null;
var G__34843 = (0);
var G__34844 = (0);
seq__34496_34796 = G__34841;
chunk__34497_34797 = G__34842;
count__34498_34798 = G__34843;
i__34499_34799 = G__34844;
continue;
}
} else {
}
}
break;
}

var d = cljs.core.count(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(om__$1)),cljs.core.set(cljs.core.keys(nm))));
if((d > (0))){
var b__34277__auto__ = (function (){
return hipo.dom.remove_trailing_children_BANG_(el,d);
});
var v__34278__auto__ = interceptors;
if(((cljs.core.not(v__34278__auto__)) || (cljs.core.empty_QMARK_(v__34278__auto__)))){
return b__34277__auto__();
} else {
return hipo.interceptor.call(b__34277__auto__,v__34278__auto__,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
return null;
}
});
hipo.interpreter.reconciliate_non_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_non_keyed_children_BANG_(el,och,nch,p__34679){
var map__34680 = p__34679;
var map__34680__$1 = cljs.core.__destructure_map(map__34680);
var m = map__34680__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34680__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var oc = cljs.core.count(och);
var nc = cljs.core.count(nch);
var d = (oc - nc);
if((d > (0))){
var b__34277__auto___34845 = (function (){
return hipo.dom.remove_trailing_children_BANG_(el,d);
});
var v__34278__auto___34846 = interceptors;
if(((cljs.core.not(v__34278__auto___34846)) || (cljs.core.empty_QMARK_(v__34278__auto___34846)))){
b__34277__auto___34845();
} else {
hipo.interceptor.call(b__34277__auto___34845,v__34278__auto___34846,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
}

var n__5762__auto___34847 = cljs.core.min.cljs$core$IFn$_invoke$arity$2(oc,nc);
var i_34848 = (0);
while(true){
if((i_34848 < n__5762__auto___34847)){
var ov_34849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(och,i_34848);
var nv_34850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nch,i_34848);
if((!((((ov_34849 == null)) && ((nv_34850 == null)))))){
if((ov_34849 == null)){
var b__34277__auto___34851 = ((function (i_34848,ov_34849,nv_34850,n__5762__auto___34847,oc,nc,d,map__34680,map__34680__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_(el,i_34848,hipo.interpreter.create_child(nv_34850,m));
});})(i_34848,ov_34849,nv_34850,n__5762__auto___34847,oc,nc,d,map__34680,map__34680__$1,m,interceptors))
;
var v__34278__auto___34852 = interceptors;
if(((cljs.core.not(v__34278__auto___34852)) || (cljs.core.empty_QMARK_(v__34278__auto___34852)))){
b__34277__auto___34851();
} else {
hipo.interceptor.call(b__34277__auto___34851,v__34278__auto___34852,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nv_34850,new cljs.core.Keyword(null,"index","index",-1531685915),i_34848], null));
}
} else {
if((nv_34850 == null)){
var b__34277__auto___34853 = ((function (i_34848,ov_34849,nv_34850,n__5762__auto___34847,oc,nc,d,map__34680,map__34680__$1,m,interceptors){
return (function (){
return hipo.dom.remove_child_BANG_(el,i_34848);
});})(i_34848,ov_34849,nv_34850,n__5762__auto___34847,oc,nc,d,map__34680,map__34680__$1,m,interceptors))
;
var v__34278__auto___34854 = interceptors;
if(((cljs.core.not(v__34278__auto___34854)) || (cljs.core.empty_QMARK_(v__34278__auto___34854)))){
b__34277__auto___34853();
} else {
hipo.interceptor.call(b__34277__auto___34853,v__34278__auto___34854,new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"index","index",-1531685915),i_34848], null));
}
} else {
var temp__5823__auto___34855 = hipo.dom.child(el,i_34848);
if(cljs.core.truth_(temp__5823__auto___34855)){
var cel_34856 = temp__5823__auto___34855;
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(cel_34856,ov_34849,nv_34850,m) : hipo.interpreter.reconciliate_BANG_.call(null,cel_34856,ov_34849,nv_34850,m));
} else {
}

}
}
} else {
}

var G__34857 = (i_34848 + (1));
i_34848 = G__34857;
continue;
} else {
}
break;
}

if((d < (0))){
if(((-1) === d)){
var temp__5823__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nch,oc);
if(cljs.core.truth_(temp__5823__auto__)){
var h = temp__5823__auto__;
var b__34277__auto__ = (function (){
return el.appendChild(hipo.interpreter.create_child(h,m));
});
var v__34278__auto__ = interceptors;
if(((cljs.core.not(v__34278__auto__)) || (cljs.core.empty_QMARK_(v__34278__auto__)))){
return b__34277__auto__();
} else {
return hipo.interceptor.call(b__34277__auto__,v__34278__auto__,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
}
} else {
return null;
}
} else {
var f = document.createDocumentFragment();
var cs = ((((0) === oc))?nch:cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(nch,oc));
var b__34277__auto___34858 = (function (){
return hipo.interpreter.append_children_BANG_(f,cs,m);
});
var v__34278__auto___34859 = interceptors;
if(((cljs.core.not(v__34278__auto___34859)) || (cljs.core.empty_QMARK_(v__34278__auto___34859)))){
b__34277__auto___34858();
} else {
hipo.interceptor.call(b__34277__auto___34858,v__34278__auto___34859,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
}

return el.appendChild(f);
}
} else {
return null;
}
});
hipo.interpreter.keyed_children_QMARK_ = (function hipo$interpreter$keyed_children_QMARK_(v){
return (!((hipo.interpreter.child_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0))) == null)));
});
hipo.interpreter.reconciliate_children_BANG_ = (function hipo$interpreter$reconciliate_children_BANG_(el,och,nch,p__34718){
var map__34719 = p__34718;
var map__34719__$1 = cljs.core.__destructure_map(map__34719);
var m = map__34719__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34719__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.empty_QMARK_(nch)){
if((!(cljs.core.empty_QMARK_(och)))){
var b__34277__auto__ = (function (){
return hipo.dom.clear_BANG_(el);
});
var v__34278__auto__ = interceptors;
if(((cljs.core.not(v__34278__auto__)) || (cljs.core.empty_QMARK_(v__34278__auto__)))){
return b__34277__auto__();
} else {
return hipo.interceptor.call(b__34277__auto__,v__34278__auto__,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
}
} else {
return null;
}
} else {
if(hipo.interpreter.keyed_children_QMARK_(nch)){
return hipo.interpreter.reconciliate_keyed_children_BANG_(el,och,nch,m);
} else {
return hipo.interpreter.reconciliate_non_keyed_children_BANG_(el,och,nch,m);
}
}
});
hipo.interpreter.reconciliate_vector_BANG_ = (function hipo$interpreter$reconciliate_vector_BANG_(el,oh,nh,p__34720){
var map__34721 = p__34720;
var map__34721__$1 = cljs.core.__destructure_map(map__34721);
var m = map__34721__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34721__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.vector_QMARK_(nh)){
} else {
throw (new Error("Assert failed: (vector? nh)"));
}

if(((hipo.hiccup.literal_QMARK_(oh)) || ((!((hipo.hiccup.tag(nh) === hipo.hiccup.tag(oh))))))){
var nel = hipo.interpreter.create_child(nh,m);
var b__34277__auto__ = (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error((""+"Assert failed: "+"Can't replace root element. If you want to change root element's type it must be encapsulated in a static element."+"\n"+"(.-parentElement el)")));
}

return hipo.dom.replace_BANG_(el,nel);
});
var v__34278__auto__ = interceptors;
if(((cljs.core.not(v__34278__auto__)) || (cljs.core.empty_QMARK_(v__34278__auto__)))){
return b__34277__auto__();
} else {
return hipo.interceptor.call(b__34277__auto__,v__34278__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
var om__$1 = hipo.hiccup.attributes(oh);
var nm = hipo.hiccup.attributes(nh);
var och = hipo.hiccup.children(oh);
var nch = hipo.hiccup.children(nh);
var b__34277__auto___34860 = (function (){
return hipo.interpreter.reconciliate_children_BANG_(el,hipo.hiccup.flatten_children(och),hipo.hiccup.flatten_children(nch),m);
});
var v__34278__auto___34861 = interceptors;
if(((cljs.core.not(v__34278__auto___34861)) || (cljs.core.empty_QMARK_(v__34278__auto___34861)))){
b__34277__auto___34860();
} else {
hipo.interceptor.call(b__34277__auto___34860,v__34278__auto___34861,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),och,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nch], null));
}

return hipo.interpreter.reconciliate_attributes_BANG_(el,hipo.hiccup.keyns(nh),hipo.hiccup.tag(nh),om__$1,nm,m);
}
});
hipo.interpreter.reconciliate_BANG_ = (function hipo$interpreter$reconciliate_BANG_(el,oh,nh,p__34722){
var map__34723 = p__34722;
var map__34723__$1 = cljs.core.__destructure_map(map__34723);
var m = map__34723__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34723__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(((cljs.core.vector_QMARK_(nh)) || (hipo.hiccup.literal_QMARK_(nh)))){
} else {
throw (new Error("Assert failed: (or (vector? nh) (hic/literal? nh))"));
}

if((((m == null)) || (cljs.core.map_QMARK_(m)))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

var b__34277__auto__ = (function (){
if(hipo.hiccup.literal_QMARK_(nh)){
if((!((oh === nh)))){
var b__34277__auto__ = (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error((""+"Assert failed: "+"Can't replace root element. If you want to change root element's type it must be encapsulated in a static element."+"\n"+"(.-parentElement el)")));
}

return hipo.dom.replace_text_BANG_(el,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nh)));
});
var v__34278__auto__ = interceptors;
if(((cljs.core.not(v__34278__auto__)) || (cljs.core.empty_QMARK_(v__34278__auto__)))){
return b__34277__auto__();
} else {
return hipo.interceptor.call(b__34277__auto__,v__34278__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
return null;
}
} else {
return hipo.interpreter.reconciliate_vector_BANG_(el,oh,nh,m);
}
});
var v__34278__auto__ = interceptors;
if(((cljs.core.not(v__34278__auto__)) || (cljs.core.empty_QMARK_(v__34278__auto__)))){
return b__34277__auto__();
} else {
return hipo.interceptor.call(b__34277__auto__,v__34278__auto__,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),oh,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nh], null));
}
});

//# sourceMappingURL=hipo.interpreter.js.map
