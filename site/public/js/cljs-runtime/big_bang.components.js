goog.provide('big_bang.components');
/**
 * Returns a labelled HTML select bound to a channel
 */
big_bang.components.dropdown = (function big_bang$components$dropdown(var_args){
var args__5903__auto__ = [];
var len__5897__auto___33976 = arguments.length;
var i__5898__auto___33977 = (0);
while(true){
if((i__5898__auto___33977 < len__5897__auto___33976)){
args__5903__auto__.push((arguments[i__5898__auto___33977]));

var G__33979 = (i__5898__auto___33977 + (1));
i__5898__auto___33977 = G__33979;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return big_bang.components.dropdown.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(big_bang.components.dropdown.cljs$core$IFn$_invoke$arity$variadic = (function (p__33784){
var map__33785 = p__33784;
var map__33785__$1 = cljs.core.__destructure_map(map__33785);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33785__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33785__$1,new cljs.core.Keyword(null,"label-text","label-text",-1566972381));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33785__$1,new cljs.core.Keyword(null,"options","options",99638489));
var initial_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33785__$1,new cljs.core.Keyword(null,"initial-value","initial-value",470619381));
var send_channel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33785__$1,new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124));
var id_str = cljs.core.name(id);
var element = (function (){var dom33803 = document.createElementNS("http://www.w3.org/1999/xhtml","select");
if(cljs.core.truth_(id_str)){
dom33803.setAttribute("id",id_str);
} else {
}

if(cljs.core.truth_(id_str)){
dom33803.setAttribute("name",id_str);
} else {
}

dom33803.appendChild(dommy.template.__GT_node_like((function (){var iter__5649__auto__ = (function big_bang$components$iter__33815(s__33816){
return (new cljs.core.LazySeq(null,(function (){
var s__33816__$1 = s__33816;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__33816__$1);
if(temp__5825__auto__){
var s__33816__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33816__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__33816__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__33818 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__33817 = (0);
while(true){
if((i__33817 < size__5648__auto__)){
var vec__33831 = cljs.core._nth(c__5647__auto__,i__33817);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33831,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33831,(1),null);
cljs.core.chunk_append(b__33818,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,initial_value))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"selected","selected",574897764),"selected"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),k], null)),v], null));

var G__33989 = (i__33817 + (1));
i__33817 = G__33989;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33818),big_bang$components$iter__33815(cljs.core.chunk_rest(s__33816__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33818),null);
}
} else {
var vec__33841 = cljs.core.first(s__33816__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33841,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33841,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,initial_value))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"selected","selected",574897764),"selected"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),k], null)),v], null),big_bang$components$iter__33815(cljs.core.rest(s__33816__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,options));
})()));

return dom33803;
})();
big_bang.core.big_bang.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.PersistentArrayMap.createAsIfByAssoc([id,initial_value]),new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124),send_channel,new cljs.core.Keyword(null,"event-target","event-target",1020690123),element,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event,world_state){
var value = big_bang.events.browser.target(event).value;
return big_bang.package$.make_package(value,cljs.core.PersistentArrayMap.createAsIfByAssoc([id,value]));
})], 0));

var c__27470__auto___33995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_33859){
var state_val_33860 = (state_33859[(1)]);
if((state_val_33860 === (1))){
var inst_33853 = [id];
var inst_33854 = [initial_value];
var inst_33855 = cljs.core.PersistentHashMap.fromArrays(inst_33853,inst_33854);
var state_33859__$1 = state_33859;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33859__$1,(2),send_channel,inst_33855);
} else {
if((state_val_33860 === (2))){
var inst_33857 = (state_33859[(2)]);
var state_33859__$1 = state_33859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33859__$1,inst_33857);
} else {
return null;
}
}
});
return (function() {
var big_bang$components$state_machine__27042__auto__ = null;
var big_bang$components$state_machine__27042__auto____0 = (function (){
var statearr_33865 = [null,null,null,null,null,null,null];
(statearr_33865[(0)] = big_bang$components$state_machine__27042__auto__);

(statearr_33865[(1)] = (1));

return statearr_33865;
});
var big_bang$components$state_machine__27042__auto____1 = (function (state_33859){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_33859);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e33868){var ex__27046__auto__ = e33868;
var statearr_33870_33997 = state_33859;
(statearr_33870_33997[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_33859[(4)]))){
var statearr_33871_33998 = state_33859;
(statearr_33871_33998[(1)] = cljs.core.first((state_33859[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34000 = state_33859;
state_33859 = G__34000;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
big_bang$components$state_machine__27042__auto__ = function(state_33859){
switch(arguments.length){
case 0:
return big_bang$components$state_machine__27042__auto____0.call(this);
case 1:
return big_bang$components$state_machine__27042__auto____1.call(this,state_33859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
big_bang$components$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = big_bang$components$state_machine__27042__auto____0;
big_bang$components$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = big_bang$components$state_machine__27042__auto____1;
return big_bang$components$state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_33875 = f__27471__auto__();
(statearr_33875[(6)] = c__27470__auto___33995);

return statearr_33875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));


var dom33883 = document.createElementNS("http://www.w3.org/1999/xhtml","span");
(dom33883.className = "big-bang-component dropdown");

dom33883.appendChild((function (){var dom33894 = document.createElementNS("http://www.w3.org/1999/xhtml","label");
if(cljs.core.truth_(id_str)){
dom33894.setAttribute("for",id_str);
} else {
}

dom33894.appendChild(dommy.template.__GT_node_like(label_text));

return dom33894;
})());

dom33883.appendChild(dommy.template.__GT_node_like(element));

return dom33883;
}));

(big_bang.components.dropdown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(big_bang.components.dropdown.cljs$lang$applyTo = (function (seq33773){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33773));
}));

/**
 * Returns a labelled HTML5 range slider bound to a channel
 */
big_bang.components.slider = (function big_bang$components$slider(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34004 = arguments.length;
var i__5898__auto___34005 = (0);
while(true){
if((i__5898__auto___34005 < len__5897__auto___34004)){
args__5903__auto__.push((arguments[i__5898__auto___34005]));

var G__34006 = (i__5898__auto___34005 + (1));
i__5898__auto___34005 = G__34006;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return big_bang.components.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(big_bang.components.slider.cljs$core$IFn$_invoke$arity$variadic = (function (p__33917){
var map__33918 = p__33917;
var map__33918__$1 = cljs.core.__destructure_map(map__33918);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33918__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33918__$1,new cljs.core.Keyword(null,"label-text","label-text",-1566972381));
var initial_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33918__$1,new cljs.core.Keyword(null,"initial-value","initial-value",470619381));
var min_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33918__$1,new cljs.core.Keyword(null,"min-value","min-value",-1119123315));
var max_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33918__$1,new cljs.core.Keyword(null,"max-value","max-value",687805168));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33918__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var send_channel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33918__$1,new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124));
var id_str = cljs.core.name(id);
var result_id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_str)+"-result");
var input_element = (function (){var dom33920 = document.createElementNS("http://www.w3.org/1999/xhtml","input");
if(cljs.core.truth_(id_str)){
dom33920.setAttribute("id",id_str);
} else {
}

if(cljs.core.truth_(id_str)){
dom33920.setAttribute("name",id_str);
} else {
}

dom33920.setAttribute("type","range");


if(cljs.core.truth_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = min_value;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (0);
}
})())))){
dom33920.setAttribute("min",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = min_value;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (0);
}
})())));
} else {
}

if(cljs.core.truth_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = max_value;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (100);
}
})())))){
dom33920.setAttribute("max",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = max_value;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (100);
}
})())));
} else {
}

if(cljs.core.truth_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = initial_value;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (50);
}
})())))){
dom33920.setAttribute("value",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = initial_value;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (50);
}
})())));
} else {
}

if(cljs.core.truth_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = step;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (1);
}
})())))){
dom33920.setAttribute("step",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = step;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (1);
}
})())));
} else {
}

return dom33920;
})();
var output_element = (function (){var dom33922 = document.createElementNS("http://www.w3.org/1999/xhtml","output");
if(cljs.core.truth_(result_id)){
dom33922.setAttribute("id",result_id);
} else {
}

if(cljs.core.truth_(result_id)){
dom33922.setAttribute("name",result_id);
} else {
}

if(cljs.core.truth_(id_str)){
dom33922.setAttribute("for",id_str);
} else {
}

return dom33922;
})();
big_bang.core.big_bang.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),initial_value,new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124),send_channel,new cljs.core.Keyword(null,"event-target","event-target",1020690123),input_element,new cljs.core.Keyword(null,"to-draw","to-draw",-1467115105),(function (world_state){
return dommy.core.set_html_BANG_(output_element,world_state);
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event,world_state){
var value = big_bang.events.browser.target(event).valueAsNumber;
return big_bang.package$.make_package(value,cljs.core.PersistentArrayMap.createAsIfByAssoc([id,value]));
})], 0));

var dom33923 = document.createElementNS("http://www.w3.org/1999/xhtml","span");
(dom33923.className = "big-bang-component slider");

dom33923.appendChild((function (){var dom33925 = document.createElementNS("http://www.w3.org/1999/xhtml","label");
if(cljs.core.truth_(cljs.core.name(id))){
dom33925.setAttribute("for",cljs.core.name(id));
} else {
}

dom33925.appendChild(dommy.template.__GT_node_like(label_text));

return dom33925;
})());

dom33923.appendChild(dommy.template.__GT_node_like(input_element));

dom33923.appendChild(dommy.template.__GT_node_like(output_element));

return dom33923;
}));

(big_bang.components.slider.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(big_bang.components.slider.cljs$lang$applyTo = (function (seq33915){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33915));
}));

/**
 * Returns a labelled HTML5 color-picker input bound to a channel
 */
big_bang.components.color_picker = (function big_bang$components$color_picker(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34017 = arguments.length;
var i__5898__auto___34018 = (0);
while(true){
if((i__5898__auto___34018 < len__5897__auto___34017)){
args__5903__auto__.push((arguments[i__5898__auto___34018]));

var G__34019 = (i__5898__auto___34018 + (1));
i__5898__auto___34018 = G__34019;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return big_bang.components.color_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(big_bang.components.color_picker.cljs$core$IFn$_invoke$arity$variadic = (function (p__33928){
var map__33929 = p__33928;
var map__33929__$1 = cljs.core.__destructure_map(map__33929);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33929__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33929__$1,new cljs.core.Keyword(null,"label-text","label-text",-1566972381));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33929__$1,new cljs.core.Keyword(null,"options","options",99638489));
var initial_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33929__$1,new cljs.core.Keyword(null,"initial-value","initial-value",470619381));
var send_channel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33929__$1,new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124));
var id_str = cljs.core.name(id);
var element = (function (){var dom33933 = document.createElementNS("http://www.w3.org/1999/xhtml","input");
if(cljs.core.truth_(id_str)){
dom33933.setAttribute("id",id_str);
} else {
}

if(cljs.core.truth_(id_str)){
dom33933.setAttribute("name",id_str);
} else {
}

dom33933.setAttribute("type","color");


return dom33933;
})();
(element.value = initial_value);

big_bang.core.big_bang.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.PersistentArrayMap.createAsIfByAssoc([id,initial_value]),new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124),send_channel,new cljs.core.Keyword(null,"event-target","event-target",1020690123),element,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event,world_state){
var value = big_bang.events.browser.target(event).value;
return big_bang.package$.make_package(value,cljs.core.PersistentArrayMap.createAsIfByAssoc([id,value]));
})], 0));

var c__27470__auto___34022 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_33944){
var state_val_33945 = (state_33944[(1)]);
if((state_val_33945 === (1))){
var inst_33936 = [id];
var inst_33939 = [initial_value];
var inst_33940 = cljs.core.PersistentHashMap.fromArrays(inst_33936,inst_33939);
var state_33944__$1 = state_33944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33944__$1,(2),send_channel,inst_33940);
} else {
if((state_val_33945 === (2))){
var inst_33942 = (state_33944[(2)]);
var state_33944__$1 = state_33944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33944__$1,inst_33942);
} else {
return null;
}
}
});
return (function() {
var big_bang$components$state_machine__27042__auto__ = null;
var big_bang$components$state_machine__27042__auto____0 = (function (){
var statearr_33949 = [null,null,null,null,null,null,null];
(statearr_33949[(0)] = big_bang$components$state_machine__27042__auto__);

(statearr_33949[(1)] = (1));

return statearr_33949;
});
var big_bang$components$state_machine__27042__auto____1 = (function (state_33944){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_33944);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e33959){var ex__27046__auto__ = e33959;
var statearr_33960_34024 = state_33944;
(statearr_33960_34024[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_33944[(4)]))){
var statearr_33961_34026 = state_33944;
(statearr_33961_34026[(1)] = cljs.core.first((state_33944[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34027 = state_33944;
state_33944 = G__34027;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
big_bang$components$state_machine__27042__auto__ = function(state_33944){
switch(arguments.length){
case 0:
return big_bang$components$state_machine__27042__auto____0.call(this);
case 1:
return big_bang$components$state_machine__27042__auto____1.call(this,state_33944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
big_bang$components$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = big_bang$components$state_machine__27042__auto____0;
big_bang$components$state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = big_bang$components$state_machine__27042__auto____1;
return big_bang$components$state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_33962 = f__27471__auto__();
(statearr_33962[(6)] = c__27470__auto___34022);

return statearr_33962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));


var dom33963 = document.createElementNS("http://www.w3.org/1999/xhtml","span");
(dom33963.className = "big-bang-component color-picker");

dom33963.appendChild((function (){var dom33965 = document.createElementNS("http://www.w3.org/1999/xhtml","label");
if(cljs.core.truth_(id_str)){
dom33965.setAttribute("for",id_str);
} else {
}

dom33965.appendChild(dommy.template.__GT_node_like(label_text));

return dom33965;
})());

dom33963.appendChild(dommy.template.__GT_node_like(element));

return dom33963;
}));

(big_bang.components.color_picker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(big_bang.components.color_picker.cljs$lang$applyTo = (function (seq33926){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33926));
}));

/**
 * Returns a labelled button bound to a channel
 */
big_bang.components.button = (function big_bang$components$button(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34030 = arguments.length;
var i__5898__auto___34031 = (0);
while(true){
if((i__5898__auto___34031 < len__5897__auto___34030)){
args__5903__auto__.push((arguments[i__5898__auto___34031]));

var G__34032 = (i__5898__auto___34031 + (1));
i__5898__auto___34031 = G__34032;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return big_bang.components.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(big_bang.components.button.cljs$core$IFn$_invoke$arity$variadic = (function (p__33972){
var map__33973 = p__33972;
var map__33973__$1 = cljs.core.__destructure_map(map__33973);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33973__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33973__$1,new cljs.core.Keyword(null,"label-text","label-text",-1566972381));
var send_channel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33973__$1,new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124));
var id_str = cljs.core.name(id);
var element = (function (){var dom33974 = document.createElementNS("http://www.w3.org/1999/xhtml","input");
if(cljs.core.truth_(id_str)){
dom33974.setAttribute("id",id_str);
} else {
}

if(cljs.core.truth_(id_str)){
dom33974.setAttribute("name",id_str);
} else {
}

if(cljs.core.truth_(label_text)){
dom33974.setAttribute("value",label_text);
} else {
}

dom33974.setAttribute("type","button");


return dom33974;
})();
big_bang.core.big_bang.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"send-channel","send-channel",-1006684124),send_channel,new cljs.core.Keyword(null,"event-target","event-target",1020690123),element,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event,world_state){
var value = big_bang.events.browser.target(event).value;
return big_bang.package$.make_package(value,cljs.core.PersistentArrayMap.createAsIfByAssoc([id,value]));
})], 0));

var dom33975 = document.createElementNS("http://www.w3.org/1999/xhtml","span");
(dom33975.className = "big-bang-component button");

dom33975.appendChild(dommy.template.__GT_node_like(element));

return dom33975;
}));

(big_bang.components.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(big_bang.components.button.cljs$lang$applyTo = (function (seq33971){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33971));
}));


//# sourceMappingURL=big_bang.components.js.map
