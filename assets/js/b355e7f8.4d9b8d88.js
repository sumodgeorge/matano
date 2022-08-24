"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[3461],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Querying tables",sidebar_position:3},i=void 0,s={unversionedId:"tables/querying",id:"tables/querying",title:"Querying tables",description:"All Matano data is stored as Iceberg tables, with data stored in Parquet files on S3. You can query and interact with these like any other Iceberg table, using Athena, Spark, or any other technology supporting Iceberg.",source:"@site/docs/tables/querying.md",sourceDirName:"tables",slug:"/tables/querying",permalink:"/docs/tables/querying",draft:!1,editUrl:"https://github.com/matanolabs/matano/tree/main/website/docs/tables/querying.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Querying tables",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Log source schema",permalink:"/docs/log-sources/schema"},next:{title:"Detections",permalink:"/docs/detections/"}},l={},c=[{value:"Notes",id:"notes",level:2},{value:"Querying a log source",id:"querying-a-log-source",level:2},{value:"Advanced",id:"advanced",level:2},{value:"Performing ACID transactions",id:"performing-acid-transactions",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All Matano data is stored as Iceberg tables, with data stored in Parquet files on S3. You can query and interact with these like any other Iceberg table, using Athena, Spark, or any other technology supporting Iceberg."),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("p",null,"Matano tables are stored in AWS Glue database named ",(0,a.kt)("strong",{parentName:"p"},"matano"),", with the Iceberg table name as the log source name specified in your ",(0,a.kt)("inlineCode",{parentName:"p"},"matano.config.yml"),". "),(0,a.kt)("h2",{id:"querying-a-log-source"},"Querying a log source"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See more on ",(0,a.kt)("a",{parentName:"strong",href:"https://docs.aws.amazon.com/athena/latest/ug/querying-iceberg-table-data.html"},"Querying Iceberg tables")," in Athena.")),(0,a.kt)("p",null,"You can query a log source from Athena using the following syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM matano.log_source_name [WHERE predicate]\n")),(0,a.kt)("h2",{id:"advanced"},"Advanced"),(0,a.kt)("h3",{id:"performing-acid-transactions"},"Performing ACID transactions"),(0,a.kt)("p",null,"Iceberg tables support ACID transactions such as deleting, inserting, and updating. You can use this feature if you need to modify your data for compliance, legal, or any other reason, without having to copy and re-load your entire dataset."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/athena/latest/ug/querying-iceberg-updating-iceberg-table-data.html"},"Updating Iceberg table data")," on the syntax to perform Update and Delete transactions on your tables."))}p.isMDXComponent=!0}}]);