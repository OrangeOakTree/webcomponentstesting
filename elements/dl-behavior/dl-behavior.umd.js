!function(e){"function"==typeof define&&define.amd?define(["@polymer/polymer/lib/legacy/polymer.dom.js"],e):e(global.polymer_dom_js)}(function(e){"use strict";window.mtz=window.mtz||{},mtz.FileDownloadBehaviors={properties:{fileTypes:{type:Object,value:function(){return{CSV:"text/csv",JSON:"text/json",PDF:"application/pdf",TXT:"text/plain"}}}},downloadFromData:function(o,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"download",i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],d=this.fileTypes[n.toUpperCase()],a=new Blob([decodeURIComponent(encodeURI(o))],{type:d}),l=t+"."+n.toLowerCase();if(window.navigator&&window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(a,l);else{var r=document.createElement("a");r.href=(window.URL||window.webkitURL).createObjectURL(a),r.download=l,r.target=i?"_blank":"_self",e.dom(this.root).appendChild(r),r.click(),e.dom(this.root).removeChild(r)}},downloadFromURI:function(e){var o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return window.open(e,o?"_blank":"_self"),!0}}});
//# sourceMappingURL=dl-behavior.umd.js.map
