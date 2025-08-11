(()=>{var qt=Object.create;var F=Object.defineProperty;var Dt=Object.getOwnPropertyDescriptor;var pt=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),U=i=>{throw TypeError(i)};var dt=(i,t,e)=>t in i?F(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var at=(i,t)=>F(i,"name",{value:t,configurable:!0});var ut=i=>[,,,qt(i?.[pt("metadata")]??null)],$t=["class","method","getter","setter","accessor","field","value","get","set"],P=i=>i!==void 0&&typeof i!="function"?U("Function expected"):i,zt=(i,t,e,s,r)=>({kind:$t[i],name:t,metadata:s,addInitializer:o=>e._?U("Already initialized"):r.push(P(o||null))}),Bt=(i,t)=>dt(t,pt("metadata"),i[3]),ft=(i,t,e,s)=>{for(var r=0,o=i[t>>1],n=o&&o.length;r<n;r++)t&1?o[r].call(e):s=o[r].call(e,s);return s},mt=(i,t,e,s,r,o)=>{var n,l,a,c,p,h=t&7,$=!!(t&8),d=!!(t&16),A=h>3?i.length+1:h?$?1:2:0,nt=$t[h+5],ht=h>3&&(i[A-1]=[]),kt=i[A]||(i[A]=[]),m=h&&(!d&&!$&&(r=r.prototype),h<5&&(h>3||!d)&&Dt(h<4?r:{get[e](){return lt(this,o)},set[e](f){return ct(this,o,f)}},e));h?d&&h<4&&at(o,(h>2?"set ":h>1?"get ":"")+e):at(r,e);for(var W=s.length-1;W>=0;W--)c=zt(h,e,a={},i[3],kt),h&&(c.static=$,c.private=d,p=c.access={has:d?f=>It(r,f):f=>e in f},h^3&&(p.get=d?f=>(h^1?lt:Vt)(f,r,h^4?o:m.get):f=>f[e]),h>2&&(p.set=d?(f,K)=>ct(f,r,K,h^4?o:m.set):(f,K)=>f[e]=K)),l=(0,s[W])(h?h<4?d?o:m[nt]:h>4?void 0:{get:m.get,set:m.set}:r,c),a._=1,h^4||l===void 0?P(l)&&(h>4?ht.unshift(l):h?d?o=l:m[nt]=l:r=l):typeof l!="object"||l===null?U("Object expected"):(P(n=l.get)&&(m.get=n),P(n=l.set)&&(m.set=n),P(n=l.init)&&ht.unshift(n));return h||Bt(i,r),m&&F(r,e,m),d?h^4?o:m:r},_t=(i,t,e)=>dt(i,typeof t!="symbol"?t+"":t,e),Z=(i,t,e)=>t.has(i)||U("Cannot "+e),It=(i,t)=>Object(t)!==t?U('Cannot use the "in" operator on this value'):i.has(t),lt=(i,t,e)=>(Z(i,t,"read from private field"),e?e.call(i):t.get(i));var ct=(i,t,e,s)=>(Z(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e),Vt=(i,t,e)=>(Z(i,t,"access private method"),e);var q=globalThis,z=q.ShadowRoot&&(q.ShadyCSS===void 0||q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gt=Symbol(),At=new WeakMap,D=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==gt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(z&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=At.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&At.set(e,t))}return t}toString(){return this.cssText}},yt=i=>new D(typeof i=="string"?i:i+"",void 0,gt);var vt=(i,t)=>{if(z)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=q.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},J=z?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return yt(e)})(i):i;var{is:Wt,defineProperty:Kt,getOwnPropertyDescriptor:Ft,getOwnPropertyNames:Zt,getOwnPropertySymbols:Jt,getPrototypeOf:Gt}=Object,g=globalThis,St=g.trustedTypes,Qt=St?St.emptyScript:"",Xt=g.reactiveElementPolyfillSupport,O=(i,t)=>i,B={toAttribute(i,t){switch(t){case Boolean:i=i?Qt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},G=(i,t)=>!Wt(i,t),Et={attribute:!0,type:String,converter:B,reflect:!1,useDefault:!1,hasChanged:G};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);var _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Et){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&Kt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){let{get:r,set:o}=Ft(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:r,set(n){let l=r?.call(this);o?.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Et}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;let t=Gt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){let e=this.properties,s=[...Zt(e),...Jt(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(J(r))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let o=(s.converter?.toAttribute!==void 0?s.converter:B).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let o=s.getPropertyOptions(r),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:B;this._$Em=r;let l=n.fromAttribute(e,o.type);this[r]=l??this._$Ej?.get(r)??l,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){let r=this.constructor,o=this[t];if(s??(s=r.getPropertyOptions(t)),!((s.hasChanged??G)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:o},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,o]of s){let{wrapped:n}=o,l=this[r];n!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,o,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[O("elementProperties")]=new Map,_[O("finalized")]=new Map,Xt?.({ReactiveElement:_}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.1.1");var T=globalThis,I=T.trustedTypes,bt=I?I.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ot="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,Rt="?"+y,Yt=`<${Rt}>`,b=document,H=()=>b.createComment(""),N=i=>i===null||typeof i!="object"&&typeof i!="function",it=Array.isArray,te=i=>it(i)||typeof i?.[Symbol.iterator]=="function",Q=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xt=/-->/g,Ct=/>/g,S=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wt=/'/g,Pt=/"/g,Tt=/^(?:script|style|textarea|title)$/i,rt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),Ht=rt(1),pe=rt(2),de=rt(3),x=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Ut=new WeakMap,E=b.createTreeWalker(b,129);function Nt(i,t){if(!it(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return bt!==void 0?bt.createHTML(t):t}var ee=(i,t)=>{let e=i.length-1,s=[],r,o=t===2?"<svg>":t===3?"<math>":"",n=R;for(let l=0;l<e;l++){let a=i[l],c,p,h=-1,$=0;for(;$<a.length&&(n.lastIndex=$,p=n.exec(a),p!==null);)$=n.lastIndex,n===R?p[1]==="!--"?n=xt:p[1]!==void 0?n=Ct:p[2]!==void 0?(Tt.test(p[2])&&(r=RegExp("</"+p[2],"g")),n=S):p[3]!==void 0&&(n=S):n===S?p[0]===">"?(n=r??R,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?S:p[3]==='"'?Pt:wt):n===Pt||n===wt?n=S:n===xt||n===Ct?n=R:(n=S,r=void 0);let d=n===S&&i[l+1].startsWith("/>")?" ":"";o+=n===R?a+Yt:h>=0?(s.push(c),a.slice(0,h)+Ot+a.slice(h)+y+d):a+y+(h===-2?l:d)}return[Nt(i,o+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},M=class i{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let o=0,n=0,l=t.length-1,a=this.parts,[c,p]=ee(t,e);if(this.el=i.createElement(c,s),E.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=E.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(let h of r.getAttributeNames())if(h.endsWith(Ot)){let $=p[n++],d=r.getAttribute(h).split(y),A=/([.?@])?(.*)/.exec($);a.push({type:1,index:o,name:A[2],strings:d,ctor:A[1]==="."?Y:A[1]==="?"?tt:A[1]==="@"?et:w}),r.removeAttribute(h)}else h.startsWith(y)&&(a.push({type:6,index:o}),r.removeAttribute(h));if(Tt.test(r.tagName)){let h=r.textContent.split(y),$=h.length-1;if($>0){r.textContent=I?I.emptyScript:"";for(let d=0;d<$;d++)r.append(h[d],H()),E.nextNode(),a.push({type:2,index:++o});r.append(h[$],H())}}}else if(r.nodeType===8)if(r.data===Rt)a.push({type:2,index:o});else{let h=-1;for(;(h=r.data.indexOf(y,h+1))!==-1;)a.push({type:7,index:o}),h+=y.length-1}o++}}static createElement(t,e){let s=b.createElement("template");return s.innerHTML=t,s}};function C(i,t,e=i,s){if(t===x)return t;let r=s!==void 0?e._$Co?.[s]:e._$Cl,o=N(t)?void 0:t._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),o===void 0?r=void 0:(r=new o(i),r._$AT(i,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=r:e._$Cl=r),r!==void 0&&(t=C(i,r._$AS(i,t.values),r,s)),t}var X=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,r=(t?.creationScope??b).importNode(e,!0);E.currentNode=r;let o=E.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new j(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new st(o,this,t)),this._$AV.push(c),a=s[++l]}n!==a?.index&&(o=E.nextNode(),n++)}return E.currentNode=b,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},j=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),N(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):te(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=M.createElement(Nt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(e);else{let o=new X(r,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=Ut.get(t.strings);return e===void 0&&Ut.set(t.strings,e=new M(t)),e}k(t){it(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,r=0;for(let o of t)r===e.length?e.push(s=new i(this.O(H()),this.O(H()),this,this.options)):s=e[r],s._$AI(o),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},w=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}_$AI(t,e=this,s,r){let o=this.strings,n=!1;if(o===void 0)t=C(this,t,e,0),n=!N(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else{let l=t,a,c;for(t=o[0],a=0;a<o.length-1;a++)c=C(this,l[s+a],e,a),c===x&&(c=this._$AH[a]),n||(n=!N(c)||c!==this._$AH[a]),c===u?t=u:t!==u&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!r&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Y=class extends w{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}},tt=class extends w{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}},et=class extends w{constructor(t,e,s,r,o){super(t,e,s,r,o),this.type=5}_$AI(t,e=this){if((t=C(this,t,e,0)??u)===x)return;let s=this._$AH,r=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==u&&(s===u||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},st=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}};var se=T.litHtmlPolyfillSupport;se?.(M,j),(T.litHtmlVersions??(T.litHtmlVersions=[])).push("3.3.1");var Mt=(i,t,e)=>{let s=e?.renderBefore??t,r=s._$litPart$;if(r===void 0){let o=e?.renderBefore??null;s._$litPart$=r=new j(t.insertBefore(H(),o),o,void 0,e??{})}return r._$AI(i),r};var L=globalThis,v=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Mt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return x}};v._$litElement$=!0,v.finalized=!0,L.litElementHydrateSupport?.({LitElement:v});var ie=L.litElementPolyfillSupport;ie?.({LitElement:v});(L.litElementVersions??(L.litElementVersions=[])).push("4.2.1");var jt=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};var Lt,ot,re;Lt=[jt("impersonation-modal")];var k=class extends(re=v){constructor(){super(...arguments);_t(this,"version","STARTING")}render(){return Ht`
      <p>Welcome to the Lit tutorial!</p>
      <p>This is the ${this.version} code.</p>
      <uui-button>Click me</uui-button>
    `}};ot=ut(re),k=mt(ot,0,"MyElement",Lt,k),ft(ot,1,k);})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=main.js.map
