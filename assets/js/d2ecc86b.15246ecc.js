"use strict";(self.webpackChunk_betterdiscord_docs=self.webpackChunk_betterdiscord_docs||[]).push([[6017],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:7,description:"Modifying existing parts of Discord."},a="Changing Discord",s={unversionedId:"plugins/basics/discord",id:"plugins/basics/discord",title:"Changing Discord",description:"Modifying existing parts of Discord.",source:"@site/docs/plugins/basics/discord.md",sourceDirName:"plugins/basics",slug:"/plugins/basics/discord",permalink:"/plugins/basics/discord",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Modifying existing parts of Discord."},sidebar:"pluginsSidebar",previous:{title:"Addon Interaction",permalink:"/plugins/basics/addons"},next:{title:"Intermediate",permalink:"/plugins/intermediate"}},c={},l=[{value:"Intercepting Events",id:"intercepting-events",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"changing-discord"},"Changing Discord"),(0,o.kt)("p",null,"Using DOM manipulation we learned earlier and some new techniques, you can not only add features to Discord--like the button we added in an earlier section--but you can alter existing functionality of the app."),(0,o.kt)("h2",{id:"intercepting-events"},"Intercepting Events"),(0,o.kt)("p",null,"This is a pretty common technique for modifying Discord's main functions. It's most commonly used for intercepting DOM events. Let's try an example together."),(0,o.kt)("p",null,"Say we want to change what happens when we click the home button to do something else."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const homeButton = document.querySelector(".listItemWrapper-3d87LP");\nconst myNewAction = event => {\n    // highlight-start\n    event.preventDefault();\n    event.stopPropagation();\n    event.stopImmediatePropagation();\n    // highlight-end\n\n    console.log("Clicked the home button!");\n};\n\nhomeButton.addEventListener("click", myNewAction);\n')),(0,o.kt)("p",null,"The important lines here are highlighted. The first line prevents browser default action. The second stops the event from propagating up the DOM tree. The third stops the event from propagating to other listeners on the same element. You can get some more ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation"},"detailed explanations on MDN"),"."),(0,o.kt)("p",null,"You'll note that we kept the ",(0,o.kt)("inlineCode",{parentName:"p"},"myNewAction")," as a separate function so it can later be removed from the element when your plugin stops. But for now, you can go ahead and test this in your DevTools console. When you click the home button, you'll no longer be taken to Discord home and instead you'll see your message in the console."))}u.isMDXComponent=!0}}]);