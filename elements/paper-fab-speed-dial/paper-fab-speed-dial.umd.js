!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("@polymer/polymer/polymer-legacy.js"),require("@polymer/iron-overlay-behavior/iron-overlay-behavior.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@polymer/iron-overlay-behavior/iron-overlay-behavior.js"],o):o(e.PaperFabSpeedDial={},e.polymerLegacy_js,e.ironOverlayBehavior_js)}("undefined"!=typeof self?self:this,function(e,o,r){"use strict";function i(){var e,o,r=(e=["\n    <slot></slot>\n  "],o||(o=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(o)}})));return i=function(){return r},r}o.Polymer({_template:o.html(i()),is:"paper-fab-speed-dial-overlay",behaviors:[r.IronOverlayBehavior]});var a=o.Polymer({is:"paper-fab-speed-dial",properties:{icon:{type:String,value:"add"},opened:{type:Boolean,notify:!0},disabled:{type:Boolean,value:!1}},open:function(e){e&&e.preventDefault(),this.opened=!0},close:function(e){e&&e.preventDefault(),this.opened=!1}});e.PaperFabSpeedDial=a,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=paper-fab-speed-dial.umd.js.map
