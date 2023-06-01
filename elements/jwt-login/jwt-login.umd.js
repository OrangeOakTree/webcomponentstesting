!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit")):"function"==typeof define&&define.amd?define(["exports","lit"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).JwtLogin={},t.lit)}(this,(function(t,e){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(r=o.key,i=void 0,"symbol"==typeof(i=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(r,"string"))?i:String(i)),o)}var r,i}function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function l(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=r(t);if(e){var i=r(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return l(this,n)}}function u(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t}function a(){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=u(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},a.apply(this,arguments)}function c(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(d,t);var e,l,u,f=s(d);function d(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,d),(t=f.call(this)).windowControllers=new AbortController,t.auto=!1,t.method="GET",t.body={},t.key="jwt",t.jwt=null,t.ready=!1,t}return e=d,l=[{key:"lastErrorChanged",value:function(t){t&&"logout"!=this.__context&&(console.warn(t),this.dispatchEvent(new CustomEvent("jwt-login-refresh-error",{composed:!0,bubbles:!0,cancelable:!1,detail:{value:t}})))}},{key:"updated",value:function(t){var e=this;a(r(d.prototype),"updated",this)&&a(r(d.prototype),"updated",this).call(this,t),t.forEach((function(t,n){["auto","method","url"].includes(n)&&e.url&&!e.jwt&&e.ready&&e.auto&&(clearTimeout(e.__debounce),e.__debounce=setTimeout((function(){e.generateRequest(e.url,e.body)}),0)),"jwt"==n&&(e._jwtChanged(e[n],t),e.dispatchEvent(new CustomEvent("jwt-changed",{detail:{value:e[n]}})))}))}},{key:"_jwtChanged",value:function(t,e){if(null!=t&&""!=t&&"null"!=t||"undefined"===n(e)){if(t){try{localStorage.setItem(this.key,JSON.stringify(t))}catch(t){}this.dispatchEvent(new CustomEvent("jwt-token",{bubbles:!0,cancelable:!0,composed:!0,detail:t})),this.dispatchEvent(new CustomEvent("jwt-logged-in",{bubbles:!0,cancelable:!0,composed:!0,detail:!0}))}}else localStorage.removeItem(this.key),this.dispatchEvent(new CustomEvent("jwt-logged-in",{bubbles:!0,cancelable:!0,composed:!0,detail:!1}))}},{key:"connectedCallback",value:function(){a(r(d.prototype),"connectedCallback",this).call(this),window.addEventListener("jwt-login-refresh-token",this.requestRefreshToken.bind(this),{signal:this.windowControllers.signal}),window.addEventListener("jwt-login-toggle",this.toggleLogin.bind(this),{signal:this.windowControllers.signal}),window.addEventListener("jwt-login-login",this.loginRequest.bind(this),{signal:this.windowControllers.signal}),window.addEventListener("jwt-login-logout",this.logoutRequest.bind(this),{signal:this.windowControllers.signal})}},{key:"disconnectedCallback",value:function(){this.windowControllers.abort(),a(r(d.prototype),"disconnectedCallback",this).call(this)}},{key:"firstUpdated",value:function(t){a(r(d.prototype),"firstUpdated",this)&&a(r(d.prototype),"firstUpdated",this).call(this,t),this.ready=!0;try{this.jwt=JSON.parse(localStorage.getItem(this.key))}catch(t){this.jwt=null}}},{key:"requestRefreshToken",value:function(t){this.__context="refresh",t.detail.element&&(this.__element=t.detail.element),this.generateRequest(this.refreshUrl)}},{key:"generateRequest",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o={method:this.method,headers:{"Content-Type":"application/json"}};"GET"!=this.method&&(o.body=JSON.stringify(n)),fetch(t,o).then((function(t){if(t.ok)return t.json();"logout"==e.__context&&e.__redirect&&e.redirectUrl?setTimeout((function(){window.location.href=e.redirectUrl}),100):"login"==e.__context&&e.dispatchEvent(new CustomEvent("jwt-login-login-failed",{bubbles:!0,cancelable:!0,composed:!0,detail:!0})),e.lastErrorChanged(t)})).then((function(t){try{var n=t;n&&(n.jwt?e.loginResponse(n.jwt):e.loginResponse(n))}catch(t){console.warn(t)}}))}},{key:"toggleLogin",value:function(t){null==this.jwt?this.loginRequest(t):this.logoutRequest(t)}},{key:"loginRequest",value:function(t){this.__context="login",this.body=t.detail,this.generateRequest(this.url,this.body)}},{key:"logoutRequest",value:function(t){this.__context="logout",this.__redirect=t.detail.redirect,this.body={},this.jwt=null,this.generateRequest(this.logoutUrl)}},{key:"loginResponse",value:function(t){var e=this;switch(this.__context){case"login":this.jwt=t;break;case"refresh":var n;this.jwt=t,this.__element&&((n=this.__element.obj)[this.__element.callback].apply(n,[this.jwt].concat(c(this.__element.params))),this.__element=!1);break;case"logout":this.__redirect&&this.redirectUrl&&setTimeout((function(){window.location.href=e.redirectUrl}),100)}}}],u=[{key:"tag",get:function(){return"jwt-login"}},{key:"properties",get:function(){return{auto:{type:Boolean},refreshUrl:{type:String,attribute:"refresh-url"},redirectUrl:{type:String,attribute:"redirect-url"},logoutUrl:{type:String,attribute:"logout-url"},url:{type:String},method:{type:String},body:{type:Object},key:{type:String},jwt:{type:String}}}}],l&&o(e.prototype,l),u&&o(e,u),Object.defineProperty(e,"prototype",{writable:!1}),d}(e.LitElement);customElements.define(d.tag,d),t.JwtLogin=d,Object.defineProperty(t,"__esModule",{value:!0})}));
