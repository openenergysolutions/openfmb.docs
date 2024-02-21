"use strict";(self.webpackChunkopenfmb_docs=self.webpackChunkopenfmb_docs||[]).push([[8662],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),f=a,g=c["".concat(p,".").concat(f)]||c[f]||m[f]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:6},o="Terminology and Definitions",l={unversionedId:"adapter-config-tool/defs",id:"adapter-config-tool/defs",title:"Terminology and Definitions",description:"| Term                                     | Description                                              |",source:"@site/docs/adapter-config-tool/defs.md",sourceDirName:"adapter-config-tool",slug:"/adapter-config-tool/defs",permalink:"/docs/adapter-config-tool/defs",draft:!1,editUrl:"https://github.com/openenergysolutions/openfmb.docs/edit/develop/website/docs/adapter-config-tool/defs.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/adapter-config-tool/quick-guide"},next:{title:"Referenced Setup",permalink:"/docs/adapter-config-tool/reference"}},p={},d=[],s={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"terminology-and-definitions"},"Terminology and Definitions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Term")),(0,a.kt)("th",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Adapter Configuration file"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Main Adapter configuration YAML file")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Template file"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Profile mapping files for specific device speaking a specific legacy protocol. A session file can also be used as template file.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"command-id"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Name associated with a command in OpenFMB control profile. For example, a command-id for a trip  command can be \u201cmy-trip-command.\u201d With  the command-order settings, command-id can be used to set priority of which command should execute first")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"command-order"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Order of  commands by operation id. First == highest priority, last == lower priority")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Poll Policy"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Applicable  for ",(0,a.kt)("strong",{parentName:"td"},"DNP3 master only.")," Poll policy defines how the DNP3 master will poll an  outstation device. Event, reading, and  status profiles required reference to \u201cpoll-name\u201d that defined in poll policy  settings")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Heartbeat"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Applicable  for ",(0,a.kt)("strong",{parentName:"td"},"MODBUS master only"),".   Currently, heartbeat is configured to read a holding register, flip  the masked bit, and write it back")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DNP3 Specific Settings:  source-type"),(0,a.kt)("td",{parentName:"tr",align:"left"},"none,  binary,  analog,  counter     when a field  type (enum-field-type, bool-field-type, etc) is specified as ",(0,a.kt)("inlineCode",{parentName:"td"},"mapped"),", but when source-type is specified as ",(0,a.kt)("inlineCode",{parentName:"td"},"none"),", the whole field type settings will be  ignored.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DNP3 Specific Settings:  Group and variation"),(0,a.kt)("td",{parentName:"tr",align:"left"},"g12v1 = group  12 variation 1;  g41v1 = group  41 variation 1;  g41v2 = group  41 variation 2;  g41v3 = group  41 variation 3;  g41v4 = group  41 variation 4;")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DNP3 Specific Settings:  CROB operation type"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NUL,  LATCH_OFF,  LATCH_ON,  PULSE_OFF,  PULSE_ON")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DNP3 Specific Settings:  Trip Close Code"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NUL,  TRIP,  CLOSE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MODBUS Specific Settings:  source-type"),(0,a.kt)("td",{parentName:"tr",align:"left"},"none,  coil,  discrete_input,  input_register,  holding_register     when a field  type (enum-field-type, bool-field-type, etc) is specified as ",(0,a.kt)("inlineCode",{parentName:"td"},"mapped"),", but when source-type is specified as ",(0,a.kt)("inlineCode",{parentName:"td"},"none"),", the whole field type settings will be  ignored.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MODBUS Specific Settings:  mask"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Data type of  a mask is now ",(0,a.kt)("strong",{parentName:"td"},"INTEGER.")," In a previous version, mask was HEX string.")))))}m.isMDXComponent=!0}}]);