goog.provide('demo.rm_hull_6859633.core');
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["unify with nil"], 0));
var x_26273 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.pair(x_26273,null),cljs.core.logic.pair(x_26273,null))){
} else {
throw (new Error("Assert failed: (= (pair x nil) (pair x nil))"));
}
var x_26274 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.pair(x_26274,null),cljs.core.logic.pair(null,x_26274)) === false){
} else {
throw (new Error("Assert failed: (false? (= (pair x nil) (pair nil x)))"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,null,(1)))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s nil 1))"));
}
var x_26275 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var a_26276 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26275,null);
var b_26277 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,null,x_26275);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a_26276,b_26277)){
} else {
throw (new Error("Assert failed: (= a b)"));
}
var x_26278 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,null,cljs.core.logic.lcons((1),x_26278)))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s nil (lcons 1 x)))"));
}
var x_26279 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,null,cljs.core.PersistentArrayMap.EMPTY))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s nil {}))"));
}
var x_26280 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,null,cljs.core.PersistentHashSet.EMPTY))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s nil #{}))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["unify with object"], 0));
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,(1),null))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s 1 nil))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,(1),(1)),cljs.core.logic.empty_s)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s 1 1) empty-s)"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"foo","foo",1268894036)),cljs.core.logic.empty_s)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s :foo :foo) empty-s)"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,new cljs.core.Symbol(null,"foo","foo",-1385541733,null),new cljs.core.Symbol(null,"foo","foo",-1385541733,null)),cljs.core.logic.empty_s)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s (quote foo) (quote foo)) empty-s)"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,"foo","foo"),cljs.core.logic.empty_s)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s \"foo\" \"foo\") empty-s)"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,(1),(2)))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s 1 2))"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,(2),(1)))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s 2 1))"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"bar","bar",-1386246584)))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s :foo :bar))"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,new cljs.core.Symbol(null,"foo","foo",-1385541733,null),new cljs.core.Symbol(null,"bar","bar",254284943,null)))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s (quote foo) (quote bar)))"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,"foo","bar"))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s \"foo\" \"bar\"))"));
}
var x_26281 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26282 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26281,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,(1),x_26281),os_26282)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s 1 x) os)"));
}
var x_26283 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,(1),cljs.core.logic.lcons((1),new cljs.core.Symbol(null,"x","x",-555367584,null))))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s 1 (lcons 1 (quote x))))"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,(1),cljs.core.List.EMPTY))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s 1 (quote ())))"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,(1),cljs.core.PersistentVector.EMPTY))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s 1 (quote [])))"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,(1),cljs.core.PersistentArrayMap.EMPTY))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s 1 {}))"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,(1),cljs.core.PersistentHashSet.EMPTY))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s 1 #{}))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["unify with lvar"], 0));
var x_26284 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26285 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26284,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,x_26284,(1)),os_26285)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s x 1) os)"));
}
var x_26286 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y_26287 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
var os_26288 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26286,y_26287);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,x_26286,y_26287),os_26288)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s x y) os)"));
}
var x_26289 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y_26290 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
var l_26291 = cljs.core.logic.lcons((1),y_26290);
var os_26292 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26289,l_26291);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,x_26289,l_26291),os_26292)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s x l) os)"));
}
var x_26293 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26294 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26293,cljs.core.PersistentVector.EMPTY);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,x_26293,cljs.core.PersistentVector.EMPTY),os_26294)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s x []) os)"));
}
var x_26295 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26296 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26295,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,x_26295,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),os_26296)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s x [1 2 3]) os)"));
}
var x_26297 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26298 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26297,cljs.core.List.EMPTY);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,x_26297,cljs.core.List.EMPTY),os_26298)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s x (quote ())) os)"));
}
var x_26299 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26300 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26299,cljs.core.list((1),(2),(3)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,x_26299,cljs.core.list((1),(2),(3))),os_26300)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s x (quote (1 2 3))) os)"));
}
var x_26301 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26302 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26301,cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,x_26301,cljs.core.PersistentArrayMap.EMPTY),os_26302)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s x {}) os)"));
}
var x_26303 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26304 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26303,new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(3),(4)], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,x_26303,new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(3),(4)], null)),os_26304)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s x {1 2, 3 4}) os)"));
}
var x_26305 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26306 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26305,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,x_26305,cljs.core.PersistentHashSet.EMPTY),os_26306)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s x #{}) os)"));
}
var x_26307 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26308 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26307,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,x_26307,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null)),os_26308)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s x #{1 3 2}) os)"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["unify with lcons"], 0));
var x_26309 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.logic.lcons((1),x_26309),(1)))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s (lcons 1 x) 1))"));
}
var x_26310 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y_26311 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
var l_26312 = cljs.core.logic.lcons((1),y_26311);
var os_26313 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26310,l_26312);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,l_26312,x_26310),os_26313)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s l x) os)"));
}
var x_26314 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y_26315 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
var lc1_26316 = cljs.core.logic.lcons((1),x_26314);
var lc2_26317 = cljs.core.logic.lcons((1),y_26315);
var os_26318 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26314,y_26315);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,lc1_26316,lc2_26317),os_26318)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s lc1 lc2) os)"));
}
var x_26319 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y_26320 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
var z_26321 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"z","z",851004344,null));
var lc1_26322 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((2),x_26319));
var lc2_26323 = cljs.core.logic.lcons((1),cljs.core.logic.lcons(z_26321,y_26320));
var os_26324 = cljs.core.logic._ext_no_check(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,z_26321,(2)),x_26319,y_26320);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,lc1_26322,lc2_26323),os_26324)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s lc1 lc2) os)"));
}
var x_26325 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y_26326 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
var lc1_26327 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((2),x_26325));
var lc2_26328 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((2),cljs.core.logic.lcons((3),y_26326)));
var os_26329 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26325,cljs.core.logic.lcons((3),y_26326));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,lc1_26327,lc2_26328),os_26329)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s lc1 lc2) os)"));
}
var x_26330 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y_26331 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
var lc1_26332 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((2),x_26330));
var lc2_26333 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((3),cljs.core.logic.lcons((4),y_26331)));
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,lc1_26332,lc2_26333))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s lc1 lc2))"));
}
var x_26334 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y_26335 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
var lc2_26336 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((2),x_26334));
var lc1_26337 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((3),cljs.core.logic.lcons((4),y_26335)));
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,lc1_26337,lc2_26336))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s lc1 lc2))"));
}
var x_26338 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y_26339 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
var lc1_26340 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((2),x_26338));
var lc2_26341 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((2),y_26339));
var os_26342 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26338,y_26339);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,lc1_26340,lc2_26341),os_26342)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s lc1 lc2) os)"));
}
var x_26343 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var lc1_26344 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((2),x_26343));
var l1_26345 = cljs.core.list((1),(2),(3),(4));
var os_26346 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26343,cljs.core.list((3),(4)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,lc1_26344,l1_26345),os_26346)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s lc1 l1) os)"));
}
var x_26347 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y_26348 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
var lc1_26349 = cljs.core.logic.lcons((1),cljs.core.logic.lcons(y_26348,cljs.core.logic.lcons((3),x_26347)));
var l1_26350 = cljs.core.list((1),(2),(3),(4));
var os_26351 = cljs.core.logic._ext_no_check(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,y_26348,(2)),x_26347,cljs.core.list((4)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,lc1_26349,l1_26350),os_26351)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s lc1 l1) os)"));
}
var x_26352 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var lc1_26353 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((2),cljs.core.logic.lcons((3),x_26352)));
var l1_26354 = cljs.core.list((1),(2),(3));
var os_26355 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26352,cljs.core.List.EMPTY);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,lc1_26353,l1_26354),os_26355)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s lc1 l1) os)"));
}
var x_26356 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var lc1_26357 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((3),x_26356));
var l1_26358 = cljs.core.list((1),(2),(3),(4));
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,lc1_26357,l1_26358))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s lc1 l1))"));
}
var x_26359 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var lc1_26360 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((2),x_26359));
var l1_26361 = cljs.core.list((1),(3),(4),(5));
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,lc1_26360,l1_26361))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s lc1 l1))"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.logic.lcons((1),cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null))),cljs.core.PersistentArrayMap.EMPTY))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s (lcons 1 (lvar (quote x))) {}))"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.logic.lcons((1),cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null))),cljs.core.PersistentHashSet.EMPTY))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s (lcons 1 (lvar (quote x))) #{}))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["unify with sequential"], 0));
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.List.EMPTY,(1)))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s (quote ()) 1))"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.PersistentVector.EMPTY,(1)))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s [] 1))"));
}
var x_26362 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26363 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26362,cljs.core.PersistentVector.EMPTY);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.PersistentVector.EMPTY,x_26362),os_26363)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s [] x) os)"));
}
var x_26364 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26365 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26364,cljs.core.PersistentVector.EMPTY);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.PersistentVector.EMPTY,x_26364),os_26365)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s [] x) os)"));
}
var x_26366 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var lc1_26367 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((2),x_26366));
var l1_26368 = cljs.core.list((1),(2),(3),(4));
var os_26369 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26366,cljs.core.list((3),(4)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,l1_26368,lc1_26367),os_26369)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s l1 lc1) os)"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),cljs.core.logic.empty_s)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s [1 2 3] [1 2 3]) empty-s)"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.list((1),(2),(3)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),cljs.core.logic.empty_s)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s (quote (1 2 3)) [1 2 3]) empty-s)"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.list((1),(2),(3)),cljs.core.list((1),(2),(3))),cljs.core.logic.empty_s)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s (quote (1 2 3)) (quote (1 2 3))) empty-s)"));
}
var x_26370 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26371 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26370,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,x_26370,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(3),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,(2),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(3),null,(1),null))], 0))))),os_26371)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s (clojure.core/sequence (clojure.core/seq (clojure.core/concat (clojure.core/list 1) (clojure.core/list x) (clojure.core/list 3)))) (clojure.core/sequence (clojure.core/seq (clojure.core/concat (clojure.core/list 1) (clojure.core/list 2) (clojure.core/list 3))))) os)"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s [1 2] [1 2 3]))"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.list((1),(2)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s (quote (1 2)) [1 2 3]))"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2),(1)], null)))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s [1 2 3] [3 2 1]))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.List.EMPTY,cljs.core.List.EMPTY),cljs.core.logic.empty_s)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s (quote ()) (quote ())) empty-s)"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.List.EMPTY,cljs.core.list((1))))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s (quote ()) (quote (1))))"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.list((1)),cljs.core.List.EMPTY))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s (quote (1)) (quote ())))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null)),cljs.core.logic.empty_s)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s [[1 2]] [[1 2]]) empty-s)"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)], null)))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s [[1 2]] [[2 1]]))"));
}
var x_26372 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26373 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26372,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_26372,(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null)),os_26373)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s [[x 2]] [[1 2]]) os)"));
}
var x_26374 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26375 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26374,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_26374], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null)),os_26375)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s [x] [[1 2]]) os)"));
}
var x_26376 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y_26377 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
var u_26378 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"u","u",483896742,null));
var v_26379 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"v","v",1661996586,null));
var os_26380 = cljs.core.logic._ext_no_check(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,y_26377,new cljs.core.Symbol(null,"a","a",-482876059,null)),x_26376,new cljs.core.Symbol(null,"b","b",-1172211299,null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),x_26376], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_26377,new cljs.core.Symbol(null,"b","b",-1172211299,null)], null)),os_26380)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s [(quote a) x] [y (quote b)]) os)"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s [] {}))"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.List.EMPTY,cljs.core.PersistentArrayMap.EMPTY))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s (quote ()) {}))"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s [] #{}))"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.List.EMPTY,cljs.core.PersistentHashSet.EMPTY))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s (quote ()) #{}))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["unify with map"], 0));
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.PersistentArrayMap.EMPTY,(1)))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s {} 1))"));
}
var x_26381 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26382 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26381,cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.PersistentArrayMap.EMPTY,x_26381),os_26382)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s {} x) os)"));
}
var x_26383 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.logic.lcons((1),x_26383)))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s {} (lcons 1 x)))"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.List.EMPTY))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s {} (quote ())))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY),cljs.core.logic.empty_s)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s {} {}) empty-s)"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(3),(4)], null),new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(3),(4)], null)),cljs.core.logic.empty_s)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s {1 2, 3 4} {1 2, 3 4}) empty-s)"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,new cljs.core.PersistentArrayMap(null, 1, [(1),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(3),(4)], null)))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s {1 2} {1 2, 3 4}))"));
}
var x_26384 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var m1_26385 = new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(3),(4)], null);
var m2_26386 = new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(3),x_26384], null);
var os_26387 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26384,(4));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,m1_26385,m2_26386),os_26387)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s m1 m2) os)"));
}
var x_26388 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var m1_26389 = new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(3),(4)], null);
var m2_26390 = new cljs.core.PersistentArrayMap(null, 2, [(1),(4),(3),x_26388], null);
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,m1_26389,m2_26390))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s m1 m2))"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s {} #{}))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["walk"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
var s = cljs.core.logic.to_s(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)], null));
return s.cljs$core$logic$ISubstitutions$_walk$arity$2(null,y);
})(),(5))){
} else {
throw (new Error("Assert failed: (= (let [x (lvar (quote x)) y (lvar (quote y)) s (to-s [[x 5] [y x]])] (-walk s y)) 5)"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var vec__26116 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.lvar,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"a","a",-482876059,null)], null));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26116,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26116,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26116,(2),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26116,(3),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26116,(4),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26116,(5),null);
var s = vec__26116;
var s__$1 = cljs.core.logic.to_s(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [z,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,z], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)], null));
return s__$1.cljs$core$logic$ISubstitutions$_walk$arity$2(null,a);
})(),(5))){
} else {
throw (new Error("Assert failed: (= (let [[x y z c b a :as s] (map lvar (quote [x y z c b a])) s (to-s [[x 5] [y x] [z y] [c z] [b c] [a b]])] (-walk s a)) 5)"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["reify"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
return cljs.core.logic.to_s(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)], null)).cljs$core$logic$ISubstitutions$_reify_lvar_name$arity$1(null);
})(),new cljs.core.Symbol(null,"_.2","_.2",-948310065,null))){
} else {
throw (new Error("Assert failed: (= (let [x (lvar (quote x)) y (lvar (quote y))] (-reify-lvar-name (to-s [[x 5] [y x]]))) (quote _.2))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["walk*"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
return cljs.core.logic.to_s(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)], null)).cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))));
})(),cljs.core.list((5),(5)))){
} else {
throw (new Error("Assert failed: (= (let [x (lvar (quote x)) y (lvar (quote y))] (-walk* (to-s [[x 5] [y x]]) (clojure.core/sequence (clojure.core/seq (clojure.core/concat (clojure.core/list x) (clojure.core/list y)))))) (quote (5 5)))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["run and unify"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,true,q);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list(true))){
} else {
throw (new Error("Assert failed: (= (run* [q] (m/== true q)) (quote (true)))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20116__auto____$1){
return (new cljs.core.logic.Inc((function (){
var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto____$1,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5)], null));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),q);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
})));
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5)], null)], null))){
} else {
throw (new Error("Assert failed: (= (run* [q] (fresh [x y] (m/== [x y] [1 5]) (m/== [x y] q))) [[1 5]])"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20116__auto____$1){
return (new cljs.core.logic.Inc((function (){
var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
return cljs.core.logic._bind(a__20116__auto____$1,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),q);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
})));
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_.0","_.0",1821215658,null),new cljs.core.Symbol(null,"_.1","_.1",-872495016,null)], null)], null))){
} else {
throw (new Error("Assert failed: (= (run* [q] (fresh [x y] (m/== [x y] q))) (quote [[_.0 _.1]]))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fail"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.fail),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,true,q);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.PersistentVector.EMPTY)){
} else {
throw (new Error("Assert failed: (= (run* [q] fail (m/== true q)) [])"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["basic"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20177__auto__){
return cljs.core.logic._bind(cljs.core.logic._bind(a__20177__auto__,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,(1),(1));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,q,true);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list(true))){
} else {
throw (new Error("Assert failed: (= (run* [q] (all (m/== 1 1) (m/== q true))) (quote (true)))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["trs"], 0));
demo.rm_hull_6859633.core.pairo = (function demo$rm_hull_6859633$core$pairo(p){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var a = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"a","a",-482876059,null));
var d = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"d","d",-682293345,null));
return cljs.core.logic._bind(a__20116__auto__,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,cljs.core.logic.lcons(a,d),p);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
})));
});
});
demo.rm_hull_6859633.core.twino = (function demo$rm_hull_6859633$core$twino(p){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
return cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.conso(x,x,p));
})));
});
});
demo.rm_hull_6859633.core.listo = (function demo$rm_hull_6859633$core$listo(l){
return (function (a26212){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(cljs.core.logic._bind(a26212,cljs.core.logic.emptyo(l)),cljs.core.logic.s_SHARP_),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(cljs.core.logic._bind(a26212,demo.rm_hull_6859633.core.pairo(l)),(function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var d = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"d","d",-682293345,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.resto(l,d)),(demo.rm_hull_6859633.core.listo.cljs$core$IFn$_invoke$arity$1 ? demo.rm_hull_6859633.core.listo.cljs$core$IFn$_invoke$arity$1(d) : demo.rm_hull_6859633.core.listo.call(null,d)));
})));
}));
}))));
})));
});
});
demo.rm_hull_6859633.core.flatteno = (function demo$rm_hull_6859633$core$flatteno(s,out){
return (function (a26238){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(cljs.core.logic._bind(a26238,cljs.core.logic.emptyo(s)),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,cljs.core.List.EMPTY,out);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(cljs.core.logic._bind(a26238,demo.rm_hull_6859633.core.pairo(s)),(function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var a = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"a","a",-482876059,null));
var d = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"d","d",-682293345,null));
var res_a = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res-a","res-a",805115205,null));
var res_d = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res-d","res-d",-878625967,null));
return cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.conso(a,d,s)),(demo.rm_hull_6859633.core.flatteno.cljs$core$IFn$_invoke$arity$2 ? demo.rm_hull_6859633.core.flatteno.cljs$core$IFn$_invoke$arity$2(a,res_a) : demo.rm_hull_6859633.core.flatteno.call(null,a,res_a))),(demo.rm_hull_6859633.core.flatteno.cljs$core$IFn$_invoke$arity$2 ? demo.rm_hull_6859633.core.flatteno.cljs$core$IFn$_invoke$arity$2(d,res_d) : demo.rm_hull_6859633.core.flatteno.call(null,d,res_d))),cljs.core.logic.appendo(res_a,res_d,out));
})));
})),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a26238,cljs.core.logic.conso(s,cljs.core.List.EMPTY,out));
}))));
}))));
})));
});
});
demo.rm_hull_6859633.core.rembero = (function demo$rm_hull_6859633$core$rembero(x,l,out){
return (function (a26243){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(cljs.core.logic._bind(a26243,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,cljs.core.List.EMPTY,l);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,cljs.core.List.EMPTY,out);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(a26243,(function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var a = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"a","a",-482876059,null));
var d = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"d","d",-682293345,null));
return cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.conso(a,d,l)),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,x,a);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,d,out);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
})));
})),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a26243,(function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var a = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"a","a",-482876059,null));
var d = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"d","d",-682293345,null));
var res = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res","res",245523648,null));
return cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.conso(a,d,l)),cljs.core.logic.conso(a,res,out)),(demo.rm_hull_6859633.core.rembero.cljs$core$IFn$_invoke$arity$3 ? demo.rm_hull_6859633.core.rembero.cljs$core$IFn$_invoke$arity$3(x,d,res) : demo.rm_hull_6859633.core.rembero.call(null,x,d,res)));
})));
}));
}))));
}))));
})));
});
});
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["conde"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a26244){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(cljs.core.logic._bind(a26244,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,x,new cljs.core.Symbol(null,"olive","olive",-440010939,null));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),cljs.core.logic.succeed),(new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(cljs.core.logic._bind(a26244,cljs.core.logic.succeed),cljs.core.logic.succeed),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(cljs.core.logic._bind(a26244,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,x,new cljs.core.Symbol(null,"oil","oil",-875291055,null));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),cljs.core.logic.succeed);
}))));
}))));
})));
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,x);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"olive","olive",-440010939,null),new cljs.core.Symbol(null,"_.0","_.0",1821215658,null),new cljs.core.Symbol(null,"oil","oil",-875291055,null)], null))){
} else {
throw (new Error("Assert failed: (= (run* [x] (conde [(m/== x (quote olive)) succeed] [succeed succeed] [(m/== x (quote oil)) succeed])) (quote [olive _.0 oil]))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var r = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"r","r",1169147337,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20116__auto____$1){
return (new cljs.core.logic.Inc((function (){
var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto____$1,(function (a26245){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(cljs.core.logic._bind(a26245,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"split","split",1041096409,null),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"pea","pea",344213330,null),y);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(cljs.core.logic._bind(a26245,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"navy","navy",-1028093649,null),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"bean","bean",-1620239896,null),y);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
}))));
})));
})),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,cljs.core.cons(x,cljs.core.cons(y,cljs.core.List.EMPTY)),r);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
})));
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,r);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.Symbol(null,"pea","pea",344213330,null)),cljs.core.list(new cljs.core.Symbol(null,"navy","navy",-1028093649,null),new cljs.core.Symbol(null,"bean","bean",-1620239896,null))], null))){
} else {
throw (new Error("Assert failed: (= (run* [r] (fresh [x y] (conde [(m/== (quote split) x) (m/== (quote pea) y)] [(m/== (quote navy) x) (m/== (quote bean) y)]) (m/== (cons x (cons y ())) r))) (quote [(split pea) (navy bean)]))"));
}
demo.rm_hull_6859633.core.teacupo = (function demo$rm_hull_6859633$core$teacupo(x){
return (function (a26246){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(cljs.core.logic._bind(a26246,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"tea","tea",927684288,null),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),cljs.core.logic.s_SHARP_),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(cljs.core.logic._bind(a26246,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"cup","cup",-1010002779,null),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),cljs.core.logic.s_SHARP_);
}))));
})));
});
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var r = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"r","r",1169147337,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20116__auto____$1){
return (new cljs.core.logic.Inc((function (){
var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto____$1,(function (a26247){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a26247,demo.rm_hull_6859633.core.teacupo(x)),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,true,y);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),cljs.core.logic.s_SHARP_),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(cljs.core.logic._bind(a26247,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,false,x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,true,y);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
}))));
})));
})),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,cljs.core.cons(x,cljs.core.cons(y,cljs.core.List.EMPTY)),r);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
})));
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,r);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list(cljs.core.list(false,true),cljs.core.list(new cljs.core.Symbol(null,"tea","tea",927684288,null),true),cljs.core.list(new cljs.core.Symbol(null,"cup","cup",-1010002779,null),true)))){
} else {
throw (new Error("Assert failed: (= (run* [r] (fresh [x y] (conde [(teacupo x) (m/== true y) s#] [(m/== false x) (m/== true y)]) (m/== (cons x (cons y ())) r))) (quote ((false true) (tea true) (cup true))))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["conso"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20116__auto____$1){
return (new cljs.core.logic.Inc((function (){
var a = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"a","a",-482876059,null));
var d = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"d","d",-682293345,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto____$1,cljs.core.logic.conso(a,d,cljs.core.List.EMPTY)),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,cljs.core.cons(a,d),q);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
})));
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.PersistentVector.EMPTY)){
} else {
throw (new Error("Assert failed: (= (run* [q] (fresh [a d] (conso a d ()) (m/== (cons a d) q))) [])"));
}
var a_26391 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"a","a",-482876059,null));
var d_26392 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"d","d",-682293345,null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.conso(a_26391,d_26392,q)),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.lcons(a_26391,d_26392)], null))){
} else {
throw (new Error("Assert failed: (= (run* [q] (conso a d q)) [(lcons a d)])"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [q], null),null);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.PersistentVector.EMPTY)){
} else {
throw (new Error("Assert failed: (= (run* [q] (m/== [q] nil)) [])"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.conso(new cljs.core.Symbol(null,"a","a",-482876059,null),null,q)),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null))], null))){
} else {
throw (new Error("Assert failed: (= (run* [q] (conso (quote a) nil q)) (quote [(a)]))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.conso(new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Symbol(null,"d","d",-682293345,null)),q)),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"d","d",-682293345,null))], null))){
} else {
throw (new Error("Assert failed: (= (run* [q] (conso (quote a) (quote (d)) q)) (quote [(a d)]))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.conso(new cljs.core.Symbol(null,"a","a",-482876059,null),q,cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null)))),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.List.EMPTY], null))){
} else {
throw (new Error("Assert failed: (= (run* [q] (conso (quote a) q (quote (a)))) (quote [()]))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.conso(q,cljs.core.list(new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"c","c",-122660552,null)))),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null)], null))){
} else {
throw (new Error("Assert failed: (= (run* [q] (conso q (quote (b c)) (quote (a b c)))) (quote [a]))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["firsto"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.firsto(q,cljs.core.list((1),(2)))),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),(new cljs.core.List(null,cljs.core.logic.lcons(cljs.core.list((1),(2)),cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null))),null,(1),null)))){
} else {
throw (new Error("Assert failed: (= (run* [q] (firsto q (quote (1 2)))) (list (lcons (quote (1 2)) (lvar (quote x)))))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["resto"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.resto(q,cljs.core.list((1),(2)))),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"_.0","_.0",1821215658,null),(1),(2))], null))){
} else {
throw (new Error("Assert failed: (= (run* [q] (resto q (quote (1 2)))) (quote [(_.0 1 2)]))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.resto(q,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null))),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"_.0","_.0",1821215658,null),(1),(2))], null))){
} else {
throw (new Error("Assert failed: (= (run* [q] (resto q [1 2])) (quote [(_.0 1 2)]))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.resto(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),q)),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list((2))], null))){
} else {
throw (new Error("Assert failed: (= (run* [q] (resto [1 2] q)) (quote [(2)]))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.resto(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8)], null),q)),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list((2),(3),(4),(5),(6),(7),(8))], null))){
} else {
throw (new Error("Assert failed: (= (run* [q] (resto [1 2 3 4 5 6 7 8] q)) (quote [(2 3 4 5 6 7 8)]))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["flatteno"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,demo.rm_hull_6859633.core.flatteno(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null),new cljs.core.Symbol(null,"c","c",-122660552,null)], null),x)),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,x);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list(cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null),new cljs.core.Symbol(null,"c","c",-122660552,null)], null)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null),cljs.core.list(new cljs.core.Symbol(null,"c","c",-122660552,null))),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null),new cljs.core.Symbol(null,"c","c",-122660552,null)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null),new cljs.core.Symbol(null,"c","c",-122660552,null),cljs.core.List.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Symbol(null,"b","b",-1172211299,null)),cljs.core.list(new cljs.core.Symbol(null,"c","c",-122660552,null))),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Symbol(null,"b","b",-1172211299,null)),new cljs.core.Symbol(null,"c","c",-122660552,null)),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Symbol(null,"b","b",-1172211299,null)),new cljs.core.Symbol(null,"c","c",-122660552,null),cljs.core.List.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),cljs.core.list(new cljs.core.Symbol(null,"c","c",-122660552,null))),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"c","c",-122660552,null))),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"c","c",-122660552,null),cljs.core.List.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c","c",-122660552,null)),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c","c",-122660552,null),cljs.core.List.EMPTY)))){
} else {
throw (new Error("Assert failed: (= (run* [x] (flatteno (quote [[a b] c]) x)) (quote (([[a b] c]) ([a b] (c)) ([a b] c) ([a b] c ()) (a (b) (c)) (a (b) c) (a (b) c ()) (a b (c)) (a b () (c)) (a b c) (a b c ()) (a b () c) (a b () c ()))))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["membero"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20177__auto__){
return cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a__20177__auto__,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0()], null));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),cljs.core.logic.membero(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"foo","foo",-1385541733,null),cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0()], null),q)),cljs.core.logic.membero(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Symbol(null,"bar","bar",254284943,null)], null),q));
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"foo","foo",-1385541733,null),new cljs.core.Symbol(null,"bar","bar",254284943,null)], null)], null)))){
} else {
throw (new Error("Assert failed: (= (run* [q] (all (m/== q [(lvar)]) (membero [(quote foo) (lvar)] q) (membero [(lvar) (quote bar)] q))) (quote ([[foo bar]])))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20177__auto__){
return cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a__20177__auto__,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,q,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0()], null));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),cljs.core.logic.membero(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"foo","foo",-1385541733,null),cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0()], null),q)),cljs.core.logic.membero(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Symbol(null,"bar","bar",254284943,null)], null),q));
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"foo","foo",-1385541733,null),new cljs.core.Symbol(null,"bar","bar",254284943,null)], null),new cljs.core.Symbol(null,"_.0","_.0",1821215658,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"foo","foo",-1385541733,null),new cljs.core.Symbol(null,"_.0","_.0",1821215658,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_.1","_.1",-872495016,null),new cljs.core.Symbol(null,"bar","bar",254284943,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_.0","_.0",1821215658,null),new cljs.core.Symbol(null,"bar","bar",254284943,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"foo","foo",-1385541733,null),new cljs.core.Symbol(null,"_.1","_.1",-872495016,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_.0","_.0",1821215658,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"foo","foo",-1385541733,null),new cljs.core.Symbol(null,"bar","bar",254284943,null)], null)], null)))){
} else {
throw (new Error("Assert failed: (= (run* [q] (all (m/== q [(lvar) (lvar)]) (membero [(quote foo) (lvar)] q) (membero [(lvar) (quote bar)] q))) (quote ([[foo bar] _.0] [[foo _.0] [_.1 bar]] [[_.0 bar] [foo _.1]] [_.0 [foo bar]])))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rembero"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),(1),new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,demo.rm_hull_6859633.core.rembero(new cljs.core.Symbol(null,"b","b",-1172211299,null),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"d","d",-682293345,null)),q)),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"d","d",-682293345,null))))){
} else {
throw (new Error("Assert failed: (= (run 1 [q] (rembero (quote b) (quote (a b c b d)) q)) (quote ((a c b d))))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["conde clause count"], 0));
demo.rm_hull_6859633.core.digit_1 = (function demo$rm_hull_6859633$core$digit_1(x){
return (function (a26248){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a26248,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,(0),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
})));
});
});
demo.rm_hull_6859633.core.digit_4 = (function demo$rm_hull_6859633$core$digit_4(x){
return (function (a26249){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(a26249,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,(0),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(a26249,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,(1),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(a26249,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,(2),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a26249,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,(3),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
}))));
}))));
}))));
})));
});
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20116__auto____$1){
return (new cljs.core.logic.Inc((function (){
var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
return cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto____$1,demo.rm_hull_6859633.core.digit_1(x)),demo.rm_hull_6859633.core.digit_1(y)),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,q,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
})));
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)))){
} else {
throw (new Error("Assert failed: (= (run* [q] (fresh [x y] (digit-1 x) (digit-1 y) (m/== q [x y]))) (quote ([0 0])))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20116__auto____$1){
return (new cljs.core.logic.Inc((function (){
var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
return cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto____$1,demo.rm_hull_6859633.core.digit_4(x)),demo.rm_hull_6859633.core.digit_4(y)),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,q,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
})));
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null)))){
} else {
throw (new Error("Assert failed: (= (run* [q] (fresh [x y] (digit-4 x) (digit-4 y) (m/== q [x y]))) (quote ([0 0] [0 1] [0 2] [1 0] [0 3] [1 1] [1 2] [2 0] [1 3] [2 1] [3 0] [2 2] [3 1] [2 3] [3 2] [3 3])))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["anyo"], 0));
demo.rm_hull_6859633.core.anyo = (function demo$rm_hull_6859633$core$anyo(q){
return (function (a26250){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(cljs.core.logic._bind(a26250,q),cljs.core.logic.s_SHARP_),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a26250,(demo.rm_hull_6859633.core.anyo.cljs$core$IFn$_invoke$arity$1 ? demo.rm_hull_6859633.core.anyo.cljs$core$IFn$_invoke$arity$1(q) : demo.rm_hull_6859633.core.anyo.call(null,q)));
}))));
})));
});
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),(1),new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,demo.rm_hull_6859633.core.anyo(cljs.core.logic.s_SHARP_)),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,true,q);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),(new cljs.core.List(null,true,null,(1),null)))){
} else {
throw (new Error("Assert failed: (= (run 1 [q] (anyo s#) (m/== true q)) (list true))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),(5),new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,demo.rm_hull_6859633.core.anyo(cljs.core.logic.s_SHARP_)),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,true,q);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),(new cljs.core.List(null,true,(new cljs.core.List(null,true,(new cljs.core.List(null,true,(new cljs.core.List(null,true,(new cljs.core.List(null,true,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)))){
} else {
throw (new Error("Assert failed: (= (run 5 [q] (anyo s#) (m/== true q)) (list true true true true true))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["divergence"], 0));
demo.rm_hull_6859633.core.f1 = (function demo$rm_hull_6859633$core$f1(a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a__20116__auto__,demo.rm_hull_6859633.core.f1);
})));
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),(1),new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a26251){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(a26251,demo.rm_hull_6859633.core.f1),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a26251,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,false,false);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
}))));
})));
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list(new cljs.core.Symbol(null,"_.0","_.0",1821215658,null)))){
} else {
throw (new Error("Assert failed: (= (run 1 [q] (conde [f1] [(m/== false false)])) (quote (_.0)))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),(1),new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a26252){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(cljs.core.logic._bind(a26252,demo.rm_hull_6859633.core.f1),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,false,false);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a26252,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,false,false);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
}))));
})));
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list(new cljs.core.Symbol(null,"_.0","_.0",1821215658,null)))){
} else {
throw (new Error("Assert failed: (= (run 1 [q] (conde [f1 (m/== false false)] [(m/== false false)])) (quote (_.0)))"));
}
demo.rm_hull_6859633.core.f2 = (function demo$rm_hull_6859633$core$f2(a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a__20116__auto__,(function (a26253){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(cljs.core.logic._bind(a26253,demo.rm_hull_6859633.core.f2),(function (a26254){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(a26254,demo.rm_hull_6859633.core.f2),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a26254,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,false,false);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
}))));
})));
})),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a26253,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,false,false);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
}))));
})));
}));
})));
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),(5),new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,demo.rm_hull_6859633.core.f2),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list(new cljs.core.Symbol(null,"_.0","_.0",1821215658,null),new cljs.core.Symbol(null,"_.0","_.0",1821215658,null),new cljs.core.Symbol(null,"_.0","_.0",1821215658,null),new cljs.core.Symbol(null,"_.0","_.0",1821215658,null),new cljs.core.Symbol(null,"_.0","_.0",1821215658,null)))){
} else {
throw (new Error("Assert failed: (= (run 5 [q] f2) (quote (_.0 _.0 _.0 _.0 _.0)))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["conda"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a26255){
return cljs.core.logic._ifa((function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"olive","olive",-440010939,null),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})(a26255),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.s_SHARP_], null),(new cljs.core.Delay((function (){
return cljs.core.logic._ifa((function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"oil","oil",-875291055,null),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})(a26255),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.s_SHARP_], null),(new cljs.core.Delay((function (){
return cljs.core.logic._ifa((cljs.core.logic.u_SHARP_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.u_SHARP_.cljs$core$IFn$_invoke$arity$1(a26255) : cljs.core.logic.u_SHARP_.call(null,a26255)),cljs.core.PersistentVector.EMPTY,null);
}),null)));
}),null)));
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,x);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list(new cljs.core.Symbol(null,"olive","olive",-440010939,null)))){
} else {
throw (new Error("Assert failed: (= (run* [x] (conda [(m/== (quote olive) x) s#] [(m/== (quote oil) x) s#] [u#])) (quote (olive)))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a26256){
return cljs.core.logic._ifa((function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"virgin","virgin",1304764714,null),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})(a26256),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.u_SHARP_], null),(new cljs.core.Delay((function (){
return cljs.core.logic._ifa((function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"olive","olive",-440010939,null),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})(a26256),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.s_SHARP_], null),(new cljs.core.Delay((function (){
return cljs.core.logic._ifa((function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"oil","oil",-875291055,null),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})(a26256),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.s_SHARP_], null),(new cljs.core.Delay((function (){
return cljs.core.logic._ifa((cljs.core.logic.u_SHARP_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.u_SHARP_.cljs$core$IFn$_invoke$arity$1(a26256) : cljs.core.logic.u_SHARP_.call(null,a26256)),cljs.core.PersistentVector.EMPTY,null);
}),null)));
}),null)));
}),null)));
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,x);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.List.EMPTY)){
} else {
throw (new Error("Assert failed: (= (run* [x] (conda [(m/== (quote virgin) x) u#] [(m/== (quote olive) x) s#] [(m/== (quote oil) x) s#] [u#])) (quote ()))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
return cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20116__auto____$1){
return (new cljs.core.logic.Inc((function (){
var x__$1 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
return cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto____$1,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"split","split",1041096409,null),x__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"pea","pea",344213330,null),y);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a26257){
return cljs.core.logic._ifa((function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"split","split",1041096409,null),x__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})(a26257),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,x__$1,y);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})], null),(new cljs.core.Delay((function (){
return cljs.core.logic._ifa((cljs.core.logic.s_SHARP_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.s_SHARP_.cljs$core$IFn$_invoke$arity$1(a26257) : cljs.core.logic.s_SHARP_.call(null,a26257)),cljs.core.PersistentVector.EMPTY,null);
}),null)));
}));
})));
})),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,true,x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,x);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.List.EMPTY)){
} else {
throw (new Error("Assert failed: (= (run* [x] (fresh (x y) (m/== (quote split) x) (m/== (quote pea) y) (conda [(m/== (quote split) x) (m/== x y)] [s#])) (m/== true x)) (quote ()))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
return cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20116__auto____$1){
return (new cljs.core.logic.Inc((function (){
var x__$1 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
return cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto____$1,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"split","split",1041096409,null),x__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"pea","pea",344213330,null),y);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a26258){
return cljs.core.logic._ifa((function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,x__$1,y);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})(a26258),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"split","split",1041096409,null),x__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})], null),(new cljs.core.Delay((function (){
return cljs.core.logic._ifa((cljs.core.logic.s_SHARP_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.s_SHARP_.cljs$core$IFn$_invoke$arity$1(a26258) : cljs.core.logic.s_SHARP_.call(null,a26258)),cljs.core.PersistentVector.EMPTY,null);
}),null)));
}));
})));
})),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,true,x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,x);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list(true))){
} else {
throw (new Error("Assert failed: (= (run* [x] (fresh (x y) (m/== (quote split) x) (m/== (quote pea) y) (conda [(m/== x y) (m/== (quote split) x)] [s#])) (m/== true x)) (quote (true)))"));
}
demo.rm_hull_6859633.core.not_pastao = (function demo$rm_hull_6859633$core$not_pastao(x){
return (function (a26259){
return cljs.core.logic._ifa((function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"pasta","pasta",-767399231,null),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})(a26259),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.u_SHARP_], null),(new cljs.core.Delay((function (){
return cljs.core.logic._ifa((cljs.core.logic.s_SHARP_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.s_SHARP_.cljs$core$IFn$_invoke$arity$1(a26259) : cljs.core.logic.s_SHARP_.call(null,a26259)),cljs.core.PersistentVector.EMPTY,null);
}),null)));
});
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a26260){
return cljs.core.logic._ifa(demo.rm_hull_6859633.core.not_pastao(x)(a26260),cljs.core.PersistentVector.EMPTY,(new cljs.core.Delay((function (){
return cljs.core.logic._ifa((function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"spaghetti","spaghetti",-2046524464,null),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})(a26260),cljs.core.PersistentVector.EMPTY,null);
}),null)));
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,x);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list(new cljs.core.Symbol(null,"spaghetti","spaghetti",-2046524464,null)))){
} else {
throw (new Error("Assert failed: (= (run* [x] (conda [(not-pastao x)] [(m/== (quote spaghetti) x)])) (quote (spaghetti)))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["condu"], 0));
demo.rm_hull_6859633.core.onceo = (function demo$rm_hull_6859633$core$onceo(g){
return (function (a26261){
return cljs.core.logic._ifu((g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a26261) : g.call(null,a26261)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.s_SHARP_], null),null);
});
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,demo.rm_hull_6859633.core.onceo(demo.rm_hull_6859633.core.teacupo(x))),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,x);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list(new cljs.core.Symbol(null,"tea","tea",927684288,null)))){
} else {
throw (new Error("Assert failed: (= (run* [x] (onceo (teacupo x))) (quote (tea)))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var r = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"r","r",1169147337,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a26262){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(cljs.core.logic._bind(a26262,demo.rm_hull_6859633.core.teacupo(r)),cljs.core.logic.s_SHARP_),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(cljs.core.logic._bind(a26262,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,false,r);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),cljs.core.logic.s_SHARP_);
}))));
})));
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,r);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list(false,new cljs.core.Symbol(null,"tea","tea",927684288,null),new cljs.core.Symbol(null,"cup","cup",-1010002779,null)))){
} else {
throw (new Error("Assert failed: (= (run* [r] (conde [(teacupo r) s#] [(m/== false r) s#])) (quote (false tea cup)))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var r = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"r","r",1169147337,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a26263){
return cljs.core.logic._ifa(demo.rm_hull_6859633.core.teacupo(r)(a26263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.s_SHARP_], null),(new cljs.core.Delay((function (){
return cljs.core.logic._ifa((function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,false,r);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})(a26263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.s_SHARP_], null),null);
}),null)));
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,r);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list(new cljs.core.Symbol(null,"tea","tea",927684288,null),new cljs.core.Symbol(null,"cup","cup",-1010002779,null)))){
} else {
throw (new Error("Assert failed: (= (run* [r] (conda [(teacupo r) s#] [(m/== false r) s#])) (quote (tea cup)))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["nil in collection"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))){
} else {
throw (new Error("Assert failed: (= (run* [q] (m/== q [nil])) (quote ([nil])))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,q,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),null], null));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),null], null)))){
} else {
throw (new Error("Assert failed: (= (run* [q] (m/== q [1 nil])) (quote ([1 nil])))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,q,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(1)], null));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(1)], null)))){
} else {
throw (new Error("Assert failed: (= (run* [q] (m/== q [nil 1])) (quote ([nil 1])))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,q,cljs.core.list(null));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list(cljs.core.list(null)))){
} else {
throw (new Error("Assert failed: (= (run* [q] (m/== q (quote (nil)))) (quote ((nil))))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,q,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),null], null));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),null], null)))){
} else {
throw (new Error("Assert failed: (= (run* [q] (m/== q {:foo nil})) (quote ({:foo nil})))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,q,new cljs.core.PersistentArrayMap(null, 1, [null,new cljs.core.Keyword(null,"foo","foo",1268894036)], null));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list(new cljs.core.PersistentArrayMap(null, 1, [null,new cljs.core.Keyword(null,"foo","foo",1268894036)], null)))){
} else {
throw (new Error("Assert failed: (= (run* [q] (m/== q {nil :foo})) (quote ({nil :foo})))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["simple unifier"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.unifier.cljs$core$IFn$_invoke$arity$2(cljs.core.list(new cljs.core.Symbol(null,"?x","?x",-555096650,null),new cljs.core.Symbol(null,"?y","?y",-1454470631,null)),cljs.core.list((1),(2))),cljs.core.list((1),(2)))){
} else {
throw (new Error("Assert failed: (= (unifier (quote (?x ?y)) (quote (1 2))) (quote (1 2)))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.unifier.cljs$core$IFn$_invoke$arity$2(cljs.core.list(new cljs.core.Symbol(null,"?x","?x",-555096650,null),new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(3)),cljs.core.list((1),(2),new cljs.core.Symbol(null,"?z","?z",711595547,null))),cljs.core.list((1),(2),(3)))){
} else {
throw (new Error("Assert failed: (= (unifier (quote (?x ?y 3)) (quote (1 2 ?z))) (quote (1 2 3)))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.unifier.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?x","?x",-555096650,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"?y","?y",-1454470631,null)),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),(3)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list((1),(2)),(3)], null))){
} else {
throw (new Error("Assert failed: (= (unifier (quote [(?x . ?y) 3]) [[1 2] 3]) (quote [(1 2) 3]))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.unifier.cljs$core$IFn$_invoke$arity$2(cljs.core.list(new cljs.core.Symbol(null,"?x","?x",-555096650,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"?y","?y",-1454470631,null)),cljs.core.list((1),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"?z","?z",711595547,null))),cljs.core.logic.lcons((1),new cljs.core.Symbol(null,"_.0","_.0",1821215658,null)))){
} else {
throw (new Error("Assert failed: (= (unifier (quote (?x . ?y)) (quote (1 . ?z))) (lcons 1 (quote _.0)))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.unifier.cljs$core$IFn$_invoke$arity$2(cljs.core.list(new cljs.core.Symbol(null,"?x","?x",-555096650,null),(2),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"?y","?y",-1454470631,null)),cljs.core.list((1),(2),(3),(4),(5))),cljs.core.list((1),(2),(3),(4),(5)))){
} else {
throw (new Error("Assert failed: (= (unifier (quote (?x 2 . ?y)) (quote (1 2 3 4 5))) (quote (1 2 3 4 5)))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.unifier.cljs$core$IFn$_invoke$arity$2(cljs.core.list(new cljs.core.Symbol(null,"?x","?x",-555096650,null),(2),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"?y","?y",-1454470631,null)),cljs.core.list((1),(9),(3),(4),(5))),null)){
} else {
throw (new Error("Assert failed: (= (unifier (quote (?x 2 . ?y)) (quote (1 9 3 4 5))) nil)"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.binding_map.cljs$core$IFn$_invoke$arity$2(cljs.core.list(new cljs.core.Symbol(null,"?x","?x",-555096650,null),new cljs.core.Symbol(null,"?y","?y",-1454470631,null)),cljs.core.list((1),(2))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"?x","?x",-555096650,null),(1),new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(2)], null))){
} else {
throw (new Error("Assert failed: (= (binding-map (quote (?x ?y)) (quote (1 2))) (quote {?x 1, ?y 2}))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.binding_map.cljs$core$IFn$_invoke$arity$2(cljs.core.list(new cljs.core.Symbol(null,"?x","?x",-555096650,null),new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(3)),cljs.core.list((1),(2),new cljs.core.Symbol(null,"?z","?z",711595547,null))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"?x","?x",-555096650,null),(1),new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(2),new cljs.core.Symbol(null,"?z","?z",711595547,null),(3)], null))){
} else {
throw (new Error("Assert failed: (= (binding-map (quote (?x ?y 3)) (quote (1 2 ?z))) (quote {?x 1, ?y 2, ?z 3}))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.binding_map.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?x","?x",-555096650,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"?y","?y",-1454470631,null)),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),(3)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"?x","?x",-555096650,null),(1),new cljs.core.Symbol(null,"?y","?y",-1454470631,null),cljs.core.list((2))], null))){
} else {
throw (new Error("Assert failed: (= (binding-map (quote [(?x . ?y) 3]) [[1 2] 3]) (quote {?x 1, ?y (2)}))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.binding_map.cljs$core$IFn$_invoke$arity$2(cljs.core.list(new cljs.core.Symbol(null,"?x","?x",-555096650,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"?y","?y",-1454470631,null)),cljs.core.list((1),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"?z","?z",711595547,null))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"?z","?z",711595547,null),new cljs.core.Symbol(null,"_.0","_.0",1821215658,null),new cljs.core.Symbol(null,"?x","?x",-555096650,null),(1),new cljs.core.Symbol(null,"?y","?y",-1454470631,null),new cljs.core.Symbol(null,"_.0","_.0",1821215658,null)], null))){
} else {
throw (new Error("Assert failed: (= (binding-map (quote (?x . ?y)) (quote (1 . ?z))) (quote {?z _.0, ?x 1, ?y _.0}))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.binding_map.cljs$core$IFn$_invoke$arity$2(cljs.core.list(new cljs.core.Symbol(null,"?x","?x",-555096650,null),(2),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"?y","?y",-1454470631,null)),cljs.core.list((1),(2),(3),(4),(5))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"?x","?x",-555096650,null),(1),new cljs.core.Symbol(null,"?y","?y",-1454470631,null),cljs.core.list((3),(4),(5))], null))){
} else {
throw (new Error("Assert failed: (= (binding-map (quote (?x 2 . ?y)) (quote (1 2 3 4 5))) (quote {?x 1, ?y (3 4 5)}))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.binding_map.cljs$core$IFn$_invoke$arity$2(cljs.core.list(new cljs.core.Symbol(null,"?x","?x",-555096650,null),(2),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"?y","?y",-1454470631,null)),cljs.core.list((1),(9),(3),(4),(5))),null)){
} else {
throw (new Error("Assert failed: (= (binding-map (quote (?x 2 . ?y)) (quote (1 9 3 4 5))) nil)"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["occurs check"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [q], null));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.List.EMPTY)){
} else {
throw (new Error("Assert failed: (= (run* [q] (m/== q [q])) ())"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["unifications that sould fail"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var p = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"p","p",1791580836,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20116__auto____$1){
return (new cljs.core.logic.Inc((function (){
var a = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"a","a",-482876059,null));
var b = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"b","b",-1172211299,null));
return cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto____$1,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,b,cljs.core.List.EMPTY);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,cljs.core.list((0),(1)),cljs.core.logic.lcons(a,b));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
})));
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,p);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.List.EMPTY)){
} else {
throw (new Error("Assert failed: (= (run* [p] (fresh [a b] (m/== b ()) (m/== (quote (0 1)) (lcons a b)) (m/== p [a b]))) ())"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var p = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"p","p",1791580836,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20116__auto____$1){
return (new cljs.core.logic.Inc((function (){
var a = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"a","a",-482876059,null));
var b = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"b","b",-1172211299,null));
return cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto____$1,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,b,cljs.core.list((1)));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,cljs.core.list((0)),cljs.core.logic.lcons(a,b));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
})));
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,p);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.List.EMPTY)){
} else {
throw (new Error("Assert failed: (= (run* [p] (fresh [a b] (m/== b (quote (1))) (m/== (quote (0)) (lcons a b)) (m/== p [a b]))) ())"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var p = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"p","p",1791580836,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20116__auto____$1){
return (new cljs.core.logic.Inc((function (){
var a = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"a","a",-482876059,null));
var b = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"b","b",-1172211299,null));
var c = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"c","c",-122660552,null));
var d = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"d","d",-682293345,null));
return cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto____$1,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,cljs.core.List.EMPTY,b);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,cljs.core.list((1)),d);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,cljs.core.logic.lcons(a,b),cljs.core.logic.lcons(c,d));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,p,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
})));
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,p);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.List.EMPTY)){
} else {
throw (new Error("Assert failed: (= (run* [p] (fresh [a b c d] (m/== () b) (m/== (quote (1)) d) (m/== (lcons a b) (lcons c d)) (m/== p [a b c d]))) ())"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["pattern matching"], 0));
demo.rm_hull_6859633.core.match_map = (function demo$rm_hull_6859633$core$match_map(m,o){
return (function (a26264){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a26264,(function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a__20116__auto__,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bar","bar",-1386246584),o], null)], null),m);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
})));
}));
})));
});
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,demo.rm_hull_6859633.core.match_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bar","bar",-1386246584),(1)], null)], null),q)),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list((1)))){
} else {
throw (new Error("Assert failed: (= (run* [q] (match-map {:foo {:bar 1}} q)) (quote (1)))"));
}
demo.rm_hull_6859633.core.match_set = (function demo$rm_hull_6859633$core$match_set(s,o){
return (function (a26265){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a26265,(function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a__20116__auto__,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cat","cat",-1457810207),null,new cljs.core.Keyword(null,"bird","bird",-1252014845),null,new cljs.core.Keyword(null,"dog","dog",-1650861974),null], null), null),s);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
})));
}));
})));
});
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,demo.rm_hull_6859633.core.match_set(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cat","cat",-1457810207),null,new cljs.core.Keyword(null,"bird","bird",-1252014845),null,new cljs.core.Keyword(null,"dog","dog",-1650861974),null], null), null),q)),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list(new cljs.core.Symbol(null,"_.0","_.0",1821215658,null)))){
} else {
throw (new Error("Assert failed: (= (run* [q] (match-set #{:cat :bird :dog} q)) (quote (_.0)))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["partial maps"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.list(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)),(function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20116__auto____$1){
return (new cljs.core.logic.Inc((function (){
var pm = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"pm","pm",-840698341,null));
var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
return cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto____$1,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,pm,cljs.core.logic.partial_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),x], null)));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,pm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,pm,q);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
})));
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (= (quote ({:a 1})) (run* [q] (fresh [pm x] (== pm (partial-map {:a x})) (== pm {:a 1, :b 2}) (== pm q))))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.list((1)),(function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20116__auto____$1){
return (new cljs.core.logic.Inc((function (){
var pm = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"pm","pm",-840698341,null));
var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
return cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto____$1,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,pm,cljs.core.logic.partial_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),x], null)));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,pm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,x,q);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
})));
})),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (= (quote (1)) (run* [q] (fresh [pm x] (== pm (partial-map {:a x})) (== pm {:a 1, :b 2}) (== x q))))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zebrao"], 0));
demo.rm_hull_6859633.core.righto = (function demo$rm_hull_6859633$core$righto(x,y,l){
return (function (a26266){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(a26266,(function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var r = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"r","r",1169147337,null));
return cljs.core.logic._bind(a__20116__auto__,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,cljs.core.logic.lcons(x,cljs.core.logic.lcons(y,r)),l);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
})));
})),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a26266,(function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var r = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"r","r",1169147337,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,cljs.core.logic.lcons(cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),r),l);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(demo.rm_hull_6859633.core.righto.cljs$core$IFn$_invoke$arity$3 ? demo.rm_hull_6859633.core.righto.cljs$core$IFn$_invoke$arity$3(x,y,r) : demo.rm_hull_6859633.core.righto.call(null,x,y,r)));
})));
}));
}))));
})));
});
});
demo.rm_hull_6859633.core.nexto = (function demo$rm_hull_6859633$core$nexto(x,y,l){
return (function (a26267){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(a26267,demo.rm_hull_6859633.core.righto(x,y,l)),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a26267,demo.rm_hull_6859633.core.righto(y,x,l));
}))));
})));
});
});
demo.rm_hull_6859633.core.zebrao = (function demo$rm_hull_6859633$core$zebrao(hs){
return (function (a__20177__auto__){
return cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a__20177__auto__,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,new cljs.core.Symbol(null,"milk","milk",-611628057,null),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),hs);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),cljs.core.logic.firsto(hs,(new cljs.core.List(null,new cljs.core.Symbol(null,"norwegian","norwegian",1157973002,null),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)))),demo.rm_hull_6859633.core.nexto((new cljs.core.List(null,new cljs.core.Symbol(null,"norwegian","norwegian",1157973002,null),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,new cljs.core.Symbol(null,"blue","blue",1018430907,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),hs)),demo.rm_hull_6859633.core.righto((new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,new cljs.core.Symbol(null,"ivory","ivory",381349076,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,new cljs.core.Symbol(null,"green","green",695004688,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),hs)),cljs.core.logic.membero((new cljs.core.List(null,new cljs.core.Symbol(null,"englishman","englishman",576263856,null),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,new cljs.core.Symbol(null,"red","red",671103323,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),hs)),cljs.core.logic.membero((new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,new cljs.core.Symbol(null,"kools","kools",712960647,null),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,new cljs.core.Symbol(null,"yellow","yellow",759496078,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),hs)),cljs.core.logic.membero((new cljs.core.List(null,new cljs.core.Symbol(null,"spaniard","spaniard",-193934504,null),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,new cljs.core.Symbol(null,"dog","dog",-10330447,null),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),hs)),cljs.core.logic.membero((new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,new cljs.core.Symbol(null,"coffee","coffee",1664304398,null),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,new cljs.core.Symbol(null,"green","green",695004688,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),hs)),cljs.core.logic.membero((new cljs.core.List(null,new cljs.core.Symbol(null,"ukrainian","ukrainian",1829351699,null),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,new cljs.core.Symbol(null,"tea","tea",927684288,null),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),hs)),cljs.core.logic.membero((new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,new cljs.core.Symbol(null,"lucky-strikes","lucky-strikes",2043651145,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"oj","oj",2138916401,null),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),hs)),cljs.core.logic.membero((new cljs.core.List(null,new cljs.core.Symbol(null,"japanese","japanese",1308638121,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"parliaments","parliaments",-283920026,null),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),hs)),cljs.core.logic.membero((new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,new cljs.core.Symbol(null,"oldgolds","oldgolds",1944716654,null),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,new cljs.core.Symbol(null,"snails","snails",879962705,null),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),hs)),demo.rm_hull_6859633.core.nexto((new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,new cljs.core.Symbol(null,"horse","horse",-836667359,null),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,new cljs.core.Symbol(null,"kools","kools",712960647,null),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),hs)),demo.rm_hull_6859633.core.nexto((new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,new cljs.core.Symbol(null,"fox","fox",1168578410,null),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,new cljs.core.Symbol(null,"chesterfields","chesterfields",521945882,null),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),(new cljs.core.List(null,cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),hs));
});
});
demo.rm_hull_6859633.core.run_zebra = (function demo$rm_hull_6859633$core$run_zebra(){
var _STAR_occurs_check_STAR__orig_val__26268 = demo.rm_hull_6859633.core._STAR_occurs_check_STAR_;
var _STAR_occurs_check_STAR__temp_val__26269 = false;
(demo.rm_hull_6859633.core._STAR_occurs_check_STAR_ = _STAR_occurs_check_STAR__temp_val__26269);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),(1),new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,demo.rm_hull_6859633.core.zebrao(q)),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})());
}finally {(demo.rm_hull_6859633.core._STAR_occurs_check_STAR_ = _STAR_occurs_check_STAR__orig_val__26268);
}});
goog.exportSymbol('demo.rm_hull_6859633.core.run_zebra', demo.rm_hull_6859633.core.run_zebra);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),(1),new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,demo.rm_hull_6859633.core.zebrao(q)),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})()], 0))], 0));
var _STAR_occurs_check_STAR__orig_val__26270_26393 = demo.rm_hull_6859633.core._STAR_occurs_check_STAR_;
var _STAR_occurs_check_STAR__temp_val__26271_26394 = false;
(demo.rm_hull_6859633.core._STAR_occurs_check_STAR_ = _STAR_occurs_check_STAR__temp_val__26271_26394);

try{var start__5775__auto___26395 = cljs.core.system_time();
var ret__5776__auto___26396 = (function (){var n__5762__auto__ = (1000);
var _ = (0);
while(true){
if((_ < n__5762__auto__)){
var opts__20128__auto___26397 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),(1),new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto___26398 = (new cljs.core.logic.Inc(((function (_,opts__20128__auto___26397,n__5762__auto__,start__5775__auto___26395,_STAR_occurs_check_STAR__orig_val__26270_26393,_STAR_occurs_check_STAR__temp_val__26271_26394){
return (function (){
return ((function (_,opts__20128__auto___26397,n__5762__auto__,start__5775__auto___26395,_STAR_occurs_check_STAR__orig_val__26270_26393,_STAR_occurs_check_STAR__temp_val__26271_26394){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc(((function (_,opts__20128__auto___26397,n__5762__auto__,start__5775__auto___26395,_STAR_occurs_check_STAR__orig_val__26270_26393,_STAR_occurs_check_STAR__temp_val__26271_26394){
return (function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,demo.rm_hull_6859633.core.zebrao(q)),((function (_,q,opts__20128__auto___26397,n__5762__auto__,start__5775__auto___26395,_STAR_occurs_check_STAR__orig_val__26270_26393,_STAR_occurs_check_STAR__temp_val__26271_26394){
return (function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
});})(_,q,opts__20128__auto___26397,n__5762__auto__,start__5775__auto___26395,_STAR_occurs_check_STAR__orig_val__26270_26393,_STAR_occurs_check_STAR__temp_val__26271_26394))
);
});})(_,opts__20128__auto___26397,n__5762__auto__,start__5775__auto___26395,_STAR_occurs_check_STAR__orig_val__26270_26393,_STAR_occurs_check_STAR__temp_val__26271_26394))
));
});})(_,opts__20128__auto___26397,n__5762__auto__,start__5775__auto___26395,_STAR_occurs_check_STAR__orig_val__26270_26393,_STAR_occurs_check_STAR__temp_val__26271_26394))
(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto___26397], 0))));
});})(_,opts__20128__auto___26397,n__5762__auto__,start__5775__auto___26395,_STAR_occurs_check_STAR__orig_val__26270_26393,_STAR_occurs_check_STAR__temp_val__26271_26394))
)).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto___26399 = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto___26397);
if(cljs.core.truth_(temp__5823__auto___26399)){
var n__20131__auto___26400 = temp__5823__auto___26399;
cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto___26400,xs__20129__auto___26398);
} else {
}

var G__26401 = (_ + (1));
_ = G__26401;
continue;
} else {
return null;
}
break;
}
})();
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"Elapsed time: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.system_time() - start__5775__auto___26395).toFixed((6)))+" msecs")], 0));

}finally {(demo.rm_hull_6859633.core._STAR_occurs_check_STAR_ = _STAR_occurs_check_STAR__orig_val__26270_26393);
}cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),(10),new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,demo.rm_hull_6859633.core.nexto(new cljs.core.Symbol(null,"dog","dog",-10330447,null),new cljs.core.Symbol(null,"cat","cat",182721320,null),q)),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})()], 0))], 0));
demo.rm_hull_6859633.core.map_geto = (function demo$rm_hull_6859633$core$map_geto(m,k,v){
return (function (a26272){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(a26272,(function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var _ = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"_","_",-1201019570,null));
return cljs.core.logic._bind(a__20116__auto__,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,cljs.core.logic.lcons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0()),m);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
}));
})));
})),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a26272,(function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var _ = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"_","_",-1201019570,null));
var tail = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tail","tail",494507963,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,cljs.core.logic.lcons(cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0(),tail),m);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(demo.rm_hull_6859633.core.map_geto.cljs$core$IFn$_invoke$arity$3 ? demo.rm_hull_6859633.core.map_geto.cljs$core$IFn$_invoke$arity$3(tail,k,v) : demo.rm_hull_6859633.core.map_geto.call(null,tail,k,v)));
})));
}));
}))));
})));
});
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20128__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20129__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,demo.rm_hull_6859633.core.map_geto(cljs.core.seq(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Blub"], null)),new cljs.core.Keyword(null,"title","title",636505583),q)),(function (a__20130__auto__){
return cljs.core.logic._reify(a__20130__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20128__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20128__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20131__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20131__auto__,xs__20129__auto__);
} else {
return xs__20129__auto__;
}
})(),cljs.core.list("Blub"))){
} else {
throw (new Error("Assert failed: (= (run* [q] (map-geto (seq {:title \"Blub\"}) :title q)) (quote (\"Blub\")))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ok"], 0));
demo.rm_hull_6859633.core._STAR_occurs_check_STAR_ = true;

//# sourceMappingURL=demo.rm_hull_6859633.core.js.map
