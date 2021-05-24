(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{131:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),c=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=r,f=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return n?a.a.createElement(f,p(p({ref:t},u),{},{components:n})):a.a.createElement(f,p({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(8),o=(n(0),n(131)),i={},p={unversionedId:"adapter/other-plugins/capture-replay",id:"adapter/other-plugins/capture-replay",isDocsHomePage:!1,title:"Capture and Replay Plugins",description:"The capture plugin saves all the messages sent to the internal message bus to a",source:"@site/docs/adapter/other-plugins/capture-replay.md",sourceDirName:"adapter/other-plugins",slug:"/adapter/other-plugins/capture-replay",permalink:"/docs/adapter/other-plugins/capture-replay",editUrl:"https://github.com/openenergysolutions/openfmb.docs/edit/develop/website/docs/adapter/other-plugins/capture-replay.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DNP3 Outstation",permalink:"/docs/adapter/protocol-plugins/dnp3/outstation"},next:{title:"Log Plugin",permalink:"/docs/adapter/other-plugins/log"}},l=[{value:"Configuration",id:"configuration",children:[]}],u={toc:l};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"capture")," plugin saves all the messages sent to the internal message bus to a\nfile along with the timestamp that they were sent. The ",Object(o.b)("inlineCode",{parentName:"p"},"replay")," plugin reads\nthis file and publishes the exact same messages to the internal message bus at\nthe time they were originally sent. It is useful for debugging purposes for\nreplaying real data."),Object(o.b)("p",null,"Usually, the ",Object(o.b)("inlineCode",{parentName:"p"},"capture")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"replay")," plugins are mutually exclusive."),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"capture")," plugin takes a single setting: the path of the file to save to."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"capture:\n  enabled: true\n  file: capture.txt\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"replay")," plugin takes a single setting: the path of the file to read from."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"replay:\n  enabled: true\n  file: capture.txt\n")))}c.isMDXComponent=!0}}]);