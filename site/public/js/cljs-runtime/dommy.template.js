goog.provide('dommy.template');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["path",null,"svg",null,"text",null,"line",null,"polygon",null,"textPath",null,"polyline",null,"g",null,"clipPath",null,"rect",null,"circle",null], null), null);

/**
 * @interface
 */
dommy.template.PElement = function(){};

var dommy$template$PElement$_elem$dyn_30602 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (dommy.template._elem[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (dommy.template._elem["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("PElement.-elem",this$);
}
}
});
/**
 * return the element representation of this
 */
dommy.template._elem = (function dommy$template$_elem(this$){
if((((!((this$ == null)))) && ((!((this$.dommy$template$PElement$_elem$arity$1 == null)))))){
return this$.dommy$template$PElement$_elem$arity$1(this$);
} else {
return dommy$template$PElement$_elem$dyn_30602(this$);
}
});

/**
 * index of css character (#,.) in base-element. bottleneck
 */
dommy.template.next_css_index = (function dommy$template$next_css_index(s,start_idx){
var id_idx = s.indexOf("#",start_idx);
var class_idx = s.indexOf(".",start_idx);
var idx = Math.min(id_idx,class_idx);
if((idx < (0))){
return Math.max(id_idx,class_idx);
} else {
return idx;
}
});
/**
 * dom element from css-style keyword like :a.class1 or :span#my-span.class
 */
dommy.template.base_element = (function dommy$template$base_element(node_key){
var node_str = dommy.utils.as_str(node_key);
var base_idx = dommy.template.next_css_index(node_str,(0));
var tag = (((base_idx > (0)))?node_str.substring((0),base_idx):(((base_idx === (0)))?"div":node_str
));
var node = (cljs.core.truth_((dommy.template._PLUS_svg_tags_PLUS_.cljs$core$IFn$_invoke$arity$1 ? dommy.template._PLUS_svg_tags_PLUS_.cljs$core$IFn$_invoke$arity$1(tag) : dommy.template._PLUS_svg_tags_PLUS_.call(null,tag)))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));
if((base_idx >= (0))){
var str_30613 = node_str.substring(base_idx);
while(true){
var next_idx_30614 = dommy.template.next_css_index(str_30613,(1));
var frag_30615 = (((next_idx_30614 >= (0)))?str_30613.substring((0),next_idx_30614):str_30613);
var G__30289_30618 = frag_30615.charAt((0));
switch (G__30289_30618) {
case ".":
dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,frag_30615.substring((1)));

break;
case "#":
node.setAttribute("id",frag_30615.substring((1)));

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30289_30618))));

}

if((next_idx_30614 >= (0))){
var G__30622 = str_30613.substring(next_idx_30614);
str_30613 = G__30622;
continue;
} else {
}
break;
}
} else {
}

return node;
});
dommy.template.throw_unable_to_make_node = (function dommy$template$throw_unable_to_make_node(node_data){
throw (""+"Don't know how to make node from: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node_data], 0))));
});
/**
 * take data and return a document fragment
 */
dommy.template.__GT_document_fragment = (function dommy$template$__GT_document_fragment(var_args){
var G__30315 = arguments.length;
switch (G__30315) {
case 1:
return dommy.template.__GT_document_fragment.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.template.__GT_document_fragment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(dommy.template.__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = (function (data){
return dommy.template.__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(document.createDocumentFragment(),data);
}));

(dommy.template.__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = (function (result_frag,data){
if((((!((data == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === data.dommy$template$PElement$))))?true:(((!data.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(dommy.template.PElement,data):false)):cljs.core.native_satisfies_QMARK_(dommy.template.PElement,data))){
result_frag.appendChild(dommy.template._elem(data));

return result_frag;
} else {
if(cljs.core.seq_QMARK_(data)){
var seq__30327_30624 = cljs.core.seq(data);
var chunk__30328_30625 = null;
var count__30329_30626 = (0);
var i__30330_30627 = (0);
while(true){
if((i__30330_30627 < count__30329_30626)){
var child_30628 = chunk__30328_30625.cljs$core$IIndexed$_nth$arity$2(null,i__30330_30627);
dommy.template.__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(result_frag,child_30628);


var G__30629 = seq__30327_30624;
var G__30630 = chunk__30328_30625;
var G__30631 = count__30329_30626;
var G__30632 = (i__30330_30627 + (1));
seq__30327_30624 = G__30629;
chunk__30328_30625 = G__30630;
count__30329_30626 = G__30631;
i__30330_30627 = G__30632;
continue;
} else {
var temp__5825__auto___30633 = cljs.core.seq(seq__30327_30624);
if(temp__5825__auto___30633){
var seq__30327_30634__$1 = temp__5825__auto___30633;
if(cljs.core.chunked_seq_QMARK_(seq__30327_30634__$1)){
var c__5694__auto___30635 = cljs.core.chunk_first(seq__30327_30634__$1);
var G__30636 = cljs.core.chunk_rest(seq__30327_30634__$1);
var G__30637 = c__5694__auto___30635;
var G__30638 = cljs.core.count(c__5694__auto___30635);
var G__30639 = (0);
seq__30327_30624 = G__30636;
chunk__30328_30625 = G__30637;
count__30329_30626 = G__30638;
i__30330_30627 = G__30639;
continue;
} else {
var child_30640 = cljs.core.first(seq__30327_30634__$1);
dommy.template.__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(result_frag,child_30640);


var G__30641 = cljs.core.next(seq__30327_30634__$1);
var G__30642 = null;
var G__30643 = (0);
var G__30644 = (0);
seq__30327_30624 = G__30641;
chunk__30328_30625 = G__30642;
count__30329_30626 = G__30643;
i__30330_30627 = G__30644;
continue;
}
} else {
}
}
break;
}

return result_frag;
} else {
if((data == null)){
return result_frag;
} else {
return dommy.template.throw_unable_to_make_node(data);

}
}
}
}));

(dommy.template.__GT_document_fragment.cljs$lang$maxFixedArity = 2);

/**
 * take data and return DOM node if it satisfies PElement and tries to
 * make a document fragment otherwise
 */
dommy.template.__GT_node_like = (function dommy$template$__GT_node_like(data){
if((((!((data == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === data.dommy$template$PElement$))))?true:(((!data.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(dommy.template.PElement,data):false)):cljs.core.native_satisfies_QMARK_(dommy.template.PElement,data))){
return dommy.template._elem(data);
} else {
return dommy.template.__GT_document_fragment.cljs$core$IFn$_invoke$arity$1(data);
}
});
/**
 * element with either attrs or nested children [:div [:span "Hello"]]
 */
dommy.template.compound_element = (function dommy$template$compound_element(p__30365){
var vec__30367 = p__30365;
var seq__30368 = cljs.core.seq(vec__30367);
var first__30369 = cljs.core.first(seq__30368);
var seq__30368__$1 = cljs.core.next(seq__30368);
var tag_name = first__30369;
var first__30369__$1 = cljs.core.first(seq__30368__$1);
var seq__30368__$2 = cljs.core.next(seq__30368__$1);
var maybe_attrs = first__30369__$1;
var children = seq__30368__$2;
var n = dommy.template.base_element(tag_name);
var attrs = ((((cljs.core.map_QMARK_(maybe_attrs)) && ((!((((!((maybe_attrs == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === maybe_attrs.dommy$template$PElement$))))?true:(((!maybe_attrs.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(dommy.template.PElement,maybe_attrs):false)):cljs.core.native_satisfies_QMARK_(dommy.template.PElement,maybe_attrs)))))))?maybe_attrs:null);
var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons(maybe_attrs,children));
var seq__30374_30645 = cljs.core.seq(attrs);
var chunk__30375_30646 = null;
var count__30376_30647 = (0);
var i__30377_30648 = (0);
while(true){
if((i__30377_30648 < count__30376_30647)){
var vec__30412_30649 = chunk__30375_30646.cljs$core$IIndexed$_nth$arity$2(null,i__30377_30648);
var k_30650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30412_30649,(0),null);
var v_30651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30412_30649,(1),null);
var G__30416_30654 = k_30650;
var G__30416_30655__$1 = (((G__30416_30654 instanceof cljs.core.Keyword))?G__30416_30654.fqn:null);
switch (G__30416_30655__$1) {
case "class":
dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,v_30651);

break;
case "classes":
var seq__30417_30657 = cljs.core.seq(v_30651);
var chunk__30418_30658 = null;
var count__30419_30659 = (0);
var i__30420_30660 = (0);
while(true){
if((i__30420_30660 < count__30419_30659)){
var c_30664 = chunk__30418_30658.cljs$core$IIndexed$_nth$arity$2(null,i__30420_30660);
dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_30664);


var G__30670 = seq__30417_30657;
var G__30671 = chunk__30418_30658;
var G__30672 = count__30419_30659;
var G__30673 = (i__30420_30660 + (1));
seq__30417_30657 = G__30670;
chunk__30418_30658 = G__30671;
count__30419_30659 = G__30672;
i__30420_30660 = G__30673;
continue;
} else {
var temp__5825__auto___30674 = cljs.core.seq(seq__30417_30657);
if(temp__5825__auto___30674){
var seq__30417_30675__$1 = temp__5825__auto___30674;
if(cljs.core.chunked_seq_QMARK_(seq__30417_30675__$1)){
var c__5694__auto___30676 = cljs.core.chunk_first(seq__30417_30675__$1);
var G__30677 = cljs.core.chunk_rest(seq__30417_30675__$1);
var G__30678 = c__5694__auto___30676;
var G__30679 = cljs.core.count(c__5694__auto___30676);
var G__30680 = (0);
seq__30417_30657 = G__30677;
chunk__30418_30658 = G__30678;
count__30419_30659 = G__30679;
i__30420_30660 = G__30680;
continue;
} else {
var c_30681 = cljs.core.first(seq__30417_30675__$1);
dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_30681);


var G__30682 = cljs.core.next(seq__30417_30675__$1);
var G__30683 = null;
var G__30684 = (0);
var G__30685 = (0);
seq__30417_30657 = G__30682;
chunk__30418_30658 = G__30683;
count__30419_30659 = G__30684;
i__30420_30660 = G__30685;
continue;
}
} else {
}
}
break;
}

break;
default:
dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(n,k_30650,v_30651);

}


var G__30686 = seq__30374_30645;
var G__30687 = chunk__30375_30646;
var G__30688 = count__30376_30647;
var G__30689 = (i__30377_30648 + (1));
seq__30374_30645 = G__30686;
chunk__30375_30646 = G__30687;
count__30376_30647 = G__30688;
i__30377_30648 = G__30689;
continue;
} else {
var temp__5825__auto___30690 = cljs.core.seq(seq__30374_30645);
if(temp__5825__auto___30690){
var seq__30374_30691__$1 = temp__5825__auto___30690;
if(cljs.core.chunked_seq_QMARK_(seq__30374_30691__$1)){
var c__5694__auto___30692 = cljs.core.chunk_first(seq__30374_30691__$1);
var G__30693 = cljs.core.chunk_rest(seq__30374_30691__$1);
var G__30694 = c__5694__auto___30692;
var G__30695 = cljs.core.count(c__5694__auto___30692);
var G__30696 = (0);
seq__30374_30645 = G__30693;
chunk__30375_30646 = G__30694;
count__30376_30647 = G__30695;
i__30377_30648 = G__30696;
continue;
} else {
var vec__30446_30697 = cljs.core.first(seq__30374_30691__$1);
var k_30698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30446_30697,(0),null);
var v_30699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30446_30697,(1),null);
var G__30449_30702 = k_30698;
var G__30449_30703__$1 = (((G__30449_30702 instanceof cljs.core.Keyword))?G__30449_30702.fqn:null);
switch (G__30449_30703__$1) {
case "class":
dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,v_30699);

break;
case "classes":
var seq__30450_30707 = cljs.core.seq(v_30699);
var chunk__30451_30708 = null;
var count__30452_30709 = (0);
var i__30453_30710 = (0);
while(true){
if((i__30453_30710 < count__30452_30709)){
var c_30711 = chunk__30451_30708.cljs$core$IIndexed$_nth$arity$2(null,i__30453_30710);
dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_30711);


var G__30712 = seq__30450_30707;
var G__30713 = chunk__30451_30708;
var G__30714 = count__30452_30709;
var G__30715 = (i__30453_30710 + (1));
seq__30450_30707 = G__30712;
chunk__30451_30708 = G__30713;
count__30452_30709 = G__30714;
i__30453_30710 = G__30715;
continue;
} else {
var temp__5825__auto___30716__$1 = cljs.core.seq(seq__30450_30707);
if(temp__5825__auto___30716__$1){
var seq__30450_30717__$1 = temp__5825__auto___30716__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30450_30717__$1)){
var c__5694__auto___30720 = cljs.core.chunk_first(seq__30450_30717__$1);
var G__30721 = cljs.core.chunk_rest(seq__30450_30717__$1);
var G__30722 = c__5694__auto___30720;
var G__30723 = cljs.core.count(c__5694__auto___30720);
var G__30724 = (0);
seq__30450_30707 = G__30721;
chunk__30451_30708 = G__30722;
count__30452_30709 = G__30723;
i__30453_30710 = G__30724;
continue;
} else {
var c_30725 = cljs.core.first(seq__30450_30717__$1);
dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_30725);


var G__30726 = cljs.core.next(seq__30450_30717__$1);
var G__30727 = null;
var G__30728 = (0);
var G__30729 = (0);
seq__30450_30707 = G__30726;
chunk__30451_30708 = G__30727;
count__30452_30709 = G__30728;
i__30453_30710 = G__30729;
continue;
}
} else {
}
}
break;
}

break;
default:
dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(n,k_30698,v_30699);

}


var G__30730 = cljs.core.next(seq__30374_30691__$1);
var G__30731 = null;
var G__30732 = (0);
var G__30733 = (0);
seq__30374_30645 = G__30730;
chunk__30375_30646 = G__30731;
count__30376_30647 = G__30732;
i__30377_30648 = G__30733;
continue;
}
} else {
}
}
break;
}

n.appendChild(dommy.template.__GT_node_like(children__$1));

return n;
});
(Element.prototype.dommy$template$PElement$ = cljs.core.PROTOCOL_SENTINEL);

(Element.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));

(Comment.prototype.dommy$template$PElement$ = cljs.core.PROTOCOL_SENTINEL);

(Comment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));

(Text.prototype.dommy$template$PElement$ = cljs.core.PROTOCOL_SENTINEL);

(Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));

(cljs.core.PersistentVector.prototype.dommy$template$PElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return dommy.template.compound_element(this$__$1);
}));

(dommy.template.PElement["number"] = true);

(dommy.template._elem["number"] = (function (this$){
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)));
}));

(dommy.template.PElement["string"] = true);

(dommy.template._elem["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return dommy.template.base_element(this$);
} else {
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)));
}
}));
if((typeof HTMLElement !== 'undefined')){
(HTMLElement.prototype.dommy$template$PElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if((typeof DocumentFragment !== 'undefined')){
(DocumentFragment.prototype.dommy$template$PElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if((typeof Document !== 'undefined')){
(Document.prototype.dommy$template$PElement$ = cljs.core.PROTOCOL_SENTINEL);

(Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if((typeof HTMLDocument !== 'undefined')){
(HTMLDocument.prototype.dommy$template$PElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLDocument.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if((typeof SVGElement !== 'undefined')){
(SVGElement.prototype.dommy$template$PElement$ = cljs.core.PROTOCOL_SENTINEL);

(SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if((typeof Window !== 'undefined')){
(Window.prototype.dommy$template$PElement$ = cljs.core.PROTOCOL_SENTINEL);

(Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
dommy.template.node = (function dommy$template$node(data){
if((((!((data == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === data.dommy$template$PElement$))))?true:(((!data.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(dommy.template.PElement,data):false)):cljs.core.native_satisfies_QMARK_(dommy.template.PElement,data))){
return dommy.template._elem(data);
} else {
return dommy.template.throw_unable_to_make_node(data);
}
});
dommy.template.html__GT_nodes = (function dommy$template$html__GT_nodes(html){
var parent = document.createElement("div");
parent.insertAdjacentHTML("beforeend",html);

return cljs.core.seq(Array.prototype.slice.call(parent.childNodes));
});

//# sourceMappingURL=dommy.template.js.map
