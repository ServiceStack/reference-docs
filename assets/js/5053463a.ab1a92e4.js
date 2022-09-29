"use strict";(self.webpackChunkdfmg_template=self.webpackChunkdfmg_template||[]).push([[88722],{72644:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return d}});var n=a(83117),i=(a(67294),a(3905)),r=a(1954);const c={title:"Class CustomResponseHandler",sidebar_label:"CustomResponseHandler"},s='<Icon icon="codicon:symbol-class" className="symbol-class" /> CustomResponseHandler',o={unversionedId:"api/ServiceStack.Host.Handlers/CustomResponseHandler",id:"api/ServiceStack.Host.Handlers/CustomResponseHandler",title:"Class CustomResponseHandler",description:"",source:"@site/docs/api/ServiceStack.Host.Handlers/CustomResponseHandler.md",sourceDirName:"api/ServiceStack.Host.Handlers",slug:"/api/ServiceStack.Host.Handlers/CustomResponseHandler",permalink:"/api/ServiceStack.Host.Handlers/CustomResponseHandler",draft:!1,tags:[],version:"current",frontMatter:{title:"Class CustomResponseHandler",sidebar_label:"CustomResponseHandler"},sidebar:"apiSidebar",previous:{title:"CustomActionHandlerAsync",permalink:"/api/ServiceStack.Host.Handlers/CustomActionHandlerAsync"},next:{title:"CustomResponseHandlerAsync",permalink:"/api/ServiceStack.Host.Handlers/CustomResponseHandlerAsync"}},l={},d=[{value:"<strong>Assembly</strong>: ServiceStack.dll",id:"assembly-servicestackdll",level:6},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source",level:6},{value:"Properties",id:"properties",level:2},{value:'<Icon icon="codicon:symbol-property" className="symbol-property" /> Action',id:"-action",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-1",level:6},{value:"Inherited Properties",id:"inherited-properties",level:2},{value:'<Icon icon="codicon:symbol-property" className="symbol-property" /> IsReusable',id:"-isreusable",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-2",level:6},{value:'<Icon icon="codicon:symbol-property" className="symbol-property" /> RequestName',id:"-requestname",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-3",level:6},{value:"Methods",id:"methods",level:2},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> ProcessRequest(IRequest, IResponse, String)',id:"-processrequestirequest-iresponse-string",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-4",level:6},{value:"Parameters",id:"parameters",level:5},{value:"Inherited Methods",id:"inherited-methods",level:2},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> CreateProcessRequestTask(IRequest, IResponse, String)',id:"-createprocessrequesttaskirequest-iresponse-string",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-5",level:6},{value:"Returns",id:"returns",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> DefaultHandledRequest(HttpListenerContext)',id:"-defaulthandledrequesthttplistenercontext",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-6",level:6},{value:"Returns",id:"returns-1",level:5},{value:"Parameters",id:"parameters-2",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> DefaultHandledRequest(HttpContextBase)',id:"-defaulthandledrequesthttpcontextbase",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-7",level:6},{value:"Returns",id:"returns-2",level:5},{value:"Parameters",id:"parameters-3",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> HandleException(IRequest, IResponse, String, Exception)',id:"-handleexceptionirequest-iresponse-string-exception",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-8",level:6},{value:"Returns",id:"returns-3",level:5},{value:"Parameters",id:"parameters-4",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> ProcessRequest(IRequest, IResponse, String)',id:"-processrequestirequest-iresponse-string-1",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-9",level:6},{value:"Parameters",id:"parameters-5",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> ProcessRequestAsync(IRequest, IResponse, String)',id:"-processrequestasyncirequest-iresponse-string",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-10",level:6},{value:"Returns",id:"returns-4",level:5},{value:"Parameters",id:"parameters-6",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> ProcessRequestAsync(HttpContextBase)',id:"-processrequestasynchttpcontextbase",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-11",level:6},{value:"Returns",id:"returns-5",level:5},{value:"Parameters",id:"parameters-7",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> RunAsAsync()',id:"-runasasync",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-12",level:6},{value:"Returns",id:"returns-6",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> IHttpAsyncHandler.BeginProcessRequest(HttpContext, AsyncCallback, Object)',id:"-ihttpasynchandlerbeginprocessrequesthttpcontext-asynccallback-object",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-13",level:6},{value:"Returns",id:"returns-7",level:5},{value:"Parameters",id:"parameters-8",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> IHttpAsyncHandler.EndProcessRequest(IAsyncResult)',id:"-ihttpasynchandlerendprocessrequestiasyncresult",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-14",level:6},{value:"Parameters",id:"parameters-9",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> IHttpHandler.ProcessRequest(HttpContext)',id:"-ihttphandlerprocessrequesthttpcontext",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-15",level:6},{value:"Parameters",id:"parameters-10",level:5},{value:"Implements",id:"implements",level:2}],m={toc:d};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-customresponsehandler"},(0,i.kt)(r.JO,{icon:"codicon:symbol-class",className:"symbol-class",mdxType:"Icon"})," CustomResponseHandler"),(0,i.kt)("h6",{id:"assembly-servicestackdll"},(0,i.kt)("strong",{parentName:"h6"},"Assembly"),": ServiceStack.dll"),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/Host/Handlers/CustomResponseHandler.cs#L7"}," ",(0,i.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public class CustomResponseHandler : HttpAsyncTaskHandler, IHttpAsyncHandler, IHttpHandler, IServiceStackHandler\n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"-action"},(0,i.kt)(r.JO,{icon:"codicon:symbol-property",className:"symbol-property",mdxType:"Icon"})," Action"),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-1"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/Host/Handlers/CustomResponseHandler.cs#L9"}," ",(0,i.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public Func<IRequest, IResponse, object> Action { get; set; }\n")),(0,i.kt)("h2",{id:"inherited-properties"},"Inherited Properties"),(0,i.kt)("h3",{id:"-isreusable"},(0,i.kt)(r.JO,{icon:"codicon:symbol-property",className:"symbol-property",mdxType:"Icon"})," IsReusable"),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-2"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/Host/Handlers/HttpAsyncTaskHandler.cs#L174"}," ",(0,i.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public virtual bool IsReusable { get; }\n")),(0,i.kt)("h3",{id:"-requestname"},(0,i.kt)(r.JO,{icon:"codicon:symbol-property",className:"symbol-property",mdxType:"Icon"})," RequestName"),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-3"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/Host/Handlers/HttpAsyncTaskHandler.cs#L20"}," ",(0,i.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public string RequestName { get; set; }\n")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"-processrequestirequest-iresponse-string"},(0,i.kt)(r.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," ProcessRequest(IRequest, IResponse, String)"),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-4"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/Host/Handlers/CustomResponseHandler.cs#L17"}," ",(0,i.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public override void ProcessRequest(IRequest httpReq, IResponse httpRes, string operationName)\n")),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../ServiceStack.Web/IRequest"},"ServiceStack.Web.IRequest")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"httpReq"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../ServiceStack.Web/IResponse"},"ServiceStack.Web.IResponse")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"httpRes"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.String")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"operationName"))))),(0,i.kt)("h2",{id:"inherited-methods"},"Inherited Methods"),(0,i.kt)("h3",{id:"-createprocessrequesttaskirequest-iresponse-string"},(0,i.kt)(r.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," CreateProcessRequestTask(IRequest, IResponse, String)"),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-5"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/Host/Handlers/HttpAsyncTaskHandler.cs#L30"}," ",(0,i.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"protected virtual Task CreateProcessRequestTask(IRequest httpReq, IResponse httpRes, string operationName)\n")),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"System.Threading.Tasks.Task")),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../ServiceStack.Web/IRequest"},"ServiceStack.Web.IRequest")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"httpReq"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../ServiceStack.Web/IResponse"},"ServiceStack.Web.IResponse")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"httpRes"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.String")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"operationName"))))),(0,i.kt)("h3",{id:"-defaulthandledrequesthttplistenercontext"},(0,i.kt)(r.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," DefaultHandledRequest(HttpListenerContext)"),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-6"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/Host/Handlers/HttpAsyncTaskHandler.cs#L83"}," ",(0,i.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"protected static bool DefaultHandledRequest(HttpListenerContext context)\n")),(0,i.kt)("h5",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"System.Boolean")),(0,i.kt)("h5",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.Net.HttpListenerContext")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"context"))))),(0,i.kt)("h3",{id:"-defaulthandledrequesthttpcontextbase"},(0,i.kt)(r.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," DefaultHandledRequest(HttpContextBase)"),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-7"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/Host/Handlers/HttpAsyncTaskHandler.cs#L85"}," ",(0,i.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"protected static bool DefaultHandledRequest(HttpContextBase context)\n")),(0,i.kt)("h5",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"System.Boolean")),(0,i.kt)("h5",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.Web.HttpContextBase")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"context"))))),(0,i.kt)("h3",{id:"-handleexceptionirequest-iresponse-string-exception"},(0,i.kt)(r.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," HandleException(IRequest, IResponse, String, Exception)"),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-8"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/Host/Handlers/HttpAsyncTaskHandler.cs#L176"}," ",(0,i.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"protected async Task HandleException(IRequest httpReq, IResponse httpRes, string operationName, Exception ex)\n")),(0,i.kt)("h5",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"System.Threading.Tasks.Task")),(0,i.kt)("h5",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../ServiceStack.Web/IRequest"},"ServiceStack.Web.IRequest")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"httpReq"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../ServiceStack.Web/IResponse"},"ServiceStack.Web.IResponse")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"httpRes"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.String")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"operationName"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.Exception")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"ex"))))),(0,i.kt)("h3",{id:"-processrequestirequest-iresponse-string-1"},(0,i.kt)(r.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," ProcessRequest(IRequest, IResponse, String)"),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-9"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/Host/Handlers/HttpAsyncTaskHandler.cs#L66"}," ",(0,i.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public virtual void ProcessRequest(IRequest httpReq, IResponse httpRes, string operationName)\n")),(0,i.kt)("h5",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../ServiceStack.Web/IRequest"},"ServiceStack.Web.IRequest")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"httpReq"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../ServiceStack.Web/IResponse"},"ServiceStack.Web.IResponse")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"httpRes"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.String")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"operationName"))))),(0,i.kt)("h3",{id:"-processrequestasyncirequest-iresponse-string"},(0,i.kt)(r.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," ProcessRequestAsync(IRequest, IResponse, String)"),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-10"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/Host/Handlers/HttpAsyncTaskHandler.cs#L75"}," ",(0,i.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public virtual Task ProcessRequestAsync(IRequest httpReq, IResponse httpRes, string operationName)\n")),(0,i.kt)("h5",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"System.Threading.Tasks.Task")),(0,i.kt)("h5",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../ServiceStack.Web/IRequest"},"ServiceStack.Web.IRequest")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"httpReq"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../ServiceStack.Web/IResponse"},"ServiceStack.Web.IResponse")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"httpRes"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.String")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"operationName"))))),(0,i.kt)("h3",{id:"-processrequestasynchttpcontextbase"},(0,i.kt)(r.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," ProcessRequestAsync(HttpContextBase)"),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-11"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/Host/Handlers/HttpAsyncTaskHandler.cs#L132"}," ",(0,i.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public virtual Task ProcessRequestAsync(HttpContextBase context)\n")),(0,i.kt)("h5",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"System.Threading.Tasks.Task")),(0,i.kt)("h5",{id:"parameters-7"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.Web.HttpContextBase")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"context"))))),(0,i.kt)("h3",{id:"-runasasync"},(0,i.kt)(r.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," RunAsAsync()"),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-12"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/Host/Handlers/HttpAsyncTaskHandler.cs#L24"}," ",(0,i.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public virtual bool RunAsAsync()\n")),(0,i.kt)("h5",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"System.Boolean")),(0,i.kt)("h3",{id:"-ihttpasynchandlerbeginprocessrequesthttpcontext-asynccallback-object"},(0,i.kt)(r.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," IHttpAsyncHandler.BeginProcessRequest(HttpContext, AsyncCallback, Object)"),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-13"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/Host/Handlers/HttpAsyncTaskHandler.cs#L103"}," ",(0,i.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"IAsyncResult IHttpAsyncHandler.BeginProcessRequest(HttpContext context, AsyncCallback cb, object extraData)\n")),(0,i.kt)("h5",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"System.IAsyncResult")),(0,i.kt)("h5",{id:"parameters-8"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.Web.HttpContext")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"context"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.AsyncCallback")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"cb"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.Object")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"extraData"))))),(0,i.kt)("h3",{id:"-ihttpasynchandlerendprocessrequestiasyncresult"},(0,i.kt)(r.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," IHttpAsyncHandler.EndProcessRequest(IAsyncResult)"),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-14"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/Host/Handlers/HttpAsyncTaskHandler.cs#L119"}," ",(0,i.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"void IHttpAsyncHandler.EndProcessRequest(IAsyncResult result)\n")),(0,i.kt)("h5",{id:"parameters-9"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.IAsyncResult")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"result"))))),(0,i.kt)("h3",{id:"-ihttphandlerprocessrequesthttpcontext"},(0,i.kt)(r.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," IHttpHandler.ProcessRequest(HttpContext)"),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-15"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/Host/Handlers/HttpAsyncTaskHandler.cs#L88"}," ",(0,i.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"void IHttpHandler.ProcessRequest(HttpContext context)\n")),(0,i.kt)("h5",{id:"parameters-10"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.Web.HttpContext")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"context"))))),(0,i.kt)("h2",{id:"implements"},"Implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System.Web.IHttpAsyncHandler")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System.Web.IHttpHandler")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../ServiceStack.Host.Handlers/IServiceStackHandler"},"ServiceStack.Host.Handlers.IServiceStackHandler"))))}p.isMDXComponent=!0}}]);