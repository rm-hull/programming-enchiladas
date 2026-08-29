goog.provide('dataview.protocols');

/**
 * @interface
 */
dataview.protocols.IReader = function(){};

var dataview$protocols$IReader$read_utf8_string$dyn_34947 = (function (this$,delimiters){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (dataview.protocols.read_utf8_string[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,delimiters) : m__5520__auto__.call(null,this$,delimiters));
} else {
var m__5518__auto__ = (dataview.protocols.read_utf8_string["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,delimiters) : m__5518__auto__.call(null,this$,delimiters));
} else {
throw cljs.core.missing_protocol("IReader.read-utf8-string",this$);
}
}
});
dataview.protocols.read_utf8_string = (function dataview$protocols$read_utf8_string(this$,delimiters){
if((((!((this$ == null)))) && ((!((this$.dataview$protocols$IReader$read_utf8_string$arity$2 == null)))))){
return this$.dataview$protocols$IReader$read_utf8_string$arity$2(this$,delimiters);
} else {
return dataview$protocols$IReader$read_utf8_string$dyn_34947(this$,delimiters);
}
});

var dataview$protocols$IReader$read_fixed_string$dyn_34948 = (function (this$,length){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (dataview.protocols.read_fixed_string[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,length) : m__5520__auto__.call(null,this$,length));
} else {
var m__5518__auto__ = (dataview.protocols.read_fixed_string["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,length) : m__5518__auto__.call(null,this$,length));
} else {
throw cljs.core.missing_protocol("IReader.read-fixed-string",this$);
}
}
});
dataview.protocols.read_fixed_string = (function dataview$protocols$read_fixed_string(this$,length){
if((((!((this$ == null)))) && ((!((this$.dataview$protocols$IReader$read_fixed_string$arity$2 == null)))))){
return this$.dataview$protocols$IReader$read_fixed_string$arity$2(this$,length);
} else {
return dataview$protocols$IReader$read_fixed_string$dyn_34948(this$,length);
}
});

var dataview$protocols$IReader$read_byte$dyn_34949 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (dataview.protocols.read_byte[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (dataview.protocols.read_byte["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IReader.read-byte",this$);
}
}
});
dataview.protocols.read_byte = (function dataview$protocols$read_byte(this$){
if((((!((this$ == null)))) && ((!((this$.dataview$protocols$IReader$read_byte$arity$1 == null)))))){
return this$.dataview$protocols$IReader$read_byte$arity$1(this$);
} else {
return dataview$protocols$IReader$read_byte$dyn_34949(this$);
}
});

var dataview$protocols$IReader$read_uint16_le$dyn_34950 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (dataview.protocols.read_uint16_le[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (dataview.protocols.read_uint16_le["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IReader.read-uint16-le",this$);
}
}
});
dataview.protocols.read_uint16_le = (function dataview$protocols$read_uint16_le(this$){
if((((!((this$ == null)))) && ((!((this$.dataview$protocols$IReader$read_uint16_le$arity$1 == null)))))){
return this$.dataview$protocols$IReader$read_uint16_le$arity$1(this$);
} else {
return dataview$protocols$IReader$read_uint16_le$dyn_34950(this$);
}
});

var dataview$protocols$IReader$read_uint32_le$dyn_34951 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (dataview.protocols.read_uint32_le[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (dataview.protocols.read_uint32_le["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IReader.read-uint32-le",this$);
}
}
});
dataview.protocols.read_uint32_le = (function dataview$protocols$read_uint32_le(this$){
if((((!((this$ == null)))) && ((!((this$.dataview$protocols$IReader$read_uint32_le$arity$1 == null)))))){
return this$.dataview$protocols$IReader$read_uint32_le$arity$1(this$);
} else {
return dataview$protocols$IReader$read_uint32_le$dyn_34951(this$);
}
});

var dataview$protocols$IReader$read_float32_le$dyn_34954 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (dataview.protocols.read_float32_le[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (dataview.protocols.read_float32_le["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IReader.read-float32-le",this$);
}
}
});
dataview.protocols.read_float32_le = (function dataview$protocols$read_float32_le(this$){
if((((!((this$ == null)))) && ((!((this$.dataview$protocols$IReader$read_float32_le$arity$1 == null)))))){
return this$.dataview$protocols$IReader$read_float32_le$arity$1(this$);
} else {
return dataview$protocols$IReader$read_float32_le$dyn_34954(this$);
}
});

var dataview$protocols$IReader$view$dyn_34955 = (function (this$,length){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (dataview.protocols.view[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,length) : m__5520__auto__.call(null,this$,length));
} else {
var m__5518__auto__ = (dataview.protocols.view["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,length) : m__5518__auto__.call(null,this$,length));
} else {
throw cljs.core.missing_protocol("IReader.view",this$);
}
}
});
dataview.protocols.view = (function dataview$protocols$view(this$,length){
if((((!((this$ == null)))) && ((!((this$.dataview$protocols$IReader$view$arity$2 == null)))))){
return this$.dataview$protocols$IReader$view$arity$2(this$,length);
} else {
return dataview$protocols$IReader$view$dyn_34955(this$,length);
}
});

var dataview$protocols$IReader$eod_QMARK_$dyn_34956 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (dataview.protocols.eod_QMARK_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (dataview.protocols.eod_QMARK_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IReader.eod?",this$);
}
}
});
dataview.protocols.eod_QMARK_ = (function dataview$protocols$eod_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.dataview$protocols$IReader$eod_QMARK_$arity$1 == null)))))){
return this$.dataview$protocols$IReader$eod_QMARK_$arity$1(this$);
} else {
return dataview$protocols$IReader$eod_QMARK_$dyn_34956(this$);
}
});


/**
 * @interface
 */
dataview.protocols.IRandomAccess = function(){};

var dataview$protocols$IRandomAccess$tell$dyn_34957 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (dataview.protocols.tell[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (dataview.protocols.tell["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRandomAccess.tell",this$);
}
}
});
dataview.protocols.tell = (function dataview$protocols$tell(this$){
if((((!((this$ == null)))) && ((!((this$.dataview$protocols$IRandomAccess$tell$arity$1 == null)))))){
return this$.dataview$protocols$IRandomAccess$tell$arity$1(this$);
} else {
return dataview$protocols$IRandomAccess$tell$dyn_34957(this$);
}
});

var dataview$protocols$IRandomAccess$advance_BANG_$dyn_34958 = (function (this$,delta){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (dataview.protocols.advance_BANG_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,delta) : m__5520__auto__.call(null,this$,delta));
} else {
var m__5518__auto__ = (dataview.protocols.advance_BANG_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,delta) : m__5518__auto__.call(null,this$,delta));
} else {
throw cljs.core.missing_protocol("IRandomAccess.advance!",this$);
}
}
});
dataview.protocols.advance_BANG_ = (function dataview$protocols$advance_BANG_(this$,delta){
if((((!((this$ == null)))) && ((!((this$.dataview$protocols$IRandomAccess$advance_BANG_$arity$2 == null)))))){
return this$.dataview$protocols$IRandomAccess$advance_BANG_$arity$2(this$,delta);
} else {
return dataview$protocols$IRandomAccess$advance_BANG_$dyn_34958(this$,delta);
}
});

var dataview$protocols$IRandomAccess$seek_BANG_$dyn_34960 = (function (this$,new_offset){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (dataview.protocols.seek_BANG_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,new_offset) : m__5520__auto__.call(null,this$,new_offset));
} else {
var m__5518__auto__ = (dataview.protocols.seek_BANG_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,new_offset) : m__5518__auto__.call(null,this$,new_offset));
} else {
throw cljs.core.missing_protocol("IRandomAccess.seek!",this$);
}
}
});
dataview.protocols.seek_BANG_ = (function dataview$protocols$seek_BANG_(this$,new_offset){
if((((!((this$ == null)))) && ((!((this$.dataview$protocols$IRandomAccess$seek_BANG_$arity$2 == null)))))){
return this$.dataview$protocols$IRandomAccess$seek_BANG_$arity$2(this$,new_offset);
} else {
return dataview$protocols$IRandomAccess$seek_BANG_$dyn_34960(this$,new_offset);
}
});

var dataview$protocols$IRandomAccess$rewind_BANG_$dyn_34961 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (dataview.protocols.rewind_BANG_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (dataview.protocols.rewind_BANG_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRandomAccess.rewind!",this$);
}
}
});
dataview.protocols.rewind_BANG_ = (function dataview$protocols$rewind_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.dataview$protocols$IRandomAccess$rewind_BANG_$arity$1 == null)))))){
return this$.dataview$protocols$IRandomAccess$rewind_BANG_$arity$1(this$);
} else {
return dataview$protocols$IRandomAccess$rewind_BANG_$dyn_34961(this$);
}
});

var dataview$protocols$IRandomAccess$find_BANG_$dyn_34965 = (function (this$,term){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (dataview.protocols.find_BANG_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,term) : m__5520__auto__.call(null,this$,term));
} else {
var m__5518__auto__ = (dataview.protocols.find_BANG_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,term) : m__5518__auto__.call(null,this$,term));
} else {
throw cljs.core.missing_protocol("IRandomAccess.find!",this$);
}
}
});
dataview.protocols.find_BANG_ = (function dataview$protocols$find_BANG_(this$,term){
if((((!((this$ == null)))) && ((!((this$.dataview$protocols$IRandomAccess$find_BANG_$arity$2 == null)))))){
return this$.dataview$protocols$IRandomAccess$find_BANG_$arity$2(this$,term);
} else {
return dataview$protocols$IRandomAccess$find_BANG_$dyn_34965(this$,term);
}
});


/**
 * @interface
 */
dataview.protocols.IByteIndexed = function(){};

var dataview$protocols$IByteIndexed$byte_length$dyn_34967 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (dataview.protocols.byte_length[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (dataview.protocols.byte_length["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IByteIndexed.byte-length",this$);
}
}
});
dataview.protocols.byte_length = (function dataview$protocols$byte_length(this$){
if((((!((this$ == null)))) && ((!((this$.dataview$protocols$IByteIndexed$byte_length$arity$1 == null)))))){
return this$.dataview$protocols$IByteIndexed$byte_length$arity$1(this$);
} else {
return dataview$protocols$IByteIndexed$byte_length$dyn_34967(this$);
}
});

var dataview$protocols$IByteIndexed$get_byte$dyn_34971 = (function (this$,offset){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (dataview.protocols.get_byte[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,offset) : m__5520__auto__.call(null,this$,offset));
} else {
var m__5518__auto__ = (dataview.protocols.get_byte["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,offset) : m__5518__auto__.call(null,this$,offset));
} else {
throw cljs.core.missing_protocol("IByteIndexed.get-byte",this$);
}
}
});
dataview.protocols.get_byte = (function dataview$protocols$get_byte(this$,offset){
if((((!((this$ == null)))) && ((!((this$.dataview$protocols$IByteIndexed$get_byte$arity$2 == null)))))){
return this$.dataview$protocols$IByteIndexed$get_byte$arity$2(this$,offset);
} else {
return dataview$protocols$IByteIndexed$get_byte$dyn_34971(this$,offset);
}
});

var dataview$protocols$IByteIndexed$slice$dyn_34979 = (function (this$,offset,length){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (dataview.protocols.slice[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(this$,offset,length) : m__5520__auto__.call(null,this$,offset,length));
} else {
var m__5518__auto__ = (dataview.protocols.slice["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(this$,offset,length) : m__5518__auto__.call(null,this$,offset,length));
} else {
throw cljs.core.missing_protocol("IByteIndexed.slice",this$);
}
}
});
dataview.protocols.slice = (function dataview$protocols$slice(this$,offset,length){
if((((!((this$ == null)))) && ((!((this$.dataview$protocols$IByteIndexed$slice$arity$3 == null)))))){
return this$.dataview$protocols$IByteIndexed$slice$arity$3(this$,offset,length);
} else {
return dataview$protocols$IByteIndexed$slice$dyn_34979(this$,offset,length);
}
});


/**
 * @interface
 */
dataview.protocols.ILittleEndian = function(){};

var dataview$protocols$ILittleEndian$get_uint16_le$dyn_35003 = (function (this$,offset){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (dataview.protocols.get_uint16_le[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,offset) : m__5520__auto__.call(null,this$,offset));
} else {
var m__5518__auto__ = (dataview.protocols.get_uint16_le["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,offset) : m__5518__auto__.call(null,this$,offset));
} else {
throw cljs.core.missing_protocol("ILittleEndian.get-uint16-le",this$);
}
}
});
dataview.protocols.get_uint16_le = (function dataview$protocols$get_uint16_le(this$,offset){
if((((!((this$ == null)))) && ((!((this$.dataview$protocols$ILittleEndian$get_uint16_le$arity$2 == null)))))){
return this$.dataview$protocols$ILittleEndian$get_uint16_le$arity$2(this$,offset);
} else {
return dataview$protocols$ILittleEndian$get_uint16_le$dyn_35003(this$,offset);
}
});

var dataview$protocols$ILittleEndian$get_uint32_le$dyn_35020 = (function (this$,offset){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (dataview.protocols.get_uint32_le[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,offset) : m__5520__auto__.call(null,this$,offset));
} else {
var m__5518__auto__ = (dataview.protocols.get_uint32_le["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,offset) : m__5518__auto__.call(null,this$,offset));
} else {
throw cljs.core.missing_protocol("ILittleEndian.get-uint32-le",this$);
}
}
});
dataview.protocols.get_uint32_le = (function dataview$protocols$get_uint32_le(this$,offset){
if((((!((this$ == null)))) && ((!((this$.dataview$protocols$ILittleEndian$get_uint32_le$arity$2 == null)))))){
return this$.dataview$protocols$ILittleEndian$get_uint32_le$arity$2(this$,offset);
} else {
return dataview$protocols$ILittleEndian$get_uint32_le$dyn_35020(this$,offset);
}
});

var dataview$protocols$ILittleEndian$get_float32_le$dyn_35067 = (function (this$,offset){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (dataview.protocols.get_float32_le[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,offset) : m__5520__auto__.call(null,this$,offset));
} else {
var m__5518__auto__ = (dataview.protocols.get_float32_le["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,offset) : m__5518__auto__.call(null,this$,offset));
} else {
throw cljs.core.missing_protocol("ILittleEndian.get-float32-le",this$);
}
}
});
dataview.protocols.get_float32_le = (function dataview$protocols$get_float32_le(this$,offset){
if((((!((this$ == null)))) && ((!((this$.dataview$protocols$ILittleEndian$get_float32_le$arity$2 == null)))))){
return this$.dataview$protocols$ILittleEndian$get_float32_le$arity$2(this$,offset);
} else {
return dataview$protocols$ILittleEndian$get_float32_le$dyn_35067(this$,offset);
}
});

(DataView.prototype.dataview$protocols$IByteIndexed$ = cljs.core.PROTOCOL_SENTINEL);

(DataView.prototype.dataview$protocols$IByteIndexed$byte_length$arity$1 = (function (data_view){
var data_view__$1 = this;
return data_view__$1.byteLength;
}));

(DataView.prototype.dataview$protocols$IByteIndexed$get_byte$arity$2 = (function (data_view,offset){
var data_view__$1 = this;
return data_view__$1.getUint8(offset);
}));

(DataView.prototype.dataview$protocols$IByteIndexed$slice$arity$3 = (function (data_view,offset,length){
var data_view__$1 = this;
return (new DataView(data_view__$1.buffer,offset,length));
}));

(DataView.prototype.dataview$protocols$ILittleEndian$ = cljs.core.PROTOCOL_SENTINEL);

(DataView.prototype.dataview$protocols$ILittleEndian$get_uint16_le$arity$2 = (function (data_view,offset){
var data_view__$1 = this;
return data_view__$1.getUint16(offset,true);
}));

(DataView.prototype.dataview$protocols$ILittleEndian$get_uint32_le$arity$2 = (function (data_view,offset){
var data_view__$1 = this;
return data_view__$1.getUint32(offset,true);
}));

(DataView.prototype.dataview$protocols$ILittleEndian$get_float32_le$arity$2 = (function (data_view,offset){
var data_view__$1 = this;
return data_view__$1.getFloat32(offset,true);
}));
(dataview.protocols.IByteIndexed["string"] = true);

(dataview.protocols.byte_length["string"] = (function (string){
return string.length;
}));

(dataview.protocols.get_byte["string"] = (function (string,offset){
return string.charCodeAt(offset);
}));

(dataview.protocols.slice["string"] = (function (string,offset,length){
return string.substr(offset,length);
}));

//# sourceMappingURL=dataview.protocols.js.map
