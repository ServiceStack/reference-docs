"use strict";(self.webpackChunkdfmg_template=self.webpackChunkdfmg_template||[]).push([[9080],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,k=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return a?r.createElement(k,l(l({ref:t},p),{},{components:a})):r.createElement(k,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5822:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),l=["components"],s={title:"Class UiComponentBase",sidebar_label:"UiComponentBase",description:"The Base class for all ServiceStack.Blazor Components"},o="Class UiComponentBase",c={unversionedId:"api/ServiceStack.Blazor.Components/UiComponentBase",id:"api/ServiceStack.Blazor.Components/UiComponentBase",title:"Class UiComponentBase",description:"The Base class for all ServiceStack.Blazor Components",source:"@site/docs/api/ServiceStack.Blazor.Components/UiComponentBase.md",sourceDirName:"api/ServiceStack.Blazor.Components",slug:"/api/ServiceStack.Blazor.Components/UiComponentBase",permalink:"/api/ServiceStack.Blazor.Components/UiComponentBase",tags:[],version:"current",frontMatter:{title:"Class UiComponentBase",sidebar_label:"UiComponentBase",description:"The Base class for all ServiceStack.Blazor Components"},sidebar:"apiSidebar",previous:{title:"TextInputBase<TValue>",permalink:"/api/ServiceStack.Blazor.Components/TextInputBase`TValue`"},next:{title:"Index",permalink:"/api/ServiceStack.Blazor.Components.Tailwind/"}},p=[{value:"<strong>Assembly</strong>: ServiceStack.Blazor.dll",id:"assembly-servicestackblazordll",children:[],level:6},{value:"View Source",id:"view-source",children:[],level:6},{value:"Properties",id:"properties",children:[{value:"class",id:"class",children:[{value:"View Source",id:"view-source-1",children:[],level:6}],level:3},{value:"Class",id:"class-1",children:[{value:"View Source",id:"view-source-2",children:[],level:6}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"CssClass(String, String)",id:"cssclassstring-string",children:[{value:"View Source",id:"view-source-3",children:[],level:6},{value:"Returns",id:"returns",children:[],level:5},{value:"Parameters",id:"parameters",children:[],level:5}],level:3},{value:"ClassNames(String[])",id:"classnamesstring",children:[{value:"View Source",id:"view-source-4",children:[],level:6},{value:"Returns",id:"returns-1",children:[],level:5},{value:"Parameters",id:"parameters-1",children:[],level:5}],level:3}],level:2}],m={toc:p};function u(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"class-uicomponentbase"},"Class UiComponentBase"),(0,i.kt)("p",null,"The Base class for all ServiceStack.Blazor Components"),(0,i.kt)("h6",{id:"assembly-servicestackblazordll"},(0,i.kt)("strong",{parentName:"h6"},"Assembly"),": ServiceStack.Blazor.dll"),(0,i.kt)("h6",{id:"view-source"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.Blazor/src/ServiceStack.Blazor/Components/UiComponentBase.cs#L10"},"View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public abstract class UiComponentBase : ComponentBase\n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"class"},"class"),(0,i.kt)("p",null,"Optional user defined classes for this component"),(0,i.kt)("h6",{id:"view-source-1"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.Blazor/src/ServiceStack.Blazor/Components/UiComponentBase.cs#L15"},"View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public string class { get; set; }\n")),(0,i.kt)("h3",{id:"class-1"},"Class"),(0,i.kt)("h6",{id:"view-source-2"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.Blazor/src/ServiceStack.Blazor/Components/UiComponentBase.cs#L16"},"View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public string Class { get; }\n")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"cssclassstring-string"},"CssClass(String, String)"),(0,i.kt)("p",null,"Return any user-defined classes along with optional classes for when component is in a ",(0,i.kt)("inlineCode",{parentName:"p"},"valid")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"invalid")," state"),(0,i.kt)("h6",{id:"view-source-3"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.Blazor/src/ServiceStack.Blazor/Components/UiComponentBase.cs#L24"},"View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"protected virtual string CssClass(string valid = null, string invalid = null)\n")),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"System.String")),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.String")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"valid")),(0,i.kt)("td",{parentName:"tr",align:"left"},"css classes to include when valid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.String")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"invalid")),(0,i.kt)("td",{parentName:"tr",align:"left"},"css classes to include when invalid")))),(0,i.kt)("h3",{id:"classnamesstring"},"ClassNames(String[])"),(0,i.kt)("p",null,"Helper to combine multiple css classes. Strings can contain multiple classes, empty strings are ignored."),(0,i.kt)("h6",{id:"view-source-4"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.Blazor/src/ServiceStack.Blazor/Components/UiComponentBase.cs#L32"},"View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"protected virtual string ClassNames(params string[] classes)\n")),(0,i.kt)("h5",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"System.String")),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.String[]")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"classes"))))))}u.isMDXComponent=!0}}]);