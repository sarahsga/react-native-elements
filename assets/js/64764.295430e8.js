/*! For license information please see 64764.295430e8.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[64764],{84709:(e,t,r)=>{"use strict";var n=r(34155);Object.defineProperty(t,"__esModule",{value:!0}),t.codeFrameColumns=o,t.default=function(e,t,r,i={}){if(!s){s=!0;const e="Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";if(n.emitWarning)n.emitWarning(e,"DeprecationWarning");else{new Error(e).name="DeprecationWarning",console.warn(new Error(e))}}r=Math.max(r,0);return o(e,{start:{column:r,line:t}},i)};var i=r(23014);let s=!1;const a=/\r\n|[\n\r\u2028\u2029]/;function o(e,t,r={}){const n=(r.highlightCode||r.forceColor)&&(0,i.shouldHighlight)(r),s=(0,i.getChalk)(r),o=function(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}(s),l=(e,t)=>n?e(t):t,u=e.split(a),{start:c,end:p,markerLines:f}=function(e,t,r){const n=Object.assign({column:0,line:-1},e.start),i=Object.assign({},n,e.end),{linesAbove:s=2,linesBelow:a=3}=r||{},o=n.line,l=n.column,u=i.line,c=i.column;let p=Math.max(o-(s+1),0),f=Math.min(t.length,u+a);-1===o&&(p=0),-1===u&&(f=t.length);const d=u-o,h={};if(d)for(let m=0;m<=d;m++){const e=m+o;if(l)if(0===m){const r=t[e-1].length;h[e]=[l,r-l+1]}else if(m===d)h[e]=[0,c];else{const r=t[e-m].length;h[e]=[0,r]}else h[e]=!0}else h[o]=l===c?!l||[l,0]:[l,c-l];return{start:p,end:f,markerLines:h}}(t,u,r),d=t.start&&"number"==typeof t.start.column,h=String(p).length;let m=(n?(0,i.default)(e,r):e).split(a,p).slice(c,p).map(((e,t)=>{const n=c+1+t,i=` ${` ${n}`.slice(-h)} |`,s=f[n],a=!f[n+1];if(s){let t="";if(Array.isArray(s)){const n=e.slice(0,Math.max(s[0]-1,0)).replace(/[^\t]/g," "),u=s[1]||1;t=["\n ",l(o.gutter,i.replace(/\d/g," "))," ",n,l(o.marker,"^").repeat(u)].join(""),a&&r.message&&(t+=" "+l(o.message,r.message))}return[l(o.marker,">"),l(o.gutter,i),e.length>0?` ${e}`:"",t].join("")}return` ${l(o.gutter,i)}${e.length>0?` ${e}`:""}`})).join("\n");return r.message&&!d&&(m=`${" ".repeat(h+1)}${r.message}\n${m}`),n?s.reset(m):m}},78142:(e,t,r)=>{e.exports=r(78392)},24832:(e,t,r)=>{e.exports=r(97867)},45008:()=>{},20656:(e,t,r)=>{"use strict";function n(){const e=r(20664);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.assertSimpleType=h,t.makeStrongCache=u,t.makeStrongCacheSync=function(e){return a(u(e))},t.makeWeakCache=l,t.makeWeakCacheSync=function(e){return a(l(e))};var i=r(87241),s=r(31050);const a=e=>n()(e).sync;function*o(){return!0}function l(e){return c(WeakMap,e)}function u(e){return c(Map,e)}function c(e,t){const r=new e,n=new e,a=new e;return function*(e,o){const l=yield*(0,i.isAsync)(),u=l?n:r,c=yield*function*(e,t,r,n,s){const a=yield*p(t,n,s);if(a.valid)return a;if(e){const e=yield*p(r,n,s);if(e.valid){return{valid:!0,value:yield*(0,i.waitFor)(e.value.promise)}}}return{valid:!1,value:null}}(l,u,a,e,o);if(c.valid)return c.value;const h=new d(o),y=t(e,h);let g,b;if((0,s.isIterableIterator)(y)){const t=y;b=yield*(0,i.onFirstPause)(t,(()=>{g=function(e,t,r){const n=new m;return f(t,e,r,n),n}(h,a,e)}))}else b=y;return f(u,h,e,b),g&&(a.delete(e),g.release(b)),b}}function*p(e,t,r){const n=e.get(t);if(n)for(const{value:i,valid:s}of n)if(yield*s(r))return{valid:!0,value:i};return{valid:!1,value:null}}function f(e,t,r,n){t.configured()||t.forever();let i=e.get(r);switch(t.deactivate(),t.mode()){case"forever":i=[{value:n,valid:o}],e.set(r,i);break;case"invalidate":i=[{value:n,valid:t.validator()}],e.set(r,i);break;case"valid":i?i.push({value:n,valid:t.validator()}):(i=[{value:n,valid:t.validator()}],e.set(r,i))}}class d{constructor(e){this._active=!0,this._never=!1,this._forever=!1,this._invalidate=!1,this._configured=!1,this._pairs=[],this._data=void 0,this._data=e}simple(){return function(e){function t(t){if("boolean"!=typeof t)return e.using((()=>h(t())));t?e.forever():e.never()}return t.forever=()=>e.forever(),t.never=()=>e.never(),t.using=t=>e.using((()=>h(t()))),t.invalidate=t=>e.invalidate((()=>h(t()))),t}(this)}mode(){return this._never?"never":this._forever?"forever":this._invalidate?"invalidate":"valid"}forever(){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._never)throw new Error("Caching has already been configured with .never()");this._forever=!0,this._configured=!0}never(){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._forever)throw new Error("Caching has already been configured with .forever()");this._never=!0,this._configured=!0}using(e){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._never||this._forever)throw new Error("Caching has already been configured with .never or .forever()");this._configured=!0;const t=e(this._data),r=(0,i.maybeAsync)(e,"You appear to be using an async cache handler, but Babel has been called synchronously");return(0,i.isThenable)(t)?t.then((e=>(this._pairs.push([e,r]),e))):(this._pairs.push([t,r]),t)}invalidate(e){return this._invalidate=!0,this.using(e)}validator(){const e=this._pairs;return function*(t){for(const[r,n]of e)if(r!==(yield*n(t)))return!1;return!0}}deactivate(){this._active=!1}configured(){return this._configured}}function h(e){if((0,i.isThenable)(e))throw new Error("You appear to be using an async cache handler, which your current version of Babel does not support. We may add support for this in the future, but if you're on the most recent version of @babel/core and still seeing this error, then you'll need to synchronously handle your caching logic.");if(null!=e&&"string"!=typeof e&&"boolean"!=typeof e&&"number"!=typeof e)throw new Error("Cache keys must be either string, boolean, number, null, or undefined.");return e}class m{constructor(){this.released=!1,this.promise=void 0,this._resolve=void 0,this.promise=new Promise((e=>{this._resolve=e}))}release(e){this.released=!0,this._resolve(e)}}},4025:(e,t,r)=>{"use strict";function n(){const e=r(26470);return n=function(){return e},e}function i(){const e=r(11227);return i=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.buildPresetChain=function*(e,t){const r=yield*f(e,t);return r?{plugins:M(r.plugins),presets:M(r.presets),options:r.options.map((e=>_(e))),files:new Set}:null},t.buildPresetChainWalker=void 0,t.buildRootChain=function*(e,t){let r,i;const s=new o.ConfigPrinter,u=yield*E({options:e,dirname:t.cwd},t,void 0,s);if(!u)return null;const c=yield*s.output();let p;"string"==typeof e.configFile?p=yield*(0,l.loadConfig)(e.configFile,t.cwd,t.envName,t.caller):!1!==e.configFile&&(p=yield*(0,l.findRootConfig)(t.root,t.envName,t.caller));let{babelrc:f,babelrcRoots:d}=e,h=t.cwd;const m=B(),y=new o.ConfigPrinter;if(p){const e=g(p),n=yield*S(e,t,void 0,y);if(!n)return null;r=yield*y.output(),void 0===f&&(f=e.options.babelrc),void 0===d&&(h=e.dirname,d=e.options.babelrcRoots),N(m,n)}let v,x,T=!1;const A=B();if((!0===f||void 0===f)&&"string"==typeof t.filename){const e=yield*(0,l.findPackageData)(t.filename);if(e&&function(e,t,r,i){if("boolean"==typeof r)return r;const s=e.root;if(void 0===r)return-1!==t.directories.indexOf(s);let o=r;Array.isArray(o)||(o=[o]);if(o=o.map((e=>"string"==typeof e?n().resolve(i,e):e)),1===o.length&&o[0]===s)return-1!==t.directories.indexOf(s);return o.some((r=>("string"==typeof r&&(r=(0,a.default)(r,i)),t.directories.some((t=>W(r,i,t,e))))))}(t,e,d,h)){if(({ignore:v,config:x}=yield*(0,l.findRelativeConfig)(e,t.envName,t.caller)),v&&A.files.add(v.filepath),v&&$(t,v.ignore,null,v.dirname)&&(T=!0),x&&!T){const e=b(x),r=new o.ConfigPrinter,n=yield*S(e,t,void 0,r);n?(i=yield*r.output(),N(A,n)):T=!0}x&&T&&A.files.add(x.filepath)}}t.showConfig&&console.log(`Babel configs on "${t.filename}" (ascending priority):\n`+[r,i,c].filter((e=>!!e)).join("\n\n")+"\n-----End Babel configs-----");const P=N(N(N(B(),m),A),u);return{plugins:T?[]:M(P.plugins),presets:T?[]:M(P.presets),options:T?[]:P.options.map((e=>_(e))),fileHandling:T?"ignored":"transpile",ignore:v||void 0,babelrc:x||void 0,config:p||void 0,files:P.files}};var s=r(91139),a=r(98552),o=r(35078),l=r(50261),u=r(20656),c=r(79261);const p=i()("babel:config:config-chain");const f=I({root:e=>d(e),env:(e,t)=>h(e)(t),overrides:(e,t)=>m(e)(t),overridesEnv:(e,t,r)=>y(e)(t)(r),createLogger:()=>()=>{}});t.buildPresetChainWalker=f;const d=(0,u.makeWeakCacheSync)((e=>C(e,e.alias,c.createUncachedDescriptors))),h=(0,u.makeWeakCacheSync)((e=>(0,u.makeStrongCacheSync)((t=>w(e,e.alias,c.createUncachedDescriptors,t))))),m=(0,u.makeWeakCacheSync)((e=>(0,u.makeStrongCacheSync)((t=>O(e,e.alias,c.createUncachedDescriptors,t))))),y=(0,u.makeWeakCacheSync)((e=>(0,u.makeStrongCacheSync)((t=>(0,u.makeStrongCacheSync)((r=>F(e,e.alias,c.createUncachedDescriptors,t,r)))))));const g=(0,u.makeWeakCacheSync)((e=>({filepath:e.filepath,dirname:e.dirname,options:(0,s.validate)("configfile",e.options)}))),b=(0,u.makeWeakCacheSync)((e=>({filepath:e.filepath,dirname:e.dirname,options:(0,s.validate)("babelrcfile",e.options)}))),v=(0,u.makeWeakCacheSync)((e=>({filepath:e.filepath,dirname:e.dirname,options:(0,s.validate)("extendsfile",e.options)}))),E=I({root:e=>C(e,"base",c.createCachedDescriptors),env:(e,t)=>w(e,"base",c.createCachedDescriptors,t),overrides:(e,t)=>O(e,"base",c.createCachedDescriptors,t),overridesEnv:(e,t,r)=>F(e,"base",c.createCachedDescriptors,t,r),createLogger:(e,t,r)=>function(e,t,r){var n;if(!r)return()=>{};return r.configure(t.showConfig,o.ChainFormatter.Programmatic,{callerName:null==(n=t.caller)?void 0:n.name})}(0,t,r)}),x=I({root:e=>T(e),env:(e,t)=>A(e)(t),overrides:(e,t)=>P(e)(t),overridesEnv:(e,t,r)=>D(e)(t)(r),createLogger:(e,t,r)=>function(e,t,r){if(!r)return()=>{};return r.configure(t.showConfig,o.ChainFormatter.Config,{filepath:e})}(e.filepath,t,r)});function*S(e,t,r,n){const i=yield*x(e,t,r,n);return i&&i.files.add(e.filepath),i}const T=(0,u.makeWeakCacheSync)((e=>C(e,e.filepath,c.createUncachedDescriptors))),A=(0,u.makeWeakCacheSync)((e=>(0,u.makeStrongCacheSync)((t=>w(e,e.filepath,c.createUncachedDescriptors,t))))),P=(0,u.makeWeakCacheSync)((e=>(0,u.makeStrongCacheSync)((t=>O(e,e.filepath,c.createUncachedDescriptors,t))))),D=(0,u.makeWeakCacheSync)((e=>(0,u.makeStrongCacheSync)((t=>(0,u.makeStrongCacheSync)((r=>F(e,e.filepath,c.createUncachedDescriptors,t,r)))))));function C({dirname:e,options:t},r,n){return n(e,t,r)}function w({dirname:e,options:t},r,n,i){const s=t.env&&t.env[i];return s?n(e,s,`${r}.env["${i}"]`):null}function O({dirname:e,options:t},r,n,i){const s=t.overrides&&t.overrides[i];if(!s)throw new Error("Assertion failure - missing override");return n(e,s,`${r}.overrides[${i}]`)}function F({dirname:e,options:t},r,n,i,s){const a=t.overrides&&t.overrides[i];if(!a)throw new Error("Assertion failure - missing override");const o=a.env&&a.env[s];return o?n(e,o,`${r}.overrides[${i}].env["${s}"]`):null}function I({root:e,env:t,overrides:r,overridesEnv:n,createLogger:i}){return function*(s,a,o=new Set,l){const{dirname:u}=s,c=[],p=e(s);if(L(p,u,a)){c.push({config:p,envName:void 0,index:void 0});const e=t(s,a.envName);e&&L(e,u,a)&&c.push({config:e,envName:a.envName,index:void 0}),(p.options.overrides||[]).forEach(((e,t)=>{const i=r(s,t);if(L(i,u,a)){c.push({config:i,index:t,envName:void 0});const e=n(s,t,a.envName);e&&L(e,u,a)&&c.push({config:e,index:t,envName:a.envName})}}))}if(c.some((({config:{options:{ignore:e,only:t}}})=>$(a,e,t,u))))return null;const f=B(),d=i(s,a,l);for(const{config:e,index:t,envName:r}of c){if(!(yield*k(f,e.options,u,a,o,l)))return null;d(e,t,r),yield*j(f,e)}return f}}function*k(e,t,r,n,i,s){if(void 0===t.extends)return!0;const a=yield*(0,l.loadConfig)(t.extends,r,n.envName,n.caller);if(i.has(a))throw new Error(`Configuration cycle detected loading ${a.filepath}.\nFile already loaded following the config chain:\n`+Array.from(i,(e=>` - ${e.filepath}`)).join("\n"));i.add(a);const o=yield*S(v(a),n,i,s);return i.delete(a),!!o&&(N(e,o),!0)}function N(e,t){e.options.push(...t.options),e.plugins.push(...t.plugins),e.presets.push(...t.presets);for(const r of t.files)e.files.add(r);return e}function*j(e,{options:t,plugins:r,presets:n}){return e.options.push(t),e.plugins.push(...yield*r()),e.presets.push(...yield*n()),e}function B(){return{options:[],presets:[],plugins:[],files:new Set}}function _(e){const t=Object.assign({},e);return delete t.extends,delete t.env,delete t.overrides,delete t.plugins,delete t.presets,delete t.passPerPreset,delete t.ignore,delete t.only,delete t.test,delete t.include,delete t.exclude,Object.prototype.hasOwnProperty.call(t,"sourceMap")&&(t.sourceMaps=t.sourceMap,delete t.sourceMap),t}function M(e){const t=new Map,r=[];for(const n of e)if("function"==typeof n.value){const e=n.value;let i=t.get(e);i||(i=new Map,t.set(e,i));let s=i.get(n.name);s?s.value=n:(s={value:n},r.push(s),n.ownPass||i.set(n.name,s))}else r.push({value:n});return r.reduce(((e,t)=>(e.push(t.value),e)),[])}function L({options:e},t,r){return(void 0===e.test||R(r,e.test,t))&&(void 0===e.include||R(r,e.include,t))&&(void 0===e.exclude||!R(r,e.exclude,t))}function R(e,t,r){return V(e,Array.isArray(t)?t:[t],r)}function U(e,t){return t instanceof RegExp?String(t):t}function $(e,t,r,n){if(t&&V(e,t,n)){var i;const r=`No config is applied to "${null!=(i=e.filename)?i:"(unknown)"}" because it matches one of \`ignore: ${JSON.stringify(t,U)}\` from "${n}"`;return p(r),e.showConfig&&console.log(r),!0}if(r&&!V(e,r,n)){var s;const t=`No config is applied to "${null!=(s=e.filename)?s:"(unknown)"}" because it fails to match one of \`only: ${JSON.stringify(r,U)}\` from "${n}"`;return p(t),e.showConfig&&console.log(t),!0}return!1}function V(e,t,r){return t.some((t=>W(t,r,e.filename,e)))}function W(e,t,r,n){if("function"==typeof e)return!!e(r,{dirname:t,envName:n.envName,caller:n.caller});if("string"!=typeof r)throw new Error("Configuration contains string/RegExp pattern, but no filename was passed to Babel");return"string"==typeof e&&(e=(0,a.default)(e,t)),e.test(r)}},79261:(e,t,r)=>{"use strict";function n(){const e=r(20664);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.createCachedDescriptors=function(e,t,r){const{plugins:n,presets:i,passPerPreset:s}=t;return{options:u(t,e),plugins:n?()=>d(n,e)(r):()=>l([]),presets:i?()=>p(i,e)(r)(!!s):()=>l([])}},t.createDescriptor=v,t.createUncachedDescriptors=function(e,t,r){let n,i;return{options:u(t,e),*plugins(){return n||(n=yield*g(t.plugins||[],e,r)),n},*presets(){return i||(i=yield*y(t.presets||[],e,r,!!t.passPerPreset)),i}}};var i=r(50261),s=r(46415),a=r(20656),o=r(34669);function*l(e){return e}function u(e,t){return"string"==typeof e.browserslistConfigFile&&(e.browserslistConfigFile=(0,o.resolveBrowserslistConfigFile)(e.browserslistConfigFile,t)),e}const c=new WeakMap,p=(0,a.makeWeakCacheSync)(((e,t)=>{const r=t.using((e=>e));return(0,a.makeStrongCacheSync)((t=>(0,a.makeStrongCache)((function*(n){return(yield*y(e,r,t,n)).map((e=>m(c,e)))}))))})),f=new WeakMap,d=(0,a.makeWeakCacheSync)(((e,t)=>{const r=t.using((e=>e));return(0,a.makeStrongCache)((function*(t){return(yield*g(e,r,t)).map((e=>m(f,e)))}))})),h={};function m(e,t){const{value:r,options:n=h}=t;if(!1===n)return t;let i=e.get(r);i||(i=new WeakMap,e.set(r,i));let s=i.get(n);if(s||(s=[],i.set(n,s)),-1===s.indexOf(t)){const e=s.filter((e=>{return n=t,(r=e).name===n.name&&r.value===n.value&&r.options===n.options&&r.dirname===n.dirname&&r.alias===n.alias&&r.ownPass===n.ownPass&&(r.file&&r.file.request)===(n.file&&n.file.request)&&(r.file&&r.file.resolved)===(n.file&&n.file.resolved);var r,n}));if(e.length>0)return e[0];s.push(t)}return t}function*y(e,t,r,n){return yield*b("preset",e,t,r,n)}function*g(e,t,r){return yield*b("plugin",e,t,r)}function*b(e,t,r,i,s){const a=yield*n().all(t.map(((t,n)=>v(t,r,{type:e,alias:`${i}$${n}`,ownPass:!!s}))));return function(e){const t=new Map;for(const r of e){if("function"!=typeof r.value)continue;let n=t.get(r.value);if(n||(n=new Set,t.set(r.value,n)),n.has(r.name)){const t=e.filter((e=>e.value===r.value));throw new Error(["Duplicate plugin/preset detected.","If you'd like to use two separate instances of a plugin,","they need separate names, e.g.","","  plugins: [","    ['some-plugin', {}],","    ['some-plugin', {}, 'some unique name'],","  ]","","Duplicates detected are:",`${JSON.stringify(t,null,2)}`].join("\n"))}n.add(r.name)}}(a),a}function*v(e,t,{type:r,alias:n,ownPass:a}){const o=(0,s.getItemDescriptor)(e);if(o)return o;let l,u,c,p=e;Array.isArray(p)&&(3===p.length?[p,u,l]=p:[p,u]=p);let f=null;if("string"==typeof p){if("string"!=typeof r)throw new Error("To resolve a string-based item, the type of item must be given");const e="plugin"===r?i.loadPlugin:i.loadPreset,n=p;({filepath:f,value:p}=yield*e(p,t)),c={request:n,resolved:f}}if(!p)throw new Error(`Unexpected falsy value: ${String(p)}`);if("object"==typeof p&&p.__esModule){if(!p.default)throw new Error("Must export a default export when using ES6 modules.");p=p.default}if("object"!=typeof p&&"function"!=typeof p)throw new Error(`Unsupported format: ${typeof p}. Expected an object or a function.`);if(null!==f&&"object"==typeof p&&p)throw new Error(`Plugin/Preset files are not allowed to export objects, only functions. In ${f}`);return{name:l,alias:f||n,value:p,options:u,dirname:t,ownPass:a,file:c}}},50261:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ROOT_CONFIG_FILENAMES=void 0,t.findConfigUpwards=function(e){return null},t.findPackageData=function*(e){return{filepath:e,directories:[],pkg:null,isPackage:!1}},t.findRelativeConfig=function*(e,t,r){return{config:null,ignore:null}},t.findRootConfig=function*(e,t,r){return null},t.loadConfig=function*(e,t,r,n){throw new Error(`Cannot load ${e} relative to ${t} in a browser`)},t.loadPlugin=function(e,t){throw new Error(`Cannot load plugin ${e} relative to ${t} in a browser`)},t.loadPreset=function(e,t){throw new Error(`Cannot load preset ${e} relative to ${t} in a browser`)},t.resolvePlugin=function(e,t){return null},t.resolvePreset=function(e,t){return null},t.resolveShowConfigPath=function*(e){return null};t.ROOT_CONFIG_FILENAMES=[]},49178:(e,t,r)=>{"use strict";function n(){const e=r(20664);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(87241),s=r(31050),a=r(32420),o=r(80424),l=r(46415),u=r(4025),c=r(42853);function p(){const e=r(49838);return p=function(){return e},e}var f=r(20656),d=r(91139),h=r(54931),m=r(85839),y=r(26248),g=(r(45008),n()((function*(e){var t;const r=yield*(0,y.default)(e);if(!r)return null;const{options:n,context:i,fileHandling:a}=r;if("ignored"===a)return null;const o={},{plugins:u,presets:p}=n;if(!u||!p)throw new Error("Assertion failure - plugins and presets exist");const f=Object.assign({},i,{targets:n.targets}),h=e=>{const t=(0,l.getItemDescriptor)(e);if(!t)throw new Error("Assertion failure - must be config item");return t},m=p.map(h),g=u.map(h),v=[[]],E=[],x=[],T=yield*b(i,(function*e(t,r){const n=[];for(let s=0;s<t.length;s++){const e=t[s];if(!1!==e.options){try{var i=yield*P(e,f)}catch(a){throw"BABEL_UNKNOWN_OPTION"===a.code&&(0,d.checkNoUnwrappedItemOptionPairs)(t,s,"preset",a),a}x.push(i.externalDependencies),e.ownPass?n.push({preset:i.chain,pass:[]}):n.unshift({preset:i.chain,pass:r})}}if(n.length>0){v.splice(1,0,...n.map((e=>e.pass)).filter((e=>e!==r)));for(const{preset:t,pass:r}of n){if(!t)return!0;r.push(...t.plugins);if(yield*e(t.presets,r))return!0;t.options.forEach((e=>{(0,s.mergeOptions)(o,e)}))}}}))(m,v[0]);if(T)return null;const A=o;(0,s.mergeOptions)(A,n);const D=Object.assign({},f,{assumptions:null!=(t=A.assumptions)?t:{}});return yield*b(i,(function*(){v[0].unshift(...g);for(const r of v){const n=[];E.push(n);for(let i=0;i<r.length;i++){const s=r[i];if(!1!==s.options){try{var e=yield*S(s,D)}catch(t){throw"BABEL_UNKNOWN_PLUGIN_PROPERTY"===t.code&&(0,d.checkNoUnwrappedItemOptionPairs)(r,i,"plugin",t),t}n.push(e),x.push(e.externalDependencies)}}}}))(),A.plugins=E[0],A.presets=E.slice(1).filter((e=>e.length>0)).map((e=>({plugins:e}))),A.passPerPreset=A.presets.length>0,{options:A,passes:E,externalDependencies:(0,c.finalize)(x)}})));function b(e,t){return function*(r,n){try{return yield*t(r,n)}catch(i){throw/^\[BABEL\]/.test(i.message)||(i.message=`[BABEL] ${e.filename||"unknown"}: ${i.message}`),i}}}t.default=g;const v=e=>(0,f.makeWeakCache)((function*({value:t,options:r,dirname:n,alias:s},o){if(!1===r)throw new Error("Assertion failure");r=r||{};const l=[];let u=t;if("function"==typeof t){const c=(0,i.maybeAsync)(t,"You appear to be using an async plugin/preset, but Babel has been called synchronously"),f=Object.assign({},a,e(o,l));try{u=yield*c(f,r,n)}catch(p){throw s&&(p.message+=` (While processing: ${JSON.stringify(s)})`),p}}if(!u||"object"!=typeof u)throw new Error("Plugin/Preset did not return an object.");if((0,i.isThenable)(u))throw yield*[],new Error(`You appear to be using a promise as a plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version. As an alternative, you can prefix the promise with "await". (While processing: ${JSON.stringify(s)})`);if(l.length>0&&(!o.configured()||"forever"===o.mode())){let e=`A plugin/preset has external untracked dependencies (${l[0]}), but the cache `;throw o.configured()?e+=" has been configured to never be invalidated. ":e+="has not been configured to be invalidated when the external dependencies change. ",e+=`Plugins/presets should configure their cache to be invalidated when the external dependencies change, for example using \`api.cache.invalidate(() => statSync(filepath).mtimeMs)\` or \`api.cache.never()\`\n(While processing: ${JSON.stringify(s)})`,new Error(e)}return{value:u,options:r,dirname:n,alias:s,externalDependencies:(0,c.finalize)(l)}})),E=v(m.makePluginAPI),x=v(m.makePresetAPI);function*S(e,t){if(e.value instanceof o.default){if(e.options)throw new Error("Passed options to an existing Plugin instance will not work.");return e.value}return yield*T(yield*E(e,t),t)}const T=(0,f.makeWeakCache)((function*({value:e,options:t,dirname:r,alias:n,externalDependencies:s},a){const l=(0,h.validatePluginObject)(e),u=Object.assign({},l);if(u.visitor&&(u.visitor=p().default.explode(Object.assign({},u.visitor))),u.inherits){const e={name:void 0,alias:`${n}$inherits`,value:u.inherits,options:t,dirname:r},o=yield*(0,i.forwardAsync)(S,(t=>a.invalidate((r=>t(e,r)))));u.pre=C(o.pre,u.pre),u.post=C(o.post,u.post),u.manipulateOptions=C(o.manipulateOptions,u.manipulateOptions),u.visitor=p().default.visitors.merge([o.visitor||{},u.visitor||{}]),o.externalDependencies.length>0&&(s=0===s.length?o.externalDependencies:(0,c.finalize)([s,o.externalDependencies]))}return new o.default(u,t,n,s)})),A=(e,t)=>{if(e.test||e.include||e.exclude){const e=t.name?`"${t.name}"`:"/* your preset */";throw new Error([`Preset ${e} requires a filename to be set when babel is called directly,`,"```",`babel.transform(code, { filename: 'file.ts', presets: [${e}] });`,"```","See https://babeljs.io/docs/en/options#filename for more information."].join("\n"))}};function*P(e,t){const r=D(yield*x(e,t));return((e,t,r)=>{if(!t.filename){const{options:t}=e;A(t,r),t.overrides&&t.overrides.forEach((e=>A(e,r)))}})(r,t,e),{chain:yield*(0,u.buildPresetChain)(r,t),externalDependencies:r.externalDependencies}}const D=(0,f.makeWeakCacheSync)((({value:e,dirname:t,alias:r,externalDependencies:n})=>({options:(0,d.validate)("preset",e),alias:r,dirname:t,externalDependencies:n})));function C(e,t){const r=[e,t].filter(Boolean);return r.length<=1?r[0]:function(...e){for(const t of r)t.apply(this,e)}}},85839:(e,t,r)=>{"use strict";function n(){const e=r(18141);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.makeConfigAPI=a,t.makePluginAPI=function(e,t){return Object.assign({},o(e,t),{assumption:t=>e.using((e=>e.assumptions[t]))})},t.makePresetAPI=o;var i=r(32420),s=r(20656);r(45008);function a(e){return{version:i.version,cache:e.simple(),env:t=>e.using((e=>void 0===t?e.envName:"function"==typeof t?(0,s.assertSimpleType)(t(e.envName)):(Array.isArray(t)||(t=[t]),t.some((t=>{if("string"!=typeof t)throw new Error("Unexpected non-string value");return t===e.envName}))))),async:()=>!1,caller:t=>e.using((e=>(0,s.assertSimpleType)(t(e.caller)))),assertVersion:l}}function o(e,t){return Object.assign({},a(e),{targets:()=>JSON.parse(e.using((e=>JSON.stringify(e.targets)))),addExternalDependency:e=>{t.push(e)}})}function l(e){if("number"==typeof e){if(!Number.isInteger(e))throw new Error("Expected string or integer value.");e=`^${e}.0.0-0`}if("string"!=typeof e)throw new Error("Expected string or integer value.");if(n().satisfies(i.version,e))return;const t=Error.stackTraceLimit;"number"==typeof t&&t<25&&(Error.stackTraceLimit=25);const r=new Error(`Requires Babel "${e}", but was loaded with "${i.version}". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel.`);throw"number"==typeof t&&(Error.stackTraceLimit=t),Object.assign(r,{code:"BABEL_VERSION_UNSUPPORTED",version:i.version,range:e})}},42853:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.finalize=function(e){return Object.freeze(e)},t.flattenToSet=function(e){const t=new Set,r=[e];for(;r.length>0;)for(const e of r.pop())Array.isArray(e)?r.push(e):t.add(e);return t}},2837:(e,t,r)=>{"use strict";var n=r(34155);Object.defineProperty(t,"__esModule",{value:!0}),t.getEnv=function(e="development"){return n.env.BABEL_ENV||"production"}},20695:(e,t,r)=>{"use strict";function n(){const e=r(20664);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.createConfigItem=function(e,t,r){return void 0!==r?l.errback(e,t,r):"function"==typeof t?l.errback(e,void 0,r):l.sync(e,t)},t.createConfigItemSync=t.createConfigItemAsync=void 0,Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}}),t.loadPartialConfigSync=t.loadPartialConfigAsync=t.loadPartialConfig=t.loadOptionsSync=t.loadOptionsAsync=t.loadOptions=void 0;var i=r(49178),s=r(26248),a=r(46415);const o=n()((function*(e){var t;const r=yield*(0,i.default)(e);return null!=(t=null==r?void 0:r.options)?t:null})),l=n()(a.createConfigItem),u=e=>(t,r)=>(void 0===r&&"function"==typeof t&&(r=t,t=void 0),r?e.errback(t,r):e.sync(t)),c=u(s.loadPartialConfig);t.loadPartialConfig=c;const p=s.loadPartialConfig.sync;t.loadPartialConfigSync=p;const f=s.loadPartialConfig.async;t.loadPartialConfigAsync=f;const d=u(o);t.loadOptions=d;const h=o.sync;t.loadOptionsSync=h;const m=o.async;t.loadOptionsAsync=m;const y=l.sync;t.createConfigItemSync=y;const g=l.async;t.createConfigItemAsync=g},46415:(e,t,r)=>{"use strict";function n(){const e=r(26470);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.createConfigItem=function*(e,{dirname:t=".",type:r}={}){return s(yield*(0,i.createDescriptor)(e,n().resolve(t),{type:r,alias:"programmatic item"}))},t.createItemFromDescriptor=s,t.getItemDescriptor=function(e){if(null!=e&&e[a])return e._descriptor;return};var i=r(79261);function s(e){return new o(e)}const a=Symbol.for("@babel/core@7 - ConfigItem");class o{constructor(e){this._descriptor=void 0,this[a]=!0,this.value=void 0,this.options=void 0,this.dirname=void 0,this.name=void 0,this.file=void 0,this._descriptor=e,Object.defineProperty(this,"_descriptor",{enumerable:!1}),Object.defineProperty(this,a,{enumerable:!1}),this.value=this._descriptor.value,this.options=this._descriptor.options,this.dirname=this._descriptor.dirname,this.name=this._descriptor.name,this.file=this._descriptor.file?{request:this._descriptor.file.request,resolved:this._descriptor.file.resolved}:void 0,Object.freeze(this)}}Object.freeze(o.prototype)},26248:(e,t,r)=>{"use strict";function n(){const e=r(26470);return n=function(){return e},e}function i(){const e=r(20664);return i=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=h,t.loadPartialConfig=void 0;var s=r(80424),a=r(31050),o=r(46415),l=r(4025),u=r(2837),c=r(91139),p=r(50261),f=r(34669);const d=["showIgnoredFiles"];function*h(e){if(null!=e&&("object"!=typeof e||Array.isArray(e)))throw new Error("Babel options must be an object, null, or undefined");const t=e?(0,c.validate)("arguments",e):{},{envName:r=(0,u.getEnv)(),cwd:i=".",root:s=".",rootMode:d="root",caller:h,cloneInputAst:m=!0}=t,y=n().resolve(i),g=function(e,t){switch(t){case"root":return e;case"upward-optional":{const t=(0,p.findConfigUpwards)(e);return null===t?e:t}case"upward":{const t=(0,p.findConfigUpwards)(e);if(null!==t)return t;throw Object.assign(new Error(`Babel was run with rootMode:"upward" but a root could not be found when searching upward from "${e}".\nOne of the following config files must be in the directory tree: "${p.ROOT_CONFIG_FILENAMES.join(", ")}".`),{code:"BABEL_ROOT_NOT_FOUND",dirname:e})}default:throw new Error("Assertion failure - unknown rootMode value.")}}(n().resolve(y,s),d),b="string"==typeof t.filename?n().resolve(i,t.filename):void 0,v={filename:b,cwd:y,root:g,envName:r,caller:h,showConfig:(yield*(0,p.resolveShowConfigPath)(y))===b},E=yield*(0,l.buildRootChain)(t,v);if(!E)return null;const x={assumptions:{}};E.options.forEach((e=>{(0,a.mergeOptions)(x,e)}));return{options:Object.assign({},x,{targets:(0,f.resolveTargets)(x,g),cloneInputAst:m,babelrc:!1,configFile:!1,browserslistConfigFile:!1,passPerPreset:!1,envName:v.envName,cwd:v.cwd,root:v.root,rootMode:"root",filename:"string"==typeof v.filename?v.filename:void 0,plugins:E.plugins.map((e=>(0,o.createItemFromDescriptor)(e))),presets:E.presets.map((e=>(0,o.createItemFromDescriptor)(e)))}),context:v,fileHandling:E.fileHandling,ignore:E.ignore,babelrc:E.babelrc,config:E.config,files:E.files}}const m=i()((function*(e){let t=!1;if("object"==typeof e&&null!==e&&!Array.isArray(e)){var r=e;({showIgnoredFiles:t}=r),e=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(r,d)}const n=yield*h(e);if(!n)return null;const{options:i,babelrc:a,ignore:o,config:l,fileHandling:u,files:c}=n;return"ignored"!==u||t?((i.plugins||[]).forEach((e=>{if(e.value instanceof s.default)throw new Error("Passing cached plugin instances is not supported in babel.loadPartialConfig()")})),new y(i,a?a.filepath:void 0,o?o.filepath:void 0,l?l.filepath:void 0,u,c)):null}));t.loadPartialConfig=m;class y{constructor(e,t,r,n,i,s){this.options=void 0,this.babelrc=void 0,this.babelignore=void 0,this.config=void 0,this.fileHandling=void 0,this.files=void 0,this.options=e,this.babelignore=r,this.babelrc=t,this.config=n,this.fileHandling=i,this.files=s,Object.freeze(this)}hasFilesystemConfig(){return void 0!==this.babelrc||void 0!==this.config}}Object.freeze(y.prototype)},98552:(e,t,r)=>{"use strict";function n(){const e=r(26470);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const r=n().resolve(t,e).split(n().sep);return new RegExp(["^",...r.map(((e,t)=>{const n=t===r.length-1;return"**"===e?n?c:u:"*"===e?n?l:o:0===e.indexOf("*.")?a+p(e.slice(1))+(n?s:i):p(e)+(n?s:i)}))].join(""))};const i=`\\${n().sep}`,s=`(?:${i}|$)`,a=`[^${i}]+`,o=`(?:${a}${i})`,l=`(?:${a}${s})`,u=`${o}*?`,c=`${o}*?${l}?`;function p(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")}},80424:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(42853);t.default=class{constructor(e,t,r,i=(0,n.finalize)([])){this.key=void 0,this.manipulateOptions=void 0,this.post=void 0,this.pre=void 0,this.visitor=void 0,this.parserOverride=void 0,this.generatorOverride=void 0,this.options=void 0,this.externalDependencies=void 0,this.key=e.name||r,this.manipulateOptions=e.manipulateOptions,this.post=e.post,this.pre=e.pre,this.visitor=e.visitor||{},this.parserOverride=e.parserOverride,this.generatorOverride=e.generatorOverride,this.options=t,this.externalDependencies=i}}},35078:(e,t,r)=>{"use strict";function n(){const e=r(20664);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.ConfigPrinter=t.ChainFormatter=void 0;const i={Programmatic:0,Config:1};t.ChainFormatter=i;const s={title(e,t,r){let n="";return e===i.Programmatic?(n="programmatic options",t&&(n+=" from "+t)):n="config "+r,n},loc(e,t){let r="";return null!=e&&(r+=`.overrides[${e}]`),null!=t&&(r+=`.env["${t}"]`),r},*optionsAndDescriptors(e){const t=Object.assign({},e.options);delete t.overrides,delete t.env;const r=[...yield*e.plugins()];r.length&&(t.plugins=r.map((e=>a(e))));const n=[...yield*e.presets()];return n.length&&(t.presets=[...n].map((e=>a(e)))),JSON.stringify(t,void 0,2)}};function a(e){var t;let r=null==(t=e.file)?void 0:t.request;return null==r&&("object"==typeof e.value?r=e.value:"function"==typeof e.value&&(r=`[Function: ${e.value.toString().slice(0,50)} ... ]`)),null==r&&(r="[Unknown]"),void 0===e.options?r:null==e.name?[r,e.options]:[r,e.options,e.name]}class o{constructor(){this._stack=[]}configure(e,t,{callerName:r,filepath:n}){return e?(e,i,s)=>{this._stack.push({type:t,callerName:r,filepath:n,content:e,index:i,envName:s})}:()=>{}}static*format(e){let t=s.title(e.type,e.callerName,e.filepath);const r=s.loc(e.index,e.envName);r&&(t+=` ${r}`);return`${t}\n${yield*s.optionsAndDescriptors(e.content)}`}*output(){if(0===this._stack.length)return"";return(yield*n().all(this._stack.map((e=>o.format(e))))).join("\n\n")}}t.ConfigPrinter=o},34669:(e,t,r)=>{"use strict";function n(){const e=r(34077);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.resolveBrowserslistConfigFile=function(e,t){return},t.resolveTargets=function(e,t){let r=e.targets;("string"==typeof r||Array.isArray(r))&&(r={browsers:r});r&&r.esmodules&&(r=Object.assign({},r,{esmodules:"intersect"}));return(0,n().default)(r,{ignoreBrowserslistConfig:!0,browserslistEnv:e.browserslistEnv})}},31050:(e,t)=>{"use strict";function r(e,t){for(const r of Object.keys(t)){const n=t[r];void 0!==n&&(e[r]=n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.isIterableIterator=function(e){return!!e&&"function"==typeof e.next&&"function"==typeof e[Symbol.iterator]},t.mergeOptions=function(e,t){for(const n of Object.keys(t))if("parserOpts"!==n&&"generatorOpts"!==n&&"assumptions"!==n||!t[n]){const r=t[n];void 0!==r&&(e[n]=r)}else{const i=t[n];r(e[n]||(e[n]={}),i)}}},92517:(e,t,r)=>{"use strict";function n(){const e=r(34077);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.access=a,t.assertArray=u,t.assertAssumptions=function(e,t){if(void 0===t)return;if("object"!=typeof t||null===t)throw new Error(`${s(e)} must be an object or undefined.`);let r=e;do{r=r.parent}while("root"!==r.type);const n="preset"===r.source;for(const o of Object.keys(t)){const r=a(e,o);if(!i.assumptionsNames.has(o))throw new Error(`${s(r)} is not a supported assumption.`);if("boolean"!=typeof t[o])throw new Error(`${s(r)} must be a boolean.`);if(n&&!1===t[o])throw new Error(`${s(r)} cannot be set to 'false' inside presets.`)}return t},t.assertBabelrcSearch=function(e,t){if(void 0===t||"boolean"==typeof t)return t;if(Array.isArray(t))t.forEach(((t,r)=>{if(!c(t))throw new Error(`${s(a(e,r))} must be a string/Function/RegExp.`)}));else if(!c(t))throw new Error(`${s(e)} must be a undefined, a boolean, a string/Function/RegExp or an array of those, got ${JSON.stringify(t)}`);return t},t.assertBoolean=o,t.assertCallerMetadata=function(e,t){const r=l(e,t);if(r){if("string"!=typeof r.name)throw new Error(`${s(e)} set but does not contain "name" property string`);for(const t of Object.keys(r)){const n=a(e,t),i=r[t];if(null!=i&&"boolean"!=typeof i&&"string"!=typeof i&&"number"!=typeof i)throw new Error(`${s(n)} must be null, undefined, a boolean, a string, or a number.`)}}return t},t.assertCompact=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&"auto"!==t)throw new Error(`${s(e)} must be a boolean, "auto", or undefined`);return t},t.assertConfigApplicableTest=function(e,t){if(void 0===t)return t;if(Array.isArray(t))t.forEach(((t,r)=>{if(!c(t))throw new Error(`${s(a(e,r))} must be a string/Function/RegExp.`)}));else if(!c(t))throw new Error(`${s(e)} must be a string/Function/RegExp, or an array of those`);return t},t.assertConfigFileSearch=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&"string"!=typeof t)throw new Error(`${s(e)} must be a undefined, a boolean, a string, got ${JSON.stringify(t)}`);return t},t.assertFunction=function(e,t){if(void 0!==t&&"function"!=typeof t)throw new Error(`${s(e)} must be a function, or undefined`);return t},t.assertIgnoreList=function(e,t){const r=u(e,t);r&&r.forEach(((t,r)=>function(e,t){if("string"!=typeof t&&"function"!=typeof t&&!(t instanceof RegExp))throw new Error(`${s(e)} must be an array of string/Function/RegExp values, or undefined`);return t}(a(e,r),t)));return r},t.assertInputSourceMap=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&("object"!=typeof t||!t))throw new Error(`${s(e)} must be a boolean, object, or undefined`);return t},t.assertObject=l,t.assertPluginList=function(e,t){const r=u(e,t);r&&r.forEach(((t,r)=>function(e,t){if(Array.isArray(t)){if(0===t.length)throw new Error(`${s(e)} must include an object`);if(t.length>3)throw new Error(`${s(e)} may only be a two-tuple or three-tuple`);if(p(a(e,0),t[0]),t.length>1){const r=t[1];if(void 0!==r&&!1!==r&&("object"!=typeof r||Array.isArray(r)||null===r))throw new Error(`${s(a(e,1))} must be an object, false, or undefined`)}if(3===t.length){const r=t[2];if(void 0!==r&&"string"!=typeof r)throw new Error(`${s(a(e,2))} must be a string, or undefined`)}}else p(e,t);return t}(a(e,r),t)));return r},t.assertRootMode=function(e,t){if(void 0!==t&&"root"!==t&&"upward"!==t&&"upward-optional"!==t)throw new Error(`${s(e)} must be a "root", "upward", "upward-optional" or undefined`);return t},t.assertSourceMaps=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&"inline"!==t&&"both"!==t)throw new Error(`${s(e)} must be a boolean, "inline", "both", or undefined`);return t},t.assertSourceType=function(e,t){if(void 0!==t&&"module"!==t&&"script"!==t&&"unambiguous"!==t)throw new Error(`${s(e)} must be "module", "script", "unambiguous", or undefined`);return t},t.assertString=function(e,t){if(void 0!==t&&"string"!=typeof t)throw new Error(`${s(e)} must be a string, or undefined`);return t},t.assertTargets=function(e,t){if((0,n().isBrowsersQueryValid)(t))return t;if("object"!=typeof t||!t||Array.isArray(t))throw new Error(`${s(e)} must be a string, an array of strings or an object`);const r=a(e,"browsers"),i=a(e,"esmodules");f(r,t.browsers),o(i,t.esmodules);for(const l of Object.keys(t)){const r=t[l],i=a(e,l);if("esmodules"===l)o(i,r);else if("browsers"===l)f(i,r);else{if(!Object.hasOwnProperty.call(n().TargetNames,l)){const e=Object.keys(n().TargetNames).join(", ");throw new Error(`${s(i)} is not a valid target. Supported targets are ${e}`)}d(i,r)}}return t},t.msg=s;var i=r(91139);function s(e){switch(e.type){case"root":return"";case"env":return`${s(e.parent)}.env["${e.name}"]`;case"overrides":return`${s(e.parent)}.overrides[${e.index}]`;case"option":return`${s(e.parent)}.${e.name}`;case"access":return`${s(e.parent)}[${JSON.stringify(e.name)}]`;default:throw new Error(`Assertion failure: Unknown type ${e.type}`)}}function a(e,t){return{type:"access",name:t,parent:e}}function o(e,t){if(void 0!==t&&"boolean"!=typeof t)throw new Error(`${s(e)} must be a boolean, or undefined`);return t}function l(e,t){if(void 0!==t&&("object"!=typeof t||Array.isArray(t)||!t))throw new Error(`${s(e)} must be an object, or undefined`);return t}function u(e,t){if(null!=t&&!Array.isArray(t))throw new Error(`${s(e)} must be an array, or undefined`);return t}function c(e){return"string"==typeof e||"function"==typeof e||e instanceof RegExp}function p(e,t){if(("object"!=typeof t||!t)&&"string"!=typeof t&&"function"!=typeof t)throw new Error(`${s(e)} must be a string, object, function`);return t}function f(e,t){if(void 0!==t&&!(0,n().isBrowsersQueryValid)(t))throw new Error(`${s(e)} must be undefined, a string or an array of strings`)}function d(e,t){if(("number"!=typeof t||Math.round(t)!==t)&&"string"!=typeof t)throw new Error(`${s(e)} must be a string or an integer number`)}},91139:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assumptionsNames=void 0,t.checkNoUnwrappedItemOptionPairs=function(e,t,r,n){if(0===t)return;const i=e[t-1],s=e[t];i.file&&void 0===i.options&&"object"==typeof s.value&&(n.message+=`\n- Maybe you meant to use\n"${r}s": [\n  ["${i.file.request}", ${JSON.stringify(s.value,void 0,2)}]\n]\nTo be a valid ${r}, its name and options should be wrapped in a pair of brackets`)},t.validate=function(e,t){return p({type:"root",source:e},t)};r(80424);var n=r(99010),i=r(92517);const s={cwd:i.assertString,root:i.assertString,rootMode:i.assertRootMode,configFile:i.assertConfigFileSearch,caller:i.assertCallerMetadata,filename:i.assertString,filenameRelative:i.assertString,code:i.assertBoolean,ast:i.assertBoolean,cloneInputAst:i.assertBoolean,envName:i.assertString},a={babelrc:i.assertBoolean,babelrcRoots:i.assertBabelrcSearch},o={extends:i.assertString,ignore:i.assertIgnoreList,only:i.assertIgnoreList,targets:i.assertTargets,browserslistConfigFile:i.assertConfigFileSearch,browserslistEnv:i.assertString},l={inputSourceMap:i.assertInputSourceMap,presets:i.assertPluginList,plugins:i.assertPluginList,passPerPreset:i.assertBoolean,assumptions:i.assertAssumptions,env:function(e,t){if("env"===e.parent.type)throw new Error(`${(0,i.msg)(e)} is not allowed inside of another .env block`);const r=e.parent,n=(0,i.assertObject)(e,t);if(n)for(const s of Object.keys(n)){const t=(0,i.assertObject)((0,i.access)(e,s),n[s]);if(!t)continue;p({type:"env",name:s,parent:r},t)}return n},overrides:function(e,t){if("env"===e.parent.type)throw new Error(`${(0,i.msg)(e)} is not allowed inside an .env block`);if("overrides"===e.parent.type)throw new Error(`${(0,i.msg)(e)} is not allowed inside an .overrides block`);const r=e.parent,n=(0,i.assertArray)(e,t);if(n)for(const[s,a]of n.entries()){const t=(0,i.access)(e,s),n=(0,i.assertObject)(t,a);if(!n)throw new Error(`${(0,i.msg)(t)} must be an object`);p({type:"overrides",index:s,parent:r},n)}return n},test:i.assertConfigApplicableTest,include:i.assertConfigApplicableTest,exclude:i.assertConfigApplicableTest,retainLines:i.assertBoolean,comments:i.assertBoolean,shouldPrintComment:i.assertFunction,compact:i.assertCompact,minified:i.assertBoolean,auxiliaryCommentBefore:i.assertString,auxiliaryCommentAfter:i.assertString,sourceType:i.assertSourceType,wrapPluginVisitorMethod:i.assertFunction,highlightCode:i.assertBoolean,sourceMaps:i.assertSourceMaps,sourceMap:i.assertSourceMaps,sourceFileName:i.assertString,sourceRoot:i.assertString,parserOpts:i.assertObject,generatorOpts:i.assertObject};Object.assign(l,{getModuleId:i.assertFunction,moduleRoot:i.assertString,moduleIds:i.assertBoolean,moduleId:i.assertString});const u=new Set(["arrayLikeIsIterable","constantReexports","constantSuper","enumerableModuleMeta","ignoreFunctionLength","ignoreToPrimitiveHint","iterableIsArray","mutableTemplateObject","noClassCalls","noDocumentAll","noIncompleteNsImportDetection","noNewArrows","objectRestNoSymbols","privateFieldsAsProperties","pureGetters","setClassMethods","setComputedProperties","setPublicClassFields","setSpreadProperties","skipForOfIteratorClosing","superIsCallableConstructor"]);function c(e){return"root"===e.type?e.source:c(e.parent)}function p(e,t){const r=c(e);return function(e){if(d(e,"sourceMap")&&d(e,"sourceMaps"))throw new Error(".sourceMap is an alias for .sourceMaps, cannot use both")}(t),Object.keys(t).forEach((n=>{const u={type:"option",name:n,parent:e};if("preset"===r&&o[n])throw new Error(`${(0,i.msg)(u)} is not allowed in preset options`);if("arguments"!==r&&s[n])throw new Error(`${(0,i.msg)(u)} is only allowed in root programmatic options`);if("arguments"!==r&&"configfile"!==r&&a[n]){if("babelrcfile"===r||"extendsfile"===r)throw new Error(`${(0,i.msg)(u)} is not allowed in .babelrc or "extends"ed files, only in root programmatic options, or babel.config.js/config file options`);throw new Error(`${(0,i.msg)(u)} is only allowed in root programmatic options, or babel.config.js/config file options`)}(l[n]||o[n]||a[n]||s[n]||f)(u,t[n])})),t}function f(e){const t=e.name;if(n.default[t]){const{message:r,version:s=5}=n.default[t];throw new Error(`Using removed Babel ${s} option: ${(0,i.msg)(e)} - ${r}`)}{const t=new Error(`Unknown option: ${(0,i.msg)(e)}. Check out https://babeljs.io/docs/en/babel-core/#options for more information about options.`);throw t.code="BABEL_UNKNOWN_OPTION",t}}function d(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.assumptionsNames=u},54931:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validatePluginObject=function(e){const t={type:"root",source:"plugin"};return Object.keys(e).forEach((r=>{const n=i[r];if(!n){const e=new Error(`.${r} is not a valid Plugin property`);throw e.code="BABEL_UNKNOWN_PLUGIN_PROPERTY",e}n({type:"option",name:r,parent:t},e[r])})),e};var n=r(92517);const i={name:n.assertString,manipulateOptions:n.assertFunction,pre:n.assertFunction,post:n.assertFunction,inherits:n.assertFunction,visitor:function(e,t){const r=(0,n.assertObject)(e,t);if(r&&(Object.keys(r).forEach((e=>function(e,t){if(t&&"object"==typeof t)Object.keys(t).forEach((t=>{if("enter"!==t&&"exit"!==t)throw new Error(`.visitor["${e}"] may only have .enter and/or .exit handlers.`)}));else if("function"!=typeof t)throw new Error(`.visitor["${e}"] must be a function`);return t}(e,r[e]))),r.enter||r.exit))throw new Error(`${(0,n.msg)(e)} cannot contain catch-all "enter" or "exit" handlers. Please target individual nodes.`);return r},parserOverride:n.assertFunction,generatorOverride:n.assertFunction}},99010:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={auxiliaryComment:{message:"Use `auxiliaryCommentBefore` or `auxiliaryCommentAfter`"},blacklist:{message:"Put the specific transforms you want in the `plugins` option"},breakConfig:{message:"This is not a necessary option in Babel 6"},experimental:{message:"Put the specific transforms you want in the `plugins` option"},externalHelpers:{message:"Use the `external-helpers` plugin instead. Check out http://babeljs.io/docs/plugins/external-helpers/"},extra:{message:""},jsxPragma:{message:"use the `pragma` option in the `react-jsx` plugin. Check out http://babeljs.io/docs/plugins/transform-react-jsx/"},loose:{message:"Specify the `loose` option for the relevant plugin you are using or use a preset that sets the option."},metadataUsedHelpers:{message:"Not required anymore as this is enabled by default"},modules:{message:"Use the corresponding module transform plugin in the `plugins` option. Check out http://babeljs.io/docs/plugins/#modules"},nonStandard:{message:"Use the `react-jsx` and `flow-strip-types` plugins to support JSX and Flow. Also check out the react preset http://babeljs.io/docs/plugins/preset-react/"},optional:{message:"Put the specific transforms you want in the `plugins` option"},sourceMapName:{message:"The `sourceMapName` option has been removed because it makes more sense for the tooling that calls Babel to assign `map.file` themselves."},stage:{message:"Check out the corresponding stage-x presets http://babeljs.io/docs/plugins/#presets"},whitelist:{message:"Put the specific transforms you want in the `plugins` option"},resolveModuleSource:{version:6,message:"Use `babel-plugin-module-resolver@3`'s 'resolvePath' options"},metadata:{version:6,message:"Generated plugin metadata is always included in the output result"},sourceMapTarget:{version:6,message:"The `sourceMapTarget` option has been removed because it makes more sense for the tooling that calls Babel to assign `map.file` themselves."}}},87241:(e,t,r)=>{"use strict";function n(){const e=r(20664);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.forwardAsync=function(e,t){const r=n()(e);return o((e=>{const n=r[e];return t(n)}))},t.isAsync=void 0,t.isThenable=c,t.maybeAsync=function(e,t){return n()({sync(...r){const n=e.apply(this,r);if(c(n))throw new Error(t);return n},async(...t){return Promise.resolve(e.apply(this,t))}})},t.waitFor=t.onFirstPause=void 0;const i=e=>e,s=n()((function*(e){return yield*e})),a=n()({sync:()=>!1,errback:e=>e(null,!0)});t.isAsync=a;const o=n()({sync:e=>e("sync"),async:e=>e("async")});const l=n()({name:"onFirstPause",arity:2,sync:function(e){return s.sync(e)},errback:function(e,t,r){let n=!1;s.errback(e,((e,t)=>{n=!0,r(e,t)})),n||t()}});t.onFirstPause=l;const u=n()({sync:i,async:i});function c(e){return!(!e||"object"!=typeof e&&"function"!=typeof e||!e.then||"function"!=typeof e.then)}t.waitFor=u},32420:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_EXTENSIONS=void 0,Object.defineProperty(t,"File",{enumerable:!0,get:function(){return n.default}}),t.OptionManager=void 0,t.Plugin=function(e){throw new Error(`The (${e}) Babel 5 plugin is being run with an unsupported Babel version.`)},Object.defineProperty(t,"buildExternalHelpers",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"createConfigItem",{enumerable:!0,get:function(){return p.createConfigItem}}),Object.defineProperty(t,"createConfigItemAsync",{enumerable:!0,get:function(){return p.createConfigItemAsync}}),Object.defineProperty(t,"createConfigItemSync",{enumerable:!0,get:function(){return p.createConfigItemSync}}),Object.defineProperty(t,"getEnv",{enumerable:!0,get:function(){return a.getEnv}}),Object.defineProperty(t,"loadOptions",{enumerable:!0,get:function(){return p.loadOptions}}),Object.defineProperty(t,"loadOptionsAsync",{enumerable:!0,get:function(){return p.loadOptionsAsync}}),Object.defineProperty(t,"loadOptionsSync",{enumerable:!0,get:function(){return p.loadOptionsSync}}),Object.defineProperty(t,"loadPartialConfig",{enumerable:!0,get:function(){return p.loadPartialConfig}}),Object.defineProperty(t,"loadPartialConfigAsync",{enumerable:!0,get:function(){return p.loadPartialConfigAsync}}),Object.defineProperty(t,"loadPartialConfigSync",{enumerable:!0,get:function(){return p.loadPartialConfigSync}}),Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return m.parse}}),Object.defineProperty(t,"parseAsync",{enumerable:!0,get:function(){return m.parseAsync}}),Object.defineProperty(t,"parseSync",{enumerable:!0,get:function(){return m.parseSync}}),Object.defineProperty(t,"resolvePlugin",{enumerable:!0,get:function(){return s.resolvePlugin}}),Object.defineProperty(t,"resolvePreset",{enumerable:!0,get:function(){return s.resolvePreset}}),Object.defineProperty(t,"template",{enumerable:!0,get:function(){return c().default}}),Object.defineProperty(t,"tokTypes",{enumerable:!0,get:function(){return l().tokTypes}}),Object.defineProperty(t,"transform",{enumerable:!0,get:function(){return f.transform}}),Object.defineProperty(t,"transformAsync",{enumerable:!0,get:function(){return f.transformAsync}}),Object.defineProperty(t,"transformFile",{enumerable:!0,get:function(){return d.transformFile}}),Object.defineProperty(t,"transformFileAsync",{enumerable:!0,get:function(){return d.transformFileAsync}}),Object.defineProperty(t,"transformFileSync",{enumerable:!0,get:function(){return d.transformFileSync}}),Object.defineProperty(t,"transformFromAst",{enumerable:!0,get:function(){return h.transformFromAst}}),Object.defineProperty(t,"transformFromAstAsync",{enumerable:!0,get:function(){return h.transformFromAstAsync}}),Object.defineProperty(t,"transformFromAstSync",{enumerable:!0,get:function(){return h.transformFromAstSync}}),Object.defineProperty(t,"transformSync",{enumerable:!0,get:function(){return f.transformSync}}),Object.defineProperty(t,"traverse",{enumerable:!0,get:function(){return u().default}}),t.version=t.types=void 0;var n=r(95212),i=r(46984),s=r(50261),a=r(2837);function o(){const e=r(38218);return o=function(){return e},e}function l(){const e=r(73834);return l=function(){return e},e}function u(){const e=r(49838);return u=function(){return e},e}function c(){const e=r(94847);return c=function(){return e},e}Object.defineProperty(t,"types",{enumerable:!0,get:function(){return o()}});var p=r(20695),f=r(84203),d=r(91701),h=r(83724),m=r(24727);t.version="7.18.0";const y=Object.freeze([".js",".jsx",".es6",".es",".mjs",".cjs"]);t.DEFAULT_EXTENSIONS=y;t.OptionManager=class{init(e){return(0,p.loadOptions)(e)}}},24727:(e,t,r)=>{"use strict";function n(){const e=r(20664);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.parseSync=t.parseAsync=t.parse=void 0;var i=r(20695),s=r(73596),a=r(17331);const o=n()((function*(e,t){const r=yield*(0,i.default)(t);return null===r?null:yield*(0,s.default)(r.passes,(0,a.default)(r),e)}));t.parse=function(e,t,r){if("function"==typeof t&&(r=t,t=void 0),void 0===r)return o.sync(e,t);o.errback(e,t,r)};const l=o.sync;t.parseSync=l;const u=o.async;t.parseAsync=u},73596:(e,t,r)=>{"use strict";function n(){const e=r(73834);return n=function(){return e},e}function i(){const e=r(84709);return i=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function*(e,{parserOpts:t,highlightCode:r=!0,filename:a="unknown"},o){try{const r=[];for(const i of e)for(const e of i){const{parserOverride:i}=e;if(i){const e=i(o,t,n().parse);void 0!==e&&r.push(e)}}if(0===r.length)return(0,n().parse)(o,t);if(1===r.length){if(yield*[],"function"==typeof r[0].then)throw new Error("You appear to be using an async parser plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");return r[0]}throw new Error("More than one plugin attempted to override parsing.")}catch(l){"BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"===l.code&&(l.message+="\nConsider renaming the file to '.mjs', or setting sourceType:module or sourceType:unambiguous in your Babel config for this file.");const{loc:e,missingPlugin:t}=l;if(e){const n=(0,i().codeFrameColumns)(o,{start:{line:e.line,column:e.column+1}},{highlightCode:r});l.message=t?`${a}: `+(0,s.default)(t[0],e,n):`${a}: ${l.message}\n\n`+n,l.code="BABEL_PARSE_ERROR"}throw l}};var s=r(27499)},27499:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,i){let s=`Support for the experimental syntax '${e}' isn't currently enabled (${t.line}:${t.column+1}):\n\n`+i;const a=r[e];if(a){const{syntax:e,transform:t}=a;if(e){const r=n(e);if(t){const e=n(t),i=t.name.startsWith("@babel/plugin")?"plugins":"presets";s+=`\n\nAdd ${e} to the '${i}' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add ${r} to the 'plugins' section to enable parsing.`}else s+=`\n\nAdd ${r} to the 'plugins' section of your Babel config to enable parsing.`}}return s};const r={asyncDoExpressions:{syntax:{name:"@babel/plugin-syntax-async-do-expressions",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-async-do-expressions"}},classProperties:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-class-properties"},transform:{name:"@babel/plugin-proposal-class-properties",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-class-properties"}},classPrivateProperties:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-class-properties"},transform:{name:"@babel/plugin-proposal-class-properties",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-class-properties"}},classPrivateMethods:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-class-properties"},transform:{name:"@babel/plugin-proposal-private-methods",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-private-methods"}},classStaticBlock:{syntax:{name:"@babel/plugin-syntax-class-static-block",url:"https://github.com/babel/babel/tree/HEAD/packages/babel-plugin-syntax-class-static-block"},transform:{name:"@babel/plugin-proposal-class-static-block",url:"https://github.com/babel/babel/tree/HEAD/packages/babel-plugin-proposal-class-static-block"}},decimal:{syntax:{name:"@babel/plugin-syntax-decimal",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-decimal"}},decorators:{syntax:{name:"@babel/plugin-syntax-decorators",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-decorators"},transform:{name:"@babel/plugin-proposal-decorators",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-decorators"}},doExpressions:{syntax:{name:"@babel/plugin-syntax-do-expressions",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-do-expressions"},transform:{name:"@babel/plugin-proposal-do-expressions",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-do-expressions"}},dynamicImport:{syntax:{name:"@babel/plugin-syntax-dynamic-import",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-dynamic-import"}},exportDefaultFrom:{syntax:{name:"@babel/plugin-syntax-export-default-from",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-export-default-from"},transform:{name:"@babel/plugin-proposal-export-default-from",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-export-default-from"}},exportNamespaceFrom:{syntax:{name:"@babel/plugin-syntax-export-namespace-from",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-export-namespace-from"},transform:{name:"@babel/plugin-proposal-export-namespace-from",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-export-namespace-from"}},flow:{syntax:{name:"@babel/plugin-syntax-flow",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-flow"},transform:{name:"@babel/preset-flow",url:"https://github.com/babel/babel/tree/main/packages/babel-preset-flow"}},functionBind:{syntax:{name:"@babel/plugin-syntax-function-bind",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-function-bind"},transform:{name:"@babel/plugin-proposal-function-bind",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-function-bind"}},functionSent:{syntax:{name:"@babel/plugin-syntax-function-sent",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-function-sent"},transform:{name:"@babel/plugin-proposal-function-sent",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-function-sent"}},importMeta:{syntax:{name:"@babel/plugin-syntax-import-meta",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-import-meta"}},jsx:{syntax:{name:"@babel/plugin-syntax-jsx",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-jsx"},transform:{name:"@babel/preset-react",url:"https://github.com/babel/babel/tree/main/packages/babel-preset-react"}},importAssertions:{syntax:{name:"@babel/plugin-syntax-import-assertions",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-import-assertions"}},moduleStringNames:{syntax:{name:"@babel/plugin-syntax-module-string-names",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-module-string-names"}},numericSeparator:{syntax:{name:"@babel/plugin-syntax-numeric-separator",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-numeric-separator"},transform:{name:"@babel/plugin-proposal-numeric-separator",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-numeric-separator"}},optionalChaining:{syntax:{name:"@babel/plugin-syntax-optional-chaining",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-optional-chaining"},transform:{name:"@babel/plugin-proposal-optional-chaining",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-optional-chaining"}},pipelineOperator:{syntax:{name:"@babel/plugin-syntax-pipeline-operator",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-pipeline-operator"},transform:{name:"@babel/plugin-proposal-pipeline-operator",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-pipeline-operator"}},privateIn:{syntax:{name:"@babel/plugin-syntax-private-property-in-object",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-private-property-in-object"},transform:{name:"@babel/plugin-proposal-private-property-in-object",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-private-property-in-object"}},recordAndTuple:{syntax:{name:"@babel/plugin-syntax-record-and-tuple",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-record-and-tuple"}},regexpUnicodeSets:{syntax:{name:"@babel/plugin-syntax-unicode-sets-regex",url:"https://github.com/babel/babel/blob/main/packages/babel-plugin-syntax-unicode-sets-regex/README.md"},transform:{name:"@babel/plugin-proposal-unicode-sets-regex",url:"https://github.com/babel/babel/blob/main/packages/babel-plugin-proposalunicode-sets-regex/README.md"}},throwExpressions:{syntax:{name:"@babel/plugin-syntax-throw-expressions",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-throw-expressions"},transform:{name:"@babel/plugin-proposal-throw-expressions",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-throw-expressions"}},typescript:{syntax:{name:"@babel/plugin-syntax-typescript",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-typescript"},transform:{name:"@babel/preset-typescript",url:"https://github.com/babel/babel/tree/main/packages/babel-preset-typescript"}},asyncGenerators:{syntax:{name:"@babel/plugin-syntax-async-generators",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-async-generators"},transform:{name:"@babel/plugin-proposal-async-generator-functions",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-async-generator-functions"}},logicalAssignment:{syntax:{name:"@babel/plugin-syntax-logical-assignment-operators",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-logical-assignment-operators"},transform:{name:"@babel/plugin-proposal-logical-assignment-operators",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-logical-assignment-operators"}},nullishCoalescingOperator:{syntax:{name:"@babel/plugin-syntax-nullish-coalescing-operator",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-nullish-coalescing-operator"},transform:{name:"@babel/plugin-proposal-nullish-coalescing-operator",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-transform-nullish-coalescing-opearator"}},objectRestSpread:{syntax:{name:"@babel/plugin-syntax-object-rest-spread",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-object-rest-spread"},transform:{name:"@babel/plugin-proposal-object-rest-spread",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-object-rest-spread"}},optionalCatchBinding:{syntax:{name:"@babel/plugin-syntax-optional-catch-binding",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-optional-catch-binding"},transform:{name:"@babel/plugin-proposal-optional-catch-binding",url:"https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-optional-catch-binding"}}};r.privateIn.syntax=r.privateIn.transform;const n=({name:e,url:t})=>`${e} (${t})`},46984:(e,t,r)=>{"use strict";function n(){const e=r(23466);return n=function(){return e},e}function i(){const e=r(39166);return i=function(){return e},e}function s(){const e=r(94847);return s=function(){return e},e}function a(){const e=r(38218);return a=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t="global"){let r;const n={global:C,module:w,umd:O,var:F}[t];if(!n)throw new Error(`Unsupported output type ${t}`);r=n(e);return(0,i().default)(r).code};var o=r(95212);const{arrayExpression:l,assignmentExpression:u,binaryExpression:c,blockStatement:p,callExpression:f,cloneNode:d,conditionalExpression:h,exportNamedDeclaration:m,exportSpecifier:y,expressionStatement:g,functionExpression:b,identifier:v,memberExpression:E,objectExpression:x,program:S,stringLiteral:T,unaryExpression:A,variableDeclaration:P,variableDeclarator:D}=a();function C(e){const t=v("babelHelpers"),r=[],n=b(null,[v("global")],p(r)),i=S([g(f(n,[h(c("===",A("typeof",v("global")),T("undefined")),v("self"),v("global"))]))]);return r.push(P("var",[D(t,u("=",E(v("global"),t),x([])))])),I(r,t,e),i}function w(e){const t=[],r=I(t,null,e);return t.unshift(m(null,Object.keys(r).map((e=>y(d(r[e]),v(e)))))),S(t,[],"module")}function O(e){const t=v("babelHelpers"),r=[];return r.push(P("var",[D(t,v("global"))])),I(r,t,e),S([(n={FACTORY_PARAMETERS:v("global"),BROWSER_ARGUMENTS:u("=",E(v("root"),t),x([])),COMMON_ARGUMENTS:v("exports"),AMD_ARGUMENTS:l([T("exports")]),FACTORY_BODY:r,UMD_ROOT:v("this")},s().default.statement`
    (function (root, factory) {
      if (typeof define === "function" && define.amd) {
        define(AMD_ARGUMENTS, factory);
      } else if (typeof exports === "object") {
        factory(COMMON_ARGUMENTS);
      } else {
        factory(BROWSER_ARGUMENTS);
      }
    })(UMD_ROOT, function (FACTORY_PARAMETERS) {
      FACTORY_BODY
    });
  `(n))]);var n}function F(e){const t=v("babelHelpers"),r=[];r.push(P("var",[D(t,x([]))]));const n=S(r);return I(r,t,e),r.push(g(t)),n}function I(e,t,r){const i=e=>t?E(t,v(e)):v(`_${e}`),s={};return n().list.forEach((function(t){if(r&&r.indexOf(t)<0)return;const a=s[t]=i(t);n().ensure(t,o.default);const{nodes:l}=n().get(t,i,a);e.push(...l)})),s}},83724:(e,t,r)=>{"use strict";function n(){const e=r(20664);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.transformFromAstSync=t.transformFromAstAsync=t.transformFromAst=void 0;var i=r(20695),s=r(31152);const a=n()((function*(e,t,r){const n=yield*(0,i.default)(r);if(null===n)return null;if(!e)throw new Error("No AST given");return yield*(0,s.run)(n,t,e)}));t.transformFromAst=function(e,t,r,n){if("function"==typeof r&&(n=r,r=void 0),void 0===n)return a.sync(e,t,r);a.errback(e,t,r,n)};const o=a.sync;t.transformFromAstSync=o;const l=a.async;t.transformFromAstAsync=l},91701:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.transformFile=void 0,t.transformFileAsync=function(){return Promise.reject(new Error("Transforming files is not supported in browsers"))},t.transformFileSync=function(){throw new Error("Transforming files is not supported in browsers")};t.transformFile=function(e,t,r){"function"==typeof t&&(r=t),r(new Error("Transforming files is not supported in browsers"),null)}},84203:(e,t,r)=>{"use strict";function n(){const e=r(20664);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.transformSync=t.transformAsync=t.transform=void 0;var i=r(20695),s=r(31152);const a=n()((function*(e,t){const r=yield*(0,i.default)(t);return null===r?null:yield*(0,s.run)(r,e)}));t.transform=function(e,t,r){if("function"==typeof t&&(r=t,t=void 0),void 0===r)return a.sync(e,t);a.errback(e,t,r)};const o=a.sync;t.transformSync=o;const l=a.async;t.transformAsync=l},83768:(e,t,r)=>{"use strict";function n(){const e=r(49838);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){s||(s=new i.default(Object.assign({},o,{visitor:n().default.explode(o.visitor)}),{}));return s};var i=r(80424);let s;function a(e){const t=null==e?void 0:e._blockHoist;return null==t?1:!0===t?2:t}const o={name:"internal.blockHoist",visitor:{Block:{exit({node:e}){const{body:t}=e;let r=Math.pow(2,30)-1,n=!1;for(let i=0;i<t.length;i++){const e=a(t[i]);if(e>r){n=!0;break}r=e}n&&(e.body=function(e){const t=Object.create(null);for(let i=0;i<e.length;i++){const r=e[i],n=a(r);(t[n]||(t[n]=[])).push(r)}const r=Object.keys(t).map((e=>+e)).sort(((e,t)=>t-e));let n=0;for(const i of r){const r=t[i];for(const t of r)e[n++]=t}return e}(t.slice()))}}}}},95212:(e,t,r)=>{"use strict";function n(){const e=r(23466);return n=function(){return e},e}function i(){const e=r(49838);return i=function(){return e},e}function s(){const e=r(84709);return s=function(){return e},e}function a(){const e=r(38218);return a=function(){return e},e}function o(){const e=r(12454);return o=function(){return e},e}function l(){const e=r(18141);return l=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const{cloneNode:u,interpreterDirective:c}=a(),p={enter(e,t){const r=e.node.loc;r&&(t.loc=r,e.stop())}};class f{constructor(e,{code:t,ast:r,inputMap:n}){this._map=new Map,this.opts=void 0,this.declarations={},this.path=null,this.ast={},this.scope=void 0,this.metadata={},this.code="",this.inputMap=null,this.hub={file:this,getCode:()=>this.code,getScope:()=>this.scope,addHelper:this.addHelper.bind(this),buildError:this.buildCodeFrameError.bind(this)},this.opts=e,this.code=t,this.ast=r,this.inputMap=n,this.path=i().NodePath.get({hub:this.hub,parentPath:null,parent:this.ast,container:this.ast,key:"program"}).setContext(),this.scope=this.path.scope}get shebang(){const{interpreter:e}=this.path.node;return e?e.value:""}set shebang(e){e?this.path.get("interpreter").replaceWith(c(e)):this.path.get("interpreter").remove()}set(e,t){if("helpersNamespace"===e)throw new Error("Babel 7.0.0-beta.56 has dropped support for the 'helpersNamespace' utility.If you are using @babel/plugin-external-helpers you will need to use a newer version than the one you currently have installed. If you have your own implementation, you'll want to explore using 'helperGenerator' alongside 'file.availableHelper()'.");this._map.set(e,t)}get(e){return this._map.get(e)}has(e){return this._map.has(e)}getModuleName(){return(0,o().getModuleName)(this.opts,this.opts)}addImport(){throw new Error("This API has been removed. If you're looking for this functionality in Babel 7, you should import the '@babel/helper-module-imports' module and use the functions exposed  from that module, such as 'addNamed' or 'addDefault'.")}availableHelper(e,t){let r;try{r=n().minVersion(e)}catch(i){if("BABEL_HELPER_UNKNOWN"!==i.code)throw i;return!1}return"string"!=typeof t||(l().valid(t)&&(t=`^${t}`),!l().intersects(`<${r}`,t)&&!l().intersects(">=8.0.0",t))}addHelper(e){const t=this.declarations[e];if(t)return u(t);const r=this.get("helperGenerator");if(r){const t=r(e);if(t)return t}n().ensure(e,f);const i=this.declarations[e]=this.scope.generateUidIdentifier(e),s={};for(const l of n().getDependencies(e))s[l]=this.addHelper(l);const{nodes:a,globals:o}=n().get(e,(e=>s[e]),i,Object.keys(this.scope.getAllBindings()));return o.forEach((e=>{this.path.scope.hasBinding(e,!0)&&this.path.scope.rename(e)})),a.forEach((e=>{e._compact=!0})),this.path.unshiftContainer("body",a),this.path.get("body").forEach((e=>{-1!==a.indexOf(e.node)&&e.isVariableDeclaration()&&this.scope.registerDeclaration(e)})),i}addTemplateObject(){throw new Error("This function has been moved into the template literal transform itself.")}buildCodeFrameError(e,t,r=SyntaxError){let n=e&&(e.loc||e._loc);if(!n&&e){const r={loc:null};(0,i().default)(e,p,this.scope,r),n=r.loc;let s="This is an error on an internal node. Probably an internal error.";n&&(s+=" Location has been estimated."),t+=` (${s})`}if(n){const{highlightCode:e=!0}=this.opts;t+="\n"+(0,s().codeFrameColumns)(this.code,{start:{line:n.start.line,column:n.start.column+1},end:n.end&&n.start.line===n.end.line?{line:n.end.line,column:n.end.column+1}:void 0},{highlightCode:e})}return new r(t)}}t.default=f},20494:(e,t,r)=>{"use strict";function n(){const e=r(73514);return n=function(){return e},e}function i(){const e=r(39166);return i=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{opts:r,ast:a,code:o,inputMap:l}=t,{generatorOpts:u}=r,c=[];for(const n of e)for(const e of n){const{generatorOverride:t}=e;if(t){const e=t(a,u,o,i().default);void 0!==e&&c.push(e)}}let p;if(0===c.length)p=(0,i().default)(a,u,o);else{if(1!==c.length)throw new Error("More than one plugin attempted to override codegen.");if(p=c[0],"function"==typeof p.then)throw new Error("You appear to be using an async codegen plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}let{code:f,decodedMap:d=p.map}=p;d&&(d=l?(0,s.default)(l.toObject(),d,u.sourceFileName):p.map);"inline"!==r.sourceMaps&&"both"!==r.sourceMaps||(f+="\n"+n().fromObject(d).toComment());"inline"===r.sourceMaps&&(d=null);return{outputCode:f,outputMap:d}};var s=r(34302)},34302:(e,t,r)=>{"use strict";function n(){const e=r(816);return n=function(){return e},e}function i(e){return Object.assign({},e,{sourceRoot:null})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){const s=r.replace(/\\/g,"/");let a=!1;const o=n()(i(t),((t,r)=>t!==s||a?null:(a=!0,r.source="",i(e))));"string"==typeof e.sourceRoot&&(o.sourceRoot=e.sourceRoot);return Object.assign({},o)}},31152:(e,t,r)=>{"use strict";function n(){const e=r(49838);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.run=function*(e,t,r){const p=yield*(0,o.default)(e.passes,(0,a.default)(e),t,r),f=p.opts;try{yield*function*(e,t){for(const r of t){const t=[],a=[],o=[];for(const n of r.concat([(0,s.default)()])){const r=new i.default(e,n.key,n.options);t.push([n,r]),a.push(r),o.push(n.visitor)}for(const[r,n]of t){const t=r.pre;if(t){const r=t.call(n,e);if(yield*[],c(r))throw new Error("You appear to be using an plugin with an async .pre, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}}const l=n().default.visitors.merge(o,a,e.opts.wrapPluginVisitorMethod);(0,n().default)(e.ast,l,e.scope);for(const[r,n]of t){const t=r.post;if(t){const r=t.call(n,e);if(yield*[],c(r))throw new Error("You appear to be using an plugin with an async .post, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}}}}(p,e.passes)}catch(g){var d;throw g.message=`${null!=(d=f.filename)?d:"unknown"}: ${g.message}`,g.code||(g.code="BABEL_TRANSFORM_ERROR"),g}let h,m;try{!1!==f.code&&({outputCode:h,outputMap:m}=(0,l.default)(e.passes,p))}catch(g){var y;throw g.message=`${null!=(y=f.filename)?y:"unknown"}: ${g.message}`,g.code||(g.code="BABEL_GENERATE_ERROR"),g}return{metadata:p.metadata,options:f,ast:!0===f.ast?p.ast:null,code:void 0===h?null:h,map:void 0===m?null:m,sourceType:p.ast.program.sourceType,externalDependencies:(0,u.flattenToSet)(e.externalDependencies)}};var i=r(65889),s=r(83768),a=r(17331),o=r(90104),l=r(20494),u=r(42853);function c(e){return!(!e||"object"!=typeof e&&"function"!=typeof e||!e.then||"function"!=typeof e.then)}},90104:(e,t,r)=>{"use strict";function n(){const e=r(33770);return n=function(){return e},e}function i(){const e=r(26470);return i=function(){return e},e}function s(){const e=r(11227);return s=function(){return e},e}function a(){const e=r(38218);return a=function(){return e},e}function o(){const e=r(73514);return o=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function*(e,t,r,s){if(r=`${r||""}`,s){if("Program"===s.type)s=p(s,[],[]);else if("File"!==s.type)throw new Error("AST root must be a Program or File node");t.cloneInputAst&&(s=(0,c.default)(s))}else s=yield*(0,u.default)(e,t,r);let a=null;if(!1!==t.inputSourceMap){if("object"==typeof t.inputSourceMap&&(a=o().fromObject(t.inputSourceMap)),!a){const e=g(h,s);if(e)try{a=o().fromComment(e)}catch(f){d("discarding unknown inline input sourcemap",f)}}if(!a){const e=g(m,s);if("string"==typeof t.filename&&e)try{const r=m.exec(e),s=n().readFileSync(i().resolve(i().dirname(t.filename),r[1]));s.length>1e6?d("skip merging input map > 1 MB"):a=o().fromJSON(s)}catch(f){d("discarding unknown file input sourcemap",f)}else e&&d("discarding un-loadable file input sourcemap")}}return new l.default(t,{code:r,ast:s,inputMap:a})};var l=r(95212),u=r(73596),c=r(77765);const{file:p,traverseFast:f}=a(),d=s()("babel:transform:file");const h=/^[@#]\s+sourceMappingURL=data:(?:application|text)\/json;(?:charset[:=]\S+?;)?base64,(?:.*)$/,m=/^[@#][ \t]+sourceMappingURL=([^\s'"`]+)[ \t]*$/;function y(e,t,r){return t&&(t=t.filter((({value:t})=>!e.test(t)||(r=t,!1)))),[t,r]}function g(e,t){let r=null;return f(t,(t=>{[t.leadingComments,r]=y(e,t.leadingComments,r),[t.innerComments,r]=y(e,t.innerComments,r),[t.trailingComments,r]=y(e,t.trailingComments,r)})),r}},17331:(e,t,r)=>{"use strict";function n(){const e=r(26470);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const{filename:t,cwd:r,filenameRelative:i=("string"==typeof t?n().relative(r,t):"unknown"),sourceType:s="module",inputSourceMap:a,sourceMaps:o=!!a,sourceRoot:l=e.options.moduleRoot,sourceFileName:u=n().basename(i),comments:c=!0,compact:p="auto"}=e.options,f=e.options,d=Object.assign({},f,{parserOpts:Object.assign({sourceType:".mjs"===n().extname(i)?"module":s,sourceFileName:t,plugins:[]},f.parserOpts),generatorOpts:Object.assign({filename:t,auxiliaryCommentBefore:f.auxiliaryCommentBefore,auxiliaryCommentAfter:f.auxiliaryCommentAfter,retainLines:f.retainLines,comments:c,shouldPrintComment:f.shouldPrintComment,compact:p,minified:f.minified,sourceMaps:o,sourceRoot:l,sourceFileName:u},f.generatorOpts)});for(const n of e.passes)for(const e of n)e.manipulateOptions&&e.manipulateOptions(d,d.parserOpts);return d}},65889:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class r{constructor(e,t,r){this._map=new Map,this.key=void 0,this.file=void 0,this.opts=void 0,this.cwd=void 0,this.filename=void 0,this.key=t,this.file=e,this.opts=r||{},this.cwd=e.opts.cwd,this.filename=e.opts.filename}set(e,t){this._map.set(e,t)}get(e){return this._map.get(e)}availableHelper(e,t){return this.file.availableHelper(e,t)}addHelper(e){return this.file.addHelper(e)}addImport(){return this.file.addImport()}buildCodeFrameError(e,t,r){return this.file.buildCodeFrameError(e,t,r)}}t.default=r,r.prototype.getModuleName=function(){return this.file.getModuleName()}},77765:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return JSON.parse(JSON.stringify(e,n),i)};const r="$$ babel internal serialized type"+Math.random();function n(e,t){return"bigint"!=typeof t?t:{[r]:"BigInt",value:t.toString()}}function i(e,t){return t&&"object"==typeof t?"BigInt"!==t[r]?t:BigInt(t.value):t}},28649:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const r=/^[ \t]+$/;t.default=class{constructor(e){this._map=null,this._buf="",this._last=0,this._queue=[],this._position={line:1,column:0},this._sourcePosition={identifierName:void 0,line:void 0,column:void 0,filename:void 0},this._disallowedPop=null,this._map=e}get(){this._flush();const e=this._map,t={code:this._buf.trimRight(),decodedMap:null==e?void 0:e.getDecoded(),get map(){return t.map=e?e.get():null},set map(e){Object.defineProperty(t,"map",{value:e,writable:!0})},get rawMappings(){return t.rawMappings=null==e?void 0:e.getRawMappings()},set rawMappings(e){Object.defineProperty(t,"rawMappings",{value:e,writable:!0})}};return t}append(e){this._flush();const{line:t,column:r,filename:n,identifierName:i}=this._sourcePosition;this._append(e,t,r,i,n)}queue(e){if("\n"===e)for(;this._queue.length>0&&r.test(this._queue[0][0]);)this._queue.shift();const{line:t,column:n,filename:i,identifierName:s}=this._sourcePosition;this._queue.unshift([e,t,n,s,i])}queueIndentation(e){this._queue.unshift([e,void 0,void 0,void 0,void 0])}_flush(){let e;for(;e=this._queue.pop();)this._append(...e)}_append(e,t,r,n,i){this._buf+=e,this._last=e.charCodeAt(e.length-1);let s=e.indexOf("\n"),a=0;for(0!==s&&this._mark(t,r,n,i);-1!==s;)this._position.line++,this._position.column=0,a=s+1,a<e.length&&this._mark(++t,0,n,i),s=e.indexOf("\n",a);this._position.column+=e.length-a}_mark(e,t,r,n){var i;null==(i=this._map)||i.mark(this._position,e,t,r,n)}removeTrailingNewline(){this._queue.length>0&&"\n"===this._queue[0][0]&&this._queue.shift()}removeLastSemicolon(){this._queue.length>0&&";"===this._queue[0][0]&&this._queue.shift()}getLastChar(){let e;if(this._queue.length>0){e=this._queue[0][0].charCodeAt(0)}else e=this._last;return e}endsWithCharAndNewline(){const e=this._queue;if(e.length>0){if(10!==e[0][0].charCodeAt(0))return;if(e.length>1){return e[1][0].charCodeAt(0)}return this._last}}hasContent(){return this._queue.length>0||!!this._last}exactSource(e,t){this.source("start",e),t(),this.source("end",e),this._disallowPop("start",e)}source(e,t){e&&!t||this._normalizePosition(e,t,this._sourcePosition)}withSource(e,t,r){if(!this._map)return r();const n=this._sourcePosition.line,i=this._sourcePosition.column,s=this._sourcePosition.filename,a=this._sourcePosition.identifierName;this.source(e,t),r(),this._disallowedPop&&this._disallowedPop.line===n&&this._disallowedPop.column===i&&this._disallowedPop.filename===s||(this._sourcePosition.line=n,this._sourcePosition.column=i,this._sourcePosition.filename=s,this._sourcePosition.identifierName=a,this._disallowedPop=null)}_disallowPop(e,t){e&&!t||(this._disallowedPop=this._normalizePosition(e,t,{identifierName:void 0,line:void 0,column:void 0,filename:void 0}))}_normalizePosition(e,t,r){const n=t?t[e]:null;return r.identifierName="start"===e&&(null==t?void 0:t.identifierName)||void 0,r.line=null==n?void 0:n.line,r.column=null==n?void 0:n.column,r.filename=null==t?void 0:t.filename,r}getCurrentColumn(){const e=this._queue.reduce(((e,t)=>t[0]+e),""),t=e.lastIndexOf("\n");return-1===t?this._position.column+e.length:e.length-1-t}getCurrentLine(){const e=this._queue.reduce(((e,t)=>t[0]+e),"");let t=0;for(let r=0;r<e.length;r++)"\n"===e[r]&&t++;return this._position.line+t}}},28516:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BlockStatement=function(e){var t;this.token("{"),this.printInnerComments(e);const r=null==(t=e.directives)?void 0:t.length;e.body.length||r?(this.newline(),this.printSequence(e.directives,e,{indent:!0}),r&&this.newline(),this.printSequence(e.body,e,{indent:!0}),this.removeTrailingNewline(),this.source("end",e.loc),this.endsWith(10)||this.newline(),this.rightBrace()):(this.source("end",e.loc),this.token("}"))},t.Directive=function(e){this.print(e.value,e),this.semicolon()},t.DirectiveLiteral=function(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&null!=t)return void this.token(t);const{value:i}=e;if(n.test(i)){if(r.test(i))throw new Error("Malformed AST: it is not possible to print a directive containing both unescaped single and double quotes.");this.token(`'${i}'`)}else this.token(`"${i}"`)},t.File=function(e){e.program&&this.print(e.program.interpreter,e);this.print(e.program,e)},t.InterpreterDirective=function(e){this.token(`#!${e.value}\n`)},t.Placeholder=function(e){this.token("%%"),this.print(e.name),this.token("%%"),"Statement"===e.expectedNode&&this.semicolon()},t.Program=function(e){this.printInnerComments(e,!1),this.printSequence(e.directives,e),e.directives&&e.directives.length&&this.newline();this.printSequence(e.body,e)};const r=/(?:^|[^\\])(?:\\\\)*'/,n=/(?:^|[^\\])(?:\\\\)*"/},505:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClassAccessorProperty=function(e){this.printJoin(e.decorators,e),this.source("end",e.key.loc),this.tsPrintClassMemberModifiers(e,!0),this.word("accessor"),this.printInnerComments(e),this.space(),e.computed?(this.token("["),this.print(e.key,e),this.token("]")):(this._variance(e),this.print(e.key,e));e.optional&&this.token("?");e.definite&&this.token("!");this.print(e.typeAnnotation,e),e.value&&(this.space(),this.token("="),this.space(),this.print(e.value,e));this.semicolon()},t.ClassBody=function(e){this.token("{"),this.printInnerComments(e),0===e.body.length?this.token("}"):(this.newline(),this.indent(),this.printSequence(e.body,e),this.dedent(),this.endsWith(10)||this.newline(),this.rightBrace())},t.ClassExpression=t.ClassDeclaration=function(e,t){this.format.decoratorsBeforeExport&&(i(t)||s(t))||this.printJoin(e.decorators,e);e.declare&&(this.word("declare"),this.space());e.abstract&&(this.word("abstract"),this.space());this.word("class"),this.printInnerComments(e),e.id&&(this.space(),this.print(e.id,e));this.print(e.typeParameters,e),e.superClass&&(this.space(),this.word("extends"),this.space(),this.print(e.superClass,e),this.print(e.superTypeParameters,e));e.implements&&(this.space(),this.word("implements"),this.space(),this.printList(e.implements,e));this.space(),this.print(e.body,e)},t.ClassMethod=function(e){this._classMethodHead(e),this.space(),this.print(e.body,e)},t.ClassPrivateMethod=function(e){this._classMethodHead(e),this.space(),this.print(e.body,e)},t.ClassPrivateProperty=function(e){this.printJoin(e.decorators,e),e.static&&(this.word("static"),this.space());this.print(e.key,e),this.print(e.typeAnnotation,e),e.value&&(this.space(),this.token("="),this.space(),this.print(e.value,e));this.semicolon()},t.ClassProperty=function(e){this.printJoin(e.decorators,e),this.source("end",e.key.loc),this.tsPrintClassMemberModifiers(e,!0),e.computed?(this.token("["),this.print(e.key,e),this.token("]")):(this._variance(e),this.print(e.key,e));e.optional&&this.token("?");e.definite&&this.token("!");this.print(e.typeAnnotation,e),e.value&&(this.space(),this.token("="),this.space(),this.print(e.value,e));this.semicolon()},t.StaticBlock=function(e){this.word("static"),this.space(),this.token("{"),0===e.body.length?this.token("}"):(this.newline(),this.printSequence(e.body,e,{indent:!0}),this.rightBrace())},t._classMethodHead=function(e){this.printJoin(e.decorators,e),this.source("end",e.key.loc),this.tsPrintClassMemberModifiers(e,!1),this._methodHead(e)};var n=r(38218);const{isExportDefaultDeclaration:i,isExportNamedDeclaration:s}=n},36361:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LogicalExpression=t.BinaryExpression=t.AssignmentExpression=function(e,t){const r=this.inForStatementInitCounter&&"in"===e.operator&&!i.needsParens(e,t);r&&this.token("(");this.print(e.left,e),this.space(),"in"===e.operator||"instanceof"===e.operator?this.word(e.operator):this.token(e.operator);this.space(),this.print(e.right,e),r&&this.token(")")},t.AssignmentPattern=function(e){this.print(e.left,e),e.left.optional&&this.token("?");this.print(e.left.typeAnnotation,e),this.space(),this.token("="),this.space(),this.print(e.right,e)},t.AwaitExpression=void 0,t.BindExpression=function(e){this.print(e.object,e),this.token("::"),this.print(e.callee,e)},t.CallExpression=function(e){this.print(e.callee,e),this.print(e.typeArguments,e),this.print(e.typeParameters,e),this.token("("),this.printList(e.arguments,e),this.token(")")},t.ConditionalExpression=function(e){this.print(e.test,e),this.space(),this.token("?"),this.space(),this.print(e.consequent,e),this.space(),this.token(":"),this.space(),this.print(e.alternate,e)},t.Decorator=function(e){this.token("@");const{expression:t}=e;!function(e){"CallExpression"===e.type&&(e=e.callee);if("ParenthesizedExpression"===e.type)return!1;return!u(e)}(t)?this.print(t,e):(this.token("("),this.print(t,e),this.token(")"));this.newline()},t.DoExpression=function(e){e.async&&(this.word("async"),this.space());this.word("do"),this.space(),this.print(e.body,e)},t.EmptyStatement=function(){this.semicolon(!0)},t.ExpressionStatement=function(e){this.print(e.expression,e),this.semicolon()},t.Import=function(){this.word("import")},t.MemberExpression=function(e){if(this.print(e.object,e),!e.computed&&o(e.property))throw new TypeError("Got a MemberExpression for MemberExpression property");let t=e.computed;a(e.property)&&"number"==typeof e.property.value&&(t=!0);t?(this.token("["),this.print(e.property,e),this.token("]")):(this.token("."),this.print(e.property,e))},t.MetaProperty=function(e){this.print(e.meta,e),this.token("."),this.print(e.property,e)},t.ModuleExpression=function(e){this.word("module"),this.space(),this.token("{"),0===e.body.body.length?this.token("}"):(this.newline(),this.printSequence(e.body.body,e,{indent:!0}),this.rightBrace())},t.NewExpression=function(e,t){if(this.word("new"),this.space(),this.print(e.callee,e),this.format.minified&&0===e.arguments.length&&!e.optional&&!s(t,{callee:e})&&!o(t)&&!l(t))return;this.print(e.typeArguments,e),this.print(e.typeParameters,e),e.optional&&this.token("?.");this.token("("),this.printList(e.arguments,e),this.token(")")},t.OptionalCallExpression=function(e){this.print(e.callee,e),this.print(e.typeArguments,e),this.print(e.typeParameters,e),e.optional&&this.token("?.");this.token("("),this.printList(e.arguments,e),this.token(")")},t.OptionalMemberExpression=function(e){if(this.print(e.object,e),!e.computed&&o(e.property))throw new TypeError("Got a MemberExpression for MemberExpression property");let t=e.computed;a(e.property)&&"number"==typeof e.property.value&&(t=!0);e.optional&&this.token("?.");t?(this.token("["),this.print(e.property,e),this.token("]")):(e.optional||this.token("."),this.print(e.property,e))},t.ParenthesizedExpression=function(e){this.token("("),this.print(e.expression,e),this.token(")")},t.PrivateName=function(e){this.token("#"),this.print(e.id,e)},t.SequenceExpression=function(e){this.printList(e.expressions,e)},t.Super=function(){this.word("super")},t.ThisExpression=function(){this.word("this")},t.UnaryExpression=function(e){"void"===e.operator||"delete"===e.operator||"typeof"===e.operator||"throw"===e.operator?(this.word(e.operator),this.space()):this.token(e.operator);this.print(e.argument,e)},t.UpdateExpression=function(e){e.prefix?(this.token(e.operator),this.print(e.argument,e)):(this.startTerminatorless(!0),this.print(e.argument,e),this.endTerminatorless(),this.token(e.operator))},t.V8IntrinsicIdentifier=function(e){this.token("%"),this.word(e.name)},t.YieldExpression=void 0;var n=r(38218),i=r(32866);const{isCallExpression:s,isLiteral:a,isMemberExpression:o,isNewExpression:l}=n;function u(e){switch(e.type){case"Identifier":return!0;case"MemberExpression":return!e.computed&&"Identifier"===e.property.type&&u(e.object);default:return!1}}function c(e){return function(t){if(this.word(e),t.delegate&&this.token("*"),t.argument){this.space();const e=this.startTerminatorless();this.print(t.argument,t),this.endTerminatorless(e)}}}const p=c("yield");t.YieldExpression=p;const f=c("await");t.AwaitExpression=f},48076:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnyTypeAnnotation=function(){this.word("any")},t.ArrayTypeAnnotation=function(e){this.print(e.elementType,e),this.token("["),this.token("]")},t.BooleanLiteralTypeAnnotation=function(e){this.word(e.value?"true":"false")},t.BooleanTypeAnnotation=function(){this.word("boolean")},t.DeclareClass=function(e,t){a(t)||(this.word("declare"),this.space());this.word("class"),this.space(),this._interfaceish(e)},t.DeclareExportAllDeclaration=function(){this.word("declare"),this.space(),i.ExportAllDeclaration.apply(this,arguments)},t.DeclareExportDeclaration=function(e){this.word("declare"),this.space(),this.word("export"),this.space(),e.default&&(this.word("default"),this.space());p.apply(this,arguments)},t.DeclareFunction=function(e,t){a(t)||(this.word("declare"),this.space());this.word("function"),this.space(),this.print(e.id,e),this.print(e.id.typeAnnotation.typeAnnotation,e),e.predicate&&(this.space(),this.print(e.predicate,e));this.semicolon()},t.DeclareInterface=function(e){this.word("declare"),this.space(),this.InterfaceDeclaration(e)},t.DeclareModule=function(e){this.word("declare"),this.space(),this.word("module"),this.space(),this.print(e.id,e),this.space(),this.print(e.body,e)},t.DeclareModuleExports=function(e){this.word("declare"),this.space(),this.word("module"),this.token("."),this.word("exports"),this.print(e.typeAnnotation,e)},t.DeclareOpaqueType=function(e,t){a(t)||(this.word("declare"),this.space());this.OpaqueType(e)},t.DeclareTypeAlias=function(e){this.word("declare"),this.space(),this.TypeAlias(e)},t.DeclareVariable=function(e,t){a(t)||(this.word("declare"),this.space());this.word("var"),this.space(),this.print(e.id,e),this.print(e.id.typeAnnotation,e),this.semicolon()},t.DeclaredPredicate=function(e){this.token("%"),this.word("checks"),this.token("("),this.print(e.value,e),this.token(")")},t.EmptyTypeAnnotation=function(){this.word("empty")},t.EnumBooleanBody=function(e){const{explicitType:t}=e;l(this,"boolean",t),u(this,e)},t.EnumBooleanMember=function(e){c(this,e)},t.EnumDeclaration=function(e){const{id:t,body:r}=e;this.word("enum"),this.space(),this.print(t,e),this.print(r,e)},t.EnumDefaultedMember=function(e){const{id:t}=e;this.print(t,e),this.token(",")},t.EnumNumberBody=function(e){const{explicitType:t}=e;l(this,"number",t),u(this,e)},t.EnumNumberMember=function(e){c(this,e)},t.EnumStringBody=function(e){const{explicitType:t}=e;l(this,"string",t),u(this,e)},t.EnumStringMember=function(e){c(this,e)},t.EnumSymbolBody=function(e){l(this,"symbol",!0),u(this,e)},t.ExistsTypeAnnotation=function(){this.token("*")},t.FunctionTypeAnnotation=function(e,t){this.print(e.typeParameters,e),this.token("("),e.this&&(this.word("this"),this.token(":"),this.space(),this.print(e.this.typeAnnotation,e),(e.params.length||e.rest)&&(this.token(","),this.space()));this.printList(e.params,e),e.rest&&(e.params.length&&(this.token(","),this.space()),this.token("..."),this.print(e.rest,e));this.token(")"),t&&("ObjectTypeCallProperty"===t.type||"DeclareFunction"===t.type||"ObjectTypeProperty"===t.type&&t.method)?this.token(":"):(this.space(),this.token("=>"));this.space(),this.print(e.returnType,e)},t.FunctionTypeParam=function(e){this.print(e.name,e),e.optional&&this.token("?");e.name&&(this.token(":"),this.space());this.print(e.typeAnnotation,e)},t.IndexedAccessType=function(e){this.print(e.objectType,e),this.token("["),this.print(e.indexType,e),this.token("]")},t.InferredPredicate=function(){this.token("%"),this.word("checks")},t.InterfaceDeclaration=function(e){this.word("interface"),this.space(),this._interfaceish(e)},t.GenericTypeAnnotation=t.ClassImplements=t.InterfaceExtends=function(e){this.print(e.id,e),this.print(e.typeParameters,e)},t.InterfaceTypeAnnotation=function(e){this.word("interface"),e.extends&&e.extends.length&&(this.space(),this.word("extends"),this.space(),this.printList(e.extends,e));this.space(),this.print(e.body,e)},t.IntersectionTypeAnnotation=function(e){this.printJoin(e.types,e,{separator:f})},t.MixedTypeAnnotation=function(){this.word("mixed")},t.NullLiteralTypeAnnotation=function(){this.word("null")},t.NullableTypeAnnotation=function(e){this.token("?"),this.print(e.typeAnnotation,e)},Object.defineProperty(t,"NumberLiteralTypeAnnotation",{enumerable:!0,get:function(){return s.NumericLiteral}}),t.NumberTypeAnnotation=function(){this.word("number")},t.ObjectTypeAnnotation=function(e){e.exact?this.token("{|"):this.token("{");const t=[...e.properties,...e.callProperties||[],...e.indexers||[],...e.internalSlots||[]];t.length&&(this.space(),this.printJoin(t,e,{addNewlines(e){if(e&&!t[0])return 1},indent:!0,statement:!0,iterator:()=>{(1!==t.length||e.inexact)&&(this.token(","),this.space())}}),this.space());e.inexact&&(this.indent(),this.token("..."),t.length&&this.newline(),this.dedent());e.exact?this.token("|}"):this.token("}")},t.ObjectTypeCallProperty=function(e){e.static&&(this.word("static"),this.space());this.print(e.value,e)},t.ObjectTypeIndexer=function(e){e.static&&(this.word("static"),this.space());this._variance(e),this.token("["),e.id&&(this.print(e.id,e),this.token(":"),this.space());this.print(e.key,e),this.token("]"),this.token(":"),this.space(),this.print(e.value,e)},t.ObjectTypeInternalSlot=function(e){e.static&&(this.word("static"),this.space());this.token("["),this.token("["),this.print(e.id,e),this.token("]"),this.token("]"),e.optional&&this.token("?");e.method||(this.token(":"),this.space());this.print(e.value,e)},t.ObjectTypeProperty=function(e){e.proto&&(this.word("proto"),this.space());e.static&&(this.word("static"),this.space());"get"!==e.kind&&"set"!==e.kind||(this.word(e.kind),this.space());this._variance(e),this.print(e.key,e),e.optional&&this.token("?");e.method||(this.token(":"),this.space());this.print(e.value,e)},t.ObjectTypeSpreadProperty=function(e){this.token("..."),this.print(e.argument,e)},t.OpaqueType=function(e){this.word("opaque"),this.space(),this.word("type"),this.space(),this.print(e.id,e),this.print(e.typeParameters,e),e.supertype&&(this.token(":"),this.space(),this.print(e.supertype,e));e.impltype&&(this.space(),this.token("="),this.space(),this.print(e.impltype,e));this.semicolon()},t.OptionalIndexedAccessType=function(e){this.print(e.objectType,e),e.optional&&this.token("?.");this.token("["),this.print(e.indexType,e),this.token("]")},t.QualifiedTypeIdentifier=function(e){this.print(e.qualification,e),this.token("."),this.print(e.id,e)},Object.defineProperty(t,"StringLiteralTypeAnnotation",{enumerable:!0,get:function(){return s.StringLiteral}}),t.StringTypeAnnotation=function(){this.word("string")},t.SymbolTypeAnnotation=function(){this.word("symbol")},t.ThisTypeAnnotation=function(){this.word("this")},t.TupleTypeAnnotation=function(e){this.token("["),this.printList(e.types,e),this.token("]")},t.TypeAlias=function(e){this.word("type"),this.space(),this.print(e.id,e),this.print(e.typeParameters,e),this.space(),this.token("="),this.space(),this.print(e.right,e),this.semicolon()},t.TypeAnnotation=function(e){this.token(":"),this.space(),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},t.TypeCastExpression=function(e){this.token("("),this.print(e.expression,e),this.print(e.typeAnnotation,e),this.token(")")},t.TypeParameter=function(e){this._variance(e),this.word(e.name),e.bound&&this.print(e.bound,e);e.default&&(this.space(),this.token("="),this.space(),this.print(e.default,e))},t.TypeParameterDeclaration=t.TypeParameterInstantiation=function(e){this.token("<"),this.printList(e.params,e,{}),this.token(">")},t.TypeofTypeAnnotation=function(e){this.word("typeof"),this.space(),this.print(e.argument,e)},t.UnionTypeAnnotation=function(e){this.printJoin(e.types,e,{separator:d})},t.Variance=function(e){"plus"===e.kind?this.token("+"):this.token("-")},t.VoidTypeAnnotation=function(){this.word("void")},t._interfaceish=function(e){var t;this.print(e.id,e),this.print(e.typeParameters,e),null!=(t=e.extends)&&t.length&&(this.space(),this.word("extends"),this.space(),this.printList(e.extends,e));e.mixins&&e.mixins.length&&(this.space(),this.word("mixins"),this.space(),this.printList(e.mixins,e));e.implements&&e.implements.length&&(this.space(),this.word("implements"),this.space(),this.printList(e.implements,e));this.space(),this.print(e.body,e)},t._variance=function(e){e.variance&&("plus"===e.variance.kind?this.token("+"):"minus"===e.variance.kind&&this.token("-"))};var n=r(38218),i=r(97064),s=r(55718);const{isDeclareExportDeclaration:a,isStatement:o}=n;function l(e,t,r){r&&(e.space(),e.word("of"),e.space(),e.word(t)),e.space()}function u(e,t){const{members:r}=t;e.token("{"),e.indent(),e.newline();for(const n of r)e.print(n,t),e.newline();t.hasUnknownMembers&&(e.token("..."),e.newline()),e.dedent(),e.token("}")}function c(e,t){const{id:r,init:n}=t;e.print(r,t),e.space(),e.token("="),e.space(),e.print(n,t),e.token(",")}function p(e){if(e.declaration){const t=e.declaration;this.print(t,e),o(t)||this.semicolon()}else this.token("{"),e.specifiers.length&&(this.space(),this.printList(e.specifiers,e),this.space()),this.token("}"),e.source&&(this.space(),this.word("from"),this.space(),this.print(e.source,e)),this.semicolon()}function f(){this.space(),this.token("&"),this.space()}function d(){this.space(),this.token("|"),this.space()}},38217:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(82347);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===n[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}}))}));var i=r(36361);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}}))}));var s=r(16787);Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===s[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}}))}));var a=r(505);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===a[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}}))}));var o=r(50624);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))}));var l=r(97064);Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===l[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}}))}));var u=r(55718);Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===u[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}}))}));var c=r(48076);Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===c[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}}))}));var p=r(28516);Object.keys(p).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===p[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return p[e]}}))}));var f=r(49598);Object.keys(f).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===f[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return f[e]}}))}));var d=r(82043);Object.keys(d).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===d[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return d[e]}}))}))},49598:(e,t)=>{"use strict";function r(){this.space()}Object.defineProperty(t,"__esModule",{value:!0}),t.JSXAttribute=function(e){this.print(e.name,e),e.value&&(this.token("="),this.print(e.value,e))},t.JSXClosingElement=function(e){this.token("</"),this.print(e.name,e),this.token(">")},t.JSXClosingFragment=function(){this.token("</"),this.token(">")},t.JSXElement=function(e){const t=e.openingElement;if(this.print(t,e),t.selfClosing)return;this.indent();for(const r of e.children)this.print(r,e);this.dedent(),this.print(e.closingElement,e)},t.JSXEmptyExpression=function(e){this.printInnerComments(e)},t.JSXExpressionContainer=function(e){this.token("{"),this.print(e.expression,e),this.token("}")},t.JSXFragment=function(e){this.print(e.openingFragment,e),this.indent();for(const t of e.children)this.print(t,e);this.dedent(),this.print(e.closingFragment,e)},t.JSXIdentifier=function(e){this.word(e.name)},t.JSXMemberExpression=function(e){this.print(e.object,e),this.token("."),this.print(e.property,e)},t.JSXNamespacedName=function(e){this.print(e.namespace,e),this.token(":"),this.print(e.name,e)},t.JSXOpeningElement=function(e){this.token("<"),this.print(e.name,e),this.print(e.typeParameters,e),e.attributes.length>0&&(this.space(),this.printJoin(e.attributes,e,{separator:r}));e.selfClosing?(this.space(),this.token("/>")):this.token(">")},t.JSXOpeningFragment=function(){this.token("<"),this.token(">")},t.JSXSpreadAttribute=function(e){this.token("{"),this.token("..."),this.print(e.argument,e),this.token("}")},t.JSXSpreadChild=function(e){this.token("{"),this.token("..."),this.print(e.expression,e),this.token("}")},t.JSXText=function(e){const t=this.getPossibleRaw(e);null!=t?this.token(t):this.token(e.value)}},50624:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ArrowFunctionExpression=function(e){e.async&&(this.word("async"),this.space());const t=e.params[0];this.format.retainLines||this.format.auxiliaryCommentBefore||this.format.auxiliaryCommentAfter||1!==e.params.length||!i(t)||function(e,t){var r,n;return!!(e.typeParameters||e.returnType||e.predicate||t.typeAnnotation||t.optional||null!=(r=t.leadingComments)&&r.length||null!=(n=t.trailingComments)&&n.length)}(e,t)?this._params(e):this.print(t,e);this._predicate(e),this.space(),this.token("=>"),this.space(),this.print(e.body,e)},t.FunctionDeclaration=t.FunctionExpression=function(e){this._functionHead(e),this.space(),this.print(e.body,e)},t._functionHead=function(e){e.async&&(this.word("async"),this.space());this.word("function"),e.generator&&this.token("*");this.printInnerComments(e),this.space(),e.id&&this.print(e.id,e);this._params(e),this._predicate(e)},t._methodHead=function(e){const t=e.kind,r=e.key;"get"!==t&&"set"!==t||(this.word(t),this.space());e.async&&(this._catchUp("start",r.loc),this.word("async"),this.space());"method"!==t&&"init"!==t||e.generator&&this.token("*");e.computed?(this.token("["),this.print(r,e),this.token("]")):this.print(r,e);e.optional&&this.token("?");this._params(e)},t._param=function(e,t){this.printJoin(e.decorators,e),this.print(e,t),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},t._parameters=function(e,t){for(let r=0;r<e.length;r++)this._param(e[r],t),r<e.length-1&&(this.token(","),this.space())},t._params=function(e){this.print(e.typeParameters,e),this.token("("),this._parameters(e.params,e),this.token(")"),this.print(e.returnType,e)},t._predicate=function(e){e.predicate&&(e.returnType||this.token(":"),this.space(),this.print(e.predicate,e))};var n=r(38218);const{isIdentifier:i}=n},97064:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ExportAllDeclaration=function(e){this.word("export"),this.space(),"type"===e.exportKind&&(this.word("type"),this.space());this.token("*"),this.space(),this.word("from"),this.space(),this.print(e.source,e),this.printAssertions(e),this.semicolon()},t.ExportDefaultDeclaration=function(e){this.format.decoratorsBeforeExport&&i(e.declaration)&&this.printJoin(e.declaration.decorators,e);this.word("export"),this.space(),this.word("default"),this.space(),c.apply(this,arguments)},t.ExportDefaultSpecifier=function(e){this.print(e.exported,e)},t.ExportNamedDeclaration=function(e){this.format.decoratorsBeforeExport&&i(e.declaration)&&this.printJoin(e.declaration.decorators,e);this.word("export"),this.space(),c.apply(this,arguments)},t.ExportNamespaceSpecifier=function(e){this.token("*"),this.space(),this.word("as"),this.space(),this.print(e.exported,e)},t.ExportSpecifier=function(e){"type"===e.exportKind&&(this.word("type"),this.space());this.print(e.local,e),e.exported&&e.local.name!==e.exported.name&&(this.space(),this.word("as"),this.space(),this.print(e.exported,e))},t.ImportAttribute=function(e){this.print(e.key),this.token(":"),this.space(),this.print(e.value)},t.ImportDeclaration=function(e){this.word("import"),this.space();const t="type"===e.importKind||"typeof"===e.importKind;t&&(this.word(e.importKind),this.space());const r=e.specifiers.slice(0),n=!!r.length;for(;n;){const t=r[0];if(!o(t)&&!l(t))break;this.print(r.shift(),e),r.length&&(this.token(","),this.space())}r.length?(this.token("{"),this.space(),this.printList(r,e),this.space(),this.token("}")):t&&!n&&(this.token("{"),this.token("}"));(n||t)&&(this.space(),this.word("from"),this.space());var i;this.print(e.source,e),this.printAssertions(e),null!=(i=e.attributes)&&i.length&&(this.space(),this.word("with"),this.space(),this.printList(e.attributes,e));this.semicolon()},t.ImportDefaultSpecifier=function(e){this.print(e.local,e)},t.ImportNamespaceSpecifier=function(e){this.token("*"),this.space(),this.word("as"),this.space(),this.print(e.local,e)},t.ImportSpecifier=function(e){"type"!==e.importKind&&"typeof"!==e.importKind||(this.word(e.importKind),this.space());this.print(e.imported,e),e.local&&e.local.name!==e.imported.name&&(this.space(),this.word("as"),this.space(),this.print(e.local,e))};var n=r(38218);const{isClassDeclaration:i,isExportDefaultSpecifier:s,isExportNamespaceSpecifier:a,isImportDefaultSpecifier:o,isImportNamespaceSpecifier:l,isStatement:u}=n;function c(e){if(e.declaration){const t=e.declaration;this.print(t,e),u(t)||this.semicolon()}else{"type"===e.exportKind&&(this.word("type"),this.space());const t=e.specifiers.slice(0);let r=!1;for(;;){const n=t[0];if(!s(n)&&!a(n))break;r=!0,this.print(t.shift(),e),t.length&&(this.token(","),this.space())}(t.length||!t.length&&!r)&&(this.token("{"),t.length&&(this.space(),this.printList(t,e),this.space()),this.token("}")),e.source&&(this.space(),this.word("from"),this.space(),this.print(e.source,e),this.printAssertions(e)),this.semicolon()}}},16787:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BreakStatement=void 0,t.CatchClause=function(e){this.word("catch"),this.space(),e.param&&(this.token("("),this.print(e.param,e),this.print(e.param.typeAnnotation,e),this.token(")"),this.space());this.print(e.body,e)},t.ContinueStatement=void 0,t.DebuggerStatement=function(){this.word("debugger"),this.semicolon()},t.DoWhileStatement=function(e){this.word("do"),this.space(),this.print(e.body,e),this.space(),this.word("while"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.semicolon()},t.ForOfStatement=t.ForInStatement=void 0,t.ForStatement=function(e){this.word("for"),this.space(),this.token("("),this.inForStatementInitCounter++,this.print(e.init,e),this.inForStatementInitCounter--,this.token(";"),e.test&&(this.space(),this.print(e.test,e));this.token(";"),e.update&&(this.space(),this.print(e.update,e));this.token(")"),this.printBlock(e)},t.IfStatement=function(e){this.word("if"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.space();const t=e.alternate&&a(l(e.consequent));t&&(this.token("{"),this.newline(),this.indent());this.printAndIndentOnComments(e.consequent,e),t&&(this.dedent(),this.newline(),this.token("}"));e.alternate&&(this.endsWith(125)&&this.space(),this.word("else"),this.space(),this.printAndIndentOnComments(e.alternate,e))},t.LabeledStatement=function(e){this.print(e.label,e),this.token(":"),this.space(),this.print(e.body,e)},t.ReturnStatement=void 0,t.SwitchCase=function(e){e.test?(this.word("case"),this.space(),this.print(e.test,e),this.token(":")):(this.word("default"),this.token(":"));e.consequent.length&&(this.newline(),this.printSequence(e.consequent,e,{indent:!0}))},t.SwitchStatement=function(e){this.word("switch"),this.space(),this.token("("),this.print(e.discriminant,e),this.token(")"),this.space(),this.token("{"),this.printSequence(e.cases,e,{indent:!0,addNewlines(t,r){if(!t&&e.cases[e.cases.length-1]===r)return-1}}),this.token("}")},t.ThrowStatement=void 0,t.TryStatement=function(e){this.word("try"),this.space(),this.print(e.block,e),this.space(),e.handlers?this.print(e.handlers[0],e):this.print(e.handler,e);e.finalizer&&(this.space(),this.word("finally"),this.space(),this.print(e.finalizer,e))},t.VariableDeclaration=function(e,t){e.declare&&(this.word("declare"),this.space());this.word(e.kind),this.space();let r,n=!1;if(!i(t))for(const i of e.declarations)i.init&&(n=!0);n&&(r="const"===e.kind?b:g);if(this.printList(e.declarations,e,{separator:r}),i(t))if(s(t)){if(t.init===e)return}else if(t.left===e)return;this.semicolon()},t.VariableDeclarator=function(e){this.print(e.id,e),e.definite&&this.token("!");this.print(e.id.typeAnnotation,e),e.init&&(this.space(),this.token("="),this.space(),this.print(e.init,e))},t.WhileStatement=function(e){this.word("while"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.printBlock(e)},t.WithStatement=function(e){this.word("with"),this.space(),this.token("("),this.print(e.object,e),this.token(")"),this.printBlock(e)};var n=r(38218);const{isFor:i,isForStatement:s,isIfStatement:a,isStatement:o}=n;function l(e){return o(e.body)?l(e.body):e}const u=function(e){return function(t){this.word("for"),this.space(),"of"===e&&t.await&&(this.word("await"),this.space()),this.token("("),this.print(t.left,t),this.space(),this.word(e),this.space(),this.print(t.right,t),this.token(")"),this.printBlock(t)}},c=u("in");t.ForInStatement=c;const p=u("of");function f(e,t="label"){return function(r){this.word(e);const n=r[t];if(n){this.space();const e="label"==t,i=this.startTerminatorless(e);this.print(n,r),this.endTerminatorless(i)}this.semicolon()}}t.ForOfStatement=p;const d=f("continue");t.ContinueStatement=d;const h=f("return","argument");t.ReturnStatement=h;const m=f("break");t.BreakStatement=m;const y=f("throw","argument");function g(){if(this.token(","),this.newline(),this.endsWith(10))for(let e=0;e<4;e++)this.space(!0)}function b(){if(this.token(","),this.newline(),this.endsWith(10))for(let e=0;e<6;e++)this.space(!0)}t.ThrowStatement=y},82347:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TaggedTemplateExpression=function(e){this.print(e.tag,e),this.print(e.typeParameters,e),this.print(e.quasi,e)},t.TemplateElement=function(e,t){const r=t.quasis[0]===e,n=t.quasis[t.quasis.length-1]===e,i=(r?"`":"}")+e.value.raw+(n?"`":"${");this.token(i)},t.TemplateLiteral=function(e){const t=e.quasis;for(let r=0;r<t.length;r++)this.print(t[r],e),r+1<t.length&&this.print(e.expressions[r],e)}},55718:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ArgumentPlaceholder=function(){this.token("?")},t.ArrayPattern=t.ArrayExpression=function(e){const t=e.elements,r=t.length;this.token("["),this.printInnerComments(e);for(let n=0;n<t.length;n++){const i=t[n];i?(n>0&&this.space(),this.print(i,e),n<r-1&&this.token(",")):this.token(",")}this.token("]")},t.BigIntLiteral=function(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&null!=t)return void this.word(t);this.word(e.value+"n")},t.BooleanLiteral=function(e){this.word(e.value?"true":"false")},t.DecimalLiteral=function(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&null!=t)return void this.word(t);this.word(e.value+"m")},t.Identifier=function(e){this.exactSource(e.loc,(()=>{this.word(e.name)}))},t.NullLiteral=function(){this.word("null")},t.NumericLiteral=function(e){const t=this.getPossibleRaw(e),r=this.format.jsescOption,n=e.value+"";r.numbers?this.number(i(e.value,r)):null==t?this.number(n):this.format.minified?this.number(t.length<n.length?t:n):this.number(t)},t.ObjectPattern=t.ObjectExpression=function(e){const t=e.properties;this.token("{"),this.printInnerComments(e),t.length&&(this.space(),this.printList(t,e,{indent:!0,statement:!0}),this.space());this.token("}")},t.ObjectMethod=function(e){this.printJoin(e.decorators,e),this._methodHead(e),this.space(),this.print(e.body,e)},t.ObjectProperty=function(e){if(this.printJoin(e.decorators,e),e.computed)this.token("["),this.print(e.key,e),this.token("]");else{if(s(e.value)&&a(e.key)&&e.key.name===e.value.left.name)return void this.print(e.value,e);if(this.print(e.key,e),e.shorthand&&a(e.key)&&a(e.value)&&e.key.name===e.value.name)return}this.token(":"),this.space(),this.print(e.value,e)},t.PipelineBareFunction=function(e){this.print(e.callee,e)},t.PipelinePrimaryTopicReference=function(){this.token("#")},t.PipelineTopicExpression=function(e){this.print(e.expression,e)},t.RecordExpression=function(e){const t=e.properties;let r,n;if("bar"===this.format.recordAndTupleSyntaxType)r="{|",n="|}";else{if("hash"!==this.format.recordAndTupleSyntaxType)throw new Error(`The "recordAndTupleSyntaxType" generator option must be "bar" or "hash" (${JSON.stringify(this.format.recordAndTupleSyntaxType)} received).`);r="#{",n="}"}this.token(r),this.printInnerComments(e),t.length&&(this.space(),this.printList(t,e,{indent:!0,statement:!0}),this.space());this.token(n)},t.RegExpLiteral=function(e){this.word(`/${e.pattern}/${e.flags}`)},t.SpreadElement=t.RestElement=function(e){this.token("..."),this.print(e.argument,e)},t.StringLiteral=function(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&null!=t)return void this.token(t);const r=i(e.value,Object.assign(this.format.jsescOption,this.format.jsonCompatibleStrings&&{json:!0}));return this.token(r)},t.TopicReference=function(){const{topicToken:e}=this.format;if(!o.has(e)){const t=JSON.stringify(e),r=Array.from(o,(e=>JSON.stringify(e)));throw new Error(`The "topicToken" generator option must be one of ${r.join(", ")} (${t} received instead).`)}this.token(e)},t.TupleExpression=function(e){const t=e.elements,r=t.length;let n,i;if("bar"===this.format.recordAndTupleSyntaxType)n="[|",i="|]";else{if("hash"!==this.format.recordAndTupleSyntaxType)throw new Error(`${this.format.recordAndTupleSyntaxType} is not a valid recordAndTuple syntax type`);n="#[",i="]"}this.token(n),this.printInnerComments(e);for(let s=0;s<t.length;s++){const n=t[s];n&&(s>0&&this.space(),this.print(n,e),s<r-1&&this.token(","))}this.token(i)};var n=r(38218),i=r(94021);const{isAssignmentPattern:s,isIdentifier:a}=n;const o=new Set(["^^","@@","^","%","#"])},82043:(e,t)=>{"use strict";function r(e,t){!0!==t&&e.token(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.TSAnyKeyword=function(){this.word("any")},t.TSArrayType=function(e){this.print(e.elementType,e),this.token("[]")},t.TSAsExpression=function(e){const{expression:t,typeAnnotation:r}=e;this.print(t,e),this.space(),this.word("as"),this.space(),this.print(r,e)},t.TSBigIntKeyword=function(){this.word("bigint")},t.TSBooleanKeyword=function(){this.word("boolean")},t.TSCallSignatureDeclaration=function(e){this.tsPrintSignatureDeclarationBase(e),this.token(";")},t.TSConditionalType=function(e){this.print(e.checkType),this.space(),this.word("extends"),this.space(),this.print(e.extendsType),this.space(),this.token("?"),this.space(),this.print(e.trueType),this.space(),this.token(":"),this.space(),this.print(e.falseType)},t.TSConstructSignatureDeclaration=function(e){this.word("new"),this.space(),this.tsPrintSignatureDeclarationBase(e),this.token(";")},t.TSConstructorType=function(e){e.abstract&&(this.word("abstract"),this.space());this.word("new"),this.space(),this.tsPrintFunctionOrConstructorType(e)},t.TSDeclareFunction=function(e){e.declare&&(this.word("declare"),this.space());this._functionHead(e),this.token(";")},t.TSDeclareMethod=function(e){this._classMethodHead(e),this.token(";")},t.TSEnumDeclaration=function(e){const{declare:t,const:r,id:n,members:i}=e;t&&(this.word("declare"),this.space());r&&(this.word("const"),this.space());this.word("enum"),this.space(),this.print(n,e),this.space(),this.tsPrintBraced(i,e)},t.TSEnumMember=function(e){const{id:t,initializer:r}=e;this.print(t,e),r&&(this.space(),this.token("="),this.space(),this.print(r,e));this.token(",")},t.TSExportAssignment=function(e){this.word("export"),this.space(),this.token("="),this.space(),this.print(e.expression,e),this.token(";")},t.TSExpressionWithTypeArguments=function(e){this.print(e.expression,e),this.print(e.typeParameters,e)},t.TSExternalModuleReference=function(e){this.token("require("),this.print(e.expression,e),this.token(")")},t.TSFunctionType=function(e){this.tsPrintFunctionOrConstructorType(e)},t.TSImportEqualsDeclaration=function(e){const{isExport:t,id:r,moduleReference:n}=e;t&&(this.word("export"),this.space());this.word("import"),this.space(),this.print(r,e),this.space(),this.token("="),this.space(),this.print(n,e),this.token(";")},t.TSImportType=function(e){const{argument:t,qualifier:r,typeParameters:n}=e;this.word("import"),this.token("("),this.print(t,e),this.token(")"),r&&(this.token("."),this.print(r,e));n&&this.print(n,e)},t.TSIndexSignature=function(e){const{readonly:t,static:r}=e;r&&(this.word("static"),this.space());t&&(this.word("readonly"),this.space());this.token("["),this._parameters(e.parameters,e),this.token("]"),this.print(e.typeAnnotation,e),this.token(";")},t.TSIndexedAccessType=function(e){this.print(e.objectType,e),this.token("["),this.print(e.indexType,e),this.token("]")},t.TSInferType=function(e){this.token("infer"),this.space(),this.print(e.typeParameter)},t.TSInstantiationExpression=function(e){this.print(e.expression,e),this.print(e.typeParameters,e)},t.TSInterfaceBody=function(e){this.tsPrintTypeLiteralOrInterfaceBody(e.body,e)},t.TSInterfaceDeclaration=function(e){const{declare:t,id:r,typeParameters:n,extends:i,body:s}=e;t&&(this.word("declare"),this.space());this.word("interface"),this.space(),this.print(r,e),this.print(n,e),null!=i&&i.length&&(this.space(),this.word("extends"),this.space(),this.printList(i,e));this.space(),this.print(s,e)},t.TSIntersectionType=function(e){this.tsPrintUnionOrIntersectionType(e,"&")},t.TSIntrinsicKeyword=function(){this.word("intrinsic")},t.TSLiteralType=function(e){this.print(e.literal,e)},t.TSMappedType=function(e){const{nameType:t,optional:n,readonly:i,typeParameter:s}=e;this.token("{"),this.space(),i&&(r(this,i),this.word("readonly"),this.space());this.token("["),this.word(s.name),this.space(),this.word("in"),this.space(),this.print(s.constraint,s),t&&(this.space(),this.word("as"),this.space(),this.print(t,e));this.token("]"),n&&(r(this,n),this.token("?"));this.token(":"),this.space(),this.print(e.typeAnnotation,e),this.space(),this.token("}")},t.TSMethodSignature=function(e){const{kind:t}=e;"set"!==t&&"get"!==t||(this.word(t),this.space());this.tsPrintPropertyOrMethodName(e),this.tsPrintSignatureDeclarationBase(e),this.token(";")},t.TSModuleBlock=function(e){this.tsPrintBraced(e.body,e)},t.TSModuleDeclaration=function(e){const{declare:t,id:r}=e;t&&(this.word("declare"),this.space());e.global||(this.word("Identifier"===r.type?"namespace":"module"),this.space());if(this.print(r,e),!e.body)return void this.token(";");let n=e.body;for(;"TSModuleDeclaration"===n.type;)this.token("."),this.print(n.id,n),n=n.body;this.space(),this.print(n,e)},t.TSNamedTupleMember=function(e){this.print(e.label,e),e.optional&&this.token("?");this.token(":"),this.space(),this.print(e.elementType,e)},t.TSNamespaceExportDeclaration=function(e){this.word("export"),this.space(),this.word("as"),this.space(),this.word("namespace"),this.space(),this.print(e.id,e)},t.TSNeverKeyword=function(){this.word("never")},t.TSNonNullExpression=function(e){this.print(e.expression,e),this.token("!")},t.TSNullKeyword=function(){this.word("null")},t.TSNumberKeyword=function(){this.word("number")},t.TSObjectKeyword=function(){this.word("object")},t.TSOptionalType=function(e){this.print(e.typeAnnotation,e),this.token("?")},t.TSParameterProperty=function(e){e.accessibility&&(this.word(e.accessibility),this.space());e.readonly&&(this.word("readonly"),this.space());this._param(e.parameter)},t.TSParenthesizedType=function(e){this.token("("),this.print(e.typeAnnotation,e),this.token(")")},t.TSPropertySignature=function(e){const{readonly:t,initializer:r}=e;t&&(this.word("readonly"),this.space());this.tsPrintPropertyOrMethodName(e),this.print(e.typeAnnotation,e),r&&(this.space(),this.token("="),this.space(),this.print(r,e));this.token(";")},t.TSQualifiedName=function(e){this.print(e.left,e),this.token("."),this.print(e.right,e)},t.TSRestType=function(e){this.token("..."),this.print(e.typeAnnotation,e)},t.TSStringKeyword=function(){this.word("string")},t.TSSymbolKeyword=function(){this.word("symbol")},t.TSThisType=function(){this.word("this")},t.TSTupleType=function(e){this.token("["),this.printList(e.elementTypes,e),this.token("]")},t.TSTypeAliasDeclaration=function(e){const{declare:t,id:r,typeParameters:n,typeAnnotation:i}=e;t&&(this.word("declare"),this.space());this.word("type"),this.space(),this.print(r,e),this.print(n,e),this.space(),this.token("="),this.space(),this.print(i,e),this.token(";")},t.TSTypeAnnotation=function(e){this.token(":"),this.space(),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},t.TSTypeAssertion=function(e){const{typeAnnotation:t,expression:r}=e;this.token("<"),this.print(t,e),this.token(">"),this.space(),this.print(r,e)},t.TSTypeLiteral=function(e){this.tsPrintTypeLiteralOrInterfaceBody(e.members,e)},t.TSTypeOperator=function(e){this.word(e.operator),this.space(),this.print(e.typeAnnotation,e)},t.TSTypeParameter=function(e){e.in&&(this.word("in"),this.space());e.out&&(this.word("out"),this.space());this.word(e.name),e.constraint&&(this.space(),this.word("extends"),this.space(),this.print(e.constraint,e));e.default&&(this.space(),this.token("="),this.space(),this.print(e.default,e))},t.TSTypeParameterDeclaration=t.TSTypeParameterInstantiation=function(e,t){this.token("<"),this.printList(e.params,e,{}),"ArrowFunctionExpression"===t.type&&1===e.params.length&&this.token(",");this.token(">")},t.TSTypePredicate=function(e){e.asserts&&(this.word("asserts"),this.space());this.print(e.parameterName),e.typeAnnotation&&(this.space(),this.word("is"),this.space(),this.print(e.typeAnnotation.typeAnnotation))},t.TSTypeQuery=function(e){this.word("typeof"),this.space(),this.print(e.exprName),e.typeParameters&&this.print(e.typeParameters,e)},t.TSTypeReference=function(e){this.print(e.typeName,e),this.print(e.typeParameters,e)},t.TSUndefinedKeyword=function(){this.word("undefined")},t.TSUnionType=function(e){this.tsPrintUnionOrIntersectionType(e,"|")},t.TSUnknownKeyword=function(){this.word("unknown")},t.TSVoidKeyword=function(){this.word("void")},t.tsPrintBraced=function(e,t){if(this.token("{"),e.length){this.indent(),this.newline();for(const r of e)this.print(r,t),this.newline();this.dedent(),this.rightBrace()}else this.token("}")},t.tsPrintClassMemberModifiers=function(e,t){t&&e.declare&&(this.word("declare"),this.space());e.accessibility&&(this.word(e.accessibility),this.space());e.static&&(this.word("static"),this.space());e.override&&(this.word("override"),this.space());e.abstract&&(this.word("abstract"),this.space());t&&e.readonly&&(this.word("readonly"),this.space())},t.tsPrintFunctionOrConstructorType=function(e){const{typeParameters:t}=e,r=e.parameters;this.print(t,e),this.token("("),this._parameters(r,e),this.token(")"),this.space(),this.token("=>"),this.space();const n=e.typeAnnotation;this.print(n.typeAnnotation,e)},t.tsPrintPropertyOrMethodName=function(e){e.computed&&this.token("[");this.print(e.key,e),e.computed&&this.token("]");e.optional&&this.token("?")},t.tsPrintSignatureDeclarationBase=function(e){const{typeParameters:t}=e,r=e.parameters;this.print(t,e),this.token("("),this._parameters(r,e),this.token(")");const n=e.typeAnnotation;this.print(n,e)},t.tsPrintTypeLiteralOrInterfaceBody=function(e,t){this.tsPrintBraced(e,t)},t.tsPrintUnionOrIntersectionType=function(e,t){this.printJoin(e.types,e,{separator(){this.space(),this.token(t),this.space()}})}},39166:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CodeGenerator=void 0,t.default=function(e,t,r){return new s(e,t,r).generate()};var n=r(27853),i=r(13105);class s extends i.default{constructor(e,t={},r){const i=function(e,t){const r={auxiliaryCommentBefore:t.auxiliaryCommentBefore,auxiliaryCommentAfter:t.auxiliaryCommentAfter,shouldPrintComment:t.shouldPrintComment,retainLines:t.retainLines,retainFunctionParens:t.retainFunctionParens,comments:null==t.comments||t.comments,compact:t.compact,minified:t.minified,concise:t.concise,indent:{adjustMultilineComment:!0,style:"  ",base:0},decoratorsBeforeExport:!!t.decoratorsBeforeExport,jsescOption:Object.assign({quotes:"double",wrap:!0,minimal:!1},t.jsescOption),recordAndTupleSyntaxType:t.recordAndTupleSyntaxType,topicToken:t.topicToken};r.jsonCompatibleStrings=t.jsonCompatibleStrings,r.minified?(r.compact=!0,r.shouldPrintComment=r.shouldPrintComment||(()=>r.comments)):r.shouldPrintComment=r.shouldPrintComment||(e=>r.comments||e.indexOf("@license")>=0||e.indexOf("@preserve")>=0);"auto"===r.compact&&(r.compact=e.length>5e5,r.compact&&console.error(`[BABEL] Note: The code generator has deoptimised the styling of ${t.filename} as it exceeds the max of 500KB.`));r.compact&&(r.indent.adjustMultilineComment=!1);return r}(r,t);super(i,t.sourceMaps?new n.default(t,r):null),this.ast=void 0,this.ast=e}generate(){return super.generate(this.ast)}}t.CodeGenerator=class{constructor(e,t,r){this._generator=void 0,this._generator=new s(e,t,r)}generate(){return this._generator.generate()}}},32866:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.needsParens=function(e,t,r){if(!t)return!1;if(c(t)&&t.callee===e&&y(e))return!0;return m(f,e,t,r)},t.needsWhitespace=g,t.needsWhitespaceAfter=function(e,t){return g(e,t,"after")},t.needsWhitespaceBefore=function(e,t){return g(e,t,"before")};var n=r(24114),i=r(52514),s=r(38218);const{FLIPPED_ALIAS_KEYS:a,isCallExpression:o,isExpressionStatement:l,isMemberExpression:u,isNewExpression:c}=s;function p(e){const t={};function r(e,r){const n=t[e];t[e]=n?function(e,t,i){const s=n(e,t,i);return null==s?r(e,t,i):s}:r}for(const n of Object.keys(e)){const t=a[n];if(t)for(const i of t)r(i,e[n]);else r(n,e[n])}return t}const f=p(i),d=p(n.nodes),h=p(n.list);function m(e,t,r,n){const i=e[t.type];return i?i(t,r,n):null}function y(e){return!!o(e)||u(e)&&y(e.object)}function g(e,t,r){if(!e)return 0;l(e)&&(e=e.expression);let n=m(d,e,t);if(!n){const i=m(h,e,t);if(i)for(let t=0;t<i.length&&(n=g(i[t],e,r),!n);t++);}return"object"==typeof n&&null!==n&&n[r]||0}},52514:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ArrowFunctionExpression=function(e,t){return y(t)||ie(e,t)},t.AssignmentExpression=function(e,t){return!!I(e.left)||ie(e,t)},t.Binary=function(e,t){if("**"===e.operator&&u(t,{operator:"**"}))return t.left===e;if(te(e,t))return!0;if(re(e,t)||H(t)||o(t))return!0;if(l(t)){const r=t.operator,n=ee[r],i=e.operator,s=ee[i];if(n===s&&t.right===e&&!C(t)||n>s)return!0}},t.BinaryExpression=function(e,t){return"in"===e.operator&&(Y(t)||v(t))},t.ClassExpression=function(e,t,r){return se(r,{expressionStatement:!0,exportDefault:!0})},t.ConditionalExpression=ie,t.DoExpression=function(e,t,r){return!e.async&&se(r,{expressionStatement:!0})},t.FunctionExpression=function(e,t,r){return se(r,{expressionStatement:!0,exportDefault:!0})},t.FunctionTypeAnnotation=function(e,t,r){return X(t)||D(t)||i(t)||J(t)&&s(r[r.length-3])},t.Identifier=function(e,t,r){var n;if(null!=(n=e.extra)&&n.parenthesized&&a(t,{left:e})&&(T(t.right)||d(t.right))&&null==t.right.id)return!0;if("let"===e.name){const n=w(t,{object:e,computed:!0})||N(t,{object:e,computed:!0,optional:!1});return se(r,{expressionStatement:n,forHead:n,forInHead:n,forOfHead:!0})}return"async"===e.name&&x(t)&&e===t.left},t.LogicalExpression=function(e,t){switch(e.operator){case"||":return!!C(t)&&("??"===t.operator||"&&"===t.operator);case"&&":return C(t,{operator:"??"});case"??":return C(t)&&"??"!==t.operator}},t.NullableTypeAnnotation=function(e,t){return i(t)},t.ObjectExpression=function(e,t,r){return se(r,{expressionStatement:!0,arrowBody:!0})},t.OptionalIndexedAccessType=function(e,t){return P(t,{objectType:e})},t.OptionalCallExpression=t.OptionalMemberExpression=function(e,t){return p(t,{callee:e})||w(t,{object:e})},t.SequenceExpression=function(e,t){if(S(t)||z(t)||j(t)||A(t)&&t.test===e||Q(t)&&t.test===e||E(t)&&t.right===e||_(t)&&t.discriminant===e||b(t)&&t.expression===e)return!1;return!0},t.TSAsExpression=function(){return!0},t.TSInferType=function(e,t){return M(t)||V(t)},t.TSInstantiationExpression=function(e,t){return(p(t)||k(t)||O(t)||R(t))&&!!t.typeParameters},t.TSTypeAssertion=function(){return!0},t.TSIntersectionType=t.TSUnionType=function(e,t){return M(t)||V(t)||U(t)||q(t)||W(t)},t.UnaryLike=ne,t.IntersectionTypeAnnotation=t.UnionTypeAnnotation=function(e,t){return i(t)||F(t)||D(t)||X(t)},t.UpdateExpression=function(e,t){return re(e,t)||te(e,t)},t.AwaitExpression=t.YieldExpression=function(e,t){return l(t)||H(t)||re(e,t)||o(t)&&Z(e)||m(t)&&e===t.test||te(e,t)};var n=r(38218);const{isArrayTypeAnnotation:i,isArrowFunctionExpression:s,isAssignmentExpression:a,isAwaitExpression:o,isBinary:l,isBinaryExpression:u,isUpdateExpression:c,isCallExpression:p,isClassDeclaration:f,isClassExpression:d,isConditional:h,isConditionalExpression:m,isExportDeclaration:y,isExportDefaultDeclaration:g,isExpressionStatement:b,isFor:v,isForInStatement:E,isForOfStatement:x,isForStatement:S,isFunctionExpression:T,isIfStatement:A,isIndexedAccessType:P,isIntersectionTypeAnnotation:D,isLogicalExpression:C,isMemberExpression:w,isNewExpression:O,isNullableTypeAnnotation:F,isObjectPattern:I,isOptionalCallExpression:k,isOptionalMemberExpression:N,isReturnStatement:j,isSequenceExpression:B,isSwitchStatement:_,isTSArrayType:M,isTSAsExpression:L,isTSInstantiationExpression:R,isTSIntersectionType:U,isTSNonNullExpression:$,isTSOptionalType:V,isTSRestType:W,isTSTypeAssertion:K,isTSUnionType:q,isTaggedTemplateExpression:G,isThrowStatement:z,isTypeAnnotation:J,isUnaryLike:H,isUnionTypeAnnotation:X,isVariableDeclarator:Y,isWhileStatement:Q,isYieldExpression:Z}=n,ee={"||":0,"??":0,"&&":1,"|":2,"^":3,"&":4,"==":5,"===":5,"!=":5,"!==":5,"<":6,">":6,"<=":6,">=":6,in:6,instanceof:6,">>":7,"<<":7,">>>":7,"+":8,"-":8,"*":9,"/":9,"%":9,"**":10},te=(e,t)=>(f(t)||d(t))&&t.superClass===e,re=(e,t)=>(w(t)||N(t))&&t.object===e||(p(t)||k(t)||O(t))&&t.callee===e||G(t)&&t.tag===e||$(t);function ne(e,t){return re(e,t)||u(t,{operator:"**",left:e})||te(e,t)}function ie(e,t){return!!(H(t)||l(t)||m(t,{test:e})||o(t)||K(t)||L(t))||ne(e,t)}function se(e,{expressionStatement:t=!1,arrowBody:r=!1,exportDefault:n=!1,forHead:i=!1,forInHead:o=!1,forOfHead:u=!1}){let p=e.length-1,f=e[p];p--;let d=e[p];for(;p>=0;){if(t&&b(d,{expression:f})||n&&g(d,{declaration:f})||r&&s(d,{body:f})||i&&S(d,{init:f})||o&&E(d,{left:f})||u&&x(d,{left:f}))return!0;if(!(re(f,d)&&!O(d)||B(d)&&d.expressions[0]===f||c(d)&&!d.prefix||h(d,{test:f})||l(d,{left:f})||a(d,{left:f})))return!1;f=d,p--,d=e[p]}return!1}},24114:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.nodes=t.list=void 0;var n=r(38218);const{FLIPPED_ALIAS_KEYS:i,isArrayExpression:s,isAssignmentExpression:a,isBinary:o,isBlockStatement:l,isCallExpression:u,isFunction:c,isIdentifier:p,isLiteral:f,isMemberExpression:d,isObjectExpression:h,isOptionalCallExpression:m,isOptionalMemberExpression:y,isStringLiteral:g}=n;function b(e,t={}){return d(e)||y(e)?(b(e.object,t),e.computed&&b(e.property,t)):o(e)||a(e)?(b(e.left,t),b(e.right,t)):u(e)||m(e)?(t.hasCall=!0,b(e.callee,t)):c(e)?t.hasFunction=!0:p(e)&&(t.hasHelper=t.hasHelper||v(e.callee)),t}function v(e){return d(e)?v(e.object)||v(e.property):p(e)?"require"===e.name||"_"===e.name[0]:u(e)?v(e.callee):!(!o(e)&&!a(e))&&(p(e.left)&&v(e.left)||v(e.right))}function E(e){return f(e)||h(e)||s(e)||p(e)||d(e)}const x={AssignmentExpression(e){const t=b(e.right);if(t.hasCall&&t.hasHelper||t.hasFunction)return{before:t.hasFunction,after:!0}},SwitchCase:(e,t)=>({before:!!e.consequent.length||t.cases[0]===e,after:!e.consequent.length&&t.cases[t.cases.length-1]===e}),LogicalExpression(e){if(c(e.left)||c(e.right))return{after:!0}},Literal(e){if(g(e)&&"use strict"===e.value)return{after:!0}},CallExpression(e){if(c(e.callee)||v(e))return{before:!0,after:!0}},OptionalCallExpression(e){if(c(e.callee))return{before:!0,after:!0}},VariableDeclaration(e){for(let t=0;t<e.declarations.length;t++){const r=e.declarations[t];let n=v(r.id)&&!E(r.init);if(!n){const e=b(r.init);n=v(r.init)&&e.hasCall||e.hasFunction}if(n)return{before:!0,after:!0}}},IfStatement(e){if(l(e.consequent))return{before:!0,after:!0}}};t.nodes=x,x.ObjectProperty=x.ObjectTypeProperty=x.ObjectMethod=function(e,t){if(t.properties[0]===e)return{before:!0}},x.ObjectTypeCallProperty=function(e,t){var r;if(t.callProperties[0]===e&&(null==(r=t.properties)||!r.length))return{before:!0}},x.ObjectTypeIndexer=function(e,t){var r,n;if(!(t.indexers[0]!==e||null!=(r=t.properties)&&r.length||null!=(n=t.callProperties)&&n.length))return{before:!0}},x.ObjectTypeInternalSlot=function(e,t){var r,n,i;if(!(t.internalSlots[0]!==e||null!=(r=t.properties)&&r.length||null!=(n=t.callProperties)&&n.length||null!=(i=t.indexers)&&i.length))return{before:!0}};const S={VariableDeclaration:e=>e.declarations.map((e=>e.init)),ArrayExpression:e=>e.elements,ObjectExpression:e=>e.properties};t.list=S,[["Function",!0],["Class",!0],["Loop",!0],["LabeledStatement",!0],["SwitchStatement",!0],["TryStatement",!0]].forEach((function([e,t]){"boolean"==typeof t&&(t={after:t,before:t}),[e].concat(i[e]||[]).forEach((function(e){x[e]=function(){return t}}))}))},13105:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(28649),i=r(32866),s=r(38218),a=r(38217);const{isProgram:o,isFile:l,isEmptyStatement:u}=s,c=/e/i,p=/\.0+$/,f=/^0[box]/,d=/^\s*[@#]__PURE__\s*$/,{needsParens:h,needsWhitespaceAfter:m,needsWhitespaceBefore:y}=i;class g{constructor(e,t){this.inForStatementInitCounter=0,this._printStack=[],this._indent=0,this._insideAux=!1,this._parenPushNewlineState=null,this._noLineTerminator=!1,this._printAuxAfterOnNextUserNode=!1,this._printedComments=new WeakSet,this._endsWithInteger=!1,this._endsWithWord=!1,this.format=e,this._buf=new n.default(t)}generate(e){return this.print(e),this._maybeAddAuxComment(),this._buf.get()}indent(){this.format.compact||this.format.concise||this._indent++}dedent(){this.format.compact||this.format.concise||this._indent--}semicolon(e=!1){this._maybeAddAuxComment(),this._append(";",!e)}rightBrace(){this.format.minified&&this._buf.removeLastSemicolon(),this.token("}")}space(e=!1){if(!this.format.compact)if(e)this._space();else if(this._buf.hasContent()){const e=this.getLastChar();32!==e&&10!==e&&this._space()}}word(e){(this._endsWithWord||this.endsWith(47)&&47===e.charCodeAt(0))&&this._space(),this._maybeAddAuxComment(),this._append(e),this._endsWithWord=!0}number(e){this.word(e),this._endsWithInteger=Number.isInteger(+e)&&!f.test(e)&&!c.test(e)&&!p.test(e)&&46!==e.charCodeAt(e.length-1)}token(e){const t=this.getLastChar(),r=e.charCodeAt(0);("--"===e&&33===t||43===r&&43===t||45===r&&45===t||46===r&&this._endsWithInteger)&&this._space(),this._maybeAddAuxComment(),this._append(e)}newline(e=1){if(this.format.retainLines||this.format.compact)return;if(this.format.concise)return void this.space();const t=this.endsWithCharAndNewline();if(10!==t&&(123!==t&&58!==t||e--,!(e<=0)))for(let r=0;r<e;r++)this._newline()}endsWith(e){return this.getLastChar()===e}getLastChar(){return this._buf.getLastChar()}endsWithCharAndNewline(){return this._buf.endsWithCharAndNewline()}removeTrailingNewline(){this._buf.removeTrailingNewline()}exactSource(e,t){this._catchUp("start",e),this._buf.exactSource(e,t)}source(e,t){this._catchUp(e,t),this._buf.source(e,t)}withSource(e,t,r){this._catchUp(e,t),this._buf.withSource(e,t,r)}_space(){this._append(" ",!0)}_newline(){this._append("\n",!0)}_append(e,t=!1){this._maybeAddParen(e),this._maybeIndent(e),t?this._buf.queue(e):this._buf.append(e),this._endsWithWord=!1,this._endsWithInteger=!1}_maybeIndent(e){this._indent&&this.endsWith(10)&&10!==e.charCodeAt(0)&&this._buf.queueIndentation(this._getIndent())}_maybeAddParen(e){const t=this._parenPushNewlineState;if(!t)return;let r;for(r=0;r<e.length&&" "===e[r];r++)continue;if(r===e.length)return;const n=e[r];if("\n"!==n){if("/"!==n||r+1===e.length)return void(this._parenPushNewlineState=null);const t=e[r+1];if("*"===t){if(d.test(e.slice(r+2,e.length-2)))return}else if("/"!==t)return void(this._parenPushNewlineState=null)}this.token("("),this.indent(),t.printed=!0}_catchUp(e,t){if(!this.format.retainLines)return;const r=t?t[e]:null;if(null!=(null==r?void 0:r.line)){const e=r.line-this._buf.getCurrentLine();for(let t=0;t<e;t++)this._newline()}}_getIndent(){return this.format.indent.style.repeat(this._indent)}startTerminatorless(e=!1){return e?(this._noLineTerminator=!0,null):this._parenPushNewlineState={printed:!1}}endTerminatorless(e){this._noLineTerminator=!1,null!=e&&e.printed&&(this.dedent(),this.newline(),this.token(")"))}print(e,t){if(!e)return;const r=this.format.concise;e._compact&&(this.format.concise=!0);const n=this[e.type];if(!n)throw new ReferenceError(`unknown node of type ${JSON.stringify(e.type)} with constructor ${JSON.stringify(null==e?void 0:e.constructor.name)}`);this._printStack.push(e);const i=this._insideAux;this._insideAux=!e.loc,this._maybeAddAuxComment(this._insideAux&&!i);let s=h(e,t,this._printStack);this.format.retainFunctionParens&&"FunctionExpression"===e.type&&e.extra&&e.extra.parenthesized&&(s=!0),s&&this.token("("),this._printLeadingComments(e);const a=o(e)||l(e)?null:e.loc;this.withSource("start",a,(()=>{n.call(this,e,t)})),this._printTrailingComments(e),s&&this.token(")"),this._printStack.pop(),this.format.concise=r,this._insideAux=i}_maybeAddAuxComment(e){e&&this._printAuxBeforeComment(),this._insideAux||this._printAuxAfterComment()}_printAuxBeforeComment(){if(this._printAuxAfterOnNextUserNode)return;this._printAuxAfterOnNextUserNode=!0;const e=this.format.auxiliaryCommentBefore;e&&this._printComment({type:"CommentBlock",value:e})}_printAuxAfterComment(){if(!this._printAuxAfterOnNextUserNode)return;this._printAuxAfterOnNextUserNode=!1;const e=this.format.auxiliaryCommentAfter;e&&this._printComment({type:"CommentBlock",value:e})}getPossibleRaw(e){const t=e.extra;if(t&&null!=t.raw&&null!=t.rawValue&&e.value===t.rawValue)return t.raw}printJoin(e,t,r={}){if(null==e||!e.length)return;r.indent&&this.indent();const n={addNewlines:r.addNewlines};for(let i=0;i<e.length;i++){const s=e[i];s&&(r.statement&&this._printNewline(!0,s,t,n),this.print(s,t),r.iterator&&r.iterator(s,i),r.separator&&i<e.length-1&&r.separator.call(this),r.statement&&this._printNewline(!1,s,t,n))}r.indent&&this.dedent()}printAndIndentOnComments(e,t){const r=e.leadingComments&&e.leadingComments.length>0;r&&this.indent(),this.print(e,t),r&&this.dedent()}printBlock(e){const t=e.body;u(t)||this.space(),this.print(t,e)}_printTrailingComments(e){this._printComments(this._getComments(!1,e))}_printLeadingComments(e){this._printComments(this._getComments(!0,e),!0)}printInnerComments(e,t=!0){var r;null!=(r=e.innerComments)&&r.length&&(t&&this.indent(),this._printComments(e.innerComments),t&&this.dedent())}printSequence(e,t,r={}){return r.statement=!0,this.printJoin(e,t,r)}printList(e,t,r={}){return null==r.separator&&(r.separator=v),this.printJoin(e,t,r)}_printNewline(e,t,r,n){if(this.format.retainLines||this.format.compact)return;if(this.format.concise)return void this.space();let i=0;if(this._buf.hasContent()){e||i++,n.addNewlines&&(i+=n.addNewlines(e,t)||0);(e?y:m)(t,r)&&i++}this.newline(Math.min(2,i))}_getComments(e,t){return t&&(e?t.leadingComments:t.trailingComments)||[]}_printComment(e,t){if(!this.format.shouldPrintComment(e.value))return;if(e.ignore)return;if(this._printedComments.has(e))return;this._printedComments.add(e);const r="CommentBlock"===e.type,n=r&&!t&&!this._noLineTerminator;n&&this._buf.hasContent()&&this.newline(1);const i=this.getLastChar();91!==i&&123!==i&&this.space();let s=r||this._noLineTerminator?`/*${e.value}*/`:`//${e.value}\n`;if(r&&this.format.indent.adjustMultilineComment){var a;const t=null==(a=e.loc)?void 0:a.start.column;if(t){const e=new RegExp("\\n\\s{1,"+t+"}","g");s=s.replace(e,"\n")}const r=Math.max(this._getIndent().length,this.format.retainLines?0:this._buf.getCurrentColumn());s=s.replace(/\n(?!$)/g,`\n${" ".repeat(r)}`)}this.endsWith(47)&&this._space(),this.withSource("start",e.loc,(()=>{this._append(s)})),n&&this.newline(1)}_printComments(e,t){if(null!=e&&e.length)if(t&&1===e.length&&d.test(e[0].value))this._printComment(e[0],this._buf.hasContent()&&!this.endsWith(10));else for(const r of e)this._printComment(r)}printAssertions(e){var t;null!=(t=e.assertions)&&t.length&&(this.space(),this.word("assert"),this.space(),this.token("{"),this.space(),this.printList(e.assertions,e),this.space(),this.token("}"))}}Object.assign(g.prototype,a),g.prototype.Noop=function(){};var b=g;function v(){this.token(","),this.space()}t.default=b},27853:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(83744);t.default=class{constructor(e,t){var r;this._map=void 0,this._rawMappings=void 0,this._sourceFileName=void 0,this._lastGenLine=0,this._lastSourceLine=0,this._lastSourceColumn=0;const i=this._map=new n.GenMapping({sourceRoot:e.sourceRoot});this._sourceFileName=null==(r=e.sourceFileName)?void 0:r.replace(/\\/g,"/"),this._rawMappings=void 0,"string"==typeof t?(0,n.setSourceContent)(i,this._sourceFileName,t):"object"==typeof t&&Object.keys(t).forEach((e=>{(0,n.setSourceContent)(i,e.replace(/\\/g,"/"),t[e])}))}get(){return(0,n.toEncodedMap)(this._map)}getDecoded(){return(0,n.toDecodedMap)(this._map)}getRawMappings(){return this._rawMappings||(this._rawMappings=(0,n.allMappings)(this._map))}mark(e,t,r,i,s){this._rawMappings=void 0,(0,n.maybeAddMapping)(this._map,{name:i,generated:e,source:null==t?void 0:(null==s?void 0:s.replace(/\\/g,"/"))||this._sourceFileName,original:null==t?void 0:{line:t,column:r}})}}},83744:function(e,t,r){!function(e,t,r,n){"use strict";const i=0,s=1,a=2,o=3,l=4,u=-1;let c;e.addSegment=void 0,e.addMapping=void 0,e.maybeAddSegment=void 0,e.maybeAddMapping=void 0,e.setSourceContent=void 0,e.toDecodedMap=void 0,e.toEncodedMap=void 0,e.fromMap=void 0,e.allMappings=void 0;class p{constructor({file:e,sourceRoot:r}={}){this._names=new t.SetArray,this._sources=new t.SetArray,this._sourcesContent=[],this._mappings=[],this.file=e,this.sourceRoot=r}}function f(e,t){for(let r=e.length;r<=t;r++)e[r]=[];return e[t]}function d(e,t){let r=e.length;for(let n=r-1;n>=0&&!(t>=e[n][i]);r=n--);return r}function h(e,t,r){for(let n=e.length;n>t;n--)e[n]=e[n-1];e[t]=r}function m(e){const{length:t}=e;let r=t;for(let n=r-1;n>=0&&!(e[n].length>0);r=n,n--);r<t&&(e.length=r)}function y(e,r){for(let n=0;n<r.length;n++)t.put(e,r[n])}function g(e,t){return 0===t||1===e[t-1].length}function b(e,t,r,n,i,c){if(0===t)return!1;const p=e[t-1];return 1!==p.length&&r===p[s]&&n===p[a]&&i===p[o]&&c===(5===p.length?p[l]:u)}function v(e,t,r){const{generated:n,source:i,original:s,name:a,content:o}=r;if(!i)return c(e,t,n.line-1,n.column,null,null,null,null,null);const l=i;return c(e,t,n.line-1,n.column,l,s.line-1,s.column,a,o)}e.addSegment=(e,t,r,n,i,s,a,o)=>c(!1,e,t,r,n,i,s,a,o),e.maybeAddSegment=(e,t,r,n,i,s,a,o)=>c(!0,e,t,r,n,i,s,a,o),e.addMapping=(e,t)=>v(!1,e,t),e.maybeAddMapping=(e,t)=>v(!0,e,t),e.setSourceContent=(e,r,n)=>{const{_sources:i,_sourcesContent:s}=e;s[t.put(i,r)]=n},e.toDecodedMap=e=>{const{file:t,sourceRoot:r,_mappings:n,_sources:i,_sourcesContent:s,_names:a}=e;return m(n),{version:3,file:t||void 0,names:a.array,sourceRoot:r||void 0,sources:i.array,sourcesContent:s,mappings:n}},e.toEncodedMap=t=>{const n=e.toDecodedMap(t);return Object.assign(Object.assign({},n),{mappings:r.encode(n.mappings)})},e.allMappings=e=>{const t=[],{_mappings:r,_sources:n,_names:u}=e;for(let c=0;c<r.length;c++){const e=r[c];for(let r=0;r<e.length;r++){const p=e[r],f={line:c+1,column:p[i]};let d,h,m;1!==p.length&&(d=n.array[p[s]],h={line:p[a]+1,column:p[o]},5===p.length&&(m=u.array[p[l]])),t.push({generated:f,source:d,original:h,name:m})}}return t},e.fromMap=e=>{const t=new n.TraceMap(e),r=new p({file:t.file,sourceRoot:t.sourceRoot});return y(r._names,t.names),y(r._sources,t.sources),r._sourcesContent=t.sourcesContent||t.sources.map((()=>null)),r._mappings=n.decodedMappings(t),r},c=(e,r,n,i,s,a,o,l,c)=>{const{_mappings:p,_sources:m,_sourcesContent:y,_names:v}=r,E=f(p,n),x=d(E,i);if(!s){if(e&&g(E,x))return;return h(E,x,[i])}const S=t.put(m,s),T=l?t.put(v,l):u;if(S===y.length&&(y[S]=null!=c?c:null),!e||!b(E,x,S,a,o,T))return h(E,x,l?[i,S,a,o,T]:[i,S,a,o])},e.GenMapping=p,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(22208),r(92297),r(83446))},94021:(e,t,r)=>{"use strict";var n=r(48764).Buffer;const i={},s=i.hasOwnProperty,a=(e,t)=>{for(const r in e)s.call(e,r)&&t(r,e[r])},o=i.toString,l=Array.isArray,u=n.isBuffer,c={'"':'\\"',"'":"\\'","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"},p=/["'\\\b\f\n\r\t]/,f=/[0-9]/,d=/[ !#-&\(-\[\]-_a-~]/,h=(e,t)=>{const r=()=>{E=v,++t.indentLevel,v=t.indent.repeat(t.indentLevel)},n={escapeEverything:!1,minimal:!1,isScriptContext:!1,quotes:"single",wrap:!1,es6:!1,json:!1,compact:!0,lowercaseHex:!1,numbers:"decimal",indent:"\t",indentLevel:0,__inline1__:!1,__inline2__:!1},i=t&&t.json;var s,m;i&&(n.quotes="double",n.wrap=!0),s=n,t=(m=t)?(a(m,((e,t)=>{s[e]=t})),s):s,"single"!=t.quotes&&"double"!=t.quotes&&"backtick"!=t.quotes&&(t.quotes="single");const y="double"==t.quotes?'"':"backtick"==t.quotes?"`":"'",g=t.compact,b=t.lowercaseHex;let v=t.indent.repeat(t.indentLevel),E="";const x=t.__inline1__,S=t.__inline2__,T=g?"":"\n";let A,P=!0;const D="binary"==t.numbers,C="octal"==t.numbers,w="decimal"==t.numbers,O="hexadecimal"==t.numbers;if(i&&e&&"function"==typeof e.toJSON&&(e=e.toJSON()),!(e=>"string"==typeof e||"[object String]"==o.call(e))(e)){if((e=>"[object Map]"==o.call(e))(e))return 0==e.size?"new Map()":(g||(t.__inline1__=!0,t.__inline2__=!1),"new Map("+h(Array.from(e),t)+")");if((e=>"[object Set]"==o.call(e))(e))return 0==e.size?"new Set()":"new Set("+h(Array.from(e),t)+")";if(u(e))return 0==e.length?"Buffer.from([])":"Buffer.from("+h(Array.from(e),t)+")";if(l(e))return A=[],t.wrap=!0,x&&(t.__inline1__=!1,t.__inline2__=!0),S||r(),((e,t)=>{const r=e.length;let n=-1;for(;++n<r;)t(e[n])})(e,(e=>{P=!1,S&&(t.__inline2__=!1),A.push((g||S?"":v)+h(e,t))})),P?"[]":S?"["+A.join(", ")+"]":"["+T+A.join(","+T)+T+(g?"":E)+"]";if(!(e=>"number"==typeof e||"[object Number]"==o.call(e))(e))return(e=>"[object Object]"==o.call(e))(e)?(A=[],t.wrap=!0,r(),a(e,((e,r)=>{P=!1,A.push((g?"":v)+h(e,t)+":"+(g?"":" ")+h(r,t))})),P?"{}":"{"+T+A.join(","+T)+T+(g?"":E)+"}"):i?JSON.stringify(e)||"null":String(e);if(i)return JSON.stringify(e);if(w)return String(e);if(O){let t=e.toString(16);return b||(t=t.toUpperCase()),"0x"+t}if(D)return"0b"+e.toString(2);if(C)return"0o"+e.toString(8)}const F=e;let I=-1;const k=F.length;for(A="";++I<k;){const e=F.charAt(I);if(t.es6){const e=F.charCodeAt(I);if(e>=55296&&e<=56319&&k>I+1){const t=F.charCodeAt(I+1);if(t>=56320&&t<=57343){let r=(1024*(e-55296)+t-56320+65536).toString(16);b||(r=r.toUpperCase()),A+="\\u{"+r+"}",++I;continue}}}if(!t.escapeEverything){if(d.test(e)){A+=e;continue}if('"'==e){A+=y==e?'\\"':e;continue}if("`"==e){A+=y==e?"\\`":e;continue}if("'"==e){A+=y==e?"\\'":e;continue}}if("\0"==e&&!i&&!f.test(F.charAt(I+1))){A+="\\0";continue}if(p.test(e)){A+=c[e];continue}const r=e.charCodeAt(0);if(t.minimal&&8232!=r&&8233!=r){A+=e;continue}let n=r.toString(16);b||(n=n.toUpperCase());const s=n.length>2||i,a="\\"+(s?"u":"x")+("0000"+n).slice(s?-4:-2);A+=a}return t.wrap&&(A=y+A+y),"`"==y&&(A=A.replace(/\$\{/g,"\\${")),t.isScriptContext?A.replace(/<\/(script|style)/gi,"<\\/$1").replace(/<!--/g,i?"\\u003C!--":"\\x3C!--"):A};h.version="2.5.2",e.exports=h},94321:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=e.node||e;if((({leadingComments:e})=>!!e&&e.some((e=>/[@#]__PURE__/.test(e.value))))(t))return;i(t,"leading","#__PURE__")};var n=r(38218);const{addComment:i}=n},89678:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getInclusionReasons=function(e,t,r){const a=r[e]||{};return Object.keys(t).reduce(((e,r)=>{const o=(0,s.getLowestImplementedVersion)(a,r),l=t[r];if(o){const t=(0,s.isUnreleasedVersion)(o,r);(0,s.isUnreleasedVersion)(l,r)||!t&&!n.lt(l.toString(),(0,s.semverify)(o))||(e[r]=(0,i.prettifyVersion)(l))}else e[r]=(0,i.prettifyVersion)(l);return e}),{})};var n=r(18141),i=r(8087),s=r(83108)},99584:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,n,i,s,a){const l=new Set,u={compatData:e,includes:t,excludes:r};for(const c in e)if(o(c,n,u))l.add(c);else if(a){const e=a.get(c);e&&l.add(e)}i&&i.forEach((e=>!r.has(e)&&l.add(e)));s&&s.forEach((e=>!t.has(e)&&l.delete(e)));return l},t.isRequired=o,t.targetsSupported=a;var n=r(18141),i=r(24832),s=r(83108);function a(e,t){const r=Object.keys(e);if(0===r.length)return!1;return 0===r.filter((r=>{const i=(0,s.getLowestImplementedVersion)(t,r);if(!i)return!0;const a=e[r];if((0,s.isUnreleasedVersion)(a,r))return!1;if((0,s.isUnreleasedVersion)(i,r))return!0;if(!n.valid(a.toString()))throw new Error(`Invalid version passed for target "${r}": "${a}". Versions must be in semver format (major.minor.patch)`);return n.gt((0,s.semverify)(i),a.toString())})).length}function o(e,t,{compatData:r=i,includes:n,excludes:s}={}){return(null==s||!s.has(e))&&(!(null==n||!n.has(e))||!a(t,r[e]))}},34077:(e,t,r)=>{"use strict";var n=r(34155);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"TargetNames",{enumerable:!0,get:function(){return u.TargetNames}}),t.default=function(e={},t={}){var r,n;let{browsers:a,esmodules:c}=e;const{configPath:p="."}=t;!function(e){h.invariant(void 0===e||m(e),`'${String(e)}' is not a valid browserslist query`)}(a);let f=function(e){const t=Object.keys(u.TargetNames);for(const r of Object.keys(e))if(!(r in u.TargetNames))throw new Error(h.formatMessage(`'${r}' is not a valid target\n- Did you mean '${(0,s.findSuggestion)(r,t)}'?`));return e}(function(e){const t=Object.assign({},e);return delete t.esmodules,delete t.browsers,t}(e));const y=!!a||Object.keys(f).length>0,b=!t.ignoreBrowserslistConfig&&!y;!a&&b&&(a=i.loadConfig({config:t.configFile,path:p,env:t.browserslistEnv}),null==a&&(a=[]));!c||"intersect"===c&&null!=(r=a)&&r.length||(a=Object.keys(d).map((e=>`${e} >= ${d[e]}`)).join(", "),c=!1);if(null!=(n=a)&&n.length){const e=(v=a,E=t.browserslistEnv,function(e){return e.reduce(((e,t)=>{const[r,n]=t.split(" "),i=l.browserNameMap[r];if(!i)return e;try{const t=n.split("-")[0].toLowerCase(),s=(0,o.isUnreleasedVersion)(t,r);if(!e[i])return e[i]=s?t:(0,o.semverify)(t),e;const a=e[i],l=(0,o.isUnreleasedVersion)(a,r);if(l&&s)e[i]=(0,o.getLowestUnreleased)(a,t,r);else if(l)e[i]=(0,o.semverify)(t);else if(!l&&!s){const r=(0,o.semverify)(t);e[i]=(0,o.semverMin)(a,r)}}catch(s){}return e}),{})}(i(v,{mobileToDesktop:!0,env:E})));if("intersect"===c)for(const t of Object.keys(e)){const r=e[t];d[t]?e[t]=(0,o.getHighestUnreleased)(r,(0,o.semverify)(d[t]),t):delete e[t]}f=Object.assign(e,f)}var v,E;const x={},S=[];for(const i of Object.keys(f).sort()){var T;const e=f[i];"number"==typeof e&&e%1!=0&&S.push({target:i,value:e});const t=null!=(T=g[i])?T:g.__default,[r,n]=t(i,e);n&&(x[r]=n)}return function(e){if(!e.length)return;console.warn("Warning, the following targets are using a decimal version:\n"),e.forEach((({target:e,value:t})=>console.warn(`  ${e}: ${t}`))),console.warn("\nWe recommend using a string for minor/patch versions to avoid numbers like 6.10\ngetting parsed as 6.1, which can lead to unexpected behavior.\n")}(S),x},Object.defineProperty(t,"filterItems",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"getInclusionReasons",{enumerable:!0,get:function(){return p.getInclusionReasons}}),t.isBrowsersQueryValid=m,Object.defineProperty(t,"isRequired",{enumerable:!0,get:function(){return f.isRequired}}),Object.defineProperty(t,"prettifyTargets",{enumerable:!0,get:function(){return c.prettifyTargets}}),Object.defineProperty(t,"unreleasedLabels",{enumerable:!0,get:function(){return l.unreleasedLabels}});var i=r(31e3),s=r(54346),a=r(78142),o=r(83108),l=r(2950),u=r(78910),c=r(8087),p=r(89678),f=r(99584);const d=a["es6.module"],h=new s.OptionValidator("@babel/helper-compilation-targets");function m(e){return"string"==typeof e||Array.isArray(e)&&e.every((e=>"string"==typeof e))}function y(e,t){try{return(0,o.semverify)(t)}catch(r){throw new Error(h.formatMessage(`'${t}' is not a valid value for 'targets.${e}'.`))}}const g={__default:(e,t)=>[e,(0,o.isUnreleasedVersion)(t,e)?t.toLowerCase():y(e,t)],node:(e,t)=>[e,!0===t||"current"===t?n.versions.node:y(e,t)]}},78910:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TargetNames=void 0;t.TargetNames={node:"node",chrome:"chrome",opera:"opera",edge:"edge",firefox:"firefox",safari:"safari",ie:"ie",ios:"ios",android:"android",electron:"electron",samsung:"samsung",rhino:"rhino"}},8087:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.prettifyTargets=function(e){return Object.keys(e).reduce(((t,r)=>{let n=e[r];const a=i.unreleasedLabels[r];return"string"==typeof n&&a!==n&&(n=s(n)),t[r]=n,t}),{})},t.prettifyVersion=s;var n=r(18141),i=r(2950);function s(e){if("string"!=typeof e)return e;const t=[n.major(e)],r=n.minor(e),i=n.patch(e);return(r||i)&&t.push(r),i&&t.push(i),t.join(".")}},2950:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unreleasedLabels=t.browserNameMap=void 0;t.unreleasedLabels={safari:"tp"};t.browserNameMap={and_chr:"chrome",and_ff:"firefox",android:"android",chrome:"chrome",edge:"edge",firefox:"firefox",ie:"ie",ie_mob:"ie",ios_saf:"ios",node:"node",op_mob:"opera",opera:"opera",safari:"safari",samsung:"samsung"}},83108:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getHighestUnreleased=function(e,t,r){return u(e,t,r)===e?t:e},t.getLowestImplementedVersion=function(e,t){const r=e[t];if(!r&&"android"===t)return e.chrome;return r},t.getLowestUnreleased=u,t.isUnreleasedVersion=function(e,t){const r=s.unreleasedLabels[t];return!!r&&r===e.toString().toLowerCase()},t.semverMin=l,t.semverify=function(e){if("string"==typeof e&&n.valid(e))return e;o.invariant("number"==typeof e||"string"==typeof e&&a.test(e),`'${e}' is not a valid version`);const t=e.toString().split(".");for(;t.length<3;)t.push("0");return t.join(".")};var n=r(18141),i=r(54346),s=r(2950);const a=/^(\d+|\d+.\d+)$/,o=new i.OptionValidator("@babel/helper-compilation-targets");function l(e,t){return e&&n.lt(e,t)?e:t}function u(e,t,r){const n=s.unreleasedLabels[r],i=[e,t].some((e=>e===n));return i?e===i?t:e||t:l(e,t)}},31692:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.skipAllButComputedKey=a;var n=r(38218);const{VISITOR_KEYS:i,staticBlock:s}=n;function a(e){if(!e.node.computed)return void e.skip();const t=i[e.type];for(const r of t)"key"!==r&&e.skipKey(r)}var o={[(s?"StaticBlock|":"")+"ClassPrivateProperty|TypeAnnotation|FunctionDeclaration|FunctionExpression"]:e=>e.skip(),"Method|ClassProperty"(e){a(e)}};t.default=o},11485:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({node:e,parent:t,scope:r,id:n},i=!1,A=!1){if(e.id)return;if(!m(t)&&!h(t,{kind:"method"})||t.computed&&!f(t.key)){if(v(t)){if(n=t.id,p(n)&&!i){const t=r.parent.getBinding(n.name);if(t&&t.constant&&r.getBinding(n.name)===t)return e.id=a(n),void(e.id[s]=!0)}}else if(l(t,{operator:"="}))n=t.left;else if(!n)return}else n=t.key;let P;n&&f(n)?P=function(e){if(d(e))return"null";if(y(e))return`_${e.pattern}_${e.flags}`;if(b(e))return e.quasis.map((e=>e.value.raw)).join("");if(void 0!==e.value)return e.value+"";return""}(n):n&&p(n)&&(P=n.name);if(void 0===P)return;if(!A&&c(e)&&/[\uD800-\uDFFF]/.test(P))return;P=E(P),(n=o(P))[s]=!0;return function(e,t,r,n){if(e.selfReference){if(!n.hasBinding(r.name)||n.hasGlobal(r.name)){if(!c(t))return;let e=x;t.generator&&(e=S);const i=e({FUNCTION:t,FUNCTION_ID:r,FUNCTION_KEY:n.generateUidIdentifier(r.name)}).expression,s=i.callee.body.body[0].params;for(let r=0,a=function(e){const t=e.params.findIndex((e=>u(e)||g(e)));return-1===t?e.params.length:t}(t);r<a;r++)s.push(n.generateUidIdentifier("x"));return i}n.rename(r.name)}t.id=r,n.getProgramParent().references[r.name]=!0}(function(e,t,r){const n={selfAssignment:!1,selfReference:!1,outerDeclar:r.getBindingIdentifier(t),references:[],name:t},i=r.getOwnBinding(t);i?"param"===i.kind&&(n.selfReference=!0):(n.outerDeclar||r.hasGlobal(t))&&r.traverse(e,T,n);return n}(e,P,r),e,n,r)||e};var n=r(94847),i=r(38218);const{NOT_LOCAL_BINDING:s,cloneNode:a,identifier:o,isAssignmentExpression:l,isAssignmentPattern:u,isFunction:c,isIdentifier:p,isLiteral:f,isNullLiteral:d,isObjectMethod:h,isObjectProperty:m,isRegExpLiteral:y,isRestElement:g,isTemplateLiteral:b,isVariableDeclarator:v,toBindingIdentifierName:E}=i;const x=(0,n.default)("\n  (function (FUNCTION_KEY) {\n    function FUNCTION_ID() {\n      return FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    }\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n"),S=(0,n.default)("\n  (function (FUNCTION_KEY) {\n    function* FUNCTION_ID() {\n      return yield* FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    };\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n"),T={"ReferencedIdentifier|BindingIdentifier"(e,t){if(e.node.name!==t.name)return;e.scope.getBindingIdentifier(t.name)===t.outerDeclar&&(t.selfReference=!0,e.stop())}}},29061:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r="var"){e.traverse(o,{kind:r,emit:t})};var n=r(38218);const{assignmentExpression:i,expressionStatement:s,identifier:a}=n,o={Scope(e,t){"let"===t.kind&&e.skip()},FunctionParent(e){e.skip()},VariableDeclaration(e,t){if(t.kind&&e.node.kind!==t.kind)return;const r=[],n=e.get("declarations");let o;for(const l of n){o=l.node.id,l.node.init&&r.push(s(i("=",l.node.id,l.node.init)));for(const e of Object.keys(l.getBindingIdentifiers()))t.emit(a(e),e,null!==l.node.init)}e.parentPath.isFor({left:e.node})?e.replaceWith(o):e.replaceWithMultiple(r)}}},99503:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(69282),i=r(38218);const{callExpression:s,cloneNode:a,expressionStatement:o,identifier:l,importDeclaration:u,importDefaultSpecifier:c,importNamespaceSpecifier:p,importSpecifier:f,memberExpression:d,stringLiteral:h,variableDeclaration:m,variableDeclarator:y}=i;t.default=class{constructor(e,t,r){this._statements=[],this._resultName=null,this._scope=null,this._hub=null,this._importedSource=void 0,this._scope=t,this._hub=r,this._importedSource=e}done(){return{statements:this._statements,resultName:this._resultName}}import(){return this._statements.push(u([],h(this._importedSource))),this}require(){return this._statements.push(o(s(l("require"),[h(this._importedSource)]))),this}namespace(e="namespace"){const t=this._scope.generateUidIdentifier(e),r=this._statements[this._statements.length-1];return n("ImportDeclaration"===r.type),n(0===r.specifiers.length),r.specifiers=[p(t)],this._resultName=a(t),this}default(e){e=this._scope.generateUidIdentifier(e);const t=this._statements[this._statements.length-1];return n("ImportDeclaration"===t.type),n(0===t.specifiers.length),t.specifiers=[c(e)],this._resultName=a(e),this}named(e,t){if("default"===t)return this.default(e);e=this._scope.generateUidIdentifier(e);const r=this._statements[this._statements.length-1];return n("ImportDeclaration"===r.type),n(0===r.specifiers.length),r.specifiers=[f(e,l(t))],this._resultName=a(e),this}var(e){e=this._scope.generateUidIdentifier(e);let t=this._statements[this._statements.length-1];return"ExpressionStatement"!==t.type&&(n(this._resultName),t=o(this._resultName),this._statements.push(t)),this._statements[this._statements.length-1]=m("var",[y(e,t.expression)]),this._resultName=a(e),this}defaultInterop(){return this._interop(this._hub.addHelper("interopRequireDefault"))}wildcardInterop(){return this._interop(this._hub.addHelper("interopRequireWildcard"))}_interop(e){const t=this._statements[this._statements.length-1];return"ExpressionStatement"===t.type?t.expression=s(e,[t.expression]):"VariableDeclaration"===t.type?(n(1===t.declarations.length),t.declarations[0].init=s(e,[t.declarations[0].init])):n.fail("Unexpected type."),this}prop(e){const t=this._statements[this._statements.length-1];return"ExpressionStatement"===t.type?t.expression=d(t.expression,l(e)):"VariableDeclaration"===t.type?(n(1===t.declarations.length),t.declarations[0].init=d(t.declarations[0].init,l(e))):n.fail("Unexpected type:"+t.type),this}read(e){this._resultName=d(this._resultName,l(e))}}},58694:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(69282),i=r(38218),s=r(99503),a=r(10821);const{numericLiteral:o,sequenceExpression:l}=i;t.default=class{constructor(e,t,r){this._defaultOpts={importedSource:null,importedType:"commonjs",importedInterop:"babel",importingInterop:"babel",ensureLiveReference:!1,ensureNoContext:!1,importPosition:"before"};const n=e.find((e=>e.isProgram()));this._programPath=n,this._programScope=n.scope,this._hub=n.hub,this._defaultOpts=this._applyDefaults(t,r,!0)}addDefault(e,t){return this.addNamed("default",e,t)}addNamed(e,t,r){return n("string"==typeof e),this._generateImport(this._applyDefaults(t,r),e)}addNamespace(e,t){return this._generateImport(this._applyDefaults(e,t),null)}addSideEffect(e,t){return this._generateImport(this._applyDefaults(e,t),!1)}_applyDefaults(e,t,r=!1){const i=[];"string"==typeof e?(i.push({importedSource:e}),i.push(t)):(n(!t,"Unexpected secondary arguments."),i.push(e));const s=Object.assign({},this._defaultOpts);for(const n of i)n&&(Object.keys(s).forEach((e=>{void 0!==n[e]&&(s[e]=n[e])})),r||(void 0!==n.nameHint&&(s.nameHint=n.nameHint),void 0!==n.blockHoist&&(s.blockHoist=n.blockHoist)));return s}_generateImport(e,t){const r="default"===t,n=!!t&&!r,i=null===t,{importedSource:u,importedType:c,importedInterop:p,importingInterop:f,ensureLiveReference:d,ensureNoContext:h,nameHint:m,importPosition:y,blockHoist:g}=e;let b=m||t;const v=(0,a.default)(this._programPath),E=v&&"node"===f,x=v&&"babel"===f;if("after"===y&&!v)throw new Error('"importPosition": "after" is only supported in modules');const S=new s.default(u,this._programScope,this._hub);if("es6"===c){if(!E&&!x)throw new Error("Cannot import an ES6 module from CommonJS");S.import(),i?S.namespace(m||u):(r||n)&&S.named(b,t)}else{if("commonjs"!==c)throw new Error(`Unexpected interopType "${c}"`);if("babel"===p)if(E){b="default"!==b?b:u;const e=`${u}$es6Default`;S.import(),i?S.default(e).var(b||u).wildcardInterop():r?d?S.default(e).var(b||u).defaultInterop().read("default"):S.default(e).var(b).defaultInterop().prop(t):n&&S.default(e).read(t)}else x?(S.import(),i?S.namespace(b||u):(r||n)&&S.named(b,t)):(S.require(),i?S.var(b||u).wildcardInterop():(r||n)&&d?r?(b="default"!==b?b:u,S.var(b).read(t),S.defaultInterop()):S.var(u).read(t):r?S.var(b).defaultInterop().prop(t):n&&S.var(b).prop(t));else if("compiled"===p)E?(S.import(),i?S.default(b||u):(r||n)&&S.default(u).read(b)):x?(S.import(),i?S.namespace(b||u):(r||n)&&S.named(b,t)):(S.require(),i?S.var(b||u):(r||n)&&(d?S.var(u).read(b):S.prop(t).var(b)));else{if("uncompiled"!==p)throw new Error(`Unknown importedInterop "${p}".`);if(r&&d)throw new Error("No live reference for commonjs default");E?(S.import(),i?S.default(b||u):r?S.default(b):n&&S.default(u).read(b)):x?(S.import(),i?S.default(b||u):r?S.default(b):n&&S.named(b,t)):(S.require(),i?S.var(b||u):r?S.var(b):n&&(d?S.var(u).read(b):S.var(b).prop(t)))}}const{statements:T,resultName:A}=S.done();return this._insertStatements(T,y,g),(r||n)&&h&&"Identifier"!==A.type?l([o(0),A]):A}_insertStatements(e,t="before",r=3){const n=this._programPath.get("body");if("after"===t){for(let i=n.length-1;i>=0;i--)if(n[i].isImportDeclaration())return void n[i].insertAfter(e)}else{e.forEach((e=>{e._blockHoist=r}));const t=n.find((e=>{const t=e.node._blockHoist;return Number.isFinite(t)&&t<4}));if(t)return void t.insertBefore(e)}this._programPath.unshiftContainer("body",e)}}},80203:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImportInjector",{enumerable:!0,get:function(){return n.default}}),t.addDefault=function(e,t,r){return new n.default(e).addDefault(t,r)},t.addNamed=function(e,t,r,i){return new n.default(e).addNamed(t,r,i)},t.addNamespace=function(e,t,r){return new n.default(e).addNamespace(t,r)},t.addSideEffect=function(e,t,r){return new n.default(e).addSideEffect(t,r)},Object.defineProperty(t,"isModule",{enumerable:!0,get:function(){return i.default}});var n=r(58694),i=r(10821)},10821:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const{sourceType:t}=e.node;if("module"!==t&&"script"!==t)throw e.buildCodeFrameError(`Unknown sourceType "${t}", cannot transform.`);return"module"===e.node.sourceType}},76294:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;{const e=r;t.default=r=function(t,r){var n,i,s,a;return e(t,{moduleId:null!=(n=r.moduleId)?n:t.moduleId,moduleIds:null!=(i=r.moduleIds)?i:t.moduleIds,getModuleId:null!=(s=r.getModuleId)?s:t.getModuleId,moduleRoot:null!=(a=r.moduleRoot)?a:t.moduleRoot})}}function r(e,t){const{filename:r,filenameRelative:n=r,sourceRoot:i=t.moduleRoot}=e,{moduleId:s,moduleIds:a=!!s,getModuleId:o,moduleRoot:l=i}=t;if(!a)return null;if(null!=s&&!o)return s;let u=null!=l?l+"/":"";if(n){const e=null!=i?new RegExp("^"+i+"/?"):"";u+=n.replace(e,"").replace(/\.(\w*?)$/,"")}return u=u.replace(/\\/g,"/"),o&&o(u)||u}},12454:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildNamespaceInitStatements=function(e,t,r=!1){const n=[];let i=g(t.name);t.lazy&&(i=f(i,[]));for(const a of t.importsNamespace)a!==t.name&&n.push(s.default.statement`var NAME = SOURCE;`({NAME:a,SOURCE:d(i)}));r&&n.push(...P(e,t,!0));for(const a of t.reexportNamespace)n.push((t.lazy?s.default.statement`
            Object.defineProperty(EXPORTS, "NAME", {
              enumerable: true,
              get: function() {
                return NAMESPACE;
              }
            });
          `:s.default.statement`EXPORTS.NAME = NAMESPACE;`)({EXPORTS:e.exportName,NAME:a,NAMESPACE:d(i)}));if(t.reexportAll){const a=function(e,t,r){return(r?s.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          EXPORTS[key] = NAMESPACE[key];
        });
      `:s.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          Object.defineProperty(EXPORTS, key, {
            enumerable: true,
            get: function() {
              return NAMESPACE[key];
            },
          });
        });
    `)({NAMESPACE:t,EXPORTS:e.exportName,VERIFY_NAME_LIST:e.exportNameListName?s.default`
            if (Object.prototype.hasOwnProperty.call(EXPORTS_LIST, key)) return;
          `({EXPORTS_LIST:e.exportNameListName}):null})}(e,d(i),r);a.loc=t.reexportAll.loc,n.push(a)}return n},t.ensureStatementsHoisted=function(e){e.forEach((e=>{e._blockHoist=3}))},Object.defineProperty(t,"getModuleName",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"hasExports",{enumerable:!0,get:function(){return u.hasExports}}),Object.defineProperty(t,"isModule",{enumerable:!0,get:function(){return a.isModule}}),Object.defineProperty(t,"isSideEffectImport",{enumerable:!0,get:function(){return u.isSideEffectImport}}),t.rewriteModuleStatementsAndPrepareHeader=function(e,{loose:t,exportName:r,strict:i,allowTopLevelThis:c,strictMode:p,noInterop:f,importInterop:d=(f?"none":"babel"),lazy:y,esNamespaceOnly:b,filename:v,constantReexports:E=t,enumerableModuleMeta:A=t,noIncompleteNsImportDetection:D}){(0,u.validateImportInteropOption)(d),n((0,a.isModule)(e),"Cannot process module statements in a script"),e.node.sourceType="script";const w=(0,u.default)(e,r,{importInterop:d,initializeReexports:E,lazy:y,esNamespaceOnly:b,filename:v});c||(0,o.default)(e);if((0,l.default)(e,w),!1!==p){const t=e.node.directives.some((e=>"use strict"===e.value.value));t||e.unshiftContainer("directives",h(m("use strict")))}const O=[];(0,u.hasExports)(w)&&!i&&O.push(function(e,t=!1){return(t?s.default.statement`
        EXPORTS.__esModule = true;
      `:s.default.statement`
        Object.defineProperty(EXPORTS, "__esModule", {
          value: true,
        });
      `)({EXPORTS:e.exportName})}(w,A));const F=function(e,t){const r=Object.create(null);for(const s of t.local.values())for(const e of s.names)r[e]=!0;let n=!1;for(const s of t.source.values()){for(const e of s.reexports.keys())r[e]=!0;for(const e of s.reexportNamespace)r[e]=!0;n=n||!!s.reexportAll}if(!n||0===Object.keys(r).length)return null;const i=e.scope.generateUidIdentifier("exportNames");return delete r.default,{name:i.name,statement:S("var",[T(i,x(r))])}}(e,w);F&&(w.exportNameListName=F.name,O.push(F.statement));return O.push(...function(e,t,r=!1,n=!1){const i=[];for(const[a,o]of t.local)if("import"===o.kind);else if("hoisted"===o.kind)i.push([o.names[0],C(t,o.names,g(a))]);else if(!n)for(const e of o.names)i.push([e,null]);for(const a of t.source.values()){if(!r){const e=P(t,a,!1),r=[...a.reexports.keys()];for(let t=0;t<e.length;t++)i.push([r[t],e[t]])}if(!n)for(const e of a.reexportNamespace)i.push([e,null])}i.sort((([e],[t])=>e<t?-1:t<e?1:0));const s=[];if(n)for(const[,a]of i)s.push(a);else{const r=100;for(let n=0;n<i.length;n+=r){let a=[];for(let o=0;o<r&&n+o<i.length;o++){const[r,l]=i[n+o];null!==l?(a.length>0&&(s.push(C(t,a,e.scope.buildUndefinedNode())),a=[]),s.push(l)):a.push(r)}a.length>0&&s.push(C(t,a,e.scope.buildUndefinedNode()))}}return s}(e,w,E,D)),{meta:w,headers:O}},Object.defineProperty(t,"rewriteThis",{enumerable:!0,get:function(){return o.default}}),t.wrapInterop=function(e,t,r){if("none"===r)return null;if("node-namespace"===r)return f(e.hub.addHelper("interopRequireWildcard"),[t,p(!0)]);if("node-default"===r)return null;let n;if("default"===r)n="interopRequireDefault";else{if("namespace"!==r)throw new Error(`Unknown interop: ${r}`);n="interopRequireWildcard"}return f(e.hub.addHelper(n),[t])};var n=r(69282),i=r(38218),s=r(94847),a=r(80203),o=r(40333),l=r(77500),u=r(56368),c=r(76294);const{booleanLiteral:p,callExpression:f,cloneNode:d,directive:h,directiveLiteral:m,expressionStatement:y,identifier:g,isIdentifier:b,memberExpression:v,stringLiteral:E,valueToNode:x,variableDeclaration:S,variableDeclarator:T}=i;const A={constant:s.default.statement`EXPORTS.EXPORT_NAME = NAMESPACE_IMPORT;`,constantComputed:s.default.statement`EXPORTS["EXPORT_NAME"] = NAMESPACE_IMPORT;`,spec:s.default.statement`
    Object.defineProperty(EXPORTS, "EXPORT_NAME", {
      enumerable: true,
      get: function() {
        return NAMESPACE_IMPORT;
      },
    });
    `},P=(e,t,r)=>{const n=t.lazy?f(g(t.name),[]):g(t.name),{stringSpecifiers:i}=e;return Array.from(t.reexports,(([s,a])=>{let o=d(n);"default"===a&&"node-default"===t.interop||(o=i.has(a)?v(o,E(a),!0):v(o,g(a)));const l={EXPORTS:e.exportName,EXPORT_NAME:s,NAMESPACE_IMPORT:o};return r||b(o)?i.has(s)?A.constantComputed(l):A.constant(l):A.spec(l)}))};const D={computed:s.default.expression`EXPORTS["NAME"] = VALUE`,default:s.default.expression`EXPORTS.NAME = VALUE`};function C(e,t,r){const{stringSpecifiers:n,exportName:i}=e;return y(t.reduce(((e,t)=>{const r={EXPORTS:i,NAME:t,VALUE:e};return n.has(t)?D.computed(r):D.default(r)}),r))}},56368:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,{importInterop:r,initializeReexports:i=!1,lazy:o=!1,esNamespaceOnly:p=!1,filename:f}){t||(t=e.scope.generateUidIdentifier("exports").name);const d=new Set;!function(e){e.get("body").forEach((e=>{e.isExportDefaultDeclaration()&&(0,s.default)(e)}))}(e);const{local:h,source:m,hasExports:y}=function(e,{lazy:t,initializeReexports:r},i){const s=function(e,t,r){const n=new Map;e.get("body").forEach((e=>{let r;if(e.isImportDeclaration())r="import";else{if(e.isExportDefaultDeclaration()&&(e=e.get("declaration")),e.isExportNamedDeclaration())if(e.node.declaration)e=e.get("declaration");else if(t&&e.node.source&&e.get("source").isStringLiteral())return void e.get("specifiers").forEach((e=>{c(e),n.set(e.get("local").node.name,"block")}));if(e.isFunctionDeclaration())r="hoisted";else if(e.isClassDeclaration())r="block";else if(e.isVariableDeclaration({kind:"var"}))r="var";else{if(!e.isVariableDeclaration())return;r="block"}}Object.keys(e.getOuterBindingIdentifiers()).forEach((e=>{n.set(e,r)}))}));const i=new Map,s=e=>{const t=e.node.name;let r=i.get(t);if(!r){const s=n.get(t);if(void 0===s)throw e.buildCodeFrameError(`Exporting local "${t}", which is not declared.`);r={names:[],kind:s},i.set(t,r)}return r};return e.get("body").forEach((e=>{if(!e.isExportNamedDeclaration()||!t&&e.node.source){if(e.isExportDefaultDeclaration()){const t=e.get("declaration");if(!t.isFunctionDeclaration()&&!t.isClassDeclaration())throw t.buildCodeFrameError("Unexpected default expression export.");s(t.get("id")).names.push("default")}}else if(e.node.declaration){const t=e.get("declaration"),r=t.getOuterBindingIdentifierPaths();Object.keys(r).forEach((e=>{if("__esModule"===e)throw t.buildCodeFrameError('Illegal export "__esModule".');s(r[e]).names.push(e)}))}else e.get("specifiers").forEach((e=>{const t=e.get("local"),n=e.get("exported"),i=s(t),a=u(n,r);if("__esModule"===a)throw n.buildCodeFrameError('Illegal export "__esModule".');i.names.push(a)}))})),i}(e,r,i),o=new Map,l=t=>{const r=t.value;let i=o.get(r);return i||(i={name:e.scope.generateUidIdentifier((0,n.basename)(r,(0,n.extname)(r))).name,interop:"none",loc:null,imports:new Map,importsNamespace:new Set,reexports:new Map,reexportNamespace:new Set,reexportAll:null,lazy:!1,source:r},o.set(r,i)),i};let p=!1;e.get("body").forEach((e=>{if(e.isImportDeclaration()){const t=l(e.node.source);t.loc||(t.loc=e.node.loc),e.get("specifiers").forEach((e=>{if(e.isImportDefaultSpecifier()){const r=e.get("local").node.name;t.imports.set(r,"default");const n=s.get(r);n&&(s.delete(r),n.names.forEach((e=>{t.reexports.set(e,"default")})))}else if(e.isImportNamespaceSpecifier()){const r=e.get("local").node.name;t.importsNamespace.add(r);const n=s.get(r);n&&(s.delete(r),n.names.forEach((e=>{t.reexportNamespace.add(e)})))}else if(e.isImportSpecifier()){const r=u(e.get("imported"),i),n=e.get("local").node.name;t.imports.set(n,r);const a=s.get(n);a&&(s.delete(n),a.names.forEach((e=>{t.reexports.set(e,r)})))}}))}else if(e.isExportAllDeclaration()){p=!0;const t=l(e.node.source);t.loc||(t.loc=e.node.loc),t.reexportAll={loc:e.node.loc}}else if(e.isExportNamedDeclaration()&&e.node.source){p=!0;const t=l(e.node.source);t.loc||(t.loc=e.node.loc),e.get("specifiers").forEach((e=>{c(e);const r=u(e.get("local"),i),n=u(e.get("exported"),i);if(t.reexports.set(n,r),"__esModule"===n)throw e.get("exported").buildCodeFrameError('Illegal export "__esModule".')}))}else(e.isExportNamedDeclaration()||e.isExportDefaultDeclaration())&&(p=!0)}));for(const n of o.values()){let e=!1,t=!1;n.importsNamespace.size>0&&(e=!0,t=!0),n.reexportAll&&(t=!0);for(const r of n.imports.values())"default"===r?e=!0:t=!0;for(const r of n.reexports.values())"default"===r?e=!0:t=!0;e&&t?n.interop="namespace":e&&(n.interop="default")}for(const[n,u]of o)if(!1!==t&&!a(u)&&!u.reexportAll)if(!0===t)u.lazy=!/\./.test(n);else if(Array.isArray(t))u.lazy=-1!==t.indexOf(n);else{if("function"!=typeof t)throw new Error(".lazy must be a boolean, string array, or function");u.lazy=t(n)}return{hasExports:p,local:s,source:o}}(e,{initializeReexports:i,lazy:o},d);!function(e){e.get("body").forEach((e=>{if(e.isImportDeclaration())e.remove();else if(e.isExportNamedDeclaration())e.node.declaration?(e.node.declaration._blockHoist=e.node._blockHoist,e.replaceWith(e.node.declaration)):e.remove();else if(e.isExportDefaultDeclaration()){const t=e.get("declaration");if(!t.isFunctionDeclaration()&&!t.isClassDeclaration())throw t.buildCodeFrameError("Unexpected default expression export.");t._blockHoist=e.node._blockHoist,e.replaceWith(t)}else e.isExportAllDeclaration()&&e.remove()}))}(e);for(const[,n]of m){n.importsNamespace.size>0&&(n.name=n.importsNamespace.values().next().value);const e=l(r,n.source,f);"none"===e?n.interop="none":"node"===e&&"namespace"===n.interop?n.interop="node-namespace":"node"===e&&"default"===n.interop?n.interop="node-default":p&&"namespace"===n.interop&&(n.interop="default")}return{exportName:t,exportNameListName:null,hasExports:y,local:h,source:m,stringSpecifiers:d}},t.hasExports=function(e){return e.hasExports},t.isSideEffectImport=a,t.validateImportInteropOption=o;var n=r(26470),i=r(40720),s=r(34170);function a(e){return 0===e.imports.size&&0===e.importsNamespace.size&&0===e.reexports.size&&0===e.reexportNamespace.size&&!e.reexportAll}function o(e){if("function"!=typeof e&&"none"!==e&&"babel"!==e&&"node"!==e)throw new Error(`.importInterop must be one of "none", "babel", "node", or a function returning one of those values (received ${e}).`);return e}function l(e,t,r){return"function"==typeof e?o(e(t,r)):e}function u(e,t){if(e.isIdentifier())return e.node.name;if(e.isStringLiteral()){const r=e.node.value;return(0,i.isIdentifierName)(r)||t.add(r),r}throw new Error(`Expected export specifier to be either Identifier or StringLiteral, got ${e.node.type}`)}function c(e){if(!e.isExportSpecifier())throw e.isExportNamespaceSpecifier()?e.buildCodeFrameError("Export namespace should be first transformed by `@babel/plugin-proposal-export-namespace-from`."):e.buildCodeFrameError("Unexpected export specifier type")}},77500:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const r=new Map,n=new Map,i=t=>{e.requeue(t)};for(const[a,l]of t.source){for(const[e,t]of l.imports)r.set(e,[a,t,null]);for(const e of l.importsNamespace)r.set(e,[a,null,e])}for(const[a,l]of t.local){let e=n.get(a);e||(e=[],n.set(a,e)),e.push(...l.names)}const s={metadata:t,requeueInParent:i,scope:e.scope,exported:n};e.traverse(T,s),(0,a.default)(e,new Set([...Array.from(r.keys()),...Array.from(n.keys())]),!1);const o={seen:new WeakSet,metadata:t,requeueInParent:i,scope:e.scope,imported:r,exported:n,buildImportReference:([e,r,n],i)=>{const s=t.source.get(e);if(n)return s.lazy&&(i=l(i,[])),i;let a=f(s.name);if(s.lazy&&(a=l(a,[])),"default"===r&&"node-default"===s.interop)return a;const o=t.stringSpecifiers.has(r);return g(a,o?E(r):f(r),o)}};e.traverse(D,o)};var n=r(69282),i=r(38218),s=r(94847),a=r(79196);const{assignmentExpression:o,callExpression:l,cloneNode:u,expressionStatement:c,getOuterBindingIdentifiers:p,identifier:f,isMemberExpression:d,isVariableDeclaration:h,jsxIdentifier:m,jsxMemberExpression:y,memberExpression:g,numericLiteral:b,sequenceExpression:v,stringLiteral:E,variableDeclaration:x,variableDeclarator:S}=i;const T={Scope(e){e.skip()},ClassDeclaration(e){const{requeueInParent:t,exported:r,metadata:n}=this,{id:i}=e.node;if(!i)throw new Error("Expected class to have a name");const s=i.name,a=r.get(s)||[];if(a.length>0){const r=c(A(n,a,f(s)));r._blockHoist=e.node._blockHoist,t(e.insertAfter(r)[0])}},VariableDeclaration(e){const{requeueInParent:t,exported:r,metadata:n}=this;Object.keys(e.getOuterBindingIdentifiers()).forEach((i=>{const s=r.get(i)||[];if(s.length>0){const r=c(A(n,s,f(i)));r._blockHoist=e.node._blockHoist,t(e.insertAfter(r)[0])}}))}},A=(e,t,r)=>(t||[]).reduce(((t,r)=>{const{stringSpecifiers:n}=e,i=n.has(r);return o("=",g(f(e.exportName),i?E(r):f(r),i),t)}),r),P=e=>s.default.expression.ast`
    (function() {
      throw new Error('"' + '${e}' + '" is read-only.');
    })()
  `,D={ReferencedIdentifier(e){const{seen:t,buildImportReference:r,scope:n,imported:i,requeueInParent:s}=this;if(t.has(e.node))return;t.add(e.node);const a=e.node.name,o=i.get(a);if(o){if(function(e){do{switch(e.parent.type){case"TSTypeAnnotation":case"TSTypeAliasDeclaration":case"TSTypeReference":case"TypeAnnotation":case"TypeAlias":return!0;case"ExportSpecifier":return"type"===e.parentPath.parent.exportKind;default:if(e.parentPath.isStatement()||e.parentPath.isExpression())return!1}}while(e=e.parentPath)}(e))throw e.buildCodeFrameError(`Cannot transform the imported binding "${a}" since it's also used in a type annotation. Please strip type annotations using @babel/preset-typescript or @babel/preset-flow.`);const t=e.scope.getBinding(a);if(n.getBinding(a)!==t)return;const i=r(o,e.node);if(i.loc=e.node.loc,(e.parentPath.isCallExpression({callee:e.node})||e.parentPath.isOptionalCallExpression({callee:e.node})||e.parentPath.isTaggedTemplateExpression({tag:e.node}))&&d(i))e.replaceWith(v([b(0),i]));else if(e.isJSXIdentifier()&&d(i)){const{object:t,property:r}=i;e.replaceWith(y(m(t.name),m(r.name)))}else e.replaceWith(i);s(e),e.skip()}},UpdateExpression(e){const{scope:t,seen:r,imported:n,exported:i,requeueInParent:s,buildImportReference:a}=this;if(r.has(e.node))return;r.add(e.node);const l=e.get("argument");if(l.isMemberExpression())return;const c=e.node;if(l.isIdentifier()){const r=l.node.name;if(t.getBinding(r)!==e.scope.getBinding(r))return;const s=i.get(r),p=n.get(r);if((null==s?void 0:s.length)>0||p)if(p)e.replaceWith(o(c.operator[0]+"=",a(p,l.node),P(r)));else if(c.prefix)e.replaceWith(A(this.metadata,s,u(c)));else{const n=t.generateDeclaredUidIdentifier(r);e.replaceWith(v([o("=",u(n),u(c)),A(this.metadata,s,f(r)),u(n)]))}}s(e),e.skip()},AssignmentExpression:{exit(e){const{scope:t,seen:r,imported:i,exported:s,requeueInParent:a,buildImportReference:o}=this;if(r.has(e.node))return;r.add(e.node);const l=e.get("left");if(!l.isMemberExpression())if(l.isIdentifier()){const r=l.node.name;if(t.getBinding(r)!==e.scope.getBinding(r))return;const u=s.get(r),c=i.get(r);if((null==u?void 0:u.length)>0||c){n("="===e.node.operator,"Path was not simplified");const t=e.node;c&&(t.left=o(c,t.left),t.right=v([t.right,P(r)])),e.replaceWith(A(this.metadata,u,t)),a(e)}}else{const r=l.getOuterBindingIdentifiers(),n=Object.keys(r).filter((r=>t.getBinding(r)===e.scope.getBinding(r))),o=n.find((e=>i.has(e)));o&&(e.node.right=v([e.node.right,P(o)]));const u=[];if(n.forEach((e=>{const t=s.get(e)||[];t.length>0&&u.push(A(this.metadata,t,f(e)))})),u.length>0){let t=v(u);e.parentPath.isExpressionStatement()&&(t=c(t),t._blockHoist=e.parentPath.node._blockHoist);a(e.insertAfter(t)[0])}}}},"ForOfStatement|ForInStatement"(e){const{scope:t,node:r}=e,{left:n}=r,{exported:i,imported:s,scope:a}=this;if(!h(n)){let r,l=!1;const f=e.get("body").scope;for(const e of Object.keys(p(n)))a.getBinding(e)===t.getBinding(e)&&(i.has(e)&&(l=!0,f.hasOwnBinding(e)&&f.rename(e)),s.has(e)&&!r&&(r=e));if(!l&&!r)return;e.ensureBlock();const d=e.get("body"),h=t.generateUidIdentifierBasedOnNode(n);e.get("left").replaceWith(x("let",[S(u(h))])),t.registerDeclaration(e.get("left")),l&&d.unshiftContainer("body",c(o("=",n,h))),r&&d.unshiftContainer("body",c(P(r)))}}}},40333:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,i.default)(e.node,Object.assign({},l,{noScope:!0}))};var n=r(31692),i=r(49838),s=r(38218);const{numericLiteral:a,unaryExpression:o}=s;const l=i.default.visitors.merge([n.default,{ThisExpression(e){e.replaceWith(o("void",a(0),!0))}}])},4982:(e,t)=>{"use strict";function r(e){return(t,r,n)=>{var a;let o;for(const e of Object.keys(i)){var l;t[e]||(o=null!=(l=o)?l:s(t),o[e]=i[e](o))}return e(null!=(a=o)?a:t,r||{},n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.declare=r,t.declarePreset=void 0;const n=r;t.declarePreset=n;const i={assertVersion:e=>t=>{!function(e,t){if("number"==typeof e){if(!Number.isInteger(e))throw new Error("Expected string or integer value.");e=`^${e}.0.0-0`}if("string"!=typeof e)throw new Error("Expected string or integer value.");const r=Error.stackTraceLimit;"number"==typeof r&&r<25&&(Error.stackTraceLimit=25);let n;n="7."===t.slice(0,2)?new Error(`Requires Babel "^7.0.0-beta.41", but was loaded with "${t}". You'll need to update your @babel/core version.`):new Error(`Requires Babel "${e}", but was loaded with "${t}". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel.`);"number"==typeof r&&(Error.stackTraceLimit=r);throw Object.assign(n,{code:"BABEL_VERSION_UNSUPPORTED",version:t,range:e})}(t,e.version)},targets:()=>()=>({}),assumption:()=>()=>{}};function s(e){let t=null;return"string"==typeof e.version&&/^7\./.test(e.version)&&(t=Object.getPrototypeOf(e),!t||a(t,"version")&&a(t,"transform")&&a(t,"template")&&a(t,"types")||(t=null)),Object.assign({},t,e)}function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},79196:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r=!0){e.traverse(d,{scope:e.scope,bindingNames:t,seen:new WeakSet,includeUpdateExpression:r})};var n=r(38218);const{LOGICAL_OPERATORS:i,assignmentExpression:s,binaryExpression:a,cloneNode:o,identifier:l,logicalExpression:u,numericLiteral:c,sequenceExpression:p,unaryExpression:f}=n;const d={UpdateExpression:{exit(e){const{scope:t,bindingNames:r,includeUpdateExpression:n}=this;if(!n)return;const i=e.get("argument");if(!i.isIdentifier())return;const u=i.node.name;if(r.has(u)&&t.getBinding(u)===e.scope.getBinding(u))if(e.parentPath.isExpressionStatement()&&!e.isCompletionRecord()){const t="++"==e.node.operator?"+=":"-=";e.replaceWith(s(t,i.node,c(1)))}else if(e.node.prefix)e.replaceWith(s("=",l(u),a(e.node.operator[0],f("+",i.node),c(1))));else{const t=e.scope.generateUidIdentifierBasedOnNode(i.node,"old"),r=t.name;e.scope.push({id:t});const n=a(e.node.operator[0],l(r),c(1));e.replaceWith(p([s("=",l(r),f("+",i.node)),s("=",o(i.node),n),l(r)]))}}},AssignmentExpression:{exit(e){const{scope:t,seen:r,bindingNames:n}=this;if("="===e.node.operator)return;if(r.has(e.node))return;r.add(e.node);const l=e.get("left");if(!l.isIdentifier())return;const c=l.node.name;if(!n.has(c))return;if(t.getBinding(c)!==e.scope.getBinding(c))return;const p=e.node.operator.slice(0,-1);i.includes(p)?e.replaceWith(u(p,e.node.left,s("=",o(e.node.left),e.node.right))):(e.node.right=a(p,o(e.node.left),e.node.right),e.node.operator="=")}}}},34170:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e.isExportDeclaration())throw new Error("Only export declarations can be split.");const t=e.isExportDefaultDeclaration(),r=e.get("declaration"),n=r.isClassDeclaration();if(t){const t=r.isFunctionDeclaration()||n,c=r.isScope()?r.scope.parent:r.scope;let p=r.node.id,f=!1;p||(f=!0,p=c.generateUidIdentifier("default"),(t||r.isFunctionExpression()||r.isClassExpression())&&(r.node.id=i(p)));const d=t?r:l("var",[u(i(p),r.node)]),h=s(null,[a(i(p),o("default"))]);return e.insertAfter(h),e.replaceWith(d),f&&c.registerDeclaration(e),e}if(e.get("specifiers").length>0)throw new Error("It doesn't make sense to split exported specifiers.");const c=r.getOuterBindingIdentifiers(),p=Object.keys(c).map((e=>a(o(e),o(e)))),f=s(null,p);return e.insertAfter(f),e.replaceWith(r.node),e};var n=r(38218);const{cloneNode:i,exportNamedDeclaration:s,exportSpecifier:a,identifier:o,variableDeclaration:l,variableDeclarator:u}=n},33306:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isIdentifierChar=c,t.isIdentifierName=function(e){let t=!0;for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);if(55296==(64512&n)&&r+1<e.length){const t=e.charCodeAt(++r);56320==(64512&t)&&(n=65536+((1023&n)<<10)+(1023&t))}if(t){if(t=!1,!u(n))return!1}else if(!c(n))return!1}return!t},t.isIdentifierStart=u;let r="\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u0870-\u0887\u0889-\u088e\u08a0-\u08c9\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c5d\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cdd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u1711\u171f-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4c\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7ca\ua7d0\ua7d1\ua7d3\ua7d5-\ua7d9\ua7f2-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc",n="\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u0898-\u089f\u08ca-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3c\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u180f-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf-\u1ace\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";const i=new RegExp("["+r+"]"),s=new RegExp("["+r+n+"]");r=n=null;const a=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,13,10,2,14,2,6,2,1,2,10,2,14,2,6,2,1,68,310,10,21,11,7,25,5,2,41,2,8,70,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,43,17,47,20,28,22,13,52,58,1,3,0,14,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,38,6,186,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,19,72,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2637,96,16,1070,4050,582,8634,568,8,30,18,78,18,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8936,3,2,6,2,1,2,290,46,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,1845,30,482,44,11,6,17,0,322,29,19,43,1269,6,2,3,2,1,2,14,2,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42719,33,4152,8,221,3,5761,15,7472,3104,541,1507,4938],o=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,50,3,123,2,54,14,32,10,3,1,11,3,46,10,8,0,46,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,87,9,39,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,4706,45,3,22,543,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,357,0,62,13,1495,6,110,6,6,9,4759,9,787719,239];function l(e,t){let r=65536;for(let n=0,i=t.length;n<i;n+=2){if(r+=t[n],r>e)return!1;if(r+=t[n+1],r>=e)return!0}return!1}function u(e){return e<65?36===e:e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&i.test(String.fromCharCode(e)):l(e,a)))}function c(e){return e<48?36===e:e<58||!(e<65)&&(e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&s.test(String.fromCharCode(e)):l(e,a)||l(e,o))))}},40720:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isIdentifierChar",{enumerable:!0,get:function(){return n.isIdentifierChar}}),Object.defineProperty(t,"isIdentifierName",{enumerable:!0,get:function(){return n.isIdentifierName}}),Object.defineProperty(t,"isIdentifierStart",{enumerable:!0,get:function(){return n.isIdentifierStart}}),Object.defineProperty(t,"isKeyword",{enumerable:!0,get:function(){return i.isKeyword}}),Object.defineProperty(t,"isReservedWord",{enumerable:!0,get:function(){return i.isReservedWord}}),Object.defineProperty(t,"isStrictBindOnlyReservedWord",{enumerable:!0,get:function(){return i.isStrictBindOnlyReservedWord}}),Object.defineProperty(t,"isStrictBindReservedWord",{enumerable:!0,get:function(){return i.isStrictBindReservedWord}}),Object.defineProperty(t,"isStrictReservedWord",{enumerable:!0,get:function(){return i.isStrictReservedWord}});var n=r(33306),i=r(12887)},12887:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isKeyword=function(e){return i.has(e)},t.isReservedWord=o,t.isStrictBindOnlyReservedWord=u,t.isStrictBindReservedWord=function(e,t){return l(e,t)||u(e)},t.isStrictReservedWord=l;const r=["implements","interface","let","package","private","protected","public","static","yield"],n=["eval","arguments"],i=new Set(["break","case","catch","continue","debugger","default","do","else","finally","for","function","if","return","switch","throw","try","var","const","while","with","new","this","super","class","extends","export","import","null","true","false","in","instanceof","typeof","void","delete"]),s=new Set(r),a=new Set(n);function o(e,t){return t&&"await"===e||"enum"===e}function l(e,t){return o(e,t)||s.has(e)}function u(e){return a.has(e)}},14401:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.findSuggestion=function(e,t){const n=t.map((t=>function(e,t){let n,i,s=[],a=[];const o=e.length,l=t.length;if(!o)return l;if(!l)return o;for(i=0;i<=l;i++)s[i]=i;for(n=1;n<=o;n++){for(a=[n],i=1;i<=l;i++)a[i]=e[n-1]===t[i-1]?s[i-1]:r(s[i-1],s[i],a[i-1])+1;s=a}return a[l]}(t,e)));return t[n.indexOf(r(...n))]};const{min:r}=Math},54346:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"OptionValidator",{enumerable:!0,get:function(){return n.OptionValidator}}),Object.defineProperty(t,"findSuggestion",{enumerable:!0,get:function(){return i.findSuggestion}});var n=r(86834),i=r(14401)},86834:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OptionValidator=void 0;var n=r(14401);t.OptionValidator=class{constructor(e){this.descriptor=e}validateTopLevelOptions(e,t){const r=Object.keys(t);for(const i of Object.keys(e))if(!r.includes(i))throw new Error(this.formatMessage(`'${i}' is not a valid top-level option.\n- Did you mean '${(0,n.findSuggestion)(i,r)}'?`))}validateBooleanOption(e,t,r){return void 0===t?r:(this.invariant("boolean"==typeof t,`'${e}' option must be a boolean.`),t)}validateStringOption(e,t,r){return void 0===t?r:(this.invariant("string"==typeof t,`'${e}' option must be a string.`),t)}invariant(e,t){if(!e)throw new Error(this.formatMessage(t))}formatMessage(e){return`${this.descriptor}: ${e}`}}},93281:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(94847);function i(e,t){return Object.freeze({minVersion:e,ast:()=>n.default.program.ast(t,{preserveComments:!0})})}var s=Object.freeze({applyDecs:i("7.17.8",'function createMetadataMethodsForProperty(metadataMap,kind,property,decoratorFinishedRef){return{getMetadata:function(key){assertNotFinished(decoratorFinishedRef,"getMetadata"),assertMetadataKey(key);var metadataForKey=metadataMap[key];if(void 0!==metadataForKey)if(1===kind){var pub=metadataForKey.public;if(void 0!==pub)return pub[property]}else if(2===kind){var priv=metadataForKey.private;if(void 0!==priv)return priv.get(property)}else if(Object.hasOwnProperty.call(metadataForKey,"constructor"))return metadataForKey.constructor},setMetadata:function(key,value){assertNotFinished(decoratorFinishedRef,"setMetadata"),assertMetadataKey(key);var metadataForKey=metadataMap[key];if(void 0===metadataForKey&&(metadataForKey=metadataMap[key]={}),1===kind){var pub=metadataForKey.public;void 0===pub&&(pub=metadataForKey.public={}),pub[property]=value}else if(2===kind){var priv=metadataForKey.priv;void 0===priv&&(priv=metadataForKey.private=new Map),priv.set(property,value)}else metadataForKey.constructor=value}}}function convertMetadataMapToFinal(obj,metadataMap){var parentMetadataMap=obj[Symbol.metadata||Symbol.for("Symbol.metadata")],metadataKeys=Object.getOwnPropertySymbols(metadataMap);if(0!==metadataKeys.length){for(var i=0;i<metadataKeys.length;i++){var key=metadataKeys[i],metaForKey=metadataMap[key],parentMetaForKey=parentMetadataMap?parentMetadataMap[key]:null,pub=metaForKey.public,parentPub=parentMetaForKey?parentMetaForKey.public:null;pub&&parentPub&&Object.setPrototypeOf(pub,parentPub);var priv=metaForKey.private;if(priv){var privArr=Array.from(priv.values()),parentPriv=parentMetaForKey?parentMetaForKey.private:null;parentPriv&&(privArr=privArr.concat(parentPriv)),metaForKey.private=privArr}parentMetaForKey&&Object.setPrototypeOf(metaForKey,parentMetaForKey)}parentMetadataMap&&Object.setPrototypeOf(metadataMap,parentMetadataMap),obj[Symbol.metadata||Symbol.for("Symbol.metadata")]=metadataMap}}function createAddInitializerMethod(initializers,decoratorFinishedRef){return function(initializer){assertNotFinished(decoratorFinishedRef,"addInitializer"),assertCallable(initializer,"An initializer"),initializers.push(initializer)}}function memberDec(dec,name,desc,metadataMap,initializers,kind,isStatic,isPrivate,value){var kindStr;switch(kind){case 1:kindStr="accessor";break;case 2:kindStr="method";break;case 3:kindStr="getter";break;case 4:kindStr="setter";break;default:kindStr="field"}var metadataKind,metadataName,ctx={kind:kindStr,name:isPrivate?"#"+name:name,isStatic:isStatic,isPrivate:isPrivate},decoratorFinishedRef={v:!1};if(0!==kind&&(ctx.addInitializer=createAddInitializerMethod(initializers,decoratorFinishedRef)),isPrivate){metadataKind=2,metadataName=Symbol(name);var access={};0===kind?(access.get=desc.get,access.set=desc.set):2===kind?access.get=function(){return desc.value}:(1!==kind&&3!==kind||(access.get=function(){return desc.get.call(this)}),1!==kind&&4!==kind||(access.set=function(v){desc.set.call(this,v)})),ctx.access=access}else metadataKind=1,metadataName=name;try{return dec(value,Object.assign(ctx,createMetadataMethodsForProperty(metadataMap,metadataKind,metadataName,decoratorFinishedRef)))}finally{decoratorFinishedRef.v=!0}}function assertNotFinished(decoratorFinishedRef,fnName){if(decoratorFinishedRef.v)throw new Error("attempted to call "+fnName+" after decoration was finished")}function assertMetadataKey(key){if("symbol"!=typeof key)throw new TypeError("Metadata keys must be symbols, received: "+key)}function assertCallable(fn,hint){if("function"!=typeof fn)throw new TypeError(hint+" must be a function")}function assertValidReturnValue(kind,value){var type=typeof value;if(1===kind){if("object"!==type||null===value)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");void 0!==value.get&&assertCallable(value.get,"accessor.get"),void 0!==value.set&&assertCallable(value.set,"accessor.set"),void 0!==value.init&&assertCallable(value.init,"accessor.init"),void 0!==value.initializer&&assertCallable(value.initializer,"accessor.initializer")}else if("function"!==type){var hint;throw hint=0===kind?"field":10===kind?"class":"method",new TypeError(hint+" decorators must return a function or void 0")}}function getInit(desc){var initializer;return null==(initializer=desc.init)&&(initializer=desc.initializer)&&"undefined"!=typeof console&&console.warn(".initializer has been renamed to .init as of March 2022"),initializer}function applyMemberDec(ret,base,decInfo,name,kind,isStatic,isPrivate,metadataMap,initializers){var desc,initializer,value,newValue,get,set,decs=decInfo[0];if(isPrivate?desc=0===kind||1===kind?{get:decInfo[3],set:decInfo[4]}:3===kind?{get:decInfo[3]}:4===kind?{set:decInfo[3]}:{value:decInfo[3]}:0!==kind&&(desc=Object.getOwnPropertyDescriptor(base,name)),1===kind?value={get:desc.get,set:desc.set}:2===kind?value=desc.value:3===kind?value=desc.get:4===kind&&(value=desc.set),"function"==typeof decs)void 0!==(newValue=memberDec(decs,name,desc,metadataMap,initializers,kind,isStatic,isPrivate,value))&&(assertValidReturnValue(kind,newValue),0===kind?initializer=newValue:1===kind?(initializer=getInit(newValue),get=newValue.get||value.get,set=newValue.set||value.set,value={get:get,set:set}):value=newValue);else for(var i=decs.length-1;i>=0;i--){var newInit;if(void 0!==(newValue=memberDec(decs[i],name,desc,metadataMap,initializers,kind,isStatic,isPrivate,value)))assertValidReturnValue(kind,newValue),0===kind?newInit=newValue:1===kind?(newInit=getInit(newValue),get=newValue.get||value.get,set=newValue.set||value.set,value={get:get,set:set}):value=newValue,void 0!==newInit&&(void 0===initializer?initializer=newInit:"function"==typeof initializer?initializer=[initializer,newInit]:initializer.push(newInit))}if(0===kind||1===kind){if(void 0===initializer)initializer=function(instance,init){return init};else if("function"!=typeof initializer){var ownInitializers=initializer;initializer=function(instance,init){for(var value=init,i=0;i<ownInitializers.length;i++)value=ownInitializers[i].call(instance,value);return value}}else{var originalInitializer=initializer;initializer=function(instance,init){return originalInitializer.call(instance,init)}}ret.push(initializer)}0!==kind&&(1===kind?(desc.get=value.get,desc.set=value.set):2===kind?desc.value=value:3===kind?desc.get=value:4===kind&&(desc.set=value),isPrivate?1===kind?(ret.push((function(instance,args){return value.get.call(instance,args)})),ret.push((function(instance,args){return value.set.call(instance,args)}))):2===kind?ret.push(value):ret.push((function(instance,args){return value.call(instance,args)})):Object.defineProperty(base,name,desc))}function applyMemberDecs(ret,Class,protoMetadataMap,staticMetadataMap,decInfos){for(var protoInitializers,staticInitializers,existingProtoNonFields=new Map,existingStaticNonFields=new Map,i=0;i<decInfos.length;i++){var decInfo=decInfos[i];if(Array.isArray(decInfo)){var base,metadataMap,initializers,kind=decInfo[1],name=decInfo[2],isPrivate=decInfo.length>3,isStatic=kind>=5;if(isStatic?(base=Class,metadataMap=staticMetadataMap,0!==(kind-=5)&&(initializers=staticInitializers=staticInitializers||[])):(base=Class.prototype,metadataMap=protoMetadataMap,0!==kind&&(initializers=protoInitializers=protoInitializers||[])),0!==kind&&!isPrivate){var existingNonFields=isStatic?existingStaticNonFields:existingProtoNonFields,existingKind=existingNonFields.get(name)||0;if(!0===existingKind||3===existingKind&&4!==kind||4===existingKind&&3!==kind)throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+name);!existingKind&&kind>2?existingNonFields.set(name,kind):existingNonFields.set(name,!0)}applyMemberDec(ret,base,decInfo,name,kind,isStatic,isPrivate,metadataMap,initializers)}}pushInitializers(ret,protoInitializers),pushInitializers(ret,staticInitializers)}function pushInitializers(ret,initializers){initializers&&ret.push((function(instance){for(var i=0;i<initializers.length;i++)initializers[i].call(instance);return instance}))}function applyClassDecs(ret,targetClass,metadataMap,classDecs){if(classDecs.length>0){for(var initializers=[],newClass=targetClass,name=targetClass.name,i=classDecs.length-1;i>=0;i--){var decoratorFinishedRef={v:!1};try{var ctx=Object.assign({kind:"class",name:name,addInitializer:createAddInitializerMethod(initializers,decoratorFinishedRef)},createMetadataMethodsForProperty(metadataMap,0,name,decoratorFinishedRef)),nextNewClass=classDecs[i](newClass,ctx)}finally{decoratorFinishedRef.v=!0}void 0!==nextNewClass&&(assertValidReturnValue(10,nextNewClass),newClass=nextNewClass)}ret.push(newClass,(function(){for(var i=0;i<initializers.length;i++)initializers[i].call(newClass)}))}}export default function applyDecs(targetClass,memberDecs,classDecs){var ret=[],staticMetadataMap={},protoMetadataMap={};return applyMemberDecs(ret,targetClass,protoMetadataMap,staticMetadataMap,memberDecs),convertMetadataMapToFinal(targetClass.prototype,protoMetadataMap),applyClassDecs(ret,targetClass,staticMetadataMap,classDecs),convertMetadataMapToFinal(targetClass,staticMetadataMap),ret}'),asyncIterator:i("7.15.9",'export default function _asyncIterator(iterable){var method,async,sync,retry=2;for("undefined"!=typeof Symbol&&(async=Symbol.asyncIterator,sync=Symbol.iterator);retry--;){if(async&&null!=(method=iterable[async]))return method.call(iterable);if(sync&&null!=(method=iterable[sync]))return new AsyncFromSyncIterator(method.call(iterable));async="@@asyncIterator",sync="@@iterator"}throw new TypeError("Object is not async iterable")}function AsyncFromSyncIterator(s){function AsyncFromSyncIteratorContinuation(r){if(Object(r)!==r)return Promise.reject(new TypeError(r+" is not an object."));var done=r.done;return Promise.resolve(r.value).then((function(value){return{value:value,done:done}}))}return AsyncFromSyncIterator=function(s){this.s=s,this.n=s.next},AsyncFromSyncIterator.prototype={s:null,n:null,next:function(){return AsyncFromSyncIteratorContinuation(this.n.apply(this.s,arguments))},return:function(value){var ret=this.s.return;return void 0===ret?Promise.resolve({value:value,done:!0}):AsyncFromSyncIteratorContinuation(ret.apply(this.s,arguments))},throw:function(value){var thr=this.s.return;return void 0===thr?Promise.reject(value):AsyncFromSyncIteratorContinuation(thr.apply(this.s,arguments))}},new AsyncFromSyncIterator(s)}'),jsx:i("7.0.0-beta.0",'var REACT_ELEMENT_TYPE;export default function _createRawReactElement(type,props,key,children){REACT_ELEMENT_TYPE||(REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var defaultProps=type&&type.defaultProps,childrenLength=arguments.length-3;if(props||0===childrenLength||(props={children:void 0}),1===childrenLength)props.children=children;else if(childrenLength>1){for(var childArray=new Array(childrenLength),i=0;i<childrenLength;i++)childArray[i]=arguments[i+3];props.children=childArray}if(props&&defaultProps)for(var propName in defaultProps)void 0===props[propName]&&(props[propName]=defaultProps[propName]);else props||(props=defaultProps||{});return{$$typeof:REACT_ELEMENT_TYPE,type:type,key:void 0===key?null:""+key,ref:null,props:props,_owner:null}}'),objectSpread2:i("7.5.0",'import defineProperty from"defineProperty";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}export default function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}'),regeneratorRuntime:i("7.18.0",'export default function _regeneratorRuntime(){"use strict";\n/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return generator._invoke=function(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}(innerFn,self,context),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;this._invoke=function(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}}function maybeInvokeDelegate(delegate,context){var method=delegate.iterator[context.method];if(undefined===method){if(context.delegate=null,"throw"===context.method){if(delegate.iterator.return&&(context.method="return",context.arg=undefined,maybeInvokeDelegate(delegate,context),"throw"===context.method))return ContinueSentinel;context.method="throw",context.arg=new TypeError("The iterator does not provide a \'throw\' method")}return ContinueSentinel}var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=undefined),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=undefined,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:undefined,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,define(Gp,"constructor",GeneratorFunctionPrototype),define(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(object){var keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=undefined)},stop:function(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=undefined),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc},"next"===this.method&&(this.arg=undefined),ContinueSentinel}},exports}'),typeof:i("7.0.0-beta.0",'export default function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}'),wrapRegExp:i("7.2.6",'import setPrototypeOf from"setPrototypeOf";import inherits from"inherits";export default function _wrapRegExp(){_wrapRegExp=function(re,groups){return new BabelRegExp(re,void 0,groups)};var _super=RegExp.prototype,_groups=new WeakMap;function BabelRegExp(re,flags,groups){var _this=new RegExp(re,flags);return _groups.set(_this,groups||_groups.get(re)),setPrototypeOf(_this,BabelRegExp.prototype)}function buildGroups(result,re){var g=_groups.get(re);return Object.keys(g).reduce((function(groups,name){return groups[name]=result[g[name]],groups}),Object.create(null))}return inherits(BabelRegExp,RegExp),BabelRegExp.prototype.exec=function(str){var result=_super.exec.call(this,str);return result&&(result.groups=buildGroups(result,this)),result},BabelRegExp.prototype[Symbol.replace]=function(str,substitution){if("string"==typeof substitution){var groups=_groups.get(this);return _super[Symbol.replace].call(this,str,substitution.replace(/\\$<([^>]+)>/g,(function(_,name){return"$"+groups[name]})))}if("function"==typeof substitution){var _this=this;return _super[Symbol.replace].call(this,str,(function(){var args=arguments;return"object"!=typeof args[args.length-1]&&(args=[].slice.call(args)).push(buildGroups(args,_this)),substitution.apply(this,args)}))}return _super[Symbol.replace].call(this,str,substitution)},_wrapRegExp.apply(this,arguments)}')});t.default=s},59591:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(94847),i=r(93281);const s=Object.assign({__proto__:null},i.default);var a=s;t.default=a;const o=e=>t=>({minVersion:e,ast:()=>n.default.program.ast(t)});s.AwaitValue=o("7.0.0-beta.0")`
  export default function _AwaitValue(value) {
    this.wrapped = value;
  }
`,s.AsyncGenerator=o("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null,
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg)
        var value = result.value;
        var wrappedAwait = value instanceof AwaitValue;

        Promise.resolve(wrappedAwait ? value.wrapped : value).then(
          function (arg) {
            if (wrappedAwait) {
              resume(key === "return" ? "return" : "next", arg);
              return
            }

            settle(result.done ? "return" : "normal", arg);
          },
          function (err) { resume("throw", err); });
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({ value: value, done: true });
          break;
        case "throw":
          front.reject(value);
          break;
        default:
          front.resolve({ value: value, done: false });
          break;
      }

      front = front.next;
      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    // Hide "return" method if generator return is not supported
    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  AsyncGenerator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; };

  AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };
  AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };
  AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };
`,s.wrapAsyncGenerator=o("7.0.0-beta.0")`
  import AsyncGenerator from "AsyncGenerator";

  export default function _wrapAsyncGenerator(fn) {
    return function () {
      return new AsyncGenerator(fn.apply(this, arguments));
    };
  }
`,s.awaitAsyncGenerator=o("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function _awaitAsyncGenerator(value) {
    return new AwaitValue(value);
  }
`,s.asyncGeneratorDelegate=o("7.0.0-beta.0")`
  export default function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {}, waiting = false;

    function pump(key, value) {
      waiting = true;
      value = new Promise(function (resolve) { resolve(inner[key](value)); });
      return { done: false, value: awaitWrap(value) };
    };

    iter[typeof Symbol !== "undefined" && Symbol.iterator || "@@iterator"] = function () { return this; };

    iter.next = function (value) {
      if (waiting) {
        waiting = false;
        return value;
      }
      return pump("next", value);
    };

    if (typeof inner.throw === "function") {
      iter.throw = function (value) {
        if (waiting) {
          waiting = false;
          throw value;
        }
        return pump("throw", value);
      };
    }

    if (typeof inner.return === "function") {
      iter.return = function (value) {
        if (waiting) {
          waiting = false;
          return value;
        }
        return pump("return", value);
      };
    }

    return iter;
  }
`,s.asyncToGenerator=o("7.0.0-beta.0")`
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  export default function _asyncToGenerator(fn) {
    return function () {
      var self = this, args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }
`,s.classCallCheck=o("7.0.0-beta.0")`
  export default function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
`,s.createClass=o("7.0.0-beta.0")`
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i ++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  export default function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
`,s.defineEnumerableProperties=o("7.0.0-beta.0")`
  export default function _defineEnumerableProperties(obj, descs) {
    for (var key in descs) {
      var desc = descs[key];
      desc.configurable = desc.enumerable = true;
      if ("value" in desc) desc.writable = true;
      Object.defineProperty(obj, key, desc);
    }

    // Symbols are not enumerated over by for-in loops. If native
    // Symbols are available, fetch all of the descs object's own
    // symbol properties and define them on our target object too.
    if (Object.getOwnPropertySymbols) {
      var objectSymbols = Object.getOwnPropertySymbols(descs);
      for (var i = 0; i < objectSymbols.length; i++) {
        var sym = objectSymbols[i];
        var desc = descs[sym];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, sym, desc);
      }
    }
    return obj;
  }
`,s.defaults=o("7.0.0-beta.0")`
  export default function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = Object.getOwnPropertyDescriptor(defaults, key);
      if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }
    return obj;
  }
`,s.defineProperty=o("7.0.0-beta.0")`
  export default function _defineProperty(obj, key, value) {
    // Shortcircuit the slow defineProperty path when possible.
    // We are trying to avoid issues where setters defined on the
    // prototype cause side effects under the fast path of simple
    // assignment. By checking for existence of the property with
    // the in operator, we can optimize most of this overhead away.
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
`,s.extends=o("7.0.0-beta.0")`
  export default function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };

    return _extends.apply(this, arguments);
  }
`,s.objectSpread=o("7.0.0-beta.0")`
  import defineProperty from "defineProperty";

  export default function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = (arguments[i] != null) ? Object(arguments[i]) : {};
      var ownKeys = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      ownKeys.forEach(function(key) {
        defineProperty(target, key, source[key]);
      });
    }
    return target;
  }
`,s.inherits=o("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  export default function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    // We can't use defineProperty to set the prototype in a single step because it
    // doesn't work in Chrome <= 36. https://github.com/babel/babel/issues/14056
    // V8 bug: https://bugs.chromium.org/p/v8/issues/detail?id=3334
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass) setPrototypeOf(subClass, superClass);
  }
`,s.inheritsLoose=o("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  export default function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    setPrototypeOf(subClass, superClass);
  }
`,s.getPrototypeOf=o("7.0.0-beta.0")`
  export default function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
  }
`,s.setPrototypeOf=o("7.0.0-beta.0")`
  export default function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
`,s.isNativeReflectConstruct=o("7.9.0")`
  export default function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;

    // core-js@3
    if (Reflect.construct.sham) return false;

    // Proxy can't be polyfilled. Every browser implemented
    // proxies before or at the same time as Reflect.construct,
    // so if they support Proxy they also support Reflect.construct.
    if (typeof Proxy === "function") return true;

    // Since Reflect.construct can't be properly polyfilled, some
    // implementations (e.g. core-js@2) don't set the correct internal slots.
    // Those polyfills don't allow us to subclass built-ins, so we need to
    // use our fallback implementation.
    try {
      // If the internal slots aren't set, this throws an error similar to
      //   TypeError: this is not a Boolean object.

      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
      return true;
    } catch (e) {
      return false;
    }
  }
`,s.construct=o("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";

  export default function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      // NOTE: If Parent !== Class, the correct __proto__ is set *after*
      //       calling the constructor.
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    // Avoid issues with Class being present but undefined when it wasn't
    // present in the original call.
    return _construct.apply(null, arguments);
  }
`,s.isNativeFunction=o("7.0.0-beta.0")`
  export default function _isNativeFunction(fn) {
    // Note: This function returns "true" for core-js functions.
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
`,s.wrapNativeSuper=o("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";
  import setPrototypeOf from "setPrototypeOf";
  import isNativeFunction from "isNativeFunction";
  import construct from "construct";

  export default function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor)
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true,
        }
      });

      return setPrototypeOf(Wrapper, Class);
    }

    return _wrapNativeSuper(Class)
  }
`,s.instanceof=o("7.0.0-beta.0")`
  export default function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return !!right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  }
`,s.interopRequireDefault=o("7.0.0-beta.0")`
  export default function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
`,s.interopRequireWildcard=o("7.14.0")`
  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;

    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function (nodeInterop) {
      return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }

  export default function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
      return { default: obj }
    }

    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor
          ? Object.getOwnPropertyDescriptor(obj, key)
          : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
`,s.newArrowCheck=o("7.0.0-beta.0")`
  export default function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  }
`,s.objectDestructuringEmpty=o("7.0.0-beta.0")`
  export default function _objectDestructuringEmpty(obj) {
    if (obj == null) throw new TypeError("Cannot destructure undefined");
  }
`,s.objectWithoutPropertiesLoose=o("7.0.0-beta.0")`
  export default function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};

    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }
`,s.objectWithoutProperties=o("7.0.0-beta.0")`
  import objectWithoutPropertiesLoose from "objectWithoutPropertiesLoose";

  export default function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }
`,s.assertThisInitialized=o("7.0.0-beta.0")`
  export default function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
`,s.possibleConstructorReturn=o("7.0.0-beta.0")`
  import assertThisInitialized from "assertThisInitialized";

  export default function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return assertThisInitialized(self);
  }
`,s.createSuper=o("7.9.0")`
  import getPrototypeOf from "getPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";
  import possibleConstructorReturn from "possibleConstructorReturn";

  export default function _createSuper(Derived) {
    var hasNativeReflectConstruct = isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        // NOTE: This doesn't work if this.__proto__.constructor has been modified.
        var NewTarget = getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return possibleConstructorReturn(this, result);
    }
  }
 `,s.superPropBase=o("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";

  export default function _superPropBase(object, property) {
    // Yes, this throws if object is null to being with, that's on purpose.
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
`,s.get=o("7.0.0-beta.0")`
  import superPropBase from "superPropBase";

  export default function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = superPropBase(target, property);

        if (!base) return;

        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          // STEP 3. If receiver is not present, then set receiver to target.
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }

        return desc.value;
      };
    }
    return _get.apply(this, arguments);
  }
`,s.set=o("7.0.0-beta.0")`
  import superPropBase from "superPropBase";
  import defineProperty from "defineProperty";

  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = superPropBase(target, property);
        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);
          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            // Both getter and non-writable fall into this.
            return false;
          }
        }

        // Without a super that defines the property, spec boils down to
        // "define on receiver" for some reason.
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
          if (!desc.writable) {
            // Setter, getter, and non-writable fall into this.
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          // Avoid setters that may be defined on Sub's prototype, but not on
          // the instance.
          defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  export default function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }
`,s.taggedTemplateLiteral=o("7.0.0-beta.0")`
  export default function _taggedTemplateLiteral(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    return Object.freeze(Object.defineProperties(strings, {
        raw: { value: Object.freeze(raw) }
    }));
  }
`,s.taggedTemplateLiteralLoose=o("7.0.0-beta.0")`
  export default function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    strings.raw = raw;
    return strings;
  }
`,s.readOnlyError=o("7.0.0-beta.0")`
  export default function _readOnlyError(name) {
    throw new TypeError("\\"" + name + "\\" is read-only");
  }
`,s.writeOnlyError=o("7.12.13")`
  export default function _writeOnlyError(name) {
    throw new TypeError("\\"" + name + "\\" is write-only");
  }
`,s.classNameTDZError=o("7.0.0-beta.0")`
  export default function _classNameTDZError(name) {
    throw new Error("Class \\"" + name + "\\" cannot be referenced in computed property keys.");
  }
`,s.temporalUndefined=o("7.0.0-beta.0")`
  // This function isn't mean to be called, but to be used as a reference.
  // We can't use a normal object because it isn't hoisted.
  export default function _temporalUndefined() {}
`,s.tdz=o("7.5.5")`
  export default function _tdzError(name) {
    throw new ReferenceError(name + " is not defined - temporal dead zone");
  }
`,s.temporalRef=o("7.0.0-beta.0")`
  import undef from "temporalUndefined";
  import err from "tdz";

  export default function _temporalRef(val, name) {
    return val === undef ? err(name) : val;
  }
`,s.slicedToArray=o("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimit from "iterableToArrayLimit";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArray(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimit(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`,s.slicedToArrayLoose=o("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimitLoose from "iterableToArrayLimitLoose";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArrayLoose(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimitLoose(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`,s.toArray=o("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _toArray(arr) {
    return (
      arrayWithHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableRest()
    );
  }
`,s.toConsumableArray=o("7.0.0-beta.0")`
  import arrayWithoutHoles from "arrayWithoutHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableSpread from "nonIterableSpread";

  export default function _toConsumableArray(arr) {
    return (
      arrayWithoutHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableSpread()
    );
  }
`,s.arrayWithoutHoles=o("7.0.0-beta.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray(arr);
  }
`,s.arrayWithHoles=o("7.0.0-beta.0")`
  export default function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
`,s.maybeArrayLike=o("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _maybeArrayLike(next, arr, i) {
    if (arr && !Array.isArray(arr) && typeof arr.length === "number") {
      var len = arr.length;
      return arrayLikeToArray(arr, i !== void 0 && i < len ? i : len);
    }
    return next(arr, i);
  }
`,s.iterableToArray=o("7.0.0-beta.0")`
  export default function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
`,s.iterableToArrayLimit=o("7.0.0-beta.0")`
  export default function _iterableToArrayLimit(arr, i) {
    // this is an expanded form of \`for...of\` that properly supports abrupt completions of
    // iterators etc. variable names have been minimised to reduce the size of this massive
    // helper. sometimes spec compliance is annoying :(
    //
    // _n = _iteratorNormalCompletion
    // _d = _didIteratorError
    // _e = _iteratorError
    // _i = _iterator
    // _s = _step

    var _i = arr == null ? null : (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;

    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
`,s.iterableToArrayLimitLoose=o("7.0.0-beta.0")`
  export default function _iterableToArrayLimitLoose(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;

    var _arr = [];
    for (_i = _i.call(arr), _step; !(_step = _i.next()).done;) {
      _arr.push(_step.value);
      if (i && _arr.length === i) break;
    }
    return _arr;
  }
`,s.unsupportedIterableToArray=o("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return arrayLikeToArray(o, minLen);
  }
`,s.arrayLikeToArray=o("7.9.0")`
  export default function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
`,s.nonIterableSpread=o("7.0.0-beta.0")`
  export default function _nonIterableSpread() {
    throw new TypeError(
      "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`,s.nonIterableRest=o("7.0.0-beta.0")`
  export default function _nonIterableRest() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`,s.createForOfIteratorHelper=o("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  // s: start (create the iterator)
  // n: next
  // e: error (called whenever something throws)
  // f: finish (always called at the end)

  export default function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      // Fallback for engines without symbol support
      if (
        Array.isArray(o) ||
        (it = unsupportedIterableToArray(o)) ||
        (allowArrayLike && o && typeof o.length === "number")
      ) {
        if (it) o = it;
        var i = 0;
        var F = function(){};
        return {
          s: F,
          n: function() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          },
          e: function(e) { throw e; },
          f: F,
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true, didErr = false, err;

    return {
      s: function() {
        it = it.call(o);
      },
      n: function() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function(e) {
        didErr = true;
        err = e;
      },
      f: function() {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
`,s.createForOfIteratorHelperLoose=o("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  export default function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (it) return (it = it.call(o)).next.bind(it);

    // Fallback for engines without symbol support
    if (
      Array.isArray(o) ||
      (it = unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === "number")
    ) {
      if (it) o = it;
      var i = 0;
      return function() {
        if (i >= o.length) return { done: true };
        return { done: false, value: o[i++] };
      }
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
`,s.skipFirstGeneratorNext=o("7.0.0-beta.0")`
  export default function _skipFirstGeneratorNext(fn) {
    return function () {
      var it = fn.apply(this, arguments);
      it.next();
      return it;
    }
  }
`,s.toPrimitive=o("7.1.5")`
  export default function _toPrimitive(
    input,
    hint /*: "default" | "string" | "number" | void */
  ) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
`,s.toPropertyKey=o("7.1.5")`
  import toPrimitive from "toPrimitive";

  export default function _toPropertyKey(arg) {
    var key = toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
`,s.initializerWarningHelper=o("7.0.0-beta.0")`
    export default function _initializerWarningHelper(descriptor, context){
        throw new Error(
          'Decorating class property failed. Please ensure that ' +
          'proposal-class-properties is enabled and runs after the decorators transform.'
        );
    }
`,s.initializerDefineProperty=o("7.0.0-beta.0")`
    export default function _initializerDefineProperty(target, property, descriptor, context){
        if (!descriptor) return;

        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0,
        });
    }
`,s.applyDecoratedDescriptor=o("7.0.0-beta.0")`
    export default function _applyDecoratedDescriptor(target, property, decorators, descriptor, context){
        var desc = {};
        Object.keys(descriptor).forEach(function(key){
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer){
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator){
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0){
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0){
            Object.defineProperty(target, property, desc);
            desc = null;
        }

        return desc;
    }
`,s.classPrivateFieldLooseKey=o("7.0.0-beta.0")`
  var id = 0;
  export default function _classPrivateFieldKey(name) {
    return "__private_" + (id++) + "_" + name;
  }
`,s.classPrivateFieldLooseBase=o("7.0.0-beta.0")`
  export default function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
      throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
  }
`,s.classPrivateFieldGet=o("7.0.0-beta.0")`
  import classApplyDescriptorGet from "classApplyDescriptorGet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "get");
    return classApplyDescriptorGet(receiver, descriptor);
  }
`,s.classPrivateFieldSet=o("7.0.0-beta.0")`
  import classApplyDescriptorSet from "classApplyDescriptorSet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
    classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
`,s.classPrivateFieldDestructureSet=o("7.4.4")`
  import classApplyDescriptorDestructureSet from "classApplyDescriptorDestructureSet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldDestructureSet(receiver, privateMap) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
    return classApplyDescriptorDestructureSet(receiver, descriptor);
  }
`,s.classExtractFieldDescriptor=o("7.13.10")`
  export default function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
  }
`,s.classStaticPrivateFieldSpecGet=o("7.0.2")`
  import classApplyDescriptorGet from "classApplyDescriptorGet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "get");
    return classApplyDescriptorGet(receiver, descriptor);
  }
`,s.classStaticPrivateFieldSpecSet=o("7.0.2")`
  import classApplyDescriptorSet from "classApplyDescriptorSet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "set");
    classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
`,s.classStaticPrivateMethodGet=o("7.3.2")`
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  export default function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    return method;
  }
`,s.classStaticPrivateMethodSet=o("7.3.2")`
  export default function _classStaticPrivateMethodSet() {
    throw new TypeError("attempted to set read only static private field");
  }
`,s.classApplyDescriptorGet=o("7.13.10")`
  export default function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
`,s.classApplyDescriptorSet=o("7.13.10")`
  export default function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }
      descriptor.value = value;
    }
  }
`,s.classApplyDescriptorDestructureSet=o("7.13.10")`
  export default function _classApplyDescriptorDestructureSet(receiver, descriptor) {
    if (descriptor.set) {
      if (!("__destrObj" in descriptor)) {
        descriptor.__destrObj = {
          set value(v) {
            descriptor.set.call(receiver, v)
          },
        };
      }
      return descriptor.__destrObj;
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }

      return descriptor;
    }
  }
`,s.classStaticPrivateFieldDestructureSet=o("7.13.10")`
  import classApplyDescriptorDestructureSet from "classApplyDescriptorDestructureSet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldDestructureSet(receiver, classConstructor, descriptor) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "set");
    return classApplyDescriptorDestructureSet(receiver, descriptor);
  }
`,s.classCheckPrivateStaticAccess=o("7.13.10")`
  export default function _classCheckPrivateStaticAccess(receiver, classConstructor) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
  }
`,s.classCheckPrivateStaticFieldDescriptor=o("7.13.10")`
  export default function _classCheckPrivateStaticFieldDescriptor(descriptor, action) {
    if (descriptor === undefined) {
      throw new TypeError("attempted to " + action + " private static field before its declaration");
    }
  }
`,s.decorate=o("7.1.5")`
  import toArray from "toArray";
  import toPropertyKey from "toPropertyKey";

  // These comments are stripped by @babel/template
  /*::
  type PropertyDescriptor =
    | {
        value: any,
        writable: boolean,
        configurable: boolean,
        enumerable: boolean,
      }
    | {
        get?: () => any,
        set?: (v: any) => void,
        configurable: boolean,
        enumerable: boolean,
      };

  type FieldDescriptor ={
    writable: boolean,
    configurable: boolean,
    enumerable: boolean,
  };

  type Placement = "static" | "prototype" | "own";
  type Key = string | symbol; // PrivateName is not supported yet.

  type ElementDescriptor =
    | {
        kind: "method",
        key: Key,
        placement: Placement,
        descriptor: PropertyDescriptor
      }
    | {
        kind: "field",
        key: Key,
        placement: Placement,
        descriptor: FieldDescriptor,
        initializer?: () => any,
      };

  // This is exposed to the user code
  type ElementObjectInput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
  };

  // This is exposed to the user code
  type ElementObjectOutput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
    extras?: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  // This is exposed to the user code
  type ClassObject = {
    [@@toStringTag]?: "Descriptor",
    kind: "class",
    elements: ElementDescriptor[],
  };

  type ElementDecorator = (descriptor: ElementObjectInput) => ?ElementObjectOutput;
  type ClassDecorator = (descriptor: ClassObject) => ?ClassObject;
  type ClassFinisher = <A, B>(cl: Class<A>) => Class<B>;

  // Only used by Babel in the transform output, not part of the spec.
  type ElementDefinition =
    | {
        kind: "method",
        value: any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
      }
    | {
        kind: "field",
        value: () => any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
    };

  declare function ClassFactory<C>(initialize: (instance: C) => void): {
    F: Class<C>,
    d: ElementDefinition[]
  }

  */

  /*::
  // Various combinations with/without extras and with one or many finishers

  type ElementFinisherExtras = {
    element: ElementDescriptor,
    finisher?: ClassFinisher,
    extras?: ElementDescriptor[],
  };

  type ElementFinishersExtras = {
    element: ElementDescriptor,
    finishers: ClassFinisher[],
    extras: ElementDescriptor[],
  };

  type ElementsFinisher = {
    elements: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  type ElementsFinishers = {
    elements: ElementDescriptor[],
    finishers: ClassFinisher[],
  };

  */

  /*::

  type Placements = {
    static: Key[],
    prototype: Key[],
    own: Key[],
  };

  */

  // ClassDefinitionEvaluation (Steps 26-*)
  export default function _decorate(
    decorators /*: ClassDecorator[] */,
    factory /*: ClassFactory */,
    superClass /*: ?Class<*> */,
    mixins /*: ?Array<Function> */,
  ) /*: Class<*> */ {
    var api = _getDecoratorsApi();
    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        api = mixins[i](api);
      }
    }

    var r = factory(function initialize(O) {
      api.initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = api.decorateClass(
      _coalesceClassElements(r.d.map(_createElementDescriptor)),
      decorators,
    );

    api.initializeClassElements(r.F, decorated.elements);

    return api.runClassFinishers(r.F, decorated.finishers);
  }

  function _getDecoratorsApi() {
    _getDecoratorsApi = function() {
      return api;
    };

    var api = {
      elementsDefinitionOrder: [["method"], ["field"]],

      // InitializeInstanceElements
      initializeInstanceElements: function(
        /*::<C>*/ O /*: C */,
        elements /*: ElementDescriptor[] */,
      ) {
        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            if (element.kind === kind && element.placement === "own") {
              this.defineClassElement(O, element);
            }
          }, this);
        }, this);
      },

      // InitializeClassElements
      initializeClassElements: function(
        /*::<C>*/ F /*: Class<C> */,
        elements /*: ElementDescriptor[] */,
      ) {
        var proto = F.prototype;

        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            var placement = element.placement;
            if (
              element.kind === kind &&
              (placement === "static" || placement === "prototype")
            ) {
              var receiver = placement === "static" ? F : proto;
              this.defineClassElement(receiver, element);
            }
          }, this);
        }, this);
      },

      // DefineClassElement
      defineClassElement: function(
        /*::<C>*/ receiver /*: C | Class<C> */,
        element /*: ElementDescriptor */,
      ) {
        var descriptor /*: PropertyDescriptor */ = element.descriptor;
        if (element.kind === "field") {
          var initializer = element.initializer;
          descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver),
          };
        }
        Object.defineProperty(receiver, element.key, descriptor);
      },

      // DecorateClass
      decorateClass: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var newElements /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];
        var placements /*: Placements */ = {
          static: [],
          prototype: [],
          own: [],
        };

        elements.forEach(function(element /*: ElementDescriptor */) {
          this.addElementPlacement(element, placements);
        }, this);

        elements.forEach(function(element /*: ElementDescriptor */) {
          if (!_hasDecorators(element)) return newElements.push(element);

          var elementFinishersExtras /*: ElementFinishersExtras */ = this.decorateElement(
            element,
            placements,
          );
          newElements.push(elementFinishersExtras.element);
          newElements.push.apply(newElements, elementFinishersExtras.extras);
          finishers.push.apply(finishers, elementFinishersExtras.finishers);
        }, this);

        if (!decorators) {
          return { elements: newElements, finishers: finishers };
        }

        var result /*: ElementsFinishers */ = this.decorateConstructor(
          newElements,
          decorators,
        );
        finishers.push.apply(finishers, result.finishers);
        result.finishers = finishers;

        return result;
      },

      // AddElementPlacement
      addElementPlacement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
        silent /*: boolean */,
      ) {
        var keys = placements[element.placement];
        if (!silent && keys.indexOf(element.key) !== -1) {
          throw new TypeError("Duplicated element (" + element.key + ")");
        }
        keys.push(element.key);
      },

      // DecorateElement
      decorateElement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
      ) /*: ElementFinishersExtras */ {
        var extras /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];

        for (
          var decorators = element.decorators, i = decorators.length - 1;
          i >= 0;
          i--
        ) {
          // (inlined) RemoveElementPlacement
          var keys = placements[element.placement];
          keys.splice(keys.indexOf(element.key), 1);

          var elementObject /*: ElementObjectInput */ = this.fromElementDescriptor(
            element,
          );
          var elementFinisherExtras /*: ElementFinisherExtras */ = this.toElementFinisherExtras(
            (0, decorators[i])(elementObject) /*: ElementObjectOutput */ ||
              elementObject,
          );

          element = elementFinisherExtras.element;
          this.addElementPlacement(element, placements);

          if (elementFinisherExtras.finisher) {
            finishers.push(elementFinisherExtras.finisher);
          }

          var newExtras /*: ElementDescriptor[] | void */ =
            elementFinisherExtras.extras;
          if (newExtras) {
            for (var j = 0; j < newExtras.length; j++) {
              this.addElementPlacement(newExtras[j], placements);
            }
            extras.push.apply(extras, newExtras);
          }
        }

        return { element: element, finishers: finishers, extras: extras };
      },

      // DecorateConstructor
      decorateConstructor: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var finishers /*: ClassFinisher[] */ = [];

        for (var i = decorators.length - 1; i >= 0; i--) {
          var obj /*: ClassObject */ = this.fromClassDescriptor(elements);
          var elementsAndFinisher /*: ElementsFinisher */ = this.toClassDescriptor(
            (0, decorators[i])(obj) /*: ClassObject */ || obj,
          );

          if (elementsAndFinisher.finisher !== undefined) {
            finishers.push(elementsAndFinisher.finisher);
          }

          if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;

            for (var j = 0; j < elements.length - 1; j++) {
              for (var k = j + 1; k < elements.length; k++) {
                if (
                  elements[j].key === elements[k].key &&
                  elements[j].placement === elements[k].placement
                ) {
                  throw new TypeError(
                    "Duplicated element (" + elements[j].key + ")",
                  );
                }
              }
            }
          }
        }

        return { elements: elements, finishers: finishers };
      },

      // FromElementDescriptor
      fromElementDescriptor: function(
        element /*: ElementDescriptor */,
      ) /*: ElementObject */ {
        var obj /*: ElementObject */ = {
          kind: element.kind,
          key: element.key,
          placement: element.placement,
          descriptor: element.descriptor,
        };

        var desc = {
          value: "Descriptor",
          configurable: true,
        };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        if (element.kind === "field") obj.initializer = element.initializer;

        return obj;
      },

      // ToElementDescriptors
      toElementDescriptors: function(
        elementObjects /*: ElementObject[] */,
      ) /*: ElementDescriptor[] */ {
        if (elementObjects === undefined) return;
        return toArray(elementObjects).map(function(elementObject) {
          var element = this.toElementDescriptor(elementObject);
          this.disallowProperty(elementObject, "finisher", "An element descriptor");
          this.disallowProperty(elementObject, "extras", "An element descriptor");
          return element;
        }, this);
      },

      // ToElementDescriptor
      toElementDescriptor: function(
        elementObject /*: ElementObject */,
      ) /*: ElementDescriptor */ {
        var kind = String(elementObject.kind);
        if (kind !== "method" && kind !== "field") {
          throw new TypeError(
            'An element descriptor\\'s .kind property must be either "method" or' +
              ' "field", but a decorator created an element descriptor with' +
              ' .kind "' +
              kind +
              '"',
          );
        }

        var key = toPropertyKey(elementObject.key);

        var placement = String(elementObject.placement);
        if (
          placement !== "static" &&
          placement !== "prototype" &&
          placement !== "own"
        ) {
          throw new TypeError(
            'An element descriptor\\'s .placement property must be one of "static",' +
              ' "prototype" or "own", but a decorator created an element descriptor' +
              ' with .placement "' +
              placement +
              '"',
          );
        }

        var descriptor /*: PropertyDescriptor */ = elementObject.descriptor;

        this.disallowProperty(elementObject, "elements", "An element descriptor");

        var element /*: ElementDescriptor */ = {
          kind: kind,
          key: key,
          placement: placement,
          descriptor: Object.assign({}, descriptor),
        };

        if (kind !== "field") {
          this.disallowProperty(elementObject, "initializer", "A method descriptor");
        } else {
          this.disallowProperty(
            descriptor,
            "get",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "set",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "value",
            "The property descriptor of a field descriptor",
          );

          element.initializer = elementObject.initializer;
        }

        return element;
      },

      toElementFinisherExtras: function(
        elementObject /*: ElementObject */,
      ) /*: ElementFinisherExtras */ {
        var element /*: ElementDescriptor */ = this.toElementDescriptor(
          elementObject,
        );
        var finisher /*: ClassFinisher */ = _optionalCallableProperty(
          elementObject,
          "finisher",
        );
        var extras /*: ElementDescriptors[] */ = this.toElementDescriptors(
          elementObject.extras,
        );

        return { element: element, finisher: finisher, extras: extras };
      },

      // FromClassDescriptor
      fromClassDescriptor: function(
        elements /*: ElementDescriptor[] */,
      ) /*: ClassObject */ {
        var obj = {
          kind: "class",
          elements: elements.map(this.fromElementDescriptor, this),
        };

        var desc = { value: "Descriptor", configurable: true };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        return obj;
      },

      // ToClassDescriptor
      toClassDescriptor: function(
        obj /*: ClassObject */,
      ) /*: ElementsFinisher */ {
        var kind = String(obj.kind);
        if (kind !== "class") {
          throw new TypeError(
            'A class descriptor\\'s .kind property must be "class", but a decorator' +
              ' created a class descriptor with .kind "' +
              kind +
              '"',
          );
        }

        this.disallowProperty(obj, "key", "A class descriptor");
        this.disallowProperty(obj, "placement", "A class descriptor");
        this.disallowProperty(obj, "descriptor", "A class descriptor");
        this.disallowProperty(obj, "initializer", "A class descriptor");
        this.disallowProperty(obj, "extras", "A class descriptor");

        var finisher = _optionalCallableProperty(obj, "finisher");
        var elements = this.toElementDescriptors(obj.elements);

        return { elements: elements, finisher: finisher };
      },

      // RunClassFinishers
      runClassFinishers: function(
        constructor /*: Class<*> */,
        finishers /*: ClassFinisher[] */,
      ) /*: Class<*> */ {
        for (var i = 0; i < finishers.length; i++) {
          var newConstructor /*: ?Class<*> */ = (0, finishers[i])(constructor);
          if (newConstructor !== undefined) {
            // NOTE: This should check if IsConstructor(newConstructor) is false.
            if (typeof newConstructor !== "function") {
              throw new TypeError("Finishers must return a constructor.");
            }
            constructor = newConstructor;
          }
        }
        return constructor;
      },

      disallowProperty: function(obj, name, objectType) {
        if (obj[name] !== undefined) {
          throw new TypeError(objectType + " can't have a ." + name + " property.");
        }
      }
    };

    return api;
  }

  // ClassElementEvaluation
  function _createElementDescriptor(
    def /*: ElementDefinition */,
  ) /*: ElementDescriptor */ {
    var key = toPropertyKey(def.key);

    var descriptor /*: PropertyDescriptor */;
    if (def.kind === "method") {
      descriptor = {
        value: def.value,
        writable: true,
        configurable: true,
        enumerable: false,
      };
    } else if (def.kind === "get") {
      descriptor = { get: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "set") {
      descriptor = { set: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "field") {
      descriptor = { configurable: true, writable: true, enumerable: true };
    }

    var element /*: ElementDescriptor */ = {
      kind: def.kind === "field" ? "field" : "method",
      key: key,
      placement: def.static
        ? "static"
        : def.kind === "field"
        ? "own"
        : "prototype",
      descriptor: descriptor,
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;

    return element;
  }

  // CoalesceGetterSetter
  function _coalesceGetterSetter(
    element /*: ElementDescriptor */,
    other /*: ElementDescriptor */,
  ) {
    if (element.descriptor.get !== undefined) {
      other.descriptor.get = element.descriptor.get;
    } else {
      other.descriptor.set = element.descriptor.set;
    }
  }

  // CoalesceClassElements
  function _coalesceClassElements(
    elements /*: ElementDescriptor[] */,
  ) /*: ElementDescriptor[] */ {
    var newElements /*: ElementDescriptor[] */ = [];

    var isSameElement = function(
      other /*: ElementDescriptor */,
    ) /*: boolean */ {
      return (
        other.kind === "method" &&
        other.key === element.key &&
        other.placement === element.placement
      );
    };

    for (var i = 0; i < elements.length; i++) {
      var element /*: ElementDescriptor */ = elements[i];
      var other /*: ElementDescriptor */;

      if (
        element.kind === "method" &&
        (other = newElements.find(isSameElement))
      ) {
        if (
          _isDataDescriptor(element.descriptor) ||
          _isDataDescriptor(other.descriptor)
        ) {
          if (_hasDecorators(element) || _hasDecorators(other)) {
            throw new ReferenceError(
              "Duplicated methods (" + element.key + ") can't be decorated.",
            );
          }
          other.descriptor = element.descriptor;
        } else {
          if (_hasDecorators(element)) {
            if (_hasDecorators(other)) {
              throw new ReferenceError(
                "Decorators can't be placed on different accessors with for " +
                  "the same property (" +
                  element.key +
                  ").",
              );
            }
            other.decorators = element.decorators;
          }
          _coalesceGetterSetter(element, other);
        }
      } else {
        newElements.push(element);
      }
    }

    return newElements;
  }

  function _hasDecorators(element /*: ElementDescriptor */) /*: boolean */ {
    return element.decorators && element.decorators.length;
  }

  function _isDataDescriptor(desc /*: PropertyDescriptor */) /*: boolean */ {
    return (
      desc !== undefined &&
      !(desc.value === undefined && desc.writable === undefined)
    );
  }

  function _optionalCallableProperty /*::<T>*/(
    obj /*: T */,
    name /*: $Keys<T> */,
  ) /*: ?Function */ {
    var value = obj[name];
    if (value !== undefined && typeof value !== "function") {
      throw new TypeError("Expected '" + name + "' to be a function");
    }
    return value;
  }

`,s.classPrivateMethodGet=o("7.1.6")`
  export default function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
  }
`,s.checkPrivateRedeclaration=o("7.14.1")`
  export default function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
  }
`,s.classPrivateFieldInitSpec=o("7.14.1")`
  import checkPrivateRedeclaration from "checkPrivateRedeclaration";

  export default function _classPrivateFieldInitSpec(obj, privateMap, value) {
    checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
  }
`,s.classPrivateMethodInitSpec=o("7.14.1")`
  import checkPrivateRedeclaration from "checkPrivateRedeclaration";

  export default function _classPrivateMethodInitSpec(obj, privateSet) {
    checkPrivateRedeclaration(obj, privateSet);
    privateSet.add(obj);
  }
`,s.classPrivateMethodSet=o("7.1.6")`
    export default function _classPrivateMethodSet() {
      throw new TypeError("attempted to reassign private method");
    }
  `,s.identity=o("7.17.0")`
  export default function _identity(x) {
    return x;
  }