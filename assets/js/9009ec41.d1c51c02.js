(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{120:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),u=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||i;return n?a.a.createElement(m,s(s({ref:t},o),{},{components:n})):a.a.createElement(m,s({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var o=2;o<i;o++)c[o]=n[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(120)),c={sidebar_position:2},s={unversionedId:"adapter/native-plugins/mqtt",id:"adapter/native-plugins/mqtt",isDocsHomePage:!1,title:"MQTT",description:"MQTT is a lightweight m2m pub/sub messaging protocol mainly",source:"@site/docs/adapter/native-plugins/mqtt.md",sourceDirName:"adapter/native-plugins",slug:"/adapter/native-plugins/mqtt",permalink:"/docs/adapter/native-plugins/mqtt",editUrl:"https://github.com/openenergysolutions/openfmb.docs/edit/develop/website/docs/adapter/native-plugins/mqtt.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"NATS",permalink:"/docs/adapter/native-plugins/nats"},next:{title:"DDS",permalink:"/docs/adapter/native-plugins/dds"}},l=[{value:"Configuration",id:"configuration",children:[]},{value:"Security",id:"security",children:[{value:"Server authentication + user/password",id:"server-authentication--userpassword",children:[]},{value:"Mutual authentication",id:"mutual-authentication",children:[]}]}],o={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"http://mqtt.org/"},"MQTT")," is a lightweight m2m pub/sub messaging protocol mainly\nused for IoT communication."),Object(i.b)("p",null,"The protocol uses a topic structure delimited by forward slahses ",Object(i.b)("inlineCode",{parentName:"p"},"/"),". OpenFMB\ntopics names conform to the pattern:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"openfmb/<module name>/<profile name>/<subject name>\n")),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'mqtt:\n  enabled: false\n  max-queued-messages: 100  # how many messages to buffer before discarding the oldest\n  server-address: tcp://localhost:1883\n  client-id: client1\n  connect-retry-delay-ms: 5000\n  security:\n    security-type: none\n  publish:  # to the MQTT broker\n    - profile: SwitchReadingProfile\n      topic-suffix: "*"  # * or an mRID\n    - profile: SwitchStatusProfile\n      topic-suffix: "*"  # * or an mRID\n  subscribe:  # from the MQTT broker\n    - profile: SwitchControlProfile\n      topic-suffix: "*"  # * or an mRID\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Parameter"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"enabled"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"true")," to enable MQTT plugin, ",Object(i.b)("inlineCode",{parentName:"td"},"false")," to disable.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"max-queued-messages"),Object(i.b)("td",{parentName:"tr",align:null},"Number of messages to keep in the publishing queue before discarding the oldest.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"server-address"),Object(i.b)("td",{parentName:"tr",align:null},"Connection address of the MQTT server. The protocol can be ",Object(i.b)("inlineCode",{parentName:"td"},"tcp")," or ",Object(i.b)("inlineCode",{parentName:"td"},"ssl"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"client-id"),Object(i.b)("td",{parentName:"tr",align:null},"Client ID. Must be ",Object(i.b)("strong",{parentName:"td"},"unique")," per client and broker.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"connect-retry-delay-ms"),Object(i.b)("td",{parentName:"tr",align:null},"Number of milliseconds to wait before trying to re-establish a connection to the server.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"security"),Object(i.b)("td",{parentName:"tr",align:null},"See ",Object(i.b)("a",{parentName:"td",href:"#security"},"Security"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"publish"),Object(i.b)("td",{parentName:"tr",align:null},"List of profiles to publish to MQTT network (from the internal bus to MQTT)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"subscribe"),Object(i.b)("td",{parentName:"tr",align:null},"List of profiles to subscribe from the MQTT network (from MQTT to the internal bus)")))),Object(i.b)("p",null,"For the ",Object(i.b)("inlineCode",{parentName:"p"},"publish")," and ",Object(i.b)("inlineCode",{parentName:"p"},"subscribe")," parameters, a list of profiles is specified.\nYou need to provide both the profile name (",Object(i.b)("inlineCode",{parentName:"p"},"profile"),") and which equipment you\nwant to publish/subscribe to (",Object(i.b)("inlineCode",{parentName:"p"},"subject"),"). The subject name can either be ",Object(i.b)("inlineCode",{parentName:"p"},"*")," to\npublish/subscribe to all the profiles, or a specific conducting equipment mRID."),Object(i.b)("h2",{id:"security"},"Security"),Object(i.b)("p",null,"The content of the ",Object(i.b)("inlineCode",{parentName:"p"},"security")," section depends on the ",Object(i.b)("inlineCode",{parentName:"p"},"security-type")," value."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="none"',tab:'"none"'},"security:\n  security-type: none\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="tls_server_auth"',tab:'"tls_server_auth"'},'security:\n  security-type: tls_server_auth\n  ca-trusted-cert-file: server_cert.pem\n  username: "username"\n  password: "password"\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="tls_mutual_auth"',tab:'"tls_mutual_auth"'},"security:\n  security-type: tls_mutual_auth\n  ca-trusted-cert-file: server_cert.pem\n  client-private-key-file: client_key.pem\n  client-cert-chain-file: client_cert.pem\n")),Object(i.b)("p",null,"If no security is needed, the ",Object(i.b)("inlineCode",{parentName:"p"},"security-type")," can be set to ",Object(i.b)("inlineCode",{parentName:"p"},"none"),"."),Object(i.b)("p",null,"To learn how to produce self-signed certificates with OpenSSL, check\n",Object(i.b)("a",{parentName:"p",href:"/docs/adapter/misc/self-signed"},"Self-signed certificates"),"."),Object(i.b)("h3",{id:"server-authentication--userpassword"},"Server authentication + user/password"),Object(i.b)("p",null,"The server must run with a TLS certificate, a username and a password. In the\n",Object(i.b)("inlineCode",{parentName:"p"},"mosquitto.conf"),", add the following lines:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"cafile ~/certs/client_cert.pem\ncertfile ~/certs/server_cert.pem\nkeyfile ~/certs/server_key.pem\npassword_file /etc/mosquitto/passwd\nallow_anonymous false\n")),Object(i.b)("p",null,"And generate the ",Object(i.b)("inlineCode",{parentName:"p"},"passwd")," file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"> sudo mosquitto_passwd -c /etc/mosquitto/passwd username\n")),Object(i.b)("p",null,"Finally, configure the adapter to establish a TLS encrypted session, accepting\nonly the certificate. The username and the password are embedded in the\nconnection URL."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'mqtt:\n  enabled: true\n  max-queued-messages: 100  # how many messages to buffer before discarding the oldest\n  server-address: ssl://localhost:1883\n  client-id: client1\n  connect-retry-delay-ms: 5000\n  security:\n    security-type: tls_server_auth\n    ca-trusted-cert-file: server_cert.pem\n    username: "username"\n    password: "password"\n  # ...\n')),Object(i.b)("h3",{id:"mutual-authentication"},"Mutual authentication"),Object(i.b)("p",null,"The server must run with a TLS certificate and must validate the client\ncertificate. In the ",Object(i.b)("inlineCode",{parentName:"p"},"mosquitto.conf"),", add the following lines:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"cafile ~/certs/client_cert.pem\ncertfile ~/certs/server_cert.pem\nkeyfile ~/certs/server_key.pem\nrequire_certificate true\n#password_file /etc/mosquitto/passwd\n#allow_anonymous false\n")),Object(i.b)("p",null,"If you want to require username/password in addition to mutual authentication,\nde-comment the last two lines."),Object(i.b)("p",null,"And configure the adapter to establish a TLS encrypted session with mutual\nauthentication."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'mqtt:\n  enabled: true\n  max-queued-messages: 100  # how many messages to buffer before discarding the oldest\n  server-address: ssl://localhost:1883\n  client-id: client1\n  connect-retry-delay-ms: 5000\n  security:\n    security-type: tls_mutual_auth\n    ca-trusted-cert-file: server_cert.pem\n    client-private-key-file: client_key.pem\n    client-cert-chain-file: client_cert.pem\n    #username: "username"\n    #password: "password"\n  # ...\n')),Object(i.b)("p",null,"If a username/password is required, then uncomment the last two lines."))}u.isMDXComponent=!0}}]);