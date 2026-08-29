goog.provide('c2.scale');

/**
 * @interface
 */
c2.scale.IInvertable = function(){};

var c2$scale$IInvertable$invert$dyn_24444 = (function (scale){
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
return c2$scale$IInvertable$invert$dyn_24444(scale);
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

(c2.scale._linear.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k24046,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__24055 = k24046;
var G__24055__$1 = (((G__24055 instanceof cljs.core.Keyword))?G__24055.fqn:null);
switch (G__24055__$1) {
case "domain":
return self__.domain;

break;
case "range":
return self__.range;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24046,else__5472__auto__);

}
}));

(c2.scale._linear.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__24058){
var vec__24062 = p__24058;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24062,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24062,(1),null);
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

(c2.scale._linear.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24045){
var self__ = this;
var G__24045__$1 = this;
return (new cljs.core.RecordIter((0),G__24045__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"range","range",1639692286)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(c2.scale._linear.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24047,other24048){
var self__ = this;
var this24047__$1 = this;
return (((!((other24048 == null)))) && ((((this24047__$1.constructor === other24048.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24047__$1.domain,other24048.domain)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24047__$1.range,other24048.range)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24047__$1.__extmap,other24048.__extmap)))))))));
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

(c2.scale._linear.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k24046){
var self__ = this;
var this__5476__auto____$1 = this;
var G__24071 = k24046;
var G__24071__$1 = (((G__24071 instanceof cljs.core.Keyword))?G__24071.fqn:null);
switch (G__24071__$1) {
case "domain":
case "range":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k24046);

}
}));

(c2.scale._linear.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__24045){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__24075 = cljs.core.keyword_identical_QMARK_;
var expr__24076 = k__5478__auto__;
if(cljs.core.truth_((pred__24075.cljs$core$IFn$_invoke$arity$2 ? pred__24075.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"domain","domain",1847214937),expr__24076) : pred__24075.call(null,new cljs.core.Keyword(null,"domain","domain",1847214937),expr__24076)))){
return (new c2.scale._linear(G__24045,self__.range,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__24075.cljs$core$IFn$_invoke$arity$2 ? pred__24075.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"range","range",1639692286),expr__24076) : pred__24075.call(null,new cljs.core.Keyword(null,"range","range",1639692286),expr__24076)))){
return (new c2.scale._linear(self__.domain,G__24045,self__.__meta,self__.__extmap,null));
} else {
return (new c2.scale._linear(self__.domain,self__.range,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__24045),null));
}
}
}));

(c2.scale._linear.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"domain","domain",1847214937),self__.domain,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"range","range",1639692286),self__.range,null))], null),self__.__extmap));
}));

(c2.scale._linear.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__24045){
var self__ = this;
var this__5468__auto____$1 = this;
return (new c2.scale._linear(self__.domain,self__.range,G__24045,self__.__extmap,self__.__hash));
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
var G__24079 = (arguments.length - (1));
switch (G__24079) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error((""+"Invalid arity: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1))))));

}
}));

(c2.scale._linear.prototype.apply = (function (self__,args24053){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat((((args24053.length > (20)))?(function (){var G__24088 = args24053.slice((0),(20));
G__24088.push(args24053.slice((20)));

return G__24088;
})():args24053)));
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
c2.scale.map__GT__linear = (function c2$scale$map__GT__linear(G__24051){
var extmap__5511__auto__ = (function (){var G__24103 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24051,new cljs.core.Keyword(null,"domain","domain",1847214937),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"range","range",1639692286)], 0));
if(cljs.core.record_QMARK_(G__24051)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24103);
} else {
return G__24103;
}
})();
return (new c2.scale._linear(new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(G__24051),new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(G__24051),null,cljs.core.not_empty(extmap__5511__auto__),null));
});


c2.scale.linear = (function c2$scale$linear(var_args){
var args__5903__auto__ = [];
var len__5897__auto___24520 = arguments.length;
var i__5898__auto___24521 = (0);
while(true){
if((i__5898__auto___24521 < len__5897__auto___24520)){
args__5903__auto__.push((arguments[i__5898__auto___24521]));

var G__24523 = (i__5898__auto___24521 + (1));
i__5898__auto___24521 = G__24523;
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
(c2.scale.linear.cljs$lang$applyTo = (function (seq24106){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24106));
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

(c2.scale._power.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k24126,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__24151 = k24126;
var G__24151__$1 = (((G__24151 instanceof cljs.core.Keyword))?G__24151.fqn:null);
switch (G__24151__$1) {
case "domain":
return self__.domain;

break;
case "range":
return self__.range;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24126,else__5472__auto__);

}
}));

(c2.scale._power.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__24165){
var vec__24166 = p__24165;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24166,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24166,(1),null);
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

(c2.scale._power.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24125){
var self__ = this;
var G__24125__$1 = this;
return (new cljs.core.RecordIter((0),G__24125__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"range","range",1639692286)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(c2.scale._power.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24127,other24128){
var self__ = this;
var this24127__$1 = this;
return (((!((other24128 == null)))) && ((((this24127__$1.constructor === other24128.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24127__$1.domain,other24128.domain)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24127__$1.range,other24128.range)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24127__$1.__extmap,other24128.__extmap)))))))));
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

(c2.scale._power.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k24126){
var self__ = this;
var this__5476__auto____$1 = this;
var G__24188 = k24126;
var G__24188__$1 = (((G__24188 instanceof cljs.core.Keyword))?G__24188.fqn:null);
switch (G__24188__$1) {
case "domain":
case "range":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k24126);

}
}));

(c2.scale._power.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__24125){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__24196 = cljs.core.keyword_identical_QMARK_;
var expr__24197 = k__5478__auto__;
if(cljs.core.truth_((pred__24196.cljs$core$IFn$_invoke$arity$2 ? pred__24196.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"domain","domain",1847214937),expr__24197) : pred__24196.call(null,new cljs.core.Keyword(null,"domain","domain",1847214937),expr__24197)))){
return (new c2.scale._power(G__24125,self__.range,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__24196.cljs$core$IFn$_invoke$arity$2 ? pred__24196.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"range","range",1639692286),expr__24197) : pred__24196.call(null,new cljs.core.Keyword(null,"range","range",1639692286),expr__24197)))){
return (new c2.scale._power(self__.domain,G__24125,self__.__meta,self__.__extmap,null));
} else {
return (new c2.scale._power(self__.domain,self__.range,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__24125),null));
}
}
}));

(c2.scale._power.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"domain","domain",1847214937),self__.domain,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"range","range",1639692286),self__.range,null))], null),self__.__extmap));
}));

(c2.scale._power.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__24125){
var self__ = this;
var this__5468__auto____$1 = this;
return (new c2.scale._power(self__.domain,self__.range,G__24125,self__.__extmap,self__.__hash));
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
var G__24219 = (arguments.length - (1));
switch (G__24219) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error((""+"Invalid arity: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1))))));

}
}));

(c2.scale._power.prototype.apply = (function (self__,args24145){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat((((args24145.length > (20)))?(function (){var G__24235 = args24145.slice((0),(20));
G__24235.push(args24145.slice((20)));

return G__24235;
})():args24145)));
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
c2.scale.map__GT__power = (function c2$scale$map__GT__power(G__24136){
var extmap__5511__auto__ = (function (){var G__24254 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24136,new cljs.core.Keyword(null,"domain","domain",1847214937),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"range","range",1639692286)], 0));
if(cljs.core.record_QMARK_(G__24136)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24254);
} else {
return G__24254;
}
})();
return (new c2.scale._power(new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(G__24136),new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(G__24136),null,cljs.core.not_empty(extmap__5511__auto__),null));
});


c2.scale.power = (function c2$scale$power(var_args){
var args__5903__auto__ = [];
var len__5897__auto___24587 = arguments.length;
var i__5898__auto___24588 = (0);
while(true){
if((i__5898__auto___24588 < len__5897__auto___24587)){
args__5903__auto__.push((arguments[i__5898__auto___24588]));

var G__24591 = (i__5898__auto___24588 + (1));
i__5898__auto___24588 = G__24591;
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
(c2.scale.power.cljs$lang$applyTo = (function (seq24260){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24260));
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

(c2.scale._log.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k24285,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__24299 = k24285;
var G__24299__$1 = (((G__24299 instanceof cljs.core.Keyword))?G__24299.fqn:null);
switch (G__24299__$1) {
case "domain":
return self__.domain;

break;
case "range":
return self__.range;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24285,else__5472__auto__);

}
}));

(c2.scale._log.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__24311){
var vec__24312 = p__24311;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24312,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24312,(1),null);
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

(c2.scale._log.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24284){
var self__ = this;
var G__24284__$1 = this;
return (new cljs.core.RecordIter((0),G__24284__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"range","range",1639692286)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(c2.scale._log.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24286,other24287){
var self__ = this;
var this24286__$1 = this;
return (((!((other24287 == null)))) && ((((this24286__$1.constructor === other24287.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24286__$1.domain,other24287.domain)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24286__$1.range,other24287.range)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24286__$1.__extmap,other24287.__extmap)))))))));
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

(c2.scale._log.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k24285){
var self__ = this;
var this__5476__auto____$1 = this;
var G__24353 = k24285;
var G__24353__$1 = (((G__24353 instanceof cljs.core.Keyword))?G__24353.fqn:null);
switch (G__24353__$1) {
case "domain":
case "range":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k24285);

}
}));

(c2.scale._log.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__24284){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__24354 = cljs.core.keyword_identical_QMARK_;
var expr__24355 = k__5478__auto__;
if(cljs.core.truth_((pred__24354.cljs$core$IFn$_invoke$arity$2 ? pred__24354.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"domain","domain",1847214937),expr__24355) : pred__24354.call(null,new cljs.core.Keyword(null,"domain","domain",1847214937),expr__24355)))){
return (new c2.scale._log(G__24284,self__.range,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__24354.cljs$core$IFn$_invoke$arity$2 ? pred__24354.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"range","range",1639692286),expr__24355) : pred__24354.call(null,new cljs.core.Keyword(null,"range","range",1639692286),expr__24355)))){
return (new c2.scale._log(self__.domain,G__24284,self__.__meta,self__.__extmap,null));
} else {
return (new c2.scale._log(self__.domain,self__.range,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__24284),null));
}
}
}));

(c2.scale._log.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"domain","domain",1847214937),self__.domain,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"range","range",1639692286),self__.range,null))], null),self__.__extmap));
}));

(c2.scale._log.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__24284){
var self__ = this;
var this__5468__auto____$1 = this;
return (new c2.scale._log(self__.domain,self__.range,G__24284,self__.__extmap,self__.__hash));
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
var G__24368 = (arguments.length - (1));
switch (G__24368) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error((""+"Invalid arity: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1))))));

}
}));

(c2.scale._log.prototype.apply = (function (self__,args24294){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat((((args24294.length > (20)))?(function (){var G__24382 = args24294.slice((0),(20));
G__24382.push(args24294.slice((20)));

return G__24382;
})():args24294)));
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
c2.scale.map__GT__log = (function c2$scale$map__GT__log(G__24290){
var extmap__5511__auto__ = (function (){var G__24398 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24290,new cljs.core.Keyword(null,"domain","domain",1847214937),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"range","range",1639692286)], 0));
if(cljs.core.record_QMARK_(G__24290)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24398);
} else {
return G__24398;
}
})();
return (new c2.scale._log(new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(G__24290),new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(G__24290),null,cljs.core.not_empty(extmap__5511__auto__),null));
});


c2.scale.log = (function c2$scale$log(var_args){
var args__5903__auto__ = [];
var len__5897__auto___24640 = arguments.length;
var i__5898__auto___24642 = (0);
while(true){
if((i__5898__auto___24642 < len__5897__auto___24640)){
args__5903__auto__.push((arguments[i__5898__auto___24642]));

var G__24644 = (i__5898__auto___24642 + (1));
i__5898__auto___24642 = G__24644;
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
(c2.scale.log.cljs$lang$applyTo = (function (seq24405){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24405));
}));


//# sourceMappingURL=c2.scale.js.map
