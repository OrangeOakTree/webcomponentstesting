!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("@polymer/polymer/polymer-legacy.js"),require("@polymer/polymer/lib/legacy/polymer.dom.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@polymer/polymer/lib/legacy/polymer.dom.js"],o):o(e.MediaVideo={},e.polymerLegacy_js,e.polymer_dom_js)}("undefined"!=typeof self?self:this,function(e,o,t){"use strict";function i(){var e,o,t=(e=["\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <slot></slot>\n  "],o||(o=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(o)}})));return i=function(){return t},t}var r=o.Polymer({_template:o.html(i()),is:"media-video",behaviors:[],properties:{},ready:function(){var e=this;this.querySelector("*[data-mediavideo-src]");this.addEventListener("click",function(o){o.stopPropagation();var i=t.dom(o).localTarget,r=e.querySelector(".mediavideo"),s=e.querySelector(".mediavideo-button-container"),a=e.querySelector("*[data-mediavideo-src]");s.classList.toggle("mediavideo-button-display"),r.classList.toggle("mediavideo--is-open"),i.classList.contains("poster--image")||i.classList.contains("mediavideo-icon")?setTimeout(function(){e._startIframeVideo(a)},500):e._stopIframeVideo(a)})},_startIframeVideo:function(e){var o=e.dataset.mediavideoSrc;(o.indexOf("youtube")>=0||o.indexOf("vimeo")>=0)&&(o.indexOf("?")>=0?o+="&autoplay=1":o+="?autoplay=1"),e.setAttribute("src",o)},_stopIframeVideo:function(e){e.setAttribute("src","")}});e.MediaVideo=r,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=media-video.umd.js.map
