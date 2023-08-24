"use strict";(self.webpackChunk_betterdiscord_docs=self.webpackChunk_betterdiscord_docs||[]).push([[4639],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(a),k=r,u=c["".concat(p,".").concat(k)]||c[k]||m[k]||i;return a?n.createElement(u,l(l({ref:t},d),{},{components:a})):n.createElement(u,l({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6127:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={},l="Utils",o={unversionedId:"api/utils",id:"api/utils",title:"Utils",description:"Utils is a utility containing commonly reused functions. Instance is accessible through the BdApi.",source:"@site/docs/api/utils.md",sourceDirName:"api",slug:"/api/utils",permalink:"/api/utils",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"UI",permalink:"/api/ui"},next:{title:"Webpack",permalink:"/api/webpack"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"className",id:"classname",level:3},{value:"debounce",id:"debounce",level:3},{value:"escapeHTML",id:"escapehtml",level:3},{value:"extend",id:"extend",level:3},{value:"findInTree",id:"findintree",level:3}],d={toc:s},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"utils"},"Utils"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Utils")," is a utility containing commonly reused functions. Instance is accessible through the ",(0,r.kt)("a",{parentName:"p",href:"./bdapi"},"BdApi"),"."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"classname"},"className"),(0,r.kt)("p",null,"Builds a classname string from any number of arguments. This includes arrays and objects. When given an array all values from the array are added to the list. When given an object they keys are added as the classnames if the value is truthy. Copyright (c) 2018 Jed Watson ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JedWatson/classnames"},"https://github.com/JedWatson/classnames")," MIT License"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"argument"),(0,r.kt)("td",{parentName:"tr",align:"center"},"...any"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Anything that should be used to add classnames")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," - Joined classname"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"debounce"},"debounce"),(0,r.kt)("p",null,"Returns a function, that, as long as it continues to be invoked, will not be triggered. The function will be called after it stops being called for ",(0,r.kt)("inlineCode",{parentName:"p"},"delay")," milliseconds. It is called at the end of the sequence (trailing edge).  Adapted from the version by David Walsh (",(0,r.kt)("a",{parentName:"p",href:"https://davidwalsh.name/javascript-debounce-function"},"https://davidwalsh.name/javascript-debounce-function"),")"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"executor"),(0,r.kt)("td",{parentName:"tr",align:"center"},"function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The function to be debounced")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"delay"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Number of ms to delay calls")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," - A debounced version of the function"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"escapehtml"},"escapeHTML"),(0,r.kt)("p",null,"Takes a string of HTML and escapes it using the browser's own escaping mechanism."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"html"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"HTML to be escaped")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," - Escaped HTML string"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"extend"},"extend"),(0,r.kt)("p",null,"Deep extends an object with a set of other objects. Objects later in the list of ",(0,r.kt)("inlineCode",{parentName:"p"},"extenders")," have priority, that is to say if one sets a key to be a primitive, it will be overwritten with the next one with the same key. If it is an object, and the keys match, the object is extended. This happens recursively."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"extendee"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Object to be extended")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"extenders"),(0,r.kt)("td",{parentName:"tr",align:"center"},"...object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Objects to extend with")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," - A reference to ",(0,r.kt)("inlineCode",{parentName:"p"},"extendee")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"findintree"},"findInTree"),(0,r.kt)("p",null,"Finds a value, subobject, or array from a tree that matches a specific filter. This is a DFS."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Optional"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tree"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"none")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Tree that should be walked")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"searchFilter"),(0,r.kt)("td",{parentName:"tr",align:"center"},"callable"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"none")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Filter to check against each object and subobject")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"options"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"none")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Additional options to customize the search")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"options.walkable"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Array.","<","string",">","|","null"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"none")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Array of strings to use as keys that are allowed to be walked on. ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," indicates all keys are walkable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"options.ignore"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Array.","<","string",">"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"[]"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Array of strings to use as keys to exclude from the search. Most helpful when ",(0,r.kt)("inlineCode",{parentName:"td"},"walkable = null"),".")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);