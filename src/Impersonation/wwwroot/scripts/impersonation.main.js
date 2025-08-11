(()=>{var ch=Object.defineProperty;var hh=Object.getOwnPropertyDescriptor;var gt=(t,e,i,o)=>{for(var r=o>1?void 0:o?hh(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&ch(e,i,r),r};var wo=globalThis,ko=wo.ShadowRoot&&(wo.ShadyCSS===void 0||wo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,nn=Symbol(),il=new WeakMap,xr=class{constructor(e,i,o){if(this._$cssResult$=!0,o!==nn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o,i=this.t;if(ko&&e===void 0){let o=i!==void 0&&i.length===1;o&&(e=il.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&il.set(i,e))}return e}toString(){return this.cssText}},St=t=>new xr(typeof t=="string"?t:t+"",void 0,nn),c=(t,...e)=>{let i=t.length===1?t[0]:e.reduce((o,r,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1],t[0]);return new xr(i,t,nn)},rl=(t,e)=>{if(ko)t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(let i of e){let o=document.createElement("style"),r=wo.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=i.cssText,t.appendChild(o)}},an=ko?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(let o of e.cssRules)i+=o.cssText;return St(i)})(t):t;var{is:dh,defineProperty:ph,getOwnPropertyDescriptor:fh,getOwnPropertyNames:mh,getOwnPropertySymbols:vh,getPrototypeOf:bh}=Object,Ee=globalThis,ol=Ee.trustedTypes,gh=ol?ol.emptyScript:"",_h=Ee.reactiveElementPolyfillSupport,wr=(t,e)=>t,kr={toAttribute(t,e){switch(e){case Boolean:t=t?gh:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},Eo=(t,e)=>!dh(t,e),sl={attribute:!0,type:String,converter:kr,reflect:!1,useDefault:!1,hasChanged:Eo};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ee.litPropertyMetadata??(Ee.litPropertyMetadata=new WeakMap);var oe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=sl){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(e,i),!i.noAccessor){let o=Symbol(),r=this.getPropertyDescriptor(e,o,i);r!==void 0&&ph(this.prototype,e,r)}}static getPropertyDescriptor(e,i,o){let{get:r,set:s}=fh(this.prototype,e)??{get(){return this[i]},set(n){this[i]=n}};return{get:r,set(n){let u=r?.call(this);s?.call(this,n),this.requestUpdate(e,u,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??sl}static _$Ei(){if(this.hasOwnProperty(wr("elementProperties")))return;let e=bh(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(wr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(wr("properties"))){let i=this.properties,o=[...mh(i),...vh(i)];for(let r of o)this.createProperty(r,i[r])}let e=this[Symbol.metadata];if(e!==null){let i=litPropertyMetadata.get(e);if(i!==void 0)for(let[o,r]of i)this.elementProperties.set(o,r)}this._$Eh=new Map;for(let[i,o]of this.elementProperties){let r=this._$Eu(i,o);r!==void 0&&this._$Eh.set(r,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let i=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let r of o)i.unshift(an(r))}else e!==void 0&&i.push(an(e));return i}static _$Eu(e,i){let o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,i=this.constructor.elementProperties;for(let o of i.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return rl(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,i,o){this._$AK(e,o)}_$ET(e,i){let o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(r!==void 0&&o.reflect===!0){let s=(o.converter?.toAttribute!==void 0?o.converter:kr).toAttribute(i,o.type);this._$Em=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,i){let o=this.constructor,r=o._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let s=o.getPropertyOptions(r),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:kr;this._$Em=r;let u=n.fromAttribute(i,s.type);this[r]=u??this._$Ej?.get(r)??u,this._$Em=null}}requestUpdate(e,i,o){if(e!==void 0){let r=this.constructor,s=this[e];if(o??(o=r.getPropertyOptions(e)),!((o.hasChanged??Eo)(s,i)||o.useDefault&&o.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,o))))return;this.C(e,i,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,i,{useDefault:o,reflect:r,wrapped:s},n){o&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??i??this[e]),s!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(i=void 0),this._$AL.set(e,i)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[r,s]of o){let{wrapped:n}=s,u=this[r];n!==!0||this._$AL.has(r)||u===void 0||this.C(r,void 0,s,u)}}let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(i)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(i)}willUpdate(e){}_$AE(e){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(i=>this._$ET(i,this[i]))),this._$EM()}updated(e){}firstUpdated(e){}};oe.elementStyles=[],oe.shadowRootOptions={mode:"open"},oe[wr("elementProperties")]=new Map,oe[wr("finalized")]=new Map,_h?.({ReactiveElement:oe}),(Ee.reactiveElementVersions??(Ee.reactiveElementVersions=[])).push("2.1.1");var Cr=globalThis,Co=Cr.trustedTypes,nl=Co?Co.createPolicy("lit-html",{createHTML:t=>t}):void 0,un="$lit$",se=`lit$${Math.random().toFixed(9).slice(2)}$`,cn="?"+se,yh=`<${cn}>`,Je=document,$r=()=>Je.createComment(""),Pr=t=>t===null||typeof t!="object"&&typeof t!="function",hn=Array.isArray,dl=t=>hn(t)||typeof t?.[Symbol.iterator]=="function",ln=`[ 	
\f\r]`,Er=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,al=/-->/g,ll=/>/g,Ze=RegExp(`>|${ln}(?:([^\\s"'>=/]+)(${ln}*=${ln}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ul=/'/g,cl=/"/g,pl=/^(?:script|style|textarea|title)$/i,dn=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),l=dn(1),b=dn(2),fl=dn(3),W=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),hl=new WeakMap,Qe=Je.createTreeWalker(Je,129);function ml(t,e){if(!hn(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return nl!==void 0?nl.createHTML(e):e}var vl=(t,e)=>{let i=t.length-1,o=[],r,s=e===2?"<svg>":e===3?"<math>":"",n=Er;for(let u=0;u<i;u++){let p=t[u],m,_,f=-1,P=0;for(;P<p.length&&(n.lastIndex=P,_=n.exec(p),_!==null);)P=n.lastIndex,n===Er?_[1]==="!--"?n=al:_[1]!==void 0?n=ll:_[2]!==void 0?(pl.test(_[2])&&(r=RegExp("</"+_[2],"g")),n=Ze):_[3]!==void 0&&(n=Ze):n===Ze?_[0]===">"?(n=r??Er,f=-1):_[1]===void 0?f=-2:(f=n.lastIndex-_[2].length,m=_[1],n=_[3]===void 0?Ze:_[3]==='"'?cl:ul):n===cl||n===ul?n=Ze:n===al||n===ll?n=Er:(n=Ze,r=void 0);let g=n===Ze&&t[u+1].startsWith("/>")?" ":"";s+=n===Er?p+yh:f>=0?(o.push(m),p.slice(0,f)+un+p.slice(f)+se+g):p+se+(f===-2?u:g)}return[ml(t,s+(t[i]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]},Sr=class t{constructor({strings:e,_$litType$:i},o){let r;this.parts=[];let s=0,n=0,u=e.length-1,p=this.parts,[m,_]=vl(e,i);if(this.el=t.createElement(m,o),Qe.currentNode=this.el.content,i===2||i===3){let f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(r=Qe.nextNode())!==null&&p.length<u;){if(r.nodeType===1){if(r.hasAttributes())for(let f of r.getAttributeNames())if(f.endsWith(un)){let P=_[n++],g=r.getAttribute(f).split(se),$=/([.?@])?(.*)/.exec(P);p.push({type:1,index:s,name:$[2],strings:g,ctor:$[1]==="."?Po:$[1]==="?"?So:$[1]==="@"?Oo:ei}),r.removeAttribute(f)}else f.startsWith(se)&&(p.push({type:6,index:s}),r.removeAttribute(f));if(pl.test(r.tagName)){let f=r.textContent.split(se),P=f.length-1;if(P>0){r.textContent=Co?Co.emptyScript:"";for(let g=0;g<P;g++)r.append(f[g],$r()),Qe.nextNode(),p.push({type:2,index:++s});r.append(f[P],$r())}}}else if(r.nodeType===8)if(r.data===cn)p.push({type:2,index:s});else{let f=-1;for(;(f=r.data.indexOf(se,f+1))!==-1;)p.push({type:7,index:s}),f+=se.length-1}s++}}static createElement(e,i){let o=Je.createElement("template");return o.innerHTML=e,o}};function ti(t,e,i=t,o){if(e===W)return e;let r=o!==void 0?i._$Co?.[o]:i._$Cl,s=Pr(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(t),r._$AT(t,i,o)),o!==void 0?(i._$Co??(i._$Co=[]))[o]=r:i._$Cl=r),r!==void 0&&(e=ti(t,r._$AS(t,e.values),r,o)),e}var $o=class{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:i},parts:o}=this._$AD,r=(e?.creationScope??Je).importNode(i,!0);Qe.currentNode=r;let s=Qe.nextNode(),n=0,u=0,p=o[0];for(;p!==void 0;){if(n===p.index){let m;p.type===2?m=new Ei(s,s.nextSibling,this,e):p.type===1?m=new p.ctor(s,p.name,p.strings,this,e):p.type===6&&(m=new Ao(s,this,e)),this._$AV.push(m),p=o[++u]}n!==p?.index&&(s=Qe.nextNode(),n++)}return Qe.currentNode=Je,r}p(e){let i=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,i),i+=o.strings.length-2):o._$AI(e[i])),i++}},Ei=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,i,o,r){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,i=this._$AM;return i!==void 0&&e?.nodeType===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=ti(this,e,i),Pr(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==W&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):dl(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==w&&Pr(this._$AH)?this._$AA.nextSibling.data=e:this.T(Je.createTextNode(e)),this._$AH=e}$(e){let{values:i,_$litType$:o}=e,r=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Sr.createElement(ml(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(i);else{let s=new $o(r,this),n=s.u(this.options);s.p(i),this.T(n),this._$AH=s}}_$AC(e){let i=hl.get(e.strings);return i===void 0&&hl.set(e.strings,i=new Sr(e)),i}k(e){hn(this._$AH)||(this._$AH=[],this._$AR());let i=this._$AH,o,r=0;for(let s of e)r===i.length?i.push(o=new t(this.O($r()),this.O($r()),this,this.options)):o=i[r],o._$AI(s),r++;r<i.length&&(this._$AR(o&&o._$AB.nextSibling,r),i.length=r)}_$AR(e=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);e!==this._$AB;){let o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},ei=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,o,r,s){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=i,this._$AM=r,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=w}_$AI(e,i=this,o,r){let s=this.strings,n=!1;if(s===void 0)e=ti(this,e,i,0),n=!Pr(e)||e!==this._$AH&&e!==W,n&&(this._$AH=e);else{let u=e,p,m;for(e=s[0],p=0;p<s.length-1;p++)m=ti(this,u[o+p],i,p),m===W&&(m=this._$AH[p]),n||(n=!Pr(m)||m!==this._$AH[p]),m===w?e=w:e!==w&&(e+=(m??"")+s[p+1]),this._$AH[p]=m}n&&!r&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Po=class extends ei{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}},So=class extends ei{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==w)}},Oo=class extends ei{constructor(e,i,o,r,s){super(e,i,o,r,s),this.type=5}_$AI(e,i=this){if((e=ti(this,e,i,0)??w)===W)return;let o=this._$AH,r=e===w&&o!==w||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==w&&(o===w||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ao=class{constructor(e,i,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){ti(this,e)}},bl={M:un,P:se,A:cn,C:1,L:vl,R:$o,D:dl,V:ti,I:Ei,H:ei,N:So,U:Oo,B:Po,F:Ao},xh=Cr.litHtmlPolyfillSupport;xh?.(Sr,Ei),(Cr.litHtmlVersions??(Cr.litHtmlVersions=[])).push("3.3.1");var gl=(t,e,i)=>{let o=i?.renderBefore??e,r=o._$litPart$;if(r===void 0){let s=i?.renderBefore??null;o._$litPart$=r=new Ei(e.insertBefore($r(),s),s,void 0,i??{})}return r._$AI(t),r};var Or=globalThis,d=class extends oe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;let e=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=e.firstChild),e}update(e){let i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=gl(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};d._$litElement$=!0,d.finalized=!0,Or.litElementHydrateSupport?.({LitElement:d});var wh=Or.litElementPolyfillSupport;wh?.({LitElement:d});(Or.litElementVersions??(Or.litElementVersions=[])).push("4.2.1");var kh=`.uui-h1,
.uui-h2,
.uui-h3,
.uui-h4,
.uui-h5,
.uui-a,
.uui-p,
.uui-p-lead,
.uui-small,
.uui-quoteblock,
.uui-ul,
.uui-ol,
.uui-text {
  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 21px;
  -webkit-font-smoothing: antialiased;
}

.uui-text h1,
.uui-h1.uui-h1 {
  font-size: var(--uui-type-h1-size,60px);
  line-height: var(--uui-size-layout-4,66px);
  font-weight: 300;
  margin-left: -5px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-text p + h1,
.uui-text p + .uui-h1 {
  margin-top: var(--uui-size-layout-4,66px);
}

.uui-text h1.--no-top-margin,
.uui-text h1:first-child,
.uui-h1.--no-top-margin,
.uui-h1:first-child {
  margin-top: 0;
}

.uui-text h2,
.uui-h2.uui-h2 {
  font-size: var(--uui-type-h2-size,42px);
  line-height: var(--uui-size-layout-3,42px);
  font-weight: 300;
  margin-left: -3px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-text p + h2,
.uui-text p + .uui-h2 {
  margin-top: var(--uui-size-layout-3,42px);
}

.uui-text h2.--no-top-margin,
.uui-text h2:first-child,
.uui-h2.--no-top-margin,
.uui-h2:first-child {
  margin-top: 0;
}

.uui-text h3,
.uui-h3.uui-h3 {
  font-size: var(--uui-type-h3-size,30px);
  line-height: var(--uui-size-large);
  font-weight: 300;
  margin-left: -2px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-text h3.--no-top-margin,
.uui-text h3:first-child,
.uui-h3.--no-top-margin,
.uui-h3:first-child {
  margin-top: 0;
}

.uui-text h4,
.uui-h4.uui-h4 {
  font-size: var(--uui-type-h4-size,21px);
  line-height: 21px;
  font-weight: 400;
  margin-left: -1px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-text h4.--no-top-margin,
.uui-text h4:first-child,
.uui-h4.--no-top-margin,
.uui-h4:first-child {
  margin-top: 0;
}

.uui-text h5,
.uui-h5.uui-h5 {
  font-size: var(--uui-type-h5-size,14px);
  line-height: inherit;
  font-weight: 700;
  margin-left: 0;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: 0;
}

.uui-text h5.--no-top-margin,
.uui-text h5:first-child,
.uui-h5.--no-top-margin,
.uui-h5:first-child {
  margin-top: 0;
}

.uui-p,
.uui-text p {
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-p-lead,
.uui-text p.uui-lead {
  font-size: var(--uui-size-6,18px);
  line-height: var(--uui-size-8,24px);
}

.uui-a,
.uui-text a {
  color: var(--uui-color-interactive,#1b264f);
}

.uui-a:link,
.uui-a:active .uui-text a:link,
.uui-text a:active {
  color: var(--uui-color-interactive,#1b264f);
}

.uui-a:hover,
.uui-text a:hover {
  color: var(--uui-color-interactive-emphasis,#3544b1);
}

.uui-small,
.uui-text small {
  display: inline-block;
  font-size: var(--uui-type-small-size,12px);
  line-height: 18px;
}

.uui-quoteblock,
.uui-text blockquote {
  float: right;
  font-size: 14px;
  line-height: inherit;
  font-weight: 700;
  font-style: italic;
  margin-top: 0;
  margin-bottom: var(--uui-size-layout-1,24px);
  margin-right: -0.035em;
  max-width: 16em;
  quotes: '\u201C' '\u201D' '\u2018' '\u2019';
}

.uui-quoteblock:before,
.uui-text blockquote:before {
  content: open-quote;
  margin-left: -0.4em;
  margin-right: 0.08em;
  vertical-align: bottom;
  font-weight: 400;
  font-size: 2em;
}

.uui-quoteblock:after,
.uui-text blockquote:after {
  content: close-quote;
  margin-left: 0.04em;
  margin-right: -0.4em;
  vertical-align: bottom;
  font-weight: 400;
  font-size: 2em;
  margin-bottom: -2px;
  display: inline-block;
}

.uui-ul,
.uui-text ul {
  list-style-type: square;
  padding-left: var(--uui-size-layout-1,24px);
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-ol,
.uui-text ol {
  padding-left: var(--uui-size-layout-1,24px);
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}
`,Ft=St(kh);var Gt=t=>(e,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};var Eh={attribute:!0,type:String,converter:kr,reflect:!1,hasChanged:Eo},Ch=(t=Eh,e,i)=>{let{kind:o,metadata:r}=i,s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),o==="setter"&&((t=Object.create(t)).wrapped=!0),s.set(i.name,t),o==="accessor"){let{name:n}=i;return{set(u){let p=e.get.call(this);e.set.call(this,u),this.requestUpdate(n,p,t)},init(u){return u!==void 0&&this.C(n,void 0,t,u),u}}}if(o==="setter"){let{name:n}=i;return function(u){let p=this[n];e.call(this,u),this.requestUpdate(n,p,t)}}throw Error("Unsupported decorator location: "+o)};function a(t){return(e,i)=>typeof i=="object"?Ch(t,e,i):((o,r,s)=>{let n=r.hasOwnProperty(s);return r.constructor.createProperty(s,o),n?Object.getOwnPropertyDescriptor(r,s):void 0})(t,e,i)}function v(t){return a({...t,state:!0,attribute:!1})}var ne=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);function E(t,e){return(i,o,r)=>{let s=n=>n.renderRoot?.querySelector(t)??null;if(e){let{get:n,set:u}=typeof o=="object"?i:r??(()=>{let p=Symbol();return{get(){return this[p]},set(m){this[p]=m}}})();return ne(i,o,{get(){let p=n.call(this);return p===void 0&&(p=s(this),(p!==null||this.hasUpdated)&&u.call(this,p)),p}})}return ne(i,o,{get(){return s(this)}})}}var $h;function _l(t){return(e,i)=>ne(e,i,{get(){return(this.renderRoot??$h??($h=document.createDocumentFragment())).querySelectorAll(t)}})}function dt(t){return(e,i)=>{let{slot:o,selector:r}=t??{},s="slot"+(o?`[name=${o}]`:":not([name])");return ne(e,i,{get(){let n=this.renderRoot?.querySelector(s),u=n?.assignedElements(t)??[];return r===void 0?u:u.filter(p=>p.matches(r))}})}}var yb=c`
  @keyframes uui-blink {
    0%,
    100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }
`,xb=St("uui-blink 0.9s infinite both"),wb=c`
  @keyframes pulse {
    0% {
      -webkit-transform: translate(-50%, -50%) scale(0.2);
      transform: translate(-50%, -50%) scale(0.2);
      opacity: 0.9;
    }
    80% {
      -webkit-transform: translate(-50%, -50%) scale(1.2);
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0;
    }
    100% {
      -webkit-transform: translate(-50%, -50%) scale(2.2);
      transform: translate(-50%, -50%) scale(2.2);
      opacity: 0;
    }
  }
`,kb=St("pulse 0.8s ease-in-out infinite both"),Eb=c`
  @keyframes uui-horizontal-shake {
    10%,
    90% {
      transform: translateX(-1px);
    }

    20%,
    80% {
      transform: translateX(1px);
    }

    30%,
    50%,
    70% {
      transform: translateX(-2px);
    }

    40%,
    60% {
      transform: translateX(2px);
    }
  }
`,Cb=St("uui-horizontal-shake 600ms ease backwards"),Io=class extends Event{constructor(e,i={}){super(e,{...i}),this.detail=i.detail||{}}},Mo=class extends Io{constructor(e,i={}){super(e,{bubbles:!0,...i})}};Mo.VALID="valid";Mo.INVALID="invalid";var Lo=class extends Io{constructor(e,i={}){super(e,{bubbles:!0,cancelable:!0,...i})}};Lo.SELECTED="selected";Lo.DESELECTED="deselected";function h(t,e){return i=>{if(t.indexOf("-")>0===!1){console.error(`${t} is not a valid custom element name. A custom element name should consist of at least two words separated by a hyphen.`);return}window.customElements.get(t)||window.customElements.define(t,i,e)}}var Ph=Object.getOwnPropertyDescriptor,Sh=(t,e,i,o)=>{for(var r=o>1?void 0:o?Ph(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(r)||r);return r},Ci=class extends d{render(){return l`<slot></slot>`}};Ci.styles=[c`
      :host {
        display: inline-flex;
        align-items: stretch;
      }

      ::slotted(*) {
        --uui-button-border-radius: 0;
        flex-grow: 1;
      }

      ::slotted([look='outline']:not(:first-child)) {
        --uui-button-merge-border-left: 1;
      }
      ::slotted([look='placeholder']:not(:first-child)) {
        --uui-button-merge-border-left: 1;
      }

      ::slotted(*:first-child) {
        --uui-button-border-radius: var(--uui-border-radius,3px) 0 0
          var(--uui-border-radius,3px);
      }
      ::slotted(*:last-child) {
        --uui-button-border-radius: 0 var(--uui-border-radius,3px)
          var(--uui-border-radius,3px) 0;
      }

      ::slotted(*:hover) {
        z-index: 1;
      }
    `];Ci=Sh([h("uui-button-group")],Ci);var Oh=Object.getOwnPropertyDescriptor,Ah=(t,e,i,o)=>{for(var r=o>1?void 0:o?Oh(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(r)||r);return r},pn=class extends Ci{};pn.styles=[...Ci.styles,c`
      ::slotted(*) {
        --uui-button-padding-left-factor: 0.5;
        --uui-button-padding-right-factor: 0.5;
      }

      ::slotted(*:first-child) {
        --uui-button-border-radius: 50px 0 0 50px;
        --uui-button-padding-left-factor: 2;
      }
      ::slotted(*:last-child) {
        --uui-button-border-radius: 0 50px 50px 0;
        --uui-button-padding-right-factor: 2;
      }
      ::slotted(*:first-child:last-child) {
        --uui-button-border-radius: 50px 50px 50px 50px;
        --uui-button-padding-left-factor: 2;
        --uui-button-padding-right-factor: 2;
      }

      ::slotted([look='outline']),
      ::slotted([look='placeholder']) {
        --uui-button-padding-left-factor: 1;
        --uui-button-padding-right-factor: 1;
      }

      ::slotted(uui-button[look='outline']:first-child),
      ::slotted(uui-button[look='placeholder']:first-child) {
        --uui-button-border-radius: 50px 0 0 50px;
        --uui-button-padding-left-factor: 1.5;
      }
      ::slotted(uui-button[look='outline']:last-child),
      ::slotted(uui-button[look='placeholder']:last-child) {
        --uui-button-border-radius: 0 50px 50px 0;
        --uui-button-padding-right-factor: 1.5;
      }
      ::slotted(uui-button[look='outline']:first-child:last-child),
      ::slotted(uui-button[look='placeholder']:first-child:last-child) {
        --uui-button-border-radius: 50px 50px 50px 50px;
        --uui-button-padding-left-factor: 1.5;
        --uui-button-padding-right-factor: 1.5;
      }
    `];pn=Ah([h("uui-action-bar")],pn);var Ih=Object.defineProperty,Mh=Object.getOwnPropertyDescriptor,zo=(t,e,i,o)=>{for(var r=o>1?void 0:o?Mh(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Ih(e,i,r),r},$i=class extends d{constructor(){super(...arguments),this._avatarArray=[],this.limit=0}firstUpdated(){this._setAvatarArray()}_onSlotChange(){this._setAvatarArray(),this._updateAvatarVisibility()}_setAvatarArray(){this._avatarArray=this._avatarNodes?this._avatarNodes:[]}updated(t){t.has("limit")&&this._updateAvatarVisibility()}_updateAvatarVisibility(){this._avatarArray.forEach((t,e)=>{t.style.display=e<this.limit||this.limit===0?"":"none"})}_isLimitExceeded(){return this.limit!==0&&this._avatarArray.length>this.limit}render(){return l`
      <slot @slotchange=${this._onSlotChange}></slot>
      ${this._isLimitExceeded()?l`<small id="overflow-indication">+${this._avatarArray.length-this.limit}</small>`:""}
    `}};$i.styles=[c`
      :host {
        display: inline-flex;
        align-items: center;
        padding-left: 3px;
        padding-right: 3px;
      }

      ::slotted(uui-avatar) {
        margin-left: -0.2em;
        margin-right: -0.2em;
        border: 0.1em solid var(--uui-avatar-border-color);
      }

      #overflow-indication {
        margin-left: 6px;
      }
    `];zo([dt({selector:"uui-avatar, [uui-avatar]",flatten:!0})],$i.prototype,"_avatarNodes",2);zo([v()],$i.prototype,"_avatarArray",2);zo([a({type:Number,attribute:!0})],$i.prototype,"limit",2);$i=zo([h("uui-avatar-group")],$i);var Lh=Object.defineProperty,zh=Object.getOwnPropertyDescriptor,Pi=(t,e,i,o)=>{for(var r=o>1?void 0:o?zh(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Lh(e,i,r),r},Ce=class extends d{constructor(){super(...arguments),this.overflow=!0,this.imgSrc="",this.imgSrcset="",this.name=""}get _initials(){return this.initials?.substring(0,3)||this.createInitials(this.name)}connectedCallback(){super.connectedCallback(),this.name||console.warn(this.tagName+" needs a `name`",this)}createInitials(t){let e="";if(!t)return e;let o=[...t.matchAll(/(?:^|\s)(.)/g)].map(r=>r[1]).join("");return o?.length?(e=o[0].charAt(0),o.length>1&&(e+=o[o.length-1].charAt(0)),e.toUpperCase()):e}renderImage(){return l` <img
      src="${this.imgSrc}"
      srcset="${this.imgSrcset}"
      alt="${this._initials}"
      title="${this.name}" />`}render(){return l`
      ${this.imgSrc?this.renderImage():""}
      ${this.imgSrc?"":this._initials}
      <slot></slot>
    `}};Ce.styles=[c`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        font-weight: 700;
        -webkit-font-smoothing: subpixel-antialiased;
        width: calc(2em + 4px);
        height: calc(2em + 4px);
        user-select: none;
        /* box-sizing: border-box; */
        aspect-ratio: 1;
        background-color: var(--uui-palette-spanish-pink,#f5c1bc);
        color: var(--uui-palette-space-cadet,#1b264f);
      }

      :host([overflow]) {
        overflow: unset;
      }

      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        overflow: hidden;
        border-radius: 50%;
      }
    `];Pi([a({type:Boolean,attribute:!0,reflect:!0})],Ce.prototype,"overflow",2);Pi([a({type:String,attribute:"img-src"})],Ce.prototype,"imgSrc",2);Pi([a({type:String,attribute:"img-srcset"})],Ce.prototype,"imgSrcset",2);Pi([a({type:String,reflect:!0})],Ce.prototype,"name",2);Pi([a({type:String})],Ce.prototype,"initials",2);Ce=Pi([h("uui-avatar")],Ce);var Dh=Object.defineProperty,Uh=Object.getOwnPropertyDescriptor,Do=(t,e,i,o)=>{for(var r=o>1?void 0:o?Uh(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Dh(e,i,r),r},Si=class extends d{constructor(){super(...arguments),this.color="default",this.look="primary",this.attention=!1}render(){return l` <slot></slot> `}};Si.styles=[c`
      :host {
        position: var(--uui-badge-position, absolute);
        display: flex;
        justify-content: center;
        align-items: center;

        padding: var(--uui-size-1,3px) var(--uui-size-2,6px);
        inset: var(--uui-badge-inset, -8px -8px auto auto);

        text-align: center;
        font-size: var(--uui-badge-font-size, var(--uui-type-small-size,12px));
        font-weight: 900;
        line-height: 1;

        margin-right: 0;

        min-width: var(--uui-size-8,24px);
        min-height: var(--uui-size-8,24px);
        box-sizing: border-box;

        border-radius: var(--uui-size-4,12px);
        border: 1px solid transparent;
      }

      :host {
        --color: var(--uui-color-default,#1b264f);
        --color-standalone: var(--uui-color-default-standalone,rgb(
    28,
    35,
    59
  ));
        --color-contrast: var(--uui-color-default-contrast,#fff);
      }
      :host([color='positive']) {
        --color: var(--uui-color-positive,#0b8152);
        --color-standalone: var(--uui-color-positive-standalone,rgb(
    10,
    115,
    73
  ));
        --color-contrast: var(--uui-color-positive-contrast,#fff);
      }
      :host([color='warning']) {
        --color: var(--uui-color-warning,#fbd142);
        --color-standalone: var(--uui-color-warning-standalone,#a17700);
        --color-contrast: var(--uui-color-warning-contrast,#000);
      }
      :host([color='danger']) {
        --color: var(--uui-color-danger,#d42054);
        --color-standalone: var(--uui-color-danger-standalone,rgb(
    191,
    33,
    78
  ));
        --color-contrast: var(--uui-color-danger-contrast,white);
      }
      :host([color='invalid']) {
        --color: var(--uui-color-invalid,#d42054);
        --color-standalone: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
        --color-contrast: var(--uui-color-invalid-contrast,white);
      }

      :host {
        background-color: var(--uui-color-surface,#fff);
        color: var(--color-standalone);
        border-color: transparent;
      }
      :host([look='primary']) {
        background-color: var(--color);
        color: var(--color-contrast);
        border-color: transparent;
      }
      :host([look='secondary']) {
        background-color: var(--uui-color-surface-alt,#f3f3f5);
        color: var(--color-standalone);
        border-color: transparent;
      }
      :host([look='outline']) {
        background-color: var(--uui-color-surface,#fff);
        color: var(--color-standalone);
        border-color: var(--color-standalone);
      }
      :host([look='placeholder']) {
        border-style: dashed;
        background-color: var(--uui-color-surface,#fff);
        color: var(--color-standalone);
        border-color: var(--uui-color-border-standalone,#c2c2c2);
      }

      /** TODO: we didn't want to target elements by name, but what else can we do? */
      ::slotted(uui-icon) {
        margin-left: -0.2em;
        margin-right: -0.2em;
      }

      @keyframes --uui-badge-bounce {
        0% {
          transform: translateY(0);
        }
        20% {
          transform: translateY(-6px);
        }
        40% {
          transform: translateY(0);
        }
        55% {
          transform: translateY(-3px);
        }
        70% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(0);
        }
      }
      :host([attention]) {
        animation-duration: 1.4s;
        animation-iteration-count: infinite;
        animation-name: --uui-badge-bounce;
        animation-timing-function: ease;
      }
      @media (prefers-reduced-motion) {
        :host([attention]) {
          animation: none;
        }
      }
    `];Do([a({reflect:!0})],Si.prototype,"color",2);Do([a({reflect:!0})],Si.prototype,"look",2);Do([a({type:Boolean,reflect:!0})],Si.prototype,"attention",2);Si=Do([h("uui-badge")],Si);var Th=Object.defineProperty,Vh=(t,e,i,o)=>{for(var r=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(e,i,r)||r);return r&&Th(e,i,r),r},Kt=t=>{class e extends t{constructor(){super(...arguments),this.active=!1}}return Vh([a({type:Boolean,reflect:!0})],e.prototype,"active"),e},Nh=Object.defineProperty,yl=(t,e,i,o)=>{for(var r=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(e,i,r)||r);return r&&Nh(e,i,r),r},F=(t,e)=>{class i extends e{constructor(){super(...arguments),this._labelSlotHasContent=!1}firstUpdated(r){super.firstUpdated(r),this.label||console.warn(this.tagName+" needs a `label`",this)}labelSlotChanged(r){this._labelSlotHasContent=r.target.assignedNodes({flatten:!0}).length>0}renderLabel(){return l`
        ${this._labelSlotHasContent===!1?l`<span class="label">${this.label}</span>`:""}
        <slot
          class="label"
          style=${this._labelSlotHasContent?"":"display: none"}
          name=${t||""}
          @slotchange=${this.labelSlotChanged}></slot>
      `}}return yl([a({type:String})],i.prototype,"label"),yl([v()],i.prototype,"_labelSlotHasContent"),i},Hh=class extends Event{constructor(e,i={}){super(e,{...i}),this.detail=i.detail||{}}},Oi=class extends Hh{constructor(e,i={}){super(e,{bubbles:!0,cancelable:!0,...i})}};Oi.SELECTED="selected";Oi.DESELECTED="deselected";var Bh=Object.defineProperty,jh=Object.getOwnPropertyDescriptor,El=t=>{throw TypeError(t)},xl=(t,e,i,o)=>{for(var r=o>1?void 0:o?jh(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Bh(e,i,r),r},mn=(t,e,i)=>e.has(t)||El("Cannot "+i),nt=(t,e,i)=>(mn(t,e,"read from private field"),i?i.call(t):e.get(t)),Uo=(t,e,i)=>e.has(t)?El("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Rh=(t,e,i,o)=>(mn(t,e,"write to private field"),e.set(t,i),i),To=(t,e,i)=>(mn(t,e,"access private method"),i),Ot=t=>{var e,i,o,r,s,n,u;class p extends t{constructor(..._){super(..._),Uo(this,r),this._selectable=!1,this.deselectable=!0,this.selected=!1,Uo(this,e,this),Uo(this,i,f=>{f.code!=="Space"&&f.code!=="Enter"||f.composedPath().indexOf(nt(this,e))===0&&nt(this,o).call(this,f)}),Uo(this,o,f=>{if((this._selectable||this.deselectable&&this.selected)===!1)return;let g=f.composedPath();nt(this,e)===this&&g.some(V=>{let L=V.tagName;return L==="A"||L==="BUTTON"||L==="INPUT"||L==="TEXTAREA"||L==="SELECT"})||g.indexOf(nt(this,e))!==-1&&(f.type==="keydown"&&f.preventDefault(),To(this,r,s).call(this))}),this.addEventListener("click",nt(this,o)),this.addEventListener("keydown",nt(this,i))}get selectable(){return this._selectable}set selectable(_){let f=this._selectable;f!==_&&(this._selectable=_,nt(this,e)===this&&nt(this,e).setAttribute("tabindex",`${_?"0":"-1"}`),this.requestUpdate("selectable",f))}get selectableTarget(){return nt(this,e)}set selectableTarget(_){let f=nt(this,e);f.removeAttribute("tabindex"),f.removeEventListener("click",nt(this,o)),f.removeEventListener("keydown",nt(this,i)),Rh(this,e,_),nt(this,e)===this&&nt(this,e).setAttribute("tabindex",this._selectable?"0":"-1"),_.addEventListener("click",nt(this,o)),_.addEventListener("keydown",nt(this,i))}}return e=new WeakMap,i=new WeakMap,o=new WeakMap,r=new WeakSet,s=function(){this.selectable&&(this.deselectable===!1?To(this,r,n).call(this):this.selected?To(this,r,u).call(this):To(this,r,n).call(this))},n=function(){if(!this.selectable)return;let m=new Oi(Oi.SELECTED);this.dispatchEvent(m),!m.defaultPrevented&&(this.selected=!0)},u=function(){if(!this.deselectable)return;let m=new Oi(Oi.DESELECTED);this.dispatchEvent(m),!m.defaultPrevented&&(this.selected=!1)},xl([a({type:Boolean,reflect:!0})],p.prototype,"selectable",1),xl([a({type:Boolean,reflect:!0})],p.prototype,"selected",2),p},Wh=Object.defineProperty,Fh=Object.getOwnPropertyDescriptor,Gh=(t,e,i,o)=>{for(var r=Fh(e,i),s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(e,i,r)||r);return r&&Wh(e,i,r),r},$e=t=>{class e extends t{constructor(){super(...arguments),this._selectOnly=!1}get selectOnly(){return this._selectOnly}set selectOnly(o){let r=this._selectOnly;this._selectOnly=o,this.requestUpdate("selectOnly",r)}}return Gh([a({type:Boolean,reflect:!0,attribute:"select-only"})],e.prototype,"selectOnly"),e},No=class extends Event{constructor(e,i={}){super(e,{...i}),this.detail=i.detail||{}}},qt=class extends No{constructor(e,i={}){super(e,{bubbles:!0,...i})}};qt.VALID="valid";qt.INVALID="invalid";var Ho=class extends No{constructor(e,i={}){super(e,{bubbles:!0,cancelable:!0,...i})}};Ho.SELECTED="selected";Ho.DESELECTED="deselected";var qh=Object.defineProperty,Kh=Object.getOwnPropertyDescriptor,Cl=t=>{throw TypeError(t)},ii=(t,e,i,o)=>{for(var r=o>1?void 0:o?Kh(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&qh(e,i,r),r},vn=(t,e,i)=>e.has(t)||Cl("Cannot "+i),I=(t,e,i)=>(vn(t,e,"read from private field"),i?i.call(t):e.get(t)),ri=(t,e,i)=>e.has(t)?Cl("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),fn=(t,e,i,o)=>(vn(t,e,"write to private field"),e.set(t,i),i),Vo=(t,e,i)=>(vn(t,e,"access private method"),i),Xh=["customError","valueMissing","badInput","typeMismatch","patternMismatch","rangeOverflow","rangeUnderflow","stepMismatch","tooLong","tooShort"],G=(t,e)=>{var i,o,r,s,n,u,p,m,_;class f extends t{constructor(...g){super(...g),ri(this,u),this.name="",ri(this,i,{}),this._pristine=!1,this.required=!1,this.requiredMessage="This field is required",this.error=!1,this.errorMessage="This field is invalid",ri(this,o,e),ri(this,r,null),ri(this,s,[]),ri(this,n,[]),ri(this,_,()=>{this.pristine=!1}),this._internals=this.attachInternals(),this.pristine=!0,this.addValidator("valueMissing",()=>this.requiredMessage,()=>this.hasAttribute("required")&&this.hasValue()===!1),this.addValidator("customError",()=>this.errorMessage,()=>this.error),this.addEventListener("blur",()=>{this.pristine=!1,this.checkValidity()})}get value(){return I(this,o)}set value(g){let $=I(this,o);fn(this,o,g),"ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype&&this._internals.setFormValue(I(this,o)??null),this.requestUpdate("value",$)}set pristine(g){this._pristine!==g&&(this._pristine=g,g?this.setAttribute("pristine",""):this.removeAttribute("pristine"),Vo(this,u,m).call(this))}get pristine(){return this._pristine}hasValue(){return this.value!==this.getDefaultValue()}focusFirstInvalidElement(){let g=I(this,n).find($=>$.validity.valid===!1);g?"focusFirstInvalidElement"in g?g.focusFirstInvalidElement():g.focus():this.focus()}disconnectedCallback(){super.disconnectedCallback(),Vo(this,u,p).call(this)}addValidator(g,$,V){let L={flagKey:g,getMessageMethod:$,checkMethod:V,weight:Xh.indexOf(g)};return I(this,s).push(L),I(this,s).sort((st,wt)=>st.weight>wt.weight?1:wt.weight>st.weight?-1:0),L}removeValidator(g){let $=I(this,s).indexOf(g);$!==-1&&I(this,s).splice($,1)}addFormControlElement(g){I(this,n).push(g),g.addEventListener(qt.INVALID,()=>{this._runValidators()}),g.addEventListener(qt.VALID,()=>{this._runValidators()}),this._pristine===!1&&(g.checkValidity(),this._runValidators())}setCustomValidity(g){this._customValidityObject&&this.removeValidator(this._customValidityObject),g!=null&&g!==""&&(this._customValidityObject=this.addValidator("customError",()=>g,()=>!0)),this._runValidators()}_runValidators(){fn(this,i,{});let g,$;I(this,s).some(L=>L.checkMethod()?(I(this,i)[L.flagKey]=!0,g=L.getMessageMethod(),!0):!1),g||I(this,n).some(L=>{let st;for(st in L.validity)if(st!=="valid"&&L.validity[st])return I(this,i)[st]=!0,g=L.validationMessage,$??($=L),!0;return!1});let V=Object.values(I(this,i)).includes(!0);I(this,i).valid=!V,this._internals.setValidity(I(this,i),g,$??this.getFormElement()??void 0),Vo(this,u,m).call(this)}updated(g){super.updated(g),this._runValidators()}submit(){I(this,r)?.requestSubmit()}formAssociatedCallback(){Vo(this,u,p).call(this),fn(this,r,this._internals.form),I(this,r)&&(I(this,r).hasAttribute("submit-invalid")&&(this.pristine=!1),I(this,r).addEventListener("submit",I(this,_)))}formResetCallback(){this.pristine=!0,this.value=this.getInitialValue()??this.getDefaultValue()}getDefaultValue(){return e}getInitialValue(){return this.getAttribute("value")}checkValidity(){this.pristine=!1,this._runValidators();for(let g in I(this,n))if(I(this,n)[g].checkValidity()===!1)return!1;return this._internals?.checkValidity()}get validity(){return I(this,i)}get validationMessage(){return this._internals?.validationMessage}}return i=new WeakMap,o=new WeakMap,r=new WeakMap,s=new WeakMap,n=new WeakMap,u=new WeakSet,p=function(){I(this,r)&&I(this,r).removeEventListener("submit",I(this,_))},m=function(){this._pristine!==!0&&(I(this,i).valid?this.dispatchEvent(new qt(qt.VALID)):this.dispatchEvent(new qt(qt.INVALID)))},_=new WeakMap,f.formAssociated=!0,ii([a({type:String})],f.prototype,"name",2),ii([a()],f.prototype,"value",1),ii([a({type:Boolean,reflect:!0,attribute:"pristine"})],f.prototype,"pristine",1),ii([a({type:Boolean,reflect:!0})],f.prototype,"required",2),ii([a({type:String,attribute:"required-message"})],f.prototype,"requiredMessage",2),ii([a({type:Boolean,reflect:!0})],f.prototype,"error",2),ii([a({type:String,attribute:"error-message"})],f.prototype,"errorMessage",2),f},Yh=(t,e,i)=>{let o=t;for(;o!==null;){let r=o instanceof HTMLElement&&o.hasAttribute(e)&&o.getAttribute(e)===i,s=o.querySelector(`[${e}="${i}"]`)!==null;if(r)return o;if(s)return o.querySelector(`[${e}="${i}"]`);o=o.parentElement||o.parentNode||o.host||null}return null},Zh=Object.defineProperty,$l=t=>{throw TypeError(t)},Qh=(t,e,i,o)=>{for(var r=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(e,i,r)||r);return r&&Zh(e,i,r),r},Pl=(t,e,i)=>e.has(t)||$l("Cannot "+i),wl=(t,e,i)=>(Pl(t,e,"read from private field"),e.get(t)),kl=(t,e,i)=>e.has(t)?$l("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Jh=(t,e,i,o)=>(Pl(t,e,"write to private field"),e.set(t,i),i),Sl=t=>{var e,i;class o extends t{constructor(...s){super(...s),kl(this,e,!1),this._togglePopover=()=>{if(!this.popoverContainerElement)return;let n=Yh(this,"id",this.popoverContainerElement);n&&(wl(this,e)?n.hidePopover():n.showPopover())},kl(this,i,n=>{requestAnimationFrame(()=>{Jh(this,e,n.detail.newState==="open")})}),this.addEventListener("uui-popover-before-toggle",wl(this,i))}}return e=new WeakMap,i=new WeakMap,Qh([a({type:String,attribute:"popovertarget"})],o.prototype,"popoverContainerElement"),o};var k=class extends Event{constructor(e,i={}){super(e,{...i}),this.detail=i.detail||{}}},ae=class extends k{constructor(e,i={}){super(e,{bubbles:!0,...i})}};ae.VALID="valid";ae.INVALID="invalid";var At=class extends k{constructor(e,i={}){super(e,{bubbles:!0,cancelable:!0,...i})}};At.SELECTED="selected";At.DESELECTED="deselected";var Ar=class extends k{constructor(e,i={}){super(e,{bubbles:!0,...i})}};Ar.CHANGE="change";var td=Object.defineProperty,ed=Object.getOwnPropertyDescriptor,Ol=t=>{throw TypeError(t)},Ai=(t,e,i,o)=>{for(var r=o>1?void 0:o?ed(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&td(e,i,r),r},id=(t,e,i)=>e.has(t)||Ol("Cannot "+i),rd=(t,e,i)=>e.has(t)?Ol("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),od=(t,e,i)=>(id(t,e,"access private method"),i),bn,Al,pt=class extends G(F("",d),""){constructor(e="checkbox"){super(),rd(this,bn),this._value="",this.labelPosition="right",this._checked=!1,this.indeterminate=!1,this.disabled=!1,this.readonly=!1,this._value===""&&(this._value="on"),this.inputRole=e,this.addEventListener("keydown",od(this,bn,Al))}get value(){return this._value}set value(e){let i=super.value;this._value=e,"ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype&&this._internals.setFormValue(this._checked&&this.name!==""?this._value:null),this.requestUpdate("value",i)}get checked(){return this._checked}set checked(e){let i=this._checked;this._checked=e,this._internals.setFormValue(this._checked&&this.name!==""?this._value?this._value:"on":null),this.requestUpdate("checked",i)}getFormElement(){return this._input}hasValue(){return this.checked}formResetCallback(){super.formResetCallback(),this.checked=this.hasAttribute("checked")}firstUpdated(e){super.firstUpdated(e);let i=this.shadowRoot?.querySelector("label"),o=!1;this._input.addEventListener("blur",()=>{o===!1&&this.style.setProperty("--uui-show-focus-outline","1"),o=!1}),i.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0"),o=!0}),i.addEventListener("mouseup",()=>{o=!1})}async focus(){await this.updateComplete,this._input.focus()}async click(){await this.updateComplete,this._input.click()}_onInputChange(e){e.stopPropagation(),this.pristine=!1,this.checked=this._input.checked,this.indeterminate=this._input.indeterminate,this.dispatchEvent(new Ar(Ar.CHANGE))}render(){return l`
      <label>
        <input
          id="input"
          type="checkbox"
          @change="${this._onInputChange}"
          .disabled=${this.disabled||this.readonly}
          .checked=${this.checked}
          .indeterminate=${this.indeterminate}
          aria-checked="${this.checked?"true":"false"}"
          aria-label=${this.label}
          role="${this.inputRole}" />
        ${this.renderCheckbox()} ${this.renderLabel()}
      </label>
    `}};bn=new WeakSet;Al=function(t){t.key=="Enter"&&this.submit()};pt.styles=[c`
      :host {
        display: inline-block;
      }

      label {
        position: relative;
        cursor: pointer;
        user-select: none;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-items: center;
        gap: var(--uui-size-3,9px);
      }

      :host([readonly]) label {
        cursor: default;
      }

      input {
        position: absolute;
        height: 0px;
        width: 0px;
        opacity: 0;
      }

      :host([label-position='left']) label {
        flex-direction: row-reverse;
      }

      :host([label-position='top']) label {
        gap: var(--uui-size-half-base-unit);
        flex-direction: column-reverse;
      }

      :host([label-position='bottom']) label {
        gap: var(--uui-size-half-base-unit);
        flex-direction: column;
      }

      :host([disabled]) label {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .label {
        display: block;
      }

      span.label:empty {
        display: none;
      }
    `];Ai([a({type:String,attribute:"label-position",reflect:!0})],pt.prototype,"labelPosition",2);Ai([a({type:Boolean})],pt.prototype,"checked",1);Ai([a({type:Boolean,reflect:!0})],pt.prototype,"indeterminate",2);Ai([a({type:Boolean,reflect:!0})],pt.prototype,"disabled",2);Ai([a({type:Boolean,reflect:!0})],pt.prototype,"readonly",2);Ai([E("#input")],pt.prototype,"_input",2);var Ml=Symbol.for(""),sd=t=>{if(t?.r===Ml)return t?._$litStatic$},gn=t=>({_$litStatic$:t,r:Ml});var Il=new Map,_n=t=>(e,...i)=>{let o=i.length,r,s,n=[],u=[],p,m=0,_=!1;for(;m<o;){for(p=e[m];m<o&&(s=i[m],(r=sd(s))!==void 0);)p+=r+e[++m],_=!0;m!==o&&u.push(s),n.push(p),m++}if(m===o&&n.push(e[o]),_){let f=n.join("$$lit$$");(e=Il.get(f))===void 0&&(n.raw=n,Il.set(f,e=n)),i=u}return t(e,...i)},yn=_n(l),cg=_n(b),hg=_n(fl);var nd=Object.defineProperty,ad=Object.getOwnPropertyDescriptor,oi=(t,e,i,o)=>{for(var r=o>1?void 0:o?ad(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&nd(e,i,r),r};function xn(t){return t?t.assignedNodes({flatten:!0}).length>0:!1}var le=class extends d{constructor(){super(...arguments),this.headline=null,this._headlineVariantTag="h5",this._headlineSlotHasContent=!1,this._headlineSlotChanged=t=>{this._headlineSlotHasContent=xn(t.target)},this._headerSlotHasContent=!1,this._headerSlotChanged=t=>{this._headerSlotHasContent=xn(t.target)},this._headerActionsSlotHasContent=!1,this._headerActionsSlotChanged=t=>{this._headerActionsSlotHasContent=xn(t.target)}}set headlineVariant(t){this._headlineVariantTag=t}get headlineVariant(){return this._headlineVariantTag}renderHeader(){return yn`<div
      id="header"
      class="uui-text"
      style=${this._headerSlotHasContent||this._headlineSlotHasContent||this._headerActionsSlotHasContent||this.headline!==null?"":"display: none"}>
      <${gn(this._headlineVariantTag)}
        id="headline"
        class="uui-h5"
        style=${this._headlineSlotHasContent||this.headline!==null?"":"display: none"}>
        ${this.headline}
        <slot name="headline" @slotchange=${this._headlineSlotChanged}></slot>
      </${gn(this._headlineVariantTag)}>
      <slot name="header" @slotchange=${this._headerSlotChanged}></slot>
      <slot name="header-actions" @slotchange=${this._headerActionsSlotChanged}></slot>
    </div>`}render(){return yn`
      ${this.renderHeader()}
      <slot></slot>
    `}};le.styles=[Ft,c`
      :host {
        display: block;
        border: var(--uui-box-border-width, 0) solid
          var(--uui-box-border-color, var(--uui-color-divider-standalone,#e9e9eb));
        box-shadow: var(--uui-box-box-shadow, var(--uui-shadow-depth-1,0 1px 3px rgba(0,0,0,0.12) , 0 1px 2px rgba(0,0,0,0.24)));
        border-radius: var(--uui-box-border-radius, var(--uui-border-radius,3px));
        background-color: var(--uui-color-surface,#fff);
      }

      #header {
        display: flex;
        align-items: center;
        column-gap: var(--uui-size-space-5,18px);
        border-bottom: 1px solid var(--uui-color-divider-standalone,#e9e9eb);
        padding: var(
          --uui-box-header-padding,
          var(--uui-size-space-4,12px) var(--uui-size-space-5,18px)
        );
      }

      slot:not([name]) {
        display: block;
        padding: var(--uui-box-default-padding, var(--uui-size-space-5,18px));
      }

      slot[name='header-actions'] {
        display: block;
        margin-left: auto;
      }
    `];oi([a({type:String})],le.prototype,"headline",2);oi([a({attribute:"headline-variant"})],le.prototype,"headlineVariant",1);oi([v()],le.prototype,"_headlineVariantTag",2);oi([v()],le.prototype,"_headlineSlotHasContent",2);oi([v()],le.prototype,"_headerSlotHasContent",2);oi([v()],le.prototype,"_headerActionsSlotHasContent",2);le=oi([h("uui-box")],le);var ld=Object.defineProperty,ud=Object.getOwnPropertyDescriptor,wn=(t,e,i,o)=>{for(var r=o>1?void 0:o?ud(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&ld(e,i,r),r},Ii=class extends d{constructor(){super(...arguments),this.lastItem=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}renderLinkAndSeparator(){let t=this.href?l`<a id="link" href=${this.href}><slot></slot></a>`:l`<span id="link"><slot></slot></span>`;return l`${t}<span part="separator"></span>`}renderCurrent(){return l`<span id="last-item"><slot></slot></span>`}render(){return l`${this.lastItem?this.renderCurrent():this.renderLinkAndSeparator()}`}};Ii.styles=[c`
      :host {
        font-size: var(--uui-type-small-size,12px);
        color: currentColor;
      }

      a,
      a:visited {
        color: currentColor;
      }
      a:hover {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      a:focus {
        color: var(--uui-color-focus,#3879ff);
      }

      [part='separator']::after {
        content: '/';
        speak: never;
        position: relative;
        top: 1px;
        margin: -3px 1px 0;
        color: var(--uui-color-border,#d8d7d9);
      }

      #link,
      #last-item {
        padding: 0 4px;
        max-width: 150px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `];wn([a()],Ii.prototype,"href",2);wn([a({type:Boolean,attribute:"last-item"})],Ii.prototype,"lastItem",2);Ii=wn([h("uui-breadcrumb-item")],Ii);var cd=Object.defineProperty,hd=Object.getOwnPropertyDescriptor,Ll=(t,e,i,o)=>{for(var r=o>1?void 0:o?hd(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&cd(e,i,r),r},Bo=class extends d{elementIsBreadcrumbItem(t){return t instanceof Ii}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label","breadcrumb"),this.setAttribute("role","navigation")}handleSlotChange(){if(this.slotNodes.length>0){let t=this.slotNodes[this.slotNodes.length-1];t.setAttribute("aria-current","page"),this.elementIsBreadcrumbItem(t)&&(t.lastItem=!0)}}render(){return l`<ol id="breadcrumbs-list">
      <slot @slotchange=${this.handleSlotChange}></slot>
    </ol>`}};Bo.styles=[c`
      :host {
        display: flex;
      }

      #breadcrumbs-list {
        display: flex;
        list-style-type: decimal;
        margin-block-start: 0em;
        margin-block-end: 0em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 0px;
      }
    `];Ll([dt({flatten:!0,selector:"uui-breadcrumb-item, [uui-breadcrumb-item], [role=listitem]"})],Bo.prototype,"slotNodes",2);Bo=Ll([h("uui-breadcrumbs")],Bo);var zl=c`
  @keyframes uui-blink {
    0%,
    100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }
`,Dl=St("uui-blink 0.9s infinite both"),Ul=c`
  @keyframes pulse {
    0% {
      -webkit-transform: translate(-50%, -50%) scale(0.2);
      transform: translate(-50%, -50%) scale(0.2);
      opacity: 0.9;
    }
    80% {
      -webkit-transform: translate(-50%, -50%) scale(1.2);
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0;
    }
    100% {
      -webkit-transform: translate(-50%, -50%) scale(2.2);
      transform: translate(-50%, -50%) scale(2.2);
      opacity: 0;
    }
  }
`,Og=St("pulse 0.8s ease-in-out infinite both"),Pe=c`
  @keyframes uui-horizontal-shake {
    10%,
    90% {
      transform: translateX(-1px);
    }

    20%,
    80% {
      transform: translateX(1px);
    }

    30%,
    50%,
    70% {
      transform: translateX(-2px);
    }

    40%,
    60% {
      transform: translateX(2px);
    }
  }
`,Se=St("uui-horizontal-shake 600ms ease backwards");var it={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},kt=t=>(...e)=>({_$litDirective$:t,values:e}),_t=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,o){this._$Ct=e,this._$AM=i,this._$Ci=o}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};var Tl="important",dd=" !"+Tl,at=kt(class extends _t{constructor(t){if(super(t),t.type!==it.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{let o=t[i];return o==null?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){let{style:i}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(let o of this.ft)e[o]==null&&(this.ft.delete(o),o.includes("-")?i.removeProperty(o):i[o]=null);for(let o in e){let r=e[o];if(r!=null){this.ft.add(o);let s=typeof r=="string"&&r.endsWith(dd);o.includes("-")||s?i.setProperty(o,s?r.slice(0,-11):r,s?Tl:""):i[o]=r}}return W}});var x=t=>t??w;var Ir=class extends k{constructor(e,i={}){super(e,{bubbles:!0,composed:!0,...i})}};Ir.CLICK="click";var pd=Object.defineProperty,fd=Object.getOwnPropertyDescriptor,Vl=t=>{throw TypeError(t)},si=(t,e,i,o)=>{for(var r=o>1?void 0:o?fd(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&pd(e,i,r),r},md=(t,e,i)=>e.has(t)||Vl("Cannot "+i),vd=(t,e,i)=>e.has(t)?Vl("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),jo=(t,e,i)=>(md(t,e,"access private method"),i),Mi,kn,Nl,Hl,ue=class extends d{constructor(){super(...arguments),vd(this,Mi),this._position=0,this.vertical=!1}_onMouseMove(t){this._position=(this.vertical?t.offsetY:t.offsetX)-5}_handleClick(t){t.preventDefault(),t.stopImmediatePropagation(),t.target?.blur?.(),this.dispatchEvent(new Ir(Ir.CLICK))}render(){return this.href?jo(this,Mi,Nl).call(this):jo(this,Mi,Hl).call(this)}};Mi=new WeakSet;kn=function(){return l`
      <div
        id="plus"
        style=${at({left:this.vertical?"":this._position+"px",top:this.vertical?this._position+"px":""})}>
        <svg
          id="plus-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512">
          <path
            d="M420.592 214.291H296.104V89.804h-83.102v124.487H88.518v83.104h124.484v124.488h83.102V297.395h124.488z" />
        </svg>
      </div>
    `};Nl=function(){return l`<a
      id="button-wrapper"
      @mousemove=${this._onMouseMove}
      href=${x(this.href)}
      target=${x(this.target||void 0)}
      rel=${x(this.rel||x(this.target==="_blank"?"noopener noreferrer":void 0))}
      aria-label=${this.label?this.label:"create new element"}>
      ${jo(this,Mi,kn).call(this)}
    </a>`};Hl=function(){return l`
      <button
        id="button-wrapper"
        @mousemove=${this._onMouseMove}
        @click=${this._handleClick}
        aria-label=${this.label?this.label:"create new element"}>
        ${jo(this,Mi,kn).call(this)}
      </button>
    `};ue.styles=[zl,c`
      :host {
        display: flex;
        position: relative;
        z-index: 1;
      }

      :host(:not([vertical])) {
        height: 20px;
        width: 100%;
        margin: -10px 0;
      }

      :host([vertical]) {
        height: 100%;
        width: 20px;
        margin: 0 -10px;
      }

      #button-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        z-index: 1;
        outline: 0;
        transition: opacity 0.24s;
        display: inline-flex;
        width: 100%;
        border: none;
        height: 100%;
        padding: 0;

        text-decoration: none;
        background: transparent;
        color: currentColor;

        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;

        opacity: 0;
      }

      :host(:focus) #button-wrapper,
      :host(:focus-within) #button-wrapper,
      :host(:hover) #button-wrapper {
        opacity: 1;
      }

      :host(:focus) #button-wrapper:before,
      :host(:focus-within) #button-wrapper:before,
      :host(:hover) #button-wrapper:before {
        animation: ${Dl};
        background-color: var(--uui-color-interactive-emphasis,#3544b1);
        border-color: var(--uui-color-surface,#fff) !important;
      }

      #button-wrapper:before {
        content: '';
        position: absolute;
        right: 0;
        left: 0;
        height: 2px;
        background-color: transparent;
        border-top: 1px solid transparent;
        border-bottom: 1px solid transparent;
        border-radius: 2px;
        pointer-events: none;
        transition:
          background-color 720ms ease-out,
          border-color 240ms;
      }

      :host(:not([vertical])) #button-wrapper:before {
        top: 50%;
        transform: translateY(-50%);
      }

      :host([vertical]) #button-wrapper:before {
        height: 100%;
        width: 2px;
        left: 50%;
        transform: translateX(-50%);
        border-top: none;
        border-bottom: none;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
      }

      :host(:not([vertical]):not(:hover)) #plus:not(:focus) {
        left: calc(50% - 2px) !important;
      }

      :host([vertical]:not(:hover)) #plus:not(:focus) {
        top: calc(50% - 2px) !important;
      }

      #plus {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
        box-sizing: border-box;
        width: 28px;
        height: 28px;
        border-radius: 3em;
        font-size: 14px;
        border: 2px solid var(--uui-color-interactive-emphasis,#3544b1);
        color: var(--uui-color-interactive-emphasis,#3544b1);
        background-color: var(--uui-color-surface,#fff);

        opacity: 0;
        transform: scale(0);
        transition:
          transform 240ms ease-in,
          opacity 240ms,
          left 100ms linear 150ms,
          top 100ms linear 150ms;
      }
      :host(:focus) #plus,
      :host(:focus-within) #plus,
      :host(:hover) #plus {
        opacity: 1;
        transform: scale(1);
        transition:
          transform 240ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
          opacity 80ms,
          box-shadow 240ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
        box-shadow: 0 0 0 2px var(--uui-color-surface,#fff);
      }

      :host(:not([vertical])) #plus {
        margin-left: -18px;
      }

      :host([vertical]) #plus {
        left: -4px;
        margin-top: -18px;
      }

      #button-wrapper:focus #plus {
        /* TODO: implement focus outline system */
        border: 2px solid var(--uui-color-focus,#3879ff);
        color: var(--uui-color-focus,#3879ff);
      }

      #plus-icon {
        width: 50%;
        fill: currentColor;
      }

      #button-wrapper:active #plus {
        transform: scale(1.1);
      }
    `];si([v()],ue.prototype,"_position",2);si([a({type:String})],ue.prototype,"label",2);si([a({type:Boolean,reflect:!0})],ue.prototype,"vertical",2);si([a({type:String})],ue.prototype,"href",2);si([a({type:String})],ue.prototype,"target",2);si([a({type:String})],ue.prototype,"rel",2);ue=si([h("uui-button-inline-create")],ue);var Ro=class{constructor(e,i){this._callback=e,this._timerId=null,this._remaining=null,this._onComplete=()=>{this._remaining=null,this._callback()},this.setDuration(i)}setDuration(e){this._duration=e,this._timerId!==null&&this.restart()}start(){this._timerId===null&&this.resume()}restart(){this._remaining=this._duration,this.resume()}pause(){this._timerId!==null&&(window.clearTimeout(this._timerId),this._timerId=null,this._remaining!==null&&(this._remaining-=Date.now()-this._startTime))}resume(){this._timerId!==null&&window.clearTimeout(this._timerId),this._remaining===null&&(this._remaining=this._duration),this._startTime=Date.now(),this._timerId=window.setTimeout(this._onComplete,this._remaining)}destroy(){this.pause()}},y=(t,e,i=`This element has to be present for ${t.nodeName} to work appropriate.`)=>{customElements.get(e)||console.warn(`%c ${t.nodeName} requires ${e} element to be registered!`,"font-weight: bold;",i,t)},Wo=(t,e)=>{function i(r){let s=t.getBoundingClientRect(),n=t.ownerDocument.defaultView,u=s.left+n.scrollX,p=s.top+n.scrollY,m;if("TouchEvent"in window&&r instanceof TouchEvent)m=r.touches[0];else if(r instanceof MouseEvent)m=r;else return;let _=m.pageX-u,f=m.pageY-p;e?.onMove&&e.onMove(_,f)}function o(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",o),e?.onStop&&e.onStop()}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",o),e?.initialEvent&&i(e.initialEvent)},O=(t,e,i)=>Math.min(Math.max(t,e),i),En=(t,e,i)=>i+e-t;var Bl=(t,e,i)=>{let o=t;for(;o!==null;){let r=o instanceof HTMLElement&&o.hasAttribute(e)&&o.getAttribute(e)===i,s=o.querySelector(`[${e}="${i}"]`)!==null;if(r)return o;if(s)return o.querySelector(`[${e}="${i}"]`);o=o.parentElement||o.parentNode||o.host||null}return null};function jl(t){return t?t.assignedNodes({flatten:!0}).length>0:!1}var Jg=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,t1=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>`,e1=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>`,i1=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>`,Oe=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>`,r1=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>`,o1=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>`,s1=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m2 22 1-1h3l9-9" /><path d="M3 21v-3l9-9" /><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" /></svg>`,n1=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" /><path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" /><path d="M15 2v5h5" /></svg>`,Rl=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>`,a1=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>`,l1=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>`,u1=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>`,c1=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>`,h1=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /><path d="M2 10h20" /></svg>`,d1=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`,p1=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>`,f1=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>`,Wl=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>`,m1=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="4" height="16" x="6" y="4" /><rect width="4" height="16" x="14" y="4" /></svg>`,Fl=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>`,v1=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>`,Li=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>`,b1=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>`,Gl=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>`,g1=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>`,ql=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>`,_1=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>`,Kl=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></svg>`,Xl=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg>`,y1=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2" /><path d="M15 16v-2" /><path d="M8 9h2" /><path d="M20 9h2" /><path d="M17.8 11.8 19 13" /><path d="M15 9h0" /><path d="M17.8 6.2 19 5" /><path d="m3 21 9-9" /><path d="M12.2 6.2 11 5" /></svg>`,Yl=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`;var bd=Object.defineProperty,gd=Object.getOwnPropertyDescriptor,Zl=t=>{throw TypeError(t)},Nt=(t,e,i,o)=>{for(var r=o>1?void 0:o?gd(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&bd(e,i,r),r},Ql=(t,e,i)=>e.has(t)||Zl("Cannot "+i),_d=(t,e,i)=>(Ql(t,e,"read from private field"),e.get(t)),yd=(t,e,i)=>e.has(t)?Zl("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),xd=(t,e,i,o)=>(Ql(t,e,"write to private field"),e.set(t,i),i),Fo,lt=class extends G(F("",Sl(d))){constructor(){super(),this.type="button",this.disabled=!1,this.look="default",this.color="default",this.compact=!1,this.state=void 0,yd(this,Fo),this.addEventListener("click",this._onHostClick)}getFormElement(){return this._button}async focus(){await this.updateComplete,this._button.focus()}async blur(){await this.updateComplete,this._button.blur()}async click(){await this.updateComplete,this._button.click()}_onHostClick(t){if(this.disabled){t.preventDefault(),t.stopImmediatePropagation();return}if(this._internals?.form)switch(this.type){case"reset":this._internals.form.reset();break;case"button":break;default:this._internals.form.requestSubmit?this._internals.form.requestSubmit():this._internals.form.dispatchEvent(new SubmitEvent("submit"));break}this._togglePopover()}updated(t){super.updated(t),t.has("state")&&(clearTimeout(_d(this,Fo)),(this.state==="success"||this.state==="failed")&&xd(this,Fo,setTimeout(()=>this.state=void 0,2e3)))}renderState(){let t;switch(this.state){case"waiting":y(this,"uui-loader-circle"),t=l`<uui-loader-circle id="loader"></uui-loader-circle>`;break;case"success":y(this,"uui-icon"),t=l`<uui-icon
          name="check"
          .fallback=${Oe.strings[0]}></uui-icon>`;break;case"failed":y(this,"uui-icon"),t=l`<uui-icon
          name="wrong"
          .fallback=${Yl.strings[0]}></uui-icon>`;break;default:return w}return l`<div id="state">${t}</div>`}render(){return this.href?l`
          <a
            id="button"
            aria-label=${x(this.label)}
            href=${x(this.disabled?void 0:this.href)}
            target=${x(this.target||void 0)}
            rel=${x(this.rel||x(this.target==="_blank"?"noopener noreferrer":void 0))}>
            ${this.renderState()} ${this.renderLabel()}
            <slot name="extra"></slot>
          </a>
        `:l`
          <button
            id="button"
            type=${this.type}
            ?disabled=${this.disabled}
            aria-label=${x(this.label)}>
            ${this.renderState()} ${this.renderLabel()}
            <slot name="extra"></slot>
          </button>
        `}};Fo=new WeakMap;lt.styles=[Pe,c`
      :host {
        position: relative;
        display: inline-flex;
        margin-left: calc(var(--uui-button-merge-border-left, 0) * -1px);
        --uui-button-padding-left-factor: 3;
        --uui-button-padding-right-factor: 3;
        --uui-button-padding-top-factor: 1;
        --uui-button-padding-bottom-factor: 1;

        min-height: var(--uui-button-height, var(--uui-size-11,33px));
        max-height: 100%;
        cursor: pointer;

        text-align: center;
        font-size: var(--uui-button-font-size, inherit);
        font-weight: var(--uui-button-font-weight, 500);
        transition:
          background-color 80ms,
          border-color 80ms,
          color 80ms;
      }

      :host([compact]) {
        --uui-button-padding-left-factor: 1;
        --uui-button-padding-right-factor: 1;
        --uui-button-padding-top-factor: 0;
        --uui-button-padding-bottom-factor: 0;
      }

      .label {
        line-height: 1; /** needed to reset 'a > span' */
        transition: opacity 120ms;
        display: flex;
        gap: var(--uui-size-1,3px);
        align-items: center;
      }

      :host([state]:not([state=''])) .label {
        opacity: 0;
      }

      #state {
        position: absolute;
        opacity: 0;
        animation-name: fadeIn;
        animation-delay: 40ms;
        animation-duration: 360ms;
        animation-fill-mode: forwards;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        align-items: center;
      }

      #button {
        width: 100%;
        background-color: transparent;
        color: inherit;
        font-size: inherit;
        border-radius: inherit;
        font-family: inherit;
        font-weight: inherit;
        text-align: inherit;
        border: none;
        cursor: inherit;

        display: inline-flex;
        align-items: center;
        justify-content: var(--uui-button-content-align, center);

        /* for anchor tag: */
        text-decoration: none;
        color: currentColor;
        line-height: inherit;

        border-width: var(--uui-button-border-width, 1px);
        border-style: solid;
        border-radius: var(
          --uui-button-border-radius,
          var(--uui-border-radius,3px)
        );
        cursor: pointer;

        padding: calc(var(--uui-size-2,6px) * var(--uui-button-padding-top-factor))
          calc(var(--uui-size-2,6px) * var(--uui-button-padding-right-factor))
          calc(var(--uui-size-2,6px) * var(--uui-button-padding-bottom-factor))
          calc(var(--uui-size-2,6px) * var(--uui-button-padding-left-factor));

        box-shadow: none;

        transition: var(--uui-button-transition, none);
      }

      #button:focus-visible {
        outline: 2px solid var(--color-emphasis);
      }

      button[disabled]:active,
      a:not([href]):active {
        animation: ${Se};
      }

      /* ANIMATIONS */
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      @keyframes fadeOut {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }

      #icon-check,
      #icon-wrong {
        display: grid;
        place-items: center;
        width: 1.5em;
      }

      #loader {
        font-size: 1.5em;
      }
      :host([look]:not([look=''])) #loader {
        color: inherit;
      }

      /* edge case for default color */
      :host(:not([color]):not([look='primary'])),
      :host([color='']:not([look='primary'])),
      :host([color='default']:not([look='primary'])) {
        --uui-button-contrast-hover: var(--uui-color-default-emphasis,#3544b1);
      }

      :host([color='warning'][look='outline']) #button,
      :host([color='warning'][look='placeholder']) #button {
        --uui-button-contrast-hover: var(--color-standalone);
      }

      /** Button color attribute: */
      #button {
        --color: var(--uui-color-default,#1b264f);
        --color-standalone: var(--uui-color-default-standalone,rgb(
    28,
    35,
    59
  ));
        --color-emphasis: var(--uui-color-default-emphasis,#3544b1);
        --color-contrast: var(--uui-color-default-contrast,#fff);
      }
      :host([color='positive']) #button {
        --color: var(--uui-color-positive,#0b8152);
        --color-standalone: var(--uui-color-positive-standalone,rgb(
    10,
    115,
    73
  ));
        --color-emphasis: var(--uui-color-positive-emphasis,rgb(
    13,
    155,
    98
  ));
        --color-contrast: var(--uui-color-positive-contrast,#fff);
      }
      :host([color='warning']) #button {
        --color: var(--uui-color-warning,#fbd142);
        --color-standalone: var(--uui-color-warning-standalone,#a17700);
        --color-emphasis: var(--uui-color-warning-emphasis,rgb(
    251,
    224,
    101
  ));
        --color-contrast: var(--uui-color-warning-contrast,#000);
      }
      :host([color='danger']) #button {
        --color: var(--uui-color-danger,#d42054);
        --color-standalone: var(--uui-color-danger-standalone,rgb(
    191,
    33,
    78
  ));
        --color-emphasis: var(--uui-color-danger-emphasis,rgb(
    226,
    60,
    107
  ));
        --color-contrast: var(--uui-color-danger-contrast,white);
      }
      :host([color='invalid']) #button {
        --color: var(--uui-color-invalid,#d42054);
        --color-standalone: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
        --color-emphasis: var(--uui-color-invalid-emphasis,rgb(
    226,
    60,
    107
  ));
        --color-contrast: var(--uui-color-invalid-contrast,white);
      }
      :host([disabled]) #button {
        --color: var(--uui-color-disabled,#f3f3f5);
        --color-standalone: var(--uui-color-disabled-contrast,#c4c4c4);
        --color-emphasis: var(--uui-color-disabled,#f3f3f5);
        --color-contrast: var(--uui-color-disabled-contrast,#c4c4c4);

        cursor: default;
      }

      /** Button look attribute: */
      /* DEFAULT */
      #button {
        background-color: var(--uui-button-background-color, transparent);
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(--uui-button-border-color, transparent);
      }
      :host(:not([disabled]):hover) #button {
        background-color: var(
          --uui-button-background-color-hover,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover, transparent);
      }
      :host([disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          transparent
        );
        color: var(--uui-button-contrast-disabled, var(--color-contrast));
        border-color: var(--uui-button-border-color-disabled, transparent);
      }

      /* PRIMARY */
      :host([look='primary']) #button {
        background-color: var(--uui-button-background-color, var(--color));
        color: var(--uui-button-contrast, var(--color-contrast));
        border-color: var(--uui-button-border-color, transparent);

        /* special for primary: */
        font-weight: var(--uui-button-font-weight, 700);
      }

      :host([look='primary']:hover) #button {
        background-color: var(
          --uui-button-background-color-hover,
          var(--color-emphasis)
        );
        color: var(--uui-button-contrast-hover, var(--color-contrast));
        border-color: var(--uui-button-border-color-hover, transparent);
      }

      /* special outline offset tof primary style so you can see the outline */
      :host([look='primary']) #button:focus-visible {
        outline-offset: 2px;
      }

      :host([look='primary'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          var(--color)
        );
        color: var(--uui-button-contrast-disabled, var(--color-contrast));
        border-color: var(--uui-button-border-color-disabled, var(--color));
      }
      /* SECONDARY */
      :host([look='secondary']) #button {
        background-color: var(
          --uui-button-background-color,
          var(--uui-color-surface-alt,#f3f3f5)
        );
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(--uui-button-border-color, transparent);

        /* special for secondary: */
        font-weight: var(--uui-button-font-weight, 700);
      }
      :host([look='secondary']:hover) #button {
        background-color: var(
          --uui-button-background-color-hover,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover, transparent);
      }
      :host([look='secondary'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          var(--color)
        );
        color: var(--uui-button-contrast-disabled, var(--color-contrast));
        border-color: var(--uui-button-border-color-disabled, var(--color));
      }

      /* OUTLINE */
      :host([look='outline']) #button {
        background-color: var(--uui-button-background-color, transparent);
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(
          --uui-button-border-color,
          var(--uui-color-border-standalone,#c2c2c2)
        );

        /* special for outline: */
        font-weight: var(--uui-button-font-weight, 700);
      }
      :host([look='outline']:not([disabled]):hover) #button {
        background-color: var(--uui-button-background-color-hover, transparent);
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover);
      }
      :host([look='outline'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          transparent
        );
        color: var(--uui-button-contrast-disabled, var(--color-standalone));
        border-color: var(
          --uui-button-border-color-disabled,
          var(--color-standalone)
        );
      }

      /* PLACEHOLDER */
      :host([look='placeholder']) #button {
        border-style: dashed;
        background-color: var(--uui-button-background-color, transparent);
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(
          --uui-button-border-color,
          var(--uui-color-border-standalone,#c2c2c2)
        );
      }
      :host([look='placeholder']:not([disabled]):hover) #button {
        background-color: var(--uui-button-background-color-hover, transparent);
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover);
      }
      :host([look='placeholder'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          var(--color)
        );
        color: var(--uui-button-contrast-disabled, var(--color-standalone));
        border-color: var(
          --uui-button-border-color-disabled,
          var(--color-standalone)
        );
      }
    `];Nt([a({type:String,reflect:!0})],lt.prototype,"type",2);Nt([a({type:Boolean,reflect:!0})],lt.prototype,"disabled",2);Nt([a({reflect:!0})],lt.prototype,"look",2);Nt([a({reflect:!0})],lt.prototype,"color",2);Nt([a({type:Boolean,reflect:!0})],lt.prototype,"compact",2);Nt([a({type:String,reflect:!0})],lt.prototype,"state",2);Nt([a({type:String})],lt.prototype,"href",2);Nt([a({type:String})],lt.prototype,"target",2);Nt([a({type:String})],lt.prototype,"rel",2);Nt([E("#button")],lt.prototype,"_button",2);lt=Nt([h("uui-button")],lt);var Ae=class extends k{constructor(){super(...arguments),this.text=null}};Ae.COPIED="copied";Ae.COPYING="copying";var wd=Object.defineProperty,kd=Object.getOwnPropertyDescriptor,tu=t=>{throw TypeError(t)},Go=(t,e,i,o)=>{for(var r=o>1?void 0:o?kd(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&wd(e,i,r),r},eu=(t,e,i)=>e.has(t)||tu("Cannot "+i),Cn=(t,e,i)=>(eu(t,e,"read from private field"),i?i.call(t):e.get(t)),Jl=(t,e,i)=>e.has(t)?tu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Ed=(t,e,i,o)=>(eu(t,e,"write to private field"),e.set(t,i),i),Mr,$n,zi=class extends lt{constructor(){super(),this.text="",this.copyFrom="",this.animationStateDelay=250,Jl(this,Mr),Jl(this,$n,async()=>{this.state="waiting";let t=this.text;if(this.copyFrom){let i=document.getElementById(this.copyFrom);if(i)"value"in i?t=i.value:t=i.textContent??i.innerText??"";else{console.error(`Element ID ${this.copyFrom} not found to copy from`),this.state="failed";return}}let e=new Ae(Ae.COPYING);e.text=t,this.dispatchEvent(e),e.text!=null&&(t=e.text);try{await navigator.clipboard.writeText(t);let i=new Ae(Ae.COPIED);i.text=t,this.dispatchEvent(i),Ed(this,Mr,setTimeout(()=>{this.state="success"},this.animationStateDelay))}catch(i){this.state="failed",console.error("Error copying to clipboard",i)}}),y(this,"uui-icon"),this.addEventListener("click",Cn(this,$n))}disconnectedCallback(){super.disconnectedCallback(),Cn(this,Mr)&&clearTimeout(Cn(this,Mr))}renderLabel(){return l`
      <slot class="label">
        <uui-icon name="copy"></uui-icon>
      </slot>
    `}};Mr=new WeakMap;$n=new WeakMap;zi.styles=lt.styles;Go([a({type:String})],zi.prototype,"text",2);Go([a({type:String,attribute:"copy-from"})],zi.prototype,"copyFrom",2);Go([a({type:Number,attribute:"animation-state-delay"})],zi.prototype,"animationStateDelay",2);zi=Go([h("uui-button-copy-text")],zi);var ni=class extends k{};ni.OPEN="open";var Cd=Object.defineProperty,$d=Object.getOwnPropertyDescriptor,Di=(t,e,i,o)=>{for(var r=o>1?void 0:o?$d(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Cd(e,i,r),r},q=class extends $e(Ot(d)){constructor(){super(...arguments),this.disabled=!1,this.error=!1}handleOpenClick(t){this.disabled||(t.stopPropagation(),this.dispatchEvent(new ni(ni.OPEN)))}handleOpenKeydown(t){this.disabled||t.key==="Enter"&&(t.preventDefault(),t.stopPropagation(),this.dispatchEvent(new ni(ni.OPEN)))}render(){return l`<slot id="open-part"></slot>
      <div id="select-border"></div>`}};q.styles=[Ft,c`
      :host {
        position: relative;
        display: flex;
        width: 100%;
        justify-content: center;
        box-sizing: border-box;
        box-shadow: var(--uui-shadow-depth-1,0 1px 3px rgba(0,0,0,0.12) , 0 1px 2px rgba(0,0,0,0.24));
        border-radius: var(--uui-border-radius,3px);
        min-height: var(--uui-layout-medium);
        background-color: var(--uui-color-surface,#fff);
        --uui-card-border-width: 3px;
        transition: box-shadow 100ms ease-out;
      }

      :host([selectable]:focus-visible) {
        outline-color: var(--uui-color-focus,#3879ff);
        outline-width: var(--uui-card-border-width);
        outline-style: solid;
        outline-offset: var(--uui-card-border-width);
      }

      :host() * {
        /* TODO: implement globally shared outline style */
        outline-color: var(--uui-color-focus,#3879ff);
      }

      :host([error])::before {
        content: '';
        position: absolute;
        pointer-events: none;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        box-sizing: border-box;
        border: var(--uui-card-border-width) solid var(--uui-color-invalid,#d42054);
        border-radius: var(--uui-border-radius,3px);
      }

      button {
        font-size: inherit;
        font-family: inherit;
        border: 0;
        padding: 0;
        background-color: transparent;
        text-align: left;
        color: var(--uui-color-text,#060606);
      }

      a {
        text-decoration: none;
        color: inherit;
        line-height: initial;
      }

      button:focus,
      a:focus {
        outline-color: var(--uui-color-focus,#3879ff);
        outline-width: var(--uui-card-border-width);
        outline-style: solid;
        outline-offset: var(--uui-card-border-width);
        border-radius: var(--uui-border-radius,3px);
      }

      :host([selectable]) {
        cursor: pointer;
      }
      :host([selectable]) #select-border {
        position: absolute;
        z-index: 2;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        pointer-events: none;
        opacity: 0;
        transition: opacity 120ms;
      }
      :host([selectable]) #select-border::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 2px solid var(--uui-color-selected,#3544b1);
        border-radius: calc(var(--uui-border-radius,3px) + 2px);
        box-shadow:
          0 0 4px 0 var(--uui-color-selected,#3544b1),
          inset 0 0 2px 0 var(--uui-color-selected,#3544b1);
      }
      :host([selected]) #select-border {
        opacity: 1;
      }
      :host([selectable]:not([selected]):hover) #select-border {
        opacity: 0.33;
      }
      :host([selectable][selected]:hover) #select-border {
        opacity: 0.8;
      }

      :host([selectable]:not([selected])) #open-part:hover + #select-border {
        opacity: 0;
      }
      :host([selectable][selected]) #open-part:hover + #select-border {
        opacity: 1;
      }

      :host([selectable]:not([selected]):hover) #select-border::after {
        animation: not-selected--hover 1.2s infinite;
      }
      @keyframes not-selected--hover {
        0%,
        100% {
          opacity: 0.66;
        }
        50% {
          opacity: 1;
        }
      }

      :host([selectable][selected]:hover) #select-border::after {
        animation: selected--hover 1.4s infinite;
      }
      @keyframes selected--hover {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.66;
        }
      }
      :host([selectable]) #open-part:hover + #select-border::after {
        animation: none;
      }

      :host([select-only]) *,
      :host([select-only]) ::slotted(*) {
        pointer-events: none;
      }

      :host([disabled]) {
        background: var(--uui-color-disabled,#f3f3f5);
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
    `];Di([a({type:Boolean,reflect:!0,attribute:"disabled"})],q.prototype,"disabled",2);Di([a({type:Boolean,reflect:!0})],q.prototype,"error",2);Di([a({type:String})],q.prototype,"href",2);Di([a({type:String})],q.prototype,"target",2);Di([a({type:String})],q.prototype,"rel",2);q=Di([h("uui-card")],q);var Pd=Object.defineProperty,Sd=Object.getOwnPropertyDescriptor,iu=t=>{throw TypeError(t)},qo=(t,e,i,o)=>{for(var r=o>1?void 0:o?Sd(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Pd(e,i,r),r},Od=(t,e,i)=>e.has(t)||iu("Cannot "+i),Ad=(t,e,i)=>e.has(t)?iu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Lr=(t,e,i)=>(Od(t,e,"access private method"),i),ai,ru,ou,su,Pn,Ui=class extends q{constructor(){super(...arguments),Ad(this,ai),this.name=""}get background(){}set background(t){this.style.backgroundColor=t??""}render(){return l`
      ${Lr(this,ai,su).call(this)}
      ${this.href?Lr(this,ai,ou).call(this):Lr(this,ai,ru).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>

      <slot name="tag"></slot>
      <slot name="actions"></slot>
    `}};ai=new WeakSet;ru=function(){return l`
      <button
        id="open-part"
        class="uui-text"
        tabindex=${this.disabled?w:"0"}
        @click=${this.handleOpenClick}
        @keydown=${this.handleOpenKeydown}>
        ${Lr(this,ai,Pn).call(this)}
      </button>
    `};ou=function(){return l`
      <a
        id="open-part"
        class="uui-text"
        tabindex=${this.disabled?w:"0"}
        href=${x(this.disabled?void 0:this.href)}
        target=${x(this.target||void 0)}
        rel=${x(this.rel||x(this.target==="_blank"?"noopener noreferrer":void 0))}>
        ${Lr(this,ai,Pn).call(this)}
      </a>
    `};su=function(){return l`<div id="portrait">
      <slot></slot>
    </div> `};Pn=function(){return l`
      <div id="content">
        <span title="${this.name}" id="name">${this.name}</span>
        <small title="${this.description}">${this.description}<slot name="description"></slot></small>
      </div></div>
    `};Ui.styles=[...q.styles,c`
      :host {
        background-color: var(--uui-color-surface-alt,#f3f3f5);
      }

      slot[name='tag'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;
        z-index: 2;
      }

      slot[name='actions'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;
        z-index: 2;
        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:focus) slot[name='actions'],
      :host(:focus-within) slot[name='actions'],
      :host(:hover) slot[name='actions'] {
        opacity: 1;
      }

      #portrait {
        display: flex;
        justify-content: center;
        min-height: 150px;
        max-height: 150px;
        width: 100%;
        margin-bottom: var(--uui-size-layout-2,30px);
      }

      slot:not([name])::slotted(*) {
        align-self: center;
        border-radius: var(--uui-border-radius,3px);
        object-fit: cover;
        max-width: 100%;
        max-height: 100%;
        font-size: var(--uui-size-8,24px);
      }

      #open-part {
        position: absolute;
        z-index: 1;
        inset: 0;
        color: var(--uui-color-interactive,#1b264f);
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }

      :host([disabled]) #open-part {
        pointer-events: none;
        background: var(--uui-color-disabled,#f3f3f5);
        color: var(--uui-color-contrast-disabled);
      }

      #open-part:hover {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      #open-part:hover #name {
        text-decoration: underline;
      }
      #open-part #name,
      #open-part small {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow-wrap: anywhere;
      }

      :host([image]:not([image=''])) #open-part {
        transition: opacity 0.5s 0.5s;
        opacity: 0;
      }

      #content {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        font-family: inherit;
        font-size: var(--uui-type-small-size,12px);
        box-sizing: border-box;
        text-align: left;
        word-break: break-word;
        padding-top: var(--uui-size-space-3,9px);
      }

      #content::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        border-top: 1px solid var(--uui-color-divider,#f6f6f7);
        border-radius: 0 0 var(--uui-border-radius,3px) var(--uui-border-radius,3px);
        background-color: var(--uui-color-surface,#fff);
        pointer-events: none;
        opacity: 0.96;
      }

      :host(:focus) slot[name='actions'],
      :host(:focus-within) slot[name='actions'],
      :host(:hover) slot[name='actions'] {
        opacity: 1;
      }

      :host(
          [image]:not([image='']):hover,
          [image]:not([image='']):focus,
          [image]:not([image='']):focus-within,
          [selected][image]:not([image='']),
          [error][image]:not([image=''])
        )
        #open-part {
        opacity: 1;
        transition-duration: 120ms;
        transition-delay: 0s;
      }

      :host([selectable]) #open-part {
        inset: var(--uui-size-space-3,9px) var(--uui-size-space-4,12px);
      }
      :host(:not([selectable])) #content {
        padding: var(--uui-size-space-3,9px) var(--uui-size-space-4,12px);
      }
      :host([selectable]) #content::before {
        inset: calc(var(--uui-size-space-3,9px) * -1)
          calc(var(--uui-size-space-4,12px) * -1);
        top: 0;
      }
    `];qo([a({type:String})],Ui.prototype,"name",2);qo([a({type:String})],Ui.prototype,"description",2);qo([a({type:String,attribute:"background"})],Ui.prototype,"background",1);Ui=qo([h("uui-card-block-type")],Ui);var Id=Object.defineProperty,Md=Object.getOwnPropertyDescriptor,nu=t=>{throw TypeError(t)},Xo=(t,e,i,o)=>{for(var r=o>1?void 0:o?Md(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Id(e,i,r),r},Ld=(t,e,i)=>e.has(t)||nu("Cannot "+i),zd=(t,e,i)=>e.has(t)?nu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Ko=(t,e,i)=>(Ld(t,e,"access private method"),i),Ti,Sn,au,lu,Vi=class extends q{constructor(){super(...arguments),zd(this,Ti),this.name="",this.detail="",this._iconSlotHasContent=!1,this.fallbackIcon=`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    id="icon">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
  </svg>`}_onSlotIconChange(t){this._iconSlotHasContent=t.target.assignedNodes({flatten:!0}).length>0}_renderFallbackIcon(){return y(this,"uui-icon"),l`<uui-icon .svg="${this.fallbackIcon}"></uui-icon>`}renderDetail(){return l`<small id="detail"
        >${this.detail}<slot name="detail"></slot></small
      ><slot id="default"></slot>`}render(){return l`
      ${this.href?Ko(this,Ti,lu).call(this):Ko(this,Ti,au).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>

      <slot name="tag"></slot>
      <slot name="actions"></slot>
    `}};Ti=new WeakSet;Sn=function(){return l`
      <span id="content" class="uui-text">
        <span id="item">
          <span id="icon">
            <slot name="icon" @slotchange=${this._onSlotIconChange}></slot>
            ${this._iconSlotHasContent===!1?this._renderFallbackIcon():""}
          </span>
          <div title="${this.name}" id="name">
            ${this.name}<slot name="name"></slot>
          </div>
        </span>
        ${this.renderDetail()}
      </span>
    `};au=function(){return l`<button
      id="open-part"
      tabindex=${this.disabled?w:0}
      @click=${this.handleOpenClick}
      @keydown=${this.handleOpenKeydown}>
      ${Ko(this,Ti,Sn).call(this)}
    </button>`};lu=function(){return l`<a
      id="open-part"
      tabindex=${this.disabled?w:0}
      href=${x(this.disabled?void 0:this.href)}
      target=${x(this.target||void 0)}
      rel=${x(this.rel||x(this.target==="_blank"?"noopener noreferrer":void 0))}>
      ${Ko(this,Ti,Sn).call(this)}
    </a>`};Vi.styles=[...q.styles,c`
      :host {
        min-width: 250px;
        flex-direction: column;
        justify-content: space-between;
      }

      slot[name='tag'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;
      }

      slot[name='actions'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;

        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:focus) slot[name='actions'],
      :host(:focus-within) slot[name='actions'],
      :host(:hover) slot[name='actions'] {
        opacity: 1;
      }

      slot:not([name]) {
        display: block;
        margin: var(--uui-size-1,3px);
        margin-top: var(--uui-size-3,9px);
      }

      slot:not([name])::slotted(*) {
        font-size: var(--uui-type-small-size,12px);
        line-height: calc(2 * var(--uui-size-3,9px));
      }

      #open-part {
        display: flex;
        position: relative;
        align-items: center;
        cursor: pointer;
        flex-grow: 1;
        padding: var(--uui-size-space-4,12px) var(--uui-size-space-5,18px);
      }

      #open-part #name {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow-wrap: anywhere;
      }

      #content {
        align-self: stretch;
        display: flex;
        flex-direction: column;
      }

      #item {
        position: relative;
        display: flex;
        align-self: stretch;
        line-height: normal;
        align-items: center;
        margin-top: var(--uui-size-1,3px);
      }

      #icon {
        font-size: 1.2em;
        margin-right: var(--uui-size-1,3px);
      }

      :host([selectable]) #open-part {
        padding: 0;
        margin: var(--uui-size-space-4,12px) var(--uui-size-space-5,18px);
      }

      :host([disabled]) #name {
        pointer-events: none;
      }

      :host(:not([disabled])) #open-part:hover #icon {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      :host(:not([disabled])) #open-part:hover #name {
        text-decoration: underline;
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      :host(:not([disabled])) #open-part:hover #detail {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      :host(:not([disabled])) #open-part:hover #default {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
    `];Xo([a({type:String})],Vi.prototype,"name",2);Xo([a({type:String})],Vi.prototype,"detail",2);Xo([v()],Vi.prototype,"_iconSlotHasContent",2);Vi=Xo([h("uui-card-content-node")],Vi);var Dd=Object.defineProperty,Ud=Object.getOwnPropertyDescriptor,uu=t=>{throw TypeError(t)},zr=(t,e,i,o)=>{for(var r=o>1?void 0:o?Ud(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Dd(e,i,r),r},Td=(t,e,i)=>e.has(t)||uu("Cannot "+i),Vd=(t,e,i)=>e.has(t)?uu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Yo=(t,e,i)=>(Td(t,e,"access private method"),i),Ni,cu,hu,On,li=class extends q{constructor(){super(...arguments),Vd(this,Ni),this.name="",this.fileExt="",this.hasPreview=!1}connectedCallback(){super.connectedCallback(),y(this,"uui-symbol-folder"),y(this,"uui-symbol-file")}queryPreviews(t){this.hasPreview=t.composedPath()[0].assignedElements({flatten:!0}).length>0}renderMedia(){return this.hasPreview===!0?"":this.fileExt===""?l`<uui-symbol-folder id="entity-symbol"></uui-symbol-folder>`:l`<uui-symbol-file
      id="entity-symbol"
      type="${this.fileExt}"></uui-symbol-file>`}render(){return l` ${this.renderMedia()}
      <slot @slotchange=${this.queryPreviews}></slot>
      ${this.href?Yo(this,Ni,hu).call(this):Yo(this,Ni,cu).call(this)}
      <!-- Select border must be right after .open-part -->
      <div id="select-border"></div>

      <slot name="tag"></slot>
      <slot name="actions"></slot>`}};Ni=new WeakSet;cu=function(){return l`
      <button
        id="open-part"
        tabindex=${this.disabled?w:"0"}
        @click=${this.handleOpenClick}
        @keydown=${this.handleOpenKeydown}>
        ${Yo(this,Ni,On).call(this)}
      </button>
    `};hu=function(){return l`
      <a
        id="open-part"
        tabindex=${this.disabled?w:"0"}
        href=${x(this.disabled?void 0:this.href)}
        target=${x(this.target||void 0)}
        rel=${x(this.rel||x(this.target==="_blank"?"noopener noreferrer":void 0))}>
        ${Yo(this,Ni,On).call(this)}
      </a>
    `};On=function(){return l`
      <div id="content" class="uui-text">
        <!--
        TODO: Implement info box when pop-out is ready
        -->
        <span id="name" title="${this.name}">${this.name}</span>
        <small id="detail">${this.detail}<slot name="detail"></slot></small>
      </div>
    `};li.styles=[...q.styles,c`
      #entity-symbol {
        align-self: center;
        width: 60%;
        margin-bottom: var(--uui-size-layout-1,24px);
        padding: var(--uui-size-space-6,24px);
      }

      slot[name='tag'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;
        z-index: 2;
      }

      slot[name='actions'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;
        z-index: 2;
        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:focus) slot[name='actions'],
      :host(:focus-within) slot[name='actions'],
      :host(:hover) slot[name='actions'] {
        opacity: 1;
      }

      slot:not([name])::slotted(*) {
        align-self: center;
        border-radius: var(--uui-border-radius,3px);
        object-fit: cover;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }

      #open-part {
        position: absolute;
        z-index: 1;
        inset: 0;
        color: var(--uui-color-interactive,#1b264f);
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }

      :host([disabled]) #open-part {
        pointer-events: none;
        color: var(--uui-color-contrast-disabled);
      }

      #open-part:hover {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      #open-part:hover #name {
        text-decoration: underline;
      }

      #open-part #name {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow-wrap: anywhere;
      }

      :host([image]:not([image=''])) #open-part {
        transition: opacity 0.5s 0.5s;
        opacity: 0;
      }

      #content {
        position: relative;
        display: flex;
        width: 100%;
        flex-direction: column;
        font-family: inherit;
        box-sizing: border-box;
        text-align: left;
        word-break: break-word;
        padding-top: var(--uui-size-space-3,9px);
      }

      #content::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        border-top: 1px solid var(--uui-color-divider,#f6f6f7);
        border-radius: 0 0 var(--uui-border-radius,3px) var(--uui-border-radius,3px);
        background-color: var(--uui-color-surface,#fff);
        pointer-events: none;
        opacity: 0.96;
      }

      #detail {
        opacity: 0.6;
      }

      :host(
          [image]:not([image='']):hover,
          [image]:not([image='']):focus,
          [image]:not([image='']):focus-within,
          [selected][image]:not([image='']),
          [error][image]:not([image=''])
        )
        #open-part {
        opacity: 1;
        transition-duration: 120ms;
        transition-delay: 0s;
      }

      :host([selectable]) #open-part {
        inset: var(--uui-size-space-3,9px) var(--uui-size-space-4,12px);
      }
      :host(:not([selectable])) #content {
        padding: var(--uui-size-space-3,9px) var(--uui-size-space-4,12px);
      }
      :host([selectable]) #content::before {
        inset: calc(var(--uui-size-space-3,9px) * -1)
          calc(var(--uui-size-space-4,12px) * -1);
        top: 0;
      }

      /*
      #info-icon {
        margin-right: var(--uui-size-2);
        display: flex;
        height: var(--uui-size-8);
      }
      */
    `];zr([a({type:String})],li.prototype,"name",2);zr([a({type:String})],li.prototype,"detail",2);zr([a({type:String,attribute:"file-ext"})],li.prototype,"fileExt",2);zr([v()],li.prototype,"hasPreview",2);li=zr([h("uui-card-media")],li);var Nd=Object.defineProperty,Hd=Object.getOwnPropertyDescriptor,du=t=>{throw TypeError(t)},An=(t,e,i,o)=>{for(var r=o>1?void 0:o?Hd(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Nd(e,i,r),r},Bd=(t,e,i)=>e.has(t)||du("Cannot "+i),jd=(t,e,i)=>e.has(t)?du("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Zo=(t,e,i)=>(Bd(t,e,"access private method"),i),Hi,pu,fu,In,Dr=class extends q{constructor(){super(...arguments),jd(this,Hi),this.name="",this._avatarSlotHasContent=!1,this._avatarSlotChanged=t=>{this._avatarSlotHasContent=jl(t.target)}}connectedCallback(){super.connectedCallback(),y(this,"uui-avatar")}render(){return l`
      ${this.href?Zo(this,Hi,fu).call(this):Zo(this,Hi,pu).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>
      <slot name="tag"></slot>
      <slot name="actions"></slot>
    `}};Hi=new WeakSet;pu=function(){return l`<div
      id="open-part"
      tabindex=${this.disabled?w:"0"}
      @click=${this.handleOpenClick}
      @keydown=${this.handleOpenKeydown}>
      ${Zo(this,Hi,In).call(this)}
    </div>`};fu=function(){return l`<a
      id="open-part"
      tabindex=${this.disabled?w:"0"}
      href=${x(this.disabled?void 0:this.href)}
      target=${x(this.target||void 0)}
      rel=${x(this.rel||x(this.target==="_blank"?"noopener noreferrer":void 0))}>
      ${Zo(this,Hi,In).call(this)}
    </a>`};In=function(){return l`<div id="content">
      ${this._avatarSlotHasContent?w:l`<uui-avatar
            class="avatar"
            name=${this.name}
            size="m"></uui-avatar>`}
      <slot
        name="avatar"
        class="avatar"
        @slotchange=${this._avatarSlotChanged}></slot>
      <span title="${this.name}">${this.name}</span>
      <slot></slot>
    </div>`};Dr.styles=[...q.styles,c`
      :host {
        min-width: 250px;
      }

      slot:not([name])::slotted(*) {
        font-size: var(--uui-type-small-size,12px);
        line-height: var(--uui-size-6,18px);
      }

      ::slotted(*) {
        text-align: center;
      }

      slot[name='tag'] {
        position: absolute;
        top: 6px;
        right: 6px;
        display: flex;
        justify-content: right;
      }

      slot[name='actions'] {
        position: absolute;
        top: var(--uui-size-space-4,12px);
        right: var(--uui-size-space-4,12px);
        display: flex;
        justify-content: right;

        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:focus) slot[name='actions'],
      :host(:focus-within) slot[name='actions'],
      :host(:hover) slot[name='actions'] {
        opacity: 1;
      }

      #open-part {
        cursor: pointer;
        flex-grow: 1;
        padding: var(--uui-size-space-5,18px) var(--uui-size-space-4,12px);
      }

      :host([disabled]) #open-part {
        pointer-events: none;
      }

      #open-part:hover #content {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      #open-part:hover #content > span {
        text-decoration: underline;
      }

      :host([selectable]) #open-part {
        padding: 0;
        margin: var(--uui-size-space-5,18px) var(--uui-size-space-4,12px);
      }

      #content {
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        margin: 0 0 3px 0;
        height: 100%;
      }

      #content > span {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: center;
        margin-top: 3px;
        font-weight: 700;
        overflow-wrap: anywhere;
      }

      .avatar {
        font-size: 1.5em;
        margin-top: var(--uui-size-space-1,3px);
        margin-bottom: var(--uui-size-space-2,6px);
      }
    `];An([a({type:String})],Dr.prototype,"name",2);An([v()],Dr.prototype,"_avatarSlotHasContent",2);Dr=An([h("uui-card-user")],Dr);var Rd=Object.defineProperty,Wd=Object.getOwnPropertyDescriptor,mu=(t,e,i,o)=>{for(var r=o>1?void 0:o?Wd(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Rd(e,i,r),r},Qo=class extends d{constructor(){super(),this.open=!1,console.error("\xB4uui-caret\xB4 is deprecated, please use \xB4uui-symbol-expand\xB4 or \xB4uui-symbol-sort\xB4")}render(){return l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="m4 9 8 8 8-8"></path>
    </svg>`}};Qo.styles=[c`
      :host {
        display: inline-block;
        width: 12px;
        vertical-align: middle;
      }

      svg {
        transform-origin: 50% 50%;
        transition: transform 100ms cubic-bezier(0.1, 0, 0.9, 1);

      :host([open]) svg {
        transform: rotate(180deg);
      }
    `];mu([a({type:Boolean,reflect:!0})],Qo.prototype,"open",2);Qo=mu([h("uui-caret")],Qo);var Fd=Object.getOwnPropertyDescriptor,Gd=(t,e,i,o)=>{for(var r=o>1?void 0:o?Fd(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(r)||r);return r},Jo=class extends pt{renderCheckbox(){return l`
      <div id="ticker">
        <div id="icon-check">
          ${this.indeterminate?ql:Oe}
        </div>
      </div>
    `}};Jo.formAssociated=!0;Jo.styles=[...pt.styles,Pe,c`
      :host {
        --uui-checkbox-size: 18px;
      }

      #ticker {
        position: relative;
        grid-area: 'input';
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;

        box-sizing: border-box;
        width: var(--uui-checkbox-size);
        height: var(--uui-checkbox-size);
        border-radius: var(
          --uui-checkbox-border-radius,
          var(--uui-border-radius,3px)
        );

        color: var(--uui-toggle-color, var(--uui-color-selected-contrast,#fff));
        background-color: var(
          --uui-toggle-background-color,
          var(--uui-color-surface,#fff)
        );
        border: 1px solid
          var(--uui-checkbox-border-color, var(--uui-color-border-standalone,#c2c2c2));
        font-size: calc(var(--uui-checkbox-size) * 0.7);
      }
      label:hover input:not([disabled]) + #ticker {
        border-color: var(
          --uui-checkbox-border-color-hover,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
        background-color: var(
          --uui-checkbox-background-color-hover,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
      }
      label:focus #ticker {
        border-color: var(
          --uui-checkbox-border-color-focus,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
        background-color: var(
          --uui-checkbox-background-color-focus,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
      }
      input:checked:not([disabled]) + #ticker,
      input:indeterminate:not([disabled]) + #ticker {
        border-color: var(--uui-color-selected,#3544b1);
      }

      label:hover input:checked:not([disabled]) + #ticker,
      label:hover input:indeterminate:not([disabled]) + #ticker {
        border-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      label:focus input:checked + #ticker,
      label:focus input:indeterminate + #ticker {
        border-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      #icon-check {
        position: absolute;
        vertical-align: middle;
        width: 1em;
        height: 1em;
        line-height: 0;
        transition:
          fill 120ms,
          opacity 120ms;
        color: var(--uui-color-selected-contrast,#fff);
        opacity: 0;
      }

      #ticker::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border-radius: calc(
          var(--uui-checkbox-border-radius, var(--uui-border-radius,3px)) * 0.5
        );
        background-color: var(--uui-color-selected,#3544b1);
        transition:
          transform 120ms ease,
          opacity 120ms,
          background-color 120ms;
        transform: scale(0);
        opacity: 0;
      }
      label:hover input:checked:not([disabled]) + #ticker::before,
      label:hover input:indeterminate:not([disabled]) + #ticker::before {
        background-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      input:checked + #ticker::before,
      input:indeterminate + #ticker::before {
        transform: scale(1);
        opacity: 1;
      }
      input:checked + #ticker #icon-check,
      input:indeterminate + #ticker #icon-check {
        opacity: 1;
      }
      label:focus input:checked + #ticker,
      label:focus input:indeterminate + #ticker {
        background-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      input:focus + #ticker {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }

      :host(:not([disabled], [readonly]))
        label:active
        input:checked
        + #ticker::before {
        /** Stretch when mouse down */
        transform: scale(0.9);
      }

      :host(:not([disabled], [readonly]))
        label:active
        input:indeterminate
        + #ticker::before {
        /** Stretch when mouse down */
        transform: scale(0.9);
      }

      :host(:not([pristine]):invalid) #ticker,
      :host(:not([pristine]):invalid) label:hover #ticker,
      :host(:not([pristine]):invalid) label:hover input:checked:not([disabled]) + #ticker,
      :host(:not([pristine]):invalid) label:hover input:indeterminate:not([disabled]) + #ticker,
      :host(:not([pristine]):invalid) label:focus input:checked + #ticker,
      :host(:not([pristine]):invalid) label:focus input:indeterminate + #ticker,
      /* polyfill support */
      :host(:not([pristine])[internals-invalid]) #ticker,
      :host(:not([pristine])[internals-invalid]) label:hover #ticker,
      :host(:not([pristine])[internals-invalid]) label:hover input:checked:not([disabled]) + #ticker,
      :host(:not([pristine])[internals-invalid]) label:hover input:indeterminate:not([disabled]) + #ticker,
      :host(:not([pristine])[internals-invalid]) label:focus input:checked + #ticker,
      :host(:not([pristine])[internals-invalid]) label:focus input:indeterminate + #ticker {
        border: 1px solid var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }

      :host([disabled]) #ticker {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
      :host([disabled]) input:checked + #ticker {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
      :host([disabled]) input:indeterminate + #ticker {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
      :host([disabled]) #ticker::before {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
      :host([disabled]) #ticker #icon-check {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) label:active #ticker {
        animation: ${Se};
      }
      :host([disabled]) input:checked + #ticker #icon-check,
      :host([disabled]) input:indeterminate + #ticker #icon-check {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
    `];Jo=Gd([h("uui-checkbox")],Jo);var Ur=kt(class extends _t{constructor(t){if(super(t),t.type!==it.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(let o in e)e[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(e)}let i=t.element.classList;for(let o of this.st)o in e||(i.remove(o),this.st.delete(o));for(let o in e){let r=!!e[o];r===this.st.has(o)||this.nt?.has(o)||(r?(i.add(o),this.st.add(o)):(i.remove(o),this.st.delete(o)))}return W}});var qd={grad:.9,turn:360,rad:360/(2*Math.PI)},ce=function(t){return typeof t=="string"?t.length>0:typeof t=="number"},Y=function(t,e,i){return e===void 0&&(e=0),i===void 0&&(i=Math.pow(10,e)),Math.round(i*t)/i+0},Mt=function(t,e,i){return e===void 0&&(e=0),i===void 0&&(i=1),t>i?i:t>e?t:e},Eu=function(t){return(t=isFinite(t)?t%360:0)>0?t:t+360},vu=function(t){return{r:Mt(t.r,0,255),g:Mt(t.g,0,255),b:Mt(t.b,0,255),a:Mt(t.a)}},Mn=function(t){return{r:Y(t.r),g:Y(t.g),b:Y(t.b),a:Y(t.a,3)}},Kd=/^#([0-9a-f]{3,8})$/i,ts=function(t){var e=t.toString(16);return e.length<2?"0"+e:e},Cu=function(t){var e=t.r,i=t.g,o=t.b,r=t.a,s=Math.max(e,i,o),n=s-Math.min(e,i,o),u=n?s===e?(i-o)/n:s===i?2+(o-e)/n:4+(e-i)/n:0;return{h:60*(u<0?u+6:u),s:s?n/s*100:0,v:s/255*100,a:r}},$u=function(t){var e=t.h,i=t.s,o=t.v,r=t.a;e=e/360*6,i/=100,o/=100;var s=Math.floor(e),n=o*(1-i),u=o*(1-(e-s)*i),p=o*(1-(1-e+s)*i),m=s%6;return{r:255*[o,u,n,n,p,o][m],g:255*[p,o,o,u,n,n][m],b:255*[n,n,p,o,o,u][m],a:r}},bu=function(t){return{h:Eu(t.h),s:Mt(t.s,0,100),l:Mt(t.l,0,100),a:Mt(t.a)}},gu=function(t){return{h:Y(t.h),s:Y(t.s),l:Y(t.l),a:Y(t.a,3)}},_u=function(t){return $u((i=(e=t).s,{h:e.h,s:(i*=((o=e.l)<50?o:100-o)/100)>0?2*i/(o+i)*100:0,v:o+i,a:e.a}));var e,i,o},Tr=function(t){return{h:(e=Cu(t)).h,s:(r=(200-(i=e.s))*(o=e.v)/100)>0&&r<200?i*o/100/(r<=100?r:200-r)*100:0,l:r/2,a:e.a};var e,i,o,r},Xd=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Yd=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Zd=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Qd=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,yu={string:[[function(t){var e=Kd.exec(t);return e?(t=e[1]).length<=4?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:t.length===4?Y(parseInt(t[3]+t[3],16)/255,2):1}:t.length===6||t.length===8?{r:parseInt(t.substr(0,2),16),g:parseInt(t.substr(2,2),16),b:parseInt(t.substr(4,2),16),a:t.length===8?Y(parseInt(t.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(t){var e=Zd.exec(t)||Qd.exec(t);return e?e[2]!==e[4]||e[4]!==e[6]?null:vu({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):null},"rgb"],[function(t){var e=Xd.exec(t)||Yd.exec(t);if(!e)return null;var i,o,r=bu({h:(i=e[1],o=e[2],o===void 0&&(o="deg"),Number(i)*(qd[o]||1)),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)});return _u(r)},"hsl"]],object:[[function(t){var e=t.r,i=t.g,o=t.b,r=t.a,s=r===void 0?1:r;return ce(e)&&ce(i)&&ce(o)?vu({r:Number(e),g:Number(i),b:Number(o),a:Number(s)}):null},"rgb"],[function(t){var e=t.h,i=t.s,o=t.l,r=t.a,s=r===void 0?1:r;if(!ce(e)||!ce(i)||!ce(o))return null;var n=bu({h:Number(e),s:Number(i),l:Number(o),a:Number(s)});return _u(n)},"hsl"],[function(t){var e=t.h,i=t.s,o=t.v,r=t.a,s=r===void 0?1:r;if(!ce(e)||!ce(i)||!ce(o))return null;var n=function(u){return{h:Eu(u.h),s:Mt(u.s,0,100),v:Mt(u.v,0,100),a:Mt(u.a)}}({h:Number(e),s:Number(i),v:Number(o),a:Number(s)});return $u(n)},"hsv"]]},xu=function(t,e){for(var i=0;i<e.length;i++){var o=e[i][0](t);if(o)return[o,e[i][1]]}return[null,void 0]},Jd=function(t){return typeof t=="string"?xu(t.trim(),yu.string):typeof t=="object"&&t!==null?xu(t,yu.object):[null,void 0]},Ln=function(t,e){var i=Tr(t);return{h:i.h,s:Mt(i.s+100*e,0,100),l:i.l,a:i.a}},zn=function(t){return(299*t.r+587*t.g+114*t.b)/1e3/255},wu=function(t,e){var i=Tr(t);return{h:i.h,s:i.s,l:Mt(i.l+100*e,0,100),a:i.a}},ku=function(){function t(e){this.parsed=Jd(e)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return t.prototype.isValid=function(){return this.parsed!==null},t.prototype.brightness=function(){return Y(zn(this.rgba),2)},t.prototype.isDark=function(){return zn(this.rgba)<.5},t.prototype.isLight=function(){return zn(this.rgba)>=.5},t.prototype.toHex=function(){return e=Mn(this.rgba),i=e.r,o=e.g,r=e.b,n=(s=e.a)<1?ts(Y(255*s)):"","#"+ts(i)+ts(o)+ts(r)+n;var e,i,o,r,s,n},t.prototype.toRgb=function(){return Mn(this.rgba)},t.prototype.toRgbString=function(){return e=Mn(this.rgba),i=e.r,o=e.g,r=e.b,(s=e.a)<1?"rgba("+i+", "+o+", "+r+", "+s+")":"rgb("+i+", "+o+", "+r+")";var e,i,o,r,s},t.prototype.toHsl=function(){return gu(Tr(this.rgba))},t.prototype.toHslString=function(){return e=gu(Tr(this.rgba)),i=e.h,o=e.s,r=e.l,(s=e.a)<1?"hsla("+i+", "+o+"%, "+r+"%, "+s+")":"hsl("+i+", "+o+"%, "+r+"%)";var e,i,o,r,s},t.prototype.toHsv=function(){return e=Cu(this.rgba),{h:Y(e.h),s:Y(e.s),v:Y(e.v),a:Y(e.a,3)};var e},t.prototype.invert=function(){return It({r:255-(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a});var e},t.prototype.saturate=function(e){return e===void 0&&(e=.1),It(Ln(this.rgba,e))},t.prototype.desaturate=function(e){return e===void 0&&(e=.1),It(Ln(this.rgba,-e))},t.prototype.grayscale=function(){return It(Ln(this.rgba,-1))},t.prototype.lighten=function(e){return e===void 0&&(e=.1),It(wu(this.rgba,e))},t.prototype.darken=function(e){return e===void 0&&(e=.1),It(wu(this.rgba,-e))},t.prototype.rotate=function(e){return e===void 0&&(e=15),this.hue(this.hue()+e)},t.prototype.alpha=function(e){return typeof e=="number"?It({r:(i=this.rgba).r,g:i.g,b:i.b,a:e}):Y(this.rgba.a,3);var i},t.prototype.hue=function(e){var i=Tr(this.rgba);return typeof e=="number"?It({h:e,s:i.s,l:i.l,a:i.a}):Y(i.h)},t.prototype.isEqual=function(e){return this.toHex()===It(e).toHex()},t}(),It=function(t){return t instanceof ku?t:new ku(t)},Vr=class extends k{constructor(e,i={}){super(e,{bubbles:!0,...i})}};Vr.CHANGE="change";var tp=Object.defineProperty,ep=Object.getOwnPropertyDescriptor,Xt=(t,e,i,o)=>{for(var r=o>1?void 0:o?ep(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&tp(e,i,r),r},Lt=class extends d{constructor(){super(...arguments),this.isDraggingGridHandle=!1,this.disabled=!1,this.readonly=!1,this.hue=0,this.saturation=0,this.lightness=0,this.brightness=0,this.alpha=100,this._value="#000"}get value(){return this._value}set value(t){let e=this._value;this._value=t,this.requestUpdate("value",e);try{let i=It(t);if(i.isValid()){let{h:o,s:r,l:s,a:n}=i.toHsl();o!==0&&(this.hue=o),this.lightness=s,this.saturation=r,this.brightness=this.getBrightness(s),this.alpha=n*100}}catch(i){console.error("Something went wrong parsing the color string.",i)}}handleGridDrag(t){if(this.disabled||this.readonly)return;let e=this.shadowRoot.querySelector(".color-area"),i=e.querySelector(".color-area__handle"),{width:o,height:r}=e.getBoundingClientRect();i.focus(),t.preventDefault(),t.stopPropagation(),this.isDraggingGridHandle=!0,Wo(e,{onMove:(s,n)=>{isNaN(s)||isNaN(n)||(this.saturation=O(s/o*100,0,100),this.brightness=O(100-n/r*100,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues())},onStop:()=>this.isDraggingGridHandle=!1,initialEvent:t})}handleGridKeyDown(t){if(this.disabled)return;let e=t.shiftKey?10:1;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=O(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=O(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=O(this.brightness+e,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=O(this.brightness-e,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues())}getBrightness(t){return O(-1*(200*t/(this.saturation-200)),0,100)}getLightness(t){return O((200-this.saturation)*t/100*5/10,0,100)}syncValues(){let t=It({h:this.hue,s:this.saturation,l:this.lightness,a:this.alpha/100});this._value=t.toRgbString(),this.dispatchEvent(new Vr(Vr.CHANGE))}getHexString(t,e,i,o=100){let r=It(`hsla(${t}, ${e}%, ${i}%, ${o/100})`);return r.isValid()?r.toHex():""}render(){let t=this.saturation,e=100-this.brightness;return l`
      <div
        part="grid"
        class="color-area"
        style=${at({backgroundColor:this.getHexString(this.hue,100,50)})}
        @mousedown=${this.handleGridDrag}
        @touchstart=${this.handleGridDrag}>
        <span
          part="grid-handle"
          class=${Ur({"color-area__handle":!0,"color-area__handle--dragging":this.isDraggingGridHandle})}
          style=${at({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.lightness,this.alpha)})}
          role="application"
          tabindex=${x(this.disabled?void 0:"0")}
          aria-label="HSB"
          @keydown=${this.handleGridKeyDown}></span>
      </div>
    `}};Lt.styles=[c`
      :host {
        display: inline-block;
        width: 280px;
        height: 200px;
      }

      :host([disabled]) {
        cursor: not-allowed;
      }

      :host([disabled]) .color-area {
        user-select: none;
        pointer-events: none;
        opacity: 0.55;
      }

      :host([readonly]) {
        pointer-events: none;
        cursor: default;
      }

      .color-area {
        position: relative;
        height: 100%;
        width: 100%;
        background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 100%
          ),
          linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
        box-sizing: border-box;
        cursor: crosshair;
        forced-color-adjust: none;
      }
      .color-area__handle {
        position: absolute;
        width: var(--uui-color-area-grid-handle-size, 16px);
        height: var(--uui-color-area-grid-handle-size, 16px);
        border-radius: 50%;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
        border: solid 2px white;
        margin-top: calc(var(--uui-color-area-grid-handle-size, 16px) / -2);
        margin-left: calc(var(--uui-color-area-grid-handle-size, 16px) / -2);
        transition: 150ms transform;
        box-sizing: inherit;
      }
      .color-area__handle--dragging {
        cursor: none;
        transform: scale(1.5);
      }
      .color-area__handle--empty {
        display: none;
      }
    `];Xt([v()],Lt.prototype,"isDraggingGridHandle",2);Xt([a({type:Boolean,reflect:!0})],Lt.prototype,"disabled",2);Xt([a({type:Boolean,reflect:!0})],Lt.prototype,"readonly",2);Xt([a({type:Number})],Lt.prototype,"hue",2);Xt([a({type:Number})],Lt.prototype,"saturation",2);Xt([a({type:Number})],Lt.prototype,"lightness",2);Xt([a({type:Number})],Lt.prototype,"brightness",2);Xt([a({type:Number})],Lt.prototype,"alpha",2);Xt([a({type:String})],Lt.prototype,"value",1);Lt=Xt([h("uui-color-area")],Lt);var{I:ip}=bl;var es=t=>t.strings===void 0,Pu=()=>document.createComment(""),Bi=(t,e,i)=>{let o=t._$AA.parentNode,r=e===void 0?t._$AB:e._$AA;if(i===void 0){let s=o.insertBefore(Pu(),r),n=o.insertBefore(Pu(),r);i=new ip(s,n,t,t.options)}else{let s=i._$AB.nextSibling,n=i._$AM,u=n!==t;if(u){let p;i._$AQ?.(t),i._$AM=t,i._$AP!==void 0&&(p=t._$AU)!==n._$AU&&i._$AP(p)}if(s!==r||u){let p=i._$AA;for(;p!==s;){let m=p.nextSibling;o.insertBefore(p,r),p=m}}}return i},Ie=(t,e,i=t)=>(t._$AI(e,i),t),rp={},is=(t,e=rp)=>t._$AH=e,Su=t=>t._$AH,rs=t=>{t._$AR(),t._$AA.remove()};var Ou=kt(class extends _t{constructor(t){if(super(t),t.type!==it.PROPERTY&&t.type!==it.ATTRIBUTE&&t.type!==it.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!es(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===W||e===w)return e;let i=t.element,o=t.name;if(t.type===it.PROPERTY){if(e===i[o])return W}else if(t.type===it.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(o))return W}else if(t.type===it.ATTRIBUTE&&i.getAttribute(o)===e+"")return W;return is(t),e}});var op={grad:.9,turn:360,rad:360/(2*Math.PI)},he=function(t){return typeof t=="string"?t.length>0:typeof t=="number"},Z=function(t,e,i){return e===void 0&&(e=0),i===void 0&&(i=Math.pow(10,e)),Math.round(i*t)/i+0},zt=function(t,e,i){return e===void 0&&(e=0),i===void 0&&(i=1),t>i?i:t>e?t:e},Vu=function(t){return(t=isFinite(t)?t%360:0)>0?t:t+360},Au=function(t){return{r:zt(t.r,0,255),g:zt(t.g,0,255),b:zt(t.b,0,255),a:zt(t.a)}},Dn=function(t){return{r:Z(t.r),g:Z(t.g),b:Z(t.b),a:Z(t.a,3)}},sp=/^#([0-9a-f]{3,8})$/i,os=function(t){var e=t.toString(16);return e.length<2?"0"+e:e},Nu=function(t){var e=t.r,i=t.g,o=t.b,r=t.a,s=Math.max(e,i,o),n=s-Math.min(e,i,o),u=n?s===e?(i-o)/n:s===i?2+(o-e)/n:4+(e-i)/n:0;return{h:60*(u<0?u+6:u),s:s?n/s*100:0,v:s/255*100,a:r}},Hu=function(t){var e=t.h,i=t.s,o=t.v,r=t.a;e=e/360*6,i/=100,o/=100;var s=Math.floor(e),n=o*(1-i),u=o*(1-(e-s)*i),p=o*(1-(1-e+s)*i),m=s%6;return{r:255*[o,u,n,n,p,o][m],g:255*[p,o,o,u,n,n][m],b:255*[n,n,p,o,o,u][m],a:r}},Iu=function(t){return{h:Vu(t.h),s:zt(t.s,0,100),l:zt(t.l,0,100),a:zt(t.a)}},Mu=function(t){return{h:Z(t.h),s:Z(t.s),l:Z(t.l),a:Z(t.a,3)}},Lu=function(t){return Hu((i=(e=t).s,{h:e.h,s:(i*=((o=e.l)<50?o:100-o)/100)>0?2*i/(o+i)*100:0,v:o+i,a:e.a}));var e,i,o},Nr=function(t){return{h:(e=Nu(t)).h,s:(r=(200-(i=e.s))*(o=e.v)/100)>0&&r<200?i*o/100/(r<=100?r:200-r)*100:0,l:r/2,a:e.a};var e,i,o,r},np=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,ap=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,lp=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,up=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Vn={string:[[function(t){var e=sp.exec(t);return e?(t=e[1]).length<=4?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:t.length===4?Z(parseInt(t[3]+t[3],16)/255,2):1}:t.length===6||t.length===8?{r:parseInt(t.substr(0,2),16),g:parseInt(t.substr(2,2),16),b:parseInt(t.substr(4,2),16),a:t.length===8?Z(parseInt(t.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(t){var e=lp.exec(t)||up.exec(t);return e?e[2]!==e[4]||e[4]!==e[6]?null:Au({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):null},"rgb"],[function(t){var e=np.exec(t)||ap.exec(t);if(!e)return null;var i,o,r=Iu({h:(i=e[1],o=e[2],o===void 0&&(o="deg"),Number(i)*(op[o]||1)),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)});return Lu(r)},"hsl"]],object:[[function(t){var e=t.r,i=t.g,o=t.b,r=t.a,s=r===void 0?1:r;return he(e)&&he(i)&&he(o)?Au({r:Number(e),g:Number(i),b:Number(o),a:Number(s)}):null},"rgb"],[function(t){var e=t.h,i=t.s,o=t.l,r=t.a,s=r===void 0?1:r;if(!he(e)||!he(i)||!he(o))return null;var n=Iu({h:Number(e),s:Number(i),l:Number(o),a:Number(s)});return Lu(n)},"hsl"],[function(t){var e=t.h,i=t.s,o=t.v,r=t.a,s=r===void 0?1:r;if(!he(e)||!he(i)||!he(o))return null;var n=function(u){return{h:Vu(u.h),s:zt(u.s,0,100),v:zt(u.v,0,100),a:zt(u.a)}}({h:Number(e),s:Number(i),v:Number(o),a:Number(s)});return Hu(n)},"hsv"]]},zu=function(t,e){for(var i=0;i<e.length;i++){var o=e[i][0](t);if(o)return[o,e[i][1]]}return[null,void 0]},cp=function(t){return typeof t=="string"?zu(t.trim(),Vn.string):typeof t=="object"&&t!==null?zu(t,Vn.object):[null,void 0]},Un=function(t,e){var i=Nr(t);return{h:i.h,s:zt(i.s+100*e,0,100),l:i.l,a:i.a}},Tn=function(t){return(299*t.r+587*t.g+114*t.b)/1e3/255},Du=function(t,e){var i=Nr(t);return{h:i.h,s:i.s,l:zt(i.l+100*e,0,100),a:i.a}},ss=function(){function t(e){this.parsed=cp(e)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return t.prototype.isValid=function(){return this.parsed!==null},t.prototype.brightness=function(){return Z(Tn(this.rgba),2)},t.prototype.isDark=function(){return Tn(this.rgba)<.5},t.prototype.isLight=function(){return Tn(this.rgba)>=.5},t.prototype.toHex=function(){return e=Dn(this.rgba),i=e.r,o=e.g,r=e.b,n=(s=e.a)<1?os(Z(255*s)):"","#"+os(i)+os(o)+os(r)+n;var e,i,o,r,s,n},t.prototype.toRgb=function(){return Dn(this.rgba)},t.prototype.toRgbString=function(){return e=Dn(this.rgba),i=e.r,o=e.g,r=e.b,(s=e.a)<1?"rgba("+i+", "+o+", "+r+", "+s+")":"rgb("+i+", "+o+", "+r+")";var e,i,o,r,s},t.prototype.toHsl=function(){return Mu(Nr(this.rgba))},t.prototype.toHslString=function(){return e=Mu(Nr(this.rgba)),i=e.h,o=e.s,r=e.l,(s=e.a)<1?"hsla("+i+", "+o+"%, "+r+"%, "+s+")":"hsl("+i+", "+o+"%, "+r+"%)";var e,i,o,r,s},t.prototype.toHsv=function(){return e=Nu(this.rgba),{h:Z(e.h),s:Z(e.s),v:Z(e.v),a:Z(e.a,3)};var e},t.prototype.invert=function(){return Ht({r:255-(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a});var e},t.prototype.saturate=function(e){return e===void 0&&(e=.1),Ht(Un(this.rgba,e))},t.prototype.desaturate=function(e){return e===void 0&&(e=.1),Ht(Un(this.rgba,-e))},t.prototype.grayscale=function(){return Ht(Un(this.rgba,-1))},t.prototype.lighten=function(e){return e===void 0&&(e=.1),Ht(Du(this.rgba,e))},t.prototype.darken=function(e){return e===void 0&&(e=.1),Ht(Du(this.rgba,-e))},t.prototype.rotate=function(e){return e===void 0&&(e=15),this.hue(this.hue()+e)},t.prototype.alpha=function(e){return typeof e=="number"?Ht({r:(i=this.rgba).r,g:i.g,b:i.b,a:e}):Z(this.rgba.a,3);var i},t.prototype.hue=function(e){var i=Nr(this.rgba);return typeof e=="number"?Ht({h:e,s:i.s,l:i.l,a:i.a}):Z(i.h)},t.prototype.isEqual=function(e){return this.toHex()===Ht(e).toHex()},t}(),Ht=function(t){return t instanceof ss?t:new ss(t)},Uu=[],hp=function(t){t.forEach(function(e){Uu.indexOf(e)<0&&(e(ss,Vn),Uu.push(e))})};function dp(t,e){var i={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},o={};for(var r in i)o[i[r]]=r;var s={};t.prototype.toName=function(n){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var u,p,m=o[this.toHex()];if(m)return m;if(n?.closest){var _=this.toRgb(),f=1/0,P="black";if(!s.length)for(var g in i)s[g]=new t(i[g]).toRgb();for(var $ in i){var V=(u=_,p=s[$],Math.pow(u.r-p.r,2)+Math.pow(u.g-p.g,2)+Math.pow(u.b-p.b,2));V<f&&(f=V,P=$)}return P}},e.string.push([function(n){var u=n.toLowerCase(),p=u==="transparent"?"#0000":i[u];return p?new t(p).toRgb():null},"name"])}var ui=class extends k{constructor(e,i={}){super(e,{bubbles:!0,...i})}};ui.CHANGE="change";var pp=Object.defineProperty,fp=Object.getOwnPropertyDescriptor,j=(t,e,i,o)=>{for(var r=o>1?void 0:o?fp(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&pp(e,i,r),r};hp([dp]);var Tu="EyeDropper"in window,N=class extends F("label",d){constructor(){super(...arguments),this._value="",this.inputValue="",this.hue=0,this.saturation=0,this.lightness=0,this.alpha=100,this._colord=Ht("hsl(0, 0%, 0%)"),this.format="hex",this.name="",this.size="medium",this.noFormatToggle=!1,this.inline=!1,this.disabled=!1,this.opacity=!1,this.readonly=!1,this.uppercase=!1,this.swatches=["#d0021b","#f5a623","#f8e71c","#8b572a","#7ed321","#417505","#bd10e0","#9013fe","#4a90e2","#50e3c2","#b8e986","#000","#444","#888","#ccc","#fff"]}set value(t){this.value!==t&&this.setColor(t),this._value=t}get value(){return this._value}connectedCallback(){super.connectedCallback(),y(this,"uui-icon"),y(this,"uui-icon-registry-essential"),y(this,"uui-input"),y(this,"uui-button"),y(this,"uui-button-group"),y(this,"uui-color-swatches"),y(this,"uui-color-swatch"),y(this,"uui-color-area"),y(this,"uui-color-slider"),y(this,"uui-popover-container")}getFormattedValue(t){let e=this.opacity?`${t}a`:t,i=this._colord.toHex(),o=i.length>7?i.substring(0,i.length-2):i,{r,g:s,b:n}=this._colord.toRgb(),{h:u,s:p,l:m}=this._colord.toHsl(),{v:_}=this._colord.toHsv(),f=this._colord.alpha();switch(e){case"hex":return this.setLetterCase(o);case"hexa":return this.setLetterCase(i);case"rgb":return this.setLetterCase(`rgb(${r}, ${s}, ${n})`);case"rgba":return this.setLetterCase(this._colord.toRgbString());case"hsl":return this.setLetterCase(`hsl(${u}, ${p}%, ${m}%)`);case"hsla":return this.setLetterCase(this._colord.toHslString());case"hsv":return this.setLetterCase(`hsv(${u}, ${p}%, ${m}%)`);case"hsva":return this.setLetterCase(`hsva(${u}, ${p}%, ${_}%, ${f})`);default:return""}}getBrightness(t){return O(-1*(200*t/(this.saturation-200)),0,100)}getLightness(t){return O((200-this.saturation)*t/100*5/10,0,100)}handleFormatToggle(){let t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this._syncValues()}handleAlphaChange(t){t.stopPropagation(),this._swatches?.resetSelection();let e=t.target,i={h:this.hue,s:this.saturation,l:this.lightness,a:Math.round(e.value)/100};this.setColor(i)}handleHueChange(t){t.stopPropagation(),this._swatches?.resetSelection();let i={h:t.target.value,s:this.saturation,l:this.lightness,a:this.alpha/100};this.setColor(i)}handleGridChange(t){t.stopPropagation(),this._swatches?.resetSelection();let e=t.target,i={h:this.hue,s:e.saturation,l:e.lightness,a:this.alpha/100};this.setColor(i)}handleInputChange(t){t.stopImmediatePropagation(),this._swatches?.resetSelection(),this.inputValue=this._input.value,this.setColor(this.inputValue)}handleInputKeyDown(t){t.stopImmediatePropagation(),t.key==="Enter"&&(this._swatches?.resetSelection(),this.inputValue=this._input.value,this.setColor(this.inputValue),setTimeout(()=>this._input.select()))}handleColorSwatchChange(t){t.stopImmediatePropagation();let e=t.target;this.setColor(e.value)}handleCopy(){navigator.clipboard.writeText(this._input.value).then(()=>{this._previewButton.classList.add("color-picker__preview-color--copied"),this._previewButton.addEventListener("animationend",()=>{this._previewButton.classList.remove("color-picker__preview-color--copied")})})}handleEyeDropper(){if(!Tu)return;new EyeDropper().open().then(e=>this.setColor(e.sRGBHex)).catch(()=>{})}setColor(t){if(t===this.value)return;if(!t)return this.alpha=100,this.inputValue="",this._value=t,this.dispatchEvent(new ui(ui.CHANGE)),!0;let e=new ss(t),{h:i,s:o,l:r,a:s}=e.toHsl();this.hue=i,this.saturation=o,this.lightness=r,this.alpha=this.opacity?s*100:100;let n=t;return n&&n.h&&(this.hue=n.h),this._colord=e,this._syncValues(),this.dispatchEvent(new ui(ui.CHANGE)),!0}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}getHexString(t,e,i,o=100){let r=Ht(`hsla(${t}, ${e}%, ${i}%, ${o/100})`);return r.isValid()?r.toHex():""}_syncValues(){this.inputValue=this.getFormattedValue(this.format),this._value=this.inputValue}_renderColorPicker(){return l`
      <div
        class=${Ur({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled})}
        aria-disabled=${this.disabled?"true":"false"}>
        <uui-color-area
          .value="${this.value}"
          .hue="${Math.round(this.hue)}"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          @change=${this.handleGridChange}>
        </uui-color-area>
        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <uui-color-slider
              label="hue"
              class="hue-slider"
              .value=${Math.round(this.hue)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              @change=${this.handleHueChange}>
            </uui-color-slider>
            ${this.opacity?l`
                  <uui-color-slider
                    label="alpha"
                    class="opacity-slider"
                    .value=${Math.round(this.alpha)}
                    type="opacity"
                    .color=${this.getHexString(this.hue,this.saturation,this.lightness)}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    @change=${this.handleAlphaChange}>
                  </uui-color-slider>
                `:""}
          </div>
          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            title="Copy"
            aria-label="Copy"
            style=${at({"--preview-color":`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`})}
            @click=${this.handleCopy}></button>
        </div>
        <div class="color-picker__user-input" aria-live="polite">
          <uui-input
            label="label"
            type="text"
            part="input"
            name=${this.name}
            autocomplete="off"
            autocapitalize="off"
            spellcheck="false"
            .value=${Ou(this.inputValue)}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            @keydown=${this.handleInputKeyDown}
            @change=${this.handleInputChange}>
          </uui-input>
          <uui-button-group>
            ${this.noFormatToggle?"":l`<uui-button
                  label="Toggle color format"
                  @click=${this.handleFormatToggle}
                  class="color-picker__toggle-format"
                  ?disabled=${this.disabled}
                  compact>
                  <span>${this.format}</span>
                </uui-button>`}
            ${Tu?l`<uui-button
                  label="Select a color"
                  ?disabled=${this.disabled||this.readonly}
                  @click=${this.handleEyeDropper}
                  compact>
                  <uui-icon-registry-essential>
                    <uui-icon name="colorpicker"></uui-icon>
                  </uui-icon-registry-essential>
                </uui-button>`:""}
          </uui-button-group>
        </div>
        ${this._renderSwatches()}
      </div>
    `}_renderSwatches(){return this.swatches?.length?l`<uui-color-swatches
      id="swatches"
      class="color-picker__swatches"
      label="Swatches"
      ?disabled=${this.disabled}
      ?readonly=${this.readonly}
      @change=${this.handleColorSwatchChange}>
      ${this.swatches.map(t=>l`<uui-color-swatch label="${t}" .value=${t}>
          </uui-color-swatch>`)}
    </uui-color-swatches>`:w}_renderPreviewButton(){return l`<button
        type="button"
        part="trigger"
        aria-label="${this.label||"Open Color picker"}"
        class=${Ur({"color-picker__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-picker__transparent-bg":!0})}
        style=${at({"--preview-color":`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`})}
        ?disabled=${this.disabled}
        aria-haspopup="true"
        aria-expanded="false"
        popovertarget="color-picker-popover"></button>
      <uui-popover-container id="color-picker-popover">
        ${this._renderColorPicker()}
      </uui-popover-container>`}render(){return this.inline?this._renderColorPicker():this._renderPreviewButton()}};N.styles=[c`
      :host {
        --uui-look-outline-border: #ddd;
        --uui-look-outline-border-hover: #aaa;
        font-size: 0.8rem;
        color: var(--uui-color-text,#060606);
        display: block;
        width: var(--uui-color-picker-width, 280px);
      }
      :host > button {
        cursor: pointer;
      }
      uui-popover-container {
        width: inherit;
      }
      .color-picker {
        width: 100%;
        background-color: var(--uui-color-surface,#fff);
        user-select: none;
        border: solid 1px var(--uui-color-border,#d8d7d9);
      }
      .color-picker__user-input {
        display: flex;
        padding: 0 0.75rem 0.75rem 0.75rem;
      }
      .color-picker__user-input uui-button {
        border: var(--uui-input-border-width, 1px) solid
          var(--uui-input-border-color, var(--uui-color-border,#d8d7d9));
        border-left: none;
      }
      .color-picker__preview,
      .color-picker__trigger {
        flex: 0 0 auto;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 2.25rem;
        height: 2.25rem;
        border: none;
        border-radius: 50%;
        background: none;
      }
      .color-picker__preview {
        cursor: copy;
        margin-left: 0.75rem;
        border-radius: 50%;
      }
      .color-picker__trigger[disabled] {
        cursor: not-allowed;
        opacity: 0.5;
      }
      .color-picker__preview::before,
      .color-picker__trigger::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
        background-color: var(--preview-color);
      }

      .color-dropdown__trigger--empty::before {
        background-color: transparent;
      }

      .color-picker__transparent-bg {
        border: 1px solid var(--uui-color-border,#d8d7d9);
        background-image: linear-gradient(
            45deg,
            var(--uui-palette-grey,#c4c4c4) 25%,
            transparent 25%
          ),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, var(--uui-palette-grey,#c4c4c4) 25%, transparent 25%);
        background-size: 10px 10px;
        background-position:
          0 0,
          0 0,
          -5px -5px,
          5px 5px;
      }

      .color-picker__preview-color--copied {
        animation: pulse 0.75s;
      }

      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 var(--uui-palette-space-cadet-light,rgb(
    38,
    53,
    110
  ));
        }
        70% {
          box-shadow: 0 0 0 0.5rem transparent;
        }
        100% {
          box-shadow: 0 0 0 0 transparent;
        }
      }

      .color-picker__controls {
        padding: 0.75rem;
        display: flex;
        align-items: center;
      }
      .color-picker__sliders {
        flex: 1 1 auto;
      }

      uui-color-slider:not(:last-of-type) {
        margin-bottom: 1rem;
      }

      .color-picker__toggle-format {
        min-width: 45px;
        --uui-button-font-size: 0.8rem;
      }
      .color-picker__toggle-format > span {
        text-transform: uppercase;
      }

      uui-color-swatches {
        border-top: solid 1px var(--uui-color-border,#d8d7d9);
        padding: 0.75rem;
      }

      button[slot='trigger'] {
        border-radius: 50%;
        cursor: pointer;
        width: 36px;
        height: 36px;
      }

      uui-input {
        /*  lower the font size to avoid overflow with hlsa format */
        font-size: 0.85rem;
        box-sizing: content-box;
        flex: 1;
      }

      uui-color-area {
        width: 100%;
      }
    `];j([E('[part="input"]')],N.prototype,"_input",2);j([E(".color-picker__preview")],N.prototype,"_previewButton",2);j([E("#swatches")],N.prototype,"_swatches",2);j([v()],N.prototype,"inputValue",2);j([v()],N.prototype,"hue",2);j([v()],N.prototype,"saturation",2);j([v()],N.prototype,"lightness",2);j([v()],N.prototype,"alpha",2);j([v()],N.prototype,"_colord",2);j([a()],N.prototype,"value",1);j([a()],N.prototype,"format",2);j([a()],N.prototype,"name",2);j([a()],N.prototype,"size",2);j([a({attribute:"no-format-toggle",type:Boolean})],N.prototype,"noFormatToggle",2);j([a({type:Boolean,reflect:!0})],N.prototype,"inline",2);j([a({type:Boolean,reflect:!0})],N.prototype,"disabled",2);j([a({type:Boolean})],N.prototype,"opacity",2);j([a({type:Boolean,reflect:!0})],N.prototype,"readonly",2);j([a({type:Boolean})],N.prototype,"uppercase",2);j([a({attribute:!1})],N.prototype,"swatches",2);N=j([h("uui-color-picker")],N);var mp={grad:.9,turn:360,rad:360/(2*Math.PI)},de=function(t){return typeof t=="string"?t.length>0:typeof t=="number"},Q=function(t,e,i){return e===void 0&&(e=0),i===void 0&&(i=Math.pow(10,e)),Math.round(i*t)/i+0},Dt=function(t,e,i){return e===void 0&&(e=0),i===void 0&&(i=1),t>i?i:t>e?t:e},Ku=function(t){return(t=isFinite(t)?t%360:0)>0?t:t+360},Bu=function(t){return{r:Dt(t.r,0,255),g:Dt(t.g,0,255),b:Dt(t.b,0,255),a:Dt(t.a)}},Nn=function(t){return{r:Q(t.r),g:Q(t.g),b:Q(t.b),a:Q(t.a,3)}},vp=/^#([0-9a-f]{3,8})$/i,ns=function(t){var e=t.toString(16);return e.length<2?"0"+e:e},Xu=function(t){var e=t.r,i=t.g,o=t.b,r=t.a,s=Math.max(e,i,o),n=s-Math.min(e,i,o),u=n?s===e?(i-o)/n:s===i?2+(o-e)/n:4+(e-i)/n:0;return{h:60*(u<0?u+6:u),s:s?n/s*100:0,v:s/255*100,a:r}},Yu=function(t){var e=t.h,i=t.s,o=t.v,r=t.a;e=e/360*6,i/=100,o/=100;var s=Math.floor(e),n=o*(1-i),u=o*(1-(e-s)*i),p=o*(1-(1-e+s)*i),m=s%6;return{r:255*[o,u,n,n,p,o][m],g:255*[p,o,o,u,n,n][m],b:255*[n,n,p,o,o,u][m],a:r}},ju=function(t){return{h:Ku(t.h),s:Dt(t.s,0,100),l:Dt(t.l,0,100),a:Dt(t.a)}},Ru=function(t){return{h:Q(t.h),s:Q(t.s),l:Q(t.l),a:Q(t.a,3)}},Wu=function(t){return Yu((i=(e=t).s,{h:e.h,s:(i*=((o=e.l)<50?o:100-o)/100)>0?2*i/(o+i)*100:0,v:o+i,a:e.a}));var e,i,o},Hr=function(t){return{h:(e=Xu(t)).h,s:(r=(200-(i=e.s))*(o=e.v)/100)>0&&r<200?i*o/100/(r<=100?r:200-r)*100:0,l:r/2,a:e.a};var e,i,o,r},bp=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,gp=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,_p=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,yp=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Fu={string:[[function(t){var e=vp.exec(t);return e?(t=e[1]).length<=4?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:t.length===4?Q(parseInt(t[3]+t[3],16)/255,2):1}:t.length===6||t.length===8?{r:parseInt(t.substr(0,2),16),g:parseInt(t.substr(2,2),16),b:parseInt(t.substr(4,2),16),a:t.length===8?Q(parseInt(t.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(t){var e=_p.exec(t)||yp.exec(t);return e?e[2]!==e[4]||e[4]!==e[6]?null:Bu({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):null},"rgb"],[function(t){var e=bp.exec(t)||gp.exec(t);if(!e)return null;var i,o,r=ju({h:(i=e[1],o=e[2],o===void 0&&(o="deg"),Number(i)*(mp[o]||1)),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)});return Wu(r)},"hsl"]],object:[[function(t){var e=t.r,i=t.g,o=t.b,r=t.a,s=r===void 0?1:r;return de(e)&&de(i)&&de(o)?Bu({r:Number(e),g:Number(i),b:Number(o),a:Number(s)}):null},"rgb"],[function(t){var e=t.h,i=t.s,o=t.l,r=t.a,s=r===void 0?1:r;if(!de(e)||!de(i)||!de(o))return null;var n=ju({h:Number(e),s:Number(i),l:Number(o),a:Number(s)});return Wu(n)},"hsl"],[function(t){var e=t.h,i=t.s,o=t.v,r=t.a,s=r===void 0?1:r;if(!de(e)||!de(i)||!de(o))return null;var n=function(u){return{h:Ku(u.h),s:Dt(u.s,0,100),v:Dt(u.v,0,100),a:Dt(u.a)}}({h:Number(e),s:Number(i),v:Number(o),a:Number(s)});return Yu(n)},"hsv"]]},Gu=function(t,e){for(var i=0;i<e.length;i++){var o=e[i][0](t);if(o)return[o,e[i][1]]}return[null,void 0]},xp=function(t){return typeof t=="string"?Gu(t.trim(),Fu.string):typeof t=="object"&&t!==null?Gu(t,Fu.object):[null,void 0]},Hn=function(t,e){var i=Hr(t);return{h:i.h,s:Dt(i.s+100*e,0,100),l:i.l,a:i.a}},Bn=function(t){return(299*t.r+587*t.g+114*t.b)/1e3/255},qu=function(t,e){var i=Hr(t);return{h:i.h,s:i.s,l:Dt(i.l+100*e,0,100),a:i.a}},jn=function(){function t(e){this.parsed=xp(e)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return t.prototype.isValid=function(){return this.parsed!==null},t.prototype.brightness=function(){return Q(Bn(this.rgba),2)},t.prototype.isDark=function(){return Bn(this.rgba)<.5},t.prototype.isLight=function(){return Bn(this.rgba)>=.5},t.prototype.toHex=function(){return e=Nn(this.rgba),i=e.r,o=e.g,r=e.b,n=(s=e.a)<1?ns(Q(255*s)):"","#"+ns(i)+ns(o)+ns(r)+n;var e,i,o,r,s,n},t.prototype.toRgb=function(){return Nn(this.rgba)},t.prototype.toRgbString=function(){return e=Nn(this.rgba),i=e.r,o=e.g,r=e.b,(s=e.a)<1?"rgba("+i+", "+o+", "+r+", "+s+")":"rgb("+i+", "+o+", "+r+")";var e,i,o,r,s},t.prototype.toHsl=function(){return Ru(Hr(this.rgba))},t.prototype.toHslString=function(){return e=Ru(Hr(this.rgba)),i=e.h,o=e.s,r=e.l,(s=e.a)<1?"hsla("+i+", "+o+"%, "+r+"%, "+s+")":"hsl("+i+", "+o+"%, "+r+"%)";var e,i,o,r,s},t.prototype.toHsv=function(){return e=Xu(this.rgba),{h:Q(e.h),s:Q(e.s),v:Q(e.v),a:Q(e.a,3)};var e},t.prototype.invert=function(){return pe({r:255-(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a});var e},t.prototype.saturate=function(e){return e===void 0&&(e=.1),pe(Hn(this.rgba,e))},t.prototype.desaturate=function(e){return e===void 0&&(e=.1),pe(Hn(this.rgba,-e))},t.prototype.grayscale=function(){return pe(Hn(this.rgba,-1))},t.prototype.lighten=function(e){return e===void 0&&(e=.1),pe(qu(this.rgba,e))},t.prototype.darken=function(e){return e===void 0&&(e=.1),pe(qu(this.rgba,-e))},t.prototype.rotate=function(e){return e===void 0&&(e=15),this.hue(this.hue()+e)},t.prototype.alpha=function(e){return typeof e=="number"?pe({r:(i=this.rgba).r,g:i.g,b:i.b,a:e}):Q(this.rgba.a,3);var i},t.prototype.hue=function(e){var i=Hr(this.rgba);return typeof e=="number"?pe({h:e,s:i.s,l:i.l,a:i.a}):Q(i.h)},t.prototype.isEqual=function(e){return this.toHex()===pe(e).toHex()},t}(),pe=function(t){return t instanceof jn?t:new jn(t)},Br=class extends k{constructor(e,i={}){super(e,{bubbles:!0,...i})}};Br.CHANGE="change";var wp=Object.defineProperty,kp=Object.getOwnPropertyDescriptor,Yt=(t,e,i,o)=>{for(var r=o>1?void 0:o?kp(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&wp(e,i,r),r},Ut=class extends F("label",d){constructor(){super(...arguments),this.type="hue",this.color="",this.min=0,this.max=100,this.precision=1,this.vertical=!1,this.value=0,this.readonly=!1,this.disabled=!1}willUpdate(t){if(t.has("type")&&(this.type==="hue"?this.max=this.max??360:this.type==="saturation"?this.max=this.max??100:this.type==="lightness"?this.max=this.max??100:this.type==="opacity"&&(this.max=this.max??100),this.precision=this.precision??1,this.color)){let e=new jn(this.color),{h:i,s:o,l:r}=e.toHsl(),s=this.type==="saturation"?`linear-gradient(to ${this.vertical?"top":"right"}, hsl(${i}, 0%, ${r}%), hsl(${i}, 100%, ${r}%))`:this.type==="lightness"?`linear-gradient(to ${this.vertical?"top":"right"}, hsl(${i}, ${o}%, 0%), hsl(${i}, ${o}%, 100%))`:null;this.style.setProperty("--uui-slider-background-image",s)}}firstUpdated(){this.container=this.shadowRoot.querySelector("#color-slider"),this.handle=this.container.querySelector("#color-slider__handle")}handleDrag(t){if(this.disabled||this.readonly||!this.container||!this.handle)return;let{width:e,height:i}=this.container.getBoundingClientRect();this.handle.focus(),t.preventDefault(),Wo(this.container,{onMove:(o,r)=>{this.vertical?this.value=En(O(r/i*this.max,this.min,this.max),this.min,this.max):this.value=O(o/e*this.max,this.min,this.max),this.syncValues()},initialEvent:t})}handleClick(t){this.disabled||this.readonly||(this.value=this.getValueFromMousePosition(t),this.syncValues())}handleKeyDown(t){let e=t.shiftKey?10:1;t.key==="ArrowLeft"?(t.preventDefault(),this.value=O(this.value-e,this.min,this.max),this.syncValues()):t.key==="ArrowRight"?(t.preventDefault(),this.value=O(this.value+e,this.min,this.max),this.syncValues()):t.key==="ArrowUp"?(t.preventDefault(),this.value=O(this.value+e,this.min,this.max),this.syncValues()):t.key==="ArrowDown"?(t.preventDefault(),this.value=O(this.value-e,this.min,this.max),this.syncValues()):t.key==="Home"?(t.preventDefault(),this.value=this.min,this.syncValues()):t.key==="End"&&(t.preventDefault(),this.value=this.max,this.syncValues())}getValueFromMousePosition(t){return this.vertical?this.getValueFromYCoordinate(t.clientY):this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.vertical?this.getValueFromYCoordinate(t.touches[0].clientY):this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){let{left:e,width:i}=this.container.getBoundingClientRect();return O(this.roundToPrecision((t-e)/i*this.max),this.min,this.max)}getValueFromYCoordinate(t){let{top:e,height:i}=this.container.getBoundingClientRect();return O(this.roundToPrecision((t-e)/i*this.max),this.min,this.max)}roundToPrecision(t){let e=1/this.precision;return Math.ceil(t*e)/e}syncValues(){this.dispatchEvent(new Br(Br.CHANGE))}get cssPropCurrentValue(){return this.value===0?this.vertical?100:0:100/(this.vertical?this.max/En(this.value,this.min,this.max):this.max/this.value)}render(){return l` <div
        part="slider"
        id="color-slider"
        role="slider"
        aria-label="${this.label}"
        aria-orientation="${this.vertical?"vertical":"horizontal"}"
        aria-valuemin="${Math.round(this.min)}"
        aria-valuemax="${Math.round(this.max)}"
        aria-valuenow="${Math.round(this.value)}"
        @click=${this.handleClick}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
        @keydown=${this.handleKeyDown}>
        ${this.type==="opacity"?l`<div
              id="current-hue"
              style=${at({backgroundImage:`linear-gradient(to ${this.vertical?"top":"right"},
            transparent 0%,
            ${this.color} 100%
            )`})}></div>`:""}
        <!-- <slot name="detail"> </slot> -->
        <span
          id="color-slider__handle"
          style="--current-value: ${this.cssPropCurrentValue}%;"
          tabindex=${x(this.disabled?void 0:"0")}>
        </span>
      </div>
      ${Math.round(this.value)}`}};Ut.styles=[c`
      :host {
        --uui-slider-height: 15px;
        --uui-slider-handle-size: 17px;
        --uui-slider-background-image: #fff;
        --uui-slider-background-size: 100%;
        --uui-slider-background-position: top left;
        display: block;
      }

      :host([type='hue']) {
        --uui-slider-background-image: linear-gradient(
          to right,
          rgb(255, 0, 0) 0%,
          rgb(255, 255, 0) 17%,
          rgb(0, 255, 0) 33%,
          rgb(0, 255, 255) 50%,
          rgb(0, 0, 255) 67%,
          rgb(255, 0, 255) 83%,
          rgb(255, 0, 0) 100%
        );
      }

      :host([vertical][type='hue']) {
        --uui-slider-background-image: linear-gradient(
          to top,
          rgb(255, 0, 0) 0%,
          rgb(255, 255, 0) 17%,
          rgb(0, 255, 0) 33%,
          rgb(0, 255, 255) 50%,
          rgb(0, 0, 255) 67%,
          rgb(255, 0, 255) 83%,
          rgb(255, 0, 0) 100%
        );
      }

      :host([type='opacity']) {
        --uui-slider-background-image: linear-gradient(
            45deg,
            var(--uui-palette-grey,#c4c4c4) 25%,
            transparent 25%
          ),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, var(--uui-palette-grey,#c4c4c4) 25%, transparent 25%);

        --uui-slider-background-size: 10px 10px;
        --uui-slider-background-position: 0 0, 0 0, -5px -5px, 5px 5px;
      }

      #color-slider {
        position: relative;
        background-image: var(--uui-slider-background-image);
        background-size: var(--uui-slider-background-size);
        background-position: var(--uui-slider-background-position);
        border-radius: 3px;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
        width: 100%;
        height: var(--uui-slider-height);
      }

      :host([vertical]) #color-slider {
        width: var(--uui-slider-height);
        height: 300px;
      }

      :host([disabled]) {
        cursor: not-allowed;
      }

      :host([disabled]) #color-slider {
        user-select: none;
        pointer-events: none;
        opacity: 0.55;
      }

      :host([readonly]) {
        cursor: default;
      }

      :host([readonly]) #color-slider {
        pointer-events: none;
      }

      #color-slider__handle {
        position: absolute;
        top: calc(50% - var(--uui-slider-handle-size) / 2);
        width: var(--uui-slider-handle-size);
        height: var(--uui-slider-handle-size);
        background-color: white;
        border-radius: 50%;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
        margin-left: calc(var(--uui-slider-handle-size) / -2);
        left: var(--current-value, 0%);
      }

      :host([vertical]) #color-slider__handle {
        left: unset;
        top: var(--current-value, 100%);
        margin-left: -1px;
        margin-top: calc(var(--uui-slider-handle-size) / -2);
      }

      ::slotted(*:first-child) {
        border-radius: 3px;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
      }

      #current-hue {
        border-radius: 3px;
        position: absolute;
        inset: 0 0 0 0;
      }
    `];Yt([a({reflect:!0})],Ut.prototype,"type",2);Yt([a()],Ut.prototype,"color",2);Yt([a({type:Number})],Ut.prototype,"min",2);Yt([a({type:Number})],Ut.prototype,"max",2);Yt([a({type:Number})],Ut.prototype,"precision",2);Yt([a({type:Boolean,reflect:!0})],Ut.prototype,"vertical",2);Yt([a()],Ut.prototype,"value",2);Yt([a({type:Boolean,reflect:!0})],Ut.prototype,"readonly",2);Yt([a({type:Boolean,reflect:!0})],Ut.prototype,"disabled",2);Ut=Yt([h("uui-color-slider")],Ut);var jr=(t,e)=>{let i=t._$AN;if(i===void 0)return!1;for(let o of i)o._$AO?.(e,!1),jr(o,e);return!0},as=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while(i?.size===0)},Zu=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),$p(e)}};function Ep(t){this._$AN!==void 0?(as(this),this._$AM=t,Zu(this)):this._$AM=t}function Cp(t,e=!1,i=0){let o=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(o))for(let s=i;s<o.length;s++)jr(o[s],!1),as(o[s]);else o!=null&&(jr(o,!1),as(o));else jr(this,t)}var $p=t=>{t.type==it.CHILD&&(t._$AP??(t._$AP=Cp),t._$AQ??(t._$AQ=Ep))},ls=class extends _t{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,o){super._$AT(e,i,o),Zu(this),this.isConnected=e._$AU}_$AO(e,i=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),i&&(jr(this,e),as(this))}setValue(e){if(es(this._$Ct))this._$Ct._$AI(e,this);else{let i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}};var Qu=()=>new Wn,Wn=class{},Rn=new WeakMap,ji=kt(class extends ls{render(t){return w}update(t,[e]){let i=e!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),w}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){let e=this.ht??globalThis,i=Rn.get(e);i===void 0&&(i=new WeakMap,Rn.set(e,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?Rn.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Pp=Object.defineProperty,Sp=Object.getOwnPropertyDescriptor,Ju=t=>{throw TypeError(t)},Ri=(t,e,i,o)=>{for(var r=o>1?void 0:o?Sp(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Pp(e,i,r),r},Op=(t,e,i)=>e.has(t)||Ju("Cannot "+i),Ap=(t,e,i)=>e.has(t)?Ju("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Ip=(t,e,i)=>(Op(t,e,"access private method"),i),Fn,tc,Me=class extends F("label",Ot(Kt(d))){constructor(){super(),Ap(this,Fn),this.disabled=!1,this.readonly=!1,this.showLabel=!1,this.addEventListener("click",this._setAriaAttributes)}get value(){return this._value??""}set value(t){let e=this._value;this._value=t,this.requestUpdate("value",e)}get color(){return this._color}set color(t){let e=this._color;this._color=t,this.requestUpdate("color",e)}_setAriaAttributes(){this.selectable&&this.setAttribute("aria-checked",this.selected.toString())}firstUpdated(){this._setAriaAttributes()}willUpdate(t){(t.has("disabled")||t.has("readonly"))&&this.selectable&&(this.selectable=!this.disabled&&!this.readonly,this.deselectable=!this.disabled&&!this.readonly),(t.has("selectable")||t.has("selected"))&&this._setAriaAttributes()}focus(t){this.selectableTarget?.focus(t)}render(){return l`
      <button
        id="swatch"
        ${ji(Ip(this,Fn,tc))}
        aria-label=${this.label}
        ?disabled="${this.disabled}"
        title="${this.label}">
        <div class="color-swatch color-swatch--transparent-bg">
          <div
            class="color-swatch__color"
            style="background: var(--uui-swatch-color, ${this.color??this.value})"></div>
          <div
            class="color-swatch__check"
            style="color: var(--uui-swatch-color, ${this.color??this.value})">
            ${Oe}
          </div>
        </div>
        ${this._renderWithLabel()}
      </button>
    `}_renderWithLabel(){return this.showLabel?l`<div class="color-swatch__label">
      <strong>${this.renderLabel()}</strong>
      ${this.value}
    </div>`:w}};Fn=new WeakSet;tc=function(t){this.selectableTarget=t||this};Me.styles=[c`
      :host {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        transition: box-shadow 100ms ease-out;
        flex-direction: column;
      }

      :host(*),
      * {
        /* TODO: implement globally shared outline style */
        outline-color: var(--uui-color-focus,#3879ff);
        outline-offset: 4px;
      }

      :host(:focus-within:not([disabled])) {
        outline: none;
      }

      :host(:focus:not([disabled])) #swatch {
        outline-color: var(--uui-color-focus,#3879ff);
        outline-width: var(--uui-swatch-border-width, 1px);
        outline-style: solid;
        outline-offset: var(--uui-swatch-border-width, 1px);
      }

      :host([selectable]) #swatch {
        cursor: pointer;
      }

      :host([disabled]) {
        cursor: not-allowed;
        opacity: 0.5;
      }

      :host([readonly]) {
        cursor: default;
      }

      #swatch {
        cursor: inherit;
        outline: none;
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        text-align: left;
        border-radius: 3px;
      }

      :host(:not([selectable])) #swatch:focus {
        outline: none;
      }

      :host([selectable]) #swatch::after {
        content: '';
        position: absolute;
        pointer-events: none;
        inset: calc(var(--uui-swatch-border-width, 1px) * -1);
        width: calc(100% + calc(var(--uui-swatch-border-width, 1px) * 2));
        height: calc(100% + calc(var(--uui-swatch-border-width, 1px) * 2));
        box-sizing: border-box;
        border: var(--uui-swatch-border-width, 2px) solid
          var(--uui-color-selected,#3544b1);
        border-radius: calc(
          var(--uui-border-radius,3px) + var(--uui-swatch-border-width, 1px)
        );
        transition: opacity 100ms ease-out;
        opacity: 0;
      }
      :host([selectable]:not([disabled]):hover) #swatch::after {
        opacity: 0.33;
      }
      :host([selectable][selected]:not([disabled]):hover) #swatch::after {
        opacity: 0.66;
      }
      :host([selectable][selected]:not([disabled])) #swatch::after {
        opacity: 1;
      }

      .color-swatch {
        position: relative;
        width: var(--uui-swatch-size, 25px);
        height: var(--uui-swatch-size, 25px);
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      :host([show-label]) .color-swatch {
        width: 120px;
        height: 50px;
      }

      .color-swatch.color-swatch--transparent-bg {
        background-image: linear-gradient(
            45deg,
            var(--uui-palette-grey,#c4c4c4) 25%,
            transparent 25%
          ),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, var(--uui-palette-grey,#c4c4c4) 25%, transparent 25%);
        background-size: 10px 10px;
        background-position:
          0 0,
          0 0,
          -5px -5px,
          5px 5px;
      }
      .color-swatch__color {
        width: 100%;
        height: 100%;
        border: 1px solid rgba(0, 0, 0, 0.125);
        border-radius: inherit;
        box-sizing: border-box;
      }

      :host([show-label]) .color-swatch__color {
        border-radius: 3px 3px 0 0;
      }

      .color-swatch__check {
        position: absolute;
        vertical-align: middle;
        width: calc(var(--uui-swatch-size, 25px) / 2);
        height: calc(var(--uui-swatch-size, 25px) / 2);
        line-height: 0;
        filter: invert(1) grayscale(1) contrast(9);
        pointer-events: none;
        opacity: 0;
      }

      :host([selected]) .color-swatch__check {
        opacity: 1;
      }

      slot[name='label']::slotted(*),
      .label {
        font-size: var(--uui-size-4,12px);
      }

      .color-swatch__label {
        max-width: 120px;
        box-sizing: border-box;
        padding: var(--uui-size-space-1,3px) var(--uui-size-space-2,6px);
        line-height: 1.5;
        display: flex;
        flex-direction: column;
        background: white;
        border: 1px solid var(--uui-color-border,#d8d7d9);
        border-radius: 0 0 3px 3px;
        font-size: var(--uui-size-4, 12px);
      }

      .color-swatch__label strong {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        box-sizing: border-box;
      }
    `];Ri([a()],Me.prototype,"value",1);Ri([a()],Me.prototype,"color",1);Ri([a({type:Boolean,reflect:!0})],Me.prototype,"disabled",2);Ri([a({type:Boolean,reflect:!0})],Me.prototype,"readonly",2);Ri([a({type:Boolean,attribute:"show-label",reflect:!0})],Me.prototype,"showLabel",2);Me=Ri([h("uui-color-swatch")],Me);var ci=class extends k{constructor(e,i={}){super(e,{bubbles:!0,...i})}};ci.CHANGE="change";var Mp=Object.defineProperty,Lp=Object.getOwnPropertyDescriptor,Rr=(t,e,i,o)=>{for(var r=o>1?void 0:o?Lp(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Mp(e,i,r),r},hi=class extends F("label",d){constructor(){super(),this.value="",this.disabled=!1,this.readonly=!1,this._onSelected=t=>{let e=t.target;this._swatches.includes(e)&&(this._selectedElement&&(this._selectedElement.selected=!1,this._selectedElement.active=!1,this._selectedElement=void 0),this._selectedElement=e,this._activeElement=this._selectedElement,this.value=this._selectedElement.value||"",this.dispatchEvent(new ci(ci.CHANGE)))},this._onDeselected=t=>{let e=t.target;this._swatches.includes(e)&&(this._activeElement===e&&(this._activeElement=void 0),this._selectedElement===e&&(this._selectedElement.selected=!1,this._selectedElement.active=!1,this._selectedElement=void 0,this.value="",this.dispatchEvent(new ci(ci.CHANGE))))},this.addEventListener(At.SELECTED,this._onSelected),this.addEventListener(At.DESELECTED,this._onDeselected)}get _activeElement(){return this.__activeElement}set _activeElement(t){this.__activeElement&&(this.__activeElement.active=!1),t&&(t.active=!0,this.__activeElement=t)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup"),this.setAttribute("aria-label",this.label)}willUpdate(t){t.has("label")&&this.setAttribute("aria-label",this.label)}_handleSlotChange(){!this._swatches||this._swatches.length===0||this._swatches.forEach(t=>{t.setAttribute("aria-checked","false"),t.setAttribute("role","radio"),this.disabled?t.setAttribute("disabled",""):t.setAttribute("selectable","selectable"),this.readonly&&t.setAttribute("readonly",""),this.value!==""&&t.value===this.value&&(t.selected=!0,t.setAttribute("aria-checked","true"),this._selectedElement=t,this._activeElement=this._selectedElement)})}resetSelection(){this._swatches.forEach(t=>{t.selected=!1,t.active=!1,t.selectable=!t.disabled}),this._activeElement=void 0,this._selectedElement=void 0,this.value=""}render(){return l`<slot @slotchange=${this._handleSlotChange}></slot>`}};hi.styles=[c`
      :host {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
      }
    `];Rr([a()],hi.prototype,"value",2);Rr([a({type:Boolean,reflect:!0})],hi.prototype,"disabled",2);Rr([a({type:Boolean,reflect:!0})],hi.prototype,"readonly",2);Rr([dt({selector:"uui-color-swatch"})],hi.prototype,"_swatches",2);hi=Rr([h("uui-color-swatches")],hi);var ft=class extends k{constructor(e,i={}){super(e,{bubbles:!0,...i})}};ft.CHANGE="change";ft.INNER_SLOT_CHANGE="inner-slot-change";var zp=Object.defineProperty,Dp=Object.getOwnPropertyDescriptor,ic=t=>{throw TypeError(t)},ze=(t,e,i,o)=>{for(var r=o>1?void 0:o?Dp(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&zp(e,i,r),r},Up=(t,e,i)=>e.has(t)||ic("Cannot "+i),Tp=(t,e,i)=>e.has(t)?ic("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),ec=(t,e,i)=>(Up(t,e,"access private method"),i),us,Gn,Zt=class extends d{constructor(){super(...arguments),Tp(this,us),this.displayValue="",this._value="",this._activeElementValue=null,this._onSlotChange=()=>{ec(this,us,Gn).call(this),this._updateSelection(),this.dispatchEvent(new ft(ft.INNER_SLOT_CHANGE))},this._onSelected=t=>{this._selectedElement&&(this._selectedElement.selected=!1,this._selectedElement.active=!1,this._selectedElement=void 0),this._selectedElement=t.composedPath()[0],this.value=this._selectedElement.value||"",this.displayValue=this._selectedElement.displayValue||"",this.dispatchEvent(new ft(ft.CHANGE))},this._onDeselected=t=>{let e=t.composedPath()[0];this._selectedElement===e&&(this.value="",this.displayValue="",this.dispatchEvent(new ft(ft.CHANGE)))},this._moveIndex=t=>{let e=Math.min(Math.max(this._getActiveIndex+t,0),this._options.length-1);this._goToIndex(e)},this._onKeyDown=t=>{if(!(this._options.length<=0))switch(t.key){case"ArrowUp":t.preventDefault(),t.ctrlKey?this._moveIndex(-10):this._moveIndex(-1);break;case"ArrowDown":t.preventDefault(),t.ctrlKey?this._moveIndex(10):this._moveIndex(1);break;case"Home":{t.preventDefault(),this._goToIndex(0);break}case"Enter":{t.preventDefault(),this._getActiveElement?.click();break}case"End":{t.preventDefault(),this._goToIndex(this._options.length-1);break}}}}get value(){return this._value}set value(t){if(this._value===t)return;let e=this._value;this._value=t,this._updateSelection(),this.requestUpdate("value",e)}get for(){return this._for}set for(t){this._for&&this._for.removeEventListener("keydown",this._onKeyDown),this._for=t,this._for&&this._for.addEventListener("keydown",this._onKeyDown)}connectedCallback(){super.connectedCallback(),this._for||(this._for=this),this.addEventListener(At.SELECTED,this._onSelected),this.addEventListener(At.DESELECTED,this._onDeselected)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),this.removeEventListener(At.SELECTED,this._onSelected),this.removeEventListener(At.DESELECTED,this._onDeselected)}_updateSelection(){this.displayValue="";for(let t of this._options)t.value===this._value?(this.displayValue=t.displayValue||"",t.selected=!0):t.selected=!1}get _getActiveIndex(){return this._activeElementValue===null?-1:this._options.findIndex(t=>t.value===this._activeElementValue)}get _getActiveElement(){return this._activeElementValue===null?null:this._options.find(t=>t.value===this._activeElementValue)}_goToIndex(t){if(this._options.length===0)return;t=Math.min(Math.max(t,0),this._options.length-1);let e=this._options[t];this._activeElementValue=e.value,ec(this,us,Gn).call(this),e&&e.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})}render(){return l` <slot @slotchange=${this._onSlotChange}></slot> `}};us=new WeakSet;Gn=function(){for(let e=0;e<this._activeOptions.length;e++)this._activeOptions[e].active=!1;let t=this._getActiveElement;t?t.active=!0:this._goToIndex(0)};Zt.styles=[c`
      :host {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
      }
    `];ze([a()],Zt.prototype,"value",1);ze([a({type:String})],Zt.prototype,"displayValue",2);ze([a({attribute:!1})],Zt.prototype,"for",1);ze([dt({flatten:!0,selector:"uui-combobox-list-option:not([disabled])"})],Zt.prototype,"_options",2);ze([dt({flatten:!0,selector:"uui-combobox-list-option[active]"})],Zt.prototype,"_activeOptions",2);ze([v()],Zt.prototype,"_value",2);ze([v()],Zt.prototype,"_activeElementValue",2);Zt=ze([h("uui-combobox-list")],Zt);var Vp=Object.defineProperty,Np=Object.getOwnPropertyDescriptor,Wi=(t,e,i,o)=>{for(var r=o>1?void 0:o?Np(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Vp(e,i,r),r},Le=class extends Ot(Kt(d)){constructor(){super(),this._disabled=!1,this._displayValue="",this.selectable=!0,this.deselectable=!1}get value(){return this._value?this._value:this.textContent?.trim()||""}set value(t){let e=this._value;this._value=t,this.requestUpdate("value",e)}get displayValue(){return this._displayValue?this._displayValue:this.textContent?.trim()||""}set displayValue(t){let e=this._displayValue;this._displayValue=t,this.requestUpdate("displayValue",e)}get disabled(){return this._disabled}set disabled(t){let e=this._disabled;this._disabled=t,this.selectable=!this._disabled,this.requestUpdate("disabled",e)}render(){return l`<slot></slot>`}};Le.styles=[c`
      :host {
        position: relative;
        cursor: pointer;
        margin: 1px var(--uui-size-2,6px);
        border-radius: var(--uui-border-radius,3px);
        outline: 2px solid transparent;
        outline-offset: -2px;
        padding: var(--uui-size-1,3px);
        padding-left: var(--uui-size-2,6px);
      }

      :host(:first-child) {
        margin-top: 6px;
      }
      :host(:last-child) {
        margin-bottom: 6px;
      }

      :host([selected]):host([active])::after {
        display: block;
        content: '';
        position: absolute;
        inset: 0px;
        outline: var(--uui-color-surface,#fff) solid 2px;
        outline-offset: -4px;
      }
      /*
      :host::before {
        display: block;
        content: '';
        opacity: 0;
        position: absolute;
        inset: 0;
        background-color: var(--uui-color-selected);
      }

      :host(:hover)::before {
        opacity: 0.15;
        border-radius: var(--uui-border-radius);
      } */

      :host(:hover) {
        background-color: var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ));
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }

      :host([disabled]) {
        cursor: auto;
        color: var(--uui-color-disabled-contrast,#c4c4c4);
        background-color: var(--uui-color-disabled,#f3f3f5);
      }

      :host([disabled]:hover) {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }

      :host([active]) {
        outline-color: var(--uui-color-focus,#3879ff);
      }

      :host([selected]) {
        color: var(--uui-color-selected-contrast,#fff);
        background-color: var(--uui-color-selected,#3544b1);
      }

      :host([selected]:hover) {
        color: var(--uui-color-selected-contrast,#fff);
        background-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }
      :host([selected][disabled]) {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
    `];Wi([v()],Le.prototype,"_disabled",2);Wi([v()],Le.prototype,"_displayValue",2);Wi([a({type:String})],Le.prototype,"value",1);Wi([a({type:String,attribute:"display-value"})],Le.prototype,"displayValue",1);Wi([a({type:Boolean,reflect:!0})],Le.prototype,"disabled",1);Le=Wi([h("uui-combobox-list-option")],Le);var yt=class extends k{constructor(e,i={}){super(e,{bubbles:!0,...i})}};yt.SEARCH="search";yt.CHANGE="change";var Hp=Object.defineProperty,Bp=Object.getOwnPropertyDescriptor,rc=t=>{throw TypeError(t)},ut=(t,e,i,o)=>{for(var r=o>1?void 0:o?Bp(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Hp(e,i,r),r},Zn=(t,e,i)=>e.has(t)||rc("Cannot "+i),S=(t,e,i)=>(Zn(t,e,"read from private field"),i?i.call(t):e.get(t)),rt=(t,e,i)=>e.has(t)?rc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),oc=(t,e,i,o)=>(Zn(t,e,"write to private field"),e.set(t,i),i),cs=(t,e,i)=>(Zn(t,e,"access private method"),i),xt,Fi,qi,sc,Wr,bs,hs,ds,qn,gs,_s,Kn,ps,Gi,Xn,fs,ms,Yn,vs,J=class extends G(d,""){constructor(){super(...arguments),rt(this,qi),this.closeLabel="Close",this.disabled=!1,this.hideExpandSymbol=!1,this.readonly=!1,this.placeholder="",rt(this,xt),rt(this,Fi),this._displayValue="",this._search="",this._isPhone=!1,this._isOpen=!1,rt(this,Wr,()=>{this._isPhone=S(this,Fi).matches}),rt(this,hs,()=>requestAnimationFrame(()=>this._input.focus())),rt(this,ds,()=>requestAnimationFrame(()=>{this.shadowRoot?.activeElement||S(this,Gi).call(this)})),rt(this,qn,t=>{t.preventDefault(),t.stopImmediatePropagation(),this.search=t.target.value,this.dispatchEvent(new yt(yt.SEARCH)),S(this,ps).call(this)}),rt(this,gs,()=>{this.value&&this.value!==S(this,xt)?.value&&cs(this,qi,bs).call(this)}),rt(this,_s,()=>{this.value=S(this,xt)?.value||"",this.search=this.value?this.search:"",S(this,Gi).call(this),this.dispatchEvent(new yt(yt.CHANGE))}),rt(this,Kn,()=>{this.readonly||(this.open=!this.open)}),rt(this,ps,()=>{this.open||this.readonly||(this.open=!0)}),rt(this,Gi,()=>{this.open&&(this.open=!1,this.search="",this._input.value=this._displayValue,this.dispatchEvent(new yt(yt.SEARCH)))}),rt(this,Xn,t=>{this.open===!1&&t.key==="Enter"&&(t.preventDefault(),t.stopImmediatePropagation()),(t.key==="ArrowUp"||t.key==="ArrowDown")&&S(this,ps).call(this),(t.key==="Escape"||t.key==="Enter")&&S(this,Gi).call(this)}),rt(this,fs,t=>{t.key&&t.key!=="Enter"||(t.preventDefault(),t.stopImmediatePropagation(),this.value="",this.search="",this._input.value=this._displayValue,this._input.focus(),this.dispatchEvent(new yt(yt.SEARCH)),this.dispatchEvent(new yt(yt.CHANGE)))}),rt(this,ms,()=>l` <uui-input
      slot="trigger"
      id="combobox-input"
      label="combobox-input"
      type="text"
      .value=${this._displayValue}
      .placeholder=${this.placeholder}
      autocomplete="off"
      .disabled=${this.disabled}
      .readonly=${this.readonly}
      popovertarget="combobox-popover"
      @click=${S(this,Kn)}
      @input=${S(this,qn)}
      @keydown=${S(this,Xn)}>
      <slot name="input-prepend" slot="prepend"></slot>
      ${S(this,Yn).call(this)}
      ${this.hideExpandSymbol?w:l`<div id="expand-symbol-wrapper" slot="append">
            <uui-symbol-expand .open=${this._isOpen}></uui-symbol-expand>
          </div>`}
      <slot name="input-append" slot="append"></slot>
    </uui-input>`),rt(this,Yn,()=>this.disabled?w:this.readonly?w:l`<uui-button
      id="clear-button"
      @click=${S(this,fs)}
      @keydown=${S(this,fs)}
      label="clear"
      slot="append"
      compact
      style="height: 100%;"
      tabindex=${this.value||this.search?"":"-1"}
      class=${this.value||this.search?"visible":""}>
      <uui-icon name="remove" .fallback=${Li.strings[0]}></uui-icon>
    </uui-button>`),rt(this,vs,()=>l`<div id="dropdown">
      <uui-scroll-container tabindex="-1" id="scroll-container">
        <slot @slotchange=${cs(this,qi,sc)}></slot>
      </uui-scroll-container>
    </div>`)}get value(){return super.value}set value(t){super.value=t,typeof t=="string"&&cs(this,qi,bs).call(this)}get search(){return this._search}set search(t){if(this.search===t)return;let e=this._search;this._search=t,this.requestUpdate("search",e)}get open(){return this._isOpen}set open(t){let e=t;this._isOpen=t;let i=this._comboboxPopoverElement;if(i)if(t){let o=this._input.offsetWidth;i.style.setProperty("--popover-width",`${o}px`),i.showPopover()}else i.hidePopover();this.requestUpdate("open",e)}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",S(this,ds)),this.addEventListener("mousedown",S(this,hs)),oc(this,Fi,window.matchMedia("(max-width: 600px)")),S(this,Wr).call(this),S(this,Fi).addEventListener("change",S(this,Wr)),y(this,"uui-icon"),y(this,"uui-input"),y(this,"uui-button"),y(this,"uui-combobox-list"),y(this,"uui-scroll-container"),y(this,"uui-popover-container"),y(this,"uui-symbol-expand")}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",S(this,ds)),this.removeEventListener("mousedown",S(this,hs)),S(this,Fi).removeEventListener("change",S(this,Wr))}getFormElement(){return this._input}async focus(){await this.updateComplete,this._input.focus()}async blur(){await this.updateComplete,this._input.blur()}async click(){await this.updateComplete,this._input.click()}render(){return this._isPhone&&this.open?l` <div id="phone-wrapper">
        <uui-button label="close" look="primary" @click=${S(this,Gi)}>
          ${this.closeLabel}
        </uui-button>
        ${S(this,ms).call(this)} ${S(this,vs).call(this)}
      </div>`:l`
        ${S(this,ms).call(this)}
        <uui-popover-container
          id="combobox-popover"
          popover="manual"
          placement="bottom-end">
          ${S(this,vs).call(this)}
        </uui-popover-container>
      `}};xt=new WeakMap;Fi=new WeakMap;qi=new WeakSet;sc=function(){S(this,xt)&&(S(this,xt).removeEventListener(ft.CHANGE,S(this,_s)),S(this,xt).removeEventListener(ft.INNER_SLOT_CHANGE,S(this,gs)));let t=this._comboboxListElements?.[0];t&&(oc(this,xt,t),S(this,xt).for=this,S(this,xt).addEventListener(ft.CHANGE,S(this,_s)),S(this,xt).addEventListener(ft.INNER_SLOT_CHANGE,S(this,gs))),this.updateComplete.then(()=>{cs(this,qi,bs).call(this)})};Wr=new WeakMap;bs=function(){S(this,xt)&&(S(this,xt).value=this.value,requestAnimationFrame(()=>this._displayValue=S(this,xt).displayValue||""))};hs=new WeakMap;ds=new WeakMap;qn=new WeakMap;gs=new WeakMap;_s=new WeakMap;Kn=new WeakMap;ps=new WeakMap;Gi=new WeakMap;Xn=new WeakMap;fs=new WeakMap;ms=new WeakMap;Yn=new WeakMap;vs=new WeakMap;J.styles=[c`
      :host {
        display: inline-block;
      }

      #combobox-input {
        width: 100%;
        border-radius: var(--uui-size-1,3px);
      }

      #combobox-popover {
        width: var(--uui-dropdown-width, var(--popover-width, inherit));
      }

      #scroll-container {
        overflow-y: auto;
        width: 100%;
        max-height: var(--uui-combobox-popover-max-height, 500px);
      }
      #expand-symbol-wrapper {
        height: 100%;
        padding-right: var(--uui-size-space-3,9px);
        display: flex;
        justify-content: center;
      }

      #clear-button {
        opacity: 0;
        transition: opacity 80ms;
      }

      :host(:not([disabled]):not([readonly]):focus-within)
        #clear-button.visible,
      :host(:not([disabled]):not([readonly]):hover) #clear-button.visible {
        opacity: 1;
      }

      #dropdown {
        overflow: hidden;
        z-index: -1;
        background-color: var(
          --uui-combobox-popover-background-color,
          var(--uui-color-surface,#fff)
        );
        border: 1px solid var(--uui-color-border,#d8d7d9);
        border-radius: var(--uui-border-radius,3px);
        width: 100%;
        box-sizing: border-box;
        box-shadow: var(--uui-shadow-depth-3,0 10px 20px rgba(0,0,0,0.19) , 0 6px 6px rgba(0,0,0,0.23));
      }

      :host([disabled]) #caret {
        fill: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      #phone-wrapper {
        position: fixed;
        inset: 0;
        display: flex;
        flex-direction: column;
        z-index: 1;
        font-size: 1.1em;
      }

      #phone-wrapper #dropdown {
        display: flex;
      }

      #phone-wrapper #combobox-input {
        height: var(--uui-size-16,48px);
      }

      #phone-wrapper > uui-button {
        height: var(--uui-size-14,42px);
        width: 100%;
      }

      #phone-wrapper #scroll-container {
        max-height: unset;
      }
    `];ut([a({attribute:"value",reflect:!0})],J.prototype,"value",1);ut([a({type:String})],J.prototype,"search",1);ut([a({type:Boolean})],J.prototype,"open",1);ut([a({type:String,attribute:"close-label"})],J.prototype,"closeLabel",2);ut([a({type:Boolean,reflect:!0})],J.prototype,"disabled",2);ut([a({type:Boolean,reflect:!1,attribute:"hide-expand-symbol"})],J.prototype,"hideExpandSymbol",2);ut([a({type:Boolean,reflect:!0})],J.prototype,"readonly",2);ut([a()],J.prototype,"placeholder",2);ut([E("#combobox-input")],J.prototype,"_input",2);ut([E("#combobox-popover")],J.prototype,"_comboboxPopoverElement",2);ut([dt({flatten:!0,selector:"uui-combobox-list"})],J.prototype,"_comboboxListElements",2);ut([v()],J.prototype,"_displayValue",2);ut([v()],J.prototype,"_search",2);ut([v()],J.prototype,"_isPhone",2);ut([v()],J.prototype,"_isOpen",2);J=ut([h("uui-combobox")],J);var jp=Object.defineProperty,Rp=Object.getOwnPropertyDescriptor,Qn=(t,e,i,o)=>{for(var r=o>1?void 0:o?Rp(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&jp(e,i,r),r},Fr=class extends d{constructor(){super(...arguments),this.headline=null,this._headlineSlotHasContent=!1,this._headlineSlotChanged=t=>{this._headlineSlotHasContent=t.target.assignedNodes({flatten:!0}).length>0}}renderHeadline(){return l` <h3
      style=${this._headlineSlotHasContent||this.headline!==null?"":"display: none"}>
      ${this.headline}
      <slot name="headline" @slotchange=${this._headlineSlotChanged}></slot>
    </h3>`}renderContent(){return l`<slot></slot>`}renderActions(){return l`<slot id="actions" name="actions"></slot>`}render(){return l`${this.renderHeadline()} ${this.renderContent()}
    ${this.renderActions()} `}};Fr.styles=[c`
      :host {
        display: block;
        padding: var(--uui-size-10,30px) var(--uui-size-14,42px);
        color: var(--uui-color-text,#060606);
      }

      #actions {
        margin-top: var(--uui-size-8,24px);
        display: flex;
        justify-content: end;
        gap: var(--uui-size-4,12px);
      }
    `];Qn([a({type:String})],Fr.prototype,"headline",2);Qn([v()],Fr.prototype,"_headlineSlotHasContent",2);Fr=Qn([h("uui-dialog-layout")],Fr);var Wp=Object.getOwnPropertyDescriptor,Fp=(t,e,i,o)=>{for(var r=o>1?void 0:o?Wp(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(r)||r);return r},Jn=class extends d{render(){return l`<slot></slot>`}};Jn.styles=[c`
      :host {
        position: relative;
        display: block;
        max-width: 580px;
        color: var(--uui-color-text,#060606);

        background-color: var(
          --uui-dialog-background-color,
          var(--uui-color-surface,#fff)
        );

        box-shadow: var(--uui-shadow-depth-5,0 19px 38px rgba(0,0,0,0.30) , 0 15px 12px rgba(0,0,0,0.22));
        border-radius: var(
          --uui-dialog-border-radius,
          calc(var(--uui-border-radius,3px) * 2)
        );
      }
    `];Jn=Fp([h("uui-dialog")],Jn);var Gp=Object.defineProperty,qp=Object.getOwnPropertyDescriptor,nc=(t,e,i,o)=>{for(var r=o>1?void 0:o?qp(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Gp(e,i,r),r},ys=class extends d{constructor(){super(...arguments),this.error=!1}render(){return l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      id="upload-icon">
      <path
        d=${this.error?"M254.501 38.16c-120.308 0-217.838 97.53-217.838 217.838 0 120.31 97.53 217.838 217.838 217.838 120.31 0 217.838-97.528 217.838-217.838 0-120.308-97.528-217.838-217.838-217.838zm151.667 217.838c0 29.861-8.711 57.708-23.671 81.209L173.293 128.002c23.499-14.961 51.345-23.67 81.208-23.67 83.629.001 151.667 68.037 151.667 151.666zm-303.332 0c0-29.859 8.71-57.707 23.67-81.204l209.201 209.201c-23.498 14.96-51.346 23.671-81.206 23.671-83.632 0-151.665-68.04-151.665-151.668z":"M206.491 364.184h99.013V223.676h92.922L255.997 51.111 113.575 223.676h92.916zM85.043 398.311h341.912v62.578H85.043z"} />
    </svg> `}};ys.styles=[c`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      #upload-icon {
        fill: var(--uui-color-default,#1b264f);
        width: 100px;
        transition: fill 0.3s ease;
        position: relative;
        z-index: 2;
      }

      :host([error]) #upload-icon {
        fill: var(--uui-color-invalid,#d42054);
      }
    `];nc([a({type:Boolean,reflect:!0})],ys.prototype,"error",2);ys=nc([h("uui-symbol-file-dropzone")],ys);var di=class extends k{constructor(e,i={}){super(e,{bubbles:!0,...i})}};di.CHANGE="change";var Kp=Object.defineProperty,Xp=Object.getOwnPropertyDescriptor,Ki=(t,e,i,o)=>{for(var r=o>1?void 0:o?Xp(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Kp(e,i,r),r},De=class extends F("",d){constructor(){super(),this._acceptedFileExtensions=[],this._acceptedMimeTypes=[],this._accept="",this.disallowFolderUpload=!1,this.multiple=!1,this.addEventListener("dragenter",this._onDragEnter,!1),this.addEventListener("dragleave",this._onDragLeave,!1),this.addEventListener("dragover",this._onDragOver,!1),this.addEventListener("drop",this._onDrop,!1)}set accept(t){if(t){let i=[],o=[];t.split(",").forEach(r=>{r=r.trim().toLowerCase(),/[a-z]+\/[a-z*]/s.test(r)?i.push(r):o.push(r.replace(/^\./,""))}),this._acceptedMimeTypes=i,this._acceptedFileExtensions=o}else this._acceptedMimeTypes=[],this._acceptedFileExtensions=[];let e=this._accept;this._accept=t,this.requestUpdate("accept",e)}get accept(){return this._accept}browse(){this._input.click()}async _getAllEntries(t){let e=[...t],i=[],o=[];for(let r of e){if(r?.kind!=="file")continue;let s=this._getEntry(r);if(s)if(s.isDirectory){if(!this.disallowFolderUpload&&this.multiple){let n=await this._mkdir(s);i.push(n)}}else{let n=r.getAsFile();if(!n)continue;this._isAccepted(n)&&o.push(n)}}return{files:o,folders:i}}_getEntry(t){let e=null;return"webkitGetAsEntry"in t?e=t.webkitGetAsEntry():"getAsEntry"in t&&(e=t.getAsEntry()),e}async _mkdir(t){let e=t.createReader(),i=[],o=[],r=n=>new Promise((u,p)=>{n.readEntries(async m=>{if(!m.length){u();return}for(let _ of m)if(_.isFile){let f=await this._getAsFile(_);this._isAccepted(f)&&o.push(f)}else if(_.isDirectory){let f=await this._mkdir(_);i.push(f)}await r(n),u()},p)});return await r(e),{folderName:t.name,folders:i,files:o}}_isAccepted(t){if(this._acceptedFileExtensions.length===0&&this._acceptedMimeTypes.length===0)return!0;let e=t.type.toLowerCase(),i=t.name.split(".").pop();if(i&&this._acceptedFileExtensions.includes(i.toLowerCase()))return!0;for(let o of this._acceptedMimeTypes){if(e===o)return!0;if(o.endsWith("/*")&&e.startsWith(o.replace("*","")))return!0}return!1}async _getAsFile(t){return new Promise((e,i)=>t.file(e,i))}async _onDrop(t){t.preventDefault(),this._dropzone.classList.remove("hover");let e=t.dataTransfer?.items;if(e){let i=await this._getAllEntries(e);if(this.multiple===!1&&i.files.length&&(i.files=[i.files[0]],i.folders=[]),!i.files.length&&!i.folders.length)return;this.dispatchEvent(new di(di.CHANGE,{detail:i}))}}_onDragOver(t){t.preventDefault()}_onDragEnter(t){this._dropzone.classList.add("hover"),t.preventDefault()}_onDragLeave(t){this._dropzone.classList.remove("hover"),t.preventDefault()}_onFileInputChange(){let t=this._input.files?Array.from(this._input.files):[];this.multiple===!1&&t.length>1&&t.splice(1,t.length-1);let e=t.filter(i=>this._isAccepted(i));e.length&&this.dispatchEvent(new di(di.CHANGE,{detail:{files:e,folders:[]}}))}render(){return l`
      <div id="dropzone">
        <uui-symbol-file-dropzone id="symbol"></uui-symbol-file-dropzone>
        ${this.renderLabel()}
        <input
          @click=${t=>t.stopImmediatePropagation()}
          id="input"
          type="file"
          accept=${this.accept}
          ?multiple=${this.multiple}
          @change=${this._onFileInputChange}
          aria-label="${this.label}" />
        <slot></slot>
      </div>
    `}};De.styles=[c`
      #dropzone {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: var(--uui-size-4,12px);
        border: 3px solid transparent;
        margin: -3px;
        backdrop-filter: blur(2px);
      }
      #dropzone.hover {
        border-color: var(--uui-color-default,#1b264f);
      }
      #dropzone.hover::before {
        content: '';
        position: absolute;
        inset: 0;
        opacity: 0.2;
        border-color: var(--uui-color-default,#1b264f);
        background-color: var(--uui-color-default,#1b264f);
      }
      #symbol {
        color: var(--uui-color-default,#1b264f);
        max-width: 100%;
        max-height: 100%;
      }
      #input {
        position: absolute;
        width: 0px;
        height: 0px;
        opacity: 0;
        display: none;
      }
    `];Ki([E("#input")],De.prototype,"_input",2);Ki([E("#dropzone")],De.prototype,"_dropzone",2);Ki([a({type:String})],De.prototype,"accept",1);Ki([a({type:Boolean,reflect:!0,attribute:"disallow-folder-upload"})],De.prototype,"disallowFolderUpload",2);Ki([a({type:Boolean})],De.prototype,"multiple",2);De=Ki([h("uui-file-dropzone")],De);var ta=class{static humanFileSize(e,i=!1,o=1){let r=i?1e3:1024;if(Math.abs(e)<r)return e+" B";let s=i?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],n=-1,u=10**o;do e/=r,++n;while(Math.round(Math.abs(e)*u)/u>=r&&n<s.length-1);return e.toFixed(o)+" "+s[n]}},Yp=Object.defineProperty,Zp=Object.getOwnPropertyDescriptor,Qt=(t,e,i,o)=>{for(var r=o>1?void 0:o?Zp(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Yp(e,i,r),r},Tt=class extends d{constructor(){super(...arguments),this._name="",this._url="",this._extension="",this._src="",this._size=0,this._isDirectory=!1}get file(){return this._file}set file(t){let e=this._file;t instanceof File&&(this._name=t.name.split(".")[0],this._extension=t.name.split(".")[1],this._isDirectory=!1,this._size=t.size,this._isFileAnImage(t)&&(this._isImage=!0,this._getThumbnail(t).then(i=>{this._src=i})),this.requestUpdate("file",e))}connectedCallback(){super.connectedCallback(),y(this,"uui-symbol-file-thumbnail"),y(this,"uui-symbol-folder"),y(this,"uui-symbol-file")}_openSource(){window.open(this._url,"_blank")}_fileTypeTemplate(){return this._isDirectory?l`<uui-symbol-folder id="file-symbol"></uui-symbol-folder>`:this._isImage?l`<uui-symbol-file-thumbnail
        .src=${this._src}
        .alt=${this._name}
        id="file-symbol"></uui-symbol-file-thumbnail>`:l`<uui-symbol-file
      id="file-symbol"
      .type=${this._extension}></uui-symbol-file>`}_renderLongName(){let e=this._name.substring(0,this._name.length-6),i=this._name.substring(this._name.length-6,this._name.length);return l`
      <span
        id="file-name"
        class=${this._url?"has-source":""}
        @click=${()=>this._url?this._openSource():""}
        @keydown=${()=>""}>
        <span id="file-name-start">${e}</span>
        <span id="file-name-end">${i}</span>
      </span>
    `}_isFileAnImage(t){return t?t.type.split("/")[0]==="image":!1}async _getThumbnail(t){return await new Promise(e=>{let i=new FileReader;i.readAsDataURL(t),i.onload=()=>{e(i.result)}})}render(){return l`
      <slot id="actions" name="actions"></slot>
      ${this._fileTypeTemplate()}
      <div id="file-info">
        ${this._renderLongName()}
        <span id="file-size">
          ${this._size&&!this._isDirectory?l`${ta.humanFileSize(this._size,!0)}`:""}
        </span>
      </div>
    `}};Tt.styles=[c`
      :host {
        position: relative;
        display: grid;
        /* These have to be changed together */
        grid-template-rows: 100px 50px;
        width: 150px;
        height: 150px;
        /* --------------------------------- */
        box-sizing: border-box;
        aspect-ratio: 1;
        color: var(--uui-color-text,#060606);
      }

      :host(:hover) slot[name='actions']::slotted(*) {
        opacity: 1;
      }

      slot[name='actions']::slotted(*) {
        position: absolute;
        top: 8px;
        right: 8px;
        max-width: 100%;
        height: 32px;
        font-size: 13px;
        opacity: 0;
        z-index: 1;
        transition: opacity 150ms;
      }

      #file-symbol {
        aspect-ratio: 1 / 1;
        margin: auto;
        max-width: 100%;
        max-height: 100%;
      }

      #file-info {
        min-width: 0;
        display: flex;
        text-align: center;
        flex-direction: column;
        font-size: 1rem;
      }

      #file-name {
        display: flex;
        justify-content: center;
      }

      #file-name-start {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      #file-name-end {
        white-space: nowrap;
      }

      #file-size {
        opacity: 0.6;
      }

      .has-source:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    `];Qt([v()],Tt.prototype,"_name",2);Qt([v()],Tt.prototype,"_url",2);Qt([v()],Tt.prototype,"_extension",2);Qt([v()],Tt.prototype,"_src",2);Qt([v()],Tt.prototype,"_size",2);Qt([v()],Tt.prototype,"_isDirectory",2);Qt([v()],Tt.prototype,"_file",2);Qt([v()],Tt.prototype,"_isImage",2);Qt([a({attribute:!1})],Tt.prototype,"file",1);Tt=Qt([h("uui-file-preview")],Tt);var Qp=Object.defineProperty,Jp=Object.getOwnPropertyDescriptor,xs=(t,e,i,o)=>{for(var r=o>1?void 0:o?Jp(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Qp(e,i,r),r},Xi=class extends d{constructor(){super(...arguments),this.description=null,this._labelSlotHasContent=!1,this._labelSlotChanged=t=>{this._labelSlotHasContent=t.target.assignedNodes({flatten:!0}).length>0},this._descriptionSlotHasContent=!1,this._descriptionSlotChanged=t=>{this._descriptionSlotHasContent=t.target.assignedNodes({flatten:!0}).length>0}}connectedCallback(){super.connectedCallback(),y(this,"uui-form-validation-message")}render(){return l`
      <div id="label" style=${this._labelSlotHasContent?"":"display: none"}>
        <slot name="label" @slotchange=${this._labelSlotChanged}></slot>
      </div>
      <div
        id="description"
        style=${this._descriptionSlotHasContent||this.description!==null?"":"display: none"}>
        ${this.description}
        <slot
          name="description"
          @slotchange=${this._descriptionSlotChanged}></slot>
      </div>
      <uui-form-validation-message>
        <slot></slot>
        <slot name="message" slot="message"></slot>
      </uui-form-validation-message>
    `}};Xi.styles=[c`
      :host {
        position: relative;
        display: block;
        margin-top: var(--uui-size-space-5,18px);
        margin-bottom: var(--uui-size-space-5,18px);
      }
      #label {
        margin-top: -5px;
        margin-bottom: 5px;
      }
      #description {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
        font-size: var(--uui-type-small-size,12px);
      }
      #label + #description {
        margin-top: -8px;
        min-height: 8px;
      }
    `];xs([a({type:String})],Xi.prototype,"description",2);xs([v()],Xi.prototype,"_labelSlotHasContent",2);xs([v()],Xi.prototype,"_descriptionSlotHasContent",2);Xi=xs([h("uui-form-layout-item")],Xi);var ac=(t,e,i)=>{let o=new Map;for(let r=e;r<=i;r++)o.set(t[r],r);return o},Yi=kt(class extends _t{constructor(t){if(super(t),t.type!==it.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let o;i===void 0?i=e:e!==void 0&&(o=e);let r=[],s=[],n=0;for(let u of t)r[n]=o?o(u,n):n,s[n]=i(u,n),n++;return{values:s,keys:r}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,o]){let r=Su(t),{values:s,keys:n}=this.dt(e,i,o);if(!Array.isArray(r))return this.ut=n,s;let u=this.ut??(this.ut=[]),p=[],m,_,f=0,P=r.length-1,g=0,$=s.length-1;for(;f<=P&&g<=$;)if(r[f]===null)f++;else if(r[P]===null)P--;else if(u[f]===n[g])p[g]=Ie(r[f],s[g]),f++,g++;else if(u[P]===n[$])p[$]=Ie(r[P],s[$]),P--,$--;else if(u[f]===n[$])p[$]=Ie(r[f],s[$]),Bi(t,p[$+1],r[f]),f++,$--;else if(u[P]===n[g])p[g]=Ie(r[P],s[g]),Bi(t,r[f],r[P]),P--,g++;else if(m===void 0&&(m=ac(n,g,$),_=ac(u,f,P)),m.has(u[f]))if(m.has(u[P])){let V=_.get(n[g]),L=V!==void 0?r[V]:null;if(L===null){let st=Bi(t,r[f]);Ie(st,s[g]),p[g]=st}else p[g]=Ie(L,s[g]),Bi(t,r[f],L),r[V]=null;g++}else rs(r[P]),P--;else rs(r[f]),f++;for(;g<=$;){let V=Bi(t,p[$+1]);Ie(V,s[g]),p[g++]=V}for(;f<=P;){let V=r[f++];V!==null&&rs(V)}return this.ut=n,is(t,p),W}});var Gr=class extends _t{constructor(e){if(super(e),this.it=w,e.type!==it.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===w||e==null)return this._t=void 0,this.it=e;if(e===W)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let i=[e];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}};Gr.directiveName="unsafeHTML",Gr.resultType=1;var Zi=kt(Gr);var tf=Object.defineProperty,ef=Object.getOwnPropertyDescriptor,lc=(t,e,i,o)=>{for(var r=o>1?void 0:o?ef(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&tf(e,i,r),r},ws=class extends d{constructor(){super(),this._for=null,this._messages=new Map,this._onControlInvalid=t=>{let e=t.composedPath()[0];e.pristine===!1?this._messages.set(e,e.validationMessage):this._messages.delete(e),this.requestUpdate("_messages")},this._onControlValid=t=>{let e=t.composedPath()[0];this._messages.delete(e),this.requestUpdate("_messages")},this.for===null&&(this.for=this)}get for(){return this._for}set for(t){let e=null;typeof t=="string"?e=this.getRootNode()?.getElementById(t):t instanceof HTMLElement&&(e=t);let i=e??this,o=this._for;o!==i&&(o!==null&&(o.removeEventListener(ae.INVALID,this._onControlInvalid),o.removeEventListener(ae.VALID,this._onControlValid)),this._for=i,this._for.addEventListener(ae.INVALID,this._onControlInvalid),this._for.addEventListener(ae.VALID,this._onControlValid))}render(){return l`
      <slot></slot>
      <div id="messages">
        ${Yi(this._messages,t=>l`<div>${Zi(t[1])}</div>`)}
        <slot name="message"></slot>
      </div>
    `}};ws.styles=[c`
      #messages {
        color: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
    `];lc([a({reflect:!1,attribute:!0})],ws.prototype,"for",1);ws=lc([h("uui-form-validation-message")],ws);var rf=Object.getOwnPropertyDescriptor,of=(t,e,i,o)=>{for(var r=o>1?void 0:o?rf(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(r)||r);return r},uc=class extends d{constructor(){super(...arguments),this._formElement=null}getFormElement(){return this._formElement}_onSlotChanged(t){this._formElement&&(this._formElement.removeEventListener("submit",this._onSubmit),this._formElement.removeEventListener("reset",this._onReset));let e=t.target.assignedNodes({flatten:!0}).filter(i=>i instanceof HTMLFormElement);this._formElement=e.length>0?e[0]:null,this._formElement&&(this._formElement.setAttribute("novalidate",""),this._formElement.addEventListener("submit",this._onSubmit),this._formElement.addEventListener("reset",this._onReset))}_onSubmit(t){if(t.target===null)return;let e=t.target;if(!e.checkValidity()){e.setAttribute("submit-invalid","");return}e.removeAttribute("submit-invalid")}_onReset(t){t.target!==null&&t.target.removeAttribute("submit-invalid")}render(){return l`<slot @slotchange=${this._onSlotChanged}></slot>`}};uc=of([h("uui-form")],uc);var Ue=class extends k{constructor(e,i={}){super(e,{bubbles:!0,composed:!0,...i}),this.icon=null}acceptRequest(e){this.icon=e,this.stopImmediatePropagation()}};Ue.ICON_REQUEST="icon-request";var sf=Object.defineProperty,nf=Object.getOwnPropertyDescriptor,pi=(t,e,i,o)=>{for(var r=o>1?void 0:o?nf(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&sf(e,i,r),r},fe=class extends d{constructor(){super(...arguments),this._name=null,this._retrievedNameIcon=!1,this._nameSvg=null,this.label="",this.svg=null,this.fallback=null,this._useFallback=!1}get name(){return this._name}set name(t){this._name=t,this.shadowRoot&&this.requestIcon()}requestIcon(){if(this._name!==""&&this._name!==null){let t=new Ue(Ue.ICON_REQUEST,{detail:{iconName:this._name}});this.dispatchEvent(t),t.icon!==null?(this._retrievedNameIcon=!0,t.icon.then(e=>{this._useFallback=!1,this._nameSvg=e})):(this._retrievedNameIcon=!1,this._useFallback=!0)}}connectedCallback(){super.connectedCallback(),this._retrievedNameIcon===!1&&this.requestIcon()}disconnectedCallback(){this._retrievedNameIcon=!1}firstUpdated(){this._retrievedNameIcon===!1&&this.requestIcon(),typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}render(){return this._useFallback===!0?this.fallback===null?l`<slot name="fallback"></slot>`:l`${Zi(this.fallback)}`:this._nameSvg!==null?l`${Zi(this._nameSvg)}`:this.svg!==null?l`${Zi(this.svg)}`:l`<slot></slot>`}};fe.styles=[c`
      :host {
        vertical-align: text-bottom;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1.125em;
        height: 1.125em;
      }

      :host svg,
      ::slotted(svg) {
        color: var(--uui-icon-color, currentColor);
        width: 100%;
      }

      :host-context(div[slot='prepend']) {
        margin-left: var(--uui-size-2, 6px);
      }

      :host-context(div[slot='append']) {
        margin-right: var(--uui-size-2, 6px);
      }
    `];pi([v()],fe.prototype,"_nameSvg",2);pi([a()],fe.prototype,"label",2);pi([a()],fe.prototype,"name",1);pi([a({attribute:!1})],fe.prototype,"svg",2);pi([a({attribute:!1})],fe.prototype,"fallback",2);pi([v()],fe.prototype,"_useFallback",2);fe=pi([h("uui-icon")],fe);var ks=class{constructor(e){this.promise=new Promise((i,o)=>{this.resolve=i,this.reject=o}),e&&this.resolve(e)}set svg(e){this.resolve(e)}},qr=class{constructor(){this.icons={},this._onIconRequest=e=>{let i=this.getIcon(e.detail.iconName);i!==null&&e.acceptRequest(i)}}attach(e){e.addEventListener(Ue.ICON_REQUEST,this._onIconRequest)}detach(e){e.removeEventListener(Ue.ICON_REQUEST,this._onIconRequest)}defineIcon(e,i){if(this.icons[e]){this.icons[e].svg=i;return}this.icons[e]=new ks(i)}getIcon(e){return this.icons[e]||this.acceptIcon(e)?this.icons[e].promise:null}provideIcon(e){return this.icons[e]=new ks}acceptIcon(e){return!1}getIconNames(){return Object.keys(this.icons)}},af=Object.defineProperty,lf=Object.getOwnPropertyDescriptor,cc=(t,e,i,o)=>{for(var r=o>1?void 0:o?lf(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&af(e,i,r),r},Kr=class extends d{constructor(){super(),this._icons={},this._registry=new qr,this._registry.attach(this)}get icons(){return this._icons}set icons(t){this._icons=t,this._registry&&Object.entries(this._icons).forEach(([e,i])=>this._registry.defineIcon(e,i))}get registry(){return this._registry}set registry(t){this.registry&&this.registry.detach(this),t.attach(this),this._registry=t}render(){return l`<slot></slot>`}};cc([a({attribute:!1})],Kr.prototype,"_icons",2);Kr=cc([h("uui-icon-registry")],Kr);var uf=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,cf=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>`,hf=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>`,df=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>`,pf=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>`,ff=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>`,mf=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>`,vf=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m2 22 1-1h3l9-9" /><path d="M3 21v-3l9-9" /><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" /></svg>`,bf=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" /><path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" /><path d="M15 2v5h5" /></svg>`,gf=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>`,_f=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>`,yf=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>`,xf=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>`,wf=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>`,kf=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /><path d="M2 10h20" /></svg>`,Ef=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`,Cf=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>`,$f=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>`,Pf=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>`,Sf=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="4" height="16" x="6" y="4" /><rect width="4" height="16" x="14" y="4" /></svg>`,Of=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>`,Af=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>`,If=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>`,Mf=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>`,Lf=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>`,zf=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>`,Df=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>`,Uf=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>`,Tf=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></svg>`,Vf=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg>`,Nf=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2" /><path d="M15 16v-2" /><path d="M8 9h2" /><path d="M20 9h2" /><path d="M17.8 11.8 19 13" /><path d="M15 9h0" /><path d="M17.8 6.2 19 5" /><path d="m3 21 9-9" /><path d="M12.2 6.2 11 5" /></svg>`,Hf=b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`,ea=class extends qr{constructor(){super(),this.defineIcon("add",uf.strings[0]),this.defineIcon("alert",cf.strings[0]),this.defineIcon("attachment",hf.strings[0]),this.defineIcon("calendar",df.strings[0]),this.defineIcon("check",pf.strings[0]),this.defineIcon("clipboard",ff.strings[0]),this.defineIcon("code",mf.strings[0]),this.defineIcon("colorpicker",vf.strings[0]),this.defineIcon("copy",bf.strings[0]),this.defineIcon("delete",gf.strings[0]),this.defineIcon("document",_f.strings[0]),this.defineIcon("download",yf.strings[0]),this.defineIcon("edit",xf.strings[0]),this.defineIcon("favorite",wf.strings[0]),this.defineIcon("folder",kf.strings[0]),this.defineIcon("forbidden",Ef.strings[0]),this.defineIcon("info",Cf.strings[0]),this.defineIcon("link",$f.strings[0]),this.defineIcon("lock",Pf.strings[0]),this.defineIcon("pause",Sf.strings[0]),this.defineIcon("picture",Of.strings[0]),this.defineIcon("play",Af.strings[0]),this.defineIcon("remove",If.strings[0]),this.defineIcon("search",Mf.strings[0]),this.defineIcon("see",Lf.strings[0]),this.defineIcon("settings",zf.strings[0]),this.defineIcon("subtract",Df.strings[0]),this.defineIcon("sync",Uf.strings[0]),this.defineIcon("unlock",Tf.strings[0]),this.defineIcon("unsee",Vf.strings[0]),this.defineIcon("wand",Nf.strings[0]),this.defineIcon("wrong",Hf.strings[0])}},Bf=Object.getOwnPropertyDescriptor,jf=(t,e,i,o)=>{for(var r=o>1?void 0:o?Bf(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(r)||r);return r},hc=class extends Kr{constructor(){super(),this.registry=new ea}};hc=jf([h("uui-icon-registry-essential")],hc);var Rf=Object.defineProperty,Wf=Object.getOwnPropertyDescriptor,Qi=(t,e,i,o)=>{for(var r=o>1?void 0:o?Wf(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Rf(e,i,r),r},Te=class extends G(d){constructor(){super(),this.accept="",this.multiple=!1,this._files=[],this._updateFileWrappers=t=>{let e=[];for(let i of t)this.multiple?e.push(i):e=[i];this._files=e},this.addEventListener("dragenter",()=>this._setShowDropzone(!0)),this.addEventListener("dragleave",()=>this._setShowDropzone(!1)),this.addEventListener("drop",()=>this._setShowDropzone(!1))}get value(){return super.value}set value(t){if(super.value=t,t instanceof FormData){let e=this.multiple?t.getAll(this.name):[t.get(this.name)];this._updateFileWrappers(e);return}if(t instanceof File){this._updateFileWrappers([t]);return}}connectedCallback(){super.connectedCallback(),y(this,"uui-icon"),y(this,"uui-file-dropzone"),y(this,"uui-button"),y(this,"uui-action-bar"),y(this,"uui-file-preview")}getFormElement(){return this._dropZone}async blur(){await this.updateComplete,this._dropzone.blur()}async focus(){await this.updateComplete,this._dropzone.focus()}async click(){await this.updateComplete,this._dropzone.browse()}_handleClick(t){t.stopImmediatePropagation(),this._dropzone.browse()}async _handleFilesChange(t){let i=t.detail.files.filter(r=>r instanceof File||r.isFile);if(!this.multiple){let r=i[0],n=r instanceof File?r:await this._getFile(r);if(this.value instanceof File){this.value=n;return}if(this.value instanceof FormData){this.value.delete(this.name),this.value.append(this.name,n),this._updateFileWrappers([n]);return}}let o=this.value;if(i.length>0&&!(this.value instanceof FormData)&&(o=new FormData),o instanceof FormData)for(let r of i){let s=r instanceof File;o.append(this.name,s?r:await this._getFile(r))}this.value=o}async _getFile(t){return await new Promise((e,i)=>t.file(e,i))}_removeFile(t){let e=this._files[t];if(this.value instanceof FormData){let o=this.value.getAll(this.name).filter(r=>r!==e);if(o.length===0)this.value="";else{this.value.delete(this.name);for(let r of o)this.value.append(this.name,r)}this._updateFileWrappers(o)}this.value instanceof File&&(this.value="",this._updateFileWrappers([]))}_setShowDropzone(t){t?this._dropZone.style.display="flex":this._dropZone.style.display="none"}_renderFileItem(t,e){return l`<uui-file-preview .file="${t}">
      <uui-action-bar slot="actions">
        <uui-button
          @click=${()=>this._removeFile(e)}
          color="danger"
          label=${`Delete ${t.name}`}>
          <uui-icon name="delete" .fallback=${Rl.strings[0]}></uui-icon>
        </uui-button>
      </uui-action-bar>
    </uui-file-preview>`}_renderFiles(){return l`${Yi(this._files,t=>t.name+t.size,(t,e)=>this._renderFileItem(t,e))}`}render(){return l`
      <uui-file-dropzone
        id="dropzone"
        ?multiple=${this.multiple}
        .accept=${this.accept}
        @change=${this._handleFilesChange}
        label="Drop files here"></uui-file-dropzone>
      <div id="files">
        ${this._renderFiles()}
        ${this._files.length===0||this.multiple?l`<uui-button
              @click=${this._handleClick}
              id="add-button"
              look="placeholder"
              label="Add"></uui-button>`:w}
      </div>
    `}};Te.styles=[c`
      :host {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        box-sizing: border-box;
        border: 1px solid var(--uui-color-border,#d8d7d9);
      }

      #input {
        position: absolute;
        width: 0px;
        height: 0px;
        opacity: 0;
        display: none;
      }

      #files {
        display: grid;
        box-sizing: border-box;
        justify-items: center;
        width: 100%;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        grid-auto-rows: min-content;
        gap: 16px;
        padding: 16px;
        overflow: auto;
        max-height: 100%;
      }

      #dropzone {
        display: none;
        position: absolute;
        inset: 0px;
        z-index: 10;
        justify-content: center;
        align-items: center;
      }

      #add-button {
        width: 150px;
        height: 150px;
        display: flex;
        padding: 16px;
        box-sizing: border-box;
        justify-content: center;
        align-items: stretch;
      }
    `];Qi([E("#dropzone")],Te.prototype,"_dropzone",2);Qi([E("#dropzone")],Te.prototype,"_dropZone",2);Qi([a({type:String})],Te.prototype,"accept",2);Qi([a({type:Boolean})],Te.prototype,"multiple",2);Qi([v()],Te.prototype,"_files",2);Te=Qi([h("uui-input-file")],Te);var Ve=class extends k{constructor(e,i={}){super(e,{bubbles:!0,...i})}};Ve.CHANGE="change";Ve.INPUT="input";var Ff=Object.defineProperty,Gf=Object.getOwnPropertyDescriptor,dc=t=>{throw TypeError(t)},tt=(t,e,i,o)=>{for(var r=o>1?void 0:o?Gf(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Ff(e,i,r),r},qf=(t,e,i)=>e.has(t)||dc("Cannot "+i),Kf=(t,e,i)=>e.has(t)?dc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Xf=(t,e,i)=>(qf(t,e,"access private method"),i),ia,pc,z=class extends G(F("",d),""){constructor(){super(),Kf(this,ia),this.minlengthMessage=t=>`${t} characters left`,this.maxlengthMessage=(t,e)=>`Maximum length exceeded (${e}/${t} characters)`,this.disabled=!1,this.readonly=!1,this.placeholder="",this.autoWidth=!1,this.inputMode="text",this.tabIndex=0,this._type="text",this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0")}),this.addEventListener("blur",()=>{this.style.setProperty("--uui-show-focus-outline","")}),this.addEventListener("keydown",Xf(this,ia,pc)),this.addValidator("tooShort",()=>{let t=this.minlengthMessage;return typeof t=="function"?t(this.minlength?this.minlength-String(this.value).length:0):t},()=>!!this.minlength&&String(this.value).length<this.minlength),this.addValidator("tooLong",()=>{let t=this.maxlengthMessage;return typeof t=="function"?t(this.maxlength??0,String(this.value).length):t},()=>!!this.maxlength&&String(this.value).length>this.maxlength),this.updateComplete.then(()=>{this.addFormControlElement(this._input)})}get type(){return this._type}set type(t){this._type=t}async blur(){await this.updateComplete,this._input.blur()}async focus(){await this.updateComplete,this._input.focus()}async select(){await this.updateComplete,this._input.select()}getFormElement(){return this.shadowRoot?.querySelector("input")}onInput(t){t.stopPropagation(),this.value=t.target.value,this.dispatchEvent(new Ve(Ve.INPUT))}onChange(t){t.stopPropagation(),this.pristine=!1,this.dispatchEvent(new Ve(Ve.CHANGE))}renderPrepend(){return l`<slot name="prepend"></slot>`}renderAppend(){return l`<slot name="append"></slot>`}render(){return l`
      ${this.renderPrepend()}
      ${this.autoWidth?this.renderInputWithAutoWidth():this.renderInput()}
      ${this.renderAppend()}
    `}renderInputWithAutoWidth(){return l`<div id="control">
      ${this.renderInput()}${this.renderAutoWidthBackground()}
    </div>`}renderInput(){return l`<input
      id="input"
      .type=${this.type}
      .value=${this.value}
      .name=${this.name}
      pattern=${x(this.pattern)}
      min=${x(this.min)}
      max=${x(this.max)}
      step=${x(this.step)}
      spellcheck=${this.spellcheck}
      autocomplete=${x(this.autocomplete)}
      placeholder=${x(this.placeholder)}
      aria-label=${x(this.label)}
      inputmode=${x(this.inputMode)}
      ?disabled=${this.disabled}
      ?autofocus=${this.autofocus}
      ?required=${this.required}
      ?readonly=${this.readonly}
      tabindex=${x(this.tabIndex)}
      @input=${this.onInput}
      @change=${this.onChange} />`}renderAutoWidthBackground(){return l` <div id="auto" aria-hidden="true">${this.renderText()}</div>`}renderText(){return l`${this.value.length>0?this.value:this.placeholder}`}};ia=new WeakSet;pc=function(t){this.type!=="color"&&t.key=="Enter"&&this.submit()};z.formAssociated=!0;z.styles=[c`
      :host {
        position: relative;
        display: inline-flex;
        align-items: stretch;
        height: var(--uui-input-height, var(--uui-size-11,33px));
        text-align: left;
        color: var(--uui-color-text,#060606);
        color-scheme: var(--uui-color-scheme, normal);
        box-sizing: border-box;
        background-color: var(
          --uui-input-background-color,
          var(--uui-color-surface,#fff)
        );
        border: var(--uui-input-border-width, 1px) solid
          var(--uui-input-border-color, var(--uui-color-border,#d8d7d9));
        border-radius: var(--uui-border-radius,3px);

        --uui-button-height: 100%;
        --auto-width-text-margin-right: 0;
        --auto-width-text-margin-left: 0;
      }

      #control {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        flex-grow: 1;
      }

      #auto {
        border: 0 1px solid transparent;
        visibility: hidden;
        white-space: pre;
        z-index: -1;
        height: 0px;
        padding: 0 var(--uui-size-space-3,9px);
        margin: 0 var(--auto-width-text-margin-right) 0
          var(--auto-width-text-margin-left);
      }

      :host([auto-width]) #input {
        width: 10px;
        min-width: 100%;
      }

      :host(:hover) {
        border-color: var(
          --uui-input-border-color-hover,
          var(--uui-color-border-standalone,#c2c2c2)
        );
      }
      /* TODO: Fix so we dont get double outline when there is focus on things in the slot. */
      :host(:focus-within) {
        border-color: var(
          --uui-input-border-color-focus,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }
      :host(:focus) {
        border-color: var(
          --uui-input-border-color-focus,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
      }
      :host([disabled]) {
        background-color: var(
          --uui-input-background-color-disabled,
          var(--uui-color-disabled,#f3f3f5)
        );
        border-color: var(
          --uui-input-border-color-disabled,
          var(--uui-color-disabled,#f3f3f5)
        );

        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) input {
        -webkit-text-fill-color: var(
          --uui-color-disabled-contrast,#c4c4c4
        ); /* required on Safari and IOS */
      }
      :host([readonly]) {
        background-color: var(
          --uui-input-background-color-readonly,
          var(--uui-color-disabled,#f3f3f5)
        );
        border-color: var(
          --uui-input-border-color-readonly,
          var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ))
        );
      }

      :host(:not([pristine]):invalid),
      /* polyfill support */
      :host(:not([pristine])[internals-invalid]) {
        border-color: var(--uui-color-invalid,#d42054);
      }

      input {
        font-family: inherit;
        padding: 1px var(--uui-size-space-3,9px);
        font-size: inherit;
        color: inherit;
        border-radius: var(--uui-border-radius,3px);
        box-sizing: border-box;
        border: none;
        background: none;
        width: 100%;
        height: inherit;
        text-align: inherit;
        outline: none;
      }

      input[type='password']::-ms-reveal {
        display: none;
      }

      /* TODO: make sure color looks good, or remove it as an option as we want to provide color-picker component */
      input[type='color'] {
        width: 30px;
        padding: 0;
        border: none;
      }

      slot[name='prepend'],
      slot[name='append'] {
        display: flex;
        align-items: center;
        line-height: 1;
        height: 100%;
      }

      ::slotted(uui-input),
      ::slotted(uui-input-lock) {
        height: 100%;
        --uui-input-border-width: 0;
      }
    `];tt([a()],z.prototype,"min",2);tt([a({type:Number})],z.prototype,"minlength",2);tt([a({attribute:"minlength-message"})],z.prototype,"minlengthMessage",2);tt([a()],z.prototype,"max",2);tt([a({type:Number})],z.prototype,"maxlength",2);tt([a({attribute:"maxlength-message"})],z.prototype,"maxlengthMessage",2);tt([a({type:Number})],z.prototype,"step",2);tt([a({type:Boolean,reflect:!0})],z.prototype,"disabled",2);tt([a({type:Boolean,reflect:!0})],z.prototype,"readonly",2);tt([a()],z.prototype,"placeholder",2);tt([a()],z.prototype,"autocomplete",2);tt([a({type:Boolean,reflect:!0,attribute:"auto-width"})],z.prototype,"autoWidth",2);tt([a({type:String})],z.prototype,"type",1);tt([a({attribute:"inputmode"})],z.prototype,"inputMode",2);tt([a({type:String})],z.prototype,"pattern",2);tt([a({type:Number,reflect:!1,attribute:"tabindex"})],z.prototype,"tabIndex",2);tt([E("#input")],z.prototype,"_input",2);z=tt([h("uui-input")],z);var Xr=class extends k{constructor(e,i={}){super(e,{bubbles:!0,...i})}};Xr.LOCK_CHANGE="lock-change";var Yf=Object.defineProperty,Zf=Object.getOwnPropertyDescriptor,fc=t=>{throw TypeError(t)},Cs=(t,e,i,o)=>{for(var r=o>1?void 0:o?Zf(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Yf(e,i,r),r},mc=(t,e,i)=>e.has(t)||fc("Cannot "+i),Qf=(t,e,i)=>(mc(t,e,"read from private field"),i?i.call(t):e.get(t)),Jf=(t,e,i)=>e.has(t)?fc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),tm=(t,e,i,o)=>(mc(t,e,"write to private field"),e.set(t,i),i),Es,Ji=class extends z{constructor(){super(),Jf(this,Es,!0),this.unlockLabel="Unlock input",this.lockLabel="Lock input",this.readonly=!0,this.tabIndex=-1}set locked(t){tm(this,Es,t),this.tabIndex=t?-1:0}get locked(){return Qf(this,Es)}connectedCallback(){super.connectedCallback(),y(this,"uui-icon"),y(this,"uui-button")}_onLockToggle(){this.readonly=this.locked=!this.locked,this.pristine=!1,this.dispatchEvent(new Xr(Xr.LOCK_CHANGE)),this.locked||this._input?.focus()}renderIcon(){return this.locked===!0?l`<uui-icon name="lock" .fallback=${Wl.strings[0]}></uui-icon>`:l`<uui-icon
          name="unlock"
          .fallback=${Kl.strings[0]}></uui-icon>`}renderPrepend(){return l`<uui-button
      .disabled=${this.disabled}
      @click=${this._onLockToggle}
      compact
      id="lock"
      label="${this.locked?this.unlockLabel:this.lockLabel}">
      ${this.renderIcon()}
    </uui-button>`}};Es=new WeakMap;Ji.styles=[...z.styles,c`
      #lock {
        height: 100%;

        --uui-button-padding-left-factor: 0.75;
        --uui-button-padding-right-factor: 0.75;
        font-size: 12px;
      }

      :host([locked]) #input {
        cursor: not-allowed;
        opacity: 0.55;
      }
    `];Cs([a({type:Boolean,reflect:!0})],Ji.prototype,"locked",1);Cs([a({type:String,reflect:!1,attribute:"unlock-label"})],Ji.prototype,"unlockLabel",2);Cs([a({type:String,reflect:!1,attribute:"lock-label"})],Ji.prototype,"lockLabel",2);Ji=Cs([h("uui-input-lock")],Ji);var em=Object.defineProperty,im=Object.getOwnPropertyDescriptor,ra=(t,e,i,o)=>{for(var r=o>1?void 0:o?im(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&em(e,i,r),r},Yr=class extends z{constructor(){super(...arguments),this.passwordType="password"}get type(){return this.passwordType}set type(t){this.passwordType=t}_onPasswordToggle(){this.passwordType==="password"?this.passwordType="text":this.passwordType="password"}connectedCallback(){super.connectedCallback(),y(this,"uui-icon"),y(this,"uui-button"),this.hasAttribute("spellcheck")||(this.spellcheck=!1)}renderIcon(){return this.passwordType==="password"?l`<uui-icon name="see" .fallback=${Gl.strings[0]}></uui-icon>`:l`<uui-icon
          name="unsee"
          .fallback=${Xl.strings[0]}></uui-icon>`}renderAppend(){return l`<uui-button
      .disabled=${this.disabled}
      @click=${this._onPasswordToggle}
      compact
      label="${this.passwordType==="password"?"Show password":"Hide password"}"
      id="eye">
      ${this.renderIcon()}
    </uui-button>`}};Yr.styles=[...z.styles,c`
      #eye {
        height: 100%;
        margin-left: -6px;
      }

      #clear:hover {
        color: black;
      }
    `];ra([v()],Yr.prototype,"passwordType",2);ra([a()],Yr.prototype,"type",1);Yr=ra([h("uui-input-password")],Yr);var rm=Object.getOwnPropertyDescriptor,om=(t,e,i,o)=>{for(var r=o>1?void 0:o?rm(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(r)||r);return r},oa=class extends d{render(){return l`<slot></slot>`}};oa.styles=[c`
      :host {
        display: inline-block;
        font-family: inherit;
        font-size: var(--uui-size-4,12px);
        color: var(--uui-color-text,#060606);
      }

      ::slotted(*:first-child)uui-key {
        margin-left: 0px;
      }

      ::slotted(*:last-child)uui-key {
        margin-right: 0px;
      }
    `];oa=om([h("uui-keyboard-shortcut")],oa);var sm=Object.getOwnPropertyDescriptor,nm=(t,e,i,o)=>{for(var r=o>1?void 0:o?sm(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(r)||r);return r},sa=class extends d{render(){return l`<slot></slot>`}};sa.styles=[c`
      :host {
        background: var(--uui-color-surface,#fff);
        border: 1px solid var(--uui-color-border,#d8d7d9);
        font-family: inherit;
        font-size: var(--uui-type-small-size,12px);
        color: var(--uui-color-text,#060606);
        border-radius: 5px;
        margin: 0px 5px;
        padding: 5px 7px;
        box-sizing: border-box;
        user-select: none;
        text-transform: lowercase;
      }
    `];sa=nm([h("uui-key")],sa);var am=Object.defineProperty,lm=Object.getOwnPropertyDescriptor,$s=(t,e,i,o)=>{for(var r=o>1?void 0:o?lm(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&am(e,i,r),r},tr=class extends d{constructor(){super(),this.disabled=!1,this.for=null,this.required=!1,this.addEventListener("click",this._onClick)}_onClick(){if(this.disabled)return;let t=this.getForElement();t&&(t.focus(),t.click())}getForElement(){return typeof this.for=="string"?this.getRootNode()?.getElementById(this.for)||null:this.for||null}render(){return l`
      <slot></slot>
      ${this.required?l`<div id="required">*</div>`:""}
    `}};tr.styles=[c`
      :host {
        font-weight: 700;
      }
      :host([for]) {
        cursor: pointer;
      }
      :host([disabled]) {
        cursor: default;
      }
      #required {
        display: inline;
        color: var(--uui-color-danger,#d42054);
        font-weight: 900;
      }
    `];$s([a({type:Boolean,reflect:!0})],tr.prototype,"disabled",2);$s([a({reflect:!0,attribute:!0})],tr.prototype,"for",2);$s([a({type:Boolean,reflect:!0})],tr.prototype,"required",2);tr=$s([h("uui-label")],tr);var um=Object.defineProperty,cm=Object.getOwnPropertyDescriptor,na=(t,e,i,o)=>{for(var r=o>1?void 0:o?cm(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&um(e,i,r),r},Zr=class extends d{constructor(){super(...arguments),this._progress=0,this._animationDuration=1}get progress(){return this._progress}set progress(t){let e=this._progress;this._progress=O(t,0,100),this.requestUpdate("progress",e)}get animationDuration(){return this._animationDuration}set animationDuration(t){let e=this._animationDuration;this._animationDuration=t>=0?t:1,this.requestUpdate("animationDuration",e)}render(){return l`
      ${this.progress?l`<div
            id="bar"
            style="max-width: ${this.progress.toString()}%;"></div>`:""}
      <div
        id="bar-anim"
        class=${this.progress?"":"animate"}
        style="animation-duration: ${this.animationDuration}s"></div>
      <div id="bar-background"></div>
    `}};Zr.styles=[c`
      :host {
        position: relative;
        display: block;
        width: 100%;
        height: 4px;
        overflow: hidden;
        color: var(--uui-color-default,#1b264f);
      }

      #bar,
      #bar-anim,
      #bar-background {
        position: absolute;
        inset: 0; /* top, left, bottom and right = 0*/
        height: 100%;
      }

      #bar-background,
      #bar {
        background: currentColor;
      }

      #bar {
        transition: max-width 120ms ease;
      }

      #bar-background {
        opacity: 0.3;
      }

      #bar-anim {
        transform: scaleX(0.4);
        animation: bar-loading 1s infinite linear;
        background: linear-gradient(
          -90deg,
          white 0%,
          white 25%,
          transparent 100%
        );
      }

      #bar-anim.animate {
        background: linear-gradient(
          -90deg,
          currentColor 0%,
          currentColor 25%,
          transparent 100%
        );
      }

      @keyframes bar-loading {
        0% {
          transform-origin: -175% 0%;
        }
        100% {
          transform-origin: 175% 0%;
        }
      }
    `];na([a({type:Number})],Zr.prototype,"progress",1);na([a({type:Number})],Zr.prototype,"animationDuration",1);Zr=na([h("uui-loader-bar")],Zr);var hm=Object.defineProperty,dm=Object.getOwnPropertyDescriptor,aa=(t,e,i,o)=>{for(var r=o>1?void 0:o?dm(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&hm(e,i,r),r},Qr=class extends d{constructor(){super(...arguments),this.progress=0,this.showProgress=!1,this._resizeObserver=new ResizeObserver(()=>this.onResize()),this._isLarge=!1}_circleStyle(){return this.progress?{strokeDasharray:`${this.progress} 100`}:{strokeDasharray:"100 100"}}firstUpdated(){this._resizeObserver.observe(this)}disconnectedCallback(){this._resizeObserver.disconnect()}onResize(){let t=this.clientHeight>=30;this._isLarge!=t&&(this._isLarge=t,this.requestUpdate())}renderProgress(){return this._isLarge&&this.progress&&this.showProgress?l`<span id="progress-display">${this.progress}</span>`:""}render(){return l`
      <svg
        id="spinner"
        class=${this.progress?"":"animate"}
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg">
        <circle id="bg" cx="50%" cy="50%" r="16" />
        <g>
          <circle
            id="circle"
            cx="50%"
            cy="50%"
            r="16"
            style=${at(this._circleStyle())} />
        </g>
      </svg>
      ${this.renderProgress()}
    `}};Qr.styles=[c`
      :host {
        vertical-align: middle;
        line-height: 0;
        overflow: hidden;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 1em;
        height: 1em;
        color: var(--uui-color-default,#1b264f);
      }

      #spinner {
        width: 100%;
        height: 100%;
      }
      #spinner g {
        transform-origin: 50% 50%;
        animation: 18s linear infinite spinner-animation;
      }
      #spinner.animate g {
        animation: 800ms linear infinite spinner-animation;
      }

      @keyframes spinner-animation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      #spinner.animate #circle {
        animation: 1400ms ease-in infinite circle-animation;
        /** ease-in */
      }

      @keyframes circle-animation {
        0% {
          stroke-dashoffset: -55;
        }
        38% {
          stroke-dashoffset: -88;
        }
        100% {
          stroke-dashoffset: -55;
        }
      }

      svg circle {
        fill: transparent;
        stroke: currentColor;
        stroke-width: 6px;
      }

      #bg {
        opacity: 0.5;
      }

      #circle {
        stroke-linecap: round;
        stroke-dasharray: 0 0;

        transform-origin: 50% 50%;
        transform: rotate(-90deg);
        transition: stroke-dasharray 120ms ease;
      }

      #progress-display {
        position: absolute;
        left: 0;
        top: 50%;
        right: 0;
        stroke: currentColor;
        transform: translateY(-50%);
        font-size: 0.3em;
        font-weight: 700;
        text-align: center;

        /* Center the text */
        padding-top: 0.09em;
      }
    `];aa([a({type:Number})],Qr.prototype,"progress",2);aa([a({type:Boolean,reflect:!0,attribute:"show-progress"})],Qr.prototype,"showProgress",2);Qr=aa([h("uui-loader-circle")],Qr);var pm=Object.getOwnPropertyDescriptor,fm=(t,e,i,o)=>{for(var r=o>1?void 0:o?pm(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(r)||r);return r},la=class extends d{render(){return l`
      <div></div>
      <div></div>
      <div></div>
    `}};la.styles=[c`
      :host {
        color: var(--uui-color-default,#1b264f);
      }

      div {
        display: inline-block;
        width: var(--uui-size-2,6px);
        height: var(--uui-size-2,6px);
        border: 2px solid currentColor;
        border-radius: 100%;
        animation: loaderAnimation 1.4s infinite;
      }

      div:nth-child(1n) {
        animation-delay: 0s;
      }

      div:nth-child(2n) {
        animation-delay: 0.15s;
      }

      div:nth-child(3n) {
        animation-delay: 0.3s;
      }

      @keyframes loaderAnimation {
        0% {
          transform: scale(0.5);
          background-color: currentColor;
        }
        50% {
          transform: scale(1);
          background-color: transparent;
        }
        100% {
          transform: scale(0.5);
          background-color: currentColor;
        }
      }
    `];la=fm([h("uui-loader")],la);var Jt=class extends k{};Jt.SHOW_CHILDREN="show-children";Jt.HIDE_CHILDREN="hide-children";Jt.CLICK_LABEL="click-label";var mm=Object.defineProperty,vm=Object.getOwnPropertyDescriptor,bc=t=>{throw TypeError(t)},Bt=(t,e,i,o)=>{for(var r=o>1?void 0:o?vm(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&mm(e,i,r),r},bm=(t,e,i)=>e.has(t)||bc("Cannot "+i),gm=(t,e,i)=>e.has(t)?bc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),vc=(t,e,i)=>(bm(t,e,"access private method"),i),Ps,ua,Et=class extends $e(Ot(Kt(F("label",d)))){constructor(){super(...arguments),gm(this,Ps),this.disabled=!1,this.showChildren=!1,this.hasChildren=!1,this.loading=!1,this.caretLabel="Reveal the underlying items",this.iconSlotHasContent=!1,this._labelButtonChanged=t=>{this.selectableTarget=t||this},this._iconSlotChanged=t=>{this.iconSlotHasContent=t.target.assignedNodes({flatten:!0}).length>0},this._onCaretClicked=()=>{let t=this.showChildren?Jt.HIDE_CHILDREN:Jt.SHOW_CHILDREN,e=new Jt(t,{cancelable:!0});this.dispatchEvent(e),!e.defaultPrevented&&(this.showChildren=!this.showChildren)}}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","menu"),y(this,"uui-symbol-expand"),y(this,"uui-loader-bar")}async focus(){await this.updateComplete,this.shadowRoot?.querySelector("#label-button")?.focus?.()}_renderLabelInside(){return l` <slot
        name="icon"
        id="icon"
        style=${this.iconSlotHasContent?"":"display: none;"}
        @slotchange=${this._iconSlotChanged}></slot>
      ${this.renderLabel()}
      <slot name="badge" id="badge"> </slot>`}_renderLabelAsAnchor(){return this.disabled?l` <span id="label-button" ${ji(this._labelButtonChanged)}>
        ${this._renderLabelInside()}
      </span>`:l` <a
      id="label-button"
      ${ji(this._labelButtonChanged)}
      href=${x(this.href)}
      target=${x(this.target||void 0)}
      rel=${x(this.rel||x(this.target==="_blank"?"noopener noreferrer":void 0))}
      @click=${vc(this,Ps,ua)}
      ?disabled=${this.disabled}
      aria-label="${this.label}">
      ${this._renderLabelInside()}
    </a>`}_renderLabelAsButton(){return l` <button
      id="label-button"
      ${ji(this._labelButtonChanged)}
      @click=${vc(this,Ps,ua)}
      ?disabled=${this.disabled}
      aria-label="${this.label}">
      ${this._renderLabelInside()}
    </button>`}render(){return l`
      <div id="menu-item" aria-label="menuitem" role="menuitem">
        ${this.hasChildren?l`<button
              id="caret-button"
              aria-label=${this.caretLabel}
              @click=${this._onCaretClicked}>
              <uui-symbol-expand
                aria-hidden="true"
                ?open=${this.showChildren}></uui-symbol-expand>
            </button>`:""}
        ${this.href&&this.selectOnly!==!0&&this.selectable!==!0?this._renderLabelAsAnchor():this._renderLabelAsButton()}

        <div id="label-button-background"></div>
        <slot id="actions-container" name="actions"></slot>
        ${this.loading?l`<uui-loader-bar id="loader"></uui-loader-bar>`:""}
      </div>
      ${this.showChildren?l`<slot></slot>`:""}
    `}};Ps=new WeakSet;ua=function(){if(this.selectOnly)return;let t=new Jt(Jt.CLICK_LABEL);this.dispatchEvent(t)};Et.styles=[c`
      :host {
        box-sizing: border-box;
        display: block;
        --uui-menu-item-child-indent: calc(var(--uui-menu-item-indent, 0) + 1);
        user-select: none;
        --flat-structure-reversed: calc(
          1 - var(--uui-menu-item-flat-structure, 0)
        );
      }

      #menu-item {
        position: relative;
        padding-left: calc(var(--uui-menu-item-indent, 0) * var(--uui-size-4,12px));
        display: grid;
        grid-template-columns:
          calc(var(--flat-structure-reversed) * var(--uui-size-8,24px))
          1fr;
        grid-template-rows: 1fr;
        white-space: nowrap;
      }

      /** Not active, not selected, not disabled: */
      :host(:not([active], [selected], [disabled], [select-mode='highlight']))
        #menu-item
        #label-button:hover
        ~ #label-button-background,
      :host(:not([active], [selected], [disabled]))
        #menu-item
        #caret-button:hover {
        background-color: var(
          --uui-menu-item-background-color-hover,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
      }
      :host(:not([active], [selected], [disabled]))
        #menu-item
        #label-button:hover,
      :host(:not([active], [selected])) #menu-item #caret-button:hover {
        color: var(
          --uui-menu-item-color-hover,
          var(--uui-color-interactive-emphasis,#3544b1)
        );
      }

      /** Active */
      :host([active]) #label-button,
      :host([active]) #caret-button {
        color: var(
          --uui-menu-item-color-active,
          var(--uui-color-current-contrast,#1b264f)
        );
      }
      :host([active]) #label-button-background {
        background-color: var(
          --uui-menu-item-background-color-active,
          var(--uui-color-current,#f5c1bc)
        );
      }
      :host([active]) #label-button:hover ~ #label-button-background,
      :host([active]) #caret-button:hover {
        background-color: var(
          --uui-menu-item-background-color-active-hover,
          var(--uui-color-current-emphasis,rgb(
    248,
    214,
    211
  ))
        );
      }

      /** Disabled */
      :host([disabled]) #menu-item {
        background-color: var(
          --uui-menu-item-background-color-disabled,
          var(--uui-color-disabled,#f3f3f5)
        );
      }

      /** Selected */
      :host([selected]:not([select-mode='highlight'], [disabled]))
        #label-button,
      :host([selected]:not([select-mode='highlight'], [disabled]))
        #caret-button {
        color: var(
          --uui-menu-item-color-selected,
          var(--uui-color-selected-contrast,#fff)
        );
      }
      :host([selected]:not([select-mode='highlight'], [disabled]))
        #label-button-background {
        background-color: var(
          --uui-menu-item-background-color-selected,
          var(--uui-color-selected,#3544b1)
        );
      }
      /** Selected, not highlight mode */
      :host([selected]:not([select-mode='highlight'], [disabled]))
        #label-button:hover
        ~ #label-button-background,
      :host([selected]:not([select-mode='highlight'], [disabled]))
        #caret-button:hover {
        background-color: var(
          --uui-menu-item-background-color-selected-hover,
          var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ))
        );
      }

      /** highlight mode, default */
      :host([select-mode='highlight']:not([disabled], [active], [selectable]))
        #menu-item
        #label-button:hover
        ~ #label-button-background {
        border-radius: var(--uui-border-radius,3px);
        background-color: var(
          --uui-menu-item-background-color-highlight,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
      }

      /** highlight mode, active */
      :host([select-mode='highlight'][active]:not([disabled]))
        #menu-item
        #label-button-background {
        border-radius: var(--uui-border-radius,3px);
      }

      /** highlight mode, active & selected */
      :host([select-mode='highlight'][active][selected]:not([disabled]))
        #menu-item
        #label-button:hover
        ~ #label-button-background {
        border-radius: var(--uui-border-radius,3px);
        background-color: var(
          --uui-menu-item-background-color-highlight-active-selected,
          var(--uui-color-current-emphasis,rgb(
    248,
    214,
    211
  ))
        );
      }

      /** highlight mode, selected */
      :host([select-mode='highlight'][selected]:not([disabled]))
        #menu-item
        #label-button,
      :host([select-mode='highlight'][selected]:not([disabled]))
        #menu-item
        #caret-button {
        color: var(
          --uui-menu-item-color-highlight-selected,
          var(--uui-color-interactive,#1b264f)
        );
      }
      :host([select-mode='highlight'][selectable][selected]:not([disabled]))
        #menu-item
        #label-button:hover {
        color: var(
          --uui-menu-item-background-color-highlight-selectable-selected,
          var(--uui-color-interactive-emphasis,#3544b1)
        );
      }

      /** highlight mode, selected, selectable caret hover */
      :host([selected][selectable][select-mode='highlight']:not([active]))
        #menu-item
        #caret-button:hover {
        border-radius: var(--uui-border-radius,3px);
        background-color: var(
          --uui-menu-item-background-color-highlight-selectable-selected,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
        color: var(
          --uui-menu-item-color-highlight-selectable-selected,
          var(--uui-color-interactive-emphasis,#3544b1)
        );
      }

      /** Highlight borders */

      :host([select-mode='highlight']:not([disabled]))
        #menu-item
        #label-button-background::after {
        border-radius: var(--uui-border-radius,3px);
        position: absolute;
        content: '';
        inset: 1px;
        border: 2px solid
          var(--uui-menu-item-border-color-highlight, var(--uui-color-selected,#3544b1));
        opacity: 0;
      }

      :host([select-mode='highlight'][selectable][selected]:not([disabled]))
        #menu-item
        #caret-button:hover::after {
        border-top-left-radius: var(--uui-border-radius,3px);
        border-bottom-left-radius: var(--uui-border-radius,3px);
        position: absolute;
        content: '';
        inset: 1px 0 1px 1px;
        border: 2px solid
          var(--uui-menu-item-border-color-highlight, var(--uui-color-selected,#3544b1));
        border-right: none;
      }

      :host([select-mode='highlight'][selected]:not([disabled]))
        #menu-item
        #label-button-background::after {
        opacity: 1;
      }

      :host([select-mode='highlight'][selectable]:not([disabled]))
        #menu-item
        #label-button:hover
        ~ #label-button-background::after {
        opacity: 0.33;
      }
      :host([select-mode='highlight'][selected]:not([disabled]))
        #menu-item
        #label-button:hover
        ~ #label-button-background::after {
        opacity: 0.66;
      }

      /** Buttons */

      :host([disabled]) #label-button {
        cursor: default;
        opacity: 0.5;
      }

      button {
        display: inline-flex;
        align-items: center;

        font-family: inherit;
        font-size: inherit;

        padding: 0;
        text-align: left;
        border: none;
        color: inherit;
        background-color: transparent;
        cursor: pointer;
        min-height: var(--uui-size-12,36px);
        z-index: 1;
      }

      #label-button {
        position: relative;
        flex-grow: 1;
        grid-column-start: 2;
        white-space: nowrap;
        overflow: hidden;
        padding-right: var(--uui-size-space-3,9px);
        padding-left: calc(
          var(--uui-menu-item-flat-structure) * var(--uui-size-space-3,9px)
        );
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        color: currentColor;
        min-height: var(--uui-size-12,36px);
        z-index: 1;
        font-weight: inherit;
      }

      #label-button .label {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      span#label-button {
        pointer-events: none; /* avoid hovering state on this. */
      }

      #caret-button {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
        padding-inline-end: 3px;
        color: var(--uui-color-interactive,#1b264f);
      }

      #label-button-background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: var(--uui-menu-item-border-radius, 0px);
      }

      #actions-container {
        opacity: 0;
        width: 0;
        grid-column-start: 3;
        overflow: hidden;
      }
      :host(:not([disabled])) #menu-item:hover #actions-container,
      :host(:not([disabled])) #menu-item:focus #actions-container,
      :host(:not([disabled])) #menu-item:focus-within #actions-container {
        opacity: 1;
        width: auto;
      }

      #loader {
        position: absolute;
        width: 100%;
        bottom: 0;
      }

      #icon {
        display: inline-flex;
        margin-right: var(--uui-size-2,6px);
      }

      #badge {
        font-size: 12px;
        --uui-badge-position: relative;
        --uui-badge-position: auto;
        display: block;
        margin-left: 6px;
      }

      /** Focus styling */

      :host([select-mode='highlight']) #label-button:focus-visible {
        outline: none;
        overflow: initial;
      }

      :host([select-mode='highlight']) #label-button:focus-visible::after {
        content: '';
        border-radius: calc(var(--uui-border-radius,3px) - 1px);
        position: absolute;
        inset: 3px 3px 3px -5px;
        border: 2px solid var(--uui-color-focus,#3879ff);
      }

      :host([select-mode='highlight']) #caret-button:focus-visible {
        outline: none;
        overflow: initial;
      }

      :host([select-mode='highlight']) #caret-button:focus-visible::after {
        content: '';
        position: absolute;
        inset: 3px;
        border-radius: calc(var(--uui-border-radius,3px) - 1px);
        border: 2px solid var(--uui-color-focus,#3879ff);
      }

      /** Slots */

      slot:not([name]) {
        position: relative;
        display: block;
        width: 100%;
      }
      slot:not([name]) {
        --uui-menu-item-indent: var(--uui-menu-item-child-indent);
      }

      slot[name='actions'] {
        display: flex;
        align-items: center;
        --uui-button-height: calc(var(--uui-size-base-unit) * 4);
        margin-right: var(--uui-size-base-unit);
      }
    `];Bt([a({type:Boolean,reflect:!0})],Et.prototype,"disabled",2);Bt([a({type:Boolean,reflect:!0,attribute:"show-children"})],Et.prototype,"showChildren",2);Bt([a({type:Boolean,attribute:"has-children"})],Et.prototype,"hasChildren",2);Bt([a({type:Boolean,attribute:"loading"})],Et.prototype,"loading",2);Bt([a({type:String})],Et.prototype,"href",2);Bt([a({type:String})],Et.prototype,"target",2);Bt([a({type:String})],Et.prototype,"rel",2);Bt([a({type:String,attribute:"select-mode",reflect:!0})],Et.prototype,"selectMode",2);Bt([a({type:String,attribute:"caret-label"})],Et.prototype,"caretLabel",2);Bt([v()],Et.prototype,"iconSlotHasContent",2);Et=Bt([h("uui-menu-item")],Et);var _m=Object.defineProperty,ym=Object.getOwnPropertyDescriptor,rr=(t,e,i,o)=>{for(var r=o>1?void 0:o?ym(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&_m(e,i,r),r},xm="uui:modal-open",to="uui:modal-close",wm="uui:modal-close-end",ct=class extends d{constructor(){super(...arguments),this.isOpen=!1,this.isClosing=!1,this.index=0,this.uniqueIndex=0,this._transitionDuration=250,this.open=e=>{e?.preventDefault(),e?.stopImmediatePropagation();let i=new CustomEvent(xm,{cancelable:!0}),o=new CustomEvent("open",{cancelable:!0});this.dispatchEvent(i),this.dispatchEvent(o),!(i.defaultPrevented||o.defaultPrevented)&&this._openModal()},this.close=e=>{e?.preventDefault(),e?.stopImmediatePropagation();let i=new CustomEvent(to,{cancelable:!0});this.dispatchEvent(i),!i.defaultPrevented&&this.forceClose()}}get transitionDuration(){return this._transitionDuration}set transitionDuration(e){this._transitionDuration=e,this.style.setProperty("--uui-modal-transition-duration",this._transitionDuration+"ms")}firstUpdated(e){super.firstUpdated(e),this.isClosing||this.open()}_openModal(){this.isOpen=!0,this._dialogElement?.showModal(),this._dialogElement?.addEventListener("cancel",this.close)}forceClose(){this.isClosing=!0,this.isOpen=!1,this._dialogElement?.close(),this.dispatchEvent(new CustomEvent("close-end")),this.dispatchEvent(new CustomEvent(wm)),this.remove()}};ct.styles=[c`
      dialog {
        display: block;
        margin: 0;
        padding: 0;
        max-width: unset;
        max-height: unset;
        border: none;
        background: none;
        color: var(--uui-color-text,#060606);
      }
      dialog::backdrop {
        background: none;
        opacity: 0;
      }
      dialog::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: var(--uui-modal-color-backdrop, rgba(0, 0, 0, 0.5));
        pointer-events: none;
        opacity: 1;
        transition: opacity var(--uui-modal-transition-duration, 250ms);
        z-index: 1;
      }
      :host([index='0']) dialog::after {
        opacity: 0;
      }
    `];rr([E("dialog")],ct.prototype,"_dialogElement",2);rr([a({type:Boolean,reflect:!0,attribute:"is-open"})],ct.prototype,"isOpen",2);rr([a({type:Boolean,reflect:!0,attribute:"is-closing"})],ct.prototype,"isClosing",2);rr([a({type:Number,reflect:!0})],ct.prototype,"index",2);rr([a({type:Number,reflect:!0,attribute:"unique-index"})],ct.prototype,"uniqueIndex",2);rr([a({type:Number,attribute:"transition-duration"})],ct.prototype,"transitionDuration",1);var km=Object.defineProperty,Em=Object.getOwnPropertyDescriptor,_c=t=>{throw TypeError(t)},yc=(t,e,i,o)=>{for(var r=o>1?void 0:o?Em(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&km(e,i,r),r},Cm=(t,e,i)=>e.has(t)||_c("Cannot "+i),gc=(t,e,i)=>(Cm(t,e,"read from private field"),i?i.call(t):e.get(t)),$m=(t,e,i)=>e.has(t)?_c("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Os,ha,eo=class extends ct{constructor(){super(...arguments),$m(this,Os),this.size="full"}firstUpdated(t){super.firstUpdated(t),this.style.setProperty("--uui-modal-offset",-gc(this,Os,ha)+"px")}updated(t){super.updated(t),this.uniqueIndex>10?this.setAttribute("hide",""):this.removeAttribute("hide")}forceClose(){this.isClosing||(this.isClosing=!0,this.style.setProperty("--uui-modal-offset",-gc(this,Os,ha)+"px"),setTimeout(()=>{super.forceClose()},this.transitionDuration))}render(){return l`<dialog>
      <slot></slot>
    </dialog>`}};Os=new WeakSet;ha=function(){return this._dialogElement?.getBoundingClientRect().width??0};eo.styles=[...ct.styles,c`
      :host {
        outline: none;
        --uui-modal-sidebar-left-gap: 24px;
        --uui-modal-sidebar-background: var(--uui-color-surface,#fff);
      }
      @media (min-width: 600px) {
        :host {
          --uui-modal-sidebar-left-gap: 64px;
        }
      }
      dialog {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        max-width: calc(100% - var(--uui-modal-sidebar-left-gap));
        margin-left: auto;
        right: var(--uui-modal-offset);
        transition: right var(--uui-modal-transition-duration, 250ms);
        background: var(
          --uui-modal-sidebar-background,
          var(--uui-color-surface,#fff)
        );
      }
      :host([index='0']) dialog {
        box-shadow: var(--uui-shadow-depth-5,0 19px 38px rgba(0,0,0,0.30) , 0 15px 12px rgba(0,0,0,0.22));
      }
      :host(:not([index='0'])) dialog {
        outline: 1px solid rgba(0, 0, 0, 0.1);
      }
      :host([hide]) dialog {
        display: none;
      }
      :host([size='large']) dialog {
        max-width: min(1200px, calc(100% - var(--uui-modal-sidebar-left-gap)));
      }
      :host([size='medium']) dialog {
        max-width: min(800px, calc(100% - var(--uui-modal-sidebar-left-gap)));
      }
      :host([size='small']) dialog {
        max-width: min(500px, calc(100% - var(--uui-modal-sidebar-left-gap)));
      }
    `];yc([a({reflect:!0})],eo.prototype,"size",2);eo=yc([h("uui-modal-sidebar")],eo);var Pm=Object.defineProperty,Sm=Object.getOwnPropertyDescriptor,xc=t=>{throw TypeError(t)},or=(t,e,i,o)=>{for(var r=o>1?void 0:o?Sm(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Pm(e,i,r),r},wc=(t,e,i)=>e.has(t)||xc("Cannot "+i),Jr=(t,e,i)=>(wc(t,e,"read from private field"),i?i.call(t):e.get(t)),ca=(t,e,i)=>e.has(t)?xc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Ss=(t,e,i)=>(wc(t,e,"access private method"),i),da,er,ir,pa,fa,Ne=class extends d{constructor(){super(),ca(this,ir),this.sidebarGap=64,this.transitionDurationMS=250,ca(this,da,()=>{let t=this._modals??[];if(this._modals=this.modalSlot?.assignedElements({flatten:!0}).filter(o=>o instanceof ct)??[],t.filter(o=>this._modals.indexOf(o)===-1).forEach(o=>o.removeEventListener(to,Jr(this,er))),this._modals.filter(o=>t.indexOf(o)===-1).forEach(o=>o.addEventListener(to,Jr(this,er))),this._sidebars=this._modals.filter(o=>o instanceof eo),this._modals.length===0){this.removeAttribute("backdrop");return}Ss(this,ir,pa).call(this),Ss(this,ir,fa).call(this)}),ca(this,er,t=>{if(t.stopImmediatePropagation(),t.target?.removeEventListener(to,Jr(this,er)),!this._modals||this._modals.length<=1){this.removeAttribute("backdrop");return}Ss(this,ir,pa).call(this),Ss(this,ir,fa).call(this)}),this.addEventListener(to,Jr(this,er))}firstUpdated(t){super.firstUpdated(t),this.style.setProperty("--uui-modal-transition-duration",this.transitionDurationMS+"ms")}render(){return l`<slot @slotchange=${Jr(this,da)}></slot>`}};da=new WeakMap;er=new WeakMap;ir=new WeakSet;pa=function(){this.setAttribute("backdrop","");let t=this._modals?.filter(e=>!e.isClosing).reverse()??[];t?.forEach((e,i)=>{e.index=i,e.transitionDuration=this.transitionDurationMS}),t?.forEach(e=>{let i=t?.filter(o=>o.constructor.name===e.constructor.name);e.uniqueIndex=i?.indexOf(e)??0})};fa=function(){requestAnimationFrame(()=>{let t=0,e=this._sidebars?.filter(i=>!i.isClosing).reverse()??[];for(let i=0;i<e.length;i++){let o=e[i],r=e[i+1],s=t;if(o.updateComplete.then(()=>{o.style.setProperty("--uui-modal-offset",s+"px")}),r?.hasAttribute("hide"))break;let n=o.shadowRoot?.querySelector("dialog")?.getBoundingClientRect().width??0,u=r?.shadowRoot?.querySelector("dialog")?.getBoundingClientRect().width??0,p=n+t+this.sidebarGap-u;t=p>0?p:0}})};Ne.styles=c`
    :host {
      position: fixed;
      --uui-modal-color-backdrop: rgba(0, 0, 0, 0.5);
    }
    :host::after {
      content: '';
      position: fixed;
      inset: 0;
      background-color: var(--uui-modal-color-backdrop, rgba(0, 0, 0, 0.5));
      opacity: 0;
      pointer-events: none;
      transition: opacity var(--uui-modal-transition-duration, 250ms);
    }
    :host([backdrop])::after {
      opacity: 1;
    }
  `;or([E("slot")],Ne.prototype,"modalSlot",2);or([v()],Ne.prototype,"_modals",2);or([v()],Ne.prototype,"_sidebars",2);or([a({type:Number})],Ne.prototype,"sidebarGap",2);or([a({type:Number})],Ne.prototype,"transitionDurationMS",2);Ne=or([h("uui-modal-container")],Ne);var Om=Object.getOwnPropertyDescriptor,Am=(t,e,i,o)=>{for(var r=o>1?void 0:o?Om(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(r)||r);return r},ma=class extends ct{render(){return l`
      <dialog>
        <slot></slot>
      </dialog>
    `}};ma.styles=[...ct.styles,c`
      :host {
        outline: none;
        --uui-modal-dialog-background: var(--uui-color-surface,#fff);
      }
      dialog {
        margin: auto;
        max-width: 100%;
        max-height: 100%;
        border-radius: var(
          --uui-modal-dialog-border-radius,
          calc(var(--uui-border-radius,3px) * 4)
        );
        background: var(
          --uui-modal-dialog-background,
          var(--uui-color-surface,#fff)
        );
      }
      :host([index='0']) dialog {
        box-shadow: var(--uui-shadow-depth-5,0 19px 38px rgba(0,0,0,0.30) , 0 15px 12px rgba(0,0,0,0.22));
      }
      :host(:not([index='0'])) dialog {
        outline: 1px solid rgba(0, 0, 0, 0.1);
      }
    `];ma=Am([h("uui-modal-dialog")],ma);var me=class extends k{constructor(e,i={}){super(e,{bubbles:!0,...i})}};me.CHANGE="change";var Im=Object.defineProperty,Mm=Object.getOwnPropertyDescriptor,Ct=(t,e,i,o)=>{for(var r=o>1?void 0:o?Mm(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Im(e,i,r),r},Lm=45,va=(t,e,i)=>Math.min(Math.max(t,e),i),zm=(t,e)=>Array.from({length:e-t+1},(i,o)=>t+o),mt=class extends d{constructor(){super(...arguments),this._observer=new ResizeObserver(this._calculateRange.bind(this)),this.label="",this.ariaLabel="",this.firstLabel="First",this.previousLabel="Previous",this.nextLabel="Next",this.lastLabel="Last",this._total=100,this._range=0,this._visiblePages=[],this._current=1}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","navigation"),this._visiblePages=this._generateVisiblePages(this.current),y(this,"uui-button"),y(this,"uui-button-group")}disconnectedCallback(){this._observer.disconnect()}firstUpdated(){this._observer.observe(this._pagesGroup),this.updateLabel(),this._calculateRange()}willUpdate(t){(t.has("current")||t.has("label"))&&this.updateLabel()}updateLabel(){this.ariaLabel=`${this.label||"Pagination navigation"}. Current page: ${this.current}.`}_calculateRange(){let t=this.offsetWidth,e=Array.from(this._navButtons).reduce((r,s)=>r+s.getBoundingClientRect().width,0),o=(t-e)/Lm/2;this._range=Math.max(1,Math.floor(o)),this._visiblePages=this._generateVisiblePages(this.current)}_generateVisiblePages(t){let e=t<this._range?1:t<this.total-this._range?t-this._range:this.total-this._range*2,i=t<=this._range?this._range*2+1:t<this.total-this._range?t+this._range:this.total;return zm(va(e,1,this.total),va(i,1,this.total))}get total(){return this._total}set total(t){this._total=t,this._visiblePages=this._generateVisiblePages(this._current),this.requestUpdate("total",t)}get current(){return this._current}set current(t){let e=this._current;this._current=va(t,1,this.total),this._visiblePages=this._generateVisiblePages(this._current),this.requestUpdate("current",e)}goToNextPage(){this.current++,this.dispatchEvent(new me(me.CHANGE))}goToPreviousPage(){this.current--,this.dispatchEvent(new me(me.CHANGE))}goToPage(t){this.current=t,this.dispatchEvent(new me(me.CHANGE))}focusActivePage(){requestAnimationFrame(()=>{let t=this.renderRoot.querySelector(".active");t&&t.focus()})}renderFirst(){return l`<uui-button
      compact
      look="outline"
      class="nav"
      role="listitem"
      label=${this.firstLabel}
      ?disabled=${this._current===1}
      @click=${()=>this.goToPage(1)}></uui-button>`}renderPrevious(){return l`<uui-button
      compact
      look="outline"
      class="nav"
      role="listitem"
      label=${this.previousLabel}
      ?disabled=${this._current===1}
      @click=${this.goToPreviousPage}></uui-button>`}renderNext(){return l`<uui-button
      compact
      look="outline"
      role="listitem"
      class="nav"
      label=${this.nextLabel}
      ?disabled=${this._current===this.total}
      @click=${this.goToNextPage}></uui-button>`}renderLast(){return l`
      <uui-button
        compact
        look="outline"
        role="listitem"
        class="nav"
        label=${this.lastLabel}
        ?disabled=${this.total===this._current}
        @click=${()=>this.goToPage(this.total)}></uui-button>
    `}renderDots(){return l`<uui-button
      compact
      look="outline"
      role="listitem"
      tabindex="-1"
      class="dots"
      label="More pages"
      >...</uui-button
    > `}renderPage(t){return l`<uui-button
      compact
      look="outline"
      role="listitem"
      label="Go to page ${t}"
      class=${"page"+(t===this._current?" active":"")}
      tabindex=${t===this._current?"-1":""}
      @click=${()=>{t!==this._current&&(this.goToPage(t),this.focusActivePage())}}>
      ${t}
    </uui-button>`}renderNavigationLeft(){return l` ${this.renderFirst()} ${this.renderPrevious()}
    ${this._visiblePages.includes(1)?"":this.renderDots()}`}renderNavigationRight(){return l`${this._visiblePages.includes(this.total)?"":this.renderDots()}
    ${this.renderNext()} ${this.renderLast()}`}render(){return l`<uui-button-group role="list" id="pages">
      ${this.renderNavigationLeft()}
      ${this._visiblePages.map(t=>this.renderPage(t))}
      ${this.renderNavigationRight()}
    </uui-button-group>
    `}};mt.styles=[c`
      uui-button-group {
        width: 100%;
      }

      uui-button {
        --uui-button-border-color: var(--uui-color-border-standalone,#c2c2c2);
        --uui-button-border-color-hover: var(--uui-color-interactive-emphasis,#3544b1);
        --uui-button-border-color-disabled: var(--uui-color-border-standalone,#c2c2c2);
      }

      .page {
        min-width: 36px;
        max-width: 72px;
      }
      .page.active {
        --uui-button-background-color: var(--uui-color-current,#f5c1bc);
      }

      .nav {
        min-width: 72px;
      }

      .dots {
        pointer-events: none;
      }

      .active {
        pointer-events: none;
      }
    `];Ct([_l("uui-button.nav")],mt.prototype,"_navButtons",2);Ct([E("#pages")],mt.prototype,"_pagesGroup",2);Ct([a()],mt.prototype,"label",2);Ct([a({reflect:!0,attribute:"aria-label"})],mt.prototype,"ariaLabel",2);Ct([a()],mt.prototype,"firstLabel",2);Ct([a()],mt.prototype,"previousLabel",2);Ct([a()],mt.prototype,"nextLabel",2);Ct([a()],mt.prototype,"lastLabel",2);Ct([a({type:Number})],mt.prototype,"total",1);Ct([v()],mt.prototype,"_range",2);Ct([v()],mt.prototype,"_visiblePages",2);Ct([a({type:Number})],mt.prototype,"current",1);mt=Ct([h("uui-pagination")],mt);var io=class extends k{};io.CLOSE="close";var Dm=Object.defineProperty,Um=Object.getOwnPropertyDescriptor,ro=(t,e,i,o)=>{for(var r=o>1?void 0:o?Um(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Dm(e,i,r),r};function As(t,e,i){return t<e?e:t>i?i:t}var fi=class extends d{constructor(){super(...arguments),this.scrollEventHandler=this._updatePlacement.bind(this),this._open=!1,this._placement="bottom-start",this._currentPlacement=null,this._scrollParents=[],this.margin=0,this._onTriggerSlotChanged=t=>{this._trigger=t.target.assignedElements({flatten:!0})[0]},this._intersectionCallback=t=>{t.forEach(e=>{e.isIntersecting===!1&&(this._startScrollListener(),this._updatePlacement())})},this._onKeyUp=t=>{if(t.key==="Escape"){this._triggerPopoverClose();return}},this._onDocumentClick=t=>{t.composedPath().includes(this)||this._triggerPopoverClose()}}get placement(){return this._placement}set placement(t){let e=this._placement;this._placement=t||"bottom-start",this._currentPlacement=null,this._updatePlacement(),this.requestUpdate("placement",e)}get open(){return this._open}set open(t){let e=this._open;this._open=t,t?this._openPopover():this._closePopover(),this.requestUpdate("open",e)}connectedCallback(){super.connectedCallback(),this._getScrollParents()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._onDocumentClick),document.removeEventListener("keyup",this._onKeyUp),document.removeEventListener("scroll",this.scrollEventHandler),this.intersectionObserver&&(this.intersectionObserver.disconnect(),delete this.intersectionObserver),this._scrollParents=[]}_openPopover(){this.containerElement&&(this.containerElement.style.opacity="0",document.addEventListener("mousedown",this._onDocumentClick),document.addEventListener("keyup",this._onKeyUp),this._currentPlacement=null,requestAnimationFrame(()=>{this._updatePlacement(),this._createIntersectionObserver(),this.containerElement.style.opacity="1"}))}_closePopover(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),delete this.intersectionObserver),document.removeEventListener("mousedown",this._onDocumentClick),document.removeEventListener("keyup",this._onKeyUp),this._currentPlacement=null}_triggerPopoverClose(){let t=new io(io.CLOSE,{cancelable:!0});this.dispatchEvent(t),!t.defaultPrevented&&(this.open=!1)}_getScrollParents(){let t=this.shadowRoot.host,e=getComputedStyle(t);if(e.position==="fixed")return;let i=e.position==="absolute",o=/(auto|scroll)/,r=t;for(;r=r.parentElement;)if(e=getComputedStyle(r),!(i&&e.position==="static")&&(o.test(e.overflow+e.overflowY+e.overflowX)&&this._scrollParents.push(r),e.position==="fixed"))return;this._scrollParents.push(document.body)}_createIntersectionObserver(){if(this.intersectionObserver)return;let t={root:null,rootMargin:"0px",threshold:1};this.intersectionObserver=new IntersectionObserver(this._intersectionCallback,t),this.intersectionObserver.observe(this.containerElement)}_startScrollListener(){this._scrollParents.forEach(t=>{t.addEventListener("scroll",this.scrollEventHandler)}),document.addEventListener("scroll",this.scrollEventHandler)}_stopScrollListener(){this._scrollParents.forEach(t=>{t.removeEventListener("scroll",this.scrollEventHandler)}),document.removeEventListener("scroll",this.scrollEventHandler)}_updatePlacement(){if(!this.shadowRoot)return;let t=this.containerElement;if(!t)return;let e=this.containerElement?.getBoundingClientRect(),i=this._trigger?.getBoundingClientRect();if(i!=null&&e!=null){let o=this._scrollParents.map(Wt=>Wt.getBoundingClientRect());this._currentPlacement=this._currentPlacement||this._placement,this._placement!=="auto"&&(this._currentPlacement=this._managePlacementFlip(this._currentPlacement,e,o));let r=this._currentPlacement.indexOf("top")!==-1,s=this._currentPlacement.indexOf("bottom")!==-1,n=this._currentPlacement.indexOf("left")!==-1,u=this._currentPlacement.indexOf("right")!==-1,p=this._currentPlacement.indexOf("-start")!==-1,m=this._currentPlacement.indexOf("-end")!==-1,_=.5,f=.5,P=.5,g=.5,$=0,V=0;if(this.placement==="auto"){let Wt=this._scrollParents[0],yr=Wt.clientWidth,Ye=Wt.clientHeight,wi=i.x-e.width,ki=yr-(i.x+i.width)-e.width,sn=i.y-e.height,_o=Ye-(i.y+i.height)-e.height,yo=.5,xo=.5,uh=Math.max(wi,ki),el=Math.max(sn,_o);_o>sn&&_o>this.margin&&(el+=9999),uh>el?(wi>ki?(yo=0,n=!0):(yo=1,u=!0),$=this.margin):(sn>_o?(xo=0,r=!0):(xo=1,s=!0),V=this.margin),_=yo,f=xo,P=1-yo,g=1-xo}else r&&(g=1,f=0),s&&(g=0,f=1),(r||s)&&(V=this.margin,p&&(P=0,_=0),m&&(P=1,_=1)),n&&(P=1,_=0),u&&(P=0,_=1),(n||u)&&($=this.margin,p&&(g=0,f=0),m&&(g=1,f=1));let L=-e.width*P+i.width*_-$*(P*2-1),st=-e.height*g+i.height*f-V*(g*2-1),wt=L,ke=st;r||s?(this._scrollParents.forEach((Wt,yr)=>{let Ye=Wt===document.body?0:o[yr].x,wi=-i.x+Ye,ki=Wt.clientWidth-i.x-i.width+L+Ye-(e.width-i.width)*(1-_);wt=As(wt,wi,ki)}),wt=As(wt,-e.width,i.width)):(n||u)&&(this._scrollParents.forEach((Wt,yr)=>{let Ye=Wt===document.body?0:o[yr].y,wi=-i.y+Ye,ki=Wt.clientHeight-i.y-i.height+st+Ye-(e.height-i.height)*(1-f);ke=As(ke,wi,ki)}),ke=As(ke,-e.height,i.height)),(this._positionX!==wt||this._positionY!==ke)&&(this._positionX=wt,this._positionY=ke,L===wt&&st===ke&&this._stopScrollListener(),t.style.left=`${this._positionX}px`,t.style.top=`${this._positionY}px`)}}_managePlacementFlip(t,e,i){let r=t.split("-"),s=r[0],n=r[1]||null,u;return this._scrollParents.some((p,m)=>{let _=p===document.body?0:i[m].x,f=p===document.body?0:i[m].y;return s==="top"&&e.y-2<=f?(u="bottom",!0):s==="bottom"&&e.y+e.height+2>=p.clientHeight+f?(u="top",!0):s==="left"&&e.x-2<=_?(u="right",!0):s==="right"&&e.x+e.width+2>=p.clientWidth+_?(u="left",!0):!1}),u?(this._startScrollListener(),u+(n?`-${n}`:"")):t}render(){return l`
      <slot
        id="trigger"
        name="trigger"
        @slotchange=${this._onTriggerSlotChanged}></slot>
      <div id="container">
        ${this._open?l`<slot name="popover"></slot>`:""}
      </div>
    `}};fi.styles=[c`
      :host {
        position: relative;
        display: inline-block;
        width: 100%;
      }
      #container {
        position: absolute;
        width: 100%;
        z-index: var(--uui-popover-z-index, 1);
      }
      slot[name='popover'] {
        display: block;
      }
      #trigger {
        position: relative;
        width: 100%;
      }

      slot[name='trigger']::slotted(uui-button) {
        --uui-button-border-radius: var(
          --uui-popover-toggle-slot-button-border-radius
        );
        --uui-button-merge-border-left: var(
          --uui-popover-toggle-slot-button-merge-border-left
        );
      }
    `];ro([E("#container")],fi.prototype,"containerElement",2);ro([a({type:Number})],fi.prototype,"margin",2);ro([a({type:String,reflect:!0})],fi.prototype,"placement",1);ro([a({type:Boolean,reflect:!0})],fi.prototype,"open",1);fi=ro([h("uui-popover")],fi);var Tm=Object.defineProperty,Vm=Object.getOwnPropertyDescriptor,kc=t=>{throw TypeError(t)},vi=(t,e,i,o)=>{for(var r=o>1?void 0:o?Vm(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Tm(e,i,r),r},xa=(t,e,i)=>e.has(t)||kc("Cannot "+i),M=(t,e,i)=>(xa(t,e,"read from private field"),i?i.call(t):e.get(t)),ve=(t,e,i)=>e.has(t)?kc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Is=(t,e,i,o)=>(xa(t,e,"write to private field"),e.set(t,i),i),He=(t,e,i)=>(xa(t,e,"access private method"),i),be,sr,mi,oo,Ms,ge,so,ba,te,ga,Ec,_a,Cc,ya,_e=class extends d{constructor(){super(...arguments),ve(this,te),this.margin=0,this._placement="bottom-start",this._open=!1,this._actualPlacement=this._placement,ve(this,be,null),ve(this,sr,[]),ve(this,mi,null),ve(this,oo,{width:0,height:0}),ve(this,Ms,t=>{if(this._open=t.newState==="open",Is(this,be,Bl(this,"popovertarget",this.id)),He(this,te,Cc).call(this),M(this,be)?.dispatchEvent(new CustomEvent("uui-popover-before-toggle",{bubbles:!1,composed:!1,detail:{oldState:t.oldState,newState:t.newState}})),!this._open){He(this,te,_a).call(this);return}He(this,te,Ec).call(this),requestAnimationFrame(()=>{M(this,ge).call(this)})}),ve(this,ge,()=>{this._open&&(this._actualPlacement=this._placement,this.style.opacity="0",M(this,so).call(this,3))}),ve(this,so,t=>{if(M(this,ba).call(this),t--,M(this,be)===null)return;let e=this._actualPlacement.indexOf("top")!==-1,i=this._actualPlacement.indexOf("bottom")!==-1,o=this._actualPlacement.indexOf("left")!==-1,r=this._actualPlacement.indexOf("right")!==-1,s=this._actualPlacement.indexOf("-start")!==-1,n=this._actualPlacement.indexOf("-end")!==-1,u=M(this,be).getBoundingClientRect(),p=this.getBoundingClientRect(),m=0,_=0;i&&(m=u.top+u.height,s&&(_=u.left),n&&(_=u.left+u.width-p.width),!s&&!n&&(_=u.left+u.width/2-p.width/2)),e&&(m=u.top-p.height,s&&(_=u.left),n&&(_=u.left+u.width-p.width),!s&&!n&&(_=u.left+u.width/2-p.width/2)),o&&(_=u.left-p.width,s&&(m=u.top),n&&(m=u.top+u.height-p.height),!s&&!n&&(m=u.top+u.height/2-p.height/2)),r&&(_=u.left+u.width,s&&(m=u.top),n&&(m=u.top+u.height-p.height),!s&&!n&&(m=u.top+u.height/2-p.height/2));let f=window.innerWidth,P=window.innerHeight,g=Math.min(0,u.top+u.height),$=Math.max(Math.min(m,P-p.height),u.top-p.height);if(Math.max(g,$)!==m&&(e||i)&&t>0){He(this,te,ga).call(this),M(this,so).call(this,t);return}m=Math.max(g,$);let L=Math.min(0,u.left+u.width),st=Math.max(Math.min(_,f-p.width),u.left-p.width),wt=Math.max(L,st);if(wt!==_&&(o||r)&&t>0){He(this,te,ga).call(this),M(this,so).call(this,t);return}_=wt,(m+p.height<0||m>P||_+p.width<0||_>f)&&this.hidePopover(),this.style.transform=`translate(${_}px, ${m}px)`,this.style.opacity="1"}),ve(this,ba,()=>{let t={top:"bottom",bottom:"top",left:"right",right:"left"},e=this._actualPlacement.split("-")[0];e=t[e]||e,e=e.charAt(0).toUpperCase()+e.slice(1);let i=`padding${e}`;this.style.padding="0",this.style[i]=`${this.margin}px`})}get open(){return this._open}get placement(){return this._placement}set placement(t){this._placement=t,this._actualPlacement=t,M(this,ge).call(this)}connectedCallback(){this.hasAttribute("popover")||this.setAttribute("popover",""),super.connectedCallback(),this.addEventListener("beforetoggle",M(this,Ms)),M(this,mi)||(Is(this,mi,new ResizeObserver(t=>{let e=t[0],i=e.contentRect.width,o=e.contentRect.height;i===M(this,oo).width&&o===M(this,oo).height||(Is(this,oo,{width:i,height:o}),M(this,ge).call(this))})),M(this,mi).observe(this))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("beforetoggle",M(this,Ms)),He(this,te,_a).call(this),M(this,mi)?.disconnect(),Is(this,mi,null)}render(){return l`<slot></slot>`}};be=new WeakMap;sr=new WeakMap;mi=new WeakMap;oo=new WeakMap;Ms=new WeakMap;ge=new WeakMap;so=new WeakMap;ba=new WeakMap;te=new WeakSet;ga=function(){let[t,e]=this._actualPlacement.split("-"),i=t==="top"?"bottom":t==="bottom"?"top":t==="left"?"right":"left";this._actualPlacement=`${i}-${e}`};Ec=function(){M(this,sr).forEach(t=>{t.addEventListener("scroll",M(this,ge),{passive:!0})}),document.addEventListener("scroll",M(this,ge),{passive:!0})};_a=function(){M(this,sr).forEach(t=>{t.removeEventListener("scroll",M(this,ge))}),document.removeEventListener("scroll",M(this,ge))};Cc=function(){if(!M(this,be))return;let t=getComputedStyle(M(this,be));if(t.position==="fixed")return;let e=t.position==="absolute",i=/(auto|scroll)/,o=M(this,be);for(;o;){if(t=getComputedStyle(o),e&&t.position==="static"){o=He(this,te,ya).call(this,o);continue}if(i.test(t.overflow+t.overflowY+t.overflowX)&&M(this,sr).push(o),t.position==="fixed")return;o=He(this,te,ya).call(this,o)}M(this,sr).push(document.body)};ya=function(t){return t?.parentElement?t.parentElement:t?.getRootNode()?.host};_e.styles=[c`
      :host {
        margin: 0;
        width: fit-content;
        height: fit-content;
        border: none;
        border-radius: 0;
        padding: 0;
        background-color: none;
        background: none;
        overflow: visible;
        color: var(--uui-color-text,#060606);
      }
    `];vi([a({type:Number})],_e.prototype,"margin",2);vi([a({type:Boolean})],_e.prototype,"open",1);vi([a({type:String,reflect:!0})],_e.prototype,"placement",1);vi([v()],_e.prototype,"_placement",2);vi([v()],_e.prototype,"_open",2);vi([v()],_e.prototype,"_actualPlacement",2);_e=vi([h("uui-popover-container")],_e);var Nm=Object.defineProperty,Hm=Object.getOwnPropertyDescriptor,$c=(t,e,i,o)=>{for(var r=o>1?void 0:o?Hm(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Nm(e,i,r),r},Bm=(t,e,i)=>Math.min(Math.max(t,e),i),Ls=class extends d{constructor(){super(...arguments),this._progress=0}get progress(){return this._progress}set progress(t){let e=this._progress;this._progress=Bm(t,0,100),this.requestUpdate("progress",e)}_getProgressStyle(){return{width:`${this._progress}%`}}render(){return l`
      <div id="bar" style=${at(this._getProgressStyle())}></div>
    `}};Ls.styles=[c`
      :host {
        width: 100%;
        height: 4px;
        position: relative;
        overflow: hidden;
        background: var(--uui-color-surface-alt,#f3f3f5);
        border-radius: 100px;
        display: inline-block;
      }

      #bar {
        transition: width 250ms ease;
        background: var(--uui-color-positive,#0b8152);
        height: 100%;
        width: 0%;
      }
    `];$c([a({type:Number})],Ls.prototype,"progress",1);Ls=$c([h("uui-progress-bar")],Ls);var gi=class extends k{constructor(e,i={}){super(e,{bubbles:!0,...i})}};gi.CHANGE="change";var jm=Object.defineProperty,Rm=Object.getOwnPropertyDescriptor,Pc=t=>{throw TypeError(t)},je=(t,e,i,o)=>{for(var r=o>1?void 0:o?Rm(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&jm(e,i,r),r},Wm=(t,e,i)=>e.has(t)||Pc("Cannot "+i),Fm=(t,e,i)=>e.has(t)?Pc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Gm=(t,e,i)=>(Wm(t,e,"access private method"),i),wa,Sc,jt=class extends d{constructor(){super(...arguments),Fm(this,wa),this.name="",this.value="",this.label="",this.checked=!1,this.disabled=!1,this.readonly=!1}focus(){this._inputElement.focus()}click(){this._inputElement.click()}uncheck(){this.checked=!1}check(){this.checked=!0}makeFocusable(){this.disabled||this.removeAttribute("tabindex")}makeUnfocusable(){this.disabled||this.setAttribute("tabindex","-1")}render(){return l` <label>
      <input
        id="input"
        type="radio"
        name=${this.name}
        value=${this.value}
        .checked=${this.checked}
        .disabled=${this.disabled||this.readonly}
        @change=${Gm(this,wa,Sc)} />
      <div id="button"></div>
      <div id="label">
        ${this.label?l`<span>${this.label}</span>`:l`<slot></slot>`}
      </div>
    </label>`}};wa=new WeakSet;Sc=function(t){t.stopPropagation();let e=this._inputElement.checked;this.checked=e,e&&this.focus(),this.dispatchEvent(new gi(gi.CHANGE))};jt.styles=[Pe,c`
      :host {
        display: block;
        box-sizing: border-box;
        font-family: inherit;
        color: currentColor;
        --uui-radio-button-size: var(--uui-size-6,18px);
        margin: var(--uui-size-2,6px) 0;
      }

      label {
        position: relative;
        box-sizing: border-box;
        user-select: none;
        display: flex;
        align-items: center;
        cursor: pointer;
        line-height: 18px;
      }

      :host([readonly]) label {
        cursor: default;
      }

      #input {
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0;
      }

      .label {
        margin-top: 2px;
      }

      #button {
        box-sizing: border-box;
        display: inline-block;
        width: var(--uui-radio-button-size, 18px);
        height: var(--uui-radio-button-size, 18px);
        background-color: var(--uui-color-surface,#fff);
        border: 1px solid var(--uui-color-border-standalone,#c2c2c2);
        border-radius: 100%;
        margin-right: calc(var(--uui-size-2,6px) * 2);
        position: relative;
        flex: 0 0 var(--uui-radio-button-size);
      }

      #button::after {
        content: '';
        width: calc(var(--uui-radio-button-size) / 2);
        height: calc(var(--uui-radio-button-size) / 2);
        background-color: var(--uui-color-selected,#3544b1);
        border-radius: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: all 0.15s ease-in-out;
      }

      :host(:hover) #button {
        border: 1px solid var(--uui-color-border-emphasis,#a1a1a1);
      }

      :host(:focus) {
        outline: none;
      }
      :host(:focus-within) input:focus-visible + #button {
        outline: 2px solid var(--uui-color-focus,#3879ff);
      }

      input:checked ~ #button::after {
        transform: translate(-50%, -50%) scale(1);
      }

      input:checked ~ #button {
        border: 1px solid var(--uui-color-selected,#3544b1);
      }

      input:checked:hover ~ #button {
        border: 1px solid var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      input:checked:hover ~ #button::after {
        background-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      :host([disabled]) label {
        cursor: not-allowed;
        opacity: 0.5;
      }
      :host([disabled]) .label {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      :host([disabled]) input ~ #button {
        border: 1px solid var(--uui-color-disabled-contrast,#c4c4c4);
      }

      :host([disabled]) input:checked ~ #button {
        border: 1px solid var(--uui-color-disabled-contrast,#c4c4c4);
      }

      :host([disabled]) input:checked ~ #button::after {
        background-color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      :host([disabled]:active) #button {
        animation: ${Se};
      }

      @media (prefers-reduced-motion) {
        :host([disabled]:active) #button {
          animation: none;
        }

        #button::after {
          transition: none;
        }
      }
    `];je([E("#input")],jt.prototype,"_inputElement",2);je([a({type:String})],jt.prototype,"name",2);je([a({type:String})],jt.prototype,"value",2);je([a({type:String})],jt.prototype,"label",2);je([a({type:Boolean,reflect:!0})],jt.prototype,"checked",2);je([a({type:Boolean,reflect:!0})],jt.prototype,"disabled",2);je([a({type:Boolean,reflect:!0})],jt.prototype,"readonly",2);jt=je([h("uui-radio")],jt);var no=class extends k{constructor(e,i={}){super(e,{bubbles:!0,...i})}};no.CHANGE="change";var qm=Object.defineProperty,Km=Object.getOwnPropertyDescriptor,Oc=t=>{throw TypeError(t)},Pa=(t,e,i,o)=>{for(var r=o>1?void 0:o?Km(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&qm(e,i,r),r},Sa=(t,e,i)=>e.has(t)||Oc("Cannot "+i),C=(t,e,i)=>(Sa(t,e,"read from private field"),i?i.call(t):e.get(t)),Be=(t,e,i)=>e.has(t)?Oc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),zs=(t,e,i,o)=>(Sa(t,e,"write to private field"),e.set(t,i),i),R=(t,e,i)=>(Sa(t,e,"access private method"),i),K,U,ka,Ea,Ds,Us,Ca,H,Ac,Oa,$a,Aa,Ia,bi,Ic,Mc,ao,Xm="ArrowLeft",Ym="ArrowUp",Zm="ArrowRight",Qm="ArrowDown",Jm=" ",tv="Enter",nr=class extends G(d,""){constructor(){super(),Be(this,H),this.disabled=!1,this.readonly=!1,Be(this,K,null),Be(this,U,[]),Be(this,ka,t=>{C(this,U)?.forEach(e=>{e!==t.target?e.makeUnfocusable():e.makeFocusable()})}),Be(this,Ea,t=>{this.contains(t.relatedTarget)||C(this,K)===null&&C(this,U)?.forEach(e=>{e.makeFocusable()})}),Be(this,Ds,()=>{this.pristine=!1}),Be(this,Us,t=>{t.target.checked===!0&&(this.value=t.target.value,R(this,H,ao).call(this))}),Be(this,Ca,t=>{switch(t.key){case Xm:case Ym:{t.preventDefault(),R(this,H,Ic).call(this);break}case Zm:case Qm:{t.preventDefault(),R(this,H,Mc).call(this);break}case Jm:{C(this,K)===null&&(this.value=R(this,H,bi).call(this,1,!1)?.value,R(this,H,ao).call(this));break}case tv:this.submit()}}),this.addEventListener("keydown",C(this,Ca)),this.addEventListener("focusin",C(this,ka)),this.addEventListener("focusout",C(this,Ea)),this.updateComplete.then(()=>{R(this,H,$a).call(this,this.value)})}get value(){return super.value}set value(t){super.value=t,R(this,H,$a).call(this,t)}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","radiogroup")}updated(t){super.updated(t),t.has("disabled")&&R(this,H,Aa).call(this,this.disabled),t.has("readonly")&&R(this,H,Ia).call(this,this.readonly),t.has("name")&&R(this,H,Oa).call(this,t.get("name"))}async focus(){await this.updateComplete,C(this,K)!==null?C(this,U)[C(this,K)]?.focus():R(this,H,bi).call(this,1,!1)?.focus()}async blur(){await this.updateComplete,C(this,K)!==null?C(this,U)[C(this,K)]?.blur():R(this,H,bi).call(this,1,!1)?.blur()}async click(){await this.updateComplete,C(this,K)!==null?C(this,U)[C(this,K)]?.click():R(this,H,bi).call(this,1,!1)?.click()}getFormElement(){if(C(this,U)&&C(this,K))return C(this,U)[C(this,K)]}render(){return l` <slot @slotchange=${R(this,H,Ac)}></slot> `}};K=new WeakMap;U=new WeakMap;ka=new WeakMap;Ea=new WeakMap;Ds=new WeakMap;Us=new WeakMap;Ca=new WeakMap;H=new WeakSet;Ac=function(t){if(t.stopPropagation(),C(this,U)?.forEach(i=>{i.removeEventListener(gi.CHANGE,C(this,Us)),i.removeEventListener("blur",C(this,Ds))}),zs(this,K,null),zs(this,U,t.target.assignedElements({flatten:!0}).filter(i=>i instanceof jt)),C(this,U).length===0)return;C(this,U).forEach(i=>{i.addEventListener(gi.CHANGE,C(this,Us)),i.addEventListener("blur",C(this,Ds))}),R(this,H,Oa).call(this,this.name),this.disabled&&R(this,H,Aa).call(this,!0),this.readonly&&R(this,H,Ia).call(this,!0);let e=C(this,U).filter(i=>i.checked===!0);if(e.length>1&&(C(this,U).forEach(i=>{i.checked=!1}),this.value="",console.error("There can only be one checked radio among the <"+this.nodeName+"> children",this)),e.length===1){let i=e[0];this.value=i.value,zs(this,K,C(this,U).indexOf(i))}};Oa=function(t){C(this,U)?.forEach(e=>e.name=t)};$a=function(t){let e=[];C(this,U).forEach((i,o)=>{i.value===t?(i.checked=!0,i.makeFocusable(),zs(this,K,o)):(i.checked=!1,e.push(i))}),C(this,K)!==null&&e.forEach(i=>i.makeUnfocusable())};Aa=function(t){C(this,U)?.forEach(e=>e.disabled=t)};Ia=function(t){C(this,U)?.forEach(e=>e.readonly=t)};bi=function(t=1,e=!0){if(!C(this,U)||C(this,U).length===0)return null;let i=C(this,U).length,o=C(this,K)??0;for(let r=0;r<i+1;r++){if(!e||r>0){let s=C(this,U)[o];if(!s.disabled&&!s.readonly)return s}o=(o+t+i)%i}return null};Ic=function(){this.value=R(this,H,bi).call(this,-1)?.value??"",C(this,U)[C(this,K)??0]?.focus(),R(this,H,ao).call(this)};Mc=function(){this.value=R(this,H,bi).call(this)?.value??"",C(this,U)[C(this,K)??0]?.focus(),R(this,H,ao).call(this)};ao=function(){this.pristine=!1,this.dispatchEvent(new no(no.CHANGE))};nr.formAssociated=!0;nr.styles=[c`
      :host {
        display: inline-block;
        padding-right: 3px;
        border: 1px solid transparent;
        border-radius: var(--uui-border-radius,3px);
      }

      :host(:not([pristine]):invalid),
      /* polyfill support */
      :host(:not([pristine])[internals-invalid]) {
        border: 1px solid var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
    `];Pa([a({type:Boolean,reflect:!0})],nr.prototype,"disabled",2);Pa([a({type:Boolean,reflect:!0})],nr.prototype,"readonly",2);nr=Pa([h("uui-radio-group")],nr);var Vt=class extends k{constructor(e,i={}){super(e,{bubbles:!0,...i})}};Vt.INPUT="input";Vt.CHANGE="change";var ev=Object.defineProperty,iv=Object.getOwnPropertyDescriptor,zc=t=>{throw TypeError(t)},B=(t,e,i,o)=>{for(var r=o>1?void 0:o?iv(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&ev(e,i,r),r},Dc=(t,e,i)=>e.has(t)||zc("Cannot "+i),rv=(t,e,i)=>(Dc(t,e,"read from private field"),i?i.call(t):e.get(t)),Lc=(t,e,i)=>e.has(t)?zc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),ar=(t,e,i)=>(Dc(t,e,"access private method"),i),Re,_i,za,Ma={TOP:3,CENTER:2},lo=18,lr=3,ye=12,ov=24,La=t=>{let e=t.toString().indexOf(".");return e>=0?t.toString().length-e-1:0},T=class extends G(d,""){constructor(){super(),Lc(this,Re),this.disabled=!1,this.readonly=!1,this._min=0,this._max=0,this.hideStepValues=!1,this._step=1,this._movement=!1,this.startPoint={mouse:0,low:0,high:0},this._lowInputValue=0,this._highInputValue=0,this._trackWidth=0,this._lowValuePercentStart=0,this._highValuePercentEnd=100,Lc(this,za,t=>{t.key=="Enter"&&this.submit()}),this._onTouchStart=t=>{if(this.disabled)return;let e=t.composedPath()[0];if(e!==this._outerTrack)if(e===this._innerColor||e===this._innerColorThumb)window.addEventListener("touchend",this._onTouchEnd),window.addEventListener("touchcancel",this._onTouchEnd),window.addEventListener("touchmove",this._onTouchMove),this._movement=!0,this._saveStartPoints(t.touches[0].pageX);else{let i=this._getClickedValue(t.touches[0].pageX),o=Math.abs(this._lowInputValue-i),r=Math.abs(this._highInputValue-i);o<r?this.setValueLow(i):this.setValueHigh(i)}},this._onTouchMove=t=>{this._dragBothValuesByMousePos(t.touches[0].pageX)},this._onTouchEnd=()=>{this._movement=!1,this.onChanged(),window.removeEventListener("touchend",this._onTouchEnd),window.removeEventListener("touchcancel",this._onTouchEnd),window.removeEventListener("touchmove",this._onTouchMove)},this._onMouseDown=t=>{if(this.disabled||this.readonly)return;let e=t.composedPath()[0];if(e!==this._outerTrack)if(e===this._innerColor||e===this._innerColorThumb)window.addEventListener("mouseup",this._onMouseUp),window.addEventListener("mousemove",this._onMouseMove),this._movement=!0,this._saveStartPoints(t.pageX);else{let i=this._getClickedValue(t.pageX),o=Math.abs(this._lowInputValue-i),r=Math.abs(this._highInputValue-i);o<r?this.setValueLow(i):this.setValueHigh(i)}},this._onMouseMove=t=>{t.preventDefault(),this._dragBothValuesByMousePos(t.pageX)},this._onMouseUp=()=>{this._movement=!1,this.onChanged(),window.removeEventListener("mouseup",this._onMouseUp),window.removeEventListener("mousemove",this._onMouseMove)},this.addEventListener("keydown",rv(this,za)),this.addEventListener("mousedown",this._onMouseDown),this.addEventListener("touchstart",this._onTouchStart),window.addEventListener("resize",()=>{this._trackWidth=this._outerTrack?.offsetWidth})}get min(){return this._min}set min(t){this._min=t,ar(this,Re,_i).call(this)}get max(){return this._max}set max(t){this._max=t,ar(this,Re,_i).call(this)}get step(){return this._step}set step(t){this._step=t,ar(this,Re,_i).call(this)}get minGap(){return this._minGap}set minGap(t){this._minGap=t,ar(this,Re,_i).call(this)}get maxGap(){return this._maxGap}set maxGap(t){this._maxGap=t,ar(this,Re,_i).call(this)}get value(){return super.value}set value(t){super.value=t,ar(this,Re,_i).call(this)}setValueLow(t){t=O(t,this.maxGap?this._highInputValue-this.maxGap>this.min?this._highInputValue-this.maxGap:this.min:this.min,this.minGap?this._highInputValue-this.minGap:this._highInputValue-this.step),this.setValue(t,this._highInputValue)}setValueHigh(t){t=O(t,this.minGap?this._lowInputValue+this.minGap:this._lowInputValue+this.step,this.maxGap?this.maxGap+this._lowInputValue<this.max?this.maxGap+this._lowInputValue:this.max:this.max),this.setValue(this._lowInputValue,t)}setValue(t,e,i){if(i){let o=this.startPoint.high-this.startPoint.low;t=O(t,this.min,this.max-o),e=O(e,this.min+o,this.max)}this._inputLow.value=t.toString(),this._inputHigh.value=e.toString(),this.value=`${t},${e}`}getFormElement(){return this._currentFocus?this._currentFocus:this._inputLow}async focus(){await this.updateComplete,this.getFormElement().focus()}async blur(){await this.updateComplete,this.getFormElement().blur()}connectedCallback(){super.connectedCallback(),this.value||(this.value=`${this._min},${this._max}`)}firstUpdated(t){super.updated(t),this._trackWidth=this._outerTrack.offsetWidth,this._runPropertiesChecks()}_runPropertiesChecks(){if(new RegExp(/^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/).test(this.value)||console.error("Range slider (Value error occurred): Bad input"),this._highInputValue===this._lowInputValue&&console.error("Range slider (Value error occurred): Low-end and high-end value should never be equal. Use <uui-slider></uui-slider> instead."),this._lowInputValue>this._highInputValue&&console.error("Range slider (Value error occurred): Low-end value should never be higher than high-end value."),(this._highInputValue>this._max||this._highInputValue<this._min)&&(this.setValueHigh(this._max),console.warn(`Conflict with the high-end value and max value. High-end value has been converted to the max value (${this._max})`)),(this._lowInputValue<this._min||this._lowInputValue>this._max)&&(this.setValueLow(this._min),console.warn(`Conflict with the low-end value and min value. Low-end value has been converted to the min value (${this._min})`)),this._step<=0&&(this._step=1,console.warn("Property step needs a value higher than 0. Converted the step value to 1 (default)")),(this._max-this._min)/this._step%1!==0&&console.error("Conflict with step value and the min and max values. May experience bad side effects"),this._minGap&&this._minGap<this._step&&(this._minGap=void 0,console.warn("Conflict with min-gap and step value. The min-gap needs to be higher than the step value. Removed the min-gap property.")),this._minGap&&this._maxGap&&this._minGap>this._maxGap&&(this._minGap=void 0,this._maxGap=void 0,console.warn("Conflict with min-gap and max-gap. Removed the min-gap and max-gap properties.")),this._minGap&&this._max-this._min<this._minGap&&(this._minGap=void 0,console.warn("Conflict with the min-gap and the total range. Removed the min-gap.")),this._maxGap&&this._highInputValue-this._lowInputValue>this._maxGap&&(this.setValueHigh(this._lowInputValue+this._maxGap),console.warn(`Conflict with value and max-gap. High-end value has been converted to the highest possible value based on the low-end value and the max gap value (${this._highInputValue})`)),this._minGap&&this._highInputValue-this._lowInputValue<this._minGap){let e=this._minGap;this._highInputValue-e<this._min?(this.setValueHigh(this._lowInputValue+e),console.warn(`Conflict with value and min gap. High-end value has been converted to the lowest possible value based on the low-end value and the min gap value (${this._highInputValue}).`)):(this.setValueLow(this._highInputValue-e),console.warn(`Conflict with value and min gap. Low-end value has been converted to the highest possible value based on the high-end value and the min gap value (${this._lowInputValue}).`))}}_updateInnerColor(){let t=this._max-this._min,e=this._lowInputValue-this._min,i=this._highInputValue-this._min,o=e/t*100,r=100-i/t*100;this._lowValuePercentStart=O(o,0,100),this._highValuePercentEnd=O(r,0,100)}_getClickedValue(t){let e=this._outerTrack.getBoundingClientRect().left,r=(t-e-ye)/(this._trackWidth-ye*2)*(this._max-this._min)+this._min;return Math.round(r/this._step)*this._step}_saveStartPoints(t){this.startPoint={mouse:t,low:this._lowInputValue,high:this._highInputValue}}_dragBothValuesByMousePos(t){let e=this._outerTrack.offsetWidth,i=t-this.startPoint.mouse,o=this._max-this._min,r=i/(e+ye*2),s=Math.round(r*o/this._step)*this._step,n=this.startPoint.low+s,u=this.startPoint.high+s;this.setValue(n,u,!0),this.dispatchEvent(new Vt(Vt.INPUT))}_onLowInput(t){this.disabled&&t.preventDefault(),this.readonly&&t.preventDefault(),this._currentFocus=this._inputLow;let e=Number(t.target.value);this.setValueLow(e),this.dispatchEvent(new Vt(Vt.INPUT))}_onHighInput(t){this.disabled&&t.preventDefault(),this.readonly&&t.preventDefault(),this._currentFocus=this._inputHigh;let e=Number(t.target.value);this.setValueHigh(e),this.dispatchEvent(new Vt(Vt.INPUT))}_onLowChange(){this.setValueLow(Number(this._inputLow.value)),this.onChanged()}_onHighChange(){this.setValueHigh(Number(this._inputHigh.value)),this.onChanged()}onChanged(){this.pristine=!1,this.dispatchEvent(new Vt(Vt.CHANGE))}render(){return l`
      <div id="range-slider">
        ${this._renderNativeInputs()}
        <div id="inner-track">
          <div
            id="inner-color-thumb"
            class="${this._movement?"active":""}"
            style="left: ${this._lowValuePercentStart}%; right: ${this._highValuePercentEnd}%">
            ${this._renderThumbValues()}
            <div class="${this._movement?"color active":"color"}"></div>
          </div>
          ${this._renderSteps()}
        </div>
      </div>
    `}_renderThumbValues(){return l`<div class="thumb-values">
      <span
        ><span
          >${this._lowInputValue.toFixed(La(this._step))}</span
        ></span
      >
      <span
        ><span
          >${this._highInputValue.toFixed(La(this._step))}</span
        ></span
      >
    </div>`}_renderSteps(){let t=(this._max-this._min)/this._step,e=(this._trackWidth-ye*2)/t;if(e<ov||t%1!==0)return;let i=0,o=new Array(t+1).fill(e).map(r=>r*i++);return l`<div class="step-wrapper">
      <svg height="100%" width="100%">
        <rect x="9" y="9" height="${lr}" rx="2" />
        ${this._renderStepCircles(o)}
      </svg>
      ${this._renderStepValues(t)}
    </div>`}_renderStepValues(t){if(this.hideStepValues||t>20)return;let e=0,i=new Array(t+1).fill(this._step).map(o=>(this._min+o*e++).toFixed(La(this._step)));return l`<div class="step-values">
      ${i.map(o=>l`<span><span>${o}</span></span>`)}
    </div>`}_renderStepCircles(t){let e=this._trackWidth/(this._max-this._min);return b`${t.map(i=>{let o=i+ye,r=this._lowInputValue-this._min,s=this._highInputValue-this._min;return o/e>=r&&o/e<=s?b`<circle class="track-step filled" cx="${o}" cy="${lr*2}" r="4.5" />`:b`<circle class="track-step regular" cx="${o}" cy="${lr*2}" r="4.5" />`})}`}_renderNativeInputs(){return l` <div class="native-wrapper">
      <input
        id="inputLow"
        class="${this._movement?"focus":""}"
        type="range"
        min=${this._min}
        max=${this._max}
        step=${this._step}
        .value=${this._lowInputValue.toString()}
        aria-label="${this.label} low-end value"
        ?disabled="${this.disabled||this.readonly}"
        @input=${this._onLowInput}
        @change=${this._onLowChange} />
      <input
        id="inputHigh"
        class="${this._movement?"focus":""}"
        type="range"
        min="${this._min}"
        max="${this._max}"
        step="${this._step}"
        .value=${this._highInputValue.toString()}
        aria-label="${this.label} high-end value"
        ?disabled="${this.disabled||this.readonly}"
        @input=${this._onHighInput}
        @change=${this._onHighChange} />
    </div>`}};Re=new WeakSet;_i=function(){let t=this.value.split(","),e=Number(t[0])||0,i=Number(t[1])||0;i=O(i,this._min,this._max),e=this._min+Math.round((e-this._min)/this._step)*this._step,i=this._min+Math.round((i-this._min)/this._step)*this._step,this._lowInputValue=O(e,this._min,this._minGap?i-this._minGap:i-this._step),this._highInputValue=O(i,this._minGap?this._lowInputValue+this._minGap:this._lowInputValue+this._step,Math.min(this._maxGap?e+this._maxGap:this._max,this._max)),this._updateInnerColor(),this.requestUpdate()};za=new WeakMap;T.formAssociated=!0;T.styles=[c`
      :host {
        --color-interactive: var(--uui-color-selected,#3544b1);
        --color-hover: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
        --color-focus: var(--uui-color-focus,#3879ff);
        min-height: 30px;
      }

      :host([error]) {
        --color-interactive: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
        --color-hover: var(--uui-color-invalid,#d42054);
      }

      #range-slider {
        min-height: 30px;
        box-sizing: border-box;
        position: relative;
        display: flex;
        align-items: center;
      }

      /** Track */

      #inner-track {
        user-select: none;
        background-color: var(--uui-color-border-standalone,#c2c2c2);
        position: absolute;
        height: 3px;
        left: ${ye}px; /* Match TRACK_MARGIN */
        right: ${ye}px; /* Match TRACK_MARGIN */
      }

      :host(:not([disabled]):hover) #inner-track,
      :host(:not([disabled]):active) #inner-track {
        background-color: var(--uui-color-border-emphasis,#a1a1a1);
      }

      #inner-color-thumb {
        margin: -9px 0 0;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: ${lo}px;
        cursor: grab;
        user-select: none;
        z-index: ${Ma.CENTER};
      }

      :host([disabled]) #inner-color-thumb,
      :host([readonly]) #inner-color-thumb {
        cursor: default;
      }

      /** Colored part of track */

      :host([disabled]) #range-slider #inner-color-thumb .color {
        background-color: var(--uui-palette-mine-grey,#3e3e3e) !important;
      }

      #inner-color-thumb:focus .color {
        background-color: var(--color-focus);
      }

      #inner-color-thumb:hover .color,
      #inner-color-thumb .color.active {
        background-color: var(--color-hover);
      }

      :host(:not([readonly])) #inner-color-thumb:hover .color {
        height: ${lr*2}px;
        background-color: var(--color-hover);
        transform: translateY(-${lr/2}px);
      }

      .color {
        user-select: none;
        position: absolute;
        inset-inline: 0;
        height: ${lr}px;
        top: 50%;
        transform: translateY(0);
        background-color: var(--color-interactive);
        transition: height 60ms;
      }

      :host([error]) .color {
        background-color: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
      :host([error]) #inner-color-thumb:hover ~ .color,
      :host([error]) #inner-color-thumb:focus ~ .color {
        background-color: var(--uui-color-invalid-emphasis,rgb(
    226,
    60,
    107
  ));
      }

      /** Steps */
      .step-wrapper {
        margin: 0 ${-1*ye}px;
        height: 11px;
        position: absolute;
        left: 0;
        right: 0;
        top: -10px;
      }

      /** Step circles */
      .track-step {
        fill: var(--uui-color-border,#d8d7d9);
      }

      :host(:not([disabled]):hover) #inner-track .track-step.regular,
      :host(:not([disabled]):active) #inner-track .track-step.regular {
        fill: var(--uui-color-border-emphasis,#a1a1a1);
      }

      :host .track-step.filled {
        fill: var(--color-interactive);
      }

      :host([error]) .track-step.filled {
        fill: var(--uui-color-invalid-emphasis,rgb(
    226,
    60,
    107
  ));
      }

      :host #inner-color-thumb.active ~ .step-wrapper .track-step.filled,
      :host #inner-color-thumb:hover ~ .step-wrapper .track-step.filled {
        fill: var(--color-hover);
      }

      :host([disabled]) #range-slider .track-step.filled {
        fill: var(--uui-palette-mine-grey,#3e3e3e) !important;
      }

      /** Step values */

      .step-values {
        box-sizing: border-box;
        margin: 0 ${ye}px; /* Match TRACK_MARGIN */
        display: flex;
        justify-content: space-between;
        font-size: var(--uui-type-small-size,12px);
      }

      .step-values > span {
        position: relative;
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      .step-values > span > span {
        position: absolute;
        transform: translateX(-50%);
      }

      /** Input */

      .native-wrapper {
        position: relative;
        width: 100%;
        inset-inline: 0px;
        margin: -22px 5px 0 1px;
      }

      input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        pointer-events: none;
        position: absolute;
        cursor: pointer;
        background-color: transparent;
        inset-inline: 0;
        width: 100%;
        border-radius: 20px;
      }

      input:focus-within {
        outline: none;
      }

      /** Thumb values */
      .thumb-values {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        color: var(--color-interactive);
        font-weight: bold;
        transition: 120ms opacity;
        opacity: 0;
      }

      .thumb-values > span {
        width: 0;
      }

      .thumb-values > span > span {
        bottom: 15px;
        position: absolute;
        transform: translateX(-50%);
      }

      :host([disabled]) .thumb-values {
        color: var(--uui-palette-mine-grey,#3e3e3e);
      }

      :host([readonly]) .thumb-values {
        opacity: 1;
      }

      #range-slider:hover .thumb-values {
        opacity: 1;
      }

      /** Native thumbs */
      /** Chrome */
      input::-webkit-slider-thumb {
        -webkit-appearance: none;
        pointer-events: all;
        cursor: grab;
        position: relative;
        z-index: ${Ma.TOP};
        width: ${lo}px;
        height: ${lo}px;
        border-radius: 24px;
        border: none;
        background-color: var(--color-interactive);
        overflow: visible;
        box-shadow:
          inset 0 0 0 2px var(--color-interactive),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }

      :host([disabled]) input::-webkit-slider-thumb,
      :host([readonly]) input::-webkit-slider-thumb {
        cursor: default;
      }

      input:focus-within::-webkit-slider-thumb,
      input.focus::-webkit-slider-thumb {
        background-color: var(--color-focus);
        box-shadow:
          inset 0 0 0 2px var(--color-focus),
          inset 0 0 0 4px var(--uui-color-surface,#fff),
          0 0 0 2px var(--color-focus);
      }
      input::-webkit-slider-thumb:hover {
        background-color: var(--color-hover);
        box-shadow:
          inset 0 0 0 2px var(--color-hover),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }

      :host([disabled]) #range-slider input::-webkit-slider-thumb {
        background-color: var(--uui-palette-mine-grey,#3e3e3e);
        box-shadow:
          inset 0 0 0 2px var(--uui-palette-mine-grey,#3e3e3e),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }

      /** Mozilla */

      input::-moz-range-thumb {
        -moz-appearance: none;
        pointer-events: all;
        cursor: grab;
        position: relative;
        z-index: ${Ma.TOP};
        width: ${lo}px;
        height: ${lo}px;
        border-radius: 24px;
        border: none;
        background-color: var(--color-interactive);
        overflow: visible;
        box-shadow:
          inset 0 0 0 2px var(--color-interactive),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }
      :host([disabled]) input::-moz-range-thumb,
      :host([readonly]) input::-moz-range-thumb {
        cursor: default;
      }

      input:focus-within::-moz-range-thumb,
      input.focus::-moz-range-thumb {
        background-color: var(--color-focus);
        box-shadow:
          inset 0 0 0 2px var(--color-focus),
          inset 0 0 0 4px var(--uui-color-surface,#fff),
          0 0 0 2px var(--color-focus);
      }
      input::-moz-range-thumb:hover {
        background-color: var(--color-hover);
        box-shadow:
          inset 0 0 0 2px var(--color-hover),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }

      :host([disabled]) #range-slider input::-moz-range-thumb {
        background-color: var(--uui-palette-mine-grey,#3e3e3e);
        box-shadow:
          inset 0 0 0 2px var(--uui-palette-mine-grey,#3e3e3e),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }
    `];B([a({type:String})],T.prototype,"label",2);B([a({type:Boolean,reflect:!0})],T.prototype,"disabled",2);B([a({type:Boolean,reflect:!0})],T.prototype,"readonly",2);B([a({type:Number})],T.prototype,"min",1);B([a({type:Number})],T.prototype,"max",1);B([a({type:Boolean,attribute:"hide-step-values"})],T.prototype,"hideStepValues",2);B([a({type:Number})],T.prototype,"step",1);B([a({type:Number,attribute:"min-gap"})],T.prototype,"minGap",1);B([a({type:Number,attribute:"max-gap"})],T.prototype,"maxGap",1);B([a({type:String})],T.prototype,"value",1);B([v()],T.prototype,"_movement",2);B([v()],T.prototype,"_lowInputValue",2);B([v()],T.prototype,"_highInputValue",2);B([v()],T.prototype,"_trackWidth",2);B([v()],T.prototype,"_lowValuePercentStart",2);B([v()],T.prototype,"_highValuePercentEnd",2);B([E("#range-slider")],T.prototype,"_outerTrack",2);B([E("#inputLow")],T.prototype,"_inputLow",2);B([E("#inputHigh")],T.prototype,"_inputHigh",2);B([E(".color")],T.prototype,"_innerColor",2);B([E("#inner-color-thumb")],T.prototype,"_innerColorThumb",2);T=B([h("uui-range-slider")],T);var sv=Object.getOwnPropertyDescriptor,nv=(t,e,i,o)=>{for(var r=o>1?void 0:o?sv(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(r)||r);return r},Da=class extends d{render(){return l`<slot></slot>`}};Da.styles=[c`
      :host {
        display: block;
      }

      ::slotted(*:not(:first-child)) {
        margin-top: 1px;
      }
      ::slotted(*:not(:first-child))::before {
        content: '';
        position: absolute;
        top: -1px;
        left: 0;
        right: 0;
        border-top: 1px solid var(--uui-color-border,#d8d7d9);
      }
    `];Da=nv([h("uui-ref-list")],Da);var yi=class extends k{};yi.OPEN="open";var av=Object.defineProperty,lv=Object.getOwnPropertyDescriptor,Ts=(t,e,i,o)=>{for(var r=o>1?void 0:o?lv(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&av(e,i,r),r},xe=class extends $e(Ot(d)){constructor(){super(...arguments),this.disabled=!1,this.readonly=!1,this.error=!1}handleOpenClick(t){t.stopPropagation(),this.dispatchEvent(new yi(yi.OPEN))}handleOpenKeydown(t){t.key!==" "&&t.key!=="Enter"||(t.preventDefault(),t.stopPropagation(),this.dispatchEvent(new yi(yi.OPEN)))}};xe.styles=[c`
      :host {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-size: var(--uui-font-size);

        box-sizing: border-box;
        border-radius: var(--uui-border-radius,3px);
        background-color: var(--uui-color-surface,#fff);
        --uui-card-before-opacity: 0;
        transition: --uui-card-before-opacity 120ms;
      }

      :host([selectable]:focus-visible) {
        outline-color: var(--uui-color-focus,#3879ff);
        outline-width: var(--uui-card-border-width);
        outline-style: solid;
        outline-offset: var(--uui-card-border-width);
      }

      :host([error]) {
        border: 2px solid var(--uui-color-invalid,#d42054);
        box-shadow:
          0 0 4px 0 var(--uui-color-invalid,#d42054),
          inset 0 0 2px 0 var(--uui-color-invalid,#d42054);
      }

      :host([standalone]) {
        border: 1px solid var(--uui-color-border,#d8d7d9);
      }

      :host([selectable]) {
        cursor: pointer;
      }
      :host([selectable]) #select-border {
        position: absolute;
        z-index: 2;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        pointer-events: none;
        opacity: 0;
        transition: opacity 120ms;
      }
      :host([selectable]) #select-border::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 2px solid var(--uui-color-selected,#3544b1);
        border-radius: calc(var(--uui-border-radius,3px) + 2px);
        box-shadow:
          0 0 4px 0 var(--uui-color-selected,#3544b1),
          inset 0 0 2px 0 var(--uui-color-selected,#3544b1);
      }
      :host([selected]) #select-border {
        opacity: 1;
      }
      :host([selectable]:not([selected]):hover) #select-border {
        opacity: 0.33;
      }
      :host([selectable][selected]:hover) #select-border {
        opacity: 0.8;
      }

      :host([selectable]:not([selected])) #open-part:hover + #select-border {
        opacity: 0;
      }
      :host([selectable][selected]) #open-part:hover + #select-border {
        opacity: 1;
      }

      :host([selectable]:not([selected]):hover) #select-border::after {
        animation: not-selected--hover 1.2s infinite;
      }
      @keyframes not-selected--hover {
        0%,
        100% {
          opacity: 0.66;
        }
        50% {
          opacity: 1;
        }
      }

      :host([selectable][selected]:hover) #select-border::after {
        animation: selected--hover 1.4s infinite;
      }
      @keyframes selected--hover {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.66;
        }
      }
      :host([selectable]) #open-part:hover + #select-border::after {
        animation: none;
      }

      :host([select-only]) *,
      :host([select-only]) ::slotted(*) {
        pointer-events: none;
      }

      button {
        font-size: inherit;
        font-family: inherit;
        border: 0;
        padding: 0;
        background-color: transparent;
        text-align: left;
        color: var(--uui-color-text,#060606);
      }
      a {
        text-decoration: none;
        color: inherit;
      }

      button:focus,
      a:focus {
        outline-color: var(--uui-color-focus,#3879ff);
        outline-width: var(--uui-card-border-width);
        outline-style: solid;
        outline-offset: var(--uui-card-border-width);
        border-radius: var(--uui-border-radius,3px);
      }

      slot[name='actions'] {
        display: flex;
        align-items: center;
        --uui-button-height: calc(var(--uui-size-2,6px) * 4);
        margin-right: var(--uui-size-2,6px);
      }
      #tag-container {
        margin: calc(var(--uui-size-2,6px));
      }
      #actions-container {
        margin: calc(var(--uui-size-2,6px));
        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:hover) #actions-container,
      :host(:focus) #actions-container,
      :host(:focus-within) #actions-container {
        opacity: 1;
      }

      :host([standalone]:not([disabled]):hover) {
        border-color: var(--uui-color-border-emphasis,#a1a1a1);
      }

      :host([disabled]) #open-part {
        cursor: default;
      }

      :host([standalone][disabled]) {
        border-color: var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ));
      }

      slot[name='tag'] {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
    `];Ts([a({type:Boolean,reflect:!0})],xe.prototype,"disabled",2);Ts([a({type:Boolean,reflect:!0})],xe.prototype,"readonly",2);Ts([a({type:Boolean,reflect:!0})],xe.prototype,"error",2);xe=Ts([h("uui-ref")],xe);var uv=Object.defineProperty,cv=Object.getOwnPropertyDescriptor,Uc=t=>{throw TypeError(t)},xi=(t,e,i,o)=>{for(var r=o>1?void 0:o?cv(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&uv(e,i,r),r},hv=(t,e,i)=>e.has(t)||Uc("Cannot "+i),dv=(t,e,i)=>e.has(t)?Uc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),We=(t,e,i)=>(hv(t,e,"access private method"),i),ee,Tc,Vc,Vs,Nc,Hc,Bc,D=class extends xe{constructor(){super(...arguments),dv(this,ee),this.name="",this.detail="",this._iconSlotHasContent=!1,this.fallbackIcon=`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    id="icon">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
  </svg>`}connectedCallback(){super.connectedCallback(),y(this,"uui-icon")}renderDetail(){return l`<small id="detail"
      >${this.detail}<slot name="detail"></slot
    ></small>`}render(){return l`
      ${We(this,ee,Bc).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>

      <slot></slot>
      <slot name="tag" id="tag-container"></slot>
      <slot name="actions" id="actions-container"></slot>
    `}};ee=new WeakSet;Tc=function(t){this._iconSlotHasContent=t.target.assignedNodes({flatten:!0}).length>0};Vc=function(){return l`<uui-icon .svg="${this.fallbackIcon}"></uui-icon>`};Vs=function(){return l`
      <span id="content" class="uui-text">
        <span id="icon">
          <slot name="icon" @slotchange=${We(this,ee,Tc)}></slot>
          ${this._iconSlotHasContent===!1?We(this,ee,Vc).call(this):""}
        </span>
        <div id="info">
          <div id="name">${this.name}<slot name="name"></slot></div>
          ${this.renderDetail()}
        </div>
      </span>
    `};Nc=function(){return l`<a
      id="open-part"
      class="uui-text"
      tabindex=${this.disabled?w:"0"}
      href=${x(this.disabled?void 0:this.href)}
      target=${x(this.target||void 0)}
      rel=${x(this.rel||x(this.target==="_blank"?"noopener noreferrer":void 0))}>
      ${We(this,ee,Vs).call(this)}
    </a>`};Hc=function(){return l`
      <button
        type="button"
        id="open-part"
        class="uui-text"
        tabindex="0"
        @click=${this.handleOpenClick}
        @keydown=${this.handleOpenKeydown}
        ?disabled=${this.disabled}>
        ${We(this,ee,Vs).call(this)}
      </button>
    `};Bc=function(){return this.readonly?l`${We(this,ee,Vs).call(this)}`:this.href?We(this,ee,Nc).call(this):We(this,ee,Hc).call(this)};D.styles=[...xe.styles,c`
      :host {
        min-width: 250px;
        padding: 1px;
      }

      #content {
        display: flex;
        flex-grow: 1;
        align-items: center;
        line-height: 1.2em;
        padding: calc(var(--uui-size-3,9px));
      }

      #open-part {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
        display: flex;
        flex-grow: 1;
      }

      #icon {
        font-size: 1.2em;
        margin-right: var(--uui-size-1,3px);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      #info {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        height: 100%;
        padding-left: var(--uui-size-2,6px);
        margin-top: 1px;
      }

      #detail {
        opacity: 0.6;
        line-height: 1.2em;
      }

      :host([selectable]) #open-part {
        flex-grow: 0;
        padding: 0;
        margin: calc(var(--uui-size-2,6px));

        #content {
          padding: 0;
        }
      }

      :host(:not([disabled])) #open-part:hover #icon {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      :host(:not([disabled])) #open-part:hover #name {
        text-decoration: underline;
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      :host(:not([disabled])) #open-part:hover #detail {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }

      :host([disabled]) #icon {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) #name {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) #detail {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
    `];xi([a({type:String})],D.prototype,"name",2);xi([a({type:String})],D.prototype,"detail",2);xi([a({type:String})],D.prototype,"href",2);xi([a({type:String})],D.prototype,"target",2);xi([a({type:String})],D.prototype,"rel",2);xi([v()],D.prototype,"_iconSlotHasContent",2);D=xi([h("uui-ref-node")],D);var pv=Object.defineProperty,fv=Object.getOwnPropertyDescriptor,jc=(t,e,i,o)=>{for(var r=o>1?void 0:o?fv(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&pv(e,i,r),r},Ns=class extends D{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M142.212 397.267l106.052-48.024L398.479 199.03l-26.405-26.442-90.519 90.517-15.843-15.891 90.484-90.486-16.204-16.217-150.246 150.243-47.534 106.513zm74.904-100.739l23.285-23.283 3.353 22.221 22.008 3.124-23.283 23.313-46.176 20.991 20.813-46.366zm257.6-173.71L416.188 64.3l-49.755 49.785 58.504 58.503 49.779-49.77zM357.357 300.227h82.826v116.445H68.929V300.227h88.719v-30.648H38.288v177.733h432.537V269.578H357.357v30.649z"></path></svg>',this.alias=""}renderDetail(){let t=[];return this.alias!==""&&t.push(this.alias),this.detail!==""&&t.push(this.detail),l`<small id="detail"
      >${t.join(" | ")}<slot name="detail"></slot
    ></small>`}};Ns.styles=[...D.styles];jc([a({type:String})],Ns.prototype,"alias",2);Ns=jc([h("uui-ref-node-data-type")],Ns);var mv=Object.defineProperty,vv=Object.getOwnPropertyDescriptor,Rc=(t,e,i,o)=>{for(var r=o>1?void 0:o?vv(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&mv(e,i,r),r},Hs=class extends D{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M49.035 60.434h413.93v33.592H49.035zm0 82.005h86.578v86.577H49.035zm163.677 0h86.576v86.577h-86.576zm163.676 0h86.576v86.577h-86.576zM49.035 282.984h413.93v33.593H49.035zm0 82.006h86.578v86.576H49.035zm163.677 0h86.576v86.576h-86.576zm163.676 0h86.576v86.576h-86.576z"></path></svg>',this.alias=""}renderDetail(){let t=[];return this.alias!==""&&t.push(this.alias),this.detail!==""&&t.push(this.detail),l`<small id="detail"
      >${t.join(" | ")}<slot name="detail"></slot
    ></small>`}};Hs.styles=[...D.styles];Rc([a({type:String})],Hs.prototype,"alias",2);Hs=Rc([h("uui-ref-node-document-type")],Hs);var bv=Object.getOwnPropertyDescriptor,gv=(t,e,i,o)=>{for(var r=o>1?void 0:o?bv(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(r)||r);return r},Ua=class extends D{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M444.72 215.28H67.28c-11.04 0-20-8.96-20-20V64.896c0-11.04 8.96-20 20-20h377.44c11.04 0 20 8.96 20 20V195.28c0 11.056-8.96 20-20 20zm-357.44-40h337.44V84.896H87.28v90.384zm185.504 215.696c0-6.848.704-13.504 1.936-20H87.28v-90.384h337.44v12.496a108.098 108.098 0 0140 31.36v-63.856c0-11.04-8.96-20-20-20H67.28c-11.04 0-20 8.96-20 20v130.384c0 11.04 8.96 20 20 20h207.44c-1.232-6.496-1.936-13.152-1.936-20zm107.552-76.128c-41.968 0-76.112 34.16-76.112 76.128s34.144 76.128 76.112 76.128 76.128-34.16 76.128-76.128-34.144-76.128-76.128-76.128zm46.016 80.464a7.293 7.293 0 01-7.296 7.296h-27.072v27.088a7.293 7.293 0 01-7.296 7.296H376a7.293 7.293 0 01-7.296-7.296v-27.088h-27.072a7.293 7.293 0 01-7.296-7.296v-8.672a7.293 7.293 0 017.296-7.296h27.072v-27.088A7.293 7.293 0 01376 344.96h8.688a7.293 7.293 0 017.296 7.296v27.088h27.072a7.293 7.293 0 017.296 7.296v8.672z"></path></svg>'}};Ua.styles=[...D.styles];Ua=gv([h("uui-ref-node-form")],Ua);var _v=Object.defineProperty,yv=Object.getOwnPropertyDescriptor,Wc=(t,e,i,o)=>{for(var r=o>1?void 0:o?yv(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&_v(e,i,r),r},Bs=class extends D{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M331.135 98.375c3.677 14.798 4.045 16.031 3.702 31.225-.138 5.855-3.5 32.936-2.586 41.242.751 6.851 2.46 7.395 5.162 13.041 4.705 9.824 3.13 23.376 1.325 33.282-.988 5.42-3.076 13.136-6.248 17.561-3.497 4.876-10.498 4.913-13.592 10.602-4.459 8.195-1.941 19.692-4.752 28.54-3.193 10.033-11.325 10.738-11.938 23.867 3.986.562 7.962 1.134 11.938 1.703 3.99 8.484 11.297 25.552 18.759 30.688 6.25 1.705 12.505 3.411 18.752 5.113 21.907 8.982 46.251 19.732 68.204 28.987 19.991 8.434 43.927 11.439 51.151 32.396 0 14.229 1.343 47.849.976 66.497H36.514c-.367-18.648.974-52.268.974-66.497 7.226-20.957 31.16-23.963 51.151-32.396 21.953-9.255 46.297-20.005 68.201-28.987 6.25-1.702 12.506-3.408 18.754-5.113 7.461-5.136 14.77-22.203 18.76-30.688l8.877-2.158c-2.017-11.206-8.954-12.078-11.845-20.01a91882.59 91882.59 0 00-3.408-35.806c.055.563-8.163-1.497-9.238-2.171-11.58-7.256-11.816-36.723-12.931-48.978-.508-5.603 7.283-10.193 5.118-20.465-12.69-60.138 5.486-88.282 34.229-97.614 19.95-8.083 57.198-23.074 91.941-1.703l8.621 7.991 13.952 2.405c7 4.041 11.465 17.446 11.465 17.446z"></path></svg>',this.groupName=""}renderDetail(){let t=[];return this.detail!==""&&t.push(this.detail),this.groupName!==""&&t.push(this.groupName),l`<small id="detail"
      >${t.join(" | ")}<slot name="detail"></slot
    ></small>`}};Bs.styles=[...D.styles];Wc([a({type:String,attribute:"group-name"})],Bs.prototype,"groupName",2);Bs=Wc([h("uui-ref-node-member")],Bs);var xv=Object.defineProperty,wv=Object.getOwnPropertyDescriptor,Ta=(t,e,i,o)=>{for(var r=o>1?void 0:o?wv(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&xv(e,i,r),r},uo=class extends D{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M161.08 106.29l-70.073 40.452 165.498 95.545 70.076-40.453L161.08 106.29zm259.851 41.077L255.435 51.815l-63.578 36.709 165.499 95.542 63.575-36.699zm-150.11 122.19V459.43l164.966-95.238V174.32l-164.966 95.237zM75.082 364.191l164.959 95.234V268.32L75.082 173.09v191.101z"></path></svg>',this.version="",this.author=""}renderDetail(){let t=[];return this.detail!==""&&t.push(this.detail),this.version!==""&&t.push(this.version),this.author!==""&&t.push(this.author),l`<small id="detail"
      >${t.join(" | ")}<slot name="detail"></slot
    ></small>`}};uo.styles=[...D.styles];Ta([a({type:String})],uo.prototype,"version",2);Ta([a({type:String})],uo.prototype,"author",2);uo=Ta([h("uui-ref-node-package")],uo);var kv=Object.defineProperty,Ev=Object.getOwnPropertyDescriptor,Fc=(t,e,i,o)=>{for(var r=o>1?void 0:o?Ev(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&kv(e,i,r),r},js=class extends D{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M331.135 98.375c3.677 14.798 4.045 16.031 3.702 31.225-.138 5.855-3.5 32.936-2.586 41.242.751 6.851 2.46 7.395 5.162 13.041 4.705 9.824 3.13 23.376 1.325 33.282-.988 5.42-3.076 13.136-6.248 17.561-3.497 4.876-10.498 4.913-13.592 10.602-4.459 8.195-1.941 19.692-4.752 28.54-3.193 10.033-11.325 10.738-11.938 23.867 3.986.562 7.962 1.134 11.938 1.703 3.99 8.484 11.297 25.552 18.759 30.688 6.25 1.705 12.505 3.411 18.752 5.113 21.907 8.982 46.251 19.732 68.204 28.987 19.991 8.434 43.927 11.439 51.151 32.396 0 14.229 1.343 47.849.976 66.497H36.514c-.367-18.648.974-52.268.974-66.497 7.226-20.957 31.16-23.963 51.151-32.396 21.953-9.255 46.297-20.005 68.201-28.987 6.25-1.702 12.506-3.408 18.754-5.113 7.461-5.136 14.77-22.203 18.76-30.688l8.877-2.158c-2.017-11.206-8.954-12.078-11.845-20.01a91882.59 91882.59 0 00-3.408-35.806c.055.563-8.163-1.497-9.238-2.171-11.58-7.256-11.816-36.723-12.931-48.978-.508-5.603 7.283-10.193 5.118-20.465-12.69-60.138 5.486-88.282 34.229-97.614 19.95-8.083 57.198-23.074 91.941-1.703l8.621 7.991 13.952 2.405c7 4.041 11.465 17.446 11.465 17.446z"></path></svg>',this.groupName=""}renderDetail(){let t=[];return this.detail!==""&&t.push(this.detail),this.groupName!==""&&t.push(this.groupName),l`<small id="detail"
      >${t.join(" | ")}<slot name="detail"></slot
    ></small>`}};js.styles=[...D.styles];Fc([a({type:String,attribute:"group-name"})],js.prototype,"groupName",2);js=Fc([h("uui-ref-node-user")],js);var Cv=Object.defineProperty,$v=Object.getOwnPropertyDescriptor,Gc=(t,e,i,o)=>{for(var r=o>1?void 0:o?$v(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Cv(e,i,r),r},Rs=class extends d{constructor(){super(...arguments),this.enforceScroll=!1}connectedCallback(){super.connectedCallback(),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")}render(){return l`<slot></slot>`}};Rs.styles=[c`
      :host {
        display: block;
        scrollbar-width: thin;
        scrollbar-color: var(--uui-color-disabled-contrast,#c4c4c4)
          var(--uui-color-surface,#fff);
        overflow-y: auto;
      }

      :host([enforce-scroll]) {
        overflow-y: scroll;
      }

      :host::-webkit-scrollbar {
        width: 6px;
        height: 6px; /* needed for horizontal scrollbar */
      }

      :host::-webkit-scrollbar-track {
        background: var(--uui-color-surface,#fff);
        border-radius: 3px;
      }
      :host::-webkit-scrollbar-thumb {
        background-color: var(--uui-color-disabled-contrast,#c4c4c4);
        border-radius: 3px;
      }
    `];Gc([a({type:Boolean,reflect:!0,attribute:"enforce-scroll"})],Rs.prototype,"enforceScroll",2);Rs=Gc([h("uui-scroll-container")],Rs);var co=class extends k{constructor(e,i={}){super(e,{bubbles:!0,...i})}};co.CHANGE="change";var Pv=Object.defineProperty,Sv=Object.getOwnPropertyDescriptor,Rt=(t,e,i,o)=>{for(var r=o>1?void 0:o?Sv(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Pv(e,i,r),r},$t=class extends G(d,""){constructor(){super(),this.placeholder="",this.disabled=!1,this.readonly=!1,this.error=!1,this.options=[],this._groups=[],this.disabledGroups="",this._disabledGroups=[],this._values=[],this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0")}),this.addEventListener("blur",()=>{this.style.setProperty("--uui-show-focus-outline","")})}async focus(){await this.updateComplete,this._input.focus()}async blur(){await this.updateComplete,this._input.blur()}async click(){await this.updateComplete,this._input.click()}getFormElement(){return this._input}connectedCallback(){super.connectedCallback(),this.label||console.warn(this.tagName+" needs a `label`",this)}_createDisabledGroups(){this.disabledGroups.length!==0&&(this._disabledGroups=this.disabledGroups.split(","))}_extractGroups(){this.options.length!==0&&(this._groups=Array.from(new Set(this.options.filter(t=>t.group).map(t=>t.group))))}willUpdate(t){if(t.has("options")){this._extractGroups(),this._values=this.options.map(i=>i.value);let e=this.options.find(i=>i.selected);this.value=e?e.value:""}t.has("value")&&(this.value=this._values.includes(this.value)?this.value:""),t.has("disabledGroups")&&this._createDisabledGroups()}setValue(t){t.stopPropagation();let e=t.target;t.target&&(this.value=e.value),this.dispatchEvent(new co(co.CHANGE,{bubbles:!0,composed:!1}))}_renderOption(t,e,i,o){return l`<option
      value="${e}"
      ?selected=${i}
      ?disabled=${o}>
      ${t}
    </option>`}_renderGrouped(){return this._groups.length===0?w:l`
      ${this._groups.map(t=>l`<optgroup
            label=${t}
            ?disabled=${this._disabledGroups.some(e=>e.toLowerCase()===t.toLowerCase())}>
            ${this.options.map(e=>e.group===t?this._renderOption(e.name,e.value,e.selected,e.disabled):"")}
          </optgroup>`)}
    `}_getDisplayValue(){return this.options.find(t=>t.value===this.value)?.name||this.value}render(){return this.readonly?l`<span>${this._getDisplayValue()}</span>`:l` <select
      id="native"
      aria-label=${this.label}
      @change=${this.setValue}
      ?disabled=${this.disabled}
      .name=${this.name}
      .value=${this.value}>
      <option disabled selected value="" hidden>${this.placeholder}</option>
      ${this._renderGrouped()}
      ${this.options.filter(t=>!t.group).map(t=>this._renderOption(t.name,t.value,t.selected,t.disabled))}
    </select>`}};$t.styles=[c`
      :host {
        display: inline-block;
        position: relative;
        font-family: inherit;
      }

      #native {
        display: inline-block;
        font-family: inherit;
        font-size: var(--uui-select-font-size, inherit);
        height: var(--uui-select-height, var(--uui-size-11,33px));
        padding: var(--uui-select-padding-y, var(--uui-size-1,3px))
          var(--uui-select-padding-x, var(--uui-size-2,6px));
        color: var(--uui-select-text-color, var(--uui-color-text,#060606));
        box-sizing: border-box;
        border-radius: var(--uui-border-radius,3px);
        border: 1px solid
          var(--uui-select-border-color, var(--uui-color-border,#d8d7d9));
        transition: all 150ms ease;
        width: 100%;
        background-color: var(
          --uui-select-background-color,
          var(--uui-color-surface,#fff)
        );
      }

      #native:focus {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-select-outline-color, var(--uui-color-focus,#3879ff));
      }

      #native[disabled] {
        cursor: not-allowed;
        background-color: var(
          --uui-select-disabled-background-color,
          var(--uui-color-disabled,#f3f3f5)
        );
      }

      #native:hover {
        border: 1px solid
          var(--uui-select-border-color-hover, var(--uui-color-border-emphasis,#a1a1a1));
      }

      option:checked {
        background: var(
          --uui-select-selected-option-background-color,
          var(--uui-color-selected,#3544b1)
        );
        color: var(
          --uui-select-selected-option-color,
          var(--uui-color-selected-contrast,#fff)
        );
      }

      #caret {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
      }

      :host([error]) #native {
        border: 1px solid var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }

      :host([error]) #native[disabled] {
        border: 1px solid var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
    `];Rt([a({type:String})],$t.prototype,"label",2);Rt([a()],$t.prototype,"placeholder",2);Rt([a({type:Boolean,reflect:!0})],$t.prototype,"disabled",2);Rt([a({type:Boolean,reflect:!0})],$t.prototype,"readonly",2);Rt([a({type:Boolean,reflect:!0})],$t.prototype,"error",2);Rt([a({type:Array,attribute:!1})],$t.prototype,"options",2);Rt([v()],$t.prototype,"_groups",2);Rt([a()],$t.prototype,"disabledGroups",2);Rt([v()],$t.prototype,"_disabledGroups",2);Rt([E("#native")],$t.prototype,"_input",2);$t=Rt([h("uui-select")],$t);var Ov=c`
  input[type='range'] {
    left: 0;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 2;

    height: 100%;
    -webkit-appearance: none;
    margin: 0px;
    padding: 0px;
    border: 0 none;
    background: transparent;
    color: transparent;
    overflow: visible;
    border: none;
  }
  input[type='range']:focus {
    outline: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 100%;
    -webkit-appearance: none;
    margin: 0px;
    padding: 0px;
    border: none;
    background: transparent;
    color: transparent;
    overflow: visible;
    order: none;
  }

  input[type='range']:focus::-webkit-slider-runnable-track {
    background: transparent;
    border: none;
  }

  input[type='range']::-moz-range-track {
    width: 100%;
    height: 100%;
    -moz-appearance: none;
    margin: 0px;
    padding: 0px;
    border: 0 none;
    background: transparent;
    color: transparent;
    overflow: visible;
  }

  input[type='range']::-ms-track {
    width: 100%;
    height: 100%;
    -webkit-appearance: none;
    margin: 0px;
    padding: 0px;
    border: 0 none;
    background: transparent;
    color: transparent;
    overflow: visible;
  }
  input[type='range']::-ms-fill-lower,
  input[type='range']::-ms-fill-upper {
    background: transparent;
    border: 0 none;
  }

  input[type='range']::-ms-tooltip {
    display: none;
  }

  input[type='range']::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 12px;
    border: 0 none;
    background: transparent;
    cursor: pointer;
  }

  input[type='range']::-webkit-slider-thumb {
    width: 18px;
    height: 18px;
    border-radius: 12px;
    border: 0 none;
    background: transparent;
    cursor: pointer;
    -webkit-appearance: none;
  }

  input[type='range']::-ms-thumb {
    width: 18px;
    height: 18px;
    border-radius: 12px;
    border: 0 none;
    background: transparent;
    cursor: pointer;
  }

  input[type='range']:focus::-ms-fill-lower {
    background: transparent;
  }
  input[type='range']:focus::-ms-fill-upper {
    background: transparent;
  }
`,Fe=class extends k{constructor(e,i={}){super(e,{bubbles:!0,...i})}};Fe.INPUT="input";Fe.CHANGE="change";var Av=Object.defineProperty,Iv=Object.getOwnPropertyDescriptor,Yc=t=>{throw TypeError(t)},vt=(t,e,i,o)=>{for(var r=o>1?void 0:o?Iv(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Av(e,i,r),r},Ha=(t,e,i)=>e.has(t)||Yc("Cannot "+i),qc=(t,e,i)=>(Ha(t,e,"read from private field"),i?i.call(t):e.get(t)),Va=(t,e,i)=>e.has(t)?Yc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Kc=(t,e,i,o)=>(Ha(t,e,"write to private field"),e.set(t,i),i),Mv=(t,e,i)=>(Ha(t,e,"access private method"),i),Ws,Fs,Na,Zc,ho=12,Xc=24,Lv=(t,e,i)=>Array.from({length:(e-t)/i+1},(o,r)=>t+r*i),zv=t=>{let e=t.toString().indexOf(".");return e>=0?t.toString().length-e-1:0},et=class extends G(d,""){constructor(){super(),Va(this,Na),Va(this,Ws,0),this.hideStepValues=!1,this.hideValueLabel=!1,this.min=0,this.max=100,Va(this,Fs,1),this.disabled=!1,this.readonly=!1,this._stepWidth=0,this.onWindowResize=()=>{this._stepWidth=this._calculateStepWidth()},this._steps=[],this._sliderPosition="0%",this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0")}),this.addEventListener("blur",()=>{this.style.setProperty("--uui-show-focus-outline","")}),this.addEventListener("keydown",Mv(this,Na,Zc))}get step(){return qc(this,Fs)}set step(t){Kc(this,Fs,t),Kc(this,Ws,(t.toString().split(".")[1]||[]).length)}get value(){return super.value}set value(t){if(t instanceof File)return;let e=super.value,i=t?parseFloat(t):0;i=Math.min(Math.max(i,this.min),this.max),this.step>0&&(i=Math.round(i/this.step)*this.step),super.value=i.toFixed(qc(this,Ws)).toString(),this._calculateSliderPosition(),this.requestUpdate("value",e)}async focus(){await this.updateComplete,this._input.focus()}async blur(){await this.updateComplete,this._input.blur()}async click(){await this.updateComplete,this._input.click()}getFormElement(){return this._input}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.onWindowResize),this.label||console.warn(this.tagName+" needs a `label`",this)}disconnectedCallback(){window.removeEventListener("resize",this.onWindowResize),super.disconnectedCallback()}firstUpdated(){this._calculateSliderPosition(),this._updateSteps()}updated(t){super.updated(t),(t.get("max")||t.get("min")||t.get("step"))&&(this.value=this.value,this._updateSteps())}_updateSteps(){this._steps=Lv(this.min,this.max,this.step),this._stepWidth=this._calculateStepWidth()}_calculateStepWidth(){return(this._track.getBoundingClientRect().width-ho*2)/(this._steps.length-1)}_calculateSliderPosition(){let t=(parseFloat(super.value||"0")-this.min)/(this.max-this.min);this._sliderPosition=`${Math.floor(t*1e5)/1e3}%`}_onInput(t){t.stopPropagation(),this.value=this._input.value,this.dispatchEvent(new Fe(Fe.INPUT))}_onChange(t){t.stopPropagation(),this.pristine=!1,this.dispatchEvent(new Fe(Fe.CHANGE))}renderTrackSteps(){return b`
  ${this._steps.map(t=>{if(this._stepWidth>=Xc){let e=Math.round(ho+this._stepWidth*this._steps.indexOf(t));return b`<circle class="track-step" cx="${e}" cy="50%" r="4.5" />`}return b``})}
`}renderStepValues(){return this.hideStepValues?w:l`<div id="step-values">
      ${this._steps.map(t=>l` <span
            ><span>
              ${this._steps.length<=20&&this._stepWidth>=Xc?t.toFixed(zv(this.step)):w}
            </span></span
          >`)}
    </div>`}render(){return l`
      <input
        id="input"
        type="range"
        min="${this.min}"
        max="${this.max}"
        .value="${this.value}"
        aria-label="${this.label}"
        step="${+this.step}"
        ?disabled=${this.disabled||this.readonly}
        ?readonly=${this.readonly}
        @input=${this._onInput}
        @change=${this._onChange} />
      <div id="track" aria-hidden="true">
        <svg height="100%" width="100%">
          <rect x="9" y="9" height="3" rx="2" />
          ${this.renderTrackSteps()}
        </svg>

        <div id="track-inner" aria-hidden="true">
          <div id="thumb" style=${at({left:this._sliderPosition})}>
            ${this.hideValueLabel?null:l`<div id="thumb-label">${this.value}</div>`}
          </div>
        </div>
      </div>
      ${this.renderStepValues()}
    `}};Ws=new WeakMap;Fs=new WeakMap;Na=new WeakSet;Zc=function(t){t.key=="Enter"&&this.submit()};et.formAssociated=!0;et.styles=[Ul,Ov,c`
      :host {
        display: inline-block;
        width: 100%;
        position: relative;
        min-height: 30px;
        user-select: none;
      }

      input {
        box-sizing: border-box;
        height: 18px;
      }

      #track {
        position: relative;
        height: 18px;
        width: 100%;
        display: flex;
      }

      #track svg {
        height: 21px;
        border-radius: 10px;
        background-color: var(--uui-color-surface,#fff);
      }
      #track svg rect {
        width: calc(100% - 18px);
        fill: var(--uui-color-border-standalone,#c2c2c2);
      }
      input:hover ~ #track svg rect {
        fill: var(--uui-color-border-emphasis,#a1a1a1);
      }

      input:focus ~ #track #thumb {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }

      .track-step {
        fill: var(--uui-color-border,#d8d7d9);
      }

      input:hover ~ #track svg .track-step {
        fill: var(--uui-color-border-emphasis,#a1a1a1);
      }

      #track-inner {
        position: absolute;
        left: ${ho}px; /* Match TRACK_MARGIN */
        right: ${ho}px; /* Match TRACK_MARGIN */
      }

      #thumb {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 2px;
        bottom: 0;
        left: 0;
        height: 17px;
        width: 17px;
        margin-left: -8px;
        margin-right: -8px;
        border-radius: 50%;
        box-sizing: border-box;

        background-color: var(--uui-color-surface,#fff);
        border: 2px solid var(--uui-color-selected,#3544b1);
      }
      :host([disabled]) #thumb {
        background-color: var(--uui-color-disabled,#f3f3f5);
        border-color: var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ));
      }

      #thumb:after {
        content: '';
        height: 9px;
        width: 9px;
        border-radius: 50%;
        background-color: var(--uui-color-selected,#3544b1);
      }

      :host([disabled]) #thumb:after {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }

      #thumb-label {
        position: absolute;
        box-sizing: border-box;
        font-weight: 700;
        bottom: 15px;
        left: 50%;
        width: 40px;
        margin-left: -20px;
        text-align: center;
        opacity: 0;
        transition: 120ms opacity;
        color: var(--uui-color-selected,#3544b1);
      }

      input:focus ~ #track #thumb-label,
      input:hover ~ #track #thumb-label {
        opacity: 1;
      }

      #step-values {
        margin: 0 ${ho}px; /* Match TRACK_MARGIN */
        margin-top: 6px;
        display: flex;
        align-items: flex-end;
        box-sizing: border-box;
      }

      #step-values > span {
        flex-basis: 0;
        flex-grow: 1;
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      #step-values > span > span {
        transform: translateX(-50%);
        display: inline-block;
        text-align: center;
        font-size: var(--uui-type-small-size,12px);
      }

      #step-values > span:last-child {
        width: 0;
        flex-grow: 0;
      }

      :host(:not([pristine]):invalid) #thumb {
        border-color: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
      :host(:not([pristine]):invalid) #thumb:after {
        background-color: var(--uui-color-invalid,#d42054);
      }

      // readonly
      :host([readonly]) #thumb {
        background-color: var(--uui-color-disabled,#f3f3f5);
        border-color: var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ));
      }

      :host([readonly]) #thumb-label {
        opacity: 1;
      }
    `];vt([a({type:Boolean,attribute:"hide-step-values"})],et.prototype,"hideStepValues",2);vt([a({type:Boolean,attribute:"hide-value-label"})],et.prototype,"hideValueLabel",2);vt([a({type:Number})],et.prototype,"min",2);vt([a({type:Number})],et.prototype,"max",2);vt([a({type:Number})],et.prototype,"step",1);vt([a({type:String})],et.prototype,"value",1);vt([a({type:Boolean,reflect:!0})],et.prototype,"disabled",2);vt([a({type:Boolean,reflect:!0})],et.prototype,"readonly",2);vt([a({type:String})],et.prototype,"label",2);vt([E("#input")],et.prototype,"_input",2);vt([E("#track")],et.prototype,"_track",2);vt([v()],et.prototype,"_stepWidth",2);vt([v()],et.prototype,"_steps",2);vt([v()],et.prototype,"_sliderPosition",2);et=vt([h("uui-slider")],et);var Dv=Object.defineProperty,Uv=Object.getOwnPropertyDescriptor,Qc=(t,e,i,o)=>{for(var r=o>1?void 0:o?Uv(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Dv(e,i,r),r},Gs=class extends d{constructor(){super(...arguments),this.open=!1}render(){return l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="m4 9 8 8 8-8"></path>
    </svg>`}};Gs.styles=[c`
      :host {
        display: inline-flex;
        width: 12px;
        vertical-align: middle;
      }

      svg {
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
        transition: transform 100ms cubic-bezier(0.1, 0, 0.9, 1);
        width: 100%;
        height: 100%;
      }

      :host([open]) svg {
        transform: rotate(0deg);
      }
    `];Qc([a({type:Boolean,reflect:!0})],Gs.prototype,"open",2);Gs=Qc([h("uui-symbol-expand")],Gs);var Tv=Object.defineProperty,Vv=Object.getOwnPropertyDescriptor,Ba=(t,e,i,o)=>{for(var r=o>1?void 0:o?Vv(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Tv(e,i,r),r},po=class extends d{constructor(){super(...arguments),this.src="",this.alt=""}connectedCallback(){super.connectedCallback(),y(this,"uui-icon")}render(){return this.src?l`<img src=${this.src} alt=${this.alt} />`:l`<uui-icon
          name="picture"
          .fallback=${Fl.strings[0]}></uui-icon>`}};po.styles=[c`
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }

      img {
        object-fit: contain;
        height: 100%;
        width: 100%;
      }

      uui-icon {
        width: 100%;
        height: 100%;
        max-width: 100%;
        display: flex;
        max-height: 100%;
        justify-content: center;
        color: var(--uui-color-surface,#fff);
        background: var(--uui-color-surface-alt,#f3f3f5);
      }
    `];Ba([a({type:String})],po.prototype,"src",2);Ba([a({type:String})],po.prototype,"alt",2);po=Ba([h("uui-symbol-file-thumbnail")],po);var Nv=Object.defineProperty,Hv=Object.getOwnPropertyDescriptor,Jc=(t,e,i,o)=>{for(var r=o>1?void 0:o?Hv(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Nv(e,i,r),r},qs=class extends d{constructor(){super(...arguments),this.type=""}render(){return l`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="0.6"
        stroke-linecap="round"
        stroke-linejoin="round"
        id="icon">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      </svg>

      ${this.type?l`<small id="file-type" class="uui-small"
            >${this.type.toUpperCase()}</small
          >`:""}
    `}};qs.styles=[Ft,c`
      :host {
        position: relative;
        display: block;
        box-sizing: border-box;
      }

      #file-type {
        position: absolute;
        bottom: 20%;
        left: 12%;
        margin-left: calc(var(--uui-size-3,9px) * -1);
        padding: 0px var(--uui-size-3,9px);
        font-weight: 700;
        background-color: var(--uui-color-surface-alt,#f3f3f5);
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-radius: var(--uui-border-radius,3px);
      }

      #icon {
        width: 100%;
        color: var(--uui-color-border-standalone,#c2c2c2);
      }
    `];Jc([a({type:String})],qs.prototype,"type",2);qs=Jc([h("uui-symbol-file")],qs);var Bv=Object.getOwnPropertyDescriptor,jv=(t,e,i,o)=>{for(var r=o>1?void 0:o?Bv(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(r)||r);return r},ja=class extends d{render(){return l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="0.6"
      stroke-linecap="round"
      stroke-linejoin="round"
      id="icon">
      <path
        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>`}};ja.styles=[c`
      :host {
        display: block;
        position: relative;
        box-sizing: border-box;
      }

      #icon {
        width: 100%;
        color: var(--uui-color-border-standalone,#c2c2c2);
      }
    `];ja=jv([h("uui-symbol-folder")],ja);var Rv=Object.defineProperty,Wv=Object.getOwnPropertyDescriptor,th=(t,e,i,o)=>{for(var r=o>1?void 0:o?Wv(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Rv(e,i,r),r},Ks=class extends d{constructor(){super(...arguments),this.open=!1}render(){return b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      ${this.open===!0?b`<path d="M457.915 242.222H269.053l-.004-78.416c0-33.277-12.63-63.824-33.538-86.175-20.82-22.357-50.579-36.756-83.391-36.731-32.814-.024-62.57 14.375-83.391 36.731-20.915 22.351-33.541 52.897-33.547 86.175v103.859H96.19v-13.476l-35.656-35.656H96.19v-54.728c0-17.765 6.717-33.406 17.084-44.502 10.463-11.09 23.927-17.37 38.845-17.394 14.916.024 28.375 6.304 38.837 17.394 10.375 11.096 17.092 26.738 17.087 44.502v78.416h-26.189c-9.159 0-16.582 7.426-16.582 16.585v194.53c0 9.158 7.423 16.583 16.582 16.583h276.06c9.164 0 16.587-7.425 16.587-16.583v-194.53c.001-9.159-7.422-16.584-16.586-16.584z"></path>`:b`<path d="M404.84 246.573h-22.084l-.002-73.603c0-36.675-13.921-70.311-36.917-94.892-22.91-24.584-55.547-40.367-91.539-40.336-36.003-.031-68.643 15.752-91.55 40.336-23.001 24.582-36.918 58.217-36.925 94.892v73.603h-22.082c-9.16 0-16.585 7.421-16.585 16.583v194.531c0 9.158 7.425 16.585 16.585 16.585H404.84c9.162 0 16.586-7.427 16.586-16.585V263.156c0-9.161-7.424-16.583-16.586-16.583zm-218.013-73.602c0-21.167 8.012-39.893 20.468-53.219 12.552-13.316 28.896-20.982 47.003-21.007 18.095.025 34.438 7.685 46.987 21.007 12.455 13.326 20.467 32.052 20.467 53.219v73.603H186.827v-73.603z"></path>`}
    </svg>`}};Ks.styles=[c`
      :host {
        display: inline-block;
        vertical-align: middle;
        width: 1em;
      }

      svg {
        fill: currentColor;
      }
    `];th([a({type:Boolean,reflect:!0})],Ks.prototype,"open",2);Ks=th([h("uui-symbol-lock")],Ks);var Fv=Object.getOwnPropertyDescriptor,Gv=(t,e,i,o)=>{for(var r=o>1?void 0:o?Fv(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(r)||r);return r},Ra=class extends d{render(){return b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle cx="17" cy="50" r="9"></circle>
      <circle cx="50" cy="50" r="9"></circle>
      <circle cx="83" cy="50" r="9"></circle>
    </svg>`}};Ra.styles=[c`
      :host {
        display: inline-block;
        vertical-align: bottom;
        width: 1.15em;
        height: 1.15em;
      }

      svg {
        fill: currentColor;
      }
    `];Ra=Gv([h("uui-symbol-more")],Ra);var qv=Object.defineProperty,Kv=Object.getOwnPropertyDescriptor,eh=(t,e,i,o)=>{for(var r=o>1?void 0:o?Kv(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&qv(e,i,r),r},Xs=class extends Kt(d){constructor(){super(...arguments),this.descending=!1}render(){return l` <svg
        id="up"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path d="m4 9 8 8 8-8"></path>
      </svg>
      <svg
        id="down"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path d="m4 9 8 8 8-8"></path>
      </svg>`}};Xs.styles=[c`
      :host {
        position: relative;
        display: inline-block;
        width: 0.9em;
        height: 1em;
        //vertical-align: middle;
        pointer-events: none;
      }

      svg {
        position: absolute;
        left: 0;
        top: 50%;
        width: 0.9em;
        transform-origin: 50% 50%;
        transition:
          transform 120ms ease-in-out,
          opacity 120ms,
          margin-top 240ms;
        opacity: 0;
        margin-top: -8em;
      }

      #up {
        transform: rotate(180deg);
        margin-top: -1.05em;
      }
      #down {
        margin-top: -0.55em;
      }
      :host([active]) #up {
        margin-top: calc(-0.8em - (0.25em * var(--uui-symbol-sort-hover, 0)));
      }
      :host([active]) #down {
        margin-top: calc(-0.8em + (0.25em * var(--uui-symbol-sort-hover, 0)));
      }

      :host(:hover) {
        --uui-symbol-sort-hover: 1;
      }
      :host(:not([active])) #up,
      :host(:not([active])) #down {
        opacity: calc(0.25 * var(--uui-symbol-sort-hover, 0));
      }

      :host([active]:not([descending])) #down {
        opacity: 1;
      }
      :host([active]:not([descending])) #up {
        opacity: calc(0.25 * var(--uui-symbol-sort-hover, 0));
      }

      :host([active][descending]) #up {
        opacity: 1;
      }
      :host([active][descending]) #down {
        opacity: calc(0.25 * var(--uui-symbol-sort-hover, 0));
      }
    `];eh([a({type:Boolean,reflect:!0})],Xs.prototype,"descending",2);Xs=eh([h("uui-symbol-sort")],Xs);var Xv=Object.getOwnPropertyDescriptor,Yv=(t,e,i,o)=>{for(var r=o>1?void 0:o?Xv(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(r)||r);return r},Wa=class extends d{connectedCallback(){super.connectedCallback(),this.setAttribute("role","table")}render(){return l`<slot></slot>`}};Wa.styles=[c`
      :host {
        display: table;
        width: 100%;
        border-radius: var(--uui-border-radius,3px);
        background-color: var(--uui-color-surface,#fff);
        cursor: default;
      }
    `];Wa=Yv([h("uui-table")],Wa);var Zv=Object.defineProperty,Qv=Object.getOwnPropertyDescriptor,Zs=(t,e,i,o)=>{for(var r=o>1?void 0:o?Qv(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Zv(e,i,r),r},Ge=class extends d{constructor(){super(...arguments),this.disableChildInteraction=!1,this.noPadding=!1,this.clipText=!1,this._observer=new ResizeObserver(()=>{this._detectOverflow()})}_detectOverflow(){this.scrollWidth>this.clientWidth?this.setAttribute("title",this.innerText):this.removeAttribute("title")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","cell")}disconnectedCallback(){super.disconnectedCallback(),this._observer.disconnect()}updated(t){super.updated(t),t.has("clipText")&&(this.clipText?(this._detectOverflow(),this._observer.observe(this)):this._observer.disconnect())}render(){return l` <slot @slotchange=${this._detectOverflow}></slot>`}};Ge.styles=[c`
      :host {
        position: relative;
        display: table-cell;
        height: var(--uui-table-cell-height, var(--uui-size-12,36px));
        padding: var(
          --uui-table-cell-padding,
          var(--uui-size-3,9px) var(--uui-size-5,15px)
        );
        border-top: 1px solid var(--uui-color-border,#d8d7d9);
        vertical-align: middle;
      }

      :host([clip-text]) {
        max-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        box-sizing: border-box;
      }

      :host([disable-child-interaction]) ::slotted(*) {
        pointer-events: none;
      }

      :host([disable-child-interaction])::after {
        content: '';
        position: absolute;
        inset: 0;
      }

      :host([no-padding]) {
        padding: 0;
      }
    `];Zs([a({type:Boolean,reflect:!0,attribute:"disable-child-interaction"})],Ge.prototype,"disableChildInteraction",2);Zs([a({type:Boolean,reflect:!0,attribute:"no-padding"})],Ge.prototype,"noPadding",2);Zs([a({type:Boolean,reflect:!0,attribute:"clip-text"})],Ge.prototype,"clipText",2);Ge=Zs([h("uui-table-cell")],Ge);var Jv=Object.getOwnPropertyDescriptor,t0=(t,e,i,o)=>{for(var r=o>1?void 0:o?Jv(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(r)||r);return r},Fa=class extends d{};Fa.styles=[c`
      :host {
        display: table-column;
      }
    `];Fa=t0([h("uui-table-column")],Fa);var e0=Object.getOwnPropertyDescriptor,i0=(t,e,i,o)=>{for(var r=o>1?void 0:o?e0(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(r)||r);return r},Ga=class extends Ge{connectedCallback(){super.connectedCallback(),this.setAttribute("role","columnheader")}};Ga.styles=[...Ge.styles,c`
      :host {
        border-top: none;
      }
    `];Ga=i0([h("uui-table-head-cell")],Ga);var r0=Object.getOwnPropertyDescriptor,o0=(t,e,i,o)=>{for(var r=o>1?void 0:o?r0(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(r)||r);return r},qa=class extends d{connectedCallback(){super.connectedCallback(),this.setAttribute("role","row")}render(){return l`<slot></slot>`}};qa.styles=[c`
      :host {
        display: table-header-group;
        font-weight: bold;
      }
    `];qa=o0([h("uui-table-head")],qa);var s0=Object.defineProperty,n0=Object.getOwnPropertyDescriptor,ih=(t,e,i,o)=>{for(var r=o>1?void 0:o?n0(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&s0(e,i,r),r},Ys=class extends $e(Ot(d)){constructor(){super();let t=!1;this.addEventListener("blur",()=>{t===!1&&this.style.setProperty("--uui-show-focus-outline","1"),t=!1}),this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0"),t=!0}),this.addEventListener("mouseup",()=>{t=!1})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","row")}updated(t){t.has("selectOnly")&&this.updateChildSelectOnly()}updateChildSelectOnly(){this.slotCellNodes&&this.slotCellNodes.forEach(t=>{t.disableChildInteraction!==void 0&&(t.disableChildInteraction=this.selectOnly)})}render(){return l` <slot @slotchanged=${this.updateChildSelectOnly}></slot> `}};Ys.styles=[c`
      :host {
        display: table-row;
        position: relative;
        outline-offset: -3px;
      }

      :host([selectable]) {
        cursor: pointer;
      }

      :host(:focus) {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }
      :host([selected]) {
        outline: 2px solid
          var(--uui-table-row-color-selected, var(--uui-color-selected,#3544b1));
      }
      :host([selected]:focus) {
        outline-color: var(--uui-color-focus,#3879ff);
      }
    `];ih([dt({flatten:!0,selector:"uui-table-cell, [uui-table-cell], [role=cell]"})],Ys.prototype,"slotCellNodes",2);Ys=ih([h("uui-table-row")],Ys);var a0=Object.defineProperty,l0=Object.getOwnPropertyDescriptor,dr=(t,e,i,o)=>{for(var r=o>1?void 0:o?l0(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&a0(e,i,r),r},qe=class extends Kt(F("",d)){constructor(){super(),this.disabled=!1,this.orientation="horizontal",this.addEventListener("click",this.onHostClick)}onHostClick(t){this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}render(){return this.href?l`
          <a
            id="button"
            href=${x(this.disabled?void 0:this.href)}
            target=${x(this.target||void 0)}
            rel=${x(this.rel||x(this.target==="_blank"?"noopener noreferrer":void 0))}
            role="tab">
            <slot name="icon"></slot>
            ${this.renderLabel()}
            <slot name="extra"></slot>
          </a>
        `:l`
          <button
            type="button"
            id="button"
            ?disabled=${this.disabled}
            role="tab">
            <slot name="icon"></slot>
            ${this.renderLabel()}
            <slot name="extra"></slot>
          </button>
        `}};qe.styles=[c`
      :host {
        color: var(--uui-tab-text, var(--uui-color-interactive,#1b264f));
        font-family: inherit;
        width: fit-content;
      }

      #button {
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        min-height: var(--uui-size-12,36px);
        min-width: 70px;
        padding: var(--uui-size-3,9px)
          var(--uui-tab-padding-horizontal, var(--uui-size-5,15px));
        border: none;
        font-size: inherit;
        background: none;
        color: inherit;
        cursor: pointer;
        font-family: inherit;

        /* for anchor tag: */
        text-decoration: none;
        line-height: normal;
      }

      :host([orientation='vertical']) #button {
        min-height: var(--uui-size-14,42px);
        padding: var(--uui-size-2,6px)
          var(--uui-tab-padding-horizontal, var(--uui-size-5,15px));
      }

      :host(:not([disabled])) #button:hover {
        color: var(--uui-tab-text-hover, var(--uui-color-default-emphasis,#3544b1));
      }

      :host(:not([disabled])) #button:active {
        box-shadow:
          inset 0 2px 4px rgba(0, 0, 0, 0.15),
          0 1px 2px rgba(0, 0, 0, 0.05);
      }

      :host([active]) {
        color: var(--uui-tab-text-active, unset);
      }

      :host([disabled]) #button {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
        cursor: default;
      }

      #button::before {
        content: '';
        position: absolute;
        background-color: var(--uui-color-current,#f5c1bc);
        opacity: 0;
      }
      :host([active]) #button::before {
        opacity: 1;
      }

      /* HORIZONTAL */
      :host([orientation='horizontal']) #button::before {
        left: auto;
        right: auto;
        border-radius: var(--uui-border-radius,3px) var(--uui-border-radius,3px) 0 0;
        height: 0px;
        width: calc(100% - 14px);
        bottom: 0;
        transition:
          opacity linear 120ms,
          height ease-in-out 120ms;
      }
      :host([active][orientation='horizontal']) #button::before {
        height: 4px;
      }

      /* VERTICAL */
      :host([orientation='vertical']) #button::before {
        top: auto;
        bottom: auto;
        border-radius: 0 var(--uui-border-radius,3px) var(--uui-border-radius,3px) 0;
        height: calc(100% - 12px);
        width: 0px;
        left: 0;
        transition:
          opacity linear 120ms,
          width ease-in-out 120ms;
      }
      :host([active][orientation='vertical']) #button::before {
        width: 4px;
      }

      #button:hover::before {
        background-color: var(--uui-color-current-emphasis,rgb(
    248,
    214,
    211
  ));
      }
      :host([disabled]) #button::before {
        background-color: var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ));
      }

      slot[name='icon']::slotted(*) {
        font-size: 20px;
        margin-bottom: var(--uui-size-2,6px);
      }

      slot.label {
        /* TODO: Find a better selector */
        text-align: center;
        display: flex;
        width: 100%;
        flex-direction: column;
      }

      :host([orientation='vertical']) slot.label {
        text-align: left;
      }
    `];dr([a({type:Boolean,reflect:!0})],qe.prototype,"disabled",2);dr([a({type:String})],qe.prototype,"href",2);dr([a({type:String})],qe.prototype,"target",2);dr([a({type:String})],qe.prototype,"rel",2);dr([a({type:String,reflect:!0})],qe.prototype,"orientation",2);qe=dr([h("uui-tab")],qe);var u0=Object.defineProperty,c0=Object.getOwnPropertyDescriptor,rh=t=>{throw TypeError(t)},pr=(t,e,i,o)=>{for(var r=o>1?void 0:o?c0(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&u0(e,i,r),r},Xa=(t,e,i)=>e.has(t)||rh("Cannot "+i),A=(t,e,i)=>(Xa(t,e,"read from private field"),i?i.call(t):e.get(t)),ie=(t,e,i)=>e.has(t)?rh("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),fo=(t,e,i,o)=>(Xa(t,e,"write to private field"),e.set(t,i),i),Pt=(t,e,i)=>(Xa(t,e,"access private method"),i),Js,re,we,ur,cr,Qs,vo,mo,bt,oh,sh,Ya,nh,hr,tn,ah,Za,Ka,Ke=class extends d{constructor(){super(...arguments),ie(this,bt),ie(this,Js,0),this.dropdownContentDirection="vertical",ie(this,re,[]),ie(this,we,[]),ie(this,ur,new Map),ie(this,cr,[]),ie(this,Qs,new ResizeObserver(Pt(this,bt,sh).bind(this))),ie(this,vo,[]),ie(this,mo,!1),ie(this,hr,t=>{let e=t.currentTarget;if(Pt(this,bt,Ka).call(this,e)){e.active=!0;let i=A(this,ur).get(e);i&&(i.active=!0),[...A(this,re),...A(this,we)].filter(s=>s!==e&&s!==i).forEach(s=>{Pt(this,bt,Ka).call(this,s)&&(s.active=!1)}),A(this,we).some(s=>s.active&&s!==i)?this._moreButtonElement.classList.add("active-inside"):this._moreButtonElement.classList.remove("active-inside")}})}connectedCallback(){super.connectedCallback(),Pt(this,bt,oh).call(this)}disconnectedCallback(){super.disconnectedCallback(),A(this,Qs).unobserve(this),Pt(this,bt,Ya).call(this)}render(){return l`
      <div id="main">
        <div id="grid" role="tablist">
          <slot @slotchange=${Pt(this,bt,nh)}></slot>
        </div>
        <uui-button
          popovertarget="popover-container"
          style="display: none"
          id="more-button"
          label="More"
          compact>
          <uui-symbol-more></uui-symbol-more>
        </uui-button>
      </div>
      <uui-popover-container
        id="popover-container"
        popover
        placement="bottom-end">
        <div id="hidden-tabs-container" role="tablist">
          ${Yi(A(this,we),t=>l`${t}`)}
        </div>
      </uui-popover-container>
    `}};Js=new WeakMap;re=new WeakMap;we=new WeakMap;ur=new WeakMap;cr=new WeakMap;Qs=new WeakMap;vo=new WeakMap;mo=new WeakMap;bt=new WeakSet;oh=async function(){y(this,"uui-button"),y(this,"uui-popover-container"),y(this,"uui-symbol-more"),await this.updateComplete,A(this,Qs).observe(this._mainElement)};sh=function(t){let e=Number.parseFloat(this.style.getPropertyValue("--uui-tab-group-gap"));(Number.isNaN(e)?0:e)!==A(this,Js)?Pt(this,bt,tn).call(this):Pt(this,bt,Za).call(this,t[0].contentBoxSize[0].inlineSize)};Ya=function(){A(this,re).forEach(t=>{t.removeEventListener("click",A(this,hr)),A(this,vo).forEach(e=>e.disconnect())}),A(this,vo).length=0,A(this,cr).length=0};nh=function(){Pt(this,bt,Ya).call(this),Pt(this,bt,ah).call(this),A(this,re).forEach(t=>{t.addEventListener("click",A(this,hr));let e=new ResizeObserver(Pt(this,bt,tn).bind(this));e.observe(t),A(this,vo).push(e)})};hr=new WeakMap;tn=async function(){if(A(this,mo))return;fo(this,mo,!0),requestAnimationFrame(()=>{fo(this,mo,!1)}),await this.updateComplete;let t=Number.parseFloat(this.style.getPropertyValue("--uui-tab-group-gap")),e=Number.isNaN(t)?0:t;fo(this,Js,e);let i=0;for(let r=0;r<A(this,re).length;r++)A(this,re)[r].style.display="",i+=A(this,re)[r].offsetWidth,A(this,cr)[r]=i,i+=e;let o=2;this._mainElement.style.width=i-e+o+"px",Pt(this,bt,Za).call(this,this._mainElement.offsetWidth)};ah=function(){fo(this,re,this._slottedNodes?this._slottedNodes:[]),Pt(this,bt,tn).call(this)};Za=function(t){let e=this._moreButtonElement.offsetWidth,i=t-(e||0);A(this,we).forEach(s=>{s.removeEventListener("click",A(this,hr))}),fo(this,we,[]),A(this,ur).clear();let o=!1,r=A(this,cr).length;for(let s=0;s<r;s++){let n=A(this,cr)[s],u=A(this,re)[s];if(n<=(s===r-1?t:i))u.style.display="";else{let p=u.cloneNode(!0);p.addEventListener("click",A(this,hr)),p.classList.add("hidden-tab"),p.style.display="",p.orientation=this.dropdownContentDirection,A(this,ur).set(p,u),A(this,ur).set(u,p),A(this,we).push(p),u.style.display="none",u.active&&(o=!0)}}A(this,we).length===0?(this._moreButtonElement.style.display="none",this._popoverContainerElement.hidePopover()):this._moreButtonElement.style.display="",o?this._moreButtonElement.classList.add("active-inside"):this._moreButtonElement.classList.remove("active-inside"),this.requestUpdate()};Ka=function(t){return typeof t=="object"&&"active"in t&&typeof t.active=="boolean"};Ke.styles=[c`
      :host {
        min-width: 0;
        display: flex;
        height: 100%;
      }

      #main {
        display: flex;
        justify-content: space-between;
        overflow: hidden;
      }

      #grid {
        width: 1fr;
        display: flex;
        height: 100%;
        min-height: 48px;
        overflow: hidden;
        text-wrap: nowrap;
        color: var(--uui-tab-text);
        gap: var(--uui-tab-group-gap, 0);
      }

      #popover-container {
        --uui-tab-text: var(--uui-tab-group-dropdown-tab-text, unset);
        --uui-tab-text-hover: var(
          --uui-tab-group-dropdown-tab-text-hover,
          unset
        );
        --uui-tab-text-active: var(
          --uui-tab-group-dropdown-tab-text-active,
          unset
        );
      }

      ::slotted(*:not(:last-of-type)) {
        border-right: 1px solid var(--uui-tab-divider, none);
      }

      .hidden-tab {
        width: 100%;
      }

      #hidden-tabs-container {
        width: fit-content;
        display: flex;
        flex-direction: column;
        background-color: var(
          --uui-tab-group-dropdown-background,
          var(--uui-color-surface,#fff)
        );
        border-radius: var(--uui-border-radius,3px);
        box-shadow: var(--uui-shadow-depth-3,0 10px 20px rgba(0,0,0,0.19) , 0 6px 6px rgba(0,0,0,0.23));
        overflow: hidden;
      }
      :host([dropdown-direction='horizontal']) #hidden-tabs-container {
        flex-direction: row;
      }

      #more-button {
        position: relative;

        --uui-button-contrast: var(--uui-tab-text);
        --uui-button-contrast-hover: var(--uui-tab-text-hover);
        --uui-button-background-color: transparent;
        --uui-button-background-color-hover: transparent;
      }
      #more-button::before {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        background-color: var(--uui-color-current,#f5c1bc);
        height: 0px;
        border-radius: 3px 3px 0 0;
        opacity: 0;
        transition:
          opacity ease-in 120ms,
          height ease-in 120ms;
      }
      #more-button.active-inside::before {
        opacity: 1;
        height: 4px;
        transition:
          opacity 120ms,
          height ease-out 120ms;
      }
    `];pr([E("#more-button")],Ke.prototype,"_moreButtonElement",2);pr([E("#popover-container")],Ke.prototype,"_popoverContainerElement",2);pr([E("#main")],Ke.prototype,"_mainElement",2);pr([dt({flatten:!0,selector:"uui-tab, [uui-tab], [role=tab]"})],Ke.prototype,"_slottedNodes",2);pr([a({type:String,reflect:!0,attribute:"dropdown-content-direction"})],Ke.prototype,"dropdownContentDirection",2);Ke=pr([h("uui-tab-group")],Ke);var h0=Object.defineProperty,d0=Object.getOwnPropertyDescriptor,Qa=(t,e,i,o)=>{for(var r=o>1?void 0:o?d0(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&h0(e,i,r),r},bo=class extends d{constructor(){super(...arguments),this.color="default",this.look="primary"}render(){return l`<slot></slot>`}};bo.styles=[c`
      :host {
        display: inline-block;
        font-size: var(--uui-tag-font-size, var(--uui-type-small-size,12px));
        font-weight: 700;
        line-height: 1;
        padding: var(
          --uui-tag-padding,
          var(--uui-size-space-1,3px) calc(var(--uui-size-space-1,3px) + 0.5em)
        );
        border-radius: 100px;
        user-select: none;
        border-radius: var(--uui-tag-border-radius, var(--uui-size-4,12px));
        border: 1px solid var(--uui-tag-border-color, transparent);
      }

      slot {
        display: block;
        align-content: center;
        margin: 2px;
      }

      :host {
        --color: var(--uui-color-default,#1b264f);
        --color-standalone: var(--uui-color-default-standalone,rgb(
    28,
    35,
    59
  ));
        --color-contrast: var(--uui-color-default-contrast,#fff);
      }
      :host([color='positive']) {
        --color: var(--uui-color-positive,#0b8152);
        --color-standalone: var(--uui-color-positive-standalone,rgb(
    10,
    115,
    73
  ));
        --color-contrast: var(--uui-color-positive-contrast,#fff);
      }
      :host([color='warning']) {
        --color: var(--uui-color-warning,#fbd142);
        --color-standalone: var(--uui-color-warning-standalone,#a17700);
        --color-contrast: var(--uui-color-warning-contrast,#000);
      }
      :host([color='danger']) {
        --color: var(--uui-color-danger,#d42054);
        --color-standalone: var(--uui-color-danger-standalone,rgb(
    191,
    33,
    78
  ));
        --color-contrast: var(--uui-color-danger-contrast,white);
      }
      :host([color='invalid']) {
        --color: var(--uui-color-invalid,#d42054);
        --color-standalone: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
        --color-contrast: var(--uui-color-invalid-contrast,white);
      }

      :host {
        background-color: var(--uui-color-surface,#fff);
        color: var(--color-standalone);
        border-color: transparent;
      }
      :host([look='primary']) {
        background-color: var(--color);
        color: var(--color-contrast);
        border-color: transparent;
      }
      :host([look='secondary']) {
        background-color: var(--uui-color-surface-alt,#f3f3f5);
        color: var(--color-standalone);
        border-color: transparent;
      }
      :host([look='outline']) {
        background-color: transparent;
        color: var(--color-standalone);
        border-color: var(--color-standalone);
      }
      :host([look='placeholder']) {
        border-style: dashed;
        background-color: transparent;
        color: var(--color-standalone);
        border-color: var(--uui-color-border-standalone,#c2c2c2);
      }
    `];Qa([a({reflect:!0})],bo.prototype,"color",2);Qa([a({reflect:!0})],bo.prototype,"look",2);bo=Qa([h("uui-tag")],bo);var fr=class extends k{constructor(e,i={}){super(e,{bubbles:!0,...i})}};fr.CHANGE="change";fr.INPUT="input";var p0=Object.defineProperty,f0=Object.getOwnPropertyDescriptor,ht=(t,e,i,o)=>{for(var r=o>1?void 0:o?f0(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&p0(e,i,r),r},X=class extends G(d,""){constructor(){super(),this.placeholder="",this.disabled=!1,this.readonly=!1,this.name="",this.error=!1,this.minlengthMessage=t=>`${t} characters left`,this.maxlengthMessage=(t,e)=>`Maximum ${t} characters, ${e} too many.`,this.autoHeight=!1,this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0")}),this.addEventListener("blur",()=>{this.style.setProperty("--uui-show-focus-outline","")}),this.addValidator("tooShort",()=>{let t=this.minlengthMessage;return typeof t=="function"?t(this.minlength?this.minlength-String(this.value).length:0):t},()=>!!this.minlength&&this.value.length<this.minlength),this.addValidator("tooLong",()=>{let t=this.maxlengthMessage;return typeof t=="function"?t(this.maxlength??0,String(this.value).length):t},()=>!!this.maxlength&&this.value.length>this.maxlength)}connectedCallback(){super.connectedCallback(),this.label||console.warn(this.tagName+" needs a `label`",this),this.autoHeight&&requestAnimationFrame(()=>{this.autoUpdateHeight()})}async focus(){await this.updateComplete,this._textarea.focus()}async blur(){await this.updateComplete,this._textarea.blur()}async click(){await this.updateComplete,this._textarea.click()}getFormElement(){return this._textarea}onInput(t){this.value=t.target.value,this.autoHeight&&this.autoUpdateHeight()}onChange(t){t.stopPropagation(),this.pristine=!1,this.dispatchEvent(new fr(fr.CHANGE))}autoUpdateHeight(){let t=this.shadowRoot.host,e=this._textarea,i=t.scrollTop,o=getComputedStyle(t).height;t.style.display="block",t.style.height=o,e.style.height="auto",e.scrollHeight+2>e.clientHeight?e.style.height=e.scrollHeight+2+"px":e.scrollHeight+2<e.clientHeight&&e.style.removeProperty("height"),t.style.removeProperty("display"),t.style.removeProperty("height"),t.scrollTop=i}render(){return l`
      <textarea
        id="textarea"
        rows=${x(this.rows)}
        cols=${x(this.cols)}
        .value=${this.value}
        .name=${this.name}
        wrap=${x(this.wrap)}
        placeholder=${this.placeholder}
        aria-label=${this.label}
        .disabled=${this.disabled}
        ?readonly=${this.readonly}
        @input=${this.onInput}
        @change=${this.onChange}>
      </textarea>
    `}};X.formAssociated=!0;X.styles=[c`
      :host {
        position: relative;
      }
      :host([error]) textarea,
      :host([error]) textarea[disabled] {
        border: 1px solid var(--uui-color-invalid,#d42054) !important;
      }
      :host(:not([pristine]):invalid) textarea,
      /* polyfill support */
      :host(:not([pristine])[internals-invalid]) textarea {
        border-color: var(--uui-color-invalid,#d42054);
      }
      :host([auto-height]) textarea {
        resize: none;
      }

      .label {
        display: inline-block;
        margin-bottom: var(--uui-size-1,3px);
        font-weight: bold;
      }

      textarea[readonly] {
        border-color: var(
          --uui-textarea-border-color-readonly,
          var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ))
        );
        background-color: var(
          --uui-textarea-background-color-readonly,
          var(--uui-color-disabled,#f3f3f5)
        );
      }
      textarea[disabled] {
        cursor: not-allowed;
        background-color: var(
          --uui-textarea-background-color-disabled,
          var(--uui-color-disabled,#f3f3f5)
        );
        border-color: var(
          --uui-textarea-border-color-disabled,
          var(--uui-color-disabled,#f3f3f5)
        );

        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      textarea {
        color: var(--uui-color-text,#060606);
        font-family: inherit;
        line-height: var(--uui-size-6,18px);
        box-sizing: border-box;
        min-width: 100%;
        max-width: 100%;
        font-size: inherit;
        padding: var(--uui-size-2,6px);
        border: 1px solid
          var(--uui-textarea-border-color, var(--uui-color-border,#d8d7d9)); /** Note: Specified border size is needed and hardcoded in autoUpdateHeight() */
        border-radius: var(--uui-border-radius,3px);
        outline: none;
        min-height: var(--uui-textarea-min-height);
        max-height: var(--uui-textarea-max-height);
        background-color: var(
          --uui-textarea-background-color,
          var(--uui-color-surface,#fff)
        );
      }
      :host(:hover)
        textarea:not([readonly]):not([disabled])
        :host(:focus-within)
        textarea,
      :host(:focus) textarea {
        border-color: var(
          --uui-textarea-border-color,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
      }
      textarea:focus {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }
    `];ht([a()],X.prototype,"placeholder",2);ht([a({type:Boolean,reflect:!0})],X.prototype,"disabled",2);ht([a({type:Boolean,reflect:!0})],X.prototype,"readonly",2);ht([a({type:String})],X.prototype,"name",2);ht([a({type:Boolean,reflect:!0})],X.prototype,"error",2);ht([a({type:Number})],X.prototype,"minlength",2);ht([a({attribute:"minlength-message"})],X.prototype,"minlengthMessage",2);ht([a({type:Number})],X.prototype,"maxlength",2);ht([a({attribute:"maxlength-message"})],X.prototype,"maxlengthMessage",2);ht([E("#textarea")],X.prototype,"_textarea",2);ht([a({type:Boolean,attribute:"auto-height",reflect:!0})],X.prototype,"autoHeight",2);ht([a({type:String})],X.prototype,"label",2);ht([a({type:Number})],X.prototype,"rows",2);ht([a({type:Number})],X.prototype,"cols",2);ht([a({type:String})],X.prototype,"wrap",2);X=ht([h("uui-textarea")],X);var ot=class extends k{};ot.OPENING="opening";ot.OPENED="opened";ot.CLOSING="closing";ot.CLOSED="closed";var m0=Object.defineProperty,v0=Object.getOwnPropertyDescriptor,mr=(t,e,i,o)=>{for(var r=o>1?void 0:o?v0(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&m0(e,i,r),r},Xe=class extends d{constructor(){super(),this.color="",this._autoClose=null,this._onOpenTimerComplete=()=>{this._open&&(this.open=!1)},this._timer=null,this._pauseTimer=!1,this.isOpen=!1,this._open=!1,this._animate=!1,this._requestAnimationUpdate=0,this.addEventListener("keyup",t=>{t.key==="Escape"&&(this.open=!1)})}get autoClose(){return this._autoClose}set autoClose(t){this._autoClose=t,t!==null?(this._timer===null?this._timer=new Ro(this._onOpenTimerComplete,t):this._timer.setDuration(t),this._pauseTimer===!1&&this.isOpen===!0&&this._animate===!1&&this._timer.start()):(this._timer?.destroy(),this._timer=null)}pauseAutoClose(){this._pauseTimer=!0,this._timer!==null&&this._timer.pause()}resumeAutoClose(){this._pauseTimer=!1,this._timer!==null&&this.isOpen===!0&&this._animate===!1&&this._timer.restart()}get open(){return this._open}set open(t){t===!0?this._makeOpen():this._makeClose()}connectedCallback(){super.connectedCallback(),y(this,"uui-button"),y(this,"uui-icon")}_getAnimationDuration(){return parseInt(getComputedStyle(this).getPropertyValue("--uui-toast-notification-animation-duration"),10)||480}_makeOpen(){this._open!==!0&&(this._open=!0,this.updateComplete.then(()=>{this._open===!0&&(cancelAnimationFrame(this._requestAnimationUpdate),this._requestAnimationUpdate=requestAnimationFrame(()=>{clearTimeout(this._animationTimeout),this.isOpen=!0,this.setAttribute("is-open",""),this.style.height=this._toastEl.getBoundingClientRect().height+"px",this._animate=!0,this.dispatchEvent(new ot(ot.OPENING)),this._animationTimeout=window.setTimeout(()=>{this.isOpen===!0&&(this.style.height="auto",this._animate=!1,this._pauseTimer===!1&&this._timer?.start(),this.dispatchEvent(new ot(ot.OPENED)))},this._getAnimationDuration())}))}))}_makeClose(){if(this._open===!1)return;let t=new ot(ot.CLOSING,{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented!==!0&&(this._open=!1,this._timer?.pause(),cancelAnimationFrame(this._requestAnimationUpdate),this.isOpen===!0&&(this._requestAnimationUpdate=requestAnimationFrame(()=>{clearTimeout(this._animationTimeout),this.isOpen=!1,this.removeAttribute("is-open"),this.style.height=this._toastEl.getBoundingClientRect().height+"px",this._animate=!0,requestAnimationFrame(()=>{this.style.height="0"}),this._animationTimeout=window.setTimeout(()=>{this.isOpen===!1&&(this._animate=!1,this.dispatchEvent(new ot(ot.CLOSED)),this.parentNode&&this.parentNode.removeChild(this))},this._getAnimationDuration())})))}render(){return l`
      <div id="toast" class=${this._animate?"animate":""}>
        <div>
          <div id="close">
            <uui-button
              .label=${"close"}
              .color=${this.color}
              .look=${this.color?"primary":"default"}
              @click=${()=>this.open=!1}>
              <uui-icon
                name="remove"
                .fallback=${Li.strings[0]}></uui-icon>
            </uui-button>
          </div>
          <slot></slot>
        </div>
      </div>
    `}};Xe.styles=[Ft,c`
      :host {
        --uui-toast-notification-margin: var(--uui-size-space-2,6px);

        position: relative;
        display: block;
        width: 100%;
        max-width: 400px;
        margin: 0 var(--uui-toast-notification-margin);
        box-sizing: border-box;

        height: 0;
        pointer-events: none;

        transition: height
          var(--uui-toast-notification-animation-duration, 480ms) ease-in-out;
      }
      :host([is-open]) {
        pointer-events: all;
        transition-timing-function: cubic-bezier(
          0.19,
          1,
          0.22,
          1
        ); /* easeOutExpo */
      }

      #toast {
        position: relative;
        display: block;
        padding: calc(var(--uui-toast-notification-margin) * 0.5) 0;
        width: 100%;
        max-width: 400px;
      }
      #toast.animate {
        position: absolute;
      }

      #toast > div {
        position: relative;
        display: block;

        box-sizing: border-box;
        box-shadow: var(--uui-shadow-depth-1,0 1px 3px rgba(0,0,0,0.12) , 0 1px 2px rgba(0,0,0,0.24));
        background-color: var(--uui-color-surface,#fff);
        padding: var(--uui-size-layout-1,24px);
        padding-right: var(--uui-size-layout-1,24px);
        padding-left: var(--uui-size-layout-3,42px);
        border-radius: calc(var(--uui-border-radius,3px) * 2);

        opacity: 0;
        transition: opacity
          var(--uui-toast-notification-animation-duration, 480ms);
      }
      :host([is-open]) #toast > div {
        opacity: 1;
      }

      #close {
        float: right;
        margin-top: -6px;
        margin-left: var(--uui-size-space-1,3px);
        margin-bottom: -4px;
      }

      #close > uui-button {
        --uui-button-border-radius: 50px 50px 50px 50px;
        --uui-button-padding-left-factor: 1.5;
        --uui-button-padding-right-factor: 1.5;
      }

      :host #toast > div {
        background-color: var(--uui-color-surface,#fff);
        color: var(--uui-color-text,#060606);
        border-color: var(--uui-color-surface,#fff);
      }
      :host([color='default']) #toast > div {
        background-color: var(--uui-color-default,#1b264f);
        color: var(--uui-color-default-contrast,#fff);
        border-color: var(--uui-color-default-standalone,rgb(
    28,
    35,
    59
  ));
      }
      :host([color='positive']) #toast > div {
        background-color: var(--uui-color-positive,#0b8152);
        color: var(--uui-color-positive-contrast,#fff);
        border-color: var(--uui-color-positive-standalone,rgb(
    10,
    115,
    73
  ));
      }
      :host([color='warning']) #toast > div {
        background-color: var(--uui-color-warning,#fbd142);
        color: var(--uui-color-warning-contrast,#000);
        border-color: var(--uui-color-warning-standalone,#a17700);
      }
      :host([color='danger']) #toast > div {
        background-color: var(--uui-color-danger,#d42054);
        color: var(--uui-color-danger-contrast,white);
        border-color: var(--uui-color-danger-standalone,rgb(
    191,
    33,
    78
  ));
      }
      :host([color='invalid']) #toast > div {
        background-color: var(--uui-color-invalid,#d42054);
        color: var(--uui-color-invalid-contrast,white);
        border-color: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
    `];mr([a({reflect:!0})],Xe.prototype,"color",2);mr([a({type:Number})],Xe.prototype,"autoClose",1);mr([E("#toast")],Xe.prototype,"_toastEl",2);mr([v()],Xe.prototype,"_animate",2);mr([a({type:Boolean,reflect:!0})],Xe.prototype,"open",1);Xe=mr([h("uui-toast-notification")],Xe);var b0=Object.defineProperty,g0=Object.getOwnPropertyDescriptor,lh=(t,e,i,o)=>{for(var r=o>1?void 0:o?g0(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&b0(e,i,r),r},en=class extends d{constructor(){super(...arguments),this._autoClose=null,this._autoClosePause=!1,this.pauseAutoClose=()=>{this._autoClosePause=!0,this._toasts?.forEach(t=>t.pauseAutoClose())},this.resumeAutoClose=()=>{this.matches(":focus-within:not(:focus)")===!1&&(this._autoClosePause=!1,this._toasts?.forEach(t=>t.resumeAutoClose()))},this.onToastClosed=t=>{this.removeToast(t.target)},this._toasts=[],this.onSlotChanged=t=>{let e=[...this._toasts];this._toasts=t.target.assignedElements({flatten:!0}).filter(r=>r.nodeName==="UUI-TOAST-NOTIFICATION"),e.filter(r=>this._toasts.indexOf(r)===-1).forEach(r=>{r.removeEventListener(ot.CLOSED,this.onToastClosed),r.removeEventListener("mouseenter",this.pauseAutoClose),r.removeEventListener("mouseleave",this.resumeAutoClose),r.removeEventListener("focus",this.pauseAutoClose),r.removeEventListener("blur",this.resumeAutoClose)}),this._toasts.filter(r=>e.indexOf(r)===-1).forEach(r=>{r.addEventListener(ot.CLOSED,this.onToastClosed),r.addEventListener("mouseenter",this.pauseAutoClose),r.addEventListener("mouseleave",this.resumeAutoClose),r.addEventListener("focus",this.pauseAutoClose),r.addEventListener("blur",this.resumeAutoClose),this._autoClose&&(r.autoClose=this._autoClose),this._autoClosePause===!0&&r.pauseAutoClose(),r.open=!0})}}get autoClose(){return this._autoClose}set autoClose(t){this._autoClose=t,this._toasts?.forEach(e=>e.autoClose=t)}removeToast(t){if(!t)t=this._toasts[this._toasts.length-1];else if(this._toasts.indexOf(t)===-1){console.warn("Toast-notification",t,"could not be removed as it is not a child of this toast-notification-container",this);return}this.removeChild(t)}closeToast(t){let e=t;e||(e=this._toasts[this._toasts.length-1]),e.open=!1}render(){return l` <slot @slotchange=${this.onSlotChanged}></slot> `}};en.styles=[c`
      :host {
        position: absolute;
        overflow: hidden;
        max-width: 100%;
        height: 100%;

        pointer-events: none;
        box-sizing: border-box;
      }

      slot {
        display: flex;
        flex-direction: column;
        align-items: end;

        height: 100%;
        box-sizing: border-box;

        padding-top: var(--uui-size-space-1,3px);
        padding-bottom: var(--uui-size-space-1,3px);
      }
      :host([bottom-up]) slot {
        justify-content: end;
      }
      :host([left-align]) slot {
        align-items: start;
      }
    `];lh([a({type:Number,reflect:!0,attribute:"auto-close"})],en.prototype,"_autoClose",2);en=lh([h("uui-toast-notification-container")],en);var _0=Object.defineProperty,y0=Object.getOwnPropertyDescriptor,Ja=(t,e,i,o)=>{for(var r=o>1?void 0:o?y0(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&_0(e,i,r),r},go=class extends d{constructor(){super(...arguments),this.headline="",this._headlineSlotHasContent=!1,this._headlineSlotChanged=t=>{this._headlineSlotHasContent=t.target.assignedNodes({flatten:!0}).length>0}}render(){return l`
      <div id="message" class="uui-text">
        <h5
          style=${this._headlineSlotHasContent||this.headline&&this.headline!==""?"":"display: none"}>
          ${this.headline}
          <slot name="headline" @slotchange=${this._headlineSlotChanged}></slot>
        </h5>
        <slot></slot>
        <slot id="actions" name="actions"></slot>
      </div>
    `}};go.styles=[Ft,c`
      #message {
        margin-bottom: calc(var(--uui-size-space-1,3px) * -1);
      }
      #message::after {
        content: '';
        display: block;
        clear: both;
      }
      #actions {
        /*
        display: flex;
        width: 100%;
        justify-content: flex-end;
        */
        display: block;
        float: right;

        margin-top: var(--uui-size-space-4,12px);
        margin-bottom: calc(var(--uui-size-space-2,6px) * -1);
      }
    `];Ja([a({type:String})],go.prototype,"headline",2);Ja([v()],go.prototype,"_headlineSlotHasContent",2);go=Ja([h("uui-toast-notification-layout")],go);var x0=Object.getOwnPropertyDescriptor,w0=(t,e,i,o)=>{for(var r=o>1?void 0:o?x0(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(r)||r);return r},rn=class extends pt{constructor(){super("switch")}renderCheckbox(){return l`
      <div id="toggle">
        <div id="icon-checked">${Oe}</div>
        <div id="icon-unchecked">${Li}</div>
      </div>
    `}};rn.formAssociated=!0;rn.styles=[...pt.styles,Pe,c`
      :host {
        --uui-toggle-size: 18px;
        --uui-toggle-switch-width: calc(2 * var(--uui-toggle-size));
      }

      #toggle {
        position: relative;
        grid-area: 'input';
        display: flex;
        align-items: center;

        flex-shrink: 0;

        width: var(--uui-toggle-switch-width);
        height: var(--uui-toggle-size);
        border-radius: 100px;

        background-color: var(
          --uui-toggle-background-color,
          var(--uui-color-border,#d8d7d9)
        );
        border: 1px solid
          var(--uui-toggle-border-color, var(--uui-color-border-standalone,#c2c2c2));
        font-size: calc(var(--uui-toggle-size) * 0.6);
      }

      label:hover input:not([disabled]) ~ #toggle {
        border-color: var(
          --uui-toggle-border-color-hover,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
        background-color: var(
          --uui-toggle-background-color-hover,
          var(--uui-color-border,#d8d7d9)
        );
      }

      label:focus #toggle {
        border-color: var(
          --uui-toggle-border-color-focus,
          var(--uui-color-focus,#3879ff)
        );
        background-color: var(
          --uui-toggle-background-color-focus,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
      }

      input:checked ~ #toggle {
        background-color: var(--uui-color-selected,#3544b1);
      }

      label:hover input:checked:not([disabled]) ~ #toggle {
        background-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      label:focus input:checked ~ #toggle {
        background-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      #icon-checked,
      #icon-unchecked {
        position: absolute;
        vertical-align: middle;
        width: 1em;
        height: 1em;
        line-height: 0;
        transition: color 120ms;
      }

      #icon-checked {
        margin-left: -0.5em;
        left: calc(var(--uui-toggle-size) * 0.5);
        color: var(--uui-color-interactive,#1b264f);
      }

      #icon-unchecked {
        margin-right: -0.5em;
        right: calc(var(--uui-toggle-size) * 0.5);
        color: var(--uui-color-interactive,#1b264f);
      }

      input:checked ~ #toggle #icon-checked {
        color: var(--uui-color-selected-contrast,#fff);
      }

      #toggle::after {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: calc(var(--uui-toggle-size) - 4px);
        height: calc(var(--uui-toggle-size) - 4px);
        border-radius: 100px;
        background-color: var(--uui-color-selected-contrast,#fff);
        transition:
          width 120ms ease,
          left 120ms ease,
          transform 120ms ease,
          background-color 120ms;
      }

      input:checked ~ #toggle::after {
        left: calc(100% - 2px);
        transform: translateX(-100%);
      }

      input:focus ~ #toggle {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }

      :host(:not([disabled], [readonly])) label:active #toggle::after {
        /** Stretch when mouse down */
        width: calc(1.06 * var(--uui-toggle-size));
      }

      :host([disabled]) #toggle {
        background-color: var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ));
      }
      :host([disabled]) input:checked ~ #toggle {
        background-color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) #toggle::after {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
      :host([disabled]) #toggle #icon-unchecked {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) label:active #toggle {
        animation: ${Se};
      }
      :host([disabled]) input:checked #toggle #icon-checked {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      :host(:not([pristine]):invalid) #toggle,
      :host(:not([pristine]):invalid) label:hover #toggle,
      /* polyfill support */
      :host(:not([pristine])[internals-invalid]) #toggle,
      :host(:not([pristine])[internals-invalid]) label:hover #toggle {
        border: 1px solid var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
    `];rn=w0([h("uui-toggle")],rn);var k0=Object.getOwnPropertyDescriptor,E0=(t,e,i,o)=>{for(var r=o>1?void 0:o?k0(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(r)||r);return r},tl=class extends d{render(){return l`<slot></slot>`}};tl.styles=[c`
      :host(:not(:focus-within)) {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        clip: rect(0 0 0 0) !important;
        clip-path: inset(50%) !important;
        border: none !important;
        overflow: hidden !important;
        white-space: nowrap !important;
        padding: 0 !important;
      }
    `];tl=E0([h("uui-visually-hidden")],tl);var vr=class extends ct{constructor(){super();this.items=[{entityType:"test",name:"Janik Sunke",unique:"test",href:"test"}]}render(){return l`
      <uui-modal-container>
        <uui-modal-dialog>
          <uui-dialog class="umb-impersonation-modal-container">
            <div style="display: contents;">
              <div>
                <uui-input style="width: 100%; height: 48px; border: none"
                           type="search" pristine="" label="Label"
                           placeholder="Type to search...">
                  <uui-icon-registry-essential class="umb-impersonation-search-icon" slot="prepend">
                    <uui-icon name="search"/>
                  </uui-icon-registry-essential>
                </uui-input>
              </div>
              <uui-scroll-container style="height: calc(100% - 48px);">
                <umb-act-member-item-actions .item=${this.items[0]}>
                  <umb-act-search-result-item
                    .item="${this.items[0]}" />
                </umb-act-member-item-actions>
              </uui-scroll-container>
            </div>
          </uui-dialog>
        </uui-modal-dialog>
      </uui-modal-container>
    `}};vr.styles=[c`
      .umb-impersonation-modal-container {
        width: min(610px, 100vw);
        height: max(600px, 80dvh);
        max-height: 100dvh;
      }

      .umb-impersonation-search-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1 / 1;
        height: 100%;
      }
    `],gt([v()],vr.prototype,"items",2),vr=gt([Gt("umb-act-modal")],vr);var on=class extends d{render(){return l`
      <uui-action-bar class="umb-impersonation-bar">
        <uui-button label="impersonate" pristine="" look="primary">
          <svg width="24px" viewBox="0 0 512 512">
            <path fill="currentColor"
                  d="M182.8 19.5C166.4 25.7 154.3 44 141.9 81c-4 11.9-10.6 35.8-13.3 48.2l-.6 2.6-14.7.4c-12.6.2-15.3.6-18.2 2.3-10 5.9-10.6 18.9-1.2 25.2 3.2 2.2 4.4 2.3 20.7 2.3H132v23.7c0 13.1.3 24.7.5 25.8.5 1.7-8.1 7-63.7 39.6-57.8 33.8-64.5 38-66.5 41.5-2.8 4.8-2.9 9.3-.3 14.4 3.5 6.9 5.8 7.5 38.5 10.1 16 1.2 29.2 2.4 29.4 2.6.2.1-3.4 4.2-8 9C27.7 364.2 6 411.1 1 459.9c-1.5 15-1.3 22 .8 26.1 2.5 5 7.5 8 13.2 8 9.2 0 15-6.7 15-17.3 0-3.2.5-10.1 1.1-15.5 4.5-41.7 22.8-80.5 52.8-112.2 9.3-9.9 8.6-11.5 6.7 14.9-1.4 19-1.1 22.7 2.2 26.8 1.5 1.9 149.4 98.3 156.4 101.9 3.5 1.8 10.1 1.8 13.6 0 7-3.6 154.9-100 156.4-101.9 3.3-4.1 3.6-7.8 2.2-26.8-1.9-26.4-2.6-24.8 6.8-14.9 25.3 26.7 42.3 58.4 49.6 93 2.4 10.8 4.2 26.2 4.2 34.7 0 3.5.7 7.2 1.8 9.3 5.3 10.7 21.1 10.7 26.4 0 2.1-4.1 2.3-11.1.8-26.1-5-48.8-26.1-94.6-60.5-130.7-4.7-4.9-8.5-9.2-8.5-9.4 0-.3 4.4-.8 9.8-1.2 5.3-.3 18.5-1.4 29.2-2.2 22.4-1.9 25.7-3 29-9.4 2.6-5.1 2.5-9.5-.3-14.4-2-3.5-8.1-7.4-60.7-38.3-32.2-18.9-61.1-35.8-64.3-37.6-4.7-2.6-5.7-3.6-5.3-5.2.3-1.1.6-12.7.6-25.8V162h17c13.1 0 17.8-.3 20-1.5 8.4-4.3 10.4-15.3 4.3-22.6-3.9-4.6-6.4-5.2-22.7-5.8l-14.9-.6-4.4-16.5c-6.1-23.2-10.5-36.9-16.9-52.8-9.5-23.7-17.4-34.6-29.3-40.5-5.8-2.8-7.5-3.2-14.6-3.2-9.6.1-15 2.3-31.4 13-14.4 9.3-20 11.7-28.7 12.3-11.1.7-17-1.7-35.4-14.3-12.9-8.8-17.9-10.8-28-11.2-5.6-.2-9.8.2-12.2 1.2zM208 55.6C228.1 69.2 240.8 74 256 74c15.7 0 28.1-4.6 48.4-17.9 16.3-10.6 17.4-10.3 25.7 7.4 4.2 9 16 43.5 20.3 59.2l2.5 9.3h-97c-68.3 0-96.9-.3-96.9-1.1 0-2.5 6.4-30 9-38.9 5.3-17.7 12-31.2 20-40.3 4.7-5.4 6.7-5 20 3.9zM349.8 184c.4 31-1.5 42.5-10 59.5-17.2 34.9-54.5 55.4-93.4 51.4-42.8-4.4-77.4-37.8-83.3-80.4-1.2-8.3-1.5-50.7-.4-51.8.3-.4 42.5-.6 93.7-.5l93.1.3.3 21.5zM176.9 343.4c23.7 51.6 43 94 42.8 94.2-.2.3-98.2-62.7-99.4-63.9-.2-.3.6-13.4 1.7-29.2 2.8-40.3 2.8-41.6-1.2-46.1-1.7-2-4.3-4-5.7-4.5-1.3-.6-13.2-1.9-26.5-3-13.2-1.1-24.1-2.1-24.2-2.2-.5-.5 68.2-40.3 68.7-39.8.3.3 20 42.8 43.8 94.5zm262.6-59.7c5 2.9 8.6 5.3 8 5.3-6.7.1-48.8 4.2-50.6 4.9-1.4.5-4 2.5-5.7 4.5-4 4.5-4 5.8-1.2 46.1 1.1 15.8 1.9 29 1.6 29.2-1.3 1.3-99.1 64.2-99.3 63.9-.2-.2 18.4-41 41.3-90.7s42.5-92.3 43.5-94.6l1.9-4.2 25.8 15.1c14.1 8.4 29.8 17.5 34.7 20.5zm-224.7 34.7c30.1 10.8 67.2 8.7 95.4-5.5l7.7-3.9-3.3 7.3C285.1 380.8 256.6 442 256 442c-.6 0-31-65.2-58.6-125.7l-3.3-7.3 6.7 3.4c3.7 1.8 10 4.5 14 6z"/>
          </svg>
        </uui-button>
      </uui-action-bar>

      <style>et
      .umb-impersonation-bar {
        position: absolute;
        bottom: 1.00rem;
        left: 1.00rem;
      }
      </style>
    `}};on=gt([Gt("umb-act-not-toggle")],on);var br=class extends d{constructor(){super(...arguments);this._modals=[]}handleClick(){let i=Qu();this._modals.push(l`
      <umb-act-modal ref=${i}/>
    `),this.requestUpdate("_modals")}render(){return l`
      <uui-action-bar class="umb-act-bar">
        <uui-button @click=${this.handleClick} label="impersonate" pristine="" look="primary">
          <svg width="24px" viewBox="0 0 512 512">
            <path fill="currentColor"
                  d="M182.8 19.5C166.4 25.7 154.3 44 141.9 81c-4 11.9-10.6 35.8-13.3 48.2l-.6 2.6-14.7.4c-12.6.2-15.3.6-18.2 2.3-10 5.9-10.6 18.9-1.2 25.2 3.2 2.2 4.4 2.3 20.7 2.3H132v23.7c0 13.1.3 24.7.5 25.8.5 1.7-8.1 7-63.7 39.6-57.8 33.8-64.5 38-66.5 41.5-2.8 4.8-2.9 9.3-.3 14.4 3.5 6.9 5.8 7.5 38.5 10.1 16 1.2 29.2 2.4 29.4 2.6.2.1-3.4 4.2-8 9C27.7 364.2 6 411.1 1 459.9c-1.5 15-1.3 22 .8 26.1 2.5 5 7.5 8 13.2 8 9.2 0 15-6.7 15-17.3 0-3.2.5-10.1 1.1-15.5 4.5-41.7 22.8-80.5 52.8-112.2 9.3-9.9 8.6-11.5 6.7 14.9-1.4 19-1.1 22.7 2.2 26.8 1.5 1.9 149.4 98.3 156.4 101.9 3.5 1.8 10.1 1.8 13.6 0 7-3.6 154.9-100 156.4-101.9 3.3-4.1 3.6-7.8 2.2-26.8-1.9-26.4-2.6-24.8 6.8-14.9 25.3 26.7 42.3 58.4 49.6 93 2.4 10.8 4.2 26.2 4.2 34.7 0 3.5.7 7.2 1.8 9.3 5.3 10.7 21.1 10.7 26.4 0 2.1-4.1 2.3-11.1.8-26.1-5-48.8-26.1-94.6-60.5-130.7-4.7-4.9-8.5-9.2-8.5-9.4 0-.3 4.4-.8 9.8-1.2 5.3-.3 18.5-1.4 29.2-2.2 22.4-1.9 25.7-3 29-9.4 2.6-5.1 2.5-9.5-.3-14.4-2-3.5-8.1-7.4-60.7-38.3-32.2-18.9-61.1-35.8-64.3-37.6-4.7-2.6-5.7-3.6-5.3-5.2.3-1.1.6-12.7.6-25.8V162h17c13.1 0 17.8-.3 20-1.5 8.4-4.3 10.4-15.3 4.3-22.6-3.9-4.6-6.4-5.2-22.7-5.8l-14.9-.6-4.4-16.5c-6.1-23.2-10.5-36.9-16.9-52.8-9.5-23.7-17.4-34.6-29.3-40.5-5.8-2.8-7.5-3.2-14.6-3.2-9.6.1-15 2.3-31.4 13-14.4 9.3-20 11.7-28.7 12.3-11.1.7-17-1.7-35.4-14.3-12.9-8.8-17.9-10.8-28-11.2-5.6-.2-9.8.2-12.2 1.2zM208 55.6C228.1 69.2 240.8 74 256 74c15.7 0 28.1-4.6 48.4-17.9 16.3-10.6 17.4-10.3 25.7 7.4 4.2 9 16 43.5 20.3 59.2l2.5 9.3h-97c-68.3 0-96.9-.3-96.9-1.1 0-2.5 6.4-30 9-38.9 5.3-17.7 12-31.2 20-40.3 4.7-5.4 6.7-5 20 3.9zM349.8 184c.4 31-1.5 42.5-10 59.5-17.2 34.9-54.5 55.4-93.4 51.4-42.8-4.4-77.4-37.8-83.3-80.4-1.2-8.3-1.5-50.7-.4-51.8.3-.4 42.5-.6 93.7-.5l93.1.3.3 21.5zM176.9 343.4c23.7 51.6 43 94 42.8 94.2-.2.3-98.2-62.7-99.4-63.9-.2-.3.6-13.4 1.7-29.2 2.8-40.3 2.8-41.6-1.2-46.1-1.7-2-4.3-4-5.7-4.5-1.3-.6-13.2-1.9-26.5-3-13.2-1.1-24.1-2.1-24.2-2.2-.5-.5 68.2-40.3 68.7-39.8.3.3 20 42.8 43.8 94.5zm262.6-59.7c5 2.9 8.6 5.3 8 5.3-6.7.1-48.8 4.2-50.6 4.9-1.4.5-4 2.5-5.7 4.5-4 4.5-4 5.8-1.2 46.1 1.1 15.8 1.9 29 1.6 29.2-1.3 1.3-99.1 64.2-99.3 63.9-.2-.2 18.4-41 41.3-90.7s42.5-92.3 43.5-94.6l1.9-4.2 25.8 15.1c14.1 8.4 29.8 17.5 34.7 20.5zm-224.7 34.7c30.1 10.8 67.2 8.7 95.4-5.5l7.7-3.9-3.3 7.3C285.1 380.8 256.6 442 256 442c-.6 0-31-65.2-58.6-125.7l-3.3-7.3 6.7 3.4c3.7 1.8 10 4.5 14 6z"/>
            <path fill="currentColor" transform="scale(0.6) translate(170, 100)"
                  d="M89.5 174.6c-1.6.2-7.7.9-13.5 1.5-20.4 2.1-55 9.8-60.7 13.5-2.2 1.4-2.3 1.9-2.3 18.4 0 18.9-.1 18.5 7.3 21.4 2.5.9 4.8 2.5 5.2 3.4.3.9 1 9.1 1.5 18.2 2 35.3 8.2 55.3 21.4 68.4 7.3 7.3 13.3 10.6 24.6 13.9 11.5 3.3 25.4 4.7 48 4.7 31.7 0 50.3-3.5 69.9-13.1 13.6-6.7 24.8-17.3 30.5-28.9 3.7-7.6 11.4-34 14.1-48.5 1.2-6.6 2-8.5 4.5-10.8 3-2.6 3.3-2.7 15.1-2.7 16.6 0 19.6 1.8 21.3 13 1.6 10.1 10.8 41.9 14.2 48.6 11 22.2 35.6 36.4 70.8 41 13.8 1.8 55.2 1.5 66.6-.6 22.9-4 36.9-13.7 45.5-31.5 6.9-14.2 9.8-28.3 11.5-55 .4-8.3 1.2-15.8 1.5-16.7.4-.9 2.7-2.5 5.1-3.4 7-2.7 7.4-3.7 7.4-20.9 0-11.9-.3-15.5-1.5-17.2-1.9-2.7-10.5-5.4-29.5-9.4-60-12.5-119.2-9.5-175 8.7l-11.5 3.8-23.5.3c-26 .4-23.4.8-50.7-7.5-14.7-4.6-32.1-8.3-49.3-10.8-10.8-1.5-60.8-2.8-68.5-1.8z"/>
          </svg>
        </uui-button>
      </uui-action-bar>
      ${this._modals}
    `}};br.styles=c`
    .umb-act-bar {
      position: absolute;
      bottom: 1.00rem;
      left: 1.00rem;
    }
  `,gt([v()],br.prototype,"_modals",2),br=gt([Gt("umb-act-toggle")],br);var gr=class extends d{render(){return this.item?l`
      <uui-icon-registry-essential>
        ${this.item.icon?l`
          <uui-icon name=${this.item.icon}></uui-icon>`:l`
          <uui-icon name="see"></uui-icon>`}
      </uui-icon-registry-essential>
      <span>${this.item.name}</span>
      <div class="extra"></div>
    `:w}};gr.styles=[c`
      :host {
        border-radius: var(--uui-border-radius);
        outline-offset: -3px;
        padding: var(--uui-size-space-3) var(--uui-size-space-5);

        display: flex;
        gap: var(--uui-size-space-3);
        align-items: center;

        width: 100%;

        > span {
          flex: 1;
        }
      }
    `],gt([a({type:Object})],gr.prototype,"item",2),gr=gt([Gt("umb-act-search-result-item")],gr);var _r=class extends d{render(){return this.item?l`
      <a
        class="search-item"
        href=${this.item.href}>
        <slot></slot>
      </a>
    `:w}};_r.styles=[c`
      .search-item {
        color: var(--uui-color-text);
        text-decoration: none;
        outline-offset: -3px;
        display: flex;
      }

      .search-item:hover {
        background: var(--uui-color-surface-emphasis);
        color: var(--uui-color-interactive-emphasis);
      }

      .search-item:focus {
        outline: 2px solid var(--uui-color-interactive-emphasis);
        border-radius: 6px;
        outline-offset: -4px;
      }

      .search-item.active:not(:focus-within) {
        outline: 2px solid var(--uui-color-border);
        border-radius: 6px;
        outline-offset: -4px;
      }
    `],gt([a({type:Object})],_r.prototype,"item",2),_r=gt([Gt("umb-act-member-item-actions")],_r);C0("https://cdn.jsdelivr.net/npm/@umbraco-ui/uui-css@latest/dist/uui-css.css");function C0(t){let e=document.head,i=document.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=t,e.appendChild(i)}})();
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

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=impersonation.main.js.map
