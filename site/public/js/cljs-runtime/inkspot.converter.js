goog.provide('inkspot.converter');
/**
 * RGB to HSV (Hue, Saturation, Value) conversion.
 */
inkspot.converter.rgb__GT_hsv = (function inkspot$converter$rgb__GT_hsv(color){
var r = (inkspot.color.red(color) / 255.0);
var g = (inkspot.color.green(color) / 255.0);
var b = (inkspot.color.blue(color) / 255.0);
var a = inkspot.color.alpha(color);
var v = cljs.core.max.cljs$core$IFn$_invoke$arity$variadic(r,g,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([b], 0));
var d = (v - cljs.core.min.cljs$core$IFn$_invoke$arity$variadic(r,g,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([b], 0)));
if((d === (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,v], null);
} else {
var s = (d / v);
var vec__31422 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__1838_SHARP_){
return ((v - p1__1838_SHARP_) / d);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
var dr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31422,(0),null);
var dg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31422,(1),null);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31422,(2),null);
var h = (function (){var pred__31434 = cljs.core._EQ_;
var expr__31435 = v;
if(cljs.core.truth_((pred__31434.cljs$core$IFn$_invoke$arity$2 ? pred__31434.cljs$core$IFn$_invoke$arity$2(r,expr__31435) : pred__31434.call(null,r,expr__31435)))){
return (db - dg);
} else {
if(cljs.core.truth_((pred__31434.cljs$core$IFn$_invoke$arity$2 ? pred__31434.cljs$core$IFn$_invoke$arity$2(g,expr__31435) : pred__31434.call(null,g,expr__31435)))){
return ((2.0 + dr) - db);
} else {
if(cljs.core.truth_((pred__31434.cljs$core$IFn$_invoke$arity$2 ? pred__31434.cljs$core$IFn$_invoke$arity$2(b,expr__31435) : pred__31434.call(null,b,expr__31435)))){
return ((4.0 + dg) - dr);
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__31435))));
}
}
}
})();
var h__$1 = cljs.core.mod((h * 60.0),360.0);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h__$1,s,v,a], null);
}
});
/**
 * HSV (Hue, Saturation, Value) to RGB conversion.
 */
inkspot.converter.hsv__GT_rgb = (function inkspot$converter$hsv__GT_rgb(p__31491){
var vec__31493 = p__31491;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31493,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31493,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31493,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31493,(3),null);
if((s === (0))){
return inkspot.color.coerce(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v,v], null));
} else {
var h__$1 = cljs.core.mod((h / (60)),(6));
var i = (h__$1 | 0);
var f = ((cljs.core.even_QMARK_(i))?((1) - (h__$1 - i)):(h__$1 - i));
var v__$1 = (v * 255.0);
var m = (v__$1 * (1.0 - s));
var n = (v__$1 * (1.0 - (s * f)));
var a__$1 = (function (){var or__5162__auto__ = a;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return 1.0;
}
})();
return inkspot.color.coerce((function (){var pred__31507 = cljs.core._EQ_;
var expr__31508 = i;
if(cljs.core.truth_((pred__31507.cljs$core$IFn$_invoke$arity$2 ? pred__31507.cljs$core$IFn$_invoke$arity$2((0),expr__31508) : pred__31507.call(null,(0),expr__31508)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__$1,n,m,a__$1], null);
} else {
if(cljs.core.truth_((pred__31507.cljs$core$IFn$_invoke$arity$2 ? pred__31507.cljs$core$IFn$_invoke$arity$2((1),expr__31508) : pred__31507.call(null,(1),expr__31508)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,v__$1,m,a__$1], null);
} else {
if(cljs.core.truth_((pred__31507.cljs$core$IFn$_invoke$arity$2 ? pred__31507.cljs$core$IFn$_invoke$arity$2((2),expr__31508) : pred__31507.call(null,(2),expr__31508)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,v__$1,n,a__$1], null);
} else {
if(cljs.core.truth_((pred__31507.cljs$core$IFn$_invoke$arity$2 ? pred__31507.cljs$core$IFn$_invoke$arity$2((3),expr__31508) : pred__31507.call(null,(3),expr__31508)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,n,v__$1,a__$1], null);
} else {
if(cljs.core.truth_((pred__31507.cljs$core$IFn$_invoke$arity$2 ? pred__31507.cljs$core$IFn$_invoke$arity$2((4),expr__31508) : pred__31507.call(null,(4),expr__31508)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,m,v__$1,a__$1], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__$1,m,n,a__$1], null);
}
}
}
}
}
})());
}
});
/**
 * RGB to HSL (Hue, Saturation and Luminosity) conversion.
 */
inkspot.converter.rgb__GT_hsl = (function inkspot$converter$rgb__GT_hsl(color){
var r = (inkspot.color.red(color) / 255.0);
var g = (inkspot.color.green(color) / 255.0);
var b = (inkspot.color.blue(color) / 255.0);
var a = inkspot.color.alpha(color);
var min_val = cljs.core.min.cljs$core$IFn$_invoke$arity$variadic(r,g,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([b], 0));
var max_val = cljs.core.max.cljs$core$IFn$_invoke$arity$variadic(r,g,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([b], 0));
var l = ((max_val + min_val) / 2.0);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(min_val,max_val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,l], null);
} else {
var d = (max_val - min_val);
var s = (((l < 0.5))?(d / (max_val + min_val)):(d / ((2.0 - max_val) - min_val)));
var vec__31518 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__1839_SHARP_){
return ((max_val - p1__1839_SHARP_) / d);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
var dr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31518,(0),null);
var dg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31518,(1),null);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31518,(2),null);
var h = (function (){var pred__31527 = cljs.core._EQ_;
var expr__31528 = max_val;
if(cljs.core.truth_((pred__31527.cljs$core$IFn$_invoke$arity$2 ? pred__31527.cljs$core$IFn$_invoke$arity$2(r,expr__31528) : pred__31527.call(null,r,expr__31528)))){
return (db - dg);
} else {
if(cljs.core.truth_((pred__31527.cljs$core$IFn$_invoke$arity$2 ? pred__31527.cljs$core$IFn$_invoke$arity$2(g,expr__31528) : pred__31527.call(null,g,expr__31528)))){
return ((2.0 + dr) - db);
} else {
if(cljs.core.truth_((pred__31527.cljs$core$IFn$_invoke$arity$2 ? pred__31527.cljs$core$IFn$_invoke$arity$2(b,expr__31528) : pred__31527.call(null,b,expr__31528)))){
return ((4.0 + dg) - dr);
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__31528))));
}
}
}
})();
var h__$1 = cljs.core.mod((h * 60.0),360.0);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h__$1,s,l,a], null);
}
});
/**
 * HSL (Hue, Saturation and Luminosity) to RGB conversion.
 */
inkspot.converter.hsl__GT_rgb = (function inkspot$converter$hsl__GT_rgb(p__31548){
var vec__31555 = p__31548;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31555,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31555,(1),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31555,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31555,(3),null);
if((s === (0))){
return inkspot.color.coerce(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,l,l], null));
} else {
var n2 = (((l < 0.5))?(l * (1.0 + s)):((l + s) - (l * s)));
var n1 = ((2.0 * l) - n2);
var h__$1 = (h / 60.0);
var f = (function (h__$2){
var h__$3 = cljs.core.mod(h__$2,6.0);
if((h__$3 < 1.0)){
return (n1 + ((n2 - n1) * h__$3));
} else {
if((h__$3 < 3.0)){
return n2;
} else {
if((h__$3 < 4.0)){
return (n1 + ((n2 - n1) * (4.0 - h__$3)));
} else {
return n1;

}
}
}
});
var r = (255.0 * f((h__$1 + (2))));
var g = (255.0 * f(h__$1));
var b = (255.0 * f((h__$1 - (2))));
return inkspot.color.coerce(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,(function (){var or__5162__auto__ = a;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return 1.0;
}
})()], null));
}
});
/**
 * RGB to Y'UV (Luma, Chrominance) Conversion.
 */
inkspot.converter.rgb__GT_yuv = (function inkspot$converter$rgb__GT_yuv(color){
var r = (inkspot.color.red(color) / 255.0);
var g = (inkspot.color.green(color) / 255.0);
var b = (inkspot.color.blue(color) / 255.0);
var a = inkspot.color.alpha(color);
var y = (((r * 0.299) + (g * 0.587)) + (b * 0.114));
var u = (((r * -0.14713) + (g * -0.28886)) + (b * 0.436));
var v = (((r * 0.615) + (g * -0.51499)) + (b * -0.10001));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,u,v,a], null);
});
inkspot.converter.yuv__GT_rgb = (function inkspot$converter$yuv__GT_rgb(p__31610){
var vec__31614 = p__31610;
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31614,(0),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31614,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31614,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31614,(3),null);

var r = ((y + (v * 1.13983)) * 255.0);
var g = (((y - (u * 0.39465)) - (v * 0.5806)) * 255.0);
var b = ((y + (u * 2.03211)) * 255.0);
return inkspot.color.coerce(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,(function (){var or__5162__auto__ = a;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return 1.0;
}
})()], null));
});
/**
 * RGB to greyscale conversion, largely by taking the Luma
 * value from Y'UV conversion.
 */
inkspot.converter.grayscale = (function inkspot$converter$grayscale(color){
var vec__31629 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,255.0),inkspot.converter.rgb__GT_yuv(color));
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31629,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31629,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31629,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31629,(3),null);
return inkspot.color.coerce(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,y,y,a], null));
});
/**
 * Complimentary color conversion, largely by taking the HSL
 * value, and rotating the Hue by 180 degrees, and then converting
 * back to RGB.
 */
inkspot.converter.complementary = (function inkspot$converter$complementary(color){
var vec__31637 = inkspot.converter.rgb__GT_hsl(color);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31637,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31637,(1),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31637,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31637,(3),null);
return inkspot.converter.hsl__GT_rgb(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((h + (180)),(360)),s,l,a], null));
});

//# sourceMappingURL=inkspot.converter.js.map
