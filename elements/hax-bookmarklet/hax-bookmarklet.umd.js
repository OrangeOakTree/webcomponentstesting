!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("@polymer/polymer/polymer-legacy.js"),require("@lrnwebcomponents/cms-hax/cms-hax.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@lrnwebcomponents/cms-hax/cms-hax.js"],o):o(e.HaxBookmarklet={},e.polymerLegacy_js)}("undefined"!=typeof self?self:this,function(e,o){"use strict";function n(){var e,o,t=(e=['\n    <style>\n      :host {\n        display: block;\n        font-size: 16px;\n      }\n    </style>\n    <cms-hax\n      open-default\n      app-store-connection="[[appStoreConnection]]"\n      body-offset-left\n    >\n      <slot></slot>\n    </cms-hax>\n  '],o||(o=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(o)}})));return n=function(){return t},t}var t=o.Polymer({_template:o.html(n()),is:"hax-bookmarklet",properties:{appStoreConnection:{type:Object,value:{url:"appstore.json"}}}});e.HaxBookmarklet=t,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=hax-bookmarklet.umd.js.map
