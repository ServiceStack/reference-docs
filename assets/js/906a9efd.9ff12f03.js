"use strict";(self.webpackChunkdfmg_template=self.webpackChunkdfmg_template||[]).push([[7384],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return v}});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(a),v=i,k=p["".concat(o,".").concat(v)]||p[v]||u[v]||n;return a?r.createElement(k,c(c({ref:t},m),{},{components:a})):r.createElement(k,c({ref:t},m))}));function v(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,c=new Array(n);c[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,c[1]=l;for(var s=2;s<n;s++)c[s]=a[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},36248:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return n},metadata:function(){return l},toc:function(){return s}});var r=a(83117),i=(a(67294),a(3905));const n={title:"Class OrmLiteTransaction",sidebar_label:"OrmLiteTransaction"},c="Class OrmLiteTransaction",l={unversionedId:"api/ServiceStack.OrmLite/OrmLiteTransaction",id:"api/ServiceStack.OrmLite/OrmLiteTransaction",title:"Class OrmLiteTransaction",description:"Assembly: ServiceStack.OrmLite.dll",source:"@site/docs/api/ServiceStack.OrmLite/OrmLiteTransaction.md",sourceDirName:"api/ServiceStack.OrmLite",slug:"/api/ServiceStack.OrmLite/OrmLiteTransaction",permalink:"/api/ServiceStack.OrmLite/OrmLiteTransaction",draft:!1,tags:[],version:"current",frontMatter:{title:"Class OrmLiteTransaction",sidebar_label:"OrmLiteTransaction"},sidebar:"apiSidebar",previous:{title:"OrmLiteState",permalink:"/api/ServiceStack.OrmLite/OrmLiteState"},next:{title:"OrmLiteUtils",permalink:"/api/ServiceStack.OrmLite/OrmLiteUtils"}},o={},s=[{value:"<strong>Assembly</strong>: ServiceStack.OrmLite.dll",id:"assembly-servicestackormlitedll",level:6},{value:"View Source",id:"view-source",level:6},{value:"Properties",id:"properties",level:2},{value:"Transaction",id:"transaction",level:3},{value:"View Source",id:"view-source-1",level:6},{value:"DbTransaction",id:"dbtransaction",level:3},{value:"View Source",id:"view-source-2",level:6},{value:"Connection",id:"connection",level:3},{value:"View Source",id:"view-source-3",level:6},{value:"IsolationLevel",id:"isolationlevel",level:3},{value:"View Source",id:"view-source-4",level:6},{value:"Methods",id:"methods",level:2},{value:"Create(IDbConnection, Nullable&lt;IsolationLevel&gt;)",id:"createidbconnection-nullableisolationlevel",level:3},{value:"View Source",id:"view-source-5",level:6},{value:"Returns",id:"returns",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Dispose()",id:"dispose",level:3},{value:"View Source",id:"view-source-6",level:6},{value:"Commit()",id:"commit",level:3},{value:"View Source",id:"view-source-7",level:6},{value:"Rollback()",id:"rollback",level:3},{value:"View Source",id:"view-source-8",level:6},{value:"Implements",id:"implements",level:2}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"class-ormlitetransaction"},"Class OrmLiteTransaction"),(0,i.kt)("h6",{id:"assembly-servicestackormlitedll"},(0,i.kt)("strong",{parentName:"h6"},"Assembly"),": ServiceStack.OrmLite.dll"),(0,i.kt)("h6",{id:"view-source"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/OrmLiteTransaction.cs#L7"},"View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public class OrmLiteTransaction : IDbTransaction, IDisposable, IHasDbTransaction\n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"transaction"},"Transaction"),(0,i.kt)("h6",{id:"view-source-1"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/OrmLiteTransaction.cs#L9"},"View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public IDbTransaction Transaction { get; set; }\n")),(0,i.kt)("h3",{id:"dbtransaction"},"DbTransaction"),(0,i.kt)("h6",{id:"view-source-2"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/OrmLiteTransaction.cs#L10"},"View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public IDbTransaction DbTransaction { get; }\n")),(0,i.kt)("h3",{id:"connection"},"Connection"),(0,i.kt)("h6",{id:"view-source-3"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/OrmLiteTransaction.cs#L107"},"View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public IDbConnection Connection { get; }\n")),(0,i.kt)("h3",{id:"isolationlevel"},"IsolationLevel"),(0,i.kt)("h6",{id:"view-source-4"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/OrmLiteTransaction.cs#L109"},"View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public IsolationLevel IsolationLevel { get; }\n")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"createidbconnection-nullableisolationlevel"},"Create(IDbConnection, Nullable","<","IsolationLevel",">",")"),(0,i.kt)("h6",{id:"view-source-5"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/OrmLiteTransaction.cs#L14"},"View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public static OrmLiteTransaction Create(IDbConnection db, IsolationLevel? isolationLevel = null)\n")),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../ServiceStack.OrmLite/OrmLiteTransaction"},"ServiceStack.OrmLite.OrmLiteTransaction")),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.Data.IDbConnection")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"db"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.Nullable<System.Data.IsolationLevel>")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"isolationLevel"))))),(0,i.kt)("h3",{id:"dispose"},"Dispose()"),(0,i.kt)("h6",{id:"view-source-6"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/OrmLiteTransaction.cs#L42"},"View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public void Dispose()\n")),(0,i.kt)("h3",{id:"commit"},"Commit()"),(0,i.kt)("h6",{id:"view-source-7"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/OrmLiteTransaction.cs#L61"},"View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public void Commit()\n")),(0,i.kt)("h3",{id:"rollback"},"Rollback()"),(0,i.kt)("h6",{id:"view-source-8"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/OrmLiteTransaction.cs#L84"},"View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public void Rollback()\n")),(0,i.kt)("h2",{id:"implements"},"Implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System.Data.IDbTransaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System.IDisposable")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ServiceStack.Data.IHasDbTransaction"))))}u.isMDXComponent=!0}}]);