/*! For license information please see MatrixInput.js.LICENSE.txt */
!function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return s=t.done,t},e:function(t){l=!0,o=t},f:function(){try{s||null==r.return||r.return()}finally{if(l)throw o}}}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r(e,n,r){var i;return i=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,"string");if("object"!=t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n),(n="symbol"==t(i)?i:String(i))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){i=function(){return n};var e,n={},r=Object.prototype,a=r.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},l=s.iterator||"@@iterator",d=s.asyncIterator||"@@asyncIterator",c=s.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(e){u=function(t,e,n){return t[e]=n}}function h(t,e,n,r){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),s=new L(r||[]);return o(a,"_invoke",{value:T(t,n,s)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var p="suspendedStart",y="suspendedYield",m="executing",v="completed",g={};function b(){}function $(){}function C(){}var E={};u(E,l,(function(){return this}));var x=Object.getPrototypeOf,w=x&&x(x(O([])));w&&w!==r&&a.call(w,l)&&(E=w);var S=C.prototype=b.prototype=Object.create(E);function I(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function M(e,n){function r(i,o,s,l){var d=f(e[i],e,o);if("throw"!==d.type){var c=d.arg,u=c.value;return u&&"object"==t(u)&&a.call(u,"__await")?n.resolve(u.__await).then((function(t){r("next",t,s,l)}),(function(t){r("throw",t,s,l)})):n.resolve(u).then((function(t){c.value=t,s(c)}),(function(t){return r("throw",t,s,l)}))}l(d.arg)}var i;o(this,"_invoke",{value:function(t,e){function a(){return new n((function(n,i){r(t,e,n,i)}))}return i=i?i.then(a,a):a()}})}function T(t,n,r){var i=p;return function(a,o){if(i===m)throw new Error("Generator is already running");if(i===v){if("throw"===a)throw o;return{value:e,done:!0}}for(r.method=a,r.arg=o;;){var s=r.delegate;if(s){var l=k(s,r);if(l){if(l===g)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===p)throw i=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=m;var d=f(t,n,r);if("normal"===d.type){if(i=r.done?v:y,d.arg===g)continue;return{value:d.arg,done:r.done}}"throw"===d.type&&(i=v,r.method="throw",r.arg=d.arg)}}}function k(t,n){var r=n.method,i=t.iterator[r];if(i===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var a=f(i,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var o=a.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function B(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(B,this),this.reset(!0)}function O(n){if(n||""===n){var r=n[l];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var i=-1,o=function t(){for(;++i<n.length;)if(a.call(n,i))return t.value=n[i],t.done=!1,t;return t.value=e,t.done=!0,t};return o.next=o}}throw new TypeError(t(n)+" is not iterable")}return $.prototype=C,o(S,"constructor",{value:C,configurable:!0}),o(C,"constructor",{value:$,configurable:!0}),$.displayName=u(C,c,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===$||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,u(t,c,"GeneratorFunction")),t.prototype=Object.create(S),t},n.awrap=function(t){return{__await:t}},I(M.prototype),u(M.prototype,d,(function(){return this})),n.AsyncIterator=M,n.async=function(t,e,r,i,a){void 0===a&&(a=Promise);var o=new M(h(t,e,r,i),a);return n.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},I(S),u(S,c,"Generator"),u(S,l,(function(){return this})),u(S,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=O,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,i){return s.type="throw",s.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),d=a.call(o,"finallyLoc");if(l&&d){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;A(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},n}function a(t,e,n,r,i,a,o){try{var s=t[a](o),l=s.value}catch(t){return void n(t)}s.done?e(l):Promise.resolve(l).then(r,i)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function s(t){a(o,r,i,s,l,"next",t)}function l(t){a(o,r,i,s,l,"throw",t)}s(void 0)}))}}jQuery,function(t){Craft.MatrixInput=Garnish.Base.extend({id:null,entryTypes:null,entryTypesByHandle:null,inputNamePrefix:null,inputIdPrefix:null,showingAddEntryMenu:!1,addEntryBtnGroupWidth:null,addEntryBtnContainerWidth:null,$container:null,$form:null,$entriesContainer:null,$addEntryBtnContainer:null,$addEntryBtn:null,$addEntryMenuBtn:null,$statusMessage:null,entrySort:null,entrySelect:null,elementEditor:null,addingEntry:!1,init:function(e,r,a,s){var l=this;this.id=e,this.entryTypes=r,this.inputNamePrefix=a,this.inputIdPrefix=Craft.formatInputId(this.inputNamePrefix),"number"==typeof s&&(s={maxEntries:s}),this.setSettings(s,Craft.MatrixInput.defaults),this.$container=t("#"+this.id),this.$form=this.$container.closest("form"),this.$entriesContainer=this.$container.children(".blocks"),this.$addEntryBtnContainer=this.$container.children(".buttons"),this.$addEntryBtn=this.$addEntryBtnContainer.children(".btn:not(.menubtn)"),this.$addEntryMenuBtn=this.$addEntryBtnContainer.children(".menubtn"),this.$statusMessage=this.$container.find("[data-status-message]"),this.$container.data("matrix",this),this.entryTypesByHandle={};for(var d=0;d<this.entryTypes.length;d++){var c=this.entryTypes[d];this.entryTypesByHandle[c.handle]=c}var u=this.$entriesContainer.children(".matrixblock"),h=Craft.MatrixInput.getCollapsedEntryIds();this.entrySort=new Garnish.DragSort(u,{handle:"> .actions > .move",axis:"y",filter:function(){return l.entrySort.$targetItem.hasClass("sel")?l.entrySelect.getSelectedItems():l.entrySort.$targetItem},collapseDraggees:!0,magnetStrength:4,helperLagBase:1.5,helperOpacity:.9,onDragStop:function(){l.trigger("entrySortDragStop")},onSortChange:function(){l.entrySelect.resetItemOrder()}}),this.entrySelect=new Garnish.Select(this.$entriesContainer,u,{multi:!0,vertical:!0,handle:"> .actions > .checkbox, > .titlebar",filter:":not(.tab-label)",checkboxMode:!0});for(var f=0;f<u.length;f++){var p=t(u[f]),y=new n(this,p);y.id&&-1!==t.inArray(""+y.id,h)&&y.collapse()}this.addListener(this.$addEntryBtn,"activate",o(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.$addEntryBtn.addClass("loading"),t.prev=1,t.next=4,this.addEntry(this.$addEntryBtn.data("type"));case 4:return t.prev=4,this.$addEntryBtn.removeClass("loading"),t.finish(4);case 7:case"end":return t.stop()}}),t,this,[[1,,4,7]])})))),this.$addEntryMenuBtn.length&&this.$addEntryMenuBtn.disclosureMenu().data("disclosureMenu").$container.find("button").on("activate",function(){var e=o(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.$addEntryMenuBtn.addClass("loading"),e.prev=1,e.next=4,l.addEntry(t(n.currentTarget).data("type"));case 4:return e.prev=4,l.$addEntryMenuBtn.removeClass("loading"),e.finish(4);case 7:case"end":return e.stop()}}),e,null,[[1,,4,7]])})));return function(t){return e.apply(this,arguments)}}()),this.updateAddEntryBtn(),setTimeout((function(){l.elementEditor=l.$container.closest("form").data("elementEditor"),l.elementEditor&&l.elementEditor.on("update",(function(){l.settings.ownerId=l.elementEditor.getDraftElementId(l.settings.ownerId)})),l.trigger("afterInit")}),100)},canAddMoreEntries:function(){return!this.maxEntries||this.$entriesContainer.children().length<this.maxEntries},updateAddEntryBtn:function(){if(this.canAddMoreEntries()){this.$addEntryBtn.removeClass("disabled").removeAttr("aria-disabled"),this.$addEntryMenuBtn.removeClass("disabled");for(var t=0;t<this.entrySelect.$items.length;t++){var e=this.entrySelect.$items.eq(t).data("entry");e&&(e.$actionMenu.find("button[data-action=add]").parent().removeClass("disabled"),e.$actionMenu.find("button[data-action=add]").removeAttr("aria-disabled"))}}else{this.$addEntryBtn.addClass("disabled").attr("aria-disabled","true"),this.$addEntryMenuBtn.addClass("disabled");for(var n=0;n<this.entrySelect.$items.length;n++){var r=this.entrySelect.$items.eq(n).data("entry");r&&(r.$actionMenu.find("button[data-action=add]").parent().addClass("disabled"),r.$actionMenu.find("button[data-action=add]").attr("aria-disabled","true"))}}},updateStatusMessage:function(){var t,e=this;this.$statusMessage.empty(),this.canAddMoreEntries()||(t=Craft.t("app","Entry could not be added. Maximum number of entries reached.")),setTimeout((function(){e.$statusMessage.text(t)}),250)},addEntry:function(e,r,a){var s=this;return o(i().mark((function l(){var d,c,u,h;return i().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(!s.addingEntry){l.next=2;break}return l.abrupt("return");case 2:if(s.canAddMoreEntries()){l.next=5;break}return s.updateStatusMessage(),l.abrupt("return");case 5:if(s.addingEntry=!0,!s.elementEditor){l.next=9;break}return l.next=9,s.elementEditor.setFormValue(s.settings.baseInputName,"*");case 9:return l.next=11,Craft.sendActionRequest("POST","matrix/create-entry",{data:{fieldId:s.settings.fieldId,entryTypeId:s.entryTypesByHandle[e].id,ownerId:s.settings.ownerId,ownerElementType:s.settings.ownerElementType,siteId:s.settings.siteId,namespace:s.settings.namespace}});case 11:c=l.sent,u=c.data,h=t(u.blockHtml),null===(d=s.elementEditor)||void 0===d||d.pause(),r?h.insertBefore(r):h.appendTo(s.$entriesContainer),s.trigger("entryAdded",{$entry:h}),h.css(s.getHiddenEntryCss(h)).velocity({opacity:1,"margin-bottom":10},"fast",o(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h.css("margin-bottom",""),Craft.initUiElements(h.children(".fields")),t.next=4,Craft.appendHeadHtml(u.headHtml);case 4:return t.next=6,Craft.appendBodyHtml(u.bodyHtml);case 6:new n(s,h),s.entrySort.addItems(h),s.entrySelect.addItems(h),s.updateAddEntryBtn(),Garnish.requestAnimationFrame((function(){var t;(void 0===a||a)&&(Garnish.scrollContainerToElement(h),h.find(".flex-fields :focusable").first().trigger("focus")),null===(t=s.elementEditor)||void 0===t||t.resume()}));case 11:case"end":return t.stop()}}),t)})))),s.addingEntry=!1;case 19:case"end":return l.stop()}}),l)})))()},getEntryTypeByHandle:function(t){for(var e=0;e<this.entryTypes.length;e++)if(this.entryTypes[e].handle===t)return this.entryTypes[e]},collapseSelectedEntries:function(){this.callOnSelectedEntries("collapse")},expandSelectedEntries:function(){this.callOnSelectedEntries("expand")},disableSelectedEntries:function(){this.callOnSelectedEntries("disable")},enableSelectedEntries:function(){this.callOnSelectedEntries("enable")},deleteSelectedEntries:function(){this.callOnSelectedEntries("selfDestruct")},callOnSelectedEntries:function(t){for(var e=0;e<this.entrySelect.$selectedItems.length;e++)this.entrySelect.$selectedItems.eq(e).data("entry")[t]()},getHiddenEntryCss:function(t){return{opacity:0,marginBottom:-t.outerHeight()}},get maxEntries(){return this.settings.maxEntries}},{defaults:{fieldId:null,maxEntries:null,namespace:null,baseInputName:null,ownerElementType:null,ownerId:null,siteId:null,staticEntries:!1},collapsedEntryStorageKey:"Craft-"+Craft.systemUid+".MatrixInput.collapsedEntries",getCollapsedEntryIds:function(){return"string"==typeof localStorage[Craft.MatrixInput.collapsedEntryStorageKey]?Craft.filterArray(localStorage[Craft.MatrixInput.collapsedEntryStorageKey].split(",")):[]},setCollapsedEntryIds:function(t){localStorage[Craft.MatrixInput.collapsedEntryStorageKey]=t.join(",")},rememberCollapsedEntryId:function(e){if("undefined"!=typeof Storage){var n=Craft.MatrixInput.getCollapsedEntryIds();-1===t.inArray(""+e,n)&&(n.push(e),Craft.MatrixInput.setCollapsedEntryIds(n))}},forgetCollapsedEntryId:function(e){if("undefined"!=typeof Storage){var n=Craft.MatrixInput.getCollapsedEntryIds(),r=t.inArray(""+e,n);-1!==r&&(n.splice(r,1),Craft.MatrixInput.setCollapsedEntryIds(n))}},initTabs:function(e){var n=t(e).children(".pane-tabs");if(n.length){var r=new Craft.Tabs(n),i=r.$menuBtn.data("trigger");return t(i.$container).find("li, a").on("click",(function(t){t.preventDefault()})),r.on("selectTab",(function(e){var n=e.$tab.attr("href");n&&"#"===n.charAt(0)&&t(n).removeClass("hidden"),Garnish.$win.trigger("resize"),Garnish.$doc.trigger("scroll")})),r.on("deselectTab",(function(e){var n=e.$tab.attr("href");n&&"#"===n.charAt(0)&&t(e.$tab.attr("href")).addClass("hidden")})),r}}});var n=Garnish.Base.extend({matrix:null,$container:null,$titlebar:null,$tabContainer:null,$fieldsContainer:null,$previewContainer:null,$actionMenu:null,$collapsedInput:null,tabManager:null,actionDisclosure:null,formObserver:null,visibleLayoutElements:null,cancelToken:null,ignoreFailedRequest:!1,isNew:null,id:null,collapsed:!1,init:function(t,e){var n=this;this.matrix=t,this.$container=e,this.$titlebar=e.children(".titlebar"),this.$tabContainer=this.$titlebar.children(".matrixblock-tabs"),this.$previewContainer=this.$titlebar.children(".preview"),this.$fieldsContainer=e.children(".fields"),this.$container.data("entry",this),this.id=this.$container.data("id"),this.isNew=!this.id||"string"==typeof this.id&&"new"===this.id.substring(0,3),this.$tabContainer.length&&(this.tabManager=Craft.MatrixInput.initTabs(this.$tabContainer));var r=this.$container.find("> .actions .action-btn"),i=r.data("trigger")||new Garnish.DisclosureMenu(r);this.$actionMenu=i.$container,this.actionDisclosure=i,i.on("show",(function(){n.$container.addClass("active"),n.$container.prev(".matrixblock").length?n.$actionMenu.find("button[data-action=moveUp]:first").parent().removeClass("hidden"):n.$actionMenu.find("button[data-action=moveUp]:first").parent().addClass("hidden"),n.$container.next(".matrixblock").length?n.$actionMenu.find("button[data-action=moveDown]:first").parent().removeClass("hidden"):n.$actionMenu.find("button[data-action=moveDown]:first").parent().addClass("hidden")})),i.on("hide",(function(){n.$container.removeClass("active")})),this.$actionMenuOptions=this.$actionMenu.find("button[data-action]"),this.addListener(this.$actionMenuOptions,"activate",this.handleActionClick),Garnish.hasAttr(this.$container,"data-collapsed")&&this.collapse(),this._handleTitleBarClick=function(t){t.preventDefault(),this.toggle()},this.addListener(this.$titlebar,"doubletap",this._handleTitleBarClick),this.visibleLayoutElements=this.$container.data("visible-layout-elements"),this.formObserver=new Craft.FormObserver(this.$container,(function(t){n.updateFieldLayout(t)}))},toggle:function(){this.collapsed?this.expand():this.collapse(!0)},collapse:function(e){var n=this;if(!this.collapsed){this.$container.addClass("collapsed");for(var r="",i=this.$fieldsContainer.children().children(),a=0;a<i.length;a++){for(var o=t(i[a]).children(".input").find('select,input[type!="hidden"],textarea,.label'),s="",l=0;l<o.length;l++){var d=t(o[l]),c=void 0;if(d.hasClass("label")){var u=d.parent().parent();if(u.hasClass("lightswitch")&&(u.hasClass("on")&&d.hasClass("off")||!u.hasClass("on")&&d.hasClass("on")))continue;c=d.text()}else c=Craft.getText(this._inputPreviewText(d));Array.isArray(c)&&(c=c.join(", ")),c&&(c=Craft.escapeHtml(c).trim())&&(s&&(s+=", "),s+=c)}s&&(r+=(r?" <span>|</span> ":"")+s)}this.$previewContainer.html(r),this.$fieldsContainer.velocity("stop"),this.$container.velocity("stop"),e&&!Garnish.prefersReducedMotion()?(this.$fieldsContainer.velocity("fadeOut",{duration:"fast"}),this.$container.velocity({height:34},"fast")):(this.$previewContainer.show(),this.$fieldsContainer.hide(),this.$container.css({height:34})),this.$tabContainer.hide(),setTimeout((function(){n.$actionMenu.find("button[data-action=collapse]:first").parent().addClass("hidden"),n.$actionMenu.find("button[data-action=expand]:first").parent().removeClass("hidden")}),200),this.isNew?this.$collapsedInput?this.$collapsedInput.val("1"):this.$collapsedInput=t('<input type="hidden" name="'+this.matrix.inputNamePrefix+"[entries]["+this.id+'][collapsed]" value="1"/>').appendTo(this.$container):Craft.MatrixInput.rememberCollapsedEntryId(this.id),this.collapsed=!0}},_inputPreviewText:function(e){if(e.is("select,multiselect")){for(var n=[],r=e.find("option:selected"),i=0;i<r.length;i++)n.push(r.eq(i).text());return n}if(e.is('input[type="checkbox"]:checked,input[type="radio"]:checked')){var a=e.attr("id"),o=t('label[for="'.concat(a,'"]'));if(o.length)return o.text()}return Garnish.getInputPostVal(e)},expand:function(){var e=this;if(this.collapsed){this.$container.removeClass("collapsed"),this.$fieldsContainer.velocity("stop"),this.$container.velocity("stop");var n=this.$container.height();this.$container.height("auto"),this.$fieldsContainer.show();var r=this.$container.height(),i=this.$fieldsContainer.css("display")||"block";this.$container.height(n),this.$fieldsContainer.hide().velocity("fadeIn",{duration:"fast",display:i});var a=Garnish.prefersReducedMotion()?0:"fast";if(this.$container.velocity({height:r},a,(function(){e.$previewContainer.html(""),e.$container.height("auto"),e.$container.trigger("scroll"),e.$tabContainer.show()})),setTimeout((function(){e.$actionMenu.find("button[data-action=collapse]:first").parent().removeClass("hidden"),e.$actionMenu.find("button[data-action=expand]:first").parent().addClass("hidden")}),200),!this.isNew&&"undefined"!=typeof Storage){var o=Craft.MatrixInput.getCollapsedEntryIds(),s=t.inArray(""+this.id,o);-1!==s&&(o.splice(s,1),Craft.MatrixInput.setCollapsedEntryIds(o))}this.isNew?this.$collapsedInput&&this.$collapsedInput.val(""):Craft.MatrixInput.forgetCollapsedEntryId(this.id),this.collapsed=!1}},disable:function(){var t=this;this.$container.children('input[name$="[enabled]"]:first').val(""),this.$container.addClass("disabled-entry"),setTimeout((function(){t.$actionMenu.find("button[data-action=disable]:first").parent().addClass("hidden"),t.$actionMenu.find("button[data-action=enable]:first").parent().removeClass("hidden")}),200),this.collapse(!0)},enable:function(){var t=this;this.$container.children('input[name$="[enabled]"]:first').val("1"),this.$container.removeClass("disabled-entry"),setTimeout((function(){t.$actionMenu.find("button[data-action=disable]:first").parent().removeClass("hidden"),t.$actionMenu.find("button[data-action=enable]:first").parent().addClass("hidden")}),200)},moveUp:function(){this.matrix.trigger("beforeMoveEntryUp",{entry:this});var t=this.$container.prev(".matrixblock");t.length&&(this.$container.insertBefore(t),this.matrix.entrySelect.resetItemOrder()),this.matrix.trigger("moveEntryUp",{entry:this})},moveDown:function(){this.matrix.trigger("beforeMoveEntryDown",{entry:this});var t=this.$container.next(".matrixblock");t.length&&(this.$container.insertAfter(t),this.matrix.entrySelect.resetItemOrder()),this.matrix.trigger("moveEntryDown",{entry:this})},handleActionClick:function(t){t.preventDefault(),this.onActionSelect(t.target)},onActionSelect:function(e){var n=this.matrix.entrySelect.totalSelected>1&&this.matrix.entrySelect.isSelected(this.$container),r=t(e);switch(r.data("action")){case"collapse":n?this.matrix.collapseSelectedEntries():this.collapse(!0);break;case"expand":n?this.matrix.expandSelectedEntries():this.expand();break;case"disable":n?this.matrix.disableSelectedEntries():this.disable();break;case"enable":n?this.matrix.enableSelectedEntries():(this.enable(),this.expand());break;case"moveUp":this.moveUp();break;case"moveDown":this.moveDown();break;case"add":var i=r.data("type");this.matrix.addEntry(i,this.$container);break;case"delete":n?confirm(Craft.t("app","Are you sure you want to delete the selected entries?"))&&this.matrix.deleteSelectedEntries():this.selfDestruct()}this.actionDisclosure.hide()},selfDestruct:function(){var e=this;t("[name]",this.$container).removeAttr("name"),this.$container.velocity(this.matrix.getHiddenEntryCss(this.$container),"fast",(function(){e.$container.remove(),e.matrix.updateAddEntryBtn(),e.matrix.trigger("entryDeleted",{$entry:e.$container})}))},updateFieldLayout:function(e){var n=this;return new Promise((function(i,a){var o=n.matrix.elementEditor,s=n.$container.data("base-input-name");if(null!=o&&o.submittingForm)a("Form already being submitted.");else{n.cancelToken&&(n.ignoreFailedRequest=!0,n.cancelToken.cancel());var l=function(t){return Craft.namespaceInputName(t,s)},d=r(r(r(r(r(r(r({},l("visibleLayoutElements"),n.visibleLayoutElements),l("elementType"),"craft\\elements\\Entry"),l("ownerId"),n.matrix.settings.ownerId),l("fieldId"),n.matrix.settings.fieldId),l("sortOrder"),n.$container.index()+1),l("typeId"),n.$container.data("type-id")),l("elementUid"),n.$container.data("uid")),c=n.$fieldsContainer.children("[data-layout-tab]:not(.hidden)").data("id");c&&(d[l("selectedTab")]=c),e+="&".concat(t.param(d)),n.cancelToken=axios.CancelToken.source(),Craft.sendActionRequest("POST","elements/update-field-layout",{cancelToken:n.cancelToken.token,headers:{"content-type":"application/x-www-form-urlencoded","X-Craft-Namespace":s},data:e}).then((function(t){n._afterUpdateFieldLayout(e,c,s,t),i()})).catch((function(t){n.ignoreFailedRequest||a(t),n.ignoreFailedRequest=!1})).finally((function(){n.cancelToken=null}))}}))},_afterUpdateFieldLayout:function(n,r,a,s){var l=this;return o(i().mark((function n(){var o,d,c,u,h,f,p,y,m,v,g,b,$,C,E,x,w;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:d=l.$fieldsContainer.children("[data-layout-tab]:not(.hidden)").data("id"),c=t(),u={},h=e(s.data.missingElements);try{for(h.s();!(f=h.n()).done;){p=f.value,(y=l.$fieldsContainer.children('[data-layout-tab="'.concat(p.uid,'"]'))).length||(y=t("<div/>",{id:Craft.namespaceId(p.id,a),class:"flex-fields","data-id":p.id,"data-layout-tab":p.uid}),p.id!==r&&y.addClass("hidden"),y.appendTo(l.$fieldsContainer)),c=c.add(y),m=e(p.elements);try{for(m.s();!(v=m.n()).done;)!1!==(g=v.value).html?(u[p.uid]||(u[p.uid]=[]),u[p.uid].push(g.uid),"string"==typeof g.html&&(b=y.children('[data-layout-element="'.concat(g.uid,'"]')),$=t(g.html),b.length?b.replaceWith($):$.appendTo(y),Craft.initUiElements($))):(C=y.children('[data-layout-element="'.concat(g.uid,'"]'))).length&&Garnish.hasAttr(C,"data-layout-element-placeholder")||(E=t("<div/>",{class:"hidden","data-layout-element":g.uid,"data-layout-element-placeholder":""}),C.length?C.replaceWith(E):E.appendTo(y))}catch(t){m.e(t)}finally{m.f()}}}catch(t){h.e(t)}finally{h.f()}return(x=l.$fieldsContainer.children("[data-layout-tab]").not(c).not('[data-layout-tab=""]')).length&&x.remove(),c.filter(":not(.hidden)").length||c.first().removeClass("hidden"),l.visibleLayoutElements=u,l.tabManager&&(l.tabManager.destroy(),l.tabManager=null,l.$tabContainer.html("")),l.hasTabs=!!s.data.tabs,l.hasTabs&&(l.$tabContainer.append(s.data.tabs),l.tabManager=Craft.MatrixInput.initTabs(l.$tabContainer),r&&d&&r!==d&&((w=l.tabManager.$tabs.filter('[data-id="'.concat(d,'"]'))).length?l.tabManager.selectTab(w):l.tabManager.selectTab(l.tabManager.$tabs.first()))),n.next=15,Craft.appendHeadHtml(s.data.headHtml);case 15:return n.next=17,Craft.appendBodyHtml(s.data.bodyHtml);case 17:null===(o=l.matrix.elementEditor)||void 0===o||o.handleDismissibleTips();case 18:case"end":return n.stop()}}),n)})))()}})}(jQuery)}();
//# sourceMappingURL=MatrixInput.js.map