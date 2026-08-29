goog.provide('c2.geo.projection');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
c2.geo.projection._albers = (function (origin,parallels,scale,translate,__meta,__extmap,__hash){
this.origin = origin;
this.parallels = parallels;
this.scale = scale;
this.translate = translate;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(c2.geo.projection._albers.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(c2.geo.projection._albers.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k24038,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__24056 = k24038;
var G__24056__$1 = (((G__24056 instanceof cljs.core.Keyword))?G__24056.fqn:null);
switch (G__24056__$1) {
case "origin":
return self__.origin;

break;
case "parallels":
return self__.parallels;

break;
case "scale":
return self__.scale;

break;
case "translate":
return self__.translate;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24038,else__5472__auto__);

}
}));

(c2.geo.projection._albers.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__24057){
var vec__24059 = p__24057;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24059,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24059,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(c2.geo.projection._albers.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#c2.geo.projection._albers{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"origin","origin",1037372088),self__.origin],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parallels","parallels",1548322555),self__.parallels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scale","scale",-230427353),self__.scale],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"translate","translate",1336199447),self__.translate],null))], null),self__.__extmap));
}));

(c2.geo.projection._albers.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24037){
var self__ = this;
var G__24037__$1 = this;
return (new cljs.core.RecordIter((0),G__24037__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"parallels","parallels",1548322555),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"translate","translate",1336199447)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(c2.geo.projection._albers.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(c2.geo.projection._albers.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new c2.geo.projection._albers(self__.origin,self__.parallels,self__.scale,self__.translate,self__.__meta,self__.__extmap,self__.__hash));
}));

(c2.geo.projection._albers.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(c2.geo.projection._albers.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-2095432706 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(c2.geo.projection._albers.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24039,other24040){
var self__ = this;
var this24039__$1 = this;
return (((!((other24040 == null)))) && ((((this24039__$1.constructor === other24040.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24039__$1.origin,other24040.origin)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24039__$1.parallels,other24040.parallels)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24039__$1.scale,other24040.scale)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24039__$1.translate,other24040.translate)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24039__$1.__extmap,other24040.__extmap)))))))))))));
}));

(c2.geo.projection._albers.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"scale","scale",-230427353),null,new cljs.core.Keyword(null,"translate","translate",1336199447),null,new cljs.core.Keyword(null,"origin","origin",1037372088),null,new cljs.core.Keyword(null,"parallels","parallels",1548322555),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new c2.geo.projection._albers(self__.origin,self__.parallels,self__.scale,self__.translate,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(c2.geo.projection._albers.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k24038){
var self__ = this;
var this__5476__auto____$1 = this;
var G__24070 = k24038;
var G__24070__$1 = (((G__24070 instanceof cljs.core.Keyword))?G__24070.fqn:null);
switch (G__24070__$1) {
case "origin":
case "parallels":
case "scale":
case "translate":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k24038);

}
}));

(c2.geo.projection._albers.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__24037){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__24072 = cljs.core.keyword_identical_QMARK_;
var expr__24073 = k__5478__auto__;
if(cljs.core.truth_((pred__24072.cljs$core$IFn$_invoke$arity$2 ? pred__24072.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"origin","origin",1037372088),expr__24073) : pred__24072.call(null,new cljs.core.Keyword(null,"origin","origin",1037372088),expr__24073)))){
return (new c2.geo.projection._albers(G__24037,self__.parallels,self__.scale,self__.translate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__24072.cljs$core$IFn$_invoke$arity$2 ? pred__24072.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parallels","parallels",1548322555),expr__24073) : pred__24072.call(null,new cljs.core.Keyword(null,"parallels","parallels",1548322555),expr__24073)))){
return (new c2.geo.projection._albers(self__.origin,G__24037,self__.scale,self__.translate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__24072.cljs$core$IFn$_invoke$arity$2 ? pred__24072.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"scale","scale",-230427353),expr__24073) : pred__24072.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353),expr__24073)))){
return (new c2.geo.projection._albers(self__.origin,self__.parallels,G__24037,self__.translate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__24072.cljs$core$IFn$_invoke$arity$2 ? pred__24072.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"translate","translate",1336199447),expr__24073) : pred__24072.call(null,new cljs.core.Keyword(null,"translate","translate",1336199447),expr__24073)))){
return (new c2.geo.projection._albers(self__.origin,self__.parallels,self__.scale,G__24037,self__.__meta,self__.__extmap,null));
} else {
return (new c2.geo.projection._albers(self__.origin,self__.parallels,self__.scale,self__.translate,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__24037),null));
}
}
}
}
}));

(c2.geo.projection._albers.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"origin","origin",1037372088),self__.origin,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parallels","parallels",1548322555),self__.parallels,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"scale","scale",-230427353),self__.scale,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"translate","translate",1336199447),self__.translate,null))], null),self__.__extmap));
}));

(c2.geo.projection._albers.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__24037){
var self__ = this;
var this__5468__auto____$1 = this;
return (new c2.geo.projection._albers(self__.origin,self__.parallels,self__.scale,self__.translate,G__24037,self__.__extmap,self__.__hash));
}));

(c2.geo.projection._albers.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(c2.geo.projection._albers.prototype.call = (function (unused__2830__auto__){
var self__ = this;
var self__ = this;
var G__24085 = (arguments.length - (1));
switch (G__24085) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error((""+"Invalid arity: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1))))));

}
}));

(c2.geo.projection._albers.prototype.apply = (function (self__,args24052){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat((((args24052.length > (20)))?(function (){var G__24089 = args24052.slice((0),(20));
G__24089.push(args24052.slice((20)));

return G__24089;
})():args24052)));
}));

(c2.geo.projection._albers.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coordinates){
var self__ = this;
var this$ = this;
var vec__24090 = coordinates;
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24090,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24090,(1),null);
var phi1 = (c2.maths.radians_per_degree * cljs.core.first(self__.parallels));
var phi2 = (c2.maths.radians_per_degree * cljs.core.second(self__.parallels));
var lng0 = (c2.maths.radians_per_degree * cljs.core.first(self__.origin));
var lat0 = (c2.maths.radians_per_degree * cljs.core.second(self__.origin));
var s = c2.maths.sin(phi1);
var c = c2.maths.cos(phi1);
var n = (0.5 * (s + c2.maths.sin(phi2)));
var C = ((c * c) + (((2) * n) * s));
var p0 = (c2.maths.sqrt((C - (((2) * n) * c2.maths.sin(lat0)))) / n);
var t = (n * ((c2.maths.radians_per_degree * lon) - lng0));
var p = (c2.maths.sqrt((C - (((2) * n) * c2.maths.sin((c2.maths.radians_per_degree * lat))))) / n);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((self__.scale * p) * c2.maths.sin(t)) + cljs.core.first(self__.translate)),((self__.scale * ((p * c2.maths.cos(t)) - p0)) + cljs.core.second(self__.translate))], null);
}));

(c2.geo.projection._albers.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"origin","origin",-1617063681,null),new cljs.core.Symbol(null,"parallels","parallels",-1106113214,null),new cljs.core.Symbol(null,"scale","scale",1410104174,null),new cljs.core.Symbol(null,"translate","translate",-1318236322,null)], null);
}));

(c2.geo.projection._albers.cljs$lang$type = true);

(c2.geo.projection._albers.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"c2.geo.projection/_albers",null,(1),null));
}));

(c2.geo.projection._albers.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"c2.geo.projection/_albers");
}));

/**
 * Positional factory function for c2.geo.projection/_albers.
 */
c2.geo.projection.__GT__albers = (function c2$geo$projection$__GT__albers(origin,parallels,scale,translate){
return (new c2.geo.projection._albers(origin,parallels,scale,translate,null,null,null));
});

/**
 * Factory function for c2.geo.projection/_albers, taking a map of keywords to field values.
 */
c2.geo.projection.map__GT__albers = (function c2$geo$projection$map__GT__albers(G__24043){
var extmap__5511__auto__ = (function (){var G__24110 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24043,new cljs.core.Keyword(null,"origin","origin",1037372088),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parallels","parallels",1548322555),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"translate","translate",1336199447)], 0));
if(cljs.core.record_QMARK_(G__24043)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24110);
} else {
return G__24110;
}
})();
return (new c2.geo.projection._albers(new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(G__24043),new cljs.core.Keyword(null,"parallels","parallels",1548322555).cljs$core$IFn$_invoke$arity$1(G__24043),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(G__24043),new cljs.core.Keyword(null,"translate","translate",1336199447).cljs$core$IFn$_invoke$arity$1(G__24043),null,cljs.core.not_empty(extmap__5511__auto__),null));
});


c2.geo.projection.albers = (function c2$geo$projection$albers(var_args){
var args__5903__auto__ = [];
var len__5897__auto___24401 = arguments.length;
var i__5898__auto___24402 = (0);
while(true){
if((i__5898__auto___24402 < len__5897__auto___24401)){
args__5903__auto__.push((arguments[i__5898__auto___24402]));

var G__24403 = (i__5898__auto___24402 + (1));
i__5898__auto___24402 = G__24403;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return c2.geo.projection.albers.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(c2.geo.projection.albers.cljs$core$IFn$_invoke$arity$variadic = (function (kwargs){
return c2.geo.projection.map__GT__albers(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-98),(38)], null),new cljs.core.Keyword(null,"parallels","parallels",1548322555),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [29.5,45.5], null),new cljs.core.Keyword(null,"scale","scale",-230427353),(1000),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(480),(250)], null)], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kwargs)], 0)));
}));

(c2.geo.projection.albers.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c2.geo.projection.albers.cljs$lang$applyTo = (function (seq24114){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24114));
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
c2.geo.projection._albers_usa = (function (origin,parallels,scale,translate,__meta,__extmap,__hash){
this.origin = origin;
this.parallels = parallels;
this.scale = scale;
this.translate = translate;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(c2.geo.projection._albers_usa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(c2.geo.projection._albers_usa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k24133,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__24148 = k24133;
var G__24148__$1 = (((G__24148 instanceof cljs.core.Keyword))?G__24148.fqn:null);
switch (G__24148__$1) {
case "origin":
return self__.origin;

break;
case "parallels":
return self__.parallels;

break;
case "scale":
return self__.scale;

break;
case "translate":
return self__.translate;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24133,else__5472__auto__);

}
}));

(c2.geo.projection._albers_usa.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__24154){
var vec__24155 = p__24154;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24155,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24155,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(c2.geo.projection._albers_usa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#c2.geo.projection._albers-usa{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"origin","origin",1037372088),self__.origin],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parallels","parallels",1548322555),self__.parallels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scale","scale",-230427353),self__.scale],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"translate","translate",1336199447),self__.translate],null))], null),self__.__extmap));
}));

(c2.geo.projection._albers_usa.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24132){
var self__ = this;
var G__24132__$1 = this;
return (new cljs.core.RecordIter((0),G__24132__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"parallels","parallels",1548322555),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"translate","translate",1336199447)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(c2.geo.projection._albers_usa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(c2.geo.projection._albers_usa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new c2.geo.projection._albers_usa(self__.origin,self__.parallels,self__.scale,self__.translate,self__.__meta,self__.__extmap,self__.__hash));
}));

(c2.geo.projection._albers_usa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(c2.geo.projection._albers_usa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-1678010652 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(c2.geo.projection._albers_usa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24134,other24135){
var self__ = this;
var this24134__$1 = this;
return (((!((other24135 == null)))) && ((((this24134__$1.constructor === other24135.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24134__$1.origin,other24135.origin)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24134__$1.parallels,other24135.parallels)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24134__$1.scale,other24135.scale)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24134__$1.translate,other24135.translate)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24134__$1.__extmap,other24135.__extmap)))))))))))));
}));

(c2.geo.projection._albers_usa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"scale","scale",-230427353),null,new cljs.core.Keyword(null,"translate","translate",1336199447),null,new cljs.core.Keyword(null,"origin","origin",1037372088),null,new cljs.core.Keyword(null,"parallels","parallels",1548322555),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new c2.geo.projection._albers_usa(self__.origin,self__.parallels,self__.scale,self__.translate,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(c2.geo.projection._albers_usa.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k24133){
var self__ = this;
var this__5476__auto____$1 = this;
var G__24190 = k24133;
var G__24190__$1 = (((G__24190 instanceof cljs.core.Keyword))?G__24190.fqn:null);
switch (G__24190__$1) {
case "origin":
case "parallels":
case "scale":
case "translate":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k24133);

}
}));

(c2.geo.projection._albers_usa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__24132){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__24200 = cljs.core.keyword_identical_QMARK_;
var expr__24201 = k__5478__auto__;
if(cljs.core.truth_((pred__24200.cljs$core$IFn$_invoke$arity$2 ? pred__24200.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"origin","origin",1037372088),expr__24201) : pred__24200.call(null,new cljs.core.Keyword(null,"origin","origin",1037372088),expr__24201)))){
return (new c2.geo.projection._albers_usa(G__24132,self__.parallels,self__.scale,self__.translate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__24200.cljs$core$IFn$_invoke$arity$2 ? pred__24200.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parallels","parallels",1548322555),expr__24201) : pred__24200.call(null,new cljs.core.Keyword(null,"parallels","parallels",1548322555),expr__24201)))){
return (new c2.geo.projection._albers_usa(self__.origin,G__24132,self__.scale,self__.translate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__24200.cljs$core$IFn$_invoke$arity$2 ? pred__24200.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"scale","scale",-230427353),expr__24201) : pred__24200.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353),expr__24201)))){
return (new c2.geo.projection._albers_usa(self__.origin,self__.parallels,G__24132,self__.translate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__24200.cljs$core$IFn$_invoke$arity$2 ? pred__24200.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"translate","translate",1336199447),expr__24201) : pred__24200.call(null,new cljs.core.Keyword(null,"translate","translate",1336199447),expr__24201)))){
return (new c2.geo.projection._albers_usa(self__.origin,self__.parallels,self__.scale,G__24132,self__.__meta,self__.__extmap,null));
} else {
return (new c2.geo.projection._albers_usa(self__.origin,self__.parallels,self__.scale,self__.translate,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__24132),null));
}
}
}
}
}));

(c2.geo.projection._albers_usa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"origin","origin",1037372088),self__.origin,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parallels","parallels",1548322555),self__.parallels,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"scale","scale",-230427353),self__.scale,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"translate","translate",1336199447),self__.translate,null))], null),self__.__extmap));
}));

(c2.geo.projection._albers_usa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__24132){
var self__ = this;
var this__5468__auto____$1 = this;
return (new c2.geo.projection._albers_usa(self__.origin,self__.parallels,self__.scale,self__.translate,G__24132,self__.__extmap,self__.__hash));
}));

(c2.geo.projection._albers_usa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(c2.geo.projection._albers_usa.prototype.call = (function (unused__2830__auto__){
var self__ = this;
var self__ = this;
var G__24221 = (arguments.length - (1));
switch (G__24221) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error((""+"Invalid arity: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1))))));

}
}));

(c2.geo.projection._albers_usa.prototype.apply = (function (self__,args24141){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat((((args24141.length > (20)))?(function (){var G__24231 = args24141.slice((0),(20));
G__24231.push(args24141.slice((20)));

return G__24231;
})():args24141)));
}));

(c2.geo.projection._albers_usa.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coordinates){
var self__ = this;
var _ = this;
var vec__24241 = coordinates;
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24241,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24241,(1),null);
var lower48 = c2.geo.projection.albers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"origin","origin",1037372088),self__.origin,new cljs.core.Keyword(null,"parallels","parallels",1548322555),self__.parallels,new cljs.core.Keyword(null,"scale","scale",-230427353),self__.scale,new cljs.core.Keyword(null,"translate","translate",1336199447),self__.translate], 0));
var vec__24244 = self__.translate;
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24244,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24244,(1),null);
var dz = (lower48.scale / (1000));
var alaska = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(lower48,new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-160),(60)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parallels","parallels",1548322555),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(55),(65)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),(0.6 * lower48.scale),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx - (dz * (400))),(dy + (dz * (170)))], null)], 0));
var hawaii = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(lower48,new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-160),(20)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parallels","parallels",1548322555),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(18)], null),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx - (dz * (190))),(dy + (dz * (200)))], null)], 0));
var puerto_rico = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(lower48,new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-60),(10)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parallels","parallels",1548322555),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(18)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),(1.5 * lower48.scale),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx + (dz * (580))),(dy + (dz * (430)))], null)], 0));
var G__24292 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lon,lat], null);
var fexpr__24291 = (((((lat > (50))) && ((lon < (-127)))))?alaska:(((lon < (-140)))?hawaii:(((lat < (21)))?puerto_rico:lower48
)));
return (fexpr__24291.cljs$core$IFn$_invoke$arity$1 ? fexpr__24291.cljs$core$IFn$_invoke$arity$1(G__24292) : fexpr__24291.call(null,G__24292));
}));

(c2.geo.projection._albers_usa.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"origin","origin",-1617063681,null),new cljs.core.Symbol(null,"parallels","parallels",-1106113214,null),new cljs.core.Symbol(null,"scale","scale",1410104174,null),new cljs.core.Symbol(null,"translate","translate",-1318236322,null)], null);
}));

(c2.geo.projection._albers_usa.cljs$lang$type = true);

(c2.geo.projection._albers_usa.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"c2.geo.projection/_albers-usa",null,(1),null));
}));

(c2.geo.projection._albers_usa.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"c2.geo.projection/_albers-usa");
}));

/**
 * Positional factory function for c2.geo.projection/_albers-usa.
 */
c2.geo.projection.__GT__albers_usa = (function c2$geo$projection$__GT__albers_usa(origin,parallels,scale,translate){
return (new c2.geo.projection._albers_usa(origin,parallels,scale,translate,null,null,null));
});

/**
 * Factory function for c2.geo.projection/_albers-usa, taking a map of keywords to field values.
 */
c2.geo.projection.map__GT__albers_usa = (function c2$geo$projection$map__GT__albers_usa(G__24138){
var extmap__5511__auto__ = (function (){var G__24317 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24138,new cljs.core.Keyword(null,"origin","origin",1037372088),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parallels","parallels",1548322555),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"translate","translate",1336199447)], 0));
if(cljs.core.record_QMARK_(G__24138)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24317);
} else {
return G__24317;
}
})();
return (new c2.geo.projection._albers_usa(new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(G__24138),new cljs.core.Keyword(null,"parallels","parallels",1548322555).cljs$core$IFn$_invoke$arity$1(G__24138),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(G__24138),new cljs.core.Keyword(null,"translate","translate",1336199447).cljs$core$IFn$_invoke$arity$1(G__24138),null,cljs.core.not_empty(extmap__5511__auto__),null));
});


c2.geo.projection.albers_usa = (function c2$geo$projection$albers_usa(var_args){
var args__5903__auto__ = [];
var len__5897__auto___24487 = arguments.length;
var i__5898__auto___24488 = (0);
while(true){
if((i__5898__auto___24488 < len__5897__auto___24487)){
args__5903__auto__.push((arguments[i__5898__auto___24488]));

var G__24489 = (i__5898__auto___24488 + (1));
i__5898__auto___24488 = G__24489;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return c2.geo.projection.albers_usa.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(c2.geo.projection.albers_usa.cljs$core$IFn$_invoke$arity$variadic = (function (kwargs){
return c2.geo.projection.map__GT__albers_usa(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-98),(38)], null),new cljs.core.Keyword(null,"parallels","parallels",1548322555),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [29.5,45.5], null),new cljs.core.Keyword(null,"scale","scale",-230427353),(1000),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(480),(250)], null)], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kwargs)], 0)));
}));

(c2.geo.projection.albers_usa.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c2.geo.projection.albers_usa.cljs$lang$applyTo = (function (seq24326){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24326));
}));


//# sourceMappingURL=c2.geo.projection.js.map
