"use strict";(self.webpackChunk_betterdiscord_docs=self.webpackChunk_betterdiscord_docs||[]).push([[2606],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>k});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),m=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=m(r),k=a,s=u["".concat(o,".").concat(k)]||u[k]||c[k]||l;return r?n.createElement(s,i(i({ref:e},d),{},{components:r})):n.createElement(s,i({ref:e},d))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var m=2;m<l;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3870:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const l={},i="Webpack",p={unversionedId:"plugins/api/webpack",id:"plugins/api/webpack",title:"Webpack",description:"Webpack is a utility class for getting internal webpack modules. Instance is accessible through the BdApi.\rThis is extremely useful for interacting with the internals of Discord.",source:"@site/docs/plugins/api/webpack.md",sourceDirName:"plugins/api",slug:"/plugins/api/webpack",permalink:"/plugins/api/webpack",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"pluginsSidebar",previous:{title:"Patcher",permalink:"/plugins/api/patcher"}},o={},m=[{value:"Properties",id:"properties",level:2},{value:"Filters",id:"filters",level:3},{value:"Methods",id:"methods",level:2},{value:"getBulk",id:"getbulk",level:3},{value:"getModule",id:"getmodule",level:3},{value:"waitForModule",id:"waitformodule",level:3}],d={toc:m};function c(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webpack"},"Webpack"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Webpack")," is a utility class for getting internal webpack modules. Instance is accessible through the ",(0,a.kt)("a",{parentName:"p",href:"./bdapi"},"BdApi"),".\nThis is extremely useful for interacting with the internals of Discord."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"filters"},"Filters"),(0,a.kt)("p",null,"Series of ",(0,a.kt)("a",{parentName:"p",href:"./filters"},"Filters")," to be used for finding webpack modules."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Filters")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"getbulk"},"getBulk"),(0,a.kt)("p",null,"Finds multiple modules using multiple filters."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Optional"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"queries"),(0,a.kt)("td",{parentName:"tr",align:"center"},"...object"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("em",{parentName:"td"},"none")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Whether to return only the first matching module")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"queries.filter"),(0,a.kt)("td",{parentName:"tr",align:"center"},"function"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("em",{parentName:"td"},"none")),(0,a.kt)("td",{parentName:"tr",align:"center"},"A function to use to filter modules")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"queries.first"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"true"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Whether to return only the first matching module")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"queries.defaultExport"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"true"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Whether to return default export when matching the default export")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getmodule"},"getModule"),(0,a.kt)("p",null,"Finds a module using a filter function."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Optional"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"filter"),(0,a.kt)("td",{parentName:"tr",align:"center"},"function"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("em",{parentName:"td"},"none")),(0,a.kt)("td",{parentName:"tr",align:"center"},"A function to use to filter modules. It is given exports, module, and moduleID. Return true to signify match.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"options"),(0,a.kt)("td",{parentName:"tr",align:"center"},"object"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("em",{parentName:"td"},"none")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Whether to return only the first matching module")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"options.first"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"true"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Whether to return only the first matching module")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"options.defaultExport"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"true"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Whether to return default export when matching the default export")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"waitformodule"},"waitForModule"),(0,a.kt)("p",null,"Finds a module that lazily loaded."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Optional"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"filter"),(0,a.kt)("td",{parentName:"tr",align:"center"},"function"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("em",{parentName:"td"},"none")),(0,a.kt)("td",{parentName:"tr",align:"center"},"A function to use to filter modules. It is given exports. Return true to signify match.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"options"),(0,a.kt)("td",{parentName:"tr",align:"center"},"object"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("em",{parentName:"td"},"none")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Whether to return only the first matching module")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"options.signal"),(0,a.kt)("td",{parentName:"tr",align:"center"},"AbortSignal"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("em",{parentName:"td"},"none")),(0,a.kt)("td",{parentName:"tr",align:"center"},"AbortSignal of an AbortController to cancel the promise")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"options.defaultExport"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"},"true"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Whether to return default export when matching the default export")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.<any>")),(0,a.kt)("hr",null))}c.isMDXComponent=!0}}]);