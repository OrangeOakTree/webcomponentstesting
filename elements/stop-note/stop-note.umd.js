!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/utils/lib/remoteLinkBehavior.js"),require("@lrnwebcomponents/simple-icon/lib/simple-iconset.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/utils/lib/remoteLinkBehavior.js","@lrnwebcomponents/simple-icon/lib/simple-iconset.js","@lrnwebcomponents/simple-icon/simple-icon.js"],n):n((e=e||self).StopNote={},e.litElement_js,e.schemaBehaviors_js,e.remoteLinkBehavior_js,e.simpleIconset_js)}(this,function(e,n,t,o,i){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,n){return(a=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function l(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function u(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var t,o=s(e);if(n){var i=s(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return l(this,t)}}function p(e,n,t){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var o=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=s(e)););return e}(e,n);if(o){var i=Object.getOwnPropertyDescriptor(o,n);return i.get?i.get.call(t):i.value}})(e,n,t||e)}function f(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function d(){var e=f(['\n        :host {\n          display: block;\n          width: auto;\n          --background-color: #f7f7f7;\n          --accent-color: #d32f2f;\n          margin-bottom: 20px;\n        }\n\n        simple-icon {\n          --simple-icon-height: 100px;\n          --simple-icon-width: 100px;\n        }\n\n        :host([icon="stopnoteicons:stop-icon"]) {\n          --accent-color: #d8261c;\n        }\n\n        :host([icon="stopnoteicons:warning-icon"]) {\n          --accent-color: #ffeb3b;\n        }\n\n        :host([icon="stopnoteicons:confirm-icon"]) {\n          --accent-color: #81c784;\n        }\n\n        :host([icon="stopnoteicons:book-icon"]) {\n          --accent-color: #21a3db;\n        }\n\n        .container {\n          display: flex;\n          width: auto;\n        }\n\n        .message_wrap {\n          border-right: 7px solid var(--accent-color);\n          padding: 10px 25px;\n          flex: 1 1 auto;\n          background-color: var(--background-color);\n        }\n\n        .main_message {\n          font-size: 32px;\n          margin-top: 10px;\n        }\n\n        .secondary_message {\n          margin-top: 5px;\n          font-size: 19.2px;\n          float: left;\n        }\n\n        .link a {\n          margin-top: 5px;\n          font-size: 19.2px;\n          float: left;\n          clear: left;\n          text-decoration: none;\n          color: #2196f3;\n        }\n\n        .link a:hover {\n          color: #1976d2;\n        }\n\n        .svg {\n          display: flex;\n          justify-content: center;\n        }\n\n        .svg_wrap {\n          background-color: var(--accent-color);\n          padding: 5px;\n          width: auto;\n        }\n      ']);return d=function(){return e},e}function h(){var e=f(['\n                <div class="link">\n                  <a href="','" id="link"> More Information &gt; </a>\n                </div>\n              ']);return h=function(){return e},e}function m(){var e=f(['\n      <div class="container">\n        <div class="svg_wrap">\n          <div class="svg">\n            <simple-icon icon="','" no-colorize></simple-icon>\n          </div>\n        </div>\n        <div class="message_wrap">\n          <div class="main_message" ?contenteditable="','" id="title">','</div>\n          <div class="secondary_message"><slot name="message"></slot></div>\n          ',"\n        </div>\n      </div>\n    "]);return m=function(){return e},e}i.SimpleIconsetStore.registerIconset("stopnoteicons","".concat(i.pathResolver("undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("stop-note.umd.js",document.baseURI).href),"lib/svgs/stopnoteicons/"));var g={"stopnoteicons:stop-icon":"Stop","stopnoteicons:warning-icon":"Warning","stopnoteicons:confirm-icon":"Confirmation","stopnoteicons:book-icon":"Notice"},v=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&a(e,n)}(r,o.remoteLinkBehavior(t.SchemaBehaviors(n.LitElement)));var i=u(r);function r(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r),(e=i.call(this)).url=null,e.title="",e.icon="stopnoteicons:stop-icon",e}return c(r,[{key:"render",value:function(){return n.html(m(),this.icon,this.editMode,this.title,this.url?n.html(h(),this.url):"")}}],[{key:"styles",get:function(){return[n.css(d())]}},{key:"tag",get:function(){return"stop-note"}}]),c(r,[{key:"updated",value:function(e){var n=this;p(s(r.prototype),"updated",this)&&p(s(r.prototype),"updated",this).call(this,e),e.forEach(function(e,t){"url"==t&&(n.remoteLinkURL=n[t])})}},{key:"firstUpdated",value:function(e){p(s(r.prototype),"firstUpdated",this)&&p(s(r.prototype),"firstUpdated",this).call(this,e),this.remoteLinkTarget=this.shadowRoot.querySelector("#link")}},{key:"haxHooks",value:function(){return{activeElementChanged:"haxactiveElementChanged",inlineContextMenu:"haxinlineContextMenu"}}},{key:"haxactiveElementChanged",value:function(e,n){return this.alignState(),this.editMode=n,!1}},{key:"alignState",value:function(){this.title=this.shadowRoot.querySelector("#title").innerText}},{key:"haxinlineContextMenu",value:function(e){e.ceButtons=[{icon:"image:style",callback:"haxtoggleIcon",label:"Toggle icon"}]}},{key:"haxtoggleIcon",value:function(e){var n=Object.keys(g),t=n[0];return n.lastIndexOf(this.icon)!=n.length-1&&(t=n[n.lastIndexOf(this.icon)+1]),this.icon=t,!0}}],[{key:"properties",get:function(){return{title:{type:String},url:{type:String},icon:{type:String},editMode:{type:Boolean}}}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Stop Note",description:"A message to alert readers to specific directions.",icon:"icons:report",color:"orange",groups:["Education","Content"],handles:[{type:"text",title:"label"}],meta:{author:"ELMS:LN"}},settings:{configure:[{property:"title",title:"Title",description:"Enter title for stop-note.",inputMethod:"textfield",required:!0},{property:"url",title:"URL",description:"Enter an external url.",inputMethod:"haxupload",required:!0},{slot:"message",title:"Message",description:"Enter a message for stop-note.",inputMethod:"code-editor",required:!0},{property:"icon",title:"Action Icon",description:"Icon used for stop-note",inputMethod:"select",options:g}],advanced:[]},saveOptions:{unsetAttributes:["colors"]},demoSchema:[{tag:"stop-note",properties:{title:"Hold up there"},content:'<span slot="message"><strong>Read these important things!</strong>\n</span>\n'},{tag:"stop-note",properties:{title:"Warning",icon:"stopnoteicons:warning-icon"},content:'<span slot="message">You can write any warning message you want here.</span>\n'}]}}}]),r}();window.customElements.define(v.tag,v),e.StopNote=v,Object.defineProperty(e,"__esModule",{value:!0})});
