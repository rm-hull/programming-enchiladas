goog.provide('big_bang.events.browser');
/**
 * If an event is cancelable, this function is used to signify that the event
 * is to be cancelled, meaning any default action normally taken by the
 * implementation as a result of the event will not occur.
 */
big_bang.events.browser.prevent_default = (function big_bang$events$browser$prevent_default(event){
return event.preventDefault();
});
/**
 * This function is used prevent further propagation of an event during
 * event flow.
 */
big_bang.events.browser.stop_propagation = (function big_bang$events$browser$stop_propagation(event){
return event.stopPropagation();
});
/**
 * (x,y) co-ordinates at which the event occurred relative to the
 * target element.
 */
big_bang.events.browser.offset_coords = (function big_bang$events$browser$offset_coords(event){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5162__auto__ = event.offsetX;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = ((event.pageX - event.target.offsetLeft) + window.pageXOffset);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return (0);
}
}
})(),(function (){var or__5162__auto__ = event.offsetY;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = ((event.pageY - event.target.offsetTop) + window.pageYOffset);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return (0);
}
}
})()], null);
});
/**
 * (x,y) co-ordinates at which the event occurred relative to the
 * DOM implementation's client area.
 */
big_bang.events.browser.client_coords = (function big_bang$events$browser$client_coords(event){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event.clientX,event.clientY], null);
});
/**
 * (x,y) co-ordinates at which the event occurred relative to the
 * origin of the screen coordinate system.
 */
big_bang.events.browser.coords = (function big_bang$events$browser$coords(event){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event.x,event.y], null);
});
big_bang.events.browser.touch_coords = (function big_bang$events$browser$touch_coords(event){
var temp__5825__auto__ = event.changedTouches;
if(cljs.core.truth_(temp__5825__auto__)){
var touch_object = temp__5825__auto__;
return big_bang.events.browser.client_coords((touch_object[(0)]));
} else {
return null;
}
});
big_bang.events.browser.which = (function big_bang$events$browser$which(event){
return event.which;
});
big_bang.events.browser.target = (function big_bang$events$browser$target(event){
return event.target;
});
/**
 * For mouse up/down events, returns:
 *   0: left button,
 *   1: middle button,
 *   2: right button.
 */
big_bang.events.browser.button = (function big_bang$events$browser$button(event){
return event.button;
});

//# sourceMappingURL=big_bang.events.browser.js.map
