goog.provide('dommy.core');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.toggle_attr_BANG_ = dommy.attrs.toggle_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.scroll_into_view = dommy.attrs.scroll_into_view;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
var elem__$1 = dommy.template.__GT_node_like(elem);
(elem__$1.innerHTML = html);

return elem__$1;
});
dommy.core.html = (function dommy$core$html(elem){
return dommy.template.__GT_node_like(elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
var elem__$1 = dommy.template.__GT_node_like(elem);
var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");
(elem__$1[prop] = text);

return elem__$1;
});
dommy.core.text = (function dommy$core$text(elem){
var or__5162__auto__ = elem.textContent;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return elem.innerText;
}
});
dommy.core.value = (function dommy$core$value(elem){
return dommy.template.__GT_node_like(elem).value;
});
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
var elem__$1 = dommy.template.__GT_node_like(elem);
(elem__$1.value = value);

return elem__$1;
});
/**
 * append `child` to `parent`. 'parent' and 'child' should be node-like
 * (work with dommy.template/->node-like). The node-like projection
 * of parent is returned after appending child.
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__30771 = arguments.length;
switch (G__30771) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___31842 = arguments.length;
var i__5898__auto___31843 = (0);
while(true){
if((i__5898__auto___31843 < len__5897__auto___31842)){
args_arr__5922__auto__.push((arguments[i__5898__auto___31843]));

var G__31844 = (i__5898__auto___31843 + (1));
i__5898__auto___31843 = G__31844;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__30795 = dommy.template.__GT_node_like(parent);
G__30795.appendChild(dommy.template.__GT_node_like(child));

return G__30795;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like(parent);
var seq__30796_31845 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__30797_31846 = null;
var count__30798_31847 = (0);
var i__30799_31848 = (0);
while(true){
if((i__30799_31848 < count__30798_31847)){
var c_31849 = chunk__30797_31846.cljs$core$IIndexed$_nth$arity$2(null,i__30799_31848);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_31849);


var G__31850 = seq__30796_31845;
var G__31851 = chunk__30797_31846;
var G__31852 = count__30798_31847;
var G__31853 = (i__30799_31848 + (1));
seq__30796_31845 = G__31850;
chunk__30797_31846 = G__31851;
count__30798_31847 = G__31852;
i__30799_31848 = G__31853;
continue;
} else {
var temp__5825__auto___31854 = cljs.core.seq(seq__30796_31845);
if(temp__5825__auto___31854){
var seq__30796_31855__$1 = temp__5825__auto___31854;
if(cljs.core.chunked_seq_QMARK_(seq__30796_31855__$1)){
var c__5694__auto___31856 = cljs.core.chunk_first(seq__30796_31855__$1);
var G__31857 = cljs.core.chunk_rest(seq__30796_31855__$1);
var G__31858 = c__5694__auto___31856;
var G__31859 = cljs.core.count(c__5694__auto___31856);
var G__31860 = (0);
seq__30796_31845 = G__31857;
chunk__30797_31846 = G__31858;
count__30798_31847 = G__31859;
i__30799_31848 = G__31860;
continue;
} else {
var c_31861 = cljs.core.first(seq__30796_31855__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_31861);


var G__31862 = cljs.core.next(seq__30796_31855__$1);
var G__31863 = null;
var G__31864 = (0);
var G__31865 = (0);
seq__30796_31845 = G__31862;
chunk__30797_31846 = G__31863;
count__30798_31847 = G__31864;
i__30799_31848 = G__31865;
continue;
}
} else {
}
}
break;
}

return parent__$1;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq30768){
var G__30769 = cljs.core.first(seq30768);
var seq30768__$1 = cljs.core.next(seq30768);
var G__30770 = cljs.core.first(seq30768__$1);
var seq30768__$2 = cljs.core.next(seq30768__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30769,G__30770,seq30768__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * prepend `child` to `parent`, both node-like
 * return ->node-like projection of `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__30805 = arguments.length;
switch (G__30805) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___31869 = arguments.length;
var i__5898__auto___31870 = (0);
while(true){
if((i__5898__auto___31870 < len__5897__auto___31869)){
args_arr__5922__auto__.push((arguments[i__5898__auto___31870]));

var G__31871 = (i__5898__auto___31870 + (1));
i__5898__auto___31870 = G__31871;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var parent__$1 = dommy.template.__GT_node_like(parent);
return parent__$1.insertBefore(dommy.template.__GT_node_like(child),parent__$1.firstChild);
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like(parent);
var seq__30807_31872 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__30808_31873 = null;
var count__30809_31874 = (0);
var i__30810_31875 = (0);
while(true){
if((i__30810_31875 < count__30809_31874)){
var c_31881 = chunk__30808_31873.cljs$core$IIndexed$_nth$arity$2(null,i__30810_31875);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_31881);


var G__31882 = seq__30807_31872;
var G__31883 = chunk__30808_31873;
var G__31884 = count__30809_31874;
var G__31885 = (i__30810_31875 + (1));
seq__30807_31872 = G__31882;
chunk__30808_31873 = G__31883;
count__30809_31874 = G__31884;
i__30810_31875 = G__31885;
continue;
} else {
var temp__5825__auto___31887 = cljs.core.seq(seq__30807_31872);
if(temp__5825__auto___31887){
var seq__30807_31889__$1 = temp__5825__auto___31887;
if(cljs.core.chunked_seq_QMARK_(seq__30807_31889__$1)){
var c__5694__auto___31890 = cljs.core.chunk_first(seq__30807_31889__$1);
var G__31891 = cljs.core.chunk_rest(seq__30807_31889__$1);
var G__31892 = c__5694__auto___31890;
var G__31893 = cljs.core.count(c__5694__auto___31890);
var G__31894 = (0);
seq__30807_31872 = G__31891;
chunk__30808_31873 = G__31892;
count__30809_31874 = G__31893;
i__30810_31875 = G__31894;
continue;
} else {
var c_31895 = cljs.core.first(seq__30807_31889__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_31895);


var G__31896 = cljs.core.next(seq__30807_31889__$1);
var G__31897 = null;
var G__31898 = (0);
var G__31899 = (0);
seq__30807_31872 = G__31896;
chunk__30808_31873 = G__31897;
count__30809_31874 = G__31898;
i__30810_31875 = G__31899;
continue;
}
} else {
}
}
break;
}

return parent__$1;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq30802){
var G__30803 = cljs.core.first(seq30802);
var seq30802__$1 = cljs.core.next(seq30802);
var G__30804 = cljs.core.first(seq30802__$1);
var seq30802__$2 = cljs.core.next(seq30802__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30803,G__30804,seq30802__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * insert `node` before `other`, both node-like,
 * `other` must have a parent. return `node`
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var actual_node = dommy.template.__GT_node_like(elem);
var other__$1 = dommy.template.__GT_node_like(other);
if(cljs.core.truth_(other__$1.parentNode)){
} else {
throw (new Error("Assert failed: (.-parentNode other)"));
}

other__$1.parentNode.insertBefore(actual_node,other__$1);

return actual_node;
});
/**
 * insert `node` after `other`, both node-like,
 * `other` must have a parent. return `node`
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var actual_node = dommy.template.__GT_node_like(elem);
var other__$1 = dommy.template.__GT_node_like(other);
var parent = other__$1.parentNode;
var temp__5823__auto___31901 = other__$1.nextSibling;
if(cljs.core.truth_(temp__5823__auto___31901)){
var next_31902 = temp__5823__auto___31901;
parent.insertBefore(actual_node,next_31902);
} else {
parent.appendChild(actual_node);
}

return actual_node;
});
/**
 * replace `elem` with `new`, both node-like, return node-like projection of new.
 * node-like projection of elem must have parent.
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var new$__$1 = dommy.template.__GT_node_like(new$);
var elem__$1 = dommy.template.__GT_node_like(elem);
if(cljs.core.truth_(elem__$1.parentNode)){
} else {
throw (new Error("Assert failed: (.-parentNode elem)"));
}

elem__$1.parentNode.replaceChild(new$__$1,elem__$1);

return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(parent,node_like){
var G__30946 = dommy.template.__GT_node_like(parent);
(G__30946.innerHTML = "");

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(G__30946,node_like);

return G__30946;
});
/**
 * remove node-like `elem` from parent, return node-like projection of elem
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(elem){
var elem__$1 = dommy.template.__GT_node_like(elem);
var G__30954 = elem__$1.parentNode;
G__30954.removeChild(elem__$1);

return G__30954;
});
/**
 * clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return (dommy.template.__GT_node_like(elem).innerHTML = "");
});
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
dommy.core.t_dommy$core31011 = (function (template,key_selectors_map,container,p__31006,vec__31007,k,v,meta31012){
this.template = template;
this.key_selectors_map = key_selectors_map;
this.container = container;
this.p__31006 = p__31006;
this.vec__31007 = vec__31007;
this.k = k;
this.v = v;
this.meta31012 = meta31012;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(dommy.core.t_dommy$core31011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31013,meta31012__$1){
var self__ = this;
var _31013__$1 = this;
return (new dommy.core.t_dommy$core31011(self__.template,self__.key_selectors_map,self__.container,self__.p__31006,self__.vec__31007,self__.k,self__.v,meta31012__$1));
}));

(dommy.core.t_dommy$core31011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31013){
var self__ = this;
var _31013__$1 = this;
return self__.meta31012;
}));

(dommy.core.t_dommy$core31011.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return dommy.utils.__GT_Array(dommy.template.__GT_node_like(self__.container).querySelectorAll(dommy.core.selector(self__.v)));
}));

(dommy.core.t_dommy$core31011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",1212911103,null),new cljs.core.Symbol(null,"container","container",-96406180,null),new cljs.core.Symbol(null,"p__31006","p__31006",-896680537,null),new cljs.core.Symbol(null,"vec__31007","vec__31007",1004152497,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta31012","meta31012",1530589440,null)], null);
}));

(dommy.core.t_dommy$core31011.cljs$lang$type = true);

(dommy.core.t_dommy$core31011.cljs$lang$ctorStr = "dommy.core/t_dommy$core31011");

(dommy.core.t_dommy$core31011.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"dommy.core/t_dommy$core31011");
}));

/**
 * Positional factory function for dommy.core/t_dommy$core31011.
 */
dommy.core.__GT_t_dommy$core31011 = (function dommy$core$__GT_t_dommy$core31011(template,key_selectors_map,container,p__31006,vec__31007,k,v,meta31012){
return (new dommy.core.t_dommy$core31011(template,key_selectors_map,container,p__31006,vec__31007,k,v,meta31012));
});


dommy.core.selector_map = (function dommy$core$selector_map(template,key_selectors_map){
var container = dommy.template.__GT_node_like(template);
if((!(cljs.core.contains_QMARK_(key_selectors_map,new cljs.core.Keyword(null,"container","container",-1736937707))))){
} else {
throw (new Error("Assert failed: (not (contains? key-selectors-map :container))"));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",-1736937707),container], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31006){
var vec__31007 = p__31006;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31007,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31007,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))?(new dommy.core.t_dommy$core31011(template,key_selectors_map,container,p__31006,vec__31007,k,v,cljs.core.PersistentArrayMap.EMPTY)):dommy.template.__GT_node_like(container).querySelector(dommy.core.selector(v)))], null);
}),key_selectors_map))], 0));
});
/**
 * a lazy seq of the ancestors of `node`
 */
dommy.core.ancestor_nodes = (function dommy$core$ancestor_nodes(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate((function (p1__31043_SHARP_){
return p1__31043_SHARP_.parentNode;
}),dommy.template.__GT_node_like(elem)));
});
/**
 * returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__31046 = arguments.length;
switch (G__31046) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(dommy.template.__GT_node_like(dommy.template.__GT_node_like(base)).querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * closest ancestor of `node` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__31051 = arguments.length;
switch (G__31051) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
var base__$1 = dommy.template.__GT_node_like(base);
var elem__$1 = dommy.template.__GT_node_like(elem);
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base__$1,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__31048_SHARP_){
return (!((p1__31048_SHARP_ === base__$1)));
}),dommy.core.ancestor_nodes(elem__$1))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1(selector),dommy.core.ancestor_nodes(dommy.template.__GT_node_like(elem))));
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * is `descendant` a descendant of `ancestor`?
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
var descendant__$1 = dommy.template.__GT_node_like(descendant);
var ancestor__$1 = dommy.template.__GT_node_like(ancestor);
if(cljs.core.truth_(ancestor__$1.contains)){
return ancestor__$1.contains(descendant__$1);
} else {
if(cljs.core.truth_(ancestor__$1.compareDocumentPosition)){
return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << (4))) != 0);
} else {
return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31076){
var vec__31083 = p__31076;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31083,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31083,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__5162__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__5160__auto__ = related_target;
if(cljs.core.truth_(and__5160__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__5160__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(dommy.template.__GT_node_like(elem),event.target,selector);
if(cljs.core.truth_((function (){var and__5160__auto__ = selected_target;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not((dommy.core.attr.cljs$core$IFn$_invoke$arity$2 ? dommy.core.attr.cljs$core$IFn$_invoke$arity$2(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)) : dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218))));
} else {
return and__5160__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `nodes`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__5162__auto__ = dommy.template.__GT_node_like(elem).dommyEventListeners;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___31946 = arguments.length;
var i__5898__auto___31947 = (0);
while(true){
if((i__5898__auto___31947 < len__5897__auto___31946)){
args__5903__auto__.push((arguments[i__5898__auto___31947]));

var G__31949 = (i__5898__auto___31947 + (1));
i__5898__auto___31947 = G__31949;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = dommy.template.__GT_node_like(elem);
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq31102){
var G__31104 = cljs.core.first(seq31102);
var seq31102__$1 = cljs.core.next(seq31102);
var G__31105 = cljs.core.first(seq31102__$1);
var seq31102__$2 = cljs.core.next(seq31102__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31104,G__31105,seq31102__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__31178_SHARP_){
return dommy.template.__GT_node_like(cljs.core.first(p1__31178_SHARP_));
}),cljs.core.rest)(elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like(elem_sel),null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___31960 = arguments.length;
var i__5898__auto___31961 = (0);
while(true){
if((i__5898__auto___31961 < len__5897__auto___31960)){
args__5903__auto__.push((arguments[i__5898__auto___31961]));

var G__31964 = (i__5898__auto___31961 + (1));
i__5898__auto___31961 = G__31964;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__31196_31968 = dommy.core.elem_and_selector(elem_sel);
var elem_31969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31196_31968,(0),null);
var selector_31970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31196_31968,(1),null);
var seq__31200_31971 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__31207_31972 = null;
var count__31208_31973 = (0);
var i__31209_31974 = (0);
while(true){
if((i__31209_31974 < count__31208_31973)){
var vec__31374_31975 = chunk__31207_31972.cljs$core$IIndexed$_nth$arity$2(null,i__31209_31974);
var orig_type_31976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31374_31975,(0),null);
var f_31977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31374_31975,(1),null);
var seq__31210_31978 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_31976,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_31976,cljs.core.identity])));
var chunk__31212_31979 = null;
var count__31213_31980 = (0);
var i__31214_31981 = (0);
while(true){
if((i__31214_31981 < count__31213_31980)){
var vec__31403_31983 = chunk__31212_31979.cljs$core$IIndexed$_nth$arity$2(null,i__31214_31981);
var actual_type_31984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31403_31983,(0),null);
var factory_31985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31403_31983,(1),null);
var canonical_f_31986 = (function (){var G__31407 = (factory_31985.cljs$core$IFn$_invoke$arity$1 ? factory_31985.cljs$core$IFn$_invoke$arity$1(f_31977) : factory_31985.call(null,f_31977));
var fexpr__31406 = (cljs.core.truth_(selector_31970)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_31969,selector_31970):cljs.core.identity);
return (fexpr__31406.cljs$core$IFn$_invoke$arity$1 ? fexpr__31406.cljs$core$IFn$_invoke$arity$1(G__31407) : fexpr__31406.call(null,G__31407));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_31969,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31970,actual_type_31984,f_31977], null),canonical_f_31986], 0));

if(cljs.core.truth_(elem_31969.addEventListener)){
elem_31969.addEventListener(cljs.core.name(actual_type_31984),canonical_f_31986);
} else {
elem_31969.attachEvent(cljs.core.name(actual_type_31984),canonical_f_31986);
}


var G__31994 = seq__31210_31978;
var G__31995 = chunk__31212_31979;
var G__31996 = count__31213_31980;
var G__31997 = (i__31214_31981 + (1));
seq__31210_31978 = G__31994;
chunk__31212_31979 = G__31995;
count__31213_31980 = G__31996;
i__31214_31981 = G__31997;
continue;
} else {
var temp__5825__auto___32000 = cljs.core.seq(seq__31210_31978);
if(temp__5825__auto___32000){
var seq__31210_32002__$1 = temp__5825__auto___32000;
if(cljs.core.chunked_seq_QMARK_(seq__31210_32002__$1)){
var c__5694__auto___32003 = cljs.core.chunk_first(seq__31210_32002__$1);
var G__32005 = cljs.core.chunk_rest(seq__31210_32002__$1);
var G__32006 = c__5694__auto___32003;
var G__32007 = cljs.core.count(c__5694__auto___32003);
var G__32008 = (0);
seq__31210_31978 = G__32005;
chunk__31212_31979 = G__32006;
count__31213_31980 = G__32007;
i__31214_31981 = G__32008;
continue;
} else {
var vec__31417_32011 = cljs.core.first(seq__31210_32002__$1);
var actual_type_32012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31417_32011,(0),null);
var factory_32013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31417_32011,(1),null);
var canonical_f_32014 = (function (){var G__31427 = (factory_32013.cljs$core$IFn$_invoke$arity$1 ? factory_32013.cljs$core$IFn$_invoke$arity$1(f_31977) : factory_32013.call(null,f_31977));
var fexpr__31426 = (cljs.core.truth_(selector_31970)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_31969,selector_31970):cljs.core.identity);
return (fexpr__31426.cljs$core$IFn$_invoke$arity$1 ? fexpr__31426.cljs$core$IFn$_invoke$arity$1(G__31427) : fexpr__31426.call(null,G__31427));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_31969,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31970,actual_type_32012,f_31977], null),canonical_f_32014], 0));

if(cljs.core.truth_(elem_31969.addEventListener)){
elem_31969.addEventListener(cljs.core.name(actual_type_32012),canonical_f_32014);
} else {
elem_31969.attachEvent(cljs.core.name(actual_type_32012),canonical_f_32014);
}


var G__32019 = cljs.core.next(seq__31210_32002__$1);
var G__32020 = null;
var G__32021 = (0);
var G__32022 = (0);
seq__31210_31978 = G__32019;
chunk__31212_31979 = G__32020;
count__31213_31980 = G__32021;
i__31214_31981 = G__32022;
continue;
}
} else {
}
}
break;
}

var G__32025 = seq__31200_31971;
var G__32026 = chunk__31207_31972;
var G__32027 = count__31208_31973;
var G__32028 = (i__31209_31974 + (1));
seq__31200_31971 = G__32025;
chunk__31207_31972 = G__32026;
count__31208_31973 = G__32027;
i__31209_31974 = G__32028;
continue;
} else {
var temp__5825__auto___32029 = cljs.core.seq(seq__31200_31971);
if(temp__5825__auto___32029){
var seq__31200_32031__$1 = temp__5825__auto___32029;
if(cljs.core.chunked_seq_QMARK_(seq__31200_32031__$1)){
var c__5694__auto___32033 = cljs.core.chunk_first(seq__31200_32031__$1);
var G__32034 = cljs.core.chunk_rest(seq__31200_32031__$1);
var G__32035 = c__5694__auto___32033;
var G__32036 = cljs.core.count(c__5694__auto___32033);
var G__32037 = (0);
seq__31200_31971 = G__32034;
chunk__31207_31972 = G__32035;
count__31208_31973 = G__32036;
i__31209_31974 = G__32037;
continue;
} else {
var vec__31496_32039 = cljs.core.first(seq__31200_32031__$1);
var orig_type_32040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31496_32039,(0),null);
var f_32041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31496_32039,(1),null);
var seq__31201_32045 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_32040,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_32040,cljs.core.identity])));
var chunk__31203_32046 = null;
var count__31204_32047 = (0);
var i__31205_32048 = (0);
while(true){
if((i__31205_32048 < count__31204_32047)){
var vec__31521_32050 = chunk__31203_32046.cljs$core$IIndexed$_nth$arity$2(null,i__31205_32048);
var actual_type_32051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31521_32050,(0),null);
var factory_32052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31521_32050,(1),null);
var canonical_f_32058 = (function (){var G__31531 = (factory_32052.cljs$core$IFn$_invoke$arity$1 ? factory_32052.cljs$core$IFn$_invoke$arity$1(f_32041) : factory_32052.call(null,f_32041));
var fexpr__31530 = (cljs.core.truth_(selector_31970)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_31969,selector_31970):cljs.core.identity);
return (fexpr__31530.cljs$core$IFn$_invoke$arity$1 ? fexpr__31530.cljs$core$IFn$_invoke$arity$1(G__31531) : fexpr__31530.call(null,G__31531));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_31969,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31970,actual_type_32051,f_32041], null),canonical_f_32058], 0));

if(cljs.core.truth_(elem_31969.addEventListener)){
elem_31969.addEventListener(cljs.core.name(actual_type_32051),canonical_f_32058);
} else {
elem_31969.attachEvent(cljs.core.name(actual_type_32051),canonical_f_32058);
}


var G__32060 = seq__31201_32045;
var G__32061 = chunk__31203_32046;
var G__32062 = count__31204_32047;
var G__32063 = (i__31205_32048 + (1));
seq__31201_32045 = G__32060;
chunk__31203_32046 = G__32061;
count__31204_32047 = G__32062;
i__31205_32048 = G__32063;
continue;
} else {
var temp__5825__auto___32064__$1 = cljs.core.seq(seq__31201_32045);
if(temp__5825__auto___32064__$1){
var seq__31201_32065__$1 = temp__5825__auto___32064__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31201_32065__$1)){
var c__5694__auto___32067 = cljs.core.chunk_first(seq__31201_32065__$1);
var G__32069 = cljs.core.chunk_rest(seq__31201_32065__$1);
var G__32070 = c__5694__auto___32067;
var G__32071 = cljs.core.count(c__5694__auto___32067);
var G__32072 = (0);
seq__31201_32045 = G__32069;
chunk__31203_32046 = G__32070;
count__31204_32047 = G__32071;
i__31205_32048 = G__32072;
continue;
} else {
var vec__31545_32076 = cljs.core.first(seq__31201_32065__$1);
var actual_type_32077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31545_32076,(0),null);
var factory_32078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31545_32076,(1),null);
var canonical_f_32079 = (function (){var G__31552 = (factory_32078.cljs$core$IFn$_invoke$arity$1 ? factory_32078.cljs$core$IFn$_invoke$arity$1(f_32041) : factory_32078.call(null,f_32041));
var fexpr__31551 = (cljs.core.truth_(selector_31970)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_31969,selector_31970):cljs.core.identity);
return (fexpr__31551.cljs$core$IFn$_invoke$arity$1 ? fexpr__31551.cljs$core$IFn$_invoke$arity$1(G__31552) : fexpr__31551.call(null,G__31552));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_31969,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31970,actual_type_32077,f_32041], null),canonical_f_32079], 0));

if(cljs.core.truth_(elem_31969.addEventListener)){
elem_31969.addEventListener(cljs.core.name(actual_type_32077),canonical_f_32079);
} else {
elem_31969.attachEvent(cljs.core.name(actual_type_32077),canonical_f_32079);
}


var G__32083 = cljs.core.next(seq__31201_32065__$1);
var G__32084 = null;
var G__32085 = (0);
var G__32086 = (0);
seq__31201_32045 = G__32083;
chunk__31203_32046 = G__32084;
count__31204_32047 = G__32085;
i__31205_32048 = G__32086;
continue;
}
} else {
}
}
break;
}

var G__32088 = cljs.core.next(seq__31200_32031__$1);
var G__32089 = null;
var G__32090 = (0);
var G__32091 = (0);
seq__31200_31971 = G__32088;
chunk__31207_31972 = G__32089;
count__31208_31973 = G__32090;
i__31209_31974 = G__32091;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq31190){
var G__31191 = cljs.core.first(seq31190);
var seq31190__$1 = cljs.core.next(seq31190);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31191,seq31190__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___32100 = arguments.length;
var i__5898__auto___32101 = (0);
while(true){
if((i__5898__auto___32101 < len__5897__auto___32100)){
args__5903__auto__.push((arguments[i__5898__auto___32101]));

var G__32103 = (i__5898__auto___32101 + (1));
i__5898__auto___32101 = G__32103;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__31566_32107 = dommy.core.elem_and_selector(elem_sel);
var elem_32108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31566_32107,(0),null);
var selector_32109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31566_32107,(1),null);
var seq__31569_32111 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__31576_32112 = null;
var count__31577_32113 = (0);
var i__31578_32114 = (0);
while(true){
if((i__31578_32114 < count__31577_32113)){
var vec__31656_32116 = chunk__31576_32112.cljs$core$IIndexed$_nth$arity$2(null,i__31578_32114);
var orig_type_32117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31656_32116,(0),null);
var f_32118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31656_32116,(1),null);
var seq__31579_32121 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_32117,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_32117,cljs.core.identity])));
var chunk__31581_32122 = null;
var count__31582_32123 = (0);
var i__31583_32124 = (0);
while(true){
if((i__31583_32124 < count__31582_32123)){
var vec__31677_32128 = chunk__31581_32122.cljs$core$IIndexed$_nth$arity$2(null,i__31583_32124);
var actual_type_32129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31677_32128,(0),null);
var __32130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31677_32128,(1),null);
var keys_32131 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_32109,actual_type_32129,f_32118], null);
var canonical_f_32132 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_32108),keys_32131);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_32108,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_32131], 0));

if(cljs.core.truth_(elem_32108.removeEventListener)){
elem_32108.removeEventListener(cljs.core.name(actual_type_32129),canonical_f_32132);
} else {
elem_32108.detachEvent(cljs.core.name(actual_type_32129),canonical_f_32132);
}


var G__32134 = seq__31579_32121;
var G__32135 = chunk__31581_32122;
var G__32136 = count__31582_32123;
var G__32137 = (i__31583_32124 + (1));
seq__31579_32121 = G__32134;
chunk__31581_32122 = G__32135;
count__31582_32123 = G__32136;
i__31583_32124 = G__32137;
continue;
} else {
var temp__5825__auto___32138 = cljs.core.seq(seq__31579_32121);
if(temp__5825__auto___32138){
var seq__31579_32142__$1 = temp__5825__auto___32138;
if(cljs.core.chunked_seq_QMARK_(seq__31579_32142__$1)){
var c__5694__auto___32143 = cljs.core.chunk_first(seq__31579_32142__$1);
var G__32144 = cljs.core.chunk_rest(seq__31579_32142__$1);
var G__32145 = c__5694__auto___32143;
var G__32146 = cljs.core.count(c__5694__auto___32143);
var G__32147 = (0);
seq__31579_32121 = G__32144;
chunk__31581_32122 = G__32145;
count__31582_32123 = G__32146;
i__31583_32124 = G__32147;
continue;
} else {
var vec__31682_32148 = cljs.core.first(seq__31579_32142__$1);
var actual_type_32149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31682_32148,(0),null);
var __32150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31682_32148,(1),null);
var keys_32152 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_32109,actual_type_32149,f_32118], null);
var canonical_f_32153 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_32108),keys_32152);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_32108,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_32152], 0));

if(cljs.core.truth_(elem_32108.removeEventListener)){
elem_32108.removeEventListener(cljs.core.name(actual_type_32149),canonical_f_32153);
} else {
elem_32108.detachEvent(cljs.core.name(actual_type_32149),canonical_f_32153);
}


var G__32154 = cljs.core.next(seq__31579_32142__$1);
var G__32155 = null;
var G__32156 = (0);
var G__32157 = (0);
seq__31579_32121 = G__32154;
chunk__31581_32122 = G__32155;
count__31582_32123 = G__32156;
i__31583_32124 = G__32157;
continue;
}
} else {
}
}
break;
}

var G__32158 = seq__31569_32111;
var G__32159 = chunk__31576_32112;
var G__32160 = count__31577_32113;
var G__32161 = (i__31578_32114 + (1));
seq__31569_32111 = G__32158;
chunk__31576_32112 = G__32159;
count__31577_32113 = G__32160;
i__31578_32114 = G__32161;
continue;
} else {
var temp__5825__auto___32162 = cljs.core.seq(seq__31569_32111);
if(temp__5825__auto___32162){
var seq__31569_32163__$1 = temp__5825__auto___32162;
if(cljs.core.chunked_seq_QMARK_(seq__31569_32163__$1)){
var c__5694__auto___32164 = cljs.core.chunk_first(seq__31569_32163__$1);
var G__32165 = cljs.core.chunk_rest(seq__31569_32163__$1);
var G__32166 = c__5694__auto___32164;
var G__32167 = cljs.core.count(c__5694__auto___32164);
var G__32168 = (0);
seq__31569_32111 = G__32165;
chunk__31576_32112 = G__32166;
count__31577_32113 = G__32167;
i__31578_32114 = G__32168;
continue;
} else {
var vec__31704_32169 = cljs.core.first(seq__31569_32163__$1);
var orig_type_32170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31704_32169,(0),null);
var f_32171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31704_32169,(1),null);
var seq__31570_32172 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_32170,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_32170,cljs.core.identity])));
var chunk__31572_32173 = null;
var count__31573_32174 = (0);
var i__31574_32175 = (0);
while(true){
if((i__31574_32175 < count__31573_32174)){
var vec__31736_32176 = chunk__31572_32173.cljs$core$IIndexed$_nth$arity$2(null,i__31574_32175);
var actual_type_32177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31736_32176,(0),null);
var __32178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31736_32176,(1),null);
var keys_32179 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_32109,actual_type_32177,f_32171], null);
var canonical_f_32180 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_32108),keys_32179);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_32108,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_32179], 0));

if(cljs.core.truth_(elem_32108.removeEventListener)){
elem_32108.removeEventListener(cljs.core.name(actual_type_32177),canonical_f_32180);
} else {
elem_32108.detachEvent(cljs.core.name(actual_type_32177),canonical_f_32180);
}


var G__32194 = seq__31570_32172;
var G__32195 = chunk__31572_32173;
var G__32196 = count__31573_32174;
var G__32197 = (i__31574_32175 + (1));
seq__31570_32172 = G__32194;
chunk__31572_32173 = G__32195;
count__31573_32174 = G__32196;
i__31574_32175 = G__32197;
continue;
} else {
var temp__5825__auto___32200__$1 = cljs.core.seq(seq__31570_32172);
if(temp__5825__auto___32200__$1){
var seq__31570_32201__$1 = temp__5825__auto___32200__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31570_32201__$1)){
var c__5694__auto___32205 = cljs.core.chunk_first(seq__31570_32201__$1);
var G__32209 = cljs.core.chunk_rest(seq__31570_32201__$1);
var G__32210 = c__5694__auto___32205;
var G__32211 = cljs.core.count(c__5694__auto___32205);
var G__32212 = (0);
seq__31570_32172 = G__32209;
chunk__31572_32173 = G__32210;
count__31573_32174 = G__32211;
i__31574_32175 = G__32212;
continue;
} else {
var vec__31741_32213 = cljs.core.first(seq__31570_32201__$1);
var actual_type_32214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31741_32213,(0),null);
var __32215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31741_32213,(1),null);
var keys_32216 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_32109,actual_type_32214,f_32171], null);
var canonical_f_32217 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_32108),keys_32216);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_32108,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_32216], 0));

if(cljs.core.truth_(elem_32108.removeEventListener)){
elem_32108.removeEventListener(cljs.core.name(actual_type_32214),canonical_f_32217);
} else {
elem_32108.detachEvent(cljs.core.name(actual_type_32214),canonical_f_32217);
}


var G__32218 = cljs.core.next(seq__31570_32201__$1);
var G__32219 = null;
var G__32220 = (0);
var G__32221 = (0);
seq__31570_32172 = G__32218;
chunk__31572_32173 = G__32219;
count__31573_32174 = G__32220;
i__31574_32175 = G__32221;
continue;
}
} else {
}
}
break;
}

var G__32222 = cljs.core.next(seq__31569_32163__$1);
var G__32223 = null;
var G__32224 = (0);
var G__32225 = (0);
seq__31569_32111 = G__32222;
chunk__31576_32112 = G__32223;
count__31577_32113 = G__32224;
i__31578_32114 = G__32225;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq31561){
var G__31562 = cljs.core.first(seq31561);
var seq31561__$1 = cljs.core.next(seq31561);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31562,seq31561__$1);
}));

dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___32236 = arguments.length;
var i__5898__auto___32240 = (0);
while(true){
if((i__5898__auto___32240 < len__5897__auto___32236)){
args__5903__auto__.push((arguments[i__5898__auto___32240]));

var G__32246 = (i__5898__auto___32240 + (1));
i__5898__auto___32240 = G__32246;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__31758_32250 = dommy.core.elem_and_selector(elem_sel);
var elem_32251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31758_32250,(0),null);
var selector_32252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31758_32250,(1),null);
var seq__31762_32254 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__31763_32255 = null;
var count__31764_32256 = (0);
var i__31765_32257 = (0);
while(true){
if((i__31765_32257 < count__31764_32256)){
var vec__31796_32262 = chunk__31763_32255.cljs$core$IIndexed$_nth$arity$2(null,i__31765_32257);
var type_32263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31796_32262,(0),null);
var f_32264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31796_32262,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_32263,((function (seq__31762_32254,chunk__31763_32255,count__31764_32256,i__31765_32257,vec__31796_32262,type_32263,f_32264,vec__31758_32250,elem_32251,selector_32252){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_32263,dommy$core$this_fn], 0));

return (f_32264.cljs$core$IFn$_invoke$arity$1 ? f_32264.cljs$core$IFn$_invoke$arity$1(e) : f_32264.call(null,e));
});})(seq__31762_32254,chunk__31763_32255,count__31764_32256,i__31765_32257,vec__31796_32262,type_32263,f_32264,vec__31758_32250,elem_32251,selector_32252))
], 0));


var G__32275 = seq__31762_32254;
var G__32276 = chunk__31763_32255;
var G__32277 = count__31764_32256;
var G__32278 = (i__31765_32257 + (1));
seq__31762_32254 = G__32275;
chunk__31763_32255 = G__32276;
count__31764_32256 = G__32277;
i__31765_32257 = G__32278;
continue;
} else {
var temp__5825__auto___32280 = cljs.core.seq(seq__31762_32254);
if(temp__5825__auto___32280){
var seq__31762_32281__$1 = temp__5825__auto___32280;
if(cljs.core.chunked_seq_QMARK_(seq__31762_32281__$1)){
var c__5694__auto___32282 = cljs.core.chunk_first(seq__31762_32281__$1);
var G__32283 = cljs.core.chunk_rest(seq__31762_32281__$1);
var G__32284 = c__5694__auto___32282;
var G__32285 = cljs.core.count(c__5694__auto___32282);
var G__32286 = (0);
seq__31762_32254 = G__32283;
chunk__31763_32255 = G__32284;
count__31764_32256 = G__32285;
i__31765_32257 = G__32286;
continue;
} else {
var vec__31810_32287 = cljs.core.first(seq__31762_32281__$1);
var type_32288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31810_32287,(0),null);
var f_32289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31810_32287,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_32288,((function (seq__31762_32254,chunk__31763_32255,count__31764_32256,i__31765_32257,vec__31810_32287,type_32288,f_32289,seq__31762_32281__$1,temp__5825__auto___32280,vec__31758_32250,elem_32251,selector_32252){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_32288,dommy$core$this_fn], 0));

return (f_32289.cljs$core$IFn$_invoke$arity$1 ? f_32289.cljs$core$IFn$_invoke$arity$1(e) : f_32289.call(null,e));
});})(seq__31762_32254,chunk__31763_32255,count__31764_32256,i__31765_32257,vec__31810_32287,type_32288,f_32289,seq__31762_32281__$1,temp__5825__auto___32280,vec__31758_32250,elem_32251,selector_32252))
], 0));


var G__32290 = cljs.core.next(seq__31762_32281__$1);
var G__32291 = null;
var G__32292 = (0);
var G__32293 = (0);
seq__31762_32254 = G__32290;
chunk__31763_32255 = G__32291;
count__31764_32256 = G__32292;
i__31765_32257 = G__32293;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq31752){
var G__31753 = cljs.core.first(seq31752);
var seq31752__$1 = cljs.core.next(seq31752);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31753,seq31752__$1);
}));

/**
 * NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
 * event types or their bubbling behaviours
 * 
 * Creates an event of type `event-type`, optionally having
 * `update-event!` mutate and return an updated event object,
 * and fires it on `node`.
 * Only works when `node` is in the DOM
 */
dommy.core.fire_BANG_ = (function dommy$core$fire_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___32295 = arguments.length;
var i__5898__auto___32296 = (0);
while(true){
if((i__5898__auto___32296 < len__5897__auto___32295)){
args__5903__auto__.push((arguments[i__5898__auto___32296]));

var G__32297 = (i__5898__auto___32296 + (1));
i__5898__auto___32296 = G__32297;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return dommy.core.fire_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(dommy.core.fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (node,event_type,p__31827){
var vec__31828 = p__31827;
var update_event_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31828,(0),null);
if(dommy.core.descendant_QMARK_(node,document.documentElement)){
} else {
throw (new Error("Assert failed: (descendant? node js/document.documentElement)"));
}

var update_event_BANG___$1 = (function (){var or__5162__auto__ = update_event_BANG_;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.identity;
}
})();
if(cljs.core.truth_(document.createEvent)){
var event = document.createEvent("Event");
event.initEvent(cljs.core.name(event_type),true,true);

return node.dispatchEvent((update_event_BANG___$1.cljs$core$IFn$_invoke$arity$1 ? update_event_BANG___$1.cljs$core$IFn$_invoke$arity$1(event) : update_event_BANG___$1.call(null,event)));
} else {
return node.fireEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(event_type))),(function (){var G__31835 = document.createEventObject();
return (update_event_BANG___$1.cljs$core$IFn$_invoke$arity$1 ? update_event_BANG___$1.cljs$core$IFn$_invoke$arity$1(G__31835) : update_event_BANG___$1.call(null,G__31835));
})());
}
}));

(dommy.core.fire_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.fire_BANG_.cljs$lang$applyTo = (function (seq31823){
var G__31824 = cljs.core.first(seq31823);
var seq31823__$1 = cljs.core.next(seq31823);
var G__31825 = cljs.core.first(seq31823__$1);
var seq31823__$2 = cljs.core.next(seq31823__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31824,G__31825,seq31823__$2);
}));


//# sourceMappingURL=dommy.core.js.map
