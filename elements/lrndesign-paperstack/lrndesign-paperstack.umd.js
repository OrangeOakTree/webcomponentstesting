!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/hax-iconset/lib/simple-hax-iconset.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/simple-colors/simple-colors.js","@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/hax-iconset/lib/simple-hax-iconset.js"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).LrndesignPaperstack={},e.lit,e.simpleColors_js)}(this,(function(e,n,t){"use strict";function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,y(r.key),r)}}function a(e,n,t){return(n=y(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function s(e,n){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},s(e,n)}function l(e,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=c(e);if(n){var o=c(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return l(this,t)}}function d(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=c(e)););return e}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,n,t){var r=d(e,n);if(r){var o=Object.getOwnPropertyDescriptor(r,n);return o.get?o.get.call(arguments.length<3?e:t):o.value}},f.apply(this,arguments)}function u(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function g(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return m(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function y(e){var n=function(e,n){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==typeof n?n:String(n)}var b,h,v=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&s(e,n)}(d,e);var t,r,a,l=p(d);function d(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,d),(e=l.call(this)).icon="lrn:assignment",e}return t=d,a=[{key:"styles",get:function(){return[].concat(g(f(c(d),"styles",this)),[n.css(h||(h=u(["\n        :host {\n          display: block;\n          font-family: var(--lrndesign-paperstack-font-family, unset);\n          font-family: var(--lrndesign-paperstack-font-size, 14px);\n        }\n        .stack {\n          width: 100%;\n          position: relative;\n          margin: 24px 0;\n        }\n        .paper {\n          width: calc(100% - 48px);\n          padding: 12px 24px;\n          position: absolute;\n          box-shadow: 0 0 1px\n            var(\n              --lrndesign-paperstack-shadow,\n              var(--simple-colors-default-theme-grey-12)\n            );\n          border: 1px solid\n            var(\n              --lrndesign-paperstack-border,\n              var(--simple-colors-default-theme-grey-4)\n            );\n        }\n        :host([dark]) .paper {\n          box-shadow: 0 0 1px\n            var(\n              --lrndesign-paperstack-shadow,\n              var(--simple-colors-default-theme-grey-1)\n            );\n          border: 1px solid\n            var(\n              --lrndesign-paperstack-border,\n              var(--simple-colors-default-theme-grey-1)\n            );\n        }\n        .paper:first-of-type {\n          left: -0.32px;\n          top: 0.32px;\n          bottom: -0.32px;\n          right: 0.32px;\n          transform: rotate(-2.5deg);\n          background-color: var(\n            --lrndesign-paperstack-faded-bg,\n            var(--simple-colors-default-theme-grey-2)\n          );\n        }\n        .paper:nth-of-type(2) {\n          right: -0.32px;\n          top: 1.6px;\n          left: 0.32px;\n          right: -1.6px;\n          transform: rotate(1.4deg);\n          background-color: var(\n            --lrndesign-paperstack-faded-bg,\n            var(--simple-colors-default-theme-grey-2)\n          );\n        }\n        :host([dark]) .paper:first-of-type,\n        :host([dark]) .paper:nth-of-type(2) {\n          background-color: var(\n            --lrndesign-paperstack-faded-bg,\n            var(--simple-colors-default-theme-grey-1)\n          );\n        }\n        .front {\n          position: relative;\n          left: 0;\n          top: 0;\n          bottom: 0;\n          right: 0;\n          background-color: var(\n            --lrndesign-paperstack-bg,\n            var(--simple-colors-default-theme-grey-1)\n          );\n          color: var(\n            --lrndesign-paperstack-text,\n            var(--simple-colors-default-theme-grey-12)\n          );\n        }\n        :host([dark]) .front {\n          background-color: var(\n            --lrndesign-paperstack-bg,\n            var(--simple-colors-default-theme-grey-3)\n          );\n        }\n        simple-icon-lite {\n          --simple-icon-width: calc(\n            var(--lrndesign-paperstack-icon-size, 32px) - 2 *\n              var(--lrndesign-paperstack-icon-padding, 4px)\n          );\n          --simple-icon-height: calc(\n            var(--lrndesign-paperstack-icon-size, 32px) - 2 *\n              var(--lrndesign-paperstack-icon-padding, 4px)\n          );\n        }\n        .heading {\n          display: flex;\n          align-items: center;\n        }\n        .icon-container {\n          width: calc(\n            var(--lrndesign-paperstack-icon-size, 32px) - 2 *\n              var(--lrndesign-paperstack-icon-padding, 4px)\n          );\n          height: calc(\n            var(--lrndesign-paperstack-icon-size, 32px) - 2 *\n              var(--lrndesign-paperstack-icon-padding, 4px)\n          );\n          border-radius: 50%;\n          background-color: var(\n            --lrndesign-paperstack-accent,\n            var(--simple-colors-default-theme-accent-8)\n          );\n          display: flex;\n          align-items: center;\n          padding: var(--lrndesign-paperstack-icon-padding, 4px);\n          color: var(\n            --lrndesign-paperstack-bg,\n            var(--simple-colors-default-theme-grey-1)\n          );\n          margin-right: calc(2 * var(--lrndesign-paperstack-icon-padding, 2px));\n        }\n        :host([dark]) .icon-container {\n          color: var(\n            --lrndesign-paperstack-bg,\n            var(--simple-colors-default-theme-grey-1)\n          );\n          background-color: var(\n            --lrndesign-paperstack-accent,\n            var(--simple-colors-default-theme-accent-9)\n          );\n        }\n        .title {\n          font-size: 16px;\n          color: var(\n            --lrndesign-paperstack-accent,\n            var(--simple-colors-default-theme-accent-8)\n          );\n          font-family: var(--lrndesign-paperstack-heading-font-family, cursive);\n          font-family: var(--lrndesign-paperstack-heading-font-size, 16px);\n        }\n        :host([dark]) .title {\n          color: var(\n            --lrndesign-paperstack-accent,\n            var(--simple-colors-default-theme-grey-12)\n          );\n        }\n      "])))])}},{key:"tag",get:function(){return"lrndesign-paperstack"}},{key:"properties",get:function(){return o(o({},f(c(d),"properties",this)),{},{title:{type:String},icon:{type:String}})}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Paper stack",description:"A stack of papers",icon:"icons:content-copy",color:"grey",tags:["Layout","design","lrn"],handles:[],meta:{author:"HAXTheWeb core team"}},settings:{configure:[{property:"title",title:"Title",description:"Title of the cards",inputMethod:"boolean"},{property:"accentColor",title:"Accent Color",description:"Select the accent color use",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark",description:"Use dark theme",inputMethod:"boolean",icon:"invert-colors"},{property:"icon",title:"Icon",description:"Icon for the card",inputMethod:"iconpicker"},{slot:"",title:"Contents",description:"card contents",inputMethod:"code-editor"}],advanced:[]}}}}],(r=[{key:"render",value:function(){return n.html(b||(b=u(['\n      <div class="stack">\n        <div class="paper"></div>\n        <div class="paper"></div>\n        <div class="front paper">\n          <div class="heading">\n            <div class="icon-container circle">\n              <simple-icon-lite icon="','"></simple-icon-lite>\n            </div>\n            <span class="title">',"</span>\n          </div>\n          <p><slot></slot></p>\n        </div>\n      </div>\n    "])),this.icon,this.title)}}])&&i(t.prototype,r),a&&i(t,a),Object.defineProperty(t,"prototype",{writable:!1}),d}(t.SimpleColors);customElements.define(v.tag,v),e.LrndesignPaperstack=v,Object.defineProperty(e,"__esModule",{value:!0})}));
