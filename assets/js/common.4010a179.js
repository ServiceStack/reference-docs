"use strict";(self.webpackChunkdfmg_template=self.webpackChunkdfmg_template||[]).push([[68592],{3905:function(t,e,n){n.d(e,{Zo:function(){return f},kt:function(){return d}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var a=r.createContext({}),l=function(t){var e=r.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},f=function(t){var e=l(t.components);return r.createElement(a.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,a=t.parentName,f=s(t,["components","mdxType","originalType","parentName"]),p=l(n),d=o,h=p["".concat(a,".").concat(d)]||p[d]||u[d]||i;return n?r.createElement(h,c(c({ref:e},f),{},{components:n})):r.createElement(h,c({ref:e},f))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,c=new Array(i);c[0]=p;var s={};for(var a in e)hasOwnProperty.call(e,a)&&(s[a]=e[a]);s.originalType=t,s.mdxType="string"==typeof t?t:o,c[1]=s;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1954:function(t,e,n){n.d(e,{JO:function(){return Lt}});var r=n(67294);const o=/^[a-z0-9]+(-[a-z0-9]+)*$/,i=(t,e,n,r="")=>{const o=t.split(":");if("@"===t.slice(0,1)){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const t=o.pop(),n=o.pop(),i={provider:o.length>0?o[0]:r,prefix:n,name:t};return e&&!c(i)?null:i}const i=o[0],s=i.split("-");if(s.length>1){const t={provider:r,prefix:s.shift(),name:s.join("-")};return e&&!c(t)?null:t}if(n&&""===r){const t={provider:r,prefix:"",name:i};return e&&!c(t,n)?null:t}return null},c=(t,e)=>!!t&&!(""!==t.provider&&!t.provider.match(o)||!(e&&""===t.prefix||t.prefix.match(o))||!t.name.match(o)),s=Object.freeze({left:0,top:0,width:16,height:16}),a=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),l=Object.freeze({...s,...a}),f=Object.freeze({...l,body:"",hidden:!1});function u(t,e){const n=function(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}(t,e);for(const r in f)r in a?r in t&&!(r in n)&&(n[r]=a[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function p(t,e,n){const r=t.icons,o=t.aliases||{};let i={};function c(t){i=u(r[t]||o[t],i)}return c(e),n.forEach(c),u(t,i)}function d(t,e){const n=[];if("object"!=typeof t||"object"!=typeof t.icons)return n;t.not_found instanceof Array&&t.not_found.forEach((t=>{e(t,null),n.push(t)}));const r=function(t,e){const n=t.icons,r=t.aliases||{},o=Object.create(null);return(e||Object.keys(n).concat(Object.keys(r))).forEach((function t(e){if(n[e])return o[e]=[];if(!(e in o)){o[e]=null;const n=r[e]&&r[e].parent,i=n&&t(n);i&&(o[e]=[n].concat(i))}return o[e]})),o}(t);for(const o in r){const i=r[o];i&&(e(o,p(t,o,i)),n.push(o))}return n}const h={provider:"",aliases:{},not_found:{},...s};function g(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function m(t){if("object"!=typeof t||null===t)return null;const e=t;if("string"!=typeof e.prefix||!t.icons||"object"!=typeof t.icons)return null;if(!g(t,h))return null;const n=e.icons;for(const i in n){const t=n[i];if(!i.match(o)||"string"!=typeof t.body||!g(t,f))return null}const r=e.aliases||{};for(const i in r){const t=r[i],e=t.parent;if(!i.match(o)||"string"!=typeof e||!n[e]&&!r[e]||!g(t,f))return null}return e}const y=Object.create(null);function b(t,e){const n=y[t]||(y[t]=Object.create(null));return n[e]||(n[e]=function(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}(t,e))}function v(t,e){return m(e)?d(e,((e,n)=>{n?t.icons[e]=n:t.missing.add(e)})):[]}let x=!1;function w(t){return"boolean"==typeof t&&(x=t),x}function j(t){const e="string"==typeof t?i(t,!0,x):t;if(e){const t=b(e.provider,e.prefix),n=e.name;return t.icons[n]||(t.missing.has(n)?null:void 0)}}function O(t,e){if("object"!=typeof t)return!1;if("string"!=typeof e&&(e=t.provider||""),x&&!e&&!t.prefix){let e=!1;return m(t)&&(t.prefix="",d(t,((t,n)=>{n&&function(t,e){const n=i(t,!0,x);return!!n&&function(t,e,n){try{if("string"==typeof n.body)return t.icons[e]={...n},!0}catch(r){}return!1}(b(n.provider,n.prefix),n.name,e)}(t,n)&&(e=!0)}))),e}const n=t.prefix;if(!c({provider:e,prefix:n,name:"a"}))return!1;return!!v(b(e,n),t)}const k=Object.freeze({width:null,height:null}),_=Object.freeze({...k,...a}),E=/(-?[0-9.]*[0-9]+[0-9.]*)/g,S=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function T(t,e,n){if(1===e)return t;if(n=n||100,"number"==typeof t)return Math.ceil(t*e*n)/n;if("string"!=typeof t)return t;const r=t.split(E);if(null===r||!r.length)return t;const o=[];let i=r.shift(),c=S.test(i);for(;;){if(c){const t=parseFloat(i);isNaN(t)?o.push(i):o.push(Math.ceil(t*e*n)/n)}else o.push(i);if(i=r.shift(),void 0===i)return o.join("");c=!c}}const C=/\sid="(\S+)"/g,I="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16);let F=0;function M(t,e=I){const n=[];let r;for(;r=C.exec(t);)n.push(r[1]);return n.length?(n.forEach((n=>{const r="function"==typeof e?e(n):e+(F++).toString(),o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+o+')([")]|\\.[a-z])',"g"),"$1"+r+"$3")})),t):t}const L=Object.create(null);function P(t,e){L[t]=e}function D(t){return L[t]||L[""]}function N(t){let e;if("string"==typeof t.resources)e=[t.resources];else if(e=t.resources,!(e instanceof Array&&e.length))return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:!0===t.random,index:t.index||0,dataAfterTimeout:!1!==t.dataAfterTimeout}}const z=Object.create(null),A=["https://api.simplesvg.com","https://api.unisvg.com"],R=[];for(;A.length>0;)1===A.length||Math.random()>.5?R.push(A.shift()):R.push(A.pop());function U(t,e){const n=N(e);return null!==n&&(z[t]=n,!0)}function $(t){return z[t]}z[""]=N({resources:["https://api.iconify.design"].concat(R)});let q=(()=>{let t;try{if(t=fetch,"function"==typeof t)return t}catch(e){}})();const J={prepare:(t,e,n)=>{const r=[],o=function(t,e){const n=$(t);if(!n)return 0;let r;if(n.maxURL){let t=0;n.resources.forEach((e=>{const n=e;t=Math.max(t,n.length)}));const o=e+".json?icons=";r=n.maxURL-t-n.path.length-o.length}else r=0;return r}(t,e),i="icons";let c={type:i,provider:t,prefix:e,icons:[]},s=0;return n.forEach(((n,a)=>{s+=n.length+1,s>=o&&a>0&&(r.push(c),c={type:i,provider:t,prefix:e,icons:[]},s=n.length),c.icons.push(n)})),r.push(c),r},send:(t,e,n)=>{if(!q)return void n("abort",424);let r=function(t){if("string"==typeof t){const e=$(t);if(e)return e.path}return"/"}(e.provider);switch(e.type){case"icons":{const t=e.prefix,n=e.icons.join(",");r+=t+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const t=e.uri;r+="/"===t.slice(0,1)?t.slice(1):t;break}default:return void n("abort",400)}let o=503;q(t+r).then((t=>{const e=t.status;if(200===e)return o=501,t.json();setTimeout((()=>{n(function(t){return 404===t}(e)?"abort":"next",e)}))})).then((t=>{"object"==typeof t&&null!==t?setTimeout((()=>{n("success",t)})):setTimeout((()=>{n("next",o)}))})).catch((()=>{n("next",o)}))}};function Q(t,e){t.forEach((t=>{const n=t.loaderCallbacks;n&&(t.loaderCallbacks=n.filter((t=>t.id!==e)))}))}let H=0;var X={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function B(t,e,n,r){const o=t.resources.length,i=t.random?Math.floor(Math.random()*o):t.index;let c;if(t.random){let e=t.resources.slice(0);for(c=[];e.length>1;){const t=Math.floor(Math.random()*e.length);c.push(e[t]),e=e.slice(0,t).concat(e.slice(t+1))}c=c.concat(e)}else c=t.resources.slice(i).concat(t.resources.slice(0,i));const s=Date.now();let a,l="pending",f=0,u=null,p=[],d=[];function h(){u&&(clearTimeout(u),u=null)}function g(){"pending"===l&&(l="aborted"),h(),p.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),p=[]}function m(t,e){e&&(d=[]),"function"==typeof t&&d.push(t)}function y(){l="failed",d.forEach((t=>{t(void 0,a)}))}function b(){p.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),p=[]}function v(){if("pending"!==l)return;h();const r=c.shift();if(void 0===r)return p.length?void(u=setTimeout((()=>{h(),"pending"===l&&(b(),y())}),t.timeout)):void y();const o={status:"pending",resource:r,callback:(e,n)=>{!function(e,n,r){const o="success"!==n;switch(p=p.filter((t=>t!==e)),l){case"pending":break;case"failed":if(o||!t.dataAfterTimeout)return;break;default:return}if("abort"===n)return a=r,void y();if(o)return a=r,void(p.length||(c.length?v():y()));if(h(),b(),!t.random){const n=t.resources.indexOf(e.resource);-1!==n&&n!==t.index&&(t.index=n)}l="completed",d.forEach((t=>{t(r)}))}(o,e,n)}};p.push(o),f++,u=setTimeout(v,t.rotate),n(r,e,o.callback)}return"function"==typeof r&&d.push(r),setTimeout(v),function(){return{startTime:s,payload:e,status:l,queriesSent:f,queriesPending:p.length,subscribe:m,abort:g}}}function W(t){const e={...X,...t};let n=[];function r(){n=n.filter((t=>"pending"===t().status))}return{query:function(t,o,i){const c=B(e,t,o,((t,e)=>{r(),i&&i(t,e)}));return n.push(c),c},find:function(t){return n.find((e=>t(e)))||null},setIndex:t=>{e.index=t},getIndex:()=>e.index,cleanup:r}}function Z(){}const G=Object.create(null);function K(t,e,n){let r,o;if("string"==typeof t){const e=D(t);if(!e)return n(void 0,424),Z;o=e.send;const i=function(t){if(!G[t]){const e=$(t);if(!e)return;const n={config:e,redundancy:W(e)};G[t]=n}return G[t]}(t);i&&(r=i.redundancy)}else{const e=N(t);if(e){r=W(e);const n=D(t.resources?t.resources[0]:"");n&&(o=n.send)}}return r&&o?r.query(e,o,n)().abort:(n(void 0,424),Z)}const V="iconify2",Y="iconify",tt="iconify-count",et="iconify-version",nt=36e5;function rt(t,e){try{return t.getItem(e)}catch(n){}}function ot(t,e,n){try{return t.setItem(e,n),!0}catch(r){}}function it(t,e){try{t.removeItem(e)}catch(n){}}function ct(t,e){return ot(t,tt,e.toString())}function st(t){return parseInt(rt(t,tt))||0}const at={local:!0,session:!0},lt={local:new Set,session:new Set};let ft=!1;let ut="undefined"==typeof window?{}:window;function pt(t){const e=t+"Storage";try{if(ut&&ut[e]&&"number"==typeof ut[e].length)return ut[e]}catch(n){}at[t]=!1}function dt(t,e){const n=pt(t);if(!n)return;const r=rt(n,et);if(r!==V){if(r){const t=st(n);for(let e=0;e<t;e++)it(n,Y+e.toString())}return ot(n,et,V),void ct(n,0)}const o=Math.floor(Date.now()/nt)-168,i=t=>{const r=Y+t.toString(),i=rt(n,r);if("string"==typeof i){try{const n=JSON.parse(i);if("object"==typeof n&&"number"==typeof n.cached&&n.cached>o&&"string"==typeof n.provider&&"object"==typeof n.data&&"string"==typeof n.data.prefix&&e(n,t))return!0}catch(c){}it(n,r)}};let c=st(n);for(let s=c-1;s>=0;s--)i(s)||(s===c-1?(c--,ct(n,c)):lt[t].add(s))}function ht(){if(!ft){ft=!0;for(const t in at)dt(t,(t=>{const e=t.data,n=b(t.provider,e.prefix);if(!v(n,e).length)return!1;const r=e.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,r):r,!0}))}}function gt(t,e){function n(n){let r;if(!at[n]||!(r=pt(n)))return;const o=lt[n];let i;if(o.size)o.delete(i=Array.from(o).shift());else if(i=st(r),!ct(r,i+1))return;const c={cached:Math.floor(Date.now()/nt),provider:t.provider,data:e};return ot(r,Y+i.toString(),JSON.stringify(c))}ft||ht(),e.lastModified&&!function(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in at)dt(r,(n=>{const r=n.data;return n.provider!==t.provider||r.prefix!==t.prefix||r.lastModified===e}));return!0}(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&delete(e=Object.assign({},e)).not_found,n("local")||n("session"))}function mt(){}function yt(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout((()=>{t.iconsLoaderFlag=!1,function(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout((()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,o=t.prefix;e.forEach((e=>{const i=e.icons,c=i.pending.length;i.pending=i.pending.filter((e=>{if(e.prefix!==o)return!0;const c=e.name;if(t.icons[c])i.loaded.push({provider:r,prefix:o,name:c});else{if(!t.missing.has(c))return n=!0,!0;i.missing.push({provider:r,prefix:o,name:c})}return!1})),i.pending.length!==c&&(n||Q([t],e.id),e.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),e.abort))}))})))}(t)})))}const bt=(t,e)=>{const n=function(t,e=!0,n=!1){const r=[];return t.forEach((t=>{const o="string"==typeof t?i(t,e,n):t;o&&r.push(o)})),r}(t,!0,w()),r=function(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort(((t,e)=>t.provider!==e.provider?t.provider.localeCompare(e.provider):t.prefix!==e.prefix?t.prefix.localeCompare(e.prefix):t.name.localeCompare(e.name)));let r={provider:"",prefix:"",name:""};return t.forEach((t=>{if(r.name===t.name&&r.prefix===t.prefix&&r.provider===t.provider)return;r=t;const o=t.provider,i=t.prefix,c=t.name,s=n[o]||(n[o]=Object.create(null)),a=s[i]||(s[i]=b(o,i));let l;l=c in a.icons?e.loaded:""===i||a.missing.has(c)?e.missing:e.pending;const f={provider:o,prefix:i,name:c};l.push(f)})),e}(n);if(!r.pending.length){let t=!0;return e&&setTimeout((()=>{t&&e(r.loaded,r.missing,r.pending,mt)})),()=>{t=!1}}const o=Object.create(null),c=[];let s,a;return r.pending.forEach((t=>{const{provider:e,prefix:n}=t;if(n===a&&e===s)return;s=e,a=n,c.push(b(e,n));const r=o[e]||(o[e]=Object.create(null));r[n]||(r[n]=[])})),r.pending.forEach((t=>{const{provider:e,prefix:n,name:r}=t,i=b(e,n),c=i.pendingIcons||(i.pendingIcons=new Set);c.has(r)||(c.add(r),o[e][n].push(r))})),c.forEach((t=>{const{provider:e,prefix:n}=t;o[e][n].length&&function(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout((()=>{t.iconsQueueFlag=!1;const{provider:e,prefix:n}=t,r=t.iconsToLoad;let o;delete t.iconsToLoad,r&&(o=D(e))&&o.prepare(e,n,r).forEach((n=>{K(e,n,((e,r)=>{if("object"!=typeof e){if(404!==r)return;n.icons.forEach((e=>{t.missing.add(e)}))}else try{const n=v(t,e);if(!n.length)return;const r=t.pendingIcons;r&&n.forEach((t=>{r.delete(t)})),gt(t,e)}catch(o){console.error(o)}yt(t)}))}))})))}(t,o[e][n])})),e?function(t,e,n){const r=H++,o=Q.bind(null,n,r);if(!e.pending.length)return o;const i={id:r,icons:e,callback:t,abort:o};return n.forEach((t=>{(t.loaderCallbacks||(t.loaderCallbacks=[])).push(i)})),o}(e,r,c):mt};const vt=/[\s,]+/;function xt(t,e){e.split(vt).forEach((e=>{switch(e.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0}}))}function wt(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(t){for(;t<0;)t+=4;return t%4}if(""===n){const e=parseInt(t);return isNaN(e)?0:r(e)}if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let o=parseFloat(t.slice(0,t.length-n.length));return isNaN(o)?0:(o/=e,o%1==0?r(o):0)}}return e}const jt={..._,inline:!1},Ot={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},kt={display:"inline-block"},_t={backgroundColor:"currentColor"},Et={backgroundColor:"transparent"},St={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Tt={webkitMask:_t,mask:_t,background:Et};for(const Dt in Tt){const t=Tt[Dt];for(const e in St)t[Dt+e]=St[e]}const Ct={...jt,inline:!0};function It(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Ft=(t,e,n,o)=>{const i=n?Ct:jt,c=function(t,e){const n={...t};for(const r in e){const t=e[r],o=typeof t;r in k?(null===t||t&&("string"===o||"number"===o))&&(n[r]=t):o===typeof n[r]&&(n[r]="rotate"===r?t%4:t)}return n}(i,e),s=e.mode||"svg",a={},f=e.style||{},u={..."svg"===s?Ot:{},ref:o};for(let r in e){const t=e[r];if(void 0!==t)switch(r){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":c[r]=!0===t||"true"===t||1===t;break;case"flip":"string"==typeof t&&xt(c,t);break;case"color":a.color=t;break;case"rotate":"string"==typeof t?c[r]=wt(t):"number"==typeof t&&(c[r]=t);break;case"ariaHidden":case"aria-hidden":!0!==t&&"true"!==t&&delete u["aria-hidden"];break;default:void 0===i[r]&&(u[r]=t)}}const p=function(t,e){const n={...l,...t},r={..._,...e},o={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach((t=>{const e=[],n=t.hFlip,r=t.vFlip;let c,s=t.rotate;switch(n?r?s+=2:(e.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),e.push("scale(-1 1)"),o.top=o.left=0):r&&(e.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),e.push("scale(1 -1)"),o.top=o.left=0),s<0&&(s-=4*Math.floor(s/4)),s%=4,s){case 1:c=o.height/2+o.top,e.unshift("rotate(90 "+c.toString()+" "+c.toString()+")");break;case 2:e.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:c=o.width/2+o.left,e.unshift("rotate(-90 "+c.toString()+" "+c.toString()+")")}s%2==1&&(o.left!==o.top&&(c=o.left,o.left=o.top,o.top=c),o.width!==o.height&&(c=o.width,o.width=o.height,o.height=c)),e.length&&(i='<g transform="'+e.join(" ")+'">'+i+"</g>")}));const c=r.width,s=r.height,a=o.width,f=o.height;let u,p;return null===c?(p=null===s?"1em":"auto"===s?f:s,u=T(p,a/f)):(u="auto"===c?a:c,p=null===s?T(u,f/a):"auto"===s?f:s),{attributes:{width:u.toString(),height:p.toString(),viewBox:o.left.toString()+" "+o.top.toString()+" "+a.toString()+" "+f.toString()},body:i}}(t,c),d=p.attributes;if(c.inline&&(a.verticalAlign="-0.125em"),"svg"===s){u.style={...a,...f},Object.assign(u,d);let t=0,n=e.id;return"string"==typeof n&&(n=n.replace(/-/g,"_")),u.dangerouslySetInnerHTML={__html:M(p.body,n?()=>n+"ID"+t++:"iconifyReact")},r.createElement("svg",u)}const{body:h,width:g,height:m}=t,y="mask"===s||"bg"!==s&&-1!==h.indexOf("currentColor"),b=function(t,e){let n=-1===t.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}(h,{...d,width:g+"",height:m+""});var v;return u.style={...a,"--svg":(v=b,'url("data:image/svg+xml,'+function(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}(v)+'")'),width:It(d.width),height:It(d.height),...kt,...y?_t:Et,...f},r.createElement("span",u)};if(w(!0),P("",J),"undefined"!=typeof document&&"undefined"!=typeof window){ht();const t=window;if(void 0!==t.IconifyPreload){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof e&&null!==e&&(e instanceof Array?e:[e]).forEach((t=>{try{("object"!=typeof t||null===t||t instanceof Array||"object"!=typeof t.icons||"string"!=typeof t.prefix||!O(t))&&console.error(n)}catch(e){console.error(n)}}))}if(void 0!==t.IconifyProviders){const e=t.IconifyProviders;if("object"==typeof e&&null!==e)for(let t in e){const n="IconifyProviders["+t+"] is invalid.";try{const r=e[t];if("object"!=typeof r||!r||void 0===r.resources)continue;U(t,r)||console.error(n)}catch(Pt){console.error(n)}}}}class Mt extends r.Component{constructor(t){super(t),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(t){this.state.icon!==t&&this.setState({icon:t})}_checkIcon(t){const e=this.state,n=this.props.icon;if("object"==typeof n&&null!==n&&"string"==typeof n.body)return this._icon="",this._abortLoading(),void((t||null===e.icon)&&this._setData({data:n}));let r;if("string"!=typeof n||null===(r=i(n,!1,!0)))return this._abortLoading(),void this._setData(null);const o=j(r);if(o){if(this._icon!==n||null===e.icon){this._abortLoading(),this._icon=n;const t=["iconify"];""!==r.prefix&&t.push("iconify--"+r.prefix),""!==r.provider&&t.push("iconify--"+r.provider),this._setData({data:o,classes:t}),this.props.onLoad&&this.props.onLoad(n)}}else this._loading&&this._loading.name===n||(this._abortLoading(),this._icon="",this._setData(null),null!==o&&(this._loading={name:n,abort:bt([r],this._checkIcon.bind(this,!1))}))}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(t){t.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){const t=this.props,e=this.state.icon;if(null===e)return t.children?t.children:r.createElement("span",{});let n=t;return e.classes&&(n={...t,className:("string"==typeof t.className?t.className+" ":"")+e.classes.join(" ")}),Ft({...l,...e.data},n,t._inline,t._ref)}}const Lt=r.forwardRef((function(t,e){const n={...t,_ref:e,_inline:!1};return r.createElement(Mt,n)}));r.forwardRef((function(t,e){const n={...t,_ref:e,_inline:!0};return r.createElement(Mt,n)}))}}]);