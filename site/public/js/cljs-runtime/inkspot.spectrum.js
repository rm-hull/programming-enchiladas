goog.provide('inkspot.spectrum');
inkspot.spectrum.wavelength_color = (function inkspot$spectrum$wavelength_color(var_args){
var G__31146 = arguments.length;
switch (G__31146) {
case 1:
return inkspot.spectrum.wavelength_color.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return inkspot.spectrum.wavelength_color.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(inkspot.spectrum.wavelength_color.cljs$core$IFn$_invoke$arity$1 = (function (wavelength){
return inkspot.spectrum.wavelength_color.cljs$core$IFn$_invoke$arity$2(wavelength,(1));
}));

(inkspot.spectrum.wavelength_color.cljs$core$IFn$_invoke$arity$2 = (function (wavelength,gamma){
var seg1 = (function (a,b){
return ((b - wavelength) / (b - a));
});
var seg2 = (function (a,b){
return ((wavelength - a) / (b - a));
});
var intensity1 = (function (a,b){
return (gamma * (0.3 + (0.7 * seg1(a,b))));
});
var intensity2 = (function (a,b){
return (gamma * (0.3 + (0.7 * seg2(a,b))));
});
var bands = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(380),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"red","red",-969428204),(0),new cljs.core.Keyword(null,"green","green",-945526839),(0),new cljs.core.Keyword(null,"blue","blue",-622100620),(0),new cljs.core.Keyword(null,"scale","scale",-230427353),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(420),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"red","red",-969428204),seg1((380),(440)),new cljs.core.Keyword(null,"green","green",-945526839),(0),new cljs.core.Keyword(null,"blue","blue",-622100620),(1),new cljs.core.Keyword(null,"scale","scale",-230427353),intensity2((380),(420))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(440),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"red","red",-969428204),seg1((380),(440)),new cljs.core.Keyword(null,"green","green",-945526839),(0),new cljs.core.Keyword(null,"blue","blue",-622100620),(1),new cljs.core.Keyword(null,"scale","scale",-230427353),gamma], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(490),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"red","red",-969428204),(0),new cljs.core.Keyword(null,"green","green",-945526839),seg2((440),(490)),new cljs.core.Keyword(null,"blue","blue",-622100620),(1),new cljs.core.Keyword(null,"scale","scale",-230427353),gamma], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(510),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"red","red",-969428204),(0),new cljs.core.Keyword(null,"green","green",-945526839),(1),new cljs.core.Keyword(null,"blue","blue",-622100620),seg1((490),(510)),new cljs.core.Keyword(null,"scale","scale",-230427353),gamma], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(580),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"red","red",-969428204),seg2((510),(580)),new cljs.core.Keyword(null,"green","green",-945526839),(1),new cljs.core.Keyword(null,"blue","blue",-622100620),(0),new cljs.core.Keyword(null,"scale","scale",-230427353),gamma], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(645),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"red","red",-969428204),(1),new cljs.core.Keyword(null,"green","green",-945526839),seg1((580),(645)),new cljs.core.Keyword(null,"blue","blue",-622100620),(0),new cljs.core.Keyword(null,"scale","scale",-230427353),gamma], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"red","red",-969428204),(1),new cljs.core.Keyword(null,"green","green",-945526839),(0),new cljs.core.Keyword(null,"blue","blue",-622100620),(0),new cljs.core.Keyword(null,"scale","scale",-230427353),gamma], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(780),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"red","red",-969428204),(1),new cljs.core.Keyword(null,"green","green",-945526839),(0),new cljs.core.Keyword(null,"blue","blue",-622100620),(0),new cljs.core.Keyword(null,"scale","scale",-230427353),intensity1((700),(780))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9999),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"red","red",-969428204),(0),new cljs.core.Keyword(null,"green","green",-945526839),(0),new cljs.core.Keyword(null,"blue","blue",-622100620),(0),new cljs.core.Keyword(null,"scale","scale",-230427353),(0)], null)], null)], null);
return cljs.core.second(cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__1837_SHARP_){
return (cljs.core.first(p1__1837_SHARP_) < wavelength);
}),bands)));
}));

(inkspot.spectrum.wavelength_color.cljs$lang$maxFixedArity = 2);

inkspot.spectrum.frequency_color = (function inkspot$spectrum$frequency_color(var_args){
var G__31162 = arguments.length;
switch (G__31162) {
case 1:
return inkspot.spectrum.frequency_color.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return inkspot.spectrum.frequency_color.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(inkspot.spectrum.frequency_color.cljs$core$IFn$_invoke$arity$1 = (function (freq){
return inkspot.spectrum.frequency_color.cljs$core$IFn$_invoke$arity$2(freq,(1));
}));

(inkspot.spectrum.frequency_color.cljs$core$IFn$_invoke$arity$2 = (function (freq,gamma){
return inkspot.spectrum.wavelength_color.cljs$core$IFn$_invoke$arity$2((299724.58 / freq),gamma);
}));

(inkspot.spectrum.frequency_color.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=inkspot.spectrum.js.map
