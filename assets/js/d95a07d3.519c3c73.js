"use strict";(self.webpackChunkdfmg_template=self.webpackChunkdfmg_template||[]).push([[21346],{77528:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return k}});var n=a(83117),i=(a(67294),a(3905)),r=a(1954);const c={title:"Interface IAuthEventsAsync",sidebar_label:"IAuthEventsAsync"},s='<Icon icon="codicon:symbol-interface" className="symbol-interface" /> IAuthEventsAsync',o={unversionedId:"api/ServiceStack.Auth/IAuthEventsAsync",id:"api/ServiceStack.Auth/IAuthEventsAsync",title:"Interface IAuthEventsAsync",description:"",source:"@site/docs/api/ServiceStack.Auth/IAuthEventsAsync.md",sourceDirName:"api/ServiceStack.Auth",slug:"/api/ServiceStack.Auth/IAuthEventsAsync",permalink:"/api/ServiceStack.Auth/IAuthEventsAsync",draft:!1,tags:[],version:"current",frontMatter:{title:"Interface IAuthEventsAsync",sidebar_label:"IAuthEventsAsync"},sidebar:"apiSidebar",previous:{title:"IAuthEvents",permalink:"/api/ServiceStack.Auth/IAuthEvents"},next:{title:"IAuthHttpGateway",permalink:"/api/ServiceStack.Auth/IAuthHttpGateway"}},l={},k=[{value:"<strong>Assembly</strong>: ServiceStack.dll",id:"assembly-servicestackdll",level:6},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source",level:6},{value:"Methods",id:"methods",level:2},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> OnRegisteredAsync(IRequest, IAuthSession, IServiceBase, CancellationToken)',id:"-onregisteredasyncirequest-iauthsession-iservicebase-cancellationtoken",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-1",level:6},{value:"Returns",id:"returns",level:5},{value:"Parameters",id:"parameters",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> ValidateAsync(IServiceBase, IAuthSession, IAuthTokens, Dictionary&lt;String, String&gt;, CancellationToken)',id:"-validateasynciservicebase-iauthsession-iauthtokens-dictionarystring-string-cancellationtoken",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-2",level:6},{value:"Returns",id:"returns-1",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> OnAuthenticatedAsync(IRequest, IAuthSession, IServiceBase, IAuthTokens, Dictionary&lt;String, String&gt;, CancellationToken)',id:"-onauthenticatedasyncirequest-iauthsession-iservicebase-iauthtokens-dictionarystring-string-cancellationtoken",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-3",level:6},{value:"Returns",id:"returns-2",level:5},{value:"Parameters",id:"parameters-2",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> OnLogoutAsync(IRequest, IAuthSession, IServiceBase, CancellationToken)',id:"-onlogoutasyncirequest-iauthsession-iservicebase-cancellationtoken",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-4",level:6},{value:"Returns",id:"returns-3",level:5},{value:"Parameters",id:"parameters-3",level:5}],d={toc:k};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-iautheventsasync"},(0,i.kt)(r.JO,{icon:"codicon:symbol-interface",className:"symbol-interface",mdxType:"Icon"})," IAuthEventsAsync"),(0,i.kt)("h6",{id:"assembly-servicestackdll"},(0,i.kt)("strong",{parentName:"h6"},"Assembly"),": ServiceStack.dll"),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/Auth/AuthEvents.cs#L42"}," ",(0,i.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public interface IAuthEventsAsync\n")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"-onregisteredasyncirequest-iauthsession-iservicebase-cancellationtoken"},(0,i.kt)(r.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," OnRegisteredAsync(IRequest, IAuthSession, IServiceBase, CancellationToken)"),(0,i.kt)("p",null,"Called when the user is registered or on the first OAuth login"),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-1"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/Auth/AuthEvents.cs#L47"}," ",(0,i.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"Task OnRegisteredAsync(IRequest httpReq, IAuthSession session, IServiceBase registrationService, CancellationToken token = default(CancellationToken))\n")),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"System.Threading.Tasks.Task")),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../ServiceStack.Web/IRequest"},"ServiceStack.Web.IRequest")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"httpReq"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../ServiceStack.Auth/IAuthSession"},"ServiceStack.Auth.IAuthSession")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"session"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../ServiceStack/IServiceBase"},"ServiceStack.IServiceBase")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"registrationService"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.Threading.CancellationToken")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"token"))))),(0,i.kt)("h3",{id:"-validateasynciservicebase-iauthsession-iauthtokens-dictionarystring-string-cancellationtoken"},(0,i.kt)(r.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," ValidateAsync(IServiceBase, IAuthSession, IAuthTokens, Dictionary","<","String, String",">",", CancellationToken)"),(0,i.kt)("p",null,"Override with Custom Validation logic to Assert if User is allowed to Authenticate.\nReturning a non-null response invalidates Authentication with IHttpResult response returned to client."),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-2"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/Auth/AuthEvents.cs#L53"}," ",(0,i.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"Task<IHttpResult> ValidateAsync(IServiceBase authService, IAuthSession session, IAuthTokens tokens, Dictionary<string, string> authInfo, CancellationToken token = default(CancellationToken))\n")),(0,i.kt)("h5",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"System.Threading.Tasks.Task<ServiceStack.Web.IHttpResult>")),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../ServiceStack/IServiceBase"},"ServiceStack.IServiceBase")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"authService"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../ServiceStack.Auth/IAuthSession"},"ServiceStack.Auth.IAuthSession")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"session"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../ServiceStack.Auth/IAuthTokens"},"ServiceStack.Auth.IAuthTokens")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"tokens"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.Collections.Generic.Dictionary<System.String,System.String>")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"authInfo"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.Threading.CancellationToken")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"token"))))),(0,i.kt)("h3",{id:"-onauthenticatedasyncirequest-iauthsession-iservicebase-iauthtokens-dictionarystring-string-cancellationtoken"},(0,i.kt)(r.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," OnAuthenticatedAsync(IRequest, IAuthSession, IServiceBase, IAuthTokens, Dictionary","<","String, String",">",", CancellationToken)"),(0,i.kt)("p",null,"Called after the user has successfully authenticated"),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-3"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/Auth/AuthEvents.cs#L59"}," ",(0,i.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"Task OnAuthenticatedAsync(IRequest httpReq, IAuthSession session, IServiceBase authService, IAuthTokens tokens, Dictionary<string, string> authInfo, CancellationToken token = default(CancellationToken))\n")),(0,i.kt)("h5",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"System.Threading.Tasks.Task")),(0,i.kt)("h5",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../ServiceStack.Web/IRequest"},"ServiceStack.Web.IRequest")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"httpReq"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../ServiceStack.Auth/IAuthSession"},"ServiceStack.Auth.IAuthSession")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"session"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../ServiceStack/IServiceBase"},"ServiceStack.IServiceBase")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"authService"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../ServiceStack.Auth/IAuthTokens"},"ServiceStack.Auth.IAuthTokens")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"tokens"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.Collections.Generic.Dictionary<System.String,System.String>")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"authInfo"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.Threading.CancellationToken")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"token"))))),(0,i.kt)("h3",{id:"-onlogoutasyncirequest-iauthsession-iservicebase-cancellationtoken"},(0,i.kt)(r.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," OnLogoutAsync(IRequest, IAuthSession, IServiceBase, CancellationToken)"),(0,i.kt)("p",null,"Fired before the session is removed after the /auth/logout Service is called"),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-4"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/Auth/AuthEvents.cs#L65"}," ",(0,i.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"Task OnLogoutAsync(IRequest httpReq, IAuthSession session, IServiceBase authService, CancellationToken token = default(CancellationToken))\n")),(0,i.kt)("h5",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"System.Threading.Tasks.Task")),(0,i.kt)("h5",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../ServiceStack.Web/IRequest"},"ServiceStack.Web.IRequest")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"httpReq"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../ServiceStack.Auth/IAuthSession"},"ServiceStack.Auth.IAuthSession")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"session"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../ServiceStack/IServiceBase"},"ServiceStack.IServiceBase")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"authService"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.Threading.CancellationToken")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"token"))))))}u.isMDXComponent=!0}}]);