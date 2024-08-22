!function(){"use strict";let e,t;function n(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,s)}c((r=r.apply(e,t||[])).next())})}"function"==typeof SuppressedError&&SuppressedError;var r,i,o,a,s,c,d,l,u,y,p,h,f,g,v,m,w,b,S,I="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},L={exports:{}};r=function(){var e=function(){},t="undefined",n=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),r=["trace","debug","info","warn","error"],i={},o=null;function a(e,t){var n=e[t];if("function"==typeof n.bind)return n.bind(e);try{return Function.prototype.bind.call(n,e)}catch(t){return function(){return Function.prototype.apply.apply(n,[e,arguments])}}}function s(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function c(){for(var n=this.getLevel(),i=0;i<r.length;i++){var o=r[i];this[o]=i<n?e:this.methodFactory(o,n,this.name)}if(this.log=this.debug,typeof console===t&&n<this.levels.SILENT)return"No console available for logging"}function d(e){return function(){typeof console!==t&&(c.call(this),this[e].apply(this,arguments))}}function l(r,i,o){var c;return"debug"===(c=r)&&(c="log"),typeof console!==t&&("trace"===c&&n?s:void 0!==console[c]?a(console,c):void 0!==console.log?a(console,"log"):e)||d.apply(this,arguments)}function u(e,n){var a,s,d,u=this,y="loglevel";function p(){var e;if(typeof window!==t&&y){try{e=window.localStorage[y]}catch(e){}if(typeof e===t)try{var n=window.document.cookie,r=encodeURIComponent(y),i=n.indexOf(r+"=");-1!==i&&(e=/^([^;]+)/.exec(n.slice(i+r.length+1))[1])}catch(e){}return void 0===u.levels[e]&&(e=void 0),e}}function h(e){var t=e;if("string"==typeof t&&void 0!==u.levels[t.toUpperCase()]&&(t=u.levels[t.toUpperCase()]),"number"==typeof t&&t>=0&&t<=u.levels.SILENT)return t;throw TypeError("log.setLevel() called with invalid level: "+e)}"string"==typeof e?y+=":"+e:"symbol"==typeof e&&(y=void 0),u.name=e,u.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},u.methodFactory=n||l,u.getLevel=function(){return null!=d?d:null!=s?s:a},u.setLevel=function(e,n){return d=h(e),!1!==n&&function(e){var n=(r[e]||"silent").toUpperCase();if(typeof window!==t&&y){try{window.localStorage[y]=n;return}catch(e){}try{window.document.cookie=encodeURIComponent(y)+"="+n+";"}catch(e){}}}(d),c.call(u)},u.setDefaultLevel=function(e){s=h(e),p()||u.setLevel(e,!1)},u.resetLevel=function(){d=null,function(){if(typeof window!==t&&y){try{window.localStorage.removeItem(y)}catch(e){}try{window.document.cookie=encodeURIComponent(y)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}(),c.call(u)},u.enableAll=function(e){u.setLevel(u.levels.TRACE,e)},u.disableAll=function(e){u.setLevel(u.levels.SILENT,e)},u.rebuild=function(){if(o!==u&&(a=h(o.getLevel())),c.call(u),o===u)for(var e in i)i[e].rebuild()},a=h(o?o.getLevel():"WARN");var f=p();null!=f&&(d=h(f)),c.call(u)}(o=new u).getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw TypeError("You must supply a name when creating a logger.");var t=i[e];return t||(t=i[e]=new u(e,o.methodFactory)),t};var y=typeof window!==t?window.log:void 0;return o.noConflict=function(){return typeof window!==t&&window.log===o&&(window.log=y),o},o.getLoggers=function(){return i},o.default=o,o},L.exports?L.exports=r():I.log=r();var E=L.exports;(i=y||(y={}))[i.trace=0]="trace",i[i.debug=1]="debug",i[i.info=2]="info",i[i.warn=3]="warn",i[i.error=4]="error",i[i.silent=5]="silent",(o=p||(p={})).Default="livekit",o.Room="livekit-room",o.Participant="livekit-participant",o.Track="livekit-track",o.Publication="livekit-track-publication",o.Engine="livekit-engine",o.Signal="livekit-signal",o.PCManager="livekit-pc-manager",o.PCTransport="livekit-pc-transport",o.E2EE="lk-e2ee";let k=E.getLogger("livekit");Object.values(p).map(e=>E.getLogger(e)),k.setDefaultLevel(y.info);let C=E.getLogger("lk-e2ee"),K="AES-GCM",_={key:10,delta:3,audio:1,empty:0};class T extends Error{constructor(e,t){super(t||"an error has occured"),this.code=e}}(a=h||(h={})).PermissionDenied="PermissionDenied",a.NotFound="NotFound",a.DeviceInUse="DeviceInUse",a.Other="Other",(s=h||(h={})).getFailure=function(e){if(e&&"name"in e)return"NotFoundError"===e.name||"DevicesNotFoundError"===e.name?s.NotFound:"NotAllowedError"===e.name||"PermissionDeniedError"===e.name?s.PermissionDenied:"NotReadableError"===e.name||"TrackStartError"===e.name?s.DeviceInUse:s.Other},(c=f||(f={}))[c.InvalidKey=0]="InvalidKey",c[c.MissingKey=1]="MissingKey",c[c.InternalError=2]="InternalError";class A extends T{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f.InternalError;super(40,e),this.reason=t}}(d=g||(g={})).SetKey="setKey",d.RatchetRequest="ratchetRequest",d.KeyRatcheted="keyRatcheted",(v||(v={})).KeyRatcheted="keyRatcheted",(l=m||(m={})).ParticipantEncryptionStatusChanged="participantEncryptionStatusChanged",l.EncryptionError="encryptionError",(w||(w={})).Error="cryptorError";var P={exports:{}},x="object"==typeof Reflect?Reflect:null,R=x&&"function"==typeof x.apply?x.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};b=x&&"function"==typeof x.ownKeys?x.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var F=Number.isNaN||function(e){return e!=e};function O(){O.init.call(this)}P.exports=O,P.exports.once=function(e,t){return new Promise(function(n,r){var i;function o(n){e.removeListener(t,a),r(n)}function a(){"function"==typeof e.removeListener&&e.removeListener("error",o),n([].slice.call(arguments))}X(e,t,a,{once:!0}),"error"!==t&&(i={once:!0},"function"==typeof e.on&&X(e,"error",o,i))})},O.EventEmitter=O,O.prototype._events=void 0,O.prototype._eventsCount=0,O.prototype._maxListeners=void 0;var U=10;function D(e){if("function"!=typeof e)throw TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function M(e){return void 0===e._maxListeners?O.defaultMaxListeners:e._maxListeners}function N(e,t,n,r){if(D(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),a=o[t]),void 0===a)a=o[t]=n,++e._eventsCount;else if("function"==typeof a?a=o[t]=r?[n,a]:[a,n]:r?a.unshift(n):a.push(n),(i=M(e))>0&&a.length>i&&!a.warned){a.warned=!0;var i,o,a,s=Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=e,s.type=t,s.count=a.length,console&&console.warn&&console.warn(s)}return e}function j(){if(!this.fired)return(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0==arguments.length)?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function B(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=j.bind(r);return i.listener=n,r.wrapFn=i,i}function q(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):z(i,i.length)}function V(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function z(e,t){for(var n=Array(t),r=0;r<t;++r)n[r]=e[r];return n}function X(e,t,n,r){if("function"==typeof e.on)r.once?e.once(t,n):e.on(t,n);else if("function"==typeof e.addEventListener)e.addEventListener(t,function i(o){r.once&&e.removeEventListener(t,i),n(o)});else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e)}Object.defineProperty(O,"defaultMaxListeners",{enumerable:!0,get:function(){return U},set:function(e){if("number"!=typeof e||e<0||F(e))throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");U=e}}),O.init=function(){(void 0===this._events||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},O.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||F(e))throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},O.prototype.getMaxListeners=function(){return M(this)},O.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var o,a=Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var s=i[e];if(void 0===s)return!1;if("function"==typeof s)R(s,this,t);else for(var c=s.length,d=z(s,c),n=0;n<c;++n)R(d[n],this,t);return!0},O.prototype.addListener=function(e,t){return N(this,e,t,!1)},O.prototype.on=O.prototype.addListener,O.prototype.prependListener=function(e,t){return N(this,e,t,!0)},O.prototype.once=function(e,t){return D(t),this.on(e,B(this,e,t)),this},O.prototype.prependOnceListener=function(e,t){return D(t),this.prependListener(e,B(this,e,t)),this},O.prototype.removeListener=function(e,t){var n,r,i,o,a;if(D(t),void 0===(r=this._events)||void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){a=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,a||t)}return this},O.prototype.off=O.prototype.removeListener,O.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0==arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0==arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},O.prototype.listeners=function(e){return q(this,e,!0)},O.prototype.rawListeners=function(e){return q(this,e,!1)},O.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):V.call(e,t)},O.prototype.listenerCount=V,O.prototype.eventNames=function(){return this._eventsCount>0?b(this._events):[]};var H=P.exports;function G(e,t){let n=new TextEncoder().encode(t);switch(e){case"HKDF":return{name:"HKDF",salt:n,hash:"SHA-256",info:new ArrayBuffer(128)};case"PBKDF2":return{name:"PBKDF2",salt:n,hash:"SHA-256",iterations:1e5};default:throw Error("algorithm ".concat(e," is currently unsupported"))}}function W(e,t){return n(this,void 0,void 0,function*(){let n=G(e.algorithm.name,t),r=yield crypto.subtle.deriveKey(n,e,{name:K,length:128},!1,["encrypt","decrypt"]);return{material:e,encryptionKey:r}})}class Y{constructor(){this.consecutiveSifCount=0,this.lastSifReceivedAt=0,this.userFramesSinceSif=0}recordSif(){var e;this.consecutiveSifCount+=1,null!==(e=this.sifSequenceStartedAt)&&void 0!==e||(this.sifSequenceStartedAt=Date.now()),this.lastSifReceivedAt=Date.now()}recordUserFrame(){void 0!==this.sifSequenceStartedAt&&(this.userFramesSinceSif+=1,(this.userFramesSinceSif>this.consecutiveSifCount||Date.now()-this.lastSifReceivedAt>2e3)&&this.reset())}isSifAllowed(){return this.consecutiveSifCount<100&&(void 0===this.sifSequenceStartedAt||Date.now()-this.sifSequenceStartedAt<2e3)}reset(){this.userFramesSinceSif=0,this.consecutiveSifCount=0,this.sifSequenceStartedAt=void 0}}let Q=new Map;class J extends H.EventEmitter{encodeFunction(e,t){throw Error("not implemented for subclass")}decodeFunction(e,t){throw Error("not implemented for subclass")}}class Z extends J{constructor(e){var t;super(),this.sendCounts=new Map,this.keys=e.keys,this.participantIdentity=e.participantIdentity,this.rtpMap=new Map,this.keyProviderOptions=e.keyProviderOptions,this.sifTrailer=null!==(t=e.sifTrailer)&&void 0!==t?t:Uint8Array.from([]),this.sifGuard=new Y}get logContext(){return{participant:this.participantIdentity,mediaTrackId:this.trackId,fallbackCodec:this.videoCodec}}setParticipant(e,t){C.debug("setting new participant on cryptor",Object.assign(Object.assign({},this.logContext),{participant:e})),this.participantIdentity&&C.error("cryptor has already a participant set, participant should have been unset before",Object.assign({},this.logContext)),this.participantIdentity=e,this.keys=t,this.sifGuard.reset()}unsetParticipant(){C.debug("unsetting participant",this.logContext),this.participantIdentity=void 0}isEnabled(){return this.participantIdentity?Q.get(this.participantIdentity):void 0}getParticipantIdentity(){return this.participantIdentity}getTrackId(){return this.trackId}setVideoCodec(e){this.videoCodec=e}setRtpMap(e){this.rtpMap=e}setupTransform(e,t,n,r,i){i&&(C.info("setting codec on cryptor to",{codec:i}),this.videoCodec=i),C.debug("Setting up frame cryptor transform",Object.assign({operation:e,passedTrackId:r,codec:i},this.logContext));let o=new TransformStream({transform:("encode"===e?this.encodeFunction:this.decodeFunction).bind(this)});t.pipeThrough(o).pipeTo(n).catch(e=>{C.warn(e),this.emit(w.Error,e instanceof A?e:new A(e.message))}),this.trackId=r}setSifTrailer(e){C.debug("setting SIF trailer",Object.assign(Object.assign({},this.logContext),{trailer:e})),this.sifTrailer=e}encodeFunction(e,t){return n(this,void 0,void 0,function*(){var n;if(!this.isEnabled()||0===e.data.byteLength)return t.enqueue(e);let r=this.keys.getKeySet();if(!r)throw TypeError("key set not found for ".concat(this.participantIdentity," at index ").concat(this.keys.getCurrentKeyIndex()));let{encryptionKey:i}=r,o=this.keys.getCurrentKeyIndex();if(i){let r=this.makeIV(null!==(n=e.getMetadata().synchronizationSource)&&void 0!==n?n:-1,e.timestamp),s=this.getUnencryptedBytes(e),c=new Uint8Array(e.data,0,s.unencryptedBytes),d=new Uint8Array(2);d[0]=12,d[1]=o;try{let n=yield crypto.subtle.encrypt({name:K,iv:r,additionalData:new Uint8Array(e.data,0,c.byteLength)},i,new Uint8Array(e.data,s.unencryptedBytes)),o=new Uint8Array(n.byteLength+r.byteLength+d.byteLength);o.set(new Uint8Array(n)),o.set(new Uint8Array(r),n.byteLength),o.set(d,n.byteLength+r.byteLength),s.isH264&&(o=function(e){let t=[];for(var n=0,r=0;r<e.length;++r){var i=e[r];i<=3&&n>=2&&(t.push(3),n=0),t.push(i),0==i?++n:n=0}return new Uint8Array(t)}(o));var a=new Uint8Array(c.byteLength+o.byteLength);return a.set(c),a.set(o,c.byteLength),e.data=a.buffer,t.enqueue(e)}catch(e){C.error(e)}}else C.debug("failed to decrypt, emitting error",this.logContext),this.emit(w.Error,new A("encryption key missing for encoding",f.MissingKey))})}decodeFunction(e,t){return n(this,void 0,void 0,function*(){if(!this.isEnabled()||0===e.data.byteLength)return C.debug("skipping empty frame",this.logContext),this.sifGuard.recordUserFrame(),t.enqueue(e);if(function(e,t){if(0===t.byteLength)return!1;let n=new Uint8Array(e.slice(e.byteLength-t.byteLength));return t.every((e,t)=>e===n[t])}(e.data,this.sifTrailer))return(C.debug("enqueue SIF",this.logContext),this.sifGuard.recordSif(),this.sifGuard.isSifAllowed())?(e.data=e.data.slice(0,e.data.byteLength-this.sifTrailer.byteLength),t.enqueue(e)):void C.warn("SIF limit reached, dropping frame");this.sifGuard.recordUserFrame();let n=new Uint8Array(e.data)[e.data.byteLength-1];if(this.keys.getKeySet(n)&&this.keys.hasValidKey)try{let r=yield this.decryptFrame(e,n);if(this.keys.decryptionSuccess(),r)return t.enqueue(r)}catch(e){e instanceof A&&e.reason===f.InvalidKey?this.keys.hasValidKey&&(this.emit(w.Error,e),this.keys.decryptionFailure()):C.warn("decoding frame failed",{error:e})}else!this.keys.getKeySet(n)&&this.keys.hasValidKey&&(C.warn("skipping decryption due to missing key at index ".concat(n)),this.emit(w.Error,new A("missing key at index ".concat(n," for participant ").concat(this.participantIdentity),f.MissingKey)))})}decryptFrame(e,t){return n(this,arguments,void 0,function(e,t){var n=this;let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{ratchetCount:0};return function*(){var o;let a=n.keys.getKeySet(t);if(!i.encryptionKey&&!a)throw TypeError("no encryption key found for decryption of ".concat(n.participantIdentity));let s=n.getUnencryptedBytes(e);try{let t=new Uint8Array(e.data,0,s.unencryptedBytes);var c=new Uint8Array(e.data,t.length,e.data.byteLength-t.length);if(s.isH264&&function(e){for(var t=0;t<e.length-3;t++)if(0==e[t]&&0==e[t+1]&&3==e[t+2])return!0;return!1}(c)){c=function(e){let t=[];for(var n=e.length,r=0;r<e.length;)!(n-r>=3)||e[r]||e[r+1]||3!=e[r+2]?t.push(e[r++]):(t.push(e[r++]),t.push(e[r++]),r++);return new Uint8Array(t)}(c);let n=new Uint8Array(t.byteLength+c.byteLength);n.set(t),n.set(c,t.byteLength),e.data=n.buffer}let n=new Uint8Array(e.data,e.data.byteLength-2,2),r=n[0],d=new Uint8Array(e.data,e.data.byteLength-r-n.byteLength,r),l=t.byteLength,u=e.data.byteLength-(t.byteLength+r+n.byteLength),y=yield crypto.subtle.decrypt({name:K,iv:d,additionalData:new Uint8Array(e.data,0,t.byteLength)},null!==(o=i.encryptionKey)&&void 0!==o?o:a.encryptionKey,new Uint8Array(e.data,l,u)),p=new ArrayBuffer(t.byteLength+y.byteLength),h=new Uint8Array(p);return h.set(new Uint8Array(e.data,0,t.byteLength)),h.set(new Uint8Array(y),t.byteLength),e.data=p,e}catch(o){if(n.keyProviderOptions.ratchetWindowSize>0){if(i.ratchetCount<n.keyProviderOptions.ratchetWindowSize){let o;if(C.debug("ratcheting key attempt ".concat(i.ratchetCount," of ").concat(n.keyProviderOptions.ratchetWindowSize,", for kind ").concat(e instanceof RTCEncodedAudioFrame?"audio":"video")),(null!=r?r:a)===n.keys.getKeySet(t)){let e=yield n.keys.ratchetKey(t,!1);o=yield W(e,n.keyProviderOptions.ratchetSalt)}let s=yield n.decryptFrame(e,t,r||a,{ratchetCount:i.ratchetCount+1,encryptionKey:null==o?void 0:o.encryptionKey});return s&&o&&(null!=r?r:a)===n.keys.getKeySet(t)&&(n.keys.setKeySet(o,t,!0),n.keys.setCurrentKeyIndex(t)),s}throw C.warn("maximum ratchet attempts exceeded"),new A("valid key missing for participant ".concat(n.participantIdentity),f.InvalidKey)}throw new A("Decryption failed: ".concat(o.message),f.InvalidKey)}}()})}makeIV(e,t){var n;let r=new ArrayBuffer(12),i=new DataView(r);this.sendCounts.has(e)||this.sendCounts.set(e,Math.floor(65535*Math.random()));let o=null!==(n=this.sendCounts.get(e))&&void 0!==n?n:0;return i.setUint32(0,e),i.setUint32(4,t),i.setUint32(8,t-o%65535),this.sendCounts.set(e,o+1),r}getUnencryptedBytes(e){var t,n={unencryptedBytes:0,isH264:!1};if(!("type"in e))return n.unencryptedBytes=_.audio,n;{let r=null!==(t=this.getVideoCodec(e))&&void 0!==t?t:this.videoCodec;if(r!==this.detectedCodec&&(C.debug("detected different codec",Object.assign({detectedCodec:r,oldCodec:this.detectedCodec},this.logContext)),this.detectedCodec=r),"av1"===r||"vp9"===r)throw Error("".concat(r," is not yet supported for end to end encryption"));if("vp8"===r)return n.unencryptedBytes=_[e.type],n;let i=new Uint8Array(e.data);try{let e=function(e){let t=[],n=0,r=0,i=e.length-2;for(;r<i;){for(;r<i&&!(0===e[r]&&0===e[r+1]&&1===e[r+2]);)r++;r>=i&&(r=e.length);let o=r;for(;o>n&&0===e[o-1];)o--;if(0===n){if(o!==n)throw TypeError("byte stream contains leading data")}else t.push(n);n=r+=3}return t}(i);if(n.isH264="h264"===r||e.some(e=>[S.SLICE_IDR,S.SLICE_NON_IDR].includes(i[e]&$)),n.isH264){for(let t of e)switch(i[t]&$){case S.SLICE_IDR:case S.SLICE_NON_IDR:return n.unencryptedBytes=t+2,n}throw TypeError("Could not find NALU")}}catch(e){}return n.unencryptedBytes=_[e.type],n}}getVideoCodec(e){if(0===this.rtpMap.size)return;let t=e.getMetadata().payloadType;return t?this.rtpMap.get(t):void 0}}let $=31;(u=S||(S={}))[u.SLICE_NON_IDR=1]="SLICE_NON_IDR",u[u.SLICE_PARTITION_A=2]="SLICE_PARTITION_A",u[u.SLICE_PARTITION_B=3]="SLICE_PARTITION_B",u[u.SLICE_PARTITION_C=4]="SLICE_PARTITION_C",u[u.SLICE_IDR=5]="SLICE_IDR",u[u.SEI=6]="SEI",u[u.SPS=7]="SPS",u[u.PPS=8]="PPS",u[u.AUD=9]="AUD",u[u.END_SEQ=10]="END_SEQ",u[u.END_STREAM=11]="END_STREAM",u[u.FILLER_DATA=12]="FILLER_DATA",u[u.SPS_EXT=13]="SPS_EXT",u[u.PREFIX_NALU=14]="PREFIX_NALU",u[u.SUBSET_SPS=15]="SUBSET_SPS",u[u.DPS=16]="DPS",u[u.SLICE_AUX=19]="SLICE_AUX",u[u.SLICE_EXT=20]="SLICE_EXT",u[u.SLICE_LAYER_EXT=21]="SLICE_LAYER_EXT";class ee extends H.EventEmitter{get hasValidKey(){return this._hasValidKey}constructor(e,t){if(super(),this.decryptionFailureCount=0,this._hasValidKey=!0,this.currentKeyIndex=0,t.keyringSize<1||t.keyringSize>255)throw TypeError("Keyring size needs to be between 1 and 256");this.cryptoKeyRing=Array(t.keyringSize).fill(void 0),this.keyProviderOptions=t,this.ratchetPromiseMap=new Map,this.participantIdentity=e,this.resetKeyStatus()}decryptionFailure(){!(this.keyProviderOptions.failureTolerance<0)&&(this.decryptionFailureCount+=1,this.decryptionFailureCount>this.keyProviderOptions.failureTolerance&&(C.warn("key for ".concat(this.participantIdentity," is being marked as invalid")),this._hasValidKey=!1))}decryptionSuccess(){this.resetKeyStatus()}resetKeyStatus(){this.decryptionFailureCount=0,this._hasValidKey=!0}ratchetKey(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],r=null!=e?e:this.getCurrentKeyIndex(),i=this.ratchetPromiseMap.get(r);if(void 0!==i)return i;let o=new Promise((e,i)=>n(this,void 0,void 0,function*(){try{let i=this.getKeySet(r);if(!i)throw TypeError("Cannot ratchet key without a valid keyset of participant ".concat(this.participantIdentity));let o=i.material,a=yield function(e){return n(this,arguments,void 0,function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:K},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"encrypt";return function*(){return crypto.subtle.importKey("raw",e,t,!1,"derive"===n?["deriveBits","deriveKey"]:["encrypt","decrypt"])}()})}((yield function(e,t){return n(this,void 0,void 0,function*(){let n=G(e.algorithm.name,t);return crypto.subtle.deriveBits(n,e,256)})}(o,this.keyProviderOptions.ratchetSalt)),o.algorithm.name,"derive");t&&(this.setKeyFromMaterial(a,r,!0),this.emit(v.KeyRatcheted,a,this.participantIdentity,r)),e(a)}catch(e){i(e)}finally{this.ratchetPromiseMap.delete(r)}}));return this.ratchetPromiseMap.set(r,o),o}setKey(e){return n(this,arguments,void 0,function(e){var t=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function*(){yield t.setKeyFromMaterial(e,n),t.resetKeyStatus()}()})}setKeyFromMaterial(e,t){return n(this,arguments,void 0,function(e,t){var n=this;let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function*(){let i=yield W(e,n.keyProviderOptions.ratchetSalt),o=t>=0?t%n.cryptoKeyRing.length:n.currentKeyIndex;C.debug("setting new key with index ".concat(t),{usage:e.usages,algorithm:e.algorithm,ratchetSalt:n.keyProviderOptions.ratchetSalt}),n.setKeySet(i,o,r),o>=0&&(n.currentKeyIndex=o)}()})}setKeySet(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.cryptoKeyRing[t%this.cryptoKeyRing.length]=e,n&&this.emit(v.KeyRatcheted,e.material,this.participantIdentity,t)}setCurrentKeyIndex(e){return n(this,void 0,void 0,function*(){this.currentKeyIndex=e%this.cryptoKeyRing.length,this.resetKeyStatus()})}getCurrentKeyIndex(){return this.currentKeyIndex}getKeySet(e){return this.cryptoKeyRing[null!=e?e:this.currentKeyIndex]}}let et=[],en=new Map,er=!1,ei={sharedKey:!1,ratchetSalt:"LKFrameEncryptionKey",ratchetWindowSize:8,failureTolerance:10,keyringSize:16};function eo(e,n){let r=et.filter(e=>e.getTrackId()===n);if(r.length>1){let t=r.map(e=>({participant:e.getParticipantIdentity()})).join(",");C.error("Found multiple cryptors for the same trackID ".concat(n,". target participant: ").concat(e," "),{participants:t})}let i=r[0];if(i)e!==i.getParticipantIdentity()&&i.setParticipant(e,ea(e));else{if(C.info("creating new cryptor for",{participantIdentity:e}),!ei)throw Error("Missing keyProvider options");(function(e){e.on(w.Error,e=>{postMessage({kind:"error",data:{error:Error("".concat(f[e.reason],": ").concat(e.message))}})})})(i=new Z({participantIdentity:e,keys:ea(e),keyProviderOptions:ei,sifTrailer:t})),et.push(i)}return i}function ea(e){if(er)return es();let t=en.get(e);return t||((t=new ee(e,ei)).on(v.KeyRatcheted,ec),en.set(e,t)),t}function es(){return e||(C.debug("creating new shared key handler"),e=new ee("shared-key",ei)),e}function ec(e,t,n){postMessage({kind:"ratchetKey",data:{participantIdentity:t,keyIndex:n,material:e}})}C.setDefaultLevel("info"),onmessage=e=>{var r,i,o,a,s;let{kind:c,data:d}=e.data;switch(c){case"init":C.setLevel(d.loglevel),C.info("worker initialized"),ei=d.keyProviderOptions,er=!!d.keyProviderOptions.sharedKey,postMessage({kind:"initAck",data:{enabled:!1}});break;case"enable":r=d.enabled,i=d.participantIdentity,C.debug("setting encryption enabled for all tracks of ".concat(i),{enable:r}),Q.set(i,r),C.info("updated e2ee enabled status for ".concat(d.participantIdentity," to ").concat(d.enabled)),postMessage(e.data);break;case"decode":case"encode":eo(d.participantIdentity,d.trackId).setupTransform(c,d.readableStream,d.writableStream,d.trackId,d.codec);break;case"setKey":er?(o=d.key,a=d.keyIndex,C.info("set shared key",{index:a}),es().setKey(o,a)):d.participantIdentity?(C.info("set participant sender key ".concat(d.participantIdentity," index ").concat(d.keyIndex)),ea(d.participantIdentity).setKey(d.key,d.keyIndex)):C.error("no participant Id was provided and shared key usage is disabled");break;case"removeTransform":(function(e,t){let n=et.filter(n=>n.getParticipantIdentity()===t&&n.getTrackId()===e);n.length>1&&C.error("Found multiple cryptors for the same participant and trackID combination",{trackId:e,participantIdentity:t});let r=n[0];r?r.unsetParticipant():C.warn("Could not unset participant on cryptor",{trackId:e,participantIdentity:t})})(d.trackId,d.participantIdentity);break;case"updateCodec":eo(d.participantIdentity,d.trackId).setVideoCodec(d.codec);break;case"setRTPMap":et.forEach(e=>{e.getParticipantIdentity()===d.participantIdentity&&e.setRtpMap(d.map)});break;case"ratchetRequest":(function(e){n(this,void 0,void 0,function*(){if(er){let t=es();yield t.ratchetKey(e.keyIndex),t.resetKeyStatus()}else if(e.participantIdentity){let t=ea(e.participantIdentity);yield t.ratchetKey(e.keyIndex),t.resetKeyStatus()}else C.error("no participant Id was provided for ratchet request and shared key usage is disabled")})})(d);break;case"setSifTrailer":t=s=d.trailer,et.forEach(e=>{e.setSifTrailer(s)})}},self.RTCTransformEvent&&(C.debug("setup transform event"),self.onrtctransform=e=>{let t=e.transformer;C.debug("transformer",t),t.handled=!0;let{kind:n,participantIdentity:r,trackId:i,codec:o}=t.options,a=eo(r,i);C.debug("transform",{codec:o}),a.setupTransform(n,t.readable,t.writable,i,o)})}(),_N_E={};
//# sourceMappingURL=1269.c650c5f50e157fe7.js.map