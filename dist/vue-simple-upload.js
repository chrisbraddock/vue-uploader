!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueUploadFile=t():e.VueUploadFile=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=9)}([function(e,t,n){n(6);var i=n(4)(n(1),n(5),"data-v-63eed17c",null);e.exports=i.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"UploadFile",data:function(){return{file:!1,isDragOver:!1,filedetailsTemplate:'\n\t\t\t<div class="upload-file-details">\n\t\t\t\t<div class="upload-file-thumbnail"></div>\n\t\t\t\t<div class="upload-file-details-body">\n\t\t\t\t\t<span class="upload-file-filename"></span>\n\t\t\t\t\t<button type="button" class="upload-file-remove-file">'+this.cancelButton+'</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="upload-file-message">'+this.uploadedMessage+"</div>"}},props:{message:{type:String,required:!1,default:"Choose a file..."},dragOverMessage:{type:String,required:!1,default:"Drag it here"},uploadedMessage:{type:String,required:!1,default:""},showButton:{type:Boolean,required:!1,default:!1},cancelButton:{type:String,required:!1,default:"Cancel"},buttonTitle:{type:String,required:!1,default:"Send"},buttonClass:{type:Array,required:!1,default:function(){return[]}},itemIndex:{type:String,required:!1,default:"0"},isDragDrop:{type:Boolean,required:!1,default:!1}},computed:{isAdvancedUpload:function(){var e=document.createElement("div");return("draggable"in e||"ondragstart"in e&&"ondrop"in e)&&"FormData"in window&&"FileReader"in window}},mounted:function(){if(this.isDragDrop&&this.isAdvancedUpload){var e=document.getElementById("upload-file"+this.itemIndex);e.addEventListener("dragover",this.dragOver,!1),e.addEventListener("dragenter",this.dragEnter,!1),e.addEventListener("dragleave",this.dragLeave,!1),e.addEventListener("drop",this.drop,!1)}},methods:{changed:function(e){e.preventDefault(),this.file=e.target.files[0],this.addFileThumbnail(),this.$emit("selected-file",this.file)},changeLabel:function(e){var t=e.target.nextElementSibling,n="";n=e.target.value.split("\\").pop(),t.innerHTML=n?n:labelVal},send:function(){this.$emit("send-file",this.file)},dragOver:function(e){e.preventDefault(),this.isDragOver=!0},dragEnter:function(e){this.isDragOver=!0},dragLeave:function(e){this.isDragOver=!1},drop:function(e){e.preventDefault(),this.isDragOver=!1,this.file=e.dataTransfer.files[0],this.addFileThumbnail(),this.$emit("selected-file",this.file)},addFileThumbnail:function(){var e=this.getEmptyPreviewContainer(),t=document.createElement("div"),n=this.file.name.split("."),i=n[n.length-1];t.innerHTML=this.filedetailsTemplate,t.classList.add("upload-file-preview"),t.querySelector(".upload-file-filename").innerHTML=this.file.name,t.querySelector(".upload-file-thumbnail").classList.add("upload-file-"+i),t.querySelector(".upload-file-remove-file").addEventListener("click",this.removeFile),e.appendChild(t)},removeFile:function(e){this.getEmptyPreviewContainer(),document.getElementById("uploadFile"+this.itemIndex).value="",this.$emit("remove-file",this.file),this.file=!1},getEmptyPreviewContainer:function(){var e=document.getElementById("upload-file-preview-container"+this.itemIndex);return e.innerHTML="",e}}}},function(e,t,n){t=e.exports=n(3)(),t.push([e.i,".upload-file .inputfile[data-v-63eed17c]{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}.upload-file .inputfile+label[data-v-63eed17c]{cursor:pointer}.upload-file .inputfile+label[data-v-63eed17c]:hover,.upload-file .inputfile:focus+label[data-v-63eed17c]{color:#30343b}.upload-file .fade-enter-active[data-v-63eed17c],.upload-file .fade-leave-active[data-v-63eed17c]{transition:opacity .5s}.upload-file .fade-enter[data-v-63eed17c],.upload-file .fade-leave-active[data-v-63eed17c]{opacity:0}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(i[a]=!0)}for(r=0;r<t.length;r++){var o=t[r];"number"==typeof o[0]&&i[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(e,t){e.exports=function(e,t,n,i){var r,a=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(r=e,a=e.default);var s="function"==typeof a?a.options:a;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),i){var l=s.computed||(s.computed={});Object.keys(i).forEach(function(e){var t=i[e];l[e]=function(){return t}})}return{esModule:r,exports:a,options:s}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"upload-file",class:{"upload-file-dragdrop":e.isDragDrop,"is-dragover":e.isDragOver},attrs:{id:"upload-file"+e.itemIndex}},[n("input",{staticClass:"inputfile",attrs:{type:"file",name:"uploadFile",id:"uploadFile"+e.itemIndex},on:{change:function(t){e.changed(t)}}}),e._v(" "),n("label",{directives:[{name:"show",rawName:"v-show",value:!e.file,expression:"!file"}],attrs:{for:"uploadFile"+e.itemIndex}},[e.isDragOver?[n("div",{domProps:{innerHTML:e._s(e.dragOverMessage)}})]:[n("div",{domProps:{innerHTML:e._s(e.message)}})]],2),e._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.file,expression:"file"}],staticClass:"upload-file-preview-container",attrs:{id:"upload-file-preview-container"+e.itemIndex}})]),e._v(" "),e.showButton?n("button",{directives:[{name:"show",rawName:"v-show",value:e.file,expression:"file"}],staticClass:"button",class:e.buttonClass,attrs:{type:"button"},on:{click:function(t){e.send()}}},[e._v(e._s(e.buttonTitle))]):e._e()],1)},staticRenderFns:[]}},function(e,t,n){var i=n(2);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(7)("9d10f688",i,!0)},function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t],i=u[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(o(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(o(n.parts[r]));u[n.id]={id:n.id,refs:1,parts:a}}}}function r(e,t){for(var n=[],i={},r=0;r<t.length;r++){var a=t[r],o=a[0],s=a[1],l=a[2],d=a[3],u={css:s,media:l,sourceMap:d};i[o]?(u.id=e+":"+i[o].parts.length,i[o].parts.push(u)):(u.id=e+":0",n.push(i[o]={id:o,parts:[u]}))}return n}function a(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function o(e){var t,n,i=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]'),r=null!=i;if(r&&v)return h;if(m){var o=c++;i=p||(p=a()),t=s.bind(null,i,o,!1),n=s.bind(null,i,o,!0)}else i=i||a(),t=l.bind(null,i),n=function(){i.parentNode.removeChild(i)};return r||t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}function s(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var a=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function l(e,t){var n=t.css,i=t.media,r=t.sourceMap;if(i&&e.setAttribute("media",i),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r=n(8),u={},f=d&&(document.head||document.getElementsByTagName("head")[0]),p=null,c=0,v=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var a=r(e,t);return i(a),function(t){for(var n=[],o=0;o<a.length;o++){var s=a[o],l=u[s.id];l.refs--,n.push(l)}t?(a=r(e,t),i(a)):a=[];for(var o=0;o<n.length;o++){var l=n[o];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete u[l.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],i={},r=0;r<t.length;r++){var a=t[r],o=a[0],s=a[1],l=a[2],d=a[3],u={id:e+":"+r,css:s,media:l,sourceMap:d};i[o]?i[o].parts.push(u):n.push(i[o]={id:o,parts:[u]})}return n}},function(e,t,n){"use strict";e.exports=n(0)}])});