define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","./node_modules/@lrnwebcomponents/a11y-behaviors/a11y-behaviors.js","./node_modules/@lrnwebcomponents/media-behaviors/media-behaviors.js","./node_modules/@lrnwebcomponents/a11y-media-player/a11y-media-player.js"],function(_exports,_polymerElement,_HAXWiring,_a11yBehaviors,_mediaBehaviors,_a11yMediaPlayer){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.VideoPlayer=void 0;function _templateObject_30e83a3003cf11e9b476279575cbe0cf(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>\n:host {\n  display: block;\n  margin: 0 0 15px;\n}\n.video-caption {\n  font-style: italic;\n  margin: 0;\n  padding: 8px;\n  @apply --video-player-caption-theme;\n}</style>\n<div style$=\"[[playerStyle]]\">\n<template is=\"dom-if\" if=\"[[isA11yMedia]]\" restamp>\n  <a11y-media-player\n    accent-color$=\"[[accentColor]]\"\n    dark$=\"[[dark]]\"\n    dark-transcript$=\"[[darkTranscript]]\"\n    disable-interactive$=\"[[disableInteractive]]\"\n    hide-timestamps$=\"[[hideTimestamps]]\"\n    lang$=\"[[lang]]\"\n    media-type$=\"[[sourceType]]\"\n    preload$=\"[[preload]]\"\n    media-title$=\"[[mediaTitle]]\"\n    sources$=\"[[sourceData]]\"\n    stand-alone$=\"[[__standAlone]]\"\n    sticky-corner$=\"[[stickyCorner]]\"\n    thumbnail-src$=\"[[thumbnailSrc]]\"\n    tracks$=\"[[trackData]]\"\n    crossorigin$=\"[[crossorigin]]\"\n    youtube-id$=\"[[youtubeId]]\"\n  >\n    <template id=\"sources\" is=\"dom-repeat\" items=\"[[sourceData]]\" as=\"sd\" restamp>\n      <source src$=\"[[sd.src]]\" type$=\"[[sd.type]]\" />\n    </template>\n    <template id=\"tracks\" is=\"dom-repeat\" items=\"[[trackData]]\" as=\"track\" restamp>\n      <track\n        src$=\"[[track.src]]\"\n        kind$=\"[[track.kind]]\"\n        label$=\"[[track.label]]\"\n        srclang$=\"[[track.lang]]\"\n      />\n    </template>\n    <slot name=\"caption\"></slot>\n  </a11y-media-player>\n</template>\n<template is=\"dom-if\" if=\"[[!isA11yMedia]]\">\n  <template is=\"dom-if\" if=\"[[sandboxed]]\">\n    <div class=\"responsive-video-container\" lang$=\"[[lang]]\">\n      <webview\n        resource$=\"[[schemaResourceID]]-video\"\n        src$=\"[[sourceData.0.src]]\"\n        width$=\"[[width]]\"\n        height$=\"[[height]]\"\n        frameborder=\"0\"\n      ></webview>\n    </div>\n  </template>\n  <template is=\"dom-if\" if=\"[[!sandboxed]]\">\n    <template is=\"dom-if\" if=\"[[iframed]]\">\n      <div class=\"responsive-video-container\" lang$=\"[[lang]]\">\n        <iframe\n          resource$=\"[[schemaResourceID]]-video\"\n          src$=\"[[sourceData.0.src]]\"\n          width$=\"[[width]]\"\n          height$=\"[[height]]\"\n          frameborder=\"0\"\n          webkitallowfullscreen=\"\"\n          mozallowfullscreen=\"\"\n          allowfullscreen=\"\"\n        ></iframe>\n      </div>\n    </template>\n  </template>\n  <div id=\"videocaption\" class$=\"video-caption\">\n    <p>\n      [[mediaTitle]]\n      <span class=\"media-type print-only\">(embedded media)</span>\n    </p>\n    <slot name=\"caption\"></slot>\n  </div>\n</template>"]);_templateObject_30e83a3003cf11e9b476279575cbe0cf=function _templateObject_30e83a3003cf11e9b476279575cbe0cf(){return data};return data}var VideoPlayer=function(_PolymerElement){babelHelpers.inherits(VideoPlayer,_PolymerElement);function VideoPlayer(){babelHelpers.classCallCheck(this,VideoPlayer);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(VideoPlayer).apply(this,arguments))}babelHelpers.createClass(VideoPlayer,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(VideoPlayer.prototype),"connectedCallback",this).call(this);this.HAXWiring=new _HAXWiring.HAXWiring;this.HAXWiring.setHaxProperties(VideoPlayer.haxProperties,VideoPlayer.tag,this)}},{key:"_computeYoutubeId",value:function _computeYoutubeId(source,sourceType){if(source!==void 0&&"youtube"===sourceType){return this._computeSRC(source).replace(/(https?:\/\/)?(www.)?youtube(-nocookie)?.com\/embed\//,"")}return!1}},{key:"_computeYoutube",value:function _computeYoutube(sourceType){return"youtube"===sourceType}},{key:"_computeA11yMedia",value:function _computeA11yMedia(sourceType,sandboxed){if(!sandboxed&&("youtube"==sourceType||"local"==sourceType)){return!0}return!1}},{key:"_computeIframed",value:function _computeIframed(sourceData,sandboxed){if(0<sourceData.length&&sourceData[0]!==void 0&&window.MediaBehaviors.Video._sourceIsIframe(sourceData[0].src)&&!sandboxed){return!0}return!1}},{key:"_getTrackData",value:function _getTrackData(tracks){return"string"===typeof tracks?JSON.parse(tracks):tracks}},{key:"_getSourceData",value:function _getSourceData(source,sources,tracks){if("string"===typeof sources)sources=JSON.parse(sources);for(var root=this,temp=sources.slice(),i=0;i<temp.length;i++){temp[i].type=temp[i].type!==void 0&&null!==temp[i].type?temp[i].type:this._computeMediaType(temp[i].src);temp[i].src=this._computeSRC(temp[i].src)}if(null!==source){var src=this._computeSRC(source);this.sourceType=this._computeSourceType(src);if("youtube"!==this.sourceType)temp.unshift({src:src,type:this._computeMediaType(src)})}this.__standAlone=tracks===void 0||null===tracks||tracks.length;return temp}},{key:"_computeMediaType",value:function _computeMediaType(source){var audio=["aac","flac","mp3","oga","wav"],video=["mov","mp4","ogv","webm"],type="",findType=function findType(text,data){for(var i=0;i<data.length;i++){if(""===type&&source!==void 0&&null!==source&&-1<source.toLowerCase().indexOf("."+data[i]))type=text+"/"+data[i]}};findType("audio",audio);findType("video",video);return type}},{key:"_computeSandboxed",value:function _computeSandboxed(sourceData){if(0<sourceData.length&&sourceData[0]!==void 0&&window.MediaBehaviors.Video._sourceIsIframe(sourceData[0].src)){var test=document.createElement("webview");if("function"===typeof test.reload){return!0}}return!1}},{key:"_computeSourceType",value:function _computeSourceType(sourceData){var root=this;if(0<sourceData.length&&sourceData[0]!==void 0&&babelHelpers.typeof(sourceData[0].src)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){return window.MediaBehaviors.Video.getVideoType(sourceData[0].src)}else{return null}}},{key:"_computeSRC",value:function _computeSRC(source){if(null!==source&&babelHelpers.typeof(source)!==void 0){var type=this.sourceType!==void 0?this.sourceType:window.MediaBehaviors.Video.getVideoType(source);source=window.MediaBehaviors.Video.cleanVideoSource(source,type);if("vimeo"==type){if(this.vimeoTitle){source+="?title=1"}else{source+="?title=0"}if(this.vimeoByline){source+="&byline=1"}else{source+="&byline=0"}if(this.vimeoPortrait){source+="&portrait=1"}else{source+="&portrait=0"}if(babelHelpers.typeof(this.videoColor)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){source+="&color="+this.videoColor}}else if("dailymotion"==type){source+="&ui-start-screen-info=false";source+="&ui-logo=false";source+="&sharing-enable=false";source+="&endscreen-enable=false";if(babelHelpers.typeof(this.videoColor)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){source+="&ui-highlight="+this.videoColor}}}return source}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_30e83a3003cf11e9b476279575cbe0cf())}},{key:"haxProperties",get:function get(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Video player",description:"This can present video in a highly accessible manner regardless of source.",icon:"av:play-circle-filled",color:"red",groups:["Video","Media"],handles:[{type:"video",source:"source",title:"caption",caption:"caption",description:"caption",color:"primaryColor"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"accentColor",title:"Accent color",description:"Select the accent color for the player.",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark theme",description:"Enable dark theme for the player.",inputMethod:"boolean",icon:"invert-colors"}],configure:[{property:"source",title:"Source",description:"The URL for this video.",inputMethod:"textfield",icon:"link",required:!0,validationType:"url"},{property:"track",title:"Closed captions",description:"The URL for the captions file.",inputMethod:"textfield",icon:"link",required:!0,validationType:"url"},{property:"thumbnailSrc",title:"Thumbnail image",description:"Optional. The URL for a thumbnail/poster image.",inputMethod:"textfield",icon:"link",required:!0,validationType:"url"},{property:"mediaTitle",title:"Title",description:"Simple title for under video",inputMethod:"textfield",icon:"av:video-label",required:!1,validationType:"text"},{property:"accentColor",title:"Accent color",description:"Select the accent color for the player.",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark theme",description:"Enable dark theme for the player.",inputMethod:"boolean",icon:"invert-colors"}],advanced:[{property:"darkTranscript",title:"Dark theme for transcript",description:"Enable dark theme for the transcript.",inputMethod:"boolean"},{property:"hideTimestamps",title:"Hide timestamps",description:"Hide the time stamps on the transcript.",inputMethod:"boolean"},{property:"preload",title:"Preload source(s).",description:"How the sources should be preloaded, i.e. auto, metadata (default), or none.",inputMethod:"select",options:{preload:"Preload all media",metadata:"Preload media metadata only",none:"Don't preload anything"}},{property:"stickyCorner",title:"Sticky Corner",description:"Set the corner where a video plays when scrolled out of range, or choose none to disable sticky video.",inputMethod:"select",options:{none:"none","top-left":"top-left","top-right":"top-right","bottom-left":"bottom-left","bottom-right":"bottom-right"}},{property:"sources",title:"Other sources",description:"List of other sources",inputMethod:"array",properties:[{property:"src",title:"Source",description:"The URL for this video.",inputMethod:"textfield"},{property:"type",title:"Type",description:"Media type data",inputMethod:"select",options:{"audio/aac":"acc audio","audio/flac":"flac audio","audio/mp3":"mp3 audio","video/mp4":"mp4 video","video/mov":"mov video","audio/ogg":"ogg audio","video/ogg":"ogg video","audio/wav":"wav audio","audio/webm":"webm audio","video/webm":"webm video"}}]},{property:"tracks",title:"Track list",description:"Tracks of different languages of closed captions",inputMethod:"array",properties:[{property:"kind",title:"Kind",description:"Kind of track",inputMethod:"select",options:{subtitles:"subtitles"}},{property:"label",title:"Label",description:"The human-readable name for this track, eg. \"English Subtitles\"",inputMethod:"textfield"},{property:"src",title:"Source",description:"Source of the track",inputMethod:"textfield"},{property:"srclang",title:"Two letter, language code, eg. 'en' for English, \"de\" for German, \"es\" for Spanish, etc.",description:"Label",inputMethod:"textfield"}]}]}}}},{key:"properties",get:function get(){return{accentColor:{type:"String",value:null,reflectToAttribute:!0},crossorigin:{type:"Boolean",value:!1},dark:{type:"Boolean",value:!1,reflectToAttribute:!0},darkTranscript:{type:"Boolean",value:!1},disableInteractive:{type:"Boolean",value:!1},height:{type:"String",value:null},hideTimestamps:{type:"Boolean",value:!1},iframed:{type:"Boolean",computed:"_computeIframed(sourceData, sandboxed)"},isA11yMedia:{type:"Boolean",computed:"_computeA11yMedia(sourceType, sandboxed)"},isYoutube:{type:"Boolean",computed:"_computeYoutube(sourceType)"},lang:{type:"String",value:"en"},mediaTitle:{type:"String"},preload:{type:"String",value:"metadata"},sandboxed:{type:"Boolean",computed:"_computeSandboxed(sourceData)"},source:{type:"String",value:null},sources:{type:"Array",value:[]},sourceData:{type:"Array",computed:"_getSourceData(source,sources,trackData)",reflectToAttribute:!0},sourceType:{type:"String",computed:"_computeSourceType(sourceData)"},stickyCorner:{type:"String",value:"top-right",reflectToAttribute:!0},tracks:{type:"Array",value:[]},trackData:{type:"Array",computed:"_getTrackData(tracks)",reflectToAttribute:!0},thumbnailSrc:{type:"String",value:null,reflectToAttribute:!0},width:{type:"String",value:null},youtubeId:{type:"String",computed:"_computeYoutubeId(source,sourceType)"}}}},{key:"tag",get:function get(){return"video-player"}},{key:"behaviors",get:function get(){return[HAXBehaviors.PropertiesBehaviors,SchemaBehaviors.Schema,A11yBehaviors.A11y,MediaBehaviors.Video]}}]);return VideoPlayer}(_polymerElement.PolymerElement);_exports.VideoPlayer=VideoPlayer;window.customElements.define(VideoPlayer.tag,VideoPlayer)});