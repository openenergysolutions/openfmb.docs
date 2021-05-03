(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=o,m=b["".concat(a,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},200:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/demo_console_running-702da51b5e3c37ba68277e5c5b5d0fb5.png"},201:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/demo_hmi_initial-c543e96d2849ca2c9b9de1c8fad848b3.png"},202:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/demo_hmi_diagrams-df2f585a6601640a80e2522a6b961686.png"},203:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/demo_hmi_microgrid-5f8661403faedc3696f986bec52c1529.png"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n(3),r=n(8),i=(n(0),n(133)),a={sidebar_position:2},c={unversionedId:"openfmb/reference",id:"openfmb/reference",isDocsHomePage:!1,title:"Reference Setup",description:"In this reference setup you will see how to use OpenFMB with open source software",source:"@site/docs/openfmb/reference.md",sourceDirName:"openfmb",slug:"/openfmb/reference",permalink:"/openfmb.docs/docs/openfmb/reference",editUrl:"https://github.com/openenergysolutions/openfmb.docs/edit/develop/website/docs/openfmb/reference.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"OpenFMB",permalink:"/openfmb.docs/docs/openfmb/intro"},next:{title:"Introduction",permalink:"/openfmb.docs/docs/adapter/index"}},s=[{value:"Installing Docker Compose",id:"installing-docker-compose",children:[]},{value:"Get The Demo Configuration",id:"get-the-demo-configuration",children:[]},{value:"Running the Demo",id:"running-the-demo",children:[]},{value:"Browse to the HMI",id:"browse-to-the-hmi",children:[]},{value:"Whats Happening in the Background",id:"whats-happening-in-the-background",children:[]}],p={toc:s};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this reference setup you will see how to use OpenFMB with open source software\nfrom ",Object(i.b)("a",{parentName:"p",href:"https://openenergysolutionsinc.com"},"Open Energy Solutions Inc"),"."),Object(i.b)("p",null,"The reference setup uses Docker and Docker Compose to run several\npre-built docker images containing open source software developed by Open Energy\nSolutions and others."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"A ",Object(i.b)("a",{parentName:"li",href:"https://nats.io"},"nats")," message broker"),Object(i.b)("li",{parentName:"ol"},"A ",Object(i.b)("a",{parentName:"li",href:"https://github.com/openenergysolutions/openfmb.adapters"},"openfmb.adapter")," replaying pre-recorded data"),Object(i.b)("li",{parentName:"ol"},"A ",Object(i.b)("a",{parentName:"li",href:"https://github.com/openenergysolutions/openfmb.hmi"},"openfmb.hmi")," HMI for visualizing and displaying the data coming from the adapter over NATS.")),Object(i.b)("h2",{id:"installing-docker-compose"},"Installing Docker Compose"),Object(i.b)("p",null,"In order to run the demonstration you will need Docker and Docker Compose"),Object(i.b)("p",null,"Installing Docker Compose can be done by following the instructions at"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Install Docker Compose")),Object(i.b)("h2",{id:"get-the-demo-configuration"},"Get The Demo Configuration"),Object(i.b)("p",null,"Next an archive of the demonstration setup can be obtained "),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/openenergysolutions/openfmb.demo/archive/refs/heads/develop.zip"},"Download Archive")),Object(i.b)("h2",{id:"running-the-demo"},"Running the Demo"),Object(i.b)("p",null,"Once you have the demo zip file, unzip it in a place of your choosing."),Object(i.b)("p",null,"In Linux or Mac open a terminal. On windows open the command line. cd into the unzipped demo directory and simply run"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"docker-compose up")),Object(i.b)("p",null,"At this point the demo setup should be running."),Object(i.b)("h2",{id:"browse-to-the-hmi"},"Browse to the HMI"),Object(i.b)("p",null,"At this point, with the demo running in a console much like the screenshot below\nshows"),Object(i.b)("p",null,Object(i.b)("img",{src:n(200).default})),Object(i.b)("p",null,"You should be able to browse to"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"http://0.0.0.0:32771"},"http://0.0.0.0:32771")),Object(i.b)("p",null,"And see the HMI. What it should look like is shown here"),Object(i.b)("p",null,Object(i.b)("img",{src:n(201).default})),Object(i.b)("p",null,"You should be able to browse to diagrams which will list the microgrid diagrams"),Object(i.b)("p",null,Object(i.b)("img",{src:n(202).default})),Object(i.b)("p",null,"And finally view the microgrid diagram"),Object(i.b)("p",null,Object(i.b)("img",{src:n(203).default})),Object(i.b)("h2",{id:"whats-happening-in-the-background"},"Whats Happening in the Background"),Object(i.b)("p",null,"Now that we can see the microgrid values will be updating. Whats really going on\nhere?"),Object(i.b)("p",null,"The replay_1 log messages in the console are coming from th ",Object(i.b)("a",{parentName:"p",href:"https://github.com/openenergysolutions/openfmb.adapters"},"openfmb.adapter")," as\nit starts its configured to connect to ",Object(i.b)("a",{parentName:"p",href:"https://nats.io"},"nats")," for\npublish/subscribe of openfmb messages encoded as ",Object(i.b)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/"},"protocol buffers")))}l.isMDXComponent=!0}}]);