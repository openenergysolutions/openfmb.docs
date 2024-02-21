"use strict";(self.webpackChunkopenfmb_docs=self.webpackChunkopenfmb_docs||[]).push([[9472],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},l="CLI",i={unversionedId:"adapter/cli",id:"adapter/cli",title:"CLI",description:"The command-line interface (CLI) to the Adapter provides some helpful commands, including:",source:"@site/docs/adapter/cli.md",sourceDirName:"adapter",slug:"/adapter/cli",permalink:"/docs/adapter/cli",draft:!1,editUrl:"https://github.com/openenergysolutions/openfmb.docs/edit/develop/website/docs/adapter/cli.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"What's New",permalink:"/docs/adapter/features"},next:{title:"Schemas",permalink:"/docs/adapter/schemas"}},p={},s=[{value:"Help",id:"help",level:2},{value:"Generate top-level configuration",id:"generate-top-level-configuration",level:2},{value:"Generate configuration for a plugin",id:"generate-configuration-for-a-plugin",level:2},{value:"Generate configuration JSON schemas",id:"generate-configuration-json-schemas",level:2},{value:"Running the adapter",id:"running-the-adapter",level:2},{value:"List plugins",id:"list-plugins",level:2},{value:"Version",id:"version",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cli"},"CLI"),(0,r.kt)("p",null,"The command-line interface (CLI) to the Adapter provides some helpful commands, including: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"show all available commands (help)"),(0,r.kt)("li",{parentName:"ul"},"run the Adapter"),(0,r.kt)("li",{parentName:"ul"},"generate a default top-level config file"),(0,r.kt)("li",{parentName:"ul"},"generate a default protocol-specific config file for specified profiles"),(0,r.kt)("li",{parentName:"ul"},"list all the provided protocol plugins")),(0,r.kt)("h2",{id:"help"},"Help"),(0,r.kt)("p",null,"Prints a short description of all the available commands and parameters. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openfmb-adapter -h\n")),(0,r.kt)("p",null,"or with Docker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm oesinc/openfmb.adapters -h\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Options\n\n    -h, --help\n        show this help message\n    -l, --list\n        list available plugins\n    -v, --version\n        display version information\n    -c, --config\n        run with the specified config file\n    -g, --generate\n        generate the specified config file\n    -s, --schema\n        generate a JSON schema\n    -p, --plugin\n        the plugin for which to generate configuration\n    -f, --profile\n        profile to generate\n")),(0,r.kt)("h2",{id:"generate-top-level-configuration"},"Generate top-level configuration"),(0,r.kt)("p",null,"A default top-level configuration may be generated using the -g flag. This file is needed when running the Adapter (see ",(0,r.kt)("a",{parentName:"p",href:"#running-the-adapter"},"Running the adapter"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openfmb-adapter -g config.yml\n")),(0,r.kt)("p",null,"or with Docker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -v $PWD:/openfmb oesinc/openfmb.adapters -g /openfmb/config.yml\n")),(0,r.kt)("h2",{id:"generate-configuration-for-a-plugin"},"Generate configuration for a plugin"),(0,r.kt)("p",null,"Some plugins, notably the Adapter-type protocol plugins, need extra configuration in separate files. The output file is specified with the -g argument. The plugin for which the config is generated is specified with the -p argument. The desired profile is specified with the -f argument. "),(0,r.kt)("admonition",{title:"Multiple profiles can be generated for a single configuration file by providing multiple -f parameters:",type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openfmb-adapter -g dnp3-master.yml -p dnp3-master -f SolarReadingProfile -f SolarStatusProfile\n")),(0,r.kt)("p",{parentName:"admonition"},"or with Docker:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -v $PWD:/openfmb oesinc/openfmb.adapters -g /openfmb/dnp3-master.yml -p dnp3-master -f SolarReadingProfile -f SolarStatusProfile\n"))),(0,r.kt)("h2",{id:"generate-configuration-json-schemas"},"Generate configuration JSON schemas"),(0,r.kt)("p",null,"Each YAML configuration file has JSON schemas that can be printed to a file to help with writing valid configurations. "),(0,r.kt)("p",null,"To generate the top-level schema, run the following: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openfmb-adapter -s config.json\n")),(0,r.kt)("p",null,"or with Docker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -v $PWD:/openfmb oesinc/openfmb.adapters -s /openfmb/config.json\n")),(0,r.kt)("p",null,"To generate the schema for a particular plugin, run the following: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openfmb-adapter -s dnp3-master.json -p dnp3-master\n")),(0,r.kt)("p",null,"or with Docker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -v $PWD:/openfmb oesinc/openfmb.adapters -s /openfmb/dnp3-master.json -p dnp3-master\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--pretty-print")," argument can also be used to produce human-readable schema files. Note that these files are particularly large for plugins and pretty-printing should be used only for debugging purposes. "),(0,r.kt)("p",null,"To learn how to leverage these schemas in your editing environment, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/adapter/schemas"},"Schemas")," page."),(0,r.kt)("h2",{id:"running-the-adapter"},"Running the adapter"),(0,r.kt)("p",null,"The adapter is run using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-c")," flag. To stop the adapter, hit Ctrl-C on the keyboard."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openfmb-adapter -c [config.yml]\n")),(0,r.kt)("p",null,"or with Docker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -v $PWD:/openfmb oesinc/openfmb.adapters -c /openfmb/[config.yml]\n")),(0,r.kt)("h2",{id:"list-plugins"},"List plugins"),(0,r.kt)("p",null,"All available plugins compiled in this instance of the adapter can be listed using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-l")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openfmb-adapter -l\n")),(0,r.kt)("p",null,"or with Docker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm oesinc/openfmb.adapters -l\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"available plugins:\n\ncapture           - captures published OpenFMB messages to a replayable file format\ndds-rti           - publish/subscribe to DDS using RTI bindings (requires run-time license)\ndnp3-master       - maps openFMB to the master side of the DNP3 protocol\ndnp3-outstation   - maps openFMB to the outstation side of the DNP3 protocol\nlog               - pretty prints profiles to the log\nmodbus-master     - maps OpenFMB to the Modbus protocol\nmodbus-outstation - maps the Modbus protocol to OpenFMB\nmqtt              - publish/subscribe to a MQTT broker\nnats              - publish/subscribe to a NATS server\nreplay            - replays captured OpenFMB messages from a file\ntimescaledb       - saves all the published messages to a TimescaleDB\n")),(0,r.kt)("h2",{id:"version"},"Version"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"git")," commit date and hash of the code compiled in this instance of the adapter can be listed\nusing the ",(0,r.kt)("inlineCode",{parentName:"p"},"-v")," flag. The hash can be used on GitHub to retrieve the exact code used, simply go to\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://github.com/openenergysolutions/openfmb.adapters/commit/{HASH}"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openfmb-adapter -v\n")),(0,r.kt)("p",null,"or with Docker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm oesinc/openfmb.adapters -v\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git commmit date: 2019-10-10\ngit commmit hash: d97428d36b3c311004deac38936573fc67237f0e\n")))}d.isMDXComponent=!0}}]);