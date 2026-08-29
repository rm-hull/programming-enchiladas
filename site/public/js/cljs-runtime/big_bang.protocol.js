goog.provide('big_bang.protocol');

/**
 * @interface
 */
big_bang.protocol.IChannelSource = function(){};

var big_bang$protocol$IChannelSource$data_channel$dyn_33050 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (big_bang.protocol.data_channel[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (big_bang.protocol.data_channel["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IChannelSource.data-channel",this$);
}
}
});
big_bang.protocol.data_channel = (function big_bang$protocol$data_channel(this$){
if((((!((this$ == null)))) && ((!((this$.big_bang$protocol$IChannelSource$data_channel$arity$1 == null)))))){
return this$.big_bang$protocol$IChannelSource$data_channel$arity$1(this$);
} else {
return big_bang$protocol$IChannelSource$data_channel$dyn_33050(this$);
}
});

var big_bang$protocol$IChannelSource$shutdown_BANG_$dyn_33058 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (big_bang.protocol.shutdown_BANG_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (big_bang.protocol.shutdown_BANG_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IChannelSource.shutdown!",this$);
}
}
});
big_bang.protocol.shutdown_BANG_ = (function big_bang$protocol$shutdown_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.big_bang$protocol$IChannelSource$shutdown_BANG_$arity$1 == null)))))){
return this$.big_bang$protocol$IChannelSource$shutdown_BANG_$arity$1(this$);
} else {
return big_bang$protocol$IChannelSource$shutdown_BANG_$dyn_33058(this$);
}
});


/**
* @constructor
 * @implements {big_bang.protocol.IChannelSource}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
big_bang.protocol.t_big_bang$protocol33011 = (function (c,meta33012){
this.c = c;
this.meta33012 = meta33012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(big_bang.protocol.t_big_bang$protocol33011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33013,meta33012__$1){
var self__ = this;
var _33013__$1 = this;
return (new big_bang.protocol.t_big_bang$protocol33011(self__.c,meta33012__$1));
}));

(big_bang.protocol.t_big_bang$protocol33011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33013){
var self__ = this;
var _33013__$1 = this;
return self__.meta33012;
}));

(big_bang.protocol.t_big_bang$protocol33011.prototype.big_bang$protocol$IChannelSource$ = cljs.core.PROTOCOL_SENTINEL);

(big_bang.protocol.t_big_bang$protocol33011.prototype.big_bang$protocol$IChannelSource$data_channel$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.c;
}));

(big_bang.protocol.t_big_bang$protocol33011.prototype.big_bang$protocol$IChannelSource$shutdown_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.close_BANG_(self__.c);
}));

(big_bang.protocol.t_big_bang$protocol33011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"meta33012","meta33012",-1957177285,null)], null);
}));

(big_bang.protocol.t_big_bang$protocol33011.cljs$lang$type = true);

(big_bang.protocol.t_big_bang$protocol33011.cljs$lang$ctorStr = "big-bang.protocol/t_big_bang$protocol33011");

(big_bang.protocol.t_big_bang$protocol33011.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"big-bang.protocol/t_big_bang$protocol33011");
}));

/**
 * Positional factory function for big-bang.protocol/t_big_bang$protocol33011.
 */
big_bang.protocol.__GT_t_big_bang$protocol33011 = (function big_bang$protocol$__GT_t_big_bang$protocol33011(c,meta33012){
return (new big_bang.protocol.t_big_bang$protocol33011(c,meta33012));
});


big_bang.protocol.wrap_channel = (function big_bang$protocol$wrap_channel(c){
return (new big_bang.protocol.t_big_bang$protocol33011(c,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Does nothing, so guaranteed to never deliver a message
 * on the data channel.
 */
big_bang.protocol.no_op = (function big_bang$protocol$no_op(){
return big_bang.protocol.wrap_channel(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
});

//# sourceMappingURL=big_bang.protocol.js.map
