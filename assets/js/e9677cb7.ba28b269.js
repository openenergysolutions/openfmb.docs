(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{113:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var a=t(3),i=t(7),r=(t(0),t(120)),o={},l={unversionedId:"adapter/protocol-plugins/modbus/outstation",id:"adapter/protocol-plugins/modbus/outstation",isDocsHomePage:!1,title:"Modbus Outstation",description:"The modbus-outstation plugin exposes OpenFMB measurements as a Modbus slave",source:"@site/docs/adapter/protocol-plugins/modbus/outstation.md",sourceDirName:"adapter/protocol-plugins/modbus",slug:"/adapter/protocol-plugins/modbus/outstation",permalink:"/openfmb.docs/docs/adapter/protocol-plugins/modbus/outstation",editUrl:"https://github.com/openenergysolutions/openfmb.docs/edit/develop/website/docs/adapter/protocol-plugins/modbus/outstation.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Modbus Master",permalink:"/openfmb.docs/docs/adapter/protocol-plugins/modbus/master"},next:{title:"DNP3 Master",permalink:"/openfmb.docs/docs/adapter/protocol-plugins/dnp3/master"}},p=[{value:"General configuration",id:"general-configuration",children:[]},{value:"Non-control profiles",id:"non-control-profiles",children:[{value:"Boolean",id:"boolean",children:[]},{value:"Int32, Int64 and Float",id:"int32-int64-and-float",children:[]},{value:"Enum",id:"enum",children:[]}]},{value:"Control profiles",id:"control-profiles",children:[{value:"Boolean",id:"boolean-1",children:[]},{value:"Int32, Int64 and Float",id:"int32-int64-and-float-1",children:[]},{value:"Enum",id:"enum-1",children:[]},{value:"Schedule parameters",id:"schedule-parameters",children:[]}]}],s={toc:p};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"modbus-outstation")," plugin exposes OpenFMB measurements as a Modbus slave\nfor non-control OpenFMB profiles. It also maps Modbus write commands to OpenFMB\ncontrol messages."),Object(r.b)("h2",{id:"general-configuration"},"General configuration"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name"),": Name used in the logs to identify the communication session."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"log-level"),": protocol log level to print to the logs"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"adapter"),": Network adapter to use to establish a TCP connection (typically\n0.0.0.0)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"port"),": TCP port on which the outstation will be listening"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"unit-identifier"),": Modbus unit identifier of the outstation (aka slave address)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"max-num-connections"),": Maximum number of concurrent TCP connections to the\nserver")),Object(r.b)("h2",{id:"non-control-profiles"},"Non-control profiles"),Object(r.b)("p",null,"Non-control profiles (reading, status, etc) are mapped to Modbus coils, discrete\ninputs, holding registers and input registers. When the message is received on\nthe internal message bus, it updates the internal Modbus database. Then, masters\npolling the outstation will read the updated values."),Object(r.b)("p",null,"Each OpenFMB value can be mapped to multiple Modbus values."),Object(r.b)("h3",{id:"boolean"},"Boolean"),Object(r.b)("p",null,"OpenFMB boolean values can be mapped to one or multiple coil and discrete input.\nIf ",Object(r.b)("inlineCode",{parentName:"p"},"negate")," is set to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", the OpenFMB value is negated before updating the\nModbus outstation."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="coil"',tab:'"coil"'},"bool-field-type: mapped\nactions:\n    - destination-type: coil  # {none, coil, discrete_input}\n    index: 10\n    negate: false\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="discrete_input"',tab:'"discrete_input"'},"bool-field-type: mapped\nactions:\n    - destination-type: discrete_input  # {none, coil, discrete_input}\n    index: 11\n    negate: true\n")),Object(r.b)("h3",{id:"int32-int64-and-float"},"Int32, Int64 and Float"),Object(r.b)("p",null,"OpenFMB ",Object(r.b)("inlineCode",{parentName:"p"},"int32"),", ",Object(r.b)("inlineCode",{parentName:"p"},"int64")," and ",Object(r.b)("inlineCode",{parentName:"p"},"float")," values can be mapped to a Modbus holding\nregister or a Modbus input register. An scaling value can also be specified."),Object(r.b)("p",null,"For 32-bit values, two indices are specified, one containing the the two LSBs\nand the other one containing the two MSBs."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="sint16"',tab:'"sint16"'},"float-field-type: mapped\nactions:\n- destination-type: holding_register  # {none, holding_register, input_register}\n    register-mapping: sint16  # {sint16, uint16, sint32, uint32, float32}\n    index: 0\n    scale: 1\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="uint16"',tab:'"uint16"'},"float-field-type: mapped\nactions:\n- destination-type: input_register  # {none, holding_register, input_register}\n    register-mapping: uint16  # {sint16, uint16, sint32, uint32, float32}\n    index: 0\n    scale: 1\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="sint32"',tab:'"sint32"'},"float-field-type: mapped\nactions:\n- destination-type: holding_register  # {none, holding_register, input_register}\n    register-mapping: sint32  # {sint16, uint16, sint32, uint32, float32}\n    lower_index: 0\n    upper_index: 1\n    scale: 1\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="uint32"',tab:'"uint32"'},"float-field-type: mapped\nactions:\n- destination-type: input_register  # {none, holding_register, input_register}\n    register-mapping: uint32  # {sint16, uint16, sint32, uint32, float32}\n    lower_index: 0\n    upper_index: 1\n    scale: 1\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="float32"',tab:'"float32"'},"float-field-type: mapped\nactions:\n- destination-type: holding_register  # {none, holding_register, input_register}\n    register-mapping: float32  # {sint16, uint16, sint32, uint32, float32}\n    lower_index: 0\n    upper_index: 1\n    scale: 1\n")),Object(r.b)("h3",{id:"enum"},"Enum"),Object(r.b)("p",null,"OpenFMB enumerations can be mapped to multiple values in the Modbus database.\nFor each variant, a coil or discrete input can be updated to a fixed value, or a\nholding register or input register can be updated to a fixed value."),Object(r.b)("p",null,"A list of each enum variant is specified with the desired actions to perform."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"enum-field-type: mapped\nmapping:\n    - name: DynamicTestKind_none\n      actions:\n        - destination-type: coil  # {none, coil, discrete_input, holding_register, input_register}\n          index: 0\n          value: true\n    - name: DynamicTestKind_testing\n      actions:\n        - destination-type: discrete_input  # {none, coil, discrete_input, holding_register, input_register}\n          index: 1\n          value: false\n    - name: DynamicTestKind_operating\n      actions:\n        - destination-type: holding_register  # {none, coil, discrete_input, holding_register, input_register}\n          index: 2\n          value: 42\n    - name: DynamicTestKind_failed\n      actions:\n        - destination-type: input_register  # {none, coil, discrete_input, holding_register, input_register}\n          index: 3\n          value: 76\n")),Object(r.b)("h2",{id:"control-profiles"},"Control profiles"),Object(r.b)("p",null,"Modbus write commands can be translated to OpenFMB control profile messages."),Object(r.b)("p",null,"There are three actions that can be specified for each point:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"update"),": simply updates the current profile"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"clean_and_update"),": clears the current message and updates the value"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"publish"),": updates the current message and sends it to the message bus")),Object(r.b)("p",null,"All the write targets are mapped to values in the internal database. Therefore,\na read will report the last written value."),Object(r.b)("h3",{id:"boolean-1"},"Boolean"),Object(r.b)("p",null,"Boolean values in control profiles can be mapped from Modbus writes to coils.\nOptionally, the value can be negated."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"bool-field-type: mapped\ncommand-source-type: coil  # {none, coil}\nprofile-action: update_and_publish  # {update, clear_and_update, update_and_publish}\nindex: 0\nnegate: false\n")),Object(r.b)("h3",{id:"int32-int64-and-float-1"},"Int32, Int64 and Float"),Object(r.b)("p",null,"Integer and floating point values can be mapped from one or multiple holding\nregister writes. If multiple writes are required, be sure to use the ",Object(r.b)("inlineCode",{parentName:"p"},"update"),".\nOtherwise, transient values will be published."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="sint16"',tab:'"sint16"'},"float-field-type: mapped\ncommand-source-type: holding_register  # {none, holding_register}\nregister-mapping: sint16  # {sint16, uint16, sint32, uint32, float32}\nprofile-action: update_and_publish  # {update, clear_and_update, update_and_publish}\nindex: 0\nscale: 1\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="uint16"',tab:'"uint16"'},"float-field-type: mapped\ncommand-source-type: holding_register  # {none, holding_register}\nregister-mapping: uint16  # {sint16, uint16, sint32, uint32, float32}\nprofile-action: update_and_publish  # {update, clear_and_update, update_and_publish}\nindex: 0\nscale: 1\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="sint32"',tab:'"sint32"'},"float-field-type: mapped\ncommand-source-type: holding_register  # {none, holding_register}\nregister-mapping: sint32  # {sint16, uint16, sint32, uint32, float32}\nprofile-action: update  # {update, clear_and_update, update_and_publish}\nlower_index: 0\nupper_index: 1\nscale: 1\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="uint32"',tab:'"uint32"'},"float-field-type: mapped\ncommand-source-type: holding_register  # {none, holding_register}\nregister-mapping: uint32  # {sint16, uint16, sint32, uint32, float32}\nprofile-action: update  # {update, clear_and_update, update_and_publish}\nlower_index: 0\nupper_index: 1\nscale: 1\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="float32"',tab:'"float32"'},"float-field-type: mapped\ncommand-source-type: holding_register  # {none, holding_register}\nregister-mapping: float32  # {sint16, uint16, sint32, uint32, float32}\nprofile-action: update  # {update, clear_and_update, update_and_publish}\nlower_index: 0\nupper_index: 1\nscale: 1\n")),Object(r.b)("h3",{id:"enum-1"},"Enum"),Object(r.b)("p",null,"Register writes can be mapped to OpenFMB enums. A list of enumeration variants\nis provided with the source register value."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"enum-field-type: mapped\ncommand-source-type: analog_output  # {none, analog_output}\nprofile-action: update_and_publish  # {update, clear_and_update, update_and_publish}\nindex: 10\nmapping:\n  - name: StateKind_off\n    value: 0\n  - name: StateKind_on\n    value: 1\n  - name: StateKind_standby\n    value: 2\n")),Object(r.b)("h3",{id:"schedule-parameters"},"Schedule parameters"),Object(r.b)("p",null,"These are currently not supported."))}u.isMDXComponent=!0},120:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),u=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(t),b=a,m=d["".concat(o,".").concat(b)]||d[b]||c[b]||r;return t?i.a.createElement(m,l(l({ref:n},s),{},{components:t})):i.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=b;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);