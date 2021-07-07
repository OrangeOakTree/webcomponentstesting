!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit"),require("@lrnwebcomponents/map-menu/lib/map-menu-builder.js"),require("@lrnwebcomponents/map-menu/lib/map-menu-container.js"),require("@lrnwebcomponents/utils/utils.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/map-menu/lib/map-menu-builder.js","@lrnwebcomponents/map-menu/lib/map-menu-container.js","@lrnwebcomponents/utils/utils.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).MapMenu={},e.lit,null,null,e.utils_js)}(this,(function(e,t,n,i,a){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?c(e):t}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=r(e);if(t){var a=r(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return u(this,n)}}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var p,f,m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(m,e);var n,i,r,u=s(m);function m(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),(e=u.call(this)).disabled=!1,e.title="Content outline",e.data=null,e.items=[],e.autoScroll=!1,e.activeIndicator=!1,setTimeout((function(){e.addEventListener("link-clicked",e.__linkClickedHandler.bind(c(e))),e.addEventListener("toggle-updated",e.__toggleUpdated.bind(c(e))),e.addEventListener("active-item",e.__activeItemHandler.bind(c(e))),e.addEventListener("map-meu-item-hidden-check",e._mapMeuItemHiddenCheckHandler.bind(c(e)))}),0),e}return n=m,r=[{key:"styles",get:function(){return[t.css(f||(f=d(["\n        :host {\n          --map-menu-active-color: rgba(0, 0, 0, 0.1);\n          --map-menu-size: 1;\n          display: block;\n          overflow-y: scroll;\n          position: relative;\n          height: 100%;\n          transition: all 0.1s ease-in-out;\n          opacity: 1;\n          background-color: transparent;\n        }\n        #itemslist {\n          display: var(--map-menu-items-list-display);\n          flex-direction: var(--map-menu-items-list-flex-direction);\n          flex: var(--map-menu-items-list-flex);\n        }\n        #activeindicator {\n          background: var(--map-menu-active-color);\n          transition: all 0.1s ease-in-out;\n          position: absolute;\n          pointer-events: none;\n        }\n\n        map-menu-container {\n          padding: var(--map-menu-container-padding, 0);\n          display: var(--map-menu-container-display);\n          flex-direction: var(--map-menu-container-flex-direction);\n          flex: var(--map-menu-container-flex);\n          background-color: var(--map-menu-container-background-color);\n          color: var(--map-menu-container-color);\n        }\n\n        /* turn default active color if indicator is on */\n        :host([active-indicator]) map-menu-builder {\n          --map-menu-active-color: transparent;\n        }\n      "])))]}},{key:"tag",get:function(){return"map-menu"}},{key:"properties",get:function(){return{disabled:{type:Boolean,reflect:!0},title:{type:String},data:{type:Array},manifest:{type:Object},items:{type:Array},selected:{type:String},activeItem:{type:Object},autoScroll:{type:Boolean,attribute:"auto-scroll"},activeIndicator:{type:Boolean,reflect:!0,attribute:"active-indicator"}}}}],(i=[{key:"render",value:function(){return t.html(p||(p=d(['\n      <div id="itemslist">\n        <map-menu-container>\n          <div id="activeindicator"></div>\n          <map-menu-builder\n            id="builder"\n            .items="','"\n            .selected="','"\n          ></map-menu-builder>\n        </map-menu-container>\n      </div>\n    '])),this.items,this.selected)}},{key:"updated",value:function(e){var t=this;e.forEach((function(e,n){"data"==n&&t._dataChanged(t[n]),"manifest"==n&&t._manifestChanged(t[n]),"activeItem"==n&&t.refreshActiveChildren(t[n],e),["manifest","items","selected"].includes(n)&&t.dispatchEvent(new CustomEvent("".concat(n,"-changed"),{detail:{value:t[n]}}))}))}},{key:"__activeItemHandler",value:function(e){this.activeItem=e.detail}},{key:"_mapMeuItemHiddenCheckHandler",value:function(e){var t=e.detail.action,n=e.detail.hiddenChild;"closed"===t&&!0===n?this.__updateActiveIndicator(this.activeItem,!0):this.__updateActiveIndicator(this.activeItem,!1)}},{key:"refreshActiveChildren",value:function(e,t){e&&(e.setAttribute("active","active"),this.activeIndicator&&this.__updateActiveIndicator(e),this.autoScroll&&this.__scrollHandler(e,{duration:50,delay:0,scrollElement:this})),t&&(t.removeAttribute("active"),this.__updateActiveIndicator(e))}},{key:"__scrollHandler",value:function(e,t){var n={align:"top",delay:0,duration:300,scrollElement:window},i=Object.assign({},n,t),a=e.getBoundingClientRect();i.scrollElement.getBoundingClientRect();var o=i.scrollElement.getBoundingClientRect().bottom-i.scrollElement.getBoundingClientRect().top,r=a.bottom-a.top,l=i.scrollElement.scrollTop,c=e.getBoundingClientRect().top-i.scrollElement.getBoundingClientRect().top;switch(c-=o/2,i.align){case"center":c+=r/2;break;case"bottom":c+=r}var u=null;requestAnimationFrame((function e(t){null===u&&(u=t);var n,a,o,r,s=t-u,d=(n=s,a=l,o=c,r=i.duration,(n/=r/2)<1?o/2*n*n+a:-o/2*(--n*(n-2)-1)+a);i.scrollElement.scrollTop=d,s<i.duration&&requestAnimationFrame(e)}))}},{key:"_manifestChanged",value:function(e){e&&(this.data=e.items)}},{key:"_dataChanged",value:function(e){var t=this,n=[];e&&(e.forEach((function(e){e.parent||n.push(e)})),n.forEach((function(n,i){t._setChildren(n,e)})),this.items=[].concat(n))}},{key:"_setChildren",value:function(e,t){var n=this,i=t.filter((function(t){return e.id===t.parent}));e.children=i,e.children.length>0&&e.children.forEach((function(e){n._setChildren(e,t)}))}},{key:"__hasChildren",value:function(e){return e.children.length>0}},{key:"__linkClickedHandler",value:function(e){this.selected=e.detail.id,this.dispatchEvent(new CustomEvent("selected",{bubbles:!0,cancelable:!0,composed:!0,detail:e.detail.id}))}},{key:"__toggleUpdated",value:function(e){var t=e.detail.opened?"opened":"closed",n=a.normalizeEventPath(e)[0];void 0!==this.activeItem&&(this.__updateActiveIndicator(this.activeItem,!1),this.activeItem.dispatchEvent(new CustomEvent("map-menu-item-hidden-check",{bubbles:!0,cancelable:!0,composed:!0,detail:Object.assign({},{action:t,target:n})})))}},{key:"__isInViewport",value:function(e){var t=this.__getScrollParent(e);if(!t)return!1;var n=e.offsetTop,i=n+e.offsetHeight,a=t.offsetTop,o=a+t.offsetHeight;return i>a&&n<o}},{key:"__getScrollParent",value:function(e){return null==e?null:e.scrollHeight>e.clientHeight?e:this.__getScrollParent(e.parentNode)}},{key:"__updateActiveIndicator",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];setTimeout((function(){var i=t.shadowRoot.querySelector("#activeindicator"),a=e.offsetLeft,o=e.offsetTop,r=e.offsetWidth,l=n?0:e.offsetHeight;i.setAttribute("style","width:".concat(r,"px;height:").concat(l,"px;top:").concat(o,"px;left:").concat(a,"px"))}),200)}},{key:"__parentsHidden",value:function(e){var t=e.parentNode;return null==t?null:"MAP-MENU-SUBMENU"===t.tagName&&!t.opened||"MAP-MENU"!==t.tagName&&this.__parentsHidden(t)}}])&&o(n.prototype,i),r&&o(n,r),m}(t.LitElement);window.customElements.define(m.tag,m),e.MapMenu=m,Object.defineProperty(e,"__esModule",{value:!0})}));
