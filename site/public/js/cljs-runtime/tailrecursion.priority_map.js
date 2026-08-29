goog.provide('tailrecursion.priority_map');

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISorted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.keyfn = keyfn;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){
var self__ = this;
var coll__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,not_found);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer(writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count(self__.item__GT_priority);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
return null;
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
var item = cljs.core.first(cljs.core.val(f));
if(cljs.core.truth_(self__.keyfn)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,cljs.core.key(f)], null);
}
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
throw (new Error("Can't pop empty priority map"));
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
var item_set = cljs.core.val(f);
var item = cljs.core.first(item_set);
var priority_key = cljs.core.key(f);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__5649__auto__ = (function tailrecursion$priority_map$iter__36056(s__36057){
return (new cljs.core.LazySeq(null,(function (){
var s__36057__$1 = s__36057;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36057__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__36062 = cljs.core.first(xs__6385__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36062,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36062,(1),null);
var iterys__5645__auto__ = ((function (s__36057__$1,vec__36062,priority,item_set,xs__6385__auto__,temp__5825__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__36056_$_iter__36058(s__36059){
return (new cljs.core.LazySeq(null,((function (s__36057__$1,vec__36062,priority,item_set,xs__6385__auto__,temp__5825__auto__,coll__$1){
return (function (){
var s__36059__$1 = s__36059;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__36059__$1);
if(temp__5825__auto____$1){
var s__36059__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36059__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__36059__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__36061 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__36060 = (0);
while(true){
if((i__36060 < size__5648__auto__)){
var item = cljs.core._nth(c__5647__auto__,i__36060);
cljs.core.chunk_append(b__36061,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__36199 = (i__36060 + (1));
i__36060 = G__36199;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36061),tailrecursion$priority_map$iter__36056_$_iter__36058(cljs.core.chunk_rest(s__36059__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36061),null);
}
} else {
var item = cljs.core.first(s__36059__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__36056_$_iter__36058(cljs.core.rest(s__36059__$2)));
}
} else {
return null;
}
break;
}
});})(s__36057__$1,vec__36062,priority,item_set,xs__6385__auto__,temp__5825__auto__,coll__$1))
,null,null));
});})(s__36057__$1,vec__36062,priority,item_set,xs__6385__auto__,temp__5825__auto__,coll__$1))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(item_set));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,tailrecursion$priority_map$iter__36056(cljs.core.rest(s__36057__$1)));
} else {
var G__36215 = cljs.core.rest(s__36057__$1);
s__36057__$1 = G__36215;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
})());
} else {
return cljs.core.seq((function (){var iter__5649__auto__ = (function tailrecursion$priority_map$iter__36077(s__36078){
return (new cljs.core.LazySeq(null,(function (){
var s__36078__$1 = s__36078;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36078__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__36083 = cljs.core.first(xs__6385__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36083,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36083,(1),null);
var iterys__5645__auto__ = ((function (s__36078__$1,vec__36083,priority,item_set,xs__6385__auto__,temp__5825__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__36077_$_iter__36079(s__36080){
return (new cljs.core.LazySeq(null,((function (s__36078__$1,vec__36083,priority,item_set,xs__6385__auto__,temp__5825__auto__,coll__$1){
return (function (){
var s__36080__$1 = s__36080;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__36080__$1);
if(temp__5825__auto____$1){
var s__36080__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36080__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__36080__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__36082 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__36081 = (0);
while(true){
if((i__36081 < size__5648__auto__)){
var item = cljs.core._nth(c__5647__auto__,i__36081);
cljs.core.chunk_append(b__36082,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__36221 = (i__36081 + (1));
i__36081 = G__36221;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36082),tailrecursion$priority_map$iter__36077_$_iter__36079(cljs.core.chunk_rest(s__36080__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36082),null);
}
} else {
var item = cljs.core.first(s__36080__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__36077_$_iter__36079(cljs.core.rest(s__36080__$2)));
}
} else {
return null;
}
break;
}
});})(s__36078__$1,vec__36083,priority,item_set,xs__6385__auto__,temp__5825__auto__,coll__$1))
,null,null));
});})(s__36078__$1,vec__36083,priority,item_set,xs__6385__auto__,temp__5825__auto__,coll__$1))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(item_set));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,tailrecursion$priority_map$iter__36077(cljs.core.rest(s__36078__$1)));
} else {
var G__36224 = cljs.core.rest(s__36078__$1);
s__36078__$1 = G__36224;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
})());
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = cljs.core.hash_unordered_coll(this$__$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core._equiv(self__.item__GT_priority,other);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
var priority = (self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517)) : self__.item__GT_priority.call(null,item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(priority,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517))){
return this$__$1;
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
var item_set = (self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1 ? self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1(priority_key) : self__.priority__GT_set_of_items.call(null,priority_key));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){
var self__ = this;
var this$__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,null);
if(cljs.core.truth_(temp__5823__auto__)){
var current_priority = temp__5823__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_priority,priority)){
return this$__$1;
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
var current_priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(current_priority) : self__.keyfn.call(null,current_priority));
var item_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key),priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.priority__GT_set_of_items,current_priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key),item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
}
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.contains_QMARK_(self__.item__GT_priority,item);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__5649__auto__ = (function tailrecursion$priority_map$iter__36098(s__36099){
return (new cljs.core.LazySeq(null,(function (){
var s__36099__$1 = s__36099;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36099__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__36105 = cljs.core.first(xs__6385__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36105,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36105,(1),null);
var iterys__5645__auto__ = ((function (s__36099__$1,vec__36105,priority,item_set,xs__6385__auto__,temp__5825__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__36098_$_iter__36100(s__36101){
return (new cljs.core.LazySeq(null,((function (s__36099__$1,vec__36105,priority,item_set,xs__6385__auto__,temp__5825__auto__,this$__$1){
return (function (){
var s__36101__$1 = s__36101;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__36101__$1);
if(temp__5825__auto____$1){
var s__36101__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36101__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__36101__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__36103 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__36102 = (0);
while(true){
if((i__36102 < size__5648__auto__)){
var item = cljs.core._nth(c__5647__auto__,i__36102);
cljs.core.chunk_append(b__36103,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__36267 = (i__36102 + (1));
i__36102 = G__36267;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36103),tailrecursion$priority_map$iter__36098_$_iter__36100(cljs.core.chunk_rest(s__36101__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36103),null);
}
} else {
var item = cljs.core.first(s__36101__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__36098_$_iter__36100(cljs.core.rest(s__36101__$2)));
}
} else {
return null;
}
break;
}
});})(s__36099__$1,vec__36105,priority,item_set,xs__6385__auto__,temp__5825__auto__,this$__$1))
,null,null));
});})(s__36099__$1,vec__36105,priority,item_set,xs__6385__auto__,temp__5825__auto__,this$__$1))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(item_set));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,tailrecursion$priority_map$iter__36098(cljs.core.rest(s__36099__$1)));
} else {
var G__36268 = cljs.core.rest(s__36099__$1);
s__36099__$1 = G__36268;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(self__.priority__GT_set_of_items);
})());
} else {
return cljs.core.seq((function (){var iter__5649__auto__ = (function tailrecursion$priority_map$iter__36109(s__36110){
return (new cljs.core.LazySeq(null,(function (){
var s__36110__$1 = s__36110;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36110__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__36116 = cljs.core.first(xs__6385__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36116,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36116,(1),null);
var iterys__5645__auto__ = ((function (s__36110__$1,vec__36116,priority,item_set,xs__6385__auto__,temp__5825__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__36109_$_iter__36111(s__36112){
return (new cljs.core.LazySeq(null,((function (s__36110__$1,vec__36116,priority,item_set,xs__6385__auto__,temp__5825__auto__,this$__$1){
return (function (){
var s__36112__$1 = s__36112;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__36112__$1);
if(temp__5825__auto____$1){
var s__36112__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36112__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__36112__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__36114 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__36113 = (0);
while(true){
if((i__36113 < size__5648__auto__)){
var item = cljs.core._nth(c__5647__auto__,i__36113);
cljs.core.chunk_append(b__36114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__36269 = (i__36113 + (1));
i__36113 = G__36269;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36114),tailrecursion$priority_map$iter__36109_$_iter__36111(cljs.core.chunk_rest(s__36112__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36114),null);
}
} else {
var item = cljs.core.first(s__36112__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__36109_$_iter__36111(cljs.core.rest(s__36112__$2)));
}
} else {
return null;
}
break;
}
});})(s__36110__$1,vec__36116,priority,item_set,xs__6385__auto__,temp__5825__auto__,this$__$1))
,null,null));
});})(s__36110__$1,vec__36116,priority,item_set,xs__6385__auto__,temp__5825__auto__,this$__$1))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(item_set));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,tailrecursion$priority_map$iter__36109(cljs.core.rest(s__36110__$1)));
} else {
var G__36270 = cljs.core.rest(s__36110__$1);
s__36110__$1 = G__36270;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(self__.priority__GT_set_of_items);
})());
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.keyfn,self__.__hash));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return this$__$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry,(0)),cljs.core._nth(entry,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this$__$1,entry);
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function (unused__2830__auto__){
var self__ = this;
var self__ = this;
var G__36121 = (arguments.length - (1));
switch (G__36121) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error((""+"Invalid arity: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1))))));

}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args36039){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat((((args36039.length > (20)))?(function (){var G__36128 = args36039.slice((0),(20));
G__36128.push(args36039.slice((20)));

return G__36128;
})():args36039)));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var fexpr__36129 = (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq);
return (fexpr__36129.cljs$core$IFn$_invoke$arity$1 ? fexpr__36129.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__36129.call(null,this$__$1));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__5649__auto__ = (function tailrecursion$priority_map$iter__36130(s__36131){
return (new cljs.core.LazySeq(null,(function (){
var s__36131__$1 = s__36131;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36131__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__36136 = cljs.core.first(xs__6385__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36136,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36136,(1),null);
var iterys__5645__auto__ = ((function (s__36131__$1,vec__36136,priority,item_set,xs__6385__auto__,temp__5825__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__36130_$_iter__36132(s__36133){
return (new cljs.core.LazySeq(null,((function (s__36131__$1,vec__36136,priority,item_set,xs__6385__auto__,temp__5825__auto__,sets,this$__$1){
return (function (){
var s__36133__$1 = s__36133;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__36133__$1);
if(temp__5825__auto____$1){
var s__36133__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36133__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__36133__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__36135 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__36134 = (0);
while(true){
if((i__36134 < size__5648__auto__)){
var item = cljs.core._nth(c__5647__auto__,i__36134);
cljs.core.chunk_append(b__36135,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__36280 = (i__36134 + (1));
i__36134 = G__36280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36135),tailrecursion$priority_map$iter__36130_$_iter__36132(cljs.core.chunk_rest(s__36133__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36135),null);
}
} else {
var item = cljs.core.first(s__36133__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__36130_$_iter__36132(cljs.core.rest(s__36133__$2)));
}
} else {
return null;
}
break;
}
});})(s__36131__$1,vec__36136,priority,item_set,xs__6385__auto__,temp__5825__auto__,sets,this$__$1))
,null,null));
});})(s__36131__$1,vec__36136,priority,item_set,xs__6385__auto__,temp__5825__auto__,sets,this$__$1))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(item_set));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,tailrecursion$priority_map$iter__36130(cljs.core.rest(s__36131__$1)));
} else {
var G__36281 = cljs.core.rest(s__36131__$1);
s__36131__$1 = G__36281;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(sets);
})());
} else {
return cljs.core.seq((function (){var iter__5649__auto__ = (function tailrecursion$priority_map$iter__36139(s__36140){
return (new cljs.core.LazySeq(null,(function (){
var s__36140__$1 = s__36140;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36140__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__36145 = cljs.core.first(xs__6385__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36145,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36145,(1),null);
var iterys__5645__auto__ = ((function (s__36140__$1,vec__36145,priority,item_set,xs__6385__auto__,temp__5825__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__36139_$_iter__36141(s__36142){
return (new cljs.core.LazySeq(null,((function (s__36140__$1,vec__36145,priority,item_set,xs__6385__auto__,temp__5825__auto__,sets,this$__$1){
return (function (){
var s__36142__$1 = s__36142;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__36142__$1);
if(temp__5825__auto____$1){
var s__36142__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36142__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__36142__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__36144 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__36143 = (0);
while(true){
if((i__36143 < size__5648__auto__)){
var item = cljs.core._nth(c__5647__auto__,i__36143);
cljs.core.chunk_append(b__36144,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__36282 = (i__36143 + (1));
i__36143 = G__36282;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36144),tailrecursion$priority_map$iter__36139_$_iter__36141(cljs.core.chunk_rest(s__36142__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36144),null);
}
} else {
var item = cljs.core.first(s__36142__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__36139_$_iter__36141(cljs.core.rest(s__36142__$2)));
}
} else {
return null;
}
break;
}
});})(s__36140__$1,vec__36145,priority,item_set,xs__6385__auto__,temp__5825__auto__,sets,this$__$1))
,null,null));
});})(s__36140__$1,vec__36145,priority,item_set,xs__6385__auto__,temp__5825__auto__,sets,this$__$1))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(item_set));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,tailrecursion$priority_map$iter__36139(cljs.core.rest(s__36140__$1)));
} else {
var G__36283 = cljs.core.rest(s__36140__$1);
s__36140__$1 = G__36283;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(sets);
})());
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
var G__36148 = cljs.core.val(entry);
return (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(G__36148) : self__.keyfn.call(null,G__36148));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare;
}));

(tailrecursion.priority_map.PersistentPriorityMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"priority->set-of-items","priority->set-of-items",-1256537211,null),new cljs.core.Symbol(null,"item->priority","item->priority",-899999435,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"keyfn","keyfn",-1874375437,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true);

(tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap");

(tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
}));

/**
 * Positional factory function for tailrecursion.priority-map/PersistentPriorityMap.
 */
tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash));
});

(tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null)));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by(comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
});
tailrecursion.priority_map.pm_empty_keyfn = (function tailrecursion$priority_map$pm_empty_keyfn(var_args){
var G__36153 = arguments.length;
switch (G__36153) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
}));

(tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by(comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
}));

(tailrecursion.priority_map.pm_empty_keyfn.cljs$lang$maxFixedArity = 2);

tailrecursion.priority_map.read_priority_map = (function tailrecursion$priority_map$read_priority_map(elems){
if(cljs.core.map_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else {
throw Error("Priority map literal expects a map for its elements.");
}
});
cljs.reader.register_tag_parser_BANG_("tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
 * keyval => key val
 *   Returns a new priority map with supplied mappings.
 */
tailrecursion.priority_map.priority_map = (function tailrecursion$priority_map$priority_map(var_args){
var args__5903__auto__ = [];
var len__5897__auto___36285 = arguments.length;
var i__5898__auto___36286 = (0);
while(true){
if((i__5898__auto___36286 < len__5897__auto___36285)){
args__5903__auto__.push((arguments[i__5898__auto___36286]));

var G__36287 = (i__5898__auto___36286 + (1));
i__5898__auto___36286 = G__36287;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__36288 = cljs.core.nnext(in$);
var G__36289 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__36288;
out = G__36289;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq36154){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36154));
}));

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__5903__auto__ = [];
var len__5897__auto___36290 = arguments.length;
var i__5898__auto___36291 = (0);
while(true){
if((i__5898__auto___36291 < len__5897__auto___36290)){
args__5903__auto__.push((arguments[i__5898__auto___36291]));

var G__36292 = (i__5898__auto___36291 + (1));
i__5898__auto___36291 = G__36292;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_by(comparator);
while(true){
if(in$){
var G__36294 = cljs.core.nnext(in$);
var G__36295 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__36294;
out = G__36295;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq36155){
var G__36156 = cljs.core.first(seq36155);
var seq36155__$1 = cljs.core.next(seq36155);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36156,seq36155__$1);
}));

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__5903__auto__ = [];
var len__5897__auto___36297 = arguments.length;
var i__5898__auto___36298 = (0);
while(true){
if((i__5898__auto___36298 < len__5897__auto___36297)){
args__5903__auto__.push((arguments[i__5898__auto___36298]));

var G__36299 = (i__5898__auto___36298 + (1));
i__5898__auto___36298 = G__36299;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1(keyfn);
while(true){
if(in$){
var G__36300 = cljs.core.nnext(in$);
var G__36301 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__36300;
out = G__36301;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq36159){
var G__36160 = cljs.core.first(seq36159);
var seq36159__$1 = cljs.core.next(seq36159);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36160,seq36159__$1);
}));

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__5903__auto__ = [];
var len__5897__auto___36302 = arguments.length;
var i__5898__auto___36303 = (0);
while(true){
if((i__5898__auto___36303 < len__5897__auto___36302)){
args__5903__auto__.push((arguments[i__5898__auto___36303]));

var G__36304 = (i__5898__auto___36303 + (1));
i__5898__auto___36303 = G__36304;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2(keyfn,comparator);
while(true){
if(in$){
var G__36305 = cljs.core.nnext(in$);
var G__36306 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__36305;
out = G__36306;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq36166){
var G__36167 = cljs.core.first(seq36166);
var seq36166__$1 = cljs.core.next(seq36166);
var G__36168 = cljs.core.first(seq36166__$1);
var seq36166__$2 = cljs.core.next(seq36166__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36167,G__36168,seq36166__$2);
}));


//# sourceMappingURL=tailrecursion.priority_map.js.map
