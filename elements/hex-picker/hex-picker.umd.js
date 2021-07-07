!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit")):"function"==typeof define&&define.amd?define(["exports","lit"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).HexPicker={},e.lit)}(this,(function(e,t){"use strict";function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=a(e);if(t){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}function s(e,t,r){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function p(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var d,h,f,g,y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(b,e);var n,o,u,y=c(b);function b(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),(e=y.call(this)).value="#000000FF",e._rValue=0,e._gValue=0,e._bValue=0,e._oValue=255,e.disabled=!1,e}return n=b,u=[{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!1,canEditSource:!0,gizmo:{title:"Hex Picker",description:"Hexcode color picker",icon:"image:colorize",color:"grey",groups:["color","picker"],handles:[],meta:{author:"collinkleest",owner:"ELMS:LN"}},settings:{configure:[{property:"value",title:"Value",description:"Default hex value",inputMethod:"textfield"},{property:"disabled",title:"Disabled",description:"Disable the text field",inputMethod:"boolean"},{property:"largeDisplay",title:"Large Display",description:"Include color in large display",inputMethod:"boolean"}],advanced:[]},demoSchema:[{tag:"hex-picker",properties:{org:"elmsln",repo:"lrnwebcomponents"},content:""}]}}},{key:"properties",get:function(){return i(i({},s(a(b),"properties",this)),{},{value:{type:String,reflect:!0,attribute:"value"},disabled:{type:Boolean,reflect:!0,attribute:"disabled"},largeDisplay:{type:Boolean,reflect:!0,attribute:"large-display"}})}},{key:"styles",get:function(){return[t.css(g||(g=p(["\n        :host {\n          --color-picker-width: 200px;\n          --color-picker-input-margin: 5px;\n          --color-picker-input-padding: 5px;\n          display: flex;\n          flex-direction: column;\n        }\n\n        .input-container {\n          display: inline-flex;\n          align-items: center;\n          box-sizing: border-box;\n          width: var(--color-picker-width);\n        }\n\n        .color-square {\n          background-color: #000000ff;\n          border: 1px dotted black;\n          width: var(--color-picker-square-width, 15px);\n          height: var(--color-picker-square-height, 15px);\n          margin-left: -35px;\n        }\n\n        .slider-container {\n          width: var(--color-picker-width);\n        }\n\n        fieldset {\n          border: none;\n          display: flex;\n          align-items: center;\n        }\n\n        .text-input {\n          margin-top: var(--color-picker-input-margin);\n          margin-bottom: var(--color-picker-input-margin);\n          padding: var(--color-picker-input-padding);\n          width: calc(\n            var(--color-picker-width) - 8px - var(--color-picker-input-margin)\n          );\n        }\n\n        .large-display {\n          width: var(--color-picker-width);\n          height: var(--color-picker-lg-block-height, 100px);\n          background-color: #000000ff;\n          border: 1px dotted black;\n          border-radius: 2px;\n        }\n      "])))]}},{key:"tag",get:function(){return"hex-picker"}}],(o=[{key:"render",value:function(){return t.html(d||(d=p(["\n      ",'\n      <div class="input-container">\n        <input\n          class="text-input"\n          maxlength="9" \n          @input="','"\n          @keydown="','" \n          .disabled=','>\n        </input>\n        <div class="color-square"></div>\n      </div>\n      <div class="slider-container">\n        ',"\n        ","\n        ","\n        ","\n      </div>\n    "])),this.largeDisplay?t.html(h||(h=p(['<div class="large-display"></div>']))):"",this._inputChanged,this._validateInput,this.disabled,this.renderFieldSet("R"),this.renderFieldSet("G"),this.renderFieldSet("B"),this.renderFieldSet("O"))}},{key:"_validateInput",value:function(e){String.fromCharCode(e.which).match(/[0-9A-Fa-f\b]/g)||39===e.which||37===e.which||e.preventDefault()}},{key:"_padHex",value:function(e){return e.length<2?"0"+e:e}},{key:"_computeHex",value:function(){var e=this._rValue.toString(16),t=this._gValue.toString(16),r=this._bValue.toString(16),n=this._oValue.toString(16);return"#"+this._padHex(e)+this._padHex(t)+this._padHex(r)+this._padHex(n)}},{key:"_inputChanged",value:function(e){var t=e.target.value;t.startsWith("#")||(t="#"+t),this.shadowRoot.querySelector(".color-square").style.backgroundColor=t,this.value=t,this.largeDisplay&&(this.shadowRoot.querySelector(".large-display").style.backgroundColor=t),this._dispatchChange(t);var r=this._hexToRgb(t);null!==r&&this._updateSliders(r)}},{key:"_updateSliders",value:function(e){this.shadowRoot.querySelector("#R").value=e.r,this.shadowRoot.querySelector("#R_out").value=e.r,this.shadowRoot.querySelector("#G").value=e.g,this.shadowRoot.querySelector("#G_out").value=e.g,this.shadowRoot.querySelector("#B").value=e.b,this.shadowRoot.querySelector("#B_out").value=e.b,this.shadowRoot.querySelector("#O").value=e.o,this.shadowRoot.querySelector("#O_out").value=e.o}},{key:"_hexToRgb",value:function(e){return 4===e.length?{r:parseInt(e[1]+"F",16),g:parseInt(e[2]+"F",16),b:parseInt(e[3]+"F",16),o:0}:5===e.length?{r:parseInt(e[1]+"F",16),g:parseInt(e[2]+"F",16),b:parseInt(e[3]+"F",16),o:parseInt(e[4]+"F",16)}:7===e.length?{r:parseInt(e[1]+e[2],16),g:parseInt(e[3]+e[4],16),b:parseInt(e[5]+e[6],16),o:0}:9===e.length?{r:parseInt(e[1]+e[2],16),g:parseInt(e[3]+e[4],16),b:parseInt(e[5]+e[6],16),o:parseInt(e[7]+e[8],16)}:{r:0,g:0,b:0,o:0}}},{key:"_fieldSetChange",value:function(e){var t=this.shadowRoot.querySelector("#".concat(e.target.id,"_out")),r=this.shadowRoot.querySelector(".color-square"),n=this.shadowRoot.querySelector("input");t.value=e.target.value,"R"===e.target.id?this._rValue=parseInt(e.target.value,10):"G"===e.target.id?this._gValue=parseInt(e.target.value,10):"B"===e.target.id?this._bValue=parseInt(e.target.value,10):"O"===e.target.id&&(this._oValue=parseInt(e.target.value,10));var o=this._computeHex();r.style.backgroundColor=o,n.value=o,this.largeDisplay&&(this.shadowRoot.querySelector(".large-display").style.backgroundColor=o),this._dispatchChange(o)}},{key:"_dispatchChange",value:function(){this.dispatchEvent(new CustomEvent("value-changed",{bubbles:!0,cancelable:!1,composed:!1,detail:this}))}},{key:"renderFieldSet",value:function(e){return t.html(f||(f=p(['\n      <fieldset>\n        <label for="','">',"</label>\n        <input\n          @input=",'\n          type="range"\n          min="0"\n          max="255"\n          id="','"\n          step="1"\n          value="0"\n        />\n        <output for="','" id="','_out">0</output>\n      </fieldset>\n    '])),e,e,this._fieldSetChange,e,e,e)}},{key:"updated",value:function(e){var t=this;e.forEach((function(e,r){if("value"===r&&t[r]){t.shadowRoot.querySelector(".color-square").style.backgroundColor=t.value,t.shadowRoot.querySelector("input").value=t.value,t.largeDisplay&&(t.shadowRoot.querySelector(".large-display").style.backgroundColor=t.value);var n=t._hexToRgb(t.value);null!==n&&t._updateSliders(n)}}))}}])&&r(n.prototype,o),u&&r(n,u),b}(t.LitElement);customElements.define(y.tag,y),e.HexPicker=y,Object.defineProperty(e,"__esModule",{value:!0})}));
