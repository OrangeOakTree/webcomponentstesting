!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit")):"function"==typeof define&&define.amd?define(["exports","lit"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TheyLive={},e.lit)}(this,(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function s(e,t,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var p,y,b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(h,e);var r,o,l,b=f(h);function h(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),b.call(this)}return r=h,l=[{key:"styles",get:function(){return[t.css(y||(y=a(["\n        :host {\n          display: inline-block;\n        }\n        .truth {\n          font-size: 5.5vw;\n          word-break: break-all;\n          line-height: 5.5vw;\n          position: absolute;\n          margin: 0 auto;\n          text-align: center;\n          display: flex;\n          visibility: hidden;\n          opacity: 0;\n          transition: 0.3s all linear;\n          z-index: 2;\n          text-align: center;\n        }\n        :host(:focus),\n        :host(:hover) {\n          background-color: grey;\n        }\n        :host(:focus) .content ::slotted(*),\n        :host(:hover) .content ::slotted(*) {\n          visibility: hidden;\n        }\n        :host(:focus) .truth,\n        :host(:hover) .truth {\n          visibility: visible;\n          opacity: 1;\n        }\n      "])))]}},{key:"properties",get:function(){return i(i({},s(c(h),"properties",this)),{},{truth:{type:String}})}},{key:"tag",get:function(){return"they-live"}}],(o=[{key:"render",value:function(){return t.html(p||(p=a(['\n\n<div class="content">\n  <div class="truth">',"</div>\n  <slot></slot>\n</div>"])),this.truth)}},{key:"connectedCallback",value:function(){s(c(h.prototype),"connectedCallback",this).call(this)}},{key:"disconnectedCallback",value:function(){s(c(h.prototype),"disconnectedCallback",this).call(this)}},{key:"firstUpdated",value:function(e){this.setAttribute("tabindex","0"),e.forEach((function(e,t){}))}},{key:"updated",value:function(e){e.forEach((function(e,t){}))}}])&&n(r.prototype,o),l&&n(r,l),h}(t.LitElement);customElements.define("they-live",b),e.TheyLive=b,Object.defineProperty(e,"__esModule",{value:!0})}));
