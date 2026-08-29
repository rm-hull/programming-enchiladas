goog.provide('demo.rm_hull_7778650.core');
demo.rm_hull_7778650.core.random_texture = (function (){var planets = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"earth","earth",1587322357),new cljs.core.Keyword(null,"jupiter","jupiter",394124373),new cljs.core.Keyword(null,"mars","mars",2085578512),new cljs.core.Keyword(null,"mercury","mercury",2043505313),new cljs.core.Keyword(null,"moon","moon",-1802945312),new cljs.core.Keyword(null,"neptune","neptune",-141252204),new cljs.core.Keyword(null,"saturn","saturn",-1044954498),new cljs.core.Keyword(null,"sun","sun",-916295498),new cljs.core.Keyword(null,"uranus","uranus",567559886),new cljs.core.Keyword(null,"venus","venus",-1034805894)], null);
return (function (){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(planets,cljs.core.rand_int(cljs.core.count(planets)));
});
})();
demo.rm_hull_7778650.core.texture_uri = (function demo$rm_hull_7778650$core$texture_uri(texture){
return (""+"https://raw.github.com/rm-hull/solar-textures/master/resources/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(texture))+".jpg");
});
demo.rm_hull_7778650.core.filename = (function (){var G__24978 = demo.rm_hull_7778650.core.texture_uri((function (){var G__24979 = new cljs.core.Keyword(null,"texture","texture",-266291651);
var G__24980 = demo.rm_hull_7778650.core.random_texture();
return (enchilada.value_of.cljs$core$IFn$_invoke$arity$2 ? enchilada.value_of.cljs$core$IFn$_invoke$arity$2(G__24979,G__24980) : enchilada.value_of.call(null,G__24979,G__24980));
})());
return (enchilada.proxy_request.cljs$core$IFn$_invoke$arity$1 ? enchilada.proxy_request.cljs$core$IFn$_invoke$arity$1(G__24978) : enchilada.proxy_request.call(null,G__24978));
})();
demo.rm_hull_7778650.core.globe = (new PhiloGL.O3D.Sphere((function (){var G__24985 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nlat","nlat",541374177),(30),new cljs.core.Keyword(null,"nlong","nlong",-2027803312),(30),new cljs.core.Keyword(null,"radius","radius",-2073122258),(2),new cljs.core.Keyword(null,"textures","textures",560681081),demo.rm_hull_7778650.core.filename], null);
return (enchilada.to_js.cljs$core$IFn$_invoke$arity$1 ? enchilada.to_js.cljs$core$IFn$_invoke$arity$1(G__24985) : enchilada.to_js.call(null,G__24985));
})()));
demo.rm_hull_7778650.core.last_pos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
demo.rm_hull_7778650.core.on_drag_start = (function demo$rm_hull_7778650$core$on_drag_start(e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(demo.rm_hull_7778650.core.last_pos,cljs.core.constantly(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.x,e.y], null)));
});
demo.rm_hull_7778650.core.cam_ob = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
demo.rm_hull_7778650.core.on_drag_move = (function demo$rm_hull_7778650$core$on_drag_move(e){
var pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.x,e.y], null);
var delta_pos = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._,pos,cljs.core.deref(demo.rm_hull_7778650.core.last_pos));
var current__24870__auto___25057 = (demo.rm_hull_7778650.core.globe.rotation.y["x"]);
(demo.rm_hull_7778650.core.globe.rotation.y["x"] = (current__24870__auto___25057 + ((delta_pos.cljs$core$IFn$_invoke$arity$1 ? delta_pos.cljs$core$IFn$_invoke$arity$1((0)) : delta_pos.call(null,(0))) / (100))));

var current__24870__auto___25060 = (demo.rm_hull_7778650.core.globe.rotation.x["x"]);
(demo.rm_hull_7778650.core.globe.rotation.x["x"] = (current__24870__auto___25060 + ((delta_pos.cljs$core$IFn$_invoke$arity$1 ? delta_pos.cljs$core$IFn$_invoke$arity$1((1)) : delta_pos.call(null,(1))) / (100))));

demo.rm_hull_7778650.core.globe.update();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(demo.rm_hull_7778650.core.last_pos,cljs.core.constantly(pos));
});
demo.rm_hull_7778650.core.on_mouse_wheel = (function demo$rm_hull_7778650$core$on_mouse_wheel(e){
var current__24870__auto___25061 = (cljs.core.deref(demo.rm_hull_7778650.core.cam_ob).position.z["x"]);
(cljs.core.deref(demo.rm_hull_7778650.core.cam_ob).position.z["x"] = (current__24870__auto___25061 + e.wheel));

return cljs.core.deref(demo.rm_hull_7778650.core.cam_ob).update();
});
demo.rm_hull_7778650.core.on_error = (function demo$rm_hull_7778650$core$on_error(msg){
return alert((""+"There was an error creating the WebGL demo:\n\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)));
});
demo.rm_hull_7778650.core.init = (function demo$rm_hull_7778650$core$init(canvas,scene,gl){
gl.clearColor(0.0,0.0,0.0,1.0);

gl.clearDepth(1.0);

gl.enable(gl.DEPTH_TEST);

gl.depthFunc(gl.LEQUAL);

gl.viewport((0),(0),canvas.width,canvas.height);

return scene.add(demo.rm_hull_7778650.core.globe);
});
demo.rm_hull_7778650.core.draw = (function demo$rm_hull_7778650$core$draw(canvas,scene,gl){
gl.clear((gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT));

(scene.config.lights = (function (){var G__25040 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"enable","enable",-1839114332),true,new cljs.core.Keyword(null,"ambient","ambient",-983195016),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),0.2,new cljs.core.Keyword(null,"g","g",1738089905),0.2,new cljs.core.Keyword(null,"b","b",1482224470),0.2], null),new cljs.core.Keyword(null,"directional","directional",-395676974),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),0.8,new cljs.core.Keyword(null,"g","g",1738089905),0.8,new cljs.core.Keyword(null,"b","b",1482224470),0.8], null),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),-1.0,new cljs.core.Keyword(null,"y","y",-1757859776),-1.0,new cljs.core.Keyword(null,"z","z",-789527183),-1.0], null)], null)], null);
return (enchilada.to_js.cljs$core$IFn$_invoke$arity$1 ? enchilada.to_js.cljs$core$IFn$_invoke$arity$1(G__25040) : enchilada.to_js.call(null,G__25040));
})());

return scene.render();
});
demo.rm_hull_7778650.core.on_load = (function demo$rm_hull_7778650$core$on_load(app){
var canvas = app.canvas;
var scene = app.scene;
var gl = app.gl;
var cam = app.camera;
demo.rm_hull_7778650.core.init(canvas,scene,gl);

cljs.core.reset_BANG_(demo.rm_hull_7778650.core.cam_ob,cam);

return (function demo$rm_hull_7778650$core$on_load_$_draw_and_request(){
demo.rm_hull_7778650.core.draw(canvas,scene,gl);

return PhiloGL.Fx.requestAnimationFrame(demo$rm_hull_7778650$core$on_load_$_draw_and_request);
})();
});
demo.rm_hull_7778650.core.camera = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"z","z",-789527183),(-7)], null)], null);
demo.rm_hull_7778650.core.textures = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.rm_hull_7778650.core.filename], null),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"TEXTURE_MAG_FILTER",new cljs.core.Keyword(null,"value","value",305978217),"LINEAR"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"TEXTURE_MIN_FILTER",new cljs.core.Keyword(null,"value","value",305978217),"LINEAR"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"TEXTURE_WRAP_S",new cljs.core.Keyword(null,"value","value",305978217),"CLAMP_TO_EDGE"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"TEXTURE_WRAP_T",new cljs.core.Keyword(null,"value","value",305978217),"CLAMP_TO_EDGE"], null)], null)], null);
demo.rm_hull_7778650.core.webgl_start = (function demo$rm_hull_7778650$core$webgl_start(){
jayq.core.show(enchilada.webgl);

return PhiloGL("webgl-area",(function (){var G__25052 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"camera","camera",-1190348585),demo.rm_hull_7778650.core.camera,new cljs.core.Keyword(null,"textures","textures",560681081),demo.rm_hull_7778650.core.textures,new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onDragStart","onDragStart",-2108300997),demo.rm_hull_7778650.core.on_drag_start,new cljs.core.Keyword(null,"onDragMove","onDragMove",810982990),demo.rm_hull_7778650.core.on_drag_move,new cljs.core.Keyword(null,"onMouseWheel","onMouseWheel",-1060938815),demo.rm_hull_7778650.core.on_mouse_wheel], null),new cljs.core.Keyword(null,"onError","onError",1669791984),demo.rm_hull_7778650.core.on_error,new cljs.core.Keyword(null,"onLoad","onLoad",-1227893830),demo.rm_hull_7778650.core.on_load], null);
return (enchilada.to_js.cljs$core$IFn$_invoke$arity$1 ? enchilada.to_js.cljs$core$IFn$_invoke$arity$1(G__25052) : enchilada.to_js.call(null,G__25052));
})());
});
jayq.core.document_ready(demo.rm_hull_7778650.core.webgl_start);

//# sourceMappingURL=demo.rm_hull_7778650.core.js.map
