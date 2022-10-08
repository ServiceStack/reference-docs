"use strict";(self.webpackChunkdfmg_template=self.webpackChunkdfmg_template||[]).push([[24374],{70629:function(e,t,i){i.r(t),i.d(t,{assets:function(){return s},contentTitle:function(){return n},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var a=i(83117),c=(i(67294),i(3905)),r=i(1954);const o={title:"Class ModularStartupActivator",sidebar_label:"ModularStartupActivator",description:".NET Core 3.0 disables IStartup and multiple Configure* entry points on Startup class requiring the use of a clean ModularStartupActivator adapter class for implementing https://docs.servicestack.net/modular-startup\nASP.NET Core MVC has a built-in limitation/heuristic requiring the Startup class to be defined in the Host assembly, which can be done by registering a custom ModularStartupActivator sub class."},n='<Icon icon="codicon:symbol-class" className="symbol-class" /> ModularStartupActivator',l={unversionedId:"api/ServiceStack/ModularStartupActivator",id:"api/ServiceStack/ModularStartupActivator",title:"Class ModularStartupActivator",description:".NET Core 3.0 disables IStartup and multiple Configure* entry points on Startup class requiring the use of a clean ModularStartupActivator adapter class for implementing https://docs.servicestack.net/modular-startup\nASP.NET Core MVC has a built-in limitation/heuristic requiring the Startup class to be defined in the Host assembly, which can be done by registering a custom ModularStartupActivator sub class.",source:"@site/docs/api/ServiceStack/ModularStartupActivator.md",sourceDirName:"api/ServiceStack",slug:"/api/ServiceStack/ModularStartupActivator",permalink:"/api/ServiceStack/ModularStartupActivator",draft:!1,tags:[],version:"current",frontMatter:{title:"Class ModularStartupActivator",sidebar_label:"ModularStartupActivator",description:".NET Core 3.0 disables IStartup and multiple Configure* entry points on Startup class requiring the use of a clean ModularStartupActivator adapter class for implementing https://docs.servicestack.net/modular-startup\nASP.NET Core MVC has a built-in limitation/heuristic requiring the Startup class to be defined in the Host assembly, which can be done by registering a custom ModularStartupActivator sub class."},sidebar:"apiSidebar",previous:{title:"ModularStartup",permalink:"/api/ServiceStack/ModularStartup"},next:{title:"MqExtensions",permalink:"/api/ServiceStack/MqExtensions"}},s={},u=[{value:"<strong>Assembly</strong>: ServiceStack.dll",id:"assembly-servicestackdll",level:6},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source",level:6},{value:"Properties",id:"properties",level:2},{value:'<Icon icon="codicon:symbol-property" className="symbol-property" /> StartupType',id:"-startuptype",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-1",level:6},{value:'<Icon icon="codicon:symbol-property" className="symbol-property" /> Configuration',id:"-configuration",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-2",level:6},{value:"Fields",id:"fields",level:2},{value:'<Icon icon="codicon:symbol-field" className="symbol-field" /> Instance',id:"-instance",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-3",level:6},{value:"Methods",id:"methods",level:2},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> ConfigureServices(IServiceCollection)',id:"-configureservicesiservicecollection",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-4",level:6},{value:"Parameters",id:"parameters",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Configure(IApplicationBuilder)',id:"-configureiapplicationbuilder",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-5",level:6},{value:"Parameters",id:"parameters-1",level:5}],d={toc:u};function p(e){let{components:t,...i}=e;return(0,c.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"-modularstartupactivator"},(0,c.kt)(r.JO,{icon:"codicon:symbol-class",className:"symbol-class",mdxType:"Icon"})," ModularStartupActivator"),(0,c.kt)("p",null,".NET Core 3.0 disables IStartup and multiple Configure* entry points on Startup class requiring the use of a\nclean ModularStartupActivator adapter class for implementing ",(0,c.kt)("a",{parentName:"p",href:"https://docs.servicestack.net/modular-startup"},"https://docs.servicestack.net/modular-startup")),(0,c.kt)("p",null,"ASP.NET Core MVC has a built-in limitation/heuristic requiring the Startup class to be defined in the Host assembly,\nwhich can be done by registering a custom ModularStartupActivator sub class."),(0,c.kt)("h6",{id:"assembly-servicestackdll"},(0,c.kt)("strong",{parentName:"h6"},"Assembly"),": ServiceStack.dll"),(0,c.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source"},(0,c.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/ModularStartup.cs#L384"}," ",(0,c.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public class ModularStartupActivator : object\n")),(0,c.kt)("h2",{id:"properties"},"Properties"),(0,c.kt)("h3",{id:"-startuptype"},(0,c.kt)(r.JO,{icon:"codicon:symbol-property",className:"symbol-property",mdxType:"Icon"})," StartupType"),(0,c.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-1"},(0,c.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/ModularStartup.cs#L386"}," ",(0,c.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public static Type? StartupType { get; set; }\n")),(0,c.kt)("h3",{id:"-configuration"},(0,c.kt)(r.JO,{icon:"codicon:symbol-property",className:"symbol-property",mdxType:"Icon"})," Configuration"),(0,c.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-2"},(0,c.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/ModularStartup.cs#L387"}," ",(0,c.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"protected IConfiguration Configuration { get; }\n")),(0,c.kt)("h2",{id:"fields"},"Fields"),(0,c.kt)("h3",{id:"-instance"},(0,c.kt)(r.JO,{icon:"codicon:symbol-field",className:"symbol-field",mdxType:"Icon"})," Instance"),(0,c.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-3"},(0,c.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/ModularStartup.cs#L389"}," ",(0,c.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"protected readonly ModularStartup Instance\n")),(0,c.kt)("h2",{id:"methods"},"Methods"),(0,c.kt)("h3",{id:"-configureservicesiservicecollection"},(0,c.kt)(r.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," ConfigureServices(IServiceCollection)"),(0,c.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-4"},(0,c.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/ModularStartup.cs#L411"}," ",(0,c.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public virtual void ConfigureServices(IServiceCollection services)\n")),(0,c.kt)("h5",{id:"parameters"},"Parameters"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,c.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"left"},(0,c.kt)("inlineCode",{parentName:"td"},"IServiceCollection")),(0,c.kt)("td",{parentName:"tr",align:"left"},(0,c.kt)("em",{parentName:"td"},"services"))))),(0,c.kt)("h3",{id:"-configureiapplicationbuilder"},(0,c.kt)(r.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Configure(IApplicationBuilder)"),(0,c.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-5"},(0,c.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/ModularStartup.cs#L416"}," ",(0,c.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public virtual void Configure(IApplicationBuilder app)\n")),(0,c.kt)("h5",{id:"parameters-1"},"Parameters"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,c.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"left"},(0,c.kt)("inlineCode",{parentName:"td"},"IApplicationBuilder")),(0,c.kt)("td",{parentName:"tr",align:"left"},(0,c.kt)("em",{parentName:"td"},"app"))))))}p.isMDXComponent=!0}}]);