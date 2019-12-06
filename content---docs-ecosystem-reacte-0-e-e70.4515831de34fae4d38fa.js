(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return p}));n(59),n(32),n(23),n(24),n(60),n(0);var a=n(225);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={id:"ecosystem-react",title:"single-spa-react",sidebar_label:"React"},r=[{value:"Installation",id:"installation",children:[]},{value:"Quickstart",id:"quickstart",children:[]},{value:"Options",id:"options",children:[]},{value:"Notes",id:"notes",children:[]},{value:"SingleSpaContext",id:"singlespacontext",children:[]},{value:"Parcels",id:"parcels",children:[]},{value:"Create React App",id:"create-react-app",children:[]}],l={rightToc:r},c="wrapper";function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(c,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",o({parentName:"p"},{href:"https://travis-ci.org/CanopyTax/single-spa-react"}),Object(a.b)("img",o({parentName:"a"},{src:"https://travis-ci.org/CanopyTax/single-spa-react.svg?branch=master",alt:"Build Status"})))),Object(a.b)("p",null,"single-spa-react is a helper library that helps implement ",Object(a.b)("a",o({parentName:"p"},{href:"configuration#registering-applications"}),"single-spa registered application")," ",Object(a.b)("a",o({parentName:"p"},{href:"/docs/building-applications#registered-application-lifecycle"}),"lifecycle functions")," (bootstrap, mount and unmount) for use with ",Object(a.b)("a",o({parentName:"p"},{href:"https://reactjs.org/"}),"React"),". Check out the ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/CanopyTax/single-spa-react"}),"single-spa-react github"),"."),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sh"}),"npm install --save single-spa-react\n\n# Or\nyarn add single-spa-react\n")),Object(a.b)("p",null,"Alternatively, you can use single-spa-react by adding ",Object(a.b)("inlineCode",{parentName:"p"},'<script src="https://unpkg.com/single-spa-react"><\/script>')," and accessing the singleSpaReact global variable."),Object(a.b)("h2",{id:"quickstart"},"Quickstart"),Object(a.b)("p",null,'Your bundler\'s "entry file" should look like this, which allows your application to be downloaded as an in-browser ES module.'),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport rootComponent from './path-to-root-component.js';\n// Note that SingleSpaContext is a react@16.3 (if available) context that provides the singleSpa props\nimport singleSpaReact, {SingleSpaContext} from 'single-spa-react';\n\nconst reactLifecycles = singleSpaReact({\n  React,\n  ReactDOM,\n  rootComponent,\n});\n\nexport const bootstrap = reactLifecycles.bootstrap;\nexport const mount = reactLifecycles.mount;\nexport const unmount = reactLifecycles.unmount;\n")),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("p",null,"All options are passed to single-spa-react via the ",Object(a.b)("inlineCode",{parentName:"p"},"opts")," parameter when calling ",Object(a.b)("inlineCode",{parentName:"p"},"singleSpaReact(opts)"),". The following options are available:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"React"),": (required) The main React object, which is generally either exposed onto the window or is available via ",Object(a.b)("inlineCode",{parentName:"li"},"require('react')")," ",Object(a.b)("inlineCode",{parentName:"li"},"import React from 'react'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ReactDOM"),": (required) The main ReactDOMbject, which is available via ",Object(a.b)("inlineCode",{parentName:"li"},"require('react-dom')")," ",Object(a.b)("inlineCode",{parentName:"li"},"import ReactDOM from 'react-dom'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"rootComponent"),": (required) The top level React component which will be rendered. Can be omitted only if ",Object(a.b)("inlineCode",{parentName:"li"},"loadRootComponent")," is provided."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"loadRootComponent"),": (optional) A loading function that returns a promise that resolves with the parcel. This takes the place of the ",Object(a.b)("inlineCode",{parentName:"li"},"rootComponent")," opt, when provided. It is intended to help people\nwho want to lazy load the source code for their root component. The source code will be lazy loaded during the bootstrap lifecycle."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"suppressComponentDidCatchWarning"),": (optional) A boolean that indicates if single-spa-react should warn when the rootComponent does not implement componentDidCatch. Defaults to false."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"domElementGetter"),": (optional) A function that takes in no arguments and returns a DOMElement. This dom element is where the\nReact application will be bootstrapped, mounted, and unmounted. Note that this opt can be omitted. When omitted, the ",Object(a.b)("inlineCode",{parentName:"li"},"domElementGetter")," or ",Object(a.b)("inlineCode",{parentName:"li"},"domElement"),Object(a.b)("a",o({parentName:"li"},{href:"https://github.com/CanopyTax/single-spa/blob/master/docs/applications.md#custom-props"}),"custom single-spa props")," are used.\nTo use those, do ",Object(a.b)("inlineCode",{parentName:"li"},"singleSpa.registerApplication(name, app, activityFn, {domElementGetter: function() {...}})")," or\n",Object(a.b)("inlineCode",{parentName:"li"},"singleSpa.registerApplication(name, app, activityFn, {domElement: document.getElementById(...)})"),". If no dom element can be found through any\nof those methods, then a container div will be created and appended to document.body, by default."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"parcelCanUpdate"),": (optional) A boolean that controls whether an update lifecycle will be created for the returned parcel. Note that option does not impact single-spa applications, but only parcels.\nIt is true by default."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"renderType"),": (optional) ENUM of one of the following: ","[ 'render', 'hydrate', 'createRoot', 'createBlockingRoot' ]",". Defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"'render'"),". Allows you to choose which ReactDOM render method you want to use for your application.")),Object(a.b)("h2",{id:"notes"},"Notes"),Object(a.b)("p",null,"For react@>=16, it is best practice to have each single-spa application's root application implement componentDidCatch in order to avoid\nthe entire application unmounting unexpectedly when an error occurs. single-spa-react will warn to the console if componentDidCatch is not\nimplemented. See ",Object(a.b)("a",o({parentName:"p"},{href:"https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html"}),"https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html")," for more details."),Object(a.b)("h2",{id:"singlespacontext"},"SingleSpaContext"),Object(a.b)("h2",{id:"parcels"},"Parcels"),Object(a.b)("p",null,"single-spa-react can also be used to create a single-spa parcel (instead of a single-spa application). To do so, simply call singleSpaReact() the same as for an application, except without a\ndomElementGetter (since those are provided by the code that will mount the parcel)."),Object(a.b)("p",null,"Additionally, single-spa-react provides a ",Object(a.b)("inlineCode",{parentName:"p"},"<Parcel>")," component to make using framework agnostic single-spa parcels easier. This allows you to put the parcel into your render method's jsx, instead of having to implement componentDidMount and componentWillUnmount.\nYou can use the Parcel component either by npm installing the library and importing ",Object(a.b)("inlineCode",{parentName:"p"},"single-spa-react/parcel")," or by adding ",Object(a.b)("inlineCode",{parentName:"p"},'<script src="https://unpkg.com/single-spa-react/parcel"><\/script>')," and then accessing the Parcel component with ",Object(a.b)("inlineCode",{parentName:"p"},"window.Parcel.default"),"."),Object(a.b)("h4",{id:"parcel-props"},"Parcel props"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"config"),' (required): Either a single-spa parcel config object, or a "loading function" that returns a Promise that resolves with the parcel config.'),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"wrapWith")," (optional): A string ",Object(a.b)("a",o({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName"}),"tagName"),".",Object(a.b)("inlineCode",{parentName:"li"},"<Parcel>")," will create a dom node of that type for the parcel to be mounted into. Defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"div")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"appendTo")," (optional): A dom element to append the parcel to. By default, this is not needed because the parcel will be mounted in the DOM that the ",Object(a.b)("inlineCode",{parentName:"li"},"<Parcel>")," component was rendered into. Useful for appending parcels to document.body or other separate parts of the dom."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"mountParcel")," (sometimes required, sometimes not): The ",Object(a.b)("inlineCode",{parentName:"li"},"mountParcel")," function provided by single-spa. In general, it is preferred to use an application's mountParcel function instead of the\nsingle-spa's root mountParcel function, so that single-spa can keep track of the parent-child relationship and automatically unmount the application's parcels when the application unmounts.\nNote that if the ",Object(a.b)("inlineCode",{parentName:"li"},"<Parcel>")," component is being rendered by a single-spa application that uses single-spa-react, it is ",Object(a.b)("strong",{parentName:"li"},"unnecessary")," to pass in the prop, since ",Object(a.b)("inlineCode",{parentName:"li"},"<Parcel>")," can get the prop\nfrom ",Object(a.b)("a",o({parentName:"li"},{href:"#singlespacontext"}),"SingleSpaContext")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"handleError")," (optional): A function that will be called with errors thrown by the parcel. If not provided, errors will be thrown on the window, by default."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"parcelDidMount")," (optional): A function that will be called when the parcel finishes loading and mounting.")),Object(a.b)("h4",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),'import Parcel from \'single-spa-react/parcel\'\nimport * as parcelConfig from \'./my-parcel.js\'\n\n// config is required. The parcel will be mounted inside of the\n// of a div inside of the react component tree\n<Parcel\n  config={parcelConfig}\n\n  wrapWith="div"\n  handleError={err => console.error(err)}\n\n  customProp1="customPropValue2"\n  customProp2="customPropValue2"\n/>\n\n// If you pass in an appendTo prop, the parcel will be mounted there instead of\n// to a dom node inside of the current react component tree\n<Parcel>\n  config={parcelConfig}\n  wrapWith="div"\n  appendTo={document.body}\n/>\n\n// You can also pass in a "loading function" as the config.\n// The loading function must return a promise that resolves with the parcel config.\n// The parcel will be mounted once the promise resolves.\n<Parcel\n  config={() => import(\'./my-parcel.js\')}\n  wrapWith="div"\n/>\n\n// If you are rendering the Parcel component from a single-spa application, you do not need to pass a mountParcel prop.\n// But if you have a separate react component tree that is not rendered by single-spa-react, you **must** pass in a mountParcel prop\n// In general, it is preferred to use an application\'s mountParcel function instead of the single-spa\'s root mountParcel function,\n// so that single-spa can keep track of the parent-child relationship and automatically unmount the application\'s parcels when the application\n// unmounts\n<Parcel\n  mountParcel={singleSpa.mountParcel}\n  config={parcelConfig}\n  wrapWith="div"\n/>\n')),Object(a.b)("h2",{id:"create-react-app"},"Create React App"),Object(a.b)("p",null,"See ",Object(a.b)("a",o({parentName:"p"},{href:"https://single-spa.js.org/docs/faq.html#create-react-app"}),"FAQ for CRA")))}p.isMDXComponent=!0},225:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a),i=o.a.createContext({}),r=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=r(e.components);return o.a.createElement(i.Provider,{value:t},e.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=r(n),d=a,m=s[l+"."+d]||s[d]||p[d]||i;return n?o.a.createElement(m,Object.assign({},{ref:t},c,{components:n})):o.a.createElement(m,Object.assign({},{ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);