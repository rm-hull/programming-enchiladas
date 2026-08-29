goog.provide('demo.rm_hull_5259306.core');
demo.rm_hull_5259306.core.offsets = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"west","west",708776677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null);
demo.rm_hull_5259306.core.directions = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.PersistentArrayMap(null, 4, [(1),new cljs.core.Keyword(null,"north","north",651323902),(2),new cljs.core.Keyword(null,"east","east",1189821678),(4),new cljs.core.Keyword(null,"south","south",1586796293),(8),new cljs.core.Keyword(null,"west","west",708776677)], null),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.PersistentArrayMap(null, 4, [(1),new cljs.core.Keyword(null,"east","east",1189821678),(2),new cljs.core.Keyword(null,"south","south",1586796293),(4),new cljs.core.Keyword(null,"west","west",708776677),(8),new cljs.core.Keyword(null,"north","north",651323902)], null),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.PersistentArrayMap(null, 4, [(1),new cljs.core.Keyword(null,"south","south",1586796293),(2),new cljs.core.Keyword(null,"west","west",708776677),(4),new cljs.core.Keyword(null,"north","north",651323902),(8),new cljs.core.Keyword(null,"east","east",1189821678)], null),new cljs.core.Keyword(null,"west","west",708776677),new cljs.core.PersistentArrayMap(null, 4, [(1),new cljs.core.Keyword(null,"west","west",708776677),(2),new cljs.core.Keyword(null,"north","north",651323902),(4),new cljs.core.Keyword(null,"east","east",1189821678),(8),new cljs.core.Keyword(null,"south","south",1586796293)], null)], null);
demo.rm_hull_5259306.core.predef_rules = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"filled-triangle","filled-triangle",658653504),new cljs.core.Keyword(null,"worm-trails","worm-trails",-573858303),new cljs.core.Keyword(null,"binary-counter","binary-counter",1597046978),new cljs.core.Keyword(null,"langtons-ant","langtons-ant",-408029757),new cljs.core.Keyword(null,"ballon-bursting","ballon-bursting",-476357981),new cljs.core.Keyword(null,"streak2","streak2",-1314889885),new cljs.core.Keyword(null,"textured","textured",1221766051),new cljs.core.Keyword(null,"striped-spiral","striped-spiral",247472165),new cljs.core.Keyword(null,"slow-city-builder","slow-city-builder",1256522758),new cljs.core.Keyword(null,"highway5","highway5",-1082742138),new cljs.core.Keyword(null,"highway3","highway3",-470441785),new cljs.core.Keyword(null,"stepped-pyramid","stepped-pyramid",-1155701497),new cljs.core.Keyword(null,"snowflake-ish","snowflake-ish",801683911),new cljs.core.Keyword(null,"highway4","highway4",389799018),new cljs.core.Keyword(null,"highway6","highway6",-696965750),new cljs.core.Keyword(null,"coiled-rope","coiled-rope",51864170),new cljs.core.Keyword(null,"fizzy-spill","fizzy-spill",-1764908629),new cljs.core.Keyword(null,"curves-in-blocks","curves-in-blocks",1008869963),new cljs.core.Keyword(null,"cauliflower-stalk","cauliflower-stalk",1058156),new cljs.core.Keyword(null,"computer-art","computer-art",-2076329460),new cljs.core.Keyword(null,"square-diagonal","square-diagonal",1096476717),new cljs.core.Keyword(null,"contoured-island","contoured-island",1827247984),new cljs.core.Keyword(null,"woven-placemat","woven-placemat",-1487437199),new cljs.core.Keyword(null,"horizontal-highway","horizontal-highway",1483278898),new cljs.core.Keyword(null,"highway1","highway1",-1863793101),new cljs.core.Keyword(null,"diamond","diamond",2136949587),new cljs.core.Keyword(null,"filled-spiral","filled-spiral",-1160937645),new cljs.core.Keyword(null,"square-ant","square-ant",2124662675),new cljs.core.Keyword(null,"cornices","cornices",750347284),new cljs.core.Keyword(null,"loopy","loopy",-1235264108),new cljs.core.Keyword(null,"box-spiral","box-spiral",1754793876),new cljs.core.Keyword(null,"square-spiral","square-spiral",156111796),new cljs.core.Keyword(null,"distracted-spiral","distracted-spiral",-1590958443),new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"nested-cabinets","nested-cabinets",1896691831),new cljs.core.Keyword(null,"mould-bloom","mould-bloom",-729134920),new cljs.core.Keyword(null,"fibonacci","fibonacci",-108612712),new cljs.core.Keyword(null,"saw","saw",-1928018630),new cljs.core.Keyword(null,"cross","cross",194557789),new cljs.core.Keyword(null,"growth1","growth1",-1928186242),new cljs.core.Keyword(null,"two-way-highway","two-way-highway",1922575070),new cljs.core.Keyword(null,"glaciers","glaciers",654168830)],["081121110111","121181121020","120010","120080","180121021180","181012022111121110","111020080080","021080181020","180011080081","120022080020011180","121120020111","021080181110","021121181180","121121181020","121080122010180080","111180121010","181120080080","111011121010","121021110111","180121020081","021121082080122180","021011121180","021021110021","181080110010","181080121120","111021180120","181010110120","121081110010","182020180020080081","120121010011","011081120011","120081180021","121020010121","181181110012081111","181121110011","121120010010","181181121010","111010020180","111081120111","120081180011","121110110011","181020080080"]);
/**
 * Pulls apart a string separated by a = into constituent vector parts,
 * coverts the key into a keyword
 */
demo.rm_hull_5259306.core.pair = (function demo$rm_hull_5259306$core$pair(s){
var vec__25017 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25017,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25017,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], null);
});
/**
 * Extracts a set of key-value pairs separated by & into a map
 */
demo.rm_hull_5259306.core.get_params = (function demo$rm_hull_5259306$core$get_params(s){
var drop1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.seq(s)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(demo.rm_hull_5259306.core.pair,clojure.string.split.cljs$core$IFn$_invoke$arity$2(drop1,/&/)));
});
/**
 * Slices & dices a linear rule  (e.g '120121010011') into state based 
 * tuples (e.g: [[(1 2 0) (1 2 1)] [(0 1 0) (0 1 1)]] )
 */
demo.rm_hull_5259306.core.parse_rules = (function demo$rm_hull_5259306$core$parse_rules(s){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,cljs.core.seq(s))))));
});
/**
 * Fetches the color at the given pixel on the canvas context
 */
demo.rm_hull_5259306.core.get_color = (function demo$rm_hull_5259306$core$get_color(ctx,p__25037,scale){
var vec__25038 = p__25037;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25038,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25038,(1),null);
return monet.canvas.get_pixel(ctx,(x * scale),(y * scale));
});
demo.rm_hull_5259306.core.set_color_BANG_ = (function demo$rm_hull_5259306$core$set_color_BANG_(ctx,p__25041,scale,color){
var vec__25042 = p__25041;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25042,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25042,(1),null);
return monet.canvas.fill_rect(monet.canvas.fill_style(ctx,color),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(x * scale),new cljs.core.Keyword(null,"y","y",-1757859776),(y * scale),new cljs.core.Keyword(null,"w","w",354169001),scale,new cljs.core.Keyword(null,"h","h",1109658740),scale], null));
});
demo.rm_hull_5259306.core.black_QMARK_ = cljs.core.memoize((function (color){
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620)], null))) === (0));
}));
demo.rm_hull_5259306.core.current_position = (function demo$rm_hull_5259306$core$current_position(turmite){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(turmite,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"position","position",-2011731912)], null));
});
demo.rm_hull_5259306.core.toggle_previous_BANG_ = (function demo$rm_hull_5259306$core$toggle_previous_BANG_(turmite){
var prev = (turmite.cljs$core$IFn$_invoke$arity$1 ? turmite.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"previous","previous",-720163404)) : turmite.call(null,new cljs.core.Keyword(null,"previous","previous",-720163404)));
var color = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),(turmite.cljs$core$IFn$_invoke$arity$1 ? turmite.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : turmite.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))))?"black":"white");
if(cljs.core.seq((prev.cljs$core$IFn$_invoke$arity$1 ? prev.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"position","position",-2011731912)) : prev.call(null,new cljs.core.Keyword(null,"position","position",-2011731912))))){
return demo.rm_hull_5259306.core.set_color_BANG_((turmite.cljs$core$IFn$_invoke$arity$1 ? turmite.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctx","ctx",-493610118)) : turmite.call(null,new cljs.core.Keyword(null,"ctx","ctx",-493610118))),(prev.cljs$core$IFn$_invoke$arity$1 ? prev.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"position","position",-2011731912)) : prev.call(null,new cljs.core.Keyword(null,"position","position",-2011731912))),(turmite.cljs$core$IFn$_invoke$arity$1 ? turmite.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)) : turmite.call(null,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287))),color);
} else {
return null;
}
});
demo.rm_hull_5259306.core.draw_BANG_ = (function demo$rm_hull_5259306$core$draw_BANG_(turmite,color){
return monet.canvas.restore(demo.rm_hull_5259306.core.set_color_BANG_(monet.canvas.save((turmite.cljs$core$IFn$_invoke$arity$1 ? turmite.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctx","ctx",-493610118)) : turmite.call(null,new cljs.core.Keyword(null,"ctx","ctx",-493610118)))),demo.rm_hull_5259306.core.current_position(turmite),(turmite.cljs$core$IFn$_invoke$arity$1 ? turmite.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)) : turmite.call(null,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287))),color));
});
demo.rm_hull_5259306.core.wrap = (function demo$rm_hull_5259306$core$wrap(p__25046,p__25047){
var vec__25048 = p__25046;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25048,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25048,(1),null);
var vec__25051 = p__25047;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25051,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25051,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod(x,w),cljs.core.mod(y,h)], null);
});
demo.rm_hull_5259306.core.color_mapper = (function demo$rm_hull_5259306$core$color_mapper(color){
if(cljs.core.truth_(demo.rm_hull_5259306.core.black_QMARK_(color))){
return (0);
} else {
return (1);
}
});
demo.rm_hull_5259306.core.next_triple = (function demo$rm_hull_5259306$core$next_triple(turmite){
var state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(turmite,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"state","state",-1988618099)], null));
var color = demo.rm_hull_5259306.core.color_mapper(demo.rm_hull_5259306.core.get_color((turmite.cljs$core$IFn$_invoke$arity$1 ? turmite.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctx","ctx",-493610118)) : turmite.call(null,new cljs.core.Keyword(null,"ctx","ctx",-493610118))),demo.rm_hull_5259306.core.current_position(turmite),(turmite.cljs$core$IFn$_invoke$arity$1 ? turmite.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)) : turmite.call(null,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)))));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(turmite,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rule","rule",729973257),new cljs.core.Keyword(null,"parsed","parsed",-819589156),state,color], null));
});
demo.rm_hull_5259306.core.relative_direction = (function demo$rm_hull_5259306$core$relative_direction(current,nextdir){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(demo.rm_hull_5259306.core.directions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,nextdir], null));
});
/**
 * The turmite is transitioned based on its current state and the color of 
 * the underlying grid element according to its embedded rule definition.
 */
demo.rm_hull_5259306.core.next_state = (function demo$rm_hull_5259306$core$next_state(turmite){
var vec__25058 = demo.rm_hull_5259306.core.next_triple(turmite);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25058,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25058,(1),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25058,(2),null);
var new_direction = demo.rm_hull_5259306.core.relative_direction((turmite.cljs$core$IFn$_invoke$arity$1 ? turmite.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"direction","direction",-633359395)) : turmite.call(null,new cljs.core.Keyword(null,"direction","direction",-633359395))),dir);
var pos = demo.rm_hull_5259306.core.wrap(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,demo.rm_hull_5259306.core.current_position(turmite),(new_direction.cljs$core$IFn$_invoke$arity$1 ? new_direction.cljs$core$IFn$_invoke$arity$1(demo.rm_hull_5259306.core.offsets) : new_direction.call(null,demo.rm_hull_5259306.core.offsets))),(turmite.cljs$core$IFn$_invoke$arity$1 ? turmite.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bounds","bounds",1691609455)) : turmite.call(null,new cljs.core.Keyword(null,"bounds","bounds",1691609455))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(turmite,new cljs.core.Keyword(null,"generation","generation",-2132542044),((turmite.cljs$core$IFn$_invoke$arity$1 ? turmite.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"generation","generation",-2132542044)) : turmite.call(null,new cljs.core.Keyword(null,"generation","generation",-2132542044))) + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"direction","direction",-633359395),new_direction,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"previous","previous",-720163404),(turmite.cljs$core$IFn$_invoke$arity$1 ? turmite.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current","current",-1088038603)) : turmite.call(null,new cljs.core.Keyword(null,"current","current",-1088038603))),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),pos,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"state","state",-1988618099),state], null)], 0));
});
/**
 * Main animation step-off point, which indefinitely schedules the next 
 * animation frame, updating the termite based on its next state.
 */
demo.rm_hull_5259306.core.animate = (function demo$rm_hull_5259306$core$animate(turmite){
var loop = (function demo$rm_hull_5259306$core$animate_$_loop(){
(monet.core.animation_frame.cljs$core$IFn$_invoke$arity$1 ? monet.core.animation_frame.cljs$core$IFn$_invoke$arity$1(demo$rm_hull_5259306$core$animate_$_loop) : monet.core.animation_frame.call(null,demo$rm_hull_5259306$core$animate_$_loop));

var t = cljs.core.deref(turmite);
cljs.core.reset_BANG_(turmite,demo.rm_hull_5259306.core.next_state(t));

demo.rm_hull_5259306.core.toggle_previous_BANG_(t);

return demo.rm_hull_5259306.core.draw_BANG_(t,"red");
});
jayq.util.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(turmite)], 0)));

return loop();
});
/**
 * Creates the turmite map based on the desired position, screen dimensions,
 * rule, etc.
 */
demo.rm_hull_5259306.core.create_turmite = (function demo$rm_hull_5259306$core$create_turmite(ctx,pos,bounds,cell_size,rule){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"generation","generation",-2132542044),(0),new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),cell_size,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"direction","direction",-633359395),cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword(null,"west","west",708776677)], null),cljs.core.rand_int((4))),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),pos,new cljs.core.Keyword(null,"color","color",1011675173),demo.rm_hull_5259306.core.color_mapper(demo.rm_hull_5259306.core.get_color(ctx,pos,cell_size)),new cljs.core.Keyword(null,"state","state",-1988618099),(0)], null),new cljs.core.Keyword(null,"previous","previous",-720163404),null,new cljs.core.Keyword(null,"rule","rule",729973257),rule], null));
});
/**
 * Gets the co-ordinates from the event, and scale to the cell size
 */
demo.rm_hull_5259306.core.coords = (function demo$rm_hull_5259306$core$coords(event,scale){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.quot(event.offsetX,scale),cljs.core.quot(event.offsetY,scale)], null);
});
/**
 * Extracts and parses the rule from the URL query string. If no rule= 
 * exists then one is selected at random. If the value is a predefined
 * rule then that is used, otherwise an attempt is made to parse the
 * value into a rule definition.
 */
demo.rm_hull_5259306.core.get_rule = (function demo$rm_hull_5259306$core$get_rule(query_string){
var input = (function (){var fexpr__25068 = demo.rm_hull_5259306.core.get_params(query_string);
return (fexpr__25068.cljs$core$IFn$_invoke$arity$1 ? fexpr__25068.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rule","rule",729973257)) : fexpr__25068.call(null,new cljs.core.Keyword(null,"rule","rule",729973257)));
})();
var label = (((input == null))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(demo.rm_hull_5259306.core.predef_rules),cljs.core.rand_int(cljs.core.count(demo.rm_hull_5259306.core.predef_rules))):input);
var rule = cljs.core.get.cljs$core$IFn$_invoke$arity$3(demo.rm_hull_5259306.core.predef_rules,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(label),input);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.name(label),new cljs.core.Keyword(null,"data","data",-232669377),rule,new cljs.core.Keyword(null,"parsed","parsed",-819589156),demo.rm_hull_5259306.core.parse_rules(rule)], null);
});
/**
 * Calculates the maximum available screen size
 */
demo.rm_hull_5259306.core.available_area = (function demo$rm_hull_5259306$core$available_area(){
var div = cljs.core.first(jayq.core.$.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"div#wrapper","div#wrapper",220024300)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [div.offsetWidth,div.offsetHeight], null);
});
jayq.core.document_ready((function (){
jayq.core.show(enchilada.canvas);

monet.canvas.fill_rect(monet.canvas.fill_style(enchilada.ctx,new cljs.core.Keyword(null,"black","black",1294279647)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"w","w",354169001),(800),new cljs.core.Keyword(null,"h","h",1109658740),(600)], null));

var cell_size = (3);
var width = (798);
var height = (600);
var rule = demo.rm_hull_5259306.core.get_rule(window.location.search);
jayq.core.bind(enchilada.canvas,new cljs.core.Keyword(null,"click","click",1912301393),(function (event){
jayq.core.prevent(event);

return demo.rm_hull_5259306.core.animate(demo.rm_hull_5259306.core.create_turmite(enchilada.ctx,demo.rm_hull_5259306.core.coords(event,cell_size),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),cell_size,rule));
}));

return demo.rm_hull_5259306.core.animate(demo.rm_hull_5259306.core.create_turmite(enchilada.ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(60)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),cell_size,rule));
}));

//# sourceMappingURL=demo.rm_hull_5259306.core.js.map
