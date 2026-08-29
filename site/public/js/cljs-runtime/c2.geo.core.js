goog.provide('c2.geo.core');
c2.geo.core.__GT_arr = (function c2$geo$core$__GT_arr(c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Array,cljs.core.type(c))){
return c;
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(c);
}
});

c2.geo.core.join = (function c2$geo$core$join(var_args){
var G__24098 = arguments.length;
switch (G__24098) {
case 1:
return c2.geo.core.join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c2.geo.core.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(c2.geo.core.join.cljs$core$IFn$_invoke$arity$1 = (function (c){
return c2.geo.core.join.cljs$core$IFn$_invoke$arity$2("",c);
}));

(c2.geo.core.join.cljs$core$IFn$_invoke$arity$2 = (function (sep,c){
return c2.geo.core.__GT_arr(c).join(sep);
}));

(c2.geo.core.join.cljs$lang$maxFixedArity = 2);


c2.geo.core.map = (function c2$geo$core$map(f,c){
return c2.geo.core.__GT_arr(c).map(f);
});
/**
 * Convert geoJSON to SVG path data.
 * 
 * Kwargs:
 * > *:projection* fn applied to each coordinate, defaults to identity
 */
c2.geo.core.geo__GT_svg = (function c2$geo$core$geo__GT_svg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___24188 = arguments.length;
var i__5898__auto___24189 = (0);
while(true){
if((i__5898__auto___24189 < len__5897__auto___24188)){
args__5903__auto__.push((arguments[i__5898__auto___24189]));

var G__24190 = (i__5898__auto___24189 + (1));
i__5898__auto___24189 = G__24190;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return c2.geo.core.geo__GT_svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(c2.geo.core.geo__GT_svg.cljs$core$IFn$_invoke$arity$variadic = (function (geo,p__24106){
var map__24107 = p__24106;
var map__24107__$1 = cljs.core.__destructure_map(map__24107);
var projection = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24107__$1,new cljs.core.Keyword(null,"projection","projection",-412523042),cljs.core.identity);
var project = (function (coordinate){
return c2.geo.core.join.cljs$core$IFn$_invoke$arity$2(",",(projection.cljs$core$IFn$_invoke$arity$1 ? projection.cljs$core$IFn$_invoke$arity$1(coordinate) : projection.call(null,coordinate)));
});
var coords__GT_path = (function (coordinates){
return (""+"M"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2.geo.core.join.cljs$core$IFn$_invoke$arity$2("L",c2.geo.core.map(project,coordinates)))+"Z");
});
try{if((function (){var or__5162__auto__ = (geo instanceof clojure.lang.ILookup);
if(or__5162__auto__){
return or__5162__auto__;
} else {
if((!((geo == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === geo.clojure$core$match$IMatchLookup$)))){
return true;
} else {
if((!geo.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(clojure.core.match.IMatchLookup,geo);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(clojure.core.match.IMatchLookup,geo);
}
}
})()){
try{var geo_type__24117 = clojure.core.match.val_at_STAR_(geo,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(geo_type__24117,"FeatureCollection")){
var xs = clojure.core.match.val_at_STAR_(geo,new cljs.core.Keyword(null,"features","features",-1146962336));
return c2.geo.core.join.cljs$core$IFn$_invoke$arity$1(c2.geo.core.map((function (p1__69649_SHARP_){
return c2.geo.core.geo__GT_svg.cljs$core$IFn$_invoke$arity$variadic(p1__69649_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"projection","projection",-412523042),projection], 0));
}),xs));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(geo_type__24117,"Feature")){
var g = clojure.core.match.val_at_STAR_(geo,new cljs.core.Keyword(null,"geometry","geometry",-405034994));
return c2.geo.core.geo__GT_svg.cljs$core$IFn$_invoke$arity$variadic(g,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"projection","projection",-412523042),projection], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(geo_type__24117,"Polygon")){
var xs = clojure.core.match.val_at_STAR_(geo,new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668));
return c2.geo.core.join.cljs$core$IFn$_invoke$arity$1(c2.geo.core.map(coords__GT_path,xs));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(geo_type__24117,"MultiPolygon")){
var xs = clojure.core.match.val_at_STAR_(geo,new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668));
return c2.geo.core.join.cljs$core$IFn$_invoke$arity$1(c2.geo.core.map((function (subpoly){
return c2.geo.core.join.cljs$core$IFn$_invoke$arity$1(c2.geo.core.map(coords__GT_path,subpoly));
}),xs));
} else {
throw clojure.core.match.backtrack;

}
}
}
}
}catch (e24129){if((e24129 instanceof java.lang.Exception)){
var e__23141__auto__ = e24129;
if((e__23141__auto__ === clojure.core.match.backtrack)){
throw clojure.core.match.backtrack;
} else {
throw e__23141__auto__;
}
} else {
throw e24129;

}
}} else {
throw clojure.core.match.backtrack;

}
}catch (e24125){if((e24125 instanceof java.lang.Exception)){
var e__23141__auto__ = e24125;
if((e__23141__auto__ === clojure.core.match.backtrack)){
var G__24114 = geo;
return null;
} else {
throw e__23141__auto__;
}
} else {
throw e24125;

}
}}));

(c2.geo.core.geo__GT_svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c2.geo.core.geo__GT_svg.cljs$lang$applyTo = (function (seq24099){
var G__24100 = cljs.core.first(seq24099);
var seq24099__$1 = cljs.core.next(seq24099);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24100,seq24099__$1);
}));

/**
 * Convert coordinates (potentially map of `{:lat :lon}`) to 2-vector.
 */
c2.geo.core.__GT_latlon = (function c2$geo$core$__GT_latlon(coordinates){
try{if(cljs.core.vector_QMARK_(coordinates)){
try{if(((cljs.core.vector_QMARK_(coordinates)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coordinates),2)))){
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coordinates,(0));
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coordinates,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon], null);
} else {
throw clojure.core.match.backtrack;

}
}catch (e24147){if((e24147 instanceof java.lang.Exception)){
var e__23141__auto__ = e24147;
if((e__23141__auto__ === clojure.core.match.backtrack)){
throw clojure.core.match.backtrack;
} else {
throw e__23141__auto__;
}
} else {
throw e24147;

}
}} else {
if((function (){var or__5162__auto__ = (coordinates instanceof clojure.lang.ILookup);
if(or__5162__auto__){
return or__5162__auto__;
} else {
if((!((coordinates == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === coordinates.clojure$core$match$IMatchLookup$)))){
return true;
} else {
if((!coordinates.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(clojure.core.match.IMatchLookup,coordinates);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(clojure.core.match.IMatchLookup,coordinates);
}
}
})()){
var lon = clojure.core.match.val_at_STAR_(coordinates,new cljs.core.Keyword(null,"lon","lon",522068437));
var lat = clojure.core.match.val_at_STAR_(coordinates,new cljs.core.Keyword(null,"lat","lat",-580793929));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon], null);
} else {
throw clojure.core.match.backtrack;

}
}
}catch (e24142){if((e24142 instanceof java.lang.Exception)){
var e__23141__auto__ = e24142;
if((e__23141__auto__ === clojure.core.match.backtrack)){
var G__24137 = coordinates;
return null;
} else {
throw e__23141__auto__;
}
} else {
throw e24142;

}
}});
/**
 * Radius of OUR AWESOME PLANET, in kilometers
 */
c2.geo.core.radius_of_earth = 6378.1;
/**
 * Calculate the great-circle distance between two lat/lon coordinates on a sphere with radius `r` (defaults to Earth radius).
 */
c2.geo.core.haversine = (function c2$geo$core$haversine(var_args){
var G__24157 = arguments.length;
switch (G__24157) {
case 2:
return c2.geo.core.haversine.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c2.geo.core.haversine.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(c2.geo.core.haversine.cljs$core$IFn$_invoke$arity$2 = (function (co1,co2){
return c2.geo.core.haversine.cljs$core$IFn$_invoke$arity$3(co1,co2,c2.geo.core.radius_of_earth);
}));

(c2.geo.core.haversine.cljs$core$IFn$_invoke$arity$3 = (function (co1,co2,r){
var vec__24164 = c2.geo.core.__GT_latlon(co1);
var lat1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24164,(0),null);
var lon1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24164,(1),null);
var vec__24167 = c2.geo.core.__GT_latlon(co2);
var lat2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24167,(0),null);
var lon2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24167,(1),null);
var square_half_chord = (c2.maths.sq(c2.maths.sin((c2.maths.rad((lat2 - lat1)) / (2)))) + ((c2.maths.cos(c2.maths.rad(lat1)) * c2.maths.cos(c2.maths.rad(lat2))) * c2.maths.sq(c2.maths.sin((c2.maths.rad((lon2 - lon1)) / (2))))));
var angular_distance = (c2.maths.asin(c2.maths.sqrt(square_half_chord)) * (2));
return (angular_distance * r);
}));

(c2.geo.core.haversine.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=c2.geo.core.js.map
