"use strict";(self.webpackChunkdfmg_template=self.webpackChunkdfmg_template||[]).push([[6493],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,g=u["".concat(l,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9643:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],c={title:"Delegate JoinFormatDelegate",sidebar_label:"JoinFormatDelegate"},l="Delegate JoinFormatDelegate",p={unversionedId:"api/ServiceStack.OrmLite/JoinFormatDelegate",id:"api/ServiceStack.OrmLite/JoinFormatDelegate",title:"Delegate JoinFormatDelegate",description:"Assembly: ServiceStack.OrmLite.dll",source:"@site/docs/api/ServiceStack.OrmLite/JoinFormatDelegate.md",sourceDirName:"api/ServiceStack.OrmLite",slug:"/api/ServiceStack.OrmLite/JoinFormatDelegate",permalink:"/api/ServiceStack.OrmLite/JoinFormatDelegate",tags:[],version:"current",frontMatter:{title:"Delegate JoinFormatDelegate",sidebar_label:"JoinFormatDelegate"},sidebar:"apiSidebar",previous:{title:"IUntypedSqlExpression",permalink:"/api/ServiceStack.OrmLite/IUntypedSqlExpression"},next:{title:"LowercaseUnderscoreNamingStrategy",permalink:"/api/ServiceStack.OrmLite/LowercaseUnderscoreNamingStrategy"}},s=[{value:"<strong>Assembly</strong>: ServiceStack.OrmLite.dll",id:"assembly-servicestackormlitedll",children:[],level:6},{value:"View Source",id:"view-source",children:[],level:6}],m={toc:s};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"delegate-joinformatdelegate"},"Delegate JoinFormatDelegate"),(0,i.kt)("h6",{id:"assembly-servicestackormlitedll"},(0,i.kt)("strong",{parentName:"h6"},"Assembly"),": ServiceStack.OrmLite.dll"),(0,i.kt)("h6",{id:"view-source"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/Expressions/SqlExpression.Join.cs#L11"},"View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public delegate string JoinFormatDelegate(IOrmLiteDialectProvider dialect, ModelDefinition tableDef, string joinExpr);\n")))}u.isMDXComponent=!0}}]);