(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{177:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"rightToc",(function(){return a})),t.d(n,"default",(function(){return c}));t(59),t(32),t(23),t(24),t(60),t(0);var r=t(225);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var i={id:"ecosystem-inferno",title:"single-spa-inferno",sidebar_label:"Inferno"},a=[{value:"Quickstart",id:"quickstart",children:[]},{value:"Options",id:"options",children:[]}],l={rightToc:a},p="wrapper";function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(r.b)(p,o({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"single-spa-inferno is a helper library that helps implement ",Object(r.b)("a",o({parentName:"p"},{href:"configuration#registering-applications"}),"single-spa registered application")," ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/building-applications#registered-application-lifecycle"}),"lifecycle functions")," (bootstrap, mount and unmount) for for use with ",Object(r.b)("a",o({parentName:"p"},{href:"https://infernojs.org/"}),"Inferno"),". Check out the ",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/CanopyTax/single-spa-inferno"}),"single-spa-inferno github"),"."),Object(r.b)("h2",{id:"quickstart"},"Quickstart"),Object(r.b)("p",null,"First, in the application, run ",Object(r.b)("inlineCode",{parentName:"p"},"npm install --save single-spa-inferno"),". Then, add the following to your application's entry file."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-js"}),"import Inferno from 'inferno';\nimport rootComponent from './path-to-root-component.js';\nimport singleSpaInferno from 'single-spa-inferno';\n\nconst infernoLifecycles = singleSpaInferno({\n  Inferno,\n  createElement,\n  rootComponent,\n  domElementGetter: () => document.getElementById('main-content'),\n});\n\nexport const bootstrap = infernoLifecyles.bootstrap;\nexport const mount = infernoLifecyles.mount;\nexport const unmount = infernoLifecyles.unmount;\n")),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("p",null,"All options are passed to single-spa-inferno via the ",Object(r.b)("inlineCode",{parentName:"p"},"opts")," parameter when calling ",Object(r.b)("inlineCode",{parentName:"p"},"singleSpaInferno(opts)"),". The following options are available:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"inferno"),": (required) The main Inferno object, which is generally either exposed onto the window or is available via ",Object(r.b)("inlineCode",{parentName:"li"},"require('inferno')")," or ",Object(r.b)("inlineCode",{parentName:"li"},"import Inferno from 'inferno'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"createElement"),": (required) The default export from Inferno's ",Object(r.b)("inlineCode",{parentName:"li"},"inferno-create-element")," package."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"rootComponent"),": (required) The top level Inferno component which will be rendered."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"domElementGetter"),": (required) A function that takes in no arguments and returns a DOMElement. This dom element is where the Inferno application will be bootstrapped, mounted, and unmounted.")))}c.isMDXComponent=!0},225:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return u}));var r=t(0),o=t.n(r),i=o.a.createContext({}),a=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},l=function(e){var n=a(e.components);return o.a.createElement(i.Provider,{value:n},e.children)};var p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),s=a(t),u=r,f=s[l+"."+u]||s[u]||c[u]||i;return t?o.a.createElement(f,Object.assign({},{ref:n},p,{components:t})):o.a.createElement(f,Object.assign({},{ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);