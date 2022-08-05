const rt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};rt();const R={};function Se(e){R.context=e}function it(){return{...R.context,id:`${R.context.id}${R.context.count++}-`,count:0}}const ot=(e,t)=>e===t,lt=Symbol("solid-proxy"),ct=Symbol("solid-track"),re={equals:ot};let at=He;const F={},U=1,ie=2,Be={owned:null,cleanups:null,context:null,owner:null},[ut,Rn]=I(!1);var p=null;let Z=null,x=null,G=null,S=null,k=null,he=0;function Q(e,t){const n=x,s=p,r=e.length===0,i=r?Be:{owned:null,cleanups:null,context:null,owner:t||s},l=r?e:()=>e(()=>xe(i));p=i,x=null;try{return ce(l,!0)}finally{x=n,p=s}}function I(e,t){t=t?Object.assign({},re,t):re;const n={value:e,observers:null,observerSlots:null,pending:F,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(r=r(n.pending!==F?n.pending:n.value)),pe(n,r));return[Fe.bind(n),s]}function Ue(e,t,n){const s=be(e,t,!0,U);ee(s)}function j(e,t,n){const s=be(e,t,!1,U);ee(s)}function E(e,t,n){n=n?Object.assign({},re,n):re;const s=be(e,t,!0,0);return s.pending=F,s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,ee(s),Fe.bind(s)}function ge(e){if(G)return e();let t;const n=G=[];try{t=e()}finally{G=null}return ce(()=>{for(let s=0;s<n.length;s+=1){const r=n[s];if(r.pending!==F){const i=r.pending;r.pending=F,pe(r,i)}}},!1),t}function O(e){let t,n=x;return x=null,t=e(),x=n,t}function De(e,t,n){const s=Array.isArray(e);let r,i=n&&n.defer;return l=>{let o;if(s){o=Array(e.length);for(let c=0;c<e.length;c++)o[c]=e[c]()}else o=e();if(i){i=!1;return}const u=O(()=>t(o,r,l));return r=o,u}}function me(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}function ft(){return p}function dt(e,t){const n=p;p=e;try{return ce(t,!0)}finally{p=n}}function ht(e){const t=x,n=p;return Promise.resolve().then(()=>{x=t,p=n;let s;return ge(e),x=p=null,s?s.done:void 0})}function gt(){return[ut,ht]}function Me(e){const t=Symbol("context");return{id:t,Provider:wt(t),defaultValue:e}}function ye(e){let t;return(t=Xe(p,e.id))!==void 0?t:e.defaultValue}function we(e){const t=E(e);return E(()=>fe(t()))}function Fe(){const e=Z;if(this.sources&&(this.state||e)){const t=S;S=null,this.state===U||e?ee(this):oe(this),S=t}if(x){const t=this.observers?this.observers.length:0;x.sources?(x.sources.push(this),x.sourceSlots.push(t)):(x.sources=[this],x.sourceSlots=[t]),this.observers?(this.observers.push(x),this.observerSlots.push(x.sources.length-1)):(this.observers=[x],this.observerSlots=[x.sources.length-1])}return this.value}function pe(e,t,n){if(G)return e.pending===F&&G.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let s=!1;return e.value=t,e.observers&&e.observers.length&&ce(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r];s&&Z.disposed.has(i),(s&&!i.tState||!s&&!i.state)&&(i.pure?S.push(i):k.push(i),i.observers&&Ve(i)),s||(i.state=U)}if(S.length>1e6)throw S=[],new Error},!1),t}function ee(e){if(!e.fn)return;xe(e);const t=p,n=x,s=he;x=p=e,mt(e,e.value,s),x=n,p=t}function mt(e,t,n){let s;try{s=e.fn(t)}catch(r){We(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?pe(e,s):e.value=s,e.updatedAt=n)}function be(e,t,n,s=U,r){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:null,pure:n};return p===null||p!==Be&&(p.owned?p.owned.push(i):p.owned=[i]),i}function Ke(e){const t=Z;if(e.state===0||t)return;if(e.state===ie||t)return oe(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<he);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===U||t)ee(e);else if(e.state===ie||t){const r=S;S=null,oe(e,n[0]),S=r}}function ce(e,t){if(S)return e();let n=!1;t||(S=[]),k?n=!0:k=[],he++;try{const s=e();return yt(n),s}catch(s){S||(k=null),We(s)}}function yt(e){S&&(He(S),S=null),!e&&(k.length?ge(()=>{at(k),k=null}):k=null)}function He(e){for(let t=0;t<e.length;t++)Ke(e[t])}function oe(e,t){const n=Z;e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];r.sources&&(r.state===U||n?r!==t&&Ke(r):(r.state===ie||n)&&oe(r,t))}}function Ve(e){const t=Z;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=ie,s.pure?S.push(s):k.push(s),s.observers&&Ve(s))}}function xe(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),l=n.observerSlots.pop();s<r.length&&(i.sourceSlots[l]=s,r[s]=i,n.observerSlots[s]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)xe(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function We(e){throw e}function Xe(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Xe(e.owner,t):void 0}function fe(e){if(typeof e=="function"&&!e.length)return fe(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=fe(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function wt(e){return function(n){let s;return Ue(()=>s=O(()=>(p.context={[e]:n.value},we(()=>n.children)))),s}}const pt=Symbol("fallback");function Pe(e){for(let t=0;t<e.length;t++)e[t]()}function bt(e,t,n={}){let s=[],r=[],i=[],l=0,o=t.length>1?[]:null;return me(()=>Pe(i)),()=>{let u=e()||[],c,a;return u[ct],O(()=>{let g=u.length,y,m,$,_,f,d,b,A,P;if(g===0)l!==0&&(Pe(i),i=[],s=[],r=[],l=0,o&&(o=[])),n.fallback&&(s=[pt],r[0]=Q(L=>(i[0]=L,n.fallback())),l=1);else if(l===0){for(r=new Array(g),a=0;a<g;a++)s[a]=u[a],r[a]=Q(h);l=g}else{for($=new Array(g),_=new Array(g),o&&(f=new Array(g)),d=0,b=Math.min(l,g);d<b&&s[d]===u[d];d++);for(b=l-1,A=g-1;b>=d&&A>=d&&s[b]===u[A];b--,A--)$[A]=r[b],_[A]=i[b],o&&(f[A]=o[b]);for(y=new Map,m=new Array(A+1),a=A;a>=d;a--)P=u[a],c=y.get(P),m[a]=c===void 0?-1:c,y.set(P,a);for(c=d;c<=b;c++)P=s[c],a=y.get(P),a!==void 0&&a!==-1?($[a]=r[c],_[a]=i[c],o&&(f[a]=o[c]),a=m[a],y.set(P,a)):i[c]();for(a=d;a<g;a++)a in $?(r[a]=$[a],i[a]=_[a],o&&(o[a]=f[a],o[a](a))):r[a]=Q(h);r=r.slice(0,l=g),s=u.slice(0)}return r});function h(g){if(i[a]=g,o){const[y,m]=I(a);return o[a]=m,t(u[a],y)}return t(u[a])}}}let xt=!1;function C(e,t){if(xt&&R.context){const n=R.context;Se(it());const s=O(()=>e(t||{}));return Se(n),s}return O(()=>e(t||{}))}function ne(){return!0}const Je={get(e,t,n){return t===lt?n:e.get(t)},has(e,t){return e.has(t)},set:ne,deleteProperty:ne,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ne,deleteProperty:ne}},ownKeys(e){return e.keys()}};function ue(e){return(e=typeof e=="function"?e():e)==null?{}:e}function ve(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const s=ue(e[n])[t];if(s!==void 0)return s}},has(t){for(let n=e.length-1;n>=0;n--)if(t in ue(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(ue(e[n])));return[...new Set(t)]}},Je)}function vt(e,...t){const n=new Set(t.flat()),s=Object.getOwnPropertyDescriptors(e),r=t.map(i=>{const l={};for(let o=0;o<i.length;o++){const u=i[o];Object.defineProperty(l,u,s[u]?s[u]:{get(){return e[u]},set(){return!0}})}return l});return r.push(new Proxy({get(i){return n.has(i)?void 0:e[i]},has(i){return n.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!n.has(i))}},Je)),r}function At(e){const t="fallback"in e&&{fallback:()=>e.fallback};return E(bt(()=>e.each,e.children,t||void 0))}function Ge(e){let t=!1;const n=E(()=>e.when,void 0,{equals:(s,r)=>t?s===r:!s==!r});return E(()=>{const s=n();if(s){const r=e.children;return(t=typeof r=="function"&&r.length>0)?O(()=>r(s)):r}return e.fallback})}const Et=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Ct=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Et]),Lt=new Set(["innerHTML","textContent","innerText","children"]),St={className:"class",htmlFor:"for"},$e={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},Pt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),$t={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Ne(e,t){return E(e,void 0,t?void 0:{equals:t})}function Nt(e,t,n){let s=n.length,r=t.length,i=s,l=0,o=0,u=t[r-1].nextSibling,c=null;for(;l<r||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===l){const a=i<s?o?n[o-1].nextSibling:n[i-o]:u;for(;o<i;)e.insertBefore(n[o++],a)}else if(i===o)for(;l<r;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[r-1]){const a=t[--r].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],a),t[r]=n[i]}else{if(!c){c=new Map;let h=o;for(;h<i;)c.set(n[h],h++)}const a=c.get(t[l]);if(a!=null)if(o<a&&a<i){let h=l,g=1,y;for(;++h<r&&h<i&&!((y=c.get(t[h]))==null||y!==a+g);)g++;if(g>a-o){const m=t[l];for(;o<a;)e.insertBefore(n[o++],m)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const Te="_$DX_DELEGATE";function Tt(e,t,n){let s;return Q(r=>{s=r,t===document?e():K(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function V(e,t,n){const s=document.createElement("template");s.innerHTML=e;let r=s.content.firstChild;return n&&(r=r.firstChild),r}function Rt(e,t=window.document){const n=t[Te]||(t[Te]=new Set);for(let s=0,r=e.length;s<r;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,Dt))}}function le(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function _t(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function Ot(e,t){t==null?e.removeAttribute("class"):e.className=t}function kt(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=i=>r.call(e,n[1],i))}else e.addEventListener(t,n)}function It(e,t,n={}){const s=Object.keys(t||{}),r=Object.keys(n);let i,l;for(i=0,l=r.length;i<l;i++){const o=r[i];!o||o==="undefined"||t[o]||(Re(e,o,!1),delete n[o])}for(i=0,l=s.length;i<l;i++){const o=s[i],u=!!t[o];!o||o==="undefined"||n[o]===u||!u||(Re(e,o,!0),n[o]=u)}return n}function jt(e,t,n={}){const s=e.style,r=typeof n=="string";if(t==null&&r||typeof t=="string")return s.cssText=t;r&&(s.cssText=void 0,n={}),t||(t={});let i,l;for(l in n)t[l]==null&&s.removeProperty(l),delete n[l];for(l in t)i=t[l],i!==n[l]&&(s.setProperty(l,i),n[l]=i);return n}function qt(e,t,n,s){typeof t=="function"?j(r=>Oe(e,t(),r,n,s)):Oe(e,t,void 0,n,s)}function K(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return H(e,t,s,n);j(r=>H(e,t(),r,n),s)}function Bt(e,t,n,s,r={},i=!1){t||(t={});for(const l in r)if(!(l in t)){if(l==="children")continue;_e(e,l,null,r[l],n,i)}for(const l in t){if(l==="children"){s||H(e,t.children);continue}const o=t[l];r[l]=_e(e,l,o,r[l],n,i)}}function Ut(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Re(e,t,n){const s=t.trim().split(/\s+/);for(let r=0,i=s.length;r<i;r++)e.classList.toggle(s[r],n)}function _e(e,t,n,s,r,i){let l,o,u;if(t==="style")return jt(e,n,s);if(t==="classList")return It(e,n,s);if(n===s)return s;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const c=t.slice(3);s&&e.removeEventListener(c,s),n&&e.addEventListener(c,n)}else if(t.slice(0,10)==="oncapture:"){const c=t.slice(10);s&&e.removeEventListener(c,s,!0),n&&e.addEventListener(c,n,!0)}else if(t.slice(0,2)==="on"){const c=t.slice(2).toLowerCase(),a=Pt.has(c);if(!a&&s){const h=Array.isArray(s)?s[0]:s;e.removeEventListener(c,h)}(a||n)&&(kt(e,c,n,a),a&&Rt([c]))}else if((u=Lt.has(t))||!r&&($e[t]||(o=Ct.has(t)))||(l=e.nodeName.includes("-")))t==="class"||t==="className"?Ot(e,n):l&&!o&&!u?e[Ut(t)]=n:e[$e[t]||t]=n;else{const c=r&&t.indexOf(":")>-1&&$t[t.split(":")[0]];c?_t(e,c,t,n):le(e,St[t]||t,n)}return n}function Dt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),R.registry&&!R.done&&(R.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n!==null;){const s=n[t];if(s&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?s.call(n,r,e):s.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function Oe(e,t,n={},s,r){return t||(t={}),!r&&"children"in t&&j(()=>n.children=H(e,t.children,n.children)),t.ref&&t.ref(e),j(()=>Bt(e,t,s,!0,n,!0)),n}function H(e,t,n,s,r){for(R.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(R.context)return n;if(i==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=D(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(R.context)return n;n=D(e,n,s)}else{if(i==="function")return j(()=>{let o=t();for(;typeof o=="function";)o=o();n=H(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],u=n&&Array.isArray(n);if(de(o,t,n,r))return j(()=>n=H(e,o,n,s,!0)),()=>n;if(R.context){for(let c=0;c<o.length;c++)if(o[c].parentNode)return n=o}if(o.length===0){if(n=D(e,n,s),l)return n}else u?n.length===0?ke(e,o,s):Nt(e,n,o):(n&&D(e),ke(e,o));n=o}else if(t instanceof Node){if(R.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=D(e,n,s,t);D(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function de(e,t,n,s){let r=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],u=n&&n[i];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))r=de(e,o,u)||r;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();r=de(e,Array.isArray(o)?o:[o],u)||r}else e.push(o),r=!0;else{const c=String(o);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return r}function ke(e,t,n){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function D(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(r!==o){const u=o.parentNode===e;!i&&!l?u?e.replaceChild(r,o):e.insertBefore(r,n):u&&o.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}function Mt(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Ft([e,t],n,s){return[n?()=>n(e()):e,s?r=>t(s(r)):t]}function Kt(e){try{return document.querySelector(e)}catch{return null}}function Ht(e,t){const n=Kt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function Vt(e,t,n,s){let r=!1;const i=o=>typeof o=="string"?{value:o}:o,l=Ft(I(i(e()),{equals:(o,u)=>o.value===u.value}),void 0,o=>(!r&&t(o),o));return n&&me(n((o=e())=>{r=!0,l[1](i(o)),r=!1})),{signal:l,utils:s}}function Wt(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:I({value:""})};return e}function Xt(){return Vt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:s})=>{t?window.history.replaceState(s,"",e):window.history.pushState(s,"",e),Ht(window.location.hash.slice(1),n)},e=>Mt(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}const Jt=/^(?:[a-z0-9]+:)?\/\//i,Gt=/^\/+|\/+$/g;function Y(e,t=!1){const n=e.replace(Gt,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function se(e,t,n){if(Jt.test(t))return;const s=Y(e),r=n&&Y(n);let i="";return!r||t.startsWith("/")?i=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?i=s+r:i=r,(i||"/")+Y(t,!i)}function Qt(e,t){if(e==null)throw new Error(t);return e}function Qe(e,t){return Y(e).replace(/\/*(\*.*)?$/g,"")+Y(t)}function Yt(e){const t={};return e.searchParams.forEach((n,s)=>{t[s]=n}),t}function M(e,t){return decodeURIComponent(t?e.replace(/\+/g," "):e)}function zt(e,t){const[n,s]=e.split("/*",2),r=n.split("/").filter(Boolean),i=r.length;return l=>{const o=l.split("/").filter(Boolean),u=o.length-i;if(u<0||u>0&&s===void 0&&!t)return null;const c={path:i?"":"/",params:{}};for(let a=0;a<i;a++){const h=r[a],g=o[a];if(h[0]===":")c.params[h.slice(1)]=g;else if(h.localeCompare(g,void 0,{sensitivity:"base"})!==0)return null;c.path+=`/${g}`}return s&&(c.params[s]=u?o.slice(-u).join("/"):""),c}}function Zt(e){const[t,n]=e.pattern.split("/*",2),s=t.split("/").filter(Boolean);return s.reduce((r,i)=>r+(i.startsWith(":")?2:3),s.length-(n===void 0?0:1))}function Ye(e){const t=new Map,n=ft();return new Proxy({},{get(s,r){return t.has(r)||dt(n,()=>t.set(r,E(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function ze(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),s=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(s);)r.push(n+=t[1]),s=s.slice(t[0].length);return ze(s).reduce((i,l)=>[...i,...r.map(o=>o+l)],[])}const en=100,Ze=Me(),ae=Me(),Ae=()=>Qt(ye(Ze),"Make sure your app is wrapped in a <Router />");let z;const Ee=()=>z||ye(ae)||Ae().base,tn=e=>{const t=Ee();return E(()=>t.resolvePath(e()))},nn=e=>{const t=Ae();return E(()=>{const n=e();return n!==void 0?t.renderPath(n):n})};function sn(e,t="",n){const{component:s,data:r,children:i}=e,l=!i||Array.isArray(i)&&!i.length,o={key:e,element:s?()=>C(s,{}):()=>{const{element:u}=e;return u===void 0&&n?C(n,{}):u},preload:e.component?s.preload:e.preload,data:r};return et(e.path).reduce((u,c)=>{for(const a of ze(c)){const h=Qe(t,a),g=l?h:h.split("/*",1)[0];u.push({...o,originalPath:a,pattern:g,matcher:zt(g,!l)})}return u},[])}function rn(e,t=0){return{routes:e,score:Zt(e[e.length-1])*1e4-t,matcher(n){const s=[];for(let r=e.length-1;r>=0;r--){const i=e[r],l=i.matcher(n);if(!l)return null;s.unshift({...l,route:i})}return s}}}function et(e){return Array.isArray(e)?e:[e]}function tt(e,t="",n,s=[],r=[]){const i=et(e);for(let l=0,o=i.length;l<o;l++){const u=i[l];if(u&&typeof u=="object"&&u.hasOwnProperty("path")){const c=sn(u,t,n);for(const a of c){if(s.push(a),u.children)tt(u.children,a.pattern,n,s,r);else{const h=rn([...s],r.length);r.push(h)}s.pop()}}}return s.length?r:r.sort((l,o)=>o.score-l.score)}function on(e,t){for(let n=0,s=e.length;n<s;n++){const r=e[n].matcher(t);if(r)return r}return[]}function ln(e,t){const n=new URL("http://sar"),s=E(u=>{const c=e();try{return new URL(c,n)}catch{return console.error(`Invalid path ${c}`),u}},n,{equals:(u,c)=>u.href===c.href}),r=E(()=>M(s().pathname)),i=E(()=>M(s().search,!0)),l=E(()=>M(s().hash)),o=E(()=>"");return{get pathname(){return r()},get search(){return i()},get hash(){return l()},get state(){return t()},get key(){return o()},query:Ye(De(i,()=>Yt(s())))}}function cn(e,t="",n,s){const{signal:[r,i],utils:l={}}=Wt(e),o=l.parsePath||(w=>w),u=l.renderPath||(w=>w),c=se("",t),a=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!r().value&&i({value:c,replace:!0,scroll:!1});const[h,g]=gt(),[y,m]=I(r().value),[$,_]=I(r().state),f=ln(y,$),d=[],b={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(w){return se(c,w)}};if(n)try{z=b,b.data=n({data:void 0,params:{},location:f,navigate:P(b)})}finally{z=void 0}function A(w,v,N){O(()=>{if(typeof v=="number"){v&&(l.go?l.go(v):console.warn("Router integration does not support relative routing"));return}const{replace:T,resolve:W,scroll:X,state:te}={replace:!1,resolve:!0,scroll:!0,...N},q=W?w.resolvePath(v):se("",v);if(q===void 0)throw new Error(`Path '${v}' is not a routable path`);if(d.length>=en)throw new Error("Too many redirects");const B=y();if(q!==B||te!==$()){const J=d.push({value:B,replace:T,scroll:X,state:$()});g(()=>{m(q),_(te)}).then(()=>{d.length===J&&L({value:q,state:te})})}})}function P(w){return w=w||ye(ae)||b,(v,N)=>A(w,v,N)}function L(w){const v=d[0];v&&((w.value!==v.value||w.state!==v.state)&&i({...w,replace:v.replace,scroll:v.scroll}),d.length=0)}j(()=>{const{value:w,state:v}=r();O(()=>{w!==y()&&g(()=>{m(w),_(v)})})});{let w=function(N){return N.namespaceURI==="http://www.w3.org/2000/svg"},v=function(N){if(N.defaultPrevented||N.button!==0||N.metaKey||N.altKey||N.ctrlKey||N.shiftKey)return;const T=N.composedPath().find(Le=>Le instanceof Node&&Le.nodeName.toUpperCase()==="A");if(!T)return;const W=w(T),X=W?T.href.baseVal:T.href;if((W?T.target.baseVal:T.target)||!X&&!T.hasAttribute("state"))return;const q=(T.getAttribute("rel")||"").split(/\s+/);if(T.hasAttribute("download")||q&&q.includes("external"))return;const B=W?new URL(X,document.baseURI):new URL(X),J=M(B.pathname);if(B.origin!==window.location.origin||c&&J&&!J.toLowerCase().startsWith(c.toLowerCase()))return;const st=o(J+M(B.search,!0)+M(B.hash)),Ce=T.getAttribute("state");N.preventDefault(),A(b,st,{resolve:!1,replace:T.hasAttribute("replace"),scroll:!T.hasAttribute("noscroll"),state:Ce&&JSON.parse(Ce)})};document.addEventListener("click",v),me(()=>document.removeEventListener("click",v))}return{base:b,out:a,location:f,isRouting:h,renderPath:u,parsePath:o,navigatorFactory:P}}function an(e,t,n,s){const{base:r,location:i,navigatorFactory:l}=e,{pattern:o,element:u,preload:c,data:a}=s().route,h=E(()=>s().path),g=Ye(()=>s().params);c&&c();const y={parent:t,pattern:o,get child(){return n()},path:h,params:g,data:t.data,outlet:u,resolvePath(m){return se(r.path(),m,h())}};if(a)try{z=y,y.data=a({data:t.data,params:g,location:i,navigate:l(y)})}finally{z=void 0}return y}const un=V("<a></a>"),fn=e=>{const{source:t,url:n,base:s,data:r,out:i}=e,l=t||Xt(),o=cn(l,s,r);return C(Ze.Provider,{value:o,get children(){return e.children}})},dn=e=>{const t=Ae(),n=Ee(),s=we(()=>e.children),r=E(()=>tt(s(),Qe(n.pattern,e.base||""),gn)),i=E(()=>on(r(),t.location.pathname));t.out&&t.out.matches.push(i().map(({route:c,path:a,params:h})=>({originalPath:c.originalPath,pattern:c.pattern,path:a,params:h})));const l=[];let o;const u=E(De(i,(c,a,h)=>{let g=a&&c.length===a.length;const y=[];for(let m=0,$=c.length;m<$;m++){const _=a&&a[m],f=c[m];h&&_&&f.route.key===_.route.key?y[m]=h[m]:(g=!1,l[m]&&l[m](),Q(d=>{l[m]=d,y[m]=an(t,y[m-1]||n,()=>u()[m+1],()=>i()[m])}))}return l.splice(c.length).forEach(m=>m()),h&&g?h:(o=y[0],y)}));return C(Ge,{get when(){return u()&&o},children:c=>C(ae.Provider,{value:c,get children(){return c.outlet()}})})},hn=(e,t)=>()=>C(dn,{base:t,children:e}),gn=()=>{const e=Ee();return C(Ge,{get when(){return e.child},children:t=>C(ae.Provider,{value:t,get children(){return t.outlet()}})})};function mn(e){const[,t]=vt(e,["children","to","href","state"]),n=nn(()=>e.to);return(()=>{const s=un.cloneNode(!0);return qt(s,t,!1,!0),K(s,()=>e.children),j(r=>{const i=n()||e.href,l=JSON.stringify(e.state);return i!==r._v$&&le(s,"href",r._v$=i),l!==r._v$2&&le(s,"state",r._v$2=l),r},{_v$:void 0,_v$2:void 0}),s})()}function nt(e){const t=tn(()=>e.href);return C(mn,ve(e,{get to(){return t()}}))}const yn="modulepreload",wn=function(e){return"/"+e},Ie={},je=function(t,n,s){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=wn(r),r in Ie)return;Ie[r]=!0;const i=r.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${l}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":yn,i||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),i)return new Promise((u,c)=>{o.addEventListener("load",u),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},pn="/assets/pfp.ac5b03f0.jpg",bn=V('<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>'),xn=V('<div class="avatar"><div class="w-10 mask mask-squircle"><img></div></div>'),vn=V('<div class="btm-nav" id="navbar"></div>');function An(){return bn.cloneNode(!0)}function En(){return(()=>{const e=xn.cloneNode(!0),t=e.firstChild,n=t.firstChild;return le(n,"src",pn),e})()}function Cn(e){const t=ve({active:0},e),n=[{id:0,name:"root",href:"/",insideElement:An},{id:1,name:"info",href:"/info",insideElement:En}];return(()=>{const s=vn.cloneNode(!0);return K(s,C(At,{each:n,children:r=>[Ne(()=>console.log(t.active)),Ne(()=>console.log(r)),C(nt,{get class(){return t.active==r.id?"active":""},get href(){return r.href},get children(){return r.insideElement()}})]})),s})()}const Ln=V('<div class="hero min-h-screen bg-base-200"><div class="hero-content text-center"><div class="max-w-md"><h1 class="text-5xl font-bold">Welcome to my website!</h1><p class="py-6">A student, a learner, a self-taught developer.</p></div></div></div>');function Sn(){return(()=>{const e=Ln.cloneNode(!0),t=e.firstChild,n=t.firstChild;return n.firstChild.nextSibling,K(n,C(nt,{class:"btn btn-primary",href:"/info",children:"About"}),null),K(e,C(Cn,{active:"0"}),null),e})()}const Pn=[{path:"/",component:Sn},{path:"/info",component:je(()=>import("./info.1921d1a8.js"),[])},{path:"**",component:je(()=>import("./404.5d935101.js"),[])}];function qe(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}const $n=e=>{let t,n=!0;const[s,r]=I(),[i,l]=I(),o=we(()=>e.children),u=e.name||"s";e=ve({name:u,enterActiveClass:u+"-enter-active",enterClass:u+"-enter",enterToClass:u+"-enter-to",exitActiveClass:u+"-exit-active",exitClass:u+"-exit",exitToClass:u+"-exit-to"},e);const{onBeforeEnter:c,onEnter:a,onAfterEnter:h,onBeforeExit:g,onExit:y,onAfterExit:m}=e;function $(f,d){if(!n||e.appear){let L=function(w){f&&(!w||w.target===f)&&(f.removeEventListener("transitionend",L),f.removeEventListener("animationend",L),f.classList.remove(...A),f.classList.remove(...P),ge(()=>{s()!==f&&r(f),i()===f&&l(void 0)}),h&&h(f),e.mode==="inout"&&_(f,d))};const b=e.enterClass.split(" "),A=e.enterActiveClass.split(" "),P=e.enterToClass.split(" ");c&&c(f),f.classList.add(...b),f.classList.add(...A),qe(()=>{f.classList.remove(...b),f.classList.add(...P),a&&a(f,()=>L()),(!a||a.length<2)&&(f.addEventListener("transitionend",L),f.addEventListener("animationend",L))})}d&&!e.mode?l(f):r(f)}function _(f,d){const b=e.exitClass.split(" "),A=e.exitActiveClass.split(" "),P=e.exitToClass.split(" ");if(!d.parentNode)return L();g&&g(d),d.classList.add(...b),d.classList.add(...A),qe(()=>{d.classList.remove(...b),d.classList.add(...P)}),y&&y(d,()=>L()),(!y||y.length<2)&&(d.addEventListener("transitionend",L),d.addEventListener("animationend",L));function L(w){(!w||w.target===d)&&(d.removeEventListener("transitionend",L),d.removeEventListener("animationend",L),d.classList.remove(...A),d.classList.remove(...P),s()===d&&r(void 0),m&&m(d),e.mode==="outin"&&$(f,d))}}return Ue(f=>{for(t=o();typeof t=="function";)t=t();return O(()=>(t&&t!==f&&(e.mode!=="outin"?$(t,f):n&&r(t)),f&&f!==t&&e.mode!=="inout"&&_(t,f),n=!1,t))}),[s,i]},Nn=V("<div><main></main></div>");function Tn(){const e=hn(Pn);return C(fn,{get children(){const t=Nn.cloneNode(!0),n=t.firstChild;return K(n,C($n,{onEnter:(s,r)=>{s.animate([{opacity:0},{opacity:1}],{duration:600}).finished.then(r)},onExit:(s,r)=>{s.animate([{opacity:1},{opacity:0}],{duration:600}).finished.then(r)},get children(){return C(e,{})}})),t}})}Tt(()=>C(Tn,{}),document.getElementById("root"));export{Cn as N,C as c,K as i,pn as p,le as s,V as t};
