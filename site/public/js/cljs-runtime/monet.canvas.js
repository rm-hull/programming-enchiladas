goog.provide('monet.canvas');
monet.canvas.get_context = (function monet$canvas$get_context(canvas,type){
return canvas.getContext(cljs.core.name(type));
});
/**
 * Starts a new path by resetting the list of sub-paths.
 * Call this method when you want to create a new path.
 */
monet.canvas.begin_path = (function monet$canvas$begin_path(ctx){
ctx.beginPath();

return ctx;
});
/**
 * Tries to draw a straight line from the current point to the start.
 * If the shape has already been closed or has only one point, this
 * function does nothing.
 */
monet.canvas.close_path = (function monet$canvas$close_path(ctx){
ctx.closePath();

return ctx;
});
/**
 * Saves the current drawing style state using a stack so you can revert
 * any change you make to it using restore.
 */
monet.canvas.save = (function monet$canvas$save(ctx){
ctx.save();

return ctx;
});
/**
 * Restores the drawing style state to the last element on the 'state stack'
 * saved by save.
 */
monet.canvas.restore = (function monet$canvas$restore(ctx){
ctx.restore();

return ctx;
});
/**
 * Rotate the context 
 */
monet.canvas.rotate = (function monet$canvas$rotate(ctx,angle){
ctx.rotate(angle);

return ctx;
});
/**
 * Scales the context by a floating-point factor in each direction
 */
monet.canvas.scale = (function monet$canvas$scale(ctx,x,y){
ctx.scale(x,y);

return ctx;
});
/**
 * Moves the origin point of the context to (x, y).
 */
monet.canvas.translate = (function monet$canvas$translate(ctx,x,y){
ctx.translate(x,y);

return ctx;
});
/**
 * Multiplies a custom transformation matrix to the existing
 * HTML5 canvas transformation according to the follow convention:
 * 
 * [ x']   [ m11 m21 dx ] [ x ]
 * [ y'] = [ m12 m22 dy ] [ y ]
 * [ 1 ]   [ 0   0   1  ] [ 1 ]
 */
monet.canvas.transform = (function monet$canvas$transform(var_args){
var G__24827 = arguments.length;
switch (G__24827) {
case 7:
return monet.canvas.transform.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 2:
return monet.canvas.transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(monet.canvas.transform.cljs$core$IFn$_invoke$arity$7 = (function (ctx,m11,m12,m21,m22,dx,dy){
ctx.transform(m11,m12,m21,m22,dx,dy);

return ctx;
}));

(monet.canvas.transform.cljs$core$IFn$_invoke$arity$2 = (function (ctx,p__24836){
var map__24837 = p__24836;
var map__24837__$1 = cljs.core.__destructure_map(map__24837);
var m11 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24837__$1,new cljs.core.Keyword(null,"m11","m11",-1747137747));
var m12 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24837__$1,new cljs.core.Keyword(null,"m12","m12",-1234809182));
var m21 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24837__$1,new cljs.core.Keyword(null,"m21","m21",1822226849));
var m22 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24837__$1,new cljs.core.Keyword(null,"m22","m22",1714612893));
var dx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24837__$1,new cljs.core.Keyword(null,"dx","dx",-381796732));
var dy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24837__$1,new cljs.core.Keyword(null,"dy","dy",1719547243));
ctx.transform(m11,m12,m21,m22,dx,dy);

return ctx;
}));

(monet.canvas.transform.cljs$lang$maxFixedArity = 7);

/**
 * Fills the subpaths with the current fill style.
 */
monet.canvas.fill = (function monet$canvas$fill(ctx){
ctx.fill();

return ctx;
});
/**
 * Strokes the subpaths with the current stroke style.
 */
monet.canvas.stroke = (function monet$canvas$stroke(ctx){
ctx.stroke();

return ctx;
});
/**
 * Further constrains the clipping region to the current path.
 */
monet.canvas.clip = (function monet$canvas$clip(ctx){
ctx.clip();

return ctx;
});
/**
 * Path for a rectangle at position (x, y) with a size (w, h).
 */
monet.canvas.rect = (function monet$canvas$rect(ctx,p__24846){
var map__24847 = p__24846;
var map__24847__$1 = cljs.core.__destructure_map(map__24847);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24847__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24847__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24847__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24847__$1,new cljs.core.Keyword(null,"h","h",1109658740));
ctx.rect(x,y,w,h);

return ctx;
});
/**
 * Sets all pixels in the rectangle defined by starting point (x, y)
 * and size (w, h) to transparent black.
 */
monet.canvas.clear_rect = (function monet$canvas$clear_rect(ctx,p__24868){
var map__24872 = p__24868;
var map__24872__$1 = cljs.core.__destructure_map(map__24872);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24872__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24872__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24872__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24872__$1,new cljs.core.Keyword(null,"h","h",1109658740));
ctx.clearRect(x,y,w,h);

return ctx;
});
/**
 * Paints a rectangle which has a starting point at (x, y) and has a
 * w width and an h height onto the canvas, using the current stroke
 * style.
 */
monet.canvas.stroke_rect = (function monet$canvas$stroke_rect(ctx,p__24875){
var map__24876 = p__24875;
var map__24876__$1 = cljs.core.__destructure_map(map__24876);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24876__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24876__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24876__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24876__$1,new cljs.core.Keyword(null,"h","h",1109658740));
ctx.strokeRect(x,y,w,h);

return ctx;
});
/**
 * Draws a filled rectangle at (x, y) position whose size is determined
 * by width w and height h.
 */
monet.canvas.fill_rect = (function monet$canvas$fill_rect(ctx,p__24877){
var map__24878 = p__24877;
var map__24878__$1 = cljs.core.__destructure_map(map__24878);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24878__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24878__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24878__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24878__$1,new cljs.core.Keyword(null,"h","h",1109658740));
ctx.fillRect(x,y,w,h);

return ctx;
});
/**
 * Draws an arc at position (x, y) with radius r, beginning at start-angle,
 * finishing at end-angle, in the direction specified.
 */
monet.canvas.arc = (function monet$canvas$arc(ctx,p__24879){
var map__24880 = p__24879;
var map__24880__$1 = cljs.core.__destructure_map(map__24880);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24880__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24880__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24880__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var start_angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24880__$1,new cljs.core.Keyword(null,"start-angle","start-angle",-1763140493));
var end_angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24880__$1,new cljs.core.Keyword(null,"end-angle","end-angle",1398887581));
var counter_clockwise_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24880__$1,new cljs.core.Keyword(null,"counter-clockwise?","counter-clockwise?",488698965));
ctx.arc(x,y,r,start_angle,end_angle,counter_clockwise_QMARK_);

return ctx;
});
monet.canvas.two_pi = ((2) * Math.PI);
/**
 * Draws an ellipse at position (x, y) with radius (rw, rh)
 */
monet.canvas.ellipse = (function monet$canvas$ellipse(ctx,p__24881){
var map__24884 = p__24881;
var map__24884__$1 = cljs.core.__destructure_map(map__24884);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24884__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24884__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var rw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24884__$1,new cljs.core.Keyword(null,"rw","rw",1113242370));
var rh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24884__$1,new cljs.core.Keyword(null,"rh","rh",1692287680));
return monet.canvas.restore(monet.canvas.close_path(monet.canvas.arc(monet.canvas.begin_path(monet.canvas.scale(monet.canvas.save(ctx),(1),(rh / rw))),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"r","r",-471384190),rw,new cljs.core.Keyword(null,"start-angle","start-angle",-1763140493),(0),new cljs.core.Keyword(null,"end-angle","end-angle",1398887581),monet.canvas.two_pi,new cljs.core.Keyword(null,"counter-clockwise?","counter-clockwise?",488698965),false], null))));
});
/**
 * Draws a circle at position (x, y) with radius r
 */
monet.canvas.circle = (function monet$canvas$circle(ctx,p__24891){
var map__24893 = p__24891;
var map__24893__$1 = cljs.core.__destructure_map(map__24893);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24893__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24893__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24893__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return monet.canvas.close_path(monet.canvas.arc(monet.canvas.begin_path(ctx),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"start-angle","start-angle",-1763140493),(0),new cljs.core.Keyword(null,"end-angle","end-angle",1398887581),monet.canvas.two_pi,new cljs.core.Keyword(null,"counter-clockwise?","counter-clockwise?",488698965),true], null)));
});
/**
 * Paints the given text at a starting point at (x, y), using the
 * current fill style.
 */
monet.canvas.text = (function monet$canvas$text(ctx,p__24895){
var map__24896 = p__24895;
var map__24896__$1 = cljs.core.__destructure_map(map__24896);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24896__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24896__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24896__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
ctx.fillText(text,x,y);

return ctx;
});
/**
 * Sets the font. Default value 10px sans-serif.
 */
monet.canvas.font_style = (function monet$canvas$font_style(ctx,font){
(ctx.font = font);

return ctx;
});
/**
 * Color or style to use inside shapes. Default #000 (black).
 */
monet.canvas.fill_style = (function monet$canvas$fill_style(ctx,color){
(ctx.fillStyle = cljs.core.name(color));

return ctx;
});
/**
 * Color or style to use for the lines around shapes. Default #000 (black).
 */
monet.canvas.stroke_style = (function monet$canvas$stroke_style(ctx,color){
(ctx.strokeStyle = cljs.core.name(color));

return ctx;
});
/**
 * Sets the line width. Default 1.0
 */
monet.canvas.stroke_width = (function monet$canvas$stroke_width(ctx,w){
(ctx.lineWidth = w);

return ctx;
});
/**
 * Sets the line cap. Possible values (as string or keyword):
 * butt (default), round, square
 */
monet.canvas.stroke_cap = (function monet$canvas$stroke_cap(ctx,cap){
(ctx.lineCap = cljs.core.name(cap));

return ctx;
});
/**
 * Can be set, to change the line join style. Possible values (as string
 * or keyword): bevel, round, and miter. Other values are ignored.
 */
monet.canvas.stroke_join = (function monet$canvas$stroke_join(ctx,join){
(ctx.lineJoin = cljs.core.name(join));

return ctx;
});
/**
 * Moves the starting point of a new subpath to the (x, y) coordinates.
 */
monet.canvas.move_to = (function monet$canvas$move_to(ctx,x,y){
ctx.moveTo(x,y);

return ctx;
});
/**
 * Connects the last point in the subpath to the x, y coordinates with a
 * straight line.
 */
monet.canvas.line_to = (function monet$canvas$line_to(ctx,x,y){
ctx.lineTo(x,y);

return ctx;
});
/**
 * Global Alpha value that is applied to shapes and images before they are
 * composited onto the canvas. Default 1.0 (opaque).
 */
monet.canvas.alpha = (function monet$canvas$alpha(ctx,a){
(ctx.globalAlpha = a);

return ctx;
});
/**
 * With Global Alpha applied this sets how shapes and images are drawn
 * onto the existing bitmap. Possible values (as string or keyword):
 * source-atop, source-in, source-out, source-over (default),
 * destination-atop, destination-in, destination-out, destination-over,
 * lighter, darker, copy, xor
 */
monet.canvas.composition_operation = (function monet$canvas$composition_operation(ctx,operation){
(ctx.globalCompositionOperation = cljs.core.name(operation));

return ctx;
});
/**
 * Sets the text alignment attribute. Possible values (specified
 * as a string or keyword): start (default), end, left, right or
 * center.
 */
monet.canvas.text_align = (function monet$canvas$text_align(ctx,alignment){
(ctx.textAlign = cljs.core.name(alignment));

return ctx;
});
/**
 * Sets the text baseline attribute. Possible values (specified
 * as a string or keyword): top, hanging, middle, alphabetic (default),
 * ideographic, bottom
 */
monet.canvas.text_baseline = (function monet$canvas$text_baseline(ctx,alignment){
(ctx.textBaseline = cljs.core.name(alignment));

return ctx;
});
/**
 * Gets the pixel value as a hash map of RGBA values
 */
monet.canvas.get_pixel = (function monet$canvas$get_pixel(ctx,x,y){
var imgd = ctx.getImageData(x,y,(1),(1)).data;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"red","red",-969428204),(imgd[(0)]),new cljs.core.Keyword(null,"green","green",-945526839),(imgd[(1)]),new cljs.core.Keyword(null,"blue","blue",-622100620),(imgd[(2)]),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(imgd[(3)])], null);
});
/**
 * Draws the image onto the canvas at the given position.
 * If a map of params is given, the number of entries is used to
 * determine the underlying call to make.
 */
monet.canvas.draw_image = (function monet$canvas$draw_image(var_args){
var G__24945 = arguments.length;
switch (G__24945) {
case 4:
return monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$4 = (function (ctx,img,x,y){
ctx.drawImage(img,x,y);

return ctx;
}));

(monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$3 = (function (ctx,img,p__24952){
var map__24953 = p__24952;
var map__24953__$1 = cljs.core.__destructure_map(map__24953);
var params = map__24953__$1;
var sh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24953__$1,new cljs.core.Keyword(null,"sh","sh",-682444007));
var sw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24953__$1,new cljs.core.Keyword(null,"sw","sw",833113913));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24953__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24953__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var dh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24953__$1,new cljs.core.Keyword(null,"dh","dh",528137731));
var dx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24953__$1,new cljs.core.Keyword(null,"dx","dx",-381796732));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24953__$1,new cljs.core.Keyword(null,"w","w",354169001));
var sy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24953__$1,new cljs.core.Keyword(null,"sy","sy",227523849));
var dy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24953__$1,new cljs.core.Keyword(null,"dy","dy",1719547243));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24953__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var dw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24953__$1,new cljs.core.Keyword(null,"dw","dw",-821060841));
var sx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24953__$1,new cljs.core.Keyword(null,"sx","sx",-403071592));
var pred__24955_25122 = cljs.core._EQ_;
var expr__24956_25123 = cljs.core.count(params);
if(cljs.core.truth_((pred__24955_25122.cljs$core$IFn$_invoke$arity$2 ? pred__24955_25122.cljs$core$IFn$_invoke$arity$2((2),expr__24956_25123) : pred__24955_25122.call(null,(2),expr__24956_25123)))){
ctx.drawImage(img,x,y);
} else {
if(cljs.core.truth_((pred__24955_25122.cljs$core$IFn$_invoke$arity$2 ? pred__24955_25122.cljs$core$IFn$_invoke$arity$2((4),expr__24956_25123) : pred__24955_25122.call(null,(4),expr__24956_25123)))){
ctx.drawImage(img,x,y,w,h);
} else {
if(cljs.core.truth_((pred__24955_25122.cljs$core$IFn$_invoke$arity$2 ? pred__24955_25122.cljs$core$IFn$_invoke$arity$2((8),expr__24956_25123) : pred__24955_25122.call(null,(8),expr__24956_25123)))){
ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh);
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__24956_25123))));
}
}
}

return ctx;
}));

(monet.canvas.draw_image.cljs$lang$maxFixedArity = 4);

monet.canvas.quadratic_curve_to = (function monet$canvas$quadratic_curve_to(var_args){
var G__24966 = arguments.length;
switch (G__24966) {
case 5:
return monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 2:
return monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$5 = (function (ctx,cpx,cpy,x,y){
ctx.quadraticCurveTo(cpx,cpy,x,y);

return ctx;
}));

(monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$2 = (function (ctx,p__24975){
var map__24978 = p__24975;
var map__24978__$1 = cljs.core.__destructure_map(map__24978);
var cpx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24978__$1,new cljs.core.Keyword(null,"cpx","cpx",296463436));
var cpy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24978__$1,new cljs.core.Keyword(null,"cpy","cpy",-1203422450));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24978__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24978__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
ctx.quadraticCurveTo(cpx,cpy,x,y);

return ctx;
}));

(monet.canvas.quadratic_curve_to.cljs$lang$maxFixedArity = 5);

monet.canvas.bezier_curve_to = (function monet$canvas$bezier_curve_to(var_args){
var G__24981 = arguments.length;
switch (G__24981) {
case 7:
return monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 2:
return monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$7 = (function (ctx,cp1x,cp1y,cp2x,cp2y,x,y){
ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);

return ctx;
}));

(monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$2 = (function (ctx,p__24986){
var map__24987 = p__24986;
var map__24987__$1 = cljs.core.__destructure_map(map__24987);
var cp1x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24987__$1,new cljs.core.Keyword(null,"cp1x","cp1x",465245137));
var cp1y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24987__$1,new cljs.core.Keyword(null,"cp1y","cp1y",628283543));
var cp2x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24987__$1,new cljs.core.Keyword(null,"cp2x","cp2x",-1682644749));
var cp2y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24987__$1,new cljs.core.Keyword(null,"cp2y","cp2y",903335801));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24987__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24987__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);

return ctx;
}));

(monet.canvas.bezier_curve_to.cljs$lang$maxFixedArity = 7);

monet.canvas.rounded_rect = (function monet$canvas$rounded_rect(ctx,p__25009){
var map__25011 = p__25009;
var map__25011__$1 = cljs.core.__destructure_map(map__25011);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25011__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25011__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25011__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25011__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25011__$1,new cljs.core.Keyword(null,"r","r",-471384190));

monet.canvas.stroke(monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$5(monet.canvas.line_to(monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$5(monet.canvas.line_to(monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$5(monet.canvas.line_to(monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$5(monet.canvas.line_to(monet.canvas.move_to(monet.canvas.begin_path(ctx),x,(y + r)),x,((y + h) - r)),x,(y + h),(x + r),(y + h)),((x + w) - r),(y + h)),(x + w),(y + h),(x + w),((y + h) - r)),(x + w),(y + r)),(x + w),y,((x + w) - r),y),(x + r),y),x,y,x,(y + r)));

return ctx;
});
monet.canvas.add_entity = (function monet$canvas$add_entity(mc,k,ent){
return (new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k] = ent);
});
monet.canvas.remove_entity = (function monet$canvas$remove_entity(mc,k){
return delete new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k];
});
monet.canvas.get_entity = (function monet$canvas$get_entity(mc,k){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k]));
});
monet.canvas.update_entity = (function monet$canvas$update_entity(var_args){
var args__5903__auto__ = [];
var len__5897__auto___25131 = arguments.length;
var i__5898__auto___25132 = (0);
while(true){
if((i__5898__auto___25132 < len__5897__auto___25131)){
args__5903__auto__.push((arguments[i__5898__auto___25132]));

var G__25133 = (i__5898__auto___25132 + (1));
i__5898__auto___25132 = G__25133;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return monet.canvas.update_entity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(monet.canvas.update_entity.cljs$core$IFn$_invoke$arity$variadic = (function (mc,k,func,extra){
var cur = (new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k]);
var res = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(func,cur,extra);
return (new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k] = res);
}));

(monet.canvas.update_entity.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(monet.canvas.update_entity.cljs$lang$applyTo = (function (seq25030){
var G__25031 = cljs.core.first(seq25030);
var seq25030__$1 = cljs.core.next(seq25030);
var G__25032 = cljs.core.first(seq25030__$1);
var seq25030__$2 = cljs.core.next(seq25030__$1);
var G__25033 = cljs.core.first(seq25030__$2);
var seq25030__$3 = cljs.core.next(seq25030__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25031,G__25032,G__25033,seq25030__$3);
}));

monet.canvas.clear_BANG_ = (function monet$canvas$clear_BANG_(mc){
var ks = cljs.core.js_keys(new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc));
var seq__25053 = cljs.core.seq(ks);
var chunk__25054 = null;
var count__25055 = (0);
var i__25056 = (0);
while(true){
if((i__25056 < count__25055)){
var k = chunk__25054.cljs$core$IIndexed$_nth$arity$2(null,i__25056);
monet.canvas.remove_entity(mc,k);


var G__25135 = seq__25053;
var G__25136 = chunk__25054;
var G__25137 = count__25055;
var G__25138 = (i__25056 + (1));
seq__25053 = G__25135;
chunk__25054 = G__25136;
count__25055 = G__25137;
i__25056 = G__25138;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__25053);
if(temp__5825__auto__){
var seq__25053__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25053__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__25053__$1);
var G__25139 = cljs.core.chunk_rest(seq__25053__$1);
var G__25140 = c__5694__auto__;
var G__25141 = cljs.core.count(c__5694__auto__);
var G__25142 = (0);
seq__25053 = G__25139;
chunk__25054 = G__25140;
count__25055 = G__25141;
i__25056 = G__25142;
continue;
} else {
var k = cljs.core.first(seq__25053__$1);
monet.canvas.remove_entity(mc,k);


var G__25143 = cljs.core.next(seq__25053__$1);
var G__25144 = null;
var G__25145 = (0);
var G__25146 = (0);
seq__25053 = G__25143;
chunk__25054 = G__25144;
count__25055 = G__25145;
i__25056 = G__25146;
continue;
}
} else {
return null;
}
}
break;
}
});
monet.canvas.entity = (function monet$canvas$entity(v,update,draw){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"draw","draw",1358331674),draw,new cljs.core.Keyword(null,"update","update",1045576396),update], null);
});
monet.canvas.attr = (function monet$canvas$attr(e,a){
return e.getAttribute(a);
});
monet.canvas.draw_loop = (function monet$canvas$draw_loop(p__25061){
var map__25062 = p__25061;
var map__25062__$1 = cljs.core.__destructure_map(map__25062);
var mc = map__25062__$1;
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25062__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var updating_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25062__$1,new cljs.core.Keyword(null,"updating?","updating?",1586585646));
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25062__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25062__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var entities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25062__$1,new cljs.core.Keyword(null,"entities","entities",1940967403));
var last_frame_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25062__$1,new cljs.core.Keyword(null,"last-frame-time","last-frame-time",974078617));
monet.canvas.clear_rect(ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"w","w",354169001),monet.canvas.attr(canvas,"width"),new cljs.core.Keyword(null,"h","h",1109658740),monet.canvas.attr(canvas,"height")], null));

if(cljs.core.truth_(cljs.core.deref(active))){
var ks_25150 = cljs.core.js_keys(entities);
var cnt_25151 = ks_25150.length;
var now_25152 = Date.now();
var dt_25153 = (now_25152 - cljs.core.deref(last_frame_time));
cljs.core.reset_BANG_(last_frame_time,now_25152);

var i_25156 = (0);
while(true){
if((i_25156 < cnt_25151)){
var k_25157 = (ks_25150[i_25156]);
var map__25066_25158 = (entities[k_25157]);
var map__25066_25159__$1 = cljs.core.__destructure_map(map__25066_25158);
var ent_25160 = map__25066_25159__$1;
var draw_25161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25066_25159__$1,new cljs.core.Keyword(null,"draw","draw",1358331674));
var update_25162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25066_25159__$1,new cljs.core.Keyword(null,"update","update",1045576396));
var value_25163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25066_25159__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5160__auto__ = update_25162;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.deref(updating_QMARK_);
} else {
return and__5160__auto__;
}
})())){
var updated_25165 = (function (){var or__5162__auto__ = (function (){try{return (update_25162.cljs$core$IFn$_invoke$arity$2 ? update_25162.cljs$core$IFn$_invoke$arity$2(value_25163,dt_25153) : update_25162.call(null,value_25163,dt_25153));
}catch (e25074){if((e25074 instanceof Error)){
var e = e25074;
console.log(e);

return value_25163;
} else {
throw e25074;

}
}})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return value_25163;
}
})();
if(cljs.core.truth_((entities[k_25157]))){
(entities[k_25157] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ent_25160,new cljs.core.Keyword(null,"value","value",305978217),updated_25165));
} else {
}
} else {
}

if(cljs.core.truth_(draw_25161)){
try{var G__25078_25181 = ctx;
var G__25079_25182 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1((entities[k_25157]));
(draw_25161.cljs$core$IFn$_invoke$arity$2 ? draw_25161.cljs$core$IFn$_invoke$arity$2(G__25078_25181,G__25079_25182) : draw_25161.call(null,G__25078_25181,G__25079_25182));
}catch (e25076){if((e25076 instanceof Error)){
var e_25183 = e25076;
console.log(e_25183);
} else {
throw e25076;

}
}} else {
}

var G__25184 = (i_25156 + (1));
i_25156 = G__25184;
continue;
} else {
}
break;
}

var G__25080 = (function (){
return (monet.canvas.draw_loop.cljs$core$IFn$_invoke$arity$1 ? monet.canvas.draw_loop.cljs$core$IFn$_invoke$arity$1(mc) : monet.canvas.draw_loop.call(null,mc));
});
return (monet.core.animation_frame.cljs$core$IFn$_invoke$arity$1 ? monet.core.animation_frame.cljs$core$IFn$_invoke$arity$1(G__25080) : monet.core.animation_frame.call(null,G__25080));
} else {
return null;
}
});
monet.canvas.monet_canvas = (function monet$canvas$monet_canvas(elem,context_type){
var ct = (function (){var or__5162__auto__ = context_type;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "2d";
}
})();
var ctx = monet.canvas.get_context(elem,ct);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),elem,new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx,new cljs.core.Keyword(null,"last-frame-time","last-frame-time",974078617),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(Date.now()),new cljs.core.Keyword(null,"entities","entities",1940967403),({}),new cljs.core.Keyword(null,"updating?","updating?",1586585646),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true),new cljs.core.Keyword(null,"active","active",1895962068),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true)], null);
});
monet.canvas.init = (function monet$canvas$init(var_args){
var args__5903__auto__ = [];
var len__5897__auto___25186 = arguments.length;
var i__5898__auto___25187 = (0);
while(true){
if((i__5898__auto___25187 < len__5897__auto___25186)){
args__5903__auto__.push((arguments[i__5898__auto___25187]));

var G__25188 = (i__5898__auto___25187 + (1));
i__5898__auto___25187 = G__25188;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return monet.canvas.init.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(monet.canvas.init.cljs$core$IFn$_invoke$arity$variadic = (function (canvas,p__25089){
var vec__25094 = p__25089;
var context_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25094,(0),null);
var mc = monet.canvas.monet_canvas(canvas,context_type);
monet.canvas.draw_loop(mc);

return mc;
}));

(monet.canvas.init.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(monet.canvas.init.cljs$lang$applyTo = (function (seq25086){
var G__25087 = cljs.core.first(seq25086);
var seq25086__$1 = cljs.core.next(seq25086);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25087,seq25086__$1);
}));

monet.canvas.stop = (function monet$canvas$stop(mc){
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(mc),false);
});
monet.canvas.stop_updating = (function monet$canvas$stop_updating(mc){
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"updating?","updating?",1586585646).cljs$core$IFn$_invoke$arity$1(mc),false);
});
monet.canvas.start_updating = (function monet$canvas$start_updating(mc){
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"updating?","updating?",1586585646).cljs$core$IFn$_invoke$arity$1(mc),true);
});
monet.canvas.restart = (function monet$canvas$restart(mc){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(mc),true);

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"last-frame-time","last-frame-time",974078617).cljs$core$IFn$_invoke$arity$1(mc),Date.now());

return monet.canvas.draw_loop(mc);
});
/**
 * Ends the current path without closing it. 
 *   In the HTML5 Canvas API this is endPath(). 
 *   If the path is already open, end-path has no effect.
 */
monet.canvas.end_path = (function monet$canvas$end_path(ctx){
return ctx.endPath();
});

//# sourceMappingURL=monet.canvas.js.map
