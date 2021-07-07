!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit")):"function"==typeof define&&define.amd?define(["exports","lit"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).SimpleWc={},e.lit)}(this,(function(e,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function s(e,t,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function p(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d;function b(e){return e.replace(/([A-Z])/g,(function(e){return"-".concat(e[0].toLowerCase())}))}e.createSWC=function(e){var o=function(o){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(h,o);var i,l,y,v=f(h);function h(){var t;for(var n in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),t=v.call(this),e.callbacks)t[n]=e.callbacks[n];for(var r in e.data.values)t[r]=e.data.values[r];return setTimeout((function(){e.deps.map((function(e){import("../../".concat(e))}))}),0),t}return i=h,y=[{key:"tag",get:function(){return e.name}},{key:"styles",get:function(){return[t.css(d||(n=["\n          /* this style helps ease FOUC w/ dynamic imports */\n          :host *:not(:defined) {\n            display: none;\n          }\n        "],r||(r=n.slice(0)),d=Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}})))),e.css(this,t.css)];var n,r}},{key:"properties",get:function(){var t={};for(var r in e.data.values){t[r]={type:n(e.data.values[r])},t[r].type=t[r].type.charAt(0).toUpperCase()+t[r].type.slice(1);var o=b(r);o!==r&&(t[r].attribute=o),e.data.reflect&&e.data.reflect.includes(r)&&(t[r].reflect=!0)}return c(c({},s(a(h),"properties",this)),t)}}],(l=[{key:"render",value:function(){return e.html(this,t.html)}},{key:"updated",value:function(t){var n=this;s(a(h.prototype),"updated",this)&&s(a(h.prototype),"updated",this).call(this,t),t.forEach((function(t,r){e.data.observe&&e.data.observe.forEach((function(o,i){if(o[0].includes(r)){var c;if(1===o[0].length)c=e.callbacks[o[1]](n[o[0][0]],t);else{var a,u=[];o[0].map((function(e){u.push(n[e])})),c=(a=e.callbacks)[o[1]].apply(a,u)}3==o.length&&(n[o[2]]=Array.isArray(c)?p(c):c)}})),e.data.notify&&e.data.notify.includes(r)&&n.dispatchEvent(new CustomEvent("".concat(b(r),"-changed"),{detail:{value:n[r]}}))}))}},{key:"__applyWinEvents",value:function(t){if(e.events&&e.events.window)for(var n in e.events.window)window["".concat(t?"add":"remove","EventListener")](n,e.callbacks[e.events.window[n]].bind(this))}},{key:"firstUpdated",value:function(){if(e.events&&e.events.shadow)for(var t in e.events.shadow)for(var n in e.events.shadow[t])this.shadowRoot.querySelector(t).addEventListener(n,e.callbacks[e.events.shadow[t][n]].bind(this))}},{key:"connectedCallback",value:function(){s(a(h.prototype),"connectedCallback",this)&&s(a(h.prototype),"connectedCallback",this).call(this),this.__applyWinEvents(!0)}},{key:"disconnectedCallback",value:function(){this.__applyWinEvents(!1),s(a(h.prototype),"disconnectedCallback",this)&&s(a(h.prototype),"disconnectedCallback",this).call(this)}},{key:"haxProperties",value:function(){return{}}}])&&r(i.prototype,l),y&&r(i,y),h}(t.LitElement);return customElements.define(o.tag,o),o},Object.defineProperty(e,"__esModule",{value:!0})}));
