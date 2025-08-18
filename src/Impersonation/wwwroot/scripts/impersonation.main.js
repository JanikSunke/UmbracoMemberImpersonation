(()=>{var al=Object.defineProperty;var Eh=Object.getOwnPropertyDescriptor;var Ch=(e,t,r)=>t in e?al(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ge=(e,t,r,o)=>{for(var i=o>1?void 0:o?Eh(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&al(t,r,i),i};var ll=(e,t,r)=>Ch(e,typeof t!="symbol"?t+"":t,r);var ko=globalThis,Eo=ko.ShadowRoot&&(ko.ShadyCSS===void 0||ko.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,un=Symbol(),ul=new WeakMap,xi=class{constructor(t,r,o){if(this._$cssResult$=!0,o!==un)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o,r=this.t;if(Eo&&t===void 0){let o=r!==void 0&&r.length===1;o&&(t=ul.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&ul.set(r,t))}return t}toString(){return this.cssText}},Se=e=>new xi(typeof e=="string"?e:e+"",void 0,un),c=(e,...t)=>{let r=e.length===1?e[0]:t.reduce((o,i,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new xi(r,e,un)},cl=(e,t)=>{if(Eo)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of t){let o=document.createElement("style"),i=ko.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,e.appendChild(o)}},cn=Eo?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(let o of t.cssRules)r+=o.cssText;return Se(r)})(e):e;var{is:$h,defineProperty:Ph,getOwnPropertyDescriptor:Sh,getOwnPropertyNames:Oh,getOwnPropertySymbols:Ah,getPrototypeOf:Ih}=Object,Et=globalThis,hl=Et.trustedTypes,Mh=hl?hl.emptyScript:"",zh=Et.reactiveElementPolyfillSupport,wi=(e,t)=>e,ki={toAttribute(e,t){switch(t){case Boolean:e=e?Mh:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Co=(e,t)=>!$h(e,t),dl={attribute:!0,type:String,converter:ki,reflect:!1,useDefault:!1,hasChanged:Co};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Et.litPropertyMetadata??(Et.litPropertyMetadata=new WeakMap);var ot=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=dl){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){let o=Symbol(),i=this.getPropertyDescriptor(t,o,r);i!==void 0&&Ph(this.prototype,t,i)}}static getPropertyDescriptor(t,r,o){let{get:i,set:s}=Sh(this.prototype,t)??{get(){return this[r]},set(n){this[r]=n}};return{get:i,set(n){let u=i?.call(this);s?.call(this,n),this.requestUpdate(t,u,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??dl}static _$Ei(){if(this.hasOwnProperty(wi("elementProperties")))return;let t=Ih(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(wi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(wi("properties"))){let r=this.properties,o=[...Oh(r),...Ah(r)];for(let i of o)this.createProperty(i,r[i])}let t=this[Symbol.metadata];if(t!==null){let r=litPropertyMetadata.get(t);if(r!==void 0)for(let[o,i]of r)this.elementProperties.set(o,i)}this._$Eh=new Map;for(let[r,o]of this.elementProperties){let i=this._$Eu(r,o);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let r=[];if(Array.isArray(t)){let o=new Set(t.flat(1/0).reverse());for(let i of o)r.unshift(cn(i))}else t!==void 0&&r.push(cn(t));return r}static _$Eu(t,r){let o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,r=this.constructor.elementProperties;for(let o of r.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return cl(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$ET(t,r){let o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(i!==void 0&&o.reflect===!0){let s=(o.converter?.toAttribute!==void 0?o.converter:ki).toAttribute(r,o.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,r){let o=this.constructor,i=o._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let s=o.getPropertyOptions(i),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ki;this._$Em=i;let u=n.fromAttribute(r,s.type);this[i]=u??this._$Ej?.get(i)??u,this._$Em=null}}requestUpdate(t,r,o){if(t!==void 0){let i=this.constructor,s=this[t];if(o??(o=i.getPropertyOptions(t)),!((o.hasChanged??Co)(s,r)||o.useDefault&&o.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,o))))return;this.C(t,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:o,reflect:i,wrapped:s},n){o&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??r??this[t]),s!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(r=void 0),this._$AL.set(t,r)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[i,s]of o){let{wrapped:n}=s,u=this[i];n!==!0||this._$AL.has(i)||u===void 0||this.C(i,void 0,s,u)}}let t=!1,r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(t){}firstUpdated(t){}};ot.elementStyles=[],ot.shadowRootOptions={mode:"open"},ot[wi("elementProperties")]=new Map,ot[wi("finalized")]=new Map,zh?.({ReactiveElement:ot}),(Et.reactiveElementVersions??(Et.reactiveElementVersions=[])).push("2.1.1");var Ci=globalThis,$o=Ci.trustedTypes,pl=$o?$o.createPolicy("lit-html",{createHTML:e=>e}):void 0,dn="$lit$",st=`lit$${Math.random().toFixed(9).slice(2)}$`,pn="?"+st,Lh=`<${pn}>`,Qt=document,$i=()=>Qt.createComment(""),Pi=e=>e===null||typeof e!="object"&&typeof e!="function",fn=Array.isArray,yl=e=>fn(e)||typeof e?.[Symbol.iterator]=="function",hn=`[ 	
\f\r]`,Ei=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fl=/-->/g,ml=/>/g,Zt=RegExp(`>|${hn}(?:([^\\s"'>=/]+)(${hn}*=${hn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vl=/'/g,bl=/"/g,_l=/^(?:script|style|textarea|title)$/i,mn=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),l=mn(1),y=mn(2),xl=mn(3),F=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),gl=new WeakMap,Jt=Qt.createTreeWalker(Qt,129);function wl(e,t){if(!fn(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return pl!==void 0?pl.createHTML(t):t}var kl=(e,t)=>{let r=e.length-1,o=[],i,s=t===2?"<svg>":t===3?"<math>":"",n=Ei;for(let u=0;u<r;u++){let d=e[u],m,g,f=-1,E=0;for(;E<d.length&&(n.lastIndex=E,g=n.exec(d),g!==null);)E=n.lastIndex,n===Ei?g[1]==="!--"?n=fl:g[1]!==void 0?n=ml:g[2]!==void 0?(_l.test(g[2])&&(i=RegExp("</"+g[2],"g")),n=Zt):g[3]!==void 0&&(n=Zt):n===Zt?g[0]===">"?(n=i??Ei,f=-1):g[1]===void 0?f=-2:(f=n.lastIndex-g[2].length,m=g[1],n=g[3]===void 0?Zt:g[3]==='"'?bl:vl):n===bl||n===vl?n=Zt:n===fl||n===ml?n=Ei:(n=Zt,i=void 0);let b=n===Zt&&e[u+1].startsWith("/>")?" ":"";s+=n===Ei?d+Lh:f>=0?(o.push(m),d.slice(0,f)+dn+d.slice(f)+st+b):d+st+(f===-2?u:b)}return[wl(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]},Si=class e{constructor({strings:t,_$litType$:r},o){let i;this.parts=[];let s=0,n=0,u=t.length-1,d=this.parts,[m,g]=kl(t,r);if(this.el=e.createElement(m,o),Jt.currentNode=this.el.content,r===2||r===3){let f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=Jt.nextNode())!==null&&d.length<u;){if(i.nodeType===1){if(i.hasAttributes())for(let f of i.getAttributeNames())if(f.endsWith(dn)){let E=g[n++],b=i.getAttribute(f).split(st),C=/([.?@])?(.*)/.exec(E);d.push({type:1,index:s,name:C[2],strings:b,ctor:C[1]==="."?So:C[1]==="?"?Oo:C[1]==="@"?Ao:tr}),i.removeAttribute(f)}else f.startsWith(st)&&(d.push({type:6,index:s}),i.removeAttribute(f));if(_l.test(i.tagName)){let f=i.textContent.split(st),E=f.length-1;if(E>0){i.textContent=$o?$o.emptyScript:"";for(let b=0;b<E;b++)i.append(f[b],$i()),Jt.nextNode(),d.push({type:2,index:++s});i.append(f[E],$i())}}}else if(i.nodeType===8)if(i.data===pn)d.push({type:2,index:s});else{let f=-1;for(;(f=i.data.indexOf(st,f+1))!==-1;)d.push({type:7,index:s}),f+=st.length-1}s++}}static createElement(t,r){let o=Qt.createElement("template");return o.innerHTML=t,o}};function er(e,t,r=e,o){if(t===F)return t;let i=o!==void 0?r._$Co?.[o]:r._$Cl,s=Pi(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,r,o)),o!==void 0?(r._$Co??(r._$Co=[]))[o]=i:r._$Cl=i),i!==void 0&&(t=er(e,i._$AS(e,t.values),i,o)),t}var Po=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:r},parts:o}=this._$AD,i=(t?.creationScope??Qt).importNode(r,!0);Jt.currentNode=i;let s=Jt.nextNode(),n=0,u=0,d=o[0];for(;d!==void 0;){if(n===d.index){let m;d.type===2?m=new Er(s,s.nextSibling,this,t):d.type===1?m=new d.ctor(s,d.name,d.strings,this,t):d.type===6&&(m=new Io(s,this,t)),this._$AV.push(m),d=o[++u]}n!==d?.index&&(s=Jt.nextNode(),n++)}return Jt.currentNode=Qt,i}p(t){let r=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}},Er=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,o,i){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=er(this,t,r),Pi(t)?t===w||t==null||t===""?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==F&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):yl(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==w&&Pi(this._$AH)?this._$AA.nextSibling.data=t:this.T(Qt.createTextNode(t)),this._$AH=t}$(t){let{values:r,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Si.createElement(wl(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(r);else{let s=new Po(i,this),n=s.u(this.options);s.p(r),this.T(n),this._$AH=s}}_$AC(t){let r=gl.get(t.strings);return r===void 0&&gl.set(t.strings,r=new Si(t)),r}k(t){fn(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,o,i=0;for(let s of t)i===r.length?r.push(o=new e(this.O($i()),this.O($i()),this,this.options)):o=r[i],o._$AI(s),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){let o=t.nextSibling;t.remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},tr=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,o,i,s){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=w}_$AI(t,r=this,o,i){let s=this.strings,n=!1;if(s===void 0)t=er(this,t,r,0),n=!Pi(t)||t!==this._$AH&&t!==F,n&&(this._$AH=t);else{let u=t,d,m;for(t=s[0],d=0;d<s.length-1;d++)m=er(this,u[o+d],r,d),m===F&&(m=this._$AH[d]),n||(n=!Pi(m)||m!==this._$AH[d]),m===w?t=w:t!==w&&(t+=(m??"")+s[d+1]),this._$AH[d]=m}n&&!i&&this.j(t)}j(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},So=class extends tr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===w?void 0:t}},Oo=class extends tr{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==w)}},Ao=class extends tr{constructor(t,r,o,i,s){super(t,r,o,i,s),this.type=5}_$AI(t,r=this){if((t=er(this,t,r,0)??w)===F)return;let o=this._$AH,i=t===w&&o!==w||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==w&&(o===w||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Io=class{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){er(this,t)}},El={M:dn,P:st,A:pn,C:1,L:kl,R:Po,D:yl,V:er,I:Er,H:tr,N:Oo,U:Ao,B:So,F:Io},Dh=Ci.litHtmlPolyfillSupport;Dh?.(Si,Er),(Ci.litHtmlVersions??(Ci.litHtmlVersions=[])).push("3.3.1");var Cl=(e,t,r)=>{let o=r?.renderBefore??t,i=o._$litPart$;if(i===void 0){let s=r?.renderBefore??null;o._$litPart$=i=new Er(t.insertBefore($i(),s),s,void 0,r??{})}return i._$AI(e),i};var Oi=globalThis,p=class extends ot{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;let t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Cl(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};p._$litElement$=!0,p.finalized=!0,Oi.litElementHydrateSupport?.({LitElement:p});var Uh=Oi.litElementPolyfillSupport;Uh?.({LitElement:p});(Oi.litElementVersions??(Oi.litElementVersions=[])).push("4.2.1");var Th=`.uui-h1,
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
`,Fe=Se(Th);var qe=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};var Nh={attribute:!0,type:String,converter:ki,reflect:!1,hasChanged:Co},Vh=(e=Nh,t,r)=>{let{kind:o,metadata:i}=r,s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),o==="accessor"){let{name:n}=r;return{set(u){let d=t.get.call(this);t.set.call(this,u),this.requestUpdate(n,d,e)},init(u){return u!==void 0&&this.C(n,void 0,e,u),u}}}if(o==="setter"){let{name:n}=r;return function(u){let d=this[n];t.call(this,u),this.requestUpdate(n,d,e)}}throw Error("Unsupported decorator location: "+o)};function a(e){return(t,r)=>typeof r=="object"?Vh(e,t,r):((o,i,s)=>{let n=i.hasOwnProperty(s);return i.constructor.createProperty(s,o),n?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,r)}function v(e){return a({...e,state:!0,attribute:!1})}var nt=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);function $(e,t){return(r,o,i)=>{let s=n=>n.renderRoot?.querySelector(e)??null;if(t){let{get:n,set:u}=typeof o=="object"?r:i??(()=>{let d=Symbol();return{get(){return this[d]},set(m){this[d]=m}}})();return nt(r,o,{get(){let d=n.call(this);return d===void 0&&(d=s(this),(d!==null||this.hasUpdated)&&u.call(this,d)),d}})}return nt(r,o,{get(){return s(this)}})}}var Hh;function $l(e){return(t,r)=>nt(t,r,{get(){return(this.renderRoot??Hh??(Hh=document.createDocumentFragment())).querySelectorAll(e)}})}function de(e){return(t,r)=>{let{slot:o,selector:i}=e??{},s="slot"+(o?`[name=${o}]`:":not([name])");return nt(t,r,{get(){let n=this.renderRoot?.querySelector(s),u=n?.assignedElements(e)??[];return i===void 0?u:u.filter(d=>d.matches(i))}})}}var Gb=c`
  @keyframes uui-blink {
    0%,
    100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }
`,Kb=Se("uui-blink 0.9s infinite both"),Xb=c`
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
`,Yb=Se("pulse 0.8s ease-in-out infinite both"),Zb=c`
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
`,Jb=Se("uui-horizontal-shake 600ms ease backwards"),Mo=class extends Event{constructor(t,r={}){super(t,{...r}),this.detail=r.detail||{}}},zo=class extends Mo{constructor(t,r={}){super(t,{bubbles:!0,...r})}};zo.VALID="valid";zo.INVALID="invalid";var Lo=class extends Mo{constructor(t,r={}){super(t,{bubbles:!0,cancelable:!0,...r})}};Lo.SELECTED="selected";Lo.DESELECTED="deselected";function h(e,t){return r=>{if(e.indexOf("-")>0===!1){console.error(`${e} is not a valid custom element name. A custom element name should consist of at least two words separated by a hyphen.`);return}window.customElements.get(e)||window.customElements.define(e,r,t)}}var Bh=Object.getOwnPropertyDescriptor,jh=(e,t,r,o)=>{for(var i=o>1?void 0:o?Bh(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=n(i)||i);return i},Cr=class extends p{render(){return l`<slot></slot>`}};Cr.styles=[c`
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
    `];Cr=jh([h("uui-button-group")],Cr);var Rh=Object.getOwnPropertyDescriptor,Wh=(e,t,r,o)=>{for(var i=o>1?void 0:o?Rh(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=n(i)||i);return i},vn=class extends Cr{};vn.styles=[...Cr.styles,c`
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
    `];vn=Wh([h("uui-action-bar")],vn);var Fh=Object.defineProperty,qh=Object.getOwnPropertyDescriptor,Do=(e,t,r,o)=>{for(var i=o>1?void 0:o?qh(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Fh(t,r,i),i},$r=class extends p{constructor(){super(...arguments),this._avatarArray=[],this.limit=0}firstUpdated(){this._setAvatarArray()}_onSlotChange(){this._setAvatarArray(),this._updateAvatarVisibility()}_setAvatarArray(){this._avatarArray=this._avatarNodes?this._avatarNodes:[]}updated(e){e.has("limit")&&this._updateAvatarVisibility()}_updateAvatarVisibility(){this._avatarArray.forEach((e,t)=>{e.style.display=t<this.limit||this.limit===0?"":"none"})}_isLimitExceeded(){return this.limit!==0&&this._avatarArray.length>this.limit}render(){return l`
      <slot @slotchange=${this._onSlotChange}></slot>
      ${this._isLimitExceeded()?l`<small id="overflow-indication">+${this._avatarArray.length-this.limit}</small>`:""}
    `}};$r.styles=[c`
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
    `];Do([de({selector:"uui-avatar, [uui-avatar]",flatten:!0})],$r.prototype,"_avatarNodes",2);Do([v()],$r.prototype,"_avatarArray",2);Do([a({type:Number,attribute:!0})],$r.prototype,"limit",2);$r=Do([h("uui-avatar-group")],$r);var Gh=Object.defineProperty,Kh=Object.getOwnPropertyDescriptor,Pr=(e,t,r,o)=>{for(var i=o>1?void 0:o?Kh(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Gh(t,r,i),i},Ct=class extends p{constructor(){super(...arguments),this.overflow=!0,this.imgSrc="",this.imgSrcset="",this.name=""}get _initials(){return this.initials?.substring(0,3)||this.createInitials(this.name)}connectedCallback(){super.connectedCallback(),this.name||console.warn(this.tagName+" needs a `name`",this)}createInitials(e){let t="";if(!e)return t;let o=[...e.matchAll(/(?:^|\s)(.)/g)].map(i=>i[1]).join("");return o?.length?(t=o[0].charAt(0),o.length>1&&(t+=o[o.length-1].charAt(0)),t.toUpperCase()):t}renderImage(){return l` <img
      src="${this.imgSrc}"
      srcset="${this.imgSrcset}"
      alt="${this._initials}"
      title="${this.name}" />`}render(){return l`
      ${this.imgSrc?this.renderImage():""}
      ${this.imgSrc?"":this._initials}
      <slot></slot>
    `}};Ct.styles=[c`
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
    `];Pr([a({type:Boolean,attribute:!0,reflect:!0})],Ct.prototype,"overflow",2);Pr([a({type:String,attribute:"img-src"})],Ct.prototype,"imgSrc",2);Pr([a({type:String,attribute:"img-srcset"})],Ct.prototype,"imgSrcset",2);Pr([a({type:String,reflect:!0})],Ct.prototype,"name",2);Pr([a({type:String})],Ct.prototype,"initials",2);Ct=Pr([h("uui-avatar")],Ct);var Xh=Object.defineProperty,Yh=Object.getOwnPropertyDescriptor,Uo=(e,t,r,o)=>{for(var i=o>1?void 0:o?Yh(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Xh(t,r,i),i},Sr=class extends p{constructor(){super(...arguments),this.color="default",this.look="primary",this.attention=!1}render(){return l` <slot></slot> `}};Sr.styles=[c`
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
    `];Uo([a({reflect:!0})],Sr.prototype,"color",2);Uo([a({reflect:!0})],Sr.prototype,"look",2);Uo([a({type:Boolean,reflect:!0})],Sr.prototype,"attention",2);Sr=Uo([h("uui-badge")],Sr);var Zh=Object.defineProperty,Jh=(e,t,r,o)=>{for(var i=void 0,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=n(t,r,i)||i);return i&&Zh(t,r,i),i},Ke=e=>{class t extends e{constructor(){super(...arguments),this.active=!1}}return Jh([a({type:Boolean,reflect:!0})],t.prototype,"active"),t},Qh=Object.defineProperty,Pl=(e,t,r,o)=>{for(var i=void 0,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=n(t,r,i)||i);return i&&Qh(t,r,i),i},q=(e,t)=>{class r extends t{constructor(){super(...arguments),this._labelSlotHasContent=!1}firstUpdated(i){super.firstUpdated(i),this.label||console.warn(this.tagName+" needs a `label`",this)}labelSlotChanged(i){this._labelSlotHasContent=i.target.assignedNodes({flatten:!0}).length>0}renderLabel(){return l`
        ${this._labelSlotHasContent===!1?l`<span class="label">${this.label}</span>`:""}
        <slot
          class="label"
          style=${this._labelSlotHasContent?"":"display: none"}
          name=${e||""}
          @slotchange=${this.labelSlotChanged}></slot>
      `}}return Pl([a({type:String})],r.prototype,"label"),Pl([v()],r.prototype,"_labelSlotHasContent"),r},ed=class extends Event{constructor(t,r={}){super(t,{...r}),this.detail=r.detail||{}}},Or=class extends ed{constructor(t,r={}){super(t,{bubbles:!0,cancelable:!0,...r})}};Or.SELECTED="selected";Or.DESELECTED="deselected";var td=Object.defineProperty,rd=Object.getOwnPropertyDescriptor,Il=e=>{throw TypeError(e)},Sl=(e,t,r,o)=>{for(var i=o>1?void 0:o?rd(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&td(t,r,i),i},gn=(e,t,r)=>t.has(e)||Il("Cannot "+r),ne=(e,t,r)=>(gn(e,t,"read from private field"),r?r.call(e):t.get(e)),To=(e,t,r)=>t.has(e)?Il("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),id=(e,t,r,o)=>(gn(e,t,"write to private field"),t.set(e,r),r),No=(e,t,r)=>(gn(e,t,"access private method"),r),Oe=e=>{var t,r,o,i,s,n,u;class d extends e{constructor(...g){super(...g),To(this,i),this._selectable=!1,this.deselectable=!0,this.selected=!1,To(this,t,this),To(this,r,f=>{f.code!=="Space"&&f.code!=="Enter"||f.composedPath().indexOf(ne(this,t))===0&&ne(this,o).call(this,f)}),To(this,o,f=>{if((this._selectable||this.deselectable&&this.selected)===!1)return;let b=f.composedPath();ne(this,t)===this&&b.some(M=>{let O=M.tagName;return O==="A"||O==="BUTTON"||O==="INPUT"||O==="TEXTAREA"||O==="SELECT"})||b.indexOf(ne(this,t))!==-1&&(f.type==="keydown"&&f.preventDefault(),No(this,i,s).call(this))}),this.addEventListener("click",ne(this,o)),this.addEventListener("keydown",ne(this,r))}get selectable(){return this._selectable}set selectable(g){let f=this._selectable;f!==g&&(this._selectable=g,ne(this,t)===this&&ne(this,t).setAttribute("tabindex",`${g?"0":"-1"}`),this.requestUpdate("selectable",f))}get selectableTarget(){return ne(this,t)}set selectableTarget(g){let f=ne(this,t);f.removeAttribute("tabindex"),f.removeEventListener("click",ne(this,o)),f.removeEventListener("keydown",ne(this,r)),id(this,t,g),ne(this,t)===this&&ne(this,t).setAttribute("tabindex",this._selectable?"0":"-1"),g.addEventListener("click",ne(this,o)),g.addEventListener("keydown",ne(this,r))}}return t=new WeakMap,r=new WeakMap,o=new WeakMap,i=new WeakSet,s=function(){this.selectable&&(this.deselectable===!1?No(this,i,n).call(this):this.selected?No(this,i,u).call(this):No(this,i,n).call(this))},n=function(){if(!this.selectable)return;let m=new Or(Or.SELECTED);this.dispatchEvent(m),!m.defaultPrevented&&(this.selected=!0)},u=function(){if(!this.deselectable)return;let m=new Or(Or.DESELECTED);this.dispatchEvent(m),!m.defaultPrevented&&(this.selected=!1)},Sl([a({type:Boolean,reflect:!0})],d.prototype,"selectable",1),Sl([a({type:Boolean,reflect:!0})],d.prototype,"selected",2),d},od=Object.defineProperty,sd=Object.getOwnPropertyDescriptor,nd=(e,t,r,o)=>{for(var i=sd(t,r),s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=n(t,r,i)||i);return i&&od(t,r,i),i},$t=e=>{class t extends e{constructor(){super(...arguments),this._selectOnly=!1}get selectOnly(){return this._selectOnly}set selectOnly(o){let i=this._selectOnly;this._selectOnly=o,this.requestUpdate("selectOnly",i)}}return nd([a({type:Boolean,reflect:!0,attribute:"select-only"})],t.prototype,"selectOnly"),t},Ho=class extends Event{constructor(t,r={}){super(t,{...r}),this.detail=r.detail||{}}},Ge=class extends Ho{constructor(t,r={}){super(t,{bubbles:!0,...r})}};Ge.VALID="valid";Ge.INVALID="invalid";var Bo=class extends Ho{constructor(t,r={}){super(t,{bubbles:!0,cancelable:!0,...r})}};Bo.SELECTED="selected";Bo.DESELECTED="deselected";var ad=Object.defineProperty,ld=Object.getOwnPropertyDescriptor,Ml=e=>{throw TypeError(e)},rr=(e,t,r,o)=>{for(var i=o>1?void 0:o?ld(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&ad(t,r,i),i},yn=(e,t,r)=>t.has(e)||Ml("Cannot "+r),z=(e,t,r)=>(yn(e,t,"read from private field"),r?r.call(e):t.get(e)),ir=(e,t,r)=>t.has(e)?Ml("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),bn=(e,t,r,o)=>(yn(e,t,"write to private field"),t.set(e,r),r),Vo=(e,t,r)=>(yn(e,t,"access private method"),r),ud=["customError","valueMissing","badInput","typeMismatch","patternMismatch","rangeOverflow","rangeUnderflow","stepMismatch","tooLong","tooShort"],G=(e,t)=>{var r,o,i,s,n,u,d,m,g;class f extends e{constructor(...b){super(...b),ir(this,u),this.name="",ir(this,r,{}),this._pristine=!1,this.required=!1,this.requiredMessage="This field is required",this.error=!1,this.errorMessage="This field is invalid",ir(this,o,t),ir(this,i,null),ir(this,s,[]),ir(this,n,[]),ir(this,g,()=>{this.pristine=!1}),this._internals=this.attachInternals(),this.pristine=!0,this.addValidator("valueMissing",()=>this.requiredMessage,()=>this.hasAttribute("required")&&this.hasValue()===!1),this.addValidator("customError",()=>this.errorMessage,()=>this.error),this.addEventListener("blur",()=>{this.pristine=!1,this.checkValidity()})}get value(){return z(this,o)}set value(b){let C=z(this,o);bn(this,o,b),"ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype&&this._internals.setFormValue(z(this,o)??null),this.requestUpdate("value",C)}set pristine(b){this._pristine!==b&&(this._pristine=b,b?this.setAttribute("pristine",""):this.removeAttribute("pristine"),Vo(this,u,m).call(this))}get pristine(){return this._pristine}hasValue(){return this.value!==this.getDefaultValue()}focusFirstInvalidElement(){let b=z(this,n).find(C=>C.validity.valid===!1);b?"focusFirstInvalidElement"in b?b.focusFirstInvalidElement():b.focus():this.focus()}disconnectedCallback(){super.disconnectedCallback(),Vo(this,u,d).call(this)}addValidator(b,C,M){let O={flagKey:b,getMessageMethod:C,checkMethod:M,weight:ud.indexOf(b)};return z(this,s).push(O),z(this,s).sort((j,we)=>j.weight>we.weight?1:we.weight>j.weight?-1:0),O}removeValidator(b){let C=z(this,s).indexOf(b);C!==-1&&z(this,s).splice(C,1)}addFormControlElement(b){z(this,n).push(b),b.addEventListener(Ge.INVALID,()=>{this._runValidators()}),b.addEventListener(Ge.VALID,()=>{this._runValidators()}),this._pristine===!1&&(b.checkValidity(),this._runValidators())}setCustomValidity(b){this._customValidityObject&&this.removeValidator(this._customValidityObject),b!=null&&b!==""&&(this._customValidityObject=this.addValidator("customError",()=>b,()=>!0)),this._runValidators()}_runValidators(){bn(this,r,{});let b,C;z(this,s).some(O=>O.checkMethod()?(z(this,r)[O.flagKey]=!0,b=O.getMessageMethod(),!0):!1),b||z(this,n).some(O=>{let j;for(j in O.validity)if(j!=="valid"&&O.validity[j])return z(this,r)[j]=!0,b=O.validationMessage,C??(C=O),!0;return!1});let M=Object.values(z(this,r)).includes(!0);z(this,r).valid=!M,this._internals.setValidity(z(this,r),b,C??this.getFormElement()??void 0),Vo(this,u,m).call(this)}updated(b){super.updated(b),this._runValidators()}submit(){z(this,i)?.requestSubmit()}formAssociatedCallback(){Vo(this,u,d).call(this),bn(this,i,this._internals.form),z(this,i)&&(z(this,i).hasAttribute("submit-invalid")&&(this.pristine=!1),z(this,i).addEventListener("submit",z(this,g)))}formResetCallback(){this.pristine=!0,this.value=this.getInitialValue()??this.getDefaultValue()}getDefaultValue(){return t}getInitialValue(){return this.getAttribute("value")}checkValidity(){this.pristine=!1,this._runValidators();for(let b in z(this,n))if(z(this,n)[b].checkValidity()===!1)return!1;return this._internals?.checkValidity()}get validity(){return z(this,r)}get validationMessage(){return this._internals?.validationMessage}}return r=new WeakMap,o=new WeakMap,i=new WeakMap,s=new WeakMap,n=new WeakMap,u=new WeakSet,d=function(){z(this,i)&&z(this,i).removeEventListener("submit",z(this,g))},m=function(){this._pristine!==!0&&(z(this,r).valid?this.dispatchEvent(new Ge(Ge.VALID)):this.dispatchEvent(new Ge(Ge.INVALID)))},g=new WeakMap,f.formAssociated=!0,rr([a({type:String})],f.prototype,"name",2),rr([a()],f.prototype,"value",1),rr([a({type:Boolean,reflect:!0,attribute:"pristine"})],f.prototype,"pristine",1),rr([a({type:Boolean,reflect:!0})],f.prototype,"required",2),rr([a({type:String,attribute:"required-message"})],f.prototype,"requiredMessage",2),rr([a({type:Boolean,reflect:!0})],f.prototype,"error",2),rr([a({type:String,attribute:"error-message"})],f.prototype,"errorMessage",2),f},cd=(e,t,r)=>{let o=e;for(;o!==null;){let i=o instanceof HTMLElement&&o.hasAttribute(t)&&o.getAttribute(t)===r,s=o.querySelector(`[${t}="${r}"]`)!==null;if(i)return o;if(s)return o.querySelector(`[${t}="${r}"]`);o=o.parentElement||o.parentNode||o.host||null}return null},hd=Object.defineProperty,zl=e=>{throw TypeError(e)},dd=(e,t,r,o)=>{for(var i=void 0,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=n(t,r,i)||i);return i&&hd(t,r,i),i},Ll=(e,t,r)=>t.has(e)||zl("Cannot "+r),Ol=(e,t,r)=>(Ll(e,t,"read from private field"),t.get(e)),Al=(e,t,r)=>t.has(e)?zl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),pd=(e,t,r,o)=>(Ll(e,t,"write to private field"),t.set(e,r),r),Dl=e=>{var t,r;class o extends e{constructor(...s){super(...s),Al(this,t,!1),this._togglePopover=()=>{if(!this.popoverContainerElement)return;let n=cd(this,"id",this.popoverContainerElement);n&&(Ol(this,t)?n.hidePopover():n.showPopover())},Al(this,r,n=>{requestAnimationFrame(()=>{pd(this,t,n.detail.newState==="open")})}),this.addEventListener("uui-popover-before-toggle",Ol(this,r))}}return t=new WeakMap,r=new WeakMap,dd([a({type:String,attribute:"popovertarget"})],o.prototype,"popoverContainerElement"),o};var k=class extends Event{constructor(t,r={}){super(t,{...r}),this.detail=r.detail||{}}},at=class extends k{constructor(t,r={}){super(t,{bubbles:!0,...r})}};at.VALID="valid";at.INVALID="invalid";var Ae=class extends k{constructor(t,r={}){super(t,{bubbles:!0,cancelable:!0,...r})}};Ae.SELECTED="selected";Ae.DESELECTED="deselected";var Ai=class extends k{constructor(t,r={}){super(t,{bubbles:!0,...r})}};Ai.CHANGE="change";var fd=Object.defineProperty,md=Object.getOwnPropertyDescriptor,Ul=e=>{throw TypeError(e)},Ar=(e,t,r,o)=>{for(var i=o>1?void 0:o?md(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&fd(t,r,i),i},vd=(e,t,r)=>t.has(e)||Ul("Cannot "+r),bd=(e,t,r)=>t.has(e)?Ul("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),gd=(e,t,r)=>(vd(e,t,"access private method"),r),_n,Tl,pe=class extends G(q("",p),""){constructor(t="checkbox"){super(),bd(this,_n),this._value="",this.labelPosition="right",this._checked=!1,this.indeterminate=!1,this.disabled=!1,this.readonly=!1,this._value===""&&(this._value="on"),this.inputRole=t,this.addEventListener("keydown",gd(this,_n,Tl))}get value(){return this._value}set value(t){let r=super.value;this._value=t,"ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype&&this._internals.setFormValue(this._checked&&this.name!==""?this._value:null),this.requestUpdate("value",r)}get checked(){return this._checked}set checked(t){let r=this._checked;this._checked=t,this._internals.setFormValue(this._checked&&this.name!==""?this._value?this._value:"on":null),this.requestUpdate("checked",r)}getFormElement(){return this._input}hasValue(){return this.checked}formResetCallback(){super.formResetCallback(),this.checked=this.hasAttribute("checked")}firstUpdated(t){super.firstUpdated(t);let r=this.shadowRoot?.querySelector("label"),o=!1;this._input.addEventListener("blur",()=>{o===!1&&this.style.setProperty("--uui-show-focus-outline","1"),o=!1}),r.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0"),o=!0}),r.addEventListener("mouseup",()=>{o=!1})}async focus(){await this.updateComplete,this._input.focus()}async click(){await this.updateComplete,this._input.click()}_onInputChange(t){t.stopPropagation(),this.pristine=!1,this.checked=this._input.checked,this.indeterminate=this._input.indeterminate,this.dispatchEvent(new Ai(Ai.CHANGE))}render(){return l`
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
    `}};_n=new WeakSet;Tl=function(e){e.key=="Enter"&&this.submit()};pe.styles=[c`
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
    `];Ar([a({type:String,attribute:"label-position",reflect:!0})],pe.prototype,"labelPosition",2);Ar([a({type:Boolean})],pe.prototype,"checked",1);Ar([a({type:Boolean,reflect:!0})],pe.prototype,"indeterminate",2);Ar([a({type:Boolean,reflect:!0})],pe.prototype,"disabled",2);Ar([a({type:Boolean,reflect:!0})],pe.prototype,"readonly",2);Ar([$("#input")],pe.prototype,"_input",2);var Vl=Symbol.for(""),yd=e=>{if(e?.r===Vl)return e?._$litStatic$},xn=e=>({_$litStatic$:e,r:Vl});var Nl=new Map,wn=e=>(t,...r)=>{let o=r.length,i,s,n=[],u=[],d,m=0,g=!1;for(;m<o;){for(d=t[m];m<o&&(s=r[m],(i=yd(s))!==void 0);)d+=i+t[++m],g=!0;m!==o&&u.push(s),n.push(d),m++}if(m===o&&n.push(t[o]),g){let f=n.join("$$lit$$");(t=Nl.get(f))===void 0&&(n.raw=n,Nl.set(f,t=n)),r=u}return e(t,...r)},kn=wn(l),Tg=wn(y),Ng=wn(xl);var _d=Object.defineProperty,xd=Object.getOwnPropertyDescriptor,or=(e,t,r,o)=>{for(var i=o>1?void 0:o?xd(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&_d(t,r,i),i};function En(e){return e?e.assignedNodes({flatten:!0}).length>0:!1}var lt=class extends p{constructor(){super(...arguments),this.headline=null,this._headlineVariantTag="h5",this._headlineSlotHasContent=!1,this._headlineSlotChanged=e=>{this._headlineSlotHasContent=En(e.target)},this._headerSlotHasContent=!1,this._headerSlotChanged=e=>{this._headerSlotHasContent=En(e.target)},this._headerActionsSlotHasContent=!1,this._headerActionsSlotChanged=e=>{this._headerActionsSlotHasContent=En(e.target)}}set headlineVariant(e){this._headlineVariantTag=e}get headlineVariant(){return this._headlineVariantTag}renderHeader(){return kn`<div
      id="header"
      class="uui-text"
      style=${this._headerSlotHasContent||this._headlineSlotHasContent||this._headerActionsSlotHasContent||this.headline!==null?"":"display: none"}>
      <${xn(this._headlineVariantTag)}
        id="headline"
        class="uui-h5"
        style=${this._headlineSlotHasContent||this.headline!==null?"":"display: none"}>
        ${this.headline}
        <slot name="headline" @slotchange=${this._headlineSlotChanged}></slot>
      </${xn(this._headlineVariantTag)}>
      <slot name="header" @slotchange=${this._headerSlotChanged}></slot>
      <slot name="header-actions" @slotchange=${this._headerActionsSlotChanged}></slot>
    </div>`}render(){return kn`
      ${this.renderHeader()}
      <slot></slot>
    `}};lt.styles=[Fe,c`
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
    `];or([a({type:String})],lt.prototype,"headline",2);or([a({attribute:"headline-variant"})],lt.prototype,"headlineVariant",1);or([v()],lt.prototype,"_headlineVariantTag",2);or([v()],lt.prototype,"_headlineSlotHasContent",2);or([v()],lt.prototype,"_headerSlotHasContent",2);or([v()],lt.prototype,"_headerActionsSlotHasContent",2);lt=or([h("uui-box")],lt);var wd=Object.defineProperty,kd=Object.getOwnPropertyDescriptor,Cn=(e,t,r,o)=>{for(var i=o>1?void 0:o?kd(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&wd(t,r,i),i},Ir=class extends p{constructor(){super(...arguments),this.lastItem=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}renderLinkAndSeparator(){let e=this.href?l`<a id="link" href=${this.href}><slot></slot></a>`:l`<span id="link"><slot></slot></span>`;return l`${e}<span part="separator"></span>`}renderCurrent(){return l`<span id="last-item"><slot></slot></span>`}render(){return l`${this.lastItem?this.renderCurrent():this.renderLinkAndSeparator()}`}};Ir.styles=[c`
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
    `];Cn([a()],Ir.prototype,"href",2);Cn([a({type:Boolean,attribute:"last-item"})],Ir.prototype,"lastItem",2);Ir=Cn([h("uui-breadcrumb-item")],Ir);var Ed=Object.defineProperty,Cd=Object.getOwnPropertyDescriptor,Hl=(e,t,r,o)=>{for(var i=o>1?void 0:o?Cd(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Ed(t,r,i),i},jo=class extends p{elementIsBreadcrumbItem(e){return e instanceof Ir}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label","breadcrumb"),this.setAttribute("role","navigation")}handleSlotChange(){if(this.slotNodes.length>0){let e=this.slotNodes[this.slotNodes.length-1];e.setAttribute("aria-current","page"),this.elementIsBreadcrumbItem(e)&&(e.lastItem=!0)}}render(){return l`<ol id="breadcrumbs-list">
      <slot @slotchange=${this.handleSlotChange}></slot>
    </ol>`}};jo.styles=[c`
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
    `];Hl([de({flatten:!0,selector:"uui-breadcrumb-item, [uui-breadcrumb-item], [role=listitem]"})],jo.prototype,"slotNodes",2);jo=Hl([h("uui-breadcrumbs")],jo);var Bl=c`
  @keyframes uui-blink {
    0%,
    100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }
`,jl=Se("uui-blink 0.9s infinite both"),Rl=c`
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
`,r1=Se("pulse 0.8s ease-in-out infinite both"),Pt=c`
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
`,St=Se("uui-horizontal-shake 600ms ease backwards");var ie={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ke=e=>(...t)=>({_$litDirective$:e,values:t}),ye=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};var Wl="important",$d=" !"+Wl,ae=ke(class extends ye{constructor(e){if(super(e),e.type!==ie.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{let o=e[r];return o==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){let{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let o of this.ft)t[o]==null&&(this.ft.delete(o),o.includes("-")?r.removeProperty(o):r[o]=null);for(let o in t){let i=t[o];if(i!=null){this.ft.add(o);let s=typeof i=="string"&&i.endsWith($d);o.includes("-")||s?r.setProperty(o,s?i.slice(0,-11):i,s?Wl:""):r[o]=i}}return F}});var x=e=>e??w;var Ii=class extends k{constructor(t,r={}){super(t,{bubbles:!0,composed:!0,...r})}};Ii.CLICK="click";var Pd=Object.defineProperty,Sd=Object.getOwnPropertyDescriptor,Fl=e=>{throw TypeError(e)},sr=(e,t,r,o)=>{for(var i=o>1?void 0:o?Sd(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Pd(t,r,i),i},Od=(e,t,r)=>t.has(e)||Fl("Cannot "+r),Ad=(e,t,r)=>t.has(e)?Fl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Ro=(e,t,r)=>(Od(e,t,"access private method"),r),Mr,$n,ql,Gl,ut=class extends p{constructor(){super(...arguments),Ad(this,Mr),this._position=0,this.vertical=!1}_onMouseMove(e){this._position=(this.vertical?e.offsetY:e.offsetX)-5}_handleClick(e){e.preventDefault(),e.stopImmediatePropagation(),e.target?.blur?.(),this.dispatchEvent(new Ii(Ii.CLICK))}render(){return this.href?Ro(this,Mr,ql).call(this):Ro(this,Mr,Gl).call(this)}};Mr=new WeakSet;$n=function(){return l`
      <div
        id="plus"
        style=${ae({left:this.vertical?"":this._position+"px",top:this.vertical?this._position+"px":""})}>
        <svg
          id="plus-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512">
          <path
            d="M420.592 214.291H296.104V89.804h-83.102v124.487H88.518v83.104h124.484v124.488h83.102V297.395h124.488z" />
        </svg>
      </div>
    `};ql=function(){return l`<a
      id="button-wrapper"
      @mousemove=${this._onMouseMove}
      href=${x(this.href)}
      target=${x(this.target||void 0)}
      rel=${x(this.rel||x(this.target==="_blank"?"noopener noreferrer":void 0))}
      aria-label=${this.label?this.label:"create new element"}>
      ${Ro(this,Mr,$n).call(this)}
    </a>`};Gl=function(){return l`
      <button
        id="button-wrapper"
        @mousemove=${this._onMouseMove}
        @click=${this._handleClick}
        aria-label=${this.label?this.label:"create new element"}>
        ${Ro(this,Mr,$n).call(this)}
      </button>
    `};ut.styles=[Bl,c`
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
        animation: ${jl};
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
    `];sr([v()],ut.prototype,"_position",2);sr([a({type:String})],ut.prototype,"label",2);sr([a({type:Boolean,reflect:!0})],ut.prototype,"vertical",2);sr([a({type:String})],ut.prototype,"href",2);sr([a({type:String})],ut.prototype,"target",2);sr([a({type:String})],ut.prototype,"rel",2);ut=sr([h("uui-button-inline-create")],ut);var Wo=class{constructor(t,r){this._callback=t,this._timerId=null,this._remaining=null,this._onComplete=()=>{this._remaining=null,this._callback()},this.setDuration(r)}setDuration(t){this._duration=t,this._timerId!==null&&this.restart()}start(){this._timerId===null&&this.resume()}restart(){this._remaining=this._duration,this.resume()}pause(){this._timerId!==null&&(window.clearTimeout(this._timerId),this._timerId=null,this._remaining!==null&&(this._remaining-=Date.now()-this._startTime))}resume(){this._timerId!==null&&window.clearTimeout(this._timerId),this._remaining===null&&(this._remaining=this._duration),this._startTime=Date.now(),this._timerId=window.setTimeout(this._onComplete,this._remaining)}destroy(){this.pause()}},_=(e,t,r=`This element has to be present for ${e.nodeName} to work appropriate.`)=>{customElements.get(t)||console.warn(`%c ${e.nodeName} requires ${t} element to be registered!`,"font-weight: bold;",r,e)},Fo=(e,t)=>{function r(i){let s=e.getBoundingClientRect(),n=e.ownerDocument.defaultView,u=s.left+n.scrollX,d=s.top+n.scrollY,m;if("TouchEvent"in window&&i instanceof TouchEvent)m=i.touches[0];else if(i instanceof MouseEvent)m=i;else return;let g=m.pageX-u,f=m.pageY-d;t?.onMove&&t.onMove(g,f)}function o(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",o),t?.onStop&&t.onStop()}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",o),t?.initialEvent&&r(t.initialEvent)},A=(e,t,r)=>Math.min(Math.max(e,t),r),Pn=(e,t,r)=>r+t-e;var Kl=(e,t,r)=>{let o=e;for(;o!==null;){let i=o instanceof HTMLElement&&o.hasAttribute(t)&&o.getAttribute(t)===r,s=o.querySelector(`[${t}="${r}"]`)!==null;if(i)return o;if(s)return o.querySelector(`[${t}="${r}"]`);o=o.parentElement||o.parentNode||o.host||null}return null};function Xl(e){return e?e.assignedNodes({flatten:!0}).length>0:!1}var $1=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,P1=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>`,S1=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>`,O1=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>`,Ot=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>`,A1=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>`,I1=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>`,M1=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m2 22 1-1h3l9-9" /><path d="M3 21v-3l9-9" /><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" /></svg>`,z1=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" /><path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" /><path d="M15 2v5h5" /></svg>`,Yl=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>`,L1=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>`,D1=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>`,U1=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>`,T1=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>`,N1=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /><path d="M2 10h20" /></svg>`,V1=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`,H1=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>`,B1=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>`,Zl=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>`,j1=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="4" height="16" x="6" y="4" /><rect width="4" height="16" x="14" y="4" /></svg>`,Jl=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>`,R1=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>`,zr=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>`,W1=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>`,Ql=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>`,F1=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>`,eu=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>`,q1=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>`,tu=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></svg>`,ru=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg>`,G1=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2" /><path d="M15 16v-2" /><path d="M8 9h2" /><path d="M20 9h2" /><path d="M17.8 11.8 19 13" /><path d="M15 9h0" /><path d="M17.8 6.2 19 5" /><path d="m3 21 9-9" /><path d="M12.2 6.2 11 5" /></svg>`,iu=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`;var Id=Object.defineProperty,Md=Object.getOwnPropertyDescriptor,ou=e=>{throw TypeError(e)},Ve=(e,t,r,o)=>{for(var i=o>1?void 0:o?Md(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Id(t,r,i),i},su=(e,t,r)=>t.has(e)||ou("Cannot "+r),zd=(e,t,r)=>(su(e,t,"read from private field"),t.get(e)),Ld=(e,t,r)=>t.has(e)?ou("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Dd=(e,t,r,o)=>(su(e,t,"write to private field"),t.set(e,r),r),qo,le=class extends G(q("",Dl(p))){constructor(){super(),this.type="button",this.disabled=!1,this.look="default",this.color="default",this.compact=!1,this.state=void 0,Ld(this,qo),this.addEventListener("click",this._onHostClick)}getFormElement(){return this._button}async focus(){await this.updateComplete,this._button.focus()}async blur(){await this.updateComplete,this._button.blur()}async click(){await this.updateComplete,this._button.click()}_onHostClick(e){if(this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}if(this._internals?.form)switch(this.type){case"reset":this._internals.form.reset();break;case"button":break;default:this._internals.form.requestSubmit?this._internals.form.requestSubmit():this._internals.form.dispatchEvent(new SubmitEvent("submit"));break}this._togglePopover()}updated(e){super.updated(e),e.has("state")&&(clearTimeout(zd(this,qo)),(this.state==="success"||this.state==="failed")&&Dd(this,qo,setTimeout(()=>this.state=void 0,2e3)))}renderState(){let e;switch(this.state){case"waiting":_(this,"uui-loader-circle"),e=l`<uui-loader-circle id="loader"></uui-loader-circle>`;break;case"success":_(this,"uui-icon"),e=l`<uui-icon
          name="check"
          .fallback=${Ot.strings[0]}></uui-icon>`;break;case"failed":_(this,"uui-icon"),e=l`<uui-icon
          name="wrong"
          .fallback=${iu.strings[0]}></uui-icon>`;break;default:return w}return l`<div id="state">${e}</div>`}render(){return this.href?l`
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
        `}};qo=new WeakMap;le.styles=[Pt,c`
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
        animation: ${St};
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
    `];Ve([a({type:String,reflect:!0})],le.prototype,"type",2);Ve([a({type:Boolean,reflect:!0})],le.prototype,"disabled",2);Ve([a({reflect:!0})],le.prototype,"look",2);Ve([a({reflect:!0})],le.prototype,"color",2);Ve([a({type:Boolean,reflect:!0})],le.prototype,"compact",2);Ve([a({type:String,reflect:!0})],le.prototype,"state",2);Ve([a({type:String})],le.prototype,"href",2);Ve([a({type:String})],le.prototype,"target",2);Ve([a({type:String})],le.prototype,"rel",2);Ve([$("#button")],le.prototype,"_button",2);le=Ve([h("uui-button")],le);var At=class extends k{constructor(){super(...arguments),this.text=null}};At.COPIED="copied";At.COPYING="copying";var Ud=Object.defineProperty,Td=Object.getOwnPropertyDescriptor,au=e=>{throw TypeError(e)},Go=(e,t,r,o)=>{for(var i=o>1?void 0:o?Td(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Ud(t,r,i),i},lu=(e,t,r)=>t.has(e)||au("Cannot "+r),Sn=(e,t,r)=>(lu(e,t,"read from private field"),r?r.call(e):t.get(e)),nu=(e,t,r)=>t.has(e)?au("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Nd=(e,t,r,o)=>(lu(e,t,"write to private field"),t.set(e,r),r),Mi,On,Lr=class extends le{constructor(){super(),this.text="",this.copyFrom="",this.animationStateDelay=250,nu(this,Mi),nu(this,On,async()=>{this.state="waiting";let e=this.text;if(this.copyFrom){let r=document.getElementById(this.copyFrom);if(r)"value"in r?e=r.value:e=r.textContent??r.innerText??"";else{console.error(`Element ID ${this.copyFrom} not found to copy from`),this.state="failed";return}}let t=new At(At.COPYING);t.text=e,this.dispatchEvent(t),t.text!=null&&(e=t.text);try{await navigator.clipboard.writeText(e);let r=new At(At.COPIED);r.text=e,this.dispatchEvent(r),Nd(this,Mi,setTimeout(()=>{this.state="success"},this.animationStateDelay))}catch(r){this.state="failed",console.error("Error copying to clipboard",r)}}),_(this,"uui-icon"),this.addEventListener("click",Sn(this,On))}disconnectedCallback(){super.disconnectedCallback(),Sn(this,Mi)&&clearTimeout(Sn(this,Mi))}renderLabel(){return l`
      <slot class="label">
        <uui-icon name="copy"></uui-icon>
      </slot>
    `}};Mi=new WeakMap;On=new WeakMap;Lr.styles=le.styles;Go([a({type:String})],Lr.prototype,"text",2);Go([a({type:String,attribute:"copy-from"})],Lr.prototype,"copyFrom",2);Go([a({type:Number,attribute:"animation-state-delay"})],Lr.prototype,"animationStateDelay",2);Lr=Go([h("uui-button-copy-text")],Lr);var nr=class extends k{};nr.OPEN="open";var Vd=Object.defineProperty,Hd=Object.getOwnPropertyDescriptor,Dr=(e,t,r,o)=>{for(var i=o>1?void 0:o?Hd(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Vd(t,r,i),i},K=class extends $t(Oe(p)){constructor(){super(...arguments),this.disabled=!1,this.error=!1}handleOpenClick(e){this.disabled||(e.stopPropagation(),this.dispatchEvent(new nr(nr.OPEN)))}handleOpenKeydown(e){this.disabled||e.key==="Enter"&&(e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new nr(nr.OPEN)))}render(){return l`<slot id="open-part"></slot>
      <div id="select-border"></div>`}};K.styles=[Fe,c`
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
    `];Dr([a({type:Boolean,reflect:!0,attribute:"disabled"})],K.prototype,"disabled",2);Dr([a({type:Boolean,reflect:!0})],K.prototype,"error",2);Dr([a({type:String})],K.prototype,"href",2);Dr([a({type:String})],K.prototype,"target",2);Dr([a({type:String})],K.prototype,"rel",2);K=Dr([h("uui-card")],K);var Bd=Object.defineProperty,jd=Object.getOwnPropertyDescriptor,uu=e=>{throw TypeError(e)},Ko=(e,t,r,o)=>{for(var i=o>1?void 0:o?jd(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Bd(t,r,i),i},Rd=(e,t,r)=>t.has(e)||uu("Cannot "+r),Wd=(e,t,r)=>t.has(e)?uu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),zi=(e,t,r)=>(Rd(e,t,"access private method"),r),ar,cu,hu,du,An,Ur=class extends K{constructor(){super(...arguments),Wd(this,ar),this.name=""}get background(){}set background(e){this.style.backgroundColor=e??""}render(){return l`
      ${zi(this,ar,du).call(this)}
      ${this.href?zi(this,ar,hu).call(this):zi(this,ar,cu).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>

      <slot name="tag"></slot>
      <slot name="actions"></slot>
    `}};ar=new WeakSet;cu=function(){return l`
      <button
        id="open-part"
        class="uui-text"
        tabindex=${this.disabled?w:"0"}
        @click=${this.handleOpenClick}
        @keydown=${this.handleOpenKeydown}>
        ${zi(this,ar,An).call(this)}
      </button>
    `};hu=function(){return l`
      <a
        id="open-part"
        class="uui-text"
        tabindex=${this.disabled?w:"0"}
        href=${x(this.disabled?void 0:this.href)}
        target=${x(this.target||void 0)}
        rel=${x(this.rel||x(this.target==="_blank"?"noopener noreferrer":void 0))}>
        ${zi(this,ar,An).call(this)}
      </a>
    `};du=function(){return l`<div id="portrait">
      <slot></slot>
    </div> `};An=function(){return l`
      <div id="content">
        <span title="${this.name}" id="name">${this.name}</span>
        <small title="${this.description}">${this.description}<slot name="description"></slot></small>
      </div></div>
    `};Ur.styles=[...K.styles,c`
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
    `];Ko([a({type:String})],Ur.prototype,"name",2);Ko([a({type:String})],Ur.prototype,"description",2);Ko([a({type:String,attribute:"background"})],Ur.prototype,"background",1);Ur=Ko([h("uui-card-block-type")],Ur);var Fd=Object.defineProperty,qd=Object.getOwnPropertyDescriptor,pu=e=>{throw TypeError(e)},Yo=(e,t,r,o)=>{for(var i=o>1?void 0:o?qd(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Fd(t,r,i),i},Gd=(e,t,r)=>t.has(e)||pu("Cannot "+r),Kd=(e,t,r)=>t.has(e)?pu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Xo=(e,t,r)=>(Gd(e,t,"access private method"),r),Tr,In,fu,mu,Nr=class extends K{constructor(){super(...arguments),Kd(this,Tr),this.name="",this.detail="",this._iconSlotHasContent=!1,this.fallbackIcon=`<svg
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
  </svg>`}_onSlotIconChange(e){this._iconSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0}_renderFallbackIcon(){return _(this,"uui-icon"),l`<uui-icon .svg="${this.fallbackIcon}"></uui-icon>`}renderDetail(){return l`<small id="detail"
        >${this.detail}<slot name="detail"></slot></small
      ><slot id="default"></slot>`}render(){return l`
      ${this.href?Xo(this,Tr,mu).call(this):Xo(this,Tr,fu).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>

      <slot name="tag"></slot>
      <slot name="actions"></slot>
    `}};Tr=new WeakSet;In=function(){return l`
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
    `};fu=function(){return l`<button
      id="open-part"
      tabindex=${this.disabled?w:0}
      @click=${this.handleOpenClick}
      @keydown=${this.handleOpenKeydown}>
      ${Xo(this,Tr,In).call(this)}
    </button>`};mu=function(){return l`<a
      id="open-part"
      tabindex=${this.disabled?w:0}
      href=${x(this.disabled?void 0:this.href)}
      target=${x(this.target||void 0)}
      rel=${x(this.rel||x(this.target==="_blank"?"noopener noreferrer":void 0))}>
      ${Xo(this,Tr,In).call(this)}
    </a>`};Nr.styles=[...K.styles,c`
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
    `];Yo([a({type:String})],Nr.prototype,"name",2);Yo([a({type:String})],Nr.prototype,"detail",2);Yo([v()],Nr.prototype,"_iconSlotHasContent",2);Nr=Yo([h("uui-card-content-node")],Nr);var Xd=Object.defineProperty,Yd=Object.getOwnPropertyDescriptor,vu=e=>{throw TypeError(e)},Li=(e,t,r,o)=>{for(var i=o>1?void 0:o?Yd(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Xd(t,r,i),i},Zd=(e,t,r)=>t.has(e)||vu("Cannot "+r),Jd=(e,t,r)=>t.has(e)?vu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Zo=(e,t,r)=>(Zd(e,t,"access private method"),r),Vr,bu,gu,Mn,lr=class extends K{constructor(){super(...arguments),Jd(this,Vr),this.name="",this.fileExt="",this.hasPreview=!1}connectedCallback(){super.connectedCallback(),_(this,"uui-symbol-folder"),_(this,"uui-symbol-file")}queryPreviews(e){this.hasPreview=e.composedPath()[0].assignedElements({flatten:!0}).length>0}renderMedia(){return this.hasPreview===!0?"":this.fileExt===""?l`<uui-symbol-folder id="entity-symbol"></uui-symbol-folder>`:l`<uui-symbol-file
      id="entity-symbol"
      type="${this.fileExt}"></uui-symbol-file>`}render(){return l` ${this.renderMedia()}
      <slot @slotchange=${this.queryPreviews}></slot>
      ${this.href?Zo(this,Vr,gu).call(this):Zo(this,Vr,bu).call(this)}
      <!-- Select border must be right after .open-part -->
      <div id="select-border"></div>

      <slot name="tag"></slot>
      <slot name="actions"></slot>`}};Vr=new WeakSet;bu=function(){return l`
      <button
        id="open-part"
        tabindex=${this.disabled?w:"0"}
        @click=${this.handleOpenClick}
        @keydown=${this.handleOpenKeydown}>
        ${Zo(this,Vr,Mn).call(this)}
      </button>
    `};gu=function(){return l`
      <a
        id="open-part"
        tabindex=${this.disabled?w:"0"}
        href=${x(this.disabled?void 0:this.href)}
        target=${x(this.target||void 0)}
        rel=${x(this.rel||x(this.target==="_blank"?"noopener noreferrer":void 0))}>
        ${Zo(this,Vr,Mn).call(this)}
      </a>
    `};Mn=function(){return l`
      <div id="content" class="uui-text">
        <!--
        TODO: Implement info box when pop-out is ready
        -->
        <span id="name" title="${this.name}">${this.name}</span>
        <small id="detail">${this.detail}<slot name="detail"></slot></small>
      </div>
    `};lr.styles=[...K.styles,c`
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
    `];Li([a({type:String})],lr.prototype,"name",2);Li([a({type:String})],lr.prototype,"detail",2);Li([a({type:String,attribute:"file-ext"})],lr.prototype,"fileExt",2);Li([v()],lr.prototype,"hasPreview",2);lr=Li([h("uui-card-media")],lr);var Qd=Object.defineProperty,ep=Object.getOwnPropertyDescriptor,yu=e=>{throw TypeError(e)},zn=(e,t,r,o)=>{for(var i=o>1?void 0:o?ep(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Qd(t,r,i),i},tp=(e,t,r)=>t.has(e)||yu("Cannot "+r),rp=(e,t,r)=>t.has(e)?yu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Jo=(e,t,r)=>(tp(e,t,"access private method"),r),Hr,_u,xu,Ln,Di=class extends K{constructor(){super(...arguments),rp(this,Hr),this.name="",this._avatarSlotHasContent=!1,this._avatarSlotChanged=e=>{this._avatarSlotHasContent=Xl(e.target)}}connectedCallback(){super.connectedCallback(),_(this,"uui-avatar")}render(){return l`
      ${this.href?Jo(this,Hr,xu).call(this):Jo(this,Hr,_u).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>
      <slot name="tag"></slot>
      <slot name="actions"></slot>
    `}};Hr=new WeakSet;_u=function(){return l`<div
      id="open-part"
      tabindex=${this.disabled?w:"0"}
      @click=${this.handleOpenClick}
      @keydown=${this.handleOpenKeydown}>
      ${Jo(this,Hr,Ln).call(this)}
    </div>`};xu=function(){return l`<a
      id="open-part"
      tabindex=${this.disabled?w:"0"}
      href=${x(this.disabled?void 0:this.href)}
      target=${x(this.target||void 0)}
      rel=${x(this.rel||x(this.target==="_blank"?"noopener noreferrer":void 0))}>
      ${Jo(this,Hr,Ln).call(this)}
    </a>`};Ln=function(){return l`<div id="content">
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
    </div>`};Di.styles=[...K.styles,c`
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
    `];zn([a({type:String})],Di.prototype,"name",2);zn([v()],Di.prototype,"_avatarSlotHasContent",2);Di=zn([h("uui-card-user")],Di);var ip=Object.defineProperty,op=Object.getOwnPropertyDescriptor,wu=(e,t,r,o)=>{for(var i=o>1?void 0:o?op(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&ip(t,r,i),i},Qo=class extends p{constructor(){super(),this.open=!1,console.error("\xB4uui-caret\xB4 is deprecated, please use \xB4uui-symbol-expand\xB4 or \xB4uui-symbol-sort\xB4")}render(){return l`<svg
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
    `];wu([a({type:Boolean,reflect:!0})],Qo.prototype,"open",2);Qo=wu([h("uui-caret")],Qo);var sp=Object.getOwnPropertyDescriptor,np=(e,t,r,o)=>{for(var i=o>1?void 0:o?sp(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=n(i)||i);return i},es=class extends pe{renderCheckbox(){return l`
      <div id="ticker">
        <div id="icon-check">
          ${this.indeterminate?eu:Ot}
        </div>
      </div>
    `}};es.formAssociated=!0;es.styles=[...pe.styles,Pt,c`
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
        animation: ${St};
      }
      :host([disabled]) input:checked + #ticker #icon-check,
      :host([disabled]) input:indeterminate + #ticker #icon-check {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
    `];es=np([h("uui-checkbox")],es);var Ui=ke(class extends ye{constructor(e){if(super(e),e.type!==ie.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(let o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}let r=e.element.classList;for(let o of this.st)o in t||(r.remove(o),this.st.delete(o));for(let o in t){let i=!!t[o];i===this.st.has(o)||this.nt?.has(o)||(i?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return F}});var ap={grad:.9,turn:360,rad:360/(2*Math.PI)},ct=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},Z=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=Math.pow(10,t)),Math.round(r*e)/r+0},Me=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=1),e>r?r:e>t?e:t},Iu=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},ku=function(e){return{r:Me(e.r,0,255),g:Me(e.g,0,255),b:Me(e.b,0,255),a:Me(e.a)}},Dn=function(e){return{r:Z(e.r),g:Z(e.g),b:Z(e.b),a:Z(e.a,3)}},lp=/^#([0-9a-f]{3,8})$/i,ts=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},Mu=function(e){var t=e.r,r=e.g,o=e.b,i=e.a,s=Math.max(t,r,o),n=s-Math.min(t,r,o),u=n?s===t?(r-o)/n:s===r?2+(o-t)/n:4+(t-r)/n:0;return{h:60*(u<0?u+6:u),s:s?n/s*100:0,v:s/255*100,a:i}},zu=function(e){var t=e.h,r=e.s,o=e.v,i=e.a;t=t/360*6,r/=100,o/=100;var s=Math.floor(t),n=o*(1-r),u=o*(1-(t-s)*r),d=o*(1-(1-t+s)*r),m=s%6;return{r:255*[o,u,n,n,d,o][m],g:255*[d,o,o,u,n,n][m],b:255*[n,n,d,o,o,u][m],a:i}},Eu=function(e){return{h:Iu(e.h),s:Me(e.s,0,100),l:Me(e.l,0,100),a:Me(e.a)}},Cu=function(e){return{h:Z(e.h),s:Z(e.s),l:Z(e.l),a:Z(e.a,3)}},$u=function(e){return zu((r=(t=e).s,{h:t.h,s:(r*=((o=t.l)<50?o:100-o)/100)>0?2*r/(o+r)*100:0,v:o+r,a:t.a}));var t,r,o},Ti=function(e){return{h:(t=Mu(e)).h,s:(i=(200-(r=t.s))*(o=t.v)/100)>0&&i<200?r*o/100/(i<=100?i:200-i)*100:0,l:i/2,a:t.a};var t,r,o,i},up=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,cp=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,hp=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,dp=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Pu={string:[[function(e){var t=lp.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Z(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?Z(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=hp.exec(e)||dp.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:ku({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=up.exec(e)||cp.exec(e);if(!t)return null;var r,o,i=Eu({h:(r=t[1],o=t[2],o===void 0&&(o="deg"),Number(r)*(ap[o]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return $u(i)},"hsl"]],object:[[function(e){var t=e.r,r=e.g,o=e.b,i=e.a,s=i===void 0?1:i;return ct(t)&&ct(r)&&ct(o)?ku({r:Number(t),g:Number(r),b:Number(o),a:Number(s)}):null},"rgb"],[function(e){var t=e.h,r=e.s,o=e.l,i=e.a,s=i===void 0?1:i;if(!ct(t)||!ct(r)||!ct(o))return null;var n=Eu({h:Number(t),s:Number(r),l:Number(o),a:Number(s)});return $u(n)},"hsl"],[function(e){var t=e.h,r=e.s,o=e.v,i=e.a,s=i===void 0?1:i;if(!ct(t)||!ct(r)||!ct(o))return null;var n=function(u){return{h:Iu(u.h),s:Me(u.s,0,100),v:Me(u.v,0,100),a:Me(u.a)}}({h:Number(t),s:Number(r),v:Number(o),a:Number(s)});return zu(n)},"hsv"]]},Su=function(e,t){for(var r=0;r<t.length;r++){var o=t[r][0](e);if(o)return[o,t[r][1]]}return[null,void 0]},pp=function(e){return typeof e=="string"?Su(e.trim(),Pu.string):typeof e=="object"&&e!==null?Su(e,Pu.object):[null,void 0]},Un=function(e,t){var r=Ti(e);return{h:r.h,s:Me(r.s+100*t,0,100),l:r.l,a:r.a}},Tn=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},Ou=function(e,t){var r=Ti(e);return{h:r.h,s:r.s,l:Me(r.l+100*t,0,100),a:r.a}},Au=function(){function e(t){this.parsed=pp(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return Z(Tn(this.rgba),2)},e.prototype.isDark=function(){return Tn(this.rgba)<.5},e.prototype.isLight=function(){return Tn(this.rgba)>=.5},e.prototype.toHex=function(){return t=Dn(this.rgba),r=t.r,o=t.g,i=t.b,n=(s=t.a)<1?ts(Z(255*s)):"","#"+ts(r)+ts(o)+ts(i)+n;var t,r,o,i,s,n},e.prototype.toRgb=function(){return Dn(this.rgba)},e.prototype.toRgbString=function(){return t=Dn(this.rgba),r=t.r,o=t.g,i=t.b,(s=t.a)<1?"rgba("+r+", "+o+", "+i+", "+s+")":"rgb("+r+", "+o+", "+i+")";var t,r,o,i,s},e.prototype.toHsl=function(){return Cu(Ti(this.rgba))},e.prototype.toHslString=function(){return t=Cu(Ti(this.rgba)),r=t.h,o=t.s,i=t.l,(s=t.a)<1?"hsla("+r+", "+o+"%, "+i+"%, "+s+")":"hsl("+r+", "+o+"%, "+i+"%)";var t,r,o,i,s},e.prototype.toHsv=function(){return t=Mu(this.rgba),{h:Z(t.h),s:Z(t.s),v:Z(t.v),a:Z(t.a,3)};var t},e.prototype.invert=function(){return Ie({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),Ie(Un(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),Ie(Un(this.rgba,-t))},e.prototype.grayscale=function(){return Ie(Un(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),Ie(Ou(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),Ie(Ou(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?Ie({r:(r=this.rgba).r,g:r.g,b:r.b,a:t}):Z(this.rgba.a,3);var r},e.prototype.hue=function(t){var r=Ti(this.rgba);return typeof t=="number"?Ie({h:t,s:r.s,l:r.l,a:r.a}):Z(r.h)},e.prototype.isEqual=function(t){return this.toHex()===Ie(t).toHex()},e}(),Ie=function(e){return e instanceof Au?e:new Au(e)},Ni=class extends k{constructor(t,r={}){super(t,{bubbles:!0,...r})}};Ni.CHANGE="change";var fp=Object.defineProperty,mp=Object.getOwnPropertyDescriptor,Xe=(e,t,r,o)=>{for(var i=o>1?void 0:o?mp(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&fp(t,r,i),i},ze=class extends p{constructor(){super(...arguments),this.isDraggingGridHandle=!1,this.disabled=!1,this.readonly=!1,this.hue=0,this.saturation=0,this.lightness=0,this.brightness=0,this.alpha=100,this._value="#000"}get value(){return this._value}set value(e){let t=this._value;this._value=e,this.requestUpdate("value",t);try{let r=Ie(e);if(r.isValid()){let{h:o,s:i,l:s,a:n}=r.toHsl();o!==0&&(this.hue=o),this.lightness=s,this.saturation=i,this.brightness=this.getBrightness(s),this.alpha=n*100}}catch(r){console.error("Something went wrong parsing the color string.",r)}}handleGridDrag(e){if(this.disabled||this.readonly)return;let t=this.shadowRoot.querySelector(".color-area"),r=t.querySelector(".color-area__handle"),{width:o,height:i}=t.getBoundingClientRect();r.focus(),e.preventDefault(),e.stopPropagation(),this.isDraggingGridHandle=!0,Fo(t,{onMove:(s,n)=>{isNaN(s)||isNaN(n)||(this.saturation=A(s/o*100,0,100),this.brightness=A(100-n/i*100,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues())},onStop:()=>this.isDraggingGridHandle=!1,initialEvent:e})}handleGridKeyDown(e){if(this.disabled)return;let t=e.shiftKey?10:1;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=A(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=A(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=A(this.brightness+t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=A(this.brightness-t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues())}getBrightness(e){return A(-1*(200*e/(this.saturation-200)),0,100)}getLightness(e){return A((200-this.saturation)*e/100*5/10,0,100)}syncValues(){let e=Ie({h:this.hue,s:this.saturation,l:this.lightness,a:this.alpha/100});this._value=e.toRgbString(),this.dispatchEvent(new Ni(Ni.CHANGE))}getHexString(e,t,r,o=100){let i=Ie(`hsla(${e}, ${t}%, ${r}%, ${o/100})`);return i.isValid()?i.toHex():""}render(){let e=this.saturation,t=100-this.brightness;return l`
      <div
        part="grid"
        class="color-area"
        style=${ae({backgroundColor:this.getHexString(this.hue,100,50)})}
        @mousedown=${this.handleGridDrag}
        @touchstart=${this.handleGridDrag}>
        <span
          part="grid-handle"
          class=${Ui({"color-area__handle":!0,"color-area__handle--dragging":this.isDraggingGridHandle})}
          style=${ae({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.lightness,this.alpha)})}
          role="application"
          tabindex=${x(this.disabled?void 0:"0")}
          aria-label="HSB"
          @keydown=${this.handleGridKeyDown}></span>
      </div>
    `}};ze.styles=[c`
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
    `];Xe([v()],ze.prototype,"isDraggingGridHandle",2);Xe([a({type:Boolean,reflect:!0})],ze.prototype,"disabled",2);Xe([a({type:Boolean,reflect:!0})],ze.prototype,"readonly",2);Xe([a({type:Number})],ze.prototype,"hue",2);Xe([a({type:Number})],ze.prototype,"saturation",2);Xe([a({type:Number})],ze.prototype,"lightness",2);Xe([a({type:Number})],ze.prototype,"brightness",2);Xe([a({type:Number})],ze.prototype,"alpha",2);Xe([a({type:String})],ze.prototype,"value",1);ze=Xe([h("uui-color-area")],ze);var{I:vp}=El;var rs=e=>e.strings===void 0,Lu=()=>document.createComment(""),Br=(e,t,r)=>{let o=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){let s=o.insertBefore(Lu(),i),n=o.insertBefore(Lu(),i);r=new vp(s,n,e,e.options)}else{let s=r._$AB.nextSibling,n=r._$AM,u=n!==e;if(u){let d;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(d=e._$AU)!==n._$AU&&r._$AP(d)}if(s!==i||u){let d=r._$AA;for(;d!==s;){let m=d.nextSibling;o.insertBefore(d,i),d=m}}}return r},It=(e,t,r=e)=>(e._$AI(t,r),e),bp={},is=(e,t=bp)=>e._$AH=t,Du=e=>e._$AH,os=e=>{e._$AR(),e._$AA.remove()};var Uu=ke(class extends ye{constructor(e){if(super(e),e.type!==ie.PROPERTY&&e.type!==ie.ATTRIBUTE&&e.type!==ie.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!rs(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===F||t===w)return t;let r=e.element,o=e.name;if(e.type===ie.PROPERTY){if(t===r[o])return F}else if(e.type===ie.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(o))return F}else if(e.type===ie.ATTRIBUTE&&r.getAttribute(o)===t+"")return F;return is(e),t}});var gp={grad:.9,turn:360,rad:360/(2*Math.PI)},ht=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},J=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=Math.pow(10,t)),Math.round(r*e)/r+0},Le=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=1),e>r?r:e>t?e:t},Fu=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},Tu=function(e){return{r:Le(e.r,0,255),g:Le(e.g,0,255),b:Le(e.b,0,255),a:Le(e.a)}},Nn=function(e){return{r:J(e.r),g:J(e.g),b:J(e.b),a:J(e.a,3)}},yp=/^#([0-9a-f]{3,8})$/i,ss=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},qu=function(e){var t=e.r,r=e.g,o=e.b,i=e.a,s=Math.max(t,r,o),n=s-Math.min(t,r,o),u=n?s===t?(r-o)/n:s===r?2+(o-t)/n:4+(t-r)/n:0;return{h:60*(u<0?u+6:u),s:s?n/s*100:0,v:s/255*100,a:i}},Gu=function(e){var t=e.h,r=e.s,o=e.v,i=e.a;t=t/360*6,r/=100,o/=100;var s=Math.floor(t),n=o*(1-r),u=o*(1-(t-s)*r),d=o*(1-(1-t+s)*r),m=s%6;return{r:255*[o,u,n,n,d,o][m],g:255*[d,o,o,u,n,n][m],b:255*[n,n,d,o,o,u][m],a:i}},Nu=function(e){return{h:Fu(e.h),s:Le(e.s,0,100),l:Le(e.l,0,100),a:Le(e.a)}},Vu=function(e){return{h:J(e.h),s:J(e.s),l:J(e.l),a:J(e.a,3)}},Hu=function(e){return Gu((r=(t=e).s,{h:t.h,s:(r*=((o=t.l)<50?o:100-o)/100)>0?2*r/(o+r)*100:0,v:o+r,a:t.a}));var t,r,o},Vi=function(e){return{h:(t=qu(e)).h,s:(i=(200-(r=t.s))*(o=t.v)/100)>0&&i<200?r*o/100/(i<=100?i:200-i)*100:0,l:i/2,a:t.a};var t,r,o,i},_p=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,xp=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,wp=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,kp=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Bn={string:[[function(e){var t=yp.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?J(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?J(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=wp.exec(e)||kp.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:Tu({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=_p.exec(e)||xp.exec(e);if(!t)return null;var r,o,i=Nu({h:(r=t[1],o=t[2],o===void 0&&(o="deg"),Number(r)*(gp[o]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return Hu(i)},"hsl"]],object:[[function(e){var t=e.r,r=e.g,o=e.b,i=e.a,s=i===void 0?1:i;return ht(t)&&ht(r)&&ht(o)?Tu({r:Number(t),g:Number(r),b:Number(o),a:Number(s)}):null},"rgb"],[function(e){var t=e.h,r=e.s,o=e.l,i=e.a,s=i===void 0?1:i;if(!ht(t)||!ht(r)||!ht(o))return null;var n=Nu({h:Number(t),s:Number(r),l:Number(o),a:Number(s)});return Hu(n)},"hsl"],[function(e){var t=e.h,r=e.s,o=e.v,i=e.a,s=i===void 0?1:i;if(!ht(t)||!ht(r)||!ht(o))return null;var n=function(u){return{h:Fu(u.h),s:Le(u.s,0,100),v:Le(u.v,0,100),a:Le(u.a)}}({h:Number(t),s:Number(r),v:Number(o),a:Number(s)});return Gu(n)},"hsv"]]},Bu=function(e,t){for(var r=0;r<t.length;r++){var o=t[r][0](e);if(o)return[o,t[r][1]]}return[null,void 0]},Ep=function(e){return typeof e=="string"?Bu(e.trim(),Bn.string):typeof e=="object"&&e!==null?Bu(e,Bn.object):[null,void 0]},Vn=function(e,t){var r=Vi(e);return{h:r.h,s:Le(r.s+100*t,0,100),l:r.l,a:r.a}},Hn=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},ju=function(e,t){var r=Vi(e);return{h:r.h,s:r.s,l:Le(r.l+100*t,0,100),a:r.a}},ns=function(){function e(t){this.parsed=Ep(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return J(Hn(this.rgba),2)},e.prototype.isDark=function(){return Hn(this.rgba)<.5},e.prototype.isLight=function(){return Hn(this.rgba)>=.5},e.prototype.toHex=function(){return t=Nn(this.rgba),r=t.r,o=t.g,i=t.b,n=(s=t.a)<1?ss(J(255*s)):"","#"+ss(r)+ss(o)+ss(i)+n;var t,r,o,i,s,n},e.prototype.toRgb=function(){return Nn(this.rgba)},e.prototype.toRgbString=function(){return t=Nn(this.rgba),r=t.r,o=t.g,i=t.b,(s=t.a)<1?"rgba("+r+", "+o+", "+i+", "+s+")":"rgb("+r+", "+o+", "+i+")";var t,r,o,i,s},e.prototype.toHsl=function(){return Vu(Vi(this.rgba))},e.prototype.toHslString=function(){return t=Vu(Vi(this.rgba)),r=t.h,o=t.s,i=t.l,(s=t.a)<1?"hsla("+r+", "+o+"%, "+i+"%, "+s+")":"hsl("+r+", "+o+"%, "+i+"%)";var t,r,o,i,s},e.prototype.toHsv=function(){return t=qu(this.rgba),{h:J(t.h),s:J(t.s),v:J(t.v),a:J(t.a,3)};var t},e.prototype.invert=function(){return He({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),He(Vn(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),He(Vn(this.rgba,-t))},e.prototype.grayscale=function(){return He(Vn(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),He(ju(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),He(ju(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?He({r:(r=this.rgba).r,g:r.g,b:r.b,a:t}):J(this.rgba.a,3);var r},e.prototype.hue=function(t){var r=Vi(this.rgba);return typeof t=="number"?He({h:t,s:r.s,l:r.l,a:r.a}):J(r.h)},e.prototype.isEqual=function(t){return this.toHex()===He(t).toHex()},e}(),He=function(e){return e instanceof ns?e:new ns(e)},Ru=[],Cp=function(e){e.forEach(function(t){Ru.indexOf(t)<0&&(t(ns,Bn),Ru.push(t))})};function $p(e,t){var r={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},o={};for(var i in r)o[r[i]]=i;var s={};e.prototype.toName=function(n){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var u,d,m=o[this.toHex()];if(m)return m;if(n?.closest){var g=this.toRgb(),f=1/0,E="black";if(!s.length)for(var b in r)s[b]=new e(r[b]).toRgb();for(var C in r){var M=(u=g,d=s[C],Math.pow(u.r-d.r,2)+Math.pow(u.g-d.g,2)+Math.pow(u.b-d.b,2));M<f&&(f=M,E=C)}return E}},t.string.push([function(n){var u=n.toLowerCase(),d=u==="transparent"?"#0000":r[u];return d?new e(d).toRgb():null},"name"])}var ur=class extends k{constructor(t,r={}){super(t,{bubbles:!0,...r})}};ur.CHANGE="change";var Pp=Object.defineProperty,Sp=Object.getOwnPropertyDescriptor,R=(e,t,r,o)=>{for(var i=o>1?void 0:o?Sp(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Pp(t,r,i),i};Cp([$p]);var Wu="EyeDropper"in window,V=class extends q("label",p){constructor(){super(...arguments),this._value="",this.inputValue="",this.hue=0,this.saturation=0,this.lightness=0,this.alpha=100,this._colord=He("hsl(0, 0%, 0%)"),this.format="hex",this.name="",this.size="medium",this.noFormatToggle=!1,this.inline=!1,this.disabled=!1,this.opacity=!1,this.readonly=!1,this.uppercase=!1,this.swatches=["#d0021b","#f5a623","#f8e71c","#8b572a","#7ed321","#417505","#bd10e0","#9013fe","#4a90e2","#50e3c2","#b8e986","#000","#444","#888","#ccc","#fff"]}set value(e){this.value!==e&&this.setColor(e),this._value=e}get value(){return this._value}connectedCallback(){super.connectedCallback(),_(this,"uui-icon"),_(this,"uui-icon-registry-essential"),_(this,"uui-input"),_(this,"uui-button"),_(this,"uui-button-group"),_(this,"uui-color-swatches"),_(this,"uui-color-swatch"),_(this,"uui-color-area"),_(this,"uui-color-slider"),_(this,"uui-popover-container")}getFormattedValue(e){let t=this.opacity?`${e}a`:e,r=this._colord.toHex(),o=r.length>7?r.substring(0,r.length-2):r,{r:i,g:s,b:n}=this._colord.toRgb(),{h:u,s:d,l:m}=this._colord.toHsl(),{v:g}=this._colord.toHsv(),f=this._colord.alpha();switch(t){case"hex":return this.setLetterCase(o);case"hexa":return this.setLetterCase(r);case"rgb":return this.setLetterCase(`rgb(${i}, ${s}, ${n})`);case"rgba":return this.setLetterCase(this._colord.toRgbString());case"hsl":return this.setLetterCase(`hsl(${u}, ${d}%, ${m}%)`);case"hsla":return this.setLetterCase(this._colord.toHslString());case"hsv":return this.setLetterCase(`hsv(${u}, ${d}%, ${m}%)`);case"hsva":return this.setLetterCase(`hsva(${u}, ${d}%, ${g}%, ${f})`);default:return""}}getBrightness(e){return A(-1*(200*e/(this.saturation-200)),0,100)}getLightness(e){return A((200-this.saturation)*e/100*5/10,0,100)}handleFormatToggle(){let e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this._syncValues()}handleAlphaChange(e){e.stopPropagation(),this._swatches?.resetSelection();let t=e.target,r={h:this.hue,s:this.saturation,l:this.lightness,a:Math.round(t.value)/100};this.setColor(r)}handleHueChange(e){e.stopPropagation(),this._swatches?.resetSelection();let r={h:e.target.value,s:this.saturation,l:this.lightness,a:this.alpha/100};this.setColor(r)}handleGridChange(e){e.stopPropagation(),this._swatches?.resetSelection();let t=e.target,r={h:this.hue,s:t.saturation,l:t.lightness,a:this.alpha/100};this.setColor(r)}handleInputChange(e){e.stopImmediatePropagation(),this._swatches?.resetSelection(),this.inputValue=this._input.value,this.setColor(this.inputValue)}handleInputKeyDown(e){e.stopImmediatePropagation(),e.key==="Enter"&&(this._swatches?.resetSelection(),this.inputValue=this._input.value,this.setColor(this.inputValue),setTimeout(()=>this._input.select()))}handleColorSwatchChange(e){e.stopImmediatePropagation();let t=e.target;this.setColor(t.value)}handleCopy(){navigator.clipboard.writeText(this._input.value).then(()=>{this._previewButton.classList.add("color-picker__preview-color--copied"),this._previewButton.addEventListener("animationend",()=>{this._previewButton.classList.remove("color-picker__preview-color--copied")})})}handleEyeDropper(){if(!Wu)return;new EyeDropper().open().then(t=>this.setColor(t.sRGBHex)).catch(()=>{})}setColor(e){if(e===this.value)return;if(!e)return this.alpha=100,this.inputValue="",this._value=e,this.dispatchEvent(new ur(ur.CHANGE)),!0;let t=new ns(e),{h:r,s:o,l:i,a:s}=t.toHsl();this.hue=r,this.saturation=o,this.lightness=i,this.alpha=this.opacity?s*100:100;let n=e;return n&&n.h&&(this.hue=n.h),this._colord=t,this._syncValues(),this.dispatchEvent(new ur(ur.CHANGE)),!0}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}getHexString(e,t,r,o=100){let i=He(`hsla(${e}, ${t}%, ${r}%, ${o/100})`);return i.isValid()?i.toHex():""}_syncValues(){this.inputValue=this.getFormattedValue(this.format),this._value=this.inputValue}_renderColorPicker(){return l`
      <div
        class=${Ui({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled})}
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
            style=${ae({"--preview-color":`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`})}
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
            .value=${Uu(this.inputValue)}
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
            ${Wu?l`<uui-button
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
      ${this.swatches.map(e=>l`<uui-color-swatch label="${e}" .value=${e}>
          </uui-color-swatch>`)}
    </uui-color-swatches>`:w}_renderPreviewButton(){return l`<button
        type="button"
        part="trigger"
        aria-label="${this.label||"Open Color picker"}"
        class=${Ui({"color-picker__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-picker__transparent-bg":!0})}
        style=${ae({"--preview-color":`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`})}
        ?disabled=${this.disabled}
        aria-haspopup="true"
        aria-expanded="false"
        popovertarget="color-picker-popover"></button>
      <uui-popover-container id="color-picker-popover">
        ${this._renderColorPicker()}
      </uui-popover-container>`}render(){return this.inline?this._renderColorPicker():this._renderPreviewButton()}};V.styles=[c`
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
    `];R([$('[part="input"]')],V.prototype,"_input",2);R([$(".color-picker__preview")],V.prototype,"_previewButton",2);R([$("#swatches")],V.prototype,"_swatches",2);R([v()],V.prototype,"inputValue",2);R([v()],V.prototype,"hue",2);R([v()],V.prototype,"saturation",2);R([v()],V.prototype,"lightness",2);R([v()],V.prototype,"alpha",2);R([v()],V.prototype,"_colord",2);R([a()],V.prototype,"value",1);R([a()],V.prototype,"format",2);R([a()],V.prototype,"name",2);R([a()],V.prototype,"size",2);R([a({attribute:"no-format-toggle",type:Boolean})],V.prototype,"noFormatToggle",2);R([a({type:Boolean,reflect:!0})],V.prototype,"inline",2);R([a({type:Boolean,reflect:!0})],V.prototype,"disabled",2);R([a({type:Boolean})],V.prototype,"opacity",2);R([a({type:Boolean,reflect:!0})],V.prototype,"readonly",2);R([a({type:Boolean})],V.prototype,"uppercase",2);R([a({attribute:!1})],V.prototype,"swatches",2);V=R([h("uui-color-picker")],V);var Op={grad:.9,turn:360,rad:360/(2*Math.PI)},dt=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},Q=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=Math.pow(10,t)),Math.round(r*e)/r+0},De=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=1),e>r?r:e>t?e:t},tc=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},Ku=function(e){return{r:De(e.r,0,255),g:De(e.g,0,255),b:De(e.b,0,255),a:De(e.a)}},jn=function(e){return{r:Q(e.r),g:Q(e.g),b:Q(e.b),a:Q(e.a,3)}},Ap=/^#([0-9a-f]{3,8})$/i,as=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},rc=function(e){var t=e.r,r=e.g,o=e.b,i=e.a,s=Math.max(t,r,o),n=s-Math.min(t,r,o),u=n?s===t?(r-o)/n:s===r?2+(o-t)/n:4+(t-r)/n:0;return{h:60*(u<0?u+6:u),s:s?n/s*100:0,v:s/255*100,a:i}},ic=function(e){var t=e.h,r=e.s,o=e.v,i=e.a;t=t/360*6,r/=100,o/=100;var s=Math.floor(t),n=o*(1-r),u=o*(1-(t-s)*r),d=o*(1-(1-t+s)*r),m=s%6;return{r:255*[o,u,n,n,d,o][m],g:255*[d,o,o,u,n,n][m],b:255*[n,n,d,o,o,u][m],a:i}},Xu=function(e){return{h:tc(e.h),s:De(e.s,0,100),l:De(e.l,0,100),a:De(e.a)}},Yu=function(e){return{h:Q(e.h),s:Q(e.s),l:Q(e.l),a:Q(e.a,3)}},Zu=function(e){return ic((r=(t=e).s,{h:t.h,s:(r*=((o=t.l)<50?o:100-o)/100)>0?2*r/(o+r)*100:0,v:o+r,a:t.a}));var t,r,o},Hi=function(e){return{h:(t=rc(e)).h,s:(i=(200-(r=t.s))*(o=t.v)/100)>0&&i<200?r*o/100/(i<=100?i:200-i)*100:0,l:i/2,a:t.a};var t,r,o,i},Ip=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Mp=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,zp=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Lp=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ju={string:[[function(e){var t=Ap.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Q(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?Q(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=zp.exec(e)||Lp.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:Ku({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=Ip.exec(e)||Mp.exec(e);if(!t)return null;var r,o,i=Xu({h:(r=t[1],o=t[2],o===void 0&&(o="deg"),Number(r)*(Op[o]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return Zu(i)},"hsl"]],object:[[function(e){var t=e.r,r=e.g,o=e.b,i=e.a,s=i===void 0?1:i;return dt(t)&&dt(r)&&dt(o)?Ku({r:Number(t),g:Number(r),b:Number(o),a:Number(s)}):null},"rgb"],[function(e){var t=e.h,r=e.s,o=e.l,i=e.a,s=i===void 0?1:i;if(!dt(t)||!dt(r)||!dt(o))return null;var n=Xu({h:Number(t),s:Number(r),l:Number(o),a:Number(s)});return Zu(n)},"hsl"],[function(e){var t=e.h,r=e.s,o=e.v,i=e.a,s=i===void 0?1:i;if(!dt(t)||!dt(r)||!dt(o))return null;var n=function(u){return{h:tc(u.h),s:De(u.s,0,100),v:De(u.v,0,100),a:De(u.a)}}({h:Number(t),s:Number(r),v:Number(o),a:Number(s)});return ic(n)},"hsv"]]},Qu=function(e,t){for(var r=0;r<t.length;r++){var o=t[r][0](e);if(o)return[o,t[r][1]]}return[null,void 0]},Dp=function(e){return typeof e=="string"?Qu(e.trim(),Ju.string):typeof e=="object"&&e!==null?Qu(e,Ju.object):[null,void 0]},Rn=function(e,t){var r=Hi(e);return{h:r.h,s:De(r.s+100*t,0,100),l:r.l,a:r.a}},Wn=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},ec=function(e,t){var r=Hi(e);return{h:r.h,s:r.s,l:De(r.l+100*t,0,100),a:r.a}},Fn=function(){function e(t){this.parsed=Dp(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return Q(Wn(this.rgba),2)},e.prototype.isDark=function(){return Wn(this.rgba)<.5},e.prototype.isLight=function(){return Wn(this.rgba)>=.5},e.prototype.toHex=function(){return t=jn(this.rgba),r=t.r,o=t.g,i=t.b,n=(s=t.a)<1?as(Q(255*s)):"","#"+as(r)+as(o)+as(i)+n;var t,r,o,i,s,n},e.prototype.toRgb=function(){return jn(this.rgba)},e.prototype.toRgbString=function(){return t=jn(this.rgba),r=t.r,o=t.g,i=t.b,(s=t.a)<1?"rgba("+r+", "+o+", "+i+", "+s+")":"rgb("+r+", "+o+", "+i+")";var t,r,o,i,s},e.prototype.toHsl=function(){return Yu(Hi(this.rgba))},e.prototype.toHslString=function(){return t=Yu(Hi(this.rgba)),r=t.h,o=t.s,i=t.l,(s=t.a)<1?"hsla("+r+", "+o+"%, "+i+"%, "+s+")":"hsl("+r+", "+o+"%, "+i+"%)";var t,r,o,i,s},e.prototype.toHsv=function(){return t=rc(this.rgba),{h:Q(t.h),s:Q(t.s),v:Q(t.v),a:Q(t.a,3)};var t},e.prototype.invert=function(){return pt({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),pt(Rn(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),pt(Rn(this.rgba,-t))},e.prototype.grayscale=function(){return pt(Rn(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),pt(ec(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),pt(ec(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?pt({r:(r=this.rgba).r,g:r.g,b:r.b,a:t}):Q(this.rgba.a,3);var r},e.prototype.hue=function(t){var r=Hi(this.rgba);return typeof t=="number"?pt({h:t,s:r.s,l:r.l,a:r.a}):Q(r.h)},e.prototype.isEqual=function(t){return this.toHex()===pt(t).toHex()},e}(),pt=function(e){return e instanceof Fn?e:new Fn(e)},Bi=class extends k{constructor(t,r={}){super(t,{bubbles:!0,...r})}};Bi.CHANGE="change";var Up=Object.defineProperty,Tp=Object.getOwnPropertyDescriptor,Ye=(e,t,r,o)=>{for(var i=o>1?void 0:o?Tp(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Up(t,r,i),i},Ue=class extends q("label",p){constructor(){super(...arguments),this.type="hue",this.color="",this.min=0,this.max=100,this.precision=1,this.vertical=!1,this.value=0,this.readonly=!1,this.disabled=!1}willUpdate(e){if(e.has("type")&&(this.type==="hue"?this.max=this.max??360:this.type==="saturation"?this.max=this.max??100:this.type==="lightness"?this.max=this.max??100:this.type==="opacity"&&(this.max=this.max??100),this.precision=this.precision??1,this.color)){let t=new Fn(this.color),{h:r,s:o,l:i}=t.toHsl(),s=this.type==="saturation"?`linear-gradient(to ${this.vertical?"top":"right"}, hsl(${r}, 0%, ${i}%), hsl(${r}, 100%, ${i}%))`:this.type==="lightness"?`linear-gradient(to ${this.vertical?"top":"right"}, hsl(${r}, ${o}%, 0%), hsl(${r}, ${o}%, 100%))`:null;this.style.setProperty("--uui-slider-background-image",s)}}firstUpdated(){this.container=this.shadowRoot.querySelector("#color-slider"),this.handle=this.container.querySelector("#color-slider__handle")}handleDrag(e){if(this.disabled||this.readonly||!this.container||!this.handle)return;let{width:t,height:r}=this.container.getBoundingClientRect();this.handle.focus(),e.preventDefault(),Fo(this.container,{onMove:(o,i)=>{this.vertical?this.value=Pn(A(i/r*this.max,this.min,this.max),this.min,this.max):this.value=A(o/t*this.max,this.min,this.max),this.syncValues()},initialEvent:e})}handleClick(e){this.disabled||this.readonly||(this.value=this.getValueFromMousePosition(e),this.syncValues())}handleKeyDown(e){let t=e.shiftKey?10:1;e.key==="ArrowLeft"?(e.preventDefault(),this.value=A(this.value-t,this.min,this.max),this.syncValues()):e.key==="ArrowRight"?(e.preventDefault(),this.value=A(this.value+t,this.min,this.max),this.syncValues()):e.key==="ArrowUp"?(e.preventDefault(),this.value=A(this.value+t,this.min,this.max),this.syncValues()):e.key==="ArrowDown"?(e.preventDefault(),this.value=A(this.value-t,this.min,this.max),this.syncValues()):e.key==="Home"?(e.preventDefault(),this.value=this.min,this.syncValues()):e.key==="End"&&(e.preventDefault(),this.value=this.max,this.syncValues())}getValueFromMousePosition(e){return this.vertical?this.getValueFromYCoordinate(e.clientY):this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.vertical?this.getValueFromYCoordinate(e.touches[0].clientY):this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){let{left:t,width:r}=this.container.getBoundingClientRect();return A(this.roundToPrecision((e-t)/r*this.max),this.min,this.max)}getValueFromYCoordinate(e){let{top:t,height:r}=this.container.getBoundingClientRect();return A(this.roundToPrecision((e-t)/r*this.max),this.min,this.max)}roundToPrecision(e){let t=1/this.precision;return Math.ceil(e*t)/t}syncValues(){this.dispatchEvent(new Bi(Bi.CHANGE))}get cssPropCurrentValue(){return this.value===0?this.vertical?100:0:100/(this.vertical?this.max/Pn(this.value,this.min,this.max):this.max/this.value)}render(){return l` <div
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
              style=${ae({backgroundImage:`linear-gradient(to ${this.vertical?"top":"right"},
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
      ${Math.round(this.value)}`}};Ue.styles=[c`
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
    `];Ye([a({reflect:!0})],Ue.prototype,"type",2);Ye([a()],Ue.prototype,"color",2);Ye([a({type:Number})],Ue.prototype,"min",2);Ye([a({type:Number})],Ue.prototype,"max",2);Ye([a({type:Number})],Ue.prototype,"precision",2);Ye([a({type:Boolean,reflect:!0})],Ue.prototype,"vertical",2);Ye([a()],Ue.prototype,"value",2);Ye([a({type:Boolean,reflect:!0})],Ue.prototype,"readonly",2);Ye([a({type:Boolean,reflect:!0})],Ue.prototype,"disabled",2);Ue=Ye([h("uui-color-slider")],Ue);var ji=(e,t)=>{let r=e._$AN;if(r===void 0)return!1;for(let o of r)o._$AO?.(t,!1),ji(o,t);return!0},ls=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while(r?.size===0)},oc=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),Hp(t)}};function Np(e){this._$AN!==void 0?(ls(this),this._$AM=e,oc(this)):this._$AM=e}function Vp(e,t=!1,r=0){let o=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(o))for(let s=r;s<o.length;s++)ji(o[s],!1),ls(o[s]);else o!=null&&(ji(o,!1),ls(o));else ji(this,e)}var Hp=e=>{e.type==ie.CHILD&&(e._$AP??(e._$AP=Vp),e._$AQ??(e._$AQ=Np))},us=class extends ye{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,o){super._$AT(t,r,o),oc(this),this.isConnected=t._$AU}_$AO(t,r=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),r&&(ji(this,t),ls(this))}setValue(t){if(rs(this._$Ct))this._$Ct._$AI(t,this);else{let r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}};var cs=()=>new Gn,Gn=class{},qn=new WeakMap,jr=ke(class extends us{render(e){return w}update(e,[t]){let r=t!==this.G;return r&&this.G!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),w}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){let t=this.ht??globalThis,r=qn.get(t);r===void 0&&(r=new WeakMap,qn.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?qn.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Bp=Object.defineProperty,jp=Object.getOwnPropertyDescriptor,sc=e=>{throw TypeError(e)},Rr=(e,t,r,o)=>{for(var i=o>1?void 0:o?jp(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Bp(t,r,i),i},Rp=(e,t,r)=>t.has(e)||sc("Cannot "+r),Wp=(e,t,r)=>t.has(e)?sc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Fp=(e,t,r)=>(Rp(e,t,"access private method"),r),Kn,nc,Mt=class extends q("label",Oe(Ke(p))){constructor(){super(),Wp(this,Kn),this.disabled=!1,this.readonly=!1,this.showLabel=!1,this.addEventListener("click",this._setAriaAttributes)}get value(){return this._value??""}set value(e){let t=this._value;this._value=e,this.requestUpdate("value",t)}get color(){return this._color}set color(e){let t=this._color;this._color=e,this.requestUpdate("color",t)}_setAriaAttributes(){this.selectable&&this.setAttribute("aria-checked",this.selected.toString())}firstUpdated(){this._setAriaAttributes()}willUpdate(e){(e.has("disabled")||e.has("readonly"))&&this.selectable&&(this.selectable=!this.disabled&&!this.readonly,this.deselectable=!this.disabled&&!this.readonly),(e.has("selectable")||e.has("selected"))&&this._setAriaAttributes()}focus(e){this.selectableTarget?.focus(e)}render(){return l`
      <button
        id="swatch"
        ${jr(Fp(this,Kn,nc))}
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
            ${Ot}
          </div>
        </div>
        ${this._renderWithLabel()}
      </button>
    `}_renderWithLabel(){return this.showLabel?l`<div class="color-swatch__label">
      <strong>${this.renderLabel()}</strong>
      ${this.value}
    </div>`:w}};Kn=new WeakSet;nc=function(e){this.selectableTarget=e||this};Mt.styles=[c`
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
    `];Rr([a()],Mt.prototype,"value",1);Rr([a()],Mt.prototype,"color",1);Rr([a({type:Boolean,reflect:!0})],Mt.prototype,"disabled",2);Rr([a({type:Boolean,reflect:!0})],Mt.prototype,"readonly",2);Rr([a({type:Boolean,attribute:"show-label",reflect:!0})],Mt.prototype,"showLabel",2);Mt=Rr([h("uui-color-swatch")],Mt);var cr=class extends k{constructor(t,r={}){super(t,{bubbles:!0,...r})}};cr.CHANGE="change";var qp=Object.defineProperty,Gp=Object.getOwnPropertyDescriptor,Ri=(e,t,r,o)=>{for(var i=o>1?void 0:o?Gp(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&qp(t,r,i),i},hr=class extends q("label",p){constructor(){super(),this.value="",this.disabled=!1,this.readonly=!1,this._onSelected=e=>{let t=e.target;this._swatches.includes(t)&&(this._selectedElement&&(this._selectedElement.selected=!1,this._selectedElement.active=!1,this._selectedElement=void 0),this._selectedElement=t,this._activeElement=this._selectedElement,this.value=this._selectedElement.value||"",this.dispatchEvent(new cr(cr.CHANGE)))},this._onDeselected=e=>{let t=e.target;this._swatches.includes(t)&&(this._activeElement===t&&(this._activeElement=void 0),this._selectedElement===t&&(this._selectedElement.selected=!1,this._selectedElement.active=!1,this._selectedElement=void 0,this.value="",this.dispatchEvent(new cr(cr.CHANGE))))},this.addEventListener(Ae.SELECTED,this._onSelected),this.addEventListener(Ae.DESELECTED,this._onDeselected)}get _activeElement(){return this.__activeElement}set _activeElement(e){this.__activeElement&&(this.__activeElement.active=!1),e&&(e.active=!0,this.__activeElement=e)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup"),this.setAttribute("aria-label",this.label)}willUpdate(e){e.has("label")&&this.setAttribute("aria-label",this.label)}_handleSlotChange(){!this._swatches||this._swatches.length===0||this._swatches.forEach(e=>{e.setAttribute("aria-checked","false"),e.setAttribute("role","radio"),this.disabled?e.setAttribute("disabled",""):e.setAttribute("selectable","selectable"),this.readonly&&e.setAttribute("readonly",""),this.value!==""&&e.value===this.value&&(e.selected=!0,e.setAttribute("aria-checked","true"),this._selectedElement=e,this._activeElement=this._selectedElement)})}resetSelection(){this._swatches.forEach(e=>{e.selected=!1,e.active=!1,e.selectable=!e.disabled}),this._activeElement=void 0,this._selectedElement=void 0,this.value=""}render(){return l`<slot @slotchange=${this._handleSlotChange}></slot>`}};hr.styles=[c`
      :host {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
      }
    `];Ri([a()],hr.prototype,"value",2);Ri([a({type:Boolean,reflect:!0})],hr.prototype,"disabled",2);Ri([a({type:Boolean,reflect:!0})],hr.prototype,"readonly",2);Ri([de({selector:"uui-color-swatch"})],hr.prototype,"_swatches",2);hr=Ri([h("uui-color-swatches")],hr);var fe=class extends k{constructor(t,r={}){super(t,{bubbles:!0,...r})}};fe.CHANGE="change";fe.INNER_SLOT_CHANGE="inner-slot-change";var Kp=Object.defineProperty,Xp=Object.getOwnPropertyDescriptor,lc=e=>{throw TypeError(e)},Lt=(e,t,r,o)=>{for(var i=o>1?void 0:o?Xp(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Kp(t,r,i),i},Yp=(e,t,r)=>t.has(e)||lc("Cannot "+r),Zp=(e,t,r)=>t.has(e)?lc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),ac=(e,t,r)=>(Yp(e,t,"access private method"),r),hs,Xn,Ze=class extends p{constructor(){super(...arguments),Zp(this,hs),this.displayValue="",this._value="",this._activeElementValue=null,this._onSlotChange=()=>{ac(this,hs,Xn).call(this),this._updateSelection(),this.dispatchEvent(new fe(fe.INNER_SLOT_CHANGE))},this._onSelected=e=>{this._selectedElement&&(this._selectedElement.selected=!1,this._selectedElement.active=!1,this._selectedElement=void 0),this._selectedElement=e.composedPath()[0],this.value=this._selectedElement.value||"",this.displayValue=this._selectedElement.displayValue||"",this.dispatchEvent(new fe(fe.CHANGE))},this._onDeselected=e=>{let t=e.composedPath()[0];this._selectedElement===t&&(this.value="",this.displayValue="",this.dispatchEvent(new fe(fe.CHANGE)))},this._moveIndex=e=>{let t=Math.min(Math.max(this._getActiveIndex+e,0),this._options.length-1);this._goToIndex(t)},this._onKeyDown=e=>{if(!(this._options.length<=0))switch(e.key){case"ArrowUp":e.preventDefault(),e.ctrlKey?this._moveIndex(-10):this._moveIndex(-1);break;case"ArrowDown":e.preventDefault(),e.ctrlKey?this._moveIndex(10):this._moveIndex(1);break;case"Home":{e.preventDefault(),this._goToIndex(0);break}case"Enter":{e.preventDefault(),this._getActiveElement?.click();break}case"End":{e.preventDefault(),this._goToIndex(this._options.length-1);break}}}}get value(){return this._value}set value(e){if(this._value===e)return;let t=this._value;this._value=e,this._updateSelection(),this.requestUpdate("value",t)}get for(){return this._for}set for(e){this._for&&this._for.removeEventListener("keydown",this._onKeyDown),this._for=e,this._for&&this._for.addEventListener("keydown",this._onKeyDown)}connectedCallback(){super.connectedCallback(),this._for||(this._for=this),this.addEventListener(Ae.SELECTED,this._onSelected),this.addEventListener(Ae.DESELECTED,this._onDeselected)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),this.removeEventListener(Ae.SELECTED,this._onSelected),this.removeEventListener(Ae.DESELECTED,this._onDeselected)}_updateSelection(){this.displayValue="";for(let e of this._options)e.value===this._value?(this.displayValue=e.displayValue||"",e.selected=!0):e.selected=!1}get _getActiveIndex(){return this._activeElementValue===null?-1:this._options.findIndex(e=>e.value===this._activeElementValue)}get _getActiveElement(){return this._activeElementValue===null?null:this._options.find(e=>e.value===this._activeElementValue)}_goToIndex(e){if(this._options.length===0)return;e=Math.min(Math.max(e,0),this._options.length-1);let t=this._options[e];this._activeElementValue=t.value,ac(this,hs,Xn).call(this),t&&t.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})}render(){return l` <slot @slotchange=${this._onSlotChange}></slot> `}};hs=new WeakSet;Xn=function(){for(let t=0;t<this._activeOptions.length;t++)this._activeOptions[t].active=!1;let e=this._getActiveElement;e?e.active=!0:this._goToIndex(0)};Ze.styles=[c`
      :host {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
      }
    `];Lt([a()],Ze.prototype,"value",1);Lt([a({type:String})],Ze.prototype,"displayValue",2);Lt([a({attribute:!1})],Ze.prototype,"for",1);Lt([de({flatten:!0,selector:"uui-combobox-list-option:not([disabled])"})],Ze.prototype,"_options",2);Lt([de({flatten:!0,selector:"uui-combobox-list-option[active]"})],Ze.prototype,"_activeOptions",2);Lt([v()],Ze.prototype,"_value",2);Lt([v()],Ze.prototype,"_activeElementValue",2);Ze=Lt([h("uui-combobox-list")],Ze);var Jp=Object.defineProperty,Qp=Object.getOwnPropertyDescriptor,Wr=(e,t,r,o)=>{for(var i=o>1?void 0:o?Qp(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Jp(t,r,i),i},zt=class extends Oe(Ke(p)){constructor(){super(),this._disabled=!1,this._displayValue="",this.selectable=!0,this.deselectable=!1}get value(){return this._value?this._value:this.textContent?.trim()||""}set value(e){let t=this._value;this._value=e,this.requestUpdate("value",t)}get displayValue(){return this._displayValue?this._displayValue:this.textContent?.trim()||""}set displayValue(e){let t=this._displayValue;this._displayValue=e,this.requestUpdate("displayValue",t)}get disabled(){return this._disabled}set disabled(e){let t=this._disabled;this._disabled=e,this.selectable=!this._disabled,this.requestUpdate("disabled",t)}render(){return l`<slot></slot>`}};zt.styles=[c`
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
    `];Wr([v()],zt.prototype,"_disabled",2);Wr([v()],zt.prototype,"_displayValue",2);Wr([a({type:String})],zt.prototype,"value",1);Wr([a({type:String,attribute:"display-value"})],zt.prototype,"displayValue",1);Wr([a({type:Boolean,reflect:!0})],zt.prototype,"disabled",1);zt=Wr([h("uui-combobox-list-option")],zt);var _e=class extends k{constructor(t,r={}){super(t,{bubbles:!0,...r})}};_e.SEARCH="search";_e.CHANGE="change";var ef=Object.defineProperty,tf=Object.getOwnPropertyDescriptor,uc=e=>{throw TypeError(e)},ue=(e,t,r,o)=>{for(var i=o>1?void 0:o?tf(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&ef(t,r,i),i},ea=(e,t,r)=>t.has(e)||uc("Cannot "+r),S=(e,t,r)=>(ea(e,t,"read from private field"),r?r.call(e):t.get(e)),oe=(e,t,r)=>t.has(e)?uc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),cc=(e,t,r,o)=>(ea(e,t,"write to private field"),t.set(e,r),r),ds=(e,t,r)=>(ea(e,t,"access private method"),r),xe,Fr,Gr,hc,Wi,ys,ps,fs,Yn,_s,xs,Zn,ms,qr,Jn,vs,bs,Qn,gs,ee=class extends G(p,""){constructor(){super(...arguments),oe(this,Gr),this.closeLabel="Close",this.disabled=!1,this.hideExpandSymbol=!1,this.readonly=!1,this.placeholder="",oe(this,xe),oe(this,Fr),this._displayValue="",this._search="",this._isPhone=!1,this._isOpen=!1,oe(this,Wi,()=>{this._isPhone=S(this,Fr).matches}),oe(this,ps,()=>requestAnimationFrame(()=>this._input.focus())),oe(this,fs,()=>requestAnimationFrame(()=>{this.shadowRoot?.activeElement||S(this,qr).call(this)})),oe(this,Yn,e=>{e.preventDefault(),e.stopImmediatePropagation(),this.search=e.target.value,this.dispatchEvent(new _e(_e.SEARCH)),S(this,ms).call(this)}),oe(this,_s,()=>{this.value&&this.value!==S(this,xe)?.value&&ds(this,Gr,ys).call(this)}),oe(this,xs,()=>{this.value=S(this,xe)?.value||"",this.search=this.value?this.search:"",S(this,qr).call(this),this.dispatchEvent(new _e(_e.CHANGE))}),oe(this,Zn,()=>{this.readonly||(this.open=!this.open)}),oe(this,ms,()=>{this.open||this.readonly||(this.open=!0)}),oe(this,qr,()=>{this.open&&(this.open=!1,this.search="",this._input.value=this._displayValue,this.dispatchEvent(new _e(_e.SEARCH)))}),oe(this,Jn,e=>{this.open===!1&&e.key==="Enter"&&(e.preventDefault(),e.stopImmediatePropagation()),(e.key==="ArrowUp"||e.key==="ArrowDown")&&S(this,ms).call(this),(e.key==="Escape"||e.key==="Enter")&&S(this,qr).call(this)}),oe(this,vs,e=>{e.key&&e.key!=="Enter"||(e.preventDefault(),e.stopImmediatePropagation(),this.value="",this.search="",this._input.value=this._displayValue,this._input.focus(),this.dispatchEvent(new _e(_e.SEARCH)),this.dispatchEvent(new _e(_e.CHANGE)))}),oe(this,bs,()=>l` <uui-input
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
      @click=${S(this,Zn)}
      @input=${S(this,Yn)}
      @keydown=${S(this,Jn)}>
      <slot name="input-prepend" slot="prepend"></slot>
      ${S(this,Qn).call(this)}
      ${this.hideExpandSymbol?w:l`<div id="expand-symbol-wrapper" slot="append">
            <uui-symbol-expand .open=${this._isOpen}></uui-symbol-expand>
          </div>`}
      <slot name="input-append" slot="append"></slot>
    </uui-input>`),oe(this,Qn,()=>this.disabled?w:this.readonly?w:l`<uui-button
      id="clear-button"
      @click=${S(this,vs)}
      @keydown=${S(this,vs)}
      label="clear"
      slot="append"
      compact
      style="height: 100%;"
      tabindex=${this.value||this.search?"":"-1"}
      class=${this.value||this.search?"visible":""}>
      <uui-icon name="remove" .fallback=${zr.strings[0]}></uui-icon>
    </uui-button>`),oe(this,gs,()=>l`<div id="dropdown">
      <uui-scroll-container tabindex="-1" id="scroll-container">
        <slot @slotchange=${ds(this,Gr,hc)}></slot>
      </uui-scroll-container>
    </div>`)}get value(){return super.value}set value(e){super.value=e,typeof e=="string"&&ds(this,Gr,ys).call(this)}get search(){return this._search}set search(e){if(this.search===e)return;let t=this._search;this._search=e,this.requestUpdate("search",t)}get open(){return this._isOpen}set open(e){let t=e;this._isOpen=e;let r=this._comboboxPopoverElement;if(r)if(e){let o=this._input.offsetWidth;r.style.setProperty("--popover-width",`${o}px`),r.showPopover()}else r.hidePopover();this.requestUpdate("open",t)}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",S(this,fs)),this.addEventListener("mousedown",S(this,ps)),cc(this,Fr,window.matchMedia("(max-width: 600px)")),S(this,Wi).call(this),S(this,Fr).addEventListener("change",S(this,Wi)),_(this,"uui-icon"),_(this,"uui-input"),_(this,"uui-button"),_(this,"uui-combobox-list"),_(this,"uui-scroll-container"),_(this,"uui-popover-container"),_(this,"uui-symbol-expand")}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",S(this,fs)),this.removeEventListener("mousedown",S(this,ps)),S(this,Fr).removeEventListener("change",S(this,Wi))}getFormElement(){return this._input}async focus(){await this.updateComplete,this._input.focus()}async blur(){await this.updateComplete,this._input.blur()}async click(){await this.updateComplete,this._input.click()}render(){return this._isPhone&&this.open?l` <div id="phone-wrapper">
        <uui-button label="close" look="primary" @click=${S(this,qr)}>
          ${this.closeLabel}
        </uui-button>
        ${S(this,bs).call(this)} ${S(this,gs).call(this)}
      </div>`:l`
        ${S(this,bs).call(this)}
        <uui-popover-container
          id="combobox-popover"
          popover="manual"
          placement="bottom-end">
          ${S(this,gs).call(this)}
        </uui-popover-container>
      `}};xe=new WeakMap;Fr=new WeakMap;Gr=new WeakSet;hc=function(){S(this,xe)&&(S(this,xe).removeEventListener(fe.CHANGE,S(this,xs)),S(this,xe).removeEventListener(fe.INNER_SLOT_CHANGE,S(this,_s)));let e=this._comboboxListElements?.[0];e&&(cc(this,xe,e),S(this,xe).for=this,S(this,xe).addEventListener(fe.CHANGE,S(this,xs)),S(this,xe).addEventListener(fe.INNER_SLOT_CHANGE,S(this,_s))),this.updateComplete.then(()=>{ds(this,Gr,ys).call(this)})};Wi=new WeakMap;ys=function(){S(this,xe)&&(S(this,xe).value=this.value,requestAnimationFrame(()=>this._displayValue=S(this,xe).displayValue||""))};ps=new WeakMap;fs=new WeakMap;Yn=new WeakMap;_s=new WeakMap;xs=new WeakMap;Zn=new WeakMap;ms=new WeakMap;qr=new WeakMap;Jn=new WeakMap;vs=new WeakMap;bs=new WeakMap;Qn=new WeakMap;gs=new WeakMap;ee.styles=[c`
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
    `];ue([a({attribute:"value",reflect:!0})],ee.prototype,"value",1);ue([a({type:String})],ee.prototype,"search",1);ue([a({type:Boolean})],ee.prototype,"open",1);ue([a({type:String,attribute:"close-label"})],ee.prototype,"closeLabel",2);ue([a({type:Boolean,reflect:!0})],ee.prototype,"disabled",2);ue([a({type:Boolean,reflect:!1,attribute:"hide-expand-symbol"})],ee.prototype,"hideExpandSymbol",2);ue([a({type:Boolean,reflect:!0})],ee.prototype,"readonly",2);ue([a()],ee.prototype,"placeholder",2);ue([$("#combobox-input")],ee.prototype,"_input",2);ue([$("#combobox-popover")],ee.prototype,"_comboboxPopoverElement",2);ue([de({flatten:!0,selector:"uui-combobox-list"})],ee.prototype,"_comboboxListElements",2);ue([v()],ee.prototype,"_displayValue",2);ue([v()],ee.prototype,"_search",2);ue([v()],ee.prototype,"_isPhone",2);ue([v()],ee.prototype,"_isOpen",2);ee=ue([h("uui-combobox")],ee);var rf=Object.defineProperty,of=Object.getOwnPropertyDescriptor,ta=(e,t,r,o)=>{for(var i=o>1?void 0:o?of(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&rf(t,r,i),i},Fi=class extends p{constructor(){super(...arguments),this.headline=null,this._headlineSlotHasContent=!1,this._headlineSlotChanged=e=>{this._headlineSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0}}renderHeadline(){return l` <h3
      style=${this._headlineSlotHasContent||this.headline!==null?"":"display: none"}>
      ${this.headline}
      <slot name="headline" @slotchange=${this._headlineSlotChanged}></slot>
    </h3>`}renderContent(){return l`<slot></slot>`}renderActions(){return l`<slot id="actions" name="actions"></slot>`}render(){return l`${this.renderHeadline()} ${this.renderContent()}
    ${this.renderActions()} `}};Fi.styles=[c`
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
    `];ta([a({type:String})],Fi.prototype,"headline",2);ta([v()],Fi.prototype,"_headlineSlotHasContent",2);Fi=ta([h("uui-dialog-layout")],Fi);var sf=Object.getOwnPropertyDescriptor,nf=(e,t,r,o)=>{for(var i=o>1?void 0:o?sf(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=n(i)||i);return i},ra=class extends p{render(){return l`<slot></slot>`}};ra.styles=[c`
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
    `];ra=nf([h("uui-dialog")],ra);var af=Object.defineProperty,lf=Object.getOwnPropertyDescriptor,dc=(e,t,r,o)=>{for(var i=o>1?void 0:o?lf(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&af(t,r,i),i},ws=class extends p{constructor(){super(...arguments),this.error=!1}render(){return l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      id="upload-icon">
      <path
        d=${this.error?"M254.501 38.16c-120.308 0-217.838 97.53-217.838 217.838 0 120.31 97.53 217.838 217.838 217.838 120.31 0 217.838-97.528 217.838-217.838 0-120.308-97.528-217.838-217.838-217.838zm151.667 217.838c0 29.861-8.711 57.708-23.671 81.209L173.293 128.002c23.499-14.961 51.345-23.67 81.208-23.67 83.629.001 151.667 68.037 151.667 151.666zm-303.332 0c0-29.859 8.71-57.707 23.67-81.204l209.201 209.201c-23.498 14.96-51.346 23.671-81.206 23.671-83.632 0-151.665-68.04-151.665-151.668z":"M206.491 364.184h99.013V223.676h92.922L255.997 51.111 113.575 223.676h92.916zM85.043 398.311h341.912v62.578H85.043z"} />
    </svg> `}};ws.styles=[c`
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
    `];dc([a({type:Boolean,reflect:!0})],ws.prototype,"error",2);ws=dc([h("uui-symbol-file-dropzone")],ws);var dr=class extends k{constructor(t,r={}){super(t,{bubbles:!0,...r})}};dr.CHANGE="change";var uf=Object.defineProperty,cf=Object.getOwnPropertyDescriptor,Kr=(e,t,r,o)=>{for(var i=o>1?void 0:o?cf(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&uf(t,r,i),i},Dt=class extends q("",p){constructor(){super(),this._acceptedFileExtensions=[],this._acceptedMimeTypes=[],this._accept="",this.disallowFolderUpload=!1,this.multiple=!1,this.addEventListener("dragenter",this._onDragEnter,!1),this.addEventListener("dragleave",this._onDragLeave,!1),this.addEventListener("dragover",this._onDragOver,!1),this.addEventListener("drop",this._onDrop,!1)}set accept(e){if(e){let r=[],o=[];e.split(",").forEach(i=>{i=i.trim().toLowerCase(),/[a-z]+\/[a-z*]/s.test(i)?r.push(i):o.push(i.replace(/^\./,""))}),this._acceptedMimeTypes=r,this._acceptedFileExtensions=o}else this._acceptedMimeTypes=[],this._acceptedFileExtensions=[];let t=this._accept;this._accept=e,this.requestUpdate("accept",t)}get accept(){return this._accept}browse(){this._input.click()}async _getAllEntries(e){let t=[...e],r=[],o=[];for(let i of t){if(i?.kind!=="file")continue;let s=this._getEntry(i);if(s)if(s.isDirectory){if(!this.disallowFolderUpload&&this.multiple){let n=await this._mkdir(s);r.push(n)}}else{let n=i.getAsFile();if(!n)continue;this._isAccepted(n)&&o.push(n)}}return{files:o,folders:r}}_getEntry(e){let t=null;return"webkitGetAsEntry"in e?t=e.webkitGetAsEntry():"getAsEntry"in e&&(t=e.getAsEntry()),t}async _mkdir(e){let t=e.createReader(),r=[],o=[],i=n=>new Promise((u,d)=>{n.readEntries(async m=>{if(!m.length){u();return}for(let g of m)if(g.isFile){let f=await this._getAsFile(g);this._isAccepted(f)&&o.push(f)}else if(g.isDirectory){let f=await this._mkdir(g);r.push(f)}await i(n),u()},d)});return await i(t),{folderName:e.name,folders:r,files:o}}_isAccepted(e){if(this._acceptedFileExtensions.length===0&&this._acceptedMimeTypes.length===0)return!0;let t=e.type.toLowerCase(),r=e.name.split(".").pop();if(r&&this._acceptedFileExtensions.includes(r.toLowerCase()))return!0;for(let o of this._acceptedMimeTypes){if(t===o)return!0;if(o.endsWith("/*")&&t.startsWith(o.replace("*","")))return!0}return!1}async _getAsFile(e){return new Promise((t,r)=>e.file(t,r))}async _onDrop(e){e.preventDefault(),this._dropzone.classList.remove("hover");let t=e.dataTransfer?.items;if(t){let r=await this._getAllEntries(t);if(this.multiple===!1&&r.files.length&&(r.files=[r.files[0]],r.folders=[]),!r.files.length&&!r.folders.length)return;this.dispatchEvent(new dr(dr.CHANGE,{detail:r}))}}_onDragOver(e){e.preventDefault()}_onDragEnter(e){this._dropzone.classList.add("hover"),e.preventDefault()}_onDragLeave(e){this._dropzone.classList.remove("hover"),e.preventDefault()}_onFileInputChange(){let e=this._input.files?Array.from(this._input.files):[];this.multiple===!1&&e.length>1&&e.splice(1,e.length-1);let t=e.filter(r=>this._isAccepted(r));t.length&&this.dispatchEvent(new dr(dr.CHANGE,{detail:{files:t,folders:[]}}))}render(){return l`
      <div id="dropzone">
        <uui-symbol-file-dropzone id="symbol"></uui-symbol-file-dropzone>
        ${this.renderLabel()}
        <input
          @click=${e=>e.stopImmediatePropagation()}
          id="input"
          type="file"
          accept=${this.accept}
          ?multiple=${this.multiple}
          @change=${this._onFileInputChange}
          aria-label="${this.label}" />
        <slot></slot>
      </div>
    `}};Dt.styles=[c`
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
    `];Kr([$("#input")],Dt.prototype,"_input",2);Kr([$("#dropzone")],Dt.prototype,"_dropzone",2);Kr([a({type:String})],Dt.prototype,"accept",1);Kr([a({type:Boolean,reflect:!0,attribute:"disallow-folder-upload"})],Dt.prototype,"disallowFolderUpload",2);Kr([a({type:Boolean})],Dt.prototype,"multiple",2);Dt=Kr([h("uui-file-dropzone")],Dt);var ia=class{static humanFileSize(t,r=!1,o=1){let i=r?1e3:1024;if(Math.abs(t)<i)return t+" B";let s=r?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],n=-1,u=10**o;do t/=i,++n;while(Math.round(Math.abs(t)*u)/u>=i&&n<s.length-1);return t.toFixed(o)+" "+s[n]}},hf=Object.defineProperty,df=Object.getOwnPropertyDescriptor,Je=(e,t,r,o)=>{for(var i=o>1?void 0:o?df(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&hf(t,r,i),i},Te=class extends p{constructor(){super(...arguments),this._name="",this._url="",this._extension="",this._src="",this._size=0,this._isDirectory=!1}get file(){return this._file}set file(e){let t=this._file;e instanceof File&&(this._name=e.name.split(".")[0],this._extension=e.name.split(".")[1],this._isDirectory=!1,this._size=e.size,this._isFileAnImage(e)&&(this._isImage=!0,this._getThumbnail(e).then(r=>{this._src=r})),this.requestUpdate("file",t))}connectedCallback(){super.connectedCallback(),_(this,"uui-symbol-file-thumbnail"),_(this,"uui-symbol-folder"),_(this,"uui-symbol-file")}_openSource(){window.open(this._url,"_blank")}_fileTypeTemplate(){return this._isDirectory?l`<uui-symbol-folder id="file-symbol"></uui-symbol-folder>`:this._isImage?l`<uui-symbol-file-thumbnail
        .src=${this._src}
        .alt=${this._name}
        id="file-symbol"></uui-symbol-file-thumbnail>`:l`<uui-symbol-file
      id="file-symbol"
      .type=${this._extension}></uui-symbol-file>`}_renderLongName(){let t=this._name.substring(0,this._name.length-6),r=this._name.substring(this._name.length-6,this._name.length);return l`
      <span
        id="file-name"
        class=${this._url?"has-source":""}
        @click=${()=>this._url?this._openSource():""}
        @keydown=${()=>""}>
        <span id="file-name-start">${t}</span>
        <span id="file-name-end">${r}</span>
      </span>
    `}_isFileAnImage(e){return e?e.type.split("/")[0]==="image":!1}async _getThumbnail(e){return await new Promise(t=>{let r=new FileReader;r.readAsDataURL(e),r.onload=()=>{t(r.result)}})}render(){return l`
      <slot id="actions" name="actions"></slot>
      ${this._fileTypeTemplate()}
      <div id="file-info">
        ${this._renderLongName()}
        <span id="file-size">
          ${this._size&&!this._isDirectory?l`${ia.humanFileSize(this._size,!0)}`:""}
        </span>
      </div>
    `}};Te.styles=[c`
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
    `];Je([v()],Te.prototype,"_name",2);Je([v()],Te.prototype,"_url",2);Je([v()],Te.prototype,"_extension",2);Je([v()],Te.prototype,"_src",2);Je([v()],Te.prototype,"_size",2);Je([v()],Te.prototype,"_isDirectory",2);Je([v()],Te.prototype,"_file",2);Je([v()],Te.prototype,"_isImage",2);Je([a({attribute:!1})],Te.prototype,"file",1);Te=Je([h("uui-file-preview")],Te);var pf=Object.defineProperty,ff=Object.getOwnPropertyDescriptor,ks=(e,t,r,o)=>{for(var i=o>1?void 0:o?ff(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&pf(t,r,i),i},Xr=class extends p{constructor(){super(...arguments),this.description=null,this._labelSlotHasContent=!1,this._labelSlotChanged=e=>{this._labelSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0},this._descriptionSlotHasContent=!1,this._descriptionSlotChanged=e=>{this._descriptionSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0}}connectedCallback(){super.connectedCallback(),_(this,"uui-form-validation-message")}render(){return l`
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
    `}};Xr.styles=[c`
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
    `];ks([a({type:String})],Xr.prototype,"description",2);ks([v()],Xr.prototype,"_labelSlotHasContent",2);ks([v()],Xr.prototype,"_descriptionSlotHasContent",2);Xr=ks([h("uui-form-layout-item")],Xr);var pc=(e,t,r)=>{let o=new Map;for(let i=t;i<=r;i++)o.set(e[i],i);return o},Yr=ke(class extends ye{constructor(e){if(super(e),e.type!==ie.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let o;r===void 0?r=t:t!==void 0&&(o=t);let i=[],s=[],n=0;for(let u of e)i[n]=o?o(u,n):n,s[n]=r(u,n),n++;return{values:s,keys:i}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,o]){let i=Du(e),{values:s,keys:n}=this.dt(t,r,o);if(!Array.isArray(i))return this.ut=n,s;let u=this.ut??(this.ut=[]),d=[],m,g,f=0,E=i.length-1,b=0,C=s.length-1;for(;f<=E&&b<=C;)if(i[f]===null)f++;else if(i[E]===null)E--;else if(u[f]===n[b])d[b]=It(i[f],s[b]),f++,b++;else if(u[E]===n[C])d[C]=It(i[E],s[C]),E--,C--;else if(u[f]===n[C])d[C]=It(i[f],s[C]),Br(e,d[C+1],i[f]),f++,C--;else if(u[E]===n[b])d[b]=It(i[E],s[b]),Br(e,i[f],i[E]),E--,b++;else if(m===void 0&&(m=pc(n,b,C),g=pc(u,f,E)),m.has(u[f]))if(m.has(u[E])){let M=g.get(n[b]),O=M!==void 0?i[M]:null;if(O===null){let j=Br(e,i[f]);It(j,s[b]),d[b]=j}else d[b]=It(O,s[b]),Br(e,i[f],O),i[M]=null;b++}else os(i[E]),E--;else os(i[f]),f++;for(;b<=C;){let M=Br(e,d[C+1]);It(M,s[b]),d[b++]=M}for(;f<=E;){let M=i[f++];M!==null&&os(M)}return this.ut=n,is(e,d),F}});var qi=class extends ye{constructor(t){if(super(t),this.it=w,t.type!==ie.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===w||t==null)return this._t=void 0,this.it=t;if(t===F)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};qi.directiveName="unsafeHTML",qi.resultType=1;var Zr=ke(qi);var mf=Object.defineProperty,vf=Object.getOwnPropertyDescriptor,fc=(e,t,r,o)=>{for(var i=o>1?void 0:o?vf(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&mf(t,r,i),i},Es=class extends p{constructor(){super(),this._for=null,this._messages=new Map,this._onControlInvalid=e=>{let t=e.composedPath()[0];t.pristine===!1?this._messages.set(t,t.validationMessage):this._messages.delete(t),this.requestUpdate("_messages")},this._onControlValid=e=>{let t=e.composedPath()[0];this._messages.delete(t),this.requestUpdate("_messages")},this.for===null&&(this.for=this)}get for(){return this._for}set for(e){let t=null;typeof e=="string"?t=this.getRootNode()?.getElementById(e):e instanceof HTMLElement&&(t=e);let r=t??this,o=this._for;o!==r&&(o!==null&&(o.removeEventListener(at.INVALID,this._onControlInvalid),o.removeEventListener(at.VALID,this._onControlValid)),this._for=r,this._for.addEventListener(at.INVALID,this._onControlInvalid),this._for.addEventListener(at.VALID,this._onControlValid))}render(){return l`
      <slot></slot>
      <div id="messages">
        ${Yr(this._messages,e=>l`<div>${Zr(e[1])}</div>`)}
        <slot name="message"></slot>
      </div>
    `}};Es.styles=[c`
      #messages {
        color: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
    `];fc([a({reflect:!1,attribute:!0})],Es.prototype,"for",1);Es=fc([h("uui-form-validation-message")],Es);var bf=Object.getOwnPropertyDescriptor,gf=(e,t,r,o)=>{for(var i=o>1?void 0:o?bf(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=n(i)||i);return i},mc=class extends p{constructor(){super(...arguments),this._formElement=null}getFormElement(){return this._formElement}_onSlotChanged(e){this._formElement&&(this._formElement.removeEventListener("submit",this._onSubmit),this._formElement.removeEventListener("reset",this._onReset));let t=e.target.assignedNodes({flatten:!0}).filter(r=>r instanceof HTMLFormElement);this._formElement=t.length>0?t[0]:null,this._formElement&&(this._formElement.setAttribute("novalidate",""),this._formElement.addEventListener("submit",this._onSubmit),this._formElement.addEventListener("reset",this._onReset))}_onSubmit(e){if(e.target===null)return;let t=e.target;if(!t.checkValidity()){t.setAttribute("submit-invalid","");return}t.removeAttribute("submit-invalid")}_onReset(e){e.target!==null&&e.target.removeAttribute("submit-invalid")}render(){return l`<slot @slotchange=${this._onSlotChanged}></slot>`}};mc=gf([h("uui-form")],mc);var Ut=class extends k{constructor(t,r={}){super(t,{bubbles:!0,composed:!0,...r}),this.icon=null}acceptRequest(t){this.icon=t,this.stopImmediatePropagation()}};Ut.ICON_REQUEST="icon-request";var yf=Object.defineProperty,_f=Object.getOwnPropertyDescriptor,pr=(e,t,r,o)=>{for(var i=o>1?void 0:o?_f(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&yf(t,r,i),i},ft=class extends p{constructor(){super(...arguments),this._name=null,this._retrievedNameIcon=!1,this._nameSvg=null,this.label="",this.svg=null,this.fallback=null,this._useFallback=!1}get name(){return this._name}set name(e){this._name=e,this.shadowRoot&&this.requestIcon()}requestIcon(){if(this._name!==""&&this._name!==null){let e=new Ut(Ut.ICON_REQUEST,{detail:{iconName:this._name}});this.dispatchEvent(e),e.icon!==null?(this._retrievedNameIcon=!0,e.icon.then(t=>{this._useFallback=!1,this._nameSvg=t})):(this._retrievedNameIcon=!1,this._useFallback=!0)}}connectedCallback(){super.connectedCallback(),this._retrievedNameIcon===!1&&this.requestIcon()}disconnectedCallback(){this._retrievedNameIcon=!1}firstUpdated(){this._retrievedNameIcon===!1&&this.requestIcon(),typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}render(){return this._useFallback===!0?this.fallback===null?l`<slot name="fallback"></slot>`:l`${Zr(this.fallback)}`:this._nameSvg!==null?l`${Zr(this._nameSvg)}`:this.svg!==null?l`${Zr(this.svg)}`:l`<slot></slot>`}};ft.styles=[c`
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
    `];pr([v()],ft.prototype,"_nameSvg",2);pr([a()],ft.prototype,"label",2);pr([a()],ft.prototype,"name",1);pr([a({attribute:!1})],ft.prototype,"svg",2);pr([a({attribute:!1})],ft.prototype,"fallback",2);pr([v()],ft.prototype,"_useFallback",2);ft=pr([h("uui-icon")],ft);var Cs=class{constructor(t){this.promise=new Promise((r,o)=>{this.resolve=r,this.reject=o}),t&&this.resolve(t)}set svg(t){this.resolve(t)}},Gi=class{constructor(){this.icons={},this._onIconRequest=t=>{let r=this.getIcon(t.detail.iconName);r!==null&&t.acceptRequest(r)}}attach(t){t.addEventListener(Ut.ICON_REQUEST,this._onIconRequest)}detach(t){t.removeEventListener(Ut.ICON_REQUEST,this._onIconRequest)}defineIcon(t,r){if(this.icons[t]){this.icons[t].svg=r;return}this.icons[t]=new Cs(r)}getIcon(t){return this.icons[t]||this.acceptIcon(t)?this.icons[t].promise:null}provideIcon(t){return this.icons[t]=new Cs}acceptIcon(t){return!1}getIconNames(){return Object.keys(this.icons)}},xf=Object.defineProperty,wf=Object.getOwnPropertyDescriptor,vc=(e,t,r,o)=>{for(var i=o>1?void 0:o?wf(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&xf(t,r,i),i},Ki=class extends p{constructor(){super(),this._icons={},this._registry=new Gi,this._registry.attach(this)}get icons(){return this._icons}set icons(e){this._icons=e,this._registry&&Object.entries(this._icons).forEach(([t,r])=>this._registry.defineIcon(t,r))}get registry(){return this._registry}set registry(e){this.registry&&this.registry.detach(this),e.attach(this),this._registry=e}render(){return l`<slot></slot>`}};vc([a({attribute:!1})],Ki.prototype,"_icons",2);Ki=vc([h("uui-icon-registry")],Ki);var kf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,Ef=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>`,Cf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>`,$f=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>`,Pf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>`,Sf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>`,Of=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>`,Af=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m2 22 1-1h3l9-9" /><path d="M3 21v-3l9-9" /><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" /></svg>`,If=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" /><path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" /><path d="M15 2v5h5" /></svg>`,Mf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>`,zf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>`,Lf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>`,Df=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>`,Uf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>`,Tf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /><path d="M2 10h20" /></svg>`,Nf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`,Vf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>`,Hf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>`,Bf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>`,jf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="4" height="16" x="6" y="4" /><rect width="4" height="16" x="14" y="4" /></svg>`,Rf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>`,Wf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>`,Ff=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>`,qf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>`,Gf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>`,Kf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>`,Xf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>`,Yf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>`,Zf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></svg>`,Jf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg>`,Qf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2" /><path d="M15 16v-2" /><path d="M8 9h2" /><path d="M20 9h2" /><path d="M17.8 11.8 19 13" /><path d="M15 9h0" /><path d="M17.8 6.2 19 5" /><path d="m3 21 9-9" /><path d="M12.2 6.2 11 5" /></svg>`,em=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`,oa=class extends Gi{constructor(){super(),this.defineIcon("add",kf.strings[0]),this.defineIcon("alert",Ef.strings[0]),this.defineIcon("attachment",Cf.strings[0]),this.defineIcon("calendar",$f.strings[0]),this.defineIcon("check",Pf.strings[0]),this.defineIcon("clipboard",Sf.strings[0]),this.defineIcon("code",Of.strings[0]),this.defineIcon("colorpicker",Af.strings[0]),this.defineIcon("copy",If.strings[0]),this.defineIcon("delete",Mf.strings[0]),this.defineIcon("document",zf.strings[0]),this.defineIcon("download",Lf.strings[0]),this.defineIcon("edit",Df.strings[0]),this.defineIcon("favorite",Uf.strings[0]),this.defineIcon("folder",Tf.strings[0]),this.defineIcon("forbidden",Nf.strings[0]),this.defineIcon("info",Vf.strings[0]),this.defineIcon("link",Hf.strings[0]),this.defineIcon("lock",Bf.strings[0]),this.defineIcon("pause",jf.strings[0]),this.defineIcon("picture",Rf.strings[0]),this.defineIcon("play",Wf.strings[0]),this.defineIcon("remove",Ff.strings[0]),this.defineIcon("search",qf.strings[0]),this.defineIcon("see",Gf.strings[0]),this.defineIcon("settings",Kf.strings[0]),this.defineIcon("subtract",Xf.strings[0]),this.defineIcon("sync",Yf.strings[0]),this.defineIcon("unlock",Zf.strings[0]),this.defineIcon("unsee",Jf.strings[0]),this.defineIcon("wand",Qf.strings[0]),this.defineIcon("wrong",em.strings[0])}},tm=Object.getOwnPropertyDescriptor,rm=(e,t,r,o)=>{for(var i=o>1?void 0:o?tm(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=n(i)||i);return i},bc=class extends Ki{constructor(){super(),this.registry=new oa}};bc=rm([h("uui-icon-registry-essential")],bc);var im=Object.defineProperty,om=Object.getOwnPropertyDescriptor,Jr=(e,t,r,o)=>{for(var i=o>1?void 0:o?om(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&im(t,r,i),i},Tt=class extends G(p){constructor(){super(),this.accept="",this.multiple=!1,this._files=[],this._updateFileWrappers=e=>{let t=[];for(let r of e)this.multiple?t.push(r):t=[r];this._files=t},this.addEventListener("dragenter",()=>this._setShowDropzone(!0)),this.addEventListener("dragleave",()=>this._setShowDropzone(!1)),this.addEventListener("drop",()=>this._setShowDropzone(!1))}get value(){return super.value}set value(e){if(super.value=e,e instanceof FormData){let t=this.multiple?e.getAll(this.name):[e.get(this.name)];this._updateFileWrappers(t);return}if(e instanceof File){this._updateFileWrappers([e]);return}}connectedCallback(){super.connectedCallback(),_(this,"uui-icon"),_(this,"uui-file-dropzone"),_(this,"uui-button"),_(this,"uui-action-bar"),_(this,"uui-file-preview")}getFormElement(){return this._dropZone}async blur(){await this.updateComplete,this._dropzone.blur()}async focus(){await this.updateComplete,this._dropzone.focus()}async click(){await this.updateComplete,this._dropzone.browse()}_handleClick(e){e.stopImmediatePropagation(),this._dropzone.browse()}async _handleFilesChange(e){let r=e.detail.files.filter(i=>i instanceof File||i.isFile);if(!this.multiple){let i=r[0],n=i instanceof File?i:await this._getFile(i);if(this.value instanceof File){this.value=n;return}if(this.value instanceof FormData){this.value.delete(this.name),this.value.append(this.name,n),this._updateFileWrappers([n]);return}}let o=this.value;if(r.length>0&&!(this.value instanceof FormData)&&(o=new FormData),o instanceof FormData)for(let i of r){let s=i instanceof File;o.append(this.name,s?i:await this._getFile(i))}this.value=o}async _getFile(e){return await new Promise((t,r)=>e.file(t,r))}_removeFile(e){let t=this._files[e];if(this.value instanceof FormData){let o=this.value.getAll(this.name).filter(i=>i!==t);if(o.length===0)this.value="";else{this.value.delete(this.name);for(let i of o)this.value.append(this.name,i)}this._updateFileWrappers(o)}this.value instanceof File&&(this.value="",this._updateFileWrappers([]))}_setShowDropzone(e){e?this._dropZone.style.display="flex":this._dropZone.style.display="none"}_renderFileItem(e,t){return l`<uui-file-preview .file="${e}">
      <uui-action-bar slot="actions">
        <uui-button
          @click=${()=>this._removeFile(t)}
          color="danger"
          label=${`Delete ${e.name}`}>
          <uui-icon name="delete" .fallback=${Yl.strings[0]}></uui-icon>
        </uui-button>
      </uui-action-bar>
    </uui-file-preview>`}_renderFiles(){return l`${Yr(this._files,e=>e.name+e.size,(e,t)=>this._renderFileItem(e,t))}`}render(){return l`
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
    `}};Tt.styles=[c`
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
    `];Jr([$("#dropzone")],Tt.prototype,"_dropzone",2);Jr([$("#dropzone")],Tt.prototype,"_dropZone",2);Jr([a({type:String})],Tt.prototype,"accept",2);Jr([a({type:Boolean})],Tt.prototype,"multiple",2);Jr([v()],Tt.prototype,"_files",2);Tt=Jr([h("uui-input-file")],Tt);var Nt=class extends k{constructor(t,r={}){super(t,{bubbles:!0,...r})}};Nt.CHANGE="change";Nt.INPUT="input";var sm=Object.defineProperty,nm=Object.getOwnPropertyDescriptor,gc=e=>{throw TypeError(e)},te=(e,t,r,o)=>{for(var i=o>1?void 0:o?nm(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&sm(t,r,i),i},am=(e,t,r)=>t.has(e)||gc("Cannot "+r),lm=(e,t,r)=>t.has(e)?gc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),um=(e,t,r)=>(am(e,t,"access private method"),r),sa,yc,D=class extends G(q("",p),""){constructor(){super(),lm(this,sa),this.minlengthMessage=e=>`${e} characters left`,this.maxlengthMessage=(e,t)=>`Maximum length exceeded (${t}/${e} characters)`,this.disabled=!1,this.readonly=!1,this.placeholder="",this.autoWidth=!1,this.inputMode="text",this.tabIndex=0,this._type="text",this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0")}),this.addEventListener("blur",()=>{this.style.setProperty("--uui-show-focus-outline","")}),this.addEventListener("keydown",um(this,sa,yc)),this.addValidator("tooShort",()=>{let e=this.minlengthMessage;return typeof e=="function"?e(this.minlength?this.minlength-String(this.value).length:0):e},()=>!!this.minlength&&String(this.value).length<this.minlength),this.addValidator("tooLong",()=>{let e=this.maxlengthMessage;return typeof e=="function"?e(this.maxlength??0,String(this.value).length):e},()=>!!this.maxlength&&String(this.value).length>this.maxlength),this.updateComplete.then(()=>{this.addFormControlElement(this._input)})}get type(){return this._type}set type(e){this._type=e}async blur(){await this.updateComplete,this._input.blur()}async focus(){await this.updateComplete,this._input.focus()}async select(){await this.updateComplete,this._input.select()}getFormElement(){return this.shadowRoot?.querySelector("input")}onInput(e){e.stopPropagation(),this.value=e.target.value,this.dispatchEvent(new Nt(Nt.INPUT))}onChange(e){e.stopPropagation(),this.pristine=!1,this.dispatchEvent(new Nt(Nt.CHANGE))}renderPrepend(){return l`<slot name="prepend"></slot>`}renderAppend(){return l`<slot name="append"></slot>`}render(){return l`
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
      @change=${this.onChange} />`}renderAutoWidthBackground(){return l` <div id="auto" aria-hidden="true">${this.renderText()}</div>`}renderText(){return l`${this.value.length>0?this.value:this.placeholder}`}};sa=new WeakSet;yc=function(e){this.type!=="color"&&e.key=="Enter"&&this.submit()};D.formAssociated=!0;D.styles=[c`
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
    `];te([a()],D.prototype,"min",2);te([a({type:Number})],D.prototype,"minlength",2);te([a({attribute:"minlength-message"})],D.prototype,"minlengthMessage",2);te([a()],D.prototype,"max",2);te([a({type:Number})],D.prototype,"maxlength",2);te([a({attribute:"maxlength-message"})],D.prototype,"maxlengthMessage",2);te([a({type:Number})],D.prototype,"step",2);te([a({type:Boolean,reflect:!0})],D.prototype,"disabled",2);te([a({type:Boolean,reflect:!0})],D.prototype,"readonly",2);te([a()],D.prototype,"placeholder",2);te([a()],D.prototype,"autocomplete",2);te([a({type:Boolean,reflect:!0,attribute:"auto-width"})],D.prototype,"autoWidth",2);te([a({type:String})],D.prototype,"type",1);te([a({attribute:"inputmode"})],D.prototype,"inputMode",2);te([a({type:String})],D.prototype,"pattern",2);te([a({type:Number,reflect:!1,attribute:"tabindex"})],D.prototype,"tabIndex",2);te([$("#input")],D.prototype,"_input",2);D=te([h("uui-input")],D);var Xi=class extends k{constructor(t,r={}){super(t,{bubbles:!0,...r})}};Xi.LOCK_CHANGE="lock-change";var cm=Object.defineProperty,hm=Object.getOwnPropertyDescriptor,_c=e=>{throw TypeError(e)},Ps=(e,t,r,o)=>{for(var i=o>1?void 0:o?hm(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&cm(t,r,i),i},xc=(e,t,r)=>t.has(e)||_c("Cannot "+r),dm=(e,t,r)=>(xc(e,t,"read from private field"),r?r.call(e):t.get(e)),pm=(e,t,r)=>t.has(e)?_c("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),fm=(e,t,r,o)=>(xc(e,t,"write to private field"),t.set(e,r),r),$s,Qr=class extends D{constructor(){super(),pm(this,$s,!0),this.unlockLabel="Unlock input",this.lockLabel="Lock input",this.readonly=!0,this.tabIndex=-1}set locked(e){fm(this,$s,e),this.tabIndex=e?-1:0}get locked(){return dm(this,$s)}connectedCallback(){super.connectedCallback(),_(this,"uui-icon"),_(this,"uui-button")}_onLockToggle(){this.readonly=this.locked=!this.locked,this.pristine=!1,this.dispatchEvent(new Xi(Xi.LOCK_CHANGE)),this.locked||this._input?.focus()}renderIcon(){return this.locked===!0?l`<uui-icon name="lock" .fallback=${Zl.strings[0]}></uui-icon>`:l`<uui-icon
          name="unlock"
          .fallback=${tu.strings[0]}></uui-icon>`}renderPrepend(){return l`<uui-button
      .disabled=${this.disabled}
      @click=${this._onLockToggle}
      compact
      id="lock"
      label="${this.locked?this.unlockLabel:this.lockLabel}">
      ${this.renderIcon()}
    </uui-button>`}};$s=new WeakMap;Qr.styles=[...D.styles,c`
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
    `];Ps([a({type:Boolean,reflect:!0})],Qr.prototype,"locked",1);Ps([a({type:String,reflect:!1,attribute:"unlock-label"})],Qr.prototype,"unlockLabel",2);Ps([a({type:String,reflect:!1,attribute:"lock-label"})],Qr.prototype,"lockLabel",2);Qr=Ps([h("uui-input-lock")],Qr);var mm=Object.defineProperty,vm=Object.getOwnPropertyDescriptor,na=(e,t,r,o)=>{for(var i=o>1?void 0:o?vm(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&mm(t,r,i),i},Yi=class extends D{constructor(){super(...arguments),this.passwordType="password"}get type(){return this.passwordType}set type(e){this.passwordType=e}_onPasswordToggle(){this.passwordType==="password"?this.passwordType="text":this.passwordType="password"}connectedCallback(){super.connectedCallback(),_(this,"uui-icon"),_(this,"uui-button"),this.hasAttribute("spellcheck")||(this.spellcheck=!1)}renderIcon(){return this.passwordType==="password"?l`<uui-icon name="see" .fallback=${Ql.strings[0]}></uui-icon>`:l`<uui-icon
          name="unsee"
          .fallback=${ru.strings[0]}></uui-icon>`}renderAppend(){return l`<uui-button
      .disabled=${this.disabled}
      @click=${this._onPasswordToggle}
      compact
      label="${this.passwordType==="password"?"Show password":"Hide password"}"
      id="eye">
      ${this.renderIcon()}
    </uui-button>`}};Yi.styles=[...D.styles,c`
      #eye {
        height: 100%;
        margin-left: -6px;
      }

      #clear:hover {
        color: black;
      }
    `];na([v()],Yi.prototype,"passwordType",2);na([a()],Yi.prototype,"type",1);Yi=na([h("uui-input-password")],Yi);var bm=Object.getOwnPropertyDescriptor,gm=(e,t,r,o)=>{for(var i=o>1?void 0:o?bm(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=n(i)||i);return i},aa=class extends p{render(){return l`<slot></slot>`}};aa.styles=[c`
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
    `];aa=gm([h("uui-keyboard-shortcut")],aa);var ym=Object.getOwnPropertyDescriptor,_m=(e,t,r,o)=>{for(var i=o>1?void 0:o?ym(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=n(i)||i);return i},la=class extends p{render(){return l`<slot></slot>`}};la.styles=[c`
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
    `];la=_m([h("uui-key")],la);var xm=Object.defineProperty,wm=Object.getOwnPropertyDescriptor,Ss=(e,t,r,o)=>{for(var i=o>1?void 0:o?wm(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&xm(t,r,i),i},ei=class extends p{constructor(){super(),this.disabled=!1,this.for=null,this.required=!1,this.addEventListener("click",this._onClick)}_onClick(){if(this.disabled)return;let e=this.getForElement();e&&(e.focus(),e.click())}getForElement(){return typeof this.for=="string"?this.getRootNode()?.getElementById(this.for)||null:this.for||null}render(){return l`
      <slot></slot>
      ${this.required?l`<div id="required">*</div>`:""}
    `}};ei.styles=[c`
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
    `];Ss([a({type:Boolean,reflect:!0})],ei.prototype,"disabled",2);Ss([a({reflect:!0,attribute:!0})],ei.prototype,"for",2);Ss([a({type:Boolean,reflect:!0})],ei.prototype,"required",2);ei=Ss([h("uui-label")],ei);var km=Object.defineProperty,Em=Object.getOwnPropertyDescriptor,ua=(e,t,r,o)=>{for(var i=o>1?void 0:o?Em(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&km(t,r,i),i},Zi=class extends p{constructor(){super(...arguments),this._progress=0,this._animationDuration=1}get progress(){return this._progress}set progress(e){let t=this._progress;this._progress=A(e,0,100),this.requestUpdate("progress",t)}get animationDuration(){return this._animationDuration}set animationDuration(e){let t=this._animationDuration;this._animationDuration=e>=0?e:1,this.requestUpdate("animationDuration",t)}render(){return l`
      ${this.progress?l`<div
            id="bar"
            style="max-width: ${this.progress.toString()}%;"></div>`:""}
      <div
        id="bar-anim"
        class=${this.progress?"":"animate"}
        style="animation-duration: ${this.animationDuration}s"></div>
      <div id="bar-background"></div>
    `}};Zi.styles=[c`
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
    `];ua([a({type:Number})],Zi.prototype,"progress",1);ua([a({type:Number})],Zi.prototype,"animationDuration",1);Zi=ua([h("uui-loader-bar")],Zi);var Cm=Object.defineProperty,$m=Object.getOwnPropertyDescriptor,ca=(e,t,r,o)=>{for(var i=o>1?void 0:o?$m(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Cm(t,r,i),i},Ji=class extends p{constructor(){super(...arguments),this.progress=0,this.showProgress=!1,this._resizeObserver=new ResizeObserver(()=>this.onResize()),this._isLarge=!1}_circleStyle(){return this.progress?{strokeDasharray:`${this.progress} 100`}:{strokeDasharray:"100 100"}}firstUpdated(){this._resizeObserver.observe(this)}disconnectedCallback(){this._resizeObserver.disconnect()}onResize(){let e=this.clientHeight>=30;this._isLarge!=e&&(this._isLarge=e,this.requestUpdate())}renderProgress(){return this._isLarge&&this.progress&&this.showProgress?l`<span id="progress-display">${this.progress}</span>`:""}render(){return l`
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
            style=${ae(this._circleStyle())} />
        </g>
      </svg>
      ${this.renderProgress()}
    `}};Ji.styles=[c`
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
    `];ca([a({type:Number})],Ji.prototype,"progress",2);ca([a({type:Boolean,reflect:!0,attribute:"show-progress"})],Ji.prototype,"showProgress",2);Ji=ca([h("uui-loader-circle")],Ji);var Pm=Object.getOwnPropertyDescriptor,Sm=(e,t,r,o)=>{for(var i=o>1?void 0:o?Pm(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=n(i)||i);return i},ha=class extends p{render(){return l`
      <div></div>
      <div></div>
      <div></div>
    `}};ha.styles=[c`
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
    `];ha=Sm([h("uui-loader")],ha);var Qe=class extends k{};Qe.SHOW_CHILDREN="show-children";Qe.HIDE_CHILDREN="hide-children";Qe.CLICK_LABEL="click-label";var Om=Object.defineProperty,Am=Object.getOwnPropertyDescriptor,kc=e=>{throw TypeError(e)},Be=(e,t,r,o)=>{for(var i=o>1?void 0:o?Am(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Om(t,r,i),i},Im=(e,t,r)=>t.has(e)||kc("Cannot "+r),Mm=(e,t,r)=>t.has(e)?kc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),wc=(e,t,r)=>(Im(e,t,"access private method"),r),Os,da,Ee=class extends $t(Oe(Ke(q("label",p)))){constructor(){super(...arguments),Mm(this,Os),this.disabled=!1,this.showChildren=!1,this.hasChildren=!1,this.loading=!1,this.caretLabel="Reveal the underlying items",this.iconSlotHasContent=!1,this._labelButtonChanged=e=>{this.selectableTarget=e||this},this._iconSlotChanged=e=>{this.iconSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0},this._onCaretClicked=()=>{let e=this.showChildren?Qe.HIDE_CHILDREN:Qe.SHOW_CHILDREN,t=new Qe(e,{cancelable:!0});this.dispatchEvent(t),!t.defaultPrevented&&(this.showChildren=!this.showChildren)}}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","menu"),_(this,"uui-symbol-expand"),_(this,"uui-loader-bar")}async focus(){await this.updateComplete,this.shadowRoot?.querySelector("#label-button")?.focus?.()}_renderLabelInside(){return l` <slot
        name="icon"
        id="icon"
        style=${this.iconSlotHasContent?"":"display: none;"}
        @slotchange=${this._iconSlotChanged}></slot>
      ${this.renderLabel()}
      <slot name="badge" id="badge"> </slot>`}_renderLabelAsAnchor(){return this.disabled?l` <span id="label-button" ${jr(this._labelButtonChanged)}>
        ${this._renderLabelInside()}
      </span>`:l` <a
      id="label-button"
      ${jr(this._labelButtonChanged)}
      href=${x(this.href)}
      target=${x(this.target||void 0)}
      rel=${x(this.rel||x(this.target==="_blank"?"noopener noreferrer":void 0))}
      @click=${wc(this,Os,da)}
      ?disabled=${this.disabled}
      aria-label="${this.label}">
      ${this._renderLabelInside()}
    </a>`}_renderLabelAsButton(){return l` <button
      id="label-button"
      ${jr(this._labelButtonChanged)}
      @click=${wc(this,Os,da)}
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
    `}};Os=new WeakSet;da=function(){if(this.selectOnly)return;let e=new Qe(Qe.CLICK_LABEL);this.dispatchEvent(e)};Ee.styles=[c`
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
    `];Be([a({type:Boolean,reflect:!0})],Ee.prototype,"disabled",2);Be([a({type:Boolean,reflect:!0,attribute:"show-children"})],Ee.prototype,"showChildren",2);Be([a({type:Boolean,attribute:"has-children"})],Ee.prototype,"hasChildren",2);Be([a({type:Boolean,attribute:"loading"})],Ee.prototype,"loading",2);Be([a({type:String})],Ee.prototype,"href",2);Be([a({type:String})],Ee.prototype,"target",2);Be([a({type:String})],Ee.prototype,"rel",2);Be([a({type:String,attribute:"select-mode",reflect:!0})],Ee.prototype,"selectMode",2);Be([a({type:String,attribute:"caret-label"})],Ee.prototype,"caretLabel",2);Be([v()],Ee.prototype,"iconSlotHasContent",2);Ee=Be([h("uui-menu-item")],Ee);var zm=Object.defineProperty,Lm=Object.getOwnPropertyDescriptor,ii=(e,t,r,o)=>{for(var i=o>1?void 0:o?Lm(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&zm(t,r,i),i},Dm="uui:modal-open",eo="uui:modal-close",Um="uui:modal-close-end",ce=class extends p{constructor(){super(...arguments),this.isOpen=!1,this.isClosing=!1,this.index=0,this.uniqueIndex=0,this._transitionDuration=250,this.open=t=>{t?.preventDefault(),t?.stopImmediatePropagation();let r=new CustomEvent(Dm,{cancelable:!0}),o=new CustomEvent("open",{cancelable:!0});this.dispatchEvent(r),this.dispatchEvent(o),!(r.defaultPrevented||o.defaultPrevented)&&this._openModal()},this.close=t=>{t?.preventDefault(),t?.stopImmediatePropagation();let r=new CustomEvent(eo,{cancelable:!0});this.dispatchEvent(r),!r.defaultPrevented&&this.forceClose()}}get transitionDuration(){return this._transitionDuration}set transitionDuration(t){this._transitionDuration=t,this.style.setProperty("--uui-modal-transition-duration",this._transitionDuration+"ms")}firstUpdated(t){super.firstUpdated(t),this.isClosing||this.open()}_openModal(){this.isOpen=!0,this._dialogElement?.showModal(),this._dialogElement?.addEventListener("cancel",this.close)}forceClose(){this.isClosing=!0,this.isOpen=!1,this._dialogElement?.close(),this.dispatchEvent(new CustomEvent("close-end")),this.dispatchEvent(new CustomEvent(Um)),this.remove()}};ce.styles=[c`
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
    `];ii([$("dialog")],ce.prototype,"_dialogElement",2);ii([a({type:Boolean,reflect:!0,attribute:"is-open"})],ce.prototype,"isOpen",2);ii([a({type:Boolean,reflect:!0,attribute:"is-closing"})],ce.prototype,"isClosing",2);ii([a({type:Number,reflect:!0})],ce.prototype,"index",2);ii([a({type:Number,reflect:!0,attribute:"unique-index"})],ce.prototype,"uniqueIndex",2);ii([a({type:Number,attribute:"transition-duration"})],ce.prototype,"transitionDuration",1);var Tm=Object.defineProperty,Nm=Object.getOwnPropertyDescriptor,Cc=e=>{throw TypeError(e)},$c=(e,t,r,o)=>{for(var i=o>1?void 0:o?Nm(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Tm(t,r,i),i},Vm=(e,t,r)=>t.has(e)||Cc("Cannot "+r),Ec=(e,t,r)=>(Vm(e,t,"read from private field"),r?r.call(e):t.get(e)),Hm=(e,t,r)=>t.has(e)?Cc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Is,fa,to=class extends ce{constructor(){super(...arguments),Hm(this,Is),this.size="full"}firstUpdated(e){super.firstUpdated(e),this.style.setProperty("--uui-modal-offset",-Ec(this,Is,fa)+"px")}updated(e){super.updated(e),this.uniqueIndex>10?this.setAttribute("hide",""):this.removeAttribute("hide")}forceClose(){this.isClosing||(this.isClosing=!0,this.style.setProperty("--uui-modal-offset",-Ec(this,Is,fa)+"px"),setTimeout(()=>{super.forceClose()},this.transitionDuration))}render(){return l`<dialog>
      <slot></slot>
    </dialog>`}};Is=new WeakSet;fa=function(){return this._dialogElement?.getBoundingClientRect().width??0};to.styles=[...ce.styles,c`
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
    `];$c([a({reflect:!0})],to.prototype,"size",2);to=$c([h("uui-modal-sidebar")],to);var Bm=Object.defineProperty,jm=Object.getOwnPropertyDescriptor,Pc=e=>{throw TypeError(e)},oi=(e,t,r,o)=>{for(var i=o>1?void 0:o?jm(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Bm(t,r,i),i},Sc=(e,t,r)=>t.has(e)||Pc("Cannot "+r),Qi=(e,t,r)=>(Sc(e,t,"read from private field"),r?r.call(e):t.get(e)),pa=(e,t,r)=>t.has(e)?Pc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),As=(e,t,r)=>(Sc(e,t,"access private method"),r),ma,ti,ri,va,ba,Vt=class extends p{constructor(){super(),pa(this,ri),this.sidebarGap=64,this.transitionDurationMS=250,pa(this,ma,()=>{let e=this._modals??[];if(this._modals=this.modalSlot?.assignedElements({flatten:!0}).filter(o=>o instanceof ce)??[],e.filter(o=>this._modals.indexOf(o)===-1).forEach(o=>o.removeEventListener(eo,Qi(this,ti))),this._modals.filter(o=>e.indexOf(o)===-1).forEach(o=>o.addEventListener(eo,Qi(this,ti))),this._sidebars=this._modals.filter(o=>o instanceof to),this._modals.length===0){this.removeAttribute("backdrop");return}As(this,ri,va).call(this),As(this,ri,ba).call(this)}),pa(this,ti,e=>{if(e.stopImmediatePropagation(),e.target?.removeEventListener(eo,Qi(this,ti)),!this._modals||this._modals.length<=1){this.removeAttribute("backdrop");return}As(this,ri,va).call(this),As(this,ri,ba).call(this)}),this.addEventListener(eo,Qi(this,ti))}firstUpdated(e){super.firstUpdated(e),this.style.setProperty("--uui-modal-transition-duration",this.transitionDurationMS+"ms")}render(){return l`<slot @slotchange=${Qi(this,ma)}></slot>`}};ma=new WeakMap;ti=new WeakMap;ri=new WeakSet;va=function(){this.setAttribute("backdrop","");let e=this._modals?.filter(t=>!t.isClosing).reverse()??[];e?.forEach((t,r)=>{t.index=r,t.transitionDuration=this.transitionDurationMS}),e?.forEach(t=>{let r=e?.filter(o=>o.constructor.name===t.constructor.name);t.uniqueIndex=r?.indexOf(t)??0})};ba=function(){requestAnimationFrame(()=>{let e=0,t=this._sidebars?.filter(r=>!r.isClosing).reverse()??[];for(let r=0;r<t.length;r++){let o=t[r],i=t[r+1],s=e;if(o.updateComplete.then(()=>{o.style.setProperty("--uui-modal-offset",s+"px")}),i?.hasAttribute("hide"))break;let n=o.shadowRoot?.querySelector("dialog")?.getBoundingClientRect().width??0,u=i?.shadowRoot?.querySelector("dialog")?.getBoundingClientRect().width??0,d=n+e+this.sidebarGap-u;e=d>0?d:0}})};Vt.styles=c`
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
  `;oi([$("slot")],Vt.prototype,"modalSlot",2);oi([v()],Vt.prototype,"_modals",2);oi([v()],Vt.prototype,"_sidebars",2);oi([a({type:Number})],Vt.prototype,"sidebarGap",2);oi([a({type:Number})],Vt.prototype,"transitionDurationMS",2);Vt=oi([h("uui-modal-container")],Vt);var Rm=Object.getOwnPropertyDescriptor,Wm=(e,t,r,o)=>{for(var i=o>1?void 0:o?Rm(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=n(i)||i);return i},ga=class extends ce{render(){return l`
      <dialog>
        <slot></slot>
      </dialog>
    `}};ga.styles=[...ce.styles,c`
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
    `];ga=Wm([h("uui-modal-dialog")],ga);var mt=class extends k{constructor(t,r={}){super(t,{bubbles:!0,...r})}};mt.CHANGE="change";var Fm=Object.defineProperty,qm=Object.getOwnPropertyDescriptor,Ce=(e,t,r,o)=>{for(var i=o>1?void 0:o?qm(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Fm(t,r,i),i},Gm=45,ya=(e,t,r)=>Math.min(Math.max(e,t),r),Km=(e,t)=>Array.from({length:t-e+1},(r,o)=>e+o),me=class extends p{constructor(){super(...arguments),this._observer=new ResizeObserver(this._calculateRange.bind(this)),this.label="",this.ariaLabel="",this.firstLabel="First",this.previousLabel="Previous",this.nextLabel="Next",this.lastLabel="Last",this._total=100,this._range=0,this._visiblePages=[],this._current=1}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","navigation"),this._visiblePages=this._generateVisiblePages(this.current),_(this,"uui-button"),_(this,"uui-button-group")}disconnectedCallback(){this._observer.disconnect()}firstUpdated(){this._observer.observe(this._pagesGroup),this.updateLabel(),this._calculateRange()}willUpdate(e){(e.has("current")||e.has("label"))&&this.updateLabel()}updateLabel(){this.ariaLabel=`${this.label||"Pagination navigation"}. Current page: ${this.current}.`}_calculateRange(){let e=this.offsetWidth,t=Array.from(this._navButtons).reduce((i,s)=>i+s.getBoundingClientRect().width,0),o=(e-t)/Gm/2;this._range=Math.max(1,Math.floor(o)),this._visiblePages=this._generateVisiblePages(this.current)}_generateVisiblePages(e){let t=e<this._range?1:e<this.total-this._range?e-this._range:this.total-this._range*2,r=e<=this._range?this._range*2+1:e<this.total-this._range?e+this._range:this.total;return Km(ya(t,1,this.total),ya(r,1,this.total))}get total(){return this._total}set total(e){this._total=e,this._visiblePages=this._generateVisiblePages(this._current),this.requestUpdate("total",e)}get current(){return this._current}set current(e){let t=this._current;this._current=ya(e,1,this.total),this._visiblePages=this._generateVisiblePages(this._current),this.requestUpdate("current",t)}goToNextPage(){this.current++,this.dispatchEvent(new mt(mt.CHANGE))}goToPreviousPage(){this.current--,this.dispatchEvent(new mt(mt.CHANGE))}goToPage(e){this.current=e,this.dispatchEvent(new mt(mt.CHANGE))}focusActivePage(){requestAnimationFrame(()=>{let e=this.renderRoot.querySelector(".active");e&&e.focus()})}renderFirst(){return l`<uui-button
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
    > `}renderPage(e){return l`<uui-button
      compact
      look="outline"
      role="listitem"
      label="Go to page ${e}"
      class=${"page"+(e===this._current?" active":"")}
      tabindex=${e===this._current?"-1":""}
      @click=${()=>{e!==this._current&&(this.goToPage(e),this.focusActivePage())}}>
      ${e}
    </uui-button>`}renderNavigationLeft(){return l` ${this.renderFirst()} ${this.renderPrevious()}
    ${this._visiblePages.includes(1)?"":this.renderDots()}`}renderNavigationRight(){return l`${this._visiblePages.includes(this.total)?"":this.renderDots()}
    ${this.renderNext()} ${this.renderLast()}`}render(){return l`<uui-button-group role="list" id="pages">
      ${this.renderNavigationLeft()}
      ${this._visiblePages.map(e=>this.renderPage(e))}
      ${this.renderNavigationRight()}
    </uui-button-group>
    `}};me.styles=[c`
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
    `];Ce([$l("uui-button.nav")],me.prototype,"_navButtons",2);Ce([$("#pages")],me.prototype,"_pagesGroup",2);Ce([a()],me.prototype,"label",2);Ce([a({reflect:!0,attribute:"aria-label"})],me.prototype,"ariaLabel",2);Ce([a()],me.prototype,"firstLabel",2);Ce([a()],me.prototype,"previousLabel",2);Ce([a()],me.prototype,"nextLabel",2);Ce([a()],me.prototype,"lastLabel",2);Ce([a({type:Number})],me.prototype,"total",1);Ce([v()],me.prototype,"_range",2);Ce([v()],me.prototype,"_visiblePages",2);Ce([a({type:Number})],me.prototype,"current",1);me=Ce([h("uui-pagination")],me);var ro=class extends k{};ro.CLOSE="close";var Xm=Object.defineProperty,Ym=Object.getOwnPropertyDescriptor,io=(e,t,r,o)=>{for(var i=o>1?void 0:o?Ym(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Xm(t,r,i),i};function Ms(e,t,r){return e<t?t:e>r?r:e}var fr=class extends p{constructor(){super(...arguments),this.scrollEventHandler=this._updatePlacement.bind(this),this._open=!1,this._placement="bottom-start",this._currentPlacement=null,this._scrollParents=[],this.margin=0,this._onTriggerSlotChanged=e=>{this._trigger=e.target.assignedElements({flatten:!0})[0]},this._intersectionCallback=e=>{e.forEach(t=>{t.isIntersecting===!1&&(this._startScrollListener(),this._updatePlacement())})},this._onKeyUp=e=>{if(e.key==="Escape"){this._triggerPopoverClose();return}},this._onDocumentClick=e=>{e.composedPath().includes(this)||this._triggerPopoverClose()}}get placement(){return this._placement}set placement(e){let t=this._placement;this._placement=e||"bottom-start",this._currentPlacement=null,this._updatePlacement(),this.requestUpdate("placement",t)}get open(){return this._open}set open(e){let t=this._open;this._open=e,e?this._openPopover():this._closePopover(),this.requestUpdate("open",t)}connectedCallback(){super.connectedCallback(),this._getScrollParents()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._onDocumentClick),document.removeEventListener("keyup",this._onKeyUp),document.removeEventListener("scroll",this.scrollEventHandler),this.intersectionObserver&&(this.intersectionObserver.disconnect(),delete this.intersectionObserver),this._scrollParents=[]}_openPopover(){this.containerElement&&(this.containerElement.style.opacity="0",document.addEventListener("mousedown",this._onDocumentClick),document.addEventListener("keyup",this._onKeyUp),this._currentPlacement=null,requestAnimationFrame(()=>{this._updatePlacement(),this._createIntersectionObserver(),this.containerElement.style.opacity="1"}))}_closePopover(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),delete this.intersectionObserver),document.removeEventListener("mousedown",this._onDocumentClick),document.removeEventListener("keyup",this._onKeyUp),this._currentPlacement=null}_triggerPopoverClose(){let e=new ro(ro.CLOSE,{cancelable:!0});this.dispatchEvent(e),!e.defaultPrevented&&(this.open=!1)}_getScrollParents(){let e=this.shadowRoot.host,t=getComputedStyle(e);if(t.position==="fixed")return;let r=t.position==="absolute",o=/(auto|scroll)/,i=e;for(;i=i.parentElement;)if(t=getComputedStyle(i),!(r&&t.position==="static")&&(o.test(t.overflow+t.overflowY+t.overflowX)&&this._scrollParents.push(i),t.position==="fixed"))return;this._scrollParents.push(document.body)}_createIntersectionObserver(){if(this.intersectionObserver)return;let e={root:null,rootMargin:"0px",threshold:1};this.intersectionObserver=new IntersectionObserver(this._intersectionCallback,e),this.intersectionObserver.observe(this.containerElement)}_startScrollListener(){this._scrollParents.forEach(e=>{e.addEventListener("scroll",this.scrollEventHandler)}),document.addEventListener("scroll",this.scrollEventHandler)}_stopScrollListener(){this._scrollParents.forEach(e=>{e.removeEventListener("scroll",this.scrollEventHandler)}),document.removeEventListener("scroll",this.scrollEventHandler)}_updatePlacement(){if(!this.shadowRoot)return;let e=this.containerElement;if(!e)return;let t=this.containerElement?.getBoundingClientRect(),r=this._trigger?.getBoundingClientRect();if(r!=null&&t!=null){let o=this._scrollParents.map(We=>We.getBoundingClientRect());this._currentPlacement=this._currentPlacement||this._placement,this._placement!=="auto"&&(this._currentPlacement=this._managePlacementFlip(this._currentPlacement,t,o));let i=this._currentPlacement.indexOf("top")!==-1,s=this._currentPlacement.indexOf("bottom")!==-1,n=this._currentPlacement.indexOf("left")!==-1,u=this._currentPlacement.indexOf("right")!==-1,d=this._currentPlacement.indexOf("-start")!==-1,m=this._currentPlacement.indexOf("-end")!==-1,g=.5,f=.5,E=.5,b=.5,C=0,M=0;if(this.placement==="auto"){let We=this._scrollParents[0],_i=We.clientWidth,Yt=We.clientHeight,wr=r.x-t.width,kr=_i-(r.x+r.width)-t.width,ln=r.y-t.height,_o=Yt-(r.y+r.height)-t.height,xo=.5,wo=.5,kh=Math.max(wr,kr),nl=Math.max(ln,_o);_o>ln&&_o>this.margin&&(nl+=9999),kh>nl?(wr>kr?(xo=0,n=!0):(xo=1,u=!0),C=this.margin):(ln>_o?(wo=0,i=!0):(wo=1,s=!0),M=this.margin),g=xo,f=wo,E=1-xo,b=1-wo}else i&&(b=1,f=0),s&&(b=0,f=1),(i||s)&&(M=this.margin,d&&(E=0,g=0),m&&(E=1,g=1)),n&&(E=1,g=0),u&&(E=0,g=1),(n||u)&&(C=this.margin,d&&(b=0,f=0),m&&(b=1,f=1));let O=-t.width*E+r.width*g-C*(E*2-1),j=-t.height*b+r.height*f-M*(b*2-1),we=O,kt=j;i||s?(this._scrollParents.forEach((We,_i)=>{let Yt=We===document.body?0:o[_i].x,wr=-r.x+Yt,kr=We.clientWidth-r.x-r.width+O+Yt-(t.width-r.width)*(1-g);we=Ms(we,wr,kr)}),we=Ms(we,-t.width,r.width)):(n||u)&&(this._scrollParents.forEach((We,_i)=>{let Yt=We===document.body?0:o[_i].y,wr=-r.y+Yt,kr=We.clientHeight-r.y-r.height+j+Yt-(t.height-r.height)*(1-f);kt=Ms(kt,wr,kr)}),kt=Ms(kt,-t.height,r.height)),(this._positionX!==we||this._positionY!==kt)&&(this._positionX=we,this._positionY=kt,O===we&&j===kt&&this._stopScrollListener(),e.style.left=`${this._positionX}px`,e.style.top=`${this._positionY}px`)}}_managePlacementFlip(e,t,r){let i=e.split("-"),s=i[0],n=i[1]||null,u;return this._scrollParents.some((d,m)=>{let g=d===document.body?0:r[m].x,f=d===document.body?0:r[m].y;return s==="top"&&t.y-2<=f?(u="bottom",!0):s==="bottom"&&t.y+t.height+2>=d.clientHeight+f?(u="top",!0):s==="left"&&t.x-2<=g?(u="right",!0):s==="right"&&t.x+t.width+2>=d.clientWidth+g?(u="left",!0):!1}),u?(this._startScrollListener(),u+(n?`-${n}`:"")):e}render(){return l`
      <slot
        id="trigger"
        name="trigger"
        @slotchange=${this._onTriggerSlotChanged}></slot>
      <div id="container">
        ${this._open?l`<slot name="popover"></slot>`:""}
      </div>
    `}};fr.styles=[c`
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
    `];io([$("#container")],fr.prototype,"containerElement",2);io([a({type:Number})],fr.prototype,"margin",2);io([a({type:String,reflect:!0})],fr.prototype,"placement",1);io([a({type:Boolean,reflect:!0})],fr.prototype,"open",1);fr=io([h("uui-popover")],fr);var Zm=Object.defineProperty,Jm=Object.getOwnPropertyDescriptor,Oc=e=>{throw TypeError(e)},vr=(e,t,r,o)=>{for(var i=o>1?void 0:o?Jm(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Zm(t,r,i),i},Ea=(e,t,r)=>t.has(e)||Oc("Cannot "+r),L=(e,t,r)=>(Ea(e,t,"read from private field"),r?r.call(e):t.get(e)),vt=(e,t,r)=>t.has(e)?Oc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),zs=(e,t,r,o)=>(Ea(e,t,"write to private field"),t.set(e,r),r),Ht=(e,t,r)=>(Ea(e,t,"access private method"),r),bt,si,mr,oo,Ls,gt,so,_a,et,xa,Ac,wa,Ic,ka,yt=class extends p{constructor(){super(...arguments),vt(this,et),this.margin=0,this._placement="bottom-start",this._open=!1,this._actualPlacement=this._placement,vt(this,bt,null),vt(this,si,[]),vt(this,mr,null),vt(this,oo,{width:0,height:0}),vt(this,Ls,e=>{if(this._open=e.newState==="open",zs(this,bt,Kl(this,"popovertarget",this.id)),Ht(this,et,Ic).call(this),L(this,bt)?.dispatchEvent(new CustomEvent("uui-popover-before-toggle",{bubbles:!1,composed:!1,detail:{oldState:e.oldState,newState:e.newState}})),!this._open){Ht(this,et,wa).call(this);return}Ht(this,et,Ac).call(this),requestAnimationFrame(()=>{L(this,gt).call(this)})}),vt(this,gt,()=>{this._open&&(this._actualPlacement=this._placement,this.style.opacity="0",L(this,so).call(this,3))}),vt(this,so,e=>{if(L(this,_a).call(this),e--,L(this,bt)===null)return;let t=this._actualPlacement.indexOf("top")!==-1,r=this._actualPlacement.indexOf("bottom")!==-1,o=this._actualPlacement.indexOf("left")!==-1,i=this._actualPlacement.indexOf("right")!==-1,s=this._actualPlacement.indexOf("-start")!==-1,n=this._actualPlacement.indexOf("-end")!==-1,u=L(this,bt).getBoundingClientRect(),d=this.getBoundingClientRect(),m=0,g=0;r&&(m=u.top+u.height,s&&(g=u.left),n&&(g=u.left+u.width-d.width),!s&&!n&&(g=u.left+u.width/2-d.width/2)),t&&(m=u.top-d.height,s&&(g=u.left),n&&(g=u.left+u.width-d.width),!s&&!n&&(g=u.left+u.width/2-d.width/2)),o&&(g=u.left-d.width,s&&(m=u.top),n&&(m=u.top+u.height-d.height),!s&&!n&&(m=u.top+u.height/2-d.height/2)),i&&(g=u.left+u.width,s&&(m=u.top),n&&(m=u.top+u.height-d.height),!s&&!n&&(m=u.top+u.height/2-d.height/2));let f=window.innerWidth,E=window.innerHeight,b=Math.min(0,u.top+u.height),C=Math.max(Math.min(m,E-d.height),u.top-d.height);if(Math.max(b,C)!==m&&(t||r)&&e>0){Ht(this,et,xa).call(this),L(this,so).call(this,e);return}m=Math.max(b,C);let O=Math.min(0,u.left+u.width),j=Math.max(Math.min(g,f-d.width),u.left-d.width),we=Math.max(O,j);if(we!==g&&(o||i)&&e>0){Ht(this,et,xa).call(this),L(this,so).call(this,e);return}g=we,(m+d.height<0||m>E||g+d.width<0||g>f)&&this.hidePopover(),this.style.transform=`translate(${g}px, ${m}px)`,this.style.opacity="1"}),vt(this,_a,()=>{let e={top:"bottom",bottom:"top",left:"right",right:"left"},t=this._actualPlacement.split("-")[0];t=e[t]||t,t=t.charAt(0).toUpperCase()+t.slice(1);let r=`padding${t}`;this.style.padding="0",this.style[r]=`${this.margin}px`})}get open(){return this._open}get placement(){return this._placement}set placement(e){this._placement=e,this._actualPlacement=e,L(this,gt).call(this)}connectedCallback(){this.hasAttribute("popover")||this.setAttribute("popover",""),super.connectedCallback(),this.addEventListener("beforetoggle",L(this,Ls)),L(this,mr)||(zs(this,mr,new ResizeObserver(e=>{let t=e[0],r=t.contentRect.width,o=t.contentRect.height;r===L(this,oo).width&&o===L(this,oo).height||(zs(this,oo,{width:r,height:o}),L(this,gt).call(this))})),L(this,mr).observe(this))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("beforetoggle",L(this,Ls)),Ht(this,et,wa).call(this),L(this,mr)?.disconnect(),zs(this,mr,null)}render(){return l`<slot></slot>`}};bt=new WeakMap;si=new WeakMap;mr=new WeakMap;oo=new WeakMap;Ls=new WeakMap;gt=new WeakMap;so=new WeakMap;_a=new WeakMap;et=new WeakSet;xa=function(){let[e,t]=this._actualPlacement.split("-"),r=e==="top"?"bottom":e==="bottom"?"top":e==="left"?"right":"left";this._actualPlacement=`${r}-${t}`};Ac=function(){L(this,si).forEach(e=>{e.addEventListener("scroll",L(this,gt),{passive:!0})}),document.addEventListener("scroll",L(this,gt),{passive:!0})};wa=function(){L(this,si).forEach(e=>{e.removeEventListener("scroll",L(this,gt))}),document.removeEventListener("scroll",L(this,gt))};Ic=function(){if(!L(this,bt))return;let e=getComputedStyle(L(this,bt));if(e.position==="fixed")return;let t=e.position==="absolute",r=/(auto|scroll)/,o=L(this,bt);for(;o;){if(e=getComputedStyle(o),t&&e.position==="static"){o=Ht(this,et,ka).call(this,o);continue}if(r.test(e.overflow+e.overflowY+e.overflowX)&&L(this,si).push(o),e.position==="fixed")return;o=Ht(this,et,ka).call(this,o)}L(this,si).push(document.body)};ka=function(e){return e?.parentElement?e.parentElement:e?.getRootNode()?.host};yt.styles=[c`
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
    `];vr([a({type:Number})],yt.prototype,"margin",2);vr([a({type:Boolean})],yt.prototype,"open",1);vr([a({type:String,reflect:!0})],yt.prototype,"placement",1);vr([v()],yt.prototype,"_placement",2);vr([v()],yt.prototype,"_open",2);vr([v()],yt.prototype,"_actualPlacement",2);yt=vr([h("uui-popover-container")],yt);var Qm=Object.defineProperty,ev=Object.getOwnPropertyDescriptor,Mc=(e,t,r,o)=>{for(var i=o>1?void 0:o?ev(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Qm(t,r,i),i},tv=(e,t,r)=>Math.min(Math.max(e,t),r),Ds=class extends p{constructor(){super(...arguments),this._progress=0}get progress(){return this._progress}set progress(e){let t=this._progress;this._progress=tv(e,0,100),this.requestUpdate("progress",t)}_getProgressStyle(){return{width:`${this._progress}%`}}render(){return l`
      <div id="bar" style=${ae(this._getProgressStyle())}></div>
    `}};Ds.styles=[c`
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
    `];Mc([a({type:Number})],Ds.prototype,"progress",1);Ds=Mc([h("uui-progress-bar")],Ds);var gr=class extends k{constructor(t,r={}){super(t,{bubbles:!0,...r})}};gr.CHANGE="change";var rv=Object.defineProperty,iv=Object.getOwnPropertyDescriptor,zc=e=>{throw TypeError(e)},jt=(e,t,r,o)=>{for(var i=o>1?void 0:o?iv(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&rv(t,r,i),i},ov=(e,t,r)=>t.has(e)||zc("Cannot "+r),sv=(e,t,r)=>t.has(e)?zc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),nv=(e,t,r)=>(ov(e,t,"access private method"),r),Ca,Lc,je=class extends p{constructor(){super(...arguments),sv(this,Ca),this.name="",this.value="",this.label="",this.checked=!1,this.disabled=!1,this.readonly=!1}focus(){this._inputElement.focus()}click(){this._inputElement.click()}uncheck(){this.checked=!1}check(){this.checked=!0}makeFocusable(){this.disabled||this.removeAttribute("tabindex")}makeUnfocusable(){this.disabled||this.setAttribute("tabindex","-1")}render(){return l` <label>
      <input
        id="input"
        type="radio"
        name=${this.name}
        value=${this.value}
        .checked=${this.checked}
        .disabled=${this.disabled||this.readonly}
        @change=${nv(this,Ca,Lc)} />
      <div id="button"></div>
      <div id="label">
        ${this.label?l`<span>${this.label}</span>`:l`<slot></slot>`}
      </div>
    </label>`}};Ca=new WeakSet;Lc=function(e){e.stopPropagation();let t=this._inputElement.checked;this.checked=t,t&&this.focus(),this.dispatchEvent(new gr(gr.CHANGE))};je.styles=[Pt,c`
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
        animation: ${St};
      }

      @media (prefers-reduced-motion) {
        :host([disabled]:active) #button {
          animation: none;
        }

        #button::after {
          transition: none;
        }
      }
    `];jt([$("#input")],je.prototype,"_inputElement",2);jt([a({type:String})],je.prototype,"name",2);jt([a({type:String})],je.prototype,"value",2);jt([a({type:String})],je.prototype,"label",2);jt([a({type:Boolean,reflect:!0})],je.prototype,"checked",2);jt([a({type:Boolean,reflect:!0})],je.prototype,"disabled",2);jt([a({type:Boolean,reflect:!0})],je.prototype,"readonly",2);je=jt([h("uui-radio")],je);var no=class extends k{constructor(t,r={}){super(t,{bubbles:!0,...r})}};no.CHANGE="change";var av=Object.defineProperty,lv=Object.getOwnPropertyDescriptor,Dc=e=>{throw TypeError(e)},Aa=(e,t,r,o)=>{for(var i=o>1?void 0:o?lv(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&av(t,r,i),i},Ia=(e,t,r)=>t.has(e)||Dc("Cannot "+r),P=(e,t,r)=>(Ia(e,t,"read from private field"),r?r.call(e):t.get(e)),Bt=(e,t,r)=>t.has(e)?Dc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Us=(e,t,r,o)=>(Ia(e,t,"write to private field"),t.set(e,r),r),W=(e,t,r)=>(Ia(e,t,"access private method"),r),X,T,$a,Pa,Ts,Ns,Sa,H,Uc,Ma,Oa,za,La,br,Tc,Nc,ao,uv="ArrowLeft",cv="ArrowUp",hv="ArrowRight",dv="ArrowDown",pv=" ",fv="Enter",ni=class extends G(p,""){constructor(){super(),Bt(this,H),this.disabled=!1,this.readonly=!1,Bt(this,X,null),Bt(this,T,[]),Bt(this,$a,e=>{P(this,T)?.forEach(t=>{t!==e.target?t.makeUnfocusable():t.makeFocusable()})}),Bt(this,Pa,e=>{this.contains(e.relatedTarget)||P(this,X)===null&&P(this,T)?.forEach(t=>{t.makeFocusable()})}),Bt(this,Ts,()=>{this.pristine=!1}),Bt(this,Ns,e=>{e.target.checked===!0&&(this.value=e.target.value,W(this,H,ao).call(this))}),Bt(this,Sa,e=>{switch(e.key){case uv:case cv:{e.preventDefault(),W(this,H,Tc).call(this);break}case hv:case dv:{e.preventDefault(),W(this,H,Nc).call(this);break}case pv:{P(this,X)===null&&(this.value=W(this,H,br).call(this,1,!1)?.value,W(this,H,ao).call(this));break}case fv:this.submit()}}),this.addEventListener("keydown",P(this,Sa)),this.addEventListener("focusin",P(this,$a)),this.addEventListener("focusout",P(this,Pa)),this.updateComplete.then(()=>{W(this,H,Oa).call(this,this.value)})}get value(){return super.value}set value(e){super.value=e,W(this,H,Oa).call(this,e)}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","radiogroup")}updated(e){super.updated(e),e.has("disabled")&&W(this,H,za).call(this,this.disabled),e.has("readonly")&&W(this,H,La).call(this,this.readonly),e.has("name")&&W(this,H,Ma).call(this,e.get("name"))}async focus(){await this.updateComplete,P(this,X)!==null?P(this,T)[P(this,X)]?.focus():W(this,H,br).call(this,1,!1)?.focus()}async blur(){await this.updateComplete,P(this,X)!==null?P(this,T)[P(this,X)]?.blur():W(this,H,br).call(this,1,!1)?.blur()}async click(){await this.updateComplete,P(this,X)!==null?P(this,T)[P(this,X)]?.click():W(this,H,br).call(this,1,!1)?.click()}getFormElement(){if(P(this,T)&&P(this,X))return P(this,T)[P(this,X)]}render(){return l` <slot @slotchange=${W(this,H,Uc)}></slot> `}};X=new WeakMap;T=new WeakMap;$a=new WeakMap;Pa=new WeakMap;Ts=new WeakMap;Ns=new WeakMap;Sa=new WeakMap;H=new WeakSet;Uc=function(e){if(e.stopPropagation(),P(this,T)?.forEach(r=>{r.removeEventListener(gr.CHANGE,P(this,Ns)),r.removeEventListener("blur",P(this,Ts))}),Us(this,X,null),Us(this,T,e.target.assignedElements({flatten:!0}).filter(r=>r instanceof je)),P(this,T).length===0)return;P(this,T).forEach(r=>{r.addEventListener(gr.CHANGE,P(this,Ns)),r.addEventListener("blur",P(this,Ts))}),W(this,H,Ma).call(this,this.name),this.disabled&&W(this,H,za).call(this,!0),this.readonly&&W(this,H,La).call(this,!0);let t=P(this,T).filter(r=>r.checked===!0);if(t.length>1&&(P(this,T).forEach(r=>{r.checked=!1}),this.value="",console.error("There can only be one checked radio among the <"+this.nodeName+"> children",this)),t.length===1){let r=t[0];this.value=r.value,Us(this,X,P(this,T).indexOf(r))}};Ma=function(e){P(this,T)?.forEach(t=>t.name=e)};Oa=function(e){let t=[];P(this,T).forEach((r,o)=>{r.value===e?(r.checked=!0,r.makeFocusable(),Us(this,X,o)):(r.checked=!1,t.push(r))}),P(this,X)!==null&&t.forEach(r=>r.makeUnfocusable())};za=function(e){P(this,T)?.forEach(t=>t.disabled=e)};La=function(e){P(this,T)?.forEach(t=>t.readonly=e)};br=function(e=1,t=!0){if(!P(this,T)||P(this,T).length===0)return null;let r=P(this,T).length,o=P(this,X)??0;for(let i=0;i<r+1;i++){if(!t||i>0){let s=P(this,T)[o];if(!s.disabled&&!s.readonly)return s}o=(o+e+r)%r}return null};Tc=function(){this.value=W(this,H,br).call(this,-1)?.value??"",P(this,T)[P(this,X)??0]?.focus(),W(this,H,ao).call(this)};Nc=function(){this.value=W(this,H,br).call(this)?.value??"",P(this,T)[P(this,X)??0]?.focus(),W(this,H,ao).call(this)};ao=function(){this.pristine=!1,this.dispatchEvent(new no(no.CHANGE))};ni.formAssociated=!0;ni.styles=[c`
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
    `];Aa([a({type:Boolean,reflect:!0})],ni.prototype,"disabled",2);Aa([a({type:Boolean,reflect:!0})],ni.prototype,"readonly",2);ni=Aa([h("uui-radio-group")],ni);var Ne=class extends k{constructor(t,r={}){super(t,{bubbles:!0,...r})}};Ne.INPUT="input";Ne.CHANGE="change";var mv=Object.defineProperty,vv=Object.getOwnPropertyDescriptor,Hc=e=>{throw TypeError(e)},B=(e,t,r,o)=>{for(var i=o>1?void 0:o?vv(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&mv(t,r,i),i},Bc=(e,t,r)=>t.has(e)||Hc("Cannot "+r),bv=(e,t,r)=>(Bc(e,t,"read from private field"),r?r.call(e):t.get(e)),Vc=(e,t,r)=>t.has(e)?Hc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),ai=(e,t,r)=>(Bc(e,t,"access private method"),r),Rt,yr,Ta,Da={TOP:3,CENTER:2},lo=18,li=3,_t=12,gv=24,Ua=e=>{let t=e.toString().indexOf(".");return t>=0?e.toString().length-t-1:0},N=class extends G(p,""){constructor(){super(),Vc(this,Rt),this.disabled=!1,this.readonly=!1,this._min=0,this._max=0,this.hideStepValues=!1,this._step=1,this._movement=!1,this.startPoint={mouse:0,low:0,high:0},this._lowInputValue=0,this._highInputValue=0,this._trackWidth=0,this._lowValuePercentStart=0,this._highValuePercentEnd=100,Vc(this,Ta,e=>{e.key=="Enter"&&this.submit()}),this._onTouchStart=e=>{if(this.disabled)return;let t=e.composedPath()[0];if(t!==this._outerTrack)if(t===this._innerColor||t===this._innerColorThumb)window.addEventListener("touchend",this._onTouchEnd),window.addEventListener("touchcancel",this._onTouchEnd),window.addEventListener("touchmove",this._onTouchMove),this._movement=!0,this._saveStartPoints(e.touches[0].pageX);else{let r=this._getClickedValue(e.touches[0].pageX),o=Math.abs(this._lowInputValue-r),i=Math.abs(this._highInputValue-r);o<i?this.setValueLow(r):this.setValueHigh(r)}},this._onTouchMove=e=>{this._dragBothValuesByMousePos(e.touches[0].pageX)},this._onTouchEnd=()=>{this._movement=!1,this.onChanged(),window.removeEventListener("touchend",this._onTouchEnd),window.removeEventListener("touchcancel",this._onTouchEnd),window.removeEventListener("touchmove",this._onTouchMove)},this._onMouseDown=e=>{if(this.disabled||this.readonly)return;let t=e.composedPath()[0];if(t!==this._outerTrack)if(t===this._innerColor||t===this._innerColorThumb)window.addEventListener("mouseup",this._onMouseUp),window.addEventListener("mousemove",this._onMouseMove),this._movement=!0,this._saveStartPoints(e.pageX);else{let r=this._getClickedValue(e.pageX),o=Math.abs(this._lowInputValue-r),i=Math.abs(this._highInputValue-r);o<i?this.setValueLow(r):this.setValueHigh(r)}},this._onMouseMove=e=>{e.preventDefault(),this._dragBothValuesByMousePos(e.pageX)},this._onMouseUp=()=>{this._movement=!1,this.onChanged(),window.removeEventListener("mouseup",this._onMouseUp),window.removeEventListener("mousemove",this._onMouseMove)},this.addEventListener("keydown",bv(this,Ta)),this.addEventListener("mousedown",this._onMouseDown),this.addEventListener("touchstart",this._onTouchStart),window.addEventListener("resize",()=>{this._trackWidth=this._outerTrack?.offsetWidth})}get min(){return this._min}set min(e){this._min=e,ai(this,Rt,yr).call(this)}get max(){return this._max}set max(e){this._max=e,ai(this,Rt,yr).call(this)}get step(){return this._step}set step(e){this._step=e,ai(this,Rt,yr).call(this)}get minGap(){return this._minGap}set minGap(e){this._minGap=e,ai(this,Rt,yr).call(this)}get maxGap(){return this._maxGap}set maxGap(e){this._maxGap=e,ai(this,Rt,yr).call(this)}get value(){return super.value}set value(e){super.value=e,ai(this,Rt,yr).call(this)}setValueLow(e){e=A(e,this.maxGap?this._highInputValue-this.maxGap>this.min?this._highInputValue-this.maxGap:this.min:this.min,this.minGap?this._highInputValue-this.minGap:this._highInputValue-this.step),this.setValue(e,this._highInputValue)}setValueHigh(e){e=A(e,this.minGap?this._lowInputValue+this.minGap:this._lowInputValue+this.step,this.maxGap?this.maxGap+this._lowInputValue<this.max?this.maxGap+this._lowInputValue:this.max:this.max),this.setValue(this._lowInputValue,e)}setValue(e,t,r){if(r){let o=this.startPoint.high-this.startPoint.low;e=A(e,this.min,this.max-o),t=A(t,this.min+o,this.max)}this._inputLow.value=e.toString(),this._inputHigh.value=t.toString(),this.value=`${e},${t}`}getFormElement(){return this._currentFocus?this._currentFocus:this._inputLow}async focus(){await this.updateComplete,this.getFormElement().focus()}async blur(){await this.updateComplete,this.getFormElement().blur()}connectedCallback(){super.connectedCallback(),this.value||(this.value=`${this._min},${this._max}`)}firstUpdated(e){super.updated(e),this._trackWidth=this._outerTrack.offsetWidth,this._runPropertiesChecks()}_runPropertiesChecks(){if(new RegExp(/^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/).test(this.value)||console.error("Range slider (Value error occurred): Bad input"),this._highInputValue===this._lowInputValue&&console.error("Range slider (Value error occurred): Low-end and high-end value should never be equal. Use <uui-slider></uui-slider> instead."),this._lowInputValue>this._highInputValue&&console.error("Range slider (Value error occurred): Low-end value should never be higher than high-end value."),(this._highInputValue>this._max||this._highInputValue<this._min)&&(this.setValueHigh(this._max),console.warn(`Conflict with the high-end value and max value. High-end value has been converted to the max value (${this._max})`)),(this._lowInputValue<this._min||this._lowInputValue>this._max)&&(this.setValueLow(this._min),console.warn(`Conflict with the low-end value and min value. Low-end value has been converted to the min value (${this._min})`)),this._step<=0&&(this._step=1,console.warn("Property step needs a value higher than 0. Converted the step value to 1 (default)")),(this._max-this._min)/this._step%1!==0&&console.error("Conflict with step value and the min and max values. May experience bad side effects"),this._minGap&&this._minGap<this._step&&(this._minGap=void 0,console.warn("Conflict with min-gap and step value. The min-gap needs to be higher than the step value. Removed the min-gap property.")),this._minGap&&this._maxGap&&this._minGap>this._maxGap&&(this._minGap=void 0,this._maxGap=void 0,console.warn("Conflict with min-gap and max-gap. Removed the min-gap and max-gap properties.")),this._minGap&&this._max-this._min<this._minGap&&(this._minGap=void 0,console.warn("Conflict with the min-gap and the total range. Removed the min-gap.")),this._maxGap&&this._highInputValue-this._lowInputValue>this._maxGap&&(this.setValueHigh(this._lowInputValue+this._maxGap),console.warn(`Conflict with value and max-gap. High-end value has been converted to the highest possible value based on the low-end value and the max gap value (${this._highInputValue})`)),this._minGap&&this._highInputValue-this._lowInputValue<this._minGap){let t=this._minGap;this._highInputValue-t<this._min?(this.setValueHigh(this._lowInputValue+t),console.warn(`Conflict with value and min gap. High-end value has been converted to the lowest possible value based on the low-end value and the min gap value (${this._highInputValue}).`)):(this.setValueLow(this._highInputValue-t),console.warn(`Conflict with value and min gap. Low-end value has been converted to the highest possible value based on the high-end value and the min gap value (${this._lowInputValue}).`))}}_updateInnerColor(){let e=this._max-this._min,t=this._lowInputValue-this._min,r=this._highInputValue-this._min,o=t/e*100,i=100-r/e*100;this._lowValuePercentStart=A(o,0,100),this._highValuePercentEnd=A(i,0,100)}_getClickedValue(e){let t=this._outerTrack.getBoundingClientRect().left,i=(e-t-_t)/(this._trackWidth-_t*2)*(this._max-this._min)+this._min;return Math.round(i/this._step)*this._step}_saveStartPoints(e){this.startPoint={mouse:e,low:this._lowInputValue,high:this._highInputValue}}_dragBothValuesByMousePos(e){let t=this._outerTrack.offsetWidth,r=e-this.startPoint.mouse,o=this._max-this._min,i=r/(t+_t*2),s=Math.round(i*o/this._step)*this._step,n=this.startPoint.low+s,u=this.startPoint.high+s;this.setValue(n,u,!0),this.dispatchEvent(new Ne(Ne.INPUT))}_onLowInput(e){this.disabled&&e.preventDefault(),this.readonly&&e.preventDefault(),this._currentFocus=this._inputLow;let t=Number(e.target.value);this.setValueLow(t),this.dispatchEvent(new Ne(Ne.INPUT))}_onHighInput(e){this.disabled&&e.preventDefault(),this.readonly&&e.preventDefault(),this._currentFocus=this._inputHigh;let t=Number(e.target.value);this.setValueHigh(t),this.dispatchEvent(new Ne(Ne.INPUT))}_onLowChange(){this.setValueLow(Number(this._inputLow.value)),this.onChanged()}_onHighChange(){this.setValueHigh(Number(this._inputHigh.value)),this.onChanged()}onChanged(){this.pristine=!1,this.dispatchEvent(new Ne(Ne.CHANGE))}render(){return l`
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
          >${this._lowInputValue.toFixed(Ua(this._step))}</span
        ></span
      >
      <span
        ><span
          >${this._highInputValue.toFixed(Ua(this._step))}</span
        ></span
      >
    </div>`}_renderSteps(){let e=(this._max-this._min)/this._step,t=(this._trackWidth-_t*2)/e;if(t<gv||e%1!==0)return;let r=0,o=new Array(e+1).fill(t).map(i=>i*r++);return l`<div class="step-wrapper">
      <svg height="100%" width="100%">
        <rect x="9" y="9" height="${li}" rx="2" />
        ${this._renderStepCircles(o)}
      </svg>
      ${this._renderStepValues(e)}
    </div>`}_renderStepValues(e){if(this.hideStepValues||e>20)return;let t=0,r=new Array(e+1).fill(this._step).map(o=>(this._min+o*t++).toFixed(Ua(this._step)));return l`<div class="step-values">
      ${r.map(o=>l`<span><span>${o}</span></span>`)}
    </div>`}_renderStepCircles(e){let t=this._trackWidth/(this._max-this._min);return y`${e.map(r=>{let o=r+_t,i=this._lowInputValue-this._min,s=this._highInputValue-this._min;return o/t>=i&&o/t<=s?y`<circle class="track-step filled" cx="${o}" cy="${li*2}" r="4.5" />`:y`<circle class="track-step regular" cx="${o}" cy="${li*2}" r="4.5" />`})}`}_renderNativeInputs(){return l` <div class="native-wrapper">
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
    </div>`}};Rt=new WeakSet;yr=function(){let e=this.value.split(","),t=Number(e[0])||0,r=Number(e[1])||0;r=A(r,this._min,this._max),t=this._min+Math.round((t-this._min)/this._step)*this._step,r=this._min+Math.round((r-this._min)/this._step)*this._step,this._lowInputValue=A(t,this._min,this._minGap?r-this._minGap:r-this._step),this._highInputValue=A(r,this._minGap?this._lowInputValue+this._minGap:this._lowInputValue+this._step,Math.min(this._maxGap?t+this._maxGap:this._max,this._max)),this._updateInnerColor(),this.requestUpdate()};Ta=new WeakMap;N.formAssociated=!0;N.styles=[c`
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
        left: ${_t}px; /* Match TRACK_MARGIN */
        right: ${_t}px; /* Match TRACK_MARGIN */
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
        z-index: ${Da.CENTER};
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
        height: ${li*2}px;
        background-color: var(--color-hover);
        transform: translateY(-${li/2}px);
      }

      .color {
        user-select: none;
        position: absolute;
        inset-inline: 0;
        height: ${li}px;
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
        margin: 0 ${-1*_t}px;
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
        margin: 0 ${_t}px; /* Match TRACK_MARGIN */
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
        z-index: ${Da.TOP};
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
        z-index: ${Da.TOP};
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
    `];B([a({type:String})],N.prototype,"label",2);B([a({type:Boolean,reflect:!0})],N.prototype,"disabled",2);B([a({type:Boolean,reflect:!0})],N.prototype,"readonly",2);B([a({type:Number})],N.prototype,"min",1);B([a({type:Number})],N.prototype,"max",1);B([a({type:Boolean,attribute:"hide-step-values"})],N.prototype,"hideStepValues",2);B([a({type:Number})],N.prototype,"step",1);B([a({type:Number,attribute:"min-gap"})],N.prototype,"minGap",1);B([a({type:Number,attribute:"max-gap"})],N.prototype,"maxGap",1);B([a({type:String})],N.prototype,"value",1);B([v()],N.prototype,"_movement",2);B([v()],N.prototype,"_lowInputValue",2);B([v()],N.prototype,"_highInputValue",2);B([v()],N.prototype,"_trackWidth",2);B([v()],N.prototype,"_lowValuePercentStart",2);B([v()],N.prototype,"_highValuePercentEnd",2);B([$("#range-slider")],N.prototype,"_outerTrack",2);B([$("#inputLow")],N.prototype,"_inputLow",2);B([$("#inputHigh")],N.prototype,"_inputHigh",2);B([$(".color")],N.prototype,"_innerColor",2);B([$("#inner-color-thumb")],N.prototype,"_innerColorThumb",2);N=B([h("uui-range-slider")],N);var yv=Object.getOwnPropertyDescriptor,_v=(e,t,r,o)=>{for(var i=o>1?void 0:o?yv(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=n(i)||i);return i},Na=class extends p{render(){return l`<slot></slot>`}};Na.styles=[c`
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
    `];Na=_v([h("uui-ref-list")],Na);var _r=class extends k{};_r.OPEN="open";var xv=Object.defineProperty,wv=Object.getOwnPropertyDescriptor,Vs=(e,t,r,o)=>{for(var i=o>1?void 0:o?wv(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&xv(t,r,i),i},xt=class extends $t(Oe(p)){constructor(){super(...arguments),this.disabled=!1,this.readonly=!1,this.error=!1}handleOpenClick(e){e.stopPropagation(),this.dispatchEvent(new _r(_r.OPEN))}handleOpenKeydown(e){e.key!==" "&&e.key!=="Enter"||(e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new _r(_r.OPEN)))}};xt.styles=[c`
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
    `];Vs([a({type:Boolean,reflect:!0})],xt.prototype,"disabled",2);Vs([a({type:Boolean,reflect:!0})],xt.prototype,"readonly",2);Vs([a({type:Boolean,reflect:!0})],xt.prototype,"error",2);xt=Vs([h("uui-ref")],xt);var kv=Object.defineProperty,Ev=Object.getOwnPropertyDescriptor,jc=e=>{throw TypeError(e)},xr=(e,t,r,o)=>{for(var i=o>1?void 0:o?Ev(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&kv(t,r,i),i},Cv=(e,t,r)=>t.has(e)||jc("Cannot "+r),$v=(e,t,r)=>t.has(e)?jc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Wt=(e,t,r)=>(Cv(e,t,"access private method"),r),tt,Rc,Wc,Hs,Fc,qc,Gc,U=class extends xt{constructor(){super(...arguments),$v(this,tt),this.name="",this.detail="",this._iconSlotHasContent=!1,this.fallbackIcon=`<svg
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
  </svg>`}connectedCallback(){super.connectedCallback(),_(this,"uui-icon")}renderDetail(){return l`<small id="detail"
      >${this.detail}<slot name="detail"></slot
    ></small>`}render(){return l`
      ${Wt(this,tt,Gc).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>

      <slot></slot>
      <slot name="tag" id="tag-container"></slot>
      <slot name="actions" id="actions-container"></slot>
    `}};tt=new WeakSet;Rc=function(e){this._iconSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0};Wc=function(){return l`<uui-icon .svg="${this.fallbackIcon}"></uui-icon>`};Hs=function(){return l`
      <span id="content" class="uui-text">
        <span id="icon">
          <slot name="icon" @slotchange=${Wt(this,tt,Rc)}></slot>
          ${this._iconSlotHasContent===!1?Wt(this,tt,Wc).call(this):""}
        </span>
        <div id="info">
          <div id="name">${this.name}<slot name="name"></slot></div>
          ${this.renderDetail()}
        </div>
      </span>
    `};Fc=function(){return l`<a
      id="open-part"
      class="uui-text"
      tabindex=${this.disabled?w:"0"}
      href=${x(this.disabled?void 0:this.href)}
      target=${x(this.target||void 0)}
      rel=${x(this.rel||x(this.target==="_blank"?"noopener noreferrer":void 0))}>
      ${Wt(this,tt,Hs).call(this)}
    </a>`};qc=function(){return l`
      <button
        type="button"
        id="open-part"
        class="uui-text"
        tabindex="0"
        @click=${this.handleOpenClick}
        @keydown=${this.handleOpenKeydown}
        ?disabled=${this.disabled}>
        ${Wt(this,tt,Hs).call(this)}
      </button>
    `};Gc=function(){return this.readonly?l`${Wt(this,tt,Hs).call(this)}`:this.href?Wt(this,tt,Fc).call(this):Wt(this,tt,qc).call(this)};U.styles=[...xt.styles,c`
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
    `];xr([a({type:String})],U.prototype,"name",2);xr([a({type:String})],U.prototype,"detail",2);xr([a({type:String})],U.prototype,"href",2);xr([a({type:String})],U.prototype,"target",2);xr([a({type:String})],U.prototype,"rel",2);xr([v()],U.prototype,"_iconSlotHasContent",2);U=xr([h("uui-ref-node")],U);var Pv=Object.defineProperty,Sv=Object.getOwnPropertyDescriptor,Kc=(e,t,r,o)=>{for(var i=o>1?void 0:o?Sv(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Pv(t,r,i),i},Bs=class extends U{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M142.212 397.267l106.052-48.024L398.479 199.03l-26.405-26.442-90.519 90.517-15.843-15.891 90.484-90.486-16.204-16.217-150.246 150.243-47.534 106.513zm74.904-100.739l23.285-23.283 3.353 22.221 22.008 3.124-23.283 23.313-46.176 20.991 20.813-46.366zm257.6-173.71L416.188 64.3l-49.755 49.785 58.504 58.503 49.779-49.77zM357.357 300.227h82.826v116.445H68.929V300.227h88.719v-30.648H38.288v177.733h432.537V269.578H357.357v30.649z"></path></svg>',this.alias=""}renderDetail(){let e=[];return this.alias!==""&&e.push(this.alias),this.detail!==""&&e.push(this.detail),l`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`}};Bs.styles=[...U.styles];Kc([a({type:String})],Bs.prototype,"alias",2);Bs=Kc([h("uui-ref-node-data-type")],Bs);var Ov=Object.defineProperty,Av=Object.getOwnPropertyDescriptor,Xc=(e,t,r,o)=>{for(var i=o>1?void 0:o?Av(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Ov(t,r,i),i},js=class extends U{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M49.035 60.434h413.93v33.592H49.035zm0 82.005h86.578v86.577H49.035zm163.677 0h86.576v86.577h-86.576zm163.676 0h86.576v86.577h-86.576zM49.035 282.984h413.93v33.593H49.035zm0 82.006h86.578v86.576H49.035zm163.677 0h86.576v86.576h-86.576zm163.676 0h86.576v86.576h-86.576z"></path></svg>',this.alias=""}renderDetail(){let e=[];return this.alias!==""&&e.push(this.alias),this.detail!==""&&e.push(this.detail),l`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`}};js.styles=[...U.styles];Xc([a({type:String})],js.prototype,"alias",2);js=Xc([h("uui-ref-node-document-type")],js);var Iv=Object.getOwnPropertyDescriptor,Mv=(e,t,r,o)=>{for(var i=o>1?void 0:o?Iv(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=n(i)||i);return i},Va=class extends U{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M444.72 215.28H67.28c-11.04 0-20-8.96-20-20V64.896c0-11.04 8.96-20 20-20h377.44c11.04 0 20 8.96 20 20V195.28c0 11.056-8.96 20-20 20zm-357.44-40h337.44V84.896H87.28v90.384zm185.504 215.696c0-6.848.704-13.504 1.936-20H87.28v-90.384h337.44v12.496a108.098 108.098 0 0140 31.36v-63.856c0-11.04-8.96-20-20-20H67.28c-11.04 0-20 8.96-20 20v130.384c0 11.04 8.96 20 20 20h207.44c-1.232-6.496-1.936-13.152-1.936-20zm107.552-76.128c-41.968 0-76.112 34.16-76.112 76.128s34.144 76.128 76.112 76.128 76.128-34.16 76.128-76.128-34.144-76.128-76.128-76.128zm46.016 80.464a7.293 7.293 0 01-7.296 7.296h-27.072v27.088a7.293 7.293 0 01-7.296 7.296H376a7.293 7.293 0 01-7.296-7.296v-27.088h-27.072a7.293 7.293 0 01-7.296-7.296v-8.672a7.293 7.293 0 017.296-7.296h27.072v-27.088A7.293 7.293 0 01376 344.96h8.688a7.293 7.293 0 017.296 7.296v27.088h27.072a7.293 7.293 0 017.296 7.296v8.672z"></path></svg>'}};Va.styles=[...U.styles];Va=Mv([h("uui-ref-node-form")],Va);var zv=Object.defineProperty,Lv=Object.getOwnPropertyDescriptor,Yc=(e,t,r,o)=>{for(var i=o>1?void 0:o?Lv(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&zv(t,r,i),i},Rs=class extends U{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M331.135 98.375c3.677 14.798 4.045 16.031 3.702 31.225-.138 5.855-3.5 32.936-2.586 41.242.751 6.851 2.46 7.395 5.162 13.041 4.705 9.824 3.13 23.376 1.325 33.282-.988 5.42-3.076 13.136-6.248 17.561-3.497 4.876-10.498 4.913-13.592 10.602-4.459 8.195-1.941 19.692-4.752 28.54-3.193 10.033-11.325 10.738-11.938 23.867 3.986.562 7.962 1.134 11.938 1.703 3.99 8.484 11.297 25.552 18.759 30.688 6.25 1.705 12.505 3.411 18.752 5.113 21.907 8.982 46.251 19.732 68.204 28.987 19.991 8.434 43.927 11.439 51.151 32.396 0 14.229 1.343 47.849.976 66.497H36.514c-.367-18.648.974-52.268.974-66.497 7.226-20.957 31.16-23.963 51.151-32.396 21.953-9.255 46.297-20.005 68.201-28.987 6.25-1.702 12.506-3.408 18.754-5.113 7.461-5.136 14.77-22.203 18.76-30.688l8.877-2.158c-2.017-11.206-8.954-12.078-11.845-20.01a91882.59 91882.59 0 00-3.408-35.806c.055.563-8.163-1.497-9.238-2.171-11.58-7.256-11.816-36.723-12.931-48.978-.508-5.603 7.283-10.193 5.118-20.465-12.69-60.138 5.486-88.282 34.229-97.614 19.95-8.083 57.198-23.074 91.941-1.703l8.621 7.991 13.952 2.405c7 4.041 11.465 17.446 11.465 17.446z"></path></svg>',this.groupName=""}renderDetail(){let e=[];return this.detail!==""&&e.push(this.detail),this.groupName!==""&&e.push(this.groupName),l`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`}};Rs.styles=[...U.styles];Yc([a({type:String,attribute:"group-name"})],Rs.prototype,"groupName",2);Rs=Yc([h("uui-ref-node-member")],Rs);var Dv=Object.defineProperty,Uv=Object.getOwnPropertyDescriptor,Ha=(e,t,r,o)=>{for(var i=o>1?void 0:o?Uv(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Dv(t,r,i),i},uo=class extends U{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M161.08 106.29l-70.073 40.452 165.498 95.545 70.076-40.453L161.08 106.29zm259.851 41.077L255.435 51.815l-63.578 36.709 165.499 95.542 63.575-36.699zm-150.11 122.19V459.43l164.966-95.238V174.32l-164.966 95.237zM75.082 364.191l164.959 95.234V268.32L75.082 173.09v191.101z"></path></svg>',this.version="",this.author=""}renderDetail(){let e=[];return this.detail!==""&&e.push(this.detail),this.version!==""&&e.push(this.version),this.author!==""&&e.push(this.author),l`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`}};uo.styles=[...U.styles];Ha([a({type:String})],uo.prototype,"version",2);Ha([a({type:String})],uo.prototype,"author",2);uo=Ha([h("uui-ref-node-package")],uo);var Tv=Object.defineProperty,Nv=Object.getOwnPropertyDescriptor,Zc=(e,t,r,o)=>{for(var i=o>1?void 0:o?Nv(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Tv(t,r,i),i},Ws=class extends U{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M331.135 98.375c3.677 14.798 4.045 16.031 3.702 31.225-.138 5.855-3.5 32.936-2.586 41.242.751 6.851 2.46 7.395 5.162 13.041 4.705 9.824 3.13 23.376 1.325 33.282-.988 5.42-3.076 13.136-6.248 17.561-3.497 4.876-10.498 4.913-13.592 10.602-4.459 8.195-1.941 19.692-4.752 28.54-3.193 10.033-11.325 10.738-11.938 23.867 3.986.562 7.962 1.134 11.938 1.703 3.99 8.484 11.297 25.552 18.759 30.688 6.25 1.705 12.505 3.411 18.752 5.113 21.907 8.982 46.251 19.732 68.204 28.987 19.991 8.434 43.927 11.439 51.151 32.396 0 14.229 1.343 47.849.976 66.497H36.514c-.367-18.648.974-52.268.974-66.497 7.226-20.957 31.16-23.963 51.151-32.396 21.953-9.255 46.297-20.005 68.201-28.987 6.25-1.702 12.506-3.408 18.754-5.113 7.461-5.136 14.77-22.203 18.76-30.688l8.877-2.158c-2.017-11.206-8.954-12.078-11.845-20.01a91882.59 91882.59 0 00-3.408-35.806c.055.563-8.163-1.497-9.238-2.171-11.58-7.256-11.816-36.723-12.931-48.978-.508-5.603 7.283-10.193 5.118-20.465-12.69-60.138 5.486-88.282 34.229-97.614 19.95-8.083 57.198-23.074 91.941-1.703l8.621 7.991 13.952 2.405c7 4.041 11.465 17.446 11.465 17.446z"></path></svg>',this.groupName=""}renderDetail(){let e=[];return this.detail!==""&&e.push(this.detail),this.groupName!==""&&e.push(this.groupName),l`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`}};Ws.styles=[...U.styles];Zc([a({type:String,attribute:"group-name"})],Ws.prototype,"groupName",2);Ws=Zc([h("uui-ref-node-user")],Ws);var Vv=Object.defineProperty,Hv=Object.getOwnPropertyDescriptor,Jc=(e,t,r,o)=>{for(var i=o>1?void 0:o?Hv(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Vv(t,r,i),i},Fs=class extends p{constructor(){super(...arguments),this.enforceScroll=!1}connectedCallback(){super.connectedCallback(),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")}render(){return l`<slot></slot>`}};Fs.styles=[c`
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
    `];Jc([a({type:Boolean,reflect:!0,attribute:"enforce-scroll"})],Fs.prototype,"enforceScroll",2);Fs=Jc([h("uui-scroll-container")],Fs);var co=class extends k{constructor(t,r={}){super(t,{bubbles:!0,...r})}};co.CHANGE="change";var Bv=Object.defineProperty,jv=Object.getOwnPropertyDescriptor,Re=(e,t,r,o)=>{for(var i=o>1?void 0:o?jv(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Bv(t,r,i),i},$e=class extends G(p,""){constructor(){super(),this.placeholder="",this.disabled=!1,this.readonly=!1,this.error=!1,this.options=[],this._groups=[],this.disabledGroups="",this._disabledGroups=[],this._values=[],this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0")}),this.addEventListener("blur",()=>{this.style.setProperty("--uui-show-focus-outline","")})}async focus(){await this.updateComplete,this._input.focus()}async blur(){await this.updateComplete,this._input.blur()}async click(){await this.updateComplete,this._input.click()}getFormElement(){return this._input}connectedCallback(){super.connectedCallback(),this.label||console.warn(this.tagName+" needs a `label`",this)}_createDisabledGroups(){this.disabledGroups.length!==0&&(this._disabledGroups=this.disabledGroups.split(","))}_extractGroups(){this.options.length!==0&&(this._groups=Array.from(new Set(this.options.filter(e=>e.group).map(e=>e.group))))}willUpdate(e){if(e.has("options")){this._extractGroups(),this._values=this.options.map(r=>r.value);let t=this.options.find(r=>r.selected);this.value=t?t.value:""}e.has("value")&&(this.value=this._values.includes(this.value)?this.value:""),e.has("disabledGroups")&&this._createDisabledGroups()}setValue(e){e.stopPropagation();let t=e.target;e.target&&(this.value=t.value),this.dispatchEvent(new co(co.CHANGE,{bubbles:!0,composed:!1}))}_renderOption(e,t,r,o){return l`<option
      value="${t}"
      ?selected=${r}
      ?disabled=${o}>
      ${e}
    </option>`}_renderGrouped(){return this._groups.length===0?w:l`
      ${this._groups.map(e=>l`<optgroup
            label=${e}
            ?disabled=${this._disabledGroups.some(t=>t.toLowerCase()===e.toLowerCase())}>
            ${this.options.map(t=>t.group===e?this._renderOption(t.name,t.value,t.selected,t.disabled):"")}
          </optgroup>`)}
    `}_getDisplayValue(){return this.options.find(e=>e.value===this.value)?.name||this.value}render(){return this.readonly?l`<span>${this._getDisplayValue()}</span>`:l` <select
      id="native"
      aria-label=${this.label}
      @change=${this.setValue}
      ?disabled=${this.disabled}
      .name=${this.name}
      .value=${this.value}>
      <option disabled selected value="" hidden>${this.placeholder}</option>
      ${this._renderGrouped()}
      ${this.options.filter(e=>!e.group).map(e=>this._renderOption(e.name,e.value,e.selected,e.disabled))}
    </select>`}};$e.styles=[c`
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
    `];Re([a({type:String})],$e.prototype,"label",2);Re([a()],$e.prototype,"placeholder",2);Re([a({type:Boolean,reflect:!0})],$e.prototype,"disabled",2);Re([a({type:Boolean,reflect:!0})],$e.prototype,"readonly",2);Re([a({type:Boolean,reflect:!0})],$e.prototype,"error",2);Re([a({type:Array,attribute:!1})],$e.prototype,"options",2);Re([v()],$e.prototype,"_groups",2);Re([a()],$e.prototype,"disabledGroups",2);Re([v()],$e.prototype,"_disabledGroups",2);Re([$("#native")],$e.prototype,"_input",2);$e=Re([h("uui-select")],$e);var Rv=c`
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
`,Ft=class extends k{constructor(t,r={}){super(t,{bubbles:!0,...r})}};Ft.INPUT="input";Ft.CHANGE="change";var Wv=Object.defineProperty,Fv=Object.getOwnPropertyDescriptor,rh=e=>{throw TypeError(e)},ve=(e,t,r,o)=>{for(var i=o>1?void 0:o?Fv(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Wv(t,r,i),i},Ra=(e,t,r)=>t.has(e)||rh("Cannot "+r),Qc=(e,t,r)=>(Ra(e,t,"read from private field"),r?r.call(e):t.get(e)),Ba=(e,t,r)=>t.has(e)?rh("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),eh=(e,t,r,o)=>(Ra(e,t,"write to private field"),t.set(e,r),r),qv=(e,t,r)=>(Ra(e,t,"access private method"),r),qs,Gs,ja,ih,ho=12,th=24,Gv=(e,t,r)=>Array.from({length:(t-e)/r+1},(o,i)=>e+i*r),Kv=e=>{let t=e.toString().indexOf(".");return t>=0?e.toString().length-t-1:0},re=class extends G(p,""){constructor(){super(),Ba(this,ja),Ba(this,qs,0),this.hideStepValues=!1,this.hideValueLabel=!1,this.min=0,this.max=100,Ba(this,Gs,1),this.disabled=!1,this.readonly=!1,this._stepWidth=0,this.onWindowResize=()=>{this._stepWidth=this._calculateStepWidth()},this._steps=[],this._sliderPosition="0%",this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0")}),this.addEventListener("blur",()=>{this.style.setProperty("--uui-show-focus-outline","")}),this.addEventListener("keydown",qv(this,ja,ih))}get step(){return Qc(this,Gs)}set step(e){eh(this,Gs,e),eh(this,qs,(e.toString().split(".")[1]||[]).length)}get value(){return super.value}set value(e){if(e instanceof File)return;let t=super.value,r=e?parseFloat(e):0;r=Math.min(Math.max(r,this.min),this.max),this.step>0&&(r=Math.round(r/this.step)*this.step),super.value=r.toFixed(Qc(this,qs)).toString(),this._calculateSliderPosition(),this.requestUpdate("value",t)}async focus(){await this.updateComplete,this._input.focus()}async blur(){await this.updateComplete,this._input.blur()}async click(){await this.updateComplete,this._input.click()}getFormElement(){return this._input}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.onWindowResize),this.label||console.warn(this.tagName+" needs a `label`",this)}disconnectedCallback(){window.removeEventListener("resize",this.onWindowResize),super.disconnectedCallback()}firstUpdated(){this._calculateSliderPosition(),this._updateSteps()}updated(e){super.updated(e),(e.get("max")||e.get("min")||e.get("step"))&&(this.value=this.value,this._updateSteps())}_updateSteps(){this._steps=Gv(this.min,this.max,this.step),this._stepWidth=this._calculateStepWidth()}_calculateStepWidth(){return(this._track.getBoundingClientRect().width-ho*2)/(this._steps.length-1)}_calculateSliderPosition(){let e=(parseFloat(super.value||"0")-this.min)/(this.max-this.min);this._sliderPosition=`${Math.floor(e*1e5)/1e3}%`}_onInput(e){e.stopPropagation(),this.value=this._input.value,this.dispatchEvent(new Ft(Ft.INPUT))}_onChange(e){e.stopPropagation(),this.pristine=!1,this.dispatchEvent(new Ft(Ft.CHANGE))}renderTrackSteps(){return y`
  ${this._steps.map(e=>{if(this._stepWidth>=th){let t=Math.round(ho+this._stepWidth*this._steps.indexOf(e));return y`<circle class="track-step" cx="${t}" cy="50%" r="4.5" />`}return y``})}
`}renderStepValues(){return this.hideStepValues?w:l`<div id="step-values">
      ${this._steps.map(e=>l` <span
            ><span>
              ${this._steps.length<=20&&this._stepWidth>=th?e.toFixed(Kv(this.step)):w}
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
          <div id="thumb" style=${ae({left:this._sliderPosition})}>
            ${this.hideValueLabel?null:l`<div id="thumb-label">${this.value}</div>`}
          </div>
        </div>
      </div>
      ${this.renderStepValues()}
    `}};qs=new WeakMap;Gs=new WeakMap;ja=new WeakSet;ih=function(e){e.key=="Enter"&&this.submit()};re.formAssociated=!0;re.styles=[Rl,Rv,c`
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
    `];ve([a({type:Boolean,attribute:"hide-step-values"})],re.prototype,"hideStepValues",2);ve([a({type:Boolean,attribute:"hide-value-label"})],re.prototype,"hideValueLabel",2);ve([a({type:Number})],re.prototype,"min",2);ve([a({type:Number})],re.prototype,"max",2);ve([a({type:Number})],re.prototype,"step",1);ve([a({type:String})],re.prototype,"value",1);ve([a({type:Boolean,reflect:!0})],re.prototype,"disabled",2);ve([a({type:Boolean,reflect:!0})],re.prototype,"readonly",2);ve([a({type:String})],re.prototype,"label",2);ve([$("#input")],re.prototype,"_input",2);ve([$("#track")],re.prototype,"_track",2);ve([v()],re.prototype,"_stepWidth",2);ve([v()],re.prototype,"_steps",2);ve([v()],re.prototype,"_sliderPosition",2);re=ve([h("uui-slider")],re);var Xv=Object.defineProperty,Yv=Object.getOwnPropertyDescriptor,oh=(e,t,r,o)=>{for(var i=o>1?void 0:o?Yv(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Xv(t,r,i),i},Ks=class extends p{constructor(){super(...arguments),this.open=!1}render(){return l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="m4 9 8 8 8-8"></path>
    </svg>`}};Ks.styles=[c`
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
    `];oh([a({type:Boolean,reflect:!0})],Ks.prototype,"open",2);Ks=oh([h("uui-symbol-expand")],Ks);var Zv=Object.defineProperty,Jv=Object.getOwnPropertyDescriptor,Wa=(e,t,r,o)=>{for(var i=o>1?void 0:o?Jv(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Zv(t,r,i),i},po=class extends p{constructor(){super(...arguments),this.src="",this.alt=""}connectedCallback(){super.connectedCallback(),_(this,"uui-icon")}render(){return this.src?l`<img src=${this.src} alt=${this.alt} />`:l`<uui-icon
          name="picture"
          .fallback=${Jl.strings[0]}></uui-icon>`}};po.styles=[c`
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
    `];Wa([a({type:String})],po.prototype,"src",2);Wa([a({type:String})],po.prototype,"alt",2);po=Wa([h("uui-symbol-file-thumbnail")],po);var Qv=Object.defineProperty,e0=Object.getOwnPropertyDescriptor,sh=(e,t,r,o)=>{for(var i=o>1?void 0:o?e0(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Qv(t,r,i),i},Xs=class extends p{constructor(){super(...arguments),this.type=""}render(){return l`
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
    `}};Xs.styles=[Fe,c`
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
    `];sh([a({type:String})],Xs.prototype,"type",2);Xs=sh([h("uui-symbol-file")],Xs);var t0=Object.getOwnPropertyDescriptor,r0=(e,t,r,o)=>{for(var i=o>1?void 0:o?t0(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=n(i)||i);return i},Fa=class extends p{render(){return l`<svg
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
    </svg>`}};Fa.styles=[c`
      :host {
        display: block;
        position: relative;
        box-sizing: border-box;
      }

      #icon {
        width: 100%;
        color: var(--uui-color-border-standalone,#c2c2c2);
      }
    `];Fa=r0([h("uui-symbol-folder")],Fa);var i0=Object.defineProperty,o0=Object.getOwnPropertyDescriptor,nh=(e,t,r,o)=>{for(var i=o>1?void 0:o?o0(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&i0(t,r,i),i},Ys=class extends p{constructor(){super(...arguments),this.open=!1}render(){return y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      ${this.open===!0?y`<path d="M457.915 242.222H269.053l-.004-78.416c0-33.277-12.63-63.824-33.538-86.175-20.82-22.357-50.579-36.756-83.391-36.731-32.814-.024-62.57 14.375-83.391 36.731-20.915 22.351-33.541 52.897-33.547 86.175v103.859H96.19v-13.476l-35.656-35.656H96.19v-54.728c0-17.765 6.717-33.406 17.084-44.502 10.463-11.09 23.927-17.37 38.845-17.394 14.916.024 28.375 6.304 38.837 17.394 10.375 11.096 17.092 26.738 17.087 44.502v78.416h-26.189c-9.159 0-16.582 7.426-16.582 16.585v194.53c0 9.158 7.423 16.583 16.582 16.583h276.06c9.164 0 16.587-7.425 16.587-16.583v-194.53c.001-9.159-7.422-16.584-16.586-16.584z"></path>`:y`<path d="M404.84 246.573h-22.084l-.002-73.603c0-36.675-13.921-70.311-36.917-94.892-22.91-24.584-55.547-40.367-91.539-40.336-36.003-.031-68.643 15.752-91.55 40.336-23.001 24.582-36.918 58.217-36.925 94.892v73.603h-22.082c-9.16 0-16.585 7.421-16.585 16.583v194.531c0 9.158 7.425 16.585 16.585 16.585H404.84c9.162 0 16.586-7.427 16.586-16.585V263.156c0-9.161-7.424-16.583-16.586-16.583zm-218.013-73.602c0-21.167 8.012-39.893 20.468-53.219 12.552-13.316 28.896-20.982 47.003-21.007 18.095.025 34.438 7.685 46.987 21.007 12.455 13.326 20.467 32.052 20.467 53.219v73.603H186.827v-73.603z"></path>`}
    </svg>`}};Ys.styles=[c`
      :host {
        display: inline-block;
        vertical-align: middle;
        width: 1em;
      }

      svg {
        fill: currentColor;
      }
    `];nh([a({type:Boolean,reflect:!0})],Ys.prototype,"open",2);Ys=nh([h("uui-symbol-lock")],Ys);var s0=Object.getOwnPropertyDescriptor,n0=(e,t,r,o)=>{for(var i=o>1?void 0:o?s0(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=n(i)||i);return i},qa=class extends p{render(){return y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle cx="17" cy="50" r="9"></circle>
      <circle cx="50" cy="50" r="9"></circle>
      <circle cx="83" cy="50" r="9"></circle>
    </svg>`}};qa.styles=[c`
      :host {
        display: inline-block;
        vertical-align: bottom;
        width: 1.15em;
        height: 1.15em;
      }

      svg {
        fill: currentColor;
      }
    `];qa=n0([h("uui-symbol-more")],qa);var a0=Object.defineProperty,l0=Object.getOwnPropertyDescriptor,ah=(e,t,r,o)=>{for(var i=o>1?void 0:o?l0(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&a0(t,r,i),i},Zs=class extends Ke(p){constructor(){super(...arguments),this.descending=!1}render(){return l` <svg
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
      </svg>`}};Zs.styles=[c`
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
    `];ah([a({type:Boolean,reflect:!0})],Zs.prototype,"descending",2);Zs=ah([h("uui-symbol-sort")],Zs);var u0=Object.getOwnPropertyDescriptor,c0=(e,t,r,o)=>{for(var i=o>1?void 0:o?u0(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=n(i)||i);return i},Ga=class extends p{connectedCallback(){super.connectedCallback(),this.setAttribute("role","table")}render(){return l`<slot></slot>`}};Ga.styles=[c`
      :host {
        display: table;
        width: 100%;
        border-radius: var(--uui-border-radius,3px);
        background-color: var(--uui-color-surface,#fff);
        cursor: default;
      }
    `];Ga=c0([h("uui-table")],Ga);var h0=Object.defineProperty,d0=Object.getOwnPropertyDescriptor,Qs=(e,t,r,o)=>{for(var i=o>1?void 0:o?d0(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&h0(t,r,i),i},qt=class extends p{constructor(){super(...arguments),this.disableChildInteraction=!1,this.noPadding=!1,this.clipText=!1,this._observer=new ResizeObserver(()=>{this._detectOverflow()})}_detectOverflow(){this.scrollWidth>this.clientWidth?this.setAttribute("title",this.innerText):this.removeAttribute("title")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","cell")}disconnectedCallback(){super.disconnectedCallback(),this._observer.disconnect()}updated(e){super.updated(e),e.has("clipText")&&(this.clipText?(this._detectOverflow(),this._observer.observe(this)):this._observer.disconnect())}render(){return l` <slot @slotchange=${this._detectOverflow}></slot>`}};qt.styles=[c`
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
    `];Qs([a({type:Boolean,reflect:!0,attribute:"disable-child-interaction"})],qt.prototype,"disableChildInteraction",2);Qs([a({type:Boolean,reflect:!0,attribute:"no-padding"})],qt.prototype,"noPadding",2);Qs([a({type:Boolean,reflect:!0,attribute:"clip-text"})],qt.prototype,"clipText",2);qt=Qs([h("uui-table-cell")],qt);var p0=Object.getOwnPropertyDescriptor,f0=(e,t,r,o)=>{for(var i=o>1?void 0:o?p0(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=n(i)||i);return i},Ka=class extends p{};Ka.styles=[c`
      :host {
        display: table-column;
      }
    `];Ka=f0([h("uui-table-column")],Ka);var m0=Object.getOwnPropertyDescriptor,v0=(e,t,r,o)=>{for(var i=o>1?void 0:o?m0(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=n(i)||i);return i},Xa=class extends qt{connectedCallback(){super.connectedCallback(),this.setAttribute("role","columnheader")}};Xa.styles=[...qt.styles,c`
      :host {
        border-top: none;
      }
    `];Xa=v0([h("uui-table-head-cell")],Xa);var b0=Object.getOwnPropertyDescriptor,g0=(e,t,r,o)=>{for(var i=o>1?void 0:o?b0(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=n(i)||i);return i},Ya=class extends p{connectedCallback(){super.connectedCallback(),this.setAttribute("role","row")}render(){return l`<slot></slot>`}};Ya.styles=[c`
      :host {
        display: table-header-group;
        font-weight: bold;
      }
    `];Ya=g0([h("uui-table-head")],Ya);var y0=Object.defineProperty,_0=Object.getOwnPropertyDescriptor,lh=(e,t,r,o)=>{for(var i=o>1?void 0:o?_0(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&y0(t,r,i),i},Js=class extends $t(Oe(p)){constructor(){super();let e=!1;this.addEventListener("blur",()=>{e===!1&&this.style.setProperty("--uui-show-focus-outline","1"),e=!1}),this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0"),e=!0}),this.addEventListener("mouseup",()=>{e=!1})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","row")}updated(e){e.has("selectOnly")&&this.updateChildSelectOnly()}updateChildSelectOnly(){this.slotCellNodes&&this.slotCellNodes.forEach(e=>{e.disableChildInteraction!==void 0&&(e.disableChildInteraction=this.selectOnly)})}render(){return l` <slot @slotchanged=${this.updateChildSelectOnly}></slot> `}};Js.styles=[c`
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
    `];lh([de({flatten:!0,selector:"uui-table-cell, [uui-table-cell], [role=cell]"})],Js.prototype,"slotCellNodes",2);Js=lh([h("uui-table-row")],Js);var x0=Object.defineProperty,w0=Object.getOwnPropertyDescriptor,di=(e,t,r,o)=>{for(var i=o>1?void 0:o?w0(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&x0(t,r,i),i},Gt=class extends Ke(q("",p)){constructor(){super(),this.disabled=!1,this.orientation="horizontal",this.addEventListener("click",this.onHostClick)}onHostClick(e){this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}render(){return this.href?l`
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
        `}};Gt.styles=[c`
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
    `];di([a({type:Boolean,reflect:!0})],Gt.prototype,"disabled",2);di([a({type:String})],Gt.prototype,"href",2);di([a({type:String})],Gt.prototype,"target",2);di([a({type:String})],Gt.prototype,"rel",2);di([a({type:String,reflect:!0})],Gt.prototype,"orientation",2);Gt=di([h("uui-tab")],Gt);var k0=Object.defineProperty,E0=Object.getOwnPropertyDescriptor,uh=e=>{throw TypeError(e)},pi=(e,t,r,o)=>{for(var i=o>1?void 0:o?E0(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&k0(t,r,i),i},Ja=(e,t,r)=>t.has(e)||uh("Cannot "+r),I=(e,t,r)=>(Ja(e,t,"read from private field"),r?r.call(e):t.get(e)),rt=(e,t,r)=>t.has(e)?uh("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),fo=(e,t,r,o)=>(Ja(e,t,"write to private field"),t.set(e,r),r),Pe=(e,t,r)=>(Ja(e,t,"access private method"),r),tn,it,wt,ui,ci,en,vo,mo,be,ch,hh,Qa,dh,hi,rn,ph,el,Za,Kt=class extends p{constructor(){super(...arguments),rt(this,be),rt(this,tn,0),this.dropdownContentDirection="vertical",rt(this,it,[]),rt(this,wt,[]),rt(this,ui,new Map),rt(this,ci,[]),rt(this,en,new ResizeObserver(Pe(this,be,hh).bind(this))),rt(this,vo,[]),rt(this,mo,!1),rt(this,hi,e=>{let t=e.currentTarget;if(Pe(this,be,Za).call(this,t)){t.active=!0;let r=I(this,ui).get(t);r&&(r.active=!0),[...I(this,it),...I(this,wt)].filter(s=>s!==t&&s!==r).forEach(s=>{Pe(this,be,Za).call(this,s)&&(s.active=!1)}),I(this,wt).some(s=>s.active&&s!==r)?this._moreButtonElement.classList.add("active-inside"):this._moreButtonElement.classList.remove("active-inside")}})}connectedCallback(){super.connectedCallback(),Pe(this,be,ch).call(this)}disconnectedCallback(){super.disconnectedCallback(),I(this,en).unobserve(this),Pe(this,be,Qa).call(this)}render(){return l`
      <div id="main">
        <div id="grid" role="tablist">
          <slot @slotchange=${Pe(this,be,dh)}></slot>
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
          ${Yr(I(this,wt),e=>l`${e}`)}
        </div>
      </uui-popover-container>
    `}};tn=new WeakMap;it=new WeakMap;wt=new WeakMap;ui=new WeakMap;ci=new WeakMap;en=new WeakMap;vo=new WeakMap;mo=new WeakMap;be=new WeakSet;ch=async function(){_(this,"uui-button"),_(this,"uui-popover-container"),_(this,"uui-symbol-more"),await this.updateComplete,I(this,en).observe(this._mainElement)};hh=function(e){let t=Number.parseFloat(this.style.getPropertyValue("--uui-tab-group-gap"));(Number.isNaN(t)?0:t)!==I(this,tn)?Pe(this,be,rn).call(this):Pe(this,be,el).call(this,e[0].contentBoxSize[0].inlineSize)};Qa=function(){I(this,it).forEach(e=>{e.removeEventListener("click",I(this,hi)),I(this,vo).forEach(t=>t.disconnect())}),I(this,vo).length=0,I(this,ci).length=0};dh=function(){Pe(this,be,Qa).call(this),Pe(this,be,ph).call(this),I(this,it).forEach(e=>{e.addEventListener("click",I(this,hi));let t=new ResizeObserver(Pe(this,be,rn).bind(this));t.observe(e),I(this,vo).push(t)})};hi=new WeakMap;rn=async function(){if(I(this,mo))return;fo(this,mo,!0),requestAnimationFrame(()=>{fo(this,mo,!1)}),await this.updateComplete;let e=Number.parseFloat(this.style.getPropertyValue("--uui-tab-group-gap")),t=Number.isNaN(e)?0:e;fo(this,tn,t);let r=0;for(let i=0;i<I(this,it).length;i++)I(this,it)[i].style.display="",r+=I(this,it)[i].offsetWidth,I(this,ci)[i]=r,r+=t;let o=2;this._mainElement.style.width=r-t+o+"px",Pe(this,be,el).call(this,this._mainElement.offsetWidth)};ph=function(){fo(this,it,this._slottedNodes?this._slottedNodes:[]),Pe(this,be,rn).call(this)};el=function(e){let t=this._moreButtonElement.offsetWidth,r=e-(t||0);I(this,wt).forEach(s=>{s.removeEventListener("click",I(this,hi))}),fo(this,wt,[]),I(this,ui).clear();let o=!1,i=I(this,ci).length;for(let s=0;s<i;s++){let n=I(this,ci)[s],u=I(this,it)[s];if(n<=(s===i-1?e:r))u.style.display="";else{let d=u.cloneNode(!0);d.addEventListener("click",I(this,hi)),d.classList.add("hidden-tab"),d.style.display="",d.orientation=this.dropdownContentDirection,I(this,ui).set(d,u),I(this,ui).set(u,d),I(this,wt).push(d),u.style.display="none",u.active&&(o=!0)}}I(this,wt).length===0?(this._moreButtonElement.style.display="none",this._popoverContainerElement.hidePopover()):this._moreButtonElement.style.display="",o?this._moreButtonElement.classList.add("active-inside"):this._moreButtonElement.classList.remove("active-inside"),this.requestUpdate()};Za=function(e){return typeof e=="object"&&"active"in e&&typeof e.active=="boolean"};Kt.styles=[c`
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
    `];pi([$("#more-button")],Kt.prototype,"_moreButtonElement",2);pi([$("#popover-container")],Kt.prototype,"_popoverContainerElement",2);pi([$("#main")],Kt.prototype,"_mainElement",2);pi([de({flatten:!0,selector:"uui-tab, [uui-tab], [role=tab]"})],Kt.prototype,"_slottedNodes",2);pi([a({type:String,reflect:!0,attribute:"dropdown-content-direction"})],Kt.prototype,"dropdownContentDirection",2);Kt=pi([h("uui-tab-group")],Kt);var C0=Object.defineProperty,$0=Object.getOwnPropertyDescriptor,tl=(e,t,r,o)=>{for(var i=o>1?void 0:o?$0(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&C0(t,r,i),i},bo=class extends p{constructor(){super(...arguments),this.color="default",this.look="primary"}render(){return l`<slot></slot>`}};bo.styles=[c`
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
    `];tl([a({reflect:!0})],bo.prototype,"color",2);tl([a({reflect:!0})],bo.prototype,"look",2);bo=tl([h("uui-tag")],bo);var fi=class extends k{constructor(t,r={}){super(t,{bubbles:!0,...r})}};fi.CHANGE="change";fi.INPUT="input";var P0=Object.defineProperty,S0=Object.getOwnPropertyDescriptor,he=(e,t,r,o)=>{for(var i=o>1?void 0:o?S0(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&P0(t,r,i),i},Y=class extends G(p,""){constructor(){super(),this.placeholder="",this.disabled=!1,this.readonly=!1,this.name="",this.error=!1,this.minlengthMessage=e=>`${e} characters left`,this.maxlengthMessage=(e,t)=>`Maximum ${e} characters, ${t} too many.`,this.autoHeight=!1,this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0")}),this.addEventListener("blur",()=>{this.style.setProperty("--uui-show-focus-outline","")}),this.addValidator("tooShort",()=>{let e=this.minlengthMessage;return typeof e=="function"?e(this.minlength?this.minlength-String(this.value).length:0):e},()=>!!this.minlength&&this.value.length<this.minlength),this.addValidator("tooLong",()=>{let e=this.maxlengthMessage;return typeof e=="function"?e(this.maxlength??0,String(this.value).length):e},()=>!!this.maxlength&&this.value.length>this.maxlength)}connectedCallback(){super.connectedCallback(),this.label||console.warn(this.tagName+" needs a `label`",this),this.autoHeight&&requestAnimationFrame(()=>{this.autoUpdateHeight()})}async focus(){await this.updateComplete,this._textarea.focus()}async blur(){await this.updateComplete,this._textarea.blur()}async click(){await this.updateComplete,this._textarea.click()}getFormElement(){return this._textarea}onInput(e){this.value=e.target.value,this.autoHeight&&this.autoUpdateHeight()}onChange(e){e.stopPropagation(),this.pristine=!1,this.dispatchEvent(new fi(fi.CHANGE))}autoUpdateHeight(){let e=this.shadowRoot.host,t=this._textarea,r=e.scrollTop,o=getComputedStyle(e).height;e.style.display="block",e.style.height=o,t.style.height="auto",t.scrollHeight+2>t.clientHeight?t.style.height=t.scrollHeight+2+"px":t.scrollHeight+2<t.clientHeight&&t.style.removeProperty("height"),e.style.removeProperty("display"),e.style.removeProperty("height"),e.scrollTop=r}render(){return l`
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
    `}};Y.formAssociated=!0;Y.styles=[c`
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
    `];he([a()],Y.prototype,"placeholder",2);he([a({type:Boolean,reflect:!0})],Y.prototype,"disabled",2);he([a({type:Boolean,reflect:!0})],Y.prototype,"readonly",2);he([a({type:String})],Y.prototype,"name",2);he([a({type:Boolean,reflect:!0})],Y.prototype,"error",2);he([a({type:Number})],Y.prototype,"minlength",2);he([a({attribute:"minlength-message"})],Y.prototype,"minlengthMessage",2);he([a({type:Number})],Y.prototype,"maxlength",2);he([a({attribute:"maxlength-message"})],Y.prototype,"maxlengthMessage",2);he([$("#textarea")],Y.prototype,"_textarea",2);he([a({type:Boolean,attribute:"auto-height",reflect:!0})],Y.prototype,"autoHeight",2);he([a({type:String})],Y.prototype,"label",2);he([a({type:Number})],Y.prototype,"rows",2);he([a({type:Number})],Y.prototype,"cols",2);he([a({type:String})],Y.prototype,"wrap",2);Y=he([h("uui-textarea")],Y);var se=class extends k{};se.OPENING="opening";se.OPENED="opened";se.CLOSING="closing";se.CLOSED="closed";var O0=Object.defineProperty,A0=Object.getOwnPropertyDescriptor,mi=(e,t,r,o)=>{for(var i=o>1?void 0:o?A0(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&O0(t,r,i),i},Xt=class extends p{constructor(){super(),this.color="",this._autoClose=null,this._onOpenTimerComplete=()=>{this._open&&(this.open=!1)},this._timer=null,this._pauseTimer=!1,this.isOpen=!1,this._open=!1,this._animate=!1,this._requestAnimationUpdate=0,this.addEventListener("keyup",e=>{e.key==="Escape"&&(this.open=!1)})}get autoClose(){return this._autoClose}set autoClose(e){this._autoClose=e,e!==null?(this._timer===null?this._timer=new Wo(this._onOpenTimerComplete,e):this._timer.setDuration(e),this._pauseTimer===!1&&this.isOpen===!0&&this._animate===!1&&this._timer.start()):(this._timer?.destroy(),this._timer=null)}pauseAutoClose(){this._pauseTimer=!0,this._timer!==null&&this._timer.pause()}resumeAutoClose(){this._pauseTimer=!1,this._timer!==null&&this.isOpen===!0&&this._animate===!1&&this._timer.restart()}get open(){return this._open}set open(e){e===!0?this._makeOpen():this._makeClose()}connectedCallback(){super.connectedCallback(),_(this,"uui-button"),_(this,"uui-icon")}_getAnimationDuration(){return parseInt(getComputedStyle(this).getPropertyValue("--uui-toast-notification-animation-duration"),10)||480}_makeOpen(){this._open!==!0&&(this._open=!0,this.updateComplete.then(()=>{this._open===!0&&(cancelAnimationFrame(this._requestAnimationUpdate),this._requestAnimationUpdate=requestAnimationFrame(()=>{clearTimeout(this._animationTimeout),this.isOpen=!0,this.setAttribute("is-open",""),this.style.height=this._toastEl.getBoundingClientRect().height+"px",this._animate=!0,this.dispatchEvent(new se(se.OPENING)),this._animationTimeout=window.setTimeout(()=>{this.isOpen===!0&&(this.style.height="auto",this._animate=!1,this._pauseTimer===!1&&this._timer?.start(),this.dispatchEvent(new se(se.OPENED)))},this._getAnimationDuration())}))}))}_makeClose(){if(this._open===!1)return;let e=new se(se.CLOSING,{cancelable:!0});this.dispatchEvent(e),e.defaultPrevented!==!0&&(this._open=!1,this._timer?.pause(),cancelAnimationFrame(this._requestAnimationUpdate),this.isOpen===!0&&(this._requestAnimationUpdate=requestAnimationFrame(()=>{clearTimeout(this._animationTimeout),this.isOpen=!1,this.removeAttribute("is-open"),this.style.height=this._toastEl.getBoundingClientRect().height+"px",this._animate=!0,requestAnimationFrame(()=>{this.style.height="0"}),this._animationTimeout=window.setTimeout(()=>{this.isOpen===!1&&(this._animate=!1,this.dispatchEvent(new se(se.CLOSED)),this.parentNode&&this.parentNode.removeChild(this))},this._getAnimationDuration())})))}render(){return l`
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
                .fallback=${zr.strings[0]}></uui-icon>
            </uui-button>
          </div>
          <slot></slot>
        </div>
      </div>
    `}};Xt.styles=[Fe,c`
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
    `];mi([a({reflect:!0})],Xt.prototype,"color",2);mi([a({type:Number})],Xt.prototype,"autoClose",1);mi([$("#toast")],Xt.prototype,"_toastEl",2);mi([v()],Xt.prototype,"_animate",2);mi([a({type:Boolean,reflect:!0})],Xt.prototype,"open",1);Xt=mi([h("uui-toast-notification")],Xt);var I0=Object.defineProperty,M0=Object.getOwnPropertyDescriptor,fh=(e,t,r,o)=>{for(var i=o>1?void 0:o?M0(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&I0(t,r,i),i},on=class extends p{constructor(){super(...arguments),this._autoClose=null,this._autoClosePause=!1,this.pauseAutoClose=()=>{this._autoClosePause=!0,this._toasts?.forEach(e=>e.pauseAutoClose())},this.resumeAutoClose=()=>{this.matches(":focus-within:not(:focus)")===!1&&(this._autoClosePause=!1,this._toasts?.forEach(e=>e.resumeAutoClose()))},this.onToastClosed=e=>{this.removeToast(e.target)},this._toasts=[],this.onSlotChanged=e=>{let t=[...this._toasts];this._toasts=e.target.assignedElements({flatten:!0}).filter(i=>i.nodeName==="UUI-TOAST-NOTIFICATION"),t.filter(i=>this._toasts.indexOf(i)===-1).forEach(i=>{i.removeEventListener(se.CLOSED,this.onToastClosed),i.removeEventListener("mouseenter",this.pauseAutoClose),i.removeEventListener("mouseleave",this.resumeAutoClose),i.removeEventListener("focus",this.pauseAutoClose),i.removeEventListener("blur",this.resumeAutoClose)}),this._toasts.filter(i=>t.indexOf(i)===-1).forEach(i=>{i.addEventListener(se.CLOSED,this.onToastClosed),i.addEventListener("mouseenter",this.pauseAutoClose),i.addEventListener("mouseleave",this.resumeAutoClose),i.addEventListener("focus",this.pauseAutoClose),i.addEventListener("blur",this.resumeAutoClose),this._autoClose&&(i.autoClose=this._autoClose),this._autoClosePause===!0&&i.pauseAutoClose(),i.open=!0})}}get autoClose(){return this._autoClose}set autoClose(e){this._autoClose=e,this._toasts?.forEach(t=>t.autoClose=e)}removeToast(e){if(!e)e=this._toasts[this._toasts.length-1];else if(this._toasts.indexOf(e)===-1){console.warn("Toast-notification",e,"could not be removed as it is not a child of this toast-notification-container",this);return}this.removeChild(e)}closeToast(e){let t=e;t||(t=this._toasts[this._toasts.length-1]),t.open=!1}render(){return l` <slot @slotchange=${this.onSlotChanged}></slot> `}};on.styles=[c`
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
    `];fh([a({type:Number,reflect:!0,attribute:"auto-close"})],on.prototype,"_autoClose",2);on=fh([h("uui-toast-notification-container")],on);var z0=Object.defineProperty,L0=Object.getOwnPropertyDescriptor,rl=(e,t,r,o)=>{for(var i=o>1?void 0:o?L0(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&z0(t,r,i),i},go=class extends p{constructor(){super(...arguments),this.headline="",this._headlineSlotHasContent=!1,this._headlineSlotChanged=e=>{this._headlineSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0}}render(){return l`
      <div id="message" class="uui-text">
        <h5
          style=${this._headlineSlotHasContent||this.headline&&this.headline!==""?"":"display: none"}>
          ${this.headline}
          <slot name="headline" @slotchange=${this._headlineSlotChanged}></slot>
        </h5>
        <slot></slot>
        <slot id="actions" name="actions"></slot>
      </div>
    `}};go.styles=[Fe,c`
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
    `];rl([a({type:String})],go.prototype,"headline",2);rl([v()],go.prototype,"_headlineSlotHasContent",2);go=rl([h("uui-toast-notification-layout")],go);var D0=Object.getOwnPropertyDescriptor,U0=(e,t,r,o)=>{for(var i=o>1?void 0:o?D0(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=n(i)||i);return i},sn=class extends pe{constructor(){super("switch")}renderCheckbox(){return l`
      <div id="toggle">
        <div id="icon-checked">${Ot}</div>
        <div id="icon-unchecked">${zr}</div>
      </div>
    `}};sn.formAssociated=!0;sn.styles=[...pe.styles,Pt,c`
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
        animation: ${St};
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
    `];sn=U0([h("uui-toggle")],sn);var T0=Object.getOwnPropertyDescriptor,N0=(e,t,r,o)=>{for(var i=o>1?void 0:o?T0(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=n(i)||i);return i},il=class extends p{render(){return l`<slot></slot>`}};il.styles=[c`
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
    `];il=N0([h("uui-visually-hidden")],il);var yo=class extends ce{constructor(){super();this.items=[];this.getMemberItems=this.getMemberItems.bind(this),this.onInputChange=this.onInputChange.bind(this),this.userAuth=JSON.parse(localStorage.getItem("umb:userAuthTokenResponse"))}render(){return l`
      <uui-modal-container>
        <uui-modal-dialog>
          <uui-dialog class="umb-impersonation-modal-container">
            <div style="display: flex; flex-direction: column; height: 100%;">
              <div>
                <uui-input style="width: 100%; height: 48px; border: none; font-size: var(--uui-type-default-size);"
                           type="search" pristine="" label="Label"
                           placeholder="Type to search..." .onInput="${this.onInputChange}">
                  <uui-icon-registry-essential class="umb-impersonation-search-icon" slot="prepend">
                    <uui-icon name="search"/>
                  </uui-icon-registry-essential>
                </uui-input>
              </div>
              <div class="search-providers">
                <button class="search-provider active">
                  Latest logged in
                </button>
                <button class="search-provider">
                  Members
                </button>
              </div>
              <uui-scroll-container style="flex: 1;">
                ${this.items.map(r=>l`
                  <umb-act-member-item-actions .item=${r}>
                    <umb-act-search-result-item
                      .item="${r}"/>
                  </umb-act-member-item-actions>`)}
              </uui-scroll-container>
              <div
                style="display: flex; justify-content: end; padding: 0 var(--uui-size-space-5); padding-bottom: var(--uui-size-space-2);">
                <uui-button class="umb-act-logout" label="impersonate" look="primary" color="danger">
                  Stop impersonating
                </uui-button>
              </div>
            </div>
          </uui-dialog>
        </uui-modal-dialog>
      </uui-modal-container>
    `}async getMemberItems(r){if(r===""){this.items=[],this.requestUpdate("items");return}let o=await fetch("umbraco/management/api/v1/item/member/search?query="+encodeURIComponent(r),{headers:{Authorization:"Bearer "+this.userAuth.access_token}});if(!o.ok)console.error("There was a problem with the fetch operation:",await o.text());else{let i=await o.json();this.items=i.items,this.requestUpdate("items")}}onInputChange(r){clearTimeout(this.inputTimeout);let o="",i=r.target;if(i&&typeof i.value=="string")o=i.value;else if(r.composedPath){let s=r.composedPath()[0].value;typeof s=="string"&&(o=s)}this.inputTimeout=window.setTimeout(()=>{this.getMemberItems(o)},200)}};yo.styles=[c`
      .umb-impersonation-modal-container {
        height: max(600px, 80dvh);
        width: min(610px, 100vw);
        max-height: 100dvh;
      }

      .umb-impersonation-search-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1 / 1;
        height: 100%;
      }

      .search-providers {
        display: flex;
        flex-wrap: wrap;
        gap: var(--uui-size-space-2);
        padding: 0 var(--uui-size-space-5);
        padding-bottom: var(--uui-size-space-2);
      }

      .search-provider {
        padding: var(--uui-size-space-3) var(--uui-size-space-4);
        background: var(--uui-color-surface-alt);
        line-height: 1;
        white-space: nowrap;
        border-radius: var(--uui-border-radius);
        color: var(--uui-color-interactive);
        cursor: pointer;
        border: 2px solid transparent;
      }

      .search-provider.active {
        background: var(--uui-color-focus);
        color: var(--uui-color-selected-contrast);
        border-color: transparent;
      }
    `],yo=ge([qe("umb-act-modal")],yo);var vi=class extends p{constructor(){super(...arguments);this._modals=[]}handleClick(){let r=cs();this._modals.push(l`
      <umb-act-modal ref=${r}/>
    `),this.requestUpdate("_modals")}render(){return l`
      <uui-action-bar class="umb-act-bar">
        <uui-button @click=${this.handleClick} label="impersonate" pristine="" look="primary">
          <svg width="24px" viewBox="0 0 512 512">
            <path fill="currentColor"
                  d="M182.8 19.5C166.4 25.7 154.3 44 141.9 81c-4 11.9-10.6 35.8-13.3 48.2l-.6 2.6-14.7.4c-12.6.2-15.3.6-18.2 2.3-10 5.9-10.6 18.9-1.2 25.2 3.2 2.2 4.4 2.3 20.7 2.3H132v23.7c0 13.1.3 24.7.5 25.8.5 1.7-8.1 7-63.7 39.6-57.8 33.8-64.5 38-66.5 41.5-2.8 4.8-2.9 9.3-.3 14.4 3.5 6.9 5.8 7.5 38.5 10.1 16 1.2 29.2 2.4 29.4 2.6.2.1-3.4 4.2-8 9C27.7 364.2 6 411.1 1 459.9c-1.5 15-1.3 22 .8 26.1 2.5 5 7.5 8 13.2 8 9.2 0 15-6.7 15-17.3 0-3.2.5-10.1 1.1-15.5 4.5-41.7 22.8-80.5 52.8-112.2 9.3-9.9 8.6-11.5 6.7 14.9-1.4 19-1.1 22.7 2.2 26.8 1.5 1.9 149.4 98.3 156.4 101.9 3.5 1.8 10.1 1.8 13.6 0 7-3.6 154.9-100 156.4-101.9 3.3-4.1 3.6-7.8 2.2-26.8-1.9-26.4-2.6-24.8 6.8-14.9 25.3 26.7 42.3 58.4 49.6 93 2.4 10.8 4.2 26.2 4.2 34.7 0 3.5.7 7.2 1.8 9.3 5.3 10.7 21.1 10.7 26.4 0 2.1-4.1 2.3-11.1.8-26.1-5-48.8-26.1-94.6-60.5-130.7-4.7-4.9-8.5-9.2-8.5-9.4 0-.3 4.4-.8 9.8-1.2 5.3-.3 18.5-1.4 29.2-2.2 22.4-1.9 25.7-3 29-9.4 2.6-5.1 2.5-9.5-.3-14.4-2-3.5-8.1-7.4-60.7-38.3-32.2-18.9-61.1-35.8-64.3-37.6-4.7-2.6-5.7-3.6-5.3-5.2.3-1.1.6-12.7.6-25.8V162h17c13.1 0 17.8-.3 20-1.5 8.4-4.3 10.4-15.3 4.3-22.6-3.9-4.6-6.4-5.2-22.7-5.8l-14.9-.6-4.4-16.5c-6.1-23.2-10.5-36.9-16.9-52.8-9.5-23.7-17.4-34.6-29.3-40.5-5.8-2.8-7.5-3.2-14.6-3.2-9.6.1-15 2.3-31.4 13-14.4 9.3-20 11.7-28.7 12.3-11.1.7-17-1.7-35.4-14.3-12.9-8.8-17.9-10.8-28-11.2-5.6-.2-9.8.2-12.2 1.2zM208 55.6C228.1 69.2 240.8 74 256 74c15.7 0 28.1-4.6 48.4-17.9 16.3-10.6 17.4-10.3 25.7 7.4 4.2 9 16 43.5 20.3 59.2l2.5 9.3h-97c-68.3 0-96.9-.3-96.9-1.1 0-2.5 6.4-30 9-38.9 5.3-17.7 12-31.2 20-40.3 4.7-5.4 6.7-5 20 3.9zM349.8 184c.4 31-1.5 42.5-10 59.5-17.2 34.9-54.5 55.4-93.4 51.4-42.8-4.4-77.4-37.8-83.3-80.4-1.2-8.3-1.5-50.7-.4-51.8.3-.4 42.5-.6 93.7-.5l93.1.3.3 21.5zM176.9 343.4c23.7 51.6 43 94 42.8 94.2-.2.3-98.2-62.7-99.4-63.9-.2-.3.6-13.4 1.7-29.2 2.8-40.3 2.8-41.6-1.2-46.1-1.7-2-4.3-4-5.7-4.5-1.3-.6-13.2-1.9-26.5-3-13.2-1.1-24.1-2.1-24.2-2.2-.5-.5 68.2-40.3 68.7-39.8.3.3 20 42.8 43.8 94.5zm262.6-59.7c5 2.9 8.6 5.3 8 5.3-6.7.1-48.8 4.2-50.6 4.9-1.4.5-4 2.5-5.7 4.5-4 4.5-4 5.8-1.2 46.1 1.1 15.8 1.9 29 1.6 29.2-1.3 1.3-99.1 64.2-99.3 63.9-.2-.2 18.4-41 41.3-90.7s42.5-92.3 43.5-94.6l1.9-4.2 25.8 15.1c14.1 8.4 29.8 17.5 34.7 20.5zm-224.7 34.7c30.1 10.8 67.2 8.7 95.4-5.5l7.7-3.9-3.3 7.3C285.1 380.8 256.6 442 256 442c-.6 0-31-65.2-58.6-125.7l-3.3-7.3 6.7 3.4c3.7 1.8 10 4.5 14 6z"/>
          </svg>
        </uui-button>
      </uui-action-bar>
      ${this._modals}
    `}};vi.styles=c`
    .umb-act-bar {
      position: absolute;
      bottom: 1.00rem;
      left: 1.00rem;
    }
  `,ge([v()],vi.prototype,"_modals",2),vi=ge([qe("umb-act-not-toggle")],vi);var bi=class extends p{constructor(){super();this._modals=[];this.icons={person:`
       <svg viewBox="0 0 512 512">
         <path fill="currentColor"
               d="M182.8 19.5C166.4 25.7 154.3 44 141.9 81c-4 11.9-10.6 35.8-13.3 48.2l-.6 2.6-14.7.4c-12.6.2-15.3.6-18.2 2.3-10 5.9-10.6 18.9-1.2 25.2 3.2 2.2 4.4 2.3 20.7 2.3H132v23.7c0 13.1.3 24.7.5 25.8.5 1.7-8.1 7-63.7 39.6-57.8 33.8-64.5 38-66.5 41.5-2.8 4.8-2.9 9.3-.3 14.4 3.5 6.9 5.8 7.5 38.5 10.1 16 1.2 29.2 2.4 29.4 2.6.2.1-3.4 4.2-8 9C27.7 364.2 6 411.1 1 459.9c-1.5 15-1.3 22 .8 26.1 2.5 5 7.5 8 13.2 8 9.2 0 15-6.7 15-17.3 0-3.2.5-10.1 1.1-15.5 4.5-41.7 22.8-80.5 52.8-112.2 9.3-9.9 8.6-11.5 6.7 14.9-1.4 19-1.1 22.7 2.2 26.8 1.5 1.9 149.4 98.3 156.4 101.9 3.5 1.8 10.1 1.8 13.6 0 7-3.6 154.9-100 156.4-101.9 3.3-4.1 3.6-7.8 2.2-26.8-1.9-26.4-2.6-24.8 6.8-14.9 25.3 26.7 42.3 58.4 49.6 93 2.4 10.8 4.2 26.2 4.2 34.7 0 3.5.7 7.2 1.8 9.3 5.3 10.7 21.1 10.7 26.4 0 2.1-4.1 2.3-11.1.8-26.1-5-48.8-26.1-94.6-60.5-130.7-4.7-4.9-8.5-9.2-8.5-9.4 0-.3 4.4-.8 9.8-1.2 5.3-.3 18.5-1.4 29.2-2.2 22.4-1.9 25.7-3 29-9.4 2.6-5.1 2.5-9.5-.3-14.4-2-3.5-8.1-7.4-60.7-38.3-32.2-18.9-61.1-35.8-64.3-37.6-4.7-2.6-5.7-3.6-5.3-5.2.3-1.1.6-12.7.6-25.8V162h17c13.1 0 17.8-.3 20-1.5 8.4-4.3 10.4-15.3 4.3-22.6-3.9-4.6-6.4-5.2-22.7-5.8l-14.9-.6-4.4-16.5c-6.1-23.2-10.5-36.9-16.9-52.8-9.5-23.7-17.4-34.6-29.3-40.5-5.8-2.8-7.5-3.2-14.6-3.2-9.6.1-15 2.3-31.4 13-14.4 9.3-20 11.7-28.7 12.3-11.1.7-17-1.7-35.4-14.3-12.9-8.8-17.9-10.8-28-11.2-5.6-.2-9.8.2-12.2 1.2zM208 55.6C228.1 69.2 240.8 74 256 74c15.7 0 28.1-4.6 48.4-17.9 16.3-10.6 17.4-10.3 25.7 7.4 4.2 9 16 43.5 20.3 59.2l2.5 9.3h-97c-68.3 0-96.9-.3-96.9-1.1 0-2.5 6.4-30 9-38.9 5.3-17.7 12-31.2 20-40.3 4.7-5.4 6.7-5 20 3.9zM349.8 184c.4 31-1.5 42.5-10 59.5-17.2 34.9-54.5 55.4-93.4 51.4-42.8-4.4-77.4-37.8-83.3-80.4-1.2-8.3-1.5-50.7-.4-51.8.3-.4 42.5-.6 93.7-.5l93.1.3.3 21.5zM176.9 343.4c23.7 51.6 43 94 42.8 94.2-.2.3-98.2-62.7-99.4-63.9-.2-.3.6-13.4 1.7-29.2 2.8-40.3 2.8-41.6-1.2-46.1-1.7-2-4.3-4-5.7-4.5-1.3-.6-13.2-1.9-26.5-3-13.2-1.1-24.1-2.1-24.2-2.2-.5-.5 68.2-40.3 68.7-39.8.3.3 20 42.8 43.8 94.5zm262.6-59.7c5 2.9 8.6 5.3 8 5.3-6.7.1-48.8 4.2-50.6 4.9-1.4.5-4 2.5-5.7 4.5-4 4.5-4 5.8-1.2 46.1 1.1 15.8 1.9 29 1.6 29.2-1.3 1.3-99.1 64.2-99.3 63.9-.2-.2 18.4-41 41.3-90.7s42.5-92.3 43.5-94.6l1.9-4.2 25.8 15.1c14.1 8.4 29.8 17.5 34.7 20.5zm-224.7 34.7c30.1 10.8 67.2 8.7 95.4-5.5l7.7-3.9-3.3 7.3C285.1 380.8 256.6 442 256 442c-.6 0-31-65.2-58.6-125.7l-3.3-7.3 6.7 3.4c3.7 1.8 10 4.5 14 6z"/>
         <path fill="currentColor" transform="scale(0.6) translate(170, 100)"
               d="M89.5 174.6c-1.6.2-7.7.9-13.5 1.5-20.4 2.1-55 9.8-60.7 13.5-2.2 1.4-2.3 1.9-2.3 18.4 0 18.9-.1 18.5 7.3 21.4 2.5.9 4.8 2.5 5.2 3.4.3.9 1 9.1 1.5 18.2 2 35.3 8.2 55.3 21.4 68.4 7.3 7.3 13.3 10.6 24.6 13.9 11.5 3.3 25.4 4.7 48 4.7 31.7 0 50.3-3.5 69.9-13.1 13.6-6.7 24.8-17.3 30.5-28.9 3.7-7.6 11.4-34 14.1-48.5 1.2-6.6 2-8.5 4.5-10.8 3-2.6 3.3-2.7 15.1-2.7 16.6 0 19.6 1.8 21.3 13 1.6 10.1 10.8 41.9 14.2 48.6 11 22.2 35.6 36.4 70.8 41 13.8 1.8 55.2 1.5 66.6-.6 22.9-4 36.9-13.7 45.5-31.5 6.9-14.2 9.8-28.3 11.5-55 .4-8.3 1.2-15.8 1.5-16.7.4-.9 2.7-2.5 5.1-3.4 7-2.7 7.4-3.7 7.4-20.9 0-11.9-.3-15.5-1.5-17.2-1.9-2.7-10.5-5.4-29.5-9.4-60-12.5-119.2-9.5-175 8.7l-11.5 3.8-23.5.3c-26 .4-23.4.8-50.7-7.5-14.7-4.6-32.1-8.3-49.3-10.8-10.8-1.5-60.8-2.8-68.5-1.8z"/>
       </svg>
    `,logout:`
          <svg viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M48.2 3C30.4 7.7 15 20.1 7.1 36.1-.5 51.5 0 35.9 0 256c0 169.6.2 198.5 1.5 204.5C6.4 483.7 25.1 503 48.6 509c7.4 1.9 11.5 2 109.4 2h101.6l5.1-2.5c7.2-3.6 10.6-9 11.1-17.5.4-8.1-2.3-14-8.7-18.5l-4.3-3-102.1-.5-102.2-.5-4-2.2c-5-2.7-8-5.8-10-10.5-1.3-3.3-1.5-25.1-1.5-199.8 0-174.7.2-196.5 1.5-199.8 2-4.7 5-7.8 10-10.5l4-2.2 102.2-.5 102.1-.5 4.3-3c6.4-4.5 9.1-10.4 8.7-18.5-.5-8.5-3.9-13.9-11.1-17.5L259.6 1l-102 .1C60.4 1.1 55.1 1.2 48.2 3z"/>
            <path fill="currentColor"
              d="M355.6 108c-13.5 4.3-19.6 20.6-11.8 31.7 1.5 2.1 23.2 24 48.2 48.8 25 24.7 45.7 45.3 45.8 45.7.2.5-56.3.8-125.5.8H186.4l-4.4 2.2c-5.5 2.9-9.5 7.9-11.2 14-2.4 9.1 2.4 19 11.2 23.5l4.4 2.3h125.9c69.2 0 125.7.3 125.5.8-.1.4-20.8 21-45.8 45.7-25 24.8-46.7 46.7-48.2 48.8-12.1 17.2 8.5 39.9 27.5 30 4-2 136.3-132.7 138.5-136.8 2.2-4 2.2-15 0-19-2.2-4.2-134.5-134.8-138.6-136.9-4-2.1-11.7-2.9-15.6-1.6z"/>
          </svg>
    `}}handleClick(){let r=cs();this._modals.push(l`
      <umb-act-modal ref=${r}/>
    `),this.requestUpdate("_modals")}render(){return l`
      <uui-action-bar class="umb-act-bar">
        <uui-button @click=${this.handleClick} label="impersonate" pristine="" look="primary">
          <uui-icon-registry .icons="${this.icons}">
            <uui-icon style="font-size: 20px; padding-left: 4px; padding-right: 4px;" name="person"></uui-icon>
          </uui-icon-registry>
        </uui-button>
      </uui-action-bar>
      ${this._modals}
    `}};bi.styles=c`
    .umb-act-bar {
      position: absolute;
      bottom: 1.00rem;
      left: 1.00rem;
    }
  `,ge([v()],bi.prototype,"_modals",2),bi=ge([qe("umb-act-toggle")],bi);var gi=class extends p{render(){return this.item?l`
      <uui-icon-registry-essential>
        <uui-icon name="see"></uui-icon>
      </uui-icon-registry-essential>
      <span>${this.item.variants.find(t=>t.name)?.name}</span>
      <div class="extra"></div>
    `:w}};gi.styles=[c`
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
    `],ge([a({type:Object})],gi.prototype,"item",2),gi=ge([qe("umb-act-search-result-item")],gi);var V0=async(e,t)=>{let r=typeof t=="function"?await t(e):t;if(r)return e.scheme==="bearer"?`Bearer ${r}`:e.scheme==="basic"?`Basic ${btoa(r)}`:r};var H0={bodySerializer:e=>JSON.stringify(e,(t,r)=>typeof r=="bigint"?r.toString():r)};var B0=e=>{switch(e){case"label":return".";case"matrix":return";";case"simple":return",";default:return"&"}},j0=e=>{switch(e){case"form":return",";case"pipeDelimited":return"|";case"spaceDelimited":return"%20";default:return","}},R0=e=>{switch(e){case"label":return".";case"matrix":return";";case"simple":return",";default:return"&"}},bh=({allowReserved:e,explode:t,name:r,style:o,value:i})=>{if(!t){let u=(e?i:i.map(d=>encodeURIComponent(d))).join(j0(o));switch(o){case"label":return`.${u}`;case"matrix":return`;${r}=${u}`;case"simple":return u;default:return`${r}=${u}`}}let s=B0(o),n=i.map(u=>o==="label"||o==="simple"?e?u:encodeURIComponent(u):nn({allowReserved:e,name:r,value:u})).join(s);return o==="label"||o==="matrix"?s+n:n},nn=({allowReserved:e,name:t,value:r})=>{if(r==null)return"";if(typeof r=="object")throw new Error("Deeply-nested arrays/objects aren\u2019t supported. Provide your own `querySerializer()` to handle these.");return`${t}=${e?r:encodeURIComponent(r)}`},gh=({allowReserved:e,explode:t,name:r,style:o,value:i})=>{if(i instanceof Date)return`${r}=${i.toISOString()}`;if(o!=="deepObject"&&!t){let u=[];Object.entries(i).forEach(([m,g])=>{u=[...u,m,e?g:encodeURIComponent(g)]});let d=u.join(",");switch(o){case"form":return`${r}=${d}`;case"label":return`.${d}`;case"matrix":return`;${r}=${d}`;default:return d}}let s=R0(o),n=Object.entries(i).map(([u,d])=>nn({allowReserved:e,name:o==="deepObject"?`${r}[${u}]`:u,value:d})).join(s);return o==="label"||o==="matrix"?s+n:n},W0=/\{[^{}]+\}/g,F0=({path:e,url:t})=>{let r=t,o=t.match(W0);if(o)for(let i of o){let s=!1,n=i.substring(1,i.length-1),u="simple";n.endsWith("*")&&(s=!0,n=n.substring(0,n.length-1)),n.startsWith(".")?(n=n.substring(1),u="label"):n.startsWith(";")&&(n=n.substring(1),u="matrix");let d=e[n];if(d==null)continue;if(Array.isArray(d)){r=r.replace(i,bh({explode:s,name:n,style:u,value:d}));continue}if(typeof d=="object"){r=r.replace(i,gh({explode:s,name:n,style:u,value:d}));continue}if(u==="matrix"){r=r.replace(i,`;${nn({name:n,value:d})}`);continue}let m=encodeURIComponent(u==="label"?`.${d}`:d);r=r.replace(i,m)}return r},yh=({allowReserved:e,array:t,object:r}={})=>o=>{let i=[];if(o&&typeof o=="object")for(let s in o){let n=o[s];if(n!=null)if(Array.isArray(n)){let u=bh({allowReserved:e,explode:!0,name:s,style:"form",value:n,...t});u&&i.push(u)}else if(typeof n=="object"){let u=gh({allowReserved:e,explode:!0,name:s,style:"deepObject",value:n,...r});u&&i.push(u)}else{let u=nn({allowReserved:e,name:s,value:n});u&&i.push(u)}}return i.join("&")},q0=e=>{if(!e)return"stream";let t=e.split(";")[0]?.trim();if(t){if(t.startsWith("application/json")||t.endsWith("+json"))return"json";if(t==="multipart/form-data")return"formData";if(["application/","audio/","image/","video/"].some(r=>t.startsWith(r)))return"blob";if(t.startsWith("text/"))return"text"}},G0=async({security:e,...t})=>{for(let r of e){let o=await V0(r,t.auth);if(!o)continue;let i=r.name??"Authorization";switch(r.in){case"query":t.query||(t.query={}),t.query[i]=o;break;case"cookie":t.headers.append("Cookie",`${i}=${o}`);break;case"header":default:t.headers.set(i,o);break}return}},mh=e=>K0({baseUrl:e.baseUrl,path:e.path,query:e.query,querySerializer:typeof e.querySerializer=="function"?e.querySerializer:yh(e.querySerializer),url:e.url}),K0=({baseUrl:e,path:t,query:r,querySerializer:o,url:i})=>{let s=i.startsWith("/")?i:`/${i}`,n=(e??"")+s;t&&(n=F0({path:t,url:n}));let u=r?o(r):"";return u.startsWith("?")&&(u=u.substring(1)),u&&(n+=`?${u}`),n},vh=(e,t)=>{let r={...e,...t};return r.baseUrl?.endsWith("/")&&(r.baseUrl=r.baseUrl.substring(0,r.baseUrl.length-1)),r.headers=_h(e.headers,t.headers),r},_h=(...e)=>{let t=new Headers;for(let r of e){if(!r||typeof r!="object")continue;let o=r instanceof Headers?r.entries():Object.entries(r);for(let[i,s]of o)if(s===null)t.delete(i);else if(Array.isArray(s))for(let n of s)t.append(i,n);else s!==void 0&&t.set(i,typeof s=="object"?JSON.stringify(s):s)}return t},ol=class{constructor(){ll(this,"_fns");this._fns=[]}clear(){this._fns=[]}getInterceptorIndex(e){return typeof e=="number"?this._fns[e]?e:-1:this._fns.indexOf(e)}exists(e){let t=this.getInterceptorIndex(e);return!!this._fns[t]}eject(e){let t=this.getInterceptorIndex(e);this._fns[t]&&(this._fns[t]=null)}update(e,t){let r=this.getInterceptorIndex(e);return this._fns[r]?(this._fns[r]=t,e):!1}use(e){return this._fns=[...this._fns,e],this._fns.length-1}},X0=()=>({error:new ol,request:new ol,response:new ol}),Y0=yh({allowReserved:!1,array:{explode:!0,style:"form"},object:{explode:!0,style:"deepObject"}}),Z0={"Content-Type":"application/json"},sl=(e={})=>({...H0,headers:Z0,parseAs:"auto",querySerializer:Y0,...e}),xh=(e={})=>{let t=vh(sl(),e),r=()=>({...t}),o=n=>(t=vh(t,n),r()),i=X0(),s=async n=>{let u={...t,...n,fetch:n.fetch??t.fetch??globalThis.fetch,headers:_h(t.headers,n.headers)};u.security&&await G0({...u,security:u.security}),u.body&&u.bodySerializer&&(u.body=u.bodySerializer(u.body)),(u.body===void 0||u.body==="")&&u.headers.delete("Content-Type");let d=mh(u),m={redirect:"follow",...u},g=new Request(d,m);for(let O of i.request._fns)O&&(g=await O(g,u));let f=u.fetch,E=await f(g);for(let O of i.response._fns)O&&(E=await O(E,g,u));let b={request:g,response:E};if(E.ok){if(E.status===204||E.headers.get("Content-Length")==="0")return{data:{},...b};let O=(u.parseAs==="auto"?q0(E.headers.get("Content-Type")):u.parseAs)??"json";if(O==="stream")return{data:E.body,...b};let j=await E[O]();return O==="json"&&(u.responseValidator&&await u.responseValidator(j),u.responseTransformer&&(j=await u.responseTransformer(j))),{data:j,...b}}let C=await E.text();try{C=JSON.parse(C)}catch{}let M=C;for(let O of i.error._fns)O&&(M=await O(C,E,g,u));if(M=M||{},u.throwOnError)throw M;return{error:M,...b}};return{buildUrl:mh,connect:n=>s({...n,method:"CONNECT"}),delete:n=>s({...n,method:"DELETE"}),get:n=>s({...n,method:"GET"}),getConfig:r,head:n=>s({...n,method:"HEAD"}),interceptors:i,options:n=>s({...n,method:"OPTIONS"}),patch:n=>s({...n,method:"PATCH"}),post:n=>s({...n,method:"POST"}),put:n=>s({...n,method:"PUT"}),request:s,setConfig:o,trace:n=>s({...n,method:"TRACE"})}};var wh=xh(sl({baseUrl:"https://localhost:44312"}));var an=class{static impersonate(t){return(t.client??wh).post({security:[{scheme:"bearer",type:"http"}],url:"/umbraco/backoffice/impersonation/v1/impersonate/{memberKey}",...t})}};var yi=class extends p{constructor(){super(),this.userAuth=JSON.parse(localStorage.getItem("umb:userAuthTokenResponse"))}async impersonate(){an.impersonate({path:{memberKey:encodeURIComponent(this.item.id)},headers:{Authorization:`Bearer ${this.userAuth.access_token}`}}).then(({response:t})=>{t.ok&&window.location.reload()})}render(){return this.item?l`
      <a
        class="search-item"
        @click="${this.impersonate}">
        <slot></slot>
      </a>
    `:w}};yi.styles=[c`
      .search-item {
        color: var(--uui-color-text);
        text-decoration: none;
        outline-offset: -3px;
        display: flex;
        cursor: pointer;
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
    `],ge([a({type:Object})],yi.prototype,"item",2),yi=ge([qe("umb-act-member-item-actions")],yi);J0("https://cdn.jsdelivr.net/npm/@umbraco-ui/uui-css@latest/dist/uui-css.css");function J0(e){let t=document.head,r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)}})();
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
