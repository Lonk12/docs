"use strict";(self.webpackChunk_betterdiscord_docs=self.webpackChunk_betterdiscord_docs||[]).push([[3900],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=c(n),m=r,h=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return n?a.createElement(h,l(l({ref:e},d),{},{components:n})):a.createElement(h,l({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3073:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},l="Patcher",o={unversionedId:"plugins/api/patcher",id:"plugins/api/patcher",title:"Patcher",description:"Patcher is a utility class for modifying existing functions. Instance is accessible through the BdApi.\rThis is extremely useful for modifying the internals of Discord by adjusting return value or React renders, or arguments of internal functions.",source:"@site/docs/plugins/api/patcher.md",sourceDirName:"plugins/api",slug:"/plugins/api/patcher",permalink:"/plugins/api/patcher",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"pluginsSidebar",previous:{title:"Filters",permalink:"/plugins/api/filters"},next:{title:"Webpack",permalink:"/plugins/api/webpack"}},p={},c=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"after",id:"after",level:3},{value:"before",id:"before",level:3},{value:"bind",id:"bind",level:3},{value:"getPatchesByCaller",id:"getpatchesbycaller",level:3},{value:"instead",id:"instead",level:3},{value:"unpatchAll",id:"unpatchall",level:3}],d={toc:c};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"patcher"},"Patcher"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Patcher")," is a utility class for modifying existing functions. Instance is accessible through the ",(0,r.kt)("a",{parentName:"p",href:"./bdapi"},"BdApi"),".\nThis is extremely useful for modifying the internals of Discord by adjusting return value or React renders, or arguments of internal functions."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"after"},"after"),(0,r.kt)("p",null,"This method patches onto another function, allowing your code to run instead.\nUsing this, you are also able to modify the return value, using the return of your code instead."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"caller"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Name of the caller of the patch function.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"moduleToPatch"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Object with the function to be patched. Can also be an object's prototype.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"functionName"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Name of the function to be patched.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"callback"),(0,r.kt)("td",{parentName:"tr",align:"center"},"function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function to run after the original method. The function is given the ",(0,r.kt)("inlineCode",{parentName:"td"},"this")," context, the ",(0,r.kt)("inlineCode",{parentName:"td"},"arguments")," of the original function, and the ",(0,r.kt)("inlineCode",{parentName:"td"},"return")," value of the original function.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," - Function that cancels the original patch."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"before"},"before"),(0,r.kt)("p",null,"This method patches onto another function, allowing your code to run beforehand.\nUsing this, you are also able to modify the incoming arguments before the original method is run."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"caller"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Name of the caller of the patch function.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"moduleToPatch"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Object with the function to be patched. Can also be an object's prototype.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"functionName"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Name of the function to be patched.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"callback"),(0,r.kt)("td",{parentName:"tr",align:"center"},"function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function to run before the original method. The function is given the ",(0,r.kt)("inlineCode",{parentName:"td"},"this")," context and the ",(0,r.kt)("inlineCode",{parentName:"td"},"arguments")," of the original function.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," - Function that cancels the original patch."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"bind"},"bind"),(0,r.kt)("p",null,"This function creates a version of itself that binds all ",(0,r.kt)("inlineCode",{parentName:"p"},"caller")," parameters to your ID."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ID to use for all subsequent calls")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Patcher")," - An instance of this patcher with all functions bound to your ID"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getpatchesbycaller"},"getPatchesByCaller"),(0,r.kt)("p",null,"Returns all patches by a particular caller. The patches all have an ",(0,r.kt)("inlineCode",{parentName:"p"},"unpatch()")," method."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"caller"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ID of the original patches")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.<function()>")," - Array of all the patch objects."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"instead"},"instead"),(0,r.kt)("p",null,"This method patches onto another function, allowing your code to run instead.\nUsing this, you are also able to modify the return value, using the return of your code instead."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"caller"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Name of the caller of the patch function.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"moduleToPatch"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Object with the function to be patched. Can also be an object's prototype.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"functionName"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Name of the function to be patched.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"callback"),(0,r.kt)("td",{parentName:"tr",align:"center"},"function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function to run before the original method. The function is given the ",(0,r.kt)("inlineCode",{parentName:"td"},"this")," context, ",(0,r.kt)("inlineCode",{parentName:"td"},"arguments")," of the original function, and also the original function.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," - Function that cancels the original patch."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"unpatchall"},"unpatchAll"),(0,r.kt)("p",null,"Automatically cancels all patches created with a specific ID."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"caller"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ID of the original patches")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null))}u.isMDXComponent=!0}}]);