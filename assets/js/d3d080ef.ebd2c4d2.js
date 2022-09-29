"use strict";(self.webpackChunkdfmg_template=self.webpackChunkdfmg_template||[]).push([[2255],{21872:function(e,t,i){i.r(t),i.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return d}});var a=i(83117),n=(i(67294),i(3905)),o=i(1954);const r={title:"Class AntiForgery",sidebar_label:"AntiForgery",description:"Provides access to the anti-forgery system, which provides protection against Cross-site Request Forgery (XSRF, also called CSRF) attacks."},c='<Icon icon="codicon:symbol-class" className="symbol-class" /> AntiForgery',s={unversionedId:"api/ServiceStack.Html.AntiXsrf/AntiForgery",id:"api/ServiceStack.Html.AntiXsrf/AntiForgery",title:"Class AntiForgery",description:"Provides access to the anti-forgery system, which provides protection against Cross-site Request Forgery (XSRF, also called CSRF) attacks.",source:"@site/docs/api/ServiceStack.Html.AntiXsrf/AntiForgery.md",sourceDirName:"api/ServiceStack.Html.AntiXsrf",slug:"/api/ServiceStack.Html.AntiXsrf/AntiForgery",permalink:"/api/ServiceStack.Html.AntiXsrf/AntiForgery",draft:!1,tags:[],version:"current",frontMatter:{title:"Class AntiForgery",sidebar_label:"AntiForgery",description:"Provides access to the anti-forgery system, which provides protection against Cross-site Request Forgery (XSRF, also called CSRF) attacks."},sidebar:"apiSidebar",previous:{title:"ServiceStack.Html.AntiXsrf",permalink:"/api/ServiceStack.Html.AntiXsrf/"},next:{title:"AntiForgeryConfig",permalink:"/api/ServiceStack.Html.AntiXsrf/AntiForgeryConfig"}},l={},d=[{value:"<strong>Assembly</strong>: ServiceStack.Razor.dll",id:"assembly-servicestackrazordll",level:6},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source",level:6},{value:"Methods",id:"methods",level:2},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> GetHtml()',id:"-gethtml",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-1",level:6},{value:"Returns",id:"returns",level:5},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-2",level:6},{value:"Parameters",id:"parameters",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Validate()',id:"-validate",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-3",level:6},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Validate(String, String)',id:"-validatestring-string",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-4",level:6},{value:"Parameters",id:"parameters-1",level:5}],m={toc:d};function h(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-antiforgery"},(0,n.kt)(o.JO,{icon:"codicon:symbol-class",className:"symbol-class",mdxType:"Icon"})," AntiForgery"),(0,n.kt)("p",null,"Provides access to the anti-forgery system, which provides protection against\nCross-site Request Forgery (XSRF, also called CSRF) attacks."),(0,n.kt)("h6",{id:"assembly-servicestackrazordll"},(0,n.kt)("strong",{parentName:"h6"},"Assembly"),": ServiceStack.Razor.dll"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Razor/Html/AntiXsrf/AntiForgery.cs#L17"}," ",(0,n.kt)(o.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public static class AntiForgery\n")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"-gethtml"},(0,n.kt)(o.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," GetHtml()"),(0,n.kt)("p",null,"Generates an anti-forgery token for this request. This token can\nbe validated by calling the Validate() method."),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-1"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Razor/Html/AntiXsrf/AntiForgery.cs#L43"}," ",(0,n.kt)(o.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public static MvcHtmlString GetHtml()\n")),(0,n.kt)("h5",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../ServiceStack.Html/MvcHtmlString"},"ServiceStack.Html.MvcHtmlString"),": An HTML string corresponding to an ","<","input type=",'"',"hidden",'"',">","\nelement. This element should be put inside a ","<","form",">",".### ",(0,n.kt)(o.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," GetTokens(String, out String, out String)\nGenerates an anti-forgery token pair (cookie and form token) for this request.\nThis method is similar to GetHtml(), but this method gives the caller control\nover how to persist the returned values. To validate these tokens, call the\nappropriate overload of Validate."),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-2"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Razor/Html/AntiXsrf/AntiForgery.cs#L74"}," ",(0,n.kt)(o.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public static void GetTokens(string oldCookieToken, out string newCookieToken, out string formToken)\n")),(0,n.kt)("h5",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.String")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"oldCookieToken")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The anti-forgery token - if any - that already existed")))),(0,n.kt)("p",null,"for this request. May be null. The anti-forgery system will try to reuse this cookie\nvalue when generating a matching form token. |\n| ",(0,n.kt)("inlineCode",{parentName:"p"},"System.String")," | ",(0,n.kt)("em",{parentName:"p"},"newCookieToken")," | Will contain a new cookie value if the old cookie token\nwas null or invalid. If this value is non-null when the method completes, the caller\nmust persist this value in the form of a response cookie, and the existing cookie value\nshould be discarded. If this value is null when the method completes, the existing\ncookie value was valid and needn","'","t be modified. |\n| ",(0,n.kt)("inlineCode",{parentName:"p"},"System.String")," | ",(0,n.kt)("em",{parentName:"p"},"formToken")," | The value that should be stored in the ","<","form",">",". The caller\nshould take care not to accidentally swap the cookie and form tokens. |"),(0,n.kt)("h3",{id:"-validate"},(0,n.kt)(o.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Validate()"),(0,n.kt)("p",null,"Validates an anti-forgery token that was supplied for this request.\nThe anti-forgery token may be generated by calling GetHtml()."),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-3"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Razor/Html/AntiXsrf/AntiForgery.cs#L90"}," ",(0,n.kt)(o.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public static void Validate()\n")),(0,n.kt)("h3",{id:"-validatestring-string"},(0,n.kt)(o.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Validate(String, String)"),(0,n.kt)("p",null,"Validates an anti-forgery token pair that was generated by the GetTokens method."),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-4"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Razor/Html/AntiXsrf/AntiForgery.cs#L107"}," ",(0,n.kt)(o.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public static void Validate(string cookieToken, string formToken)\n")),(0,n.kt)("h5",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.String")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"cookieToken")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The token that was supplied in the request cookie.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.String")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"formToken")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The token that was supplied in the request form body.")))))}h.isMDXComponent=!0}}]);