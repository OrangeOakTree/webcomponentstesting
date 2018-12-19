!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@polymer/polymer/polymer-legacy.js"),require("@polymer/polymer/lib/utils/async.js"),require("@polymer/paper-input/paper-input.js"),require("@polymer/paper-dialog/paper-dialog.js"),require("@polymer/paper-icon-button/paper-icon-button.js"),require("@polymer/iron-list/iron-list.js"),require("@polymer/iron-a11y-keys/iron-a11y-keys.js"),require("@polymer/iron-icons/iron-icons.js"),require("@lrnwebcomponents/drawing-icons/drawing-icons.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@polymer/polymer/lib/utils/async.js","@polymer/paper-input/paper-input.js","@polymer/paper-dialog/paper-dialog.js","@polymer/paper-icon-button/paper-icon-button.js","@polymer/iron-list/iron-list.js","@polymer/iron-a11y-keys/iron-a11y-keys.js","@polymer/iron-icons/iron-icons.js","@lrnwebcomponents/drawing-icons/drawing-icons.js"],e):e(t.LrnsysOutline={},t.polymerLegacy_js,t.async)}("undefined"!=typeof self?self:this,function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function r(){var t=s(['\n    <style>\n      :host {\n        display: block;\n        --indent-multiplier: 36px;\n      }\n      :host(.collapse-to-remove) #wrapper {\n        height: 0px;\n        background-color: var(--lrnsys-outline-gap-color, #eeeeee);\n        border: 1px solid #999999;\n        overflow: hidden;\n      }\n      :host #wrapper[data-indent="0"] #gap {\n        margin-right: calc(var(--indent-multiplier) * 0);\n      }\n      :host #wrapper[data-indent="1"] #gap {\n        margin-right: calc(var(--indent-multiplier) * 1);\n      }\n      :host #wrapper[data-indent="2"] #gap {\n        margin-right: calc(var(--indent-multiplier) * 2);\n      }\n      :host #wrapper[data-indent="3"] #gap {\n        margin-right: calc(var(--indent-multiplier) * 3);\n      }\n      :host #wrapper[data-indent="4"] #gap {\n        margin-right: calc(var(--indent-multiplier) * 4);\n      }\n      :host #wrapper[data-indent="5"] #gap {\n        margin-right: calc(var(--indent-multiplier) * 5);\n      }\n      :host #wrapper[data-indent="6"] #gap {\n        margin-right: calc(var(--indent-multiplier) * 6);\n      }\n      :host #wrapper[data-indent="7"] #gap {\n        margin-right: calc(var(--indent-multiplier) * 7);\n      }\n      :host #wrapper[data-indent="8"] #gap {\n        margin-right: calc(var(--indent-multiplier) * 8);\n      }\n      :host #wrapper[data-indent="9"] #gap {\n        margin-right: calc(var(--indent-multiplier) * 9);\n      }\n      :host #input {\n        flex-grow: 1;\n        margin-right: 10px;\n      }\n      :host #wrapper {\n        display: flex;\n        height: 40px;\n        border-radius: 16px;\n        transition: 0.1s all ease;\n        background-color: transparent;\n        border: 1px solid transparent;\n        padding: 8px;\n        transition: 0.3s all linear;\n      }\n      :host([focus-state]) #wrapper,\n      :host(:focus) #wrapper,\n      :host(:hover) #wrapper {\n        cursor: pointer;\n        background-color: var(--lrnsys-outline-gap-color, #eeeeee);\n        border: 1px solid #999999;\n      }\n      #gap {\n        padding: 2px;\n        transition: 0.3s all ease;\n        border-left: solid 4px transparent;\n      }\n      :host([focus-state]) #gap,\n      :host(:focus) #gap,\n      :host(:hover) #gap {\n        border-left: solid 4px var(--lrnsys-outline-gap-color, #aaaaaa);\n      }\n      paper-icon-button {\n        font-size: 16px;\n        height: 36px;\n        padding: 10px;\n        margin: 4px;\n        display: none;\n        border-radius: 0.16px;\n      }\n      :host([focus-state]) paper-icon-button,\n      :host(:focus) paper-icon-button,\n      :host(:hover) paper-icon-button {\n        width: 36px;\n        display: inline-flex;\n      }\n      paper-icon-button#add {\n        width: 36px;\n        margin-right: 2px;\n        color: white;\n        background-color: var(--lrnsys-outline-add-button-color, #018dff);\n      }\n      paper-icon-button#delete {\n        color: white;\n        background-color: var(--lrnsys-outline-delete-button-color, #cc0000);\n      }\n    </style>\n    <div id="wrapper" data-indent$="[[indentLevel]]">\n      <div id="gap"></div>\n      <paper-input\n        id="input"\n        label="Enter a page title"\n        value="{{title}}"\n        no-label-float=""\n      >\n      </paper-input>\n      <paper-icon-button\n        id="down"\n        title="Move downwards"\n        icon="icons:arrow-downward"\n        on-tap="moveDown"\n      ></paper-icon-button>\n      <paper-icon-button\n        id="left"\n        title="Outdent"\n        icon="icons:arrow-back"\n        on-tap="moveOut"\n      ></paper-icon-button>\n      <paper-icon-button\n        id="right"\n        title="Indent"\n        icon="icons:arrow-forward"\n        on-tap="moveIn"\n      ></paper-icon-button>\n      <paper-icon-button\n        id="up"\n        title="Move upwards"\n        icon="icons:arrow-upward"\n        on-tap="moveUp"\n      ></paper-icon-button>\n      <paper-icon-button\n        id="add"\n        title="Add Item"\n        icon="icons:add"\n        on-tap="add"\n      ></paper-icon-button>\n      <paper-icon-button\n        id="delete"\n        title="Delete"\n        icon="icons:delete"\n        on-tap="delete"\n      ></paper-icon-button>\n    </div>\n    <iron-a11y-keys\n      target="[[__inputTarget]]"\n      keys="esc"\n      on-keys-pressed="_onEsc"\n    ></iron-a11y-keys>\n    <iron-a11y-keys\n      target="[[__inputTarget]]"\n      keys="enter"\n      on-keys-pressed="_onEnter"\n    ></iron-a11y-keys>\n    <iron-a11y-keys\n      target="[[__inputTarget]]"\n      keys="backspace"\n      on-keys-pressed="_onBackspace"\n    ></iron-a11y-keys>\n    <iron-a11y-keys\n      target="[[__inputTarget]]"\n      keys="up"\n      on-keys-pressed="_onArrowUp"\n    ></iron-a11y-keys>\n    <iron-a11y-keys\n      target="[[__inputTarget]]"\n      keys="down"\n      on-keys-pressed="_onArrowDown"\n    ></iron-a11y-keys>\n    <iron-a11y-keys\n      target="[[__inputTarget]]"\n      keys="tab"\n      on-keys-pressed="_onTab"\n    ></iron-a11y-keys>\n    <iron-a11y-keys\n      target="[[__inputTarget]]"\n      keys="shift+tab"\n      on-keys-pressed="_onShiftTab"\n    ></iron-a11y-keys>\n    <iron-a11y-keys\n      target="[[__inputTarget]]"\n      keys="shift+up"\n      on-keys-pressed="_onShiftArrowUp"\n    ></iron-a11y-keys>\n    <iron-a11y-keys\n      target="[[__inputTarget]]"\n      keys="shift+down"\n      on-keys-pressed="_onShiftArrowDown"\n    ></iron-a11y-keys>\n  ']);return r=function(){return t},t}var a,l;function d(){var t=s(['\n    <style>\n      :host {\n        display: block;\n      }\n      :host kbd {\n        display: inline-block;\n        background: #333;\n        color: white;\n        border-radius: 4px;\n        margin: 4px 4px 4px 0;\n        padding: 8px;\n        font-family: Verdana, Geneva, Tahoma, sans-serif;\n        font-size: 85%;\n      }\n    </style>\n    <paper-icon-button\n      title="Keyboard directions"\n      id="dialogtrigger"\n      icon="icons:help"\n      on-tap="openDirections"\n    ></paper-icon-button>\n    <paper-dialog id="modal" with-backdrop="">\n      <h2>Keyboard shortcuts</h2>\n      <div>\n        <paper-icon-button\n          title="close directions"\n          style="position: absolute;top: 0; right:0;"\n          icon="icons:cancel"\n          on-tap="closeDirections"\n        ></paper-icon-button>\n        <ul>\n          <li><kbd>Enter</kbd> to <strong>add</strong> an item</li>\n          <li>\n            <kbd>Backspace</kbd> <em>with entire item selected</em> to\n            <strong>delete</strong> an item.\n          </li>\n          <li>\n            <kbd>↑</kbd> / <kbd>↓</kbd> / <kbd>←</kbd> / <kbd>→</kbd> to\n            <strong>navigate</strong> through items\n          </li>\n          <li>\n            <kbd>Tab</kbd> / <kbd>Shift+Tab</kbd>\n            <em>at the beginning of a line</em> to\n            <strong>indent/outdent</strong>\n          </li>\n          <li><kbd>Shift+↑</kbd> / <kbd>Shift+↓</kbd> to items up/down</li>\n        </ul>\n      </div>\n    </paper-dialog>\n    <div id="itemslist">\n      <template is="dom-repeat" items="{{items}}" as="item">\n        <lrnsys-outline-item\n          disable-down="[[item.disableDown]]"\n          disable-left="[[item.disableLeft]]"\n          disable-right="[[item.disableRight]]"\n          disable-up="[[item.disableUp]]"\n          id$="[[item.id]]"\n          index$="[[item.index]]"\n          indent-level="{{item.indent}}"\n          parent="{{item.parent}}"\n          title="{{item.title}}"\n        >\n        </lrnsys-outline-item>\n      </template>\n    </div>\n  ']);return d=function(){return t},t}e.Polymer({_template:e.html(r()),is:"lrnsys-outline-item",listeners:{change:"_onChange"},properties:{indentLevel:{type:Number,value:0},index:{type:Number,value:0},parent:{type:String,value:null},title:{type:String,value:null,notify:!0,reflectToAttribute:!0},focusState:{type:Boolean,value:!1,reflectToAttribute:!0}},_focusin:function(t){this.focusState=!0},_focusout:function(t){this.focusState=!1},attached:function(){this.fire("attached-item",{item:this})},ready:function(){var t=this;this.__inputTarget=this.$.input,this.fire("focus-item",this),this.addEventListener("focus",function(e){t.fire("focus-item",t)}),this.addEventListener("mouseover",function(e){t.fire("focus-item",t)}),this.addEventListener("blur",function(e){t.fire("blur-item",t)}),this.addEventListener("mouseout",function(e){t.fire("blur-item",t)}),this.$.input.addEventListener("focused-changed",this._focusin.bind(this)),this.addEventListener("focusin",this._focusin.bind(this)),this.addEventListener("focusout",this._focusout.bind(this))},detached:function(){var t=this;this.removeEventListener("focus",function(e){t.fire("focus-item",t)}),this.removeEventListener("mouseover",function(e){t.fire("focus-item",t)}),this.removeEventListener("blur",function(e){t.fire("blur-item",t)}),this.removeEventListener("mouseout",function(e){t.fire("blur-item",t)}),this.$.input.removeEventListener("focused-changed",this._focusin.bind(this)),this.removeEventListener("focusin",this._focusin.bind(this)),this.removeEventListener("focusout",this._focusout.bind(this))},focus:function(){return this.$.input.focus(),this},value:function(){return this.title=this.$.input.value,this.title},delete:function(){this.fire("delete-item",{item:this})},setIndent:function(t){this.fire("indent-item",{item:this,increase:t>0})},add:function(){var t=this.$.input.shadowRoot.querySelector("#"+this.$.input._inputId).inputElement.selectionStart,e=this.title;this.fire("add-item",{item:this,value:e.slice(0,t),new:e.slice(t,e.length)}),this.title=e.slice(0,t)},move:function(t){this.fire("move-item",{item:this,moveUp:t<0})},moveUp:function(t){this.move(-1)},moveDown:function(t){this.move(1)},moveOut:function(t){this.setIndent(-1)},moveIn:function(t){this.setIndent(1)},setSelection:function(t,e){var n=void 0!==t?t:0,i=void 0!==e?e:n;try{this.$.input.querySelector("input").setSelectionRange(n,i)}catch(t){console.log(t)}this.focus()},_onChange:function(){this.fire("change-item",{item:this,value:this.title})},_onEsc:function(){this.focus(),this._focusout()},_onEnter:function(){var t=this.$.input.shadowRoot.querySelector("#"+this.$.input._inputId).inputElement.selectionStart,e=this.title;this.fire("add-item",{item:this,value:e.slice(0,t),new:e.slice(t,e.length)}),this.title=e.slice(0,t),this._focusout()},_onBackspace:function(t){window.getSelection().toString()==this.title?(t.detail.keyboardEvent.preventDefault(),this.fire("delete-item",{item:this})):0==this.$.input.shadowRoot.querySelector("#"+this.$.input._inputId).inputElement.selectionStart&&this.fire("indent-item",{item:this,increase:!1})},_onArrowUp:function(){0==this.$.input.shadowRoot.querySelector("#"+this.$.input._inputId).inputElement.selectionStart&&this.fire("focus-item",{item:this,moveUp:!0})},_onArrowDown:function(){this.$.input.shadowRoot.querySelector("#"+this.$.input._inputId).inputElement.selectionStart==this.title.length&&this.fire("focus-item",{item:this,moveUp:!1})},_onShiftTab:function(){this.setIndent(-1)},_onTab:function(t){0==this.$.input.shadowRoot.querySelector("#"+this.$.input._inputId).inputElement.selectionStart&&(t.preventDefault(),this.setIndent(1))},_onShiftArrowUp:function(){this.move(-1)},_onShiftArrowDown:function(){this.move(1)}});var u=e.Polymer((l={_template:e.html(d()),is:"lrnsys-outline",listeners:(a={"delete-item":"_handleRemoveItem","indent-item":"_handleIndentItem","focus-item":"_handleFocusItem","add-item":"_handleAddItem","move-item":"_handleMoveItem","change-item":"_handleChangeItem"},o(a,"focus-item","_handleFocusItem"),o(a,"blur-item","_handleBlurItem"),a),properties:{data:{type:Array,value:null},items:{type:Array,value:null,notify:!0},activeItem:{type:Object,notify:!0}},openDirections:function(t){this.$.modal.opened=!0},closeDirections:function(t){var e=this;this.$.modal.opened=!1,n.microTask.run(function(){setTimeout(function(){e.$.dialogtrigger.focus()},50)})},attached:function(){this.__modal=this.$.modal,document.body.addEventListener("iron-overlay-canceled",this._accessibleFocus.bind(this)),document.body.appendChild(this.$.modal)},_accessibleFocus:function(t){var e=this;t.detail===this.__modal&&n.microTask.run(function(){setTimeout(function(){e.$.dialogtrigger.focus()},50)})},ready:function(){(null===this.data||this.data.length<1)&&(this.__tempid=void 0===this.__tempid?0:this.__tempid+1,this.data=[{id:"outline-item-"+this.__tempid,title:"",order:0,parent:null}]),this.setData(this.data)},setData:function(t){if(void 0!==t&&t.length>0){var e=-1;for(var n in t){var i=parseInt(this._getIndent(t,n));this.__tempid=void 0===this.__tempid?0:this.__tempid+1,t[n].index=parseInt(n),t[n].indent=i,t[n].prevSibling=this._getSibling(parseInt(n),i,!0),t[n].nextSibling=this._getSibling(parseInt(n),i,!1),t[n].disableUp=null===t[n].prevSibling,t[n].disableDown=null===t[n].nextSibling,t[n].disableLeft=0===i,t[n].disableRight=i>e,t[n].id=void 0===t[n].id?"outline-item-"+this.__tempid:t[n].id,e=i}}this.set("items",[]),this.set("items",t)},getData:function(){for(var t in this.items)this.items[t].order=this._getOrder(this.items[t]),this.notifyPath("items.".concat(t,".order"));return this.items},addItem:function(t){var e=this,i=t.item,o=t.new,s=this.items.findIndex(function(t){return t.id===i.id})+1;this.__tempid=this.__tempid+1,this.splice("items",s,0,{id:"outline-item-"+this.__tempid,title:o,indent:i.indent,parent:i.parent}),this.items[s].indentLevel=i.indent,this.notifyPath("items.".concat(s,".indentLevel")),this.setData(this.items),void 0!==this.__focusedItem&&null!==this.__focusedItem&&n.microTask.run(function(){setTimeout(function(){e.__focusedItem=i.nextElementSibling,e.__focusedItem.focus()},50)})},removeItem:function(t){var e=this.items.findIndex(function(e){return e.id===t.id}),n=document.createElement("paper-button");n.raised=!0,n.addEventListener("click",this._deleteItemConfirm().bind(this)),n.appendChild(document.createTextNode("Yes, delete"));var i=new CustomEvent("simple-modal-show",{bubbles:!0,cancelable:!0,detail:{title:"Do you really want to delete ".concat(this.items[e].title,"?"),elements:{buttons:n},invokedBy:t.$.delete,clone:!1}});this.dispatchEvent(i)},_deleteItemConfirm:function(t){var e=this,i=this.items.findIndex(function(t){return t.id===item.id});this.activeItem.classList.add("collapse-to-remove"),setTimeout(function(){for(var t in e.__focusedItem=e.activeItem.previousElementSibling,e.items)e.items[t].parent==e.items[i].id&&(e.items[t].parent=e.items[i].parent);e.activeItem.classList.remove("collapse-to-remove"),e.splice("items",i,1),void 0!==e.__focusedItem&&null!==e.__focusedItem&&n.microTask.run(function(){setTimeout(function(){e.__focusedItem.focus()},50)})},300)},moveItem:function(t,e){var i=this,o=t.index,s=this._getLastChild(t),r=s-o+1,a=e?this.items[o].prevSibling:this._getLastChild(this.items[s+1])-r+1;if(a>-1&&a<this.items.length&&(e&&!t.disableUp||!e&&!t.disableDown)){var l=this.splice("items",o,r);this.splice("items",a,0,l),this.__focusedItem=this.$.itemslist.querySelectorAll("lrnsys-outline-item")[a],this.setData(this.items),void 0!==this.__focusedItem&&null!==this.__focusedItem&&n.microTask.run(function(){setTimeout(function(){i.__focusedItem.focus()},50)})}},_adjustIndent:function(t,e){if(e>0&&!t.disableRight||e<0&&!t.disableLeft){var n=parseInt(t.index),o=t.indent,s=t.indent+e,r=n+1,a=null!==t.prevSibling&&"undefined"!==i(t.prevSibling)?t.prevSibling.id:null,l=this._getItemById(t.parent)&&this._getItemById(t.parent).parent?this._getItemById(t.parent).parent.id:null;for(t.indent=s,t.parent=e>0?a:l,t.prevSibling=this._getSibling(n,s,!0),t.nextSibling=this._getSibling(n,s,!1),t.disableUp=null===t.prevSibling,t.disableDown=null===t.nextSibling,t.disableLeft=0===s,t.disableRight=null===this.items[n-1]||"undefined"===i(this.items[n-1])||s>this.items[n-1].indentLevel;null!==this.items[r]&&void 0!==this.items[r]&&o<this.items[r].indentLevel;)this.items[r].indentLevel=this.items[r].indentLevel+e,this.notifyPath("items.".concat(r,".indentLevel")),r++,next=this.items[r]}},_getLastChild:function(t){var e=null!=t?this._getSibling(t.index,t.indent,!1):null;return null!=e?e-1:"undefined"!==i(t)&&null!==t.parent&&null!==t.parent&&null!==this._getItemById(t.parent)?this._getLastChild(this._getItemById(t.parent)):this.items.length-1},_getIndent:function(t,e){if("undefined"!==i(t[e].parent)){var n=t.findIndex(function(n){return n.id===t[e].parent});if(-1!==n&&"undefined"!==i(t[n])&&void 0!==t[n].indent)return t[n].indent+1}return 0},_getOrder:function(t){var e=0,n=0;for(var i in this.items)this.items[i].parent==t.parent&&this.items[i].id==t.id?n=e:this.items[i].parent==t.parent&&e++;return n},_getSibling:function(t,e,n){var o=n?-1:1,s=t+o,r=null;if(null!==this.items)for(;s<this.items.length&&s>-1;)null===r&&"undefined"!==i(this.items[s])&&"undefined"!==i(this.items[t])&&this.items[s].parent===this.items[t].parent&&(r=s),s+=o;return r},_getItemById:function(t,e){var n=this.items.findIndex(function(e){return e.id===t});return e=void 0===e?0:e,void 0!==this.items[n+e]?this.items[n+e]:null},_handleAddItem:function(t){this.addItem(t.detail)},_handleRemoveItem:function(t){this.activeItem=t.detail.item,this.removeItem(t.detail.item)},_handleMoveItem:function(t){this.activeItem=t.detail.item,this.moveItem(t.detail.item,t.detail.moveUp,t.detail.byGroup)},_handleFocusItem:function(t){(t.detail.moveUp?t.detail.item.previousElementSibling:t.detail.item.nextElementSibling).setSelection()},_handleIndentItem:function(t){var e=t.detail.increase?1:-1;this._adjustIndent(this._getItemById(t.detail.item.id),e),this.setData(this.items)},_handleChangeItem:function(t){if(null!=this._getItemById(t.detail.item.id)){var e=this.items.findIndex(function(e){return e.id===t.detail.item.id});"undefined"!==i(this.items[e])&&(this.items[e].title=t.detail.value,this.notifyPath("items.".concat(e,".title")))}}},o(l,"_handleFocusItem",function(t){this.__focusedItem=t.srcElement}),o(l,"_handleBlurItem",function(t){}),l));t.LrnsysOutline=u,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=lrnsys-outline.umd.js.map
