!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit")):"function"==typeof define&&define.amd?define(["exports","lit"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).RandomImage={},e.lit)}(this,(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=r(e);if(t){var c=r(this).constructor;n=Reflect.construct(i,arguments,c)}else n=i.apply(this,arguments);return o(this,n)}}function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var u,s,f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(p,e);var r,o,f,l=c(p);function p(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(e=l.call(this)).mode="",e.imagesList=[],e}return r=p,f=[{key:"styles",get:function(){return[t.css(s||(s=a(["\n        :host {\n          display: block;\n        }\n        .is-circle {\n          border: 1px solid grey;\n          border-radius: 50%;\n          box-shadow: 0px 5px 10px #ccc;\n        }\n      "])))]}},{key:"tag",get:function(){return"random-image"}},{key:"properties",get:function(){return{mode:{type:String},_imgSrc:{type:String},_imgTitle:{type:String},imagesList:{type:Array,attribute:"images-list"}}}}],(o=[{key:"render",value:function(){return t.html(u||(u=a(['\n      <img\n        style="width:200px; height:200px;"\n        class="','"\n        loading="lazy"\n        src="','"\n        title="','"\n      />\n    '])),this.mode,this._imgSrc,this._imgTitle)}},{key:"_pickRandomProperty",value:function(e){var t,n=0;for(var r in e)Math.random()<1/++n&&(t=r);return t}},{key:"updated",value:function(e){var t=this;e.forEach((function(e,n){if("imagesList"==n){var r=t._pickRandomProperty(t.imagesList);t._imgSrc=t.imagesList[r].path,t._imgTitle=t.imagesList[r].title}if(["imagesList","mode"].includes(n)){var i="".concat(n.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase(),"-changed");t.dispatchEvent(new CustomEvent(i,{detail:{value:t[n]}}))}}))}}])&&n(r.prototype,o),f&&n(r,f),p}(t.LitElement);window.customElements.define(f.tag,f),e.RandomImage=f,Object.defineProperty(e,"__esModule",{value:!0})}));
