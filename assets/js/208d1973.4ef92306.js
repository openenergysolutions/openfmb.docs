"use strict";(self.webpackChunkopenfmb_docs=self.webpackChunkopenfmb_docs||[]).push([[7046],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,g=d["".concat(i,".").concat(f)]||d[f]||c[f]||o;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6373:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],p={},i="Capture and Replay Plugins",u={unversionedId:"adapter/other-plugins/capture-replay",id:"adapter/other-plugins/capture-replay",title:"Capture and Replay Plugins",description:"The capture plugin saves all the messages sent to the internal message bus to a",source:"@site/docs/adapter/other-plugins/capture-replay.md",sourceDirName:"adapter/other-plugins",slug:"/adapter/other-plugins/capture-replay",permalink:"/docs/adapter/other-plugins/capture-replay",editUrl:"https://github.com/openenergysolutions/openfmb.docs/edit/develop/website/docs/adapter/other-plugins/capture-replay.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DNP3 Outstation",permalink:"/docs/adapter/protocol-plugins/dnp3/outstation"},next:{title:"Log Plugin",permalink:"/docs/adapter/other-plugins/log"}},s=[{value:"Configuration",id:"configuration",children:[],level:2}],c={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"capture-and-replay-plugins"},"Capture and Replay Plugins"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"capture")," plugin saves all the messages sent to the internal message bus to a\nfile along with the timestamp that they were sent. The ",(0,o.kt)("inlineCode",{parentName:"p"},"replay")," plugin reads\nthis file and publishes the exact same messages to the internal message bus at\nthe time they were originally sent. It is useful for debugging purposes for\nreplaying real data."),(0,o.kt)("p",null,"Usually, the ",(0,o.kt)("inlineCode",{parentName:"p"},"capture")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"replay")," plugins are mutually exclusive."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"capture")," plugin takes a single setting: the path of the file to save to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"capture:\n  enabled: true\n  file: capture.txt\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"replay")," plugin takes a single setting: the path of the file to read from."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"replay:\n  enabled: true\n  file: capture.txt\n")))}d.isMDXComponent=!0}}]);