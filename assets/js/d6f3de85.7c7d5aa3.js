(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(120)),l={},o={unversionedId:"adapter/other-plugins/log",id:"adapter/other-plugins/log",isDocsHomePage:!1,title:"Log plugin",description:"The log plugin enables the user to monitor the messages that are sent to the",source:"@site/docs/adapter/other-plugins/log.md",sourceDirName:"adapter/other-plugins",slug:"/adapter/other-plugins/log",permalink:"/openfmb.docs/docs/adapter/other-plugins/log",editUrl:"https://github.com/openenergysolutions/openfmb.docs/edit/develop/website/docs/adapter/other-plugins/log.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Capture and Replay plugins",permalink:"/openfmb.docs/docs/adapter/other-plugins/capture-replay"},next:{title:"Creating a new plugin",permalink:"/openfmb.docs/docs/adapter/extending"}},p=[{value:"Configuration",id:"configuration",children:[]}],c={toc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"log")," plugin enables the user to monitor the messages that are sent to the\ninternal bus by printing them to the console or to a file. It can be useful for\ndebugging purposes."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"log_debug_string"),": when set to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", all messages will be printed using\nProtobuf\n",Object(i.b)("a",{parentName:"li",href:"https://developers.google.com/protocol-buffers/docs/reference/cpp/google.protobuf.message#Message.DebugString"},Object(i.b)("inlineCode",{parentName:"a"},"DebugString")),"\nmethod."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"filters"),": a list of profiles to print",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"profile"),": name of the profile to monitor"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"name"),": conducting equipment identifier"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"path"),": path of the file to which values will be appended to"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"print_alias"),": if ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", the alias of the values will be printed to the file"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"log_all_values"),": if ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", all the value of this conducting equipment will\nbe printed to ",Object(i.b)("inlineCode",{parentName:"li"},"stdout"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"values"),": list of values to extract from the profile",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tag"),': path of the value in the profile. e.g. "meterReading.readingMMXU.W.net.cVal.mag.f.value"'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"alias"),": alias that will optionally be printed with the value"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"digits"),": Number of digits to keeps")))))),Object(i.b)("p",null,"Here's an example of a configuration:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'log:\n  enabled: true\n  log_debug_string: true  # log the entire protobuf debug string for every profile\n  filters:\n    - profile: MeterReadingProfile\n      name: "test"  # conducting equipment name\n      path: values.txt  # file to which values will be appended\n      print_alias: true\n      log_all_values: false\n      values:\n        - tag: meterReading.readingMMXU.W.net.cVal.mag.f.value\n          alias: W\n          digits: 0\n        - tag: meterReading.readingMMXU.PPV.phsAB.cVal.mag.f.value\n          alias: Vab\n          digits: 1\n        - tag: meterReading.readingMMXU.PPV.phsBC.cVal.mag.f.value\n          alias: Vbc\n          digits: 1\n        - tag: meterReading.readingMMXU.PPV.phsCA.cVal.mag.f.value\n          alias: Vca\n          digits: 1\n        - tag: meterReading.readingMMXU.Hz.mag.f.value\n          alias: Hz\n          digits: 3\n')))}u.isMDXComponent=!0},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,g=s["".concat(l,".").concat(d)]||s[d]||b[d]||i;return n?r.a.createElement(g,o(o({ref:t},c),{},{components:n})):r.a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);