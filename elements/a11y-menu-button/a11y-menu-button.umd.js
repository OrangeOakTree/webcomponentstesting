!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit"),require("@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js"),require("@lrnwebcomponents/utils/utils.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js","@lrnwebcomponents/utils/utils.js"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).A11yMenuButton={},t.lit,null,t.utils_js)}(this,(function(t,e,n,o){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=s(t);if(e){var r=s(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return c(this,n)}}function m(t,e,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function h(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function b(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var y,p,v,g,k,I,w,C,x,E=function(t){a(n,t);var e=d(n);function n(){return r(this,n),e.apply(this,arguments)}return n}(function(t){a(o,t);var n=d(o);function o(){var t;return r(this,o),(t=n.call(this)).slot="menuitem",t}return u(o,[{key:"render",value:function(){return this.href&&""!==this.href.trim()?this.linkTemplate:this.buttonTemplate}},{key:"linkTemplate",get:function(){return e.html(y||(y=h([' <li role="none">\n        <a\n          role="menuitem"\n          href="','"\n          ?disabled="','"\n          part="button"\n        >\n          <slot></slot>\n        </a>\n      </li>'])),this.href,this.disabled)}},{key:"buttonTemplate",get:function(){return e.html(p||(p=h(['\n        <li role="none">\n          <button\n            role="menuitem"\n            controls="','"\n            ?disabled="','"\n            part="button"\n          >\n            <slot></slot>\n          </button>\n        </li>\n      '])),this.controls,this.disabled)}},{key:"menuItem",get:function(){return this.shadowRoot&&this.shadowRoot.querySelector("[role=menuitem]")?this.shadowRoot.querySelector("[role=menuitem]"):void 0}},{key:"focus",value:function(){this.menuItem&&this.menuItem.focus()}},{key:"connectedCallback",value:function(){m(s(o.prototype),"connectedCallback",this).call(this),this.dispatchEvent(new CustomEvent("add-a11y-menu-button-item",{bubbles:!0,cancelable:!0,composed:!0,detail:this}))}},{key:"disconnectedCallback",value:function(){m(s(o.prototype),"disconnectedCallback",this).call(this),this.dispatchEvent(new CustomEvent("remove-a11y-menu-button-item",{bubbles:!0,cancelable:!0,composed:!0,detail:this}))}}],[{key:"styles",get:function(){return[e.css(v||(v=h(['\n          :host {\n            margin: 0;\n            padding: 0;\n            display: block;\n          }\n          :host([hidden]) {\n            display: none;\n          }\n          *[role="menuitem"][disabled] {\n            cursor: not-allowed;\n          }\n\n          *[role="menuitem"],\n          *[role="menuitem"]:visited {\n            display: block;\n            margin: 0;\n            border-radius: 0;\n            font-family: inherit;\n            font-size: inherit;\n            text-decoration: var(--a11y-menu-button-item-text-decoration, none);\n            color: var(\n              --a11y-menu-button-item-color,\n              var(--a11y-menu-button-color, currentColor)\n            );\n            width: calc(\n              100% - 2 *\n                var(\n                  --a11y-menu-button-item-horizontal-padding,\n                  var(--a11y-menu-button-horizontal-padding, 5px)\n                )\n            );\n            text-align: var(--a11y-menu-button-item-text-align, left);\n            padding: var(\n                --a11y-menu-button-item-vertical-padding,\n                var(--a11y-menu-button-vertical-padding, 0)\n              )\n              var(\n                --a11y-menu-button-item-horizontal-padding,\n                var(--a11y-menu-button-horizontal-padding, 5px)\n              );\n            background-color: var(\n              --a11y-menu-button-item-bg-color,\n              var(--a11y-menu-button-bg-color, white)\n            );\n            border-left: var(--a11y-menu-button-item-border-left, none);\n            border-right: var(--a11y-menu-button-item-border-right, none);\n            border-top: var(--a11y-menu-button-item-border-top, none);\n            border-bottom: var(--a11y-menu-button-item-border-bottom, none);\n            border: var(--a11y-menu-button-item-border, none);\n            transition: all 0.25s ease-in-out;\n          }\n          button[role="menuitem"],\n          button[role="menuitem"]:visited {\n            width: 100%;\n          }\n\n          :host(:focus-within) *[role="button"],\n          *[role="menuitem"]:focus,\n          *[role="menuitem"]:hover {\n            text-decoration: var(\n              --a11y-menu-button-item-focus-text-decoration,\n              none\n            );\n            color: var(--a11y-menu-button-item-focus-color, currentColor);\n            background-color: var(\n              --a11y-menu-button-item-focus-bg-color,\n              #e0e0ff\n            );\n            border-left: var(--a11y-menu-button-item-focus-border-left, unset);\n            border-right: var(\n              --a11y-menu-button-item-focus-border-right,\n              unset\n            );\n            border-top: var(--a11y-menu-button-item-focus-border-top, unset);\n            border-bottom: var(\n              --a11y-menu-button-item-focus-border-bottom,\n              unset\n            );\n            border: var(--a11y-menu-button-item-focus-border, unset);\n          }\n        '])))]}},{key:"tag",get:function(){return"a11y-menu-button-item"}},{key:"properties",get:function(){return{disabled:{attribute:"disabled",type:Boolean},hidden:{attribute:"hidden",type:Boolean,reflect:!0},href:{attribute:"href",type:String},controls:{attribute:"controls",type:String},slot:{type:String,attribute:"slot",reflect:!0}}}}]),o}(e.LitElement));window.customElements.define(E.tag,E);var O=function(t){return function(t){a(i,t);var n=d(i);function i(){var t;return r(this,i),(t=n.call(this)).position="bottom",t.positionAlign="start",t.offset=0,t.menuItems=[],t.keepOpenOnClick=!1,t.noOpenOnHover=!1,b(t.children).filter((function(t){return"menuitem"===t.slot})).forEach((function(e){return t.addItem(e)})),t.addEventListener("keydown",t._handleKeydown),t.addEventListener("click",t._handleClick),t.addEventListener("focus",t._handleFocus),t.addEventListener("blur",t._handleBlur),t.addEventListener("mouseover",t._handleMouseover),t.addEventListener("mouseout",t._handleMouseout),t.addEventListener("add-a11y-menu-button-item",t._handleAddItem),t.addEventListener("remove-a11y-menu-button-item",t._handleRemoveItem),t}return u(i,[{key:"render",value:function(){return e.html(g||(g=h([" "," "," "])),this.buttonTemplate,this.menuTemplate)}},{key:"menuTemplate",get:function(){var t=this;return e.html(k||(k=h(['\n        <absolute-position-behavior\n          ?auto="','"\n          for="menubutton"\n          position="','"\n          position-align="','"\n          .offset="','"\n          fit-to-visible-bounds\n          part="menu-outer"\n        >\n          <ul\n            id="menu"\n            role="menu"\n            aria-labelledby="menubutton"\n            ?hidden="','"\n            @mousover="','"\n            @mousout="','"\n            part="menu"\n          >\n            ',"\n          </ul>\n        </absolute-position-behavior>\n      "])),this.expanded,this.position,this.positionAlign,this.offset,!this.expanded,(function(e){return t.hover=!0}),(function(e){return t.hover=!1}),this.listItemTemplate)}},{key:"buttonTemplate",get:function(){return e.html(I||(I=h(['\n        <button\n          id="menubutton"\n          aria-haspopup="true"\n          aria-controls="menu"\n          aria-expanded="','"\n          part="button"\n        >\n          <slot name="button"></slot>\n        </button>\n      '])),this.expanded?"true":"false")}},{key:"listItemTemplate",get:function(){return e.html(w||(w=h(['<slot name="menuitem"></slot><slot></slot>'])))}},{key:"keyCode",get:function(){return{TAB:9,RETURN:13,ESC:27,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40}}},{key:"close",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||!this.focused&&!this.hovered)&&(this.expanded=!1,this.dispatchEvent(new CustomEvent("close",{bubbles:!0,cancelable:!0,composed:!0,detail:this})))}},{key:"open",value:function(){this.expanded=!0,this.dispatchEvent(new CustomEvent("open",{bubbles:!0,cancelable:!0,composed:!0,detail:this}))}},{key:"focus",value:function(){this.shadowRoot&&this.shadowRoot.querySelector("#menubutton")&&this.shadowRoot.querySelector("#menubutton").focus()}},{key:"focusOn",value:function(t){(t=t||this.firstItem)&&(this.open(),this.focused=!0,this.currentItem=t,t.focus())}},{key:"focusByCharacter",value:function(t){var e,n,o=this,r=(t=t.toLowerCase(),function(t,e){for(var n=t;n<o.firstChars.length;n++)if(e===o.firstChars[n])return n;return-1});(e=this.menuItems.indexOf(this.currentItem)+1)===this.menuItems.length&&(e=0),-1===(n=r(e,t))&&(n=r(0,t)),n>-1&&this.menuItems[n].focus()}},{key:"firstItem",get:function(){return this.menuItems[0]}},{key:"previousItem",get:function(){return this.getItem(-1)}},{key:"nextItem",get:function(){return this.getItem()}},{key:"lastItem",get:function(){return this.menuItems[this.menuItems.length-1]}},{key:"firstChars",get:function(){return this.menuItems.map((function(t){return((t.textContent||"").trim()||" ").substring(0,1).toLowerCase()}))}},{key:"getItemIndex",value:function(){var t=this,e=-1;return this.menuItems.forEach((function(n,o){n===t.currentItem&&(e=o)})),e}},{key:"getItem",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.getItemIndex(this.currentItem)+t;return!this.menuItems||e<0||this.menuItems.length<=e?void 0:this.menuItems[e]}},{key:"itemListeners",get:function(){return{click:this._handleItemClick,focus:this._handleFocus,blur:this._handleBlur,mouseover:this._handleMouseover,mouseout:this._handleMouseout,keydown:this._handleItemKeydown}}},{key:"addItem",value:function(t){var e=this,n=this.itemListeners;this.menuItems=this.menuItems||[],Object.keys(n).forEach((function(o){return t.addEventListener(o,n[o].bind(e))})),this.menuItems.push(t)}},{key:"removeItem",value:function(t){var e=this,n=this.itemListeners;this.menuItems&&(this.menuItems=b(this.menuItems.filter((function(e){return t!==e})))),Object.keys(n).forEach((function(o){return t.removeEventListener(o,n[o].bind(e))}))}},{key:"_handleAddItem",value:function(t){t.stopPropagation&&t.stopPropagation(),t.detail&&this.addItem(t.detail)}},{key:"_handleRemoveItem",value:function(t){t.stopPropagation(),t.detail&&this.addItem(t.detail)}},{key:"_handleItemClick",value:function(t){this.keepOpenOnClick||(this.focus(),this.close(!0)),this.dispatchEvent(new CustomEvent("item-click",{bubbles:!0,cancelable:!0,composed:!0,detail:t})),t.stopPropagation()}},{key:"_excludeEvent",value:function(t){return!1}},{key:"_handleItemKeydown",value:function(t){var e=!1,n=t.key,r=function(t){return 1===t.length&&t.match(/\S/)},i=(o.normalizeEventPath(t)||[])[0];if((r(n)||!["INPUT","TEXTAREA","SELECT"].includes(i.tagName)&&!this._excludeEvent(t))&&!(t.ctrlKey||t.altKey||t.metaKey||t.keyCode===this.keyCode.SPACE||t.keyCode===this.keyCode.RETURN)){if(t.shiftKey)r(n)&&(this.focusByCharacter(n),e=!0),t.keyCode===this.keyCode.TAB&&(this.focus(),this.close(!0));else switch(t.keyCode){case this.keyCode.ESC:this.focus(),this.close(!0),e=!0;break;case this.keyCode.UP:this.focusOn(this.previousItem||this.lastItem),e=!0;break;case this.keyCode.DOWN:this.focusOn(this.nextItem||this.firstItem),e=!0;break;case this.keyCode.HOME:case this.keyCode.PAGEUP:this.currentItem=this.firstItem,e=!0;break;case this.keyCode.END:case this.keyCode.PAGEDOWN:this.currentItem=this.lastItem,e=!0;break;case this.keyCode.TAB:this.focus(),this.close(!0);break;default:r(n)&&this.focusByCharacter(n)}e&&(t.stopPropagation(),t.preventDefault())}}},{key:"_handleKeydown",value:function(t){var e=!1;switch(t.keyCode){case this.keyCode.SPACE:case this.keyCode.RETURN:case this.keyCode.DOWN:this.focusOn(this.firstItem),e=!0;break;case this.keyCode.UP:this.popupMenu&&(this.focusOn(this.lastItem),e=!0)}e&&(t.stopPropagation(),t.preventDefault())}},{key:"_handleClick",value:function(t){this.expanded?this.close(!0):this.focusOn(this.firstItem)}},{key:"_handleFocus",value:function(t){this.focused=!0}},{key:"_handleBlur",value:function(t){this.focused=!1}},{key:"_handleMouseover",value:function(t){this.hovered=!0,this.noOpenOnHover||this.open()}},{key:"_handleMouseout",value:function(t){this.hovered=!1,setTimeout(this.close(),300)}}],[{key:"menuButtonCoreStyles",get:function(){return[e.css(C||(C=h(['\n          :host {\n            padding: 0;\n            display: inline-flex;\n            position: relative;\n            z-index: 1;\n          }\n          :host([expanded]) {\n            z-index: var(--a11y-menu-button-focus-z-index, 1000);\n          }\n          button[part="button"] {\n            display: block;\n            text-decoration: inherit;\n            font-family: inherit;\n            font-size: inherit;\n            margin: 0;\n            width: 100%;\n          }\n          absolute-position-behavior {\n            z-index: -1;\n            overflow: hidden;\n            transition: z-index 0s;\n          }\n          :host([expanded]) absolute-position-behavior {\n            z-index: var(--a11y-menu-button-focus-z-index, 1000);\n            transition: z-index 0s;\n          }\n          :host(:not([expanded])) absolute-position-behavior {\n            border-color: none !important;\n          }\n          ul {\n            margin: 0;\n            padding: 0;\n            list-style: none;\n          }\n        '])))]}},{key:"menuButtonThemeStyles",get:function(){return[e.css(x||(x=h(['\n          button[part="button"] {\n            padding: var(--a11y-menu-button-vertical-padding, 2px)\n              var(--a11y-menu-button-horizontal-padding, 5px);\n            text-align: var(--a11y-menu-button-text-align, center);\n            background-color: var(--a11y-menu-button-bg-color, white);\n            color: var(--a11y-menu-button-color, currentColor);\n            background-color: var(--a11y-menu-button-bg-color, white);\n            border-radius: var(--a11y-menu-button-border-radius, 0);\n            border-left: var(--a11y-menu-button-border-left, unset);\n            border-top: var(--a11y-menu-button-border-top, unset);\n            border-right: var(--a11y-menu-button-border-right, unset);\n            border-bottom: var(--a11y-menu-button-border-bottom, unset);\n            border: var(--a11y-menu-button-border, 1px solid #ddd);\n            box-shadow: var(--a11y-menu-button-box-shadow, unset);\n            transition: all 0.25s ease-in-out;\n          }\n          button[part="button"]:focus,\n          button[part="button"]:hover {\n            color: var(\n              --a11y-menu-button-focus-color,\n              var(--a11y-menu-button-color, currentColor)\n            );\n            background-color: var(\n              --a11y-menu-button-focus-bg-color,\n              var(--a11y-menu-button-bg-color, white)\n            );\n            border-left: var(\n              --a11y-menu-button-focus-border-left,\n              var(--a11y-menu-button-border-left, unset)\n            );\n            border-top: var(\n              --a11y-menu-button-focus-border-top,\n              var(--a11y-menu-button-border-top, unset)\n            );\n            border-right: var(\n              --a11y-menu-button-focus-border-right,\n              var(--a11y-menu-button-border-right, unset)\n            );\n            border-bottom: var(\n              --a11y-menu-button-focus-border-bottom,\n              var(--a11y-menu-button-border-bottom, unset)\n            );\n            border: var(\n              --a11y-menu-button-focus-border,\n              var(--a11y-menu-button-border, 1px solid #ddd)\n            );\n            box-shadow: var(\n              --a11y-menu-button-box-shadow,\n              var(--a11y-menu-button-focus-box-shadow, unset)\n            );\n          }\n          :host([expanded]) absolute-position-behavior {\n            width: var(--a11y-menu-button-list-width, unset);\n            height: var(--a11y-menu-button-list-height, unset);\n            border: var(\n              --a11y-menu-button-list-border,\n              var(--a11y-menu-button-border, 1px solid #ddd)\n            );\n            background-color: var(\n              --a11y-menu-button-bg-color,\n              var(--a11y-menu-button-list-bg-color, white)\n            );\n            box-shadow: var(--a11y-menu-button-list-box-shadow, unset);\n          }\n        '])))]}},{key:"styles",get:function(){return[].concat(b(this.menuButtonCoreStyles),b(this.menuButtonThemeStyles))}},{key:"tag",get:function(){return"a11y-menu-button"}},{key:"properties",get:function(){return{currentItem:{type:Object},disabled:{attribute:"disabled",type:Boolean},expanded:{attribute:"expanded",type:Boolean,reflect:!0},focused:{attribute:"focused",type:Boolean},hovered:{attribute:"hovered",type:Boolean},keepOpenOnClick:{attribute:"keep-open-on-click",type:Boolean},menuItems:{type:Array},noOpenOnHover:{attribute:"no-open-on-hover",type:Boolean},offset:{type:Number,attribute:"offset"},position:{type:String,attribute:"position",reflect:!0},positionAlign:{type:String,attribute:"position-align",reflect:!0}}}}]),i}(t)},_=function(t){a(n,t);var e=d(n);function n(){return r(this,n),e.apply(this,arguments)}return n}(O(e.LitElement));window.customElements.define(_.tag,_),t.A11yMenuButton=_,t.A11yMenuButtonBehaviors=O,Object.defineProperty(t,"__esModule",{value:!0})}));
