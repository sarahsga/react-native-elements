(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[57654],{27888:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var a=n(67294),o=n(13925),r=n(54236),l=n(40318),s=n(62290);const i=function(){var t=(0,l.Z)({componentName:"BottomSheet",props:{children:{type:s.n.ReactNode,value:"<Text>Some Content</Text>"},isVisible:{type:s.n.Boolean,value:!1},modalProps:{type:s.n.Object,value:'{ presentationStyle: "fullScreen" , }',description:"Modal Props -> https://reactnative.dev/docs/modal"}},scope:{BottomSheet:o.BottomSheet,Text:o.Text},imports:{"@rneui/base":{named:["BottomSheet","Text"]}}});return a.createElement(a.Fragment,null,a.createElement(r.Z,{params:t}))}},37047:(t,e,n)=>{"use strict";n.d(e,{w:()=>i});var a=n(67294),o=n(35742),r=n(14330),l=n(98576),s=n(61720),i=function(){return a.createElement(o.Z,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+s.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+r.Z+") format('truetype');\n          }\n        "))}},54236:(t,e,n)=>{"use strict";n.d(e,{Z:()=>u});var a=n(87462),o=n(67294),r=n(91262),l=n(18421),s=n(77356),i=n(41652),m=n(24309),p=n(16042),d=n(20346),c=n(30650);const u=function(t){var e=t.params,n=t.containerStyle,u=void 0===n?{}:n;return o.createElement(r.Z,{fallback:o.createElement(o.Fragment,null,"Loading...")},(function(){return o.createElement(d.X9.Provider,null,o.createElement(d.PK,{initialMetrics:c.o},o.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},u)},o.createElement(l.Z,(0,a.Z)({},e.compilerProps,{minHeight:62,placeholder:s.Z}))),o.createElement(i.Z,{msg:e.errorProps.msg,isPopup:!0}),o.createElement(m.Z,e.knobProps),o.createElement(i.Z,e.errorProps),o.createElement(p.E,e.actions)))}))}},71200:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>h,contentTitle:()=>u,default:()=>A,frontMatter:()=>c,metadata:()=>k,toc:()=>b});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=n(37047),s=(n(65488),n(85162),["components"]),i={toc:[]};function m(t){var e=t.components,n=(0,o.Z)(t,s);return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:"),"\nMake sure that you have completed ",(0,r.kt)("a",{parentName:"p",href:"../installation#install-react-native-safe-area-context"},"Step 3")," in the setup guide before using ",(0,r.kt)("inlineCode",{parentName:"p"},"BottomSheet"),"."),(0,r.kt)("p",null,"Overlay Modal that displays content from the bottom of the screen."),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE BottomSheet","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20BottomSheet%2C%20Button%2C%20ListItem%20%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20SafeAreaProvider%20%7D%20from%20'react-native-safe-area-context'%3B%0A%0Atype%20BottomSheetComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20BottomSheetComponent%3A%20React.FunctionComponent%3CBottomSheetComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5BisVisible%2C%20setIsVisible%5D%20%3D%20useState(false)%3B%0Aconst%20list%20%3D%20%5B%0A%20%20%7B%20title%3A%20'List%20Item%201'%20%7D%2C%0A%20%20%7B%20title%3A%20'List%20Item%202'%20%7D%2C%0A%20%20%7B%0A%20%20%20%20title%3A%20'Cancel'%2C%0A%20%20%20%20containerStyle%3A%20%7B%20backgroundColor%3A%20'red'%20%7D%2C%0A%20%20%20%20titleStyle%3A%20%7B%20color%3A%20'white'%20%7D%2C%0A%20%20%20%20onPress%3A%20()%20%3D%3E%20setIsVisible(false)%2C%0A%20%20%7D%2C%0A%5D%3B%0A%0Areturn%20(%0A%20%20%3CSafeAreaProvider%3E%0A%20%20%20%20%3CButton%0A%20%20%20%20%20%20title%3D%22Open%20Bottom%20Sheet%22%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setIsVisible(true)%7D%0A%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3CBottomSheet%20modalProps%3D%7B%7B%7D%7D%20isVisible%3D%7BisVisible%7D%3E%0A%20%20%20%20%20%20%7Blist.map((l%2C%20i)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CListItem%0A%20%20%20%20%20%20%20%20%20%20key%3D%7Bi%7D%0A%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7Bl.containerStyle%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bl.onPress%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%20style%3D%7Bl.titleStyle%7D%3E%7Bl.title%7D%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20))%7D%0A%20%20%20%20%3C%2FBottomSheet%3E%0A%20%20%3C%2FSafeAreaProvider%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Abutton%3A%20%7B%0A%20%20margin%3A%2010%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20BottomSheetComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}m.isMDXComponent=!0;var p=n(27888),d=["components"],c={id:"bottomsheet",title:"BottomSheet"},u=void 0,k={unversionedId:"components/bottomsheet",id:"version-4.0.0-rc.6/components/bottomsheet",title:"BottomSheet",description:"Overlay Modal that displays content from the bottom of the screen.",source:"@site/versioned_docs/version-4.0.0-rc.6/components/BottomSheet.mdx",sourceDirName:"components",slug:"/components/bottomsheet",permalink:"/docs/components/bottomsheet",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.6/components/BottomSheet.mdx",tags:[],version:"4.0.0-rc.6",frontMatter:{id:"bottomsheet",title:"BottomSheet"},sidebar:"docs",previous:{title:"Badge",permalink:"/docs/components/badge"},next:{title:"Button",permalink:"/docs/components/button"}},h={},b=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],f={toc:b};function A(t){var e=t.components,n=(0,o.Z)(t,d);return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l.w,{mdxType:"IconsStyle"}),(0,r.kt)("p",null,"Overlay Modal that displays content from the bottom of the screen.\nThis opens from the bottom of the screen."),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { BottomSheet } from "@rneui/themed";\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(m,{mdxType:"Usage"}),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("div",{class:"table-responsive"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"backdropStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"View Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Style of the backdrop container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"View Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Style of the bottom sheet's container. Use this to change the color of the underlay.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isVisible")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Is the modal component shown.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"modalProps")),(0,r.kt)("td",{parentName:"tr",align:null},"ModalProps"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null},"Additional props handed to the ",(0,r.kt)("inlineCode",{parentName:"td"},"Modal"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onBackdropPress")),(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Function")),(0,r.kt)("td",{parentName:"tr",align:null},"Handler for backdrop press.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scrollViewProps")),(0,r.kt)("td",{parentName:"tr",align:null},"ScrollViewProps"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null},"Used to add props to Scroll view."))))),(0,r.kt)("h2",{id:"playground"},"Playground"),(0,r.kt)(p.Z,{mdxType:"Play"}))}A.isMDXComponent=!0},61720:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a=n.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf"},14330:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a=n.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf"},98576:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a=n.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf"},33770:()=>{},72950:()=>{},54882:()=>{}}]);