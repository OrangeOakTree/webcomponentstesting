!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).I18NManager={})}(this,(function(t){"use strict";function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function n(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function r(){r=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),c=new L(r||[]);return o(a,"_invoke",{value:O(t,n,c)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var h={};function d(){}function p(){}function g(){}var y={};l(y,a,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(P([])));m&&m!==e&&n.call(m,a)&&(y=m);var b=g.prototype=d.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function O(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return _()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=j(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function j(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=g,o(b,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:p,configurable:!0}),p.displayName=l(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),l(b,u,"Generator"),l(b,a,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=P,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}function o(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function c(t){o(a,r,i,c,u,"next",t)}function u(t){o(a,r,i,c,u,"throw",t)}c(void 0)}))}}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,p(r.key),r)}}function c(t,e,n){return(e=p(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}function l(t,e){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},l(t,e)}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function f(t,e,n){return f=s()?Reflect.construct.bind():function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&l(o,n.prototype),o},f.apply(null,arguments)}function h(t){var e="function"==typeof Map?new Map:void 0;return h=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return f(t,arguments,u(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,t)},h(t)}function d(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function p(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}
/**
   * Copyright 2021 The Pennsylvania State University
   * @license Apache-2.0, see License.md for full text.
   */window.I18NManagerStore=window.I18NManagerStore||{},window.I18NManagerStore.requestAvailability=function(){return window.I18NManagerStore.instance||(window.I18NManagerStore.instance=document.createElement("i18n-manager"),document.body.appendChild(window.I18NManagerStore.instance)),window.I18NManagerStore.instance};var g=window.I18NManagerStore.requestAvailability(),y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&l(t,e)}(v,t);var e,o,c,f,h,p,g,y=(e=v,o=s(),function(){var t,n=u(e);if(o){var r=u(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return d(this,t)});function v(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,v),(t=y.call(this)).windowControllers=new AbortController,t.fetchTargets={},t.elements=[],t.locales=new Set([]),t.lang=t.documentLang,t.dir=t.documentDir,t}return c=v,f=[{key:"documentLang",get:function(){return document.body.getAttribute("xml:lang")||document.body.getAttribute("lang")||document.documentElement.getAttribute("xml:lang")||document.documentElement.getAttribute("lang")||navigator.language||"en"}},{key:"documentDir",get:function(){return document.body.getAttribute("xml:dir")||document.body.getAttribute("dir")||document.documentElement.getAttribute("xml:dir")||document.documentElement.getAttribute("dir")||"ltr"}},{key:"connectedCallback",value:function(){this.__ready=!0,window.addEventListener("i18n-manager-register-element",this.registerLocalizationEvent.bind(this),{signal:this.windowControllers.signal}),window.addEventListener("languagechange",this.changeLanguageEvent.bind(this),{signal:this.windowControllers.signal})}},{key:"disconnectedCallback",value:function(){this.windowControllers.abort()}},{key:"changeLanguageEvent",value:function(t){this.lang=t.detail}},{key:"registerLocalizationEvent",value:function(t){var e=this.detailNormalize(t.detail);e.namespace&&e.localesPath&&e.locales&&this.registerLocalization(e)}},{key:"detailNormalize",value:function(t){if(!t.namespace&&t.context&&(t.namespace=t.context.tagName.toLowerCase()),!t.updateCallback&&t.context&&(t.context.requestUpdate?t.updateCallback="requestUpdate":t.context.render&&(t.updateCallback="render")),!t.localesPath&&t.basePath&&(t.localesPath="".concat(decodeURIComponent(t.basePath),"/../locales")),t.context&&t.namespace){t.context.t&&(t.context._t=n({},t.context.t));var e=this.elements.filter((function(e){if(e.namespace==t.namespace&&e.localesPath&&e.locales)return!0}));e&&e.length&&e[0]&&(t.localesPath=e[0].localesPath,t.locales=e[0].locales)}return t}},{key:"registerLocalization",value:function(t){var e=this;(!t.context&&0===this.elements.filter((function(e){return e.namespace===t.namespace})).length||0===this.elements.filter((function(e){return e.context===t.context})).length)&&(t=this.detailNormalize(t),this.elements.push(t),t&&t.locales&&t.locales.forEach(this.locales.add,this.locales),this.lang&&this.__ready&&t.locales&&t.locales.includes(this.lang)&&(clearTimeout(this._debounce),this._debounce=setTimeout((function(){e.updateLanguage(e.lang)}),0)))}},{key:"loadNamespaceFile",value:(g=i(r().mark((function t(e){var n,o,i,a,c,u=arguments;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=u.length>1&&void 0!==u[1]?u[1]:this.lang,o=n.split("-"),i=this.elements.filter((function(t){return t.namespace===e&&(t.locales.includes(n)||t.locales.includes(o[0]))})),!i||1!==i.length){t.next=14;break}if(a=i[0],c="",a.locales.includes(n)?c="".concat(a.localesPath,"/").concat(a.namespace,".").concat(n,".json"):a.locales.includes(o[0])&&(c="".concat(a.localesPath,"/").concat(a.namespace,".").concat(o[0],".json")),""!=c){t.next=9;break}return t.abrupt("return",{});case 9:if(this.fetchTargets[c]){t.next=13;break}return t.next=12,fetch(c).then((function(t){return!(!t||!t.json)&&t.json()}));case 12:this.fetchTargets[c]=t.sent;case 13:return t.abrupt("return",this.fetchTargets[c]);case 14:case"end":return t.stop()}}),t,this)}))),function(t){return g.apply(this,arguments)})},{key:"updateLanguage",value:(p=i(r().mark((function t(e){var o,i,a,c,u,l,s,f,h;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=21;break}if(o=e.split("-"),i=this.elements.filter((function(t){try{return t.locales.includes(e)||t.locales.includes(o[0])}catch(e){console.error("i18n registration incorrect in:",t,e)}})),a=this.elements.filter((function(t){return!t.locales.includes(e)&&!t.locales.includes(o[0])})),0!==a.length)for(c in a)(u=a[c]).context&&(u.context.t=n({},u.context._t),u.updateCallback&&u.context[u.updateCallback]());t.t0=r().keys(i);case 6:if((t.t1=t.t0()).done){t.next=21;break}if(c=t.t1.value,l=i[c],s="",l.locales.includes(e)?s="".concat(l.localesPath,"/").concat(l.namespace,".").concat(e,".json"):l.locales.includes(o[0])&&(s="".concat(l.localesPath,"/").concat(l.namespace,".").concat(o[0],".json")),!this.fetchTargets[s]){t.next=15;break}if(l.context){for(h in f=this.fetchTargets[s])l.context.t[h]=f[h];l.context.t=n({},l.context.t),l.updateCallback&&l.context[l.updateCallback]()}t.next=19;break;case 15:return t.next=17,fetch(s).then((function(t){return!(!t||!t.json)&&t.json()}));case 17:if(this.fetchTargets[s]=t.sent,l.context){for(h in this.fetchTargets[s])l.context.t[h]=this.fetchTargets[s][h];l.context.t=n({},l.context.t),l.updateCallback&&l.context&&l.context[l.updateCallback]()}case 19:t.next=6;break;case 21:case"end":return t.stop()}}),t,this)}))),function(t){return p.apply(this,arguments)})},{key:"attributeChangedCallback",value:function(t,e,n){"lang"!==t&&"dir"!==t||this.dispatchEvent(new CustomEvent("".concat(t,"-changed"),{detail:{value:n}})),"lang"===t&&n&&this.__ready&&this.updateLanguage(n)}},{key:"lang",get:function(){return this.getAttribute("lang")},set:function(t){t?this.setAttribute("lang",t):this.removeAttribute("lang")}},{key:"dir",get:function(){return this.getAttribute("dir")},set:function(t){t?this.setAttribute("dir",t):this.removeAttribute("dir")}}],h=[{key:"tag",get:function(){return"i18n-manager"}},{key:"observedAttributes",get:function(){return["lang","dir"]}}],f&&a(c.prototype,f),h&&a(c,h),Object.defineProperty(c,"prototype",{writable:!1}),v}(h(HTMLElement));customElements.define(y.tag,y),t.I18NManager=y,t.I18NManagerStore=g,Object.defineProperty(t,"__esModule",{value:!0})}));
