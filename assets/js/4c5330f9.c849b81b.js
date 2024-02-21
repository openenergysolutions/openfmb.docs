"use strict";(self.webpackChunkopenfmb_docs=self.webpackChunkopenfmb_docs||[]).push([[2700],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},s="NATS",o={unversionedId:"adapter/native-plugins/nats",id:"adapter/native-plugins/nats",title:"NATS",description:"NATS is a lightweight messaging protocol used to publish/subscribe OpenFMB profiles to/from a NATS server.",source:"@site/docs/adapter/native-plugins/nats.md",sourceDirName:"adapter/native-plugins",slug:"/adapter/native-plugins/nats",permalink:"/docs/adapter/native-plugins/nats",draft:!1,editUrl:"https://github.com/openenergysolutions/openfmb.docs/edit/develop/website/docs/adapter/native-plugins/nats.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/adapter/config"},next:{title:"MQTT",permalink:"/docs/adapter/native-plugins/mqtt"}},l={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Security",id:"security",level:2},{value:"Server Authentication + User/Password",id:"server-authentication--userpassword",level:3},{value:"TLS Mutual Authentication",id:"tls-mutual-authentication",level:3},{value:"JWTs",id:"jwts",level:3},{value:"Static accounts configuration",id:"static-accounts-configuration",level:4},{value:"Using an external account resolver",id:"using-an-external-account-resolver",level:4}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nats"},"NATS"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://nats.io/"},"NATS")," is a lightweight messaging protocol used to publish/subscribe OpenFMB profiles to/from a NATS server. "),(0,r.kt)("p",null,"NATS uses a topic hierarchy delimited by periods. Within the context of OpenFMB, the topic name takes the following form: "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"openfmb.<module name>.<profile name>.<subject name>")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<subject name>")," may be a ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," wildcard or the ConductingEquipment\n",(0,r.kt)("inlineCode",{parentName:"p"},"mRID"),". All messages published to the NATS server will use the fully qualified\ntopic name including the mRID."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'nats:\n  enabled: true\n  max-queued-messages: 100  # how many messages to buffer before discarding the oldest\n  connect-url: nats://localhost:4222\n  connect-retry-seconds: 5\n  security:\n    security-type: none\n  publish:  # to the NATs broker\n    - profile: SwitchReadingProfile\n      subject: "*"  # * or an mRID\n    - profile: SwitchStatusProfile\n      subject: "87c73d56-b9ab-4a5c-8cd6-cf603490e3e4"  # * or an mRID\n  subscribe:  # from the NATs broker\n    - profile: SwitchControlProfile\n      subject: "*"  # * or an mRID\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enabled"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")," to enable NATS plugin, ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," to disable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max-queued-messages"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of messages to keep in the publishing queue before discarding the oldest.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connect-url"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection address of the NATS server. The protocol can be ",(0,r.kt)("inlineCode",{parentName:"td"},"nats")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"tls"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connect-retry-seconds"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of seconds to wait before trying to re-establish a connection to the server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"security"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#security"},"Security"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"publish"),(0,r.kt)("td",{parentName:"tr",align:null},"List of profiles to publish to NATS server (from the internal bus to NATS)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subscribe"),(0,r.kt)("td",{parentName:"tr",align:null},"List of profiles to subscribe from the NATS server (from NATS to the internal bus)")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"publish")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," section specify lists of profiles, the profile name (",(0,r.kt)("inlineCode",{parentName:"p"},"profile"),"), and which equipment you want to publish/subscribe to (",(0,r.kt)("inlineCode",{parentName:"p"},"subject"),"). The subject name can either be ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," to publish/subscribe to all the\nprofiles, or a specific ConductingEquipment mRID."),(0,r.kt)("h2",{id:"security"},"Security"),(0,r.kt)("p",null,"The connection to a NATS server may optionally be secured using TLS."),(0,r.kt)("p",null,"The required contents of the ",(0,r.kt)("inlineCode",{parentName:"p"},"security")," section depends on the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"security-type"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="none"',tab:'"none"'},"security:\n  security-type: none\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="tls_server_auth"',tab:'"tls_server_auth"'},"security:\n  security-type: tls_server_auth\n  ca-trusted-cert-file: server_cert.pem\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'tab="tls_mutual_auth"',tab:'"tls_mutual_auth"'},"security:\n  security-type: tls_mutual_auth\n  ca-trusted-cert-file: server_cert.pem\n  client-private-key-file: client_key.pem\n  client-cert-chain-file: client_cert.pem\n")),(0,r.kt)("p",null,"If no security is needed, the ",(0,r.kt)("inlineCode",{parentName:"p"},"security-type")," can be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"none"),"."),(0,r.kt)("p",null,"To learn how to produce self-signed certificates with OpenSSL, check\n",(0,r.kt)("a",{parentName:"p",href:"/docs/adapter/misc/self-signed"},"Self-signed certificates"),"."),(0,r.kt)("h3",{id:"server-authentication--userpassword"},"Server Authentication + User/Password"),(0,r.kt)("p",null,"In this mode, the client authenticates the server using a certificate, and then the server authenticates the client using a username and password sent over the encrypted TLS channel. "),(0,r.kt)("p",null,"Authorization for each user can be specified in the config file of the NATS server. See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nats.io/nats-server/configuration/securing_nats/authorization"},"this page"),"\nfor more details."),(0,r.kt)("p",null,"The server must run with a TLS certificate, a username and a password in this\nmode:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nats-server --tls --tlscert ~/certs/server_cert.pem --tlskey ~/certs/server_key.pem --user username --pass password\n")),(0,r.kt)("p",null,"The Adapter is configured to authenticate the server using a trusted root certificate or self-signed certificate of the broker. The username and the password are embedded in the connection URL. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"nats:\n  enabled: true\n  max-queued-messages: 100  # how many messages to buffer before discarding the oldest\n  connect-url: nats://username:password@localhost:4222\n  connect-retry-seconds: 5\n  security:\n    security-type: tls_server_auth\n    ca-trusted-cert-file: server_cert.pem\n  # ...\n")),(0,r.kt)("h3",{id:"tls-mutual-authentication"},"TLS Mutual Authentication"),(0,r.kt)("p",null,"In this mode, the client and the server mutually authenticate one another using\ncertificates."),(0,r.kt)("p",null,"The server must run with a TLS certificate and must validate the client\ncertificate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nats-server --tlsverify --tlscert ~/certs/server_cert.pem --tlskey ~/certs/server_key.pem --tlscacert ~/certs/client_cert.pem\n")),(0,r.kt)("p",null,"The Adapter is configured to perform mutual authentication and is provided with the paths to the server certificate, the client's private key, and a certificate chain file that, at a minimum, contains the client's self-signed certificate. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"nats:\n  enabled: true\n  max-queued-messages: 100  # how many messages to buffer before discarding the oldest\n  connect-url: nats://localhost:4222\n  connect-retry-seconds: 5\n  security:\n    security-type: tls_mutual_auth\n    ca-trusted-cert-file: server_cert.pem\n    client-private-key-file: client_key.pem\n    client-cert-chain-file: client_cert.pem\n  # ...\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The username/password is not required when using TLS mutual authentication, but the two modes are not mutually exclusive, either. You can do server-only authentication without any credentials (client not authenticated), and you can require username/password server-side even with TLS mutual authentication. ")),(0,r.kt)("h3",{id:"jwts"},"JWTs"),(0,r.kt)("p",null,"A NATS client can prove its permission to the server by providing a JSON Web Token (JWT). It is possible to specify the token with the ",(0,r.kt)("inlineCode",{parentName:"p"},"jwt-creds-file"),"\nparameter. This feature can be used alone, with server-only authentication, or with mutual authentication."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Using JWT only ensures that the client has permissions attested to with the token. It does not protect the communications from tampering or inspection in the same way that TLS does. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"nats:\n  enabled: true\n  max-queued-messages: 100  # how many messages to buffer before discarding the oldest\n  connect-url: nats://localhost:4222\n  connect-retry-seconds: 5\n  security:\n    security-type: none\n    jwt-creds-file: C:/Users/johndoe/.nkeys/OperatorName/accounts/AccountName/users/UserName.creds\n")),(0,r.kt)("p",null,"The NATS server must be configured to authenticate the JWT with the appropriate key and know all the accounts that exist. "),(0,r.kt)("h4",{id:"static-accounts-configuration"},"Static accounts configuration"),(0,r.kt)("p",null,"To statically list all the accounts, run the following: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nsc generate config --mem-resolver --config-file auth.conf --operator-jwt operator.jwt\n")),(0,r.kt)("p",null,"It will generate a ",(0,r.kt)("inlineCode",{parentName:"p"},"auth.conf")," similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'operator: "D:\\\\Desktop\\\\openfmb_deps\\\\operator.jwt"\nresolver: MEMORY\nresolver_preload: {\n  ABN6Q3CJCJD6IV3WYASVHK4WGEHO6GNKLK5SRVFBXZL2XQB6UXLFIATQ: eyJ0eXAiOiJqd3QiLCJhbGciOiJlZDI1NTE5In0.eyJqdGkiOiJPTVZBVlpUTUZOSEtGU0lIQVhDTUFRWVZYVjNXUE5NUjdMVkVJV1FIQVlKMktHVVdUQ0pBIiwiaWF0IjoxNTY1ODc1NzM4LCJpc3MiOiJPQk1WU0VYNFZST1ZOUjNKSFlFWU1BRjNNWDdFN1dKSkROUVFCTU1WRDI1MlJNWkc2SzVLMkhWWCIsIm5hbWUiOiJUZXN0QWNjb3VudCIsInN1YiI6IkFCTjZRM0NKQ0pENklWM1dZQVNWSEs0V0dFSE82R05LTEs1U1JWRkJYWkwyWFFCNlVYTEZJQVRRIiwidHlwZSI6ImFjY291bnQiLCJuYXRzIjp7ImxpbWl0cyI6eyJzdWJzIjotMSwiY29ubiI6LTEsImxlYWYiOi0xLCJpbXBvcnRzIjotMSwiZXhwb3J0cyI6LTEsImRhdGEiOi0xLCJwYXlsb2FkIjotMSwid2lsZGNhcmRzIjp0cnVlfX19.POiZG4gp0EOy0mjF6MhHG1stGyR7iR6DQVYP2v3h2ZE1Hr1hM2CVcHC0g2fE572jNXIrUyLLIw0_8hUXJvQNCQ\n}\n')),(0,r.kt)("p",null,"Simply include it in the NATS main config file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"include ./auth.conf\n")),(0,r.kt)("h4",{id:"using-an-external-account-resolver"},"Using an external account resolver"),(0,r.kt)("p",null,"A ready-to-use HTTP account resolver is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nats-io/nats-account-server"},"available"),"."),(0,r.kt)("p",null,"In the NATS config file, add the following lines:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"operator: C:\\\\Users\\\\johndoe\\\\.nkeys\\\\OperatorName\\\\OperatorName.jwt\nresolver: URL(http://localhost:9090/jwt/v1/accounts/)\n")))}d.isMDXComponent=!0}}]);