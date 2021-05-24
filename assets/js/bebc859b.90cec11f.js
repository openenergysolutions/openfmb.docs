(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(8),a=(n(0),n(131)),i={sidebar_position:4},p={unversionedId:"hmi/run",id:"hmi/run",isDocsHomePage:!1,title:"Run the HMI",description:"To run the OpenFMB HMI Docker image, we need to pass in two environment variables:",source:"@site/docs/hmi/run.md",sourceDirName:"hmi",slug:"/hmi/run",permalink:"/openfmb.docs/docs/hmi/run",editUrl:"https://github.com/openenergysolutions/openfmb.docs/edit/develop/website/docs/hmi/run.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Setting up the HMI",permalink:"/openfmb.docs/docs/hmi/configuration"},next:{title:"Referenced Setup",permalink:"/openfmb.docs/docs/hmi/sld"}},c=[],l={toc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To run the OpenFMB HMI Docker image, we need to pass in two environment variables:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"APP_CONF"),": Path to application configuration file (in our case, it is the ",Object(a.b)("inlineCode",{parentName:"p"},"app.toml")," in previous section)")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"APP_DIR_NAME"),": Application directory where Docker mounted volume is specified (",Object(a.b)("inlineCode",{parentName:"p"},"-v")," option in ",Object(a.b)("inlineCode",{parentName:"p"},"docker run")," command).  This directory is where all single-line diagrams that you create later in this tutorial will be stored."))),Object(a.b)("p",null,"Suppose that you created the ",Object(a.b)("inlineCode",{parentName:"p"},"app.toml")," file in ",Object(a.b)("inlineCode",{parentName:"p"},"/home/joe/hmi")," directory, and you want to mount and point ",Object(a.b)("inlineCode",{parentName:"p"},"APP_DIR_NAME")," to it. Run the following command:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"> docker run -d -p 32771:32771 -e APP_CONF=/server/app.toml -e APP_DIR_NAME=/server -v /home/joe/oes:/server openfmb.hmi\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"A few things to note:")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The OpenFMB HMI docker container exposes port ",Object(a.b)("inlineCode",{parentName:"li"},"32771"),".  In this example, the ",Object(a.b)("inlineCode",{parentName:"li"},"docker run")," command above maps host port 32771 to container port 32771 (flag ",Object(a.b)("inlineCode",{parentName:"li"},"-p 32771:32771"),").  You can map any available port on your host system to the exposed port 32771.  For example, if you want to map port ",Object(a.b)("inlineCode",{parentName:"li"},"80")," on your host system to ",Object(a.b)("inlineCode",{parentName:"li"},"32771"),", replace ",Object(a.b)("inlineCode",{parentName:"li"},"-p 32771:32771")," with  ",Object(a.b)("inlineCode",{parentName:"li"},"p 80:32771"),", and the command will be:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"> docker run -d -p 80:32771 -e APP_CONF=/server/app.toml -e APP_DIR_NAME=/server -v /home/joe/oes:/server openfmb.hmi\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"The ",Object(a.b)("inlineCode",{parentName:"p"},"-v")," or ",Object(a.b)("inlineCode",{parentName:"p"},"volume")," option specifies where the local directory is mounted.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"The first ",Object(a.b)("inlineCode",{parentName:"p"},"-e")," flag is the ",Object(a.b)("inlineCode",{parentName:"p"},"APP_CONF")," environment variable in the form of ",Object(a.b)("inlineCode",{parentName:"p"},"APP_CONF=/name_of_mounted_volume/path/to/the/config_file")," (in our case, it is ",Object(a.b)("inlineCode",{parentName:"p"},"APP_CONF=/server/app.toml"),").")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"The second ",Object(a.b)("inlineCode",{parentName:"p"},"-e")," flag is the ",Object(a.b)("inlineCode",{parentName:"p"},"APP_DIR_NAME")," environment variable in the form of ",Object(a.b)("inlineCode",{parentName:"p"},"APP_DIR_NAME=/name_of_mounted_volume")," (in our case, it is ",Object(a.b)("inlineCode",{parentName:"p"},"APP_DIR_NAME=/server"),")."))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'TIP: Our named volume is `/server`, therefore, "name_of_mounted_volume" is replaced with "server".  \n     You can name it anything you want.\n')),Object(a.b)("ol",{start:5},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Launch your favorite browser, and navigate to ",Object(a.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:32771"),".")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"The default username/pwd is ",Object(a.b)("inlineCode",{parentName:"p"},"admin/hm1admin"),"."))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Congratulations!")," You have run your first OpenFMB HMI application."))}b.isMDXComponent=!0},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=b(n),u=r,d=m["".concat(i,".").concat(u)]||m[u]||s[u]||a;return n?o.a.createElement(d,p(p({ref:t},l),{},{components:n})):o.a.createElement(d,p({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);