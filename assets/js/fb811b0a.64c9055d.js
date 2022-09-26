"use strict";(self.webpackChunkdfmg_template=self.webpackChunkdfmg_template||[]).push([[5909],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),o=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=o(e.components);return a.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=o(t),f=n,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||c;return t?a.createElement(d,i(i({ref:r},s),{},{components:t})):a.createElement(d,i({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,i=new Array(c);i[0]=u;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<c;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},58067:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return o}});var a=t(83117),n=(t(67294),t(3905));const c={title:"Interface SqlMapper.IParameterCallbacks",sidebar_label:"SqlMapper.IParameterCallbacks",description:"Extends IDynamicParameters with facilities for executing callbacks after commands have completed"},i="Interface SqlMapper.IParameterCallbacks",l={unversionedId:"api/ServiceStack.OrmLite.Dapper/SqlMapper.IParameterCallbacks",id:"api/ServiceStack.OrmLite.Dapper/SqlMapper.IParameterCallbacks",title:"Interface SqlMapper.IParameterCallbacks",description:"Extends IDynamicParameters with facilities for executing callbacks after commands have completed",source:"@site/docs/api/ServiceStack.OrmLite.Dapper/SqlMapper.IParameterCallbacks.md",sourceDirName:"api/ServiceStack.OrmLite.Dapper",slug:"/api/ServiceStack.OrmLite.Dapper/SqlMapper.IParameterCallbacks",permalink:"/api/ServiceStack.OrmLite.Dapper/SqlMapper.IParameterCallbacks",draft:!1,tags:[],version:"current",frontMatter:{title:"Interface SqlMapper.IParameterCallbacks",sidebar_label:"SqlMapper.IParameterCallbacks",description:"Extends IDynamicParameters with facilities for executing callbacks after commands have completed"},sidebar:"apiSidebar",previous:{title:"SqlMapper.IMemberMap",permalink:"/api/ServiceStack.OrmLite.Dapper/SqlMapper.IMemberMap"},next:{title:"SqlMapper.IParameterLookup",permalink:"/api/ServiceStack.OrmLite.Dapper/SqlMapper.IParameterLookup"}},p={},o=[{value:"<strong>Assembly</strong>: ServiceStack.OrmLite.dll",id:"assembly-servicestackormlitedll",level:6},{value:"View Source",id:"view-source",level:6},{value:"Methods",id:"methods",level:2},{value:"OnCompleted()",id:"oncompleted",level:3},{value:"View Source",id:"view-source-1",level:6}],s={toc:o};function m(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"interface-sqlmapperiparametercallbacks"},"Interface SqlMapper.IParameterCallbacks"),(0,n.kt)("p",null,"Extends IDynamicParameters with facilities for executing callbacks after commands have completed"),(0,n.kt)("h6",{id:"assembly-servicestackormlitedll"},(0,n.kt)("strong",{parentName:"h6"},"Assembly"),": ServiceStack.OrmLite.dll"),(0,n.kt)("h6",{id:"view-source"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/Dapper/SqlMapper.IParameterCallbacks.cs#L8"},"View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public interface IParameterCallbacks : SqlMapper.IDynamicParameters\n")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"oncompleted"},"OnCompleted()"),(0,n.kt)("p",null,"Invoked when the command has executed"),(0,n.kt)("h6",{id:"view-source-1"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/Dapper/SqlMapper.IParameterCallbacks.cs#L13"},"View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"void OnCompleted()\n")))}m.isMDXComponent=!0}}]);