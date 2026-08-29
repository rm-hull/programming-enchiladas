goog.provide('demo.rm_hull_5201050.core');
var seq__35676_35755 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
var chunk__35681_35756 = null;
var count__35682_35757 = (0);
var i__35683_35758 = (0);
while(true){
if((i__35683_35758 < count__35682_35757)){
var a_35759 = chunk__35681_35756.cljs$core$IIndexed$_nth$arity$2(null,i__35683_35758);
var seq__35684_35760 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(a_35759));
var chunk__35685_35761 = null;
var count__35686_35762 = (0);
var i__35687_35763 = (0);
while(true){
if((i__35687_35763 < count__35686_35762)){
var b_35764 = chunk__35685_35761.cljs$core$IIndexed$_nth$arity$2(null,i__35687_35763);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_35759,"x",b_35764,"=",(a_35759 * b_35764)], 0));


var G__35765 = seq__35684_35760;
var G__35766 = chunk__35685_35761;
var G__35767 = count__35686_35762;
var G__35768 = (i__35687_35763 + (1));
seq__35684_35760 = G__35765;
chunk__35685_35761 = G__35766;
count__35686_35762 = G__35767;
i__35687_35763 = G__35768;
continue;
} else {
var temp__5825__auto___35769 = cljs.core.seq(seq__35684_35760);
if(temp__5825__auto___35769){
var seq__35684_35770__$1 = temp__5825__auto___35769;
if(cljs.core.chunked_seq_QMARK_(seq__35684_35770__$1)){
var c__5694__auto___35771 = cljs.core.chunk_first(seq__35684_35770__$1);
var G__35772 = cljs.core.chunk_rest(seq__35684_35770__$1);
var G__35773 = c__5694__auto___35771;
var G__35774 = cljs.core.count(c__5694__auto___35771);
var G__35775 = (0);
seq__35684_35760 = G__35772;
chunk__35685_35761 = G__35773;
count__35686_35762 = G__35774;
i__35687_35763 = G__35775;
continue;
} else {
var b_35776 = cljs.core.first(seq__35684_35770__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_35759,"x",b_35776,"=",(a_35759 * b_35776)], 0));


var G__35778 = cljs.core.next(seq__35684_35770__$1);
var G__35779 = null;
var G__35780 = (0);
var G__35781 = (0);
seq__35684_35760 = G__35778;
chunk__35685_35761 = G__35779;
count__35686_35762 = G__35780;
i__35687_35763 = G__35781;
continue;
}
} else {
}
}
break;
}

var G__35783 = seq__35676_35755;
var G__35784 = chunk__35681_35756;
var G__35785 = count__35682_35757;
var G__35786 = (i__35683_35758 + (1));
seq__35676_35755 = G__35783;
chunk__35681_35756 = G__35784;
count__35682_35757 = G__35785;
i__35683_35758 = G__35786;
continue;
} else {
var temp__5825__auto___35787 = cljs.core.seq(seq__35676_35755);
if(temp__5825__auto___35787){
var seq__35676_35788__$1 = temp__5825__auto___35787;
if(cljs.core.chunked_seq_QMARK_(seq__35676_35788__$1)){
var c__5694__auto___35789 = cljs.core.chunk_first(seq__35676_35788__$1);
var G__35790 = cljs.core.chunk_rest(seq__35676_35788__$1);
var G__35791 = c__5694__auto___35789;
var G__35792 = cljs.core.count(c__5694__auto___35789);
var G__35793 = (0);
seq__35676_35755 = G__35790;
chunk__35681_35756 = G__35791;
count__35682_35757 = G__35792;
i__35683_35758 = G__35793;
continue;
} else {
var a_35794 = cljs.core.first(seq__35676_35788__$1);
var seq__35677_35795 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(a_35794));
var chunk__35678_35796 = null;
var count__35679_35797 = (0);
var i__35680_35798 = (0);
while(true){
if((i__35680_35798 < count__35679_35797)){
var b_35799 = chunk__35678_35796.cljs$core$IIndexed$_nth$arity$2(null,i__35680_35798);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_35794,"x",b_35799,"=",(a_35794 * b_35799)], 0));


var G__35800 = seq__35677_35795;
var G__35801 = chunk__35678_35796;
var G__35802 = count__35679_35797;
var G__35803 = (i__35680_35798 + (1));
seq__35677_35795 = G__35800;
chunk__35678_35796 = G__35801;
count__35679_35797 = G__35802;
i__35680_35798 = G__35803;
continue;
} else {
var temp__5825__auto___35804__$1 = cljs.core.seq(seq__35677_35795);
if(temp__5825__auto___35804__$1){
var seq__35677_35805__$1 = temp__5825__auto___35804__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35677_35805__$1)){
var c__5694__auto___35806 = cljs.core.chunk_first(seq__35677_35805__$1);
var G__35807 = cljs.core.chunk_rest(seq__35677_35805__$1);
var G__35808 = c__5694__auto___35806;
var G__35809 = cljs.core.count(c__5694__auto___35806);
var G__35810 = (0);
seq__35677_35795 = G__35807;
chunk__35678_35796 = G__35808;
count__35679_35797 = G__35809;
i__35680_35798 = G__35810;
continue;
} else {
var b_35811 = cljs.core.first(seq__35677_35805__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_35794,"x",b_35811,"=",(a_35794 * b_35811)], 0));


var G__35812 = cljs.core.next(seq__35677_35805__$1);
var G__35813 = null;
var G__35814 = (0);
var G__35815 = (0);
seq__35677_35795 = G__35812;
chunk__35678_35796 = G__35813;
count__35679_35797 = G__35814;
i__35680_35798 = G__35815;
continue;
}
} else {
}
}
break;
}

var G__35816 = cljs.core.next(seq__35676_35788__$1);
var G__35817 = null;
var G__35818 = (0);
var G__35819 = (0);
seq__35676_35755 = G__35816;
chunk__35681_35756 = G__35817;
count__35682_35757 = G__35818;
i__35683_35758 = G__35819;
continue;
}
} else {
}
}
break;
}
alert("ClojureScript says 'Boo!'");

//# sourceMappingURL=demo.rm_hull_5201050.core.js.map
