!function(t){"function"==typeof define&&define.amd?define(t):t()}(function(){"use strict";window.A11yBehaviors=window.A11yBehaviors||{},window.A11yBehaviors.A11y={getTextContrastColor:function(t){var e=t.replace("#",""),n=parseInt(e,16);return.2126*(n>>16&255)+.7152*(n>>8&255)+.0722*(n>>0&255)<141?"#ffffff":"#000000"},computeTextPropContrast:function(t,e){if(this[e].includes("#")){var n=this.getTextContrastColor(this[e]);this.set(t,n)}}}});
//# sourceMappingURL=a11y-behaviors.umd.js.map
