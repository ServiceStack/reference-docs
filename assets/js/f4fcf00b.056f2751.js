"use strict";(self.webpackChunkdfmg_template=self.webpackChunkdfmg_template||[]).push([[8938],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return v}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),s=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(r),v=n,f=u["".concat(c,".").concat(v)]||u[v]||p[v]||a;return r?i.createElement(f,l(l({ref:t},m),{},{components:r})):i.createElement(f,l({ref:t},m))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},29414:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return s}});var i=r(83117),n=(r(67294),r(3905));const a={title:"Class MySqlDateTimeOffsetConverter",sidebar_label:"MySqlDateTimeOffsetConverter"},l="Class MySqlDateTimeOffsetConverter",o={unversionedId:"api/ServiceStack.OrmLite.MySql.Converters/MySqlDateTimeOffsetConverter",id:"api/ServiceStack.OrmLite.MySql.Converters/MySqlDateTimeOffsetConverter",title:"Class MySqlDateTimeOffsetConverter",description:"Assembly: ServiceStack.OrmLite.MySqlConnector.dll",source:"@site/docs/api/ServiceStack.OrmLite.MySql.Converters/MySqlDateTimeOffsetConverter.md",sourceDirName:"api/ServiceStack.OrmLite.MySql.Converters",slug:"/api/ServiceStack.OrmLite.MySql.Converters/MySqlDateTimeOffsetConverter",permalink:"/api/ServiceStack.OrmLite.MySql.Converters/MySqlDateTimeOffsetConverter",draft:!1,tags:[],version:"current",frontMatter:{title:"Class MySqlDateTimeOffsetConverter",sidebar_label:"MySqlDateTimeOffsetConverter"},sidebar:"apiSidebar",previous:{title:"MySqlDateTimeConverterBase",permalink:"/api/ServiceStack.OrmLite.MySql.Converters/MySqlDateTimeConverterBase"},next:{title:"MySqlDecimalConverter",permalink:"/api/ServiceStack.OrmLite.MySql.Converters/MySqlDecimalConverter"}},c={},s=[{value:"<strong>Assembly</strong>: ServiceStack.OrmLite.MySqlConnector.dll",id:"assembly-servicestackormlitemysqlconnectordll",level:6},{value:"View Source",id:"view-source",level:6},{value:"Properties",id:"properties",level:2},{value:"ColumnDefinition",id:"columndefinition",level:3},{value:"View Source",id:"view-source-1",level:6},{value:"Inherited Properties",id:"inherited-properties",level:2},{value:"ColumnDefinition",id:"columndefinition-1",level:3},{value:"View Source",id:"view-source-2",level:6},{value:"DbType",id:"dbtype",level:3},{value:"View Source",id:"view-source-3",level:6},{value:"Inherited Methods",id:"inherited-methods",level:2},{value:"FromDbValue(Type, Object)",id:"fromdbvaluetype-object",level:3},{value:"View Source",id:"view-source-4",level:6},{value:"Returns",id:"returns",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Implements",id:"implements",level:2}],m={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"class-mysqldatetimeoffsetconverter"},"Class MySqlDateTimeOffsetConverter"),(0,n.kt)("h6",{id:"assembly-servicestackormlitemysqlconnectordll"},(0,n.kt)("strong",{parentName:"h6"},"Assembly"),": ServiceStack.OrmLite.MySqlConnector.dll"),(0,n.kt)("h6",{id:"view-source"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite.MySql/Converters/MySqlDateTimeOffsetConverter.cs#L5"},"View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public class MySqlDateTimeOffsetConverter : DateTimeOffsetConverter, IOrmLiteConverter\n")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"columndefinition"},"ColumnDefinition"),(0,n.kt)("h6",{id:"view-source-1"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite.MySql/Converters/MySqlDateTimeOffsetConverter.cs#L7"},"View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public override string ColumnDefinition { get; }\n")),(0,n.kt)("h2",{id:"inherited-properties"},"Inherited Properties"),(0,n.kt)("h3",{id:"columndefinition-1"},"ColumnDefinition"),(0,n.kt)("h6",{id:"view-source-2"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/Converters/DateTimeOffsetConverter.cs#L9"},"View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public override string ColumnDefinition { get; }\n")),(0,n.kt)("h3",{id:"dbtype"},"DbType"),(0,n.kt)("h6",{id:"view-source-3"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/Converters/DateTimeOffsetConverter.cs#L10"},"View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public override DbType DbType { get; }\n")),(0,n.kt)("h2",{id:"inherited-methods"},"Inherited Methods"),(0,n.kt)("h3",{id:"fromdbvaluetype-object"},"FromDbValue(Type, Object)"),(0,n.kt)("h6",{id:"view-source-4"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/Converters/DateTimeOffsetConverter.cs#L13"},"View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public override object FromDbValue(Type fieldType, object value)\n")),(0,n.kt)("h5",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"System.Object")),(0,n.kt)("h5",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Type")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"fieldType"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"value"))))),(0,n.kt)("h2",{id:"implements"},"Implements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../ServiceStack.OrmLite/IOrmLiteConverter"},"ServiceStack.OrmLite.IOrmLiteConverter"))))}p.isMDXComponent=!0}}]);