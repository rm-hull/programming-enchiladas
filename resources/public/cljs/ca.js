// Input 0
function d(a) {
  throw a;
}
var g = void 0, j = !0, k = null, l = !1;
function aa() {
  return function(a) {
    return a
  }
}
function m(a) {
  return function() {
    return this[a]
  }
}
function n(a) {
  return function() {
    return a
  }
}
var q;
function r(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function t(a) {
  return a !== g
}
function ba(a) {
  return"string" == typeof a
}
var ca = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), da = 0;
// Input 1
function ea(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
;
// Input 2
// Input 3
// Input 4
// Input 5
// Input 6
function fa(a, b) {
  var c = Array.prototype.slice.call(arguments), e = c.shift();
  "undefined" == typeof e && d(Error("[goog.string.format] Template required"));
  return e.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, e, p, s, A, y, C) {
    if("%" == A) {
      return"%"
    }
    var I = c.shift();
    "undefined" == typeof I && d(Error("[goog.string.format] Not enough arguments"));
    arguments[0] = I;
    return fa.ha[A].apply(k, arguments)
  })
}
fa.ha = {};
fa.ha.s = function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
};
fa.ha.f = function(a, b, c, e, f) {
  e = a.toString();
  isNaN(f) || "" == f || (e = a.toFixed(f));
  var h;
  h = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
  0 <= a && (e = h + e);
  if(isNaN(c) || e.length >= c) {
    return e
  }
  e = isNaN(f) ? Math.abs(a).toString() : Math.abs(a).toFixed(f);
  a = c - e.length - h.length;
  return e = 0 <= b.indexOf("-", 0) ? h + e + Array(a + 1).join(" ") : h + Array(a + 1).join(0 <= b.indexOf("0", 0) ? "0" : " ") + e
};
fa.ha.d = function(a, b, c, e, f, h, i, p) {
  return fa.ha.f(parseInt(a, 10), b, c, e, 0, h, i, p)
};
fa.ha.i = fa.ha.d;
fa.ha.u = fa.ha.d;
// Input 7
function ga(a, b) {
  a != k && this.append.apply(this, arguments)
}
ga.prototype.Ea = "";
ga.prototype.append = function(a, b, c) {
  this.Ea += a;
  if(b != k) {
    for(var e = 1;e < arguments.length;e++) {
      this.Ea += arguments[e]
    }
  }
  return this
};
ga.prototype.toString = m("Ea");
// Input 8
var ha;
function u(a) {
  return a != k && a !== l
}
function ia(a) {
  return u(a) ? l : j
}
function v(a, b) {
  return a[r(b == k ? k : b)] ? j : a._ ? j : l
}
function w(a, b) {
  return Error(["No protocol method ", a, " defined for type ", r(b), ": ", b].join(""))
}
function ja(a) {
  return Array.prototype.slice.call(arguments)
}
var ka, la = k, la = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Array(a);
    case 2:
      return la.a(b)
  }
  d(Error("Invalid arity: " + arguments.length))
};
la.a = function(a) {
  return Array(a)
};
la.b = function(a, b) {
  return la.a(b)
};
ka = la;
var x = g, na = g, oa = {}, pa = {};
function qa(a) {
  if(a ? a.z : a) {
    return a.z(a)
  }
  var b;
  var c = qa[r(a == k ? k : a)];
  c ? b = c : (c = qa._) ? b = c : d(w("ICounted.-count", a));
  return b.call(k, a)
}
function ra(a) {
  if(a ? a.G : a) {
    return a.G(a)
  }
  var b;
  var c = ra[r(a == k ? k : a)];
  c ? b = c : (c = ra._) ? b = c : d(w("IEmptyableCollection.-empty", a));
  return b.call(k, a)
}
var sa = {};
function ta(a, b) {
  if(a ? a.F : a) {
    return a.F(a, b)
  }
  var c;
  var e = ta[r(a == k ? k : a)];
  e ? c = e : (e = ta._) ? c = e : d(w("ICollection.-conj", a));
  return c.call(k, a, b)
}
var ua = {}, z, va = k;
function wa(a, b) {
  if(a ? a.T : a) {
    return a.T(a, b)
  }
  var c;
  var e = z[r(a == k ? k : a)];
  e ? c = e : (e = z._) ? c = e : d(w("IIndexed.-nth", a));
  return c.call(k, a, b)
}
function xa(a, b, c) {
  if(a ? a.N : a) {
    return a.N(a, b, c)
  }
  var e;
  var f = z[r(a == k ? k : a)];
  f ? e = f : (f = z._) ? e = f : d(w("IIndexed.-nth", a));
  return e.call(k, a, b, c)
}
va = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return wa.call(this, a, b);
    case 3:
      return xa.call(this, a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
va.b = wa;
va.c = xa;
z = va;
var ya = {}, za = {};
function B(a) {
  if(a ? a.Q : a) {
    return a.Q(a)
  }
  var b;
  var c = B[r(a == k ? k : a)];
  c ? b = c : (c = B._) ? b = c : d(w("ISeq.-first", a));
  return b.call(k, a)
}
function Ba(a) {
  if(a ? a.O : a) {
    return a.O(a)
  }
  var b;
  var c = Ba[r(a == k ? k : a)];
  c ? b = c : (c = Ba._) ? b = c : d(w("ISeq.-rest", a));
  return b.call(k, a)
}
var Ca = {};
function Da(a) {
  if(a ? a.ka : a) {
    return a.ka(a)
  }
  var b;
  var c = Da[r(a == k ? k : a)];
  c ? b = c : (c = Da._) ? b = c : d(w("INext.-next", a));
  return b.call(k, a)
}
var D, Ea = k;
function Fa(a, b) {
  if(a ? a.J : a) {
    return a.J(a, b)
  }
  var c;
  var e = D[r(a == k ? k : a)];
  e ? c = e : (e = D._) ? c = e : d(w("ILookup.-lookup", a));
  return c.call(k, a, b)
}
function Ga(a, b, c) {
  if(a ? a.v : a) {
    return a.v(a, b, c)
  }
  var e;
  var f = D[r(a == k ? k : a)];
  f ? e = f : (f = D._) ? e = f : d(w("ILookup.-lookup", a));
  return e.call(k, a, b, c)
}
Ea = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Fa.call(this, a, b);
    case 3:
      return Ga.call(this, a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Ea.b = Fa;
Ea.c = Ga;
D = Ea;
function Ha(a, b) {
  if(a ? a.Fa : a) {
    return a.Fa(a, b)
  }
  var c;
  var e = Ha[r(a == k ? k : a)];
  e ? c = e : (e = Ha._) ? c = e : d(w("IAssociative.-contains-key?", a));
  return c.call(k, a, b)
}
function Ja(a, b, c) {
  if(a ? a.W : a) {
    return a.W(a, b, c)
  }
  var e;
  var f = Ja[r(a == k ? k : a)];
  f ? e = f : (f = Ja._) ? e = f : d(w("IAssociative.-assoc", a));
  return e.call(k, a, b, c)
}
var Ka = {}, La = {};
function Ma(a) {
  if(a ? a.Na : a) {
    return a.Na(a)
  }
  var b;
  var c = Ma[r(a == k ? k : a)];
  c ? b = c : (c = Ma._) ? b = c : d(w("IMapEntry.-key", a));
  return b.call(k, a)
}
function Na(a) {
  if(a ? a.Oa : a) {
    return a.Oa(a)
  }
  var b;
  var c = Na[r(a == k ? k : a)];
  c ? b = c : (c = Na._) ? b = c : d(w("IMapEntry.-val", a));
  return b.call(k, a)
}
var Oa = {};
function Pa(a) {
  if(a ? a.ta : a) {
    return a.ta(a)
  }
  var b;
  var c = Pa[r(a == k ? k : a)];
  c ? b = c : (c = Pa._) ? b = c : d(w("IStack.-peek", a));
  return b.call(k, a)
}
var Qa = {};
function Ra(a) {
  if(a ? a.Wa : a) {
    return a.Wa(a)
  }
  var b;
  var c = Ra[r(a == k ? k : a)];
  c ? b = c : (c = Ra._) ? b = c : d(w("IDeref.-deref", a));
  return b.call(k, a)
}
var Sa = {};
function Ta(a) {
  if(a ? a.H : a) {
    return a.H(a)
  }
  var b;
  var c = Ta[r(a == k ? k : a)];
  c ? b = c : (c = Ta._) ? b = c : d(w("IMeta.-meta", a));
  return b.call(k, a)
}
var Ua = {};
function Va(a, b) {
  if(a ? a.I : a) {
    return a.I(a, b)
  }
  var c;
  var e = Va[r(a == k ? k : a)];
  e ? c = e : (e = Va._) ? c = e : d(w("IWithMeta.-with-meta", a));
  return c.call(k, a, b)
}
var Wa = {}, Xa, Ya = k;
function Za(a, b) {
  if(a ? a.la : a) {
    return a.la(a, b)
  }
  var c;
  var e = Xa[r(a == k ? k : a)];
  e ? c = e : (e = Xa._) ? c = e : d(w("IReduce.-reduce", a));
  return c.call(k, a, b)
}
function $a(a, b, c) {
  if(a ? a.ma : a) {
    return a.ma(a, b, c)
  }
  var e;
  var f = Xa[r(a == k ? k : a)];
  f ? e = f : (f = Xa._) ? e = f : d(w("IReduce.-reduce", a));
  return e.call(k, a, b, c)
}
Ya = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Za.call(this, a, b);
    case 3:
      return $a.call(this, a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Ya.b = Za;
Ya.c = $a;
Xa = Ya;
function ab(a, b) {
  if(a ? a.w : a) {
    return a.w(a, b)
  }
  var c;
  var e = ab[r(a == k ? k : a)];
  e ? c = e : (e = ab._) ? c = e : d(w("IEquiv.-equiv", a));
  return c.call(k, a, b)
}
function bb(a) {
  if(a ? a.B : a) {
    return a.B(a)
  }
  var b;
  var c = bb[r(a == k ? k : a)];
  c ? b = c : (c = bb._) ? b = c : d(w("IHash.-hash", a));
  return b.call(k, a)
}
function cb(a) {
  if(a ? a.A : a) {
    return a.A(a)
  }
  var b;
  var c = cb[r(a == k ? k : a)];
  c ? b = c : (c = cb._) ? b = c : d(w("ISeqable.-seq", a));
  return b.call(k, a)
}
var db = {}, eb = {};
function fb(a) {
  if(a ? a.Pa : a) {
    return a.Pa(a)
  }
  var b;
  var c = fb[r(a == k ? k : a)];
  c ? b = c : (c = fb._) ? b = c : d(w("IReversible.-rseq", a));
  return b.call(k, a)
}
var gb = {};
function hb(a, b) {
  if(a ? a.D : a) {
    return a.D(a, b)
  }
  var c;
  var e = hb[r(a == k ? k : a)];
  e ? c = e : (e = hb._) ? c = e : d(w("IPrintable.-pr-seq", a));
  return c.call(k, a, b)
}
function E(a, b) {
  if(a ? a.zb : a) {
    return a.zb(0, b)
  }
  var c;
  var e = E[r(a == k ? k : a)];
  e ? c = e : (e = E._) ? c = e : d(w("IWriter.-write", a));
  return c.call(k, a, b)
}
function ib(a) {
  if(a ? a.Jb : a) {
    return k
  }
  var b;
  var c = ib[r(a == k ? k : a)];
  c ? b = c : (c = ib._) ? b = c : d(w("IWriter.-flush", a));
  return b.call(k, a)
}
var jb = {};
function kb(a, b, c) {
  if(a ? a.C : a) {
    return a.C(a, b, c)
  }
  var e;
  var f = kb[r(a == k ? k : a)];
  f ? e = f : (f = kb._) ? e = f : d(w("IPrintWithWriter.-pr-writer", a));
  return e.call(k, a, b, c)
}
function lb(a, b, c) {
  if(a ? a.yb : a) {
    return a.yb(a, b, c)
  }
  var e;
  var f = lb[r(a == k ? k : a)];
  f ? e = f : (f = lb._) ? e = f : d(w("IWatchable.-notify-watches", a));
  return e.call(k, a, b, c)
}
var mb = {};
function nb(a) {
  if(a ? a.xa : a) {
    return a.xa(a)
  }
  var b;
  var c = nb[r(a == k ? k : a)];
  c ? b = c : (c = nb._) ? b = c : d(w("IEditableCollection.-as-transient", a));
  return b.call(k, a)
}
function ob(a, b) {
  if(a ? a.za : a) {
    return a.za(a, b)
  }
  var c;
  var e = ob[r(a == k ? k : a)];
  e ? c = e : (e = ob._) ? c = e : d(w("ITransientCollection.-conj!", a));
  return c.call(k, a, b)
}
function pb(a) {
  if(a ? a.Ga : a) {
    return a.Ga(a)
  }
  var b;
  var c = pb[r(a == k ? k : a)];
  c ? b = c : (c = pb._) ? b = c : d(w("ITransientCollection.-persistent!", a));
  return b.call(k, a)
}
function qb(a, b, c) {
  if(a ? a.ya : a) {
    return a.ya(a, b, c)
  }
  var e;
  var f = qb[r(a == k ? k : a)];
  f ? e = f : (f = qb._) ? e = f : d(w("ITransientAssociative.-assoc!", a));
  return e.call(k, a, b, c)
}
var rb = {};
function sb(a, b) {
  if(a ? a.vb : a) {
    return a.vb(a, b)
  }
  var c;
  var e = sb[r(a == k ? k : a)];
  e ? c = e : (e = sb._) ? c = e : d(w("IComparable.-compare", a));
  return c.call(k, a, b)
}
function tb(a) {
  if(a ? a.tb : a) {
    return a.tb()
  }
  var b;
  var c = tb[r(a == k ? k : a)];
  c ? b = c : (c = tb._) ? b = c : d(w("IChunk.-drop-first", a));
  return b.call(k, a)
}
var vb = {};
function wb(a) {
  if(a ? a.Va : a) {
    return a.Va(a)
  }
  var b;
  var c = wb[r(a == k ? k : a)];
  c ? b = c : (c = wb._) ? b = c : d(w("IChunkedSeq.-chunked-first", a));
  return b.call(k, a)
}
function xb(a) {
  if(a ? a.Ma : a) {
    return a.Ma(a)
  }
  var b;
  var c = xb[r(a == k ? k : a)];
  c ? b = c : (c = xb._) ? b = c : d(w("IChunkedSeq.-chunked-rest", a));
  return b.call(k, a)
}
function F(a) {
  if(a == k) {
    a = k
  }else {
    var b;
    a ? (b = a.h & 32, b = u(b ? b : a.Ob) ? j : a.h ? l : v(ya, a)) : b = v(ya, a);
    a = u(b) ? a : cb(a)
  }
  return a
}
function G(a) {
  if(a == k) {
    return k
  }
  var b;
  a ? (b = a.h & 64, b = u(b ? b : a.Qa) ? j : a.h ? l : v(za, a)) : b = v(za, a);
  if(u(b)) {
    return B(a)
  }
  a = F(a);
  return a == k ? k : B(a)
}
function H(a) {
  if(a != k) {
    var b;
    a ? (b = a.h & 64, b = u(b ? b : a.Qa) ? j : a.h ? l : v(za, a)) : b = v(za, a);
    if(u(b)) {
      return Ba(a)
    }
    a = F(a);
    return a != k ? Ba(a) : J
  }
  return J
}
function K(a) {
  if(a == k) {
    a = k
  }else {
    var b;
    a ? (b = a.h & 128, b = u(b ? b : a.Tb) ? j : a.h ? l : v(Ca, a)) : b = v(Ca, a);
    a = u(b) ? Da(a) : F(H(a))
  }
  return a
}
var yb, zb = k;
function Ab(a, b) {
  var c = a === b;
  return c ? c : ab(a, b)
}
function Bb(a, b, c) {
  for(;;) {
    if(u(zb.b(a, b))) {
      if(K(c)) {
        a = b, b = G(c), c = K(c)
      }else {
        return zb.b(b, G(c))
      }
    }else {
      return l
    }
  }
}
function Cb(a, b, c) {
  var e = k;
  t(c) && (e = L(Array.prototype.slice.call(arguments, 2), 0));
  return Bb.call(this, a, b, e)
}
Cb.n = 2;
Cb.l = function(a) {
  var b = G(a), c = G(K(a)), a = H(K(a));
  return Bb(b, c, a)
};
Cb.e = Bb;
zb = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return j;
    case 2:
      return Ab.call(this, a, b);
    default:
      return Cb.e(a, b, L(arguments, 2))
  }
  d(Error("Invalid arity: " + arguments.length))
};
zb.n = 2;
zb.l = Cb.l;
zb.a = n(j);
zb.b = Ab;
zb.e = Cb.e;
yb = zb;
function Db(a, b) {
  return b instanceof a
}
var Eb = g, M = g, Fb = g;
bb["null"] = n(0);
var Gb = k, Gb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return k;
    case 3:
      return c
  }
  d(Error("Invalid arity: " + arguments.length))
};
D["null"] = Gb;
Ja["null"] = function(a, b, c) {
  return Eb.b ? Eb.b(b, c) : Eb.call(k, b, c)
};
Ca["null"] = j;
Da["null"] = n(k);
jb["null"] = j;
kb["null"] = function(a, b) {
  return E(b, "nil")
};
sa["null"] = j;
ta["null"] = function(a, b) {
  return M.a ? M.a(b) : M.call(k, b)
};
Wa["null"] = j;
var Hb = k, Hb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return b.r ? b.r() : b.call(k);
    case 3:
      return c
  }
  d(Error("Invalid arity: " + arguments.length))
};
Xa["null"] = Hb;
gb["null"] = j;
hb["null"] = function() {
  return M.a ? M.a("nil") : M.call(k, "nil")
};
Oa["null"] = j;
pa["null"] = j;
qa["null"] = n(0);
Pa["null"] = n(k);
za["null"] = j;
B["null"] = n(k);
Ba["null"] = function() {
  return M.r ? M.r() : M.call(k)
};
ab["null"] = function(a, b) {
  return b == k
};
Ua["null"] = j;
Va["null"] = n(k);
Sa["null"] = j;
Ta["null"] = n(k);
ua["null"] = j;
var Ib = k, Ib = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return k;
    case 3:
      return c
  }
  d(Error("Invalid arity: " + arguments.length))
};
z["null"] = Ib;
ra["null"] = n(k);
Ka["null"] = j;
Date.prototype.w = function(a, b) {
  var c = Db(Date, b);
  return c ? a.toString() === b.toString() : c
};
bb.number = function(a) {
  return Math.floor(a) % 2147483647
};
ab.number = function(a, b) {
  return a === b
};
bb["boolean"] = function(a) {
  return a === j ? 1 : 0
};
var N = g;
Ua["function"] = j;
Va["function"] = function(a, b) {
  return N.b ? N.b(function() {
    if(g === ha) {
      ha = {};
      ha = function(a, b, c) {
        this.k = a;
        this.ua = b;
        this.mb = c;
        this.q = 0;
        this.h = 393217
      };
      ha.X = j;
      ha.ba = function() {
        return M.a ? M.a("cljs.core/t3118") : M.call(k, "cljs.core/t3118")
      };
      ha.ca = function(a, b) {
        return E(b, "cljs.core/t3118")
      };
      var c = function(a, b) {
        return x.b ? x.b(a.ua, b) : x.call(k, a.ua, b)
      }, e = function(a, b) {
        var a = this, e = k;
        t(b) && (e = L(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, a, e)
      };
      e.n = 1;
      e.l = function(a) {
        var b = G(a), a = H(a);
        return c(b, a)
      };
      e.e = c;
      ha.prototype.call = e;
      ha.prototype.apply = function(a, b) {
        a = this;
        return a.call.apply(a, [a].concat(b.slice()))
      };
      ha.prototype.sb = j;
      ha.prototype.H = m("mb");
      ha.prototype.I = function(a, b) {
        return new ha(this.k, this.ua, b)
      }
    }
    return new ha(b, a, k)
  }(), b) : N.call(k, function() {
    if(g === ha) {
      ha = function(a, b, c) {
        this.k = a;
        this.ua = b;
        this.mb = c;
        this.q = 0;
        this.h = 393217
      };
      ha.X = j;
      ha.ba = function() {
        return M.a ? M.a("cljs.core/t3118") : M.call(k, "cljs.core/t3118")
      };
      ha.ca = function(a, b) {
        return E(b, "cljs.core/t3118")
      };
      var c = function(a, b) {
        return x.b ? x.b(a.ua, b) : x.call(k, a.ua, b)
      }, e = function(a, b) {
        var a = this, e = k;
        t(b) && (e = L(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, a, e)
      };
      e.n = 1;
      e.l = function(a) {
        var b = G(a), a = H(a);
        return c(b, a)
      };
      e.e = c;
      ha.prototype.call = e;
      ha.prototype.apply = function(a, b) {
        a = this;
        return a.call.apply(a, [a].concat(b.slice()))
      };
      ha.prototype.sb = j;
      ha.prototype.H = m("mb");
      ha.prototype.I = function(a, b) {
        return new ha(this.k, this.ua, b)
      }
    }
    return new ha(b, a, k)
  }(), b)
};
Sa["function"] = j;
Ta["function"] = n(k);
oa["function"] = j;
bb._ = function(a) {
  return a[ca] || (a[ca] = ++da)
};
function Jb(a) {
  return a + 1
}
var P = g;
function Kb(a) {
  this.val = a;
  this.q = 0;
  this.h = 32768
}
Kb.prototype.Wa = m("val");
var Lb, Mb = k;
function Nb(a, b) {
  var c = qa(a);
  if(0 === c) {
    return b.r ? b.r() : b.call(k)
  }
  for(var e = z.b(a, 0), f = 1;;) {
    if(f < c) {
      e = b.b ? b.b(e, z.b(a, f)) : b.call(k, e, z.b(a, f));
      if(Db(Kb, e)) {
        return P.a ? P.a(e) : P.call(k, e)
      }
      f += 1
    }else {
      return e
    }
  }
}
function Ob(a, b, c) {
  for(var e = qa(a), f = 0;;) {
    if(f < e) {
      c = b.b ? b.b(c, z.b(a, f)) : b.call(k, c, z.b(a, f));
      if(Db(Kb, c)) {
        return P.a ? P.a(c) : P.call(k, c)
      }
      f += 1
    }else {
      return c
    }
  }
}
function Pb(a, b, c, e) {
  for(var f = qa(a);;) {
    if(e < f) {
      c = b.b ? b.b(c, z.b(a, e)) : b.call(k, c, z.b(a, e));
      if(Db(Kb, c)) {
        return P.a ? P.a(c) : P.call(k, c)
      }
      e += 1
    }else {
      return c
    }
  }
}
Mb = function(a, b, c, e) {
  switch(arguments.length) {
    case 2:
      return Nb.call(this, a, b);
    case 3:
      return Ob.call(this, a, b, c);
    case 4:
      return Pb.call(this, a, b, c, e)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Mb.b = Nb;
Mb.c = Ob;
Mb.o = Pb;
Lb = Mb;
var Qb, Rb = k;
function Sb(a, b) {
  var c = a.length;
  if(0 === a.length) {
    return b.r ? b.r() : b.call(k)
  }
  for(var e = a[0], f = 1;;) {
    if(f < c) {
      e = b.b ? b.b(e, a[f]) : b.call(k, e, a[f]);
      if(Db(Kb, e)) {
        return P.a ? P.a(e) : P.call(k, e)
      }
      f += 1
    }else {
      return e
    }
  }
}
function Tb(a, b, c) {
  for(var e = a.length, f = 0;;) {
    if(f < e) {
      c = b.b ? b.b(c, a[f]) : b.call(k, c, a[f]);
      if(Db(Kb, c)) {
        return P.a ? P.a(c) : P.call(k, c)
      }
      f += 1
    }else {
      return c
    }
  }
}
function Ub(a, b, c, e) {
  for(var f = a.length;;) {
    if(e < f) {
      c = b.b ? b.b(c, a[e]) : b.call(k, c, a[e]);
      if(Db(Kb, c)) {
        return P.a ? P.a(c) : P.call(k, c)
      }
      e += 1
    }else {
      return c
    }
  }
}
Rb = function(a, b, c, e) {
  switch(arguments.length) {
    case 2:
      return Sb.call(this, a, b);
    case 3:
      return Tb.call(this, a, b, c);
    case 4:
      return Ub.call(this, a, b, c, e)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Rb.b = Sb;
Rb.c = Tb;
Rb.o = Ub;
Qb = Rb;
var Vb = g, Q = g, R = g, Wb = g;
function Xb(a) {
  if(a) {
    var b = a.h & 2, a = u(b ? b : a.Eb) ? j : a.h ? l : v(pa, a)
  }else {
    a = v(pa, a)
  }
  return a
}
function Yb(a) {
  if(a) {
    var b = a.h & 16, a = u(b ? b : a.Xa) ? j : a.h ? l : v(ua, a)
  }else {
    a = v(ua, a)
  }
  return a
}
function Zb(a, b) {
  this.P = a;
  this.p = b;
  this.q = 0;
  this.h = 166199550
}
q = Zb.prototype;
q.B = function(a) {
  return Vb.a ? Vb.a(a) : Vb.call(k, a)
};
q.ka = function() {
  return this.p + 1 < this.P.length ? new Zb(this.P, this.p + 1) : k
};
q.F = function(a, b) {
  return Q.b ? Q.b(b, a) : Q.call(k, b, a)
};
q.Pa = function(a) {
  var b = a.z(a);
  return 0 < b ? new Wb(a, b - 1, k) : J
};
q.toString = function() {
  return R.a ? R.a(this) : R.call(k, this)
};
q.la = function(a, b) {
  return Xb(this.P) ? Lb.o(this.P, b, this.P[this.p], this.p + 1) : Lb.o(a, b, this.P[this.p], 0)
};
q.ma = function(a, b, c) {
  return Xb(this.P) ? Lb.o(this.P, b, c, this.p) : Lb.o(a, b, c, 0)
};
q.A = aa();
q.z = function() {
  return this.P.length - this.p
};
q.Q = function() {
  return this.P[this.p]
};
q.O = function() {
  return this.p + 1 < this.P.length ? new Zb(this.P, this.p + 1) : M.r ? M.r() : M.call(k)
};
q.w = function(a, b) {
  return Fb.b ? Fb.b(a, b) : Fb.call(k, a, b)
};
q.T = function(a, b) {
  var c = b + this.p;
  return c < this.P.length ? this.P[c] : k
};
q.N = function(a, b, c) {
  a = b + this.p;
  return a < this.P.length ? this.P[a] : c
};
q.G = function() {
  return J
};
var $b, ac = k;
function bc(a) {
  return ac.b(a, 0)
}
function cc(a, b) {
  return b < a.length ? new Zb(a, b) : k
}
ac = function(a, b) {
  switch(arguments.length) {
    case 1:
      return bc.call(this, a);
    case 2:
      return cc.call(this, a, b)
  }
  d(Error("Invalid arity: " + arguments.length))
};
ac.a = bc;
ac.b = cc;
$b = ac;
var L, dc = k;
function ec(a) {
  return $b.b(a, 0)
}
function fc(a, b) {
  return $b.b(a, b)
}
dc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return ec.call(this, a);
    case 2:
      return fc.call(this, a, b)
  }
  d(Error("Invalid arity: " + arguments.length))
};
dc.a = ec;
dc.b = fc;
L = dc;
Wa.array = j;
var gc = k, gc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Lb.b(a, b);
    case 3:
      return Lb.c(a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Xa.array = gc;
var hc = k, hc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return a[b];
    case 3:
      return z.c(a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
D.array = hc;
ua.array = j;
var ic = k, ic = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return b < a.length ? a[b] : k;
    case 3:
      return b < a.length ? a[b] : c
  }
  d(Error("Invalid arity: " + arguments.length))
};
z.array = ic;
pa.array = j;
qa.array = function(a) {
  return a.length
};
cb.array = function(a) {
  return L.b(a, 0)
};
N = g;
Wb = function(a, b, c) {
  this.Ua = a;
  this.p = b;
  this.k = c;
  this.q = 0;
  this.h = 31850574
};
Wb.X = j;
Wb.ba = function() {
  return M.a ? M.a("cljs.core/RSeq") : M.call(k, "cljs.core/RSeq")
};
Wb.ca = function(a, b) {
  return E(b, "cljs.core/RSeq")
};
q = Wb.prototype;
q.B = function(a) {
  return Vb.a ? Vb.a(a) : Vb.call(k, a)
};
q.F = function(a, b) {
  return Q.b ? Q.b(b, a) : Q.call(k, b, a)
};
q.toString = function() {
  return R.a ? R.a(this) : R.call(k, this)
};
q.A = aa();
q.z = function() {
  return this.p + 1
};
q.Q = function() {
  return z.b(this.Ua, this.p)
};
q.O = function() {
  return 0 < this.p ? new Wb(this.Ua, this.p - 1, k) : J
};
q.w = function(a, b) {
  return Fb.b ? Fb.b(a, b) : Fb.call(k, a, b)
};
q.I = function(a, b) {
  return new Wb(this.Ua, this.p, b)
};
q.H = m("k");
q.G = function() {
  return N.b ? N.b(J, this.k) : N.call(k, J, this.k)
};
ab._ = function(a, b) {
  return a === b
};
var jc, kc = k;
function lc(a, b, c) {
  for(;;) {
    if(u(c)) {
      a = kc.b(a, b), b = G(c), c = K(c)
    }else {
      return kc.b(a, b)
    }
  }
}
function mc(a, b, c) {
  var e = k;
  t(c) && (e = L(Array.prototype.slice.call(arguments, 2), 0));
  return lc.call(this, a, b, e)
}
mc.n = 2;
mc.l = function(a) {
  var b = G(a), c = G(K(a)), a = H(K(a));
  return lc(b, c, a)
};
mc.e = lc;
kc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return ta(a, b);
    default:
      return mc.e(a, b, L(arguments, 2))
  }
  d(Error("Invalid arity: " + arguments.length))
};
kc.n = 2;
kc.l = mc.l;
kc.b = function(a, b) {
  return ta(a, b)
};
kc.e = mc.e;
jc = kc;
function nc(a) {
  if(Xb(a)) {
    a = qa(a)
  }else {
    a: {
      for(var a = F(a), b = 0;;) {
        if(Xb(a)) {
          a = b + qa(a);
          break a
        }
        a = K(a);
        b += 1
      }
      a = g
    }
  }
  return a
}
var oc, pc = k;
function qc(a, b) {
  for(;;) {
    a == k && d(Error("Index out of bounds"));
    if(0 === b) {
      if(F(a)) {
        return G(a)
      }
      d(Error("Index out of bounds"))
    }
    if(Yb(a)) {
      return z.b(a, b)
    }
    if(F(a)) {
      var c = K(a), e = b - 1, a = c, b = e
    }else {
      d(Error("Index out of bounds"))
    }
  }
}
function rc(a, b, c) {
  for(;;) {
    if(a == k) {
      return c
    }
    if(0 === b) {
      return F(a) ? G(a) : c
    }
    if(Yb(a)) {
      return z.c(a, b, c)
    }
    if(F(a)) {
      a = K(a), b -= 1
    }else {
      return c
    }
  }
}
pc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return qc.call(this, a, b);
    case 3:
      return rc.call(this, a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
pc.b = qc;
pc.c = rc;
oc = pc;
var S, sc = k;
function tc(a, b) {
  var c;
  a == k ? c = k : (a ? (c = a.h & 16, c = u(c ? c : a.Xa) ? j : a.h ? l : v(ua, a)) : c = v(ua, a), c = u(c) ? z.b(a, Math.floor(b)) : oc.b(a, Math.floor(b)));
  return c
}
function uc(a, b, c) {
  if(a != k) {
    var e;
    a ? (e = a.h & 16, e = u(e ? e : a.Xa) ? j : a.h ? l : v(ua, a)) : e = v(ua, a);
    a = u(e) ? z.c(a, Math.floor(b), c) : oc.c(a, Math.floor(b), c)
  }else {
    a = c
  }
  return a
}
sc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return tc.call(this, a, b);
    case 3:
      return uc.call(this, a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
sc.b = tc;
sc.c = uc;
S = sc;
var vc, wc = k;
function xc(a, b, c, e) {
  for(;;) {
    if(a = wc.c(a, b, c), u(e)) {
      b = G(e), c = G(K(e)), e = K(K(e))
    }else {
      return a
    }
  }
}
function yc(a, b, c, e) {
  var f = k;
  t(e) && (f = L(Array.prototype.slice.call(arguments, 3), 0));
  return xc.call(this, a, b, c, f)
}
yc.n = 3;
yc.l = function(a) {
  var b = G(a), c = G(K(a)), e = G(K(K(a))), a = H(K(K(a)));
  return xc(b, c, e, a)
};
yc.e = xc;
wc = function(a, b, c, e) {
  switch(arguments.length) {
    case 3:
      return Ja(a, b, c);
    default:
      return yc.e(a, b, c, L(arguments, 3))
  }
  d(Error("Invalid arity: " + arguments.length))
};
wc.n = 3;
wc.l = yc.l;
wc.c = function(a, b, c) {
  return Ja(a, b, c)
};
wc.e = yc.e;
vc = wc;
N = function(a, b) {
  return Va(a, b)
};
function zc(a) {
  var b;
  a ? (b = a.h & 131072, b = u(b ? b : a.wb) ? j : a.h ? l : v(Sa, a)) : b = v(Sa, a);
  return u(b) ? Ta(a) : k
}
var Ac = {}, Bc = 0, Cc, Dc = k;
function Ec(a) {
  return Dc.b(a, j)
}
function Fc(a, b) {
  var c;
  c = ba(a);
  u(c ? b : c) ? (255 < Bc && (Ac = {}, Bc = 0), c = Ac[a], c == k && (c = ea(a), Ac[a] = c, Bc += 1)) : c = bb(a);
  return c
}
Dc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Ec.call(this, a);
    case 2:
      return Fc.call(this, a, b)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Dc.a = Ec;
Dc.b = Fc;
Cc = Dc;
function Gc(a) {
  var b = a == k;
  return b ? b : ia(F(a))
}
function Hc(a) {
  if(a == k) {
    a = l
  }else {
    if(a) {
      var b = a.h & 8, a = u(b ? b : a.Qb) ? j : a.h ? l : v(sa, a)
    }else {
      a = v(sa, a)
    }
  }
  return a
}
function Ic(a) {
  if(a == k) {
    a = l
  }else {
    if(a) {
      var b = a.h & 4096, a = u(b ? b : a.Vb) ? j : a.h ? l : v(Oa, a)
    }else {
      a = v(Oa, a)
    }
  }
  return a
}
function Jc(a) {
  if(a == k) {
    a = l
  }else {
    if(a) {
      var b = a.h & 1024, a = u(b ? b : a.Sb) ? j : a.h ? l : v(Ka, a)
    }else {
      a = v(Ka, a)
    }
  }
  return a
}
function Kc(a) {
  if(a) {
    var b = a.h & 16384, a = u(b ? b : a.Wb) ? j : a.h ? l : v(Qa, a)
  }else {
    a = v(Qa, a)
  }
  return a
}
function Lc(a) {
  if(a) {
    var b = a.q & 512, a = u(b ? b : a.Pb) ? j : a.q ? l : v(vb, a)
  }else {
    a = v(vb, a)
  }
  return a
}
function Mc(a, b, c, e, f) {
  for(;0 !== f;) {
    c[e] = a[b], e += 1, f -= 1, b += 1
  }
}
var Nc = {};
function Oc(a) {
  if(a == k) {
    a = l
  }else {
    if(a) {
      var b = a.h & 64, a = u(b ? b : a.Qa) ? j : a.h ? l : v(za, a)
    }else {
      a = v(za, a)
    }
  }
  return a
}
function Pc(a) {
  var b = ba(a);
  b ? (b = "\ufdd0" === a.charAt(0), a = ia(b ? b : "\ufdd1" === a.charAt(0))) : a = b;
  return a
}
function Qc(a) {
  var b = ba(a);
  return b ? "\ufdd0" === a.charAt(0) : b
}
function Rc(a) {
  var b = ba(a);
  return b ? "\ufdd1" === a.charAt(0) : b
}
function Sc(a, b) {
  if(a === b) {
    return 0
  }
  if(a == k) {
    return-1
  }
  if(b == k) {
    return 1
  }
  if((a == k ? k : a.constructor) === (b == k ? k : b.constructor)) {
    var c;
    a ? (c = a.q & 2048, c = u(c ? c : a.Db) ? j : a.q ? l : v(rb, a)) : c = v(rb, a);
    return u(c) ? sb(a, b) : a > b ? 1 : a < b ? -1 : 0
  }
  d(Error("compare on non-nil objects of different types"))
}
var Tc, Uc = k;
function Vc(a, b) {
  var c = nc(a), e = nc(b);
  return c < e ? -1 : c > e ? 1 : Uc.o(a, b, c, 0)
}
function Wc(a, b, c, e) {
  for(;;) {
    var f = Sc(S.b(a, e), S.b(b, e)), h = 0 === f;
    if(u(h ? e + 1 < c : h)) {
      e += 1
    }else {
      return f
    }
  }
}
Uc = function(a, b, c, e) {
  switch(arguments.length) {
    case 2:
      return Vc.call(this, a, b);
    case 4:
      return Wc.call(this, a, b, c, e)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Uc.b = Vc;
Uc.o = Wc;
Tc = Uc;
var Xc = g, Yc, Zc = k;
function $c(a, b) {
  var c = F(b);
  return c ? na.c ? na.c(a, G(c), K(c)) : na.call(k, a, G(c), K(c)) : a.r ? a.r() : a.call(k)
}
function ad(a, b, c) {
  for(c = F(c);;) {
    if(c) {
      b = a.b ? a.b(b, G(c)) : a.call(k, b, G(c));
      if(Db(Kb, b)) {
        return P.a ? P.a(b) : P.call(k, b)
      }
      c = K(c)
    }else {
      return b
    }
  }
}
Zc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return $c.call(this, a, b);
    case 3:
      return ad.call(this, a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Zc.b = $c;
Zc.c = ad;
Yc = Zc;
var bd = g, cd = k;
function dd(a, b) {
  var c;
  b ? (c = b.h & 524288, c = u(c ? c : b.xb) ? j : b.h ? l : v(Wa, b)) : c = v(Wa, b);
  return u(c) ? Xa.b(b, a) : Yc.b(a, b)
}
function ed(a, b, c) {
  var e;
  c ? (e = c.h & 524288, e = u(e ? e : c.xb) ? j : c.h ? l : v(Wa, c)) : e = v(Wa, c);
  return u(e) ? Xa.c(c, a, b) : Yc.c(a, b, c)
}
cd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return dd.call(this, a, b);
    case 3:
      return ed.call(this, a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
cd.b = dd;
cd.c = ed;
na = cd;
function fd(a) {
  return 0 <= a ? Math.floor.a ? Math.floor.a(a) : Math.floor.call(k, a) : Math.ceil.a ? Math.ceil.a(a) : Math.ceil.call(k, a)
}
var gd, hd = k;
function id() {
  return Math.random.r ? Math.random.r() : Math.random.call(k)
}
function jd(a) {
  return a * hd.r()
}
hd = function(a) {
  switch(arguments.length) {
    case 0:
      return id.call(this);
    case 1:
      return jd.call(this, a)
  }
  d(Error("Invalid arity: " + arguments.length))
};
hd.r = id;
hd.a = jd;
gd = hd;
function ld(a) {
  return fd(gd.a(a))
}
function md(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var nd, od = k;
function pd(a) {
  return a == k ? "" : a.toString()
}
function qd(a, b) {
  return function(a, b) {
    for(;;) {
      if(u(b)) {
        var f = a.append(od.a(G(b))), h = K(b), a = f, b = h
      }else {
        return od.a(a)
      }
    }
  }.call(k, new ga(od.a(a)), b)
}
function rd(a, b) {
  var c = k;
  t(b) && (c = L(Array.prototype.slice.call(arguments, 1), 0));
  return qd.call(this, a, c)
}
rd.n = 1;
rd.l = function(a) {
  var b = G(a), a = H(a);
  return qd(b, a)
};
rd.e = qd;
od = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return pd.call(this, a);
    default:
      return rd.e(a, L(arguments, 1))
  }
  d(Error("Invalid arity: " + arguments.length))
};
od.n = 1;
od.l = rd.l;
od.r = n("");
od.a = pd;
od.e = rd.e;
nd = od;
var T, sd = k;
function td(a) {
  return Rc(a) ? a.substring(2, a.length) : Qc(a) ? nd.e(":", L([a.substring(2, a.length)], 0)) : a == k ? "" : a.toString()
}
function ud(a, b) {
  return function(a, b) {
    for(;;) {
      if(u(b)) {
        var f = a.append(sd.a(G(b))), h = K(b), a = f, b = h
      }else {
        return nd.a(a)
      }
    }
  }.call(k, new ga(sd.a(a)), b)
}
function vd(a, b) {
  var c = k;
  t(b) && (c = L(Array.prototype.slice.call(arguments, 1), 0));
  return ud.call(this, a, c)
}
vd.n = 1;
vd.l = function(a) {
  var b = G(a), a = H(a);
  return ud(b, a)
};
vd.e = ud;
sd = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return td.call(this, a);
    default:
      return vd.e(a, L(arguments, 1))
  }
  d(Error("Invalid arity: " + arguments.length))
};
sd.n = 1;
sd.l = vd.l;
sd.r = n("");
sd.a = td;
sd.e = vd.e;
T = sd;
var wd, xd = k, xd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return a.substring(b);
    case 3:
      return a.substring(b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
xd.b = function(a, b) {
  return a.substring(b)
};
xd.c = function(a, b, c) {
  return a.substring(b, c)
};
wd = xd;
var yd = g, zd, Ad = k;
function Bd(a) {
  return Rc(a) ? a : Qc(a) ? nd.e("\ufdd1", L(["'", wd.b(a, 2)], 0)) : nd.e("\ufdd1", L(["'", a], 0))
}
function Cd(a, b) {
  return Ad.a(nd.e(a, L(["/", b], 0)))
}
Ad = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Bd.call(this, a);
    case 2:
      return Cd.call(this, a, b)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Ad.a = Bd;
Ad.b = Cd;
zd = Ad;
var Dd, Ed = k;
function Fd(a) {
  return Qc(a) ? a : Rc(a) ? nd.e("\ufdd0", L([":", wd.b(a, 2)], 0)) : nd.e("\ufdd0", L([":", a], 0))
}
function Gd(a, b) {
  return Ed.a(nd.e(a, L(["/", b], 0)))
}
Ed = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Fd.call(this, a);
    case 2:
      return Gd.call(this, a, b)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Ed.a = Fd;
Ed.b = Gd;
Dd = Ed;
var Fb = function(a, b) {
  var c;
  b ? (c = b.h & 16777216, c = u(c ? c : b.Ib) || (b.h ? 0 : v(db, b))) : c = v(db, b);
  if(c) {
    a: {
      c = F(a);
      for(var e = F(b);;) {
        if(c == k) {
          c = e == k;
          break a
        }
        if(e != k && yb.b(G(c), G(e))) {
          c = K(c), e = K(e)
        }else {
          c = l;
          break a
        }
      }
      c = g
    }
  }else {
    c = k
  }
  return u(c) ? j : l
}, Vb = function(a) {
  return na.c(function(a, c) {
    var e = Cc.b(c, l);
    return a ^ e + 2654435769 + (a << 6) + (a >> 2)
  }, Cc.b(G(a), l), K(a))
}, Hd = g, Id = g;
function Jd(a) {
  for(var b = 0, a = F(a);;) {
    if(a) {
      var c = G(a), b = (b + (Cc.a(Hd.a ? Hd.a(c) : Hd.call(k, c)) ^ Cc.a(Id.a ? Id.a(c) : Id.call(k, c)))) % 4503599627370496, a = K(a)
    }else {
      return b
    }
  }
}
function Kd(a) {
  for(var b = 0, a = F(a);;) {
    if(a) {
      var c = G(a), b = (b + Cc.a(c)) % 4503599627370496, a = K(a)
    }else {
      return b
    }
  }
}
var Ld = g;
function Md(a, b, c, e, f) {
  this.k = a;
  this.first = b;
  this.ja = c;
  this.count = e;
  this.m = f;
  this.q = 0;
  this.h = 65413358
}
q = Md.prototype;
q.B = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Vb(a)
};
q.ka = function() {
  return 1 === this.count ? k : this.ja
};
q.F = function(a, b) {
  return new Md(this.k, b, a, this.count + 1, k)
};
q.toString = function() {
  return R.a ? R.a(this) : R.call(k, this)
};
q.A = aa();
q.z = m("count");
q.ta = m("first");
q.Q = m("first");
q.O = function() {
  return 1 === this.count ? J : this.ja
};
q.w = function(a, b) {
  return Fb(a, b)
};
q.I = function(a, b) {
  return new Md(b, this.first, this.ja, this.count, this.m)
};
q.H = m("k");
q.G = function() {
  return J
};
function Nd(a) {
  this.k = a;
  this.q = 0;
  this.h = 65413326
}
q = Nd.prototype;
q.B = n(0);
q.ka = n(k);
q.F = function(a, b) {
  return new Md(this.k, b, k, 1, k)
};
q.toString = function() {
  return R.a ? R.a(this) : R.call(k, this)
};
q.A = n(k);
q.z = n(0);
q.ta = n(k);
q.Q = n(k);
q.O = function() {
  return J
};
q.w = function(a, b) {
  return Fb(a, b)
};
q.I = function(a, b) {
  return new Nd(b)
};
q.H = m("k");
q.G = aa();
var J = new Nd(k);
function Od(a) {
  var b;
  a ? (b = a.h & 134217728, b = u(b ? b : a.Ub) || (a.h ? 0 : v(eb, a))) : b = v(eb, a);
  return b ? fb(a) : na.c(jc, J, a)
}
var Pd = k;
function Qd(a) {
  return jc.b(J, a)
}
function Rd(a, b) {
  return jc.b(Pd.a(b), a)
}
function Sd(a, b, c) {
  return jc.b(Pd.b(b, c), a)
}
function Td(a, b, c, e) {
  return jc.b(jc.b(jc.b(na.c(jc, J, Od(e)), c), b), a)
}
function Ud(a, b, c, e) {
  var f = k;
  t(e) && (f = L(Array.prototype.slice.call(arguments, 3), 0));
  return Td.call(this, a, b, c, f)
}
Ud.n = 3;
Ud.l = function(a) {
  var b = G(a), c = G(K(a)), e = G(K(K(a))), a = H(K(K(a)));
  return Td(b, c, e, a)
};
Ud.e = Td;
Pd = function(a, b, c, e) {
  switch(arguments.length) {
    case 0:
      return J;
    case 1:
      return Qd.call(this, a);
    case 2:
      return Rd.call(this, a, b);
    case 3:
      return Sd.call(this, a, b, c);
    default:
      return Ud.e(a, b, c, L(arguments, 3))
  }
  d(Error("Invalid arity: " + arguments.length))
};
Pd.n = 3;
Pd.l = Ud.l;
Pd.r = function() {
  return J
};
Pd.a = Qd;
Pd.b = Rd;
Pd.c = Sd;
Pd.e = Ud.e;
M = Pd;
function Vd(a, b, c, e) {
  this.k = a;
  this.first = b;
  this.ja = c;
  this.m = e;
  this.q = 0;
  this.h = 65405164
}
q = Vd.prototype;
q.B = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Vb(a)
};
q.ka = function() {
  return this.ja == k ? k : cb(this.ja)
};
q.F = function(a, b) {
  return new Vd(k, b, a, this.m)
};
q.toString = function() {
  return R.a ? R.a(this) : R.call(k, this)
};
q.A = aa();
q.Q = m("first");
q.O = function() {
  return this.ja == k ? J : this.ja
};
q.w = function(a, b) {
  return Fb(a, b)
};
q.I = function(a, b) {
  return new Vd(b, this.first, this.ja, this.m)
};
q.H = m("k");
q.G = function() {
  return N(J, this.k)
};
Q = function(a, b) {
  var c = b == k;
  c || (b ? (c = b.h & 64, c = u(c ? c : b.Qa) ? j : b.h ? l : v(za, b)) : c = v(za, b));
  return u(c) ? new Vd(k, a, b, k) : new Vd(k, a, F(b), k)
};
Wa.string = j;
var Wd = k, Wd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Lb.b(a, b);
    case 3:
      return Lb.c(a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Xa.string = Wd;
var Xd = k, Xd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return z.b(a, b);
    case 3:
      return z.c(a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
D.string = Xd;
ua.string = j;
var Yd = k, Yd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return b < qa(a) ? a.charAt(b) : k;
    case 3:
      return b < qa(a) ? a.charAt(b) : c
  }
  d(Error("Invalid arity: " + arguments.length))
};
z.string = Yd;
pa.string = j;
qa.string = function(a) {
  return a.length
};
cb.string = function(a) {
  return $b.b(a, 0)
};
bb.string = function(a) {
  return ea(a)
};
function Zd(a) {
  this.lb = a;
  this.q = 0;
  this.h = 1
}
var $d = k, $d = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      var e;
      e = a;
      e = this;
      if(b == k) {
        e = k
      }else {
        var f = b.va;
        e = f == k ? D.c(b, e.lb, k) : f[e.lb]
      }
      return e;
    case 3:
      return b == k ? c : D.c(b, this.lb, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Zd.prototype.call = $d;
Zd.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
var ae = k, ae = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return D.c(b, this.toString(), k);
    case 3:
      return D.c(b, this.toString(), c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
String.prototype.call = ae;
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > nc(b) ? D.c(b[0], a, k) : D.c(b[0], a, b[1])
};
function be(a) {
  var b = a.x;
  if(a.nb) {
    return b
  }
  a.x = b.r ? b.r() : b.call(k);
  a.nb = j;
  return a.x
}
function U(a, b, c, e) {
  this.k = a;
  this.nb = b;
  this.x = c;
  this.m = e;
  this.q = 0;
  this.h = 31850700
}
q = U.prototype;
q.B = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Vb(a)
};
q.ka = function(a) {
  return cb(a.O(a))
};
q.F = function(a, b) {
  return Q(b, a)
};
q.toString = function() {
  return R.a ? R.a(this) : R.call(k, this)
};
q.A = function(a) {
  return F(be(a))
};
q.Q = function(a) {
  return G(be(a))
};
q.O = function(a) {
  return H(be(a))
};
q.w = function(a, b) {
  return Fb(a, b)
};
q.I = function(a, b) {
  return new U(b, this.nb, this.x, this.m)
};
q.H = m("k");
q.G = function() {
  return N(J, this.k)
};
var ce = g;
function de(a, b) {
  this.Ta = a;
  this.end = b;
  this.q = 0;
  this.h = 2
}
de.prototype.z = m("end");
de.prototype.add = function(a) {
  this.Ta[this.end] = a;
  return this.end += 1
};
de.prototype.sa = function() {
  var a = new ce(this.Ta, 0, this.end);
  this.Ta = k;
  return a
};
ce = function(a, b, c) {
  this.g = a;
  this.off = b;
  this.end = c;
  this.q = 0;
  this.h = 524306
};
ce.X = j;
ce.ba = function() {
  return M.a("cljs.core/ArrayChunk")
};
ce.ca = function(a, b) {
  return E(b, "cljs.core/ArrayChunk")
};
q = ce.prototype;
q.la = function(a, b) {
  return Qb.o(this.g, b, this.g[this.off], this.off + 1)
};
q.ma = function(a, b, c) {
  return Qb.o(this.g, b, c, this.off)
};
q.tb = function() {
  this.off === this.end && d(Error("-drop-first of empty chunk"));
  return new ce(this.g, this.off + 1, this.end)
};
q.T = function(a, b) {
  return this.g[this.off + b]
};
q.N = function(a, b, c) {
  a = 0 <= b;
  return u(a ? b < this.end - this.off : a) ? this.g[this.off + b] : c
};
q.z = function() {
  return this.end - this.off
};
var ee, fe = k;
function ge(a) {
  return fe.c(a, 0, a.length)
}
function he(a, b) {
  return fe.c(a, b, a.length)
}
function ie(a, b, c) {
  return new ce(a, b, c)
}
fe = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return ge.call(this, a);
    case 2:
      return he.call(this, a, b);
    case 3:
      return ie.call(this, a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
fe.a = ge;
fe.b = he;
fe.c = ie;
ee = fe;
function je(a, b, c, e) {
  this.sa = a;
  this.qa = b;
  this.k = c;
  this.m = e;
  this.h = 31850604;
  this.q = 1536
}
q = je.prototype;
q.B = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Vb(a)
};
q.F = function(a, b) {
  return Q(b, a)
};
q.A = aa();
q.Q = function() {
  return z.b(this.sa, 0)
};
q.O = function() {
  return 1 < qa(this.sa) ? new je(tb(this.sa), this.qa, this.k, k) : this.qa == k ? J : this.qa
};
q.ub = function() {
  return this.qa == k ? k : this.qa
};
q.w = function(a, b) {
  return Fb(a, b)
};
q.I = function(a, b) {
  return new je(this.sa, this.qa, b, this.m)
};
q.H = m("k");
q.G = function() {
  return N(J, this.k)
};
q.Va = m("sa");
q.Ma = function() {
  return this.qa == k ? J : this.qa
};
function ke(a, b) {
  return 0 === qa(a) ? b : new je(a, b, k, k)
}
Xc = function(a) {
  for(var b = [];;) {
    if(F(a)) {
      b.push(G(a)), a = K(a)
    }else {
      return b
    }
  }
};
function le(a, b) {
  if(Xb(a)) {
    return nc(a)
  }
  for(var c = a, e = b, f = 0;;) {
    var h;
    h = (h = 0 < e) ? F(c) : h;
    if(u(h)) {
      c = K(c), e -= 1, f += 1
    }else {
      return f
    }
  }
}
var ne = function me(b) {
  return b == k ? k : K(b) == k ? F(G(b)) : Q(G(b), me(K(b)))
}, oe, pe = k;
function qe() {
  return new U(k, l, n(k), k)
}
function re(a) {
  return new U(k, l, function() {
    return a
  }, k)
}
function se(a, b) {
  return new U(k, l, function() {
    var c = F(a);
    return c ? Lc(c) ? ke(wb(c), pe.b(xb(c), b)) : Q(G(c), pe.b(H(c), b)) : b
  }, k)
}
function te(a, b, c) {
  return function f(a, b) {
    return new U(k, l, function() {
      var c = F(a);
      return c ? Lc(c) ? ke(wb(c), f(xb(c), b)) : Q(G(c), f(H(c), b)) : u(b) ? f(G(b), K(b)) : k
    }, k)
  }(pe.b(a, b), c)
}
function ue(a, b, c) {
  var e = k;
  t(c) && (e = L(Array.prototype.slice.call(arguments, 2), 0));
  return te.call(this, a, b, e)
}
ue.n = 2;
ue.l = function(a) {
  var b = G(a), c = G(K(a)), a = H(K(a));
  return te(b, c, a)
};
ue.e = te;
pe = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return qe.call(this);
    case 1:
      return re.call(this, a);
    case 2:
      return se.call(this, a, b);
    default:
      return ue.e(a, b, L(arguments, 2))
  }
  d(Error("Invalid arity: " + arguments.length))
};
pe.n = 2;
pe.l = ue.l;
pe.r = qe;
pe.a = re;
pe.b = se;
pe.e = ue.e;
oe = pe;
var ve, we = k;
function xe(a, b, c) {
  return Q(a, Q(b, c))
}
function ye(a, b, c, e) {
  return Q(a, Q(b, Q(c, e)))
}
function ze(a, b, c, e, f) {
  return Q(a, Q(b, Q(c, Q(e, ne(f)))))
}
function Ae(a, b, c, e, f) {
  var h = k;
  t(f) && (h = L(Array.prototype.slice.call(arguments, 4), 0));
  return ze.call(this, a, b, c, e, h)
}
Ae.n = 4;
Ae.l = function(a) {
  var b = G(a), c = G(K(a)), e = G(K(K(a))), f = G(K(K(K(a)))), a = H(K(K(K(a))));
  return ze(b, c, e, f, a)
};
Ae.e = ze;
we = function(a, b, c, e, f) {
  switch(arguments.length) {
    case 1:
      return F(a);
    case 2:
      return Q(a, b);
    case 3:
      return xe.call(this, a, b, c);
    case 4:
      return ye.call(this, a, b, c, e);
    default:
      return Ae.e(a, b, c, e, L(arguments, 4))
  }
  d(Error("Invalid arity: " + arguments.length))
};
we.n = 4;
we.l = Ae.l;
we.a = function(a) {
  return F(a)
};
we.b = function(a, b) {
  return Q(a, b)
};
we.c = xe;
we.o = ye;
we.e = Ae.e;
ve = we;
function Be(a) {
  return pb(a)
}
function Ce(a, b, c) {
  var e = F(c);
  if(0 === b) {
    return a.r ? a.r() : a.call(k)
  }
  var c = B(e), f = Ba(e);
  if(1 === b) {
    return a.a ? a.a(c) : a.a ? a.a(c) : a.call(k, c)
  }
  var e = B(f), h = Ba(f);
  if(2 === b) {
    return a.b ? a.b(c, e) : a.b ? a.b(c, e) : a.call(k, c, e)
  }
  var f = B(h), i = Ba(h);
  if(3 === b) {
    return a.c ? a.c(c, e, f) : a.c ? a.c(c, e, f) : a.call(k, c, e, f)
  }
  var h = B(i), p = Ba(i);
  if(4 === b) {
    return a.o ? a.o(c, e, f, h) : a.o ? a.o(c, e, f, h) : a.call(k, c, e, f, h)
  }
  i = B(p);
  p = Ba(p);
  if(5 === b) {
    return a.R ? a.R(c, e, f, h, i) : a.R ? a.R(c, e, f, h, i) : a.call(k, c, e, f, h, i)
  }
  var a = B(p), s = Ba(p);
  if(6 === b) {
    return a.ga ? a.ga(c, e, f, h, i, a) : a.ga ? a.ga(c, e, f, h, i, a) : a.call(k, c, e, f, h, i, a)
  }
  var p = B(s), A = Ba(s);
  if(7 === b) {
    return a.Aa ? a.Aa(c, e, f, h, i, a, p) : a.Aa ? a.Aa(c, e, f, h, i, a, p) : a.call(k, c, e, f, h, i, a, p)
  }
  var s = B(A), y = Ba(A);
  if(8 === b) {
    return a.jb ? a.jb(c, e, f, h, i, a, p, s) : a.jb ? a.jb(c, e, f, h, i, a, p, s) : a.call(k, c, e, f, h, i, a, p, s)
  }
  var A = B(y), C = Ba(y);
  if(9 === b) {
    return a.kb ? a.kb(c, e, f, h, i, a, p, s, A) : a.kb ? a.kb(c, e, f, h, i, a, p, s, A) : a.call(k, c, e, f, h, i, a, p, s, A)
  }
  var y = B(C), I = Ba(C);
  if(10 === b) {
    return a.Ya ? a.Ya(c, e, f, h, i, a, p, s, A, y) : a.Ya ? a.Ya(c, e, f, h, i, a, p, s, A, y) : a.call(k, c, e, f, h, i, a, p, s, A, y)
  }
  var C = B(I), O = Ba(I);
  if(11 === b) {
    return a.Za ? a.Za(c, e, f, h, i, a, p, s, A, y, C) : a.Za ? a.Za(c, e, f, h, i, a, p, s, A, y, C) : a.call(k, c, e, f, h, i, a, p, s, A, y, C)
  }
  var I = B(O), X = Ba(O);
  if(12 === b) {
    return a.$a ? a.$a(c, e, f, h, i, a, p, s, A, y, C, I) : a.$a ? a.$a(c, e, f, h, i, a, p, s, A, y, C, I) : a.call(k, c, e, f, h, i, a, p, s, A, y, C, I)
  }
  var O = B(X), V = Ba(X);
  if(13 === b) {
    return a.ab ? a.ab(c, e, f, h, i, a, p, s, A, y, C, I, O) : a.ab ? a.ab(c, e, f, h, i, a, p, s, A, y, C, I, O) : a.call(k, c, e, f, h, i, a, p, s, A, y, C, I, O)
  }
  var X = B(V), ma = Ba(V);
  if(14 === b) {
    return a.bb ? a.bb(c, e, f, h, i, a, p, s, A, y, C, I, O, X) : a.bb ? a.bb(c, e, f, h, i, a, p, s, A, y, C, I, O, X) : a.call(k, c, e, f, h, i, a, p, s, A, y, C, I, O, X)
  }
  var V = B(ma), Aa = Ba(ma);
  if(15 === b) {
    return a.cb ? a.cb(c, e, f, h, i, a, p, s, A, y, C, I, O, X, V) : a.cb ? a.cb(c, e, f, h, i, a, p, s, A, y, C, I, O, X, V) : a.call(k, c, e, f, h, i, a, p, s, A, y, C, I, O, X, V)
  }
  var ma = B(Aa), Ia = Ba(Aa);
  if(16 === b) {
    return a.eb ? a.eb(c, e, f, h, i, a, p, s, A, y, C, I, O, X, V, ma) : a.eb ? a.eb(c, e, f, h, i, a, p, s, A, y, C, I, O, X, V, ma) : a.call(k, c, e, f, h, i, a, p, s, A, y, C, I, O, X, V, ma)
  }
  var Aa = B(Ia), ub = Ba(Ia);
  if(17 === b) {
    return a.fb ? a.fb(c, e, f, h, i, a, p, s, A, y, C, I, O, X, V, ma, Aa) : a.fb ? a.fb(c, e, f, h, i, a, p, s, A, y, C, I, O, X, V, ma, Aa) : a.call(k, c, e, f, h, i, a, p, s, A, y, C, I, O, X, V, ma, Aa)
  }
  var Ia = B(ub), kd = Ba(ub);
  if(18 === b) {
    return a.gb ? a.gb(c, e, f, h, i, a, p, s, A, y, C, I, O, X, V, ma, Aa, Ia) : a.gb ? a.gb(c, e, f, h, i, a, p, s, A, y, C, I, O, X, V, ma, Aa, Ia) : a.call(k, c, e, f, h, i, a, p, s, A, y, C, I, O, X, V, ma, Aa, Ia)
  }
  ub = B(kd);
  kd = Ba(kd);
  if(19 === b) {
    return a.hb ? a.hb(c, e, f, h, i, a, p, s, A, y, C, I, O, X, V, ma, Aa, Ia, ub) : a.hb ? a.hb(c, e, f, h, i, a, p, s, A, y, C, I, O, X, V, ma, Aa, Ia, ub) : a.call(k, c, e, f, h, i, a, p, s, A, y, C, I, O, X, V, ma, Aa, Ia, ub)
  }
  var kf = B(kd);
  Ba(kd);
  if(20 === b) {
    return a.ib ? a.ib(c, e, f, h, i, a, p, s, A, y, C, I, O, X, V, ma, Aa, Ia, ub, kf) : a.ib ? a.ib(c, e, f, h, i, a, p, s, A, y, C, I, O, X, V, ma, Aa, Ia, ub, kf) : a.call(k, c, e, f, h, i, a, p, s, A, y, C, I, O, X, V, ma, Aa, Ia, ub, kf)
  }
  d(Error("Only up to 20 arguments supported on functions"))
}
var De = k;
function Ee(a, b) {
  var c = a.n;
  if(a.l) {
    var e = le(b, c + 1);
    return e <= c ? Ce(a, e, b) : a.l(b)
  }
  return a.apply(a, Xc(b))
}
function Fe(a, b, c) {
  b = ve.b(b, c);
  c = a.n;
  if(a.l) {
    var e = le(b, c + 1);
    return e <= c ? Ce(a, e, b) : a.l(b)
  }
  return a.apply(a, Xc(b))
}
function Ge(a, b, c, e) {
  b = ve.c(b, c, e);
  c = a.n;
  return a.l ? (e = le(b, c + 1), e <= c ? Ce(a, e, b) : a.l(b)) : a.apply(a, Xc(b))
}
function He(a, b, c, e, f) {
  b = ve.o(b, c, e, f);
  c = a.n;
  return a.l ? (e = le(b, c + 1), e <= c ? Ce(a, e, b) : a.l(b)) : a.apply(a, Xc(b))
}
function Ie(a, b, c, e, f, h) {
  b = Q(b, Q(c, Q(e, Q(f, ne(h)))));
  c = a.n;
  return a.l ? (e = le(b, c + 1), e <= c ? Ce(a, e, b) : a.l(b)) : a.apply(a, Xc(b))
}
function Je(a, b, c, e, f, h) {
  var i = k;
  t(h) && (i = L(Array.prototype.slice.call(arguments, 5), 0));
  return Ie.call(this, a, b, c, e, f, i)
}
Je.n = 5;
Je.l = function(a) {
  var b = G(a), c = G(K(a)), e = G(K(K(a))), f = G(K(K(K(a)))), h = G(K(K(K(K(a))))), a = H(K(K(K(K(a)))));
  return Ie(b, c, e, f, h, a)
};
Je.e = Ie;
De = function(a, b, c, e, f, h) {
  switch(arguments.length) {
    case 2:
      return Ee.call(this, a, b);
    case 3:
      return Fe.call(this, a, b, c);
    case 4:
      return Ge.call(this, a, b, c, e);
    case 5:
      return He.call(this, a, b, c, e, f);
    default:
      return Je.e(a, b, c, e, f, L(arguments, 5))
  }
  d(Error("Invalid arity: " + arguments.length))
};
De.n = 5;
De.l = Je.l;
De.b = Ee;
De.c = Fe;
De.o = Ge;
De.R = He;
De.e = Je.e;
var x = De, Ke, Le = k;
function Me(a, b) {
  return!yb.b(a, b)
}
function Ne(a, b, c) {
  return ia(x.o(yb, a, b, c))
}
function Oe(a, b, c) {
  var e = k;
  t(c) && (e = L(Array.prototype.slice.call(arguments, 2), 0));
  return Ne.call(this, a, b, e)
}
Oe.n = 2;
Oe.l = function(a) {
  var b = G(a), c = G(K(a)), a = H(K(a));
  return Ne(b, c, a)
};
Oe.e = Ne;
Le = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return l;
    case 2:
      return Me.call(this, a, b);
    default:
      return Oe.e(a, b, L(arguments, 2))
  }
  d(Error("Invalid arity: " + arguments.length))
};
Le.n = 2;
Le.l = Oe.l;
Le.a = n(l);
Le.b = Me;
Le.e = Oe.e;
Ke = Le;
function Pe(a, b) {
  for(;;) {
    if(F(b) == k) {
      return j
    }
    if(u(a.a ? a.a(G(b)) : a.call(k, G(b)))) {
      var c = a, e = K(b), a = c, b = e
    }else {
      return l
    }
  }
}
function Qe(a) {
  return a
}
var Re, Se = k;
function Te(a, b) {
  function c(a) {
    var b = k;
    t(a) && (b = L(Array.prototype.slice.call(arguments, 0), 0));
    return e.call(this, b)
  }
  function e(c) {
    return x.c(a, b, c)
  }
  c.n = 0;
  c.l = function(a) {
    a = F(a);
    return e(a)
  };
  c.e = e;
  return c
}
function Ue(a, b, c) {
  function e(a) {
    var b = k;
    t(a) && (b = L(Array.prototype.slice.call(arguments, 0), 0));
    return f.call(this, b)
  }
  function f(e) {
    return x.o(a, b, c, e)
  }
  e.n = 0;
  e.l = function(a) {
    a = F(a);
    return f(a)
  };
  e.e = f;
  return e
}
function Ve(a, b, c, e) {
  function f(a) {
    var b = k;
    t(a) && (b = L(Array.prototype.slice.call(arguments, 0), 0));
    return h.call(this, b)
  }
  function h(f) {
    return x.R(a, b, c, e, f)
  }
  f.n = 0;
  f.l = function(a) {
    a = F(a);
    return h(a)
  };
  f.e = h;
  return f
}
function We(a, b, c, e, f) {
  function h(a) {
    var b = k;
    t(a) && (b = L(Array.prototype.slice.call(arguments, 0), 0));
    return i.call(this, b)
  }
  function i(h) {
    return x.R(a, b, c, e, oe.b(f, h))
  }
  h.n = 0;
  h.l = function(a) {
    a = F(a);
    return i(a)
  };
  h.e = i;
  return h
}
function Xe(a, b, c, e, f) {
  var h = k;
  t(f) && (h = L(Array.prototype.slice.call(arguments, 4), 0));
  return We.call(this, a, b, c, e, h)
}
Xe.n = 4;
Xe.l = function(a) {
  var b = G(a), c = G(K(a)), e = G(K(K(a))), f = G(K(K(K(a)))), a = H(K(K(K(a))));
  return We(b, c, e, f, a)
};
Xe.e = We;
Se = function(a, b, c, e, f) {
  switch(arguments.length) {
    case 2:
      return Te.call(this, a, b);
    case 3:
      return Ue.call(this, a, b, c);
    case 4:
      return Ve.call(this, a, b, c, e);
    default:
      return Xe.e(a, b, c, e, L(arguments, 4))
  }
  d(Error("Invalid arity: " + arguments.length))
};
Se.n = 4;
Se.l = Xe.l;
Se.b = Te;
Se.c = Ue;
Se.o = Ve;
Se.e = Xe.e;
Re = Se;
var Ye = k;
function Ze(a, b) {
  return new U(k, l, function() {
    var c = F(b);
    if(c) {
      if(Lc(c)) {
        for(var e = wb(c), f = nc(e), h = new de(ka.a(f), 0), i = 0;;) {
          if(i < f) {
            var p = a.a ? a.a(z.b(e, i)) : a.call(k, z.b(e, i));
            h.add(p);
            i += 1
          }else {
            break
          }
        }
        return ke(h.sa(), Ye.b(a, xb(c)))
      }
      return Q(a.a ? a.a(G(c)) : a.call(k, G(c)), Ye.b(a, H(c)))
    }
    return k
  }, k)
}
function $e(a, b, c) {
  return new U(k, l, function() {
    var e = F(b), f = F(c);
    return u(e ? f : e) ? Q(a.b ? a.b(G(e), G(f)) : a.call(k, G(e), G(f)), Ye.c(a, H(e), H(f))) : k
  }, k)
}
function af(a, b, c, e) {
  return new U(k, l, function() {
    var f = F(b), h = F(c), i = F(e);
    return u(f ? h ? i : h : f) ? Q(a.c ? a.c(G(f), G(h), G(i)) : a.call(k, G(f), G(h), G(i)), Ye.o(a, H(f), H(h), H(i))) : k
  }, k)
}
function bf(a, b, c, e, f) {
  return Ye.b(function(b) {
    return x.b(a, b)
  }, function i(a) {
    return new U(k, l, function() {
      var b = Ye.b(F, a);
      return Pe(Qe, b) ? Q(Ye.b(G, b), i(Ye.b(H, b))) : k
    }, k)
  }(jc.e(f, e, L([c, b], 0))))
}
function cf(a, b, c, e, f) {
  var h = k;
  t(f) && (h = L(Array.prototype.slice.call(arguments, 4), 0));
  return bf.call(this, a, b, c, e, h)
}
cf.n = 4;
cf.l = function(a) {
  var b = G(a), c = G(K(a)), e = G(K(K(a))), f = G(K(K(K(a)))), a = H(K(K(K(a))));
  return bf(b, c, e, f, a)
};
cf.e = bf;
Ye = function(a, b, c, e, f) {
  switch(arguments.length) {
    case 2:
      return Ze.call(this, a, b);
    case 3:
      return $e.call(this, a, b, c);
    case 4:
      return af.call(this, a, b, c, e);
    default:
      return cf.e(a, b, c, e, L(arguments, 4))
  }
  d(Error("Invalid arity: " + arguments.length))
};
Ye.n = 4;
Ye.l = cf.l;
Ye.b = Ze;
Ye.c = $e;
Ye.o = af;
Ye.e = cf.e;
var yd = Ye, ef = function df(b, c) {
  return new U(k, l, function() {
    if(0 < b) {
      var e = F(c);
      return e ? Q(G(e), df(b - 1, H(e))) : k
    }
    return k
  }, k)
};
function ff(a, b) {
  return new U(k, l, function() {
    var c;
    a: {
      c = a;
      for(var e = b;;) {
        var e = F(e), f = 0 < c;
        if(u(f ? e : f)) {
          c -= 1, e = H(e)
        }else {
          c = e;
          break a
        }
      }
      c = g
    }
    return c
  }, k)
}
function gf(a) {
  return W([ef(8, a), ff(8, a)])
}
var hf, jf = k;
function lf(a) {
  return new U(k, l, function() {
    return Q(a, jf.a(a))
  }, k)
}
function mf(a, b) {
  return ef(a, jf.a(b))
}
jf = function(a, b) {
  switch(arguments.length) {
    case 1:
      return lf.call(this, a);
    case 2:
      return mf.call(this, a, b)
  }
  d(Error("Invalid arity: " + arguments.length))
};
jf.a = lf;
jf.b = mf;
hf = jf;
var nf, of = k;
function pf(a, b) {
  return new U(k, l, function() {
    var c = F(a), e = F(b);
    return u(c ? e : c) ? Q(G(c), Q(G(e), of.b(H(c), H(e)))) : k
  }, k)
}
function qf(a, b, c) {
  return new U(k, l, function() {
    var e = yd.b(F, jc.e(c, b, L([a], 0)));
    return Pe(Qe, e) ? oe.b(yd.b(G, e), x.b(of, yd.b(H, e))) : k
  }, k)
}
function rf(a, b, c) {
  var e = k;
  t(c) && (e = L(Array.prototype.slice.call(arguments, 2), 0));
  return qf.call(this, a, b, e)
}
rf.n = 2;
rf.l = function(a) {
  var b = G(a), c = G(K(a)), a = H(K(a));
  return qf(b, c, a)
};
rf.e = qf;
of = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return pf.call(this, a, b);
    default:
      return rf.e(a, b, L(arguments, 2))
  }
  d(Error("Invalid arity: " + arguments.length))
};
of.n = 2;
of.l = rf.l;
of.b = pf;
of.e = rf.e;
nf = of;
function sf(a, b) {
  return ff(1, nf.b(hf.a(a), b))
}
function tf(a) {
  return function c(a, f) {
    return new U(k, l, function() {
      var h = F(a);
      return h ? Q(G(h), c(H(h), f)) : F(f) ? c(G(f), H(f)) : k
    }, k)
  }(k, a)
}
var uf, vf = k;
function wf(a, b) {
  return tf(yd.b(a, b))
}
function xf(a, b, c) {
  return tf(x.o(yd, a, b, c))
}
function yf(a, b, c) {
  var e = k;
  t(c) && (e = L(Array.prototype.slice.call(arguments, 2), 0));
  return xf.call(this, a, b, e)
}
yf.n = 2;
yf.l = function(a) {
  var b = G(a), c = G(K(a)), a = H(K(a));
  return xf(b, c, a)
};
yf.e = xf;
vf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return wf.call(this, a, b);
    default:
      return yf.e(a, b, L(arguments, 2))
  }
  d(Error("Invalid arity: " + arguments.length))
};
vf.n = 2;
vf.l = yf.l;
vf.b = wf;
vf.e = yf.e;
uf = vf;
function zf(a, b) {
  var c;
  a ? (c = a.q & 4, c = u(c ? c : a.Rb) ? j : a.q ? l : v(mb, a)) : c = v(mb, a);
  return u(c) ? Be(na.c(ob, nb(a), b)) : na.c(ta, a, b)
}
var Af;
function Bf(a, b, c, e) {
  var f = S.c(b, 0, k), h;
  a: {
    h = 1;
    for(b = F(b);;) {
      var i = b;
      if(u(i ? 0 < h : i)) {
        h -= 1, b = K(b)
      }else {
        h = b;
        break a
      }
    }
    h = g
  }
  return u(h) ? vc.c(a, f, x.R(Cf, D.c(a, f, k), h, c, e)) : vc.c(a, f, x.c(c, D.c(a, f, k), e))
}
function Cf(a, b, c, e) {
  var f = k;
  t(e) && (f = L(Array.prototype.slice.call(arguments, 3), 0));
  return Bf.call(this, a, b, c, f)
}
Cf.n = 3;
Cf.l = function(a) {
  var b = G(a), c = G(K(a)), e = G(K(K(a))), a = H(K(K(a)));
  return Bf(b, c, e, a)
};
Cf.e = Bf;
Af = Cf;
function Df(a, b) {
  this.t = a;
  this.g = b
}
function Ef(a) {
  a = a.j;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function Ff(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var e = new Df(a, ka.a(32));
    e.g[0] = c;
    c = e;
    b -= 5
  }
}
var Hf = function Gf(b, c, e, f) {
  var h = new Df(e.t, e.g.slice()), i = b.j - 1 >>> c & 31;
  5 === c ? h.g[i] = f : (e = e.g[i], b = e != k ? Gf(b, c - 5, e, f) : Ff(k, c - 5, f), h.g[i] = b);
  return h
};
function If(a, b) {
  var c = 0 <= b;
  if(u(c ? b < a.j : c)) {
    if(b >= Ef(a)) {
      return a.S
    }
    for(var c = a.root, e = a.shift;;) {
      if(0 < e) {
        var f = e - 5, c = c.g[b >>> e & 31], e = f
      }else {
        return c.g
      }
    }
  }else {
    d(Error([T("No item "), T(b), T(" in vector of length "), T(a.j)].join("")))
  }
}
var Kf = function Jf(b, c, e, f, h) {
  var i = new Df(e.t, e.g.slice());
  if(0 === c) {
    i.g[f & 31] = h
  }else {
    var p = f >>> c & 31, b = Jf(b, c - 5, e.g[p], f, h);
    i.g[p] = b
  }
  return i
}, Lf = g, Mf = g, Nf = g, Y = P = g, Z = g, Of = g, Pf = g;
function Qf(a, b, c, e, f, h) {
  this.k = a;
  this.j = b;
  this.shift = c;
  this.root = e;
  this.S = f;
  this.m = h;
  this.q = 4;
  this.h = 167668511
}
q = Qf.prototype;
q.xa = function() {
  return new Nf(this.j, this.shift, Lf.a ? Lf.a(this.root) : Lf.call(k, this.root), Mf.a ? Mf.a(this.S) : Mf.call(k, this.S))
};
q.B = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Vb(a)
};
q.J = function(a, b) {
  return a.N(a, b, k)
};
q.v = function(a, b, c) {
  return a.N(a, b, c)
};
q.W = function(a, b, c) {
  var e = 0 <= b;
  if(u(e ? b < this.j : e)) {
    return Ef(a) <= b ? (a = this.S.slice(), a[b & 31] = c, new Qf(this.k, this.j, this.shift, this.root, a, k)) : new Qf(this.k, this.j, this.shift, Kf(a, this.shift, this.root, b, c), this.S, k)
  }
  if(b === this.j) {
    return a.F(a, c)
  }
  d(Error([T("Index "), T(b), T(" out of bounds  [0,"), T(this.j), T("]")].join("")))
};
var Rf = k, Rf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.J(this, b);
    case 3:
      return this.v(this, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
q = Qf.prototype;
q.call = Rf;
q.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
q.F = function(a, b) {
  if(32 > this.j - Ef(a)) {
    var c = this.S.slice();
    c.push(b);
    return new Qf(this.k, this.j + 1, this.shift, this.root, c, k)
  }
  var e = this.j >>> 5 > 1 << this.shift, c = e ? this.shift + 5 : this.shift;
  if(e) {
    e = new Df(k, ka.a(32));
    e.g[0] = this.root;
    var f = Ff(k, this.shift, new Df(k, this.S));
    e.g[1] = f
  }else {
    e = Hf(a, this.shift, this.root, new Df(k, this.S))
  }
  return new Qf(this.k, this.j + 1, c, e, [b], k)
};
q.Pa = function(a) {
  return 0 < this.j ? new Wb(a, this.j - 1, k) : J
};
q.Na = function(a) {
  return a.T(a, 0)
};
q.Oa = function(a) {
  return a.T(a, 1)
};
q.toString = function() {
  return R.a ? R.a(this) : R.call(k, this)
};
q.la = function(a, b) {
  return Lb.b(a, b)
};
q.ma = function(a, b, c) {
  return Lb.c(a, b, c)
};
q.A = function(a) {
  return 0 === this.j ? k : Pf.c ? Pf.c(a, 0, 0) : Pf.call(k, a, 0, 0)
};
q.z = m("j");
q.ta = function(a) {
  return 0 < this.j ? a.T(a, this.j - 1) : k
};
q.w = function(a, b) {
  return Fb(a, b)
};
q.I = function(a, b) {
  return new Qf(b, this.j, this.shift, this.root, this.S, this.m)
};
q.H = m("k");
q.T = function(a, b) {
  return If(a, b)[b & 31]
};
q.N = function(a, b, c) {
  var e = 0 <= b;
  return u(e ? b < this.j : e) ? a.T(a, b) : c
};
q.G = function() {
  return N(Sf, this.k)
};
var Tf = new Df(k, ka.a(32)), Sf = new Qf(k, 0, 5, Tf, [], 0);
function W(a) {
  var b = a.length;
  if(32 > b) {
    return new Qf(k, b, 5, Tf, a, k)
  }
  for(var c = a.slice(0, 32), e = 32, f = nb(new Qf(k, 32, 5, Tf, c, k));;) {
    if(e < b) {
      c = e + 1, f = ob(f, a[e]), e = c
    }else {
      return pb(f)
    }
  }
}
bd = function(a) {
  return pb(na.c(ob, nb(Sf), a))
};
function Uf(a) {
  var b = k;
  t(a) && (b = L(Array.prototype.slice.call(arguments, 0), 0));
  return bd(b)
}
Uf.n = 0;
Uf.l = function(a) {
  a = F(a);
  return bd(a)
};
Uf.e = function(a) {
  return bd(a)
};
function Vf(a, b, c, e, f, h) {
  this.aa = a;
  this.$ = b;
  this.p = c;
  this.off = e;
  this.k = f;
  this.m = h;
  this.h = 31719660;
  this.q = 1536
}
q = Vf.prototype;
q.B = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Vb(a)
};
q.ka = function(a) {
  return this.off + 1 < this.$.length ? (a = Pf.o ? Pf.o(this.aa, this.$, this.p, this.off + 1) : Pf.call(k, this.aa, this.$, this.p, this.off + 1), a == k ? k : a) : a.ub(a)
};
q.F = function(a, b) {
  return Q(b, a)
};
q.A = aa();
q.Q = function() {
  return this.$[this.off]
};
q.O = function(a) {
  return this.off + 1 < this.$.length ? (a = Pf.o ? Pf.o(this.aa, this.$, this.p, this.off + 1) : Pf.call(k, this.aa, this.$, this.p, this.off + 1), a == k ? J : a) : a.Ma(a)
};
q.ub = function() {
  var a = this.$.length, a = this.p + a < qa(this.aa) ? Pf.c ? Pf.c(this.aa, this.p + a, 0) : Pf.call(k, this.aa, this.p + a, 0) : k;
  return a == k ? k : a
};
q.w = function(a, b) {
  return Fb(a, b)
};
q.I = function(a, b) {
  return Pf.R ? Pf.R(this.aa, this.$, this.p, this.off, b) : Pf.call(k, this.aa, this.$, this.p, this.off, b)
};
q.G = function() {
  return N(Sf, this.k)
};
q.Va = function() {
  return ee.b(this.$, this.off)
};
q.Ma = function() {
  var a = this.$.length, a = this.p + a < qa(this.aa) ? Pf.c ? Pf.c(this.aa, this.p + a, 0) : Pf.call(k, this.aa, this.p + a, 0) : k;
  return a == k ? J : a
};
var Wf = k;
function Xf(a, b, c) {
  return Wf.R(a, If(a, b), b, c, k)
}
function Yf(a, b, c, e) {
  return Wf.R(a, b, c, e, k)
}
function Zf(a, b, c, e, f) {
  return new Vf(a, b, c, e, f, k)
}
Wf = function(a, b, c, e, f) {
  switch(arguments.length) {
    case 3:
      return Xf.call(this, a, b, c);
    case 4:
      return Yf.call(this, a, b, c, e);
    case 5:
      return Zf.call(this, a, b, c, e, f)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Wf.c = Xf;
Wf.o = Yf;
Wf.R = Zf;
var Pf = Wf, Lf = function(a) {
  return new Df({}, a.g.slice())
}, Mf = function(a) {
  var b = ka.a(32);
  Mc(a, 0, b, 0, a.length);
  return b
}, ag = function $f(b, c, e, f) {
  var e = b.root.t === e.t ? e : new Df(b.root.t, e.g.slice()), h = b.j - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var i = e.g[h], b = i != k ? $f(b, c - 5, i, f) : Ff(b.root.t, c - 5, f)
  }
  e.g[h] = b;
  return e
}, Nf = function(a, b, c, e) {
  this.j = a;
  this.shift = b;
  this.root = c;
  this.S = e;
  this.h = 275;
  this.q = 88
};
Nf.X = j;
Nf.ba = function() {
  return M.a("cljs.core/TransientVector")
};
Nf.ca = function(a, b) {
  return E(b, "cljs.core/TransientVector")
};
var bg = k, bg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.J(this, b);
    case 3:
      return this.v(this, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
q = Nf.prototype;
q.call = bg;
q.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
q.J = function(a, b) {
  return a.N(a, b, k)
};
q.v = function(a, b, c) {
  return a.N(a, b, c)
};
q.T = function(a, b) {
  if(this.root.t) {
    return If(a, b)[b & 31]
  }
  d(Error("nth after persistent!"))
};
q.N = function(a, b, c) {
  var e = 0 <= b;
  return u(e ? b < this.j : e) ? a.T(a, b) : c
};
q.z = function() {
  if(this.root.t) {
    return this.j
  }
  d(Error("count after persistent!"))
};
q.ya = function(a, b, c) {
  var e;
  a: {
    if(a.root.t) {
      var f = 0 <= b;
      if(u(f ? b < a.j : f)) {
        Ef(a) <= b ? a.S[b & 31] = c : (e = function i(e, f) {
          var A = a.root.t === f.t ? f : new Df(a.root.t, f.g.slice());
          if(0 === e) {
            A.g[b & 31] = c
          }else {
            var y = b >>> e & 31, C = i(e - 5, A.g[y]);
            A.g[y] = C
          }
          return A
        }.call(k, a.shift, a.root), a.root = e);
        e = a;
        break a
      }
      if(b === a.j) {
        e = a.za(a, c);
        break a
      }
      d(Error([T("Index "), T(b), T(" out of bounds for TransientVector of length"), T(a.j)].join("")))
    }
    d(Error("assoc! after persistent!"))
  }
  return e
};
q.za = function(a, b) {
  if(this.root.t) {
    if(32 > this.j - Ef(a)) {
      this.S[this.j & 31] = b
    }else {
      var c = new Df(this.root.t, this.S), e = ka.a(32);
      e[0] = b;
      this.S = e;
      if(this.j >>> 5 > 1 << this.shift) {
        var e = ka.a(32), f = this.shift + 5;
        e[0] = this.root;
        e[1] = Ff(this.root.t, this.shift, c);
        this.root = new Df(this.root.t, e);
        this.shift = f
      }else {
        this.root = ag(a, this.shift, this.root, c)
      }
    }
    this.j += 1;
    return a
  }
  d(Error("conj! after persistent!"))
};
q.Ga = function(a) {
  if(this.root.t) {
    this.root.t = k;
    var a = this.j - Ef(a), b = ka.a(a);
    Mc(this.S, 0, b, 0, a);
    return new Qf(k, this.j, this.shift, this.root, b, k)
  }
  d(Error("persistent! called twice"))
};
function cg(a, b, c, e) {
  this.k = a;
  this.Y = b;
  this.ra = c;
  this.m = e;
  this.q = 0;
  this.h = 31850572
}
q = cg.prototype;
q.B = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Vb(a)
};
q.F = function(a, b) {
  return Q(b, a)
};
q.toString = function() {
  return R.a ? R.a(this) : R.call(k, this)
};
q.A = aa();
q.Q = function() {
  return B(this.Y)
};
q.O = function(a) {
  var b = K(this.Y);
  return b ? new cg(this.k, b, this.ra, k) : this.ra == k ? a.G(a) : new cg(this.k, this.ra, k, k)
};
q.w = function(a, b) {
  return Fb(a, b)
};
q.I = function(a, b) {
  return new cg(b, this.Y, this.ra, this.m)
};
q.H = m("k");
q.G = function() {
  return N(J, this.k)
};
function dg(a, b, c, e, f) {
  this.k = a;
  this.count = b;
  this.Y = c;
  this.ra = e;
  this.m = f;
  this.q = 0;
  this.h = 31858766
}
q = dg.prototype;
q.B = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Vb(a)
};
q.F = function(a, b) {
  var c;
  u(this.Y) ? (c = this.ra, c = new dg(this.k, this.count + 1, this.Y, jc.b(u(c) ? c : Sf, b), k)) : c = new dg(this.k, this.count + 1, jc.b(this.Y, b), Sf, k);
  return c
};
q.toString = function() {
  return R.a ? R.a(this) : R.call(k, this)
};
q.A = function() {
  var a = F(this.ra), b = this.Y;
  return u(u(b) ? b : a) ? new cg(k, this.Y, F(a), k) : k
};
q.z = m("count");
q.ta = function() {
  return B(this.Y)
};
q.Q = function() {
  return G(this.Y)
};
q.O = function(a) {
  return H(F(a))
};
q.w = function(a, b) {
  return Fb(a, b)
};
q.I = function(a, b) {
  return new dg(b, this.count, this.Y, this.ra, this.m)
};
q.H = m("k");
q.G = function() {
  return eg
};
var eg = new dg(k, 0, k, Sf, 0);
function fg() {
  this.q = 0;
  this.h = 2097152
}
fg.prototype.w = n(l);
var gg = new fg;
function hg(a, b) {
  var c = Jc(b) ? nc(a) === nc(b) ? Pe(Qe, yd.b(function(a) {
    return yb.b(D.c(b, G(a), gg), G(K(a)))
  }, a)) : k : k;
  return u(c) ? j : l
}
function ig(a, b) {
  for(var c = b.length, e = 0;;) {
    if(e < c) {
      if(a === b[e]) {
        return e
      }
      e += 1
    }else {
      return k
    }
  }
}
function jg(a, b) {
  var c = Cc.a(a), e = Cc.a(b);
  return c < e ? -1 : c > e ? 1 : 0
}
function kg(a, b, c) {
  for(var e = a.keys, f = e.length, h = a.va, a = zc(a), i = 0, p = nb(lg);;) {
    if(i < f) {
      var s = e[i], i = i + 1, p = qb(p, s, h[s])
    }else {
      return N(Be(qb(p, b, c)), a)
    }
  }
}
function mg(a, b) {
  for(var c = {}, e = b.length, f = 0;;) {
    if(f < e) {
      var h = b[f];
      c[h] = a[h];
      f += 1
    }else {
      break
    }
  }
  return c
}
function ng(a, b, c, e, f) {
  this.k = a;
  this.keys = b;
  this.va = c;
  this.Ra = e;
  this.m = f;
  this.q = 4;
  this.h = 16123663
}
q = ng.prototype;
q.xa = function(a) {
  a = zf(Eb.r ? Eb.r() : Eb.call(k), a);
  return nb(a)
};
q.B = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Jd(a)
};
q.J = function(a, b) {
  return a.v(a, b, k)
};
q.v = function(a, b, c) {
  a = ba(b);
  return u(a ? ig(b, this.keys) != k : a) ? this.va[b] : c
};
q.W = function(a, b, c) {
  if(ba(b)) {
    var e = this.Ra > og;
    if(u(e ? e : this.keys.length >= og)) {
      return kg(a, b, c)
    }
    if(ig(b, this.keys) != k) {
      return a = mg(this.va, this.keys), a[b] = c, new ng(this.k, this.keys, a, this.Ra + 1, k)
    }
    a = mg(this.va, this.keys);
    e = this.keys.slice();
    a[b] = c;
    e.push(b);
    return new ng(this.k, e, a, this.Ra + 1, k)
  }
  return kg(a, b, c)
};
q.Fa = function(a, b) {
  var c = ba(b);
  return u(c ? ig(b, this.keys) != k : c) ? j : l
};
var pg = k, pg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.J(this, b);
    case 3:
      return this.v(this, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
q = ng.prototype;
q.call = pg;
q.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
q.F = function(a, b) {
  return Kc(b) ? a.W(a, z.b(b, 0), z.b(b, 1)) : na.c(ta, a, b)
};
q.toString = function() {
  return R.a ? R.a(this) : R.call(k, this)
};
q.A = function() {
  var a = this;
  return 0 < a.keys.length ? yd.b(function(b) {
    return Uf.e(L([b, a.va[b]], 0))
  }, a.keys.sort(jg)) : k
};
q.z = function() {
  return this.keys.length
};
q.w = function(a, b) {
  return hg(a, b)
};
q.I = function(a, b) {
  return new ng(b, this.keys, this.va, this.Ra, this.m)
};
q.H = m("k");
q.G = function() {
  return N(qg, this.k)
};
var qg = new ng(k, [], {}, 0, 0), og = 32;
function rg(a, b) {
  return new ng(k, a, b, 0, k)
}
function sg(a, b) {
  for(var c = a.g, e = c.length, f = 0;;) {
    if(e <= f) {
      return-1
    }
    if(yb.b(c[f], b)) {
      return f
    }
    f += 2
  }
}
var tg = g;
function ug(a, b, c, e) {
  this.k = a;
  this.j = b;
  this.g = c;
  this.m = e;
  this.q = 4;
  this.h = 16123663
}
q = ug.prototype;
q.xa = function() {
  return new tg({}, this.g.length, this.g.slice())
};
q.B = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Jd(a)
};
q.J = function(a, b) {
  return a.v(a, b, k)
};
q.v = function(a, b, c) {
  a = sg(a, b);
  return-1 === a ? c : this.g[a + 1]
};
q.W = function(a, b, c) {
  var e = sg(a, b);
  if(-1 === e) {
    if(this.j < vg) {
      var e = this.k, a = this.j + 1, f = this.g.slice();
      f.push(b);
      f.push(c);
      c = new ug(e, a, f, k)
    }else {
      c = N(vc.c(zf(lg, a), b, c), this.k)
    }
  }else {
    c === this.g[e + 1] ? c = a : (b = this.k, a = this.j, f = this.g.slice(), f[e + 1] = c, c = new ug(b, a, f, k))
  }
  return c
};
q.Fa = function(a, b) {
  return-1 !== sg(a, b)
};
var wg = k, wg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.J(this, b);
    case 3:
      return this.v(this, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
q = ug.prototype;
q.call = wg;
q.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
q.F = function(a, b) {
  return Kc(b) ? a.W(a, z.b(b, 0), z.b(b, 1)) : na.c(ta, a, b)
};
q.toString = function() {
  return R.a ? R.a(this) : R.call(k, this)
};
q.A = function() {
  var a = this, b;
  if(0 < a.j) {
    var c = a.g.length;
    b = function f(b) {
      return new U(k, l, function() {
        return b < c ? Q(W([a.g[b], a.g[b + 1]]), f(b + 2)) : k
      }, k)
    }(0)
  }else {
    b = k
  }
  return b
};
q.z = m("j");
q.w = function(a, b) {
  return hg(a, b)
};
q.I = function(a, b) {
  return new ug(b, this.j, this.g, this.m)
};
q.H = m("k");
q.G = function() {
  return Va(xg, this.k)
};
var xg = new ug(k, 0, [], k), vg = 16, yg = g, tg = function(a, b, c) {
  this.Ba = a;
  this.ia = b;
  this.g = c;
  this.q = 56;
  this.h = 258
};
tg.X = j;
tg.ba = function() {
  return M.a("cljs.core/TransientArrayMap")
};
tg.ca = function(a, b) {
  return E(b, "cljs.core/TransientArrayMap")
};
q = tg.prototype;
q.ya = function(a, b, c) {
  if(u(this.Ba)) {
    var e = sg(a, b);
    if(-1 === e) {
      if(this.ia + 2 <= 2 * vg) {
        return this.ia += 2, this.g.push(b), this.g.push(c), a
      }
      a = yg.b ? yg.b(this.ia, this.g) : yg.call(k, this.ia, this.g);
      return qb(a, b, c)
    }
    c !== this.g[e + 1] && (this.g[e + 1] = c);
    return a
  }
  d(Error("assoc! after persistent!"))
};
q.za = function(a, b) {
  if(u(this.Ba)) {
    var c;
    b ? (c = b.h & 2048, c = u(c ? c : b.Hb) ? j : b.h ? l : v(La, b)) : c = v(La, b);
    if(u(c)) {
      return a.ya(a, Hd.a ? Hd.a(b) : Hd.call(k, b), Id.a ? Id.a(b) : Id.call(k, b))
    }
    c = F(b);
    for(var e = a;;) {
      var f = G(c);
      if(u(f)) {
        c = K(c), e = e.ya(e, Hd.a ? Hd.a(f) : Hd.call(k, f), Id.a ? Id.a(f) : Id.call(k, f))
      }else {
        return e
      }
    }
  }else {
    d(Error("conj! after persistent!"))
  }
};
q.Ga = function() {
  if(u(this.Ba)) {
    return this.Ba = l, new ug(k, fd((this.ia - this.ia % 2) / 2), this.g, k)
  }
  d(Error("persistent! called twice"))
};
q.J = function(a, b) {
  return a.v(a, b, k)
};
q.v = function(a, b, c) {
  if(u(this.Ba)) {
    return a = sg(a, b), -1 === a ? c : this.g[a + 1]
  }
  d(Error("lookup after persistent!"))
};
q.z = function() {
  if(u(this.Ba)) {
    return fd((this.ia - this.ia % 2) / 2)
  }
  d(Error("count after persistent!"))
};
var zg = g, yg = function(a, b) {
  for(var c = nb(qg), e = 0;;) {
    if(e < a) {
      c = qb(c, b[e], b[e + 1]), e += 2
    }else {
      return c
    }
  }
};
function Ag() {
  this.val = l
}
var Bg = g, Cg = g, Dg = g, Eg = g, Fg = g, P = g;
function Gg(a, b) {
  return ba(a) ? a === b : yb.b(a, b)
}
var Hg, Ig = k;
function Jg(a, b, c) {
  a = a.slice();
  a[b] = c;
  return a
}
function Kg(a, b, c, e, f) {
  a = a.slice();
  a[b] = c;
  a[e] = f;
  return a
}
Ig = function(a, b, c, e, f) {
  switch(arguments.length) {
    case 3:
      return Jg.call(this, a, b, c);
    case 5:
      return Kg.call(this, a, b, c, e, f)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Ig.c = Jg;
Ig.R = Kg;
Hg = Ig;
var Lg, Mg = k;
function Ng(a, b, c, e) {
  a = a.Ca(b);
  a.g[c] = e;
  return a
}
function Og(a, b, c, e, f, h) {
  a = a.Ca(b);
  a.g[c] = e;
  a.g[f] = h;
  return a
}
Mg = function(a, b, c, e, f, h) {
  switch(arguments.length) {
    case 4:
      return Ng.call(this, a, b, c, e);
    case 6:
      return Og.call(this, a, b, c, e, f, h)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Mg.o = Ng;
Mg.ga = Og;
Lg = Mg;
var Pg = g;
function Qg(a, b, c) {
  this.t = a;
  this.M = b;
  this.g = c
}
q = Qg.prototype;
q.ea = function(a, b, c, e, f, h) {
  var i = 1 << (c >>> b & 31), p = md(this.M & i - 1);
  if(0 === (this.M & i)) {
    var s = md(this.M);
    if(2 * s < this.g.length) {
      a = this.Ca(a);
      b = a.g;
      h.val = j;
      a: {
        c = 2 * (s - p);
        h = 2 * p + (c - 1);
        for(s = 2 * (p + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[s] = b[h];
          s -= 1;
          c -= 1;
          h -= 1
        }
      }
      b[2 * p] = e;
      b[2 * p + 1] = f;
      a.M |= i;
      return a
    }
    if(16 <= s) {
      p = ka.a(32);
      p[c >>> b & 31] = Rg.ea(a, b + 5, c, e, f, h);
      for(f = e = 0;;) {
        if(32 > e) {
          0 !== (this.M >>> e & 1) && (p[e] = this.g[f] != k ? Rg.ea(a, b + 5, Cc.a(this.g[f]), this.g[f], this.g[f + 1], h) : this.g[f + 1], f += 2), e += 1
        }else {
          break
        }
      }
      return new Pg(a, s + 1, p)
    }
    b = ka.a(2 * (s + 4));
    Mc(this.g, 0, b, 0, 2 * p);
    b[2 * p] = e;
    b[2 * p + 1] = f;
    Mc(this.g, 2 * p, b, 2 * (p + 1), 2 * (s - p));
    h.val = j;
    a = this.Ca(a);
    a.g = b;
    a.M |= i;
    return a
  }
  s = this.g[2 * p];
  i = this.g[2 * p + 1];
  if(s == k) {
    return s = i.ea(a, b + 5, c, e, f, h), s === i ? this : Lg.o(this, a, 2 * p + 1, s)
  }
  if(Gg(e, s)) {
    return f === i ? this : Lg.o(this, a, 2 * p + 1, f)
  }
  h.val = j;
  return Lg.ga(this, a, 2 * p, k, 2 * p + 1, Eg.Aa ? Eg.Aa(a, b + 5, s, i, c, e, f) : Eg.call(k, a, b + 5, s, i, c, e, f))
};
q.Ia = function() {
  return Bg.a ? Bg.a(this.g) : Bg.call(k, this.g)
};
q.Ca = function(a) {
  if(a === this.t) {
    return this
  }
  var b = md(this.M), c = ka.a(0 > b ? 4 : 2 * (b + 1));
  Mc(this.g, 0, c, 0, 2 * b);
  return new Qg(a, this.M, c)
};
q.da = function(a, b, c, e, f) {
  var h = 1 << (b >>> a & 31), i = md(this.M & h - 1);
  if(0 === (this.M & h)) {
    var p = md(this.M);
    if(16 <= p) {
      i = ka.a(32);
      i[b >>> a & 31] = Rg.da(a + 5, b, c, e, f);
      for(e = c = 0;;) {
        if(32 > c) {
          0 !== (this.M >>> c & 1) && (i[c] = this.g[e] != k ? Rg.da(a + 5, Cc.a(this.g[e]), this.g[e], this.g[e + 1], f) : this.g[e + 1], e += 2), c += 1
        }else {
          break
        }
      }
      return new Pg(k, p + 1, i)
    }
    a = ka.a(2 * (p + 1));
    Mc(this.g, 0, a, 0, 2 * i);
    a[2 * i] = c;
    a[2 * i + 1] = e;
    Mc(this.g, 2 * i, a, 2 * (i + 1), 2 * (p - i));
    f.val = j;
    return new Qg(k, this.M | h, a)
  }
  p = this.g[2 * i];
  h = this.g[2 * i + 1];
  if(p == k) {
    return p = h.da(a + 5, b, c, e, f), p === h ? this : new Qg(k, this.M, Hg.c(this.g, 2 * i + 1, p))
  }
  if(Gg(c, p)) {
    return e === h ? this : new Qg(k, this.M, Hg.c(this.g, 2 * i + 1, e))
  }
  f.val = j;
  return new Qg(k, this.M, Hg.R(this.g, 2 * i, k, 2 * i + 1, Eg.ga ? Eg.ga(a + 5, p, h, b, c, e) : Eg.call(k, a + 5, p, h, b, c, e)))
};
q.pa = function(a, b, c, e) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.M & f)) {
    return e
  }
  var h = md(this.M & f - 1), f = this.g[2 * h], h = this.g[2 * h + 1];
  return f == k ? h.pa(a + 5, b, c, e) : Gg(c, f) ? h : e
};
var Rg = new Qg(k, 0, ka.a(0)), Pg = function(a, b, c) {
  this.t = a;
  this.j = b;
  this.g = c
};
Pg.X = j;
Pg.ba = function() {
  return M.a("cljs.core/ArrayNode")
};
Pg.ca = function(a, b) {
  return E(b, "cljs.core/ArrayNode")
};
q = Pg.prototype;
q.ea = function(a, b, c, e, f, h) {
  var i = c >>> b & 31, p = this.g[i];
  if(p == k) {
    return a = Lg.o(this, a, i, Rg.ea(a, b + 5, c, e, f, h)), a.j += 1, a
  }
  b = p.ea(a, b + 5, c, e, f, h);
  return b === p ? this : Lg.o(this, a, i, b)
};
q.Ia = function() {
  return Cg.a ? Cg.a(this.g) : Cg.call(k, this.g)
};
q.Ca = function(a) {
  return a === this.t ? this : new Pg(a, this.j, this.g.slice())
};
q.da = function(a, b, c, e, f) {
  var h = b >>> a & 31, i = this.g[h];
  if(i == k) {
    return new Pg(k, this.j + 1, Hg.c(this.g, h, Rg.da(a + 5, b, c, e, f)))
  }
  a = i.da(a + 5, b, c, e, f);
  return a === i ? this : new Pg(k, this.j, Hg.c(this.g, h, a))
};
q.pa = function(a, b, c, e) {
  var f = this.g[b >>> a & 31];
  return f != k ? f.pa(a + 5, b, c, e) : e
};
function Sg(a, b, c) {
  for(var b = 2 * b, e = 0;;) {
    if(e < b) {
      if(Gg(c, a[e])) {
        return e
      }
      e += 2
    }else {
      return-1
    }
  }
}
function Tg(a, b, c, e) {
  this.t = a;
  this.na = b;
  this.j = c;
  this.g = e
}
q = Tg.prototype;
q.ea = function(a, b, c, e, f, h) {
  if(c === this.na) {
    b = Sg(this.g, this.j, e);
    if(-1 === b) {
      if(this.g.length > 2 * this.j) {
        return a = Lg.ga(this, a, 2 * this.j, e, 2 * this.j + 1, f), h.val = j, a.j += 1, a
      }
      c = this.g.length;
      b = ka.a(c + 2);
      Mc(this.g, 0, b, 0, c);
      b[c] = e;
      b[c + 1] = f;
      h.val = j;
      h = this.j + 1;
      a === this.t ? (this.g = b, this.j = h, a = this) : a = new Tg(this.t, this.na, h, b);
      return a
    }
    return this.g[b + 1] === f ? this : Lg.o(this, a, b + 1, f)
  }
  return(new Qg(a, 1 << (this.na >>> b & 31), [k, this, k, k])).ea(a, b, c, e, f, h)
};
q.Ia = function() {
  return Bg.a ? Bg.a(this.g) : Bg.call(k, this.g)
};
q.Ca = function(a) {
  if(a === this.t) {
    return this
  }
  var b = ka.a(2 * (this.j + 1));
  Mc(this.g, 0, b, 0, 2 * this.j);
  return new Tg(a, this.na, this.j, b)
};
q.da = function(a, b, c, e, f) {
  return b === this.na ? (a = Sg(this.g, this.j, c), -1 === a ? (a = this.g.length, b = ka.a(a + 2), Mc(this.g, 0, b, 0, a), b[a] = c, b[a + 1] = e, f.val = j, new Tg(k, this.na, this.j + 1, b)) : yb.b(this.g[a], e) ? this : new Tg(k, this.na, this.j, Hg.c(this.g, a + 1, e))) : (new Qg(k, 1 << (this.na >>> a & 31), [k, this])).da(a, b, c, e, f)
};
q.pa = function(a, b, c, e) {
  a = Sg(this.g, this.j, c);
  return 0 > a ? e : Gg(c, this.g[a]) ? this.g[a + 1] : e
};
var Ug = k;
function Vg(a, b, c, e, f, h) {
  var i = Cc.a(b);
  if(i === e) {
    return new Tg(k, i, 2, [b, c, f, h])
  }
  var p = new Ag;
  return Rg.da(a, i, b, c, p).da(a, e, f, h, p)
}
function Wg(a, b, c, e, f, h, i) {
  var p = Cc.a(c);
  if(p === f) {
    return new Tg(k, p, 2, [c, e, h, i])
  }
  var s = new Ag;
  return Rg.ea(a, b, p, c, e, s).ea(a, b, f, h, i, s)
}
Ug = function(a, b, c, e, f, h, i) {
  switch(arguments.length) {
    case 6:
      return Vg.call(this, a, b, c, e, f, h);
    case 7:
      return Wg.call(this, a, b, c, e, f, h, i)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Ug.ga = Vg;
Ug.Aa = Wg;
Eg = Ug;
function Xg(a, b, c, e, f) {
  this.k = a;
  this.fa = b;
  this.p = c;
  this.V = e;
  this.m = f;
  this.q = 0;
  this.h = 31850572
}
q = Xg.prototype;
q.B = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Vb(a)
};
q.F = function(a, b) {
  return Q(b, a)
};
q.toString = function() {
  return R.a ? R.a(this) : R.call(k, this)
};
q.A = aa();
q.Q = function() {
  return this.V == k ? W([this.fa[this.p], this.fa[this.p + 1]]) : G(this.V)
};
q.O = function() {
  return this.V == k ? Bg.c ? Bg.c(this.fa, this.p + 2, k) : Bg.call(k, this.fa, this.p + 2, k) : Bg.c ? Bg.c(this.fa, this.p, K(this.V)) : Bg.call(k, this.fa, this.p, K(this.V))
};
q.w = function(a, b) {
  return Fb(a, b)
};
q.I = function(a, b) {
  return new Xg(b, this.fa, this.p, this.V, this.m)
};
q.H = m("k");
q.G = function() {
  return N(J, this.k)
};
var Yg = k;
function Zg(a) {
  return Yg.c(a, 0, k)
}
function $g(a, b, c) {
  if(c == k) {
    for(c = a.length;;) {
      if(b < c) {
        if(a[b] != k) {
          return new Xg(k, a, b, k, k)
        }
        var e = a[b + 1];
        if(u(e) && (e = e.Ia(), u(e))) {
          return new Xg(k, a, b + 2, e, k)
        }
        b += 2
      }else {
        return k
      }
    }
  }else {
    return new Xg(k, a, b, c, k)
  }
}
Yg = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return Zg.call(this, a);
    case 3:
      return $g.call(this, a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Yg.a = Zg;
Yg.c = $g;
Bg = Yg;
function ah(a, b, c, e, f) {
  this.k = a;
  this.fa = b;
  this.p = c;
  this.V = e;
  this.m = f;
  this.q = 0;
  this.h = 31850572
}
q = ah.prototype;
q.B = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Vb(a)
};
q.F = function(a, b) {
  return Q(b, a)
};
q.toString = function() {
  return R.a ? R.a(this) : R.call(k, this)
};
q.A = aa();
q.Q = function() {
  return G(this.V)
};
q.O = function() {
  return Cg.o ? Cg.o(k, this.fa, this.p, K(this.V)) : Cg.call(k, k, this.fa, this.p, K(this.V))
};
q.w = function(a, b) {
  return Fb(a, b)
};
q.I = function(a, b) {
  return new ah(b, this.fa, this.p, this.V, this.m)
};
q.H = m("k");
q.G = function() {
  return N(J, this.k)
};
var bh = k;
function ch(a) {
  return bh.o(k, a, 0, k)
}
function dh(a, b, c, e) {
  if(e == k) {
    for(e = b.length;;) {
      if(c < e) {
        var f = b[c];
        if(u(f) && (f = f.Ia(), u(f))) {
          return new ah(a, b, c + 1, f, k)
        }
        c += 1
      }else {
        return k
      }
    }
  }else {
    return new ah(a, b, c, e, k)
  }
}
bh = function(a, b, c, e) {
  switch(arguments.length) {
    case 1:
      return ch.call(this, a);
    case 4:
      return dh.call(this, a, b, c, e)
  }
  d(Error("Invalid arity: " + arguments.length))
};
bh.a = ch;
bh.o = dh;
Cg = bh;
zg = g;
function eh(a, b, c, e, f, h) {
  this.k = a;
  this.j = b;
  this.root = c;
  this.U = e;
  this.Z = f;
  this.m = h;
  this.q = 4;
  this.h = 16123663
}
q = eh.prototype;
q.xa = function() {
  return new zg({}, this.root, this.j, this.U, this.Z)
};
q.B = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Jd(a)
};
q.J = function(a, b) {
  return a.v(a, b, k)
};
q.v = function(a, b, c) {
  return b == k ? this.U ? this.Z : c : this.root == k ? c : this.root.pa(0, Cc.a(b), b, c)
};
q.W = function(a, b, c) {
  if(b == k) {
    var e = this.U;
    return u(e ? c === this.Z : e) ? a : new eh(this.k, this.U ? this.j : this.j + 1, this.root, j, c, k)
  }
  e = new Ag;
  c = (this.root == k ? Rg : this.root).da(0, Cc.a(b), b, c, e);
  return c === this.root ? a : new eh(this.k, e.val ? this.j + 1 : this.j, c, this.U, this.Z, k)
};
q.Fa = function(a, b) {
  return b == k ? this.U : this.root == k ? l : this.root.pa(0, Cc.a(b), b, Nc) !== Nc
};
var fh = k, fh = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.J(this, b);
    case 3:
      return this.v(this, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
q = eh.prototype;
q.call = fh;
q.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
q.F = function(a, b) {
  return Kc(b) ? a.W(a, z.b(b, 0), z.b(b, 1)) : na.c(ta, a, b)
};
q.toString = function() {
  return R.a ? R.a(this) : R.call(k, this)
};
q.A = function() {
  if(0 < this.j) {
    var a = this.root != k ? this.root.Ia() : k;
    return this.U ? Q(W([k, this.Z]), a) : a
  }
  return k
};
q.z = m("j");
q.w = function(a, b) {
  return hg(a, b)
};
q.I = function(a, b) {
  return new eh(b, this.j, this.root, this.U, this.Z, this.m)
};
q.H = m("k");
q.G = function() {
  return Va(lg, this.k)
};
var lg = new eh(k, 0, k, l, k, 0), zg = function(a, b, c, e, f) {
  this.t = a;
  this.root = b;
  this.count = c;
  this.U = e;
  this.Z = f;
  this.q = 56;
  this.h = 258
};
zg.X = j;
zg.ba = function() {
  return M.a("cljs.core/TransientHashMap")
};
zg.ca = function(a, b) {
  return E(b, "cljs.core/TransientHashMap")
};
q = zg.prototype;
q.ya = function(a, b, c) {
  return gh(a, b, c)
};
q.za = function(a, b) {
  var c;
  a: {
    if(a.t) {
      b ? (c = b.h & 2048, c = u(c ? c : b.Hb) ? j : b.h ? l : v(La, b)) : c = v(La, b);
      if(u(c)) {
        c = gh(a, Hd.a ? Hd.a(b) : Hd.call(k, b), Id.a ? Id.a(b) : Id.call(k, b));
        break a
      }
      c = F(b);
      for(var e = a;;) {
        var f = G(c);
        if(u(f)) {
          c = K(c), e = gh(e, Hd.a ? Hd.a(f) : Hd.call(k, f), Id.a ? Id.a(f) : Id.call(k, f))
        }else {
          c = e;
          break a
        }
      }
    }else {
      d(Error("conj! after persistent"))
    }
    c = g
  }
  return c
};
q.Ga = function(a) {
  var b;
  a.t ? (a.t = k, b = new eh(k, a.count, a.root, a.U, a.Z, k)) : d(Error("persistent! called twice"));
  return b
};
q.J = function(a, b) {
  return b == k ? this.U ? this.Z : k : this.root == k ? k : this.root.pa(0, Cc.a(b), b)
};
q.v = function(a, b, c) {
  return b == k ? this.U ? this.Z : c : this.root == k ? c : this.root.pa(0, Cc.a(b), b, c)
};
q.z = function() {
  if(this.t) {
    return this.count
  }
  d(Error("count after persistent!"))
};
function gh(a, b, c) {
  if(a.t) {
    if(b == k) {
      a.Z !== c && (a.Z = c), a.U || (a.count += 1, a.U = j)
    }else {
      var e = new Ag, b = (a.root == k ? Rg : a.root).ea(a.t, 0, Cc.a(b), b, c, e);
      b !== a.root && (a.root = b);
      e.val && (a.count += 1)
    }
    return a
  }
  d(Error("assoc! after persistent!"))
}
function hh(a, b, c) {
  for(var e = b;;) {
    if(a != k) {
      b = c ? a.left : a.right, e = jc.b(e, a), a = b
    }else {
      return e
    }
  }
}
function ih(a, b, c, e, f) {
  this.k = a;
  this.stack = b;
  this.Ja = c;
  this.j = e;
  this.m = f;
  this.q = 0;
  this.h = 31850574
}
q = ih.prototype;
q.B = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Vb(a)
};
q.F = function(a, b) {
  return Q(b, a)
};
q.toString = function() {
  return R.a ? R.a(this) : R.call(k, this)
};
q.A = aa();
q.z = function(a) {
  return 0 > this.j ? nc(K(a)) + 1 : this.j
};
q.Q = function() {
  return Pa(this.stack)
};
q.O = function() {
  var a = G(this.stack), a = hh(this.Ja ? a.right : a.left, K(this.stack), this.Ja);
  return a != k ? new ih(k, a, this.Ja, this.j - 1, k) : J
};
q.w = function(a, b) {
  return Fb(a, b)
};
q.I = function(a, b) {
  return new ih(b, this.stack, this.Ja, this.j, this.m)
};
q.H = m("k");
q.G = function() {
  return N(J, this.k)
};
var jh = g, kh = g, kh = function(a, b, c, e, f) {
  this.key = a;
  this.val = b;
  this.left = c;
  this.right = e;
  this.m = f;
  this.q = 0;
  this.h = 32402207
};
kh.X = j;
kh.ba = function() {
  return M.a("cljs.core/BlackNode")
};
kh.ca = function(a, b) {
  return E(b, "cljs.core/BlackNode")
};
kh.prototype.B = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Vb(a)
};
kh.prototype.J = function(a, b) {
  return a.N(a, b, k)
};
kh.prototype.v = function(a, b, c) {
  return a.N(a, b, c)
};
kh.prototype.W = function(a, b, c) {
  return vc.c(W([this.key, this.val]), b, c)
};
var lh = k, lh = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.J(this, b);
    case 3:
      return this.v(this, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
q = kh.prototype;
q.call = lh;
q.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
q.F = function(a, b) {
  return W([this.key, this.val, b])
};
q.Na = m("key");
q.Oa = m("val");
q.pb = function(a) {
  return a.rb(this)
};
q.replace = function(a, b, c, e) {
  return new kh(a, b, c, e, k)
};
q.ob = function(a) {
  return a.qb(this)
};
q.qb = function(a) {
  return new kh(a.key, a.val, this, a.right, k)
};
var mh = k, mh = function() {
  switch(arguments.length) {
    case 0:
      return R.a ? R.a(this) : R.call(k, this)
  }
  d(Error("Invalid arity: " + arguments.length))
};
q = kh.prototype;
q.toString = mh;
q.rb = function(a) {
  return new kh(a.key, a.val, a.left, this, k)
};
q.Ka = function() {
  return this
};
q.la = function(a, b) {
  return Lb.b(a, b)
};
q.ma = function(a, b, c) {
  return Lb.c(a, b, c)
};
q.A = function() {
  return M.b(this.key, this.val)
};
q.z = n(2);
q.ta = m("val");
q.w = function(a, b) {
  return Fb(a, b)
};
q.I = function(a, b) {
  return N(W([this.key, this.val]), b)
};
q.H = n(k);
q.T = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.val : k
};
q.N = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.val : c
};
q.G = function() {
  return Sf
};
jh = function(a, b, c, e, f) {
  this.key = a;
  this.val = b;
  this.left = c;
  this.right = e;
  this.m = f;
  this.q = 0;
  this.h = 32402207
};
jh.X = j;
jh.ba = function() {
  return M.a("cljs.core/RedNode")
};
jh.ca = function(a, b) {
  return E(b, "cljs.core/RedNode")
};
jh.prototype.B = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Vb(a)
};
jh.prototype.J = function(a, b) {
  return a.N(a, b, k)
};
jh.prototype.v = function(a, b, c) {
  return a.N(a, b, c)
};
jh.prototype.W = function(a, b, c) {
  return vc.c(W([this.key, this.val]), b, c)
};
var nh = k, nh = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.J(this, b);
    case 3:
      return this.v(this, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
q = jh.prototype;
q.call = nh;
q.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
q.F = function(a, b) {
  return W([this.key, this.val, b])
};
q.Na = m("key");
q.Oa = m("val");
q.pb = function(a) {
  return new jh(this.key, this.val, this.left, a, k)
};
q.replace = function(a, b, c, e) {
  return new jh(a, b, c, e, k)
};
q.ob = function(a) {
  return new jh(this.key, this.val, a, this.right, k)
};
q.qb = function(a) {
  return Db(jh, this.left) ? new jh(this.key, this.val, this.left.Ka(), new kh(a.key, a.val, this.right, a.right, k), k) : Db(jh, this.right) ? new jh(this.right.key, this.right.val, new kh(this.key, this.val, this.left, this.right.left, k), new kh(a.key, a.val, this.right.right, a.right, k), k) : new kh(a.key, a.val, this, a.right, k)
};
var oh = k, oh = function() {
  switch(arguments.length) {
    case 0:
      return R.a ? R.a(this) : R.call(k, this)
  }
  d(Error("Invalid arity: " + arguments.length))
};
q = jh.prototype;
q.toString = oh;
q.rb = function(a) {
  return Db(jh, this.right) ? new jh(this.key, this.val, new kh(a.key, a.val, a.left, this.left, k), this.right.Ka(), k) : Db(jh, this.left) ? new jh(this.left.key, this.left.val, new kh(a.key, a.val, a.left, this.left.left, k), new kh(this.key, this.val, this.left.right, this.right, k), k) : new kh(a.key, a.val, a.left, this, k)
};
q.Ka = function() {
  return new kh(this.key, this.val, this.left, this.right, k)
};
q.la = function(a, b) {
  return Lb.b(a, b)
};
q.ma = function(a, b, c) {
  return Lb.c(a, b, c)
};
q.A = function() {
  return M.b(this.key, this.val)
};
q.z = n(2);
q.ta = m("val");
q.w = function(a, b) {
  return Fb(a, b)
};
q.I = function(a, b) {
  return N(W([this.key, this.val]), b)
};
q.H = n(k);
q.T = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.val : k
};
q.N = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.val : c
};
q.G = function() {
  return Sf
};
var qh = function ph(b, c, e, f, h) {
  if(c == k) {
    return new jh(e, f, k, k, k)
  }
  var i = b.b ? b.b(e, c.key) : b.call(k, e, c.key);
  if(0 === i) {
    return h[0] = c, k
  }
  if(0 > i) {
    return b = ph(b, c.left, e, f, h), b != k ? c.ob(b) : k
  }
  b = ph(b, c.right, e, f, h);
  return b != k ? c.pb(b) : k
}, sh = function rh(b, c, e, f) {
  var h = c.key, i = b.b ? b.b(e, h) : b.call(k, e, h);
  return 0 === i ? c.replace(h, f, c.left, c.right) : 0 > i ? c.replace(h, c.val, rh(b, c.left, e, f), c.right) : c.replace(h, c.val, c.left, rh(b, c.right, e, f))
}, Hd = g;
function th(a, b, c, e, f) {
  this.oa = a;
  this.Da = b;
  this.j = c;
  this.k = e;
  this.m = f;
  this.q = 0;
  this.h = 418776847
}
q = th.prototype;
q.B = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Jd(a)
};
q.J = function(a, b) {
  return a.v(a, b, k)
};
q.v = function(a, b, c) {
  a = uh(a, b);
  return a != k ? a.val : c
};
q.W = function(a, b, c) {
  var e = [k], f = qh(this.oa, this.Da, b, c, e);
  return f == k ? (e = S.b(e, 0), yb.b(c, e.val) ? a : new th(this.oa, sh(this.oa, this.Da, b, c), this.j, this.k, k)) : new th(this.oa, f.Ka(), this.j + 1, this.k, k)
};
q.Fa = function(a, b) {
  return uh(a, b) != k
};
var vh = k, vh = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.J(this, b);
    case 3:
      return this.v(this, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
q = th.prototype;
q.call = vh;
q.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
q.F = function(a, b) {
  return Kc(b) ? a.W(a, z.b(b, 0), z.b(b, 1)) : na.c(ta, a, b)
};
q.Pa = function() {
  return 0 < this.j ? new ih(k, hh(this.Da, k, l), l, this.j, k) : k
};
q.toString = function() {
  return R.a ? R.a(this) : R.call(k, this)
};
function uh(a, b) {
  for(var c = a.Da;;) {
    if(c != k) {
      var e = a.oa.b ? a.oa.b(b, c.key) : a.oa.call(k, b, c.key);
      if(0 === e) {
        return c
      }
      c = 0 > e ? c.left : c.right
    }else {
      return k
    }
  }
}
q.A = function() {
  return 0 < this.j ? new ih(k, hh(this.Da, k, j), j, this.j, k) : k
};
q.z = m("j");
q.w = function(a, b) {
  return hg(a, b)
};
q.I = function(a, b) {
  return new th(this.oa, this.Da, this.j, b, this.m)
};
q.H = m("k");
q.G = function() {
  return N(wh, this.k)
};
var wh = new th(Sc, k, 0, k, 0);
function xh(a) {
  for(var b = F(a), c = nb(lg);;) {
    if(b) {
      var a = K(K(b)), e = G(b), b = G(K(b)), c = qb(c, e, b), b = a
    }else {
      return pb(c)
    }
  }
}
function yh(a) {
  var b = k;
  t(a) && (b = L(Array.prototype.slice.call(arguments, 0), 0));
  return xh.call(this, b)
}
yh.n = 0;
yh.l = function(a) {
  a = F(a);
  return xh(a)
};
yh.e = xh;
Eb = yh;
function zh(a) {
  for(var a = F(a), b = wh;;) {
    if(a) {
      var c = K(K(a)), b = vc.c(b, G(a), G(K(a))), a = c
    }else {
      return b
    }
  }
}
function Ah(a) {
  var b = k;
  t(a) && (b = L(Array.prototype.slice.call(arguments, 0), 0));
  return zh.call(this, b)
}
Ah.n = 0;
Ah.l = function(a) {
  a = F(a);
  return zh(a)
};
Ah.e = zh;
function Bh(a) {
  return F(yd.b(G, a))
}
Hd = function(a) {
  return Ma(a)
};
Id = function(a) {
  return Na(a)
};
function Ch(a) {
  var b;
  a: {
    b = a;
    for(var c = Qe;;) {
      if(F(b)) {
        var e = c.a ? c.a(G(b)) : c.call(k, G(b));
        if(u(e)) {
          b = e;
          break a
        }
        b = K(b)
      }else {
        b = k;
        break a
      }
    }
    b = g
  }
  return u(b) ? na.b(function(a, b) {
    return jc.b(u(a) ? a : qg, b)
  }, a) : k
}
function Dh(a) {
  var b = k;
  t(a) && (b = L(Array.prototype.slice.call(arguments, 0), 0));
  return Ch.call(this, b)
}
Dh.n = 0;
Dh.l = function(a) {
  a = F(a);
  return Ch(a)
};
Dh.e = Ch;
var Eh = g;
function Fh(a, b, c) {
  this.k = a;
  this.Ha = b;
  this.m = c;
  this.q = 4;
  this.h = 15077647
}
Fh.prototype.xa = function() {
  return new Eh(nb(this.Ha))
};
Fh.prototype.B = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Kd(a)
};
Fh.prototype.J = function(a, b) {
  return a.v(a, b, k)
};
Fh.prototype.v = function(a, b, c) {
  return u(Ha(this.Ha, b)) ? b : c
};
var Gh = k, Gh = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.J(this, b);
    case 3:
      return this.v(this, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
q = Fh.prototype;
q.call = Gh;
q.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
q.F = function(a, b) {
  return new Fh(this.k, vc.c(this.Ha, b, k), k)
};
q.toString = function() {
  return R.a ? R.a(this) : R.call(k, this)
};
q.A = function() {
  return Bh(this.Ha)
};
q.z = function(a) {
  return nc(F(a))
};
q.w = function(a, b) {
  var c = Ic(b);
  return c ? (c = nc(a) === nc(b)) ? Pe(function(b) {
    return D.c(a, b, Nc) === Nc ? l : j
  }, b) : c : c
};
q.I = function(a, b) {
  return new Fh(b, this.Ha, this.m)
};
q.H = m("k");
q.G = function() {
  return N(Hh, this.k)
};
var Hh = new Fh(k, Eb(), 0);
function Ih(a) {
  for(var b = nc(a), c = 0, e = nb(Hh);;) {
    if(c < b) {
      var f = c + 1, e = ob(e, a[c]), c = f
    }else {
      return pb(e)
    }
  }
}
Eh = function(a) {
  this.wa = a;
  this.h = 259;
  this.q = 136
};
Eh.X = j;
Eh.ba = function() {
  return M.a("cljs.core/TransientHashSet")
};
Eh.ca = function(a, b) {
  return E(b, "cljs.core/TransientHashSet")
};
var Jh = k, Jh = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return D.c(this.wa, b, Nc) === Nc ? k : b;
    case 3:
      return D.c(this.wa, b, Nc) === Nc ? c : b
  }
  d(Error("Invalid arity: " + arguments.length))
};
q = Eh.prototype;
q.call = Jh;
q.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
q.J = function(a, b) {
  return a.v(a, b, k)
};
q.v = function(a, b, c) {
  return D.c(this.wa, b, Nc) === Nc ? c : b
};
q.z = function() {
  return nc(this.wa)
};
q.za = function(a, b) {
  this.wa = qb(this.wa, b, k);
  return a
};
q.Ga = function() {
  return new Fh(k, pb(this.wa), k)
};
Ah();
var Kh, Lh = k;
function Mh(a) {
  for(var b = F(a), c = nb(Hh);;) {
    if(F(b)) {
      a = K(b), b = G(b), c = ob(c, b), b = a
    }else {
      return pb(c)
    }
  }
}
function Nh(a) {
  var b = k;
  t(a) && (b = L(Array.prototype.slice.call(arguments, 0), 0));
  return Mh.call(this, b)
}
Nh.n = 0;
Nh.l = function(a) {
  a = F(a);
  return Mh(a)
};
Nh.e = Mh;
Lh = function(a) {
  switch(arguments.length) {
    case 0:
      return Hh;
    default:
      return Nh.e(L(arguments, 0))
  }
  d(Error("Invalid arity: " + arguments.length))
};
Lh.n = 0;
Lh.l = Nh.l;
Lh.r = function() {
  return Hh
};
Lh.e = Nh.e;
Kh = Lh;
function Oh(a) {
  return x.b(Kh, a)
}
Ld = function(a) {
  if(Pc(a)) {
    return a
  }
  var b = Qc(a);
  if(u(b ? b : Rc(a))) {
    return b = a.lastIndexOf("/", a.length - 2), 0 > b ? wd.b(a, 2) : wd.b(a, b + 1)
  }
  d(Error([T("Doesn't support name: "), T(a)].join("")))
};
function Ph(a) {
  var b = Qc(a);
  if(u(b ? b : Rc(a))) {
    return b = a.lastIndexOf("/", a.length - 2), -1 < b ? wd.c(a, 2, b) : k
  }
  d(Error([T("Doesn't support namespace: "), T(a)].join("")))
}
function Qh(a, b, c, e, f) {
  this.k = a;
  this.start = b;
  this.end = c;
  this.step = e;
  this.m = f;
  this.q = 0;
  this.h = 32375006
}
q = Qh.prototype;
q.B = function(a) {
  var b = this.m;
  return b != k ? b : this.m = a = Vb(a)
};
q.ka = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Qh(this.k, this.start + this.step, this.end, this.step, k) : k : this.start + this.step > this.end ? new Qh(this.k, this.start + this.step, this.end, this.step, k) : k
};
q.F = function(a, b) {
  return Q(b, a)
};
q.toString = function() {
  return R.a ? R.a(this) : R.call(k, this)
};
q.la = function(a, b) {
  return Lb.b(a, b)
};
q.ma = function(a, b, c) {
  return Lb.c(a, b, c)
};
q.A = function(a) {
  return 0 < this.step ? this.start < this.end ? a : k : this.start > this.end ? a : k
};
q.z = function(a) {
  return ia(a.A(a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
q.Q = m("start");
q.O = function(a) {
  return a.A(a) != k ? new Qh(this.k, this.start + this.step, this.end, this.step, k) : J
};
q.w = function(a, b) {
  return Fb(a, b)
};
q.I = function(a, b) {
  return new Qh(b, this.start, this.end, this.step, this.m)
};
q.H = m("k");
q.T = function(a, b) {
  if(b < a.z(a)) {
    return this.start + b * this.step
  }
  var c = this.start > this.end;
  if(u(c ? 0 === this.step : c)) {
    return this.start
  }
  d(Error("Index out of bounds"))
};
q.N = function(a, b, c) {
  b < a.z(a) ? c = this.start + b * this.step : (a = this.start > this.end, c = u(a ? 0 === this.step : a) ? this.start : c);
  return c
};
q.G = function() {
  return N(J, this.k)
};
var Rh, Sh = k;
function Th() {
  return Sh.c(0, Number.MAX_VALUE, 1)
}
function Uh(a) {
  return Sh.c(0, a, 1)
}
function Vh(a, b) {
  return Sh.c(a, b, 1)
}
function Wh(a, b, c) {
  return new Qh(k, a, b, c, k)
}
Sh = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return Th.call(this);
    case 1:
      return Uh.call(this, a);
    case 2:
      return Vh.call(this, a, b);
    case 3:
      return Wh.call(this, a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Sh.r = Th;
Sh.a = Uh;
Sh.b = Vh;
Sh.c = Wh;
Rh = Sh;
var Xh, Yh = k;
function Zh(a) {
  for(;;) {
    if(F(a)) {
      a = K(a)
    }else {
      return k
    }
  }
}
function $h(a, b) {
  for(;;) {
    var c = F(b);
    if(u(c ? 0 < a : c)) {
      var c = a - 1, e = K(b), a = c, b = e
    }else {
      return k
    }
  }
}
Yh = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Zh.call(this, a);
    case 2:
      return $h.call(this, a, b)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Yh.a = Zh;
Yh.b = $h;
Xh = Yh;
var ai, bi = k;
function ci(a) {
  Xh.a(a);
  return a
}
function di(a, b) {
  Xh.b(a, b);
  return b
}
bi = function(a, b) {
  switch(arguments.length) {
    case 1:
      return ci.call(this, a);
    case 2:
      return di.call(this, a, b)
  }
  d(Error("Invalid arity: " + arguments.length))
};
bi.a = ci;
bi.b = di;
ai = bi;
function ei(a, b) {
  var c = a.exec(b);
  return yb.b(G(c), b) ? 1 === nc(c) ? G(c) : bd(c) : k
}
function fi(a) {
  var b, a = /^(?:\(\?([idmsux]*)\))?(.*)/.exec(a);
  b = a == k ? k : 1 === nc(a) ? G(a) : bd(a);
  S.c(b, 0, k);
  a = S.c(b, 1, k);
  b = S.c(b, 2, k);
  return RegExp(b, a)
}
Y = function(a, b, c, e, f, h) {
  return oe.e(W([b]), tf(sf(W([c]), yd.b(function(b) {
    return a.b ? a.b(b, f) : a.call(k, b, f)
  }, h))), L([W([e])], 0))
};
Z = function(a, b, c, e, f, h, i) {
  E(a, c);
  F(i) && (b.c ? b.c(G(i), a, h) : b.call(k, G(i), a, h));
  for(c = F(K(i));;) {
    if(c) {
      i = G(c), E(a, e), b.c ? b.c(i, a, h) : b.call(k, i, a, h), c = K(c)
    }else {
      break
    }
  }
  return E(a, f)
};
function gi(a, b) {
  for(var c = F(b);;) {
    if(c) {
      var e = G(c);
      E(a, e);
      c = K(c)
    }else {
      return k
    }
  }
}
function hi(a, b) {
  var c = k;
  t(b) && (c = L(Array.prototype.slice.call(arguments, 1), 0));
  return gi.call(this, a, c)
}
hi.n = 1;
hi.l = function(a) {
  var b = G(a), a = H(a);
  return gi(b, a)
};
hi.e = gi;
function ii(a) {
  this.Kb = a;
  this.q = 0;
  this.h = 1073741824
}
ii.prototype.zb = function(a, b) {
  return this.Kb.append(b)
};
ii.prototype.Jb = n(k);
var ki = function ji(b, c) {
  return b == k ? M.a("nil") : g === b ? M.a("#<undefined>") : oe.b(u(function() {
    var e = D.c(c, "\ufdd0:meta", k);
    return u(e) ? (b ? (e = b.h & 131072, e = u(e ? e : b.wb) ? j : b.h ? l : v(Sa, b)) : e = v(Sa, b), u(e) ? zc(b) : e) : e
  }()) ? oe.e(W(["^"]), ji(zc(b), c), L([W([" "])], 0)) : k, u(function() {
    var c = b != k;
    return c ? b.X : c
  }()) ? b.ba(b) : u(b ? u(function() {
    var c = b.h & 536870912;
    return c ? c : b.K
  }()) ? j : b.h ? l : v(gb, b) : v(gb, b)) ? hb(b, c) : u(b instanceof RegExp) ? M.c('#"', b.source, '"') : M.c("#<", "" + T(b), ">"))
}, Of = function li(b, c, e) {
  if(b == k) {
    return E(c, "nil")
  }
  if(g === b) {
    return E(c, "#<undefined>")
  }
  var f;
  f = D.c(e, "\ufdd0:meta", k);
  u(f) && (b ? (f = b.h & 131072, f = u(f ? f : b.wb) ? j : b.h ? l : v(Sa, b)) : f = v(Sa, b), f = u(f) ? zc(b) : f);
  u(f) && (E(c, "^"), li(zc(b), c, e), E(c, " "));
  f = b != k;
  u(f ? b.X : f) ? b = b.ca(b, c, e) : (b ? (f = b.h & 2147483648, f = u(f ? f : b.L) ? j : b.h ? l : v(jb, b)) : f = v(jb, b), u(f) ? b = kb(b, c, e) : (b ? (f = b.h & 536870912, f = u(f ? f : b.K) ? j : b.h ? l : v(gb, b)) : f = v(gb, b), b = u(f) ? x.c(hi, c, hb(b, e)) : u(b instanceof RegExp) ? hi.e(c, L(['#"', b.source, '"'], 0)) : hi.e(c, L(["#<", "" + T(b), ">"], 0))));
  return b
};
function mi(a) {
  var b = rg(["\ufdd0:flush-on-newline", "\ufdd0:readably", "\ufdd0:meta", "\ufdd0:dup"], {"\ufdd0:flush-on-newline":j, "\ufdd0:readably":j, "\ufdd0:meta":l, "\ufdd0:dup":l});
  if(Gc(a)) {
    b = ""
  }else {
    var c = new ga, e = new ii(c);
    a: {
      Of(G(a), e, b);
      for(a = F(K(a));;) {
        if(a) {
          var f = G(a);
          E(e, " ");
          Of(f, e, b);
          a = K(a)
        }else {
          break a
        }
      }
    }
    ib(e);
    b = "" + T(c)
  }
  return b
}
function ni(a) {
  var b = k;
  t(a) && (b = L(Array.prototype.slice.call(arguments, 0), 0));
  return mi(b)
}
ni.n = 0;
ni.l = function(a) {
  a = F(a);
  return mi(a)
};
ni.e = function(a) {
  return mi(a)
};
var R = ni, oi = rg('"\\\b\f\n\r\t'.split(""), {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"});
function pi(a) {
  return[T('"'), T(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return D.c(oi, a, k)
  })), T('"')].join("")
}
gb.number = j;
hb.number = function(a) {
  return M.a("" + T(a))
};
Zb.prototype.K = j;
Zb.prototype.D = function(a, b) {
  return Y(ki, "(", " ", ")", b, a)
};
je.prototype.K = j;
je.prototype.D = function(a, b) {
  return Y(ki, "(", " ", ")", b, a)
};
th.prototype.K = j;
th.prototype.D = function(a, b) {
  return Y(function(a) {
    return Y(ki, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
ug.prototype.K = j;
ug.prototype.D = function(a, b) {
  return Y(function(a) {
    return Y(ki, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
dg.prototype.K = j;
dg.prototype.D = function(a, b) {
  return Y(ki, "#queue [", " ", "]", b, F(a))
};
U.prototype.K = j;
U.prototype.D = function(a, b) {
  return Y(ki, "(", " ", ")", b, a)
};
Wb.prototype.K = j;
Wb.prototype.D = function(a, b) {
  return Y(ki, "(", " ", ")", b, a)
};
gb["boolean"] = j;
hb["boolean"] = function(a) {
  return M.a("" + T(a))
};
gb.string = j;
hb.string = function(a, b) {
  return Qc(a) ? M.a([T(":"), T(function() {
    var b = Ph(a);
    return u(b) ? [T(b), T("/")].join("") : k
  }()), T(Ld(a))].join("")) : Rc(a) ? M.a([T(function() {
    var b = Ph(a);
    return u(b) ? [T(b), T("/")].join("") : k
  }()), T(Ld(a))].join("")) : M.a(u((new Zd("\ufdd0:readably")).call(k, b)) ? pi(a) : a)
};
Xg.prototype.K = j;
Xg.prototype.D = function(a, b) {
  return Y(ki, "(", " ", ")", b, a)
};
jh.prototype.K = j;
jh.prototype.D = function(a, b) {
  return Y(ki, "[", " ", "]", b, a)
};
Vf.prototype.K = j;
Vf.prototype.D = function(a, b) {
  return Y(ki, "(", " ", ")", b, a)
};
eh.prototype.K = j;
eh.prototype.D = function(a, b) {
  return Y(function(a) {
    return Y(ki, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
Fh.prototype.K = j;
Fh.prototype.D = function(a, b) {
  return Y(ki, "#{", " ", "}", b, a)
};
Qf.prototype.K = j;
Qf.prototype.D = function(a, b) {
  return Y(ki, "[", " ", "]", b, a)
};
Md.prototype.K = j;
Md.prototype.D = function(a, b) {
  return Y(ki, "(", " ", ")", b, a)
};
gb.array = j;
hb.array = function(a, b) {
  return Y(ki, "#<Array [", ", ", "]>", b, a)
};
gb["function"] = j;
hb["function"] = function(a) {
  return M.c("#<", "" + T(a), ">")
};
Nd.prototype.K = j;
Nd.prototype.D = function() {
  return M.a("()")
};
kh.prototype.K = j;
kh.prototype.D = function(a, b) {
  return Y(ki, "[", " ", "]", b, a)
};
Date.prototype.K = j;
Date.prototype.D = function(a) {
  function b(a, b) {
    for(var f = "" + T(a);;) {
      if(nc(f) < b) {
        f = [T("0"), T(f)].join("")
      }else {
        return f
      }
    }
  }
  return M.a([T('#inst "'), T(a.getUTCFullYear()), T("-"), T(b(a.getUTCMonth() + 1, 2)), T("-"), T(b(a.getUTCDate(), 2)), T("T"), T(b(a.getUTCHours(), 2)), T(":"), T(b(a.getUTCMinutes(), 2)), T(":"), T(b(a.getUTCSeconds(), 2)), T("."), T(b(a.getUTCMilliseconds(), 3)), T("-"), T('00:00"')].join(""))
};
Vd.prototype.K = j;
Vd.prototype.D = function(a, b) {
  return Y(ki, "(", " ", ")", b, a)
};
Qh.prototype.K = j;
Qh.prototype.D = function(a, b) {
  return Y(ki, "(", " ", ")", b, a)
};
ah.prototype.K = j;
ah.prototype.D = function(a, b) {
  return Y(ki, "(", " ", ")", b, a)
};
ng.prototype.K = j;
ng.prototype.D = function(a, b) {
  return Y(function(a) {
    return Y(ki, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
ih.prototype.K = j;
ih.prototype.D = function(a, b) {
  return Y(ki, "(", " ", ")", b, a)
};
jb.number = j;
kb.number = function(a, b) {
  1 / 0;
  return E(b, "" + T(a))
};
Zb.prototype.L = j;
Zb.prototype.C = function(a, b, c) {
  return Z(b, Of, "(", " ", ")", c, a)
};
je.prototype.L = j;
je.prototype.C = function(a, b, c) {
  return Z(b, Of, "(", " ", ")", c, a)
};
th.prototype.L = j;
th.prototype.C = function(a, b, c) {
  return Z(b, function(a) {
    return Z(b, Of, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
ug.prototype.L = j;
ug.prototype.C = function(a, b, c) {
  return Z(b, function(a) {
    return Z(b, Of, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
dg.prototype.L = j;
dg.prototype.C = function(a, b, c) {
  return Z(b, Of, "#queue [", " ", "]", c, F(a))
};
U.prototype.L = j;
U.prototype.C = function(a, b, c) {
  return Z(b, Of, "(", " ", ")", c, a)
};
Wb.prototype.L = j;
Wb.prototype.C = function(a, b, c) {
  return Z(b, Of, "(", " ", ")", c, a)
};
jb["boolean"] = j;
kb["boolean"] = function(a, b) {
  return E(b, "" + T(a))
};
jb.string = j;
kb.string = function(a, b, c) {
  return Qc(a) ? (E(b, ":"), c = Ph(a), u(c) && hi.e(b, L(["" + T(c), "/"], 0)), E(b, Ld(a))) : Rc(a) ? (c = Ph(a), u(c) && hi.e(b, L(["" + T(c), "/"], 0)), E(b, Ld(a))) : u((new Zd("\ufdd0:readably")).call(k, c)) ? E(b, pi(a)) : E(b, a)
};
Xg.prototype.L = j;
Xg.prototype.C = function(a, b, c) {
  return Z(b, Of, "(", " ", ")", c, a)
};
jh.prototype.L = j;
jh.prototype.C = function(a, b, c) {
  return Z(b, Of, "[", " ", "]", c, a)
};
Vf.prototype.L = j;
Vf.prototype.C = function(a, b, c) {
  return Z(b, Of, "(", " ", ")", c, a)
};
eh.prototype.L = j;
eh.prototype.C = function(a, b, c) {
  return Z(b, function(a) {
    return Z(b, Of, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Fh.prototype.L = j;
Fh.prototype.C = function(a, b, c) {
  return Z(b, Of, "#{", " ", "}", c, a)
};
Qf.prototype.L = j;
Qf.prototype.C = function(a, b, c) {
  return Z(b, Of, "[", " ", "]", c, a)
};
Md.prototype.L = j;
Md.prototype.C = function(a, b, c) {
  return Z(b, Of, "(", " ", ")", c, a)
};
jb.array = j;
kb.array = function(a, b, c) {
  return Z(b, Of, "#<Array [", ", ", "]>", c, a)
};
jb["function"] = j;
kb["function"] = function(a, b) {
  return hi.e(b, L(["#<", "" + T(a), ">"], 0))
};
Nd.prototype.L = j;
Nd.prototype.C = function(a, b) {
  return E(b, "()")
};
kh.prototype.L = j;
kh.prototype.C = function(a, b, c) {
  return Z(b, Of, "[", " ", "]", c, a)
};
Date.prototype.L = j;
Date.prototype.C = function(a, b) {
  function c(a, b) {
    for(var c = "" + T(a);;) {
      if(nc(c) < b) {
        c = [T("0"), T(c)].join("")
      }else {
        return c
      }
    }
  }
  return hi.e(b, L(['#inst "', "" + T(a.getUTCFullYear()), "-", c(a.getUTCMonth() + 1, 2), "-", c(a.getUTCDate(), 2), "T", c(a.getUTCHours(), 2), ":", c(a.getUTCMinutes(), 2), ":", c(a.getUTCSeconds(), 2), ".", c(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
};
Vd.prototype.L = j;
Vd.prototype.C = function(a, b, c) {
  return Z(b, Of, "(", " ", ")", c, a)
};
Qh.prototype.L = j;
Qh.prototype.C = function(a, b, c) {
  return Z(b, Of, "(", " ", ")", c, a)
};
ah.prototype.L = j;
ah.prototype.C = function(a, b, c) {
  return Z(b, Of, "(", " ", ")", c, a)
};
ng.prototype.L = j;
ng.prototype.C = function(a, b, c) {
  return Z(b, function(a) {
    return Z(b, Of, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
ih.prototype.L = j;
ih.prototype.C = function(a, b, c) {
  return Z(b, Of, "(", " ", ")", c, a)
};
Qf.prototype.Db = j;
Qf.prototype.vb = function(a, b) {
  return Tc.b(a, b)
};
function qi(a, b, c, e) {
  this.state = a;
  this.k = b;
  this.Lb = c;
  this.Mb = e;
  this.h = 2690809856;
  this.q = 2
}
q = qi.prototype;
q.B = function(a) {
  return a[ca] || (a[ca] = ++da)
};
q.yb = function(a, b, c) {
  for(var e = F(this.Mb);;) {
    if(e) {
      var f = G(e), h = S.c(f, 0, k), f = S.c(f, 1, k);
      f.o ? f.o(h, a, b, c) : f.call(k, h, a, b, c);
      e = K(e)
    }else {
      return k
    }
  }
};
q.C = function(a, b, c) {
  E(b, "#<Atom: ");
  kb(this.state, b, c);
  return E(b, ">")
};
q.D = function(a, b) {
  return oe.e(W(["#<Atom: "]), hb(this.state, b), L([">"], 0))
};
q.H = m("k");
q.Wa = m("state");
q.w = function(a, b) {
  return a === b
};
var ri = k;
function si(a) {
  return new qi(a, k, k, k)
}
function ti(a, b) {
  var c = Oc(b) ? x.b(Eb, b) : b, e = D.c(c, "\ufdd0:validator", k), c = D.c(c, "\ufdd0:meta", k);
  return new qi(a, c, e, k)
}
function ui(a, b) {
  var c = k;
  t(b) && (c = L(Array.prototype.slice.call(arguments, 1), 0));
  return ti.call(this, a, c)
}
ui.n = 1;
ui.l = function(a) {
  var b = G(a), a = H(a);
  return ti(b, a)
};
ui.e = ti;
ri = function(a, b) {
  switch(arguments.length) {
    case 1:
      return si.call(this, a);
    default:
      return ui.e(a, L(arguments, 1))
  }
  d(Error("Invalid arity: " + arguments.length))
};
ri.n = 1;
ri.l = ui.l;
ri.a = si;
ri.e = ui.e;
var Fg = ri, Dg = function(a, b) {
  var c = a.Lb;
  u(c) && !u(c.a ? c.a(b) : c.call(k, b)) && d(Error([T("Assert failed: "), T("Validator rejected reference state"), T("\n"), T(R.e(L([N(M("\ufdd1'validate", "\ufdd1'new-value"), Eb("\ufdd0:line", 6752, "\ufdd0:column", 13))], 0)))].join("")));
  c = a.state;
  a.state = b;
  lb(a, c, b);
  return b
}, vi, wi = k;
function xi(a, b) {
  return Dg(a, b.a ? b.a(a.state) : b.call(k, a.state))
}
function yi(a, b, c) {
  return Dg(a, b.b ? b.b(a.state, c) : b.call(k, a.state, c))
}
function zi(a, b, c, e) {
  return Dg(a, b.c ? b.c(a.state, c, e) : b.call(k, a.state, c, e))
}
function Ai(a, b, c, e, f) {
  return Dg(a, b.o ? b.o(a.state, c, e, f) : b.call(k, a.state, c, e, f))
}
function Bi(a, b, c, e, f, h) {
  return Dg(a, x.e(b, a.state, c, e, f, L([h], 0)))
}
function Ci(a, b, c, e, f, h) {
  var i = k;
  t(h) && (i = L(Array.prototype.slice.call(arguments, 5), 0));
  return Bi.call(this, a, b, c, e, f, i)
}
Ci.n = 5;
Ci.l = function(a) {
  var b = G(a), c = G(K(a)), e = G(K(K(a))), f = G(K(K(K(a)))), h = G(K(K(K(K(a))))), a = H(K(K(K(K(a)))));
  return Bi(b, c, e, f, h, a)
};
Ci.e = Bi;
wi = function(a, b, c, e, f, h) {
  switch(arguments.length) {
    case 2:
      return xi.call(this, a, b);
    case 3:
      return yi.call(this, a, b, c);
    case 4:
      return zi.call(this, a, b, c, e);
    case 5:
      return Ai.call(this, a, b, c, e, f);
    default:
      return Ci.e(a, b, c, e, f, L(arguments, 5))
  }
  d(Error("Invalid arity: " + arguments.length))
};
wi.n = 5;
wi.l = Ci.l;
wi.b = xi;
wi.c = yi;
wi.o = zi;
wi.R = Ai;
wi.e = Ci.e;
vi = wi;
P = function(a) {
  return Ra(a)
};
function Di(a) {
  if(a ? a.Fb : a) {
    return a.Fb(a)
  }
  var b;
  var c = Di[r(a == k ? k : a)];
  c ? b = c : (c = Di._) ? b = c : d(w("IEncodeJS.-clj->js", a));
  return b.call(k, a)
}
function Ei(a) {
  if(a ? a.Gb : a) {
    return a.Gb(a)
  }
  var b;
  var c = Ei[r(a == k ? k : a)];
  c ? b = c : (c = Ei._) ? b = c : d(w("IEncodeJS.-key->js", a));
  return b.call(k, a)
}
Di["null"] = n(k);
Ei._ = function(a) {
  return u(function() {
    var b = Pc(a);
    return b || (b = "number" == typeof a) ? b : (b = Qc(a)) ? b : Rc(a)
  }()) ? Di(a) : R.e(L([a], 0))
};
Di._ = function(a) {
  if(Qc(a)) {
    return Ld(a)
  }
  if(Rc(a)) {
    return"" + T(a)
  }
  if(Jc(a)) {
    for(var b = {}, a = F(a);;) {
      if(a) {
        var c = G(a), e = S.c(c, 0, k), c = S.c(c, 1, k);
        b[Ei(e)] = Di(c);
        a = K(a)
      }else {
        break
      }
    }
    return b
  }
  return Hc(a) ? x.b(ja, yd.b(Di, a)) : a
};
var Fi = k;
function Gi() {
  return Fi.a(1)
}
function Hi(a) {
  return(Math.random.r ? Math.random.r() : Math.random.call(k)) * a
}
Fi = function(a) {
  switch(arguments.length) {
    case 0:
      return Gi.call(this);
    case 1:
      return Hi.call(this, a)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Fi.r = Gi;
Fi.a = Hi;
gd = Fi;
ld = function(a) {
  return Math.floor.a ? Math.floor.a((Math.random.r ? Math.random.r() : Math.random.call(k)) * a) : Math.floor.call(k, (Math.random.r ? Math.random.r() : Math.random.call(k)) * a)
};
Fg.a(rg(["\ufdd0:parents", "\ufdd0:descendants", "\ufdd0:ancestors"], {"\ufdd0:parents":qg, "\ufdd0:descendants":qg, "\ufdd0:ancestors":qg}));
function Ii(a) {
  this.Sa = a;
  this.q = 0;
  this.h = 2690646016
}
q = Ii.prototype;
q.B = function(a) {
  return ea(R.e(L([a], 0)))
};
q.C = function(a, b) {
  return E(b, [T('#uuid "'), T(this.Sa), T('"')].join(""))
};
q.D = function() {
  return M.a([T('#uuid "'), T(this.Sa), T('"')].join(""))
};
q.w = function(a, b) {
  var c = Db(Ii, b);
  return c ? this.Sa === b.Sa : c
};
q.toString = function() {
  return R.e(L([this], 0))
};
// Input 9
N(M(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), Eb("\ufdd0:line", 44, "\ufdd0:column", 13));
// Input 10
// Input 11
var Ji = function() {
  var a = window.requestAnimationFrame;
  if(u(a)) {
    return a
  }
  a = window.webkitRequestAnimationFrame;
  if(u(a)) {
    return a
  }
  a = window.mozRequestAnimationFrame;
  if(u(a)) {
    return a
  }
  a = window.oRequestAnimationFrame;
  if(u(a)) {
    return a
  }
  a = window.msRequestAnimationFrame;
  return u(a) ? a : function(a) {
    return setTimeout(a, 17)
  }
}();
// Input 12
var Li = function Ki(b) {
  return new U(k, l, function() {
    for(var c = b;;) {
      var e = F(c);
      if(e) {
        var f = e, h = G(f);
        if(e = F(function(b, c) {
          return function A(b) {
            return new U(k, l, function() {
              for(var e = b;;) {
                var f = F(e);
                if(f) {
                  f = G(f);
                  if(Ke.e(0, c, L([f], 0))) {
                    return Q(W([c, f]), A(H(e)))
                  }
                  e = H(e)
                }else {
                  return k
                }
              }
            }, k)
          }
        }(c, h, f, e)(W([-1, 0, 1])))) {
          return oe.b(e, Ki(H(c)))
        }
        c = H(c)
      }else {
        return k
      }
    }
  }, k)
}(W([-1, 0, 1])), Ni = function Mi(b) {
  return new U(k, l, function() {
    for(var c = b;;) {
      var e = F(c);
      if(e) {
        var f = e, h = G(f);
        if(e = F(function(b, c) {
          return function A(b) {
            return new U(k, l, function() {
              for(;;) {
                var e = F(b);
                return e ? (e = G(e), Q(W([c, e]), A(H(b)))) : k
              }
            }, k)
          }
        }(c, h, f, e)(W([-1, 0, 1])))) {
          return oe.b(e, Mi(H(c)))
        }
        c = H(c)
      }else {
        return k
      }
    }
  }, k)
}(W([-1, 0, 1]));
function Oi(a, b) {
  return yd.b(function(a) {
    var e = S.c(b, 0, k), f = S.c(b, 1, k), h = S.c(a, 0, k), a = S.c(a, 1, k);
    return W([e + h, f + a])
  }, a)
}
function Pi(a, b, c) {
  return function(e, f) {
    var h;
    h = uf.b(a, f);
    h = Be(na.c(function(a, b) {
      var c = D.c(a, b, 0) + 1;
      return qb(a, b, c)
    }, nb(qg), h));
    return Oh(function p(a) {
      return new U(k, l, function() {
        for(var h = a;;) {
          var y = F(h);
          if(y) {
            var C = G(y), y = S.c(C, 0, k), C = S.c(C, 1, k), C = u(f.a ? f.a(y) : f.call(k, y)) ? c.a ? c.a(C) : c.call(k, C) : b.a ? b.a(C) : b.call(k, C), C = u(C) ? e.a ? e.a(y) : e.call(k, y) : C;
            if(u(C)) {
              return Q(y, p(H(h)))
            }
            h = H(h)
          }else {
            return k
          }
        }
      }, k)
    }(h))
  }
}
var Qi = Pi(function(a) {
  return Oi(Li, a)
}, Ih([3]), Ih([2, 3])), Ri = Pi(function(a) {
  return Oi(Li, a)
}, Ih([3, 5, 6, 7, 8]), Ih([4, 6, 7, 8])), Si = Pi(function(a) {
  return Oi(Ni, a)
}, Ih([5, 6, 7, 8, 9]), Ih([5, 6, 7, 8, 9])), Ti = Pi(function(a) {
  return Oi(Ni, a)
}, Ih([4, 6, 7, 8, 9]), Ih([4, 6, 7, 8, 9])), Ui = Pi(function(a) {
  return Oi(Ni, a)
}, Ih([1, 3, 5, 7, 9]), Ih([1, 3, 5, 7, 9]));
Ih([3]);
Ih([1, 2, 4]);
// Input 13
function Vi(a, b, c) {
  a.lineTo(b, c);
  return a
}
;
// Input 14
// Input 15
function Wi(a) {
  if(a ? a.Ab : a) {
    return a.Ab()
  }
  var b;
  var c = Wi[r(a == k ? k : a)];
  c ? b = c : (c = Wi._) ? b = c : d(w("PushbackReader.read-char", a));
  return b.call(k, a)
}
function Xi(a, b) {
  if(a ? a.Bb : a) {
    return a.Bb(0, b)
  }
  var c;
  var e = Xi[r(a == k ? k : a)];
  e ? c = e : (e = Xi._) ? c = e : d(w("PushbackReader.unread", a));
  return c.call(k, a, b)
}
function Yi(a, b, c) {
  this.V = a;
  this.Cb = b;
  this.La = c
}
Yi.prototype.Ab = function() {
  if(Gc(P(this.La))) {
    var a = P(this.Cb);
    vi.b(this.Cb, Jb);
    return this.V[a]
  }
  a = P(this.La);
  vi.b(this.La, H);
  return G(a)
};
Yi.prototype.Bb = function(a, b) {
  return vi.b(this.La, function(a) {
    return Q(b, a)
  })
};
function Zi(a) {
  var b = !/[^\t\n\r ]/.test(a);
  return u(b) ? b : "," === a
}
var $i = g, aj = g, bj = g;
function cj(a, b) {
  d(Error(x.b(T, b)))
}
function dj(a, b) {
  var c = k;
  t(b) && (c = L(Array.prototype.slice.call(arguments, 1), 0));
  return cj.call(this, 0, c)
}
dj.n = 1;
dj.l = function(a) {
  G(a);
  a = H(a);
  return cj(0, a)
};
dj.e = cj;
function ej(a, b) {
  for(var c = new ga(b), e = Wi(a);;) {
    var f;
    f = e == k;
    if(!f && (f = Zi(e), !f)) {
      f = e;
      var h = "#" !== f;
      f = h ? (h = "'" !== f) ? (h = ":" !== f) ? aj.a ? aj.a(f) : aj.call(k, f) : h : h : h
    }
    if(u(f)) {
      return Xi(a, e), c.toString()
    }
    c.append(e);
    e = Wi(a)
  }
}
var fj = fi("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?"), gj = fi("([-+]?[0-9]+)/([0-9]+)"), hj = fi("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?"), ij = fi("[:]?([^0-9/].*/)?([^0-9/][^/]*)");
function jj(a, b) {
  var c = a.exec(b);
  return c == k ? k : 1 === c.length ? c[0] : c
}
function kj(a, b) {
  var c = a.exec(b), e = c != k;
  return u(e ? c[0] === b : e) ? 1 === c.length ? c[0] : c : k
}
var lj = fi("[0-9A-Fa-f]{2}"), mj = fi("[0-9A-Fa-f]{4}");
function nj(a, b, c, e) {
  return u(ei(a, e)) ? e : dj.e(b, L(["Unexpected unicode escape \\", c, e], 0))
}
function oj(a) {
  return String.fromCharCode(parseInt(a, 16))
}
function pj(a) {
  var b = Wi(a), c = "t" === b ? "\t" : "r" === b ? "\r" : "n" === b ? "\n" : "\\" === b ? "\\" : '"' === b ? '"' : "b" === b ? "\b" : "f" === b ? "\f" : k;
  return u(c) ? c : "x" === b ? oj(nj(lj, a, b, (new ga(Wi(a), Wi(a))).toString())) : "u" === b ? oj(nj(mj, a, b, (new ga(Wi(a), Wi(a), Wi(a), Wi(a))).toString())) : !/[^0-9]/.test(b) ? String.fromCharCode(b) : dj.e(a, L(["Unexpected unicode escape \\", b], 0))
}
function qj(a, b) {
  for(var c = nb(Sf);;) {
    var e;
    a: {
      e = Zi;
      for(var f = b, h = Wi(f);;) {
        if(u(e.a ? e.a(h) : e.call(k, h))) {
          h = Wi(f)
        }else {
          e = h;
          break a
        }
      }
      e = g
    }
    u(e) || dj.e(b, L(["EOF while reading"], 0));
    if(a === e) {
      return pb(c)
    }
    f = aj.a ? aj.a(e) : aj.call(k, e);
    u(f) ? e = f.b ? f.b(b, e) : f.call(k, b, e) : (Xi(b, e), e = $i.o ? $i.o(b, j, k, j) : $i.call(k, b, j, k, j));
    c = e === b ? c : ob(c, e)
  }
}
function rj(a, b) {
  return dj.e(a, L(["Reader for ", b, " not implemented yet"], 0))
}
var sj = g;
function tj(a, b) {
  var c = Wi(a), e = bj.a ? bj.a(c) : bj.call(k, c);
  if(u(e)) {
    return e.b ? e.b(a, b) : e.call(k, a, b)
  }
  e = sj.b ? sj.b(a, c) : sj.call(k, a, c);
  return u(e) ? e : dj.e(a, L(["No dispatch macro for ", c], 0))
}
function uj(a, b) {
  return dj.e(a, L(["Unmached delimiter ", b], 0))
}
function vj(a) {
  return x.b(M, qj(")", a))
}
function wj(a) {
  for(;;) {
    var b = Wi(a);
    var c = "n" === b;
    b = c ? c : (c = "r" === b) ? c : b == k;
    if(u(b)) {
      return a
    }
  }
}
function xj(a) {
  return qj("]", a)
}
function yj(a) {
  var b = qj("}", a);
  var c = nc(b), e;
  if(e = "number" == typeof c) {
    if(e = !isNaN(c)) {
      e = (e = Infinity !== c) ? parseFloat(c) === parseInt(c, 10) : e
    }
  }
  e || d(Error([T("Argument must be an integer: "), T(c)].join("")));
  0 !== (c & 1) && dj.e(a, L(["Map literal must contain an even number of forms"], 0));
  return x.b(Eb, b)
}
function zj(a) {
  for(var b = new ga, c = Wi(a);;) {
    if(c == k) {
      return dj.e(a, L(["EOF while reading"], 0))
    }
    if("\\" === c) {
      b.append(pj(a))
    }else {
      if('"' === c) {
        return b.toString()
      }
      b.append(c)
    }
    c = Wi(a)
  }
}
function Aj(a, b) {
  var c = ej(a, b);
  if(u(-1 != c.indexOf("/"))) {
    c = zd.b(wd.c(c, 0, c.indexOf("/")), wd.c(c, c.indexOf("/") + 1, c.length))
  }else {
    var e = zd.a(c), c = "nil" === c ? k : "true" === c ? j : "false" === c ? l : e
  }
  return c
}
function Bj(a) {
  var b = ej(a, Wi(a)), c = kj(ij, b), b = c[0], e = c[1], c = c[2], f;
  f = (f = g !== e) ? ":/" === e.substring(e.length - 2, e.length) : f;
  u(f) || (f = (f = ":" === c[c.length - 1]) ? f : -1 !== b.indexOf("::", 1));
  u(f) ? a = dj.e(a, L(["Invalid token: ", b], 0)) : (a = e != k, a = u(a ? 0 < e.length : a) ? Dd.b(e.substring(0, e.indexOf("/")), c) : Dd.a(b));
  return a
}
function Cj(a) {
  return function(b) {
    return M.b(a, $i.o ? $i.o(b, j, k, j) : $i.call(k, b, j, k, j))
  }
}
function Dj(a) {
  var b;
  b = $i.o ? $i.o(a, j, k, j) : $i.call(k, a, j, k, j);
  if(Rc(b)) {
    b = rg(["\ufdd0:tag"], {"\ufdd0:tag":b})
  }else {
    if(Pc(b)) {
      b = rg(["\ufdd0:tag"], {"\ufdd0:tag":b})
    }else {
      if(Qc(b)) {
        a: {
          b = [b];
          for(var c = [j], e = nc(b), f = 0, h = nb(xg);;) {
            if(f < e) {
              var i = f + 1, h = qb(h, b[f], c[f]), f = i
            }else {
              b = pb(h);
              break a
            }
          }
          b = g
        }
      }
    }
  }
  Jc(b) || dj.e(a, L(["Metadata must be Symbol,Keyword,String or Map"], 0));
  (c = $i.o ? $i.o(a, j, k, j) : $i.call(k, a, j, k, j)) ? (e = c.h & 262144, e = u(e ? e : c.Xb) ? j : c.h ? l : v(Ua, c)) : e = v(Ua, c);
  return u(e) ? N(c, Dh.e(L([zc(c), b], 0))) : dj.e(a, L(["Metadata can only be applied to IWithMetas"], 0))
}
function Ej(a) {
  return Oh(qj("}", a))
}
function Fj(a) {
  return fi(zj(a))
}
function Gj(a) {
  $i.o ? $i.o(a, j, k, j) : $i.call(k, a, j, k, j);
  return a
}
aj = function(a) {
  return'"' === a ? zj : ":" === a ? Bj : ";" === a ? rj : "'" === a ? Cj("\ufdd1'quote") : "@" === a ? Cj("\ufdd1'deref") : "^" === a ? Dj : "`" === a ? rj : "~" === a ? rj : "(" === a ? vj : ")" === a ? uj : "[" === a ? xj : "]" === a ? uj : "{" === a ? yj : "}" === a ? uj : "\\" === a ? Wi : "%" === a ? rj : "#" === a ? tj : k
};
bj = function(a) {
  return"{" === a ? Ej : "<" === a ? function(a) {
    return dj.e(a, L(["Unreadable form"], 0))
  } : '"' === a ? Fj : "!" === a ? wj : "_" === a ? Gj : k
};
$i = function(a, b, c) {
  for(;;) {
    var e = Wi(a);
    if(e == k) {
      return u(b) ? dj.e(a, L(["EOF while reading"], 0)) : c
    }
    if(!Zi(e)) {
      if(";" === e) {
        a = wj.b ? wj.b(a, e) : wj.call(k, a)
      }else {
        var f = aj(e);
        if(u(f)) {
          f = f.b ? f.b(a, e) : f.call(k, a, e)
        }else {
          var f = a, h = !/[^0-9]/.test(e);
          if(h) {
            f = h
          }else {
            var h = g, h = (h = "+" === e) ? h : "-" === e, i = g;
            u(h) ? (h = Wi(f), Xi(f, h), i = !/[^0-9]/.test(h)) : i = h;
            f = i
          }
          if(f) {
            a: {
              f = a;
              e = new ga(e);
              for(h = Wi(f);;) {
                i = h == k;
                i || (i = (i = Zi(h)) ? i : aj.a ? aj.a(h) : aj.call(k, h));
                if(u(i)) {
                  Xi(f, h);
                  e = e.toString();
                  if(u(kj(fj, e))) {
                    var i = jj(fj, e), h = i[2], p = h == k;
                    ia(p ? p : 1 > h.length) ? h = 0 : (h = "-" === i[1] ? -1 : 1, p = u(i[3]) ? [i[3], 10] : u(i[4]) ? [i[4], 16] : u(i[5]) ? [i[5], 8] : u(i[7]) ? [i[7], parseInt(i[7])] : [k, k], i = p[0], p = p[1], h = i == k ? k : h * parseInt(i, p))
                  }else {
                    u(kj(gj, e)) ? (h = jj(gj, e), h = parseInt(h[1]) / parseInt(h[2])) : h = u(kj(hj, e)) ? parseFloat(e) : k
                  }
                  f = u(h) ? h : dj.e(f, L(["Invalid number format [", e, "]"], 0));
                  break a
                }
                e.append(h);
                h = Wi(f)
              }
              f = g
            }
          }else {
            f = Aj(a, e)
          }
        }
        if(f !== a) {
          return f
        }
      }
    }
  }
};
function Hj(a) {
  var b = 0 === (a % 4 + 4) % 4;
  return u(b) ? (b = ia(0 === (a % 100 + 100) % 100), u(b) ? b : 0 === (a % 400 + 400) % 400) : b
}
var Ij, Jj = W([k, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]), Kj = W([k, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
Ij = function(a, b) {
  return D.c(u(b) ? Kj : Jj, a, k)
};
var Lj, Mj = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function Nj(a, b, c, e) {
  var f = a <= b;
  u(f ? b <= c : f) || d(Error([T("Assert failed: "), T([T(e), T(" Failed:  "), T(a), T("<="), T(b), T("<="), T(c)].join("")), T("\n"), T(R.e(L([N(M("\ufdd1'<=", "\ufdd1'low", "\ufdd1'n", "\ufdd1'high"), Eb("\ufdd0:line", 474, "\ufdd0:column", 25))], 0)))].join("")));
  return b
}
Lj = function(a) {
  var b = yd.b(bd, gf(ei(Mj, a)));
  if(u(b)) {
    var c = S.c(b, 0, k);
    S.c(c, 0, k);
    var a = S.c(c, 1, k), e = S.c(c, 2, k), f = S.c(c, 3, k), h = S.c(c, 4, k), i = S.c(c, 5, k), p = S.c(c, 6, k), c = S.c(c, 7, k), s = S.c(b, 1, k);
    S.c(s, 0, k);
    S.c(s, 1, k);
    S.c(s, 2, k);
    s = function(a) {
      t(a) && L(Array.prototype.slice.call(arguments, 0), 0);
      return k
    };
    s.n = 0;
    s.l = function(a) {
      F(a);
      return k
    };
    s.e = n(k);
    var A = yd.b(function(a) {
      return yd.b(function(a) {
        return parseInt(a, 10)
      }, a)
    }, yd.c(function(a, b) {
      return Af(b, W([0]), a)
    }, W([s, function(a) {
      return yb.b(a, "-") ? "-1" : "1"
    }]), b)), y = S.c(A, 0, k);
    S.c(y, 0, k);
    var b = S.c(y, 1, k), s = S.c(y, 2, k), C = S.c(y, 3, k), I = S.c(y, 4, k), O = S.c(y, 5, k), X = S.c(y, 6, k), y = S.c(y, 7, k), V = S.c(A, 1, k), A = S.c(V, 0, k), ma = S.c(V, 1, k), V = S.c(V, 2, k);
    return W([ia(a) ? 1970 : b, ia(e) ? 1 : Nj(1, s, 12, "timestamp month field must be in range 1..12"), ia(f) ? 1 : Nj(1, C, Ij.b ? Ij.b(s, Hj(b)) : Ij.call(k, s, Hj(b)), "timestamp day field must be in range 1..last day in month"), ia(h) ? 0 : Nj(0, I, 23, "timestamp hour field must be in range 0..23"), ia(i) ? 0 : Nj(0, O, 59, "timestamp minute field must be in range 0..59"), ia(p) ? 0 : Nj(0, X, yb.b(O, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), ia(c) ? 0 : Nj(0, y, 999, 
    "timestamp millisecond field must be in range 0..999"), A * (60 * ma + V)])
  }
  return k
};
var Oj = Fg.a(rg(["inst", "uuid", "queue"], {inst:function(a) {
  var b;
  if(Pc(a)) {
    if(b = Lj.a ? Lj.a(a) : Lj.call(k, a), u(b)) {
      var a = S.c(b, 0, k), c = S.c(b, 1, k), e = S.c(b, 2, k), f = S.c(b, 3, k), h = S.c(b, 4, k), i = S.c(b, 5, k), p = S.c(b, 6, k);
      b = S.c(b, 7, k);
      b = new Date(Date.UTC(a, c - 1, e, f, h, i, p) - 6E4 * b)
    }else {
      b = dj.e(k, L([[T("Unrecognized date/time syntax: "), T(a)].join("")], 0))
    }
  }else {
    b = dj.e(k, L(["Instance literal expects a string for its timestamp."], 0))
  }
  return b
}, uuid:function(a) {
  return Pc(a) ? new Ii(a) : dj.e(k, L(["UUID literal expects a string as its representation."], 0))
}, queue:function(a) {
  return Kc(a) ? zf(eg, a) : dj.e(k, L(["Queue literal expects a vector for its elements."], 0))
}})), Pj = Fg.a(k), sj = function(a, b) {
  var c = Aj(a, b), e = D.c(P(Oj), "" + T(c), k), f = P(Pj);
  return u(e) ? e.a ? e.a($i(a, j, k, l)) : e.call(k, $i(a, j, k, l)) : u(f) ? f.b ? f.b(c, $i(a, j, k, l)) : f.call(k, c, $i(a, j, k, l)) : dj.e(a, L(["Could not find tag parser for ", "" + T(c), " in ", R.e(L([Bh(P(Oj))], 0))], 0))
};
// Input 16
function Qj(a) {
  if(Pc(a)) {
    return a
  }
  var b = "function" == r(a);
  return(b ? b : a ? u(u(k) ? k : a.sb) || (a.Yb ? 0 : v(oa, a)) : v(oa, a)) ? (b = a.prototype.Nb, u(b) ? [T("[crateGroup="), T(b), T("]")].join("") : a) : Qc(a) ? Ld(a) : a
}
var Rj, Sj = k;
function Tj(a) {
  return jQuery(Qj(a))
}
function Uj(a, b) {
  return jQuery(Qj(a), b)
}
Sj = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Tj.call(this, a);
    case 2:
      return Uj.call(this, a, b)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Sj.a = Tj;
Sj.b = Uj;
Rj = Sj;
var Vj = k, Vj = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return D.b(this, b);
    case 3:
      return D.c(this, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
q = jQuery.prototype;
q.call = Vj;
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.xb = j;
q.la = function(a, b) {
  return Lb.b(a, b)
};
q.ma = function(a, b, c) {
  return Lb.c(a, b, c)
};
q.J = function(a, b) {
  var c = a.slice(b, b + 1);
  return u(c) ? c : k
};
q.v = function(a, b, c) {
  return z.c(a, b, c)
};
q.Ib = j;
q.Xa = j;
q.T = function(a, b) {
  return b < nc(a) ? a.slice(b, b + 1) : k
};
q.N = function(a, b, c) {
  return b < nc(a) ? a.slice(b, b + 1) : g === c ? k : c
};
q.Eb = j;
q.z = function(a) {
  return a.length
};
q.Qa = j;
q.Q = function(a) {
  return a.get(0)
};
q.O = function(a) {
  return 1 < nc(a) ? a.slice(1) : M.r()
};
q.A = function(a) {
  return u(a.get(0)) ? a : k
};
var Wj, Xj = k;
function Yj(a, b) {
  return a.attr(Di(b))
}
function Zj(a, b, c) {
  return a.attr(Ld(b), c)
}
Xj = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Yj.call(this, a, b);
    case 3:
      return Zj.call(this, a, b, c)
  }
  d(Error("Invalid arity: " + arguments.length))
};
Xj.b = Yj;
Xj.c = Zj;
Wj = Xj;
function $j(a) {
  a = "" + T(a);
  a = new Yi(a, Fg.a(0), Fg.a(k));
  return $i(a, j, k, l)
}
jQuery.ajaxSetup(Di(rg(["\ufdd0:accepts", "\ufdd0:contents", "\ufdd0:converters"], {"\ufdd0:accepts":rg(["\ufdd0:edn", "\ufdd0:clojure"], {"\ufdd0:edn":"application/edn, text/edn", "\ufdd0:clojure":"application/clojure, text/clojure"}), "\ufdd0:contents":rg(["clojure"], {clojure:/edn|clojure/}), "\ufdd0:converters":rg(["text edn", "text clojure"], {"text edn":$j, "text clojure":$j})})));
// Input 17
function ak(a, b) {
  var c = S.c(a, 0, k), e = S.c(a, 1, k), f = S.c(b, 0, k), h = S.c(b, 1, k), i = 0 <= f;
  return i && (i = 0 <= h) ? (c = f < c) ? h < e : c : i
}
var bk = W([Qi, Ri, Ui, Si, Ti]), ck = W("\ufdd0:red \ufdd0:green \ufdd0:blue \ufdd0:yellow \ufdd0:purple \ufdd0:orange".split(" "));
Oh(yd.b(function(a) {
  return Uf.e(L([a, 0], 0))
}, Rh.a(7)));
function dk(a) {
  var b = S.c(a, 0, k), c = S.c(a, 1, k);
  return Oh(function f(a) {
    return new U(k, l, function() {
      for(var b = a;;) {
        var p = F(b);
        if(p) {
          var s = p, A = G(s);
          if(p = F(function(a, b) {
            return function O(a) {
              return new U(k, l, function() {
                for(var c = a;;) {
                  var f = F(c);
                  if(f) {
                    f = G(f);
                    if(0.5 > gd.r()) {
                      return Q(W([b, f]), O(H(c)))
                    }
                    c = H(c)
                  }else {
                    return k
                  }
                }
              }, k)
            }
          }(b, A, s, p)(Rh.a(c)))) {
            return oe.b(p, f(H(b)))
          }
          b = H(b)
        }else {
          return k
        }
      }
    }, k)
  }(Rh.a(b)))
}
function ek(a, b, c) {
  a.fillStyle = Ld("#000000");
  a.globalAlpha = 0.5;
  var e = rg(["\ufdd0:x", "\ufdd0:y", "\ufdd0:w", "\ufdd0:h"], {"\ufdd0:x":0, "\ufdd0:y":0, "\ufdd0:w":800, "\ufdd0:h":600}), f = Oc(e) ? x.b(Eb, e) : e, e = D.c(f, "\ufdd0:h", k), h = D.c(f, "\ufdd0:w", k), i = D.c(f, "\ufdd0:y", k), f = D.c(f, "\ufdd0:x", k);
  a.beginPath();
  a.rect(f, i, h, e);
  a.closePath();
  a.fill();
  a.fillStyle = Ld(b);
  a.globalAlpha = 1;
  a.beginPath();
  for(b = F(c);;) {
    if(b) {
      e = G(b), c = a, h = e, e = S.c(h, 0, k), h = S.c(h, 1, k), e *= 8, h *= 8, c.moveTo(e, h), Vi(Vi(Vi(c, e, h + 7), e + 7, h + 7), e + 7, h), b = K(b)
    }else {
      break
    }
  }
  a.fill();
  a.closePath();
  return a
}
Rj.a(document).ready(function() {
  var a = Rj.a("\ufdd0:canvas#world"), b;
  b = a.get(0).getContext(Ld("2d"));
  var c, e = G(Rj.a("\ufdd0:div#wrapper"));
  c = W([e.offsetWidth, e.offsetHeight]);
  e = S.c(c, 0, k);
  c = S.c(c, 1, k);
  var f = W([80, 60]), h = S.b(ck, ld(nc(ck))), i = Re.b(ak, f), p = Re.b(S.b(bk, ld(nc(bk))), i), s = Fg.a(dk(f));
  Wj.c(Wj.c(a, "\ufdd0:width", e), "\ufdd0:height", c);
  a = function y() {
    Ji.a ? Ji.a(y) : Ji.call(k, y);
    var a = vi.b(s, p);
    return ek(b, h, a)
  };
  ek(b, h, P(s));
  return a.r ? a.r() : a.call(k)
});
