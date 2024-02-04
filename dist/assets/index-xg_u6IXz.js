(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function ri(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const W={},Ae=[],_t=()=>{},Cs=()=>!1,qn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ii=t=>t.startsWith("onUpdate:"),at=Object.assign,ai=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ps=Object.prototype.hasOwnProperty,U=(t,e)=>Ps.call(t,e),M=Array.isArray,ke=t=>rn(t)==="[object Map]",Xn=t=>rn(t)==="[object Set]",Yi=t=>rn(t)==="[object Date]",F=t=>typeof t=="function",nt=t=>typeof t=="string",Zt=t=>typeof t=="symbol",Y=t=>t!==null&&typeof t=="object",Ja=t=>(Y(t)||F(t))&&F(t.then)&&F(t.catch),Za=Object.prototype.toString,rn=t=>Za.call(t),Is=t=>rn(t).slice(8,-1),Qa=t=>rn(t)==="[object Object]",oi=t=>nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Pn=ri(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ts=/-(\w)/g,Rt=Jn(t=>t.replace(Ts,(e,n)=>n?n.toUpperCase():"")),Ns=/\B([A-Z])/g,Me=Jn(t=>t.replace(Ns,"-$1").toLowerCase()),Zn=Jn(t=>t.charAt(0).toUpperCase()+t.slice(1)),vr=Jn(t=>t?`on${Zn(t)}`:""),Qt=(t,e)=>!Object.is(t,e),In=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},jn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},$n=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Wi;const to=()=>Wi||(Wi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function si(t){if(M(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=nt(r)?Fs(r):si(r);if(i)for(const a in i)e[a]=i[a]}return e}else if(nt(t)||Y(t))return t}const Ms=/;(?![^(]*\))/g,Rs=/:([^]+)/,Ls=/\/\*[^]*?\*\//g;function Fs(t){const e={};return t.replace(Ls,"").split(Ms).forEach(n=>{if(n){const r=n.split(Rs);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function li(t){let e="";if(nt(t))e=t;else if(M(t))for(let n=0;n<t.length;n++){const r=li(t[n]);r&&(e+=r+" ")}else if(Y(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const js="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$s=ri(js);function eo(t){return!!t||t===""}function zs(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Qn(t[r],e[r]);return n}function Qn(t,e){if(t===e)return!0;let n=Yi(t),r=Yi(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Zt(t),r=Zt(e),n||r)return t===e;if(n=M(t),r=M(e),n||r)return n&&r?zs(t,e):!1;if(n=Y(t),r=Y(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,a=Object.keys(e).length;if(i!==a)return!1;for(const o in t){const s=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(s&&!l||!s&&l||!Qn(t[o],e[o]))return!1}}return String(t)===String(e)}function Ds(t,e){return t.findIndex(n=>Qn(n,e))}const br=t=>nt(t)?t:t==null?"":M(t)||Y(t)&&(t.toString===Za||!F(t.toString))?JSON.stringify(t,no,2):String(t),no=(t,e)=>e&&e.__v_isRef?no(t,e.value):ke(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],a)=>(n[yr(r,a)+" =>"]=i,n),{})}:Xn(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>yr(n))}:Zt(e)?yr(e):Y(e)&&!M(e)&&!Qa(e)?String(e):e,yr=(t,e="")=>{var n;return Zt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let It;class Us{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=It;try{return It=this,e()}finally{It=n}}}on(){It=this}off(){It=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Hs(t,e=It){e&&e.active&&e.effects.push(t)}let de;class fi{constructor(e,n,r,i){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,Hs(this,i)}get dirty(){if(this._dirtyLevel===1){this._dirtyLevel=0,this._queryings++,ve();for(const e of this.deps)if(e.computed&&(Vs(e.computed),this._dirtyLevel>=2))break;be(),this._queryings--}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Xt,n=de;try{return Xt=!0,de=this,this._runnings++,Ki(this),this.fn()}finally{Gi(this),this._runnings--,de=n,Xt=e}}stop(){var e;this.active&&(Ki(this),Gi(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Vs(t){return t.value}function Ki(t){t._trackId++,t._depsLength=0}function Gi(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)ro(t.deps[e],t);t.deps.length=t._depsLength}}function ro(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Xt=!0,Tr=0;const io=[];function ve(){io.push(Xt),Xt=!1}function be(){const t=io.pop();Xt=t===void 0?!0:t}function ci(){Tr++}function ui(){for(Tr--;!Tr&&Nr.length;)Nr.shift()()}function ao(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&ro(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Nr=[];function oo(t,e,n){ci();for(const r of t.keys())if(!(!r.allowRecurse&&r._runnings)&&r._dirtyLevel<e&&(!r._runnings||e!==2)){const i=r._dirtyLevel;r._dirtyLevel=e,i===0&&(!r._queryings||e!==2)&&(r.trigger(),r.scheduler&&Nr.push(r.scheduler))}ui()}const so=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Mr=new WeakMap,me=Symbol(""),Rr=Symbol("");function mt(t,e,n){if(Xt&&de){let r=Mr.get(t);r||Mr.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=so(()=>r.delete(n))),ao(de,i)}}function zt(t,e,n,r,i,a){const o=Mr.get(t);if(!o)return;let s=[];if(e==="clear")s=[...o.values()];else if(n==="length"&&M(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!Zt(u)&&u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),e){case"add":M(t)?oi(n)&&s.push(o.get("length")):(s.push(o.get(me)),ke(t)&&s.push(o.get(Rr)));break;case"delete":M(t)||(s.push(o.get(me)),ke(t)&&s.push(o.get(Rr)));break;case"set":ke(t)&&s.push(o.get(me));break}ci();for(const l of s)l&&oo(l,3);ui()}const Bs=ri("__proto__,__v_isRef,__isVue"),lo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Zt)),qi=Ys();function Ys(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=H(this);for(let a=0,o=this.length;a<o;a++)mt(r,"get",a+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(H)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ve(),ci();const r=H(this)[e].apply(this,n);return ui(),be(),r}}),t}function Ws(t){const e=H(this);return mt(e,"has",t),e.hasOwnProperty(t)}class fo{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const i=this._isReadonly,a=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return a;if(n==="__v_raw")return r===(i?a?al:po:a?mo:uo).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=M(e);if(!i){if(o&&U(qi,n))return Reflect.get(qi,n,r);if(n==="hasOwnProperty")return Ws}const s=Reflect.get(e,n,r);return(Zt(n)?lo.has(n):Bs(n))||(i||mt(e,"get",n),a)?s:pt(s)?o&&oi(n)?s:s.value:Y(s)?i?ho(s):pi(s):s}}class co extends fo{constructor(e=!1){super(!1,e)}set(e,n,r,i){let a=e[n];if(!this._shallow){const l=Pe(a);if(!zn(r)&&!Pe(r)&&(a=H(a),r=H(r)),!M(e)&&pt(a)&&!pt(r))return l?!1:(a.value=r,!0)}const o=M(e)&&oi(n)?Number(n)<e.length:U(e,n),s=Reflect.set(e,n,r,i);return e===H(i)&&(o?Qt(r,a)&&zt(e,"set",n,r):zt(e,"add",n,r)),s}deleteProperty(e,n){const r=U(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&zt(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!Zt(n)||!lo.has(n))&&mt(e,"has",n),r}ownKeys(e){return mt(e,"iterate",M(e)?"length":me),Reflect.ownKeys(e)}}class Ks extends fo{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Gs=new co,qs=new Ks,Xs=new co(!0),di=t=>t,tr=t=>Reflect.getPrototypeOf(t);function pn(t,e,n=!1,r=!1){t=t.__v_raw;const i=H(t),a=H(e);n||(Qt(e,a)&&mt(i,"get",e),mt(i,"get",a));const{has:o}=tr(i),s=r?di:n?gi:We;if(o.call(i,e))return s(t.get(e));if(o.call(i,a))return s(t.get(a));t!==i&&t.get(e)}function hn(t,e=!1){const n=this.__v_raw,r=H(n),i=H(t);return e||(Qt(t,i)&&mt(r,"has",t),mt(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function gn(t,e=!1){return t=t.__v_raw,!e&&mt(H(t),"iterate",me),Reflect.get(t,"size",t)}function Xi(t){t=H(t);const e=H(this);return tr(e).has.call(e,t)||(e.add(t),zt(e,"add",t,t)),this}function Ji(t,e){e=H(e);const n=H(this),{has:r,get:i}=tr(n);let a=r.call(n,t);a||(t=H(t),a=r.call(n,t));const o=i.call(n,t);return n.set(t,e),a?Qt(e,o)&&zt(n,"set",t,e):zt(n,"add",t,e),this}function Zi(t){const e=H(this),{has:n,get:r}=tr(e);let i=n.call(e,t);i||(t=H(t),i=n.call(e,t)),r&&r.call(e,t);const a=e.delete(t);return i&&zt(e,"delete",t,void 0),a}function Qi(){const t=H(this),e=t.size!==0,n=t.clear();return e&&zt(t,"clear",void 0,void 0),n}function vn(t,e){return function(r,i){const a=this,o=a.__v_raw,s=H(o),l=e?di:t?gi:We;return!t&&mt(s,"iterate",me),o.forEach((c,u)=>r.call(i,l(c),l(u),a))}}function bn(t,e,n){return function(...r){const i=this.__v_raw,a=H(i),o=ke(a),s=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?di:e?gi:We;return!e&&mt(a,"iterate",l?Rr:me),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[u(m[0]),u(m[1])]:u(m),done:v}},[Symbol.iterator](){return this}}}}function Yt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Js(){const t={get(a){return pn(this,a)},get size(){return gn(this)},has:hn,add:Xi,set:Ji,delete:Zi,clear:Qi,forEach:vn(!1,!1)},e={get(a){return pn(this,a,!1,!0)},get size(){return gn(this)},has:hn,add:Xi,set:Ji,delete:Zi,clear:Qi,forEach:vn(!1,!0)},n={get(a){return pn(this,a,!0)},get size(){return gn(this,!0)},has(a){return hn.call(this,a,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:vn(!0,!1)},r={get(a){return pn(this,a,!0,!0)},get size(){return gn(this,!0)},has(a){return hn.call(this,a,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:vn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{t[a]=bn(a,!1,!1),n[a]=bn(a,!0,!1),e[a]=bn(a,!1,!0),r[a]=bn(a,!0,!0)}),[t,n,e,r]}const[Zs,Qs,tl,el]=Js();function mi(t,e){const n=e?t?el:tl:t?Qs:Zs;return(r,i,a)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(U(n,i)&&i in r?n:r,i,a)}const nl={get:mi(!1,!1)},rl={get:mi(!1,!0)},il={get:mi(!0,!1)},uo=new WeakMap,mo=new WeakMap,po=new WeakMap,al=new WeakMap;function ol(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sl(t){return t.__v_skip||!Object.isExtensible(t)?0:ol(Is(t))}function pi(t){return Pe(t)?t:hi(t,!1,Gs,nl,uo)}function ll(t){return hi(t,!1,Xs,rl,mo)}function ho(t){return hi(t,!0,qs,il,po)}function hi(t,e,n,r,i){if(!Y(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const a=i.get(t);if(a)return a;const o=sl(t);if(o===0)return t;const s=new Proxy(t,o===2?r:n);return i.set(t,s),s}function Oe(t){return Pe(t)?Oe(t.__v_raw):!!(t&&t.__v_isReactive)}function Pe(t){return!!(t&&t.__v_isReadonly)}function zn(t){return!!(t&&t.__v_isShallow)}function go(t){return Oe(t)||Pe(t)}function H(t){const e=t&&t.__v_raw;return e?H(e):t}function vo(t){return jn(t,"__v_skip",!0),t}const We=t=>Y(t)?pi(t):t,gi=t=>Y(t)?ho(t):t;class bo{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new fi(()=>e(this._value),()=>Lr(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=H(this);return yo(e),(!e._cacheable||e.effect.dirty)&&Qt(e._value,e._value=e.effect.run())&&Lr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function fl(t,e,n=!1){let r,i;const a=F(t);return a?(r=t,i=_t):(r=t.get,i=t.set),new bo(r,i,a||!i,n)}function yo(t){Xt&&de&&(t=H(t),ao(de,t.dep||(t.dep=so(()=>t.dep=void 0,t instanceof bo?t:void 0))))}function Lr(t,e=3,n){t=H(t);const r=t.dep;r&&oo(r,e)}function pt(t){return!!(t&&t.__v_isRef===!0)}function Ke(t){return cl(t,!1)}function cl(t,e){return pt(t)?t:new ul(t,e)}class ul{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:H(e),this._value=n?e:We(e)}get value(){return yo(this),this._value}set value(e){const n=this.__v_isShallow||zn(e)||Pe(e);e=n?e:H(e),Qt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:We(e),Lr(this,3))}}function dl(t){return pt(t)?t.value:t}const ml={get:(t,e,n)=>dl(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return pt(i)&&!pt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function _o(t){return Oe(t)?t:new Proxy(t,ml)}function Jt(t,e,n,r){let i;try{i=r?t(...r):t()}catch(a){er(a,e,n)}return i}function Et(t,e,n,r){if(F(t)){const a=Jt(t,e,n,r);return a&&Ja(a)&&a.catch(o=>{er(o,e,n)}),a}const i=[];for(let a=0;a<t.length;a++)i.push(Et(t[a],e,n,r));return i}function er(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let a=e.parent;const o=e.proxy,s=`https://vuejs.org/errors/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,s)===!1)return}a=a.parent}const l=e.appContext.config.errorHandler;if(l){Jt(l,null,10,[t,o,s]);return}}pl(t,n,i,r)}function pl(t,e,n,r=!0){console.error(t)}let Ge=!1,Fr=!1;const ot=[];let Nt=0;const Ee=[];let jt=null,se=0;const xo=Promise.resolve();let vi=null;function hl(t){const e=vi||xo;return t?e.then(this?t.bind(this):t):e}function gl(t){let e=Nt+1,n=ot.length;for(;e<n;){const r=e+n>>>1,i=ot[r],a=qe(i);a<t||a===t&&i.pre?e=r+1:n=r}return e}function bi(t){(!ot.length||!ot.includes(t,Ge&&t.allowRecurse?Nt+1:Nt))&&(t.id==null?ot.push(t):ot.splice(gl(t.id),0,t),wo())}function wo(){!Ge&&!Fr&&(Fr=!0,vi=xo.then(ko))}function vl(t){const e=ot.indexOf(t);e>Nt&&ot.splice(e,1)}function bl(t){M(t)?Ee.push(...t):(!jt||!jt.includes(t,t.allowRecurse?se+1:se))&&Ee.push(t),wo()}function ta(t,e,n=Ge?Nt+1:0){for(;n<ot.length;n++){const r=ot[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ot.splice(n,1),n--,r()}}}function Ao(t){if(Ee.length){const e=[...new Set(Ee)];if(Ee.length=0,jt){jt.push(...e);return}for(jt=e,jt.sort((n,r)=>qe(n)-qe(r)),se=0;se<jt.length;se++)jt[se]();jt=null,se=0}}const qe=t=>t.id==null?1/0:t.id,yl=(t,e)=>{const n=qe(t)-qe(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ko(t){Fr=!1,Ge=!0,ot.sort(yl);try{for(Nt=0;Nt<ot.length;Nt++){const e=ot[Nt];e&&e.active!==!1&&Jt(e,null,14)}}finally{Nt=0,ot.length=0,Ao(),Ge=!1,vi=null,(ot.length||Ee.length)&&ko()}}function _l(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||W;let i=n;const a=e.startsWith("update:"),o=a&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[u]||W;v&&(i=n.map(w=>nt(w)?w.trim():w)),m&&(i=n.map($n))}let s,l=r[s=vr(e)]||r[s=vr(Rt(e))];!l&&a&&(l=r[s=vr(Me(e))]),l&&Et(l,t,6,i);const c=r[s+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,Et(c,t,6,i)}}function Oo(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const a=t.emits;let o={},s=!1;if(!F(t)){const l=c=>{const u=Oo(c,e,!0);u&&(s=!0,at(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!a&&!s?(Y(t)&&r.set(t,null),null):(M(a)?a.forEach(l=>o[l]=null):at(o,a),Y(t)&&r.set(t,o),o)}function nr(t,e){return!t||!qn(e)?!1:(e=e.slice(2).replace(/Once$/,""),U(t,e[0].toLowerCase()+e.slice(1))||U(t,Me(e))||U(t,e))}let xt=null,rr=null;function Dn(t){const e=xt;return xt=t,rr=t&&t.type.__scopeId||null,e}function yi(t){rr=t}function _i(){rr=null}function xl(t,e=xt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&ua(-1);const a=Dn(e);let o;try{o=t(...i)}finally{Dn(a),r._d&&ua(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function _r(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:a,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:m,data:v,setupState:w,ctx:$,inheritAttrs:R}=t;let D,A;const S=Dn(t);try{if(n.shapeFlag&4){const j=i||r,P=j;D=Tt(u.call(P,j,m,a,w,v,$)),A=l}else{const j=e;D=Tt(j.length>1?j(a,{attrs:l,slots:s,emit:c}):j(a,null)),A=e.props?l:wl(l)}}catch(j){Ve.length=0,er(j,t,1),D=et(Xe)}let I=D;if(A&&R!==!1){const j=Object.keys(A),{shapeFlag:P}=I;j.length&&P&7&&(o&&j.some(ii)&&(A=Al(A,o)),I=Ie(I,A))}return n.dirs&&(I=Ie(I),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&(I.transition=n.transition),D=I,Dn(S),D}const wl=t=>{let e;for(const n in t)(n==="class"||n==="style"||qn(n))&&((e||(e={}))[n]=t[n]);return e},Al=(t,e)=>{const n={};for(const r in t)(!ii(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function kl(t,e,n){const{props:r,children:i,component:a}=t,{props:o,children:s,patchFlag:l}=e,c=a.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ea(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let m=0;m<u.length;m++){const v=u[m];if(o[v]!==r[v]&&!nr(c,v))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ea(r,o,c):!0:!!o;return!1}function ea(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(e[a]!==t[a]&&!nr(n,a))return!0}return!1}function Ol({vnode:t,parent:e},n){if(n)for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Eo="components";function So(t,e){return Sl(Eo,t,!0,e)||t}const El=Symbol.for("v-ndc");function Sl(t,e,n=!0,r=!1){const i=xt||st;if(i){const a=i.type;if(t===Eo){const s=Of(a,!1);if(s&&(s===e||s===Rt(e)||s===Zn(Rt(e))))return a}const o=na(i[t]||a[t],e)||na(i.appContext[t],e);return!o&&r?a:o}}function na(t,e){return t&&(t[e]||t[Rt(e)]||t[Zn(Rt(e))])}const Cl=t=>t.__isSuspense;function Pl(t,e){e&&e.pendingBranch?M(t)?e.effects.push(...t):e.effects.push(t):bl(t)}const Il=Symbol.for("v-scx"),Tl=()=>Mn(Il),yn={};function Tn(t,e,n){return Co(t,e,n)}function Co(t,e,{immediate:n,deep:r,flush:i,once:a,onTrack:o,onTrigger:s}=W){if(e&&a){const P=e;e=(...Q)=>{P(...Q),j()}}const l=st,c=P=>r===!0?P:fe(P,r===!1?1:void 0);let u,m=!1,v=!1;if(pt(t)?(u=()=>t.value,m=zn(t)):Oe(t)?(u=()=>c(t),m=!0):M(t)?(v=!0,m=t.some(P=>Oe(P)||zn(P)),u=()=>t.map(P=>{if(pt(P))return P.value;if(Oe(P))return c(P);if(F(P))return Jt(P,l,2)})):F(t)?e?u=()=>Jt(t,l,2):u=()=>(w&&w(),Et(t,l,3,[$])):u=_t,e&&r){const P=u;u=()=>fe(P())}let w,$=P=>{w=I.onStop=()=>{Jt(P,l,4),w=I.onStop=void 0}},R;if(sr)if($=_t,e?n&&Et(e,l,3,[u(),v?[]:void 0,$]):u(),i==="sync"){const P=Tl();R=P.__watcherHandles||(P.__watcherHandles=[])}else return _t;let D=v?new Array(t.length).fill(yn):yn;const A=()=>{if(!(!I.active||!I.dirty))if(e){const P=I.run();(r||m||(v?P.some((Q,tt)=>Qt(Q,D[tt])):Qt(P,D)))&&(w&&w(),Et(e,l,3,[P,D===yn?void 0:v&&D[0]===yn?[]:D,$]),D=P)}else I.run()};A.allowRecurse=!!e;let S;i==="sync"?S=A:i==="post"?S=()=>ut(A,l&&l.suspense):(A.pre=!0,l&&(A.id=l.uid),S=()=>bi(A));const I=new fi(u,_t,S),j=()=>{I.stop(),l&&l.scope&&ai(l.scope.effects,I)};return e?n?A():D=I.run():i==="post"?ut(I.run.bind(I),l&&l.suspense):I.run(),R&&R.push(j),j}function Nl(t,e,n){const r=this.proxy,i=nt(t)?t.includes(".")?Po(r,t):()=>r[t]:t.bind(r,r);let a;F(e)?a=e:(a=e.handler,n=e);const o=st;Te(this);const s=Co(i,a.bind(r),n);return o?Te(o):pe(),s}function Po(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function fe(t,e,n=0,r){if(!Y(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),pt(t))fe(t.value,e,n,r);else if(M(t))for(let i=0;i<t.length;i++)fe(t[i],e,n,r);else if(Xn(t)||ke(t))t.forEach(i=>{fe(i,e,n,r)});else if(Qa(t))for(const i in t)fe(t[i],e,n,r);return t}function Ue(t,e){const n=xt;if(n===null)return t;const r=lr(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let a=0;a<e.length;a++){let[o,s,l,c=W]=e[a];o&&(F(o)&&(o={mounted:o,updated:o}),o.deep&&fe(s),i.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return t}function ae(t,e,n,r){const i=t.dirs,a=e&&e.dirs;for(let o=0;o<i.length;o++){const s=i[o];a&&(s.oldValue=a[o].value);let l=s.dir[r];l&&(ve(),Et(l,n,8,[t.el,s,t,e]),be())}}/*! #__NO_SIDE_EFFECTS__ */function Ml(t,e){return F(t)?at({name:t.name},e,{setup:t}):t}const Nn=t=>!!t.type.__asyncLoader,Io=t=>t.type.__isKeepAlive;function Rl(t,e){To(t,"a",e)}function Ll(t,e){To(t,"da",e)}function To(t,e,n=st){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ir(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Io(i.parent.vnode)&&Fl(r,e,n,i),i=i.parent}}function Fl(t,e,n,r){const i=ir(e,t,r,!0);Mo(()=>{ai(r[e],i)},n)}function ir(t,e,n=st,r=!1){if(n){const i=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ve(),Te(n);const s=Et(e,n,t,o);return pe(),be(),s});return r?i.unshift(a):i.push(a),a}}const Vt=t=>(e,n=st)=>(!sr||t==="sp")&&ir(t,(...r)=>e(...r),n),jl=Vt("bm"),No=Vt("m"),$l=Vt("bu"),zl=Vt("u"),Dl=Vt("bum"),Mo=Vt("um"),Ul=Vt("sp"),Hl=Vt("rtg"),Vl=Vt("rtc");function Bl(t,e=st){ir("ec",t,e)}function Yl(t,e,n,r){let i;const a=n&&n[r];if(M(t)||nt(t)){i=new Array(t.length);for(let o=0,s=t.length;o<s;o++)i[o]=e(t[o],o,void 0,a&&a[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,a&&a[o])}else if(Y(t))if(t[Symbol.iterator])i=Array.from(t,(o,s)=>e(o,s,void 0,a&&a[s]));else{const o=Object.keys(t);i=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];i[s]=e(t[c],c,s,a&&a[s])}}else i=[];return n&&(n[r]=i),i}const jr=t=>t?Yo(t)?lr(t)||t.proxy:jr(t.parent):null,He=at(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>jr(t.parent),$root:t=>jr(t.root),$emit:t=>t.emit,$options:t=>xi(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,bi(t.update)}),$nextTick:t=>t.n||(t.n=hl.bind(t.proxy)),$watch:t=>Nl.bind(t)}),xr=(t,e)=>t!==W&&!t.__isScriptSetup&&U(t,e),Wl={get({_:t},e){const{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:l}=t;let c;if(e[0]!=="$"){const w=o[e];if(w!==void 0)switch(w){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return a[e]}else{if(xr(r,e))return o[e]=1,r[e];if(i!==W&&U(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&U(c,e))return o[e]=3,a[e];if(n!==W&&U(n,e))return o[e]=4,n[e];$r&&(o[e]=0)}}const u=He[e];let m,v;if(u)return e==="$attrs"&&mt(t,"get",e),u(t);if((m=s.__cssModules)&&(m=m[e]))return m;if(n!==W&&U(n,e))return o[e]=4,n[e];if(v=l.config.globalProperties,U(v,e))return v[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:a}=t;return xr(i,e)?(i[e]=n,!0):r!==W&&U(r,e)?(r[e]=n,!0):U(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(a[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:a}},o){let s;return!!n[o]||t!==W&&U(t,o)||xr(e,o)||(s=a[0])&&U(s,o)||U(r,o)||U(He,o)||U(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:U(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ra(t){return M(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let $r=!0;function Kl(t){const e=xi(t),n=t.proxy,r=t.ctx;$r=!1,e.beforeCreate&&ia(e.beforeCreate,t,"bc");const{data:i,computed:a,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:m,mounted:v,beforeUpdate:w,updated:$,activated:R,deactivated:D,beforeDestroy:A,beforeUnmount:S,destroyed:I,unmounted:j,render:P,renderTracked:Q,renderTriggered:tt,errorCaptured:bt,serverPrefetch:yt,expose:Lt,inheritAttrs:Le,components:cn,directives:un,filters:pr}=e;if(c&&Gl(c,r,null),o)for(const J in o){const B=o[J];F(B)&&(r[J]=B.bind(n))}if(i){const J=i.call(n,n);Y(J)&&(t.data=pi(J))}if($r=!0,a)for(const J in a){const B=a[J],re=F(B)?B.bind(n,n):F(B.get)?B.get.bind(n,n):_t,dn=!F(B)&&F(B.set)?B.set.bind(n):_t,ie=Gt({get:re,set:dn});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>ie.value,set:St=>ie.value=St})}if(s)for(const J in s)Ro(s[J],r,n,J);if(l){const J=F(l)?l.call(n):l;Reflect.ownKeys(J).forEach(B=>{tf(B,J[B])})}u&&ia(u,t,"c");function lt(J,B){M(B)?B.forEach(re=>J(re.bind(n))):B&&J(B.bind(n))}if(lt(jl,m),lt(No,v),lt($l,w),lt(zl,$),lt(Rl,R),lt(Ll,D),lt(Bl,bt),lt(Vl,Q),lt(Hl,tt),lt(Dl,S),lt(Mo,j),lt(Ul,yt),M(Lt))if(Lt.length){const J=t.exposed||(t.exposed={});Lt.forEach(B=>{Object.defineProperty(J,B,{get:()=>n[B],set:re=>n[B]=re})})}else t.exposed||(t.exposed={});P&&t.render===_t&&(t.render=P),Le!=null&&(t.inheritAttrs=Le),cn&&(t.components=cn),un&&(t.directives=un)}function Gl(t,e,n=_t){M(t)&&(t=zr(t));for(const r in t){const i=t[r];let a;Y(i)?"default"in i?a=Mn(i.from||r,i.default,!0):a=Mn(i.from||r):a=Mn(i),pt(a)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function ia(t,e,n){Et(M(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ro(t,e,n,r){const i=r.includes(".")?Po(n,r):()=>n[r];if(nt(t)){const a=e[t];F(a)&&Tn(i,a)}else if(F(t))Tn(i,t.bind(n));else if(Y(t))if(M(t))t.forEach(a=>Ro(a,e,n,r));else{const a=F(t.handler)?t.handler.bind(n):e[t.handler];F(a)&&Tn(i,a,t)}}function xi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=t.appContext,s=a.get(e);let l;return s?l=s:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>Un(l,c,o,!0)),Un(l,e,o)),Y(e)&&a.set(e,l),l}function Un(t,e,n,r=!1){const{mixins:i,extends:a}=e;a&&Un(t,a,n,!0),i&&i.forEach(o=>Un(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const s=ql[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const ql={data:aa,props:oa,emits:oa,methods:ze,computed:ze,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:ze,directives:ze,watch:Jl,provide:aa,inject:Xl};function aa(t,e){return e?t?function(){return at(F(t)?t.call(this,this):t,F(e)?e.call(this,this):e)}:e:t}function Xl(t,e){return ze(zr(t),zr(e))}function zr(t){if(M(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ft(t,e){return t?[...new Set([].concat(t,e))]:e}function ze(t,e){return t?at(Object.create(null),t,e):e}function oa(t,e){return t?M(t)&&M(e)?[...new Set([...t,...e])]:at(Object.create(null),ra(t),ra(e??{})):e}function Jl(t,e){if(!t)return e;if(!e)return t;const n=at(Object.create(null),t);for(const r in e)n[r]=ft(t[r],e[r]);return n}function Lo(){return{app:null,config:{isNativeTag:Cs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zl=0;function Ql(t,e){return function(r,i=null){F(r)||(r=at({},r)),i!=null&&!Y(i)&&(i=null);const a=Lo(),o=new WeakSet;let s=!1;const l=a.app={_uid:Zl++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:Cf,get config(){return a.config},set config(c){},use(c,...u){return o.has(c)||(c&&F(c.install)?(o.add(c),c.install(l,...u)):F(c)&&(o.add(c),c(l,...u))),l},mixin(c){return a.mixins.includes(c)||a.mixins.push(c),l},component(c,u){return u?(a.components[c]=u,l):a.components[c]},directive(c,u){return u?(a.directives[c]=u,l):a.directives[c]},mount(c,u,m){if(!s){const v=et(r,i);return v.appContext=a,m===!0?m="svg":m===!1&&(m=void 0),u&&e?e(v,c):t(v,c,m),s=!0,l._container=c,c.__vue_app__=l,lr(v.component)||v.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return a.provides[c]=u,l},runWithContext(c){Hn=l;try{return c()}finally{Hn=null}}};return l}}let Hn=null;function tf(t,e){if(st){let n=st.provides;const r=st.parent&&st.parent.provides;r===n&&(n=st.provides=Object.create(r)),n[t]=e}}function Mn(t,e,n=!1){const r=st||xt;if(r||Hn){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Hn._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&F(e)?e.call(r&&r.proxy):e}}function ef(t,e,n,r=!1){const i={},a={};jn(a,or,1),t.propsDefaults=Object.create(null),Fo(t,e,i,a);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:ll(i):t.type.props?t.props=i:t.props=a,t.attrs=a}function nf(t,e,n,r){const{props:i,attrs:a,vnode:{patchFlag:o}}=t,s=H(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let m=0;m<u.length;m++){let v=u[m];if(nr(t.emitsOptions,v))continue;const w=e[v];if(l)if(U(a,v))w!==a[v]&&(a[v]=w,c=!0);else{const $=Rt(v);i[$]=Dr(l,s,$,w,t,!1)}else w!==a[v]&&(a[v]=w,c=!0)}}}else{Fo(t,e,i,a)&&(c=!0);let u;for(const m in s)(!e||!U(e,m)&&((u=Me(m))===m||!U(e,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(i[m]=Dr(l,s,m,void 0,t,!0)):delete i[m]);if(a!==s)for(const m in a)(!e||!U(e,m))&&(delete a[m],c=!0)}c&&zt(t,"set","$attrs")}function Fo(t,e,n,r){const[i,a]=t.propsOptions;let o=!1,s;if(e)for(let l in e){if(Pn(l))continue;const c=e[l];let u;i&&U(i,u=Rt(l))?!a||!a.includes(u)?n[u]=c:(s||(s={}))[u]=c:nr(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(a){const l=H(n),c=s||W;for(let u=0;u<a.length;u++){const m=a[u];n[m]=Dr(i,l,m,c[m],t,!U(c,m))}}return o}function Dr(t,e,n,r,i,a){const o=t[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&F(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(Te(i),r=c[n]=l.call(null,e),pe())}else r=l}o[0]&&(a&&!s?r=!1:o[1]&&(r===""||r===Me(n))&&(r=!0))}return r}function jo(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const a=t.props,o={},s=[];let l=!1;if(!F(t)){const u=m=>{l=!0;const[v,w]=jo(m,e,!0);at(o,v),w&&s.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!a&&!l)return Y(t)&&r.set(t,Ae),Ae;if(M(a))for(let u=0;u<a.length;u++){const m=Rt(a[u]);sa(m)&&(o[m]=W)}else if(a)for(const u in a){const m=Rt(u);if(sa(m)){const v=a[u],w=o[m]=M(v)||F(v)?{type:v}:at({},v);if(w){const $=ca(Boolean,w.type),R=ca(String,w.type);w[0]=$>-1,w[1]=R<0||$<R,($>-1||U(w,"default"))&&s.push(m)}}}const c=[o,s];return Y(t)&&r.set(t,c),c}function sa(t){return t[0]!=="$"}function la(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function fa(t,e){return la(t)===la(e)}function ca(t,e){return M(e)?e.findIndex(n=>fa(n,t)):F(e)&&fa(e,t)?0:-1}const $o=t=>t[0]==="_"||t==="$stable",wi=t=>M(t)?t.map(Tt):[Tt(t)],rf=(t,e,n)=>{if(e._n)return e;const r=xl((...i)=>wi(e(...i)),n);return r._c=!1,r},zo=(t,e,n)=>{const r=t._ctx;for(const i in t){if($o(i))continue;const a=t[i];if(F(a))e[i]=rf(i,a,r);else if(a!=null){const o=wi(a);e[i]=()=>o}}},Do=(t,e)=>{const n=wi(e);t.slots.default=()=>n},af=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=H(e),jn(e,"_",n)):zo(e,t.slots={})}else t.slots={},e&&Do(t,e);jn(t.slots,or,1)},of=(t,e,n)=>{const{vnode:r,slots:i}=t;let a=!0,o=W;if(r.shapeFlag&32){const s=e._;s?n&&s===1?a=!1:(at(i,e),!n&&s===1&&delete i._):(a=!e.$stable,zo(e,i)),o=e}else e&&(Do(t,e),o={default:1});if(a)for(const s in i)!$o(s)&&o[s]==null&&delete i[s]};function Ur(t,e,n,r,i=!1){if(M(t)){t.forEach((v,w)=>Ur(v,e&&(M(e)?e[w]:e),n,r,i));return}if(Nn(r)&&!i)return;const a=r.shapeFlag&4?lr(r.component)||r.component.proxy:r.el,o=i?null:a,{i:s,r:l}=t,c=e&&e.r,u=s.refs===W?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(nt(c)?(u[c]=null,U(m,c)&&(m[c]=null)):pt(c)&&(c.value=null)),F(l))Jt(l,s,12,[o,u]);else{const v=nt(l),w=pt(l);if(v||w){const $=()=>{if(t.f){const R=v?U(m,l)?m[l]:u[l]:l.value;i?M(R)&&ai(R,a):M(R)?R.includes(a)||R.push(a):v?(u[l]=[a],U(m,l)&&(m[l]=u[l])):(l.value=[a],t.k&&(u[t.k]=l.value))}else v?(u[l]=o,U(m,l)&&(m[l]=o)):w&&(l.value=o,t.k&&(u[t.k]=o))};o?($.id=-1,ut($,n)):$()}}}const ut=Pl;function sf(t){return lf(t)}function lf(t,e){const n=to();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:v,setScopeId:w=_t,insertStaticContent:$}=t,R=(f,d,p,h=null,g=null,_=null,k=void 0,y=null,x=!!d.dynamicChildren)=>{if(f===d)return;f&&!je(f,d)&&(h=mn(f),St(f,g,_,!0),f=null),d.patchFlag===-2&&(x=!1,d.dynamicChildren=null);const{type:b,ref:E,shapeFlag:N}=d;switch(b){case ar:D(f,d,p,h);break;case Xe:A(f,d,p,h);break;case Ar:f==null&&S(d,p,h,k);break;case At:cn(f,d,p,h,g,_,k,y,x);break;default:N&1?P(f,d,p,h,g,_,k,y,x):N&6?un(f,d,p,h,g,_,k,y,x):(N&64||N&128)&&b.process(f,d,p,h,g,_,k,y,x,ye)}E!=null&&g&&Ur(E,f&&f.ref,_,d||f,!d)},D=(f,d,p,h)=>{if(f==null)r(d.el=s(d.children),p,h);else{const g=d.el=f.el;d.children!==f.children&&c(g,d.children)}},A=(f,d,p,h)=>{f==null?r(d.el=l(d.children||""),p,h):d.el=f.el},S=(f,d,p,h)=>{[f.el,f.anchor]=$(f.children,d,p,h,f.el,f.anchor)},I=({el:f,anchor:d},p,h)=>{let g;for(;f&&f!==d;)g=v(f),r(f,p,h),f=g;r(d,p,h)},j=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=v(f),i(f),f=p;i(d)},P=(f,d,p,h,g,_,k,y,x)=>{d.type==="svg"?k="svg":d.type==="math"&&(k="mathml"),f==null?Q(d,p,h,g,_,k,y,x):yt(f,d,g,_,k,y,x)},Q=(f,d,p,h,g,_,k,y)=>{let x,b;const{props:E,shapeFlag:N,transition:T,dirs:L}=f;if(x=f.el=o(f.type,_,E&&E.is,E),N&8?u(x,f.children):N&16&&bt(f.children,x,null,h,g,wr(f,_),k,y),L&&ae(f,null,h,"created"),tt(x,f,f.scopeId,k,h),E){for(const V in E)V!=="value"&&!Pn(V)&&a(x,V,null,E[V],_,f.children,h,g,Ft);"value"in E&&a(x,"value",null,E.value,_),(b=E.onVnodeBeforeMount)&&Pt(b,h,f)}L&&ae(f,null,h,"beforeMount");const z=ff(g,T);z&&T.beforeEnter(x),r(x,d,p),((b=E&&E.onVnodeMounted)||z||L)&&ut(()=>{b&&Pt(b,h,f),z&&T.enter(x),L&&ae(f,null,h,"mounted")},g)},tt=(f,d,p,h,g)=>{if(p&&w(f,p),h)for(let _=0;_<h.length;_++)w(f,h[_]);if(g){let _=g.subTree;if(d===_){const k=g.vnode;tt(f,k,k.scopeId,k.slotScopeIds,g.parent)}}},bt=(f,d,p,h,g,_,k,y,x=0)=>{for(let b=x;b<f.length;b++){const E=f[b]=y?Kt(f[b]):Tt(f[b]);R(null,E,d,p,h,g,_,k,y)}},yt=(f,d,p,h,g,_,k)=>{const y=d.el=f.el;let{patchFlag:x,dynamicChildren:b,dirs:E}=d;x|=f.patchFlag&16;const N=f.props||W,T=d.props||W;let L;if(p&&oe(p,!1),(L=T.onVnodeBeforeUpdate)&&Pt(L,p,d,f),E&&ae(d,f,p,"beforeUpdate"),p&&oe(p,!0),b?Lt(f.dynamicChildren,b,y,p,h,wr(d,g),_):k||B(f,d,y,null,p,h,wr(d,g),_,!1),x>0){if(x&16)Le(y,d,N,T,p,h,g);else if(x&2&&N.class!==T.class&&a(y,"class",null,T.class,g),x&4&&a(y,"style",N.style,T.style,g),x&8){const z=d.dynamicProps;for(let V=0;V<z.length;V++){const X=z[V],it=N[X],wt=T[X];(wt!==it||X==="value")&&a(y,X,it,wt,g,f.children,p,h,Ft)}}x&1&&f.children!==d.children&&u(y,d.children)}else!k&&b==null&&Le(y,d,N,T,p,h,g);((L=T.onVnodeUpdated)||E)&&ut(()=>{L&&Pt(L,p,d,f),E&&ae(d,f,p,"updated")},h)},Lt=(f,d,p,h,g,_,k)=>{for(let y=0;y<d.length;y++){const x=f[y],b=d[y],E=x.el&&(x.type===At||!je(x,b)||x.shapeFlag&70)?m(x.el):p;R(x,b,E,null,h,g,_,k,!0)}},Le=(f,d,p,h,g,_,k)=>{if(p!==h){if(p!==W)for(const y in p)!Pn(y)&&!(y in h)&&a(f,y,p[y],null,k,d.children,g,_,Ft);for(const y in h){if(Pn(y))continue;const x=h[y],b=p[y];x!==b&&y!=="value"&&a(f,y,b,x,k,d.children,g,_,Ft)}"value"in h&&a(f,"value",p.value,h.value,k)}},cn=(f,d,p,h,g,_,k,y,x)=>{const b=d.el=f?f.el:s(""),E=d.anchor=f?f.anchor:s("");let{patchFlag:N,dynamicChildren:T,slotScopeIds:L}=d;L&&(y=y?y.concat(L):L),f==null?(r(b,p,h),r(E,p,h),bt(d.children,p,E,g,_,k,y,x)):N>0&&N&64&&T&&f.dynamicChildren?(Lt(f.dynamicChildren,T,p,g,_,k,y),(d.key!=null||g&&d===g.subTree)&&Uo(f,d,!0)):B(f,d,p,E,g,_,k,y,x)},un=(f,d,p,h,g,_,k,y,x)=>{d.slotScopeIds=y,f==null?d.shapeFlag&512?g.ctx.activate(d,p,h,k,x):pr(d,p,h,g,_,k,x):zi(f,d,x)},pr=(f,d,p,h,g,_,k)=>{const y=f.component=_f(f,h,g);if(Io(f)&&(y.ctx.renderer=ye),xf(y),y.asyncDep){if(g&&g.registerDep(y,lt),!f.el){const x=y.subTree=et(Xe);A(null,x,d,p)}}else lt(y,f,d,p,g,_,k)},zi=(f,d,p)=>{const h=d.component=f.component;if(kl(f,d,p))if(h.asyncDep&&!h.asyncResolved){J(h,d,p);return}else h.next=d,vl(h.update),h.effect.dirty=!0,h.update();else d.el=f.el,h.vnode=d},lt=(f,d,p,h,g,_,k)=>{const y=()=>{if(f.isMounted){let{next:E,bu:N,u:T,parent:L,vnode:z}=f;{const _e=Ho(f);if(_e){E&&(E.el=z.el,J(f,E,k)),_e.asyncDep.then(()=>{f.isUnmounted||y()});return}}let V=E,X;oe(f,!1),E?(E.el=z.el,J(f,E,k)):E=z,N&&In(N),(X=E.props&&E.props.onVnodeBeforeUpdate)&&Pt(X,L,E,z),oe(f,!0);const it=_r(f),wt=f.subTree;f.subTree=it,R(wt,it,m(wt.el),mn(wt),f,g,_),E.el=it.el,V===null&&Ol(f,it.el),T&&ut(T,g),(X=E.props&&E.props.onVnodeUpdated)&&ut(()=>Pt(X,L,E,z),g)}else{let E;const{el:N,props:T}=d,{bm:L,m:z,parent:V}=f,X=Nn(d);if(oe(f,!1),L&&In(L),!X&&(E=T&&T.onVnodeBeforeMount)&&Pt(E,V,d),oe(f,!0),N&&gr){const it=()=>{f.subTree=_r(f),gr(N,f.subTree,f,g,null)};X?d.type.__asyncLoader().then(()=>!f.isUnmounted&&it()):it()}else{const it=f.subTree=_r(f);R(null,it,p,h,f,g,_),d.el=it.el}if(z&&ut(z,g),!X&&(E=T&&T.onVnodeMounted)){const it=d;ut(()=>Pt(E,V,it),g)}(d.shapeFlag&256||V&&Nn(V.vnode)&&V.vnode.shapeFlag&256)&&f.a&&ut(f.a,g),f.isMounted=!0,d=p=h=null}},x=f.effect=new fi(y,_t,()=>bi(b),f.scope),b=f.update=()=>{x.dirty&&x.run()};b.id=f.uid,oe(f,!0),b()},J=(f,d,p)=>{d.component=f;const h=f.vnode.props;f.vnode=d,f.next=null,nf(f,d.props,h,p),of(f,d.children,p),ve(),ta(f),be()},B=(f,d,p,h,g,_,k,y,x=!1)=>{const b=f&&f.children,E=f?f.shapeFlag:0,N=d.children,{patchFlag:T,shapeFlag:L}=d;if(T>0){if(T&128){dn(b,N,p,h,g,_,k,y,x);return}else if(T&256){re(b,N,p,h,g,_,k,y,x);return}}L&8?(E&16&&Ft(b,g,_),N!==b&&u(p,N)):E&16?L&16?dn(b,N,p,h,g,_,k,y,x):Ft(b,g,_,!0):(E&8&&u(p,""),L&16&&bt(N,p,h,g,_,k,y,x))},re=(f,d,p,h,g,_,k,y,x)=>{f=f||Ae,d=d||Ae;const b=f.length,E=d.length,N=Math.min(b,E);let T;for(T=0;T<N;T++){const L=d[T]=x?Kt(d[T]):Tt(d[T]);R(f[T],L,p,null,g,_,k,y,x)}b>E?Ft(f,g,_,!0,!1,N):bt(d,p,h,g,_,k,y,x,N)},dn=(f,d,p,h,g,_,k,y,x)=>{let b=0;const E=d.length;let N=f.length-1,T=E-1;for(;b<=N&&b<=T;){const L=f[b],z=d[b]=x?Kt(d[b]):Tt(d[b]);if(je(L,z))R(L,z,p,null,g,_,k,y,x);else break;b++}for(;b<=N&&b<=T;){const L=f[N],z=d[T]=x?Kt(d[T]):Tt(d[T]);if(je(L,z))R(L,z,p,null,g,_,k,y,x);else break;N--,T--}if(b>N){if(b<=T){const L=T+1,z=L<E?d[L].el:h;for(;b<=T;)R(null,d[b]=x?Kt(d[b]):Tt(d[b]),p,z,g,_,k,y,x),b++}}else if(b>T)for(;b<=N;)St(f[b],g,_,!0),b++;else{const L=b,z=b,V=new Map;for(b=z;b<=T;b++){const ht=d[b]=x?Kt(d[b]):Tt(d[b]);ht.key!=null&&V.set(ht.key,b)}let X,it=0;const wt=T-z+1;let _e=!1,Hi=0;const Fe=new Array(wt);for(b=0;b<wt;b++)Fe[b]=0;for(b=L;b<=N;b++){const ht=f[b];if(it>=wt){St(ht,g,_,!0);continue}let Ct;if(ht.key!=null)Ct=V.get(ht.key);else for(X=z;X<=T;X++)if(Fe[X-z]===0&&je(ht,d[X])){Ct=X;break}Ct===void 0?St(ht,g,_,!0):(Fe[Ct-z]=b+1,Ct>=Hi?Hi=Ct:_e=!0,R(ht,d[Ct],p,null,g,_,k,y,x),it++)}const Vi=_e?cf(Fe):Ae;for(X=Vi.length-1,b=wt-1;b>=0;b--){const ht=z+b,Ct=d[ht],Bi=ht+1<E?d[ht+1].el:h;Fe[b]===0?R(null,Ct,p,Bi,g,_,k,y,x):_e&&(X<0||b!==Vi[X]?ie(Ct,p,Bi,2):X--)}}},ie=(f,d,p,h,g=null)=>{const{el:_,type:k,transition:y,children:x,shapeFlag:b}=f;if(b&6){ie(f.component.subTree,d,p,h);return}if(b&128){f.suspense.move(d,p,h);return}if(b&64){k.move(f,d,p,ye);return}if(k===At){r(_,d,p);for(let N=0;N<x.length;N++)ie(x[N],d,p,h);r(f.anchor,d,p);return}if(k===Ar){I(f,d,p);return}if(h!==2&&b&1&&y)if(h===0)y.beforeEnter(_),r(_,d,p),ut(()=>y.enter(_),g);else{const{leave:N,delayLeave:T,afterLeave:L}=y,z=()=>r(_,d,p),V=()=>{N(_,()=>{z(),L&&L()})};T?T(_,z,V):V()}else r(_,d,p)},St=(f,d,p,h=!1,g=!1)=>{const{type:_,props:k,ref:y,children:x,dynamicChildren:b,shapeFlag:E,patchFlag:N,dirs:T}=f;if(y!=null&&Ur(y,null,p,f,!0),E&256){d.ctx.deactivate(f);return}const L=E&1&&T,z=!Nn(f);let V;if(z&&(V=k&&k.onVnodeBeforeUnmount)&&Pt(V,d,f),E&6)Ss(f.component,p,h);else{if(E&128){f.suspense.unmount(p,h);return}L&&ae(f,null,d,"beforeUnmount"),E&64?f.type.remove(f,d,p,g,ye,h):b&&(_!==At||N>0&&N&64)?Ft(b,d,p,!1,!0):(_===At&&N&384||!g&&E&16)&&Ft(x,d,p),h&&Di(f)}(z&&(V=k&&k.onVnodeUnmounted)||L)&&ut(()=>{V&&Pt(V,d,f),L&&ae(f,null,d,"unmounted")},p)},Di=f=>{const{type:d,el:p,anchor:h,transition:g}=f;if(d===At){Es(p,h);return}if(d===Ar){j(f);return}const _=()=>{i(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:k,delayLeave:y}=g,x=()=>k(p,_);y?y(f.el,_,x):x()}else _()},Es=(f,d)=>{let p;for(;f!==d;)p=v(f),i(f),f=p;i(d)},Ss=(f,d,p)=>{const{bum:h,scope:g,update:_,subTree:k,um:y}=f;h&&In(h),g.stop(),_&&(_.active=!1,St(k,f,d,p)),y&&ut(y,d),ut(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ft=(f,d,p,h=!1,g=!1,_=0)=>{for(let k=_;k<f.length;k++)St(f[k],d,p,h,g)},mn=f=>f.shapeFlag&6?mn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Ui=(f,d,p)=>{f==null?d._vnode&&St(d._vnode,null,null,!0):R(d._vnode||null,f,d,null,null,null,p),ta(),Ao(),d._vnode=f},ye={p:R,um:St,m:ie,r:Di,mt:pr,mc:bt,pc:B,pbc:Lt,n:mn,o:t};let hr,gr;return e&&([hr,gr]=e(ye)),{render:Ui,hydrate:hr,createApp:Ql(Ui,hr)}}function wr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function oe({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ff(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Uo(t,e,n=!1){const r=t.children,i=e.children;if(M(r)&&M(i))for(let a=0;a<r.length;a++){const o=r[a];let s=i[a];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[a]=Kt(i[a]),s.el=o.el),n||Uo(o,s)),s.type===ar&&(s.el=o.el)}}function cf(t){const e=t.slice(),n=[0];let r,i,a,o,s;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,t[n[s]]<c?a=s+1:o=s;c<t[n[a]]&&(a>0&&(e[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=e[o];return n}function Ho(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ho(e)}const uf=t=>t.__isTeleport,At=Symbol.for("v-fgt"),ar=Symbol.for("v-txt"),Xe=Symbol.for("v-cmt"),Ar=Symbol.for("v-stc"),Ve=[];let kt=null;function dt(t=!1){Ve.push(kt=t?null:[])}function df(){Ve.pop(),kt=Ve[Ve.length-1]||null}let Je=1;function ua(t){Je+=t}function Vo(t){return t.dynamicChildren=Je>0?kt||Ae:null,df(),Je>0&&kt&&kt.push(t),t}function gt(t,e,n,r,i,a){return Vo(K(t,e,n,r,i,a,!0))}function mf(t,e,n,r,i){return Vo(et(t,e,n,r,i,!0))}function Hr(t){return t?t.__v_isVNode===!0:!1}function je(t,e){return t.type===e.type&&t.key===e.key}const or="__vInternal",Bo=({key:t})=>t??null,Rn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?nt(t)||pt(t)||F(t)?{i:xt,r:t,k:e,f:!!n}:t:null);function K(t,e=null,n=null,r=0,i=null,a=t===At?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bo(e),ref:e&&Rn(e),scopeId:rr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:xt};return s?(Ai(l,n),a&128&&t.normalize(l)):n&&(l.shapeFlag|=nt(n)?8:16),Je>0&&!o&&kt&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&kt.push(l),l}const et=pf;function pf(t,e=null,n=null,r=0,i=null,a=!1){if((!t||t===El)&&(t=Xe),Hr(t)){const s=Ie(t,e,!0);return n&&Ai(s,n),Je>0&&!a&&kt&&(s.shapeFlag&6?kt[kt.indexOf(t)]=s:kt.push(s)),s.patchFlag|=-2,s}if(Ef(t)&&(t=t.__vccOpts),e){e=hf(e);let{class:s,style:l}=e;s&&!nt(s)&&(e.class=li(s)),Y(l)&&(go(l)&&!M(l)&&(l=at({},l)),e.style=si(l))}const o=nt(t)?1:Cl(t)?128:uf(t)?64:Y(t)?4:F(t)?2:0;return K(t,e,n,r,i,o,a,!0)}function hf(t){return t?go(t)||or in t?at({},t):t:null}function Ie(t,e,n=!1){const{props:r,ref:i,patchFlag:a,children:o}=t,s=e?vf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&Bo(s),ref:e&&e.ref?n&&i?M(i)?i.concat(Rn(e)):[i,Rn(e)]:Rn(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==At?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ie(t.ssContent),ssFallback:t.ssFallback&&Ie(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function gf(t=" ",e=0){return et(ar,null,t,e)}function Tt(t){return t==null||typeof t=="boolean"?et(Xe):M(t)?et(At,null,t.slice()):typeof t=="object"?Kt(t):et(ar,null,String(t))}function Kt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ie(t)}function Ai(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(M(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Ai(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(or in e)?e._ctx=xt:i===3&&xt&&(xt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else F(e)?(e={default:e,_ctx:xt},n=32):(e=String(e),r&64?(n=16,e=[gf(e)]):n=8);t.children=e,t.shapeFlag|=n}function vf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=li([e.class,r.class]));else if(i==="style")e.style=si([e.style,r.style]);else if(qn(i)){const a=e[i],o=r[i];o&&a!==o&&!(M(a)&&a.includes(o))&&(e[i]=a?[].concat(a,o):o)}else i!==""&&(e[i]=r[i])}return e}function Pt(t,e,n,r=null){Et(t,e,7,[n,r])}const bf=Lo();let yf=0;function _f(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||bf,a={uid:yf++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Us(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jo(r,i),emitsOptions:Oo(r,i),emit:null,emitted:null,propsDefaults:W,inheritAttrs:r.inheritAttrs,ctx:W,data:W,props:W,attrs:W,slots:W,refs:W,setupState:W,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=_l.bind(null,a),t.ce&&t.ce(a),a}let st=null,ki,Vr;{const t=to(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),a=>{i.length>1?i.forEach(o=>o(a)):i[0](a)}};ki=e("__VUE_INSTANCE_SETTERS__",n=>st=n),Vr=e("__VUE_SSR_SETTERS__",n=>sr=n)}const Te=t=>{ki(t),t.scope.on()},pe=()=>{st&&st.scope.off(),ki(null)};function Yo(t){return t.vnode.shapeFlag&4}let sr=!1;function xf(t,e=!1){e&&Vr(e);const{props:n,children:r}=t.vnode,i=Yo(t);ef(t,n,i,e),af(t,r);const a=i?wf(t,e):void 0;return e&&Vr(!1),a}function wf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=vo(new Proxy(t.ctx,Wl));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?kf(t):null;Te(t),ve();const a=Jt(r,t,0,[t.props,i]);if(be(),pe(),Ja(a)){if(a.then(pe,pe),e)return a.then(o=>{da(t,o,e)}).catch(o=>{er(o,t,0)});t.asyncDep=a}else da(t,a,e)}else Wo(t,e)}function da(t,e,n){F(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Y(e)&&(t.setupState=_o(e)),Wo(t,n)}let ma;function Wo(t,e,n){const r=t.type;if(!t.render){if(!e&&ma&&!r.render){const i=r.template||xi(t).template;if(i){const{isCustomElement:a,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:l}=r,c=at(at({isCustomElement:a,delimiters:s},o),l);r.render=ma(i,c)}}t.render=r.render||_t}{Te(t),ve();try{Kl(t)}finally{be(),pe()}}}function Af(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return mt(t,"get","$attrs"),e[n]}}))}function kf(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Af(t)},slots:t.slots,emit:t.emit,expose:e}}function lr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(_o(vo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in He)return He[n](t)},has(e,n){return n in e||n in He}}))}function Of(t,e=!0){return F(t)?t.displayName||t.name:t.name||e&&t.__name}function Ef(t){return F(t)&&"__vccOpts"in t}const Gt=(t,e)=>fl(t,e,sr);function Sf(t,e,n){const r=arguments.length;return r===2?Y(e)&&!M(e)?Hr(e)?et(t,null,[e]):et(t,e):et(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Hr(n)&&(n=[n]),et(t,e,n))}const Cf="3.4.4",Pf="http://www.w3.org/2000/svg",If="http://www.w3.org/1998/Math/MathML",qt=typeof document<"u"?document:null,pa=qt&&qt.createElement("template"),Tf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?qt.createElementNS(Pf,t):e==="mathml"?qt.createElementNS(If,t):qt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>qt.createTextNode(t),createComment:t=>qt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>qt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,a){const o=n?n.previousSibling:e.lastChild;if(i&&(i===a||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{pa.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const s=pa.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Nf=Symbol("_vtc");function Mf(t,e,n){const r=t[Nf];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Oi=Symbol("_vod"),Rf={beforeMount(t,{value:e},{transition:n}){t[Oi]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):$e(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),$e(t,!0),r.enter(t)):r.leave(t,()=>{$e(t,!1)}):$e(t,e))},beforeUnmount(t,{value:e}){$e(t,e)}};function $e(t,e){t.style.display=e?t[Oi]:"none"}const Lf=Symbol("");function Ff(t,e,n){const r=t.style,i=nt(n);if(n&&!i){if(e&&!nt(e))for(const a in e)n[a]==null&&Br(r,a,"");for(const a in n)Br(r,a,n[a])}else{const a=r.display;if(i){if(e!==n){const o=r[Lf];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");Oi in t&&(r.display=a)}}const ha=/\s*!important$/;function Br(t,e,n){if(M(n))n.forEach(r=>Br(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=jf(t,e);ha.test(n)?t.setProperty(Me(r),n.replace(ha,""),"important"):t[r]=n}}const ga=["Webkit","Moz","ms"],kr={};function jf(t,e){const n=kr[e];if(n)return n;let r=Rt(e);if(r!=="filter"&&r in t)return kr[e]=r;r=Zn(r);for(let i=0;i<ga.length;i++){const a=ga[i]+r;if(a in t)return kr[e]=a}return e}const va="http://www.w3.org/1999/xlink";function $f(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(va,e.slice(6,e.length)):t.setAttributeNS(va,e,n);else{const a=$s(e);n==null||a&&!eo(n)?t.removeAttribute(e):t.setAttribute(e,a?"":n)}}function zf(t,e,n,r,i,a,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,a),t[e]=n??"";return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){t._value=n;const c=s==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=eo(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function le(t,e,n,r){t.addEventListener(e,n,r)}function Df(t,e,n,r){t.removeEventListener(e,n,r)}const ba=Symbol("_vei");function Uf(t,e,n,r,i=null){const a=t[ba]||(t[ba]={}),o=a[e];if(r&&o)o.value=r;else{const[s,l]=Hf(e);if(r){const c=a[e]=Yf(r,i);le(t,s,c,l)}else o&&(Df(t,s,o,l),a[e]=void 0)}}const ya=/(?:Once|Passive|Capture)$/;function Hf(t){let e;if(ya.test(t)){e={};let r;for(;r=t.match(ya);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Me(t.slice(2)),e]}let Or=0;const Vf=Promise.resolve(),Bf=()=>Or||(Vf.then(()=>Or=0),Or=Date.now());function Yf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Et(Wf(r,n.value),e,5,[r])};return n.value=t,n.attached=Bf(),n}function Wf(t,e){if(M(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const _a=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Kf=(t,e,n,r,i,a,o,s,l)=>{const c=i==="svg";e==="class"?Mf(t,r,c):e==="style"?Ff(t,n,r):qn(e)?ii(e)||Uf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Gf(t,e,r,c))?zf(t,e,r,a,o,s,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),$f(t,e,r,c))};function Gf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&_a(e)&&F(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return _a(e)&&nt(n)?!1:e in t}const Vn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return M(e)?n=>In(e,n):e};function qf(t){t.target.composing=!0}function xa(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Se=Symbol("_assign"),Ko={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[Se]=Vn(i);const a=r||i.props&&i.props.type==="number";le(t,e?"change":"input",o=>{if(o.target.composing)return;let s=t.value;n&&(s=s.trim()),a&&(s=$n(s)),t[Se](s)}),n&&le(t,"change",()=>{t.value=t.value.trim()}),e||(le(t,"compositionstart",qf),le(t,"compositionend",xa),le(t,"change",xa))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},a){if(t[Se]=Vn(a),t.composing)return;const o=i||t.type==="number"?$n(t.value):t.value,s=e??"";o!==s&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===s)||(t.value=s))}},Go={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=Xn(e);le(t,"change",()=>{const a=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?$n(Bn(o)):Bn(o));t[Se](t.multiple?i?new Set(a):a:a[0])}),t[Se]=Vn(r)},mounted(t,{value:e}){wa(t,e)},beforeUpdate(t,e,n){t[Se]=Vn(n)},updated(t,{value:e}){wa(t,e)}};function wa(t,e){const n=t.multiple;if(!(n&&!M(e)&&!Xn(e))){for(let r=0,i=t.options.length;r<i;r++){const a=t.options[r],o=Bn(a);if(n)M(e)?a.selected=Ds(e,o)>-1:a.selected=e.has(o);else if(Qn(Bn(a),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Bn(t){return"_value"in t?t._value:t.value}const Xf=at({patchProp:Kf},Tf);let Aa;function Jf(){return Aa||(Aa=sf(Xf))}const Zf=(...t)=>{const e=Jf().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=tc(r);if(!i)return;const a=e._component;!F(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,Qf(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Qf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function tc(t){return nt(t)?document.querySelector(t):t}const an=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},ec={},nc=K("h1",null,"Lista de la compra🛒",-1),rc=[nc];function ic(t,e){return dt(),gt("header",null,rc)}const ac=an(ec,[["render",ic]]),fr=t=>(yi("data-v-8a73d213"),t=t(),_i(),t),oc={class:"nombre"},sc={key:0},lc={key:1},fc=["placeholder"],cc={class:"resto"},uc={key:0},dc={key:1},mc=fr(()=>K("option",{value:"",disabled:""},"Prioridad",-1)),pc=fr(()=>K("option",{value:"baja"},"🟢",-1)),hc=fr(()=>K("option",{value:"media"},"🟡",-1)),gc=fr(()=>K("option",{value:"alta"},"🔴",-1)),vc=[mc,pc,hc,gc],bc={class:"resto"},yc={key:0},_c={key:1},xc={__name:"ItemIndividual",props:{item:Object,index:Number},emits:["eliminarItem","editarItem"],setup(t,{emit:e}){const n=t,r=e,i={alta:"🔴",media:"🟡",baja:"🟢"},a=()=>{r("eliminarItem",n.index)},o=()=>{s.value=!0},s=Ke(!1),l=Ke({producto:n.item.producto,prioridad:n.item.prioridad}),c=()=>{r("editarItem",n.index,l.value),s.value=!1};return(u,m)=>{const v=So("font-awesome-icon");return dt(),gt("article",null,[K("div",oc,[s.value?(dt(),gt("div",lc,[Ue(K("input",{type:"text",placeholder:n.item.producto,"onUpdate:modelValue":m[0]||(m[0]=w=>l.value.producto=w)},null,8,fc),[[Ko,l.value.producto]])])):(dt(),gt("p",sc,br(n.index+1)+" - "+br(n.item.producto),1))]),K("div",cc,[s.value?(dt(),gt("div",dc,[Ue(K("select",{name:"priority","onUpdate:modelValue":m[1]||(m[1]=w=>l.value.prioridad=w)},vc,512),[[Go,l.value.prioridad]])])):(dt(),gt("p",uc,br(i[n.item.prioridad]),1))]),K("div",bc,[s.value?(dt(),gt("div",_c,[K("button",{onClick:c},"Guardar")])):(dt(),gt("div",yc,[K("button",{onClick:a},[et(v,{icon:"trash-can"})]),K("button",{onClick:o},[et(v,{icon:"fa-user-pen"})])]))])])}}},wc=an(xc,[["__scopeId","data-v-8a73d213"]]),Ac={class:"items"},kc={__name:"ListaItems",props:{misCompras:Array},emits:["eliminarItem","editarItem"],setup(t,{emit:e}){const n=t,r=e,i=o=>{r("eliminarItem",o)},a=(o,s)=>{r("editarItem",o,s)};return(o,s)=>(dt(),gt("section",Ac,[(dt(!0),gt(At,null,Yl(n.misCompras,(l,c)=>(dt(),mf(wc,{key:c,index:c,item:l,onEliminarItem:i,onEditarItem:a},null,8,["index","item"]))),128))]))}},Oc=an(kc,[["__scopeId","data-v-871028ae"]]),Ec={},qo=t=>(yi("data-v-00ffcaf6"),t=t(),_i(),t),Sc=qo(()=>K("hr",null,null,-1)),Cc=qo(()=>K("p",null,"Antonio Mas Esteve - 2024",-1)),Pc=[Sc,Cc];function Ic(t,e){return dt(),gt("footer",null,Pc)}const Tc=an(Ec,[["render",Ic],["__scopeId","data-v-00ffcaf6"]]),on=t=>(yi("data-v-2f4ab2dc"),t=t(),_i(),t),Nc=on(()=>K("h4",null,"Nuevo item",-1)),Mc=on(()=>K("option",{value:"",disabled:""},"Prioridad",-1)),Rc=on(()=>K("option",{value:"baja"},"🟢-Baja",-1)),Lc=on(()=>K("option",{value:"media"},"🟡-Media",-1)),Fc=on(()=>K("option",{value:"alta"},"🔴-Alta",-1)),jc=[Mc,Rc,Lc,Fc],$c={__name:"NuevoItem",emits:["agregarItem"],setup(t,{emit:e}){const n=e,r=Ke(""),i=Ke(""),a=()=>{const s={producto:r.value,prioridad:i.value};n("agregarItem",s),r.value="",i.value=""},o=Gt(()=>r.value.length>2&&isNaN(r.value));return(s,l)=>{const c=So("font-awesome-icon");return dt(),gt("section",null,[Nc,Ue(K("input",{type:"text",placeholder:"producto",autofocus:"","onUpdate:modelValue":l[0]||(l[0]=u=>r.value=u)},null,512),[[Ko,r.value]]),Ue(K("select",{name:"priority","onUpdate:modelValue":l[1]||(l[1]=u=>i.value=u)},jc,512),[[Go,i.value]]),Ue(K("button",{onClick:a},[et(c,{icon:"fa-plus"})],512),[[Rf,i.value&&r.value&&o.value]])])}}},zc=an($c,[["__scopeId","data-v-2f4ab2dc"]]),Dc={__name:"App",setup(t){const e=Ke([{producto:"pan",prioridad:"baja"},{producto:"leche",prioridad:"media"},{producto:"manzanas",prioridad:"alta"}]),n=o=>{e.value.push(o),a()},r=o=>{e.value.splice(o,1),a()},i=(o,s)=>{e.value[o]=s,a()};function a(){localStorage.setItem("listado",JSON.stringify(e.value))}return No(()=>{localStorage.getItem("listado")==null&&(e.value=JSON.parse(localStorage.getItem("listado")))}),(o,s)=>(dt(),gt(At,null,[et(ac),et(Oc,{"mis-compras":e.value,onEliminarItem:r,onEditarItem:i},null,8,["mis-compras"]),et(zc,{onAgregarItem:n}),et(Tc)],64))}};function ka(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ka(Object(n),!0).forEach(function(r){rt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ka(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Yn(t){"@babel/helpers - typeof";return Yn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yn(t)}function Uc(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Oa(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Hc(t,e,n){return e&&Oa(t.prototype,e),n&&Oa(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function rt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ei(t,e){return Bc(t)||Wc(t,e)||Xo(t,e)||Gc()}function sn(t){return Vc(t)||Yc(t)||Xo(t)||Kc()}function Vc(t){if(Array.isArray(t))return Yr(t)}function Bc(t){if(Array.isArray(t))return t}function Yc(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Wc(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function Xo(t,e){if(t){if(typeof t=="string")return Yr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yr(t,e)}}function Yr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Kc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ea=function(){},Si={},Jo={},Zo=null,Qo={mark:Ea,measure:Ea};try{typeof window<"u"&&(Si=window),typeof document<"u"&&(Jo=document),typeof MutationObserver<"u"&&(Zo=MutationObserver),typeof performance<"u"&&(Qo=performance)}catch{}var qc=Si.navigator||{},Sa=qc.userAgent,Ca=Sa===void 0?"":Sa,te=Si,q=Jo,Pa=Zo,_n=Qo;te.document;var Bt=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",ts=~Ca.indexOf("MSIE")||~Ca.indexOf("Trident/"),xn,wn,An,kn,On,Dt="___FONT_AWESOME___",Wr=16,es="fa",ns="svg-inline--fa",he="data-fa-i2svg",Kr="data-fa-pseudo-element",Xc="data-fa-pseudo-element-pending",Ci="data-prefix",Pi="data-icon",Ia="fontawesome-i2svg",Jc="async",Zc=["HTML","HEAD","STYLE","SCRIPT"],rs=function(){try{return!0}catch{return!1}}(),G="classic",Z="sharp",Ii=[G,Z];function ln(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[G]}})}var Ze=ln((xn={},rt(xn,G,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),rt(xn,Z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),xn)),Qe=ln((wn={},rt(wn,G,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),rt(wn,Z,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),wn)),tn=ln((An={},rt(An,G,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),rt(An,Z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),An)),Qc=ln((kn={},rt(kn,G,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),rt(kn,Z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),kn)),tu=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,is="fa-layers-text",eu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,nu=ln((On={},rt(On,G,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),rt(On,Z,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),On)),as=[1,2,3,4,5,6,7,8,9,10],ru=as.concat([11,12,13,14,15,16,17,18,19,20]),iu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ce={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},en=new Set;Object.keys(Qe[G]).map(en.add.bind(en));Object.keys(Qe[Z]).map(en.add.bind(en));var au=[].concat(Ii,sn(en),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ce.GROUP,ce.SWAP_OPACITY,ce.PRIMARY,ce.SECONDARY]).concat(as.map(function(t){return"".concat(t,"x")})).concat(ru.map(function(t){return"w-".concat(t)})),Be=te.FontAwesomeConfig||{};function ou(t){var e=q.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function su(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(q&&typeof q.querySelector=="function"){var lu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];lu.forEach(function(t){var e=Ei(t,2),n=e[0],r=e[1],i=su(ou(n));i!=null&&(Be[r]=i)})}var os={styleDefault:"solid",familyDefault:"classic",cssPrefix:es,replacementClass:ns,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Be.familyPrefix&&(Be.cssPrefix=Be.familyPrefix);var Ne=O(O({},os),Be);Ne.autoReplaceSvg||(Ne.observeMutations=!1);var C={};Object.keys(os).forEach(function(t){Object.defineProperty(C,t,{enumerable:!0,set:function(n){Ne[t]=n,Ye.forEach(function(r){return r(C)})},get:function(){return Ne[t]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(e){Ne.cssPrefix=e,Ye.forEach(function(n){return n(C)})},get:function(){return Ne.cssPrefix}});te.FontAwesomeConfig=C;var Ye=[];function fu(t){return Ye.push(t),function(){Ye.splice(Ye.indexOf(t),1)}}var Wt=Wr,Mt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function cu(t){if(!(!t||!Bt)){var e=q.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=q.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return q.head.insertBefore(e,r),t}}var uu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function nn(){for(var t=12,e="";t-- >0;)e+=uu[Math.random()*62|0];return e}function Re(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ti(t){return t.classList?Re(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function ss(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function du(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(ss(t[n]),'" ')},"").trim()}function cr(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Ni(t){return t.size!==Mt.size||t.x!==Mt.x||t.y!==Mt.y||t.rotate!==Mt.rotate||t.flipX||t.flipY}function mu(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function pu(t){var e=t.transform,n=t.width,r=n===void 0?Wr:n,i=t.height,a=i===void 0?Wr:i,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&ts?l+="translate(".concat(e.x/Wt-r/2,"em, ").concat(e.y/Wt-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/Wt,"em), calc(-50% + ").concat(e.y/Wt,"em)) "):l+="translate(".concat(e.x/Wt,"em, ").concat(e.y/Wt,"em) "),l+="scale(".concat(e.size/Wt*(e.flipX?-1:1),", ").concat(e.size/Wt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var hu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ls(){var t=es,e=ns,n=C.cssPrefix,r=C.replacementClass,i=hu;if(n!==t||r!==e){var a=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Ta=!1;function Er(){C.autoAddCss&&!Ta&&(cu(ls()),Ta=!0)}var gu={mixout:function(){return{dom:{css:ls,insertCss:Er}}},hooks:function(){return{beforeDOMElementCreation:function(){Er()},beforeI2svg:function(){Er()}}}},Ut=te||{};Ut[Dt]||(Ut[Dt]={});Ut[Dt].styles||(Ut[Dt].styles={});Ut[Dt].hooks||(Ut[Dt].hooks={});Ut[Dt].shims||(Ut[Dt].shims=[]);var Ot=Ut[Dt],fs=[],vu=function t(){q.removeEventListener("DOMContentLoaded",t),Wn=1,fs.map(function(e){return e()})},Wn=!1;Bt&&(Wn=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),Wn||q.addEventListener("DOMContentLoaded",vu));function bu(t){Bt&&(Wn?setTimeout(t,0):fs.push(t))}function fn(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,a=i===void 0?[]:i;return typeof t=="string"?ss(t):"<".concat(e," ").concat(du(r),">").concat(a.map(fn).join(""),"</").concat(e,">")}function Na(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var yu=function(e,n){return function(r,i,a,o){return e.call(n,r,i,a,o)}},Sr=function(e,n,r,i){var a=Object.keys(e),o=a.length,s=i!==void 0?yu(n,i):n,l,c,u;for(r===void 0?(l=1,u=e[a[0]]):(l=0,u=r);l<o;l++)c=a[l],u=s(u,e[c],c,e);return u};function _u(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=t.charCodeAt(n++);(a&64512)==56320?e.push(((i&1023)<<10)+(a&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Gr(t){var e=_u(t);return e.length===1?e[0].toString(16):null}function xu(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ma(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function qr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Ma(e);typeof Ot.hooks.addPack=="function"&&!i?Ot.hooks.addPack(t,Ma(e)):Ot.styles[t]=O(O({},Ot.styles[t]||{}),a),t==="fas"&&qr("fa",e)}var En,Sn,Cn,xe=Ot.styles,wu=Ot.shims,Au=(En={},rt(En,G,Object.values(tn[G])),rt(En,Z,Object.values(tn[Z])),En),Mi=null,cs={},us={},ds={},ms={},ps={},ku=(Sn={},rt(Sn,G,Object.keys(Ze[G])),rt(Sn,Z,Object.keys(Ze[Z])),Sn);function Ou(t){return~au.indexOf(t)}function Eu(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!Ou(i)?i:null}var hs=function(){var e=function(a){return Sr(xe,function(o,s,l){return o[l]=Sr(s,a,{}),o},{})};cs=e(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),us=e(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),ps=e(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in xe||C.autoFetchSvg,r=Sr(wu,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});ds=r.names,ms=r.unicodes,Mi=ur(C.styleDefault,{family:C.familyDefault})};fu(function(t){Mi=ur(t.styleDefault,{family:C.familyDefault})});hs();function Ri(t,e){return(cs[t]||{})[e]}function Su(t,e){return(us[t]||{})[e]}function ue(t,e){return(ps[t]||{})[e]}function gs(t){return ds[t]||{prefix:null,iconName:null}}function Cu(t){var e=ms[t],n=Ri("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ee(){return Mi}var Li=function(){return{prefix:null,iconName:null,rest:[]}};function ur(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?G:n,i=Ze[r][t],a=Qe[r][t]||Qe[r][i],o=t in Ot.styles?t:null;return a||o||null}var Ra=(Cn={},rt(Cn,G,Object.keys(tn[G])),rt(Cn,Z,Object.keys(tn[Z])),Cn);function dr(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(e={},rt(e,G,"".concat(C.cssPrefix,"-").concat(G)),rt(e,Z,"".concat(C.cssPrefix,"-").concat(Z)),e),o=null,s=G;(t.includes(a[G])||t.some(function(c){return Ra[G].includes(c)}))&&(s=G),(t.includes(a[Z])||t.some(function(c){return Ra[Z].includes(c)}))&&(s=Z);var l=t.reduce(function(c,u){var m=Eu(C.cssPrefix,u);if(xe[u]?(u=Au[s].includes(u)?Qc[s][u]:u,o=u,c.prefix=u):ku[s].indexOf(u)>-1?(o=u,c.prefix=ur(u,{family:s})):m?c.iconName=m:u!==C.replacementClass&&u!==a[G]&&u!==a[Z]&&c.rest.push(u),!i&&c.prefix&&c.iconName){var v=o==="fa"?gs(c.iconName):{},w=ue(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||w||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!xe.far&&xe.fas&&!C.autoFetchSvg&&(c.prefix="fas")}return c},Li());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Z&&(xe.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=ue(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ee()||"fas"),l}var Pu=function(){function t(){Uc(this,t),this.definitions={}}return Hc(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),qr(s,o[s]);var l=tn[G][s];l&&qr(l,o[s]),hs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),t}(),La=[],we={},Ce={},Iu=Object.keys(Ce);function Tu(t,e){var n=e.mixoutsTo;return La=t,we={},Object.keys(Ce).forEach(function(r){Iu.indexOf(r)===-1&&delete Ce[r]}),La.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Yn(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){we[o]||(we[o]=[]),we[o].push(a[o])})}r.provides&&r.provides(Ce)}),n}function Xr(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=we[t]||[];return a.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ge(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=we[t]||[];i.forEach(function(a){a.apply(null,n)})}function Ht(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ce[t]?Ce[t].apply(null,e):void 0}function Jr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||ee();if(e)return e=ue(n,e)||e,Na(vs.definitions,n,e)||Na(Ot.styles,n,e)}var vs=new Pu,Nu=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,ge("noAuto")},Mu={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Bt?(ge("beforeI2svg",e),Ht("pseudoElements2svg",e),Ht("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,bu(function(){Lu({autoReplaceSvgRoot:n}),ge("watch",e)})}},Ru={icon:function(e){if(e===null)return null;if(Yn(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ue(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=ur(e[0]);return{prefix:r,iconName:ue(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(C.cssPrefix,"-"))>-1||e.match(tu))){var i=dr(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||ee(),iconName:ue(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var a=ee();return{prefix:a,iconName:ue(a,e)||e}}}},vt={noAuto:Nu,config:C,dom:Mu,parse:Ru,library:vs,findIconDefinition:Jr,toHtml:fn},Lu=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(Ot.styles).length>0||C.autoFetchSvg)&&Bt&&C.autoReplaceSvg&&vt.dom.i2svg({node:r})};function mr(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return fn(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Bt){var r=q.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Fu(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,a=t.styles,o=t.transform;if(Ni(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};i.style=cr(O(O({},a),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function ju(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,a=t.symbol,o=a===!0?"".concat(e,"-").concat(C.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},i),{},{id:o}),children:r}]}]}function Fi(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,a=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,u=t.titleId,m=t.extra,v=t.watchable,w=v===void 0?!1:v,$=r.found?r:n,R=$.width,D=$.height,A=i==="fak",S=[C.replacementClass,a?"".concat(C.cssPrefix,"-").concat(a):""].filter(function(yt){return m.classes.indexOf(yt)===-1}).filter(function(yt){return yt!==""||!!yt}).concat(m.classes).join(" "),I={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":i,"data-icon":a,class:S,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat(D)})},j=A&&!~m.classes.indexOf("fa-fw")?{width:"".concat(R/D*16*.0625,"em")}:{};w&&(I.attributes[he]=""),l&&(I.children.push({tag:"title",attributes:{id:I.attributes["aria-labelledby"]||"title-".concat(u||nn())},children:[l]}),delete I.attributes.title);var P=O(O({},I),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O(O({},j),m.styles)}),Q=r.found&&n.found?Ht("generateAbstractMask",P)||{children:[],attributes:{}}:Ht("generateAbstractIcon",P)||{children:[],attributes:{}},tt=Q.children,bt=Q.attributes;return P.children=tt,P.attributes=bt,s?ju(P):Fu(P)}function Fa(t){var e=t.content,n=t.width,r=t.height,i=t.transform,a=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=O(O(O({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(c[he]="");var u=O({},o.styles);Ni(i)&&(u.transform=pu({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=cr(u);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[e]}),a&&v.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),v}function $u(t){var e=t.content,n=t.title,r=t.extra,i=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=cr(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Cr=Ot.styles;function Zr(t){var e=t[0],n=t[1],r=t.slice(4),i=Ei(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(ce.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(ce.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(ce.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:o}}var zu={found:!1,width:512,height:512};function Du(t,e){!rs&&!C.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Qr(t,e){var n=e;return e==="fa"&&C.styleDefault!==null&&(e=ee()),new Promise(function(r,i){if(Ht("missingIconAbstract"),n==="fa"){var a=gs(t)||{};t=a.iconName||t,e=a.prefix||e}if(t&&e&&Cr[e]&&Cr[e][t]){var o=Cr[e][t];return r(Zr(o))}Du(t,e),r(O(O({},zu),{},{icon:C.showMissingIcons&&t?Ht("missingIconAbstract")||{}:{}}))})}var ja=function(){},ti=C.measurePerformance&&_n&&_n.mark&&_n.measure?_n:{mark:ja,measure:ja},De='FA "6.5.1"',Uu=function(e){return ti.mark("".concat(De," ").concat(e," begins")),function(){return bs(e)}},bs=function(e){ti.mark("".concat(De," ").concat(e," ends")),ti.measure("".concat(De," ").concat(e),"".concat(De," ").concat(e," begins"),"".concat(De," ").concat(e," ends"))},ji={begin:Uu,end:bs},Ln=function(){};function $a(t){var e=t.getAttribute?t.getAttribute(he):null;return typeof e=="string"}function Hu(t){var e=t.getAttribute?t.getAttribute(Ci):null,n=t.getAttribute?t.getAttribute(Pi):null;return e&&n}function Vu(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(C.replacementClass)}function Bu(){if(C.autoReplaceSvg===!0)return Fn.replace;var t=Fn[C.autoReplaceSvg];return t||Fn.replace}function Yu(t){return q.createElementNS("http://www.w3.org/2000/svg",t)}function Wu(t){return q.createElement(t)}function ys(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Yu:Wu:n;if(typeof t=="string")return q.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var a=t.children||[];return a.forEach(function(o){i.appendChild(ys(o,{ceFn:r}))}),i}function Ku(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Fn={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(ys(i),n)}),n.getAttribute(he)===null&&C.keepOriginalSource){var r=q.createComment(Ku(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Ti(n).indexOf(C.replacementClass))return Fn.replace(e);var i=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===C.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return fn(s)}).join(`
`);n.setAttribute(he,""),n.innerHTML=o}};function za(t){t()}function _s(t,e){var n=typeof e=="function"?e:Ln;if(t.length===0)n();else{var r=za;C.mutateApproach===Jc&&(r=te.requestAnimationFrame||za),r(function(){var i=Bu(),a=ji.begin("mutate");t.map(i),a(),n()})}}var $i=!1;function xs(){$i=!0}function ei(){$i=!1}var Kn=null;function Da(t){if(Pa&&C.observeMutations){var e=t.treeCallback,n=e===void 0?Ln:e,r=t.nodeCallback,i=r===void 0?Ln:r,a=t.pseudoElementsCallback,o=a===void 0?Ln:a,s=t.observeMutationsRoot,l=s===void 0?q:s;Kn=new Pa(function(c){if(!$i){var u=ee();Re(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!$a(m.addedNodes[0])&&(C.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&$a(m.target)&&~iu.indexOf(m.attributeName))if(m.attributeName==="class"&&Hu(m.target)){var v=dr(Ti(m.target)),w=v.prefix,$=v.iconName;m.target.setAttribute(Ci,w||u),$&&m.target.setAttribute(Pi,$)}else Vu(m.target)&&i(m.target)})}}),Bt&&Kn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Gu(){Kn&&Kn.disconnect()}function qu(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Xu(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=dr(Ti(t));return i.prefix||(i.prefix=ee()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Su(i.prefix,t.innerText)||Ri(i.prefix,Gr(t.innerText))),!i.iconName&&C.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Ju(t){var e=Re(t.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return C.autoA11y&&(n?e["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||nn()):(e["aria-hidden"]="true",e.focusable="false")),e}function Zu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Mt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ua(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Xu(t),r=n.iconName,i=n.prefix,a=n.rest,o=Ju(t),s=Xr("parseNodeAttributes",{},t),l=e.styleParser?qu(t):[];return O({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Mt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var Qu=Ot.styles;function ws(t){var e=C.autoReplaceSvg==="nest"?Ua(t,{styleParser:!1}):Ua(t);return~e.extra.classes.indexOf(is)?Ht("generateLayersText",t,e):Ht("generateSvgReplacementMutation",t,e)}var ne=new Set;Ii.map(function(t){ne.add("fa-".concat(t))});Object.keys(Ze[G]).map(ne.add.bind(ne));Object.keys(Ze[Z]).map(ne.add.bind(ne));ne=sn(ne);function Ha(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Bt)return Promise.resolve();var n=q.documentElement.classList,r=function(m){return n.add("".concat(Ia,"-").concat(m))},i=function(m){return n.remove("".concat(Ia,"-").concat(m))},a=C.autoFetchSvg?ne:Ii.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Qu));a.includes("fa")||a.push("fa");var o=[".".concat(is,":not([").concat(he,"])")].concat(a.map(function(u){return".".concat(u,":not([").concat(he,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Re(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=ji.begin("onTree"),c=s.reduce(function(u,m){try{var v=ws(m);v&&u.push(v)}catch(w){rs||w.name==="MissingIcon"&&console.error(w)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(v){_s(v,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(v){l(),m(v)})})}function td(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ws(t).then(function(n){n&&_s([n],e)})}function ed(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Jr(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Jr(i||{})),t(r,O(O({},n),{},{mask:i}))}}var nd=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Mt:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,m=n.title,v=m===void 0?null:m,w=n.titleId,$=w===void 0?null:w,R=n.classes,D=R===void 0?[]:R,A=n.attributes,S=A===void 0?{}:A,I=n.styles,j=I===void 0?{}:I;if(e){var P=e.prefix,Q=e.iconName,tt=e.icon;return mr(O({type:"icon"},e),function(){return ge("beforeDOMElementCreation",{iconDefinition:e,params:n}),C.autoA11y&&(v?S["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat($||nn()):(S["aria-hidden"]="true",S.focusable="false")),Fi({icons:{main:Zr(tt),mask:l?Zr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:Q,transform:O(O({},Mt),i),symbol:o,title:v,maskId:u,titleId:$,extra:{attributes:S,styles:j,classes:D}})})}},rd={mixout:function(){return{icon:ed(nd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ha,n.nodeCallback=td,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?q:r,a=n.callback,o=a===void 0?function(){}:a;return Ha(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,v=r.extra;return new Promise(function(w,$){Promise.all([Qr(i,s),u.iconName?Qr(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(R){var D=Ei(R,2),A=D[0],S=D[1];w([n,Fi({icons:{main:A,mask:S},prefix:s,iconName:i,transform:l,symbol:c,maskId:m,title:a,titleId:o,extra:v,watchable:!0})])}).catch($)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=cr(s);l.length>0&&(i.style=l);var c;return Ni(o)&&(c=Ht("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(c||a.icon),{children:r,attributes:i}}}},id={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return mr({type:"layer"},function(){ge("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(sn(a)).join(" ")},children:o}]})}}}},ad={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return mr({type:"counter",content:n},function(){return ge("beforeDOMElementCreation",{content:n,params:r}),$u({content:n.toString(),title:a,extra:{attributes:c,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(sn(s))}})})}}}},od={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Mt:i,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,v=r.styles,w=v===void 0?{}:v;return mr({type:"text",content:n},function(){return ge("beforeDOMElementCreation",{content:n,params:r}),Fa({content:n,transform:O(O({},Mt),a),title:s,extra:{attributes:m,styles:w,classes:["".concat(C.cssPrefix,"-layers-text")].concat(sn(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(ts){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return C.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Fa({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},sd=new RegExp('"',"ug"),Va=[1105920,1112319];function ld(t){var e=t.replace(sd,""),n=xu(e,0),r=n>=Va[0]&&n<=Va[1],i=e.length===2?e[0]===e[1]:!1;return{value:Gr(i?e[0]:e),isSecondary:r||i}}function Ba(t,e){var n="".concat(Xc).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var a=Re(t.children),o=a.filter(function(tt){return tt.getAttribute(Kr)===e})[0],s=te.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(eu),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Z:G,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Qe[v][l[2].toLowerCase()]:nu[v][c],$=ld(m),R=$.value,D=$.isSecondary,A=l[0].startsWith("FontAwesome"),S=Ri(w,R),I=S;if(A){var j=Cu(R);j.iconName&&j.prefix&&(S=j.iconName,w=j.prefix)}if(S&&!D&&(!o||o.getAttribute(Ci)!==w||o.getAttribute(Pi)!==I)){t.setAttribute(n,I),o&&t.removeChild(o);var P=Zu(),Q=P.extra;Q.attributes[Kr]=e,Qr(S,w).then(function(tt){var bt=Fi(O(O({},P),{},{icons:{main:tt,mask:Li()},prefix:w,iconName:I,extra:Q,watchable:!0})),yt=q.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(yt,t.firstChild):t.appendChild(yt),yt.outerHTML=bt.map(function(Lt){return fn(Lt)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function fd(t){return Promise.all([Ba(t,"::before"),Ba(t,"::after")])}function cd(t){return t.parentNode!==document.head&&!~Zc.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Kr)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ya(t){if(Bt)return new Promise(function(e,n){var r=Re(t.querySelectorAll("*")).filter(cd).map(fd),i=ji.begin("searchPseudoElements");xs(),Promise.all(r).then(function(){i(),ei(),e()}).catch(function(){i(),ei(),n()})})}var ud={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ya,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?q:r;C.searchPseudoElements&&Ya(i)}}},Wa=!1,dd={mixout:function(){return{dom:{unwatch:function(){xs(),Wa=!0}}}},hooks:function(){return{bootstrap:function(){Da(Xr("mutationObserverCallbacks",{}))},noAuto:function(){Gu()},watch:function(n){var r=n.observeMutationsRoot;Wa?ei():Da(Xr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ka=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},md={mixout:function(){return{parse:{transform:function(n){return Ka(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Ka(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},v={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:m,path:v};return{tag:"g",attributes:O({},w.outer),children:[{tag:"g",attributes:O({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),w.path)}]}]}}}},Pr={x:0,y:0,width:"100%",height:"100%"};function Ga(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function pd(t){return t.tag==="g"?t.children:[t]}var hd={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?dr(i.split(" ").map(function(o){return o.trim()})):Li();return a.prefix||(a.prefix=ee()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,c=a.width,u=a.icon,m=o.width,v=o.icon,w=mu({transform:l,containerWidth:m,iconWidth:c}),$={tag:"rect",attributes:O(O({},Pr),{},{fill:"white"})},R=u.children?{children:u.children.map(Ga)}:{},D={tag:"g",attributes:O({},w.inner),children:[Ga(O({tag:u.tag,attributes:O(O({},u.attributes),w.path)},R))]},A={tag:"g",attributes:O({},w.outer),children:[D]},S="mask-".concat(s||nn()),I="clip-".concat(s||nn()),j={tag:"mask",attributes:O(O({},Pr),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[$,A]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:pd(v)},j]};return r.push(P,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(S,")")},Pr)}),{children:r,attributes:i}}}},gd={provides:function(e){var n=!1;te.matchMedia&&(n=te.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},vd={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},bd=[gu,rd,id,ad,od,ud,dd,md,hd,gd,vd];Tu(bd,{mixoutsTo:vt});vt.noAuto;vt.config;var yd=vt.library;vt.dom;var ni=vt.parse;vt.findIconDefinition;vt.toHtml;var _d=vt.icon;vt.layer;vt.text;vt.counter;function qa(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function $t(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?qa(Object(n),!0).forEach(function(r){ct(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):qa(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Gn(t){"@babel/helpers - typeof";return Gn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gn(t)}function ct(t,e,n){return e=kd(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function xd(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,a;for(a=0;a<r.length;a++)i=r[a],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function wd(t,e){if(t==null)return{};var n=xd(t,e),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Ad(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function kd(t){var e=Ad(t,"string");return typeof e=="symbol"?e:String(e)}var Od=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},As={exports:{}};(function(t){(function(e){var n=function(A,S,I){if(!c(S)||m(S)||v(S)||w(S)||l(S))return S;var j,P=0,Q=0;if(u(S))for(j=[],Q=S.length;P<Q;P++)j.push(n(A,S[P],I));else{j={};for(var tt in S)Object.prototype.hasOwnProperty.call(S,tt)&&(j[A(tt,I)]=n(A,S[tt],I))}return j},r=function(A,S){S=S||{};var I=S.separator||"_",j=S.split||/(?=[A-Z])/;return A.split(j).join(I)},i=function(A){return $(A)?A:(A=A.replace(/[\-_\s]+(.)?/g,function(S,I){return I?I.toUpperCase():""}),A.substr(0,1).toLowerCase()+A.substr(1))},a=function(A){var S=i(A);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(A,S){return r(A,S).toLowerCase()},s=Object.prototype.toString,l=function(A){return typeof A=="function"},c=function(A){return A===Object(A)},u=function(A){return s.call(A)=="[object Array]"},m=function(A){return s.call(A)=="[object Date]"},v=function(A){return s.call(A)=="[object RegExp]"},w=function(A){return s.call(A)=="[object Boolean]"},$=function(A){return A=A-0,A===A},R=function(A,S){var I=S&&"process"in S?S.process:S;return typeof I!="function"?A:function(j,P){return I(j,A,P)}},D={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(A,S){return n(R(i,S),A)},decamelizeKeys:function(A,S){return n(R(o,S),A,S)},pascalizeKeys:function(A,S){return n(R(a,S),A)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=D:e.humps=D})(Od)})(As);var Ed=As.exports,Sd=["class","style"];function Cd(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Ed.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return e[i]=a,e},{})}function Pd(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function ks(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return ks(l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=Pd(u);break;case"style":l.style=Cd(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,s=wd(n,Sd);return Sf(t.tag,$t($t($t({},e),{},{class:i.class,style:$t($t({},i.style),o)},i.attrs),s),r)}var Os=!1;try{Os=!0}catch{}function Id(){if(!Os&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ir(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ct({},t,e):{}}function Td(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ct(e,"fa-".concat(t.size),t.size!==null),ct(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),ct(e,"fa-pull-".concat(t.pull),t.pull!==null),ct(e,"fa-swap-opacity",t.swapOpacity),ct(e,"fa-bounce",t.bounce),ct(e,"fa-shake",t.shake),ct(e,"fa-beat",t.beat),ct(e,"fa-fade",t.fade),ct(e,"fa-beat-fade",t.beatFade),ct(e,"fa-flash",t.flash),ct(e,"fa-spin-pulse",t.spinPulse),ct(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Xa(t){if(t&&Gn(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ni.icon)return ni.icon(t);if(t===null)return null;if(Gn(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Nd=Ml({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=Gt(function(){return Xa(e.icon)}),a=Gt(function(){return Ir("classes",Td(e))}),o=Gt(function(){return Ir("transform",typeof e.transform=="string"?ni.transform(e.transform):e.transform)}),s=Gt(function(){return Ir("mask",Xa(e.mask))}),l=Gt(function(){return _d(i.value,$t($t($t($t({},a.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Tn(l,function(u){if(!u)return Id("Could not find one or more icon(s)",i.value,s.value)},{immediate:!0});var c=Gt(function(){return l.value?ks(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Md={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]},Rd={prefix:"fas",iconName:"user-pen",icon:[640,512,["user-edit"],"f4ff","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"]},Ld={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]};yd.add(Md,Rd,Ld);Zf(Dc).component("font-awesome-icon",Nd).mount("#app");
