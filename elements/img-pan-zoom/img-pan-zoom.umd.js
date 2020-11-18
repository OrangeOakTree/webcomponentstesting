!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/hexagon-loader/hexagon-loader.js"),require("@lrnwebcomponents/es-global-bridge/es-global-bridge.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/hexagon-loader/hexagon-loader.js","@lrnwebcomponents/es-global-bridge/es-global-bridge.js"],t):t((e=e||self).ImgPanZoom={},e.litElement_js)}(this,function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o,i,r=l(e);if(t){var a=l(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return o=this,!(i=n)||"object"!=typeof i&&"function"!=typeof i?u(o):i}}function s(e,t,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function g(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function v(){var e=g([""]);return v=function(){return e},e}var p=function(e){a(r,t.LitElement);var o=c(r);function r(){var e;return n(this,r),(e=o.call(this)).loaded=!1,e.error=!1,e.loading=!1,e}return i(r,[{key:"render",value:function(){return t.html(v())}}],[{key:"tag",get:function(){return"img-loader"}},{key:"properties",get:function(){return{src:{type:String},loaded:{type:Boolean},loading:{type:Boolean},describedBy:{type:String,attribute:"described-by"},error:{type:Boolean}}}}]),i(r,[{key:"updated",value:function(e){var t=this;e.forEach(function(e,n){"src"==n&&t._loadPageSrc(),["error","loaded","loading"].includes(n)&&t.dispatchEvent(new CustomEvent("".concat(n,"-changed"),{detail:{value:t[n]}}))})}},{key:"_loadPageSrc",value:function(){var e=this;this.__imageLoader&&this.__imageLoader.remove(),this.src&&(this.__imageLoader=new Image,this.__imageLoader.onload=function(){e.loading=!1,e.loaded=!0,e.__imageLoader&&e.__imageLoader.remove()},this.__imageLoader.onerror=function(){e.loading=!1,e.loaded=!1,e.__imageLoader&&e.__imageLoader.remove()},this.__imageLoader.src=this.src),this.loading=!!this.src,this.loaded=!1}}]),r}();function h(){var e=g(["\n        :host {\n          display: block;\n          position: relative;\n          height: var(--img-pan-zoom-height, 500px);\n        }\n        #viewer {\n          position: relative;\n          height: 100%;\n          width: 100%;\n        }\n        #loader {\n          display: none;\n          position: relative;\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          justify-content: space-around;\n          width: 100%;\n          height: calc(var(--img-pan-zoom-height, 500px) - 100px);\n          margin-bottom: calc(100px - var(--img-pan-zoom-height, 500px));\n          z-index: 1;\n        }\n        hexagon-loader {\n          position: absolute;\n          opacity: 0;\n          transition: opacity 700ms;\n          margin: auto;\n        }\n        hexagon-loader[hidden] {\n          display: none;\n        }\n        hexagon-loader[loading] {\n          opacity: 1;\n        }\n      "]);return h=function(){return e},e}function f(){var e=g(['\n                  <div id="loader">\n                    <hexagon-loader\n                      ?loading=','\n                      item-count="4"\n                      size="small"\n                    ></hexagon-loader>\n                  </div>\n                ']);return f=function(){return e},e}function m(){var e=g(["\n            ",'\n            <img-loader\n              ?loaded="','"\n              @loaded-changed="','"\n              ?loading="','"\n              @loading-changed="','"\n              src="','"\n              described-by="','"\n            ></img-loader>\n          ']);return m=function(){return e},e}function y(){var e=g(["\n      \x3c!-- Only preload regular images --\x3e\n      ",'\n\n      \x3c!-- Openseadragon --\x3e\n      <div id="viewer"></div>\n    ']);return y=function(){return e},e}window.customElements.define(p.tag,p);var w=function(e){a(d,t.LitElement);var o=c(d);function d(){var e;n(this,d),(e=o.call(this)).page=0,e.loading=!1,e.dzi=!1,e.fadeIn=!0,e.hideSpinner=!1,e.fullscreenToggled=!1,e.flipToggled=!1,e.showNavigationControl=!1,e.showNavigator=!1,e.navigatorAutoFade=!1,e.navigatorPosition=!1,e.navigatorToggled=!1,e.zoomPerClick=2,e.zoomPerScroll=1.2,e.animationTime=1.2,e.navPrevNextWrap=!1,e.showRotationControl=!1,e.minZoomImageRatio=1,e.maxZoomPixelRatio=1.1,e.constrainDuringPan=!1,e.visibilityRatio=1,e.sequenceMode=!1,e.preserveViewport=!1,e.showReferenceStrip=!1,e.referenceStripScroll="horizontal";var t=e.pathFromUrl(decodeURIComponent("undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("img-pan-zoom.umd.js",document.baseURI).href)),i="".concat(t,"lib/openseadragon/openseadragon.min.js");return window.addEventListener("es-bridge-openseadragon-loaded",e._openseadragonLoaded.bind(u(e))),window.ESGlobalBridge.requestAvailability(),window.ESGlobalBridge.instance.load("openseadragon",i),e}return i(d,[{key:"render",value:function(){return t.html(y(),this.dzi?"":t.html(m(),this.hideSpinner||this.loaded?"":t.html(f(),this.loading||!this.loaded),this.loaded,this.loadedChangedEvent,this.loading,this.loadingChangedEvent,this.src||(this.sources||[])[0],this.describedBy||""))}},{key:"pathFromUrl",value:function(e){return e.substring(0,e.lastIndexOf("/")+1)}}],[{key:"styles",get:function(){return[t.css(h())]}},{key:"tag",get:function(){return"img-pan-zoom"}},{key:"properties",get:function(){return{src:{type:String},sources:{type:Array},page:{type:Number,attribute:"page"},describedBy:{type:String,attribute:"described-by"},dzi:{type:Boolean},fadeIn:{type:Boolean,attribute:"fade-in"},fullscreenToggled:{type:Boolean,attribute:"fullscreen-toggled",reflect:!0},flipToggled:{type:Boolean,attribute:"flip-toggled",reflect:!0},loading:{type:Boolean},hideSpinner:{type:Boolean,attribute:"hide-spinner"},loaded:{type:Boolean},showNavigationControl:{type:Boolean,attribute:"show-navigation-control"},showNavigator:{type:Boolean,attribute:"show-navigator"},zoomPerClick:{type:Number,attribute:"zoom-per-click"},zoomPerScroll:{type:Number,attribute:"zoom-per-scroll"},animationTime:{type:Number,attribute:"animation-time"},navPrevNextWrap:{type:Boolean,attribute:"nav-prev-next-wrap"},showRotationControl:{type:Boolean,attribute:"show-rotation-control"},minZoomImageRatio:{type:Number,attribute:"min-zoom-image-ratio"},maxZoomPixelRatio:{type:Number,attribute:"max-zoom-pixel-ratio"},constrainDuringPan:{type:Boolean,attribute:"constrain-during-pan"},visibilityRatio:{type:Number,attribute:"visibility-ratio"},navigatorAutoFade:{type:Boolean,attribute:"navigator-auto-fade",reflect:!0},navigatorPosition:{type:String,attribute:"navigator-position",reflect:!0},navigatorTop:{type:String,attribute:"navigator-top",reflect:!0},navigatorBottom:{type:String,attribute:"navigator-bottom",reflect:!0},navigatorLeft:{type:String,attribute:"navigator-left",reflect:!0},navigatorRight:{type:String,attribute:"navigator-right",reflect:!0},navigatorHeight:{type:String,attribute:"navigator-height",reflect:!0},navigatorWidth:{type:String,attribute:"navigator-width",reflect:!0},navigatorToggled:{type:Boolean,attribute:"navigator-toggled",reflect:!0},sequenceMode:{type:Boolean,attribute:"sequence-mode"},preserveViewport:{type:Boolean,attribute:"preserve-viewport"},showReferenceStrip:{type:Boolean,attribute:"show-reference-strip"},referenceStripScroll:{type:String,attribute:"reference-strip-scroll"},previousButton:{type:String},nextButton:{type:String},homeButton:{type:String},zoomInButton:{type:String},zoomOutButton:{type:String},fullScreenButton:{type:String}}}}]),i(d,[{key:"updated",value:function(e){var t=this;e.forEach(function(e,n){"loading"==n&&t.dispatchEvent(new CustomEvent("loading-changed",{detail:{value:t[n]}})),"loaded"==n&&(t._loadedChanged(t[n],e),t.dispatchEvent(new CustomEvent("loaded-changed",{detail:{value:t[n]}}))),"navigatorToggled"==n&&t.viewer&&(t.viewer.navigator.element.style.display=t.navigatorToggled?"inline-block":"none"),"fullscreenToggled"==n&&t._setFullscreen(),"flipToggled"==n&&t.viewer&&t.viewer.viewport&&t.viewer.viewport.setFlip(t.flipToggled),"page"==n&&t.viewer&&t.viewer.goToPage(Math.max(0,Math.min(t.page,(t.viewer.tileSources||[]).length-1)))})}},{key:"_openseadragonLoaded",value:function(){var e=this;try{if(window.OpenSeadragon)this._initOpenSeadragon();else var t=setInterval(function(){window.OpenSeadragon&&(e._initOpenSeadragon(),clearInterval(t))},1)}catch(e){console.warn(e)}}},{key:"connectedCallback",value:function(){var e=this;s(l(d.prototype),"connectedCallback",this).call(this),this.animationConfig={fade:{name:"fade-in-animation",node:this.shadowRoot.querySelector("#viewer")}},setTimeout(function(){e.dzi&&e._openseadragonLoaded()},0)}},{key:"disconnectedCallback",value:function(){s(l(d.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("es-bridge-openseadragon-loaded",this._openseadragonLoaded.bind(this))}},{key:"_initOpenSeadragon",value:function(){var e=this;setTimeout(function(){var t,n=[e.src].filter(function(e){return!!e});e.dzi||(n=n.map(function(e){return{type:"image",url:e,buildPyramid:!1}})),e.viewer||(e.viewer=new OpenSeadragon((r(t={element:e.shadowRoot.querySelector("#viewer"),prefixUrl:"".concat(e.pathFromUrl(decodeURIComponent("undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("img-pan-zoom.umd.js",document.baseURI).href)),"lib/openseadragon/images/"),visibilityRatio:e.visibilityRatio,constrainDuringPan:e.constrainDuringPan,showNavigationControl:e.showNavigationControl,showNavigator:e.showNavigator,zoomPerClick:e.zoomPerClick,zoomPerScroll:e.zoomPerScroll,animationTime:e.animationTime,navPrevNextWrap:e.navPrevNextWrap,showRotationControl:e.showRotationControl,minZoomImageRatio:e.minZoomImageRatio,maxZoomPixelRatio:e.maxZoomPixelRatio},"showNavigationControl",e.showNavigationControl),r(t,"navigatorAutoFade",e.navigatorAutoFade),r(t,"navigatorPosition",e.navigatorPosition),r(t,"navigatorLeft",e.navigatorLeft),r(t,"navigatorTop",e.navigatorTop),r(t,"navigatorRight",e.navigatorRight),r(t,"navigatorBottom",e.navigatorBottom),r(t,"navigatorWidth",e.navigatorWidth),r(t,"navigatorHeight",e.navigatorHeight),r(t,"sequenceMode",e.sequenceMode),r(t,"preserveViewport",e.preserveViewport),r(t,"showReferenceStrip",e.showReferenceStrip),r(t,"referenceStripScroll",e.referenceStripScroll),r(t,"flipped",e.flipToggled),r(t,"previousButton",e.previousButton),r(t,"nextButton",e.nextButton),r(t,"homeButton",e.homeButton),r(t,"fullScreenButton",e.fullScreenButton),r(t,"zoomInButton",e.zoomInButton),r(t,"zoomOutButton",e.zoomOutButton),r(t,"tileSources",n),t))),e.viewer&&(e.viewer.goToPage(0),e._setFullscreen(),e.viewer.navigator&&e.viewer.navigator.element&&(e.viewer.navigator.element.style.display=e.navigatorToggled?"inline-block":"none")),e.viewer.addHandler("zoom",function(t){return e.dispatchEvent(new CustomEvent("zoom",{detail:{value:t}}))}),e.viewer.addHandler("page",function(t){return e.dispatchEvent(new CustomEvent("page",{detail:{value:t}}))}),e.viewer.addHandler("pan",function(t){return e.dispatchEvent(new CustomEvent("pan",{detail:{value:t}}))}),e.viewer.addHandler("rotate",function(t){return e.dispatchEvent(new CustomEvent("pan",{detail:{value:t}}))}),e.viewer.addHandler("update-viewport",function(t){return e.dispatchEvent(new CustomEvent("update-viewport",{detail:{value:t}}))}),e.viewer.addHandler("viewport-changed",function(t){return e.dispatchEvent(new CustomEvent("viewport-changed",{detail:{value:t}}))}),e.init=!0},100)}},{key:"_setFullscreen",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.fullscreenToggled;this.viewer&&this.viewer.setFullScreen(e)}},{key:"destroy",value:function(){this.viewer.destroy()}},{key:"rotateTo",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:90;this.viewer.viewport.setRotation(e)}},{key:"rotate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:90;this.rotateTo(e+this.viewer.viewport.getRotation())}},{key:"pan",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.2;this.viewer.viewport.getBounds();this.viewer.viewport.panBy(new OpenSeadragon.Point(e,t))}},{key:"zoomIn",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.7,t=this.viewer.viewport.getZoom()+e;t<this.viewer.viewport.getMaxZoom()&&this.viewer.viewport.zoomTo(t)}},{key:"zoomOut",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.7,t=this.viewer.viewport.getZoom(),n=this.viewer.viewport.getMinZoom(),o=t-e;o>n?this.viewer.viewport.zoomTo(o):n!=t&&this.resetZoom()}},{key:"toggleFullscreen",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.fullscreenToggled;this.fullscreenToggled=e}},{key:"toggleFlip",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.flipToggled;this.flipToggled=e}},{key:"resetZoom",value:function(){this.viewer.viewport.goHome()}},{key:"_srcChanged",value:function(){this.dzi&&this.init&&this._addTiledImage()}},{key:"loadedChangedEvent",value:function(e){this.loaded=e.detail.value,this.loaded&&(this.loading=!1)}},{key:"loadingChangedEvent",value:function(e){this.loading=e.detail.value}},{key:"_loadedChanged",value:function(){var e=this;this.loaded&&(this.init?this._addImage():setTimeout(function(){e._openseadragonLoaded()},100))}},{key:"_addImage",value:function(){this.viewer.addSimpleImage({url:this.src,index:0,replace:!0})}},{key:"_addTiledImage",value:function(){this.viewer.addTiledImage({tileSource:this.src,index:0,replace:!0})}}]),d}();window.customElements.define(w.tag,w),e.ImgPanZoom=w,Object.defineProperty(e,"__esModule",{value:!0})});
