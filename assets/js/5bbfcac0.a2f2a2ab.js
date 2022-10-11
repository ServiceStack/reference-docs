"use strict";(self.webpackChunkdfmg_template=self.webpackChunkdfmg_template||[]).push([[89885],{57445:function(e,t,i){i.r(t),i.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return m}});var a=i(83117),n=(i(67294),i(3905)),r=i(1954);const o={title:"Class PredicateBuilder",sidebar_label:"PredicateBuilder",description:"Enables the efficient, dynamic composition of query predicates."},c='<Icon icon="codicon:symbol-class" className="symbol-class" /> PredicateBuilder',l={unversionedId:"api/ServiceStack.OrmLite/PredicateBuilder",id:"api/ServiceStack.OrmLite/PredicateBuilder",title:"Class PredicateBuilder",description:"Enables the efficient, dynamic composition of query predicates.",source:"@site/docs/api/ServiceStack.OrmLite/PredicateBuilder.md",sourceDirName:"api/ServiceStack.OrmLite",slug:"/api/ServiceStack.OrmLite/PredicateBuilder",permalink:"/api/ServiceStack.OrmLite/PredicateBuilder",draft:!1,tags:[],version:"current",frontMatter:{title:"Class PredicateBuilder",sidebar_label:"PredicateBuilder",description:"Enables the efficient, dynamic composition of query predicates."},sidebar:"apiSidebar",previous:{title:"PostgreSqlDialect",permalink:"/api/ServiceStack.OrmLite/PostgreSqlDialect"},next:{title:"PrefixNamingStrategy",permalink:"/api/ServiceStack.OrmLite/PrefixNamingStrategy"}},s={},m=[{value:"<strong>Assembly</strong>: ServiceStack.OrmLite.dll",id:"assembly-servicestackormlitedll",level:6},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source",level:6},{value:"Methods",id:"methods",level:2},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> True&lt;T&gt;()',id:"-truet",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-1",level:6},{value:"Returns",id:"returns",level:5},{value:"Type Parameters",id:"type-parameters",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> False&lt;T&gt;()',id:"-falset",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-2",level:6},{value:"Returns",id:"returns-1",level:5},{value:"Type Parameters",id:"type-parameters-1",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Create&lt;T&gt;(Expression&lt;Func&lt;T, Boolean&gt;&gt;)',id:"-createtexpressionfunct-boolean",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-3",level:6},{value:"Returns",id:"returns-2",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Type Parameters",id:"type-parameters-2",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> And&lt;T&gt;(Expression&lt;Func&lt;T, Boolean&gt;&gt;, Expression&lt;Func&lt;T, Boolean&gt;&gt;)',id:"-andtexpressionfunct-boolean-expressionfunct-boolean",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-4",level:6},{value:"Returns",id:"returns-3",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"Type Parameters",id:"type-parameters-3",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Or&lt;T&gt;(Expression&lt;Func&lt;T, Boolean&gt;&gt;, Expression&lt;Func&lt;T, Boolean&gt;&gt;)',id:"-ortexpressionfunct-boolean-expressionfunct-boolean",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-5",level:6},{value:"Returns",id:"returns-4",level:5},{value:"Parameters",id:"parameters-2",level:5},{value:"Type Parameters",id:"type-parameters-4",level:5},{value:'<Icon icon="codicon:symbol-method" className="symbol-method" /> Not&lt;T&gt;(Expression&lt;Func&lt;T, Boolean&gt;&gt;)',id:"-nottexpressionfunct-boolean",level:3},{value:' <Icon icon="codicon:github-inverted" className="github-icon" /> View Source',id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-6",level:6},{value:"Returns",id:"returns-5",level:5},{value:"Parameters",id:"parameters-3",level:5},{value:"Type Parameters",id:"type-parameters-5",level:5}],d={toc:m};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-predicatebuilder"},(0,n.kt)(r.JO,{icon:"codicon:symbol-class",className:"symbol-class",mdxType:"Icon"})," PredicateBuilder"),(0,n.kt)("p",null,"Enables the efficient, dynamic composition of query predicates."),(0,n.kt)("h6",{id:"assembly-servicestackormlitedll"},(0,n.kt)("strong",{parentName:"h6"},"Assembly"),": ServiceStack.OrmLite.dll"),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/Expressions/PredicateBuilder.cs#L11"}," ",(0,n.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public static class PredicateBuilder : object\n")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"-truet"},(0,n.kt)(r.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," True","<","T",">","()"),(0,n.kt)("p",null,"Creates a predicate that evaluates to true."),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-1"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/Expressions/PredicateBuilder.cs#L16"}," ",(0,n.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public static Expression<Func<T, bool>> True<T>()\n")),(0,n.kt)("h5",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Expression<Func<<T>,System.Boolean>>")),(0,n.kt)("h5",{id:"type-parameters"},"Type Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"T"))),(0,n.kt)("h3",{id:"-falset"},(0,n.kt)(r.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," False","<","T",">","()"),(0,n.kt)("p",null,"Creates a predicate that evaluates to false."),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-2"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/Expressions/PredicateBuilder.cs#L24"}," ",(0,n.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public static Expression<Func<T, bool>> False<T>()\n")),(0,n.kt)("h5",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Expression<Func<<T>,System.Boolean>>")),(0,n.kt)("h5",{id:"type-parameters-1"},"Type Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"T"))),(0,n.kt)("h3",{id:"-createtexpressionfunct-boolean"},(0,n.kt)(r.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Create","<","T",">","(Expression","<","Func","<","T, Boolean",">",">",")"),(0,n.kt)("p",null,"Creates a predicate expression from the specified lambda expression."),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-3"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/Expressions/PredicateBuilder.cs#L32"}," ",(0,n.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public static Expression<Func<T, bool>> Create<T>(Expression<Func<T, bool>> predicate)\n")),(0,n.kt)("h5",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Expression<Func<<T>,System.Boolean>>")),(0,n.kt)("h5",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Expression<Func<<T>,System.Boolean>>")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"predicate"))))),(0,n.kt)("h5",{id:"type-parameters-2"},"Type Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"T"))),(0,n.kt)("h3",{id:"-andtexpressionfunct-boolean-expressionfunct-boolean"},(0,n.kt)(r.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," And","<","T",">","(Expression","<","Func","<","T, Boolean",">",">",", Expression","<","Func","<","T, Boolean",">",">",")"),(0,n.kt)("p",null,"Combines the first predicate with the second using the logical ",'"',"and",'"',"."),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-4"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/Expressions/PredicateBuilder.cs#L40"}," ",(0,n.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public static Expression<Func<T, bool>> And<T>(this Expression<Func<T, bool>> first, Expression<Func<T, bool>> second)\n")),(0,n.kt)("h5",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Expression<Func<<T>,System.Boolean>>")),(0,n.kt)("h5",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Expression<Func<<T>,System.Boolean>>")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"first"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Expression<Func<<T>,System.Boolean>>")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"second"))))),(0,n.kt)("h5",{id:"type-parameters-3"},"Type Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"T"))),(0,n.kt)("h3",{id:"-ortexpressionfunct-boolean-expressionfunct-boolean"},(0,n.kt)(r.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Or","<","T",">","(Expression","<","Func","<","T, Boolean",">",">",", Expression","<","Func","<","T, Boolean",">",">",")"),(0,n.kt)("p",null,"Combines the first predicate with the second using the logical ",'"',"or",'"',"."),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-5"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/Expressions/PredicateBuilder.cs#L49"}," ",(0,n.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public static Expression<Func<T, bool>> Or<T>(this Expression<Func<T, bool>> first, Expression<Func<T, bool>> second)\n")),(0,n.kt)("h5",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Expression<Func<<T>,System.Boolean>>")),(0,n.kt)("h5",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Expression<Func<<T>,System.Boolean>>")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"first"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Expression<Func<<T>,System.Boolean>>")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"second"))))),(0,n.kt)("h5",{id:"type-parameters-4"},"Type Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"T"))),(0,n.kt)("h3",{id:"-nottexpressionfunct-boolean"},(0,n.kt)(r.JO,{icon:"codicon:symbol-method",className:"symbol-method",mdxType:"Icon"})," Not","<","T",">","(Expression","<","Func","<","T, Boolean",">",">",")"),(0,n.kt)("p",null,"Negates the predicate."),(0,n.kt)("h6",{id:"-icon-iconcodicongithub-inverted-classnamegithub-icon--view-source-6"},(0,n.kt)("a",{parentName:"h6",href:"https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.OrmLite/src/ServiceStack.OrmLite/Expressions/PredicateBuilder.cs#L58"}," ",(0,n.kt)(r.JO,{icon:"codicon:github-inverted",className:"github-icon",mdxType:"Icon"})," View Source")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public static Expression<Func<T, bool>> Not<T>(this Expression<Func<T, bool>> expression)\n")),(0,n.kt)("h5",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Expression<Func<<T>,System.Boolean>>")),(0,n.kt)("h5",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Expression<Func<<T>,System.Boolean>>")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"expression"))))),(0,n.kt)("h5",{id:"type-parameters-5"},"Type Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"T"))))}u.isMDXComponent=!0}}]);