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
var G__22655 = (i + class$.length);
start_from = G__22655;
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
var G__22093 = arguments.length;
switch (G__22093) {
case 2:
return dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___22661 = arguments.length;
var i__5898__auto___22662 = (0);
while(true){
if((i__5898__auto___22662 < len__5897__auto___22661)){
args_arr__5922__auto__.push((arguments[i__5898__auto___22662]));

var G__22664 = (i__5898__auto___22662 + (1));
i__5898__auto___22662 = G__22664;
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
var temp__5823__auto___22669 = elem__$1.classList;
if(cljs.core.truth_(temp__5823__auto___22669)){
var class_list_22670 = temp__5823__auto___22669;
var seq__22141_22671 = cljs.core.seq(classes__$1.split(/\s+/));
var chunk__22142_22672 = null;
var count__22143_22673 = (0);
var i__22144_22674 = (0);
while(true){
if((i__22144_22674 < count__22143_22673)){
var class_22682 = chunk__22142_22672.cljs$core$IIndexed$_nth$arity$2(null,i__22144_22674);
class_list_22670.add(class_22682);


var G__22683 = seq__22141_22671;
var G__22684 = chunk__22142_22672;
var G__22685 = count__22143_22673;
var G__22686 = (i__22144_22674 + (1));
seq__22141_22671 = G__22683;
chunk__22142_22672 = G__22684;
count__22143_22673 = G__22685;
i__22144_22674 = G__22686;
continue;
} else {
var temp__5825__auto___22689 = cljs.core.seq(seq__22141_22671);
if(temp__5825__auto___22689){
var seq__22141_22691__$1 = temp__5825__auto___22689;
if(cljs.core.chunked_seq_QMARK_(seq__22141_22691__$1)){
var c__5694__auto___22693 = cljs.core.chunk_first(seq__22141_22691__$1);
var G__22694 = cljs.core.chunk_rest(seq__22141_22691__$1);
var G__22695 = c__5694__auto___22693;
var G__22696 = cljs.core.count(c__5694__auto___22693);
var G__22697 = (0);
seq__22141_22671 = G__22694;
chunk__22142_22672 = G__22695;
count__22143_22673 = G__22696;
i__22144_22674 = G__22697;
continue;
} else {
var class_22700 = cljs.core.first(seq__22141_22691__$1);
class_list_22670.add(class_22700);


var G__22702 = cljs.core.next(seq__22141_22691__$1);
var G__22703 = null;
var G__22704 = (0);
var G__22705 = (0);
seq__22141_22671 = G__22702;
chunk__22142_22672 = G__22703;
count__22143_22673 = G__22704;
i__22144_22674 = G__22705;
continue;
}
} else {
}
}
break;
}
} else {
var seq__22156_22706 = cljs.core.seq(classes__$1.split(/\s+/));
var chunk__22157_22707 = null;
var count__22158_22708 = (0);
var i__22159_22709 = (0);
while(true){
if((i__22159_22709 < count__22158_22708)){
var class_22710 = chunk__22157_22707.cljs$core$IIndexed$_nth$arity$2(null,i__22159_22709);
var class_name_22711 = elem__$1.className;
if(cljs.core.truth_(dommy.attrs.class_index(class_name_22711,class_22710))){
} else {
(elem__$1.className = (((class_name_22711 === ""))?class_22710:(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_22711)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_22710))));
}


var G__22712 = seq__22156_22706;
var G__22713 = chunk__22157_22707;
var G__22714 = count__22158_22708;
var G__22715 = (i__22159_22709 + (1));
seq__22156_22706 = G__22712;
chunk__22157_22707 = G__22713;
count__22158_22708 = G__22714;
i__22159_22709 = G__22715;
continue;
} else {
var temp__5825__auto___22716 = cljs.core.seq(seq__22156_22706);
if(temp__5825__auto___22716){
var seq__22156_22718__$1 = temp__5825__auto___22716;
if(cljs.core.chunked_seq_QMARK_(seq__22156_22718__$1)){
var c__5694__auto___22723 = cljs.core.chunk_first(seq__22156_22718__$1);
var G__22726 = cljs.core.chunk_rest(seq__22156_22718__$1);
var G__22727 = c__5694__auto___22723;
var G__22728 = cljs.core.count(c__5694__auto___22723);
var G__22729 = (0);
seq__22156_22706 = G__22726;
chunk__22157_22707 = G__22727;
count__22158_22708 = G__22728;
i__22159_22709 = G__22729;
continue;
} else {
var class_22732 = cljs.core.first(seq__22156_22718__$1);
var class_name_22733 = elem__$1.className;
if(cljs.core.truth_(dommy.attrs.class_index(class_name_22733,class_22732))){
} else {
(elem__$1.className = (((class_name_22733 === ""))?class_22732:(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_22733)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_22732))));
}


var G__22735 = cljs.core.next(seq__22156_22718__$1);
var G__22736 = null;
var G__22737 = (0);
var G__22738 = (0);
seq__22156_22706 = G__22735;
chunk__22157_22707 = G__22736;
count__22158_22708 = G__22737;
i__22159_22709 = G__22738;
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
var seq__22164_22740 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__22165_22741 = null;
var count__22166_22742 = (0);
var i__22167_22743 = (0);
while(true){
if((i__22167_22743 < count__22166_22742)){
var c_22744 = chunk__22165_22741.cljs$core$IIndexed$_nth$arity$2(null,i__22167_22743);
dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_22744);


var G__22745 = seq__22164_22740;
var G__22746 = chunk__22165_22741;
var G__22747 = count__22166_22742;
var G__22748 = (i__22167_22743 + (1));
seq__22164_22740 = G__22745;
chunk__22165_22741 = G__22746;
count__22166_22742 = G__22747;
i__22167_22743 = G__22748;
continue;
} else {
var temp__5825__auto___22750 = cljs.core.seq(seq__22164_22740);
if(temp__5825__auto___22750){
var seq__22164_22752__$1 = temp__5825__auto___22750;
if(cljs.core.chunked_seq_QMARK_(seq__22164_22752__$1)){
var c__5694__auto___22753 = cljs.core.chunk_first(seq__22164_22752__$1);
var G__22754 = cljs.core.chunk_rest(seq__22164_22752__$1);
var G__22755 = c__5694__auto___22753;
var G__22756 = cljs.core.count(c__5694__auto___22753);
var G__22757 = (0);
seq__22164_22740 = G__22754;
chunk__22165_22741 = G__22755;
count__22166_22742 = G__22756;
i__22167_22743 = G__22757;
continue;
} else {
var c_22759 = cljs.core.first(seq__22164_22752__$1);
dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_22759);


var G__22760 = cljs.core.next(seq__22164_22752__$1);
var G__22761 = null;
var G__22762 = (0);
var G__22763 = (0);
seq__22164_22740 = G__22760;
chunk__22165_22741 = G__22761;
count__22166_22742 = G__22762;
i__22167_22743 = G__22763;
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
(dommy.attrs.add_class_BANG_.cljs$lang$applyTo = (function (seq22089){
var G__22090 = cljs.core.first(seq22089);
var seq22089__$1 = cljs.core.next(seq22089);
var G__22091 = cljs.core.first(seq22089__$1);
var seq22089__$2 = cljs.core.next(seq22089__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22090,G__22091,seq22089__$2);
}));

(dommy.attrs.add_class_BANG_.cljs$lang$maxFixedArity = (2));

dommy.attrs.remove_class_str = (function dommy$attrs$remove_class_str(init_class_name,class$){
var class_name = init_class_name;
while(true){
var class_len = class_name.length;
var temp__5823__auto__ = dommy.attrs.class_index(class_name,class$);
if(cljs.core.truth_(temp__5823__auto__)){
var i = temp__5823__auto__;
var G__22764 = (function (){var end = (i + class$.length);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))):class_name.substring((0),(i - (1))))));
})();
class_name = G__22764;
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
var G__22179 = arguments.length;
switch (G__22179) {
case 2:
return dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___22772 = arguments.length;
var i__5898__auto___22773 = (0);
while(true){
if((i__5898__auto___22773 < len__5897__auto___22772)){
args_arr__5922__auto__.push((arguments[i__5898__auto___22773]));

var G__22774 = (i__5898__auto___22773 + (1));
i__5898__auto___22773 = G__22774;
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
var temp__5823__auto___22779 = elem__$1.classList;
if(cljs.core.truth_(temp__5823__auto___22779)){
var class_list_22781 = temp__5823__auto___22779;
class_list_22781.remove(class$__$1);
} else {
var class_name_22782 = elem__$1.className;
var new_class_name_22783 = dommy.attrs.remove_class_str(class_name_22782,class$__$1);
if((class_name_22782 === new_class_name_22783)){
} else {
(elem__$1.className = new_class_name_22783);
}
}

return elem__$1;
}));

(dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var elem__$1 = dommy.template.__GT_node_like(elem);
var seq__22186 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__22187 = null;
var count__22188 = (0);
var i__22189 = (0);
while(true){
if((i__22189 < count__22188)){
var c = chunk__22187.cljs$core$IIndexed$_nth$arity$2(null,i__22189);
dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);


var G__22791 = seq__22186;
var G__22792 = chunk__22187;
var G__22793 = count__22188;
var G__22794 = (i__22189 + (1));
seq__22186 = G__22791;
chunk__22187 = G__22792;
count__22188 = G__22793;
i__22189 = G__22794;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__22186);
if(temp__5825__auto__){
var seq__22186__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22186__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__22186__$1);
var G__22809 = cljs.core.chunk_rest(seq__22186__$1);
var G__22810 = c__5694__auto__;
var G__22811 = cljs.core.count(c__5694__auto__);
var G__22812 = (0);
seq__22186 = G__22809;
chunk__22187 = G__22810;
count__22188 = G__22811;
i__22189 = G__22812;
continue;
} else {
var c = cljs.core.first(seq__22186__$1);
dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);


var G__22815 = cljs.core.next(seq__22186__$1);
var G__22816 = null;
var G__22817 = (0);
var G__22818 = (0);
seq__22186 = G__22815;
chunk__22187 = G__22816;
count__22188 = G__22817;
i__22189 = G__22818;
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
(dommy.attrs.remove_class_BANG_.cljs$lang$applyTo = (function (seq22176){
var G__22177 = cljs.core.first(seq22176);
var seq22176__$1 = cljs.core.next(seq22176);
var G__22178 = cljs.core.first(seq22176__$1);
var seq22176__$2 = cljs.core.next(seq22176__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22177,G__22178,seq22176__$2);
}));

(dommy.attrs.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.attrs.toggle_class_BANG_ = (function dommy$attrs$toggle_class_BANG_(var_args){
var G__22194 = arguments.length;
switch (G__22194) {
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
var temp__5823__auto___22882 = elem__$1.classList;
if(cljs.core.truth_(temp__5823__auto___22882)){
var class_list_22884 = temp__5823__auto___22882;
class_list_22884.toggle(class$__$1);
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
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22206){
var vec__22207 = p__22206;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22207,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22207,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str(k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str(v))+";");
}),x));
}
});
dommy.attrs.set_style_BANG_ = (function dommy$attrs$set_style_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___22903 = arguments.length;
var i__5898__auto___22904 = (0);
while(true){
if((i__5898__auto___22904 < len__5897__auto___22903)){
args__5903__auto__.push((arguments[i__5898__auto___22904]));

var G__22907 = (i__5898__auto___22904 + (1));
i__5898__auto___22904 = G__22907;
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
var seq__22231_22911 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__22232_22913 = null;
var count__22233_22914 = (0);
var i__22234_22915 = (0);
while(true){
if((i__22234_22915 < count__22233_22914)){
var vec__22271_22916 = chunk__22232_22913.cljs$core$IIndexed$_nth$arity$2(null,i__22234_22915);
var k_22917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22271_22916,(0),null);
var v_22918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22271_22916,(1),null);
style.setProperty(dommy.utils.as_str(k_22917),v_22918);


var G__22919 = seq__22231_22911;
var G__22920 = chunk__22232_22913;
var G__22921 = count__22233_22914;
var G__22922 = (i__22234_22915 + (1));
seq__22231_22911 = G__22919;
chunk__22232_22913 = G__22920;
count__22233_22914 = G__22921;
i__22234_22915 = G__22922;
continue;
} else {
var temp__5825__auto___22923 = cljs.core.seq(seq__22231_22911);
if(temp__5825__auto___22923){
var seq__22231_22924__$1 = temp__5825__auto___22923;
if(cljs.core.chunked_seq_QMARK_(seq__22231_22924__$1)){
var c__5694__auto___22926 = cljs.core.chunk_first(seq__22231_22924__$1);
var G__22928 = cljs.core.chunk_rest(seq__22231_22924__$1);
var G__22929 = c__5694__auto___22926;
var G__22930 = cljs.core.count(c__5694__auto___22926);
var G__22931 = (0);
seq__22231_22911 = G__22928;
chunk__22232_22913 = G__22929;
count__22233_22914 = G__22930;
i__22234_22915 = G__22931;
continue;
} else {
var vec__22280_22934 = cljs.core.first(seq__22231_22924__$1);
var k_22935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22280_22934,(0),null);
var v_22936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22280_22934,(1),null);
style.setProperty(dommy.utils.as_str(k_22935),v_22936);


var G__22937 = cljs.core.next(seq__22231_22924__$1);
var G__22938 = null;
var G__22939 = (0);
var G__22940 = (0);
seq__22231_22911 = G__22937;
chunk__22232_22913 = G__22938;
count__22233_22914 = G__22939;
i__22234_22915 = G__22940;
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
(dommy.attrs.set_style_BANG_.cljs$lang$applyTo = (function (seq22214){
var G__22216 = cljs.core.first(seq22214);
var seq22214__$1 = cljs.core.next(seq22214);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22216,seq22214__$1);
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
var len__5897__auto___22945 = arguments.length;
var i__5898__auto___22946 = (0);
while(true){
if((i__5898__auto___22946 < len__5897__auto___22945)){
args__5903__auto__.push((arguments[i__5898__auto___22946]));

var G__22947 = (i__5898__auto___22946 + (1));
i__5898__auto___22946 = G__22947;
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
var seq__22347_22952 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__22348_22953 = null;
var count__22349_22954 = (0);
var i__22350_22955 = (0);
while(true){
if((i__22350_22955 < count__22349_22954)){
var vec__22383_22956 = chunk__22348_22953.cljs$core$IIndexed$_nth$arity$2(null,i__22350_22955);
var k_22957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22383_22956,(0),null);
var v_22958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22383_22956,(1),null);
dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_22957,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_22958)+"px")], 0));


var G__22962 = seq__22347_22952;
var G__22964 = chunk__22348_22953;
var G__22965 = count__22349_22954;
var G__22966 = (i__22350_22955 + (1));
seq__22347_22952 = G__22962;
chunk__22348_22953 = G__22964;
count__22349_22954 = G__22965;
i__22350_22955 = G__22966;
continue;
} else {
var temp__5825__auto___22968 = cljs.core.seq(seq__22347_22952);
if(temp__5825__auto___22968){
var seq__22347_22969__$1 = temp__5825__auto___22968;
if(cljs.core.chunked_seq_QMARK_(seq__22347_22969__$1)){
var c__5694__auto___22971 = cljs.core.chunk_first(seq__22347_22969__$1);
var G__22972 = cljs.core.chunk_rest(seq__22347_22969__$1);
var G__22973 = c__5694__auto___22971;
var G__22974 = cljs.core.count(c__5694__auto___22971);
var G__22975 = (0);
seq__22347_22952 = G__22972;
chunk__22348_22953 = G__22973;
count__22349_22954 = G__22974;
i__22350_22955 = G__22975;
continue;
} else {
var vec__22390_22976 = cljs.core.first(seq__22347_22969__$1);
var k_22977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22390_22976,(0),null);
var v_22978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22390_22976,(1),null);
dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_22977,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_22978)+"px")], 0));


var G__22979 = cljs.core.next(seq__22347_22969__$1);
var G__22980 = null;
var G__22981 = (0);
var G__22982 = (0);
seq__22347_22952 = G__22979;
chunk__22348_22953 = G__22980;
count__22349_22954 = G__22981;
i__22350_22955 = G__22982;
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
(dommy.attrs.set_px_BANG_.cljs$lang$applyTo = (function (seq22316){
var G__22317 = cljs.core.first(seq22316);
var seq22316__$1 = cljs.core.next(seq22316);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22317,seq22316__$1);
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
var G__22410 = arguments.length;
switch (G__22410) {
case 2:
return dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___22996 = arguments.length;
var i__5898__auto___22997 = (0);
while(true){
if((i__5898__auto___22997 < len__5897__auto___22996)){
args_arr__5922__auto__.push((arguments[i__5898__auto___22997]));

var G__22998 = (i__5898__auto___22997 + (1));
i__5898__auto___22997 = G__22998;
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
var G__22427 = dommy.template.__GT_node_like(elem);
(G__22427[dommy.utils.as_str(k)] = v);

return G__22427;
} else {
var G__22433 = dommy.template.__GT_node_like(elem);
G__22433.setAttribute(dommy.utils.as_str(k),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str(v):v));

return G__22433;
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
var seq__22442_23006 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__22443_23007 = null;
var count__22444_23008 = (0);
var i__22445_23009 = (0);
while(true){
if((i__22445_23009 < count__22444_23008)){
var vec__22460_23012 = chunk__22443_23007.cljs$core$IIndexed$_nth$arity$2(null,i__22445_23009);
var k_23013__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22460_23012,(0),null);
var v_23014__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22460_23012,(1),null);
dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_23013__$1,v_23014__$1);


var G__23016 = seq__22442_23006;
var G__23017 = chunk__22443_23007;
var G__23018 = count__22444_23008;
var G__23019 = (i__22445_23009 + (1));
seq__22442_23006 = G__23016;
chunk__22443_23007 = G__23017;
count__22444_23008 = G__23018;
i__22445_23009 = G__23019;
continue;
} else {
var temp__5825__auto___23020 = cljs.core.seq(seq__22442_23006);
if(temp__5825__auto___23020){
var seq__22442_23022__$1 = temp__5825__auto___23020;
if(cljs.core.chunked_seq_QMARK_(seq__22442_23022__$1)){
var c__5694__auto___23023 = cljs.core.chunk_first(seq__22442_23022__$1);
var G__23025 = cljs.core.chunk_rest(seq__22442_23022__$1);
var G__23026 = c__5694__auto___23023;
var G__23027 = cljs.core.count(c__5694__auto___23023);
var G__23028 = (0);
seq__22442_23006 = G__23025;
chunk__22443_23007 = G__23026;
count__22444_23008 = G__23027;
i__22445_23009 = G__23028;
continue;
} else {
var vec__22468_23032 = cljs.core.first(seq__22442_23022__$1);
var k_23033__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22468_23032,(0),null);
var v_23035__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22468_23032,(1),null);
dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_23033__$1,v_23035__$1);


var G__23038 = cljs.core.next(seq__22442_23022__$1);
var G__23039 = null;
var G__23040 = (0);
var G__23041 = (0);
seq__22442_23006 = G__23038;
chunk__22443_23007 = G__23039;
count__22444_23008 = G__23040;
i__22445_23009 = G__23041;
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
(dommy.attrs.set_attr_BANG_.cljs$lang$applyTo = (function (seq22406){
var G__22407 = cljs.core.first(seq22406);
var seq22406__$1 = cljs.core.next(seq22406);
var G__22408 = cljs.core.first(seq22406__$1);
var seq22406__$2 = cljs.core.next(seq22406__$1);
var G__22409 = cljs.core.first(seq22406__$2);
var seq22406__$3 = cljs.core.next(seq22406__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22407,G__22408,G__22409,seq22406__$3);
}));

(dommy.attrs.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

dommy.attrs.remove_attr_BANG_ = (function dommy$attrs$remove_attr_BANG_(var_args){
var G__22493 = arguments.length;
switch (G__22493) {
case 2:
return dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___23058 = arguments.length;
var i__5898__auto___23059 = (0);
while(true){
if((i__5898__auto___23059 < len__5897__auto___23058)){
args_arr__5922__auto__.push((arguments[i__5898__auto___23059]));

var G__23060 = (i__5898__auto___23059 + (1));
i__5898__auto___23059 = G__23060;
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
if(cljs.core.truth_((function (){var fexpr__22505 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"classes","classes",2037804510),null], null), null);
return (fexpr__22505.cljs$core$IFn$_invoke$arity$1 ? fexpr__22505.cljs$core$IFn$_invoke$arity$1(k) : fexpr__22505.call(null,k));
})())){
(elem__$1.className = "");
} else {
elem__$1.removeAttribute(dommy.utils.as_str(k));
}

return elem__$1;
}));

(dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var elem__$1 = dommy.template.__GT_node_like(elem);
var seq__22510_23068 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__22511_23069 = null;
var count__22512_23070 = (0);
var i__22513_23071 = (0);
while(true){
if((i__22513_23071 < count__22512_23070)){
var k_23072__$1 = chunk__22511_23069.cljs$core$IIndexed$_nth$arity$2(null,i__22513_23071);
dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_23072__$1);


var G__23073 = seq__22510_23068;
var G__23074 = chunk__22511_23069;
var G__23075 = count__22512_23070;
var G__23076 = (i__22513_23071 + (1));
seq__22510_23068 = G__23073;
chunk__22511_23069 = G__23074;
count__22512_23070 = G__23075;
i__22513_23071 = G__23076;
continue;
} else {
var temp__5825__auto___23077 = cljs.core.seq(seq__22510_23068);
if(temp__5825__auto___23077){
var seq__22510_23078__$1 = temp__5825__auto___23077;
if(cljs.core.chunked_seq_QMARK_(seq__22510_23078__$1)){
var c__5694__auto___23079 = cljs.core.chunk_first(seq__22510_23078__$1);
var G__23080 = cljs.core.chunk_rest(seq__22510_23078__$1);
var G__23081 = c__5694__auto___23079;
var G__23082 = cljs.core.count(c__5694__auto___23079);
var G__23083 = (0);
seq__22510_23068 = G__23080;
chunk__22511_23069 = G__23081;
count__22512_23070 = G__23082;
i__22513_23071 = G__23083;
continue;
} else {
var k_23084__$1 = cljs.core.first(seq__22510_23078__$1);
dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_23084__$1);


var G__23087 = cljs.core.next(seq__22510_23078__$1);
var G__23088 = null;
var G__23089 = (0);
var G__23090 = (0);
seq__22510_23068 = G__23087;
chunk__22511_23069 = G__23088;
count__22512_23070 = G__23089;
i__22513_23071 = G__23090;
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
(dommy.attrs.remove_attr_BANG_.cljs$lang$applyTo = (function (seq22490){
var G__22491 = cljs.core.first(seq22490);
var seq22490__$1 = cljs.core.next(seq22490);
var G__22492 = cljs.core.first(seq22490__$1);
var seq22490__$2 = cljs.core.next(seq22490__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22491,G__22492,seq22490__$2);
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
var G__22557 = arguments.length;
switch (G__22557) {
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
var G__22573 = arguments.length;
switch (G__22573) {
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
var G__22578 = dommy.template.__GT_node_like(elem);
(G__22578.style.display = ((show_QMARK_)?"":"none"));

return G__22578;
}));

(dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var elem__$1 = dommy.template.__GT_node_like(elem);
dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,dommy.attrs.hidden_QMARK_(elem__$1));

return elem__$1;
}));

(dommy.attrs.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.attrs.hide_BANG_ = (function dommy$attrs$hide_BANG_(elem){
var G__22594 = dommy.template.__GT_node_like(elem);
dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__22594,false);

return G__22594;
});
dommy.attrs.show_BANG_ = (function dommy$attrs$show_BANG_(elem){
var G__22595 = dommy.template.__GT_node_like(elem);
dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__22595,true);

return G__22595;
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
