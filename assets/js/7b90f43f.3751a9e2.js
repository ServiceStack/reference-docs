"use strict";(self.webpackChunkdfmg_template=self.webpackChunkdfmg_template||[]).push([[41569],{4418:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return r},default:function(){return g},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var i=a(83117),n=(a(67294),a(3905)),c=a(1954);const o={title:"Class GenericLogger",sidebar_label:"GenericLogger",description:"Helper ILog implementation that reduces effort to extend or use without needing to impl each API"},r='<Icon icon="codicon:symbol-class" className="symbol-class" /> GenericLogger',l={unversionedId:"api/ServiceStack.Logging/GenericLogger",id:"api/ServiceStack.Logging/GenericLogger",title:"Class GenericLogger",description:"Helper ILog implementation that reduces effort to extend or use without needing to impl each API",source:"@site/docs/api/ServiceStack.Logging/GenericLogger.md",sourceDirName:"api/ServiceStack.Logging",slug:"/api/ServiceStack.Logging/GenericLogger",permalink:"/api/ServiceStack.Logging/GenericLogger",draft:!1,tags:[],version:"current",frontMatter:{title:"Class GenericLogger",sidebar_label:"GenericLogger",description:"Helper ILog implementation that reduces effort to extend or use without needing to impl each API"},sidebar:"apiSidebar",previous:{title:"GenericLogFactory",permalink:"/api/ServiceStack.Logging/GenericLogFactory"},next:{title:"ILog",permalink:"/api/ServiceStack.Logging/ILog"}},m={},s=[{value:"<strong>Assembly</strong>: ServiceStack.Interfaces.dll",id:"assembly-servicestackinterfacesdll",level:6},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source",level:6},{value:"Properties",id:"properties",level:2},{value:'<Icon icon="codicon:symbol-property" className="symbol-property" /> CaptureLogs',id:"-capturelogs",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-1",level:6},{value:'<Icon icon="codicon:symbol-property" className="symbol-property" /> IsDebugEnabled',id:"-isdebugenabled",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-2",level:6},{value:"Fields",id:"fields",level:2},{value:'<Icon icon="codicon:symbol-field" className="symbol-field" /> OnMessage',id:"-onmessage",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-3",level:6},{value:'<Icon icon="codicon:symbol-field" className="symbol-field" /> Logs',id:"-logs",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-4",level:6},{value:"Methods",id:"methods",level:2},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> OnLog(String)',id:"-onlogstring",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-5",level:6},{value:"Parameters",id:"parameters",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Log(Object, Exception)',id:"-logobject-exception",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-6",level:6},{value:"Parameters",id:"parameters-1",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> LogFormat(Object, Object[])',id:"-logformatobject-object",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-7",level:6},{value:"Parameters",id:"parameters-2",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Log(Object)',id:"-logobject",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-8",level:6},{value:"Parameters",id:"parameters-3",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Debug(Object, Exception)',id:"-debugobject-exception",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-9",level:6},{value:"Parameters",id:"parameters-4",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Debug(Object)',id:"-debugobject",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-10",level:6},{value:"Parameters",id:"parameters-5",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> DebugFormat(String, Object[])',id:"-debugformatstring-object",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-11",level:6},{value:"Parameters",id:"parameters-6",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Error(Object, Exception)',id:"-errorobject-exception",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-12",level:6},{value:"Parameters",id:"parameters-7",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Error(Object)',id:"-errorobject",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-13",level:6},{value:"Parameters",id:"parameters-8",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> ErrorFormat(String, Object[])',id:"-errorformatstring-object",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-14",level:6},{value:"Parameters",id:"parameters-9",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Fatal(Object, Exception)',id:"-fatalobject-exception",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-15",level:6},{value:"Parameters",id:"parameters-10",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Fatal(Object)',id:"-fatalobject",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-16",level:6},{value:"Parameters",id:"parameters-11",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> FatalFormat(String, Object[])',id:"-fatalformatstring-object",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-17",level:6},{value:"Parameters",id:"parameters-12",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Info(Object, Exception)',id:"-infoobject-exception",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-18",level:6},{value:"Parameters",id:"parameters-13",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Info(Object)',id:"-infoobject",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-19",level:6},{value:"Parameters",id:"parameters-14",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> InfoFormat(String, Object[])',id:"-infoformatstring-object",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-20",level:6},{value:"Parameters",id:"parameters-15",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Warn(Object, Exception)',id:"-warnobject-exception",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-21",level:6},{value:"Parameters",id:"parameters-16",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Warn(Object)',id:"-warnobject",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-22",level:6},{value:"Parameters",id:"parameters-17",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> WarnFormat(String, Object[])',id:"-warnformatstring-object",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-23",level:6},{value:"Parameters",id:"parameters-18",level:5},{value:"Implements",id:"implements",level:2}],d={toc:s};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-genericlogger"},(0,n.kt)(c.JO,{icon:"codicon:symbol-class",className:"symbol-class",mdxType:"Icon"})," GenericLogger"),(0,n.kt)("p",null,"Helper ILog implementation that reduces effort to extend or use without needing to impl each API"),(0,n.kt)("h6",{id:"assembly-servicestackinterfacesdll"},(0,n.kt)("strong",{parentName:"h6"},"Assembly"),": ServiceStack.Interfaces.dll"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Logging/GenericLogger.cs#L9"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public class GenericLogger : ILog\n")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"-capturelogs"},(0,n.kt)(c.JO,{icon:"codicon:symbol-property",className:"symbol-property",mdxType:"Icon"})," CaptureLogs"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-1"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Logging/GenericLogger.cs#L19"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public bool CaptureLogs { get; set; }\n")),(0,n.kt)("h3",{id:"-isdebugenabled"},(0,n.kt)(c.JO,{icon:"codicon:symbol-property",className:"symbol-property",mdxType:"Icon"})," IsDebugEnabled"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-2"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Logging/GenericLogger.cs#L81"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public bool IsDebugEnabled { get; set; }\n")),(0,n.kt)("h2",{id:"fields"},"Fields"),(0,n.kt)("h3",{id:"-onmessage"},(0,n.kt)(c.JO,{icon:"codicon:symbol-field",className:"symbol-field",mdxType:"Icon"})," OnMessage"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-3"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Logging/GenericLogger.cs#L17"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public Action<string> OnMessage\n")),(0,n.kt)("h3",{id:"-logs"},(0,n.kt)(c.JO,{icon:"codicon:symbol-field",className:"symbol-field",mdxType:"Icon"})," Logs"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-4"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Logging/GenericLogger.cs#L21"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public StringBuilder Logs\n")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"-onlogstring"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," OnLog(String)"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-5"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Logging/GenericLogger.cs#L23"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public virtual void OnLog(string message)\n")),(0,n.kt)("h5",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.String")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"message"))))),(0,n.kt)("h3",{id:"-logobject-exception"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Log(Object, Exception)"),(0,n.kt)("p",null,"Logs the specified message."),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-6"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Logging/GenericLogger.cs#L48"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public virtual void Log(object message, Exception exception)\n")),(0,n.kt)("h5",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"message"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Exception")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"exception"))))),(0,n.kt)("h3",{id:"-logformatobject-object"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," LogFormat(Object, Object[])"),(0,n.kt)("p",null,"Logs the format."),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-7"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Logging/GenericLogger.cs#L61"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public virtual void LogFormat(object message, params object[] args)\n")),(0,n.kt)("h5",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"message"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Object[]")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"args"))))),(0,n.kt)("h3",{id:"-logobject"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Log(Object)"),(0,n.kt)("p",null,"Logs the specified message."),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-8"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Logging/GenericLogger.cs#L70"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public virtual void Log(object message)\n")),(0,n.kt)("h5",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"message"))))),(0,n.kt)("h3",{id:"-debugobject-exception"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Debug(Object, Exception)"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-9"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Logging/GenericLogger.cs#L76"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public void Debug(object message, Exception exception)\n")),(0,n.kt)("h5",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"message"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Exception")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"exception"))))),(0,n.kt)("h3",{id:"-debugobject"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Debug(Object)"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-10"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Logging/GenericLogger.cs#L83"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public void Debug(object message)\n")),(0,n.kt)("h5",{id:"parameters-5"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"message"))))),(0,n.kt)("h3",{id:"-debugformatstring-object"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," DebugFormat(String, Object[])"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-11"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Logging/GenericLogger.cs#L88"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public void DebugFormat(string format, params object[] args)\n")),(0,n.kt)("h5",{id:"parameters-6"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.String")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"format"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Object[]")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"args"))))),(0,n.kt)("h3",{id:"-errorobject-exception"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Error(Object, Exception)"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-12"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Logging/GenericLogger.cs#L93"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public void Error(object message, Exception exception)\n")),(0,n.kt)("h5",{id:"parameters-7"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"message"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Exception")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"exception"))))),(0,n.kt)("h3",{id:"-errorobject"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Error(Object)"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-13"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Logging/GenericLogger.cs#L98"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public void Error(object message)\n")),(0,n.kt)("h5",{id:"parameters-8"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"message"))))),(0,n.kt)("h3",{id:"-errorformatstring-object"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," ErrorFormat(String, Object[])"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-14"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Logging/GenericLogger.cs#L103"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public void ErrorFormat(string format, params object[] args)\n")),(0,n.kt)("h5",{id:"parameters-9"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.String")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"format"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Object[]")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"args"))))),(0,n.kt)("h3",{id:"-fatalobject-exception"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Fatal(Object, Exception)"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-15"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Logging/GenericLogger.cs#L108"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public void Fatal(object message, Exception exception)\n")),(0,n.kt)("h5",{id:"parameters-10"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"message"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Exception")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"exception"))))),(0,n.kt)("h3",{id:"-fatalobject"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Fatal(Object)"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-16"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Logging/GenericLogger.cs#L113"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public void Fatal(object message)\n")),(0,n.kt)("h5",{id:"parameters-11"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"message"))))),(0,n.kt)("h3",{id:"-fatalformatstring-object"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," FatalFormat(String, Object[])"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-17"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Logging/GenericLogger.cs#L118"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public void FatalFormat(string format, params object[] args)\n")),(0,n.kt)("h5",{id:"parameters-12"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.String")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"format"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Object[]")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"args"))))),(0,n.kt)("h3",{id:"-infoobject-exception"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Info(Object, Exception)"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-18"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Logging/GenericLogger.cs#L123"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public void Info(object message, Exception exception)\n")),(0,n.kt)("h5",{id:"parameters-13"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"message"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Exception")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"exception"))))),(0,n.kt)("h3",{id:"-infoobject"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Info(Object)"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-19"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Logging/GenericLogger.cs#L128"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public void Info(object message)\n")),(0,n.kt)("h5",{id:"parameters-14"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"message"))))),(0,n.kt)("h3",{id:"-infoformatstring-object"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," InfoFormat(String, Object[])"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-20"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Logging/GenericLogger.cs#L133"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public void InfoFormat(string format, params object[] args)\n")),(0,n.kt)("h5",{id:"parameters-15"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.String")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"format"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Object[]")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"args"))))),(0,n.kt)("h3",{id:"-warnobject-exception"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Warn(Object, Exception)"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-21"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Logging/GenericLogger.cs#L138"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public void Warn(object message, Exception exception)\n")),(0,n.kt)("h5",{id:"parameters-16"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"message"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Exception")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"exception"))))),(0,n.kt)("h3",{id:"-warnobject"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Warn(Object)"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-22"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Logging/GenericLogger.cs#L143"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public void Warn(object message)\n")),(0,n.kt)("h5",{id:"parameters-17"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"message"))))),(0,n.kt)("h3",{id:"-warnformatstring-object"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," WarnFormat(String, Object[])"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-23"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Logging/GenericLogger.cs#L148"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public void WarnFormat(string format, params object[] args)\n")),(0,n.kt)("h5",{id:"parameters-18"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.String")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"format"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Object[]")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"args"))))),(0,n.kt)("h2",{id:"implements"},"Implements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../ServiceStack.Logging/ILog"},"ServiceStack.Logging.ILog"))))}g.isMDXComponent=!0}}]);