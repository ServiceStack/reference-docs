"use strict";(self.webpackChunkdfmg_template=self.webpackChunkdfmg_template||[]).push([[2698],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,k=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return r?a.createElement(k,s(s({ref:t},u),{},{components:r})):a.createElement(k,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<l;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},31423:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c}});var a=r(83117),n=(r(67294),r(3905));const l={title:"Class EnableCorsMessageHandler",sidebar_label:"EnableCorsMessageHandler",description:"Required to enable CORS requests"},s="Class EnableCorsMessageHandler",o={unversionedId:"api/ServiceStack.Blazor/EnableCorsMessageHandler",id:"api/ServiceStack.Blazor/EnableCorsMessageHandler",title:"Class EnableCorsMessageHandler",description:"Required to enable CORS requests",source:"@site/docs/api/ServiceStack.Blazor/EnableCorsMessageHandler.md",sourceDirName:"api/ServiceStack.Blazor",slug:"/api/ServiceStack.Blazor/EnableCorsMessageHandler",permalink:"/api/ServiceStack.Blazor/EnableCorsMessageHandler",draft:!1,tags:[],version:"current",frontMatter:{title:"Class EnableCorsMessageHandler",sidebar_label:"EnableCorsMessageHandler",description:"Required to enable CORS requests"},sidebar:"apiSidebar",previous:{title:"CssDefaults",permalink:"/api/ServiceStack.Blazor/CssDefaults"},next:{title:"EnumerableUtils",permalink:"/api/ServiceStack.Blazor/EnumerableUtils"}},i={},c=[{value:"<strong>Assembly</strong>: ServiceStack.Blazor.dll",id:"assembly-servicestackblazordll",level:6},{value:"View Source",id:"view-source",level:6},{value:"Methods",id:"methods",level:2},{value:"SendAsync(HttpRequestMessage, CancellationToken)",id:"sendasynchttprequestmessage-cancellationtoken",level:3},{value:"View Source",id:"view-source-1",level:6},{value:"Returns",id:"returns",level:5},{value:"Parameters",id:"parameters",level:5}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"class-enablecorsmessagehandler"},"Class EnableCorsMessageHandler"),(0,n.kt)("p",null,"Required to enable CORS requests"),(0,n.kt)("h6",{id:"assembly-servicestackblazordll"},(0,n.kt)("strong",{parentName:"h6"},"Assembly"),": ServiceStack.Blazor.dll"),(0,n.kt)("h6",{id:"view-source"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.Blazor/src/ServiceStack.Blazor/EnableCorsMessageHandler.cs#L8"},"View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public class EnableCorsMessageHandler : DelegatingHandler\n")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"sendasynchttprequestmessage-cancellationtoken"},"SendAsync(HttpRequestMessage, CancellationToken)"),(0,n.kt)("h6",{id:"view-source-1"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.Blazor/src/ServiceStack.Blazor/EnableCorsMessageHandler.cs#L10"},"View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)\n")),(0,n.kt)("h5",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Task<HttpResponseMessage>")),(0,n.kt)("h5",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"HttpRequestMessage")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"request"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"CancellationToken")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"cancellationToken"))))))}p.isMDXComponent=!0}}]);