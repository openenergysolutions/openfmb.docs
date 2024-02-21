"use strict";(self.webpackChunkopenfmb_docs=self.webpackChunkopenfmb_docs||[]).push([[7191],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=d(t),c=l,g=s["".concat(p,".").concat(c)]||s[c]||u[c]||o;return t?a.createElement(g,r(r({ref:n},m),{},{components:t})):a.createElement(g,r({ref:n},m))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[s]="string"==typeof e?e:l,r[1]=i;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2803:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=t(7462),l=(t(7294),t(3905));const o={},r="DNP3 Master",i={unversionedId:"adapter/protocol-plugins/dnp3/master",id:"adapter/protocol-plugins/dnp3/master",title:"DNP3 Master",description:"The dnp3-master plugin acquires measurement data and sends controls to DNP3",source:"@site/docs/adapter/protocol-plugins/dnp3/master.md",sourceDirName:"adapter/protocol-plugins/dnp3",slug:"/adapter/protocol-plugins/dnp3/master",permalink:"/docs/adapter/protocol-plugins/dnp3/master",draft:!1,editUrl:"https://github.com/openenergysolutions/openfmb.docs/edit/develop/website/docs/adapter/protocol-plugins/dnp3/master.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Modbus Server",permalink:"/docs/adapter/protocol-plugins/modbus/server"},next:{title:"DNP3 Outstation",permalink:"/docs/adapter/protocol-plugins/dnp3/outstation"}},p={},d=[{value:"General Configuration",id:"general-configuration",level:2},{value:"Poll configuration",id:"poll-configuration",level:2},{value:"Non-control Profiles",id:"non-control-profiles",level:2},{value:"Boolean",id:"boolean",level:3},{value:"Int32 and Int64",id:"int32-and-int64",level:3},{value:"Float",id:"float",level:3},{value:"Enum",id:"enum",level:3},{value:"Control Profiles",id:"control-profiles",level:2},{value:"Boolean",id:"boolean-1",level:3},{value:"Int32, Int64, and Float",id:"int32-int64-and-float",level:3},{value:"Enum",id:"enum-1",level:3},{value:"Schedule Parameters",id:"schedule-parameters",level:3}],m={toc:d},s="wrapper";function u(e){let{components:n,...t}=e;return(0,l.kt)(s,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"dnp3-master"},"DNP3 Master"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"dnp3-master")," plugin acquires measurement data and sends controls to DNP3\noutstations. It maps DNP3 measurement values (binary, analog, etc) to OpenFMB\nnon-control profiles and sends DNP3 commands (e.g. binary/analog output) in\nresponse to OpenFMB control profiles."),(0,l.kt)("h2",{id:"general-configuration"},"General Configuration"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name"),": name used in the logs to identify the communication session."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"channel"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"adapter"),": network adapter to use to establish a TCP connection (typically 0.0.0.0)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"outstation-ip"),": IP address of the outstation. Can also be a domain name."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"port"),": TCP port on which the outstation is listening."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"protocol"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"master-address"),": DNP3 link-layer address of the master (the adapter)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"outstation-address"),": DNP3 link-layer address of the outstation (remote device)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"unsol-class-1"),": Enable Class 1 unsolicited responses."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"unsol-class-2"),": Enable Class 2 unsolicited responses."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"unsol-class-3"),": Enable Class 3 unsolicited responses.")))),(0,l.kt)("h2",{id:"poll-configuration"},"Poll configuration"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"polls")," parameter contains a list of polls to be executed by the Adapter.\nEach poll has a name that might be referenced in the non-control profile\nmappings. This is particularly useful for event profiles, where you want to\npublish an event profile only when events are received, not on every message."),(0,l.kt)("p",null,"There are two types of polls. ",(0,l.kt)("inlineCode",{parentName:"p"},"integrity")," is a Class 1230, meaning it gets the\nsequence of events (and empties the event buffers) and all the\nstatic (current) values. This should be used for status and reading profiles.\nAn ",(0,l.kt)("inlineCode",{parentName:"p"},"event")," poll only asks for the sequence of events assigned to a specific\nclass. It should be used for event profiles. In the configuration,\nit is possible to specify which classes to ask for."),(0,l.kt)("p",null,"The interval specifies the delay between two polls."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="integrity"',tab:'"integrity"'},"- name: integrity_poll\n  type: integrity\n  interval-ms: 5000\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="event"',tab:'"event"'},"- name: event_poll\n  type: event\n  interval-ms: 5000\n  class1: true\n  class2: true\n  class3: false\n")),(0,l.kt)("h2",{id:"non-control-profiles"},"Non-control Profiles"),(0,l.kt)("p",null,"Non-control profiles (reading, status, etc) are mapped from DNP3 measurement points."),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"poll-name")," parameter is required and must point to a valid poll defined in\n",(0,l.kt)("a",{parentName:"p",href:"#polls-configuration"},"Polls Configuration"),". An OpenFMB profile\nis generated on every non-empty response of the poll."),(0,l.kt)("h3",{id:"boolean"},"Boolean"),(0,l.kt)("p",null,"DNP3 binary inputs can be mapped directly to an OpenFMB Boolean value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"bool-field-type: mapped\nsource-type: binary  # {none, binary}\nindex: 10\n")),(0,l.kt)("h3",{id:"int32-and-int64"},"Int32 and Int64"),(0,l.kt)("p",null,"DNP3 analog inputs and counters can be mapped to an OpenFMB ",(0,l.kt)("inlineCode",{parentName:"p"},"int32")," or an\nOpenFMB ",(0,l.kt)("inlineCode",{parentName:"p"},"int64"),". A scaling can be applied to the value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="analog"',tab:'"analog"'},"int32-field-type: mapped\nsource-type: analog  # {none, analog, counter}\nindex: 10\nscale: 1000\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="counter"',tab:'"counter"'},"int32-field-type: mapped\nsource-type: counter  # {none, analog, counter}\nindex: 10\nscale: 1000\n")),(0,l.kt)("h3",{id:"float"},"Float"),(0,l.kt)("p",null,"DNP3 analog inputs can be mapped to an OpenFMB ",(0,l.kt)("inlineCode",{parentName:"p"},"float")," value. A scaling can be applied to\nthe value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"float-field-type: mapped\nsource-type: analog  # {none, analog}\nindex: 10\nscale: 1000\n")),(0,l.kt)("h3",{id:"enum"},"Enum"),(0,l.kt)("p",null,"OpenFMB enumerations can be mapped from DNP3 binary, analog, and counter source points."),(0,l.kt)("p",null,"Binary inputs have an enumeration value specified for 'true' and 'false'. Analog and counter\nmappings allow for a free form mapping. If no association is found in the mapping list,\nthe field is simply not set."),(0,l.kt)("p",null,"Since analog inputs might be reported as a floating point value, an epsilon of 0.001 is used for comparison. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="binary"',tab:'"binary"'},"enum-field-type: mapped\nsource-type: binary  # {none, binary, analog, counter}\nindex: 10\nwhen-true: DynamicTestKind_none\nwhen-false: DynamicTestKind_testing\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="analog"',tab:'"analog"'},"enum-field-type: mapped\nsource-type: analog  # {none, binary, analog, counter}\nindex: 10\nmapping:\n  - value: 4\n    name: DynamicTestKind_none\n  - value: 24\n    name: DynamicTestKind_testing\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="counter"',tab:'"counter"'},"enum-field-type: mapped\nsource-type: counter  # {none, binary, analog, counter}\nindex: 10\nmapping:\n  - value: 4\n    name: DynamicTestKind_none\n  - value: 24\n    name: DynamicTestKind_testing\n")),(0,l.kt)("h2",{id:"control-profiles"},"Control Profiles"),(0,l.kt)("p",null,"OpenFMB control profiles are translated to DNP3 binary and analog output\ncommands. All commands are executed with a Direct Operate function code\n(",(0,l.kt)("inlineCode",{parentName:"p"},"0x05"),")."),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"command-order")," list is used to priortize every command referenced in the detailed\nmappings. The first element in the list has the highest priority, and will be\nsent first to the outstation."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"tolerance-ms")," parameter is used to specify the tolerance for schedule\nparameters. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/adapter/misc/scheduling"},"Scheduling")," for more details."),(0,l.kt)("h3",{id:"boolean-1"},"Boolean"),(0,l.kt)("p",null,"Boolean values in control profiles can be mapped to one or more DNP3 commands. A\nlist of commands is specified for when the Boolean value is both true and false."),(0,l.kt)("p",null,"The possible commands are either Control Relay Output Block (",(0,l.kt)("inlineCode",{parentName:"p"},"g12v1"),") or an\nAnalog Output command (",(0,l.kt)("inlineCode",{parentName:"p"},"g41v1"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"g41v2"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"g41v3"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"g41v4"),")."),(0,l.kt)("p",null,"CROBs can execute any control code specified in IEEE 1815-2012. The following\ntable shows all the possible values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Control Codes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NUL"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NUL_CANCEL"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PULSE_ON"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PULSE_ON_CANCEL"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PULSE_OFF"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PULSE_OFF_CANCEL"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LATCH_ON"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LATCH_ON_CANCEL"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LATCH_OFF"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LATCH_OFF_CANCEL"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CLOSE_PULSE_ON"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CLOSE_PULSE_ON_CANCEL"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TRIP_PULSE_ON"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TRIP_PULSE_ON_CANCEL"))))),(0,l.kt)("p",null,"Analog Output\nvariations specify how the casting will be applied, as specified by IEEE\n1815-2012. The following table shows the casting applied:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variation"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"g41v1")),(0,l.kt)("td",{parentName:"tr",align:null},"Int32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"g41v2")),(0,l.kt)("td",{parentName:"tr",align:null},"Int16")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"g41v3")),(0,l.kt)("td",{parentName:"tr",align:null},"Float")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"g41v4")),(0,l.kt)("td",{parentName:"tr",align:null},"Double")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="g12v1"',tab:'"g12v1"'},"- command-action-type: g12v1  # {g12v1, g41v1, g41v2, g41v3, g41v4}\n  index: 10\n  command-id: some-command-id\n  control-code: LATCH_OFF\n  count: 1\n  on-time-ms: 1000\n  off-time-ms: 2000\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="g41v1"',tab:'"g41v1"'},"- command-action-type: g41v1  # {g12v1, g41v1, g41v2, g41v3, g41v4}\n  index: 10\n  command-id: some-command-id\n  value: 24\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="g41v2"',tab:'"g41v2"'},"- command-action-type: g41v2  # {g12v1, g41v1, g41v2, g41v3, g41v4}\n  index: 10\n  command-id: some-command-id\n  value: 12\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="g41v3"',tab:'"g41v3"'},"- command-action-type: g41v3  # {g12v1, g41v1, g41v2, g41v3, g41v4}\n  index: 10\n  command-id: some-command-id\n  value: 0.12\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="g41v4"',tab:'"g41v4"'},"- command-action-type: g41v4  # {g12v1, g41v1, g41v2, g41v3, g41v4}\n  index: 10\n  command-id: some-command-id\n  value: 0.1234\n")),(0,l.kt)("h3",{id:"int32-int64-and-float"},"Int32, Int64, and Float"),(0,l.kt)("p",null,"Integer and floating point values can be mapped to Analog Output commands, with\noptional scaling. A particular variation of Group 41 can be specified for proper\ncasting."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="Int32"',tab:'"Int32"'},"int32-field-type: mapped\noutputs:\n  - command-id: some-command-id\n    command-action-type: g41v1  # {g41v1, g41v2, g41v3, g41v4}\n    index: 10\n    scale: 1.0\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="Int64"',tab:'"Int64"'},"int64-field-type: mapped\noutputs:\n  - command-id: some-command-id\n    command-action-type: g41v1  # {g41v1, g41v2, g41v3, g41v4}\n    index: 10\n    scale: 1.0\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="Float"',tab:'"Float"'},"float-field-type: mapped\noutputs:\n  - command-id: some-command-id\n    command-action-type: g41v1  # {g41v1, g41v2, g41v3, g41v4}\n    index: 10\n    scale: 1.0\n")),(0,l.kt)("h3",{id:"enum-1"},"Enum"),(0,l.kt)("p",null,"Each enumeration variant can be mapped to DNP3 commands in the same manner as\n",(0,l.kt)("a",{parentName:"p",href:"#boolean_1"},"Boolean")," fields."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"enum-field-type: mapped\nmapping:\n  - name: GridConnectModeKind_UNDEFINED\n    outputs:\n      - command-action-type: g12v1  # {g12v1, g41v1, g41v2, g41v3, g41v4}\n        index: 10\n        command-id: some-command-id\n        control-code: LATCH_ON\n        count: 1\n        on-time-ms: 1000\n        off-time-ms: 1000\n  - name: GridConnectModeKind_CSI\n    outputs:\n      - command-action-type: g41v1  # {g12v1, g41v1, g41v2, g41v3, g41v4}\n        index: 10\n        command-id: some-command-id\n        value: 25\n")),(0,l.kt)("h3",{id:"schedule-parameters"},"Schedule Parameters"),(0,l.kt)("p",null,"Each schedule parameter can be mapped to DNP3 Analog Output commands in the same\nmanner as ",(0,l.kt)("a",{parentName:"p",href:"#int32-int64-and-float"},"Int32, Int64 and Float")," fields. Schedules\nare executed as described in ",(0,l.kt)("a",{parentName:"p",href:"/docs/adapter/misc/scheduling"},"Scheduling"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- scheduleParameter:  # A sequence of schedule parameters w/ enum + value. Each plugin specifies what to do with each enumeration value\n  - scheduleParameterType: ScheduleParameterKind_none\n    outputs:\n      - command-id: some-command-id\n        command-action-type: g41v1  # {g41v1, g41v2, g41v3, g41v4}\n        index: 10\n        scale: 1.0\n  - scheduleParameterType: ScheduleParameterKind_other\n    outputs:\n      - command-id: some-command-id\n        command-action-type: g41v2  # {g41v1, g41v2, g41v3, g41v4}\n        index: 11\n        scale: 1.0\n")))}u.isMDXComponent=!0}}]);