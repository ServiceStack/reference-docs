"use strict";(self.webpackChunkdfmg_template=self.webpackChunkdfmg_template||[]).push([[8503],{60195:function(e,t,i){i.r(t),i.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return u}});var n=i(83117),a=(i(67294),i(3905)),c=i(1954);const r={title:"Interface ISettings",sidebar_label:"ISettings"},o='<Icon icon="codicon:symbol-interface" className="symbol-interface" /> ISettings',s={unversionedId:"api/ServiceStack.Configuration/ISettings",id:"api/ServiceStack.Configuration/ISettings",title:"Interface ISettings",description:"Parameters",source:"@site/docs/api/ServiceStack.Configuration/ISettings.md",sourceDirName:"api/ServiceStack.Configuration",slug:"/api/ServiceStack.Configuration/ISettings",permalink:"/api/ServiceStack.Configuration/ISettings",draft:!1,tags:[],version:"current",frontMatter:{title:"Interface ISettings",sidebar_label:"ISettings"},sidebar:"apiSidebar",previous:{title:"IRuntimeAppSettings",permalink:"/api/ServiceStack.Configuration/IRuntimeAppSettings"},next:{title:"ISettingsWriter",permalink:"/api/ServiceStack.Configuration/ISettingsWriter"}},l={},u=[{value:"<strong>Assembly</strong>: ServiceStack.dll",id:"assembly-servicestackdll",level:6},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source",level:6},{value:"Methods",id:"methods",level:2},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Get(String)',id:"-getstring",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-1",level:6},{value:"Returns",id:"returns",level:5},{value:"Parameters",id:"parameters",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> GetAllKeys()',id:"-getallkeys",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-2",level:6},{value:"Returns",id:"returns-1",level:5}],m={toc:u};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-isettings"},(0,a.kt)(c.JO,{icon:"codicon:symbol-interface",className:"symbol-interface",mdxType:"Icon"})," ISettings"),(0,a.kt)("h6",{id:"assembly-servicestackdll"},(0,a.kt)("strong",{parentName:"h6"},"Assembly"),": ServiceStack.dll"),(0,a.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source"},(0,a.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/Configuration/ISettings.cs#L5"}," ",(0,a.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public interface ISettings\n")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"-getstring"},(0,a.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Get(String)"),(0,a.kt)("p",null,"Provides a common interface for Settings providers such as\nConfigurationManager or Azure","'","s RoleEnvironment. The only\nrequirement is that if the implementation cannot find the\nspecified key, the return value must be null"),(0,a.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-1"},(0,a.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/Configuration/ISettings.cs#L16"}," ",(0,a.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"string Get(string key)\n")),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"System.String"),": The string value of the specified key, or null if the key\nwas invalid"),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"System.String")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"key")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The key for the setting")))),(0,a.kt)("p",null," |"),(0,a.kt)("h3",{id:"-getallkeys"},(0,a.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," GetAllKeys()"),(0,a.kt)("p",null,"Return all keys in this configuration source."),(0,a.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-2"},(0,a.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/Configuration/ISettings.cs#L22"}," ",(0,a.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"List<string> GetAllKeys()\n")),(0,a.kt)("h5",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"System.Collections.Generic.List<System.String>")))}d.isMDXComponent=!0}}]);