goog.provide('dommy.attrs');
/**
 * does class-name string have class starting at index idx.
 * only will be used when Element::classList doesn't exist
 */
dommy.attrs.class_match_QMARK_ = (function dommy$attrs$class_match_QMARK_(class_name,class$,idx){
var and__5160__auto__ = (((idx === (0))) || ((" " === class_name.charAt((idx - (1))))));
if(and__5160__auto__){
var total_len = class_name.length;
var stop = (idx + class$.length);
if((stop <= total_len)){
return (((stop === total_len)) || ((" " === class_name.charAt(stop))));
} else {
return null;
}
} else {
return and__5160__auto__;
}
});
/**
 * Finds the index of class in a space-delimited class-name
 *  only will be used when Element::classList doesn't exist
 */
dommy.attrs.class_index = (function dommy$attrs$class_index(class_name,class$){
var start_from = (0);
while(true){
var i = class_name.indexOf(class$,start_from);
if((i >= (0))){
if(dommy.attrs.class_match_QMARK_(class_name,class$,i)){
return i;
} else {
var G__22784 = (i + class$.length);
start_from = G__22784;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Does an HTML element have a class. Uses Element::classList if
 * available and otherwise does fast parse of className string
 */
dommy.attrs.has_class_QMARK_ = (function dommy$attrs$has_class_QMARK_(elem,class$){
var elem__$1 = dommy.template.__GT_node_like(elem);
var class$__$1 = dommy.utils.as_str(class$);
var temp__5823__auto__ = elem__$1.classList;
if(cljs.core.truth_(temp__5823__auto__)){
var class_list = temp__5823__auto__;
return class_list.contains(class$__$1);
} else {
var temp__5825__auto__ = elem__$1.className;
if(cljs.core.truth_(temp__5825__auto__)){
var class_name = temp__5825__auto__;
var temp__5825__auto____$1 = dommy.attrs.class_index(class_name,class$__$1);
if(cljs.core.truth_(temp__5825__auto____$1)){
var i = temp__5825__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * add class to element
 */
dommy.attrs.add_class_BANG_ = (function dommy$attrs$add_class_BANG_(var_args){
var G__22143 = arguments.length;
switch (G__22143) {
case 2:
return dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___22795 = arguments.length;
var i__5898__auto___22796 = (0);
while(true){
if((i__5898__auto___22796 < len__5897__auto___22795)){
args_arr__5922__auto__.push((arguments[i__5898__auto___22796]));

var G__22797 = (i__5898__auto___22796 + (1));
i__5898__auto___22796 = G__22797;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var elem__$1 = dommy.template.__GT_node_like(elem);
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes));
if(cljs.core.seq(classes__$1)){
var temp__5823__auto___22800 = elem__$1.classList;
if(cljs.core.truth_(temp__5823__auto___22800)){
var class_list_22801 = temp__5823__auto___22800;
var seq__22156_22802 = cljs.core.seq(classes__$1.split(/\s+/));
var chunk__22159_22803 = null;
var count__22160_22804 = (0);
var i__22161_22805 = (0);
while(true){
if((i__22161_22805 < count__22160_22804)){
var class_22806 = chunk__22159_22803.cljs$core$IIndexed$_nth$arity$2(null,i__22161_22805);
class_list_22801.add(class_22806);


var G__22809 = seq__22156_22802;
var G__22810 = chunk__22159_22803;
var G__22811 = count__22160_22804;
var G__22812 = (i__22161_22805 + (1));
seq__22156_22802 = G__22809;
chunk__22159_22803 = G__22810;
count__22160_22804 = G__22811;
i__22161_22805 = G__22812;
continue;
} else {
var temp__5825__auto___22814 = cljs.core.seq(seq__22156_22802);
if(temp__5825__auto___22814){
var seq__22156_22815__$1 = temp__5825__auto___22814;
if(cljs.core.chunked_seq_QMARK_(seq__22156_22815__$1)){
var c__5694__auto___22816 = cljs.core.chunk_first(seq__22156_22815__$1);
var G__22817 = cljs.core.chunk_rest(seq__22156_22815__$1);
var G__22818 = c__5694__auto___22816;
var G__22819 = cljs.core.count(c__5694__auto___22816);
var G__22820 = (0);
seq__22156_22802 = G__22817;
chunk__22159_22803 = G__22818;
count__22160_22804 = G__22819;
i__22161_22805 = G__22820;
continue;
} else {
var class_22821 = cljs.core.first(seq__22156_22815__$1);
class_list_22801.add(class_22821);


var G__22822 = cljs.core.next(seq__22156_22815__$1);
var G__22823 = null;
var G__22824 = (0);
var G__22825 = (0);
seq__22156_22802 = G__22822;
chunk__22159_22803 = G__22823;
count__22160_22804 = G__22824;
i__22161_22805 = G__22825;
continue;
}
} else {
}
}
break;
}
} else {
var seq__22167_22827 = cljs.core.seq(classes__$1.split(/\s+/));
var chunk__22168_22828 = null;
var count__22169_22829 = (0);
var i__22170_22830 = (0);
while(true){
if((i__22170_22830 < count__22169_22829)){
var class_22832 = chunk__22168_22828.cljs$core$IIndexed$_nth$arity$2(null,i__22170_22830);
var class_name_22833 = elem__$1.className;
if(cljs.core.truth_(dommy.attrs.class_index(class_name_22833,class_22832))){
} else {
(elem__$1.className = (((class_name_22833 === ""))?class_22832:(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_22833)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_22832))));
}


var G__22836 = seq__22167_22827;
var G__22837 = chunk__22168_22828;
var G__22838 = count__22169_22829;
var G__22839 = (i__22170_22830 + (1));
seq__22167_22827 = G__22836;
chunk__22168_22828 = G__22837;
count__22169_22829 = G__22838;
i__22170_22830 = G__22839;
continue;
} else {
var temp__5825__auto___22842 = cljs.core.seq(seq__22167_22827);
if(temp__5825__auto___22842){
var seq__22167_22844__$1 = temp__5825__auto___22842;
if(cljs.core.chunked_seq_QMARK_(seq__22167_22844__$1)){
var c__5694__auto___22845 = cljs.core.chunk_first(seq__22167_22844__$1);
var G__22846 = cljs.core.chunk_rest(seq__22167_22844__$1);
var G__22847 = c__5694__auto___22845;
var G__22848 = cljs.core.count(c__5694__auto___22845);
var G__22849 = (0);
seq__22167_22827 = G__22846;
chunk__22168_22828 = G__22847;
count__22169_22829 = G__22848;
i__22170_22830 = G__22849;
continue;
} else {
var class_22850 = cljs.core.first(seq__22167_22844__$1);
var class_name_22852 = elem__$1.className;
if(cljs.core.truth_(dommy.attrs.class_index(class_name_22852,class_22850))){
} else {
(elem__$1.className = (((class_name_22852 === ""))?class_22850:(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_22852)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_22850))));
}


var G__22856 = cljs.core.next(seq__22167_22844__$1);
var G__22857 = null;
var G__22858 = (0);
var G__22859 = (0);
seq__22167_22827 = G__22856;
chunk__22168_22828 = G__22857;
count__22169_22829 = G__22858;
i__22170_22830 = G__22859;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem__$1;
}));

(dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var elem__$1 = dommy.template.__GT_node_like(elem);
var seq__22175_22863 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__22176_22864 = null;
var count__22177_22865 = (0);
var i__22178_22866 = (0);
while(true){
if((i__22178_22866 < count__22177_22865)){
var c_22868 = chunk__22176_22864.cljs$core$IIndexed$_nth$arity$2(null,i__22178_22866);
dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_22868);


var G__22870 = seq__22175_22863;
var G__22872 = chunk__22176_22864;
var G__22873 = count__22177_22865;
var G__22874 = (i__22178_22866 + (1));
seq__22175_22863 = G__22870;
chunk__22176_22864 = G__22872;
count__22177_22865 = G__22873;
i__22178_22866 = G__22874;
continue;
} else {
var temp__5825__auto___22877 = cljs.core.seq(seq__22175_22863);
if(temp__5825__auto___22877){
var seq__22175_22878__$1 = temp__5825__auto___22877;
if(cljs.core.chunked_seq_QMARK_(seq__22175_22878__$1)){
var c__5694__auto___22879 = cljs.core.chunk_first(seq__22175_22878__$1);
var G__22881 = cljs.core.chunk_rest(seq__22175_22878__$1);
var G__22882 = c__5694__auto___22879;
var G__22883 = cljs.core.count(c__5694__auto___22879);
var G__22884 = (0);
seq__22175_22863 = G__22881;
chunk__22176_22864 = G__22882;
count__22177_22865 = G__22883;
i__22178_22866 = G__22884;
continue;
} else {
var c_22887 = cljs.core.first(seq__22175_22878__$1);
dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_22887);


var G__22889 = cljs.core.next(seq__22175_22878__$1);
var G__22890 = null;
var G__22891 = (0);
var G__22892 = (0);
seq__22175_22863 = G__22889;
chunk__22176_22864 = G__22890;
count__22177_22865 = G__22891;
i__22178_22866 = G__22892;
continue;
}
} else {
}
}
break;
}

return elem__$1;
}));

/** @this {Function} */
(dommy.attrs.add_class_BANG_.cljs$lang$applyTo = (function (seq22140){
var G__22141 = cljs.core.first(seq22140);
var seq22140__$1 = cljs.core.next(seq22140);
var G__22142 = cljs.core.first(seq22140__$1);
var seq22140__$2 = cljs.core.next(seq22140__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22141,G__22142,seq22140__$2);
}));

(dommy.attrs.add_class_BANG_.cljs$lang$maxFixedArity = (2));

dommy.attrs.remove_class_str = (function dommy$attrs$remove_class_str(init_class_name,class$){
var class_name = init_class_name;
while(true){
var class_len = class_name.length;
var temp__5823__auto__ = dommy.attrs.class_index(class_name,class$);
if(cljs.core.truth_(temp__5823__auto__)){
var i = temp__5823__auto__;
var G__22896 = (function (){var end = (i + class$.length);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))):class_name.substring((0),(i - (1))))));
})();
class_name = G__22896;
continue;
} else {
return class_name;
}
break;
}
});
/**
 * remove class from and returns `elem`
 */
dommy.attrs.remove_class_BANG_ = (function dommy$attrs$remove_class_BANG_(var_args){
var G__22196 = arguments.length;
switch (G__22196) {
case 2:
return dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___22901 = arguments.length;
var i__5898__auto___22902 = (0);
while(true){
if((i__5898__auto___22902 < len__5897__auto___22901)){
args_arr__5922__auto__.push((arguments[i__5898__auto___22902]));

var G__22904 = (i__5898__auto___22902 + (1));
i__5898__auto___22902 = G__22904;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,class$){
var elem__$1 = dommy.template.__GT_node_like(elem);
var class$__$1 = dommy.utils.as_str(class$);
var temp__5823__auto___22905 = elem__$1.classList;
if(cljs.core.truth_(temp__5823__auto___22905)){
var class_list_22906 = temp__5823__auto___22905;
class_list_22906.remove(class$__$1);
} else {
var class_name_22907 = elem__$1.className;
var new_class_name_22908 = dommy.attrs.remove_class_str(class_name_22907,class$__$1);
if((class_name_22907 === new_class_name_22908)){
} else {
(elem__$1.className = new_class_name_22908);
}
}

return elem__$1;
}));

(dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var elem__$1 = dommy.template.__GT_node_like(elem);
var seq__22205 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__22206 = null;
var count__22207 = (0);
var i__22208 = (0);
while(true){
if((i__22208 < count__22207)){
var c = chunk__22206.cljs$core$IIndexed$_nth$arity$2(null,i__22208);
dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);


var G__22911 = seq__22205;
var G__22912 = chunk__22206;
var G__22913 = count__22207;
var G__22914 = (i__22208 + (1));
seq__22205 = G__22911;
chunk__22206 = G__22912;
count__22207 = G__22913;
i__22208 = G__22914;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__22205);
if(temp__5825__auto__){
var seq__22205__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22205__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__22205__$1);
var G__22917 = cljs.core.chunk_rest(seq__22205__$1);
var G__22918 = c__5694__auto__;
var G__22919 = cljs.core.count(c__5694__auto__);
var G__22920 = (0);
seq__22205 = G__22917;
chunk__22206 = G__22918;
count__22207 = G__22919;
i__22208 = G__22920;
continue;
} else {
var c = cljs.core.first(seq__22205__$1);
dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);


var G__22921 = cljs.core.next(seq__22205__$1);
var G__22922 = null;
var G__22923 = (0);
var G__22924 = (0);
seq__22205 = G__22921;
chunk__22206 = G__22922;
count__22207 = G__22923;
i__22208 = G__22924;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.attrs.remove_class_BANG_.cljs$lang$applyTo = (function (seq22193){
var G__22194 = cljs.core.first(seq22193);
var seq22193__$1 = cljs.core.next(seq22193);
var G__22195 = cljs.core.first(seq22193__$1);
var seq22193__$2 = cljs.core.next(seq22193__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22194,G__22195,seq22193__$2);
}));

(dommy.attrs.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.attrs.toggle_class_BANG_ = (function dommy$attrs$toggle_class_BANG_(var_args){
var G__22245 = arguments.length;
switch (G__22245) {
case 2:
return dommy.attrs.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.attrs.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(dommy.attrs.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,class$){
var elem__$1 = dommy.template.__GT_node_like(elem);
var class$__$1 = dommy.utils.as_str(class$);
var temp__5823__auto___22933 = elem__$1.classList;
if(cljs.core.truth_(temp__5823__auto___22933)){
var class_list_22934 = temp__5823__auto___22933;
class_list_22934.toggle(class$__$1);
} else {
dommy.attrs.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,class$__$1,(!(dommy.attrs.has_class_QMARK_(elem__$1,class$__$1))));
}

return elem__$1;
}));

(dommy.attrs.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
var elem__$1 = dommy.template.__GT_node_like(elem);
if(add_QMARK_){
dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,class$);
} else {
dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,class$);
}

return elem__$1;
}));

(dommy.attrs.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

dommy.attrs.style_str = (function dommy$attrs$style_str(x){
if(typeof x === 'string'){
return x;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22274){
var vec__22275 = p__22274;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22275,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22275,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str(k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str(v))+";");
}),x));
}
});
dommy.attrs.set_style_BANG_ = (function dommy$attrs$set_style_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___22938 = arguments.length;
var i__5898__auto___22939 = (0);
while(true){
if((i__5898__auto___22939 < len__5897__auto___22938)){
args__5903__auto__.push((arguments[i__5898__auto___22939]));

var G__22941 = (i__5898__auto___22939 + (1));
i__5898__auto___22939 = G__22941;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var elem__$1 = dommy.template.__GT_node_like(elem);
var style = elem__$1.style;
var seq__22310_22943 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__22311_22944 = null;
var count__22312_22945 = (0);
var i__22313_22946 = (0);
while(true){
if((i__22313_22946 < count__22312_22945)){
var vec__22335_22947 = chunk__22311_22944.cljs$core$IIndexed$_nth$arity$2(null,i__22313_22946);
var k_22948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22335_22947,(0),null);
var v_22949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22335_22947,(1),null);
style.setProperty(dommy.utils.as_str(k_22948),v_22949);


var G__22950 = seq__22310_22943;
var G__22951 = chunk__22311_22944;
var G__22952 = count__22312_22945;
var G__22953 = (i__22313_22946 + (1));
seq__22310_22943 = G__22950;
chunk__22311_22944 = G__22951;
count__22312_22945 = G__22952;
i__22313_22946 = G__22953;
continue;
} else {
var temp__5825__auto___22954 = cljs.core.seq(seq__22310_22943);
if(temp__5825__auto___22954){
var seq__22310_22956__$1 = temp__5825__auto___22954;
if(cljs.core.chunked_seq_QMARK_(seq__22310_22956__$1)){
var c__5694__auto___22957 = cljs.core.chunk_first(seq__22310_22956__$1);
var G__22958 = cljs.core.chunk_rest(seq__22310_22956__$1);
var G__22959 = c__5694__auto___22957;
var G__22960 = cljs.core.count(c__5694__auto___22957);
var G__22961 = (0);
seq__22310_22943 = G__22958;
chunk__22311_22944 = G__22959;
count__22312_22945 = G__22960;
i__22313_22946 = G__22961;
continue;
} else {
var vec__22354_22963 = cljs.core.first(seq__22310_22956__$1);
var k_22964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22354_22963,(0),null);
var v_22965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22354_22963,(1),null);
style.setProperty(dommy.utils.as_str(k_22964),v_22965);


var G__22967 = cljs.core.next(seq__22310_22956__$1);
var G__22968 = null;
var G__22969 = (0);
var G__22970 = (0);
seq__22310_22943 = G__22967;
chunk__22311_22944 = G__22968;
count__22312_22945 = G__22969;
i__22313_22946 = G__22970;
continue;
}
} else {
}
}
break;
}

return elem__$1;
}));

(dommy.attrs.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.attrs.set_style_BANG_.cljs$lang$applyTo = (function (seq22281){
var G__22282 = cljs.core.first(seq22281);
var seq22281__$1 = cljs.core.next(seq22281);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22282,seq22281__$1);
}));

dommy.attrs.style = (function dommy$attrs$style(elem,k){
if(cljs.core.truth_(k)){
} else {
throw (new Error("Assert failed: k"));
}

return (window.getComputedStyle(dommy.template.__GT_node_like(elem))[cljs.core.name(k)]);
});
dommy.attrs.set_px_BANG_ = (function dommy$attrs$set_px_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___22973 = arguments.length;
var i__5898__auto___22974 = (0);
while(true){
if((i__5898__auto___22974 < len__5897__auto___22973)){
args__5903__auto__.push((arguments[i__5898__auto___22974]));

var G__22975 = (i__5898__auto___22974 + (1));
i__5898__auto___22974 = G__22975;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return dommy.attrs.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(dommy.attrs.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var elem__$1 = dommy.template.__GT_node_like(elem);
var seq__22404_22978 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__22405_22979 = null;
var count__22406_22980 = (0);
var i__22407_22981 = (0);
while(true){
if((i__22407_22981 < count__22406_22980)){
var vec__22434_22983 = chunk__22405_22979.cljs$core$IIndexed$_nth$arity$2(null,i__22407_22981);
var k_22984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22434_22983,(0),null);
var v_22985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22434_22983,(1),null);
dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_22984,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_22985)+"px")], 0));


var G__22989 = seq__22404_22978;
var G__22990 = chunk__22405_22979;
var G__22991 = count__22406_22980;
var G__22992 = (i__22407_22981 + (1));
seq__22404_22978 = G__22989;
chunk__22405_22979 = G__22990;
count__22406_22980 = G__22991;
i__22407_22981 = G__22992;
continue;
} else {
var temp__5825__auto___22993 = cljs.core.seq(seq__22404_22978);
if(temp__5825__auto___22993){
var seq__22404_22994__$1 = temp__5825__auto___22993;
if(cljs.core.chunked_seq_QMARK_(seq__22404_22994__$1)){
var c__5694__auto___22995 = cljs.core.chunk_first(seq__22404_22994__$1);
var G__22997 = cljs.core.chunk_rest(seq__22404_22994__$1);
var G__22998 = c__5694__auto___22995;
var G__22999 = cljs.core.count(c__5694__auto___22995);
var G__23000 = (0);
seq__22404_22978 = G__22997;
chunk__22405_22979 = G__22998;
count__22406_22980 = G__22999;
i__22407_22981 = G__23000;
continue;
} else {
var vec__22441_23001 = cljs.core.first(seq__22404_22994__$1);
var k_23002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22441_23001,(0),null);
var v_23005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22441_23001,(1),null);
dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_23002,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_23005)+"px")], 0));


var G__23008 = cljs.core.next(seq__22404_22994__$1);
var G__23009 = null;
var G__23010 = (0);
var G__23011 = (0);
seq__22404_22978 = G__23008;
chunk__22405_22979 = G__23009;
count__22406_22980 = G__23010;
i__22407_22981 = G__23011;
continue;
}
} else {
}
}
break;
}

return elem__$1;
}));

(dommy.attrs.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.attrs.set_px_BANG_.cljs$lang$applyTo = (function (seq22376){
var G__22377 = cljs.core.first(seq22376);
var seq22376__$1 = cljs.core.next(seq22376);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22377,seq22376__$1);
}));

dommy.attrs.px = (function dommy$attrs$px(elem,k){
var pixels = dommy.attrs.style(dommy.template.__GT_node_like(elem),k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to "true":
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.attrs.set_attr_BANG_ = (function dommy$attrs$set_attr_BANG_(var_args){
var G__22469 = arguments.length;
switch (G__22469) {
case 2:
return dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___23017 = arguments.length;
var i__5898__auto___23018 = (0);
while(true){
if((i__5898__auto___23018 < len__5897__auto___23017)){
args_arr__5922__auto__.push((arguments[i__5898__auto___23018]));

var G__23020 = (i__5898__auto___23018 + (1));
i__5898__auto___23018 = G__23020;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((3) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((3)),(0),null)):null);
return dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5923__auto__);

}
});

(dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.template.__GT_node_like(elem),k,"true");
}));

(dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__22489 = dommy.template.__GT_node_like(elem);
(G__22489[dommy.utils.as_str(k)] = v);

return G__22489;
} else {
var G__22498 = dommy.template.__GT_node_like(elem);
G__22498.setAttribute(dommy.utils.as_str(k),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str(v):v));

return G__22498;
}
} else {
return null;
}
}));

(dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var elem__$1 = dommy.template.__GT_node_like(elem);
var seq__22510_23025 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__22511_23026 = null;
var count__22512_23027 = (0);
var i__22513_23028 = (0);
while(true){
if((i__22513_23028 < count__22512_23027)){
var vec__22550_23029 = chunk__22511_23026.cljs$core$IIndexed$_nth$arity$2(null,i__22513_23028);
var k_23030__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22550_23029,(0),null);
var v_23031__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22550_23029,(1),null);
dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_23030__$1,v_23031__$1);


var G__23033 = seq__22510_23025;
var G__23034 = chunk__22511_23026;
var G__23035 = count__22512_23027;
var G__23036 = (i__22513_23028 + (1));
seq__22510_23025 = G__23033;
chunk__22511_23026 = G__23034;
count__22512_23027 = G__23035;
i__22513_23028 = G__23036;
continue;
} else {
var temp__5825__auto___23037 = cljs.core.seq(seq__22510_23025);
if(temp__5825__auto___23037){
var seq__22510_23038__$1 = temp__5825__auto___23037;
if(cljs.core.chunked_seq_QMARK_(seq__22510_23038__$1)){
var c__5694__auto___23039 = cljs.core.chunk_first(seq__22510_23038__$1);
var G__23040 = cljs.core.chunk_rest(seq__22510_23038__$1);
var G__23041 = c__5694__auto___23039;
var G__23042 = cljs.core.count(c__5694__auto___23039);
var G__23043 = (0);
seq__22510_23025 = G__23040;
chunk__22511_23026 = G__23041;
count__22512_23027 = G__23042;
i__22513_23028 = G__23043;
continue;
} else {
var vec__22571_23044 = cljs.core.first(seq__22510_23038__$1);
var k_23046__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22571_23044,(0),null);
var v_23047__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22571_23044,(1),null);
dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_23046__$1,v_23047__$1);


var G__23048 = cljs.core.next(seq__22510_23038__$1);
var G__23049 = null;
var G__23050 = (0);
var G__23051 = (0);
seq__22510_23025 = G__23048;
chunk__22511_23026 = G__23049;
count__22512_23027 = G__23050;
i__22513_23028 = G__23051;
continue;
}
} else {
}
}
break;
}

return elem__$1;
}));

/** @this {Function} */
(dommy.attrs.set_attr_BANG_.cljs$lang$applyTo = (function (seq22463){
var G__22464 = cljs.core.first(seq22463);
var seq22463__$1 = cljs.core.next(seq22463);
var G__22465 = cljs.core.first(seq22463__$1);
var seq22463__$2 = cljs.core.next(seq22463__$1);
var G__22466 = cljs.core.first(seq22463__$2);
var seq22463__$3 = cljs.core.next(seq22463__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22464,G__22465,G__22466,seq22463__$3);
}));

(dommy.attrs.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

dommy.attrs.remove_attr_BANG_ = (function dommy$attrs$remove_attr_BANG_(var_args){
var G__22610 = arguments.length;
switch (G__22610) {
case 2:
return dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___23056 = arguments.length;
var i__5898__auto___23057 = (0);
while(true){
if((i__5898__auto___23057 < len__5897__auto___23056)){
args_arr__5922__auto__.push((arguments[i__5898__auto___23057]));

var G__23058 = (i__5898__auto___23057 + (1));
i__5898__auto___23057 = G__23058;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var elem__$1 = dommy.template.__GT_node_like(elem);
if(cljs.core.truth_((function (){var fexpr__22629 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"classes","classes",2037804510),null], null), null);
return (fexpr__22629.cljs$core$IFn$_invoke$arity$1 ? fexpr__22629.cljs$core$IFn$_invoke$arity$1(k) : fexpr__22629.call(null,k));
})())){
(elem__$1.className = "");
} else {
elem__$1.removeAttribute(dommy.utils.as_str(k));
}

return elem__$1;
}));

(dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var elem__$1 = dommy.template.__GT_node_like(elem);
var seq__22638_23063 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__22639_23064 = null;
var count__22640_23065 = (0);
var i__22641_23066 = (0);
while(true){
if((i__22641_23066 < count__22640_23065)){
var k_23068__$1 = chunk__22639_23064.cljs$core$IIndexed$_nth$arity$2(null,i__22641_23066);
dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_23068__$1);


var G__23071 = seq__22638_23063;
var G__23072 = chunk__22639_23064;
var G__23073 = count__22640_23065;
var G__23074 = (i__22641_23066 + (1));
seq__22638_23063 = G__23071;
chunk__22639_23064 = G__23072;
count__22640_23065 = G__23073;
i__22641_23066 = G__23074;
continue;
} else {
var temp__5825__auto___23075 = cljs.core.seq(seq__22638_23063);
if(temp__5825__auto___23075){
var seq__22638_23077__$1 = temp__5825__auto___23075;
if(cljs.core.chunked_seq_QMARK_(seq__22638_23077__$1)){
var c__5694__auto___23078 = cljs.core.chunk_first(seq__22638_23077__$1);
var G__23079 = cljs.core.chunk_rest(seq__22638_23077__$1);
var G__23080 = c__5694__auto___23078;
var G__23081 = cljs.core.count(c__5694__auto___23078);
var G__23082 = (0);
seq__22638_23063 = G__23079;
chunk__22639_23064 = G__23080;
count__22640_23065 = G__23081;
i__22641_23066 = G__23082;
continue;
} else {
var k_23084__$1 = cljs.core.first(seq__22638_23077__$1);
dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_23084__$1);


var G__23085 = cljs.core.next(seq__22638_23077__$1);
var G__23086 = null;
var G__23087 = (0);
var G__23088 = (0);
seq__22638_23063 = G__23085;
chunk__22639_23064 = G__23086;
count__22640_23065 = G__23087;
i__22641_23066 = G__23088;
continue;
}
} else {
}
}
break;
}

return elem__$1;
}));

/** @this {Function} */
(dommy.attrs.remove_attr_BANG_.cljs$lang$applyTo = (function (seq22606){
var G__22607 = cljs.core.first(seq22606);
var seq22606__$1 = cljs.core.next(seq22606);
var G__22608 = cljs.core.first(seq22606__$1);
var seq22606__$2 = cljs.core.next(seq22606__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22607,G__22608,seq22606__$2);
}));

(dommy.attrs.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

dommy.attrs.attr = (function dommy$attrs$attr(elem,k){
if(cljs.core.truth_(k)){
return dommy.template.__GT_node_like(elem).getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function dommy$attrs$toggle_attr_BANG_(var_args){
var G__22743 = arguments.length;
switch (G__22743) {
case 2:
return dommy.attrs.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.attrs.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(dommy.attrs.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.attrs.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.attrs.attr(elem,k)));
}));

(dommy.attrs.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
var elem__$1 = dommy.template.__GT_node_like(elem);
if(add_QMARK_){
return dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k);
} else {
return dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k);
}
}));

(dommy.attrs.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

dommy.attrs.hidden_QMARK_ = (function dommy$attrs$hidden_QMARK_(elem){
return ("none" === dommy.template.__GT_node_like(elem).style.display);
});
/**
 * Display or hide the given `elem`. Takes an optional boolean `show?`
 * indicating whether to show or hide `elem`.
 */
dommy.attrs.toggle_BANG_ = (function dommy$attrs$toggle_BANG_(var_args){
var G__22756 = arguments.length;
switch (G__22756) {
case 2:
return dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
var G__22757 = dommy.template.__GT_node_like(elem);
(G__22757.style.display = ((show_QMARK_)?"":"none"));

return G__22757;
}));

(dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var elem__$1 = dommy.template.__GT_node_like(elem);
dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,dommy.attrs.hidden_QMARK_(elem__$1));

return elem__$1;
}));

(dommy.attrs.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.attrs.hide_BANG_ = (function dommy$attrs$hide_BANG_(elem){
var G__22762 = dommy.template.__GT_node_like(elem);
dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__22762,false);

return G__22762;
});
dommy.attrs.show_BANG_ = (function dommy$attrs$show_BANG_(elem){
var G__22764 = dommy.template.__GT_node_like(elem);
dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__22764,true);

return G__22764;
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.attrs.bounding_client_rect = (function dommy$attrs$bounding_client_rect(elem){
var r = dommy.template.__GT_node_like(elem).getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.attrs.scroll_into_view = (function dommy$attrs$scroll_into_view(elem,align_with_top_QMARK_){
var elem__$1 = dommy.template.__GT_node_like(elem);
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect(elem__$1));
if((window.innerHeight < (top + elem__$1.offsetHeight))){
return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});

//# sourceMappingURL=dommy.attrs.js.map
