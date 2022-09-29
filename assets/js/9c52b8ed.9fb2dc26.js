"use strict";(self.webpackChunkdfmg_template=self.webpackChunkdfmg_template||[]).push([[2905],{9365:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return r},default:function(){return g},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return m}});var n=a(83117),i=(a(67294),a(3905)),s=a(1954);const c={title:"Interface IMessageHandler",sidebar_label:"IMessageHandler",description:"Single threaded message handler that can process all messages of a particular message type."},r='<Icon icon="codicon:symbol-interface" className="symbol-interface" /> IMessageHandler',o={unversionedId:"api/ServiceStack.Messaging/IMessageHandler",id:"api/ServiceStack.Messaging/IMessageHandler",title:"Interface IMessageHandler",description:"Single threaded message handler that can process all messages of a particular message type.",source:"@site/docs/api/ServiceStack.Messaging/IMessageHandler.md",sourceDirName:"api/ServiceStack.Messaging",slug:"/api/ServiceStack.Messaging/IMessageHandler",permalink:"/api/ServiceStack.Messaging/IMessageHandler",draft:!1,tags:[],version:"current",frontMatter:{title:"Interface IMessageHandler",sidebar_label:"IMessageHandler",description:"Single threaded message handler that can process all messages of a particular message type."},sidebar:"apiSidebar",previous:{title:"IMessageFactory",permalink:"/api/ServiceStack.Messaging/IMessageFactory"},next:{title:"IMessageHandlerDisposer",permalink:"/api/ServiceStack.Messaging/IMessageHandlerDisposer"}},l={},m=[{value:"<strong>Assembly</strong>: ServiceStack.Interfaces.dll",id:"assembly-servicestackinterfacesdll",level:6},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source",level:6},{value:"Properties",id:"properties",level:2},{value:'<Icon icon="codicon:symbol-property" className="symbol-property" /> MessageType',id:"-messagetype",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-1",level:6},{value:'<Icon icon="codicon:symbol-property" className="symbol-property" /> MqClient',id:"-mqclient",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-2",level:6},{value:"Methods",id:"methods",level:2},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Process(IMessageQueueClient)',id:"-processimessagequeueclient",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-3",level:6},{value:"Parameters",id:"parameters",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> ProcessQueue(IMessageQueueClient, String, Func&lt;Boolean&gt;)',id:"-processqueueimessagequeueclient-string-funcboolean",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-4",level:6},{value:"Returns",id:"returns",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> ProcessMessage(IMessageQueueClient, Object)',id:"-processmessageimessagequeueclient-object",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-5",level:6},{value:"Parameters",id:"parameters-2",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> GetStats()',id:"-getstats",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-6",level:6},{value:"Returns",id:"returns-1",level:5}],d={toc:m};function g(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-imessagehandler"},(0,i.kt)(s.JO,{icon:"codicon:symbol-interface",className:"symbol-interface",mdxType:"Icon"})," IMessageHandler"),(0,i.kt)("p",null,"Single threaded message handler that can process all messages\nof a particular message type."),(0,i.kt)("h6",{id:"assembly-servicestackinterfacesdll"},(0,i.kt)("strong",{parentName:"h6"},"Assembly"),": ServiceStack.Interfaces.dll"),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Messaging/IMessageHandler.cs#L9"}," ",(0,i.kt)(s.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public interface IMessageHandler\n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"-messagetype"},(0,i.kt)(s.JO,{icon:"codicon:symbol-property",className:"symbol-property",mdxType:"Icon"})," MessageType"),(0,i.kt)("p",null,"The type of the message this handler processes"),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-1"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Messaging/IMessageHandler.cs#L14"}," ",(0,i.kt)(s.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"Type MessageType { get; }\n")),(0,i.kt)("h3",{id:"-mqclient"},(0,i.kt)(s.JO,{icon:"codicon:symbol-property",className:"symbol-property",mdxType:"Icon"})," MqClient"),(0,i.kt)("p",null,"The MqClient processing the message"),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-2"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Messaging/IMessageHandler.cs#L19"}," ",(0,i.kt)(s.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"IMessageQueueClient MqClient { get; }\n")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"-processimessagequeueclient"},(0,i.kt)(s.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Process(IMessageQueueClient)"),(0,i.kt)("p",null,"Process all messages pending"),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-3"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Messaging/IMessageHandler.cs#L25"}," ",(0,i.kt)(s.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"void Process(IMessageQueueClient mqClient)\n")),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../ServiceStack.Messaging/IMessageQueueClient"},"ServiceStack.Messaging.IMessageQueueClient")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"mqClient"))))),(0,i.kt)("h3",{id:"-processqueueimessagequeueclient-string-funcboolean"},(0,i.kt)(s.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," ProcessQueue(IMessageQueueClient, String, Func","<","Boolean",">",")"),(0,i.kt)("p",null,"Process messages from a single queue."),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-4"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Messaging/IMessageHandler.cs#L34"}," ",(0,i.kt)(s.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"int ProcessQueue(IMessageQueueClient mqClient, string queueName, Func<bool> doNext = null)\n")),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"System.Int32")),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../ServiceStack.Messaging/IMessageQueueClient"},"ServiceStack.Messaging.IMessageQueueClient")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"mqClient")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.String")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"queueName")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The queue to process")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.Func<System.Boolean>")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"doNext")),(0,i.kt)("td",{parentName:"tr",align:"left"},"A predicate on whether to continue processing the next message if any")))),(0,i.kt)("h3",{id:"-processmessageimessagequeueclient-object"},(0,i.kt)(s.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," ProcessMessage(IMessageQueueClient, Object)"),(0,i.kt)("p",null,"Process a single message"),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-5"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Messaging/IMessageHandler.cs#L39"}," ",(0,i.kt)(s.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"void ProcessMessage(IMessageQueueClient mqClient, object mqResponse)\n")),(0,i.kt)("h5",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../ServiceStack.Messaging/IMessageQueueClient"},"ServiceStack.Messaging.IMessageQueueClient")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"mqClient"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"System.Object")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"mqResponse"))))),(0,i.kt)("h3",{id:"-getstats"},(0,i.kt)(s.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," GetStats()"),(0,i.kt)("p",null,"Get Current Stats for this Message Handler"),(0,i.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-6"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Interfaces/Messaging/IMessageHandler.cs#L45"}," ",(0,i.kt)(s.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"IMessageHandlerStats GetStats()\n")),(0,i.kt)("h5",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../ServiceStack.Messaging/IMessageHandlerStats"},"ServiceStack.Messaging.IMessageHandlerStats")))}g.isMDXComponent=!0}}]);