(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{131:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),u=o,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||a;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},197:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/demo_console_running-702da51b5e3c37ba68277e5c5b5d0fb5.png"},198:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/demo_hmi_initial-c543e96d2849ca2c9b9de1c8fad848b3.png"},199:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/demo_hmi_diagrams-df2f585a6601640a80e2522a6b961686.png"},200:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/demo_hmi_microgrid-5f8661403faedc3696f986bec52c1529.png"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n(3),r=n(8),a=(n(0),n(131)),i={sidebar_position:2},c={unversionedId:"openfmb/reference",id:"openfmb/reference",isDocsHomePage:!1,title:"Reference Setup",description:"In this reference setup you will see how to use OpenFMB with open-source software from Open Energy Solutions Inc.",source:"@site/docs/openfmb/reference.md",sourceDirName:"openfmb",slug:"/openfmb/reference",permalink:"/openfmb.docs/docs/openfmb/reference",editUrl:"https://github.com/openenergysolutions/openfmb.docs/edit/develop/website/docs/openfmb/reference.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"OpenFMB",permalink:"/openfmb.docs/docs/openfmb/intro"},next:{title:"Adapter",permalink:"/openfmb.docs/docs/adapter/index"}},s=[{value:"Install Docker Compose",id:"install-docker-compose",children:[]},{value:"Get The Demo Configuration",id:"get-the-demo-configuration",children:[]},{value:"Runthe Demo",id:"runthe-demo",children:[]},{value:"Browse to the HMI",id:"browse-to-the-hmi",children:[]},{value:"What&#39;s Happening in the Background",id:"whats-happening-in-the-background",children:[]},{value:"Where to Go From Here",id:"where-to-go-from-here",children:[]}],p={toc:s};function l(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this reference setup you will see how to use OpenFMB with open-source software from ",Object(a.b)("a",{parentName:"p",href:"https://openenergysolutionsinc.com"},"Open Energy Solutions Inc"),"."),Object(a.b)("p",null,"The reference setup uses Docker and Docker Compose to run several pre-built Docker images containing open-source software developed by Open Energy Solutions and others. "),Object(a.b)("p",null,"The three docker images that are run in the reference setup are: "),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"A ",Object(a.b)("a",{parentName:"li",href:"https://nats.io"},"NATS")," server"),Object(a.b)("li",{parentName:"ol"},"An ",Object(a.b)("a",{parentName:"li",href:"https://github.com/openenergysolutions/openfmb.adapters"},"Adapter")," replaying pre-recorded data"),Object(a.b)("li",{parentName:"ol"},"An ",Object(a.b)("a",{parentName:"li",href:"https://github.com/openenergysolutions/openfmb.hmi"},"HMI")," for visualizing and displaying the data coming from the Adapter over NATS.")),Object(a.b)("h2",{id:"install-docker-compose"},"Install Docker Compose"),Object(a.b)("p",null,"In order to run the demonstration, you will need to ",Object(a.b)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"install Docker and Docker Compose"),". "),Object(a.b)("h2",{id:"get-the-demo-configuration"},"Get The Demo Configuration"),Object(a.b)("p",null,"Next, ",Object(a.b)("a",{parentName:"p",href:"https://github.com/openenergysolutions/openfmb.demo/archive/refs/heads/develop.zip"},"download an archive")," of the demonstration setup."),Object(a.b)("h2",{id:"runthe-demo"},"Runthe Demo"),Object(a.b)("p",null,"Unzip the demo zip file in a place of your choosing. "),Object(a.b)("p",null,"On Linux or Mac, open a terminal. On Windows, open a cmd.exe or PowerShell terminal. Next, change directory (cd) to the unzipped demo directory and run the following command: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")),Object(a.b)("p",null,"At this point terminal should look similar to the following: "),Object(a.b)("p",null,Object(a.b)("img",{src:n(197).default})),Object(a.b)("h2",{id:"browse-to-the-hmi"},"Browse to the HMI"),Object(a.b)("p",null,"The HMI is accessible locally while Docker Compose is running. "),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"http://localhost:32771"},"http://localhost:32771")," "),Object(a.b)("p",null,"Log in with the username 'admin' and the password 'hm1admin'. "),Object(a.b)("p",null,"The first screen should look similar to the following: "),Object(a.b)("p",null,Object(a.b)("img",{src:n(198).default})),Object(a.b)("p",null,"Browsing first to Diagrams."),Object(a.b)("p",null,Object(a.b)("img",{src:n(199).default})),Object(a.b)("p",null,"Then to the microgrid diagram."),Object(a.b)("p",null,Object(a.b)("img",{src:n(200).default})),Object(a.b)("p",null,"The information on the screen should update in real time. "),Object(a.b)("h2",{id:"whats-happening-in-the-background"},"What's Happening in the Background"),Object(a.b)("p",null,"The values updating in the HMI come from the Adapter publishing pre-recorded OpenFMB messages encoded as ",Object(a.b)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/"},"protocol buffers")," with ",Object(a.b)("a",{parentName:"p",href:"https://nats.io"},"NATS")," acting as a message broker."),Object(a.b)("p",null,"You should see replay_1 log messages in the console. Those are coming from the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/openenergysolutions/openfmb.adapters"},"Adapter"),"."),Object(a.b)("h2",{id:"where-to-go-from-here"},"Where to Go From Here"),Object(a.b)("p",null,"The ",Object(a.b)("a",{parentName:"p",href:"https://github.com/openenergysolutions/openfmb.adapters"},"Adapter")," is capable of much more than replaying data. It\u2019s capable of mapping simulated and real devices that provide commonly used power grid protocols such as DNP3 and Modbus. "),Object(a.b)("p",null,"The Adapter can also record all messages to a ",Object(a.b)("a",{parentName:"p",href:"https://postgresql.org"},"PostgreSQL"),"-powered\n",Object(a.b)("a",{parentName:"p",href:"https://timescaledb.com"},"TimescaleDB"),",allowing for offline data analysis, dashboards powered by ",Object(a.b)("a",{parentName:"p",href:"https://grafana.com"},"Grafana")," or other such visualization tools."),Object(a.b)("p",null,"Lastly, the Adapter is the basis for a broader set of software Open Energy Solutions Inc. is developing to enable distributed intelligence for the power grid. "),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"If you would like to learn more or discuss how we can help, please ",Object(a.b)("a",{parentName:"p",href:"mailto:support@openenergysolutionsinc.com?subject=Adapter"},"contact us")))))}l.isMDXComponent=!0}}]);