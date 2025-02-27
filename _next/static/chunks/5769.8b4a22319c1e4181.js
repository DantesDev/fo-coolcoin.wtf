(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5769],{87545:function(b){/*!
 * mux-embed
 * @version 4.30.0
 * @copyright 2023 Mux, Inc
 */b.exports=function(){var b={80:function(b,g,M){b.exports=M(728).default},728:function(b,g,M){"use strict";M.d(g,{default:function(){return tm}});var N=M(48),B=M.n(N),i=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(b){var g=16*Math.random()|0;return("x"===b?g:3&g|8).toString(16)})},o=function(){return("000000"+(2176782336*Math.random()<<0).toString(36)).slice(-6)},s=function(b){var g,M;if(b&&void 0!==b.nodeName)return b.muxId||(b.muxId=o()),b.muxId;try{M=document.querySelector(b)}catch(b){}return M&&!M.muxId&&(M.muxId=b),(null===(g=M)||void 0===g?void 0:g.muxId)||b},u=function(b){b&&void 0!==b.nodeName?b=s(g=b):g=document.querySelector(b);var g,M=g&&g.nodeName?g.nodeName.toLowerCase():"";return[g,b,M]},W=M(640),K=M.n(W),Y=K().methodFactory;K().methodFactory=function(b,g,M){var N=Y(b,g,M);return function(){for(var b=["[mux]"],g=0;g<arguments.length;g++)b.push(arguments[g]);N.apply(void 0,b)}},K().setLevel(K().getLevel());var et=K();function p(){return"1"===(B().doNotTrack||B().navigator&&B().navigator.doNotTrack)}var er={now:function(){var b=B().performance,g=b&&b.timing,M=g&&g.navigationStart;return Math.round("number"==typeof M&&"function"==typeof b.now?M+b.now():Date.now())}},h=function(b){return v(b)[0]},v=function(b){if("string"!=typeof b||""===b)return["localhost"];var g,M=(b.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return M&&(g=(M.match(/[^\.]+\.[^\.]+$/)||[])[0]),[M,g]},en={exists:function(){var b=B().performance;return void 0!==(b&&b.timing)},domContentLoadedEventEnd:function(){var b=B().performance,g=b&&b.timing;return g&&g.domContentLoadedEventEnd},navigationStart:function(){var b=B().performance,g=b&&b.timing;return g&&g.navigationStart}};function y(b,g,M){M=void 0===M?1:M,b[g]=b[g]||0,b[g]+=M}var es=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],eo=["x-cdn","content-type"].concat(es);function w(b){var g={};return(b=b||"").trim().split(/[\r\n]+/).forEach(function(b){if(b){var M=b.split(": "),N=M.shift();N&&(eo.indexOf(N.toLowerCase())>=0||0===N.toLowerCase().indexOf("x-litix-"))&&(g[N]=M.join(": "))}}),g}function T(b){if(b){var g=es.find(function(g){return void 0!==b[g]});return g?b[g]:void 0}}var k=function(b){var g={};for(var M in b){var N=b[M];-1!==N["DATA-ID"].search("io.litix.data.")&&(g[N["DATA-ID"].replace("io.litix.data.","")]=N.VALUE)}return g};function E(b,g){var M=Object.keys(b);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(b);g&&(N=N.filter(function(g){return Object.getOwnPropertyDescriptor(b,g).enumerable})),M.push.apply(M,N)}return M}function O(b){for(var g=1;g<arguments.length;g++){var M=null!=arguments[g]?arguments[g]:{};g%2?E(Object(M),!0).forEach(function(g){D(b,g,M[g])}):Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(M)):E(Object(M)).forEach(function(g){Object.defineProperty(b,g,Object.getOwnPropertyDescriptor(M,g))})}return b}function D(b,g,M){return g in b?Object.defineProperty(b,g,{value:M,enumerable:!0,configurable:!0,writable:!0}):b[g]=M,b}var x=function(b){if(!b)return{};var g=en.navigationStart(),M=b.loading,N=M?M.start:b.trequest,B=M?M.first:b.tfirst,W=M?M.end:b.tload;return{bytesLoaded:b.total,requestStart:Math.round(g+N),responseStart:Math.round(g+B),responseEnd:Math.round(g+W)}},P=function(b){if(b&&"function"==typeof b.getAllResponseHeaders)return w(b.getAllResponseHeaders())};function q(b,g){var M=Object.keys(b);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(b);g&&(N=N.filter(function(g){return Object.getOwnPropertyDescriptor(b,g).enumerable})),M.push.apply(M,N)}return M}function S(b){for(var g=1;g<arguments.length;g++){var M=null!=arguments[g]?arguments[g]:{};g%2?q(Object(M),!0).forEach(function(g){A(b,g,M[g])}):Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(M)):q(Object(M)).forEach(function(g){Object.defineProperty(b,g,Object.getOwnPropertyDescriptor(M,g))})}return b}function A(b,g,M){return g in b?Object.defineProperty(b,g,{value:M,enumerable:!0,configurable:!0,writable:!0}):b[g]=M,b}var R=function(b,g){if(!b||!b.requestEndDate)return{};var M,N=h(b.url),B=b.url,W=b.bytesLoaded,K=new Date(b.requestStartDate).getTime(),Y=new Date(b.firstByteDate).getTime(),et=new Date(b.requestEndDate).getTime(),er=isNaN(b.duration)?0:b.duration,en="function"==typeof g.getMetricsFor?g.getMetricsFor(b.mediaType).HttpList:g.getDashMetrics().getHttpRequests(b.mediaType);return en.length>0&&(M=w(en[en.length-1]._responseHeaders||"")),{requestStart:K,requestResponseStart:Y,requestResponseEnd:et,requestBytesLoaded:W,requestResponseHeaders:M,requestMediaDuration:er,requestHostname:N,requestUrl:B,requestId:M?T(M):void 0}},I=function(b,g){var M=g.getQualityFor(b),N=g.getCurrentTrackFor(b).bitrateList;return N?{currentLevel:M,renditionWidth:N[M].width||null,renditionHeight:N[M].height||null,renditionBitrate:N[M].bandwidth}:{}},L=function(b){var g;return null===(g=b.match(/.*codecs\*?="(.*)"/))||void 0===g?void 0:g[1]},j=function(b){try{var g,M;return null===(g=b.getVersion)||void 0===g||null===(M=g.call(b))||void 0===M?void 0:M.split(".").map(function(b){return parseInt(b)})[0]}catch(b){return!1}};function C(b,g){for(var M=0;M<g.length;M++){var N=g[M];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(b,N.key,N)}}var el=0,ed=function(){var b,g,M;function e(){!function(b,g){if(!(b instanceof g))throw TypeError("Cannot call a class as a function")}(this,e)}return b=e,g=[{key:"on",value:function(b,g,M){return g._eventEmitterGuid=g._eventEmitterGuid||++el,this._listeners=this._listeners||{},this._listeners[b]=this._listeners[b]||[],M&&(g=g.bind(M)),this._listeners[b].push(g),g}},{key:"off",value:function(b,g){var M=this._listeners&&this._listeners[b];M&&M.forEach(function(b,N){b._eventEmitterGuid===g._eventEmitterGuid&&M.splice(N,1)})}},{key:"one",value:function(b,g,M){var N=this;g._eventEmitterGuid=g._eventEmitterGuid||++el;var n=function n(){N.off(b,n),g.apply(M||this,arguments)};n._eventEmitterGuid=g._eventEmitterGuid,this.on(b,n)}},{key:"emit",value:function(b,g){var M=this;if(this._listeners){g=g||{};var N=this._listeners["before*"]||[],B=this._listeners[b]||[],W=this._listeners["after"+b]||[],o=function(g,N){(g=g.slice()).forEach(function(g){g.call(M,{type:b},N)})};o(N,g),o(B,g),o(W,g)}}}],C(b.prototype,g),M&&C(b,M),Object.defineProperty(b,"prototype",{writable:!1}),e}();function U(b,g){for(var M=0;M<g.length;M++){var N=g[M];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(b,N.key,N)}}var eu=function(){var b,g;function e(b){var g=this;(function(b,g){if(!(b instanceof g))throw TypeError("Cannot call a class as a function")})(this,e),this.pm=b,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,b.on("playing",function(){g._playheadShouldBeProgressing=!0}),b.on("play",this._startPlaybackHeartbeatInterval.bind(this)),b.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),b.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),b.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),b.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),b.on("seeking",this._startPlaybackHeartbeatInterval.bind(this)),b.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),b.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),b.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),b.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),b.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),b.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),b.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),b.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),b.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),b.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),b.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),b.on("seeked",function(){b.data.player_is_paused?g._stopPlaybackHeartbeatInterval():g._startPlaybackHeartbeatInterval()}),b.on("timeupdate",function(){null!==g._playbackHeartbeatInterval&&b.emit("playbackheartbeat")}),b.on("devicesleep",function(M,N){null!==g._playbackHeartbeatInterval&&(B().clearInterval(g._playbackHeartbeatInterval),b.emit("playbackheartbeatend",{viewer_time:N.viewer_time}),g._playbackHeartbeatInterval=null)})}return U((b=e).prototype,[{key:"_startPlaybackHeartbeatInterval",value:function(){var b=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=B().setInterval(function(){b.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(B().clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),g&&U(b,g),Object.defineProperty(b,"prototype",{writable:!1}),e}();function F(b,g){for(var M=0;M<g.length;M++){var N=g[M];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(b,N.key,N)}}var ec=(eF=function e(b){var g=this;(function(b,g){if(!(b instanceof g))throw TypeError("Cannot call a class as a function")})(this,e),b.on("viewinit",function(){g.viewErrored=!1}),b.on("error",function(M,N){try{var B=b.errorTranslator({player_error_code:N.player_error_code,player_error_message:N.player_error_message,player_error_context:N.player_error_context});B?(b.data.player_error_code=B.player_error_code||N.player_error_code,b.data.player_error_message=B.player_error_message||N.player_error_message,b.data.player_error_context=B.player_error_context||N.player_error_context,g.viewErrored=!0):(delete b.data.player_error_code,delete b.data.player_error_message,delete b.data.player_error_context)}catch(M){b.mux.log.warn("Exception in error translator callback.",M),g.viewErrored=!0}})},eq&&F(eF.prototype,eq),e$&&F(eF,e$),Object.defineProperty(eF,"prototype",{writable:!1}),eF);function Q(b,g){for(var M=0;M<g.length;M++){var N=g[M];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(b,N.key,N)}}var em=function(){var b,g,M;function e(b){(function(b,g){if(!(b instanceof g))throw TypeError("Cannot call a class as a function")})(this,e),this.pm=b,this._watchTimeTrackerLastCheckedTime=null,b.on("playbackheartbeat",this._updateWatchTime.bind(this)),b.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return b=e,g=[{key:"_updateWatchTime",value:function(b,g){var M=g.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=M),y(this.pm.data,"view_watch_time",M-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=M}},{key:"_clearWatchTimeState",value:function(b,g){this._updateWatchTime(b,g),this._watchTimeTrackerLastCheckedTime=null}}],Q(b.prototype,g),M&&Q(b,M),Object.defineProperty(b,"prototype",{writable:!1}),e}();function J(b,g){for(var M=0;M<g.length;M++){var N=g[M];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(b,N.key,N)}}var eh=function(){var b,g,M;function e(b){var g=this;(function(b,g){if(!(b instanceof g))throw TypeError("Cannot call a class as a function")})(this,e),this.pm=b,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=er.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null;var M=this._startPlaybackTimeTracking.bind(this);b.on("playing",M),b.on("adplaying",M),b.on("seeked",M);var N=this._stopPlaybackTimeTracking.bind(this);b.on("playbackheartbeatend",N),b.on("seeking",N),b.on("adplaying",function(){g._isAdPlaying=!0}),b.on("adended",function(){g._isAdPlaying=!1}),b.on("adpause",function(){g._isAdPlaying=!1}),b.on("adbreakstart",function(){g._isAdPlaying=!1}),b.on("adbreakend",function(){g._isAdPlaying=!1}),b.on("adplay",function(){g._isAdPlaying=!1}),b.on("viewinit",function(){g._playbackTimeTrackerLastPlayheadPosition=-1,g._lastTime=er.now(),g._isAdPlaying=!1,g._callbackUpdatePlaybackTime=null})}return b=e,g=[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var b=this.pm.data.player_playhead_time,g=er.now(),M=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&b>this._playbackTimeTrackerLastPlayheadPosition?M=b-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(M=g-this._lastTime),M>0&&M<=1e3&&y(this.pm.data,"view_content_playback_time",M),this._playbackTimeTrackerLastPlayheadPosition=b,this._lastTime=g}}],J(b.prototype,g),M&&J(b,M),Object.defineProperty(b,"prototype",{writable:!1}),e}();function z(b,g){for(var M=0;M<g.length;M++){var N=g[M];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(b,N.key,N)}}var ep=function(){var b,g,M;function e(b){(function(b,g){if(!(b instanceof g))throw TypeError("Cannot call a class as a function")})(this,e),this.pm=b;var g=this._updatePlayheadTime.bind(this);b.on("playbackheartbeat",g),b.on("playbackheartbeatend",g),b.on("timeupdate",g),b.on("destroy",function(){b.off("timeupdate",g)})}return b=e,g=[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(b,g){var M=this,a=function(){M.pm.currentFragmentPDT&&M.pm.currentFragmentStart&&(M.pm.data.player_program_time=M.pm.currentFragmentPDT+M.pm.data.player_playhead_time-M.pm.currentFragmentStart)};if(g&&g.player_playhead_time)this.pm.data.player_playhead_time=g.player_playhead_time,a(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var N=this.pm.getPlayheadTime();void 0!==N&&(this.pm.data.player_playhead_time=N,a(),this._updateMaxPlayheadPosition())}}}],z(b.prototype,g),M&&z(b,M),Object.defineProperty(b,"prototype",{writable:!1}),e}();function X(b,g){for(var M=0;M<g.length;M++){var N=g[M];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(b,N.key,N)}}var e_=(ej=function e(b){if(function(b,g){if(!(b instanceof g))throw TypeError("Cannot call a class as a function")}(this,e),!b.disableRebufferTracking){var g,a=function(b,M){n(M),g=void 0},n=function(M){if(g){var N=M.viewer_time-g;y(b.data,"view_rebuffer_duration",N),g=M.viewer_time,b.data.view_rebuffer_duration>3e5&&(b.emit("viewend"),b.send("viewend"),b.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}b.data.view_watch_time>=0&&b.data.view_rebuffer_count>0&&(b.data.view_rebuffer_frequency=b.data.view_rebuffer_count/b.data.view_watch_time,b.data.view_rebuffer_percentage=b.data.view_rebuffer_duration/b.data.view_watch_time)};b.on("playbackheartbeat",function(b,g){return n(g)}),b.on("rebufferstart",function(M,N){g||(y(b.data,"view_rebuffer_count",1),g=N.viewer_time,b.one("rebufferend",a))}),b.on("viewinit",function(){g=void 0,b.off("rebufferend",a)})}},eK&&X(ej.prototype,eK),eY&&X(ej,eY),Object.defineProperty(ej,"prototype",{writable:!1}),ej);function te(b,g){for(var M=0;M<g.length;M++){var N=g[M];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(b,N.key,N)}}var ev=function(){var b,g,M;function e(b){var g=this;(function(b,g){if(!(b instanceof g))throw TypeError("Cannot call a class as a function")})(this,e),this.pm=b,b.disableRebufferTracking||b.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,b.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),b.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),b.on("seeking",function(){g._cleanupRebufferTracker(null,{viewer_time:er.now()})}))}return b=e,g=[{key:"_checkIfRebuffering",value:function(b,g){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing)this._cleanupRebufferTracker(b,g);else if(null!==this._lastCheckedTime){if(this._lastPlayheadTime===this.pm.data.player_playhead_time){var M=g.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&M>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=g.viewer_time}else this._cleanupRebufferTracker(b,g,!0)}else this._prepareRebufferTrackerState(g.viewer_time)}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(b){this._lastCheckedTime=b,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=b}},{key:"_cleanupRebufferTracker",value:function(b,g){var M=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:g.viewer_time});else{if(null===this._lastCheckedTime)return;var N=this.pm.data.player_playhead_time-this._lastPlayheadTime,B=g.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&N>0&&B-N>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+B-N}))}M?this._prepareRebufferTrackerState(g.viewer_time):this._clearRebufferTrackerState()}}],te(b.prototype,g),M&&te(b,M),Object.defineProperty(b,"prototype",{writable:!1}),e}();function ne(b,g){for(var M=0;M<g.length;M++){var N=g[M];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(b,N.key,N)}}var eb=function(){var b,g;function e(b){var g=this;(function(b,g){if(!(b instanceof g))throw TypeError("Cannot call a class as a function")})(this,e),this.pm=b,b.on("viewinit",function(){var M=b.data,N=M.view_id;if(!M.view_program_changed){var n=function(M,B){var W=B.viewer_time;"playing"===M.type&&void 0===b.data.view_time_to_first_frame?g.calculateTimeToFirstFrame(W||er.now(),N):"adplaying"===M.type&&(void 0===b.data.view_time_to_first_frame||g._inPrerollPosition())&&g.calculateTimeToFirstFrame(W||er.now(),N)};b.one("playing",n),b.one("adplaying",n),b.one("viewend",function(){b.off("playing",n),b.off("adplaying",n)})}})}return ne((b=e).prototype,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(b,g){g===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:b}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.NAVIGATION_START&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.NAVIGATION_START))}}]),g&&ne(b,g),Object.defineProperty(b,"prototype",{writable:!1}),e}();function oe(b,g){for(var M=0;M<g.length;M++){var N=g[M];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(b,N.key,N)}}var eg=(eZ=function e(b){var g=this;(function(b,g){if(!(b instanceof g))throw TypeError("Cannot call a class as a function")})(this,e),b.on("viewinit",function(){g._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb"].forEach(function(M){b.on(M,function(){if(g._lastPlayheadPosition>=0&&b.data.player_playhead_time>=0&&g._lastPlayerWidth>=0&&g._lastSourceWidth>0&&g._lastPlayerHeight>=0&&g._lastSourceHeight>0){var M=b.data.player_playhead_time-g._lastPlayheadPosition;if(M<0)return void(g._lastPlayheadPosition=-1);var N=Math.min(g._lastPlayerWidth/g._lastSourceWidth,g._lastPlayerHeight/g._lastSourceHeight),B=Math.max(0,N-1),W=Math.max(0,1-N);b.data.view_max_upscale_percentage=Math.max(b.data.view_max_upscale_percentage||0,B),b.data.view_max_downscale_percentage=Math.max(b.data.view_max_downscale_percentage||0,W),y(b.data,"view_total_content_playback_time",M),y(b.data,"view_total_upscaling",B*M),y(b.data,"view_total_downscaling",W*M)}g._lastPlayheadPosition=-1})}),["playing","hb"].forEach(function(M){b.on(M,function(){g._lastPlayheadPosition=b.data.player_playhead_time,g._lastPlayerWidth=b.data.player_width,g._lastPlayerHeight=b.data.player_height,g._lastSourceWidth=b.data.video_source_width,g._lastSourceHeight=b.data.video_source_height})})},ez&&oe(eZ.prototype,ez),eQ&&oe(eZ,eQ),Object.defineProperty(eZ,"prototype",{writable:!1}),eZ);function le(b,g){for(var M=0;M<g.length;M++){var N=g[M];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(b,N.key,N)}}var ef=(eX=function e(b){var g=this;(function(b,g){if(!(b instanceof g))throw TypeError("Cannot call a class as a function")})(this,e),this.isSeeking=!1;var M=-1,n=function(){var N=er.now(),B=(b.data.viewer_time||N)-(M||N);y(b.data,"view_seek_duration",B),b.data.view_max_seek_time=Math.max(b.data.view_max_seek_time||0,B),g.isSeeking=!1,M=-1};b.on("seeking",function(N,B){Object.assign(b.data,B),g.isSeeking&&B.viewer_time-M<=2e3?M=B.viewer_time:(g.isSeeking&&n(),g.isSeeking=!0,M=B.viewer_time,y(b.data,"view_seek_count",1),b.send("seeking"))}),b.on("seeked",function(){n()}),b.on("viewend",function(){g.isSeeking&&(n(),b.send("seeked")),g.isSeeking=!1,M=-1})},eJ&&le(eX.prototype,eJ),e0&&le(eX,e0),Object.defineProperty(eX,"prototype",{writable:!1}),eX);function fe(b,g){return function(b){if(Array.isArray(b))return b}(b)||function(b,g){var M=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=M){var N,B,W=[],K=!0,Y=!1;try{for(M=M.call(b);!(K=(N=M.next()).done)&&(W.push(N.value),!g||W.length!==g);K=!0);}catch(b){Y=!0,B=b}finally{try{K||null==M.return||M.return()}finally{if(Y)throw B}}return W}}(b,g)||function(b,g){if(b){if("string"==typeof b)return pe(b,g);var M=Object.prototype.toString.call(b).slice(8,-1);return"Object"===M&&b.constructor&&(M=b.constructor.name),"Map"===M||"Set"===M?Array.from(b):"Arguments"===M||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M)?pe(b,g):void 0}}(b,g)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function pe(b,g){(null==g||g>b.length)&&(g=b.length);for(var M=0,N=Array(g);M<g;M++)N[M]=b[M];return N}function _e(b,g){for(var M=0;M<g.length;M++){var N=g[M];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(b,N.key,N)}}var he=function(b,g){b.push(g),b.sort(function(b,g){return b.viewer_time-g.viewer_time})},eE=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],ey=function(){var b,g,M;function e(b){var g=this;(function(b,g){if(!(b instanceof g))throw TypeError("Cannot call a class as a function")})(this,e),this.pm=b,b.on("viewinit",function(){g.isAdBreak=!1,g._currentAdRequestNumber=0,g._currentAdResponseNumber=0,g._adRequests=[],g._adResponses=[],g._adHasPlayed=!1,g._wouldBeNewAdPlay=!0,g._prerollPlayTime=void 0}),eE.forEach(function(M){return b.on(M,g._updateAdData.bind(g))});var a=function(){g.isAdBreak=!1};b.on("adbreakstart",function(){g.isAdBreak=!0}),b.on("play",a),b.on("playing",a),b.on("viewend",a),b.on("adrequest",function(M,N){N=Object.assign({ad_request_id:"generatedAdRequestId"+g._currentAdRequestNumber++},N),he(g._adRequests,N),y(b.data,"view_ad_request_count"),g.inPrerollPosition()&&(b.data.view_preroll_requested=!0,g._adHasPlayed||y(b.data,"view_preroll_request_count"))}),b.on("adresponse",function(M,N){N=Object.assign({ad_request_id:"generatedAdRequestId"+g._currentAdResponseNumber++},N),he(g._adResponses,N);var B=g.findAdRequest(N.ad_request_id);B&&y(b.data,"view_ad_request_time",Math.max(0,N.viewer_time-B.viewer_time))}),b.on("adplay",function(M,N){g._adHasPlayed=!0,g._wouldBeNewAdPlay&&(g._wouldBeNewAdPlay=!1,y(b.data,"view_ad_played_count")),g.inPrerollPosition()&&!b.data.view_preroll_played&&(b.data.view_preroll_played=!0,g._adRequests.length>0&&(b.data.view_preroll_request_time=Math.max(0,N.viewer_time-g._adRequests[0].viewer_time)),b.data.view_start&&(b.data.view_startup_preroll_request_time=Math.max(0,N.viewer_time-b.data.view_start)),g._prerollPlayTime=N.viewer_time)}),b.on("adplaying",function(M,N){g.inPrerollPosition()&&void 0===b.data.view_preroll_load_time&&void 0!==g._prerollPlayTime&&(b.data.view_preroll_load_time=N.viewer_time-g._prerollPlayTime,b.data.view_startup_preroll_load_time=N.viewer_time-g._prerollPlayTime)}),b.on("adclicked",function(M,N){g._wouldBeNewAdPlay||y(b.data,"view_ad_clicked_count")}),b.on("adskipped",function(M,N){g._wouldBeNewAdPlay||y(b.data,"view_ad_skipped_count")}),b.on("adended",function(){g._wouldBeNewAdPlay=!0}),b.on("aderror",function(){g._wouldBeNewAdPlay=!0})}return b=e,g=[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(b){for(var g=0;g<this._adRequests.length;g++)if(this._adRequests[g].ad_request_id===b)return this._adRequests[g]}},{key:"_updateAdData",value:function(b,g){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&g.ad_tag_url){var M=fe(v(g.ad_tag_url),2),N=M[0],B=M[1];this.pm.data.view_preroll_ad_tag_domain=B,this.pm.data.view_preroll_ad_tag_hostname=N}if(!this.pm.data.view_preroll_ad_asset_hostname&&g.ad_asset_url){var W=fe(v(g.ad_asset_url),2),K=W[0],Y=W[1];this.pm.data.view_preroll_ad_asset_domain=Y,this.pm.data.view_preroll_ad_asset_hostname=K}}this.pm.data.ad_asset_url=null==g?void 0:g.ad_asset_url,this.pm.data.ad_tag_url=null==g?void 0:g.ad_tag_url,this.pm.data.ad_creative_id=null==g?void 0:g.ad_creative_id,this.pm.data.ad_id=null==g?void 0:g.ad_id,this.pm.data.ad_universal_id=null==g?void 0:g.ad_universal_id}}],_e(b.prototype,g),M&&_e(b,M),Object.defineProperty(b,"prototype",{writable:!1}),e}();function ye(b,g){for(var M=0;M<g.length;M++){var N=g[M];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(b,N.key,N)}}var eA=(e1=function e(b){!function(b,g){if(!(b instanceof g))throw TypeError("Cannot call a class as a function")}(this,e);var g,M,i=function(){b.disableRebufferTracking||g&&(y(b.data,"view_waiting_rebuffer_duration",er.now()-g),g=!1,B().clearInterval(M))},N=!1,s=function(){N=!1,i()};b.on("waiting",function(){N&&(b.disableRebufferTracking||(y(b.data,"view_waiting_rebuffer_count",1),g=er.now(),M=B().setInterval(function(){if(g){var M=er.now();y(b.data,"view_waiting_rebuffer_duration",M-g),g=M}},250)))}),b.on("playing",function(){i(),N=!0}),b.on("pause",s),b.on("seeking",s)},e2&&ye(e1.prototype,e2),e3&&ye(e1,e3),Object.defineProperty(e1,"prototype",{writable:!1}),e1);function we(b,g){for(var M=0;M<g.length;M++){var N=g[M];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(b,N.key,N)}}var ek=(e5=function e(b){var g=this;!function(b,g){if(!(b instanceof g))throw TypeError("Cannot call a class as a function")}(this,e);var a=function(){g.lastWallClockTime=er.now(),b.on("before*",n)},n=function(M){var N=er.now(),B=g.lastWallClockTime;g.lastWallClockTime=N,N-B>3e4&&(b.emit("devicesleep",{viewer_time:B}),Object.assign(b.data,{viewer_time:B}),b.send("devicesleep"),b.emit("devicewake",{viewer_time:N}),Object.assign(b.data,{viewer_time:N}),b.send("devicewake"))};b.one("playbackheartbeat",a),b.on("playbackheartbeatend",function(){b.off("before*",n),b.one("playbackheartbeat",a)})},e4&&we(e5.prototype,e4),e9&&we(e5,e9),Object.defineProperty(e5,"prototype",{writable:!1}),e5),eT=M(375),ew=M(655),eS=M.n(ew),eC="muxData",Pe=function(){var b;try{b=eT.parse(eS().get(eC)||"")}catch(g){b={}}return b},qe=function(b){try{eS().set(eC,eT.stringify(b),{expires:365})}catch(b){}},Se=function(){var b=Pe();return b.mux_viewer_id=b.mux_viewer_id||i(),b.msn=b.msn||Math.random(),qe(b),{mux_viewer_id:b.mux_viewer_id,mux_sample_number:b.msn}};function Ae(b,g){var M=g.beaconCollectionDomain,N=g.beaconDomain;return M?"https://"+M:(b=b||"inferred").match(/^[a-z0-9]+$/)?"https://"+b+"."+(N||"litix.io"):"https://img.litix.io/a.gif"}var Re=function(){var b;switch(Ie()){case"cellular":b="cellular";break;case"ethernet":b="wired";break;case"wifi":b="wifi";break;case void 0:break;default:b="other"}return b},Ie=function(){var b=B().navigator,g=b&&(b.connection||b.mozConnection||b.webkitConnection);return g&&g.type};Re.getConnectionFromAPI=Ie;var eI=Ne({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),eM=Ne({ad:"ad",ag:"aggregate",ap:"api",al:"application",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",br:"break",bw:"browser",by:"bytes",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ck:"clicked",cl:"canceled",cn:"config",co:"count",ce:"counter",cp:"complete",cr:"creative",ct:"content",cu:"current",cx:"connection",cz:"context",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ep:"experiments",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pr:"preload",ps:"position",pt:"part",py:"property",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",st:"start",su:"startup",sv:"server",sw:"software",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function Ne(b){var g={};for(var M in b)b.hasOwnProperty(M)&&(g[b[M]]=M);return g}function He(b){var g={},M={};return Object.keys(b).forEach(function(N){var B=!1;if(b.hasOwnProperty(N)&&void 0!==b[N]){var W=N.split("_"),K=W[0],Y=eI[K];Y||(et.info("Data key word `"+W[0]+"` not expected in "+N),Y=K+"_"),W.splice(1).forEach(function(b){"url"===b&&(B=!0),eM[b]?Y+=eM[b]:Number(b)&&Math.floor(Number(b))===Number(b)?Y+=b:(et.info("Data key word `"+b+"` not expected in "+N),Y+="_"+b+"_")}),B?M[Y]=b[N]:g[Y]=b[N]}}),Object.assign(g,M)}var ex={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},eR=["hb","requestcompleted","requestfailed","requestcanceled"],Fe=function(b){var g=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=b||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},ex,g)};Fe.prototype.queueEvent=function(b,g){var M=Object.assign({},g);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===b)&&(this._eventQueue.push(M),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},Fe.prototype.flushEvents=function(){var b=arguments.length>0&&void 0!==arguments[0]&&arguments[0];b&&1===this._eventQueue.length?this._eventQueue.pop():(this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending())},Fe.prototype.destroy=function(){var b=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,b?this._clearBeaconQueue():this.flushEvents(),B().clearTimeout(this._sendTimeout)},Fe.prototype._clearBeaconQueue=function(){var b=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,g=this._eventQueue.slice(b);b>0&&Object.assign(g[g.length-1],He({mux_view_message:"event queue truncated"}));var M=this._createPayload(g);We(this._beaconUrl,M,!0,function(){})},Fe.prototype._sendBeaconQueue=function(){var b=this;if(!this._postInFlight){var g=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var M=this._createPayload(g),N=er.now();We(this._beaconUrl,M,!1,function(M,B){B?(b._eventQueue=g.concat(b._eventQueue),b._failureCount+=1,et.info("Error sending beacon: "+B)):b._failureCount=0,b._roundTripTime=er.now()-N,b._postInFlight=!1})}},Fe.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var b=Math.pow(2,this._failureCount-1);return(1+(b*=Math.random()))*this._options.baseTimeBetweenBeacons},Fe.prototype._startBeaconSending=function(){var b=this;B().clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=B().setTimeout(function(){b._eventQueue.length&&b._sendBeaconQueue(),b._startBeaconSending()},this._getNextBeaconTime()))},Fe.prototype._createPayload=function(b){var g,M,N,B=this,W={transmission_timestamp:Math.round(er.now())};this._roundTripTime&&(W.rtt_ms=Math.round(this._roundTripTime));var o=function(){N=(g=JSON.stringify({metadata:W,events:M||b})).length/1024},s=function(){return N<=B._options.maxPayloadKBSize};return o(),s()||(et.info("Payload size is too big ("+N+" kb). Removing unnecessary events."),M=b.filter(function(b){return -1===eR.indexOf(b.e)}),o()),s()||(et.info("Payload size still too big ("+N+" kb). Cropping fields.."),M.forEach(function(b){for(var g in b){var M=b[g];"string"==typeof M&&M.length>51200&&(b[g]=M.substring(0,51200))}}),o()),g};var We=function(b,g,M,N){if(M&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(b,g))N();else if(B().fetch)B().fetch(b,{method:"POST",body:g,headers:{"Content-Type":"text/plain"},keepalive:g.length<=57344}).then(function(b){return N(null,b.ok?null:"Error")}).catch(function(b){return N(null,b)});else{if(B().XMLHttpRequest){var W=new(B()).XMLHttpRequest;return W.onreadystatechange=function(){if(4===W.readyState)return N(null,200!==W.status?"error":void 0)},W.open("POST",b),W.setRequestHeader("Content-Type","text/plain"),void W.send(g)}N()}};function Ve(b,g){return function(b){if(Array.isArray(b))return b}(b)||function(b,g){var M=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=M){var N,B,W=[],K=!0,Y=!1;try{for(M=M.call(b);!(K=(N=M.next()).done)&&(W.push(N.value),!g||W.length!==g);K=!0);}catch(b){Y=!0,B=b}finally{try{K||null==M.return||M.return()}finally{if(Y)throw B}}return W}}(b,g)||function(b,g){if(b){if("string"==typeof b)return Je(b,g);var M=Object.prototype.toString.call(b).slice(8,-1);return"Object"===M&&b.constructor&&(M=b.constructor.name),"Map"===M||"Set"===M?Array.from(b):"Arguments"===M||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M)?Je(b,g):void 0}}(b,g)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Je(b,g){(null==g||g>b.length)&&(g=b.length);for(var M=0,N=Array(g);M<g;M++)N[M]=b[M];return N}function Ke(b,g){var M=Object.keys(b);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(b);g&&(N=N.filter(function(g){return Object.getOwnPropertyDescriptor(b,g).enumerable})),M.push.apply(M,N)}return M}function ze(b){for(var g=1;g<arguments.length;g++){var M=null!=arguments[g]?arguments[g]:{};g%2?Ke(Object(M),!0).forEach(function(g){Ze(b,g,M[g])}):Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(M)):Ke(Object(M)).forEach(function(g){Object.defineProperty(b,g,Object.getOwnPropertyDescriptor(M,g))})}return b}function Ye(b){return(Ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(b){return typeof b}:function(b){return b&&"function"==typeof Symbol&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b})(b)}function Xe(b,g){if(!(b instanceof g))throw TypeError("Cannot call a class as a function")}function $e(b,g){for(var M=0;M<g.length;M++){var N=g[M];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(b,N.key,N)}}function Ze(b,g,M){return g in b?Object.defineProperty(b,g,{value:M,enumerable:!0,configurable:!0,writable:!0}):b[g]=M,b}var eL=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id"],eD=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],eO=["ad_id","ad_creative_id","ad_universal_id"],eN=["viewstart","error","ended","viewend"],eP=function(){var b,g,M;function e(b,g){var M,N,W,K,Y,et,er,en,es,eo,el,ed,eu,ec,em,eh=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Xe(this,e),Ze(this,"previousBeaconData",null),Ze(this,"lastEventTime",0),Ze(this,"rateLimited",!1),this.mux=b,this.envKey=g,this.options=eh,this.eventQueue=new Fe(Ae(this.envKey,this.options)),this.sampleRate=null!==(M=this.options.sampleRate)&&void 0!==M?M:1,this.disableCookies=null!==(N=this.options.disableCookies)&&void 0!==N&&N,this.respectDoNotTrack=null!==(W=this.options.respectDoNotTrack)&&void 0!==W&&W,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null===(K=this.options.platform)||void 0===K?void 0:K.name,viewer_application_version:null===(Y=this.options.platform)||void 0===Y?void 0:Y.version,viewer_application_engine:null===(et=this.options.platform)||void 0===et?void 0:et.layout,viewer_device_name:null===(er=this.options.platform)||void 0===er?void 0:er.product,viewer_device_category:"",viewer_device_manufacturer:null===(en=this.options.platform)||void 0===en?void 0:en.manufacturer,viewer_os_family:null===(es=this.options.platform)||void 0===es||null===(eo=es.os)||void 0===eo?void 0:eo.family,viewer_os_architecture:null===(el=this.options.platform)||void 0===el||null===(ed=el.os)||void 0===ed?void 0:ed.architecture,viewer_os_version:null===(eu=this.options.platform)||void 0===eu||null===(ec=eu.os)||void 0===ec?void 0:ec.version,viewer_connection_type:Re(),page_url:null===B()||void 0===B()||null===(em=B().location)||void 0===em?void 0:em.href},this.viewerData=this.disableCookies?{}:Se()}return b=e,g=[{key:"send",value:function(b,g){var M;if(b&&null!=g&&g.view_id){if(this.respectDoNotTrack&&p())return et.info("Not sending `"+b+"` because Do Not Track is enabled");if(!g||"object"!==Ye(g))return et.error("A data object was expected in send() but was not provided");var N,B,W=this.disableCookies?{}:(N=Pe(),B=er.now(),N.session_start&&(N.sst=N.session_start,delete N.session_start),N.session_id&&(N.sid=N.session_id,delete N.session_id),N.session_expires&&(N.sex=N.session_expires,delete N.session_expires),(!N.sex||N.sex<B)&&(N.sid=i(),N.sst=B),N.sex=B+15e5,qe(N),{session_id:N.sid,session_start:N.sst,session_expires:N.sex}),K=ze(ze(ze(ze(ze({},this.pageLevelData),g),W),this.viewerData),{},{event:b,env_key:this.envKey});K.user_id&&(K.viewer_user_id=K.user_id,delete K.user_id);var Y=(null!==(M=K.mux_sample_number)&&void 0!==M?M:0)>=this.sampleRate,en=He(this._deduplicateBeaconData(b,K));if(this.lastEventTime=this.mux.utils.now(),Y)return et.info("Not sending event due to sample rate restriction",b,K,en);if(this.envKey||et.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",b,K,en),!this.rateLimited){if(et.info("Sending event",b,K,en),this.rateLimited=!this.eventQueue.queueEvent(b,en),this.mux.WINDOW_UNLOADING&&"viewend"===b)this.eventQueue.destroy(!0);else if(this.mux.WINDOW_HIDDEN&&"hb"===b?this.eventQueue.flushEvents(!0):eN.indexOf(b)>=0&&this.eventQueue.flushEvents(),this.rateLimited)return K.event="eventrateexceeded",en=He(K),this.eventQueue.queueEvent(K.event,en),et.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(b,g){var M=this,N={},B=g.view_id;if("-1"===B||"viewstart"===b||"viewend"===b||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)N=ze({},g),B&&(this.previousBeaconData=N),B&&"viewend"===b&&(this.previousBeaconData=null);else{var W=0===b.indexOf("request");Object.entries(g).forEach(function(g){var B=Ve(g,2),K=B[0],Y=B[1];M.previousBeaconData&&(Y!==M.previousBeaconData[K]||eL.indexOf(K)>-1||M.objectHasChanged(W,K,Y,M.previousBeaconData[K])||M.eventRequiresKey(b,K))&&(N[K]=Y,M.previousBeaconData[K]=Y)})}return N}},{key:"objectHasChanged",value:function(b,g,M,N){return!(!b||0!==g.indexOf("request_")||"request_response_headers"!==g&&"object"===Ye(M)&&"object"===Ye(N)&&Object.keys(M||{}).length===Object.keys(N||{}).length)}},{key:"eventRequiresKey",value:function(b,g){return"renditionchange"===b&&0===g.indexOf("video_source_")||!(!eO.includes(g)||!eD.includes(b))}}],$e(b.prototype,g),M&&$e(b,M),Object.defineProperty(b,"prototype",{writable:!1}),e}();function it(b,g){for(var M=0;M<g.length;M++){var N=g[M];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(b,N.key,N)}}var eU=(e8=function e(b){!function(b,g){if(!(b instanceof g))throw TypeError("Cannot call a class as a function")}(this,e);var g=0,M=0,N=0,B=0,W=0,K=0,Y=0;b.on("requestcompleted",function(K,Y){var et,er,en=Y.request_start,es=Y.request_response_start,eo=Y.request_response_end,el=Y.request_bytes_loaded;if(B++,es?(et=es-(null!=en?en:0),er=(null!=eo?eo:0)-es):er=(null!=eo?eo:0)-(null!=en?en:0),er>0&&el&&el>0){var ed=el/er*8e3;W++,M+=el,N+=er,b.data.view_min_request_throughput=Math.min(b.data.view_min_request_throughput||1/0,ed),b.data.view_average_request_throughput=M/N*8e3,b.data.view_request_count=B,et>0&&(g+=et,b.data.view_max_request_latency=Math.max(b.data.view_max_request_latency||0,et),b.data.view_average_request_latency=g/W)}}),b.on("requestfailed",function(g,M){B++,K++,b.data.view_request_count=B,b.data.view_request_failed_count=K}),b.on("requestcanceled",function(g,M){B++,Y++,b.data.view_request_count=B,b.data.view_request_canceled_count=Y})},e7&&it(e8.prototype,e7),e6&&it(e8,e6),Object.defineProperty(e8,"prototype",{writable:!1}),e8);function ut(b,g){for(var M=0;M<g.length;M++){var N=g[M];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(b,N.key,N)}}var eB=(tt=function e(b){var g=this;(function(b,g){if(!(b instanceof g))throw TypeError("Cannot call a class as a function")})(this,e),b.on("before*",function(M,N){var B=N.viewer_time,W=er.now(),K=g._lastEventTime;if(g._lastEventTime=W,K&&W-K>36e5){var Y=Object.keys(b.data).reduce(function(g,M){var N,B;return 0===M.indexOf("video_")?Object.assign(g,(N={},B=b.data[M],M in N?Object.defineProperty(N,M,{value:B,enumerable:!0,configurable:!0,writable:!0}):N[M]=B,N)):g},{});b.mux.log.info("Received event after at least an hour inactivity, creating a new view"),b.emit("viewinit",Object.assign({viewer_time:B},Y)),b.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==M.type&&"adbreakstart"!==M.type&&(b.emit("play",{viewer_time:B}),"playing"!==M.type&&b.emit("playing",{viewer_time:B}))}})},tr&&ut(tt.prototype,tr),tn&&ut(tt,tn),Object.defineProperty(tt,"prototype",{writable:!1}),tt);function ct(b){return(ct="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(b){return typeof b}:function(b){return b&&"function"==typeof Symbol&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b})(b)}function ft(b,g){return function(b){if(Array.isArray(b))return b}(b)||function(b,g){var M=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=M){var N,B,W=[],K=!0,Y=!1;try{for(M=M.call(b);!(K=(N=M.next()).done)&&(W.push(N.value),!g||W.length!==g);K=!0);}catch(b){Y=!0,B=b}finally{try{K||null==M.return||M.return()}finally{if(Y)throw B}}return W}}(b,g)||function(b,g){if(b){if("string"==typeof b)return pt(b,g);var M=Object.prototype.toString.call(b).slice(8,-1);return"Object"===M&&b.constructor&&(M=b.constructor.name),"Map"===M||"Set"===M?Array.from(b):"Arguments"===M||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M)?pt(b,g):void 0}}(b,g)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function pt(b,g){(null==g||g>b.length)&&(g=b.length);for(var M=0,N=Array(g);M<g;M++)N[M]=b[M];return N}function _t(b,g){for(var M=0;M<g.length;M++){var N=g[M];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(b,N.key,N)}}function ht(b,g){return(ht=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(b,g){return b.__proto__=g,b})(b,g)}function vt(b){var g=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(b){return!1}}();return function(){var M,N=bt(b);if(g){var B=bt(this).constructor;M=Reflect.construct(N,arguments,B)}else M=N.apply(this,arguments);return mt(this,M)}}function mt(b,g){if(g&&("object"===ct(g)||"function"==typeof g))return g;if(void 0!==g)throw TypeError("Derived constructors may only return object or undefined");return yt(b)}function yt(b){if(void 0===b)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return b}function bt(b){return(bt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(b){return b.__proto__||Object.getPrototypeOf(b)})(b)}var eG=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange"],eW=function(b){!function(b,g){if("function"!=typeof g&&null!==g)throw TypeError("Super expression must either be null or a function");b.prototype=Object.create(g&&g.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),Object.defineProperty(b,"prototype",{writable:!1}),g&&ht(b,g)}(o,b);var g,M,N,B=vt(o);function o(b,g,M){(function(b,g){if(!(b instanceof g))throw TypeError("Cannot call a class as a function")})(this,o),(W=B.call(this)).DOM_CONTENT_LOADED_EVENT_END=en.domContentLoadedEventEnd(),W.NAVIGATION_START=en.navigationStart(),W.mux=b,W.id=g,null!==(N=M)&&void 0!==N&&N.beaconDomain&&W.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(M=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,errorTranslator:function(b){return b}},M)).data=M.data||{},M.data.property_key&&(M.data.env_key=M.data.property_key,delete M.data.property_key),et.setLevel(M.debug?"debug":"warn"),W.getPlayheadTime=M.getPlayheadTime,W.getStateData=M.getStateData||function(){return{}},W.getAdData=M.getAdData||function(){},W.minimumRebufferDuration=M.minimumRebufferDuration,W.sustainedRebufferThreshold=M.sustainedRebufferThreshold,W.playbackHeartbeatTime=M.playbackHeartbeatTime,W.disableRebufferTracking=M.disableRebufferTracking,W.disableRebufferTracking&&W.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),W.disablePlayheadRebufferTracking=M.disablePlayheadRebufferTracking,W.errorTranslator=M.errorTranslator,W.playbackEventDispatcher=new eP(b,M.data.env_key,M),W.data={player_instance_id:i(),mux_sample_rate:M.sampleRate,beacon_domain:M.beaconCollectionDomain||M.beaconDomain},W.data.view_sequence_number=1,W.data.player_sequence_number=1,W.oldEmit=W.emit,W.emit=function(b,g){g=Object.assign({viewer_time:this.mux.utils.now()},g),this.oldEmit(b,g)};var N,W,K=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"))}).bind(yt(W));W.on("viewinit",function(b,g){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,g),this._initializeViewData(),this.one("play",K),this.one("adbreakstart",K)});var Y=(function(b){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",b)}).bind(yt(W));if(W.on("videochange",function(b,g){Y(g)}),W.on("programchange",function(b,g){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),Y(Object.assign(g,{view_program_changed:!0})),K(),this.emit("play"),this.emit("playing")}),W.on("fragmentchange",function(b,g){this.currentFragmentPDT=g.currentFragmentPDT,this.currentFragmentStart=g.currentFragmentStart}),W.on("destroy",W.destroy),"undefined"!=typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var d=function(){var b=void 0!==W.data.view_start;W.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,b&&W.mux.WINDOW_HIDDEN&&(W.data.player_is_paused||W.emit("hb"))};window.addEventListener("visibilitychange",d,!1);var c=function(b){b.persisted||W.destroy()};window.addEventListener("pagehide",c,!1),W.on("destroy",function(){window.removeEventListener("visibilitychange",d),window.removeEventListener("pagehide",c)})}return W.on("playerready",function(b,g){Object.assign(this.data,g)}),eG.forEach(function(b){W.on(b,function(g,M){0!==b.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,M),this._sanitizeData()}),W.on("after"+b,function(){("error"!==b||this.errorTracker.viewErrored)&&this.send(b)})}),W.on("viewend",function(b,g){Object.assign(W.data,g)}),W.one("playerready",function(b){var g=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=g-this.data.player_init_time),!this.mux.PLAYER_TRACKED&&this.NAVIGATION_START&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.DOM_CONTENT_LOADED_EVENT_END)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.DOM_CONTENT_LOADED_EVENT_END||1/0)-this.NAVIGATION_START)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),W.longResumeTracker=new eB(yt(W)),W.errorTracker=new ec(yt(W)),new ek(yt(W)),W.seekingTracker=new ef(yt(W)),W.playheadTime=new ep(yt(W)),W.playbackHeartbeat=new eu(yt(W)),new eg(yt(W)),W.watchTimeTracker=new em(yt(W)),new eh(yt(W)),W.adTracker=new ey(yt(W)),new ev(yt(W)),new e_(yt(W)),new eb(yt(W)),new eA(yt(W)),new eU(yt(W)),M.hlsjs&&W.addHLSJS(M),M.dashjs&&W.addDashJS(M),W.emit("viewinit",M.data),W}return g=o,M=[{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(b){if(this.data.view_id){var g=Object.assign({},this.data);if(void 0===g.video_source_is_live&&(g.player_source_duration===1/0||g.video_source_duration===1/0?g.video_source_is_live=!0:(g.player_source_duration>0||g.video_source_duration>0)&&(g.video_source_is_live=!1)),g.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(b){g[b]=void 0}),g.video_source_url=g.video_source_url||g.player_source_url,g.video_source_url){var M=ft(v(g.video_source_url),2),N=M[0],B=M[1];g.video_source_domain=B,g.video_source_hostname=N}delete g.ad_request_id,this.playbackEventDispatcher.send(b,g),this.data.view_sequence_number++,this.data.player_sequence_number++,this._restartHeartBeat(),"viewend"===b&&delete this.data.view_id}}},{key:"_updateStateData",value:function(){Object.assign(this.data,this.getStateData()),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var b=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(g){var M=parseInt(b.data[g],10);b.data[g]=isNaN(M)?void 0:M}),["player_source_url","video_source_url"].forEach(function(g){if(b.data[g]){var M=b.data[g].toLowerCase();0!==M.indexOf("data:")&&0!==M.indexOf("blob:")||(b.data[g]="MSE style URL")}})}},{key:"_resetVideoData",value:function(b,g){var M=this;Object.keys(this.data).forEach(function(b){0===b.indexOf("video_")&&delete M.data[b]})}},{key:"_resetViewData",value:function(){var b=this;Object.keys(this.data).forEach(function(g){0===g.indexOf("view_")&&delete b.data[g]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(b,g){delete this.data.player_error_code,delete this.data.player_error_message}},{key:"_initializeViewData",value:function(){var b=this,g=this.data.view_id=i(),r=function(){g===b.data.view_id&&y(b.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",r):r()}},{key:"_restartHeartBeat",value:function(){var b=this;window.clearTimeout(this._heartBeatTimeout),this.errorTracker.viewErrored||(this._heartBeatTimeout=window.setTimeout(function(){b.data.player_is_paused||b.emit("hb")},1e4))}},{key:"addHLSJS",value:function(b){b.hlsjs?this.hlsjs?this.mux.log.warn("An instance of HLS.js is already being monitored for this player."):(this.hlsjs=b.hlsjs,function(b,g,M){var N=arguments.length>4?arguments[4]:void 0,B=b.log,W=b.utils.secondsToMs,o=function(b){var g,M=parseInt(N.version);return 1===M&&null!==b.programDateTime&&(g=b.programDateTime),0===M&&null!==b.pdt&&(g=b.pdt),g};if(en.exists()){var s=function(M,N){return b.emit(g,M,N)},u=function(b,g){var M=g.levels,N=g.audioTracks,B=g.url,W=g.stats,K=g.networkDetails,Y=g.sessionData,et={},er={};M.forEach(function(b,g){et[g]={width:b.width,height:b.height,bitrate:b.bitrate,attrs:b.attrs}}),N.forEach(function(b,g){er[g]={name:b.name,language:b.lang,bitrate:b.bitrate}});var en=x(W),es=en.bytesLoaded,eo=en.requestStart,el=en.responseStart,ed=en.responseEnd;s("requestcompleted",O(O({},k(Y)),{},{request_event_type:b,request_bytes_loaded:es,request_start:eo,request_response_start:el,request_response_end:ed,request_type:"manifest",request_hostname:h(B),request_response_headers:P(K),request_rendition_lists:{media:et,audio:er,video:{}}}))};M.on(N.Events.MANIFEST_LOADED,u);var l=function(b,g){var M=g.details,N=g.level,B=g.networkDetails,K=x(g.stats),Y=K.bytesLoaded,et=K.requestStart,er=K.responseStart,en=K.responseEnd,es=M.fragments[M.fragments.length-1],eo=o(es)+W(es.duration);s("requestcompleted",{request_event_type:b,request_bytes_loaded:Y,request_start:et,request_response_start:er,request_response_end:en,request_current_level:N,request_type:"manifest",request_hostname:h(M.url),request_response_headers:P(B),video_holdback:M.holdBack&&W(M.holdBack),video_part_holdback:M.partHoldBack&&W(M.partHoldBack),video_part_target_duration:M.partTarget&&W(M.partTarget),video_target_duration:M.targetduration&&W(M.targetduration),video_source_is_live:M.live,player_manifest_newest_program_time:isNaN(eo)?void 0:eo})};M.on(N.Events.LEVEL_LOADED,l);var d=function(b,g){var M=g.details,N=g.networkDetails,B=x(g.stats);s("requestcompleted",{request_event_type:b,request_bytes_loaded:B.bytesLoaded,request_start:B.requestStart,request_response_start:B.responseStart,request_response_end:B.responseEnd,request_type:"manifest",request_hostname:h(M.url),request_response_headers:P(N)})};M.on(N.Events.AUDIO_TRACK_LOADED,d);var c=function(b,g){var N=g.stats,B=g.networkDetails,W=g.frag,K=x(N=N||W.stats),Y=K.bytesLoaded,et=K.requestStart,er=K.responseStart,en=K.responseEnd,es=B?P(B):void 0,eo={request_event_type:b,request_bytes_loaded:Y,request_start:et,request_response_start:er,request_response_end:en,request_hostname:B?h(B.responseURL):void 0,request_id:es?T(es):void 0,request_response_headers:es,request_media_duration:W.duration,request_url:null==B?void 0:B.responseURL};"main"===W.type?(eo.request_type="media",eo.request_current_level=W.level,eo.request_video_width=(M.levels[W.level]||{}).width,eo.request_video_height=(M.levels[W.level]||{}).height,eo.request_labeled_bitrate=(M.levels[W.level]||{}).bitrate):eo.request_type=W.type,s("requestcompleted",eo)};M.on(N.Events.FRAG_LOADED,c);var f=function(b,g){var M=g.frag,N=M.start;s("fragmentchange",{currentFragmentPDT:o(M),currentFragmentStart:W(N)})};M.on(N.Events.FRAG_CHANGED,f);var p=function(b,g){var M,B=g.type,W=g.details,K=g.response,Y=g.fatal,et=g.frag,er=g.networkDetails,en=(null==et?void 0:et.url)||g.url||"",es=er?P(er):void 0;W!==N.ErrorDetails.MANIFEST_LOAD_ERROR&&W!==N.ErrorDetails.MANIFEST_LOAD_TIMEOUT&&W!==N.ErrorDetails.FRAG_LOAD_ERROR&&W!==N.ErrorDetails.FRAG_LOAD_TIMEOUT&&W!==N.ErrorDetails.LEVEL_LOAD_ERROR&&W!==N.ErrorDetails.LEVEL_LOAD_TIMEOUT&&W!==N.ErrorDetails.AUDIO_TRACK_LOAD_ERROR&&W!==N.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT&&W!==N.ErrorDetails.SUBTITLE_LOAD_ERROR&&W!==N.ErrorDetails.SUBTITLE_LOAD_TIMEOUT&&W!==N.ErrorDetails.KEY_LOAD_ERROR&&W!==N.ErrorDetails.KEY_LOAD_TIMEOUT||s("requestfailed",{request_error:W,request_url:en,request_hostname:h(en),request_id:es?T(es):void 0,request_type:W===N.ErrorDetails.FRAG_LOAD_ERROR||W===N.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":W===N.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||W===N.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":W===N.ErrorDetails.SUBTITLE_LOAD_ERROR||W===N.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":W===N.ErrorDetails.KEY_LOAD_ERROR||W===N.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==K?void 0:K.code,request_error_text:null==K?void 0:K.text}),Y&&s("error",{player_error_code:B,player_error_message:W,player_error_context:"".concat(en?"url: ".concat(en,"\n"):"")+"".concat(K&&(K.code||K.text)?"response: ".concat(K.code,", ").concat(K.text,"\n"):"")+"".concat(g.reason?"failure reason: ".concat(g.reason,"\n"):"")+"".concat(g.level?"level: ".concat(g.level,"\n"):"")+"".concat(g.parent?"parent stream controller: ".concat(g.parent,"\n"):"")+"".concat(g.buffer?"buffer length: ".concat(g.buffer,"\n"):"")+"".concat(g.error?"error: ".concat(g.error,"\n"):"")+"".concat(g.event?"event: ".concat(g.event,"\n"):"")+"".concat(g.err?"error message: ".concat(null===(M=g.err)||void 0===M?void 0:M.message,"\n"):"")})};M.on(N.Events.ERROR,p);var _=function(b,g){var M=g.frag,N=M&&M._url||"";s("requestcanceled",{request_event_type:b,request_url:N,request_type:"media",request_hostname:h(N)})};M.on(N.Events.FRAG_LOAD_EMERGENCY_ABORTED,_);var v=function(b,g){var N=g.level,W=M.levels[N];if(W&&W.attrs&&W.attrs.BANDWIDTH){var K,Y=W.attrs.BANDWIDTH,et=parseFloat(W.attrs["FRAME-RATE"]);isNaN(et)||(K=et),Y?s("renditionchange",{video_source_fps:K,video_source_bitrate:Y,video_source_width:W.width,video_source_height:W.height,video_source_rendition_name:W.name,video_source_codec:null==W?void 0:W.videoCodec}):B.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};M.on(N.Events.LEVEL_SWITCHED,v),M._stopMuxMonitor=function(){M.off(N.Events.MANIFEST_LOADED,u),M.off(N.Events.LEVEL_LOADED,l),M.off(N.Events.AUDIO_TRACK_LOADED,d),M.off(N.Events.FRAG_LOADED,c),M.off(N.Events.FRAG_CHANGED,f),M.off(N.Events.ERROR,p),M.off(N.Events.FRAG_LOAD_EMERGENCY_ABORTED,_),M.off(N.Events.LEVEL_SWITCHED,v),M.off(N.Events.DESTROYING,M._stopMuxMonitor),delete M._stopMuxMonitor},M.on(N.Events.DESTROYING,M._stopMuxMonitor)}else B.warn("performance timing not supported. Not tracking HLS.js.")}(this.mux,this.id,b.hlsjs,{},b.Hls||window.Hls)):this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")}},{key:"removeHLSJS",value:function(){var b;this.hlsjs&&((b=this.hlsjs)&&"function"==typeof b._stopMuxMonitor&&b._stopMuxMonitor(),this.hlsjs=void 0)}},{key:"addDashJS",value:function(b){b.dashjs?this.dashjs?this.mux.log.warn("An instance of Dash.js is already being monitored for this player."):(this.dashjs=b.dashjs,function(b,g,M){var N=b.log;if(M&&M.on){var B=j(M),i=function(M,N){return b.emit(g,M,N)},o=function(b){var g=b.type,M=(b.data||{}).url;i("requestcompleted",{request_event_type:g,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:h(M),request_url:M})};M.on("manifestLoaded",o);var W={},u=function(b){if("function"!=typeof b.getRequests)return null;var g=b.getRequests({state:"executed"});return 0===g.length?null:g[g.length-1]},d=function(b){var g=b.type,N=b.chunk,B=b.request,K=(N||{}).mediaInfo||{},Y=K.type,et=K.bitrateList,er={};(et=et||[]).forEach(function(b,g){er[g]={},er[g].width=b.width,er[g].height=b.height,er[g].bitrate=b.bandwidth,er[g].attrs={}}),"video"===Y?W.video=er:"audio"===Y?W.audio=er:W.media=er;var en=R(B,M),es=en.requestStart,eo=en.requestResponseStart,el=en.requestResponseEnd,ed=en.requestResponseHeaders,eu=en.requestMediaDuration,ec=en.requestHostname,em=en.requestUrl;i("requestcompleted",{request_event_type:g,request_start:es,request_response_start:eo,request_response_end:el,request_bytes_loaded:-1,request_type:Y+"_init",request_response_headers:ed,request_hostname:ec,request_id:en.requestId,request_url:em,request_media_duration:eu,request_rendition_lists:W})};B>=4?M.on("initFragmentLoaded",d):M.on("initFragmentLoaded",function(b){var g=b.type,M=b.fragmentModel,N=b.chunk;d({type:g,request:u(M),chunk:N})});var f=function(b){var g=b.type,N=b.chunk,B=b.request,W=N||{},K=W.mediaInfo,Y=W.start,et=(K||{}).type,er=R(B,M),en=er.requestStart,es=er.requestResponseStart,eo=er.requestResponseEnd,el=er.requestBytesLoaded,ed=er.requestResponseHeaders,eu=er.requestMediaDuration,ec=er.requestHostname,em=er.requestUrl,eh=er.requestId,ep=I(et,M),e_=ep.currentLevel,ev=ep.renditionWidth,eb=ep.renditionHeight;i("requestcompleted",{request_event_type:g,request_start:en,request_response_start:es,request_response_end:eo,request_bytes_loaded:el,request_type:et,request_response_headers:ed,request_hostname:ec,request_id:eh,request_url:em,request_media_start_time:Y,request_media_duration:eu,request_current_level:e_,request_labeled_bitrate:ep.renditionBitrate,request_video_width:ev,request_video_height:eb})};B>=4?M.on("mediaFragmentLoaded",f):M.on("mediaFragmentLoaded",function(b){var g=b.type,M=b.fragmentModel,N=b.chunk;f({type:g,request:u(M),chunk:N})});var K={video:void 0,audio:void 0,totalBitrate:void 0},_=function(){if(K.video&&"number"==typeof K.video.bitrate){if(K.video.width&&K.video.height){var b=K.video.bitrate;return K.audio&&"number"==typeof K.audio.bitrate&&(b+=K.audio.bitrate),b!==K.totalBitrate?(K.totalBitrate=b,{video_source_bitrate:b,video_source_height:K.video.height,video_source_width:K.video.width,video_source_codec:L(K.video.codec)}):void 0}N.warn("have bitrate info for video but missing width/height")}},v=function(b,g,B){if("number"==typeof b.newQuality){var W=b.mediaType;if("audio"===W||"video"===W){var Y=M.getBitrateInfoListFor(W).find(function(g){return g.qualityIndex===b.newQuality});if(Y&&"number"==typeof Y.bitrate){K[W]=S(S({},Y),{},{codec:M.getCurrentTrackFor(W).codec});var et=_();et&&i("renditionchange",et)}else N.warn("missing bitrate info for ".concat(W))}}else N.warn("missing evt.newQuality in qualityChangeRendered event",b)};M.on("qualityChangeRendered",v);var m=function(b){var g=b.request,M=b.mediaType;i("requestcanceled",{request_event_type:(g=g||{}).type+"_"+g.action,request_url:g.url,request_type:M,request_hostname:h(g.url)})};M.on("fragmentLoadingAbandoned",m);var y=function(b){var g,M,N=b.error,B=(null==N||null===(g=N.data)||void 0===g?void 0:g.request)||{},W=(null==N||null===(M=N.data)||void 0===M?void 0:M.response)||{};27===(null==N?void 0:N.code)&&i("requestfailed",{request_error:B.type+"_"+B.action,request_url:B.url,request_hostname:h(B.url),request_type:B.mediaType,request_error_code:W.status,request_error_text:W.statusText});var K="".concat(null!=B&&B.url?"url: ".concat(B.url,"\n"):"")+"".concat(null!=W&&W.status||null!=W&&W.statusText?"response: ".concat(null==W?void 0:W.status,", ").concat(null==W?void 0:W.statusText,"\n"):"");i("error",{player_error_code:null==N?void 0:N.code,player_error_message:null==N?void 0:N.message,player_error_context:K})};M.on("error",y),M._stopMuxMonitor=function(){M.off("manifestLoaded",o),M.off("initFragmentLoaded",d),M.off("mediaFragmentLoaded",f),M.off("qualityChangeRendered",v),M.off("error",y),M.off("fragmentLoadingAbandoned",m),delete M._stopMuxMonitor}}else N.warn("Invalid dash.js player reference. Monitoring blocked.")}(this.mux,this.id,b.dashjs)):this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")}},{key:"removeDashJS",value:function(){var b;this.dashjs&&((b=this.dashjs)&&"function"==typeof b._stopMuxMonitor&&b._stopMuxMonitor(),this.dashjs=void 0)}}],_t(g.prototype,M),N&&_t(g,N),Object.defineProperty(g,"prototype",{writable:!1}),o}(ed),eH=M(153),eV=M.n(eH);function Ot(b){return(Ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(b){return typeof b}:function(b){return b&&"function"==typeof Symbol&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b})(b)}function Dt(b,g){return function(b){if(Array.isArray(b))return b}(b)||function(b,g){var M=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=M){var N,B,W=[],K=!0,Y=!1;try{for(M=M.call(b);!(K=(N=M.next()).done)&&(W.push(N.value),!g||W.length!==g);K=!0);}catch(b){Y=!0,B=b}finally{try{K||null==M.return||M.return()}finally{if(Y)throw B}}return W}}(b,g)||function(b,g){if(b){if("string"==typeof b)return xt(b,g);var M=Object.prototype.toString.call(b).slice(8,-1);return"Object"===M&&b.constructor&&(M=b.constructor.name),"Map"===M||"Set"===M?Array.from(b):"Arguments"===M||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M)?xt(b,g):void 0}}(b,g)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function xt(b,g){(null==g||g>b.length)&&(g=b.length);for(var M=0,N=Array(g);M<g;M++)N[M]=b[M];return N}var eF,eq,e$,ej,eK,eY,eZ,ez,eQ,eX,eJ,e0,e1,e2,e3,e5,e4,e9,e8,e7,e6,tt,tr,tn,ts,to=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],tl={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"};B()&&B().WeakMap&&(ts=new WeakMap);var Ht=function(b){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(b),this.manifest};Ht.prototype.process=function(b){var g;for(this.buffer+=b,g=this.buffer.indexOf("\n");g>-1;g=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,g)),this.buffer=this.buffer.substring(g+1)},Ht.prototype.processLine=function(b){var g=b.indexOf(":"),M=Qt(b,g),N=M[0],B=2===M.length?Bt(M[1]):void 0;if("#"!==N[0])this.currentUri.uri=N,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(N){case"#EXT-X-TARGETDURATION":if(!isFinite(B)||B<0)return;this.manifest.targetDuration=B,this.setHoldBack();break;case"#EXT-X-PART-INF":Mt(this.manifest,M),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case"#EXT-X-SERVER-CONTROL":Mt(this.manifest,M),this.setHoldBack();break;case"#EXTINF":0===B?this.currentUri.duration=.01:B>0&&(this.currentUri.duration=B);break;case"#EXT-X-PROGRAM-DATE-TIME":var W=new Date(B);this.manifest.dateTimeString||(this.manifest.dateTimeString=B,this.manifest.dateTimeObject=W),this.currentUri.dateTimeString=B,this.currentUri.dateTimeObject=W;break;case"#EXT-X-VERSION":Mt(this.manifest,M);break;case"#EXT-X-SESSION-DATA":var K=k(Vt(M[1]));Object.assign(this.manifest.sessionData,K)}},Ht.prototype.setHoldBack=function(){var b=this.manifest,g=b.serverControl,M=b.targetDuration,N=b.partTargetDuration;if(g){var B="holdBack",W="partHoldBack",K=M&&3*M,Y=N&&2*N;M&&!g.hasOwnProperty(B)&&(g[B]=K),K&&g[B]<K&&(g[B]=K),N&&!g.hasOwnProperty(W)&&(g[W]=3*N),N&&g[W]<Y&&(g[W]=Y)}};var Mt=function(b,g){var M,N=Ut(g[0].replace("#EXT-X-",""));Wt(g[1])?(M={},M=Object.assign(Gt(g[1]),M)):M=Bt(g[1]),b[N]=M},Ut=function(b){return b.toLowerCase().replace(/-(\w)/g,function(b){return b[1].toUpperCase()})},Bt=function(b){if("yes"===b.toLowerCase()||"no"===b.toLowerCase())return"yes"===b.toLowerCase();var g=-1!==b.indexOf(":")?b:parseFloat(b);return isNaN(g)?b:g},Ft=function(b){var g={},M=b.split("=");return M.length>1&&(g[Ut(M[0])]=Bt(M[1])),g},Gt=function(b){for(var g=b.split(","),M={},N=0;g.length>N;N++)M=Object.assign(Ft(g[N]),M);return M},Wt=function(b){return b.indexOf("=")>-1},Qt=function(b,g){return -1===g?[b]:[b.substring(0,g),b.substring(g+1)]},Vt=function(b){var g={};if(b){var M=b.search(",");return[b.slice(0,M),b.slice(M+1)].forEach(function(b,M){for(var N=b.replace(/['"]+/g,"").split("="),B=0;B<N.length;B++)"DATA-ID"===N[B]&&(g["DATA-ID"]=N[1-B]),"VALUE"===N[B]&&(g.VALUE=N[1-B])}),{data:g}}},td={safeCall:function(b,g,M,N){var B=N;if(b&&"function"==typeof b[g])try{B=b[g].apply(b,M)}catch(b){et.info("safeCall error",b)}return B},safeIncrement:y,getComputedStyle:function(b,g){var M;if(b&&g&&B()&&"function"==typeof B().getComputedStyle)return ts&&ts.has(b)&&(M=ts.get(b)),M||(M=B().getComputedStyle(b,null),ts&&ts.set(b,M)),M.getPropertyValue(g)},secondsToMs:function(b){return Math.floor(1e3*b)},assign:Object.assign,headersStringToObject:w,cdnHeadersToRequestId:T,extractHostnameAndDomain:v,extractHostname:h,manifestParser:Ht,generateShortID:o,generateUUID:i,now:er.now};function Yt(b,g){return function(b){if(Array.isArray(b))return b}(b)||function(b,g){var M=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=M){var N,B,W=[],K=!0,Y=!1;try{for(M=M.call(b);!(K=(N=M.next()).done)&&(W.push(N.value),!g||W.length!==g);K=!0);}catch(b){Y=!0,B=b}finally{try{K||null==M.return||M.return()}finally{if(Y)throw B}}return W}}(b,g)||function(b,g){if(b){if("string"==typeof b)return Xt(b,g);var M=Object.prototype.toString.call(b).slice(8,-1);return"Object"===M&&b.constructor&&(M=b.constructor.name),"Map"===M||"Set"===M?Array.from(b):"Arguments"===M||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M)?Xt(b,g):void 0}}(b,g)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Xt(b,g){(null==g||g>b.length)&&(g=b.length);for(var M=0,N=Array(g);M<g;M++)N[M]=b[M];return N}var tu={},Zt=function e(b){var g=arguments;"string"==typeof b?e.hasOwnProperty(b)?B().setTimeout(function(){g=Array.prototype.splice.call(g,1),e[b].apply(null,g)},0):et.warn("`"+b+"` is an unknown task"):"function"==typeof b?B().setTimeout(function(){b(e)},0):et.warn("`"+b+"` is invalid.")},tc={loaded:er.now(),NAME:"mux-embed",VERSION:"4.30.0",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(b,g){return function(b,g,M){var N=Dt(u(g),3),B=N[0],W=N[1],K=N[2],Y=b.log,et=b.utils.getComputedStyle,er=b.utils.secondsToMs;if(!B)return Y.error("No element was found with the `"+W+"` query selector.");if("video"!==K&&"audio"!==K)return Y.error("The element of `"+W+"` was not a media element.");B.mux&&(B.mux.destroy(),delete B.mux,Y.warn("Already monitoring this video element, replacing existing event listeners")),(M=Object.assign({automaticErrorTracking:!0},M)).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:b.VERSION},M.data),M.getPlayheadTime=function(){return er(B.currentTime)},M.getStateData=function(){var b,g,N=this.hlsjs&&this.hlsjs.url,W=this.dashjs&&Ot("function"===this.dashjs.getSource)&&this.dashjs.getSource(),K={player_is_paused:B.paused,player_playhead_time:er(B.currentTime),player_width:parseInt(et(B,"width")),player_height:parseInt(et(B,"height")),player_autoplay_on:B.autoplay,player_preload_on:B.preload,player_language_code:B.lang,player_is_fullscreen:eV()&&!!(eV().fullscreenElement||eV().webkitFullscreenElement||eV().mozFullScreenElement||eV().msFullscreenElement),video_poster_url:B.poster,video_source_url:N||W||B.currentSrc,video_source_duration:er(B.duration),video_source_height:B.videoHeight,video_source_width:B.videoWidth,view_dropped_frame_count:null===(b=B)||void 0===b||null===(g=b.getVideoPlaybackQuality)||void 0===g?void 0:g.call(b).droppedVideoFrames},Y=M.getPlayheadTime();if(B.getStartDate&&Y>0){var en=B.getStartDate();if(en&&"function"==typeof en.getTime&&en.getTime()){var es=en.getTime();if(K.player_program_time=es+Y,B.seekable.length>0){var eo=es+B.seekable.end(B.seekable.length-1);K.player_live_edge_program_time=eo}}}return K},B.mux=B.mux||{},B.mux.deleted=!1,B.mux.emit=function(g,M){b.emit(W,g,M)};var c=function(){Y.error("The monitor for this video element has already been destroyed.")};B.mux.destroy=function(){Object.keys(B.mux.listeners).forEach(function(b){B.removeEventListener(b,B.mux.listeners[b],!1)}),delete B.mux.listeners,B.mux.destroy=c,B.mux.swapElement=c,B.mux.emit=c,B.mux.addHLSJS=c,B.mux.addDashJS=c,B.mux.removeHLSJS=c,B.mux.removeDashJS=c,B.mux.deleted=!0,b.emit(W,"destroy")},B.mux.swapElement=function(g){var M=Dt(u(g),3),N=M[0],W=M[1],K=M[2];return N?"video"!==K&&"audio"!==K?b.log.error("The element of `"+W+"` was not a media element."):(N.muxId=B.muxId,delete B.muxId,N.mux=N.mux||{},N.mux.listeners=Object.assign({},B.mux.listeners),delete B.mux.listeners,Object.keys(N.mux.listeners).forEach(function(b){B.removeEventListener(b,N.mux.listeners[b],!1),N.addEventListener(b,N.mux.listeners[b],!1)}),N.mux.swapElement=B.mux.swapElement,N.mux.destroy=B.mux.destroy,delete B.mux,void(B=N)):b.log.error("No element was found with the `"+W+"` query selector.")},B.mux.addHLSJS=function(g){b.addHLSJS(W,g)},B.mux.addDashJS=function(g){b.addDashJS(W,g)},B.mux.removeHLSJS=function(){b.removeHLSJS(W)},B.mux.removeDashJS=function(){b.removeDashJS(W)},b.init(W,M),b.emit(W,"playerready"),B.paused||(b.emit(W,"play"),B.readyState>2&&b.emit(W,"playing")),B.mux.listeners={},to.forEach(function(g){("error"!==g||M.automaticErrorTracking)&&(B.mux.listeners[g]=function(){var M={};if("error"===g){if(!B.error||1===B.error.code)return;M.player_error_code=B.error.code,M.player_error_message=tl[B.error.code]||B.error.message}b.emit(W,g,M)},B.addEventListener(g,B.mux.listeners[g],!1))})}(Zt,b,g)},destroyMonitor:function(b){var g=Yt(u(b),1)[0];g&&g.mux&&"function"==typeof g.mux.destroy?g.mux.destroy():et.error("A video element monitor for `"+b+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(b,g){var M=s(b);tu[M]?tu[M].addHLSJS(g):et.error("A monitor for `"+M+"` has not been initialized.")},addDashJS:function(b,g){var M=s(b);tu[M]?tu[M].addDashJS(g):et.error("A monitor for `"+M+"` has not been initialized.")},removeHLSJS:function(b){var g=s(b);tu[g]?tu[g].removeHLSJS():et.error("A monitor for `"+g+"` has not been initialized.")},removeDashJS:function(b){var g=s(b);tu[g]?tu[g].removeDashJS():et.error("A monitor for `"+g+"` has not been initialized.")},init:function(b,g){p()&&g&&g.respectDoNotTrack&&et.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var M=s(b);tu[M]=new eW(Zt,M,g)},emit:function(b,g,M){var N=s(b);tu[N]?(tu[N].emit(g,M),"destroy"===g&&delete tu[N]):et.error("A monitor for `"+N+"` has not been initialized.")},checkDoNotTrack:p,log:et,utils:td,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(Zt,tc),void 0!==B()&&"function"==typeof B().addEventListener&&B().addEventListener("pagehide",function(b){b.persisted||(Zt.WINDOW_UNLOADING=!0)},!1);var tm=Zt},655:function(b,g,M){var N,B;function i(b){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(b){return typeof b}:function(b){return b&&"function"==typeof Symbol&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b})(b);/*!
 * JavaScript Cookie v2.1.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */}!function(W){var K=!1;if(void 0===(B="function"==typeof(N=W)?N.call(g,M,g,b):N)||(b.exports=B),K=!0,"object"===i(g)&&(b.exports=W(),K=!0),!K){var Y=window.Cookies,et=window.Cookies=W();et.noConflict=function(){return window.Cookies=Y,et}}}(function(){var e=function(){for(var b=0,g={};b<arguments.length;b++){var M=arguments[b];for(var N in M)g[N]=M[N]}return g};return function t(b){function a(g,M,N){var B;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(N=e({path:"/"},a.defaults,N)).expires){var W=new Date;W.setMilliseconds(W.getMilliseconds()+864e5*N.expires),N.expires=W}try{B=JSON.stringify(M),/^[\{\[]/.test(B)&&(M=B)}catch(b){}return M=b.write?b.write(M,g):encodeURIComponent(String(M)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),g=(g=(g=encodeURIComponent(String(g))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=[g,"=",M,N.expires?"; expires="+N.expires.toUTCString():"",N.path?"; path="+N.path:"",N.domain?"; domain="+N.domain:"",N.secure?"; secure":""].join("")}g||(B={});for(var K=document.cookie?document.cookie.split("; "):[],Y=/(%[0-9A-Z]{2})+/g,et=0;et<K.length;et++){var er=K[et].split("="),en=er.slice(1).join("=");'"'===en.charAt(0)&&(en=en.slice(1,-1));try{var es=er[0].replace(Y,decodeURIComponent);if(en=b.read?b.read(en,es):b(en,es)||en.replace(Y,decodeURIComponent),this.json)try{en=JSON.parse(en)}catch(b){}if(g===es){B=en;break}g||(B[es]=en)}catch(b){}}return B}}return a.set=a,a.get=function(b){return a.call(a,b)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(b,g){a(b,"",e(g,{expires:-1}))},a.withConverter=t,a}(function(){})})},153:function(b,g,M){var N,B=void 0!==M.g?M.g:"undefined"!=typeof window?window:{},W=M(558);"undefined"!=typeof document?N=document:(N=B["__GLOBAL_DOCUMENT_CACHE@4"])||(N=B["__GLOBAL_DOCUMENT_CACHE@4"]=W),b.exports=N},48:function(b,g,M){var N;N="undefined"!=typeof window?window:void 0!==M.g?M.g:"undefined"!=typeof self?self:{},b.exports=N},640:function(b,g,M){var N,B;void 0===(B="function"==typeof(N=function(){var e=function(){},b="undefined",g=typeof window!==b&&typeof window.navigator!==b&&/Trident\/|MSIE /.test(window.navigator.userAgent),M=["trace","debug","info","warn","error"];function n(b,g){var M=b[g];if("function"==typeof M.bind)return M.bind(b);try{return Function.prototype.bind.call(M,b)}catch(g){return function(){return Function.prototype.apply.apply(M,[b,arguments])}}}function i(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function o(M){return"debug"===M&&(M="log"),typeof console!==b&&("trace"===M&&g?i:void 0!==console[M]?n(console,M):void 0!==console.log?n(console,"log"):e)}function s(b,g){for(var N=0;N<M.length;N++){var B=M[N];this[B]=N<b?e:this.methodFactory(B,b,g)}this.log=this.debug}function u(g,M,N){return function(){typeof console!==b&&(s.call(this,M,N),this[g].apply(this,arguments))}}function l(b,g,M){return o(b)||u.apply(this,arguments)}function d(g,N,B){var W,K=this;N=null==N?"WARN":N;var Y="loglevel";function d(g){var N=(M[g]||"silent").toUpperCase();if(typeof window!==b&&Y){try{return void(window.localStorage[Y]=N)}catch(b){}try{window.document.cookie=encodeURIComponent(Y)+"="+N+";"}catch(b){}}}function c(){var g;if(typeof window!==b&&Y){try{g=window.localStorage[Y]}catch(b){}if(typeof g===b)try{var M=window.document.cookie,N=M.indexOf(encodeURIComponent(Y)+"=");-1!==N&&(g=/^([^;]+)/.exec(M.slice(N))[1])}catch(b){}return void 0===K.levels[g]&&(g=void 0),g}}function f(){if(typeof window!==b&&Y){try{return void window.localStorage.removeItem(Y)}catch(b){}try{window.document.cookie=encodeURIComponent(Y)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(b){}}}"string"==typeof g?Y+=":"+g:"symbol"==typeof g&&(Y=void 0),K.name=g,K.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},K.methodFactory=B||l,K.getLevel=function(){return W},K.setLevel=function(M,N){if("string"==typeof M&&void 0!==K.levels[M.toUpperCase()]&&(M=K.levels[M.toUpperCase()]),!("number"==typeof M&&M>=0&&M<=K.levels.SILENT))throw"log.setLevel() called with invalid level: "+M;if(W=M,!1!==N&&d(M),s.call(K,M,g),typeof console===b&&M<K.levels.SILENT)return"No console available for logging"},K.setDefaultLevel=function(b){N=b,c()||K.setLevel(b,!1)},K.resetLevel=function(){K.setLevel(N,!1),f()},K.enableAll=function(b){K.setLevel(K.levels.TRACE,b)},K.disableAll=function(b){K.setLevel(K.levels.SILENT,b)};var et=c();null==et&&(et=N),K.setLevel(et,!1)}var N=new d,B={};N.getLogger=function(b){if("symbol"!=typeof b&&"string"!=typeof b||""===b)throw TypeError("You must supply a name when creating a logger.");var g=B[b];return g||(g=B[b]=new d(b,N.getLevel(),N.methodFactory)),g};var W=typeof window!==b?window.log:void 0;return N.noConflict=function(){return typeof window!==b&&window.log===N&&(window.log=W),N},N.getLoggers=function(){return B},N.default=N,N})?N.call(g,M,g,b):N)||(b.exports=B)},375:function(b,g){"use strict";var M=Object.prototype.hasOwnProperty;function a(b){try{return decodeURIComponent(b.replace(/\+/g," "))}catch(b){return null}}function n(b){try{return encodeURIComponent(b)}catch(b){return null}}g.stringify=function(b,g){var N,B,W=[];for(B in"string"!=typeof(g=g||"")&&(g="?"),b)if(M.call(b,B)){if((N=b[B])||null!=N&&!isNaN(N)||(N=""),B=n(B),N=n(N),null===B||null===N)continue;W.push(B+"="+N)}return W.length?g+W.join("&"):""},g.parse=function(b){for(var g,M=/([^=?#&]+)=?([^&]*)/g,N={};g=M.exec(b);){var B=a(g[1]),W=a(g[2]);null===B||null===W||B in N||(N[B]=W)}return N}},558:function(){}},g={};function r(M){var N=g[M];if(void 0!==N)return N.exports;var B=g[M]={exports:{}};return b[M].call(B.exports,B,B.exports,r),B.exports}return r.n=function(b){var g=b&&b.__esModule?function(){return b.default}:function(){return b};return r.d(g,{a:g}),g},r.d=function(b,g){for(var M in g)r.o(g,M)&&!r.o(b,M)&&Object.defineProperty(b,M,{enumerable:!0,get:g[M]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(b){if("object"==typeof window)return window}}(),r.o=function(b,g){return Object.prototype.hasOwnProperty.call(b,g)},r(80)}()},75769:function(b,g,M){"use strict";let N,B;M.r(g),M.d(g,{MaxResolution:function(){return em},MediaError:function(){return er},MinResolution:function(){return eh},RenditionOrder:function(){return ep},default:function(){return uM}});var W=M(2265),K=M(87545),Y=M(52513).Z,et=class v extends Error{constructor(b,g=v.MEDIA_ERR_CUSTOM,M,N){var B;super(b),this.name="MediaError",this.code=g,this.context=N,this.fatal=null!=M?M:g>=v.MEDIA_ERR_NETWORK&&g<=v.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(B=v.defaultMessages[this.code])?B:"")}};et.MEDIA_ERR_ABORTED=1,et.MEDIA_ERR_NETWORK=2,et.MEDIA_ERR_DECODE=3,et.MEDIA_ERR_SRC_NOT_SUPPORTED=4,et.MEDIA_ERR_ENCRYPTED=5,et.MEDIA_ERR_CUSTOM=100,et.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var er=et,Me=b=>null==b,I=(b,g)=>!Me(g)&&b in g,en={ANY:"any",MUTED:"muted"},es={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},eo={MSE:"mse",NATIVE:"native"},el={HEADER:"header",QUERY:"query",NONE:"none"},ed=Object.values(el),eu={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},ec={HLS:eu.M3U8},em=(Object.keys(ec),[...Object.values(eu)],{upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"}),eh={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},ep={DESCENDING:"desc"},m=(b,g,M,N,B=b)=>{B.addEventListener(g,M,N),b.addEventListener("teardown",()=>{B.removeEventListener(g,M)},{once:!0})};function q(b,g,M){g&&M>g&&(M=g);for(let g=0;g<b.length;g++)if(b.start(g)<=M&&b.end(g)>=M)return!0;return!1}var $=b=>{let g=b.indexOf("?");return g<0?[b]:[b.slice(0,g),b.slice(g)]},E=b=>{let g=b.type;if(g){let b=g.toUpperCase();return I(b,ec)?ec[b]:g}let{src:M}=b;return M?ve(M):""},R=b=>"VOD"===b?es.ON_DEMAND:es.LIVE,w=b=>"EVENT"===b?Number.POSITIVE_INFINITY:"VOD"===b?Number.NaN:0,ve=b=>{let g="";try{g=new URL(b).pathname}catch{console.error("invalid url")}let M=g.lastIndexOf(".");if(M<0)return"";let N=g.slice(M+1).toUpperCase();return I(N,eu)?eu[N]:""},e_=Object.values(en),z=b=>"boolean"==typeof b||"string"==typeof b&&e_.includes(b),X=(b,g,M)=>{let{autoplay:N}=b,B=!1,W=!1,K=z(N)?N:!!N,i=()=>{B||m(g,"playing",()=>{B=!0},{once:!0})};if(i(),m(g,"loadstart",()=>{B=!1,i(),H(g,K)},{once:!0}),m(g,"loadstart",()=>{M||(W=b.streamType&&b.streamType!==es.UNKNOWN?b.streamType===es.LIVE:!Number.isFinite(g.duration)),H(g,K)},{once:!0}),M&&M.once(Y.Events.LEVEL_LOADED,(g,M)=>{var N;W=b.streamType&&b.streamType!==es.UNKNOWN?b.streamType===es.LIVE:null!=(N=M.details.live)&&N}),!K){let u=()=>{!W||Number.isFinite(b.startTime)||(null!=M&&M.liveSyncPosition?g.currentTime=M.liveSyncPosition:Number.isFinite(g.seekable.end(0))&&(g.currentTime=g.seekable.end(0)))};M&&m(g,"play",()=>{"metadata"===g.preload?M.once(Y.Events.LEVEL_UPDATED,u):u()},{once:!0})}return b=>{B||H(g,K=z(b)?b:!!b)}},H=(b,g)=>{if(!g)return;let M=b.muted,r=()=>b.muted=M;switch(g){case en.ANY:b.play().catch(()=>{b.muted=!0,b.play().catch(r)});break;case en.MUTED:b.muted=!0,b.play().catch(r);break;default:b.play().catch(()=>{})}},G=({preload:b,src:g},M,N)=>{let o=b=>{null!=b&&["","none","metadata","auto"].includes(b)?M.setAttribute("preload",b):M.removeAttribute("preload")};if(!N)return o(b),o;let B=!1,W=!1,K=N.config.maxBufferLength,Y=N.config.maxBufferSize,u=b=>{o(b);let g=null!=b?b:M.preload;W||"none"===g||("metadata"===g?(N.config.maxBufferLength=1,N.config.maxBufferSize=1):(N.config.maxBufferLength=K,N.config.maxBufferSize=Y),d())},d=()=>{!B&&g&&(B=!0,N.loadSource(g))};return m(M,"play",()=>{W=!0,N.config.maxBufferLength=K,N.config.maxBufferSize=Y,d()},{once:!0}),u(b),u};function j(b,g){var M;if(!("videoTracks"in b))return;let N=new WeakMap;g.on(Y.Events.MANIFEST_PARSED,function(g,M){i();let B=b.addVideoTrack("main");for(let[b,g]of(B.selected=!0,M.levels.entries())){let M=B.addRendition(g.url[0],g.width,g.height,g.videoCodec,g.bitrate);N.set(g,`${b}`),M.id=`${b}`}}),g.on(Y.Events.AUDIO_TRACKS_UPDATED,function(g,M){for(let g of(c(),M.audioTracks)){let M=g.default?"main":"alternative",N=b.addAudioTrack(M,g.name,g.lang);N.id=`${g.id}`,g.default&&(N.enabled=!0)}}),b.audioTracks.addEventListener("change",()=>{var M;let N=+(null==(M=[...b.audioTracks].find(b=>b.enabled))?void 0:M.id),B=g.audioTracks.map(b=>b.id);N!=g.audioTrack&&B.includes(N)&&(g.audioTrack=N)}),g.on(Y.Events.LEVELS_UPDATED,function(g,M){var B;let W=b.videoTracks[null!=(B=b.videoTracks.selectedIndex)?B:0];if(!W)return;let K=M.levels.map(b=>N.get(b));for(let g of b.videoRenditions)g.id&&!K.includes(g.id)&&W.removeRendition(g)});let o=M=>{let N=b.currentTime,B=!1,l=(b,g)=>{B||(B=!Number.isFinite(g.endOffset))};g.on(Y.Events.BUFFER_FLUSHING,l),g.nextLevel=M,g.off(Y.Events.BUFFER_FLUSHING,l),B||g.trigger(Y.Events.BUFFER_FLUSHING,{startOffset:N+10,endOffset:1/0,type:"video"})};null==(M=b.videoRenditions)||M.addEventListener("change",b=>{let M=b.target.selectedIndex;M!=g.nextLevel&&o(M)});let a=()=>{for(let g of b.videoTracks)b.removeVideoTrack(g)},c=()=>{for(let g of b.audioTracks)b.removeAudioTrack(g)},i=()=>{a(),c()};g.once(Y.Events.DESTROYING,i)}function Q(b,g){g.on(Y.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(M,{tracks:N})=>{N.forEach(M=>{var N;let B=null!=(N=M.subtitleTrack)?N:M.closedCaptions,W=g.subtitleTracks.findIndex(({lang:b,name:g,type:N})=>b==(null==B?void 0:B.lang)&&g===M.label&&N.toLowerCase()===M.kind);_(b,M.kind,M.label,null==B?void 0:B.lang,`${M.kind}${W}`)})});let n=()=>{var M;if(!g.subtitleTracks.length)return;let N=Array.from(b.textTracks).find(b=>b.id&&"showing"===b.mode&&["subtitles","captions"].includes(b.kind)),B=`${null==(M=g.subtitleTracks[g.subtitleTrack])?void 0:M.type.toLowerCase()}${g.subtitleTrack}`;if(N&&(g.subtitleTrack<0||(null==N?void 0:N.id)!==B)){let b=g.subtitleTracks.findIndex(({lang:b,name:g,type:M})=>b==N.language&&g===N.label&&M.toLowerCase()===N.kind);g.subtitleTrack=b}N&&(null==N?void 0:N.id)===B&&N.cues&&Array.from(N.cues).forEach(b=>{N.addCue(b)})};b.textTracks.addEventListener("change",n),g.on(Y.Events.CUES_PARSED,(g,{track:M,cues:N})=>{let B=b.textTracks.getTrackById(M);if(!B)return;let W="disabled"===B.mode;W&&(B.mode="hidden"),N.forEach(b=>{var g;null!=(g=B.cues)&&g.getCueById(b.id)||B.addCue(b)}),W&&(B.mode="disabled")}),g.once(Y.Events.DESTROYING,()=>{b.textTracks.removeEventListener("change",n),b.querySelectorAll("track[data-removeondestroy]").forEach(b=>{b.remove()})});let r=()=>{Array.from(b.textTracks).forEach(g=>{var M,N;if(!["subtitles","caption"].includes(g.kind)&&"thumbnails"===g.label){if(!(null!=(M=g.cues)&&M.length)){let g=b.querySelector('track[label="thumbnails"]'),M=null!=(N=null==g?void 0:g.getAttribute("src"))?N:"";null==g||g.removeAttribute("src"),setTimeout(()=>{null==g||g.setAttribute("src",M)},0)}"hidden"!==g.mode&&(g.mode="hidden")}})};g.once(Y.Events.MANIFEST_LOADED,r),g.once(Y.Events.MEDIA_ATTACHED,r)}function _(b,g,M,N,B){let W=document.createElement("track");return W.kind=g,W.label=M,N&&(W.srclang=N),B&&(W.id=B),W.track.mode=["subtitles","captions"].includes(g)?"disabled":"hidden",W.setAttribute("data-removeondestroy",""),b.append(W),W.track}function xe(b,g){let M=Array.prototype.find.call(b.querySelectorAll("track"),b=>b.track===g);null==M||M.remove()}var ev="cuepoints",eb=Object.freeze({label:ev}),A=(b,{label:g=ev}=eb)=>{var M;return null==(M=Array.from(b.querySelectorAll("track")).find(b=>b.track.label===g&&"metadata"===b.track.kind))?void 0:M.track};async function J(b,g,M=eb){let N=A(b,M);if(!N){let{label:g=ev}=M;(N=_(b,"metadata",g)).mode="hidden",await new Promise(b=>setTimeout(()=>b(void 0),0))}return"hidden"!==N.mode&&(N.mode="hidden"),[...g].sort(({time:b},{time:g})=>g-b).forEach(({time:g,value:M})=>{var B,W;let K=Array.prototype.findIndex.call(null==N?void 0:N.cues,b=>b.startTime>=g),Y=null==(B=null==N?void 0:N.cues)?void 0:B[K],et=Y?Y.startTime:Number.isFinite(b.duration)?b.duration:Number.MAX_SAFE_INTEGER,er=null==(W=null==N?void 0:N.cues)?void 0:W[K-1];er&&(er.endTime=g);let en=new VTTCue(g,et,JSON.stringify(null!=M?M:null));N.addCue(en)}),N}var Z=b=>({time:b.startTime,value:JSON.parse(b.text)});function Le(b,g={label:ev}){let M=A(b,g);return null!=M&&M.cues?Array.from(M.cues,b=>Z(b)):[]}function ee(b,g={label:ev}){var M,N;let B=A(b,g);if(!(null!=(M=null==B?void 0:B.activeCues)&&M.length))return;let{currentTime:W}=b;return Z(Array.prototype.find.call(null!=(N=B.activeCues)?N:[],({startTime:b,endTime:g})=>b<=W&&g>W))}async function te(b,g=eb){return new Promise(M=>{m(b,"loadstart",async()=>{let N=await J(b,[],g);m(b,"cuechange",()=>{let g=ee(b);if(g){let M=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:g});b.dispatchEvent(M)}},{},N),M(N)})})}function Pe(b,g){if(g){let M=g.playingDate;if(null!=M)return new Date(M.getTime()-1e3*b.currentTime)}return"function"==typeof b.getStartDate?b.getStartDate():new Date(NaN)}function ke(b,g){return g&&g.playingDate?g.playingDate:new Date("function"==typeof b.getStartDate?b.getStartDate().getTime()+1e3*b.currentTime:NaN)}var eg,ef,eE,Ee=async b=>fetch(b).then(b=>b.text()).then(b=>{let g=b.split(`
`).find((b,g,M)=>g&&M[g-1].startsWith("#EXT-X-STREAM-INF"));return fetch(g).then(b=>b.text()).then(b=>b.split(`
`))}),he=b=>{var g,M,N;let B=null==(M=(null!=(g=b.find(b=>b.startsWith("#EXT-X-PLAYLIST-TYPE")))?g:"").split(":")[1])?void 0:M.trim(),W=R(B),K=w(B),Y;if(W===es.LIVE){let g=b.find(b=>b.startsWith("#EXT-X-PART-INF"));if(g)Y=2*+g.split(":")[1].split("=")[1];else{let g=b.find(b=>b.startsWith("#EXT-X-TARGETDURATION")),M=null==(N=null==g?void 0:g.split(":"))?void 0:N[1];Y=3*+(null!=M?M:6)}}return{streamType:W,targetLiveWindow:K,liveEdgeStartOffset:Y}},Se=async(b,g)=>g===eu.MP4?{streamType:es.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0}:g===eu.M3U8?he(await Ee(b)):(console.error(`Media type ${g} is an unrecognized or unsupported type for src ${b}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0}),ne=async(b,g,M=E({src:b}))=>{var N,B,W;let{streamType:K,targetLiveWindow:Y,liveEdgeStartOffset:et}=await Se(b,M);(null!=(N=eA.get(g))?N:{}).liveEdgeStartOffset=et,(null!=(B=eA.get(g))?B:{}).targetLiveWindow=Y,g.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(W=eA.get(g))?W:{}).streamType=K,g.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},Ce=b=>{var g;let M=b.type,N=R(M),B=w(M),W,K=!!(null!=(g=b.partList)&&g.length);return N===es.LIVE&&(W=K?2*b.partTarget:3*b.targetduration),{streamType:N,targetLiveWindow:B,liveEdgeStartOffset:W,lowLatency:K}},Ae=(b,g,M)=>{var N,B,W,K,Y,et,er,en;let{streamType:eo,targetLiveWindow:el,liveEdgeStartOffset:ed,lowLatency:eu}=Ce(b);if(eo===es.LIVE){eu?(M.config.backBufferLength=null!=(N=M.userConfig.backBufferLength)?N:4,M.config.maxFragLookUpTolerance=null!=(B=M.userConfig.maxFragLookUpTolerance)?B:.001,M.config.abrBandWidthUpFactor=null!=(W=M.userConfig.abrBandWidthUpFactor)?W:M.config.abrBandWidthFactor):M.config.backBufferLength=null!=(K=M.userConfig.backBufferLength)?K:8;let b=Object.freeze({get length(){return g.seekable.length},start:b=>g.seekable.start(b),end(b){var N;return b>this.length||b<0||Number.isFinite(g.duration)?g.seekable.end(b):null!=(N=M.liveSyncPosition)?N:g.seekable.end(b)}});(null!=(Y=eA.get(g))?Y:{}).seekable=b}(null!=(et=eA.get(g))?et:{}).liveEdgeStartOffset=ed,(null!=(er=eA.get(g))?er:{}).targetLiveWindow=el,g.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(en=eA.get(g))?en:{}).streamType=eo,g.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},ey=-1!==(null!=(ef=null==(eg=null==globalThis?void 0:globalThis.navigator)?void 0:eg.userAgent)?ef:"").toLowerCase().indexOf("android"),eA=new WeakMap,ek="mux.com",eT=null==(eE=Y.isSupported)?void 0:eE.call(Y),Nt=()=>K.utils.now(),ew=K.utils.generateUUID,Rt=({playbackId:b,customDomain:g=ek,maxResolution:M,minResolution:N,renditionOrder:B,tokens:{playback:W}={},extraSourceParams:K={}}={})=>{if(!b)return;let[Y,et=""]=$(b),er=new URL(`https://stream.${g}/${Y}.m3u8${et}`);return W||er.searchParams.has("token")?(er.searchParams.forEach((b,g)=>{"token"!=g&&er.searchParams.delete(g)}),W&&er.searchParams.set("token",W)):(M&&er.searchParams.set("max_resolution",M),N&&(er.searchParams.set("min_resolution",N),M&&+M.slice(0,-1)<+N.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",N,"maxResolution",M)),B&&er.searchParams.set("rendition_order",B),Object.entries(K).forEach(([b,g])=>{null!=g&&er.searchParams.set(b,g)})),er.toString()},we=b=>{if(!b)return;let[g]=b.split("?");return g||void 0},He=b=>{if(!b||!b.startsWith("https://stream."))return;let[g]=new URL(b).pathname.slice(1).split(".m3u8");return g||void 0},_e=b=>{var g,M,N;return null!=(g=null==b?void 0:b.metadata)&&g.video_id?b.metadata.video_id:fe(b)&&null!=(N=null!=(M=we(b.playbackId))?M:He(b.src))?N:b.src},wt=b=>{var g;return null==(g=eA.get(b))?void 0:g.error},re=b=>{var g,M;return null!=(M=null==(g=eA.get(b))?void 0:g.streamType)?M:es.UNKNOWN},Ht=b=>{var g,M;return null!=(M=null==(g=eA.get(b))?void 0:g.targetLiveWindow)?M:Number.NaN},V=b=>{var g,M;return null!=(M=null==(g=eA.get(b))?void 0:g.seekable)?M:b.seekable},_t=b=>{var g;let M=null==(g=eA.get(b))?void 0:g.liveEdgeStartOffset;if("number"!=typeof M)return Number.NaN;let N=V(b);return N.length?N.end(N.length-1)-M:Number.NaN},eS=.034,Oe=(b,g,M=eS)=>Math.abs(b-g)<=M,de=(b,g,M=eS)=>b>g||Oe(b,g,M),Ve=(b,g=eS)=>b.paused&&de(b.currentTime,b.duration,g),le=(b,g)=>{var M,N,B;if(!g)return;if(b.readyState>2)return!1;let W=g.currentLevel>=0?null==(N=null==(M=g.levels)?void 0:M[g.currentLevel])?void 0:N.details:null==(B=g.levels.find(b=>!!b.details))?void 0:B.details;if(!W||W.live)return;let{fragments:K}=W;if(!(null!=K&&K.length))return;if(b.currentTime<b.duration-(W.targetduration+.5))return!1;let Y=K[K.length-1];if(b.currentTime<=Y.start)return!1;let et=Y.start+Y.duration/2,er=b.buffered.start(b.buffered.length-1),en=b.buffered.end(b.buffered.length-1);return et>er&&et<en},Ue=(b,g)=>b.ended||b.loop?b.ended:!!(g&&le(b,g))||Ve(b),Ot=(b,g,M)=>{Fe(g,M);let{metadata:N={}}=b,{view_session_id:B=ew()}=N,W=_e(b);N.view_session_id=B,N.video_id=W,b.metadata=N,eA.set(g,{});let K=We(b,g);Ke(b,g,K),Ye(b,g,K),te(g);let Y=X(b,g,K),et=G(b,g,K);return{engine:K,setAutoplay:Y,setPreload:et}},Fe=(b,g)=>{let M=null==g?void 0:g.engine;M&&(M.detachMedia(),M.destroy()),null!=b&&b.mux&&!b.mux.deleted&&(b.mux.destroy(),delete b.mux),b&&(b.removeAttribute("src"),b.load(),b.removeEventListener("error",ye),b.removeEventListener("error",U),b.removeEventListener("durationchange",Te),eA.delete(b),b.dispatchEvent(new Event("teardown")))};function pe(b,g){var M;let N=E(b);if(N!==eu.M3U8)return!0;let B=!N||null==(M=g.canPlayType(N))||M,{preferPlayback:W}=b,K=W===eo.MSE,Y=W===eo.NATIVE;return B&&(Y||!(eT&&(K||ey)))}var We=(b,g)=>{let{debug:M,streamType:N,startTime:B=-1,metadata:W,preferCmcd:K,_hlsConfig:et={}}=b,er=E(b)===eu.M3U8,en=pe(b,g);if(er&&!en&&eT){let b=Be(N);return new Y({debug:M,startPosition:B,cmcd:K!==el.NONE?{useHeaders:K===el.HEADER,sessionId:null==W?void 0:W.view_session_id,contentId:null==W?void 0:W.video_id}:void 0,xhrSetup:(b,g)=>{var M,N;if(K&&K!==el.QUERY)return;let B=new URL(g);if(!B.searchParams.has("CMCD"))return;let W=(null!=(N=null==(M=B.searchParams.get("CMCD"))?void 0:M.split(","))?N:[]).filter(b=>b.startsWith("sid")||b.startsWith("cid")).join(",");B.searchParams.set("CMCD",W),b.open("GET",B)},backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelToPlayerSize:!0,capLevelOnFPSDrop:!0,...b,...et})}},Be=b=>b===es.LIVE?{backBufferLength:8}:{},fe=({playbackId:b,src:g,customDomain:M})=>{if(b)return!0;if("string"!=typeof g)return!1;let N=null==window?void 0:window.location.href,B=new URL(g,N).hostname.toLocaleLowerCase();return B.includes(ek)||!!M&&B.includes(M.toLocaleLowerCase())},Ke=(b,g,M)=>{var N;let{envKey:B}=b,W=fe(b);if(B||W){let{playerInitTime:W,playerSoftwareName:et,playerSoftwareVersion:er,beaconCollectionDomain:en,debug:es,disableCookies:eo}=b,el={...b.metadata,video_title:(null==(N=null==b?void 0:b.metadata)?void 0:N.video_title)||void 0};K.monitor(g,{debug:es,beaconCollectionDomain:en,hlsjs:M,Hls:M?Y:void 0,automaticErrorTracking:!1,errorTranslator:g=>"string"!=typeof g.player_error_code&&("function"==typeof b.errorTranslator?b.errorTranslator(g):g),disableCookies:eo,data:{...B?{env_key:B}:{},player_software_name:et,player_software:et,player_software_version:er,player_init_time:W,...el}})}},Ye=(b,g,M)=>{var N;let B=pe(b,g),{src:W}=b,a=b=>{g.ended||!Ue(g,M)||(le(g,M)?g.currentTime=g.buffered.end(g.buffered.length-1):g.dispatchEvent(new Event("ended")))},K,et,p=()=>{var b,M;let N=null==(b=V(g))?void 0:b.start(0),B=null==(M=V(g))?void 0:M.end(0);(et!==B||K!==N)&&g.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),K=N,et=B};if(m(g,"durationchange",p),g&&B){let M=E(b);if("string"==typeof W){let s=()=>{if(re(g)!==es.LIVE||Number.isFinite(g.duration))return;let b=setInterval(p,1e3);g.addEventListener("teardown",()=>{clearInterval(b)},{once:!0}),m(g,"durationchange",()=>{Number.isFinite(g.duration)&&clearInterval(b)})};"none"===g.preload?m(g,"loadstart",()=>{ne(W,g,M).then(s)}):ne(W,g,M).then(s),g.setAttribute("src",W),b.startTime&&((null!=(N=eA.get(g))?N:{}).startTime=b.startTime,g.addEventListener("durationchange",Te,{once:!0}))}else g.removeAttribute("src");g.addEventListener("error",ye),g.addEventListener("error",U),g.addEventListener("emptied",()=>{g.querySelectorAll("track[data-removeondestroy]").forEach(b=>{b.remove()})},{once:!0}),m(g,"pause",a),m(g,"seeked",a),m(g,"play",()=>{g.ended||de(g.currentTime,g.duration)&&(g.currentTime=g.seekable.start(0))})}else M&&W?(M.once(Y.Events.LEVEL_LOADED,(b,N)=>{Ae(N.details,g,M),p(),re(g)!==es.LIVE||Number.isFinite(g.duration)||(M.on(Y.Events.LEVEL_UPDATED,p),m(g,"durationchange",()=>{Number.isFinite(g.duration)&&M.off(Y.Events.LEVELS_UPDATED,p)}))}),M.on(Y.Events.ERROR,(b,M)=>{let N={[Y.ErrorTypes.NETWORK_ERROR]:er.MEDIA_ERR_NETWORK,[Y.ErrorTypes.MEDIA_ERROR]:er.MEDIA_ERR_DECODE},B=new er("",N[M.type]);B.fatal=M.fatal,B.data=M,g.dispatchEvent(new CustomEvent("error",{detail:B}))}),g.addEventListener("error",U),m(g,"waiting",a),j(b,M),Q(g,M),M.attachMedia(g)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function Te(b){var g;let M=b.target,N=null==(g=eA.get(M))?void 0:g.startTime;if(N&&q(M.seekable,M.duration,N)){let b="auto"===M.preload;b&&(M.preload="none"),M.currentTime=N,b&&(M.preload="auto")}}async function ye(b){if(!b.isTrusted)return;b.stopImmediatePropagation();let g=b.target;if(!(null!=g&&g.error))return;let{message:M,code:N}=g.error,B=new er(M,N);if(g.src&&(N!==er.MEDIA_ERR_DECODE||void 0!==N))try{let{status:b}=await fetch(g.src);B.data={response:{code:b}}}catch{}g.dispatchEvent(new CustomEvent("error",{detail:B}))}function U(b){var g,M;if(!(b instanceof CustomEvent)||!(b.detail instanceof er))return;let N=b.target,B=b.detail;B&&B.fatal&&((null!=(g=eA.get(N))?g:{}).error=B,null==(M=N.mux)||M.emit("error",{player_error_code:B.code,player_error_message:B.message,player_error_context:B.context}))}let eC={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},eI={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},eM={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_PAUSED:"mediaPaused",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_ENDED:"mediaEnded",MEDIA_MUTED:"mediaMuted",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_IS_PIP:"mediaIsPip",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_LOADING:"mediaLoading",MEDIA_BUFFERED:"mediaBuffered",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_CHAPTERS_CUES:"mediaChaptersCues"},ex=Object.entries(eM),eR=ex.reduce((b,[g,M])=>(b[g]=`${M.toLowerCase()}`,b),{}),eL=ex.reduce((b,[g,M])=>(b[g]=`${M.toLowerCase()}`,b),{USER_INACTIVE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(eL).reduce((b,[g,M])=>{let N=eR[g];return N&&(b[M]=N),b},{userinactivechange:"userinactive"});let eD=Object.entries(eR).reduce((b,[g,M])=>{let N=eL[g];return N&&(b[M]=N),b},{userinactive:"userinactivechange"}),eO={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},eN={DISABLED:"disabled",SHOWING:"showing"},eP={MOUSE:"mouse",TOUCH:"touch"},eU={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},eB={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},eG={FULLSCREEN:"fullscreen"},eW={AUDIO_PLAYER:()=>"audio player",VIDEO_PLAYER:()=>"video player",VOLUME:()=>"volume",SEEK:()=>"seek",CLOSED_CAPTIONS:()=>"closed captions",PLAYBACK_RATE:({playbackRate:b=1}={})=>`current playback rate ${b}`,PLAYBACK_TIME:()=>"playback time",MEDIA_LOADING:()=>"media loading",SETTINGS:()=>"settings",AUDIO_TRACKS:()=>"audio tracks",QUALITY:()=>"quality"},eH={PLAY:()=>"play",PAUSE:()=>"pause",MUTE:()=>"mute",UNMUTE:()=>"unmute",ENTER_AIRPLAY:()=>"start airplay",EXIT_AIRPLAY:()=>"stop airplay",ENTER_CAST:()=>"start casting",EXIT_CAST:()=>"stop casting",ENTER_FULLSCREEN:()=>"enter fullscreen mode",EXIT_FULLSCREEN:()=>"exit fullscreen mode",ENTER_PIP:()=>"enter picture in picture mode",EXIT_PIP:()=>"exit picture in picture mode",SEEK_FORWARD_N_SECS:({seekOffset:b=30}={})=>`seek forward ${b} seconds`,SEEK_BACK_N_SECS:({seekOffset:b=30}={})=>`seek back ${b} seconds`,SEEK_LIVE:()=>"seek to live",PLAYING_LIVE:()=>"playing live"};function stringifyRenditionList(b){return null==b?void 0:b.map(stringifyRendition).join(" ")}function parseRenditionList(b){return null==b?void 0:b.split(/\s+/).map(parseRendition)}function stringifyRendition(b){if(b){let{id:g,width:M,height:N}=b;return[g,M,N].filter(b=>null!=b).join(":")}}function parseRendition(b){if(b){let[g,M,N]=b.split(":");return{id:g,width:M,height:N}}}function stringifyAudioTrackList(b){return null==b?void 0:b.map(stringifyAudioTrack).join(" ")}function parseAudioTrackList(b){return null==b?void 0:b.split(/\s+/).map(parseAudioTrack)}function stringifyAudioTrack(b){if(b){let{id:g,kind:M,language:N,label:B}=b;return[g,M,N,B].filter(b=>null!=b).join(":")}}function parseAudioTrack(b){if(b){let[g,M,N,B]=b.split(":");return{id:g,kind:M,language:N,label:B}}}function camelCase(b){return b.replace(/[-_]([a-z])/g,(b,g)=>g.toUpperCase())}function isValidNumber(b){return"number"==typeof b&&!Number.isNaN(b)&&Number.isFinite(b)}function isNumericString(b){return"string"==typeof b&&!isNaN(b)&&!isNaN(parseFloat(b))}({...eW,...eH});let delay=b=>new Promise(g=>setTimeout(g,b)),eV=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],toTimeUnitPhrase=(b,g)=>{let M=1===b?eV[g].singular:eV[g].plural;return`${b} ${M}`},formatAsTimePhrase=b=>{if(!isValidNumber(b))return"";let g=Math.abs(b),M=g!==b,N=new Date(0,0,0,0,0,g,0),B=[N.getHours(),N.getMinutes(),N.getSeconds()],W=B.map((b,g)=>b&&toTimeUnitPhrase(b,g)).filter(b=>b).join(", ");return`${W}${M?" remaining":""}`};function formatTime(b,g){let M=!1;b<0&&(M=!0,b=0-b);let N=Math.floor((b=b<0?0:b)%60),B=Math.floor(b/60%60),W=Math.floor(b/3600);return(isNaN(b)||b===1/0)&&(W=B=N="0"),B=(((W=W>0||Math.floor(g/3600)>0?W+":":"")||Math.floor(g/60%60)>=10)&&B<10?"0"+B:B)+":",(M?"-":"")+W+B+(N=N<10?"0"+N:N)}Object.freeze({length:0,start(b){let g=b>>>0;if(g>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${g}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(b){let g=b>>>0;if(g>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${g}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});let server_safe_globals_EventTarget=class server_safe_globals_EventTarget{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}};let Node=class Node extends server_safe_globals_EventTarget{};let ResizeObserver=class ResizeObserver{observe(){}unobserve(){}disconnect(){}};let eF={createElement:function(){return new eq.HTMLElement},createElementNS:function(){return new eq.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:b=>!1},eq={ResizeObserver,document:eF,Node,HTMLElement:class extends Node{},DocumentFragment:class extends server_safe_globals_EventTarget{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:b=>null,setItem(b,g){},removeItem(b){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:b=>({matches:!1,media:b})},e$="undefined"==typeof window||void 0===window.customElements,ej=Object.keys(eq).every(b=>b in globalThis),eK=e$&&!ej?eq:globalThis,eY=e$&&!ej?eF:globalThis.document,eZ=new WeakMap,getCallbacks=b=>{let g=eZ.get(b);return g||eZ.set(b,g=new Set),g},ez=new eK.ResizeObserver(b=>{for(let g of b)for(let b of getCallbacks(g.target))b(g)});function observeResize(b,g){getCallbacks(b).add(g),ez.observe(b)}function unobserveResize(b,g){let M=getCallbacks(b);M.delete(g),M.size||ez.unobserve(b)}function getMediaController(b){var g;return null!=(g=getAttributeMediaController(b))?g:closestComposedNode(b,"media-controller")}function getAttributeMediaController(b){var g;let{MEDIA_CONTROLLER:M}=eI,N=b.getAttribute(M);if(N)return null==(g=getDocumentOrShadowRoot(b))?void 0:g.getElementById(N)}let updateIconText=(b,g,M=".value")=>{let N=b.querySelector(M);N&&(N.textContent=g)},getAllSlotted=(b,g)=>{let M=`slot[name="${g}"]`,N=b.shadowRoot.querySelector(M);return N?N.children:[]},getSlotted=(b,g)=>getAllSlotted(b,g)[0],containsComposedNode=(b,g)=>!!b&&!!g&&(null!=b&&!!b.contains(g)||containsComposedNode(b,g.getRootNode().host)),closestComposedNode=(b,g)=>{if(!b)return null;let M=b.closest(g);return M||closestComposedNode(b.getRootNode().host,g)};function getActiveElement(b=document){var g;let M=null==b?void 0:b.activeElement;return M?null!=(g=getActiveElement(M.shadowRoot))?g:M:null}function getDocumentOrShadowRoot(b){var g;let M=null==(g=null==b?void 0:b.getRootNode)?void 0:g.call(b);return M instanceof ShadowRoot||M instanceof Document?M:null}function isElementVisible(b,g=3){if(b.checkVisibility)return b.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0});let M=b;for(;M&&g>0;){let b=getComputedStyle(M);if("0"===b.opacity||"hidden"===b.visibility||"none"===b.display)return!1;M=M.parentElement,g--}return!0}function getPointProgressOnLine(b,g,M,N){let B=distance(M,N),W=distance(M,{x:b,y:g}),K=distance(N,{x:b,y:g});return W>B||K>B?W>K?1:0:W/B}function distance(b,g){return Math.sqrt(Math.pow(g.x-b.x,2)+Math.pow(g.y-b.y,2))}function getOrInsertCSSRule(b,g){let M=getCSSRule(b,b=>b===g);return M||insertCSSRule(b,g)}function getCSSRule(b,g){var M;let N;for(N of b.querySelectorAll("style")){let b;try{b=null==(M=N.sheet)?void 0:M.cssRules}catch{continue}for(let M of null!=b?b:[])if(g(M.selectorText))return M}}function insertCSSRule(b,g){var M,N;let B=null!=(M=b.querySelectorAll("style"))?M:[],W=null==B?void 0:B[B.length-1];return(null==W?void 0:W.sheet)?(null==W||W.sheet.insertRule(`${g}{}`,W.sheet.cssRules.length),null==(N=W.sheet.cssRules)?void 0:N[W.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",b),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function getNumericAttr(b,g,M=Number.NaN){let N=b.getAttribute(g);return null!=N?+N:M}function setNumericAttr(b,g,M){let N=+M;if(null==M||Number.isNaN(N)){b.hasAttribute(g)&&b.removeAttribute(g);return}getNumericAttr(b,g,void 0)!==N&&b.setAttribute(g,`${N}`)}function getBooleanAttr(b,g){return b.hasAttribute(g)}function setBooleanAttr(b,g,M){if(null==M){b.hasAttribute(g)&&b.removeAttribute(g);return}getBooleanAttr(b,g)!=M&&b.toggleAttribute(g,M)}function getStringAttr(b,g,M=null){var N;return null!=(N=b.getAttribute(g))?N:M}function setStringAttr(b,g,M){if(null==M){b.hasAttribute(g)&&b.removeAttribute(g);return}let N=`${M}`;getStringAttr(b,g,void 0)!==N&&b.setAttribute(g,N)}var __accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},__privateGet=(b,g,M)=>(__accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),__privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},__privateSet=(b,g,M,N)=>(__accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M);let eQ=eY.createElement("template");eQ.innerHTML=`
<style>
  :host {
    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
    box-sizing: border-box;
  }
</style>
`;let MediaGestureReceiver=class MediaGestureReceiver extends eK.HTMLElement{constructor(b={}){if(super(),__privateAdd(this,i2,void 0),!this.shadowRoot){let g=this.attachShadow({mode:"open"}),M=eQ.content.cloneNode(!0);this.nativeEl=M;let N=b.slotTemplate;N||((N=eY.createElement("template")).innerHTML=`<slot>${b.defaultContent||""}</slot>`),this.nativeEl.appendChild(N.content.cloneNode(!0)),g.appendChild(M)}}static get observedAttributes(){return[eI.MEDIA_CONTROLLER,eR.MEDIA_PAUSED]}attributeChangedCallback(b,g,M){var N,B,W,K,Y;b===eI.MEDIA_CONTROLLER&&(g&&(null==(B=null==(N=__privateGet(this,i2))?void 0:N.unassociateElement)||B.call(N,this),__privateSet(this,i2,null)),M&&this.isConnected&&(__privateSet(this,i2,null==(W=this.getRootNode())?void 0:W.getElementById(M)),null==(Y=null==(K=__privateGet(this,i2))?void 0:K.associateElement)||Y.call(K,this)))}connectedCallback(){var b,g,M,N;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),__privateSet(this,i2,getMediaControllerEl(this)),this.getAttribute(eI.MEDIA_CONTROLLER)&&(null==(g=null==(b=__privateGet(this,i2))?void 0:b.associateElement)||g.call(b,this)),null==(M=__privateGet(this,i2))||M.addEventListener("pointerdown",this),null==(N=__privateGet(this,i2))||N.addEventListener("click",this)}disconnectedCallback(){var b,g,M,N;this.getAttribute(eI.MEDIA_CONTROLLER)&&(null==(g=null==(b=__privateGet(this,i2))?void 0:b.unassociateElement)||g.call(b,this)),null==(M=__privateGet(this,i2))||M.removeEventListener("pointerdown",this),null==(N=__privateGet(this,i2))||N.removeEventListener("click",this),__privateSet(this,i2,null)}handleEvent(b){var g;let M=null==(g=b.composedPath())?void 0:g[0];if(["video","media-controller"].includes(null==M?void 0:M.localName)){if("pointerdown"===b.type)this._pointerType=b.pointerType;else if("click"===b.type){let{clientX:g,clientY:M}=b,{left:N,top:B,width:W,height:K}=this.getBoundingClientRect(),Y=g-N,et=M-B;if(Y<0||et<0||Y>W||et>K||0===W&&0===K)return;let{pointerType:er=this._pointerType}=b;if(this._pointerType=void 0,er===eP.TOUCH){this.handleTap(b);return}if(er===eP.MOUSE){this.handleMouseClick(b);return}}}}get mediaPaused(){return getBooleanAttr(this,eR.MEDIA_PAUSED)}set mediaPaused(b){setBooleanAttr(this,eR.MEDIA_PAUSED,b)}handleTap(b){}handleMouseClick(b){let g=this.mediaPaused?eC.MEDIA_PLAY_REQUEST:eC.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new eK.CustomEvent(g,{composed:!0,bubbles:!0}))}};function getMediaControllerEl(b){var g;let M=b.getAttribute(eI.MEDIA_CONTROLLER);return M?null==(g=b.getRootNode())?void 0:g.getElementById(M):closestComposedNode(b,"media-controller")}i2=new WeakMap,eK.customElements.get("media-gesture-receiver")||eK.customElements.define("media-gesture-receiver",MediaGestureReceiver);var eX=Object.defineProperty,__defNormalProp=(b,g,M)=>g in b?eX(b,g,{enumerable:!0,configurable:!0,writable:!0,value:M}):b[g]=M,__publicField=(b,g,M)=>(__defNormalProp(b,"symbol"!=typeof g?g+"":g,M),M),media_container_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_container_privateGet=(b,g,M)=>(media_container_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_container_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_container_privateSet=(b,g,M,N)=>(media_container_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M),__privateMethod=(b,g,M)=>(media_container_accessCheck(b,g,"access private method"),M);let eJ={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive"},e0=eY.createElement("template");e0.innerHTML=`
  <style>
    
    :host([${eR.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([${eJ.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    slot[name=media] {
      display: var(--media-slot-display, contents);
    }

    
    :host([${eJ.AUDIO}]) slot[name=media] {
      display: var(--media-slot-display, none);
    }

    
    :host([${eJ.AUDIO}]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    
    :host(:not([${eJ.AUDIO}])[${eJ.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
    :host(:not([${eJ.AUDIO}])[${eJ.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([hidden])) {
      pointer-events: auto;
    }

    :host(:not([${eJ.AUDIO}])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([${eJ.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([${eJ.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    
    :host(:not([${eJ.AUDIO}])) .spacer {
      flex-grow: 1;
    }

    
    :host(:-webkit-full-screen) {
      
      width: 100% !important;
      height: 100% !important;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not([${eJ.NO_AUTOHIDE}]):not([hidden])) {
      opacity: 1;
      transition: opacity 0.25s;
    }

    
    :host([${eJ.USER_INACTIVE}]:not([${eR.MEDIA_PAUSED}]):not([${eR.MEDIA_IS_AIRPLAYING}]):not([${eR.MEDIA_IS_CASTING}]):not([${eJ.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${eJ.NO_AUTOHIDE}])) {
      opacity: 0;
      transition: opacity 1s;
    }

    :host([${eJ.USER_INACTIVE}]:not([${eR.MEDIA_PAUSED}]):not([${eR.MEDIA_IS_CASTING}]):not([${eJ.AUDIO}])) ::slotted([slot=media]) {
      cursor: none;
    }

    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    
    :host(:not([${eJ.AUDIO}])[${eR.MEDIA_HAS_PLAYED}]) slot[name=poster] {
      display: none;
    }

    ::slotted([role="menu"]) {
      align-self: end;
    }

    ::slotted([role="dialog"]) {
      align-self: center;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    
    <slot part="bottom chrome"></slot>
  </span>
`;let e1=Object.values(eR);function resizeCallback(b){setBreakpoints(b.target,b.contentRect.width)}function setBreakpoints(b,g){var M;if(!b.isConnected)return;let N=null!=(M=b.getAttribute(eJ.BREAKPOINTS))?M:"sm:384 md:576 lg:768 xl:960",B=createBreakpointMap(N),W=getBreakpoints(B,g),K=!1;if(Object.keys(B).forEach(g=>{if(W.includes(g)){b.hasAttribute(`breakpoint${g}`)||(b.setAttribute(`breakpoint${g}`,""),K=!0);return}b.hasAttribute(`breakpoint${g}`)&&(b.removeAttribute(`breakpoint${g}`),K=!0)}),K){let g=new CustomEvent(eL.BREAKPOINTS_CHANGE,{detail:W});b.dispatchEvent(g)}}function createBreakpointMap(b){let g=b.split(/\s+/);return Object.fromEntries(g.map(b=>b.split(":")))}function getBreakpoints(b,g){return Object.keys(b).filter(M=>g>=b[M])}let MediaContainer=class MediaContainer extends eK.HTMLElement{constructor(){super(),media_container_privateAdd(this,i4),media_container_privateAdd(this,i8),media_container_privateAdd(this,i6),media_container_privateAdd(this,at),media_container_privateAdd(this,an),media_container_privateAdd(this,i3,0),media_container_privateAdd(this,i5,void 0),__publicField(this,"breakpointsComputed",!1),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(e0.content.cloneNode(!0)));let b=new MutationObserver(b=>{let g=this.media;for(let M of b)"childList"===M.type&&(M.removedNodes.forEach(b=>{if("media"==b.slot&&M.target==this){let N=M.previousSibling&&M.previousSibling.previousElementSibling;if(N&&g){let g="media"!==N.slot;for(;null!==(N=N.previousSibling);)"media"==N.slot&&(g=!1);g&&this.mediaUnsetCallback(b)}else this.mediaUnsetCallback(b)}}),g&&M.addedNodes.forEach(b=>{b===g&&this.handleMediaUpdated(g)}))});b.observe(this,{childList:!0,subtree:!0});let g=!1;observeResize(this,b=>{g||(setTimeout(()=>{resizeCallback(b),g=!1,this.breakpointsComputed||(this.breakpointsComputed=!0,this.dispatchEvent(new CustomEvent(eL.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))},0),g=!0)});let M=this.querySelector(":scope > slot[slot=media]");M&&M.addEventListener("slotchange",()=>{let b=M.assignedElements({flatten:!0});if(!b.length){media_container_privateGet(this,i5)&&this.mediaUnsetCallback(media_container_privateGet(this,i5));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[eJ.AUTOHIDE,eJ.GESTURES_DISABLED].concat(e1).filter(b=>![eR.MEDIA_RENDITION_LIST,eR.MEDIA_AUDIO_TRACK_LIST,eR.MEDIA_CHAPTERS_CUES].includes(b))}attributeChangedCallback(b,g,M){b.toLowerCase()==eJ.AUTOHIDE&&(this.autohide=M)}get media(){let b=this.querySelector(":scope > [slot=media]");return(null==b?void 0:b.nodeName)=="SLOT"&&(b=b.assignedElements({flatten:!0})[0]),b}async handleMediaUpdated(b){b&&(media_container_privateSet(this,i5,b),b.localName.includes("-")&&await eK.customElements.whenDefined(b.localName),this.mediaSetCallback(b))}connectedCallback(){var b;let g=null!=this.getAttribute(eJ.AUDIO),M=g?eW.AUDIO_PLAYER():eW.VIDEO_PLAYER();this.setAttribute("role","region"),this.setAttribute("aria-label",M),this.handleMediaUpdated(this.media),this.setAttribute(eJ.USER_INACTIVE,""),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(b=eK.window)||b.addEventListener("mouseup",this)}disconnectedCallback(){var b;this.media&&this.mediaUnsetCallback(this.media),null==(b=eK.window)||b.removeEventListener("mouseup",this)}mediaSetCallback(b){}mediaUnsetCallback(b){media_container_privateSet(this,i5,null)}handleEvent(b){switch(b.type){case"pointerdown":media_container_privateSet(this,i3,b.timeStamp);break;case"pointermove":__privateMethod(this,i4,i9).call(this,b);break;case"pointerup":__privateMethod(this,i8,i7).call(this,b);break;case"mouseleave":__privateMethod(this,i6,ae).call(this);break;case"mouseup":this.removeAttribute(eJ.KEYBOARD_CONTROL);break;case"keyup":__privateMethod(this,an,as).call(this),this.setAttribute(eJ.KEYBOARD_CONTROL,"")}}set autohide(b){b=Number(b),this._autohide=isNaN(b)?0:b}get autohide(){return void 0===this._autohide?2:this._autohide}};i3=new WeakMap,i5=new WeakMap,i4=new WeakSet,i9=function(b){!("mouse"!==b.pointerType&&b.timeStamp-media_container_privateGet(this,i3)<250)&&(__privateMethod(this,at,ar).call(this),clearTimeout(this._inactiveTimeout),[this,this.media].includes(b.target)&&__privateMethod(this,an,as).call(this))},i8=new WeakSet,i7=function(b){if("touch"===b.pointerType){let g=!this.hasAttribute(eJ.USER_INACTIVE);[this,this.media].includes(b.target)&&g?__privateMethod(this,i6,ae).call(this):__privateMethod(this,an,as).call(this)}else b.composedPath().some(b=>["media-play-button","media-fullscreen-button"].includes(null==b?void 0:b.localName))&&__privateMethod(this,an,as).call(this)},i6=new WeakSet,ae=function(){if(this.autohide<0||this.hasAttribute(eJ.USER_INACTIVE))return;this.setAttribute(eJ.USER_INACTIVE,"");let b=new eK.CustomEvent(eL.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(b)},at=new WeakSet,ar=function(){if(!this.hasAttribute(eJ.USER_INACTIVE))return;this.removeAttribute(eJ.USER_INACTIVE);let b=new eK.CustomEvent(eL.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(b)},an=new WeakSet,as=function(){__privateMethod(this,at,ar).call(this),clearTimeout(this._inactiveTimeout),this.autohide<0||(this._inactiveTimeout=setTimeout(()=>{__privateMethod(this,i6,ae).call(this)},1e3*this.autohide))},eK.customElements.get("media-container")||eK.customElements.define("media-container",MediaContainer);var attribute_token_list_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},attribute_token_list_privateGet=(b,g,M)=>(attribute_token_list_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),attribute_token_list_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},attribute_token_list_privateSet=(b,g,M,N)=>(attribute_token_list_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M);let AttributeTokenList=class AttributeTokenList{constructor(b,g,{defaultValue:M}={defaultValue:void 0}){attribute_token_list_privateAdd(this,ac),attribute_token_list_privateAdd(this,ao,void 0),attribute_token_list_privateAdd(this,al,void 0),attribute_token_list_privateAdd(this,ad,void 0),attribute_token_list_privateAdd(this,au,new Set),attribute_token_list_privateSet(this,ao,b),attribute_token_list_privateSet(this,al,g),attribute_token_list_privateSet(this,ad,new Set(M))}[Symbol.iterator](){return attribute_token_list_privateGet(this,ac,am).values()}get length(){return attribute_token_list_privateGet(this,ac,am).size}get value(){var b;return null!=(b=[...attribute_token_list_privateGet(this,ac,am)].join(" "))?b:""}set value(b){var g;b!==this.value&&(attribute_token_list_privateSet(this,au,new Set),this.add(...null!=(g=null==b?void 0:b.split(" "))?g:[]))}toString(){return this.value}item(b){return[...attribute_token_list_privateGet(this,ac,am)][b]}values(){return attribute_token_list_privateGet(this,ac,am).values()}forEach(b){attribute_token_list_privateGet(this,ac,am).forEach(b)}add(...b){var g,M;b.forEach(b=>attribute_token_list_privateGet(this,au).add(b)),(""!==this.value||(null==(g=attribute_token_list_privateGet(this,ao))?void 0:g.hasAttribute(`${attribute_token_list_privateGet(this,al)}`)))&&(null==(M=attribute_token_list_privateGet(this,ao))||M.setAttribute(`${attribute_token_list_privateGet(this,al)}`,`${this.value}`))}remove(...b){var g;b.forEach(b=>attribute_token_list_privateGet(this,au).delete(b)),null==(g=attribute_token_list_privateGet(this,ao))||g.setAttribute(`${attribute_token_list_privateGet(this,al)}`,`${this.value}`)}contains(b){return attribute_token_list_privateGet(this,ac,am).has(b)}toggle(b,g){return void 0!==g?g?(this.add(b),!0):(this.remove(b),!1):this.contains(b)?(this.remove(b),!1):(this.add(b),!0)}replace(b,g){return this.remove(b),this.add(g),b===g}};ao=new WeakMap,al=new WeakMap,ad=new WeakMap,au=new WeakMap,ac=new WeakSet,am=function(){return attribute_token_list_privateGet(this,au).size?attribute_token_list_privateGet(this,au):attribute_token_list_privateGet(this,ad)};let splitTextTracksStr=(b="")=>b.split(/\s+/),parseTextTrackStr=(b="")=>{let[g,M,N]=b.split(":"),B=N?decodeURIComponent(N):void 0;return{kind:g="cc"===g?"captions":"subtitles",language:M,label:B}},parseTextTracksStr=(b="",g={})=>splitTextTracksStr(b).map(b=>{let M=parseTextTrackStr(b);return{...g,...M}}),parseTracks=b=>b?Array.isArray(b)?b.map(b=>"string"==typeof b?parseTextTrackStr(b):b):"string"==typeof b?parseTextTracksStr(b):[b]:[],formatTextTrackObj=({kind:b,label:g,language:M}={kind:"subtitles"})=>g?`${"captions"===b?"cc":"sb"}:${M}:${encodeURIComponent(g)}`:M,stringifyTextTrackList=(b=[])=>Array.prototype.map.call(b,formatTextTrackObj).join(" "),isMatchingPropOf=(b,g)=>M=>M[b]===g,textTrackObjAsPred=b=>{let g=Object.entries(b).map(([b,g])=>isMatchingPropOf(b,g));return b=>g.every(g=>g(b))},updateTracksModeTo=(b,g=[],M=[])=>{let N=parseTracks(M).map(textTrackObjAsPred);Array.from(g).filter(b=>N.some(g=>g(b))).forEach(g=>{g.mode=b})},getTextTracksList=(b,g=()=>!0)=>{if(!(null==b?void 0:b.textTracks))return[];let M="function"==typeof g?g:textTrackObjAsPred(g);return Array.from(b.textTracks).filter(M)},areSubsOn=b=>{var g;let M=!!(null==(g=b.mediaSubtitlesShowing)?void 0:g.length)||b.hasAttribute(eR.MEDIA_SUBTITLES_SHOWING);return M},e2={enter:"requestFullscreen",exit:"exitFullscreen",rootEvents:["fullscreenchange"],mediaEvents:[],element:"fullscreenElement",error:"fullscreenerror",enabled:"fullscreenEnabled"};void 0===eY.fullscreenElement&&(e2.enter="webkitRequestFullScreen",e2.exit=null!=eY.webkitExitFullscreen?"webkitExitFullscreen":"webkitCancelFullScreen",e2.rootEvents=["webkitfullscreenchange"],e2.mediaEvents=["webkitbeginfullscreen","webkitendfullscreen"],e2.element="webkitFullscreenElement",e2.error="webkitfullscreenerror",e2.enabled="webkitFullscreenEnabled");let getTestMediaEl=()=>{var b;return N||(N=null==(b=null==eY?void 0:eY.createElement)?void 0:b.call(eY,"video"))},hasVolumeSupportAsync=async(b=getTestMediaEl())=>{if(!b)return!1;let g=b.volume;return b.volume=g/2+.1,await delay(0),b.volume!==g},e3=/.*Version\/.*Safari\/.*/.test(eK.navigator.userAgent),hasPipSupport=(b=getTestMediaEl())=>(!eK.matchMedia("(display-mode: standalone)").matches||!e3)&&"function"==typeof(null==b?void 0:b.requestPictureInPicture),hasFullscreenSupport=(b=getTestMediaEl())=>{let g=eY[e2.enabled];return!g&&b&&(g="webkitSupportsFullscreen"in b),g},e5=hasFullscreenSupport(),e4=hasPipSupport(),e9=!!eK.WebKitPlaybackTargetAvailabilityEvent,e8=!!eK.chrome,getSubtitleTracks=b=>getTextTracksList(b.media,b=>[eO.SUBTITLES,eO.CAPTIONS].includes(b.kind)).sort((b,g)=>b.kind>=g.kind?1:-1),getShowingSubtitleTracks=b=>getTextTracksList(b.media,b=>b.mode===eN.SHOWING&&[eO.SUBTITLES,eO.CAPTIONS].includes(b.kind)),toggleSubtitleTracks=(b,g)=>{let M=getSubtitleTracks(b),N=getShowingSubtitleTracks(b),B=!!N.length;if(M.length){if(!1===g||B&&!0!==g)updateTracksModeTo(eN.DISABLED,M,N);else if(!0===g||!B&&!1!==g){let g=M[0],{options:B}=b;if(!(null==B?void 0:B.noSubtitlesLangPref)){let b=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),N=b?[b,...globalThis.navigator.languages]:globalThis.navigator.languages,B=M.filter(b=>N.some(g=>b.language.toLowerCase().startsWith(g.split("-")[0]))).sort((b,g)=>{let M=N.findIndex(g=>b.language.toLowerCase().startsWith(g.split("-")[0])),B=N.findIndex(b=>g.language.toLowerCase().startsWith(b.split("-")[0]));return M-B});B[0]&&(g=B[0])}let{language:W,label:K,kind:Y}=g;updateTracksModeTo(eN.DISABLED,M,N),updateTracksModeTo(eN.SHOWING,M,[{language:W,label:K,kind:Y}])}}},areValuesEq=(b,g)=>b===g||typeof b==typeof g&&(!!("number"==typeof b&&Number.isNaN(b)&&Number.isNaN(g))||"object"==typeof b&&(Array.isArray(b)?areArraysEq(b,g):Object.entries(b).every(([b,M])=>b in g&&areValuesEq(M,g[b])))),areArraysEq=(b,g)=>{let M=Array.isArray(b),N=Array.isArray(g);return M===N&&(!M&&!N||b.length===g.length&&b.every((b,M)=>areValuesEq(b,g[M])))},e7=Object.values(eB),e6=hasVolumeSupportAsync().then(b=>B=b),prepareStateOwners=async(...b)=>{await b.filter(b=>b).forEach(async b=>{if(!("localName"in b&&b instanceof eK.HTMLElement))return;let g=b.localName;if(!g.includes("-"))return;let M=eK.customElements.get(g);M&&b instanceof M||(await eK.customElements.whenDefined(g),eK.customElements.upgrade(b))})},tt={mediaPaused:{get(b){var g;let{media:M}=b;return null==(g=null==M?void 0:M.paused)||g},set(b,g){let{media:M}=g;M&&(b?M.pause():M.play().catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(b,g){let{media:M}=b;return!!M&&(g?"playing"===g.type:!M.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(b){var g;let{media:M}=b;return null!=(g=null==M?void 0:M.ended)&&g},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(b){var g;let{media:M}=b;return null!=(g=null==M?void 0:M.playbackRate)?g:1},set(b,g){let{media:M}=g;M&&Number.isFinite(+b)&&(M.playbackRate=+b)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(b){var g;let{media:M}=b;return null!=(g=null==M?void 0:M.muted)&&g},set(b,g){let{media:M}=g;M&&(M.muted=b)},mediaEvents:["volumechange"]},mediaVolume:{get(b){var g;let{media:M}=b;return null!=(g=null==M?void 0:M.volume)?g:1},set(b,g){let{media:M}=g;if(M){try{null==b?eK.localStorage.removeItem("media-chrome-pref-volume"):eK.localStorage.setItem("media-chrome-pref-volume",b.toString())}catch(b){}Number.isFinite(+b)&&(M.volume=+b)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(b,g)=>{let{options:{noVolumePref:M}}=g;if(!M)try{let M=eK.localStorage.getItem("media-chrome-pref-volume");if(null==M)return;tt.mediaVolume.set(+M,g),b(M)}catch(b){console.debug("Error getting volume pref",b)}}]},mediaVolumeLevel:{get(b){let{media:g}=b;return void 0===(null==g?void 0:g.volume)?"high":g.muted||0===g.volume?"off":g.volume<.5?"low":g.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(b){var g;let{media:M}=b;return null!=(g=null==M?void 0:M.currentTime)?g:0},set(b,g){let{media:M}=g;(null==M?void 0:M.readyState)&&(M.currentTime=b)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(b){let{media:g,options:{defaultDuration:M}={}}=b;return M&&(!g||!g.duration||Number.isNaN(g.duration)||!Number.isFinite(g.duration))?M:Number.isFinite(null==g?void 0:g.duration)?g.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(b){let{media:g}=b;return(null==g?void 0:g.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(b){var g;let{media:M}=b;if(!(null==(g=null==M?void 0:M.seekable)?void 0:g.length))return;let N=M.seekable.start(0),B=M.seekable.end(M.seekable.length-1);if(N||B)return[Number(N.toFixed(3)),Number(B.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(b){var g;let{media:M}=b,N=null!=(g=null==M?void 0:M.buffered)?g:[];return Array.from(N).map((b,g)=>[Number(N.start(g).toFixed(3)),Number(N.end(g).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(b){let{media:g,options:{defaultStreamType:M}={}}=b,N=[eB.LIVE,eB.ON_DEMAND].includes(M)?M:void 0;if(!g)return N;let{streamType:B}=g;if(e7.includes(B))return B===eB.UNKNOWN?N:B;let W=g.duration;return W===1/0?eB.LIVE:Number.isFinite(W)?eB.ON_DEMAND:N},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(b){let{media:g}=b;if(!g)return Number.NaN;let{targetLiveWindow:M}=g,N=tt.mediaStreamType.get(b);return(null==M||Number.isNaN(M))&&N===eB.LIVE?0:M},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(b){let{media:g,options:{liveEdgeOffset:M=10}={}}=b;if(!g)return!1;if("number"==typeof g.liveEdgeStart)return!Number.isNaN(g.liveEdgeStart)&&g.currentTime>=g.liveEdgeStart;let N=tt.mediaStreamType.get(b)===eB.LIVE;if(!N)return!1;let B=g.seekable;if(!B)return!0;if(!B.length)return!1;let W=B.end(B.length-1)-M;return g.currentTime>=W},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:b=>getSubtitleTracks(b).map(({kind:b,label:g,language:M})=>({kind:b,label:g,language:M})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:b=>getShowingSubtitleTracks(b).map(({kind:b,label:g,language:M})=>({kind:b,label:g,language:M})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(b,g)=>{var M,N;let{media:B,options:W}=g;if(!B)return;let updateDefaultSubtitlesCallback=b=>{var M;if(!W.defaultSubtitles)return;let N=b&&![eO.CAPTIONS,eO.SUBTITLES].includes(null==(M=null==b?void 0:b.track)?void 0:M.kind);N||toggleSubtitleTracks(g,!0)};return null==(M=B.textTracks)||M.addEventListener("addtrack",updateDefaultSubtitlesCallback),null==(N=B.textTracks)||N.addEventListener("removetrack",updateDefaultSubtitlesCallback),updateDefaultSubtitlesCallback(),()=>{var b,g;null==(b=B.textTracks)||b.removeEventListener("addtrack",updateDefaultSubtitlesCallback),null==(g=B.textTracks)||g.removeEventListener("removetrack",updateDefaultSubtitlesCallback)}}]},mediaChaptersCues:{get(b){var g;let{media:M}=b;if(!M)return[];let[N]=getTextTracksList(M,{kind:eO.CHAPTERS});return Array.from(null!=(g=null==N?void 0:N.cues)?g:[]).map(({text:b,startTime:g,endTime:M})=>({text:b,startTime:g,endTime:M}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(b,g)=>{let{media:M}=g;if(!M)return;let N=M.querySelector('track[kind="chapters"][default][src]');return null==N||N.addEventListener("load",b),()=>{null==N||N.removeEventListener("load",b)}}]},mediaIsPip:{get(b){var g,M;let{media:N,documentElement:B}=b;if(!N||!B||!B.pictureInPictureElement)return!1;if(B.pictureInPictureElement===N)return!0;if(B.pictureInPictureElement instanceof HTMLMediaElement)return null!=(g=N.localName)&&!!g.includes("-")&&containsComposedNode(N,B.pictureInPictureElement);if(B.pictureInPictureElement.localName.includes("-")){let b=B.pictureInPictureElement.shadowRoot;for(;null==b?void 0:b.pictureInPictureElement;){if(b.pictureInPictureElement===N)return!0;b=null==(M=b.pictureInPictureElement)?void 0:M.shadowRoot}}return!1},set(b,g){let{media:M}=g;if(M){if(b){if(!eY.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!M.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}let warnNotReady=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};M.requestPictureInPicture().catch(b=>{if(11===b.code){if(!M.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(0===M.readyState&&"none"===M.preload){let cleanup=()=>{M.removeEventListener("loadedmetadata",tryPip),M.preload="none"},tryPip=()=>{M.requestPictureInPicture().catch(warnNotReady),cleanup()};M.addEventListener("loadedmetadata",tryPip),M.preload="metadata",setTimeout(()=>{0===M.readyState&&warnNotReady(),cleanup()},1e3)}else throw b}else throw b})}else eY.pictureInPictureElement&&eY.exitPictureInPicture()}},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(b){var g;let{media:M}=b;return[...null!=(g=null==M?void 0:M.videoRenditions)?g:[]].map(b=>({...b}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(b){var g,M,N;let{media:B}=b;return null==(N=null==(M=null==B?void 0:B.videoRenditions)?void 0:M[null==(g=B.videoRenditions)?void 0:g.selectedIndex])?void 0:N.id},set(b,g){let{media:M}=g;if(!(null==M?void 0:M.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}let N=Array.prototype.findIndex.call(M.videoRenditions,g=>g.id==b);M.videoRenditions.selectedIndex!=N&&(M.videoRenditions.selectedIndex=N)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(b){var g;let{media:M}=b;return[...null!=(g=null==M?void 0:M.audioTracks)?g:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(b){var g,M;let{media:N}=b;return null==(M=[...null!=(g=null==N?void 0:N.audioTracks)?g:[]].find(b=>b.enabled))?void 0:M.id},set(b,g){let{media:M}=g;if(!(null==M?void 0:M.audioTracks)){console.warn("MediaChrome: Audio track selection not supported by this media.");return}for(let g of M.audioTracks)g.enabled=b==g.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(b){var g;let{media:M,documentElement:N,fullscreenElement:B=M}=b;if(!M||!N)return!1;if(!N[e2.element])return"webkitDisplayingFullscreen"in M&&"webkitPresentationMode"in M&&M.webkitDisplayingFullscreen&&M.webkitPresentationMode===eG.FULLSCREEN;if(N[e2.element]===B)return!0;if(N[e2.element].localName.includes("-")){let b=N[e2.element].shadowRoot;if(!(e2.element in b))return containsComposedNode(N[e2.element],B);for(;null==b?void 0:b[e2.element];){if(b[e2.element]===B)return!0;b=null==(g=b[e2.element])?void 0:g.shadowRoot}}return!1},set(b,g){var M,N;let{media:B,fullscreenElement:W,documentElement:K}=g;if(!b&&(null==K?void 0:K[e2.exit])){let b=null==(M=null==K?void 0:K[e2.exit])?void 0:M.call(K);b instanceof Promise&&b.catch(()=>{});return}if(null==W?void 0:W[e2.enter]){let b=null==(N=W[e2.enter])?void 0:N.call(W);b instanceof Promise&&b.catch(()=>{})}else(null==B?void 0:B.webkitEnterFullscreen)?B.webkitEnterFullscreen():(null==B?void 0:B.requestFullscreen)&&B.requestFullscreen()},rootEvents:e2.rootEvents,mediaEvents:e2.mediaEvents},mediaIsCasting:{get(b){var g;let{media:M}=b;return null!=M&&!!M.remote&&(null==(g=M.remote)?void 0:g.state)!=="disconnected"&&!!M.remote.state},set(b,g){var M,N;let{media:B}=g;if(B&&(!b||(null==(M=B.remote)?void 0:M.state)==="disconnected")&&(b||(null==(N=B.remote)?void 0:N.state)==="connected")){if("function"!=typeof B.remote.prompt){console.warn("MediaChrome: Casting is not supported in this environment");return}B.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(b,g){let{media:M}=g;if(M){if(!(M.webkitShowPlaybackTargetPicker&&eK.WebKitPlaybackTargetAvailabilityEvent)){console.warn("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}M.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(b){let{media:g}=b;if(!e5||!hasFullscreenSupport(g))return eU.UNSUPPORTED}},mediaPipUnavailable:{get(b){let{media:g}=b;if(!e4||!hasPipSupport(g))return eU.UNSUPPORTED}},mediaVolumeUnavailable:{get(b){let{media:g}=b;if(!1===B||(null==g?void 0:g.volume)==void 0)return eU.UNSUPPORTED},stateOwnersUpdateHandlers:[b=>{null==B&&e6.then(g=>b(g?void 0:eU.UNSUPPORTED))}]},mediaCastUnavailable:{get(b,{availability:g="not-available"}={}){var M;let{media:N}=b;return e8&&(null==(M=null==N?void 0:N.remote)?void 0:M.state)?null!=g&&"available"!==g?eU.UNAVAILABLE:void 0:eU.UNSUPPORTED},stateOwnersUpdateHandlers:[(b,g)=>{var M;let{media:N}=g;if(!N)return;let B=N.disableRemotePlayback||N.hasAttribute("disableremoteplayback");return B||null==(M=null==N?void 0:N.remote)||M.watchAvailability(g=>{b({availability:g?"available":"not-available"})}).catch(g=>{"NotSupportedError"===g.name?b({availability:null}):b({availability:"not-available"})}),()=>{var b;null==(b=null==N?void 0:N.remote)||b.cancelWatchAvailability()}}]},mediaAirplayUnavailable:{get:(b,g)=>e9?(null==g?void 0:g.availability)==="not-available"?eU.UNAVAILABLE:void 0:eU.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(b,g)=>{var M;let{media:N}=g;if(!N)return;let B=N.disableRemotePlayback||N.hasAttribute("disableremoteplayback");return B||null==(M=null==N?void 0:N.remote)||M.watchAvailability(g=>{b({availability:g?"available":"not-available"})}).catch(g=>{"NotSupportedError"===g.name?b({availability:null}):b({availability:"not-available"})}),()=>{var b;null==(b=null==N?void 0:N.remote)||b.cancelWatchAvailability()}}]},mediaRenditionUnavailable:{get(b){var g;let{media:M}=b;return(null==M?void 0:M.videoRenditions)?(null==(g=M.videoRenditions)?void 0:g.length)?void 0:eU.UNAVAILABLE:eU.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(b){var g,M;let{media:N}=b;return(null==N?void 0:N.audioTracks)?(null!=(M=null==(g=N.audioTracks)?void 0:g.length)?M:0)<=1?eU.UNAVAILABLE:void 0:eU.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]}},tr={[eC.MEDIA_PREVIEW_REQUEST](b,g,{detail:M}){var N,B,W;let K,Y;let{media:et}=g,er=null!=M?M:void 0;if(et&&null!=er){let[b]=getTextTracksList(et,{kind:eO.METADATA,label:"thumbnails"}),g=Array.prototype.find.call(null!=(N=null==b?void 0:b.cues)?N:[],(b,g,M)=>0===g?b.endTime>er:g===M.length-1?b.startTime<=er:b.startTime<=er&&b.endTime>er);if(g){let b=/'^(?:[a-z]+:)?\/\//i.test(g.text)?void 0:null==(B=null==et?void 0:et.querySelector('track[label="thumbnails"]'))?void 0:B.src,M=new URL(g.text,b),N=new URLSearchParams(M.hash).get("#xywh");Y=N.split(","),K=M.href}}let en=b.mediaDuration.get(g),es=b.mediaChaptersCues.get(g),eo=null==(W=es.find((b,g,M)=>g===M.length-1&&en===b.endTime?b.startTime<=er&&b.endTime>=er:b.startTime<=er&&b.endTime>er))?void 0:W.text;return null!=M&&null==eo&&(eo=""),{mediaPreviewTime:er,mediaPreviewImage:K,mediaPreviewCoords:Y,mediaPreviewChapter:eo}},[eC.MEDIA_PAUSE_REQUEST](b,g){b.mediaPaused.set(!0,g)},[eC.MEDIA_PLAY_REQUEST](b,g){var M;let N=b.mediaStreamType.get(g)===eB.LIVE;if(N){let N=!(b.mediaTargetLiveWindow.get(g)>0),B=null==(M=b.mediaSeekable.get(g))?void 0:M[1];N&&B&&b.mediaCurrentTime.set(B,g)}b.mediaPaused.set(!1,g)},[eC.MEDIA_PLAYBACK_RATE_REQUEST](b,g,{detail:M}){b.mediaPlaybackRate.set(M,g)},[eC.MEDIA_MUTE_REQUEST](b,g){b.mediaMuted.set(!0,g)},[eC.MEDIA_UNMUTE_REQUEST](b,g){b.mediaVolume.get(g)||b.mediaVolume.set(.25,g),b.mediaMuted.set(!1,g)},[eC.MEDIA_VOLUME_REQUEST](b,g,{detail:M}){M&&b.mediaMuted.get(g)&&b.mediaMuted.set(!1,g),b.mediaVolume.set(M,g)},[eC.MEDIA_SEEK_REQUEST](b,g,{detail:M}){b.mediaCurrentTime.set(M,g)},[eC.MEDIA_SEEK_TO_LIVE_REQUEST](b,g){var M;let N=null==(M=b.mediaSeekable.get(g))?void 0:M[1];Number.isNaN(Number(N))&&b.mediaCurrentTime.set(N,g)},[eC.MEDIA_SHOW_SUBTITLES_REQUEST](b,g,{detail:M}){var N;let{options:B}=g,W=getSubtitleTracks(g),K=parseTracks(M),Y=null==(N=K[0])?void 0:N.language;Y&&!B.noSubtitlesLangPref&&eK.localStorage.setItem("media-chrome-pref-subtitles-lang",Y),updateTracksModeTo(eN.SHOWING,W,K)},[eC.MEDIA_DISABLE_SUBTITLES_REQUEST](b,g,{detail:M}){let N=getSubtitleTracks(g),B=null!=M?M:[];updateTracksModeTo(eN.DISABLED,N,B)},[eC.MEDIA_TOGGLE_SUBTITLES_REQUEST](b,g,{detail:M}){toggleSubtitleTracks(g,M)},[eC.MEDIA_RENDITION_REQUEST](b,g,{detail:M}){b.mediaRenditionSelected.set(M,g)},[eC.MEDIA_AUDIO_TRACK_REQUEST](b,g,{detail:M}){b.mediaAudioTrackEnabled.set(M,g)},[eC.MEDIA_ENTER_PIP_REQUEST](b,g){b.mediaIsFullscreen.get(g)&&b.mediaIsFullscreen.set(!1,g),b.mediaIsPip.set(!0,g)},[eC.MEDIA_EXIT_PIP_REQUEST](b,g){b.mediaIsPip.set(!1,g)},[eC.MEDIA_ENTER_FULLSCREEN_REQUEST](b,g){b.mediaIsPip.get(g)&&b.mediaIsPip.set(!1,g),b.mediaIsFullscreen.set(!0,g)},[eC.MEDIA_EXIT_FULLSCREEN_REQUEST](b,g){b.mediaIsFullscreen.set(!1,g)},[eC.MEDIA_ENTER_CAST_REQUEST](b,g){b.mediaIsFullscreen.get(g)&&b.mediaIsFullscreen.set(!1,g),b.mediaIsCasting.set(!0,g)},[eC.MEDIA_EXIT_CAST_REQUEST](b,g){b.mediaIsCasting.set(!1,g)},[eC.MEDIA_AIRPLAY_REQUEST](b,g){b.mediaIsAirplaying.set(!0,g)}};var media_store_default=({media:b,fullscreenElement:g,documentElement:M,stateMediator:N=tt,requestMap:B=tr,options:W={},monitorStateOwnersOnlyWithSubscriptions:K=!0})=>{let Y;let et=[],er={options:{...W}},en=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),updateState=b=>{void 0==b||areValuesEq(b,en)||(en=Object.freeze({...en,...b}),et.forEach(b=>b(en)))},updateStateFromFacade=()=>{let b=Object.entries(N).reduce((b,[g,{get:M}])=>(b[g]=M(er),b),{});updateState(b)},es={},updateStateOwners=async(b,g)=>{var M,B,W,en,eo,el,ed,eu,ec,em,eh,ep,e_,ev,eb,eg;let ef=!!Y;if(Y={...er,...null!=Y?Y:{},...b},ef)return;await prepareStateOwners(...Object.values(b));let eE=et.length>0&&0===g&&K,ey=er.media!==Y.media,eA=(null==(M=er.media)?void 0:M.textTracks)!==(null==(B=Y.media)?void 0:B.textTracks),ek=(null==(W=er.media)?void 0:W.videoRenditions)!==(null==(en=Y.media)?void 0:en.videoRenditions),eT=(null==(eo=er.media)?void 0:eo.audioTracks)!==(null==(el=Y.media)?void 0:el.audioTracks),ew=(null==(ed=er.media)?void 0:ed.remote)!==(null==(eu=Y.media)?void 0:eu.remote),eS=er.documentElement!==Y.documentElement,eC=!!er.media&&(ey||eE),eI=!!(null==(ec=er.media)?void 0:ec.textTracks)&&(eA||eE),eM=!!(null==(em=er.media)?void 0:em.videoRenditions)&&(ek||eE),ex=!!(null==(eh=er.media)?void 0:eh.audioTracks)&&(eT||eE),eR=!!(null==(ep=er.media)?void 0:ep.remote)&&(ew||eE),eL=!!er.documentElement&&(eS||eE),eD=eC||eI||eM||ex||eR||eL,eO=0===et.length&&1===g&&K,eN=!!Y.media&&(ey||eO),eP=!!(null==(e_=Y.media)?void 0:e_.textTracks)&&(eA||eO),eU=!!(null==(ev=Y.media)?void 0:ev.videoRenditions)&&(ek||eO),eB=!!(null==(eb=Y.media)?void 0:eb.audioTracks)&&(eT||eO),eG=!!(null==(eg=Y.media)?void 0:eg.remote)&&(ew||eO),eW=!!Y.documentElement&&(eS||eO),eH=eN||eP||eU||eB||eG||eW;if(!(eD||eH)){Object.entries(Y).forEach(([b,g])=>{er[b]=g}),updateStateFromFacade(),Y=void 0;return}Object.entries(N).forEach(([b,{get:g,mediaEvents:M=[],textTracksEvents:N=[],videoRenditionsEvents:B=[],audioTracksEvents:W=[],remoteEvents:K=[],rootEvents:et=[],stateOwnersUpdateHandlers:en=[]}])=>{let eo;es[b]||(es[b]={});let handler=M=>{let N=g(er,M);updateState({[b]:N})};eo=es[b].mediaEvents,M.forEach(g=>{eo&&eC&&(er.media.removeEventListener(g,eo),es[b].mediaEvents=void 0),eN&&(Y.media.addEventListener(g,handler),es[b].mediaEvents=handler)}),eo=es[b].textTracksEvents,N.forEach(g=>{var M,N;eo&&eI&&(null==(M=er.media.textTracks)||M.removeEventListener(g,eo),es[b].textTracksEvents=void 0),eP&&(null==(N=Y.media.textTracks)||N.addEventListener(g,handler),es[b].textTracksEvents=handler)}),eo=es[b].videoRenditionsEvents,B.forEach(g=>{var M,N;eo&&eM&&(null==(M=er.media.videoRenditions)||M.removeEventListener(g,eo),es[b].videoRenditionsEvents=void 0),eU&&(null==(N=Y.media.videoRenditions)||N.addEventListener(g,handler),es[b].videoRenditionsEvents=handler)}),eo=es[b].audioTracksEvents,W.forEach(g=>{var M,N;eo&&ex&&(null==(M=er.media.audioTracks)||M.removeEventListener(g,eo),es[b].audioTracksEvents=void 0),eB&&(null==(N=Y.media.audioTracks)||N.addEventListener(g,handler),es[b].audioTracksEvents=handler)}),eo=es[b].remoteEvents,K.forEach(g=>{var M,N;eo&&eR&&(null==(M=er.media.remote)||M.removeEventListener(g,eo),es[b].remoteEvents=void 0),eG&&(null==(N=Y.media.remote)||N.addEventListener(g,handler),es[b].remoteEvents=handler)}),eo=es[b].rootEvents,et.forEach(g=>{eo&&eL&&(er.documentElement.removeEventListener(g,eo),es[b].rootEvents=void 0),eW&&(Y.documentElement.addEventListener(g,handler),es[b].rootEvents=handler)});let el=es[b].stateOwnersUpdateHandlers;en.forEach(g=>{el&&eD&&el(),eH&&(es[b].stateOwnersUpdateHandlers=g(handler,Y))})}),Object.entries(Y).forEach(([b,g])=>{er[b]=g}),updateStateFromFacade(),Y=void 0};return updateStateOwners({media:b,fullscreenElement:g,documentElement:M,options:W}),{dispatch(b){let{type:g,detail:M}=b;if(B[g]){updateState(B[g](N,er,b));return}"mediaelementchangerequest"===g?updateStateOwners({media:M}):"fullscreenelementchangerequest"===g?updateStateOwners({fullscreenElement:M}):"documentelementchangerequest"===g?updateStateOwners({documentElement:M}):"optionschangerequest"===g&&Object.entries(null!=M?M:{}).forEach(([b,g])=>{er.options[b]=g})},getState:()=>en,subscribe:b=>(updateStateOwners({},et.length+1),et.push(b),b(en),()=>{let g=et.indexOf(b);g>=0&&(updateStateOwners({},et.length-1),et.splice(g,1))})}},media_controller_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_controller_privateGet=(b,g,M)=>(media_controller_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_controller_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_controller_privateSet=(b,g,M,N)=>(media_controller_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M),media_controller_privateMethod=(b,g,M)=>(media_controller_accessCheck(b,g,"access private method"),M);let tn=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],ts={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset"};let MediaController=class MediaController extends MediaContainer{constructor(){super(),media_controller_privateAdd(this,af),media_controller_privateAdd(this,ay),media_controller_privateAdd(this,ak),media_controller_privateAdd(this,ah,new AttributeTokenList(this,ts.HOTKEYS)),media_controller_privateAdd(this,ap,void 0),media_controller_privateAdd(this,a_,void 0),media_controller_privateAdd(this,av,void 0),media_controller_privateAdd(this,ab,void 0),media_controller_privateAdd(this,ag,b=>{var g;null==(g=media_controller_privateGet(this,a_))||g.dispatch(b)}),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,this.associateElement(this);let b={};media_controller_privateSet(this,av,g=>{Object.entries(g).forEach(([g,M])=>{if(g in b&&b[g]===M)return;this.propagateMediaState(g,M);let N=g.toLowerCase(),B=new eK.CustomEvent(eD[N],{composed:!0,detail:M});this.dispatchEvent(B)}),b=g}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(ts.NO_HOTKEYS,ts.HOTKEYS,ts.DEFAULT_STREAM_TYPE,ts.DEFAULT_SUBTITLES,ts.DEFAULT_DURATION)}get mediaStore(){return media_controller_privateGet(this,a_)}set mediaStore(b){var g,M;if(media_controller_privateGet(this,a_)&&(null==(g=media_controller_privateGet(this,ab))||g.call(this),media_controller_privateSet(this,ab,void 0)),media_controller_privateSet(this,a_,b),!media_controller_privateGet(this,a_)&&!this.hasAttribute(ts.NO_DEFAULT_STORE)){media_controller_privateMethod(this,af,aE).call(this);return}media_controller_privateSet(this,ab,null==(M=media_controller_privateGet(this,a_))?void 0:M.subscribe(media_controller_privateGet(this,av)))}get fullscreenElement(){var b;return null!=(b=media_controller_privateGet(this,ap))?b:this}set fullscreenElement(b){var g;this.hasAttribute(ts.FULLSCREEN_ELEMENT)&&this.removeAttribute(ts.FULLSCREEN_ELEMENT),media_controller_privateSet(this,ap,b),null==(g=media_controller_privateGet(this,a_))||g.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}attributeChangedCallback(b,g,M){var N,B,W,K,Y,et;if(super.attributeChangedCallback(b,g,M),b===ts.NO_HOTKEYS)M!==g&&""===M?(this.hasAttribute(ts.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):M!==g&&null===M&&this.enableHotkeys();else if(b===ts.HOTKEYS)media_controller_privateGet(this,ah).value=M;else if(b===ts.DEFAULT_SUBTITLES&&M!==g)null==(N=media_controller_privateGet(this,a_))||N.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(ts.DEFAULT_SUBTITLES)}});else if(b===ts.DEFAULT_STREAM_TYPE)null==(W=media_controller_privateGet(this,a_))||W.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(B=this.getAttribute(ts.DEFAULT_STREAM_TYPE))?B:void 0}});else if(b===ts.LIVE_EDGE_OFFSET)null==(K=media_controller_privateGet(this,a_))||K.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(ts.LIVE_EDGE_OFFSET)?+this.getAttribute(ts.LIVE_EDGE_OFFSET):void 0}});else if(b===ts.FULLSCREEN_ELEMENT){let b=M?null==(Y=this.getRootNode())?void 0:Y.getElementById(M):void 0;media_controller_privateSet(this,ap,b),null==(et=media_controller_privateGet(this,a_))||et.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}}connectedCallback(){var b,g;media_controller_privateGet(this,a_)||this.hasAttribute(ts.NO_DEFAULT_STORE)||media_controller_privateMethod(this,af,aE).call(this),null==(b=media_controller_privateGet(this,a_))||b.dispatch({type:"documentelementchangerequest",detail:eY}),super.connectedCallback(),media_controller_privateGet(this,a_)&&!media_controller_privateGet(this,ab)&&media_controller_privateSet(this,ab,null==(g=media_controller_privateGet(this,a_))?void 0:g.subscribe(media_controller_privateGet(this,av))),this.enableHotkeys()}disconnectedCallback(){var b,g,M,N;null==(b=super.disconnectedCallback)||b.call(this),media_controller_privateGet(this,a_)&&(null==(g=media_controller_privateGet(this,a_))||g.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(M=media_controller_privateGet(this,a_))||M.dispatch({type:eC.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),media_controller_privateGet(this,ab)&&(null==(N=media_controller_privateGet(this,ab))||N.call(this),media_controller_privateSet(this,ab,void 0))}mediaSetCallback(b){var g;super.mediaSetCallback(b),null==(g=media_controller_privateGet(this,a_))||g.dispatch({type:"mediaelementchangerequest",detail:b}),b.hasAttribute("tabindex")||(b.tabIndex=-1)}mediaUnsetCallback(b){var g;super.mediaUnsetCallback(b),null==(g=media_controller_privateGet(this,a_))||g.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(b,g){propagateMediaState(this.mediaStateReceivers,b,g)}associateElement(b){if(!b)return;let{associatedElementSubscriptions:g}=this;if(g.has(b))return;let M=this.registerMediaStateReceiver.bind(this),N=this.unregisterMediaStateReceiver.bind(this),B=monitorForMediaStateReceivers(b,M,N);Object.values(eC).forEach(g=>{b.addEventListener(g,media_controller_privateGet(this,ag))}),g.set(b,B)}unassociateElement(b){if(!b)return;let{associatedElementSubscriptions:g}=this;if(!g.has(b))return;let M=g.get(b);M(),g.delete(b),Object.values(eC).forEach(g=>{b.removeEventListener(g,media_controller_privateGet(this,ag))})}registerMediaStateReceiver(b){if(!b)return;let g=this.mediaStateReceivers,M=g.indexOf(b);!(M>-1)&&(g.push(b),media_controller_privateGet(this,a_)&&Object.entries(media_controller_privateGet(this,a_).getState()).forEach(([g,M])=>{propagateMediaState([b],g,M)}))}unregisterMediaStateReceiver(b){let g=this.mediaStateReceivers,M=g.indexOf(b);M<0||g.splice(M,1)}enableHotkeys(){this.addEventListener("keydown",media_controller_privateMethod(this,ak,aT))}disableHotkeys(){this.removeEventListener("keydown",media_controller_privateMethod(this,ak,aT)),this.removeEventListener("keyup",media_controller_privateMethod(this,ay,aA))}get hotkeys(){return media_controller_privateGet(this,ah)}keyboardShortcutHandler(b){var g,M,N,B,W,K;let Y,et,er;let en=(null!=(B=null!=(N=null==(g=b.target.getAttribute(ts.KEYS_USED))?void 0:g.split(" "))?N:null==(M=b.target)?void 0:M.keysUsed)?B:[]).map(b=>"Space"===b?" ":b).filter(Boolean);if(!(en.includes(b.key)||media_controller_privateGet(this,ah).contains(`no${b.key.toLowerCase()}`))&&!(" "===b.key&&media_controller_privateGet(this,ah).contains("nospace")))switch(b.key){case" ":case"k":Y=media_controller_privateGet(this,a_).getState().mediaPaused?eC.MEDIA_PLAY_REQUEST:eC.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new eK.CustomEvent(Y,{composed:!0,bubbles:!0}));break;case"m":Y="off"===this.mediaStore.getState().mediaVolumeLevel?eC.MEDIA_UNMUTE_REQUEST:eC.MEDIA_MUTE_REQUEST,this.dispatchEvent(new eK.CustomEvent(Y,{composed:!0,bubbles:!0}));break;case"f":Y=this.mediaStore.getState().mediaIsFullscreen?eC.MEDIA_EXIT_FULLSCREEN_REQUEST:eC.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new eK.CustomEvent(Y,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new eK.CustomEvent(eC.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let b=this.hasAttribute(ts.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(ts.KEYBOARD_BACKWARD_SEEK_OFFSET):10;et=Math.max((null!=(W=this.mediaStore.getState().mediaCurrentTime)?W:0)-b,0),er=new eK.CustomEvent(eC.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:et}),this.dispatchEvent(er);break}case"ArrowRight":{let b=this.hasAttribute(ts.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(ts.KEYBOARD_FORWARD_SEEK_OFFSET):10;et=Math.max((null!=(K=this.mediaStore.getState().mediaCurrentTime)?K:0)+b,0),er=new eK.CustomEvent(eC.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:et}),this.dispatchEvent(er)}}}};ah=new WeakMap,ap=new WeakMap,a_=new WeakMap,av=new WeakMap,ab=new WeakMap,ag=new WeakMap,af=new WeakSet,aE=function(){var b;this.mediaStore=media_store_default({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(ts.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(ts.DEFAULT_DURATION)?+this.getAttribute(ts.DEFAULT_DURATION):void 0,defaultStreamType:null!=(b=this.getAttribute(ts.DEFAULT_STREAM_TYPE))?b:void 0,liveEdgeOffset:this.hasAttribute(ts.LIVE_EDGE_OFFSET)?+this.getAttribute(ts.LIVE_EDGE_OFFSET):void 0,noVolumePref:this.hasAttribute(ts.NO_VOLUME_PREF),noSubtitlesLangPref:this.hasAttribute(ts.NO_SUBTITLES_LANG_PREF)}})},ay=new WeakSet,aA=function(b){let{key:g}=b;if(!tn.includes(g)){this.removeEventListener("keyup",media_controller_privateMethod(this,ay,aA));return}this.keyboardShortcutHandler(b)},ak=new WeakSet,aT=function(b){let{metaKey:g,altKey:M,key:N}=b;if(g||M||!tn.includes(N)){this.removeEventListener("keyup",media_controller_privateMethod(this,ay,aA));return}[" ","ArrowLeft","ArrowRight"].includes(N)&&!(media_controller_privateGet(this,ah).contains(`no${N.toLowerCase()}`)||" "===N&&media_controller_privateGet(this,ah).contains("nospace"))&&b.preventDefault(),this.addEventListener("keyup",media_controller_privateMethod(this,ay,aA),{once:!0})};let to=Object.values(eR),tl=Object.values(eM),getMediaUIAttributesFrom=b=>{var g,M,N,B;let{observedAttributes:W}=b.constructor;!W&&(null==(g=b.nodeName)?void 0:g.includes("-"))&&(eK.customElements.upgrade(b),{observedAttributes:W}=b.constructor);let K=null==(B=null==(N=null==(M=null==b?void 0:b.getAttribute)?void 0:M.call(b,eI.MEDIA_CHROME_ATTRIBUTES))?void 0:N.split)?void 0:B.call(N,/\s+/);return Array.isArray(W||K)?(W||K).filter(b=>to.includes(b)):[]},hasMediaUIProps=b=>{var g,M;return(null==(g=b.nodeName)?void 0:g.includes("-"))&&eK.customElements.get(null==(M=b.nodeName)?void 0:M.toLowerCase())&&!(b instanceof eK.customElements.get(b.nodeName.toLowerCase()))&&eK.customElements.upgrade(b),tl.some(g=>g in b)},isMediaStateReceiver=b=>hasMediaUIProps(b)||!!getMediaUIAttributesFrom(b).length,serializeTuple=b=>{var g;return null==(g=null==b?void 0:b.join)?void 0:g.call(b,":")},td={[eR.MEDIA_SUBTITLES_LIST]:stringifyTextTrackList,[eR.MEDIA_SUBTITLES_SHOWING]:stringifyTextTrackList,[eR.MEDIA_SEEKABLE]:serializeTuple,[eR.MEDIA_BUFFERED]:b=>null==b?void 0:b.map(serializeTuple).join(" "),[eR.MEDIA_PREVIEW_COORDS]:b=>null==b?void 0:b.join(" "),[eR.MEDIA_RENDITION_LIST]:stringifyRenditionList,[eR.MEDIA_AUDIO_TRACK_LIST]:stringifyAudioTrackList},setAttr=async(b,g,M)=>{var N,B;if(b.isConnected||await delay(0),"boolean"==typeof M||null==M)return setBooleanAttr(b,g,M);if("number"==typeof M)return setNumericAttr(b,g,M);if("string"==typeof M)return setStringAttr(b,g,M);if(Array.isArray(M)&&!M.length)return b.removeAttribute(g);let W=null!=(B=null==(N=td[g])?void 0:N.call(td,M))?B:M;return b.setAttribute(g,W)},isMediaSlotElementDescendant=b=>{var g;return!!(null==(g=b.closest)?void 0:g.call(b,'*[slot="media"]'))},traverseForMediaStateReceivers=(b,g)=>{if(isMediaSlotElementDescendant(b))return;let traverseForMediaStateReceiversSync=(b,g)=>{var M,N;isMediaStateReceiver(b)&&g(b);let{children:B=[]}=null!=b?b:{},W=null!=(N=null==(M=null==b?void 0:b.shadowRoot)?void 0:M.children)?N:[],K=[...B,...W];K.forEach(b=>traverseForMediaStateReceivers(b,g))},M=null==b?void 0:b.nodeName.toLowerCase();if(M.includes("-")&&!isMediaStateReceiver(b)){eK.customElements.whenDefined(M).then(()=>{traverseForMediaStateReceiversSync(b,g)});return}traverseForMediaStateReceiversSync(b,g)},propagateMediaState=(b,g,M)=>{b.forEach(b=>{if(g in b){b[g]=M;return}let N=getMediaUIAttributesFrom(b),B=g.toLowerCase();N.includes(B)&&setAttr(b,B,M)})},monitorForMediaStateReceivers=(b,g,M)=>{traverseForMediaStateReceivers(b,g);let registerMediaStateReceiverHandler=b=>{var M;let N=null!=(M=null==b?void 0:b.composedPath()[0])?M:b.target;g(N)},unregisterMediaStateReceiverHandler=b=>{var g;let N=null!=(g=null==b?void 0:b.composedPath()[0])?g:b.target;M(N)};b.addEventListener(eC.REGISTER_MEDIA_STATE_RECEIVER,registerMediaStateReceiverHandler),b.addEventListener(eC.UNREGISTER_MEDIA_STATE_RECEIVER,unregisterMediaStateReceiverHandler);let N=[],slotChangeHandler=b=>{let B=b.target;"media"!==B.name&&(N.forEach(b=>traverseForMediaStateReceivers(b,M)),(N=[...B.assignedElements({flatten:!0})]).forEach(b=>traverseForMediaStateReceivers(b,g)))};b.addEventListener("slotchange",slotChangeHandler);let B=new MutationObserver(b=>{b.forEach(b=>{let{addedNodes:N=[],removedNodes:B=[],type:W,target:K,attributeName:Y}=b;"childList"===W?(Array.prototype.forEach.call(N,b=>traverseForMediaStateReceivers(b,g)),Array.prototype.forEach.call(B,b=>traverseForMediaStateReceivers(b,M))):"attributes"===W&&Y===eI.MEDIA_CHROME_ATTRIBUTES&&(isMediaStateReceiver(K)?g(K):M(K))})});return B.observe(b,{childList:!0,attributes:!0,subtree:!0}),()=>{traverseForMediaStateReceivers(b,M),b.removeEventListener("slotchange",slotChangeHandler),B.disconnect(),b.removeEventListener(eC.REGISTER_MEDIA_STATE_RECEIVER,registerMediaStateReceiverHandler),b.removeEventListener(eC.UNREGISTER_MEDIA_STATE_RECEIVER,unregisterMediaStateReceiverHandler)}};eK.customElements.get("media-controller")||eK.customElements.define("media-controller",MediaController);var tu=Object.defineProperty,media_chrome_button_defNormalProp=(b,g,M)=>g in b?tu(b,g,{enumerable:!0,configurable:!0,writable:!0,value:M}):b[g]=M,media_chrome_button_publicField=(b,g,M)=>(media_chrome_button_defNormalProp(b,"symbol"!=typeof g?g+"":g,M),M),media_chrome_button_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_chrome_button_privateGet=(b,g,M)=>(media_chrome_button_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_chrome_button_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_chrome_button_privateSet=(b,g,M,N)=>(media_chrome_button_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M);let tc=eY.createElement("template");tc.innerHTML=`
<style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, bold)
      var(--media-font-size, 14px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
    padding: var(--media-button-padding, var(--media-control-padding, 10px));
    justify-content: var(--media-button-justify-content, center);
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    box-sizing: border-box;
    transition: background .15s linear;
    pointer-events: auto;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }
  
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50 50 70 / .7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }
</style>
`;let MediaChromeButton=class MediaChromeButton extends eK.HTMLElement{constructor(b={}){if(super(),media_chrome_button_privateAdd(this,aw,void 0),media_chrome_button_publicField(this,"preventClick",!1),media_chrome_button_privateAdd(this,aS,b=>{this.preventClick||this.handleClick(b)}),media_chrome_button_privateAdd(this,aC,b=>{let{key:g}=b;if(!this.keysUsed.includes(g)){this.removeEventListener("keyup",media_chrome_button_privateGet(this,aC));return}this.preventClick||this.handleClick(b)}),media_chrome_button_privateAdd(this,aI,b=>{let{metaKey:g,altKey:M,key:N}=b;if(g||M||!this.keysUsed.includes(N)){this.removeEventListener("keyup",media_chrome_button_privateGet(this,aC));return}this.addEventListener("keyup",media_chrome_button_privateGet(this,aC),{once:!0})}),!this.shadowRoot){this.attachShadow({mode:"open"});let g=tc.content.cloneNode(!0);this.nativeEl=g;let M=b.slotTemplate;M||((M=eY.createElement("template")).innerHTML=`<slot>${b.defaultContent||""}</slot>`),this.nativeEl.appendChild(M.content.cloneNode(!0)),this.shadowRoot.appendChild(g)}}static get observedAttributes(){return["disabled",eI.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",media_chrome_button_privateGet(this,aS)),this.addEventListener("keydown",media_chrome_button_privateGet(this,aI)),this.tabIndex=0}disable(){this.removeEventListener("click",media_chrome_button_privateGet(this,aS)),this.removeEventListener("keydown",media_chrome_button_privateGet(this,aI)),this.removeEventListener("keyup",media_chrome_button_privateGet(this,aC)),this.tabIndex=-1}attributeChangedCallback(b,g,M){var N,B,W,K,Y;b===eI.MEDIA_CONTROLLER?(g&&(null==(B=null==(N=media_chrome_button_privateGet(this,aw))?void 0:N.unassociateElement)||B.call(N,this),media_chrome_button_privateSet(this,aw,null)),M&&this.isConnected&&(media_chrome_button_privateSet(this,aw,null==(W=this.getRootNode())?void 0:W.getElementById(M)),null==(Y=null==(K=media_chrome_button_privateGet(this,aw))?void 0:K.associateElement)||Y.call(K,this))):"disabled"===b&&M!==g&&(null==M?this.enable():this.disable())}connectedCallback(){var b,g,M;let{style:N}=getOrInsertCSSRule(this.shadowRoot,":host");N.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","button");let B=this.getAttribute(eI.MEDIA_CONTROLLER);B&&(media_chrome_button_privateSet(this,aw,null==(b=this.getRootNode())?void 0:b.getElementById(B)),null==(M=null==(g=media_chrome_button_privateGet(this,aw))?void 0:g.associateElement)||M.call(g,this))}disconnectedCallback(){var b,g;this.disable(),null==(g=null==(b=media_chrome_button_privateGet(this,aw))?void 0:b.unassociateElement)||g.call(b,this),media_chrome_button_privateSet(this,aw,null)}get keysUsed(){return["Enter"," "]}handleClick(b){}};aw=new WeakMap,aS=new WeakMap,aC=new WeakMap,aI=new WeakMap,eK.customElements.get("media-chrome-button")||eK.customElements.define("media-chrome-button",MediaChromeButton);let tm=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,th=eY.createElement("template");th.innerHTML=`
  <style>
  :host([${eR.MEDIA_IS_AIRPLAYING}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${eR.MEDIA_IS_AIRPLAYING}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${tm}</slot>
    <slot name="exit">${tm}</slot>
  </slot>
`;let updateAriaLabel=b=>{let g=b.mediaIsAirplaying?eH.EXIT_AIRPLAY():eH.ENTER_AIRPLAY();b.setAttribute("aria-label",g)};let MediaAirplayButton=class MediaAirplayButton extends MediaChromeButton{static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_IS_AIRPLAYING,eR.MEDIA_AIRPLAY_UNAVAILABLE]}constructor(b={}){super({slotTemplate:th,...b})}connectedCallback(){super.connectedCallback(),updateAriaLabel(this)}attributeChangedCallback(b,g,M){super.attributeChangedCallback(b,g,M),b===eR.MEDIA_IS_AIRPLAYING&&updateAriaLabel(this)}get mediaIsAirplaying(){return getBooleanAttr(this,eR.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(b){setBooleanAttr(this,eR.MEDIA_IS_AIRPLAYING,b)}get mediaAirplayUnavailable(){return getStringAttr(this,eR.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(b){setStringAttr(this,eR.MEDIA_AIRPLAY_UNAVAILABLE,b)}handleClick(){let b=new eK.CustomEvent(eC.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(b)}};function computePosition({anchor:b,floating:g,placement:M}){let{x:N,y:B}=computeCoordsFromPlacement(getElementRects({anchor:b,floating:g}),M);return{x:N,y:B}}function getElementRects({anchor:b,floating:g}){return{anchor:getRectRelativeToOffsetParent(b,g.offsetParent),floating:{x:0,y:0,width:g.offsetWidth,height:g.offsetHeight}}}function getRectRelativeToOffsetParent(b,g){let M=b.getBoundingClientRect(),N=g.getBoundingClientRect();return{x:M.x-N.x,y:M.y-N.y,width:M.width,height:M.height}}function computeCoordsFromPlacement({anchor:b,floating:g},M){let N;let B="x"===getSideAxis(M)?"y":"x",W="y"===B?"height":"width",K=getSide(M),Y=b.x+b.width/2-g.width/2,et=b.y+b.height/2-g.height/2,er=b[W]/2-g[W]/2;switch(K){case"top":N={x:Y,y:b.y-g.height};break;case"bottom":N={x:Y,y:b.y+b.height};break;case"right":N={x:b.x+b.width,y:et};break;case"left":N={x:b.x-g.width,y:et};break;default:N={x:b.x,y:b.y}}switch(M.split("-")[1]){case"start":N[B]-=er;break;case"end":N[B]+=er}return N}function getSide(b){return b.split("-")[0]}function getSideAxis(b){return["top","bottom"].includes(getSide(b))?"y":"x"}eK.customElements.get("media-airplay-button")||eK.customElements.define("media-airplay-button",MediaAirplayButton);var tp=Object.defineProperty,events_defNormalProp=(b,g,M)=>g in b?tp(b,g,{enumerable:!0,configurable:!0,writable:!0,value:M}):b[g]=M,events_publicField=(b,g,M)=>(events_defNormalProp(b,"symbol"!=typeof g?g+"":g,M),M);let InvokeEvent=class InvokeEvent extends Event{constructor({action:b="auto",relatedTarget:g,...M}){super("invoke",M),events_publicField(this,"action"),events_publicField(this,"relatedTarget"),this.action=b,this.relatedTarget=g}};let ToggleEvent=class ToggleEvent extends Event{constructor({newState:b,oldState:g,...M}){super("toggle",M),events_publicField(this,"newState"),events_publicField(this,"oldState"),this.newState=b,this.oldState=g}};var t_=Object.defineProperty,media_chrome_menu_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_chrome_menu_privateGet=(b,g,M)=>(media_chrome_menu_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_chrome_menu_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_chrome_menu_privateSet=(b,g,M,N)=>(media_chrome_menu_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M),media_chrome_menu_privateMethod=(b,g,M)=>(media_chrome_menu_accessCheck(b,g,"access private method"),M);function createMenuItem({type:b,text:g,value:M,checked:N}){let B=eY.createElement("media-chrome-menu-item");B.type=null!=b?b:"",B.part.add("menu-item"),b&&B.part.add(b),B.value=M,B.checked=N;let W=eY.createElement("span");return W.textContent=g,B.append(W),B}function createIndicator(b,g){let M=b.querySelector(`:scope > [slot="${g}"]`);if((null==M?void 0:M.nodeName)=="SLOT"&&(M=M.assignedElements({flatten:!0})[0]),M)return M.cloneNode(!0);let N=b.shadowRoot.querySelector(`[name="${g}"] > svg`);return N?N.cloneNode(!0):""}let tv=eY.createElement("template");tv.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
      border-radius: var(--media-menu-border-radius);
      border: var(--media-menu-border, none);
      display: var(--media-menu-display, inline-flex);
      transition: var(--media-menu-transition-in,
        visibility 0s,
        opacity .2s ease-out,
        transform .15s ease-out,
        left .2s ease-in-out,
        min-width .2s ease-in-out,
        min-height .2s ease-in-out
      ) !important;
      
      visibility: var(--media-menu-visibility, visible);
      opacity: var(--media-menu-opacity, 1);
      max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
      transform: var(--media-menu-transform-in, translateY(0) scale(1));
      flex-direction: column;
      
      min-height: 0;
      position: relative;
      box-sizing: border-box;
    }

    :host([hidden]) {
      transition: var(--media-menu-transition-out,
        visibility .15s ease-in,
        opacity .15s ease-in,
        transform .15s ease-in
      ) !important;
      visibility: var(--media-menu-hidden-visibility, hidden);
      opacity: var(--media-menu-hidden-opacity, 0);
      max-height: var(--media-menu-hidden-max-height,
        var(--media-menu-max-height, var(--_menu-max-height, 300px)));
      transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
      pointer-events: none;
    }

    :host([slot="submenu"]) {
      background: none;
      width: 100%;
      min-height: 100%;
      position: absolute;
      bottom: 0;
      right: -100%;
    }

    #container {
      display: flex;
      flex-direction: column;
      min-height: 0;
      transition: transform .2s ease-out;
      transform: translate(0, 0);
    }

    #container.has-expanded {
      transition: transform .2s ease-in;
      transform: translate(-100%, 0);
    }

    slot[name="header"] {
      display: flex;
      padding: .4em .7em;
      border-bottom: 1px solid rgb(255 255 255 / .25);
      cursor: default;
    }

    slot[name="header"][hidden] {
      display: none;
    }

    button[part~="back"] {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      display: inline-flex;
      align-items: center;
      cursor: pointer;
    }

    svg[part~="back"] {
      height: var(--media-menu-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
      margin-right: .5ch;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap);
      flex-direction: var(--media-menu-flex-direction, column);
      overflow: var(--media-menu-overflow, hidden auto);
      display: flex;
      min-height: 0;
    }

    :host([role="menu"]) slot:not([name]) {
      padding-block: .4em;
    }

    slot:not([name])::slotted([role="menu"]) {
      background: none;
    }

    media-chrome-menu-item > span {
      margin-right: .5ch;
      max-width: var(--media-menu-item-max-width);
      text-overflow: ellipsis;
      overflow: hidden;
    }
  </style>
  <style id="layout-row" media="width:0">

    slot[name="header"] {
      padding: .4em .5em;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap, .25em);
      flex-direction: var(--media-menu-flex-direction, row);
      padding-inline: .5em;
    }

    media-chrome-menu-item {
      padding: .3em .5em;
    }

    media-chrome-menu-item[aria-checked="true"] {
      background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
    }

    
    media-chrome-menu-item::part(checked-indicator) {
      display: var(--media-menu-item-checked-indicator-display, none);
    }
  </style>
  <div id="container">
    <slot name="header" hidden>
      <button part="back button" aria-label="Back to previous menu">
        <slot name="back-icon">
          <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
            <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
          </svg>
        </slot>
        <slot name="title"></slot>
      </button>
    </slot>
    <slot></slot>
  </div>
  <slot name="checked-indicator" hidden></slot>
`;let tb={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};let MediaChromeMenu=class MediaChromeMenu extends eK.HTMLElement{constructor(){super(),media_chrome_menu_privateAdd(this,aU),media_chrome_menu_privateAdd(this,aW),media_chrome_menu_privateAdd(this,aV),media_chrome_menu_privateAdd(this,aq),media_chrome_menu_privateAdd(this,aj),media_chrome_menu_privateAdd(this,az),media_chrome_menu_privateAdd(this,aX),media_chrome_menu_privateAdd(this,a0),media_chrome_menu_privateAdd(this,a2),media_chrome_menu_privateAdd(this,a5),media_chrome_menu_privateAdd(this,a9),media_chrome_menu_privateAdd(this,a7),media_chrome_menu_privateAdd(this,rt),media_chrome_menu_privateAdd(this,rn),media_chrome_menu_privateAdd(this,ro),media_chrome_menu_privateAdd(this,rd),media_chrome_menu_privateAdd(this,rc),media_chrome_menu_privateAdd(this,aM,void 0),media_chrome_menu_privateAdd(this,ax,void 0),media_chrome_menu_privateAdd(this,aR,void 0),media_chrome_menu_privateAdd(this,aL,""),media_chrome_menu_privateAdd(this,aD,null),media_chrome_menu_privateAdd(this,aO,new Set),media_chrome_menu_privateAdd(this,aN,void 0),media_chrome_menu_privateAdd(this,aP,!1),media_chrome_menu_privateAdd(this,aG,()=>{let b=media_chrome_menu_privateGet(this,aO),g=new Set(this.items);for(let M of b)g.has(M)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:M}));for(let M of g)b.has(M)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:M}));media_chrome_menu_privateSet(this,aO,g)}),media_chrome_menu_privateAdd(this,aY,()=>{media_chrome_menu_privateMethod(this,az,aQ).call(this,!1),media_chrome_menu_privateMethod(this,aX,aJ).call(this,!1)}),media_chrome_menu_privateAdd(this,aZ,()=>{media_chrome_menu_privateMethod(this,az,aQ).call(this,!1)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=this.constructor.template.content.cloneNode(!0),this.shadowRoot.append(this.nativeEl)),this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),media_chrome_menu_privateSet(this,aN,new MutationObserver(media_chrome_menu_privateGet(this,aG))),media_chrome_menu_privateGet(this,aN).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[tb.DISABLED,tb.HIDDEN,tb.STYLE,tb.ANCHOR,eI.MEDIA_CONTROLLER]}static formatMenuItemText(b){return b}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(b){switch(b.type){case"slotchange":media_chrome_menu_privateMethod(this,aU,aB).call(this,b);break;case"invoke":media_chrome_menu_privateMethod(this,aV,aF).call(this,b);break;case"click":media_chrome_menu_privateMethod(this,a0,a1).call(this,b);break;case"toggle":media_chrome_menu_privateMethod(this,a5,a4).call(this,b);break;case"focusout":media_chrome_menu_privateMethod(this,a7,a6).call(this,b);break;case"keydown":media_chrome_menu_privateMethod(this,rt,rr).call(this,b)}}connectedCallback(){var b,g;media_chrome_menu_privateMethod(this,aW,aH).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),media_chrome_menu_privateSet(this,aM,getAttributeMediaController(this)),null==(g=null==(b=media_chrome_menu_privateGet(this,aM))?void 0:b.associateElement)||g.call(b,this),this.hidden||(observeResize(getBoundsElement(this),media_chrome_menu_privateGet(this,aY)),observeResize(this,media_chrome_menu_privateGet(this,aZ)))}disconnectedCallback(){var b,g;unobserveResize(getBoundsElement(this),media_chrome_menu_privateGet(this,aY)),unobserveResize(this,media_chrome_menu_privateGet(this,aZ)),this.disable(),null==(g=null==(b=media_chrome_menu_privateGet(this,aM))?void 0:b.unassociateElement)||g.call(b,this),media_chrome_menu_privateSet(this,aM,null)}attributeChangedCallback(b,g,M){var N,B,W,K;b===tb.HIDDEN&&M!==g?(media_chrome_menu_privateGet(this,aP)||media_chrome_menu_privateSet(this,aP,!0),this.hidden?media_chrome_menu_privateMethod(this,aj,aK).call(this):media_chrome_menu_privateMethod(this,aq,a$).call(this),this.dispatchEvent(new ToggleEvent({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):b===eI.MEDIA_CONTROLLER?(g&&(null==(B=null==(N=media_chrome_menu_privateGet(this,aM))?void 0:N.unassociateElement)||B.call(N,this),media_chrome_menu_privateSet(this,aM,null)),M&&this.isConnected&&(media_chrome_menu_privateSet(this,aM,getAttributeMediaController(this)),null==(K=null==(W=media_chrome_menu_privateGet(this,aM))?void 0:W.associateElement)||K.call(W,this))):b===tb.DISABLED&&M!==g?null==M?this.enable():this.disable():b===tb.STYLE&&M!==g&&media_chrome_menu_privateMethod(this,aW,aH).call(this)}formatMenuItemText(b,g){return this.constructor.formatMenuItemText(b,g)}get anchor(){return this.getAttribute("anchor")}set anchor(b){this.setAttribute("anchor",`${b}`)}get anchorElement(){var b;return this.anchor?null==(b=getDocumentOrShadowRoot(this))?void 0:b.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(isMenuItem)}get radioGroupItems(){return this.items.filter(b=>"menuitemradio"===b.role)}get checkedItems(){return this.items.filter(b=>b.checked)}get value(){var b,g;return null!=(g=null==(b=this.checkedItems[0])?void 0:b.value)?g:""}set value(b){let g=this.items.find(g=>g.value===b);g&&media_chrome_menu_privateMethod(this,rc,rm).call(this,g)}focus(){if(media_chrome_menu_privateSet(this,ax,getActiveElement()),this.items.length){media_chrome_menu_privateMethod(this,rd,ru).call(this,this.items[0]),this.items[0].focus();return}let b=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==b||b.focus()}handleSelect(b){var g;let M=media_chrome_menu_privateMethod(this,rn,rs).call(this,b);M&&(media_chrome_menu_privateMethod(this,rc,rm).call(this,M,"checkbox"===M.type),media_chrome_menu_privateGet(this,aR)&&!this.hidden&&(null==(g=media_chrome_menu_privateGet(this,ax))||g.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(b){var g,M;let{key:N}=b,B=this.items,W=null!=(M=null!=(g=media_chrome_menu_privateMethod(this,rn,rs).call(this,b))?g:media_chrome_menu_privateMethod(this,ro,rl).call(this))?M:B[0],K=B.indexOf(W),Y=Math.max(0,K);"ArrowDown"===N?Y++:"ArrowUp"===N?Y--:"Home"===b.key?Y=0:"End"===b.key&&(Y=B.length-1),Y<0&&(Y=B.length-1),Y>B.length-1&&(Y=0),media_chrome_menu_privateMethod(this,rd,ru).call(this,B[Y]),B[Y].focus()}};function isMenuItem(b){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==b?void 0:b.role)}function getBoundsElement(b){var g;return null!=(g=b.getAttribute("bounds")?closestComposedNode(b,`#${b.getAttribute("bounds")}`):getMediaController(b)||b.parentElement)?g:b}aM=new WeakMap,ax=new WeakMap,aR=new WeakMap,aL=new WeakMap,aD=new WeakMap,aO=new WeakMap,aN=new WeakMap,aP=new WeakMap,aU=new WeakSet,aB=function(b){let g=b.target;for(let b of g.assignedNodes({flatten:!0}))3===b.nodeType&&""===b.textContent.trim()&&b.remove();if(["header","title"].includes(g.name)){let b=this.shadowRoot.querySelector('slot[name="header"]');b.hidden=0===g.assignedNodes().length}g.name||media_chrome_menu_privateGet(this,aG).call(this)},aG=new WeakMap,aW=new WeakSet,aH=function(){var b;let g=this.shadowRoot.querySelector("#layout-row"),M=null==(b=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:b.trim();g.setAttribute("media","row"===M?"":"width:0")},aV=new WeakSet,aF=function(b){media_chrome_menu_privateSet(this,aR,b.relatedTarget),containsComposedNode(this,b.relatedTarget)||(this.hidden=!this.hidden)},aq=new WeakSet,a$=function(){var b;null==(b=media_chrome_menu_privateGet(this,aR))||b.setAttribute("aria-expanded","true"),requestAnimationFrame(()=>media_chrome_menu_privateMethod(this,az,aQ).call(this,!1)),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),observeResize(getBoundsElement(this),media_chrome_menu_privateGet(this,aY)),observeResize(this,media_chrome_menu_privateGet(this,aZ))},aj=new WeakSet,aK=function(){var b;null==(b=media_chrome_menu_privateGet(this,aR))||b.setAttribute("aria-expanded","false"),unobserveResize(getBoundsElement(this),media_chrome_menu_privateGet(this,aY)),unobserveResize(this,media_chrome_menu_privateGet(this,aZ))},aY=new WeakMap,aZ=new WeakMap,az=new WeakSet,aQ=function(b,g){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:M,y:N}=computePosition({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=g||(g=this.offsetWidth);let B=getBoundsElement(this),W=B.getBoundingClientRect(),K=this.anchorElement.getBoundingClientRect(),Y=W.width-M-g,et=W.height-N-this.offsetHeight,er=W.height-K.height,{style:en}=getOrInsertCSSRule(this.shadowRoot,":host");b||en.setProperty("--media-menu-transition-in","none"),en.setProperty("position","absolute"),en.setProperty("right",`${Math.max(0,Y)}px`),en.setProperty("bottom",`${et}px`),en.setProperty("--_menu-max-height",`${er}px`),en.removeProperty("--media-menu-transition-in")},aX=new WeakSet,aJ=function(b){let g=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),M=null==g?void 0:g.querySelector('[role="menu"]'),{style:N}=getOrInsertCSSRule(this.shadowRoot,":host");if(b||N.setProperty("--media-menu-transition-in","none"),M){let N=M.offsetHeight,B=Math.max(M.offsetWidth,g.offsetWidth);this.style.setProperty("min-width",`${B}px`),this.style.setProperty("min-height",`${N}px`),media_chrome_menu_privateMethod(this,az,aQ).call(this,b,B)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),media_chrome_menu_privateMethod(this,az,aQ).call(this,b);N.removeProperty("--media-menu-transition-in")},a0=new WeakSet,a1=function(b){var g;if(b.stopPropagation(),b.composedPath().includes(media_chrome_menu_privateGet(this,a2,a3))){null==(g=media_chrome_menu_privateGet(this,ax))||g.focus(),this.hidden=!0;return}let M=media_chrome_menu_privateMethod(this,rn,rs).call(this,b);!M||M.hasAttribute("disabled")||(media_chrome_menu_privateMethod(this,rd,ru).call(this,M),this.handleSelect(b))},a2=new WeakSet,a3=function(){var b;let g=this.shadowRoot.querySelector('slot[name="header"]');return null==(b=g.assignedElements({flatten:!0}))?void 0:b.find(b=>b.part.contains("back")&&b.part.contains("button"))},a5=new WeakSet,a4=function(b){if(b.target===this)return;media_chrome_menu_privateMethod(this,a9,a8).call(this);let g=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let M of g)M.invokeTargetElement==b.target||"open"!=b.newState||"true"!=M.getAttribute("aria-expanded")||M.invokeTargetElement.hidden||M.invokeTargetElement.dispatchEvent(new InvokeEvent({relatedTarget:M}));for(let b of g)b.setAttribute("aria-expanded",`${!b.submenuElement.hidden}`);media_chrome_menu_privateMethod(this,aX,aJ).call(this,!0)},a9=new WeakSet,a8=function(){let b=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!b)},a7=new WeakSet,a6=function(b){var g;containsComposedNode(this,b.relatedTarget)||(media_chrome_menu_privateGet(this,aP)&&(null==(g=media_chrome_menu_privateGet(this,ax))||g.focus()),!media_chrome_menu_privateGet(this,aR)||media_chrome_menu_privateGet(this,aR)===b.relatedTarget||this.hidden||(this.hidden=!0))},rt=new WeakSet,rr=function(b){var g,M,N,B,W;let{key:K,ctrlKey:Y,altKey:et,metaKey:er}=b;if(!Y&&!et&&!er&&this.keysUsed.includes(K)){if(b.preventDefault(),b.stopPropagation(),"Tab"===K){if(media_chrome_menu_privateGet(this,aP)){this.hidden=!0;return}b.shiftKey?null==(M=null==(g=this.previousElementSibling)?void 0:g.focus)||M.call(g):null==(B=null==(N=this.nextElementSibling)?void 0:N.focus)||B.call(N),this.blur()}else"Escape"===K?(null==(W=media_chrome_menu_privateGet(this,ax))||W.focus(),media_chrome_menu_privateGet(this,aP)&&(this.hidden=!0)):"Enter"===K||" "===K?this.handleSelect(b):this.handleMove(b)}},rn=new WeakSet,rs=function(b){return b.composedPath().find(b=>["menuitemradio","menuitemcheckbox"].includes(b.role))},ro=new WeakSet,rl=function(){return this.items.find(b=>0===b.tabIndex)},rd=new WeakSet,ru=function(b){for(let g of this.items)g.tabIndex=g===b?0:-1},rc=new WeakSet,rm=function(b,g){let M=[...this.checkedItems];"radio"===b.type&&this.radioGroupItems.forEach(b=>b.checked=!1),g?b.checked=!b.checked:b.checked=!0,this.checkedItems.some((b,g)=>b!=M[g])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},(iq="symbol"!=typeof(iz="template")?iz+"":iz)in MediaChromeMenu?t_(MediaChromeMenu,iq,{enumerable:!0,configurable:!0,writable:!0,value:tv}):MediaChromeMenu[iq]=tv,eK.customElements.get("media-chrome-menu")||eK.customElements.define("media-chrome-menu",MediaChromeMenu);var media_audio_track_menu_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_audio_track_menu_privateGet=(b,g,M)=>(media_audio_track_menu_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_audio_track_menu_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_audio_track_menu_privateSet=(b,g,M,N)=>(media_audio_track_menu_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M),media_audio_track_menu_privateMethod=(b,g,M)=>(media_audio_track_menu_accessCheck(b,g,"access private method"),M);let MediaAudioTrackMenu=class MediaAudioTrackMenu extends MediaChromeMenu{constructor(){super(...arguments),media_audio_track_menu_privateAdd(this,r_),media_audio_track_menu_privateAdd(this,rb),media_audio_track_menu_privateAdd(this,rh,[]),media_audio_track_menu_privateAdd(this,rp,void 0)}static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_AUDIO_TRACK_LIST,eR.MEDIA_AUDIO_TRACK_ENABLED,eR.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(b,g,M){super.attributeChangedCallback(b,g,M),b===eR.MEDIA_AUDIO_TRACK_ENABLED&&g!==M?this.value=M:b===eR.MEDIA_AUDIO_TRACK_LIST&&g!==M&&(media_audio_track_menu_privateSet(this,rh,parseAudioTrackList(M)),media_audio_track_menu_privateMethod(this,r_,rv).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",media_audio_track_menu_privateMethod(this,rb,rg))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",media_audio_track_menu_privateMethod(this,rb,rg))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:getMediaController(this).querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return media_audio_track_menu_privateGet(this,rh)}set mediaAudioTrackList(b){media_audio_track_menu_privateSet(this,rh,b),media_audio_track_menu_privateMethod(this,r_,rv).call(this)}get mediaAudioTrackEnabled(){return getStringAttr(this,eR.MEDIA_AUDIO_TRACK_ENABLED)}set mediaAudioTrackEnabled(b){setStringAttr(this,eR.MEDIA_AUDIO_TRACK_ENABLED,b)}};rh=new WeakMap,rp=new WeakMap,r_=new WeakSet,rv=function(){if(media_audio_track_menu_privateGet(this,rp)===JSON.stringify(this.mediaAudioTrackList))return;media_audio_track_menu_privateSet(this,rp,JSON.stringify(this.mediaAudioTrackList));let b=this.mediaAudioTrackList;for(let g of(this.defaultSlot.textContent="",b)){let b=this.formatMenuItemText(g.label,g),M=createMenuItem({type:"radio",text:b,value:`${g.id}`,checked:g.enabled});M.prepend(createIndicator(this,"checked-indicator")),this.defaultSlot.append(M)}},rb=new WeakSet,rg=function(){if(null==this.value)return;let b=new eK.CustomEvent(eC.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(b)},eK.customElements.get("media-audio-track-menu")||eK.customElements.define("media-audio-track-menu",MediaAudioTrackMenu);let MediaChromeMenuButton=class MediaChromeMenuButton extends MediaChromeButton{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(b){this.setAttribute("invoketarget",`${b}`)}get invokeTargetElement(){var b;return this.invokeTarget?null==(b=getDocumentOrShadowRoot(this))?void 0:b.querySelector(`#${this.invokeTarget}`):null}handleClick(){this.invokeTargetElement.dispatchEvent(new InvokeEvent({relatedTarget:this}))}};eK.customElements.get("media-chrome-menu-button")||eK.customElements.define("media-chrome-menu-button",MediaChromeMenuButton);let tg=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,tf=eY.createElement("template");tf.innerHTML=`
  <slot name="icon">${tg}</slot>
`;let MediaAudioTrackMenuButton=class MediaAudioTrackMenuButton extends MediaChromeMenuButton{static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_AUDIO_TRACK_ENABLED,eR.MEDIA_AUDIO_TRACK_UNAVAILABLE]}constructor(){super({slotTemplate:tf})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",eW.AUDIO_TRACKS())}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:getMediaController(this).querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){return getStringAttr(this,eR.MEDIA_AUDIO_TRACK_ENABLED)}set mediaAudioTrackEnabled(b){setStringAttr(this,eR.MEDIA_AUDIO_TRACK_ENABLED,b)}};eK.customElements.get("media-audio-track-menu-button")||eK.customElements.define("media-audio-track-menu-button",MediaAudioTrackMenuButton);let tE=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,ty=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,tA=eY.createElement("template");tA.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }
  </style>

  <slot name="icon">
    <slot name="on">${tE}</slot>
    <slot name="off">${ty}</slot>
  </slot>
`;let updateAriaChecked=b=>{b.setAttribute("aria-checked",areSubsOn(b))};let MediaCaptionsButton=class MediaCaptionsButton extends MediaChromeButton{static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_SUBTITLES_LIST,eR.MEDIA_SUBTITLES_SHOWING]}constructor(b={}){super({slotTemplate:tA,...b}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",eW.CLOSED_CAPTIONS()),updateAriaChecked(this)}attributeChangedCallback(b,g,M){super.attributeChangedCallback(b,g,M),b===eR.MEDIA_SUBTITLES_SHOWING&&updateAriaChecked(this)}get mediaSubtitlesList(){return getSubtitlesListAttr(this,eR.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(b){setSubtitlesListAttr(this,eR.MEDIA_SUBTITLES_LIST,b)}get mediaSubtitlesShowing(){return getSubtitlesListAttr(this,eR.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(b){setSubtitlesListAttr(this,eR.MEDIA_SUBTITLES_SHOWING,b)}handleClick(){this.dispatchEvent(new eK.CustomEvent(eC.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}};let getSubtitlesListAttr=(b,g)=>{let M=b.getAttribute(g);return M?parseTextTracksStr(M):[]},setSubtitlesListAttr=(b,g,M)=>{if(!(null==M?void 0:M.length)){b.removeAttribute(g);return}let N=stringifyTextTrackList(M),B=b.getAttribute(g);B!==N&&b.setAttribute(g,N)};eK.customElements.get("media-captions-button")||eK.customElements.define("media-captions-button",MediaCaptionsButton);var tk=Object.defineProperty,media_captions_menu_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_captions_menu_privateGet=(b,g,M)=>(media_captions_menu_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_captions_menu_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_captions_menu_privateSet=(b,g,M,N)=>(media_captions_menu_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M),media_captions_menu_privateMethod=(b,g,M)=>(media_captions_menu_accessCheck(b,g,"access private method"),M);let tT=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`,tw=eY.createElement("template");tw.innerHTML=MediaChromeMenu.template.innerHTML+`
  <slot name="captions-indicator" hidden>${tT}</slot>`;let MediaCaptionsMenu=class MediaCaptionsMenu extends MediaChromeMenu{constructor(){super(...arguments),media_captions_menu_privateAdd(this,rE),media_captions_menu_privateAdd(this,rA),media_captions_menu_privateAdd(this,rf,void 0)}static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_SUBTITLES_LIST,eR.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(b,g,M){super.attributeChangedCallback(b,g,M),b===eR.MEDIA_SUBTITLES_LIST&&g!==M?media_captions_menu_privateMethod(this,rE,ry).call(this):b===eR.MEDIA_SUBTITLES_SHOWING&&g!==M&&(this.value=M)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",media_captions_menu_privateMethod(this,rA,rk))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",media_captions_menu_privateMethod(this,rA,rk))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:getMediaController(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return media_captions_menu_getSubtitlesListAttr(this,eR.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(b){media_captions_menu_setSubtitlesListAttr(this,eR.MEDIA_SUBTITLES_LIST,b)}get mediaSubtitlesShowing(){return media_captions_menu_getSubtitlesListAttr(this,eR.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(b){media_captions_menu_setSubtitlesListAttr(this,eR.MEDIA_SUBTITLES_SHOWING,b)}};rf=new WeakMap,rE=new WeakSet,ry=function(){var b;if(media_captions_menu_privateGet(this,rf)===JSON.stringify(this.mediaSubtitlesList))return;media_captions_menu_privateSet(this,rf,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";let g=!this.value,M=createMenuItem({type:"radio",text:this.formatMenuItemText("Off"),value:"off",checked:g});M.prepend(createIndicator(this,"checked-indicator")),this.defaultSlot.append(M);let N=this.mediaSubtitlesList;for(let g of N){let M=createMenuItem({type:"radio",text:this.formatMenuItemText(g.label,g),value:formatTextTrackObj(g),checked:this.value==formatTextTrackObj(g)});M.prepend(createIndicator(this,"checked-indicator"));let N=null!=(b=g.kind)?b:"subs";"captions"===N&&M.append(createIndicator(this,"captions-indicator")),this.defaultSlot.append(M)}},rA=new WeakSet,rk=function(){let b=this.mediaSubtitlesShowing,g=this.getAttribute(eR.MEDIA_SUBTITLES_SHOWING),M=this.value!==g;if((null==b?void 0:b.length)&&M&&this.dispatchEvent(new eK.CustomEvent(eC.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:b})),!this.value||!M)return;let N=new eK.CustomEvent(eC.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(N)},(i$="symbol"!=typeof(iQ="template")?iQ+"":iQ)in MediaCaptionsMenu?tk(MediaCaptionsMenu,i$,{enumerable:!0,configurable:!0,writable:!0,value:tw}):MediaCaptionsMenu[i$]=tw;let media_captions_menu_getSubtitlesListAttr=(b,g)=>{let M=b.getAttribute(g);return M?parseTextTracksStr(M):[]},media_captions_menu_setSubtitlesListAttr=(b,g,M)=>{if(!(null==M?void 0:M.length)){b.removeAttribute(g);return}let N=stringifyTextTrackList(M),B=b.getAttribute(g);B!==N&&b.setAttribute(g,N)};eK.customElements.get("media-captions-menu")||eK.customElements.define("media-captions-menu",MediaCaptionsMenu);let tS=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,tC=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,tI=eY.createElement("template");tI.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }
  </style>

  <slot name="icon">
    <slot name="on">${tS}</slot>
    <slot name="off">${tC}</slot>
  </slot>
`;let media_captions_menu_button_updateAriaChecked=b=>{b.setAttribute("aria-checked",areSubsOn(b))};let MediaCaptionsMenuButton=class MediaCaptionsMenuButton extends MediaChromeMenuButton{static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_SUBTITLES_LIST,eR.MEDIA_SUBTITLES_SHOWING]}constructor(b={}){super({slotTemplate:tI,...b}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",eW.CLOSED_CAPTIONS()),media_captions_menu_button_updateAriaChecked(this)}attributeChangedCallback(b,g,M){super.attributeChangedCallback(b,g,M),b===eR.MEDIA_SUBTITLES_SHOWING&&media_captions_menu_button_updateAriaChecked(this)}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:getMediaController(this).querySelector("media-captions-menu")}get mediaSubtitlesList(){return media_captions_menu_button_getSubtitlesListAttr(this,eR.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(b){media_captions_menu_button_setSubtitlesListAttr(this,eR.MEDIA_SUBTITLES_LIST,b)}get mediaSubtitlesShowing(){return media_captions_menu_button_getSubtitlesListAttr(this,eR.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(b){media_captions_menu_button_setSubtitlesListAttr(this,eR.MEDIA_SUBTITLES_SHOWING,b)}};let media_captions_menu_button_getSubtitlesListAttr=(b,g)=>{let M=b.getAttribute(g);return M?parseTextTracksStr(M):[]},media_captions_menu_button_setSubtitlesListAttr=(b,g,M)=>{if(!(null==M?void 0:M.length)){b.removeAttribute(g);return}let N=stringifyTextTrackList(M),B=b.getAttribute(g);B!==N&&b.setAttribute(g,N)};eK.customElements.get("media-captions-menu-button")||eK.customElements.define("media-captions-menu-button",MediaCaptionsMenuButton);let tM=eY.createElement("template");tM.innerHTML=`
  <style>
  :host([${eR.MEDIA_IS_CASTING}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${eR.MEDIA_IS_CASTING}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
    <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
  </slot>
`;let media_cast_button_updateAriaLabel=b=>{let g=b.mediaIsCasting?eH.EXIT_CAST():eH.ENTER_CAST();b.setAttribute("aria-label",g)};let MediaCastButton=class MediaCastButton extends MediaChromeButton{static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_IS_CASTING,eR.MEDIA_CAST_UNAVAILABLE]}constructor(b={}){super({slotTemplate:tM,...b})}connectedCallback(){super.connectedCallback(),media_cast_button_updateAriaLabel(this)}attributeChangedCallback(b,g,M){super.attributeChangedCallback(b,g,M),b===eR.MEDIA_IS_CASTING&&media_cast_button_updateAriaLabel(this)}get mediaIsCasting(){return getBooleanAttr(this,eR.MEDIA_IS_CASTING)}set mediaIsCasting(b){setBooleanAttr(this,eR.MEDIA_IS_CASTING,b)}get mediaCastUnavailable(){return getStringAttr(this,eR.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(b){setStringAttr(this,eR.MEDIA_CAST_UNAVAILABLE,b)}handleClick(){let b=this.mediaIsCasting?eC.MEDIA_EXIT_CAST_REQUEST:eC.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new eK.CustomEvent(b,{composed:!0,bubbles:!0}))}};eK.customElements.get("media-cast-button")||eK.customElements.define("media-cast-button",MediaCastButton);var tx=Object.defineProperty,media_chrome_dialog_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_chrome_dialog_privateGet=(b,g,M)=>(media_chrome_dialog_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_chrome_dialog_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_chrome_dialog_privateSet=(b,g,M,N)=>(media_chrome_dialog_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M),media_chrome_dialog_privateMethod=(b,g,M)=>(media_chrome_dialog_accessCheck(b,g,"access private method"),M);let tR=eY.createElement("template");tR.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-dialog-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
      border-radius: var(--media-dialog-border-radius);
      border: var(--media-dialog-border, none);
      display: var(--media-dialog-display, inline-flex);
      transition: var(--media-dialog-transition-in,
        visibility 0s,
        opacity .2s ease-out,
        transform .15s ease-out
      ) !important;
      
      visibility: var(--media-dialog-visibility, visible);
      opacity: var(--media-dialog-opacity, 1);
      transform: var(--media-dialog-transform-in, translateY(0) scale(1));
    }

    :host([hidden]) {
      transition: var(--media-dialog-transition-out,
        visibility .15s ease-in,
        opacity .15s ease-in,
        transform .15s ease-in
      ) !important;
      visibility: var(--media-dialog-hidden-visibility, hidden);
      opacity: var(--media-dialog-hidden-opacity, 0);
      transform: var(--media-dialog-transform-out, translateY(2px) scale(.99));
      pointer-events: none;
    }
  </style>
  <slot></slot>
`;let tL={HIDDEN:"hidden",ANCHOR:"anchor"};let MediaChromeDialog=class MediaChromeDialog extends eK.HTMLElement{constructor(){super(),media_chrome_dialog_privateAdd(this,rS),media_chrome_dialog_privateAdd(this,rI),media_chrome_dialog_privateAdd(this,rx),media_chrome_dialog_privateAdd(this,rL),media_chrome_dialog_privateAdd(this,rO),media_chrome_dialog_privateAdd(this,rT,void 0),media_chrome_dialog_privateAdd(this,rw,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=this.constructor.template.content.cloneNode(!0),this.shadowRoot.append(this.nativeEl)),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[tL.HIDDEN,tL.ANCHOR]}handleEvent(b){switch(b.type){case"invoke":media_chrome_dialog_privateMethod(this,rx,rR).call(this,b);break;case"focusout":media_chrome_dialog_privateMethod(this,rL,rD).call(this,b);break;case"keydown":media_chrome_dialog_privateMethod(this,rO,rN).call(this,b)}}connectedCallback(){this.role||(this.role="dialog")}attributeChangedCallback(b,g,M){b===tL.HIDDEN&&M!==g&&(this.hidden?media_chrome_dialog_privateMethod(this,rI,rM).call(this):media_chrome_dialog_privateMethod(this,rS,rC).call(this))}focus(){media_chrome_dialog_privateSet(this,rT,getActiveElement());let b=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==b||b.focus()}get keysUsed(){return["Escape","Tab"]}};rT=new WeakMap,rw=new WeakMap,rS=new WeakSet,rC=function(){var b;null==(b=media_chrome_dialog_privateGet(this,rw))||b.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},rI=new WeakSet,rM=function(){var b;null==(b=media_chrome_dialog_privateGet(this,rw))||b.setAttribute("aria-expanded","false")},rx=new WeakSet,rR=function(b){media_chrome_dialog_privateSet(this,rw,b.relatedTarget),containsComposedNode(this,b.relatedTarget)||(this.hidden=!this.hidden)},rL=new WeakSet,rD=function(b){var g;containsComposedNode(this,b.relatedTarget)||(null==(g=media_chrome_dialog_privateGet(this,rT))||g.focus(),!media_chrome_dialog_privateGet(this,rw)||media_chrome_dialog_privateGet(this,rw)===b.relatedTarget||this.hidden||(this.hidden=!0))},rO=new WeakSet,rN=function(b){var g,M,N,B,W;let{key:K,ctrlKey:Y,altKey:et,metaKey:er}=b;!Y&&!et&&!er&&this.keysUsed.includes(K)&&(b.preventDefault(),b.stopPropagation(),"Tab"===K?(b.shiftKey?null==(M=null==(g=this.previousElementSibling)?void 0:g.focus)||M.call(g):null==(B=null==(N=this.nextElementSibling)?void 0:N.focus)||B.call(N),this.blur()):"Escape"===K&&(null==(W=media_chrome_dialog_privateGet(this,rT))||W.focus(),this.hidden=!0))},(ij="symbol"!=typeof(iX="template")?iX+"":iX)in MediaChromeDialog?tx(MediaChromeDialog,ij,{enumerable:!0,configurable:!0,writable:!0,value:tR}):MediaChromeDialog[ij]=tR,eK.customElements.get("media-chrome-dialog")||eK.customElements.define("media-chrome-dialog",MediaChromeDialog);var tD=Object.defineProperty,media_chrome_menu_item_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_chrome_menu_item_privateGet=(b,g,M)=>(media_chrome_menu_item_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_chrome_menu_item_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_chrome_menu_item_privateSet=(b,g,M,N)=>(media_chrome_menu_item_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M),media_chrome_menu_item_privateMethod=(b,g,M)=>(media_chrome_menu_item_accessCheck(b,g,"access private method"),M);let tO=eY.createElement("template");tO.innerHTML=`
  <style>
    :host {
      transition: var(--media-menu-item-transition,
        background .15s linear,
        opacity .2s ease-in-out
      );
      outline: var(--media-menu-item-outline, 0);
      outline-offset: var(--media-menu-item-outline-offset, -1px);
      cursor: pointer;
      display: flex;
      align-items: center;
      align-self: stretch;
      justify-self: stretch;
      white-space: nowrap;
      white-space-collapse: collapse;
      text-wrap: nowrap;
      padding: .4em .8em .4em 1em;
    }

    :host(:focus-visible) {
      box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      outline: var(--media-menu-item-hover-outline, 0);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host(:hover) {
      cursor: pointer;
      background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
      outline: var(--media-menu-item-hover-outline);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host([aria-checked="true"]) {
      background: var(--media-menu-item-checked-background);
    }

    :host([hidden]) {
      display: none;
    }

    :host([disabled]) {
      pointer-events: none;
      color: rgba(255, 255, 255, .3);
    }

    slot:not([name]) {
      width: 100%;
    }

    slot:not([name="submenu"]) {
      display: inline-flex;
      align-items: center;
      transition: inherit;
      opacity: var(--media-menu-item-opacity, 1);
    }

    slot[name="description"] {
      justify-content: end;
    }

    slot[name="description"] > span {
      display: inline-block;
      margin-inline: 1em .2em;
      max-width: var(--media-menu-item-description-max-width, 100px);
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: .8em;
      font-weight: 400;
      text-align: right;
      position: relative;
      top: .04em;
    }

    slot[name="checked-indicator"] {
      display: none;
    }

    :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
      display: var(--media-menu-item-checked-indicator-display, inline-block);
    }

    
    svg, img, ::slotted(svg), ::slotted(img) {
      height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
    }

    
    [part~="indicator"],
    ::slotted([part~="indicator"]) {
      fill: var(--media-menu-item-indicator-fill,
        var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
      height: var(--media-menu-item-indicator-height, 1.25em);
      margin-right: .5ch;
    }

    [part~="checked-indicator"] {
      visibility: hidden;
    }

    :host([aria-checked="true"]) [part~="checked-indicator"] {
      visibility: visible;
    }
  </style>
  <slot name="checked-indicator">
    <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
      <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
    </svg>
  </slot>
  <slot name="prefix"></slot>
  <slot></slot>
  <slot name="description"></slot>
  <slot name="suffix"></slot>
  <slot name="submenu"></slot>
`;let tN={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};let MediaChromeMenuItem=class MediaChromeMenuItem extends eK.HTMLElement{constructor(){super(),media_chrome_menu_item_privateAdd(this,rB),media_chrome_menu_item_privateAdd(this,rW),media_chrome_menu_item_privateAdd(this,rV),media_chrome_menu_item_privateAdd(this,r$),media_chrome_menu_item_privateAdd(this,rK),media_chrome_menu_item_privateAdd(this,rZ),media_chrome_menu_item_privateAdd(this,rP,!1),media_chrome_menu_item_privateAdd(this,rU,void 0),media_chrome_menu_item_privateAdd(this,rq,()=>{var b,g;this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let M=this.shadowRoot.querySelector('slot[name="description"]'),N=null==(g=null==(b=this.submenuElement.checkedItems)?void 0:b[0])?void 0:g.text,B=eY.createElement("span");B.textContent=null!=N?N:"",M.replaceChildren(B)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.append(this.constructor.template.content.cloneNode(!0))),this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[tN.TYPE,tN.DISABLED,tN.CHECKED,tN.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),isCheckable(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(b){switch(b.type){case"slotchange":media_chrome_menu_item_privateMethod(this,rB,rG).call(this,b);break;case"click":this.handleClick(b);break;case"keydown":media_chrome_menu_item_privateMethod(this,rK,rY).call(this,b);break;case"keyup":media_chrome_menu_item_privateMethod(this,r$,rj).call(this,b)}}attributeChangedCallback(b,g,M){b===tN.CHECKED&&isCheckable(this)&&!media_chrome_menu_item_privateGet(this,rP)?this.setAttribute("aria-checked",null!=M?"true":"false"):b===tN.TYPE&&M!==g?this.role="menuitem"+M:b===tN.DISABLED&&M!==g&&(null==M?this.enable():this.disable())}connectedCallback(){this.hasAttribute(tN.DISABLED)||this.enable(),this.role="menuitem"+this.type,media_chrome_menu_item_privateSet(this,rU,closestMenuItemsContainer(this,this.parentNode)),media_chrome_menu_item_privateMethod(this,rZ,rz).call(this)}disconnectedCallback(){this.disable(),media_chrome_menu_item_privateMethod(this,rZ,rz).call(this),media_chrome_menu_item_privateSet(this,rU,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(b){this.setAttribute("invoketarget",`${b}`)}get invokeTargetElement(){var b;return this.invokeTarget?null==(b=getDocumentOrShadowRoot(this))?void 0:b.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){let b=this.shadowRoot.querySelector('slot[name="submenu"]');return b.assignedElements({flatten:!0})[0]}get type(){var b;return null!=(b=this.getAttribute(tN.TYPE))?b:""}set type(b){this.setAttribute(tN.TYPE,`${b}`)}get value(){var b;return null!=(b=this.getAttribute(tN.VALUE))?b:this.text}set value(b){this.setAttribute(tN.VALUE,b)}get text(){var b;return(null!=(b=this.textContent)?b:"").trim()}get checked(){if(isCheckable(this))return"true"===this.getAttribute("aria-checked")}set checked(b){isCheckable(this)&&(media_chrome_menu_item_privateSet(this,rP,!0),this.setAttribute("aria-checked",b?"true":"false"),b?this.part.add("checked"):this.part.remove("checked"))}handleClick(b){!isCheckable(this)&&this.invokeTargetElement&&containsComposedNode(this,b.target)&&this.invokeTargetElement.dispatchEvent(new InvokeEvent({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}};function isCheckable(b){return"radio"===b.type||"checkbox"===b.type}function closestMenuItemsContainer(b,g){if(!b)return null;let{host:M}=b.getRootNode();return!g&&M?closestMenuItemsContainer(b,M):(null==g?void 0:g.items)?g:closestMenuItemsContainer(g,null==g?void 0:g.parentNode)}rP=new WeakMap,rU=new WeakMap,rB=new WeakSet,rG=function(b){let g=b.target,M=!(null==g?void 0:g.name);if(M)for(let b of g.assignedNodes({flatten:!0}))b instanceof Text&&""===b.textContent.trim()&&b.remove();"submenu"===g.name&&(this.submenuElement?media_chrome_menu_item_privateMethod(this,rW,rH).call(this):media_chrome_menu_item_privateMethod(this,rV,rF).call(this))},rW=new WeakSet,rH=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",media_chrome_menu_item_privateGet(this,rq)),this.submenuElement.addEventListener("addmenuitem",media_chrome_menu_item_privateGet(this,rq)),this.submenuElement.addEventListener("removemenuitem",media_chrome_menu_item_privateGet(this,rq)),media_chrome_menu_item_privateGet(this,rq).call(this)},rV=new WeakSet,rF=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",media_chrome_menu_item_privateGet(this,rq)),this.submenuElement.removeEventListener("addmenuitem",media_chrome_menu_item_privateGet(this,rq)),this.submenuElement.removeEventListener("removemenuitem",media_chrome_menu_item_privateGet(this,rq)),media_chrome_menu_item_privateGet(this,rq).call(this)},rq=new WeakMap,r$=new WeakSet,rj=function(b){let{key:g}=b;if(!this.keysUsed.includes(g)){this.removeEventListener("keyup",media_chrome_menu_item_privateMethod(this,r$,rj));return}this.handleClick(b)},rK=new WeakSet,rY=function(b){let{metaKey:g,altKey:M,key:N}=b;if(g||M||!this.keysUsed.includes(N)){this.removeEventListener("keyup",media_chrome_menu_item_privateMethod(this,r$,rj));return}this.addEventListener("keyup",media_chrome_menu_item_privateMethod(this,r$,rj),{once:!0})},rZ=new WeakSet,rz=function(){var b;let g=null==(b=media_chrome_menu_item_privateGet(this,rU))?void 0:b.radioGroupItems;if(!g)return;let M=g.filter(b=>"true"===b.getAttribute("aria-checked")).pop();for(let b of(M||(M=g[0]),g))b.setAttribute("aria-checked","false");null==M||M.setAttribute("aria-checked","true")},(iK="symbol"!=typeof(iJ="template")?iJ+"":iJ)in MediaChromeMenuItem?tD(MediaChromeMenuItem,iK,{enumerable:!0,configurable:!0,writable:!0,value:tO}):MediaChromeMenuItem[iK]=tO,eK.customElements.get("media-chrome-menu-item")||eK.customElements.define("media-chrome-menu-item",MediaChromeMenuItem);var media_chrome_range_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_chrome_range_privateGet=(b,g,M)=>(media_chrome_range_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_chrome_range_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_chrome_range_privateSet=(b,g,M,N)=>(media_chrome_range_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M),media_chrome_range_privateMethod=(b,g,M)=>(media_chrome_range_accessCheck(b,g,"access private method"),M);let tP=eY.createElement("template");tP.innerHTML=`
  <style>
    :host {
      --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

      box-shadow: var(--_focus-visible-box-shadow, none);
      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      display: inline-flex;
      align-items: center;
      
      vertical-align: middle;
      box-sizing: border-box;
      position: relative;
      width: 100px;
      transition: background .15s linear;
      cursor: pointer;
      pointer-events: auto;
      touch-action: none; 
      z-index: 1; 
    }

    
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgb(50 50 70 / .7));
    }

    #leftgap {
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
    }

    #rightgap {
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
    }

    #startpoint,
    #endpoint {
      position: absolute;
    }

    #endpoint {
      right: 0;
    }

    #container {
      
      width: var(--media-range-track-width, 100%);
      transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      min-width: 40px;
    }

    #range {
      
      display: var(--media-time-range-hover-display, block);
      bottom: var(--media-time-range-hover-bottom, -7px);
      height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
      width: 100%;
      position: absolute;
      cursor: pointer;

      -webkit-appearance: none; 
      -webkit-tap-highlight-color: transparent;
      background: transparent; 
      margin: 0;
      z-index: 1;
    }

    @media (hover: hover) {
      #range {
        bottom: var(--media-time-range-hover-bottom, -5px);
        height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
      }
    }

    
    
    #range::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: transparent;
      width: .1px;
      height: .1px;
    }

    
    #range::-moz-range-thumb {
      background: transparent;
      border: transparent;
      width: .1px;
      height: .1px;
    }

    #appearance {
      height: var(--media-range-track-height, 4px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      position: absolute;
      
      will-change: transform;
    }

    #background,
    #track {
      border-radius: var(--media-range-track-border-radius, 1px);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #background {
      background: var(--media-range-track-background, rgb(255 255 255 / .2));
      backdrop-filter: var(--media-range-track-background-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-background-backdrop-filter);
    }

    #track {
      border: var(--media-range-track-border, none);
      outline: var(--media-range-track-outline);
      outline-offset: var(--media-range-track-outline-offset);
      backdrop-filter: var(--media-range-track-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
      box-shadow: var(--media-range-track-box-shadow, none);
      overflow: hidden;
    }

    #progress,
    #highlight,
    #pointer {
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #progress {
      background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
      transition: var(--media-range-track-transition);
    }

    #pointer {
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    @media (hover: hover) {
      :host(:hover) #pointer {
        transition: visibility .5s, opacity .5s;
        visibility: visible;
        opacity: 1;
      }
    }

    #thumb {
      width: var(--media-range-thumb-width, 10px);
      height: var(--media-range-thumb-height, 10px);
      margin-left: calc(var(--media-range-thumb-width, 10px) / -2);
      border: var(--media-range-thumb-border, none);
      border-radius: var(--media-range-thumb-border-radius, 10px);
      background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
      box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
      transition: var(--media-range-thumb-transition);
      transform: var(--media-range-thumb-transform, none);
      opacity: var(--media-range-thumb-opacity, 1);
      position: absolute;
      left: 0;
      cursor: pointer;
    }

    :host([disabled]) #thumb {
      background-color: #777;
    }

    .segments #appearance {
      height: var(--media-range-segment-hover-height, 7px);
    }

    #background,
    #track {
      clip-path: url(#segments-clipping);
    }

    #segments {
      --segments-gap: var(--media-range-segments-gap, 2px);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #segments-clipping {
      transform: translateX(calc(var(--segments-gap) / 2));
    }

    #segments-clipping:empty {
      display: none;
    }

    #segments-clipping rect {
      height: var(--media-range-track-height, 4px);
      y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
      transition: var(--media-range-segment-transition, transform .1s ease-in-out);
      transform: var(--media-range-segment-transform, scaleY(1));
      transform-origin: center;
    }
  </style>
  <div id="leftgap"></div>
  <div id="container">
    <div id="startpoint"></div>
    <div id="endpoint"></div>
    <div id="appearance" part="appearance">
      <div id="background"></div>
      <div id="track">
        <div id="highlight"></div>
        <div id="pointer"></div>
        <div id="progress"></div>
      </div>
      <div id="thumb"></div>
      <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
    </div>
    <input id="range" type="range" min="0" max="1" step="any" value="0">
  </div>
  <div id="rightgap"></div>
`;let MediaChromeRange=class MediaChromeRange extends eK.HTMLElement{constructor(){super(),media_chrome_range_privateAdd(this,r9),media_chrome_range_privateAdd(this,r7),media_chrome_range_privateAdd(this,nt),media_chrome_range_privateAdd(this,nn),media_chrome_range_privateAdd(this,no),media_chrome_range_privateAdd(this,nd),media_chrome_range_privateAdd(this,nc),media_chrome_range_privateAdd(this,nh),media_chrome_range_privateAdd(this,rQ,void 0),media_chrome_range_privateAdd(this,rX,void 0),media_chrome_range_privateAdd(this,rJ,void 0),media_chrome_range_privateAdd(this,r0,void 0),media_chrome_range_privateAdd(this,r1,{}),media_chrome_range_privateAdd(this,r2,[]),media_chrome_range_privateAdd(this,r3,()=>{if(this.range.matches(":focus-visible")){let{style:b}=getOrInsertCSSRule(this.shadowRoot,":host");b.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),media_chrome_range_privateAdd(this,r5,()=>{let{style:b}=getOrInsertCSSRule(this.shadowRoot,":host");b.removeProperty("--_focus-visible-box-shadow")}),media_chrome_range_privateAdd(this,r4,()=>{let b=this.shadowRoot.querySelector("#segments-clipping");b&&b.parentNode.append(b)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(tP.content.cloneNode(!0))),this.container=this.shadowRoot.querySelector("#container"),media_chrome_range_privateSet(this,rJ,this.shadowRoot.querySelector("#startpoint")),media_chrome_range_privateSet(this,r0,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",eI.MEDIA_CONTROLLER]}attributeChangedCallback(b,g,M){var N,B,W,K,Y;b===eI.MEDIA_CONTROLLER?(g&&(null==(B=null==(N=media_chrome_range_privateGet(this,rQ))?void 0:N.unassociateElement)||B.call(N,this),media_chrome_range_privateSet(this,rQ,null)),M&&this.isConnected&&(media_chrome_range_privateSet(this,rQ,null==(W=this.getRootNode())?void 0:W.getElementById(M)),null==(Y=null==(K=media_chrome_range_privateGet(this,rQ))?void 0:K.associateElement)||Y.call(K,this))):("disabled"===b||"aria-disabled"===b&&g!==M)&&(null==M?(this.range.removeAttribute(b),media_chrome_range_privateMethod(this,r7,r6).call(this)):(this.range.setAttribute(b,M),media_chrome_range_privateMethod(this,nt,nr).call(this)))}connectedCallback(){var b,g,M;let{style:N}=getOrInsertCSSRule(this.shadowRoot,":host");N.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),media_chrome_range_privateGet(this,r1).pointer=getOrInsertCSSRule(this.shadowRoot,"#pointer"),media_chrome_range_privateGet(this,r1).progress=getOrInsertCSSRule(this.shadowRoot,"#progress"),media_chrome_range_privateGet(this,r1).thumb=getOrInsertCSSRule(this.shadowRoot,"#thumb");let B=this.getAttribute(eI.MEDIA_CONTROLLER);B&&(media_chrome_range_privateSet(this,rQ,null==(b=this.getRootNode())?void 0:b.getElementById(B)),null==(M=null==(g=media_chrome_range_privateGet(this,rQ))?void 0:g.associateElement)||M.call(g,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",media_chrome_range_privateGet(this,r3)),this.shadowRoot.addEventListener("focusout",media_chrome_range_privateGet(this,r5)),media_chrome_range_privateMethod(this,r7,r6).call(this),observeResize(this.container,media_chrome_range_privateGet(this,r4))}disconnectedCallback(){var b,g;media_chrome_range_privateMethod(this,nt,nr).call(this),null==(g=null==(b=media_chrome_range_privateGet(this,rQ))?void 0:b.unassociateElement)||g.call(b,this),media_chrome_range_privateSet(this,rQ,null),this.shadowRoot.removeEventListener("focusin",media_chrome_range_privateGet(this,r3)),this.shadowRoot.removeEventListener("focusout",media_chrome_range_privateGet(this,r5)),unobserveResize(this.container,media_chrome_range_privateGet(this,r4))}updatePointerBar(b){var g;null==(g=media_chrome_range_privateGet(this,r1).pointer)||g.style.setProperty("width",`${100*this.getPointerRatio(b)}%`)}updateBar(){var b,g;let M=100*this.range.valueAsNumber;null==(b=media_chrome_range_privateGet(this,r1).progress)||b.style.setProperty("width",`${M}%`),null==(g=media_chrome_range_privateGet(this,r1).thumb)||g.style.setProperty("left",`${M}%`)}updateSegments(b){let g=this.shadowRoot.querySelector("#segments-clipping");if(g.textContent="",this.container.classList.toggle("segments",!!(null==b?void 0:b.length)),!(null==b?void 0:b.length))return;media_chrome_range_privateGet(this,r1).activeSegment=insertCSSRule(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let M=[...new Set([+this.range.min,...b.flatMap(b=>[b.start,b.end]),+this.range.max])];media_chrome_range_privateSet(this,r2,[...M]);let N=M.pop();for(let[b,B]of M.entries()){let[W,K]=[0===b,b===M.length-1],Y=W?"calc(var(--segments-gap) / -1)":`${100*B}%`,et=K?N:M[b+1],er=`calc(${(et-B)*100}%${W||K?"":" - var(--segments-gap)"})`,en=eY.createElementNS("http://www.w3.org/2000/svg","rect"),es=getOrInsertCSSRule(this.shadowRoot,`#segments-clipping rect:nth-child(${b+1})`);es.style.setProperty("x",Y),es.style.setProperty("width",er),g.append(en)}}getPointerRatio(b){return Math.max(0,Math.min(1,getPointProgressOnLine(b.clientX,b.clientY,media_chrome_range_privateGet(this,rJ).getBoundingClientRect(),media_chrome_range_privateGet(this,r0).getBoundingClientRect())))}get dragging(){return this.hasAttribute("dragging")}handleEvent(b){switch(b.type){case"pointermove":media_chrome_range_privateMethod(this,nh,np).call(this,b);break;case"input":this.updateBar();break;case"pointerenter":media_chrome_range_privateMethod(this,no,nl).call(this,b);break;case"pointerdown":media_chrome_range_privateMethod(this,nn,ns).call(this,b);break;case"pointerup":media_chrome_range_privateMethod(this,nd,nu).call(this);break;case"pointerleave":media_chrome_range_privateMethod(this,nc,nm).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}};rQ=new WeakMap,rX=new WeakMap,rJ=new WeakMap,r0=new WeakMap,r1=new WeakMap,r2=new WeakMap,r3=new WeakMap,r5=new WeakMap,r4=new WeakMap,r9=new WeakSet,r8=function(b){let g=media_chrome_range_privateGet(this,r1).activeSegment;if(!g)return;let M=this.getPointerRatio(b),N=media_chrome_range_privateGet(this,r2).findIndex((b,g,N)=>{let B=N[g+1];return null!=B&&M>=b&&M<=B}),B=`#segments-clipping rect:nth-child(${N+1})`;g.selectorText==B&&g.style.transform||(g.selectorText=B,g.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},r7=new WeakSet,r6=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},nt=new WeakSet,nr=function(){var b,g;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(b=eK.window)||b.removeEventListener("pointerup",this),null==(g=eK.window)||g.removeEventListener("pointermove",this)},nn=new WeakSet,ns=function(b){var g;media_chrome_range_privateSet(this,rX,b.composedPath().includes(this.range)),null==(g=eK.window)||g.addEventListener("pointerup",this)},no=new WeakSet,nl=function(b){var g;"mouse"!==b.pointerType&&media_chrome_range_privateMethod(this,nn,ns).call(this,b),this.addEventListener("pointerleave",this),null==(g=eK.window)||g.addEventListener("pointermove",this)},nd=new WeakSet,nu=function(){var b;null==(b=eK.window)||b.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},nc=new WeakSet,nm=function(){var b,g;this.removeEventListener("pointerleave",this),null==(b=eK.window)||b.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(g=media_chrome_range_privateGet(this,r1).activeSegment)||g.style.removeProperty("transform")},nh=new WeakSet,np=function(b){this.toggleAttribute("dragging",1===b.buttons||"mouse"!==b.pointerType),this.updatePointerBar(b),media_chrome_range_privateMethod(this,r9,r8).call(this,b),this.dragging&&("mouse"!==b.pointerType||!media_chrome_range_privateGet(this,rX))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(b),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},eK.customElements.get("media-chrome-range")||eK.customElements.define("media-chrome-range",MediaChromeRange);var media_control_bar_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_control_bar_privateGet=(b,g,M)=>(media_control_bar_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_control_bar_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_control_bar_privateSet=(b,g,M,N)=>(media_control_bar_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M);let tU=eY.createElement("template");tU.innerHTML=`
  <style>
    :host {
      
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --media-loading-indicator-icon-height: 44px;
    }

    ::slotted(media-time-range),
    ::slotted(media-volume-range) {
      min-height: 100%;
    }

    ::slotted(media-time-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }
  </style>

  <slot></slot>
`;let MediaControlBar=class MediaControlBar extends eK.HTMLElement{constructor(){super(),media_control_bar_privateAdd(this,n_,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(tU.content.cloneNode(!0)))}static get observedAttributes(){return[eI.MEDIA_CONTROLLER]}attributeChangedCallback(b,g,M){var N,B,W,K,Y;b===eI.MEDIA_CONTROLLER&&(g&&(null==(B=null==(N=media_control_bar_privateGet(this,n_))?void 0:N.unassociateElement)||B.call(N,this),media_control_bar_privateSet(this,n_,null)),M&&this.isConnected&&(media_control_bar_privateSet(this,n_,null==(W=this.getRootNode())?void 0:W.getElementById(M)),null==(Y=null==(K=media_control_bar_privateGet(this,n_))?void 0:K.associateElement)||Y.call(K,this)))}connectedCallback(){var b,g,M;let N=this.getAttribute(eI.MEDIA_CONTROLLER);N&&(media_control_bar_privateSet(this,n_,null==(b=this.getRootNode())?void 0:b.getElementById(N)),null==(M=null==(g=media_control_bar_privateGet(this,n_))?void 0:g.associateElement)||M.call(g,this))}disconnectedCallback(){var b,g;null==(g=null==(b=media_control_bar_privateGet(this,n_))?void 0:b.unassociateElement)||g.call(b,this),media_control_bar_privateSet(this,n_,null)}};n_=new WeakMap,eK.customElements.get("media-control-bar")||eK.customElements.define("media-control-bar",MediaControlBar);var media_text_display_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_text_display_privateGet=(b,g,M)=>(media_text_display_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_text_display_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_text_display_privateSet=(b,g,M,N)=>(media_text_display_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M);let tB=eY.createElement("template");tB.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
      padding: var(--media-control-padding, 10px);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      text-align: center;
      pointer-events: auto;
    }

    
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
      outline: 0;
    }

    
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <slot></slot>
`;let MediaTextDisplay=class MediaTextDisplay extends eK.HTMLElement{constructor(){super(),media_text_display_privateAdd(this,nv,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(tB.content.cloneNode(!0)))}static get observedAttributes(){return[eI.MEDIA_CONTROLLER]}attributeChangedCallback(b,g,M){var N,B,W,K,Y;b===eI.MEDIA_CONTROLLER&&(g&&(null==(B=null==(N=media_text_display_privateGet(this,nv))?void 0:N.unassociateElement)||B.call(N,this),media_text_display_privateSet(this,nv,null)),M&&this.isConnected&&(media_text_display_privateSet(this,nv,null==(W=this.getRootNode())?void 0:W.getElementById(M)),null==(Y=null==(K=media_text_display_privateGet(this,nv))?void 0:K.associateElement)||Y.call(K,this)))}connectedCallback(){var b,g,M;let{style:N}=getOrInsertCSSRule(this.shadowRoot,":host");N.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let B=this.getAttribute(eI.MEDIA_CONTROLLER);B&&(media_text_display_privateSet(this,nv,null==(b=this.getRootNode())?void 0:b.getElementById(B)),null==(M=null==(g=media_text_display_privateGet(this,nv))?void 0:g.associateElement)||M.call(g,this))}disconnectedCallback(){var b,g;null==(g=null==(b=media_text_display_privateGet(this,nv))?void 0:b.unassociateElement)||g.call(b,this),media_text_display_privateSet(this,nv,null)}};nv=new WeakMap,eK.customElements.get("media-text-display")||eK.customElements.define("media-text-display",MediaTextDisplay);var tG=MediaTextDisplay,media_duration_display_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_duration_display_privateGet=(b,g,M)=>(media_duration_display_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_duration_display_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_duration_display_privateSet=(b,g,M,N)=>(media_duration_display_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M);let MediaDurationDisplay=class MediaDurationDisplay extends MediaTextDisplay{constructor(){super(),media_duration_display_privateAdd(this,nb,void 0),media_duration_display_privateSet(this,nb,this.shadowRoot.querySelector("slot")),media_duration_display_privateGet(this,nb).textContent=formatTime(0)}static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_DURATION]}attributeChangedCallback(b,g,M){b===eR.MEDIA_DURATION&&(media_duration_display_privateGet(this,nb).textContent=formatTime(M)),super.attributeChangedCallback(b,g,M)}get mediaDuration(){return getNumericAttr(this,eR.MEDIA_DURATION)}set mediaDuration(b){setNumericAttr(this,eR.MEDIA_DURATION,b)}};nb=new WeakMap,eK.customElements.get("media-duration-display")||eK.customElements.define("media-duration-display",MediaDurationDisplay);let tW=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,tH=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,tV=eY.createElement("template");tV.innerHTML=`
  <style>
  :host([${eR.MEDIA_IS_FULLSCREEN}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${eR.MEDIA_IS_FULLSCREEN}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${tW}</slot>
    <slot name="exit">${tH}</slot>
  </slot>
`;let media_fullscreen_button_updateAriaLabel=b=>{let g=b.mediaIsFullscreen?eH.EXIT_FULLSCREEN():eH.ENTER_FULLSCREEN();b.setAttribute("aria-label",g)};let MediaFullscreenButton=class MediaFullscreenButton extends MediaChromeButton{static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_IS_FULLSCREEN,eR.MEDIA_FULLSCREEN_UNAVAILABLE]}constructor(b={}){super({slotTemplate:tV,...b})}connectedCallback(){super.connectedCallback(),media_fullscreen_button_updateAriaLabel(this)}attributeChangedCallback(b,g,M){super.attributeChangedCallback(b,g,M),b===eR.MEDIA_IS_FULLSCREEN&&media_fullscreen_button_updateAriaLabel(this)}get mediaFullscreenUnavailable(){return getStringAttr(this,eR.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(b){setStringAttr(this,eR.MEDIA_FULLSCREEN_UNAVAILABLE,b)}get mediaIsFullscreen(){return getBooleanAttr(this,eR.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(b){setBooleanAttr(this,eR.MEDIA_IS_FULLSCREEN,b)}handleClick(){let b=this.mediaIsFullscreen?eC.MEDIA_EXIT_FULLSCREEN_REQUEST:eC.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new eK.CustomEvent(b,{composed:!0,bubbles:!0}))}};eK.customElements.get("media-fullscreen-button")||eK.customElements.define("media-fullscreen-button",MediaFullscreenButton);let{MEDIA_TIME_IS_LIVE:tF,MEDIA_PAUSED:tq}=eR,{MEDIA_SEEK_TO_LIVE_REQUEST:t$,MEDIA_PLAY_REQUEST:tj}=eC,tK=eY.createElement("template");tK.innerHTML=`
  <style>

  slot[name=indicator] > *,
  :host ::slotted([slot=indicator]) {
    
    min-width: auto;
    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
    color: var(--media-live-button-icon-color, rgb(140, 140, 140));
  }

  :host([${tF}]:not([${tq}])) slot[name=indicator] > *,
  :host([${tF}]:not([${tq}])) ::slotted([slot=indicator]) {
    fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
    color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
  }

  :host([${tF}]:not([${tq}])) {
    cursor: not-allowed;
  }

  </style>

  <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
  
  <slot name="spacer">&nbsp;</slot><slot name="text">LIVE</slot>
`;let updateAriaAttributes=b=>{let g=b.mediaPaused||!b.mediaTimeIsLive,M=g?eH.SEEK_LIVE():eH.PLAYING_LIVE();b.setAttribute("aria-label",M),g?b.removeAttribute("aria-disabled"):b.setAttribute("aria-disabled","true")};let MediaLiveButton=class MediaLiveButton extends MediaChromeButton{static get observedAttributes(){return[...super.observedAttributes,tq,tF]}constructor(b={}){super({slotTemplate:tK,...b})}connectedCallback(){updateAriaAttributes(this),super.connectedCallback()}attributeChangedCallback(b,g,M){super.attributeChangedCallback(b,g,M),updateAriaAttributes(this)}get mediaPaused(){return getBooleanAttr(this,eR.MEDIA_PAUSED)}set mediaPaused(b){setBooleanAttr(this,eR.MEDIA_PAUSED,b)}get mediaTimeIsLive(){return getBooleanAttr(this,eR.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(b){setBooleanAttr(this,eR.MEDIA_TIME_IS_LIVE,b)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new eK.CustomEvent(t$,{composed:!0,bubbles:!0})),this.hasAttribute(tq)&&this.dispatchEvent(new eK.CustomEvent(tj,{composed:!0,bubbles:!0})))}};eK.customElements.get("media-live-button")||eK.customElements.define("media-live-button",MediaLiveButton);var media_loading_indicator_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_loading_indicator_privateGet=(b,g,M)=>(media_loading_indicator_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_loading_indicator_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_loading_indicator_privateSet=(b,g,M,N)=>(media_loading_indicator_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M);let tY={LOADING_DELAY:"loadingdelay"},tZ=eY.createElement("template"),tz=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;tZ.innerHTML=`
<style>
:host {
  display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
  vertical-align: middle;
  box-sizing: border-box;
  --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=icon] > *,
:host ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 0);
  transition: opacity 0.15s;
}

:host([${eR.MEDIA_LOADING}]:not([${eR.MEDIA_PAUSED}])) slot[name=icon] > *,
:host([${eR.MEDIA_LOADING}]:not([${eR.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 1);
  transition: opacity 0.15s var(--_loading-indicator-delay);
}

:host #status {
  visibility: var(--media-loading-indicator-opacity, hidden);
  transition: visibility 0.15s;
}

:host([${eR.MEDIA_LOADING}]:not([${eR.MEDIA_PAUSED}])) #status {
  visibility: var(--media-loading-indicator-opacity, visible);
  transition: visibility 0.15s var(--_loading-indicator-delay);
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-indicator-icon-width);
  height: var(--media-loading-indicator-icon-height, 100px);
  fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
  vertical-align: middle;
}
</style>

<slot name="icon">${tz}</slot>
<div id="status" role="status" aria-live="polite">${eW.MEDIA_LOADING()}</div>
`;let MediaLoadingIndicator=class MediaLoadingIndicator extends eK.HTMLElement{constructor(){if(super(),media_loading_indicator_privateAdd(this,ng,void 0),media_loading_indicator_privateAdd(this,nf,500),!this.shadowRoot){let b=this.attachShadow({mode:"open"}),g=tZ.content.cloneNode(!0);b.appendChild(g)}}static get observedAttributes(){return[eI.MEDIA_CONTROLLER,eR.MEDIA_PAUSED,eR.MEDIA_LOADING,tY.LOADING_DELAY]}attributeChangedCallback(b,g,M){var N,B,W,K,Y;b===tY.LOADING_DELAY&&g!==M?this.loadingDelay=Number(M):b===eI.MEDIA_CONTROLLER&&(g&&(null==(B=null==(N=media_loading_indicator_privateGet(this,ng))?void 0:N.unassociateElement)||B.call(N,this),media_loading_indicator_privateSet(this,ng,null)),M&&this.isConnected&&(media_loading_indicator_privateSet(this,ng,null==(W=this.getRootNode())?void 0:W.getElementById(M)),null==(Y=null==(K=media_loading_indicator_privateGet(this,ng))?void 0:K.associateElement)||Y.call(K,this)))}connectedCallback(){var b,g,M;let N=this.getAttribute(eI.MEDIA_CONTROLLER);N&&(media_loading_indicator_privateSet(this,ng,null==(b=this.getRootNode())?void 0:b.getElementById(N)),null==(M=null==(g=media_loading_indicator_privateGet(this,ng))?void 0:g.associateElement)||M.call(g,this))}disconnectedCallback(){var b,g;null==(g=null==(b=media_loading_indicator_privateGet(this,ng))?void 0:b.unassociateElement)||g.call(b,this),media_loading_indicator_privateSet(this,ng,null)}get loadingDelay(){return media_loading_indicator_privateGet(this,nf)}set loadingDelay(b){media_loading_indicator_privateSet(this,nf,b);let{style:g}=getOrInsertCSSRule(this.shadowRoot,":host");g.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${b}ms)`)}get mediaPaused(){return getBooleanAttr(this,eR.MEDIA_PAUSED)}set mediaPaused(b){setBooleanAttr(this,eR.MEDIA_PAUSED,b)}get mediaLoading(){return getBooleanAttr(this,eR.MEDIA_LOADING)}set mediaLoading(b){setBooleanAttr(this,eR.MEDIA_LOADING,b)}};ng=new WeakMap,nf=new WeakMap,eK.customElements.get("media-loading-indicator")||eK.customElements.define("media-loading-indicator",MediaLoadingIndicator);let{MEDIA_VOLUME_LEVEL:tQ}=eR,tX=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,tJ=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,t0=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,t1=eY.createElement("template");t1.innerHTML=`
  <style>
  
  :host(:not([${tQ}])) slot:not([name=high]):not([name=icon]), 
  :host([${tQ}=high]) slot:not([name=high]):not([name=icon]) {
    display: none !important;
  }

  :host([${tQ}=off]) slot:not([name=off]):not([name=icon]) {
    display: none !important;
  }

  :host([${tQ}=low]) slot:not([name=low]):not([name=icon]) {
    display: none !important;
  }

  :host([${tQ}=medium]) slot:not([name=medium]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="off">${tX}</slot>
    <slot name="low">${tJ}</slot>
    <slot name="medium">${tJ}</slot>
    <slot name="high">${t0}</slot>
  </slot>
`;let media_mute_button_updateAriaLabel=b=>{let g="off"===b.mediaVolumeLevel,M=g?eH.UNMUTE():eH.MUTE();b.setAttribute("aria-label",M)};let MediaMuteButton=class MediaMuteButton extends MediaChromeButton{static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_VOLUME_LEVEL]}constructor(b={}){super({slotTemplate:t1,...b})}connectedCallback(){media_mute_button_updateAriaLabel(this),super.connectedCallback()}attributeChangedCallback(b,g,M){b===eR.MEDIA_VOLUME_LEVEL&&media_mute_button_updateAriaLabel(this),super.attributeChangedCallback(b,g,M)}get mediaVolumeLevel(){return getStringAttr(this,eR.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(b){setStringAttr(this,eR.MEDIA_VOLUME_LEVEL,b)}handleClick(){let b="off"===this.mediaVolumeLevel?eC.MEDIA_UNMUTE_REQUEST:eC.MEDIA_MUTE_REQUEST;this.dispatchEvent(new eK.CustomEvent(b,{composed:!0,bubbles:!0}))}};eK.customElements.get("media-mute-button")||eK.customElements.define("media-mute-button",MediaMuteButton);let t2=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,t3=eY.createElement("template");t3.innerHTML=`
  <style>
  :host([${eR.MEDIA_IS_PIP}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${eR.MEDIA_IS_PIP}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${t2}</slot>
    <slot name="exit">${t2}</slot>
  </slot>
`;let media_pip_button_updateAriaLabel=b=>{let g=b.mediaIsPip?eH.EXIT_PIP():eH.ENTER_PIP();b.setAttribute("aria-label",g)};let MediaPipButton=class MediaPipButton extends MediaChromeButton{static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_IS_PIP,eR.MEDIA_PIP_UNAVAILABLE]}constructor(b={}){super({slotTemplate:t3,...b})}connectedCallback(){media_pip_button_updateAriaLabel(this),super.connectedCallback()}attributeChangedCallback(b,g,M){b===eR.MEDIA_IS_PIP&&media_pip_button_updateAriaLabel(this),super.attributeChangedCallback(b,g,M)}get mediaPipUnavailable(){return getStringAttr(this,eR.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(b){setStringAttr(this,eR.MEDIA_PIP_UNAVAILABLE,b)}get mediaIsPip(){return getBooleanAttr(this,eR.MEDIA_IS_PIP)}set mediaIsPip(b){setBooleanAttr(this,eR.MEDIA_IS_PIP,b)}handleClick(){let b=this.mediaIsPip?eC.MEDIA_EXIT_PIP_REQUEST:eC.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new eK.CustomEvent(b,{composed:!0,bubbles:!0}))}};eK.customElements.get("media-pip-button")||eK.customElements.define("media-pip-button",MediaPipButton);var media_playback_rate_button_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_playback_rate_button_privateGet=(b,g,M)=>(media_playback_rate_button_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_playback_rate_button_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)};let t5={RATES:"rates"},t4=[1,1.2,1.5,1.7,2],t9=eY.createElement("template");t9.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
  </style>
  <slot name="icon"></slot>
`;let MediaPlaybackRateButton=class MediaPlaybackRateButton extends MediaChromeButton{constructor(b={}){super({slotTemplate:t9,...b}),media_playback_rate_button_privateAdd(this,nE,new AttributeTokenList(this,t5.RATES,{defaultValue:t4})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML="1x"}static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_PLAYBACK_RATE,t5.RATES]}attributeChangedCallback(b,g,M){if(super.attributeChangedCallback(b,g,M),b===t5.RATES&&(media_playback_rate_button_privateGet(this,nE).value=M),b===eR.MEDIA_PLAYBACK_RATE){let b=M?+M:Number.NaN,g=Number.isNaN(b)?1:b;this.container.innerHTML=`${g}x`,this.setAttribute("aria-label",eW.PLAYBACK_RATE({playbackRate:g}))}}get rates(){return media_playback_rate_button_privateGet(this,nE)}set rates(b){b?Array.isArray(b)&&(media_playback_rate_button_privateGet(this,nE).value=b.join(" ")):media_playback_rate_button_privateGet(this,nE).value=""}get mediaPlaybackRate(){return getNumericAttr(this,eR.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(b){setNumericAttr(this,eR.MEDIA_PLAYBACK_RATE,b)}handleClick(){var b,g;let M=Array.from(this.rates.values(),b=>+b).sort((b,g)=>b-g),N=null!=(g=null!=(b=M.find(b=>b>this.mediaPlaybackRate))?b:M[0])?g:1,B=new eK.CustomEvent(eC.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:N});this.dispatchEvent(B)}};nE=new WeakMap,eK.customElements.get("media-playback-rate-button")||eK.customElements.define("media-playback-rate-button",MediaPlaybackRateButton);var media_playback_rate_menu_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_playback_rate_menu_privateGet=(b,g,M)=>(media_playback_rate_menu_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_playback_rate_menu_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_playback_rate_menu_privateMethod=(b,g,M)=>(media_playback_rate_menu_accessCheck(b,g,"access private method"),M);let t8={RATES:"rates"};let MediaPlaybackRateMenu=class MediaPlaybackRateMenu extends MediaChromeMenu{constructor(){super(),media_playback_rate_menu_privateAdd(this,nA),media_playback_rate_menu_privateAdd(this,nT),media_playback_rate_menu_privateAdd(this,ny,new AttributeTokenList(this,t8.RATES,{defaultValue:t4})),media_playback_rate_menu_privateMethod(this,nA,nk).call(this)}static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_PLAYBACK_RATE,t8.RATES]}attributeChangedCallback(b,g,M){super.attributeChangedCallback(b,g,M),b===eR.MEDIA_PLAYBACK_RATE&&g!=M?this.value=M:b===t8.RATES&&g!=M&&(media_playback_rate_menu_privateGet(this,ny).value=M,media_playback_rate_menu_privateMethod(this,nA,nk).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",media_playback_rate_menu_privateMethod(this,nT,nw))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",media_playback_rate_menu_privateMethod(this,nT,nw))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:getMediaController(this).querySelector("media-playback-rate-menu-button")}get rates(){return media_playback_rate_menu_privateGet(this,ny)}set rates(b){b?Array.isArray(b)&&(media_playback_rate_menu_privateGet(this,ny).value=b.join(" ")):media_playback_rate_menu_privateGet(this,ny).value="",media_playback_rate_menu_privateMethod(this,nA,nk).call(this)}get mediaPlaybackRate(){return getNumericAttr(this,eR.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(b){setNumericAttr(this,eR.MEDIA_PLAYBACK_RATE,b)}};ny=new WeakMap,nA=new WeakSet,nk=function(){for(let b of(this.defaultSlot.textContent="",this.rates)){let g=createMenuItem({type:"radio",text:this.formatMenuItemText(`${b}x`,b),value:b,checked:this.mediaPlaybackRate==b});g.prepend(createIndicator(this,"checked-indicator")),this.defaultSlot.append(g)}},nT=new WeakSet,nw=function(){if(!this.value)return;let b=new eK.CustomEvent(eC.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(b)},eK.customElements.get("media-playback-rate-menu")||eK.customElements.define("media-playback-rate-menu",MediaPlaybackRateMenu);var media_playback_rate_menu_button_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_playback_rate_menu_button_privateGet=(b,g,M)=>(media_playback_rate_menu_button_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_playback_rate_menu_button_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)};let t7={RATES:"rates"},t6=[1,1.2,1.5,1.7,2],ie=eY.createElement("template");ie.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
  </style>
  <slot name="icon"></slot>
`;let MediaPlaybackRateMenuButton=class MediaPlaybackRateMenuButton extends MediaChromeMenuButton{constructor(b={}){super({slotTemplate:ie,...b}),media_playback_rate_menu_button_privateAdd(this,nS,new AttributeTokenList(this,t7.RATES,{defaultValue:t6})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML="1x"}static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_PLAYBACK_RATE,t7.RATES]}attributeChangedCallback(b,g,M){if(super.attributeChangedCallback(b,g,M),b===t7.RATES&&(media_playback_rate_menu_button_privateGet(this,nS).value=M),b===eR.MEDIA_PLAYBACK_RATE){let b=M?+M:Number.NaN,g=Number.isNaN(b)?1:b;this.container.innerHTML=`${g}x`,this.setAttribute("aria-label",eW.PLAYBACK_RATE({playbackRate:g}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:getMediaController(this).querySelector("media-playback-rate-menu")}get rates(){return media_playback_rate_menu_button_privateGet(this,nS)}set rates(b){b?Array.isArray(b)&&(media_playback_rate_menu_button_privateGet(this,nS).value=b.join(" ")):media_playback_rate_menu_button_privateGet(this,nS).value=""}get mediaPlaybackRate(){return getNumericAttr(this,eR.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(b){setNumericAttr(this,eR.MEDIA_PLAYBACK_RATE,b)}};nS=new WeakMap,eK.customElements.get("media-playback-rate-menu-button")||eK.customElements.define("media-playback-rate-menu-button",MediaPlaybackRateMenuButton);let ir=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,is=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,io=eY.createElement("template");io.innerHTML=`
  <style>
  :host([${eR.MEDIA_PAUSED}]) slot[name=pause] {
    display: none !important;
  }

  :host(:not([${eR.MEDIA_PAUSED}])) slot[name=play] {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="play">${ir}</slot>
    <slot name="pause">${is}</slot>
  </slot>
`;let media_play_button_updateAriaLabel=b=>{let g=b.mediaPaused?eH.PLAY():eH.PAUSE();b.setAttribute("aria-label",g)};let MediaPlayButton=class MediaPlayButton extends MediaChromeButton{static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_PAUSED,eR.MEDIA_ENDED]}constructor(b={}){super({slotTemplate:io,...b})}connectedCallback(){media_play_button_updateAriaLabel(this),super.connectedCallback()}attributeChangedCallback(b,g,M){b===eR.MEDIA_PAUSED&&media_play_button_updateAriaLabel(this),super.attributeChangedCallback(b,g,M)}get mediaPaused(){return getBooleanAttr(this,eR.MEDIA_PAUSED)}set mediaPaused(b){setBooleanAttr(this,eR.MEDIA_PAUSED,b)}handleClick(){let b=this.mediaPaused?eC.MEDIA_PLAY_REQUEST:eC.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new eK.CustomEvent(b,{composed:!0,bubbles:!0}))}};eK.customElements.get("media-play-button")||eK.customElements.define("media-play-button",MediaPlayButton);let il={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"},id=eY.createElement("template");id.innerHTML=`
  <style>
    :host {
      pointer-events: none;
      display: var(--media-poster-image-display, inline-block);
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
      background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
      object-fit: var(--media-object-fit, contain);
      object-position: var(--media-object-position, center);
    }
  </style>

  <img part="poster img" aria-hidden="true" id="image"/>
`;let unsetBackgroundImage=b=>{b.style.removeProperty("background-image")},setBackgroundImage=(b,g)=>{b.style["background-image"]=`url('${g}')`};let MediaPosterImage=class MediaPosterImage extends eK.HTMLElement{static get observedAttributes(){return[il.PLACEHOLDER_SRC,il.SRC]}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(id.content.cloneNode(!0))),this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(b,g,M){b===il.SRC&&(null==M?this.image.removeAttribute(il.SRC):this.image.setAttribute(il.SRC,M)),b===il.PLACEHOLDER_SRC&&(null==M?unsetBackgroundImage(this.image):setBackgroundImage(this.image,M))}get placeholderSrc(){return getStringAttr(this,il.PLACEHOLDER_SRC)}set placeholderSrc(b){setStringAttr(this,il.SRC,b)}get src(){return getStringAttr(this,il.SRC)}set src(b){setStringAttr(this,il.SRC,b)}};eK.customElements.get("media-poster-image")||eK.customElements.define("media-poster-image",MediaPosterImage);var media_preview_chapter_display_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_preview_chapter_display_privateGet=(b,g,M)=>(media_preview_chapter_display_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_preview_chapter_display_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_preview_chapter_display_privateSet=(b,g,M,N)=>(media_preview_chapter_display_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M);let MediaPreviewChapterDisplay=class MediaPreviewChapterDisplay extends tG{constructor(){super(),media_preview_chapter_display_privateAdd(this,nC,void 0),media_preview_chapter_display_privateSet(this,nC,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_PREVIEW_CHAPTER]}attributeChangedCallback(b,g,M){super.attributeChangedCallback(b,g,M),b===eR.MEDIA_PREVIEW_CHAPTER&&M!==g&&null!=M&&(media_preview_chapter_display_privateGet(this,nC).textContent=M,""!==M?this.setAttribute("aria-valuetext",`chapter: ${M}`):this.removeAttribute("aria-valuetext"))}get mediaPreviewChapter(){return getStringAttr(this,eR.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(b){setStringAttr(this,eR.MEDIA_PREVIEW_CHAPTER,b)}};nC=new WeakMap,eK.customElements.get("media-preview-chapter-display")||eK.customElements.define("media-preview-chapter-display",MediaPreviewChapterDisplay);var media_preview_thumbnail_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_preview_thumbnail_privateGet=(b,g,M)=>(media_preview_thumbnail_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_preview_thumbnail_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_preview_thumbnail_privateSet=(b,g,M,N)=>(media_preview_thumbnail_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M);let iu=eY.createElement("template");iu.innerHTML=`
  <style>
    :host {
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
      overflow: hidden;
    }

    img {
      display: none;
      position: relative;
    }
  </style>
  <img crossorigin loading="eager" decoding="async">
`;let MediaPreviewThumbnail=class MediaPreviewThumbnail extends eK.HTMLElement{constructor(){super(),media_preview_thumbnail_privateAdd(this,nI,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(iu.content.cloneNode(!0)))}static get observedAttributes(){return[eI.MEDIA_CONTROLLER,eR.MEDIA_PREVIEW_IMAGE,eR.MEDIA_PREVIEW_COORDS]}connectedCallback(){var b,g,M;let N=this.getAttribute(eI.MEDIA_CONTROLLER);N&&(media_preview_thumbnail_privateSet(this,nI,null==(b=this.getRootNode())?void 0:b.getElementById(N)),null==(M=null==(g=media_preview_thumbnail_privateGet(this,nI))?void 0:g.associateElement)||M.call(g,this))}disconnectedCallback(){var b,g;null==(g=null==(b=media_preview_thumbnail_privateGet(this,nI))?void 0:b.unassociateElement)||g.call(b,this),media_preview_thumbnail_privateSet(this,nI,null)}attributeChangedCallback(b,g,M){var N,B,W,K,Y;[eR.MEDIA_PREVIEW_IMAGE,eR.MEDIA_PREVIEW_COORDS].includes(b)&&this.update(),b===eI.MEDIA_CONTROLLER&&(g&&(null==(B=null==(N=media_preview_thumbnail_privateGet(this,nI))?void 0:N.unassociateElement)||B.call(N,this),media_preview_thumbnail_privateSet(this,nI,null)),M&&this.isConnected&&(media_preview_thumbnail_privateSet(this,nI,null==(W=this.getRootNode())?void 0:W.getElementById(M)),null==(Y=null==(K=media_preview_thumbnail_privateGet(this,nI))?void 0:K.associateElement)||Y.call(K,this)))}get mediaPreviewImage(){return getStringAttr(this,eR.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(b){setStringAttr(this,eR.MEDIA_PREVIEW_IMAGE,b)}get mediaPreviewCoords(){let b=this.getAttribute(eR.MEDIA_PREVIEW_COORDS);if(b)return b.split(/\s+/).map(b=>+b)}set mediaPreviewCoords(b){if(!b){this.removeAttribute(eR.MEDIA_PREVIEW_COORDS);return}this.setAttribute(eR.MEDIA_PREVIEW_COORDS,b.join(" "))}update(){let b=this.mediaPreviewCoords,g=this.mediaPreviewImage;if(!(b&&g))return;let[M,N,B,W]=b,K=g.split("#")[0],Y=getComputedStyle(this),{maxWidth:et,maxHeight:er,minWidth:en,minHeight:es}=Y,eo=Math.min(parseInt(et)/B,parseInt(er)/W),el=Math.max(parseInt(en)/B,parseInt(es)/W),ed=eo<1,eu=ed?eo:el>1?el:1,{style:ec}=getOrInsertCSSRule(this.shadowRoot,":host"),em=getOrInsertCSSRule(this.shadowRoot,"img").style,eh=this.shadowRoot.querySelector("img"),ep=ed?"min":"max";ec.setProperty(`${ep}-width`,"initial","important"),ec.setProperty(`${ep}-height`,"initial","important"),ec.width=`${B*eu}px`,ec.height=`${W*eu}px`;let resize=()=>{em.width=`${this.imgWidth*eu}px`,em.height=`${this.imgHeight*eu}px`,em.display="block"};eh.src!==K&&(eh.onload=()=>{this.imgWidth=eh.naturalWidth,this.imgHeight=eh.naturalHeight,resize()},eh.src=K,resize()),resize(),em.transform=`translate(-${M*eu}px, -${N*eu}px)`}};nI=new WeakMap,eK.customElements.get("media-preview-thumbnail")||eK.customElements.define("media-preview-thumbnail",MediaPreviewThumbnail);var media_preview_time_display_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_preview_time_display_privateGet=(b,g,M)=>(media_preview_time_display_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_preview_time_display_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_preview_time_display_privateSet=(b,g,M,N)=>(media_preview_time_display_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M);let MediaPreviewTimeDisplay=class MediaPreviewTimeDisplay extends MediaTextDisplay{constructor(){super(),media_preview_time_display_privateAdd(this,nM,void 0),media_preview_time_display_privateSet(this,nM,this.shadowRoot.querySelector("slot")),media_preview_time_display_privateGet(this,nM).textContent=formatTime(0)}static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_PREVIEW_TIME]}attributeChangedCallback(b,g,M){super.attributeChangedCallback(b,g,M),b===eR.MEDIA_PREVIEW_TIME&&null!=M&&(media_preview_time_display_privateGet(this,nM).textContent=formatTime(M))}get mediaPreviewTime(){return getNumericAttr(this,eR.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(b){setNumericAttr(this,eR.MEDIA_PREVIEW_TIME,b)}};nM=new WeakMap,eK.customElements.get("media-preview-time-display")||eK.customElements.define("media-preview-time-display",MediaPreviewTimeDisplay);var media_rendition_menu_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_rendition_menu_privateGet=(b,g,M)=>(media_rendition_menu_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_rendition_menu_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_rendition_menu_privateSet=(b,g,M,N)=>(media_rendition_menu_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M),media_rendition_menu_privateMethod=(b,g,M)=>(media_rendition_menu_accessCheck(b,g,"access private method"),M);let MediaRenditionMenu=class MediaRenditionMenu extends MediaChromeMenu{constructor(){super(...arguments),media_rendition_menu_privateAdd(this,nL),media_rendition_menu_privateAdd(this,nO),media_rendition_menu_privateAdd(this,nx,[]),media_rendition_menu_privateAdd(this,nR,void 0)}static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_RENDITION_LIST,eR.MEDIA_RENDITION_SELECTED,eR.MEDIA_RENDITION_UNAVAILABLE]}attributeChangedCallback(b,g,M){super.attributeChangedCallback(b,g,M),b===eR.MEDIA_RENDITION_SELECTED&&g!==M?this.value=null!=M?M:"auto":b===eR.MEDIA_RENDITION_LIST&&g!==M&&(media_rendition_menu_privateSet(this,nx,parseRenditionList(M)),media_rendition_menu_privateMethod(this,nL,nD).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",media_rendition_menu_privateMethod(this,nO,nN))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",media_rendition_menu_privateMethod(this,nO,nN))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:getMediaController(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return media_rendition_menu_privateGet(this,nx)}set mediaRenditionList(b){media_rendition_menu_privateSet(this,nx,b),media_rendition_menu_privateMethod(this,nL,nD).call(this)}get mediaRenditionSelected(){return getStringAttr(this,eR.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(b){setStringAttr(this,eR.MEDIA_RENDITION_SELECTED,b)}};nx=new WeakMap,nR=new WeakMap,nL=new WeakSet,nD=function(){if(media_rendition_menu_privateGet(this,nR)===JSON.stringify(this.mediaRenditionList))return;media_rendition_menu_privateSet(this,nR,JSON.stringify(this.mediaRenditionList));let b=this.mediaRenditionList.sort((b,g)=>g.height-b.height);this.defaultSlot.textContent="";let g=!this.mediaRenditionSelected;for(let M of b){let b=this.formatMenuItemText(`${Math.min(M.width,M.height)}p`,M),N=createMenuItem({type:"radio",text:b,value:`${M.id}`,checked:M.selected&&!g});N.prepend(createIndicator(this,"checked-indicator")),this.defaultSlot.append(N)}let M=createMenuItem({type:"radio",text:this.formatMenuItemText("Auto"),value:"auto",checked:g});M.prepend(createIndicator(this,"checked-indicator")),this.defaultSlot.append(M)},nO=new WeakSet,nN=function(){if(null==this.value)return;let b=new eK.CustomEvent(eC.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(b)},eK.customElements.get("media-rendition-menu")||eK.customElements.define("media-rendition-menu",MediaRenditionMenu);let ic=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`,im=eY.createElement("template");im.innerHTML=`
  <slot name="icon">${ic}</slot>
`;let MediaRenditionMenuButton=class MediaRenditionMenuButton extends MediaChromeMenuButton{static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_RENDITION_SELECTED,eR.MEDIA_RENDITION_UNAVAILABLE]}constructor(){super({slotTemplate:im})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",eW.QUALITY())}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:getMediaController(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return getStringAttr(this,eR.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(b){setStringAttr(this,eR.MEDIA_RENDITION_SELECTED,b)}};eK.customElements.get("media-rendition-menu-button")||eK.customElements.define("media-rendition-menu-button",MediaRenditionMenuButton);let ih={SEEK_OFFSET:"seekoffset"},ip=eY.createElement("template");ip.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">30</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg></slot>
`;let MediaSeekBackwardButton=class MediaSeekBackwardButton extends MediaChromeButton{static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_CURRENT_TIME,ih.SEEK_OFFSET]}constructor(b={}){super({slotTemplate:ip,...b})}connectedCallback(){this.seekOffset=getNumericAttr(this,ih.SEEK_OFFSET,30),super.connectedCallback()}attributeChangedCallback(b,g,M){b===ih.SEEK_OFFSET&&(this.seekOffset=getNumericAttr(this,ih.SEEK_OFFSET,30)),super.attributeChangedCallback(b,g,M)}get seekOffset(){return getNumericAttr(this,ih.SEEK_OFFSET,30)}set seekOffset(b){setNumericAttr(this,ih.SEEK_OFFSET,b),this.setAttribute("aria-label",eH.SEEK_BACK_N_SECS({seekOffset:this.seekOffset})),updateIconText(getSlotted(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return getNumericAttr(this,eR.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(b){setNumericAttr(this,eR.MEDIA_CURRENT_TIME,b)}handleClick(){let b=Math.max(this.mediaCurrentTime-this.seekOffset,0),g=new eK.CustomEvent(eC.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:b});this.dispatchEvent(g)}};eK.customElements.get("media-seek-backward-button")||eK.customElements.define("media-seek-backward-button",MediaSeekBackwardButton);let i_={SEEK_OFFSET:"seekoffset"},iv=eY.createElement("template");iv.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">30</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg></slot>
`;let MediaSeekForwardButton=class MediaSeekForwardButton extends MediaChromeButton{static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_CURRENT_TIME,i_.SEEK_OFFSET]}constructor(b={}){super({slotTemplate:iv,...b})}connectedCallback(){this.seekOffset=getNumericAttr(this,i_.SEEK_OFFSET,30),super.connectedCallback()}attributeChangedCallback(b,g,M){b===i_.SEEK_OFFSET&&(this.seekOffset=getNumericAttr(this,i_.SEEK_OFFSET,30)),super.attributeChangedCallback(b,g,M)}get seekOffset(){return getNumericAttr(this,i_.SEEK_OFFSET,30)}set seekOffset(b){setNumericAttr(this,i_.SEEK_OFFSET,b),this.setAttribute("aria-label",eH.SEEK_FORWARD_N_SECS({seekOffset:this.seekOffset})),updateIconText(getSlotted(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return getNumericAttr(this,eR.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(b){setNumericAttr(this,eR.MEDIA_CURRENT_TIME,b)}handleClick(){let b=this.mediaCurrentTime+this.seekOffset,g=new eK.CustomEvent(eC.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:b});this.dispatchEvent(g)}};eK.customElements.get("media-seek-forward-button")||eK.customElements.define("media-seek-forward-button",MediaSeekForwardButton);var ib=Object.defineProperty;let ig=eY.createElement("template");ig.innerHTML=MediaChromeMenu.template.innerHTML+`
  <style>
    :host {
      background: var(--media-settings-menu-background,
        var(--media-menu-background,
        var(--media-control-background,
        var(--media-secondary-color, rgb(20 20 30 / .8)))));
      min-width: var(--media-settings-menu-min-width, 160px);
      border-radius: 2px 2px 0 0;
      overflow: hidden;
    }

    :host([role="menu"]) {
      
      justify-content: end;
    }

    slot:not([name]) {
      justify-content: var(--media-settings-menu-justify-content);
      flex-direction: var(--media-settings-menu-flex-direction, column);
      overflow: visible;
    }

    #container.has-expanded {
      --media-settings-menu-item-opacity: 0;
    }
  </style>
`;let MediaSettingsMenu=class MediaSettingsMenu extends MediaChromeMenu{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:getMediaController(this).querySelector("media-settings-menu-button")}};(iY="symbol"!=typeof(i0="template")?i0+"":i0)in MediaSettingsMenu?ib(MediaSettingsMenu,iY,{enumerable:!0,configurable:!0,writable:!0,value:ig}):MediaSettingsMenu[iY]=ig,eK.customElements.get("media-settings-menu")||eK.customElements.define("media-settings-menu",MediaSettingsMenu);let iE=eY.createElement("template");iE.innerHTML=`
  <slot name="icon">
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
    </svg>
  </slot>
`;let MediaSettingsMenuButton=class MediaSettingsMenuButton extends MediaChromeMenuButton{static get observedAttributes(){return[...super.observedAttributes,"target"]}constructor(){super({slotTemplate:iE})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",eW.SETTINGS())}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:getMediaController(this).querySelector("media-settings-menu")}};eK.customElements.get("media-settings-menu-button")||eK.customElements.define("media-settings-menu-button",MediaSettingsMenuButton);var iy=Object.defineProperty;let iA=eY.createElement("template");iA.innerHTML=MediaChromeMenuItem.template.innerHTML+`
  <style>
    slot:not([name="submenu"]) {
      opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
    }

    :host([aria-expanded="true"]:hover) {
      background: transparent;
    }
  </style>
`,(null==(nP=iA.content)?void 0:nP.querySelector)&&(iA.content.querySelector('slot[name="suffix"]').innerHTML=`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `);let MediaSettingsMenuItem=class MediaSettingsMenuItem extends MediaChromeMenuItem{};(iZ="symbol"!=typeof(i1="template")?i1+"":i1)in MediaSettingsMenuItem?iy(MediaSettingsMenuItem,iZ,{enumerable:!0,configurable:!0,writable:!0,value:iA}):MediaSettingsMenuItem[iZ]=iA,eK.customElements.get("media-settings-menu-item")||eK.customElements.define("media-settings-menu-item",MediaSettingsMenuItem);var media_time_display_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_time_display_privateGet=(b,g,M)=>(media_time_display_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_time_display_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_time_display_privateSet=(b,g,M,N)=>(media_time_display_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M);let ik={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},iT=[...Object.values(ik),eR.MEDIA_CURRENT_TIME,eR.MEDIA_DURATION,eR.MEDIA_SEEKABLE],iw=["Enter"," "],iS="&nbsp;/&nbsp;",formatTimesLabel=(b,{timesSep:g=iS}={})=>{var M,N;let B=b.hasAttribute(ik.REMAINING),W=b.hasAttribute(ik.SHOW_DURATION),K=null!=(M=b.mediaCurrentTime)?M:0,[,Y]=null!=(N=b.mediaSeekable)?N:[],et=0;Number.isFinite(b.mediaDuration)?et=b.mediaDuration:Number.isFinite(Y)&&(et=Y);let er=B?formatTime(0-(et-K)):formatTime(K);return W?`${er}${g}${formatTime(et)}`:er},updateAriaValueText=b=>{var g;let M=b.mediaCurrentTime,[,N]=null!=(g=b.mediaSeekable)?g:[],B=null;if(Number.isFinite(b.mediaDuration)?B=b.mediaDuration:Number.isFinite(N)&&(B=N),null==M||null===B){b.setAttribute("aria-valuetext","video not loaded, unknown time.");return}let W=b.hasAttribute(ik.REMAINING),K=b.hasAttribute(ik.SHOW_DURATION),Y=W?formatAsTimePhrase(0-(B-M)):formatAsTimePhrase(M);if(!K){b.setAttribute("aria-valuetext",Y);return}let et=formatAsTimePhrase(B),er=`${Y} of ${et}`;b.setAttribute("aria-valuetext",er)};let MediaTimeDisplay=class MediaTimeDisplay extends MediaTextDisplay{constructor(){super(),media_time_display_privateAdd(this,nU,void 0),media_time_display_privateSet(this,nU,this.shadowRoot.querySelector("slot")),media_time_display_privateGet(this,nU).innerHTML=`${formatTimesLabel(this)}`}static get observedAttributes(){return[...super.observedAttributes,...iT,"disabled"]}connectedCallback(){let{style:b}=getOrInsertCSSRule(this.shadowRoot,":host(:hover:not([notoggle]))");b.setProperty("cursor","pointer"),b.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",eW.PLAYBACK_TIME());let keyUpHandler=b=>{let{key:g}=b;if(!iw.includes(g)){this.removeEventListener("keyup",keyUpHandler);return}this.toggleTimeDisplay()};this.addEventListener("keydown",b=>{let{metaKey:g,altKey:M,key:N}=b;if(g||M||!iw.includes(N)){this.removeEventListener("keyup",keyUpHandler);return}this.addEventListener("keyup",keyUpHandler)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(b,g,M){iT.includes(b)?this.update():"disabled"===b&&M!==g&&(null==M?this.enable():this.disable()),super.attributeChangedCallback(b,g,M)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return getBooleanAttr(this,ik.REMAINING)}set remaining(b){setBooleanAttr(this,ik.REMAINING,b)}get showDuration(){return getBooleanAttr(this,ik.SHOW_DURATION)}set showDuration(b){setBooleanAttr(this,ik.SHOW_DURATION,b)}get noToggle(){return getBooleanAttr(this,ik.NO_TOGGLE)}set noToggle(b){setBooleanAttr(this,ik.NO_TOGGLE,b)}get mediaDuration(){return getNumericAttr(this,eR.MEDIA_DURATION)}set mediaDuration(b){setNumericAttr(this,eR.MEDIA_DURATION,b)}get mediaCurrentTime(){return getNumericAttr(this,eR.MEDIA_CURRENT_TIME)}set mediaCurrentTime(b){setNumericAttr(this,eR.MEDIA_CURRENT_TIME,b)}get mediaSeekable(){let b=this.getAttribute(eR.MEDIA_SEEKABLE);if(b)return b.split(":").map(b=>+b)}set mediaSeekable(b){if(null==b){this.removeAttribute(eR.MEDIA_SEEKABLE);return}this.setAttribute(eR.MEDIA_SEEKABLE,b.join(":"))}update(){let b=formatTimesLabel(this);updateAriaValueText(this),b!==media_time_display_privateGet(this,nU).innerHTML&&(media_time_display_privateGet(this,nU).innerHTML=b)}};nU=new WeakMap,eK.customElements.get("media-time-display")||eK.customElements.define("media-time-display",MediaTimeDisplay);var range_animation_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},range_animation_privateGet=(b,g,M)=>(range_animation_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),range_animation_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},range_animation_privateSet=(b,g,M,N)=>(range_animation_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M),__privateWrapper=(b,g,M,N)=>({set _(value){range_animation_privateSet(b,g,value,M)},get _(){return range_animation_privateGet(b,g,N)}});let RangeAnimation=class RangeAnimation{constructor(b,g,M){range_animation_privateAdd(this,nB,void 0),range_animation_privateAdd(this,nG,void 0),range_animation_privateAdd(this,nW,void 0),range_animation_privateAdd(this,nH,void 0),range_animation_privateAdd(this,nV,void 0),range_animation_privateAdd(this,nF,void 0),range_animation_privateAdd(this,nq,void 0),range_animation_privateAdd(this,n$,void 0),range_animation_privateAdd(this,nj,0),range_animation_privateAdd(this,nK,(b=performance.now())=>{range_animation_privateSet(this,nj,requestAnimationFrame(range_animation_privateGet(this,nK))),range_animation_privateSet(this,nH,performance.now()-range_animation_privateGet(this,nW));let g=1e3/this.fps;if(range_animation_privateGet(this,nH)>g){range_animation_privateSet(this,nW,b-range_animation_privateGet(this,nH)%g);let M=1e3/((b-range_animation_privateGet(this,nG))/++__privateWrapper(this,nV)._),N=(b-range_animation_privateGet(this,nF))/1e3/this.duration,B=range_animation_privateGet(this,nq)+N*this.playbackRate,W=B-range_animation_privateGet(this,nB).valueAsNumber;W>0?range_animation_privateSet(this,n$,this.playbackRate/this.duration/M):(range_animation_privateSet(this,n$,.995*range_animation_privateGet(this,n$)),B=range_animation_privateGet(this,nB).valueAsNumber+range_animation_privateGet(this,n$)),this.callback(B)}}),range_animation_privateSet(this,nB,b),this.callback=g,this.fps=M}start(){0===range_animation_privateGet(this,nj)&&(range_animation_privateSet(this,nW,performance.now()),range_animation_privateSet(this,nG,range_animation_privateGet(this,nW)),range_animation_privateSet(this,nV,0),range_animation_privateGet(this,nK).call(this))}stop(){0!==range_animation_privateGet(this,nj)&&(cancelAnimationFrame(range_animation_privateGet(this,nj)),range_animation_privateSet(this,nj,0))}update({start:b,duration:g,playbackRate:M}){let N=b-range_animation_privateGet(this,nB).valueAsNumber,B=Math.abs(g-this.duration);(N>0||N<-.03||B>=.5)&&this.callback(b),range_animation_privateSet(this,nq,b),range_animation_privateSet(this,nF,performance.now()),this.duration=g,this.playbackRate=M}};nB=new WeakMap,nG=new WeakMap,nW=new WeakMap,nH=new WeakMap,nV=new WeakMap,nF=new WeakMap,nq=new WeakMap,n$=new WeakMap,nj=new WeakMap,nK=new WeakMap;var media_time_range_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_time_range_privateGet=(b,g,M)=>(media_time_range_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_time_range_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_time_range_privateSet=(b,g,M,N)=>(media_time_range_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M),media_time_range_privateMethod=(b,g,M)=>(media_time_range_accessCheck(b,g,"access private method"),M);let media_time_range_updateAriaValueText=b=>{let g=b.range,M=formatAsTimePhrase(+calcTimeFromRangeValue(b)),N=formatAsTimePhrase(+b.mediaSeekableEnd),B=M&&N?`${M} of ${N}`:"video not loaded, unknown time.";g.setAttribute("aria-valuetext",B)},iC=eY.createElement("template");iC.innerHTML=`
  <style>
    :host {
      --media-box-border-radius: 4px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
      --media-preview-border-radius: var(--media-box-border-radius);
      --media-box-arrow-offset: var(--media-box-border-radius);
      --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      --_preview-background: var(--media-preview-background, var(--_control-background));

      
      contain: layout;
    }

    #highlight {
      background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
    }

    #preview-rail,
    #current-rail {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
      will-change: transform;
    }

    [part~="box"] {
      width: min-content;
      
      position: absolute;
      bottom: 100%;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="current-box"] {
      display: var(--media-current-box-display, var(--media-box-display, flex));
      margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
      visibility: hidden;
    }

    [part~="preview-box"] {
      display: var(--media-preview-box-display, var(--media-box-display, flex));
      margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
      transition-property: var(--media-preview-transition-property, visibility, opacity);
      transition-duration: var(--media-preview-transition-duration-out, .25s);
      transition-delay: var(--media-preview-transition-delay-out, 0s);
      visibility: hidden;
      opacity: 0;
    }

    :host(:is([${eR.MEDIA_PREVIEW_IMAGE}], [${eR.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
      transition-duration: var(--media-preview-transition-duration-in, .5s);
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
      opacity: 1;
    }

    @media (hover: hover) {
      :host(:is([${eR.MEDIA_PREVIEW_IMAGE}], [${eR.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      
      transition: visibility 0s .25s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-thumbnail-background, var(--_preview-background));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${eR.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
    :host([${eR.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
    }

    @media (hover: hover) {
      :host([${eR.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
      :host([${eR.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      :host([${eR.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }
    }

    media-preview-chapter-display,
    ::slotted(media-preview-chapter-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      visibility: hidden;
      
      transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-chapter-background, var(--_preview-background));
      border-radius: var(--media-preview-chapter-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-chapter-padding, 3.5px 9px);
      margin: var(--media-preview-chapter-margin, 0 0 5px);
      text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
    }

    :host([${eR.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
    :host([${eR.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-chapter-border-radius, 0);
      padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
      margin: var(--media-preview-chapter-margin, 0);
      min-width: 100%;
    }

    media-preview-chapter-display[${eR.MEDIA_PREVIEW_CHAPTER}],
    ::slotted(media-preview-chapter-display[${eR.MEDIA_PREVIEW_CHAPTER}]) {
      visibility: visible;
    }

    media-preview-chapter-display:not([aria-valuetext]),
    ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
      display: none;
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display),
    media-time-display,
    ::slotted(media-time-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      
      transition: min-width 0s, border-radius 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--_preview-background));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 3.5px 9px);
      margin: var(--media-preview-time-margin, 0);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50%)
      ));
    }

    :host([${eR.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${eR.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
      min-width: 100%;
      transform: translateX(0);
    }

    :host([${eR.MEDIA_PREVIEW_TIME}]:hover) {
      --media-time-range-hover-display: block;
    }

    [part~="arrow"],
    ::slotted([part~="arrow"]) {
      display: var(--media-box-arrow-display, inline-block);
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
      ));
      
      border-color: transparent;
      border-top-color: var(--media-box-arrow-background, var(--_control-background));
      border-width: var(--media-box-arrow-border-width,
        var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
      border-style: solid;
      justify-content: center;
      height: 0;
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-chapter-display></media-preview-chapter-display>
      <media-preview-time-display></media-preview-time-display>
      <slot name="preview-arrow"><div part="arrow"></div></slot>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      
    </slot>
  </div>
`;let calcRangeValueFromTime=(b,g=b.mediaCurrentTime)=>{let M=Number.isFinite(b.mediaSeekableStart)?b.mediaSeekableStart:0,N=Number.isFinite(b.mediaDuration)?b.mediaDuration:b.mediaSeekableEnd;return Number.isNaN(N)?0:Math.max(0,Math.min((g-M)/(N-M),1))},calcTimeFromRangeValue=(b,g=b.range.valueAsNumber)=>{let M=Number.isFinite(b.mediaSeekableStart)?b.mediaSeekableStart:0,N=Number.isFinite(b.mediaDuration)?b.mediaDuration:b.mediaSeekableEnd;return Number.isNaN(N)?0:g*(N-M)+M};let MediaTimeRange=class MediaTimeRange extends MediaChromeRange{constructor(){super(),media_time_range_privateAdd(this,n3),media_time_range_privateAdd(this,n4),media_time_range_privateAdd(this,n7),media_time_range_privateAdd(this,se),media_time_range_privateAdd(this,sa),media_time_range_privateAdd(this,sn),media_time_range_privateAdd(this,so),media_time_range_privateAdd(this,sd),media_time_range_privateAdd(this,nY,void 0),media_time_range_privateAdd(this,nZ,void 0),media_time_range_privateAdd(this,nz,void 0),media_time_range_privateAdd(this,nQ,void 0),media_time_range_privateAdd(this,nX,void 0),media_time_range_privateAdd(this,nJ,void 0),media_time_range_privateAdd(this,n0,void 0),media_time_range_privateAdd(this,n1,void 0),media_time_range_privateAdd(this,n2,void 0),media_time_range_privateAdd(this,n8,b=>{this.dragging||(this.range.valueAsNumber=b,this.updateBar())}),this.container.appendChild(iC.content.cloneNode(!0)),media_time_range_privateSet(this,nz,this.shadowRoot.querySelectorAll('[part~="box"]')),media_time_range_privateSet(this,nX,this.shadowRoot.querySelector('[part~="preview-box"]')),media_time_range_privateSet(this,nJ,this.shadowRoot.querySelector('[part~="current-box"]'));let b=getComputedStyle(this);media_time_range_privateSet(this,n0,parseInt(b.getPropertyValue("--media-box-padding-left"))),media_time_range_privateSet(this,n1,parseInt(b.getPropertyValue("--media-box-padding-right"))),media_time_range_privateSet(this,nZ,new RangeAnimation(this.range,media_time_range_privateGet(this,n8),60))}static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_PAUSED,eR.MEDIA_DURATION,eR.MEDIA_SEEKABLE,eR.MEDIA_CURRENT_TIME,eR.MEDIA_PREVIEW_IMAGE,eR.MEDIA_PREVIEW_TIME,eR.MEDIA_PREVIEW_CHAPTER,eR.MEDIA_BUFFERED,eR.MEDIA_PLAYBACK_RATE,eR.MEDIA_LOADING,eR.MEDIA_ENDED]}connectedCallback(){var b;super.connectedCallback(),this.range.setAttribute("aria-label",eW.SEEK()),media_time_range_privateMethod(this,n3,n5).call(this),media_time_range_privateSet(this,nY,this.getRootNode()),null==(b=media_time_range_privateGet(this,nY))||b.addEventListener("transitionstart",this)}disconnectedCallback(){var b;super.disconnectedCallback(),media_time_range_privateMethod(this,n3,n5).call(this),null==(b=media_time_range_privateGet(this,nY))||b.removeEventListener("transitionstart",this),media_time_range_privateSet(this,nY,null)}attributeChangedCallback(b,g,M){super.attributeChangedCallback(b,g,M),g!=M&&(b===eR.MEDIA_CURRENT_TIME||b===eR.MEDIA_PAUSED||b===eR.MEDIA_ENDED||b===eR.MEDIA_LOADING||b===eR.MEDIA_DURATION||b===eR.MEDIA_SEEKABLE?(media_time_range_privateGet(this,nZ).update({start:calcRangeValueFromTime(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),media_time_range_privateMethod(this,n3,n5).call(this),media_time_range_updateAriaValueText(this)):b===eR.MEDIA_BUFFERED&&this.updateBufferedBar(),(b===eR.MEDIA_DURATION||b===eR.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=media_time_range_privateGet(this,n2),this.updateBar()))}get mediaChaptersCues(){return media_time_range_privateGet(this,n2)}set mediaChaptersCues(b){var g;media_time_range_privateSet(this,n2,b),this.updateSegments(null==(g=media_time_range_privateGet(this,n2))?void 0:g.map(b=>({start:calcRangeValueFromTime(this,b.startTime),end:calcRangeValueFromTime(this,b.endTime)})))}get mediaPaused(){return getBooleanAttr(this,eR.MEDIA_PAUSED)}set mediaPaused(b){setBooleanAttr(this,eR.MEDIA_PAUSED,b)}get mediaLoading(){return getBooleanAttr(this,eR.MEDIA_LOADING)}set mediaLoading(b){setBooleanAttr(this,eR.MEDIA_LOADING,b)}get mediaDuration(){return getNumericAttr(this,eR.MEDIA_DURATION)}set mediaDuration(b){setNumericAttr(this,eR.MEDIA_DURATION,b)}get mediaCurrentTime(){return getNumericAttr(this,eR.MEDIA_CURRENT_TIME)}set mediaCurrentTime(b){setNumericAttr(this,eR.MEDIA_CURRENT_TIME,b)}get mediaPlaybackRate(){return getNumericAttr(this,eR.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(b){setNumericAttr(this,eR.MEDIA_PLAYBACK_RATE,b)}get mediaBuffered(){let b=this.getAttribute(eR.MEDIA_BUFFERED);return b?b.split(" ").map(b=>b.split(":").map(b=>+b)):[]}set mediaBuffered(b){if(!b){this.removeAttribute(eR.MEDIA_BUFFERED);return}let g=b.map(b=>b.join(":")).join(" ");this.setAttribute(eR.MEDIA_BUFFERED,g)}get mediaSeekable(){let b=this.getAttribute(eR.MEDIA_SEEKABLE);if(b)return b.split(":").map(b=>+b)}set mediaSeekable(b){if(null==b){this.removeAttribute(eR.MEDIA_SEEKABLE);return}this.setAttribute(eR.MEDIA_SEEKABLE,b.join(":"))}get mediaSeekableEnd(){var b;let[,g=this.mediaDuration]=null!=(b=this.mediaSeekable)?b:[];return g}get mediaSeekableStart(){var b;let[g=0]=null!=(b=this.mediaSeekable)?b:[];return g}get mediaPreviewImage(){return getStringAttr(this,eR.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(b){setStringAttr(this,eR.MEDIA_PREVIEW_IMAGE,b)}get mediaPreviewTime(){return getNumericAttr(this,eR.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(b){setNumericAttr(this,eR.MEDIA_PREVIEW_TIME,b)}get mediaEnded(){return getBooleanAttr(this,eR.MEDIA_ENDED)}set mediaEnded(b){setBooleanAttr(this,eR.MEDIA_ENDED,b)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var b;let g;let M=this.mediaBuffered;if(!M.length)return;if(this.mediaEnded)g=1;else{let N=this.mediaCurrentTime,[,B=this.mediaSeekableStart]=null!=(b=M.find(([b,g])=>b<=N&&N<=g))?b:[];g=calcRangeValueFromTime(this,B)}let{style:N}=getOrInsertCSSRule(this.shadowRoot,"#highlight");N.setProperty("width",`${100*g}%`)}updateCurrentBox(){let b=this.shadowRoot.querySelector('slot[name="current"]');if(!b.assignedElements().length)return;let g=getOrInsertCSSRule(this.shadowRoot,"#current-rail"),M=getOrInsertCSSRule(this.shadowRoot,'[part~="current-box"]'),N=media_time_range_privateMethod(this,n7,n6).call(this,media_time_range_privateGet(this,nJ)),B=media_time_range_privateMethod(this,se,si).call(this,N,this.range.valueAsNumber),W=media_time_range_privateMethod(this,sa,sr).call(this,N,this.range.valueAsNumber);g.style.transform=`translateX(${B})`,g.style.setProperty("--_range-width",`${N.range.width}`),M.style.setProperty("--_box-shift",`${W}`),M.style.setProperty("--_box-width",`${N.box.width}px`),M.style.setProperty("visibility","initial")}handleEvent(b){switch(super.handleEvent(b),b.type){case"input":media_time_range_privateMethod(this,sd,su).call(this);break;case"pointermove":media_time_range_privateMethod(this,sn,ss).call(this,b);break;case"pointerup":case"pointerleave":media_time_range_privateMethod(this,so,sl).call(this,null);break;case"transitionstart":containsComposedNode(b.target,this)&&setTimeout(()=>media_time_range_privateMethod(this,n3,n5).call(this),0)}}};nY=new WeakMap,nZ=new WeakMap,nz=new WeakMap,nQ=new WeakMap,nX=new WeakMap,nJ=new WeakMap,n0=new WeakMap,n1=new WeakMap,n2=new WeakMap,n3=new WeakSet,n5=function(){media_time_range_privateMethod(this,n4,n9).call(this)?media_time_range_privateGet(this,nZ).start():media_time_range_privateGet(this,nZ).stop()},n4=new WeakSet,n9=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&isElementVisible(this)},n8=new WeakMap,n7=new WeakSet,n6=function(b){var g;let M=null!=(g=this.getAttribute("bounds")?closestComposedNode(this,`#${this.getAttribute("bounds")}`):this.parentElement)?g:this,N=M.getBoundingClientRect(),B=this.range.getBoundingClientRect(),W=b.offsetWidth,K=-(B.left-N.left-W/2),Y=N.right-B.left-W/2;return{box:{width:W,min:K,max:Y},bounds:N,range:B}},se=new WeakSet,si=function(b,g){let M=`${100*g}%`,{width:N,min:B,max:W}=b.box;if(!N)return M;if(!Number.isNaN(B)){let b=`calc(1 / var(--_range-width) * 100 * ${B}% + var(--media-box-padding-left))`;M=`max(${b}, ${M})`}if(!Number.isNaN(W)){let b=`calc(1 / var(--_range-width) * 100 * ${W}% - var(--media-box-padding-right))`;M=`min(${M}, ${b})`}return M},sa=new WeakSet,sr=function(b,g){let{width:M,min:N,max:B}=b.box,W=g*b.range.width;if(W<N+media_time_range_privateGet(this,n0)){let g=b.range.left-b.bounds.left-media_time_range_privateGet(this,n0);return`${W-M/2+g}px`}if(W>B-media_time_range_privateGet(this,n1)){let g=b.bounds.right-b.range.right-media_time_range_privateGet(this,n1);return`${W+M/2-g-b.range.width}px`}return 0},sn=new WeakSet,ss=function(b){let g=[...media_time_range_privateGet(this,nz)].some(g=>b.composedPath().includes(g));if(!this.dragging&&(g||!b.composedPath().includes(this))){media_time_range_privateMethod(this,so,sl).call(this,null);return}let M=this.mediaSeekableEnd;if(!M)return;let N=getOrInsertCSSRule(this.shadowRoot,"#preview-rail"),B=getOrInsertCSSRule(this.shadowRoot,'[part~="preview-box"]'),W=media_time_range_privateMethod(this,n7,n6).call(this,media_time_range_privateGet(this,nX)),K=(b.clientX-W.range.left)/W.range.width;K=Math.max(0,Math.min(1,K));let Y=media_time_range_privateMethod(this,se,si).call(this,W,K),et=media_time_range_privateMethod(this,sa,sr).call(this,W,K);N.style.transform=`translateX(${Y})`,N.style.setProperty("--_range-width",`${W.range.width}`),B.style.setProperty("--_box-shift",`${et}`),B.style.setProperty("--_box-width",`${W.box.width}px`);let er=Math.round(media_time_range_privateGet(this,nQ))-Math.round(K*M);1>Math.abs(er)&&K>.01&&K<.99||(media_time_range_privateSet(this,nQ,K*M),media_time_range_privateMethod(this,so,sl).call(this,media_time_range_privateGet(this,nQ)))},so=new WeakSet,sl=function(b){this.dispatchEvent(new eK.CustomEvent(eC.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:b}))},sd=new WeakSet,su=function(){media_time_range_privateGet(this,nZ).stop();let b=calcTimeFromRangeValue(this);this.dispatchEvent(new eK.CustomEvent(eC.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:b}))},eK.customElements.get("media-time-range")||eK.customElements.define("media-time-range",MediaTimeRange);let toVolume=b=>b.mediaMuted?0:b.mediaVolume,formatAsPercentString=({value:b})=>`${Math.round(100*b)}%`;let MediaVolumeRange=class MediaVolumeRange extends MediaChromeRange{static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_VOLUME,eR.MEDIA_MUTED,eR.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let b=this.range.value,g=new eK.CustomEvent(eC.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:b});this.dispatchEvent(g)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",eW.VOLUME())}attributeChangedCallback(b,g,M){super.attributeChangedCallback(b,g,M),(b===eR.MEDIA_VOLUME||b===eR.MEDIA_MUTED)&&(this.range.valueAsNumber=toVolume(this),this.range.setAttribute("aria-valuetext",formatAsPercentString(this.range)),this.updateBar())}get mediaVolume(){return getNumericAttr(this,eR.MEDIA_VOLUME,1)}set mediaVolume(b){setNumericAttr(this,eR.MEDIA_VOLUME,b)}get mediaMuted(){return getBooleanAttr(this,eR.MEDIA_MUTED)}set mediaMuted(b){setBooleanAttr(this,eR.MEDIA_MUTED,b)}get mediaVolumeUnavailable(){return getStringAttr(this,eR.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(b){setStringAttr(this,eR.MEDIA_VOLUME_UNAVAILABLE,b)}};eK.customElements.get("media-volume-range")||eK.customElements.define("media-volume-range",MediaVolumeRange);var media_chrome_listbox_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_chrome_listbox_privateGet=(b,g,M)=>(media_chrome_listbox_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_chrome_listbox_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_chrome_listbox_privateSet=(b,g,M,N)=>(media_chrome_listbox_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M),media_chrome_listbox_privateMethod=(b,g,M)=>(media_chrome_listbox_accessCheck(b,g,"access private method"),M);let iI=`
<svg aria-hidden="true" viewBox="0 1 24 24" part="select-indicator indicator">
  <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
</svg>`;function createOption(b,g,M){let N=eY.createElement("media-chrome-option");N.part.add("option"),N.value=g,N.selected=M;let B=eY.createElement("span");return B.textContent=b,N.append(B),N}function media_chrome_listbox_createIndicator(b,g){let M=b.querySelector(`:scope > [slot="${g}"]`);return((null==M?void 0:M.nodeName)=="SLOT"&&(M=M.assignedElements({flatten:!0})[0]),M)?((M=M.cloneNode(!0)).removeAttribute("slot"),M):b.shadowRoot.querySelector(`[name="${g}"] > svg`).cloneNode(!0)}let iM=eY.createElement("template");iM.innerHTML=`
<style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, normal)
      var(--media-font-size, 15px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-listbox-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
    border-radius: var(--media-listbox-border-radius);
    display: inline-flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
  }

  ::slotted([slot="header"]) {
    padding: .4em 1.4em;
    border-bottom: 1px solid rgb(255 255 255 / .25);
  }

  #container {
    gap: var(--media-listbox-gap);
    display: flex;
    flex-direction: var(--media-listbox-flex-direction, column);
    overflow: hidden auto;
    padding-block: .5em;
  }

  media-chrome-option {
    padding-inline: .7em 1.4em;
  }

  media-chrome-option > span {
    margin-inline: .5ch;
  }

  [part~="indicator"] {
    fill: var(--media-option-indicator-fill, var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
    height: var(--media-option-indicator-height, 1.25em);
    vertical-align: var(--media-option-indicator-vertical-align, text-top);
  }

  [part~="select-indicator"] {
    display: var(--media-option-select-indicator-display);
    visibility: hidden;
  }

  [aria-selected="true"] > [part~="select-indicator"] {
    visibility: visible;
  }
</style>
<style id="layout-row" media="width:0">

  ::slotted([slot="header"]) {
    padding: .4em .5em;
  }

  #container {
    gap: var(--media-listbox-gap, .25em);
    flex-direction: var(--media-listbox-flex-direction, row);
    padding-inline: .5em;
  }

  media-chrome-option {
    padding: .3em .24em;
  }

  media-chrome-option[aria-selected="true"] {
    background: var(--media-option-selected-background, rgb(255 255 255 / .2));
  }

  [part~="select-indicator"] {
    display: var(--media-option-select-indicator-display, none);
  }
</style>
<slot name="header"></slot>
<slot id="container"></slot>
<slot name="select-indicator" hidden>${iI}</slot>
`;let MediaChromeListbox=class MediaChromeListbox extends eK.HTMLElement{constructor(b={}){super(),media_chrome_listbox_privateAdd(this,sv),media_chrome_listbox_privateAdd(this,sE),media_chrome_listbox_privateAdd(this,sA),media_chrome_listbox_privateAdd(this,sT),media_chrome_listbox_privateAdd(this,sS),media_chrome_listbox_privateAdd(this,sI),media_chrome_listbox_privateAdd(this,sc,void 0),media_chrome_listbox_privateAdd(this,sm,""),media_chrome_listbox_privateAdd(this,sh,null),media_chrome_listbox_privateAdd(this,sp,!1),media_chrome_listbox_privateAdd(this,s_,b=>{this.handleClick(b)}),media_chrome_listbox_privateAdd(this,sg,b=>{let{key:g}=b;if("Escape"===g){this.removeEventListener("keyup",media_chrome_listbox_privateGet(this,sg));return}if("Meta"===g){media_chrome_listbox_privateSet(this,sp,!1);return}media_chrome_listbox_privateMethod(this,sv,sb).call(this,b)}),media_chrome_listbox_privateAdd(this,sf,b=>{let{key:g,altKey:M}=b;if(M){this.removeEventListener("keyup",media_chrome_listbox_privateGet(this,sg));return}if("Meta"===g){media_chrome_listbox_privateSet(this,sp,!0);return}if(this.keysUsed.includes(g)&&b.preventDefault(),media_chrome_listbox_privateGet(this,sp)&&this.keysUsed.includes(g)){media_chrome_listbox_privateMethod(this,sv,sb).call(this,b);return}this.addEventListener("keyup",media_chrome_listbox_privateGet(this,sg),{once:!0})}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=iM.content.cloneNode(!0),b.slotTemplate&&this.nativeEl.append(b.slotTemplate.content.cloneNode(!0)),this.shadowRoot.append(this.nativeEl)),this.container=this.shadowRoot.querySelector("#container"),this.container.addEventListener("slotchange",b=>{for(let g of b.target.assignedNodes({flatten:!0}))3===g.nodeType&&""===g.textContent.trim()&&g.remove()})}static get observedAttributes(){return["disabled","style",eI.MEDIA_CONTROLLER]}static formatOptionText(b){return b}formatOptionText(b,g){return this.constructor.formatOptionText(b,g)}get options(){var b;let g=this.querySelectorAll("media-chrome-option");return g.length||(g=null==(b=this.container)?void 0:b.querySelectorAll("media-chrome-option")),Array.from(g)}get selectedOptions(){return this.options.filter(b=>b.selected)}get value(){var b,g;return null!=(g=null==(b=this.selectedOptions[0])?void 0:b.value)?g:""}set value(b){let g=this.options.find(g=>g.value===b);g&&media_chrome_listbox_privateMethod(this,sT,sw).call(this,g)}focus(){var b;null==(b=this.selectedOptions[0])||b.focus()}enable(){this.addEventListener("click",media_chrome_listbox_privateGet(this,s_)),this.addEventListener("keydown",media_chrome_listbox_privateGet(this,sf))}disable(){this.removeEventListener("click",media_chrome_listbox_privateGet(this,s_)),this.removeEventListener("keyup",media_chrome_listbox_privateGet(this,sg))}attributeChangedCallback(b,g,M){var N,B,W,K,Y;"style"===b&&M!==g?media_chrome_listbox_privateMethod(this,sE,sy).call(this):b===eI.MEDIA_CONTROLLER?(g&&(null==(B=null==(N=media_chrome_listbox_privateGet(this,sc))?void 0:N.unassociateElement)||B.call(N,this),media_chrome_listbox_privateSet(this,sc,null)),M&&this.isConnected&&(media_chrome_listbox_privateSet(this,sc,null==(W=this.getRootNode())?void 0:W.getElementById(M)),null==(Y=null==(K=media_chrome_listbox_privateGet(this,sc))?void 0:K.associateElement)||Y.call(K,this))):"disabled"===b&&M!==g&&(null==M?this.enable():this.disable())}connectedCallback(){var b,g,M;media_chrome_listbox_privateMethod(this,sE,sy).call(this),this.hasAttribute("disabled")||this.enable(),this.hasAttribute("role")||this.setAttribute("role","listbox");let N=this.getAttribute(eI.MEDIA_CONTROLLER);N&&(media_chrome_listbox_privateSet(this,sc,null==(b=this.getRootNode())?void 0:b.getElementById(N)),null==(M=null==(g=media_chrome_listbox_privateGet(this,sc))?void 0:g.associateElement)||M.call(g,this))}disconnectedCallback(){var b,g;this.disable(),null==(g=null==(b=media_chrome_listbox_privateGet(this,sc))?void 0:b.unassociateElement)||g.call(b,this),media_chrome_listbox_privateSet(this,sc,null)}get keysUsed(){return["Enter"," ","ArrowDown","ArrowUp","Home","End"]}handleSelection(b,g){let M=media_chrome_listbox_privateMethod(this,sA,sk).call(this,b);M&&media_chrome_listbox_privateMethod(this,sT,sw).call(this,M,g)}handleMovement(b){let g;let{key:M}=b,N=this.options,B=media_chrome_listbox_privateMethod(this,sA,sk).call(this,b);switch(B||(B=N.filter(b=>"0"===b.getAttribute("tabindex"))[0]),M){case"ArrowDown":(null==(g=B.nextElementSibling)?void 0:g.hasAttribute("disabled"))&&(g=g.nextElementSibling);break;case"ArrowUp":(null==(g=B.previousElementSibling)?void 0:g.hasAttribute("disabled"))&&(g=g.previousElementSibling);break;case"Home":g=N[0];break;case"End":g=N[N.length-1];break;default:g=media_chrome_listbox_privateMethod(this,sS,sC).call(this,M)}g&&(N.forEach(b=>b.setAttribute("tabindex","-1")),g.setAttribute("tabindex","0"),g.focus())}handleClick(b){let g=media_chrome_listbox_privateMethod(this,sA,sk).call(this,b);!g||g.hasAttribute("disabled")||(this.options.forEach(b=>b.setAttribute("tabindex","-1")),g.setAttribute("tabindex","0"),this.handleSelection(b,this.hasAttribute("aria-multiselectable")&&"true"===this.getAttribute("aria-multiselectable")))}};sc=new WeakMap,sm=new WeakMap,sh=new WeakMap,sp=new WeakMap,s_=new WeakMap,sv=new WeakSet,sb=function(b){let{key:g}=b;"Enter"===g||" "===g?this.handleSelection(b,this.hasAttribute("aria-multiselectable")&&"true"===this.getAttribute("aria-multiselectable")):this.handleMovement(b)},sg=new WeakMap,sf=new WeakMap,sE=new WeakSet,sy=function(){var b;let g=this.shadowRoot.querySelector("#layout-row"),M=(null==(b=getComputedStyle(this).getPropertyValue("--media-listbox-layout"))?void 0:b.trim())==="row";g.setAttribute("media",M?"":"width:0")},sA=new WeakSet,sk=function(b){let g=b.composedPath(),M=g.findIndex(b=>"MEDIA-CHROME-OPTION"===b.nodeName);return g[M]},sT=new WeakSet,sw=function(b,g){let M=[...this.selectedOptions];this.hasAttribute("aria-multiselectable")&&"true"===this.getAttribute("aria-multiselectable")||this.options.forEach(b=>b.selected=!1),g?b.selected=!b.selected:b.selected=!0,this.selectedOptions.some((b,g)=>b!=M[g])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},sS=new WeakSet,sC=function(b){media_chrome_listbox_privateMethod(this,sI,sM).call(this);let g=this.options,M=g.findIndex(b=>"0"===b.getAttribute("tabindex"));media_chrome_listbox_privateSet(this,sm,media_chrome_listbox_privateGet(this,sm)+b);let N=media_chrome_listbox_privateGet(this,sm).split("").every(g=>g===b),B=g.slice(M+(N?1:0)).filter(b=>b.textContent.toLowerCase().startsWith(media_chrome_listbox_privateGet(this,sm))),W=g.slice(0,M-(N?1:0)).filter(b=>b.textContent.toLowerCase().startsWith(media_chrome_listbox_privateGet(this,sm))),K=[],Y=[];N&&(K=g.slice(M+(N?1:0)).filter(g=>g.textContent.startsWith(b)),Y=g.slice(0,M-(N?1:0)).filter(g=>g.textContent.startsWith(b)));let et=[...B,...W,...K,...Y];return et[0]},sI=new WeakSet,sM=function(){clearTimeout(media_chrome_listbox_privateGet(this,sh)),media_chrome_listbox_privateSet(this,sh,null),media_chrome_listbox_privateSet(this,sh,setTimeout(()=>{media_chrome_listbox_privateSet(this,sm,""),media_chrome_listbox_privateSet(this,sh,null)},500))},eK.customElements.get("media-chrome-listbox")||eK.customElements.define("media-chrome-listbox",MediaChromeListbox);var media_chrome_option_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_chrome_option_privateGet=(b,g,M)=>(media_chrome_option_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_chrome_option_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_chrome_option_privateSet=(b,g,M,N)=>(media_chrome_option_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M),media_chrome_option_privateMethod=(b,g,M)=>(media_chrome_option_accessCheck(b,g,"access private method"),M);let ix=eY.createElement("template");ix.innerHTML=`
<style>
  :host {
    cursor: pointer;
    display: block;
    line-height: revert;
    white-space: nowrap;
    white-space-collapse: collapse;
    text-wrap: nowrap;
    padding: .4em .5em;
    transition: var(--media-option-transition);
    outline: var(--media-option-outline, 0);
    outline-offset: var(--media-option-outline-offset, -1px);
  }

  :host(:focus-visible) {
    box-shadow: var(--media-option-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
    outline: var(--media-option-hover-outline, 0);
    outline-offset: var(--media-option-hover-outline-offset,  var(--media-option-outline-offset, -1px));
  }

  :host(:hover) {
    cursor: pointer;
    background: var(--media-option-hover-background, rgb(82 82 122 / .8));
    outline: var(--media-option-hover-outline);
    outline-offset: var(--media-option-hover-outline-offset,  var(--media-option-outline-offset, -1px));
  }

  :host([aria-selected="true"]) {
    background: var(--media-option-selected-background);
  }

  :host([disabled]) {
    pointer-events: none;
    color: rgba(255, 255, 255, .3);
  }
</style>
<slot></slot>
`;let iR={VALUE:"value",SELECTED:"selected",DISABLED:"disabled"};let MediaChromeOption=class MediaChromeOption extends eK.HTMLElement{constructor(){super(),media_chrome_option_privateAdd(this,sL),media_chrome_option_privateAdd(this,sx,!1),media_chrome_option_privateAdd(this,sR,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ix.content.cloneNode(!0)))}static get observedAttributes(){return[iR.DISABLED,iR.SELECTED,iR.VALUE]}get value(){var b;return null!=(b=this.getAttribute(iR.VALUE))?b:this.text}set value(b){this.setAttribute(iR.VALUE,b)}get text(){var b;return(null!=(b=this.textContent)?b:"").trim()}get selected(){return"true"===this.getAttribute("aria-selected")}set selected(b){media_chrome_option_privateSet(this,sx,!0),this.setAttribute("aria-selected",b?"true":"false"),b?this.part.add("option-selected"):this.part.remove("option-selected")}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex",-1),this.hasAttribute("aria-selected")||this.setAttribute("aria-selected","false")}disable(){this.removeAttribute("tabindex")}attributeChangedCallback(b,g,M){b!==iR.SELECTED||media_chrome_option_privateGet(this,sx)?b===iR.DISABLED&&M!==g&&(null==M?this.enable():this.disable()):this.setAttribute("aria-selected",null!=M?"true":"false")}connectedCallback(){this.hasAttribute(iR.DISABLED)||this.enable(),this.setAttribute("role","option"),media_chrome_option_privateSet(this,sR,closestOptionsContainer(this,this.parentNode)),media_chrome_option_privateMethod(this,sL,sD).call(this)}disconnectedCallback(){this.disable(),media_chrome_option_privateMethod(this,sL,sD).call(this),media_chrome_option_privateSet(this,sR,null)}handleClick(){}};function closestOptionsContainer(b,g){if(!b)return null;let{host:M}=b.getRootNode();return!g&&M?closestOptionsContainer(b,M):(null==g?void 0:g.options)?g:closestOptionsContainer(g,null==g?void 0:g.parentNode)}sx=new WeakMap,sR=new WeakMap,sL=new WeakSet,sD=function(){var b;let g=null==(b=media_chrome_option_privateGet(this,sR))?void 0:b.options;if(!g)return;let M=g.filter(b=>"true"===b.getAttribute("aria-selected")).pop();M||(M=g[0]),"true"!==media_chrome_option_privateGet(this,sR).getAttribute("aria-multiselectable")&&g.forEach(b=>{b.setAttribute("tabindex","-1"),b.setAttribute("aria-selected","false")}),null==M||M.setAttribute("tabindex","0"),null==M||M.setAttribute("aria-selected","true")},eK.customElements.get("media-chrome-option")||eK.customElements.define("media-chrome-option",MediaChromeOption);var media_chrome_selectmenu_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_chrome_selectmenu_privateGet=(b,g,M)=>(media_chrome_selectmenu_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_chrome_selectmenu_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_chrome_selectmenu_privateSet=(b,g,M,N)=>(media_chrome_selectmenu_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M),media_chrome_selectmenu_privateMethod=(b,g,M)=>(media_chrome_selectmenu_accessCheck(b,g,"access private method"),M);let iL=eY.createElement("template");iL.innerHTML=`
  <style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, normal)
      var(--media-font-size, 15px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    display: inline-flex;
    position: relative;
    flex-shrink: .5;
  }

  [name=listbox]::slotted(*),
  [part=listbox] {
    position: absolute;
    bottom: 100%;
    max-height: 300px;
    transition: var(--media-selectmenu-transition-in,
      visibility 0s, transform .15s ease-out, opacity .15s ease-out);
    transform: var(--media-listbox-transform-in, translateY(0) scale(1));
    visibility: visible;
    opacity: 1;
  }

  [name=listbox][hidden]::slotted(*),
  [hidden] [part=listbox] {
    transition: var(--media-selectmenu-transition-out,
      visibility .15s ease-out, transform .15s ease-out, opacity .15s ease-out);
    transform: var(--media-listbox-transform-out, translateY(2px) scale(.99));
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  }

  slot[name=listbox][hidden] {
    display: block;
  }
  </style>

  <slot name="button">
    <media-chrome-button aria-haspopup="listbox" part="button">
      <slot name="button-content"></slot>
    </media-chrome-button>
  </slot>
  <slot name="listbox" hidden>
    <media-chrome-listbox id="listbox" part="listbox">
      <slot></slot>
    </media-chrome-listbox>
  </slot>
`;let MediaChromeSelectMenu=class MediaChromeSelectMenu extends eK.HTMLElement{constructor(){var b;super(),media_chrome_selectmenu_privateAdd(this,sq),media_chrome_selectmenu_privateAdd(this,sj),media_chrome_selectmenu_privateAdd(this,sY),media_chrome_selectmenu_privateAdd(this,sO,void 0),media_chrome_selectmenu_privateAdd(this,sN,void 0),media_chrome_selectmenu_privateAdd(this,sP,void 0),media_chrome_selectmenu_privateAdd(this,sU,void 0),media_chrome_selectmenu_privateAdd(this,sB,void 0),media_chrome_selectmenu_privateAdd(this,sG,b=>{let{key:g}=b;if(!this.keysUsed.includes(g)){this.removeEventListener("keyup",media_chrome_selectmenu_privateGet(this,sG));return}let M=b.composedPath().includes(media_chrome_selectmenu_privateGet(this,sN));M&&("Enter"===g||" "===g)?media_chrome_selectmenu_privateMethod(this,sq,s$).call(this):"Escape"===g&&media_chrome_selectmenu_privateMethod(this,sY,sZ).call(this)}),media_chrome_selectmenu_privateAdd(this,sW,b=>{let{metaKey:g,altKey:M,key:N}=b;if(g||M||!this.keysUsed.includes(N)){this.removeEventListener("keyup",media_chrome_selectmenu_privateGet(this,sG));return}b.preventDefault(),this.addEventListener("keyup",media_chrome_selectmenu_privateGet(this,sG),{once:!0})}),media_chrome_selectmenu_privateAdd(this,sH,b=>{b.composedPath().includes(this)||media_chrome_selectmenu_privateMethod(this,sY,sZ).call(this)}),media_chrome_selectmenu_privateAdd(this,sV,b=>{b.composedPath().includes(media_chrome_selectmenu_privateGet(this,sN))&&media_chrome_selectmenu_privateMethod(this,sq,s$).call(this)}),media_chrome_selectmenu_privateAdd(this,sF,()=>{media_chrome_selectmenu_privateMethod(this,sY,sZ).call(this)}),media_chrome_selectmenu_privateAdd(this,sz,()=>{if(0===media_chrome_selectmenu_privateGet(this,sU).offsetWidth)return;let b=media_chrome_selectmenu_privateGet(this,sU).offsetWidth,g=media_chrome_selectmenu_privateGet(this,sN).getBoundingClientRect();if(this.hasAttribute("mediacontroller")||media_chrome_selectmenu_privateGet(this,sN).hasAttribute("mediacontroller")||media_chrome_selectmenu_privateGet(this,sU).hasAttribute("mediacontroller")){media_chrome_selectmenu_privateGet(this,sU).style.zIndex="1",media_chrome_selectmenu_privateGet(this,sU).style.bottom="unset",media_chrome_selectmenu_privateGet(this,sU).style.right=null,media_chrome_selectmenu_privateGet(this,sU).style.left="0",media_chrome_selectmenu_privateGet(this,sU).style.top=`${g.height}px`;return}let M=media_chrome_selectmenu_getBoundsElement(this),N=M.getBoundingClientRect(),B=g.x+b,W=Math.max(g.right-B,g.right-N.right);media_chrome_selectmenu_privateGet(this,sU).style.left=null,media_chrome_selectmenu_privateGet(this,sU).style.right=`${W}px`,media_chrome_selectmenu_privateGet(this,sU).style.maxHeight=`${N.height-g.height}px`}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(iL.content.cloneNode(!0))),null==(b=this.init)||b.call(this),media_chrome_selectmenu_privateSet(this,sN,this.shadowRoot.querySelector("[part=button]")),media_chrome_selectmenu_privateSet(this,sU,this.shadowRoot.querySelector("[part=listbox]")),media_chrome_selectmenu_privateSet(this,sP,this.shadowRoot.querySelector("slot[name=button]")),media_chrome_selectmenu_privateGet(this,sP).addEventListener("slotchange",()=>{let b=media_chrome_selectmenu_privateGet(this,sP).assignedElements()[0];if(!b)return;media_chrome_selectmenu_privateSet(this,sN,b),media_chrome_selectmenu_privateGet(this,sN).preventClick=!0;let g=this.hasAttribute("disabled")||media_chrome_selectmenu_privateGet(this,sN).hasAttribute("disabled");g?this.disable():(this.enable(),media_chrome_selectmenu_privateGet(this,sN).setAttribute("aria-haspopup","listbox"))}),media_chrome_selectmenu_privateSet(this,sB,this.shadowRoot.querySelector("slot[name=listbox]")),media_chrome_selectmenu_privateGet(this,sB).addEventListener("slotchange",()=>{media_chrome_selectmenu_privateSet(this,sU,media_chrome_selectmenu_privateGet(this,sB).assignedElements()[0]||media_chrome_selectmenu_privateGet(this,sU))})}static get observedAttributes(){return["disabled",eI.MEDIA_CONTROLLER]}enable(){media_chrome_selectmenu_privateGet(this,sN).toggleAttribute("disabled",!1),this.addEventListener("change",media_chrome_selectmenu_privateGet(this,sF)),this.addEventListener("keydown",media_chrome_selectmenu_privateGet(this,sW)),this.addEventListener("click",media_chrome_selectmenu_privateGet(this,sV)),eY.addEventListener("click",media_chrome_selectmenu_privateGet(this,sH))}disable(){media_chrome_selectmenu_privateGet(this,sN).toggleAttribute("disabled",!0),this.removeEventListener("change",media_chrome_selectmenu_privateGet(this,sF)),this.removeEventListener("keydown",media_chrome_selectmenu_privateGet(this,sW)),this.removeEventListener("keyup",media_chrome_selectmenu_privateGet(this,sG)),this.removeEventListener("click",media_chrome_selectmenu_privateGet(this,sV)),eY.removeEventListener("click",media_chrome_selectmenu_privateGet(this,sH))}attributeChangedCallback(b,g,M){var N,B,W,K,Y;b===eI.MEDIA_CONTROLLER?(g&&(null==(B=null==(N=media_chrome_selectmenu_privateGet(this,sO))?void 0:N.unassociateElement)||B.call(N,this),media_chrome_selectmenu_privateSet(this,sO,null),media_chrome_selectmenu_privateGet(this,sU).removeAttribute(eI.MEDIA_CONTROLLER)),M&&this.isConnected&&(media_chrome_selectmenu_privateSet(this,sO,null==(W=this.getRootNode())?void 0:W.getElementById(M)),null==(Y=null==(K=media_chrome_selectmenu_privateGet(this,sO))?void 0:K.associateElement)||Y.call(K,this),media_chrome_selectmenu_privateGet(this,sU).setAttribute(eI.MEDIA_CONTROLLER,M))):"disabled"===b&&M!==g&&(null==M?this.enable():this.disable())}connectedCallback(){var b,g,M;let{style:N}=getOrInsertCSSRule(this.shadowRoot,":host");N.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let B=this.getAttribute(eI.MEDIA_CONTROLLER);B&&(media_chrome_selectmenu_privateSet(this,sO,null==(b=this.getRootNode())?void 0:b.getElementById(B)),null==(M=null==(g=media_chrome_selectmenu_privateGet(this,sO))?void 0:g.associateElement)||M.call(g,this),media_chrome_selectmenu_privateGet(this,sU).setAttribute(eI.MEDIA_CONTROLLER,B)),this.hasAttribute("disabled")||this.enable(),media_chrome_selectmenu_privateGet(this,sB).hidden||observeResize(media_chrome_selectmenu_getBoundsElement(this),media_chrome_selectmenu_privateGet(this,sz))}disconnectedCallback(){var b,g;unobserveResize(media_chrome_selectmenu_getBoundsElement(this),media_chrome_selectmenu_privateGet(this,sz)),this.disable(),null==(g=null==(b=media_chrome_selectmenu_privateGet(this,sO))?void 0:b.unassociateElement)||g.call(b,this),media_chrome_selectmenu_privateSet(this,sO,null),media_chrome_selectmenu_privateGet(this,sU).removeAttribute(eI.MEDIA_CONTROLLER)}get keysUsed(){return["Enter","Escape"," ","ArrowUp","ArrowDown","f","c","k","m"]}};function media_chrome_selectmenu_getBoundsElement(b){var g;return null!=(g=b.getAttribute("bounds")?closestComposedNode(b,`#${b.getAttribute("bounds")}`):getMediaControllerElement(b)||b.parentElement)?g:b}function getMediaControllerElement(b){var g;let M=b.getAttribute(eI.MEDIA_CONTROLLER);return M?null==(g=b.getRootNode())?void 0:g.getElementById(M):closestComposedNode(b,"media-controller")}sO=new WeakMap,sN=new WeakMap,sP=new WeakMap,sU=new WeakMap,sB=new WeakMap,sG=new WeakMap,sW=new WeakMap,sH=new WeakMap,sV=new WeakMap,sF=new WeakMap,sq=new WeakSet,s$=function(){media_chrome_selectmenu_privateGet(this,sB).hidden?media_chrome_selectmenu_privateMethod(this,sj,sK).call(this):media_chrome_selectmenu_privateMethod(this,sY,sZ).call(this)},sj=new WeakSet,sK=function(){media_chrome_selectmenu_privateGet(this,sB).hidden&&(media_chrome_selectmenu_privateGet(this,sB).hidden=!1,media_chrome_selectmenu_privateGet(this,sN).setAttribute("aria-expanded","true"),media_chrome_selectmenu_privateGet(this,sz).call(this),media_chrome_selectmenu_privateGet(this,sU).focus(),observeResize(media_chrome_selectmenu_getBoundsElement(this),media_chrome_selectmenu_privateGet(this,sz)))},sY=new WeakSet,sZ=function(){if(media_chrome_selectmenu_privateGet(this,sB).hidden)return;unobserveResize(media_chrome_selectmenu_getBoundsElement(this),media_chrome_selectmenu_privateGet(this,sz));let b=getActiveElement();media_chrome_selectmenu_privateGet(this,sB).hidden=!0,media_chrome_selectmenu_privateGet(this,sN).setAttribute("aria-expanded","false"),containsComposedNode(media_chrome_selectmenu_privateGet(this,sU),b)&&media_chrome_selectmenu_privateGet(this,sN).focus()},sz=new WeakMap,eK.customElements.get("media-chrome-selectmenu")||eK.customElements.define("media-chrome-selectmenu",MediaChromeSelectMenu);var media_captions_listbox_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_captions_listbox_privateGet=(b,g,M)=>(media_captions_listbox_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_captions_listbox_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_captions_listbox_privateSet=(b,g,M,N)=>(media_captions_listbox_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M),media_captions_listbox_privateMethod=(b,g,M)=>(media_captions_listbox_accessCheck(b,g,"access private method"),M);let iD=`
<svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,iO=eY.createElement("template");iO.innerHTML=`
  <slot name="captions-indicator" hidden>${iD}</slot>
`;let MediaCaptionsListbox=class MediaCaptionsListbox extends MediaChromeListbox{constructor(){super({slotTemplate:iO}),media_captions_listbox_privateAdd(this,sX),media_captions_listbox_privateAdd(this,s0),media_captions_listbox_privateAdd(this,sQ,void 0)}static get observedAttributes(){return[...super.observedAttributes,"aria-multiselectable",eR.MEDIA_SUBTITLES_LIST,eR.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(b,g,M){super.attributeChangedCallback(b,g,M),b===eR.MEDIA_SUBTITLES_LIST&&g!==M?media_captions_listbox_privateMethod(this,sX,sJ).call(this):b===eR.MEDIA_SUBTITLES_SHOWING&&g!==M?this.value=M:"aria-multiselectable"===b&&(this.removeAttribute("aria-multiselectable"),console.warn("Captions List doesn't currently support multiple selections. You can enable multiple items via the media.textTracks API."))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",media_captions_listbox_privateMethod(this,s0,s1))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",media_captions_listbox_privateMethod(this,s0,s1))}get mediaSubtitlesList(){return media_captions_listbox_getSubtitlesListAttr(this,eR.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(b){media_captions_listbox_setSubtitlesListAttr(this,eR.MEDIA_SUBTITLES_LIST,b)}get mediaSubtitlesShowing(){return media_captions_listbox_getSubtitlesListAttr(this,eR.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(b){media_captions_listbox_setSubtitlesListAttr(this,eR.MEDIA_SUBTITLES_SHOWING,b)}};sQ=new WeakMap,sX=new WeakSet,sJ=function(){var b;if(media_captions_listbox_privateGet(this,sQ)===JSON.stringify(this.mediaSubtitlesList))return;media_captions_listbox_privateSet(this,sQ,JSON.stringify(this.mediaSubtitlesList));let g=this.shadowRoot.querySelector("#container");g.textContent="";let M=!this.value,N=createOption(this.formatOptionText("Off"),"off",M);N.prepend(media_chrome_listbox_createIndicator(this,"select-indicator")),g.append(N);let B=this.mediaSubtitlesList;for(let M of B){let N=createOption(this.formatOptionText(M.label,M),formatTextTrackObj(M),this.value==formatTextTrackObj(M));N.prepend(media_chrome_listbox_createIndicator(this,"select-indicator"));let B=null!=(b=M.kind)?b:"subs";"captions"===B&&N.append(media_chrome_listbox_createIndicator(this,"captions-indicator")),g.append(N)}},s0=new WeakSet,s1=function(){let b=this.mediaSubtitlesShowing,g=this.getAttribute(eR.MEDIA_SUBTITLES_SHOWING),M=this.value!==g;if((null==b?void 0:b.length)&&M&&this.dispatchEvent(new eK.CustomEvent(eC.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:b})),!this.value||!M)return;let N=new eK.CustomEvent(eC.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(N)};let media_captions_listbox_getSubtitlesListAttr=(b,g)=>{let M=b.getAttribute(g);return M?parseTextTracksStr(M):[]},media_captions_listbox_setSubtitlesListAttr=(b,g,M)=>{if(!(null==M?void 0:M.length)){b.removeAttribute(g);return}let N=stringifyTextTrackList(M),B=b.getAttribute(g);B!==N&&b.setAttribute(g,N)};eK.customElements.get("media-captions-listbox")||eK.customElements.define("media-captions-listbox",MediaCaptionsListbox);let MediaCaptionsSelectMenu=class MediaCaptionsSelectMenu extends MediaChromeSelectMenu{init(){let b=eY.createElement("media-captions-button");b.part.add("button"),b.preventClick=!0;let g=eY.createElement("media-captions-listbox");g.part.add("listbox"),g.setAttribute("exportparts","option, option-selected, indicator");let M=this.shadowRoot.querySelector("slot[name=button]"),N=this.shadowRoot.querySelector("slot[name=listbox]");M.textContent="",N.textContent="",M.append(b),N.append(g)}};eK.customElements.get("media-captions-selectmenu")||eK.customElements.define("media-captions-selectmenu",MediaCaptionsSelectMenu);var media_playback_rate_listbox_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_playback_rate_listbox_privateGet=(b,g,M)=>(media_playback_rate_listbox_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_playback_rate_listbox_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_playback_rate_listbox_privateMethod=(b,g,M)=>(media_playback_rate_listbox_accessCheck(b,g,"access private method"),M);let iN={RATES:"rates"};let MediaPlaybackRateListbox=class MediaPlaybackRateListbox extends MediaChromeListbox{constructor(){super(),media_playback_rate_listbox_privateAdd(this,s3),media_playback_rate_listbox_privateAdd(this,s4),media_playback_rate_listbox_privateAdd(this,s2,new AttributeTokenList(this,iN.RATES,{defaultValue:t4})),media_playback_rate_listbox_privateMethod(this,s3,s5).call(this)}static get observedAttributes(){return[...super.observedAttributes,"aria-multiselectable",eR.MEDIA_PLAYBACK_RATE,iN.RATES]}attributeChangedCallback(b,g,M){super.attributeChangedCallback(b,g,M),b===eR.MEDIA_PLAYBACK_RATE&&g!=M?this.value=M:b===iN.RATES&&g!=M&&(media_playback_rate_listbox_privateGet(this,s2).value=M,media_playback_rate_listbox_privateMethod(this,s3,s5).call(this))}get rates(){return media_playback_rate_listbox_privateGet(this,s2)}set rates(b){b?Array.isArray(b)&&(media_playback_rate_listbox_privateGet(this,s2).value=b.join(" ")):media_playback_rate_listbox_privateGet(this,s2).value="",media_playback_rate_listbox_privateMethod(this,s3,s5).call(this)}get mediaPlaybackRate(){return getNumericAttr(this,eR.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(b){setNumericAttr(this,eR.MEDIA_PLAYBACK_RATE,b)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",media_playback_rate_listbox_privateMethod(this,s4,s9))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",media_playback_rate_listbox_privateMethod(this,s4,s9))}};s2=new WeakMap,s3=new WeakSet,s5=function(){let b=this.shadowRoot.querySelector("#container");for(let g of(b.textContent="",this.rates)){let M=createOption(this.formatOptionText(`${g}x`,g),g,this.mediaPlaybackRate==g);M.prepend(media_chrome_listbox_createIndicator(this,"select-indicator")),b.append(M)}},s4=new WeakSet,s9=function(){if(!this.value)return;let b=new eK.CustomEvent(eC.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(b)},eK.customElements.get("media-playback-rate-listbox")||eK.customElements.define("media-playback-rate-listbox",MediaPlaybackRateListbox);let MediaPlaybackRateSelectMenu=class MediaPlaybackRateSelectMenu extends MediaChromeSelectMenu{init(){let b=eY.createElement("media-playback-rate-button");b.part.add("button"),b.preventClick=!0;let g=eY.createElement("media-playback-rate-listbox");g.part.add("listbox"),g.setAttribute("exportparts","option, option-selected, indicator");let M=this.shadowRoot.querySelector("slot[name=button]"),N=this.shadowRoot.querySelector("slot[name=listbox]");M.textContent="",N.textContent="",M.append(b),N.append(g)}};eK.customElements.get("media-playback-rate-selectmenu")||eK.customElements.define("media-playback-rate-selectmenu",MediaPlaybackRateSelectMenu);var media_rendition_listbox_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_rendition_listbox_privateGet=(b,g,M)=>(media_rendition_listbox_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_rendition_listbox_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_rendition_listbox_privateSet=(b,g,M,N)=>(media_rendition_listbox_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M),media_rendition_listbox_privateMethod=(b,g,M)=>(media_rendition_listbox_accessCheck(b,g,"access private method"),M);let MediaRenditionListbox=class MediaRenditionListbox extends MediaChromeListbox{constructor(){super(...arguments),media_rendition_listbox_privateAdd(this,s6),media_rendition_listbox_privateAdd(this,or),media_rendition_listbox_privateAdd(this,s8,[]),media_rendition_listbox_privateAdd(this,s7,void 0)}static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_RENDITION_LIST,eR.MEDIA_RENDITION_SELECTED]}attributeChangedCallback(b,g,M){super.attributeChangedCallback(b,g,M),b===eR.MEDIA_RENDITION_SELECTED&&g!==M?this.value=null!=M?M:"auto":b===eR.MEDIA_RENDITION_LIST&&g!==M&&(media_rendition_listbox_privateSet(this,s8,parseRenditionList(M)),media_rendition_listbox_privateMethod(this,s6,oi).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",media_rendition_listbox_privateMethod(this,or,on))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",media_rendition_listbox_privateMethod(this,or,on))}get mediaRenditionList(){return media_rendition_listbox_privateGet(this,s8)}set mediaRenditionList(b){media_rendition_listbox_privateSet(this,s8,b),media_rendition_listbox_privateMethod(this,s6,oi).call(this)}get mediaRenditionSelected(){return getStringAttr(this,eR.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(b){setStringAttr(this,eR.MEDIA_RENDITION_SELECTED,b)}};s8=new WeakMap,s7=new WeakMap,s6=new WeakSet,oi=function(){if(media_rendition_listbox_privateGet(this,s7)===JSON.stringify(this.mediaRenditionList))return;media_rendition_listbox_privateSet(this,s7,JSON.stringify(this.mediaRenditionList));let b=this.mediaRenditionList.sort((b,g)=>g.height-b.height),g=this.shadowRoot.querySelector("#container");g.textContent="";let M=!this.mediaRenditionSelected;for(let N of b){let b=this.formatOptionText(`${Math.min(N.width,N.height)}p`,N),B=createOption(b,`${N.id}`,N.selected&&!M);B.prepend(media_chrome_listbox_createIndicator(this,"select-indicator")),g.append(B)}let N=createOption(this.formatOptionText("Auto"),"auto",M);N.prepend(media_chrome_listbox_createIndicator(this,"select-indicator")),g.append(N)},or=new WeakSet,on=function(){if(null==this.value)return;let b=new eK.CustomEvent(eC.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(b)},eK.customElements.get("media-rendition-listbox")||eK.customElements.define("media-rendition-listbox",MediaRenditionListbox);let iP=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`,iU=eY.createElement("template");iU.innerHTML=`
  <slot name="icon">${iP}</slot>
`;let MediaRenditionButton=class MediaRenditionButton extends MediaChromeButton{static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_RENDITION_SELECTED,eR.MEDIA_RENDITION_UNAVAILABLE]}constructor(){super({slotTemplate:iU})}get mediaRenditionSelected(){return getStringAttr(this,eR.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(b){setStringAttr(this,eR.MEDIA_RENDITION_SELECTED,b)}};eK.customElements.get("media-rendition-button")||eK.customElements.define("media-rendition-button",MediaRenditionButton);let MediaRenditionSelectMenu=class MediaRenditionSelectMenu extends MediaChromeSelectMenu{static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_RENDITION_SELECTED,eR.MEDIA_RENDITION_UNAVAILABLE]}init(){let b=eY.createElement("media-rendition-button");b.part.add("button"),b.preventClick=!0;let g=eY.createElement("media-rendition-listbox");g.part.add("listbox"),g.setAttribute("exportparts","option, option-selected, indicator");let M=this.shadowRoot.querySelector("slot[name=button]"),N=this.shadowRoot.querySelector("slot[name=listbox]");M.textContent="",N.textContent="",M.append(b),N.append(g)}};eK.customElements.get("media-rendition-selectmenu")||eK.customElements.define("media-rendition-selectmenu",MediaRenditionSelectMenu);var media_audio_track_listbox_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_audio_track_listbox_privateGet=(b,g,M)=>(media_audio_track_listbox_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_audio_track_listbox_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_audio_track_listbox_privateSet=(b,g,M,N)=>(media_audio_track_listbox_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M),media_audio_track_listbox_privateMethod=(b,g,M)=>(media_audio_track_listbox_accessCheck(b,g,"access private method"),M);let MediaAudioTrackListbox=class MediaAudioTrackListbox extends MediaChromeListbox{constructor(){super(...arguments),media_audio_track_listbox_privateAdd(this,ol),media_audio_track_listbox_privateAdd(this,ou),media_audio_track_listbox_privateAdd(this,os,[]),media_audio_track_listbox_privateAdd(this,oo,void 0)}static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_AUDIO_TRACK_LIST,eR.MEDIA_AUDIO_TRACK_ENABLED]}attributeChangedCallback(b,g,M){super.attributeChangedCallback(b,g,M),b===eR.MEDIA_AUDIO_TRACK_ENABLED&&g!==M?this.value=M:b===eR.MEDIA_AUDIO_TRACK_LIST&&g!==M&&(media_audio_track_listbox_privateSet(this,os,parseAudioTrackList(M)),media_audio_track_listbox_privateMethod(this,ol,od).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",media_audio_track_listbox_privateMethod(this,ou,oc))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",media_audio_track_listbox_privateMethod(this,ou,oc))}get mediaAudioTrackList(){return media_audio_track_listbox_privateGet(this,os)}set mediaAudioTrackList(b){media_audio_track_listbox_privateSet(this,os,b),media_audio_track_listbox_privateMethod(this,ol,od).call(this)}get mediaAudioTrackEnabled(){return getStringAttr(this,eR.MEDIA_AUDIO_TRACK_ENABLED)}set mediaAudioTrackEnabled(b){setStringAttr(this,eR.MEDIA_AUDIO_TRACK_ENABLED,b)}};os=new WeakMap,oo=new WeakMap,ol=new WeakSet,od=function(){if(media_audio_track_listbox_privateGet(this,oo)===JSON.stringify(this.mediaAudioTrackList))return;media_audio_track_listbox_privateSet(this,oo,JSON.stringify(this.mediaAudioTrackList));let b=this.mediaAudioTrackList,g=this.shadowRoot.querySelector("#container");for(let M of(g.textContent="",b)){let b=this.formatOptionText(M.label,M),N=createOption(b,`${M.id}`,M.enabled);N.prepend(media_chrome_listbox_createIndicator(this,"select-indicator")),g.append(N)}},ou=new WeakSet,oc=function(){if(null==this.value)return;let b=new eK.CustomEvent(eC.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(b)},eK.customElements.get("media-audio-track-listbox")||eK.customElements.define("media-audio-track-listbox",MediaAudioTrackListbox);let iB=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,iG=eY.createElement("template");iG.innerHTML=`
  <slot name="icon">${iB}</slot>
`;let MediaAudioTrackButton=class MediaAudioTrackButton extends MediaChromeButton{static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_AUDIO_TRACK_ENABLED,eR.MEDIA_AUDIO_TRACK_UNAVAILABLE]}constructor(){super({slotTemplate:iG})}get mediaAudioTrackEnabled(){return getStringAttr(this,eR.MEDIA_AUDIO_TRACK_ENABLED)}set mediaAudioTrackEnabled(b){setStringAttr(this,eR.MEDIA_AUDIO_TRACK_ENABLED,b)}};eK.customElements.get("media-audio-track-button")||eK.customElements.define("media-audio-track-button",MediaAudioTrackButton);let MediaAudioTrackSelectMenu=class MediaAudioTrackSelectMenu extends MediaChromeSelectMenu{static get observedAttributes(){return[...super.observedAttributes,eR.MEDIA_AUDIO_TRACK_ENABLED,eR.MEDIA_AUDIO_TRACK_UNAVAILABLE]}init(){let b=eY.createElement("media-audio-track-button");b.part.add("button"),b.preventClick=!0;let g=eY.createElement("media-audio-track-listbox");g.part.add("listbox"),g.setAttribute("exportparts","option, option-selected, indicator");let M=this.shadowRoot.querySelector("slot[name=button]"),N=this.shadowRoot.querySelector("slot[name=listbox]");M.textContent="",N.textContent="",M.append(b),N.append(g)}};eK.customElements.get("media-audio-track-selectmenu")||eK.customElements.define("media-audio-track-selectmenu",MediaAudioTrackSelectMenu);var iW=Object.defineProperty,iH=Object.getPrototypeOf,iV=Reflect.get,li=(b,g,M)=>g in b?iW(b,g,{enumerable:!0,configurable:!0,writable:!0,value:M}):b[g]=M,dist_E=(b,g,M)=>(li(b,"symbol"!=typeof g?g+"":g,M),M),pt=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},i=(b,g,M)=>(pt(b,g,"read from private field"),M?M.call(b):g.get(b)),c=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},u=(b,g,M,N)=>(pt(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M),dist_A=(b,g,M)=>(pt(b,g,"access private method"),M),$e=(b,g,M)=>iV(iH(b),M,g),iF=class{addEventListener(){}removeEventListener(){}dispatchEvent(b){return!0}};if("undefined"==typeof DocumentFragment){let t=class t extends iF{};globalThis.DocumentFragment=t}var iq,i$,ij,iK,iY,iZ,iz,iQ,iX,iJ,i0,i1,i2,i3,i5,i4,i9,i8,i7,i6,ae,at,ar,an,as,ao,al,ad,au,ac,am,ah,ap,a_,av,ab,ag,af,aE,ay,aA,ak,aT,aw,aS,aC,aI,aM,ax,aR,aL,aD,aO,aN,aP,aU,aB,aG,aW,aH,aV,aF,aq,a$,aj,aK,aY,aZ,az,aQ,aX,aJ,a0,a1,a2,a3,a5,a4,a9,a8,a7,a6,rt,rr,rn,rs,ro,rl,rd,ru,rc,rm,rh,rp,r_,rv,rb,rg,rf,rE,ry,rA,rk,rT,rw,rS,rC,rI,rM,rx,rR,rL,rD,rO,rN,rP,rU,rB,rG,rW,rH,rV,rF,rq,r$,rj,rK,rY,rZ,rz,rQ,rX,rJ,r0,r1,r2,r3,r5,r4,r9,r8,r7,r6,nt,nr,nn,ns,no,nl,nd,nu,nc,nm,nh,np,n_,nv,nb,ng,nf,nE,ny,nA,nk,nT,nw,nS,nC,nI,nM,nx,nR,nL,nD,nO,nN,nP,nU,nB,nG,nW,nH,nV,nF,nq,n$,nj,nK,nY,nZ,nz,nQ,nX,nJ,n0,n1,n2,n3,n5,n4,n9,n8,n7,n6,se,si,sa,sr,sn,ss,so,sl,sd,su,sc,sm,sh,sp,s_,sv,sb,sg,sf,sE,sy,sA,sk,sT,sw,sS,sC,sI,sM,sx,sR,sL,sD,sO,sN,sP,sU,sB,sG,sW,sH,sV,sF,sq,s$,sj,sK,sY,sZ,sz,sQ,sX,sJ,s0,s1,s2,s3,s5,s4,s9,s8,s7,s6,oi,or,on,os,oo,ol,od,ou,oc,om,oh=class extends iF{},op=class{constructor(b,g={}){c(this,om,void 0),u(this,om,null==g?void 0:g.detail)}get detail(){return i(this,om)}initCustomEvent(){}};om=new WeakMap;var o_={document:{createElement:function(b,g){return new oh}},DocumentFragment,customElements:{get(b){},define(b,g,M){},upgrade(b){},whenDefined:b=>Promise.resolve(oh)},CustomEvent:op,EventTarget:iF,HTMLElement:oh,HTMLVideoElement:class extends iF{}},ov="undefined"==typeof window||void 0===globalThis.customElements,ob=ov?o_:globalThis;ov&&o_.document;var og,of=(()=>{try{return"0.17.5"}catch{}return"UNKNOWN"})(),oE=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"],oy=null==(og=globalThis.document)?void 0:og.createElement("template");oy&&(oy.innerHTML=`
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media"></slot>
    <slot></slot>
  `);var oA,ok=null==(oA=globalThis.document)?void 0:oA.createElement("template");ok&&(ok.innerHTML=`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media"></slot>
    <slot></slot>
  `);var xt=(b,{tag:g,is:M})=>{var N,B,W,K,Y,et,er,en,es,eo,el,ed,eu,ec,em,eh;let ep=null==(N=globalThis.document)?void 0:N.createElement(g,{is:M}),e_=ep?Ei(ep):[];return B=class extends b{constructor(){super(),c(this,es),c(this,el),c(this,eu),c(this,em),c(this,et,void 0),c(this,er,void 0),c(this,en,new Map),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.append(this.constructor.template.content.cloneNode(!0)))}static get observedAttributes(){var b,g;return dist_A(B,K,Y).call(B),[...null!=(g=null==(b=null==ep?void 0:ep.constructor)?void 0:b.observedAttributes)?g:[],"autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"]}get nativeEl(){var b,M,N;return null!=(N=null!=(M=null!=(b=i(this,er))?b:this.shadowRoot.querySelector(g))?M:this.querySelector(":scope > [slot=media]"))?N:this.querySelector(g)}set nativeEl(b){u(this,er,b)}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(b){this.toggleAttribute("muted",!!b)}get src(){return this.getAttribute("src")}set src(b){this.setAttribute("src",`${b}`)}get preload(){var b,g;return null!=(g=this.getAttribute("preload"))?g:null==(b=this.nativeEl)?void 0:b.preload}set preload(b){this.setAttribute("preload",`${b}`)}init(){var b,N;if(!this.nativeEl){let b=document.createElement(g,{is:M});b.part=g,this.shadowRoot.querySelector('slot[name="media"]').append(b)}for(let b of(this.nativeEl.muted=this.hasAttribute("muted"),e_))dist_A(this,eu,ec).call(this,b);for(let g of(this.shadowRoot.addEventListener("slotchange",this),this.constructor.Events))null==(N=(b=this.shadowRoot).addEventListener)||N.call(b,g,this,!0)}handleEvent(b){if("slotchange"===b.type){dist_A(this,el,ed).call(this);return}b.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(b.type,{detail:b.detail}))}attributeChangedCallback(b,g,M){dist_A(this,es,eo).call(this),dist_A(this,em,eh).call(this,b,g,M)}connectedCallback(){dist_A(this,es,eo).call(this)}},W=new WeakMap,K=new WeakSet,Y=function(){if(i(this,W))return;u(this,W,!0);let b=new Set(this.observedAttributes);for(let g of(b.delete("muted"),e_))if(!(g in this.prototype)){if("function"==typeof ep[g])this.prototype[g]=function(...b){return dist_A(this,es,eo).call(this),this.call?this.call(g,...b):this.nativeEl[g].apply(this.nativeEl,b)};else{let M={get(){var M,N,B;dist_A(this,es,eo).call(this);let W=g.toLowerCase();if(b.has(W)){let b=this.getAttribute(W);return null!==b&&(""===b||b)}return null!=(B=null==(M=this.get)?void 0:M.call(this,g))?B:null==(N=this.nativeEl)?void 0:N[g]}};g!==g.toUpperCase()&&(M.set=function(M){dist_A(this,es,eo).call(this);let N=g.toLowerCase();if(b.has(N)){!0===M||!1===M||null==M?this.toggleAttribute(N,!!M):this.setAttribute(N,M);return}if(this.set){this.set(g,M);return}this.nativeEl[g]=M}),Object.defineProperty(this.prototype,g,M)}}},et=new WeakMap,er=new WeakMap,en=new WeakMap,es=new WeakSet,eo=function(){i(this,et)||(u(this,et,!0),this.init())},el=new WeakSet,ed=function(){let b=new Map(i(this,en));this.shadowRoot.querySelector("slot:not([name])").assignedElements().filter(b=>["track","source"].includes(b.localName)).forEach(g=>{var M,N;b.delete(g);let B=i(this,en).get(g);B||(B=g.cloneNode(),i(this,en).set(g,B)),null==(N=(M=this.nativeEl).append)||N.call(M,B),"track"===B.localName&&B.default&&("chapters"===B.kind||"metadata"===B.kind)&&"disabled"===B.track.mode&&(B.track.mode="hidden")}),b.forEach(b=>b.remove())},eu=new WeakSet,ec=function(b){if(Object.prototype.hasOwnProperty.call(this,b)){let g=this[b];delete this[b],this[b]=g}},em=new WeakSet,eh=function(b,g,M){var N,W,K,Y,et,er;["id","class"].includes(b)||!B.observedAttributes.includes(b)&&this.constructor.observedAttributes.includes(b)||(null===M?null==(W=(N=this.nativeEl).removeAttribute)||W.call(N,b):(null==(Y=(K=this.nativeEl).getAttribute)?void 0:Y.call(K,b))!=M&&(null==(er=(et=this.nativeEl).setAttribute)||er.call(et,b,M)))},c(B,K),dist_E(B,"Events",oE),dist_E(B,"template",g.endsWith("audio")?oy:ok),c(B,W,void 0),B};function Ei(b){let g=[];for(let M=Object.getPrototypeOf(b);M&&M!==HTMLElement.prototype;M=Object.getPrototypeOf(M))g.push(...Object.getOwnPropertyNames(M));return g}var oT=globalThis.document?xt(HTMLElement,{tag:"video"}):class{};globalThis.document&&xt(HTMLElement,{tag:"audio"});var ow=new WeakMap,oS=class extends Error{},oC=class extends Error{};function Ft(b){yt()?Bt()?b(chrome.cast.isAvailable):customElements.whenDefined("google-cast-button").then(()=>b(chrome.cast.isAvailable)):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(()=>b(chrome.cast.isAvailable))}}function Gt(){return globalThis.chrome}function Ut(){let b="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome.cast||document.querySelector(`script[src="${b}"]`))return;let g=document.createElement("script");g.src=b,document.head.append(g)}function yt(){return"undefined"!=typeof chrome&&chrome.cast&&chrome.cast.isAvailable}function Bt(){return"undefined"!=typeof cast&&cast.framework}function dist_G(){if(Bt())return cast.framework.CastContext.getInstance()}function dist_Me(){var b;return null==(b=dist_G())?void 0:b.getCurrentSession()}function dist_Qe(){var b;return null==(b=dist_Me())?void 0:b.getSessionObj().media[0]}function Wt(b){return new Promise((g,M)=>{dist_Qe().editTracksInfo(b,g,M)})}function jt(b){return new Promise((g,M)=>{dist_Qe().getStatus(b,g,M)})}function Tt(b){return dist_G().setOptions({...At(),...b})}function At(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}var oI,oM=new(globalThis.WeakRef?class extends Set{add(b){super.add(new WeakRef(b))}forEach(b){super.forEach(g=>{let M=g.deref();M&&b(M)})}}:Set),ox=new WeakSet;Ft(b=>{b&&!oI&&(oI=cast.framework,dist_G().addEventListener(oI.CastContextEventType.CAST_STATE_CHANGED,b=>{oM.forEach(g=>{var M,N;return null==(N=(M=ow.get(g)).onCastStateChanged)?void 0:N.call(M,b)})}),dist_G().addEventListener(oI.CastContextEventType.SESSION_STATE_CHANGED,b=>{oM.forEach(g=>{var M,N;return null==(N=(M=ow.get(g)).onSessionStateChanged)?void 0:N.call(M,b)})}),oM.forEach(b=>{var g,M;return null==(M=(g=ow.get(b)).init)?void 0:M.call(g)}))});var oR,oL,oD,oO,oN,oP,oU,oB,oG,oW,oH,oV,oF,oq,o$,oj,oK,oY,oZ,oz,oQ,oX,oJ=0,o0=class extends EventTarget{constructor(b){super(),c(this,oG),c(this,oH),c(this,oF),c(this,o$),c(this,oK),c(this,oZ),c(this,oQ),c(this,oR,void 0),c(this,oL,void 0),c(this,oD,void 0),c(this,oO,void 0),c(this,oN,"disconnected"),c(this,oP,!1),c(this,oU,new Set),c(this,oB,new WeakMap),u(this,oR,b),oM.add(this),ow.set(this,{init:()=>dist_A(this,oK,oY).call(this),onCastStateChanged:()=>dist_A(this,oF,oq).call(this),onSessionStateChanged:()=>dist_A(this,o$,oj).call(this),getCastPlayer:()=>i(this,oG,oW)}),dist_A(this,oK,oY).call(this)}get state(){return i(this,oN)}async watchAvailability(b){if(i(this,oR).disableRemotePlayback)throw new oS("disableRemotePlayback attribute is present.");return i(this,oB).set(b,++oJ),i(this,oU).add(b),oJ}async cancelWatchAvailability(b){if(i(this,oR).disableRemotePlayback)throw new oS("disableRemotePlayback attribute is present.");b?i(this,oU).delete(b):i(this,oU).clear()}async prompt(){var b,g;if(i(this,oR).disableRemotePlayback)throw new oS("disableRemotePlayback attribute is present.");if(!yt())throw new oC("The RemotePlayback API is disabled on this platform.");let M=ox.has(i(this,oR));ox.add(i(this,oR)),Tt(i(this,oR).castOptions),Object.entries(i(this,oO)).forEach(([b,g])=>{i(this,oD).controller.addEventListener(b,g)});try{await dist_G().requestSession()}catch(b){if("cancel"===b){M||ox.delete(i(this,oR));return}throw Error(b)}null==(g=null==(b=ow.get(i(this,oR)))?void 0:b.loadOnPrompt)||g.call(b)}};oR=new WeakMap,oL=new WeakMap,oD=new WeakMap,oO=new WeakMap,oN=new WeakMap,oP=new WeakMap,oU=new WeakMap,oB=new WeakMap,oG=new WeakSet,oW=function(){if(ox.has(i(this,oR)))return i(this,oD)},oH=new WeakSet,oV=function(){ox.has(i(this,oR))&&(Object.entries(i(this,oO)).forEach(([b,g])=>{i(this,oD).controller.removeEventListener(b,g)}),ox.delete(i(this,oR)),i(this,oR).muted=i(this,oD).isMuted,i(this,oR).currentTime=i(this,oD).savedPlayerState.currentTime,!1===i(this,oD).savedPlayerState.isPaused&&i(this,oR).play())},oF=new WeakSet,oq=function(){let b=dist_G().getCastState();if(ox.has(i(this,oR))&&"CONNECTING"===b&&(u(this,oN,"connecting"),this.dispatchEvent(new Event("connecting"))),!i(this,oP)&&null!=b&&b.includes("CONNECT"))for(let b of(u(this,oP,!0),i(this,oU)))b(!0);else if(i(this,oP)&&(!b||"NO_DEVICES_AVAILABLE"===b))for(let b of(u(this,oP,!1),i(this,oU)))b(!1)},o$=new WeakSet,oj=async function(){var b;let{SESSION_RESUMED:g}=oI.SessionState;if(dist_G().getSessionState()===g&&i(this,oR).castSrc===(null==(b=dist_Qe())?void 0:b.media.contentId)){ox.add(i(this,oR)),Object.entries(i(this,oO)).forEach(([b,g])=>{i(this,oD).controller.addEventListener(b,g)});try{await jt(new chrome.cast.media.GetStatusRequest)}catch(b){console.error(b)}i(this,oO)[oI.RemotePlayerEventType.IS_PAUSED_CHANGED](),i(this,oO)[oI.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}},oK=new WeakSet,oY=function(){!oI||i(this,oL)||(u(this,oL,!0),Tt(i(this,oR).castOptions),i(this,oR).textTracks.addEventListener("change",()=>dist_A(this,oQ,oX).call(this)),dist_A(this,oF,oq).call(this),u(this,oD,new oI.RemotePlayer),new oI.RemotePlayerController(i(this,oD)),u(this,oO,{[oI.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:b})=>{!0===b?(u(this,oN,"connected"),this.dispatchEvent(new Event("connect"))):(dist_A(this,oH,oV).call(this),u(this,oN,"disconnected"),this.dispatchEvent(new Event("disconnect")))},[oI.RemotePlayerEventType.DURATION_CHANGED]:()=>{i(this,oR).dispatchEvent(new Event("durationchange"))},[oI.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{i(this,oR).dispatchEvent(new Event("volumechange"))},[oI.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{i(this,oR).dispatchEvent(new Event("volumechange"))},[oI.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{var b;null!=(b=i(this,oG,oW))&&b.isMediaLoaded&&i(this,oR).dispatchEvent(new Event("timeupdate"))},[oI.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{i(this,oR).dispatchEvent(new Event("resize"))},[oI.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{i(this,oR).dispatchEvent(new Event(this.paused?"pause":"play"))},[oI.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{var b,g;(null==(b=i(this,oG,oW))?void 0:b.playerState)!==chrome.cast.media.PlayerState.PAUSED&&i(this,oR).dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[null==(g=i(this,oG,oW))?void 0:g.playerState]))},[oI.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{var b;null!=(b=i(this,oG,oW))&&b.isMediaLoaded&&(await Promise.resolve(),dist_A(this,oZ,oz).call(this))}}))},oZ=new WeakSet,oz=function(){dist_A(this,oQ,oX).call(this)},oQ=new WeakSet,oX=async function(){var b,g,M,N,B,W;if(!i(this,oG,oW))return;let K=(null!=(g=null==(b=i(this,oD).mediaInfo)?void 0:b.tracks)?g:[]).filter(({type:b})=>b===chrome.cast.media.TrackType.TEXT),Y=[...i(this,oR).textTracks].filter(({kind:b})=>"subtitles"===b||"captions"===b),et=K.map(({language:b,name:g,trackId:M})=>{var N;let{mode:B}=null!=(N=Y.find(M=>M.language===b&&M.label===g))?N:{};return!!B&&{mode:B,trackId:M}}).filter(Boolean),er=et.filter(({mode:b})=>"showing"!==b).map(({trackId:b})=>b),en=et.find(({mode:b})=>"showing"===b),es=null!=(B=null==(N=null==(M=dist_Me())?void 0:M.getSessionObj().media[0])?void 0:N.activeTrackIds)?B:[],eo=es;if(es.length&&(eo=eo.filter(b=>!er.includes(b))),null!=en&&en.trackId&&(eo=[...eo,en.trackId]),W=eo=[...new Set(eo)],!(es.length===W.length&&es.every(b=>W.includes(b))))try{let b=new chrome.cast.media.EditTracksInfoRequest(eo);await Wt(b)}catch(b){console.error(b)}};var zt=b=>{var g,M,N,B,W,K,Y,et,er;return M=class extends b{constructor(){super(...arguments),c(this,K),c(this,et),c(this,N,{paused:!1}),c(this,B,At()),c(this,W,void 0)}get remote(){return i(this,W)?i(this,W):Gt()?(Ut(),ow.set(this,{loadOnPrompt:()=>dist_A(this,et,er).call(this)}),u(this,W,new o0(this))):super.remote}attributeChangedCallback(b,g,M){if(super.attributeChangedCallback(b,g,M),"cast-receiver"===b&&M){i(this,B).receiverApplicationId=M;return}if(i(this,K,Y))switch(b){case"cast-stream-type":case"cast-src":this.load()}}async load(){var b,g;if(!i(this,K,Y))return super.load();let M=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType),B=[...this.querySelectorAll("track")].filter(({kind:b,src:g})=>g&&("subtitles"===b||"captions"===b)),W=[],et=0;B.length&&(M.tracks=B.map(b=>{let g=++et;0===W.length&&"showing"===b.track.mode&&W.push(g);let M=new chrome.cast.media.Track(g,chrome.cast.media.TrackType.TEXT);return M.trackContentId=b.src,M.trackContentType="text/vtt",M.subtype="captions"===b.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,M.name=b.label,M.language=b.srclang,M})),"live"===this.castStreamType?M.streamType=chrome.cast.media.StreamType.LIVE:M.streamType=chrome.cast.media.StreamType.BUFFERED,M.metadata=new chrome.cast.media.GenericMediaMetadata,M.metadata.title=this.title,M.metadata.images=[{url:this.poster}];let er=new chrome.cast.media.LoadRequest(M);er.currentTime=null!=(b=super.currentTime)?b:0,er.autoplay=!i(this,N).paused,er.activeTrackIds=W,await (null==(g=dist_Me())?void 0:g.loadMedia(er)),this.dispatchEvent(new Event("volumechange"))}play(){var b;if(i(this,K,Y)){i(this,K,Y).isPaused&&(null==(b=i(this,K,Y).controller)||b.playOrPause());return}return super.play()}pause(){var b;if(i(this,K,Y)){i(this,K,Y).isPaused||null==(b=i(this,K,Y).controller)||b.playOrPause();return}super.pause()}get castOptions(){return i(this,B)}get castReceiver(){var b;return null!=(b=this.getAttribute("cast-receiver"))?b:void 0}set castReceiver(b){this.castReceiver!=b&&this.setAttribute("cast-receiver",`${b}`)}get castSrc(){var b,g,M;return null!=(M=null!=(g=this.getAttribute("cast-src"))?g:null==(b=this.querySelector("source"))?void 0:b.src)?M:this.currentSrc}set castSrc(b){this.castSrc!=b&&this.setAttribute("cast-src",`${b}`)}get castContentType(){var b;return null!=(b=this.getAttribute("cast-content-type"))?b:void 0}set castContentType(b){this.setAttribute("cast-content-type",`${b}`)}get castStreamType(){var b,g;return null!=(g=null!=(b=this.getAttribute("cast-stream-type"))?b:this.streamType)?g:void 0}set castStreamType(b){this.setAttribute("cast-stream-type",`${b}`)}get readyState(){if(i(this,K,Y))switch(i(this,K,Y).playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return i(this,K,Y)?i(this,K,Y).isPaused:super.paused}get muted(){var b;return i(this,K,Y)?null==(b=i(this,K,Y))?void 0:b.isMuted:super.muted}set muted(b){var g;if(i(this,K,Y)){(b&&!i(this,K,Y).isMuted||!b&&i(this,K,Y).isMuted)&&(null==(g=i(this,K,Y).controller)||g.muteOrUnmute());return}super.muted=b}get volume(){var b,g;return i(this,K,Y)?null!=(g=null==(b=i(this,K,Y))?void 0:b.volumeLevel)?g:1:super.volume}set volume(b){var g;if(i(this,K,Y)){i(this,K,Y).volumeLevel=+b,null==(g=i(this,K,Y).controller)||g.setVolumeLevel();return}super.volume=b}get duration(){var b,g,M;return i(this,K,Y)&&null!=(b=i(this,K,Y))&&b.isMediaLoaded?null!=(M=null==(g=i(this,K,Y))?void 0:g.duration)?M:NaN:super.duration}get currentTime(){var b,g,M;return i(this,K,Y)&&null!=(b=i(this,K,Y))&&b.isMediaLoaded?null!=(M=null==(g=i(this,K,Y))?void 0:g.currentTime)?M:0:super.currentTime}set currentTime(b){var g;if(i(this,K,Y)){i(this,K,Y).currentTime=b,null==(g=i(this,K,Y).controller)||g.seek();return}super.currentTime=b}},N=new WeakMap,B=new WeakMap,W=new WeakMap,K=new WeakSet,Y=function(){var b,g;return null==(g=null==(b=ow.get(this.remote))?void 0:b.getCastPlayer)?void 0:g.call(b)},et=new WeakSet,er=async function(){i(this,N).paused=$e(M.prototype,this,"paused"),$e(M.prototype,this,"pause").call(this),this.muted=$e(M.prototype,this,"muted");try{await this.load()}catch(b){console.error(b)}},dist_E(M,"observedAttributes",[...null!=(g=b.observedAttributes)?g:[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"]),M},o1=class extends Event{constructor(b,g){super(b),dist_E(this,"track"),this.track=g.track}},o2=new WeakMap;function a(b){var g;return null!=(g=o2.get(b))?g:vi(b,{})}function vi(b,g){let M=o2.get(b);return M||o2.set(b,M={}),Object.assign(M,g)}function st(b,g){let M=b.videoTracks;a(g).media=b,a(g).renditionSet||(a(g).renditionSet=new Set);let N=a(M).trackSet;N.add(g);let B=N.size-1;B in o7.prototype||Object.defineProperty(o7.prototype,B,{get(){return[...a(this).trackSet][B]}}),queueMicrotask(()=>{M.dispatchEvent(new o1("addtrack",{track:g}))})}function ot(b){var g;let M=null==(g=a(b).media)?void 0:g.videoTracks;M&&(a(M).trackSet.delete(b),queueMicrotask(()=>{M.dispatchEvent(new o1("removetrack",{track:b}))}))}function Jt(b){var g;let M=null!=(g=a(b).media.videoTracks)?g:[],N=!1;for(let g of M)g!==b&&(g.selected=!1,N=!0);if(N){if(a(M).changeRequested)return;a(M).changeRequested=!0,queueMicrotask(()=>{delete a(M).changeRequested,M.dispatchEvent(new Event("change"))})}}var o3,o5,o4,o9,o8,o7=class extends EventTarget{constructor(){super(),c(this,o9),c(this,o3,void 0),c(this,o5,void 0),c(this,o4,void 0),a(this).trackSet=new Set}[Symbol.iterator](){return i(this,o9,o8).values()}get length(){return i(this,o9,o8).size}getTrackById(b){var g;return null!=(g=[...i(this,o9,o8)].find(g=>g.id===b))?g:null}get selectedIndex(){return[...i(this,o9,o8)].findIndex(b=>b.selected)}get onaddtrack(){return i(this,o3)}set onaddtrack(b){i(this,o3)&&(this.removeEventListener("addtrack",i(this,o3)),u(this,o3,void 0)),"function"==typeof b&&(u(this,o3,b),this.addEventListener("addtrack",b))}get onremovetrack(){return i(this,o5)}set onremovetrack(b){i(this,o5)&&(this.removeEventListener("removetrack",i(this,o5)),u(this,o5,void 0)),"function"==typeof b&&(u(this,o5,b),this.addEventListener("removetrack",b))}get onchange(){return i(this,o4)}set onchange(b){i(this,o4)&&(this.removeEventListener("change",i(this,o4)),u(this,o4,void 0)),"function"==typeof b&&(u(this,o4,b),this.addEventListener("change",b))}};o3=new WeakMap,o5=new WeakMap,o4=new WeakMap,o9=new WeakSet,o8=function(){return a(this).trackSet};var o6=class extends Event{constructor(b,g){super(b),dist_E(this,"rendition"),this.rendition=g.rendition}};function Qt(b,g){let M=a(b).media.videoRenditions;a(g).media=a(b).media,a(g).track=b;let N=a(b).renditionSet;N.add(g);let B=N.size-1;B in ls.prototype||Object.defineProperty(ls.prototype,B,{get(){return dist_ve(this)[B]}}),queueMicrotask(()=>{b.selected&&M.dispatchEvent(new o6("addrendition",{rendition:g}))})}function Zt(b){let g=a(b).media.videoRenditions,M=a(b).track;a(M).renditionSet.delete(b),queueMicrotask(()=>{a(b).track.selected&&g.dispatchEvent(new o6("removerendition",{rendition:b}))})}function ei(b){let g=a(b).media.videoRenditions;!g||a(g).changeRequested||(a(g).changeRequested=!0,queueMicrotask(()=>{delete a(g).changeRequested,a(b).track.selected&&g.dispatchEvent(new Event("change"))}))}function dist_ve(b){return[...a(b).media.videoTracks].filter(b=>b.selected).flatMap(b=>[...a(b).renditionSet])}var lt,lr,ln,ls=class extends EventTarget{constructor(){super(...arguments),c(this,lt,void 0),c(this,lr,void 0),c(this,ln,void 0)}[Symbol.iterator](){return dist_ve(this).values()}get length(){return dist_ve(this).length}getRenditionById(b){var g;return null!=(g=dist_ve(this).find(g=>`${g.id}`==`${b}`))?g:null}get selectedIndex(){return dist_ve(this).findIndex(b=>b.selected)}set selectedIndex(b){for(let[g,M]of dist_ve(this).entries())M.selected=g===b}get onaddrendition(){return i(this,lt)}set onaddrendition(b){i(this,lt)&&(this.removeEventListener("addrendition",i(this,lt)),u(this,lt,void 0)),"function"==typeof b&&(u(this,lt,b),this.addEventListener("addrendition",b))}get onremoverendition(){return i(this,lr)}set onremoverendition(b){i(this,lr)&&(this.removeEventListener("removerendition",i(this,lr)),u(this,lr,void 0)),"function"==typeof b&&(u(this,lr,b),this.addEventListener("removerendition",b))}get onchange(){return i(this,ln)}set onchange(b){i(this,ln)&&(this.removeEventListener("change",i(this,ln)),u(this,ln,void 0)),"function"==typeof b&&(u(this,ln,b),this.addEventListener("change",b))}};lt=new WeakMap,lr=new WeakMap,ln=new WeakMap;var lo,ll=class{constructor(){dist_E(this,"src"),dist_E(this,"id"),dist_E(this,"width"),dist_E(this,"height"),dist_E(this,"bitrate"),dist_E(this,"frameRate"),dist_E(this,"codec"),c(this,lo,!1)}get selected(){return i(this,lo)}set selected(b){i(this,lo)!==b&&(u(this,lo,b),ei(this))}};lo=new WeakMap;var ld,lu=class{constructor(){dist_E(this,"id"),dist_E(this,"kind"),dist_E(this,"label",""),dist_E(this,"language",""),dist_E(this,"sourceBuffer"),c(this,ld,!1)}addRendition(b,g,M,N,B,W){let K=new ll;return K.src=b,K.width=g,K.height=M,K.frameRate=W,K.bitrate=B,K.codec=N,Qt(this,K),K}removeRendition(b){Zt(b)}get selected(){return i(this,ld)}set selected(b){i(this,ld)!==b&&(u(this,ld,b),!0===b&&Jt(this))}};function ti(b,g){let M=a(b).media.audioRenditions;a(g).media=a(b).media,a(g).track=b;let N=a(b).renditionSet;N.add(g);let B=N.size-1;B in lp.prototype||Object.defineProperty(lp.prototype,B,{get(){return dist_Ae(this)[B]}}),queueMicrotask(()=>{b.enabled&&M.dispatchEvent(new o6("addrendition",{rendition:g}))})}function ii(b){let g=a(b).media.audioRenditions,M=a(b).track;a(M).renditionSet.delete(b),queueMicrotask(()=>{a(b).track.enabled&&g.dispatchEvent(new o6("removerendition",{rendition:b}))})}function ri(b){let g=a(b).media.audioRenditions;!g||a(g).changeRequested||(a(g).changeRequested=!0,queueMicrotask(()=>{delete a(g).changeRequested,a(b).track.enabled&&g.dispatchEvent(new Event("change"))}))}function dist_Ae(b){return[...a(b).media.audioTracks].filter(b=>b.enabled).flatMap(b=>[...a(b).renditionSet])}ld=new WeakMap;var lc,lm,lh,lp=class extends EventTarget{constructor(){super(...arguments),c(this,lc,void 0),c(this,lm,void 0),c(this,lh,void 0)}[Symbol.iterator](){return dist_Ae(this).values()}get length(){return dist_Ae(this).length}getRenditionById(b){var g;return null!=(g=dist_Ae(this).find(g=>`${g.id}`==`${b}`))?g:null}get selectedIndex(){return dist_Ae(this).findIndex(b=>b.selected)}set selectedIndex(b){for(let[g,M]of dist_Ae(this).entries())M.selected=g===b}get onaddrendition(){return i(this,lc)}set onaddrendition(b){i(this,lc)&&(this.removeEventListener("addrendition",i(this,lc)),u(this,lc,void 0)),"function"==typeof b&&(u(this,lc,b),this.addEventListener("addrendition",b))}get onremoverendition(){return i(this,lm)}set onremoverendition(b){i(this,lm)&&(this.removeEventListener("removerendition",i(this,lm)),u(this,lm,void 0)),"function"==typeof b&&(u(this,lm,b),this.addEventListener("removerendition",b))}get onchange(){return i(this,lh)}set onchange(b){i(this,lh)&&(this.removeEventListener("change",i(this,lh)),u(this,lh,void 0)),"function"==typeof b&&(u(this,lh,b),this.addEventListener("change",b))}};lc=new WeakMap,lm=new WeakMap,lh=new WeakMap;var l_,lv=class{constructor(){dist_E(this,"src"),dist_E(this,"id"),dist_E(this,"bitrate"),dist_E(this,"codec"),c(this,l_,!1)}get selected(){return i(this,l_)}set selected(b){i(this,l_)!==b&&(u(this,l_,b),ri(this))}};function dt(b,g){let M=b.audioTracks;a(g).media=b,a(g).renditionSet||(a(g).renditionSet=new Set);let N=a(M).trackSet;N.add(g);let B=N.size-1;B in lA.prototype||Object.defineProperty(lA.prototype,B,{get(){return[...a(this).trackSet][B]}}),queueMicrotask(()=>{M.dispatchEvent(new o1("addtrack",{track:g}))})}function ct(b){var g;let M=null==(g=a(b).media)?void 0:g.audioTracks;M&&(a(M).trackSet.delete(b),queueMicrotask(()=>{M.dispatchEvent(new o1("removetrack",{track:b}))}))}function ni(b){let g=a(b).media.audioTracks;!g||a(g).changeRequested||(a(g).changeRequested=!0,queueMicrotask(()=>{delete a(g).changeRequested,g.dispatchEvent(new Event("change"))}))}l_=new WeakMap;var lb,lg,lf,lE,ly,lA=class extends EventTarget{constructor(){super(),c(this,lE),c(this,lb,void 0),c(this,lg,void 0),c(this,lf,void 0),a(this).trackSet=new Set}[Symbol.iterator](){return i(this,lE,ly).values()}get length(){return i(this,lE,ly).size}getTrackById(b){var g;return null!=(g=[...i(this,lE,ly)].find(g=>g.id===b))?g:null}get onaddtrack(){return i(this,lb)}set onaddtrack(b){i(this,lb)&&(this.removeEventListener("addtrack",i(this,lb)),u(this,lb,void 0)),"function"==typeof b&&(u(this,lb,b),this.addEventListener("addtrack",b))}get onremovetrack(){return i(this,lg)}set onremovetrack(b){i(this,lg)&&(this.removeEventListener("removetrack",i(this,lg)),u(this,lg,void 0)),"function"==typeof b&&(u(this,lg,b),this.addEventListener("removetrack",b))}get onchange(){return i(this,lf)}set onchange(b){i(this,lf)&&(this.removeEventListener("change",i(this,lf)),u(this,lf,void 0)),"function"==typeof b&&(u(this,lf,b),this.addEventListener("change",b))}};lb=new WeakMap,lg=new WeakMap,lf=new WeakMap,lE=new WeakSet,ly=function(){return a(this).trackSet};var lk,lT=class{constructor(){dist_E(this,"id"),dist_E(this,"kind"),dist_E(this,"label",""),dist_E(this,"language",""),dist_E(this,"sourceBuffer"),c(this,lk,!1)}addRendition(b,g,M){let N=new lv;return N.src=b,N.codec=g,N.bitrate=M,ti(this,N),N}removeRendition(b){ii(b)}get enabled(){return i(this,lk)}set enabled(b){i(this,lk)!==b&&(u(this,lk,b),ni(this))}};lk=new WeakMap;var lw=ut(globalThis.HTMLMediaElement,"video"),lS=ut(globalThis.HTMLMediaElement,"audio");function ai(b){if(!(null!=b&&b.prototype))return b;let g=ut(b,"video");(!g||`${g}`.includes("[native code]"))&&Object.defineProperty(b.prototype,"videoTracks",{get(){return bi(this)}});let M=ut(b,"audio");(!M||`${M}`.includes("[native code]"))&&Object.defineProperty(b.prototype,"audioTracks",{get(){return yi(this)}}),"addVideoTrack"in b.prototype||(b.prototype.addVideoTrack=function(b,g="",M=""){let N=new lu;return N.kind=b,N.label=g,N.language=M,st(this,N),N}),"removeVideoTrack"in b.prototype||(b.prototype.removeVideoTrack=ot),"addAudioTrack"in b.prototype||(b.prototype.addAudioTrack=function(b,g="",M=""){let N=new lT;return N.kind=b,N.label=g,N.language=M,dt(this,N),N}),"removeAudioTrack"in b.prototype||(b.prototype.removeAudioTrack=ct),"videoRenditions"in b.prototype||Object.defineProperty(b.prototype,"videoRenditions",{get(){return n(this)}});let n=b=>{let g=a(b).videoRenditions;return g||(a(g=new ls).media=b,a(b).videoRenditions=g),g};"audioRenditions"in b.prototype||Object.defineProperty(b.prototype,"audioRenditions",{get(){return s(this)}});let s=b=>{let g=a(b).audioRenditions;return g||(a(g=new lp).media=b,a(b).audioRenditions=g),g};return b}function ut(b,g){var M;if(null!=b&&b.prototype)return null==(M=Object.getOwnPropertyDescriptor(b.prototype,`${g}Tracks`))?void 0:M.get}function bi(b){var g;let M=a(b).videoTracks;if(!M&&(M=new o7,a(b).videoTracks=M,lw)){let N=lw.call(null!=(g=b.nativeEl)?g:b);for(let g of N)st(b,g);N.addEventListener("change",()=>{M.dispatchEvent(new Event("change"))}),N.addEventListener("addtrack",g=>{if([...M].some(b=>b instanceof lu)){for(let b of N)ot(b);return}st(b,g.track)}),N.addEventListener("removetrack",b=>{ot(b.track)})}return M}function yi(b){var g;let M=a(b).audioTracks;if(!M&&(M=new lA,a(b).audioTracks=M,lS)){let N=lS.call(null!=(g=b.nativeEl)?g:b);for(let g of N)dt(b,g);N.addEventListener("change",()=>{M.dispatchEvent(new Event("change"))}),N.addEventListener("addtrack",g=>{if([...M].some(b=>b instanceof lT)){for(let b of N)ct(b);return}dt(b,g.track)}),N.addEventListener("removetrack",b=>{ct(b.track)})}return M}oE.push("castchange","entercast","leavecast");var lC,lI,lM,lx,lR,lL,lD,lO,lN,lP,lU={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_COOKIES:"disable-cookies",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",RENDITION_ORDER:"rendition-order",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type"},lB=Object.values(lU),lG=class extends oT{constructor(){super(),c(this,lN),c(this,lC,void 0),c(this,lI,void 0),c(this,lM,void 0),c(this,lx,{}),c(this,lR,void 0),c(this,lL,void 0),c(this,lD,void 0),c(this,lO,void 0),u(this,lM,Nt())}static get observedAttributes(){var b;return[...lB,...null!=(b=oT.observedAttributes)?b:[]]}get preferCmcd(){var b;return null!=(b=this.getAttribute(lU.PREFER_CMCD))?b:void 0}set preferCmcd(b){b!==this.preferCmcd&&(b?ed.includes(b)?this.setAttribute(lU.PREFER_CMCD,b):console.warn(`Invalid value for preferCmcd. Must be one of ${ed.join()}`):this.removeAttribute(lU.PREFER_CMCD))}get playerInitTime(){return i(this,lM)}get playerSoftwareName(){var b;return null!=(b=i(this,lD))?b:"mux-video"}set playerSoftwareName(b){u(this,lD,b)}get playerSoftwareVersion(){var b;return null!=(b=i(this,lL))?b:of}set playerSoftwareVersion(b){u(this,lL,b)}get _hls(){var b;return null==(b=i(this,lC))?void 0:b.engine}get mux(){var b;return null==(b=this.nativeEl)?void 0:b.mux}get error(){var b;return null!=(b=wt(this.nativeEl))?b:null}get errorTranslator(){return i(this,lO)}set errorTranslator(b){u(this,lO,b)}get src(){return this.getAttribute("src")}set src(b){b!==this.src&&(null==b?this.removeAttribute("src"):this.setAttribute("src",b))}get type(){var b;return null!=(b=this.getAttribute(lU.TYPE))?b:void 0}set type(b){b!==this.type&&(b?this.setAttribute(lU.TYPE,b):this.removeAttribute(lU.TYPE))}get autoplay(){let b=this.getAttribute("autoplay");return null!==b&&(""===b||b)}set autoplay(b){b!==this.autoplay&&(b?this.setAttribute("autoplay","string"==typeof b?b:""):this.removeAttribute("autoplay"))}get preload(){let b=this.getAttribute("preload");return""===b?"auto":["none","metadata","auto"].includes(b)?b:super.preload}set preload(b){b!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(b)?this.setAttribute("preload",b):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(lU.DEBUG)}set debug(b){b!==this.debug&&(b?this.setAttribute(lU.DEBUG,""):this.removeAttribute(lU.DEBUG))}get disableCookies(){return this.hasAttribute(lU.DISABLE_COOKIES)}set disableCookies(b){b!==this.disableCookies&&(b?this.setAttribute(lU.DISABLE_COOKIES,""):this.removeAttribute(lU.DISABLE_COOKIES))}get startTime(){let b=this.getAttribute(lU.START_TIME);if(null==b)return;let g=+b;return Number.isNaN(g)?void 0:g}set startTime(b){b!==this.startTime&&(null==b?this.removeAttribute(lU.START_TIME):this.setAttribute(lU.START_TIME,`${b}`))}get playbackId(){var b;return null!=(b=this.getAttribute(lU.PLAYBACK_ID))?b:void 0}set playbackId(b){b!==this.playbackId&&(b?this.setAttribute(lU.PLAYBACK_ID,b):this.removeAttribute(lU.PLAYBACK_ID))}get maxResolution(){var b;return null!=(b=this.getAttribute(lU.MAX_RESOLUTION))?b:void 0}set maxResolution(b){b!==this.maxResolution&&(b?this.setAttribute(lU.MAX_RESOLUTION,b):this.removeAttribute(lU.MAX_RESOLUTION))}get minResolution(){var b;return null!=(b=this.getAttribute(lU.MIN_RESOLUTION))?b:void 0}set minResolution(b){b!==this.minResolution&&(b?this.setAttribute(lU.MIN_RESOLUTION,b):this.removeAttribute(lU.MIN_RESOLUTION))}get renditionOrder(){var b;return null!=(b=this.getAttribute(lU.RENDITION_ORDER))?b:void 0}set renditionOrder(b){b!==this.renditionOrder&&(b?this.setAttribute(lU.RENDITION_ORDER,b):this.removeAttribute(lU.RENDITION_ORDER))}get customDomain(){var b;return null!=(b=this.getAttribute(lU.CUSTOM_DOMAIN))?b:void 0}set customDomain(b){b!==this.customDomain&&(b?this.setAttribute(lU.CUSTOM_DOMAIN,b):this.removeAttribute(lU.CUSTOM_DOMAIN))}get ended(){return Ue(this.nativeEl,this._hls)}get envKey(){var b;return null!=(b=this.getAttribute(lU.ENV_KEY))?b:void 0}set envKey(b){b!==this.envKey&&(b?this.setAttribute(lU.ENV_KEY,b):this.removeAttribute(lU.ENV_KEY))}get beaconCollectionDomain(){var b;return null!=(b=this.getAttribute(lU.BEACON_COLLECTION_DOMAIN))?b:void 0}set beaconCollectionDomain(b){b!==this.beaconCollectionDomain&&(b?this.setAttribute(lU.BEACON_COLLECTION_DOMAIN,b):this.removeAttribute(lU.BEACON_COLLECTION_DOMAIN))}get streamType(){var b;return null!=(b=this.getAttribute(lU.STREAM_TYPE))?b:re(this.nativeEl)}set streamType(b){b!==this.streamType&&(b?this.setAttribute(lU.STREAM_TYPE,b):this.removeAttribute(lU.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(lU.TARGET_LIVE_WINDOW)?+this.getAttribute(lU.TARGET_LIVE_WINDOW):Ht(this.nativeEl)}set targetLiveWindow(b){b!=this.targetLiveWindow&&(null==b?this.removeAttribute(lU.TARGET_LIVE_WINDOW):this.setAttribute(lU.TARGET_LIVE_WINDOW,`${+b}`))}get liveEdgeStart(){var b,g;if(this.hasAttribute(lU.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:M}=this,N=null!=(b=this.nativeEl.seekable.end(0))?b:0;return Math.max(null!=(g=this.nativeEl.seekable.start(0))?g:0,N-M)}return _t(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(lU.LIVE_EDGE_OFFSET))return+this.getAttribute(lU.LIVE_EDGE_OFFSET)}set liveEdgeOffset(b){b!=this.targetLiveWindow&&(null==b?this.removeAttribute(lU.LIVE_EDGE_OFFSET):this.setAttribute(lU.LIVE_EDGE_OFFSET,`${+b}`))}get seekable(){return V(this.nativeEl)}async addCuePoints(b){return J(this.nativeEl,b)}get activeCuePoint(){return ee(this.nativeEl)}get cuePoints(){return Le(this.nativeEl)}getStartDate(){return Pe(this.nativeEl,this._hls)}get currentPdt(){return ke(this.nativeEl,this._hls)}get preferPlayback(){let b=this.getAttribute(lU.PREFER_PLAYBACK);if(b===eo.MSE||b===eo.NATIVE)return b}set preferPlayback(b){b!==this.preferPlayback&&(b===eo.MSE||b===eo.NATIVE?this.setAttribute(lU.PREFER_PLAYBACK,b):this.removeAttribute(lU.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(b=>b.startsWith("metadata-")&&![lU.METADATA_URL].includes(b)).reduce((b,g)=>{let M=this.getAttribute(g);return null!=M&&(b[g.replace(/^metadata-/,"").replace(/-/g,"_")]=M),b},{}),...i(this,lx)}}set metadata(b){u(this,lx,null!=b?b:{}),this.mux&&this.mux.emit("hb",i(this,lx))}get _hlsConfig(){return i(this,lR)}set _hlsConfig(b){u(this,lR,b)}load(){u(this,lC,Ot(this,this.nativeEl,i(this,lC)))}unload(){Fe(this.nativeEl,i(this,lC)),u(this,lC,void 0)}attributeChangedCallback(b,g,M){var N,B;switch(oT.observedAttributes.includes(b)&&!["src","autoplay","preload"].includes(b)&&super.attributeChangedCallback(b,g,M),b){case lU.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=M?M:void 0;break;case lU.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=M?M:void 0;break;case"src":{let b=!!g,N=!!M;!b&&N?dist_A(this,lN,lP).call(this):b&&!N?this.unload():b&&N&&(this.unload(),dist_A(this,lN,lP).call(this));break}case"autoplay":if(M===g)break;null==(N=i(this,lC))||N.setAutoplay(this.autoplay);break;case"preload":if(M===g)break;null==(B=i(this,lC))||B.setPreload(M);break;case lU.PLAYBACK_ID:this.src=Rt(this);break;case lU.DEBUG:{let b=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=b);break}case lU.METADATA_URL:M&&fetch(M).then(b=>b.json()).then(b=>this.metadata=b).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${M}!`));break;case lU.STREAM_TYPE:(null==M||M!==g)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case lU.TARGET_LIVE_WINDOW:(null==M||M!==g)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}))}}connectedCallback(){var b;null==(b=super.connectedCallback)||b.call(this),this.nativeEl&&this.src&&!i(this,lC)&&dist_A(this,lN,lP).call(this)}disconnectedCallback(){this.unload()}};lC=new WeakMap,lI=new WeakMap,lM=new WeakMap,lx=new WeakMap,lR=new WeakMap,lL=new WeakMap,lD=new WeakMap,lO=new WeakMap,lN=new WeakSet,lP=async function(){i(this,lI)||(await u(this,lI,Promise.resolve()),u(this,lI,null),this.load())};var lW=class extends zt(ai(lG)){};ob.customElements.get("mux-video")||(ob.customElements.define("mux-video",lW),ob.MuxVideoElement=lW);var lH=Object.defineProperty,template_parts_defNormalProp=(b,g,M)=>g in b?lH(b,g,{enumerable:!0,configurable:!0,writable:!0,value:M}):b[g]=M,template_parts_publicField=(b,g,M)=>(template_parts_defNormalProp(b,"symbol"!=typeof g?g+"":g,M),M),template_parts_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},template_parts_privateGet=(b,g,M)=>(template_parts_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),template_parts_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},template_parts_privateSet=(b,g,M,N)=>(template_parts_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M);let lV={processCallback(b,g,M){if(M){for(let[b,N]of g)if(b in M){let g=M[b];"boolean"==typeof g&&N instanceof AttrPart&&"boolean"==typeof N.element[N.attributeName]?N.booleanValue=g:"function"==typeof g&&N instanceof AttrPart?N.element[N.attributeName]=g:N.value=g}}}};let TemplateInstance=class TemplateInstance extends eK.DocumentFragment{constructor(b,g,M=lV){var N;super(),template_parts_privateAdd(this,l2,void 0),template_parts_privateAdd(this,l3,void 0),this.append(b.content.cloneNode(!0)),template_parts_privateSet(this,l2,parse(this)),template_parts_privateSet(this,l3,M),null==(N=M.createCallback)||N.call(M,this,template_parts_privateGet(this,l2),g),M.processCallback(this,template_parts_privateGet(this,l2),g)}update(b){template_parts_privateGet(this,l3).processCallback(this,template_parts_privateGet(this,l2),b)}};l2=new WeakMap,l3=new WeakMap;let parse=(b,g=[])=>{let M,N;for(let B of b.attributes||[])if(B.value.includes("{{")){let W=new AttrPartList;for([M,N]of tokenize(B.value))if(M){let M=new AttrPart(b,B.name,B.namespaceURI);W.append(M),g.push([N,M])}else W.append(N);B.value=W.toString()}for(let B of b.childNodes)if(1!==B.nodeType||B instanceof HTMLTemplateElement){if(1===B.nodeType||B.data.includes("{{")){let W=[];if(B.data)for([M,N]of tokenize(B.data))if(M){let M=new ChildNodePart(b);W.push(M),g.push([N,M])}else W.push(new Text(N));else if(B instanceof HTMLTemplateElement){let M=new InnerTemplatePart(b,B);W.push(M),g.push([M.expression,M])}B.replaceWith(...W.flatMap(b=>b.replacementNodes||[b]))}}else parse(B,g);return g},lF={},tokenize=b=>{let g="",M=0,N=lF[b],B=0,W;if(N)return N;for(N=[];W=b[B];B++)"{"===W&&"{"===b[B+1]&&"\\"!==b[B-1]&&b[B+2]&&1==++M?(g&&N.push([0,g]),g="",B++):"}"!==W||"}"!==b[B+1]||"\\"===b[B-1]||--M?g+=W||"":(N.push([1,g.trim()]),g="",B++);return g&&N.push([0,(M>0?"{{":"")+g]),lF[b]=N};let Part=class Part{get value(){return""}set value(b){}toString(){return this.value}};let lq=new WeakMap;let AttrPartList=class AttrPartList{constructor(){template_parts_privateAdd(this,l5,[])}[Symbol.iterator](){return template_parts_privateGet(this,l5).values()}get length(){return template_parts_privateGet(this,l5).length}item(b){return template_parts_privateGet(this,l5)[b]}append(...b){for(let g of b)g instanceof AttrPart&&lq.set(g,this),template_parts_privateGet(this,l5).push(g)}toString(){return template_parts_privateGet(this,l5).join("")}};l5=new WeakMap;let AttrPart=class AttrPart extends Part{constructor(b,g,M){super(),template_parts_privateAdd(this,l6),template_parts_privateAdd(this,l4,""),template_parts_privateAdd(this,l9,void 0),template_parts_privateAdd(this,l8,void 0),template_parts_privateAdd(this,l7,void 0),template_parts_privateSet(this,l9,b),template_parts_privateSet(this,l8,g),template_parts_privateSet(this,l7,M)}get attributeName(){return template_parts_privateGet(this,l8)}get attributeNamespace(){return template_parts_privateGet(this,l7)}get element(){return template_parts_privateGet(this,l9)}get value(){return template_parts_privateGet(this,l4)}set value(b){template_parts_privateGet(this,l4)!==b&&(template_parts_privateSet(this,l4,b),template_parts_privateGet(this,l6,di)&&1!==template_parts_privateGet(this,l6,di).length?template_parts_privateGet(this,l9).setAttributeNS(template_parts_privateGet(this,l7),template_parts_privateGet(this,l8),template_parts_privateGet(this,l6,di)):null==b?template_parts_privateGet(this,l9).removeAttributeNS(template_parts_privateGet(this,l7),template_parts_privateGet(this,l8)):template_parts_privateGet(this,l9).setAttributeNS(template_parts_privateGet(this,l7),template_parts_privateGet(this,l8),b))}get booleanValue(){return template_parts_privateGet(this,l9).hasAttributeNS(template_parts_privateGet(this,l7),template_parts_privateGet(this,l8))}set booleanValue(b){if(template_parts_privateGet(this,l6,di)&&1!==template_parts_privateGet(this,l6,di).length)throw new DOMException("Value is not fully templatized");this.value=b?"":null}};l4=new WeakMap,l9=new WeakMap,l8=new WeakMap,l7=new WeakMap,l6=new WeakSet,di=function(){return lq.get(this)};let ChildNodePart=class ChildNodePart extends Part{constructor(b,g){super(),template_parts_privateAdd(this,da,void 0),template_parts_privateAdd(this,dr,void 0),template_parts_privateSet(this,da,b),template_parts_privateSet(this,dr,g?[...g]:[new Text])}get replacementNodes(){return template_parts_privateGet(this,dr)}get parentNode(){return template_parts_privateGet(this,da)}get nextSibling(){return template_parts_privateGet(this,dr)[template_parts_privateGet(this,dr).length-1].nextSibling}get previousSibling(){return template_parts_privateGet(this,dr)[0].previousSibling}get value(){return template_parts_privateGet(this,dr).map(b=>b.textContent).join("")}set value(b){this.replace(b)}replace(...b){let g=b.flat().flatMap(b=>null==b?[new Text]:b.forEach?[...b]:11===b.nodeType?[...b.childNodes]:b.nodeType?[b]:[new Text(b)]);g.length||g.push(new Text),template_parts_privateSet(this,dr,swapdom(template_parts_privateGet(this,dr)[0].parentNode,template_parts_privateGet(this,dr),g,this.nextSibling))}};da=new WeakMap,dr=new WeakMap;let InnerTemplatePart=class InnerTemplatePart extends ChildNodePart{constructor(b,g){let M=g.getAttribute("directive")||g.getAttribute("type"),N=g.getAttribute("expression")||g.getAttribute(M)||"";N.startsWith("{{")&&(N=N.trim().slice(2,-2).trim()),super(b),template_parts_publicField(this,"directive"),this.expression=N,this.template=g,this.directive=M}};function swapdom(b,g,M,N=null){let B=0,W,K,Y,et=M.length,er=g.length;for(;B<et&&B<er&&g[B]==M[B];)B++;for(;B<et&&B<er&&M[et-1]==g[er-1];)N=M[--er,--et];if(B==er)for(;B<et;)b.insertBefore(M[B++],N);if(B==et)for(;B<er;)b.removeChild(g[B++]);else{for(W=g[B];B<et;)Y=M[B++],K=W?W.nextSibling:N,W==Y?W=K:B<et&&M[B]==K?(b.replaceChild(Y,W),W=K):b.insertBefore(Y,W);for(;W!=N;)K=W.nextSibling,b.removeChild(W),W=K}return M}let l$={string:b=>String(b)};let PartialTemplate=class PartialTemplate{constructor(b){this.template=b,this.state=void 0}};let lj=new WeakMap,lK=new WeakMap,lY={partial:(b,g)=>{g[b.expression]=new PartialTemplate(b.template)},if:(b,g)=>{var M;if(evaluateExpression(b.expression,g)){if(lj.get(b)!==b.template){lj.set(b,b.template);let M=new TemplateInstance(b.template,g,lz);b.replace(M),lK.set(b,M)}else null==(M=lK.get(b))||M.update(g)}else b.replace(""),lj.delete(b),lK.delete(b)}},lZ=Object.keys(lY),lz={processCallback(b,g,M){var N,B;if(M)for(let[b,W]of g){if(W instanceof InnerTemplatePart){if(!W.directive){let b=lZ.find(b=>W.template.hasAttribute(b));b&&(W.directive=b,W.expression=W.template.getAttribute(b))}null==(N=lY[W.directive])||N.call(lY,W,M);continue}let g=evaluateExpression(b,M);if(g instanceof PartialTemplate){lj.get(W)!==g.template?(lj.set(W,g.template),g=new TemplateInstance(g.template,g.state,lz),W.value=g,lK.set(W,g)):null==(B=lK.get(W))||B.update(g.state);continue}g?(W instanceof AttrPart&&W.attributeName.startsWith("aria-")&&(g=String(g)),W instanceof AttrPart?"boolean"==typeof g?W.booleanValue=g:"function"==typeof g?W.element[W.attributeName]=g:W.value=g:(W.value=g,lj.delete(W),lK.delete(W))):W instanceof AttrPart?W.value=void 0:(W.value=void 0,lj.delete(W),lK.delete(W))}}},lQ={"!":b=>!b,"!!":b=>!!b,"==":(b,g)=>b==g,"!=":(b,g)=>b!=g,">":(b,g)=>b>g,">=":(b,g)=>b>=g,"<":(b,g)=>b<g,"<=":(b,g)=>b<=g,"??":(b,g)=>null!=b?b:g,"|":(b,g)=>{var M;return null==(M=l$[g])?void 0:M.call(l$,b)}};function tokenizeExpression(b){return template_processor_tokenize(b,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:b})=>"ws"!==b)}function evaluateExpression(b,g={}){var M,N,B,W,K,Y,et;let er=tokenizeExpression(b);if(0===er.length||er.some(({type:b})=>!b))return invalidExpression(b);if((null==(M=er[0])?void 0:M.token)===">"){let M=g[null==(N=er[1])?void 0:N.token];if(!M)return invalidExpression(b);let Y={...g};M.state=Y;let et=er.slice(2);for(let b=0;b<et.length;b+=3){let M=null==(B=et[b])?void 0:B.token,N=null==(W=et[b+1])?void 0:W.token,er=null==(K=et[b+2])?void 0:K.token;M&&"="===N&&(Y[M]=getParamValue(er,g))}return M}if(1===er.length)return isValidParam(er[0])?getParamValue(er[0].token,g):invalidExpression(b);if(2===er.length){let M=null==(Y=er[0])?void 0:Y.token,N=lQ[M];if(!N||!isValidParam(er[1]))return invalidExpression(b);let B=getParamValue(er[1].token,g);return N(B)}if(3===er.length){let M=null==(et=er[1])?void 0:et.token,N=lQ[M];if(!N||!isValidParam(er[0])||!isValidParam(er[2]))return invalidExpression(b);let B=getParamValue(er[0].token,g);if("|"===M)return N(B,er[2].token);let W=getParamValue(er[2].token,g);return N(B,W)}}function invalidExpression(b){return console.warn(`Warning: invalid expression \`${b}\``),!1}function isValidParam({type:b}){return["number","boolean","string","param"].includes(b)}function getParamValue(b,g){let M=b[0],N=b.slice(-1);return"true"===b||"false"===b?"true"===b:M===N&&["'",'"'].includes(M)?b.slice(1,-1):isNumericString(b)?parseFloat(b):g[b]}function template_processor_tokenize(b,g){let M,N,B,W=[];for(;b;){for(let W in B=null,M=b.length,g)(N=g[W].exec(b))&&N.index<M&&(B={token:N[0],type:W,matches:N.slice(1)},M=N.index);M&&W.push({token:b.substr(0,M),type:void 0}),B&&W.push(B),b=b.substr(M+(B?B.token.length:0))}return W}var lX=Object.defineProperty,media_theme_element_defNormalProp=(b,g,M)=>g in b?lX(b,g,{enumerable:!0,configurable:!0,writable:!0,value:M}):b[g]=M,media_theme_element_publicField=(b,g,M)=>(media_theme_element_defNormalProp(b,"symbol"!=typeof g?g+"":g,M),M),media_theme_element_accessCheck=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},media_theme_element_privateGet=(b,g,M)=>(media_theme_element_accessCheck(b,g,"read from private field"),M?M.call(b):g.get(b)),media_theme_element_privateAdd=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},media_theme_element_privateSet=(b,g,M,N)=>(media_theme_element_accessCheck(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M),media_theme_element_privateMethod=(b,g,M)=>(media_theme_element_accessCheck(b,g,"access private method"),M);let lJ={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},l0=eY.createElement("template");l0.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-controller:not([mediasubtitleslist]) media-captions-selectmenu,
    media-captions-button:not([mediasubtitleslist]),
    media-rendition-selectmenu[mediarenditionunavailable],
    media-audio-track-selectmenu[mediaaudiotrackunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;let MediaThemeElement=class MediaThemeElement extends eK.HTMLElement{constructor(){super(),media_theme_element_privateAdd(this,dd),media_theme_element_privateAdd(this,dc),media_theme_element_publicField(this,"renderRoot"),media_theme_element_publicField(this,"renderer"),media_theme_element_privateAdd(this,dn,void 0),media_theme_element_privateAdd(this,ds,void 0),media_theme_element_privateAdd(this,dl,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());let b=new MutationObserver(b=>{var g;(!this.mediaController||(null==(g=this.mediaController)?void 0:g.breakpointsComputed))&&b.some(b=>{let g=b.target;return g===this||"media-controller"===g.localName&&!!(lJ[b.attributeName]||b.attributeName.startsWith("breakpoint"))})&&this.render()});b.observe(this,{attributes:!0}),b.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(eL.BREAKPOINTS_COMPUTED,this.render),media_theme_element_privateMethod(this,dd,du).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var b;return null!=(b=media_theme_element_privateGet(this,dn))?b:this.constructor.template}set template(b){media_theme_element_privateSet(this,dl,null),media_theme_element_privateSet(this,dn,b),this.createRenderer()}get props(){var b,g,M;let N=[...Array.from(null!=(g=null==(b=this.mediaController)?void 0:b.attributes)?g:[]).filter(({name:b})=>lJ[b]||b.startsWith("breakpoint")),...Array.from(this.attributes)],B={};for(let b of N){let g=null!=(M=lJ[b.name])?M:camelCase(b.name),{value:N}=b;null!=N?(isNumericString(N)&&(N=parseFloat(N)),B[g]=""===N||N):B[g]=!1}return B}attributeChangedCallback(b,g,M){"template"===b&&g!=M&&media_theme_element_privateMethod(this,dc,dm).call(this)}connectedCallback(){media_theme_element_privateMethod(this,dc,dm).call(this)}createRenderer(){this.template&&this.template!==media_theme_element_privateGet(this,ds)&&(media_theme_element_privateSet(this,ds,this.template),this.renderer=new TemplateInstance(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(l0.content.cloneNode(!0),this.renderer))}render(){var b;null==(b=this.renderer)||b.update(this.props)}};function isValidUrl(b){if(!/^(\/|\.\/|https?:\/\/)/.test(b))return!1;let g=/^https?:\/\//.test(b)?void 0:location.origin;try{new URL(b,g)}catch(b){return!1}return!0}async function request(b){let g=await fetch(b);if(200!==g.status)throw Error(`Failed to load resource: the server responded with a status of ${g.status}`);return g.text()}dn=new WeakMap,ds=new WeakMap,dl=new WeakMap,dd=new WeakSet,du=function(b){if(Object.prototype.hasOwnProperty.call(this,b)){let g=this[b];delete this[b],this[b]=g}},dc=new WeakSet,dm=function(){var b;let g=this.getAttribute("template");if(!g||g===media_theme_element_privateGet(this,dl))return;let M=this.getRootNode(),N=null==(b=null==M?void 0:M.getElementById)?void 0:b.call(M,g);if(N){media_theme_element_privateSet(this,dl,g),media_theme_element_privateSet(this,dn,N),this.createRenderer();return}isValidUrl(g)&&(media_theme_element_privateSet(this,dl,g),request(g).then(b=>{let g=eY.createElement("template");g.innerHTML=b,media_theme_element_privateSet(this,dn,g),this.createRenderer()}).catch(console.error))},media_theme_element_publicField(MediaThemeElement,"template"),media_theme_element_publicField(MediaThemeElement,"observedAttributes",["template"]),media_theme_element_publicField(MediaThemeElement,"processor",lz),eK.customElements.get("media-theme")||eK.customElements.define("media-theme",MediaThemeElement);var mux_player_dist_Ce=(b,g,M)=>{if(!g.has(b))throw TypeError("Cannot "+M)},dist_u=(b,g,M)=>(mux_player_dist_Ce(b,g,"read from private field"),M?M.call(b):g.get(b)),mux_player_dist_h=(b,g,M)=>{if(g.has(b))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(b):g.set(b,M)},dist_C=(b,g,M,N)=>(mux_player_dist_Ce(b,g,"write to private field"),N?N.call(b,M):g.set(b,M),M),f=(b,g,M)=>(mux_player_dist_Ce(b,g,"access private method"),M),l1=class{addEventListener(){}removeEventListener(){}dispatchEvent(b){return!0}};if("undefined"==typeof DocumentFragment){let t=class t extends l1{};globalThis.DocumentFragment=t}var l2,l3,l5,l4,l9,l8,l7,l6,di,da,dr,dn,ds,dl,dd,du,dc,dm,dh,dp=class extends l1{},d_=class{constructor(b,g={}){mux_player_dist_h(this,dh,void 0),dist_C(this,dh,null==g?void 0:g.detail)}get detail(){return dist_u(this,dh)}initCustomEvent(){}};dh=new WeakMap;var dv={document:{createElement:function(b,g){return new dp}},DocumentFragment,customElements:{get(b){},define(b,g,M){},upgrade(b){},whenDefined:b=>Promise.resolve(dp)},CustomEvent:d_,EventTarget:l1,HTMLElement:dp,HTMLVideoElement:class extends l1{}},db="undefined"==typeof window||void 0===globalThis.customElements,dg=db?dv:globalThis,df=db?dv.document:globalThis.document,dE={code:"en"};function l(b,g=!0){var M;return new dy(g&&null!=(M=null==dE?void 0:dE[b])?M:b,g?dE.code:"en")}var dy=class{constructor(b,g=null!=(dw=dE.code)?dw:"en"){this.message=b,this.locale=g}format(b){return this.message.replace(/\{(\w+)\}/g,(g,M)=>{var N;return null!=(N=b[M])?N:""})}toString(){return this.message}};function dist_st(b){let g="";return Object.entries(b).forEach(([b,M])=>{null!=M&&(g+=`${dist_se(b)}: ${M}; `)}),g?g.trim():void 0}function dist_se(b){return b.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function mux_player_dist_de(b){return b.replace(/[-_]([a-z])/g,(b,g)=>g.toUpperCase())}function mux_player_dist_R(b){if(null==b)return;let g=+b;return Number.isNaN(g)?void 0:g}function mux_player_dist_we(b){let g=dist_Kt(b).toString();return g?"?"+g:""}function dist_Kt(b){let g={};for(let M in b)null!=b[M]&&(g[M]=b[M]);return new URLSearchParams(g)}function P(b){let g=(null!=b?b:"").split(".")[1];return g?JSON.parse(decodeURIComponent(atob(g.replace(/-/g,"+").replace(/_/g,"/")).split("").map(function(b){return"%"+("00"+b.charCodeAt(0).toString(16)).slice(-2)}).join(""))):{}}var mux_player_dist_Oe=(b,g)=>!!b&&!!g&&(!!b.contains(g)||mux_player_dist_Oe(b,g.getRootNode().host)),dA="mux.com",dk=(()=>{try{return"2.4.1"}catch{}return"UNKNOWN"})(),dist_lt=(b,{token:g,customDomain:M=dA,thumbnailTime:N}={})=>{let B=null==g?N:void 0,{aud:W}=P(g);if(!(g&&"t"!==W))return`https://image.${M}/${b}/thumbnail.webp${mux_player_dist_we({token:g,time:B})}`},dist_mt=(b,{token:g,customDomain:M=dA}={})=>{let{aud:N}=P(g);if(!(g&&"s"!==N))return`https://image.${M}/${b}/storyboard.vtt${mux_player_dist_we({token:g,format:"webp"})}`},mux_player_dist_J=b=>{if(b){if([es.LIVE,es.ON_DEMAND].includes(b))return b;if(null!=b&&b.includes("live"))return es.LIVE}},dT={crossorigin:"crossOrigin",playsinline:"playsInline"};function dist_ut(b){var g;return null!=(g=dT[b])?g:mux_player_dist_de(b)}var dw,dS,dC,dI,dM=class{constructor(b,g){mux_player_dist_h(this,dS,void 0),mux_player_dist_h(this,dC,void 0),mux_player_dist_h(this,dI,[]),dist_C(this,dS,b),dist_C(this,dC,g)}[Symbol.iterator](){return dist_u(this,dI).values()}get length(){return dist_u(this,dI).length}get value(){var b;return null!=(b=dist_u(this,dI).join(" "))?b:""}set value(b){var g;b!==this.value&&(dist_C(this,dI,[]),this.add(...null!=(g=null==b?void 0:b.split(" "))?g:[]))}toString(){return this.value}item(b){return dist_u(this,dI)[b]}values(){return dist_u(this,dI).values()}keys(){return dist_u(this,dI).keys()}forEach(b){dist_u(this,dI).forEach(b)}add(...b){var g,M;b.forEach(b=>{this.contains(b)||dist_u(this,dI).push(b)}),(""!==this.value||null!=(g=dist_u(this,dS))&&g.hasAttribute(`${dist_u(this,dC)}`))&&null!=(M=dist_u(this,dS))&&M.setAttribute(`${dist_u(this,dC)}`,`${this.value}`)}remove(...b){var g;b.forEach(b=>{dist_u(this,dI).splice(dist_u(this,dI).indexOf(b),1)}),null==(g=dist_u(this,dS))||g.setAttribute(`${dist_u(this,dC)}`,`${this.value}`)}contains(b){return dist_u(this,dI).includes(b)}toggle(b,g){return void 0!==g?g?(this.add(b),!0):(this.remove(b),!1):this.contains(b)?(this.remove(b),!1):(this.add(b),!0)}replace(b,g){this.remove(b),this.add(g)}};dS=new WeakMap,dC=new WeakMap,dI=new WeakMap;var dx=`[mux-player ${dk}]`;function mux_player_dist_N(...b){console.warn(dx,...b)}function dist_x(...b){console.error(dx,...b)}function mux_player_dist_Se(b){var g;let M=null!=(g=b.message)?g:"";b.context&&(M+=` ${b.context}`),b.file&&(M+=` ${l("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${b.file}`),mux_player_dist_N(M)}var dR={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},dL={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},dD=Object.freeze({length:0,start(b){let g=b>>>0;if(g>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${g}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(b){let g=b>>>0;if(g>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${g}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),dO=oE.filter(b=>"error"!==b),dN=Object.values(dR).filter(b=>![dR.PLAYSINLINE].includes(b)),dP=Object.values(dL);function ht(b){b.querySelectorAll(":scope > track").forEach(g=>{var M;null==(M=b.media)||M.append(g.cloneNode())}),dO.forEach(g=>{var M;null==(M=b.media)||M.addEventListener(g,g=>{b.dispatchEvent(new Event(g.type))})})}function mux_player_dist_Q(b,g){return b.media?b.media.getAttribute(g):b.getAttribute(g)}var dU=class extends dg.HTMLElement{static get observedAttributes(){return[...dN,...dP]}constructor(){super(),this.querySelectorAll(":scope > track").forEach(b=>{var g;null==(g=this.media)||g.append(b.cloneNode())}),new MutationObserver(b=>{for(let g of b)"childList"===g.type&&(g.removedNodes.forEach(b=>{var g,M;let N=null==(g=this.media)?void 0:g.querySelector(`track[src="${b.src}"]`);N&&(null==(M=this.media)||M.removeChild(N))}),g.addedNodes.forEach(b=>{var g;null==(g=this.media)||g.append(b.cloneNode())}))}).observe(this,{childList:!0,subtree:!0})}attributeChangedCallback(b,g,M){var N,B;switch(b){case dL.MUTED:this.media&&(this.media.muted=null!=M,this.media.defaultMuted=null!=M);return;case dL.VOLUME:{let b=null!=(N=mux_player_dist_R(M))?N:1;this.media&&(this.media.volume=b);return}case dL.PLAYBACKRATE:{let b=null!=(B=mux_player_dist_R(M))?B:1;this.media&&(this.media.playbackRate=b,this.media.defaultPlaybackRate=b);return}}}play(){var b,g;return null!=(g=null==(b=this.media)?void 0:b.play())?g:Promise.reject()}pause(){var b;null==(b=this.media)||b.pause()}requestCast(b){var g;return null==(g=this.media)?void 0:g.requestCast(b)}get media(){var b;return null==(b=this.shadowRoot)?void 0:b.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var b,g;return null==(g=null==(b=this.media)?void 0:b.paused)||g}get duration(){var b,g;return null!=(g=null==(b=this.media)?void 0:b.duration)?g:NaN}get ended(){var b,g;return null!=(g=null==(b=this.media)?void 0:b.ended)&&g}get buffered(){var b,g;return null!=(g=null==(b=this.media)?void 0:b.buffered)?g:dD}get seekable(){var b,g;return null!=(g=null==(b=this.media)?void 0:b.seekable)?g:dD}get readyState(){var b,g;return null!=(g=null==(b=this.media)?void 0:b.readyState)?g:0}get videoWidth(){var b,g;return null!=(g=null==(b=this.media)?void 0:b.videoWidth)?g:0}get videoHeight(){var b,g;return null!=(g=null==(b=this.media)?void 0:b.videoHeight)?g:0}get currentTime(){var b,g;return null!=(g=null==(b=this.media)?void 0:b.currentTime)?g:0}set currentTime(b){this.media&&(this.media.currentTime=Number(b))}get volume(){var b,g;return null!=(g=null==(b=this.media)?void 0:b.volume)?g:1}set volume(b){this.media&&(this.media.volume=Number(b))}get playbackRate(){var b,g;return null!=(g=null==(b=this.media)?void 0:b.playbackRate)?g:1}set playbackRate(b){this.media&&(this.media.playbackRate=Number(b))}get defaultPlaybackRate(){var b;return null!=(b=mux_player_dist_R(this.getAttribute(dL.PLAYBACKRATE)))?b:1}set defaultPlaybackRate(b){null!=b?this.setAttribute(dL.PLAYBACKRATE,`${b}`):this.removeAttribute(dL.PLAYBACKRATE)}get crossOrigin(){return mux_player_dist_Q(this,dR.CROSSORIGIN)}set crossOrigin(b){this.setAttribute(dR.CROSSORIGIN,`${b}`)}get autoplay(){return null!=mux_player_dist_Q(this,dR.AUTOPLAY)}set autoplay(b){b?this.setAttribute(dR.AUTOPLAY,"string"==typeof b?b:""):this.removeAttribute(dR.AUTOPLAY)}get loop(){return null!=mux_player_dist_Q(this,dR.LOOP)}set loop(b){b?this.setAttribute(dR.LOOP,""):this.removeAttribute(dR.LOOP)}get muted(){var b,g;return null!=(g=null==(b=this.media)?void 0:b.muted)&&g}set muted(b){this.media&&(this.media.muted=!!b)}get defaultMuted(){return null!=mux_player_dist_Q(this,dR.MUTED)}set defaultMuted(b){b?this.setAttribute(dR.MUTED,""):this.removeAttribute(dR.MUTED)}get playsInline(){return null!=mux_player_dist_Q(this,dR.PLAYSINLINE)}set playsInline(b){dist_x("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(b){["","none","metadata","auto"].includes(b)?this.setAttribute(dR.PRELOAD,b):this.removeAttribute(dR.PRELOAD)}},dB=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-selectmenu-display: var(--captions-selectmenu, var(--media-captions-button-display));
  --media-rendition-selectmenu-display: var(--rendition-selectmenu);
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button);
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-selectmenu-display: var(--playback-rate-selectmenu);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  width: 100%;
  line-height: 0;
}

/* Hide custom elements that are not defined yet */
:not(:defined) {
  display: none;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-captions-button-display, var(--top-captions-selectmenu))
  );
  --media-rendition-selectmenu-display: var(--rendition-selectmenu, var(--top-rendition-selectmenu));
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu, var(--top-audio-track-selectmenu));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-playback-rate-button-display, var(--top-playback-rate-selectmenu))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-captions-button-display, var(--center-captions-selectmenu))
  );
  --media-rendition-selectmenu-display: var(--rendition-selectmenu, var(--center-rendition-selectmenu));
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu, var(--center-audio-track-selectmenu));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-selectmenu-display: var(
    --playback-rate-selectmenu,
    var(--media-playback-rate-button-display, var(--center-playback-rate-selectmenu))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-captions-button-display, var(--bottom-captions-selectmenu))
  );
  --media-rendition-selectmenu-display: var(--rendition-selectmenu, var(--bottom-rendition-selectmenu));
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu, var(--bottom-audio-track-selectmenu));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-selectmenu-display: var(
    --playback-rate-selectmenu,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-selectmenu))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}
`,dG=`
  :host {
    z-index: 100;
    display: var(--media-dialog-display, flex);
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    color: #fff;
    line-height: 18px;
    font-family: Arial, sans-serif;
    padding: var(--media-dialog-backdrop-padding, 0);
    background: var(--media-dialog-backdrop-background,
      linear-gradient(to bottom, rgba(20, 20, 30, 0.7) 50%, rgba(20, 20, 30, 0.9))
    );
    /* Needs to use !important to prevent overwrite of media-chrome */
    transition: var(--media-dialog-transition-open, visibility .2s, opacity .2s) !important;
    transform: var(--media-dialog-transform-open, none) !important;
    visibility: visible !important;
    opacity: 1 !important;
    pointer-events: auto !important;
  }

  :host(:not([open])) {
    /* Needs to use !important to prevent overwrite of media-chrome */
    transition: var(--media-dialog-transition-close, visibility .1s, opacity .1s) !important;
    transform: var(--media-dialog-transform-close, none) !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }

  :focus-visible {
    box-shadow: 0 0 0 2px rgba(27, 127, 204, 0.9);
  }

  .dialog {
    position: relative;
    box-sizing: border-box;
    background: var(--media-dialog-background, none);
    padding: var(--media-dialog-padding, 10px);
    width: min(320px, 100%);
    word-wrap: break-word;
    max-height: 100%;
    overflow: auto;
    text-align: center;
    line-height: 1.4;
  }
`,dW=df.createElement("template");dW.innerHTML=`
  <style>
    ${dG}
  </style>

  <div class="dialog">
    <slot></slot>
  </div>
`;var dH=class extends dg.HTMLElement{constructor(){var b;super(),this.attachShadow({mode:"open"}),null==(b=this.shadowRoot)||b.appendChild(this.constructor.template.content.cloneNode(!0))}show(){this.setAttribute("open",""),this.dispatchEvent(new CustomEvent("open",{composed:!0,bubbles:!0})),dist_gt(this)}close(){this.hasAttribute("open")&&(this.removeAttribute("open"),this.dispatchEvent(new CustomEvent("close",{composed:!0,bubbles:!0})),Xt(this))}attributeChangedCallback(b,g,M){"open"===b&&g!==M&&(null!=M?this.show():this.close())}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","dialog"),this.hasAttribute("open")&&dist_gt(this)}};function dist_gt(b){let g=new CustomEvent("initfocus",{composed:!0,bubbles:!0,cancelable:!0});if(b.dispatchEvent(g),g.defaultPrevented)return;let M=b.querySelector("[autofocus]:not([disabled])");!M&&b.tabIndex>=0&&(M=b),M||(M=dist_Et(b.shadowRoot)),b._previouslyFocusedElement=df.activeElement,df.activeElement instanceof HTMLElement&&df.activeElement.blur(),b.addEventListener("transitionend",()=>{M instanceof HTMLElement&&M.focus({preventScroll:!0})},{once:!0})}function dist_Et(b){let g=["button","input","keygen","select","textarea"].map(function(b){return b+":not([disabled])"});g.push('[tabindex]:not([disabled]):not([tabindex=""])');let M=null==b?void 0:b.querySelector(g.join(", "));if(!M&&"attachShadow"in Element.prototype){let g=(null==b?void 0:b.querySelectorAll("*"))||[];for(let b=0;b<g.length&&!(g[b].tagName&&g[b].shadowRoot&&(M=dist_Et(g[b].shadowRoot)));b++);}return M}function Xt(b){b._previouslyFocusedElement instanceof HTMLElement&&b._previouslyFocusedElement.focus()}dH.styles=dG,dH.template=dW,dH.observedAttributes=["open"],dg.customElements.get("media-dialog")||(dg.customElements.define("media-dialog",dH),dg.MediaDialog=dH);var dV=dH,dF=df.createElement("template");dF.innerHTML=`
  <style>
    ${dV.styles}

    .close {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      width: 28px;
      height: 28px;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  </style>

  <div class="dialog">
    <slot></slot>
  </div>

  <slot name="close">
    <button class="close" tabindex="0">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </slot>
`;var dq=class extends dV{constructor(){var b,g;super(),null==(g=null==(b=this.shadowRoot)?void 0:b.querySelector(".close"))||g.addEventListener("click",()=>{this.close()})}};dq.template=dF,dg.customElements.get("mxp-dialog")||(dg.customElements.define("mxp-dialog",dq),dg.MxpDialog=dq);var d$=new WeakMap,dj=class t{constructor(b,g){this.element=b,this.type=g,this.element.addEventListener(this.type,this);let M=d$.get(this.element);M&&M.set(this.type,this)}set(b){if("function"==typeof b)this.handleEvent=b.bind(this.element);else if("object"==typeof b&&"function"==typeof b.handleEvent)this.handleEvent=b.handleEvent.bind(b);else{this.element.removeEventListener(this.type,this);let b=d$.get(this.element);b&&b.delete(this.type)}}static for(b){d$.has(b.element)||d$.set(b.element,new Map);let g=b.attributeName.slice(2),M=d$.get(b.element);return M&&M.has(g)?M.get(g):new t(b.element,g)}};function dist_Qt(b,g){return!!(b instanceof AttrPart&&b.attributeName.startsWith("on"))&&(dj.for(b).set(g),b.element.removeAttributeNS(b.attributeNamespace,b.attributeName),!0)}function ea(b,g){return g instanceof dz&&b instanceof ChildNodePart&&(g.renderInto(b),!0)}function ta(b,g){return g instanceof DocumentFragment&&b instanceof ChildNodePart&&(g.childNodes.length&&b.replace(...g.childNodes),!0)}function aa(b,g){if(b instanceof AttrPart){let M=b.attributeNamespace,N=b.element.getAttributeNS(M,b.attributeName);return String(g)!==N&&(b.value=String(g)),!0}return b.value=String(g),!0}function ia(b,g){if(b instanceof AttrPart&&g instanceof Element){let M=b.element;return M[b.attributeName]!==g&&(b.element.removeAttributeNS(b.attributeNamespace,b.attributeName),M[b.attributeName]=g),!0}return!1}function ra(b,g){if("boolean"==typeof g&&b instanceof AttrPart){let M=b.attributeNamespace;return g!==b.element.hasAttributeNS(M,b.attributeName)&&(b.booleanValue=g),!0}return!1}function oa(b,g){return!1===g&&b instanceof ChildNodePart&&(b.replace(""),!0)}function na(b,g){ia(b,g)||ra(b,g)||dist_Qt(b,g)||oa(b,g)||ea(b,g)||ta(b,g)||aa(b,g)}var dK=new Map,dY=new WeakMap,dZ=new WeakMap,dz=class{constructor(b,g,M){this.strings=b,this.values=g,this.processor=M,this.stringsKey=this.strings.join("\x01")}get template(){if(dK.has(this.stringsKey))return dK.get(this.stringsKey);{let b=df.createElement("template"),g=this.strings.length-1;return b.innerHTML=this.strings.reduce((b,M,N)=>b+M+(N<g?`{{ ${N} }}`:""),""),dK.set(this.stringsKey,b),b}}renderInto(b){var g;let M=this.template;if(dY.get(b)!==M){dY.set(b,M);let g=new TemplateInstance(M,this.values,this.processor);dZ.set(b,g),b instanceof ChildNodePart?b.replace(...g.children):b.appendChild(g);return}let N=dZ.get(b);null==(g=null==N?void 0:N.update)||g.call(N,this.values)}},dQ={processCallback(b,g,M){var N;if(M)for(let[b,B]of g)b in M&&na(B,null!=(N=M[b])?N:"")}};function dist_O(b,...g){return new dz(b,g,dQ)}function dist_Ct(b,g){b.renderInto(g)}var dist_Lt=b=>dist_O`
  <style>
    ${dB}
  </style>
  ${ca(b)}
`,la=b=>{let g=b.hotKeys?`${b.hotKeys}`:"";return"live"===mux_player_dist_J(b.streamType)&&(g+=" noarrowleft noarrowright"),g},dX=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",DISPLAY:"display",CONTROL_BAR:"control-bar",SELECTMENU:"selectmenu",LISTBOX:"listbox",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),ca=b=>{var g,M,N,B,W,K,Y,et,er,en,eo,el,ed,eu,ec,em,eh,ep,e_,ev,eb,eg,ef,eE,ey,eA,ek,eT,ew,eS,eC,eI,eM,ex,eR;return dist_O`
  <media-theme
    template="${b.themeTemplate||!1}"
    defaultstreamtype="${null!=(g=b.defaultStreamType)&&g}"
    hotkeys="${la(b)||!1}"
    nohotkeys="${b.noHotKeys||!b.hasSrc||b.isDialogOpen||!1}"
    noautoseektolive="${!!(null!=(M=b.streamType)&&M.includes(es.LIVE))&&0!==b.targetLiveWindow}"
    novolumepref="${b.novolumepref||!1}"
    disabled="${!b.hasSrc||b.isDialogOpen}"
    audio="${null!=(N=b.audio)&&N}"
    style="${null!=(B=dist_st({"--media-primary-color":b.primaryColor,"--media-secondary-color":b.secondaryColor,"--media-accent-color":b.accentColor}))&&B}"
    defaultsubtitles="${!b.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(W=b.forwardSeekOffset)&&W}"
    backwardseekoffset="${null!=(K=b.backwardSeekOffset)&&K}"
    playbackrates="${null!=(Y=b.playbackRates)&&Y}"
    defaultshowremainingtime="${null!=(et=b.defaultShowRemainingTime)&&et}"
    defaultduration="${null!=(er=b.defaultDuration)&&er}"
    hideduration="${null!=(en=b.hideDuration)&&en}"
    title="${null!=(eo=b.title)&&eo}"
    exportparts="${dX}"
  >
    <mux-video
      slot="media"
      target-live-window="${null!=(el=b.targetLiveWindow)&&el}"
      stream-type="${null!=(ed=mux_player_dist_J(b.streamType))&&ed}"
      crossorigin="${null!=(eu=b.crossOrigin)?eu:""}"
      playsinline
      autoplay="${null!=(ec=b.autoplay)&&ec}"
      muted="${null!=(em=b.muted)&&em}"
      loop="${null!=(eh=b.loop)&&eh}"
      preload="${null!=(ep=b.preload)&&ep}"
      debug="${null!=(e_=b.debug)&&e_}"
      prefer-cmcd="${null!=(ev=b.preferCmcd)&&ev}"
      disable-cookies="${null!=(eb=b.disableCookies)&&eb}"
      prefer-playback="${null!=(eg=b.preferPlayback)&&eg}"
      start-time="${null!=b.startTime&&b.startTime}"
      beacon-collection-domain="${null!=(ef=b.beaconCollectionDomain)&&ef}"
      player-software-name="${null!=(eE=b.playerSoftwareName)&&eE}"
      player-software-version="${null!=(ey=b.playerSoftwareVersion)&&ey}"
      env-key="${null!=(eA=b.envKey)&&eA}"
      custom-domain="${null!=(ek=b.customDomain)&&ek}"
      src="${b.src?b.src:!!b.playbackId&&Rt(b)}"
      cast-src="${b.src?b.src:!!b.playbackId&&Rt(b)}"
      exportparts="video"
    >
      ${b.storyboard?dist_O`<track label="thumbnails" default kind="metadata" src="${b.storyboard}" />`:dist_O``}
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${""!==b.poster&&null!=(eT=b.poster)&&eT}"
        placeholdersrc="${null!=(ew=b.placeholder)&&ew}"
      ></media-poster-image>
    </slot>
    <mxp-dialog
      no-auto-hide
      open="${null!=(eS=b.isDialogOpen)&&eS}"
      onclose="${b.onCloseErrorDialog}"
      oninitfocus="${b.onInitFocusDialog}"
    >
      ${null!=(eC=b.dialog)&&eC.title?dist_O`<h3>${b.dialog.title}</h3>`:dist_O``}
      <p>
        ${null==(eI=b.dialog)?void 0:eI.message}
        ${null!=(eM=b.dialog)&&eM.linkUrl?dist_O`<a
              href="${b.dialog.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(ex=b.dialog.linkText)?ex:""} ${l("(opens in a new window)")}"
              >${null!=(eR=b.dialog.linkText)?eR:b.dialog.linkUrl}</a
            >`:dist_O``}
      </p>
    </mxp-dialog>
  </media-theme>
`};function mux_player_dist_he(b,g,M,N,B){var W,K,Y;let et={},en={};switch(b.code){case er.MEDIA_ERR_NETWORK:switch(et.title=l("Network Error",B),et.message=b.message,null==(W=b.data)?void 0:W.response.code){case 412:et.title=l("Video is not currently available",B),et.message=l("The live stream or video file are not yet ready.",B),en.message=l("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",B),en.file="412-not-playable.md";break;case 404:et.title=l("Video does not exist",B),et.message="",en.message=l("This playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",B),en.file="404-not-found.md";break;case 403:{if(et.title=l("Invalid playback URL",B),et.message=l("The video URL or playback-token are formatted with incorrect or incomplete information.",B),en.message=l("403 error trying to access this playback URL. If this is a signed URL, you might need to provide a playback-token.",B),en.file="missing-signed-tokens.md",!N)break;let{exp:b,aud:g,sub:W}=P(N),K=Date.now()>1e3*b,Y=W!==M,er="v"!==g,es={timeStyle:"medium",dateStyle:"medium"};if(K){et.title=l("Video URL has expired",B),et.message=l("The video’s secured playback-token has expired.",B),en.message=l("The video’s secured playback-token has expired.",B),en.context=l("Expired at: {expiredDate}. Current time: {currentDate}.",B).format({expiredDate:new Intl.DateTimeFormat(dE.code,es).format(1e3*b),currentDate:new Intl.DateTimeFormat(dE.code,es).format(Date.now())}),en.file="403-expired-token.md";break}if(Y){et.title=l("Video URL is formatted incorrectly",B),et.message=l("The video’s playback ID does not match the one encoded in the playback-token.",B),en.message=l("The video’s playback ID does not match the one encoded in the playback-token.",B),en.context=l("Specified playback ID: {playbackId} and the playback ID encoded in the playback-token: {tokenPlaybackId}",B).format({playbackId:M,tokenPlaybackId:W}),en.file="403-playback-id-mismatch.md";break}if(er){et.title=l("Video URL is formatted incorrectly",B),et.message=l("The playback-token is formatted with incorrect information.",B),en.message=l("The playback-token is formatted with incorrect information.",B),en.context=l("The playback-token has an incorrect aud value: {tokenType}. aud value should be v.",B).format({tokenType:g}),en.file="403-incorrect-aud-value.md";break}en.message=l("403 error trying to access this playback URL. If this is a signed playback ID, the token might not have been generated correctly.",B),en.file="403-malformatted-token.md"}}break;case er.MEDIA_ERR_DECODE:{let{message:g}=b;et={title:l("Media Error",B),message:g},en.file="media-decode-error.md";break}case er.MEDIA_ERR_SRC_NOT_SUPPORTED:{let W=null==(Y=null==(K=b.data)?void 0:K.response)?void 0:Y.code;if(W>=400&&W<500){b.code=er.MEDIA_ERR_NETWORK,b.data={response:{code:W}},{dialog:et,devlog:en}=mux_player_dist_he(b,g,M,N);break}et={title:l("Source Not Supported",B),message:b.message},en.file="media-src-not-supported.md";break}default:et={title:l("Error",B),message:b.message}}return g&&(et={title:l("Your device appears to be offline",B),message:l("Check your internet connection and try reloading this video.",B)}),{dialog:et,devlog:en}}var dJ=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller ::slotted([slot='media']) {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) ::slotted([slot='media']) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='listbox'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: calc(100% + 16px);
      padding: 2.5px 10px;
    }

    [part~='listbox']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='listbox']::part(option) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='listbox']::part(option-selected) {
      font-weight: 700;
    }

    media-captions-selectmenu,
    media-rendition-selectmenu,
    media-audio-track-selectmenu,
    media-playback-rate-listbox[part~='listbox'] {
      --media-listbox-background: var(--_primary-color);
      --media-option-selected-background: transparent;
      --media-option-hover-background: transparent;
      --media-option-hover-outline: var(--_accent-color) solid 1px;
      --media-text-color: var(--_text-color);
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-selectmenu {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-listbox[part~='listbox'] {
      --media-listbox-layout: row;
      --media-option-selected-background: var(--_accent-color);
      margin-right: 6px;
      padding: 0;
    }

    media-playback-rate-listbox[part~='listbox']::part(option) {
      padding: 6px 4px;
    }

    media-playback-rate-listbox[part~='listbox']::part(option-selected) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps: hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%,
        hsl(0 0% 0% / 0.104) 22.5%, hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%,
        hsl(0 0% 0% / 0.45) 47.1%, hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%,
        hsl(0 0% 0% / 0.825) 71%, hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%,
        hsl(0 0% 0%) 100%;
    }

    :host([title]:not([audio])) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 2;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow: 0 0 2px rgb(0 0 0 / 0.25), 0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      animation: 0.3s linear forwards pre-play-hide;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-selectmenu: none;
      --bottom-pip-button: none;
    }
  </style>

  <template partial="TitleDisplay">
    <template if="title">
      <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenuButton">
    <media-captions-selectmenu part="bottom captions selectmenu" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-captions-button
        slot="button"
        part="bottom captions button"
        disabled="{{disabled}}"
        aria-disabled="{{disabled}}"
      >
        <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
          <path
            d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
          <path
            d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
          />
          <path
            d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
          />
          <path
            d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
          />
        </svg>
      </media-captions-button>
      <media-captions-listbox slot="listbox" exportparts="option" part="bottom captions listbox">
        <div slot="select-indicator">
          <style>
            .listbox-indicator {
              position: relative;
              top: 1px;
              width: 0.9em;
              height: auto;
              fill: var(--_accent-color);
            }

            [aria-selected='false'] .listbox-indicator {
              display: none;
            }
          </style>
          <svg viewBox="0 0 14 18" class="listbox-indicator">
            <path
              d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </media-captions-listbox>
    </media-captions-selectmenu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateSelect">
    <media-playback-rate-selectmenu
      part="bottom playback-rate selectmenu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <media-playback-rate-button slot="button" part="bottom playback-rate button"></media-playback-rate-button>
      <media-playback-rate-listbox
        slot="listbox"
        rates="{{playbackrates}}"
        exportparts="option"
        part="bottom playback-rate listbox"
      ></media-playback-rate-listbox>
    </media-playback-rate-selectmenu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackSelect">
    <media-audio-track-selectmenu
      part="bottom audio-track selectmenu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <media-audio-track-button slot="button" part="bottom audio-track button">
        <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
          <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
          <path
            d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
          />
        </svg>
      </media-audio-track-button>
      <media-audio-track-listbox slot="listbox" exportparts="option" part="bottom audio-track listbox">
        <div slot="select-indicator">
          <style>
            .listbox-indicator {
              position: relative;
              top: 1px;
              width: 0.9em;
              height: auto;
              fill: var(--_accent-color);
            }

            [aria-selected='false'] .listbox-indicator {
              display: none;
            }
          </style>
          <svg viewBox="0 0 14 18" class="listbox-indicator">
            <path
              d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </media-audio-track-listbox>
    </media-audio-track-selectmenu>
  </template>

  <template partial="RenditionSelect">
    <media-rendition-selectmenu part="bottom rendition selectmenu" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-rendition-button slot="button" part="bottom rendition button">
        <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
          <path
            d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
          />
        </svg>
      </media-rendition-button>
      <media-rendition-listbox slot="listbox" exportparts="option" part="bottom rendition listbox">
        <div slot="select-indicator">
          <style>
            .listbox-indicator {
              position: relative;
              top: 1px;
              width: 0.9em;
              height: auto;
              fill: var(--_accent-color);
            }

            [aria-selected='false'] .listbox-indicator {
              display: none;
            }
          </style>
          <svg viewBox="0 0 14 18" class="listbox-indicator">
            <path
              d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </media-rendition-listbox>
    </media-rendition-selectmenu>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <!-- Pre-playback UI -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="streamtype == 'on-demand'">
          <template if="!breakpointsm"> {{>SeekBackwardButton section="center"}} </template>
          <template if="!breakpointsm"> {{>PlayButton section="center"}} </template>
          <template if="breakpointsm"> {{>PrePlayButton section="center"}} </template>
          <template if="!breakpointsm"> {{>SeekForwardButton section="center"}} </template>
        </template>

        <template if="streamtype == 'live'">
          <template if="!breakpointsm">
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton section="center"}} </template>
          </template>
          <template if="!breakpointsm"> {{>PlayButton section="center"}} </template>
          <template if="breakpointsm"> {{>PrePlayButton section="center"}} </template>
          <template if="!breakpointsm">
            <template if="targetlivewindow > 0"> {{>SeekForwardButton section="center"}} </template>
          </template>
        </template>
      </div>

      <!-- Auotplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionSelect}} {{>PlaybackRateSelect}} {{>AudioTrackSelect}} {{>CaptionsMenuButton}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionSelect}} {{>AudioTrackSelect}} {{>CaptionsMenuButton}} {{>AirplayButton}} {{>CastButton}}
          {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateSelect}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          <template if="breakpointsm">
            {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}} {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,d0=df.createElement("template");"innerHTML"in d0&&(d0.innerHTML=dJ);var d1,d2,d3=class extends MediaThemeElement{};d3.template=null==(d2=null==(d1=d0.content)?void 0:d1.children)?void 0:d2[0],dg.customElements.get("media-theme-gerwig")||dg.customElements.define("media-theme-gerwig",d3);var d5={SRC:"src",POSTER:"poster"},d4={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref"},d9=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","novolumepref"];function Ea(b,g){var M;return{src:!b.playbackId&&b.src,playbackId:b.playbackId,hasSrc:!!b.playbackId||!!b.src,poster:b.poster,storyboard:b.storyboard,storyboardSrc:b.getAttribute(d4.STORYBOARD_SRC),placeholder:b.getAttribute("placeholder"),themeTemplate:ka(b),thumbnailTime:!b.tokens.thumbnail&&b.thumbnailTime,autoplay:b.autoplay,crossOrigin:b.crossOrigin,loop:b.loop,noHotKeys:b.hasAttribute(d4.NOHOTKEYS),hotKeys:b.getAttribute(d4.HOTKEYS),muted:b.muted,paused:b.paused,preload:b.preload,envKey:b.envKey,preferCmcd:b.preferCmcd,debug:b.debug,disableCookies:b.disableCookies,tokens:b.tokens,beaconCollectionDomain:b.beaconCollectionDomain,maxResolution:b.maxResolution,minResolution:b.minResolution,renditionOrder:b.renditionOrder,metadata:b.metadata,playerSoftwareName:b.playerSoftwareName,playerSoftwareVersion:b.playerSoftwareVersion,startTime:b.startTime,preferPlayback:b.preferPlayback,audio:b.audio,defaultStreamType:b.defaultStreamType,targetLiveWindow:b.getAttribute(lU.TARGET_LIVE_WINDOW),streamType:mux_player_dist_J(b.getAttribute(lU.STREAM_TYPE)),primaryColor:b.getAttribute(d4.PRIMARY_COLOR),secondaryColor:b.getAttribute(d4.SECONDARY_COLOR),accentColor:b.getAttribute(d4.ACCENT_COLOR),forwardSeekOffset:b.forwardSeekOffset,backwardSeekOffset:b.backwardSeekOffset,defaultHiddenCaptions:b.defaultHiddenCaptions,defaultDuration:b.defaultDuration,defaultShowRemainingTime:b.defaultShowRemainingTime,hideDuration:Ta(b),playbackRates:b.getAttribute(d4.PLAYBACK_RATES),customDomain:null!=(M=b.getAttribute(lU.CUSTOM_DOMAIN))?M:void 0,title:b.getAttribute(d4.TITLE),novolumepref:b.hasAttribute(d4.NO_VOLUME_PREF),...g,extraSourceParams:b.extraSourceParams}}function ka(b){var g,M;let N=b.theme;if(N){let B=null==(M=null==(g=b.getRootNode())?void 0:g.getElementById)?void 0:M.call(g,N);if(B&&B instanceof HTMLTemplateElement)return B;N.startsWith("media-theme-")||(N=`media-theme-${N}`);let W=dg.customElements.get(N);if(null!=W&&W.template)return W.template}}function Ta(b){var g;let M=null==(g=b.mediaController)?void 0:g.querySelector("media-time-display");return M&&"none"===getComputedStyle(M).getPropertyValue("--media-duration-display-display").trim()}function mux_player_dist_t(b){let g=b.hasAttribute(d4.TITLE)?{video_title:b.getAttribute(d4.TITLE)}:{};return b.getAttributeNames().filter(b=>b.startsWith("metadata-")).reduce((g,M)=>{let N=b.getAttribute(M);return null!==N&&(g[M.replace(/^metadata-/,"").replace(/-/g,"_")]=N),g},g)}var d8,d7,d6,ue,ui,ua,ur,un,us,uo,ul,ud,uu,uc,um,uh,up,u_,uv,ub,ug,uf=Object.values(lU),uE=Object.values(d5),uy=Object.values(d4),uA={dialog:void 0,isDialogOpen:!1},uk={redundant_streams:!0},uT=class extends dU{constructor(){super(),mux_player_dist_h(this,ua),mux_player_dist_h(this,un),mux_player_dist_h(this,uo),mux_player_dist_h(this,ud),mux_player_dist_h(this,uc),mux_player_dist_h(this,uh),mux_player_dist_h(this,u_),mux_player_dist_h(this,ub),mux_player_dist_h(this,d8,!1),mux_player_dist_h(this,d7,{}),mux_player_dist_h(this,d6,!0),mux_player_dist_h(this,ue,new dM(this,"hotkeys")),mux_player_dist_h(this,ui,{...uA,onCloseErrorDialog:()=>f(this,uo,ul).call(this,{dialog:void 0,isDialogOpen:!1}),onInitFocusDialog:b=>{mux_player_dist_Oe(this,df.activeElement)||b.preventDefault()}}),this.attachShadow({mode:"open"}),f(this,un,us).call(this),this.isConnected&&f(this,ua,ur).call(this)}static get observedAttributes(){var b;return[...null!=(b=dU.observedAttributes)?b:[],...uE,...uf,...uy]}get mediaTheme(){var b;return null==(b=this.shadowRoot)?void 0:b.querySelector("media-theme")}get mediaController(){var b,g;return null==(g=null==(b=this.mediaTheme)?void 0:b.shadowRoot)?void 0:g.querySelector("media-controller")}connectedCallback(){var b;let g=null==(b=this.shadowRoot)?void 0:b.querySelector("mux-video");g&&(g.metadata=mux_player_dist_t(this))}attributeChangedCallback(b,g,M){switch(f(this,ua,ur).call(this),super.attributeChangedCallback(b,g,M),b){case d4.HOTKEYS:dist_u(this,ue).value=M;break;case d4.THUMBNAIL_TIME:null!=M&&this.tokens.thumbnail&&mux_player_dist_N(l("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").format({}));break;case d4.THUMBNAIL_TOKEN:{let{aud:b}=P(M);M&&"t"!==b&&mux_player_dist_N(l("The provided thumbnail-token should have audience value 't' instead of '{aud}'.").format({aud:b}));break}case d4.STORYBOARD_TOKEN:{let{aud:b}=P(M);M&&"s"!==b&&mux_player_dist_N(l("The provided storyboard-token should have audience value 's' instead of '{aud}'.").format({aud:b}));break}case lU.PLAYBACK_ID:null!=M&&M.includes("?token")&&dist_x(l("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:M}));break;case lU.STREAM_TYPE:M&&![es.LIVE,es.ON_DEMAND,es.UNKNOWN].includes(M)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=M.includes("dvr")?Number.POSITIVE_INFINITY:0:mux_player_dist_Se({file:"invalid-stream-type.md",message:l("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):M===es.LIVE?null==this.getAttribute(d4.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN}[lU.PLAYBACK_ID,d5.SRC,d4.PLAYBACK_TOKEN].includes(b)&&g!==M&&dist_C(this,ui,{...dist_u(this,ui),...uA}),f(this,ud,uu).call(this,{[dist_ut(b)]:M})}get preferCmcd(){var b;return null!=(b=this.getAttribute(lU.PREFER_CMCD))?b:void 0}set preferCmcd(b){b!==this.preferCmcd&&(b?ed.includes(b)?this.setAttribute(lU.PREFER_CMCD,b):mux_player_dist_N(`Invalid value for preferCmcd. Must be one of ${ed.join()}`):this.removeAttribute(lU.PREFER_CMCD))}get hasPlayed(){var b,g;return null!=(g=null==(b=this.mediaController)?void 0:b.hasAttribute(eR.MEDIA_HAS_PLAYED))&&g}get inLiveWindow(){var b;return null==(b=this.mediaController)?void 0:b.hasAttribute(eR.MEDIA_TIME_IS_LIVE)}get _hls(){var b;return null==(b=this.media)?void 0:b._hls}get mux(){var b;return null==(b=this.media)?void 0:b.mux}get theme(){var b;return null!=(b=this.getAttribute(d4.THEME))?b:"gerwig"}set theme(b){this.setAttribute(d4.THEME,`${b}`)}get themeProps(){let b=this.mediaTheme;if(!b)return;let g={};for(let M of b.getAttributeNames()){if(d9.includes(M))continue;let N=b.getAttribute(M);g[mux_player_dist_de(M)]=""===N||N}return g}set themeProps(b){var g,M;f(this,ua,ur).call(this);let N={...this.themeProps,...b};for(let B in N){if(d9.includes(B))continue;let N=null==b?void 0:b[B];"boolean"==typeof N||null==N?null==(g=this.mediaTheme)||g.toggleAttribute(dist_se(B),!!N):null==(M=this.mediaTheme)||M.setAttribute(dist_se(B),N)}}get playbackId(){var b;return null!=(b=this.getAttribute(lU.PLAYBACK_ID))?b:void 0}set playbackId(b){b?this.setAttribute(lU.PLAYBACK_ID,b):this.removeAttribute(lU.PLAYBACK_ID)}get src(){var b,g;return this.playbackId?null!=(b=mux_player_dist_Z(this,d5.SRC))?b:void 0:null!=(g=this.getAttribute(d5.SRC))?g:void 0}set src(b){b?this.setAttribute(d5.SRC,b):this.removeAttribute(d5.SRC)}get poster(){var b;let g=this.getAttribute(d5.POSTER);return null!=g?g:this.playbackId&&!this.audio?dist_lt(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(b=this.thumbnailTime)?b:this.startTime,token:this.tokens.thumbnail}):void 0}set poster(b){b||""===b?this.setAttribute(d5.POSTER,b):this.removeAttribute(d5.POSTER)}get storyboardSrc(){var b;return null!=(b=this.getAttribute(d4.STORYBOARD_SRC))?b:void 0}set storyboardSrc(b){b?this.setAttribute(d4.STORYBOARD_SRC,b):this.removeAttribute(d4.STORYBOARD_SRC)}get storyboard(){return this.storyboardSrc&&!this.tokens.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[es.LIVE,es.UNKNOWN].includes(this.streamType)?void 0:dist_mt(this.playbackId,{customDomain:this.customDomain,token:this.tokens.storyboard})}get audio(){return this.hasAttribute(d4.AUDIO)}set audio(b){if(!b){this.removeAttribute(d4.AUDIO);return}this.setAttribute(d4.AUDIO,"")}get hotkeys(){return dist_u(this,ue)}get nohotkeys(){return this.hasAttribute(d4.NOHOTKEYS)}set nohotkeys(b){if(!b){this.removeAttribute(d4.NOHOTKEYS);return}this.setAttribute(d4.NOHOTKEYS,"")}get thumbnailTime(){return mux_player_dist_R(this.getAttribute(d4.THUMBNAIL_TIME))}set thumbnailTime(b){this.setAttribute(d4.THUMBNAIL_TIME,`${b}`)}get title(){var b;return null!=(b=this.getAttribute(d4.TITLE))?b:""}set title(b){b!==this.title&&(b?this.setAttribute(d4.TITLE,b):this.removeAttribute("title"),super.title=b)}get placeholder(){var b;return null!=(b=mux_player_dist_Z(this,d4.PLACEHOLDER))?b:""}set placeholder(b){this.setAttribute(d4.PLACEHOLDER,`${b}`)}get primaryColor(){var b,g;let M=this.getAttribute(d4.PRIMARY_COLOR);if(null!=M||this.mediaTheme&&(M=null==(g=null==(b=dg.getComputedStyle(this.mediaTheme))?void 0:b.getPropertyValue("--_primary-color"))?void 0:g.trim()))return M}set primaryColor(b){this.setAttribute(d4.PRIMARY_COLOR,`${b}`)}get secondaryColor(){var b,g;let M=this.getAttribute(d4.SECONDARY_COLOR);if(null!=M||this.mediaTheme&&(M=null==(g=null==(b=dg.getComputedStyle(this.mediaTheme))?void 0:b.getPropertyValue("--_secondary-color"))?void 0:g.trim()))return M}set secondaryColor(b){this.setAttribute(d4.SECONDARY_COLOR,`${b}`)}get accentColor(){var b,g;let M=this.getAttribute(d4.ACCENT_COLOR);if(null!=M||this.mediaTheme&&(M=null==(g=null==(b=dg.getComputedStyle(this.mediaTheme))?void 0:b.getPropertyValue("--_accent-color"))?void 0:g.trim()))return M}set accentColor(b){this.setAttribute(d4.ACCENT_COLOR,`${b}`)}get defaultShowRemainingTime(){return this.hasAttribute(d4.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(b){b?this.setAttribute(d4.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(d4.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(d4.PLAYBACK_RATES))return this.getAttribute(d4.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(b=>Number(b)).filter(b=>!Number.isNaN(b)).sort((b,g)=>b-g)}set playbackRates(b){if(!b){this.removeAttribute(d4.PLAYBACK_RATES);return}this.setAttribute(d4.PLAYBACK_RATES,b.join(" "))}get forwardSeekOffset(){var b;return null!=(b=mux_player_dist_R(this.getAttribute(d4.FORWARD_SEEK_OFFSET)))?b:10}set forwardSeekOffset(b){this.setAttribute(d4.FORWARD_SEEK_OFFSET,`${b}`)}get backwardSeekOffset(){var b;return null!=(b=mux_player_dist_R(this.getAttribute(d4.BACKWARD_SEEK_OFFSET)))?b:10}set backwardSeekOffset(b){this.setAttribute(d4.BACKWARD_SEEK_OFFSET,`${b}`)}get defaultHiddenCaptions(){return this.hasAttribute(d4.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(b){b?this.setAttribute(d4.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(d4.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return mux_player_dist_R(this.getAttribute(d4.DEFAULT_DURATION))}set defaultDuration(b){null==b?this.removeAttribute(d4.DEFAULT_DURATION):this.setAttribute(d4.DEFAULT_DURATION,`${b}`)}get playerSoftwareName(){var b;return null!=(b=this.getAttribute(lU.PLAYER_SOFTWARE_NAME))?b:"mux-player"}get playerSoftwareVersion(){var b;return null!=(b=this.getAttribute(lU.PLAYER_SOFTWARE_VERSION))?b:dk}get beaconCollectionDomain(){var b;return null!=(b=this.getAttribute(lU.BEACON_COLLECTION_DOMAIN))?b:void 0}set beaconCollectionDomain(b){b!==this.beaconCollectionDomain&&(b?this.setAttribute(lU.BEACON_COLLECTION_DOMAIN,b):this.removeAttribute(lU.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var b;return null!=(b=this.getAttribute(lU.MAX_RESOLUTION))?b:void 0}set maxResolution(b){b!==this.maxResolution&&(b?this.setAttribute(lU.MAX_RESOLUTION,b):this.removeAttribute(lU.MAX_RESOLUTION))}get minResolution(){var b;return null!=(b=this.getAttribute(lU.MIN_RESOLUTION))?b:void 0}set minResolution(b){b!==this.minResolution&&(b?this.setAttribute(lU.MIN_RESOLUTION,b):this.removeAttribute(lU.MIN_RESOLUTION))}get renditionOrder(){var b;return null!=(b=this.getAttribute(lU.RENDITION_ORDER))?b:void 0}set renditionOrder(b){b!==this.renditionOrder&&(b?this.setAttribute(lU.RENDITION_ORDER,b):this.removeAttribute(lU.RENDITION_ORDER))}get extraSourceParams(){return this.hasAttribute(d4.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(d4.EXTRA_SOURCE_PARAMS)).entries()].reduce((b,[g,M])=>(b[g]=M,b),{}):uk}set extraSourceParams(b){null==b?this.removeAttribute(d4.EXTRA_SOURCE_PARAMS):this.setAttribute(d4.EXTRA_SOURCE_PARAMS,new URLSearchParams(b).toString())}get customDomain(){var b;return null!=(b=this.getAttribute(lU.CUSTOM_DOMAIN))?b:void 0}set customDomain(b){b!==this.customDomain&&(b?this.setAttribute(lU.CUSTOM_DOMAIN,b):this.removeAttribute(lU.CUSTOM_DOMAIN))}get envKey(){var b;return null!=(b=mux_player_dist_Z(this,lU.ENV_KEY))?b:void 0}set envKey(b){this.setAttribute(lU.ENV_KEY,`${b}`)}get noVolumePref(){return this.hasAttribute(d4.NO_VOLUME_PREF)}set noVolumePref(b){b?this.setAttribute(d4.NO_VOLUME_PREF,""):this.removeAttribute(d4.NO_VOLUME_PREF)}get debug(){return null!=mux_player_dist_Z(this,lU.DEBUG)}set debug(b){b?this.setAttribute(lU.DEBUG,""):this.removeAttribute(lU.DEBUG)}get disableCookies(){return null!=mux_player_dist_Z(this,lU.DISABLE_COOKIES)}set disableCookies(b){b?this.setAttribute(lU.DISABLE_COOKIES,""):this.removeAttribute(lU.DISABLE_COOKIES)}get streamType(){var b,g,M;return null!=(M=null!=(g=this.getAttribute(lU.STREAM_TYPE))?g:null==(b=this.media)?void 0:b.streamType)?M:es.UNKNOWN}set streamType(b){this.setAttribute(lU.STREAM_TYPE,`${b}`)}get defaultStreamType(){var b,g,M;return null!=(M=null!=(g=this.getAttribute(d4.DEFAULT_STREAM_TYPE))?g:null==(b=this.mediaController)?void 0:b.getAttribute(d4.DEFAULT_STREAM_TYPE))?M:es.ON_DEMAND}set defaultStreamType(b){b?this.setAttribute(d4.DEFAULT_STREAM_TYPE,b):this.removeAttribute(d4.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var b,g;return this.hasAttribute(d4.TARGET_LIVE_WINDOW)?+this.getAttribute(d4.TARGET_LIVE_WINDOW):null!=(g=null==(b=this.media)?void 0:b.targetLiveWindow)?g:Number.NaN}set targetLiveWindow(b){b==this.targetLiveWindow||Number.isNaN(b)&&Number.isNaN(this.targetLiveWindow)||(null==b?this.removeAttribute(d4.TARGET_LIVE_WINDOW):this.setAttribute(d4.TARGET_LIVE_WINDOW,`${+b}`))}get liveEdgeStart(){var b;return null==(b=this.media)?void 0:b.liveEdgeStart}get startTime(){return mux_player_dist_R(mux_player_dist_Z(this,lU.START_TIME))}set startTime(b){this.setAttribute(lU.START_TIME,`${b}`)}get preferPlayback(){let b=this.getAttribute(lU.PREFER_PLAYBACK);if(b===eo.MSE||b===eo.NATIVE)return b}set preferPlayback(b){b!==this.preferPlayback&&(b===eo.MSE||b===eo.NATIVE?this.setAttribute(lU.PREFER_PLAYBACK,b):this.removeAttribute(lU.PREFER_PLAYBACK))}get metadata(){var b;return null==(b=this.media)?void 0:b.metadata}set metadata(b){if(f(this,ua,ur).call(this),!this.media){dist_x("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...mux_player_dist_t(this),...b}}get _hlsConfig(){var b;return null==(b=this.media)?void 0:b._hlsConfig}set _hlsConfig(b){if(f(this,ua,ur).call(this),!this.media){dist_x("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=b}async addCuePoints(b){var g;if(f(this,ua,ur).call(this),!this.media){dist_x("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return null==(g=this.media)?void 0:g.addCuePoints(b)}get activeCuePoint(){var b;return null==(b=this.media)?void 0:b.activeCuePoint}get cuePoints(){var b,g;return null!=(g=null==(b=this.media)?void 0:b.cuePoints)?g:[]}getStartDate(){var b;return null==(b=this.media)?void 0:b.getStartDate()}get currentPdt(){var b;return null==(b=this.media)?void 0:b.currentPdt}get tokens(){let b=this.getAttribute(d4.PLAYBACK_TOKEN),g=this.getAttribute(d4.THUMBNAIL_TOKEN),M=this.getAttribute(d4.STORYBOARD_TOKEN);return{...dist_u(this,d7),...null!=b?{playback:b}:{},...null!=g?{thumbnail:g}:{},...null!=M?{storyboard:M}:{}}}set tokens(b){dist_C(this,d7,null!=b?b:{})}get playbackToken(){var b;return null!=(b=this.getAttribute(d4.PLAYBACK_TOKEN))?b:void 0}set playbackToken(b){this.setAttribute(d4.PLAYBACK_TOKEN,`${b}`)}get thumbnailToken(){var b;return null!=(b=this.getAttribute(d4.THUMBNAIL_TOKEN))?b:void 0}set thumbnailToken(b){this.setAttribute(d4.THUMBNAIL_TOKEN,`${b}`)}get storyboardToken(){var b;return null!=(b=this.getAttribute(d4.STORYBOARD_TOKEN))?b:void 0}set storyboardToken(b){this.setAttribute(d4.STORYBOARD_TOKEN,`${b}`)}addTextTrack(b,g,M,N){var B;let W=null==(B=this.media)?void 0:B.nativeEl;if(W)return _(W,b,g,M,N)}removeTextTrack(b){var g;let M=null==(g=this.media)?void 0:g.nativeEl;if(M)return xe(M,b)}get textTracks(){var b;return null==(b=this.media)?void 0:b.textTracks}};function mux_player_dist_Z(b,g){return b.media?b.media.getAttribute(g):b.getAttribute(g)}d8=new WeakMap,d7=new WeakMap,d6=new WeakMap,ue=new WeakMap,ui=new WeakMap,ua=new WeakSet,ur=function(){var b,g,M;if(!dist_u(this,d8)){dist_C(this,d8,!0),f(this,ud,uu).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof dg.HTMLElement))throw""}catch{dist_x("<media-theme> failed to upgrade!")}try{if(customElements.upgrade(this.media),!(this.media instanceof lW))throw""}catch{dist_x("<mux-video> failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof MediaController))throw""}catch{dist_x("<media-controller> failed to upgrade!")}ht(this),f(this,uc,um).call(this),f(this,uh,up).call(this),f(this,u_,uv).call(this),dist_C(this,d6,null==(g=null==(b=this.mediaController)?void 0:b.hasAttribute(eJ.USER_INACTIVE))||g),f(this,ub,ug).call(this),null==(M=this.media)||M.addEventListener("streamtypechange",()=>{f(this,ud,uu).call(this)})}},un=new WeakSet,us=function(){var b,g;try{null==(b=null==window?void 0:window.CSS)||b.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(g=null==window?void 0:window.CSS)||g.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},uo=new WeakSet,ul=function(b){Object.assign(dist_u(this,ui),b),f(this,ud,uu).call(this)},ud=new WeakSet,uu=function(b={}){dist_Ct(dist_Lt(Ea(this,{...dist_u(this,ui),...b})),this.shadowRoot)},uc=new WeakSet,um=function(){let e=b=>{var g,M;if(!(null!=b&&b.startsWith("theme-")))return;let N=b.replace(/^theme-/,"");if(d9.includes(N))return;let B=this.getAttribute(b);null!=B?null==(g=this.mediaTheme)||g.setAttribute(N,B):null==(M=this.mediaTheme)||M.removeAttribute(N)};new MutationObserver(b=>{for(let{attributeName:g}of b)e(g)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},uh=new WeakSet,up=function(){var b;this.addEventListener("error",b=>{let{detail:g}=b;if(g instanceof er||(g=new er(g.message,g.code,g.fatal)),!(null!=g&&g.fatal)){mux_player_dist_N(g),g.data&&mux_player_dist_N(`${g.name} data:`,g.data);return}let{dialog:M,devlog:N}=mux_player_dist_he(g,!window.navigator.onLine,this.playbackId,this.playbackToken);N.message&&mux_player_dist_Se(N),dist_x(g),g.data&&dist_x(`${g.name} data:`,g.data),f(this,uo,ul).call(this,{isDialogOpen:!0,dialog:M})}),this.media&&(this.media.errorTranslator=(b={})=>{var g,M,N;if(!((null==(g=this.media)?void 0:g.error)instanceof er))return b;let{devlog:B}=mux_player_dist_he(null==(M=this.media)?void 0:M.error,!window.navigator.onLine,this.playbackId,this.playbackToken,!1);return{player_error_code:null==(N=this.media)?void 0:N.error.code,player_error_message:B.message?String(B.message):b.player_error_message,player_error_context:B.context?String(B.context):b.player_error_context}}),null==(b=this.media)||b.addEventListener("error",b=>{var g,M;let{detail:N}=b;if(!N){let{message:b,code:B}=null!=(M=null==(g=this.media)?void 0:g.error)?M:{};N=new er(b,B)}null!=N&&N.fatal&&this.dispatchEvent(new CustomEvent("error",{detail:N}))})},u_=new WeakSet,uv=function(){var b,g,M,N;let e=()=>f(this,ud,uu).call(this);null==(g=null==(b=this.media)?void 0:b.textTracks)||g.addEventListener("addtrack",e),null==(N=null==(M=this.media)?void 0:M.textTracks)||N.addEventListener("removetrack",e)},ub=new WeakSet,ug=function(){var b,g;if(!/Firefox/i.test(navigator.userAgent))return;let M,N=new WeakMap,o=()=>this.streamType===es.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,s=(b,g,M=!1)=>{o()||Array.from(b&&b.activeCues||[]).forEach(b=>{if(!(!b.snapToLines||b.line<-5||b.line>=0&&b.line<10)){if(!g||this.paused){let g=b.text.split(`
`).length,B=-3;this.streamType===es.LIVE&&(B=-2);let W=B-g;(b.line!==W||M)&&(N.has(b)||N.set(b,b.line),b.line=W)}else setTimeout(()=>{b.line=N.get(b)||"auto"},500)}})},m=()=>{var b,g;s(M,null!=(g=null==(b=this.mediaController)?void 0:b.hasAttribute(eJ.USER_INACTIVE))&&g)},p=()=>{var b,g;let N=Array.from((null==(g=null==(b=this.mediaController)?void 0:b.media)?void 0:g.textTracks)||[]).filter(b=>["subtitles","captions"].includes(b.kind)&&"showing"===b.mode)[0];N!==M&&(null==M||M.removeEventListener("cuechange",m)),null==(M=N)||M.addEventListener("cuechange",m),s(M,dist_u(this,d6))};p(),null==(b=this.textTracks)||b.addEventListener("change",p),null==(g=this.textTracks)||g.addEventListener("addtrack",p),this.addEventListener("userinactivechange",()=>{var b,g;let N=null==(g=null==(b=this.mediaController)?void 0:b.hasAttribute(eJ.USER_INACTIVE))||g;dist_u(this,d6)!==N&&(dist_C(this,d6,N),s(M,dist_u(this,d6)))})},dg.customElements.get("mux-player")||(dg.customElements.define("mux-player",uT),dg.MuxPlayerElement=uT);var uw={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},mux_player_react_dist_J=b=>null==b,mux_player_react_dist_Y=(b,g)=>!mux_player_react_dist_J(g)&&b in g,mux_player_react_dist_$=b=>b.replace(/[A-Z]/g,b=>`-${b.toLowerCase()}`),mux_player_react_dist_Q=(b,g)=>{if(!("boolean"==typeof g&&!g))return mux_player_react_dist_Y(b,uw)?uw[b]:/[A-Z]/.test(b)?mux_player_react_dist_$(b):b},mux_player_react_dist_X=(b,g)=>"boolean"==typeof b?"":b,p=(b={})=>Object.entries(b).reduce((b,[g,M])=>{let N=mux_player_react_dist_Q(g,M);if(!N)return b;let B=mux_player_react_dist_X(M,g);return b[N]=B,b},{}),dist_m=(...b)=>{let g=(0,W.useRef)(null);return(0,W.useEffect)(()=>{b.forEach(b=>{b&&("function"==typeof b?b(g.current):b.current=g.current)})},[b]),g},uS=Object.prototype.hasOwnProperty,mux_player_react_dist_re=(b,g)=>{if(Object.is(b,g))return!0;if("object"!=typeof b||null===b||"object"!=typeof g||null===g)return!1;if(Array.isArray(b))return!!Array.isArray(g)&&b.length===g.length&&b.some((b,M)=>g[M]===b);let M=Object.keys(b),N=Object.keys(g);if(M.length!==N.length)return!1;for(let N=0;N<M.length;N++)if(!uS.call(g,M[N])||!Object.is(b[M[N]],g[M[N]]))return!1;return!0},d=(b,g,M)=>!mux_player_react_dist_re(g,b[M]),mux_player_react_dist_ae=(b,g,M)=>{b[M]=g},dist_i=(b,g,M,N=mux_player_react_dist_ae,B=d)=>(0,W.useEffect)(()=>{let W=null==M?void 0:M.current;W&&B(W,g,b)&&N(W,g,b)},[null==M?void 0:M.current,g]),uC=(()=>{try{return"2.4.1"}catch{}return"UNKNOWN"})(),uI=W.forwardRef(({children:b,...g},M)=>W.createElement("mux-player",p({...g,ref:M}),b)),r=(b,g,M)=>(0,W.useEffect)(()=>{let N=null==g?void 0:g.current;if(!(!N||!M))return N.addEventListener(b,M),()=>{N.removeEventListener(b,M)}},[null==g?void 0:g.current,M]),mux_player_react_dist_de=(b,g)=>{let{onAbort:M,onCanPlay:N,onCanPlayThrough:B,onEmptied:W,onLoadStart:K,onLoadedData:Y,onLoadedMetadata:et,onProgress:er,onDurationChange:en,onVolumeChange:es,onRateChange:eo,onResize:el,onWaiting:ed,onPlay:eu,onPlaying:ec,onTimeUpdate:em,onPause:eh,onSeeking:ep,onSeeked:e_,onStalled:ev,onSuspend:eb,onEnded:eg,onError:ef,onCuePointChange:eE,onCuePointsChange:ey,metadata:eA,tokens:ek,paused:eT,playbackId:ew,playbackRates:eS,currentTime:eC,themeProps:eI,extraSourceParams:eM,_hlsConfig:ex,...eR}=g;return dist_i("playbackRates",eS,b),dist_i("metadata",eA,b),dist_i("extraSourceParams",eM,b),dist_i("_hlsConfig",ex,b),dist_i("themeProps",eI,b),dist_i("tokens",ek,b),dist_i("playbackId",ew,b),dist_i("paused",eT,b,(b,g)=>{null!=g&&(g?b.pause():b.play())},(b,g,M)=>(!b.hasAttribute("autoplay")||!!b.hasPlayed)&&d(b,g,M)),dist_i("currentTime",eC,b,(b,g)=>{null!=g&&(b.currentTime=g)}),r("abort",b,M),r("canplay",b,N),r("canplaythrough",b,B),r("emptied",b,W),r("loadstart",b,K),r("loadeddata",b,Y),r("loadedmetadata",b,et),r("progress",b,er),r("durationchange",b,en),r("volumechange",b,es),r("ratechange",b,eo),r("resize",b,el),r("waiting",b,ed),r("play",b,eu),r("playing",b,ec),r("timeupdate",b,em),r("pause",b,eh),r("seeking",b,ep),r("seeked",b,e_),r("stalled",b,ev),r("suspend",b,eb),r("ended",b,eg),r("error",b,ef),r("cuepointchange",b,eE),r("cuepointschange",b,ey),[eR]},uM=W.forwardRef((b,g)=>{let M=(0,W.useRef)(null),N=dist_m(M,g),[B]=mux_player_react_dist_de(M,b);return W.createElement(uI,{ref:N,playerSoftwareName:"mux-player-react",playerSoftwareVersion:uC,...B})})}}]);