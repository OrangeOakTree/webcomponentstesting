!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@polymer/polymer/polymer-legacy.js"),require("@lrnwebcomponents/hax-body/lib/hax-store.js"),require("@lrnwebcomponents/hax-body/hax-body.js"),require("@lrnwebcomponents/hax-body/lib/hax-autoloader.js"),require("@lrnwebcomponents/hax-body/lib/hax-manager.js"),require("@lrnwebcomponents/hax-body/lib/hax-panel.js"),require("@lrnwebcomponents/hax-body/lib/hax-app-picker.js"),require("@lrnwebcomponents/hax-body/lib/hax-export-dialog.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@lrnwebcomponents/hax-body/lib/hax-store.js","@lrnwebcomponents/hax-body/hax-body.js","@lrnwebcomponents/hax-body/lib/hax-autoloader.js","@lrnwebcomponents/hax-body/lib/hax-manager.js","@lrnwebcomponents/hax-body/lib/hax-panel.js","@lrnwebcomponents/hax-body/lib/hax-app-picker.js","@lrnwebcomponents/hax-body/lib/hax-export-dialog.js"],n):n(e.AppEditorHax={},e.polymerLegacy_js)}("undefined"!=typeof self?self:this,function(e,n){"use strict";function o(){var e,n,a=(e=['\n    <style>\n      :host {\n        display: block;\n        font-size: 16px;\n        box-sizing: content-box;\n      }\n    </style>\n    <hax-store\n      skip-exit-trap=""\n      hidden=""\n      app-store="[[appStoreConnection]]"\n    ></hax-store>\n    <hax-autoloader hidden=""></hax-autoloader>\n    <hax-panel\n      id="panel"\n      hide-panel-ops=""\n      hide-export-button=""\n      hide-preferences-button$="[[hidePreferencesButton]]"\n      align="right"\n    ></hax-panel>\n    <hax-body id="body"></hax-body>\n    <hax-manager></hax-manager>\n    <hax-export-dialog></hax-export-dialog>\n    <hax-app-picker></hax-app-picker>\n  '],(n=['\n    <style>\n      :host {\n        display: block;\n        font-size: 16px;\n        box-sizing: content-box;\n      }\n    </style>\n    <hax-store\n      skip-exit-trap=""\n      hidden=""\n      app-store="[[appStoreConnection]]"\n    ></hax-store>\n    <hax-autoloader hidden=""></hax-autoloader>\n    <hax-panel\n      id="panel"\n      hide-panel-ops=""\n      hide-export-button=""\n      hide-preferences-button\\$="[[hidePreferencesButton]]"\n      align="right"\n    ></hax-panel>\n    <hax-body id="body"></hax-body>\n    <hax-manager></hax-manager>\n    <hax-export-dialog></hax-export-dialog>\n    <hax-app-picker></hax-app-picker>\n  '])||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return o=function(){return a},a}var a=n.Polymer({_template:n.html(o()),is:"app-editor-hax",properties:{appStoreConnection:{type:Object},hidePreferencesButton:{value:!1,type:Boolean}},save:function(){var e=window.HaxStore.instance.activeHaxBody.haxToContent();this.fire("app-editor-hax-save",e)},import:function(e){window.HaxStore.instance.activeHaxBody.importContent(e),this.fire("app-editor-hax-import",!0)}});e.AppEditorHax=a,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=app-editor-hax.umd.js.map
