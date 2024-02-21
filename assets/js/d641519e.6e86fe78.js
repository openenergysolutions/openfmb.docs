"use strict";(self.webpackChunkopenfmb_docs=self.webpackChunkopenfmb_docs||[]).push([[7657],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:3},a="Setting up the HMI",l={unversionedId:"hmi/configuration",id:"hmi/configuration",title:"Setting up the HMI",description:"To setup the HMI, do the following:",source:"@site/docs/hmi/configuration.md",sourceDirName:"hmi",slug:"/hmi/configuration",permalink:"/docs/hmi/configuration",draft:!1,editUrl:"https://github.com/openenergysolutions/openfmb.docs/edit/develop/website/docs/hmi/configuration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Docker Image",permalink:"/docs/hmi/docker"},next:{title:"Run the HMI",permalink:"/docs/hmi/run"}},p={},s=[],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-the-hmi"},"Setting up the HMI"),(0,o.kt)("p",null,"To setup the HMI, do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"First create an application configuration file.  For this tutorial, we name the file ",(0,o.kt)("inlineCode",{parentName:"p"},"app.toml"),".  From your working directory, create a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"app.toml"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use your favorite text editor program, open ",(0,o.kt)("inlineCode",{parentName:"p"},"app.toml")," and paste in the following configuration:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[hmi]\napp_name = "OpenFMB HMI"        # name of the application\nenvironment = "dev"             # dev or prod refering to nats.dev_uri or nats.prod_uri accordingly\nlog-level = "Debug"             # Off, Error, Info, Debug, Trace\n# server_host = "0.0.0.0"       # For docker run, this should be "0.0.0.0", for local debugging, \n                                # this needs to match the host computer\'s ip address\n# server_port = 80              # default is 443 for https and 80 for http\n# comment out these two ssl related items if TLS is needed\n# ssl_cert = "/server/certs/server/server-cert.pem"\n# ssl_key = "/server/certs/server/server-key.pem"\n\n[nats]\nprod_uri = "10.0.0.1:4222"      # NATS broker connection URL.  IF environment = "prod", this URL shall be used\ndev_uri = "192.168.86.1:4222"   # NATS broker connection URL.  IF environment = "dev", this URL shall be used\n# authentication_type = "creds" # comment out to enable NATS credential authentication type\n# creds = "meter.creds"         # comment out to specify NATS credentials file\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"There is a quick switch between ",(0,o.kt)("inlineCode",{parentName:"li"},"prod")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"dev")," environment.  Specify ",(0,o.kt)("inlineCode",{parentName:"li"},"prod_uri")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"dev_uri")," according to what is set for ",(0,o.kt)("inlineCode",{parentName:"li"},"environment")),(0,o.kt)("li",{parentName:"ol"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"hmi.environment")," is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"prod"),", update the ",(0,o.kt)("inlineCode",{parentName:"li"},"nats.prod_uri")," to the NATS connection URL that you want to connect to. Otherwise, update the ",(0,o.kt)("inlineCode",{parentName:"li"},"nats.dev_uri"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"sever_host")," should be set to ",(0,o.kt)("inlineCode",{parentName:"li"},"0.0.0.0")," to bind to all network interfaces.  If you want to bind to a specific network interface, set ",(0,o.kt)("inlineCode",{parentName:"li"},"server-host")," to the IP address associated with that interface.")))}u.isMDXComponent=!0}}]);