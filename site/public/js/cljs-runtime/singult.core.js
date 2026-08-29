goog.provide('singult.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
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
singult.core.Unify = (function (data,mapping,key_fn,enter,update,exit,force_update_QMARK_,__meta,__extmap,__hash){
this.data = data;
this.mapping = mapping;
this.key_fn = key_fn;
this.enter = enter;
this.update = update;
this.exit = exit;
this.force_update_QMARK_ = force_update_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(singult.core.Unify.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(singult.core.Unify.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k21805,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__21810 = k21805;
var G__21810__$1 = (((G__21810 instanceof cljs.core.Keyword))?G__21810.fqn:null);
switch (G__21810__$1) {
case "data":
return self__.data;

break;
case "mapping":
return self__.mapping;

break;
case "key-fn":
return self__.key_fn;

break;
case "enter":
return self__.enter;

break;
case "update":
return self__.update;

break;
case "exit":
return self__.exit;

break;
case "force-update?":
return self__.force_update_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21805,else__5472__auto__);

}
}));

(singult.core.Unify.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__21811){
var vec__21812 = p__21811;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21812,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21812,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(singult.core.Unify.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#singult.core.Unify{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mapping","mapping",-1242405430),self__.mapping],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),self__.key_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"enter","enter",1792452624),self__.enter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"update","update",1045576396),self__.update],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"exit","exit",351849638),self__.exit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"force-update?","force-update?",137364796),self__.force_update_QMARK_],null))], null),self__.__extmap));
}));

(singult.core.Unify.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21804){
var self__ = this;
var G__21804__$1 = this;
return (new cljs.core.RecordIter((0),G__21804__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"mapping","mapping",-1242405430),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),new cljs.core.Keyword(null,"enter","enter",1792452624),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"exit","exit",351849638),new cljs.core.Keyword(null,"force-update?","force-update?",137364796)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(singult.core.Unify.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(singult.core.Unify.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new singult.core.Unify(self__.data,self__.mapping,self__.key_fn,self__.enter,self__.update,self__.exit,self__.force_update_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
}));

(singult.core.Unify.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
}));

(singult.core.Unify.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-591139604 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(singult.core.Unify.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21806,other21807){
var self__ = this;
var this21806__$1 = this;
return (((!((other21807 == null)))) && ((((this21806__$1.constructor === other21807.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21806__$1.data,other21807.data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21806__$1.mapping,other21807.mapping)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21806__$1.key_fn,other21807.key_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21806__$1.enter,other21807.enter)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21806__$1.update,other21807.update)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21806__$1.exit,other21807.exit)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21806__$1.force_update_QMARK_,other21807.force_update_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21806__$1.__extmap,other21807.__extmap)))))))))))))))))));
}));

(singult.core.Unify.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"exit","exit",351849638),null,new cljs.core.Keyword(null,"mapping","mapping",-1242405430),null,new cljs.core.Keyword(null,"update","update",1045576396),null,new cljs.core.Keyword(null,"enter","enter",1792452624),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"force-update?","force-update?",137364796),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new singult.core.Unify(self__.data,self__.mapping,self__.key_fn,self__.enter,self__.update,self__.exit,self__.force_update_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(singult.core.Unify.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k21805){
var self__ = this;
var this__5476__auto____$1 = this;
var G__21827 = k21805;
var G__21827__$1 = (((G__21827 instanceof cljs.core.Keyword))?G__21827.fqn:null);
switch (G__21827__$1) {
case "data":
case "mapping":
case "key-fn":
case "enter":
case "update":
case "exit":
case "force-update?":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k21805);

}
}));

(singult.core.Unify.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__21804){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__21828 = cljs.core.keyword_identical_QMARK_;
var expr__21829 = k__5478__auto__;
if(cljs.core.truth_((pred__21828.cljs$core$IFn$_invoke$arity$2 ? pred__21828.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__21829) : pred__21828.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__21829)))){
return (new singult.core.Unify(G__21804,self__.mapping,self__.key_fn,self__.enter,self__.update,self__.exit,self__.force_update_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21828.cljs$core$IFn$_invoke$arity$2 ? pred__21828.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mapping","mapping",-1242405430),expr__21829) : pred__21828.call(null,new cljs.core.Keyword(null,"mapping","mapping",-1242405430),expr__21829)))){
return (new singult.core.Unify(self__.data,G__21804,self__.key_fn,self__.enter,self__.update,self__.exit,self__.force_update_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21828.cljs$core$IFn$_invoke$arity$2 ? pred__21828.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),expr__21829) : pred__21828.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),expr__21829)))){
return (new singult.core.Unify(self__.data,self__.mapping,G__21804,self__.enter,self__.update,self__.exit,self__.force_update_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21828.cljs$core$IFn$_invoke$arity$2 ? pred__21828.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"enter","enter",1792452624),expr__21829) : pred__21828.call(null,new cljs.core.Keyword(null,"enter","enter",1792452624),expr__21829)))){
return (new singult.core.Unify(self__.data,self__.mapping,self__.key_fn,G__21804,self__.update,self__.exit,self__.force_update_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21828.cljs$core$IFn$_invoke$arity$2 ? pred__21828.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),expr__21829) : pred__21828.call(null,new cljs.core.Keyword(null,"update","update",1045576396),expr__21829)))){
return (new singult.core.Unify(self__.data,self__.mapping,self__.key_fn,self__.enter,G__21804,self__.exit,self__.force_update_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21828.cljs$core$IFn$_invoke$arity$2 ? pred__21828.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"exit","exit",351849638),expr__21829) : pred__21828.call(null,new cljs.core.Keyword(null,"exit","exit",351849638),expr__21829)))){
return (new singult.core.Unify(self__.data,self__.mapping,self__.key_fn,self__.enter,self__.update,G__21804,self__.force_update_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21828.cljs$core$IFn$_invoke$arity$2 ? pred__21828.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"force-update?","force-update?",137364796),expr__21829) : pred__21828.call(null,new cljs.core.Keyword(null,"force-update?","force-update?",137364796),expr__21829)))){
return (new singult.core.Unify(self__.data,self__.mapping,self__.key_fn,self__.enter,self__.update,self__.exit,G__21804,self__.__meta,self__.__extmap,null));
} else {
return (new singult.core.Unify(self__.data,self__.mapping,self__.key_fn,self__.enter,self__.update,self__.exit,self__.force_update_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__21804),null));
}
}
}
}
}
}
}
}));

(singult.core.Unify.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"mapping","mapping",-1242405430),self__.mapping,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),self__.key_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"enter","enter",1792452624),self__.enter,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"update","update",1045576396),self__.update,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"exit","exit",351849638),self__.exit,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"force-update?","force-update?",137364796),self__.force_update_QMARK_,null))], null),self__.__extmap));
}));

(singult.core.Unify.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__21804){
var self__ = this;
var this__5468__auto____$1 = this;
return (new singult.core.Unify(self__.data,self__.mapping,self__.key_fn,self__.enter,self__.update,self__.exit,self__.force_update_QMARK_,G__21804,self__.__extmap,self__.__hash));
}));

(singult.core.Unify.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(singult.core.Unify.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"mapping","mapping",398126097,null),new cljs.core.Symbol(null,"key-fn","key-fn",1004377048,null),new cljs.core.Symbol(null,"enter","enter",-861983145,null),new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"exit","exit",1992381165,null),new cljs.core.Symbol(null,"force-update?","force-update?",1777896323,null)], null);
}));

(singult.core.Unify.cljs$lang$type = true);

(singult.core.Unify.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"singult.core/Unify",null,(1),null));
}));

(singult.core.Unify.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"singult.core/Unify");
}));

/**
 * Positional factory function for singult.core/Unify.
 */
singult.core.__GT_Unify = (function singult$core$__GT_Unify(data,mapping,key_fn,enter,update,exit,force_update_QMARK_){
return (new singult.core.Unify(data,mapping,key_fn,enter,update,exit,force_update_QMARK_,null,null,null));
});

/**
 * Factory function for singult.core/Unify, taking a map of keywords to field values.
 */
singult.core.map__GT_Unify = (function singult$core$map__GT_Unify(G__21808){
var extmap__5511__auto__ = (function (){var G__21832 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21808,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mapping","mapping",-1242405430),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),new cljs.core.Keyword(null,"enter","enter",1792452624),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"exit","exit",351849638),new cljs.core.Keyword(null,"force-update?","force-update?",137364796)], 0));
if(cljs.core.record_QMARK_(G__21808)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__21832);
} else {
return G__21832;
}
})();
return (new singult.core.Unify(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__21808),new cljs.core.Keyword(null,"mapping","mapping",-1242405430).cljs$core$IFn$_invoke$arity$1(G__21808),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479).cljs$core$IFn$_invoke$arity$1(G__21808),new cljs.core.Keyword(null,"enter","enter",1792452624).cljs$core$IFn$_invoke$arity$1(G__21808),new cljs.core.Keyword(null,"update","update",1045576396).cljs$core$IFn$_invoke$arity$1(G__21808),new cljs.core.Keyword(null,"exit","exit",351849638).cljs$core$IFn$_invoke$arity$1(G__21808),new cljs.core.Keyword(null,"force-update?","force-update?",137364796).cljs$core$IFn$_invoke$arity$1(G__21808),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

/**
 * Recursively transforms ClojureScript maps into Javascript objects,
 * other ClojureScript colls into JavaScript arrays, and ClojureScript
 * keywords into JavaScript strings.
 */
singult.core.clj__GT_js = (function singult$core$clj__GT_js(x){
if((x instanceof singult.core.Unify)){
var map__21839 = x;
var map__21839__$1 = cljs.core.__destructure_map(map__21839);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21839__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var mapping = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21839__$1,new cljs.core.Keyword(null,"mapping","mapping",-1242405430));
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21839__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21839__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21839__$1,new cljs.core.Keyword(null,"update","update",1045576396));
var exit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21839__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var force_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21839__$1,new cljs.core.Keyword(null,"force-update?","force-update?",137364796));
var data_arr = (function (){var a = [];
var seq__21841_21957 = cljs.core.seq(data);
var chunk__21842_21958 = null;
var count__21843_21959 = (0);
var i__21844_21960 = (0);
while(true){
if((i__21844_21960 < count__21843_21959)){
var d_21963 = chunk__21842_21958.cljs$core$IIndexed$_nth$arity$2(null,i__21844_21960);
a.push(d_21963);


var G__21964 = seq__21841_21957;
var G__21965 = chunk__21842_21958;
var G__21966 = count__21843_21959;
var G__21967 = (i__21844_21960 + (1));
seq__21841_21957 = G__21964;
chunk__21842_21958 = G__21965;
count__21843_21959 = G__21966;
i__21844_21960 = G__21967;
continue;
} else {
var temp__5825__auto___21968 = cljs.core.seq(seq__21841_21957);
if(temp__5825__auto___21968){
var seq__21841_21969__$1 = temp__5825__auto___21968;
if(cljs.core.chunked_seq_QMARK_(seq__21841_21969__$1)){
var c__5694__auto___21970 = cljs.core.chunk_first(seq__21841_21969__$1);
var G__21971 = cljs.core.chunk_rest(seq__21841_21969__$1);
var G__21972 = c__5694__auto___21970;
var G__21973 = cljs.core.count(c__5694__auto___21970);
var G__21974 = (0);
seq__21841_21957 = G__21971;
chunk__21842_21958 = G__21972;
count__21843_21959 = G__21973;
i__21844_21960 = G__21974;
continue;
} else {
var d_21975 = cljs.core.first(seq__21841_21969__$1);
a.push(d_21975);


var G__21976 = cljs.core.next(seq__21841_21969__$1);
var G__21977 = null;
var G__21978 = (0);
var G__21979 = (0);
seq__21841_21957 = G__21976;
chunk__21842_21958 = G__21977;
count__21843_21959 = G__21978;
i__21844_21960 = G__21979;
continue;
}
} else {
}
}
break;
}

return a;
})();
return (new singult.coffee.Unify(data_arr,(function (p1__21837_SHARP_){
var G__21847 = (mapping.cljs$core$IFn$_invoke$arity$1 ? mapping.cljs$core$IFn$_invoke$arity$1(p1__21837_SHARP_) : mapping.call(null,p1__21837_SHARP_));
return (singult.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? singult.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(G__21847) : singult.core.clj__GT_js.call(null,G__21847));
}),key_fn,enter,update,exit,force_update_QMARK_));
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
var o = ({});
var seq__21850_21988 = cljs.core.seq(x);
var chunk__21851_21989 = null;
var count__21852_21990 = (0);
var i__21853_21991 = (0);
while(true){
if((i__21853_21991 < count__21852_21990)){
var vec__21862_21992 = chunk__21851_21989.cljs$core$IIndexed$_nth$arity$2(null,i__21853_21991);
var k_21993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21862_21992,(0),null);
var v_21994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21862_21992,(1),null);
var key_21996 = (singult.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? singult.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(k_21993) : singult.core.clj__GT_js.call(null,k_21993));
if(typeof key_21996 === 'string'){
} else {
throw "Cannot convert; JavaScript map keys must be strings";
}

(o[key_21996] = (singult.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? singult.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(v_21994) : singult.core.clj__GT_js.call(null,v_21994)));


var G__21999 = seq__21850_21988;
var G__22000 = chunk__21851_21989;
var G__22001 = count__21852_21990;
var G__22002 = (i__21853_21991 + (1));
seq__21850_21988 = G__21999;
chunk__21851_21989 = G__22000;
count__21852_21990 = G__22001;
i__21853_21991 = G__22002;
continue;
} else {
var temp__5825__auto___22003 = cljs.core.seq(seq__21850_21988);
if(temp__5825__auto___22003){
var seq__21850_22004__$1 = temp__5825__auto___22003;
if(cljs.core.chunked_seq_QMARK_(seq__21850_22004__$1)){
var c__5694__auto___22007 = cljs.core.chunk_first(seq__21850_22004__$1);
var G__22008 = cljs.core.chunk_rest(seq__21850_22004__$1);
var G__22009 = c__5694__auto___22007;
var G__22010 = cljs.core.count(c__5694__auto___22007);
var G__22011 = (0);
seq__21850_21988 = G__22008;
chunk__21851_21989 = G__22009;
count__21852_21990 = G__22010;
i__21853_21991 = G__22011;
continue;
} else {
var vec__21866_22014 = cljs.core.first(seq__21850_22004__$1);
var k_22015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21866_22014,(0),null);
var v_22016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21866_22014,(1),null);
var key_22017 = (singult.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? singult.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(k_22015) : singult.core.clj__GT_js.call(null,k_22015));
if(typeof key_22017 === 'string'){
} else {
throw "Cannot convert; JavaScript map keys must be strings";
}

(o[key_22017] = (singult.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? singult.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(v_22016) : singult.core.clj__GT_js.call(null,v_22016)));


var G__22019 = cljs.core.next(seq__21850_22004__$1);
var G__22020 = null;
var G__22021 = (0);
var G__22022 = (0);
seq__21850_21988 = G__22019;
chunk__21851_21989 = G__22020;
count__21852_21990 = G__22021;
i__21853_21991 = G__22022;
continue;
}
} else {
}
}
break;
}

return o;
} else {
if(cljs.core.seq_QMARK_(x)){
var a = [];
a.push(":*:");

var seq__21869_22024 = cljs.core.seq(x);
var chunk__21870_22025 = null;
var count__21871_22026 = (0);
var i__21872_22027 = (0);
while(true){
if((i__21872_22027 < count__21871_22026)){
var item_22029 = chunk__21870_22025.cljs$core$IIndexed$_nth$arity$2(null,i__21872_22027);
a.push((singult.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? singult.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(item_22029) : singult.core.clj__GT_js.call(null,item_22029)));


var G__22030 = seq__21869_22024;
var G__22031 = chunk__21870_22025;
var G__22032 = count__21871_22026;
var G__22033 = (i__21872_22027 + (1));
seq__21869_22024 = G__22030;
chunk__21870_22025 = G__22031;
count__21871_22026 = G__22032;
i__21872_22027 = G__22033;
continue;
} else {
var temp__5825__auto___22034 = cljs.core.seq(seq__21869_22024);
if(temp__5825__auto___22034){
var seq__21869_22035__$1 = temp__5825__auto___22034;
if(cljs.core.chunked_seq_QMARK_(seq__21869_22035__$1)){
var c__5694__auto___22036 = cljs.core.chunk_first(seq__21869_22035__$1);
var G__22037 = cljs.core.chunk_rest(seq__21869_22035__$1);
var G__22038 = c__5694__auto___22036;
var G__22039 = cljs.core.count(c__5694__auto___22036);
var G__22040 = (0);
seq__21869_22024 = G__22037;
chunk__21870_22025 = G__22038;
count__21871_22026 = G__22039;
i__21872_22027 = G__22040;
continue;
} else {
var item_22041 = cljs.core.first(seq__21869_22035__$1);
a.push((singult.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? singult.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(item_22041) : singult.core.clj__GT_js.call(null,item_22041)));


var G__22043 = cljs.core.next(seq__21869_22035__$1);
var G__22044 = null;
var G__22045 = (0);
var G__22046 = (0);
seq__21869_22024 = G__22043;
chunk__21870_22025 = G__22044;
count__21871_22026 = G__22045;
i__21872_22027 = G__22046;
continue;
}
} else {
}
}
break;
}

return a;
} else {
if(cljs.core.coll_QMARK_(x)){
var a = [];
var seq__21886_22048 = cljs.core.seq(x);
var chunk__21887_22049 = null;
var count__21888_22050 = (0);
var i__21889_22051 = (0);
while(true){
if((i__21889_22051 < count__21888_22050)){
var item_22052 = chunk__21887_22049.cljs$core$IIndexed$_nth$arity$2(null,i__21889_22051);
a.push((singult.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? singult.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(item_22052) : singult.core.clj__GT_js.call(null,item_22052)));


var G__22055 = seq__21886_22048;
var G__22056 = chunk__21887_22049;
var G__22057 = count__21888_22050;
var G__22058 = (i__21889_22051 + (1));
seq__21886_22048 = G__22055;
chunk__21887_22049 = G__22056;
count__21888_22050 = G__22057;
i__21889_22051 = G__22058;
continue;
} else {
var temp__5825__auto___22059 = cljs.core.seq(seq__21886_22048);
if(temp__5825__auto___22059){
var seq__21886_22060__$1 = temp__5825__auto___22059;
if(cljs.core.chunked_seq_QMARK_(seq__21886_22060__$1)){
var c__5694__auto___22061 = cljs.core.chunk_first(seq__21886_22060__$1);
var G__22062 = cljs.core.chunk_rest(seq__21886_22060__$1);
var G__22063 = c__5694__auto___22061;
var G__22064 = cljs.core.count(c__5694__auto___22061);
var G__22065 = (0);
seq__21886_22048 = G__22062;
chunk__21887_22049 = G__22063;
count__21888_22050 = G__22064;
i__21889_22051 = G__22065;
continue;
} else {
var item_22066 = cljs.core.first(seq__21886_22060__$1);
a.push((singult.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? singult.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(item_22066) : singult.core.clj__GT_js.call(null,item_22066)));


var G__22067 = cljs.core.next(seq__21886_22060__$1);
var G__22068 = null;
var G__22069 = (0);
var G__22070 = (0);
seq__21886_22048 = G__22067;
chunk__21887_22049 = G__22068;
count__21888_22050 = G__22069;
i__21889_22051 = G__22070;
continue;
}
} else {
}
}
break;
}

return a;
} else {
return x;

}
}
}
}
}
});
singult.core.node_data = singult.coffee.node_data;
singult.core.attr = (function singult$core$attr($n,m){
return singult.coffee.attr($n,singult.core.clj__GT_js(m));
});
singult.core.render = (function singult$core$render(v){
return singult.coffee.render(singult.coffee.canonicalize(singult.core.clj__GT_js(v)));
});
singult.core.merge_BANG_ = (function singult$core$merge_BANG_($n,v){
if((v == null)){
return null;
} else {
return singult.coffee.merge($n,singult.coffee.canonicalize(singult.core.clj__GT_js(v)));
}
});
singult.core.unify = (function singult$core$unify(var_args){
var args__5903__auto__ = [];
var len__5897__auto___22076 = arguments.length;
var i__5898__auto___22078 = (0);
while(true){
if((i__5898__auto___22078 < len__5897__auto___22076)){
args__5903__auto__.push((arguments[i__5898__auto___22078]));

var G__22079 = (i__5898__auto___22078 + (1));
i__5898__auto___22078 = G__22079;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return singult.core.unify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(singult.core.unify.cljs$core$IFn$_invoke$arity$variadic = (function (data,mapping,p__21910){
var map__21911 = p__21910;
var map__21911__$1 = cljs.core.__destructure_map(map__21911);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21911__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21911__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21911__$1,new cljs.core.Keyword(null,"update","update",1045576396));
var exit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21911__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var force_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21911__$1,new cljs.core.Keyword(null,"force-update?","force-update?",137364796));
return (new singult.core.Unify(data,mapping,key_fn,enter,update,exit,force_update_QMARK_,null,null,null));
}));

(singult.core.unify.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(singult.core.unify.cljs$lang$applyTo = (function (seq21906){
var G__21907 = cljs.core.first(seq21906);
var seq21906__$1 = cljs.core.next(seq21906);
var G__21908 = cljs.core.first(seq21906__$1);
var seq21906__$2 = cljs.core.next(seq21906__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21907,G__21908,seq21906__$2);
}));

singult.core.ignore = (function singult$core$ignore(){
return (new singult.coffee.Ignore());
});

//# sourceMappingURL=singult.core.js.map
