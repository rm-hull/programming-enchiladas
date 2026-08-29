goog.provide('c2.dom');
Element.prototype.matchesSelector = Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector;
if(cljs.core.truth_(typeof NodeList != "undefined")){
(NodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL);

(NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (array){
var array__$1 = this;
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$2(array__$1,(0));
}));
} else {
}
(HTMLCollection.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (array){
var array__$1 = this;
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$2(array__$1,(0));
}));

/**
 * @interface
 */
c2.dom.IDom = function(){};

var c2$dom$IDom$__GT_dom$dyn_22304 = (function (x){
var x__5519__auto__ = (((x == null))?null:x);
var m__5520__auto__ = (c2.dom.__GT_dom[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__5520__auto__.call(null,x));
} else {
var m__5518__auto__ = (c2.dom.__GT_dom["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__5518__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("IDom.->dom",x);
}
}
});
/**
 * Converts x to a live DOM node
 */
c2.dom.__GT_dom = (function c2$dom$__GT_dom(x){
if((((!((x == null)))) && ((!((x.c2$dom$IDom$__GT_dom$arity$1 == null)))))){
return x.c2$dom$IDom$__GT_dom$arity$1(x);
} else {
return c2$dom$IDom$__GT_dom$dyn_22304(x);
}
});

(c2.dom.IDom["string"] = true);

(c2.dom.__GT_dom["string"] = (function (selector){
return (c2.dom.select.cljs$core$IFn$_invoke$arity$1 ? c2.dom.select.cljs$core$IFn$_invoke$arity$1(selector) : c2.dom.select.call(null,selector));
}));

(cljs.core.PersistentVector.prototype.c2$dom$IDom$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.c2$dom$IDom$__GT_dom$arity$1 = (function (v){
var v__$1 = this;
return singult.core.render(v__$1);
}));
if(cljs.core.truth_(typeof Node != "undefined")){
(Node.prototype.c2$dom$IDom$ = cljs.core.PROTOCOL_SENTINEL);

(Node.prototype.c2$dom$IDom$__GT_dom$arity$1 = (function (node){
var node__$1 = this;
return node__$1;
}));
} else {
}
/**
 * Select a single DOM node via CSS selector, optionally scoped by second arg.
 */
c2.dom.select = (function c2$dom$select(var_args){
var G__22181 = arguments.length;
switch (G__22181) {
case 1:
return c2.dom.select.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c2.dom.select.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(c2.dom.select.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return document.querySelector(selector);
}));

(c2.dom.select.cljs$core$IFn$_invoke$arity$2 = (function (selector,container){
return c2.dom.__GT_dom(container).querySelector(selector);
}));

(c2.dom.select.cljs$lang$maxFixedArity = 2);

/**
 * Like select, but returns a collection of nodes.
 */
c2.dom.select_all = (function c2$dom$select_all(var_args){
var G__22188 = arguments.length;
switch (G__22188) {
case 1:
return c2.dom.select_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c2.dom.select_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(c2.dom.select_all.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return document.querySelectorAll(selector);
}));

(c2.dom.select_all.cljs$core$IFn$_invoke$arity$2 = (function (selector,container){
return c2.dom.__GT_dom(container).querySelectorAll(selector);
}));

(c2.dom.select_all.cljs$lang$maxFixedArity = 2);

/**
 * Does live `node` match CSS `selector`?
 */
c2.dom.matches_selector_QMARK_ = (function c2$dom$matches_selector_QMARK_(node,selector){
return node.matchesSelector(selector);
});
/**
 * Return the children of a live DOM element.
 */
c2.dom.children = (function c2$dom$children(node){
return c2.dom.__GT_dom(node).children;
});
/**
 * Return parent of a live DOM node.
 */
c2.dom.parent = (function c2$dom$parent(node){
return c2.dom.__GT_dom(node).parentNode;
});
/**
 * Make element last child of container.
 * Returns live child.
 */
c2.dom.append_BANG_ = (function c2$dom$append_BANG_(container,el){
var el__$1 = c2.dom.__GT_dom(el);
goog.dom.appendChild(c2.dom.__GT_dom(container),el__$1);

return el__$1;
});
/**
 * Make element first child of container.
 * Returns live DOM child.
 */
c2.dom.prepend_BANG_ = (function c2$dom$prepend_BANG_(container,el){
var el__$1 = c2.dom.__GT_dom(el);
goog.dom.insertChildAt(c2.dom.__GT_dom(container),el__$1,(0));

return el__$1;
});
/**
 * Remove element from DOM and return it.
 * > *el* CSS selector or live DOM node
 */
c2.dom.remove_BANG_ = (function c2$dom$remove_BANG_(el){
return goog.dom.removeNode(c2.dom.__GT_dom(el));
});
/**
 * Replace live DOM node with a new one, returning the latter.
 * > *old* CSS selector or live DOM node
 * > *new* CSS selector, live DOM node, or hiccup vector
 */
c2.dom.replace_BANG_ = (function c2$dom$replace_BANG_(old,new$){
var new$__$1 = c2.dom.__GT_dom(new$);
goog.dom.replaceNode(new$__$1,c2.dom.__GT_dom(old));

return new$__$1;
});
/**
 * Get or set inline element style.
 * 
 * `(style el)`                map of inline element styles
 * 
 * `(style el :keyword)`       value of style :keyword
 * 
 * `(style el {:keyword val})` sets inline style according to map, returns element
 * 
 * `(style el :keyword val)`   sets single style, returns element
 */
c2.dom.style = (function c2$dom$style(var_args){
var G__22197 = arguments.length;
switch (G__22197) {
case 1:
return c2.dom.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c2.dom.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c2.dom.style.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(c2.dom.style.cljs$core$IFn$_invoke$arity$1 = (function (el){
throw (new Error("TODO: return map of element styles"));
}));

(c2.dom.style.cljs$core$IFn$_invoke$arity$2 = (function (el,x){
var el__$1 = c2.dom.__GT_dom(el);
if((x instanceof cljs.core.Keyword)){
return goog.style.getComputedStyle(el__$1,cljs.core.name(x));
} else {
if(cljs.core.map_QMARK_(x)){
var seq__22199_22335 = cljs.core.seq(x);
var chunk__22200_22336 = null;
var count__22201_22337 = (0);
var i__22202_22338 = (0);
while(true){
if((i__22202_22338 < count__22201_22337)){
var vec__22215_22339 = chunk__22200_22336.cljs$core$IIndexed$_nth$arity$2(null,i__22202_22338);
var k_22340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22215_22339,(0),null);
var v_22341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22215_22339,(1),null);
c2.dom.style.cljs$core$IFn$_invoke$arity$3(el__$1,k_22340,v_22341);


var G__22349 = seq__22199_22335;
var G__22350 = chunk__22200_22336;
var G__22351 = count__22201_22337;
var G__22352 = (i__22202_22338 + (1));
seq__22199_22335 = G__22349;
chunk__22200_22336 = G__22350;
count__22201_22337 = G__22351;
i__22202_22338 = G__22352;
continue;
} else {
var temp__5825__auto___22353 = cljs.core.seq(seq__22199_22335);
if(temp__5825__auto___22353){
var seq__22199_22354__$1 = temp__5825__auto___22353;
if(cljs.core.chunked_seq_QMARK_(seq__22199_22354__$1)){
var c__5694__auto___22355 = cljs.core.chunk_first(seq__22199_22354__$1);
var G__22356 = cljs.core.chunk_rest(seq__22199_22354__$1);
var G__22357 = c__5694__auto___22355;
var G__22358 = cljs.core.count(c__5694__auto___22355);
var G__22359 = (0);
seq__22199_22335 = G__22356;
chunk__22200_22336 = G__22357;
count__22201_22337 = G__22358;
i__22202_22338 = G__22359;
continue;
} else {
var vec__22218_22360 = cljs.core.first(seq__22199_22354__$1);
var k_22361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22218_22360,(0),null);
var v_22362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22218_22360,(1),null);
c2.dom.style.cljs$core$IFn$_invoke$arity$3(el__$1,k_22361,v_22362);


var G__22363 = cljs.core.next(seq__22199_22354__$1);
var G__22364 = null;
var G__22365 = (0);
var G__22366 = (0);
seq__22199_22335 = G__22363;
chunk__22200_22336 = G__22364;
count__22201_22337 = G__22365;
i__22202_22338 = G__22366;
continue;
}
} else {
}
}
break;
}

return el__$1;
} else {
return null;
}
}
}));

(c2.dom.style.cljs$core$IFn$_invoke$arity$3 = (function (el,k,v){
goog.style.setStyle(c2.dom.__GT_dom(el),cljs.core.name(k),((typeof v === 'string')?v:((typeof v === 'number')?(cljs.core.truth_((function (){var G__22224 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var fexpr__22223 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),null,new cljs.core.Keyword(null,"top","top",-1856271961),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"height","height",1025178622),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null);
return (fexpr__22223.cljs$core$IFn$_invoke$arity$1 ? fexpr__22223.cljs$core$IFn$_invoke$arity$1(G__22224) : fexpr__22223.call(null,G__22224));
})())?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+"px"):v):null)));

return el;
}));

(c2.dom.style.cljs$lang$maxFixedArity = 3);

/**
 * Get or set element attributes.
 * 
 * `(attr el)`                map of element attributes
 * 
 * `(attr el :keyword)`       value of attr :keyword
 * 
 * `(attr el {:keyword val})` sets element attributes according to map, returns element
 * 
 * `(attr el :keyword val)`   sets single attr, returns element
 */
c2.dom.attr = (function c2$dom$attr(var_args){
var G__22227 = arguments.length;
switch (G__22227) {
case 1:
return c2.dom.attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c2.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c2.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(c2.dom.attr.cljs$core$IFn$_invoke$arity$1 = (function (el){
var attrs = c2.dom.__GT_dom(el).attributes;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5649__auto__ = (function c2$dom$iter__22229(s__22230){
return (new cljs.core.LazySeq(null,(function (){
var s__22230__$1 = s__22230;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22230__$1);
if(temp__5825__auto__){
var s__22230__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22230__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__22230__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__22232 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__22231 = (0);
while(true){
if((i__22231 < size__5648__auto__)){
var i = cljs.core._nth(c__5647__auto__,i__22231);
cljs.core.chunk_append(b__22232,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((attrs[i]).name),(attrs[i]).value], null));

var G__22371 = (i__22231 + (1));
i__22231 = G__22371;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22232),c2$dom$iter__22229(cljs.core.chunk_rest(s__22230__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22232),null);
}
} else {
var i = cljs.core.first(s__22230__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((attrs[i]).name),(attrs[i]).value], null),c2$dom$iter__22229(cljs.core.rest(s__22230__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs.length));
})());
}));

(c2.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,x){
var el__$1 = c2.dom.__GT_dom(el);
if((x instanceof cljs.core.Keyword)){
return el__$1.getAttribute(cljs.core.name(x));
} else {
if(cljs.core.map_QMARK_(x)){
var seq__22242_22378 = cljs.core.seq(x);
var chunk__22243_22379 = null;
var count__22244_22380 = (0);
var i__22245_22381 = (0);
while(true){
if((i__22245_22381 < count__22244_22380)){
var vec__22259_22382 = chunk__22243_22379.cljs$core$IIndexed$_nth$arity$2(null,i__22245_22381);
var k_22383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22259_22382,(0),null);
var v_22384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22259_22382,(1),null);
c2.dom.attr.cljs$core$IFn$_invoke$arity$3(el__$1,k_22383,v_22384);


var G__22390 = seq__22242_22378;
var G__22391 = chunk__22243_22379;
var G__22392 = count__22244_22380;
var G__22393 = (i__22245_22381 + (1));
seq__22242_22378 = G__22390;
chunk__22243_22379 = G__22391;
count__22244_22380 = G__22392;
i__22245_22381 = G__22393;
continue;
} else {
var temp__5825__auto___22399 = cljs.core.seq(seq__22242_22378);
if(temp__5825__auto___22399){
var seq__22242_22402__$1 = temp__5825__auto___22399;
if(cljs.core.chunked_seq_QMARK_(seq__22242_22402__$1)){
var c__5694__auto___22405 = cljs.core.chunk_first(seq__22242_22402__$1);
var G__22410 = cljs.core.chunk_rest(seq__22242_22402__$1);
var G__22411 = c__5694__auto___22405;
var G__22412 = cljs.core.count(c__5694__auto___22405);
var G__22413 = (0);
seq__22242_22378 = G__22410;
chunk__22243_22379 = G__22411;
count__22244_22380 = G__22412;
i__22245_22381 = G__22413;
continue;
} else {
var vec__22264_22415 = cljs.core.first(seq__22242_22402__$1);
var k_22416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22264_22415,(0),null);
var v_22417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22264_22415,(1),null);
c2.dom.attr.cljs$core$IFn$_invoke$arity$3(el__$1,k_22416,v_22417);


var G__22422 = cljs.core.next(seq__22242_22402__$1);
var G__22423 = null;
var G__22424 = (0);
var G__22425 = (0);
seq__22242_22378 = G__22422;
chunk__22243_22379 = G__22423;
count__22244_22380 = G__22424;
i__22245_22381 = G__22425;
continue;
}
} else {
}
}
break;
}

return el__$1;
} else {
return null;
}
}
}));

(c2.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,k,v){
var el__$1 = c2.dom.__GT_dom(el);
if((v == null)){
el__$1.removeAttribute(cljs.core.name(k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"style","style",-496642736),k)){
c2.dom.style.cljs$core$IFn$_invoke$arity$2(el__$1,v);
} else {
el__$1.setAttribute(cljs.core.name(k),v);
}
}

return el__$1;
}));

(c2.dom.attr.cljs$lang$maxFixedArity = 3);

/**
 * Get or set element text, returning element
 */
c2.dom.text = (function c2$dom$text(var_args){
var G__22276 = arguments.length;
switch (G__22276) {
case 1:
return c2.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c2.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(c2.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.getTextContent(c2.dom.__GT_dom(el));
}));

(c2.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,v){
var el__$1 = c2.dom.__GT_dom(el);
goog.dom.setTextContent(el__$1,v);

return el__$1;
}));

(c2.dom.text.cljs$lang$maxFixedArity = 2);

/**
 * Get or set element value.
 */
c2.dom.val = (function c2$dom$val(var_args){
var G__22289 = arguments.length;
switch (G__22289) {
case 1:
return c2.dom.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c2.dom.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(c2.dom.val.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.forms.getValue(c2.dom.__GT_dom(el));
}));

(c2.dom.val.cljs$core$IFn$_invoke$arity$2 = (function (el,v){
var el__$1 = c2.dom.__GT_dom(el);
goog.dom.forms.setValue(el__$1,v);

return el__$1;
}));

(c2.dom.val.cljs$lang$maxFixedArity = 2);

/**
 * Add or remove `class` to element based on boolean `classed?`, returning element.
 */
c2.dom.classed_BANG_ = (function c2$dom$classed_BANG_(el,class$,classed_QMARK_){
goog.dom.classes.enable(c2.dom.__GT_dom(el),cljs.core.name(class$),classed_QMARK_);

return el;
});
c2.dom.add_class_BANG_ = (function c2$dom$add_class_BANG_(el,class$){
return c2.dom.classed_BANG_(el,class$,true);
});
c2.dom.remove_class_BANG_ = (function c2$dom$remove_class_BANG_(el,class$){
return c2.dom.classed_BANG_(el,class$,false);
});
c2.dom.request_animation_frame = (function (){var or__5162__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return (function (p1__22295_SHARP_){
return setTimeout((function (){
return (p1__22295_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__22295_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__22295_SHARP_.call(null));
}),(10));
});
}
}
})();

//# sourceMappingURL=c2.dom.js.map
