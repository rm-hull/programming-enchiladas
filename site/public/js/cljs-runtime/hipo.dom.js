goog.provide('hipo.dom');
hipo.dom.create_element = (function hipo$dom$create_element(namespace_uri,tag){
if(cljs.core.truth_(namespace_uri)){
return document.createElementNS(namespace_uri,tag);
} else {
return document.createElement(tag);
}
});
hipo.dom.node_QMARK_ = (function hipo$dom$node_QMARK_(o){
return (o instanceof Node);
});
hipo.dom.element_QMARK_ = (function hipo$dom$element_QMARK_(el){
if(cljs.core.truth_(el)){
return ((1) === el.nodeType);
} else {
return null;
}
});
hipo.dom.text_element_QMARK_ = (function hipo$dom$text_element_QMARK_(el){
if(cljs.core.truth_(el)){
return ((3) === el.nodeType);
} else {
return null;
}
});
hipo.dom.child = (function hipo$dom$child(el,i){
if(hipo.dom.node_QMARK_(el)){
} else {
throw (new Error("Assert failed: (node? el)"));
}

if((!((i < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? i))"));
}

return (el.childNodes[i]);
});
hipo.dom.children = (function hipo$dom$children(var_args){
var G__34288 = arguments.length;
switch (G__34288) {
case 1:
return hipo.dom.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hipo.dom.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(hipo.dom.children.cljs$core$IFn$_invoke$arity$1 = (function (el){
return hipo.dom.children.cljs$core$IFn$_invoke$arity$2(el,(0));
}));

(hipo.dom.children.cljs$core$IFn$_invoke$arity$2 = (function (el,i){
if(hipo.dom.node_QMARK_(el)){
} else {
throw (new Error("Assert failed: (node? el)"));
}

if((!((i < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? i))"));
}

var fel = el.firstChild;
if(cljs.core.truth_(fel)){
var cel = fel;
var acc = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cel], null);
while(true){
var nel = cel.nextSibling;
if(cljs.core.truth_((function (){var and__5160__auto__ = (!(((cljs.core.count(acc) - (i + (1))) === (0))));
if(and__5160__auto__){
return nel;
} else {
return and__5160__auto__;
}
})())){
var G__34313 = nel;
var G__34314 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,nel);
cel = G__34313;
acc = G__34314;
continue;
} else {
return acc;
}
break;
}
} else {
return null;
}
}));

(hipo.dom.children.cljs$lang$maxFixedArity = 2);

hipo.dom.replace_BANG_ = (function hipo$dom$replace_BANG_(el,nel){
if(hipo.dom.node_QMARK_(el)){
} else {
throw (new Error("Assert failed: (node? el)"));
}

if(hipo.dom.node_QMARK_(nel)){
} else {
throw (new Error("Assert failed: (node? nel)"));
}

if((!((el.parentElement == null)))){
} else {
throw (new Error("Assert failed: (not (nil? (.-parentElement el)))"));
}

return el.parentElement.replaceChild(nel,el);
});
hipo.dom.replace_text_BANG_ = (function hipo$dom$replace_text_BANG_(el,s){
if(hipo.dom.node_QMARK_(el)){
} else {
throw (new Error("Assert failed: (node? el)"));
}

if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(cljs.core.truth_(hipo.dom.text_element_QMARK_(el))){
return (el.textContent = s);
} else {
return hipo.dom.replace_BANG_(el,document.createTextNode(s));
}
});
hipo.dom.clear_BANG_ = (function hipo$dom$clear_BANG_(el){
if(cljs.core.truth_(hipo.dom.element_QMARK_(el))){
} else {
throw (new Error("Assert failed: (element? el)"));
}

return (el.innerHTML = "");
});
hipo.dom.remove_trailing_children_BANG_ = (function hipo$dom$remove_trailing_children_BANG_(el,n){
if(hipo.dom.node_QMARK_(el)){
} else {
throw (new Error("Assert failed: (node? el)"));
}

if((!((n < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var n__5762__auto__ = n;
var _ = (0);
while(true){
if((_ < n__5762__auto__)){
el.removeChild(el.lastChild);

var G__34318 = (_ + (1));
_ = G__34318;
continue;
} else {
return null;
}
break;
}
});
hipo.dom.insert_child_BANG_ = (function hipo$dom$insert_child_BANG_(el,i,nel){
if(hipo.dom.node_QMARK_(el)){
} else {
throw (new Error("Assert failed: (node? el)"));
}

if((!((i < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? i))"));
}

if(hipo.dom.node_QMARK_(nel)){
} else {
throw (new Error("Assert failed: (node? nel)"));
}

return el.insertBefore(nel,hipo.dom.child(el,i));
});
hipo.dom.remove_child_BANG_ = (function hipo$dom$remove_child_BANG_(el,i){
if(hipo.dom.node_QMARK_(el)){
} else {
throw (new Error("Assert failed: (node? el)"));
}

if((!((i < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? i))"));
}

return el.removeChild(hipo.dom.child(el,i));
});

//# sourceMappingURL=hipo.dom.js.map
