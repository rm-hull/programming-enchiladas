goog.provide('big_bang.package$');
/**
 * Checks to see if the supplied parameter is a package -- A package must
 * consist of both a world-state and a message.
 */
big_bang.package$.package_QMARK_ = (function big_bang$package$package_QMARK_(x){
return ((cljs.core.contains_QMARK_(x,new cljs.core.Keyword(null,"message","message",-406056002))) && (cljs.core.contains_QMARK_(x,new cljs.core.Keyword(null,"world-state","world-state",1712647065))));
});
/**
 * Any handler may return either a world-state or a package. If an event
 * handler produces a package, the content of the world-state field becomes
 * the next world-state and the message field specifies what the world places
 * on any defined send-channel.
 */
big_bang.package$.make_package = (function big_bang$package$make_package(world_state,message){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"world-state","world-state",1712647065),world_state,new cljs.core.Keyword(null,"message","message",-406056002),message], null);
});
/**
 * Extracts the world-state from x if it is a package, else returns x
 */
big_bang.package$.extract_world_state = (function big_bang$package$extract_world_state(x){
if(big_bang.package$.package_QMARK_(x)){
return new cljs.core.Keyword(null,"world-state","world-state",1712647065).cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
/**
 * Extracts the message from x if it is a package, else returns nil
 */
big_bang.package$.extract_message = (function big_bang$package$extract_message(x){
if(big_bang.package$.package_QMARK_(x)){
return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
});

//# sourceMappingURL=big_bang.package.js.map
