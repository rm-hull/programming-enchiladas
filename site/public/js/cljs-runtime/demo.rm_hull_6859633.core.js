goog.provide('demo.rm_hull_6859633.core');
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["unify with nil"], 0));
var x_25992 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.pair(x_25992,null),cljs.core.logic.pair(x_25992,null))){
} else {
throw (new Error("Assert failed: (= (pair x nil) (pair x nil))"));
}
var x_25993 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.pair(x_25993,null),cljs.core.logic.pair(null,x_25993)) === false){
} else {
throw (new Error("Assert failed: (false? (= (pair x nil) (pair nil x)))"));
}
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,null,(1)))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s nil 1))"));
}
var x_25994 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var a_25995 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_25994,null);
var b_25996 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,null,x_25994);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a_25995,b_25996)){
} else {
throw (new Error("Assert failed: (= a b)"));
}
var x_25997 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,null,cljs.core.logic.lcons((1),x_25997)))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s nil (lcons 1 x)))"));
}
var x_25998 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,null,cljs.core.PersistentArrayMap.EMPTY))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s nil {}))"));
}
var x_25999 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
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
var x_26000 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26001 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26000,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,(1),x_26000),os_26001)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s 1 x) os)"));
}
var x_26002 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
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
var x_26003 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26004 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26003,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,x_26003,(1)),os_26004)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s x 1) os)"));
}
var x_26005 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y_26006 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
var os_26007 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26005,y_26006);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,x_26005,y_26006),os_26007)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s x y) os)"));
}
var x_26008 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y_26009 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
var l_26010 = cljs.core.logic.lcons((1),y_26009);
var os_26011 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26008,l_26010);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,x_26008,l_26010),os_26011)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s x l) os)"));
}
var x_26012 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26013 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26012,cljs.core.PersistentVector.EMPTY);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,x_26012,cljs.core.PersistentVector.EMPTY),os_26013)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s x []) os)"));
}
var x_26014 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26015 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26014,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,x_26014,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),os_26015)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s x [1 2 3]) os)"));
}
var x_26016 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26017 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26016,cljs.core.List.EMPTY);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,x_26016,cljs.core.List.EMPTY),os_26017)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s x (quote ())) os)"));
}
var x_26018 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26019 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26018,cljs.core.list((1),(2),(3)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,x_26018,cljs.core.list((1),(2),(3))),os_26019)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s x (quote (1 2 3))) os)"));
}
var x_26020 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26021 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26020,cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,x_26020,cljs.core.PersistentArrayMap.EMPTY),os_26021)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s x {}) os)"));
}
var x_26022 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26023 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26022,new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(3),(4)], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,x_26022,new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(3),(4)], null)),os_26023)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s x {1 2, 3 4}) os)"));
}
var x_26024 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26025 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26024,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,x_26024,cljs.core.PersistentHashSet.EMPTY),os_26025)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s x #{}) os)"));
}
var x_26026 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26027 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26026,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,x_26026,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null)),os_26027)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s x #{1 3 2}) os)"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["unify with lcons"], 0));
var x_26028 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.logic.lcons((1),x_26028),(1)))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s (lcons 1 x) 1))"));
}
var x_26029 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y_26030 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
var l_26031 = cljs.core.logic.lcons((1),y_26030);
var os_26032 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26029,l_26031);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,l_26031,x_26029),os_26032)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s l x) os)"));
}
var x_26033 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y_26034 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
var lc1_26035 = cljs.core.logic.lcons((1),x_26033);
var lc2_26036 = cljs.core.logic.lcons((1),y_26034);
var os_26037 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26033,y_26034);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,lc1_26035,lc2_26036),os_26037)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s lc1 lc2) os)"));
}
var x_26038 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y_26039 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
var z_26040 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"z","z",851004344,null));
var lc1_26041 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((2),x_26038));
var lc2_26042 = cljs.core.logic.lcons((1),cljs.core.logic.lcons(z_26040,y_26039));
var os_26043 = cljs.core.logic._ext_no_check(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,z_26040,(2)),x_26038,y_26039);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,lc1_26041,lc2_26042),os_26043)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s lc1 lc2) os)"));
}
var x_26044 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y_26045 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
var lc1_26046 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((2),x_26044));
var lc2_26047 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((2),cljs.core.logic.lcons((3),y_26045)));
var os_26048 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26044,cljs.core.logic.lcons((3),y_26045));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,lc1_26046,lc2_26047),os_26048)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s lc1 lc2) os)"));
}
var x_26049 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y_26050 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
var lc1_26051 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((2),x_26049));
var lc2_26052 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((3),cljs.core.logic.lcons((4),y_26050)));
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,lc1_26051,lc2_26052))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s lc1 lc2))"));
}
var x_26053 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y_26054 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
var lc2_26055 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((2),x_26053));
var lc1_26056 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((3),cljs.core.logic.lcons((4),y_26054)));
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,lc1_26056,lc2_26055))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s lc1 lc2))"));
}
var x_26057 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y_26058 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
var lc1_26059 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((2),x_26057));
var lc2_26060 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((2),y_26058));
var os_26061 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26057,y_26058);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,lc1_26059,lc2_26060),os_26061)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s lc1 lc2) os)"));
}
var x_26062 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var lc1_26063 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((2),x_26062));
var l1_26064 = cljs.core.list((1),(2),(3),(4));
var os_26065 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26062,cljs.core.list((3),(4)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,lc1_26063,l1_26064),os_26065)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s lc1 l1) os)"));
}
var x_26066 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y_26067 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
var lc1_26068 = cljs.core.logic.lcons((1),cljs.core.logic.lcons(y_26067,cljs.core.logic.lcons((3),x_26066)));
var l1_26069 = cljs.core.list((1),(2),(3),(4));
var os_26070 = cljs.core.logic._ext_no_check(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,y_26067,(2)),x_26066,cljs.core.list((4)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,lc1_26068,l1_26069),os_26070)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s lc1 l1) os)"));
}
var x_26071 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var lc1_26072 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((2),cljs.core.logic.lcons((3),x_26071)));
var l1_26073 = cljs.core.list((1),(2),(3));
var os_26074 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26071,cljs.core.List.EMPTY);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,lc1_26072,l1_26073),os_26074)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s lc1 l1) os)"));
}
var x_26075 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var lc1_26076 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((3),x_26075));
var l1_26077 = cljs.core.list((1),(2),(3),(4));
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,lc1_26076,l1_26077))){
} else {
throw (new Error("Assert failed: (failed? (-unify empty-s lc1 l1))"));
}
var x_26078 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var lc1_26079 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((2),x_26078));
var l1_26080 = cljs.core.list((1),(3),(4),(5));
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,lc1_26079,l1_26080))){
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
var x_26081 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26082 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26081,cljs.core.PersistentVector.EMPTY);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.PersistentVector.EMPTY,x_26081),os_26082)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s [] x) os)"));
}
var x_26083 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26084 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26083,cljs.core.PersistentVector.EMPTY);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.PersistentVector.EMPTY,x_26083),os_26084)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s [] x) os)"));
}
var x_26085 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var lc1_26086 = cljs.core.logic.lcons((1),cljs.core.logic.lcons((2),x_26085));
var l1_26087 = cljs.core.list((1),(2),(3),(4));
var os_26088 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26085,cljs.core.list((3),(4)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,l1_26087,lc1_26086),os_26088)){
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
var x_26089 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26090 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26089,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,x_26089,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(3),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,(2),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(3),null,(1),null))], 0))))),os_26090)){
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
var x_26091 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26092 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26091,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_26091,(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null)),os_26092)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s [[x 2]] [[1 2]]) os)"));
}
var x_26093 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26094 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26093,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_26093], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null)),os_26094)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s [x] [[1 2]]) os)"));
}
var x_26095 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y_26096 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
var u_26097 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"u","u",483896742,null));
var v_26098 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"v","v",1661996586,null));
var os_26099 = cljs.core.logic._ext_no_check(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,y_26096,new cljs.core.Symbol(null,"a","a",-482876059,null)),x_26095,new cljs.core.Symbol(null,"b","b",-1172211299,null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),x_26095], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_26096,new cljs.core.Symbol(null,"b","b",-1172211299,null)], null)),os_26099)){
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
var x_26100 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var os_26101 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26100,cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.PersistentArrayMap.EMPTY,x_26100),os_26101)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s {} x) os)"));
}
var x_26102 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.logic.lcons((1),x_26102)))){
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
var x_26103 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var m1_26104 = new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(3),(4)], null);
var m2_26105 = new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(3),x_26103], null);
var os_26106 = cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,x_26103,(4));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,m1_26104,m2_26105),os_26106)){
} else {
throw (new Error("Assert failed: (= (-unify empty-s m1 m2) os)"));
}
var x_26107 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var m1_26108 = new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(3),(4)], null);
var m2_26109 = new cljs.core.PersistentArrayMap(null, 2, [(1),(4),(3),x_26107], null);
if(cljs.core.logic.failed_QMARK_(cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_unify$arity$3(null,m1_26108,m2_26109))){
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var vec__25878 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.lvar,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"a","a",-482876059,null)], null));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25878,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25878,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25878,(2),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25878,(3),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25878,(4),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25878,(5),null);
var s = vec__25878;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.list(true))){
} else {
throw (new Error("Assert failed: (= (run* [q] (m/== true q)) (quote (true)))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5)], null)], null))){
} else {
throw (new Error("Assert failed: (= (run* [q] (fresh [x y] (m/== [x y] [1 5]) (m/== [x y] q))) [[1 5]])"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_.0","_.0",1821215658,null),new cljs.core.Symbol(null,"_.1","_.1",-872495016,null)], null)], null))){
} else {
throw (new Error("Assert failed: (= (run* [q] (fresh [x y] (m/== [x y] q))) (quote [[_.0 _.1]]))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fail"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.PersistentVector.EMPTY)){
} else {
throw (new Error("Assert failed: (= (run* [q] fail (m/== true q)) [])"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["basic"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
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
return (function (a25960){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(cljs.core.logic._bind(a25960,cljs.core.logic.emptyo(l)),cljs.core.logic.s_SHARP_),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(cljs.core.logic._bind(a25960,demo.rm_hull_6859633.core.pairo(l)),(function (a__20116__auto__){
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
return (function (a25961){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(cljs.core.logic._bind(a25961,cljs.core.logic.emptyo(s)),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,cljs.core.List.EMPTY,out);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(cljs.core.logic._bind(a25961,demo.rm_hull_6859633.core.pairo(s)),(function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var a = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"a","a",-482876059,null));
var d = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"d","d",-682293345,null));
var res_a = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res-a","res-a",805115205,null));
var res_d = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"res-d","res-d",-878625967,null));
return cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.conso(a,d,s)),(demo.rm_hull_6859633.core.flatteno.cljs$core$IFn$_invoke$arity$2 ? demo.rm_hull_6859633.core.flatteno.cljs$core$IFn$_invoke$arity$2(a,res_a) : demo.rm_hull_6859633.core.flatteno.call(null,a,res_a))),(demo.rm_hull_6859633.core.flatteno.cljs$core$IFn$_invoke$arity$2 ? demo.rm_hull_6859633.core.flatteno.cljs$core$IFn$_invoke$arity$2(d,res_d) : demo.rm_hull_6859633.core.flatteno.call(null,d,res_d))),cljs.core.logic.appendo(res_a,res_d,out));
})));
})),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a25961,cljs.core.logic.conso(s,cljs.core.List.EMPTY,out));
}))));
}))));
})));
});
});
demo.rm_hull_6859633.core.rembero = (function demo$rm_hull_6859633$core$rembero(x,l,out){
return (function (a25962){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(cljs.core.logic._bind(a25962,(function (a__20104__auto__){
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
return cljs.core.logic.mplus(cljs.core.logic._bind(a25962,(function (a__20116__auto__){
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
return cljs.core.logic._bind(a25962,(function (a__20116__auto__){
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a25963){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(cljs.core.logic._bind(a25963,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,x,new cljs.core.Symbol(null,"olive","olive",-440010939,null));
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),cljs.core.logic.succeed),(new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(cljs.core.logic._bind(a25963,cljs.core.logic.succeed),cljs.core.logic.succeed),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(cljs.core.logic._bind(a25963,(function (a__20104__auto__){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,x);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"olive","olive",-440010939,null),new cljs.core.Symbol(null,"_.0","_.0",1821215658,null),new cljs.core.Symbol(null,"oil","oil",-875291055,null)], null))){
} else {
throw (new Error("Assert failed: (= (run* [x] (conde [(m/== x (quote olive)) succeed] [succeed succeed] [(m/== x (quote oil)) succeed])) (quote [olive _.0 oil]))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var r = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"r","r",1169147337,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20116__auto____$1){
return (new cljs.core.logic.Inc((function (){
var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto____$1,(function (a25964){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(cljs.core.logic._bind(a25964,(function (a__20104__auto__){
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
return cljs.core.logic._bind(cljs.core.logic._bind(a25964,(function (a__20104__auto__){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,r);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.Symbol(null,"pea","pea",344213330,null)),cljs.core.list(new cljs.core.Symbol(null,"navy","navy",-1028093649,null),new cljs.core.Symbol(null,"bean","bean",-1620239896,null))], null))){
} else {
throw (new Error("Assert failed: (= (run* [r] (fresh [x y] (conde [(m/== (quote split) x) (m/== (quote pea) y)] [(m/== (quote navy) x) (m/== (quote bean) y)]) (m/== (cons x (cons y ())) r))) (quote [(split pea) (navy bean)]))"));
}
demo.rm_hull_6859633.core.teacupo = (function demo$rm_hull_6859633$core$teacupo(x){
return (function (a25965){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(cljs.core.logic._bind(a25965,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"tea","tea",927684288,null),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),cljs.core.logic.s_SHARP_),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(cljs.core.logic._bind(a25965,(function (a__20104__auto__){
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var r = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"r","r",1169147337,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a__20116__auto____$1){
return (new cljs.core.logic.Inc((function (){
var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
var y = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-117328249,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto____$1,(function (a25966){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a25966,demo.rm_hull_6859633.core.teacupo(x)),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,true,y);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),cljs.core.logic.s_SHARP_),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(cljs.core.logic._bind(a25966,(function (a__20104__auto__){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,r);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.list(cljs.core.list(false,true),cljs.core.list(new cljs.core.Symbol(null,"tea","tea",927684288,null),true),cljs.core.list(new cljs.core.Symbol(null,"cup","cup",-1010002779,null),true)))){
} else {
throw (new Error("Assert failed: (= (run* [r] (fresh [x y] (conde [(teacupo x) (m/== true y) s#] [(m/== false x) (m/== true y)]) (m/== (cons x (cons y ())) r))) (quote ((false true) (tea true) (cup true))))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["conso"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.PersistentVector.EMPTY)){
} else {
throw (new Error("Assert failed: (= (run* [q] (fresh [a d] (conso a d ()) (m/== (cons a d) q))) [])"));
}
var a_26110 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"a","a",-482876059,null));
var d_26111 = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"d","d",-682293345,null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.conso(a_26110,d_26111,q)),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.lcons(a_26110,d_26111)], null))){
} else {
throw (new Error("Assert failed: (= (run* [q] (conso a d q)) [(lcons a d)])"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.PersistentVector.EMPTY)){
} else {
throw (new Error("Assert failed: (= (run* [q] (m/== [q] nil)) [])"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.conso(new cljs.core.Symbol(null,"a","a",-482876059,null),null,q)),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null))], null))){
} else {
throw (new Error("Assert failed: (= (run* [q] (conso (quote a) nil q)) (quote [(a)]))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.conso(new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Symbol(null,"d","d",-682293345,null)),q)),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"d","d",-682293345,null))], null))){
} else {
throw (new Error("Assert failed: (= (run* [q] (conso (quote a) (quote (d)) q)) (quote [(a d)]))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.conso(new cljs.core.Symbol(null,"a","a",-482876059,null),q,cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null)))),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.List.EMPTY], null))){
} else {
throw (new Error("Assert failed: (= (run* [q] (conso (quote a) q (quote (a)))) (quote [()]))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.conso(q,cljs.core.list(new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"c","c",-122660552,null)))),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null)], null))){
} else {
throw (new Error("Assert failed: (= (run* [q] (conso q (quote (b c)) (quote (a b c)))) (quote [a]))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["firsto"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.firsto(q,cljs.core.list((1),(2)))),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),(new cljs.core.List(null,cljs.core.logic.lcons(cljs.core.list((1),(2)),cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null))),null,(1),null)))){
} else {
throw (new Error("Assert failed: (= (run* [q] (firsto q (quote (1 2)))) (list (lcons (quote (1 2)) (lvar (quote x)))))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["resto"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.resto(q,cljs.core.list((1),(2)))),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"_.0","_.0",1821215658,null),(1),(2))], null))){
} else {
throw (new Error("Assert failed: (= (run* [q] (resto q (quote (1 2)))) (quote [(_.0 1 2)]))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.resto(q,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null))),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"_.0","_.0",1821215658,null),(1),(2))], null))){
} else {
throw (new Error("Assert failed: (= (run* [q] (resto q [1 2])) (quote [(_.0 1 2)]))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.resto(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),q)),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list((2))], null))){
} else {
throw (new Error("Assert failed: (= (run* [q] (resto [1 2] q)) (quote [(2)]))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,cljs.core.logic.resto(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8)], null),q)),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list((2),(3),(4),(5),(6),(7),(8))], null))){
} else {
throw (new Error("Assert failed: (= (run* [q] (resto [1 2 3 4 5 6 7 8] q)) (quote [(2 3 4 5 6 7 8)]))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["flatteno"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,demo.rm_hull_6859633.core.flatteno(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null),new cljs.core.Symbol(null,"c","c",-122660552,null)], null),x)),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,x);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.list(cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null),new cljs.core.Symbol(null,"c","c",-122660552,null)], null)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null),cljs.core.list(new cljs.core.Symbol(null,"c","c",-122660552,null))),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null),new cljs.core.Symbol(null,"c","c",-122660552,null)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null),new cljs.core.Symbol(null,"c","c",-122660552,null),cljs.core.List.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Symbol(null,"b","b",-1172211299,null)),cljs.core.list(new cljs.core.Symbol(null,"c","c",-122660552,null))),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Symbol(null,"b","b",-1172211299,null)),new cljs.core.Symbol(null,"c","c",-122660552,null)),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Symbol(null,"b","b",-1172211299,null)),new cljs.core.Symbol(null,"c","c",-122660552,null),cljs.core.List.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),cljs.core.list(new cljs.core.Symbol(null,"c","c",-122660552,null))),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"c","c",-122660552,null))),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"c","c",-122660552,null),cljs.core.List.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c","c",-122660552,null)),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c","c",-122660552,null),cljs.core.List.EMPTY)))){
} else {
throw (new Error("Assert failed: (= (run* [x] (flatteno (quote [[a b] c]) x)) (quote (([[a b] c]) ([a b] (c)) ([a b] c) ([a b] c ()) (a (b) (c)) (a (b) c) (a (b) c ()) (a b (c)) (a b () (c)) (a b c) (a b c ()) (a b () c) (a b () c ()))))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["membero"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"foo","foo",-1385541733,null),new cljs.core.Symbol(null,"bar","bar",254284943,null)], null)], null)))){
} else {
throw (new Error("Assert failed: (= (run* [q] (all (m/== q [(lvar)]) (membero [(quote foo) (lvar)] q) (membero [(lvar) (quote bar)] q))) (quote ([[foo bar]])))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"foo","foo",-1385541733,null),new cljs.core.Symbol(null,"bar","bar",254284943,null)], null),new cljs.core.Symbol(null,"_.0","_.0",1821215658,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"foo","foo",-1385541733,null),new cljs.core.Symbol(null,"_.0","_.0",1821215658,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_.1","_.1",-872495016,null),new cljs.core.Symbol(null,"bar","bar",254284943,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_.0","_.0",1821215658,null),new cljs.core.Symbol(null,"bar","bar",254284943,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"foo","foo",-1385541733,null),new cljs.core.Symbol(null,"_.1","_.1",-872495016,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_.0","_.0",1821215658,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"foo","foo",-1385541733,null),new cljs.core.Symbol(null,"bar","bar",254284943,null)], null)], null)))){
} else {
throw (new Error("Assert failed: (= (run* [q] (all (m/== q [(lvar) (lvar)]) (membero [(quote foo) (lvar)] q) (membero [(lvar) (quote bar)] q))) (quote ([[foo bar] _.0] [[foo _.0] [_.1 bar]] [[_.0 bar] [foo _.1]] [_.0 [foo bar]])))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rembero"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),(1),new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,demo.rm_hull_6859633.core.rembero(new cljs.core.Symbol(null,"b","b",-1172211299,null),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"d","d",-682293345,null)),q)),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"d","d",-682293345,null))))){
} else {
throw (new Error("Assert failed: (= (run 1 [q] (rembero (quote b) (quote (a b c b d)) q)) (quote ((a c b d))))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["conde clause count"], 0));
demo.rm_hull_6859633.core.digit_1 = (function demo$rm_hull_6859633$core$digit_1(x){
return (function (a25967){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a25967,(function (a__20104__auto__){
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
return (function (a25968){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(a25968,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,(0),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(a25968,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,(1),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(a25968,(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,(2),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a25968,(function (a__20104__auto__){
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)))){
} else {
throw (new Error("Assert failed: (= (run* [q] (fresh [x y] (digit-1 x) (digit-1 y) (m/== q [x y]))) (quote ([0 0])))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null)))){
} else {
throw (new Error("Assert failed: (= (run* [q] (fresh [x y] (digit-4 x) (digit-4 y) (m/== q [x y]))) (quote ([0 0] [0 1] [0 2] [1 0] [0 3] [1 1] [1 2] [2 0] [1 3] [2 1] [3 0] [2 2] [3 1] [2 3] [3 2] [3 3])))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["anyo"], 0));
demo.rm_hull_6859633.core.anyo = (function demo$rm_hull_6859633$core$anyo(q){
return (function (a25969){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(cljs.core.logic._bind(a25969,q),cljs.core.logic.s_SHARP_),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a25969,(demo.rm_hull_6859633.core.anyo.cljs$core$IFn$_invoke$arity$1 ? demo.rm_hull_6859633.core.anyo.cljs$core$IFn$_invoke$arity$1(q) : demo.rm_hull_6859633.core.anyo.call(null,q)));
}))));
})));
});
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),(1),new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),(new cljs.core.List(null,true,null,(1),null)))){
} else {
throw (new Error("Assert failed: (= (run 1 [q] (anyo s#) (m/== true q)) (list true))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),(5),new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),(1),new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a25970){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(a25970,demo.rm_hull_6859633.core.f1),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a25970,(function (a__20104__auto__){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.list(new cljs.core.Symbol(null,"_.0","_.0",1821215658,null)))){
} else {
throw (new Error("Assert failed: (= (run 1 [q] (conde [f1] [(m/== false false)])) (quote (_.0)))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),(1),new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a25971){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(cljs.core.logic._bind(a25971,demo.rm_hull_6859633.core.f1),(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,false,false);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a25971,(function (a__20104__auto__){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.list(new cljs.core.Symbol(null,"_.0","_.0",1821215658,null)))){
} else {
throw (new Error("Assert failed: (= (run 1 [q] (conde [f1 (m/== false false)] [(m/== false false)])) (quote (_.0)))"));
}
demo.rm_hull_6859633.core.f2 = (function demo$rm_hull_6859633$core$f2(a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a__20116__auto__,(function (a25972){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(cljs.core.logic._bind(a25972,demo.rm_hull_6859633.core.f2),(function (a25973){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(a25973,demo.rm_hull_6859633.core.f2),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a25973,(function (a__20104__auto__){
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
return cljs.core.logic._bind(a25972,(function (a__20104__auto__){
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),(5),new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,demo.rm_hull_6859633.core.f2),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.list(new cljs.core.Symbol(null,"_.0","_.0",1821215658,null),new cljs.core.Symbol(null,"_.0","_.0",1821215658,null),new cljs.core.Symbol(null,"_.0","_.0",1821215658,null),new cljs.core.Symbol(null,"_.0","_.0",1821215658,null),new cljs.core.Symbol(null,"_.0","_.0",1821215658,null)))){
} else {
throw (new Error("Assert failed: (= (run 5 [q] f2) (quote (_.0 _.0 _.0 _.0 _.0)))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["conda"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a25974){
return cljs.core.logic._ifa((function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"olive","olive",-440010939,null),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})(a25974),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.s_SHARP_], null),(new cljs.core.Delay((function (){
return cljs.core.logic._ifa((function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"oil","oil",-875291055,null),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})(a25974),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.s_SHARP_], null),(new cljs.core.Delay((function (){
return cljs.core.logic._ifa((cljs.core.logic.u_SHARP_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.u_SHARP_.cljs$core$IFn$_invoke$arity$1(a25974) : cljs.core.logic.u_SHARP_.call(null,a25974)),cljs.core.PersistentVector.EMPTY,null);
}),null)));
}),null)));
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,x);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.list(new cljs.core.Symbol(null,"olive","olive",-440010939,null)))){
} else {
throw (new Error("Assert failed: (= (run* [x] (conda [(m/== (quote olive) x) s#] [(m/== (quote oil) x) s#] [u#])) (quote (olive)))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a25975){
return cljs.core.logic._ifa((function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"virgin","virgin",1304764714,null),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})(a25975),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.u_SHARP_], null),(new cljs.core.Delay((function (){
return cljs.core.logic._ifa((function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"olive","olive",-440010939,null),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})(a25975),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.s_SHARP_], null),(new cljs.core.Delay((function (){
return cljs.core.logic._ifa((function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"oil","oil",-875291055,null),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})(a25975),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.s_SHARP_], null),(new cljs.core.Delay((function (){
return cljs.core.logic._ifa((cljs.core.logic.u_SHARP_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.u_SHARP_.cljs$core$IFn$_invoke$arity$1(a25975) : cljs.core.logic.u_SHARP_.call(null,a25975)),cljs.core.PersistentVector.EMPTY,null);
}),null)));
}),null)));
}),null)));
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,x);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.List.EMPTY)){
} else {
throw (new Error("Assert failed: (= (run* [x] (conda [(m/== (quote virgin) x) u#] [(m/== (quote olive) x) s#] [(m/== (quote oil) x) s#] [u#])) (quote ()))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a25976){
return cljs.core.logic._ifa((function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"split","split",1041096409,null),x__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})(a25976),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,x__$1,y);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})], null),(new cljs.core.Delay((function (){
return cljs.core.logic._ifa((cljs.core.logic.s_SHARP_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.s_SHARP_.cljs$core$IFn$_invoke$arity$1(a25976) : cljs.core.logic.s_SHARP_.call(null,a25976)),cljs.core.PersistentVector.EMPTY,null);
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,x);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.List.EMPTY)){
} else {
throw (new Error("Assert failed: (= (run* [x] (fresh (x y) (m/== (quote split) x) (m/== (quote pea) y) (conda [(m/== (quote split) x) (m/== x y)] [s#])) (m/== true x)) (quote ()))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a25977){
return cljs.core.logic._ifa((function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,x__$1,y);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})(a25977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"split","split",1041096409,null),x__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})], null),(new cljs.core.Delay((function (){
return cljs.core.logic._ifa((cljs.core.logic.s_SHARP_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.s_SHARP_.cljs$core$IFn$_invoke$arity$1(a25977) : cljs.core.logic.s_SHARP_.call(null,a25977)),cljs.core.PersistentVector.EMPTY,null);
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,x);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.list(true))){
} else {
throw (new Error("Assert failed: (= (run* [x] (fresh (x y) (m/== (quote split) x) (m/== (quote pea) y) (conda [(m/== x y) (m/== (quote split) x)] [s#])) (m/== true x)) (quote (true)))"));
}
demo.rm_hull_6859633.core.not_pastao = (function demo$rm_hull_6859633$core$not_pastao(x){
return (function (a25978){
return cljs.core.logic._ifa((function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"pasta","pasta",-767399231,null),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})(a25978),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.u_SHARP_], null),(new cljs.core.Delay((function (){
return cljs.core.logic._ifa((cljs.core.logic.s_SHARP_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.s_SHARP_.cljs$core$IFn$_invoke$arity$1(a25978) : cljs.core.logic.s_SHARP_.call(null,a25978)),cljs.core.PersistentVector.EMPTY,null);
}),null)));
});
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a25979){
return cljs.core.logic._ifa(demo.rm_hull_6859633.core.not_pastao(x)(a25979),cljs.core.PersistentVector.EMPTY,(new cljs.core.Delay((function (){
return cljs.core.logic._ifa((function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,new cljs.core.Symbol(null,"spaghetti","spaghetti",-2046524464,null),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})(a25979),cljs.core.PersistentVector.EMPTY,null);
}),null)));
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,x);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.list(new cljs.core.Symbol(null,"spaghetti","spaghetti",-2046524464,null)))){
} else {
throw (new Error("Assert failed: (= (run* [x] (conda [(not-pastao x)] [(m/== (quote spaghetti) x)])) (quote (spaghetti)))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["condu"], 0));
demo.rm_hull_6859633.core.onceo = (function demo$rm_hull_6859633$core$onceo(g){
return (function (a25980){
return cljs.core.logic._ifu((g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a25980) : g.call(null,a25980)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.s_SHARP_], null),null);
});
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,demo.rm_hull_6859633.core.onceo(demo.rm_hull_6859633.core.teacupo(x))),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,x);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.list(new cljs.core.Symbol(null,"tea","tea",927684288,null)))){
} else {
throw (new Error("Assert failed: (= (run* [x] (onceo (teacupo x))) (quote (tea)))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var r = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"r","r",1169147337,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a25981){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(cljs.core.logic._bind(a25981,demo.rm_hull_6859633.core.teacupo(r)),cljs.core.logic.s_SHARP_),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(cljs.core.logic._bind(a25981,(function (a__20104__auto__){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,r);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.list(false,new cljs.core.Symbol(null,"tea","tea",927684288,null),new cljs.core.Symbol(null,"cup","cup",-1010002779,null)))){
} else {
throw (new Error("Assert failed: (= (run* [r] (conde [(teacupo r) s#] [(m/== false r) s#])) (quote (false tea cup)))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var r = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"r","r",1169147337,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,(function (a25982){
return cljs.core.logic._ifa(demo.rm_hull_6859633.core.teacupo(r)(a25982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.s_SHARP_], null),(new cljs.core.Delay((function (){
return cljs.core.logic._ifa((function (a__20104__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__20104__auto__,false,r);
if(cljs.core.truth_(temp__5823__auto__)){
var b__20105__auto__ = temp__5823__auto__;
return b__20105__auto__;
} else {
return cljs.core.logic.fail(a__20104__auto__);
}
})(a25982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.s_SHARP_], null),null);
}),null)));
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,r);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.list(new cljs.core.Symbol(null,"tea","tea",927684288,null),new cljs.core.Symbol(null,"cup","cup",-1010002779,null)))){
} else {
throw (new Error("Assert failed: (= (run* [r] (conda [(teacupo r) s#] [(m/== false r) s#])) (quote (tea cup)))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["nil in collection"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))){
} else {
throw (new Error("Assert failed: (= (run* [q] (m/== q [nil])) (quote ([nil])))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),null], null)))){
} else {
throw (new Error("Assert failed: (= (run* [q] (m/== q [1 nil])) (quote ([1 nil])))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(1)], null)))){
} else {
throw (new Error("Assert failed: (= (run* [q] (m/== q [nil 1])) (quote ([nil 1])))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.list(cljs.core.list(null)))){
} else {
throw (new Error("Assert failed: (= (run* [q] (m/== q (quote (nil)))) (quote ((nil))))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.list(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),null], null)))){
} else {
throw (new Error("Assert failed: (= (run* [q] (m/== q {:foo nil})) (quote ({:foo nil})))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.List.EMPTY)){
} else {
throw (new Error("Assert failed: (= (run* [q] (m/== q [q])) ())"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["unifications that sould fail"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,p);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.List.EMPTY)){
} else {
throw (new Error("Assert failed: (= (run* [p] (fresh [a b] (m/== b ()) (m/== (quote (0 1)) (lcons a b)) (m/== p [a b]))) ())"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,p);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.List.EMPTY)){
} else {
throw (new Error("Assert failed: (= (run* [p] (fresh [a b] (m/== b (quote (1))) (m/== (quote (0)) (lcons a b)) (m/== p [a b]))) ())"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,p);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.List.EMPTY)){
} else {
throw (new Error("Assert failed: (= (run* [p] (fresh [a b c d] (m/== () b) (m/== (quote (1)) d) (m/== (lcons a b) (lcons c d)) (m/== p [a b c d]))) ())"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["pattern matching"], 0));
demo.rm_hull_6859633.core.match_map = (function demo$rm_hull_6859633$core$match_map(m,o){
return (function (a25983){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a25983,(function (a__20116__auto__){
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,demo.rm_hull_6859633.core.match_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bar","bar",-1386246584),(1)], null)], null),q)),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.list((1)))){
} else {
throw (new Error("Assert failed: (= (run* [q] (match-map {:foo {:bar 1}} q)) (quote (1)))"));
}
demo.rm_hull_6859633.core.match_set = (function demo$rm_hull_6859633$core$match_set(s,o){
return (function (a25984){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a25984,(function (a__20116__auto__){
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,demo.rm_hull_6859633.core.match_set(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cat","cat",-1457810207),null,new cljs.core.Keyword(null,"bird","bird",-1252014845),null,new cljs.core.Keyword(null,"dog","dog",-1650861974),null], null), null),q)),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.list(new cljs.core.Symbol(null,"_.0","_.0",1821215658,null)))){
} else {
throw (new Error("Assert failed: (= (run* [q] (match-set #{:cat :bird :dog} q)) (quote (_.0)))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["partial maps"], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.list(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)),(function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (= (quote ({:a 1})) (run* [q] (fresh [pm x] (== pm (partial-map {:a x})) (== pm {:a 1, :b 2}) (== pm q))))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.list((1)),(function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
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
})),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (= (quote (1)) (run* [q] (fresh [pm x] (== pm (partial-map {:a x})) (== pm {:a 1, :b 2}) (== x q))))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zebrao"], 0));
demo.rm_hull_6859633.core.righto = (function demo$rm_hull_6859633$core$righto(x,y,l){
return (function (a25985){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(a25985,(function (a__20116__auto__){
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
return cljs.core.logic._bind(a25985,(function (a__20116__auto__){
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
return (function (a25986){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(a25986,demo.rm_hull_6859633.core.righto(x,y,l)),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a25986,demo.rm_hull_6859633.core.righto(y,x,l));
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
var _STAR_occurs_check_STAR__orig_val__25987 = demo.rm_hull_6859633.core._STAR_occurs_check_STAR_;
var _STAR_occurs_check_STAR__temp_val__25988 = false;
(demo.rm_hull_6859633.core._STAR_occurs_check_STAR_ = _STAR_occurs_check_STAR__temp_val__25988);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),(1),new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,demo.rm_hull_6859633.core.zebrao(q)),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})());
}finally {(demo.rm_hull_6859633.core._STAR_occurs_check_STAR_ = _STAR_occurs_check_STAR__orig_val__25987);
}});
goog.exportSymbol('demo.rm_hull_6859633.core.run_zebra', demo.rm_hull_6859633.core.run_zebra);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),(1),new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,demo.rm_hull_6859633.core.zebrao(q)),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})()], 0))], 0));
var _STAR_occurs_check_STAR__orig_val__25989_26112 = demo.rm_hull_6859633.core._STAR_occurs_check_STAR_;
var _STAR_occurs_check_STAR__temp_val__25990_26113 = false;
(demo.rm_hull_6859633.core._STAR_occurs_check_STAR_ = _STAR_occurs_check_STAR__temp_val__25990_26113);

try{var start__5775__auto___26114 = cljs.core.system_time();
var ret__5776__auto___26115 = (function (){var n__5762__auto__ = (1000);
var _ = (0);
while(true){
if((_ < n__5762__auto__)){
var opts__20127__auto___26116 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),(1),new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto___26117 = (new cljs.core.logic.Inc(((function (_,opts__20127__auto___26116,n__5762__auto__,start__5775__auto___26114,_STAR_occurs_check_STAR__orig_val__25989_26112,_STAR_occurs_check_STAR__temp_val__25990_26113){
return (function (){
return ((function (_,opts__20127__auto___26116,n__5762__auto__,start__5775__auto___26114,_STAR_occurs_check_STAR__orig_val__25989_26112,_STAR_occurs_check_STAR__temp_val__25990_26113){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc(((function (_,opts__20127__auto___26116,n__5762__auto__,start__5775__auto___26114,_STAR_occurs_check_STAR__orig_val__25989_26112,_STAR_occurs_check_STAR__temp_val__25990_26113){
return (function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,demo.rm_hull_6859633.core.zebrao(q)),((function (_,q,opts__20127__auto___26116,n__5762__auto__,start__5775__auto___26114,_STAR_occurs_check_STAR__orig_val__25989_26112,_STAR_occurs_check_STAR__temp_val__25990_26113){
return (function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
});})(_,q,opts__20127__auto___26116,n__5762__auto__,start__5775__auto___26114,_STAR_occurs_check_STAR__orig_val__25989_26112,_STAR_occurs_check_STAR__temp_val__25990_26113))
);
});})(_,opts__20127__auto___26116,n__5762__auto__,start__5775__auto___26114,_STAR_occurs_check_STAR__orig_val__25989_26112,_STAR_occurs_check_STAR__temp_val__25990_26113))
));
});})(_,opts__20127__auto___26116,n__5762__auto__,start__5775__auto___26114,_STAR_occurs_check_STAR__orig_val__25989_26112,_STAR_occurs_check_STAR__temp_val__25990_26113))
(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto___26116], 0))));
});})(_,opts__20127__auto___26116,n__5762__auto__,start__5775__auto___26114,_STAR_occurs_check_STAR__orig_val__25989_26112,_STAR_occurs_check_STAR__temp_val__25990_26113))
)).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto___26118 = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto___26116);
if(cljs.core.truth_(temp__5823__auto___26118)){
var n__20130__auto___26119 = temp__5823__auto___26118;
cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto___26119,xs__20128__auto___26117);
} else {
}

var G__26120 = (_ + (1));
_ = G__26120;
continue;
} else {
return null;
}
break;
}
})();
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"Elapsed time: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.system_time() - start__5775__auto___26114).toFixed((6)))+" msecs")], 0));

}finally {(demo.rm_hull_6859633.core._STAR_occurs_check_STAR_ = _STAR_occurs_check_STAR__orig_val__25989_26112);
}cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),(10),new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,demo.rm_hull_6859633.core.nexto(new cljs.core.Symbol(null,"dog","dog",-10330447,null),new cljs.core.Symbol(null,"cat","cat",182721320,null),q)),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})()], 0))], 0));
demo.rm_hull_6859633.core.map_geto = (function demo$rm_hull_6859633$core$map_geto(m,k,v){
return (function (a25991){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(a25991,(function (a__20116__auto__){
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
return cljs.core.logic._bind(a25991,(function (a__20116__auto__){
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__20127__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__20128__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__20116__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__20116__auto__,demo.rm_hull_6859633.core.map_geto(cljs.core.seq(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Blub"], null)),new cljs.core.Keyword(null,"title","title",636505583),q)),(function (a__20129__auto__){
return cljs.core.logic._reify(a__20129__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__20127__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__20127__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__20130__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__20130__auto__,xs__20128__auto__);
} else {
return xs__20128__auto__;
}
})(),cljs.core.list("Blub"))){
} else {
throw (new Error("Assert failed: (= (run* [q] (map-geto (seq {:title \"Blub\"}) :title q)) (quote (\"Blub\")))"));
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ok"], 0));
demo.rm_hull_6859633.core._STAR_occurs_check_STAR_ = true;

//# sourceMappingURL=demo.rm_hull_6859633.core.js.map
