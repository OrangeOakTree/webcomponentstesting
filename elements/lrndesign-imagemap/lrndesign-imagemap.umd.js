!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-legacy.js"),require("@polymer/polymer/lib/legacy/polymer.dom.js"),require("@polymer/iron-ajax/iron-ajax.js"),require("@polymer/iron-a11y-keys/iron-a11y-keys.js"),require("@lrnwebcomponents/simple-modal/simple-modal.js"),require("@lrnwebcomponents/relative-heading/relative-heading.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@polymer/polymer/lib/legacy/polymer.dom.js","@polymer/iron-ajax/iron-ajax.js","@polymer/iron-a11y-keys/iron-a11y-keys.js","@lrnwebcomponents/simple-modal/simple-modal.js","@lrnwebcomponents/relative-heading/relative-heading.js"],t):t(e.LrndesignImagemap={},e.polymerLegacy_js,e.polymer_dom_js)}("undefined"!=typeof self?self:this,function(e,t,n){"use strict";function o(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function i(){var e=o(['\n    <style>\n      :host {\n        display: none;\n      }\n      :host #desc {\n        margin: 0 0 15px;\n      }\n      @media print {\n        :host {\n          display: block;\n        }\n      }\n    </style>\n    <relative-heading hidden$="[[!label]]" id="heading" text$="[[label]]">\n    </relative-heading>\n    <div id="desc"><slot></slot></div>\n  '],['\n    <style>\n      :host {\n        display: none;\n      }\n      :host #desc {\n        margin: 0 0 15px;\n      }\n      @media print {\n        :host {\n          display: block;\n        }\n      }\n    </style>\n    <relative-heading hidden\\$="[[!label]]" id="heading" text\\$="[[label]]">\n    </relative-heading>\n    <div id="desc"><slot></slot></div>\n  ']);return i=function(){return e},e}function l(){var e=o(['\n    <style>\n      :host {\n        display: block;\n      }\n      :host #buttons {\n        position: absolute;\n        left: -999999px;\n        top: 0;\n        overflow: hidden;\n        opacity: 0;\n      }\n      /*::slotted([hotspot]) {\n        display: none;\n      }*/\n      @media print {\n        :host > #svg {\n          display: none;\n        }\n        /*::slotted(#screen-only) {\n          display: none;\n        }\n        ::slotted([hotspot]) {\n          display: block;\n        }*/\n      }\n    </style>\n    <relative-heading\n      hidden$="[[!label]]"\n      id="heading"\n      subtopic-of$="[[subtopicOf]]"\n      tag$="[[tag]]"\n      text$="[[label]]"\n    >\n    </relative-heading>\n    <div id="desc"><slot name="desc"></slot></div>\n    <div id="svg"></div>\n    <div id="buttons"></div>\n    <slot></slot>\n    <iron-ajax\n      auto=""\n      id="get_svg"\n      url="[[src]]"\n      handle-as="text"\n      on-response="_getSVGHandler"\n    ></iron-ajax>\n  '],['\n    <style>\n      :host {\n        display: block;\n      }\n      :host #buttons {\n        position: absolute;\n        left: -999999px;\n        top: 0;\n        overflow: hidden;\n        opacity: 0;\n      }\n      /*::slotted([hotspot]) {\n        display: none;\n      }*/\n      @media print {\n        :host > #svg {\n          display: none;\n        }\n        /*::slotted(#screen-only) {\n          display: none;\n        }\n        ::slotted([hotspot]) {\n          display: block;\n        }*/\n      }\n    </style>\n    <relative-heading\n      hidden\\$="[[!label]]"\n      id="heading"\n      subtopic-of\\$="[[subtopicOf]]"\n      tag\\$="[[tag]]"\n      text\\$="[[label]]"\n    >\n    </relative-heading>\n    <div id="desc"><slot name="desc"></slot></div>\n    <div id="svg"></div>\n    <div id="buttons"></div>\n    <slot></slot>\n    <iron-ajax\n      auto=""\n      id="get_svg"\n      url="[[src]]"\n      handle-as="text"\n      on-response="_getSVGHandler"\n    ></iron-ajax>\n  ']);return l=function(){return e},e}t.Polymer({_template:t.html(i()),is:"lrndesign-imagemap-hotspot",properties:{label:{type:String,value:null},hotspotId:{type:String,value:null}},setParentHeading:function(e){this.$.heading._setParent(e)}});var s=t.Polymer({_template:t.html(l()),is:"lrndesign-imagemap",properties:{label:{type:String,value:null},src:{type:String,value:null},hotspotDetails:{type:Array,value:[]},subtopicOf:{type:String,value:null,reflectToAttribute:!0},tag:{type:String,value:null,reflectToAttribute:!0}},attached:function(){var e=this;window.simpleModal.requestAvailability(),window.addEventListener("simple-modal-closed",function(t){t.detail.invokedBy===e&&e.closeHotspot()})},detached:function(){var e=this;window.removeEventListener("simple-modal-closed",function(t){t.detail.invokedBy===e&&e.closeHotspot()})},_getSVGHandler:function(e){var t=this,o=this,i=document.createElement("div"),l=function(e,t){return null===e.getAttribute("id")&&e.setAttribute("id",t),e.getAttribute("id")},s=function(e,t,n){var i=function(i){var s="title"===i?"label":i,a=(e=null!==e?e:o).querySelector("#"+s),r=t.querySelector(i);return null===r&&(r=document.createElement(i),t.prepend(r)),null!==e.getAttribute(s)?r.innerHTML=e.getAttribute(s):null!==a&&""!==a.innerHTML&&(r.innerHTML=a.innerHTML),l(r,n+"-"+s)};t.setAttribute("aria-labelledby",i("desc")+" "+i("label"))};i.innerHTML=e.detail.response;var a=i.querySelector("svg"),r=l(a,"svg-"+Date.now()),d=n.dom(o).querySelectorAll("lrndesign-imagemap-hotspot");s(o,a,r),this.$.svg.appendChild(a);for(var p=function(e){var n=d[e].getAttribute("hotspot-id"),i=a.querySelector("#"+n),l=a.cloneNode(!0);s(d[e],l,n),d[e].appendChild(l),d[e].querySelector("#"+n).classList.add("selected"),d[e].setParentHeading(o.$.heading);for(var r=0;r<d.length;r++)d[e].querySelector("#"+d[r].getAttribute("hotspot-id")).classList.add("hotspot");var p=document.createElement("button");p.setAttribute("tabindex",0),p.setAttribute("aria-label",d[e].label),o.$.buttons.appendChild(p),p.addEventListener("focus",function(){console.log("focus",e,i),i.classList.add("focus")}),p.addEventListener("blur",function(){i.classList.remove("focus")}),i.classList.add("hotspot"),i.addEventListener("click",function(n){t.openHotspot(i,d[e])}),p.addEventListener("keyup",function(n){13!==n.keyCode&&32!==n.keyCode||i.classList.contains("selected")||t.openHotspot(i,d[e])})},c=0;c<d.length;c++)p(c)},openHotspot:function(e,t){var n=t.$.desc.querySelector("slot").assignedNodes({flatten:!0}),o=document.createElement("div");for(var i in n)o.appendChild(n[i].cloneNode(!0));var l=new CustomEvent("simple-modal-show",{bubbles:!0,cancelable:!0,detail:{title:t.getAttribute("label"),elements:{content:o},invokedBy:this,clone:!1}});this.dispatchEvent(l),this.__activeHotspot=e,this.resetHotspots(),e.classList.add("selected")},closeHotspot:function(){this.resetHotspots(),this.__activeHotspot.focus()},resetHotspots:function(){for(var e=this.querySelectorAll('.hotspot[role="button"]'),t=0;t<e.length;t++)e[t].classList.remove("selected")}});e.LrndesignImagemap=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=lrndesign-imagemap.umd.js.map
