"use strict";(self.webpackChunkopenfmb_docs=self.webpackChunkopenfmb_docs||[]).push([[9472],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4640:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:2},p="CLI",s={unversionedId:"adapter/cli",id:"adapter/cli",title:"CLI",description:"The command-line interface (CLI) to the Adapter provides some helpful commands, including:",source:"@site/docs/adapter/cli.md",sourceDirName:"adapter",slug:"/adapter/cli",permalink:"/docs/adapter/cli",editUrl:"https://github.com/openenergysolutions/openfmb.docs/edit/develop/website/docs/adapter/cli.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/adapter/"},next:{title:"Schemas",permalink:"/docs/adapter/schemas"}},c=[{value:"Help",id:"help",children:[],level:2},{value:"Generate top-level configuration",id:"generate-top-level-configuration",children:[],level:2},{value:"Generate configuration for a plugin",id:"generate-configuration-for-a-plugin",children:[],level:2},{value:"Generate configuration JSON schemas",id:"generate-configuration-json-schemas",children:[],level:2},{value:"Running the adapter",id:"running-the-adapter",children:[],level:2},{value:"List plugins",id:"list-plugins",children:[],level:2},{value:"Version",id:"version",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cli"},"CLI"),(0,i.kt)("p",null,"The command-line interface (CLI) to the Adapter provides some helpful commands, including: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"show all available commands (help)"),(0,i.kt)("li",{parentName:"ul"},"run the Adapter"),(0,i.kt)("li",{parentName:"ul"},"generate a default top-level config file"),(0,i.kt)("li",{parentName:"ul"},"generate a default protocol-specific config file for specified profiles"),(0,i.kt)("li",{parentName:"ul"},"list all the provided protocol plugins")),(0,i.kt)("h2",{id:"help"},"Help"),(0,i.kt)("p",null,"Prints a short description of all the available commands and parameters. "),(0,i.kt)("p",null,"Result: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"openfmb-adapter -h\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Options\n\n    -h, --help\n        show this help message\n    -l, --list\n        list available plugins\n    -v, --version\n        display version information\n    -c, --config\n        run with the specified config file\n    -g, --generate\n        generate the specified config file\n    -s, --schema\n        generate a JSON schema\n    -p, --plugin\n        the plugin for which to generate configuration\n    -f, --profile\n        profile to generate\n")),(0,i.kt)("h2",{id:"generate-top-level-configuration"},"Generate top-level configuration"),(0,i.kt)("p",null,"A default top-level configuration may be generated using the -g flag. This file is needed when running the Adapter (see ",(0,i.kt)("a",{parentName:"p",href:"#running-the-adapter"},"Running the adapter"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"openfmb-adapter -g config.yml\n")),(0,i.kt)("h2",{id:"generate-configuration-for-a-plugin"},"Generate configuration for a plugin"),(0,i.kt)("p",null,"Some plugins, notably the Adapter-type protocol plugins, need extra configuration in separate files. The output file is specified with the -g argument. The plugin for which the config is generated is specified with the -p argument. The desired profile is specified with the -f argument. "),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Multiple profiles can be generated for a single configuration file by providing multiple -f parameters:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"openfmb-adapter -g dnp3-master.yml -p dnp3-master -f SolarReadingProfile -f SolarStatusProfile\n")))),(0,i.kt)("h2",{id:"generate-configuration-json-schemas"},"Generate configuration JSON schemas"),(0,i.kt)("p",null,"Each YAML configuration file has JSON schemas that can be printed to a file to help with writing valid configurations. "),(0,i.kt)("p",null,"To generate the top-level schema, run the following: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"openfmb-adapter -s config.json\n")),(0,i.kt)("p",null,"To generate the schema for a particular plugin, run the following: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"openfmb-adapter -s dnp3-master.json -p dnp3-master\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--pretty-print")," argument can also be used to produce human-readable schema files. Note that these files are particularly large for plugins and pretty-printing should be used only for debugging purposes. "),(0,i.kt)("p",null,"To learn how to leverage these schemas in your editing environment, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/adapter/schemas"},"Schemas")," page."),(0,i.kt)("h2",{id:"running-the-adapter"},"Running the adapter"),(0,i.kt)("p",null,"The adapter is run using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-c")," flag. To stop the adapter, hit Ctrl-C on the keyboard."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"openfmb-adapter -c [config.yml]\n")),(0,i.kt)("h2",{id:"list-plugins"},"List plugins"),(0,i.kt)("p",null,"All available plugins compiled in this instance of the adapter can be listed using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-l")," flag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"openfmb-adapter -l\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"available plugins:\n\ncapture           - captures published OpenFMB messages to a replayable file format\ndds-rti           - publish/subscribe to DDS using RTI bindings (requires run-time license)\ndnp3-master       - maps openFMB to the master side of the DNP3 protocol\ndnp3-outstation   - maps openFMB to the outstation side of the DNP3 protocol\nlog               - pretty prints profiles to the log\nmodbus-master     - maps OpenFMB to the Modbus protocol\nmodbus-outstation - maps the Modbus protocol to OpenFMB\nmqtt              - publish/subscribe to a MQTT broker\nnats              - publish/subscribe to a NATS server\nreplay            - replays captured OpenFMB messages from a file\ntimescaledb       - saves all the published messages to a TimescaleDB\n")),(0,i.kt)("h2",{id:"version"},"Version"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," commit date and hash of the code compiled in this instance of the adapter can be listed\nusing the ",(0,i.kt)("inlineCode",{parentName:"p"},"-v")," flag. The hash can be used on GitHub to retrieve the exact code used, simply go to\n",(0,i.kt)("inlineCode",{parentName:"p"},"https://github.com/openenergysolutions/openfmb.adapters/commit/{HASH}"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"openfmb-adapter -v\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git commmit date: 2019-10-10\ngit commmit hash: d97428d36b3c311004deac38936573fc67237f0e\n")))}d.isMDXComponent=!0}}]);