goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27601 = (function (f,blockable,meta27602){
this.f = f;
this.blockable = blockable;
this.meta27602 = meta27602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27603,meta27602__$1){
var self__ = this;
var _27603__$1 = this;
return (new cljs.core.async.t_cljs$core$async27601(self__.f,self__.blockable,meta27602__$1));
}));

(cljs.core.async.t_cljs$core$async27601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27603){
var self__ = this;
var _27603__$1 = this;
return self__.meta27602;
}));

(cljs.core.async.t_cljs$core$async27601.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27601.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27601.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async27601.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async27601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27602","meta27602",1585898546,null)], null);
}));

(cljs.core.async.t_cljs$core$async27601.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27601");

(cljs.core.async.t_cljs$core$async27601.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async27601");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27601.
 */
cljs.core.async.__GT_t_cljs$core$async27601 = (function cljs$core$async$__GT_t_cljs$core$async27601(f,blockable,meta27602){
return (new cljs.core.async.t_cljs$core$async27601(f,blockable,meta27602));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27600 = arguments.length;
switch (G__27600) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async27601(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__27617 = arguments.length;
switch (G__27617) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27636 = arguments.length;
switch (G__27636) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__27639 = arguments.length;
switch (G__27639) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_31681 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31681) : fn1.call(null,val_31681));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31681) : fn1.call(null,val_31681));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27646 = arguments.length;
switch (G__27646) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5762__auto___31689 = n;
var x_31690 = (0);
while(true){
if((x_31690 < n__5762__auto___31689)){
(a[x_31690] = x_31690);

var G__31691 = (x_31690 + (1));
x_31690 = G__31691;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27652 = (function (flag,meta27653){
this.flag = flag;
this.meta27653 = meta27653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27654,meta27653__$1){
var self__ = this;
var _27654__$1 = this;
return (new cljs.core.async.t_cljs$core$async27652(self__.flag,meta27653__$1));
}));

(cljs.core.async.t_cljs$core$async27652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27654){
var self__ = this;
var _27654__$1 = this;
return self__.meta27653;
}));

(cljs.core.async.t_cljs$core$async27652.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27652.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async27652.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27652.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async27652.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27653","meta27653",-2064067430,null)], null);
}));

(cljs.core.async.t_cljs$core$async27652.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27652");

(cljs.core.async.t_cljs$core$async27652.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async27652");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27652.
 */
cljs.core.async.__GT_t_cljs$core$async27652 = (function cljs$core$async$__GT_t_cljs$core$async27652(flag,meta27653){
return (new cljs.core.async.t_cljs$core$async27652(flag,meta27653));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async27652(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27665 = (function (flag,cb,meta27666){
this.flag = flag;
this.cb = cb;
this.meta27666 = meta27666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27667,meta27666__$1){
var self__ = this;
var _27667__$1 = this;
return (new cljs.core.async.t_cljs$core$async27665(self__.flag,self__.cb,meta27666__$1));
}));

(cljs.core.async.t_cljs$core$async27665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27667){
var self__ = this;
var _27667__$1 = this;
return self__.meta27666;
}));

(cljs.core.async.t_cljs$core$async27665.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27665.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async27665.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27665.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async27665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27666","meta27666",-110217869,null)], null);
}));

(cljs.core.async.t_cljs$core$async27665.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27665");

(cljs.core.async.t_cljs$core$async27665.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async27665");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27665.
 */
cljs.core.async.__GT_t_cljs$core$async27665 = (function cljs$core$async$__GT_t_cljs$core$async27665(flag,cb,meta27666){
return (new cljs.core.async.t_cljs$core$async27665(flag,cb,meta27666));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async27665(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_31698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_31698)){
if((!(((port_31698.cljs$core$IFn$_invoke$arity$1 ? port_31698.cljs$core$IFn$_invoke$arity$1((1)) : port_31698.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__31701 = (i + (1));
i = G__31701;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__27689_SHARP_){
var G__27703 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27689_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__27703) : fret.call(null,G__27703));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__27690_SHARP_){
var G__27704 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27690_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__27704) : fret.call(null,G__27704));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5162__auto__ = wport;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31720 = (i + (1));
i = G__31720;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5162__auto__ = ret;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5160__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5160__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___31727 = arguments.length;
var i__5898__auto___31728 = (0);
while(true){
if((i__5898__auto___31728 < len__5897__auto___31727)){
args__5903__auto__.push((arguments[i__5898__auto___31728]));

var G__31729 = (i__5898__auto___31728 + (1));
i__5898__auto___31728 = G__31729;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27732){
var map__27733 = p__27732;
var map__27733__$1 = cljs.core.__destructure_map(map__27733);
var opts = map__27733__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27726){
var G__27727 = cljs.core.first(seq27726);
var seq27726__$1 = cljs.core.next(seq27726);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27727,seq27726__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__27757 = arguments.length;
switch (G__27757) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27470__auto___31755 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_27946){
var state_val_27948 = (state_27946[(1)]);
if((state_val_27948 === (7))){
var inst_27931 = (state_27946[(2)]);
var state_27946__$1 = state_27946;
var statearr_28014_31761 = state_27946__$1;
(statearr_28014_31761[(2)] = inst_27931);

(statearr_28014_31761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (1))){
var state_27946__$1 = state_27946;
var statearr_28017_31766 = state_27946__$1;
(statearr_28017_31766[(2)] = null);

(statearr_28017_31766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (4))){
var inst_27908 = (state_27946[(7)]);
var inst_27908__$1 = (state_27946[(2)]);
var inst_27913 = (inst_27908__$1 == null);
var state_27946__$1 = (function (){var statearr_28042 = state_27946;
(statearr_28042[(7)] = inst_27908__$1);

return statearr_28042;
})();
if(cljs.core.truth_(inst_27913)){
var statearr_28052_31772 = state_27946__$1;
(statearr_28052_31772[(1)] = (5));

} else {
var statearr_28061_31776 = state_27946__$1;
(statearr_28061_31776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (13))){
var state_27946__$1 = state_27946;
var statearr_28111_31777 = state_27946__$1;
(statearr_28111_31777[(2)] = null);

(statearr_28111_31777[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (6))){
var inst_27908 = (state_27946[(7)]);
var state_27946__$1 = state_27946;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27946__$1,(11),to,inst_27908);
} else {
if((state_val_27948 === (3))){
var inst_27938 = (state_27946[(2)]);
var state_27946__$1 = state_27946;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27946__$1,inst_27938);
} else {
if((state_val_27948 === (12))){
var state_27946__$1 = state_27946;
var statearr_28166_31778 = state_27946__$1;
(statearr_28166_31778[(2)] = null);

(statearr_28166_31778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (2))){
var state_27946__$1 = state_27946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27946__$1,(4),from);
} else {
if((state_val_27948 === (11))){
var inst_27924 = (state_27946[(2)]);
var state_27946__$1 = state_27946;
if(cljs.core.truth_(inst_27924)){
var statearr_28208_31779 = state_27946__$1;
(statearr_28208_31779[(1)] = (12));

} else {
var statearr_28219_31780 = state_27946__$1;
(statearr_28219_31780[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (9))){
var state_27946__$1 = state_27946;
var statearr_28242_31781 = state_27946__$1;
(statearr_28242_31781[(2)] = null);

(statearr_28242_31781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (5))){
var state_27946__$1 = state_27946;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28247_31782 = state_27946__$1;
(statearr_28247_31782[(1)] = (8));

} else {
var statearr_28248_31783 = state_27946__$1;
(statearr_28248_31783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (14))){
var inst_27929 = (state_27946[(2)]);
var state_27946__$1 = state_27946;
var statearr_28252_31784 = state_27946__$1;
(statearr_28252_31784[(2)] = inst_27929);

(statearr_28252_31784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (10))){
var inst_27921 = (state_27946[(2)]);
var state_27946__$1 = state_27946;
var statearr_28253_31788 = state_27946__$1;
(statearr_28253_31788[(2)] = inst_27921);

(statearr_28253_31788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (8))){
var inst_27918 = cljs.core.async.close_BANG_(to);
var state_27946__$1 = state_27946;
var statearr_28258_31789 = state_27946__$1;
(statearr_28258_31789[(2)] = inst_27918);

(statearr_28258_31789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27042__auto__ = null;
var cljs$core$async$state_machine__27042__auto____0 = (function (){
var statearr_28260 = [null,null,null,null,null,null,null,null];
(statearr_28260[(0)] = cljs$core$async$state_machine__27042__auto__);

(statearr_28260[(1)] = (1));

return statearr_28260;
});
var cljs$core$async$state_machine__27042__auto____1 = (function (state_27946){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_27946);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e28262){var ex__27046__auto__ = e28262;
var statearr_28263_31790 = state_27946;
(statearr_28263_31790[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_27946[(4)]))){
var statearr_28264_31791 = state_27946;
(statearr_28264_31791[(1)] = cljs.core.first((state_27946[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31792 = state_27946;
state_27946 = G__31792;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
cljs$core$async$state_machine__27042__auto__ = function(state_27946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27042__auto____1.call(this,state_27946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27042__auto____0;
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27042__auto____1;
return cljs$core$async$state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_28269 = f__27471__auto__();
(statearr_28269[(6)] = c__27470__auto___31755);

return statearr_28269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__28277){
var vec__28278 = p__28277;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28278,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28278,(1),null);
var job = vec__28278;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__27470__auto___31795 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_28286){
var state_val_28287 = (state_28286[(1)]);
if((state_val_28287 === (1))){
var state_28286__$1 = state_28286;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28286__$1,(2),res,v);
} else {
if((state_val_28287 === (2))){
var inst_28283 = (state_28286[(2)]);
var inst_28284 = cljs.core.async.close_BANG_(res);
var state_28286__$1 = (function (){var statearr_28294 = state_28286;
(statearr_28294[(7)] = inst_28283);

return statearr_28294;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28286__$1,inst_28284);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0 = (function (){
var statearr_28299 = [null,null,null,null,null,null,null,null];
(statearr_28299[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__);

(statearr_28299[(1)] = (1));

return statearr_28299;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1 = (function (state_28286){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_28286);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e28300){var ex__27046__auto__ = e28300;
var statearr_28307_31799 = state_28286;
(statearr_28307_31799[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_28286[(4)]))){
var statearr_28308_31800 = state_28286;
(statearr_28308_31800[(1)] = cljs.core.first((state_28286[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31801 = state_28286;
state_28286 = G__31801;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__ = function(state_28286){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1.call(this,state_28286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_28310 = f__27471__auto__();
(statearr_28310[(6)] = c__27470__auto___31795);

return statearr_28310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__28311){
var vec__28312 = p__28311;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28312,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28312,(1),null);
var job = vec__28312;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5762__auto___31802 = n;
var __31803 = (0);
while(true){
if((__31803 < n__5762__auto___31802)){
var G__28319_31804 = type;
var G__28319_31805__$1 = (((G__28319_31804 instanceof cljs.core.Keyword))?G__28319_31804.fqn:null);
switch (G__28319_31805__$1) {
case "compute":
var c__27470__auto___31807 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31803,c__27470__auto___31807,G__28319_31804,G__28319_31805__$1,n__5762__auto___31802,jobs,results,process__$1,async){
return (function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = ((function (__31803,c__27470__auto___31807,G__28319_31804,G__28319_31805__$1,n__5762__auto___31802,jobs,results,process__$1,async){
return (function (state_28353){
var state_val_28354 = (state_28353[(1)]);
if((state_val_28354 === (1))){
var state_28353__$1 = state_28353;
var statearr_28358_31808 = state_28353__$1;
(statearr_28358_31808[(2)] = null);

(statearr_28358_31808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (2))){
var state_28353__$1 = state_28353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28353__$1,(4),jobs);
} else {
if((state_val_28354 === (3))){
var inst_28351 = (state_28353[(2)]);
var state_28353__$1 = state_28353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28353__$1,inst_28351);
} else {
if((state_val_28354 === (4))){
var inst_28343 = (state_28353[(2)]);
var inst_28344 = process__$1(inst_28343);
var state_28353__$1 = state_28353;
if(cljs.core.truth_(inst_28344)){
var statearr_28362_31809 = state_28353__$1;
(statearr_28362_31809[(1)] = (5));

} else {
var statearr_28364_31811 = state_28353__$1;
(statearr_28364_31811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (5))){
var state_28353__$1 = state_28353;
var statearr_28366_31814 = state_28353__$1;
(statearr_28366_31814[(2)] = null);

(statearr_28366_31814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (6))){
var state_28353__$1 = state_28353;
var statearr_28367_31815 = state_28353__$1;
(statearr_28367_31815[(2)] = null);

(statearr_28367_31815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (7))){
var inst_28349 = (state_28353[(2)]);
var state_28353__$1 = state_28353;
var statearr_28369_31816 = state_28353__$1;
(statearr_28369_31816[(2)] = inst_28349);

(statearr_28369_31816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31803,c__27470__auto___31807,G__28319_31804,G__28319_31805__$1,n__5762__auto___31802,jobs,results,process__$1,async))
;
return ((function (__31803,switch__27041__auto__,c__27470__auto___31807,G__28319_31804,G__28319_31805__$1,n__5762__auto___31802,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0 = (function (){
var statearr_28370 = [null,null,null,null,null,null,null];
(statearr_28370[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__);

(statearr_28370[(1)] = (1));

return statearr_28370;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1 = (function (state_28353){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_28353);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e28403){var ex__27046__auto__ = e28403;
var statearr_28404_31817 = state_28353;
(statearr_28404_31817[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_28353[(4)]))){
var statearr_28409_31820 = state_28353;
(statearr_28409_31820[(1)] = cljs.core.first((state_28353[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31821 = state_28353;
state_28353 = G__31821;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__ = function(state_28353){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1.call(this,state_28353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__;
})()
;})(__31803,switch__27041__auto__,c__27470__auto___31807,G__28319_31804,G__28319_31805__$1,n__5762__auto___31802,jobs,results,process__$1,async))
})();
var state__27472__auto__ = (function (){var statearr_28411 = f__27471__auto__();
(statearr_28411[(6)] = c__27470__auto___31807);

return statearr_28411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
});})(__31803,c__27470__auto___31807,G__28319_31804,G__28319_31805__$1,n__5762__auto___31802,jobs,results,process__$1,async))
);


break;
case "async":
var c__27470__auto___31822 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31803,c__27470__auto___31822,G__28319_31804,G__28319_31805__$1,n__5762__auto___31802,jobs,results,process__$1,async){
return (function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = ((function (__31803,c__27470__auto___31822,G__28319_31804,G__28319_31805__$1,n__5762__auto___31802,jobs,results,process__$1,async){
return (function (state_28430){
var state_val_28431 = (state_28430[(1)]);
if((state_val_28431 === (1))){
var state_28430__$1 = state_28430;
var statearr_28439_31826 = state_28430__$1;
(statearr_28439_31826[(2)] = null);

(statearr_28439_31826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (2))){
var state_28430__$1 = state_28430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28430__$1,(4),jobs);
} else {
if((state_val_28431 === (3))){
var inst_28428 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28430__$1,inst_28428);
} else {
if((state_val_28431 === (4))){
var inst_28417 = (state_28430[(2)]);
var inst_28420 = async(inst_28417);
var state_28430__$1 = state_28430;
if(cljs.core.truth_(inst_28420)){
var statearr_28449_31831 = state_28430__$1;
(statearr_28449_31831[(1)] = (5));

} else {
var statearr_28451_31832 = state_28430__$1;
(statearr_28451_31832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (5))){
var state_28430__$1 = state_28430;
var statearr_28452_31833 = state_28430__$1;
(statearr_28452_31833[(2)] = null);

(statearr_28452_31833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (6))){
var state_28430__$1 = state_28430;
var statearr_28463_31834 = state_28430__$1;
(statearr_28463_31834[(2)] = null);

(statearr_28463_31834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28431 === (7))){
var inst_28426 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
var statearr_28464_31839 = state_28430__$1;
(statearr_28464_31839[(2)] = inst_28426);

(statearr_28464_31839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31803,c__27470__auto___31822,G__28319_31804,G__28319_31805__$1,n__5762__auto___31802,jobs,results,process__$1,async))
;
return ((function (__31803,switch__27041__auto__,c__27470__auto___31822,G__28319_31804,G__28319_31805__$1,n__5762__auto___31802,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0 = (function (){
var statearr_28465 = [null,null,null,null,null,null,null];
(statearr_28465[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__);

(statearr_28465[(1)] = (1));

return statearr_28465;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1 = (function (state_28430){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_28430);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e28468){var ex__27046__auto__ = e28468;
var statearr_28469_31866 = state_28430;
(statearr_28469_31866[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_28430[(4)]))){
var statearr_28470_31868 = state_28430;
(statearr_28470_31868[(1)] = cljs.core.first((state_28430[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31876 = state_28430;
state_28430 = G__31876;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__ = function(state_28430){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1.call(this,state_28430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__;
})()
;})(__31803,switch__27041__auto__,c__27470__auto___31822,G__28319_31804,G__28319_31805__$1,n__5762__auto___31802,jobs,results,process__$1,async))
})();
var state__27472__auto__ = (function (){var statearr_28473 = f__27471__auto__();
(statearr_28473[(6)] = c__27470__auto___31822);

return statearr_28473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
});})(__31803,c__27470__auto___31822,G__28319_31804,G__28319_31805__$1,n__5762__auto___31802,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28319_31805__$1))));

}

var G__31879 = (__31803 + (1));
__31803 = G__31879;
continue;
} else {
}
break;
}

var c__27470__auto___31880 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_28505){
var state_val_28507 = (state_28505[(1)]);
if((state_val_28507 === (7))){
var inst_28501 = (state_28505[(2)]);
var state_28505__$1 = state_28505;
var statearr_28509_31886 = state_28505__$1;
(statearr_28509_31886[(2)] = inst_28501);

(statearr_28509_31886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28507 === (1))){
var state_28505__$1 = state_28505;
var statearr_28510_31888 = state_28505__$1;
(statearr_28510_31888[(2)] = null);

(statearr_28510_31888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28507 === (4))){
var inst_28484 = (state_28505[(7)]);
var inst_28484__$1 = (state_28505[(2)]);
var inst_28485 = (inst_28484__$1 == null);
var state_28505__$1 = (function (){var statearr_28513 = state_28505;
(statearr_28513[(7)] = inst_28484__$1);

return statearr_28513;
})();
if(cljs.core.truth_(inst_28485)){
var statearr_28516_31900 = state_28505__$1;
(statearr_28516_31900[(1)] = (5));

} else {
var statearr_28517_31903 = state_28505__$1;
(statearr_28517_31903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28507 === (6))){
var inst_28484 = (state_28505[(7)]);
var inst_28489 = (state_28505[(8)]);
var inst_28489__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_28492 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28493 = [inst_28484,inst_28489__$1];
var inst_28494 = (new cljs.core.PersistentVector(null,2,(5),inst_28492,inst_28493,null));
var state_28505__$1 = (function (){var statearr_28521 = state_28505;
(statearr_28521[(8)] = inst_28489__$1);

return statearr_28521;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28505__$1,(8),jobs,inst_28494);
} else {
if((state_val_28507 === (3))){
var inst_28503 = (state_28505[(2)]);
var state_28505__$1 = state_28505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28505__$1,inst_28503);
} else {
if((state_val_28507 === (2))){
var state_28505__$1 = state_28505;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28505__$1,(4),from);
} else {
if((state_val_28507 === (9))){
var inst_28498 = (state_28505[(2)]);
var state_28505__$1 = (function (){var statearr_28530 = state_28505;
(statearr_28530[(9)] = inst_28498);

return statearr_28530;
})();
var statearr_28531_31908 = state_28505__$1;
(statearr_28531_31908[(2)] = null);

(statearr_28531_31908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28507 === (5))){
var inst_28487 = cljs.core.async.close_BANG_(jobs);
var state_28505__$1 = state_28505;
var statearr_28533_31909 = state_28505__$1;
(statearr_28533_31909[(2)] = inst_28487);

(statearr_28533_31909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28507 === (8))){
var inst_28489 = (state_28505[(8)]);
var inst_28496 = (state_28505[(2)]);
var state_28505__$1 = (function (){var statearr_28534 = state_28505;
(statearr_28534[(10)] = inst_28496);

return statearr_28534;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28505__$1,(9),results,inst_28489);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0 = (function (){
var statearr_28549 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28549[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__);

(statearr_28549[(1)] = (1));

return statearr_28549;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1 = (function (state_28505){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_28505);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e28554){var ex__27046__auto__ = e28554;
var statearr_28555_31912 = state_28505;
(statearr_28555_31912[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_28505[(4)]))){
var statearr_28561_31914 = state_28505;
(statearr_28561_31914[(1)] = cljs.core.first((state_28505[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31915 = state_28505;
state_28505 = G__31915;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__ = function(state_28505){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1.call(this,state_28505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_28570 = f__27471__auto__();
(statearr_28570[(6)] = c__27470__auto___31880);

return statearr_28570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));


var c__27470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_28624){
var state_val_28625 = (state_28624[(1)]);
if((state_val_28625 === (7))){
var inst_28620 = (state_28624[(2)]);
var state_28624__$1 = state_28624;
var statearr_28634_31919 = state_28624__$1;
(statearr_28634_31919[(2)] = inst_28620);

(statearr_28634_31919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28625 === (20))){
var state_28624__$1 = state_28624;
var statearr_28644_31920 = state_28624__$1;
(statearr_28644_31920[(2)] = null);

(statearr_28644_31920[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28625 === (1))){
var state_28624__$1 = state_28624;
var statearr_28647_31921 = state_28624__$1;
(statearr_28647_31921[(2)] = null);

(statearr_28647_31921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28625 === (4))){
var inst_28579 = (state_28624[(7)]);
var inst_28579__$1 = (state_28624[(2)]);
var inst_28582 = (inst_28579__$1 == null);
var state_28624__$1 = (function (){var statearr_28655 = state_28624;
(statearr_28655[(7)] = inst_28579__$1);

return statearr_28655;
})();
if(cljs.core.truth_(inst_28582)){
var statearr_28662_31922 = state_28624__$1;
(statearr_28662_31922[(1)] = (5));

} else {
var statearr_28663_31923 = state_28624__$1;
(statearr_28663_31923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28625 === (15))){
var inst_28597 = (state_28624[(8)]);
var state_28624__$1 = state_28624;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28624__$1,(18),to,inst_28597);
} else {
if((state_val_28625 === (21))){
var inst_28615 = (state_28624[(2)]);
var state_28624__$1 = state_28624;
var statearr_28671_31924 = state_28624__$1;
(statearr_28671_31924[(2)] = inst_28615);

(statearr_28671_31924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28625 === (13))){
var inst_28617 = (state_28624[(2)]);
var state_28624__$1 = (function (){var statearr_28675 = state_28624;
(statearr_28675[(9)] = inst_28617);

return statearr_28675;
})();
var statearr_28677_31925 = state_28624__$1;
(statearr_28677_31925[(2)] = null);

(statearr_28677_31925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28625 === (6))){
var inst_28579 = (state_28624[(7)]);
var state_28624__$1 = state_28624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28624__$1,(11),inst_28579);
} else {
if((state_val_28625 === (17))){
var inst_28610 = (state_28624[(2)]);
var state_28624__$1 = state_28624;
if(cljs.core.truth_(inst_28610)){
var statearr_28691_31928 = state_28624__$1;
(statearr_28691_31928[(1)] = (19));

} else {
var statearr_28692_31929 = state_28624__$1;
(statearr_28692_31929[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28625 === (3))){
var inst_28622 = (state_28624[(2)]);
var state_28624__$1 = state_28624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28624__$1,inst_28622);
} else {
if((state_val_28625 === (12))){
var inst_28594 = (state_28624[(10)]);
var state_28624__$1 = state_28624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28624__$1,(14),inst_28594);
} else {
if((state_val_28625 === (2))){
var state_28624__$1 = state_28624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28624__$1,(4),results);
} else {
if((state_val_28625 === (19))){
var state_28624__$1 = state_28624;
var statearr_28705_31930 = state_28624__$1;
(statearr_28705_31930[(2)] = null);

(statearr_28705_31930[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28625 === (11))){
var inst_28594 = (state_28624[(2)]);
var state_28624__$1 = (function (){var statearr_28706 = state_28624;
(statearr_28706[(10)] = inst_28594);

return statearr_28706;
})();
var statearr_28713_31931 = state_28624__$1;
(statearr_28713_31931[(2)] = null);

(statearr_28713_31931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28625 === (9))){
var state_28624__$1 = state_28624;
var statearr_28715_31932 = state_28624__$1;
(statearr_28715_31932[(2)] = null);

(statearr_28715_31932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28625 === (5))){
var state_28624__$1 = state_28624;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28716_31933 = state_28624__$1;
(statearr_28716_31933[(1)] = (8));

} else {
var statearr_28718_31934 = state_28624__$1;
(statearr_28718_31934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28625 === (14))){
var inst_28597 = (state_28624[(8)]);
var inst_28600 = (state_28624[(11)]);
var inst_28597__$1 = (state_28624[(2)]);
var inst_28599 = (inst_28597__$1 == null);
var inst_28600__$1 = cljs.core.not(inst_28599);
var state_28624__$1 = (function (){var statearr_28722 = state_28624;
(statearr_28722[(8)] = inst_28597__$1);

(statearr_28722[(11)] = inst_28600__$1);

return statearr_28722;
})();
if(inst_28600__$1){
var statearr_28723_31935 = state_28624__$1;
(statearr_28723_31935[(1)] = (15));

} else {
var statearr_28724_31936 = state_28624__$1;
(statearr_28724_31936[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28625 === (16))){
var inst_28600 = (state_28624[(11)]);
var state_28624__$1 = state_28624;
var statearr_28725_31937 = state_28624__$1;
(statearr_28725_31937[(2)] = inst_28600);

(statearr_28725_31937[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28625 === (10))){
var inst_28590 = (state_28624[(2)]);
var state_28624__$1 = state_28624;
var statearr_28726_31938 = state_28624__$1;
(statearr_28726_31938[(2)] = inst_28590);

(statearr_28726_31938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28625 === (18))){
var inst_28606 = (state_28624[(2)]);
var state_28624__$1 = state_28624;
var statearr_28729_31939 = state_28624__$1;
(statearr_28729_31939[(2)] = inst_28606);

(statearr_28729_31939[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28625 === (8))){
var inst_28586 = cljs.core.async.close_BANG_(to);
var state_28624__$1 = state_28624;
var statearr_28735_31940 = state_28624__$1;
(statearr_28735_31940[(2)] = inst_28586);

(statearr_28735_31940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0 = (function (){
var statearr_28737 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28737[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__);

(statearr_28737[(1)] = (1));

return statearr_28737;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1 = (function (state_28624){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_28624);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e28742){var ex__27046__auto__ = e28742;
var statearr_28743_31941 = state_28624;
(statearr_28743_31941[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_28624[(4)]))){
var statearr_28744_31942 = state_28624;
(statearr_28744_31942[(1)] = cljs.core.first((state_28624[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31943 = state_28624;
state_28624 = G__31943;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__ = function(state_28624){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1.call(this,state_28624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_28748 = f__27471__auto__();
(statearr_28748[(6)] = c__27470__auto__);

return statearr_28748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));

return c__27470__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__28755 = arguments.length;
switch (G__28755) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__28772 = arguments.length;
switch (G__28772) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__28792 = arguments.length;
switch (G__28792) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__27470__auto___31954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_28840){
var state_val_28841 = (state_28840[(1)]);
if((state_val_28841 === (7))){
var inst_28836 = (state_28840[(2)]);
var state_28840__$1 = state_28840;
var statearr_28849_31955 = state_28840__$1;
(statearr_28849_31955[(2)] = inst_28836);

(statearr_28849_31955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (1))){
var state_28840__$1 = state_28840;
var statearr_28852_31956 = state_28840__$1;
(statearr_28852_31956[(2)] = null);

(statearr_28852_31956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (4))){
var inst_28816 = (state_28840[(7)]);
var inst_28816__$1 = (state_28840[(2)]);
var inst_28817 = (inst_28816__$1 == null);
var state_28840__$1 = (function (){var statearr_28854 = state_28840;
(statearr_28854[(7)] = inst_28816__$1);

return statearr_28854;
})();
if(cljs.core.truth_(inst_28817)){
var statearr_28855_31957 = state_28840__$1;
(statearr_28855_31957[(1)] = (5));

} else {
var statearr_28856_31958 = state_28840__$1;
(statearr_28856_31958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (13))){
var state_28840__$1 = state_28840;
var statearr_28859_31959 = state_28840__$1;
(statearr_28859_31959[(2)] = null);

(statearr_28859_31959[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (6))){
var inst_28816 = (state_28840[(7)]);
var inst_28822 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28816) : p.call(null,inst_28816));
var state_28840__$1 = state_28840;
if(cljs.core.truth_(inst_28822)){
var statearr_28862_31962 = state_28840__$1;
(statearr_28862_31962[(1)] = (9));

} else {
var statearr_28863_31963 = state_28840__$1;
(statearr_28863_31963[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (3))){
var inst_28838 = (state_28840[(2)]);
var state_28840__$1 = state_28840;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28840__$1,inst_28838);
} else {
if((state_val_28841 === (12))){
var state_28840__$1 = state_28840;
var statearr_28865_31965 = state_28840__$1;
(statearr_28865_31965[(2)] = null);

(statearr_28865_31965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (2))){
var state_28840__$1 = state_28840;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28840__$1,(4),ch);
} else {
if((state_val_28841 === (11))){
var inst_28816 = (state_28840[(7)]);
var inst_28827 = (state_28840[(2)]);
var state_28840__$1 = state_28840;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28840__$1,(8),inst_28827,inst_28816);
} else {
if((state_val_28841 === (9))){
var state_28840__$1 = state_28840;
var statearr_28873_31982 = state_28840__$1;
(statearr_28873_31982[(2)] = tc);

(statearr_28873_31982[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (5))){
var inst_28819 = cljs.core.async.close_BANG_(tc);
var inst_28820 = cljs.core.async.close_BANG_(fc);
var state_28840__$1 = (function (){var statearr_28874 = state_28840;
(statearr_28874[(8)] = inst_28819);

return statearr_28874;
})();
var statearr_28875_31987 = state_28840__$1;
(statearr_28875_31987[(2)] = inst_28820);

(statearr_28875_31987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (14))){
var inst_28834 = (state_28840[(2)]);
var state_28840__$1 = state_28840;
var statearr_28876_31993 = state_28840__$1;
(statearr_28876_31993[(2)] = inst_28834);

(statearr_28876_31993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (10))){
var state_28840__$1 = state_28840;
var statearr_28878_31998 = state_28840__$1;
(statearr_28878_31998[(2)] = fc);

(statearr_28878_31998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (8))){
var inst_28829 = (state_28840[(2)]);
var state_28840__$1 = state_28840;
if(cljs.core.truth_(inst_28829)){
var statearr_28882_31999 = state_28840__$1;
(statearr_28882_31999[(1)] = (12));

} else {
var statearr_28883_32001 = state_28840__$1;
(statearr_28883_32001[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27042__auto__ = null;
var cljs$core$async$state_machine__27042__auto____0 = (function (){
var statearr_28886 = [null,null,null,null,null,null,null,null,null];
(statearr_28886[(0)] = cljs$core$async$state_machine__27042__auto__);

(statearr_28886[(1)] = (1));

return statearr_28886;
});
var cljs$core$async$state_machine__27042__auto____1 = (function (state_28840){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_28840);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e28890){var ex__27046__auto__ = e28890;
var statearr_28891_32004 = state_28840;
(statearr_28891_32004[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_28840[(4)]))){
var statearr_28894_32009 = state_28840;
(statearr_28894_32009[(1)] = cljs.core.first((state_28840[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32010 = state_28840;
state_28840 = G__32010;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
cljs$core$async$state_machine__27042__auto__ = function(state_28840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27042__auto____1.call(this,state_28840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27042__auto____0;
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27042__auto____1;
return cljs$core$async$state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_28896 = f__27471__auto__();
(statearr_28896[(6)] = c__27470__auto___31954);

return statearr_28896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_28930){
var state_val_28931 = (state_28930[(1)]);
if((state_val_28931 === (7))){
var inst_28926 = (state_28930[(2)]);
var state_28930__$1 = state_28930;
var statearr_28935_32015 = state_28930__$1;
(statearr_28935_32015[(2)] = inst_28926);

(statearr_28935_32015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (1))){
var inst_28903 = init;
var inst_28905 = inst_28903;
var state_28930__$1 = (function (){var statearr_28937 = state_28930;
(statearr_28937[(7)] = inst_28905);

return statearr_28937;
})();
var statearr_28942_32016 = state_28930__$1;
(statearr_28942_32016[(2)] = null);

(statearr_28942_32016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (4))){
var inst_28908 = (state_28930[(8)]);
var inst_28908__$1 = (state_28930[(2)]);
var inst_28911 = (inst_28908__$1 == null);
var state_28930__$1 = (function (){var statearr_28970 = state_28930;
(statearr_28970[(8)] = inst_28908__$1);

return statearr_28970;
})();
if(cljs.core.truth_(inst_28911)){
var statearr_28978_32017 = state_28930__$1;
(statearr_28978_32017[(1)] = (5));

} else {
var statearr_28982_32018 = state_28930__$1;
(statearr_28982_32018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (6))){
var inst_28905 = (state_28930[(7)]);
var inst_28908 = (state_28930[(8)]);
var inst_28914 = (state_28930[(9)]);
var inst_28914__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_28905,inst_28908) : f.call(null,inst_28905,inst_28908));
var inst_28915 = cljs.core.reduced_QMARK_(inst_28914__$1);
var state_28930__$1 = (function (){var statearr_28994 = state_28930;
(statearr_28994[(9)] = inst_28914__$1);

return statearr_28994;
})();
if(inst_28915){
var statearr_29000_32023 = state_28930__$1;
(statearr_29000_32023[(1)] = (8));

} else {
var statearr_29005_32024 = state_28930__$1;
(statearr_29005_32024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (3))){
var inst_28928 = (state_28930[(2)]);
var state_28930__$1 = state_28930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28930__$1,inst_28928);
} else {
if((state_val_28931 === (2))){
var state_28930__$1 = state_28930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28930__$1,(4),ch);
} else {
if((state_val_28931 === (9))){
var inst_28914 = (state_28930[(9)]);
var inst_28905 = inst_28914;
var state_28930__$1 = (function (){var statearr_29011 = state_28930;
(statearr_29011[(7)] = inst_28905);

return statearr_29011;
})();
var statearr_29012_32030 = state_28930__$1;
(statearr_29012_32030[(2)] = null);

(statearr_29012_32030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (5))){
var inst_28905 = (state_28930[(7)]);
var state_28930__$1 = state_28930;
var statearr_29016_32032 = state_28930__$1;
(statearr_29016_32032[(2)] = inst_28905);

(statearr_29016_32032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (10))){
var inst_28924 = (state_28930[(2)]);
var state_28930__$1 = state_28930;
var statearr_29017_32038 = state_28930__$1;
(statearr_29017_32038[(2)] = inst_28924);

(statearr_29017_32038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (8))){
var inst_28914 = (state_28930[(9)]);
var inst_28917 = cljs.core.deref(inst_28914);
var state_28930__$1 = state_28930;
var statearr_29019_32042 = state_28930__$1;
(statearr_29019_32042[(2)] = inst_28917);

(statearr_29019_32042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__27042__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27042__auto____0 = (function (){
var statearr_29021 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29021[(0)] = cljs$core$async$reduce_$_state_machine__27042__auto__);

(statearr_29021[(1)] = (1));

return statearr_29021;
});
var cljs$core$async$reduce_$_state_machine__27042__auto____1 = (function (state_28930){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_28930);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e29025){var ex__27046__auto__ = e29025;
var statearr_29026_32043 = state_28930;
(statearr_29026_32043[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_28930[(4)]))){
var statearr_29030_32044 = state_28930;
(statearr_29030_32044[(1)] = cljs.core.first((state_28930[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32049 = state_28930;
state_28930 = G__32049;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27042__auto__ = function(state_28930){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27042__auto____1.call(this,state_28930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27042__auto____0;
cljs$core$async$reduce_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27042__auto____1;
return cljs$core$async$reduce_$_state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_29036 = f__27471__auto__();
(statearr_29036[(6)] = c__27470__auto__);

return statearr_29036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));

return c__27470__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__27470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_29049){
var state_val_29050 = (state_29049[(1)]);
if((state_val_29050 === (1))){
var inst_29044 = cljs.core.async.reduce(f__$1,init,ch);
var state_29049__$1 = state_29049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29049__$1,(2),inst_29044);
} else {
if((state_val_29050 === (2))){
var inst_29046 = (state_29049[(2)]);
var inst_29047 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29046) : f__$1.call(null,inst_29046));
var state_29049__$1 = state_29049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29049__$1,inst_29047);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27042__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27042__auto____0 = (function (){
var statearr_29058 = [null,null,null,null,null,null,null];
(statearr_29058[(0)] = cljs$core$async$transduce_$_state_machine__27042__auto__);

(statearr_29058[(1)] = (1));

return statearr_29058;
});
var cljs$core$async$transduce_$_state_machine__27042__auto____1 = (function (state_29049){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_29049);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e29062){var ex__27046__auto__ = e29062;
var statearr_29063_32054 = state_29049;
(statearr_29063_32054[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_29049[(4)]))){
var statearr_29066_32056 = state_29049;
(statearr_29066_32056[(1)] = cljs.core.first((state_29049[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32057 = state_29049;
state_29049 = G__32057;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27042__auto__ = function(state_29049){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27042__auto____1.call(this,state_29049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27042__auto____0;
cljs$core$async$transduce_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27042__auto____1;
return cljs$core$async$transduce_$_state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_29071 = f__27471__auto__();
(statearr_29071[(6)] = c__27470__auto__);

return statearr_29071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));

return c__27470__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__29078 = arguments.length;
switch (G__29078) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_29116){
var state_val_29118 = (state_29116[(1)]);
if((state_val_29118 === (7))){
var inst_29095 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29126_32066 = state_29116__$1;
(statearr_29126_32066[(2)] = inst_29095);

(statearr_29126_32066[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (1))){
var inst_29085 = cljs.core.seq(coll);
var inst_29086 = inst_29085;
var state_29116__$1 = (function (){var statearr_29131 = state_29116;
(statearr_29131[(7)] = inst_29086);

return statearr_29131;
})();
var statearr_29132_32068 = state_29116__$1;
(statearr_29132_32068[(2)] = null);

(statearr_29132_32068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (4))){
var inst_29086 = (state_29116[(7)]);
var inst_29093 = cljs.core.first(inst_29086);
var state_29116__$1 = state_29116;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29116__$1,(7),ch,inst_29093);
} else {
if((state_val_29118 === (13))){
var inst_29107 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29135_32080 = state_29116__$1;
(statearr_29135_32080[(2)] = inst_29107);

(statearr_29135_32080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (6))){
var inst_29098 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
if(cljs.core.truth_(inst_29098)){
var statearr_29137_32081 = state_29116__$1;
(statearr_29137_32081[(1)] = (8));

} else {
var statearr_29138_32082 = state_29116__$1;
(statearr_29138_32082[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (3))){
var inst_29112 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29116__$1,inst_29112);
} else {
if((state_val_29118 === (12))){
var state_29116__$1 = state_29116;
var statearr_29141_32087 = state_29116__$1;
(statearr_29141_32087[(2)] = null);

(statearr_29141_32087[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (2))){
var inst_29086 = (state_29116[(7)]);
var state_29116__$1 = state_29116;
if(cljs.core.truth_(inst_29086)){
var statearr_29144_32092 = state_29116__$1;
(statearr_29144_32092[(1)] = (4));

} else {
var statearr_29145_32093 = state_29116__$1;
(statearr_29145_32093[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (11))){
var inst_29104 = cljs.core.async.close_BANG_(ch);
var state_29116__$1 = state_29116;
var statearr_29148_32094 = state_29116__$1;
(statearr_29148_32094[(2)] = inst_29104);

(statearr_29148_32094[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (9))){
var state_29116__$1 = state_29116;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29150_32095 = state_29116__$1;
(statearr_29150_32095[(1)] = (11));

} else {
var statearr_29151_32096 = state_29116__$1;
(statearr_29151_32096[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (5))){
var inst_29086 = (state_29116[(7)]);
var state_29116__$1 = state_29116;
var statearr_29153_32097 = state_29116__$1;
(statearr_29153_32097[(2)] = inst_29086);

(statearr_29153_32097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (10))){
var inst_29109 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29154_32098 = state_29116__$1;
(statearr_29154_32098[(2)] = inst_29109);

(statearr_29154_32098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (8))){
var inst_29086 = (state_29116[(7)]);
var inst_29100 = cljs.core.next(inst_29086);
var inst_29086__$1 = inst_29100;
var state_29116__$1 = (function (){var statearr_29158 = state_29116;
(statearr_29158[(7)] = inst_29086__$1);

return statearr_29158;
})();
var statearr_29160_32099 = state_29116__$1;
(statearr_29160_32099[(2)] = null);

(statearr_29160_32099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27042__auto__ = null;
var cljs$core$async$state_machine__27042__auto____0 = (function (){
var statearr_29164 = [null,null,null,null,null,null,null,null];
(statearr_29164[(0)] = cljs$core$async$state_machine__27042__auto__);

(statearr_29164[(1)] = (1));

return statearr_29164;
});
var cljs$core$async$state_machine__27042__auto____1 = (function (state_29116){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_29116);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e29165){var ex__27046__auto__ = e29165;
var statearr_29166_32102 = state_29116;
(statearr_29166_32102[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_29116[(4)]))){
var statearr_29168_32104 = state_29116;
(statearr_29168_32104[(1)] = cljs.core.first((state_29116[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32105 = state_29116;
state_29116 = G__32105;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
cljs$core$async$state_machine__27042__auto__ = function(state_29116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27042__auto____1.call(this,state_29116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27042__auto____0;
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27042__auto____1;
return cljs$core$async$state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_29174 = f__27471__auto__();
(statearr_29174[(6)] = c__27470__auto__);

return statearr_29174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));

return c__27470__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__29180 = arguments.length;
switch (G__29180) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32110 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32110(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32120 = (function (m,ch,close_QMARK_){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5520__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5518__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32120(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32125 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32125(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32151 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32151(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29210 = (function (ch,cs,meta29211){
this.ch = ch;
this.cs = cs;
this.meta29211 = meta29211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29212,meta29211__$1){
var self__ = this;
var _29212__$1 = this;
return (new cljs.core.async.t_cljs$core$async29210(self__.ch,self__.cs,meta29211__$1));
}));

(cljs.core.async.t_cljs$core$async29210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29212){
var self__ = this;
var _29212__$1 = this;
return self__.meta29211;
}));

(cljs.core.async.t_cljs$core$async29210.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29210.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29210.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29210.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29210.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29210.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29211","meta29211",-1161906992,null)], null);
}));

(cljs.core.async.t_cljs$core$async29210.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29210");

(cljs.core.async.t_cljs$core$async29210.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async29210");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29210.
 */
cljs.core.async.__GT_t_cljs$core$async29210 = (function cljs$core$async$__GT_t_cljs$core$async29210(ch,cs,meta29211){
return (new cljs.core.async.t_cljs$core$async29210(ch,cs,meta29211));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async29210(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__27470__auto___32181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_29368){
var state_val_29369 = (state_29368[(1)]);
if((state_val_29369 === (7))){
var inst_29362 = (state_29368[(2)]);
var state_29368__$1 = state_29368;
var statearr_29373_32182 = state_29368__$1;
(statearr_29373_32182[(2)] = inst_29362);

(statearr_29373_32182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (20))){
var inst_29262 = (state_29368[(7)]);
var inst_29274 = cljs.core.first(inst_29262);
var inst_29275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29274,(0),null);
var inst_29276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29274,(1),null);
var state_29368__$1 = (function (){var statearr_29375 = state_29368;
(statearr_29375[(8)] = inst_29275);

return statearr_29375;
})();
if(cljs.core.truth_(inst_29276)){
var statearr_29376_32184 = state_29368__$1;
(statearr_29376_32184[(1)] = (22));

} else {
var statearr_29377_32186 = state_29368__$1;
(statearr_29377_32186[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (27))){
var inst_29306 = (state_29368[(9)]);
var inst_29308 = (state_29368[(10)]);
var inst_29313 = (state_29368[(11)]);
var inst_29230 = (state_29368[(12)]);
var inst_29313__$1 = cljs.core._nth(inst_29306,inst_29308);
var inst_29315 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29313__$1,inst_29230,done);
var state_29368__$1 = (function (){var statearr_29380 = state_29368;
(statearr_29380[(11)] = inst_29313__$1);

return statearr_29380;
})();
if(cljs.core.truth_(inst_29315)){
var statearr_29382_32187 = state_29368__$1;
(statearr_29382_32187[(1)] = (30));

} else {
var statearr_29383_32188 = state_29368__$1;
(statearr_29383_32188[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (1))){
var state_29368__$1 = state_29368;
var statearr_29384_32189 = state_29368__$1;
(statearr_29384_32189[(2)] = null);

(statearr_29384_32189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (24))){
var inst_29262 = (state_29368[(7)]);
var inst_29281 = (state_29368[(2)]);
var inst_29282 = cljs.core.next(inst_29262);
var inst_29239 = inst_29282;
var inst_29240 = null;
var inst_29241 = (0);
var inst_29242 = (0);
var state_29368__$1 = (function (){var statearr_29385 = state_29368;
(statearr_29385[(13)] = inst_29281);

(statearr_29385[(14)] = inst_29239);

(statearr_29385[(15)] = inst_29240);

(statearr_29385[(16)] = inst_29241);

(statearr_29385[(17)] = inst_29242);

return statearr_29385;
})();
var statearr_29386_32190 = state_29368__$1;
(statearr_29386_32190[(2)] = null);

(statearr_29386_32190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (39))){
var state_29368__$1 = state_29368;
var statearr_29392_32191 = state_29368__$1;
(statearr_29392_32191[(2)] = null);

(statearr_29392_32191[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (4))){
var inst_29230 = (state_29368[(12)]);
var inst_29230__$1 = (state_29368[(2)]);
var inst_29231 = (inst_29230__$1 == null);
var state_29368__$1 = (function (){var statearr_29393 = state_29368;
(statearr_29393[(12)] = inst_29230__$1);

return statearr_29393;
})();
if(cljs.core.truth_(inst_29231)){
var statearr_29394_32192 = state_29368__$1;
(statearr_29394_32192[(1)] = (5));

} else {
var statearr_29395_32193 = state_29368__$1;
(statearr_29395_32193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (15))){
var inst_29242 = (state_29368[(17)]);
var inst_29239 = (state_29368[(14)]);
var inst_29240 = (state_29368[(15)]);
var inst_29241 = (state_29368[(16)]);
var inst_29257 = (state_29368[(2)]);
var inst_29258 = (inst_29242 + (1));
var tmp29389 = inst_29239;
var tmp29390 = inst_29240;
var tmp29391 = inst_29241;
var inst_29239__$1 = tmp29389;
var inst_29240__$1 = tmp29390;
var inst_29241__$1 = tmp29391;
var inst_29242__$1 = inst_29258;
var state_29368__$1 = (function (){var statearr_29396 = state_29368;
(statearr_29396[(18)] = inst_29257);

(statearr_29396[(14)] = inst_29239__$1);

(statearr_29396[(15)] = inst_29240__$1);

(statearr_29396[(16)] = inst_29241__$1);

(statearr_29396[(17)] = inst_29242__$1);

return statearr_29396;
})();
var statearr_29398_32198 = state_29368__$1;
(statearr_29398_32198[(2)] = null);

(statearr_29398_32198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (21))){
var inst_29285 = (state_29368[(2)]);
var state_29368__$1 = state_29368;
var statearr_29402_32199 = state_29368__$1;
(statearr_29402_32199[(2)] = inst_29285);

(statearr_29402_32199[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (31))){
var inst_29313 = (state_29368[(11)]);
var inst_29319 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29313);
var state_29368__$1 = state_29368;
var statearr_29404_32202 = state_29368__$1;
(statearr_29404_32202[(2)] = inst_29319);

(statearr_29404_32202[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (32))){
var inst_29308 = (state_29368[(10)]);
var inst_29305 = (state_29368[(19)]);
var inst_29306 = (state_29368[(9)]);
var inst_29307 = (state_29368[(20)]);
var inst_29321 = (state_29368[(2)]);
var inst_29322 = (inst_29308 + (1));
var tmp29399 = inst_29306;
var tmp29400 = inst_29307;
var tmp29401 = inst_29305;
var inst_29305__$1 = tmp29401;
var inst_29306__$1 = tmp29399;
var inst_29307__$1 = tmp29400;
var inst_29308__$1 = inst_29322;
var state_29368__$1 = (function (){var statearr_29406 = state_29368;
(statearr_29406[(21)] = inst_29321);

(statearr_29406[(19)] = inst_29305__$1);

(statearr_29406[(9)] = inst_29306__$1);

(statearr_29406[(20)] = inst_29307__$1);

(statearr_29406[(10)] = inst_29308__$1);

return statearr_29406;
})();
var statearr_29409_32226 = state_29368__$1;
(statearr_29409_32226[(2)] = null);

(statearr_29409_32226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (40))){
var inst_29334 = (state_29368[(22)]);
var inst_29338 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29334);
var state_29368__$1 = state_29368;
var statearr_29410_32227 = state_29368__$1;
(statearr_29410_32227[(2)] = inst_29338);

(statearr_29410_32227[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (33))){
var inst_29325 = (state_29368[(23)]);
var inst_29327 = cljs.core.chunked_seq_QMARK_(inst_29325);
var state_29368__$1 = state_29368;
if(inst_29327){
var statearr_29412_32228 = state_29368__$1;
(statearr_29412_32228[(1)] = (36));

} else {
var statearr_29415_32229 = state_29368__$1;
(statearr_29415_32229[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (13))){
var inst_29251 = (state_29368[(24)]);
var inst_29254 = cljs.core.async.close_BANG_(inst_29251);
var state_29368__$1 = state_29368;
var statearr_29419_32230 = state_29368__$1;
(statearr_29419_32230[(2)] = inst_29254);

(statearr_29419_32230[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (22))){
var inst_29275 = (state_29368[(8)]);
var inst_29278 = cljs.core.async.close_BANG_(inst_29275);
var state_29368__$1 = state_29368;
var statearr_29420_32233 = state_29368__$1;
(statearr_29420_32233[(2)] = inst_29278);

(statearr_29420_32233[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (36))){
var inst_29325 = (state_29368[(23)]);
var inst_29329 = cljs.core.chunk_first(inst_29325);
var inst_29330 = cljs.core.chunk_rest(inst_29325);
var inst_29331 = cljs.core.count(inst_29329);
var inst_29305 = inst_29330;
var inst_29306 = inst_29329;
var inst_29307 = inst_29331;
var inst_29308 = (0);
var state_29368__$1 = (function (){var statearr_29425 = state_29368;
(statearr_29425[(19)] = inst_29305);

(statearr_29425[(9)] = inst_29306);

(statearr_29425[(20)] = inst_29307);

(statearr_29425[(10)] = inst_29308);

return statearr_29425;
})();
var statearr_29427_32235 = state_29368__$1;
(statearr_29427_32235[(2)] = null);

(statearr_29427_32235[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (41))){
var inst_29325 = (state_29368[(23)]);
var inst_29340 = (state_29368[(2)]);
var inst_29341 = cljs.core.next(inst_29325);
var inst_29305 = inst_29341;
var inst_29306 = null;
var inst_29307 = (0);
var inst_29308 = (0);
var state_29368__$1 = (function (){var statearr_29440 = state_29368;
(statearr_29440[(25)] = inst_29340);

(statearr_29440[(19)] = inst_29305);

(statearr_29440[(9)] = inst_29306);

(statearr_29440[(20)] = inst_29307);

(statearr_29440[(10)] = inst_29308);

return statearr_29440;
})();
var statearr_29443_32237 = state_29368__$1;
(statearr_29443_32237[(2)] = null);

(statearr_29443_32237[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (43))){
var state_29368__$1 = state_29368;
var statearr_29444_32238 = state_29368__$1;
(statearr_29444_32238[(2)] = null);

(statearr_29444_32238[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (29))){
var inst_29350 = (state_29368[(2)]);
var state_29368__$1 = state_29368;
var statearr_29445_32241 = state_29368__$1;
(statearr_29445_32241[(2)] = inst_29350);

(statearr_29445_32241[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (44))){
var inst_29359 = (state_29368[(2)]);
var state_29368__$1 = (function (){var statearr_29446 = state_29368;
(statearr_29446[(26)] = inst_29359);

return statearr_29446;
})();
var statearr_29447_32245 = state_29368__$1;
(statearr_29447_32245[(2)] = null);

(statearr_29447_32245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (6))){
var inst_29295 = (state_29368[(27)]);
var inst_29294 = cljs.core.deref(cs);
var inst_29295__$1 = cljs.core.keys(inst_29294);
var inst_29296 = cljs.core.count(inst_29295__$1);
var inst_29297 = cljs.core.reset_BANG_(dctr,inst_29296);
var inst_29304 = cljs.core.seq(inst_29295__$1);
var inst_29305 = inst_29304;
var inst_29306 = null;
var inst_29307 = (0);
var inst_29308 = (0);
var state_29368__$1 = (function (){var statearr_29449 = state_29368;
(statearr_29449[(27)] = inst_29295__$1);

(statearr_29449[(28)] = inst_29297);

(statearr_29449[(19)] = inst_29305);

(statearr_29449[(9)] = inst_29306);

(statearr_29449[(20)] = inst_29307);

(statearr_29449[(10)] = inst_29308);

return statearr_29449;
})();
var statearr_29450_32253 = state_29368__$1;
(statearr_29450_32253[(2)] = null);

(statearr_29450_32253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (28))){
var inst_29305 = (state_29368[(19)]);
var inst_29325 = (state_29368[(23)]);
var inst_29325__$1 = cljs.core.seq(inst_29305);
var state_29368__$1 = (function (){var statearr_29453 = state_29368;
(statearr_29453[(23)] = inst_29325__$1);

return statearr_29453;
})();
if(inst_29325__$1){
var statearr_29456_32258 = state_29368__$1;
(statearr_29456_32258[(1)] = (33));

} else {
var statearr_29457_32259 = state_29368__$1;
(statearr_29457_32259[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (25))){
var inst_29308 = (state_29368[(10)]);
var inst_29307 = (state_29368[(20)]);
var inst_29310 = (inst_29308 < inst_29307);
var inst_29311 = inst_29310;
var state_29368__$1 = state_29368;
if(cljs.core.truth_(inst_29311)){
var statearr_29458_32260 = state_29368__$1;
(statearr_29458_32260[(1)] = (27));

} else {
var statearr_29459_32261 = state_29368__$1;
(statearr_29459_32261[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (34))){
var state_29368__$1 = state_29368;
var statearr_29461_32269 = state_29368__$1;
(statearr_29461_32269[(2)] = null);

(statearr_29461_32269[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (17))){
var state_29368__$1 = state_29368;
var statearr_29462_32271 = state_29368__$1;
(statearr_29462_32271[(2)] = null);

(statearr_29462_32271[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (3))){
var inst_29364 = (state_29368[(2)]);
var state_29368__$1 = state_29368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29368__$1,inst_29364);
} else {
if((state_val_29369 === (12))){
var inst_29290 = (state_29368[(2)]);
var state_29368__$1 = state_29368;
var statearr_29464_32279 = state_29368__$1;
(statearr_29464_32279[(2)] = inst_29290);

(statearr_29464_32279[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (2))){
var state_29368__$1 = state_29368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29368__$1,(4),ch);
} else {
if((state_val_29369 === (23))){
var state_29368__$1 = state_29368;
var statearr_29468_32294 = state_29368__$1;
(statearr_29468_32294[(2)] = null);

(statearr_29468_32294[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (35))){
var inst_29347 = (state_29368[(2)]);
var state_29368__$1 = state_29368;
var statearr_29470_32298 = state_29368__$1;
(statearr_29470_32298[(2)] = inst_29347);

(statearr_29470_32298[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (19))){
var inst_29262 = (state_29368[(7)]);
var inst_29266 = cljs.core.chunk_first(inst_29262);
var inst_29267 = cljs.core.chunk_rest(inst_29262);
var inst_29268 = cljs.core.count(inst_29266);
var inst_29239 = inst_29267;
var inst_29240 = inst_29266;
var inst_29241 = inst_29268;
var inst_29242 = (0);
var state_29368__$1 = (function (){var statearr_29475 = state_29368;
(statearr_29475[(14)] = inst_29239);

(statearr_29475[(15)] = inst_29240);

(statearr_29475[(16)] = inst_29241);

(statearr_29475[(17)] = inst_29242);

return statearr_29475;
})();
var statearr_29477_32302 = state_29368__$1;
(statearr_29477_32302[(2)] = null);

(statearr_29477_32302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (11))){
var inst_29239 = (state_29368[(14)]);
var inst_29262 = (state_29368[(7)]);
var inst_29262__$1 = cljs.core.seq(inst_29239);
var state_29368__$1 = (function (){var statearr_29482 = state_29368;
(statearr_29482[(7)] = inst_29262__$1);

return statearr_29482;
})();
if(inst_29262__$1){
var statearr_29483_32303 = state_29368__$1;
(statearr_29483_32303[(1)] = (16));

} else {
var statearr_29484_32304 = state_29368__$1;
(statearr_29484_32304[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (9))){
var inst_29292 = (state_29368[(2)]);
var state_29368__$1 = state_29368;
var statearr_29486_32307 = state_29368__$1;
(statearr_29486_32307[(2)] = inst_29292);

(statearr_29486_32307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (5))){
var inst_29237 = cljs.core.deref(cs);
var inst_29238 = cljs.core.seq(inst_29237);
var inst_29239 = inst_29238;
var inst_29240 = null;
var inst_29241 = (0);
var inst_29242 = (0);
var state_29368__$1 = (function (){var statearr_29491 = state_29368;
(statearr_29491[(14)] = inst_29239);

(statearr_29491[(15)] = inst_29240);

(statearr_29491[(16)] = inst_29241);

(statearr_29491[(17)] = inst_29242);

return statearr_29491;
})();
var statearr_29492_32314 = state_29368__$1;
(statearr_29492_32314[(2)] = null);

(statearr_29492_32314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (14))){
var state_29368__$1 = state_29368;
var statearr_29494_32315 = state_29368__$1;
(statearr_29494_32315[(2)] = null);

(statearr_29494_32315[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (45))){
var inst_29356 = (state_29368[(2)]);
var state_29368__$1 = state_29368;
var statearr_29495_32316 = state_29368__$1;
(statearr_29495_32316[(2)] = inst_29356);

(statearr_29495_32316[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (26))){
var inst_29295 = (state_29368[(27)]);
var inst_29352 = (state_29368[(2)]);
var inst_29353 = cljs.core.seq(inst_29295);
var state_29368__$1 = (function (){var statearr_29497 = state_29368;
(statearr_29497[(29)] = inst_29352);

return statearr_29497;
})();
if(inst_29353){
var statearr_29499_32317 = state_29368__$1;
(statearr_29499_32317[(1)] = (42));

} else {
var statearr_29500_32318 = state_29368__$1;
(statearr_29500_32318[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (16))){
var inst_29262 = (state_29368[(7)]);
var inst_29264 = cljs.core.chunked_seq_QMARK_(inst_29262);
var state_29368__$1 = state_29368;
if(inst_29264){
var statearr_29501_32321 = state_29368__$1;
(statearr_29501_32321[(1)] = (19));

} else {
var statearr_29502_32322 = state_29368__$1;
(statearr_29502_32322[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (38))){
var inst_29344 = (state_29368[(2)]);
var state_29368__$1 = state_29368;
var statearr_29505_32323 = state_29368__$1;
(statearr_29505_32323[(2)] = inst_29344);

(statearr_29505_32323[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (30))){
var state_29368__$1 = state_29368;
var statearr_29506_32324 = state_29368__$1;
(statearr_29506_32324[(2)] = null);

(statearr_29506_32324[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (10))){
var inst_29240 = (state_29368[(15)]);
var inst_29242 = (state_29368[(17)]);
var inst_29250 = cljs.core._nth(inst_29240,inst_29242);
var inst_29251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29250,(0),null);
var inst_29252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29250,(1),null);
var state_29368__$1 = (function (){var statearr_29507 = state_29368;
(statearr_29507[(24)] = inst_29251);

return statearr_29507;
})();
if(cljs.core.truth_(inst_29252)){
var statearr_29508_32330 = state_29368__$1;
(statearr_29508_32330[(1)] = (13));

} else {
var statearr_29510_32331 = state_29368__$1;
(statearr_29510_32331[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (18))){
var inst_29288 = (state_29368[(2)]);
var state_29368__$1 = state_29368;
var statearr_29511_32332 = state_29368__$1;
(statearr_29511_32332[(2)] = inst_29288);

(statearr_29511_32332[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (42))){
var state_29368__$1 = state_29368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29368__$1,(45),dchan);
} else {
if((state_val_29369 === (37))){
var inst_29325 = (state_29368[(23)]);
var inst_29334 = (state_29368[(22)]);
var inst_29230 = (state_29368[(12)]);
var inst_29334__$1 = cljs.core.first(inst_29325);
var inst_29335 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29334__$1,inst_29230,done);
var state_29368__$1 = (function (){var statearr_29516 = state_29368;
(statearr_29516[(22)] = inst_29334__$1);

return statearr_29516;
})();
if(cljs.core.truth_(inst_29335)){
var statearr_29518_32341 = state_29368__$1;
(statearr_29518_32341[(1)] = (39));

} else {
var statearr_29519_32344 = state_29368__$1;
(statearr_29519_32344[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (8))){
var inst_29242 = (state_29368[(17)]);
var inst_29241 = (state_29368[(16)]);
var inst_29244 = (inst_29242 < inst_29241);
var inst_29245 = inst_29244;
var state_29368__$1 = state_29368;
if(cljs.core.truth_(inst_29245)){
var statearr_29525_32349 = state_29368__$1;
(statearr_29525_32349[(1)] = (10));

} else {
var statearr_29526_32352 = state_29368__$1;
(statearr_29526_32352[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__27042__auto__ = null;
var cljs$core$async$mult_$_state_machine__27042__auto____0 = (function (){
var statearr_29529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29529[(0)] = cljs$core$async$mult_$_state_machine__27042__auto__);

(statearr_29529[(1)] = (1));

return statearr_29529;
});
var cljs$core$async$mult_$_state_machine__27042__auto____1 = (function (state_29368){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_29368);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e29530){var ex__27046__auto__ = e29530;
var statearr_29532_32355 = state_29368;
(statearr_29532_32355[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_29368[(4)]))){
var statearr_29534_32356 = state_29368;
(statearr_29534_32356[(1)] = cljs.core.first((state_29368[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32361 = state_29368;
state_29368 = G__32361;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27042__auto__ = function(state_29368){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27042__auto____1.call(this,state_29368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27042__auto____0;
cljs$core$async$mult_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27042__auto____1;
return cljs$core$async$mult_$_state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_29535 = f__27471__auto__();
(statearr_29535[(6)] = c__27470__auto___32181);

return statearr_29535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__29545 = arguments.length;
switch (G__29545) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_32365 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32365(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32372 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32372(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32375 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32375(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32380 = (function (m,state_map){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5520__auto__.call(null,m,state_map));
} else {
var m__5518__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5518__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32380(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32385 = (function (m,mode){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5520__auto__.call(null,m,mode));
} else {
var m__5518__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5518__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32385(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___32386 = arguments.length;
var i__5898__auto___32387 = (0);
while(true){
if((i__5898__auto___32387 < len__5897__auto___32386)){
args__5903__auto__.push((arguments[i__5898__auto___32387]));

var G__32388 = (i__5898__auto___32387 + (1));
i__5898__auto___32387 = G__32388;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29639){
var map__29640 = p__29639;
var map__29640__$1 = cljs.core.__destructure_map(map__29640);
var opts = map__29640__$1;
var statearr_29642_32389 = state;
(statearr_29642_32389[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_29643_32390 = state;
(statearr_29643_32390[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_29644_32391 = state;
(statearr_29644_32391[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29626){
var G__29627 = cljs.core.first(seq29626);
var seq29626__$1 = cljs.core.next(seq29626);
var G__29628 = cljs.core.first(seq29626__$1);
var seq29626__$2 = cljs.core.next(seq29626__$1);
var G__29629 = cljs.core.first(seq29626__$2);
var seq29626__$3 = cljs.core.next(seq29626__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29627,G__29628,G__29629,seq29626__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29670 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29671){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29671 = meta29671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29672,meta29671__$1){
var self__ = this;
var _29672__$1 = this;
return (new cljs.core.async.t_cljs$core$async29670(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29671__$1));
}));

(cljs.core.async.t_cljs$core$async29670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29672){
var self__ = this;
var _29672__$1 = this;
return self__.meta29671;
}));

(cljs.core.async.t_cljs$core$async29670.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29670.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async29670.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29670.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29670.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29670.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29670.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29670.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29671","meta29671",-664441123,null)], null);
}));

(cljs.core.async.t_cljs$core$async29670.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29670");

(cljs.core.async.t_cljs$core$async29670.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async29670");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29670.
 */
cljs.core.async.__GT_t_cljs$core$async29670 = (function cljs$core$async$__GT_t_cljs$core$async29670(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29671){
return (new cljs.core.async.t_cljs$core$async29670(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29671));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async29670(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__27470__auto___32400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_29777){
var state_val_29778 = (state_29777[(1)]);
if((state_val_29778 === (7))){
var inst_29732 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
if(cljs.core.truth_(inst_29732)){
var statearr_29784_32401 = state_29777__$1;
(statearr_29784_32401[(1)] = (8));

} else {
var statearr_29785_32402 = state_29777__$1;
(statearr_29785_32402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (20))){
var inst_29723 = (state_29777[(7)]);
var state_29777__$1 = state_29777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29777__$1,(23),out,inst_29723);
} else {
if((state_val_29778 === (1))){
var inst_29704 = calc_state();
var inst_29705 = cljs.core.__destructure_map(inst_29704);
var inst_29706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29705,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29705,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29705,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29710 = inst_29704;
var state_29777__$1 = (function (){var statearr_29789 = state_29777;
(statearr_29789[(8)] = inst_29706);

(statearr_29789[(9)] = inst_29707);

(statearr_29789[(10)] = inst_29708);

(statearr_29789[(11)] = inst_29710);

return statearr_29789;
})();
var statearr_29790_32403 = state_29777__$1;
(statearr_29790_32403[(2)] = null);

(statearr_29790_32403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (24))){
var inst_29714 = (state_29777[(12)]);
var inst_29710 = inst_29714;
var state_29777__$1 = (function (){var statearr_29791 = state_29777;
(statearr_29791[(11)] = inst_29710);

return statearr_29791;
})();
var statearr_29794_32405 = state_29777__$1;
(statearr_29794_32405[(2)] = null);

(statearr_29794_32405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (4))){
var inst_29723 = (state_29777[(7)]);
var inst_29725 = (state_29777[(13)]);
var inst_29722 = (state_29777[(2)]);
var inst_29723__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29722,(0),null);
var inst_29724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29722,(1),null);
var inst_29725__$1 = (inst_29723__$1 == null);
var state_29777__$1 = (function (){var statearr_29795 = state_29777;
(statearr_29795[(7)] = inst_29723__$1);

(statearr_29795[(14)] = inst_29724);

(statearr_29795[(13)] = inst_29725__$1);

return statearr_29795;
})();
if(cljs.core.truth_(inst_29725__$1)){
var statearr_29796_32407 = state_29777__$1;
(statearr_29796_32407[(1)] = (5));

} else {
var statearr_29797_32408 = state_29777__$1;
(statearr_29797_32408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (15))){
var inst_29715 = (state_29777[(15)]);
var inst_29747 = (state_29777[(16)]);
var inst_29747__$1 = cljs.core.empty_QMARK_(inst_29715);
var state_29777__$1 = (function (){var statearr_29798 = state_29777;
(statearr_29798[(16)] = inst_29747__$1);

return statearr_29798;
})();
if(inst_29747__$1){
var statearr_29799_32409 = state_29777__$1;
(statearr_29799_32409[(1)] = (17));

} else {
var statearr_29800_32410 = state_29777__$1;
(statearr_29800_32410[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (21))){
var inst_29714 = (state_29777[(12)]);
var inst_29710 = inst_29714;
var state_29777__$1 = (function (){var statearr_29802 = state_29777;
(statearr_29802[(11)] = inst_29710);

return statearr_29802;
})();
var statearr_29803_32411 = state_29777__$1;
(statearr_29803_32411[(2)] = null);

(statearr_29803_32411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (13))){
var inst_29739 = (state_29777[(2)]);
var inst_29740 = calc_state();
var inst_29710 = inst_29740;
var state_29777__$1 = (function (){var statearr_29804 = state_29777;
(statearr_29804[(17)] = inst_29739);

(statearr_29804[(11)] = inst_29710);

return statearr_29804;
})();
var statearr_29805_32419 = state_29777__$1;
(statearr_29805_32419[(2)] = null);

(statearr_29805_32419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (22))){
var inst_29767 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
var statearr_29806_32420 = state_29777__$1;
(statearr_29806_32420[(2)] = inst_29767);

(statearr_29806_32420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (6))){
var inst_29724 = (state_29777[(14)]);
var inst_29730 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29724,change);
var state_29777__$1 = state_29777;
var statearr_29809_32421 = state_29777__$1;
(statearr_29809_32421[(2)] = inst_29730);

(statearr_29809_32421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (25))){
var state_29777__$1 = state_29777;
var statearr_29810_32422 = state_29777__$1;
(statearr_29810_32422[(2)] = null);

(statearr_29810_32422[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (17))){
var inst_29716 = (state_29777[(18)]);
var inst_29724 = (state_29777[(14)]);
var inst_29749 = (inst_29716.cljs$core$IFn$_invoke$arity$1 ? inst_29716.cljs$core$IFn$_invoke$arity$1(inst_29724) : inst_29716.call(null,inst_29724));
var inst_29750 = cljs.core.not(inst_29749);
var state_29777__$1 = state_29777;
var statearr_29813_32423 = state_29777__$1;
(statearr_29813_32423[(2)] = inst_29750);

(statearr_29813_32423[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (3))){
var inst_29771 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29777__$1,inst_29771);
} else {
if((state_val_29778 === (12))){
var state_29777__$1 = state_29777;
var statearr_29814_32424 = state_29777__$1;
(statearr_29814_32424[(2)] = null);

(statearr_29814_32424[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (2))){
var inst_29710 = (state_29777[(11)]);
var inst_29714 = (state_29777[(12)]);
var inst_29714__$1 = cljs.core.__destructure_map(inst_29710);
var inst_29715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29714__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29714__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29714__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29777__$1 = (function (){var statearr_29815 = state_29777;
(statearr_29815[(12)] = inst_29714__$1);

(statearr_29815[(15)] = inst_29715);

(statearr_29815[(18)] = inst_29716);

return statearr_29815;
})();
return cljs.core.async.ioc_alts_BANG_(state_29777__$1,(4),inst_29717);
} else {
if((state_val_29778 === (23))){
var inst_29758 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
if(cljs.core.truth_(inst_29758)){
var statearr_29817_32425 = state_29777__$1;
(statearr_29817_32425[(1)] = (24));

} else {
var statearr_29818_32426 = state_29777__$1;
(statearr_29818_32426[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (19))){
var inst_29753 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
var statearr_29819_32427 = state_29777__$1;
(statearr_29819_32427[(2)] = inst_29753);

(statearr_29819_32427[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (11))){
var inst_29724 = (state_29777[(14)]);
var inst_29736 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_29724);
var state_29777__$1 = state_29777;
var statearr_29820_32428 = state_29777__$1;
(statearr_29820_32428[(2)] = inst_29736);

(statearr_29820_32428[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (9))){
var inst_29715 = (state_29777[(15)]);
var inst_29724 = (state_29777[(14)]);
var inst_29743 = (state_29777[(19)]);
var inst_29743__$1 = (inst_29715.cljs$core$IFn$_invoke$arity$1 ? inst_29715.cljs$core$IFn$_invoke$arity$1(inst_29724) : inst_29715.call(null,inst_29724));
var state_29777__$1 = (function (){var statearr_29825 = state_29777;
(statearr_29825[(19)] = inst_29743__$1);

return statearr_29825;
})();
if(cljs.core.truth_(inst_29743__$1)){
var statearr_29826_32429 = state_29777__$1;
(statearr_29826_32429[(1)] = (14));

} else {
var statearr_29827_32430 = state_29777__$1;
(statearr_29827_32430[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (5))){
var inst_29725 = (state_29777[(13)]);
var state_29777__$1 = state_29777;
var statearr_29829_32431 = state_29777__$1;
(statearr_29829_32431[(2)] = inst_29725);

(statearr_29829_32431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (14))){
var inst_29743 = (state_29777[(19)]);
var state_29777__$1 = state_29777;
var statearr_29830_32432 = state_29777__$1;
(statearr_29830_32432[(2)] = inst_29743);

(statearr_29830_32432[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (26))){
var inst_29763 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
var statearr_29831_32433 = state_29777__$1;
(statearr_29831_32433[(2)] = inst_29763);

(statearr_29831_32433[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (16))){
var inst_29755 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
if(cljs.core.truth_(inst_29755)){
var statearr_29832_32434 = state_29777__$1;
(statearr_29832_32434[(1)] = (20));

} else {
var statearr_29833_32435 = state_29777__$1;
(statearr_29833_32435[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (10))){
var inst_29769 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
var statearr_29836_32436 = state_29777__$1;
(statearr_29836_32436[(2)] = inst_29769);

(statearr_29836_32436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (18))){
var inst_29747 = (state_29777[(16)]);
var state_29777__$1 = state_29777;
var statearr_29837_32437 = state_29777__$1;
(statearr_29837_32437[(2)] = inst_29747);

(statearr_29837_32437[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (8))){
var inst_29723 = (state_29777[(7)]);
var inst_29734 = (inst_29723 == null);
var state_29777__$1 = state_29777;
if(cljs.core.truth_(inst_29734)){
var statearr_29838_32438 = state_29777__$1;
(statearr_29838_32438[(1)] = (11));

} else {
var statearr_29839_32439 = state_29777__$1;
(statearr_29839_32439[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__27042__auto__ = null;
var cljs$core$async$mix_$_state_machine__27042__auto____0 = (function (){
var statearr_29842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29842[(0)] = cljs$core$async$mix_$_state_machine__27042__auto__);

(statearr_29842[(1)] = (1));

return statearr_29842;
});
var cljs$core$async$mix_$_state_machine__27042__auto____1 = (function (state_29777){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_29777);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e29844){var ex__27046__auto__ = e29844;
var statearr_29845_32444 = state_29777;
(statearr_29845_32444[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_29777[(4)]))){
var statearr_29846_32445 = state_29777;
(statearr_29846_32445[(1)] = cljs.core.first((state_29777[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32446 = state_29777;
state_29777 = G__32446;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27042__auto__ = function(state_29777){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27042__auto____1.call(this,state_29777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27042__auto____0;
cljs$core$async$mix_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27042__auto____1;
return cljs$core$async$mix_$_state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_29847 = f__27471__auto__();
(statearr_29847[(6)] = c__27470__auto___32400);

return statearr_29847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_32448 = (function (p,v,ch,close_QMARK_){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5520__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5518__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_32448(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32453 = (function (p,v,ch){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5520__auto__.call(null,p,v,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5518__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_32453(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32454 = (function() {
var G__32455 = null;
var G__32455__1 = (function (p){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5520__auto__.call(null,p));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5518__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__32455__2 = (function (p,v){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5520__auto__.call(null,p,v));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5518__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__32455 = function(p,v){
switch(arguments.length){
case 1:
return G__32455__1.call(this,p);
case 2:
return G__32455__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32455.cljs$core$IFn$_invoke$arity$1 = G__32455__1;
G__32455.cljs$core$IFn$_invoke$arity$2 = G__32455__2;
return G__32455;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29874 = arguments.length;
switch (G__29874) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32454(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32454(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29887 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29888){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29888 = meta29888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29889,meta29888__$1){
var self__ = this;
var _29889__$1 = this;
return (new cljs.core.async.t_cljs$core$async29887(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29888__$1));
}));

(cljs.core.async.t_cljs$core$async29887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29889){
var self__ = this;
var _29889__$1 = this;
return self__.meta29888;
}));

(cljs.core.async.t_cljs$core$async29887.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29887.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29887.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29887.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async29887.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async29887.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async29887.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async29887.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29888","meta29888",-72268411,null)], null);
}));

(cljs.core.async.t_cljs$core$async29887.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29887.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29887");

(cljs.core.async.t_cljs$core$async29887.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async29887");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29887.
 */
cljs.core.async.__GT_t_cljs$core$async29887 = (function cljs$core$async$__GT_t_cljs$core$async29887(ch,topic_fn,buf_fn,mults,ensure_mult,meta29888){
return (new cljs.core.async.t_cljs$core$async29887(ch,topic_fn,buf_fn,mults,ensure_mult,meta29888));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__29882 = arguments.length;
switch (G__29882) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__29880_SHARP_){
if(cljs.core.truth_((p1__29880_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__29880_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__29880_SHARP_.call(null,topic)))){
return p1__29880_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__29880_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async29887(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__27470__auto___32500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_29984){
var state_val_29985 = (state_29984[(1)]);
if((state_val_29985 === (7))){
var inst_29978 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
var statearr_29989_32501 = state_29984__$1;
(statearr_29989_32501[(2)] = inst_29978);

(statearr_29989_32501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (20))){
var state_29984__$1 = state_29984;
var statearr_29992_32502 = state_29984__$1;
(statearr_29992_32502[(2)] = null);

(statearr_29992_32502[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (1))){
var state_29984__$1 = state_29984;
var statearr_29994_32503 = state_29984__$1;
(statearr_29994_32503[(2)] = null);

(statearr_29994_32503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (24))){
var inst_29959 = (state_29984[(7)]);
var inst_29970 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_29959);
var state_29984__$1 = state_29984;
var statearr_29997_32513 = state_29984__$1;
(statearr_29997_32513[(2)] = inst_29970);

(statearr_29997_32513[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (4))){
var inst_29910 = (state_29984[(8)]);
var inst_29910__$1 = (state_29984[(2)]);
var inst_29911 = (inst_29910__$1 == null);
var state_29984__$1 = (function (){var statearr_30000 = state_29984;
(statearr_30000[(8)] = inst_29910__$1);

return statearr_30000;
})();
if(cljs.core.truth_(inst_29911)){
var statearr_30001_32514 = state_29984__$1;
(statearr_30001_32514[(1)] = (5));

} else {
var statearr_30002_32515 = state_29984__$1;
(statearr_30002_32515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (15))){
var inst_29953 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
var statearr_30004_32516 = state_29984__$1;
(statearr_30004_32516[(2)] = inst_29953);

(statearr_30004_32516[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (21))){
var inst_29975 = (state_29984[(2)]);
var state_29984__$1 = (function (){var statearr_30007 = state_29984;
(statearr_30007[(9)] = inst_29975);

return statearr_30007;
})();
var statearr_30008_32517 = state_29984__$1;
(statearr_30008_32517[(2)] = null);

(statearr_30008_32517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (13))){
var inst_29935 = (state_29984[(10)]);
var inst_29937 = cljs.core.chunked_seq_QMARK_(inst_29935);
var state_29984__$1 = state_29984;
if(inst_29937){
var statearr_30011_32518 = state_29984__$1;
(statearr_30011_32518[(1)] = (16));

} else {
var statearr_30012_32519 = state_29984__$1;
(statearr_30012_32519[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (22))){
var inst_29967 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
if(cljs.core.truth_(inst_29967)){
var statearr_30014_32522 = state_29984__$1;
(statearr_30014_32522[(1)] = (23));

} else {
var statearr_30015_32524 = state_29984__$1;
(statearr_30015_32524[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (6))){
var inst_29910 = (state_29984[(8)]);
var inst_29959 = (state_29984[(7)]);
var inst_29961 = (state_29984[(11)]);
var inst_29959__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_29910) : topic_fn.call(null,inst_29910));
var inst_29960 = cljs.core.deref(mults);
var inst_29961__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29960,inst_29959__$1);
var state_29984__$1 = (function (){var statearr_30020 = state_29984;
(statearr_30020[(7)] = inst_29959__$1);

(statearr_30020[(11)] = inst_29961__$1);

return statearr_30020;
})();
if(cljs.core.truth_(inst_29961__$1)){
var statearr_30021_32525 = state_29984__$1;
(statearr_30021_32525[(1)] = (19));

} else {
var statearr_30022_32528 = state_29984__$1;
(statearr_30022_32528[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (25))){
var inst_29972 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
var statearr_30024_32530 = state_29984__$1;
(statearr_30024_32530[(2)] = inst_29972);

(statearr_30024_32530[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (17))){
var inst_29935 = (state_29984[(10)]);
var inst_29944 = cljs.core.first(inst_29935);
var inst_29945 = cljs.core.async.muxch_STAR_(inst_29944);
var inst_29946 = cljs.core.async.close_BANG_(inst_29945);
var inst_29947 = cljs.core.next(inst_29935);
var inst_29920 = inst_29947;
var inst_29921 = null;
var inst_29922 = (0);
var inst_29923 = (0);
var state_29984__$1 = (function (){var statearr_30027 = state_29984;
(statearr_30027[(12)] = inst_29946);

(statearr_30027[(13)] = inst_29920);

(statearr_30027[(14)] = inst_29921);

(statearr_30027[(15)] = inst_29922);

(statearr_30027[(16)] = inst_29923);

return statearr_30027;
})();
var statearr_30030_32536 = state_29984__$1;
(statearr_30030_32536[(2)] = null);

(statearr_30030_32536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (3))){
var inst_29980 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29984__$1,inst_29980);
} else {
if((state_val_29985 === (12))){
var inst_29955 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
var statearr_30032_32540 = state_29984__$1;
(statearr_30032_32540[(2)] = inst_29955);

(statearr_30032_32540[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (2))){
var state_29984__$1 = state_29984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29984__$1,(4),ch);
} else {
if((state_val_29985 === (23))){
var state_29984__$1 = state_29984;
var statearr_30033_32541 = state_29984__$1;
(statearr_30033_32541[(2)] = null);

(statearr_30033_32541[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (19))){
var inst_29961 = (state_29984[(11)]);
var inst_29910 = (state_29984[(8)]);
var inst_29965 = cljs.core.async.muxch_STAR_(inst_29961);
var state_29984__$1 = state_29984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29984__$1,(22),inst_29965,inst_29910);
} else {
if((state_val_29985 === (11))){
var inst_29920 = (state_29984[(13)]);
var inst_29935 = (state_29984[(10)]);
var inst_29935__$1 = cljs.core.seq(inst_29920);
var state_29984__$1 = (function (){var statearr_30037 = state_29984;
(statearr_30037[(10)] = inst_29935__$1);

return statearr_30037;
})();
if(inst_29935__$1){
var statearr_30039_32545 = state_29984__$1;
(statearr_30039_32545[(1)] = (13));

} else {
var statearr_30040_32546 = state_29984__$1;
(statearr_30040_32546[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (9))){
var inst_29957 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
var statearr_30041_32547 = state_29984__$1;
(statearr_30041_32547[(2)] = inst_29957);

(statearr_30041_32547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (5))){
var inst_29917 = cljs.core.deref(mults);
var inst_29918 = cljs.core.vals(inst_29917);
var inst_29919 = cljs.core.seq(inst_29918);
var inst_29920 = inst_29919;
var inst_29921 = null;
var inst_29922 = (0);
var inst_29923 = (0);
var state_29984__$1 = (function (){var statearr_30042 = state_29984;
(statearr_30042[(13)] = inst_29920);

(statearr_30042[(14)] = inst_29921);

(statearr_30042[(15)] = inst_29922);

(statearr_30042[(16)] = inst_29923);

return statearr_30042;
})();
var statearr_30043_32560 = state_29984__$1;
(statearr_30043_32560[(2)] = null);

(statearr_30043_32560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (14))){
var state_29984__$1 = state_29984;
var statearr_30048_32564 = state_29984__$1;
(statearr_30048_32564[(2)] = null);

(statearr_30048_32564[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (16))){
var inst_29935 = (state_29984[(10)]);
var inst_29939 = cljs.core.chunk_first(inst_29935);
var inst_29940 = cljs.core.chunk_rest(inst_29935);
var inst_29941 = cljs.core.count(inst_29939);
var inst_29920 = inst_29940;
var inst_29921 = inst_29939;
var inst_29922 = inst_29941;
var inst_29923 = (0);
var state_29984__$1 = (function (){var statearr_30053 = state_29984;
(statearr_30053[(13)] = inst_29920);

(statearr_30053[(14)] = inst_29921);

(statearr_30053[(15)] = inst_29922);

(statearr_30053[(16)] = inst_29923);

return statearr_30053;
})();
var statearr_30054_32574 = state_29984__$1;
(statearr_30054_32574[(2)] = null);

(statearr_30054_32574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (10))){
var inst_29921 = (state_29984[(14)]);
var inst_29923 = (state_29984[(16)]);
var inst_29920 = (state_29984[(13)]);
var inst_29922 = (state_29984[(15)]);
var inst_29929 = cljs.core._nth(inst_29921,inst_29923);
var inst_29930 = cljs.core.async.muxch_STAR_(inst_29929);
var inst_29931 = cljs.core.async.close_BANG_(inst_29930);
var inst_29932 = (inst_29923 + (1));
var tmp30045 = inst_29920;
var tmp30046 = inst_29922;
var tmp30047 = inst_29921;
var inst_29920__$1 = tmp30045;
var inst_29921__$1 = tmp30047;
var inst_29922__$1 = tmp30046;
var inst_29923__$1 = inst_29932;
var state_29984__$1 = (function (){var statearr_30058 = state_29984;
(statearr_30058[(17)] = inst_29931);

(statearr_30058[(13)] = inst_29920__$1);

(statearr_30058[(14)] = inst_29921__$1);

(statearr_30058[(15)] = inst_29922__$1);

(statearr_30058[(16)] = inst_29923__$1);

return statearr_30058;
})();
var statearr_30059_32581 = state_29984__$1;
(statearr_30059_32581[(2)] = null);

(statearr_30059_32581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (18))){
var inst_29950 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
var statearr_30063_32582 = state_29984__$1;
(statearr_30063_32582[(2)] = inst_29950);

(statearr_30063_32582[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (8))){
var inst_29923 = (state_29984[(16)]);
var inst_29922 = (state_29984[(15)]);
var inst_29925 = (inst_29923 < inst_29922);
var inst_29926 = inst_29925;
var state_29984__$1 = state_29984;
if(cljs.core.truth_(inst_29926)){
var statearr_30068_32587 = state_29984__$1;
(statearr_30068_32587[(1)] = (10));

} else {
var statearr_30069_32588 = state_29984__$1;
(statearr_30069_32588[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27042__auto__ = null;
var cljs$core$async$state_machine__27042__auto____0 = (function (){
var statearr_30075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30075[(0)] = cljs$core$async$state_machine__27042__auto__);

(statearr_30075[(1)] = (1));

return statearr_30075;
});
var cljs$core$async$state_machine__27042__auto____1 = (function (state_29984){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_29984);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e30076){var ex__27046__auto__ = e30076;
var statearr_30078_32590 = state_29984;
(statearr_30078_32590[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_29984[(4)]))){
var statearr_30079_32591 = state_29984;
(statearr_30079_32591[(1)] = cljs.core.first((state_29984[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32593 = state_29984;
state_29984 = G__32593;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
cljs$core$async$state_machine__27042__auto__ = function(state_29984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27042__auto____1.call(this,state_29984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27042__auto____0;
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27042__auto____1;
return cljs$core$async$state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_30085 = f__27471__auto__();
(statearr_30085[(6)] = c__27470__auto___32500);

return statearr_30085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__30102 = arguments.length;
switch (G__30102) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__30111 = arguments.length;
switch (G__30111) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__30123 = arguments.length;
switch (G__30123) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__27470__auto___32602 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_30193){
var state_val_30194 = (state_30193[(1)]);
if((state_val_30194 === (7))){
var state_30193__$1 = state_30193;
var statearr_30195_32603 = state_30193__$1;
(statearr_30195_32603[(2)] = null);

(statearr_30195_32603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (1))){
var state_30193__$1 = state_30193;
var statearr_30198_32604 = state_30193__$1;
(statearr_30198_32604[(2)] = null);

(statearr_30198_32604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (4))){
var inst_30143 = (state_30193[(7)]);
var inst_30142 = (state_30193[(8)]);
var inst_30145 = (inst_30143 < inst_30142);
var state_30193__$1 = state_30193;
if(cljs.core.truth_(inst_30145)){
var statearr_30201_32605 = state_30193__$1;
(statearr_30201_32605[(1)] = (6));

} else {
var statearr_30204_32607 = state_30193__$1;
(statearr_30204_32607[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (15))){
var inst_30178 = (state_30193[(9)]);
var inst_30183 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30178);
var state_30193__$1 = state_30193;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30193__$1,(17),out,inst_30183);
} else {
if((state_val_30194 === (13))){
var inst_30178 = (state_30193[(9)]);
var inst_30178__$1 = (state_30193[(2)]);
var inst_30179 = cljs.core.some(cljs.core.nil_QMARK_,inst_30178__$1);
var state_30193__$1 = (function (){var statearr_30206 = state_30193;
(statearr_30206[(9)] = inst_30178__$1);

return statearr_30206;
})();
if(cljs.core.truth_(inst_30179)){
var statearr_30207_32610 = state_30193__$1;
(statearr_30207_32610[(1)] = (14));

} else {
var statearr_30209_32613 = state_30193__$1;
(statearr_30209_32613[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (6))){
var state_30193__$1 = state_30193;
var statearr_30211_32625 = state_30193__$1;
(statearr_30211_32625[(2)] = null);

(statearr_30211_32625[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (17))){
var inst_30185 = (state_30193[(2)]);
var state_30193__$1 = (function (){var statearr_30220 = state_30193;
(statearr_30220[(10)] = inst_30185);

return statearr_30220;
})();
var statearr_30221_32628 = state_30193__$1;
(statearr_30221_32628[(2)] = null);

(statearr_30221_32628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (3))){
var inst_30190 = (state_30193[(2)]);
var state_30193__$1 = state_30193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30193__$1,inst_30190);
} else {
if((state_val_30194 === (12))){
var _ = (function (){var statearr_30222 = state_30193;
(statearr_30222[(4)] = cljs.core.rest((state_30193[(4)])));

return statearr_30222;
})();
var state_30193__$1 = state_30193;
var ex30219 = (state_30193__$1[(2)]);
var statearr_30223_32630 = state_30193__$1;
(statearr_30223_32630[(5)] = ex30219);


if((ex30219 instanceof Object)){
var statearr_30228_32631 = state_30193__$1;
(statearr_30228_32631[(1)] = (11));

(statearr_30228_32631[(5)] = null);

} else {
throw ex30219;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (2))){
var inst_30141 = cljs.core.reset_BANG_(dctr,cnt);
var inst_30142 = cnt;
var inst_30143 = (0);
var state_30193__$1 = (function (){var statearr_30229 = state_30193;
(statearr_30229[(11)] = inst_30141);

(statearr_30229[(8)] = inst_30142);

(statearr_30229[(7)] = inst_30143);

return statearr_30229;
})();
var statearr_30230_32635 = state_30193__$1;
(statearr_30230_32635[(2)] = null);

(statearr_30230_32635[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (11))){
var inst_30152 = (state_30193[(2)]);
var inst_30154 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30193__$1 = (function (){var statearr_30231 = state_30193;
(statearr_30231[(12)] = inst_30152);

return statearr_30231;
})();
var statearr_30232_32636 = state_30193__$1;
(statearr_30232_32636[(2)] = inst_30154);

(statearr_30232_32636[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (9))){
var inst_30143 = (state_30193[(7)]);
var _ = (function (){var statearr_30233 = state_30193;
(statearr_30233[(4)] = cljs.core.cons((12),(state_30193[(4)])));

return statearr_30233;
})();
var inst_30160 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_30143) : chs__$1.call(null,inst_30143));
var inst_30161 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_30143) : done.call(null,inst_30143));
var inst_30162 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30160,inst_30161);
var ___$1 = (function (){var statearr_30235 = state_30193;
(statearr_30235[(4)] = cljs.core.rest((state_30193[(4)])));

return statearr_30235;
})();
var state_30193__$1 = state_30193;
var statearr_30238_32641 = state_30193__$1;
(statearr_30238_32641[(2)] = inst_30162);

(statearr_30238_32641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (5))){
var inst_30174 = (state_30193[(2)]);
var state_30193__$1 = (function (){var statearr_30239 = state_30193;
(statearr_30239[(13)] = inst_30174);

return statearr_30239;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30193__$1,(13),dchan);
} else {
if((state_val_30194 === (14))){
var inst_30181 = cljs.core.async.close_BANG_(out);
var state_30193__$1 = state_30193;
var statearr_30241_32645 = state_30193__$1;
(statearr_30241_32645[(2)] = inst_30181);

(statearr_30241_32645[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (16))){
var inst_30188 = (state_30193[(2)]);
var state_30193__$1 = state_30193;
var statearr_30242_32646 = state_30193__$1;
(statearr_30242_32646[(2)] = inst_30188);

(statearr_30242_32646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (10))){
var inst_30143 = (state_30193[(7)]);
var inst_30166 = (state_30193[(2)]);
var inst_30168 = (inst_30143 + (1));
var inst_30143__$1 = inst_30168;
var state_30193__$1 = (function (){var statearr_30243 = state_30193;
(statearr_30243[(14)] = inst_30166);

(statearr_30243[(7)] = inst_30143__$1);

return statearr_30243;
})();
var statearr_30244_32650 = state_30193__$1;
(statearr_30244_32650[(2)] = null);

(statearr_30244_32650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (8))){
var inst_30172 = (state_30193[(2)]);
var state_30193__$1 = state_30193;
var statearr_30245_32651 = state_30193__$1;
(statearr_30245_32651[(2)] = inst_30172);

(statearr_30245_32651[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27042__auto__ = null;
var cljs$core$async$state_machine__27042__auto____0 = (function (){
var statearr_30246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30246[(0)] = cljs$core$async$state_machine__27042__auto__);

(statearr_30246[(1)] = (1));

return statearr_30246;
});
var cljs$core$async$state_machine__27042__auto____1 = (function (state_30193){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_30193);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e30247){var ex__27046__auto__ = e30247;
var statearr_30248_32653 = state_30193;
(statearr_30248_32653[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_30193[(4)]))){
var statearr_30251_32654 = state_30193;
(statearr_30251_32654[(1)] = cljs.core.first((state_30193[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32657 = state_30193;
state_30193 = G__32657;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
cljs$core$async$state_machine__27042__auto__ = function(state_30193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27042__auto____1.call(this,state_30193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27042__auto____0;
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27042__auto____1;
return cljs$core$async$state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_30252 = f__27471__auto__();
(statearr_30252[(6)] = c__27470__auto___32602);

return statearr_30252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__30267 = arguments.length;
switch (G__30267) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27470__auto___32662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_30336){
var state_val_30340 = (state_30336[(1)]);
if((state_val_30340 === (7))){
var inst_30283 = (state_30336[(7)]);
var inst_30284 = (state_30336[(8)]);
var inst_30283__$1 = (state_30336[(2)]);
var inst_30284__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30283__$1,(0),null);
var inst_30285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30283__$1,(1),null);
var inst_30286 = (inst_30284__$1 == null);
var state_30336__$1 = (function (){var statearr_30350 = state_30336;
(statearr_30350[(7)] = inst_30283__$1);

(statearr_30350[(8)] = inst_30284__$1);

(statearr_30350[(9)] = inst_30285);

return statearr_30350;
})();
if(cljs.core.truth_(inst_30286)){
var statearr_30351_32665 = state_30336__$1;
(statearr_30351_32665[(1)] = (8));

} else {
var statearr_30352_32667 = state_30336__$1;
(statearr_30352_32667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (1))){
var inst_30273 = cljs.core.vec(chs);
var inst_30274 = inst_30273;
var state_30336__$1 = (function (){var statearr_30353 = state_30336;
(statearr_30353[(10)] = inst_30274);

return statearr_30353;
})();
var statearr_30354_32668 = state_30336__$1;
(statearr_30354_32668[(2)] = null);

(statearr_30354_32668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (4))){
var inst_30274 = (state_30336[(10)]);
var state_30336__$1 = state_30336;
return cljs.core.async.ioc_alts_BANG_(state_30336__$1,(7),inst_30274);
} else {
if((state_val_30340 === (6))){
var inst_30308 = (state_30336[(2)]);
var state_30336__$1 = state_30336;
var statearr_30360_32669 = state_30336__$1;
(statearr_30360_32669[(2)] = inst_30308);

(statearr_30360_32669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (3))){
var inst_30310 = (state_30336[(2)]);
var state_30336__$1 = state_30336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30336__$1,inst_30310);
} else {
if((state_val_30340 === (2))){
var inst_30274 = (state_30336[(10)]);
var inst_30276 = cljs.core.count(inst_30274);
var inst_30277 = (inst_30276 > (0));
var state_30336__$1 = state_30336;
if(cljs.core.truth_(inst_30277)){
var statearr_30366_32672 = state_30336__$1;
(statearr_30366_32672[(1)] = (4));

} else {
var statearr_30370_32674 = state_30336__$1;
(statearr_30370_32674[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (11))){
var inst_30274 = (state_30336[(10)]);
var inst_30297 = (state_30336[(2)]);
var tmp30361 = inst_30274;
var inst_30274__$1 = tmp30361;
var state_30336__$1 = (function (){var statearr_30383 = state_30336;
(statearr_30383[(11)] = inst_30297);

(statearr_30383[(10)] = inst_30274__$1);

return statearr_30383;
})();
var statearr_30391_32681 = state_30336__$1;
(statearr_30391_32681[(2)] = null);

(statearr_30391_32681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (9))){
var inst_30284 = (state_30336[(8)]);
var state_30336__$1 = state_30336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30336__$1,(11),out,inst_30284);
} else {
if((state_val_30340 === (5))){
var inst_30306 = cljs.core.async.close_BANG_(out);
var state_30336__$1 = state_30336;
var statearr_30410_32682 = state_30336__$1;
(statearr_30410_32682[(2)] = inst_30306);

(statearr_30410_32682[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (10))){
var inst_30301 = (state_30336[(2)]);
var state_30336__$1 = state_30336;
var statearr_30411_32684 = state_30336__$1;
(statearr_30411_32684[(2)] = inst_30301);

(statearr_30411_32684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (8))){
var inst_30274 = (state_30336[(10)]);
var inst_30283 = (state_30336[(7)]);
var inst_30284 = (state_30336[(8)]);
var inst_30285 = (state_30336[(9)]);
var inst_30288 = (function (){var cs = inst_30274;
var vec__30279 = inst_30283;
var v = inst_30284;
var c = inst_30285;
return (function (p1__30256_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__30256_SHARP_);
});
})();
var inst_30290 = cljs.core.filterv(inst_30288,inst_30274);
var inst_30274__$1 = inst_30290;
var state_30336__$1 = (function (){var statearr_30422 = state_30336;
(statearr_30422[(10)] = inst_30274__$1);

return statearr_30422;
})();
var statearr_30423_32685 = state_30336__$1;
(statearr_30423_32685[(2)] = null);

(statearr_30423_32685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27042__auto__ = null;
var cljs$core$async$state_machine__27042__auto____0 = (function (){
var statearr_30426 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30426[(0)] = cljs$core$async$state_machine__27042__auto__);

(statearr_30426[(1)] = (1));

return statearr_30426;
});
var cljs$core$async$state_machine__27042__auto____1 = (function (state_30336){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_30336);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e30430){var ex__27046__auto__ = e30430;
var statearr_30431_32686 = state_30336;
(statearr_30431_32686[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_30336[(4)]))){
var statearr_30432_32687 = state_30336;
(statearr_30432_32687[(1)] = cljs.core.first((state_30336[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32690 = state_30336;
state_30336 = G__32690;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
cljs$core$async$state_machine__27042__auto__ = function(state_30336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27042__auto____1.call(this,state_30336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27042__auto____0;
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27042__auto____1;
return cljs$core$async$state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_30433 = f__27471__auto__();
(statearr_30433[(6)] = c__27470__auto___32662);

return statearr_30433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__30442 = arguments.length;
switch (G__30442) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27470__auto___32703 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_30478){
var state_val_30479 = (state_30478[(1)]);
if((state_val_30479 === (7))){
var inst_30460 = (state_30478[(7)]);
var inst_30460__$1 = (state_30478[(2)]);
var inst_30461 = (inst_30460__$1 == null);
var inst_30462 = cljs.core.not(inst_30461);
var state_30478__$1 = (function (){var statearr_30484 = state_30478;
(statearr_30484[(7)] = inst_30460__$1);

return statearr_30484;
})();
if(inst_30462){
var statearr_30485_32704 = state_30478__$1;
(statearr_30485_32704[(1)] = (8));

} else {
var statearr_30486_32705 = state_30478__$1;
(statearr_30486_32705[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (1))){
var inst_30454 = (0);
var state_30478__$1 = (function (){var statearr_30487 = state_30478;
(statearr_30487[(8)] = inst_30454);

return statearr_30487;
})();
var statearr_30488_32707 = state_30478__$1;
(statearr_30488_32707[(2)] = null);

(statearr_30488_32707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (4))){
var state_30478__$1 = state_30478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30478__$1,(7),ch);
} else {
if((state_val_30479 === (6))){
var inst_30473 = (state_30478[(2)]);
var state_30478__$1 = state_30478;
var statearr_30489_32710 = state_30478__$1;
(statearr_30489_32710[(2)] = inst_30473);

(statearr_30489_32710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (3))){
var inst_30475 = (state_30478[(2)]);
var inst_30476 = cljs.core.async.close_BANG_(out);
var state_30478__$1 = (function (){var statearr_30490 = state_30478;
(statearr_30490[(9)] = inst_30475);

return statearr_30490;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30478__$1,inst_30476);
} else {
if((state_val_30479 === (2))){
var inst_30454 = (state_30478[(8)]);
var inst_30456 = (inst_30454 < n);
var state_30478__$1 = state_30478;
if(cljs.core.truth_(inst_30456)){
var statearr_30493_32713 = state_30478__$1;
(statearr_30493_32713[(1)] = (4));

} else {
var statearr_30494_32714 = state_30478__$1;
(statearr_30494_32714[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (11))){
var inst_30454 = (state_30478[(8)]);
var inst_30465 = (state_30478[(2)]);
var inst_30466 = (inst_30454 + (1));
var inst_30454__$1 = inst_30466;
var state_30478__$1 = (function (){var statearr_30495 = state_30478;
(statearr_30495[(10)] = inst_30465);

(statearr_30495[(8)] = inst_30454__$1);

return statearr_30495;
})();
var statearr_30496_32716 = state_30478__$1;
(statearr_30496_32716[(2)] = null);

(statearr_30496_32716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (9))){
var state_30478__$1 = state_30478;
var statearr_30497_32717 = state_30478__$1;
(statearr_30497_32717[(2)] = null);

(statearr_30497_32717[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (5))){
var state_30478__$1 = state_30478;
var statearr_30502_32718 = state_30478__$1;
(statearr_30502_32718[(2)] = null);

(statearr_30502_32718[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (10))){
var inst_30470 = (state_30478[(2)]);
var state_30478__$1 = state_30478;
var statearr_30503_32719 = state_30478__$1;
(statearr_30503_32719[(2)] = inst_30470);

(statearr_30503_32719[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (8))){
var inst_30460 = (state_30478[(7)]);
var state_30478__$1 = state_30478;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30478__$1,(11),out,inst_30460);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27042__auto__ = null;
var cljs$core$async$state_machine__27042__auto____0 = (function (){
var statearr_30506 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30506[(0)] = cljs$core$async$state_machine__27042__auto__);

(statearr_30506[(1)] = (1));

return statearr_30506;
});
var cljs$core$async$state_machine__27042__auto____1 = (function (state_30478){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_30478);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e30507){var ex__27046__auto__ = e30507;
var statearr_30508_32720 = state_30478;
(statearr_30508_32720[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_30478[(4)]))){
var statearr_30512_32721 = state_30478;
(statearr_30512_32721[(1)] = cljs.core.first((state_30478[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32722 = state_30478;
state_30478 = G__32722;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
cljs$core$async$state_machine__27042__auto__ = function(state_30478){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27042__auto____1.call(this,state_30478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27042__auto____0;
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27042__auto____1;
return cljs$core$async$state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_30522 = f__27471__auto__();
(statearr_30522[(6)] = c__27470__auto___32703);

return statearr_30522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30568 = (function (f,ch,meta30539,_,fn1,meta30569){
this.f = f;
this.ch = ch;
this.meta30539 = meta30539;
this._ = _;
this.fn1 = fn1;
this.meta30569 = meta30569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30570,meta30569__$1){
var self__ = this;
var _30570__$1 = this;
return (new cljs.core.async.t_cljs$core$async30568(self__.f,self__.ch,self__.meta30539,self__._,self__.fn1,meta30569__$1));
}));

(cljs.core.async.t_cljs$core$async30568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30570){
var self__ = this;
var _30570__$1 = this;
return self__.meta30569;
}));

(cljs.core.async.t_cljs$core$async30568.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30568.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async30568.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30568.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__30525_SHARP_){
var G__30595 = (((p1__30525_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__30525_SHARP_) : self__.f.call(null,p1__30525_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__30595) : f1.call(null,G__30595));
});
}));

(cljs.core.async.t_cljs$core$async30568.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30539","meta30539",-1836847384,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30538","cljs.core.async/t_cljs$core$async30538",245188176,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30569","meta30569",738706835,null)], null);
}));

(cljs.core.async.t_cljs$core$async30568.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30568");

(cljs.core.async.t_cljs$core$async30568.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async30568");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30568.
 */
cljs.core.async.__GT_t_cljs$core$async30568 = (function cljs$core$async$__GT_t_cljs$core$async30568(f,ch,meta30539,_,fn1,meta30569){
return (new cljs.core.async.t_cljs$core$async30568(f,ch,meta30539,_,fn1,meta30569));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30538 = (function (f,ch,meta30539){
this.f = f;
this.ch = ch;
this.meta30539 = meta30539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30540,meta30539__$1){
var self__ = this;
var _30540__$1 = this;
return (new cljs.core.async.t_cljs$core$async30538(self__.f,self__.ch,meta30539__$1));
}));

(cljs.core.async.t_cljs$core$async30538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30540){
var self__ = this;
var _30540__$1 = this;
return self__.meta30539;
}));

(cljs.core.async.t_cljs$core$async30538.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30538.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30538.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30538.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30538.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async30568(self__.f,self__.ch,self__.meta30539,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5160__auto__ = ret;
if(cljs.core.truth_(and__5160__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5160__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__30612 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__30612) : self__.f.call(null,G__30612));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async30538.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30538.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async30538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30539","meta30539",-1836847384,null)], null);
}));

(cljs.core.async.t_cljs$core$async30538.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30538");

(cljs.core.async.t_cljs$core$async30538.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async30538");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30538.
 */
cljs.core.async.__GT_t_cljs$core$async30538 = (function cljs$core$async$__GT_t_cljs$core$async30538(f,ch,meta30539){
return (new cljs.core.async.t_cljs$core$async30538(f,ch,meta30539));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async30538(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30661 = (function (f,ch,meta30662){
this.f = f;
this.ch = ch;
this.meta30662 = meta30662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30663,meta30662__$1){
var self__ = this;
var _30663__$1 = this;
return (new cljs.core.async.t_cljs$core$async30661(self__.f,self__.ch,meta30662__$1));
}));

(cljs.core.async.t_cljs$core$async30661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30663){
var self__ = this;
var _30663__$1 = this;
return self__.meta30662;
}));

(cljs.core.async.t_cljs$core$async30661.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30661.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30661.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30661.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30661.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30661.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async30661.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30662","meta30662",818610689,null)], null);
}));

(cljs.core.async.t_cljs$core$async30661.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30661");

(cljs.core.async.t_cljs$core$async30661.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async30661");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30661.
 */
cljs.core.async.__GT_t_cljs$core$async30661 = (function cljs$core$async$__GT_t_cljs$core$async30661(f,ch,meta30662){
return (new cljs.core.async.t_cljs$core$async30661(f,ch,meta30662));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async30661(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30740 = (function (p,ch,meta30741){
this.p = p;
this.ch = ch;
this.meta30741 = meta30741;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30742,meta30741__$1){
var self__ = this;
var _30742__$1 = this;
return (new cljs.core.async.t_cljs$core$async30740(self__.p,self__.ch,meta30741__$1));
}));

(cljs.core.async.t_cljs$core$async30740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30742){
var self__ = this;
var _30742__$1 = this;
return self__.meta30741;
}));

(cljs.core.async.t_cljs$core$async30740.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30740.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30740.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30740.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30740.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30740.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30740.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async30740.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30741","meta30741",-686469169,null)], null);
}));

(cljs.core.async.t_cljs$core$async30740.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30740.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30740");

(cljs.core.async.t_cljs$core$async30740.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async30740");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30740.
 */
cljs.core.async.__GT_t_cljs$core$async30740 = (function cljs$core$async$__GT_t_cljs$core$async30740(p,ch,meta30741){
return (new cljs.core.async.t_cljs$core$async30740(p,ch,meta30741));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async30740(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__30765 = arguments.length;
switch (G__30765) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27470__auto___32770 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_30793){
var state_val_30794 = (state_30793[(1)]);
if((state_val_30794 === (7))){
var inst_30788 = (state_30793[(2)]);
var state_30793__$1 = state_30793;
var statearr_30800_32772 = state_30793__$1;
(statearr_30800_32772[(2)] = inst_30788);

(statearr_30800_32772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30794 === (1))){
var state_30793__$1 = state_30793;
var statearr_30806_32773 = state_30793__$1;
(statearr_30806_32773[(2)] = null);

(statearr_30806_32773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30794 === (4))){
var inst_30773 = (state_30793[(7)]);
var inst_30773__$1 = (state_30793[(2)]);
var inst_30774 = (inst_30773__$1 == null);
var state_30793__$1 = (function (){var statearr_30814 = state_30793;
(statearr_30814[(7)] = inst_30773__$1);

return statearr_30814;
})();
if(cljs.core.truth_(inst_30774)){
var statearr_30816_32777 = state_30793__$1;
(statearr_30816_32777[(1)] = (5));

} else {
var statearr_30817_32778 = state_30793__$1;
(statearr_30817_32778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30794 === (6))){
var inst_30773 = (state_30793[(7)]);
var inst_30778 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30773) : p.call(null,inst_30773));
var state_30793__$1 = state_30793;
if(cljs.core.truth_(inst_30778)){
var statearr_30821_32779 = state_30793__$1;
(statearr_30821_32779[(1)] = (8));

} else {
var statearr_30822_32780 = state_30793__$1;
(statearr_30822_32780[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30794 === (3))){
var inst_30791 = (state_30793[(2)]);
var state_30793__$1 = state_30793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30793__$1,inst_30791);
} else {
if((state_val_30794 === (2))){
var state_30793__$1 = state_30793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30793__$1,(4),ch);
} else {
if((state_val_30794 === (11))){
var inst_30781 = (state_30793[(2)]);
var state_30793__$1 = state_30793;
var statearr_30828_32784 = state_30793__$1;
(statearr_30828_32784[(2)] = inst_30781);

(statearr_30828_32784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30794 === (9))){
var state_30793__$1 = state_30793;
var statearr_30829_32785 = state_30793__$1;
(statearr_30829_32785[(2)] = null);

(statearr_30829_32785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30794 === (5))){
var inst_30776 = cljs.core.async.close_BANG_(out);
var state_30793__$1 = state_30793;
var statearr_30832_32786 = state_30793__$1;
(statearr_30832_32786[(2)] = inst_30776);

(statearr_30832_32786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30794 === (10))){
var inst_30784 = (state_30793[(2)]);
var state_30793__$1 = (function (){var statearr_30833 = state_30793;
(statearr_30833[(8)] = inst_30784);

return statearr_30833;
})();
var statearr_30836_32789 = state_30793__$1;
(statearr_30836_32789[(2)] = null);

(statearr_30836_32789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30794 === (8))){
var inst_30773 = (state_30793[(7)]);
var state_30793__$1 = state_30793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30793__$1,(11),out,inst_30773);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27042__auto__ = null;
var cljs$core$async$state_machine__27042__auto____0 = (function (){
var statearr_30837 = [null,null,null,null,null,null,null,null,null];
(statearr_30837[(0)] = cljs$core$async$state_machine__27042__auto__);

(statearr_30837[(1)] = (1));

return statearr_30837;
});
var cljs$core$async$state_machine__27042__auto____1 = (function (state_30793){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_30793);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e30843){var ex__27046__auto__ = e30843;
var statearr_30846_32793 = state_30793;
(statearr_30846_32793[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_30793[(4)]))){
var statearr_30847_32794 = state_30793;
(statearr_30847_32794[(1)] = cljs.core.first((state_30793[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32795 = state_30793;
state_30793 = G__32795;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
cljs$core$async$state_machine__27042__auto__ = function(state_30793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27042__auto____1.call(this,state_30793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27042__auto____0;
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27042__auto____1;
return cljs$core$async$state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_30853 = f__27471__auto__();
(statearr_30853[(6)] = c__27470__auto___32770);

return statearr_30853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30862 = arguments.length;
switch (G__30862) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_30947){
var state_val_30948 = (state_30947[(1)]);
if((state_val_30948 === (7))){
var inst_30941 = (state_30947[(2)]);
var state_30947__$1 = state_30947;
var statearr_30987_32803 = state_30947__$1;
(statearr_30987_32803[(2)] = inst_30941);

(statearr_30987_32803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30948 === (20))){
var inst_30905 = (state_30947[(7)]);
var inst_30916 = (state_30947[(2)]);
var inst_30919 = cljs.core.next(inst_30905);
var inst_30884 = inst_30919;
var inst_30885 = null;
var inst_30886 = (0);
var inst_30888 = (0);
var state_30947__$1 = (function (){var statearr_30992 = state_30947;
(statearr_30992[(8)] = inst_30916);

(statearr_30992[(9)] = inst_30884);

(statearr_30992[(10)] = inst_30885);

(statearr_30992[(11)] = inst_30886);

(statearr_30992[(12)] = inst_30888);

return statearr_30992;
})();
var statearr_30995_32809 = state_30947__$1;
(statearr_30995_32809[(2)] = null);

(statearr_30995_32809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30948 === (1))){
var state_30947__$1 = state_30947;
var statearr_30996_32812 = state_30947__$1;
(statearr_30996_32812[(2)] = null);

(statearr_30996_32812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30948 === (4))){
var inst_30872 = (state_30947[(13)]);
var inst_30872__$1 = (state_30947[(2)]);
var inst_30873 = (inst_30872__$1 == null);
var state_30947__$1 = (function (){var statearr_30999 = state_30947;
(statearr_30999[(13)] = inst_30872__$1);

return statearr_30999;
})();
if(cljs.core.truth_(inst_30873)){
var statearr_31004_32818 = state_30947__$1;
(statearr_31004_32818[(1)] = (5));

} else {
var statearr_31010_32819 = state_30947__$1;
(statearr_31010_32819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30948 === (15))){
var state_30947__$1 = state_30947;
var statearr_31017_32822 = state_30947__$1;
(statearr_31017_32822[(2)] = null);

(statearr_31017_32822[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30948 === (21))){
var state_30947__$1 = state_30947;
var statearr_31020_32826 = state_30947__$1;
(statearr_31020_32826[(2)] = null);

(statearr_31020_32826[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30948 === (13))){
var inst_30888 = (state_30947[(12)]);
var inst_30884 = (state_30947[(9)]);
var inst_30885 = (state_30947[(10)]);
var inst_30886 = (state_30947[(11)]);
var inst_30899 = (state_30947[(2)]);
var inst_30900 = (inst_30888 + (1));
var tmp31014 = inst_30884;
var tmp31015 = inst_30885;
var tmp31016 = inst_30886;
var inst_30884__$1 = tmp31014;
var inst_30885__$1 = tmp31015;
var inst_30886__$1 = tmp31016;
var inst_30888__$1 = inst_30900;
var state_30947__$1 = (function (){var statearr_31026 = state_30947;
(statearr_31026[(14)] = inst_30899);

(statearr_31026[(9)] = inst_30884__$1);

(statearr_31026[(10)] = inst_30885__$1);

(statearr_31026[(11)] = inst_30886__$1);

(statearr_31026[(12)] = inst_30888__$1);

return statearr_31026;
})();
var statearr_31027_32829 = state_30947__$1;
(statearr_31027_32829[(2)] = null);

(statearr_31027_32829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30948 === (22))){
var state_30947__$1 = state_30947;
var statearr_31028_32831 = state_30947__$1;
(statearr_31028_32831[(2)] = null);

(statearr_31028_32831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30948 === (6))){
var inst_30872 = (state_30947[(13)]);
var inst_30881 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30872) : f.call(null,inst_30872));
var inst_30882 = cljs.core.seq(inst_30881);
var inst_30884 = inst_30882;
var inst_30885 = null;
var inst_30886 = (0);
var inst_30888 = (0);
var state_30947__$1 = (function (){var statearr_31029 = state_30947;
(statearr_31029[(9)] = inst_30884);

(statearr_31029[(10)] = inst_30885);

(statearr_31029[(11)] = inst_30886);

(statearr_31029[(12)] = inst_30888);

return statearr_31029;
})();
var statearr_31030_32849 = state_30947__$1;
(statearr_31030_32849[(2)] = null);

(statearr_31030_32849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30948 === (17))){
var inst_30905 = (state_30947[(7)]);
var inst_30909 = cljs.core.chunk_first(inst_30905);
var inst_30910 = cljs.core.chunk_rest(inst_30905);
var inst_30911 = cljs.core.count(inst_30909);
var inst_30884 = inst_30910;
var inst_30885 = inst_30909;
var inst_30886 = inst_30911;
var inst_30888 = (0);
var state_30947__$1 = (function (){var statearr_31035 = state_30947;
(statearr_31035[(9)] = inst_30884);

(statearr_31035[(10)] = inst_30885);

(statearr_31035[(11)] = inst_30886);

(statearr_31035[(12)] = inst_30888);

return statearr_31035;
})();
var statearr_31037_32851 = state_30947__$1;
(statearr_31037_32851[(2)] = null);

(statearr_31037_32851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30948 === (3))){
var inst_30944 = (state_30947[(2)]);
var state_30947__$1 = state_30947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30947__$1,inst_30944);
} else {
if((state_val_30948 === (12))){
var inst_30928 = (state_30947[(2)]);
var state_30947__$1 = state_30947;
var statearr_31040_32855 = state_30947__$1;
(statearr_31040_32855[(2)] = inst_30928);

(statearr_31040_32855[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30948 === (2))){
var state_30947__$1 = state_30947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30947__$1,(4),in$);
} else {
if((state_val_30948 === (23))){
var inst_30939 = (state_30947[(2)]);
var state_30947__$1 = state_30947;
var statearr_31045_32856 = state_30947__$1;
(statearr_31045_32856[(2)] = inst_30939);

(statearr_31045_32856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30948 === (19))){
var inst_30922 = (state_30947[(2)]);
var state_30947__$1 = state_30947;
var statearr_31047_32859 = state_30947__$1;
(statearr_31047_32859[(2)] = inst_30922);

(statearr_31047_32859[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30948 === (11))){
var inst_30884 = (state_30947[(9)]);
var inst_30905 = (state_30947[(7)]);
var inst_30905__$1 = cljs.core.seq(inst_30884);
var state_30947__$1 = (function (){var statearr_31049 = state_30947;
(statearr_31049[(7)] = inst_30905__$1);

return statearr_31049;
})();
if(inst_30905__$1){
var statearr_31052_32861 = state_30947__$1;
(statearr_31052_32861[(1)] = (14));

} else {
var statearr_31053_32862 = state_30947__$1;
(statearr_31053_32862[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30948 === (9))){
var inst_30930 = (state_30947[(2)]);
var inst_30934 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_30947__$1 = (function (){var statearr_31055 = state_30947;
(statearr_31055[(15)] = inst_30930);

return statearr_31055;
})();
if(cljs.core.truth_(inst_30934)){
var statearr_31056_32864 = state_30947__$1;
(statearr_31056_32864[(1)] = (21));

} else {
var statearr_31057_32866 = state_30947__$1;
(statearr_31057_32866[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30948 === (5))){
var inst_30875 = cljs.core.async.close_BANG_(out);
var state_30947__$1 = state_30947;
var statearr_31062_32868 = state_30947__$1;
(statearr_31062_32868[(2)] = inst_30875);

(statearr_31062_32868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30948 === (14))){
var inst_30905 = (state_30947[(7)]);
var inst_30907 = cljs.core.chunked_seq_QMARK_(inst_30905);
var state_30947__$1 = state_30947;
if(inst_30907){
var statearr_31066_32869 = state_30947__$1;
(statearr_31066_32869[(1)] = (17));

} else {
var statearr_31069_32870 = state_30947__$1;
(statearr_31069_32870[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30948 === (16))){
var inst_30926 = (state_30947[(2)]);
var state_30947__$1 = state_30947;
var statearr_31070_32872 = state_30947__$1;
(statearr_31070_32872[(2)] = inst_30926);

(statearr_31070_32872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30948 === (10))){
var inst_30885 = (state_30947[(10)]);
var inst_30888 = (state_30947[(12)]);
var inst_30893 = cljs.core._nth(inst_30885,inst_30888);
var state_30947__$1 = state_30947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30947__$1,(13),out,inst_30893);
} else {
if((state_val_30948 === (18))){
var inst_30905 = (state_30947[(7)]);
var inst_30914 = cljs.core.first(inst_30905);
var state_30947__$1 = state_30947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30947__$1,(20),out,inst_30914);
} else {
if((state_val_30948 === (8))){
var inst_30888 = (state_30947[(12)]);
var inst_30886 = (state_30947[(11)]);
var inst_30890 = (inst_30888 < inst_30886);
var inst_30891 = inst_30890;
var state_30947__$1 = state_30947;
if(cljs.core.truth_(inst_30891)){
var statearr_31071_32875 = state_30947__$1;
(statearr_31071_32875[(1)] = (10));

} else {
var statearr_31073_32876 = state_30947__$1;
(statearr_31073_32876[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27042__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27042__auto____0 = (function (){
var statearr_31074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31074[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27042__auto__);

(statearr_31074[(1)] = (1));

return statearr_31074;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27042__auto____1 = (function (state_30947){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_30947);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e31077){var ex__27046__auto__ = e31077;
var statearr_31078_32879 = state_30947;
(statearr_31078_32879[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_30947[(4)]))){
var statearr_31079_32884 = state_30947;
(statearr_31079_32884[(1)] = cljs.core.first((state_30947[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32885 = state_30947;
state_30947 = G__32885;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27042__auto__ = function(state_30947){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27042__auto____1.call(this,state_30947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27042__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27042__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_31086 = f__27471__auto__();
(statearr_31086[(6)] = c__27470__auto__);

return statearr_31086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));

return c__27470__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31089 = arguments.length;
switch (G__31089) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31092 = arguments.length;
switch (G__31092) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31098 = arguments.length;
switch (G__31098) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27470__auto___32895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_31131){
var state_val_31133 = (state_31131[(1)]);
if((state_val_31133 === (7))){
var inst_31124 = (state_31131[(2)]);
var state_31131__$1 = state_31131;
var statearr_31143_32897 = state_31131__$1;
(statearr_31143_32897[(2)] = inst_31124);

(statearr_31143_32897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (1))){
var inst_31103 = null;
var state_31131__$1 = (function (){var statearr_31147 = state_31131;
(statearr_31147[(7)] = inst_31103);

return statearr_31147;
})();
var statearr_31148_32898 = state_31131__$1;
(statearr_31148_32898[(2)] = null);

(statearr_31148_32898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (4))){
var inst_31108 = (state_31131[(8)]);
var inst_31108__$1 = (state_31131[(2)]);
var inst_31109 = (inst_31108__$1 == null);
var inst_31110 = cljs.core.not(inst_31109);
var state_31131__$1 = (function (){var statearr_31150 = state_31131;
(statearr_31150[(8)] = inst_31108__$1);

return statearr_31150;
})();
if(inst_31110){
var statearr_31152_32902 = state_31131__$1;
(statearr_31152_32902[(1)] = (5));

} else {
var statearr_31153_32903 = state_31131__$1;
(statearr_31153_32903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (6))){
var state_31131__$1 = state_31131;
var statearr_31154_32904 = state_31131__$1;
(statearr_31154_32904[(2)] = null);

(statearr_31154_32904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (3))){
var inst_31126 = (state_31131[(2)]);
var inst_31127 = cljs.core.async.close_BANG_(out);
var state_31131__$1 = (function (){var statearr_31158 = state_31131;
(statearr_31158[(9)] = inst_31126);

return statearr_31158;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31131__$1,inst_31127);
} else {
if((state_val_31133 === (2))){
var state_31131__$1 = state_31131;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31131__$1,(4),ch);
} else {
if((state_val_31133 === (11))){
var inst_31108 = (state_31131[(8)]);
var inst_31117 = (state_31131[(2)]);
var inst_31103 = inst_31108;
var state_31131__$1 = (function (){var statearr_31159 = state_31131;
(statearr_31159[(10)] = inst_31117);

(statearr_31159[(7)] = inst_31103);

return statearr_31159;
})();
var statearr_31160_32908 = state_31131__$1;
(statearr_31160_32908[(2)] = null);

(statearr_31160_32908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (9))){
var inst_31108 = (state_31131[(8)]);
var state_31131__$1 = state_31131;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31131__$1,(11),out,inst_31108);
} else {
if((state_val_31133 === (5))){
var inst_31108 = (state_31131[(8)]);
var inst_31103 = (state_31131[(7)]);
var inst_31112 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31108,inst_31103);
var state_31131__$1 = state_31131;
if(inst_31112){
var statearr_31164_32911 = state_31131__$1;
(statearr_31164_32911[(1)] = (8));

} else {
var statearr_31165_32912 = state_31131__$1;
(statearr_31165_32912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (10))){
var inst_31120 = (state_31131[(2)]);
var state_31131__$1 = state_31131;
var statearr_31166_32914 = state_31131__$1;
(statearr_31166_32914[(2)] = inst_31120);

(statearr_31166_32914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (8))){
var inst_31103 = (state_31131[(7)]);
var tmp31163 = inst_31103;
var inst_31103__$1 = tmp31163;
var state_31131__$1 = (function (){var statearr_31169 = state_31131;
(statearr_31169[(7)] = inst_31103__$1);

return statearr_31169;
})();
var statearr_31170_32915 = state_31131__$1;
(statearr_31170_32915[(2)] = null);

(statearr_31170_32915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27042__auto__ = null;
var cljs$core$async$state_machine__27042__auto____0 = (function (){
var statearr_31172 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31172[(0)] = cljs$core$async$state_machine__27042__auto__);

(statearr_31172[(1)] = (1));

return statearr_31172;
});
var cljs$core$async$state_machine__27042__auto____1 = (function (state_31131){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_31131);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e31173){var ex__27046__auto__ = e31173;
var statearr_31174_32919 = state_31131;
(statearr_31174_32919[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_31131[(4)]))){
var statearr_31177_32920 = state_31131;
(statearr_31177_32920[(1)] = cljs.core.first((state_31131[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32923 = state_31131;
state_31131 = G__32923;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
cljs$core$async$state_machine__27042__auto__ = function(state_31131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27042__auto____1.call(this,state_31131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27042__auto____0;
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27042__auto____1;
return cljs$core$async$state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_31185 = f__27471__auto__();
(statearr_31185[(6)] = c__27470__auto___32895);

return statearr_31185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31195 = arguments.length;
switch (G__31195) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27470__auto___32938 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_31277){
var state_val_31278 = (state_31277[(1)]);
if((state_val_31278 === (7))){
var inst_31273 = (state_31277[(2)]);
var state_31277__$1 = state_31277;
var statearr_31279_32949 = state_31277__$1;
(statearr_31279_32949[(2)] = inst_31273);

(statearr_31279_32949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (1))){
var inst_31230 = (new Array(n));
var inst_31231 = inst_31230;
var inst_31232 = (0);
var state_31277__$1 = (function (){var statearr_31282 = state_31277;
(statearr_31282[(7)] = inst_31231);

(statearr_31282[(8)] = inst_31232);

return statearr_31282;
})();
var statearr_31283_32955 = state_31277__$1;
(statearr_31283_32955[(2)] = null);

(statearr_31283_32955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (4))){
var inst_31235 = (state_31277[(9)]);
var inst_31235__$1 = (state_31277[(2)]);
var inst_31239 = (inst_31235__$1 == null);
var inst_31240 = cljs.core.not(inst_31239);
var state_31277__$1 = (function (){var statearr_31284 = state_31277;
(statearr_31284[(9)] = inst_31235__$1);

return statearr_31284;
})();
if(inst_31240){
var statearr_31285_32956 = state_31277__$1;
(statearr_31285_32956[(1)] = (5));

} else {
var statearr_31287_32957 = state_31277__$1;
(statearr_31287_32957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (15))){
var inst_31265 = (state_31277[(2)]);
var state_31277__$1 = state_31277;
var statearr_31289_32961 = state_31277__$1;
(statearr_31289_32961[(2)] = inst_31265);

(statearr_31289_32961[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (13))){
var state_31277__$1 = state_31277;
var statearr_31291_32962 = state_31277__$1;
(statearr_31291_32962[(2)] = null);

(statearr_31291_32962[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (6))){
var inst_31232 = (state_31277[(8)]);
var inst_31258 = (inst_31232 > (0));
var state_31277__$1 = state_31277;
if(cljs.core.truth_(inst_31258)){
var statearr_31292_32966 = state_31277__$1;
(statearr_31292_32966[(1)] = (12));

} else {
var statearr_31293_32968 = state_31277__$1;
(statearr_31293_32968[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (3))){
var inst_31275 = (state_31277[(2)]);
var state_31277__$1 = state_31277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31277__$1,inst_31275);
} else {
if((state_val_31278 === (12))){
var inst_31231 = (state_31277[(7)]);
var inst_31263 = cljs.core.vec(inst_31231);
var state_31277__$1 = state_31277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31277__$1,(15),out,inst_31263);
} else {
if((state_val_31278 === (2))){
var state_31277__$1 = state_31277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31277__$1,(4),ch);
} else {
if((state_val_31278 === (11))){
var inst_31252 = (state_31277[(2)]);
var inst_31253 = (new Array(n));
var inst_31231 = inst_31253;
var inst_31232 = (0);
var state_31277__$1 = (function (){var statearr_31315 = state_31277;
(statearr_31315[(10)] = inst_31252);

(statearr_31315[(7)] = inst_31231);

(statearr_31315[(8)] = inst_31232);

return statearr_31315;
})();
var statearr_31316_32971 = state_31277__$1;
(statearr_31316_32971[(2)] = null);

(statearr_31316_32971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (9))){
var inst_31231 = (state_31277[(7)]);
var inst_31250 = cljs.core.vec(inst_31231);
var state_31277__$1 = state_31277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31277__$1,(11),out,inst_31250);
} else {
if((state_val_31278 === (5))){
var inst_31231 = (state_31277[(7)]);
var inst_31232 = (state_31277[(8)]);
var inst_31235 = (state_31277[(9)]);
var inst_31243 = (state_31277[(11)]);
var inst_31242 = (inst_31231[inst_31232] = inst_31235);
var inst_31243__$1 = (inst_31232 + (1));
var inst_31244 = (inst_31243__$1 < n);
var state_31277__$1 = (function (){var statearr_31317 = state_31277;
(statearr_31317[(12)] = inst_31242);

(statearr_31317[(11)] = inst_31243__$1);

return statearr_31317;
})();
if(cljs.core.truth_(inst_31244)){
var statearr_31319_32979 = state_31277__$1;
(statearr_31319_32979[(1)] = (8));

} else {
var statearr_31320_32980 = state_31277__$1;
(statearr_31320_32980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (14))){
var inst_31268 = (state_31277[(2)]);
var inst_31271 = cljs.core.async.close_BANG_(out);
var state_31277__$1 = (function (){var statearr_31322 = state_31277;
(statearr_31322[(13)] = inst_31268);

return statearr_31322;
})();
var statearr_31329_32981 = state_31277__$1;
(statearr_31329_32981[(2)] = inst_31271);

(statearr_31329_32981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (10))){
var inst_31256 = (state_31277[(2)]);
var state_31277__$1 = state_31277;
var statearr_31330_32982 = state_31277__$1;
(statearr_31330_32982[(2)] = inst_31256);

(statearr_31330_32982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (8))){
var inst_31231 = (state_31277[(7)]);
var inst_31243 = (state_31277[(11)]);
var tmp31321 = inst_31231;
var inst_31231__$1 = tmp31321;
var inst_31232 = inst_31243;
var state_31277__$1 = (function (){var statearr_31336 = state_31277;
(statearr_31336[(7)] = inst_31231__$1);

(statearr_31336[(8)] = inst_31232);

return statearr_31336;
})();
var statearr_31337_32986 = state_31277__$1;
(statearr_31337_32986[(2)] = null);

(statearr_31337_32986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27042__auto__ = null;
var cljs$core$async$state_machine__27042__auto____0 = (function (){
var statearr_31351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31351[(0)] = cljs$core$async$state_machine__27042__auto__);

(statearr_31351[(1)] = (1));

return statearr_31351;
});
var cljs$core$async$state_machine__27042__auto____1 = (function (state_31277){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_31277);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e31392){var ex__27046__auto__ = e31392;
var statearr_31397_32987 = state_31277;
(statearr_31397_32987[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_31277[(4)]))){
var statearr_31398_32988 = state_31277;
(statearr_31398_32988[(1)] = cljs.core.first((state_31277[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32989 = state_31277;
state_31277 = G__32989;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
cljs$core$async$state_machine__27042__auto__ = function(state_31277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27042__auto____1.call(this,state_31277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27042__auto____0;
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27042__auto____1;
return cljs$core$async$state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_31399 = f__27471__auto__();
(statearr_31399[(6)] = c__27470__auto___32938);

return statearr_31399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31431 = arguments.length;
switch (G__31431) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27470__auto___32992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_31490){
var state_val_31492 = (state_31490[(1)]);
if((state_val_31492 === (7))){
var inst_31484 = (state_31490[(2)]);
var state_31490__$1 = state_31490;
var statearr_31510_32993 = state_31490__$1;
(statearr_31510_32993[(2)] = inst_31484);

(statearr_31510_32993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31492 === (1))){
var inst_31440 = [];
var inst_31441 = inst_31440;
var inst_31442 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31490__$1 = (function (){var statearr_31514 = state_31490;
(statearr_31514[(7)] = inst_31441);

(statearr_31514[(8)] = inst_31442);

return statearr_31514;
})();
var statearr_31517_32995 = state_31490__$1;
(statearr_31517_32995[(2)] = null);

(statearr_31517_32995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31492 === (4))){
var inst_31445 = (state_31490[(9)]);
var inst_31445__$1 = (state_31490[(2)]);
var inst_31446 = (inst_31445__$1 == null);
var inst_31447 = cljs.core.not(inst_31446);
var state_31490__$1 = (function (){var statearr_31524 = state_31490;
(statearr_31524[(9)] = inst_31445__$1);

return statearr_31524;
})();
if(inst_31447){
var statearr_31532_32998 = state_31490__$1;
(statearr_31532_32998[(1)] = (5));

} else {
var statearr_31533_32999 = state_31490__$1;
(statearr_31533_32999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31492 === (15))){
var inst_31441 = (state_31490[(7)]);
var inst_31475 = cljs.core.vec(inst_31441);
var state_31490__$1 = state_31490;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31490__$1,(18),out,inst_31475);
} else {
if((state_val_31492 === (13))){
var inst_31469 = (state_31490[(2)]);
var state_31490__$1 = state_31490;
var statearr_31535_33001 = state_31490__$1;
(statearr_31535_33001[(2)] = inst_31469);

(statearr_31535_33001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31492 === (6))){
var inst_31441 = (state_31490[(7)]);
var inst_31472 = inst_31441.length;
var inst_31473 = (inst_31472 > (0));
var state_31490__$1 = state_31490;
if(cljs.core.truth_(inst_31473)){
var statearr_31536_33002 = state_31490__$1;
(statearr_31536_33002[(1)] = (15));

} else {
var statearr_31537_33003 = state_31490__$1;
(statearr_31537_33003[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31492 === (17))){
var inst_31480 = (state_31490[(2)]);
var inst_31482 = cljs.core.async.close_BANG_(out);
var state_31490__$1 = (function (){var statearr_31538 = state_31490;
(statearr_31538[(10)] = inst_31480);

return statearr_31538;
})();
var statearr_31539_33004 = state_31490__$1;
(statearr_31539_33004[(2)] = inst_31482);

(statearr_31539_33004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31492 === (3))){
var inst_31488 = (state_31490[(2)]);
var state_31490__$1 = state_31490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31490__$1,inst_31488);
} else {
if((state_val_31492 === (12))){
var inst_31441 = (state_31490[(7)]);
var inst_31462 = cljs.core.vec(inst_31441);
var state_31490__$1 = state_31490;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31490__$1,(14),out,inst_31462);
} else {
if((state_val_31492 === (2))){
var state_31490__$1 = state_31490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31490__$1,(4),ch);
} else {
if((state_val_31492 === (11))){
var inst_31441 = (state_31490[(7)]);
var inst_31445 = (state_31490[(9)]);
var inst_31449 = (state_31490[(11)]);
var inst_31458 = inst_31441.push(inst_31445);
var tmp31554 = inst_31441;
var inst_31441__$1 = tmp31554;
var inst_31442 = inst_31449;
var state_31490__$1 = (function (){var statearr_31560 = state_31490;
(statearr_31560[(12)] = inst_31458);

(statearr_31560[(7)] = inst_31441__$1);

(statearr_31560[(8)] = inst_31442);

return statearr_31560;
})();
var statearr_31563_33005 = state_31490__$1;
(statearr_31563_33005[(2)] = null);

(statearr_31563_33005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31492 === (9))){
var inst_31442 = (state_31490[(8)]);
var inst_31453 = cljs.core.keyword_identical_QMARK_(inst_31442,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_31490__$1 = state_31490;
var statearr_31564_33006 = state_31490__$1;
(statearr_31564_33006[(2)] = inst_31453);

(statearr_31564_33006[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31492 === (5))){
var inst_31445 = (state_31490[(9)]);
var inst_31449 = (state_31490[(11)]);
var inst_31442 = (state_31490[(8)]);
var inst_31450 = (state_31490[(13)]);
var inst_31449__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31445) : f.call(null,inst_31445));
var inst_31450__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31449__$1,inst_31442);
var state_31490__$1 = (function (){var statearr_31565 = state_31490;
(statearr_31565[(11)] = inst_31449__$1);

(statearr_31565[(13)] = inst_31450__$1);

return statearr_31565;
})();
if(inst_31450__$1){
var statearr_31588_33010 = state_31490__$1;
(statearr_31588_33010[(1)] = (8));

} else {
var statearr_31589_33014 = state_31490__$1;
(statearr_31589_33014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31492 === (14))){
var inst_31445 = (state_31490[(9)]);
var inst_31449 = (state_31490[(11)]);
var inst_31464 = (state_31490[(2)]);
var inst_31465 = [];
var inst_31466 = inst_31465.push(inst_31445);
var inst_31441 = inst_31465;
var inst_31442 = inst_31449;
var state_31490__$1 = (function (){var statearr_31592 = state_31490;
(statearr_31592[(14)] = inst_31464);

(statearr_31592[(15)] = inst_31466);

(statearr_31592[(7)] = inst_31441);

(statearr_31592[(8)] = inst_31442);

return statearr_31592;
})();
var statearr_31593_33017 = state_31490__$1;
(statearr_31593_33017[(2)] = null);

(statearr_31593_33017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31492 === (16))){
var state_31490__$1 = state_31490;
var statearr_31596_33019 = state_31490__$1;
(statearr_31596_33019[(2)] = null);

(statearr_31596_33019[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31492 === (10))){
var inst_31455 = (state_31490[(2)]);
var state_31490__$1 = state_31490;
if(cljs.core.truth_(inst_31455)){
var statearr_31600_33020 = state_31490__$1;
(statearr_31600_33020[(1)] = (11));

} else {
var statearr_31601_33021 = state_31490__$1;
(statearr_31601_33021[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31492 === (18))){
var inst_31477 = (state_31490[(2)]);
var state_31490__$1 = state_31490;
var statearr_31602_33022 = state_31490__$1;
(statearr_31602_33022[(2)] = inst_31477);

(statearr_31602_33022[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31492 === (8))){
var inst_31450 = (state_31490[(13)]);
var state_31490__$1 = state_31490;
var statearr_31606_33026 = state_31490__$1;
(statearr_31606_33026[(2)] = inst_31450);

(statearr_31606_33026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27042__auto__ = null;
var cljs$core$async$state_machine__27042__auto____0 = (function (){
var statearr_31607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31607[(0)] = cljs$core$async$state_machine__27042__auto__);

(statearr_31607[(1)] = (1));

return statearr_31607;
});
var cljs$core$async$state_machine__27042__auto____1 = (function (state_31490){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_31490);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e31611){var ex__27046__auto__ = e31611;
var statearr_31612_33042 = state_31490;
(statearr_31612_33042[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_31490[(4)]))){
var statearr_31613_33046 = state_31490;
(statearr_31613_33046[(1)] = cljs.core.first((state_31490[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33051 = state_31490;
state_31490 = G__33051;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
cljs$core$async$state_machine__27042__auto__ = function(state_31490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27042__auto____1.call(this,state_31490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27042__auto____0;
cljs$core$async$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27042__auto____1;
return cljs$core$async$state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_31622 = f__27471__auto__();
(statearr_31622[(6)] = c__27470__auto___32992);

return statearr_31622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
