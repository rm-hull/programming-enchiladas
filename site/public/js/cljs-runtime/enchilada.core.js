goog.provide('enchilada.core');
goog.scope(function(){
  enchilada.core.goog$module$goog$object = goog.module.get('goog.object');
});
enchilada.core.find_by_id = (function enchilada$core$find_by_id(id){
return goog.dom.getElement(id);
});
enchilada.core._cached_canvas = (function enchilada$core$_cached_canvas(){
var or__5162__auto__ = enchilada.core.find_by_id("canvas-area");
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
enchilada.core.ctx = (function enchilada$core$ctx(){
return enchilada.core._cached_ctx();
});
enchilada.core.canvas = (function enchilada$core$canvas(){
return enchilada.core._cached_canvas();
});
enchilada.core.webgl = (function enchilada$core$webgl(){
return enchilada.core.find_by_id("webgl-area");
});
enchilada.core.webgl_context = (function enchilada$core$webgl_context(){
var c = enchilada.core.webgl();
if(cljs.core.truth_(c)){
var or__5162__auto__ = c.getContext("webgl");
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return c.getContext("experimental-webgl");
}
} else {
return null;
}
});
enchilada.core.svg = (function enchilada$core$svg(){
return enchilada.core.find_by_id("svg-area");
});
enchilada.core.console_el = (function enchilada$core$console_el(){
return enchilada.core.find_by_id("console");
});
enchilada.core.error_div = (function enchilada$core$error_div(){
return enchilada.core.find_by_id("error-div");
});
/**
 * A map of the canvas element's dimensions. Lazily computed so the canvas exists.
 */
enchilada.core.canvas_size = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(600)], null));
enchilada.core.refresh_canvas_size_BANG_ = (function enchilada$core$refresh_canvas_size_BANG_(){
var c = enchilada.core.canvas();
if(cljs.core.truth_(c)){
return cljs.core.reset_BANG_(enchilada.core.canvas_size,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),c.width,new cljs.core.Keyword(null,"height","height",1025178622),c.height], null));
} else {
return null;
}
});
/**
 * Returns the value of a keyword argument from a JS object, or falls back to options.
 * Used by gists like `(value-of :texture (random-texture))`.
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
return enchilada.core.goog$module$goog$object.set(el,"style.display","block");
} else {
return null;
}
});
enchilada.core.hide = (function enchilada$core$hide(el){
if(cljs.core.truth_(el)){
return enchilada.core.goog$module$goog$object.set(el,"style.display","none");
} else {
return null;
}
});
enchilada.core.proxy_request = (function enchilada$core$proxy_request(url){
return url;
});

//# sourceMappingURL=enchilada.core.js.map
