goog.provide('monet.core');
monet.core.animation_frame = (function (){var or__5162__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
var or__5162__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__5162__auto____$2)){
return or__5162__auto____$2;
} else {
var or__5162__auto____$3 = window.oRequestAnimationFrame;
if(cljs.core.truth_(or__5162__auto____$3)){
return or__5162__auto____$3;
} else {
var or__5162__auto____$4 = window.msRequestAnimationFrame;
if(cljs.core.truth_(or__5162__auto____$4)){
return or__5162__auto____$4;
} else {
return (function (callback){
return setTimeout(callback,(17));
});
}
}
}
}
}
})();

//# sourceMappingURL=monet.core.js.map
