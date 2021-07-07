!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/marked-element/marked-element.js"),require("lit")):"function"==typeof define&&define.amd?define(["exports","@polymer/marked-element/marked-element.js","lit"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).MdBlock={},null,e.lit)}(this,(function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function f(e,t,r){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function p(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var d,y,m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(m,e);var t,o,c,a=s(m);function m(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),(e=a.call(this)).markdown="",e.source="",e}return t=m,c=[{key:"styles",get:function(){return[r.css(y||(y=p(["\n:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n      "])))]}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Markdown",description:"A block of markdown content directly or remote loaded",icon:"icons:code",color:"yellow",groups:["Block"],handles:[{type:"markdown",source:"source",src:"source"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{configure:[{property:"markdown",title:"Markdown",description:"Raw markdown",inputMethod:"code-editor"},{property:"source",title:"Source",description:"Source file for markdown",inputMethod:"haxupload"}],advanced:[]},demoSchema:[{tag:"md-block",properties:{source:"https://raw.githubusercontent.com/elmsln/HAXcms/master/HAXDocs.md"},content:""}]}}},{key:"properties",get:function(){return i(i({},f(u(m),"properties",this)),{},{source:{type:String},markdown:{type:String,attribute:!1}})}},{key:"tag",get:function(){return"md-block"}}],(o=[{key:"render",value:function(){return r.html(d||(d=p(['\n\n<div>\n  <marked-element markdown="','">\n    <div slot="markdown-html"></div>\n      <script type="text/markdown" .src="','"><\/script>\n  </marked-element>\n</div>'])),this.markdown,this.source?this.source:void 0)}}])&&n(t.prototype,o),c&&n(t,c),m}(r.LitElement);window.customElements.define(m.tag,m),e.MdBlock=m,Object.defineProperty(e,"__esModule",{value:!0})}));
