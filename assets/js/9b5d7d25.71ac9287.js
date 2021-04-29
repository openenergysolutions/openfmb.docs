(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(132)),i={sidebar_position:1},s={unversionedId:"adapter/index",id:"adapter/index",isDocsHomePage:!1,title:"Introduction",description:"The OpenFMB Adapter is a portable C++ application which can both translate",source:"@site/docs/adapter/index.md",sourceDirName:"adapter",slug:"/adapter/index",permalink:"/openfmb.docs/docs/adapter/index",editUrl:"https://github.com/openenergysolutions/openfmb.docs/edit/develop/website/docs/adapter/index.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Referenced Setup",permalink:"/openfmb.docs/docs/openfmb/reference"},next:{title:"Protos",permalink:"/openfmb.docs/docs/adapter/protos"}},c=[{value:"Protocol translator",id:"protocol-translator",children:[]},{value:"Transport bridge",id:"transport-bridge",children:[]}],p={toc:c};function l(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The OpenFMB Adapter is a portable C++ application which can both translate\nnon-OpenFMB protocols into OpenFMB, and bridge various OpenFMB transports such\nas NATS, MQTT, and DDS. The sections below describe these two primary use cases."),Object(a.b)("h2",{id:"protocol-translator"},"Protocol translator"),Object(a.b)("p",null,"The adapter can act as a protocol translator for equipment communicating with\nother, protocols such as DNP3 (IEEE 1815-2012), and Modbus TCP. Several\nother protocols are supported by Open Energy Solutions but require a license as\nthey use licensed protocol libraries."),Object(a.b)("p",null,"The mapping from the other protocol to OpenFMB is configured using a YAML model\nof a specific OpenFMB profile, and protocol specific metadata. The adapter then\ncommunicates with the device using the other protocol to obtain the values. It\nfills in a protobuf representation of the profile and publishes it to an\ninternal bus to which other plugins may subscribe. When acting as a translator,\na native plugin will then publish the profile to an OpenFMB transport such as\nNATS."),Object(a.b)("p",null,"The following example shows an adapter used to connect equipments using legacy\nprotocols to an OpenFMB NATS broker."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Adapter acting as a protocol translator",src:n(150).default})),Object(a.b)("h2",{id:"transport-bridge"},"Transport bridge"),Object(a.b)("p",null,"The adapter can also be used as a transport bridge between two OpenFMB networks.\nAn adapter can be placed on the edge between the two networks and subscribe to\none network. The profiles can be filtered, and some or all of them can be\nrepublished onto the other network."),Object(a.b)("p",null,"When the adapter is used as a transport bridge between networks, it is necessary\nto ensure that a bridged message is not returned to a previous network. For\ninstance, bidirectional bridging of all OpenFMB Readings profiles between two\nnetworks would create an infinite loop."),Object(a.b)("p",null,"If all the control applications were in one network and all IEDs in another\nnetwork the event, reading, and status messages would need to be bridged to the\nnetwork with the control applications and the control messages would need to be\nbridged to the network with the IEDs."),Object(a.b)("p",null,"On the other hand, if all the control applications and all IEDs are on both\nnetworks for bridging messages would also need to be filtered by device mRID to\nrestrict flow to the proper direction."),Object(a.b)("p",null,"The example below shows an adapter configured to bridge an OpenFMB MQTT broker to\nan OpenFMB DDS network."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Adapter acting as a communication bridge",src:n(219).default})))}l.isMDXComponent=!0},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,f=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return n?o.a.createElement(f,s(s({ref:t},p),{},{components:n})):o.a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},150:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/protocol-translator-9bd96e43bef4d1aed7df755009585f57.svg"},219:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/comm-bridge-91b915e23ce63fa8eae6b79cf148607f.svg"}}]);