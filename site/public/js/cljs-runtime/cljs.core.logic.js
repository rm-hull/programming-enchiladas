goog.provide('cljs.core.logic');
cljs.core.logic._STAR_logic_dbs_STAR_ = cljs.core.PersistentVector.EMPTY;

/**
 * @interface
 */
cljs.core.logic.IUnifyTerms = function(){};

var cljs$core$logic$IUnifyTerms$_unify_terms$dyn_31032 = (function (u,v,s){
var x__5519__auto__ = (((u == null))?null:u);
var m__5520__auto__ = (cljs.core.logic._unify_terms[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(u,v,s) : m__5520__auto__.call(null,u,v,s));
} else {
var m__5518__auto__ = (cljs.core.logic._unify_terms["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(u,v,s) : m__5518__auto__.call(null,u,v,s));
} else {
throw cljs.core.missing_protocol("IUnifyTerms.-unify-terms",u);
}
}
});
cljs.core.logic._unify_terms = (function cljs$core$logic$_unify_terms(u,v,s){
if((((!((u == null)))) && ((!((u.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 == null)))))){
return u.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3(u,v,s);
} else {
return cljs$core$logic$IUnifyTerms$_unify_terms$dyn_31032(u,v,s);
}
});


/**
 * @interface
 */
cljs.core.logic.IUnifyWithNil = function(){};

var cljs$core$logic$IUnifyWithNil$_unify_with_nil$dyn_31036 = (function (v,u,s){
var x__5519__auto__ = (((v == null))?null:v);
var m__5520__auto__ = (cljs.core.logic._unify_with_nil[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(v,u,s) : m__5520__auto__.call(null,v,u,s));
} else {
var m__5518__auto__ = (cljs.core.logic._unify_with_nil["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(v,u,s) : m__5518__auto__.call(null,v,u,s));
} else {
throw cljs.core.missing_protocol("IUnifyWithNil.-unify-with-nil",v);
}
}
});
cljs.core.logic._unify_with_nil = (function cljs$core$logic$_unify_with_nil(v,u,s){
if((((!((v == null)))) && ((!((v.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3 == null)))))){
return v.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3(v,u,s);
} else {
return cljs$core$logic$IUnifyWithNil$_unify_with_nil$dyn_31036(v,u,s);
}
});


/**
 * @interface
 */
cljs.core.logic.IUnifyWithObject = function(){};

var cljs$core$logic$IUnifyWithObject$_unify_with_object$dyn_31038 = (function (v,u,s){
var x__5519__auto__ = (((v == null))?null:v);
var m__5520__auto__ = (cljs.core.logic._unify_with_object[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(v,u,s) : m__5520__auto__.call(null,v,u,s));
} else {
var m__5518__auto__ = (cljs.core.logic._unify_with_object["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(v,u,s) : m__5518__auto__.call(null,v,u,s));
} else {
throw cljs.core.missing_protocol("IUnifyWithObject.-unify-with-object",v);
}
}
});
cljs.core.logic._unify_with_object = (function cljs$core$logic$_unify_with_object(v,u,s){
if((((!((v == null)))) && ((!((v.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3 == null)))))){
return v.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3(v,u,s);
} else {
return cljs$core$logic$IUnifyWithObject$_unify_with_object$dyn_31038(v,u,s);
}
});


/**
 * @interface
 */
cljs.core.logic.IUnifyWithLVar = function(){};

var cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$dyn_31039 = (function (v,u,s){
var x__5519__auto__ = (((v == null))?null:v);
var m__5520__auto__ = (cljs.core.logic._unify_with_lvar[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(v,u,s) : m__5520__auto__.call(null,v,u,s));
} else {
var m__5518__auto__ = (cljs.core.logic._unify_with_lvar["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(v,u,s) : m__5518__auto__.call(null,v,u,s));
} else {
throw cljs.core.missing_protocol("IUnifyWithLVar.-unify-with-lvar",v);
}
}
});
cljs.core.logic._unify_with_lvar = (function cljs$core$logic$_unify_with_lvar(v,u,s){
if((((!((v == null)))) && ((!((v.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3 == null)))))){
return v.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3(v,u,s);
} else {
return cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$dyn_31039(v,u,s);
}
});


/**
 * @interface
 */
cljs.core.logic.IUnifyWithLSeq = function(){};

var cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$dyn_31054 = (function (v,u,s){
var x__5519__auto__ = (((v == null))?null:v);
var m__5520__auto__ = (cljs.core.logic._unify_with_lseq[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(v,u,s) : m__5520__auto__.call(null,v,u,s));
} else {
var m__5518__auto__ = (cljs.core.logic._unify_with_lseq["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(v,u,s) : m__5518__auto__.call(null,v,u,s));
} else {
throw cljs.core.missing_protocol("IUnifyWithLSeq.-unify-with-lseq",v);
}
}
});
cljs.core.logic._unify_with_lseq = (function cljs$core$logic$_unify_with_lseq(v,u,s){
if((((!((v == null)))) && ((!((v.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3 == null)))))){
return v.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3(v,u,s);
} else {
return cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$dyn_31054(v,u,s);
}
});


/**
 * @interface
 */
cljs.core.logic.IUnifyWithSequential = function(){};

var cljs$core$logic$IUnifyWithSequential$_unify_with_seq$dyn_31058 = (function (v,u,s){
var x__5519__auto__ = (((v == null))?null:v);
var m__5520__auto__ = (cljs.core.logic._unify_with_seq[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(v,u,s) : m__5520__auto__.call(null,v,u,s));
} else {
var m__5518__auto__ = (cljs.core.logic._unify_with_seq["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(v,u,s) : m__5518__auto__.call(null,v,u,s));
} else {
throw cljs.core.missing_protocol("IUnifyWithSequential.-unify-with-seq",v);
}
}
});
cljs.core.logic._unify_with_seq = (function cljs$core$logic$_unify_with_seq(v,u,s){
if((((!((v == null)))) && ((!((v.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3 == null)))))){
return v.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3(v,u,s);
} else {
return cljs$core$logic$IUnifyWithSequential$_unify_with_seq$dyn_31058(v,u,s);
}
});


/**
 * @interface
 */
cljs.core.logic.IUnifyWithMap = function(){};

var cljs$core$logic$IUnifyWithMap$_unify_with_map$dyn_31061 = (function (v,u,s){
var x__5519__auto__ = (((v == null))?null:v);
var m__5520__auto__ = (cljs.core.logic._unify_with_map[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(v,u,s) : m__5520__auto__.call(null,v,u,s));
} else {
var m__5518__auto__ = (cljs.core.logic._unify_with_map["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(v,u,s) : m__5518__auto__.call(null,v,u,s));
} else {
throw cljs.core.missing_protocol("IUnifyWithMap.-unify-with-map",v);
}
}
});
cljs.core.logic._unify_with_map = (function cljs$core$logic$_unify_with_map(v,u,s){
if((((!((v == null)))) && ((!((v.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 == null)))))){
return v.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3(v,u,s);
} else {
return cljs$core$logic$IUnifyWithMap$_unify_with_map$dyn_31061(v,u,s);
}
});


/**
 * @interface
 */
cljs.core.logic.IReifyTerm = function(){};

var cljs$core$logic$IReifyTerm$_reify_term$dyn_31063 = (function (v,s){
var x__5519__auto__ = (((v == null))?null:v);
var m__5520__auto__ = (cljs.core.logic._reify_term[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(v,s) : m__5520__auto__.call(null,v,s));
} else {
var m__5518__auto__ = (cljs.core.logic._reify_term["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(v,s) : m__5518__auto__.call(null,v,s));
} else {
throw cljs.core.missing_protocol("IReifyTerm.-reify-term",v);
}
}
});
cljs.core.logic._reify_term = (function cljs$core$logic$_reify_term(v,s){
if((((!((v == null)))) && ((!((v.cljs$core$logic$IReifyTerm$_reify_term$arity$2 == null)))))){
return v.cljs$core$logic$IReifyTerm$_reify_term$arity$2(v,s);
} else {
return cljs$core$logic$IReifyTerm$_reify_term$dyn_31063(v,s);
}
});


/**
 * @interface
 */
cljs.core.logic.IWalkTerm = function(){};

var cljs$core$logic$IWalkTerm$_walk_term$dyn_31064 = (function (v,s){
var x__5519__auto__ = (((v == null))?null:v);
var m__5520__auto__ = (cljs.core.logic._walk_term[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(v,s) : m__5520__auto__.call(null,v,s));
} else {
var m__5518__auto__ = (cljs.core.logic._walk_term["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(v,s) : m__5518__auto__.call(null,v,s));
} else {
throw cljs.core.missing_protocol("IWalkTerm.-walk-term",v);
}
}
});
cljs.core.logic._walk_term = (function cljs$core$logic$_walk_term(v,s){
if((((!((v == null)))) && ((!((v.cljs$core$logic$IWalkTerm$_walk_term$arity$2 == null)))))){
return v.cljs$core$logic$IWalkTerm$_walk_term$arity$2(v,s);
} else {
return cljs$core$logic$IWalkTerm$_walk_term$dyn_31064(v,s);
}
});


/**
 * @interface
 */
cljs.core.logic.IOccursCheckTerm = function(){};

var cljs$core$logic$IOccursCheckTerm$_occurs_check_term$dyn_31065 = (function (v,x,s){
var x__5519__auto__ = (((v == null))?null:v);
var m__5520__auto__ = (cljs.core.logic._occurs_check_term[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(v,x,s) : m__5520__auto__.call(null,v,x,s));
} else {
var m__5518__auto__ = (cljs.core.logic._occurs_check_term["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(v,x,s) : m__5518__auto__.call(null,v,x,s));
} else {
throw cljs.core.missing_protocol("IOccursCheckTerm.-occurs-check-term",v);
}
}
});
cljs.core.logic._occurs_check_term = (function cljs$core$logic$_occurs_check_term(v,x,s){
if((((!((v == null)))) && ((!((v.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3 == null)))))){
return v.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3(v,x,s);
} else {
return cljs$core$logic$IOccursCheckTerm$_occurs_check_term$dyn_31065(v,x,s);
}
});


/**
 * @interface
 */
cljs.core.logic.IBuildTerm = function(){};

var cljs$core$logic$IBuildTerm$_build_term$dyn_31072 = (function (u,s){
var x__5519__auto__ = (((u == null))?null:u);
var m__5520__auto__ = (cljs.core.logic._build_term[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(u,s) : m__5520__auto__.call(null,u,s));
} else {
var m__5518__auto__ = (cljs.core.logic._build_term["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(u,s) : m__5518__auto__.call(null,u,s));
} else {
throw cljs.core.missing_protocol("IBuildTerm.-build-term",u);
}
}
});
cljs.core.logic._build_term = (function cljs$core$logic$_build_term(u,s){
if((((!((u == null)))) && ((!((u.cljs$core$logic$IBuildTerm$_build_term$arity$2 == null)))))){
return u.cljs$core$logic$IBuildTerm$_build_term$arity$2(u,s);
} else {
return cljs$core$logic$IBuildTerm$_build_term$dyn_31072(u,s);
}
});


/**
 * @interface
 */
cljs.core.logic.IBind = function(){};

var cljs$core$logic$IBind$_bind$dyn_31075 = (function (this$,g){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (cljs.core.logic._bind[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,g) : m__5520__auto__.call(null,this$,g));
} else {
var m__5518__auto__ = (cljs.core.logic._bind["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,g) : m__5518__auto__.call(null,this$,g));
} else {
throw cljs.core.missing_protocol("IBind.-bind",this$);
}
}
});
cljs.core.logic._bind = (function cljs$core$logic$_bind(this$,g){
if((((!((this$ == null)))) && ((!((this$.cljs$core$logic$IBind$_bind$arity$2 == null)))))){
return this$.cljs$core$logic$IBind$_bind$arity$2(this$,g);
} else {
return cljs$core$logic$IBind$_bind$dyn_31075(this$,g);
}
});


/**
 * @interface
 */
cljs.core.logic.IMPlus = function(){};

var cljs$core$logic$IMPlus$_mplus$dyn_31082 = (function (a,f){
var x__5519__auto__ = (((a == null))?null:a);
var m__5520__auto__ = (cljs.core.logic._mplus[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(a,f) : m__5520__auto__.call(null,a,f));
} else {
var m__5518__auto__ = (cljs.core.logic._mplus["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(a,f) : m__5518__auto__.call(null,a,f));
} else {
throw cljs.core.missing_protocol("IMPlus.-mplus",a);
}
}
});
cljs.core.logic._mplus = (function cljs$core$logic$_mplus(a,f){
if((((!((a == null)))) && ((!((a.cljs$core$logic$IMPlus$_mplus$arity$2 == null)))))){
return a.cljs$core$logic$IMPlus$_mplus$arity$2(a,f);
} else {
return cljs$core$logic$IMPlus$_mplus$dyn_31082(a,f);
}
});


/**
 * @interface
 */
cljs.core.logic.ITake = function(){};

var cljs$core$logic$ITake$_take_STAR_$dyn_31088 = (function (a){
var x__5519__auto__ = (((a == null))?null:a);
var m__5520__auto__ = (cljs.core.logic._take_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(a) : m__5520__auto__.call(null,a));
} else {
var m__5518__auto__ = (cljs.core.logic._take_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(a) : m__5518__auto__.call(null,a));
} else {
throw cljs.core.missing_protocol("ITake.-take*",a);
}
}
});
cljs.core.logic._take_STAR_ = (function cljs$core$logic$_take_STAR_(a){
if((((!((a == null)))) && ((!((a.cljs$core$logic$ITake$_take_STAR_$arity$1 == null)))))){
return a.cljs$core$logic$ITake$_take_STAR_$arity$1(a);
} else {
return cljs$core$logic$ITake$_take_STAR_$dyn_31088(a);
}
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.IPrintWithWriter}
*/
cljs.core.logic.Pair = (function (lhs,rhs){
this.lhs = lhs;
this.rhs = rhs;
this.cljs$lang$protocol_mask$partition0$ = 2149580818;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.logic.Pair.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.lhs,other.lhs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.rhs,other.rhs)));
}));

(cljs.core.logic.Pair.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (2);
}));

(cljs.core.logic.Pair.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,i){
var self__ = this;
var ___$1 = this;
var G__29372 = i;
switch (G__29372) {
case (0):
return self__.lhs;

break;
case (1):
return self__.rhs;

break;
default:
throw (new Error("Index out of bounds"));

}
}));

(cljs.core.logic.Pair.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,i,not_found){
var self__ = this;
var ___$1 = this;
var G__29378 = i;
switch (G__29378) {
case (0):
return self__.lhs;

break;
case (1):
return self__.rhs;

break;
default:
return not_found;

}
}));

(cljs.core.logic.Pair.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
return cljs.core._write(writer,(""+"("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.lhs)+" . "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.rhs)+")"));
}));

(cljs.core.logic.Pair.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"lhs","lhs",-1482353675,null),new cljs.core.Symbol(null,"rhs","rhs",1411174788,null)], null);
}));

(cljs.core.logic.Pair.cljs$lang$type = true);

(cljs.core.logic.Pair.cljs$lang$ctorStr = "cljs.core.logic/Pair");

(cljs.core.logic.Pair.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.logic/Pair");
}));

/**
 * Positional factory function for cljs.core.logic/Pair.
 */
cljs.core.logic.__GT_Pair = (function cljs$core$logic$__GT_Pair(lhs,rhs){
return (new cljs.core.logic.Pair(lhs,rhs));
});

cljs.core.logic.pair = (function cljs$core$logic$pair(lhs,rhs){
return (new cljs.core.logic.Pair(lhs,rhs));
});
cljs.core.logic.lvar_QMARK_ = (function cljs$core$logic$lvar_QMARK_(x){
return (x instanceof cljs.core.logic.LVar);
});

/**
 * @interface
 */
cljs.core.logic.ISubstitutions = function(){};

var cljs$core$logic$ISubstitutions$_occurs_check$dyn_31097 = (function (this$,u,v){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (cljs.core.logic._occurs_check[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(this$,u,v) : m__5520__auto__.call(null,this$,u,v));
} else {
var m__5518__auto__ = (cljs.core.logic._occurs_check["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(this$,u,v) : m__5518__auto__.call(null,this$,u,v));
} else {
throw cljs.core.missing_protocol("ISubstitutions.-occurs-check",this$);
}
}
});
cljs.core.logic._occurs_check = (function cljs$core$logic$_occurs_check(this$,u,v){
if((((!((this$ == null)))) && ((!((this$.cljs$core$logic$ISubstitutions$_occurs_check$arity$3 == null)))))){
return this$.cljs$core$logic$ISubstitutions$_occurs_check$arity$3(this$,u,v);
} else {
return cljs$core$logic$ISubstitutions$_occurs_check$dyn_31097(this$,u,v);
}
});

var cljs$core$logic$ISubstitutions$_ext$dyn_31099 = (function (this$,u,v){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (cljs.core.logic._ext[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(this$,u,v) : m__5520__auto__.call(null,this$,u,v));
} else {
var m__5518__auto__ = (cljs.core.logic._ext["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(this$,u,v) : m__5518__auto__.call(null,this$,u,v));
} else {
throw cljs.core.missing_protocol("ISubstitutions.-ext",this$);
}
}
});
cljs.core.logic._ext = (function cljs$core$logic$_ext(this$,u,v){
if((((!((this$ == null)))) && ((!((this$.cljs$core$logic$ISubstitutions$_ext$arity$3 == null)))))){
return this$.cljs$core$logic$ISubstitutions$_ext$arity$3(this$,u,v);
} else {
return cljs$core$logic$ISubstitutions$_ext$dyn_31099(this$,u,v);
}
});

var cljs$core$logic$ISubstitutions$_ext_no_check$dyn_31122 = (function (this$,u,v){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (cljs.core.logic._ext_no_check[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(this$,u,v) : m__5520__auto__.call(null,this$,u,v));
} else {
var m__5518__auto__ = (cljs.core.logic._ext_no_check["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(this$,u,v) : m__5518__auto__.call(null,this$,u,v));
} else {
throw cljs.core.missing_protocol("ISubstitutions.-ext-no-check",this$);
}
}
});
cljs.core.logic._ext_no_check = (function cljs$core$logic$_ext_no_check(this$,u,v){
if((((!((this$ == null)))) && ((!((this$.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3 == null)))))){
return this$.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(this$,u,v);
} else {
return cljs$core$logic$ISubstitutions$_ext_no_check$dyn_31122(this$,u,v);
}
});

var cljs$core$logic$ISubstitutions$_walk$dyn_31135 = (function (this$,v){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (cljs.core.logic._walk[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__5520__auto__.call(null,this$,v));
} else {
var m__5518__auto__ = (cljs.core.logic._walk["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__5518__auto__.call(null,this$,v));
} else {
throw cljs.core.missing_protocol("ISubstitutions.-walk",this$);
}
}
});
cljs.core.logic._walk = (function cljs$core$logic$_walk(this$,v){
if((((!((this$ == null)))) && ((!((this$.cljs$core$logic$ISubstitutions$_walk$arity$2 == null)))))){
return this$.cljs$core$logic$ISubstitutions$_walk$arity$2(this$,v);
} else {
return cljs$core$logic$ISubstitutions$_walk$dyn_31135(this$,v);
}
});

var cljs$core$logic$ISubstitutions$_walk_STAR_$dyn_31136 = (function (this$,v){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (cljs.core.logic._walk_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__5520__auto__.call(null,this$,v));
} else {
var m__5518__auto__ = (cljs.core.logic._walk_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__5518__auto__.call(null,this$,v));
} else {
throw cljs.core.missing_protocol("ISubstitutions.-walk*",this$);
}
}
});
cljs.core.logic._walk_STAR_ = (function cljs$core$logic$_walk_STAR_(this$,v){
if((((!((this$ == null)))) && ((!((this$.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2 == null)))))){
return this$.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2(this$,v);
} else {
return cljs$core$logic$ISubstitutions$_walk_STAR_$dyn_31136(this$,v);
}
});

var cljs$core$logic$ISubstitutions$_unify$dyn_31137 = (function (this$,u,v){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (cljs.core.logic._unify[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(this$,u,v) : m__5520__auto__.call(null,this$,u,v));
} else {
var m__5518__auto__ = (cljs.core.logic._unify["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(this$,u,v) : m__5518__auto__.call(null,this$,u,v));
} else {
throw cljs.core.missing_protocol("ISubstitutions.-unify",this$);
}
}
});
cljs.core.logic._unify = (function cljs$core$logic$_unify(this$,u,v){
if((((!((this$ == null)))) && ((!((this$.cljs$core$logic$ISubstitutions$_unify$arity$3 == null)))))){
return this$.cljs$core$logic$ISubstitutions$_unify$arity$3(this$,u,v);
} else {
return cljs$core$logic$ISubstitutions$_unify$dyn_31137(this$,u,v);
}
});

var cljs$core$logic$ISubstitutions$_reify_lvar_name$dyn_31144 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (cljs.core.logic._reify_lvar_name[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (cljs.core.logic._reify_lvar_name["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ISubstitutions.-reify-lvar-name",_);
}
}
});
cljs.core.logic._reify_lvar_name = (function cljs$core$logic$_reify_lvar_name(_){
if((((!((_ == null)))) && ((!((_.cljs$core$logic$ISubstitutions$_reify_lvar_name$arity$1 == null)))))){
return _.cljs$core$logic$ISubstitutions$_reify_lvar_name$arity$1(_);
} else {
return cljs$core$logic$ISubstitutions$_reify_lvar_name$dyn_31144(_);
}
});

var cljs$core$logic$ISubstitutions$_reify_STAR_$dyn_31149 = (function (this$,v){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (cljs.core.logic._reify_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__5520__auto__.call(null,this$,v));
} else {
var m__5518__auto__ = (cljs.core.logic._reify_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__5518__auto__.call(null,this$,v));
} else {
throw cljs.core.missing_protocol("ISubstitutions.-reify*",this$);
}
}
});
cljs.core.logic._reify_STAR_ = (function cljs$core$logic$_reify_STAR_(this$,v){
if((((!((this$ == null)))) && ((!((this$.cljs$core$logic$ISubstitutions$_reify_STAR_$arity$2 == null)))))){
return this$.cljs$core$logic$ISubstitutions$_reify_STAR_$arity$2(this$,v);
} else {
return cljs$core$logic$ISubstitutions$_reify_STAR_$dyn_31149(this$,v);
}
});

var cljs$core$logic$ISubstitutions$_reify$dyn_31151 = (function (this$,v){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (cljs.core.logic._reify[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__5520__auto__.call(null,this$,v));
} else {
var m__5518__auto__ = (cljs.core.logic._reify["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__5518__auto__.call(null,this$,v));
} else {
throw cljs.core.missing_protocol("ISubstitutions.-reify",this$);
}
}
});
cljs.core.logic._reify = (function cljs$core$logic$_reify(this$,v){
if((((!((this$ == null)))) && ((!((this$.cljs$core$logic$ISubstitutions$_reify$arity$2 == null)))))){
return this$.cljs$core$logic$ISubstitutions$_reify$arity$2(this$,v);
} else {
return cljs$core$logic$ISubstitutions$_reify$dyn_31151(this$,v);
}
});






cljs.core.logic.not_found = ({});
/**
 * Similar to Scheme assq, xs must be a List of Pairs
 */
cljs.core.logic.assq = (function cljs$core$logic$assq(k,xs){
var xs__$1 = xs.cljs$core$ISeqable$_seq$arity$1(null);
while(true){
if((xs__$1 == null)){
return cljs.core.logic.not_found;
} else {
var x = cljs.core._first(xs__$1);
var lhs = x.lhs;
if((k === lhs)){
return x.rhs;
} else {
var G__31157 = cljs.core._next(xs__$1);
xs__$1 = G__31157;
continue;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.logic.ITake}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.logic.IBind}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.logic.IMPlus}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.logic.ISubstitutions}
*/
cljs.core.logic.Substitutions = (function (s,c,_meta){
this.s = s;
this.c = c;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2149974016;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.logic.Substitutions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.logic.Substitutions(self__.s,self__.c,new_meta));
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return (((this$__$1 === o)) || ((((o instanceof cljs.core.logic.Substitutions)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.s,o.s)))));
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer(self__.s,writer,opts);
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_reify_STAR_$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
var v__$1 = this$__$1.cljs$core$logic$ISubstitutions$_walk$arity$2(null,v);
return cljs.core.logic._reify_term(v__$1,this$__$1);
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3 = (function (this$,u,v){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.logic.Substitutions(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.s,(new cljs.core.logic.Pair(u,v))),self__.c,self__._meta));
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_ext$arity$3 = (function (this$,u,v){
var self__ = this;
var this$__$1 = this;
if(((new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695).cljs$core$IFn$_invoke$arity$1(self__._meta)) && (this$__$1.cljs$core$logic$ISubstitutions$_occurs_check$arity$3(null,u,v)))){
return (cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.logic.fail.call(null,this$__$1));
} else {
return this$__$1.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,u,v);
}
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_walk$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
if(cljs.core.logic.lvar_QMARK_(v)){
var rhs = cljs.core.logic.assq(v,self__.s);
var vp = this$__$1.cljs$core$logic$ISubstitutions$_walk$arity$2(null,rhs);
if((cljs.core.logic.not_found === vp)){
return v;
} else {
return vp;
}
} else {
return v;

}
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_unify$arity$3 = (function (this$,u,v){
var self__ = this;
var this$__$1 = this;
if((u === v)){
return this$__$1;
} else {
var u__$1 = this$__$1.cljs$core$logic$ISubstitutions$_walk$arity$2(null,u);
var v__$1 = this$__$1.cljs$core$logic$ISubstitutions$_walk$arity$2(null,v);
if((u__$1 === v__$1)){
return this$__$1;
} else {
return cljs.core.logic._unify_terms(u__$1,v__$1,this$__$1);
}
}
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
var v__$1 = this$__$1.cljs$core$logic$ISubstitutions$_walk$arity$2(null,v);
return cljs.core.logic._walk_term(v__$1,this$__$1);
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_reify$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
var v__$1 = this$__$1.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2(null,v);
return cljs.core.logic.empty_s.cljs$core$logic$ISubstitutions$_reify_STAR_$arity$2(null,v__$1).cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2(null,v__$1);
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_occurs_check$arity$3 = (function (this$,u,v){
var self__ = this;
var this$__$1 = this;
var v__$1 = this$__$1.cljs$core$logic$ISubstitutions$_walk$arity$2(null,v);
return cljs.core.logic._occurs_check_term(v__$1,u,this$__$1);
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_reify_lvar_name$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((""+"_."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.s))));
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$IBind$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){
var self__ = this;
var this$__$1 = this;
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(this$__$1) : g.call(null,this$__$1));
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$IMPlus$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return (cljs.core.logic.choice.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.choice.cljs$core$IFn$_invoke$arity$2(this$__$1,f) : cljs.core.logic.choice.call(null,this$__$1,f));
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$ITake$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(cljs.core.logic.Substitutions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
}));

(cljs.core.logic.Substitutions.cljs$lang$type = true);

(cljs.core.logic.Substitutions.cljs$lang$ctorStr = "cljs.core.logic/Substitutions");

(cljs.core.logic.Substitutions.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.logic/Substitutions");
}));

/**
 * Positional factory function for cljs.core.logic/Substitutions.
 */
cljs.core.logic.__GT_Substitutions = (function cljs$core$logic$__GT_Substitutions(s,c,_meta){
return (new cljs.core.logic.Substitutions(s,c,_meta));
});

cljs.core.logic.make_s = (function cljs$core$logic$make_s(var_args){
var G__29648 = arguments.length;
switch (G__29648) {
case 1:
return cljs.core.logic.make_s.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.logic.make_s.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.logic.make_s.cljs$core$IFn$_invoke$arity$1 = (function (s){
return (new cljs.core.logic.Substitutions(s,cljs.core.List.EMPTY,null));
}));

(cljs.core.logic.make_s.cljs$core$IFn$_invoke$arity$2 = (function (s,c){
return (new cljs.core.logic.Substitutions(s,c,null));
}));

(cljs.core.logic.make_s.cljs$lang$maxFixedArity = 2);

cljs.core.logic.empty_s = cljs.core.logic.make_s.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,null);
cljs.core.logic.subst_QMARK_ = (function cljs$core$logic$subst_QMARK_(x){
return (x instanceof cljs.core.logic.Substitutions);
});
cljs.core.logic.to_s = (function cljs$core$logic$to_s(v){
var s = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (l,p__29651){
var vec__29653 = p__29651;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29653,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29653,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(l,cljs.core.logic.pair(k,v__$1));
}),cljs.core.List.EMPTY,v);
return cljs.core.logic.make_s.cljs$core$IFn$_invoke$arity$1(s);
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.logic.IUnifyWithObject}
 * @implements {cljs.core.logic.IUnifyWithNil}
 * @implements {cljs.core.logic.IUnifyWithLSeq}
 * @implements {cljs.core.logic.IUnifyTerms}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.logic.IWalkTerm}
 * @implements {cljs.core.logic.IOccursCheckTerm}
 * @implements {cljs.core.logic.IReifyTerm}
 * @implements {cljs.core.logic.IUnifyWithLVar}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.logic.IUnifyWithSequential}
 * @implements {cljs.core.logic.IUnifyWithMap}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.logic.LVar = (function (name,meta){
this.name = name;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 2154168320;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.logic.LVar.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
}));

(cljs.core.logic.LVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._write(writer,(""+"<lvar:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+">"));
}));

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithMap$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return s.cljs$core$logic$ISubstitutions$_ext$arity$3(null,v__$1,u);
}));

(cljs.core.logic.LVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
}));

(cljs.core.logic.LVar.prototype.cljs$core$logic$IOccursCheckTerm$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LVar.prototype.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3 = (function (v,x,s){
var self__ = this;
var v__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s.cljs$core$logic$ISubstitutions$_walk$arity$2(null,v__$1),x);
}));

(cljs.core.logic.LVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._hash(self__.name);
}));

(cljs.core.logic.LVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
var and__5160__auto__ = (o instanceof cljs.core.logic.LVar);
if(and__5160__auto__){
var o__$1 = o;
return (self__.name === o__$1.name);
} else {
return and__5160__auto__;
}
}));

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLVar$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,u,v__$1);
}));

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithSequential$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return s.cljs$core$logic$ISubstitutions$_ext$arity$3(null,v__$1,u);
}));

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyTerms$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){
var self__ = this;
var u__$1 = this;
return cljs.core.logic._unify_with_lvar(v,u__$1,s);
}));

(cljs.core.logic.LVar.prototype.cljs$core$logic$IWalkTerm$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LVar.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){
var self__ = this;
var v__$1 = this;
return v__$1;
}));

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLSeq$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return s.cljs$core$logic$ISubstitutions$_ext$arity$3(null,v__$1,u);
}));

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithObject$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return s.cljs$core$logic$ISubstitutions$_ext$arity$3(null,v__$1,u);
}));

(cljs.core.logic.LVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.logic.LVar(self__.name,self__.meta));
}));

(cljs.core.logic.LVar.prototype.cljs$core$logic$IReifyTerm$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LVar.prototype.cljs$core$logic$IReifyTerm$_reify_term$arity$2 = (function (v,s){
var self__ = this;
var v__$1 = this;
return s.cljs$core$logic$ISubstitutions$_ext$arity$3(null,v__$1,s.cljs$core$logic$ISubstitutions$_reify_lvar_name$arity$1(null));
}));

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithNil$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,v__$1,u);
}));

(cljs.core.logic.LVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
}));

(cljs.core.logic.LVar.cljs$lang$type = true);

(cljs.core.logic.LVar.cljs$lang$ctorStr = "cljs.core.logic/LVar");

(cljs.core.logic.LVar.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.logic/LVar");
}));

/**
 * Positional factory function for cljs.core.logic/LVar.
 */
cljs.core.logic.__GT_LVar = (function cljs$core$logic$__GT_LVar(name,meta){
return (new cljs.core.logic.LVar(name,meta));
});

cljs.core.logic.lvar_sym_counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
cljs.core.logic.lvar = (function cljs$core$logic$lvar(var_args){
var G__29699 = arguments.length;
switch (G__29699) {
case 0:
return cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"gen","gen",1783106829,null));
}));

(cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1 = (function (name){
var name__$1 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.lvar_sym_counter,cljs.core.inc)));
return (new cljs.core.logic.LVar(name__$1,null));
}));

(cljs.core.logic.lvar.cljs$lang$maxFixedArity = 1);


/**
 * @interface
 */
cljs.core.logic.LConsSeq = function(){};

var cljs$core$logic$LConsSeq$_lfirst$dyn_31290 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (cljs.core.logic._lfirst[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (cljs.core.logic._lfirst["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("LConsSeq.-lfirst",this$);
}
}
});
cljs.core.logic._lfirst = (function cljs$core$logic$_lfirst(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$logic$LConsSeq$_lfirst$arity$1 == null)))))){
return this$.cljs$core$logic$LConsSeq$_lfirst$arity$1(this$);
} else {
return cljs$core$logic$LConsSeq$_lfirst$dyn_31290(this$);
}
});

var cljs$core$logic$LConsSeq$_lnext$dyn_31309 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (cljs.core.logic._lnext[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (cljs.core.logic._lnext["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("LConsSeq.-lnext",this$);
}
}
});
cljs.core.logic._lnext = (function cljs$core$logic$_lnext(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$logic$LConsSeq$_lnext$arity$1 == null)))))){
return this$.cljs$core$logic$LConsSeq$_lnext$arity$1(this$);
} else {
return cljs$core$logic$LConsSeq$_lnext$dyn_31309(this$);
}
});


cljs.core.logic.failed_QMARK_ = (function cljs$core$logic$failed_QMARK_(x){
return (x instanceof cljs.core.logic.Fail);
});
cljs.core.logic.lcons_QMARK_ = (function cljs$core$logic$lcons_QMARK_(x){
return (x instanceof cljs.core.logic.LCons);
});
cljs.core.logic.lcons_pr_seq = (function cljs$core$logic$lcons_pr_seq(x){
if(cljs.core.logic.lcons_QMARK_(x)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(cljs.core.logic._lfirst(x),(function (){var G__29840 = cljs.core.logic._lnext(x);
return (cljs.core.logic.lcons_pr_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lcons_pr_seq.cljs$core$IFn$_invoke$arity$1(G__29840) : cljs.core.logic.lcons_pr_seq.call(null,G__29840));
})());
}),null,null));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));

}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.logic.IUnifyWithObject}
 * @implements {cljs.core.logic.IUnifyWithNil}
 * @implements {cljs.core.logic.IUnifyWithLSeq}
 * @implements {cljs.core.logic.IUnifyTerms}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.logic.IWalkTerm}
 * @implements {cljs.core.logic.LConsSeq}
 * @implements {cljs.core.logic.IOccursCheckTerm}
 * @implements {cljs.core.logic.IReifyTerm}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.logic.IUnifyWithSequential}
 * @implements {cljs.core.logic.IUnifyWithMap}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.logic.LCons = (function (a,d,meta){
this.a = a;
this.d = d;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 2149974016;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.logic.LCons.prototype.cljs$core$logic$LConsSeq$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LCons.prototype.cljs$core$logic$LConsSeq$_lfirst$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
}));

(cljs.core.logic.LCons.prototype.cljs$core$logic$LConsSeq$_lnext$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.d;
}));

(cljs.core.logic.LCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,cljs.core.logic.lcons_pr_seq(this$__$1));
}));

(cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithMap$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return (cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.logic.fail.call(null,s));
}));

(cljs.core.logic.LCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
}));

(cljs.core.logic.LCons.prototype.cljs$core$logic$IOccursCheckTerm$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LCons.prototype.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3 = (function (v,x,s){
var self__ = this;
var v__$1 = this;
var v__$2 = v__$1;
var x__$1 = x;
var s__$1 = s;
while(true){
if(cljs.core.logic.lcons_QMARK_(v__$2)){
var or__5162__auto__ = cljs.core.logic._occurs_check(s__$1,x__$1,cljs.core.logic._lfirst(v__$2));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var G__31326 = cljs.core.logic._lnext(v__$2);
var G__31327 = x__$1;
var G__31328 = s__$1;
v__$2 = G__31326;
x__$1 = G__31327;
s__$1 = G__31328;
continue;
}
} else {
return cljs.core.logic._occurs_check(s__$1,x__$1,v__$2);
}
break;
}
}));

(cljs.core.logic.LCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
var or__5162__auto__ = (this$__$1 === o);
if(or__5162__auto__){
return or__5162__auto__;
} else {
var and__5160__auto__ = (o instanceof cljs.core.logic.LCons);
if(and__5160__auto__){
var me = this$__$1;
var you = o;
while(true){
if((me == null)){
return (you == null);
} else {
if(cljs.core.logic.lvar_QMARK_(me)){
return true;
} else {
if(cljs.core.logic.lvar_QMARK_(you)){
return true;
} else {
if(((cljs.core.logic.lcons_QMARK_(me)) && (cljs.core.logic.lcons_QMARK_(you)))){
var mef = cljs.core.logic._lfirst(me);
var youf = cljs.core.logic._lfirst(you);
var and__5160__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mef,youf)) || (((cljs.core.logic.lvar_QMARK_(mef)) || (cljs.core.logic.lvar_QMARK_(youf)))));
if(and__5160__auto____$1){
var G__31334 = cljs.core.logic._lnext(me);
var G__31335 = cljs.core.logic._lnext(you);
me = G__31334;
you = G__31335;
continue;
} else {
return and__5160__auto____$1;
}
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(me,you);

}
}
}
}
break;
}
} else {
return and__5160__auto__;
}
}
}));

(cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithSequential$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic._unify_with_lseq(u,v__$1,s);
}));

(cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyTerms$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){
var self__ = this;
var u__$1 = this;
return cljs.core.logic._unify_with_lseq(v,u__$1,s);
}));

(cljs.core.logic.LCons.prototype.cljs$core$logic$IWalkTerm$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LCons.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){
var self__ = this;
var v__$1 = this;
var G__29884 = s.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2(null,v__$1.cljs$core$logic$LConsSeq$_lfirst$arity$1(null));
var G__29885 = s.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2(null,v__$1.cljs$core$logic$LConsSeq$_lnext$arity$1(null));
return (cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2(G__29884,G__29885) : cljs.core.logic.lcons.call(null,G__29884,G__29885));
}));

(cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithLSeq$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
var u__$1 = u;
var v__$2 = v__$1;
var s__$1 = s;
while(true){
if(cljs.core.logic.lvar_QMARK_(u__$1)){
return cljs.core.logic._unify(s__$1,u__$1,v__$2);
} else {
if(cljs.core.logic.lvar_QMARK_(v__$2)){
return cljs.core.logic._unify(s__$1,v__$2,u__$1);
} else {
if(((cljs.core.logic.lcons_QMARK_(u__$1)) && (cljs.core.logic.lcons_QMARK_(v__$2)))){
var s__$2 = cljs.core.logic._unify(s__$1,cljs.core.logic._lfirst(u__$1),cljs.core.logic._lfirst(v__$2));
if((!(cljs.core.logic.failed_QMARK_(s__$2)))){
var G__31345 = cljs.core.logic._lnext(u__$1);
var G__31346 = cljs.core.logic._lnext(v__$2);
var G__31347 = s__$2;
u__$1 = G__31345;
v__$2 = G__31346;
s__$1 = G__31347;
continue;
} else {
return s__$2;
}
} else {
return cljs.core.logic._unify(s__$1,u__$1,v__$2);

}
}
}
break;
}
}));

(cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithObject$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return (cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.logic.fail.call(null,s));
}));

(cljs.core.logic.LCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.logic.LCons(self__.a,self__.d,new_meta));
}));

(cljs.core.logic.LCons.prototype.cljs$core$logic$IReifyTerm$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LCons.prototype.cljs$core$logic$IReifyTerm$_reify_term$arity$2 = (function (v,s){
var self__ = this;
var v__$1 = this;
var v__$2 = v__$1;
var s__$1 = s;
while(true){
if(cljs.core.logic.lcons_QMARK_(v__$2)){
var G__31395 = cljs.core.logic._lnext(v__$2);
var G__31396 = cljs.core.logic._reify_STAR_(s__$1,cljs.core.logic._lfirst(v__$2));
v__$2 = G__31395;
s__$1 = G__31396;
continue;
} else {
return cljs.core.logic._reify_STAR_(s__$1,v__$2);
}
break;
}
}));

(cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithNil$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return (cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.logic.fail.call(null,s));
}));

(cljs.core.logic.LCons.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
}));

(cljs.core.logic.LCons.cljs$lang$type = true);

(cljs.core.logic.LCons.cljs$lang$ctorStr = "cljs.core.logic/LCons");

(cljs.core.logic.LCons.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.logic/LCons");
}));

/**
 * Positional factory function for cljs.core.logic/LCons.
 */
cljs.core.logic.__GT_LCons = (function cljs$core$logic$__GT_LCons(a,d,meta){
return (new cljs.core.logic.LCons(a,d,meta));
});

/**
 * Constructs a sequence a with an improper tail d if d is a logic variable.
 */
cljs.core.logic.lcons = (function cljs$core$logic$lcons(a,d){
if(((cljs.core.coll_QMARK_(d)) || ((d == null)))){
return cljs.core.cons(a,cljs.core.seq(d));
} else {
return (new cljs.core.logic.LCons(a,d,null));
}
});
(cljs.core.logic.IUnifyTerms["null"] = true);

(cljs.core.logic._unify_terms["null"] = (function (u,v,s){
return cljs.core.logic._unify_with_nil(v,u,s);
}));

(cljs.core.logic.IUnifyTerms["_"] = true);

(cljs.core.logic._unify_terms["_"] = (function (u,v,s){
if(cljs.core.sequential_QMARK_(u)){
return cljs.core.logic._unify_with_seq(v,u,s);
} else {
return cljs.core.logic._unify_with_object(v,u,s);
}
}));

(cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyTerms$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){
var u__$1 = this;
return cljs.core.logic._unify_with_map(v,u__$1,s);
}));

(cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyTerms$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){
var u__$1 = this;
return cljs.core.logic._unify_with_map(v,u__$1,s);
}));
(cljs.core.logic.IUnifyWithNil["null"] = true);

(cljs.core.logic._unify_with_nil["null"] = (function (v,u,s){
return s;
}));

(cljs.core.logic.IUnifyWithNil["_"] = true);

(cljs.core.logic._unify_with_nil["_"] = (function (v,u,s){
return (cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.logic.fail.call(null,s));
}));
(cljs.core.logic.IUnifyWithObject["null"] = true);

(cljs.core.logic._unify_with_object["null"] = (function (v,u,s){
return (cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.logic.fail.call(null,s));
}));

(cljs.core.logic.IUnifyWithObject["_"] = true);

(cljs.core.logic._unify_with_object["_"] = (function (v,u,s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(u,v)){
return s;
} else {
return (cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.logic.fail.call(null,s));
}
}));
(cljs.core.logic.IUnifyWithLVar["null"] = true);

(cljs.core.logic._unify_with_lvar["null"] = (function (v,u,s){
return s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,u,v);
}));

(cljs.core.logic.IUnifyWithLVar["_"] = true);

(cljs.core.logic._unify_with_lvar["_"] = (function (v,u,s){
return s.cljs$core$logic$ISubstitutions$_ext$arity$3(null,u,v);
}));
(cljs.core.logic.IUnifyWithLSeq["null"] = true);

(cljs.core.logic._unify_with_lseq["null"] = (function (v,u,s){
return (cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.logic.fail.call(null,s));
}));

(cljs.core.logic.IUnifyWithLSeq["_"] = true);

(cljs.core.logic._unify_with_lseq["_"] = (function (v,u,s){
if(((cljs.core.sequential_QMARK_(v)) && ((!((v == null)))))){
var u__$1 = u;
var v__$1 = cljs.core._seq(v);
var s__$1 = s;
while(true){
if((!((v__$1 == null)))){
if(cljs.core.logic.lcons_QMARK_(u__$1)){
var s__$2 = cljs.core.logic._unify(s__$1,cljs.core.logic._lfirst(u__$1),cljs.core._first(v__$1));
if((!(cljs.core.logic.failed_QMARK_(s__$2)))){
var G__31408 = cljs.core.logic._lnext(u__$1);
var G__31409 = cljs.core._next(v__$1);
var G__31410 = s__$2;
u__$1 = G__31408;
v__$1 = G__31409;
s__$1 = G__31410;
continue;
} else {
return s__$2;
}
} else {
return cljs.core.logic._unify(s__$1,u__$1,v__$1);
}
} else {
if(cljs.core.logic.lvar_QMARK_(u__$1)){
return cljs.core.logic._unify(s__$1,u__$1,cljs.core.List.EMPTY);
} else {
return (cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1(s__$1) : cljs.core.logic.fail.call(null,s__$1));
}
}
break;
}
} else {
return (cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.logic.fail.call(null,s));
}
}));
(cljs.core.logic.IUnifyWithSequential["null"] = true);

(cljs.core.logic._unify_with_seq["null"] = (function (v,u,s){
return (cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.logic.fail.call(null,s));
}));

(cljs.core.logic.IUnifyWithSequential["_"] = true);

(cljs.core.logic._unify_with_seq["_"] = (function (v,u,s){
if(((cljs.core.sequential_QMARK_(v)) && ((!((v == null)))))){
var u__$1 = u.cljs$core$ISeqable$_seq$arity$1(null);
var v__$1 = v.cljs$core$ISeqable$_seq$arity$1(null);
var s__$1 = s;
while(true){
if((!((u__$1 == null)))){
if((!((v__$1 == null)))){
var s__$2 = cljs.core.logic._unify(s__$1,cljs.core._first(u__$1),cljs.core._first(v__$1));
if((!(cljs.core.logic.failed_QMARK_(s__$2)))){
var G__31414 = cljs.core._next(u__$1);
var G__31415 = cljs.core._next(v__$1);
var G__31416 = s__$2;
u__$1 = G__31414;
v__$1 = G__31415;
s__$1 = G__31416;
continue;
} else {
return s__$2;
}
} else {
return (cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1(s__$1) : cljs.core.logic.fail.call(null,s__$1));
}
} else {
if((!((v__$1 == null)))){
return (cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1(s__$1) : cljs.core.logic.fail.call(null,s__$1));
} else {
return s__$1;
}
}
break;
}
} else {
return (cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.logic.fail.call(null,s));
}
}));
cljs.core.logic.unify_with_map_STAR_ = (function cljs$core$logic$unify_with_map_STAR_(v,u,s){
if((!((cljs.core.count(v) === cljs.core.count(u))))){
return (cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.logic.fail.call(null,s));
} else {
var ks = cljs.core.seq(cljs.core.keys(u));
var s__$1 = s;
while(true){
if(ks){
var kf = cljs.core.first(ks);
var vf = cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,kf,cljs.core.logic.not_found);
if((vf === cljs.core.logic.not_found)){
return (cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1(s__$1) : cljs.core.logic.fail.call(null,s__$1));
} else {
var s__$2 = cljs.core.logic._unify(s__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(u,kf),vf);
if((!(cljs.core.logic.failed_QMARK_(s__$2)))){
var G__31420 = cljs.core.next(ks);
var G__31421 = s__$2;
ks = G__31420;
s__$1 = G__31421;
continue;
} else {
return (cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1(s__$2) : cljs.core.logic.fail.call(null,s__$2));
}
}
} else {
return s__$1;
}
break;
}
}
});
(cljs.core.logic.IUnifyWithMap["null"] = true);

(cljs.core.logic._unify_with_map["null"] = (function (v,u,s){
return (cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.logic.fail.call(null,s));
}));

(cljs.core.logic.IUnifyWithMap["_"] = true);

(cljs.core.logic._unify_with_map["_"] = (function (v,u,s){
return (cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.fail.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.logic.fail.call(null,s));
}));

(cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithMap$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){
var v__$1 = this;
return cljs.core.logic.unify_with_map_STAR_(v__$1,u,s);
}));

(cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithMap$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){
var v__$1 = this;
return cljs.core.logic.unify_with_map_STAR_(v__$1,u,s);
}));
(cljs.core.logic.IReifyTerm["null"] = true);

(cljs.core.logic._reify_term["null"] = (function (v,s){
return s;
}));

(cljs.core.logic.IReifyTerm["_"] = true);

(cljs.core.logic._reify_term["_"] = (function (v,s){
if(cljs.core.sequential_QMARK_(v)){
var v__$1 = v;
var s__$1 = s;
while(true){
if(cljs.core.seq(v__$1)){
var G__31429 = cljs.core.next(v__$1);
var G__31430 = cljs.core.logic._reify_STAR_(s__$1,cljs.core.first(v__$1));
v__$1 = G__31429;
s__$1 = G__31430;
continue;
} else {
return s__$1;
}
break;
}
} else {
return s;
}
}));
cljs.core.logic.walk_term_map_STAR_ = (function cljs$core$logic$walk_term_map_STAR_(v,s){
var v__$1 = v.cljs$core$ISeqable$_seq$arity$1(null);
var r = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((!((v__$1 == null)))){
var vec__30099 = cljs.core._first(v__$1);
var vfk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30099,(0),null);
var vfv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30099,(1),null);
var G__31432 = cljs.core._next(v__$1);
var G__31433 = cljs.core._assoc_BANG_(r,vfk,s.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2(null,vfv));
v__$1 = G__31432;
r = G__31433;
continue;
} else {
return cljs.core.persistent_BANG_(r);
}
break;
}
});
(cljs.core.logic.IWalkTerm["null"] = true);

(cljs.core.logic._walk_term["null"] = (function (v,s){
return null;
}));

(cljs.core.logic.IWalkTerm["_"] = true);

(cljs.core.logic._walk_term["_"] = (function (v,s){
if(cljs.core.sequential_QMARK_(v)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30103_SHARP_){
return s.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2(null,p1__30103_SHARP_);
}),v);
} else {
return v;
}
}));

(cljs.core.PersistentVector.prototype.cljs$core$logic$IWalkTerm$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){
var v__$1 = this;
var v__$2 = v__$1.cljs$core$ISeqable$_seq$arity$1(null);
var r = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if((!((v__$2 == null)))){
var G__31438 = cljs.core._next(v__$2);
var G__31439 = cljs.core._conj_BANG_(r,s.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2(null,cljs.core.first(v__$2)));
v__$2 = G__31438;
r = G__31439;
continue;
} else {
return cljs.core.persistent_BANG_(r);
}
break;
}
}));

(cljs.core.PersistentHashMap.prototype.cljs$core$logic$IWalkTerm$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){
var v__$1 = this;
return cljs.core.logic.walk_term_map_STAR_(v__$1,s);
}));
(cljs.core.logic.IOccursCheckTerm["null"] = true);

(cljs.core.logic._occurs_check_term["null"] = (function (v,x,s){
return false;
}));

(cljs.core.logic.IOccursCheckTerm["_"] = true);

(cljs.core.logic._occurs_check_term["_"] = (function (v,x,s){
if(cljs.core.sequential_QMARK_(v)){
var v__$1 = cljs.core.seq(v);
var x__$1 = x;
var s__$1 = s;
while(true){
if((!((v__$1 == null)))){
var or__5162__auto__ = cljs.core.logic._occurs_check(s__$1,x__$1,cljs.core._first(v__$1));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var G__31481 = cljs.core._next(v__$1);
var G__31485 = x__$1;
var G__31486 = s__$1;
v__$1 = G__31481;
x__$1 = G__31485;
s__$1 = G__31486;
continue;
}
} else {
return false;
}
break;
}
} else {
return false;
}
}));
cljs.core.logic.mplus = (function cljs$core$logic$mplus(a,f){
if((((!((a == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === a.cljs$core$logic$IMPlus$))))?true:false):false)){
return a.cljs$core$logic$IMPlus$_mplus$arity$2(null,f);
} else {
return (new cljs.core.logic.Choice(a,f));
}
});
cljs.core.logic.take_STAR_ = (function cljs$core$logic$take_STAR_(x){
if((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$logic$ITake$))))?true:false):false)){
return x.cljs$core$logic$ITake$_take_STAR_$arity$1(null);
} else {
return (new cljs.core.List(null,x,null,(1),null));
}
});

/**
* @constructor
 * @implements {cljs.core.logic.ITake}
 * @implements {cljs.core.logic.IBind}
 * @implements {cljs.core.logic.IMPlus}
*/
cljs.core.logic.Choice = (function (a,f){
this.a = a;
this.f = f;
});
(cljs.core.logic.Choice.prototype.cljs$core$logic$IBind$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Choice.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){
var self__ = this;
var this$__$1 = this;
return cljs.core.logic.mplus((g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(self__.a) : g.call(null,self__.a)),(new cljs.core.logic.Inc((function (){
return self__.f.cljs$core$logic$IBind$_bind$arity$2(null,g);
}))));
}));

(cljs.core.logic.Choice.prototype.cljs$core$logic$IMPlus$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Choice.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,fp){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.logic.Choice(self__.a,(new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus((fp.cljs$core$IFn$_invoke$arity$0 ? fp.cljs$core$IFn$_invoke$arity$0() : fp.call(null)),self__.f);
})))));
}));

(cljs.core.logic.Choice.prototype.cljs$core$logic$ITake$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Choice.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(self__.a,(new cljs.core.LazySeq(null,(function (){
return cljs.core.logic.take_STAR_(self__.f);
}),null,null)));
}),null,null));
}));

(cljs.core.logic.Choice.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null);
}));

(cljs.core.logic.Choice.cljs$lang$type = true);

(cljs.core.logic.Choice.cljs$lang$ctorStr = "cljs.core.logic/Choice");

(cljs.core.logic.Choice.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.logic/Choice");
}));

/**
 * Positional factory function for cljs.core.logic/Choice.
 */
cljs.core.logic.__GT_Choice = (function cljs$core$logic$__GT_Choice(a,f){
return (new cljs.core.logic.Choice(a,f));
});

cljs.core.logic.choice = (function cljs$core$logic$choice(a,f){
return (new cljs.core.logic.Choice(a,f));
});

/**
* @constructor
 * @implements {cljs.core.logic.ITake}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.logic.IBind}
 * @implements {cljs.core.logic.IMPlus}
*/
cljs.core.logic.Inc = (function (f){
this.f = f;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.logic.Inc.prototype.call = (function (unused__2830__auto__){
var self__ = this;
var self__ = this;
var G__30212 = (arguments.length - (1));
switch (G__30212) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error((""+"Invalid arity: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1))))));

}
}));

(cljs.core.logic.Inc.prototype.apply = (function (self__,args30208){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat((((args30208.length > (20)))?(function (){var G__30218 = args30208.slice((0),(20));
G__30218.push(args30208.slice((20)));

return G__30218;
})():args30208)));
}));

(cljs.core.logic.Inc.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
}));

(cljs.core.logic.Inc.prototype.cljs$core$logic$IBind$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Inc.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.logic.Inc((function (){
var a = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
return a.cljs$core$logic$IBind$_bind$arity$2(null,g);
})));
}));

(cljs.core.logic.Inc.prototype.cljs$core$logic$IMPlus$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Inc.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,fp){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus((fp.cljs$core$IFn$_invoke$arity$0 ? fp.cljs$core$IFn$_invoke$arity$0() : fp.call(null)),this$__$1);
})));
}));

(cljs.core.logic.Inc.prototype.cljs$core$logic$ITake$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Inc.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.logic.take_STAR_((self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null)));
}),null,null));
}));

(cljs.core.logic.Inc.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null);
}));

(cljs.core.logic.Inc.cljs$lang$type = true);

(cljs.core.logic.Inc.cljs$lang$ctorStr = "cljs.core.logic/Inc");

(cljs.core.logic.Inc.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.logic/Inc");
}));

/**
 * Positional factory function for cljs.core.logic/Inc.
 */
cljs.core.logic.__GT_Inc = (function cljs$core$logic$__GT_Inc(f){
return (new cljs.core.logic.Inc(f));
});


/**
* @constructor
 * @implements {cljs.core.logic.ITake}
 * @implements {cljs.core.logic.IBind}
 * @implements {cljs.core.logic.IMPlus}
*/
cljs.core.logic.Fail = (function (a){
this.a = a;
});
(cljs.core.logic.Fail.prototype.cljs$core$logic$IBind$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Fail.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(cljs.core.logic.Fail.prototype.cljs$core$logic$IMPlus$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Fail.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,fp){
var self__ = this;
var this$__$1 = this;
return fp;
}));

(cljs.core.logic.Fail.prototype.cljs$core$logic$ITake$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Fail.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.List.EMPTY;
}));

(cljs.core.logic.Fail.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null)], null);
}));

(cljs.core.logic.Fail.cljs$lang$type = true);

(cljs.core.logic.Fail.cljs$lang$ctorStr = "cljs.core.logic/Fail");

(cljs.core.logic.Fail.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.logic/Fail");
}));

/**
 * Positional factory function for cljs.core.logic/Fail.
 */
cljs.core.logic.__GT_Fail = (function cljs$core$logic$__GT_Fail(a){
return (new cljs.core.logic.Fail(a));
});

/**
 * A goal that always succeeds.
 */
cljs.core.logic.succeed = (function cljs$core$logic$succeed(a){
return a;
});
/**
 * A goal that always fails.
 */
cljs.core.logic.fail = (function cljs$core$logic$fail(a){
return (new cljs.core.logic.Fail(a));
});
cljs.core.logic.s_SHARP_ = cljs.core.logic.succeed;
cljs.core.logic.u_SHARP_ = cljs.core.logic.fail;

/**
 * @interface
 */
cljs.core.logic.IIfA = function(){};

var cljs$core$logic$IIfA$_ifa$dyn_31553 = (function (b,gs,c){
var x__5519__auto__ = (((b == null))?null:b);
var m__5520__auto__ = (cljs.core.logic._ifa[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(b,gs,c) : m__5520__auto__.call(null,b,gs,c));
} else {
var m__5518__auto__ = (cljs.core.logic._ifa["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(b,gs,c) : m__5518__auto__.call(null,b,gs,c));
} else {
throw cljs.core.missing_protocol("IIfA.-ifa",b);
}
}
});
cljs.core.logic._ifa = (function cljs$core$logic$_ifa(b,gs,c){
if((((!((b == null)))) && ((!((b.cljs$core$logic$IIfA$_ifa$arity$3 == null)))))){
return b.cljs$core$logic$IIfA$_ifa$arity$3(b,gs,c);
} else {
return cljs$core$logic$IIfA$_ifa$dyn_31553(b,gs,c);
}
});


/**
 * @interface
 */
cljs.core.logic.IIfU = function(){};

var cljs$core$logic$IIfU$_ifu$dyn_31558 = (function (b,gs,c){
var x__5519__auto__ = (((b == null))?null:b);
var m__5520__auto__ = (cljs.core.logic._ifu[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(b,gs,c) : m__5520__auto__.call(null,b,gs,c));
} else {
var m__5518__auto__ = (cljs.core.logic._ifu["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(b,gs,c) : m__5518__auto__.call(null,b,gs,c));
} else {
throw cljs.core.missing_protocol("IIfU.-ifu",b);
}
}
});
cljs.core.logic._ifu = (function cljs$core$logic$_ifu(b,gs,c){
if((((!((b == null)))) && ((!((b.cljs$core$logic$IIfU$_ifu$arity$3 == null)))))){
return b.cljs$core$logic$IIfU$_ifu$arity$3(b,gs,c);
} else {
return cljs$core$logic$IIfU$_ifu$dyn_31558(b,gs,c);
}
});

(cljs.core.logic.Fail.prototype.cljs$core$logic$IIfA$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Fail.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){
var b__$1 = this;
if(cljs.core.truth_(c)){
return cljs.core.force(c);
} else {
return null;
}
}));
(cljs.core.logic.Fail.prototype.cljs$core$logic$IIfU$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Fail.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){
var b__$1 = this;
if(cljs.core.truth_(c)){
return cljs.core.force(c);
} else {
return null;
}
}));
(cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfA$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){
var b__$1 = this;
var b__$2 = b__$1;
var G__30319 = gs;
var vec__30320 = G__30319;
var seq__30321 = cljs.core.seq(vec__30320);
var first__30322 = cljs.core.first(seq__30321);
var seq__30321__$1 = cljs.core.next(seq__30321);
var g0 = first__30322;
var gr = seq__30321__$1;
var b__$3 = b__$2;
var G__30319__$1 = G__30319;
while(true){
var b__$4 = b__$3;
var vec__30331 = G__30319__$1;
var seq__30332 = cljs.core.seq(vec__30331);
var first__30333 = cljs.core.first(seq__30332);
var seq__30332__$1 = cljs.core.next(seq__30332);
var g0__$1 = first__30333;
var gr__$1 = seq__30332__$1;
if(cljs.core.truth_(g0__$1)){
var temp__5825__auto__ = (g0__$1.cljs$core$IFn$_invoke$arity$1 ? g0__$1.cljs$core$IFn$_invoke$arity$1(b__$4) : g0__$1.call(null,b__$4));
if(cljs.core.truth_(temp__5825__auto__)){
var b__$5 = temp__5825__auto__;
var G__31594 = b__$5;
var G__31595 = gr__$1;
b__$3 = G__31594;
G__30319__$1 = G__31595;
continue;
} else {
return null;
}
} else {
return b__$4;
}
break;
}
}));
(cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfU$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){
var b__$1 = this;
var b__$2 = b__$1;
var G__30341 = gs;
var vec__30342 = G__30341;
var seq__30343 = cljs.core.seq(vec__30342);
var first__30344 = cljs.core.first(seq__30343);
var seq__30343__$1 = cljs.core.next(seq__30343);
var g0 = first__30344;
var gr = seq__30343__$1;
var b__$3 = b__$2;
var G__30341__$1 = G__30341;
while(true){
var b__$4 = b__$3;
var vec__30355 = G__30341__$1;
var seq__30356 = cljs.core.seq(vec__30355);
var first__30357 = cljs.core.first(seq__30356);
var seq__30356__$1 = cljs.core.next(seq__30356);
var g0__$1 = first__30357;
var gr__$1 = seq__30356__$1;
if(cljs.core.truth_(g0__$1)){
var temp__5825__auto__ = (g0__$1.cljs$core$IFn$_invoke$arity$1 ? g0__$1.cljs$core$IFn$_invoke$arity$1(b__$4) : g0__$1.call(null,b__$4));
if(cljs.core.truth_(temp__5825__auto__)){
var b__$5 = temp__5825__auto__;
var G__31608 = b__$5;
var G__31609 = gr__$1;
b__$3 = G__31608;
G__30341__$1 = G__31609;
continue;
} else {
return null;
}
} else {
return b__$4;
}
break;
}
}));
(cljs.core.logic.Inc.prototype.cljs$core$logic$IIfA$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Inc.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){
var b__$1 = this;
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic._ifa((b__$1.cljs$core$IFn$_invoke$arity$0 ? b__$1.cljs$core$IFn$_invoke$arity$0() : b__$1.call(null)),gs,c);
})));
}));

(cljs.core.logic.Inc.prototype.cljs$core$logic$IIfU$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Inc.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){
var b__$1 = this;
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic._ifu((b__$1.cljs$core$IFn$_invoke$arity$0 ? b__$1.cljs$core$IFn$_invoke$arity$0() : b__$1.call(null)),gs,c);
})));
}));
(cljs.core.logic.Choice.prototype.cljs$core$logic$IIfA$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Choice.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){
var b__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.logic._bind,b__$1,gs);
}));
(cljs.core.logic.Choice.prototype.cljs$core$logic$IIfU$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Choice.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){
var b__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.logic._bind,b__$1.a,gs);
}));
/**
 * A relation where a is nil
 */
cljs.core.logic.nilo = (function cljs$core$logic$nilo(a){
return (function (a__28180__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__28180__auto__,null,a);
if(cljs.core.truth_(temp__5823__auto__)){
var b__28181__auto__ = temp__5823__auto__;
return b__28181__auto__;
} else {
return cljs.core.logic.fail(a__28180__auto__);
}
});
});
/**
 * A relation where a is the empty list
 */
cljs.core.logic.emptyo = (function cljs$core$logic$emptyo(a){
return (function (a__28180__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__28180__auto__,cljs.core.List.EMPTY,a);
if(cljs.core.truth_(temp__5823__auto__)){
var b__28181__auto__ = temp__5823__auto__;
return b__28181__auto__;
} else {
return cljs.core.logic.fail(a__28180__auto__);
}
});
});
/**
 * A relation where l is a collection, such that a is the first of l 
 *   and d is the rest of l
 */
cljs.core.logic.conso = (function cljs$core$logic$conso(a,d,l){
return (function (a__28180__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__28180__auto__,cljs.core.logic.lcons(a,d),l);
if(cljs.core.truth_(temp__5823__auto__)){
var b__28181__auto__ = temp__5823__auto__;
return b__28181__auto__;
} else {
return cljs.core.logic.fail(a__28180__auto__);
}
});
});
/**
 * A relation where l is a collection, such that a is the first of l
 */
cljs.core.logic.firsto = (function cljs$core$logic$firsto(l,a){
return (function (a__28251__auto__){
return (new cljs.core.logic.Inc((function (){
var d = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"d","d",-682293345,null));
return cljs.core.logic._bind(a__28251__auto__,cljs.core.logic.conso(a,d,l));
})));
});
});
/**
 * A relation where l is a collection, such that d is the rest of l
 */
cljs.core.logic.resto = (function cljs$core$logic$resto(l,d){
return (function (a__28251__auto__){
return (new cljs.core.logic.Inc((function (){
var a = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"a","a",-482876059,null));
return cljs.core.logic._bind(a__28251__auto__,(function (a__28180__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__28180__auto__,cljs.core.logic.lcons(a,d),l);
if(cljs.core.truth_(temp__5823__auto__)){
var b__28181__auto__ = temp__5823__auto__;
return b__28181__auto__;
} else {
return cljs.core.logic.fail(a__28180__auto__);
}
}));
})));
});
});
/**
 * A relation where l is a collection, such that l contains x
 */
cljs.core.logic.membero = (function cljs$core$logic$membero(x,l){
return (function (a30551){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(a30551,(function (a__28251__auto__){
return (new cljs.core.logic.Inc((function (){
var tail = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tail","tail",494507963,null));
return cljs.core.logic._bind(a__28251__auto__,(function (a__28180__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__28180__auto__,cljs.core.logic.lcons(x,tail),l);
if(cljs.core.truth_(temp__5823__auto__)){
var b__28181__auto__ = temp__5823__auto__;
return b__28181__auto__;
} else {
return cljs.core.logic.fail(a__28180__auto__);
}
}));
})));
})),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a30551,(function (a__28251__auto__){
return (new cljs.core.logic.Inc((function (){
var head = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"head","head",869147608,null));
var tail = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tail","tail",494507963,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__28251__auto__,(function (a__28180__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__28180__auto__,cljs.core.logic.lcons(head,tail),l);
if(cljs.core.truth_(temp__5823__auto__)){
var b__28181__auto__ = temp__5823__auto__;
return b__28181__auto__;
} else {
return cljs.core.logic.fail(a__28180__auto__);
}
})),(cljs.core.logic.membero.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.membero.cljs$core$IFn$_invoke$arity$2(x,tail) : cljs.core.logic.membero.call(null,x,tail)));
})));
}));
}))));
})));
});
});
/**
 * A relation where x, y, and z are proper collections, 
 *   such that z is y appended to x
 */
cljs.core.logic.appendo = (function cljs$core$logic$appendo(x,y,z){
return (function (a30567){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus(cljs.core.logic._bind(a30567,(function (a__28251__auto__){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(cljs.core.logic._bind(a__28251__auto__,(function (a__28180__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__28180__auto__,cljs.core.List.EMPTY,x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__28181__auto__ = temp__5823__auto__;
return b__28181__auto__;
} else {
return cljs.core.logic.fail(a__28180__auto__);
}
})),(function (a__28251__auto____$1){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a__28251__auto____$1,(function (a__28180__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__28180__auto__,y,z);
if(cljs.core.truth_(temp__5823__auto__)){
var b__28181__auto__ = temp__5823__auto__;
return b__28181__auto__;
} else {
return cljs.core.logic.fail(a__28180__auto__);
}
}));
})));
}));
})));
})),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind(a30567,(function (a__28251__auto__){
return (new cljs.core.logic.Inc((function (){
var a = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"a","a",-482876059,null));
var d = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"d","d",-682293345,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__28251__auto__,(function (a__28180__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__28180__auto__,cljs.core.logic.lcons(a,d),x);
if(cljs.core.truth_(temp__5823__auto__)){
var b__28181__auto__ = temp__5823__auto__;
return b__28181__auto__;
} else {
return cljs.core.logic.fail(a__28180__auto__);
}
})),(function (a__28251__auto____$1){
return (new cljs.core.logic.Inc((function (){
var r = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"r","r",1169147337,null));
return cljs.core.logic._bind(cljs.core.logic._bind(a__28251__auto____$1,(function (a__28180__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__28180__auto__,cljs.core.logic.lcons(a,r),z);
if(cljs.core.truth_(temp__5823__auto__)){
var b__28181__auto__ = temp__5823__auto__;
return b__28181__auto__;
} else {
return cljs.core.logic.fail(a__28180__auto__);
}
})),(cljs.core.logic.appendo.cljs$core$IFn$_invoke$arity$3 ? cljs.core.logic.appendo.cljs$core$IFn$_invoke$arity$3(d,y,r) : cljs.core.logic.appendo.call(null,d,y,r)));
})));
}));
})));
}));
}))));
})));
});
});
cljs.core.logic.prefix = (function cljs$core$logic$prefix(s,_LT_s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,_LT_s)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__30586 = cljs.core.rest(s);
var G__30587 = _LT_s;
return (cljs.core.logic.prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.prefix.cljs$core$IFn$_invoke$arity$2(G__30586,G__30587) : cljs.core.logic.prefix.call(null,G__30586,G__30587));
})(),cljs.core.first(s));
}
});

/**
 * @interface
 */
cljs.core.logic.IUnifyWithPMap = function(){};

var cljs$core$logic$IUnifyWithPMap$unify_with_pmap$dyn_31645 = (function (pmap,u,s){
var x__5519__auto__ = (((pmap == null))?null:pmap);
var m__5520__auto__ = (cljs.core.logic.unify_with_pmap[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(pmap,u,s) : m__5520__auto__.call(null,pmap,u,s));
} else {
var m__5518__auto__ = (cljs.core.logic.unify_with_pmap["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(pmap,u,s) : m__5518__auto__.call(null,pmap,u,s));
} else {
throw cljs.core.missing_protocol("IUnifyWithPMap.unify-with-pmap",pmap);
}
}
});
cljs.core.logic.unify_with_pmap = (function cljs$core$logic$unify_with_pmap(pmap,u,s){
if((((!((pmap == null)))) && ((!((pmap.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3 == null)))))){
return pmap.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3(pmap,u,s);
} else {
return cljs$core$logic$IUnifyWithPMap$unify_with_pmap$dyn_31645(pmap,u,s);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.logic.IUnifyTerms}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.logic.IWalkTerm}
 * @implements {cljs.core.logic.IUnifyWithLVar}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.logic.IUnifyWithMap}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.logic.IUnifyWithPMap}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.logic.PMap = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.logic.PMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(cljs.core.logic.PMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k30597,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__30606 = k30597;
switch (G__30606) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30597,else__5472__auto__);

}
}));

(cljs.core.logic.PMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__30607){
var vec__30609 = p__30607;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30609,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30609,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(cljs.core.logic.PMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#cljs.core.logic.PMap{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(cljs.core.logic.PMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30596){
var self__ = this;
var G__30596__$1 = this;
return (new cljs.core.RecordIter((0),G__30596__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithMap$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
var ks = cljs.core.keys(v__$1);
var s__$1 = s;
while(true){
if(cljs.core.seq(ks)){
var kf = cljs.core.first(ks);
var uf = cljs.core.get.cljs$core$IFn$_invoke$arity$3(u,kf,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",85579791));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uf,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",85579791))){
return cljs.core.logic.fail(s__$1);
} else {
var s__$2 = cljs.core.logic._unify(s__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(v__$1,kf),uf);
if((!(cljs.core.logic.failed_QMARK_(s__$2)))){
var G__31647 = cljs.core.next(ks);
var G__31648 = s__$2;
ks = G__31647;
s__$1 = G__31648;
continue;
} else {
return s__$2;
}
}
} else {
return s__$1;
}
break;
}
}));

(cljs.core.logic.PMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.logic.PMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new cljs.core.logic.PMap(self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.logic.PMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(cljs.core.logic.PMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-1505615244 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(cljs.core.logic.PMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30598,other30599){
var self__ = this;
var this30598__$1 = this;
return (((!((other30599 == null)))) && ((((this30598__$1.constructor === other30599.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30598__$1.__extmap,other30599.__extmap)))));
}));

(cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithLVar$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic._ext_no_check(s,u,v__$1);
}));

(cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyTerms$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){
var self__ = this;
var u__$1 = this;
return cljs.core.logic.unify_with_pmap(v,u__$1,s);
}));

(cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithPMap$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return v__$1.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3(null,u,s);
}));

(cljs.core.logic.PMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new cljs.core.logic.PMap(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(cljs.core.logic.PMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k30597){
var self__ = this;
var this__5476__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k30597);
}));

(cljs.core.logic.PMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__30596){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__30667 = cljs.core.keyword_identical_QMARK_;
var expr__30668 = k__5478__auto__;
return (new cljs.core.logic.PMap(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__30596),null));
}));

(cljs.core.logic.PMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(cljs.core.logic.PMap.prototype.cljs$core$logic$IWalkTerm$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.PMap.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic.walk_term_map_STAR_(v__$1,s);
}));

(cljs.core.logic.PMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__30596){
var self__ = this;
var this__5468__auto____$1 = this;
return (new cljs.core.logic.PMap(G__30596,self__.__extmap,self__.__hash));
}));

(cljs.core.logic.PMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(cljs.core.logic.PMap.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cljs.core.logic.PMap.cljs$lang$type = true);

(cljs.core.logic.PMap.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"cljs.core.logic/PMap",null,(1),null));
}));

(cljs.core.logic.PMap.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"cljs.core.logic/PMap");
}));

/**
 * Positional factory function for cljs.core.logic/PMap.
 */
cljs.core.logic.__GT_PMap = (function cljs$core$logic$__GT_PMap(){
return (new cljs.core.logic.PMap(null,null,null));
});

/**
 * Factory function for cljs.core.logic/PMap, taking a map of keywords to field values.
 */
cljs.core.logic.map__GT_PMap = (function cljs$core$logic$map__GT_PMap(G__30600){
var extmap__5511__auto__ = (function (){var G__30734 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__30600);
if(cljs.core.record_QMARK_(G__30600)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30734);
} else {
return G__30734;
}
})();
return (new cljs.core.logic.PMap(null,cljs.core.not_empty(extmap__5511__auto__),null));
});

(cljs.core.logic.IUnifyWithPMap["null"] = true);

(cljs.core.logic.unify_with_pmap["null"] = (function (v,u,s){
return cljs.core.logic.fail(s);
}));

(cljs.core.logic.IUnifyWithPMap["_"] = true);

(cljs.core.logic.unify_with_pmap["_"] = (function (v,u,s){
return cljs.core.logic.fail(s);
}));

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithPMap$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3 = (function (v,u,s){
var v__$1 = this;
return cljs.core.logic._ext(s,v__$1,u);
}));

(cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithPMap$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3 = (function (v,u,s){
var v__$1 = this;
return cljs.core.logic._unify_with_map(u,v__$1,s);
}));

(cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithPMap$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3 = (function (v,u,s){
var v__$1 = this;
return cljs.core.logic._unify_with_map(u,v__$1,s);
}));
/**
 * Given map m, returns partial map that unifies with maps even if it doesn't share all of the keys of that map.
 * Only the keys of the partial map will be unified:
 * 
 * (m/run* [q]
 *       (m/fresh [pm x]
 *              (m/== pm (partial-map {:a x}))
 *              (m/== pm {:a 1 :b 2})
 *              (m/== pm q)))
 * ;;=> ({:a 1})
 */
cljs.core.logic.partial_map = (function cljs$core$logic$partial_map(m){
return cljs.core.logic.map__GT_PMap(m);
});
cljs.core.logic.lvarq_sym_QMARK_ = (function cljs$core$logic$lvarq_sym_QMARK_(s){
return (((s instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s))),"?")));
});
cljs.core.logic.proc_lvar = (function cljs$core$logic$proc_lvar(lvar_expr,store){
var v = (function (){var temp__5823__auto__ = (function (){var fexpr__30744 = cljs.core.deref(store);
return (fexpr__30744.cljs$core$IFn$_invoke$arity$1 ? fexpr__30744.cljs$core$IFn$_invoke$arity$1(lvar_expr) : fexpr__30744.call(null,lvar_expr));
})();
if(cljs.core.truth_(temp__5823__auto__)){
var u = temp__5823__auto__;
return u;
} else {
return cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(lvar_expr);
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(store,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvar_expr,v], null));

return v;
});
cljs.core.logic.lcons_expr_QMARK_ = (function cljs$core$logic$lcons_expr_QMARK_(expr){
var and__5160__auto__ = cljs.core.seq_QMARK_(expr);
if(and__5160__auto__){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,".",".",1975675962,null),"null"], null), null),cljs.core.set(expr));
} else {
return and__5160__auto__;
}
});
cljs.core.logic.replace_lvar = (function cljs$core$logic$replace_lvar(store){
return (function (expr){
if(cljs.core.logic.lvarq_sym_QMARK_(expr)){
return cljs.core.logic.proc_lvar(expr,store);
} else {
if(cljs.core.truth_(cljs.core.logic.lcons_expr_QMARK_(expr))){
return (cljs.core.logic.prep_STAR_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.prep_STAR_.cljs$core$IFn$_invoke$arity$2(expr,store) : cljs.core.logic.prep_STAR_.call(null,expr,store));
} else {
return expr;
}
}
});
});
cljs.core.logic.prep_STAR_ = (function cljs$core$logic$prep_STAR_(var_args){
var G__30759 = arguments.length;
switch (G__30759) {
case 2:
return cljs.core.logic.prep_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.logic.prep_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.logic.prep_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.logic.prep_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (expr,store){
return cljs.core.logic.prep_STAR_.cljs$core$IFn$_invoke$arity$4(expr,store,false,false);
}));

(cljs.core.logic.prep_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (expr,store,lcons_QMARK_){
return cljs.core.logic.prep_STAR_.cljs$core$IFn$_invoke$arity$4(expr,store,lcons_QMARK_,false);
}));

(cljs.core.logic.prep_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (expr,store,lcons_QMARK_,last_QMARK_){
var expr__$1 = (cljs.core.truth_((function (){var and__5160__auto__ = last_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.seq(expr);
} else {
return and__5160__auto__;
}
})())?cljs.core.first(expr):expr);
if(cljs.core.logic.lvarq_sym_QMARK_(expr__$1)){
return cljs.core.logic.proc_lvar(expr__$1,store);
} else {
if(cljs.core.seq_QMARK_(expr__$1)){
if(cljs.core.truth_((function (){var or__5162__auto__ = lcons_QMARK_;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.logic.lcons_expr_QMARK_(expr__$1);
}
})())){
var vec__30823 = expr__$1;
var seq__30824 = cljs.core.seq(vec__30823);
var first__30825 = cljs.core.first(seq__30824);
var seq__30824__$1 = cljs.core.next(seq__30824);
var f = first__30825;
var n = seq__30824__$1;
var skip = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Symbol(null,".",".",1975675962,null));
var tail = cljs.core.logic.prep_STAR_.cljs$core$IFn$_invoke$arity$4(n,store,lcons_QMARK_,skip);
if(skip){
return tail;
} else {
return cljs.core.logic.lcons(cljs.core.logic.prep_STAR_.cljs$core$IFn$_invoke$arity$2(f,store),tail);
}
} else {
return clojure.walk.postwalk(cljs.core.logic.replace_lvar(store),expr__$1);
}
} else {
return expr__$1;

}
}
}));

(cljs.core.logic.prep_STAR_.cljs$lang$maxFixedArity = 4);

/**
 * Prep a quoted expression. All symbols preceded by ? will
 *   be replaced with logic vars.
 */
cljs.core.logic.prep = (function cljs$core$logic$prep(expr){
var lvars = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prepped = (cljs.core.truth_(cljs.core.logic.lcons_expr_QMARK_(expr))?cljs.core.logic.prep_STAR_.cljs$core$IFn$_invoke$arity$3(expr,lvars,true):clojure.walk.postwalk(cljs.core.logic.replace_lvar(lvars),expr));
return cljs.core.with_meta(prepped,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lvars","lvars",2067253268),cljs.core.deref(lvars)], null));
});
cljs.core.logic.unify = (function cljs$core$logic$unify(s,u,v){
if((u === v)){
return s;
} else {
var u__$1 = cljs.core.logic._walk(s,u);
var v__$1 = cljs.core.logic._walk(s,v);
if((u__$1 === v__$1)){
return s;
} else {
return cljs.core.logic._unify_terms(u__$1,v__$1,s);
}
}
});
/**
 * Unify the terms u and w.
 */
cljs.core.logic.unifier_STAR_ = (function cljs$core$logic$unifier_STAR_(var_args){
var G__30859 = arguments.length;
switch (G__30859) {
case 2:
return cljs.core.logic.unifier_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___31693 = arguments.length;
var i__5898__auto___31695 = (0);
while(true){
if((i__5898__auto___31695 < len__5897__auto___31693)){
args_arr__5922__auto__.push((arguments[i__5898__auto___31695]));

var G__31697 = (i__5898__auto___31695 + (1));
i__5898__auto___31695 = G__31697;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return cljs.core.logic.unifier_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(cljs.core.logic.unifier_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (u,w){
return cljs.core.first((function (){var opts__28290__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__28291__auto__ = (new cljs.core.logic.Inc((function (){
return (function (a__28251__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a__28251__auto__,(function (a__28180__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__28180__auto__,u,w);
if(cljs.core.truth_(temp__5823__auto__)){
var b__28181__auto__ = temp__5823__auto__;
return b__28181__auto__;
} else {
return cljs.core.logic.fail(a__28180__auto__);
}
})),(function (a__28180__auto__){
var temp__5823__auto__ = cljs.core.logic._unify(a__28180__auto__,u,q);
if(cljs.core.truth_(temp__5823__auto__)){
var b__28181__auto__ = temp__5823__auto__;
return b__28181__auto__;
} else {
return cljs.core.logic.fail(a__28180__auto__);
}
})),(function (a__28292__auto__){
return cljs.core.logic._reify(a__28292__auto__,q);
}));
})));
})(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__28290__auto__], 0))));
}))).cljs$core$logic$ITake$_take_STAR_$arity$1(null);
var temp__5823__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__28290__auto__);
if(cljs.core.truth_(temp__5823__auto__)){
var n__28293__auto__ = temp__5823__auto__;
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n__28293__auto__,xs__28291__auto__);
} else {
return xs__28291__auto__;
}
})());
}));

(cljs.core.logic.unifier_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (u,w,ts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.logic.unifier_STAR_,cljs.core.logic.unifier_STAR_.cljs$core$IFn$_invoke$arity$2(u,w),ts);
}));

/** @this {Function} */
(cljs.core.logic.unifier_STAR_.cljs$lang$applyTo = (function (seq30852){
var G__30854 = cljs.core.first(seq30852);
var seq30852__$1 = cljs.core.next(seq30852);
var G__30855 = cljs.core.first(seq30852__$1);
var seq30852__$2 = cljs.core.next(seq30852__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30854,G__30855,seq30852__$2);
}));

(cljs.core.logic.unifier_STAR_.cljs$lang$maxFixedArity = (2));

/**
 * Return the binding map that unifies terms u and w.
 *   u and w should prepped terms.
 */
cljs.core.logic.binding_map_STAR_ = (function cljs$core$logic$binding_map_STAR_(var_args){
var G__30961 = arguments.length;
switch (G__30961) {
case 2:
return cljs.core.logic.binding_map_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___31708 = arguments.length;
var i__5898__auto___31709 = (0);
while(true){
if((i__5898__auto___31709 < len__5897__auto___31708)){
args_arr__5922__auto__.push((arguments[i__5898__auto___31709]));

var G__31710 = (i__5898__auto___31709 + (1));
i__5898__auto___31709 = G__31710;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return cljs.core.logic.binding_map_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(cljs.core.logic.binding_map_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (u,w){
var lvars = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lvars","lvars",2067253268).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(u)),new cljs.core.Keyword(null,"lvars","lvars",2067253268).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(w))], 0));
var s = cljs.core.logic.unify(cljs.core.logic.empty_s,u,w);
if(cljs.core.logic.failed_QMARK_(s)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30988){
var vec__30989 = p__30988;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30989,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30989,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.logic._reify(s,v)], null);
}),lvars));
}
}));

(cljs.core.logic.binding_map_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (u,w,ts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.logic.binding_map_STAR_,cljs.core.logic.binding_map_STAR_.cljs$core$IFn$_invoke$arity$2(u,w),ts);
}));

/** @this {Function} */
(cljs.core.logic.binding_map_STAR_.cljs$lang$applyTo = (function (seq30956){
var G__30959 = cljs.core.first(seq30956);
var seq30956__$1 = cljs.core.next(seq30956);
var G__30960 = cljs.core.first(seq30956__$1);
var seq30956__$2 = cljs.core.next(seq30956__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30959,G__30960,seq30956__$2);
}));

(cljs.core.logic.binding_map_STAR_.cljs$lang$maxFixedArity = (2));

/**
 * Unify the terms u and w. Will prep the terms.
 */
cljs.core.logic.unifier = (function cljs$core$logic$unifier(var_args){
var G__31005 = arguments.length;
switch (G__31005) {
case 2:
return cljs.core.logic.unifier.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___31717 = arguments.length;
var i__5898__auto___31718 = (0);
while(true){
if((i__5898__auto___31718 < len__5897__auto___31717)){
args_arr__5922__auto__.push((arguments[i__5898__auto___31718]));

var G__31719 = (i__5898__auto___31718 + (1));
i__5898__auto___31718 = G__31719;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return cljs.core.logic.unifier.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(cljs.core.logic.unifier.cljs$core$IFn$_invoke$arity$2 = (function (u,w){
if((!(cljs.core.logic.lcons_QMARK_(u)))){
} else {
throw (new Error("Assert failed: (not (lcons? u))"));
}

if((!(cljs.core.logic.lcons_QMARK_(w)))){
} else {
throw (new Error("Assert failed: (not (lcons? w))"));
}

var up = cljs.core.logic.prep(u);
var wp = cljs.core.logic.prep(w);
return cljs.core.logic.unifier_STAR_.cljs$core$IFn$_invoke$arity$2(up,wp);
}));

(cljs.core.logic.unifier.cljs$core$IFn$_invoke$arity$variadic = (function (u,w,ts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.logic.unifier,cljs.core.logic.unifier.cljs$core$IFn$_invoke$arity$2(u,w),ts);
}));

/** @this {Function} */
(cljs.core.logic.unifier.cljs$lang$applyTo = (function (seq31001){
var G__31002 = cljs.core.first(seq31001);
var seq31001__$1 = cljs.core.next(seq31001);
var G__31003 = cljs.core.first(seq31001__$1);
var seq31001__$2 = cljs.core.next(seq31001__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31002,G__31003,seq31001__$2);
}));

(cljs.core.logic.unifier.cljs$lang$maxFixedArity = (2));

/**
 * Return the binding map that unifies terms u and w.
 *   Will prep the terms.
 */
cljs.core.logic.binding_map = (function cljs$core$logic$binding_map(var_args){
var G__31025 = arguments.length;
switch (G__31025) {
case 2:
return cljs.core.logic.binding_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___31724 = arguments.length;
var i__5898__auto___31725 = (0);
while(true){
if((i__5898__auto___31725 < len__5897__auto___31724)){
args_arr__5922__auto__.push((arguments[i__5898__auto___31725]));

var G__31726 = (i__5898__auto___31725 + (1));
i__5898__auto___31725 = G__31726;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return cljs.core.logic.binding_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(cljs.core.logic.binding_map.cljs$core$IFn$_invoke$arity$2 = (function (u,w){
if((!(cljs.core.logic.lcons_QMARK_(u)))){
} else {
throw (new Error("Assert failed: (not (lcons? u))"));
}

if((!(cljs.core.logic.lcons_QMARK_(w)))){
} else {
throw (new Error("Assert failed: (not (lcons? w))"));
}

var up = cljs.core.logic.prep(u);
var wp = cljs.core.logic.prep(w);
return cljs.core.logic.binding_map_STAR_.cljs$core$IFn$_invoke$arity$2(up,wp);
}));

(cljs.core.logic.binding_map.cljs$core$IFn$_invoke$arity$variadic = (function (u,w,ts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.logic.binding_map,cljs.core.logic.binding_map.cljs$core$IFn$_invoke$arity$2(u,w),ts);
}));

/** @this {Function} */
(cljs.core.logic.binding_map.cljs$lang$applyTo = (function (seq31022){
var G__31023 = cljs.core.first(seq31022);
var seq31022__$1 = cljs.core.next(seq31022);
var G__31024 = cljs.core.first(seq31022__$1);
var seq31022__$2 = cljs.core.next(seq31022__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31023,G__31024,seq31022__$2);
}));

(cljs.core.logic.binding_map.cljs$lang$maxFixedArity = (2));

cljs.core.logic.to_stream = (function cljs$core$logic$to_stream(aseq){
var aseq__$1 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,aseq);
if(cljs.core.seq(aseq__$1)){
return cljs.core.logic.choice(cljs.core.first(aseq__$1),(new cljs.core.logic.Inc((function (){
var G__31031 = cljs.core.next(aseq__$1);
return (cljs.core.logic.to_stream.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.to_stream.cljs$core$IFn$_invoke$arity$1(G__31031) : cljs.core.logic.to_stream.call(null,G__31031));
}))));
} else {
return cljs.core.logic.fail(cljs.core.logic.empty_s);
}
});

//# sourceMappingURL=cljs.core.logic.js.map
