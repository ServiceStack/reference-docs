"use strict";(self.webpackChunkdfmg_template=self.webpackChunkdfmg_template||[]).push([[97418],{77861:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var n=a(83117),r=(a(67294),a(3905)),i=a(1954);const o={title:"Class HttpResultUtils",sidebar_label:"HttpResultUtils"},c='<Icon icon="codicon:symbol-class" className="symbol-class" /> HttpResultUtils',s={unversionedId:"api/ServiceStack/HttpResultUtils",id:"api/ServiceStack/HttpResultUtils",title:"Class HttpResultUtils",description:"",source:"@site/docs/api/ServiceStack/HttpResultUtils.md",sourceDirName:"api/ServiceStack",slug:"/api/ServiceStack/HttpResultUtils",permalink:"/api/ServiceStack/HttpResultUtils",draft:!1,tags:[],version:"current",frontMatter:{title:"Class HttpResultUtils",sidebar_label:"HttpResultUtils"},sidebar:"apiSidebar",previous:{title:"HttpResultExtensions",permalink:"/api/ServiceStack/HttpResultExtensions"},next:{title:"HttpResultsFilter",permalink:"/api/ServiceStack/HttpResultsFilter"}},l={},m=[{value:"<strong>Assembly</strong>: ServiceStack.dll",id:"assembly-servicestackdll",level:6},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source",level:6},{value:"Methods",id:"methods",level:2},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> GetDto(Object)',id:"-getdtoobject",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-1",level:6},{value:"Returns",id:"returns",level:5},{value:"Parameters",id:"parameters",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> GetResponseDto(Object)',id:"-getresponsedtoobject",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-2",level:6},{value:"Returns",id:"returns-1",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> GetDto&lt;TResponse&gt;(Object)',id:"-getdtotresponseobject",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-3",level:6},{value:"Returns",id:"returns-2",level:5},{value:"Parameters",id:"parameters-2",level:5},{value:"Type Parameters",id:"type-parameters",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> GetResponseDto&lt;TResponse&gt;(Object)',id:"-getresponsedtotresponseobject",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-4",level:6},{value:"Returns",id:"returns-3",level:5},{value:"Parameters",id:"parameters-3",level:5},{value:"Type Parameters",id:"type-parameters-1",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> CreateErrorResponse(IHttpError)',id:"-createerrorresponseihttperror",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-5",level:6},{value:"Returns",id:"returns-4",level:5},{value:"Parameters",id:"parameters-4",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> IsErrorResponse(Object)',id:"-iserrorresponseobject",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-6",level:6},{value:"Returns",id:"returns-5",level:5},{value:"Parameters",id:"parameters-5",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> ExtractHttpRanges(String, Int64, out Int64, out Int64)',id:"-extracthttprangesstring-int64-out-int64-out-int64",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-7",level:6},{value:"Parameters",id:"parameters-6",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> AddHttpRangeResponseHeaders(IResponse, Int64, Int64, Int64)',id:"-addhttprangeresponseheadersiresponse-int64-int64-int64",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-8",level:6},{value:"Parameters",id:"parameters-7",level:5}],d={toc:m};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-httpresultutils"},(0,r.kt)(i.JO,{icon:"codicon:symbol-class",className:"symbol-class",mdxType:"Icon"})," HttpResultUtils"),(0,r.kt)("h6",{id:"assembly-servicestackdll"},(0,r.kt)("strong",{parentName:"h6"},"Assembly"),": ServiceStack.dll"),(0,r.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source"},(0,r.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/HttpResultUtils.cs#L12"}," ",(0,r.kt)(i.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public static class HttpResultUtils\n")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"-getdtoobject"},(0,r.kt)(i.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," GetDto(Object)"),(0,r.kt)("p",null,"Shortcut to get the ResponseDTO whether it","'","s bare or inside a IHttpResult"),(0,r.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-1"},(0,r.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/HttpResultUtils.cs#L19"}," ",(0,r.kt)(i.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public static object GetDto(this object response)\n")),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"System.Object")),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"System.Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"response"))))),(0,r.kt)("h3",{id:"-getresponsedtoobject"},(0,r.kt)(i.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," GetResponseDto(Object)"),(0,r.kt)("p",null,"Alias of AsDto"),(0,r.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-2"},(0,r.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/HttpResultUtils.cs#L28"}," ",(0,r.kt)(i.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public static object GetResponseDto(this object response)\n")),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"System.Object")),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"System.Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"response"))))),(0,r.kt)("h3",{id:"-getdtotresponseobject"},(0,r.kt)(i.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," GetDto","<","TResponse",">","(Object)"),(0,r.kt)("p",null,"Shortcut to get the ResponseDTO whether it","'","s bare or inside a IHttpResult"),(0,r.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-3"},(0,r.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/HttpResultUtils.cs#L38"}," ",(0,r.kt)(i.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public static TResponse GetDto<TResponse>(this object response)\n    where TResponse : class\n")),(0,r.kt)("h5",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<TResponse>"),": TResponse if found; otherwise null"),(0,r.kt)("h5",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"System.Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"response"))))),(0,r.kt)("h5",{id:"type-parameters"},"Type Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TResponse"))),(0,r.kt)("h3",{id:"-getresponsedtotresponseobject"},(0,r.kt)(i.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," GetResponseDto","<","TResponse",">","(Object)"),(0,r.kt)("p",null,"Alias of AsDto"),(0,r.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-4"},(0,r.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/HttpResultUtils.cs#L47"}," ",(0,r.kt)(i.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public static TResponse GetResponseDto<TResponse>(this object response)\n    where TResponse : class\n")),(0,r.kt)("h5",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<TResponse>")),(0,r.kt)("h5",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"System.Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"response"))))),(0,r.kt)("h5",{id:"type-parameters-1"},"Type Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TResponse"))),(0,r.kt)("h3",{id:"-createerrorresponseihttperror"},(0,r.kt)(i.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," CreateErrorResponse(IHttpError)"),(0,r.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-5"},(0,r.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/HttpResultUtils.cs#L52"}," ",(0,r.kt)(i.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public static object CreateErrorResponse(this IHttpError httpError)\n")),(0,r.kt)("h5",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"System.Object")),(0,r.kt)("h5",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../ServiceStack.Web/IHttpError"},"ServiceStack.Web.IHttpError")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"httpError"))))),(0,r.kt)("h3",{id:"-iserrorresponseobject"},(0,r.kt)(i.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," IsErrorResponse(Object)"),(0,r.kt)("p",null,"Whether the response is an IHttpError or Exception or ErrorResponse"),(0,r.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-6"},(0,r.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/HttpResultUtils.cs#L72"}," ",(0,r.kt)(i.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public static bool IsErrorResponse(this object response)\n")),(0,r.kt)("h5",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"System.Boolean")),(0,r.kt)("h5",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"System.Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"response"))))),(0,r.kt)("h3",{id:"-extracthttprangesstring-int64-out-int64-out-int64"},(0,r.kt)(i.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," ExtractHttpRanges(String, Int64, out Int64, out Int64)"),(0,r.kt)("p",null,"rangeHeader should be of the format ",'"',"bytes=0-",'"'," or ",'"',"bytes=0-12345",'"'," or ",'"',"bytes=123-456",'"'),(0,r.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-7"},(0,r.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/HttpResultUtils.cs#L80"}," ",(0,r.kt)(i.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public static void ExtractHttpRanges(this string rangeHeader, long contentLength, out long rangeStart, out long rangeEnd)\n")),(0,r.kt)("h5",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"System.String")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"rangeHeader"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"System.Int64")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"contentLength"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"System.Int64")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"rangeStart"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"System.Int64")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"rangeEnd"))))),(0,r.kt)("h3",{id:"-addhttprangeresponseheadersiresponse-int64-int64-int64"},(0,r.kt)(i.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," AddHttpRangeResponseHeaders(IResponse, Int64, Int64, Int64)"),(0,r.kt)("p",null,"Adds 206 PartialContent Status, Content-Range and Content-Length headers"),(0,r.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-8"},(0,r.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/HttpResultUtils.cs#L115"}," ",(0,r.kt)(i.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public static void AddHttpRangeResponseHeaders(this IResponse response, long rangeStart, long rangeEnd, long contentLength)\n")),(0,r.kt)("h5",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../ServiceStack.Web/IResponse"},"ServiceStack.Web.IResponse")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"response"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"System.Int64")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"rangeStart"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"System.Int64")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"rangeEnd"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"System.Int64")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"contentLength"))))))}p.isMDXComponent=!0}}]);