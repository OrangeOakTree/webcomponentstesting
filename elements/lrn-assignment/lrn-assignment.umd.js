!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@polymer/polymer/polymer-legacy.js"),require("@polymer/paper-card/paper-card.js"),require("@polymer/paper-button/paper-button.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@polymer/paper-card/paper-card.js","@polymer/paper-button/paper-button.js"],n):n(e.LrnAssignment={},e.polymerLegacy_js)}("undefined"!=typeof self?self:this,function(e,n){"use strict";function t(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function r(){var e=t(['\n    <style>\n      :host {\n        display: flex;\n        flex-wrap: wrap;\n      }\n      :host lrn-assignment {\n        margin: 16px;\n      }\n      :host([layout="wide"]) lrn-assignment {\n        width: calc(100% - 32px);\n      }\n      :host([layout="medium"]) lrn-assignment {\n        width: calc(50% - 32px);\n      }\n      :host([layout="tight"]) lrn-assignment {\n        width: calc(25% - 32px);\n      }\n    </style>\n    <template is="dom-repeat" items="[[assignments]]">\n      <lrn-assignment\n        title="[[item.title]]"\n        actions="[[item.actions]]"\n      ></lrn-assignment>\n    </template>\n\n    <template is="dom-if" if="[[url]]">\n      <iron-ajax\n        auto=""\n        url="[[url]]"\n        handle-as="json"\n        on-response="handleResponse"\n      ></iron-ajax>\n    </template>\n  ']);return r=function(){return e},e}function s(){var e=t(['\n    <style>\n      :host {\n        display: flex;\n        width: 100%;\n      }\n      paper-card {\n        width: 100%;\n      }\n    </style>\n    <paper-card\n      heading="[[title]]"\n      image="[[image]]"\n      elevation="1"\n      animated-shadow="false"\n    >\n      <div class="card-content">[[details]] <slot></slot></div>\n      <div class="card-actions">\n        <template is="dom-repeat" items="[[actions]]">\n          <a href$="[[item.url]]"\n            ><paper-button raised>[[item.label]]</paper-button></a\n          >\n        </template>\n      </div>\n    </paper-card>\n  ']);return s=function(){return e},e}var a=n.Polymer({_template:n.html(s()),is:"lrn-assignment",properties:{title:{type:String},image:{type:String},details:{type:String},url:{type:String},open:{type:Boolean,value:!1},complete:{type:Boolean,value:!1},actions:{type:Object}}}),i=n.Polymer({_template:n.html(r()),is:"lrn-assignments",properties:{assignments:{type:Object,reflectToAttribute:!0,observer:"assignmentsChanged"},layout:{type:String,reflectToAttribute:!0},url:{type:String}},assignmentsChanged:function(e){e.length<=1?this.layout="wide":e.length<=4?this.layout="medium":e.length<=6&&(this.layout="tight")},rowItemsChanged:function(e){},handleResponse:function(e){this.assignments=e.response}});e.LrnAssignment=a,e.LrnAssignments=i,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=lrn-assignment.umd.js.map
