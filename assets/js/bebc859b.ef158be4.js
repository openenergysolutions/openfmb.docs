"use strict";(self.webpackChunkopenfmb_docs=self.webpackChunkopenfmb_docs||[]).push([[9259],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=m(n),d=o,f=s["".concat(l,".").concat(d)]||s[d]||c[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var m=2;m<i;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2755:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return u},default:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],p={sidebar_position:4},l="Run the HMI",m={unversionedId:"hmi/run",id:"hmi/run",title:"Run the HMI",description:"To run the OpenFMB HMI Docker image, we need to pass in two environment variables:",source:"@site/docs/hmi/run.md",sourceDirName:"hmi",slug:"/hmi/run",permalink:"/docs/hmi/run",editUrl:"https://github.com/openenergysolutions/openfmb.docs/edit/develop/website/docs/hmi/run.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Setting up the HMI",permalink:"/docs/hmi/configuration"},next:{title:"Referenced Setup",permalink:"/docs/hmi/sld"}},u=[],c={toc:u};function s(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"run-the-hmi"},"Run the HMI"),(0,i.kt)("p",null,"To run the OpenFMB HMI Docker image, we need to pass in two environment variables:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"APP_CONF"),": Path to application configuration file (in our case, it is the ",(0,i.kt)("inlineCode",{parentName:"p"},"app.toml")," in previous section)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"APP_DIR_NAME"),": Application directory where Docker mounted volume is specified (",(0,i.kt)("inlineCode",{parentName:"p"},"-v")," option in ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run")," command).  This directory is where all single-line diagrams that you create later in this tutorial will be stored."))),(0,i.kt)("p",null,"Suppose that you created the ",(0,i.kt)("inlineCode",{parentName:"p"},"app.toml")," file in ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/joe/hmi")," directory, and you want to mount and point ",(0,i.kt)("inlineCode",{parentName:"p"},"APP_DIR_NAME")," to it. Run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"> docker run -d -p 32771:32771 -e APP_CONF=/server/app.toml -e APP_DIR_NAME=/server -v /home/joe/oes:/server openfmb.hmi\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A few things to note:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The OpenFMB HMI docker container exposes port ",(0,i.kt)("inlineCode",{parentName:"li"},"32771"),".  In this example, the ",(0,i.kt)("inlineCode",{parentName:"li"},"docker run")," command above maps host port 32771 to container port 32771 (flag ",(0,i.kt)("inlineCode",{parentName:"li"},"-p 32771:32771"),").  You can map any available port on your host system to the exposed port 32771.  For example, if you want to map port ",(0,i.kt)("inlineCode",{parentName:"li"},"80")," on your host system to ",(0,i.kt)("inlineCode",{parentName:"li"},"32771"),", replace ",(0,i.kt)("inlineCode",{parentName:"li"},"-p 32771:32771")," with  ",(0,i.kt)("inlineCode",{parentName:"li"},"p 80:32771"),", and the command will be:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"> docker run -d -p 80:32771 -e APP_CONF=/server/app.toml -e APP_DIR_NAME=/server -v /home/joe/oes:/server openfmb.hmi\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"-v")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"volume")," option specifies where the local directory is mounted.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The first ",(0,i.kt)("inlineCode",{parentName:"p"},"-e")," flag is the ",(0,i.kt)("inlineCode",{parentName:"p"},"APP_CONF")," environment variable in the form of ",(0,i.kt)("inlineCode",{parentName:"p"},"APP_CONF=/name_of_mounted_volume/path/to/the/config_file")," (in our case, it is ",(0,i.kt)("inlineCode",{parentName:"p"},"APP_CONF=/server/app.toml"),").")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The second ",(0,i.kt)("inlineCode",{parentName:"p"},"-e")," flag is the ",(0,i.kt)("inlineCode",{parentName:"p"},"APP_DIR_NAME")," environment variable in the form of ",(0,i.kt)("inlineCode",{parentName:"p"},"APP_DIR_NAME=/name_of_mounted_volume")," (in our case, it is ",(0,i.kt)("inlineCode",{parentName:"p"},"APP_DIR_NAME=/server"),")."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'TIP: Our named volume is `/server`, therefore, "name_of_mounted_volume" is replaced with "server".  \n     You can name it anything you want.\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Launch your favorite browser, and navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:32771"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The default username/pwd is ",(0,i.kt)("inlineCode",{parentName:"p"},"admin/hm1admin"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Congratulations!")," You have run your first OpenFMB HMI application."))}s.isMDXComponent=!0}}]);