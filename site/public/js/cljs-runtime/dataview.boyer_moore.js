goog.provide('dataview.boyer_moore');
dataview.boyer_moore.char_EQ_ = (function dataview$boyer_moore$char_EQ_(var_args){
var G__35357 = arguments.length;
switch (G__35357) {
case 3:
return dataview.boyer_moore.char_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dataview.boyer_moore.char_EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(dataview.boyer_moore.char_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (s,i,j){
return dataview.boyer_moore.char_EQ_.cljs$core$IFn$_invoke$arity$4(s,s,i,j);
}));

(dataview.boyer_moore.char_EQ_.cljs$core$IFn$_invoke$arity$4 = (function (s1,s2,i,j){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dataview.protocols.get_byte(s1,i),dataview.protocols.get_byte(s2,j));
}));

(dataview.boyer_moore.char_EQ_.cljs$lang$maxFixedArity = 4);

/**
 * Is needle[p:end] a prefix of needle?
 */
dataview.boyer_moore.prefix_QMARK_ = (function dataview$boyer_moore$prefix_QMARK_(needle,p){
var len = dataview.protocols.byte_length(needle);
var i = p;
var j = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,len)){
return true;
} else {
if(cljs.core.not(dataview.boyer_moore.char_EQ_.cljs$core$IFn$_invoke$arity$3(needle,(i + (1)),(j + (1))))){
return false;
} else {
var G__35415 = (i + (1));
var G__35417 = (j + (1));
i = G__35415;
j = G__35417;
continue;

}
}
break;
}
});
/**
 * Returns the maximum length of the substring ends at p and is a suffix
 */
dataview.boyer_moore.suffix_length = (function dataview$boyer_moore$suffix_length(needle,p){
var i = p;
var j = (dataview.protocols.byte_length(needle) - (1));
var len = (0);
while(true){
if(cljs.core.truth_((function (){var and__5160__auto__ = (i > (0));
if(and__5160__auto__){
return dataview.boyer_moore.char_EQ_.cljs$core$IFn$_invoke$arity$3(needle,i,j);
} else {
return and__5160__auto__;
}
})())){
var G__35420 = (i - (1));
var G__35421 = (j - (1));
var G__35422 = (len + (1));
i = G__35420;
j = G__35421;
len = G__35422;
continue;
} else {
return len;
}
break;
}
});
/**
 * Makes the jump table based on the mismatched character information
 */
dataview.boyer_moore.make_char_table = (function dataview$boyer_moore$make_char_table(needle){
var len = dataview.protocols.byte_length(needle);
var i = (0);
var table = cljs.core.transient$(cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((256),len)));
while(true){
if((!((i < (len - (1)))))){
return cljs.core.persistent_BANG_(table);
} else {
var G__35423 = (i + (1));
var G__35424 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(table,needle.charCodeAt(i),((len - (1)) - i));
i = G__35423;
table = G__35424;
continue;
}
break;
}
});
dataview.boyer_moore.calc_prefixes = (function dataview$boyer_moore$calc_prefixes(needle){
var len = dataview.protocols.byte_length(needle);
var i = (len - (1));
var last_posn = len;
var table = cljs.core.transient$(cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(len,(0))));
while(true){
if((!((i >= (0))))){
return cljs.core.persistent_BANG_(table);
} else {
var last_posn__$1 = ((dataview.boyer_moore.prefix_QMARK_(needle,i))?i:last_posn);
var G__35425 = (i - (1));
var G__35426 = last_posn__$1;
var G__35427 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(table,((len - (1)) - i),(((last_posn__$1 + (- i)) + len) + (-1)));
i = G__35425;
last_posn = G__35426;
table = G__35427;
continue;
}
break;
}
});
/**
 * Makes the jump table based on the scan offset which mismatch occurs
 */
dataview.boyer_moore.make_offset_table = (function dataview$boyer_moore$make_offset_table(needle){
var len = dataview.protocols.byte_length(needle);
var i = (0);
var table = cljs.core.transient$(dataview.boyer_moore.calc_prefixes(needle));
while(true){
if((!((i < (len - (1)))))){
return cljs.core.persistent_BANG_(table);
} else {
var slen = dataview.boyer_moore.suffix_length(needle,i);
var G__35432 = (i + (1));
var G__35433 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(table,slen,(((len + (-1)) + (- i)) + slen));
i = G__35432;
table = G__35433;
continue;
}
break;
}
});
/**
 * Returns the index with the string of the first occurrence of the
 * specified substring. If it is not a substring, return nil.
 * 
 * haystack - the string to be scanned
 * needle   - the target string to search
 */
dataview.boyer_moore.index_of = (function dataview$boyer_moore$index_of(var_args){
var G__35379 = arguments.length;
switch (G__35379) {
case 2:
return dataview.boyer_moore.index_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dataview.boyer_moore.index_of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(dataview.boyer_moore.index_of.cljs$core$IFn$_invoke$arity$2 = (function (haystack,needle){
return dataview.boyer_moore.index_of.cljs$core$IFn$_invoke$arity$3(haystack,needle,(0));
}));

(dataview.boyer_moore.index_of.cljs$core$IFn$_invoke$arity$3 = (function (haystack,needle,offset){
var len = dataview.protocols.byte_length(needle);
var m1 = (len - (1));
if((len === (0))){
return offset;
} else {
var char_table = dataview.boyer_moore.make_char_table(needle);
var offset_table = dataview.boyer_moore.make_offset_table(needle);
var calc_offset = (function (i,j){
return (i + Math.max(cljs.core.get.cljs$core$IFn$_invoke$arity$2(offset_table,(m1 - j)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(char_table,dataview.protocols.get_byte(haystack,i))));
});
var i = (offset + m1);
var j = m1;
while(true){
if((i >= dataview.protocols.byte_length(haystack))){
return null;
} else {
if((j < (0))){
return (i + (1));
} else {
if(dataview.boyer_moore.char_EQ_.cljs$core$IFn$_invoke$arity$4(haystack,needle,i,j)){
var G__35436 = (i - (1));
var G__35437 = (j - (1));
i = G__35436;
j = G__35437;
continue;
} else {
var G__35438 = calc_offset(i,j);
var G__35439 = m1;
i = G__35438;
j = G__35439;
continue;

}
}
}
break;
}
}
}));

(dataview.boyer_moore.index_of.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=dataview.boyer_moore.js.map
