goog.provide('c2.scale');

/**
 * @interface
 */
c2.scale.IInvertable = function(){};

var c2$scale$IInvertable$invert$dyn_24326 = (function (scale){
var x__5519__auto__ = (((scale == null))?null:scale);
var m__5520__auto__ = (c2.scale.invert[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(scale) : m__5520__auto__.call(null,scale));
} else {
var m__5518__auto__ = (c2.scale.invert["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(scale) : m__5518__auto__.call(null,scale));
} else {
throw cljs.core.missing_protocol("IInvertable.invert",scale);
}
}
});
/**
 * Inverted scale
 */
c2.scale.invert = (function c2$scale$invert(scale){
if((((!((scale == null)))) && ((!((scale.c2$scale$IInvertable$invert$arity$1 == null)))))){
return scale.c2$scale$IInvertable$invert$arity$1(scale);
} else {
return c2$scale$IInvertable$invert$dyn_24326(scale);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {c2.scale.IInvertable}
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
c2.scale._linear = (function (domain,range,__meta,__extmap,__hash){
this.domain = domain;
this.range = range;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(c2.scale._linear.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(c2.scale._linear.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k24102,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__24109 = k24102;
var G__24109__$1 = (((G__24109 instanceof cljs.core.Keyword))?G__24109.fqn:null);
switch (G__24109__$1) {
case "domain":
return self__.domain;

break;
case "range":
return self__.range;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24102,else__5472__auto__);

}
}));

(c2.scale._linear.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__24110){
var vec__24111 = p__24110;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24111,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24111,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(c2.scale._linear.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#c2.scale._linear{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"domain","domain",1847214937),self__.domain],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"range","range",1639692286),self__.range],null))], null),self__.__extmap));
}));

(c2.scale._linear.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24101){
var self__ = this;
var G__24101__$1 = this;
return (new cljs.core.RecordIter((0),G__24101__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"range","range",1639692286)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(c2.scale._linear.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(c2.scale._linear.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new c2.scale._linear(self__.domain,self__.range,self__.__meta,self__.__extmap,self__.__hash));
}));

(c2.scale._linear.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(c2.scale._linear.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-2111719957 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(c2.scale._linear.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24103,other24104){
var self__ = this;
var this24103__$1 = this;
return (((!((other24104 == null)))) && ((((this24103__$1.constructor === other24104.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24103__$1.domain,other24104.domain)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24103__$1.range,other24104.range)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24103__$1.__extmap,other24104.__extmap)))))))));
}));

(c2.scale._linear.prototype.c2$scale$IInvertable$ = cljs.core.PROTOCOL_SENTINEL);

(c2.scale._linear.prototype.c2$scale$IInvertable$invert$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"domain","domain",1847214937),self__.range,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"range","range",1639692286),self__.domain], 0));
}));

(c2.scale._linear.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),null,new cljs.core.Keyword(null,"range","range",1639692286),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new c2.scale._linear(self__.domain,self__.range,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(c2.scale._linear.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k24102){
var self__ = this;
var this__5476__auto____$1 = this;
var G__24119 = k24102;
var G__24119__$1 = (((G__24119 instanceof cljs.core.Keyword))?G__24119.fqn:null);
switch (G__24119__$1) {
case "domain":
case "range":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k24102);

}
}));

(c2.scale._linear.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__24101){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__24120 = cljs.core.keyword_identical_QMARK_;
var expr__24121 = k__5478__auto__;
if(cljs.core.truth_((pred__24120.cljs$core$IFn$_invoke$arity$2 ? pred__24120.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"domain","domain",1847214937),expr__24121) : pred__24120.call(null,new cljs.core.Keyword(null,"domain","domain",1847214937),expr__24121)))){
return (new c2.scale._linear(G__24101,self__.range,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__24120.cljs$core$IFn$_invoke$arity$2 ? pred__24120.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"range","range",1639692286),expr__24121) : pred__24120.call(null,new cljs.core.Keyword(null,"range","range",1639692286),expr__24121)))){
return (new c2.scale._linear(self__.domain,G__24101,self__.__meta,self__.__extmap,null));
} else {
return (new c2.scale._linear(self__.domain,self__.range,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__24101),null));
}
}
}));

(c2.scale._linear.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"domain","domain",1847214937),self__.domain,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"range","range",1639692286),self__.range,null))], null),self__.__extmap));
}));

(c2.scale._linear.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__24101){
var self__ = this;
var this__5468__auto____$1 = this;
return (new c2.scale._linear(self__.domain,self__.range,G__24101,self__.__extmap,self__.__hash));
}));

(c2.scale._linear.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(c2.scale._linear.prototype.call = (function (unused__2830__auto__){
var self__ = this;
var self__ = this;
var G__24123 = (arguments.length - (1));
switch (G__24123) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error((""+"Invalid arity: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1))))));

}
}));

(c2.scale._linear.prototype.apply = (function (self__,args24108){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat((((args24108.length > (20)))?(function (){var G__24124 = args24108.slice((0),(20));
G__24124.push(args24108.slice((20)));

return G__24124;
})():args24108)));
}));

(c2.scale._linear.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var _ = this;
var domain_length = (cljs.core.last(self__.domain) - cljs.core.first(self__.domain));
var range_length = (cljs.core.last(self__.range) - cljs.core.first(self__.range));
return (cljs.core.first(self__.range) + (range_length * ((x - cljs.core.first(self__.domain)) / domain_length)));
}));

(c2.scale._linear.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"domain","domain",-807220832,null),new cljs.core.Symbol(null,"range","range",-1014743483,null)], null);
}));

(c2.scale._linear.cljs$lang$type = true);

(c2.scale._linear.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"c2.scale/_linear",null,(1),null));
}));

(c2.scale._linear.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"c2.scale/_linear");
}));

/**
 * Positional factory function for c2.scale/_linear.
 */
c2.scale.__GT__linear = (function c2$scale$__GT__linear(domain,range){
return (new c2.scale._linear(domain,range,null,null,null));
});

/**
 * Factory function for c2.scale/_linear, taking a map of keywords to field values.
 */
c2.scale.map__GT__linear = (function c2$scale$map__GT__linear(G__24105){
var extmap__5511__auto__ = (function (){var G__24127 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24105,new cljs.core.Keyword(null,"domain","domain",1847214937),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"range","range",1639692286)], 0));
if(cljs.core.record_QMARK_(G__24105)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24127);
} else {
return G__24127;
}
})();
return (new c2.scale._linear(new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(G__24105),new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(G__24105),null,cljs.core.not_empty(extmap__5511__auto__),null));
});


c2.scale.linear = (function c2$scale$linear(var_args){
var args__5903__auto__ = [];
var len__5897__auto___24383 = arguments.length;
var i__5898__auto___24386 = (0);
while(true){
if((i__5898__auto___24386 < len__5897__auto___24383)){
args__5903__auto__.push((arguments[i__5898__auto___24386]));

var G__24387 = (i__5898__auto___24386 + (1));
i__5898__auto___24386 = G__24387;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return c2.scale.linear.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(c2.scale.linear.cljs$core$IFn$_invoke$arity$variadic = (function (kwargs){
return c2.scale.map__GT__linear(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kwargs)], 0)));
}));

(c2.scale.linear.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c2.scale.linear.cljs$lang$applyTo = (function (seq24128){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24128));
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
c2.scale._power = (function (domain,range,__meta,__extmap,__hash){
this.domain = domain;
this.range = range;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(c2.scale._power.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(c2.scale._power.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k24131,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__24136 = k24131;
var G__24136__$1 = (((G__24136 instanceof cljs.core.Keyword))?G__24136.fqn:null);
switch (G__24136__$1) {
case "domain":
return self__.domain;

break;
case "range":
return self__.range;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24131,else__5472__auto__);

}
}));

(c2.scale._power.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__24143){
var vec__24144 = p__24143;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24144,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24144,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(c2.scale._power.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#c2.scale._power{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"domain","domain",1847214937),self__.domain],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"range","range",1639692286),self__.range],null))], null),self__.__extmap));
}));

(c2.scale._power.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24130){
var self__ = this;
var G__24130__$1 = this;
return (new cljs.core.RecordIter((0),G__24130__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"range","range",1639692286)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(c2.scale._power.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(c2.scale._power.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new c2.scale._power(self__.domain,self__.range,self__.__meta,self__.__extmap,self__.__hash));
}));

(c2.scale._power.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(c2.scale._power.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-683968115 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(c2.scale._power.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24132,other24133){
var self__ = this;
var this24132__$1 = this;
return (((!((other24133 == null)))) && ((((this24132__$1.constructor === other24133.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24132__$1.domain,other24133.domain)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24132__$1.range,other24133.range)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24132__$1.__extmap,other24133.__extmap)))))))));
}));

(c2.scale._power.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),null,new cljs.core.Keyword(null,"range","range",1639692286),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new c2.scale._power(self__.domain,self__.range,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(c2.scale._power.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k24131){
var self__ = this;
var this__5476__auto____$1 = this;
var G__24176 = k24131;
var G__24176__$1 = (((G__24176 instanceof cljs.core.Keyword))?G__24176.fqn:null);
switch (G__24176__$1) {
case "domain":
case "range":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k24131);

}
}));

(c2.scale._power.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__24130){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__24179 = cljs.core.keyword_identical_QMARK_;
var expr__24180 = k__5478__auto__;
if(cljs.core.truth_((pred__24179.cljs$core$IFn$_invoke$arity$2 ? pred__24179.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"domain","domain",1847214937),expr__24180) : pred__24179.call(null,new cljs.core.Keyword(null,"domain","domain",1847214937),expr__24180)))){
return (new c2.scale._power(G__24130,self__.range,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__24179.cljs$core$IFn$_invoke$arity$2 ? pred__24179.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"range","range",1639692286),expr__24180) : pred__24179.call(null,new cljs.core.Keyword(null,"range","range",1639692286),expr__24180)))){
return (new c2.scale._power(self__.domain,G__24130,self__.__meta,self__.__extmap,null));
} else {
return (new c2.scale._power(self__.domain,self__.range,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__24130),null));
}
}
}));

(c2.scale._power.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"domain","domain",1847214937),self__.domain,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"range","range",1639692286),self__.range,null))], null),self__.__extmap));
}));

(c2.scale._power.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__24130){
var self__ = this;
var this__5468__auto____$1 = this;
return (new c2.scale._power(self__.domain,self__.range,G__24130,self__.__extmap,self__.__hash));
}));

(c2.scale._power.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(c2.scale._power.prototype.call = (function (unused__2830__auto__){
var self__ = this;
var self__ = this;
var G__24187 = (arguments.length - (1));
switch (G__24187) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error((""+"Invalid arity: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1))))));

}
}));

(c2.scale._power.prototype.apply = (function (self__,args24135){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat((((args24135.length > (20)))?(function (){var G__24191 = args24135.slice((0),(20));
G__24191.push(args24135.slice((20)));

return G__24191;
})():args24135)));
}));

(c2.scale._power.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var _ = this;
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(c2.scale.linear.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"domain","domain",1847214937),cljs.core.map.cljs$core$IFn$_invoke$arity$2(c2.maths.expt,self__.domain),new cljs.core.Keyword(null,"range","range",1639692286),self__.range], 0)),c2.maths.expt)(x);
}));

(c2.scale._power.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"domain","domain",-807220832,null),new cljs.core.Symbol(null,"range","range",-1014743483,null)], null);
}));

(c2.scale._power.cljs$lang$type = true);

(c2.scale._power.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"c2.scale/_power",null,(1),null));
}));

(c2.scale._power.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"c2.scale/_power");
}));

/**
 * Positional factory function for c2.scale/_power.
 */
c2.scale.__GT__power = (function c2$scale$__GT__power(domain,range){
return (new c2.scale._power(domain,range,null,null,null));
});

/**
 * Factory function for c2.scale/_power, taking a map of keywords to field values.
 */
c2.scale.map__GT__power = (function c2$scale$map__GT__power(G__24134){
var extmap__5511__auto__ = (function (){var G__24202 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24134,new cljs.core.Keyword(null,"domain","domain",1847214937),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"range","range",1639692286)], 0));
if(cljs.core.record_QMARK_(G__24134)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24202);
} else {
return G__24202;
}
})();
return (new c2.scale._power(new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(G__24134),new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(G__24134),null,cljs.core.not_empty(extmap__5511__auto__),null));
});


c2.scale.power = (function c2$scale$power(var_args){
var args__5903__auto__ = [];
var len__5897__auto___24439 = arguments.length;
var i__5898__auto___24440 = (0);
while(true){
if((i__5898__auto___24440 < len__5897__auto___24439)){
args__5903__auto__.push((arguments[i__5898__auto___24440]));

var G__24441 = (i__5898__auto___24440 + (1));
i__5898__auto___24440 = G__24441;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return c2.scale.power.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(c2.scale.power.cljs$core$IFn$_invoke$arity$variadic = (function (kwargs){
return c2.scale.map__GT__power(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kwargs)], 0)));
}));

(c2.scale.power.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c2.scale.power.cljs$lang$applyTo = (function (seq24205){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24205));
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
c2.scale._log = (function (domain,range,__meta,__extmap,__hash){
this.domain = domain;
this.range = range;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(c2.scale._log.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(c2.scale._log.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k24220,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__24225 = k24220;
var G__24225__$1 = (((G__24225 instanceof cljs.core.Keyword))?G__24225.fqn:null);
switch (G__24225__$1) {
case "domain":
return self__.domain;

break;
case "range":
return self__.range;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24220,else__5472__auto__);

}
}));

(c2.scale._log.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__24226){
var vec__24227 = p__24226;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24227,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24227,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(c2.scale._log.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#c2.scale._log{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"domain","domain",1847214937),self__.domain],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"range","range",1639692286),self__.range],null))], null),self__.__extmap));
}));

(c2.scale._log.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24219){
var self__ = this;
var G__24219__$1 = this;
return (new cljs.core.RecordIter((0),G__24219__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"range","range",1639692286)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(c2.scale._log.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(c2.scale._log.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new c2.scale._log(self__.domain,self__.range,self__.__meta,self__.__extmap,self__.__hash));
}));

(c2.scale._log.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(c2.scale._log.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-1479034277 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(c2.scale._log.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24221,other24222){
var self__ = this;
var this24221__$1 = this;
return (((!((other24222 == null)))) && ((((this24221__$1.constructor === other24222.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24221__$1.domain,other24222.domain)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24221__$1.range,other24222.range)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24221__$1.__extmap,other24222.__extmap)))))))));
}));

(c2.scale._log.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),null,new cljs.core.Keyword(null,"range","range",1639692286),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new c2.scale._log(self__.domain,self__.range,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(c2.scale._log.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k24220){
var self__ = this;
var this__5476__auto____$1 = this;
var G__24242 = k24220;
var G__24242__$1 = (((G__24242 instanceof cljs.core.Keyword))?G__24242.fqn:null);
switch (G__24242__$1) {
case "domain":
case "range":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k24220);

}
}));

(c2.scale._log.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__24219){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__24244 = cljs.core.keyword_identical_QMARK_;
var expr__24245 = k__5478__auto__;
if(cljs.core.truth_((pred__24244.cljs$core$IFn$_invoke$arity$2 ? pred__24244.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"domain","domain",1847214937),expr__24245) : pred__24244.call(null,new cljs.core.Keyword(null,"domain","domain",1847214937),expr__24245)))){
return (new c2.scale._log(G__24219,self__.range,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__24244.cljs$core$IFn$_invoke$arity$2 ? pred__24244.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"range","range",1639692286),expr__24245) : pred__24244.call(null,new cljs.core.Keyword(null,"range","range",1639692286),expr__24245)))){
return (new c2.scale._log(self__.domain,G__24219,self__.__meta,self__.__extmap,null));
} else {
return (new c2.scale._log(self__.domain,self__.range,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__24219),null));
}
}
}));

(c2.scale._log.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"domain","domain",1847214937),self__.domain,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"range","range",1639692286),self__.range,null))], null),self__.__extmap));
}));

(c2.scale._log.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__24219){
var self__ = this;
var this__5468__auto____$1 = this;
return (new c2.scale._log(self__.domain,self__.range,G__24219,self__.__extmap,self__.__hash));
}));

(c2.scale._log.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(c2.scale._log.prototype.call = (function (unused__2830__auto__){
var self__ = this;
var self__ = this;
var G__24258 = (arguments.length - (1));
switch (G__24258) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error((""+"Invalid arity: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1))))));

}
}));

(c2.scale._log.prototype.apply = (function (self__,args24224){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat((((args24224.length > (20)))?(function (){var G__24266 = args24224.slice((0),(20));
G__24266.push(args24224.slice((20)));

return G__24266;
})():args24224)));
}));

(c2.scale._log.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var _ = this;
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(c2.scale.linear.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"domain","domain",1847214937),cljs.core.map.cljs$core$IFn$_invoke$arity$2(c2.maths.log,self__.domain),new cljs.core.Keyword(null,"range","range",1639692286),self__.range], 0)),c2.maths.log)(x);
}));

(c2.scale._log.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"domain","domain",-807220832,null),new cljs.core.Symbol(null,"range","range",-1014743483,null)], null);
}));

(c2.scale._log.cljs$lang$type = true);

(c2.scale._log.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"c2.scale/_log",null,(1),null));
}));

(c2.scale._log.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"c2.scale/_log");
}));

/**
 * Positional factory function for c2.scale/_log.
 */
c2.scale.__GT__log = (function c2$scale$__GT__log(domain,range){
return (new c2.scale._log(domain,range,null,null,null));
});

/**
 * Factory function for c2.scale/_log, taking a map of keywords to field values.
 */
c2.scale.map__GT__log = (function c2$scale$map__GT__log(G__24223){
var extmap__5511__auto__ = (function (){var G__24290 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24223,new cljs.core.Keyword(null,"domain","domain",1847214937),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"range","range",1639692286)], 0));
if(cljs.core.record_QMARK_(G__24223)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24290);
} else {
return G__24290;
}
})();
return (new c2.scale._log(new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(G__24223),new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(G__24223),null,cljs.core.not_empty(extmap__5511__auto__),null));
});


c2.scale.log = (function c2$scale$log(var_args){
var args__5903__auto__ = [];
var len__5897__auto___24475 = arguments.length;
var i__5898__auto___24478 = (0);
while(true){
if((i__5898__auto___24478 < len__5897__auto___24475)){
args__5903__auto__.push((arguments[i__5898__auto___24478]));

var G__24479 = (i__5898__auto___24478 + (1));
i__5898__auto___24478 = G__24479;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return c2.scale.log.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(c2.scale.log.cljs$core$IFn$_invoke$arity$variadic = (function (kwargs){
return c2.scale.map__GT__log(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(10)], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kwargs)], 0)));
}));

(c2.scale.log.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c2.scale.log.cljs$lang$applyTo = (function (seq24300){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24300));
}));


//# sourceMappingURL=c2.scale.js.map
