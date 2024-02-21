"use strict";(self.webpackChunkopenfmb_docs=self.webpackChunkopenfmb_docs||[]).push([[4786],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),b=o,h=d["".concat(l,".").concat(b)]||d[b]||u[b]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},4066:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1,sidebar_label:"Introduction"},i="Adapter",s={unversionedId:"adapter/index",id:"adapter/index",title:"Adapter",description:"The Adapter is a portable application that can translate non-OpenFMB protocols into OpenFMB and bridge various OpenFMB transports such as NATS, MQTT, and DDS.",source:"@site/docs/adapter/index.md",sourceDirName:"adapter",slug:"/adapter/",permalink:"/docs/adapter/",draft:!1,editUrl:"https://github.com/openenergysolutions/openfmb.docs/edit/develop/website/docs/adapter/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"Reference Setup",permalink:"/docs/openfmb/reference"},next:{title:"What's New",permalink:"/docs/adapter/features"}},l={},p=[{value:"Protocol translator",id:"protocol-translator",level:2},{value:"Transport bridge",id:"transport-bridge",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"adapter"},"Adapter"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openenergysolutions/openfmb.adapters"},"Adapter")," is a portable application that can translate non-OpenFMB protocols into OpenFMB and bridge various OpenFMB transports such as NATS, MQTT, and DDS."),(0,o.kt)("br",null),"The following protocols are currently supported by the OpenFMB Adapter:",(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DNP3 master and outstation"),(0,o.kt)("li",{parentName:"ul"},"MODBUS master and outstation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("i",null,"OCPP 1.6*")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("i",null,"ICCP client and server (IEC60870-6)*")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("i",null,"IEC-61850 client and server, both GOOSE and MMS (IEC-61850)*")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("i",null,"OpenADR*")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("i",null,"SEP2.0 (IEEE 2030.5)*"))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"(*) Required licensing.  Please ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@openenergysolutionsinc.com?Subject=Adapter"},"contact us")," for more information.")),(0,o.kt)("p",null,"The sections below describe these two primary use cases."),(0,o.kt)("h2",{id:"protocol-translator"},"Protocol translator"),(0,o.kt)("p",null,"The Adapter can act as a protocol translator for equipment communicating with other protocols such as DNP3 (IEEE 1815-2012) and Modbus TCP. Several other protocols are supported by Open Energy Solutions, but they require a license as they use licensed protocol libraries. "),(0,o.kt)("p",null,"The mapping from the other protocols to OpenFMB is configured using a YAML model of a specific OpenFMB profile and protocol-specific metadata. The Adapter then communicates with the device using the other protocol to obtain the values. The Adapter fills in a Protobuf representation of the profile and publishes it to an internal bus to which other plugins may subscribe. When acting as a translator, a native plugin will then publish the profile to an OpenFMB transport such as NATS. "),(0,o.kt)("p",null,"The following example shows an Adapter used to connect equipment using legacy protocols to an OpenFMB NATS broker. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Adapter acting as a protocol translator",src:r(5743).Z,width:"795",height:"835"})),(0,o.kt)("h2",{id:"transport-bridge"},"Transport bridge"),(0,o.kt)("p",null,"The Adapter can also be used as a transport bridge between two OpenFMB networks. An Adapter can be placed on the edge between the two networks and subscribe to one network. The profiles can be filtered, and some or all of them can be republished onto the other network. "),(0,o.kt)("p",null,"When the Adapter is used as a transport bridge between networks, it is necessary to ensure that a bridged message is not returned to a previous network. For instance, bidirectional bridging of all OpenFMB Readings profiles between two networks would create an infinite loop. "),(0,o.kt)("p",null,"If all the control applications are in one network and all IEDs in another network, the event, reading, and status messages must be bridged to the network with the control applications, and the control messages must be bridged to the network with the IEDs. "),(0,o.kt)("p",null,"On the other hand, if all the control applications and all IEDs are on both networks for bridging, then messages would need to be filtered by device mRID to restrict flow to the proper direction. "),(0,o.kt)("p",null,"The example below shows an Adapter configured to bridge an OpenFMB MQTT broker to an OpenFMB DDS network. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Adapter acting as a communication bridge",src:r(8373).Z,width:"795",height:"835"})))}u.isMDXComponent=!0},8373:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/comm-bridge-91b915e23ce63fa8eae6b79cf148607f.svg"},5743:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/protocol-translator-9bd96e43bef4d1aed7df755009585f57.svg"}}]);