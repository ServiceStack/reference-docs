"use strict";(self.webpackChunkdfmg_template=self.webpackChunkdfmg_template||[]).push([[37959],{24609:function(e,i,t){t.r(i),t.d(i,{assets:function(){return s},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return m}});var o=t(83117),n=(t(67294),t(3905)),c=t(1954);const a={title:"Class ProfiledDbConnection",sidebar_label:"ProfiledDbConnection",description:"Wraps a database connection, allowing sql execution timings to be collected when a [ServiceStack.MiniProfiler](../ServiceStack.MiniProfiler/ServiceStack.MiniProfiler) session is started."},r='<Icon icon="codicon:symbol-class" className="symbol-class" /> ProfiledDbConnection',l={unversionedId:"api/ServiceStack.MiniProfiler.Data/ProfiledDbConnection",id:"api/ServiceStack.MiniProfiler.Data/ProfiledDbConnection",title:"Class ProfiledDbConnection",description:"Wraps a database connection, allowing sql execution timings to be collected when a [ServiceStack.MiniProfiler](../ServiceStack.MiniProfiler/ServiceStack.MiniProfiler) session is started.",source:"@site/docs/api/ServiceStack.MiniProfiler.Data/ProfiledDbConnection.md",sourceDirName:"api/ServiceStack.MiniProfiler.Data",slug:"/api/ServiceStack.MiniProfiler.Data/ProfiledDbConnection",permalink:"/api/ServiceStack.MiniProfiler.Data/ProfiledDbConnection",draft:!1,tags:[],version:"current",frontMatter:{title:"Class ProfiledDbConnection",sidebar_label:"ProfiledDbConnection",description:"Wraps a database connection, allowing sql execution timings to be collected when a [ServiceStack.MiniProfiler](../ServiceStack.MiniProfiler/ServiceStack.MiniProfiler) session is started."},sidebar:"apiSidebar",previous:{title:"ProfiledDbCommand",permalink:"/api/ServiceStack.MiniProfiler.Data/ProfiledDbCommand"},next:{title:"ProfiledDbDataReader",permalink:"/api/ServiceStack.MiniProfiler.Data/ProfiledDbDataReader"}},s={},m=[{value:"<strong>Assembly</strong>: ServiceStack.NetFramework.dll",id:"assembly-servicestacknetframeworkdll",level:6},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source",level:6},{value:"Properties",id:"properties",level:2},{value:'<Icon icon="codicon:symbol-property" className="symbol-property" /> _conn',id:"-_conn",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-1",level:6},{value:'<Icon icon="codicon:symbol-property" className="symbol-property" /> _profiler',id:"-_profiler",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-2",level:6},{value:'<Icon icon="codicon:symbol-property" className="symbol-property" /> autoDisposeConnection',id:"-autodisposeconnection",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-3",level:6},{value:"Inherited Properties",id:"inherited-properties",level:2},{value:'<Icon icon="codicon:symbol-property" className="symbol-property" /> AutoDisposeConnection',id:"-autodisposeconnection-1",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-4",level:6},{value:'<Icon icon="codicon:symbol-property" className="symbol-property" /> CanRaiseEvents',id:"-canraiseevents",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-5",level:6},{value:'<Icon icon="codicon:symbol-property" className="symbol-property" /> ConnectionString',id:"-connectionstring",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-6",level:6},{value:'<Icon icon="codicon:symbol-property" className="symbol-property" /> ConnectionTimeout',id:"-connectiontimeout",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-7",level:6},{value:'<Icon icon="codicon:symbol-property" className="symbol-property" /> Database',id:"-database",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-8",level:6},{value:'<Icon icon="codicon:symbol-property" className="symbol-property" /> DataSource',id:"-datasource",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-9",level:6},{value:'<Icon icon="codicon:symbol-property" className="symbol-property" /> DbConnection',id:"-dbconnection",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-10",level:6},{value:'<Icon icon="codicon:symbol-property" className="symbol-property" /> InnerConnection',id:"-innerconnection",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-11",level:6},{value:'<Icon icon="codicon:symbol-property" className="symbol-property" /> Profiler',id:"-profiler",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-12",level:6},{value:'<Icon icon="codicon:symbol-property" className="symbol-property" /> ServerVersion',id:"-serverversion",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-13",level:6},{value:'<Icon icon="codicon:symbol-property" className="symbol-property" /> State',id:"-state",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-14",level:6},{value:'<Icon icon="codicon:symbol-property" className="symbol-property" /> WrappedConnection',id:"-wrappedconnection",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-15",level:6},{value:"Methods",id:"methods",level:2},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> CreateDbCommand()',id:"-createdbcommand",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-16",level:6},{value:"Returns",id:"returns",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Clone()',id:"-clone",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-17",level:6},{value:"Returns",id:"returns-1",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> ICloneable.Clone()',id:"-icloneableclone",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-18",level:6},{value:"Returns",id:"returns-2",level:5},{value:"Inherited Methods",id:"inherited-methods",level:2},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> BeginDbTransaction(IsolationLevel)',id:"-begindbtransactionisolationlevel",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-19",level:6},{value:"Returns",id:"returns-3",level:5},{value:"Parameters",id:"parameters",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> ChangeDatabase(String)',id:"-changedatabasestring",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-20",level:6},{value:"Parameters",id:"parameters-1",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Close()',id:"-close",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-21",level:6},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> CreateDbCommand()',id:"-createdbcommand-1",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-22",level:6},{value:"Returns",id:"returns-4",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Dispose(Boolean)',id:"-disposeboolean",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-23",level:6},{value:"Parameters",id:"parameters-2",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> GetSchema()',id:"-getschema",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-24",level:6},{value:"Returns",id:"returns-5",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> GetSchema(String)',id:"-getschemastring",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-25",level:6},{value:"Returns",id:"returns-6",level:5},{value:"Parameters",id:"parameters-3",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> GetSchema(String, String[])',id:"-getschemastring-string",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-26",level:6},{value:"Returns",id:"returns-7",level:5},{value:"Parameters",id:"parameters-4",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Open()',id:"-open",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-27",level:6},{value:"Implements",id:"implements",level:2}],d={toc:m};function u(e){let{components:i,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,t,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-profileddbconnection"},(0,n.kt)(c.JO,{icon:"codicon:symbol-class",className:"symbol-class",mdxType:"Icon"})," ProfiledDbConnection"),(0,n.kt)("p",null,"Wraps a database connection, allowing sql execution timings to be collected when a ",(0,n.kt)("a",{parentName:"p",href:"../ServiceStack.MiniProfiler/ServiceStack.MiniProfiler"},"ServiceStack.MiniProfiler")," session is started."),(0,n.kt)("h6",{id:"assembly-servicestacknetframeworkdll"},(0,n.kt)("strong",{parentName:"h6"},"Assembly"),": ServiceStack.NetFramework.dll"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.NetFramework/MiniProfiler/Data/ProfiledDbConnection.cs#L12"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public class ProfiledDbConnection : ProfiledConnection, IComponent, IDbConnection, IDisposable, IHasDbConnection, ICloneable\n")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"-_conn"},(0,n.kt)(c.JO,{icon:"codicon:symbol-property",className:"symbol-property",mdxType:"Icon"})," _conn"),(0,n.kt)("p",null,"This will be made private; use ",(0,n.kt)("a",{parentName:"p",href:"../ServiceStack.MiniProfiler.Data/ProfiledConnection#innerconnection"},"ServiceStack.MiniProfiler.Data.ProfiledConnection.InnerConnection")),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-1"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.NetFramework/MiniProfiler/Data/ProfiledDbConnection.cs#L44"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"protected DbConnection _conn { get; set; }\n")),(0,n.kt)("h3",{id:"-_profiler"},(0,n.kt)(c.JO,{icon:"codicon:symbol-property",className:"symbol-property",mdxType:"Icon"})," _profiler"),(0,n.kt)("p",null,"This will be made private; use ",(0,n.kt)("a",{parentName:"p",href:"../ServiceStack.MiniProfiler/MiniProfiler"},"ServiceStack.MiniProfiler.MiniProfiler")),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-2"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.NetFramework/MiniProfiler/Data/ProfiledDbConnection.cs#L53"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"protected IDbProfiler _profiler { get; set; }\n")),(0,n.kt)("h3",{id:"-autodisposeconnection"},(0,n.kt)(c.JO,{icon:"codicon:symbol-property",className:"symbol-property",mdxType:"Icon"})," autoDisposeConnection"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-3"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.NetFramework/MiniProfiler/Data/ProfiledDbConnection.cs#L59"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"protected bool autoDisposeConnection { get; set; }\n")),(0,n.kt)("h2",{id:"inherited-properties"},"Inherited Properties"),(0,n.kt)("h3",{id:"-autodisposeconnection-1"},(0,n.kt)(c.JO,{icon:"codicon:symbol-property",className:"symbol-property",mdxType:"Icon"})," AutoDisposeConnection"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-4"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Common/MiniProfiler/Data/ProfiledConnection.cs#L124"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"protected bool AutoDisposeConnection { get; set; }\n")),(0,n.kt)("h3",{id:"-canraiseevents"},(0,n.kt)(c.JO,{icon:"codicon:symbol-property",className:"symbol-property",mdxType:"Icon"})," CanRaiseEvents"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-5"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Common/MiniProfiler/Data/ProfiledConnection.cs#L88"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"protected override bool CanRaiseEvents { get; }\n")),(0,n.kt)("h3",{id:"-connectionstring"},(0,n.kt)(c.JO,{icon:"codicon:symbol-property",className:"symbol-property",mdxType:"Icon"})," ConnectionString"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-6"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Common/MiniProfiler/Data/ProfiledConnection.cs#L93"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public override string ConnectionString { get; set; }\n")),(0,n.kt)("h3",{id:"-connectiontimeout"},(0,n.kt)(c.JO,{icon:"codicon:symbol-property",className:"symbol-property",mdxType:"Icon"})," ConnectionTimeout"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-7"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Common/MiniProfiler/Data/ProfiledConnection.cs#L99"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public override int ConnectionTimeout { get; }\n")),(0,n.kt)("h3",{id:"-database"},(0,n.kt)(c.JO,{icon:"codicon:symbol-property",className:"symbol-property",mdxType:"Icon"})," Database"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-8"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Common/MiniProfiler/Data/ProfiledConnection.cs#L104"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public override string Database { get; }\n")),(0,n.kt)("h3",{id:"-datasource"},(0,n.kt)(c.JO,{icon:"codicon:symbol-property",className:"symbol-property",mdxType:"Icon"})," DataSource"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-9"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Common/MiniProfiler/Data/ProfiledConnection.cs#L109"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public override string DataSource { get; }\n")),(0,n.kt)("h3",{id:"-dbconnection"},(0,n.kt)(c.JO,{icon:"codicon:symbol-property",className:"symbol-property",mdxType:"Icon"})," DbConnection"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-10"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Common/MiniProfiler/Data/ProfiledConnection.cs#L66"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public IDbConnection DbConnection { get; }\n")),(0,n.kt)("h3",{id:"-innerconnection"},(0,n.kt)(c.JO,{icon:"codicon:symbol-property",className:"symbol-property",mdxType:"Icon"})," InnerConnection"),(0,n.kt)("p",null,"The underlying, real database connection to your db provider."),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-11"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Common/MiniProfiler/Data/ProfiledConnection.cs#L60"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public DbConnection InnerConnection { get; protected set; }\n")),(0,n.kt)("h3",{id:"-profiler"},(0,n.kt)(c.JO,{icon:"codicon:symbol-property",className:"symbol-property",mdxType:"Icon"})," Profiler"),(0,n.kt)("p",null,"The current profiler instance; could be null."),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-12"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Common/MiniProfiler/Data/ProfiledConnection.cs#L74"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public IDbProfiler Profiler { get; protected set; }\n")),(0,n.kt)("h3",{id:"-serverversion"},(0,n.kt)(c.JO,{icon:"codicon:symbol-property",className:"symbol-property",mdxType:"Icon"})," ServerVersion"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-13"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Common/MiniProfiler/Data/ProfiledConnection.cs#L114"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public override string ServerVersion { get; }\n")),(0,n.kt)("h3",{id:"-state"},(0,n.kt)(c.JO,{icon:"codicon:symbol-property",className:"symbol-property",mdxType:"Icon"})," State"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-14"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Common/MiniProfiler/Data/ProfiledConnection.cs#L119"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public override ConnectionState State { get; }\n")),(0,n.kt)("h3",{id:"-wrappedconnection"},(0,n.kt)(c.JO,{icon:"codicon:symbol-property",className:"symbol-property",mdxType:"Icon"})," WrappedConnection"),(0,n.kt)("p",null,"The raw connection this is wrapping"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-15"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Common/MiniProfiler/Data/ProfiledConnection.cs#L83"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public DbConnection WrappedConnection { get; }\n")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"-createdbcommand"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," CreateDbCommand()"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-16"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.NetFramework/MiniProfiler/Data/ProfiledDbConnection.cs#L65"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"protected override DbCommand CreateDbCommand()\n")),(0,n.kt)("h5",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"System.Data.Common.DbCommand")),(0,n.kt)("h3",{id:"-clone"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Clone()"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-17"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.NetFramework/MiniProfiler/Data/ProfiledDbConnection.cs#L70"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public ProfiledDbConnection Clone()\n")),(0,n.kt)("h5",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../ServiceStack.MiniProfiler.Data/ProfiledDbConnection"},"ServiceStack.MiniProfiler.Data.ProfiledDbConnection")),(0,n.kt)("h3",{id:"-icloneableclone"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," ICloneable.Clone()"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-18"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.NetFramework/MiniProfiler/Data/ProfiledDbConnection.cs#L76"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"object ICloneable.Clone()\n")),(0,n.kt)("h5",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"System.Object")),(0,n.kt)("h2",{id:"inherited-methods"},"Inherited Methods"),(0,n.kt)("h3",{id:"-begindbtransactionisolationlevel"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," BeginDbTransaction(IsolationLevel)"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-19"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Common/MiniProfiler/Data/ProfiledConnection.cs#L164"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"protected override DbTransaction BeginDbTransaction(IsolationLevel isolationLevel)\n")),(0,n.kt)("h5",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"System.Data.Common.DbTransaction")),(0,n.kt)("h5",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Data.IsolationLevel")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"isolationLevel"))))),(0,n.kt)("h3",{id:"-changedatabasestring"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," ChangeDatabase(String)"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-20"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Common/MiniProfiler/Data/ProfiledConnection.cs#L126"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public override void ChangeDatabase(string databaseName)\n")),(0,n.kt)("h5",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.String")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"databaseName"))))),(0,n.kt)("h3",{id:"-close"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Close()"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-21"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Common/MiniProfiler/Data/ProfiledConnection.cs#L131"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public override void Close()\n")),(0,n.kt)("h3",{id:"-createdbcommand-1"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," CreateDbCommand()"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-22"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Common/MiniProfiler/Data/ProfiledConnection.cs#L169"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"protected override DbCommand CreateDbCommand()\n")),(0,n.kt)("h5",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"System.Data.Common.DbCommand")),(0,n.kt)("h3",{id:"-disposeboolean"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Dispose(Boolean)"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-23"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Common/MiniProfiler/Data/ProfiledConnection.cs#L174"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"protected override void Dispose(bool disposing)\n")),(0,n.kt)("h5",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.Boolean")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"disposing"))))),(0,n.kt)("h3",{id:"-getschema"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," GetSchema()"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-24"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Common/MiniProfiler/Data/ProfiledConnection.cs#L142"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public override DataTable GetSchema()\n")),(0,n.kt)("h5",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"System.Data.DataTable")),(0,n.kt)("h3",{id:"-getschemastring"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," GetSchema(String)"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-25"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Common/MiniProfiler/Data/ProfiledConnection.cs#L147"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public override DataTable GetSchema(string collectionName)\n")),(0,n.kt)("h5",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"System.Data.DataTable")),(0,n.kt)("h5",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.String")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"collectionName"))))),(0,n.kt)("h3",{id:"-getschemastring-string"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," GetSchema(String, String[])"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-26"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Common/MiniProfiler/Data/ProfiledConnection.cs#L152"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public override DataTable GetSchema(string collectionName, string[] restrictionValues)\n")),(0,n.kt)("h5",{id:"returns-7"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"System.Data.DataTable")),(0,n.kt)("h5",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.String")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"collectionName"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"System.String[]")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"restrictionValues"))))),(0,n.kt)("h3",{id:"-open"},(0,n.kt)(c.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Open()"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-27"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack.Common/MiniProfiler/Data/ProfiledConnection.cs#L158"}," ",(0,n.kt)(c.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public override void Open()\n")),(0,n.kt)("h2",{id:"implements"},"Implements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"System.ComponentModel.IComponent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"System.Data.IDbConnection")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"System.IDisposable")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../ServiceStack.Data/IHasDbConnection"},"ServiceStack.Data.IHasDbConnection")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"System.ICloneable"))))}u.isMDXComponent=!0}}]);