goog.provide('enchilada.core');
goog.scope(function(){
  enchilada.core.goog$module$goog$object = goog.module.get('goog.object');
});
enchilada.core.find_by_id = (function enchilada$core$find_by_id(id){
return goog.dom.getElement(id);
});
enchilada.core._cached_canvas_el = (function enchilada$core$_cached_canvas_el(){
var or__5162__auto__ = goog.dom.getElement("canvas-area");
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return window.canvas_element;
}
});
enchilada.core._cached_ctx = (function enchilada$core$_cached_ctx(){
var c = goog.dom.getElement("canvas-area");
if(cljs.core.truth_(c)){
var or__5162__auto__ = c.getContext("2d");
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return c.getContext("moz-curve","webkit-2d-context");
}
} else {
return null;
}
});
enchilada.core._jq = (function enchilada$core$_jq(el){

if(cljs.core.truth_((function (){var and__5160__auto__ = el;
if(cljs.core.truth_(and__5160__auto__)){
return (typeof jQuery !== 'undefined');
} else {
return and__5160__auto__;
}
})())){
return (new jQuery(el));
} else {
return null;
}
});
enchilada.core.canvas = (function (){var or__5162__auto__ = enchilada.core._jq(enchilada.core._cached_canvas_el());
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return enchilada.core.find_by_id("canvas-area");
}
})();
enchilada.core.svg = (function (){var or__5162__auto__ = enchilada.core._jq(enchilada.core.find_by_id("svg-area"));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return enchilada.core.find_by_id("svg-area");
}
})();
enchilada.core.webgl = (function (){var or__5162__auto__ = enchilada.core._jq(enchilada.core.find_by_id("webgl-area"));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return enchilada.core.find_by_id("webgl-area");
}
})();
enchilada.core.ctx = (function (){var c = goog.dom.getElement("canvas-area");
if(cljs.core.truth_(c)){
var or__5162__auto__ = c.getContext("2d");
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return c.getContext("moz-curve","webkit-2d-context");
}
} else {
return null;
}
})();
enchilada.core.console_el = (function enchilada$core$console_el(){
return enchilada.core.find_by_id("console");
});
enchilada.core.error_div = (function enchilada$core$error_div(){
return enchilada.core.find_by_id("error-div");
});
/**
 * A map of the canvas element's dimensions.
 */
enchilada.core.canvas_size_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(600)], null));
/**
 * Returns [width height] vector of the current canvas dimensions.
 */
enchilada.core.canvas_size = (function enchilada$core$canvas_size(){
var s = cljs.core.deref(enchilada.core.canvas_size_state);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(s)], null);
});
enchilada.core.refresh_canvas_size_BANG_ = (function enchilada$core$refresh_canvas_size_BANG_(){
var c = goog.dom.getElement("canvas-area");
if(cljs.core.truth_(c)){
return cljs.core.reset_BANG_(enchilada.core.canvas_size_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),c.width,new cljs.core.Keyword(null,"height","height",1025178622),c.height], null));
} else {
return null;
}
});
/**
 * Returns the value of a keyword argument from a JS object, or falls back to options.
 */
enchilada.core.value_of = (function enchilada$core$value_of(var_args){
var G__20065 = arguments.length;
switch (G__20065) {
case 2:
return enchilada.core.value_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return enchilada.core.value_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(enchilada.core.value_of.cljs$core$IFn$_invoke$arity$2 = (function (k,opts){
var opts_map = ((cljs.core.map_QMARK_(opts))?opts:cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts_map,k);
}));

(enchilada.core.value_of.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return opts;
}));

(enchilada.core.value_of.cljs$lang$maxFixedArity = 2);

enchilada.core.to_js = (function enchilada$core$to_js(x){
return cljs.core.clj__GT_js(x);
});
enchilada.core.show = (function enchilada$core$show(el){

if(cljs.core.truth_(el)){
if((((typeof jQuery !== 'undefined')) && (jQuery.is(enchilada.core.jQuery,el)))){
return el.show();
} else {
return enchilada.core.goog$module$goog$object.set(el,"style.display","block");
}
} else {
return null;
}
});
enchilada.core.hide = (function enchilada$core$hide(el){

if(cljs.core.truth_(el)){
if((((typeof jQuery !== 'undefined')) && (jQuery.is(enchilada.core.jQuery,el)))){
return el.hide();
} else {
return enchilada.core.goog$module$goog$object.set(el,"style.display","none");
}
} else {
return null;
}
});
enchilada.core.proxy_request = (function enchilada$core$proxy_request(url){
return url;
});

//# sourceMappingURL=enchilada.core.js.map
