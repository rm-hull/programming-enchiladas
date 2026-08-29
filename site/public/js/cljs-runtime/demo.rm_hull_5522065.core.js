goog.provide('demo.rm_hull_5522065.core');
enchilada.core.show((enchilada.canvas.cljs$core$IFn$_invoke$arity$0 ? enchilada.canvas.cljs$core$IFn$_invoke$arity$0() : enchilada.canvas.call(null)));
enchilada.core.hide((enchilada.svg.cljs$core$IFn$_invoke$arity$0 ? enchilada.svg.cljs$core$IFn$_invoke$arity$0() : enchilada.svg.call(null)));
demo.rm_hull_5522065.core.draw_frame_BANG_ = (function demo$rm_hull_5522065$core$draw_frame_BANG_(img,v,t){
var w = ((600) + (Math.sin(t) * (100)));
var r = Math.floor((Math.sin((t * (3))) * (255)));
var g = Math.floor((Math.sin((t * (5))) * (255)));
var b = Math.floor((Math.sin((t * (7))) * (255)));
return monet.canvas.translate(monet.canvas.rotate(monet.canvas.translate(monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$3(monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$3(monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$3(monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$3(monet.canvas.fill_rect(monet.canvas.fill_rect(monet.canvas.fill_style(monet.canvas.fill_rect(monet.canvas.fill_rect(monet.canvas.fill_style(enchilada.ctx,"rgba(0,0,0,0.005)"),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"h","h",1109658740),w], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),w,new cljs.core.Keyword(null,"y","y",-1757859776),w,new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"h","h",1109658740),w], null)),(""+"rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)+",0.1)")),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),w,new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"h","h",1109658740),w], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),w,new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"h","h",1109658740),w], null)),img,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),w,new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"h","h",1109658740),w], null)),img,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),w,new cljs.core.Keyword(null,"y","y",-1757859776),w,new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"h","h",1109658740),w], null)),img,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),w,new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"h","h",1109658740),w], null)),img,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"h","h",1109658740),w], null)),v,v),(0.01 * Math.abs(Math.sin(t)))),(- v),(- v));
});
demo.rm_hull_5522065.core.animate = (function demo$rm_hull_5522065$core$animate(img,v){
var loop = (function demo$rm_hull_5522065$core$animate_$_loop(t){
return (function (){
var G__24927 = demo$rm_hull_5522065$core$animate_$_loop((t + 0.01));
var G__24928 = demo.rm_hull_5522065.core.draw_frame_BANG_(img,v,t);
return (monet.core.animation_frame.cljs$core$IFn$_invoke$arity$2 ? monet.core.animation_frame.cljs$core$IFn$_invoke$arity$2(G__24927,G__24928) : monet.core.animation_frame.call(null,G__24927,G__24928));
});
});
var fexpr__24929 = loop((0));
return (fexpr__24929.cljs$core$IFn$_invoke$arity$0 ? fexpr__24929.cljs$core$IFn$_invoke$arity$0() : fexpr__24929.call(null));
});
demo.rm_hull_5522065.core.animate(enchilada.canvas.get((0)),(450));

//# sourceMappingURL=demo.rm_hull_5522065.core.js.map
