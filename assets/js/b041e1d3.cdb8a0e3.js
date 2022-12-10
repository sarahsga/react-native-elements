(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[4861],{30705:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(67294),i=n(13925),a=n(54236),l=n(40318),o=n(62290);const d=function(){var e=(0,l.Z)({componentName:"Divider",props:{style:{type:o.n.Object,value:'{width:"80%",margin:20}',description:"Apply style to the divider."},color:{type:o.n.String,value:i.defaultTheme.colors.primary,description:"Apply color to the divider."},inset:{type:o.n.Boolean,value:!1,description:"Applies inset to the divider if true. Default is left."},insetType:{type:o.n.String,value:"left",description:"Add inset to the divider in left, right, or in both direction. Choose among left, right, or middle."},subHeader:{type:o.n.String,value:"React native elements",description:"Adds a sub-header next to divider."},subHeaderStyle:{type:o.n.Object,value:"{}",description:"Adds styles to the sub header of divider."},width:{type:o.n.Number,value:1,description:"Add width to the divider."},orientation:{type:o.n.String,value:"horizontal",description:"Adds orientation to the divider."}},scope:{Divider:i.Divider},imports:{"@rneui/base":{named:["Divider"]}}});return r.createElement(r.Fragment,null,r.createElement(a.Z,{params:e}))}},37047:(e,t,n)=>{"use strict";n.d(t,{w:()=>d});var r=n(67294),i=n(35742),a=n(14330),l=n(98576),o=n(61720),d=function(){return r.createElement(i.Z,null,r.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+o.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+a.Z+") format('truetype');\n          }\n        "))}},54236:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(87462),i=n(67294),a=n(91262),l=n(18421),o=n(77356),d=n(41652),s=n(24309),p=n(16042),c=n(20346),m=n(30650);const u=function(e){var t=e.params,n=e.containerStyle,u=void 0===n?{}:n;return i.createElement(a.Z,{fallback:i.createElement(i.Fragment,null,"Loading...")},(function(){return i.createElement(c.X9.Provider,null,i.createElement(c.PK,{initialMetrics:m.o},i.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},u)},i.createElement(l.Z,(0,r.Z)({},t.compilerProps,{minHeight:62,placeholder:o.Z}))),i.createElement(d.Z,{msg:t.errorProps.msg,isPopup:!0}),i.createElement(s.Z,t.knobProps),i.createElement(d.Z,t.errorProps),i.createElement(p.E,t.actions)))}))}},22365:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(87462),i=n(63366),a=n(67294),l=n(10407),o=n(86010),d=(n(95999),n(52263)),s=n(91262),p=n(66412);const c="playgroundContainer_TGbA",m="playgroundEditor_PvJ1",u="playgroundPreview_bb8I",v="toggleIcon_OnrQ",A="showCode_O0Od";var y=n(72389),D=n(5434),k=["children","transformCode"];function C(){return a.createElement("div",null,"Loading...")}function h(){var e=(0,y.Z)();return a.createElement(l.uz,{key:String(e),className:m})}function g(e){var t=e.show_code,n=(e.openInSnack,a.useState(t)),r=n[0],i=n[1],d=function(){i((function(e){return!e}))};return a.createElement(a.Fragment,null,a.createElement("div",{className:u},a.createElement(s.Z,{fallback:a.createElement(C,null)},(function(){return a.createElement(a.Fragment,null,a.createElement(l.i5,null),a.createElement(l.IF,null),a.createElement("div",{className:(0,o.Z)(v),onClick:d},a.createElement(D.xoN,null),a.createElement("span",{className:A},r?"Hide":"Show"," Code")))}))),r&&a.createElement(h,null))}function E(e){var t=e.children,n=e.transformCode,o=(0,i.Z)(e,k),s=((0,d.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,p.p)());return a.createElement("div",{className:c},a.createElement(l.nu,(0,r.Z)({code:t.replace(/\n$/,""),transformCode:n||function(e){return e},theme:s},o),a.createElement(g,{show_code:o.show_code})))}},56922:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(67294),i=n(32408),a=n(13925),l=n(77321),o=n(83279);const d=Object.assign({React:r,LinearGradient:o.Z},i,a,l,r)},70217:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>D,contentTitle:()=>A,default:()=>h,frontMatter:()=>v,metadata:()=>y,toc:()=>k});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),l=n(37047),o=(n(65488),n(85162),n(96711)),d=n(47516),s=["components"],p={toc:[]};function c(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"snack-player","data-snack-name":"RNE Divider","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useContext%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20Divider%2C%20useTheme%20%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20ScrollView%2C%20StyleSheet%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Atype%20DividerViewTypes%20%3D%20%7B%7D%3B%0A%0Aconst%20DividerView%3A%20React.FunctionComponent%3CDividerViewTypes%3E%20%3D%20(props)%20%3D%3E%20%7B%0Aconst%20%7B%20theme%20%7D%20%3D%20useTheme()%3B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EHorizontal%20Dividers%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.horizontal%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3EHorizontal%20Divider%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Horizontal%20Divider%20with%20width%20and%20color%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20width%3D%7B5%7D%20color%3D%7Btheme%3F.colors%3F.primary%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EHorizontal%20Divider%20with%20Inset%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.horizontal%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Horizontal%20Divider%20with%20left%20inset%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20inset%3D%7Btrue%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Horizontal%20Divider%20with%20right%20inset%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20inset%3D%7Btrue%7D%20insetType%3D%22right%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Horizontal%20Divider%20with%20middle%20inset%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20inset%3D%7Btrue%7D%20insetType%3D%22middle%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3EWelcome%20to%20RNE%20App%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EVertical%20Dividers%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.vertical%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3ELeft%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20orientation%3D%22vertical%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%3ERight%20text%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.vertical%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3ELeft%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20orientation%3D%22vertical%22%20width%3D%7B5%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%3ERight%20text%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EDividers%20with%20SubHeader%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.horizontal%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3ELeft%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%0A%20%20%20%20%20%20%20%20%20%20subHeader%3D%22Divider%22%0A%20%20%20%20%20%20%20%20%20%20inset%3D%7Btrue%7D%0A%20%20%20%20%20%20%20%20%20%20subHeaderStyle%3D%7B%7B%20color%3A%20theme%3F.colors%3F.primary%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3ERight%20text%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0AsubHeader%3A%20%7B%0A%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20color%20%3A%20%22white%22%2C%0A%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20paddingVertical%20%3A%205%2C%0A%20%20marginBottom%20%3A%2010%0A%7D%2C%0Ahorizontal%3A%20%7B%0A%20%20marginBottom%3A%2010%2C%0A%7D%2C%0AhorizontalText%3A%20%7B%0A%20%20textAlign%3A%20'center'%2C%0A%20%20fontSize%3A%2016%2C%0A%20%20marginVertical%3A%2010%2C%0A%7D%2C%0Avertical%3A%20%7B%0A%20%20marginBottom%3A%2010%2C%0A%20%20display%3A%20'flex'%2C%0A%20%20flexDirection%3A%20'row'%2C%0A%20%20justifyContent%3A%20'space-evenly'%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20DividerView%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}c.isMDXComponent=!0;var m=n(30705),u=["components"],v={id:"divider",title:"Divider"},A=void 0,y={unversionedId:"components/divider",id:"version-4.0.0-rc.7/components/divider",title:"Divider",description:"Dividers are visual separators of content.",source:"@site/versioned_docs/version-4.0.0-rc.7/components/Divider.mdx",sourceDirName:"components",slug:"/components/divider",permalink:"/docs/components/divider",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.7/components/Divider.mdx",tags:[],version:"4.0.0-rc.7",frontMatter:{id:"divider",title:"Divider"},sidebar:"docs",previous:{title:"Dialog.Title",permalink:"/docs/components/dialog_title"},next:{title:"FAB",permalink:"/docs/components/fab"}},D={},k=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],C={toc:k};function h(e){var t=e.components,n=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.w,{mdxType:"IconsStyle"}),(0,a.kt)("p",null,"Dividers are visual separators of content.\nUse Divider when you want to make a distinction between sections of content.\nOur divider offers adding inset, color, orientation and subHeader to the component using props.\nAlso receives all ",(0,a.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("div",{class:"row inline-flex-center"},(0,a.kt)("div",{class:"col col--3"},(0,a.kt)("h4",null,"Import")),(0,a.kt)("div",{class:"col col--9"},(0,a.kt)(o.Z,{mdxType:"CodeBlock"},"import { Divider } from '@rneui/themed';")),(0,a.kt)("div",{class:"col col--3"},(0,a.kt)("h4",null,"Theme Key"," ",(0,a.kt)("a",{href:"../customizing#using-themeprovider"},(0,a.kt)(d.Fs0,{mdxType:"BiInfoCircle"})))),(0,a.kt)("div",{class:"col col--9"},(0,a.kt)(o.Z,{mdxType:"CodeBlock"},"Divider"))),(0,a.kt)(c,{mdxType:"Usage"}),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Includes all ",(0,a.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,a.kt)("div",{class:"table-responsive"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"color")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"The color of the component.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"inset")),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},"Applies inset to the divider.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"insetType")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"middle")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"left")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"right")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"left")),(0,a.kt)("td",{parentName:"tr",align:null},"Applies inset to a specific direction to the divider.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"orientation")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"vertical")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"horizontal")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"horizontal")),(0,a.kt)("td",{parentName:"tr",align:null},"Apply orientation to the divider.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"style")),(0,a.kt)("td",{parentName:"tr",align:null},"View Style"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Applies style to the divider.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"subHeader")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Adds subHeader text to the divider.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"subHeaderStyle")),(0,a.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Adds style to the subHeader text of the divider")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"width")),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Apply width to the divider."))))),(0,a.kt)("h2",{id:"playground"},"Playground"),(0,a.kt)(m.Z,{mdxType:"Play"}))}h.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);