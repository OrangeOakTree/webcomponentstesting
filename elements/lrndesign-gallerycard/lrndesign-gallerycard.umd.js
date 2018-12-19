!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@polymer/polymer/polymer-legacy.js"),require("@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js"),require("@lrnwebcomponents/materializecss-styles/materializecss-styles.js"),require("@polymer/iron-image/iron-image.js"),require("@polymer/paper-card/paper-card.js"),require("@polymer/iron-icon/iron-icon.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js","@lrnwebcomponents/materializecss-styles/materializecss-styles.js","@polymer/iron-image/iron-image.js","@polymer/paper-card/paper-card.js","@polymer/iron-icon/iron-icon.js"],e):e(n.LrndesignGallerycard={},n.polymerLegacy_js)}("undefined"!=typeof self?self:this,function(n,e){"use strict";function i(){var n,e,t=(n=['\n    <style include="materializecss-styles"></style>\n    <style>\n      :host {\n        display: inline-flex;\n      }\n      :host([size="micro"]) {\n        transform: scale(0.5);\n      }\n      :host([size="small"]) {\n        transform: scale(0.8);\n      }\n\n      paper-card {\n        border-radius: 4px;\n        margin: 0;\n        width: 100%;\n      }\n\n      .card-actions {\n        background-color: #f5f5f5;\n        border-radius: 0 0 4px 4px;\n        padding: 0 8px;\n      }\n      .card-actions .card-action-details {\n        display: inline-block;\n        vertical-align: middle;\n        vertical-align: -webkit-baseline-middle;\n        width: 80%;\n      }\n      #avatar {\n        display: inline-block;\n        vertical-align: text-top;\n        transform: scale(0.8);\n      }\n\n      .card-control-height {\n        height: 240px;\n      }\n\n      [elevation="0"] {\n        border: solid 1px #eeeeee;\n      }\n\n      .text-right {\n        text-align: right;\n      }\n\n      .text-left {\n        text-align: left;\n      }\n\n      .title {\n        color: #222;\n        font-size: 12.8px;\n        font-weight: 600;\n        line-height: 20px;\n        padding: 0 12px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        margin-top: 8px;\n      }\n\n      .comments {\n        font-size: 12px;\n        float: right;\n      }\n\n      .divider {\n        height: 1px;\n        width: 100%;\n        background: #efefef;\n      }\n\n      .project-icon {\n        --iron-icon-height: 100%;\n        --iron-icon-width: 100%;\n        overflow: hidden;\n        color: grey;\n      }\n      .project-icon:hover,\n      .project-icon:focus {\n        color: black;\n      }\n\n      .center {\n        margin: auto;\n        width: 80%;\n        padding: 16px;\n      }\n\n      .link {\n        font-size: 16px;\n        line-height: 16px;\n      }\n\n      .submission-info {\n        width: 100%;\n      }\n      .submission-preview {\n        height: 160px;\n      }\n\n      .card-content {\n        padding: 0;\n        margin: 0;\n        overflow: hidden;\n      }\n\n      .inline {\n        display: inline;\n      }\n    </style>\n    <paper-card elevation="[[elevation]]">\n      <div class="card-content card-control-height card-control-center">\n        <div class="submission-preview">\n          <iron-icon\n            class="project-icon"\n            icon="[[icon]]"\n            hidden$="[[!icon]]"\n          ></iron-icon>\n          <iron-image\n            style="width:100%; height:100%; background-color: lightgray;"\n            sizing="cover"\n            preload=""\n            fade=""\n            src="[[image]]"\n            hidden$="[[!image]]"\n          ></iron-image>\n        </div>\n        <div class="submission-info">\n          <div class="divider"></div>\n          <div class="title">[[title]]</div>\n        </div>\n      </div>\n      <div class="card-actions">\n        <lrndesign-avatar\n          id="avatar"\n          label="[[author.name]]"\n          src="[[author.avatar]]"\n        ></lrndesign-avatar>\n        <div class="card-action-details">\n          <span class="text-left author">[[author.display_name]]</span>\n          <span class="comments text-right">Comments: [[comments]]</span>\n        </div>\n      </div>\n    </paper-card>\n  '],(e=['\n    <style include="materializecss-styles"></style>\n    <style>\n      :host {\n        display: inline-flex;\n      }\n      :host([size="micro"]) {\n        transform: scale(0.5);\n      }\n      :host([size="small"]) {\n        transform: scale(0.8);\n      }\n\n      paper-card {\n        border-radius: 4px;\n        margin: 0;\n        width: 100%;\n      }\n\n      .card-actions {\n        background-color: #f5f5f5;\n        border-radius: 0 0 4px 4px;\n        padding: 0 8px;\n      }\n      .card-actions .card-action-details {\n        display: inline-block;\n        vertical-align: middle;\n        vertical-align: -webkit-baseline-middle;\n        width: 80%;\n      }\n      #avatar {\n        display: inline-block;\n        vertical-align: text-top;\n        transform: scale(0.8);\n      }\n\n      .card-control-height {\n        height: 240px;\n      }\n\n      [elevation="0"] {\n        border: solid 1px #eeeeee;\n      }\n\n      .text-right {\n        text-align: right;\n      }\n\n      .text-left {\n        text-align: left;\n      }\n\n      .title {\n        color: #222;\n        font-size: 12.8px;\n        font-weight: 600;\n        line-height: 20px;\n        padding: 0 12px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        margin-top: 8px;\n      }\n\n      .comments {\n        font-size: 12px;\n        float: right;\n      }\n\n      .divider {\n        height: 1px;\n        width: 100%;\n        background: #efefef;\n      }\n\n      .project-icon {\n        --iron-icon-height: 100%;\n        --iron-icon-width: 100%;\n        overflow: hidden;\n        color: grey;\n      }\n      .project-icon:hover,\n      .project-icon:focus {\n        color: black;\n      }\n\n      .center {\n        margin: auto;\n        width: 80%;\n        padding: 16px;\n      }\n\n      .link {\n        font-size: 16px;\n        line-height: 16px;\n      }\n\n      .submission-info {\n        width: 100%;\n      }\n      .submission-preview {\n        height: 160px;\n      }\n\n      .card-content {\n        padding: 0;\n        margin: 0;\n        overflow: hidden;\n      }\n\n      .inline {\n        display: inline;\n      }\n    </style>\n    <paper-card elevation="[[elevation]]">\n      <div class="card-content card-control-height card-control-center">\n        <div class="submission-preview">\n          <iron-icon\n            class="project-icon"\n            icon="[[icon]]"\n            hidden\\$="[[!icon]]"\n          ></iron-icon>\n          <iron-image\n            style="width:100%; height:100%; background-color: lightgray;"\n            sizing="cover"\n            preload=""\n            fade=""\n            src="[[image]]"\n            hidden\\$="[[!image]]"\n          ></iron-image>\n        </div>\n        <div class="submission-info">\n          <div class="divider"></div>\n          <div class="title">[[title]]</div>\n        </div>\n      </div>\n      <div class="card-actions">\n        <lrndesign-avatar\n          id="avatar"\n          label="[[author.name]]"\n          src="[[author.avatar]]"\n        ></lrndesign-avatar>\n        <div class="card-action-details">\n          <span class="text-left author">[[author.display_name]]</span>\n          <span class="comments text-right">Comments: [[comments]]</span>\n        </div>\n      </div>\n    </paper-card>\n  '])||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return i=function(){return t},t}var t=e.Polymer({_template:e.html(i()),is:"lrndesign-gallerycard",listeners:{mouseenter:"_mouseEnter",mouseleave:"_mouseLeave"},properties:{size:{type:String,notify:!0,reflectToAttribute:!0},image:{type:String,notify:!0,reflectToAttribute:!0},icon:{type:String,notify:!0,reflectToAttribute:!0},title:{type:String,value:"Project",notify:!0},author:{type:Object,value:{name:"author",display_name:"Author"},notify:!0},elevation:{type:Number,value:1,reflectToAttribute:!0,notify:!0},comments:{type:Number,value:0,reflectToAttribute:!0,notify:!0}},_mouseEnter:function(n){this.elevation+=2},_mouseLeave:function(n){this.elevation-=2}});n.LrndesignGallerycard=t,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=lrndesign-gallerycard.umd.js.map
