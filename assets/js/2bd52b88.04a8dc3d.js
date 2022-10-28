(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[11493],{71064:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(67294),r=a(13925),l=a(54236),o=a(40318),i=a(62290);const d=function(){var e=(0,o.Z)({componentName:"Badge",props:{badgeStyle:{value:"{}",type:i.n.Object},containerStyle:{value:"{}",defaultValue:{},type:i.n.Object},onPress:{value:'() => {alert("onPress");}',type:i.n.Function},status:{value:"primary",options:{primary:"primary",success:"success",warning:"warning",error:"error"},type:i.n.Enum,description:"Defines the type of the button."},textProps:{value:"{}",type:i.n.Object},textStyle:{value:'{color:"#EFE"}',type:i.n.Object},value:{type:i.n.String,value:"Hello \ud83d\udc4b"},Component:{defaultValue:null,type:i.n.Object},options:{value:"{}",type:i.n.Object}},scope:{Badge:r.Badge},imports:{"@rneui/base":{named:["Badge"]}}});return n.createElement(n.Fragment,null,n.createElement(l.Z,{params:e}))}},54236:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(87462),r=a(67294),l=a(91262),o=a(18421),i=a(77356),d=a(41652),s=a(24309),p=a(16042),m=a(20346),u=a(30650);const c=function(e){var t=e.params,a=e.containerStyle,c=void 0===a?{}:a;return r.createElement(l.Z,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement(m.X9.Provider,null,r.createElement(m.PK,{initialMetrics:u.o},r.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},c)},r.createElement(o.Z,(0,n.Z)({},t.compilerProps,{minHeight:62,placeholder:i.Z}))),r.createElement(d.Z,{msg:t.errorProps.msg,isPopup:!0}),r.createElement(s.Z,t.knobProps),r.createElement(d.Z,t.errorProps),r.createElement(p.E,t.actions)))}))}},62380:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>C,frontMatter:()=>m,metadata:()=>c,toc:()=>A});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=(a(65488),a(85162),["components"]),i={toc:[{value:"withBadge Higher-Order Component",id:"withbadge-higher-order-component",level:3}]};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"withbadge-higher-order-component"},"withBadge Higher-Order Component"),(0,l.kt)("p",null,"The withBadge HOC allows you to easily add badges to icons and other components."),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE Badge","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20View%2C%20ScrollView%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Avatar%2C%20Badge%2C%20Icon%2C%20withBadge%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Aconst%20BadgedIcon%20%3D%20withBadge(15)(Icon)%3B%0A%0Aconst%20BadgeComponent%20%3D%20()%20%3D%3E%20%7B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EStandard%20Badge%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20marginTop%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2040%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CBadge%20value%3D%223%22%20status%3D%22success%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CBadge%20value%3D%2299%2B%22%20status%3D%22error%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CBadge%20value%3D%22500%22%20status%3D%22primary%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CBadge%20value%3D%2210%22%20status%3D%22warning%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EMini%20Badge%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%7BtextAlign%3A%20%22center%22%7D%7D%3EThis%20type%20of%20badge%20shows%20when%20no%20value%20prop%20is%20provided.%20This%20form%20is%20effective%20for%20showing%20statuses.%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20marginTop%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2020%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CBadge%20status%3D%22success%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CBadge%20status%3D%22error%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CBadge%20status%3D%22primary%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CBadge%20status%3D%22warning%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2020%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3ESuccess%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3EError%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3EPrimary%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3EWarning%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EBadge%20as%20Indicator%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20marginTop%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2040%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%20uri%3A%20'https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F41.jpg'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%22medium%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBadge%0A%20%20%20%20%20%20%20%20%20%20%20%20status%3D%22success%22%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20position%3A%20'absolute'%2C%20top%3A%205%2C%20left%3A%2040%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CBadgedIcon%20type%3D%22ionicon%22%20name%3D%22ios-chatbubbles%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fwomen%2F40.jpg'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%22large%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBadge%0A%20%20%20%20%20%20%20%20%20%20%20%20status%3D%22primary%22%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7B10%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20position%3A%20'absolute'%2C%20top%3A%205%2C%20left%3A%2060%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0AsubHeader%3A%20%7B%0A%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20color%20%3A%20%22white%22%2C%0A%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20paddingVertical%20%3A%205%2C%0A%20%20marginBottom%20%3A%2010%0A%7D%0A%7D)%0A%0Aexport%20default%20BadgeComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0;var s=a(71064),p=["components"],m={id:"badge",title:"Badge"},u=void 0,c={unversionedId:"components/badge",id:"version-4.0.0-rc.3/components/badge",title:"Badge",description:"Badges are small components typically used to communicate a numerical value or indicate the status of an item to the user.",source:"@site/versioned_docs/version-4.0.0-rc.3/components/Badge.mdx",sourceDirName:"components",slug:"/components/badge",permalink:"/docs/4.0.0-rc.3/components/badge",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.3/components/Badge.mdx",tags:[],version:"4.0.0-rc.3",frontMatter:{id:"badge",title:"Badge"},sidebar:"docs",previous:{title:"Avatar.Accessory",permalink:"/docs/4.0.0-rc.3/components/avatar_accessory"},next:{title:"BottomSheet",permalink:"/docs/4.0.0-rc.3/components/bottomsheet"}},g={},A=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],k={toc:A};function C(e){var t=e.components,a=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Badges are small components typically used to communicate a numerical value or indicate the status of an item to the user."),(0,l.kt)("h2",{id:"import"},"Import"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Badge } from "@rneui/themed";\n')),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(d,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Component")),(0,l.kt)("td",{parentName:"tr",align:null},"React Component"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Press handlers present then Pressable else View")),(0,l.kt)("td",{parentName:"tr",align:null},"Custom component to replace the badge outer component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"badgeStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Additional styling for badge (background) view component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style for the container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onLongPress")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a long-tap gesture is detected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPress")),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a single tap gesture is detected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPressIn")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a touch is engaged before ",(0,l.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPressOut")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a touch is released before ",(0,l.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pressableProps")),(0,l.kt)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"status")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"primary")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"success")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"warning")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"primary")),(0,l.kt)("td",{parentName:"tr",align:null},"Determines color of the indicator.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"textProps")),(0,l.kt)("td",{parentName:"tr",align:null},"TextProps"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Extra props for text component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"textStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Extra styling for icon component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Text value to be displayed by badge, defaults to empty."))))),(0,l.kt)("h2",{id:"playground"},"Playground"),(0,l.kt)(s.Z,{mdxType:"Play"}))}C.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);