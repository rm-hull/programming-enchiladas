goog.provide('dataview.ops');
/**
 * Given a data-view, a byte offset, a length (and optionally an encoding -
 * note that only ASCII is currently supported), extracts a string from the
 * underlying byte buffer.
 */
dataview.ops.get_string = (function dataview$ops$get_string(var_args){
var args__5903__auto__ = [];
var len__5897__auto___35535 = arguments.length;
var i__5898__auto___35536 = (0);
while(true){
if((i__5898__auto___35536 < len__5897__auto___35535)){
args__5903__auto__.push((arguments[i__5898__auto___35536]));

var G__35538 = (i__5898__auto___35536 + (1));
i__5898__auto___35536 = G__35538;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return dataview.ops.get_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(dataview.ops.get_string.cljs$core$IFn$_invoke$arity$variadic = (function (obj,byte_offset,p__35444){
var map__35445 = p__35444;
var map__35445__$1 = cljs.core.__destructure_map(map__35445);
var opts = map__35445__$1;
var delimiters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35445__$1,new cljs.core.Keyword(null,"delimiters","delimiters",236535302));
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35445__$1,new cljs.core.Keyword(null,"length","length",588987862));
if(cljs.core.truth_((function (){var and__5160__auto__ = delimiters;
if(cljs.core.truth_(and__5160__auto__)){
return length;
} else {
return and__5160__auto__;
}
})())){
throw (new Error("Cannot support :length and :delimiters at the same time"));
} else {
var take_fn = (function (cs){
if(cljs.core.truth_(length)){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(length,cs);
} else {
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__35440_SHARP_){
return cljs.core.not((delimiters.cljs$core$IFn$_invoke$arity$1 ? delimiters.cljs$core$IFn$_invoke$arity$1(p1__35440_SHARP_) : delimiters.call(null,p1__35440_SHARP_)));
}),cs);
}
});
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,take_fn(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.char$,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(dataview.protocols.get_byte,obj)),cljs.core.range.cljs$core$IFn$_invoke$arity$2(byte_offset,dataview.protocols.byte_length(obj)))));
}
}));

(dataview.ops.get_string.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dataview.ops.get_string.cljs$lang$applyTo = (function (seq35441){
var G__35442 = cljs.core.first(seq35441);
var seq35441__$1 = cljs.core.next(seq35441);
var G__35443 = cljs.core.first(seq35441__$1);
var seq35441__$2 = cljs.core.next(seq35441__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35442,G__35443,seq35441__$2);
}));

dataview.ops.octet_nibbles = (function dataview$ops$octet_nibbles(var_args){
var G__35447 = arguments.length;
switch (G__35447) {
case 1:
return dataview.ops.octet_nibbles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dataview.ops.octet_nibbles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dataview.ops.octet_nibbles.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(dataview.ops.octet_nibbles.cljs$core$IFn$_invoke$arity$1 = (function (c){
return c;
}));

(dataview.ops.octet_nibbles.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2__$1){
return (((c1 & (31)) << (6)) | (c2__$1 & (63)));
}));

(dataview.ops.octet_nibbles.cljs$core$IFn$_invoke$arity$3 = (function (c1,c2__$1,c3){
return (((c1 & (15)) << (12)) | dataview.ops.octet_nibbles.cljs$core$IFn$_invoke$arity$2(c2__$1,c3));
}));

(dataview.ops.octet_nibbles.cljs$lang$maxFixedArity = 3);

/**
 * Reads upto 3 bytes from the reader in order to reconstruct
 * a single unicode character from it's UTF-8 representation.
 * 
 * Does not support surrogate pairs (4-byte encodings).
 */
dataview.ops.utf8_decode = (function dataview$ops$utf8_decode(reader){
var c = dataview.protocols.read_byte(reader);
return String.fromCharCode((((c < (128)))?dataview.ops.octet_nibbles.cljs$core$IFn$_invoke$arity$1(c):(((((c >= (192))) && ((c < (224)))))?dataview.ops.octet_nibbles.cljs$core$IFn$_invoke$arity$2(c,dataview.protocols.read_byte(reader)):dataview.ops.octet_nibbles.cljs$core$IFn$_invoke$arity$3(c,dataview.protocols.read_byte(reader),dataview.protocols.read_byte(reader))
)));
});
dataview.ops.can_read_QMARK_ = (function dataview$ops$can_read_QMARK_(data_view,offset,bytes_to_read){
return ((offset + bytes_to_read) <= dataview.protocols.byte_length(data_view));
});

/**
* @constructor
 * @implements {dataview.protocols.IRandomAccess}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dataview.ops.t_dataview$ops35449 = (function (initial_offset,obj,index,meta35450){
this.initial_offset = initial_offset;
this.obj = obj;
this.index = index;
this.meta35450 = meta35450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(dataview.ops.t_dataview$ops35449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35451,meta35450__$1){
var self__ = this;
var _35451__$1 = this;
return (new dataview.ops.t_dataview$ops35449(self__.initial_offset,self__.obj,self__.index,meta35450__$1));
}));

(dataview.ops.t_dataview$ops35449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35451){
var self__ = this;
var _35451__$1 = this;
return self__.meta35450;
}));

(dataview.ops.t_dataview$ops35449.prototype.dataview$protocols$IRandomAccess$ = cljs.core.PROTOCOL_SENTINEL);

(dataview.ops.t_dataview$ops35449.prototype.dataview$protocols$IRandomAccess$tell$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.deref(self__.index);
}));

(dataview.ops.t_dataview$ops35449.prototype.dataview$protocols$IRandomAccess$advance_BANG_$arity$2 = (function (this$,delta){
var self__ = this;
var this$__$1 = this;
return (cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.index,cljs.core._PLUS_,delta) - delta);
}));

(dataview.ops.t_dataview$ops35449.prototype.dataview$protocols$IRandomAccess$seek_BANG_$arity$2 = (function (this$,new_offset){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_(self__.index,new_offset);
}));

(dataview.ops.t_dataview$ops35449.prototype.dataview$protocols$IRandomAccess$rewind_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.dataview$protocols$IRandomAccess$seek_BANG_$arity$2(null,(0));
}));

(dataview.ops.t_dataview$ops35449.prototype.dataview$protocols$IRandomAccess$find_BANG_$arity$2 = (function (this$,term){
var self__ = this;
var this$__$1 = this;
var temp__5825__auto__ = dataview.boyer_moore.index_of.cljs$core$IFn$_invoke$arity$3(self__.obj,term,cljs.core.deref(self__.index));
if(cljs.core.truth_(temp__5825__auto__)){
var new_offset = temp__5825__auto__;
return this$__$1.dataview$protocols$IRandomAccess$seek_BANG_$arity$2(null,new_offset);
} else {
return null;
}
}));

(dataview.ops.t_dataview$ops35449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"initial-offset","initial-offset",-1884322874,null),new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta35450","meta35450",280516358,null)], null);
}));

(dataview.ops.t_dataview$ops35449.cljs$lang$type = true);

(dataview.ops.t_dataview$ops35449.cljs$lang$ctorStr = "dataview.ops/t_dataview$ops35449");

(dataview.ops.t_dataview$ops35449.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"dataview.ops/t_dataview$ops35449");
}));

/**
 * Positional factory function for dataview.ops/t_dataview$ops35449.
 */
dataview.ops.__GT_t_dataview$ops35449 = (function dataview$ops$__GT_t_dataview$ops35449(initial_offset,obj,index,meta35450){
return (new dataview.ops.t_dataview$ops35449(initial_offset,obj,index,meta35450));
});


dataview.ops.create_seeker = (function dataview$ops$create_seeker(initial_offset,obj){
var index = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial_offset);
return (new dataview.ops.t_dataview$ops35449(initial_offset,obj,index,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {dataview.protocols.IReader}
 * @implements {dataview.protocols.IRandomAccess}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dataview.ops.t_dataview$ops35470 = (function (obj,seeker,apply_offset,meta35471){
this.obj = obj;
this.seeker = seeker;
this.apply_offset = apply_offset;
this.meta35471 = meta35471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(dataview.ops.t_dataview$ops35470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35472,meta35471__$1){
var self__ = this;
var _35472__$1 = this;
return (new dataview.ops.t_dataview$ops35470(self__.obj,self__.seeker,self__.apply_offset,meta35471__$1));
}));

(dataview.ops.t_dataview$ops35470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35472){
var self__ = this;
var _35472__$1 = this;
return self__.meta35471;
}));

(dataview.ops.t_dataview$ops35470.prototype.dataview$protocols$IReader$ = cljs.core.PROTOCOL_SENTINEL);

(dataview.ops.t_dataview$ops35470.prototype.dataview$protocols$IReader$read_utf8_string$arity$2 = (function (this$,delimiters){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.dataview$protocols$IReader$eod_QMARK_$arity$1(null))){
return null;
} else {
var data = null;
var next_char = null;
while(true){
if(cljs.core.truth_((function (){var or__5162__auto__ = this$__$1.dataview$protocols$IReader$eod_QMARK_$arity$1(null);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (delimiters.cljs$core$IFn$_invoke$arity$1 ? delimiters.cljs$core$IFn$_invoke$arity$1(next_char) : delimiters.call(null,next_char));
}
})())){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_char));
} else {
var G__35546 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_char));
var G__35547 = dataview.ops.utf8_decode(this$__$1);
data = G__35546;
next_char = G__35547;
continue;
}
break;
}
}
}));

(dataview.ops.t_dataview$ops35470.prototype.dataview$protocols$IReader$read_fixed_string$arity$2 = (function (this$,length){
var self__ = this;
var this$__$1 = this;
var G__35480 = length;
var G__35481 = (function (p1__35464_SHARP_){
return dataview.ops.get_string.cljs$core$IFn$_invoke$arity$variadic(self__.obj,p1__35464_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"length","length",588987862),length], 0));
});
return (self__.apply_offset.cljs$core$IFn$_invoke$arity$2 ? self__.apply_offset.cljs$core$IFn$_invoke$arity$2(G__35480,G__35481) : self__.apply_offset.call(null,G__35480,G__35481));
}));

(dataview.ops.t_dataview$ops35470.prototype.dataview$protocols$IReader$read_byte$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__35482 = (1);
var G__35483 = (function (p1__35465_SHARP_){
return dataview.protocols.get_byte(self__.obj,p1__35465_SHARP_);
});
return (self__.apply_offset.cljs$core$IFn$_invoke$arity$2 ? self__.apply_offset.cljs$core$IFn$_invoke$arity$2(G__35482,G__35483) : self__.apply_offset.call(null,G__35482,G__35483));
}));

(dataview.ops.t_dataview$ops35470.prototype.dataview$protocols$IReader$read_uint16_le$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__35484 = (2);
var G__35485 = (function (p1__35466_SHARP_){
return dataview.protocols.get_uint16_le(self__.obj,p1__35466_SHARP_);
});
return (self__.apply_offset.cljs$core$IFn$_invoke$arity$2 ? self__.apply_offset.cljs$core$IFn$_invoke$arity$2(G__35484,G__35485) : self__.apply_offset.call(null,G__35484,G__35485));
}));

(dataview.ops.t_dataview$ops35470.prototype.dataview$protocols$IReader$read_uint32_le$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__35488 = (4);
var G__35489 = (function (p1__35467_SHARP_){
return dataview.protocols.get_uint32_le(self__.obj,p1__35467_SHARP_);
});
return (self__.apply_offset.cljs$core$IFn$_invoke$arity$2 ? self__.apply_offset.cljs$core$IFn$_invoke$arity$2(G__35488,G__35489) : self__.apply_offset.call(null,G__35488,G__35489));
}));

(dataview.ops.t_dataview$ops35470.prototype.dataview$protocols$IReader$read_float32_le$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__35494 = (4);
var G__35495 = (function (p1__35468_SHARP_){
return dataview.protocols.get_float32_le(self__.obj,p1__35468_SHARP_);
});
return (self__.apply_offset.cljs$core$IFn$_invoke$arity$2 ? self__.apply_offset.cljs$core$IFn$_invoke$arity$2(G__35494,G__35495) : self__.apply_offset.call(null,G__35494,G__35495));
}));

(dataview.ops.t_dataview$ops35470.prototype.dataview$protocols$IReader$view$arity$2 = (function (this$,length){
var self__ = this;
var this$__$1 = this;
var G__35496 = dataview.protocols.slice(self__.obj,dataview.protocols.tell(self__.seeker),length);
return (dataview.ops.create_reader.cljs$core$IFn$_invoke$arity$1 ? dataview.ops.create_reader.cljs$core$IFn$_invoke$arity$1(G__35496) : dataview.ops.create_reader.call(null,G__35496));
}));

(dataview.ops.t_dataview$ops35470.prototype.dataview$protocols$IReader$eod_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (dataview.protocols.tell(self__.seeker) >= dataview.protocols.byte_length(self__.obj));
}));

(dataview.ops.t_dataview$ops35470.prototype.dataview$protocols$IRandomAccess$ = cljs.core.PROTOCOL_SENTINEL);

(dataview.ops.t_dataview$ops35470.prototype.dataview$protocols$IRandomAccess$tell$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return dataview.protocols.tell(self__.seeker);
}));

(dataview.ops.t_dataview$ops35470.prototype.dataview$protocols$IRandomAccess$advance_BANG_$arity$2 = (function (this$,delta){
var self__ = this;
var this$__$1 = this;
return dataview.protocols.advance_BANG_(self__.seeker,delta);
}));

(dataview.ops.t_dataview$ops35470.prototype.dataview$protocols$IRandomAccess$seek_BANG_$arity$2 = (function (this$,new_offset){
var self__ = this;
var this$__$1 = this;
return dataview.protocols.seek_BANG_(self__.seeker,new_offset);
}));

(dataview.ops.t_dataview$ops35470.prototype.dataview$protocols$IRandomAccess$rewind_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return dataview.protocols.rewind_BANG_(self__.seeker);
}));

(dataview.ops.t_dataview$ops35470.prototype.dataview$protocols$IRandomAccess$find_BANG_$arity$2 = (function (this$,term){
var self__ = this;
var this$__$1 = this;
return dataview.protocols.find_BANG_(self__.seeker,term);
}));

(dataview.ops.t_dataview$ops35470.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("proto","IByteIndexed","proto/IByteIndexed",482111397,null)], null)),new cljs.core.Symbol(null,"seeker","seeker",-523874789,null),new cljs.core.Symbol(null,"apply-offset","apply-offset",490698107,null),new cljs.core.Symbol(null,"meta35471","meta35471",-1519319675,null)], null);
}));

(dataview.ops.t_dataview$ops35470.cljs$lang$type = true);

(dataview.ops.t_dataview$ops35470.cljs$lang$ctorStr = "dataview.ops/t_dataview$ops35470");

(dataview.ops.t_dataview$ops35470.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"dataview.ops/t_dataview$ops35470");
}));

/**
 * Positional factory function for dataview.ops/t_dataview$ops35470.
 */
dataview.ops.__GT_t_dataview$ops35470 = (function dataview$ops$__GT_t_dataview$ops35470(obj,seeker,apply_offset,meta35471){
return (new dataview.ops.t_dataview$ops35470(obj,seeker,apply_offset,meta35471));
});


dataview.ops.create_reader = (function dataview$ops$create_reader(obj){
var seeker = dataview.ops.create_seeker((0),obj);
var apply_offset = (function (bytes_to_read,fn){
if(dataview.ops.can_read_QMARK_(obj,seeker.dataview$protocols$IRandomAccess$tell$arity$1(null),bytes_to_read)){
var offset = seeker.dataview$protocols$IRandomAccess$advance_BANG_$arity$2(null,bytes_to_read);
try{return (fn.cljs$core$IFn$_invoke$arity$1 ? fn.cljs$core$IFn$_invoke$arity$1(offset) : fn.call(null,offset));
}catch (e35469){if((e35469 instanceof Error)){
var e = e35469;
seeker.dataview$protocols$IRandomAccess$seek_BANG_$arity$2(null,offset);

throw e;
} else {
throw e35469;

}
}} else {
return null;
}
});
return (new dataview.ops.t_dataview$ops35470(obj,seeker,apply_offset,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=dataview.ops.js.map
