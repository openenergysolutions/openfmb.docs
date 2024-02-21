"use strict";(self.webpackChunkopenfmb_docs=self.webpackChunkopenfmb_docs||[]).push([[8882],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var A=n.createContext({}),m=function(e){var t=n.useContext(A),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(A.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,A=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=m(a),c=i,u=p["".concat(A,".").concat(c)]||p[c]||d[c]||l;return a?n.createElement(u,r(r({ref:t},s),{},{components:a})):n.createElement(u,r({ref:t},s))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=c;var o={};for(var A in t)hasOwnProperty.call(t,A)&&(o[A]=t[A]);o.originalType=e,o[p]="string"==typeof e?e:i,r[1]=o;for(var m=2;m<l;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5157:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>A,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),i=(a(7294),a(3905));const l={sidebar_position:5},r="Referenced Setup",o={unversionedId:"hmi/sld",id:"hmi/sld",title:"Referenced Setup",description:"A single-line diagram, also sometimes called one-line diagram, gives you an overview or part of an electrical power system.  In this section, you'll learn how to use OpenFMB HMI tool to build a single-line diagram that represents a very simple microgrid.",source:"@site/docs/hmi/sld.md",sourceDirName:"hmi",slug:"/hmi/sld",permalink:"/docs/hmi/sld",draft:!1,editUrl:"https://github.com/openenergysolutions/openfmb.docs/edit/develop/website/docs/hmi/sld.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Run the HMI",permalink:"/docs/hmi/run"},next:{title:"Introduction",permalink:"/docs/protobuf-exporter/"}},A={},m=[{value:"To Build the Diagram",id:"to-build-the-diagram",level:2},{value:"Run the Diagram",id:"run-the-diagram",level:2}],s={toc:m},p="wrapper";function d(e){let{components:t,...l}=e;return(0,i.kt)(p,(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"referenced-setup"},"Referenced Setup"),(0,i.kt)("p",null,"A single-line diagram, also sometimes called one-line diagram, gives you an overview or part of an electrical power system.  In this section, you'll learn how to use OpenFMB HMI tool to build a single-line diagram that represents a very simple microgrid.  "),(0,i.kt)("p",null,"In this section, you will be setting up the single-line diagram based on the ",(0,i.kt)("a",{parentName:"p",href:"../openfmb/reference"},"Referenced Setup"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(987).Z,width:"725",height:"387"})),(0,i.kt)("h2",{id:"to-build-the-diagram"},"To Build the Diagram"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"First, add the four pieces of equipment that we identified above.  On OpenFMB HMI side navigator menu, click on Settings, then click on Devices")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'For each piece of equipment, click on "ADD DEVICE" to bring up the add device dialog and enter the following information'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Building load (using Meter as measurement equipment)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: Meter"),(0,i.kt)("li",{parentName:"ul"},"Device Type: meter"),(0,i.kt)("li",{parentName:"ul"},"MRID: ",(0,i.kt)("inlineCode",{parentName:"li"},"0648ef71-cb63-4347-921a-9dbf178da687")))),(0,i.kt)("li",{parentName:"ul"},"Solar PV:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: Solar"),(0,i.kt)("li",{parentName:"ul"},"Device Type: solar"),(0,i.kt)("li",{parentName:"ul"},"MRID: ",(0,i.kt)("inlineCode",{parentName:"li"},"540b292a-e600-4ae4-b077-40b892ae6970"),"   "))),(0,i.kt)("li",{parentName:"ul"},"Battery energy storage:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: Battery"),(0,i.kt)("li",{parentName:"ul"},"Device Type: ess"),(0,i.kt)("li",{parentName:"ul"},"MRID: ",(0,i.kt)("inlineCode",{parentName:"li"},"836a8638-b448-4961-8258-47aa18e05f65")))),(0,i.kt)("li",{parentName:"ul"},"Switch at PCC:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: Switch"),(0,i.kt)("li",{parentName:"ul"},"Device Type: switch"),(0,i.kt)("li",{parentName:"ul"},"MRID: ",(0,i.kt)("inlineCode",{parentName:"li"},"e6768784-48ad-40e9-af2a-9676413d4d6a"))))),(0,i.kt)("p",{parentName:"li"},"The device list will look as follows:"),(0,i.kt)("p",{parentName:"li"}," ",(0,i.kt)("img",{src:a(6663).Z,width:"967",height:"451"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'On OpenFMB HMI home page, click on "Diagrams".')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click on "ADD DIAGRAM" and fill out diagram\'s name, description, and location.  ')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click "SAVE" to save,')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'In the Action column of the newly created diagram, click the "Design" icon to bring up design canvas for the diagram'),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(1015).Z,width:"1218",height:"762"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Drag and drop symbols (on left panel) onto the canvas.  We need:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"An Uncontrollable Load symbol (for build load) ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:a(4957).Z,width:"53",height:"72"})))),(0,i.kt)("li",{parentName:"ul"},"A Solar Panel symbol",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:a(2988).Z,width:"52",height:"64"})))),(0,i.kt)("li",{parentName:"ul"},"A Battery Energy Storage System (ESS) symbol",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:a(1519).Z,width:"40",height:"86"})))),(0,i.kt)("li",{parentName:"ul"},"A Breaker(or Switch) symbol",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:a(2854).Z,width:"50",height:"61"})))),(0,i.kt)("li",{parentName:"ul"},"A Feeder symbol to represent distribution grid (for completeness)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:a(3353).Z,width:"43",height:"62"})))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For identification purposes, assign each symbol on the canvas with its MRID."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Double-click")," the symbol to bring up ",(0,i.kt)("inlineCode",{parentName:"li"},"Symbol Property Dialog"),"."),(0,i.kt)("li",{parentName:"ul"},"On the dialog name drop down, select the appropriate device to assign to the symbol.  Note that the MRID is automatically populated according to the selection."),(0,i.kt)("li",{parentName:"ul"},"On label text box, enter label text to be displayed on the diagram (optional).")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(6383).Z,width:"651",height:"550"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'To connect the symbols, select the "Connect" menu on the top panel.  For each symbol you want to connect:'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"hover your mouse over the symbol connection port (the connection port is highlighted in green when hovered over) "),(0,i.kt)("li",{parentName:"ul"},"click and drag to the other symbol connection port")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(7514).Z,width:"622",height:"402"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"At this point, you have a basic single-line diagram that represents the microgrid.  To make it useful, you need measurement displays to monitor readings and/or status from the equipment.  You need to add three ",(0,i.kt)("inlineCode",{parentName:"p"},"measurement boxes")," to the canvas: one for each building load, solar, and battery. "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Drag ",(0,i.kt)("inlineCode",{parentName:"li"},"measurement box")," to canvas."),(0,i.kt)("li",{parentName:"ul"},"Select name."),(0,i.kt)("li",{parentName:"ul"},"Enter label text."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For the three measurement boxes, tell the system what data item to display on the box, or in this tool's terminology,",(0,i.kt)("inlineCode",{parentName:"p"},"Data Connection"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Double-click")," on the measurement box to bring up ",(0,i.kt)("inlineCode",{parentName:"li"},"Symbol Property Dialog")),(0,i.kt)("li",{parentName:"ul"},'Click on "Data Connection" to go to "Data Connection" screen'),(0,i.kt)("li",{parentName:"ul"},"For data connection and mapping, the screen has two main panels:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The left panel features a list of items to be displayed on measurement box"),(0,i.kt)("li",{parentName:"ul"},"On the right panel, navigate through OpenFMB modules, profiles, and select data items to add to the left panel.",(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("img",{src:a(1120).Z,width:"1120",height:"613"})))),(0,i.kt)("li",{parentName:"ul"},"For the building load, monitor the total power consumption (Total kW):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"On right panel, select ",(0,i.kt)("inlineCode",{parentName:"li"},"loadmodule")," module, the select ",(0,i.kt)("inlineCode",{parentName:"li"},"LoadReadingProfile"),"."),(0,i.kt)("li",{parentName:"ul"},"Filter or navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"readingMMXU.W.net.cVal.mag")," and click ",(0,i.kt)("inlineCode",{parentName:"li"},"+")," button to add to left panel.\n",(0,i.kt)("img",{src:a(7612).Z,width:"1120",height:"587"})))),(0,i.kt)("li",{parentName:"ul"},"For the solar, monitor the total power production (Total kW):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"On right panel, select ",(0,i.kt)("inlineCode",{parentName:"li"},"solarmodule")," module, the select ",(0,i.kt)("inlineCode",{parentName:"li"},"SolarReadingProfile"),"."),(0,i.kt)("li",{parentName:"ul"},"Filter or navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"readingMMXU.W.net.cVal.mag")," and click ",(0,i.kt)("inlineCode",{parentName:"li"},"+")," button to add to left panel."))),(0,i.kt)("li",{parentName:"ul"},"For the battery, monitor the current State of Charge (SOC %):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"On right panel, select ",(0,i.kt)("inlineCode",{parentName:"li"},"essmodule")," module, the select ",(0,i.kt)("inlineCode",{parentName:"li"},"ESSStatusProfile"),"."),(0,i.kt)("li",{parentName:"ul"},"Filter or navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"essStatus.essStatusZBAT.Soc.mag")," and click ",(0,i.kt)("inlineCode",{parentName:"li"},"+")," button to add to left panel.\n",(0,i.kt)("img",{src:a(409).Z,width:"628",height:"537"}),"           "))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You now have the measurement boxes for monitoring reading and status. Next, add a ",(0,i.kt)("inlineCode",{parentName:"p"},"Data Connection")," on the Switch (PCC) so that it shows correct position (Open/Close) and allows trip/close operations"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Double-click")," on the switch/breaker symbol to bring up ",(0,i.kt)("inlineCode",{parentName:"li"},"Symbol Property Dialog")),(0,i.kt)("li",{parentName:"ul"},'Click on "Data Connection" to go to "Data Connection" screen'),(0,i.kt)("li",{parentName:"ul"},"To map the switch position:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Event, Reading, or Status")," tab on the left panel"),(0,i.kt)("li",{parentName:"ul"},"On right panel, select ",(0,i.kt)("inlineCode",{parentName:"li"},"switchmodule"),", and then select ",(0,i.kt)("inlineCode",{parentName:"li"},"SwitchStatusProfile")),(0,i.kt)("li",{parentName:"ul"},"Filter or navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"switchStatus.statusAndEventXCBR.Pos.phs3.stVal")," and click ",(0,i.kt)("inlineCode",{parentName:"li"},"+")," button to add to the left panel"))),(0,i.kt)("li",{parentName:"ul"},"To map the switch control for trip/close operations:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Control")," tab on left panel"),(0,i.kt)("li",{parentName:"ul"},"On right panel, select ",(0,i.kt)("inlineCode",{parentName:"li"},"switchmodule")," module, and then select ",(0,i.kt)("inlineCode",{parentName:"li"},"SwitchDiscreteControlProfile")),(0,i.kt)("li",{parentName:"ul"},"Filter or navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"switchDisc...eControlXCBR.discreteControlXCBR.Pos.phs3.ctlVal")," and click ",(0,i.kt)("inlineCode",{parentName:"li"},"+")," button to add to the left panel")))))),(0,i.kt)("h2",{id:"run-the-diagram"},"Run the Diagram"),(0,i.kt)("p",null,"Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"RUN")," button on the top right corner to put the diagram in run mode."))}d.isMDXComponent=!0},6383:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/assign-mrid-9e58d220771b623738f94a690917485a.png"},2854:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA9CAIAAABgC60zAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5QQaFhIKwPN3pQAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAACHklEQVRoge3ZQWjTUBzH8V/s2l1kstZuQy+TurkULB2G0oHs4mFRxDEmPXiwCBXUg5iTY5KLBNnmRWWsogVRtIdBDxWdnagoKIxS2NhhldbW6kHBjd2XCt3hIUgXNH9kXYX/9/ZeIO/DS0IgkfqODKH52rXTAOualNVSN36Rur8jjuOj538f1rMAFEqVWq3WKA8kSer1dddNWrAAXLl6Y9s5v7o9dW3rZJPeW8yixCxKzKLELErMosQsSsyixCxKzKLELErMosQsSsyixCxKzKLELErMomT97fTW5HiDHXVZsLZ+9218Ev9cIcQsSsyi9N+yDF3L5zL5XObZ7D07Z7x84Wzq8fS2swCk0vOyoq6urRu69o/r2cz65WNZW9vuxeWVBzMT4VDw2/cfDoejs8NTrf5MPJztD/jDoSCAhezS4vIKAEPXTp049qn8RT7kA1Aqf3355n0sGjGr1esT00/nXv95LVu7NTo8lM9l/H0HO7weAKn0fPr5K3f7HgBOZ0t/wP/uQ3YhuwTAu9cNoMfXHTwsBwZOupxOcYauLm9vz4FiqaIMjvzVZJclLmI8kRQUUbFUkRVVVtRzl8ZOD6sA4onkhmmKQwAMXdswzXgiKSuqMjhSKH62sxaBJXYrFo18LJTFzJ27j1pdLvEoGLq2urYeDgUvxs543O3793UCMG7OHB1QJEmKRSP5XObt3BMxbzN+VVNiFqUmZW0ChLyVxmMPDMcAAAAASUVORK5CYII="},1120:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data-connect1-785ae356b594bc2fa7bb84cf96c59b96.png"},7612:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data-connect2-736e5e1d9beafed946698849d5c334c6.png"},1015:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/design-mode-ad653ee108e0d7c16ad46307049b10cc.png"},6663:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/devices-7b4a50d0909ae7c8ccf35060254c8554.png"},7514:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/diagram1-1197d85693114e44bc4095b303cb582c.png"},409:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/diagram2-ce6ca95252c56e365e94a41263949f1e.png"},1519:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},3353:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAA+CAIAAAA9JHW/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5QQaFhI5fyMWswAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAAC0UlEQVRYhe2XYUgTYRjHHyvbbpeJommaOG3TbU4btcS+RBChiCYhjEChJCmi+iChBeGUrDETIhgssMIMCpJMrJBlRM1MlrtstfQy2wIrdZpL5+YmpvapMSLfu13SCt7/x3v/9/x+dxzvy4VJtuVCSLMqtPj/36BUVViqKgylwYoEG2ADbIANsAE2wAbYABtgA2yADbDB8glD/L1fqKvMlKX9IcA68L6qugFRWINYa73XmSEReX1znPEEwb/b3onuoN4BAGTJ09VVR0mS5ICf9frq6vUWK42urY5JECGWHeOTFuu77VvlAgERFN75bVqt0fXTQ4xNBgMAmHROUX1vt2RKItdHsMSPjI7XaHQ2+zCbMrMBALhm3CazJUMqjomOYizbPn6q1eg+jzjY4NkaAMCs1/esh0oTC+PjYhG1gcEPtRrdV+cUS3wQBgAwP//9SZcpNSUpKTH+t4W+1/3q8zqPx8seH5wBACwtgbHbnLBxQ0rypl+Wel68qtHoFhYWgsIHbeCHRUVFpm0W+q88Npq0FxuDncPdAAB6X77h83kyiQgAOjqNl/TN3PCA3hPRuXbjjtc3RxLEleYWzkOAcU/8Cwn92YgNsME/brA3fzfV1UZTBpoyNOm1jIOa9Npz1RUcDFA70uCQveTQSQ5DV8wgME16bU62AgBMvZYvo47iolwAsNmHG6/fVp8+TgoIAGhtfxhYA4CcbIXNPlygOoyYvOy5kC5OLS7KrThWdqRsvzA5US5LX0cKACA8PDwxIS4iggQAHm9tbEz02NjEnqKDSoWcT/BEqUJ/bXFxseu5ufzEGfSzob7EwSG7VJmXtaOg7f4jt9tzSt0gVebtyi+ZmnZdvnpLqsxT7txH9Vm9Pp//lsCay+VGs5kN/DGZLRYrXX+2kqYMD1oajd295QdUNGV42nFzxu2RScQ0ZcjJVkxMOANrbCYDPpmwATb4mR+Off7tS0/OHAAAAABJRU5ErkJggg=="},987:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/microgrid-fd19899ed9fbe9f3358d9cc60ace9d5f.png"},2988:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},4957:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);