"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1703,9174,4754],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=d(n),u=r,s=k["".concat(o,".").concat(u)]||k[u]||c[u]||l;return n?a.createElement(s,i(i({ref:t},m),{},{components:n})):a.createElement(s,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},64833:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>d,metadata:()=>m,toc:()=>c,default:()=>u});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(35609),p=["components"],o={id:"input",title:"Input",slug:"/input"},d=void 0,m={unversionedId:"main/input",id:"main/input",title:"Input",description:"Inputs allow users to enter text into a UI. They typically appear in forms and",source:"@site/docs/main/Input.mdx",sourceDirName:"main",slug:"/input",permalink:"/docs/next/input",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/Input.mdx",tags:[],version:"current",frontMatter:{id:"input",title:"Input",slug:"/input"},sidebar:"docs",previous:{title:"Image",permalink:"/docs/next/image"},next:{title:"LinearProgress",permalink:"/docs/next/linearprogress"}},c=[{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[],level:2},{value:"Reference",id:"reference",children:[{value:"<code>containerStyle</code>",id:"containerstyle",children:[],level:3},{value:"<code>disabled</code>",id:"disabled",children:[],level:3},{value:"<code>disabledInputStyle</code>",id:"disabledinputstyle",children:[],level:3},{value:"<code>errorMessage</code>",id:"errormessage",children:[],level:3},{value:"<code>errorProps</code>",id:"errorprops",children:[],level:3},{value:"<code>errorStyle</code>",id:"errorstyle",children:[],level:3},{value:"<code>InputComponent</code>",id:"inputcomponent",children:[],level:3},{value:"<code>inputContainerStyle</code>",id:"inputcontainerstyle",children:[],level:3},{value:"<code>inputStyle</code>",id:"inputstyle",children:[],level:3},{value:"<code>label</code>",id:"label",children:[],level:3},{value:"<code>labelProps</code>",id:"labelprops",children:[],level:3},{value:"<code>labelStyle</code>",id:"labelstyle",children:[],level:3},{value:"<code>leftIcon</code>",id:"lefticon",children:[],level:3},{value:"<code>leftIconContainerStyle</code>",id:"lefticoncontainerstyle",children:[],level:3},{value:"<code>placeholder</code>",id:"placeholder",children:[],level:3},{value:"<code>renderErrorMessage</code>",id:"rendererrormessage",children:[],level:3},{value:"<code>rightIcon</code>",id:"righticon",children:[],level:3},{value:"<code>rightIconContainerStyle</code>",id:"righticoncontainerstyle",children:[{value:"Styles explanation",id:"styles-explanation",children:[],level:4}],level:3}],level:2}],k={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Inputs allow users to enter text into a UI. They typically appear in forms and\ndialogs."),(0,l.kt)("div",{className:"component-preview component-preview--grid"},(0,l.kt)("figure",null,(0,l.kt)("img",{src:"/img/input/input--placeholder.png",alt:"Input with placeholder"}),(0,l.kt)("figcaption",null,"Placeholder")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"/img/input/input--label.png",alt:"Input with Label and icons"}),(0,l.kt)("figcaption",null,"Label with Icons"))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(i.default,{mdxType:"Usage"}),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This component inherits\n",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/textinput"},"all native TextInput props that come with a standard React Native TextInput element"),",\nalong with the following:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#containerstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"containerStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disabled"},(0,l.kt)("inlineCode",{parentName:"a"},"disabled"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disabledinputstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"disabledInputStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#errormessage"},(0,l.kt)("inlineCode",{parentName:"a"},"errorMessage"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#errorprops"},(0,l.kt)("inlineCode",{parentName:"a"},"errorProps"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#errorstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"errorStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#inputcomponent"},(0,l.kt)("inlineCode",{parentName:"a"},"InputComponent"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#inputcontainerstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"inputContainerStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#inputstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"inputStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#label"},(0,l.kt)("inlineCode",{parentName:"a"},"label"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#labelprops"},(0,l.kt)("inlineCode",{parentName:"a"},"labelProps"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#labelstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"labelStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#lefticon"},(0,l.kt)("inlineCode",{parentName:"a"},"leftIcon"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#lefticoncontainerstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"leftIconContainerStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#rendererrormessage"},(0,l.kt)("inlineCode",{parentName:"a"},"renderErrorMessage"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#righticon"},(0,l.kt)("inlineCode",{parentName:"a"},"rightIcon"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#righticoncontainerstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"rightIconContainerStyle")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"containerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"containerStyle")),(0,l.kt)("p",null,"styling for view containing the label, the input and the error message"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"disabled"},(0,l.kt)("inlineCode",{parentName:"h3"},"disabled")),(0,l.kt)("p",null,"disables the input component"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"disabledinputstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"disabledInputStyle")),(0,l.kt)("p",null,"disabled styles that will be passed to the ",(0,l.kt)("inlineCode",{parentName:"p"},"style")," props of the React Native ",(0,l.kt)("inlineCode",{parentName:"p"},"TextInput")," (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Text style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"errormessage"},(0,l.kt)("inlineCode",{parentName:"h3"},"errorMessage")),(0,l.kt)("p",null,"adds error message (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"errorprops"},(0,l.kt)("inlineCode",{parentName:"h3"},"errorProps")),(0,l.kt)("p",null,"props to be passed to the React Native ",(0,l.kt)("inlineCode",{parentName:"p"},"Text")," component used to display the\nerror message (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"{",(0,l.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/text#props"},"...Text props"),"}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"errorstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"errorStyle")),(0,l.kt)("p",null,"add styling to error message (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"inputcomponent"},(0,l.kt)("inlineCode",{parentName:"h3"},"InputComponent")),(0,l.kt)("p",null,"component that will be rendered in place of the React Native ",(0,l.kt)("inlineCode",{parentName:"p"},"TextInput"),"\n(optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"React Native Component"),(0,l.kt)("td",{parentName:"tr",align:"center"},"TextInput")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"inputcontainerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"inputContainerStyle")),(0,l.kt)("p",null,"styling for Input Component Container (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"inputstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"inputStyle")),(0,l.kt)("p",null,"style that will be passed to the ",(0,l.kt)("inlineCode",{parentName:"p"},"style")," props of the React Native ",(0,l.kt)("inlineCode",{parentName:"p"},"TextInput"),"\n(optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"label"},(0,l.kt)("inlineCode",{parentName:"h3"},"label")),(0,l.kt)("p",null,"add a label on top of the input (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string ",(0,l.kt)("strong",{parentName:"td"},"OR")," React element or component"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"labelprops"},(0,l.kt)("inlineCode",{parentName:"h3"},"labelProps")),(0,l.kt)("p",null,"props to be passed to the React Native ",(0,l.kt)("inlineCode",{parentName:"p"},"Text")," component used to display the\nlabel or React Component used instead of simple string in ",(0,l.kt)("inlineCode",{parentName:"p"},"label")," prop\n(optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"{",(0,l.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/text.html#props"},"...Text props"),"} ",(0,l.kt)("strong",{parentName:"td"},"OR")," passed component props"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"labelstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"labelStyle")),(0,l.kt)("p",null,"styling for the label (optional); You can only use this if ",(0,l.kt)("inlineCode",{parentName:"p"},"label")," is a string"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"lefticon"},(0,l.kt)("inlineCode",{parentName:"h3"},"leftIcon")),(0,l.kt)("p",null,"displays an icon on the left (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"{",(0,l.kt)("a",{parentName:"td",href:"icon#props"},"...Icon props"),"}",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"OR"),(0,l.kt)("br",null)," component"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"lefticoncontainerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"leftIconContainerStyle")),(0,l.kt)("p",null,"styling for left Icon Component container"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"placeholder"},(0,l.kt)("inlineCode",{parentName:"h3"},"placeholder")),(0,l.kt)("p",null,"Placeholder text for the input"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"rendererrormessage"},(0,l.kt)("inlineCode",{parentName:"h3"},"renderErrorMessage")),(0,l.kt)("p",null,"If the error message container should be rendered (take up vertical space). If ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),", when showing errorMessage, the layout will shift to add it at that time."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"righticon"},(0,l.kt)("inlineCode",{parentName:"h3"},"rightIcon")),(0,l.kt)("p",null,"displays an icon on the right (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"{",(0,l.kt)("a",{parentName:"td",href:"icon#props"},"...Icon props"),"}",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"OR"),(0,l.kt)("br",null)," component"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"righticoncontainerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"rightIconContainerStyle")),(0,l.kt)("p",null,"styling for right Icon Component container"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"styles-explanation"},"Styles explanation"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Input with a label and an error message"),(0,l.kt)("th",{parentName:"tr",align:null},"Styles explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"/img/input_without_explanation.png"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"/img/input_with_explanation.png"}))))))}u.isMDXComponent=!0},35609:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>d,metadata:()=>m,toc:()=>c,default:()=>u});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(57197),p=["components"],o={},d=void 0,m={unversionedId:"main/usage/Input/Input",id:"main/usage/Input/Input",title:"Input",description:"Interaction methods",source:"@site/docs/main/usage/Input/Input.mdx",sourceDirName:"main/usage/Input",slug:"/main/usage/Input/",permalink:"/docs/next/main/usage/Input/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/Input/Input.mdx",tags:[],version:"current",frontMatter:{}},c=[{value:"Interaction methods",id:"interaction-methods",children:[],level:3},{value:"Calling methods on Input",id:"calling-methods-on-input",children:[],level:3}],k={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(i.default,{mdxType:"Snack"}),(0,l.kt)("h3",{id:"interaction-methods"},"Interaction methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"method"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"focus"),(0,l.kt)("td",{parentName:"tr",align:null},"Focuses the Input")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"blur"),(0,l.kt)("td",{parentName:"tr",align:null},"Removes focus from the Input")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clear"),(0,l.kt)("td",{parentName:"tr",align:null},"Clears the text in the Input")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isFocused"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," if the Input is focused")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setNativeProps"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets props directly on the react native component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shake"),(0,l.kt)("td",{parentName:"tr",align:null},"Shakes the input for error feedback")))),(0,l.kt)("h3",{id:"calling-methods-on-input"},"Calling methods on Input"),(0,l.kt)("p",null,"Store a reference to the Input in your component by using the ref prop\nprovided by React\n(",(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"see docs"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const input = React.createRef();\n\n<Input\n  ref={input}\n  ...\n/>\n")),(0,l.kt)("p",null,"You can then use the Input methods like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"input.current.focus();\ninput.current.blur();\ninput.current.clear();\ninput.current.isFocused();\ninput.current.setNativeProps({ value: 'hello' });\ninput.current.shake();\n")))}u.isMDXComponent=!0},57197:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>d,toc:()=>m,default:()=>k});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],p={},o=void 0,d={unversionedId:"main/usage/Input/snack/index",id:"main/usage/Input/snack/index",title:"index",description:"",source:"@site/docs/main/usage/Input/snack/index.md",sourceDirName:"main/usage/Input/snack",slug:"/main/usage/Input/snack/",permalink:"/docs/next/main/usage/Input/snack/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/Input/snack/index.md",tags:[],version:"current",frontMatter:{}},m=[],c={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE Input","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20Text%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Input%2C%20Icon%20%7D%20from%20'react-native-elements'%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20placeholder%3D'BASIC%20INPUT'%0A%20%20%20%20%20%20%2F%3E%0A%0A%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20placeholder%3D'INPUT%20WITH%20ICON'%0A%20%20%20%20%20%20%20%20leftIcon%3D%7B%7B%20type%3A%20'font-awesome'%2C%20name%3A%20'chevron-left'%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%0A%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20placeholder%3D'INPUT%20WITH%20CUSTOM%20ICON'%0A%20%20%20%20%20%20%20%20leftIcon%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3D'user'%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B24%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3D'black'%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%2F%3E%0A%0A%0A%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20placeholder%3D%22Comment%22%0A%20%20%20%20%20%20%20%20leftIcon%3D%7B%7B%20type%3A%20'font-awesome'%2C%20name%3A%20'comment'%20%7D%7D%0A%20%20%20%20%20%20%20%20onChangeText%3D%7Bvalue%20%3D%3E%20this.setState(%7B%20comment%3A%20value%20%7D)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%0A%0A%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20placeholder%3D'INPUT%20WITH%20ERROR%20MESSAGE'%0A%20%20%20%20%20%20%20%20errorStyle%3D%7B%7B%20color%3A%20'red'%20%7D%7D%0A%20%20%20%20%20%20%20%20errorMessage%3D'ENTER%20A%20VALID%20ERROR%20HERE'%0A%20%20%20%20%20%20%2F%3E%0A%0A%20%20%20%20%20%20%3CInput%20placeholder%3D%22Password%22%20secureTextEntry%3D%7Btrue%7D%20%2F%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}k.isMDXComponent=!0}}]);