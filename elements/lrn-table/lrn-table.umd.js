!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-legacy.js"),require("@lrnwebcomponents/csv-render/csv-render.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@lrnwebcomponents/csv-render/csv-render.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js"],t):t(e.LrnTable={},e.polymerLegacy_js)}("undefined"!=typeof self?self:this,function(e,t){"use strict";function i(){var e,t,r=(e=['\n    <style>\n      :host {\n        display: block;\n      }\n      .hidden-title {\n        display: none;\n      }\n    </style>\n    <div typeof="oer:SupportingMaterial">\n      <div class="hidden-title" property="oer:name">[[title]]</div>\n      <div property="oer:description">\n        <slot></slot>\n        <csv-render\n          data-source="[[csvFile]]"\n          caption="[[title]]"\n          summary="[[description]]"\n        ></csv-render>\n      </div>\n    </div>\n  '],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return i=function(){return r},r}var r=t.Polymer({_template:t.html(i()),is:"lrn-table",behaviors:[HAXBehaviors.PropertiesBehaviors,SchemaBehaviors.Schema],properties:{title:{type:String},csvFile:{type:String},description:{type:String}},attached:function(){this.setHaxProperties({canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"CSV table",description:"This can generate a table from a CSV file no matter where it is located.",icon:"editor:border-all",color:"green",groups:["Presentation","Table","Data"],handles:[{type:"csv",source:"csvFile"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"csvFile",title:"Source",description:"The URL for this csv file.",inputMethod:"textfield",icon:"link",required:!0},{property:"title",title:"Title",description:"Title for the table to be generated.",inputMethod:"textfield",icon:"editor:title"},{property:"description",title:"Description",description:"More detailed description for improved accessibility of the table data.",inputMethod:"textfield",icon:"editor:short-text"}],configure:[{property:"csvFile",title:"Source",description:"The URL for this csv file.",inputMethod:"textfield",required:!0},{property:"title",title:"Title",description:"Title for the table to be generated.",inputMethod:"textfield"},{property:"description",title:"Description",description:"More detailed description for improved accessibility of the table data.",inputMethod:"textfield"}],advanced:[]}})}});e.LrnTable=r,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=lrn-table.umd.js.map
