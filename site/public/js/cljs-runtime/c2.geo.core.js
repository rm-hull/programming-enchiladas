goog.provide('c2.geo.core');
c2.geo.core.__GT_arr = (function c2$geo$core$__GT_arr(c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Array,cljs.core.type(c))){
return c;
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(c);
}
});

c2.geo.core.join = (function c2$geo$core$join(var_args){
var G__24036 = arguments.length;
switch (G__24036) {
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
var len__5897__auto___24179 = arguments.length;
var i__5898__auto___24180 = (0);
while(true){
if((i__5898__auto___24180 < len__5897__auto___24179)){
args__5903__auto__.push((arguments[i__5898__auto___24180]));

var G__24181 = (i__5898__auto___24180 + (1));
i__5898__auto___24180 = G__24181;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return c2.geo.core.geo__GT_svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(c2.geo.core.geo__GT_svg.cljs$core$IFn$_invoke$arity$variadic = (function (geo,p__24049){
var map__24050 = p__24049;
var map__24050__$1 = cljs.core.__destructure_map(map__24050);
var projection = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24050__$1,new cljs.core.Keyword(null,"projection","projection",-412523042),cljs.core.identity);
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
try{var geo_type__24067 = clojure.core.match.val_at_STAR_(geo,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(geo_type__24067,"FeatureCollection")){
var xs = clojure.core.match.val_at_STAR_(geo,new cljs.core.Keyword(null,"features","features",-1146962336));
return c2.geo.core.join.cljs$core$IFn$_invoke$arity$1(c2.geo.core.map((function (p1__69649_SHARP_){
return c2.geo.core.geo__GT_svg.cljs$core$IFn$_invoke$arity$variadic(p1__69649_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"projection","projection",-412523042),projection], 0));
}),xs));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(geo_type__24067,"Feature")){
var g = clojure.core.match.val_at_STAR_(geo,new cljs.core.Keyword(null,"geometry","geometry",-405034994));
return c2.geo.core.geo__GT_svg.cljs$core$IFn$_invoke$arity$variadic(g,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"projection","projection",-412523042),projection], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(geo_type__24067,"Polygon")){
var xs = clojure.core.match.val_at_STAR_(geo,new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668));
return c2.geo.core.join.cljs$core$IFn$_invoke$arity$1(c2.geo.core.map(coords__GT_path,xs));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(geo_type__24067,"MultiPolygon")){
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
}catch (e24080){if((e24080 instanceof java.lang.Exception)){
var e__23053__auto__ = e24080;
if((e__23053__auto__ === clojure.core.match.backtrack)){
throw clojure.core.match.backtrack;
} else {
throw e__23053__auto__;
}
} else {
throw e24080;

}
}} else {
throw clojure.core.match.backtrack;

}
}catch (e24069){if((e24069 instanceof java.lang.Exception)){
var e__23053__auto__ = e24069;
if((e__23053__auto__ === clojure.core.match.backtrack)){
var G__24054 = geo;
return null;
} else {
throw e__23053__auto__;
}
} else {
throw e24069;

}
}}));

(c2.geo.core.geo__GT_svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c2.geo.core.geo__GT_svg.cljs$lang$applyTo = (function (seq24041){
var G__24042 = cljs.core.first(seq24041);
var seq24041__$1 = cljs.core.next(seq24041);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24042,seq24041__$1);
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
}catch (e24130){if((e24130 instanceof java.lang.Exception)){
var e__23053__auto__ = e24130;
if((e__23053__auto__ === clojure.core.match.backtrack)){
throw clojure.core.match.backtrack;
} else {
throw e__23053__auto__;
}
} else {
throw e24130;

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
}catch (e24122){if((e24122 instanceof java.lang.Exception)){
var e__23053__auto__ = e24122;
if((e__23053__auto__ === clojure.core.match.backtrack)){
var G__24115 = coordinates;
return null;
} else {
throw e__23053__auto__;
}
} else {
throw e24122;

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
var G__24149 = arguments.length;
switch (G__24149) {
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
var vec__24159 = c2.geo.core.__GT_latlon(co1);
var lat1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24159,(0),null);
var lon1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24159,(1),null);
var vec__24162 = c2.geo.core.__GT_latlon(co2);
var lat2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24162,(0),null);
var lon2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24162,(1),null);
var square_half_chord = (c2.maths.sq(c2.maths.sin((c2.maths.rad((lat2 - lat1)) / (2)))) + ((c2.maths.cos(c2.maths.rad(lat1)) * c2.maths.cos(c2.maths.rad(lat2))) * c2.maths.sq(c2.maths.sin((c2.maths.rad((lon2 - lon1)) / (2))))));
var angular_distance = (c2.maths.asin(c2.maths.sqrt(square_half_chord)) * (2));
return (angular_distance * r);
}));

(c2.geo.core.haversine.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=c2.geo.core.js.map
