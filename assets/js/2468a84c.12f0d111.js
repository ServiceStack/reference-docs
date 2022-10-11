"use strict";(self.webpackChunkdfmg_template=self.webpackChunkdfmg_template||[]).push([[37992],{38469:function(o,e,s){s.r(e),s.d(e,{assets:function(){return r},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return a},metadata:function(){return n},toc:function(){return m}});var c=s(83117),t=(s(67294),s(3905)),l=s(1954);const a={title:"Namespace ServiceStack.Text.Pools",sidebar_label:"ServiceStack.Text.Pools",sidebar_position:0},i="Namespace ServiceStack.Text.Pools",n={unversionedId:"api/ServiceStack.Text.Pools/ServiceStack.Text.Pools",id:"api/ServiceStack.Text.Pools/ServiceStack.Text.Pools",title:"Namespace ServiceStack.Text.Pools",description:"Notes:",source:"@site/docs/api/ServiceStack.Text.Pools/ServiceStack.Text.Pools.md",sourceDirName:"api/ServiceStack.Text.Pools",slug:"/api/ServiceStack.Text.Pools/",permalink:"/api/ServiceStack.Text.Pools/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Namespace ServiceStack.Text.Pools",sidebar_label:"ServiceStack.Text.Pools",sidebar_position:0},sidebar:"apiSidebar",previous:{title:"JsvWriter<T>",permalink:"/api/ServiceStack.Text.Jsv/JsvWriter`T`"},next:{title:"BufferPool",permalink:"/api/ServiceStack.Text.Pools/BufferPool"}},r={},m=[{value:"Classes",id:"classes",level:2},{value:'<Icon icon="codicon:symbol-class" className="symbol-class" /> BufferPool',id:"icon-iconcodiconsymbol-class-classnamesymbol-class--bufferpool",level:3},{value:'<Icon icon="codicon:symbol-class" className="symbol-class" /> CharPool',id:"icon-iconcodiconsymbol-class-classnamesymbol-class--charpool",level:3},{value:'<Icon icon="codicon:symbol-class" className="symbol-class" /> ObjectPool&lt;T&gt;',id:"icon-iconcodiconsymbol-class-classnamesymbol-class--objectpoolt",level:3},{value:'<Icon icon="codicon:symbol-class" className="symbol-class" /> SharedPools',id:"icon-iconcodiconsymbol-class-classnamesymbol-class--sharedpools",level:3},{value:'<Icon icon="codicon:symbol-class" className="symbol-class" /> StringBuilderPool',id:"icon-iconcodiconsymbol-class-classnamesymbol-class--stringbuilderpool",level:3},{value:"Structs",id:"structs",level:2},{value:'<Icon icon="codicon:symbol-structure" className="symbol-structure" /> PooledObject&lt;T&gt;',id:"icon-iconcodiconsymbol-structure-classnamesymbol-structure--pooledobjectt",level:3}],u={toc:m};function b(o){let{components:e,...s}=o;return(0,t.kt)("wrapper",(0,c.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"namespace-servicestacktextpools"},"Namespace ServiceStack.Text.Pools"),(0,t.kt)("h2",{id:"classes"},"Classes"),(0,t.kt)("h3",{id:"icon-iconcodiconsymbol-class-classnamesymbol-class--bufferpool"},(0,t.kt)("a",{parentName:"h3",href:"../ServiceStack.Text.Pools/BufferPool"},(0,t.kt)(l.JO,{icon:"codicon:symbol-class",className:"symbol-class",mdxType:"Icon"})," BufferPool")),(0,t.kt)("p",null,"Courtesy of @marcgravell\n",(0,t.kt)("a",{parentName:"p",href:"https://github.com/mgravell/protobuf-net/blob/master/src/protobuf-net/BufferPool.cs"},"https://github.com/mgravell/protobuf-net/blob/master/src/protobuf-net/BufferPool.cs")),(0,t.kt)("h3",{id:"icon-iconcodiconsymbol-class-classnamesymbol-class--charpool"},(0,t.kt)("a",{parentName:"h3",href:"../ServiceStack.Text.Pools/CharPool"},(0,t.kt)(l.JO,{icon:"codicon:symbol-class",className:"symbol-class",mdxType:"Icon"})," CharPool")),(0,t.kt)("h3",{id:"icon-iconcodiconsymbol-class-classnamesymbol-class--objectpoolt"},(0,t.kt)("a",{parentName:"h3",href:"../ServiceStack.Text.Pools/ObjectPool%60T%60"},(0,t.kt)(l.JO,{icon:"codicon:symbol-class",className:"symbol-class",mdxType:"Icon"})," ObjectPool","<","T",">")),(0,t.kt)("p",null,"Generic implementation of object pooling pattern with predefined pool size limit. The main\npurpose is that limited number of frequently used objects can be kept in the pool for\nfurther recycling."),(0,t.kt)("p",null,"Notes:\n1) it is not the goal to keep all returned objects. Pool is not meant for storage. If there\nis no space in the pool, extra returned objects will be dropped."),(0,t.kt)("p",null,"2) it is implied that if object was obtained from a pool, the caller will return it back in\na relatively short time. Keeping checked out objects for long durations is ok, but\nreduces usefulness of pooling. Just new up your own."),(0,t.kt)("p",null,"Not returning objects to the pool in not detrimental to the pool","'","s work, but is a bad practice.\nRationale:\nIf there is no intent for reusing the object, do not use pool - just use ",'"',"new",'"',"."),(0,t.kt)("h3",{id:"icon-iconcodiconsymbol-class-classnamesymbol-class--sharedpools"},(0,t.kt)("a",{parentName:"h3",href:"../ServiceStack.Text.Pools/SharedPools"},(0,t.kt)(l.JO,{icon:"codicon:symbol-class",className:"symbol-class",mdxType:"Icon"})," SharedPools")),(0,t.kt)("p",null,"Shared object pool for roslyn"),(0,t.kt)("p",null,"Use this shared pool if only concern is reducing object allocations.\nif perf of an object pool itself is also a concern, use ObjectPool directly."),(0,t.kt)("p",null,"For example, if you want to create a million of small objects within a second,\nuse the ObjectPool directly. it should have much less overhead than using this."),(0,t.kt)("h3",{id:"icon-iconcodiconsymbol-class-classnamesymbol-class--stringbuilderpool"},(0,t.kt)("a",{parentName:"h3",href:"../ServiceStack.Text.Pools/StringBuilderPool"},(0,t.kt)(l.JO,{icon:"codicon:symbol-class",className:"symbol-class",mdxType:"Icon"})," StringBuilderPool")),(0,t.kt)("h2",{id:"structs"},"Structs"),(0,t.kt)("h3",{id:"icon-iconcodiconsymbol-structure-classnamesymbol-structure--pooledobjectt"},(0,t.kt)("a",{parentName:"h3",href:"../ServiceStack.Text.Pools/PooledObject%60T%60"},(0,t.kt)(l.JO,{icon:"codicon:symbol-structure",className:"symbol-structure",mdxType:"Icon"})," PooledObject","<","T",">")),(0,t.kt)("p",null,"this is RAII object to automatically release pooled object when its owning pool"))}b.isMDXComponent=!0}}]);