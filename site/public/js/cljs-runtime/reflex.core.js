goog.provide('reflex.core');
reflex.core.capture_derefed = (function reflex$core$capture_derefed(f){
var _BANG_recently_derefed_orig_val__22158 = reflex.core._BANG_recently_derefed;
var _BANG_recently_derefed_temp_val__22159 = cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentHashSet.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-deref-monitor","no-deref-monitor",1171473184),true], null)], 0));
(reflex.core._BANG_recently_derefed = _BANG_recently_derefed_temp_val__22159);

try{var res = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"res","res",-1395007879),res,new cljs.core.Keyword(null,"derefed","derefed",590684583),cljs.core.deref(reflex.core._BANG_recently_derefed)], null);
}finally {(reflex.core._BANG_recently_derefed = _BANG_recently_derefed_orig_val__22158);
}});
reflex.core.notify_deref_watcher_BANG_ = (function reflex$core$notify_deref_watcher_BANG_(derefable){
if(cljs.core.truth_((function (){var and__5160__auto__ = reflex.core._BANG_recently_derefed;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"no-deref-monitor","no-deref-monitor",1171473184).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(derefable)));
} else {
return and__5160__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reflex.core._BANG_recently_derefed,(function (p1__22164_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__22164_SHARP_,derefable);
}));
} else {
return null;
}
});
(cljs.core.Atom.prototype.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
reflex.core.notify_deref_watcher_BANG_(this$__$1);

return this$__$1.state;
}));

/**
 * @interface
 */
reflex.core.IDisposable = function(){};

var reflex$core$IDisposable$dispose_BANG_$dyn_22367 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (reflex.core.dispose_BANG_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (reflex.core.dispose_BANG_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
});
reflex.core.dispose_BANG_ = (function reflex$core$dispose_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.reflex$core$IDisposable$dispose_BANG_$arity$1 == null)))))){
return this$.reflex$core$IDisposable$dispose_BANG_$arity$1(this$);
} else {
return reflex$core$IDisposable$dispose_BANG_$dyn_22367(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {reflex.core.IDisposable}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reflex.core.ComputedObservable = (function (state,dirty_QMARK_,f,key,parent_watchables,watches,__meta,__extmap,__hash){
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.f = f;
this.key = key;
this.parent_watchables = parent_watchables;
this.watches = watches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139266;
});
(reflex.core.ComputedObservable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(reflex.core.ComputedObservable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k22173,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__22190 = k22173;
var G__22190__$1 = (((G__22190 instanceof cljs.core.Keyword))?G__22190.fqn:null);
switch (G__22190__$1) {
case "state":
return self__.state;

break;
case "dirty?":
return self__.dirty_QMARK_;

break;
case "f":
return self__.f;

break;
case "key":
return self__.key;

break;
case "parent-watchables":
return self__.parent_watchables;

break;
case "watches":
return self__.watches;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22173,else__5472__auto__);

}
}));

(reflex.core.ComputedObservable.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__22192){
var vec__22193 = p__22192;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22193,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22193,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(reflex.core.ComputedObservable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#reflex.core.ComputedObservable{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dirty?","dirty?",-2059845846),self__.dirty_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",-1597136552),self__.f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent-watchables","parent-watchables",-319854903),self__.parent_watchables],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"watches","watches",-273097535),self__.watches],null))], null),self__.__extmap));
}));

(reflex.core.ComputedObservable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22172){
var self__ = this;
var G__22172__$1 = this;
return (new cljs.core.RecordIter((0),G__22172__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"dirty?","dirty?",-2059845846),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"parent-watchables","parent-watchables",-319854903),new cljs.core.Keyword(null,"watches","watches",-273097535)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reflex.core.ComputedObservable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(reflex.core.ComputedObservable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new reflex.core.ComputedObservable(self__.state,self__.dirty_QMARK_,self__.f,self__.key,self__.parent_watchables,self__.watches,self__.__meta,self__.__extmap,self__.__hash));
}));

(reflex.core.ComputedObservable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(reflex.core.ComputedObservable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-592403040 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(reflex.core.ComputedObservable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22174,other22175){
var self__ = this;
var this22174__$1 = this;
return (((!((other22175 == null)))) && ((((this22174__$1.constructor === other22175.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22174__$1.state,other22175.state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22174__$1.dirty_QMARK_,other22175.dirty_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22174__$1.f,other22175.f)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22174__$1.key,other22175.key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22174__$1.parent_watchables,other22175.parent_watchables)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22174__$1.watches,other22175.watches)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22174__$1.__extmap,other22175.__extmap)))))))))))))))));
}));

(reflex.core.ComputedObservable.prototype.reflex$core$IDisposable$ = cljs.core.PROTOCOL_SENTINEL);

(reflex.core.ComputedObservable.prototype.reflex$core$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__22234_22386 = cljs.core.seq(self__.parent_watchables);
var chunk__22235_22387 = null;
var count__22236_22388 = (0);
var i__22237_22389 = (0);
while(true){
if((i__22237_22389 < count__22236_22388)){
var w_22394 = chunk__22235_22387.cljs$core$IIndexed$_nth$arity$2(null,i__22237_22389);
cljs.core.remove_watch(w_22394,self__.key);


var G__22395 = seq__22234_22386;
var G__22396 = chunk__22235_22387;
var G__22397 = count__22236_22388;
var G__22398 = (i__22237_22389 + (1));
seq__22234_22386 = G__22395;
chunk__22235_22387 = G__22396;
count__22236_22388 = G__22397;
i__22237_22389 = G__22398;
continue;
} else {
var temp__5825__auto___22400 = cljs.core.seq(seq__22234_22386);
if(temp__5825__auto___22400){
var seq__22234_22403__$1 = temp__5825__auto___22400;
if(cljs.core.chunked_seq_QMARK_(seq__22234_22403__$1)){
var c__5694__auto___22404 = cljs.core.chunk_first(seq__22234_22403__$1);
var G__22406 = cljs.core.chunk_rest(seq__22234_22403__$1);
var G__22407 = c__5694__auto___22404;
var G__22408 = cljs.core.count(c__5694__auto___22404);
var G__22409 = (0);
seq__22234_22386 = G__22406;
chunk__22235_22387 = G__22407;
count__22236_22388 = G__22408;
i__22237_22389 = G__22409;
continue;
} else {
var w_22414 = cljs.core.first(seq__22234_22403__$1);
cljs.core.remove_watch(w_22414,self__.key);


var G__22418 = cljs.core.next(seq__22234_22403__$1);
var G__22419 = null;
var G__22420 = (0);
var G__22421 = (0);
seq__22234_22386 = G__22418;
chunk__22235_22387 = G__22419;
count__22236_22388 = G__22420;
i__22237_22389 = G__22421;
continue;
}
} else {
}
}
break;
}

return (this$__$1.watches = null);
}));

(reflex.core.ComputedObservable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"watches","watches",-273097535),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"parent-watchables","parent-watchables",-319854903),null,new cljs.core.Keyword(null,"dirty?","dirty?",-2059845846),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"f","f",-1597136552),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new reflex.core.ComputedObservable(self__.state,self__.dirty_QMARK_,self__.f,self__.key,self__.parent_watchables,self__.watches,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(reflex.core.ComputedObservable.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k22173){
var self__ = this;
var this__5476__auto____$1 = this;
var G__22254 = k22173;
var G__22254__$1 = (((G__22254 instanceof cljs.core.Keyword))?G__22254.fqn:null);
switch (G__22254__$1) {
case "state":
case "dirty?":
case "f":
case "key":
case "parent-watchables":
case "watches":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k22173);

}
}));

(reflex.core.ComputedObservable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__22172){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__22256 = cljs.core.keyword_identical_QMARK_;
var expr__22257 = k__5478__auto__;
if(cljs.core.truth_((pred__22256.cljs$core$IFn$_invoke$arity$2 ? pred__22256.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099),expr__22257) : pred__22256.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__22257)))){
return (new reflex.core.ComputedObservable(G__22172,self__.dirty_QMARK_,self__.f,self__.key,self__.parent_watchables,self__.watches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22256.cljs$core$IFn$_invoke$arity$2 ? pred__22256.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dirty?","dirty?",-2059845846),expr__22257) : pred__22256.call(null,new cljs.core.Keyword(null,"dirty?","dirty?",-2059845846),expr__22257)))){
return (new reflex.core.ComputedObservable(self__.state,G__22172,self__.f,self__.key,self__.parent_watchables,self__.watches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22256.cljs$core$IFn$_invoke$arity$2 ? pred__22256.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f","f",-1597136552),expr__22257) : pred__22256.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),expr__22257)))){
return (new reflex.core.ComputedObservable(self__.state,self__.dirty_QMARK_,G__22172,self__.key,self__.parent_watchables,self__.watches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22256.cljs$core$IFn$_invoke$arity$2 ? pred__22256.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__22257) : pred__22256.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__22257)))){
return (new reflex.core.ComputedObservable(self__.state,self__.dirty_QMARK_,self__.f,G__22172,self__.parent_watchables,self__.watches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22256.cljs$core$IFn$_invoke$arity$2 ? pred__22256.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent-watchables","parent-watchables",-319854903),expr__22257) : pred__22256.call(null,new cljs.core.Keyword(null,"parent-watchables","parent-watchables",-319854903),expr__22257)))){
return (new reflex.core.ComputedObservable(self__.state,self__.dirty_QMARK_,self__.f,self__.key,G__22172,self__.watches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22256.cljs$core$IFn$_invoke$arity$2 ? pred__22256.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"watches","watches",-273097535),expr__22257) : pred__22256.call(null,new cljs.core.Keyword(null,"watches","watches",-273097535),expr__22257)))){
return (new reflex.core.ComputedObservable(self__.state,self__.dirty_QMARK_,self__.f,self__.key,self__.parent_watchables,G__22172,self__.__meta,self__.__extmap,null));
} else {
return (new reflex.core.ComputedObservable(self__.state,self__.dirty_QMARK_,self__.f,self__.key,self__.parent_watchables,self__.watches,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__22172),null));
}
}
}
}
}
}
}));

(reflex.core.ComputedObservable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state","state",-1988618099),self__.state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"dirty?","dirty?",-2059845846),self__.dirty_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"f","f",-1597136552),self__.f,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent-watchables","parent-watchables",-319854903),self__.parent_watchables,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"watches","watches",-273097535),self__.watches,null))], null),self__.__extmap));
}));

(reflex.core.ComputedObservable.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,_,___$1){
var self__ = this;
var this$__$1 = this;
var seq__22268 = cljs.core.seq(self__.watches);
var chunk__22269 = null;
var count__22270 = (0);
var i__22271 = (0);
while(true){
if((i__22271 < count__22270)){
var vec__22280 = chunk__22269.cljs$core$IIndexed$_nth$arity$2(null,i__22271);
var key__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22280,(0),null);
var wf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22280,(1),null);
(wf.cljs$core$IFn$_invoke$arity$0 ? wf.cljs$core$IFn$_invoke$arity$0() : wf.call(null));


var G__22436 = seq__22268;
var G__22437 = chunk__22269;
var G__22438 = count__22270;
var G__22439 = (i__22271 + (1));
seq__22268 = G__22436;
chunk__22269 = G__22437;
count__22270 = G__22438;
i__22271 = G__22439;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__22268);
if(temp__5825__auto__){
var seq__22268__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22268__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__22268__$1);
var G__22442 = cljs.core.chunk_rest(seq__22268__$1);
var G__22443 = c__5694__auto__;
var G__22444 = cljs.core.count(c__5694__auto__);
var G__22445 = (0);
seq__22268 = G__22442;
chunk__22269 = G__22443;
count__22270 = G__22444;
i__22271 = G__22445;
continue;
} else {
var vec__22286 = cljs.core.first(seq__22268__$1);
var key__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22286,(0),null);
var wf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22286,(1),null);
(wf.cljs$core$IFn$_invoke$arity$0 ? wf.cljs$core$IFn$_invoke$arity$0() : wf.call(null));


var G__22448 = cljs.core.next(seq__22268__$1);
var G__22449 = null;
var G__22450 = (0);
var G__22451 = (0);
seq__22268 = G__22448;
chunk__22269 = G__22449;
count__22270 = G__22450;
i__22271 = G__22451;
continue;
}
} else {
return null;
}
}
break;
}
}));

(reflex.core.ComputedObservable.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,wf){
var self__ = this;
var this$__$1 = this;
return (this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key__$1,wf));
}));

(reflex.core.ComputedObservable.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){
var self__ = this;
var this$__$1 = this;
return (this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key__$1));
}));

(reflex.core.ComputedObservable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__22172){
var self__ = this;
var this__5468__auto____$1 = this;
return (new reflex.core.ComputedObservable(self__.state,self__.dirty_QMARK_,self__.f,self__.key,self__.parent_watchables,self__.watches,G__22172,self__.__extmap,self__.__hash));
}));

(reflex.core.ComputedObservable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(reflex.core.ComputedObservable.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reflex.core.notify_deref_watcher_BANG_(this$__$1);

if(cljs.core.not(self__.dirty_QMARK_)){
return this$__$1.state;
} else {
var map__22297 = reflex.core.capture_derefed(self__.f);
var map__22297__$1 = cljs.core.__destructure_map(map__22297);
var res = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22297__$1,new cljs.core.Keyword(null,"res","res",-1395007879));
var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22297__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));
var seq__22299_22463 = cljs.core.seq(self__.parent_watchables);
var chunk__22300_22464 = null;
var count__22301_22465 = (0);
var i__22302_22466 = (0);
while(true){
if((i__22302_22466 < count__22301_22465)){
var w_22467 = chunk__22300_22464.cljs$core$IIndexed$_nth$arity$2(null,i__22302_22466);
cljs.core.remove_watch(w_22467,self__.key);


var G__22469 = seq__22299_22463;
var G__22470 = chunk__22300_22464;
var G__22471 = count__22301_22465;
var G__22472 = (i__22302_22466 + (1));
seq__22299_22463 = G__22469;
chunk__22300_22464 = G__22470;
count__22301_22465 = G__22471;
i__22302_22466 = G__22472;
continue;
} else {
var temp__5825__auto___22473 = cljs.core.seq(seq__22299_22463);
if(temp__5825__auto___22473){
var seq__22299_22474__$1 = temp__5825__auto___22473;
if(cljs.core.chunked_seq_QMARK_(seq__22299_22474__$1)){
var c__5694__auto___22475 = cljs.core.chunk_first(seq__22299_22474__$1);
var G__22476 = cljs.core.chunk_rest(seq__22299_22474__$1);
var G__22477 = c__5694__auto___22475;
var G__22478 = cljs.core.count(c__5694__auto___22475);
var G__22479 = (0);
seq__22299_22463 = G__22476;
chunk__22300_22464 = G__22477;
count__22301_22465 = G__22478;
i__22302_22466 = G__22479;
continue;
} else {
var w_22480 = cljs.core.first(seq__22299_22474__$1);
cljs.core.remove_watch(w_22480,self__.key);


var G__22481 = cljs.core.next(seq__22299_22474__$1);
var G__22482 = null;
var G__22483 = (0);
var G__22484 = (0);
seq__22299_22463 = G__22481;
chunk__22300_22464 = G__22482;
count__22301_22465 = G__22483;
i__22302_22466 = G__22484;
continue;
}
} else {
}
}
break;
}

(this$__$1.parent_watchables = derefed);

var seq__22305_22485 = cljs.core.seq(derefed);
var chunk__22306_22486 = null;
var count__22307_22487 = (0);
var i__22308_22488 = (0);
while(true){
if((i__22308_22488 < count__22307_22487)){
var w_22489 = chunk__22306_22486.cljs$core$IIndexed$_nth$arity$2(null,i__22308_22488);
cljs.core.add_watch(w_22489,self__.key,((function (seq__22305_22485,chunk__22306_22486,count__22307_22487,i__22308_22488,w_22489,map__22297,map__22297__$1,res,derefed,this$__$1){
return (function (){
(this$__$1.dirty_QMARK_ = true);

return this$__$1.cljs$core$IWatchable$_notify_watches$arity$3(null,null,null);
});})(seq__22305_22485,chunk__22306_22486,count__22307_22487,i__22308_22488,w_22489,map__22297,map__22297__$1,res,derefed,this$__$1))
);


var G__22493 = seq__22305_22485;
var G__22494 = chunk__22306_22486;
var G__22495 = count__22307_22487;
var G__22496 = (i__22308_22488 + (1));
seq__22305_22485 = G__22493;
chunk__22306_22486 = G__22494;
count__22307_22487 = G__22495;
i__22308_22488 = G__22496;
continue;
} else {
var temp__5825__auto___22498 = cljs.core.seq(seq__22305_22485);
if(temp__5825__auto___22498){
var seq__22305_22499__$1 = temp__5825__auto___22498;
if(cljs.core.chunked_seq_QMARK_(seq__22305_22499__$1)){
var c__5694__auto___22500 = cljs.core.chunk_first(seq__22305_22499__$1);
var G__22501 = cljs.core.chunk_rest(seq__22305_22499__$1);
var G__22502 = c__5694__auto___22500;
var G__22503 = cljs.core.count(c__5694__auto___22500);
var G__22504 = (0);
seq__22305_22485 = G__22501;
chunk__22306_22486 = G__22502;
count__22307_22487 = G__22503;
i__22308_22488 = G__22504;
continue;
} else {
var w_22506 = cljs.core.first(seq__22305_22499__$1);
cljs.core.add_watch(w_22506,self__.key,((function (seq__22305_22485,chunk__22306_22486,count__22307_22487,i__22308_22488,w_22506,seq__22305_22499__$1,temp__5825__auto___22498,map__22297,map__22297__$1,res,derefed,this$__$1){
return (function (){
(this$__$1.dirty_QMARK_ = true);

return this$__$1.cljs$core$IWatchable$_notify_watches$arity$3(null,null,null);
});})(seq__22305_22485,chunk__22306_22486,count__22307_22487,i__22308_22488,w_22506,seq__22305_22499__$1,temp__5825__auto___22498,map__22297,map__22297__$1,res,derefed,this$__$1))
);


var G__22508 = cljs.core.next(seq__22305_22499__$1);
var G__22509 = null;
var G__22510 = (0);
var G__22511 = (0);
seq__22305_22485 = G__22508;
chunk__22306_22486 = G__22509;
count__22307_22487 = G__22510;
i__22308_22488 = G__22511;
continue;
}
} else {
}
}
break;
}

(this$__$1.state = res);

(this$__$1.dirty_QMARK_ = false);

return res;
}
}));

(reflex.core.ComputedObservable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"dirty?","dirty?",-419314319,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"parent-watchables","parent-watchables",1320676624,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null)], null);
}));

(reflex.core.ComputedObservable.cljs$lang$type = true);

(reflex.core.ComputedObservable.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"reflex.core/ComputedObservable",null,(1),null));
}));

(reflex.core.ComputedObservable.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"reflex.core/ComputedObservable");
}));

/**
 * Positional factory function for reflex.core/ComputedObservable.
 */
reflex.core.__GT_ComputedObservable = (function reflex$core$__GT_ComputedObservable(state,dirty_QMARK_,f,key,parent_watchables,watches){
return (new reflex.core.ComputedObservable(state,dirty_QMARK_,f,key,parent_watchables,watches,null,null,null));
});

/**
 * Factory function for reflex.core/ComputedObservable, taking a map of keywords to field values.
 */
reflex.core.map__GT_ComputedObservable = (function reflex$core$map__GT_ComputedObservable(G__22178){
var extmap__5511__auto__ = (function (){var G__22325 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22178,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dirty?","dirty?",-2059845846),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"parent-watchables","parent-watchables",-319854903),new cljs.core.Keyword(null,"watches","watches",-273097535)], 0));
if(cljs.core.record_QMARK_(G__22178)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__22325);
} else {
return G__22325;
}
})();
return (new reflex.core.ComputedObservable(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__22178),new cljs.core.Keyword(null,"dirty?","dirty?",-2059845846).cljs$core$IFn$_invoke$arity$1(G__22178),new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__22178),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__22178),new cljs.core.Keyword(null,"parent-watchables","parent-watchables",-319854903).cljs$core$IFn$_invoke$arity$1(G__22178),new cljs.core.Keyword(null,"watches","watches",-273097535).cljs$core$IFn$_invoke$arity$1(G__22178),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

(reflex.core.ComputedObservable.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(reflex.core.ComputedObservable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.key;
}));

//# sourceMappingURL=reflex.core.js.map
