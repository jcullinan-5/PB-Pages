var Xe=Object.defineProperty;var Qe=(r,e,n)=>e in r?Xe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var F=(r,e,n)=>(Qe(r,typeof e!="symbol"?e+"":e,n),n);import{d as Ze}from"../static/index-0073c4d1.js";import{g as xe,c as K}from"../static/commonjsHelpers-88401c09.js";import{_ as er,e as J,a as rr,b as nr,i as k,c as tr,d as Oe,f as Y,g as Se,h as ir,j as sr,k as ar,l as or,m as cr,n as lr,o as fr,p as ur,q as vr}from"../static/_arrayLikeKeys-4450ed75.js";import{p as dr}from"../static/picocolors.browser-c5d5d839.js";function S(r){if(typeof r!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(r))}function ce(r,e){for(var n="",t=0,i=-1,a=0,s,o=0;o<=r.length;++o){if(o<r.length)s=r.charCodeAt(o);else{if(s===47)break;s=47}if(s===47){if(!(i===o-1||a===1))if(i!==o-1&&a===2){if(n.length<2||t!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){var c=n.lastIndexOf("/");if(c!==n.length-1){c===-1?(n="",t=0):(n=n.slice(0,c),t=n.length-1-n.lastIndexOf("/")),i=o,a=0;continue}}else if(n.length===2||n.length===1){n="",t=0,i=o,a=0;continue}}e&&(n.length>0?n+="/..":n="..",t=2)}else n.length>0?n+="/"+r.slice(i+1,o):n=r.slice(i+1,o),t=o-i-1;i=o,a=0}else s===46&&a!==-1?++a:a=-1}return n}function gr(r,e){var n=e.dir||e.root,t=e.base||(e.name||"")+(e.ext||"");return n?n===e.root?n+t:n+r+t:t}var D={resolve:function(){for(var e="",n=!1,t,i=arguments.length-1;i>=-1&&!n;i--){var a;i>=0?a=arguments[i]:(t===void 0&&(t=Ze.process.cwd()),a=t),S(a),a.length!==0&&(e=a+"/"+e,n=a.charCodeAt(0)===47)}return e=ce(e,!n),n?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(S(e),e.length===0)return".";var n=e.charCodeAt(0)===47,t=e.charCodeAt(e.length-1)===47;return e=ce(e,!n),e.length===0&&!n&&(e="."),e.length>0&&t&&(e+="/"),n?"/"+e:e},isAbsolute:function(e){return S(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,n=0;n<arguments.length;++n){var t=arguments[n];S(t),t.length>0&&(e===void 0?e=t:e+="/"+t)}return e===void 0?".":D.normalize(e)},relative:function(e,n){if(S(e),S(n),e===n||(e=D.resolve(e),n=D.resolve(n),e===n))return"";for(var t=1;t<e.length&&e.charCodeAt(t)===47;++t);for(var i=e.length,a=i-t,s=1;s<n.length&&n.charCodeAt(s)===47;++s);for(var o=n.length,c=o-s,d=a<c?a:c,f=-1,v=0;v<=d;++v){if(v===d){if(c>d){if(n.charCodeAt(s+v)===47)return n.slice(s+v+1);if(v===0)return n.slice(s+v)}else a>d&&(e.charCodeAt(t+v)===47?f=v:v===0&&(f=0));break}var $=e.charCodeAt(t+v),E=n.charCodeAt(s+v);if($!==E)break;$===47&&(f=v)}var P="";for(v=t+f+1;v<=i;++v)(v===i||e.charCodeAt(v)===47)&&(P.length===0?P+="..":P+="/..");return P.length>0?P+n.slice(s+f):(s+=f,n.charCodeAt(s)===47&&++s,n.slice(s))},_makeLong:function(e){return e},dirname:function(e){if(S(e),e.length===0)return".";for(var n=e.charCodeAt(0),t=n===47,i=-1,a=!0,s=e.length-1;s>=1;--s)if(n=e.charCodeAt(s),n===47){if(!a){i=s;break}}else a=!1;return i===-1?t?"/":".":t&&i===1?"//":e.slice(0,i)},basename:function(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');S(e);var t=0,i=-1,a=!0,s;if(n!==void 0&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var o=n.length-1,c=-1;for(s=e.length-1;s>=0;--s){var d=e.charCodeAt(s);if(d===47){if(!a){t=s+1;break}}else c===-1&&(a=!1,c=s+1),o>=0&&(d===n.charCodeAt(o)?--o===-1&&(i=s):(o=-1,i=c))}return t===i?i=c:i===-1&&(i=e.length),e.slice(t,i)}else{for(s=e.length-1;s>=0;--s)if(e.charCodeAt(s)===47){if(!a){t=s+1;break}}else i===-1&&(a=!1,i=s+1);return i===-1?"":e.slice(t,i)}},extname:function(e){S(e);for(var n=-1,t=0,i=-1,a=!0,s=0,o=e.length-1;o>=0;--o){var c=e.charCodeAt(o);if(c===47){if(!a){t=o+1;break}continue}i===-1&&(a=!1,i=o+1),c===46?n===-1?n=o:s!==1&&(s=1):n!==-1&&(s=-1)}return n===-1||i===-1||s===0||s===1&&n===i-1&&n===t+1?"":e.slice(n,i)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return gr("/",e)},parse:function(e){S(e);var n={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return n;var t=e.charCodeAt(0),i=t===47,a;i?(n.root="/",a=1):a=0;for(var s=-1,o=0,c=-1,d=!0,f=e.length-1,v=0;f>=a;--f){if(t=e.charCodeAt(f),t===47){if(!d){o=f+1;break}continue}c===-1&&(d=!1,c=f+1),t===46?s===-1?s=f:v!==1&&(v=1):s!==-1&&(v=-1)}return s===-1||c===-1||v===0||v===1&&s===c-1&&s===o+1?c!==-1&&(o===0&&i?n.base=n.name=e.slice(1,c):n.base=n.name=e.slice(o,c)):(o===0&&i?(n.name=e.slice(1,s),n.base=e.slice(1,c)):(n.name=e.slice(o,s),n.base=e.slice(o,c)),n.ext=e.slice(s,c)),o>0?n.dir=e.slice(0,o-1):i&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};D.posix=D;var hr=D;const w=xe(hr);var pr=er,mr=function(){try{var r=pr(Object,"defineProperty");return r({},"",{}),r}catch{}}(),Re=mr,le=Re;function br(r,e,n){e=="__proto__"&&le?le(r,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):r[e]=n}var X=br,yr=X,wr=J;function _r(r,e,n){(n!==void 0&&!wr(r[e],n)||n===void 0&&!(e in r))&&yr(r,e,n)}var Fe=_r;function Ar(r){return function(e,n,t){for(var i=-1,a=Object(e),s=t(e),o=s.length;o--;){var c=s[r?o:++i];if(n(a[c],c,a)===!1)break}return e}}var $r=Ar,Pr=$r,Tr=Pr(),Cr=Tr,M={exports:{}};M.exports;(function(r,e){var n=rr,t=e&&!e.nodeType&&e,i=t&&!0&&r&&!r.nodeType&&r,a=i&&i.exports===t,s=a?n.Buffer:void 0,o=s?s.allocUnsafe:void 0;function c(d,f){if(f)return d.slice();var v=d.length,$=o?o(v):new d.constructor(v);return d.copy($),$}r.exports=c})(M,M.exports);var xr=M.exports,fe=nr;function Or(r){var e=new r.constructor(r.byteLength);return new fe(e).set(new fe(r)),e}var Sr=Or,Rr=Sr;function Fr(r,e){var n=e?Rr(r.buffer):r.buffer;return new r.constructor(n,r.byteOffset,r.length)}var Er=Fr;function Lr(r,e){var n=-1,t=r.length;for(e||(e=Array(t));++n<t;)e[n]=r[n];return e}var jr=Lr,Ir=k,ue=Object.create,Dr=function(){function r(){}return function(e){if(!Ir(e))return{};if(ue)return ue(e);r.prototype=e;var n=new r;return r.prototype=void 0,n}}(),Ur=Dr,Br=tr,kr=Br(Object.getPrototypeOf,Object),Ee=kr,Vr=Ur,Mr=Ee,Nr=Oe;function Hr(r){return typeof r.constructor=="function"&&!Nr(r)?Vr(Mr(r)):{}}var Gr=Hr,qr=Y,Kr=Se;function zr(r){return Kr(r)&&qr(r)}var Wr=zr,Jr=ir,Yr=Ee,Xr=Se,Qr="[object Object]",Zr=Function.prototype,en=Object.prototype,Le=Zr.toString,rn=en.hasOwnProperty,nn=Le.call(Object);function tn(r){if(!Xr(r)||Jr(r)!=Qr)return!1;var e=Yr(r);if(e===null)return!0;var n=rn.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&Le.call(n)==nn}var sn=tn;function an(r,e){if(!(e==="constructor"&&typeof r[e]=="function")&&e!="__proto__")return r[e]}var je=an,on=X,cn=J,ln=Object.prototype,fn=ln.hasOwnProperty;function un(r,e,n){var t=r[e];(!(fn.call(r,e)&&cn(t,n))||n===void 0&&!(e in r))&&on(r,e,n)}var vn=un,dn=vn,gn=X;function hn(r,e,n,t){var i=!n;n||(n={});for(var a=-1,s=e.length;++a<s;){var o=e[a],c=t?t(n[o],r[o],o,n,r):void 0;c===void 0&&(c=r[o]),i?gn(n,o,c):dn(n,o,c)}return n}var pn=hn;function mn(r){var e=[];if(r!=null)for(var n in Object(r))e.push(n);return e}var bn=mn,yn=k,wn=Oe,_n=bn,An=Object.prototype,$n=An.hasOwnProperty;function Pn(r){if(!yn(r))return _n(r);var e=wn(r),n=[];for(var t in r)t=="constructor"&&(e||!$n.call(r,t))||n.push(t);return n}var Tn=Pn,Cn=sr,xn=Tn,On=Y;function Sn(r){return On(r)?Cn(r,!0):xn(r)}var Ie=Sn,Rn=pn,Fn=Ie;function En(r){return Rn(r,Fn(r))}var Ln=En,ve=Fe,jn=xr,In=Er,Dn=jr,Un=Gr,de=ar,ge=or,Bn=Wr,kn=cr,Vn=lr,Mn=k,Nn=sn,Hn=fr,he=je,Gn=Ln;function qn(r,e,n,t,i,a,s){var o=he(r,n),c=he(e,n),d=s.get(c);if(d){ve(r,n,d);return}var f=a?a(o,c,n+"",r,e,s):void 0,v=f===void 0;if(v){var $=ge(c),E=!$&&kn(c),P=!$&&!E&&Hn(c);f=c,$||E||P?ge(o)?f=o:Bn(o)?f=Dn(o):E?(v=!1,f=jn(c,!0)):P?(v=!1,f=In(c,!0)):f=[]:Nn(c)||de(c)?(f=o,de(o)?f=Gn(o):(!Mn(o)||Vn(o))&&(f=Un(c))):v=!1}v&&(s.set(c,f),i(f,c,t,a,s),s.delete(c)),ve(r,n,f)}var Kn=qn,zn=ur,Wn=Fe,Jn=Cr,Yn=Kn,Xn=k,Qn=Ie,Zn=je;function De(r,e,n,t,i){r!==e&&Jn(e,function(a,s){if(i||(i=new zn),Xn(a))Yn(r,e,s,n,De,t,i);else{var o=t?t(Zn(r,s),a,s+"",r,e,i):void 0;o===void 0&&(o=a),Wn(r,s,o)}},Qn)}var et=De;function rt(r){return r}var Ue=rt;function nt(r,e,n){switch(n.length){case 0:return r.call(e);case 1:return r.call(e,n[0]);case 2:return r.call(e,n[0],n[1]);case 3:return r.call(e,n[0],n[1],n[2])}return r.apply(e,n)}var tt=nt,it=tt,pe=Math.max;function st(r,e,n){return e=pe(e===void 0?r.length-1:e,0),function(){for(var t=arguments,i=-1,a=pe(t.length-e,0),s=Array(a);++i<a;)s[i]=t[e+i];i=-1;for(var o=Array(e+1);++i<e;)o[i]=t[i];return o[e]=n(s),it(r,this,o)}}var at=st;function ot(r){return function(){return r}}var ct=ot,lt=ct,me=Re,ft=Ue,ut=me?function(r,e){return me(r,"toString",{configurable:!0,enumerable:!1,value:lt(e),writable:!0})}:ft,vt=ut,dt=800,gt=16,ht=Date.now;function pt(r){var e=0,n=0;return function(){var t=ht(),i=gt-(t-n);if(n=t,i>0){if(++e>=dt)return arguments[0]}else e=0;return r.apply(void 0,arguments)}}var mt=pt,bt=vt,yt=mt,wt=yt(bt),_t=wt,At=Ue,$t=at,Pt=_t;function Tt(r,e){return Pt($t(r,e,At),r+"")}var Ct=Tt,xt=J,Ot=Y,St=vr,Rt=k;function Ft(r,e,n){if(!Rt(n))return!1;var t=typeof e;return(t=="number"?Ot(n)&&St(e,n.length):t=="string"&&e in n)?xt(n[e],r):!1}var Et=Ft,Lt=Ct,jt=Et;function It(r){return Lt(function(e,n){var t=-1,i=n.length,a=i>1?n[i-1]:void 0,s=i>2?n[2]:void 0;for(a=r.length>3&&typeof a=="function"?(i--,a):void 0,s&&jt(n[0],n[1],s)&&(a=i<3?void 0:a,i=1),e=Object(e);++t<i;){var o=n[t];o&&r(e,o,t,a)}return e})}var Dt=It,Ut=et,Bt=Dt,kt=Bt(function(r,e,n){Ut(r,e,n)}),Vt=kt;const be=xe(Vt);class B{constructor(e){F(this,"path");F(this,"getRelativePath",e=>w.join(".",w.relative(this.path,e)));F(this,"getAbsolutePath",()=>w.resolve(this.path));this.path=e}}var N={exports:{}};/*! https://mths.be/punycode v1.4.1 by @mathias */N.exports;(function(r,e){(function(n){var t=e&&!e.nodeType&&e,i=r&&!r.nodeType&&r,a=typeof K=="object"&&K;(a.global===a||a.window===a||a.self===a)&&(n=a);var s,o=2147483647,c=36,d=1,f=26,v=38,$=700,E=72,P=128,Z="-",Ge=/^xn--/,qe=/[^\x20-\x7E]/,Ke=/[\x2E\u3002\uFF0E\uFF61]/g,ze={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},G=c-d,x=Math.floor,U=String.fromCharCode,V;function j(l){throw new RangeError(ze[l])}function ee(l,u){for(var g=l.length,h=[];g--;)h[g]=u(l[g]);return h}function re(l,u){var g=l.split("@"),h="";g.length>1&&(h=g[0]+"@",l=g[1]),l=l.replace(Ke,".");var p=l.split("."),y=ee(p,u).join(".");return h+y}function ne(l){for(var u=[],g=0,h=l.length,p,y;g<h;)p=l.charCodeAt(g++),p>=55296&&p<=56319&&g<h?(y=l.charCodeAt(g++),(y&64512)==56320?u.push(((p&1023)<<10)+(y&1023)+65536):(u.push(p),g--)):u.push(p);return u}function te(l){return ee(l,function(u){var g="";return u>65535&&(u-=65536,g+=U(u>>>10&1023|55296),u=56320|u&1023),g+=U(u),g}).join("")}function We(l){return l-48<10?l-22:l-65<26?l-65:l-97<26?l-97:c}function ie(l,u){return l+22+75*(l<26)-((u!=0)<<5)}function se(l,u,g){var h=0;for(l=g?x(l/$):l>>1,l+=x(l/u);l>G*f>>1;h+=c)l=x(l/G);return x(h+(G+1)*l/(l+v))}function ae(l){var u=[],g=l.length,h,p=0,y=P,m=E,_,T,O,R,b,A,C,L,I;for(_=l.lastIndexOf(Z),_<0&&(_=0),T=0;T<_;++T)l.charCodeAt(T)>=128&&j("not-basic"),u.push(l.charCodeAt(T));for(O=_>0?_+1:0;O<g;){for(R=p,b=1,A=c;O>=g&&j("invalid-input"),C=We(l.charCodeAt(O++)),(C>=c||C>x((o-p)/b))&&j("overflow"),p+=C*b,L=A<=m?d:A>=m+f?f:A-m,!(C<L);A+=c)I=c-L,b>x(o/I)&&j("overflow"),b*=I;h=u.length+1,m=se(p-R,h,R==0),x(p/h)>o-y&&j("overflow"),y+=x(p/h),p%=h,u.splice(p++,0,y)}return te(u)}function oe(l){var u,g,h,p,y,m,_,T,O,R,b,A=[],C,L,I,q;for(l=ne(l),C=l.length,u=P,g=0,y=E,m=0;m<C;++m)b=l[m],b<128&&A.push(U(b));for(h=p=A.length,p&&A.push(Z);h<C;){for(_=o,m=0;m<C;++m)b=l[m],b>=u&&b<_&&(_=b);for(L=h+1,_-u>x((o-g)/L)&&j("overflow"),g+=(_-u)*L,u=_,m=0;m<C;++m)if(b=l[m],b<u&&++g>o&&j("overflow"),b==u){for(T=g,O=c;R=O<=y?d:O>=y+f?f:O-y,!(T<R);O+=c)q=T-R,I=c-R,A.push(U(ie(R+q%I,0))),T=x(q/I);A.push(U(ie(T,0))),y=se(g,L,h==p),g=0,++h}++g,++u}return A.join("")}function Je(l){return re(l,function(u){return Ge.test(u)?ae(u.slice(4).toLowerCase()):u})}function Ye(l){return re(l,function(u){return qe.test(u)?"xn--"+oe(u):u})}if(s={version:"1.4.1",ucs2:{decode:ne,encode:te},decode:ae,encode:oe,toASCII:Ye,toUnicode:Je},t&&i)if(r.exports==t)i.exports=s;else for(V in s)s.hasOwnProperty(V)&&(t[V]=s[V]);else n.punycode=s})(K)})(N,N.exports);N.exports;function Mt(r,e){for(var n=0,t=r.length-1;t>=0;t--){var i=r[t];i==="."?r.splice(t,1):i===".."?(r.splice(t,1),n++):n&&(r.splice(t,1),n--)}if(e)for(;n--;n)r.unshift("..");return r}function Nt(){for(var r="",e=!1,n=arguments.length-1;n>=-1&&!e;n--){var t=n>=0?arguments[n]:"/";if(typeof t!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!t)continue;r=t+"/"+r,e=t.charAt(0)==="/"}return r=Mt(Ht(r.split("/"),function(i){return!!i}),!e).join("/"),(e?"/":"")+r||"."}function Ht(r,e){if(r.filter)return r.filter(e);for(var n=[],t=0;t<r.length;t++)e(r[t],t,r)&&n.push(r[t]);return n}var Be=function(r){function e(){var t=this||self;return delete r.prototype.__magic__,t}if(typeof globalThis=="object")return globalThis;if(this)return e();r.defineProperty(r.prototype,"__magic__",{configurable:!0,get:e});var n=__magic__;return n}(Object),Gt=Be.URL;Be.URLSearchParams;var qt=/%/g,Kt=/\\/g,zt=/\n/g,Wt=/\r/g,Jt=/\t/g,Yt=47;function Xt(r){return r.includes("%")&&(r=r.replace(qt,"%25")),r.includes("\\")&&(r=r.replace(Kt,"%5C")),r.includes(`
`)&&(r=r.replace(zt,"%0A")),r.includes("\r")&&(r=r.replace(Wt,"%0D")),r.includes("	")&&(r=r.replace(Jt,"%09")),r}var ke=function(e){var n=new Gt("file://"),t=Nt(e),i=e.charCodeAt(e.length-1);return i===Yt&&t[t.length-1]!=="/"&&(t+="/"),n.pathname=Xt(t),n};const Qt="modulepreload",Zt=function(r){return"/"+r},ye={},Q=function(e,n,t){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=Zt(a),a in ye)return;ye[a]=!0;const s=a.endsWith(".css"),o=s?'[rel="stylesheet"]':"";if(!!t)for(let f=i.length-1;f>=0;f--){const v=i[f];if(v.href===a&&(!s||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${o}`))return;const d=document.createElement("link");if(d.rel=s?"stylesheet":Qt,s||(d.as="script",d.crossOrigin=""),d.href=a,document.head.appendChild(d),s)return new Promise((f,v)=>{d.addEventListener("load",f),d.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e()).catch(a=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a})},Ve=async r=>await Q(()=>import(r),[]),ei=async(r,e)=>{var i;return e===""?r:((i=(await Ve(ke(e).toString())).default.build)==null?void 0:i.assetsDir)??r},ri=async(r,e)=>e===""?r:(await Ve(ke(e).toString())).default.publicDir||r,Me="assets",Ne="public",we={rootFolders:{source:"src",dist:"dist",sitesConfig:"sites-config",functions:"functions"},subfolders:{templates:"templates",serverlessFunctions:"functions",assets:Me,public:Ne,clientBundle:"client",serverBundle:"server",renderBundle:"render",renderer:"renderer",static:"static",plugin:"plugin"},sitesConfigFiles:{ci:"ci.json",features:"features.json",siteStream:"site-stream.json",serving:"serving.json",sitemap:"sitemap.json",redirects:"redirects.csv",auth:"auth.json"},distConfigFiles:{templates:"templates.json",artifacts:"artifacts.json",functionMetadata:"functionMetadata.json"},rootFiles:{config:"config.yaml"},envVarConfig:{envVarDir:"",envVarPrefix:"YEXT_PUBLIC"}},H=class H{constructor(e){F(this,"config");F(this,"getTemplatePaths",()=>{const e=w.join(this.config.rootFolders.source,this.config.subfolders.templates);return this.config.scope?[new B(w.join(e,this.config.scope)),new B(e)]:[new B(e)]});F(this,"getSitesConfigPath",()=>new B(w.join(this.config.rootFolders.sitesConfig,this.config.scope??"")));F(this,"getScopedDistPath",()=>new B(w.join(this.config.rootFolders.dist,this.config.scope??"")));const n=be(we,e);this.config=n}};F(H,"init",async e=>{const n=be(we,e),t=await ei(Me,w.resolve("vite.config.js"));n.subfolders.assets=t;const i=await ri(Ne,w.resolve("vite.config.js"));return n.subfolders.public=i,new H(n)});let z=H;const ni=r=>{const e=r.split("/");return e.pop(),e.map(()=>"../").reduce((n,t)=>n+t,"")},_e=r=>r.split(w.sep).join(w.posix.sep),ti=r=>`<title>${r.title?r.title:"Yext Pages Site"}</title>
    <meta charset="${r.charset||"UTF-8"}">
    <meta name="viewport" content="${r.viewport||"width=device-width, initial-scale=1"}">
    ${r.tags?r.tags.map(ii).join(`
`):""}
    ${r.other?r.other:""}`.split(`
`).filter(e=>e.trim()!="").join(`
`),ii=r=>{switch(r.type){case"base":case"link":case"meta":return`<${r.type} ${Ae(r.attributes)}>`;case"style":case"script":case"noscript":case"template":return`<${r.type} ${Ae(r.attributes)}></${r.type}>`;default:return console.log(dr.yellow(`[WARNING]: Tag type ${r.type} is unsupported by the Tag interface. Please use "other" to render this tag.`)),""}},Ae=r=>Object.keys(r).map(e=>`${e}="${r[e]}"`).join(" "),si=(r,e)=>{var n,t;return r!=null&&r.lang?r.lang:(n=e==null?void 0:e.document)!=null&&n.locale?(t=e==null?void 0:e.document)==null?void 0:t.locale:"en"},ai=(r,e,n)=>{const t=$e(_e(e)),i=$e(_e(r));return`
        const componentURL = new URL("${t}", import.meta.url)
        const component = await import(componentURL);

        const renderURL = new URL("${i}", import.meta.url)
        const render = await import(renderURL);

        render.render(
        {
            Page: component.default,
            pageProps: ${oi(n)},
        }
        );
    `},oi=r=>`JSON.parse(decodeURIComponent("${encodeURIComponent(JSON.stringify(r))}"))`,$e=r=>r.startsWith("/")?r:"/"+r,ci=(r,e,n,t)=>(e=e.replace("<!--app-lang-->",n),r&&(e=W(e,`<script type="module">${r}<\/script>`)),t&&(e=W(e,ti(t))),e),li=(r,e,n,t,i,a)=>{let s=ci(r,e,i,a);return s=W(s,fi(n,t)),s},fi=(r,e)=>Array.from(He(r,e,new Set)).map(n=>`<link rel="stylesheet" href="/${n}"/>`).join(`
`),He=(r,e,n)=>{const t=structuredClone(Object.entries(e).find(([o])=>o===r));if(!t)return new Set;const[i,a]=t;n.add(i);const s=new Set(a.css);return(a.imports||[]).flatMap(o=>Array.from(He(o,e,n))).forEach(o=>s.add(o)),s},Pe="<head>",W=(r,e)=>{let n=r.indexOf(Pe);if(n===-1)throw new Error("_server.tsx: No head tag is defined");return n+=Pe.length,r.slice(0,n)+e+r.slice(n)},ui=async(r,e,n,t,i,a)=>{if(!i)throw new Error("Manifest is undefined");const s=e.getHeadConfig?e.getHeadConfig(r):void 0,o=w.join(a.getTemplatePaths()[0].path,`${e.templateName}.tsx`),c=await t.server.render({Page:e.default,pageProps:r});let d;return n&&(d=ai(t.client,i.clientPaths[e.templateName],r)),li(d,c,o,i.bundlerManifest,si(s,r),s)},vi=r=>{if(di(r.filename,r.config),!r.getPath)throw new Error(`Template ${r.filename} is missing an exported getPath function.`);if(!r.default&&!r.render)throw new Error(`Template ${r.filename} does not have the necessary exports to produce page. A module should either have a React component as a default export or a render function.`)},di=(r,e)=>{if(!e.name)throw new Error(`Template ${r} is missing a "name" in the config function.`);if(e.streamId&&e.stream)throw new Error(`Template ${r} must not define both a "streamId" and a "stream".`)},gi=(r,e)=>{let n=r.split(w.sep)[r.split(w.sep).length-1];const t=n.slice(n.lastIndexOf("."));let i=n.slice(0,n.lastIndexOf("."));return e&&(n=n.split(t)[0].slice(0,n.split(t)[0].lastIndexOf("."))+t,i=i.slice(0,i.lastIndexOf("."))),{base:n,name:i}},hi=(r,e,n)=>{const t=gi(r,n),i={...e,config:pi(t.name,e.config),path:r,filename:t.base,templateName:t.name};return vi(i),i},pi=(r,e)=>({name:(e==null?void 0:e.name)??r,hydrate:(e==null?void 0:e.hydrate)??!0,...e,stream:mi(e==null?void 0:e.stream)}),mi=r=>{if(r)return r.localization.locales&&r.localization.locales.length>0?{...r,localization:{locales:r.localization.locales,primary:!1}}:{...r,localization:{primary:!0}}},bi=(r,e)=>{if(!r||typeof r!="string")throw new Error(`getPath does not return a valid string in template '${e}'`)},Te=new Map,yi=async(r,e,n)=>{const t=e.serverPaths[r].replace(n.config.subfolders.assets,"..");if(!t)throw new Error(`Could not find path for feature ${r}`);let i=Te.get(t);return i||(i=await Q(()=>import(t),[]),Te.set(t,i)),hi(t,i,!0)},wi=async(r,e)=>{const n=r.renderPaths._server.replace(e.config.subfolders.assets,"..");return{server:await _i(n),client:r.renderPaths._client}},Ce=new Map,_i=async r=>{let e=Ce.get(r);return e||(e=await Q(()=>import(r),[]),Ce.set(r,e)),e},Ai=async(r,e,n,t,i)=>{var c;r.transformProps&&(e=await r.transformProps(e));const a=r.getPath(e);bi(a,r.templateName);const s={...e,path:a,relativePrefixToRoot:ni(a)};return{content:await $i(r,s,n,t,i),path:a,redirects:((c=r.getRedirects)==null?void 0:c.call(r,s))??[]}},$i=async(r,e,n,t,i)=>{const{default:a,render:s,getHeadConfig:o}=r;if(!a&&!s)throw new Error(`Cannot render html from template '${r.config.name}'. Template is missing render function or default export.`);return s?(o&&console.warn(`getHeadConfig for template ${r.config.name} will not be called since a custom render function is defined.`),s(e)):await ui(e,r,r.config.hydrate,n,t,i)};var Si=async(r,e)=>{const n=new z(e.projectStructure),t=await yi(r.document.__.name,e,n),i=await wi(e,n);return await Ai(t,r,i,e,n)};export{Si as default};
