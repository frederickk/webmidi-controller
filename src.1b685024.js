parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"k6zQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){this.element_=null,this.label_=null,this.value_=0,this.selector_=e,this.mh_=t,this.selector_&&(this.element_=document.querySelector(this.selector_),this.label_=document.querySelector(this.selector_+"-label")),this.attach_()}return Object.defineProperty(e.prototype,"value",{get:function(){return new Number(this.value_)},enumerable:!0,configurable:!0}),e.prototype.attach_=function(){this.element_&&this.element_.addEventListener("input",this.changeListener_.bind(this))},e.prototype.changeListener_=function(){var e=document.querySelector(this.selector_+"-val1"),t=new Number(e.value||0);this.element_&&(this.value_=new Number(this.element_.value),this.label_&&t&&(this.label_.innerText=this.value_+" | "+t),this.mh_.sendMessage(this.mh_.CC,t,this.value))},e}();exports.Arc=e;
},{}],"oGEl":[function(require,module,exports) {
"use strict";var t=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(o,s){function r(t){try{c(i.next(t))}catch(e){s(e)}}function u(t){try{c(i.throw(t))}catch(e){s(e)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(r,u)}c((i=i.apply(t,e||[])).next())})},e=this&&this.__generator||function(t,e){var n,i,o,s,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(s){return function(u){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(o=2&s[0]?i.return:s[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;switch(i=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return r.label++,{value:s[1],done:!1};case 5:r.label++,i=s[1],s=[0];continue;case 7:s=r.ops.pop(),r.trys.pop();continue;default:if(!(o=(o=r.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){r=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){r.label=s[1];break}if(6===s[0]&&r.label<o[1]){r.label=o[1],o=s;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(s);break}o[2]&&r.ops.pop(),r.trys.pop();continue}s=e.call(t,r)}catch(u){s=[6,u],i=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}};Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){function n(){this.NOTE_ON=144,this.NOTE_OFF=128,this.CC=176,this.midiIn_=[],this.midiOut_=[],this.selectIn_=null,this.selectOut_=null,this.selectIn_=document.querySelector("#midi-input"),this.selectOut_=document.querySelector("#midi-output")}return n.prototype.midiReady_=function(t){var e=this;t.addEventListener("statechange",function(){e.initDevices_(t)}),this.initDevices_(t)},n.prototype.initDevices_=function(t){this.midiIn_=[],this.midiOut_=[];for(var e=t.inputs.values(),n=e.next();n&&!n.done;n=e.next())this.midiIn_.push(n.value);for(var i=t.outputs.values(),o=i.next();o&&!o.done;o=i.next())this.midiOut_.push(o.value);this.displayDevices_()},n.prototype.displayDevices_=function(){this.selectIn_&&(this.selectIn_.innerHTML=this.midiIn_.map(function(t){return"<option>"+t.name+"</option>"}).join("")),this.selectOut_&&(this.selectOut_.innerHTML=this.midiOut_.map(function(t){return"<option>"+t.name+"</option>"}).join(""))},n.prototype.connect=function(){return t(this,void 0,void 0,function(){var t=this;return e(this,function(e){switch(e.label){case 0:return[4,navigator.requestMIDIAccess().then(function(e){return t.midiReady_(e)},function(t){return console.log("Something went wrong",t)})];case 1:return e.sent(),[2]}})})},n.prototype.noteOn=function(t,e){var n=[this.NOTE_ON,t,e];this.selectOut_&&this.midiOut_[this.selectOut_.selectedIndex].send(n)},n.prototype.noteOff=function(t,e){var n=[this.NOTE_ON,t,0];this.selectOut_&&this.midiOut_[this.selectOut_.selectedIndex].send(n,Date.now()+e)},n.prototype.sendMessage=function(t,e,n){this.selectOut_&&this.midiOut_[this.selectOut_.selectedIndex].send([t,e,n])},n}();exports.MidiHelper=n;
},{}],"QCba":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./ts/arc"),t=require("./ts/midihelper"),a=function(){function a(){this.saveButton_=null,this.clearButton_=null,this.saveButton_=document.querySelector("#save-button"),this.clearButton_=document.querySelector("#clear-button");var a=new t.MidiHelper;a.connect(),document.querySelectorAll(".arc").forEach(function(t){new e.Arc("#"+t.id,a)}),this.fetchState(),this.attach_()}return a.prototype.saveState=function(){var e=this;console.log("Saving state in localStorage"),document.querySelectorAll("*[data-save]").forEach(function(t){e.localStorageSaveHandler_(t)})},a.prototype.fetchState=function(){var e=this;document.querySelectorAll("*[data-save]").forEach(function(t){var a=t.innerText?"input":"change";t.addEventListener(a,function(){e.localStorageSaveHandler_(t)});var o=localStorage.getItem(t.id);o?t.value?t.value=o:t.innerText&&(t.innerText=o):e.localStorageSaveHandler_(t)});var t=document.querySelector("#midi-output");t.selectedIndex=new Number(localStorage.getItem(t.id))},a.prototype.attach_=function(){this.clearButton_&&this.clearButton_.addEventListener("click",function(){console.log("Clearing saved localStorage states"),localStorage.clear()}),this.saveButton_&&this.saveButton_.addEventListener("click",this.saveState.bind(this));var e=document.querySelector("#midi-output");e.addEventListener("change",function(){localStorage.setItem(e.id,e.selectedIndex.toString())})},a.prototype.localStorageSaveHandler_=function(e){localStorage.setItem(e.id,e.value||e.innerText)},a}();exports.WebmidiController=a,new a;
},{"./ts/arc":"k6zQ","./ts/midihelper":"oGEl"}]},{},["QCba"], null)
//# sourceMappingURL=src.1b685024.js.map