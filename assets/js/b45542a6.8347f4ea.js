"use strict";(self.webpackChunkdfmg_template=self.webpackChunkdfmg_template||[]).push([[17023],{40706:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return d}});var i=a(83117),n=(a(67294),a(3905)),c=a(1954);const s={title:"Class RedisMessageProducer",sidebar_label:"RedisMessageProducer"},r='<Icon icon="codicon:symbol-class" className="symbol-class" /> RedisMessageProducer',o={unversionedId:"api/ServiceStack.Messaging/RedisMessageProducer",id:"api/ServiceStack.Messaging/RedisMessageProducer",title:"Class RedisMessageProducer",description:"",source:"@site/docs/api/ServiceStack.Messaging/RedisMessageProducer.md",sourceDirName:"api/ServiceStack.Messaging",slug:"/api/ServiceStack.Messaging/RedisMessageProducer",permalink:"/api/ServiceStack.Messaging/RedisMessageProducer",draft:!1,tags:[],version:"current",frontMatter:{title:"Class RedisMessageProducer",sidebar_label:"RedisMessageProducer"},sidebar:"apiSidebar",previous:{title:"RedisMessageFactory",permalink:"/api/ServiceStack.Messaging/RedisMessageFactory"},next:{title:"RedisMessageQueueClient",permalink:"/api/ServiceStack.Messaging/RedisMessageQueueClient"}},l={},d=[{value:"<strong>Assembly</strong>: ServiceStack.Client.dll",id:"assembly-servicestackclientdll",level:6},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source",level:6},{value:"Properties",id:"properties",level:2},{value:'<Icon icon="codicon:symbol-property" className="symbol-property" /> ReadWriteClient',id:"-readwriteclient",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-1",level:6},{value:"Methods",id:"methods",level:2},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Publish&lt;T&gt;(T)',id:"-publishtt",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-2",level:6},{value:"Parameters",id:"parameters",level:5},{value:"Type Parameters",id:"type-parameters",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Publish&lt;T&gt;(IMessage&lt;T&gt;)',id:"-publishtimessaget",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-3",level:6},{value:"Parameters",id:"parameters-1",level:5},{value:"Type Parameters",id:"type-parameters-1",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> SendOneWay(Object)',id:"-sendonewayobject",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-4",level:6},{value:"Parameters",id:"parameters-2",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> SendOneWay(String, Object)',id:"-sendonewaystring-object",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-5",level:6},{value:"Parameters",id:"parameters-3",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> SendAllOneWay(IEnumerable&lt;Object&gt;)',id:"-sendallonewayienumerableobject",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-6",level:6},{value:"Parameters",id:"parameters-4",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Publish(String, IMessage)',id:"-publishstring-imessage",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-7",level:6},{value:"Parameters",id:"parameters-5",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Dispose()',id:"-dispose",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-8",level:6},{value:"Implements",id:"implements",level:2}],m={toc:d};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-redismessageproducer"},(0,n.kt)(c.JO,{icon:"codicon:symbol-class",className:"symbol-class",mdxType:"Icon"})," RedisMessageProducer"),(0,n.kt)("h6",{id:"assembly-servicestackclientdll"},(0,n.kt)("strong",{parentName:"h6"},"Assembly"),": ServiceStack.Client.dll"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Client/Messaging/RedisMessageProducer.cs#L10"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public class RedisMessageProducer : IMessageProducer, IDisposable, IOneWayClient\n")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"-readwriteclient"},(0,n.kt)(c.JO,{icon:"codicon:symbol-property",className:"symbol-property",mdxType:"Icon"})," ReadWriteClient"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-1"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Client/Messaging/RedisMessageProducer.cs#L26"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public IRedisNativeClient ReadWriteClient { get; }\n")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"-publishtt"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Publish","<","T",">","(T)"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-2"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Client/Messaging/RedisMessageProducer.cs#L35"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public void Publish<T>(T messageBody)\n")),(0,n.kt)("h5",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"<T>")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"messageBody"))))),(0,n.kt)("h5",{id:"type-parameters"},"Type Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"T"))),(0,n.kt)("h3",{id:"-publishtimessaget"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Publish","<","T",">","(IMessage","<","T",">",")"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-3"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Client/Messaging/RedisMessageProducer.cs#L48"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public void Publish<T>(IMessage<T> message)\n")),(0,n.kt)("h5",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../ServiceStack.Messaging/IMessage%60T%60"},"ServiceStack.Messaging.IMessage","<","T",">")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"message"))))),(0,n.kt)("h5",{id:"type-parameters-1"},"Type Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"T"))),(0,n.kt)("h3",{id:"-sendonewayobject"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," SendOneWay(Object)"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-4"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Client/Messaging/RedisMessageProducer.cs#L53"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public void SendOneWay(object requestDto)\n")),(0,n.kt)("h5",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"requestDto"))))),(0,n.kt)("h3",{id:"-sendonewaystring-object"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," SendOneWay(String, Object)"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-5"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Client/Messaging/RedisMessageProducer.cs#L58"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public void SendOneWay(string queueName, object requestDto)\n")),(0,n.kt)("h5",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.String")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"queueName"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"requestDto"))))),(0,n.kt)("h3",{id:"-sendallonewayienumerableobject"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," SendAllOneWay(IEnumerable","<","Object",">",")"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-6"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Client/Messaging/RedisMessageProducer.cs#L63"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public void SendAllOneWay(IEnumerable<object> requests)\n")),(0,n.kt)("h5",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Collections.Generic.IEnumerable<System.Object>")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"requests"))))),(0,n.kt)("h3",{id:"-publishstring-imessage"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Publish(String, IMessage)"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-7"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Client/Messaging/RedisMessageProducer.cs#L72"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public void Publish(string queueName, IMessage message)\n")),(0,n.kt)("h5",{id:"parameters-5"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.String")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"queueName"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../ServiceStack.Messaging/IMessage"},"ServiceStack.Messaging.IMessage")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"message"))))),(0,n.kt)("h3",{id:"-dispose"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Dispose()"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-8"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Client/Messaging/RedisMessageProducer.cs#L81"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public void Dispose()\n")),(0,n.kt)("h2",{id:"implements"},"Implements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../ServiceStack.Messaging/IMessageProducer"},"ServiceStack.Messaging.IMessageProducer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"System.IDisposable")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../ServiceStack/IOneWayClient"},"ServiceStack.IOneWayClient"))))}u.isMDXComponent=!0}}]);