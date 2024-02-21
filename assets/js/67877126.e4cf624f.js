"use strict";(self.webpackChunkopenfmb_docs=self.webpackChunkopenfmb_docs||[]).push([[7973],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,g=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},o="Introduction",l={unversionedId:"hmi/index",id:"hmi/index",title:"Introduction",description:"OpenFMB HMI is a Human Machine Interface web-based application used to design single-line diagrams with control and monitor capabilities.",source:"@site/docs/hmi/index.md",sourceDirName:"hmi",slug:"/hmi/",permalink:"/docs/hmi/",draft:!1,editUrl:"https://github.com/openenergysolutions/openfmb.docs/edit/develop/website/docs/hmi/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Migrate to OpenFMB v2.1",permalink:"/docs/adapter-config-tool/migration"},next:{title:"Docker Image",permalink:"/docs/hmi/docker"}},p={},s=[{value:"Overview",id:"overview",level:2}],m={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"OpenFMB HMI is a Human Machine Interface web-based application used to design single-line diagrams with control and monitor capabilities."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Diagram management"),": "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"create/update/delete diagrams"),(0,a.kt)("li",{parentName:"ul"},"export/import diagram"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Diagram designer"),":"),(0,a.kt)("p",{parentName:"li"},"  Design mode is used to design single-line diagrams. Electrical symbols are dragged and dropped into the design canvas. Symbols are then connected together to make a meaningful single- line diagrams representing an electrical distribution infrastructure. Symbols can then be mapped to specific OpenFMB data points for the real-time display of information from microgrids, substations, etc.   ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Run-time mode"),": "),(0,a.kt)("p",{parentName:"li"},"  Run-time mode is diagrams in action supervising data and/or controlling the underlined microgrid or substations. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"User management"),": "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"create/update/delete users")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"role assignment"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"viewer role: read-only")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"engineer role: viewer role + create diagram")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"admin role: engineer role + user management"))))))))}d.isMDXComponent=!0}}]);