(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(120)),o={sidebar_position:3},l={unversionedId:"adapter/cli",id:"adapter/cli",isDocsHomePage:!1,title:"CLI",description:"The command-line interface (CLI) to the adapter provides some helpful commands including:",source:"@site/docs/adapter/cli.md",sourceDirName:"adapter",slug:"/adapter/cli",permalink:"/openfmb.docs/docs/adapter/cli",editUrl:"https://github.com/openenergysolutions/openfmb.docs/edit/develop/website/docs/adapter/cli.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Protos",permalink:"/openfmb.docs/docs/adapter/protos"},next:{title:"Schemas",permalink:"/openfmb.docs/docs/adapter/schemas"}},p=[{value:"Help",id:"help",children:[]},{value:"Generate top-level configuration",id:"generate-top-level-configuration",children:[]},{value:"Generate configuration for a plugin",id:"generate-configuration-for-a-plugin",children:[]},{value:"Generate configuration JSON schemas",id:"generate-configuration-json-schemas",children:[]},{value:"Running the adapter",id:"running-the-adapter",children:[]},{value:"List plugins",id:"list-plugins",children:[]},{value:"Version",id:"version",children:[]}],c={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The command-line interface (CLI) to the adapter provides some helpful commands including:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"show all available commands (help)"),Object(i.b)("li",{parentName:"ul"},"run the adapter"),Object(i.b)("li",{parentName:"ul"},"generate a default top-level config file"),Object(i.b)("li",{parentName:"ul"},"generate a default protocol-specific config file for specified profiles"),Object(i.b)("li",{parentName:"ul"},"list all the provided protocol plugins")),Object(i.b)("h2",{id:"help"},"Help"),Object(i.b)("p",null,"Prints a short description of all the available commands and parameters."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"> openfmb-adapter -h\n")),Object(i.b)("p",null,"Result:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"Options\n\n    -h, --help\n        show this help message\n    -l, --list\n        list available plugins\n    -v, --version\n        display version information\n    -c, --config\n        run with the specified config file\n    -g, --generate\n        generate the specified config file\n    -s, --schema\n        generate a JSON schema\n    -p, --plugin\n        the plugin for which to generate configuration\n    -f, --profile\n        profile to generate\n")),Object(i.b)("h2",{id:"generate-top-level-configuration"},"Generate top-level configuration"),Object(i.b)("p",null,"A default top-level configuration may be generated using the ",Object(i.b)("inlineCode",{parentName:"p"},"-g")," flag. This is the file that will be needed when\nrunning the adapter (see ",Object(i.b)("a",{parentName:"p",href:"#running-the-adapter"},"Running the adapter"),")."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"> openfmb-adapter -g config.yml\n")),Object(i.b)("h2",{id:"generate-configuration-for-a-plugin"},"Generate configuration for a plugin"),Object(i.b)("p",null,"Some plugins, notably the adapter-type protocol plugins, need extra configuration in\nseparate files. The output file is specified with the ",Object(i.b)("inlineCode",{parentName:"p"},"-g")," argument, the plugin\nfor which the config is generated is specified with the ",Object(i.b)("inlineCode",{parentName:"p"},"-p")," argument and the\ndesired profile is specified with the ",Object(i.b)("inlineCode",{parentName:"p"},"-f")," argument."),Object(i.b)("p",null,"Note that multiple profiles can be generated for a single configuration file by providing\nmultiple ",Object(i.b)("inlineCode",{parentName:"p"},"-f")," parameters:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"> openfmb-adapter -g dnp3-master.yml -p dnp3-master -f SolarReadingProfile -f SolarStatusProfile\n")),Object(i.b)("h2",{id:"generate-configuration-json-schemas"},"Generate configuration JSON schemas"),Object(i.b)("p",null,"Each YAML configuration file has JSON schemas that can be printed to a file to\nhelp writing valid configurations."),Object(i.b)("p",null,"To generate the top-level schema, run the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"> openfmb-adapter -s config.json\n")),Object(i.b)("p",null,"To generate the schema for a particular plugin, run the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"> openfmb-adapter -s dnp3-master.json -p dnp3-master\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"--pretty-print")," argument can also be used to produce human-readable schema\nfiles. Note that these files are particularly large for plugins and\npretty-printing should be used only for debugging purposes."),Object(i.b)("p",null,"To learn how to leverage these schemas in your editing environment, see the\n",Object(i.b)("a",{parentName:"p",href:"/openfmb.docs/docs/adapter/schemas"},"Schemas")," page."),Object(i.b)("h2",{id:"running-the-adapter"},"Running the adapter"),Object(i.b)("p",null,"The adapter is run using the ",Object(i.b)("inlineCode",{parentName:"p"},"-c")," flag. To stop the adapter, hit Ctrl-C on the keyboard."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"> openfmb-adapter -c [config.yml]\n")),Object(i.b)("h2",{id:"list-plugins"},"List plugins"),Object(i.b)("p",null,"All available plugins compiled in this instance of the adapter can be listed using the ",Object(i.b)("inlineCode",{parentName:"p"},"-l")," flag."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"> openfmb-adapter -l\n")),Object(i.b)("p",null,"Result:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"available plugins:\n\ncapture           - captures published OpenFMB messages to a replayable file format\ndds-rti           - publish/subscribe to DDS using RTI bindings (requires run-time license)\ndnp3-master       - maps openFMB to the master side of the DNP3 protocol\ndnp3-outstation   - maps openFMB to the outstation side of the DNP3 protocol\ngoose-pub         - maps GOOSE protocol messages to OpenFMB\ngoose-sub         - maps OpenFMB messages to the GOOSE protocol\nlog               - pretty prints profiles to the log\nmodbus-master     - maps OpenFMB to the Modbus protocol\nmodbus-outstation - maps the Modbus protocol to OpenFMB\nmqtt              - publish/subscribe to a MQTT broker\nnats              - publish/subscribe to a NATS server\nreplay            - replays captured OpenFMB messages from a file\ntimescaledb       - saves all the published messages to a TimescaleDB\n")),Object(i.b)("h2",{id:"version"},"Version"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"git")," commit date and hash of the code compiled in this instance of the adapter can be listed\nusing the ",Object(i.b)("inlineCode",{parentName:"p"},"-v")," flag. The hash can be used on GitHub to retrieve the exact code used, simply go to\n",Object(i.b)("inlineCode",{parentName:"p"},"https://github.com/openenergysolutions/openfmb.adapters/commit/{HASH}"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"openfmb-adapter -v\n")),Object(i.b)("p",null,"Result:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"git commmit date: 2019-10-10\ngit commmit hash: d97428d36b3c311004deac38936573fc67237f0e\n")))}s.isMDXComponent=!0},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);