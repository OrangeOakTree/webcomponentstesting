!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/simple-colors/simple-colors.js"],t):t((e=e||self).HeroBanner={},e.litElement_js,e.simpleColors_js)}(this,function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){o(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}function p(e,t,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function b(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(){var e=f(['\n        :host {\n          display: block;\n          width: 100%;\n          min-height: 600px;\n          height: 100%;\n          max-height: 600px;\n          overflow: hidden;\n          position: relative;\n          --hero-banner-font-family: "Roboto";\n          --hero-banner-title-weight: 500;\n          --hero-banner-text: var(--simple-colors-default-theme-grey-12);\n          --hero-banner-rgba: rgba(255, 255, 255, 0.65);\n          --hero-banner-image-bg: var(--simple-colors-default-theme-grey-3);\n          --hero-banner-button-weight: bold;\n          --hero-banner-button-color: var(\n            --simple-colors-default-theme-accent-5\n          );\n          --hero-banner-button-hover-color: var(\n            --simple-colors-default-theme-accent-4\n          );\n        }\n        :host([dark]) {\n          --hero-banner-rgba: rgba(0, 0, 0, 0.65);\n        }\n        .image {\n          position: absolute;\n          left: 0;\n          right: 0;\n          width: 100%;\n          height: 100%;\n          background-color: var(--hero-banner-image-bg);\n        }\n        .itemwrapper {\n          position: absolute;\n          bottom: 10%;\n          left: 10%;\n          width: 50%;\n        }\n        .title {\n          background-color: var(--hero-banner-rgba);\n          padding: 10px 16px;\n          font-size: 32px;\n          color: var(--hero-banner-text);\n          margin: 4px 0;\n          font-family: var(--hero-banner-font-family);\n          font-weight: var(--hero-banner-title-weight);\n        }\n        .details {\n          background-color: var(--hero-banner-rgba);\n          padding: 10px 16px;\n          font-size: 16px;\n          color: var(--hero-banner-text);\n          margin: 4px 0;\n          font-family: var(--hero-banner-font-family);\n        }\n        .linkbutton {\n          padding: 0;\n          margin: 8px 0;\n          text-decoration: none;\n          font-family: var(--hero-banner-font-family);\n        }\n        .linkbutton button {\n          text-transform: none;\n          font-weight: var(--hero-banner-button-weight);\n          color: var(--hero-banner-text);\n          background-color: var(--hero-banner-button-color);\n          font-size: 16px;\n          margin: 0;\n        }\n        .linkbutton:focus button,\n        .linkbutton:hover button {\n          background-color: var(--hero-banner-button-hover-color);\n        }\n        @media screen and (max-width: 720px) {\n          .title {\n            font-size: 20px;\n          }\n          .details {\n            font-size: 12px;\n          }\n          .itemwrapper {\n            left: 5%;\n            width: 50%;\n          }\n        }\n        @media screen and (max-width: 500px) {\n          .title {\n            font-size: 16px;\n          }\n          .details {\n            display: none;\n          }\n          .itemwrapper {\n            left: 0;\n            width: 300px;\n          }\n        }\n      ']);return h=function(){return e},e}function y(){var e=f(['\n      <img\n        class="image"\n        src="','"\n        loading="lazy"\n        aria-describedby="','"\n      />\n      <div class="itemwrapper">\n        <div class="title">','</div>\n        <div class="details">','</div>\n        <a\n          class="linkbutton"\n          href="','"\n          ?hidden="','"\n          ><button raised="">',"</button></a\n        >\n      </div>\n    "]);return y=function(){return e},e}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(d,n.SimpleColorsSuper(t.LitElement));var o,i,u,f=s(d);function d(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),f.apply(this,arguments)}return o=d,u=[{key:"styles",get:function(){return[].concat(b(p(c(d),"styles",this)),[t.css(h())])}},{key:"tag",get:function(){return"hero-banner"}},{key:"properties",get:function(){return a(a({},p(c(d),"properties",this)),{},{title:{type:String},image:{type:String},details:{type:String},buttonText:{type:String,attribute:"button-text"},buttonLink:{type:String,attribute:"button-link"},ariaDescribedby:{attribute:"aria-decsribedby",type:String}})}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!1,canEditSource:!1,gizmo:{title:"Hero image",description:"Typically fancy banner image calling your attention to something.",icon:"image:panorama",color:"red",groups:["Image","Media"],handles:[{type:"image",source:"image",title:"title",description:"details",link:"buttonLink"}],meta:{author:"ELMS:LN"}},settings:{configure:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"},{property:"image",title:"Image",description:"URL of the image",inputMethod:"haxupload",icon:"image:panorama"},{property:"details",title:"Details",description:"Additional text detail / teaser data",inputMethod:"textfield",icon:"editor:text-fields"},{property:"buttonText",title:"Button",description:"Label of the button",inputMethod:"textfield",icon:"icons:radio-button-unchecked"},{property:"accentColor",title:"Accent color",description:"Select the accent color use",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark",description:"Use dark theme",inputMethod:"boolean",icon:"invert-colors"},{property:"buttonLink",title:"Button - Link",description:"Label of the button",inputMethod:"haxupload",validationType:"url",icon:"icons:link"}],advanced:[{property:"ariaDescribedby",title:"aria-decsribedby",description:"Space-separated id list for long descriptions that appear elsewhere",inputMethod:"textfield"}]}}}}],(i=[{key:"render",value:function(){return t.html(y(),this.image,this.ariaDescribedby||"",this.title,this.details,this.buttonLink||"",!this.buttonLink,this.buttonText||"Find out more")}}])&&r(o.prototype,i),u&&r(o,u),d}();window.customElements.define(m.tag,m),e.HeroBanner=m,Object.defineProperty(e,"__esModule",{value:!0})});
