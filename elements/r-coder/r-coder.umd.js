!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/code-editor/code-editor.js"),require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/code-editor/code-editor.js","lit-element/lit-element.js"],t):t((e=e||self).RCoder={},null,e.litElement_js)}(this,function(e,t,n){"use strict";function r(e,t,n,r,o,i,c){try{var u=e[i](c),s=u.value}catch(e){return void n(e)}u.done?t(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise(function(o,i){var c=e.apply(t,n);function u(e){r(c,o,i,u,s,"next",e)}function s(e){r(c,o,i,u,s,"throw",e)}u(void 0)})}}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){u(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function h(e,t,n){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function y(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function b(){var e=y(["\n:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n#editor {\n  height: var(--r-coder-editor-height, 300px);\n  width: var(--r-coder-editor-width, 100%);\n}\n\n#button {\n  margin: var(--r-code-button-margin, 10px 0);\n}\n      "]);return b=function(){return e},e}function v(){var e=y(['\n\n<code-editor id="editor" language="r"></code-editor>\n<button id="button" ?disabled="','" @click="','" raised>Process</button>\n<div id="output"></div>']);return v=function(){return e},e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(r,n.LitElement);var t=p(r);function r(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(e=t.call(this)).endpoint="/service/r-service",setTimeout(function(){},0),e}return c(r,[{key:"render",value:function(){return n.html(v(),!this.__connected,this.process)}},{key:"firstUpdated",value:function(){this.ping(),this.shadowRoot.getElementById("editor").editorValue=this.textContent.trim()}}],[{key:"styles",get:function(){return[n.css(b())]}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"R coder",description:"R coder interface for the r-service backend.",icon:"icons:android",color:"green",groups:["Coder"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"heymp",owner:"PSU"}},settings:{configure:[{property:"endpoint",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"}],advanced:[]}}}},{key:"properties",get:function(){return a(a({},h(f(r),"properties",this)),{},{endpoint:{type:String},__connected:{type:Boolean}})}},{key:"tag",get:function(){return"r-coder"}}]),c(r,[{key:"ping",value:function(){var e=o(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.endpoint,{method:"GET"}).then(function(e){return e.status});case 2:t=e.sent,this.__connected=200===t;case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"process",value:function(){var e=o(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.shadowRoot.getElementById("editor").value,e.next=3,fetch(this.endpoint,{method:"POST",body:t}).then(function(e){return e.text()});case 3:n=e.sent,this.shadowRoot.getElementById("output").innerText=n;case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),r}();window.customElements.define(g.tag,g),e.RCoder=g,Object.defineProperty(e,"__esModule",{value:!0})});
