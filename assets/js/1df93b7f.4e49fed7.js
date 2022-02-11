"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3237],{73342:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);const r=function(){return a.createElement("div",{className:"container"},a.createElement("div",{className:"row",id:"sponsor"},a.createElement("div",{className:"col col--6"},a.createElement("div",{className:"backers-section text--center"},a.createElement("h3",null,"Backers"),a.createElement("p",{className:"p--desc"},"Support us with a monthly donation and help us continue our activities."),a.createElement("a",{href:"https://opencollective.com/react-native-elements#backers",target:"_blank",rel:"noopener noreferrer"},a.createElement("img",{src:"https://opencollective.com/react-native-elements/backers.svg?width=695"})))),a.createElement("div",{className:"col col--6"},a.createElement("div",{className:"backers-section text--center"},a.createElement("h3",null,"Sponsors"),a.createElement("p",{className:"p--desc "},"Become a sponsor and get your logo on our README on GitHub with a link to your site.",a.createElement("a",{href:"https://opencollective.com/react-native-elements#sponsor"},"Become a sponsor")),a.createElement("a",{href:"https://opencollective.com/react-native-elements#sponsors",target:"_blank",rel:"noopener noreferrer"},a.createElement("img",{src:"https://opencollective.com/react-native-elements/sponsors.svg"}))))))}},93868:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=[{sponsorTitle:"\ud83d\udc8e Diamond Sponsor",colSize:5,items:[]},{sponsorTitle:"\ud83e\udd47 Gold Sponsor",colSize:3,items:[{title:"onKeyPress LLC",img:"https://avatars.githubusercontent.com/u/78321386?s=200&v=4",link:"https://onkeypress.io/"},{title:"Icons8",link:"https://icons8.com/",img:"https://avatars.githubusercontent.com/u/6615749?s=200&v=4"}]},{sponsorTitle:"\ud83e\udd48 Silver Sponsor",colSize:3,items:[]},{sponsorTitle:"\ud83e\udd49 Bronze Sponsor",colSize:2,items:[]}];const l=function(){return a.createElement("div",{className:"container"},a.createElement("div",{className:"text--center"},a.createElement("h1",{className:"hero__title gradient clip-text "},"Our Sponsors"),a.createElement("h4",{className:"subtitle "},"Built with passion, backed by the community")),r.map((function(e){var t=e.sponsorTitle,n=e.items,r=e.colSize,l=void 0===r?2:r;return n.length?a.createElement("div",{className:"margin-vert--md"},a.createElement("h1",{className:""},t),a.createElement("div",{className:"row"},n.map((function(e,t){var n=e.title,r=e.desc,o=e.link,s=e.img;return a.createElement("a",{href:o,key:t,className:"card row margin--md padding-vert--md col col--"+l,style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row"}},a.createElement("div",{style:{flex:.8}},s&&a.createElement("img",{height:20*l+"px",src:s,alt:"Image alt text",title:"Logo Title Text 1"})),a.createElement("div",{style:{flex:2},className:"card__body "},n&&a.createElement("h5",{className:""},"@",n),a.createElement("p",{className:"p--"},r)))})))):null})))}},95576:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var a=n(67294),r=n(96087),l=n(52263),o=n(44996),s=n(39960);const c=function(){(0,l.Z)().siteConfig;return a.createElement(a.Fragment,null,a.createElement("header",{className:"hero"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row",style:{alignItems:"center"}},a.createElement("div",{className:"col col--3 col--offset-1"},a.createElement("img",{className:"rne-hero-logo",src:"/img/website/app-preview2.png"})),a.createElement("div",{className:"col col--6 col--offset-1"},a.createElement("h1",{className:"hero__title"},"Cross Platform ",a.createElement("br",null),a.createElement("span",{className:"gradient clip-text"},"React Native")," UI toolkit"),a.createElement("h3",{className:""},"A React Native framework for making cross platform applications"),a.createElement("div",null,a.createElement(s.Z,{className:"button button--primary button--lg margin-vert--sm margin-right--md ",style:{color:"white"},to:(0,o.Z)("/docs")},"Get Started"),a.createElement(s.Z,{className:"button button--secondary button--outline button--lg   margin-vert--sm heroButton",to:"https://react-native-elements.js.org/"},"Playground \ud83d\ude80"),a.createElement("div",{className:"bubble bubble-right gradient"})))))),a.createElement("svg",{className:"hero-wave",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 220"},a.createElement("path",{"fill-opacity":"1",d:"M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,90.7C672,64,768,32,864,32C960,32,1056,64,1152,69.3C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"})),a.createElement("div",{className:"bubble bubble-left gradient"}),a.createElement("div",{className:"container"},a.createElement("div",{className:"snack-player","data-snack-name":"RNE Demo","data-snack-code":i,"data-snack-dependencies":"react-native-elements"})))};var i="import React from 'react';\nimport { View, StyleSheet } from 'react-native';\nimport { Button, Image, Text } from 'react-native-elements';\n\nconst uri ='https://reactnativeelements.com/img/website/logo.png';\n\nconst App = () => (\n  <View style={styles.box}>\n    <Image\n      source={{\n        uri,\n      }}\n      style={styles.image}\n    />\n    <Text h4 style={styles.text}>\n      Cross Platform React Native UI Toolkit\n    </Text>\n    <Button title=\"Getting Started\" />\n  </View>\n);\n\nexport default App;\n\nconst styles = StyleSheet.create({\n  box: {\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'space-between',\n    flexGrow: 1,\n    padding: 20,\n  },\n  image: { width: 200, height: 200 },\n  text: { textAlign: 'center', fontWeight: 'bold' },\n});\n",m=[{title:"Cross-Platform",description:"Consistent design across android, iOS, and web. 30+ components designed to save development time.",img:"/img/website/tweak.svg"},{title:"Easy to use",description:"Built completely in TypeScript. Starting your react native app has never been easier. Supports Expo too! ",img:"/img/website/explore.svg"},{title:"Customizable",description:"Easily style any of our components just the way you want.",img:"/img/website/design.svg"},{title:"Community-Driven",description:"100% built by the community. We're here because we love open source.",img:"/img/website/bootstrap.svg"}];const p=function(){return a.createElement(a.Fragment,null,a.createElement("section",{className:"margin-vert--xl"},a.createElement("div",{className:"container text--center"},a.createElement("h1",{className:"hero__title gradient clip-text"},"Why React Native Elements?")),a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},m.map((function(e,t){var n=e.title,r=e.description,l=e.img;return a.createElement("div",{key:t,className:"col col--3 ",style:{alignItems:"stretch",justifyContent:"center",display:"flex"}},a.createElement("div",{style:{justifyContent:"stretch"},className:"card margin-vert--lg text--center shadow--sm"},a.createElement("div",{className:"card__image padding-horiz--lg  margin-vert--lg "},a.createElement("img",{height:"120px",src:l,alt:"Image alt text",title:"Logo Title Text 1"})),a.createElement("div",{className:"card__body"},a.createElement("h3",{className:" gradient clip-text"},n),a.createElement("p",{className:"p--desc"},r))))}))))))};var u=n(87462),g=n(23746);const d=function(){return a.createElement(a.Fragment,null,a.createElement("section",{className:"margin-vert--xl"},a.createElement("div",{className:"container "},a.createElement("div",{className:"row",style:{alignItems:"center"}},a.createElement("div",{className:"col col--5 text--center"},a.createElement("h1",{className:"hero__title gradient clip-text"},"How to get started?")),a.createElement("div",{className:"col col--7 "},a.createElement("p",null,a.createElement("b",null,"1. Install the React Native Elements package from the NPM"),a.createElement("p",{className:"margin-vert--md margin-horiz--md"},a.createElement(g.ZP,(0,u.Z)({},g.lG,{code:"npm install @react-native-elements/base @react-native-elements/themed",language:"bash",theme:n(71418).Z}),(function(e){var t=e.className,n=e.style,r=e.tokens,l=e.getLineProps,o=e.getTokenProps;return a.createElement("pre",{className:t,style:n},r.map((function(e,t){return a.createElement("div",l({line:e,key:t}),e.map((function(e,t){return a.createElement("span",o({token:e,key:t}))})))})))}))),a.createElement("b",null,"2. Import the component and use it in your project"),a.createElement("p",{className:"margin-vert--md margin-horiz--md"},a.createElement(g.ZP,(0,u.Z)({},g.lG,{code:"import React from 'react';\nimport { Button } from '@react-native-elements/base';\n\nconst AwesomeButton = () => (<Button title='Welcome'/>)",language:"tsx",theme:n(71418).Z}),(function(e){var t=e.className,n=e.style,r=e.tokens,l=e.getLineProps,o=e.getTokenProps;return a.createElement("pre",{className:t,style:n},r.map((function(e,t){return a.createElement("div",l({line:e,key:t}),e.map((function(e,t){return a.createElement("span",o({token:e,key:t}))})))})))})))))))))};const y=function(){return a.createElement(a.Fragment,null,a.createElement("section",{className:"margin-vert--xl"},a.createElement("div",{className:"container "},a.createElement("div",{className:"row",style:{alignItems:"center"}},a.createElement("div",{className:"col col--3 col--offset-1 text--center"},a.createElement("img",{src:"/img/website/app-preview3.png"})),a.createElement("div",{className:"col col--8 text--center"},a.createElement("h1",{className:"hero__title gradient clip-text"},"The Demo App"),a.createElement("p",{className:"p--desc"},"To see React Native Elements in action, play a live demo published on Expo Go or run it by cloning the GitHub repo."),a.createElement(s.Z,{className:"button button--secondary button--outline button--lg heroButton margin-horiz--sm margin-vert--sm",to:"https://expo.io/@flyingcircle/react-native-elements-app"},"Run on Expo Go"),a.createElement(s.Z,{className:"button button--secondary button--lg heroButton margin-horiz--sm margin-vert--sm",to:"https://github.com/react-native-elements/react-native-elements-app"},"View on Github"))))))};var v=n(73342),h=n(93868);const E=function(){var e=(0,l.Z)().siteConfig,t=void 0===e?{}:e;return a.createElement(r.Z,{title:t.title,description:t.tagline},a.createElement(c,null),a.createElement(d,null),a.createElement(p,null),a.createElement(y,null),a.createElement(h.Z,null),a.createElement(v.Z,null))}},23746:(e,t,n)=>{n.d(t,{ZP:()=>d,lG:()=>o});var a=n(87410);const r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var l=n(67294),o={Prism:a.default,theme:r};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}var i=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},u=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=c({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=c({},n,{backgroundColor:null}),r};function g(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const d=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?u(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,l=c({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?c({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),s(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return l[n[0]];var o=a?{display:"inline-block"}:{},s=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,l=e.token,o=c({},g(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?c({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),s(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],l=0,o=0,s=[],c=[s];o>-1;){for(;(l=a[o]++)<r[o];){var u=void 0,g=t[o],d=n[o][l];if("string"==typeof d?(g=o>0?g:["plain"],u=d):(g=p(g,d.type),d.alias&&(g=p(g,d.alias)),u=d.content),"string"==typeof u){var y=u.split(i),v=y.length;s.push({types:g,content:y[0]});for(var h=1;h<v;h++)m(s),c.push(s=[]),s.push({types:g,content:y[h]})}else o++,t.push(g),n.push(u),a.push(0),r.push(u.length)}o--,t.pop(),n.pop(),a.pop(),r.pop()}return m(s),c}(void 0!==o?this.tokenize(t,a,o,n):[a]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(l.Component)},71418:(e,t,n)=>{n.d(t,{Z:()=>a});const a={plain:{color:"#9CDCFE",backgroundColor:"#1E1E1E"},styles:[{types:["prolog"],style:{color:"rgb(0, 0, 128)"}},{types:["comment"],style:{color:"rgb(106, 153, 85)"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"rgb(86, 156, 214)"}},{types:["number","inserted"],style:{color:"rgb(181, 206, 168)"}},{types:["constant"],style:{color:"rgb(100, 102, 149)"}},{types:["attr-name","variable"],style:{color:"rgb(156, 220, 254)"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"rgb(206, 145, 120)"}},{types:["selector"],style:{color:"rgb(215, 186, 125)"}},{types:["tag"],style:{color:"rgb(78, 201, 176)"}},{types:["tag"],languages:["markup"],style:{color:"rgb(86, 156, 214)"}},{types:["punctuation","operator"],style:{color:"rgb(212, 212, 212)"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"rgb(220, 220, 170)"}},{types:["class-name"],style:{color:"rgb(78, 201, 176)"}},{types:["char"],style:{color:"rgb(209, 105, 105)"}}]}}}]);