!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";window.SecureRequest=window.SecureRequest||{},window.SecureRequest.xhr={setCookies:function(e,t){this._eraseCookie("securerequest-endpoint"),this._eraseCookie("securerequest-csrftoken"),this._createCookie("securerequest-endpoint",e,30,e),this._createCookie("securerequest-csrftoken",t,30,e)},generateUrl:function(e){var t=this.getEndPoint(),n=this.getCsrfToken();return t&&n?t+e+"?token="+n:null},getEndPoint:function(){return this._readCookie("securerequest-endpoint")},getCsrfToken:function(){return this._readCookie("securerequest-csrftoken")},_createCookie:function(e,t,n,o){var r="";if(n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3),r="; expires="+i.toUTCString()}document.cookie=e+"="+t+r+"; path="+o},_readCookie:function(e){for(var t=e+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){for(var r=n[o];" "==r.charAt(0);)r=r.substring(1,r.length);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return null},_eraseCookie:function(e){this._createCookie(e,"",-1)}}});
//# sourceMappingURL=secure-request.umd.js.map
