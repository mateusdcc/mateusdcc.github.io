const it=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};it();const R={};function se(e){R.context=e}const ot=(e,t)=>e===t,lt=Symbol("solid-proxy"),ct=Symbol("solid-track"),oe={equals:ot};let at=He;const F={},M=1,le=2,Ue={owned:null,cleanups:null,context:null,owner:null},[ut,Rn]=k(!1);var v=null;let ee=null,A=null,G=null,O=null,I=null,ye=0;function z(e,t){const n=A,s=v,r=e.length===0,i=r?Ue:{owned:null,cleanups:null,context:null,owner:t||s},l=r?e:()=>e(()=>Ae(i));v=i,A=null;try{return ue(l,!0)}finally{A=n,v=s}}function k(e,t){t=t?Object.assign({},oe,t):oe;const n={value:e,observers:null,observerSlots:null,pending:F,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(r=r(n.pending!==F?n.pending:n.value)),xe(n,r));return[Ke.bind(n),s]}function ce(e,t,n){const s=ve(e,t,!0,M);te(s)}function j(e,t,n){const s=ve(e,t,!1,M);te(s)}function S(e,t,n){n=n?Object.assign({},oe,n):oe;const s=ve(e,t,!0,0);return s.pending=F,s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,te(s),Ke.bind(s)}function ft(e,t,n){arguments.length===2?typeof t=="object"&&(n=t,t=e,e=!0):arguments.length===1&&(t=e,e=!0),n||(n={});const s=new Set,[r,i]=k(n.initialValue),[l,o]=k(void 0,{equals:!1}),[a,c]=k(!1),[u,m]=k();let f,w=null,y=null,N=null,$=!1,h="initialValue"in n,d=typeof e=="function"&&S(e);R.context&&(N=`${R.context.id}${R.context.count++}`,R.load&&(y=R.load(N)));function b(g,p,x,E){return w===g&&(w=null,h=!0,y&&(g===y||p===y)&&n.onHydrated&&queueMicrotask(()=>n.onHydrated(E,{value:p})),y=null,m(f=x),C(p)),p}function C(g){Y(()=>{i(()=>g),c(!1);for(const p of s.keys())p.decrement();s.clear()})}function P(){const g=yt,p=r();if(f)throw f;return A&&!A.user&&g&&ce(()=>{l(),w&&(g.resolved||s.has(g)||(g.increment(),s.add(g)))}),p}function L(g=!0){if(g&&$)return;$=!1,m(f=void 0);const p=d?d():e;if(p==null||p===!1){b(w,_(r));return}const x=y||_(()=>t(p,{value:r(),refetching:g}));return typeof x!="object"||!("then"in x)?(b(w,x),x):(w=x,$=!0,queueMicrotask(()=>$=!1),Y(()=>{c(!0),o()}),x.then(E=>b(x,E,void 0,p),E=>b(x,E,E)))}return Object.defineProperties(P,{loading:{get(){return a()}},error:{get(){return u()}},latest:{get(){if(!h)return P();if(f)throw f;return r()}}}),d?ce(()=>L(!1)):L(!1),[P,{refetch:L,mutate:i}]}function Y(e){if(G)return e();let t;const n=G=[];try{t=e()}finally{G=null}return ue(()=>{for(let s=0;s<n.length;s+=1){const r=n[s];if(r.pending!==F){const i=r.pending;r.pending=F,xe(r,i)}}},!1),t}function _(e){let t,n=A;return A=null,t=e(),A=n,t}function De(e,t,n){const s=Array.isArray(e);let r,i=n&&n.defer;return l=>{let o;if(s){o=Array(e.length);for(let c=0;c<e.length;c++)o[c]=e[c]()}else o=e();if(i){i=!1;return}const a=_(()=>t(o,r,l));return r=o,a}}function we(e){return v===null||(v.cleanups===null?v.cleanups=[e]:v.cleanups.push(e)),e}function dt(){return v}function ht(e,t){const n=v;v=e;try{return ue(t,!0)}finally{v=n}}function gt(e){const t=A,n=v;return Promise.resolve().then(()=>{A=t,v=n;let s;return Y(e),A=v=null,s?s.done:void 0})}function mt(){return[ut,gt]}function Fe(e){const t=Symbol("context");return{id:t,Provider:bt(t),defaultValue:e}}function pe(e){let t;return(t=Je(v,e.id))!==void 0?t:e.defaultValue}function be(e){const t=S(e);return S(()=>he(t()))}let yt;function Ke(){const e=ee;if(this.sources&&(this.state||e)){const t=O;O=null,this.state===M||e?te(this):ae(this),O=t}if(A){const t=this.observers?this.observers.length:0;A.sources?(A.sources.push(this),A.sourceSlots.push(t)):(A.sources=[this],A.sourceSlots=[t]),this.observers?(this.observers.push(A),this.observerSlots.push(A.sources.length-1)):(this.observers=[A],this.observerSlots=[A.sources.length-1])}return this.value}function xe(e,t,n){if(G)return e.pending===F&&G.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let s=!1;return e.value=t,e.observers&&e.observers.length&&ue(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r];s&&ee.disposed.has(i),(s&&!i.tState||!s&&!i.state)&&(i.pure?O.push(i):I.push(i),i.observers&&We(i)),s||(i.state=M)}if(O.length>1e6)throw O=[],new Error},!1),t}function te(e){if(!e.fn)return;Ae(e);const t=v,n=A,s=ye;A=v=e,wt(e,e.value,s),A=n,v=t}function wt(e,t,n){let s;try{s=e.fn(t)}catch(r){Xe(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?xe(e,s):e.value=s,e.updatedAt=n)}function ve(e,t,n,s=M,r){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:v,context:null,pure:n};return v===null||v!==Ue&&(v.owned?v.owned.push(i):v.owned=[i]),i}function Ve(e){const t=ee;if(e.state===0||t)return;if(e.state===le||t)return ae(e);if(e.suspense&&_(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ye);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===M||t)te(e);else if(e.state===le||t){const r=O;O=null,ae(e,n[0]),O=r}}function ue(e,t){if(O)return e();let n=!1;t||(O=[]),I?n=!0:I=[],ye++;try{const s=e();return pt(n),s}catch(s){O||(I=null),Xe(s)}}function pt(e){O&&(He(O),O=null),!e&&(I.length?Y(()=>{at(I),I=null}):I=null)}function He(e){for(let t=0;t<e.length;t++)Ve(e[t])}function ae(e,t){const n=ee;e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];r.sources&&(r.state===M||n?r!==t&&Ve(r):(r.state===le||n)&&ae(r,t))}}function We(e){const t=ee;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=le,s.pure?O.push(s):I.push(s),s.observers&&We(s))}}function Ae(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),l=n.observerSlots.pop();s<r.length&&(i.sourceSlots[l]=s,r[s]=i,n.observerSlots[s]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)Ae(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Xe(e){throw e}function Je(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Je(e.owner,t):void 0}function he(e){if(typeof e=="function"&&!e.length)return he(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=he(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function bt(e){return function(n){let s;return ce(()=>s=_(()=>(v.context={[e]:n.value},be(()=>n.children)))),s}}const xt=Symbol("fallback");function $e(e){for(let t=0;t<e.length;t++)e[t]()}function vt(e,t,n={}){let s=[],r=[],i=[],l=0,o=t.length>1?[]:null;return we(()=>$e(i)),()=>{let a=e()||[],c,u;return a[ct],_(()=>{let f=a.length,w,y,N,$,h,d,b,C,P;if(f===0)l!==0&&($e(i),i=[],s=[],r=[],l=0,o&&(o=[])),n.fallback&&(s=[xt],r[0]=z(L=>(i[0]=L,n.fallback())),l=1);else if(l===0){for(r=new Array(f),u=0;u<f;u++)s[u]=a[u],r[u]=z(m);l=f}else{for(N=new Array(f),$=new Array(f),o&&(h=new Array(f)),d=0,b=Math.min(l,f);d<b&&s[d]===a[d];d++);for(b=l-1,C=f-1;b>=d&&C>=d&&s[b]===a[C];b--,C--)N[C]=r[b],$[C]=i[b],o&&(h[C]=o[b]);for(w=new Map,y=new Array(C+1),u=C;u>=d;u--)P=a[u],c=w.get(P),y[u]=c===void 0?-1:c,w.set(P,u);for(c=d;c<=b;c++)P=s[c],u=w.get(P),u!==void 0&&u!==-1?(N[u]=r[c],$[u]=i[c],o&&(h[u]=o[c]),u=y[u],w.set(P,u)):i[c]();for(u=d;u<f;u++)u in N?(r[u]=N[u],i[u]=$[u],o&&(o[u]=h[u],o[u](u))):r[u]=z(m);r=r.slice(0,l=f),s=a.slice(0)}return r});function m(f){if(i[u]=f,o){const[w,y]=k(u);return o[u]=y,t(a[u],w)}return t(a[u])}}}function T(e,t){return _(()=>e(t||{}))}function re(){return!0}const Ge={get(e,t,n){return t===lt?n:e.get(t)},has(e,t){return e.has(t)},set:re,deleteProperty:re,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:re,deleteProperty:re}},ownKeys(e){return e.keys()}};function de(e){return(e=typeof e=="function"?e():e)==null?{}:e}function Ee(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const s=de(e[n])[t];if(s!==void 0)return s}},has(t){for(let n=e.length-1;n>=0;n--)if(t in de(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(de(e[n])));return[...new Set(t)]}},Ge)}function At(e,...t){const n=new Set(t.flat()),s=Object.getOwnPropertyDescriptors(e),r=t.map(i=>{const l={};for(let o=0;o<i.length;o++){const a=i[o];Object.defineProperty(l,a,s[a]?s[a]:{get(){return e[a]},set(){return!0}})}return l});return r.push(new Proxy({get(i){return n.has(i)?void 0:e[i]},has(i){return n.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!n.has(i))}},Ge)),r}function Ne(e){let t,n;const s=r=>{const i=R.context;if(i){const[o,a]=k();(n||(n=e())).then(c=>{se(i),a(()=>c.default),se()}),t=o}else if(t){const o=t();if(o)return o(r)}else{const[o]=ft(()=>(n||(n=e())).then(a=>a.default));t=o}let l;return S(()=>(l=t())&&_(()=>{if(!i)return l(r);const o=R.context;se(i);const a=l(r);return se(o),a}))};return s.preload=()=>n||((n=e()).then(r=>t=()=>r.default),n),s}function Et(e){const t="fallback"in e&&{fallback:()=>e.fallback};return S(vt(()=>e.each,e.children,t||void 0))}function ze(e){let t=!1;const n=S(()=>e.when,void 0,{equals:(s,r)=>t?s===r:!s==!r});return S(()=>{const s=n();if(s){const r=e.children;return(t=typeof r=="function"&&r.length>0)?_(()=>r(s)):r}return e.fallback})}const Ct=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Lt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Ct]),St=new Set(["innerHTML","textContent","innerText","children"]),Pt={className:"class",htmlFor:"for"},Te={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},$t=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Nt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Re(e,t){return S(e,void 0,t?void 0:{equals:t})}function Tt(e,t,n){let s=n.length,r=t.length,i=s,l=0,o=0,a=t[r-1].nextSibling,c=null;for(;l<r||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===l){const u=i<s?o?n[o-1].nextSibling:n[i-o]:a;for(;o<i;)e.insertBefore(n[o++],u)}else if(i===o)for(;l<r;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[r-1]){const u=t[--r].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],u),t[r]=n[i]}else{if(!c){c=new Map;let m=o;for(;m<i;)c.set(n[m],m++)}const u=c.get(t[l]);if(u!=null)if(o<u&&u<i){let m=l,f=1,w;for(;++m<r&&m<i&&!((w=c.get(t[m]))==null||w!==u+f);)f++;if(f>u-o){const y=t[l];for(;o<u;)e.insertBefore(n[o++],y)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const Oe="_$DX_DELEGATE";function Rt(e,t,n){let s;return z(r=>{s=r,t===document?e():K(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function H(e,t,n){const s=document.createElement("template");s.innerHTML=e;let r=s.content.firstChild;return n&&(r=r.firstChild),r}function Ot(e,t=window.document){const n=t[Oe]||(t[Oe]=new Set);for(let s=0,r=e.length;s<r;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,Dt))}}function ge(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function kt(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function _t(e,t){t==null?e.removeAttribute("class"):e.className=t}function It(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=i=>r.call(e,n[1],i))}else e.addEventListener(t,n)}function jt(e,t,n={}){const s=Object.keys(t||{}),r=Object.keys(n);let i,l;for(i=0,l=r.length;i<l;i++){const o=r[i];!o||o==="undefined"||t[o]||(ke(e,o,!1),delete n[o])}for(i=0,l=s.length;i<l;i++){const o=s[i],a=!!t[o];!o||o==="undefined"||n[o]===a||!a||(ke(e,o,!0),n[o]=a)}return n}function qt(e,t,n={}){const s=e.style,r=typeof n=="string";if(t==null&&r||typeof t=="string")return s.cssText=t;r&&(s.cssText=void 0,n={}),t||(t={});let i,l;for(l in n)t[l]==null&&s.removeProperty(l),delete n[l];for(l in t)i=t[l],i!==n[l]&&(s.setProperty(l,i),n[l]=i);return n}function Bt(e,t,n,s){typeof t=="function"?j(r=>Ie(e,t(),r,n,s)):Ie(e,t,void 0,n,s)}function K(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return V(e,t,s,n);j(r=>V(e,t(),r,n),s)}function Mt(e,t,n,s,r={},i=!1){t||(t={});for(const l in r)if(!(l in t)){if(l==="children")continue;_e(e,l,null,r[l],n,i)}for(const l in t){if(l==="children"){s||V(e,t.children);continue}const o=t[l];r[l]=_e(e,l,o,r[l],n,i)}}function Ut(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function ke(e,t,n){const s=t.trim().split(/\s+/);for(let r=0,i=s.length;r<i;r++)e.classList.toggle(s[r],n)}function _e(e,t,n,s,r,i){let l,o,a;if(t==="style")return qt(e,n,s);if(t==="classList")return jt(e,n,s);if(n===s)return s;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const c=t.slice(3);s&&e.removeEventListener(c,s),n&&e.addEventListener(c,n)}else if(t.slice(0,10)==="oncapture:"){const c=t.slice(10);s&&e.removeEventListener(c,s,!0),n&&e.addEventListener(c,n,!0)}else if(t.slice(0,2)==="on"){const c=t.slice(2).toLowerCase(),u=$t.has(c);if(!u&&s){const m=Array.isArray(s)?s[0]:s;e.removeEventListener(c,m)}(u||n)&&(It(e,c,n,u),u&&Ot([c]))}else if((a=St.has(t))||!r&&(Te[t]||(o=Lt.has(t)))||(l=e.nodeName.includes("-")))t==="class"||t==="className"?_t(e,n):l&&!o&&!a?e[Ut(t)]=n:e[Te[t]||t]=n;else{const c=r&&t.indexOf(":")>-1&&Nt[t.split(":")[0]];c?kt(e,c,t,n):ge(e,Pt[t]||t,n)}return n}function Dt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),R.registry&&!R.done&&(R.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n!==null;){const s=n[t];if(s&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?s.call(n,r,e):s.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function Ie(e,t,n={},s,r){return t||(t={}),!r&&"children"in t&&j(()=>n.children=V(e,t.children,n.children)),t.ref&&t.ref(e),j(()=>Mt(e,t,s,!0,n,!0)),n}function V(e,t,n,s,r){for(R.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(R.context)return n;if(i==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=U(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(R.context)return n;n=U(e,n,s)}else{if(i==="function")return j(()=>{let o=t();for(;typeof o=="function";)o=o();n=V(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],a=n&&Array.isArray(n);if(me(o,t,n,r))return j(()=>n=V(e,o,n,s,!0)),()=>n;if(R.context){for(let c=0;c<o.length;c++)if(o[c].parentNode)return n=o}if(o.length===0){if(n=U(e,n,s),l)return n}else a?n.length===0?je(e,o,s):Tt(e,n,o):(n&&U(e),je(e,o));n=o}else if(t instanceof Node){if(R.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=U(e,n,s,t);U(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function me(e,t,n,s){let r=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],a=n&&n[i];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))r=me(e,o,a)||r;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();r=me(e,Array.isArray(o)?o:[o],a)||r}else e.push(o),r=!0;else{const c=String(o);a&&a.nodeType===3&&a.data===c?e.push(a):e.push(document.createTextNode(c))}}return r}function je(e,t,n){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function U(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(r!==o){const a=o.parentNode===e;!i&&!l?a?e.replaceChild(r,o):e.insertBefore(r,n):a&&o.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}function Ft(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Kt([e,t],n,s){return[n?()=>n(e()):e,s?r=>t(s(r)):t]}function Vt(e){try{return document.querySelector(e)}catch{return null}}function Ht(e,t){const n=Vt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function Wt(e,t,n,s){let r=!1;const i=o=>typeof o=="string"?{value:o}:o,l=Kt(k(i(e()),{equals:(o,a)=>o.value===a.value}),void 0,o=>(!r&&t(o),o));return n&&we(n((o=e())=>{r=!0,l[1](i(o)),r=!1})),{signal:l,utils:s}}function Xt(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:k({value:""})};return e}function Jt(){return Wt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:s})=>{t?window.history.replaceState(s,"",e):window.history.pushState(s,"",e),Ht(window.location.hash.slice(1),n)},e=>Ft(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}const Gt=/^(?:[a-z0-9]+:)?\/\//i,zt=/^\/+|\/+$/g;function Q(e,t=!1){const n=e.replace(zt,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function ie(e,t,n){if(Gt.test(t))return;const s=Q(e),r=n&&Q(n);let i="";return!r||t.startsWith("/")?i=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?i=s+r:i=r,(i||"/")+Q(t,!i)}function Qt(e,t){if(e==null)throw new Error(t);return e}function Qe(e,t){return Q(e).replace(/\/*(\*.*)?$/g,"")+Q(t)}function Yt(e){const t={};return e.searchParams.forEach((n,s)=>{t[s]=n}),t}function D(e,t){return decodeURIComponent(t?e.replace(/\+/g," "):e)}function Zt(e,t){const[n,s]=e.split("/*",2),r=n.split("/").filter(Boolean),i=r.length;return l=>{const o=l.split("/").filter(Boolean),a=o.length-i;if(a<0||a>0&&s===void 0&&!t)return null;const c={path:i?"":"/",params:{}};for(let u=0;u<i;u++){const m=r[u],f=o[u];if(m[0]===":")c.params[m.slice(1)]=f;else if(m.localeCompare(f,void 0,{sensitivity:"base"})!==0)return null;c.path+=`/${f}`}return s&&(c.params[s]=a?o.slice(-a).join("/"):""),c}}function en(e){const[t,n]=e.pattern.split("/*",2),s=t.split("/").filter(Boolean);return s.reduce((r,i)=>r+(i.startsWith(":")?2:3),s.length-(n===void 0?0:1))}function Ye(e){const t=new Map,n=dt();return new Proxy({},{get(s,r){return t.has(r)||ht(n,()=>t.set(r,S(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Ze(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),s=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(s);)r.push(n+=t[1]),s=s.slice(t[0].length);return Ze(s).reduce((i,l)=>[...i,...r.map(o=>o+l)],[])}const tn=100,et=Fe(),fe=Fe(),Ce=()=>Qt(pe(et),"Make sure your app is wrapped in a <Router />");let Z;const Le=()=>Z||pe(fe)||Ce().base,nn=e=>{const t=Le();return S(()=>t.resolvePath(e()))},sn=e=>{const t=Ce();return S(()=>{const n=e();return n!==void 0?t.renderPath(n):n})};function rn(e,t="",n){const{component:s,data:r,children:i}=e,l=!i||Array.isArray(i)&&!i.length,o={key:e,element:s?()=>T(s,{}):()=>{const{element:a}=e;return a===void 0&&n?T(n,{}):a},preload:e.component?s.preload:e.preload,data:r};return tt(e.path).reduce((a,c)=>{for(const u of Ze(c)){const m=Qe(t,u),f=l?m:m.split("/*",1)[0];a.push({...o,originalPath:u,pattern:f,matcher:Zt(f,!l)})}return a},[])}function on(e,t=0){return{routes:e,score:en(e[e.length-1])*1e4-t,matcher(n){const s=[];for(let r=e.length-1;r>=0;r--){const i=e[r],l=i.matcher(n);if(!l)return null;s.unshift({...l,route:i})}return s}}}function tt(e){return Array.isArray(e)?e:[e]}function nt(e,t="",n,s=[],r=[]){const i=tt(e);for(let l=0,o=i.length;l<o;l++){const a=i[l];if(a&&typeof a=="object"&&a.hasOwnProperty("path")){const c=rn(a,t,n);for(const u of c){if(s.push(u),a.children)nt(a.children,u.pattern,n,s,r);else{const m=on([...s],r.length);r.push(m)}s.pop()}}}return s.length?r:r.sort((l,o)=>o.score-l.score)}function ln(e,t){for(let n=0,s=e.length;n<s;n++){const r=e[n].matcher(t);if(r)return r}return[]}function cn(e,t){const n=new URL("http://sar"),s=S(a=>{const c=e();try{return new URL(c,n)}catch{return console.error(`Invalid path ${c}`),a}},n,{equals:(a,c)=>a.href===c.href}),r=S(()=>D(s().pathname)),i=S(()=>D(s().search,!0)),l=S(()=>D(s().hash)),o=S(()=>"");return{get pathname(){return r()},get search(){return i()},get hash(){return l()},get state(){return t()},get key(){return o()},query:Ye(De(i,()=>Yt(s())))}}function an(e,t="",n,s){const{signal:[r,i],utils:l={}}=Xt(e),o=l.parsePath||(g=>g),a=l.renderPath||(g=>g),c=ie("",t),u=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!r().value&&i({value:c,replace:!0,scroll:!1});const[m,f]=mt(),[w,y]=k(r().value),[N,$]=k(r().state),h=cn(w,N),d=[],b={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(g){return ie(c,g)}};if(n)try{Z=b,b.data=n({data:void 0,params:{},location:h,navigate:P(b)})}finally{Z=void 0}function C(g,p,x){_(()=>{if(typeof p=="number"){p&&(l.go?l.go(p):console.warn("Router integration does not support relative routing"));return}const{replace:E,resolve:W,scroll:X,state:ne}={replace:!1,resolve:!0,scroll:!0,...x},q=W?g.resolvePath(p):ie("",p);if(q===void 0)throw new Error(`Path '${p}' is not a routable path`);if(d.length>=tn)throw new Error("Too many redirects");const B=w();if(q!==B||ne!==N()){const J=d.push({value:B,replace:E,scroll:X,state:N()});f(()=>{y(q),$(ne)}).then(()=>{d.length===J&&L({value:q,state:ne})})}})}function P(g){return g=g||pe(fe)||b,(p,x)=>C(g,p,x)}function L(g){const p=d[0];p&&((g.value!==p.value||g.state!==p.state)&&i({...g,replace:p.replace,scroll:p.scroll}),d.length=0)}j(()=>{const{value:g,state:p}=r();_(()=>{g!==w()&&f(()=>{y(g),$(p)})})});{let g=function(x){return x.namespaceURI==="http://www.w3.org/2000/svg"},p=function(x){if(x.defaultPrevented||x.button!==0||x.metaKey||x.altKey||x.ctrlKey||x.shiftKey)return;const E=x.composedPath().find(Pe=>Pe instanceof Node&&Pe.nodeName.toUpperCase()==="A");if(!E)return;const W=g(E),X=W?E.href.baseVal:E.href;if((W?E.target.baseVal:E.target)||!X&&!E.hasAttribute("state"))return;const q=(E.getAttribute("rel")||"").split(/\s+/);if(E.hasAttribute("download")||q&&q.includes("external"))return;const B=W?new URL(X,document.baseURI):new URL(X),J=D(B.pathname);if(B.origin!==window.location.origin||c&&J&&!J.toLowerCase().startsWith(c.toLowerCase()))return;const rt=o(J+D(B.search,!0)+D(B.hash)),Se=E.getAttribute("state");x.preventDefault(),C(b,rt,{resolve:!1,replace:E.hasAttribute("replace"),scroll:!E.hasAttribute("noscroll"),state:Se&&JSON.parse(Se)})};document.addEventListener("click",p),we(()=>document.removeEventListener("click",p))}return{base:b,out:u,location:h,isRouting:m,renderPath:a,parsePath:o,navigatorFactory:P}}function un(e,t,n,s){const{base:r,location:i,navigatorFactory:l}=e,{pattern:o,element:a,preload:c,data:u}=s().route,m=S(()=>s().path),f=Ye(()=>s().params);c&&c();const w={parent:t,pattern:o,get child(){return n()},path:m,params:f,data:t.data,outlet:a,resolvePath(y){return ie(r.path(),y,m())}};if(u)try{Z=w,w.data=u({data:t.data,params:f,location:i,navigate:l(w)})}finally{Z=void 0}return w}const fn=H("<a></a>"),dn=e=>{const{source:t,url:n,base:s,data:r,out:i}=e,l=t||Jt(),o=an(l,s,r);return T(et.Provider,{value:o,get children(){return e.children}})},hn=e=>{const t=Ce(),n=Le(),s=be(()=>e.children),r=S(()=>nt(s(),Qe(n.pattern,e.base||""),mn)),i=S(()=>ln(r(),t.location.pathname));t.out&&t.out.matches.push(i().map(({route:c,path:u,params:m})=>({originalPath:c.originalPath,pattern:c.pattern,path:u,params:m})));const l=[];let o;const a=S(De(i,(c,u,m)=>{let f=u&&c.length===u.length;const w=[];for(let y=0,N=c.length;y<N;y++){const $=u&&u[y],h=c[y];m&&$&&h.route.key===$.route.key?w[y]=m[y]:(f=!1,l[y]&&l[y](),z(d=>{l[y]=d,w[y]=un(t,w[y-1]||n,()=>a()[y+1],()=>i()[y])}))}return l.splice(c.length).forEach(y=>y()),m&&f?m:(o=w[0],w)}));return T(ze,{get when(){return a()&&o},children:c=>T(fe.Provider,{value:c,get children(){return c.outlet()}})})},gn=(e,t)=>()=>T(hn,{base:t,children:e}),mn=()=>{const e=Le();return T(ze,{get when(){return e.child},children:t=>T(fe.Provider,{value:t,get children(){return t.outlet()}})})};function yn(e){const[,t]=At(e,["children","to","href","state"]),n=sn(()=>e.to);return(()=>{const s=fn.cloneNode(!0);return Bt(s,t,!1,!0),K(s,()=>e.children),j(r=>{const i=n()||e.href,l=JSON.stringify(e.state);return i!==r._v$&&ge(s,"href",r._v$=i),l!==r._v$2&&ge(s,"state",r._v$2=l),r},{_v$:void 0,_v$2:void 0}),s})()}function st(e){const t=nn(()=>e.href);return T(yn,Ee(e,{get to(){return t()}}))}const wn="modulepreload",pn=function(e){return"/"+e},qe={},Be=function(t,n,s){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=pn(r),r in qe)return;qe[r]=!0;const i=r.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${l}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":wn,i||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),i)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},bn=H('<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>'),xn=H('<div class="avatar"><div class="w-10 mask mask-squircle"><img src="/src/assets/pfp.jpg"></div></div>'),vn=H('<div class="btm-nav" id="navbar"></div>');function An(){return bn.cloneNode(!0)}function En(){return xn.cloneNode(!0)}function Cn(e){const t=Ee({active:0},e),n=[{id:0,name:"root",href:"/",insideElement:An},{id:1,name:"info",href:"/info",insideElement:En}];return(()=>{const s=vn.cloneNode(!0);return K(s,T(Et,{each:n,children:r=>[Re(()=>console.log(t.active)),Re(()=>console.log(r)),T(st,{get class(){return t.active==r.id?"active":""},get href(){return r.href},get children(){return r.insideElement()}})]})),s})()}const Ln=H('<div class="hero min-h-screen bg-base-200"><div class="hero-content text-center"><div class="max-w-md"><h1 class="text-5xl font-bold">Welcome to my website!</h1><p class="py-6">A student, a learner, a self-taught developer.</p></div></div></div>');function Sn(){return(()=>{const e=Ln.cloneNode(!0),t=e.firstChild,n=t.firstChild;return n.firstChild.nextSibling,K(n,T(st,{class:"btn btn-primary",href:"/info",children:"About"}),null),K(e,T(Cn,{active:"0"}),null),e})()}const Pn=[{path:"/",component:Sn},{path:"/info",component:Ne(()=>Be(()=>import("./info.e7195e25.js"),[]))},{path:"**",component:Ne(()=>Be(()=>import("./404.855774b2.js"),[]))}];function Me(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}const $n=e=>{let t,n=!0;const[s,r]=k(),[i,l]=k(),o=be(()=>e.children),a=e.name||"s";e=Ee({name:a,enterActiveClass:a+"-enter-active",enterClass:a+"-enter",enterToClass:a+"-enter-to",exitActiveClass:a+"-exit-active",exitClass:a+"-exit",exitToClass:a+"-exit-to"},e);const{onBeforeEnter:c,onEnter:u,onAfterEnter:m,onBeforeExit:f,onExit:w,onAfterExit:y}=e;function N(h,d){if(!n||e.appear){let L=function(g){h&&(!g||g.target===h)&&(h.removeEventListener("transitionend",L),h.removeEventListener("animationend",L),h.classList.remove(...C),h.classList.remove(...P),Y(()=>{s()!==h&&r(h),i()===h&&l(void 0)}),m&&m(h),e.mode==="inout"&&$(h,d))};const b=e.enterClass.split(" "),C=e.enterActiveClass.split(" "),P=e.enterToClass.split(" ");c&&c(h),h.classList.add(...b),h.classList.add(...C),Me(()=>{h.classList.remove(...b),h.classList.add(...P),u&&u(h,()=>L()),(!u||u.length<2)&&(h.addEventListener("transitionend",L),h.addEventListener("animationend",L))})}d&&!e.mode?l(h):r(h)}function $(h,d){const b=e.exitClass.split(" "),C=e.exitActiveClass.split(" "),P=e.exitToClass.split(" ");if(!d.parentNode)return L();f&&f(d),d.classList.add(...b),d.classList.add(...C),Me(()=>{d.classList.remove(...b),d.classList.add(...P)}),w&&w(d,()=>L()),(!w||w.length<2)&&(d.addEventListener("transitionend",L),d.addEventListener("animationend",L));function L(g){(!g||g.target===d)&&(d.removeEventListener("transitionend",L),d.removeEventListener("animationend",L),d.classList.remove(...C),d.classList.remove(...P),s()===d&&r(void 0),y&&y(d),e.mode==="outin"&&N(h,d))}}return ce(h=>{for(t=o();typeof t=="function";)t=t();return _(()=>(t&&t!==h&&(e.mode!=="outin"?N(t,h):n&&r(t)),h&&h!==t&&e.mode!=="inout"&&$(t,h),n=!1,t))}),[s,i]},Nn=H("<div><main></main></div>");function Tn(){const e=gn(Pn);return T(dn,{get children(){const t=Nn.cloneNode(!0),n=t.firstChild;return K(n,T($n,{onEnter:(s,r)=>{s.animate([{opacity:0},{opacity:1}],{duration:600}).finished.then(r)},onExit:(s,r)=>{s.animate([{opacity:1},{opacity:0}],{duration:400}).finished.then(r)},get children(){return T(e,{})}})),t}})}Rt(()=>T(Tn,{}),document.getElementById("root"));export{Cn as N,T as c,K as i,H as t};