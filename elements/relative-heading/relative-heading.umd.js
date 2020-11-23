!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/simple-toast/simple-toast.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-button.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/anchor-behaviors/anchor-behaviors.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/simple-toast/simple-toast.js","@lrnwebcomponents/simple-icon/lib/simple-icon-button.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/anchor-behaviors/anchor-behaviors.js"],t):t((e=e||self).RelativeHeading={},e.litElement_js)}(this,function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach(function(t){r(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,i,o,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i=this,!(o=n)||"object"!=typeof o&&"function"!=typeof o?d(i):o}}function p(e,t,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function g(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function f(){var e=g(["\n        simple-toast:not(:defined) {\n          display: none;\n        }\n      "]);return f=function(){return e},e}function v(){var e=g(['\n      <simple-toast\n        id="relative-heading-toast"\n        duration="5000"\n        ?hidden="','"\n        ?disabled="','"\n        text="',": ",'"\n      >\n        <simple-icon-button\n          icon="','"\n          label="','"\n          title="','"\n          @click="','"\n        ></simple-icon-button>\n      </simple-toast>\n    ']);return v=function(){return e},e}window.RelativeHeadingStateManager=window.RelativeHeadingStateManager||{},window.RelativeHeadingStateManager.requestAvailability=function(){return window.RelativeHeadingStateManager.instance||(window.RelativeHeadingStateManager.instance=document.createElement("relative-heading-state-manager"),document.body.appendChild(window.RelativeHeadingStateManager.instance)),window.RelativeHeadingStateManager.instance};var b=function(e){l(r,t.LitElement);var i=h(r);function r(){var e;return n(this,r),(e=i.call(this)).closeIcon="close",e.closeLabel="Close",e.copyMessage="Copied to Clipboard",e.headings=[],e.copyHeading={},e.usesCopyLink=!1,window.RelativeHeadingStateManager.instance||(window.RelativeHeadingStateManager.instance=d(e)),e}return o(r,null,[{key:"tag",get:function(){return"relative-heading-state-manager"}},{key:"properties",get:function(){return s(s({},p(c(r),"properties",this)),{},{closeIcon:{type:String},closeLabel:{type:String},copyHeading:{type:Object},copyMessage:{type:String},headings:{type:Object},usesCopyLink:{type:Boolean}})}}]),o(r,[{key:"render",value:function(){return t.html(v(),!this.usesCopyLink,!this.usesCopyLink,this.copyHeading.copyMessage||this.copyMessage,this.copyUrl,this.copyHeading.closeIcon||this.closeIcon,this.copyHeading.closeLabel||this.closeLabel,this.copyHeading.closeLabel||this.closeLabel,this.closeCopyLink)}},{key:"useCopyLink",value:function(){this.usesCopyLink||(this.usesCopyLink=!0)}},{key:"copyLink",value:function(e){this.copyHeading=e;var t=document.createElement("textarea");t.value=this.copyUrl,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.shadowRoot.querySelector("#relative-heading-toast")&&this.shadowRoot.querySelector("#relative-heading-toast").open&&this.shadowRoot.querySelector("#relative-heading-toast").open()}},{key:"closeCopyLink",value:function(){this.shadowRoot.querySelector("#relative-heading-toast")&&this.shadowRoot.querySelector("#relative-heading-toast").close&&this.shadowRoot.querySelector("#relative-heading-toast").close()}},{key:"addHeading",value:function(e){e&&(this.addSubhead(e),this.setHeading(e.id,e),this.updateLevel(e))}},{key:"removeHeading",value:function(e){var t=this;e&&(e.id&&this.headings[e.id]&&(this.headings[e.id].heading=null,this.headings[e.id].subheads.forEach(function(e){return t.updateLevel(e)})),this.removeSubhead(e.parent,e))}},{key:"updateId",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e&&(t&&this.setHeading(t,null),this.setHeading(e.id,e))}},{key:"updateParent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e&&(t&&this.removeSubhead(t,e),this.addSubhead(e))}},{key:"updateDefaultLevel",value:function(e){e&&this.updateLevel(e)}},{key:"addSubhead",value:function(e){e&&(e.parent&&(this.headings[e.parent]||(this.headings[e.parent]={heading:null,subheads:[]}),this.headings[e.parent].subheads.includes(e)||this.headings[e.parent].subheads.push(e)),this.updateLevel(e))}},{key:"removeSubhead",value:function(e,t){e&&this.headings[e]&&this.headings[e].subheads&&(this.headings[e].subheads=this.headings[e].subheads.filter(function(e){return e!=t}))}},{key:"setHeading",value:function(e,t){e&&(this.headings[e]||(this.headings[e]={heading:null,subheads:[]}),this.headings[e].heading=t)}},{key:"updateLevel",value:function(e){var t=this;if(e){var n=e.parent&&this.headings[e.parent].heading?parseInt(this.headings[e.parent].heading.__level):null,i=n?Math.min(6,Math.max(n+1,1)):null,o=i||e.defaultLevel;e._setLevel(o),this.headings[e.id]&&this.headings[e.id].subheads.forEach(function(e){return t.updateLevel(e)})}}},{key:"copyUrl",get:function(){return"".concat(window.location.href.replace(window.location.hash,""),"#").concat(this.copyHeading&&this.copyHeading.id?this.copyHeading.id:"")}}],[{key:"styles",get:function(){return[t.css(f())]}}]),r}();function y(){var e=g(["\n        :host {\n          display: block;\n        }\n        :host([hidden]) {\n          display: none;\n        }\n      "]);return y=function(){return e},e}function m(){var e=g([" <slot></slot> "]);return m=function(){return e},e}window.customElements.define(b.tag,b);var k=function(e){l(r,t.LitElement);var i=h(r);function r(){var e;return n(this,r),(e=i.call(this)).parent=null,e.checkId(),e.__level=e.querySelector("h1,h2,h3,h4,h5,h6")?parseInt(e.querySelector("h1,h2,h3,h4,h5,h6").tagName.replace(/\D/,"")):1,e.defaultLevel=1,e}return o(r,[{key:"render",value:function(){return this.template}},{key:"template",get:function(){return t.html(m())}}],[{key:"styles",get:function(){return[t.css(y())]}},{key:"properties",get:function(){return s(s({},p(c(r),"properties",this)),{},{defaultLevel:{type:Number,attribute:"default-level",reflect:!0},id:{type:String,attribute:"id",reflect:!0},parent:{type:String,attribute:"parent",reflect:!0},__level:{type:Number,attribute:"level",reflect:!0}})}},{key:"tag",get:function(){return"relative-heading-lite"}}]),o(r,[{key:"connectedCallback",value:function(){p(c(r.prototype),"connectedCallback",this).call(this),this.manager.addHeading(this),this.observer.observe(this,{childList:!0})}},{key:"checkId",value:function(){this.id=this.id||"heading-".concat(this._generateUUID())}},{key:"updated",value:function(e){var t=this;e.forEach(function(e,n){"defaultLevel"===n&&((!t.defaultLevel||t.defaultLevel<1||t.defaultLevel>6)&&(t.defaultLevel=Math.min(0,Math.max(t.defaultLevel,6))),t.manager.updateDefaultLevel(t,e)),"id"===n&&(t.id||t.checkId(),t.manager.updateId(t,e)),"parent"===n&&t.manager.updateParent(t,e),"__level"===n&&(t.observer.disconnect(),t.updateContents(),t.observer.observe(t,{childList:!0}))})}},{key:"_setLevel",value:function(e){this.__level!==e&&(this.__level=e)}},{key:"updateContents",value:function(){(!this.querySelector("h".concat(this.__level))||this.children>0)&&(this.innerHTML="<h".concat(this.__level,">").concat(this.children&&this.children[0]?this.children[0].innerHTML:this.textContent,"</h").concat(this.__level,">"))}},{key:"_generateUUID",value:function(){return"ss-s-s-s-sss".replace(/s/g,Math.floor(65536*(1+Math.random())).toString(16).substring(1))}},{key:"disconnectedCallback",value:function(){this.observer.disconnect(),this.manager.removeHeading(this),p(c(r.prototype),"disconnectedCallback",this).call(this)}},{key:"observer",get:function(){var e=this;return new MutationObserver(function(){return e.updateContents()})}},{key:"manager",get:function(){return window.RelativeHeadingStateManager.requestAvailability()}}]),r}();function w(){var e=g(['\n          <simple-icon-button\n            controls="relative-heading-toast"\n            .aria-describedby="','"\n            .icon="','"\n            .title="','"\n            ?hidden="','"\n            ?disabled="','"\n            @click="','"\n          >\n          </simple-icon-button>\n        ']);return w=function(){return e},e}function L(){var e=g([""]);return L=function(){return e},e}function O(){var e=g(["\n:host {\n  display: flex;\n  flex-wrap: var(--relative-heading-wrap,wrap);\n  align-items: var(--relative-heading-align,center);\n  justify-content: flex-start;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n::slotted(*) {\n  flex: 0 0 auto;\n}\n\n:host([link-align-right]){\n  justify-content: space-between;\n}\n\n:host([link-align-right]) ::slotted(*) {\n  flex: 1 1 auto;\n}\n\n:host > simple-icon-button:not(:defined) {\n  opacity: 0;\n}\n\n:host > simple-icon-button {\n  flex: 0 0 auto;\n}\n\nsimple-icon-button {\n  color: var(--relative-heading-button-color, #666);\n  background: var(--relative-heading-button-bg);\n  border: var(--relative-heading-button-border);\n  outline: var(--relative-heading-button-outline);\n  margin: var(--relative-heading-button-margin,0 0 0 8px);\n  padding: var(--relative-heading-button-padding, 8px);\n  opacity: var(--relative-heading-button-opacity, 0);\n  transition: var(--relative-heading-button-transition, all 0.5s);\n}\n\n:host([link-align-right]) simple-icon-button,\n:host(:not([link-align-right]):focus) simple-icon-button,\n:host(:not([link-align-right]):focus-within) simple-icon-button,\n:host(:not([link-align-right]):hover) simple-icon-button {\n  opacity: var(--relative-heading-button-active-opacity, 1);\n}\n\nsimple-icon-button:focus-within,\nsimple-icon-button:focus,\nsimple-icon-button:hover {\n  color: var(--relative-heading-button-focus-color, #000);\n  background: var(--relative-heading-button-focus-bg);\n  border: var(--relative-heading-button-focus-border);\n  outline: var(--relative-heading-button-focus-outline);\n  opacity: var(--relative-heading-button-focus-opacity, 1);\n}\n      "]);return O=function(){return e},e}function j(){var e=g(["\n\n","\n",""]);return j=function(){return e},e}window.customElements.define(k.tag,k);var S=function(e){l(r,k);var i=h(r);function r(){var e;return n(this,r),(e=i.call(this)).linkAlignRight=!1,e.disableLink=!1,e.linkIcon="link",e.linkLabel="Get link",e}return o(r,[{key:"render",value:function(){return t.html(j(),this.template,this.button)}}],[{key:"styles",get:function(){return[t.css(O())]}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Relative heading",description:"outputs the correct heading hierarchy based on parent's heading",icon:"icons:android",color:"green",groups:["Heading"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"nikkimk",owner:"The Pennsylvania State University"}},settings:{configure:[{property:"parent",description:"Parent Heading's Resource ID",inputMethod:"textfield",required:!1},{property:"disableLink",description:"Disables link button feature.",inputMethod:"boolean",required:!1},{property:"linkAlignRight",description:"Aligns copy link button to far right of heading.",inputMethod:"boolean",required:!1}],advanced:[{property:"defaultLevel",description:"Heading level if parent is not found.",inputMethod:"number",required:!1},{property:"copyMessage",description:"Overrides default text for copy link's toast message.",inputMethod:"textfield",required:!1},{property:"linkLabel",description:"Overrides default label copy link button.",inputMethod:"textfield",required:!1},{property:"linkIcon",description:"Overrides default icon copy link button.",inputMethod:"iconpicker",required:!1},{property:"closeLabel",description:"Overrides default label for copy link's toast's close button.",inputMethod:"textfield",required:!1},{property:"closeIcon",description:"Overrides default icon for copy link's toast's close button.",inputMethod:"iconpicker",required:!1}]}}}},{key:"properties",get:function(){return s(s({},p(c(r),"properties",this)),{},{closeIcon:{type:String},closeLabel:{type:String},copyMessage:{type:String},disableLink:{type:Boolean,attribute:"disable-link"},linkAlignRight:{type:Boolean,attribute:"link-align-right",reflect:!0},linkIcon:{type:String},linkLabel:{type:String}})}},{key:"tag",get:function(){return"relative-heading"}}]),o(r,[{key:"connectedCallback",value:function(){p(c(r.prototype),"connectedCallback",this).call(this),this.disableLink||this.manager.useCopyLink()}},{key:"_handleCopyClick",value:function(){!this.disableLink&&this.manager&&this.manager.copyLink&&this.manager.copyLink(this)}},{key:"anchored",get:function(){return!(!window.AnchorBehaviors||!window.AnchorBehaviors.getTarget)&&window.AnchorBehaviors.getTarget(this)}},{key:"button",get:function(){return this.disableLink?t.html(L()):t.html(w(),this.id,this.linkIcon,this.linkLabel,this.disableLink,this.disableLink,this._handleCopyClick)}}]),r}();window.customElements.define(S.tag,S),e.RelativeHeading=S,Object.defineProperty(e,"__esModule",{value:!0})});
