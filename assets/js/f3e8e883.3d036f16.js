(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{114:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return c}));var a=t(3),i=t(7),r=(t(0),t(120)),o={sidebar_label:"Extending",sidebar_position:9},l={unversionedId:"adapter/extending",id:"adapter/extending",isDocsHomePage:!1,title:"Creating a new plugin",description:"Internal architecture",source:"@site/docs/adapter/extending.md",sourceDirName:"adapter",slug:"/adapter/extending",permalink:"/openfmb.docs/docs/adapter/extending",editUrl:"https://github.com/openenergysolutions/openfmb.docs/edit/develop/website/docs/adapter/extending.md",version:"current",sidebar_label:"Extending",sidebarPosition:9,frontMatter:{sidebar_label:"Extending",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Log plugin",permalink:"/openfmb.docs/docs/adapter/other-plugins/log"},next:{title:"Scheduling",permalink:"/openfmb.docs/docs/adapter/misc/scheduling"}},s=[{value:"Native vs legacy plugins",id:"native-vs-legacy-plugins",children:[]},{value:"Creating a plugin",id:"creating-a-plugin",children:[]}],p={toc:s};function c(e){var n=e.components,o=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,o,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Internal architecture"),Object(r.b)("p",null,'The internal architecture of the OpenFMB adapter consists of an internal publisher/subscriber\nmessage bus and a plugin registry. Each OpenFMB profile has its own "channel" on the bus, and\nthe generated C++ protobuf objects are the canonical model used within the application to pass\ndata between plugins. At startup, all plugins are initialized based on configuration files.\nDuring initialization, plugins may subscribe to the internal message bus to receive profiles\nwhen published by another plugin. Once all plugins are loaded, they are started. From this point,\nplugins may publish profiles to the internal message bus. All plugins that subscribed for this\ntype of message will get notified of the new message and will be able to forward it to the external\nworld.'),Object(r.b)("p",null,"The following diagram shows an example of how the adapter works:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Adapter acting as a protocol translator",src:t(137).default})),Object(r.b)("h2",{id:"native-vs-legacy-plugins"},"Native vs legacy plugins"),Object(r.b)("p",null,"Native plugins are OpenFMB aware, i.e. they use the OpenFMB model coupled to a messsaging transport\ndefined by the OpenFMB standard (e.g. NATs/ MQTT / etc). The messages are directly serialized/deserialized\noff the wire as OpenFMB models and don't require a custom mapping. For example, the NATS plugin reads\nand writes the OpenFMB messages in their Protobuf representation and sends/receives them to/from a NATS broker.\nSimilarly, the DDS plugin directly (de)serializes the OpenFMB messages directly from the DDS representation."),Object(r.b)("p",null,"Legacy plugins need a custom mapping to translate OpenFMB messages to/from the\nunderlying protocol. For example, the DNP3 master plugin needs to transform\nOpenFMB control messages to DNP3 commands. It also maps measurement readings\nfrom DNP3 points to OpenFMB values, sometimes performing scaling. These\ntransformations requires the user to write mapping files to transform the values\nread from DNP3 points to OpenFMB values and vice versa."),Object(r.b)("h2",{id:"creating-a-plugin"},"Creating a plugin"),Object(r.b)("p",null,"The first step to create a plugin is to add a new CMake target that links to\n",Object(r.b)("inlineCode",{parentName:"p"},"adapter-util"),". Preferably, the compilation of this new target should be\nconditional on some CMake variable. Refer to the ",Object(r.b)("inlineCode",{parentName:"p"},"CMakeLists.txt")," of the existing\nplugins as a template."),Object(r.b)("p",null,"The target must expose an implementation of the top level C++ API class ",Object(r.b)("inlineCode",{parentName:"p"},"IPluginFactory"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},'/**\n* Top level API class for creating a new plugin\n*/\nclass IPluginFactory {\npublic:\n    virtual ~IPluginFactory() = default;\n\n    // unique name of the plugin\n    virtual std::string name() const = 0;\n\n    // description of the plugin\n    virtual std::string description() const = 0;\n\n    // JSON schema for top-level configuration file\n    virtual schema::Object get_plugin_schema() const = 0;\n\n    // JSON schema for the mapping files, the per-profile schema\n    virtual std::vector<schema::property_ptr_t> get_session_schema() const\n    {\n        throw api::Exception(name(), "does not support writing session configuration");\n    }\n\n    // JSON schema for a particular profile\n    virtual std::vector<schema::property_ptr_t> get_profile_schema(const std::string& profile) const\n    {\n        throw api::Exception(name(), "does not support writing session configuration");\n    }\n\n    // returns a `api::IPlugin` for the plugin\n    virtual std::unique_ptr<IPlugin> create(const YAML::Node& node, const Logger& logger, message_bus_t bus) = 0;\n};\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"get_plugin_schema"),":\nFor native plugins, it generally includes information to connect to the\nbroker. For legacy plugins, it generally includes global configuration and an\narray of YAML templates. ",Object(r.b)("inlineCode",{parentName:"p"},"util::yaml::get_template_schema")," is useful to create\nthe JSON schema of such templates.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"get_session_schema"),": returns the JSON schema of the mapping files, without\nthe per-profile schema. For legacy plugins, this generally includes\ninformation to connect to the legacy device and other shared information\nacross the profile mappings. This method should not be\nimplemented for native plugins.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"get_profile_schema"),": returns the JSON schema for a particular profile. When\ngenerating JSON schemas, this callback will be called for every profile. For\nlegacy plugins, you should use ",Object(r.b)("inlineCode",{parentName:"p"},"api::ProfileRegistry::handle_by_name")," and a\n",Object(r.b)("inlineCode",{parentName:"p"},"SchemaWriteVisitorBase")," to visit the profile and write the schema for each\nfield. This method should not be implemented for native plugins."))),Object(r.b)("p",null,"You should then an implementation of ",Object(r.b)("inlineCode",{parentName:"p"},"api::IPlugin")," to return when ",Object(r.b)("inlineCode",{parentName:"p"},"IPluginFactory::create(..)")," is called:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"class IPlugin {\n    public:\n        virtual ~IPlugin() = default;\n\n        // supplies the same name as the factory\n        virtual std::string name() const = 0;\n\n        // start the execution of the adapter\n        virtual void start() = 0;\n    };\n")),Object(r.b)("p",null,"The constructor will take the YAML node of the plugin, a logger and the internal message\nbus. It should read the configuration and subscribe to the required messages on\nthe message bus if necessary. The ",Object(r.b)("inlineCode",{parentName:"p"},"start")," method is called once all the plugins\nare created. This is where the plugin should start listening for incoming\nmessages to relay/interpret. This method is synchronous, so it should generally\nspawn a background thread or use another library callback mechanism to subscribe\nfor messages and return immediately. The destructor should gracefully stop\nlistening and wait for any background threads created."),Object(r.b)("p",null,"For legacy plugins, the ",Object(r.b)("inlineCode",{parentName:"p"},"api::IPlugin")," implementation should read mapping\nconfiguration from templated YAML files. The ",Object(r.b)("inlineCode",{parentName:"p"},"util::yaml::load_template_configs"),"\ncan be used to automatically read the templated YAML files with the values\nproperly replaced. Then, for each profile, ",Object(r.b)("inlineCode",{parentName:"p"},"api::ProfileRegistry::handle_by_name"),"\ncan be used with a ",Object(r.b)("inlineCode",{parentName:"p"},"SubscribingConfigReadVisitorBase")," or a ",Object(r.b)("inlineCode",{parentName:"p"},"PublishingConfigReadVisitorBase")," to\nnavigate the profile mappings and build the internal representation of the\nmappings."),Object(r.b)("p",null,"The final step of adding your plugin to the application is putting it in the\n",Object(r.b)("inlineCode",{parentName:"p"},"PluginRegistry")," of the ",Object(r.b)("inlineCode",{parentName:"p"},"application")," target. Conditional compilation should\nbe use to include the plugin only when a particular CMake variable is set."))}c.isMDXComponent=!0},120:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),c=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},g=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),g=a,b=u["".concat(o,".").concat(g)]||u[g]||d[g]||r;return t?i.a.createElement(b,l(l({ref:n},p),{},{components:t})):i.a.createElement(b,l({ref:n},p))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},137:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/protocol-translator-9bd96e43bef4d1aed7df755009585f57.svg"}}]);