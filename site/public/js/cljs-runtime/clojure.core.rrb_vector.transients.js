goog.provide('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.transients.ensure_editable = (function clojure$core$rrb_vector$transients$ensure_editable(edit,node){
if((node.edit === edit)){
return node;
} else {
var new_arr = cljs.core.aclone(node.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(edit,new_arr));
}
});
clojure.core.rrb_vector.transients.editable_root = (function clojure$core$rrb_vector$transients$editable_root(root){
return (new cljs.core.VectorNode(({}),cljs.core.aclone(root.arr)));
});
clojure.core.rrb_vector.transients.editable_tail = (function clojure$core$rrb_vector$transients$editable_tail(tail){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tail,(0),ret,(0),tail.length);

return ret;
});
clojure.core.rrb_vector.transients.push_tail_BANG_ = (function clojure$core$rrb_vector$transients$push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var n_32691 = ret;
var shift_32692__$1 = shift;
while(true){
var arr_32694 = n_32691.arr;
var subidx_32695 = (((cnt - (1)) >> shift_32692__$1) & (31));
if((shift_32692__$1 === (5))){
(arr_32694[subidx_32695] = tail_node);
} else {
var child_32696 = (arr_32694[subidx_32695]);
if((child_32696 == null)){
(arr_32694[subidx_32695] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_32692__$1 - (5)),tail_node));
} else {
var editable_child_32697 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_32696);
(arr_32694[subidx_32695] = editable_child_32697);

var G__32699 = editable_child_32697;
var G__32700 = (shift_32692__$1 - (5));
n_32691 = G__32699;
shift_32692__$1 = G__32700;
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.ranges(ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr[li]));
var ccnt = (((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)]));
if((!((ccnt === ((1) << shift))))){
var G__32531 = (shift - (5));
var G__32532 = (ccnt + (1));
var G__32533 = root_edit;
var G__32534 = child;
var G__32535 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__32531,G__32532,G__32533,G__32534,G__32535) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__32531,G__32532,G__32533,G__32534,G__32535));
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.transients.pop_tail_BANG_ = (function clojure$core$rrb_vector$transients$pop_tail_BANG_(shift,cnt,root_edit,current_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var subidx = (((cnt - (1)) >> shift) & (31));
if((shift > (5))){
var child = (function (){var G__32583 = (shift - (5));
var G__32584 = cnt;
var G__32585 = root_edit;
var G__32586 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__32583,G__32584,G__32585,G__32586) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__32583,G__32584,G__32585,G__32586));
})();
if((((child == null)) && ((subidx === (0))))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = null);

return ret;

}
}
} else {
var subidx = (((cnt - (1)) >> shift) & (31));
var rngs = clojure.core.rrb_vector.nodes.ranges(ret);
var subidx__$1 = (function (){var subidx__$1 = subidx;
while(true){
if((((((rngs[(subidx__$1 + (1))]) | 0) === (0))) || ((subidx__$1 === (31))))){
return subidx__$1;
} else {
var G__32715 = (subidx__$1 + (1));
subidx__$1 = G__32715;
continue;
}
break;
}
})();
if((shift > (5))){
var child = (ret.arr[subidx__$1]);
var child_cnt = (((subidx__$1 === (0)))?(rngs[(0)]):((rngs[subidx__$1]) - (rngs[(subidx__$1 - (1))])));
var new_child = (function (){var G__32616 = (shift - (5));
var G__32617 = child_cnt;
var G__32618 = root_edit;
var G__32619 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__32616,G__32617,G__32618,G__32619) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__32616,G__32617,G__32618,G__32619));
})();
if((((new_child == null)) && ((subidx__$1 === (0))))){
return null;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(child)){
var arr = ret.arr;
(rngs[subidx__$1] = ((rngs[subidx__$1]) - (32)));

(arr[subidx__$1] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;
} else {
var rng = clojure.core.rrb_vector.nodes.last_range(child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range(new_child):(0)));
var arr = ret.arr;
(rngs[subidx__$1] = ((rngs[subidx__$1]) - diff));

(arr[subidx__$1] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;

}
}
} else {
if((subidx__$1 === (0))){
return null;
} else {
var arr = ret.arr;
var child = (arr[subidx__$1]);
(arr[subidx__$1] = null);

(rngs[subidx__$1] = (0));

(rngs[(32)] = ((rngs[(32)]) - (1)));

return ret;

}
}
}
});
clojure.core.rrb_vector.transients.do_assoc_BANG_ = (function clojure$core$rrb_vector$transients$do_assoc_BANG_(shift,root_edit,current_node,i,val){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var shift_32736__$1 = shift;
var node_32738 = ret;
while(true){
if((shift_32736__$1 === (0))){
var arr_32739 = node_32738.arr;
(arr_32739[(i & (31))] = val);
} else {
var arr_32740 = node_32738.arr;
var subidx_32741 = ((i >> shift_32736__$1) & (31));
var child_32742 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_32740[subidx_32741]));
(arr_32740[subidx_32741] = child_32742);

var G__32745 = (shift_32736__$1 - (5));
var G__32746 = child_32742;
shift_32736__$1 = G__32745;
node_32738 = G__32746;
continue;
}
break;
}
} else {
var arr_32747 = ret.arr;
var rngs_32748 = clojure.core.rrb_vector.nodes.ranges(ret);
var subidx_32749 = ((i >> shift) & (31));
var subidx_32750__$1 = (function (){var subidx_32750__$1 = subidx_32749;
while(true){
if((i < ((rngs_32748[subidx_32750__$1]) | 0))){
return subidx_32750__$1;
} else {
var G__32755 = (subidx_32750__$1 + (1));
subidx_32750__$1 = G__32755;
continue;
}
break;
}
})();
var i_32751__$1 = (((subidx_32750__$1 === (0)))?i:(i - (rngs_32748[(subidx_32750__$1 - (1))])));
(arr_32747[subidx_32750__$1] = (function (){var G__32676 = (shift - (5));
var G__32677 = root_edit;
var G__32678 = (arr_32747[subidx_32750__$1]);
var G__32679 = i_32751__$1;
var G__32680 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__32676,G__32677,G__32678,G__32679,G__32680) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__32676,G__32677,G__32678,G__32679,G__32680));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map
