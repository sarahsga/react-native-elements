"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6565],{58215:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(67294);const l=function(t){var e=t.children,a=t.hidden,l=t.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},e)}},82895:(t,e,a)=>{a.d(e,{Z:()=>m});var n=a(87462),l=a(67294),r=a(72389),u=a(79443);const o=function(){var t=(0,l.useContext)(u.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t};var i=a(15779),d=a(86010);const p="tabItem_vU9c";function s(t){var e,a,r,u=t.lazy,s=t.block,m=t.defaultValue,k=t.values,c=t.groupId,h=t.className,b=l.Children.map(t.children,(function(t){if((0,l.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=k?k:b.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),y=(0,i.lx)(N,(function(t,e){return t.value===e.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(e=null!=m?m:null==(a=b.find((function(t){return t.props.default})))?void 0:a.props.value)?e:null==(r=b[0])?void 0:r.props.value;if(null!==g&&!N.some((function(t){return t.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+N.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=o(),v=f.tabGroupChoices,x=f.setTabGroupChoices,D=(0,l.useState)(g),T=D[0],B=D[1],S=[],A=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var C=v[c];null!=C&&C!==T&&N.some((function(t){return t.value===C}))&&B(C)}var w=function(t){var e=t.currentTarget,a=S.indexOf(e),n=N[a].value;n!==T&&(A(e),B(n),null!=c&&x(c,n))},G=function(t){var e,a=null;switch(t.key){case"ArrowRight":var n=S.indexOf(t.currentTarget)+1;a=S[n]||S[0];break;case"ArrowLeft":var l=S.indexOf(t.currentTarget)-1;a=S[l]||S[S.length-1]}null==(e=a)||e.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":s},h)},N.map((function(t){var e=t.value,a=t.label,r=t.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:function(t){return S.push(t)},onKeyDown:G,onFocus:w,onClick:w},r,{className:(0,d.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":T===e})}),null!=a?a:e)}))),u?(0,l.cloneElement)(b.filter((function(t){return t.props.value===T}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},b.map((function(t,e){return(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==T})}))))}function m(t){var e=(0,r.Z)();return l.createElement(s,(0,n.Z)({key:String(e)},t))}},41768:(t,e,a)=>{a.r(e),a.d(e,{frontMatter:()=>i,contentTitle:()=>d,metadata:()=>p,toc:()=>s,default:()=>k});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),u=a(9129),o=(a(34738),a(82895),a(58215),["components"]),i={id:"buttongroup",title:"ButtonGroup",slug:"/buttongroup"},d=void 0,p={unversionedId:"main/buttongroup",id:"main/buttongroup",title:"ButtonGroup",description:"ButtonGroup is a linear set of segments, each of which function as a button that can display a different view/or perform a different action.",source:"@site/docs/main/ButtonGroup.mdx",sourceDirName:"main",slug:"/buttongroup",permalink:"/docs/next/buttongroup",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/ButtonGroup.mdx",tags:[],version:"current",frontMatter:{id:"buttongroup",title:"ButtonGroup",slug:"/buttongroup"},sidebar:"docs",previous:{title:"Button",permalink:"/docs/next/button"},next:{title:"Card",permalink:"/docs/next/card"}},s=[{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[{value:"ButtonGroup",id:"buttongroup",children:[],level:3}],level:2},{value:"Reference",id:"reference",children:[{value:"ButtonGroup",id:"buttongroup-1",children:[{value:"Component",id:"component",children:[],level:4},{value:"activeOpacity",id:"activeopacity",children:[],level:4},{value:"button",id:"button",children:[],level:4},{value:"buttonContainerStyle",id:"buttoncontainerstyle",children:[],level:4},{value:"buttonStyle",id:"buttonstyle",children:[],level:4},{value:"buttons",id:"buttons",children:[],level:4},{value:"containerStyle",id:"containerstyle",children:[],level:4},{value:"disabled",id:"disabled",children:[],level:4},{value:"disabledSelectedStyle",id:"disabledselectedstyle",children:[],level:4},{value:"disabledSelectedTextStyle",id:"disabledselectedtextstyle",children:[],level:4},{value:"disabledStyle",id:"disabledstyle",children:[],level:4},{value:"disabledTextStyle",id:"disabledtextstyle",children:[],level:4},{value:"innerBorderStyle",id:"innerborderstyle",children:[],level:4},{value:"onHideUnderlay",id:"onhideunderlay",children:[],level:4},{value:"onLongPress",id:"onlongpress",children:[],level:4},{value:"onPress",id:"onpress",children:[],level:4},{value:"onPressIn",id:"onpressin",children:[],level:4},{value:"onPressOut",id:"onpressout",children:[],level:4},{value:"onShowUnderlay",id:"onshowunderlay",children:[],level:4},{value:"pressableProps",id:"pressableprops",children:[],level:4},{value:"selectMultiple",id:"selectmultiple",children:[],level:4},{value:"selectedButtonStyle",id:"selectedbuttonstyle",children:[],level:4},{value:"selectedIndex",id:"selectedindex",children:[],level:4},{value:"selectedIndexes",id:"selectedindexes",children:[],level:4},{value:"selectedTextStyle",id:"selectedtextstyle",children:[],level:4},{value:"setOpacityTo",id:"setopacityto",children:[],level:4},{value:"textStyle",id:"textstyle",children:[],level:4},{value:"underlayColor",id:"underlaycolor",children:[],level:4},{value:"vertical",id:"vertical",children:[],level:4}],level:3}],level:2}],m={toc:s};function k(t){var e=t.components,a=(0,l.Z)(t,o);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ButtonGroup is a linear set of segments, each of which function as a button that can display a different view/or perform a different action."),(0,r.kt)("p",null,"Use a ButtonGroup to offer choices that are closely related but mutually exclusive."),(0,r.kt)("p",null,"This component inherits ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/touchablehighlight.html"},"all native TouchableHighlight and TouchableOpacity props that come with React Native TouchableHighlight or TouchableOpacity elements"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(u.default,{mdxType:"Usage"}),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"buttongroup"},"ButtonGroup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#component"},"Component")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#activeopacity"},"activeOpacity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#button"},"button")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#buttoncontainerstyle"},"buttonContainerStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#buttonstyle"},"buttonStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#buttons"},"buttons")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#containerstyle"},"containerStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disabled"},"disabled")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disabledselectedstyle"},"disabledSelectedStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disabledselectedtextstyle"},"disabledSelectedTextStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disabledstyle"},"disabledStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disabledtextstyle"},"disabledTextStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#innerborderstyle"},"innerBorderStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onhideunderlay"},"onHideUnderlay")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onlongpress"},"onLongPress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onpress"},"onPress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onpressin"},"onPressIn")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onpressout"},"onPressOut")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onshowunderlay"},"onShowUnderlay")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#pressableprops"},"pressableProps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#selectmultiple"},"selectMultiple")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#selectedbuttonstyle"},"selectedButtonStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#selectedindex"},"selectedIndex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#selectedindexes"},"selectedIndexes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#selectedtextstyle"},"selectedTextStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setopacityto"},"setOpacityTo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#textstyle"},"textStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#underlaycolor"},"underlayColor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#vertical"},"vertical"))),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"buttongroup-1"},"ButtonGroup"),(0,r.kt)("h4",{id:"component"},"Component"),(0,r.kt)("p",null,"Choose other button component such as TouchableOpacity."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"React Component"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"activeopacity"},"activeOpacity"),(0,r.kt)("p",null,"Add active opacity to the button in buttonGroup."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"button"},"button"),(0,r.kt)("p",null,"Button for the component."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"buttoncontainerstyle"},"buttonContainerStyle"),(0,r.kt)("p",null,"Specify styling for button containers."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"buttonstyle"},"buttonStyle"),(0,r.kt)("p",null,"Specify styling for button."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"buttons"},"buttons"),(0,r.kt)("p",null,"Array of buttons for component (required), if returning a component, must be an object with { element: componentName }."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"any[]"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"containerstyle"},"containerStyle"),(0,r.kt)("p",null,"Specify styling for main button container."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"disabled"},"disabled"),(0,r.kt)("p",null,"Controls if buttons are disabled. Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," makes all of them disabled, while using an array only makes those indices disabled."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean or number[]"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"disabledselectedstyle"},"disabledSelectedStyle"),(0,r.kt)("p",null,"Styling for each selected button when disabled."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"disabledselectedtextstyle"},"disabledSelectedTextStyle"),(0,r.kt)("p",null,"Styling for the text of each selected button when disabled."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"disabledstyle"},"disabledStyle"),(0,r.kt)("p",null,"Styling for each button when disabled."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"disabledtextstyle"},"disabledTextStyle"),(0,r.kt)("p",null,"Styling for the text of each button when disabled."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"innerborderstyle"},"innerBorderStyle"),(0,r.kt)("p",null,"Update the styling of the interior border of the list of buttons."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{ color?: string; width?: number; }"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"onhideunderlay"},"onHideUnderlay"),(0,r.kt)("p",null,"Function called on hiding underlay."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"onlongpress"},"onLongPress"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PressableProps"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"onpress"},"onPress"),(0,r.kt)("p",null,"Method to update Button Group Index."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"Function")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"onpressin"},"onPressIn"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PressableProps"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"onpressout"},"onPressOut"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PressableProps"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"onshowunderlay"},"onShowUnderlay"),(0,r.kt)("p",null,"Function called on showing underlay."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"pressableprops"},"pressableProps"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"selectmultiple"},"selectMultiple"),(0,r.kt)("p",null,"Allows the user to select multiple buttons."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"selectedbuttonstyle"},"selectedButtonStyle"),(0,r.kt)("p",null,"Specify styling for selected button."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"selectedindex"},"selectedIndex"),(0,r.kt)("p",null,"Current selected index of array of buttons."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"null")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"selectedindexes"},"selectedIndexes"),(0,r.kt)("p",null,"Current selected indexes from the array of buttons."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number[]"),(0,r.kt)("td",{parentName:"tr",align:null},"[]")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"selectedtextstyle"},"selectedTextStyle"),(0,r.kt)("p",null,"Specify specific styling for text in the selected state."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"setopacityto"},"setOpacityTo"),(0,r.kt)("p",null,"Function to set the opacity."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(value: number) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"textstyle"},"textStyle"),(0,r.kt)("p",null,"Specify specific styling for text."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"underlaycolor"},"underlayColor"),(0,r.kt)("p",null,"Specify underlayColor for TouchableHighlight."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Color(Primary)")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"vertical"},"vertical"),(0,r.kt)("p",null,"Display the ButtonGroup vertically."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("hr",null))}k.isMDXComponent=!0},9129:(t,e,a)=>{a.r(e),a.d(e,{frontMatter:()=>i,contentTitle:()=>d,metadata:()=>p,toc:()=>s,default:()=>k});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),u=a(74311),o=["components"],i={},d=void 0,p={unversionedId:"main/usage/ButtonGroup/ButtonGroup",id:"main/usage/ButtonGroup/ButtonGroup",title:"ButtonGroup",description:"Using components",source:"@site/docs/main/usage/ButtonGroup/ButtonGroup.mdx",sourceDirName:"main/usage/ButtonGroup",slug:"/main/usage/ButtonGroup/",permalink:"/docs/next/main/usage/ButtonGroup/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/ButtonGroup/ButtonGroup.mdx",tags:[],version:"current",frontMatter:{}},s=[{value:"Using components",id:"using-components",children:[],level:3}],m={toc:s};function k(t){var e=t.components,a=(0,l.Z)(t,o);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(u.default,{mdxType:"Snack"}),(0,r.kt)("h3",{id:"using-components"},"Using components"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"constructor () {\n  super()\n  this.state = {\n    selectedIndex: 2\n  }\n  this.updateIndex = this.updateIndex.bind(this)\n}\nupdateIndex (selectedIndex) {\n  this.setState({selectedIndex})\n}\n\nconst component1 = () => <Text>Hello</Text>\nconst component2 = () => <Text>World</Text>\nconst component3 = () => <Text>ButtonGroup</Text>\n\nrender () {\n  const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]\n  const { selectedIndex } = this.state\n  return (\n    <ButtonGroup\n      onPress={this.updateIndex}\n      selectedIndex={selectedIndex}\n      buttons={buttons}\n      containerStyle={{height: 100}} />\n  )\n}\n")))}k.isMDXComponent=!0},74311:(t,e,a)=>{a.r(e),a.d(e,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>d,toc:()=>p,default:()=>m});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),u=["components"],o={},i=void 0,d={unversionedId:"main/usage/ButtonGroup/snack/index",id:"main/usage/ButtonGroup/snack/index",title:"index",description:"",source:"@site/docs/main/usage/ButtonGroup/snack/index.md",sourceDirName:"main/usage/ButtonGroup/snack",slug:"/main/usage/ButtonGroup/snack/",permalink:"/docs/next/main/usage/ButtonGroup/snack/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/ButtonGroup/snack/index.md",tags:[],version:"current",frontMatter:{}},p=[],s={toc:p};function m(t){var e=t.components,a=(0,l.Z)(t,u);return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE ButtonGroup","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7BuseState%7D%20from%20'react'%0Aimport%20%7B%20ButtonGroup%20%7D%20from%20'react-native-elements'%0Aimport%20%7B%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default()%20%3D%3E%20%7B%0A%20%20const%20%5BselectedIndex%2C%20setSelectedIndex%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BselectedIndexes%2C%20setSelectedIndexes%5D%20%3D%20useState(%5B0%2C%202%2C%203%5D)%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EUsing%20Strings%3C%2FText%3E%0A%20%20%20%20%20%20%3CButtonGroup%0A%20%20%20%20%20%20%20%20buttons%3D%7B%5B'SIMPLE'%2C%20'BUTTON'%2C%20'GROUP'%5D%7D%0A%20%20%20%20%20%20%20%20selectedIndex%3D%7BselectedIndex%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B(value)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setSelectedIndex(value)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginBottom%3A%2020%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButtonGroup%0A%20%20%20%20%20%20%20%20buttons%3D%7B%5B'Multiple'%2C%20'Select'%2C%20'Button'%2C%20'Group'%5D%7D%0A%20%20%20%20%20%20%20%20selectMultiple%0A%20%20%20%20%20%20%20%20selectedIndexes%3D%7BselectedIndexes%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B(value)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setSelectedIndexes(value)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginBottom%3A%2020%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EUsing%20Components%3C%2FText%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20subHeader%3A%20%7B%0A%20%20%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20%20%20color%20%3A%20%22white%22%2C%0A%20%20%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20%20%20paddingVertical%20%3A%205%2C%0A%20%20%20%20marginBottom%20%3A%2010%0A%20%20%7D%0A%7D)","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}m.isMDXComponent=!0}}]);