goog.provide('dataview.loader');
/**
 * Fetches the contents of a URL and returns a channel on which
 * the binary data is parked (as DataView object)
 */
dataview.loader.fetch_blob = (function dataview$loader$fetch_blob(url){
var xhr = (new XMLHttpRequest());
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var handler = (function (event){
var c__27470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_33761){
var state_val_33762 = (state_33761[(1)]);
if((state_val_33762 === (1))){
var inst_33755 = xhr.response;
var inst_33756 = (new DataView(inst_33755));
var state_33761__$1 = state_33761;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33761__$1,(2),chan,inst_33756);
} else {
if((state_val_33762 === (2))){
var inst_33758 = (state_33761[(2)]);
var inst_33759 = cljs.core.async.close_BANG_(chan);
var state_33761__$1 = (function (){var statearr_33774 = state_33761;
(statearr_33774[(7)] = inst_33758);

return statearr_33774;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33761__$1,inst_33759);
} else {
return null;
}
}
});
return (function() {
var dataview$loader$fetch_blob_$_state_machine__27042__auto__ = null;
var dataview$loader$fetch_blob_$_state_machine__27042__auto____0 = (function (){
var statearr_33775 = [null,null,null,null,null,null,null,null];
(statearr_33775[(0)] = dataview$loader$fetch_blob_$_state_machine__27042__auto__);

(statearr_33775[(1)] = (1));

return statearr_33775;
});
var dataview$loader$fetch_blob_$_state_machine__27042__auto____1 = (function (state_33761){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_33761);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e33776){var ex__27046__auto__ = e33776;
var statearr_33777_33864 = state_33761;
(statearr_33777_33864[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_33761[(4)]))){
var statearr_33778_33866 = state_33761;
(statearr_33778_33866[(1)] = cljs.core.first((state_33761[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33869 = state_33761;
state_33761 = G__33869;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
dataview$loader$fetch_blob_$_state_machine__27042__auto__ = function(state_33761){
switch(arguments.length){
case 0:
return dataview$loader$fetch_blob_$_state_machine__27042__auto____0.call(this);
case 1:
return dataview$loader$fetch_blob_$_state_machine__27042__auto____1.call(this,state_33761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dataview$loader$fetch_blob_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = dataview$loader$fetch_blob_$_state_machine__27042__auto____0;
dataview$loader$fetch_blob_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = dataview$loader$fetch_blob_$_state_machine__27042__auto____1;
return dataview$loader$fetch_blob_$_state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_33781 = f__27471__auto__();
(statearr_33781[(6)] = c__27470__auto__);

return statearr_33781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));

return c__27470__auto__;
});
xhr.open("GET",url,true);

(xhr.responseType = "arraybuffer");

(xhr.onload = handler);

xhr.send();

return chan;
});
/**
 * Fetches an image from a URL and returns a channel on which the
 * the completed image is partked. Note: the image be hosted on
 * the same domain unless a CORS-busting proxy is used.
 */
dataview.loader.fetch_image = (function dataview$loader$fetch_image(url){
var img = (new Image());
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var handler = (function (){
var c__27470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_33793){
var state_val_33794 = (state_33793[(1)]);
if((state_val_33794 === (1))){
var state_33793__$1 = state_33793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33793__$1,(2),chan,img);
} else {
if((state_val_33794 === (2))){
var inst_33790 = (state_33793[(2)]);
var inst_33791 = cljs.core.async.close_BANG_(chan);
var state_33793__$1 = (function (){var statearr_33802 = state_33793;
(statearr_33802[(7)] = inst_33790);

return statearr_33802;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33793__$1,inst_33791);
} else {
return null;
}
}
});
return (function() {
var dataview$loader$fetch_image_$_state_machine__27042__auto__ = null;
var dataview$loader$fetch_image_$_state_machine__27042__auto____0 = (function (){
var statearr_33805 = [null,null,null,null,null,null,null,null];
(statearr_33805[(0)] = dataview$loader$fetch_image_$_state_machine__27042__auto__);

(statearr_33805[(1)] = (1));

return statearr_33805;
});
var dataview$loader$fetch_image_$_state_machine__27042__auto____1 = (function (state_33793){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_33793);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e33806){var ex__27046__auto__ = e33806;
var statearr_33807_33872 = state_33793;
(statearr_33807_33872[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_33793[(4)]))){
var statearr_33810_33873 = state_33793;
(statearr_33810_33873[(1)] = cljs.core.first((state_33793[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33874 = state_33793;
state_33793 = G__33874;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
dataview$loader$fetch_image_$_state_machine__27042__auto__ = function(state_33793){
switch(arguments.length){
case 0:
return dataview$loader$fetch_image_$_state_machine__27042__auto____0.call(this);
case 1:
return dataview$loader$fetch_image_$_state_machine__27042__auto____1.call(this,state_33793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dataview$loader$fetch_image_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = dataview$loader$fetch_image_$_state_machine__27042__auto____0;
dataview$loader$fetch_image_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = dataview$loader$fetch_image_$_state_machine__27042__auto____1;
return dataview$loader$fetch_image_$_state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_33819 = f__27471__auto__();
(statearr_33819[(6)] = c__27470__auto__);

return statearr_33819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));

return c__27470__auto__;
});
(img.onload = handler);

(img.crossOrigin = "anonymous");

(img.src = url);

return chan;
});
/**
 * Fetches the contents of a URL and returns a channel on which
 * the text data is parked (as a string object)
 */
dataview.loader.fetch_text = (function dataview$loader$fetch_text(url){
var xhr = (new XMLHttpRequest());
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var handler = (function (event){
var c__27470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27471__auto__ = (function (){var switch__27041__auto__ = (function (state_33839){
var state_val_33840 = (state_33839[(1)]);
if((state_val_33840 === (1))){
var inst_33834 = xhr.response;
var state_33839__$1 = state_33839;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33839__$1,(2),chan,inst_33834);
} else {
if((state_val_33840 === (2))){
var inst_33836 = (state_33839[(2)]);
var inst_33837 = cljs.core.async.close_BANG_(chan);
var state_33839__$1 = (function (){var statearr_33844 = state_33839;
(statearr_33844[(7)] = inst_33836);

return statearr_33844;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33839__$1,inst_33837);
} else {
return null;
}
}
});
return (function() {
var dataview$loader$fetch_text_$_state_machine__27042__auto__ = null;
var dataview$loader$fetch_text_$_state_machine__27042__auto____0 = (function (){
var statearr_33846 = [null,null,null,null,null,null,null,null];
(statearr_33846[(0)] = dataview$loader$fetch_text_$_state_machine__27042__auto__);

(statearr_33846[(1)] = (1));

return statearr_33846;
});
var dataview$loader$fetch_text_$_state_machine__27042__auto____1 = (function (state_33839){
while(true){
var ret_value__27044__auto__ = (function (){try{while(true){
var result__27045__auto__ = switch__27041__auto__(state_33839);
if(cljs.core.keyword_identical_QMARK_(result__27045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27045__auto__;
}
break;
}
}catch (e33848){var ex__27046__auto__ = e33848;
var statearr_33849_33876 = state_33839;
(statearr_33849_33876[(2)] = ex__27046__auto__);


if(cljs.core.seq((state_33839[(4)]))){
var statearr_33850_33877 = state_33839;
(statearr_33850_33877[(1)] = cljs.core.first((state_33839[(4)])));

} else {
throw ex__27046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33879 = state_33839;
state_33839 = G__33879;
continue;
} else {
return ret_value__27044__auto__;
}
break;
}
});
dataview$loader$fetch_text_$_state_machine__27042__auto__ = function(state_33839){
switch(arguments.length){
case 0:
return dataview$loader$fetch_text_$_state_machine__27042__auto____0.call(this);
case 1:
return dataview$loader$fetch_text_$_state_machine__27042__auto____1.call(this,state_33839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dataview$loader$fetch_text_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$0 = dataview$loader$fetch_text_$_state_machine__27042__auto____0;
dataview$loader$fetch_text_$_state_machine__27042__auto__.cljs$core$IFn$_invoke$arity$1 = dataview$loader$fetch_text_$_state_machine__27042__auto____1;
return dataview$loader$fetch_text_$_state_machine__27042__auto__;
})()
})();
var state__27472__auto__ = (function (){var statearr_33852 = f__27471__auto__();
(statearr_33852[(6)] = c__27470__auto__);

return statearr_33852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27472__auto__);
}));

return c__27470__auto__;
});
xhr.open("GET",url,true);

(xhr.onload = handler);

xhr.send();

return chan;
});

//# sourceMappingURL=dataview.loader.js.map
