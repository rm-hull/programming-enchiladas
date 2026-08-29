goog.provide('demo.rm_hull_7098992.core');
demo.rm_hull_7098992.core.width = cljs.core.first((enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0 ? enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0() : enchilada.canvas_size.call(null)));
demo.rm_hull_7098992.core.height = cljs.core.second((enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0 ? enchilada.canvas_size.cljs$core$IFn$_invoke$arity$0() : enchilada.canvas_size.call(null)));
demo.rm_hull_7098992.core.inflate = (function demo$rm_hull_7098992$core$inflate(shape,multiplier){
return wireframes.shapes.primitives.transform_shape(wireframes.transform.scale.cljs$core$IFn$_invoke$arity$1(multiplier))(shape);
});
demo.rm_hull_7098992.core.shape = demo.rm_hull_7098992.core.inflate((function (){var pred__25695 = cljs.core._EQ_;
var expr__25696 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((enchilada.value_of.cljs$core$IFn$_invoke$arity$2 ? enchilada.value_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shape","shape",1190694006),"torus") : enchilada.value_of.call(null,new cljs.core.Keyword(null,"shape","shape",1190694006),"torus")));
if(cljs.core.truth_((pred__25695.cljs$core$IFn$_invoke$arity$2 ? pred__25695.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"torus","torus",790837427),expr__25696) : pred__25695.call(null,new cljs.core.Keyword(null,"torus","torus",790837427),expr__25696)))){
return wireframes.shapes.curved_solids.make_torus((1),(3),(30),(30));
} else {
if(cljs.core.truth_((pred__25695.cljs$core$IFn$_invoke$arity$2 ? pred__25695.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wineglass","wineglass",-93152434),expr__25696) : pred__25695.call(null,new cljs.core.Keyword(null,"wineglass","wineglass",-93152434),expr__25696)))){
return wireframes.shapes.curved_solids.make_wineglass((20));
} else {
if(cljs.core.truth_((pred__25695.cljs$core$IFn$_invoke$arity$2 ? pred__25695.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sphere","sphere",384337120),expr__25696) : pred__25695.call(null,new cljs.core.Keyword(null,"sphere","sphere",384337120),expr__25696)))){
return wireframes.shapes.curved_solids.make_sphere((3),(30));
} else {
if(cljs.core.truth_((pred__25695.cljs$core$IFn$_invoke$arity$2 ? pred__25695.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"isosphere","isosphere",1898661828),expr__25696) : pred__25695.call(null,new cljs.core.Keyword(null,"isosphere","isosphere",1898661828),expr__25696)))){
return wireframes.shapes.curved_solids.make_isosphere((3),(2));
} else {
if(cljs.core.truth_((pred__25695.cljs$core$IFn$_invoke$arity$2 ? pred__25695.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mobius-strip","mobius-strip",-741607290),expr__25696) : pred__25695.call(null,new cljs.core.Keyword(null,"mobius-strip","mobius-strip",-741607290),expr__25696)))){
return wireframes.shapes.curved_solids.make_mobius_strip((50),(10));
} else {
if(cljs.core.truth_((pred__25695.cljs$core$IFn$_invoke$arity$2 ? pred__25695.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"klein-bottle","klein-bottle",119493576),expr__25696) : pred__25695.call(null,new cljs.core.Keyword(null,"klein-bottle","klein-bottle",119493576),expr__25696)))){
return wireframes.shapes.curved_solids.make_klein_bottle((6),(2),(2),(40));
} else {
if(cljs.core.truth_((pred__25695.cljs$core$IFn$_invoke$arity$2 ? pred__25695.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"klein-bagel","klein-bagel",-1606018051),expr__25696) : pred__25695.call(null,new cljs.core.Keyword(null,"klein-bagel","klein-bagel",-1606018051),expr__25696)))){
return wireframes.shapes.curved_solids.make_klein_bagel((2),(40));
} else {
if(cljs.core.truth_((pred__25695.cljs$core$IFn$_invoke$arity$2 ? pred__25695.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cobra","cobra",-1492654991),expr__25696) : pred__25695.call(null,new cljs.core.Keyword(null,"cobra","cobra",-1492654991),expr__25696)))){
return demo.rm_hull_7098992.elite.cobra_mk3;
} else {
if(cljs.core.truth_((pred__25695.cljs$core$IFn$_invoke$arity$2 ? pred__25695.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cube","cube",-1501611368),expr__25696) : pred__25695.call(null,new cljs.core.Keyword(null,"cube","cube",-1501611368),expr__25696)))){
return wireframes.shapes.platonic_solids.cube;
} else {
if(cljs.core.truth_((pred__25695.cljs$core$IFn$_invoke$arity$2 ? pred__25695.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tetrahedron","tetrahedron",-902050819),expr__25696) : pred__25695.call(null,new cljs.core.Keyword(null,"tetrahedron","tetrahedron",-902050819),expr__25696)))){
return wireframes.shapes.platonic_solids.tetrahedron;
} else {
if(cljs.core.truth_((pred__25695.cljs$core$IFn$_invoke$arity$2 ? pred__25695.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"icosahedron","icosahedron",-1698316329),expr__25696) : pred__25695.call(null,new cljs.core.Keyword(null,"icosahedron","icosahedron",-1698316329),expr__25696)))){
return wireframes.shapes.platonic_solids.icosahedron;
} else {
if(cljs.core.truth_((pred__25695.cljs$core$IFn$_invoke$arity$2 ? pred__25695.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dodecahedron","dodecahedron",-1629151490),expr__25696) : pred__25695.call(null,new cljs.core.Keyword(null,"dodecahedron","dodecahedron",-1629151490),expr__25696)))){
return wireframes.shapes.platonic_solids.dodecahedron;
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__25696))));
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
})(),parseFloat((enchilada.value_of.cljs$core$IFn$_invoke$arity$2 ? enchilada.value_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"scale","scale",-230427353),(1)) : enchilada.value_of.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353),(1)))));
demo.rm_hull_7098992.core.style = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((enchilada.value_of.cljs$core$IFn$_invoke$arity$2 ? enchilada.value_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"transparent","transparent",-2073609949)) : enchilada.value_of.call(null,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"transparent","transparent",-2073609949))));
demo.rm_hull_7098992.core.color = inkspot.color.coerce((enchilada.value_of.cljs$core$IFn$_invoke$arity$2 ? enchilada.value_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)) : enchilada.value_of.call(null,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618))));
demo.rm_hull_7098992.core.color_fn = (function (){var pred__25749 = cljs.core._EQ_;
var expr__25750 = demo.rm_hull_7098992.core.style;
if(cljs.core.truth_((pred__25749.cljs$core$IFn$_invoke$arity$2 ? pred__25749.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transparent","transparent",-2073609949),expr__25750) : pred__25749.call(null,new cljs.core.Keyword(null,"transparent","transparent",-2073609949),expr__25750)))){
return wireframes.renderer.color.wireframe.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([demo.rm_hull_7098992.core.color,demo.rm_hull_7098992.core.style], 0));
} else {
if(cljs.core.truth_((pred__25749.cljs$core$IFn$_invoke$arity$2 ? pred__25749.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"translucent","translucent",-1428111933),expr__25750) : pred__25749.call(null,new cljs.core.Keyword(null,"translucent","translucent",-1428111933),expr__25750)))){
return wireframes.renderer.color.wireframe.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([demo.rm_hull_7098992.core.color,demo.rm_hull_7098992.core.style], 0));
} else {
if(cljs.core.truth_((pred__25749.cljs$core$IFn$_invoke$arity$2 ? pred__25749.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"opaque","opaque",-1243552654),expr__25750) : pred__25749.call(null,new cljs.core.Keyword(null,"opaque","opaque",-1243552654),expr__25750)))){
return wireframes.renderer.color.wireframe.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([demo.rm_hull_7098992.core.color,demo.rm_hull_7098992.core.style], 0));
} else {
if(cljs.core.truth_((pred__25749.cljs$core$IFn$_invoke$arity$2 ? pred__25749.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shaded","shaded",561405058),expr__25750) : pred__25749.call(null,new cljs.core.Keyword(null,"shaded","shaded",561405058),expr__25750)))){
return wireframes.renderer.color.solid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([demo.rm_hull_7098992.core.color], 0));
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__25750))));
}
}
}
}
})();
/**
 * Draws the shape at the given state of the world (the x,y,z rotation angles)
 */
demo.rm_hull_7098992.core.render_shape = (function demo$rm_hull_7098992$core$render_shape(p__25769){
var vec__25772 = p__25769;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25772,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25772,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25772,(2),null);
monet.canvas.fill_rect(monet.canvas.fill_style(enchilada.ctx,"rgba(255,255,255,0.75"),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"w","w",354169001),demo.rm_hull_7098992.core.width,new cljs.core.Keyword(null,"h","h",1109658740),demo.rm_hull_7098992.core.height], null));

return wireframes.renderer.canvas.__GT_canvas(enchilada.ctx)(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(wireframes.renderer.canvas.draw_solid,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),demo.rm_hull_7098992.core.style,new cljs.core.Keyword(null,"focal-length","focal-length",-1978298454),(3),new cljs.core.Keyword(null,"color-fn","color-fn",1518098073),demo.rm_hull_7098992.core.color_fn,new cljs.core.Keyword(null,"shape","shape",1190694006),demo.rm_hull_7098992.core.shape,new cljs.core.Keyword(null,"transform","transform",1381301764),wireframes.transform.combine.cljs$core$IFn$_invoke$arity$variadic(wireframes.transform.rotate(new cljs.core.Keyword(null,"x","x",2099068185),wireframes.transform.degrees__GT_radians(x)),wireframes.transform.rotate(new cljs.core.Keyword(null,"y","y",-1757859776),wireframes.transform.degrees__GT_radians(y)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([wireframes.transform.rotate(new cljs.core.Keyword(null,"z","z",-789527183),wireframes.transform.degrees__GT_radians(z)),wireframes.transform.translate((0),(0),(16))], 0))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.rm_hull_7098992.core.width,demo.rm_hull_7098992.core.height], null));
});
/**
 * Increment/decrement the rotation angles around the x,y and z axes
 */
demo.rm_hull_7098992.core.update_state = (function demo$rm_hull_7098992$core$update_state(event,p__25786){
var vec__25787 = p__25786;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25787,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25787,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25787,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + 0.3),(y - 0.7),(z + 0.5)], null);
});
monet.canvas.fill_rect(monet.canvas.fill_style(enchilada.ctx,new cljs.core.Keyword(null,"white","white",-483998618)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"w","w",354169001),demo.rm_hull_7098992.core.width,new cljs.core.Keyword(null,"h","h",1109658740),demo.rm_hull_7098992.core.height], null));
jayq.core.show(enchilada.canvas);
big_bang.core.big_bang.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"on-tick","on-tick",-56973396),demo.rm_hull_7098992.core.update_state,new cljs.core.Keyword(null,"to-draw","to-draw",-1467115105),demo.rm_hull_7098992.core.render_shape], 0));

//# sourceMappingURL=demo.rm_hull_7098992.core.js.map
