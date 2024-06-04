;/*FB_PKG_DELIM*/

__d("bs_caml",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){if(a<b)return-1;else if(a===b)return 0;else return 1}function b(a,b){if(a)if(b)return 0;else return 1;else if(b)return-1;else return 0}function c(a,b){if(a===b)return 0;else if(a<b)return-1;else if(a>b||a===a)return 1;else if(b===b)return-1;else return 0}function d(a,b){if(a===b)return 0;else if(a<b)return-1;else return 1}function e(a,b){if(a)return b;else return a}function g(a,b){if(a<b)return a;else return b}function h(a,b){if(a<b)return a;else return b}function i(a,b){if(a<b)return a;else return b}function j(a,b){if(a<b)return a;else return b}function k(a,b){if(a)return a;else return b}function l(a,b){if(a>b)return a;else return b}function m(a,b){if(a>b)return a;else return b}function n(a,b){if(a>b)return a;else return b}function o(a,b){if(a>b)return a;else return b}function p(a,b){if(a[1]===b[1])return a[0]===b[0];else return!1}function q(a,b){var c=b[0],d=a[0];if(d>c)return!0;else if(d<c)return!1;else return a[1]>=b[1]}function r(a,b){return!p(a,b)}function s(a,b){return!q(a,b)}function t(a,b){if(a[0]>b[0])return!0;else if(a[0]<b[0])return!1;else return a[1]>b[1]}function u(a,b){return!t(a,b)}function v(a,b){if(q(a,b))return b;else return a}function w(a,b){if(t(a,b))return a;else return b}f.caml_int_compare=a;f.caml_bool_compare=b;f.caml_float_compare=c;f.caml_string_compare=d;f.caml_bool_min=e;f.caml_int_min=g;f.caml_float_min=h;f.caml_string_min=i;f.caml_int32_min=j;f.caml_bool_max=k;f.caml_int_max=l;f.caml_float_max=m;f.caml_string_max=n;f.caml_int32_max=o;f.i64_eq=p;f.i64_neq=r;f.i64_lt=s;f.i64_gt=t;f.i64_le=u;f.i64_ge=q;f.i64_min=v;f.i64_max=w}),null);
__d("bs_caml_int64",["bs_caml"],(function(a,b,c,d,e,f){"use strict";var g;function a(a,b){return[b,a>>>0]}var h=[-2147483648,0],i=[2147483647,4294967295],j=[0,1],k=[0,0],l=[-1,4294967295];function m(a){return(a&-2147483648)!==0}function n(a){return(a&-2147483648)===0}function c(a){var b=a[1];a=a[0];b=b+1|0;return[a+(b===0?1:0)|0,b>>>0]}function o(a){var b=(a[1]^-1)+1|0;return[(a[0]^-1)+(b===0?1:0)|0,b>>>0]}function p(a,b,c){var d=a[1],e=d+b|0;d=m(d)&&(m(b)||n(e))||m(b)&&n(e)?1:0;return[a[0]+c+d|0,e>>>0]}function q(a,b){return p(a,b[1],b[0])}function d(a,c){if(c!==null)return(g||(g=b("bs_caml"))).i64_eq(a,c);else return!1}function e(a,c){if(c!==void 0)return(g||(g=b("bs_caml"))).i64_eq(a,c);else return!1}function r(a,c){if(c==null)return!1;else return(g||(g=b("bs_caml"))).i64_eq(a,c)}function s(a,b,c){b=(b^-1)+1>>>0;c=(c^-1)+(b===0?1:0)|0;return p(a,b,c)}function t(a,b){return s(a,b[1],b[0])}function u(a,b){if(b===0)return a;var c=a[1];if(b>=32)return[c<<(b-32|0),0];else return[c>>>(32-b|0)|a[0]<<b,c<<b>>>0]}function v(a,b){if(b===0)return a;var c=a[0],d=b-32|0;if(d===0)return[0,c>>>0];else if(d>0)return[0,c>>>d];else return[c>>>b,(c<<(-d|0)|a[1]>>>b)>>>0]}function w(a,b){if(b===0)return a;var c=a[0];if(b<32)return[c>>b,(c<<(32-b|0)|a[1]>>>b)>>>0];else return[c>=0?0:-1,c>>(b-32|0)>>>0]}function x(a){if(a[0]!==0)return!1;else return a[1]===0}function y(a,b){while(!0){var c=b,d=a,e,f=d[0],g=0,i=0,j;if(f!==0)j=4;else{if(d[1]===0)return k;j=4}if(j===4)if(c[0]!==0)i=3;else{if(c[1]===0)return k;i=3}i===3&&(f!==-2147483648||d[1]!==0?g=2:e=c[1]);if(g===2){j=c[0];i=d[1];g=0;j!==-2147483648||c[1]!==0?g=3:e=i;if(g===3){g=c[1];if(f<0){if(j>=0)return o(y(o(d),c));b=o(c);a=o(d);continue}if(j<0)return o(y(d,o(c)));d=f>>>16;c=f&65535;f=i>>>16;i=i&65535;var l=j>>>16;j=j&65535;var m=g>>>16;g=g&65535;var n,p,q,r=i*g;q=(r>>>16)+f*g;p=q>>>16;q=(q&65535)+i*m;p=p+(q>>>16)+c*g;n=p>>>16;p=(p&65535)+f*m;n=n+(p>>>16);p=(p&65535)+i*j;n=n+(p>>>16);p=p&65535;n=n+(d*g+c*m+f*j+i*l)&65535;return[p|n<<16,(r&65535|(q&65535)<<16)>>>0]}}if((e&1)===0)return k;else return h}}function z(a,b){return[a[0]^b[0],(a[1]^b[1])>>>0]}function A(a,b){return[a[0]|b[0],(a[1]|b[1])>>>0]}function B(a,b){return[a[0]&b[0],(a[1]&b[1])>>>0]}function C(a){return a[0]*4294967296+a[1]}function D(a){if(isNaN(a)||!isFinite(a))return k;if(a<=-9223372036854776e3)return h;if(a+1>=9223372036854776e3)return i;if(a<0)return o(D(-a));var b=a/4294967296|0;a=a%4294967296|0;return[b,a>>>0]}function E(a){var b=a[0],c=b>>21;if(c===0)return!0;else if(c===-1)return!(a[1]===0&&b===-2097152);else return!1}function F(a){if(E(a))return String(C(a));if(a[0]<0)if((g||(g=b("bs_caml"))).i64_eq(a,h))return"-9223372036854775808";else return"-"+F(o(a));var c=D(Math.floor(C(a)/10)),d=c[1],e=c[0];a=s(s(a,d<<3,d>>>29|e<<3),d<<1,d>>>31|e<<1);d=a[1];e=a[0];if(d===0&&e===0)return F(c)+"0";if(e<0){a=(d^-1)+1>>>0;e=Math.ceil(a/10);a=10*e-a;return F(s(c,e|0,0))+String(a|0)}e=Math.floor(d/10);a=d-10*e;return F(p(c,e|0,0))+String(a|0)}function G(a,c){while(!0){var d=c,e=a,f=e[0],i=0,m;if(d[0]!==0||d[1]!==0)m=2;else throw{RE_EXN_ID:"Division_by_zero",Error:new Error()};if(m===2)if(f!==-2147483648)if(f!==0)i=1;else{if(e[1]===0)return k;i=1}else if(e[1]!==0)i=1;else{if((g||(g=b("bs_caml"))).i64_eq(d,j)||(g||(g=b("bs_caml"))).i64_eq(d,l))return e;if((g||(g=b("bs_caml"))).i64_eq(d,h))return j;m=w(e,1);m=u(G(m,d),1);var n;if(m[0]!==0)n=3;else{if(m[1]===0)if(d[0]<0)return j;else return o(j);n=3}if(n===3){n=t(e,y(d,m));return q(m,G(n,d))}}if(i===1){m=d[0];if(m!==-2147483648)n=2;else{if(d[1]===0)return k;n=2}if(n===2){if(f<0){if(m>=0)return o(G(o(e),d));c=o(d);a=o(e);continue}if(m<0)return o(G(e,o(d)));i=k;n=e;while((g||(g=b("bs_caml"))).i64_ge(n,d)){f=Math.floor(C(n)/C(d));m=1>f?1:f;e=Math.ceil(Math.log(m)/Math.LN2);f=e<=48?1:Math.pow(2,e-48);e=D(m);var p=y(e,d);while(p[0]<0||(g||(g=b("bs_caml"))).i64_gt(p,n))m=m-f,e=D(m),p=y(e,d);x(e)&&(e=j);i=q(i,e);n=t(n,p)}return i}}}}function H(a,b){return t(a,y(G(a,b),b))}function I(a,b){var c=G(a,b);return[c,t(a,y(c,b))]}function J(a,b){var c=b[0],d=a[0];d=d<c?-1:d===c?0:1;if(d!==0)return d;c=b[1];d=a[1];if(d<c)return-1;else if(d===c)return 0;else return 1}function K(a){return[a<0?-1:0,a>>>0]}function L(a){return a[1]|0}function M(a){var b=a[1];a=a[0];var c=function(a){return(a>>>0).toString(16)};if(a===0&&b===0)return"0";if(b===0)return c(a)+"00000000";if(a===0)return c(b);b=c(b);var d=8-b.length|0;if(d<=0)return c(a)+b;else return c(a)+("0".repeat(d)+b)}function N(a){return[2147483647&a[0],a[1]]}function O(a){return function(a,b){return new Float64Array(new Int32Array([a,b]).buffer)[0]}(a[1],a[0])}function P(a){a=function(a){return new Int32Array(new Float64Array([a]).buffer)}(a);return[a[1],a[0]>>>0]}f.mk=a;f.succ=c;f.min_int=h;f.max_int=i;f.one=j;f.zero=k;f.neg_one=l;f.of_int32=K;f.to_int32=L;f.add=q;f.neg=o;f.sub=t;f.lsl_=u;f.lsr_=v;f.asr_=w;f.is_zero=x;f.mul=y;f.xor=z;f.or_=A;f.and_=B;f.equal_null=d;f.equal_undefined=e;f.equal_nullable=r;f.to_float=C;f.of_float=D;f.div=G;f.mod_=H;f.compare=J;f.float_of_bits=O;f.bits_of_float=P;f.div_mod=I;f.to_hex=M;f.discard_sign=N;f.to_string=F}),null);
__d("bs_caml_format",["bs_caml","bs_caml_int64"],(function(a,b,c,d,e,f){"use strict";var g,h;function i(a){if(a>=65)if(a>=97)if(a>=123)return-1;else return a-87|0;else if(a>=91)return-1;else return a-55|0;else if(a>57||a<48)return-1;else return a-48|0}function j(a){switch(a){case 0:return 8;case 1:return 16;case 2:return 10;case 3:return 2}}function k(a){var b=1,c=2,d=0,e=a.charCodeAt(d);switch(e){case 43:d=d+1|0;break;case 44:break;case 45:b=-1;d=d+1|0;break;default:}if(a[d]==="0"){e=a.charCodeAt(d+1|0);if(e>=89)if(e>=111){if(e<121)switch(e){case 111:c=0;d=d+2|0;break;case 117:d=d+2|0;break;case 112:case 113:case 114:case 115:case 116:case 118:case 119:break;case 120:c=1;d=d+2|0;break}}else e===98&&(c=3,d=d+2|0);else if(e!==66){if(e>=79)switch(e){case 79:c=0;d=d+2|0;break;case 85:d=d+2|0;break;case 80:case 81:case 82:case 83:case 84:case 86:case 87:break;case 88:c=1;d=d+2|0;break}}else c=3,d=d+2|0}return[d,b,c]}function a(a){var b=k(a),c=b[0],d=j(b[2]),e=4294967295,f=a.length,g=c<f?a.charCodeAt(c):0;g=i(g);if(g<0||g>=d)throw{RE_EXN_ID:"Failure",_1:"int_of_string",Error:new Error()};var h=function(b,c){while(!0){var g=c,h=b;if(g===f)return h;var j=a.charCodeAt(g);if(j===95){c=g+1|0;continue}j=i(j);if(j<0||j>=d)throw{RE_EXN_ID:"Failure",_1:"int_of_string",Error:new Error()};h=d*h+j;if(h>e)throw{RE_EXN_ID:"Failure",_1:"int_of_string",Error:new Error()};c=g+1|0;b=h;continue}};b=b[1]*h(g,c+1|0);h=b|0;if(d===10&&b!==h)throw{RE_EXN_ID:"Failure",_1:"int_of_string",Error:new Error()};return h}function c(a){var c=k(a),d=c[2],e=c[0],f=(g||(g=b("bs_caml_int64"))).of_int32(j(d));c=g.of_int32(c[1]);var l;switch(d){case 0:l=[536870911,4294967295];break;case 1:l=[268435455,4294967295];break;case 2:l=[429496729,2576980377];break;case 3:l=(g||(g=b("bs_caml_int64"))).max_int;break}var m=a.length;d=e<m?a.charCodeAt(e):0;d=g.of_int32(i(d));if((h||(h=b("bs_caml"))).i64_lt(d,(g||(g=b("bs_caml_int64"))).zero)||(h||(h=b("bs_caml"))).i64_ge(d,f))throw{RE_EXN_ID:"Failure",_1:"int64_of_string",Error:new Error()};var n=function(c,d){while(!0){var e=d,j=c;if(e===m)return j;var k=a.charCodeAt(e);if(k===95){d=e+1|0;continue}k=(g||(g=b("bs_caml_int64"))).of_int32(i(k));if((h||(h=b("bs_caml"))).i64_lt(k,(g||(g=b("bs_caml_int64"))).zero)||(h||(h=b("bs_caml"))).i64_ge(k,f)||(h||(h=b("bs_caml"))).i64_gt(j,l))throw{RE_EXN_ID:"Failure",_1:"int64_of_string",Error:new Error()};j=g.add(g.mul(f,j),k);d=e+1|0;c=j;continue}};c=g.mul(c,n(d,e+1|0));n=g.or_(c,g.zero);if((h||(h=b("bs_caml"))).i64_eq(f,[0,10])&&(h||(h=b("bs_caml"))).i64_neq(c,n))throw{RE_EXN_ID:"Failure",_1:"int64_of_string",Error:new Error()};return n}function l(a){switch(a){case 0:return 8;case 1:return 16;case 2:return 10}}function m(a){if(a>=65&&a<=90||a>=192&&a<=214||a>=216&&a<=222)return a+32|0;else return a}function n(a){var b=a.length;if(b>31)throw{RE_EXN_ID:"Invalid_argument",_1:"format_int: format too long",Error:new Error()};var c={justify:"+",signstyle:"-",filter:" ",alternate:!1,base:2,signedconv:!1,width:0,uppercase:!1,sign:1,prec:-1,conv:"f"},d=0;while(!0){var e=d;if(e>=b)return c;var f=a.charCodeAt(e),g=0;if(f>=69)if(f>=88)if(f>=121)g=1;else switch(f){case 88:c.base=1;c.uppercase=!0;d=e+1|0;continue;case 101:case 102:case 103:g=5;break;case 100:case 105:g=4;break;case 111:c.base=0;d=e+1|0;continue;case 117:c.base=2;d=e+1|0;continue;case 89:case 90:case 91:case 92:case 93:case 94:case 95:case 96:case 97:case 98:case 99:case 104:case 106:case 107:case 108:case 109:case 110:case 112:case 113:case 114:case 115:case 116:case 118:case 119:g=1;break;case 120:c.base=1;d=e+1|0;continue}else if(f>=72)g=1;else{c.signedconv=!0;c.uppercase=!0;c.conv=String.fromCharCode(m(f));d=e+1|0;continue}else switch(f){case 35:c.alternate=!0;d=e+1|0;continue;case 32:case 43:g=2;break;case 45:c.justify="-";d=e+1|0;continue;case 46:c.prec=0;var h=e+1|0;while(function(b){return function(){var c=a.charCodeAt(b)-48|0;return c>=0&&c<=9}}(h)())c.prec=(Math.imul(c.prec,10)+a.charCodeAt(h)|0)-48|0,h=h+1|0;d=h;continue;case 33:case 34:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 44:case 47:g=1;break;case 48:c.filter="0";d=e+1|0;continue;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:g=3;break;default:g=1}switch(g){case 1:d=e+1|0;continue;case 2:c.signstyle=String.fromCharCode(f);d=e+1|0;continue;case 3:c.width=0;h=e;while(function(b){return function(){var c=a.charCodeAt(b)-48|0;return c>=0&&c<=9}}(h)())c.width=(Math.imul(c.width,10)+a.charCodeAt(h)|0)-48|0,h=h+1|0;d=h;continue;case 4:c.signedconv=!0;c.base=2;d=e+1|0;continue;case 5:c.signedconv=!0;c.conv=String.fromCharCode(f);d=e+1|0;continue}}}function o(a,b){var c=a.justify,d=a.signstyle,e=a.filter,f=a.alternate,g=a.base,h=a.signedconv,i=a.width,j=a.uppercase;a=a.sign;var k=b.length;h&&(a<0||d!=="-")&&(k=k+1|0);f&&(g===0?k=k+1|0:g===1&&(k=k+2|0));var l="";if(c==="+"&&e===" ")for(var m=k;m<i;++m)l=l+e;h&&(a<0?l=l+"-":d!=="-"&&(l=l+d));f&&g===0&&(l=l+"0");f&&g===1&&(l=l+"0x");if(c==="+"&&e==="0")for(m=k;m<i;++m)l=l+e;l=j?l+b.toUpperCase():l+b;if(c==="-")for(h=k;h<i;++h)l=l+" ";return l}function d(a,b){if(a==="%d")return String(b);a=n(a);b=b<0?a.signedconv?(a.sign=-1,-b>>>0):b>>>0:b;b=b.toString(l(a.base));if(a.prec>=0){a.filter=" ";var c=a.prec-b.length|0;c>0&&(b="0".repeat(c)+b)}return o(a,b)}function p(a){if(!(h||(h=b("bs_caml"))).i64_lt(a,(g||(g=b("bs_caml_int64"))).zero))return(g||(g=b("bs_caml_int64"))).to_string(a);var c=[0,10];a=(g||(g=b("bs_caml_int64"))).discard_sign(a);a=g.div_mod(a,c);c=g.div_mod(g.add([0,8],a[1]),c);a=g.add(g.add([214748364,3435973836],a[0]),c[0]);return g.to_string(a)+"0123456789"[g.to_int32(c[1])]}function q(a){var c="",d=[0,8],e="01234567";if((h||(h=b("bs_caml"))).i64_lt(a,(g||(g=b("bs_caml_int64"))).zero)){var f=(g||(g=b("bs_caml_int64"))).discard_sign(a);f=g.div_mod(f,d);var i=g.add([268435456,0],f[0]);f=f[1];c=e[g.to_int32(f)]+c;while((h||(h=b("bs_caml"))).i64_neq(i,(g||(g=b("bs_caml_int64"))).zero)){var j=(g||(g=b("bs_caml_int64"))).div_mod(i,d);i=j[0];f=j[1];c=e[g.to_int32(f)]+c}}else{j=(g||(g=b("bs_caml_int64"))).div_mod(a,d);f=j[0];i=j[1];c=e[g.to_int32(i)]+c;while((h||(h=b("bs_caml"))).i64_neq(f,(g||(g=b("bs_caml_int64"))).zero)){a=(g||(g=b("bs_caml_int64"))).div_mod(f,d);f=a[0];i=a[1];c=e[g.to_int32(i)]+c}}return c}function e(a,c){if(a==="%d")return(g||(g=b("bs_caml_int64"))).to_string(c);a=n(a);c=a.signedconv&&(h||(h=b("bs_caml"))).i64_lt(c,(g||(g=b("bs_caml_int64"))).zero)?(a.sign=-1,(g||(g=b("bs_caml_int64"))).neg(c)):c;var d=a.base,e;switch(d){case 0:e=q(c);break;case 1:e=(g||(g=b("bs_caml_int64"))).to_hex(c);break;case 2:e=p(c);break}if(a.prec>=0){a.filter=" ";d=a.prec-e.length|0;c=d>0?"0".repeat(d)+e:e}else c=e;return o(a,c)}function r(a,b){a=n(a);var c=a.prec<0?6:a.prec,d=b<0?(a.sign=-1,-b):b;b="";if(isNaN(d))b="nan",a.filter=" ";else if(isFinite(d)){var e=a.conv;switch(e){case"e":b=d.toExponential(c);e=b.length;b[e-3|0]==="e"&&(b=b.slice(0,e-1|0)+("0"+b.slice(e-1|0)));break;case"f":b=d.toFixed(c);break;case"g":var f=c!==0?c:1;b=d.toExponential(f-1|0);e=b.indexOf("e");c=Number(b.slice(e+1|0))|0;if(c<-4||d>=1e21||d.toFixed().length>f){var g=e-1|0;while(b[g]==="0")g=g-1|0;b[g]==="."&&(g=g-1|0);b=b.slice(0,g+1|0)+b.slice(e);g=b.length;b[g-3|0]==="e"&&(b=b.slice(0,g-1|0)+("0"+b.slice(g-1|0)))}else{var h=f;if(c<0)h=h-(c+1|0)|0,b=d.toFixed(h);else while(function(){b=d.toFixed(h);return b.length>(f+1|0)}())h=h-1|0;if(h!==0){e=b.length-1|0;while(b[e]==="0")e=e-1|0;b[e]==="."&&(e=e-1|0);b=b.slice(0,e+1|0)}}break;default:}}else b="inf",a.filter=" ";return o(a,b)}var s=function(a,b,c){if(!isFinite(a))return isNaN(a)?"nan":a>0?"infinity":"-infinity";var d=a==0&&1/a==-Infinity?1:a>=0?0:1;d&&(a=-a);var e=0;if(!(a==0))if(a<1)while(a<1&&e>-1022)a*=2,e--;else while(a>=2)a/=2,e++;var f=e<0?"":"+",g="";if(d)g="-";else switch(c){case 43:g="+";break;case 32:g=" ";break;default:break}if(b>=0&&b<13){d=Math.pow(2,b*4);a=Math.round(a*d)/d}c=a.toString(16);if(b>=0){d=c.indexOf(".");if(d<0)c+="."+"0".repeat(b);else{a=d+1+b;c.length<a?c+="0".repeat(a-c.length):c=c.substr(0,a)}}return g+"0x"+c+"p"+f+e.toString(10)},t=function(a,b){var c=+a;if(a.length>0&&c===c)return c;a=a.replace(/_/g,"");c=+a;if(a.length>0&&c===c||/^[+-]?nan$/i.test(a))return c;var d=/^ *([+-]?)0x([0-9a-f]+)\.?([0-9a-f]*)p([+-]?[0-9]+)/i.exec(a);if(d){var e=d[3].replace(/0+$/,""),f=parseInt(d[1]+d[2]+e,16);d=(d[4]|0)-4*e.length;c=f*Math.pow(2,d);return c}if(/^\+?inf(inity)?$/i.test(a))return Infinity;if(/^-inf(inity)?$/i.test(a))return-Infinity;throw b};function u(a){return t(a,{RE_EXN_ID:"Failure",_1:"float_of_string"})}var v=d,w=d,x=a,y=a;f.caml_format_float=r;f.caml_hexstring_of_float=s;f.caml_format_int=d;f.caml_nativeint_format=v;f.caml_int32_format=w;f.caml_float_of_string=u;f.caml_int64_format=e;f.caml_int_of_string=a;f.caml_int32_of_string=x;f.caml_int64_of_string=c;f.caml_nativeint_of_string=y}),null);
__d("bs_caml_exceptions",[],(function(a,b,c,d,e,f){"use strict";var g={contents:0};function a(a){g.contents=g.contents+1|0;return a+("/"+g.contents)}function b(a){if(a==null)return!1;else return typeof a.RE_EXN_ID==="string"}function c(a){return a.RE_EXN_ID}f.id=g;f.create=a;f.caml_is_extension=b;f.caml_exn_slot_name=c}),null);
__d("bs_caml_option",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a.BS_PRIVATE_NESTED_SOME_NONE!==void 0}function g(a){if(a===void 0)return{BS_PRIVATE_NESTED_SOME_NONE:0};else if(a!==null&&a.BS_PRIVATE_NESTED_SOME_NONE!==void 0)return{BS_PRIVATE_NESTED_SOME_NONE:a.BS_PRIVATE_NESTED_SOME_NONE+1|0};else return a}function b(a){if(a==null)return;else return g(a)}function c(a){if(a===void 0)return;else return g(a)}function d(a){if(a===null)return;else return g(a)}function h(a){if(!(a!==null&&a.BS_PRIVATE_NESTED_SOME_NONE!==void 0))return a;a=a.BS_PRIVATE_NESTED_SOME_NONE;if(a===0)return;else return{BS_PRIVATE_NESTED_SOME_NONE:a-1|0}}function e(a){if(a===void 0)return;else return h(a)}function i(a){if(a!==void 0)return a.VAL;else return a}f.nullable_to_opt=b;f.undefined_to_opt=c;f.null_to_opt=d;f.valFromOption=h;f.some=g;f.isNested=a;f.option_get=e;f.option_unwrap=i}),null);
__d("bs_caml_js_exceptions",["bs_caml_exceptions","bs_caml_option"],(function(a,b,c,d,e,f){"use strict";var g=b("bs_caml_exceptions").create("Caml_js_exceptions.Error");function a(a){if(b("bs_caml_exceptions").caml_is_extension(a))return a;else return{RE_EXN_ID:g,_1:a}}function c(a){if(a.RE_EXN_ID===g)return b("bs_caml_option").some(a._1)}f.$$Error=g;f.internalToOCamlException=a;f.caml_as_js_exn=c}),null);
__d("bs_int64",["bs_caml","bs_caml_format","bs_caml_int64","bs_caml_js_exceptions"],(function(a,b,c,d,e,f){"use strict";var g,h;function a(a){return(g||(g=b("bs_caml_int64"))).sub(a,g.one)}function c(a){if((h||(h=b("bs_caml"))).i64_ge(a,(g||(g=b("bs_caml_int64"))).zero))return a;else return(g||(g=b("bs_caml_int64"))).neg(a)}function d(a){return(g||(g=b("bs_caml_int64"))).xor(a,g.neg_one)}function e(a){try{return b("bs_caml_format").caml_int64_of_string(a)}catch(c){a=b("bs_caml_js_exceptions").internalToOCamlException(c);if(a.RE_EXN_ID==="Failure")return;throw a}}var i=(g||(g=b("bs_caml_int64"))).compare;function j(a,c){return(g||(g=b("bs_caml_int64"))).compare(a,c)===0}var k=g.zero,l=g.one,m=g.neg_one,n=g.succ,o=g.max_int,p=g.min_int,q=g.to_string;f.zero=k;f.one=l;f.minus_one=m;f.succ=n;f.pred=a;f.abs=c;f.max_int=o;f.min_int=p;f.lognot=d;f.of_string_opt=e;f.to_string=q;f.compare=i;f.equal=j}),null);
__d("I64",["bs_caml","bs_caml_format","bs_caml_int64","bs_int64","nullthrows"],(function(a,b,c,d,e,f,g){"use strict";var h,i;function a(a){return function(){var b=a.apply(void 0,arguments);b._tag="i64";return b}}function b(a){return function(){var b=a.apply(void 0,arguments);b!=null&&(b._tag="i64");return b}}f=a((h||(h=c("bs_caml_int64"))).mk);var j=a(h.succ),k=a(function(){return(h||(h=c("bs_caml_int64"))).min_int})(),l=a(function(){return(h||(h=c("bs_caml_int64"))).max_int})(),m=a(function(){return(h||(h=c("bs_caml_int64"))).one})(),n=a(function(){return(h||(h=c("bs_caml_int64"))).zero})(),o=a(function(){return(h||(h=c("bs_caml_int64"))).neg_one})(),p=a(h.of_int32),q=a(h.add),r=a(h.neg),s=a(h.sub),t=a(h.lsl_),u=a(h.lsr_),v=a(h.asr_),w=a(h.mul),x=a(h.xor),y=a(h.or_),z=a(h.and_),A=a(h.of_float),B=a(h.div),C=a(h.mod_),D=a(function(){return c("bs_int64").minus_one})(),E=a(c("bs_int64").abs),F=a(c("bs_int64").lognot);b=b(c("bs_int64").of_string_opt);var G,H;if(typeof BigInt==="function"){var I=BigInt(32),J=BigInt(4294967295);G=function(a){return BigInt.asIntN(64,(BigInt(a[0])<<I)+BigInt(a[1])).toString()};H=function(a){a=BigInt.asIntN(64,BigInt(a));a=[Number(a>>I),Number(a&J)];a._tag="i64";return a}}else G=(h||(h=c("bs_caml_int64"))).to_string,H=a(c("bs_caml_format").caml_int64_of_string);G=G;H=H;var K=a((i||(i=c("bs_caml"))).i64_max);a=a(i.i64_min);function L(a){if(Array.isArray(a)&&a.length===2){var b=a[0];a=a[1];if(typeof b==="number"&&Number.isInteger(b)&&typeof a==="number"&&Number.isInteger(a)){b=[b,a];b._tag="i64";return b}}return void 0}function d(a){return c("nullthrows")(L(a))}function e(a){return(a==null?void 0:a._tag)==="i64"}g.mk=f;g.succ=j;g.min_int=k;g.max_int=l;g.one=m;g.zero=n;g.neg_one=o;g.of_int32=p;g.to_int32=h.to_int32;g.add=q;g.neg=r;g.sub=s;g.lsl_=t;g.lsr_=u;g.asr_=v;g.is_zero=h.is_zero;g.mul=w;g.xor=x;g.or_=y;g.and_=z;g.to_float=h.to_float;g.of_float=A;g.div=B;g.mod_=C;g.compare=h.compare;g.minus_one=D;g.abs=E;g.lognot=F;g.of_string_opt=b;g.equal=c("bs_int64").equal;g.to_string=G;g.of_string=H;g.gt=i.i64_gt;g.ge=i.i64_ge;g.lt=i.i64_lt;g.le=i.i64_le;g.max=K;g.min=a;g.cast=L;g.castExn=d;g.isI64=e}),98);
__d("LSIntEnum",["I64"],(function(a,b,c,d,e,f,g){"use strict";var h,i=new Map();function a(a){var b=i.get(a);if(b!=null)return b;b=(h||(h=d("I64"))).of_float(a);i.set(a,b);return b}function b(a){return(h||(h=d("I64"))).to_float(a)}function c(a){return(h||(h=d("I64"))).to_float(a)}g.ofNumber=a;g.toNumber=b;g.unwrapIntEnum=c}),98);