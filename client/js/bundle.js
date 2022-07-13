/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),t=new Map;class o{constructor(e,t){if(this._$cssResult$=!0,t!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let i=t.get(this.cssText);return e&&void 0===i&&(t.set(this.cssText,i=new CSSStyleSheet),i.replaceSync(this.cssText)),i}toString(){return this.cssText}}const a=(e,...t)=>{const a=1===e.length?e[0]:t.reduce(((i,t,o)=>i+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(t)+e[o+1]),e[0]);return new o(a,i)},r=e?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new o("string"==typeof e?e:e+"",i))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var n;const s=window.trustedTypes,l=s?s.emptyScript:"",d=window.reactiveElementPolyfillSupport,c={toAttribute(e,i){switch(i){case Boolean:e=e?l:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,i){let t=e;switch(i){case Boolean:t=null!==e;break;case Number:t=null===e?null:Number(e);break;case Object:case Array:try{t=JSON.parse(e)}catch(e){t=null}}return t}},b=(e,i)=>i!==e&&(i==i||e==e),m={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:b};class u extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((i,t)=>{const o=this._$Eh(t,i);void 0!==o&&(this._$Eu.set(o,t),e.push(o))})),e}static createProperty(e,i=m){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(e,i),!i.noAccessor&&!this.prototype.hasOwnProperty(e)){const t="symbol"==typeof e?Symbol():"__"+e,o=this.getPropertyDescriptor(e,t,i);void 0!==o&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,i,t){return{get(){return this[i]},set(o){const a=this[e];this[i]=o,this.requestUpdate(e,a,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const t of i)this.createProperty(t,e[t])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const t=new Set(e.flat(1/0).reverse());for(const e of t)i.unshift(r(e))}else void 0!==e&&i.push(r(e));return i}static _$Eh(e,i){const t=i.attribute;return!1===t?void 0:"string"==typeof t?t:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var i,t;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(t=e.hostConnected)||void 0===t||t.call(e))}removeController(e){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i])}))}createRenderRoot(){var i;const t=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,t)=>{e?i.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((e=>{const t=document.createElement("style"),o=window.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=e.cssText,i.appendChild(t)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var i;return null===(i=e.hostConnected)||void 0===i?void 0:i.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var i;return null===(i=e.hostDisconnected)||void 0===i?void 0:i.call(e)}))}attributeChangedCallback(e,i,t){this._$AK(e,t)}_$ES(e,i,t=m){var o,a;const r=this.constructor._$Eh(e,t);if(void 0!==r&&!0===t.reflect){const n=(null!==(a=null===(o=t.converter)||void 0===o?void 0:o.toAttribute)&&void 0!==a?a:c.toAttribute)(i,t.type);this._$Ei=e,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Ei=null}}_$AK(e,i){var t,o,a;const r=this.constructor,n=r._$Eu.get(e);if(void 0!==n&&this._$Ei!==n){const e=r.getPropertyOptions(n),s=e.converter,l=null!==(a=null!==(o=null===(t=s)||void 0===t?void 0:t.fromAttribute)&&void 0!==o?o:"function"==typeof s?s:null)&&void 0!==a?a:c.fromAttribute;this._$Ei=n,this[n]=l(i,e.type),this._$Ei=null}}requestUpdate(e,i,t){let o=!0;void 0!==e&&(((t=t||this.constructor.getPropertyOptions(e)).hasChanged||b)(this[e],i)?(this._$AL.has(e)||this._$AL.set(e,i),!0===t.reflect&&this._$Ei!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,t))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,i)=>this[i]=e)),this._$Et=void 0);let i=!1;const t=this._$AL;try{i=this.shouldUpdate(t),i?(this.willUpdate(t),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var i;return null===(i=e.hostUpdate)||void 0===i?void 0:i.call(e)})),this.update(t)):this._$EU()}catch(e){throw i=!1,this._$EU(),e}i&&this._$AE(t)}willUpdate(e){}_$AE(e){var i;null===(i=this._$Eg)||void 0===i||i.forEach((e=>{var i;return null===(i=e.hostUpdated)||void 0===i?void 0:i.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,i)=>this._$ES(i,this[i],e))),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var h;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:u}),(null!==(n=globalThis.reactiveElementVersions)&&void 0!==n?n:globalThis.reactiveElementVersions=[]).push("1.3.2");const f=globalThis.trustedTypes,p=f?f.createPolicy("lit-html",{createHTML:e=>e}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,v="?"+g,k=`<${v}>`,w=document,x=(e="")=>w.createComment(e),y=e=>null===e||"object"!=typeof e&&"function"!=typeof e,$=Array.isArray,F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,z=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,E=/"/g,S=/^(?:script|style|textarea|title)$/i,D=(e=>(i,...t)=>({_$litType$:e,strings:i,values:t}))(1),B=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),j=new WeakMap,P=w.createTreeWalker(w,129,null,!1),L=(e,i)=>{const t=e.length-1,o=[];let a,r=2===i?"<svg>":"",n=F;for(let i=0;i<t;i++){const t=e[i];let s,l,d=-1,c=0;for(;c<t.length&&(n.lastIndex=c,l=n.exec(t),null!==l);)c=n.lastIndex,n===F?"!--"===l[1]?n=A:void 0!==l[1]?n=z:void 0!==l[2]?(S.test(l[2])&&(a=RegExp("</"+l[2],"g")),n=C):void 0!==l[3]&&(n=C):n===C?">"===l[0]?(n=null!=a?a:F,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,s=l[1],n=void 0===l[3]?C:'"'===l[3]?E:_):n===E||n===_?n=C:n===A||n===z?n=F:(n=C,a=void 0);const b=n===C&&e[i+1].startsWith("/>")?" ":"";r+=n===F?t+k:d>=0?(o.push(s),t.slice(0,d)+"$lit$"+t.slice(d)+g+b):t+g+(-2===d?(o.push(void 0),i):b)}const s=r+(e[t]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==p?p.createHTML(s):s,o]};class O{constructor({strings:e,_$litType$:i},t){let o;this.parts=[];let a=0,r=0;const n=e.length-1,s=this.parts,[l,d]=L(e,i);if(this.el=O.createElement(l,t),P.currentNode=this.el.content,2===i){const e=this.el.content,i=e.firstChild;i.remove(),e.append(...i.childNodes)}for(;null!==(o=P.nextNode())&&s.length<n;){if(1===o.nodeType){if(o.hasAttributes()){const e=[];for(const i of o.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(g)){const t=d[r++];if(e.push(i),void 0!==t){const e=o.getAttribute(t.toLowerCase()+"$lit$").split(g),i=/([.?@])?(.*)/.exec(t);s.push({type:1,index:a,name:i[2],strings:e,ctor:"."===i[1]?N:"?"===i[1]?U:"@"===i[1]?q:M})}else s.push({type:6,index:a})}for(const i of e)o.removeAttribute(i)}if(S.test(o.tagName)){const e=o.textContent.split(g),i=e.length-1;if(i>0){o.textContent=f?f.emptyScript:"";for(let t=0;t<i;t++)o.append(e[t],x()),P.nextNode(),s.push({type:2,index:++a});o.append(e[i],x())}}}else if(8===o.nodeType)if(o.data===v)s.push({type:2,index:a});else{let e=-1;for(;-1!==(e=o.data.indexOf(g,e+1));)s.push({type:7,index:a}),e+=g.length-1}a++}}static createElement(e,i){const t=w.createElement("template");return t.innerHTML=e,t}}function I(e,i,t=e,o){var a,r,n,s;if(i===B)return i;let l=void 0!==o?null===(a=t._$Cl)||void 0===a?void 0:a[o]:t._$Cu;const d=y(i)?void 0:i._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===d?l=void 0:(l=new d(e),l._$AT(e,t,o)),void 0!==o?(null!==(n=(s=t)._$Cl)&&void 0!==n?n:s._$Cl=[])[o]=l:t._$Cu=l),void 0!==l&&(i=I(e,l._$AS(e,i.values),l,o)),i}class G{constructor(e,i){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var i;const{el:{content:t},parts:o}=this._$AD,a=(null!==(i=null==e?void 0:e.creationScope)&&void 0!==i?i:w).importNode(t,!0);P.currentNode=a;let r=P.nextNode(),n=0,s=0,l=o[0];for(;void 0!==l;){if(n===l.index){let i;2===l.type?i=new H(r,r.nextSibling,this,e):1===l.type?i=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(i=new V(r,this,e)),this.v.push(i),l=o[++s]}n!==(null==l?void 0:l.index)&&(r=P.nextNode(),n++)}return a}m(e){let i=0;for(const t of this.v)void 0!==t&&(void 0!==t.strings?(t._$AI(e,t,i),i+=t.strings.length-2):t._$AI(e[i])),i++}}class H{constructor(e,i,t,o){var a;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=t,this.options=o,this._$Cg=null===(a=null==o?void 0:o.isConnected)||void 0===a||a}get _$AU(){var e,i;return null!==(i=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===e.nodeType&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=I(this,e,i),y(e)?e===T||null==e||""===e?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==B&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):(e=>{var i;return $(e)||"function"==typeof(null===(i=e)||void 0===i?void 0:i[Symbol.iterator])})(e)?this.S(e):this.$(e)}M(e,i=this._$AB){return this._$AA.parentNode.insertBefore(e,i)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==T&&y(this._$AH)?this._$AA.nextSibling.data=e:this.k(w.createTextNode(e)),this._$AH=e}T(e){var i;const{values:t,_$litType$:o}=e,a="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=O.createElement(o.h,this.options)),o);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===a)this._$AH.m(t);else{const e=new G(a,this),i=e.p(this.options);e.m(t),this.k(i),this._$AH=e}}_$AC(e){let i=j.get(e.strings);return void 0===i&&j.set(e.strings,i=new O(e)),i}S(e){$(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let t,o=0;for(const a of e)o===i.length?i.push(t=new H(this.M(x()),this.M(x()),this,this.options)):t=i[o],t._$AI(a),o++;o<i.length&&(this._$AR(t&&t._$AB.nextSibling,o),i.length=o)}_$AR(e=this._$AA.nextSibling,i){var t;for(null===(t=this._$AP)||void 0===t||t.call(this,!1,!0,i);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var i;void 0===this._$AM&&(this._$Cg=e,null===(i=this._$AP)||void 0===i||i.call(this,e))}}class M{constructor(e,i,t,o,a){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=i,this._$AM=o,this.options=a,t.length>2||""!==t[0]||""!==t[1]?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,i=this,t,o){const a=this.strings;let r=!1;if(void 0===a)e=I(this,e,i,0),r=!y(e)||e!==this._$AH&&e!==B,r&&(this._$AH=e);else{const o=e;let n,s;for(e=a[0],n=0;n<a.length-1;n++)s=I(this,o[t+n],i,n),s===B&&(s=this._$AH[n]),r||(r=!y(s)||s!==this._$AH[n]),s===T?e=T:e!==T&&(e+=(null!=s?s:"")+a[n+1]),this._$AH[n]=s}r&&!o&&this.C(e)}C(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class N extends M{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===T?void 0:e}}const R=f?f.emptyScript:"";class U extends M{constructor(){super(...arguments),this.type=4}C(e){e&&e!==T?this.element.setAttribute(this.name,R):this.element.removeAttribute(this.name)}}class q extends M{constructor(e,i,t,o,a){super(e,i,t,o,a),this.type=5}_$AI(e,i=this){var t;if((e=null!==(t=I(this,e,i,0))&&void 0!==t?t:T)===B)return;const o=this._$AH,a=e===T&&o!==T||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==T&&(o===T||a);a&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var i,t;"function"==typeof this._$AH?this._$AH.call(null!==(t=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==t?t:this.element,e):this._$AH.handleEvent(e)}}class V{constructor(e,i,t){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}}const W=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Y,Z;null==W||W(O,H),(null!==(h=globalThis.litHtmlVersions)&&void 0!==h?h:globalThis.litHtmlVersions=[]).push("2.2.3");class X extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,i;const t=super.createRenderRoot();return null!==(e=(i=this.renderOptions).renderBefore)&&void 0!==e||(i.renderBefore=t.firstChild),t}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,i,t)=>{var o,a;const r=null!==(o=null==t?void 0:t.renderBefore)&&void 0!==o?o:i;let n=r._$litPart$;if(void 0===n){const e=null!==(a=null==t?void 0:t.renderBefore)&&void 0!==a?a:null;r._$litPart$=n=new H(i.insertBefore(x(),e),e,void 0,null!=t?t:{})}return n._$AI(e),n})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return B}}X.finalized=!0,X._$litElement$=!0,null===(Y=globalThis.litElementHydrateSupport)||void 0===Y||Y.call(globalThis,{LitElement:X});const K=globalThis.litElementPolyfillSupport;null==K||K({LitElement:X}),(null!==(Z=globalThis.litElementVersions)&&void 0!==Z?Z:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J=e=>i=>"function"==typeof i?((e,i)=>(window.customElements.define(e,i),i))(e,i):((e,i)=>{const{kind:t,elements:o}=i;return{kind:t,elements:o,finisher(i){window.customElements.define(e,i)}}})(e,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Q=(e,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(t){t.createProperty(i.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(t){t.createProperty(i.key,e)}};function ee(e){return(i,t)=>void 0!==t?((e,i,t)=>{i.constructor.createProperty(t,e)})(e,i,t):Q(e,i)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var ie;null===(ie=window.HTMLSlotElement)||void 0===ie||ie.prototype.assignedElements;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te=Symbol.for(""),oe=e=>{var i,t;if((null===(i=e)||void 0===i?void 0:i.r)===te)return null===(t=e)||void 0===t?void 0:t._$litStatic$},ae=e=>({_$litStatic$:e,r:te}),re=new Map,ne=(e=>(i,...t)=>{const o=t.length;let a,r;const n=[],s=[];let l,d=0,c=!1;for(;d<o;){for(l=i[d];d<o&&void 0!==(r=t[d],a=oe(r));)l+=a+i[++d],c=!0;s.push(r),n.push(l),d++}if(d===o&&n.push(i[o]),c){const e=n.join("$$lit$$");void 0===(i=re.get(e))&&(n.raw=n,re.set(e,i=n)),t=s}return e(i,...t)})(D),se=2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class le extends class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,t){this._$Ct=e,this._$AM=i,this._$Ci=t}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}}{constructor(e){if(super(e),this.it=T,e.type!==se)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===T||null==e)return this.ft=void 0,this.it=e;if(e===B)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const i=[e];return i.raw=i,this.ft={_$litType$:this.constructor.resultType,strings:i,values:[]}}}le.directiveName="unsafeHTML",le.resultType=1;const de=(e=>(...i)=>({_$litDirective$:e,values:i}))(le),ce=a`#1FC2A7`,be=a`#4cceb9`,me=a`#199b86`,ue=a`#4FB3D9`,he=a`#2D3E50`,fe=a`#576573`;a`#FFC000`,a`#B4CE82`;const pe=a`#f0f5e6`;a`#C21F3A`;const ge=a`#3A3A3A`,ve=a`#FEFEFE`;a`#ECEBEB`;const ke=a`
/**
* Calculate the contrast ratio between two colors.
* See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
*/
/**
* Determine whether to use dark or light text on top of given color.
* Returns black for dark text and white for light text.
*/
/**
* sets the elements color
*/
.is-white {
  color: white !important;
}

.is-black {
  color: black !important;
}

.is-mint {
  color: #1fc2a7 !important;
}

.is-mint-darker-10 {
  color: #1caf96 !important;
}

.is-mint-darker-20 {
  color: #199b86 !important;
}

.is-mint-darker-30 {
  color: #168875 !important;
}

.is-mint-darker-40 {
  color: #137464 !important;
}

.is-mint-darker-50 {
  color: #106154 !important;
}

.is-mint-darker-60 {
  color: #0c4e43 !important;
}

.is-mint-darker-70 {
  color: #093a32 !important;
}

.is-mint-darker-80 {
  color: #062721 !important;
}

.is-mint-darker-90 {
  color: #031311 !important;
}

.is-mint-lighter-10 {
  color: #35c8b0 !important;
}

.is-mint-lighter-20 {
  color: #4cceb9 !important;
}

.is-mint-lighter-30 {
  color: #62d4c1 !important;
}

.is-mint-lighter-40 {
  color: #79daca !important;
}

.is-mint-lighter-50 {
  color: #8fe1d3 !important;
}

.is-mint-lighter-60 {
  color: #a5e7dc !important;
}

.is-mint-lighter-70 {
  color: #bcede5 !important;
}

.is-mint-lighter-80 {
  color: #d2f3ed !important;
}

.is-mint-lighter-90 {
  color: #e9f9f6 !important;
}

.is-lightblue {
  color: #4FB3D9 !important;
}

.is-lightblue-darker-10 {
  color: #47a1c3 !important;
}

.is-lightblue-darker-20 {
  color: #3f8fae !important;
}

.is-lightblue-darker-30 {
  color: #377d98 !important;
}

.is-lightblue-darker-40 {
  color: #2f6b82 !important;
}

.is-lightblue-darker-50 {
  color: #285a6d !important;
}

.is-lightblue-darker-60 {
  color: #204857 !important;
}

.is-lightblue-darker-70 {
  color: #183641 !important;
}

.is-lightblue-darker-80 {
  color: #081216 !important;
}

.is-lightblue-darker-80 {
  color: #081216 !important;
}

.is-lightblue-lighter-10 {
  color: #61bbdd !important;
}

.is-lightblue-lighter-20 {
  color: #72c2e1 !important;
}

.is-lightblue-lighter-30 {
  color: #84cae4 !important;
}

.is-lightblue-lighter-40 {
  color: #95d1e8 !important;
}

.is-lightblue-lighter-50 {
  color: #a7d9ec !important;
}

.is-lightblue-lighter-60 {
  color: #b9e1f0 !important;
}

.is-lightblue-lighter-70 {
  color: #cae8f4 !important;
}

.is-lightblue-lighter-80 {
  color: #dcf0f7 !important;
}

.is-lightblue-lighter-90 {
  color: #edf7fb !important;
}

.is-darkblue {
  color: #2D3E50 !important;
}

.is-darkblue-darker-10 {
  color: #293848 !important;
}

.is-darkblue-darker-20 {
  color: #243240 !important;
}

.is-darkblue-darker-30 {
  color: #1f2b38 !important;
}

.is-darkblue-darker-40 {
  color: #1b2530 !important;
}

.is-darkblue-darker-50 {
  color: #171f28 !important;
}

.is-darkblue-darker-60 {
  color: #121920 !important;
}

.is-darkblue-darker-70 {
  color: #0d1318 !important;
}

.is-darkblue-darker-80 {
  color: #090c10 !important;
}

.is-darkblue-darker-90 {
  color: #040608 !important;
}

.is-darkblue-lighter-10 {
  color: #425162 !important;
}

.is-darkblue-lighter-20 {
  color: #576573 !important;
}

.is-darkblue-lighter-30 {
  color: #6c7885 !important;
}

.is-darkblue-lighter-40 {
  color: #818b96 !important;
}

.is-darkblue-lighter-50 {
  color: #969fa8 !important;
}

.is-darkblue-lighter-60 {
  color: #abb2b9 !important;
}

.is-darkblue-lighter-70 {
  color: #c0c5cb !important;
}

.is-darkblue-lighter-80 {
  color: #d5d8dc !important;
}

.is-darkblue-lighter-90 {
  color: #eaecee !important;
}

.is-yellow {
  color: #F9CD69 !important;
}

.is-yellow-darker-10 {
  color: #e6ad00 !important;
}

.is-yellow-darker-20 {
  color: #cc9a00 !important;
}

.is-yellow-darker-30 {
  color: #b38600 !important;
}

.is-yellow-darker-40 {
  color: #997300 !important;
}

.is-yellow-darker-50 {
  color: #806000 !important;
}

.is-yellow-darker-60 {
  color: #664d00 !important;
}

.is-yellow-darker-70 {
  color: #4c3a00 !important;
}

.is-yellow-darker-80 {
  color: #332600 !important;
}

.is-yellow-darker-90 {
  color: #191300 !important;
}

.is-yellow-lighter-10 {
  color: #ffc61a !important;
}

.is-yellow-lighter-20 {
  color: #ffcd33 !important;
}

.is-yellow-lighter-30 {
  color: #ffd34d !important;
}

.is-yellow-lighter-40 {
  color: #ffd966 !important;
}

.is-yellow-lighter-50 {
  color: #ffe080 !important;
}

.is-yellow-lighter-60 {
  color: #ffe699 !important;
}

.is-yellow-lighter-70 {
  color: #ffecb3 !important;
}

.is-yellow-lighter-80 {
  color: #fff2cc !important;
}

.is-yellow-lighter-90 {
  color: #fff9e6 !important;
}

.is-olive {
  color: #b4ce82 !important;
}

.is-olive-darker-10 {
  color: #a2b975 !important;
}

.is-olive-darker-20 {
  color: #90a568 !important;
}

.is-olive-darker-30 {
  color: #7e905b !important;
}

.is-olive-darker-40 {
  color: #6c7c4e !important;
}

.is-olive-darker-50 {
  color: #5a6741 !important;
}

.is-olive-darker-60 {
  color: #485234 !important;
}

.is-olive-darker-70 {
  color: #363e27 !important;
}

.is-olive-darker-80 {
  color: #24291a !important;
}

.is-olive-darker-90 {
  color: #12150d !important;
}

.is-olive-lighter-10 {
  color: #bcd38f !important;
}

.is-olive-lighter-20 {
  color: #c3d89b !important;
}

.is-olive-lighter-30 {
  color: #cbdda8 !important;
}

.is-olive-lighter-40 {
  color: #d2e2b4 !important;
}

.is-olive-lighter-50 {
  color: #dae7c1 !important;
}

.is-olive-lighter-60 {
  color: #e1ebcd !important;
}

.is-olive-lighter-70 {
  color: #e9f0da !important;
}

.is-olive-lighter-80 {
  color: #f0f5e6 !important;
}

.is-olive-lighter-90 {
  color: #f8faf3 !important;
}

.is-red {
  color: #c21f3a !important;
}

.is-red-darker-10 {
  color: #AE1B34 !important;
}

.is-red-darker-20 {
  color: #9B182E !important;
}

.is-red-darker-30 {
  color: #871528 !important;
}

.is-red-darker-40 {
  color: #741222 !important;
}

.is-red-darker-50 {
  color: #600F1D !important;
}

.is-red-darker-60 {
  color: #4D0C17 !important;
}

.is-red-darker-70 {
  color: #3A0911 !important;
}

.is-red-darker-80 {
  color: #26060B !important;
}

.is-red-darker-90 {
  color: #130305 !important;
}

.is-red-lighter-10 {
  color: #C8354D !important;
}

.is-red-lighter-20 {
  color: #CE4B61 !important;
}

.is-red-lighter-30 {
  color: #D46275 !important;
}

.is-red-lighter-40 {
  color: #DA7888 !important;
}

.is-red-lighter-50 {
  color: #E08F9C !important;
}

.is-red-lighter-60 {
  color: #E6A5B0 !important;
}

.is-red-lighter-70 {
  color: #ECBBC3 !important;
}

.is-red-lighter-80 {
  color: #F2D2D7 !important;
}

.is-red-lighter-90 {
  color: #F8E8EB !important;
}

.has-rounded-border {
  border-radius: 6px;
}

.pt-10 {
  padding-top: 10% !important;
}

.pb-10 {
  padding-bottom: 10% !important;
}

.align-items-bottom {
  margin-top: auto;
}

.align-items-top {
  margin-bottom: auto;
}

/*! bulma.io v0.9.2 | MIT License | github.com/jgthms/bulma */
/* Bulma Utilities */
.pagination-previous,
.pagination-next,
.pagination-link,
.pagination-ellipsis, .file-cta,
.file-name, .select select, .textarea, .input, .button {
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.5em;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.5em - 1px);
  padding-left: calc(0.75em - 1px);
  padding-right: calc(0.75em - 1px);
  padding-top: calc(0.5em - 1px);
  position: relative;
  vertical-align: top;
}
.pagination-previous:focus,
.pagination-next:focus,
.pagination-link:focus,
.pagination-ellipsis:focus, .file-cta:focus,
.file-name:focus, .select select:focus, .textarea:focus, .input:focus, .button:focus, .is-focused.pagination-previous,
.is-focused.pagination-next,
.is-focused.pagination-link,
.is-focused.pagination-ellipsis, .is-focused.file-cta,
.is-focused.file-name, .select select.is-focused, .is-focused.textarea, .is-focused.input, .is-focused.button, .pagination-previous:active,
.pagination-next:active,
.pagination-link:active,
.pagination-ellipsis:active, .file-cta:active,
.file-name:active, .select select:active, .textarea:active, .input:active, .button:active, .is-active.pagination-previous,
.is-active.pagination-next,
.is-active.pagination-link,
.is-active.pagination-ellipsis, .is-active.file-cta,
.is-active.file-name, .select select.is-active, .is-active.textarea, .is-active.input, .is-active.button {
  outline: none;
}
[disabled].pagination-previous,
[disabled].pagination-next,
[disabled].pagination-link,
[disabled].pagination-ellipsis, [disabled].file-cta,
[disabled].file-name, .select select[disabled], [disabled].textarea, [disabled].input, [disabled].button, fieldset[disabled] .pagination-previous,
fieldset[disabled] .pagination-next,
fieldset[disabled] .pagination-link,
fieldset[disabled] .pagination-ellipsis, fieldset[disabled] .file-cta,
fieldset[disabled] .file-name, fieldset[disabled] .select select, .select fieldset[disabled] select, fieldset[disabled] .textarea, fieldset[disabled] .input, fieldset[disabled] .button {
  cursor: not-allowed;
}

.is-unselectable, .tabs, .pagination-previous,
.pagination-next,
.pagination-link,
.pagination-ellipsis, .breadcrumb, .file, .button {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.navbar-link:not(.is-arrowless)::after, .select:not(.is-multiple):not(.is-loading)::after {
  border: 3px solid transparent;
  border-radius: 2px;
  border-right: 0;
  border-top: 0;
  content: " ";
  display: block;
  height: 0.625em;
  margin-top: -0.4375em;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: rotate(-45deg);
  transform-origin: center;
  width: 0.625em;
}

.tabs:not(:last-child), .pagination:not(:last-child), .message:not(:last-child), .level:not(:last-child), .breadcrumb:not(:last-child), .highlight:not(:last-child), .block:not(:last-child), .title:not(:last-child),
.subtitle:not(:last-child), .table-container:not(:last-child), .table:not(:last-child), .progress:not(:last-child), .notification:not(:last-child), .content:not(:last-child), .box:not(:last-child) {
  margin-bottom: 1.5rem;
}

.modal-close, .delete {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 290486px;
  cursor: pointer;
  pointer-events: auto;
  display: inline-block;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 0;
  height: 20px;
  max-height: 20px;
  max-width: 20px;
  min-height: 20px;
  min-width: 20px;
  outline: none;
  position: relative;
  vertical-align: top;
  width: 20px;
}
.modal-close::before, .delete::before, .modal-close::after, .delete::after {
  background-color: white;
  content: "";
  display: block;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%) rotate(45deg);
  transform-origin: center center;
}
.modal-close::before, .delete::before {
  height: 2px;
  width: 50%;
}
.modal-close::after, .delete::after {
  height: 50%;
  width: 2px;
}
.modal-close:hover, .delete:hover, .modal-close:focus, .delete:focus {
  background-color: rgba(0, 0, 0, 0.3);
}
.modal-close:active, .delete:active {
  background-color: rgba(0, 0, 0, 0.4);
}
.is-small.modal-close, .is-small.delete {
  height: 16px;
  max-height: 16px;
  max-width: 16px;
  min-height: 16px;
  min-width: 16px;
  width: 16px;
}
.is-medium.modal-close, .is-medium.delete {
  height: 24px;
  max-height: 24px;
  max-width: 24px;
  min-height: 24px;
  min-width: 24px;
  width: 24px;
}
.is-large.modal-close, .is-large.delete {
  height: 32px;
  max-height: 32px;
  max-width: 32px;
  min-height: 32px;
  min-width: 32px;
  width: 32px;
}

.control.is-loading::after, .select.is-loading::after, .loader, .button.is-loading::after {
  animation: spinAround 500ms infinite linear;
  border: 2px solid #dbdbdb;
  border-radius: 290486px;
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  display: block;
  height: 1em;
  position: relative;
  width: 1em;
}

.hero-video, .is-overlay, .modal-background, .modal, .image.is-square img,
.image.is-square .has-ratio, .image.is-1by1 img,
.image.is-1by1 .has-ratio, .image.is-5by4 img,
.image.is-5by4 .has-ratio, .image.is-4by3 img,
.image.is-4by3 .has-ratio, .image.is-3by2 img,
.image.is-3by2 .has-ratio, .image.is-5by3 img,
.image.is-5by3 .has-ratio, .image.is-16by9 img,
.image.is-16by9 .has-ratio, .image.is-2by1 img,
.image.is-2by1 .has-ratio, .image.is-3by1 img,
.image.is-3by1 .has-ratio, .image.is-4by5 img,
.image.is-4by5 .has-ratio, .image.is-3by4 img,
.image.is-3by4 .has-ratio, .image.is-2by3 img,
.image.is-2by3 .has-ratio, .image.is-3by5 img,
.image.is-3by5 .has-ratio, .image.is-9by16 img,
.image.is-9by16 .has-ratio, .image.is-1by2 img,
.image.is-1by2 .has-ratio, .image.is-1by3 img,
.image.is-1by3 .has-ratio {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

/* Bulma Base */
/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

/* h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

ul {
  list-style: none;
} */

button,
input,
select,
textarea {
  margin: 0;
}

:host,
html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

img,
video {
  height: auto;
  max-width: 100%;
}

iframe {
  border: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}
td:not([align]),
th:not([align]) {
  text-align: inherit;
}

:host {
  background-color: white;
  font-size: 16px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  min-width: 300px;
  overflow-x: hidden;
  overflow-y: scroll;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%;
}

article,
aside,
figure,
footer,
header,
hgroup,
section {
  display: block;
}

:host,
body,
button,
input,
optgroup,
select,
textarea {
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}

code,
pre {
  -moz-osx-font-smoothing: auto;
  -webkit-font-smoothing: auto;
  font-family: monospace;
}

:host,
body {
  color: #4a4a4a;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
}

a {
  color: #4FB3D9;
  cursor: pointer;
  text-decoration: none;
}
a strong {
  color: currentColor;
}
a:hover {
  color: #363636;
}

code {
  background-color: whitesmoke;
  color: #801426;
  font-size: 0.875em;
  font-weight: normal;
  padding: 0.25em 0.5em 0.25em;
}

hr {
  background-color: whitesmoke;
  border: none;
  display: block;
  height: 2px;
  margin: 1.5rem 0;
}

img {
  height: auto;
  max-width: 100%;
}

input[type=checkbox],
input[type=radio] {
  vertical-align: baseline;
}

small {
  font-size: 0.875em;
}

span {
  font-style: inherit;
  font-weight: inherit;
}

strong {
  color: #363636;
  font-weight: 700;
}

fieldset {
  border: none;
}

pre {
  -webkit-overflow-scrolling: touch;
  background-color: whitesmoke;
  color: #4a4a4a;
  font-size: 0.875em;
  overflow-x: auto;
  padding: 1.25rem 1.5rem;
  white-space: pre;
  word-wrap: normal;
}
pre code {
  background-color: transparent;
  color: currentColor;
  font-size: 1em;
  padding: 0;
}

table td,
table th {
  vertical-align: top;
}
table td:not([align]),
table th:not([align]) {
  text-align: inherit;
}
table th {
  color: #363636;
}

@keyframes spinAround {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
/* Bulma Elements */
.box {
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(0, 0, 0, 0.1), 0 0px 0 1px rgba(0, 0, 0, 0.02);
  color: #4a4a4a;
  display: block;
  padding: 1.25rem;
}

a.box:hover, a.box:focus {
  box-shadow: 0 0.5em 1em -0.125em rgba(0, 0, 0, 0.1), 0 0 0 1px #4FB3D9;
}
a.box:active {
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2), 0 0 0 1px #4FB3D9;
}

.button {
  background-color: white;
  border-color: #dbdbdb;
  border-width: 1px;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.5em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(0.5em - 1px);
  text-align: center;
  white-space: nowrap;
}
.button strong {
  color: inherit;
}
.button .icon, .button .icon.is-small, .button .icon.is-medium, .button .icon.is-large {
  height: 1.5em;
  width: 1.5em;
}
.button .icon:first-child:not(:last-child) {
  margin-left: calc(-0.5em - 1px);
  margin-right: 0.25em;
}
.button .icon:last-child:not(:first-child) {
  margin-left: 0.25em;
  margin-right: calc(-0.5em - 1px);
}
.button .icon:first-child:last-child {
  margin-left: calc(-0.5em - 1px);
  margin-right: calc(-0.5em - 1px);
}
.button:hover, .button.is-hovered {
  border-color: #b5b5b5;
  color: #363636;
}
.button:focus, .button.is-focused {
  border-color: #3273dc;
  color: #363636;
}
.button:focus:not(:active), .button.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(79, 179, 217, 0.25);
}
.button:active, .button.is-active {
  border-color: #4a4a4a;
  color: #363636;
}
.button.is-text {
  background-color: transparent;
  border-color: transparent;
  color: #4a4a4a;
  text-decoration: underline;
}
.button.is-text:hover, .button.is-text.is-hovered, .button.is-text:focus, .button.is-text.is-focused {
  background-color: whitesmoke;
  color: #363636;
}
.button.is-text:active, .button.is-text.is-active {
  background-color: #e8e8e8;
  color: #363636;
}
.button.is-text[disabled], fieldset[disabled] .button.is-text {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
}
.button.is-ghost {
  background: none;
  border-color: transparent;
  color: #4FB3D9;
  text-decoration: none;
}
.button.is-ghost:hover, .button.is-ghost.is-hovered {
  color: #4FB3D9;
  text-decoration: underline;
}
.button.is-white {
  background-color: white;
  border-color: transparent;
  color: black;
}
.button.is-white:hover, .button.is-white.is-hovered {
  background-color: #f9f9f9;
  border-color: transparent;
  color: black;
}
.button.is-white:focus, .button.is-white.is-focused {
  border-color: transparent;
  color: black;
}
.button.is-white:focus:not(:active), .button.is-white.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);
}
.button.is-white:active, .button.is-white.is-active {
  background-color: #f2f2f2;
  border-color: transparent;
  color: black;
}
.button.is-white[disabled], fieldset[disabled] .button.is-white {
  background-color: white;
  border-color: transparent;
  box-shadow: none;
}
.button.is-white.is-inverted {
  background-color: black;
  color: white;
}
.button.is-white.is-inverted:hover, .button.is-white.is-inverted.is-hovered {
  background-color: black;
}
.button.is-white.is-inverted[disabled], fieldset[disabled] .button.is-white.is-inverted {
  background-color: black;
  border-color: transparent;
  box-shadow: none;
  color: white;
}
.button.is-white.is-loading::after {
  border-color: transparent transparent black black !important;
}
.button.is-white.is-outlined {
  background-color: transparent;
  border-color: white;
  color: white;
}
.button.is-white.is-outlined:hover, .button.is-white.is-outlined.is-hovered, .button.is-white.is-outlined:focus, .button.is-white.is-outlined.is-focused {
  background-color: white;
  border-color: white;
  color: black;
}
.button.is-white.is-outlined.is-loading::after {
  border-color: transparent transparent white white !important;
}
.button.is-white.is-outlined.is-loading:hover::after, .button.is-white.is-outlined.is-loading.is-hovered::after, .button.is-white.is-outlined.is-loading:focus::after, .button.is-white.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent black black !important;
}
.button.is-white.is-outlined[disabled], fieldset[disabled] .button.is-white.is-outlined {
  background-color: transparent;
  border-color: white;
  box-shadow: none;
  color: white;
}
.button.is-white.is-inverted.is-outlined {
  background-color: transparent;
  border-color: black;
  color: black;
}
.button.is-white.is-inverted.is-outlined:hover, .button.is-white.is-inverted.is-outlined.is-hovered, .button.is-white.is-inverted.is-outlined:focus, .button.is-white.is-inverted.is-outlined.is-focused {
  background-color: black;
  color: white;
}
.button.is-white.is-inverted.is-outlined.is-loading:hover::after, .button.is-white.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-white.is-inverted.is-outlined.is-loading:focus::after, .button.is-white.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent white white !important;
}
.button.is-white.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-white.is-inverted.is-outlined {
  background-color: transparent;
  border-color: black;
  box-shadow: none;
  color: black;
}
.button.is-black {
  background-color: black;
  border-color: transparent;
  color: white;
}
.button.is-black:hover, .button.is-black.is-hovered {
  background-color: black;
  border-color: transparent;
  color: white;
}
.button.is-black:focus, .button.is-black.is-focused {
  border-color: transparent;
  color: white;
}
.button.is-black:focus:not(:active), .button.is-black.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(0, 0, 0, 0.25);
}
.button.is-black:active, .button.is-black.is-active {
  background-color: black;
  border-color: transparent;
  color: white;
}
.button.is-black[disabled], fieldset[disabled] .button.is-black {
  background-color: black;
  border-color: transparent;
  box-shadow: none;
}
.button.is-black.is-inverted {
  background-color: white;
  color: black;
}
.button.is-black.is-inverted:hover, .button.is-black.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-black.is-inverted[disabled], fieldset[disabled] .button.is-black.is-inverted {
  background-color: white;
  border-color: transparent;
  box-shadow: none;
  color: black;
}
.button.is-black.is-loading::after {
  border-color: transparent transparent white white !important;
}
.button.is-black.is-outlined {
  background-color: transparent;
  border-color: black;
  color: black;
}
.button.is-black.is-outlined:hover, .button.is-black.is-outlined.is-hovered, .button.is-black.is-outlined:focus, .button.is-black.is-outlined.is-focused {
  background-color: black;
  border-color: black;
  color: white;
}
.button.is-black.is-outlined.is-loading::after {
  border-color: transparent transparent black black !important;
}
.button.is-black.is-outlined.is-loading:hover::after, .button.is-black.is-outlined.is-loading.is-hovered::after, .button.is-black.is-outlined.is-loading:focus::after, .button.is-black.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent white white !important;
}
.button.is-black.is-outlined[disabled], fieldset[disabled] .button.is-black.is-outlined {
  background-color: transparent;
  border-color: black;
  box-shadow: none;
  color: black;
}
.button.is-black.is-inverted.is-outlined {
  background-color: transparent;
  border-color: white;
  color: white;
}
.button.is-black.is-inverted.is-outlined:hover, .button.is-black.is-inverted.is-outlined.is-hovered, .button.is-black.is-inverted.is-outlined:focus, .button.is-black.is-inverted.is-outlined.is-focused {
  background-color: white;
  color: black;
}
.button.is-black.is-inverted.is-outlined.is-loading:hover::after, .button.is-black.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-black.is-inverted.is-outlined.is-loading:focus::after, .button.is-black.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent black black !important;
}
.button.is-black.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-black.is-inverted.is-outlined {
  background-color: transparent;
  border-color: white;
  box-shadow: none;
  color: white;
}
.button.is-light {
  background-color: whitesmoke;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-light:hover, .button.is-light.is-hovered {
  background-color: #eeeeee;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-light:focus, .button.is-light.is-focused {
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-light:focus:not(:active), .button.is-light.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);
}
.button.is-light:active, .button.is-light.is-active {
  background-color: #e8e8e8;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-light[disabled], fieldset[disabled] .button.is-light {
  background-color: whitesmoke;
  border-color: transparent;
  box-shadow: none;
}
.button.is-light.is-inverted {
  background-color: rgba(0, 0, 0, 0.7);
  color: whitesmoke;
}
.button.is-light.is-inverted:hover, .button.is-light.is-inverted.is-hovered {
  background-color: rgba(0, 0, 0, 0.7);
}
.button.is-light.is-inverted[disabled], fieldset[disabled] .button.is-light.is-inverted {
  background-color: rgba(0, 0, 0, 0.7);
  border-color: transparent;
  box-shadow: none;
  color: whitesmoke;
}
.button.is-light.is-loading::after {
  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;
}
.button.is-light.is-outlined {
  background-color: transparent;
  border-color: whitesmoke;
  color: whitesmoke;
}
.button.is-light.is-outlined:hover, .button.is-light.is-outlined.is-hovered, .button.is-light.is-outlined:focus, .button.is-light.is-outlined.is-focused {
  background-color: whitesmoke;
  border-color: whitesmoke;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-light.is-outlined.is-loading::after {
  border-color: transparent transparent whitesmoke whitesmoke !important;
}
.button.is-light.is-outlined.is-loading:hover::after, .button.is-light.is-outlined.is-loading.is-hovered::after, .button.is-light.is-outlined.is-loading:focus::after, .button.is-light.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;
}
.button.is-light.is-outlined[disabled], fieldset[disabled] .button.is-light.is-outlined {
  background-color: transparent;
  border-color: whitesmoke;
  box-shadow: none;
  color: whitesmoke;
}
.button.is-light.is-inverted.is-outlined {
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.7);
  color: rgba(0, 0, 0, 0.7);
}
.button.is-light.is-inverted.is-outlined:hover, .button.is-light.is-inverted.is-outlined.is-hovered, .button.is-light.is-inverted.is-outlined:focus, .button.is-light.is-inverted.is-outlined.is-focused {
  background-color: rgba(0, 0, 0, 0.7);
  color: whitesmoke;
}
.button.is-light.is-inverted.is-outlined.is-loading:hover::after, .button.is-light.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-light.is-inverted.is-outlined.is-loading:focus::after, .button.is-light.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent whitesmoke whitesmoke !important;
}
.button.is-light.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-light.is-inverted.is-outlined {
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.7);
  box-shadow: none;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-dark {
  background-color: #363636;
  border-color: transparent;
  color: #fff;
}
.button.is-dark:hover, .button.is-dark.is-hovered {
  background-color: #2f2f2f;
  border-color: transparent;
  color: #fff;
}
.button.is-dark:focus, .button.is-dark.is-focused {
  border-color: transparent;
  color: #fff;
}
.button.is-dark:focus:not(:active), .button.is-dark.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);
}
.button.is-dark:active, .button.is-dark.is-active {
  background-color: #292929;
  border-color: transparent;
  color: #fff;
}
.button.is-dark[disabled], fieldset[disabled] .button.is-dark {
  background-color: #363636;
  border-color: transparent;
  box-shadow: none;
}
.button.is-dark.is-inverted {
  background-color: #fff;
  color: #363636;
}
.button.is-dark.is-inverted:hover, .button.is-dark.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-dark.is-inverted[disabled], fieldset[disabled] .button.is-dark.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #363636;
}
.button.is-dark.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-dark.is-outlined {
  background-color: transparent;
  border-color: #363636;
  color: #363636;
}
.button.is-dark.is-outlined:hover, .button.is-dark.is-outlined.is-hovered, .button.is-dark.is-outlined:focus, .button.is-dark.is-outlined.is-focused {
  background-color: #363636;
  border-color: #363636;
  color: #fff;
}
.button.is-dark.is-outlined.is-loading::after {
  border-color: transparent transparent #363636 #363636 !important;
}
.button.is-dark.is-outlined.is-loading:hover::after, .button.is-dark.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-outlined.is-loading:focus::after, .button.is-dark.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-dark.is-outlined[disabled], fieldset[disabled] .button.is-dark.is-outlined {
  background-color: transparent;
  border-color: #363636;
  box-shadow: none;
  color: #363636;
}
.button.is-dark.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}
.button.is-dark.is-inverted.is-outlined:hover, .button.is-dark.is-inverted.is-outlined.is-hovered, .button.is-dark.is-inverted.is-outlined:focus, .button.is-dark.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #363636;
}
.button.is-dark.is-inverted.is-outlined.is-loading:hover::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-inverted.is-outlined.is-loading:focus::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #363636 #363636 !important;
}
.button.is-dark.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-dark.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}
.button.is-primary {
  background-color: ${ce};
  border-color: transparent;
  color: #fff;
}
.button.is-primary:hover, .button.is-primary.is-hovered {
  background-color: ${me};
  border-color: transparent;
  color: #fff;
}
.button.is-primary:focus, .button.is-primary.is-focused {
  border-color: transparent;
  color: #fff;
}
.button.is-primary:focus:not(:active), .button.is-primary.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);
}
.button.is-primary:active, .button.is-primary.is-active {
  background-color: #00b89c;
  border-color: transparent;
  color: #fff;
} 
.button.is-primary[disabled], fieldset[disabled] .button.is-primary {
  background-color: ${ce};
  border-color: transparent;
  box-shadow: none;
}
.button.is-primary.is-inverted {
  background-color: #fff;
  color: ${ce};
}
.button.is-primary.is-inverted:hover, .button.is-primary.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-primary.is-inverted[disabled], fieldset[disabled] .button.is-primary.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: ${ce};
}
.button.is-primary.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-primary.is-outlined {
  background-color: transparent;
  border-color: ${ce};
  color: ${ce};
}
.button.is-primary.is-outlined:hover, .button.is-primary.is-outlined.is-hovered, .button.is-primary.is-outlined:focus, .button.is-primary.is-outlined.is-focused {
  background-color: ${ce};
  border-color: ${ce};
  color: #fff;
}
.button.is-primary.is-outlined.is-loading::after {
  border-color: transparent transparent ${ce} ${ce} !important;
}
.button.is-primary.is-outlined.is-loading:hover::after, .button.is-primary.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-outlined.is-loading:focus::after, .button.is-primary.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-primary.is-outlined[disabled], fieldset[disabled] .button.is-primary.is-outlined {
  background-color: transparent;
  border-color: ${ce};
  box-shadow: none;
  color: ${ce};
}
.button.is-primary.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}
.button.is-primary.is-inverted.is-outlined:hover, .button.is-primary.is-inverted.is-outlined.is-hovered, .button.is-primary.is-inverted.is-outlined:focus, .button.is-primary.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: ${ce};
}
.button.is-primary.is-inverted.is-outlined.is-loading:hover::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-inverted.is-outlined.is-loading:focus::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent ${ce} ${ce} !important;
}
.button.is-primary.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-primary.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}
.button.is-primary.is-light {
  background-color: #ebfffc;
  color: #00947e;
}
.button.is-primary.is-light:hover, .button.is-primary.is-light.is-hovered {
  background-color: #defffa;
  border-color: transparent;
  color: #00947e;
}
.button.is-primary.is-light:active, .button.is-primary.is-light.is-active {
  background-color: #d1fff8;
  border-color: transparent;
  color: #00947e;
}
.button.is-link {
  background-color: #4FB3D9;
  border-color: transparent;
  color: #fff;
}
.button.is-link:hover, .button.is-link.is-hovered {
  background-color: #45aed7;
  border-color: transparent;
  color: #fff;
}
.button.is-link:focus, .button.is-link.is-focused {
  border-color: transparent;
  color: #fff;
}
.button.is-link:focus:not(:active), .button.is-link.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(79, 179, 217, 0.25);
}
.button.is-link:active, .button.is-link.is-active {
  background-color: #3aaad4;
  border-color: transparent;
  color: #fff;
}
.button.is-link[disabled], fieldset[disabled] .button.is-link {
  background-color: #4FB3D9;
  border-color: transparent;
  box-shadow: none;
}
.button.is-link.is-inverted {
  background-color: #fff;
  color: #4FB3D9;
}
.button.is-link.is-inverted:hover, .button.is-link.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-link.is-inverted[disabled], fieldset[disabled] .button.is-link.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #4FB3D9;
}
.button.is-link.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-link.is-outlined {
  background-color: transparent;
  border-color: #4FB3D9;
  color: #4FB3D9;
}
.button.is-link.is-outlined:hover, .button.is-link.is-outlined.is-hovered, .button.is-link.is-outlined:focus, .button.is-link.is-outlined.is-focused {
  background-color: #4FB3D9;
  border-color: #4FB3D9;
  color: #fff;
}
.button.is-link.is-outlined.is-loading::after {
  border-color: transparent transparent #4FB3D9 #4FB3D9 !important;
}
.button.is-link.is-outlined.is-loading:hover::after, .button.is-link.is-outlined.is-loading.is-hovered::after, .button.is-link.is-outlined.is-loading:focus::after, .button.is-link.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-link.is-outlined[disabled], fieldset[disabled] .button.is-link.is-outlined {
  background-color: transparent;
  border-color: #4FB3D9;
  box-shadow: none;
  color: #4FB3D9;
}
.button.is-link.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}
.button.is-link.is-inverted.is-outlined:hover, .button.is-link.is-inverted.is-outlined.is-hovered, .button.is-link.is-inverted.is-outlined:focus, .button.is-link.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #4FB3D9;
}
.button.is-link.is-inverted.is-outlined.is-loading:hover::after, .button.is-link.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-link.is-inverted.is-outlined.is-loading:focus::after, .button.is-link.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #4FB3D9 #4FB3D9 !important;
}
.button.is-link.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-link.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}
.button.is-link.is-light {
  background-color: #eef8fb;
  color: #1e6d8a;
}
.button.is-link.is-light:hover, .button.is-link.is-light.is-hovered {
  background-color: #e4f3f9;
  border-color: transparent;
  color: #1e6d8a;
}
.button.is-link.is-light:active, .button.is-link.is-light.is-active {
  background-color: #d9eff7;
  border-color: transparent;
  color: #1e6d8a;
}
.button.is-info {
  background-color: #3298dc;
  border-color: transparent;
  color: #fff;
}
.button.is-info:hover, .button.is-info.is-hovered {
  background-color: #2793da;
  border-color: transparent;
  color: #fff;
}
.button.is-info:focus, .button.is-info.is-focused {
  border-color: transparent;
  color: #fff;
}
.button.is-info:focus:not(:active), .button.is-info.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(50, 152, 220, 0.25);
}
.button.is-info:active, .button.is-info.is-active {
  background-color: #238cd1;
  border-color: transparent;
  color: #fff;
}
.button.is-info[disabled], fieldset[disabled] .button.is-info {
  background-color: #3298dc;
  border-color: transparent;
  box-shadow: none;
}
.button.is-info.is-inverted {
  background-color: #fff;
  color: #3298dc;
}
.button.is-info.is-inverted:hover, .button.is-info.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-info.is-inverted[disabled], fieldset[disabled] .button.is-info.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #3298dc;
}
.button.is-info.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-info.is-outlined {
  background-color: transparent;
  border-color: #3298dc;
  color: #3298dc;
}
.button.is-info.is-outlined:hover, .button.is-info.is-outlined.is-hovered, .button.is-info.is-outlined:focus, .button.is-info.is-outlined.is-focused {
  background-color: #3298dc;
  border-color: #3298dc;
  color: #fff;
}
.button.is-info.is-outlined.is-loading::after {
  border-color: transparent transparent #3298dc #3298dc !important;
}
.button.is-info.is-outlined.is-loading:hover::after, .button.is-info.is-outlined.is-loading.is-hovered::after, .button.is-info.is-outlined.is-loading:focus::after, .button.is-info.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-info.is-outlined[disabled], fieldset[disabled] .button.is-info.is-outlined {
  background-color: transparent;
  border-color: #3298dc;
  box-shadow: none;
  color: #3298dc;
}
.button.is-info.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}
.button.is-info.is-inverted.is-outlined:hover, .button.is-info.is-inverted.is-outlined.is-hovered, .button.is-info.is-inverted.is-outlined:focus, .button.is-info.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #3298dc;
}
.button.is-info.is-inverted.is-outlined.is-loading:hover::after, .button.is-info.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-info.is-inverted.is-outlined.is-loading:focus::after, .button.is-info.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #3298dc #3298dc !important;
}
.button.is-info.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-info.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}
.button.is-info.is-light {
  background-color: #eef6fc;
  color: #1d72aa;
}
.button.is-info.is-light:hover, .button.is-info.is-light.is-hovered {
  background-color: #e3f1fa;
  border-color: transparent;
  color: #1d72aa;
}
.button.is-info.is-light:active, .button.is-info.is-light.is-active {
  background-color: #d8ebf8;
  border-color: transparent;
  color: #1d72aa;
}
.button.is-success {
  background-color: #48c774;
  border-color: transparent;
  color: #fff;
}
.button.is-success:hover, .button.is-success.is-hovered {
  background-color: #3ec46d;
  border-color: transparent;
  color: #fff;
}
.button.is-success:focus, .button.is-success.is-focused {
  border-color: transparent;
  color: #fff;
}
.button.is-success:focus:not(:active), .button.is-success.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(72, 199, 116, 0.25);
}
.button.is-success:active, .button.is-success.is-active {
  background-color: #3abb67;
  border-color: transparent;
  color: #fff;
}
.button.is-success[disabled], fieldset[disabled] .button.is-success {
  background-color: #48c774;
  border-color: transparent;
  box-shadow: none;
}
.button.is-success.is-inverted {
  background-color: #fff;
  color: #48c774;
}
.button.is-success.is-inverted:hover, .button.is-success.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-success.is-inverted[disabled], fieldset[disabled] .button.is-success.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #48c774;
}
.button.is-success.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-success.is-outlined {
  background-color: transparent;
  border-color: #48c774;
  color: #48c774;
}
.button.is-success.is-outlined:hover, .button.is-success.is-outlined.is-hovered, .button.is-success.is-outlined:focus, .button.is-success.is-outlined.is-focused {
  background-color: #48c774;
  border-color: #48c774;
  color: #fff;
}
.button.is-success.is-outlined.is-loading::after {
  border-color: transparent transparent #48c774 #48c774 !important;
}
.button.is-success.is-outlined.is-loading:hover::after, .button.is-success.is-outlined.is-loading.is-hovered::after, .button.is-success.is-outlined.is-loading:focus::after, .button.is-success.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-success.is-outlined[disabled], fieldset[disabled] .button.is-success.is-outlined {
  background-color: transparent;
  border-color: #48c774;
  box-shadow: none;
  color: #48c774;
}
.button.is-success.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}
.button.is-success.is-inverted.is-outlined:hover, .button.is-success.is-inverted.is-outlined.is-hovered, .button.is-success.is-inverted.is-outlined:focus, .button.is-success.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #48c774;
}
.button.is-success.is-inverted.is-outlined.is-loading:hover::after, .button.is-success.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-success.is-inverted.is-outlined.is-loading:focus::after, .button.is-success.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #48c774 #48c774 !important;
}
.button.is-success.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-success.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}
.button.is-success.is-light {
  background-color: #effaf3;
  color: #257942;
}
.button.is-success.is-light:hover, .button.is-success.is-light.is-hovered {
  background-color: #e6f7ec;
  border-color: transparent;
  color: #257942;
}
.button.is-success.is-light:active, .button.is-success.is-light.is-active {
  background-color: #dcf4e4;
  border-color: transparent;
  color: #257942;
}
.button.is-warning {
  background-color: #F9CD69;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning:hover, .button.is-warning.is-hovered {
  background-color: #f9c95d;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning:focus, .button.is-warning.is-focused {
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning:focus:not(:active), .button.is-warning.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(249, 205, 105, 0.25);
}
.button.is-warning:active, .button.is-warning.is-active {
  background-color: #f8c550;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning[disabled], fieldset[disabled] .button.is-warning {
  background-color: #F9CD69;
  border-color: transparent;
  box-shadow: none;
}
.button.is-warning.is-inverted {
  background-color: rgba(0, 0, 0, 0.7);
  color: #F9CD69;
}
.button.is-warning.is-inverted:hover, .button.is-warning.is-inverted.is-hovered {
  background-color: rgba(0, 0, 0, 0.7);
}
.button.is-warning.is-inverted[disabled], fieldset[disabled] .button.is-warning.is-inverted {
  background-color: rgba(0, 0, 0, 0.7);
  border-color: transparent;
  box-shadow: none;
  color: #F9CD69;
}
.button.is-warning.is-loading::after {
  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;
}
.button.is-warning.is-outlined {
  background-color: transparent;
  border-color: #F9CD69;
  color: #F9CD69;
}
.button.is-warning.is-outlined:hover, .button.is-warning.is-outlined.is-hovered, .button.is-warning.is-outlined:focus, .button.is-warning.is-outlined.is-focused {
  background-color: #F9CD69;
  border-color: #F9CD69;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning.is-outlined.is-loading::after {
  border-color: transparent transparent #F9CD69 #F9CD69 !important;
}
.button.is-warning.is-outlined.is-loading:hover::after, .button.is-warning.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-outlined.is-loading:focus::after, .button.is-warning.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;
}
.button.is-warning.is-outlined[disabled], fieldset[disabled] .button.is-warning.is-outlined {
  background-color: transparent;
  border-color: #F9CD69;
  box-shadow: none;
  color: #F9CD69;
}
.button.is-warning.is-inverted.is-outlined {
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.7);
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning.is-inverted.is-outlined:hover, .button.is-warning.is-inverted.is-outlined.is-hovered, .button.is-warning.is-inverted.is-outlined:focus, .button.is-warning.is-inverted.is-outlined.is-focused {
  background-color: rgba(0, 0, 0, 0.7);
  color: #F9CD69;
}
.button.is-warning.is-inverted.is-outlined.is-loading:hover::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-inverted.is-outlined.is-loading:focus::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #F9CD69 #F9CD69 !important;
}
.button.is-warning.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-warning.is-inverted.is-outlined {
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.7);
  box-shadow: none;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning.is-light {
  background-color: #fef8eb;
  color: #8e6406;
}
.button.is-warning.is-light:hover, .button.is-warning.is-light.is-hovered {
  background-color: #fef4df;
  border-color: transparent;
  color: #8e6406;
}
.button.is-warning.is-light:active, .button.is-warning.is-light.is-active {
  background-color: #fdf0d3;
  border-color: transparent;
  color: #8e6406;
}
.button.is-danger {
  background-color: #c21f3a;
  border-color: transparent;
  color: #fff;
}
.button.is-danger:hover, .button.is-danger.is-hovered {
  background-color: #b71d37;
  border-color: transparent;
  color: #fff;
}
.button.is-danger:focus, .button.is-danger.is-focused {
  border-color: transparent;
  color: #fff;
}
.button.is-danger:focus:not(:active), .button.is-danger.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(194, 31, 58, 0.25);
}
.button.is-danger:active, .button.is-danger.is-active {
  background-color: #ac1b33;
  border-color: transparent;
  color: #fff;
}
.button.is-danger[disabled], fieldset[disabled] .button.is-danger {
  background-color: #c21f3a;
  border-color: transparent;
  box-shadow: none;
}
.button.is-danger.is-inverted {
  background-color: #fff;
  color: #c21f3a;
}
.button.is-danger.is-inverted:hover, .button.is-danger.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-danger.is-inverted[disabled], fieldset[disabled] .button.is-danger.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #c21f3a;
}
.button.is-danger.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-danger.is-outlined {
  background-color: transparent;
  border-color: #c21f3a;
  color: #c21f3a;
}
.button.is-danger.is-outlined:hover, .button.is-danger.is-outlined.is-hovered, .button.is-danger.is-outlined:focus, .button.is-danger.is-outlined.is-focused {
  background-color: #c21f3a;
  border-color: #c21f3a;
  color: #fff;
}
.button.is-danger.is-outlined.is-loading::after {
  border-color: transparent transparent #c21f3a #c21f3a !important;
}
.button.is-danger.is-outlined.is-loading:hover::after, .button.is-danger.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-outlined.is-loading:focus::after, .button.is-danger.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-danger.is-outlined[disabled], fieldset[disabled] .button.is-danger.is-outlined {
  background-color: transparent;
  border-color: #c21f3a;
  box-shadow: none;
  color: #c21f3a;
}
.button.is-danger.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}
.button.is-danger.is-inverted.is-outlined:hover, .button.is-danger.is-inverted.is-outlined.is-hovered, .button.is-danger.is-inverted.is-outlined:focus, .button.is-danger.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #c21f3a;
}
.button.is-danger.is-inverted.is-outlined.is-loading:hover::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-inverted.is-outlined.is-loading:focus::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #c21f3a #c21f3a !important;
}
.button.is-danger.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-danger.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}
.button.is-danger.is-light {
  background-color: #fcedf0;
  color: #d72240;
}
.button.is-danger.is-light:hover, .button.is-danger.is-light.is-hovered {
  background-color: #fae2e6;
  border-color: transparent;
  color: #d72240;
}
.button.is-danger.is-light:active, .button.is-danger.is-light.is-active {
  background-color: #f9d7dd;
  border-color: transparent;
  color: #d72240;
}
.button.is-small {
  font-size: 0.75rem;
}
.button.is-small:not(.is-rounded) {
  border-radius: 2px;
}
.button.is-normal {
  font-size: 1rem;
}
.button.is-medium {
  font-size: 1.25rem;
}
.button.is-large {
  font-size: 1.5rem;
}
.button[disabled], fieldset[disabled] .button {
  background-color: white;
  border-color: #dbdbdb;
  box-shadow: none;
  opacity: 0.5;
}
.button.is-fullwidth {
  display: flex;
  width: 100%;
}
.button.is-loading {
  color: transparent !important;
  pointer-events: none;
}
.button.is-loading::after {
  position: absolute;
  left: calc(50% - (1em / 2));
  top: calc(50% - (1em / 2));
  position: absolute !important;
}
.button.is-static {
  background-color: whitesmoke;
  border-color: #dbdbdb;
  color: #7a7a7a;
  box-shadow: none;
  pointer-events: none;
}
.button.is-rounded {
  border-radius: 290486px;
  padding-left: calc(1em + 0.25em);
  padding-right: calc(1em + 0.25em);
}

.buttons {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.buttons .button {
  margin-bottom: 0.5rem;
}
.buttons .button:not(:last-child):not(.is-fullwidth) {
  margin-right: 0.5rem;
}
.buttons:last-child {
  margin-bottom: -0.5rem;
}
.buttons:not(:last-child) {
  margin-bottom: 1rem;
}
.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large) {
  font-size: 0.75rem;
}
.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large):not(.is-rounded) {
  border-radius: 2px;
}
.buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large) {
  font-size: 1.25rem;
}
.buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium) {
  font-size: 1.5rem;
}
.buttons.has-addons .button:not(:first-child) {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.buttons.has-addons .button:not(:last-child) {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  margin-right: -1px;
}
.buttons.has-addons .button:last-child {
  margin-right: 0;
}
.buttons.has-addons .button:hover, .buttons.has-addons .button.is-hovered {
  z-index: 2;
}
.buttons.has-addons .button:focus, .buttons.has-addons .button.is-focused, .buttons.has-addons .button:active, .buttons.has-addons .button.is-active, .buttons.has-addons .button.is-selected {
  z-index: 3;
}
.buttons.has-addons .button:focus:hover, .buttons.has-addons .button.is-focused:hover, .buttons.has-addons .button:active:hover, .buttons.has-addons .button.is-active:hover, .buttons.has-addons .button.is-selected:hover {
  z-index: 4;
}
.buttons.has-addons .button.is-expanded {
  flex-grow: 1;
  flex-shrink: 1;
}
.buttons.is-centered {
  justify-content: center;
}
.buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth) {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}
.buttons.is-right {
  justify-content: flex-end;
}
.buttons.is-right:not(.has-addons) .button:not(.is-fullwidth) {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

.container {
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
}
.container.is-fluid {
  max-width: none !important;
  padding-left: 32px;
  padding-right: 32px;
  width: 100%;
}
@media screen and (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}
@media screen and (max-width: 1215px) {
  .container.is-widescreen:not(.is-max-desktop) {
    max-width: 1152px;
  }
}
@media screen and (max-width: 1407px) {
  .container.is-fullhd:not(.is-max-desktop):not(.is-max-widescreen) {
    max-width: 1344px;
  }
}
@media screen and (min-width: 1216px) {
  .container:not(.is-max-desktop) {
    max-width: 1152px;
  }
}
@media screen and (min-width: 1408px) {
  .container:not(.is-max-desktop):not(.is-max-widescreen) {
    max-width: 1344px;
  }
}

.content li + li {
  margin-top: 0.25em;
}
.content p:not(:last-child),
.content dl:not(:last-child),
.content ol:not(:last-child),
.content ul:not(:last-child),
.content blockquote:not(:last-child),
.content pre:not(:last-child),
.content table:not(:last-child) {
  margin-bottom: 1em;
}
.content h1,
.content h2,
.content h3,
.content h4,
.content h5,
.content h6 {
  color: #363636;
  font-weight: 600;
  line-height: 1.125;
}
.content h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
}
.content h1:not(:first-child) {
  margin-top: 1em;
}
.content h2 {
  font-size: 1.75em;
  margin-bottom: 0.5714em;
}
.content h2:not(:first-child) {
  margin-top: 1.1428em;
}
.content h3 {
  font-size: 1.5em;
  margin-bottom: 0.6666em;
}
.content h3:not(:first-child) {
  margin-top: 1.3333em;
}
.content h4 {
  font-size: 1.25em;
  margin-bottom: 0.8em;
}
.content h5 {
  font-size: 1.125em;
  margin-bottom: 0.8888em;
}
.content h6 {
  font-size: 1em;
  margin-bottom: 1em;
}
.content blockquote {
  background-color: whitesmoke;
  border-left: 5px solid #dbdbdb;
  padding: 1.25em 1.5em;
}
.content ol {
  list-style-position: outside;
  margin-left: 2em;
  margin-top: 1em;
}
.content ol:not([type]) {
  list-style-type: decimal;
}
.content ol:not([type]).is-lower-alpha {
  list-style-type: lower-alpha;
}
.content ol:not([type]).is-lower-roman {
  list-style-type: lower-roman;
}
.content ol:not([type]).is-upper-alpha {
  list-style-type: upper-alpha;
}
.content ol:not([type]).is-upper-roman {
  list-style-type: upper-roman;
}
.content ul {
  list-style: disc outside;
  margin-left: 2em;
  margin-top: 1em;
}
.content ul ul {
  list-style-type: circle;
  margin-top: 0.5em;
}
.content ul ul ul {
  list-style-type: square;
}
.content dd {
  margin-left: 2em;
}
.content figure {
  margin-left: 2em;
  margin-right: 2em;
  text-align: center;
}
.content figure:not(:first-child) {
  margin-top: 2em;
}
.content figure:not(:last-child) {
  margin-bottom: 2em;
}
.content figure img {
  display: inline-block;
}
.content figure figcaption {
  font-style: italic;
}
.content pre {
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
  padding: 1.25em 1.5em;
  white-space: pre;
  word-wrap: normal;
}
.content sup,
.content sub {
  font-size: 75%;
}
.content table {
  width: 100%;
}
.content table td,
.content table th {
  border: 1px solid #dbdbdb;
  border-width: 0 0 1px;
  padding: 0.5em 0.75em;
  vertical-align: top;
}
.content table th {
  color: #363636;
}
.content table th:not([align]) {
  text-align: inherit;
}
.content table thead td,
.content table thead th {
  border-width: 0 0 2px;
  color: #363636;
}
.content table tfoot td,
.content table tfoot th {
  border-width: 2px 0 0;
  color: #363636;
}
.content table tbody tr:last-child td,
.content table tbody tr:last-child th {
  border-bottom-width: 0;
}
.content .tabs li + li {
  margin-top: 0;
}
.content.is-small {
  font-size: 0.75rem;
}
.content.is-medium {
  font-size: 1.25rem;
}
.content.is-large {
  font-size: 1.5rem;
}

.icon {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  height: 1.5rem;
  width: 1.5rem;
}
.icon.is-small {
  height: 1rem;
  width: 1rem;
}
.icon.is-medium {
  height: 2rem;
  width: 2rem;
}
.icon.is-large {
  height: 3rem;
  width: 3rem;
}

.icon-text {
  align-items: flex-start;
  color: inherit;
  display: inline-flex;
  flex-wrap: wrap;
  line-height: 1.5rem;
  vertical-align: top;
}
.icon-text .icon {
  flex-grow: 0;
  flex-shrink: 0;
}
.icon-text .icon:not(:last-child) {
  margin-right: 0.25em;
}
.icon-text .icon:not(:first-child) {
  margin-left: 0.25em;
}

div.icon-text {
  display: flex;
}

.image {
  display: block;
  position: relative;
}
.image img {
  display: block;
  height: auto;
  width: 100%;
}
.image img.is-rounded {
  border-radius: 290486px;
}
.image.is-fullwidth {
  width: 100%;
}
.image.is-square img,
.image.is-square .has-ratio, .image.is-1by1 img,
.image.is-1by1 .has-ratio, .image.is-5by4 img,
.image.is-5by4 .has-ratio, .image.is-4by3 img,
.image.is-4by3 .has-ratio, .image.is-3by2 img,
.image.is-3by2 .has-ratio, .image.is-5by3 img,
.image.is-5by3 .has-ratio, .image.is-16by9 img,
.image.is-16by9 .has-ratio, .image.is-2by1 img,
.image.is-2by1 .has-ratio, .image.is-3by1 img,
.image.is-3by1 .has-ratio, .image.is-4by5 img,
.image.is-4by5 .has-ratio, .image.is-3by4 img,
.image.is-3by4 .has-ratio, .image.is-2by3 img,
.image.is-2by3 .has-ratio, .image.is-3by5 img,
.image.is-3by5 .has-ratio, .image.is-9by16 img,
.image.is-9by16 .has-ratio, .image.is-1by2 img,
.image.is-1by2 .has-ratio, .image.is-1by3 img,
.image.is-1by3 .has-ratio {
  height: 100%;
  width: 100%;
}
.image.is-square, .image.is-1by1 {
  padding-top: 100%;
}
.image.is-5by4 {
  padding-top: 80%;
}
.image.is-4by3 {
  padding-top: 75%;
}
.image.is-3by2 {
  padding-top: 66.6666%;
}
.image.is-5by3 {
  padding-top: 60%;
}
.image.is-16by9 {
  padding-top: 56.25%;
}
.image.is-2by1 {
  padding-top: 50%;
}
.image.is-3by1 {
  padding-top: 33.3333%;
}
.image.is-4by5 {
  padding-top: 125%;
}
.image.is-3by4 {
  padding-top: 133.3333%;
}
.image.is-2by3 {
  padding-top: 150%;
}
.image.is-3by5 {
  padding-top: 166.6666%;
}
.image.is-9by16 {
  padding-top: 177.7777%;
}
.image.is-1by2 {
  padding-top: 200%;
}
.image.is-1by3 {
  padding-top: 300%;
}
.image.is-16x16 {
  height: 16px;
  width: 16px;
}
.image.is-24x24 {
  height: 24px;
  width: 24px;
}
.image.is-32x32 {
  height: 32px;
  width: 32px;
}
.image.is-48x48 {
  height: 48px;
  width: 48px;
}
.image.is-64x64 {
  height: 64px;
  width: 64px;
}
.image.is-96x96 {
  height: 96px;
  width: 96px;
}
.image.is-128x128 {
  height: 128px;
  width: 128px;
}

.notification {
  background-color: whitesmoke;
  border-radius: 4px;
  position: relative;
  padding: 1.25rem 2.5rem 1.25rem 1.5rem;
}
.notification a:not(.button):not(.dropdown-item) {
  color: currentColor;
  text-decoration: underline;
}
.notification strong {
  color: currentColor;
}
.notification code,
.notification pre {
  background: white;
}
.notification pre code {
  background: transparent;
}
.notification > .delete {
  right: 0.5rem;
  position: absolute;
  top: 0.5rem;
}
.notification .title,
.notification .subtitle,
.notification .content {
  color: currentColor;
}
.notification.is-white {
  background-color: white;
  color: black;
}
.notification.is-black {
  background-color: black;
  color: white;
}
.notification.is-light {
  background-color: whitesmoke;
  color: rgba(0, 0, 0, 0.7);
}
.notification.is-dark {
  background-color: #363636;
  color: #fff;
}
.notification.is-primary {
  background-color: ${ce};
  color: #fff;
}
.notification.is-primary.is-light {
  background-color: #ebfffc;
  color: #00947e;
}
.notification.is-link {
  background-color: #4FB3D9;
  color: #fff;
}
.notification.is-link.is-light {
  background-color: #eef8fb;
  color: #1e6d8a;
}
.notification.is-info {
  background-color: #3298dc;
  color: #fff;
}
.notification.is-info.is-light {
  background-color: #eef6fc;
  color: #1d72aa;
}
.notification.is-success {
  background-color: #48c774;
  color: #fff;
}
.notification.is-success.is-light {
  background-color: #effaf3;
  color: #257942;
}
.notification.is-warning {
  background-color: #F9CD69;
  color: rgba(0, 0, 0, 0.7);
}
.notification.is-warning.is-light {
  background-color: #fef8eb;
  color: #8e6406;
}
.notification.is-danger {
  background-color: #c21f3a;
  color: #fff;
}
.notification.is-danger.is-light {
  background-color: #fcedf0;
  color: #d72240;
}

.progress {
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  border-radius: 290486px;
  display: block;
  height: 1rem;
  overflow: hidden;
  padding: 0;
  width: 100%;
}
.progress::-webkit-progress-bar {
  background-color: #ededed;
}
.progress::-webkit-progress-value {
  background-color: #4a4a4a;
}
.progress::-moz-progress-bar {
  background-color: #4a4a4a;
}
.progress::-ms-fill {
  background-color: #4a4a4a;
  border: none;
}
.progress.is-white::-webkit-progress-value {
  background-color: white;
}
.progress.is-white::-moz-progress-bar {
  background-color: white;
}
.progress.is-white::-ms-fill {
  background-color: white;
}
.progress.is-white:indeterminate {
  background-image: linear-gradient(to right, white 30%, #ededed 30%);
}
.progress.is-black::-webkit-progress-value {
  background-color: black;
}
.progress.is-black::-moz-progress-bar {
  background-color: black;
}
.progress.is-black::-ms-fill {
  background-color: black;
}
.progress.is-black:indeterminate {
  background-image: linear-gradient(to right, black 30%, #ededed 30%);
}
.progress.is-light::-webkit-progress-value {
  background-color: whitesmoke;
}
.progress.is-light::-moz-progress-bar {
  background-color: whitesmoke;
}
.progress.is-light::-ms-fill {
  background-color: whitesmoke;
}
.progress.is-light:indeterminate {
  background-image: linear-gradient(to right, whitesmoke 30%, #ededed 30%);
}
.progress.is-dark::-webkit-progress-value {
  background-color: #363636;
}
.progress.is-dark::-moz-progress-bar {
  background-color: #363636;
}
.progress.is-dark::-ms-fill {
  background-color: #363636;
}
.progress.is-dark:indeterminate {
  background-image: linear-gradient(to right, #363636 30%, #ededed 30%);
}
.progress.is-primary::-webkit-progress-value {
  background-color: ${ce};
}
.progress.is-primary::-moz-progress-bar {
  background-color: ${ce};
}
.progress.is-primary::-ms-fill {
  background-color: ${ce};
}
.progress.is-primary:indeterminate {
  background-image: linear-gradient(to right, ${ce} 30%, #ededed 30%);
}
.progress.is-link::-webkit-progress-value {
  background-color: #4FB3D9;
}
.progress.is-link::-moz-progress-bar {
  background-color: #4FB3D9;
}
.progress.is-link::-ms-fill {
  background-color: #4FB3D9;
}
.progress.is-link:indeterminate {
  background-image: linear-gradient(to right, #4FB3D9 30%, #ededed 30%);
}
.progress.is-info::-webkit-progress-value {
  background-color: #3298dc;
}
.progress.is-info::-moz-progress-bar {
  background-color: #3298dc;
}
.progress.is-info::-ms-fill {
  background-color: #3298dc;
}
.progress.is-info:indeterminate {
  background-image: linear-gradient(to right, #3298dc 30%, #ededed 30%);
}
.progress.is-success::-webkit-progress-value {
  background-color: #48c774;
}
.progress.is-success::-moz-progress-bar {
  background-color: #48c774;
}
.progress.is-success::-ms-fill {
  background-color: #48c774;
}
.progress.is-success:indeterminate {
  background-image: linear-gradient(to right, #48c774 30%, #ededed 30%);
}
.progress.is-warning::-webkit-progress-value {
  background-color: #F9CD69;
}
.progress.is-warning::-moz-progress-bar {
  background-color: #F9CD69;
}
.progress.is-warning::-ms-fill {
  background-color: #F9CD69;
}
.progress.is-warning:indeterminate {
  background-image: linear-gradient(to right, #F9CD69 30%, #ededed 30%);
}
.progress.is-danger::-webkit-progress-value {
  background-color: #c21f3a;
}
.progress.is-danger::-moz-progress-bar {
  background-color: #c21f3a;
}
.progress.is-danger::-ms-fill {
  background-color: #c21f3a;
}
.progress.is-danger:indeterminate {
  background-image: linear-gradient(to right, #c21f3a 30%, #ededed 30%);
}
.progress:indeterminate {
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-name: moveIndeterminate;
  animation-timing-function: linear;
  background-color: #ededed;
  background-image: linear-gradient(to right, #4a4a4a 30%, #ededed 30%);
  background-position: top left;
  background-repeat: no-repeat;
  background-size: 150% 150%;
}
.progress:indeterminate::-webkit-progress-bar {
  background-color: transparent;
}
.progress:indeterminate::-moz-progress-bar {
  background-color: transparent;
}
.progress:indeterminate::-ms-fill {
  animation-name: none;
}
.progress.is-small {
  height: 0.75rem;
}
.progress.is-medium {
  height: 1.25rem;
}
.progress.is-large {
  height: 1.5rem;
}

@keyframes moveIndeterminate {
  from {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }
}
.table {
  background-color: white;
  color: #363636;
}
.table td,
.table th {
  border: 1px solid #dbdbdb;
  border-width: 0 0 1px;
  padding: 0.5em 0.75em;
  vertical-align: top;
}
.table td.is-white,
.table th.is-white {
  background-color: white;
  border-color: white;
  color: black;
}
.table td.is-black,
.table th.is-black {
  background-color: black;
  border-color: black;
  color: white;
}
.table td.is-light,
.table th.is-light {
  background-color: whitesmoke;
  border-color: whitesmoke;
  color: rgba(0, 0, 0, 0.7);
}
.table td.is-dark,
.table th.is-dark {
  background-color: #363636;
  border-color: #363636;
  color: #fff;
}
.table td.is-primary,
.table th.is-primary {
  background-color: ${ce};
  border-color: ${ce};
  color: #fff;
}
.table td.is-link,
.table th.is-link {
  background-color: #4FB3D9;
  border-color: #4FB3D9;
  color: #fff;
}
.table td.is-info,
.table th.is-info {
  background-color: #3298dc;
  border-color: #3298dc;
  color: #fff;
}
.table td.is-success,
.table th.is-success {
  background-color: #48c774;
  border-color: #48c774;
  color: #fff;
}
.table td.is-warning,
.table th.is-warning {
  background-color: #F9CD69;
  border-color: #F9CD69;
  color: rgba(0, 0, 0, 0.7);
}
.table td.is-danger,
.table th.is-danger {
  background-color: #c21f3a;
  border-color: #c21f3a;
  color: #fff;
}
.table td.is-narrow,
.table th.is-narrow {
  white-space: nowrap;
  width: 1%;
}
.table td.is-selected,
.table th.is-selected {
  background-color: ${ce};
  color: #fff;
}
.table td.is-selected a,
.table td.is-selected strong,
.table th.is-selected a,
.table th.is-selected strong {
  color: currentColor;
}
.table td.is-vcentered,
.table th.is-vcentered {
  vertical-align: middle;
}
.table th {
  color: #363636;
}
.table th:not([align]) {
  text-align: inherit;
}
.table tr.is-selected {
  background-color: ${ce};
  color: #fff;
}
.table tr.is-selected a,
.table tr.is-selected strong {
  color: currentColor;
}
.table tr.is-selected td,
.table tr.is-selected th {
  border-color: #fff;
  color: currentColor;
}
.table thead {
  background-color: transparent;
}
.table thead td,
.table thead th {
  border-width: 0 0 2px;
  color: #363636;
}
.table tfoot {
  background-color: transparent;
}
.table tfoot td,
.table tfoot th {
  border-width: 2px 0 0;
  color: #363636;
}
.table tbody {
  background-color: transparent;
}
.table tbody tr:last-child td,
.table tbody tr:last-child th {
  border-bottom-width: 0;
}
.table.is-bordered td,
.table.is-bordered th {
  border-width: 1px;
}
.table.is-bordered tr:last-child td,
.table.is-bordered tr:last-child th {
  border-bottom-width: 1px;
}
.table.is-fullwidth {
  width: 100%;
}
.table.is-hoverable tbody tr:not(.is-selected):hover {
  background-color: #fafafa;
}
.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover {
  background-color: #fafafa;
}
.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover:nth-child(even) {
  background-color: whitesmoke;
}
.table.is-narrow td,
.table.is-narrow th {
  padding: 0.25em 0.5em;
}
.table.is-striped tbody tr:not(.is-selected):nth-child(even) {
  background-color: #fafafa;
}

.table-container {
  -webkit-overflow-scrolling: touch;
  overflow: auto;
  overflow-y: hidden;
  max-width: 100%;
}

.tags {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.tags .tag {
  margin-bottom: 0.5rem;
}
.tags .tag:not(:last-child) {
  margin-right: 0.5rem;
}
.tags:last-child {
  margin-bottom: -0.5rem;
}
.tags:not(:last-child) {
  margin-bottom: 1rem;
}
.tags.are-medium .tag:not(.is-normal):not(.is-large) {
  font-size: 1rem;
}
.tags.are-large .tag:not(.is-normal):not(.is-medium) {
  font-size: 1.25rem;
}
.tags.is-centered {
  justify-content: center;
}
.tags.is-centered .tag {
  margin-right: 0.25rem;
  margin-left: 0.25rem;
}
.tags.is-right {
  justify-content: flex-end;
}
.tags.is-right .tag:not(:first-child) {
  margin-left: 0.5rem;
}
.tags.is-right .tag:not(:last-child) {
  margin-right: 0;
}
.tags.has-addons .tag {
  margin-right: 0;
}
.tags.has-addons .tag:not(:first-child) {
  margin-left: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.tags.has-addons .tag:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.tag:not(body) {
  align-items: center;
  background-color: whitesmoke;
  border-radius: 4px;
  color: #4a4a4a;
  display: inline-flex;
  font-size: 0.75rem;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
}
.tag:not(body) .delete {
  margin-left: 0.25rem;
  margin-right: -0.375rem;
}
.tag:not(body).is-white {
  background-color: white;
  color: black;
}
.tag:not(body).is-black {
  background-color: black;
  color: white;
}
.tag:not(body).is-light {
  background-color: whitesmoke;
  color: rgba(0, 0, 0, 0.7);
}
.tag:not(body).is-dark {
  background-color: #363636;
  color: #fff;
}
.tag:not(body).is-primary {
  background-color: ${ce};
  color: #fff;
}
.tag:not(body).is-primary.is-light {
  background-color: #ebfffc;
  color: #00947e;
}
.tag:not(body).is-link {
  background-color: #4FB3D9;
  color: #fff;
}
.tag:not(body).is-link.is-light {
  background-color: #eef8fb;
  color: #1e6d8a;
}
.tag:not(body).is-info {
  background-color: #3298dc;
  color: #fff;
}
.tag:not(body).is-info.is-light {
  background-color: #eef6fc;
  color: #1d72aa;
}
.tag:not(body).is-success {
  background-color: #48c774;
  color: #fff;
}
.tag:not(body).is-success.is-light {
  background-color: #effaf3;
  color: #257942;
}
.tag:not(body).is-warning {
  background-color: #F9CD69;
  color: rgba(0, 0, 0, 0.7);
}
.tag:not(body).is-warning.is-light {
  background-color: #fef8eb;
  color: #8e6406;
}
.tag:not(body).is-danger {
  background-color: #c21f3a;
  color: #fff;
}
.tag:not(body).is-danger.is-light {
  background-color: #fcedf0;
  color: #d72240;
}
.tag:not(body).is-normal {
  font-size: 0.75rem;
}
.tag:not(body).is-medium {
  font-size: 1rem;
}
.tag:not(body).is-large {
  font-size: 1.25rem;
}
.tag:not(body) .icon:first-child:not(:last-child) {
  margin-left: -0.375em;
  margin-right: 0.1875em;
}
.tag:not(body) .icon:last-child:not(:first-child) {
  margin-left: 0.1875em;
  margin-right: -0.375em;
}
.tag:not(body) .icon:first-child:last-child {
  margin-left: -0.375em;
  margin-right: -0.375em;
}
.tag:not(body).is-delete {
  margin-left: 1px;
  padding: 0;
  position: relative;
  width: 2em;
}
.tag:not(body).is-delete::before, .tag:not(body).is-delete::after {
  background-color: currentColor;
  content: "";
  display: block;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%) rotate(45deg);
  transform-origin: center center;
}
.tag:not(body).is-delete::before {
  height: 1px;
  width: 50%;
}
.tag:not(body).is-delete::after {
  height: 50%;
  width: 1px;
}
.tag:not(body).is-delete:hover, .tag:not(body).is-delete:focus {
  background-color: #e8e8e8;
}
.tag:not(body).is-delete:active {
  background-color: #dbdbdb;
}
.tag:not(body).is-rounded {
  border-radius: 290486px;
}

a.tag:hover {
  text-decoration: underline;
}

.title,
.subtitle {
  word-break: break-word;
}
.title em,
.title span,
.subtitle em,
.subtitle span {
  font-weight: inherit;
}
.title sub,
.subtitle sub {
  font-size: 0.75em;
}
.title sup,
.subtitle sup {
  font-size: 0.75em;
}
.title .tag,
.subtitle .tag {
  vertical-align: middle;
}

.title {
  color: #363636;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.125;
}
.title strong {
  color: inherit;
  font-weight: inherit;
}
.title + .highlight {
  margin-top: -0.75rem;
}
.title:not(.is-spaced) + .subtitle {
  margin-top: -1.25rem;
}
.title.is-1 {
  font-size: 3rem;
}
.title.is-2 {
  font-size: 2.5rem;
}
.title.is-3 {
  font-size: 2rem;
}
.title.is-4 {
  font-size: 1.5rem;
}
.title.is-5 {
  font-size: 1.25rem;
}
.title.is-6 {
  font-size: 1rem;
}
.title.is-7 {
  font-size: 0.75rem;
}

.subtitle {
  color: #4a4a4a;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.25;
}
.subtitle strong {
  color: #363636;
  font-weight: 600;
}
.subtitle:not(.is-spaced) + .title {
  margin-top: -1.25rem;
}
.subtitle.is-1 {
  font-size: 3rem;
}
.subtitle.is-2 {
  font-size: 2.5rem;
}
.subtitle.is-3 {
  font-size: 2rem;
}
.subtitle.is-4 {
  font-size: 1.5rem;
}
.subtitle.is-5 {
  font-size: 1.25rem;
}
.subtitle.is-6 {
  font-size: 1rem;
}
.subtitle.is-7 {
  font-size: 0.75rem;
}

.heading {
  display: block;
  font-size: 11px;
  letter-spacing: 1px;
  margin-bottom: 5px;
  text-transform: uppercase;
}

.highlight {
  font-weight: 400;
  max-width: 100%;
  overflow: hidden;
  padding: 0;
}
.highlight pre {
  overflow: auto;
  max-width: 100%;
}

/* .number {
  align-items: center;
  background-color: whitesmoke;
  border-radius: 290486px;
  display: inline-flex;
  font-size: 1.25rem;
  height: 2em;
  justify-content: center;
  margin-right: 1.5rem;
  min-width: 2.5em;
  padding: 0.25rem 0.5rem;
  text-align: center;
  vertical-align: top;
} */

/* Bulma Form */
.select select, .textarea, .input {
  background-color: white;
  border-color: #dbdbdb;
  border-radius: 4px;
  color: #363636;
}
.select select::-moz-placeholder, .textarea::-moz-placeholder, .input::-moz-placeholder {
  color: rgba(54, 54, 54, 0.3);
}
.select select::-webkit-input-placeholder, .textarea::-webkit-input-placeholder, .input::-webkit-input-placeholder {
  color: rgba(54, 54, 54, 0.3);
}
.select select:-moz-placeholder, .textarea:-moz-placeholder, .input:-moz-placeholder {
  color: rgba(54, 54, 54, 0.3);
}
.select select:-ms-input-placeholder, .textarea:-ms-input-placeholder, .input:-ms-input-placeholder {
  color: rgba(54, 54, 54, 0.3);
}
.select select:hover, .textarea:hover, .input:hover, .select select.is-hovered, .is-hovered.textarea, .is-hovered.input {
  border-color: #b5b5b5;
}
.select select:focus, .textarea:focus, .input:focus, .select select.is-focused, .is-focused.textarea, .is-focused.input, .select select:active, .textarea:active, .input:active, .select select.is-active, .is-active.textarea, .is-active.input {
  border-color: #4FB3D9;
  box-shadow: 0 0 0 0.125em rgba(79, 179, 217, 0.25);
}
.select select[disabled], [disabled].textarea, [disabled].input, fieldset[disabled] .select select, .select fieldset[disabled] select, fieldset[disabled] .textarea, fieldset[disabled] .input {
  background-color: whitesmoke;
  border-color: whitesmoke;
  box-shadow: none;
  color: #7a7a7a;
}
.select select[disabled]::-moz-placeholder, [disabled].textarea::-moz-placeholder, [disabled].input::-moz-placeholder, fieldset[disabled] .select select::-moz-placeholder, .select fieldset[disabled] select::-moz-placeholder, fieldset[disabled] .textarea::-moz-placeholder, fieldset[disabled] .input::-moz-placeholder {
  color: rgba(122, 122, 122, 0.3);
}
.select select[disabled]::-webkit-input-placeholder, [disabled].textarea::-webkit-input-placeholder, [disabled].input::-webkit-input-placeholder, fieldset[disabled] .select select::-webkit-input-placeholder, .select fieldset[disabled] select::-webkit-input-placeholder, fieldset[disabled] .textarea::-webkit-input-placeholder, fieldset[disabled] .input::-webkit-input-placeholder {
  color: rgba(122, 122, 122, 0.3);
}
.select select[disabled]:-moz-placeholder, [disabled].textarea:-moz-placeholder, [disabled].input:-moz-placeholder, fieldset[disabled] .select select:-moz-placeholder, .select fieldset[disabled] select:-moz-placeholder, fieldset[disabled] .textarea:-moz-placeholder, fieldset[disabled] .input:-moz-placeholder {
  color: rgba(122, 122, 122, 0.3);
}
.select select[disabled]:-ms-input-placeholder, [disabled].textarea:-ms-input-placeholder, [disabled].input:-ms-input-placeholder, fieldset[disabled] .select select:-ms-input-placeholder, .select fieldset[disabled] select:-ms-input-placeholder, fieldset[disabled] .textarea:-ms-input-placeholder, fieldset[disabled] .input:-ms-input-placeholder {
  color: rgba(122, 122, 122, 0.3);
}

.textarea, .input {
  box-shadow: inset 0 0.0625em 0.125em rgba(0, 0, 0, 0.05);
  max-width: 100%;
  width: 100%;
}
[readonly].textarea, [readonly].input {
  box-shadow: none;
}
.is-white.textarea, .is-white.input {
  border-color: white;
}
.is-white.textarea:focus, .is-white.input:focus, .is-white.is-focused.textarea, .is-white.is-focused.input, .is-white.textarea:active, .is-white.input:active, .is-white.is-active.textarea, .is-white.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);
}
.is-black.textarea, .is-black.input {
  border-color: black;
}
.is-black.textarea:focus, .is-black.input:focus, .is-black.is-focused.textarea, .is-black.is-focused.input, .is-black.textarea:active, .is-black.input:active, .is-black.is-active.textarea, .is-black.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(0, 0, 0, 0.25);
}
.is-light.textarea, .is-light.input {
  border-color: whitesmoke;
}
.is-light.textarea:focus, .is-light.input:focus, .is-light.is-focused.textarea, .is-light.is-focused.input, .is-light.textarea:active, .is-light.input:active, .is-light.is-active.textarea, .is-light.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);
}
.is-dark.textarea, .is-dark.input {
  border-color: #363636;
}
.is-dark.textarea:focus, .is-dark.input:focus, .is-dark.is-focused.textarea, .is-dark.is-focused.input, .is-dark.textarea:active, .is-dark.input:active, .is-dark.is-active.textarea, .is-dark.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);
}
.is-primary.textarea, .is-primary.input {
  border-color: ${ce};
}
.is-primary.textarea:focus, .is-primary.input:focus, .is-primary.is-focused.textarea, .is-primary.is-focused.input, .is-primary.textarea:active, .is-primary.input:active, .is-primary.is-active.textarea, .is-primary.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);
}
.is-link.textarea, .is-link.input {
  border-color: #4FB3D9;
}
.is-link.textarea:focus, .is-link.input:focus, .is-link.is-focused.textarea, .is-link.is-focused.input, .is-link.textarea:active, .is-link.input:active, .is-link.is-active.textarea, .is-link.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(79, 179, 217, 0.25);
}
.is-info.textarea, .is-info.input {
  border-color: #3298dc;
}
.is-info.textarea:focus, .is-info.input:focus, .is-info.is-focused.textarea, .is-info.is-focused.input, .is-info.textarea:active, .is-info.input:active, .is-info.is-active.textarea, .is-info.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(50, 152, 220, 0.25);
}
.is-success.textarea, .is-success.input {
  border-color: #48c774;
}
.is-success.textarea:focus, .is-success.input:focus, .is-success.is-focused.textarea, .is-success.is-focused.input, .is-success.textarea:active, .is-success.input:active, .is-success.is-active.textarea, .is-success.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(72, 199, 116, 0.25);
}
.is-warning.textarea, .is-warning.input {
  border-color: #F9CD69;
}
.is-warning.textarea:focus, .is-warning.input:focus, .is-warning.is-focused.textarea, .is-warning.is-focused.input, .is-warning.textarea:active, .is-warning.input:active, .is-warning.is-active.textarea, .is-warning.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(249, 205, 105, 0.25);
}
.is-danger.textarea, .is-danger.input {
  border-color: #c21f3a;
}
.is-danger.textarea:focus, .is-danger.input:focus, .is-danger.is-focused.textarea, .is-danger.is-focused.input, .is-danger.textarea:active, .is-danger.input:active, .is-danger.is-active.textarea, .is-danger.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(194, 31, 58, 0.25);
}
.is-small.textarea, .is-small.input {
  border-radius: 2px;
  font-size: 0.75rem;
}
.is-medium.textarea, .is-medium.input {
  font-size: 1.25rem;
}
.is-large.textarea, .is-large.input {
  font-size: 1.5rem;
}
.is-fullwidth.textarea, .is-fullwidth.input {
  display: block;
  width: 100%;
}
.is-inline.textarea, .is-inline.input {
  display: inline;
  width: auto;
}

.input.is-rounded {
  border-radius: 290486px;
  padding-left: calc(calc(0.75em - 1px) + 0.375em);
  padding-right: calc(calc(0.75em - 1px) + 0.375em);
}
.input.is-static {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
  padding-left: 0;
  padding-right: 0;
}

.textarea {
  display: block;
  max-width: 100%;
  min-width: 100%;
  padding: calc(0.75em - 1px);
  resize: vertical;
}
.textarea:not([rows]) {
  max-height: 40em;
  min-height: 8em;
}
.textarea[rows] {
  height: initial;
}
.textarea.has-fixed-size {
  resize: none;
}

.radio, .checkbox {
  cursor: pointer;
  display: inline-block;
  line-height: 1.25;
  position: relative;
}
.radio input, .checkbox input {
  cursor: pointer;
}
.radio:hover, .checkbox:hover {
  color: #363636;
}
[disabled].radio, [disabled].checkbox, fieldset[disabled] .radio, fieldset[disabled] .checkbox,
.radio input[disabled],
.checkbox input[disabled] {
  color: #7a7a7a;
  cursor: not-allowed;
}

.radio + .radio {
  margin-left: 0.5em;
}

.select {
  display: inline-block;
  max-width: 100%;
  position: relative;
  vertical-align: top;
}
.select:not(.is-multiple) {
  height: 2.5em;
}
.select:not(.is-multiple):not(.is-loading)::after {
  border-color: #4FB3D9;
  right: 1.125em;
  z-index: 4;
}
.select.is-rounded select {
  border-radius: 290486px;
  padding-left: 1em;
}
.select select {
  cursor: pointer;
  display: block;
  font-size: 1em;
  max-width: 100%;
  outline: none;
}
.select select::-ms-expand {
  display: none;
}
.select select[disabled]:hover, fieldset[disabled] .select select:hover {
  border-color: whitesmoke;
}
.select select:not([multiple]) {
  padding-right: 2.5em;
}
.select select[multiple] {
  height: auto;
  padding: 0;
}
.select select[multiple] option {
  padding: 0.5em 1em;
}
.select:not(.is-multiple):not(.is-loading):hover::after {
  border-color: #363636;
}
.select.is-white:not(:hover)::after {
  border-color: white;
}
.select.is-white select {
  border-color: white;
}
.select.is-white select:hover, .select.is-white select.is-hovered {
  border-color: #f2f2f2;
}
.select.is-white select:focus, .select.is-white select.is-focused, .select.is-white select:active, .select.is-white select.is-active {
  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);
}
.select.is-black:not(:hover)::after {
  border-color: black;
}
.select.is-black select {
  border-color: black;
}
.select.is-black select:hover, .select.is-black select.is-hovered {
  border-color: black;
}
.select.is-black select:focus, .select.is-black select.is-focused, .select.is-black select:active, .select.is-black select.is-active {
  box-shadow: 0 0 0 0.125em rgba(0, 0, 0, 0.25);
}
.select.is-light:not(:hover)::after {
  border-color: whitesmoke;
}
.select.is-light select {
  border-color: whitesmoke;
}
.select.is-light select:hover, .select.is-light select.is-hovered {
  border-color: #e8e8e8;
}
.select.is-light select:focus, .select.is-light select.is-focused, .select.is-light select:active, .select.is-light select.is-active {
  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);
}
.select.is-dark:not(:hover)::after {
  border-color: #363636;
}
.select.is-dark select {
  border-color: #363636;
}
.select.is-dark select:hover, .select.is-dark select.is-hovered {
  border-color: #292929;
}
.select.is-dark select:focus, .select.is-dark select.is-focused, .select.is-dark select:active, .select.is-dark select.is-active {
  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);
}
.select.is-primary:not(:hover)::after {
  border-color: ${ce};
}
.select.is-primary select {
  border-color: ${ce};
}
.select.is-primary select:hover, .select.is-primary select.is-hovered {
  border-color: #00b89c;
}
.select.is-primary select:focus, .select.is-primary select.is-focused, .select.is-primary select:active, .select.is-primary select.is-active {
  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);
}
.select.is-link:not(:hover)::after {
  border-color: #4FB3D9;
}
.select.is-link select {
  border-color: #4FB3D9;
}
.select.is-link select:hover, .select.is-link select.is-hovered {
  border-color: #3aaad4;
}
.select.is-link select:focus, .select.is-link select.is-focused, .select.is-link select:active, .select.is-link select.is-active {
  box-shadow: 0 0 0 0.125em rgba(79, 179, 217, 0.25);
}
.select.is-info:not(:hover)::after {
  border-color: #3298dc;
}
.select.is-info select {
  border-color: #3298dc;
}
.select.is-info select:hover, .select.is-info select.is-hovered {
  border-color: #238cd1;
}
.select.is-info select:focus, .select.is-info select.is-focused, .select.is-info select:active, .select.is-info select.is-active {
  box-shadow: 0 0 0 0.125em rgba(50, 152, 220, 0.25);
}
.select.is-success:not(:hover)::after {
  border-color: #48c774;
}
.select.is-success select {
  border-color: #48c774;
}
.select.is-success select:hover, .select.is-success select.is-hovered {
  border-color: #3abb67;
}
.select.is-success select:focus, .select.is-success select.is-focused, .select.is-success select:active, .select.is-success select.is-active {
  box-shadow: 0 0 0 0.125em rgba(72, 199, 116, 0.25);
}
.select.is-warning:not(:hover)::after {
  border-color: #F9CD69;
}
.select.is-warning select {
  border-color: #F9CD69;
}
.select.is-warning select:hover, .select.is-warning select.is-hovered {
  border-color: #f8c550;
}
.select.is-warning select:focus, .select.is-warning select.is-focused, .select.is-warning select:active, .select.is-warning select.is-active {
  box-shadow: 0 0 0 0.125em rgba(249, 205, 105, 0.25);
}
.select.is-danger:not(:hover)::after {
  border-color: #c21f3a;
}
.select.is-danger select {
  border-color: #c21f3a;
}
.select.is-danger select:hover, .select.is-danger select.is-hovered {
  border-color: #ac1b33;
}
.select.is-danger select:focus, .select.is-danger select.is-focused, .select.is-danger select:active, .select.is-danger select.is-active {
  box-shadow: 0 0 0 0.125em rgba(194, 31, 58, 0.25);
}
.select.is-small {
  border-radius: 2px;
  font-size: 0.75rem;
}
.select.is-medium {
  font-size: 1.25rem;
}
.select.is-large {
  font-size: 1.5rem;
}
.select.is-disabled::after {
  border-color: #7a7a7a;
}
.select.is-fullwidth {
  width: 100%;
}
.select.is-fullwidth select {
  width: 100%;
}
.select.is-loading::after {
  margin-top: 0;
  position: absolute;
  right: 0.625em;
  top: 0.625em;
  transform: none;
}
.select.is-loading.is-small:after {
  font-size: 0.75rem;
}
.select.is-loading.is-medium:after {
  font-size: 1.25rem;
}
.select.is-loading.is-large:after {
  font-size: 1.5rem;
}

.file {
  align-items: stretch;
  display: flex;
  justify-content: flex-start;
  position: relative;
}
.file.is-white .file-cta {
  background-color: white;
  border-color: transparent;
  color: black;
}
.file.is-white:hover .file-cta, .file.is-white.is-hovered .file-cta {
  background-color: #f9f9f9;
  border-color: transparent;
  color: black;
}
.file.is-white:focus .file-cta, .file.is-white.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);
  color: black;
}
.file.is-white:active .file-cta, .file.is-white.is-active .file-cta {
  background-color: #f2f2f2;
  border-color: transparent;
  color: black;
}
.file.is-black .file-cta {
  background-color: black;
  border-color: transparent;
  color: white;
}
.file.is-black:hover .file-cta, .file.is-black.is-hovered .file-cta {
  background-color: black;
  border-color: transparent;
  color: white;
}
.file.is-black:focus .file-cta, .file.is-black.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.25);
  color: white;
}
.file.is-black:active .file-cta, .file.is-black.is-active .file-cta {
  background-color: black;
  border-color: transparent;
  color: white;
}
.file.is-light .file-cta {
  background-color: whitesmoke;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.file.is-light:hover .file-cta, .file.is-light.is-hovered .file-cta {
  background-color: #eeeeee;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.file.is-light:focus .file-cta, .file.is-light.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);
  color: rgba(0, 0, 0, 0.7);
}
.file.is-light:active .file-cta, .file.is-light.is-active .file-cta {
  background-color: #e8e8e8;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.file.is-dark .file-cta {
  background-color: #363636;
  border-color: transparent;
  color: #fff;
}
.file.is-dark:hover .file-cta, .file.is-dark.is-hovered .file-cta {
  background-color: #2f2f2f;
  border-color: transparent;
  color: #fff;
}
.file.is-dark:focus .file-cta, .file.is-dark.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);
  color: #fff;
}
.file.is-dark:active .file-cta, .file.is-dark.is-active .file-cta {
  background-color: #292929;
  border-color: transparent;
  color: #fff;
}
.file.is-primary .file-cta {
  background-color: ${ce};
  border-color: transparent;
  color: #fff;
}
.file.is-primary:hover .file-cta, .file.is-primary.is-hovered .file-cta {
  background-color: ${me};
  border-color: transparent;
  color: #fff;
}
.file.is-primary:focus .file-cta, .file.is-primary.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(0, 209, 178, 0.25);
  color: #fff;
}
.file.is-primary:active .file-cta, .file.is-primary.is-active .file-cta {
  background-color: #00b89c;
  border-color: transparent;
  color: #fff;
}
.file.is-link .file-cta {
  background-color: #4FB3D9;
  border-color: transparent;
  color: #fff;
}
.file.is-link:hover .file-cta, .file.is-link.is-hovered .file-cta {
  background-color: #45aed7;
  border-color: transparent;
  color: #fff;
}
.file.is-link:focus .file-cta, .file.is-link.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(79, 179, 217, 0.25);
  color: #fff;
}
.file.is-link:active .file-cta, .file.is-link.is-active .file-cta {
  background-color: #3aaad4;
  border-color: transparent;
  color: #fff;
}
.file.is-info .file-cta {
  background-color: #3298dc;
  border-color: transparent;
  color: #fff;
}
.file.is-info:hover .file-cta, .file.is-info.is-hovered .file-cta {
  background-color: #2793da;
  border-color: transparent;
  color: #fff;
}
.file.is-info:focus .file-cta, .file.is-info.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(50, 152, 220, 0.25);
  color: #fff;
}
.file.is-info:active .file-cta, .file.is-info.is-active .file-cta {
  background-color: #238cd1;
  border-color: transparent;
  color: #fff;
}
.file.is-success .file-cta {
  background-color: #48c774;
  border-color: transparent;
  color: #fff;
}
.file.is-success:hover .file-cta, .file.is-success.is-hovered .file-cta {
  background-color: #3ec46d;
  border-color: transparent;
  color: #fff;
}
.file.is-success:focus .file-cta, .file.is-success.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(72, 199, 116, 0.25);
  color: #fff;
}
.file.is-success:active .file-cta, .file.is-success.is-active .file-cta {
  background-color: #3abb67;
  border-color: transparent;
  color: #fff;
}
.file.is-warning .file-cta {
  background-color: #F9CD69;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.file.is-warning:hover .file-cta, .file.is-warning.is-hovered .file-cta {
  background-color: #f9c95d;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.file.is-warning:focus .file-cta, .file.is-warning.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(249, 205, 105, 0.25);
  color: rgba(0, 0, 0, 0.7);
}
.file.is-warning:active .file-cta, .file.is-warning.is-active .file-cta {
  background-color: #f8c550;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.file.is-danger .file-cta {
  background-color: #c21f3a;
  border-color: transparent;
  color: #fff;
}
.file.is-danger:hover .file-cta, .file.is-danger.is-hovered .file-cta {
  background-color: #b71d37;
  border-color: transparent;
  color: #fff;
}
.file.is-danger:focus .file-cta, .file.is-danger.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(194, 31, 58, 0.25);
  color: #fff;
}
.file.is-danger:active .file-cta, .file.is-danger.is-active .file-cta {
  background-color: #ac1b33;
  border-color: transparent;
  color: #fff;
}
.file.is-small {
  font-size: 0.75rem;
}
.file.is-medium {
  font-size: 1.25rem;
}
.file.is-medium .file-icon .fa {
  font-size: 21px;
}
.file.is-large {
  font-size: 1.5rem;
}
.file.is-large .file-icon .fa {
  font-size: 28px;
}
.file.has-name .file-cta {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.file.has-name .file-name {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.file.has-name.is-empty .file-cta {
  border-radius: 4px;
}
.file.has-name.is-empty .file-name {
  display: none;
}
.file.is-boxed .file-label {
  flex-direction: column;
}
.file.is-boxed .file-cta {
  flex-direction: column;
  height: auto;
  padding: 1em 3em;
}
.file.is-boxed .file-name {
  border-width: 0 1px 1px;
}
.file.is-boxed .file-icon {
  height: 1.5em;
  width: 1.5em;
}
.file.is-boxed .file-icon .fa {
  font-size: 21px;
}
.file.is-boxed.is-small .file-icon .fa {
  font-size: 14px;
}
.file.is-boxed.is-medium .file-icon .fa {
  font-size: 28px;
}
.file.is-boxed.is-large .file-icon .fa {
  font-size: 35px;
}
.file.is-boxed.has-name .file-cta {
  border-radius: 4px 4px 0 0;
}
.file.is-boxed.has-name .file-name {
  border-radius: 0 0 4px 4px;
  border-width: 0 1px 1px;
}
.file.is-centered {
  justify-content: center;
}
.file.is-fullwidth .file-label {
  width: 100%;
}
.file.is-fullwidth .file-name {
  flex-grow: 1;
  max-width: none;
}
.file.is-right {
  justify-content: flex-end;
}
.file.is-right .file-cta {
  border-radius: 0 4px 4px 0;
}
.file.is-right .file-name {
  border-radius: 4px 0 0 4px;
  border-width: 1px 0 1px 1px;
  order: -1;
}

.file-label {
  align-items: stretch;
  display: flex;
  cursor: pointer;
  justify-content: flex-start;
  overflow: hidden;
  position: relative;
}
.file-label:hover .file-cta {
  background-color: #eeeeee;
  color: #363636;
}
.file-label:hover .file-name {
  border-color: #d5d5d5;
}
.file-label:active .file-cta {
  background-color: #e8e8e8;
  color: #363636;
}
.file-label:active .file-name {
  border-color: #cfcfcf;
}

.file-input {
  height: 100%;
  left: 0;
  opacity: 0;
  outline: none;
  position: absolute;
  top: 0;
  width: 100%;
}

.file-cta,
.file-name {
  border-color: #dbdbdb;
  border-radius: 4px;
  font-size: 1em;
  padding-left: 1em;
  padding-right: 1em;
  white-space: nowrap;
}

.file-cta {
  background-color: whitesmoke;
  color: #4a4a4a;
}

.file-name {
  border-color: #dbdbdb;
  border-style: solid;
  border-width: 1px 1px 1px 0;
  display: block;
  max-width: 16em;
  overflow: hidden;
  text-align: inherit;
  text-overflow: ellipsis;
}

.file-icon {
  align-items: center;
  display: flex;
  height: 1em;
  justify-content: center;
  margin-right: 0.5em;
  width: 1em;
}
.file-icon .fa {
  font-size: 14px;
}

.label {
  color: #363636;
  display: block;
  font-size: 1rem;
  font-weight: 700;
}
.label:not(:last-child) {
  margin-bottom: 0.5em;
}
.label.is-small {
  font-size: 0.75rem;
}
.label.is-medium {
  font-size: 1.25rem;
}
.label.is-large {
  font-size: 1.5rem;
}

.help {
  display: block;
  font-size: 0.75rem;
  margin-top: 0.25rem;
}
.help.is-white {
  color: white;
}
.help.is-black {
  color: black;
}
.help.is-light {
  color: whitesmoke;
}
.help.is-dark {
  color: #363636;
}
.help.is-primary {
  color: ${ce};
}
.help.is-link {
  color: #4FB3D9;
}
.help.is-info {
  color: #3298dc;
}
.help.is-success {
  color: #48c774;
}
.help.is-warning {
  color: #F9CD69;
}
.help.is-danger {
  color: #c21f3a;
}

.field:not(:last-child) {
  margin-bottom: 0.75rem;
}
.field.has-addons {
  display: flex;
  justify-content: flex-start;
}
.field.has-addons .control:not(:last-child) {
  margin-right: -1px;
}
.field.has-addons .control:not(:first-child):not(:last-child) .button,
.field.has-addons .control:not(:first-child):not(:last-child) .input,
.field.has-addons .control:not(:first-child):not(:last-child) .select select {
  border-radius: 0;
}
.field.has-addons .control:first-child:not(:only-child) .button,
.field.has-addons .control:first-child:not(:only-child) .input,
.field.has-addons .control:first-child:not(:only-child) .select select {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.field.has-addons .control:last-child:not(:only-child) .button,
.field.has-addons .control:last-child:not(:only-child) .input,
.field.has-addons .control:last-child:not(:only-child) .select select {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.field.has-addons .control .button:not([disabled]):hover, .field.has-addons .control .button:not([disabled]).is-hovered,
.field.has-addons .control .input:not([disabled]):hover,
.field.has-addons .control .input:not([disabled]).is-hovered,
.field.has-addons .control .select select:not([disabled]):hover,
.field.has-addons .control .select select:not([disabled]).is-hovered {
  z-index: 2;
}
.field.has-addons .control .button:not([disabled]):focus, .field.has-addons .control .button:not([disabled]).is-focused, .field.has-addons .control .button:not([disabled]):active, .field.has-addons .control .button:not([disabled]).is-active,
.field.has-addons .control .input:not([disabled]):focus,
.field.has-addons .control .input:not([disabled]).is-focused,
.field.has-addons .control .input:not([disabled]):active,
.field.has-addons .control .input:not([disabled]).is-active,
.field.has-addons .control .select select:not([disabled]):focus,
.field.has-addons .control .select select:not([disabled]).is-focused,
.field.has-addons .control .select select:not([disabled]):active,
.field.has-addons .control .select select:not([disabled]).is-active {
  z-index: 3;
}
.field.has-addons .control .button:not([disabled]):focus:hover, .field.has-addons .control .button:not([disabled]).is-focused:hover, .field.has-addons .control .button:not([disabled]):active:hover, .field.has-addons .control .button:not([disabled]).is-active:hover,
.field.has-addons .control .input:not([disabled]):focus:hover,
.field.has-addons .control .input:not([disabled]).is-focused:hover,
.field.has-addons .control .input:not([disabled]):active:hover,
.field.has-addons .control .input:not([disabled]).is-active:hover,
.field.has-addons .control .select select:not([disabled]):focus:hover,
.field.has-addons .control .select select:not([disabled]).is-focused:hover,
.field.has-addons .control .select select:not([disabled]):active:hover,
.field.has-addons .control .select select:not([disabled]).is-active:hover {
  z-index: 4;
}
.field.has-addons .control.is-expanded {
  flex-grow: 1;
  flex-shrink: 1;
}
.field.has-addons.has-addons-centered {
  justify-content: center;
}
.field.has-addons.has-addons-right {
  justify-content: flex-end;
}
.field.has-addons.has-addons-fullwidth .control {
  flex-grow: 1;
  flex-shrink: 0;
}
.field.is-grouped {
  display: flex;
  justify-content: flex-start;
}
.field.is-grouped > .control {
  flex-shrink: 0;
}
.field.is-grouped > .control:not(:last-child) {
  margin-bottom: 0;
  margin-right: 0.75rem;
}
.field.is-grouped > .control.is-expanded {
  flex-grow: 1;
  flex-shrink: 1;
}
.field.is-grouped.is-grouped-centered {
  justify-content: center;
}
.field.is-grouped.is-grouped-right {
  justify-content: flex-end;
}
.field.is-grouped.is-grouped-multiline {
  flex-wrap: wrap;
}
.field.is-grouped.is-grouped-multiline > .control:last-child, .field.is-grouped.is-grouped-multiline > .control:not(:last-child) {
  margin-bottom: 0.75rem;
}
.field.is-grouped.is-grouped-multiline:last-child {
  margin-bottom: -0.75rem;
}
.field.is-grouped.is-grouped-multiline:not(:last-child) {
  margin-bottom: 0;
}
@media screen and (min-width: 769px), print {
  .field.is-horizontal {
    display: flex;
  }
}

.field-label .label {
  font-size: inherit;
}
@media screen and (max-width: 768px) {
  .field-label {
    margin-bottom: 0.5rem;
  }
}
@media screen and (min-width: 769px), print {
  .field-label {
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 0;
    margin-right: 1.5rem;
    text-align: right;
  }
  .field-label.is-small {
    font-size: 0.75rem;
    padding-top: 0.375em;
  }
  .field-label.is-normal {
    padding-top: 0.375em;
  }
  .field-label.is-medium {
    font-size: 1.25rem;
    padding-top: 0.375em;
  }
  .field-label.is-large {
    font-size: 1.5rem;
    padding-top: 0.375em;
  }
}

.field-body .field .field {
  margin-bottom: 0;
}
@media screen and (min-width: 769px), print {
  .field-body {
    display: flex;
    flex-basis: 0;
    flex-grow: 5;
    flex-shrink: 1;
  }
  .field-body .field {
    margin-bottom: 0;
  }
  .field-body > .field {
    flex-shrink: 1;
  }
  .field-body > .field:not(.is-narrow) {
    flex-grow: 1;
  }
  .field-body > .field:not(:last-child) {
    margin-right: 0.75rem;
  }
}

.control {
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: inherit;
}
.control.has-icons-left .input:focus ~ .icon,
.control.has-icons-left .select:focus ~ .icon, .control.has-icons-right .input:focus ~ .icon,
.control.has-icons-right .select:focus ~ .icon {
  color: #4a4a4a;
}
.control.has-icons-left .input.is-small ~ .icon,
.control.has-icons-left .select.is-small ~ .icon, .control.has-icons-right .input.is-small ~ .icon,
.control.has-icons-right .select.is-small ~ .icon {
  font-size: 0.75rem;
}
.control.has-icons-left .input.is-medium ~ .icon,
.control.has-icons-left .select.is-medium ~ .icon, .control.has-icons-right .input.is-medium ~ .icon,
.control.has-icons-right .select.is-medium ~ .icon {
  font-size: 1.25rem;
}
.control.has-icons-left .input.is-large ~ .icon,
.control.has-icons-left .select.is-large ~ .icon, .control.has-icons-right .input.is-large ~ .icon,
.control.has-icons-right .select.is-large ~ .icon {
  font-size: 1.5rem;
}
.control.has-icons-left .icon, .control.has-icons-right .icon {
  color: #dbdbdb;
  height: 2.5em;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 2.5em;
  z-index: 4;
}
.control.has-icons-left .input,
.control.has-icons-left .select select {
  padding-left: 2.5em;
}
.control.has-icons-left .icon.is-left {
  left: 0;
}
.control.has-icons-right .input,
.control.has-icons-right .select select {
  padding-right: 2.5em;
}
.control.has-icons-right .icon.is-right {
  right: 0;
}
.control.is-loading::after {
  position: absolute !important;
  right: 0.625em;
  top: 0.625em;
  z-index: 4;
}
.control.is-loading.is-small:after {
  font-size: 0.75rem;
}
.control.is-loading.is-medium:after {
  font-size: 1.25rem;
}
.control.is-loading.is-large:after {
  font-size: 1.5rem;
}

/* Bulma Components */
.breadcrumb {
  font-size: 1rem;
  white-space: nowrap;
}
.breadcrumb a {
  align-items: center;
  color: #4FB3D9;
  display: flex;
  justify-content: center;
  padding: 0 0.75em;
}
.breadcrumb a:hover {
  color: #363636;
}
.breadcrumb li {
  align-items: center;
  display: flex;
}
.breadcrumb li:first-child a {
  padding-left: 0;
}
.breadcrumb li.is-active a {
  color: #363636;
  cursor: default;
  pointer-events: none;
}
.breadcrumb li + li::before {
  color: #b5b5b5;
  content: "/";
}
.breadcrumb ul,
.breadcrumb ol {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.breadcrumb .icon:first-child {
  margin-right: 0.5em;
}
.breadcrumb .icon:last-child {
  margin-left: 0.5em;
}
.breadcrumb.is-centered ol,
.breadcrumb.is-centered ul {
  justify-content: center;
}
.breadcrumb.is-right ol,
.breadcrumb.is-right ul {
  justify-content: flex-end;
}
.breadcrumb.is-small {
  font-size: 0.75rem;
}
.breadcrumb.is-medium {
  font-size: 1.25rem;
}
.breadcrumb.is-large {
  font-size: 1.5rem;
}
.breadcrumb.has-arrow-separator li + li::before {
  content: "→";
}
.breadcrumb.has-bullet-separator li + li::before {
  content: "•";
}
.breadcrumb.has-dot-separator li + li::before {
  content: "·";
}
.breadcrumb.has-succeeds-separator li + li::before {
  content: "≻";
}

.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 0.5em 1em -0.125em rgba(0, 0, 0, 0.1), 0 0px 0 1px rgba(0, 0, 0, 0.02);
  color: #4a4a4a;
  max-width: 100%;
  position: relative;
}

.card-footer:first-child, .card-content:first-child, .card-header:first-child {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.card-footer:last-child, .card-content:last-child, .card-header:last-child {
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.card-header {
  background-color: transparent;
  align-items: stretch;
  box-shadow: 0 0.125em 0.25em rgba(0, 0, 0, 0.1);
  display: flex;
}

.card-header-title {
  align-items: center;
  color: #363636;
  display: flex;
  flex-grow: 1;
  font-weight: 700;
  padding: 0.75rem 1rem;
}
.card-header-title.is-centered {
  justify-content: center;
}

.card-header-icon {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background: 0 0;
    border: none;
    color: currentColor;
    font-family: inherit;
    font-size: 1em;
    margin: 0;
    padding: 0;
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: .75rem 1rem;
}

.card-image {
  display: block;
  position: relative;
}
.card-image:first-child img {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.card-image:last-child img {
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.card-content {
  background-color: transparent;
  padding: 1.5rem;
}

.card-footer {
  background-color: transparent;
  border-top: 1px solid #ededed;
  align-items: stretch;
  display: flex;
}

.card-footer-item {
  align-items: center;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: center;
  padding: 0.75rem;
}
.card-footer-item:not(:last-child) {
  border-right: 1px solid #ededed;
}

.card .media:not(:last-child) {
  margin-bottom: 1.5rem;
}

.dropdown {
  display: inline-flex;
  position: relative;
  vertical-align: top;
}
.dropdown.is-active .dropdown-menu, .dropdown.is-hoverable:hover .dropdown-menu {
  display: block;
}
.dropdown.is-right .dropdown-menu {
  left: auto;
  right: 0;
}
.dropdown.is-up .dropdown-menu {
  bottom: 100%;
  padding-bottom: 4px;
  padding-top: initial;
  top: auto;
}

.dropdown-menu {
  display: none;
  left: 0;
  min-width: 12rem;
  padding-top: 4px;
  position: absolute;
  top: 100%;
  z-index: 20;
}

.dropdown-content {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0.5em 1em -0.125em rgba(0, 0, 0, 0.1), 0 0px 0 1px rgba(0, 0, 0, 0.02);
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
}

.dropdown-item {
  color: #4a4a4a;
  display: block;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 0.375rem 1rem;
  position: relative;
}

a.dropdown-item,
button.dropdown-item {
  padding-right: 3rem;
  text-align: inherit;
  white-space: nowrap;
  width: 100%;
}
a.dropdown-item:hover,
button.dropdown-item:hover {
  background-color: whitesmoke;
  color: black;
}
a.dropdown-item.is-active,
button.dropdown-item.is-active {
  background-color: #4FB3D9;
  color: #fff;
}

.dropdown-divider {
  background-color: #ededed;
  border: none;
  display: block;
  height: 1px;
  margin: 0.5rem 0;
}

.level {
  align-items: center;
  justify-content: space-between;
}
.level code {
  border-radius: 4px;
}
.level img {
  display: inline-block;
  vertical-align: top;
}
.level.is-mobile {
  display: flex;
}
.level.is-mobile .level-left,
.level.is-mobile .level-right {
  display: flex;
}
.level.is-mobile .level-left + .level-right {
  margin-top: 0;
}
.level.is-mobile .level-item:not(:last-child) {
  margin-bottom: 0;
  margin-right: 0.75rem;
}
.level.is-mobile .level-item:not(.is-narrow) {
  flex-grow: 1;
}
@media screen and (min-width: 769px), print {
  .level {
    display: flex;
  }
  .level > .level-item:not(.is-narrow) {
    flex-grow: 1;
  }
}

.level-item {
  align-items: center;
  display: flex;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
}
.level-item .title,
.level-item .subtitle {
  margin-bottom: 0;
}
@media screen and (max-width: 768px) {
  .level-item:not(:last-child) {
    margin-bottom: 0.75rem;
  }
}

.level-left,
.level-right {
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
}
.level-left .level-item.is-flexible,
.level-right .level-item.is-flexible {
  flex-grow: 1;
}
@media screen and (min-width: 769px), print {
  .level-left .level-item:not(:last-child),
.level-right .level-item:not(:last-child) {
    margin-right: 0.75rem;
  }
}

.level-left {
  align-items: center;
  justify-content: flex-start;
}
@media screen and (max-width: 768px) {
  .level-left + .level-right {
    margin-top: 1.5rem;
  }
}
@media screen and (min-width: 769px), print {
  .level-left {
    display: flex;
  }
}

.level-right {
  align-items: center;
  justify-content: flex-end;
}
@media screen and (min-width: 769px), print {
  .level-right {
    display: flex;
  }
}

.media {
  align-items: flex-start;
  display: flex;
  text-align: inherit;
}
.media .content:not(:last-child) {
  margin-bottom: 0.75rem;
}
.media .media {
  border-top: 1px solid rgba(219, 219, 219, 0.5);
  display: flex;
  padding-top: 0.75rem;
}
.media .media .content:not(:last-child),
.media .media .control:not(:last-child) {
  margin-bottom: 0.5rem;
}
.media .media .media {
  padding-top: 0.5rem;
}
.media .media .media + .media {
  margin-top: 0.5rem;
}
.media + .media {
  border-top: 1px solid rgba(219, 219, 219, 0.5);
  margin-top: 1rem;
  padding-top: 1rem;
}
.media.is-large + .media {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
}

.media-left,
.media-right {
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
}

.media-left {
  margin-right: 1rem;
}

.media-right {
  margin-left: 1rem;
}

.media-content {
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  text-align: inherit;
}

@media screen and (max-width: 768px) {
  .media-content {
    overflow-x: auto;
  }
}
.menu {
  font-size: 1rem;
}
.menu.is-small {
  font-size: 0.75rem;
}
.menu.is-medium {
  font-size: 1.25rem;
}
.menu.is-large {
  font-size: 1.5rem;
}

.menu-list {
  line-height: 1.25;
}
.menu-list a {
  border-radius: 2px;
  color: #4a4a4a;
  display: block;
  padding: 0.5em 0.75em;
}
.menu-list a:hover {
  background-color: whitesmoke;
  color: #363636;
}
.menu-list a.is-active {
  background-color: #4FB3D9;
  color: #fff;
}
.menu-list li ul {
  border-left: 1px solid #dbdbdb;
  margin: 0.75em;
  padding-left: 0.75em;
}

.menu-label {
  color: #7a7a7a;
  font-size: 0.75em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.menu-label:not(:first-child) {
  margin-top: 1em;
}
.menu-label:not(:last-child) {
  margin-bottom: 1em;
}

.message {
  background-color: whitesmoke;
  border-radius: 4px;
  font-size: 1rem;
}
.message strong {
  color: currentColor;
}
.message a:not(.button):not(.tag):not(.dropdown-item) {
  color: currentColor;
  text-decoration: underline;
}
.message.is-small {
  font-size: 0.75rem;
}
.message.is-medium {
  font-size: 1.25rem;
}
.message.is-large {
  font-size: 1.5rem;
}
.message.is-white {
  background-color: white;
}
.message.is-white .message-header {
  background-color: white;
  color: black;
}
.message.is-white .message-body {
  border-color: white;
}
.message.is-black {
  background-color: #fafafa;
}
.message.is-black .message-header {
  background-color: black;
  color: white;
}
.message.is-black .message-body {
  border-color: black;
}
.message.is-light {
  background-color: #fafafa;
}
.message.is-light .message-header {
  background-color: whitesmoke;
  color: rgba(0, 0, 0, 0.7);
}
.message.is-light .message-body {
  border-color: whitesmoke;
}
.message.is-dark {
  background-color: #fafafa;
}
.message.is-dark .message-header {
  background-color: #363636;
  color: #fff;
}
.message.is-dark .message-body {
  border-color: #363636;
}
.message.is-primary {
  background-color: #ebfffc;
}
.message.is-primary .message-header {
  background-color: ${ce};
  color: #fff;
}
.message.is-primary .message-body {
  border-color: ${ce};
  color: #00947e;
}
.message.is-link {
  background-color: #eef8fb;
}
.message.is-link .message-header {
  background-color: #4FB3D9;
  color: #fff;
}
.message.is-link .message-body {
  border-color: #4FB3D9;
  color: #1e6d8a;
}
.message.is-info {
  background-color: #eef6fc;
}
.message.is-info .message-header {
  background-color: #3298dc;
  color: #fff;
}
.message.is-info .message-body {
  border-color: #3298dc;
  color: #1d72aa;
}
.message.is-success {
  background-color: #effaf3;
}
.message.is-success .message-header {
  background-color: #48c774;
  color: #fff;
}
.message.is-success .message-body {
  border-color: #48c774;
  color: #257942;
}
.message.is-warning {
  background-color: #fef8eb;
}
.message.is-warning .message-header {
  background-color: #F9CD69;
  color: rgba(0, 0, 0, 0.7);
}
.message.is-warning .message-body {
  border-color: #F9CD69;
  color: #8e6406;
}
.message.is-danger {
  background-color: #fcedf0;
}
.message.is-danger .message-header {
  background-color: #c21f3a;
  color: #fff;
}
.message.is-danger .message-body {
  border-color: #c21f3a;
  color: #d72240;
}

.message-header {
  align-items: center;
  background-color: #4a4a4a;
  border-radius: 4px 4px 0 0;
  color: #fff;
  display: flex;
  font-weight: 700;
  justify-content: space-between;
  line-height: 1.25;
  padding: 0.75em 1em;
  position: relative;
}
.message-header .delete {
  flex-grow: 0;
  flex-shrink: 0;
  margin-left: 0.75em;
}
.message-header + .message-body {
  border-width: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.message-body {
  border-color: #dbdbdb;
  border-radius: 4px;
  border-style: solid;
  border-width: 0 0 0 4px;
  color: #4a4a4a;
  padding: 1.25em 1.5em;
}
.message-body code,
.message-body pre {
  background-color: white;
}
.message-body pre code {
  background-color: transparent;
}

.modal {
  align-items: center;
  display: none;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  z-index: 40;
}
.modal.is-active {
  display: flex;
}

.modal-background {
  background-color: rgba(0, 0, 0, 0.86);
}

.modal-content,
.modal-card {
  margin: 0 20px;
  max-height: calc(100vh - 160px);
  overflow: auto;
  position: relative;
  width: 100%;
}
@media screen and (min-width: 769px) {
  .modal-content,
.modal-card {
    margin: 0 auto;
    max-height: calc(100vh - 40px);
    width: 640px;
  }
}

.modal-close {
  background: none;
  height: 40px;
  position: fixed;
  right: 20px;
  top: 20px;
  width: 40px;
}

.modal-card {
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 40px);
  overflow: hidden;
  -ms-overflow-y: visible;
}

.modal-card-head,
.modal-card-foot {
  align-items: center;
  background-color: whitesmoke;
  display: flex;
  flex-shrink: 0;
  justify-content: flex-start;
  padding: 20px;
  position: relative;
}

.modal-card-head {
  border-bottom: 1px solid #dbdbdb;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.modal-card-title {
  color: #363636;
  flex-grow: 1;
  flex-shrink: 0;
  font-size: 1.5rem;
  line-height: 1;
}

.modal-card-foot {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top: 1px solid #dbdbdb;
}
.modal-card-foot .button:not(:last-child) {
  margin-right: 0.5em;
}

.modal-card-body {
  -webkit-overflow-scrolling: touch;
  background-color: white;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: auto;
  padding: 20px;
}

.navbar {
  background-color: white;
  min-height: 3.25rem;
  position: relative;
  z-index: 30;
}
.navbar.is-white {
  background-color: white;
  color: black;
}
.navbar.is-white .navbar-brand > .navbar-item,
.navbar.is-white .navbar-brand .navbar-link {
  color: black;
}
.navbar.is-white .navbar-brand > a.navbar-item:focus, .navbar.is-white .navbar-brand > a.navbar-item:hover, .navbar.is-white .navbar-brand > a.navbar-item.is-active,
.navbar.is-white .navbar-brand .navbar-link:focus,
.navbar.is-white .navbar-brand .navbar-link:hover,
.navbar.is-white .navbar-brand .navbar-link.is-active {
  background-color: #f2f2f2;
  color: black;
}
.navbar.is-white .navbar-brand .navbar-link::after {
  border-color: black;
}
.navbar.is-white .navbar-burger {
  color: black;
}
@media screen and (min-width: 1024px) {
  .navbar.is-white .navbar-start > .navbar-item,
.navbar.is-white .navbar-start .navbar-link,
.navbar.is-white .navbar-end > .navbar-item,
.navbar.is-white .navbar-end .navbar-link {
    color: black;
  }
  .navbar.is-white .navbar-start > a.navbar-item:focus, .navbar.is-white .navbar-start > a.navbar-item:hover, .navbar.is-white .navbar-start > a.navbar-item.is-active,
.navbar.is-white .navbar-start .navbar-link:focus,
.navbar.is-white .navbar-start .navbar-link:hover,
.navbar.is-white .navbar-start .navbar-link.is-active,
.navbar.is-white .navbar-end > a.navbar-item:focus,
.navbar.is-white .navbar-end > a.navbar-item:hover,
.navbar.is-white .navbar-end > a.navbar-item.is-active,
.navbar.is-white .navbar-end .navbar-link:focus,
.navbar.is-white .navbar-end .navbar-link:hover,
.navbar.is-white .navbar-end .navbar-link.is-active {
    background-color: #f2f2f2;
    color: black;
  }
  .navbar.is-white .navbar-start .navbar-link::after,
.navbar.is-white .navbar-end .navbar-link::after {
    border-color: black;
  }
  .navbar.is-white .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-white .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #f2f2f2;
    color: black;
  }
  .navbar.is-white .navbar-dropdown a.navbar-item.is-active {
    background-color: white;
    color: black;
  }
}
.navbar.is-black {
  background-color: black;
  color: white;
}
.navbar.is-black .navbar-brand > .navbar-item,
.navbar.is-black .navbar-brand .navbar-link {
  color: white;
}
.navbar.is-black .navbar-brand > a.navbar-item:focus, .navbar.is-black .navbar-brand > a.navbar-item:hover, .navbar.is-black .navbar-brand > a.navbar-item.is-active,
.navbar.is-black .navbar-brand .navbar-link:focus,
.navbar.is-black .navbar-brand .navbar-link:hover,
.navbar.is-black .navbar-brand .navbar-link.is-active {
  background-color: black;
  color: white;
}
.navbar.is-black .navbar-brand .navbar-link::after {
  border-color: white;
}
.navbar.is-black .navbar-burger {
  color: white;
}
@media screen and (min-width: 1024px) {
  .navbar.is-black .navbar-start > .navbar-item,
.navbar.is-black .navbar-start .navbar-link,
.navbar.is-black .navbar-end > .navbar-item,
.navbar.is-black .navbar-end .navbar-link {
    color: white;
  }
  .navbar.is-black .navbar-start > a.navbar-item:focus, .navbar.is-black .navbar-start > a.navbar-item:hover, .navbar.is-black .navbar-start > a.navbar-item.is-active,
.navbar.is-black .navbar-start .navbar-link:focus,
.navbar.is-black .navbar-start .navbar-link:hover,
.navbar.is-black .navbar-start .navbar-link.is-active,
.navbar.is-black .navbar-end > a.navbar-item:focus,
.navbar.is-black .navbar-end > a.navbar-item:hover,
.navbar.is-black .navbar-end > a.navbar-item.is-active,
.navbar.is-black .navbar-end .navbar-link:focus,
.navbar.is-black .navbar-end .navbar-link:hover,
.navbar.is-black .navbar-end .navbar-link.is-active {
    background-color: black;
    color: white;
  }
  .navbar.is-black .navbar-start .navbar-link::after,
.navbar.is-black .navbar-end .navbar-link::after {
    border-color: white;
  }
  .navbar.is-black .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-black .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: black;
    color: white;
  }
  .navbar.is-black .navbar-dropdown a.navbar-item.is-active {
    background-color: black;
    color: white;
  }
}
.navbar.is-light {
  background-color: whitesmoke;
  color: rgba(0, 0, 0, 0.7);
}
.navbar.is-light .navbar-brand > .navbar-item,
.navbar.is-light .navbar-brand .navbar-link {
  color: rgba(0, 0, 0, 0.7);
}
.navbar.is-light .navbar-brand > a.navbar-item:focus, .navbar.is-light .navbar-brand > a.navbar-item:hover, .navbar.is-light .navbar-brand > a.navbar-item.is-active,
.navbar.is-light .navbar-brand .navbar-link:focus,
.navbar.is-light .navbar-brand .navbar-link:hover,
.navbar.is-light .navbar-brand .navbar-link.is-active {
  background-color: #e8e8e8;
  color: rgba(0, 0, 0, 0.7);
}
.navbar.is-light .navbar-brand .navbar-link::after {
  border-color: rgba(0, 0, 0, 0.7);
}
.navbar.is-light .navbar-burger {
  color: rgba(0, 0, 0, 0.7);
}
@media screen and (min-width: 1024px) {
  .navbar.is-light .navbar-start > .navbar-item,
.navbar.is-light .navbar-start .navbar-link,
.navbar.is-light .navbar-end > .navbar-item,
.navbar.is-light .navbar-end .navbar-link {
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-light .navbar-start > a.navbar-item:focus, .navbar.is-light .navbar-start > a.navbar-item:hover, .navbar.is-light .navbar-start > a.navbar-item.is-active,
.navbar.is-light .navbar-start .navbar-link:focus,
.navbar.is-light .navbar-start .navbar-link:hover,
.navbar.is-light .navbar-start .navbar-link.is-active,
.navbar.is-light .navbar-end > a.navbar-item:focus,
.navbar.is-light .navbar-end > a.navbar-item:hover,
.navbar.is-light .navbar-end > a.navbar-item.is-active,
.navbar.is-light .navbar-end .navbar-link:focus,
.navbar.is-light .navbar-end .navbar-link:hover,
.navbar.is-light .navbar-end .navbar-link.is-active {
    background-color: #e8e8e8;
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-light .navbar-start .navbar-link::after,
.navbar.is-light .navbar-end .navbar-link::after {
    border-color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-light .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-light .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #e8e8e8;
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-light .navbar-dropdown a.navbar-item.is-active {
    background-color: whitesmoke;
    color: rgba(0, 0, 0, 0.7);
  }
}
.navbar.is-dark {
  background-color: #363636;
  color: #fff;
}
.navbar.is-dark .navbar-brand > .navbar-item,
.navbar.is-dark .navbar-brand .navbar-link {
  color: #fff;
}
.navbar.is-dark .navbar-brand > a.navbar-item:focus, .navbar.is-dark .navbar-brand > a.navbar-item:hover, .navbar.is-dark .navbar-brand > a.navbar-item.is-active,
.navbar.is-dark .navbar-brand .navbar-link:focus,
.navbar.is-dark .navbar-brand .navbar-link:hover,
.navbar.is-dark .navbar-brand .navbar-link.is-active {
  background-color: #292929;
  color: #fff;
}
.navbar.is-dark .navbar-brand .navbar-link::after {
  border-color: #fff;
}
.navbar.is-dark .navbar-burger {
  color: #fff;
}
@media screen and (min-width: 1024px) {
  .navbar.is-dark .navbar-start > .navbar-item,
.navbar.is-dark .navbar-start .navbar-link,
.navbar.is-dark .navbar-end > .navbar-item,
.navbar.is-dark .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-dark .navbar-start > a.navbar-item:focus, .navbar.is-dark .navbar-start > a.navbar-item:hover, .navbar.is-dark .navbar-start > a.navbar-item.is-active,
.navbar.is-dark .navbar-start .navbar-link:focus,
.navbar.is-dark .navbar-start .navbar-link:hover,
.navbar.is-dark .navbar-start .navbar-link.is-active,
.navbar.is-dark .navbar-end > a.navbar-item:focus,
.navbar.is-dark .navbar-end > a.navbar-item:hover,
.navbar.is-dark .navbar-end > a.navbar-item.is-active,
.navbar.is-dark .navbar-end .navbar-link:focus,
.navbar.is-dark .navbar-end .navbar-link:hover,
.navbar.is-dark .navbar-end .navbar-link.is-active {
    background-color: #292929;
    color: #fff;
  }
  .navbar.is-dark .navbar-start .navbar-link::after,
.navbar.is-dark .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-dark .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #292929;
    color: #fff;
  }
  .navbar.is-dark .navbar-dropdown a.navbar-item.is-active {
    background-color: #363636;
    color: #fff;
  }
}
.navbar.is-primary {
  background-color: ${ce};
  color: #fff;
}
.navbar.is-primary .navbar-brand > .navbar-item,
.navbar.is-primary .navbar-brand .navbar-link {
  color: #fff;
}
.navbar.is-primary .navbar-brand > a.navbar-item:focus, .navbar.is-primary .navbar-brand > a.navbar-item:hover, .navbar.is-primary .navbar-brand > a.navbar-item.is-active,
.navbar.is-primary .navbar-brand .navbar-link:focus,
.navbar.is-primary .navbar-brand .navbar-link:hover,
.navbar.is-primary .navbar-brand .navbar-link.is-active {
  background-color: #00b89c;
  color: #fff;
}
.navbar.is-primary .navbar-brand .navbar-link::after {
  border-color: #fff;
}
.navbar.is-primary .navbar-burger {
  color: #fff;
}
@media screen and (min-width: 1024px) {
  .navbar.is-primary .navbar-start > .navbar-item,
.navbar.is-primary .navbar-start .navbar-link,
.navbar.is-primary .navbar-end > .navbar-item,
.navbar.is-primary .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-primary .navbar-start > a.navbar-item:focus, .navbar.is-primary .navbar-start > a.navbar-item:hover, .navbar.is-primary .navbar-start > a.navbar-item.is-active,
.navbar.is-primary .navbar-start .navbar-link:focus,
.navbar.is-primary .navbar-start .navbar-link:hover,
.navbar.is-primary .navbar-start .navbar-link.is-active,
.navbar.is-primary .navbar-end > a.navbar-item:focus,
.navbar.is-primary .navbar-end > a.navbar-item:hover,
.navbar.is-primary .navbar-end > a.navbar-item.is-active,
.navbar.is-primary .navbar-end .navbar-link:focus,
.navbar.is-primary .navbar-end .navbar-link:hover,
.navbar.is-primary .navbar-end .navbar-link.is-active {
    background-color: #00b89c;
    color: #fff;
  }
  .navbar.is-primary .navbar-start .navbar-link::after,
.navbar.is-primary .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-primary .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #00b89c;
    color: #fff;
  }
  .navbar.is-primary .navbar-dropdown a.navbar-item.is-active {
    background-color: ${ce};
    color: #fff;
  }
}
.navbar.is-link {
  background-color: #4FB3D9;
  color: #fff;
}
.navbar.is-link .navbar-brand > .navbar-item,
.navbar.is-link .navbar-brand .navbar-link {
  color: #fff;
}
.navbar.is-link .navbar-brand > a.navbar-item:focus, .navbar.is-link .navbar-brand > a.navbar-item:hover, .navbar.is-link .navbar-brand > a.navbar-item.is-active,
.navbar.is-link .navbar-brand .navbar-link:focus,
.navbar.is-link .navbar-brand .navbar-link:hover,
.navbar.is-link .navbar-brand .navbar-link.is-active {
  background-color: #3aaad4;
  color: #fff;
}
.navbar.is-link .navbar-brand .navbar-link::after {
  border-color: #fff;
}
.navbar.is-link .navbar-burger {
  color: #fff;
}
@media screen and (min-width: 1024px) {
  .navbar.is-link .navbar-start > .navbar-item,
.navbar.is-link .navbar-start .navbar-link,
.navbar.is-link .navbar-end > .navbar-item,
.navbar.is-link .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-link .navbar-start > a.navbar-item:focus, .navbar.is-link .navbar-start > a.navbar-item:hover, .navbar.is-link .navbar-start > a.navbar-item.is-active,
.navbar.is-link .navbar-start .navbar-link:focus,
.navbar.is-link .navbar-start .navbar-link:hover,
.navbar.is-link .navbar-start .navbar-link.is-active,
.navbar.is-link .navbar-end > a.navbar-item:focus,
.navbar.is-link .navbar-end > a.navbar-item:hover,
.navbar.is-link .navbar-end > a.navbar-item.is-active,
.navbar.is-link .navbar-end .navbar-link:focus,
.navbar.is-link .navbar-end .navbar-link:hover,
.navbar.is-link .navbar-end .navbar-link.is-active {
    background-color: #3aaad4;
    color: #fff;
  }
  .navbar.is-link .navbar-start .navbar-link::after,
.navbar.is-link .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-link .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-link .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #3aaad4;
    color: #fff;
  }
  .navbar.is-link .navbar-dropdown a.navbar-item.is-active {
    background-color: #4FB3D9;
    color: #fff;
  }
}
.navbar.is-info {
  background-color: #3298dc;
  color: #fff;
}
.navbar.is-info .navbar-brand > .navbar-item,
.navbar.is-info .navbar-brand .navbar-link {
  color: #fff;
}
.navbar.is-info .navbar-brand > a.navbar-item:focus, .navbar.is-info .navbar-brand > a.navbar-item:hover, .navbar.is-info .navbar-brand > a.navbar-item.is-active,
.navbar.is-info .navbar-brand .navbar-link:focus,
.navbar.is-info .navbar-brand .navbar-link:hover,
.navbar.is-info .navbar-brand .navbar-link.is-active {
  background-color: #238cd1;
  color: #fff;
}
.navbar.is-info .navbar-brand .navbar-link::after {
  border-color: #fff;
}
.navbar.is-info .navbar-burger {
  color: #fff;
}
@media screen and (min-width: 1024px) {
  .navbar.is-info .navbar-start > .navbar-item,
.navbar.is-info .navbar-start .navbar-link,
.navbar.is-info .navbar-end > .navbar-item,
.navbar.is-info .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-info .navbar-start > a.navbar-item:focus, .navbar.is-info .navbar-start > a.navbar-item:hover, .navbar.is-info .navbar-start > a.navbar-item.is-active,
.navbar.is-info .navbar-start .navbar-link:focus,
.navbar.is-info .navbar-start .navbar-link:hover,
.navbar.is-info .navbar-start .navbar-link.is-active,
.navbar.is-info .navbar-end > a.navbar-item:focus,
.navbar.is-info .navbar-end > a.navbar-item:hover,
.navbar.is-info .navbar-end > a.navbar-item.is-active,
.navbar.is-info .navbar-end .navbar-link:focus,
.navbar.is-info .navbar-end .navbar-link:hover,
.navbar.is-info .navbar-end .navbar-link.is-active {
    background-color: #238cd1;
    color: #fff;
  }
  .navbar.is-info .navbar-start .navbar-link::after,
.navbar.is-info .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-info .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-info .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #238cd1;
    color: #fff;
  }
  .navbar.is-info .navbar-dropdown a.navbar-item.is-active {
    background-color: #3298dc;
    color: #fff;
  }
}
.navbar.is-success {
  background-color: #48c774;
  color: #fff;
}
.navbar.is-success .navbar-brand > .navbar-item,
.navbar.is-success .navbar-brand .navbar-link {
  color: #fff;
}
.navbar.is-success .navbar-brand > a.navbar-item:focus, .navbar.is-success .navbar-brand > a.navbar-item:hover, .navbar.is-success .navbar-brand > a.navbar-item.is-active,
.navbar.is-success .navbar-brand .navbar-link:focus,
.navbar.is-success .navbar-brand .navbar-link:hover,
.navbar.is-success .navbar-brand .navbar-link.is-active {
  background-color: #3abb67;
  color: #fff;
}
.navbar.is-success .navbar-brand .navbar-link::after {
  border-color: #fff;
}
.navbar.is-success .navbar-burger {
  color: #fff;
}
@media screen and (min-width: 1024px) {
  .navbar.is-success .navbar-start > .navbar-item,
.navbar.is-success .navbar-start .navbar-link,
.navbar.is-success .navbar-end > .navbar-item,
.navbar.is-success .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-success .navbar-start > a.navbar-item:focus, .navbar.is-success .navbar-start > a.navbar-item:hover, .navbar.is-success .navbar-start > a.navbar-item.is-active,
.navbar.is-success .navbar-start .navbar-link:focus,
.navbar.is-success .navbar-start .navbar-link:hover,
.navbar.is-success .navbar-start .navbar-link.is-active,
.navbar.is-success .navbar-end > a.navbar-item:focus,
.navbar.is-success .navbar-end > a.navbar-item:hover,
.navbar.is-success .navbar-end > a.navbar-item.is-active,
.navbar.is-success .navbar-end .navbar-link:focus,
.navbar.is-success .navbar-end .navbar-link:hover,
.navbar.is-success .navbar-end .navbar-link.is-active {
    background-color: #3abb67;
    color: #fff;
  }
  .navbar.is-success .navbar-start .navbar-link::after,
.navbar.is-success .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-success .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-success .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #3abb67;
    color: #fff;
  }
  .navbar.is-success .navbar-dropdown a.navbar-item.is-active {
    background-color: #48c774;
    color: #fff;
  }
}
.navbar.is-warning {
  background-color: #F9CD69;
  color: rgba(0, 0, 0, 0.7);
}
.navbar.is-warning .navbar-brand > .navbar-item,
.navbar.is-warning .navbar-brand .navbar-link {
  color: rgba(0, 0, 0, 0.7);
}
.navbar.is-warning .navbar-brand > a.navbar-item:focus, .navbar.is-warning .navbar-brand > a.navbar-item:hover, .navbar.is-warning .navbar-brand > a.navbar-item.is-active,
.navbar.is-warning .navbar-brand .navbar-link:focus,
.navbar.is-warning .navbar-brand .navbar-link:hover,
.navbar.is-warning .navbar-brand .navbar-link.is-active {
  background-color: #f8c550;
  color: rgba(0, 0, 0, 0.7);
}
.navbar.is-warning .navbar-brand .navbar-link::after {
  border-color: rgba(0, 0, 0, 0.7);
}
.navbar.is-warning .navbar-burger {
  color: rgba(0, 0, 0, 0.7);
}
@media screen and (min-width: 1024px) {
  .navbar.is-warning .navbar-start > .navbar-item,
.navbar.is-warning .navbar-start .navbar-link,
.navbar.is-warning .navbar-end > .navbar-item,
.navbar.is-warning .navbar-end .navbar-link {
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-warning .navbar-start > a.navbar-item:focus, .navbar.is-warning .navbar-start > a.navbar-item:hover, .navbar.is-warning .navbar-start > a.navbar-item.is-active,
.navbar.is-warning .navbar-start .navbar-link:focus,
.navbar.is-warning .navbar-start .navbar-link:hover,
.navbar.is-warning .navbar-start .navbar-link.is-active,
.navbar.is-warning .navbar-end > a.navbar-item:focus,
.navbar.is-warning .navbar-end > a.navbar-item:hover,
.navbar.is-warning .navbar-end > a.navbar-item.is-active,
.navbar.is-warning .navbar-end .navbar-link:focus,
.navbar.is-warning .navbar-end .navbar-link:hover,
.navbar.is-warning .navbar-end .navbar-link.is-active {
    background-color: #f8c550;
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-warning .navbar-start .navbar-link::after,
.navbar.is-warning .navbar-end .navbar-link::after {
    border-color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-warning .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #f8c550;
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-warning .navbar-dropdown a.navbar-item.is-active {
    background-color: #F9CD69;
    color: rgba(0, 0, 0, 0.7);
  }
}
.navbar.is-danger {
  background-color: #c21f3a;
  color: #fff;
}
.navbar.is-danger .navbar-brand > .navbar-item,
.navbar.is-danger .navbar-brand .navbar-link {
  color: #fff;
}
.navbar.is-danger .navbar-brand > a.navbar-item:focus, .navbar.is-danger .navbar-brand > a.navbar-item:hover, .navbar.is-danger .navbar-brand > a.navbar-item.is-active,
.navbar.is-danger .navbar-brand .navbar-link:focus,
.navbar.is-danger .navbar-brand .navbar-link:hover,
.navbar.is-danger .navbar-brand .navbar-link.is-active {
  background-color: #ac1b33;
  color: #fff;
}
.navbar.is-danger .navbar-brand .navbar-link::after {
  border-color: #fff;
}
.navbar.is-danger .navbar-burger {
  color: #fff;
}
@media screen and (min-width: 1024px) {
  .navbar.is-danger .navbar-start > .navbar-item,
.navbar.is-danger .navbar-start .navbar-link,
.navbar.is-danger .navbar-end > .navbar-item,
.navbar.is-danger .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-danger .navbar-start > a.navbar-item:focus, .navbar.is-danger .navbar-start > a.navbar-item:hover, .navbar.is-danger .navbar-start > a.navbar-item.is-active,
.navbar.is-danger .navbar-start .navbar-link:focus,
.navbar.is-danger .navbar-start .navbar-link:hover,
.navbar.is-danger .navbar-start .navbar-link.is-active,
.navbar.is-danger .navbar-end > a.navbar-item:focus,
.navbar.is-danger .navbar-end > a.navbar-item:hover,
.navbar.is-danger .navbar-end > a.navbar-item.is-active,
.navbar.is-danger .navbar-end .navbar-link:focus,
.navbar.is-danger .navbar-end .navbar-link:hover,
.navbar.is-danger .navbar-end .navbar-link.is-active {
    background-color: #ac1b33;
    color: #fff;
  }
  .navbar.is-danger .navbar-start .navbar-link::after,
.navbar.is-danger .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-danger .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #ac1b33;
    color: #fff;
  }
  .navbar.is-danger .navbar-dropdown a.navbar-item.is-active {
    background-color: #c21f3a;
    color: #fff;
  }
}
.navbar > .container {
  align-items: stretch;
  display: flex;
  min-height: 3.25rem;
  width: 100%;
}
.navbar.has-shadow {
  box-shadow: 0 2px 0 0 whitesmoke;
}
.navbar.is-fixed-bottom, .navbar.is-fixed-top {
  left: 0;
  position: fixed;
  right: 0;
  z-index: 30;
}
.navbar.is-fixed-bottom {
  bottom: 0;
}
.navbar.is-fixed-bottom.has-shadow {
  box-shadow: 0 -2px 0 0 whitesmoke;
}
.navbar.is-fixed-top {
  top: 0;
}

html.has-navbar-fixed-top,
body.has-navbar-fixed-top {
  padding-top: 3.25rem;
}
html.has-navbar-fixed-bottom,
body.has-navbar-fixed-bottom {
  padding-bottom: 3.25rem;
}

.navbar-brand,
.navbar-tabs {
  align-items: stretch;
  display: flex;
  flex-shrink: 0;
  min-height: 3.25rem;
}

.navbar-brand a.navbar-item:focus, .navbar-brand a.navbar-item:hover {
  background-color: transparent;
}

.navbar-tabs {
  -webkit-overflow-scrolling: touch;
  max-width: 100vw;
  overflow-x: auto;
  overflow-y: hidden;
}

.navbar-burger {
  color: white;
  cursor: pointer;
  display: block;
  height: 3.25rem;
  position: relative;
  width: 3.25rem;
  margin-left: auto;
}
.navbar-burger span {
  background-color: currentColor;
  display: block;
  height: 1px;
  left: calc(50% - 8px);
  position: absolute;
  transform-origin: center;
  transition-duration: 86ms;
  transition-property: background-color, opacity, transform;
  transition-timing-function: ease-out;
  width: 16px;
}
.navbar-burger span:nth-child(1) {
  top: calc(50% - 6px);
}
.navbar-burger span:nth-child(2) {
  top: calc(50% - 1px);
}
.navbar-burger span:nth-child(3) {
  top: calc(50% + 4px);
}
.navbar-burger:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
.navbar-burger.is-active span:nth-child(1) {
  transform: translateY(5px) rotate(45deg);
}
.navbar-burger.is-active span:nth-child(2) {
  opacity: 0;
}
.navbar-burger.is-active span:nth-child(3) {
  transform: translateY(-5px) rotate(-45deg);
}

.navbar-menu {
  display: none;
}

.navbar-item,
.navbar-link {
  color: white;
  display: block;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;
}
.navbar-item .icon:only-child,
.navbar-link .icon:only-child {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}

a.navbar-item,
.navbar-link {
  cursor: pointer;
}
a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover, a.navbar-item.is-active,
.navbar-link:focus,
.navbar-link:focus-within,
.navbar-link:hover,
.navbar-link.is-active {
  background-color: #576573;
  color: white;
}

.navbar-item {
  flex-grow: 0;
  flex-shrink: 0;
}
.navbar-item img {
  max-height: 1.75rem;
}
.navbar-item.has-dropdown {
  padding: 0;
}
.navbar-item.is-expanded {
  flex-grow: 1;
  flex-shrink: 1;
}
.navbar-item.is-tab {
  border-bottom: 1px solid transparent;
  min-height: 3.25rem;
  padding-bottom: calc(0.5rem - 1px);
}
.navbar-item.is-tab:focus, .navbar-item.is-tab:hover {
  background-color: transparent;
  border-bottom-color: #4FB3D9;
}
.navbar-item.is-tab.is-active {
  background-color: transparent;
  border-bottom-color: #4FB3D9;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  color: #4FB3D9;
  padding-bottom: calc(0.5rem - 3px);
}

.navbar-content {
  flex-grow: 1;
  flex-shrink: 1;
}

.navbar-link:not(.is-arrowless) {
  padding-right: 2.5em;
}
.navbar-link:not(.is-arrowless)::after {
  border-color: #4FB3D9;
  margin-top: -0.375em;
  right: 1.125em;
}

.navbar-dropdown {
  font-size: 0.875rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
}
.navbar-dropdown .navbar-item {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.navbar-divider {
  background-color: whitesmoke;
  border: none;
  display: none;
  height: 2px;
  margin: 0.5rem 0;
}

@media screen and (max-width: 1023px) {
  .navbar > .container {
    display: block;
  }

  .navbar-brand .navbar-item,
.navbar-tabs .navbar-item {
    align-items: center;
    display: flex;
  }

  .navbar-link::after {
    display: none;
  }

  .navbar-menu {
    background-color: white;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    padding: 0.5rem 0;
  }
  .navbar-menu.is-active {
    display: block;
  }

  .navbar.is-fixed-bottom-touch, .navbar.is-fixed-top-touch {
    left: 0;
    position: fixed;
    right: 0;
    z-index: 30;
  }
  .navbar.is-fixed-bottom-touch {
    bottom: 0;
  }
  .navbar.is-fixed-bottom-touch.has-shadow {
    box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.1);
  }
  .navbar.is-fixed-top-touch {
    top: 0;
  }
  .navbar.is-fixed-top .navbar-menu, .navbar.is-fixed-top-touch .navbar-menu {
    -webkit-overflow-scrolling: touch;
    max-height: calc(100vh - 3.25rem);
    overflow: auto;
  }

  html.has-navbar-fixed-top-touch,
body.has-navbar-fixed-top-touch {
    padding-top: 3.25rem;
  }
  html.has-navbar-fixed-bottom-touch,
body.has-navbar-fixed-bottom-touch {
    padding-bottom: 3.25rem;
  }
}
@media screen and (min-width: 1024px) {
  .navbar,
.navbar-menu,
.navbar-start,
.navbar-end {
    align-items: stretch;
    display: flex;
  }

  .navbar {
    min-height: 3.25rem;
  }
  .navbar.is-spaced {
    padding: 1rem 2rem;
  }
  .navbar.is-spaced .navbar-start,
.navbar.is-spaced .navbar-end {
    align-items: center;
  }
  .navbar.is-spaced a.navbar-item,
.navbar.is-spaced .navbar-link {
    border-radius: 4px;
  }
  .navbar.is-transparent a.navbar-item:focus, .navbar.is-transparent a.navbar-item:hover, .navbar.is-transparent a.navbar-item.is-active,
.navbar.is-transparent .navbar-link:focus,
.navbar.is-transparent .navbar-link:hover,
.navbar.is-transparent .navbar-link.is-active {
    background-color: transparent !important;
  }
  .navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus-within .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link {
    background-color: transparent !important;
  }
  .navbar.is-transparent .navbar-dropdown a.navbar-item:focus, .navbar.is-transparent .navbar-dropdown a.navbar-item:hover {
    background-color: whitesmoke;
    color: black;
  }
  .navbar.is-transparent .navbar-dropdown a.navbar-item.is-active {
    background-color: whitesmoke;
    color: #4FB3D9;
  }

  .navbar-burger {
    display: none;
  }

  .navbar-item,
.navbar-link {
    align-items: center;
    display: flex;
  }

  .navbar-item.has-dropdown {
    align-items: stretch;
  }
  .navbar-item.has-dropdown-up .navbar-link::after {
    transform: rotate(135deg) translate(0.25em, -0.25em);
  }
  .navbar-item.has-dropdown-up .navbar-dropdown {
    border-bottom: 2px solid #dbdbdb;
    border-radius: 6px 6px 0 0;
    border-top: none;
    bottom: 100%;
    box-shadow: 0 -8px 8px rgba(0, 0, 0, 0.1);
    top: auto;
  }
  .navbar-item.is-active .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown {
    display: block;
  }
  .navbar.is-spaced .navbar-item.is-active .navbar-dropdown, .navbar-item.is-active .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .navbar-menu {
    flex-grow: 1;
    flex-shrink: 0;
  }

  .navbar-start {
    justify-content: flex-start;
    margin-right: auto;
  }

  .navbar-end {
    justify-content: flex-end;
    margin-left: auto;
  }

  .navbar-dropdown {
    background-color: white;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-top: 2px solid #dbdbdb;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
    display: none;
    font-size: 0.875rem;
    left: 0;
    min-width: 100%;
    position: absolute;
    top: 100%;
    z-index: 20;
  }
  .navbar-dropdown .navbar-item {
    padding: 0.375rem 1rem;
    white-space: nowrap;
  }
  .navbar-dropdown a.navbar-item {
    padding-right: 3rem;
  }
  .navbar-dropdown a.navbar-item:focus, .navbar-dropdown a.navbar-item:hover {
    background-color: whitesmoke;
    color: black;
  }
  .navbar-dropdown a.navbar-item.is-active {
    background-color: whitesmoke;
    color: #4FB3D9;
  }
  .navbar.is-spaced .navbar-dropdown, .navbar-dropdown.is-boxed {
    border-radius: 6px;
    border-top: none;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1);
    display: block;
    opacity: 0;
    pointer-events: none;
    top: calc(100% + (-4px));
    transform: translateY(-5px);
    transition-duration: 86ms;
    transition-property: opacity, transform;
  }
  .navbar-dropdown.is-right {
    left: auto;
    right: 0;
  }

  .navbar-divider {
    display: block;
  }

  .navbar > .container .navbar-brand,
.container > .navbar .navbar-brand {
    margin-left: -0.75rem;
  }
  .navbar > .container .navbar-menu,
.container > .navbar .navbar-menu {
    margin-right: -0.75rem;
  }

  .navbar.is-fixed-bottom-desktop, .navbar.is-fixed-top-desktop {
    left: 0;
    position: fixed;
    right: 0;
    z-index: 30;
  }
  .navbar.is-fixed-bottom-desktop {
    bottom: 0;
  }
  .navbar.is-fixed-bottom-desktop.has-shadow {
    box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.1);
  }
  .navbar.is-fixed-top-desktop {
    top: 0;
  }

  html.has-navbar-fixed-top-desktop,
body.has-navbar-fixed-top-desktop {
    padding-top: 3.25rem;
  }
  html.has-navbar-fixed-bottom-desktop,
body.has-navbar-fixed-bottom-desktop {
    padding-bottom: 3.25rem;
  }
  html.has-spaced-navbar-fixed-top,
body.has-spaced-navbar-fixed-top {
    padding-top: 5.25rem;
  }
  html.has-spaced-navbar-fixed-bottom,
body.has-spaced-navbar-fixed-bottom {
    padding-bottom: 5.25rem;
  }

  a.navbar-item.is-active,
.navbar-link.is-active {
    color: #4FB3D9;
  }
  a.navbar-item.is-active:not(:focus):not(:hover),
.navbar-link.is-active:not(:focus):not(:hover) {
    background-color: #576573;
  }

  .navbar-item.has-dropdown:focus .navbar-link, .navbar-item.has-dropdown:hover .navbar-link, .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #576573;
  }
}
.hero.is-fullheight-with-navbar {
  min-height: calc(100vh - 3.25rem);
}

.pagination {
  font-size: 1rem;
  margin: -0.25rem;
}
.pagination.is-small {
  font-size: 0.75rem;
}
.pagination.is-medium {
  font-size: 1.25rem;
}
.pagination.is-large {
  font-size: 1.5rem;
}
.pagination.is-rounded .pagination-previous,
.pagination.is-rounded .pagination-next {
  padding-left: 1em;
  padding-right: 1em;
  border-radius: 290486px;
}
.pagination.is-rounded .pagination-link {
  border-radius: 290486px;
}

.pagination,
.pagination-list {
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
}

.pagination-previous,
.pagination-next,
.pagination-link,
.pagination-ellipsis {
  font-size: 1em;
  justify-content: center;
  margin: 0.25rem;
  padding-left: 0.5em;
  padding-right: 0.5em;
  text-align: center;
}

.pagination-previous,
.pagination-next,
.pagination-link {
  border-color: #dbdbdb;
  color: #363636;
  min-width: 2.5em;
}
.pagination-previous:hover,
.pagination-next:hover,
.pagination-link:hover {
  border-color: #b5b5b5;
  color: #363636;
}
.pagination-previous:focus,
.pagination-next:focus,
.pagination-link:focus {
  border-color: #3273dc;
}
.pagination-previous:active,
.pagination-next:active,
.pagination-link:active {
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2);
}
.pagination-previous[disabled],
.pagination-next[disabled],
.pagination-link[disabled] {
  background-color: #dbdbdb;
  border-color: #dbdbdb;
  box-shadow: none;
  color: #7a7a7a;
  opacity: 0.5;
}

.pagination-previous,
.pagination-next {
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
}

.pagination-link.is-current {
  background-color: #4FB3D9;
  border-color: #4FB3D9;
  color: #fff;
}

.pagination-ellipsis {
  color: #b5b5b5;
  pointer-events: none;
}

.pagination-list {
  flex-wrap: wrap;
}
.pagination-list li {
  list-style: none;
}

@media screen and (max-width: 768px) {
  .pagination {
    flex-wrap: wrap;
  }

  .pagination-previous,
.pagination-next {
    flex-grow: 1;
    flex-shrink: 1;
  }

  .pagination-list li {
    flex-grow: 1;
    flex-shrink: 1;
  }
}
@media screen and (min-width: 769px), print {
  .pagination-list {
    flex-grow: 1;
    flex-shrink: 1;
    justify-content: flex-start;
    order: 1;
  }

  .pagination-previous {
    order: 2;
  }

  .pagination-next {
    order: 3;
  }

  .pagination {
    justify-content: space-between;
  }
  .pagination.is-centered .pagination-previous {
    order: 1;
  }
  .pagination.is-centered .pagination-list {
    justify-content: center;
    order: 2;
  }
  .pagination.is-centered .pagination-next {
    order: 3;
  }
  .pagination.is-right .pagination-previous {
    order: 1;
  }
  .pagination.is-right .pagination-next {
    order: 2;
  }
  .pagination.is-right .pagination-list {
    justify-content: flex-end;
    order: 3;
  }
}
.panel {
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(0, 0, 0, 0.1), 0 0px 0 1px rgba(0, 0, 0, 0.02);
  font-size: 1rem;
}
.panel:not(:last-child) {
  margin-bottom: 1.5rem;
}
.panel.is-white .panel-heading {
  background-color: white;
  color: black;
}
.panel.is-white .panel-tabs a.is-active {
  border-bottom-color: white;
}
.panel.is-white .panel-block.is-active .panel-icon {
  color: white;
}
.panel.is-black .panel-heading {
  background-color: black;
  color: white;
}
.panel.is-black .panel-tabs a.is-active {
  border-bottom-color: black;
}
.panel.is-black .panel-block.is-active .panel-icon {
  color: black;
}
.panel.is-light .panel-heading {
  background-color: whitesmoke;
  color: rgba(0, 0, 0, 0.7);
}
.panel.is-light .panel-tabs a.is-active {
  border-bottom-color: whitesmoke;
}
.panel.is-light .panel-block.is-active .panel-icon {
  color: whitesmoke;
}
.panel.is-dark .panel-heading {
  background-color: #363636;
  color: #fff;
}
.panel.is-dark .panel-tabs a.is-active {
  border-bottom-color: #363636;
}
.panel.is-dark .panel-block.is-active .panel-icon {
  color: #363636;
}
.panel.is-primary .panel-heading {
  background-color: ${ce};
  color: #fff;
}
.panel.is-primary .panel-tabs a.is-active {
  border-bottom-color: ${ce};
}
.panel.is-primary .panel-block.is-active .panel-icon {
  color: ${ce};
}
.panel.is-link .panel-heading {
  background-color: #4FB3D9;
  color: #fff;
}
.panel.is-link .panel-tabs a.is-active {
  border-bottom-color: #4FB3D9;
}
.panel.is-link .panel-block.is-active .panel-icon {
  color: #4FB3D9;
}
.panel.is-info .panel-heading {
  background-color: #3298dc;
  color: #fff;
}
.panel.is-info .panel-tabs a.is-active {
  border-bottom-color: #3298dc;
}
.panel.is-info .panel-block.is-active .panel-icon {
  color: #3298dc;
}
.panel.is-success .panel-heading {
  background-color: #48c774;
  color: #fff;
}
.panel.is-success .panel-tabs a.is-active {
  border-bottom-color: #48c774;
}
.panel.is-success .panel-block.is-active .panel-icon {
  color: #48c774;
}
.panel.is-warning .panel-heading {
  background-color: #F9CD69;
  color: rgba(0, 0, 0, 0.7);
}
.panel.is-warning .panel-tabs a.is-active {
  border-bottom-color: #F9CD69;
}
.panel.is-warning .panel-block.is-active .panel-icon {
  color: #F9CD69;
}
.panel.is-danger .panel-heading {
  background-color: #c21f3a;
  color: #fff;
}
.panel.is-danger .panel-tabs a.is-active {
  border-bottom-color: #c21f3a;
}
.panel.is-danger .panel-block.is-active .panel-icon {
  color: #c21f3a;
}

.panel-tabs:not(:last-child),
.panel-block:not(:last-child) {
  border-bottom: 1px solid #ededed;
}

.panel-heading {
  background-color: #ededed;
  border-radius: 6px 6px 0 0;
  color: #363636;
  font-size: 1.25em;
  font-weight: 700;
  line-height: 1.25;
  padding: 0.75em 1em;
}

.panel-tabs {
  align-items: flex-end;
  display: flex;
  font-size: 0.875em;
  justify-content: center;
}
.panel-tabs a {
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: -1px;
  padding: 0.5em;
}
.panel-tabs a.is-active {
  border-bottom-color: #4a4a4a;
  color: #363636;
}

.panel-list a {
  color: #4a4a4a;
}
.panel-list a:hover {
  color: #4FB3D9;
}

.panel-block {
  align-items: center;
  color: #363636;
  display: flex;
  justify-content: flex-start;
  padding: 0.5em 0.75em;
}
.panel-block input[type=checkbox] {
  margin-right: 0.75em;
}
.panel-block > .control {
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
}
.panel-block.is-wrapped {
  flex-wrap: wrap;
}
.panel-block.is-active {
  border-left-color: #4FB3D9;
  color: #363636;
}
.panel-block.is-active .panel-icon {
  color: #4FB3D9;
}
.panel-block:last-child {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

a.panel-block,
label.panel-block {
  cursor: pointer;
}
a.panel-block:hover,
label.panel-block:hover {
  background-color: whitesmoke;
}

.panel-icon {
  display: inline-block;
  font-size: 14px;
  height: 1em;
  line-height: 1em;
  text-align: center;
  vertical-align: top;
  width: 1em;
  color: #7a7a7a;
  margin-right: 0.75em;
}
.panel-icon .fa {
  font-size: inherit;
  line-height: inherit;
}

.tabs {
  -webkit-overflow-scrolling: touch;
  align-items: stretch;
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
}
.tabs a {
  align-items: center;
  border-bottom-color: #dbdbdb;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  color: #4a4a4a;
  display: flex;
  justify-content: center;
  margin-bottom: -1px;
  padding: 0.5em 1em;
  vertical-align: top;
}
.tabs a:hover {
  border-bottom-color: #363636;
  color: #363636;
}
.tabs li {
  display: block;
}
.tabs li.is-active a {
  border-bottom-color: #4FB3D9;
  color: #4FB3D9;
}
.tabs ul {
  align-items: center;
  border-bottom-color: #dbdbdb;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: flex-start;
}
.tabs ul.is-left {
  padding-right: 0.75em;
}
.tabs ul.is-center {
  flex: none;
  justify-content: center;
  padding-left: 0.75em;
  padding-right: 0.75em;
}
.tabs ul.is-right {
  justify-content: flex-end;
  padding-left: 0.75em;
}
.tabs .icon:first-child {
  margin-right: 0.5em;
}
.tabs .icon:last-child {
  margin-left: 0.5em;
}
.tabs.is-centered ul {
  justify-content: center;
}
.tabs.is-right ul {
  justify-content: flex-end;
}
.tabs.is-boxed a {
  border: 1px solid transparent;
  border-radius: 4px 4px 0 0;
}
.tabs.is-boxed a:hover {
  background-color: whitesmoke;
  border-bottom-color: #dbdbdb;
}
.tabs.is-boxed li.is-active a {
  background-color: white;
  border-color: #dbdbdb;
  border-bottom-color: transparent !important;
}
.tabs.is-fullwidth li {
  flex-grow: 1;
  flex-shrink: 0;
}
.tabs.is-toggle a {
  border-color: #dbdbdb;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 0;
  position: relative;
}
.tabs.is-toggle a:hover {
  background-color: whitesmoke;
  border-color: #b5b5b5;
  z-index: 2;
}
.tabs.is-toggle li + li {
  margin-left: -1px;
}
.tabs.is-toggle li:first-child a {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.tabs.is-toggle li:last-child a {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.tabs.is-toggle li.is-active a {
  background-color: #4FB3D9;
  border-color: #4FB3D9;
  color: #fff;
  z-index: 1;
}
.tabs.is-toggle ul {
  border-bottom: none;
}
.tabs.is-toggle.is-toggle-rounded li:first-child a {
  border-bottom-left-radius: 290486px;
  border-top-left-radius: 290486px;
  padding-left: 1.25em;
}
.tabs.is-toggle.is-toggle-rounded li:last-child a {
  border-bottom-right-radius: 290486px;
  border-top-right-radius: 290486px;
  padding-right: 1.25em;
}
.tabs.is-small {
  font-size: 0.75rem;
}
.tabs.is-medium {
  font-size: 1.25rem;
}
.tabs.is-large {
  font-size: 1.5rem;
}

/* Bulma Grid */
.column {
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem;
}
.columns.is-mobile > .column.is-narrow {
  flex: none;
  width: unset;
}
.columns.is-mobile > .column.is-full {
  flex: none;
  width: 100%;
}
.columns.is-mobile > .column.is-three-quarters {
  flex: none;
  width: 75%;
}
.columns.is-mobile > .column.is-two-thirds {
  flex: none;
  width: 66.6666%;
}
.columns.is-mobile > .column.is-half {
  flex: none;
  width: 50%;
}
.columns.is-mobile > .column.is-one-third {
  flex: none;
  width: 33.3333%;
}
.columns.is-mobile > .column.is-one-quarter {
  flex: none;
  width: 25%;
}
.columns.is-mobile > .column.is-one-fifth {
  flex: none;
  width: 20%;
}
.columns.is-mobile > .column.is-two-fifths {
  flex: none;
  width: 40%;
}
.columns.is-mobile > .column.is-three-fifths {
  flex: none;
  width: 60%;
}
.columns.is-mobile > .column.is-four-fifths {
  flex: none;
  width: 80%;
}
.columns.is-mobile > .column.is-offset-three-quarters {
  margin-left: 75%;
}
.columns.is-mobile > .column.is-offset-two-thirds {
  margin-left: 66.6666%;
}
.columns.is-mobile > .column.is-offset-half {
  margin-left: 50%;
}
.columns.is-mobile > .column.is-offset-one-third {
  margin-left: 33.3333%;
}
.columns.is-mobile > .column.is-offset-one-quarter {
  margin-left: 25%;
}
.columns.is-mobile > .column.is-offset-one-fifth {
  margin-left: 20%;
}
.columns.is-mobile > .column.is-offset-two-fifths {
  margin-left: 40%;
}
.columns.is-mobile > .column.is-offset-three-fifths {
  margin-left: 60%;
}
.columns.is-mobile > .column.is-offset-four-fifths {
  margin-left: 80%;
}
.columns.is-mobile > .column.is-0 {
  flex: none;
  width: 0%;
}
.columns.is-mobile > .column.is-offset-0 {
  margin-left: 0%;
}
.columns.is-mobile > .column.is-1 {
  flex: none;
  width: 8.3333333333%;
}
.columns.is-mobile > .column.is-offset-1 {
  margin-left: 8.3333333333%;
}
.columns.is-mobile > .column.is-2 {
  flex: none;
  width: 16.6666666667%;
}
.columns.is-mobile > .column.is-offset-2 {
  margin-left: 16.6666666667%;
}
.columns.is-mobile > .column.is-3 {
  flex: none;
  width: 25%;
}
.columns.is-mobile > .column.is-offset-3 {
  margin-left: 25%;
}
.columns.is-mobile > .column.is-4 {
  flex: none;
  width: 33.3333333333%;
}
.columns.is-mobile > .column.is-offset-4 {
  margin-left: 33.3333333333%;
}
.columns.is-mobile > .column.is-5 {
  flex: none;
  width: 41.6666666667%;
}
.columns.is-mobile > .column.is-offset-5 {
  margin-left: 41.6666666667%;
}
.columns.is-mobile > .column.is-6 {
  flex: none;
  width: 50%;
}
.columns.is-mobile > .column.is-offset-6 {
  margin-left: 50%;
}
.columns.is-mobile > .column.is-7 {
  flex: none;
  width: 58.3333333333%;
}
.columns.is-mobile > .column.is-offset-7 {
  margin-left: 58.3333333333%;
}
.columns.is-mobile > .column.is-8 {
  flex: none;
  width: 66.6666666667%;
}
.columns.is-mobile > .column.is-offset-8 {
  margin-left: 66.6666666667%;
}
.columns.is-mobile > .column.is-9 {
  flex: none;
  width: 75%;
}
.columns.is-mobile > .column.is-offset-9 {
  margin-left: 75%;
}
.columns.is-mobile > .column.is-10 {
  flex: none;
  width: 83.3333333333%;
}
.columns.is-mobile > .column.is-offset-10 {
  margin-left: 83.3333333333%;
}
.columns.is-mobile > .column.is-11 {
  flex: none;
  width: 91.6666666667%;
}
.columns.is-mobile > .column.is-offset-11 {
  margin-left: 91.6666666667%;
}
.columns.is-mobile > .column.is-12 {
  flex: none;
  width: 100%;
}
.columns.is-mobile > .column.is-offset-12 {
  margin-left: 100%;
}
@media screen and (max-width: 768px) {
  .column.is-narrow-mobile {
    flex: none;
    width: unset;
  }
  .column.is-full-mobile {
    flex: none;
    width: 100%;
  }
  .column.is-three-quarters-mobile {
    flex: none;
    width: 75%;
  }
  .column.is-two-thirds-mobile {
    flex: none;
    width: 66.6666%;
  }
  .column.is-half-mobile {
    flex: none;
    width: 50%;
  }
  .column.is-one-third-mobile {
    flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter-mobile {
    flex: none;
    width: 25%;
  }
  .column.is-one-fifth-mobile {
    flex: none;
    width: 20%;
  }
  .column.is-two-fifths-mobile {
    flex: none;
    width: 40%;
  }
  .column.is-three-fifths-mobile {
    flex: none;
    width: 60%;
  }
  .column.is-four-fifths-mobile {
    flex: none;
    width: 80%;
  }
  .column.is-offset-three-quarters-mobile {
    margin-left: 75%;
  }
  .column.is-offset-two-thirds-mobile {
    margin-left: 66.6666%;
  }
  .column.is-offset-half-mobile {
    margin-left: 50%;
  }
  .column.is-offset-one-third-mobile {
    margin-left: 33.3333%;
  }
  .column.is-offset-one-quarter-mobile {
    margin-left: 25%;
  }
  .column.is-offset-one-fifth-mobile {
    margin-left: 20%;
  }
  .column.is-offset-two-fifths-mobile {
    margin-left: 40%;
  }
  .column.is-offset-three-fifths-mobile {
    margin-left: 60%;
  }
  .column.is-offset-four-fifths-mobile {
    margin-left: 80%;
  }
  .column.is-0-mobile {
    flex: none;
    width: 0%;
  }
  .column.is-offset-0-mobile {
    margin-left: 0%;
  }
  .column.is-1-mobile {
    flex: none;
    width: 8.3333333333%;
  }
  .column.is-offset-1-mobile {
    margin-left: 8.3333333333%;
  }
  .column.is-2-mobile {
    flex: none;
    width: 16.6666666667%;
  }
  .column.is-offset-2-mobile {
    margin-left: 16.6666666667%;
  }
  .column.is-3-mobile {
    flex: none;
    width: 25%;
  }
  .column.is-offset-3-mobile {
    margin-left: 25%;
  }
  .column.is-4-mobile {
    flex: none;
    width: 33.3333333333%;
  }
  .column.is-offset-4-mobile {
    margin-left: 33.3333333333%;
  }
  .column.is-5-mobile {
    flex: none;
    width: 41.6666666667%;
  }
  .column.is-offset-5-mobile {
    margin-left: 41.6666666667%;
  }
  .column.is-6-mobile {
    flex: none;
    width: 50%;
  }
  .column.is-offset-6-mobile {
    margin-left: 50%;
  }
  .column.is-7-mobile {
    flex: none;
    width: 58.3333333333%;
  }
  .column.is-offset-7-mobile {
    margin-left: 58.3333333333%;
  }
  .column.is-8-mobile {
    flex: none;
    width: 66.6666666667%;
  }
  .column.is-offset-8-mobile {
    margin-left: 66.6666666667%;
  }
  .column.is-9-mobile {
    flex: none;
    width: 75%;
  }
  .column.is-offset-9-mobile {
    margin-left: 75%;
  }
  .column.is-10-mobile {
    flex: none;
    width: 83.3333333333%;
  }
  .column.is-offset-10-mobile {
    margin-left: 83.3333333333%;
  }
  .column.is-11-mobile {
    flex: none;
    width: 91.6666666667%;
  }
  .column.is-offset-11-mobile {
    margin-left: 91.6666666667%;
  }
  .column.is-12-mobile {
    flex: none;
    width: 100%;
  }
  .column.is-offset-12-mobile {
    margin-left: 100%;
  }
}
@media screen and (min-width: 769px), print {
  .column.is-narrow, .column.is-narrow-tablet {
    flex: none;
    width: unset;
  }
  .column.is-full, .column.is-full-tablet {
    flex: none;
    width: 100%;
  }
  .column.is-three-quarters, .column.is-three-quarters-tablet {
    flex: none;
    width: 75%;
  }
  .column.is-two-thirds, .column.is-two-thirds-tablet {
    flex: none;
    width: 66.6666%;
  }
  .column.is-half, .column.is-half-tablet {
    flex: none;
    width: 50%;
  }
  .column.is-one-third, .column.is-one-third-tablet {
    flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter, .column.is-one-quarter-tablet {
    flex: none;
    width: 25%;
  }
  .column.is-one-fifth, .column.is-one-fifth-tablet {
    flex: none;
    width: 20%;
  }
  .column.is-two-fifths, .column.is-two-fifths-tablet {
    flex: none;
    width: 40%;
  }
  .column.is-three-fifths, .column.is-three-fifths-tablet {
    flex: none;
    width: 60%;
  }
  .column.is-four-fifths, .column.is-four-fifths-tablet {
    flex: none;
    width: 80%;
  }
  .column.is-offset-three-quarters, .column.is-offset-three-quarters-tablet {
    margin-left: 75%;
  }
  .column.is-offset-two-thirds, .column.is-offset-two-thirds-tablet {
    margin-left: 66.6666%;
  }
  .column.is-offset-half, .column.is-offset-half-tablet {
    margin-left: 50%;
  }
  .column.is-offset-one-third, .column.is-offset-one-third-tablet {
    margin-left: 33.3333%;
  }
  .column.is-offset-one-quarter, .column.is-offset-one-quarter-tablet {
    margin-left: 25%;
  }
  .column.is-offset-one-fifth, .column.is-offset-one-fifth-tablet {
    margin-left: 20%;
  }
  .column.is-offset-two-fifths, .column.is-offset-two-fifths-tablet {
    margin-left: 40%;
  }
  .column.is-offset-three-fifths, .column.is-offset-three-fifths-tablet {
    margin-left: 60%;
  }
  .column.is-offset-four-fifths, .column.is-offset-four-fifths-tablet {
    margin-left: 80%;
  }
  .column.is-0, .column.is-0-tablet {
    flex: none;
    width: 0%;
  }
  .column.is-offset-0, .column.is-offset-0-tablet {
    margin-left: 0%;
  }
  .column.is-1, .column.is-1-tablet {
    flex: none;
    width: 8.3333333333%;
  }
  .column.is-offset-1, .column.is-offset-1-tablet {
    margin-left: 8.3333333333%;
  }
  .column.is-2, .column.is-2-tablet {
    flex: none;
    width: 16.6666666667%;
  }
  .column.is-offset-2, .column.is-offset-2-tablet {
    margin-left: 16.6666666667%;
  }
  .column.is-3, .column.is-3-tablet {
    flex: none;
    width: 25%;
  }
  .column.is-offset-3, .column.is-offset-3-tablet {
    margin-left: 25%;
  }
  .column.is-4, .column.is-4-tablet {
    flex: none;
    width: 33.3333333333%;
  }
  .column.is-offset-4, .column.is-offset-4-tablet {
    margin-left: 33.3333333333%;
  }
  .column.is-5, .column.is-5-tablet {
    flex: none;
    width: 41.6666666667%;
  }
  .column.is-offset-5, .column.is-offset-5-tablet {
    margin-left: 41.6666666667%;
  }
  .column.is-6, .column.is-6-tablet {
    flex: none;
    width: 50%;
  }
  .column.is-offset-6, .column.is-offset-6-tablet {
    margin-left: 50%;
  }
  .column.is-7, .column.is-7-tablet {
    flex: none;
    width: 58.3333333333%;
  }
  .column.is-offset-7, .column.is-offset-7-tablet {
    margin-left: 58.3333333333%;
  }
  .column.is-8, .column.is-8-tablet {
    flex: none;
    width: 66.6666666667%;
  }
  .column.is-offset-8, .column.is-offset-8-tablet {
    margin-left: 66.6666666667%;
  }
  .column.is-9, .column.is-9-tablet {
    flex: none;
    width: 75%;
  }
  .column.is-offset-9, .column.is-offset-9-tablet {
    margin-left: 75%;
  }
  .column.is-10, .column.is-10-tablet {
    flex: none;
    width: 83.3333333333%;
  }
  .column.is-offset-10, .column.is-offset-10-tablet {
    margin-left: 83.3333333333%;
  }
  .column.is-11, .column.is-11-tablet {
    flex: none;
    width: 91.6666666667%;
  }
  .column.is-offset-11, .column.is-offset-11-tablet {
    margin-left: 91.6666666667%;
  }
  .column.is-12, .column.is-12-tablet {
    flex: none;
    width: 100%;
  }
  .column.is-offset-12, .column.is-offset-12-tablet {
    margin-left: 100%;
  }
}
@media screen and (max-width: 1023px) {
  .column.is-narrow-touch {
    flex: none;
    width: unset;
  }
  .column.is-full-touch {
    flex: none;
    width: 100%;
  }
  .column.is-three-quarters-touch {
    flex: none;
    width: 75%;
  }
  .column.is-two-thirds-touch {
    flex: none;
    width: 66.6666%;
  }
  .column.is-half-touch {
    flex: none;
    width: 50%;
  }
  .column.is-one-third-touch {
    flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter-touch {
    flex: none;
    width: 25%;
  }
  .column.is-one-fifth-touch {
    flex: none;
    width: 20%;
  }
  .column.is-two-fifths-touch {
    flex: none;
    width: 40%;
  }
  .column.is-three-fifths-touch {
    flex: none;
    width: 60%;
  }
  .column.is-four-fifths-touch {
    flex: none;
    width: 80%;
  }
  .column.is-offset-three-quarters-touch {
    margin-left: 75%;
  }
  .column.is-offset-two-thirds-touch {
    margin-left: 66.6666%;
  }
  .column.is-offset-half-touch {
    margin-left: 50%;
  }
  .column.is-offset-one-third-touch {
    margin-left: 33.3333%;
  }
  .column.is-offset-one-quarter-touch {
    margin-left: 25%;
  }
  .column.is-offset-one-fifth-touch {
    margin-left: 20%;
  }
  .column.is-offset-two-fifths-touch {
    margin-left: 40%;
  }
  .column.is-offset-three-fifths-touch {
    margin-left: 60%;
  }
  .column.is-offset-four-fifths-touch {
    margin-left: 80%;
  }
  .column.is-0-touch {
    flex: none;
    width: 0%;
  }
  .column.is-offset-0-touch {
    margin-left: 0%;
  }
  .column.is-1-touch {
    flex: none;
    width: 8.3333333333%;
  }
  .column.is-offset-1-touch {
    margin-left: 8.3333333333%;
  }
  .column.is-2-touch {
    flex: none;
    width: 16.6666666667%;
  }
  .column.is-offset-2-touch {
    margin-left: 16.6666666667%;
  }
  .column.is-3-touch {
    flex: none;
    width: 25%;
  }
  .column.is-offset-3-touch {
    margin-left: 25%;
  }
  .column.is-4-touch {
    flex: none;
    width: 33.3333333333%;
  }
  .column.is-offset-4-touch {
    margin-left: 33.3333333333%;
  }
  .column.is-5-touch {
    flex: none;
    width: 41.6666666667%;
  }
  .column.is-offset-5-touch {
    margin-left: 41.6666666667%;
  }
  .column.is-6-touch {
    flex: none;
    width: 50%;
  }
  .column.is-offset-6-touch {
    margin-left: 50%;
  }
  .column.is-7-touch {
    flex: none;
    width: 58.3333333333%;
  }
  .column.is-offset-7-touch {
    margin-left: 58.3333333333%;
  }
  .column.is-8-touch {
    flex: none;
    width: 66.6666666667%;
  }
  .column.is-offset-8-touch {
    margin-left: 66.6666666667%;
  }
  .column.is-9-touch {
    flex: none;
    width: 75%;
  }
  .column.is-offset-9-touch {
    margin-left: 75%;
  }
  .column.is-10-touch {
    flex: none;
    width: 83.3333333333%;
  }
  .column.is-offset-10-touch {
    margin-left: 83.3333333333%;
  }
  .column.is-11-touch {
    flex: none;
    width: 91.6666666667%;
  }
  .column.is-offset-11-touch {
    margin-left: 91.6666666667%;
  }
  .column.is-12-touch {
    flex: none;
    width: 100%;
  }
  .column.is-offset-12-touch {
    margin-left: 100%;
  }
}
@media screen and (min-width: 1024px) {
  .column.is-narrow-desktop {
    flex: none;
    width: unset;
  }
  .column.is-full-desktop {
    flex: none;
    width: 100%;
  }
  .column.is-three-quarters-desktop {
    flex: none;
    width: 75%;
  }
  .column.is-two-thirds-desktop {
    flex: none;
    width: 66.6666%;
  }
  .column.is-half-desktop {
    flex: none;
    width: 50%;
  }
  .column.is-one-third-desktop {
    flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter-desktop {
    flex: none;
    width: 25%;
  }
  .column.is-one-fifth-desktop {
    flex: none;
    width: 20%;
  }
  .column.is-two-fifths-desktop {
    flex: none;
    width: 40%;
  }
  .column.is-three-fifths-desktop {
    flex: none;
    width: 60%;
  }
  .column.is-four-fifths-desktop {
    flex: none;
    width: 80%;
  }
  .column.is-offset-three-quarters-desktop {
    margin-left: 75%;
  }
  .column.is-offset-two-thirds-desktop {
    margin-left: 66.6666%;
  }
  .column.is-offset-half-desktop {
    margin-left: 50%;
  }
  .column.is-offset-one-third-desktop {
    margin-left: 33.3333%;
  }
  .column.is-offset-one-quarter-desktop {
    margin-left: 25%;
  }
  .column.is-offset-one-fifth-desktop {
    margin-left: 20%;
  }
  .column.is-offset-two-fifths-desktop {
    margin-left: 40%;
  }
  .column.is-offset-three-fifths-desktop {
    margin-left: 60%;
  }
  .column.is-offset-four-fifths-desktop {
    margin-left: 80%;
  }
  .column.is-0-desktop {
    flex: none;
    width: 0%;
  }
  .column.is-offset-0-desktop {
    margin-left: 0%;
  }
  .column.is-1-desktop {
    flex: none;
    width: 8.3333333333%;
  }
  .column.is-offset-1-desktop {
    margin-left: 8.3333333333%;
  }
  .column.is-2-desktop {
    flex: none;
    width: 16.6666666667%;
  }
  .column.is-offset-2-desktop {
    margin-left: 16.6666666667%;
  }
  .column.is-3-desktop {
    flex: none;
    width: 25%;
  }
  .column.is-offset-3-desktop {
    margin-left: 25%;
  }
  .column.is-4-desktop {
    flex: none;
    width: 33.3333333333%;
  }
  .column.is-offset-4-desktop {
    margin-left: 33.3333333333%;
  }
  .column.is-5-desktop {
    flex: none;
    width: 41.6666666667%;
  }
  .column.is-offset-5-desktop {
    margin-left: 41.6666666667%;
  }
  .column.is-6-desktop {
    flex: none;
    width: 50%;
  }
  .column.is-offset-6-desktop {
    margin-left: 50%;
  }
  .column.is-7-desktop {
    flex: none;
    width: 58.3333333333%;
  }
  .column.is-offset-7-desktop {
    margin-left: 58.3333333333%;
  }
  .column.is-8-desktop {
    flex: none;
    width: 66.6666666667%;
  }
  .column.is-offset-8-desktop {
    margin-left: 66.6666666667%;
  }
  .column.is-9-desktop {
    flex: none;
    width: 75%;
  }
  .column.is-offset-9-desktop {
    margin-left: 75%;
  }
  .column.is-10-desktop {
    flex: none;
    width: 83.3333333333%;
  }
  .column.is-offset-10-desktop {
    margin-left: 83.3333333333%;
  }
  .column.is-11-desktop {
    flex: none;
    width: 91.6666666667%;
  }
  .column.is-offset-11-desktop {
    margin-left: 91.6666666667%;
  }
  .column.is-12-desktop {
    flex: none;
    width: 100%;
  }
  .column.is-offset-12-desktop {
    margin-left: 100%;
  }
}
@media screen and (min-width: 1216px) {
  .column.is-narrow-widescreen {
    flex: none;
    width: unset;
  }
  .column.is-full-widescreen {
    flex: none;
    width: 100%;
  }
  .column.is-three-quarters-widescreen {
    flex: none;
    width: 75%;
  }
  .column.is-two-thirds-widescreen {
    flex: none;
    width: 66.6666%;
  }
  .column.is-half-widescreen {
    flex: none;
    width: 50%;
  }
  .column.is-one-third-widescreen {
    flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter-widescreen {
    flex: none;
    width: 25%;
  }
  .column.is-one-fifth-widescreen {
    flex: none;
    width: 20%;
  }
  .column.is-two-fifths-widescreen {
    flex: none;
    width: 40%;
  }
  .column.is-three-fifths-widescreen {
    flex: none;
    width: 60%;
  }
  .column.is-four-fifths-widescreen {
    flex: none;
    width: 80%;
  }
  .column.is-offset-three-quarters-widescreen {
    margin-left: 75%;
  }
  .column.is-offset-two-thirds-widescreen {
    margin-left: 66.6666%;
  }
  .column.is-offset-half-widescreen {
    margin-left: 50%;
  }
  .column.is-offset-one-third-widescreen {
    margin-left: 33.3333%;
  }
  .column.is-offset-one-quarter-widescreen {
    margin-left: 25%;
  }
  .column.is-offset-one-fifth-widescreen {
    margin-left: 20%;
  }
  .column.is-offset-two-fifths-widescreen {
    margin-left: 40%;
  }
  .column.is-offset-three-fifths-widescreen {
    margin-left: 60%;
  }
  .column.is-offset-four-fifths-widescreen {
    margin-left: 80%;
  }
  .column.is-0-widescreen {
    flex: none;
    width: 0%;
  }
  .column.is-offset-0-widescreen {
    margin-left: 0%;
  }
  .column.is-1-widescreen {
    flex: none;
    width: 8.3333333333%;
  }
  .column.is-offset-1-widescreen {
    margin-left: 8.3333333333%;
  }
  .column.is-2-widescreen {
    flex: none;
    width: 16.6666666667%;
  }
  .column.is-offset-2-widescreen {
    margin-left: 16.6666666667%;
  }
  .column.is-3-widescreen {
    flex: none;
    width: 25%;
  }
  .column.is-offset-3-widescreen {
    margin-left: 25%;
  }
  .column.is-4-widescreen {
    flex: none;
    width: 33.3333333333%;
  }
  .column.is-offset-4-widescreen {
    margin-left: 33.3333333333%;
  }
  .column.is-5-widescreen {
    flex: none;
    width: 41.6666666667%;
  }
  .column.is-offset-5-widescreen {
    margin-left: 41.6666666667%;
  }
  .column.is-6-widescreen {
    flex: none;
    width: 50%;
  }
  .column.is-offset-6-widescreen {
    margin-left: 50%;
  }
  .column.is-7-widescreen {
    flex: none;
    width: 58.3333333333%;
  }
  .column.is-offset-7-widescreen {
    margin-left: 58.3333333333%;
  }
  .column.is-8-widescreen {
    flex: none;
    width: 66.6666666667%;
  }
  .column.is-offset-8-widescreen {
    margin-left: 66.6666666667%;
  }
  .column.is-9-widescreen {
    flex: none;
    width: 75%;
  }
  .column.is-offset-9-widescreen {
    margin-left: 75%;
  }
  .column.is-10-widescreen {
    flex: none;
    width: 83.3333333333%;
  }
  .column.is-offset-10-widescreen {
    margin-left: 83.3333333333%;
  }
  .column.is-11-widescreen {
    flex: none;
    width: 91.6666666667%;
  }
  .column.is-offset-11-widescreen {
    margin-left: 91.6666666667%;
  }
  .column.is-12-widescreen {
    flex: none;
    width: 100%;
  }
  .column.is-offset-12-widescreen {
    margin-left: 100%;
  }
}
@media screen and (min-width: 1408px) {
  .column.is-narrow-fullhd {
    flex: none;
    width: unset;
  }
  .column.is-full-fullhd {
    flex: none;
    width: 100%;
  }
  .column.is-three-quarters-fullhd {
    flex: none;
    width: 75%;
  }
  .column.is-two-thirds-fullhd {
    flex: none;
    width: 66.6666%;
  }
  .column.is-half-fullhd {
    flex: none;
    width: 50%;
  }
  .column.is-one-third-fullhd {
    flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter-fullhd {
    flex: none;
    width: 25%;
  }
  .column.is-one-fifth-fullhd {
    flex: none;
    width: 20%;
  }
  .column.is-two-fifths-fullhd {
    flex: none;
    width: 40%;
  }
  .column.is-three-fifths-fullhd {
    flex: none;
    width: 60%;
  }
  .column.is-four-fifths-fullhd {
    flex: none;
    width: 80%;
  }
  .column.is-offset-three-quarters-fullhd {
    margin-left: 75%;
  }
  .column.is-offset-two-thirds-fullhd {
    margin-left: 66.6666%;
  }
  .column.is-offset-half-fullhd {
    margin-left: 50%;
  }
  .column.is-offset-one-third-fullhd {
    margin-left: 33.3333%;
  }
  .column.is-offset-one-quarter-fullhd {
    margin-left: 25%;
  }
  .column.is-offset-one-fifth-fullhd {
    margin-left: 20%;
  }
  .column.is-offset-two-fifths-fullhd {
    margin-left: 40%;
  }
  .column.is-offset-three-fifths-fullhd {
    margin-left: 60%;
  }
  .column.is-offset-four-fifths-fullhd {
    margin-left: 80%;
  }
  .column.is-0-fullhd {
    flex: none;
    width: 0%;
  }
  .column.is-offset-0-fullhd {
    margin-left: 0%;
  }
  .column.is-1-fullhd {
    flex: none;
    width: 8.3333333333%;
  }
  .column.is-offset-1-fullhd {
    margin-left: 8.3333333333%;
  }
  .column.is-2-fullhd {
    flex: none;
    width: 16.6666666667%;
  }
  .column.is-offset-2-fullhd {
    margin-left: 16.6666666667%;
  }
  .column.is-3-fullhd {
    flex: none;
    width: 25%;
  }
  .column.is-offset-3-fullhd {
    margin-left: 25%;
  }
  .column.is-4-fullhd {
    flex: none;
    width: 33.3333333333%;
  }
  .column.is-offset-4-fullhd {
    margin-left: 33.3333333333%;
  }
  .column.is-5-fullhd {
    flex: none;
    width: 41.6666666667%;
  }
  .column.is-offset-5-fullhd {
    margin-left: 41.6666666667%;
  }
  .column.is-6-fullhd {
    flex: none;
    width: 50%;
  }
  .column.is-offset-6-fullhd {
    margin-left: 50%;
  }
  .column.is-7-fullhd {
    flex: none;
    width: 58.3333333333%;
  }
  .column.is-offset-7-fullhd {
    margin-left: 58.3333333333%;
  }
  .column.is-8-fullhd {
    flex: none;
    width: 66.6666666667%;
  }
  .column.is-offset-8-fullhd {
    margin-left: 66.6666666667%;
  }
  .column.is-9-fullhd {
    flex: none;
    width: 75%;
  }
  .column.is-offset-9-fullhd {
    margin-left: 75%;
  }
  .column.is-10-fullhd {
    flex: none;
    width: 83.3333333333%;
  }
  .column.is-offset-10-fullhd {
    margin-left: 83.3333333333%;
  }
  .column.is-11-fullhd {
    flex: none;
    width: 91.6666666667%;
  }
  .column.is-offset-11-fullhd {
    margin-left: 91.6666666667%;
  }
  .column.is-12-fullhd {
    flex: none;
    width: 100%;
  }
  .column.is-offset-12-fullhd {
    margin-left: 100%;
  }
}

.columns {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;
}
.columns:last-child {
  margin-bottom: -0.75rem;
}
.columns:not(:last-child) {
  margin-bottom: calc(1.5rem - 0.75rem);
}
.columns.is-centered {
  justify-content: center;
}
.columns.is-gapless {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
}
.columns.is-gapless > .column {
  margin: 0;
  padding: 0 !important;
}
.columns.is-gapless:not(:last-child) {
  margin-bottom: 1.5rem;
}
.columns.is-gapless:last-child {
  margin-bottom: 0;
}
.columns.is-mobile {
  display: flex;
}
.columns.is-multiline {
  flex-wrap: wrap;
}
.columns.is-vcentered {
  align-items: center;
}
@media screen and (min-width: 769px), print {
  .columns:not(.is-desktop) {
    display: flex;
  }
}
@media screen and (min-width: 1024px) {
  .columns.is-desktop {
    display: flex;
  }
}

.columns.is-variable {
  --columnGap: 0.75rem;
  margin-left: calc(-1 * var(--columnGap));
  margin-right: calc(-1 * var(--columnGap));
}
.columns.is-variable > .column {
  padding-left: var(--columnGap);
  padding-right: var(--columnGap);
}
.columns.is-variable.is-0 {
  --columnGap: 0rem;
}
@media screen and (max-width: 768px) {
  .columns.is-variable.is-0-mobile {
    --columnGap: 0rem;
  }
}
@media screen and (min-width: 769px), print {
  .columns.is-variable.is-0-tablet {
    --columnGap: 0rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-0-tablet-only {
    --columnGap: 0rem;
  }
}
@media screen and (max-width: 1023px) {
  .columns.is-variable.is-0-touch {
    --columnGap: 0rem;
  }
}
@media screen and (min-width: 1024px) {
  .columns.is-variable.is-0-desktop {
    --columnGap: 0rem;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-0-desktop-only {
    --columnGap: 0rem;
  }
}
@media screen and (min-width: 1216px) {
  .columns.is-variable.is-0-widescreen {
    --columnGap: 0rem;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-0-widescreen-only {
    --columnGap: 0rem;
  }
}
@media screen and (min-width: 1408px) {
  .columns.is-variable.is-0-fullhd {
    --columnGap: 0rem;
  }
}
.columns.is-variable.is-1 {
  --columnGap: 0.25rem;
}
@media screen and (max-width: 768px) {
  .columns.is-variable.is-1-mobile {
    --columnGap: 0.25rem;
  }
}
@media screen and (min-width: 769px), print {
  .columns.is-variable.is-1-tablet {
    --columnGap: 0.25rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-1-tablet-only {
    --columnGap: 0.25rem;
  }
}
@media screen and (max-width: 1023px) {
  .columns.is-variable.is-1-touch {
    --columnGap: 0.25rem;
  }
}
@media screen and (min-width: 1024px) {
  .columns.is-variable.is-1-desktop {
    --columnGap: 0.25rem;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-1-desktop-only {
    --columnGap: 0.25rem;
  }
}
@media screen and (min-width: 1216px) {
  .columns.is-variable.is-1-widescreen {
    --columnGap: 0.25rem;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-1-widescreen-only {
    --columnGap: 0.25rem;
  }
}
@media screen and (min-width: 1408px) {
  .columns.is-variable.is-1-fullhd {
    --columnGap: 0.25rem;
  }
}
.columns.is-variable.is-2 {
  --columnGap: 0.5rem;
}
@media screen and (max-width: 768px) {
  .columns.is-variable.is-2-mobile {
    --columnGap: 0.5rem;
  }
}
@media screen and (min-width: 769px), print {
  .columns.is-variable.is-2-tablet {
    --columnGap: 0.5rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-2-tablet-only {
    --columnGap: 0.5rem;
  }
}
@media screen and (max-width: 1023px) {
  .columns.is-variable.is-2-touch {
    --columnGap: 0.5rem;
  }
}
@media screen and (min-width: 1024px) {
  .columns.is-variable.is-2-desktop {
    --columnGap: 0.5rem;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-2-desktop-only {
    --columnGap: 0.5rem;
  }
}
@media screen and (min-width: 1216px) {
  .columns.is-variable.is-2-widescreen {
    --columnGap: 0.5rem;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-2-widescreen-only {
    --columnGap: 0.5rem;
  }
}
@media screen and (min-width: 1408px) {
  .columns.is-variable.is-2-fullhd {
    --columnGap: 0.5rem;
  }
}
.columns.is-variable.is-3 {
  --columnGap: 0.75rem;
}
@media screen and (max-width: 768px) {
  .columns.is-variable.is-3-mobile {
    --columnGap: 0.75rem;
  }
}
@media screen and (min-width: 769px), print {
  .columns.is-variable.is-3-tablet {
    --columnGap: 0.75rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-3-tablet-only {
    --columnGap: 0.75rem;
  }
}
@media screen and (max-width: 1023px) {
  .columns.is-variable.is-3-touch {
    --columnGap: 0.75rem;
  }
}
@media screen and (min-width: 1024px) {
  .columns.is-variable.is-3-desktop {
    --columnGap: 0.75rem;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-3-desktop-only {
    --columnGap: 0.75rem;
  }
}
@media screen and (min-width: 1216px) {
  .columns.is-variable.is-3-widescreen {
    --columnGap: 0.75rem;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-3-widescreen-only {
    --columnGap: 0.75rem;
  }
}
@media screen and (min-width: 1408px) {
  .columns.is-variable.is-3-fullhd {
    --columnGap: 0.75rem;
  }
}
.columns.is-variable.is-4 {
  --columnGap: 1rem;
}
@media screen and (max-width: 768px) {
  .columns.is-variable.is-4-mobile {
    --columnGap: 1rem;
  }
}
@media screen and (min-width: 769px), print {
  .columns.is-variable.is-4-tablet {
    --columnGap: 1rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-4-tablet-only {
    --columnGap: 1rem;
  }
}
@media screen and (max-width: 1023px) {
  .columns.is-variable.is-4-touch {
    --columnGap: 1rem;
  }
}
@media screen and (min-width: 1024px) {
  .columns.is-variable.is-4-desktop {
    --columnGap: 1rem;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-4-desktop-only {
    --columnGap: 1rem;
  }
}
@media screen and (min-width: 1216px) {
  .columns.is-variable.is-4-widescreen {
    --columnGap: 1rem;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-4-widescreen-only {
    --columnGap: 1rem;
  }
}
@media screen and (min-width: 1408px) {
  .columns.is-variable.is-4-fullhd {
    --columnGap: 1rem;
  }
}
.columns.is-variable.is-5 {
  --columnGap: 1.25rem;
}
@media screen and (max-width: 768px) {
  .columns.is-variable.is-5-mobile {
    --columnGap: 1.25rem;
  }
}
@media screen and (min-width: 769px), print {
  .columns.is-variable.is-5-tablet {
    --columnGap: 1.25rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-5-tablet-only {
    --columnGap: 1.25rem;
  }
}
@media screen and (max-width: 1023px) {
  .columns.is-variable.is-5-touch {
    --columnGap: 1.25rem;
  }
}
@media screen and (min-width: 1024px) {
  .columns.is-variable.is-5-desktop {
    --columnGap: 1.25rem;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-5-desktop-only {
    --columnGap: 1.25rem;
  }
}
@media screen and (min-width: 1216px) {
  .columns.is-variable.is-5-widescreen {
    --columnGap: 1.25rem;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-5-widescreen-only {
    --columnGap: 1.25rem;
  }
}
@media screen and (min-width: 1408px) {
  .columns.is-variable.is-5-fullhd {
    --columnGap: 1.25rem;
  }
}
.columns.is-variable.is-6 {
  --columnGap: 1.5rem;
}
@media screen and (max-width: 768px) {
  .columns.is-variable.is-6-mobile {
    --columnGap: 1.5rem;
  }
}
@media screen and (min-width: 769px), print {
  .columns.is-variable.is-6-tablet {
    --columnGap: 1.5rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-6-tablet-only {
    --columnGap: 1.5rem;
  }
}
@media screen and (max-width: 1023px) {
  .columns.is-variable.is-6-touch {
    --columnGap: 1.5rem;
  }
}
@media screen and (min-width: 1024px) {
  .columns.is-variable.is-6-desktop {
    --columnGap: 1.5rem;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-6-desktop-only {
    --columnGap: 1.5rem;
  }
}
@media screen and (min-width: 1216px) {
  .columns.is-variable.is-6-widescreen {
    --columnGap: 1.5rem;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-6-widescreen-only {
    --columnGap: 1.5rem;
  }
}
@media screen and (min-width: 1408px) {
  .columns.is-variable.is-6-fullhd {
    --columnGap: 1.5rem;
  }
}
.columns.is-variable.is-7 {
  --columnGap: 1.75rem;
}
@media screen and (max-width: 768px) {
  .columns.is-variable.is-7-mobile {
    --columnGap: 1.75rem;
  }
}
@media screen and (min-width: 769px), print {
  .columns.is-variable.is-7-tablet {
    --columnGap: 1.75rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-7-tablet-only {
    --columnGap: 1.75rem;
  }
}
@media screen and (max-width: 1023px) {
  .columns.is-variable.is-7-touch {
    --columnGap: 1.75rem;
  }
}
@media screen and (min-width: 1024px) {
  .columns.is-variable.is-7-desktop {
    --columnGap: 1.75rem;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-7-desktop-only {
    --columnGap: 1.75rem;
  }
}
@media screen and (min-width: 1216px) {
  .columns.is-variable.is-7-widescreen {
    --columnGap: 1.75rem;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-7-widescreen-only {
    --columnGap: 1.75rem;
  }
}
@media screen and (min-width: 1408px) {
  .columns.is-variable.is-7-fullhd {
    --columnGap: 1.75rem;
  }
}
.columns.is-variable.is-8 {
  --columnGap: 2rem;
}
@media screen and (max-width: 768px) {
  .columns.is-variable.is-8-mobile {
    --columnGap: 2rem;
  }
}
@media screen and (min-width: 769px), print {
  .columns.is-variable.is-8-tablet {
    --columnGap: 2rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-8-tablet-only {
    --columnGap: 2rem;
  }
}
@media screen and (max-width: 1023px) {
  .columns.is-variable.is-8-touch {
    --columnGap: 2rem;
  }
}
@media screen and (min-width: 1024px) {
  .columns.is-variable.is-8-desktop {
    --columnGap: 2rem;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-8-desktop-only {
    --columnGap: 2rem;
  }
}
@media screen and (min-width: 1216px) {
  .columns.is-variable.is-8-widescreen {
    --columnGap: 2rem;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-8-widescreen-only {
    --columnGap: 2rem;
  }
}
@media screen and (min-width: 1408px) {
  .columns.is-variable.is-8-fullhd {
    --columnGap: 2rem;
  }
}

.tile {
  align-items: stretch;
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  min-height: min-content;
}
.tile.is-ancestor {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;
}
.tile.is-ancestor:last-child {
  margin-bottom: -0.75rem;
}
.tile.is-ancestor:not(:last-child) {
  margin-bottom: 0.75rem;
}
.tile.is-child {
  margin: 0 !important;
}
.tile.is-parent {
  padding: 0.75rem;
}
.tile.is-vertical {
  flex-direction: column;
}
.tile.is-vertical > .tile.is-child:not(:last-child) {
  margin-bottom: 1.5rem !important;
}
@media screen and (min-width: 769px), print {
  .tile:not(.is-child) {
    display: flex;
  }
  .tile.is-1 {
    flex: none;
    width: 8.3333333333%;
  }
  .tile.is-2 {
    flex: none;
    width: 16.6666666667%;
  }
  .tile.is-3 {
    flex: none;
    width: 25%;
  }
  .tile.is-4 {
    flex: none;
    width: 33.3333333333%;
  }
  .tile.is-5 {
    flex: none;
    width: 41.6666666667%;
  }
  .tile.is-6 {
    flex: none;
    width: 50%;
  }
  .tile.is-7 {
    flex: none;
    width: 58.3333333333%;
  }
  .tile.is-8 {
    flex: none;
    width: 66.6666666667%;
  }
  .tile.is-9 {
    flex: none;
    width: 75%;
  }
  .tile.is-10 {
    flex: none;
    width: 83.3333333333%;
  }
  .tile.is-11 {
    flex: none;
    width: 91.6666666667%;
  }
  .tile.is-12 {
    flex: none;
    width: 100%;
  }
}

/* Bulma Helpers */
.has-text-white {
  color: white !important;
}

a.has-text-white:hover, a.has-text-white:focus {
  color: #e6e6e6 !important;
}

.has-background-white {
  background-color: white !important;
}

.has-text-black {
  color: black !important;
}

a.has-text-black:hover, a.has-text-black:focus {
  color: black !important;
}

.has-background-black {
  background-color: black !important;
}

.has-text-light {
  color: whitesmoke !important;
}

a.has-text-light:hover, a.has-text-light:focus {
  color: #dbdbdb !important;
}

.has-background-light {
  background-color: whitesmoke !important;
}

.has-text-dark {
  color: #363636 !important;
}

a.has-text-dark:hover, a.has-text-dark:focus {
  color: #1c1c1c !important;
}

.has-background-dark {
  background-color: #363636 !important;
}

.has-text-primary {
  color: ${ce} !important;
}

a.has-text-primary:hover, a.has-text-primary:focus {
  color: #009e86 !important;
}

.has-background-primary {
  background-color: ${ce} !important;
}

.has-text-primary-light {
  color: #ebfffc !important;
}

a.has-text-primary-light:hover, a.has-text-primary-light:focus {
  color: #b8fff4 !important;
}

.has-background-primary-light {
  background-color: #ebfffc !important;
}

.has-text-primary-dark {
  color: #00947e !important;
}

a.has-text-primary-dark:hover, a.has-text-primary-dark:focus {
  color: #00c7a9 !important;
}

.has-background-primary-dark {
  background-color: #00947e !important;
}

.has-text-link {
  color: #4FB3D9 !important;
}

a.has-text-link:hover, a.has-text-link:focus {
  color: #2c9ec9 !important;
}

.has-background-link {
  background-color: #4FB3D9 !important;
}

.has-text-link-light {
  color: #eef8fb !important;
}

a.has-text-link-light:hover, a.has-text-link-light:focus {
  color: #c4e6f2 !important;
}

.has-background-link-light {
  background-color: #eef8fb !important;
}

.has-text-link-dark {
  color: #1e6d8a !important;
}

a.has-text-link-dark:hover, a.has-text-link-dark:focus {
  color: #278db4 !important;
}

.has-background-link-dark {
  background-color: #1e6d8a !important;
}

.has-text-info {
  color: #3298dc !important;
}

a.has-text-info:hover, a.has-text-info:focus {
  color: #207dbc !important;
}

.has-background-info {
  background-color: #3298dc !important;
}

.has-text-info-light {
  color: #eef6fc !important;
}

a.has-text-info-light:hover, a.has-text-info-light:focus {
  color: #c2e0f5 !important;
}

.has-background-info-light {
  background-color: #eef6fc !important;
}

.has-text-info-dark {
  color: #1d72aa !important;
}

a.has-text-info-dark:hover, a.has-text-info-dark:focus {
  color: #248fd6 !important;
}

.has-background-info-dark {
  background-color: #1d72aa !important;
}

.has-text-success {
  color: #48c774 !important;
}

a.has-text-success:hover, a.has-text-success:focus {
  color: #34a85c !important;
}

.has-background-success {
  background-color: #48c774 !important;
}

.has-text-success-light {
  color: #effaf3 !important;
}

a.has-text-success-light:hover, a.has-text-success-light:focus {
  color: #c8eed6 !important;
}

.has-background-success-light {
  background-color: #effaf3 !important;
}

.has-text-success-dark {
  color: #257942 !important;
}

a.has-text-success-dark:hover, a.has-text-success-dark:focus {
  color: #31a058 !important;
}

.has-background-success-dark {
  background-color: #257942 !important;
}

.has-text-warning {
  color: #F9CD69 !important;
}

a.has-text-warning:hover, a.has-text-warning:focus {
  color: #f7bd38 !important;
}

.has-background-warning {
  background-color: #F9CD69 !important;
}

.has-text-warning-light {
  color: #fef8eb !important;
}

a.has-text-warning-light:hover, a.has-text-warning-light:focus {
  color: #fce8ba !important;
}

.has-background-warning-light {
  background-color: #fef8eb !important;
}

.has-text-warning-dark {
  color: #8e6406 !important;
}

a.has-text-warning-dark:hover, a.has-text-warning-dark:focus {
  color: #bf8708 !important;
}

.has-background-warning-dark {
  background-color: #8e6406 !important;
}

.has-text-danger {
  color: #c21f3a !important;
}

a.has-text-danger:hover, a.has-text-danger:focus {
  color: #96182d !important;
}

.has-background-danger {
  background-color: #c21f3a !important;
}

.has-text-danger-light {
  color: #fcedf0 !important;
}

a.has-text-danger-light:hover, a.has-text-danger-light:focus {
  color: #f5c1ca !important;
}

.has-background-danger-light {
  background-color: #fcedf0 !important;
}

.has-text-danger-dark {
  color: #d72240 !important;
}

a.has-text-danger-dark:hover, a.has-text-danger-dark:focus {
  color: #e24b64 !important;
}

.has-background-danger-dark {
  background-color: #d72240 !important;
}

.has-text-black-bis {
  color: #121212 !important;
}

.has-background-black-bis {
  background-color: #121212 !important;
}

.has-text-black-ter {
  color: #242424 !important;
}

.has-background-black-ter {
  background-color: #242424 !important;
}

.has-text-grey-darker {
  color: #363636 !important;
}

.has-background-grey-darker {
  background-color: #363636 !important;
}

.has-text-grey-dark {
  color: #4a4a4a !important;
}

.has-background-grey-dark {
  background-color: #4a4a4a !important;
}

.has-text-grey {
  color: #7a7a7a !important;
}

.has-background-grey {
  background-color: #7a7a7a !important;
}

.has-text-grey-light {
  color: #b5b5b5 !important;
}

.has-background-grey-light {
  background-color: #b5b5b5 !important;
}

.has-text-grey-lighter {
  color: #dbdbdb !important;
}

.has-background-grey-lighter {
  background-color: #dbdbdb !important;
}

.has-text-white-ter {
  color: whitesmoke !important;
}

.has-background-white-ter {
  background-color: whitesmoke !important;
}

.has-text-white-bis {
  color: #fafafa !important;
}

.has-background-white-bis {
  background-color: #fafafa !important;
}

.is-flex-direction-row {
  flex-direction: row !important;
}

.is-flex-direction-row-reverse {
  flex-direction: row-reverse !important;
}

.is-flex-direction-column {
  flex-direction: column !important;
}

.is-flex-direction-column-reverse {
  flex-direction: column-reverse !important;
}

.is-flex-wrap-nowrap {
  flex-wrap: nowrap !important;
}

.is-flex-wrap-wrap {
  flex-wrap: wrap !important;
}

.is-flex-wrap-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

.is-justify-content-flex-start {
  justify-content: flex-start !important;
}

.is-justify-content-flex-end {
  justify-content: flex-end !important;
}

.is-justify-content-center {
  justify-content: center !important;
}

.is-justify-content-space-between {
  justify-content: space-between !important;
}

.is-justify-content-space-around {
  justify-content: space-around !important;
}

.is-justify-content-space-evenly {
  justify-content: space-evenly !important;
}

.is-justify-content-start {
  justify-content: start !important;
}

.is-justify-content-end {
  justify-content: end !important;
}

.is-justify-content-left {
  justify-content: left !important;
}

.is-justify-content-right {
  justify-content: right !important;
}

.is-align-content-flex-start {
  align-content: flex-start !important;
}

.is-align-content-flex-end {
  align-content: flex-end !important;
}

.is-align-content-center {
  align-content: center !important;
}

.is-align-content-space-between {
  align-content: space-between !important;
}

.is-align-content-space-around {
  align-content: space-around !important;
}

.is-align-content-space-evenly {
  align-content: space-evenly !important;
}

.is-align-content-stretch {
  align-content: stretch !important;
}

.is-align-content-start {
  align-content: start !important;
}

.is-align-content-end {
  align-content: end !important;
}

.is-align-content-baseline {
  align-content: baseline !important;
}

.is-align-items-stretch {
  align-items: stretch !important;
}

.is-align-items-flex-start {
  align-items: flex-start !important;
}

.is-align-items-flex-end {
  align-items: flex-end !important;
}

.is-align-items-center {
  align-items: center !important;
}

.is-align-items-baseline {
  align-items: baseline !important;
}

.is-align-items-start {
  align-items: start !important;
}

.is-align-items-end {
  align-items: end !important;
}

.is-align-items-self-start {
  align-items: self-start !important;
}

.is-align-items-self-end {
  align-items: self-end !important;
}

.is-align-self-auto {
  align-self: auto !important;
}

.is-align-self-flex-start {
  align-self: flex-start !important;
}

.is-align-self-flex-end {
  align-self: flex-end !important;
}

.is-align-self-center {
  align-self: center !important;
}

.is-align-self-baseline {
  align-self: baseline !important;
}

.is-align-self-stretch {
  align-self: stretch !important;
}

.is-flex-grow-0 {
  flex-grow: 0 !important;
}

.is-flex-grow-1 {
  flex-grow: 1 !important;
}

.is-flex-grow-2 {
  flex-grow: 2 !important;
}

.is-flex-grow-3 {
  flex-grow: 3 !important;
}

.is-flex-grow-4 {
  flex-grow: 4 !important;
}

.is-flex-grow-5 {
  flex-grow: 5 !important;
}

.is-flex-shrink-0 {
  flex-shrink: 0 !important;
}

.is-flex-shrink-1 {
  flex-shrink: 1 !important;
}

.is-flex-shrink-2 {
  flex-shrink: 2 !important;
}

.is-flex-shrink-3 {
  flex-shrink: 3 !important;
}

.is-flex-shrink-4 {
  flex-shrink: 4 !important;
}

.is-flex-shrink-5 {
  flex-shrink: 5 !important;
}

.is-clearfix::after {
  clear: both;
  content: " ";
  display: table;
}

.is-pulled-left {
  float: left !important;
}

.is-pulled-right {
  float: right !important;
}

.is-radiusless {
  border-radius: 0 !important;
}

.is-shadowless {
  box-shadow: none !important;
}

.is-clickable {
  cursor: pointer !important;
  pointer-events: all !important;
}

.is-clipped {
  overflow: hidden !important;
}

.is-relative {
  position: relative !important;
}

.is-marginless {
  margin: 0 !important;
}

.is-paddingless {
  padding: 0 !important;
}

.m-0 {
  margin: 0 !important;
}

.mt-0 {
  margin-top: 0 !important;
}

.mr-0 {
  margin-right: 0 !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.ml-0 {
  margin-left: 0 !important;
}

.mx-0 {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.my-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.mt-1 {
  margin-top: 0.25rem !important;
}

.mr-1 {
  margin-right: 0.25rem !important;
}

.mb-1 {
  margin-bottom: 0.25rem !important;
}

.ml-1 {
  margin-left: 0.25rem !important;
}

.mx-1 {
  margin-left: 0.25rem !important;
  margin-right: 0.25rem !important;
}

.my-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}

.mt-2 {
  margin-top: 0.5rem !important;
}

.mr-2 {
  margin-right: 0.5rem !important;
}

.mb-2 {
  margin-bottom: 0.5rem !important;
}

.ml-2 {
  margin-left: 0.5rem !important;
}

.mx-2 {
  margin-left: 0.5rem !important;
  margin-right: 0.5rem !important;
}

.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}

.m-3 {
  margin: 0.75rem !important;
}

.mt-3 {
  margin-top: 0.75rem !important;
}

.mr-3 {
  margin-right: 0.75rem !important;
}

.mb-3 {
  margin-bottom: 0.75rem !important;
}

.ml-3 {
  margin-left: 0.75rem !important;
}

.mx-3 {
  margin-left: 0.75rem !important;
  margin-right: 0.75rem !important;
}

.my-3 {
  margin-top: 0.75rem !important;
  margin-bottom: 0.75rem !important;
}

.m-4 {
  margin: 1rem !important;
}

.mt-4 {
  margin-top: 1rem !important;
}

.mr-4 {
  margin-right: 1rem !important;
}

.mb-4 {
  margin-bottom: 1rem !important;
}

.ml-4 {
  margin-left: 1rem !important;
}

.mx-4 {
  margin-left: 1rem !important;
  margin-right: 1rem !important;
}

.my-4 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}

.m-5 {
  margin: 1.5rem !important;
}

.mt-5 {
  margin-top: 1.5rem !important;
}

.mr-5 {
  margin-right: 1.5rem !important;
}

.mb-5 {
  margin-bottom: 1.5rem !important;
}

.ml-5 {
  margin-left: 1.5rem !important;
}

.mx-5 {
  margin-left: 1.5rem !important;
  margin-right: 1.5rem !important;
}

.my-5 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}

.m-6 {
  margin: 3rem !important;
}

.mt-6 {
  margin-top: 3rem !important;
}

.mr-6 {
  margin-right: 3rem !important;
}

.mb-6 {
  margin-bottom: 3rem !important;
}

.ml-6 {
  margin-left: 3rem !important;
}

.mx-6 {
  margin-left: 3rem !important;
  margin-right: 3rem !important;
}

.my-6 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}

.p-0 {
  padding: 0 !important;
}

.pt-0 {
  padding-top: 0 !important;
}

.pr-0 {
  padding-right: 0 !important;
}

.pb-0 {
  padding-bottom: 0 !important;
}

.pl-0 {
  padding-left: 0 !important;
}

.px-0 {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.py-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.pt-1 {
  padding-top: 0.25rem !important;
}

.pr-1 {
  padding-right: 0.25rem !important;
}

.pb-1 {
  padding-bottom: 0.25rem !important;
}

.pl-1 {
  padding-left: 0.25rem !important;
}

.px-1 {
  padding-left: 0.25rem !important;
  padding-right: 0.25rem !important;
}

.py-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}

.p-2 {
  padding: 0.5rem !important;
}

.pt-2 {
  padding-top: 0.5rem !important;
}

.pr-2 {
  padding-right: 0.5rem !important;
}

.pb-2 {
  padding-bottom: 0.5rem !important;
}

.pl-2 {
  padding-left: 0.5rem !important;
}

.px-2 {
  padding-left: 0.5rem !important;
  padding-right: 0.5rem !important;
}

.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}

.p-3 {
  padding: 0.75rem !important;
}

.pt-3 {
  padding-top: 0.75rem !important;
}

.pr-3 {
  padding-right: 0.75rem !important;
}

.pb-3 {
  padding-bottom: 0.75rem !important;
}

.pl-3 {
  padding-left: 0.75rem !important;
}

.px-3 {
  padding-left: 0.75rem !important;
  padding-right: 0.75rem !important;
}

.py-3 {
  padding-top: 0.75rem !important;
  padding-bottom: 0.75rem !important;
}

.p-4 {
  padding: 1rem !important;
}

.pt-4 {
  padding-top: 1rem !important;
}

.pr-4 {
  padding-right: 1rem !important;
}

.pb-4 {
  padding-bottom: 1rem !important;
}

.pl-4 {
  padding-left: 1rem !important;
}

.px-4 {
  padding-left: 1rem !important;
  padding-right: 1rem !important;
}

.py-4 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}

.p-5 {
  padding: 1.5rem !important;
}

.pt-5 {
  padding-top: 1.5rem !important;
}

.pr-5 {
  padding-right: 1.5rem !important;
}

.pb-5 {
  padding-bottom: 1.5rem !important;
}

.pl-5 {
  padding-left: 1.5rem !important;
}

.px-5 {
  padding-left: 1.5rem !important;
  padding-right: 1.5rem !important;
}

.py-5 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}

.p-6 {
  padding: 3rem !important;
}

.pt-6 {
  padding-top: 3rem !important;
}

.pr-6 {
  padding-right: 3rem !important;
}

.pb-6 {
  padding-bottom: 3rem !important;
}

.pl-6 {
  padding-left: 3rem !important;
}

.px-6 {
  padding-left: 3rem !important;
  padding-right: 3rem !important;
}

.py-6 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}

.is-size-1 {
  font-size: 3rem !important;
}

.is-size-2 {
  font-size: 2.5rem !important;
}

.is-size-3 {
  font-size: 2rem !important;
}

.is-size-4 {
  font-size: 1.5rem !important;
}

.is-size-5 {
  font-size: 1.25rem !important;
}

.is-size-6 {
  font-size: 1rem !important;
}

.is-size-7 {
  font-size: 0.75rem !important;
}

@media screen and (max-width: 768px) {
  .is-size-1-mobile {
    font-size: 3rem !important;
  }

  .is-size-2-mobile {
    font-size: 2.5rem !important;
  }

  .is-size-3-mobile {
    font-size: 2rem !important;
  }

  .is-size-4-mobile {
    font-size: 1.5rem !important;
  }

  .is-size-5-mobile {
    font-size: 1.25rem !important;
  }

  .is-size-6-mobile {
    font-size: 1rem !important;
  }

  .is-size-7-mobile {
    font-size: 0.75rem !important;
  }
}
@media screen and (min-width: 769px), print {
  .is-size-1-tablet {
    font-size: 3rem !important;
  }

  .is-size-2-tablet {
    font-size: 2.5rem !important;
  }

  .is-size-3-tablet {
    font-size: 2rem !important;
  }

  .is-size-4-tablet {
    font-size: 1.5rem !important;
  }

  .is-size-5-tablet {
    font-size: 1.25rem !important;
  }

  .is-size-6-tablet {
    font-size: 1rem !important;
  }

  .is-size-7-tablet {
    font-size: 0.75rem !important;
  }
}
@media screen and (max-width: 1023px) {
  .is-size-1-touch {
    font-size: 3rem !important;
  }

  .is-size-2-touch {
    font-size: 2.5rem !important;
  }

  .is-size-3-touch {
    font-size: 2rem !important;
  }

  .is-size-4-touch {
    font-size: 1.5rem !important;
  }

  .is-size-5-touch {
    font-size: 1.25rem !important;
  }

  .is-size-6-touch {
    font-size: 1rem !important;
  }

  .is-size-7-touch {
    font-size: 0.75rem !important;
  }
}
@media screen and (min-width: 1024px) {
  .is-size-1-desktop {
    font-size: 3rem !important;
  }

  .is-size-2-desktop {
    font-size: 2.5rem !important;
  }

  .is-size-3-desktop {
    font-size: 2rem !important;
  }

  .is-size-4-desktop {
    font-size: 1.5rem !important;
  }

  .is-size-5-desktop {
    font-size: 1.25rem !important;
  }

  .is-size-6-desktop {
    font-size: 1rem !important;
  }

  .is-size-7-desktop {
    font-size: 0.75rem !important;
  }
}
@media screen and (min-width: 1216px) {
  .is-size-1-widescreen {
    font-size: 3rem !important;
  }

  .is-size-2-widescreen {
    font-size: 2.5rem !important;
  }

  .is-size-3-widescreen {
    font-size: 2rem !important;
  }

  .is-size-4-widescreen {
    font-size: 1.5rem !important;
  }

  .is-size-5-widescreen {
    font-size: 1.25rem !important;
  }

  .is-size-6-widescreen {
    font-size: 1rem !important;
  }

  .is-size-7-widescreen {
    font-size: 0.75rem !important;
  }
}
@media screen and (min-width: 1408px) {
  .is-size-1-fullhd {
    font-size: 3rem !important;
  }

  .is-size-2-fullhd {
    font-size: 2.5rem !important;
  }

  .is-size-3-fullhd {
    font-size: 2rem !important;
  }

  .is-size-4-fullhd {
    font-size: 1.5rem !important;
  }

  .is-size-5-fullhd {
    font-size: 1.25rem !important;
  }

  .is-size-6-fullhd {
    font-size: 1rem !important;
  }

  .is-size-7-fullhd {
    font-size: 0.75rem !important;
  }
}
.has-text-centered {
  text-align: center !important;
}

.has-text-justified {
  text-align: justify !important;
}

.has-text-left {
  text-align: left !important;
}

.has-text-right {
  text-align: right !important;
}

@media screen and (max-width: 768px) {
  .has-text-centered-mobile {
    text-align: center !important;
  }
}
@media screen and (min-width: 769px), print {
  .has-text-centered-tablet {
    text-align: center !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .has-text-centered-tablet-only {
    text-align: center !important;
  }
}
@media screen and (max-width: 1023px) {
  .has-text-centered-touch {
    text-align: center !important;
  }
}
@media screen and (min-width: 1024px) {
  .has-text-centered-desktop {
    text-align: center !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .has-text-centered-desktop-only {
    text-align: center !important;
  }
}
@media screen and (min-width: 1216px) {
  .has-text-centered-widescreen {
    text-align: center !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .has-text-centered-widescreen-only {
    text-align: center !important;
  }
}
@media screen and (min-width: 1408px) {
  .has-text-centered-fullhd {
    text-align: center !important;
  }
}
@media screen and (max-width: 768px) {
  .has-text-justified-mobile {
    text-align: justify !important;
  }
}
@media screen and (min-width: 769px), print {
  .has-text-justified-tablet {
    text-align: justify !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .has-text-justified-tablet-only {
    text-align: justify !important;
  }
}
@media screen and (max-width: 1023px) {
  .has-text-justified-touch {
    text-align: justify !important;
  }
}
@media screen and (min-width: 1024px) {
  .has-text-justified-desktop {
    text-align: justify !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .has-text-justified-desktop-only {
    text-align: justify !important;
  }
}
@media screen and (min-width: 1216px) {
  .has-text-justified-widescreen {
    text-align: justify !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .has-text-justified-widescreen-only {
    text-align: justify !important;
  }
}
@media screen and (min-width: 1408px) {
  .has-text-justified-fullhd {
    text-align: justify !important;
  }
}
@media screen and (max-width: 768px) {
  .has-text-left-mobile {
    text-align: left !important;
  }
}
@media screen and (min-width: 769px), print {
  .has-text-left-tablet {
    text-align: left !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .has-text-left-tablet-only {
    text-align: left !important;
  }
}
@media screen and (max-width: 1023px) {
  .has-text-left-touch {
    text-align: left !important;
  }
}
@media screen and (min-width: 1024px) {
  .has-text-left-desktop {
    text-align: left !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .has-text-left-desktop-only {
    text-align: left !important;
  }
}
@media screen and (min-width: 1216px) {
  .has-text-left-widescreen {
    text-align: left !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .has-text-left-widescreen-only {
    text-align: left !important;
  }
}
@media screen and (min-width: 1408px) {
  .has-text-left-fullhd {
    text-align: left !important;
  }
}
@media screen and (max-width: 768px) {
  .has-text-right-mobile {
    text-align: right !important;
  }
}
@media screen and (min-width: 769px), print {
  .has-text-right-tablet {
    text-align: right !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .has-text-right-tablet-only {
    text-align: right !important;
  }
}
@media screen and (max-width: 1023px) {
  .has-text-right-touch {
    text-align: right !important;
  }
}
@media screen and (min-width: 1024px) {
  .has-text-right-desktop {
    text-align: right !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .has-text-right-desktop-only {
    text-align: right !important;
  }
}
@media screen and (min-width: 1216px) {
  .has-text-right-widescreen {
    text-align: right !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .has-text-right-widescreen-only {
    text-align: right !important;
  }
}
@media screen and (min-width: 1408px) {
  .has-text-right-fullhd {
    text-align: right !important;
  }
}
.is-capitalized {
  text-transform: capitalize !important;
}

.is-lowercase {
  text-transform: lowercase !important;
}

.is-uppercase {
  text-transform: uppercase !important;
}

.is-italic {
  font-style: italic !important;
}

.has-text-weight-light {
  font-weight: 300 !important;
}

.has-text-weight-normal {
  font-weight: 400 !important;
}

.has-text-weight-medium {
  font-weight: 500 !important;
}

.has-text-weight-semibold {
  font-weight: 600 !important;
}

.has-text-weight-bold {
  font-weight: 700 !important;
}

.is-family-primary {
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif !important;
}

.is-family-secondary {
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif !important;
}

.is-family-sans-serif {
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif !important;
}

.is-family-monospace {
  font-family: monospace !important;
}

.is-family-code {
  font-family: monospace !important;
}

.is-block {
  display: block !important;
}

@media screen and (max-width: 768px) {
  .is-block-mobile {
    display: block !important;
  }
}
@media screen and (min-width: 769px), print {
  .is-block-tablet {
    display: block !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-block-tablet-only {
    display: block !important;
  }
}
@media screen and (max-width: 1023px) {
  .is-block-touch {
    display: block !important;
  }
}
@media screen and (min-width: 1024px) {
  .is-block-desktop {
    display: block !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-block-desktop-only {
    display: block !important;
  }
}
@media screen and (min-width: 1216px) {
  .is-block-widescreen {
    display: block !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-block-widescreen-only {
    display: block !important;
  }
}
@media screen and (min-width: 1408px) {
  .is-block-fullhd {
    display: block !important;
  }
}
.is-flex {
  display: flex !important;
}

@media screen and (max-width: 768px) {
  .is-flex-mobile {
    display: flex !important;
  }
}
@media screen and (min-width: 769px), print {
  .is-flex-tablet {
    display: flex !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-flex-tablet-only {
    display: flex !important;
  }
}
@media screen and (max-width: 1023px) {
  .is-flex-touch {
    display: flex !important;
  }
}
@media screen and (min-width: 1024px) {
  .is-flex-desktop {
    display: flex !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-flex-desktop-only {
    display: flex !important;
  }
}
@media screen and (min-width: 1216px) {
  .is-flex-widescreen {
    display: flex !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-flex-widescreen-only {
    display: flex !important;
  }
}
@media screen and (min-width: 1408px) {
  .is-flex-fullhd {
    display: flex !important;
  }
}
.is-inline {
  display: inline !important;
}

@media screen and (max-width: 768px) {
  .is-inline-mobile {
    display: inline !important;
  }
}
@media screen and (min-width: 769px), print {
  .is-inline-tablet {
    display: inline !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-inline-tablet-only {
    display: inline !important;
  }
}
@media screen and (max-width: 1023px) {
  .is-inline-touch {
    display: inline !important;
  }
}
@media screen and (min-width: 1024px) {
  .is-inline-desktop {
    display: inline !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-inline-desktop-only {
    display: inline !important;
  }
}
@media screen and (min-width: 1216px) {
  .is-inline-widescreen {
    display: inline !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-inline-widescreen-only {
    display: inline !important;
  }
}
@media screen and (min-width: 1408px) {
  .is-inline-fullhd {
    display: inline !important;
  }
}
.is-inline-block {
  display: inline-block !important;
}

@media screen and (max-width: 768px) {
  .is-inline-block-mobile {
    display: inline-block !important;
  }
}
@media screen and (min-width: 769px), print {
  .is-inline-block-tablet {
    display: inline-block !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-inline-block-tablet-only {
    display: inline-block !important;
  }
}
@media screen and (max-width: 1023px) {
  .is-inline-block-touch {
    display: inline-block !important;
  }
}
@media screen and (min-width: 1024px) {
  .is-inline-block-desktop {
    display: inline-block !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-inline-block-desktop-only {
    display: inline-block !important;
  }
}
@media screen and (min-width: 1216px) {
  .is-inline-block-widescreen {
    display: inline-block !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-inline-block-widescreen-only {
    display: inline-block !important;
  }
}
@media screen and (min-width: 1408px) {
  .is-inline-block-fullhd {
    display: inline-block !important;
  }
}
.is-inline-flex {
  display: inline-flex !important;
}

@media screen and (max-width: 768px) {
  .is-inline-flex-mobile {
    display: inline-flex !important;
  }
}
@media screen and (min-width: 769px), print {
  .is-inline-flex-tablet {
    display: inline-flex !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-inline-flex-tablet-only {
    display: inline-flex !important;
  }
}
@media screen and (max-width: 1023px) {
  .is-inline-flex-touch {
    display: inline-flex !important;
  }
}
@media screen and (min-width: 1024px) {
  .is-inline-flex-desktop {
    display: inline-flex !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-inline-flex-desktop-only {
    display: inline-flex !important;
  }
}
@media screen and (min-width: 1216px) {
  .is-inline-flex-widescreen {
    display: inline-flex !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-inline-flex-widescreen-only {
    display: inline-flex !important;
  }
}
@media screen and (min-width: 1408px) {
  .is-inline-flex-fullhd {
    display: inline-flex !important;
  }
}
.is-hidden {
  display: none !important;
}

.is-sr-only {
  border: none !important;
  clip: rect(0, 0, 0, 0) !important;
  height: 0.01em !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 0.01em !important;
}

@media screen and (max-width: 768px) {
  .is-hidden-mobile {
    display: none !important;
  }
}
@media screen and (min-width: 769px), print {
  .is-hidden-tablet {
    display: none !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-hidden-tablet-only {
    display: none !important;
  }
}
@media screen and (max-width: 1023px) {
  .is-hidden-touch {
    display: none !important;
  }
}
@media screen and (min-width: 1024px) {
  .is-hidden-desktop {
    display: none !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-hidden-desktop-only {
    display: none !important;
  }
}
@media screen and (min-width: 1216px) {
  .is-hidden-widescreen {
    display: none !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-hidden-widescreen-only {
    display: none !important;
  }
}
@media screen and (min-width: 1408px) {
  .is-hidden-fullhd {
    display: none !important;
  }
}
.is-invisible {
  visibility: hidden !important;
}

@media screen and (max-width: 768px) {
  .is-invisible-mobile {
    visibility: hidden !important;
  }
}
@media screen and (min-width: 769px), print {
  .is-invisible-tablet {
    visibility: hidden !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-invisible-tablet-only {
    visibility: hidden !important;
  }
}
@media screen and (max-width: 1023px) {
  .is-invisible-touch {
    visibility: hidden !important;
  }
}
@media screen and (min-width: 1024px) {
  .is-invisible-desktop {
    visibility: hidden !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-invisible-desktop-only {
    visibility: hidden !important;
  }
}
@media screen and (min-width: 1216px) {
  .is-invisible-widescreen {
    visibility: hidden !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-invisible-widescreen-only {
    visibility: hidden !important;
  }
}
@media screen and (min-width: 1408px) {
  .is-invisible-fullhd {
    visibility: hidden !important;
  }
}
/* Bulma Layout */
.hero {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.hero .navbar {
  background: none;
}
.hero .tabs ul {
  border-bottom: none;
}
.hero.is-white {
  background-color: white;
  color: black;
}
.hero.is-white a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-white strong {
  color: inherit;
}
.hero.is-white .title {
  color: black;
}
.hero.is-white .subtitle {
  color: rgba(0, 0, 0, 0.9);
}
.hero.is-white .subtitle a:not(.button),
.hero.is-white .subtitle strong {
  color: black;
}
@media screen and (max-width: 1023px) {
  .hero.is-white .navbar-menu {
    background-color: white;
  }
}
.hero.is-white .navbar-item,
.hero.is-white .navbar-link {
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-white a.navbar-item:hover, .hero.is-white a.navbar-item.is-active,
.hero.is-white .navbar-link:hover,
.hero.is-white .navbar-link.is-active {
  background-color: #f2f2f2;
  color: black;
}
.hero.is-white .tabs a {
  color: black;
  opacity: 0.9;
}
.hero.is-white .tabs a:hover {
  opacity: 1;
}
.hero.is-white .tabs li.is-active a {
  opacity: 1;
}
.hero.is-white .tabs.is-boxed a, .hero.is-white .tabs.is-toggle a {
  color: black;
}
.hero.is-white .tabs.is-boxed a:hover, .hero.is-white .tabs.is-toggle a:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.hero.is-white .tabs.is-boxed li.is-active a, .hero.is-white .tabs.is-boxed li.is-active a:hover, .hero.is-white .tabs.is-toggle li.is-active a, .hero.is-white .tabs.is-toggle li.is-active a:hover {
  background-color: black;
  border-color: black;
  color: white;
}
.hero.is-white.is-bold {
  background-image: linear-gradient(141deg, #e8e3e4 0%, white 71%, white 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-white.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #e8e3e4 0%, white 71%, white 100%);
  }
}
.hero.is-black {
  background-color: black;
  color: white;
}
.hero.is-black a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-black strong {
  color: inherit;
}
.hero.is-black .title {
  color: white;
}
.hero.is-black .subtitle {
  color: rgba(255, 255, 255, 0.9);
}
.hero.is-black .subtitle a:not(.button),
.hero.is-black .subtitle strong {
  color: white;
}
@media screen and (max-width: 1023px) {
  .hero.is-black .navbar-menu {
    background-color: black;
  }
}
.hero.is-black .navbar-item,
.hero.is-black .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}
.hero.is-black a.navbar-item:hover, .hero.is-black a.navbar-item.is-active,
.hero.is-black .navbar-link:hover,
.hero.is-black .navbar-link.is-active {
  background-color: black;
  color: white;
}
.hero.is-black .tabs a {
  color: white;
  opacity: 0.9;
}
.hero.is-black .tabs a:hover {
  opacity: 1;
}
.hero.is-black .tabs li.is-active a {
  opacity: 1;
}
.hero.is-black .tabs.is-boxed a, .hero.is-black .tabs.is-toggle a {
  color: white;
}
.hero.is-black .tabs.is-boxed a:hover, .hero.is-black .tabs.is-toggle a:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.hero.is-black .tabs.is-boxed li.is-active a, .hero.is-black .tabs.is-boxed li.is-active a:hover, .hero.is-black .tabs.is-toggle li.is-active a, .hero.is-black .tabs.is-toggle li.is-active a:hover {
  background-color: white;
  border-color: white;
  color: black;
}
.hero.is-black.is-bold {
  background-image: linear-gradient(141deg, black 0%, black 71%, #0d0c0c 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-black.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, black 0%, black 71%, #0d0c0c 100%);
  }
}
.hero.is-light {
  background-color: whitesmoke;
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-light a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-light strong {
  color: inherit;
}
.hero.is-light .title {
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-light .subtitle {
  color: rgba(0, 0, 0, 0.9);
}
.hero.is-light .subtitle a:not(.button),
.hero.is-light .subtitle strong {
  color: rgba(0, 0, 0, 0.7);
}
@media screen and (max-width: 1023px) {
  .hero.is-light .navbar-menu {
    background-color: whitesmoke;
  }
}
.hero.is-light .navbar-item,
.hero.is-light .navbar-link {
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-light a.navbar-item:hover, .hero.is-light a.navbar-item.is-active,
.hero.is-light .navbar-link:hover,
.hero.is-light .navbar-link.is-active {
  background-color: #e8e8e8;
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-light .tabs a {
  color: rgba(0, 0, 0, 0.7);
  opacity: 0.9;
}
.hero.is-light .tabs a:hover {
  opacity: 1;
}
.hero.is-light .tabs li.is-active a {
  opacity: 1;
}
.hero.is-light .tabs.is-boxed a, .hero.is-light .tabs.is-toggle a {
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-light .tabs.is-boxed a:hover, .hero.is-light .tabs.is-toggle a:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.hero.is-light .tabs.is-boxed li.is-active a, .hero.is-light .tabs.is-boxed li.is-active a:hover, .hero.is-light .tabs.is-toggle li.is-active a, .hero.is-light .tabs.is-toggle li.is-active a:hover {
  background-color: rgba(0, 0, 0, 0.7);
  border-color: rgba(0, 0, 0, 0.7);
  color: whitesmoke;
}
.hero.is-light.is-bold {
  background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-light.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);
  }
}
.hero.is-dark {
  background-color: #363636;
  color: #fff;
}
.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-dark strong {
  color: inherit;
}
.hero.is-dark .title {
  color: #fff;
}
.hero.is-dark .subtitle {
  color: rgba(255, 255, 255, 0.9);
}
.hero.is-dark .subtitle a:not(.button),
.hero.is-dark .subtitle strong {
  color: #fff;
}
@media screen and (max-width: 1023px) {
  .hero.is-dark .navbar-menu {
    background-color: #363636;
  }
}
.hero.is-dark .navbar-item,
.hero.is-dark .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}
.hero.is-dark a.navbar-item:hover, .hero.is-dark a.navbar-item.is-active,
.hero.is-dark .navbar-link:hover,
.hero.is-dark .navbar-link.is-active {
  background-color: #292929;
  color: #fff;
}
.hero.is-dark .tabs a {
  color: #fff;
  opacity: 0.9;
}
.hero.is-dark .tabs a:hover {
  opacity: 1;
}
.hero.is-dark .tabs li.is-active a {
  opacity: 1;
}
.hero.is-dark .tabs.is-boxed a, .hero.is-dark .tabs.is-toggle a {
  color: #fff;
}
.hero.is-dark .tabs.is-boxed a:hover, .hero.is-dark .tabs.is-toggle a:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.hero.is-dark .tabs.is-boxed li.is-active a, .hero.is-dark .tabs.is-boxed li.is-active a:hover, .hero.is-dark .tabs.is-toggle li.is-active a, .hero.is-dark .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #363636;
}
.hero.is-dark.is-bold {
  background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-dark.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);
  }
}
.hero.is-primary {
  background-color: ${ce};
  color: #fff;
}
.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-primary strong {
  color: inherit;
}
.hero.is-primary .title {
  color: #fff;
}
.hero.is-primary .subtitle {
  color: rgba(255, 255, 255, 0.9);
}
.hero.is-primary .subtitle a:not(.button),
.hero.is-primary .subtitle strong {
  color: #fff;
}
@media screen and (max-width: 1023px) {
  .hero.is-primary .navbar-menu {
    background-color: ${ce};
  }
}
.hero.is-primary .navbar-item,
.hero.is-primary .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}
.hero.is-primary a.navbar-item:hover, .hero.is-primary a.navbar-item.is-active,
.hero.is-primary .navbar-link:hover,
.hero.is-primary .navbar-link.is-active {
  background-color: #00b89c;
  color: #fff;
}
.hero.is-primary .tabs a {
  color: #fff;
  opacity: 0.9;
}
.hero.is-primary .tabs a:hover {
  opacity: 1;
}
.hero.is-primary .tabs li.is-active a {
  opacity: 1;
}
.hero.is-primary .tabs.is-boxed a, .hero.is-primary .tabs.is-toggle a {
  color: #fff;
}
.hero.is-primary .tabs.is-boxed a:hover, .hero.is-primary .tabs.is-toggle a:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.hero.is-primary .tabs.is-boxed li.is-active a, .hero.is-primary .tabs.is-boxed li.is-active a:hover, .hero.is-primary .tabs.is-toggle li.is-active a, .hero.is-primary .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: ${ce};
}
.hero.is-primary.is-bold {
  background-image: linear-gradient(141deg, #009e6c 0%, ${ce} 71%, #00e7eb 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-primary.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #009e6c 0%, ${ce} 71%, #00e7eb 100%);
  }
}
.hero.is-link {
  background-color: #4FB3D9;
  color: #fff;
}
.hero.is-link a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-link strong {
  color: inherit;
}
.hero.is-link .title {
  color: #fff;
}
.hero.is-link .subtitle {
  color: rgba(255, 255, 255, 0.9);
}
.hero.is-link .subtitle a:not(.button),
.hero.is-link .subtitle strong {
  color: #fff;
}
@media screen and (max-width: 1023px) {
  .hero.is-link .navbar-menu {
    background-color: #4FB3D9;
  }
}
.hero.is-link .navbar-item,
.hero.is-link .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}
.hero.is-link a.navbar-item:hover, .hero.is-link a.navbar-item.is-active,
.hero.is-link .navbar-link:hover,
.hero.is-link .navbar-link.is-active {
  background-color: #3aaad4;
  color: #fff;
}
.hero.is-link .tabs a {
  color: #fff;
  opacity: 0.9;
}
.hero.is-link .tabs a:hover {
  opacity: 1;
}
.hero.is-link .tabs li.is-active a {
  opacity: 1;
}
.hero.is-link .tabs.is-boxed a, .hero.is-link .tabs.is-toggle a {
  color: #fff;
}
.hero.is-link .tabs.is-boxed a:hover, .hero.is-link .tabs.is-toggle a:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.hero.is-link .tabs.is-boxed li.is-active a, .hero.is-link .tabs.is-boxed li.is-active a:hover, .hero.is-link .tabs.is-toggle li.is-active a, .hero.is-link .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #4FB3D9;
}
.hero.is-link.is-bold {
  background-image: linear-gradient(141deg, #1fc2d6 0%, #4FB3D9 71%, #5fa8e2 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-link.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #1fc2d6 0%, #4FB3D9 71%, #5fa8e2 100%);
  }
}
.hero.is-info {
  background-color: #3298dc;
  color: #fff;
}
.hero.is-info a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-info strong {
  color: inherit;
}
.hero.is-info .title {
  color: #fff;
}
.hero.is-info .subtitle {
  color: rgba(255, 255, 255, 0.9);
}
.hero.is-info .subtitle a:not(.button),
.hero.is-info .subtitle strong {
  color: #fff;
}
@media screen and (max-width: 1023px) {
  .hero.is-info .navbar-menu {
    background-color: #3298dc;
  }
}
.hero.is-info .navbar-item,
.hero.is-info .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}
.hero.is-info a.navbar-item:hover, .hero.is-info a.navbar-item.is-active,
.hero.is-info .navbar-link:hover,
.hero.is-info .navbar-link.is-active {
  background-color: #238cd1;
  color: #fff;
}
.hero.is-info .tabs a {
  color: #fff;
  opacity: 0.9;
}
.hero.is-info .tabs a:hover {
  opacity: 1;
}
.hero.is-info .tabs li.is-active a {
  opacity: 1;
}
.hero.is-info .tabs.is-boxed a, .hero.is-info .tabs.is-toggle a {
  color: #fff;
}
.hero.is-info .tabs.is-boxed a:hover, .hero.is-info .tabs.is-toggle a:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.hero.is-info .tabs.is-boxed li.is-active a, .hero.is-info .tabs.is-boxed li.is-active a:hover, .hero.is-info .tabs.is-toggle li.is-active a, .hero.is-info .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #3298dc;
}
.hero.is-info.is-bold {
  background-image: linear-gradient(141deg, #159dc6 0%, #3298dc 71%, #4389e5 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-info.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #159dc6 0%, #3298dc 71%, #4389e5 100%);
  }
}
.hero.is-success {
  background-color: #48c774;
  color: #fff;
}
.hero.is-success a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-success strong {
  color: inherit;
}
.hero.is-success .title {
  color: #fff;
}
.hero.is-success .subtitle {
  color: rgba(255, 255, 255, 0.9);
}
.hero.is-success .subtitle a:not(.button),
.hero.is-success .subtitle strong {
  color: #fff;
}
@media screen and (max-width: 1023px) {
  .hero.is-success .navbar-menu {
    background-color: #48c774;
  }
}
.hero.is-success .navbar-item,
.hero.is-success .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}
.hero.is-success a.navbar-item:hover, .hero.is-success a.navbar-item.is-active,
.hero.is-success .navbar-link:hover,
.hero.is-success .navbar-link.is-active {
  background-color: #3abb67;
  color: #fff;
}
.hero.is-success .tabs a {
  color: #fff;
  opacity: 0.9;
}
.hero.is-success .tabs a:hover {
  opacity: 1;
}
.hero.is-success .tabs li.is-active a {
  opacity: 1;
}
.hero.is-success .tabs.is-boxed a, .hero.is-success .tabs.is-toggle a {
  color: #fff;
}
.hero.is-success .tabs.is-boxed a:hover, .hero.is-success .tabs.is-toggle a:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.hero.is-success .tabs.is-boxed li.is-active a, .hero.is-success .tabs.is-boxed li.is-active a:hover, .hero.is-success .tabs.is-toggle li.is-active a, .hero.is-success .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #48c774;
}
.hero.is-success.is-bold {
  background-image: linear-gradient(141deg, #29b342 0%, #48c774 71%, #56d296 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-success.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #29b342 0%, #48c774 71%, #56d296 100%);
  }
}
.hero.is-warning {
  background-color: #F9CD69;
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-warning strong {
  color: inherit;
}
.hero.is-warning .title {
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-warning .subtitle {
  color: rgba(0, 0, 0, 0.9);
}
.hero.is-warning .subtitle a:not(.button),
.hero.is-warning .subtitle strong {
  color: rgba(0, 0, 0, 0.7);
}
@media screen and (max-width: 1023px) {
  .hero.is-warning .navbar-menu {
    background-color: #F9CD69;
  }
}
.hero.is-warning .navbar-item,
.hero.is-warning .navbar-link {
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-warning a.navbar-item:hover, .hero.is-warning a.navbar-item.is-active,
.hero.is-warning .navbar-link:hover,
.hero.is-warning .navbar-link.is-active {
  background-color: #f8c550;
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-warning .tabs a {
  color: rgba(0, 0, 0, 0.7);
  opacity: 0.9;
}
.hero.is-warning .tabs a:hover {
  opacity: 1;
}
.hero.is-warning .tabs li.is-active a {
  opacity: 1;
}
.hero.is-warning .tabs.is-boxed a, .hero.is-warning .tabs.is-toggle a {
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-warning .tabs.is-boxed a:hover, .hero.is-warning .tabs.is-toggle a:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.hero.is-warning .tabs.is-boxed li.is-active a, .hero.is-warning .tabs.is-boxed li.is-active a:hover, .hero.is-warning .tabs.is-toggle li.is-active a, .hero.is-warning .tabs.is-toggle li.is-active a:hover {
  background-color: rgba(0, 0, 0, 0.7);
  border-color: rgba(0, 0, 0, 0.7);
  color: #F9CD69;
}
.hero.is-warning.is-bold {
  background-image: linear-gradient(141deg, #ff9d30 0%, #F9CD69 71%, #fdec7e 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-warning.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #ff9d30 0%, #F9CD69 71%, #fdec7e 100%);
  }
}
.hero.is-danger {
  background-color: #c21f3a;
  color: #fff;
}
.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-danger strong {
  color: inherit;
}
.hero.is-danger .title {
  color: #fff;
}
.hero.is-danger .subtitle {
  color: rgba(255, 255, 255, 0.9);
}
.hero.is-danger .subtitle a:not(.button),
.hero.is-danger .subtitle strong {
  color: #fff;
}
@media screen and (max-width: 1023px) {
  .hero.is-danger .navbar-menu {
    background-color: #c21f3a;
  }
}
.hero.is-danger .navbar-item,
.hero.is-danger .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}
.hero.is-danger a.navbar-item:hover, .hero.is-danger a.navbar-item.is-active,
.hero.is-danger .navbar-link:hover,
.hero.is-danger .navbar-link.is-active {
  background-color: #ac1b33;
  color: #fff;
}
.hero.is-danger .tabs a {
  color: #fff;
  opacity: 0.9;
}
.hero.is-danger .tabs a:hover {
  opacity: 1;
}
.hero.is-danger .tabs li.is-active a {
  opacity: 1;
}
.hero.is-danger .tabs.is-boxed a, .hero.is-danger .tabs.is-toggle a {
  color: #fff;
}
.hero.is-danger .tabs.is-boxed a:hover, .hero.is-danger .tabs.is-toggle a:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.hero.is-danger .tabs.is-boxed li.is-active a, .hero.is-danger .tabs.is-boxed li.is-active a:hover, .hero.is-danger .tabs.is-toggle li.is-active a, .hero.is-danger .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #c21f3a;
}
.hero.is-danger.is-bold {
  background-image: linear-gradient(141deg, #9f0f3f 0%, #c21f3a 71%, #de1c1c 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-danger.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #9f0f3f 0%, #c21f3a 71%, #de1c1c 100%);
  }
}
.hero.is-small .hero-body {
  padding: 1.5rem;
}
@media screen and (min-width: 769px), print {
  .hero.is-medium .hero-body {
    padding: 9rem 1.5rem;
  }
}
@media screen and (min-width: 769px), print {
  .hero.is-large .hero-body {
    padding: 18rem 1.5rem;
  }
}
.hero.is-halfheight .hero-body, .hero.is-fullheight .hero-body, .hero.is-fullheight-with-navbar .hero-body {
  align-items: center;
  display: flex;
}
.hero.is-halfheight .hero-body > .container, .hero.is-fullheight .hero-body > .container, .hero.is-fullheight-with-navbar .hero-body > .container {
  flex-grow: 1;
  flex-shrink: 1;
}
.hero.is-halfheight {
  min-height: 50vh;
}
.hero.is-fullheight {
  min-height: 100vh;
}

.hero-video {
  overflow: hidden;
}
.hero-video video {
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  position: absolute;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
}
.hero-video.is-transparent {
  opacity: 0.3;
}
@media screen and (max-width: 768px) {
  .hero-video {
    display: none;
  }
}

.hero-buttons {
  margin-top: 1.5rem;
}
@media screen and (max-width: 768px) {
  .hero-buttons .button {
    display: flex;
  }
  .hero-buttons .button:not(:last-child) {
    margin-bottom: 0.75rem;
  }
}
@media screen and (min-width: 769px), print {
  .hero-buttons {
    display: flex;
    justify-content: center;
  }
  .hero-buttons .button:not(:last-child) {
    margin-right: 1.5rem;
  }
}

.hero-head,
.hero-foot {
  flex-grow: 0;
  flex-shrink: 0;
}

.hero-body {
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;
}

.section {
  padding: 3rem 1.5rem;
}
@media screen and (min-width: 1024px) {
  .section.is-medium {
    padding: 9rem 1.5rem;
  }
  .section.is-large {
    padding: 18rem 1.5rem;
  }
}

.footer {
  background-color: #fafafa;
  padding: 3rem 1.5rem 6rem;
}

:host,
body {
  background-color: #fafafa;
}

.code-example {
  display: block;
  padding: 1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #2D3E50;
  color: white !important;
}

.details-card p {
  font-size: 1.5 em !important;
  margin-bottom: 0.5em !important;
}

.card-container {
  max-width: 70%;
  margin: 0 auto;
}

`,we="https://nfdi4plants.org/",xe="https://nfdi4plants.org/nfdi4plants.knowledgebase/",ye="https://git.nfdi4plants.org/";var $e=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,Ae=(e,i,t,o)=>{for(var a,r=o>1?void 0:o?Fe(i,t):i,n=e.length-1;n>=0;n--)(a=e[n])&&(r=(o?a(i,t,r):a(r))||r);return o&&r&&$e(i,t,r),r};let ze=class extends X{constructor(){super(...arguments),this.navbarIsActive=!1,this.url=window.location.href}render(){return D`
      <nav class="navbar is-fixed-top variable-colors" style="border-bottom: 1px solid">
        <div class="navbar-brand">
          <a class="navbar-item" href="${we}">
            <img src="https://nfdi4plants.org/images/logo.svg" alt="Logo" width="32" height="32">
          </a>
          <div class=${this.navbarIsActive?"navbar-burger is-active":"navbar-burger"} data-target="navMenu" aria-label="menu" role="button" aria-expanded="false" @click=${this._toggleNavbar}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div id="navMenu" class=${this.navbarIsActive?"navbar-menu is-active":"navbar-menu"}>
          <div class="navbar-start is-justify-content-center is-flex-grow-1">
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="${we}">
                About
                </a>
                <div class="navbar-dropdown is-active smooth-hover">
                  <a class=${"${mainPageBaseUrl}content/learn-more/our-mission.html"==this.url?"navbar-item is-active smooth-hover":"navbar-item"} href="${we}content/learn-more/our-mission.html">
                    Our Mission
                  </a>
                  <a class=${"${mainPageBaseUrl}content/learn-more/the-community.html"==this.url?"navbar-item is-active smooth-hover":"navbar-item"} href="${we}content/learn-more/the-community.html">
                    The Community
                  </a>
                  <a class=${"${mainPageBaseUrl}content/learn-more/annotated-research-context.html"==this.url?"navbar-item is-active smooth-hover":"navbar-item"} href="${we}content/learn-more/annotated-research-context.html">
                    Annotated Research Context
                  </a>
                  <a class=${"${mainPageBaseUrl}content/service.html"==this.url?"navbar-item is-active smooth-hover":"navbar-item"} href="${we}content/service.html">
                    Service
                  </a>
                  <a class=${"${mainPageBaseUrl}content/about.html"==this.url?"navbar-item is-active smooth-hover":"navbar-item"} href="${we}content/about.html">
                    The Consortium
                  </a>
                </div>
              </div>
            <a class=${"${mainPageBaseUrl}news.html"==this.url?"navbar-item is-active smooth-hover":"navbar-item"} href="${we}news.html">
              News
            </a>
            <a class=${"${mainPageBaseUrl}content/jobs.html"==this.url?"navbar-item is-active smooth-hover":"navbar-item"} href="${we}content/jobs.html">
              Jobs
            </a>
            <a class=${this.url==ye?"navbar-item is-active smooth-hover":"navbar-item"} href="${ye}">
              DataHUB
            </a>
            <a class=${this.url.includes(xe,0)?"navbar-item is-active smooth-hover":"navbar-item"} href="${xe}index.html">
            Knowledge Base
            </a>
          </div>
          <div class="navbar-end">
            <a class="navbar-item" href="https://helpdesk.nfdi4plants.org/" title="Helpdesk">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" aria-hidden="true" focusable="false" viewBox="0 0 512 512" >
                <path fill="currentColor" d="M191.1 224c0-17.72-14.34-32.04-32-32.04L144 192c-35.34 0-64 28.66-64 64.08v47.79C80 339.3 108.7 368 144 368H160c17.66 0 32-14.36 32-32.06L191.1 224zM256 0C112.9 0 4.583 119.1 .0208 256L0 296C0 309.3 10.75 320 23.1 320S48 309.3 48 296V256c0-114.7 93.34-207.8 208-207.8C370.7 48.2 464 141.3 464 256v144c0 22.09-17.91 40-40 40h-110.7C305 425.7 289.7 416 272 416H241.8c-23.21 0-44.5 15.69-48.87 38.49C187 485.2 210.4 512 239.1 512H272c17.72 0 33.03-9.711 41.34-24H424c48.6 0 88-39.4 88-88V256C507.4 119.1 399.1 0 256 0zM368 368c35.34 0 64-28.7 64-64.13V256.1C432 220.7 403.3 192 368 192l-16 0c-17.66 0-32 14.34-32 32.04L320 335.9C320 353.7 334.3 368 352 368H368z"/>
              </svg>
            </a>
            <!-- http://www.email-obfuscator.com -->
            <a class="navbar-item" title="E-Mail" href="javascript:location='mailto:\u0069\u006e\u0066\u006f\u0040\u006e\u0066\u0064\u0069\u0034\u0070\u006c\u0061\u006e\u0074\u0073\u002e\u006f\u0072\u0067';void 0">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" aria-hidden="true" focusable="false" viewBox="0 0 512 512" >
                <path fill="currentColor" d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/>
              </svg>
            </a>
            <p id="navbar-v-divide" class="navbar-item is-lightblue">
              |
            </p>
            <a class="navbar-item" href="https://twitter.com/nfdi4plants" title="Twitter">
              <!-- https://fontawesome.com/v6.0/docs/web/add-icons/svg-bare -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" aria-hidden="true" focusable="false" viewBox="0 0 512 512">
                <path fill="currentColor" d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"/>
              </svg>
            </a>
            <a class="navbar-item" href="https://github.com/nfdi4plants" title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" aria-hidden="true" focusable="false" viewBox="0 0 496 512">
                <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
              </svg>
            </a>
            <a class="navbar-item" href="https://www.youtube.com/channel/UCrTBwQWOa0-aWYkwoY104Wg" title="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" aria-hidden="true" focusable="false" viewBox="0 0 576 512">
                <path fill="currentColor" d="M549.7 124.1c-6.281-23.65-24.79-42.28-48.28-48.6C458.8 64 288 64 288 64S117.2 64 74.63 75.49c-23.5 6.322-42 24.95-48.28 48.6-11.41 42.87-11.41 132.3-11.41 132.3s0 89.44 11.41 132.3c6.281 23.65 24.79 41.5 48.28 47.82C117.2 448 288 448 288 448s170.8 0 213.4-11.49c23.5-6.321 42-24.17 48.28-47.82 11.41-42.87 11.41-132.3 11.41-132.3s0-89.44-11.41-132.3zm-317.5 213.5V175.2l142.7 81.21-142.7 81.2z"/>
              </svg>
            </a>
            <a class="navbar-item" href="https://zenodo.org/communities/nfdi4plants?page=1&amp;size=20" style="font-weight: bold;" title="Zenodo">
              Z
            </a>
          </div>
        </div>
      </nav>
      `}_toggleNavbar(){this.navbarIsActive=!this.navbarIsActive}};ze.styles=[ke,a`
        :host {
            position: fixed;
            z-index: 30;
            width: 100%;
        }
        .icon {
            width: 1em;
            height: 1em;
            vertical-align: -.125em;
        }
        .variable-colors, .navbar-item, .navbar-link, .navbar-dropdown {
            background-color: var(--element-background-color, ${he});
            color: var(--element-text-color, white);
            border-color: var(--element-text-color, white);
        }
        .navbar-divider {
            background-color: var(--element-text-color, white);
        }

        @media only screen and (max-width: 1023px) {
            #navbar-v-divide {
                display: none
            }
        }
    `],Ae([ee({type:Boolean})],ze.prototype,"navbarIsActive",2),Ae([ee()],ze.prototype,"url",2),ze=Ae([J("nfdi-navbar")],ze);var Ce=Object.defineProperty,_e=Object.getOwnPropertyDescriptor;let Ee=class extends X{render(){return D`
            <footer class="footer variable-colors">
                <div class="container">
                <div class="columns">
                    <div class="column is-4 m-4">
                    <div class="block">
                        <h3 class="subtitle headerColor">
                        DataPLANT - Democratization of plant research made easy.
                        </h3>
                    </div>
                    <div class="block">
                        <p>
                        DataPLANT is part of 
                        <a href="https://www.nfdi.de/">
                            NFDI
                        </a>
                        </p>
                    </div>
                    <div class="block">
                        <p>
                        This website is developed and maintained by members of DataPLANT
                        </p>
                    </div>
                    <div class="block">
                        <h3 class="subtitle headerColor">
                        Legal
                        </h3>
                    </div>
                    <div class="block">
                        <a href="${we}content/imprint.html">
                        Imprint
                        </a>
                    </div>
                    <div class="block">
                        <a href="${we}content/privacy.html">
                        Privacy
                        </a>
                    </div>
                    </div>
                    <div class="column is-4 m-4">
                    <div class="block">
                        <h3 class="subtitle headerColor">
                        Navigation
                        </h3>
                    </div>
                    <ul>
                        <div class="block">
                        <li>
                            <a href="${we}">
                            Home
                            </a>
                        </li>
                        </div>
                        <div class="block">
                        <li>
                            <a href="${we}news.html">
                            News
                            </a>
                        </li>
                        </div>
                        <div class="block">
                        <li>
                            <a href="${we}content/jobs.html">
                            Jobs
                            </a>
                        </li>
                        </div>
                        <div class="block">
                        <li>
                            <a href="${ye}">
                            DataHUB
                            </a>
                        </li>
                        </div>
                        <div class="block">
                        <li>
                            <a href="${xe}index.html">
                            Knowledge Base
                            </a>
                        </li>
                        </div>
                    </ul>
                    </div>
                    <div class="column is-4 m-4">
                    <div class="block">
                        <h3 class="subtitle headerColor">
                        Help
                        </h3>
                    </div>
                    <div class="block">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" aria-hidden="true" focusable="false" viewBox="0 0 512 512" >
                            <path fill="currentColor" d="M191.1 224c0-17.72-14.34-32.04-32-32.04L144 192c-35.34 0-64 28.66-64 64.08v47.79C80 339.3 108.7 368 144 368H160c17.66 0 32-14.36 32-32.06L191.1 224zM256 0C112.9 0 4.583 119.1 .0208 256L0 296C0 309.3 10.75 320 23.1 320S48 309.3 48 296V256c0-114.7 93.34-207.8 208-207.8C370.7 48.2 464 141.3 464 256v144c0 22.09-17.91 40-40 40h-110.7C305 425.7 289.7 416 272 416H241.8c-23.21 0-44.5 15.69-48.87 38.49C187 485.2 210.4 512 239.1 512H272c17.72 0 33.03-9.711 41.34-24H424c48.6 0 88-39.4 88-88V256C507.4 119.1 399.1 0 256 0zM368 368c35.34 0 64-28.7 64-64.13V256.1C432 220.7 403.3 192 368 192l-16 0c-17.66 0-32 14.34-32 32.04L320 335.9C320 353.7 334.3 368 352 368H368z"/>
                        </svg>
                        <a href="https://helpdesk.nfdi4plants.org/">
                        DataPLANT Helpdesk
                        </a>
                    </div>
                    <div class="block">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" aria-hidden="true" focusable="false" viewBox="0 0 512 512" >
                            <path fill="currentColor" d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/>
                        </svg>
                        <!-- http://www.email-obfuscator.com -->
                        <a href="javascript:location='mailto:\u0069\u006e\u0066\u006f\u0040\u006e\u0066\u0064\u0069\u0034\u0070\u006c\u0061\u006e\u0074\u0073\u002e\u006f\u0072\u0067';void 0">
                            DataPLANT Info Point
                        </a>
                    </div>
                    <div class="block">
                        <h3 class="subtitle headerColor">
                        Social
                        </h3>
                    </div>
                    <div class="block">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" aria-hidden="true" focusable="false" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"/>
                        </svg>
                        <a href="https://twitter.com/nfdi4plants">
                        DataPLANT on Twitter
                        </a>
                    </div>
                    <div class="block">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" aria-hidden="true" focusable="false" viewBox="0 0 496 512">
                            <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                        </svg>
                        <a href="https://github.com/nfdi4plants">
                        DataPLANT open source projects on GitHub
                        </a>
                    </div>
                    <div class="block">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" aria-hidden="true" focusable="false" viewBox="0 0 576 512">
                            <path fill="currentColor" d="M549.7 124.1c-6.281-23.65-24.79-42.28-48.28-48.6C458.8 64 288 64 288 64S117.2 64 74.63 75.49c-23.5 6.322-42 24.95-48.28 48.6-11.41 42.87-11.41 132.3-11.41 132.3s0 89.44 11.41 132.3c6.281 23.65 24.79 41.5 48.28 47.82C117.2 448 288 448 288 448s170.8 0 213.4-11.49c23.5-6.321 42-24.17 48.28-47.82 11.41-42.87 11.41-132.3 11.41-132.3s0-89.44-11.41-132.3zm-317.5 213.5V175.2l142.7 81.21-142.7 81.2z"/>
                        </svg>
                        <a href="https://www.youtube.com/channel/UCrTBwQWOa0-aWYkwoY104Wg">
                        DataPLANT video resources on youtube
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </footer>
        `}};Ee.styles=[ke,a`
            :host{
                display: block;
                clear: both;
                overflow: auto
            }
            
            .icon {
                width: 1em;
                height: 1em;
                vertical-align: -.125em;
            }

            .variable-colors {
                background-color: var(--element-background-color, ${fe});
                color: var(--element-text-color, ${ve});
                border-color: var(--element-text-color, ${ve})
            }

            a {
                color: var(--link-color, ${ue})
            }

            a:hover {
                color:var(--link-hover-color, ${ge})
            }

            .headerColor {
                color: var(--header-color, ${ve});
            }
        `],Ee=((e,i,t,o)=>{for(var a,r=o>1?void 0:o?_e(i,t):i,n=e.length-1;n>=0;n--)(a=e[n])&&(r=(o?a(i,t,r):a(r))||r);return o&&r&&Ce(i,t,r),r})([J("nfdi-footer")],Ee);var Se=Object.defineProperty,De=Object.getOwnPropertyDescriptor,Be=(e,i,t,o)=>{for(var a,r=o>1?void 0:o?De(i,t):i,n=e.length-1;n>=0;n--)(a=e[n])&&(r=(o?a(i,t,r):a(r))||r);return o&&r&&Se(i,t,r),r};let Te=class extends X{constructor(){super(...arguments),this.navbarIsActive=!1}render(){return D`
            <footer class="fixed-footer">
                <button class="button is-ghost" @click=${this._toggleSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" class="icon" height=16 width=16><path fill="currentcolor" d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"/></svg>
                </button>
            </footer>
            <div class="main">
                <div class="wrapper">
                    <div class=${this.navbarIsActive?"inner-wrapper is-active":"inner-wrapper"}>
                        <button class="button is-ghost close-sidebar-button" @click=${this._toggleSidebar}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="icon" height=16 width=16><path fill="currentcolor" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
                        </button>
                        <slot></slot>
                    </div>    
                </div>
            </div>
        `}_toggleSidebar(){this.navbarIsActive=!this.navbarIsActive}};Te.styles=[ke,a`
            .inner-wrapper {
                position: sticky;
                top: 71px;
                max-height: 90%;
                scrollbar-color: var(--element-background-color, ${ve}) var(--accent-text-color, ${ge});
                background-color: var(--sidebar-background-color, transparent);
                padding: 1rem;
                border-radius: 10px;
                overscroll-behavior: contain;
                overflow-y: auto;
                width: 300px;
            }

            .inner-wrapper::-webkit-scrollbar {
                -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                width: 5px;
                height: 0px;
            }

            .inner-wrapper::-webkit-scrollbar-track { /* Background */
                background-color: var(--element-background-color, ${ve});
            }

            .inner-wrapper::-webkit-scrollbar-thumb { /* Foreground */
                background-color: var(--accent-text-color, ${ge});
            }

            ::slotted(*) {
                margin-bottom: 1rem;
                display: block;
                background: none;
                color: var(--element-text-color, ${ge});
                border-color: var(--element-text-color, ${ge});
                overflow: hidden
            }
            
            .fixed-footer {
                position: fixed;
                display: none;
                left: 0;
                bottom: 0;
                z-index: 10000;
                width: 100%;
                border-top: .5px solid var(--element-text-color, ${ge});
                background-color: var(--element-background-color, ${he});
                justify-content: center;
                padding: .5rem;
            }

            .close-sidebar-button {
                position: absolute;
                top: 0;
                right: 0;
                z-index: 10001;
                display: none;
            }

            @media only screen and (min-width: 1024px) {
                .main {
                    display: grid; 
                    height: 100%;
                    grid-template-columns: 1fr; grid-template-rows: 1fr;
                }

                .wrapper {
                    display: inline-block;
                    grid-column: 1 / span 1; 
                    grid-row: 1 / span 1;
                }
            }

            @media only screen and (max-width: 1023px) {
                .inner-wrapper {
                    position: fixed;
                    height: 100%;
                    top: 0;
                    left: -320px;
                    border-right: .5px solid var(--element-text-color, ${ge});
                    border-bottom: .5px solid var(--element-text-color, ${ge});
                    border-top: .5px solid var(--element-text-color, ${ge});
                    background-color: var(--sidebar-background-color, ${ve});
                    border-radius: 0;
                    z-index: 10000;
                    width: 320px;
                    transition: left .5s;
                    padding: 1rem;
                    max-height: 100%;
                    max-width: 100%;
                    overflow: scroll;
                }
                
                .close-sidebar-button {
                    display: block;
                }

                .is-active {
                    left: 0
                }

                :host {
                    display: inline
                }

                .fixed-footer {
                    display: flex
                }
            }
        `],Be([ee({type:Boolean})],Te.prototype,"navbarIsActive",2),Te=Be([J("nfdi-sidebar")],Te);var je=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor;let Le=class extends X{render(){return D`
            <div class="box"><slot></slot></div>
        `}};Le.styles=[ke,a`
            ::slotted(p) {
                text-align: justify;
            }

            ::slotted(blockquote) {
                text-align: justify;
                background-color: var(--element-background-color, ${ve}) !important;
                border-color: var(--element-text-color, ${ge});
            }

            .box {
                padding: 1.25rem 2rem;
                background-color: var(--element-background-color, ${ve});
                color: var(--element-text-color, ${ge}) !important;
                border-color: var(--element-text-color, ${ge});
                border: 1px solid;
                /* box-shadow: unset */
            }

            ::slotted(nfdi-h1), ::slotted(nfdi-h2), ::slotted(nfdi-h3), ::slotted(nfdi-h4), ::slotted(nfdi-h5), ::slotted(nfdi-h6) {
                color: var(--header-color, ${ge}) !important;
            }

            ::slotted(*) {
                min-width: 0 !important;
            }

            @media only screen and (max-width: 1023px) {
                .box {
                   border: none;
                   border-radius: 0;
                }
            }

            @media only screen and (max-width: 599px) {
                .box {  
                    border-radius: 0;
                    padding: 1rem;
                    border: unset
                }
            }

        `],Le=((e,i,t,o)=>{for(var a,r=o>1?void 0:o?Pe(i,t):i,n=e.length-1;n>=0;n--)(a=e[n])&&(r=(o?a(i,t,r):a(r))||r);return o&&r&&je(i,t,r),r})([J("nfdi-content")],Le);var Oe=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,Ge=(e,i,t,o)=>{for(var a,r=o>1?void 0:o?Ie(i,t):i,n=e.length-1;n>=0;n--)(a=e[n])&&(r=(o?a(i,t,r):a(r))||r);return o&&r&&Oe(i,t,r),r};const He=D`
    <div class="column is-narrow sidebar-column">
        <nfdi-sidebar>
            <slot name="sidebar"></slot>
        </nfdi-sidebar>
    </div>
`;let Me=class extends X{constructor(){super(...arguments),this.hasSidebar=!1}render(){return D`
        <div class="variable-colors">
            <div class="container" style="padding: 2vh 0">
                <div class="columns">
                    ${this.hasSidebar?He:D``}
                    <div class="column content-column">
                        <nfdi-content>  
                            <slot></slot>
                        </nfdi-content>
                    </div>
                </div>
            </div>
        </div>
        `}};Me.styles=[ke,a`
            .variable-colors {
                background-color: var(--outside-background-color, ${pe});
                color: var(--element-text-color, ${ge});
                border-color: var(--element-text-color, ${ge})
            }

            /* https://stackoverflow.com/questions/36230944/prevent-flex-items-from-overflowing-a-container */
            .content-column {
                min-width: 0;
            }

            @media screen and (min-width: 1216px) {
                .container:not(.is-max-desktop) {
                    max-width: 1152px !important;
                }
            }

            @media only screen and (max-width: 1023px) {
                .sidebar-column {
                    padding: 0
                }

                .columns {
                    padding: 0
                }

                .variable-colors {
                    border: none
                }

                .container {
                    padding: 0 !important;
                    border-radius: 0 !important
                }
            }
        `],Ge([ee({type:Boolean})],Me.prototype,"hasSidebar",2),Me=Ge([J("nfdi-body")],Me);var Ne=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,Ue=(e,i,t,o)=>{for(var a,r=o>1?void 0:o?Re(i,t):i,n=e.length-1;n>=0;n--)(a=e[n])&&(r=(o?a(i,t,r):a(r))||r);return o&&r&&Ne(i,t,r),r};const qe=a`

    :host {
        scroll-margin-top: 100px
    }

    h1,h2,h3,h4,h5,h6 {
        display: block; 
        width: 100%;
        line-height: 1.2;
        padding: 0.5rem 0rem 0.75rem;
    }

    h1:hover .anchor, h2:hover .anchor, h3:hover .anchor, h4:hover .anchor, h5:hover .anchor, h6:hover .anchor {
        visibility: visible;
    }

    .anchor {
        float: left;
        padding-right: 4px;
        margin-left: -20px;
        line-height: 1;
        visibility: hidden;
    }

    .anchor-icon {
        display: inline-block;
        overflow: visible !important;
        vertical-align: middle;
        text-size-adjust: 100%;
        width: 16px;
        height: 16px;
    }

    a {
        color: var(--link-color, ${ue})
    }

    a:hover {
        color:var(--link-hover-color, ${ge})
    }

`,Ve=(e,i,t)=>ne`
    <${e}>
        <a href=${i} class="anchor">
            <svg xmlns="http://www.w3.org/2000/svg" class="anchor-icon" viewBox="0 0 16 16">
                <path fill-rule="evenodd" fill="currentColor" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"/>
            </svg>
        </a>
        ${de(t)}
    </${e}>
`;function We(e){return void 0!==e?"#"+e:"#"}const Ye=/[^a-zA-Z0-9\s\-]/g;function Ze(e){return e.trim().toLowerCase().replace(Ye,"").replace(/\s/g,"-")}let Xe=class extends X{render(){return Ve(ae("h1"),We(this.textId),this.text)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{let e=this.innerHTML.trim();this.text=e;let i=Ze(e);this.id=i,this.textId=i}))}};Xe.styles=[ke,qe],Ue([ee()],Xe.prototype,"text",2),Ue([ee()],Xe.prototype,"textId",2),Xe=Ue([J("nfdi-h1")],Xe);let Ke=class extends X{render(){return Ve(ae("h2"),We(this.textId),this.text)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{let e=this.innerHTML.trim();this.text=e;let i=Ze(e);this.id=i,this.textId=i}))}};Ke.styles=[ke,qe],Ue([ee()],Ke.prototype,"text",2),Ue([ee()],Ke.prototype,"textId",2),Ke=Ue([J("nfdi-h2")],Ke);let Je=class extends X{render(){return Ve(ae("h3"),We(this.textId),this.text)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{let e=this.innerHTML.trim();this.text=e;let i=Ze(e);this.id=i,this.textId=i}))}};Je.styles=[ke,qe],Ue([ee()],Je.prototype,"text",2),Ue([ee()],Je.prototype,"textId",2),Je=Ue([J("nfdi-h3")],Je);let Qe=class extends X{render(){return Ve(ae("h4"),We(this.textId),this.text)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{let e=this.innerHTML.trim();this.text=e;let i=Ze(e);this.id=i,this.textId=i}))}};Qe.styles=[ke,qe],Ue([ee()],Qe.prototype,"text",2),Ue([ee()],Qe.prototype,"textId",2),Qe=Ue([J("nfdi-h4")],Qe);let ei=class extends X{render(){return Ve(ae("h5"),We(this.textId),this.text)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{let e=this.innerHTML.trim();this.text=e;let i=Ze(e);this.id=i,this.textId=i}))}};ei.styles=[ke,qe],Ue([ee()],ei.prototype,"text",2),Ue([ee()],ei.prototype,"textId",2),ei=Ue([J("nfdi-h5")],ei);let ii=class extends X{render(){return Ve(ae("h6"),We(this.textId),this.text)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{let e=this.innerHTML.trim();this.text=e;let i=Ze(e);this.id=i,this.textId=i}))}};function ti(e){var i,t,o;let a={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blue:"#0000FF",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#FF00FF",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#00FF00",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#FF0000",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",whitesmoke:"#F5F5F5",yellow:"#FFFF00",yellowgreen:"#9ACD32"}[(e=e.trim()).toLowerCase()];return e.match(/^rgb/)?(i=(e=e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/))[1],t=e[2],o=e[3]):void 0!==a?(i=(e=+("0x"+(e=a).slice(1).replace(e.length<5&&/./g,"$&$&")))>>16,t=e>>8&255,o=255&e):(i=(e=+("0x"+e.slice(1).replace(e.length<5&&/./g,"$&$&")))>>16,t=e>>8&255,o=255&e),Math.sqrt(i*i*.299+t*t*.587+o*o*.114)>127.5}ii.styles=[ke,qe],Ue([ee()],ii.prototype,"text",2),Ue([ee()],ii.prototype,"textId",2),ii=Ue([J("nfdi-h6")],ii);const oi=a`
    
    ${a`
code[class*=language-],pre[class*=language-]{color:#000;background:0 0;text-shadow:0 1px #fff;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}code[class*=language-] ::-moz-selection,code[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection{text-shadow:none;background:#b3d4fc}code[class*=language-] ::selection,code[class*=language-]::selection,pre[class*=language-] ::selection,pre[class*=language-]::selection{text-shadow:none;background:#b3d4fc}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#999}.token.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{color:#9a6e3a;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.class-name,.token.function{color:#dd4a68}.token.important,.token.regex,.token.variable{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}
`}

    .token.attr-name { color: ${ue} }

    .token.attr-value, .token.string { color: #C3723B }

    .token.tag { color: #569CD6 }

    .token.class-name { color: ${ce} }

    .token.number { color: ${be} }

    .token.property { color: ${ue} }

    .token.operator { color: unset; background-color: unset }
`;var ai,ri,ni="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},si={exports:{}};ai=si,ri=function(e){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,t=0,o={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(i){return i instanceof r?new r(i.type,e(i.content),i.alias):Array.isArray(i)?i.map(e):i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(i,t){var o,r;switch(t=t||{},a.util.type(i)){case"Object":if(r=a.util.objId(i),t[r])return t[r];for(var n in o={},t[r]=o,i)i.hasOwnProperty(n)&&(o[n]=e(i[n],t));return o;case"Array":return r=a.util.objId(i),t[r]?t[r]:(o=[],t[r]=o,i.forEach((function(i,a){o[a]=e(i,t)})),o);default:return i}},getLanguage:function(e){for(;e;){var t=i.exec(e.className);if(t)return t[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,t){e.className=e.className.replace(RegExp(i,"gi"),""),e.classList.add("language-"+t)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(o){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(o.stack)||[])[1];if(e){var i=document.getElementsByTagName("script");for(var t in i)if(i[t].src==e)return i[t]}return null}},isActive:function(e,i,t){for(var o="no-"+i;e;){var a=e.classList;if(a.contains(i))return!0;if(a.contains(o))return!1;e=e.parentElement}return!!t}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(e,i){var t=a.util.clone(a.languages[e]);for(var o in i)t[o]=i[o];return t},insertBefore:function(e,i,t,o){var r=(o=o||a.languages)[e],n={};for(var s in r)if(r.hasOwnProperty(s)){if(s==i)for(var l in t)t.hasOwnProperty(l)&&(n[l]=t[l]);t.hasOwnProperty(s)||(n[s]=r[s])}var d=o[e];return o[e]=n,a.languages.DFS(a.languages,(function(i,t){t===d&&i!=e&&(this[i]=n)})),n},DFS:function e(i,t,o,r){r=r||{};var n=a.util.objId;for(var s in i)if(i.hasOwnProperty(s)){t.call(i,s,i[s],o||s);var l=i[s],d=a.util.type(l);"Object"!==d||r[n(l)]?"Array"!==d||r[n(l)]||(r[n(l)]=!0,e(l,t,s,r)):(r[n(l)]=!0,e(l,t,null,r))}}},plugins:{},highlightAll:function(e,i){a.highlightAllUnder(document,e,i)},highlightAllUnder:function(e,i,t){var o={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",o),o.elements=Array.prototype.slice.apply(o.container.querySelectorAll(o.selector)),a.hooks.run("before-all-elements-highlight",o);for(var r,n=0;r=o.elements[n++];)a.highlightElement(r,!0===i,o.callback)},highlightElement:function(i,t,o){var r=a.util.getLanguage(i),n=a.languages[r];a.util.setLanguage(i,r);var s=i.parentElement;s&&"pre"===s.nodeName.toLowerCase()&&a.util.setLanguage(s,r);var l={element:i,language:r,grammar:n,code:i.textContent};function d(e){l.highlightedCode=e,a.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,a.hooks.run("after-highlight",l),a.hooks.run("complete",l),o&&o.call(l.element)}if(a.hooks.run("before-sanity-check",l),(s=l.element.parentElement)&&"pre"===s.nodeName.toLowerCase()&&!s.hasAttribute("tabindex")&&s.setAttribute("tabindex","0"),!l.code)return a.hooks.run("complete",l),void(o&&o.call(l.element));if(a.hooks.run("before-highlight",l),l.grammar)if(t&&e.Worker){var c=new Worker(a.filename);c.onmessage=function(e){d(e.data)},c.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else d(a.highlight(l.code,l.grammar,l.language));else d(a.util.encode(l.code))},highlight:function(e,i,t){var o={code:e,grammar:i,language:t};if(a.hooks.run("before-tokenize",o),!o.grammar)throw new Error('The language "'+o.language+'" has no grammar.');return o.tokens=a.tokenize(o.code,o.grammar),a.hooks.run("after-tokenize",o),r.stringify(a.util.encode(o.tokens),o.language)},tokenize:function(e,i){var t=i.rest;if(t){for(var o in t)i[o]=t[o];delete i.rest}var a=new l;return d(a,a.head,e),s(e,a,i,a.head,0),function(e){for(var i=[],t=e.head.next;t!==e.tail;)i.push(t.value),t=t.next;return i}(a)},hooks:{all:{},add:function(e,i){var t=a.hooks.all;t[e]=t[e]||[],t[e].push(i)},run:function(e,i){var t=a.hooks.all[e];if(t&&t.length)for(var o,r=0;o=t[r++];)o(i)}},Token:r};function r(e,i,t,o){this.type=e,this.content=i,this.alias=t,this.length=0|(o||"").length}function n(e,i,t,o){e.lastIndex=i;var a=e.exec(t);if(a&&o&&a[1]){var r=a[1].length;a.index+=r,a[0]=a[0].slice(r)}return a}function s(e,i,t,o,l,b){for(var m in t)if(t.hasOwnProperty(m)&&t[m]){var u=t[m];u=Array.isArray(u)?u:[u];for(var h=0;h<u.length;++h){if(b&&b.cause==m+","+h)return;var f=u[h],p=f.inside,g=!!f.lookbehind,v=!!f.greedy,k=f.alias;if(v&&!f.pattern.global){var w=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,w+"g")}for(var x=f.pattern||f,y=o.next,$=l;y!==i.tail&&!(b&&$>=b.reach);$+=y.value.length,y=y.next){var F=y.value;if(i.length>e.length)return;if(!(F instanceof r)){var A,z=1;if(v){if(!(A=n(x,$,e,g))||A.index>=e.length)break;var C=A.index,_=A.index+A[0].length,E=$;for(E+=y.value.length;C>=E;)E+=(y=y.next).value.length;if($=E-=y.value.length,y.value instanceof r)continue;for(var S=y;S!==i.tail&&(E<_||"string"==typeof S.value);S=S.next)z++,E+=S.value.length;z--,F=e.slice($,E),A.index-=$}else if(!(A=n(x,0,F,g)))continue;C=A.index;var D=A[0],B=F.slice(0,C),T=F.slice(C+D.length),j=$+F.length;b&&j>b.reach&&(b.reach=j);var P=y.prev;if(B&&(P=d(i,P,B),$+=B.length),c(i,P,z),y=d(i,P,new r(m,p?a.tokenize(D,p):D,k,D)),T&&d(i,y,T),z>1){var L={cause:m+","+h,reach:j};s(e,i,t,y.prev,$,L),b&&L.reach>b.reach&&(b.reach=L.reach)}}}}}}function l(){var e={value:null,prev:null,next:null},i={value:null,prev:e,next:null};e.next=i,this.head=e,this.tail=i,this.length=0}function d(e,i,t){var o=i.next,a={value:t,prev:i,next:o};return i.next=a,o.prev=a,e.length++,a}function c(e,i,t){for(var o=i.next,a=0;a<t&&o!==e.tail;a++)o=o.next;i.next=o,o.prev=i,e.length-=a}if(e.Prism=a,r.stringify=function e(i,t){if("string"==typeof i)return i;if(Array.isArray(i)){var o="";return i.forEach((function(i){o+=e(i,t)})),o}var r={type:i.type,content:e(i.content,t),tag:"span",classes:["token",i.type],attributes:{},language:t},n=i.alias;n&&(Array.isArray(n)?Array.prototype.push.apply(r.classes,n):r.classes.push(n)),a.hooks.run("wrap",r);var s="";for(var l in r.attributes)s+=" "+l+'="'+(r.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+s+">"+r.content+"</"+r.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(i){var t=JSON.parse(i.data),o=t.language,r=t.code,n=t.immediateClose;e.postMessage(a.highlight(r,a.languages[o],o)),n&&e.close()}),!1),a):a;var b=a.util.currentScript();function m(){a.manual||a.highlightAll()}if(b&&(a.filename=b.src,b.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var u=document.readyState;"loading"===u||"interactive"===u&&b&&b.defer?document.addEventListener("DOMContentLoaded",m):window.requestAnimationFrame?window.requestAnimationFrame(m):window.setTimeout(m,16)}return a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{}),ai.exports&&(ai.exports=ri),void 0!==ni&&(ni.Prism=ri),ri.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},ri.languages.markup.tag.inside["attr-value"].inside.entity=ri.languages.markup.entity,ri.languages.markup.doctype.inside["internal-subset"].inside=ri.languages.markup,ri.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(ri.languages.markup.tag,"addInlined",{value:function(e,i){var t={};t["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:ri.languages[i]},t.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:t}};o["language-"+i]={pattern:/[\s\S]+/,inside:ri.languages[i]};var a={};a[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:o},ri.languages.insertBefore("markup","cdata",a)}}),Object.defineProperty(ri.languages.markup.tag,"addAttribute",{value:function(e,i){ri.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:ri.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),ri.languages.html=ri.languages.markup,ri.languages.mathml=ri.languages.markup,ri.languages.svg=ri.languages.markup,ri.languages.xml=ri.languages.extend("markup",{}),ri.languages.ssml=ri.languages.xml,ri.languages.atom=ri.languages.xml,ri.languages.rss=ri.languages.xml,function(e){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var t=e.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))}(ri),ri.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},ri.languages.javascript=ri.languages.extend("clike",{"class-name":[ri.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),ri.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,ri.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:ri.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:ri.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:ri.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:ri.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:ri.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),ri.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:ri.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),ri.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),ri.languages.markup&&(ri.languages.markup.tag.addInlined("script","javascript"),ri.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),ri.languages.js=ri.languages.javascript,function(){if(void 0!==ri&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",t="loading",o="loaded",a='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])';ri.hooks.add("before-highlightall",(function(e){e.selector+=", "+a})),ri.hooks.add("before-sanity-check",(function(r){var n=r.element;if(n.matches(a)){r.code="",n.setAttribute(i,t);var s=n.appendChild(document.createElement("CODE"));s.textContent="Loading…";var l=n.getAttribute("data-src"),d=r.language;if("none"===d){var c=(/\.(\w+)$/.exec(l)||[,"none"])[1];d=e[c]||c}ri.util.setLanguage(s,d),ri.util.setLanguage(n,d);var b=ri.plugins.autoloader;b&&b.loadLanguages(d),function(e,i,t){var o=new XMLHttpRequest;o.open("GET",e,!0),o.onreadystatechange=function(){4==o.readyState&&(o.status<400&&o.responseText?i(o.responseText):o.status>=400?t("✖ Error "+o.status+" while fetching file: "+o.statusText):t("✖ Error: File does not exist or is empty"))},o.send(null)}(l,(function(e){n.setAttribute(i,o);var t=function(e){var i=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e||"");if(i){var t=Number(i[1]),o=i[2],a=i[3];return o?a?[t,Number(a)]:[t,void 0]:[t,t]}}(n.getAttribute("data-range"));if(t){var a=e.split(/\r\n?|\n/g),r=t[0],l=null==t[1]?a.length:t[1];r<0&&(r+=a.length),r=Math.max(0,Math.min(r-1,a.length)),l<0&&(l+=a.length),l=Math.max(0,Math.min(l,a.length)),e=a.slice(r,l).join("\n"),n.hasAttribute("data-start")||n.setAttribute("data-start",String(r+1))}s.textContent=e,ri.highlightElement(s)}),(function(e){n.setAttribute(i,"failed"),s.textContent=e}))}})),ri.plugins.fileHighlight={highlight:function(e){for(var i,t=(e||document).querySelectorAll(a),o=0;i=t[o++];)ri.highlightElement(i)}};var r=!1;ri.fileHighlight=function(){r||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),r=!0),ri.plugins.fileHighlight.highlight.apply(this,arguments)}}}(),function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var i=e.languages.extend("typescript",{});delete i["class-name"],e.languages.typescript["class-name"].inside=i,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:i}}}}),e.languages.ts=e.languages.typescript}(Prism),Prism.languages.fsharp=Prism.languages.extend("clike",{comment:[{pattern:/(^|[^\\])\(\*(?!\))[\s\S]*?\*\)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|"(?:\\[\s\S]|[^\\"])*")B?/,greedy:!0},"class-name":{pattern:/(\b(?:exception|inherit|interface|new|of|type)\s+|\w\s*:\s*|\s:\??>\s*)[.\w]+\b(?:\s*(?:->|\*)\s*[.\w]+\b)*(?!\s*[:.])/,lookbehind:!0,inside:{operator:/->|\*/,punctuation:/\./}},keyword:/\b(?:let|return|use|yield)(?:!\B|\b)|\b(?:abstract|and|as|asr|assert|atomic|base|begin|break|checked|class|component|const|constraint|constructor|continue|default|delegate|do|done|downcast|downto|eager|elif|else|end|event|exception|extern|external|false|finally|fixed|for|fun|function|functor|global|if|in|include|inherit|inline|interface|internal|land|lazy|lor|lsl|lsr|lxor|match|member|method|mixin|mod|module|mutable|namespace|new|not|null|object|of|open|or|override|parallel|private|process|protected|public|pure|rec|sealed|select|sig|static|struct|tailcall|then|to|trait|true|try|type|upcast|val|virtual|void|volatile|when|while|with)\b/,number:[/\b0x[\da-fA-F]+(?:LF|lf|un)?\b/,/\b0b[01]+(?:uy|y)?\b/,/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[fm]|e[+-]?\d+)?\b/i,/\b\d+(?:[IlLsy]|UL|u[lsy]?)?\b/],operator:/([<>~&^])\1\1|([*.:<>&])\2|<-|->|[!=:]=|<?\|{1,3}>?|\??(?:<=|>=|<>|[-+*/%=<>])\??|[!?^&]|~[+~-]|:>|:\?>?/}),Prism.languages.insertBefore("fsharp","keyword",{preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(^#)\b(?:else|endif|if|light|line|nowarn)\b/,lookbehind:!0,alias:"keyword"}}}}),Prism.languages.insertBefore("fsharp","punctuation",{"computation-expression":{pattern:/\b[_a-z]\w*(?=\s*\{)/i,alias:"keyword"}}),Prism.languages.insertBefore("fsharp","string",{annotation:{pattern:/\[<.+?>\]/,greedy:!0,inside:{punctuation:/^\[<|>\]$/,"class-name":{pattern:/^\w+$|(^|;\s*)[A-Z]\w*(?=\()/,lookbehind:!0},"annotation-content":{pattern:/[\s\S]+/,inside:Prism.languages.fsharp}}},char:{pattern:/'(?:[^\\']|\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8}))'B?/,greedy:!0}}),function(e){var i="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",t={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},o={bash:t,environment:{pattern:RegExp("\\$"+i),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+i),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+i),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:o},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:t}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:o},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:o.entity}}],environment:{pattern:RegExp("\\$?"+i),alias:"constant"},variable:o.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},t.inside=e.languages.bash;for(var a=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],r=o.variable[1].inside,n=0;n<a.length;n++)r[a[n]]=e.languages.bash[a[n]];e.languages.shell=e.languages.bash}(Prism),function(e){var i=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function t(e){return e=e.replace(/<inner>/g,(function(){return i})),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+e+")")}var o=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,a=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,(function(){return o})),r=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+a+r+"(?:"+a+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+a+r+")(?:"+a+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(o),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+a+")"+r+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+a+"$"),inside:{"table-header":{pattern:RegExp(o),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:t(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:t(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:t(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:t(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach((function(i){["url","bold","italic","strike","code-snippet"].forEach((function(t){i!==t&&(e.languages.markdown[i].inside.content.inside[t]=e.languages.markdown[t])}))})),e.hooks.add("after-tokenize",(function(e){"markdown"!==e.language&&"md"!==e.language||function e(i){if(i&&"string"!=typeof i)for(var t=0,o=i.length;t<o;t++){var a=i[t];if("code"===a.type){var r=a.content[1],n=a.content[3];if(r&&n&&"code-language"===r.type&&"code-block"===n.type&&"string"==typeof r.content){var s=r.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),l="language-"+(s=(/[a-z][\w-]*/i.exec(s)||[""])[0].toLowerCase());n.alias?"string"==typeof n.alias?n.alias=[n.alias,l]:n.alias.push(l):n.alias=[l]}}else e(a.content)}}(e.tokens)})),e.hooks.add("wrap",(function(i){if("code-block"===i.type){for(var t="",o=0,a=i.classes.length;o<a;o++){var r=i.classes[o],d=/language-(.+)/.exec(r);if(d){t=d[1];break}}var c,b,m=e.languages[t];if(m)i.content=e.highlight((c=i.content,b=(b=c.replace(n,"")).replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,(function(e,i){var t;if("#"===(i=i.toLowerCase())[0])return t="x"===i[1]?parseInt(i.slice(2),16):Number(i.slice(1)),l(t);var o=s[i];return o||e})),b),m,t);else if(t&&"none"!==t&&e.plugins.autoloader){var u="md-"+(new Date).valueOf()+"-"+Math.floor(1e16*Math.random());i.attributes.id=u,e.plugins.autoloader.loadLanguages(t,(function(){var i=document.getElementById(u);i&&(i.innerHTML=e.highlight(i.textContent,e.languages[t],t))}))}}}));var n=RegExp(e.languages.markup.tag.pattern.source,"gi"),s={amp:"&",lt:"<",gt:">",quot:'"'},l=String.fromCodePoint||String.fromCharCode;e.languages.md=e.languages.markdown}(Prism),function(e){function i(e,i){return e.replace(/<<(\d+)>>/g,(function(e,t){return"(?:"+i[+t]+")"}))}function t(e,t,o){return RegExp(i(e,t),o||"")}function o(e,i){for(var t=0;t<i;t++)e=e.replace(/<<self>>/g,(function(){return"(?:"+e+")"}));return e.replace(/<<self>>/g,"[^\\s\\S]")}var a="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",r="class enum interface record struct",n="add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",s="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function l(e){return"\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}var d=l(r),c=RegExp(l(a+" "+r+" "+n+" "+s)),b=l(r+" "+n+" "+s),m=l(a+" "+r+" "+s),u=o(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),h=o(/\((?:[^()]|<<self>>)*\)/.source,2),f=/@?\b[A-Za-z_]\w*\b/.source,p=i(/<<0>>(?:\s*<<1>>)?/.source,[f,u]),g=i(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[b,p]),v=/\[\s*(?:,\s*)*\]/.source,k=i(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[g,v]),w=i(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[u,h,v]),x=i(/\(<<0>>+(?:,<<0>>+)+\)/.source,[w]),y=i(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[x,g,v]),$={keyword:c,punctuation:/[<>()?,.:[\]]/},F=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,A=/"(?:\\.|[^\\"\r\n])*"/.source,z=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;e.languages.csharp=e.languages.extend("clike",{string:[{pattern:t(/(^|[^$\\])<<0>>/.source,[z]),lookbehind:!0,greedy:!0},{pattern:t(/(^|[^@$\\])<<0>>/.source,[A]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:t(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[g]),lookbehind:!0,inside:$},{pattern:t(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[f,y]),lookbehind:!0,inside:$},{pattern:t(/(\busing\s+)<<0>>(?=\s*=)/.source,[f]),lookbehind:!0},{pattern:t(/(\b<<0>>\s+)<<1>>/.source,[d,p]),lookbehind:!0,inside:$},{pattern:t(/(\bcatch\s*\(\s*)<<0>>/.source,[g]),lookbehind:!0,inside:$},{pattern:t(/(\bwhere\s+)<<0>>/.source,[f]),lookbehind:!0},{pattern:t(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[k]),lookbehind:!0,inside:$},{pattern:t(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[y,m,f]),inside:$}],keyword:c,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),e.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:t(/([(,]\s*)<<0>>(?=\s*:)/.source,[f]),lookbehind:!0,alias:"punctuation"}}),e.languages.insertBefore("csharp","class-name",{namespace:{pattern:t(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[f]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:t(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[h]),lookbehind:!0,alias:"class-name",inside:$},"return-type":{pattern:t(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[y,g]),inside:$,alias:"class-name"},"constructor-invocation":{pattern:t(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[y]),lookbehind:!0,inside:$,alias:"class-name"},"generic-method":{pattern:t(/<<0>>\s*<<1>>(?=\s*\()/.source,[f,u]),inside:{function:t(/^<<0>>/.source,[f]),generic:{pattern:RegExp(u),alias:"class-name",inside:$}}},"type-list":{pattern:t(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[d,p,f,y,c.source,h,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:t(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[p,h]),lookbehind:!0,greedy:!0,inside:e.languages.csharp},keyword:c,"class-name":{pattern:RegExp(y),greedy:!0,inside:$},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var C=A+"|"+F,_=i(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[C]),E=o(i(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[_]),2),S=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,D=i(/<<0>>(?:\s*\(<<1>>*\))?/.source,[g,E]);e.languages.insertBefore("csharp","class-name",{attribute:{pattern:t(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[S,D]),lookbehind:!0,greedy:!0,inside:{target:{pattern:t(/^<<0>>(?=\s*:)/.source,[S]),alias:"keyword"},"attribute-arguments":{pattern:t(/\(<<0>>*\)/.source,[E]),inside:e.languages.csharp},"class-name":{pattern:RegExp(g),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var B=/:[^}\r\n]+/.source,T=o(i(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[_]),2),j=i(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[T,B]),P=o(i(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[C]),2),L=i(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[P,B]);function O(i,o){return{interpolation:{pattern:t(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[i]),lookbehind:!0,inside:{"format-string":{pattern:t(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[o,B]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:e.languages.csharp}}},string:/[\s\S]+/}}e.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:t(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[j]),lookbehind:!0,greedy:!0,inside:O(j,T)},{pattern:t(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[L]),lookbehind:!0,greedy:!0,inside:O(L,P)}],char:{pattern:RegExp(F),greedy:!0}}),e.languages.dotnet=e.languages.cs=e.languages.csharp}(Prism),Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python,Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json,function(e){var i=/[*&][^\s[\]{},]+/,t=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,o="(?:"+t.source+"(?:[ \t]+"+i.source+")?|"+i.source+"(?:[ \t]+"+t.source+")?)",a=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,(function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source})),r=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function n(e,i){i=(i||"").replace(/m/g,"")+"m";var t=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,(function(){return o})).replace(/<<value>>/g,(function(){return e}));return RegExp(t,i)}e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,(function(){return o}))),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,(function(){return o})).replace(/<<key>>/g,(function(){return"(?:"+a+"|"+r+")"}))),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:n(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:n(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:n(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:n(r),lookbehind:!0,greedy:!0},number:{pattern:n(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:t,important:i,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml}(Prism);var li=Object.defineProperty,di=Object.getOwnPropertyDescriptor,ci=(e,i,t,o)=>{for(var a,r=o>1?void 0:o?di(i,t):i,n=e.length-1;n>=0;n--)(a=e[n])&&(r=(o?a(i,t,r):a(r))||r);return o&&r&&li(i,t,r),r};let bi=class extends X{render(){return D`
            <div>
                <button class="button is-small copybutton is-ghost" @click=${this._copyTextToClipboard}>copy</button>
                <pre id="code" class="line-numbers"><code>${de(this.highlightedCode)}<slot></slot></code></pre>
            </div>
        `}fallbackCopyTextToClipboard(e){const i=document.createElement("textarea");i.hidden=!0,i.style.top="0",i.style.left="0",i.style.position="fixed",i.value=e,document.body.appendChild(i),i.select(),document.execCommand("copy"),i.remove()}_copyTextToClipboard(){let e=this.innerHTML;navigator.clipboard?navigator.clipboard.writeText(e||"").then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)})):this.fallbackCopyTextToClipboard(e||"")}connectedCallback(){super.connectedCallback(),setTimeout((()=>{var e;let i=getComputedStyle(this).getPropertyValue("--outside-background-color"),t=getComputedStyle(this).getPropertyValue("--code-text-color");if(""!==i&&""==t){const e=ti(i)?"black":"white";this.style.setProperty("--code-text-color",e)}const o=this.className.match(/language-[a-z]+/),a=o?o[0]:"language-";let r=null==(e=this.shadowRoot)?void 0:e.getElementById("code");if(null==r||r.classList.add(a),null!=r&&""!==i){const e=ti(i)?"black":"white";r.style.color=e}const n='<script type="text/plain">',s="<\/script>";let l=function(e){const i=e.startsWith(n)?e.slice(n.length):e;return i.endsWith(s)?i.slice(0,i.length-s.length):i}(this.innerHTML.replace(/&gt;/gi,">").replace(/&lt;/gi,"<"));this.highlightedCode=function(e,i){return si.exports.languages[i]?si.exports.highlight(e,si.exports.languages[i],i):(console.log("grammar not found"),si.exports.util.encode(e).toString())}(l,a.replace("language-","")),this.requestUpdate()}))}};function mi(e){const i=function(e){const i=Math.min(...e.map((e=>e.depth)));return e.filter((e=>e.depth===i))}(e);return i.map((function(t,o){const a=0|e.findIndex((e=>e==t));let r;const n=i[o+1];r=null==n?e.length:e.findIndex((e=>e==n));const s=e.slice(a+1,r-1+1);return{depth:t.depth,text:t.text,id:t.id,children:0===s.length?[]:mi(s)}}))}bi.styles=[oi,a`
            div {
                background-color: var(--outside-background-color,${ve});
                border: 1px solid #ddd;
                border-left: 3px solid var(--accent-text-color,${ue});
                color: ${ge};
                page-break-inside: avoid;
                font-family: monospace;
                font-size: 15px;
                line-height: 1.6;
                margin-bottom: 1.6em;
                max-width: 100%;
                overflow: auto;
                display: block;
                word-wrap: break-word;
                position: relative
            }

            /* from bulma except: remove border-radius */
            .button {
                -moz-appearance: none;
                -webkit-appearance: none;
                align-items: center;
                border: 1px solid transparent;
                box-shadow: none;
                display: inline-flex;
                font-size: 1rem;
                height: 2.5em;
                justify-content: flex-start;
                line-height: 1.5;
                padding-bottom: calc(0.5em - 1px);
                padding-left: calc(0.75em - 1px);
                padding-right: calc(0.75em - 1px);
                padding-top: calc(0.5em - 1px);
                position: relative;
                vertical-align: top;
            }

            .button.is-small {
                font-size: 0.75rem;
            }

            .button:focus, .button.is-focused {
                border-color: #3273dc;
                color: #363636;
            }
            .button:focus:not(:active), .button.is-focused:not(:active) {
                box-shadow: 0 0 0 0.125em rgba(79, 179, 217, 0.25);
            }
            .button:active, .button.is-active {
                border-color: #4a4a4a;
                color: #363636;
            }

            .button.is-ghost {
                background: none;
                border-color: transparent;
                color: #4FB3D9;
                text-decoration: none;
            }

            .button.is-ghost:hover, .button.is-ghost.is-hovered {
                color: #4FB3D9;
                text-decoration: underline;
            }

            .copybutton {
                position: absolute;
                right: 0;
                top: 0;
                border-left: 1px solid var(--element-text-color,${ve}) !important;
                border-bottom: 1px solid var(--element-text-color,${ve}) !important;
            }

            .copybutton:active {
                box-shadow: -1 1 0 1px var(--element-text-color,${ve}) !important;
            }

            slot {
                display: none
            }
        `],ci([ee()],bi.prototype,"highlightedCode",2),bi=ci([J("nfdi-code")],bi);var ui=Object.defineProperty,hi=Object.getOwnPropertyDescriptor,fi=(e,i,t,o)=>{for(var a,r=o>1?void 0:o?hi(i,t):i,n=e.length-1;n>=0;n--)(a=e[n])&&(r=(o?a(i,t,r):a(r))||r);return o&&r&&ui(i,t,r),r};function pi(e){return 0!==e.children.length?D`
                    <li>
                        <a href=${"#"+e.id}>${e.text}</a>
                        <ul>
                            ${e.children.map(pi)}
                        </ul>   
                    </li>
                `:D`
                <li>
                    <a href=${"#"+e.id}>${de(e.text)}</a>
                </li>
            `}let gi=class extends X{constructor(){super(...arguments),this.foundHeaders=[],this.lowestDepth=1}render(){return D`
            <div class="content" style="margin-bottom: 1rem">
                <ul>
                    ${this.foundHeaders.map((e=>pi(e)))}
                </ul>
            </div>
        `}connectedCallback(){super.connectedCallback(),setTimeout((()=>{document.querySelectorAll("nfdi-h1, nfdi-h2, nfdi-h3, nfdi-h4, nfdi-h5, nfdi-h6").forEach((e=>{const i=e.tagName.replace(/[^0-9]/g,"");this.foundHeaders.push({depth:parseInt(i),text:e.innerHTML.replace("&amp;","&"),id:e.id,children:[]})})),this.foundHeaders=mi(this.foundHeaders),this.requestUpdate()}))}};gi.styles=[ke,a`
            li>ul {
                margin: 0.1em 1em !important
            }

            li a {
                color: var(--link-color, ${ue})
            }

            li a:hover {
                color:var(--link-hover-color, ${ge})
            }

            :host {
                color: var(--element-text-color, ${ge}) !important
            }
        `],fi([ee({type:Array})],gi.prototype,"foundHeaders",2),fi([ee({type:Number})],gi.prototype,"lowestDepth",2),gi=fi([J("nfdi-toc")],gi);var vi=Object.defineProperty,ki=Object.getOwnPropertyDescriptor,wi=(e,i,t,o)=>{for(var a,r=o>1?void 0:o?ki(i,t):i,n=e.length-1;n>=0;n--)(a=e[n])&&(r=(o?a(i,t,r):a(r))||r);return o&&r&&vi(i,t,r),r};let xi=class extends X{constructor(){super(...arguments),this.isActive=!1}render(){return D`
            <div id="slot-container">
                <slot></slot>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" width=1rem height=1rem class="${this.isActive?"myIcon isActive":"myIcon"}">
                    <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/>
                </svg>
            </div>
            `}};xi.styles=[ke,a`
            .myIcon {
                position: absolute;
                right: -1.5rem;
                top: 0.5rem;
                display: inline-block;
                font-style: normal;
                font-variant: normal;
                text-rendering: auto;
                -webkit-font-smoothing: antialiased;
                color: var(--accent-text-color, ${ge}) !important;
                transition: transform 0.1s ease-in-out;
            }

            .myIcon.isActive { 
                transform: rotate(90deg);
            }

            ::slotted(*) {
                display: inline-block
            }

            #slot-container {
                position: relative;
                width: fit-content;
                text-align: left;
            }
        `],wi([ee({type:Boolean})],xi.prototype,"isActive",2),xi=wi([J("nfdi-sidebar-title")],xi);let yi=class extends X{constructor(){super(...arguments),this.isActive=!1}render(){return D`
            <div class="container">
                <button @click=${this._toggleActive}><nfdi-sidebar-title ?isactive=${this.isActive}><slot name="title"></slot></nfdi-sidebar-title></button>
                <div class="${this.isActive?"inner-wrapper is-active":"inner-wrapper"}">
                    <slot name="inner"></slot>
                </div>
            </div>
        `}_toggleActive(){this.isActive=!this.isActive}connectedCallback(){super.connectedCallback(),setTimeout((()=>{const e=getComputedStyle(this).getPropertyValue("--sidebar-background-color"),i=getComputedStyle(this).getPropertyValue("--sidebar-text-color");if(""!==e&&""==i){const i=ti(e)?"black":"white";this.style.setProperty("--sidebar-text-color",i)}const t=window.location.pathname,o=Array.from(this.children);function a(e){const i=e.getAttribute("href");return new URL(i,window.location.href)}const r=o.filter((function(e){return e.hasAttribute("slot")&&"title"!=e.getAttribute("slot")&&e.hasAttribute("href")})).filter((function(e){const i=a(e);return i.origin==window.location.origin&&i.pathname==t&&""!=i.hash}));function n(e){return r.map((e=>a(e).hash)).includes("#"+e.id)}const s=Array.from(document.querySelectorAll("nfdi-body nfdi-h1, nfdi-body nfdi-h2, nfdi-body nfdi-h3"));r.length>0&&s.length>0&&window.addEventListener("scroll",(()=>{let e="";s.filter(n).forEach((i=>{const t=i,o=t.offsetTop;scrollY+200>=o&&(e="#"+t.id)})),r.forEach((i=>{i.classList.remove("active-page-scroll");const t=i.getAttribute("href");new URL(t,window.location.href).hash==e&&i.classList.add("active-page-scroll")}))}));const l=o.map((e=>{if(e.hasAttribute("slot")&&"title"===e.getAttribute("slot"))return e.innerHTML=e.innerHTML,e;{let i=e.hasAttribute("href")?e.getAttribute("href"):"",o=`href="${i}" `;return i==t&&e.classList.add("active-sub-page"),e.innerHTML=`<a ${o}style="color: unset !important">${e.innerHTML}</a>`,e}}));this.replaceChildren(...l),this.requestUpdate()}))}};yi.styles=[ke,a`

            :host {
                min-width: 0;
            }
            
            button {
                width: 90%;
                padding: 0rem;
                border: none;
                background: none;
                cursor: pointer;
            }

            button ::slotted(*) {
                font-weight: bold;
                color: var(--accent-text-color, ${ge}) !important;
                font-size: 1.4rem;
                margin-bottom: 0.2rem;
            }

            button:hover ::slotted(h1,h2,h3) {
                text-decoration: underline !important;
            }
            
            .inner-wrapper {
                margin-left: -2px;
                display: none
            }

            .inner-wrapper ::slotted(*:nth-child(n+3)) {
                margin-top: 0.3rem !important
            }
            
            .inner-wrapper ::slotted(*:hover) {
                text-decoration: underline !important;
            }
            
            .inner-wrapper ::slotted(h1) {
                font-size: 0.9rem !important;
                color: var(--sidebar-text-color, ${ge}) !important;
                color: ${ge};
                padding: 2px !important;
                margin: 0 !important;
                cursor: pointer;
            }

            .inner-wrapper ::slotted(h2) {
                font-size: 0.9rem !important;
                color: var(--sidebar-text-color, ${ge}) !important;
                padding: 2px !important;
                margin: 0 0 0 1rem !important;
                cursor: pointer;
            }

            .inner-wrapper ::slotted(h3) {
                font-size: 0.9rem !important;
                color: var(--sidebar-text-color, ${ge}) !important;
                padding: 2px !important;
                margin: 0 0 0 2rem !important;
                cursor: pointer;
            }

            ::slotted(.active-sub-page) {
                font-weight: bold !important;
                text-decoration: underline !important;
                /* border-radius: 2px !important; */
                /* background-color: lightgrey; */
                /* border-radius: 0; */
            }

            ::slotted(.active-page-scroll) {
                font-weight: bold !important;
                text-decoration: underline !important;
                /* border-radius: 2px !important; */
                /* background-color: lightgrey; */
                /* border-radius: 0; */
            }

            .is-active { 
                display: block !important
            }

            .container {
                padding: 3px
            }

        `],wi([ee({type:Boolean})],yi.prototype,"isActive",2),yi=wi([J("nfdi-sidebar-element")],yi);
