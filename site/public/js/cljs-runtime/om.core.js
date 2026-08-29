goog.provide('om.core');
om.core._STAR_read_enabled_STAR_ = false;

/**
 * @interface
 */
om.core.IInitState = function(){};

var om$core$IInitState$init_state$dyn_33468 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (om.core.init_state[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (om.core.init_state["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
});
om.core.init_state = (function om$core$init_state(this$){
if((((!((this$ == null)))) && ((!((this$.om$core$IInitState$init_state$arity$1 == null)))))){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
return om$core$IInitState$init_state$dyn_33468(this$);
}
});


/**
 * @interface
 */
om.core.IShouldUpdate = function(){};

var om$core$IShouldUpdate$should_update$dyn_33470 = (function (this$,next_props,next_state){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (om.core.should_update[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__5520__auto__.call(null,this$,next_props,next_state));
} else {
var m__5518__auto__ = (om.core.should_update["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__5518__auto__.call(null,this$,next_props,next_state));
} else {
throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
});
om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((((!((this$ == null)))) && ((!((this$.om$core$IShouldUpdate$should_update$arity$3 == null)))))){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
return om$core$IShouldUpdate$should_update$dyn_33470(this$,next_props,next_state);
}
});


/**
 * @interface
 */
om.core.IWillMount = function(){};

var om$core$IWillMount$will_mount$dyn_33473 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (om.core.will_mount[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (om.core.will_mount["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
});
om.core.will_mount = (function om$core$will_mount(this$){
if((((!((this$ == null)))) && ((!((this$.om$core$IWillMount$will_mount$arity$1 == null)))))){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
return om$core$IWillMount$will_mount$dyn_33473(this$);
}
});


/**
 * @interface
 */
om.core.IDidMount = function(){};

var om$core$IDidMount$did_mount$dyn_33476 = (function (this$,node){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (om.core.did_mount[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,node) : m__5520__auto__.call(null,this$,node));
} else {
var m__5518__auto__ = (om.core.did_mount["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,node) : m__5518__auto__.call(null,this$,node));
} else {
throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
});
om.core.did_mount = (function om$core$did_mount(this$,node){
if((((!((this$ == null)))) && ((!((this$.om$core$IDidMount$did_mount$arity$2 == null)))))){
return this$.om$core$IDidMount$did_mount$arity$2(this$,node);
} else {
return om$core$IDidMount$did_mount$dyn_33476(this$,node);
}
});


/**
 * @interface
 */
om.core.IWillUnmount = function(){};

var om$core$IWillUnmount$will_unmount$dyn_33479 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (om.core.will_unmount[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (om.core.will_unmount["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
});
om.core.will_unmount = (function om$core$will_unmount(this$){
if((((!((this$ == null)))) && ((!((this$.om$core$IWillUnmount$will_unmount$arity$1 == null)))))){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
return om$core$IWillUnmount$will_unmount$dyn_33479(this$);
}
});


/**
 * @interface
 */
om.core.IWillUpdate = function(){};

var om$core$IWillUpdate$will_update$dyn_33480 = (function (this$,next_props,next_state){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (om.core.will_update[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__5520__auto__.call(null,this$,next_props,next_state));
} else {
var m__5518__auto__ = (om.core.will_update["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__5518__auto__.call(null,this$,next_props,next_state));
} else {
throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
});
om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((((!((this$ == null)))) && ((!((this$.om$core$IWillUpdate$will_update$arity$3 == null)))))){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
return om$core$IWillUpdate$will_update$dyn_33480(this$,next_props,next_state);
}
});


/**
 * @interface
 */
om.core.IDidUpdate = function(){};

var om$core$IDidUpdate$did_update$dyn_33481 = (function (this$,prev_props,prev_state,root_node){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (om.core.did_update[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$4(this$,prev_props,prev_state,root_node) : m__5520__auto__.call(null,this$,prev_props,prev_state,root_node));
} else {
var m__5518__auto__ = (om.core.did_update["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$4(this$,prev_props,prev_state,root_node) : m__5518__auto__.call(null,this$,prev_props,prev_state,root_node));
} else {
throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
});
om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state,root_node){
if((((!((this$ == null)))) && ((!((this$.om$core$IDidUpdate$did_update$arity$4 == null)))))){
return this$.om$core$IDidUpdate$did_update$arity$4(this$,prev_props,prev_state,root_node);
} else {
return om$core$IDidUpdate$did_update$dyn_33481(this$,prev_props,prev_state,root_node);
}
});


/**
 * @interface
 */
om.core.IRender = function(){};

var om$core$IRender$render$dyn_33488 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (om.core.render[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (om.core.render["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRender.render",this$);
}
}
});
om.core.render = (function om$core$render(this$){
if((((!((this$ == null)))) && ((!((this$.om$core$IRender$render$arity$1 == null)))))){
return this$.om$core$IRender$render$arity$1(this$);
} else {
return om$core$IRender$render$dyn_33488(this$);
}
});


/**
 * @interface
 */
om.core.IRenderState = function(){};

var om$core$IRenderState$render_state$dyn_33495 = (function (this$,state){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (om.core.render_state[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,state) : m__5520__auto__.call(null,this$,state));
} else {
var m__5518__auto__ = (om.core.render_state["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,state) : m__5518__auto__.call(null,this$,state));
} else {
throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
});
om.core.render_state = (function om$core$render_state(this$,state){
if((((!((this$ == null)))) && ((!((this$.om$core$IRenderState$render_state$arity$2 == null)))))){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
return om$core$IRenderState$render_state$dyn_33495(this$,state);
}
});


/**
 * @interface
 */
om.core.ICursor = function(){};

var om$core$ICursor$_value$dyn_33501 = (function (cursor){
var x__5519__auto__ = (((cursor == null))?null:cursor);
var m__5520__auto__ = (om.core._value[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__5520__auto__.call(null,cursor));
} else {
var m__5518__auto__ = (om.core._value["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__5518__auto__.call(null,cursor));
} else {
throw cljs.core.missing_protocol("ICursor.-value",cursor);
}
}
});
om.core._value = (function om$core$_value(cursor){
if((((!((cursor == null)))) && ((!((cursor.om$core$ICursor$_value$arity$1 == null)))))){
return cursor.om$core$ICursor$_value$arity$1(cursor);
} else {
return om$core$ICursor$_value$dyn_33501(cursor);
}
});

var om$core$ICursor$_path$dyn_33508 = (function (cursor){
var x__5519__auto__ = (((cursor == null))?null:cursor);
var m__5520__auto__ = (om.core._path[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__5520__auto__.call(null,cursor));
} else {
var m__5518__auto__ = (om.core._path["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__5518__auto__.call(null,cursor));
} else {
throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
});
om.core._path = (function om$core$_path(cursor){
if((((!((cursor == null)))) && ((!((cursor.om$core$ICursor$_path$arity$1 == null)))))){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
return om$core$ICursor$_path$dyn_33508(cursor);
}
});

var om$core$ICursor$_state$dyn_33523 = (function (cursor){
var x__5519__auto__ = (((cursor == null))?null:cursor);
var m__5520__auto__ = (om.core._state[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__5520__auto__.call(null,cursor));
} else {
var m__5518__auto__ = (om.core._state["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__5518__auto__.call(null,cursor));
} else {
throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
});
om.core._state = (function om$core$_state(cursor){
if((((!((cursor == null)))) && ((!((cursor.om$core$ICursor$_state$arity$1 == null)))))){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
return om$core$ICursor$_state$dyn_33523(cursor);
}
});

var om$core$ICursor$_shared$dyn_33527 = (function (cursor){
var x__5519__auto__ = (((cursor == null))?null:cursor);
var m__5520__auto__ = (om.core._shared[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__5520__auto__.call(null,cursor));
} else {
var m__5518__auto__ = (om.core._shared["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__5518__auto__.call(null,cursor));
} else {
throw cljs.core.missing_protocol("ICursor.-shared",cursor);
}
}
});
om.core._shared = (function om$core$_shared(cursor){
if((((!((cursor == null)))) && ((!((cursor.om$core$ICursor$_shared$arity$1 == null)))))){
return cursor.om$core$ICursor$_shared$arity$1(cursor);
} else {
return om$core$ICursor$_shared$dyn_33527(cursor);
}
});


/**
 * @interface
 */
om.core.IToCursor = function(){};

var om$core$IToCursor$_to_cursor$dyn_33528 = (function() {
var G__33529 = null;
var G__33529__2 = (function (value,state){
var x__5519__auto__ = (((value == null))?null:value);
var m__5520__auto__ = (om.core._to_cursor[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(value,state) : m__5520__auto__.call(null,value,state));
} else {
var m__5518__auto__ = (om.core._to_cursor["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(value,state) : m__5518__auto__.call(null,value,state));
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
});
var G__33529__3 = (function (value,state,path){
var x__5519__auto__ = (((value == null))?null:value);
var m__5520__auto__ = (om.core._to_cursor[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(value,state,path) : m__5520__auto__.call(null,value,state,path));
} else {
var m__5518__auto__ = (om.core._to_cursor["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(value,state,path) : m__5518__auto__.call(null,value,state,path));
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
});
var G__33529__4 = (function (value,state,path,shared){
var x__5519__auto__ = (((value == null))?null:value);
var m__5520__auto__ = (om.core._to_cursor[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$4(value,state,path,shared) : m__5520__auto__.call(null,value,state,path,shared));
} else {
var m__5518__auto__ = (om.core._to_cursor["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$4(value,state,path,shared) : m__5518__auto__.call(null,value,state,path,shared));
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
});
G__33529 = function(value,state,path,shared){
switch(arguments.length){
case 2:
return G__33529__2.call(this,value,state);
case 3:
return G__33529__3.call(this,value,state,path);
case 4:
return G__33529__4.call(this,value,state,path,shared);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33529.cljs$core$IFn$_invoke$arity$2 = G__33529__2;
G__33529.cljs$core$IFn$_invoke$arity$3 = G__33529__3;
G__33529.cljs$core$IFn$_invoke$arity$4 = G__33529__4;
return G__33529;
})()
;
om.core._to_cursor = (function om$core$_to_cursor(var_args){
var G__33077 = arguments.length;
switch (G__33077) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((((!((value == null)))) && ((!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
return om$core$IToCursor$_to_cursor$dyn_33528(value,state);
}
}));

(om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((((!((value == null)))) && ((!((value.om$core$IToCursor$_to_cursor$arity$3 == null)))))){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
return om$core$IToCursor$_to_cursor$dyn_33528(value,state,path);
}
}));

(om.core._to_cursor.cljs$core$IFn$_invoke$arity$4 = (function (value,state,path,shared){
if((((!((value == null)))) && ((!((value.om$core$IToCursor$_to_cursor$arity$4 == null)))))){
return value.om$core$IToCursor$_to_cursor$arity$4(value,state,path,shared);
} else {
return om$core$IToCursor$_to_cursor$dyn_33528(value,state,path,shared);
}
}));

(om.core._to_cursor.cljs$lang$maxFixedArity = 4);



/**
 * @interface
 */
om.core.ITransact = function(){};

var om$core$ITransact$_transact_BANG_$dyn_33555 = (function (cursor,f){
var x__5519__auto__ = (((cursor == null))?null:cursor);
var m__5520__auto__ = (om.core._transact_BANG_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(cursor,f) : m__5520__auto__.call(null,cursor,f));
} else {
var m__5518__auto__ = (om.core._transact_BANG_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(cursor,f) : m__5518__auto__.call(null,cursor,f));
} else {
throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
});
om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,f){
if((((!((cursor == null)))) && ((!((cursor.om$core$ITransact$_transact_BANG_$arity$2 == null)))))){
return cursor.om$core$ITransact$_transact_BANG_$arity$2(cursor,f);
} else {
return om$core$ITransact$_transact_BANG_$dyn_33555(cursor,f);
}
});

om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.fn_QMARK_(c)){
return (node.props.children = (function (){var _STAR_read_enabled_STAR__orig_val__33113 = om.core._STAR_read_enabled_STAR_;
var _STAR_read_enabled_STAR__temp_val__33114 = true;
(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__temp_val__33114);

try{return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(node) : c.call(null,node));
}finally {(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__orig_val__33113);
}})());
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React 
 * component props.
 */
om.core.get_props = (function om$core$get_props(x){
return (x.props["__om_cursor"]);
});
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(var_args){
var G__33122 = arguments.length;
switch (G__33122) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
var state = owner.state;
var or__5162__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (state["__om_state"]);
}
}));

(om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if((!(cljs.core.sequential_QMARK_(korks)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else {
if(cljs.core.empty_QMARK_(korks)){
return om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner),korks);

}
}
}));

(om.core.get_state.cljs$lang$maxFixedArity = 2);

/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(var_args){
var G__33136 = arguments.length;
switch (G__33136) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core._shared(om.core.get_props(owner));
}));

(om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if((!(cljs.core.sequential_QMARK_(korks)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else {
if(cljs.core.empty_QMARK_(korks)){
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);

}
}
}));

(om.core.get_shared.cljs$lang$maxFixedArity = 2);

om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__5825__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__5825__auto__)){
var pending_state = temp__5825__auto__;
var G__33144 = state;
(G__33144["__om_prev_state"] = (state["__om_state"]));

(G__33144["__om_state"] = pending_state);

(G__33144["__om_pending_state"] = null);

return G__33144;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(var_args){
var G__33146 = arguments.length;
switch (G__33146) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(owner,null);
}));

(om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__5162__auto__ = props;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return owner.props;
}
})();
var temp__5825__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__5825__auto__)){
var props_state = temp__5825__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5162__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state], 0)));

return (props__$1["__om_state"] = null);
} else {
return null;
}
}));

(om.core.merge_props_state.cljs$lang$maxFixedArity = 2);

om.core.Pure = React.createClass(({"getInitialState": (function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (props["__om_init_state"]);
(props["__om_init_state"] = null);

return ({"__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([istate,(((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IInitState$))))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IInitState,c)))?(function (){var _STAR_read_enabled_STAR__orig_val__33163 = om.core._STAR_read_enabled_STAR_;
var _STAR_read_enabled_STAR__temp_val__33164 = true;
(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__temp_val__33164);

try{return om.core.init_state(c);
}finally {(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__orig_val__33163);
}})():null)], 0))});
}), "shouldComponentUpdate": (function (next_props,next_state){
var this$ = this;
var _STAR_read_enabled_STAR__orig_val__33165 = om.core._STAR_read_enabled_STAR_;
var _STAR_read_enabled_STAR__temp_val__33166 = true;
(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__temp_val__33166);

try{var props = this$.props;
var state = this$.state;
var c = om.core.children(this$);
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);

if((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IShouldUpdate$))))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,c))){
return om.core.should_update(c,om.core.get_props(({"props": next_props})),(this$.state["__om_pending_state"]));
} else {
if((!((om.core._value((props["__om_cursor"])) === om.core._value((next_props["__om_cursor"])))))){
return true;
} else {
if((((!(((state["__om_pending_state"]) == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((state["__om_pending_state"]),(state["__om_state"]))))){
return true;
} else {
if((!(((props["__om_index"]) === (next_props["__om_index"]))))){
return true;
} else {
return false;

}
}
}
}
}finally {(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__orig_val__33165);
}}), "componentWillMount": (function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_33617 = om.core.children(this$);
if((((!((c_33617 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c_33617.om$core$IWillMount$))))?true:(((!c_33617.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_33617):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_33617))){
var _STAR_read_enabled_STAR__orig_val__33169_33620 = om.core._STAR_read_enabled_STAR_;
var _STAR_read_enabled_STAR__temp_val__33170_33621 = true;
(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__temp_val__33170_33621);

try{om.core.will_mount(c_33617);
}finally {(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__orig_val__33169_33620);
}} else {
}

return om.core.merge_pending_state(this$);
}), "componentDidMount": (function (node){
var this$ = this;
var c = om.core.children(this$);
if((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IDidMount$))))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c))){
var _STAR_read_enabled_STAR__orig_val__33172 = om.core._STAR_read_enabled_STAR_;
var _STAR_read_enabled_STAR__temp_val__33173 = true;
(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__temp_val__33173);

try{return om.core.did_mount(c,node);
}finally {(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__orig_val__33172);
}} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var c = om.core.children(this$);
if((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IWillUnmount$))))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c))){
var _STAR_read_enabled_STAR__orig_val__33175 = om.core._STAR_read_enabled_STAR_;
var _STAR_read_enabled_STAR__temp_val__33176 = true;
(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__temp_val__33176);

try{return om.core.will_unmount(c);
}finally {(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__orig_val__33175);
}} else {
return null;
}
}), "componentWillUpdate": (function (next_props,next_state){
var this$ = this;
var c_33637 = om.core.children(this$);
if((((!((c_33637 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c_33637.om$core$IWillUpdate$))))?true:(((!c_33637.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_33637):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_33637))){
var state_33639 = this$.state;
var _STAR_read_enabled_STAR__orig_val__33183_33643 = om.core._STAR_read_enabled_STAR_;
var _STAR_read_enabled_STAR__temp_val__33184_33644 = true;
(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__temp_val__33184_33644);

try{om.core.will_update(c_33637,om.core.get_props(({"props": next_props})),(function (){var or__5162__auto__ = (state_33639["__om_pending_state"]);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (state_33639["__om_state"]);
}
})());
}finally {(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__orig_val__33183_33643);
}} else {
}

return om.core.merge_pending_state(this$);
}), "componentDidUpdate": (function (prev_props,prev_state,root_node){
var this$ = this;
var c = om.core.children(this$);
if((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IDidUpdate$))))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c))){
var state_33655 = this$.state;
var _STAR_read_enabled_STAR__orig_val__33186_33658 = om.core._STAR_read_enabled_STAR_;
var _STAR_read_enabled_STAR__temp_val__33187_33659 = true;
(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__temp_val__33187_33659);

try{om.core.did_update(c,om.core.get_props(({"props": prev_props})),(function (){var or__5162__auto__ = (state_33655["__om_prev_state"]);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (state_33655["__om_state"]);
}
})(),root_node);
}finally {(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__orig_val__33186_33658);
}} else {
}

return (this$.state["__om_prev_state"] = null);
}), "render": (function (){
var this$ = this;
var c = om.core.children(this$);
var _STAR_read_enabled_STAR__orig_val__33194 = om.core._STAR_read_enabled_STAR_;
var _STAR_read_enabled_STAR__temp_val__33195 = true;
(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__temp_val__33195);

try{if((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IRender$))))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IRender,c))){
return om.core.render(c);
} else {
if((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IRenderState$))))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IRenderState,c))){
return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
if(cljs.core.truth_(c.render)){
return c.render();
} else {
return c;

}
}
}
}finally {(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__orig_val__33194);
}})}));
om.core.path = (function om$core$path(cursor){
return om.core._path(cursor);
});
om.core.value = (function om$core$value(cursor){
if(om.core._STAR_read_enabled_STAR_){
return om.core._value(cursor);
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$ICursor$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.core.MapCursor = (function (value,state,path,shared){
this.value = value;
this.state = state;
this.path = path;
this.shared = shared;
this.cljs$lang$protocol_mask$partition0$ = 2158397195;
this.cljs$lang$protocol_mask$partition1$ = 8192;
});
(om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null,k,null);
}));

(om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
var v = cljs.core._lookup(self__.value,k,not_found);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,not_found)))){
var G__33240 = v;
var G__33241 = self__.state;
var G__33242 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k);
var G__33243 = self__.shared;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$4 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$4(G__33240,G__33241,G__33242,G__33243) : om.core.to_cursor.call(null,G__33240,G__33241,G__33242,G__33243));
} else {
return not_found;
}
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._pr_writer(self__.value,writer,opts);
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.MapCursor.prototype.om$core$ICursor$ = cljs.core.PROTOCOL_SENTINEL);

(om.core.MapCursor.prototype.om$core$ICursor$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return self__.value;
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return self__.path;
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return self__.state;
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.MapCursor.prototype.om$core$ICursor$_shared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.shared;
}));

(om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core.meta(self__.value);
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path,self__.shared));
}));

(om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._count(self__.value);
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.MapCursor(cljs.core._dissoc(self__.value,k),self__.state,self__.path,self__.shared));
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.MapCursor.prototype.om$core$ITransact$ = cljs.core.PROTOCOL_SENTINEL);

(om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,f,self__.path);
}));

(om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._contains_key_QMARK_(self__.value,k);
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.MapCursor(cljs.core._assoc(self__.value,k,v),self__.state,self__.path,self__.shared));
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33269){
var vec__33270 = p__33269;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33270,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33270,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__33273 = v;
var G__33274 = self__.state;
var G__33275 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k);
var G__33276 = self__.shared;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$4 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$4(G__33273,G__33274,G__33275,G__33276) : om.core.to_cursor.call(null,G__33273,G__33274,G__33275,G__33276));
})()], null);
}),self__.value);
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.MapCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path,self__.shared));
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.MapCursor(cljs.core._conj(self__.value,o),self__.state,self__.path,self__.shared));
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.MapCursor.prototype.call = (function (unused__2830__auto__){
var self__ = this;
var self__ = this;
var G__33282 = (arguments.length - (1));
switch (G__33282) {
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

(om.core.MapCursor.prototype.apply = (function (self__,args33239){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat((((args33239.length > (20)))?(function (){var G__33285 = args33239.slice((0),(20));
G__33285.push(args33239.slice((20)));

return G__33285;
})():args33239)));
}));

(om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
}));

(om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
}));

(om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.state),self__.path);
}));

(om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"shared","shared",1256385534,null)], null);
}));

(om.core.MapCursor.cljs$lang$type = true);

(om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor");

(om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"om.core/MapCursor");
}));

/**
 * Positional factory function for om.core/MapCursor.
 */
om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path,shared){
return (new om.core.MapCursor(value,state,path,shared));
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
om.core.IndexedCursor = (function (value,state,path,shared){
this.value = value;
this.state = state;
this.path = path;
this.shared = shared;
this.cljs$lang$protocol_mask$partition0$ = 2175181595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
});
(om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return this$__$1.cljs$core$IIndexed$_nth$arity$3(null,n,null);
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return this$__$1.cljs$core$IIndexed$_nth$arity$3(null,n,not_found);
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
var G__33297 = cljs.core._nth(self__.value,n);
var G__33298 = self__.state;
var G__33299 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n);
var G__33300 = self__.shared;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$4 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$4(G__33297,G__33298,G__33299,G__33300) : om.core.to_cursor.call(null,G__33297,G__33298,G__33299,G__33300));
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,not_found){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
if((n < cljs.core._count(self__.value))){
var G__33301 = cljs.core._nth(self__.value,n);
var G__33302 = self__.state;
var G__33303 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n);
var G__33304 = self__.shared;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$4 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$4(G__33301,G__33302,G__33303,G__33304) : om.core.to_cursor.call(null,G__33301,G__33302,G__33303,G__33304));
} else {
return not_found;
}
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._pr_writer(self__.value,writer,opts);
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.IndexedCursor.prototype.om$core$ICursor$ = cljs.core.PROTOCOL_SENTINEL);

(om.core.IndexedCursor.prototype.om$core$ICursor$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return self__.value;
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return self__.path;
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return self__.state;
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.IndexedCursor.prototype.om$core$ICursor$_shared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.shared;
}));

(om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core.meta(self__.value);
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path,self__.shared));
}));

(om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._count(self__.value);
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
var G__33323 = cljs.core._peek(self__.value);
var G__33324 = self__.state;
var G__33325 = self__.path;
var G__33326 = self__.shared;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$4 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$4(G__33323,G__33324,G__33325,G__33326) : om.core.to_cursor.call(null,G__33323,G__33324,G__33325,G__33326));
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
var G__33334 = cljs.core._pop(self__.value);
var G__33335 = self__.state;
var G__33336 = self__.path;
var G__33337 = self__.shared;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$4 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$4(G__33334,G__33335,G__33336,G__33337) : om.core.to_cursor.call(null,G__33334,G__33335,G__33336,G__33337));
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.IndexedCursor.prototype.om$core$ITransact$ = cljs.core.PROTOCOL_SENTINEL);

(om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,f,self__.path);
}));

(om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._contains_key_QMARK_(self__.value,k);
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
var G__33338 = cljs.core._assoc_n(self__.value,n,v);
var G__33339 = self__.state;
var G__33340 = self__.path;
var G__33341 = self__.shared;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$4 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$4(G__33338,G__33339,G__33340,G__33341) : om.core.to_cursor.call(null,G__33338,G__33339,G__33340,G__33341));
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (v,i){
var G__33342 = v;
var G__33343 = self__.state;
var G__33344 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i);
var G__33345 = self__.shared;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$4 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$4(G__33342,G__33343,G__33344,G__33345) : om.core.to_cursor.call(null,G__33342,G__33343,G__33344,G__33345));
}),self__.value,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else {
return null;
}
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.IndexedCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path,self__.shared));
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.IndexedCursor(cljs.core._conj(self__.value,o),self__.state,self__.path,self__.shared));
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(om.core.IndexedCursor.prototype.call = (function (unused__2830__auto__){
var self__ = this;
var self__ = this;
var G__33346 = (arguments.length - (1));
switch (G__33346) {
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

(om.core.IndexedCursor.prototype.apply = (function (self__,args33293){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat((((args33293.length > (20)))?(function (){var G__33347 = args33293.slice((0),(20));
G__33347.push(args33293.slice((20)));

return G__33347;
})():args33293)));
}));

(om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
}));

(om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
}));

(om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.state),self__.path);
}));

(om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"shared","shared",1256385534,null)], null);
}));

(om.core.IndexedCursor.cljs$lang$type = true);

(om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor");

(om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"om.core/IndexedCursor");
}));

/**
 * Positional factory function for om.core/IndexedCursor.
 */
om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path,shared){
return (new om.core.IndexedCursor(value,state,path,shared));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path,shared){
var x33348 = cljs.core.clone(val);
(x33348.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL);

(x33348.cljs$core$IDeref$_deref$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),path);
}));

(x33348.om$core$ICursor$ = cljs.core.PROTOCOL_SENTINEL);

(x33348.om$core$ICursor$_value$arity$1 = (function (_){
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return val;
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(x33348.om$core$ICursor$_state$arity$1 = (function (_){
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return state;
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(x33348.om$core$ICursor$_path$arity$1 = (function (_){
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return path;
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

(x33348.om$core$ICursor$_shared$arity$1 = (function (_){
var ___$1 = this;
return shared;
}));

(x33348.om$core$ITransact$ = cljs.core.PROTOCOL_SENTINEL);

(x33348.om$core$ITransact$_transact_BANG_$arity$2 = (function (_,f){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,f,path);
}));

(x33348.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(x33348.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
} else {
throw (new Error((""+"Cannot manipulate cursor outside of render phase, only "+"om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
}));

return x33348;
});
om.core.to_cursor = (function om$core$to_cursor(var_args){
var G__33373 = arguments.length;
switch (G__33373) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$4(val,null,cljs.core.PersistentVector.EMPTY,null);
}));

(om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$4(val,state,cljs.core.PersistentVector.EMPTY,null);
}));

(om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$4(val,state,path,null);
}));

(om.core.to_cursor.cljs$core$IFn$_invoke$arity$4 = (function (val,state,path,shared){
if(om.core.cursor_QMARK_(val)){
return val;
} else {
if((((!((val == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === val.om$core$IToCursor$))))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_(om.core.IToCursor,val))){
return om.core._to_cursor(val,state,path,shared);
} else {
if(cljs.core.indexed_QMARK_(val)){
return (new om.core.IndexedCursor(val,state,path,shared));
} else {
if(cljs.core.map_QMARK_(val)){
return (new om.core.MapCursor(val,state,path,shared));
} else {
if((((!((val == null))))?(((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || ((cljs.core.PROTOCOL_SENTINEL === val.cljs$core$ICloneable$))))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,val))){
return om.core.to_cursor_STAR_(val,state,path,shared);
} else {
return val;

}
}
}
}
}
}));

(om.core.to_cursor.cljs$lang$maxFixedArity = 4);

om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
om.core.render_all = (function om$core$render_all(){
(om.core.refresh_queued = false);

var seq__33377 = cljs.core.seq(cljs.core.deref(om.core.refresh_set));
var chunk__33378 = null;
var count__33379 = (0);
var i__33380 = (0);
while(true){
if((i__33380 < count__33379)){
var f = chunk__33378.cljs$core$IIndexed$_nth$arity$2(null,i__33380);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__33903 = seq__33377;
var G__33904 = chunk__33378;
var G__33905 = count__33379;
var G__33906 = (i__33380 + (1));
seq__33377 = G__33903;
chunk__33378 = G__33904;
count__33379 = G__33905;
i__33380 = G__33906;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__33377);
if(temp__5825__auto__){
var seq__33377__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33377__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__33377__$1);
var G__33907 = cljs.core.chunk_rest(seq__33377__$1);
var G__33908 = c__5694__auto__;
var G__33909 = cljs.core.count(c__5694__auto__);
var G__33910 = (0);
seq__33377 = G__33907;
chunk__33378 = G__33908;
count__33379 = G__33909;
i__33380 = G__33910;
continue;
} else {
var f = cljs.core.first(seq__33377__$1);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__33911 = cljs.core.next(seq__33377__$1);
var G__33912 = null;
var G__33913 = (0);
var G__33914 = (0);
seq__33377 = G__33911;
chunk__33378 = G__33912;
count__33379 = G__33913;
i__33380 = G__33914;
continue;
}
} else {
return null;
}
}
break;
}
});
om.core.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Takes an immutable value or value wrapped in an atom, an initial
 * function f, and a DOM target. Installs an Om/React render loop. f
 * must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Example:
 * 
 * (root {:message :hello}
 *   (fn [data owner]
 *     ...)
 *   js/document.body)
 */
om.core.root = (function om$core$root(var_args){
var G__33388 = arguments.length;
switch (G__33388) {
case 3:
return om.core.root.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.root.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(om.core.root.cljs$core$IFn$_invoke$arity$3 = (function (value,f,target){
return om.core.root.cljs$core$IFn$_invoke$arity$4(value,null,f,target);
}));

(om.core.root.cljs$core$IFn$_invoke$arity$4 = (function (value,shared,f,target){
var roots_SINGLEQUOTE__33919 = cljs.core.deref(om.core.roots);
if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__33919,target)){
var fexpr__33389_33921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__33919,target);
(fexpr__33389_33921.cljs$core$IFn$_invoke$arity$0 ? fexpr__33389_33921.cljs$core$IFn$_invoke$arity$0() : fexpr__33389_33921.call(null));
} else {
}

var state = (((value instanceof cljs.core.Atom))?value:cljs.core.atom.cljs$core$IFn$_invoke$arity$1(value));
var rootf = (function om$core$rootf(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,om$core$rootf);

var value__$1 = cljs.core.deref(state);
var cursor = om.core.to_cursor.cljs$core$IFn$_invoke$arity$4(value__$1,state,cljs.core.PersistentVector.EMPTY,shared);
return React.renderComponent((new om.core.Pure(({"__om_cursor": cursor}),(function (this$){
var _STAR_read_enabled_STAR__orig_val__33390 = om.core._STAR_read_enabled_STAR_;
var _STAR_read_enabled_STAR__temp_val__33391 = true;
(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__temp_val__33391);

try{return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor,this$) : f.call(null,cursor,this$));
}finally {(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__orig_val__33390);
}}))),target);
});
var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
cljs.core.add_watch(state,watch_key,(function (_,___$1,___$2,___$3){
if(cljs.core.contains_QMARK_(cljs.core.deref(om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}

if(om.core.refresh_queued){
return null;
} else {
(om.core.refresh_queued = true);

if((typeof requestAnimationFrame !== 'undefined')){
return requestAnimationFrame(om.core.render_all);
} else {
return setTimeout(om.core.render_all,(16));
}
}
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,(function (){
cljs.core.remove_watch(state,watch_key);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
}));

return rootf();
}));

(om.core.root.cljs$lang$maxFixedArity = 4);

om.core.valid_QMARK_ = (function om$core$valid_QMARK_(m){
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null], null), null),cljs.core.keys(m));
});
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a cursor, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument will be
 * the cursor and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender instance, this
 * instance may implement other React life cycle protocols.
 * 
 * cursor - an ICursor instance
 * 
 * m - a map the following keys are allowed:
 * 
 *   :key        - a keyword that should be used to look up the key used by
 *                 React itself when rendering sequential things.
 *   :react-key  - an explicit react key
 *   :fn         - a function to apply to the data before invoking f.
 *   :init-state - a map of initial state to pass to the component.
 *   :state      - a map of state to pass to the component, will be merged in.
 *   :opts       - a map of values. Can be used to pass side information down
 *                 the render tree.
 * 
 * Example:
 * 
 *   (build list-of-gadgets cursor
 *      {:init-state {:event-chan ...
 *                    :narble ...}})
 *   
 */
om.core.build = (function om$core$build(var_args){
var G__33393 = arguments.length;
switch (G__33393) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
}));

(om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(om.core.valid_QMARK_(m)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"build options contains invalid keys, only :key, :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.keys(m))))+"\n"+"(valid? m)")));
}

if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Cannot build Om component from non-cursor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cursor)))+"\n"+"(cursor? cursor)")));
}

if((m == null)){
var pure__32810__auto__ = (new om.core.Pure(({"__om_cursor": cursor}),(function (this$){
var _STAR_read_enabled_STAR__orig_val__33395 = om.core._STAR_read_enabled_STAR_;
var _STAR_read_enabled_STAR__temp_val__33396 = true;
(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__temp_val__33396);

try{return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor,this$) : f.call(null,cursor,this$));
}finally {(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__orig_val__33395);
}})));
(pure__32810__auto__.constructor = goog.getUid(f));

return pure__32810__auto__;
} else {
var map__33397 = m;
var map__33397__$1 = cljs.core.__destructure_map(map__33397);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33397__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33397__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33397__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33397__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = (((!((dataf == null))))?(dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(cursor) : dataf.call(null,cursor)):cursor);
var rkey = (((!((key == null))))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"react-key","react-key",1337881348)));
var pure__32810__auto__ = (new om.core.Pure(({"__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_init_state": init_state, "__om_state": state, "key": rkey}),(((opts == null))?(function (this$){
var _STAR_read_enabled_STAR__orig_val__33400 = om.core._STAR_read_enabled_STAR_;
var _STAR_read_enabled_STAR__temp_val__33401 = true;
(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__temp_val__33401);

try{return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,this$) : f.call(null,cursor_SINGLEQUOTE_,this$));
}finally {(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__orig_val__33400);
}}):(function (this$){
var _STAR_read_enabled_STAR__orig_val__33402 = om.core._STAR_read_enabled_STAR_;
var _STAR_read_enabled_STAR__temp_val__33403 = true;
(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__temp_val__33403);

try{return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(cursor_SINGLEQUOTE_,this$,opts) : f.call(null,cursor_SINGLEQUOTE_,this$,opts));
}finally {(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__orig_val__33402);
}}))));
(pure__32810__auto__.constructor = goog.getUid(f));

return pure__32810__auto__;

}
}));

(om.core.build.cljs$lang$maxFixedArity = 3);

/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of cursors, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(var_args){
var G__33405 = arguments.length;
switch (G__33405) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.cljs$core$IFn$_invoke$arity$3(f,xs,null);
}));

(om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
}));

(om.core.build_all.cljs$lang$maxFixedArity = 3);

/**
 * Given a cursor, an optional list of keys ks, mutate the tree at the
 * path specified by the cursor + the optional keys by applying f to the
 * specified value in the tree. An Om re-render will be triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(var_args){
var G__33415 = arguments.length;
switch (G__33415) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___33946 = arguments.length;
var i__5898__auto___33947 = (0);
while(true){
if((i__5898__auto___33947 < len__5897__auto___33946)){
args_arr__5922__auto__.push((arguments[i__5898__auto___33947]));

var G__33948 = (i__5898__auto___33947 + (1));
i__5898__auto___33947 = G__33948;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((7) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((7)),(0),null)):null);
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),argseq__5923__auto__);

}
});

(om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core._transact_BANG_(cursor,(function (state,path){
if(cljs.core.empty_QMARK_(path)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(state) : f.call(null,state));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,path,f);
}
}));
}));

(om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core._transact_BANG_(cursor,(function (state__32731__auto__,path__32732__auto__){
if((!(cljs.core.sequential_QMARK_(korks)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__32731__auto__,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__32732__auto__,korks),f);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__32731__auto__,cljs.core.into.cljs$core$IFn$_invoke$arity$2(path__32732__auto__,korks),f);
}
}));
}));

(om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,a){
return om.core._transact_BANG_(cursor,(function (state__32731__auto__,path__32732__auto__){
if((!(cljs.core.sequential_QMARK_(korks)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__32731__auto__,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__32732__auto__,korks),f,a);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__32731__auto__,cljs.core.into.cljs$core$IFn$_invoke$arity$2(path__32732__auto__,korks),f,a);
}
}));
}));

(om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (cursor,korks,f,a,b){
return om.core._transact_BANG_(cursor,(function (state__32731__auto__,path__32732__auto__){
if((!(cljs.core.sequential_QMARK_(korks)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state__32731__auto__,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__32732__auto__,korks),f,a,b);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state__32731__auto__,cljs.core.into.cljs$core$IFn$_invoke$arity$2(path__32732__auto__,korks),f,a,b);
}
}));
}));

(om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (cursor,korks,f,a,b,c){
return om.core._transact_BANG_(cursor,(function (state__32731__auto__,path__32732__auto__){
if((!(cljs.core.sequential_QMARK_(korks)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$6(state__32731__auto__,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__32732__auto__,korks),f,a,b,c);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$6(state__32731__auto__,cljs.core.into.cljs$core$IFn$_invoke$arity$2(path__32732__auto__,korks),f,a,b,c);
}
}));
}));

(om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$7 = (function (cursor,korks,f,a,b,c,d){
return om.core._transact_BANG_(cursor,(function (state__32731__auto__,path__32732__auto__){
if((!(cljs.core.sequential_QMARK_(korks)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(state__32731__auto__,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__32732__auto__,korks),f,a,b,c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d], 0));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(state__32731__auto__,cljs.core.into.cljs$core$IFn$_invoke$arity$2(path__32732__auto__,korks),f,a,b,c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d], 0));
}
}));
}));

(om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cursor,korks,f,a,b,c,d,args){
return om.core._transact_BANG_(cursor,(function (state,path){
if((!(cljs.core.sequential_QMARK_(korks)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update_in,state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,korks),f,a,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([b,c,d,args], 0));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update_in,state,cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,korks),f,a,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([b,c,d,args], 0));
}
}));
}));

/** @this {Function} */
(om.core.transact_BANG_.cljs$lang$applyTo = (function (seq33407){
var G__33408 = cljs.core.first(seq33407);
var seq33407__$1 = cljs.core.next(seq33407);
var G__33409 = cljs.core.first(seq33407__$1);
var seq33407__$2 = cljs.core.next(seq33407__$1);
var G__33410 = cljs.core.first(seq33407__$2);
var seq33407__$3 = cljs.core.next(seq33407__$2);
var G__33411 = cljs.core.first(seq33407__$3);
var seq33407__$4 = cljs.core.next(seq33407__$3);
var G__33412 = cljs.core.first(seq33407__$4);
var seq33407__$5 = cljs.core.next(seq33407__$4);
var G__33413 = cljs.core.first(seq33407__$5);
var seq33407__$6 = cljs.core.next(seq33407__$5);
var G__33414 = cljs.core.first(seq33407__$6);
var seq33407__$7 = cljs.core.next(seq33407__$6);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33408,G__33409,G__33410,G__33411,G__33412,G__33413,G__33414,seq33407__$7);
}));

(om.core.transact_BANG_.cljs$lang$maxFixedArity = (7));

/**
 * Like transact! but no list of keys given. An Om re-render
 * will be triggered.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(var_args){
var G__33424 = arguments.length;
switch (G__33424) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___33956 = arguments.length;
var i__5898__auto___33957 = (0);
while(true){
if((i__5898__auto___33957 < len__5897__auto___33956)){
args_arr__5922__auto__.push((arguments[i__5898__auto___33957]));

var G__33958 = (i__5898__auto___33957 + (1));
i__5898__auto___33957 = G__33958;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((6) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((6)),(0),null)):null);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__5923__auto__);

}
});

(om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core._transact_BANG_(cursor,(function (state__32758__auto__,path__32759__auto__){
if(cljs.core.empty_QMARK_(path__32759__auto__)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(state__32758__auto__) : f.call(null,state__32758__auto__));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__32758__auto__,path__32759__auto__,f);
}
}));
}));

(om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,f,a){
return om.core._transact_BANG_(cursor,(function (state__32758__auto__,path__32759__auto__){
if(cljs.core.empty_QMARK_(path__32759__auto__)){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(state__32758__auto__,a) : f.call(null,state__32758__auto__,a));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__32758__auto__,path__32759__auto__,f,a);
}
}));
}));

(om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,f,a,b){
return om.core._transact_BANG_(cursor,(function (state__32758__auto__,path__32759__auto__){
if(cljs.core.empty_QMARK_(path__32759__auto__)){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(state__32758__auto__,a,b) : f.call(null,state__32758__auto__,a,b));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state__32758__auto__,path__32759__auto__,f,a,b);
}
}));
}));

(om.core.update_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (cursor,f,a,b,c){
return om.core._transact_BANG_(cursor,(function (state__32758__auto__,path__32759__auto__){
if(cljs.core.empty_QMARK_(path__32759__auto__)){
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(state__32758__auto__,a,b,c) : f.call(null,state__32758__auto__,a,b,c));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$6(state__32758__auto__,path__32759__auto__,f,a,b,c);
}
}));
}));

(om.core.update_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (cursor,f,a,b,c,d){
return om.core._transact_BANG_(cursor,(function (state__32758__auto__,path__32759__auto__){
if(cljs.core.empty_QMARK_(path__32759__auto__)){
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(state__32758__auto__,a,b,c,d) : f.call(null,state__32758__auto__,a,b,c,d));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(state__32758__auto__,path__32759__auto__,f,a,b,c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d], 0));
}
}));
}));

(om.core.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cursor,f,a,b,c,d,args){
return om.core._transact_BANG_(cursor,(function (state,path){
if(cljs.core.empty_QMARK_(path)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,state,a,b,c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d,args], 0));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update_in,state,path,f,a,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([b,c,d,args], 0));
}
}));
}));

/** @this {Function} */
(om.core.update_BANG_.cljs$lang$applyTo = (function (seq33417){
var G__33418 = cljs.core.first(seq33417);
var seq33417__$1 = cljs.core.next(seq33417);
var G__33419 = cljs.core.first(seq33417__$1);
var seq33417__$2 = cljs.core.next(seq33417__$1);
var G__33420 = cljs.core.first(seq33417__$2);
var seq33417__$3 = cljs.core.next(seq33417__$2);
var G__33421 = cljs.core.first(seq33417__$3);
var seq33417__$4 = cljs.core.next(seq33417__$3);
var G__33422 = cljs.core.first(seq33417__$4);
var seq33417__$5 = cljs.core.next(seq33417__$4);
var G__33423 = cljs.core.first(seq33417__$5);
var seq33417__$6 = cljs.core.next(seq33417__$5);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33418,G__33419,G__33420,G__33421,G__33422,G__33423,seq33417__$6);
}));

(om.core.update_BANG_.cljs$lang$maxFixedArity = (6));

/**
 * EXPERIMENTAL: Given a cursor, get value from the root at the path
 * specified by a sequential list of keys ks.
 */
om.core.join = (function om$core$join(cursor,korks){
var _STAR_read_enabled_STAR__orig_val__33443 = om.core._STAR_read_enabled_STAR_;
var _STAR_read_enabled_STAR__temp_val__33444 = true;
(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__temp_val__33444);

try{var state = om.core._state(cursor);
var shared = om.core._shared(cursor);
var value = cljs.core.deref(state);
if((!(cljs.core.sequential_QMARK_(korks)))){
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(value,korks),state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null),shared);
} else {
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$4(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value,korks),state,((cljs.core.vector_QMARK_(korks))?korks:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,korks)),shared);
}
}finally {(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__orig_val__33443);
}});
/**
 * A helper function to get at React refs. Given a owning pure node
 *   extract the ref specified by name.
 */
om.core.get_node = (function om$core$get_node(owner,name){
var temp__5825__auto__ = owner.refs;
if(cljs.core.truth_(temp__5825__auto__)){
var refs = temp__5825__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(owner,korks,v){
var _STAR_read_enabled_STAR__orig_val__33457 = om.core._STAR_read_enabled_STAR_;
var _STAR_read_enabled_STAR__temp_val__33458 = true;
(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__temp_val__33458);

try{var props = owner.props;
var state = owner.state;
var cursor = (props["__om_cursor"]);
var path = om.core._path(cursor);
var pstate = (function (){var or__5162__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (state["__om_state"]);
}
})();
if((!(cljs.core.sequential_QMARK_(korks)))){
(state["__om_pending_state"] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pstate,korks,v));
} else {
(state["__om_pending_state"] = cljs.core.assoc_in(pstate,korks,v));
}

if(cljs.core.empty_QMARK_(path)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(om.core._state(cursor),cljs.core.clone);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._state(cursor),cljs.core.update_in,path,cljs.core.clone);
}
}finally {(om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR__orig_val__33457);
}});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(var_args){
var G__33461 = arguments.length;
switch (G__33461) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return (owner.state["__om_state"]);
}));

(om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if((!(cljs.core.sequential_QMARK_(korks)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(om.core.get_render_state.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else {
if(cljs.core.empty_QMARK_(korks)){
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1(owner);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core.get_render_state.cljs$core$IFn$_invoke$arity$1(owner),korks);

}
}
}));

(om.core.get_render_state.cljs$lang$maxFixedArity = 2);

/**
 * Create a cursor instance by attaching to an existing cursor. This
 * supports building components which don't need to set app state but
 * need to be added to the render tree.
 */
om.core.graft = (function om$core$graft(value,cursor){
var x33466 = cljs.core.clone(value);
(x33466.om$core$ICursor$ = cljs.core.PROTOCOL_SENTINEL);

(x33466.om$core$ICursor$_value$arity$1 = (function (_){
var ___$1 = this;
return value;
}));

(x33466.om$core$ICursor$_state$arity$1 = (function (_){
var ___$1 = this;
return om.core._state(cursor);
}));

(x33466.om$core$ICursor$_path$arity$1 = (function (_){
var ___$1 = this;
return om.core._path(cursor);
}));

(x33466.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(x33466.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,other);
}
}));

return x33466;
});

//# sourceMappingURL=om.core.js.map
