"use strict";(self.webpackChunkdfmg_template=self.webpackChunkdfmg_template||[]).push([[6538],{83101:function(e,t,i){i.r(t),i.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var a=i(83117),r=(i(67294),i(3905)),n=i(1954);const o={title:"Class KeyDerivation",sidebar_label:"KeyDerivation",description:"Provides algorithms for performing key derivation."},c='<Icon icon="codicon:symbol-class" className="symbol-class" /> KeyDerivation',s={unversionedId:"api/ServiceStack.Auth/KeyDerivation",id:"api/ServiceStack.Auth/KeyDerivation",title:"Class KeyDerivation",description:"Provides algorithms for performing key derivation.",source:"@site/docs/api/ServiceStack.Auth/KeyDerivation.md",sourceDirName:"api/ServiceStack.Auth",slug:"/api/ServiceStack.Auth/KeyDerivation",permalink:"/api/ServiceStack.Auth/KeyDerivation",draft:!1,tags:[],version:"current",frontMatter:{title:"Class KeyDerivation",sidebar_label:"KeyDerivation",description:"Provides algorithms for performing key derivation."},sidebar:"apiSidebar",previous:{title:"JwtUtils",permalink:"/api/ServiceStack.Auth/JwtUtils"},next:{title:"KeyDerivationPrf",permalink:"/api/ServiceStack.Auth/KeyDerivationPrf"}},l={},d=[{value:"<strong>Assembly</strong>: ServiceStack.dll",id:"assembly-servicestackdll",level:6},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source",level:6},{value:"Methods",id:"methods",level:2},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Pbkdf2(String, Byte[], KeyDerivationPrf, Int32, Int32)',id:"-pbkdf2string-byte-keyderivationprf-int32-int32",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-1",level:6},{value:"Returns",id:"returns",level:5},{value:"Parameters",id:"parameters",level:5}],m={toc:d};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-keyderivation"},(0,r.kt)(n.JO,{icon:"codicon:symbol-class",className:"symbol-class",mdxType:"Icon"})," KeyDerivation"),(0,r.kt)("p",null,"Provides algorithms for performing key derivation."),(0,r.kt)("h6",{id:"assembly-servicestackdll"},(0,r.kt)("strong",{parentName:"h6"},"Assembly"),": ServiceStack.dll"),(0,r.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source"},(0,r.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/Auth/PasswordHasher.cs#L273"}," ",(0,r.kt)(n.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public static class KeyDerivation\n")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"-pbkdf2string-byte-keyderivationprf-int32-int32"},(0,r.kt)(n.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Pbkdf2(String, Byte[], KeyDerivationPrf, Int32, Int32)"),(0,r.kt)("p",null,"Performs key derivation using the PBKDF2 algorithm."),(0,r.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-1"},(0,r.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/Auth/PasswordHasher.cs#L288"}," ",(0,r.kt)(n.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public static byte[] Pbkdf2(string password, byte[] salt, KeyDerivationPrf prf, int iterationCount, int numBytesRequested)\n")),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"System.Byte[]"),": The derived key."),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"System.String")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"password")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The password from which to derive the key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"System.Byte[]")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"salt")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The salt to be used during the key derivation process.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../ServiceStack.Auth/KeyDerivationPrf"},"ServiceStack.Auth.KeyDerivationPrf")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"prf")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The pseudo-random function to be used in the key derivation process.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"System.Int32")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"iterationCount")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of iterations of the pseudo-random function to apply")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"during the key derivation process."),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"System.Int32")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"numBytesRequested")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The desired length (in bytes) of the derived key.")))))}p.isMDXComponent=!0}}]);