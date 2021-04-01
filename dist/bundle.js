(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.file = {}));
}(this, (function (exports) { 'use strict';

  function e(e,t){const n=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)n[o[r]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const t=e("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt"),n=e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function o(e){if(S(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=o(A(r)?l(r):r);if(s)for(const e in s)t[e]=s[e];}return t}if(B(e))return e}const r=/;(?![^(]*\))/g,s=/:(.+)/;function l(e){const t={};return e.split(r).forEach((e=>{if(e){const n=e.split(s);n.length>1&&(t[n[0].trim()]=n[1].trim());}})),t}function i(e){let t="";if(A(e))t=e;else if(S(e))for(let n=0;n<e.length;n++){const o=i(e[n]);o&&(t+=o+" ");}else if(B(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const f={},h=()=>{},m=/^on[^a-z]/,v=e=>m.test(e),y=e=>e.startsWith("onUpdate:"),_=Object.assign,b=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1);},C=Object.prototype.hasOwnProperty,x=(e,t)=>C.call(e,t),S=Array.isArray,w=e=>"[object Map]"===M(e),k=e=>"[object Set]"===M(e),F=e=>"function"==typeof e,A=e=>"string"==typeof e,T=e=>"symbol"==typeof e,B=e=>null!==e&&"object"==typeof e,$=e=>B(e)&&F(e.then)&&F(e.catch),I=Object.prototype.toString,M=e=>I.call(e),L=e=>A(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e;e(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");const N=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},V=/-(\w)/g,P=N((e=>e.replace(V,((e,t)=>t?t.toUpperCase():"")))),U=/\B([A-Z])/g,j=N((e=>e.replace(U,"-$1").toLowerCase())),D=N((e=>e.charAt(0).toUpperCase()+e.slice(1))),z=(e,t)=>e!==t&&(e==e||t==t),G=e=>{const t=parseFloat(e);return isNaN(t)?e:t},q=new WeakMap,J=[];let X;const Z=Symbol(""),Q=Symbol("");function Y(e,t=f){(function(e){return e&&!0===e._isEffect})(e)&&(e=e.raw);const n=function(e,t){const n=function(){if(!n.active)return t.scheduler?void 0:e();if(!J.includes(n)){ne(n);try{return re.push(oe),oe=!0,J.push(n),X=n,e()}finally{J.pop(),le(),X=J[J.length-1];}}};return n.id=te++,n.allowRecurse=!!t.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}(e,t);return t.lazy||n(),n}function ee(e){e.active&&(ne(e),e.options.onStop&&e.options.onStop(),e.active=!1);}let te=0;function ne(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0;}}let oe=!0;const re=[];function se(){re.push(oe),oe=!1;}function le(){const e=re.pop();oe=void 0===e||e;}function ie(e,t,n){if(!oe||void 0===X)return;let o=q.get(e);o||q.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=new Set),r.has(X)||(r.add(X),X.deps.push(r));}function ce(e,t,n,o,r,s){const l=q.get(e);if(!l)return;const i=new Set,c=e=>{e&&e.forEach((e=>{(e!==X||e.allowRecurse)&&i.add(e);}));};if("clear"===t)l.forEach(c);else if("length"===n&&S(e))l.forEach(((e,t)=>{("length"===t||t>=o)&&c(e);}));else switch(void 0!==n&&c(l.get(n)),t){case"add":S(e)?L(n)&&c(l.get("length")):(c(l.get(Z)),w(e)&&c(l.get(Q)));break;case"delete":S(e)||(c(l.get(Z)),w(e)&&c(l.get(Q)));break;case"set":w(e)&&c(l.get(Z));}i.forEach((e=>{e.options.scheduler?e.options.scheduler(e):e();}));}const ae=e("__proto__,__v_isRef,__isVue"),ue=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(T)),pe=me(),fe=me(!1,!0),de=me(!0),he=me(!0,!0),ge={};function me(e=!1,t=!1){return function(n,o,r){if("__v_isReactive"===o)return !e;if("__v_isReadonly"===o)return e;if("__v_raw"===o&&r===(e?t?qe:Ge:t?Ke:We).get(n))return n;const s=S(n);if(!e&&s&&x(ge,o))return Reflect.get(ge,o,r);const l=Reflect.get(n,o,r);if(T(o)?ue.has(o):ae(o))return l;if(e||ie(n,0,o),t)return l;if(it(l)){return !s||!L(o)?l.value:l}return B(l)?e?Qe(l):Xe(l):l}}["includes","indexOf","lastIndexOf"].forEach((e=>{const t=Array.prototype[e];ge[e]=function(...e){const n=rt(this);for(let t=0,r=this.length;t<r;t++)ie(n,0,t+"");const o=t.apply(n,e);return -1===o||!1===o?t.apply(n,e.map(rt)):o};})),["push","pop","shift","unshift","splice"].forEach((e=>{const t=Array.prototype[e];ge[e]=function(...e){se();const n=t.apply(this,e);return le(),n};}));function ve(e=!1){return function(t,n,o,r){let s=t[n];if(!e&&(o=rt(o),s=rt(s),!S(t)&&it(s)&&!it(o)))return s.value=o,!0;const l=S(t)&&L(n)?Number(n)<t.length:x(t,n),i=Reflect.set(t,n,o,r);return t===rt(r)&&(l?z(o,s)&&ce(t,"set",n,o):ce(t,"add",n,o)),i}}const ye={get:pe,set:ve(),deleteProperty:function(e,t){const n=x(e,t),o=Reflect.deleteProperty(e,t);return o&&n&&ce(e,"delete",t,void 0),o},has:function(e,t){const n=Reflect.has(e,t);return T(t)&&ue.has(t)||ie(e,0,t),n},ownKeys:function(e){return ie(e,0,S(e)?"length":Z),Reflect.ownKeys(e)}},_e={get:de,set:(e,t)=>!0,deleteProperty:(e,t)=>!0};_({},ye,{get:fe,set:ve(!0)});_({},_e,{get:he});const xe=e=>B(e)?Xe(e):e,Se=e=>B(e)?Qe(e):e,we=e=>e,ke=e=>Reflect.getPrototypeOf(e);function Ee(e,t,n=!1,o=!1){const r=rt(e=e.__v_raw),s=rt(t);t!==s&&!n&&ie(r,0,t),!n&&ie(r,0,s);const{has:l}=ke(r),i=o?we:n?Se:xe;return l.call(r,t)?i(e.get(t)):l.call(r,s)?i(e.get(s)):void 0}function Fe(e,t=!1){const n=this.__v_raw,o=rt(n),r=rt(e);return e!==r&&!t&&ie(o,0,e),!t&&ie(o,0,r),e===r?n.has(e):n.has(e)||n.has(r)}function Ae(e,t=!1){return e=e.__v_raw,!t&&ie(rt(e),0,Z),Reflect.get(e,"size",e)}function Te(e){e=rt(e);const t=rt(this);return ke(t).has.call(t,e)||(t.add(e),ce(t,"add",e,e)),this}function Be(e,t){t=rt(t);const n=rt(this),{has:o,get:r}=ke(n);let s=o.call(n,e);s||(e=rt(e),s=o.call(n,e));const l=r.call(n,e);return n.set(e,t),s?z(t,l)&&ce(n,"set",e,t):ce(n,"add",e,t),this}function $e(e){const t=rt(this),{has:n,get:o}=ke(t);let r=n.call(t,e);r||(e=rt(e),r=n.call(t,e)),o&&o.call(t,e);const s=t.delete(e);return r&&ce(t,"delete",e,void 0),s}function Ie(){const e=rt(this),t=0!==e.size,n=e.clear();return t&&ce(e,"clear",void 0,void 0),n}function Me(e,t){return function(n,o){const r=this,s=r.__v_raw,l=rt(s),i=t?we:e?Se:xe;return !e&&ie(l,0,Z),s.forEach(((e,t)=>n.call(o,i(e),i(t),r)))}}function Oe(e,t,n){return function(...o){const r=this.__v_raw,s=rt(r),l=w(s),i="entries"===e||e===Symbol.iterator&&l,c="keys"===e&&l,a=r[e](...o),u=n?we:t?Se:xe;return !t&&ie(s,0,c?Q:Z),{next(){const{value:e,done:t}=a.next();return t?{value:e,done:t}:{value:i?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Le(e){return function(...t){return "delete"!==e&&this}}const Re={get(e){return Ee(this,e)},get size(){return Ae(this)},has:Fe,add:Te,set:Be,delete:$e,clear:Ie,forEach:Me(!1,!1)},Ne={get(e){return Ee(this,e,!1,!0)},get size(){return Ae(this)},has:Fe,add:Te,set:Be,delete:$e,clear:Ie,forEach:Me(!1,!0)},Ve={get(e){return Ee(this,e,!0)},get size(){return Ae(this,!0)},has(e){return Fe.call(this,e,!0)},add:Le("add"),set:Le("set"),delete:Le("delete"),clear:Le("clear"),forEach:Me(!0,!1)},Pe={get(e){return Ee(this,e,!0,!0)},get size(){return Ae(this,!0)},has(e){return Fe.call(this,e,!0)},add:Le("add"),set:Le("set"),delete:Le("delete"),clear:Le("clear"),forEach:Me(!0,!0)};function Ue(e,t){const n=t?e?Pe:Ne:e?Ve:Re;return (t,o,r)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get(x(n,o)&&o in t?n:t,o,r)}["keys","values","entries",Symbol.iterator].forEach((e=>{Re[e]=Oe(e,!1,!1),Ve[e]=Oe(e,!0,!1),Ne[e]=Oe(e,!1,!0),Pe[e]=Oe(e,!0,!0);}));const je={get:Ue(!1,!1)},He={get:Ue(!0,!1)},We=new WeakMap,Ke=new WeakMap,Ge=new WeakMap,qe=new WeakMap;function Je(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>M(e).slice(8,-1))(e))}function Xe(e){return e&&e.__v_isReadonly?e:et(e,!1,ye,je,We)}function Qe(e){return et(e,!0,_e,He,Ge)}function et(e,t,n,o,r){if(!B(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const l=Je(e);if(0===l)return e;const i=new Proxy(e,2===l?o:n);return r.set(e,i),i}function tt(e){return nt(e)?tt(e.__v_raw):!(!e||!e.__v_isReactive)}function nt(e){return !(!e||!e.__v_isReadonly)}function ot(e){return tt(e)||nt(e)}function rt(e){return e&&rt(e.__v_raw)||e}const lt=e=>B(e)?Xe(e):e;function it(e){return Boolean(e&&!0===e.__v_isRef)}function ct(e){return pt(e)}class ut{constructor(e,t=!1){this._rawValue=e,this._shallow=t,this.__v_isRef=!0,this._value=t?e:lt(e);}get value(){return ie(rt(this),0,"value"),this._value}set value(e){z(rt(e),this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:lt(e),ce(rt(this),"set","value",e));}}function pt(e,t=!1){return it(e)?e:new ut(e,t)}class mt{constructor(e){this.__v_isRef=!0;const{get:t,set:n}=e((()=>ie(this,0,"value")),(()=>ce(this,"set","value")));this._get=t,this._set=n;}get value(){return this._get()}set value(e){this._set(e);}}function vt(e){return new mt(e)}function Et(e,t,n,o){let r;try{r=o?e(...o):e();}catch(s){At(s,t,n);}return r}function Ft(e,t,n,o){if(F(e)){const r=Et(e,t,n,o);return r&&$(r)&&r.catch((e=>{At(e,t,n);})),r}const r=[];for(let s=0;s<e.length;s++)r.push(Ft(e[s],t,n,o));return r}function At(e,t,n,o=!0){if(t){let o=t.parent;const r=t.proxy,s=n;for(;o;){const t=o.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,r,s))return;o=o.parent;}const l=t.appContext.config.errorHandler;if(l)return void Et(l,null,10,[e,r,s])}!function(e,t,n,o=!0){console.error(e);}(e,0,0,o);}let Tt=!1,Bt=!1;const $t=[];let It=0;const Mt=[];let Ot=null,Lt=0;const Rt=[];let Nt=null,Vt=0;const Pt=Promise.resolve();let Ut=null,jt=null;function Dt(e){const t=Ut||Pt;return e?t.then(this?e.bind(this):e):t}function Ht(e){if(!($t.length&&$t.includes(e,Tt&&e.allowRecurse?It+1:It)||e===jt)){const t=function(e){let t=It+1,n=$t.length;const o=Jt(e);for(;t<n;){const e=t+n>>>1;Jt($t[e])<o?t=e+1:n=e;}return t}(e);t>-1?$t.splice(t,0,e):$t.push(e),zt();}}function zt(){Tt||Bt||(Bt=!0,Ut=Pt.then(Xt));}function Wt(e,t,n,o){S(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?o+1:o)||n.push(e),zt();}function Kt(e){Wt(e,Nt,Rt,Vt);}function Gt(e,t=null){if(Mt.length){for(jt=t,Ot=[...new Set(Mt)],Mt.length=0,Lt=0;Lt<Ot.length;Lt++)Ot[Lt]();Ot=null,Lt=0,jt=null,Gt(e,t);}}function qt(e){if(Rt.length){const e=[...new Set(Rt)];if(Rt.length=0,Nt)return void Nt.push(...e);for(Nt=e,Nt.sort(((e,t)=>Jt(e)-Jt(t))),Vt=0;Vt<Nt.length;Vt++)Nt[Vt]();Nt=null,Vt=0;}}const Jt=e=>null==e.id?1/0:e.id;function Xt(e){Bt=!1,Tt=!0,Gt(e),$t.sort(((e,t)=>Jt(e)-Jt(t)));try{for(It=0;It<$t.length;It++){const e=$t[It];e&&Et(e,null,14);}}finally{It=0,$t.length=0,qt(),Tt=!1,Ut=null,($t.length||Rt.length)&&Xt(e);}}let nn=0;const on=e=>nn+=e;let ln=null,cn=null;function gn(e){let t;for(let n=0;n<e.length;n++){const o=e[n];if(!ir(o))return;if(o.type!==Qo||"v-if"===o.children){if(t)return;t=o;}}return t}function xn(e){if(F(e)&&(e=e()),S(e)){e=gn(e);}return yr(e)}function Sn(e,t){t&&t.pendingBranch?S(e)?t.effects.push(...e):t.effects.push(e):Kt(e);}function In(e,t,n=Vr,o=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;se(),Ur(n);const r=Ft(t,n,e,o);return Ur(null),le(),r});return o?r.unshift(s):r.push(s),s}}const Mn=e=>(t,n=Vr)=>In(e,t,n),Ln=Mn("m"),Nn=Mn("u"),Vn=Mn("bum");const zn={};function Wn(e,t,n){return Kn(e,t,n)}function Kn(e,t,{immediate:n,deep:o,flush:r,onTrack:s,onTrigger:l}=f,i=Vr){let c,a,u=!1;if(it(e)?(c=()=>e.value,u=!!e._shallow):tt(e)?(c=()=>e,o=!0):c=S(e)?()=>e.map((e=>it(e)?e.value:tt(e)?qn(e):F(e)?Et(e,i,2,[i&&i.proxy]):void 0)):F(e)?t?()=>Et(e,i,2,[i&&i.proxy]):()=>{if(!i||!i.isUnmounted)return a&&a(),Ft(e,i,3,[p])}:h,t&&o){const e=c;c=()=>qn(e());}let p=e=>{a=v.options.onStop=()=>{Et(e,i,4);};},d=S(e)?[]:zn;const g=()=>{if(v.active)if(t){const e=v();(o||u||z(e,d))&&(a&&a(),Ft(t,i,3,[e,d===zn?void 0:d,p]),d=e);}else v();};let m;g.allowRecurse=!!t,m="sync"===r?g:"post"===r?()=>Io(g,i&&i.suspense):()=>{!i||i.isMounted?function(e){Wt(e,Ot,Mt,Lt);}(g):g();};const v=Y(c,{lazy:!0,onTrack:s,onTrigger:l,scheduler:m});return Jr(v,i),t?n?g():d=v():"post"===r?Io(v,i&&i.suspense):v(),()=>{ee(v),i&&b(i.effects,v);}}function Gn(e,t,n){const o=this.proxy;return Kn(A(e)?()=>o[e]:e.bind(o),t.bind(o),n,this)}function qn(e,t=new Set){if(!B(e)||t.has(e))return e;if(t.add(e),it(e))qn(e.value,t);else if(S(e))for(let n=0;n<e.length;n++)qn(e[n],t);else if(k(e)||w(e))e.forEach((e=>{qn(e,t);}));else for(const n in e)qn(e[n],t);return e}function Jn(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ln((()=>{e.isMounted=!0;})),Vn((()=>{e.isUnmounting=!0;})),e}const Xn=[Function,Array],Zn={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xn,onEnter:Xn,onAfterEnter:Xn,onEnterCancelled:Xn,onBeforeLeave:Xn,onLeave:Xn,onAfterLeave:Xn,onLeaveCancelled:Xn,onBeforeAppear:Xn,onAppear:Xn,onAfterAppear:Xn,onAppearCancelled:Xn},setup(e,{slots:t}){const n=Pr(),o=Jn();let r;return ()=>{const s=t.default&&oo(t.default(),!0);if(!s||!s.length)return;const l=rt(e),{mode:i}=l,c=s[0];if(o.isLeaving)return eo(c);const a=to(c);if(!a)return eo(c);const u=Yn(a,l,o,n);no(a,u);const p=n.subTree,f=p&&to(p);let d=!1;const{getTransitionKey:h}=a.type;if(h){const e=h();void 0===r?r=e:e!==r&&(r=e,d=!0);}if(f&&f.type!==Qo&&(!cr(a,f)||d)){const e=Yn(f,l,o,n);if(no(f,e),"out-in"===i)return o.isLeaving=!0,e.afterLeave=()=>{o.isLeaving=!1,n.update();},eo(c);"in-out"===i&&a.type!==Qo&&(e.delayLeave=(e,t,n)=>{Qn(o,f)[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave;},u.delayedLeave=n;});}return c}}};function Qn(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function Yn(e,t,n,o){const{appear:r,mode:s,persisted:l=!1,onBeforeEnter:i,onEnter:c,onAfterEnter:a,onEnterCancelled:u,onBeforeLeave:p,onLeave:f,onAfterLeave:d,onLeaveCancelled:h,onBeforeAppear:g,onAppear:m,onAfterAppear:v,onAppearCancelled:y}=t,_=String(e.key),b=Qn(n,e),C=(e,t)=>{e&&Ft(e,o,9,t);},x={mode:s,persisted:l,beforeEnter(t){let o=i;if(!n.isMounted){if(!r)return;o=g||i;}t._leaveCb&&t._leaveCb(!0);const s=b[_];s&&cr(e,s)&&s.el._leaveCb&&s.el._leaveCb(),C(o,[t]);},enter(e){let t=c,o=a,s=u;if(!n.isMounted){if(!r)return;t=m||c,o=v||a,s=y||u;}let l=!1;const i=e._enterCb=t=>{l||(l=!0,C(t?s:o,[e]),x.delayedLeave&&x.delayedLeave(),e._enterCb=void 0);};t?(t(e,i),t.length<=1&&i()):i();},leave(t,o){const r=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return o();C(p,[t]);let s=!1;const l=t._leaveCb=n=>{s||(s=!0,o(),C(n?h:d,[t]),t._leaveCb=void 0,b[r]===e&&delete b[r]);};b[r]=e,f?(f(t,l),f.length<=1&&l()):l();},clone:e=>Yn(e,t,n,o)};return x}function eo(e){if(ro(e))return (e=hr(e)).children=null,e}function to(e){return ro(e)?e.children?e.children[0]:void 0:e}function no(e,t){6&e.shapeFlag&&e.component?no(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t;}function oo(e,t=!1){let n=[],o=0;for(let r=0;r<e.length;r++){const s=e[r];s.type===Xo?(128&s.patchFlag&&o++,n=n.concat(oo(s.children,t))):(t||s.type!==Qo)&&n.push(s);}if(o>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}const ro=e=>e.type.__isKeepAlive;const Io=Sn;const Wo=Symbol();const Xo=Symbol(void 0),Zo=Symbol(void 0),Qo=Symbol(void 0);let tr=null;function ir(e){return !!e&&!0===e.__v_isVNode}function cr(e,t){return e.type===t.type&&e.key===t.key}const ur="__vInternal",pr=({key:e})=>null!=e?e:null,fr=({ref:e})=>null!=e?A(e)||it(e)||F(e)?{i:ln,r:e}:e:null,dr=function(e,t=null,n=null,r=0,s=null,l=!1){e&&e!==Wo||(e=Qo);if(ir(e)){const o=hr(e,t,!0);return n&&br(o,n),o}c=e,F(c)&&"__vccOpts"in c&&(e=e.__vccOpts);var c;if(t){(ot(t)||ur in t)&&(t=_({},t));let{class:e,style:n}=t;e&&!A(e)&&(t.class=i(e)),B(n)&&(ot(n)&&!S(n)&&(n=_({},n)),t.style=o(n));}const a=A(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:B(e)?4:F(e)?2:0,u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&pr(t),ref:t&&fr(t),scopeId:cn,slotScopeIds:null,children:null,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};if(br(u,n),128&a){const{content:e,fallback:t}=function(e){const{shapeFlag:t,children:n}=e;let o,r;return 32&t?(o=xn(n.default),r=xn(n.fallback)):(o=xn(n),r=yr(null)),{content:o,fallback:r}}(u);u.ssContent=e,u.ssFallback=t;}!l&&tr&&(r>0||6&a)&&32!==r&&tr.push(u);return u};function hr(e,t,n=!1){const{props:o,ref:r,patchFlag:s,children:l}=e,i=t?Cr(o||{},t):o;return {__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&pr(i),ref:t&&t.ref?n&&r?S(r)?r.concat(fr(t)):[r,fr(t)]:fr(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Xo?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&hr(e.ssContent),ssFallback:e.ssFallback&&hr(e.ssFallback),el:e.el,anchor:e.anchor}}function gr(e=" ",t=0){return dr(Zo,null,e,t)}function yr(e){return null==e||"boolean"==typeof e?dr(Qo):S(e)?dr(Xo,null,e):"object"==typeof e?null===e.el?e:hr(e):dr(Zo,null,String(e))}function br(e,t){let n=0;const{shapeFlag:o}=e;if(null==t)t=null;else if(S(t))n=16;else if("object"==typeof t){if(1&o||64&o){const n=t.default;return void(n&&(n._c&&on(1),br(e,n()),n._c&&on(-1)))}{n=32;const o=t._;o||ur in t?3===o&&ln&&(1024&ln.vnode.patchFlag?(t._=2,e.patchFlag|=1024):t._=1):t._ctx=ln;}}else F(t)?(t={default:t,_ctx:ln},n=32):(t=String(t),64&o?(n=16,t=[gr(t)]):n=8);e.children=t,e.shapeFlag|=n;}function Cr(...e){const t=_({},e[0]);for(let n=1;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=i([t.class,r.class]));else if("style"===e)t.style=o([t.style,r.style]);else if(v(e)){const n=t[e],o=r[e];n!==o&&(t[e]=n?[].concat(n,r[e]):o);}else ""!==e&&(t[e]=r[e]);}return t}function $r(e,t,n){const o=n.appContext.config.optionMergeStrategies,{mixins:r,extends:s}=t;s&&$r(e,s,n),r&&r.forEach((t=>$r(e,t,n)));for(const l in t)e[l]=o&&x(o,l)?o[l](e[l],t[l],n.proxy,l):t[l];}const Ir=e=>e?jr(e)?e.exposed?e.exposed:e.proxy:Ir(e.parent):null,Mr=_(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ir(e.parent),$root:e=>Ir(e.root),$emit:e=>e.emit,$options:e=>function(e){const t=e.type,{__merged:n,mixins:o,extends:r}=t;if(n)return n;const s=e.appContext.mixins;if(!s.length&&!o&&!r)return t;const l={};return s.forEach((t=>$r(l,t,e))),$r(l,t,e),t.__merged=l}(e),$forceUpdate:e=>()=>Ht(e.update),$nextTick:e=>Dt.bind(e.proxy),$watch:e=>Gn.bind(e)}),Or={get({_:e},t){const{ctx:n,setupState:o,data:r,props:s,accessCache:l,type:i,appContext:c}=e;if("__v_skip"===t)return !0;let a;if("$"!==t[0]){const i=l[t];if(void 0!==i)switch(i){case 0:return o[t];case 1:return r[t];case 3:return n[t];case 2:return s[t]}else {if(o!==f&&x(o,t))return l[t]=0,o[t];if(r!==f&&x(r,t))return l[t]=1,r[t];if((a=e.propsOptions[0])&&x(a,t))return l[t]=2,s[t];if(n!==f&&x(n,t))return l[t]=3,n[t];(l[t]=4);}}const u=Mr[t];let p,d;return u?("$attrs"===t&&ie(e,0,t),u(e)):(p=i.__cssModules)&&(p=p[t])?p:n!==f&&x(n,t)?(l[t]=3,n[t]):(d=c.config.globalProperties,x(d,t)?d[t]:void 0)},set({_:e},t,n){const{data:o,setupState:r,ctx:s}=e;if(r!==f&&x(r,t))r[t]=n;else if(o!==f&&x(o,t))o[t]=n;else if(x(e.props,t))return !1;return ("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:r,propsOptions:s}},l){let i;return void 0!==n[l]||e!==f&&x(e,l)||t!==f&&x(t,l)||(i=s[0])&&x(i,l)||x(o,l)||x(Mr,l)||x(r.config.globalProperties,l)}};_({},Or,{get(e,t){if(t!==Symbol.unscopables)return Or.get(e,t,e)},has:(e,n)=>"_"!==n[0]&&!t(n)});let Vr=null;const Pr=()=>Vr||ln,Ur=e=>{Vr=e;};function jr(e){return 4&e.vnode.shapeFlag}function Jr(e,t=Vr){t&&(t.effects||(t.effects=[])).push(e);}const fs="http://www.w3.org/2000/svg",ds="undefined"!=typeof document?document:null;let hs,gs;const ms={insert:(e,t,n)=>{t.insertBefore(e,n||null);},remove:e=>{const t=e.parentNode;t&&t.removeChild(e);},createElement:(e,t,n,o)=>{const r=t?ds.createElementNS(fs,e):ds.createElement(e,n?{is:n}:void 0);return "select"===e&&o&&null!=o.multiple&&r.setAttribute("multiple",o.multiple),r},createText:e=>ds.createTextNode(e),createComment:e=>ds.createComment(e),setText:(e,t)=>{e.nodeValue=t;},setElementText:(e,t)=>{e.textContent=t;},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ds.querySelector(e),setScopeId(e,t){e.setAttribute(t,"");},cloneNode(e){const t=e.cloneNode(!0);return "_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,o){const r=o?gs||(gs=ds.createElementNS(fs,"svg")):hs||(hs=ds.createElement("div"));r.innerHTML=e;const s=r.firstChild;let l=s,i=l;for(;l;)i=l,ms.insert(l,t,n),l=r.firstChild;return [s,i]}};const vs=/\s*!important$/;function ys(e,t,n){if(S(n))n.forEach((n=>ys(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else {const o=function(e,t){const n=bs[t];if(n)return n;let o=P(t);if("filter"!==o&&o in e)return bs[t]=o;o=D(o);for(let r=0;r<_s.length;r++){const n=_s[r]+o;if(n in e)return bs[t]=n}return t}(e,t);vs.test(n)?e.setProperty(j(o),n.replace(vs,""),"important"):e[o]=n;}}const _s=["Webkit","Moz","ms"],bs={};const Cs="http://www.w3.org/1999/xlink";let xs=Date.now,Ss=!1;if("undefined"!=typeof window){xs()>document.createEvent("Event").timeStamp&&(xs=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Ss=!!(e&&Number(e[1])<=53);}let ws=0;const ks=Promise.resolve(),Es=()=>{ws=0;};function Fs(e,t,n,o){e.addEventListener(t,n,o);}function As(e,t,n,o,r=null){const s=e._vei||(e._vei={}),l=s[t];if(o&&l)l.value=o;else {const[n,i]=function(e){let t;if(Ts.test(e)){let n;for(t={};n=e.match(Ts);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0;}return [j(e.slice(2)),t]}(t);if(o){Fs(e,n,s[t]=function(e,t){const n=e=>{const o=e.timeStamp||xs();(Ss||o>=n.attached-1)&&Ft(function(e,t){if(S(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0;},t.map((e=>t=>!t._stopped&&e(t)))}return t}(e,n.value),t,5,[e]);};return n.value=e,n.attached=(()=>ws||(ks.then(Es),ws=xs()))(),n}(o,r),i);}else l&&(!function(e,t,n,o){e.removeEventListener(t,n,o);}(e,n,l,i),s[t]=void 0);}}const Ts=/(?:Once|Passive|Capture)$/;const Bs=/^on[a-z]/;const Ls={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Rs=_({},Zn.props,Ls);function Ns(e){let{name:t="v",type:n,css:o=!0,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:l=`${t}-enter-active`,enterToClass:i=`${t}-enter-to`,appearFromClass:c=s,appearActiveClass:a=l,appearToClass:u=i,leaveFromClass:p=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=e;const h={};for(const _ in e)_ in Ls||(h[_]=e[_]);if(!o)return h;const g=function(e){if(null==e)return null;if(B(e))return [Vs(e.enter),Vs(e.leave)];{const t=Vs(e);return [t,t]}}(r),m=g&&g[0],v=g&&g[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:C,onLeave:x,onLeaveCancelled:S,onBeforeAppear:w=y,onAppear:k=b,onAppearCancelled:E=C}=h,F=(e,t,n)=>{Us(e,t?u:i),Us(e,t?a:l),n&&n();},A=(e,t)=>{Us(e,d),Us(e,f),t&&t();},T=e=>(t,o)=>{const r=e?k:b,l=()=>F(t,e,o);r&&r(t,l),js((()=>{Us(t,e?c:s),Ps(t,e?u:i),r&&r.length>1||Hs(t,n,m,l);}));};return _(h,{onBeforeEnter(e){y&&y(e),Ps(e,s),Ps(e,l);},onBeforeAppear(e){w&&w(e),Ps(e,c),Ps(e,a);},onEnter:T(!1),onAppear:T(!0),onLeave(e,t){const o=()=>A(e,t);Ps(e,p),Gs(),Ps(e,f),js((()=>{Us(e,p),Ps(e,d),x&&x.length>1||Hs(e,n,v,o);})),x&&x(e,o);},onEnterCancelled(e){F(e,!1),C&&C(e);},onAppearCancelled(e){F(e,!0),E&&E(e);},onLeaveCancelled(e){A(e),S&&S(e);}})}function Vs(e){return G(e)}function Ps(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t);}function Us(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0));}function js(e){requestAnimationFrame((()=>{requestAnimationFrame(e);}));}let Ds=0;function Hs(e,t,n,o){const r=e._endId=++Ds,s=()=>{r===e._endId&&o();};if(n)return setTimeout(s,n);const{type:l,timeout:i,propCount:c}=zs(e,t);if(!l)return o();const a=l+"end";let u=0;const p=()=>{e.removeEventListener(a,f),s();},f=t=>{t.target===e&&++u>=c&&p();};setTimeout((()=>{u<c&&p();}),i+1),e.addEventListener(a,f);}function zs(e,t){const n=window.getComputedStyle(e),o=e=>(n[e]||"").split(", "),r=o("transitionDelay"),s=o("transitionDuration"),l=Ws(r,s),i=o("animationDelay"),c=o("animationDuration"),a=Ws(i,c);let u=null,p=0,f=0;"transition"===t?l>0&&(u="transition",p=l,f=s.length):"animation"===t?a>0&&(u="animation",p=a,f=c.length):(p=Math.max(l,a),u=p>0?l>a?"transition":"animation":null,f=u?"transition"===u?s.length:c.length:0);return {type:u,timeout:p,propCount:f,hasTransform:"transition"===u&&/\b(transform|all)(,|$)/.test(n.transitionProperty)}}function Ws(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map(((t,n)=>Ks(t)+Ks(e[n]))))}function Ks(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Gs(){return document.body.offsetHeight}const qs=new WeakMap,Js=new WeakMap;({name:"TransitionGroup",props:_({},Rs,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Pr(),o=Jn();let r,s;return Nn((()=>{if(!r.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!function(e,t,n){const o=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&o.classList.remove(e)));}));n.split(/\s+/).forEach((e=>e&&o.classList.add(e))),o.style.display="none";const r=1===t.nodeType?t:t.parentNode;r.appendChild(o);const{hasTransform:s}=zs(o);return r.removeChild(o),s}(r[0].el,n.vnode.el,t))return;r.forEach(Zs),r.forEach(Qs);const o=r.filter(Ys);Gs(),o.forEach((e=>{const n=e.el,o=n.style;Ps(n,t),o.transform=o.webkitTransform=o.transitionDuration="";const r=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",r),n._moveCb=null,Us(n,t));};n.addEventListener("transitionend",r);}));})),()=>{const l=rt(e),i=Ns(l),c=l.tag||Xo;r=s,s=t.default?oo(t.default()):[];for(let e=0;e<s.length;e++){const t=s[e];null!=t.key&&no(t,Yn(t,i,o,n));}if(r)for(let e=0;e<r.length;e++){const t=r[e];no(t,Yn(t,i,o,n)),qs.set(t,t.el.getBoundingClientRect());}return dr(c,null,s)}}});function Zs(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb();}function Qs(e){Js.set(e,e.el.getBoundingClientRect());}function Ys(e){const t=qs.get(e),n=Js.get(e),o=t.left-n.left,r=t.top-n.top;if(o||r){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${o}px,${r}px)`,t.transitionDuration="0s",e}}_({patchProp:(e,t,o,r,s=!1,l,i,c,a)=>{switch(t){case"class":!function(e,t,n){if(null==t&&(t=""),n)e.setAttribute("class",t);else {const n=e._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),e.className=t;}}(e,r,s);break;case"style":!function(e,t,n){const o=e.style;if(n)if(A(n)){if(t!==n){const t=o.display;o.cssText=n,"_vod"in e&&(o.display=t);}}else {for(const e in n)ys(o,e,n[e]);if(t&&!A(t))for(const e in t)null==n[e]&&ys(o,e,"");}else e.removeAttribute("style");}(e,o,r);break;default:v(t)?y(t)||As(e,t,0,r,i):function(e,t,n,o){if(o)return "innerHTML"===t||!!(t in e&&Bs.test(t)&&F(n));if("spellcheck"===t||"draggable"===t)return !1;if("form"===t)return !1;if("list"===t&&"INPUT"===e.tagName)return !1;if("type"===t&&"TEXTAREA"===e.tagName)return !1;if(Bs.test(t)&&A(n))return !1;return t in e}(e,t,r,s)?function(e,t,n,o,r,s,l){if("innerHTML"===t||"textContent"===t)return o&&l(o,r,s),void(e[t]=null==n?"":n);if("value"!==t||"PROGRESS"===e.tagName){if(""===n||null==n){const o=typeof e[t];if(""===n&&"boolean"===o)return void(e[t]=!0);if(null==n&&"string"===o)return e[t]="",void e.removeAttribute(t);if("number"===o)return e[t]=0,void e.removeAttribute(t)}try{e[t]=n;}catch(i){}}else {e._value=n;const t=null==n?"":n;e.value!==t&&(e.value=t);}}(e,t,r,l,i,c,a):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),function(e,t,o,r){if(r&&t.startsWith("xlink:"))null==o?e.removeAttributeNS(Cs,t.slice(6,t.length)):e.setAttributeNS(Cs,t,o);else {const r=n(t);null==o||r&&!1===o?e.removeAttribute(t):e.setAttribute(t,r?"":o);}}(e,t,r,s));}},forcePatchProp:(e,t)=>"value"===t},ms);

  function useThrottleRef(value, wait) {
      if (wait === void 0) { wait = 0; }
      var rawValue = value;
      var timer = null;
      return vt(function (track, trigger) {
          return {
              get: function () {
                  track();
                  return rawValue;
              },
              set: function (val) {
                  if (!timer) {
                      rawValue = val;
                      trigger();
                      timer = setTimeout(function () {
                          timer = null;
                      }, wait);
                  }
              }
          };
      });
  }

  function useStorage(storage, key, defaultValue) {
      var storageValue = ct();
      function readValue() {
          try {
              var rawValue = storage.getItem(key);
              if (rawValue) {
                  return JSON.parse(rawValue);
              }
              else {
                  return defaultValue;
              }
          }
          catch (error) {
              console.warn(error);
          }
      }
      function writeValue(value) {
          if (typeof value === 'undefined') {
              storage.removeItem(key);
          }
          else {
              storage.setItem(key, JSON.stringify(value));
          }
      }
      var _dv = readValue();
      _dv && (storageValue.value = _dv);
      Wn(storageValue, function (newValue) {
          writeValue(newValue);
      }, {
          flush: 'post',
          deep: true
      });
      return storageValue;
  }

  exports.useStorage = useStorage;
  exports.useThrottleRef = useThrottleRef;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
