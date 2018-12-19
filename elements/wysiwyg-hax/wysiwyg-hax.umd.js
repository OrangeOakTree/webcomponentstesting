!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-legacy.js"),require("@lrnwebcomponents/cms-hax/cms-hax.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@lrnwebcomponents/cms-hax/cms-hax.js"],t):t(e.WysiwygHax={},e.polymerLegacy_js)}("undefined"!=typeof self?self:this,function(e,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(){var e,t,n=(e=['\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <textarea id$="[[fieldId]]" name="[[fieldName]]" hidden="">\n[[bodyValue]]</textarea\n    >\n    <cms-hax\n      open-default="[[openDefault]]"\n      hide-message=""\n      body-offset-left="[[bodyOffsetLeft]]"\n      update-page-data="[[updatePageData]]"\n      end-point="[[endPoint]]"\n      app-store-connection="[[appStoreConnection]]"\n      hide-export-button="[[hideExportButton]]"\n      align="[[align]]"\n    ></cms-hax>\n  '],(t=['\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <textarea id\\$="[[fieldId]]" name="[[fieldName]]" hidden="">\n[[bodyValue]]</textarea\n    >\n    <cms-hax\n      open-default="[[openDefault]]"\n      hide-message=""\n      body-offset-left="[[bodyOffsetLeft]]"\n      update-page-data="[[updatePageData]]"\n      end-point="[[endPoint]]"\n      app-store-connection="[[appStoreConnection]]"\n      hide-export-button="[[hideExportButton]]"\n      align="[[align]]"\n    ></cms-hax>\n  '])||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return o=function(){return n},n}var a=t.Polymer({_template:t.html(o()),is:"wysiwyg-hax",properties:{openDefault:{type:Boolean,value:!1},hideExportButton:{type:Boolean,value:!0},align:{type:String,value:"right"},bodyValue:{type:String},appStoreConnection:{type:Object},fieldId:{type:String,value:"textarea-input-field"},fieldName:{type:String,value:"data[content]"},bodyOffsetLeft:{type:Number,value:-22},editMode:{type:Boolean,reflectToAttribute:!0},endPoint:{type:String},updatePageData:{type:String},activeHaxBody:{type:Object,observer:"_activeHaxBodyUpdated"},__imported:{type:Boolean,value:!1}},_activeHaxBodyUpdated:function(e,t){var o=this;if(null!=e&&!this.__imported){this.__imported=!0;var a=this.queryEffectiveChildren("template");"undefined"!==n(a)&&(e.importContent(a.innerHTML),this.editMode=!1,window.HaxStore.write("editMode",this.editMode,this),setTimeout(function(){o.editMode=!0,window.HaxStore.write("editMode",o.editMode,o)},200))}},created:function(){document.body.addEventListener("hax-store-property-updated",this._haxStorePropertyUpdated.bind(this))},attached:function(){document.body.addEventListener("hax-save",this._bodyContentUpdated.bind(this)),document.body.addEventListener("hax-store-property-updated",this._haxStorePropertyUpdated.bind(this))},_haxStorePropertyUpdated:function(e){e.detail&&"undefined"!==n(e.detail.value)&&e.detail.property&&("object"===n(e.detail.value)&&this.set(e.detail.property,null),this.set(e.detail.property,e.detail.value))},_bodyContentUpdated:function(e){this.bodyValue=window.HaxStore.instance.activeHaxBody.haxToContent()}});e.WysiwygHax=a,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=wysiwyg-hax.umd.js.map
