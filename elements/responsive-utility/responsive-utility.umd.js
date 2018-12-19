!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-legacy.js"),require("@polymer/polymer/lib/utils/async.js"),require("@polymer/iron-resizable-behavior/iron-resizable-behavior.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@polymer/polymer/lib/utils/async.js","@polymer/iron-resizable-behavior/iron-resizable-behavior.js"],t):t(e.ResponsiveUtility={},e.polymerLegacy_js,null,e.ironResizableBehavior_js)}("undefined"!=typeof self?self:this,function(e,t,i,n){"use strict";function o(){var e,t,i=(e=["\n    <style>\n      :host {\n        display: inline;\n      }\n    </style>\n    <slot></slot>\n  "],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return o=function(){return i},i}window.ResponsiveUtility={},window.ResponsiveUtility.instance=null;var r=t.Polymer({_template:t.html(o()),is:"responsive-utility",behaviors:[n.IronResizableBehavior],listeners:{"iron-resize":"_onIronResize"},properties:{targets:{type:Array,value:[]}},created:function(){var e=this;null==window.ResponsiveUtility.instance&&(window.ResponsiveUtility.instance=e),window.addEventListener("responsive-element",function(t){var i=void 0===t.detail.relativeToParent||null===t.detail.relativeToParent||t.detail.relativeToParent;if("ResizeObserver"in window&&!0===i.relativeToParent){var n=t.detail.element.parentNode,o=new ResizeObserver(function(){window.ResponsiveUtility.setSize(t.detail)});n.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(n=n.host),o.observe(n)}e.push("targets",t.detail),window.ResponsiveUtility.setSize(t.detail)}),window.addEventListener("delete-responsive-element",function(t){for(var i=0;i<this.targets.length;i++)t.detail===target[i]&&e.splice("targets",i,1)})},_onIronResize:function(){for(var e=0;e<this.targets.length;e++)window.ResponsiveUtility.setSize(this.targets[e])}});window.ResponsiveUtility.requestAvailability=function(){null==window.ResponsiveUtility.instance&&(window.ResponsiveUtility.instance=document.createElement("responsive-utility")),document.body.appendChild(window.ResponsiveUtility.instance)},window.ResponsiveUtility.setSize=function(e){var t=e.element,i=void 0!==e.attribute&&null!==e.attribute?e.attribute:"responsive-size",n=window.ResponsiveUtility.getSize(e);void 0!==t.getAttribute(i)&&n===t.getAttribute(i)||t.setAttribute(i,n)},window.ResponsiveUtility.getSize=function(e){var t=void 0===e.relativeToParent||null===e.relativeToParent||e.relativeToParent,i=function(e,t,i){return e<(null!=t?t:i)},n=null!==e.element.parentNode&&!0===t?e.element.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.element.parentNode.host.offsetWidth:e.element.parentNode.offsetWidth:window.outerWidth;return i(n,e.sm,600)?"xs":i(n,e.md,900)?"sm":i(n,e.lg,1200)?"md":i(n,e.xl,1200)?"lg":"xl"},e.ResponsiveUtility=r,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=responsive-utility.umd.js.map
