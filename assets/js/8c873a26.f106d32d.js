"use strict";(self.webpackChunkdfmg_template=self.webpackChunkdfmg_template||[]).push([[1149],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return v}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),v=n,d=u["".concat(o,".").concat(v)]||u[v]||m[v]||i;return r?a.createElement(d,l(l({ref:t},s),{},{components:r})):a.createElement(d,l({ref:t},s))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},63452:function(e,t,r){r.r(t),r.d(t,{assets:function(){return o},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=r(83117),n=(r(67294),r(3905));const i={title:"Class UInt16Converter",sidebar_label:"UInt16Converter"},l="Class UInt16Converter",c={unversionedId:"api/ServiceStack.OrmLite.Converters/UInt16Converter",id:"api/ServiceStack.OrmLite.Converters/UInt16Converter",title:"Class UInt16Converter",description:"Assembly: ServiceStack.OrmLite.dll",source:"@site/docs/api/ServiceStack.OrmLite.Converters/UInt16Converter.md",sourceDirName:"api/ServiceStack.OrmLite.Converters",slug:"/api/ServiceStack.OrmLite.Converters/UInt16Converter",permalink:"/api/ServiceStack.OrmLite.Converters/UInt16Converter",draft:!1,tags:[],version:"current",frontMatter:{title:"Class UInt16Converter",sidebar_label:"UInt16Converter"},sidebar:"apiSidebar",previous:{title:"TimeSpanAsIntConverter",permalink:"/api/ServiceStack.OrmLite.Converters/TimeSpanAsIntConverter"},next:{title:"UInt32Converter",permalink:"/api/ServiceStack.OrmLite.Converters/UInt32Converter"}},o={},p=[{value:"<strong>Assembly</strong>: ServiceStack.OrmLite.dll",id:"assembly-servicestackormlitedll",level:6},{value:"View Source",id:"view-source",level:6},{value:"Properties",id:"properties",level:2},{value:"DbType",id:"dbtype",level:3},{value:"View Source",id:"view-source-1",level:6},{value:"Inherited Properties",id:"inherited-properties",level:2},{value:"ColumnDefinition",id:"columndefinition",level:3},{value:"View Source",id:"view-source-2",level:6},{value:"DbType",id:"dbtype-1",level:3},{value:"View Source",id:"view-source-3",level:6},{value:"Inherited Methods",id:"inherited-methods",level:2},{value:"FromDbValue(Type, Object)",id:"fromdbvaluetype-object",level:3},{value:"View Source",id:"view-source-4",level:6},{value:"Returns",id:"returns",level:5},{value:"Parameters",id:"parameters",level:5},{value:"ToDbValue(Type, Object)",id:"todbvaluetype-object",level:3},{value:"View Source",id:"view-source-5",level:6},{value:"Returns",id:"returns-1",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"Implements",id:"implements",level:2}],s={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"class-uint16converter"},"Class UInt16Converter"),(0,n.kt)("h6",{id:"assembly-servicestackormlitedll"},(0,n.kt)("strong",{parentName:"h6"},"Assembly"),": ServiceStack.OrmLite.dll"),(0,n.kt)("h6",{id:"view-source"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/Converters/IntegerConverters.cs#L37"},"View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public class UInt16Converter : IntegerConverter, IOrmLiteConverter\n")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"dbtype"},"DbType"),(0,n.kt)("h6",{id:"view-source-1"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/Converters/IntegerConverters.cs#L39"},"View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public override DbType DbType { get; }\n")),(0,n.kt)("h2",{id:"inherited-properties"},"Inherited Properties"),(0,n.kt)("h3",{id:"columndefinition"},"ColumnDefinition"),(0,n.kt)("h6",{id:"view-source-2"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/Converters/IntegerConverters.cs#L8"},"View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public override string ColumnDefinition { get; }\n")),(0,n.kt)("h3",{id:"dbtype-1"},"DbType"),(0,n.kt)("h6",{id:"view-source-3"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/Converters/IntegerConverters.cs#L9"},"View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public override DbType DbType { get; }\n")),(0,n.kt)("h2",{id:"inherited-methods"},"Inherited Methods"),(0,n.kt)("h3",{id:"fromdbvaluetype-object"},"FromDbValue(Type, Object)"),(0,n.kt)("h6",{id:"view-source-4"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/Converters/IntegerConverters.cs#L16"},"View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public override object FromDbValue(Type fieldType, object value)\n")),(0,n.kt)("h5",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"System.Object")),(0,n.kt)("h5",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Type")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"fieldType"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"value"))))),(0,n.kt)("h3",{id:"todbvaluetype-object"},"ToDbValue(Type, Object)"),(0,n.kt)("h6",{id:"view-source-5"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/Converters/IntegerConverters.cs#L11"},"View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public override object ToDbValue(Type fieldType, object value)\n")),(0,n.kt)("h5",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"System.Object")),(0,n.kt)("h5",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Type")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"fieldType"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"value"))))),(0,n.kt)("h2",{id:"implements"},"Implements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../ServiceStack.OrmLite/IOrmLiteConverter"},"ServiceStack.OrmLite.IOrmLiteConverter"))))}m.isMDXComponent=!0}}]);