(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{101:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return b}));var a=t(3),l=t(7),o=(t(0),t(120)),r={},i={unversionedId:"adapter/protocol-plugins/dnp3/master",id:"adapter/protocol-plugins/dnp3/master",isDocsHomePage:!1,title:"DNP3 Master",description:"The dnp3-master plugin acquires measurement data and sends controls to DNP3",source:"@site/docs/adapter/protocol-plugins/dnp3/master.md",sourceDirName:"adapter/protocol-plugins/dnp3",slug:"/adapter/protocol-plugins/dnp3/master",permalink:"/docs/adapter/protocol-plugins/dnp3/master",editUrl:"https://github.com/openenergysolutions/openfmb.docs/edit/develop/website/docs/adapter/protocol-plugins/dnp3/master.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Modbus Outstation",permalink:"/docs/adapter/protocol-plugins/modbus/outstation"},next:{title:"DNP3 Outstation",permalink:"/docs/adapter/protocol-plugins/dnp3/outstation"}},c=[{value:"General configuration",id:"general-configuration",children:[]},{value:"Poll configuration",id:"poll-configuration",children:[]},{value:"Non-control profiles",id:"non-control-profiles",children:[{value:"Boolean",id:"boolean",children:[]},{value:"Int32 and Int64",id:"int32-and-int64",children:[]},{value:"Float",id:"float",children:[]},{value:"Enum",id:"enum",children:[]}]},{value:"Control profiles",id:"control-profiles",children:[{value:"Boolean",id:"boolean-1",children:[]},{value:"Int32, Int64 and Float",id:"int32-int64-and-float",children:[]},{value:"Enum",id:"enum-1",children:[]},{value:"Schedule parameters",id:"schedule-parameters",children:[]}]}],p={toc:c};function b(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"dnp3-master")," plugin acquires measurement data and sends controls to DNP3\noutstations. It maps DNP3 measurement values (binary, analog, etc) to OpenFMB\nnon-control profiles and sends DNP3 commands (e.g. binary/analog output) in\nresponse to OpenFMB control profiles."),Object(o.b)("h2",{id:"general-configuration"},"General configuration"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"name"),": Name used in the logs to identify the communication session."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"channel"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"adapter"),": Network adapter to use to establish a TCP connection (typically 0.0.0.0)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"outstation-ip"),": IP address of the outstation. Can also be a domain name."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"port"),": TCP port on which the outstation is listening."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"protocol"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"master-address"),": DNP3 link-layer address of the master (the adapter)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"outstation-address"),": DNP3 link-layer address of the outstation (remote device)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"unsol-class-1"),": Enable Class 1 unsolicited responses."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"unsol-class-2"),": Enable Class 2 unsolicited responses."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"unsol-class-3"),": Enable Class 3 unsolicited responses.")))),Object(o.b)("h2",{id:"poll-configuration"},"Poll configuration"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"polls")," parameter contains a list of polls to be executed by the adapter.\nEach poll has a name that might be referenced in the non-control profile\nmappings. This is particularly useful for event profiles, where you want to\npublish an event profile only when events are received, not on every message."),Object(o.b)("p",null,"There are two types of polls. ",Object(o.b)("inlineCode",{parentName:"p"},"integrity")," is a Class 1230, meaning it gets the\nsequence of events (and empties the event buffers) and it also gets all the\nstatic (current) values. This should be used for status and reading profiles.\nAn ",Object(o.b)("inlineCode",{parentName:"p"},"event")," poll only asks for the sequence of events assigned to a specific\nclass. It should be used for used for event profiles. In the configuration,\nit is possible to specify which classes to ask for."),Object(o.b)("p",null,"The interval specifies the delay between two polls."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="integrity"',tab:'"integrity"'},"- name: integrity_poll\n  type: integrity\n  interval-ms: 5000\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="event"',tab:'"event"'},"- name: event_poll\n  type: event\n  interval-ms: 5000\n  class1: true\n  class2: true\n  class3: false\n")),Object(o.b)("h2",{id:"non-control-profiles"},"Non-control profiles"),Object(o.b)("p",null,"Non-control profiles (reading, status, etc) are mapped from DNP3 measurement points."),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"poll-name")," parameter is required and must point to a valid poll defined the\n",Object(o.b)("a",{parentName:"p",href:"#polls-configuration"},"Polls Configuration")," section. An OpenFMB profile\nwill be generated on every non-empty response of the poll."),Object(o.b)("h3",{id:"boolean"},"Boolean"),Object(o.b)("p",null,"DNP3 binary inputs can be mapped directly to an OpenFMB boolean value."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"bool-field-type: mapped\nsource-type: binary  # {none, binary}\nindex: 10\n")),Object(o.b)("h3",{id:"int32-and-int64"},"Int32 and Int64"),Object(o.b)("p",null,"DNP3 analog inputs and counters can be mapped to an OpenFMB ",Object(o.b)("inlineCode",{parentName:"p"},"int32")," or an\nOpenFMB ",Object(o.b)("inlineCode",{parentName:"p"},"int64"),". A scaling can be applied to the value."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="analog"',tab:'"analog"'},"int32-field-type: mapped\nsource-type: analog  # {none, analog, counter}\nindex: 10\nscale: 1000\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="counter"',tab:'"counter"'},"int32-field-type: mapped\nsource-type: counter  # {none, analog, counter}\nindex: 10\nscale: 1000\n")),Object(o.b)("h3",{id:"float"},"Float"),Object(o.b)("p",null,"DNP3 analog inputs can be mapped to an OpenFMB ",Object(o.b)("inlineCode",{parentName:"p"},"float")," value. A scaling can be applied to\nthe value."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"float-field-type: mapped\nsource-type: analog  # {none, analog}\nindex: 10\nscale: 1000\n")),Object(o.b)("h3",{id:"enum"},"Enum"),Object(o.b)("p",null,"OpenFMB enumerations can be mapped from DNP3 binary, analog, and counter source points."),Object(o.b)("p",null,"Binary inputs have an enumeration value specified for 'true' and 'false'. Analog and counter\nmappings allow for a free form mapping. If no association is found in the mapping list,\nthe field is simply not set."),Object(o.b)("p",null,"Since analog inputs might be reported as a floating point value, an epsilon of 0.001 is used for comparison. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="binary"',tab:'"binary"'},"enum-field-type: mapped\nsource-type: binary  # {none, binary, analog, counter}\nindex: 10\nwhen-true: DynamicTestKind_none\nwhen-false: DynamicTestKind_testing\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="analog"',tab:'"analog"'},"enum-field-type: mapped\nsource-type: analog  # {none, binary, analog, counter}\nindex: 10\nmapping:\n  - value: 4\n    name: DynamicTestKind_none\n  - value: 24\n    name: DynamicTestKind_testing\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="counter"',tab:'"counter"'},"enum-field-type: mapped\nsource-type: counter  # {none, binary, analog, counter}\nindex: 10\nmapping:\n  - value: 4\n    name: DynamicTestKind_none\n  - value: 24\n    name: DynamicTestKind_testing\n")),Object(o.b)("h2",{id:"control-profiles"},"Control profiles"),Object(o.b)("p",null,"OpenFMB control profiles are translated to DNP3 binary and analog output\ncommands. All commands are executed with a Direct Operate function code\n(",Object(o.b)("inlineCode",{parentName:"p"},"0x05"),")."),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"command-order")," list is used to prior every command referenced in the detailed\nmappings. The first element in the list has the highest priority, and will be\nsent first to the outstation."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"tolerance-ms")," parameter is used to specify the tolerance for schedule\nparameters. See the ",Object(o.b)("a",{parentName:"p",href:"/docs/adapter/misc/scheduling"},"Scheduling")," page for more details."),Object(o.b)("h3",{id:"boolean-1"},"Boolean"),Object(o.b)("p",null,"Boolean values in control profiles can be mapped to one or more DNP3 commands. A\nlist of commands is specified for when the boolean value is both true and false."),Object(o.b)("p",null,"The possible commands are either Control Relay Output Block (",Object(o.b)("inlineCode",{parentName:"p"},"g12v1"),") or an\nAnalog Output command (",Object(o.b)("inlineCode",{parentName:"p"},"g41v1"),", ",Object(o.b)("inlineCode",{parentName:"p"},"g41v2"),", ",Object(o.b)("inlineCode",{parentName:"p"},"g41v3"),", ",Object(o.b)("inlineCode",{parentName:"p"},"g41v4"),")."),Object(o.b)("p",null,"CROBs can execute any control code specified in IEEE 1815-2012. The following\ntable shows all the possible values:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Control Codes"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"NUL"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"NUL_CANCEL"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"PULSE_ON"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"PULSE_ON_CANCEL"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"PULSE_OFF"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"PULSE_OFF_CANCEL"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"LATCH_ON"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"LATCH_ON_CANCEL"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"LATCH_OFF"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"LATCH_OFF_CANCEL"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"CLOSE_PULSE_ON"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"CLOSE_PULSE_ON_CANCEL"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"TRIP_PULSE_ON"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"TRIP_PULSE_ON_CANCEL"))))),Object(o.b)("p",null,"Analog Output\nvariations specify how the casting will be applied, as specified by IEEE\n1815-2012. The following table shows the casting applied:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Variation"),Object(o.b)("th",{parentName:"tr",align:null},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"g41v1")),Object(o.b)("td",{parentName:"tr",align:null},"Int32")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"g41v2")),Object(o.b)("td",{parentName:"tr",align:null},"Int16")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"g41v3")),Object(o.b)("td",{parentName:"tr",align:null},"Float")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"g41v4")),Object(o.b)("td",{parentName:"tr",align:null},"Double")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="g12v1"',tab:'"g12v1"'},"- command-action-type: g12v1  # {g12v1, g41v1, g41v2, g41v3, g41v4}\n  index: 10\n  command-id: some-command-id\n  control-code: LATCH_OFF\n  count: 1\n  on-time-ms: 1000\n  off-time-ms: 2000\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="g41v1"',tab:'"g41v1"'},"- command-action-type: g41v1  # {g12v1, g41v1, g41v2, g41v3, g41v4}\n  index: 10\n  command-id: some-command-id\n  value: 24\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="g41v2"',tab:'"g41v2"'},"- command-action-type: g41v2  # {g12v1, g41v1, g41v2, g41v3, g41v4}\n  index: 10\n  command-id: some-command-id\n  value: 12\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="g41v3"',tab:'"g41v3"'},"- command-action-type: g41v3  # {g12v1, g41v1, g41v2, g41v3, g41v4}\n  index: 10\n  command-id: some-command-id\n  value: 0.12\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="g41v4"',tab:'"g41v4"'},"- command-action-type: g41v4  # {g12v1, g41v1, g41v2, g41v3, g41v4}\n  index: 10\n  command-id: some-command-id\n  value: 0.1234\n")),Object(o.b)("h3",{id:"int32-int64-and-float"},"Int32, Int64 and Float"),Object(o.b)("p",null,"Integer and floating point values can be mapped to Analog Output commands, with\noptional scaling. A particular variation of Group 41 can be specified for proper\ncasting."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="Int32"',tab:'"Int32"'},"int32-field-type: mapped\noutputs:\n  - command-id: some-command-id\n    command-action-type: g41v1  # {g41v1, g41v2, g41v3, g41v4}\n    index: 10\n    scale: 1.0\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="Int64"',tab:'"Int64"'},"int64-field-type: mapped\noutputs:\n  - command-id: some-command-id\n    command-action-type: g41v1  # {g41v1, g41v2, g41v3, g41v4}\n    index: 10\n    scale: 1.0\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="Float"',tab:'"Float"'},"float-field-type: mapped\noutputs:\n  - command-id: some-command-id\n    command-action-type: g41v1  # {g41v1, g41v2, g41v3, g41v4}\n    index: 10\n    scale: 1.0\n")),Object(o.b)("h3",{id:"enum-1"},"Enum"),Object(o.b)("p",null,"Each enumeration variant can be mapped to DNP3 commands in the same manner as\n",Object(o.b)("a",{parentName:"p",href:"#boolean_1"},"Boolean")," fields."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"enum-field-type: mapped\nmapping:\n  - name: GridConnectModeKind_UNDEFINED\n    outputs:\n      - command-action-type: g12v1  # {g12v1, g41v1, g41v2, g41v3, g41v4}\n        index: 10\n        command-id: some-command-id\n        control-code: LATCH_ON\n        count: 1\n        on-time-ms: 1000\n        off-time-ms: 1000\n  - name: GridConnectModeKind_CSI\n    outputs:\n      - command-action-type: g41v1  # {g12v1, g41v1, g41v2, g41v3, g41v4}\n        index: 10\n        command-id: some-command-id\n        value: 25\n")),Object(o.b)("h3",{id:"schedule-parameters"},"Schedule parameters"),Object(o.b)("p",null,"Each schedule parameter can be mapped to DNP3 Analog Output commands in the same\nmanner as ",Object(o.b)("a",{parentName:"p",href:"#int32-int64-and-float"},"Int32, Int64 and Float")," fields. Schedules\nwill be executed as described in ",Object(o.b)("a",{parentName:"p",href:"/docs/adapter/misc/scheduling"},"Scheduling")," page."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"- scheduleParameter:  # A sequence of schedule parameters w/ enum + value. Each plugin specifies what to do with each enumeration value\n  - scheduleParameterType: ScheduleParameterKind_none\n    outputs:\n      - command-id: some-command-id\n        command-action-type: g41v1  # {g41v1, g41v2, g41v3, g41v4}\n        index: 10\n        scale: 1.0\n  - scheduleParameterType: ScheduleParameterKind_other\n    outputs:\n      - command-id: some-command-id\n        command-action-type: g41v2  # {g41v1, g41v2, g41v3, g41v4}\n        index: 11\n        scale: 1.0\n")))}b.isMDXComponent=!0},120:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var a=t(0),l=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=l.a.createContext({}),b=function(e){var n=l.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=b(e.components);return l.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},s=l.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=b(t),s=a,u=d["".concat(r,".").concat(s)]||d[s]||m[s]||o;return t?l.a.createElement(u,i(i({ref:n},p),{},{components:t})):l.a.createElement(u,i({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=s;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var p=2;p<o;p++)r[p]=t[p];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);