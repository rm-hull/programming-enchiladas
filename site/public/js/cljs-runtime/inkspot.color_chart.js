goog.provide('inkspot.color_chart');
/**
 * A swatch of web safe colours
 */
inkspot.color_chart.web_safe_colors = cljs.core.PersistentVector.fromArray(["#990033","#FF3366","#CC0033","#FF0033","#FF9999","#CC3366","#FFCCFF","#CC6698","#993366","#660033","#CC3399","#FF99CC","#FF66CC","#FF99FF","#FF6699","#CC0066","#FF0066","#FF3399","#FF0099","#FF33CC","#FF00CC","#FF66FF","#FF33FF","#FF00FF","#CC0099","#990066","#CC66CC","#CC33CC","#CC99FF","#CC66FF","#CC33FF","#993399","#CC00CC","#CC00FF","#9900CC","#990099","#CC99CC","#996699","#663366","#660099","#9933CC","#660066","#9900FF","#9933FF","#9966CC","#330033","#663399","#6633CC","#6600CC","#9966FF","#330066","#6600FF","#6633FF","#CCCCFF","#9999FF","#9999CC","#6666CC","#6666FF","#666699","#333366","#333399","#330099","#3300CC","#3300FF","#3333FF","#3333CC","#0066FF","#0033FF","#3366FF","#3366CC","#000066","#000033","#0000FF","#000099","#0033CC","#0000CC","#336699","#0066CC","#99CCFF","#6699FF","#003366","#6699CC","#006699","#3399CC","#0099CC","#66CCFF","#3399FF","#003399","#0099FF","#33CCFF","#00CCFF","#99FFFF","#66FFFF","#33FFFF","#00FFFF","#00CCCC","#009999","#669999","#99CCCC","#CCFFFF","#33CCCC","#66CCCC","#339999","#336666","#006666","#003333","#00FFCC","#33FFCC","#33CC99","#00CC99","#66FFCC","#99FFCC","#00FF99","#339966","#006633","#336633","#669966","#66CC66","#99FF99","#66FF66","#339933","#99CC99","#66FF99","#33FF99","#33CC66","#00CC66","#66CC99","#009966","#009933","#33FF66","#00FF66","#CCFFCC","#CCFF99","#99FF66","#99FF33","#00FF33","#33FF33","#00CC33","#33CC33","#66FF33","#00FF00","#66CC33","#006600","#003300","#009900","#33FF00","#66FF00","#99FF00","#66CC00","#00CC00","#33CC00","#339900","#99CC66","#669933","#99CC33","#336600","#669900","#99CC00","#CCFF66","#CCFF33","#CCFF00","#999900","#CCCC00","#CCCC33","#333300","#666600","#999933","#CCCC66","#666633","#999966","#CCCC99","#FFFFCC","#FFFF99","#FFFF66","#FFFF33","#FFFF00","#FFCC00","#FFCC66","#FFCC33","#CC9933","#996600","#CC9900","#FF9900","#CC6600","#993300","#CC6633","#663300","#FF9966","#FF6633","#FF9933","#FF6600","#CC3300","#996633","#330000","#663333","#996666","#CC9999","#993333","#CC6666","#FFCCCC","#FF3333","#CC3333","#FF6666","#660000","#990000","#CC0000","#FF0000","#FF3300","#CC9966","#FFCC99","#FFFFFF","#CCCCCC","#999999","#666666","#333333","#000000"], true);
/**
 * Take at most n colors from the given color swatch, cycle through them
 * repeatedly and lazily, starting from the start offset, stepping over
 * step in each yield.
 */
inkspot.color_chart.color_seq = (function inkspot$color_chart$color_seq(colors,n,start,step){
return cljs.core.cycle(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2(step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(start,cljs.core.cycle(colors)))));
});
/**
 * Return a function which accepts a single numeric argument in the range
 * low (inclusive) to high (exclusive): the generated function will return
 * a color from the given swatch which approximately maps (in a linear sense)
 * argument in the low..high range.
 * 
 * Do not use with infinite sequences.
 */
inkspot.color_chart.color_mapper = (function inkspot$color_chart$color_mapper(colors,low,high){
var g = ((high - low) / cljs.core.count(colors));
var v = cljs.core.vec(colors);
return (function (n){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,(((n - low) / g) | 0));
});
});
/**
 * Yields a spectral range from Red (420 THz) to Indigo (750 THz) with
 * the given number of colours in between.
 */
inkspot.color_chart.spectrum = (function inkspot$color_chart$spectrum(steps){
var f1 = (420);
var f2 = (750);
var step = ((f2 - f1) / steps);
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(steps,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(inkspot.color.coerce,inkspot.color.gamma,inkspot.spectrum.frequency_color),cljs.core.iterate(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,step),f1))));
});
/**
 * Yields rainbow colors, although not entirely certain the formulas
 * are correct; cannot remember where this came from but dates to early
 * 2000's...
 */
inkspot.color_chart.rainbow = (function inkspot$color_chart$rainbow(steps){
var c = (function inkspot$color_chart$rainbow_$_c(idx){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"red","red",-969428204),1.0,new cljs.core.Keyword(null,"green","green",-945526839),Math.sin((((3) * idx) / steps)),new cljs.core.Keyword(null,"blue","blue",-622100620),(idx / steps)], null);
});
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(inkspot.color.coerce,inkspot.color.gamma,c),cljs.core.range.cljs$core$IFn$_invoke$arity$1(steps));
});
inkspot.color_chart.xrange = (function inkspot$color_chart$xrange(start,end,num_steps){
var diff = (end - start);
var step = (diff / num_steps);
if((diff === (0))){
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(num_steps,start);
} else {
return cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,end,step);
}
});
inkspot.color_chart.hue = (function inkspot$color_chart$hue(steps){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__1835_SHARP_){
return inkspot.color.coerce(inkspot.converter.hsv__GT_rgb(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__1835_SHARP_,(1),(1)], null)));
}),inkspot.color_chart.xrange((0),(360),steps));
});
/**
 * Linear gradient between two colours, with the given number of
 * graduations.
 */
inkspot.color_chart.gradient = (function inkspot$color_chart$gradient(from_color,to_color,steps){
var a = inkspot.color.coerce(from_color);
var b = inkspot.color.coerce(to_color);
var reds = inkspot.color_chart.xrange(inkspot.color.red(a),inkspot.color.red(b),steps);
var greens = inkspot.color_chart.xrange(inkspot.color.green(a),inkspot.color.green(b),steps);
var blues = inkspot.color_chart.xrange(inkspot.color.blue(a),inkspot.color.blue(b),steps);
var alphas = inkspot.color_chart.xrange(inkspot.color.alpha(a),inkspot.color.alpha(b),steps);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inkspot.color.coerce,cljs.core.vector),reds,greens,blues,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([alphas], 0));
});
/**
 * Blackbody radiation (black, through red, orange, yellow to white),
 * with the given number of graduations.
 */
inkspot.color_chart.heatmap = (function inkspot$color_chart$heatmap(steps){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,inkspot.color_chart.gradient),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__1836_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__1836_SHARP_,cljs.core.quot(steps,(4)));
}),cljs.core.vec),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"white","white",-483998618)], null)))], 0)));
});
/**
 * Unlike most other color schemes cubehelix was designed by D.A. Green to be
 * monotonically increasing in terms of perceived brightness. Also, when
 * printed on a black and white postscript printer, the scheme results in a
 * greyscale with monotonically increasing brightness. This color scheme is
 * named cubehelix because the r,g,b values produced can be visualised as a
 * squashed helix around the diagonal in the r,g,b color cube.
 * 
 * For a unit color cube (i.e. 3-D coordinates for r,g,b each in the range 0 to
 * 1) the color scheme starts at (r,g,b) = (0,0,0), i.e. black, and finishes at
 * (r,g,b) = (1,1,1), i.e. white. For some fraction *x*, between 0 and 1, the
 * color is the corresponding grey value at that fraction along the black to
 * white diagonal (x,x,x) plus a color element. This color element is
 * calculated in a plane of constant perceived intensity and controlled by the
 * following parameters.
 * 
 * Optional keywords:
 * 
 *     gamma         gamma factor to emphasise either low intensity values
 *                   (gamma < 1), or high intensity values (gamma > 1);
 *                   defaults to 1.0.
 * 
 *     start-color   the start color; defaults to 0.5 (i.e. purple).
 * 
 *     rotations     the number of r,g,b rotations in color that are made
 *                   from the start to the end of the color scheme; defaults
 *                   to -1.5 (i.e. -> B -> G -> R -> B).
 * 
 *     hue           the hue parameter which controls how saturated the
 *                   colors are. If this parameter is zero then the color
 *                   scheme is purely a greyscale; defaults to 1.0.
 * 
 * Derived from: https://github.com/matplotlib/matplotlib/blob/master/lib/matplotlib/_cm.py#L59
 */
inkspot.color_chart.cube_helix = (function inkspot$color_chart$cube_helix(var_args){
var args__5903__auto__ = [];
var len__5897__auto___32073 = arguments.length;
var i__5898__auto___32074 = (0);
while(true){
if((i__5898__auto___32074 < len__5897__auto___32073)){
args__5903__auto__.push((arguments[i__5898__auto___32074]));

var G__32075 = (i__5898__auto___32074 + (1));
i__5898__auto___32074 = G__32075;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return inkspot.color_chart.cube_helix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(inkspot.color_chart.cube_helix.cljs$core$IFn$_invoke$arity$variadic = (function (steps,p__31911){
var map__31913 = p__31911;
var map__31913__$1 = cljs.core.__destructure_map(map__31913);
var gamma = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31913__$1,new cljs.core.Keyword(null,"gamma","gamma",1883969687));
var start_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31913__$1,new cljs.core.Keyword(null,"start-color","start-color",-43619883));
var rotations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31913__$1,new cljs.core.Keyword(null,"rotations","rotations",552451695));
var hue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31913__$1,new cljs.core.Keyword(null,"hue","hue",-508078848));
var gamma__$1 = (function (){var or__5162__auto__ = gamma;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return 1.0;
}
})();
var start = (function (){var or__5162__auto__ = start_color;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return 0.5;
}
})();
var hue__$1 = (function (){var or__5162__auto__ = hue;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return 1.0;
}
})();
var rot = (function (){var or__5162__auto__ = rotations;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return -1.5;
}
})();
var color = (function (p0,p1){
return (function (x){
var xg = Math.pow(x,gamma__$1);
var a = (((hue__$1 * xg) * ((1) - xg)) * 0.5);
var phi = (((2) * Math.PI) * ((start / (3)) + (rot * x)));
return (xg + (a * ((p0 * Math.cos(phi)) + (p1 * Math.sin(phi)))));
});
});
var red = color(-0.14861,1.78277);
var green = color(-0.29227,-0.90649);
var blue = color(1.97294,0.0);
var rgb = (function (x){
return inkspot.color.coerce(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,(255)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [red(x),green(x),blue(x)], null)));
});
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(rgb,inkspot.color_chart.xrange((0),(1),steps));
}));

(inkspot.color_chart.cube_helix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(inkspot.color_chart.cube_helix.cljs$lang$applyTo = (function (seq31906){
var G__31907 = cljs.core.first(seq31906);
var seq31906__$1 = cljs.core.next(seq31906);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31907,seq31906__$1);
}));

/**
 * Loads gradients from a JSON source as per format here:
 * https://github.com/Ghosh/uiGradients/blob/master/gradients.json
 * 
 * Valid gradient names (may be specified as strings or keywords):
 * 
 *     :a-lost-memory :almost :amethyst :aqua-marine :aqualicious :army
 *     :ash :aubergine :autumn :behongo :bloody-mary :blurry-beach :bora-bora
 *     :bourbon :calm-darya :candy :cheer-up-emo-kid :cherry :cherryblossoms
 *     :clouds :dance-to-forget :day-tripper :dirty-fog :dracula :earthly
 *     :electric-violet :emerald-water :facebook-messenger :forever-lost
 *     :frozen :horizon :influenza :jonquil :juicy-orange :kashmir :kyoto
 *     :lemon-twist :man-of-steel :mango-pulp :mantle :miaka :midnight-city
 *     :mirage :misty-meadow :mojito :moonrise :moor :moss :mystic :namn
 *     :neon-life :opa :parklife :peach :petrichor :pinky :pinot-noir
 *     :purple-paradise :red-mist :reef :rose-water :sea-blizz :sea-weed
 *     :shadow-night :shore :shrimpy :shroom-haze :sirius-tamed :soundcloud
 *     :starfall :steel-gray :stellar :sunrise :teal-love :the-strain :titanium
 *     :vasily :venice-blue :virgin :winter
 * 
 * nil is returned if a gradient name is not found.
 */
inkspot.color_chart.ui_gradient = (function (){var gradients = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"moss","moss",1122158848),new cljs.core.Keyword(null,"mojito","mojito",-1682708832),new cljs.core.Keyword(null,"cherry","cherry",1641761600),new cljs.core.Keyword(null,"lemon-twist","lemon-twist",-2092322848),new cljs.core.Keyword(null,"parklife","parklife",-622475551),new cljs.core.Keyword(null,"steel-gray","steel-gray",1306459266),new cljs.core.Keyword(null,"purple-paradise","purple-paradise",749973762),new cljs.core.Keyword(null,"cherryblossoms","cherryblossoms",1361405506),new cljs.core.Keyword(null,"candy","candy",-1977730302),new cljs.core.Keyword(null,"virgin","virgin",-335766813),new cljs.core.Keyword(null,"kashmir","kashmir",1806176644),new cljs.core.Keyword(null,"man-of-steel","man-of-steel",500865061),new cljs.core.Keyword(null,"sirius-tamed","sirius-tamed",1977378117),new cljs.core.Keyword(null,"earthly","earthly",1736244613),new cljs.core.Keyword(null,"aqualicious","aqualicious",944164741),new cljs.core.Keyword(null,"teal-love","teal-love",-1540614554),new cljs.core.Keyword(null,"namn","namn",-1575258009),new cljs.core.Keyword(null,"shadow-night","shadow-night",-453107417),new cljs.core.Keyword(null,"reef","reef",-163817913),new cljs.core.Keyword(null,"bourbon","bourbon",-1665897689),new cljs.core.Keyword(null,"moor","moor",-223911640),new cljs.core.Keyword(null,"neon-life","neon-life",1179811240),new cljs.core.Keyword(null,"moonrise","moonrise",-669429303),new cljs.core.Keyword(null,"starfall","starfall",-1827477015),new cljs.core.Keyword(null,"aubergine","aubergine",851719113),new cljs.core.Keyword(null,"facebook-messenger","facebook-messenger",1376497802),new cljs.core.Keyword(null,"electric-violet","electric-violet",-1309687318),new cljs.core.Keyword(null,"sunrise","sunrise",715367082),new cljs.core.Keyword(null,"sea-weed","sea-weed",-766491445),new cljs.core.Keyword(null,"shrimpy","shrimpy",-968677525),new cljs.core.Keyword(null,"mystic","mystic",555401356),new cljs.core.Keyword(null,"horizon","horizon",1551368844),new cljs.core.Keyword(null,"shroom-haze","shroom-haze",-1308103860),new cljs.core.Keyword(null,"dracula","dracula",-2021438386),new cljs.core.Keyword(null,"juicy-orange","juicy-orange",-1356720338),new cljs.core.Keyword(null,"soundcloud","soundcloud",-136600626),new cljs.core.Keyword(null,"mantle","mantle",180394990),new cljs.core.Keyword(null,"influenza","influenza",-921620881),new cljs.core.Keyword(null,"forever-lost","forever-lost",934403983),new cljs.core.Keyword(null,"emerald-water","emerald-water",-906497296),new cljs.core.Keyword(null,"pinot-noir","pinot-noir",479163441),new cljs.core.Keyword(null,"behongo","behongo",546740849),new cljs.core.Keyword(null,"ash","ash",242699921),new cljs.core.Keyword(null,"day-tripper","day-tripper",1283382993),new cljs.core.Keyword(null,"kyoto","kyoto",389114930),new cljs.core.Keyword(null,"venice-blue","venice-blue",1051260083),new cljs.core.Keyword(null,"autumn","autumn",526301395),new cljs.core.Keyword(null,"sea-blizz","sea-blizz",-172093933),new cljs.core.Keyword(null,"red-mist","red-mist",-328771981),new cljs.core.Keyword(null,"mango-pulp","mango-pulp",-1654867309),new cljs.core.Keyword(null,"calm-darya","calm-darya",899881683),new cljs.core.Keyword(null,"blurry-beach","blurry-beach",372640659),new cljs.core.Keyword(null,"stellar","stellar",2096745044),new cljs.core.Keyword(null,"army","army",842961270),new cljs.core.Keyword(null,"opa","opa",1970528022),new cljs.core.Keyword(null,"the-strain","the-strain",190145494),new cljs.core.Keyword(null,"misty-meadow","misty-meadow",397164919),new cljs.core.Keyword(null,"aqua-marine","aqua-marine",-1255302601),new cljs.core.Keyword(null,"mirage","mirage",504295063),new cljs.core.Keyword(null,"pinky","pinky",-1607994569),new cljs.core.Keyword(null,"winter","winter",-577860840),new cljs.core.Keyword(null,"midnight-city","midnight-city",2018917208),new cljs.core.Keyword(null,"amethyst","amethyst",-180721704),new cljs.core.Keyword(null,"cheer-up-emo-kid","cheer-up-emo-kid",-1287419879),new cljs.core.Keyword(null,"clouds","clouds",-632461223),new cljs.core.Keyword(null,"titanium","titanium",867667737),new cljs.core.Keyword(null,"almost","almost",1940897721),new cljs.core.Keyword(null,"a-lost-memory","a-lost-memory",370694394),new cljs.core.Keyword(null,"dirty-fog","dirty-fog",-111362758),new cljs.core.Keyword(null,"dance-to-forget","dance-to-forget",-763522214),new cljs.core.Keyword(null,"vasily","vasily",627611867),new cljs.core.Keyword(null,"miaka","miaka",-623794757),new cljs.core.Keyword(null,"shore","shore",-746581285),new cljs.core.Keyword(null,"jonquil","jonquil",802300763),new cljs.core.Keyword(null,"rose-water","rose-water",1211326844),new cljs.core.Keyword(null,"frozen","frozen",-1824610372),new cljs.core.Keyword(null,"bora-bora","bora-bora",-266054275),new cljs.core.Keyword(null,"petrichor","petrichor",-1125812867),new cljs.core.Keyword(null,"peach","peach",1857941373),new cljs.core.Keyword(null,"bloody-mary","bloody-mary",-129690466)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#134E5E","#71B280"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#1D976C","#93F9B9"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#EB3349","#F45C43"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#3CA55C","#B5AC49"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ADD100","#7B920A"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#1F1C2C","#928DAB"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#1D2B64","#F8CDDA"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#FBD3E9","#BB377D"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#D3959B","#BFE6BA"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#C9FFBF","#FFAFBD"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#614385","#516395"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#780206","#061161"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#EFEFBB","#D4D3DD"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#649173","#DBD5A4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#50C9C3","#96DEDA"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#AAFFA9","#11FFBD"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#a73737","#7a2828"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","#53346D"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#00d2ff","#3a7bd5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#EC6F66","#F3A183"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#616161","#9bc5c3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#B3FFAB","#12FFF7"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#DAE2F8","#D6A4A4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#F0C27B","#4B1248"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#AA076B","#61045F"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#00c6ff","#0072ff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#4776E6","#8E54E9"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#FF512F","#F09819"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#4CB8C4","#3CD3AD"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#e43a15","#e65245"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#757F9A","#D7DDE8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#003973","#E5E5BE"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#5C258D","#4389A2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#DC2424","#4A569D"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#FF8008","#FFC837"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#fe8c00","#f83600"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#24C6DC","#514A9D"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#C04848","#480048"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#5D4157","#A8CABA"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#348F50","#56B4D3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#4b6cb7","#182848"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#52c234","#061700"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#606c88","#3f4c6b"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f857a6","#ff5858"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#c21500","#ffc500"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#085078","#85D8CE"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#DAD299","#B0DAB9"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#1CD8D2","#93EDC7"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","#e74c3c"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#F09819","#EDDE5D"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#5f2c82","#49a09d"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#d53369","#cbad6d"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#7474BF","#348AC7"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#414d0b","#727a17"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#3D7EAA","#FFE47A"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#870000","#190A05"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#215f00","#e4e4d9"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#1A2980","#26D0CE"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#16222A","#3A6073"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#DD5E89","#F7BB97"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#E6DADA","#274046"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#232526","#414345"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#9D50BB","#6E48AA"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#556270","#FF6B6B"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ECE9E6","#FFFFFF"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#283048","#859398"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ddd6f3","#faaca8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#DE6262","#FFB88C"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#B993D6","#8CA6DB"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#FF4E50","#F9D423"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#e9d362","#333333"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#FC354C","#0ABFBC"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#70e1f5","#ffd194"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#FFEEEE","#DDEFBB"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#E55D87","#5FC3E4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#403B4A","#E7E9BB"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#2BC0E4","#EAECC6"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#666600","#999966"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ED4264","#FFEDBC"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#FF512F","#DD2476"], null)]);
return (function (name,steps){
var k = inkspot.util.name__GT_kword(name);
var vec__31988 = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(gradients) : k.call(null,gradients));
var col1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31988,(0),null);
var col2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31988,(1),null);
if(cljs.core.truth_((function (){var and__5160__auto__ = col1;
if(cljs.core.truth_(and__5160__auto__)){
return col2;
} else {
return and__5160__auto__;
}
})())){
return inkspot.color_chart.gradient(col1,col2,steps);
} else {
return null;
}
});
})();

//# sourceMappingURL=inkspot.color_chart.js.map
