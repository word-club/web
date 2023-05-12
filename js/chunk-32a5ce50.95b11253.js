(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32a5ce50"],{3469:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{flat:"",color:"transparent"}},[i("v-card-title",[t._v("Customize profile")]),i("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"avatarInput",staticClass:"file-input",attrs:{id:"avatar-input",type:"file",accept:"image/*"},on:{change:t.avatarInputChanged}}),i("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"coverInput",staticClass:"file-input",attrs:{id:"cover-input",type:"file",accept:"image/*"},on:{change:t.coverInputChanged}}),i("v-card-text",[i("div",{staticClass:"overline pb-2"},[i("div",[t._v("profile information")]),i("v-divider")],1),i("div",{staticClass:"display-name"},[i("div",{staticClass:"form-header"},[t._v("Display name (optional)")]),i("div",{staticClass:"form-description"},[t._v(" Set an awesome display name for your profile. Generally we display your unique username as your display text. But if you've set a display name, we'll use that instead. ")]),i("text-field",{attrs:{icon:"mdi-account-box",label:"Display name (optional)",counter:"30",name:"display_name",errors:t.patchErrors},on:{change:function(e){return t.patchAccount({profile:{display_name:t.profile.display_name}})}},model:{value:t.profile.display_name,callback:function(e){t.$set(t.profile,"display_name",e)},expression:"profile.display_name"}})],1),i("div",{staticClass:"user-bio"},[i("div",{staticClass:"form-header"},[t._v("About (optional)")]),i("div",{staticClass:"form-description"},[t._v("A brief description of yourself shown on your profile")]),i("text-area",{attrs:{icon:"mdi-card-text",label:"About (optional)",name:"bio",errors:t.patchErrors},on:{change:function(e){return t.patchAccount({profile:{bio:t.profile.bio}})}},model:{value:t.profile.bio,callback:function(e){t.$set(t.profile,"bio",e)},expression:"profile.bio"}})],1),i("div",{staticClass:"overline pb-2"},[i("div",[t._v("images")]),i("v-divider")],1),i("div",{staticClass:"avatar-banner"},[i("div",{staticClass:"form-header"},[t._v("Avatar and banner image")]),i("div",{staticClass:"form-description"},[t._v("Images must be .png or .jpg format")]),i("div",{staticClass:"actions"},[i("wc-avatar",{attrs:{size:"200",color:t.avatarUrl?"":"primary",src:t.avatarUrl,text:t.user.username,"span-class":"full-width text-center display-3"}}),i("v-btn",{staticClass:"avatar-add",attrs:{fab:"",dark:"",color:"grey"},on:{click:function(e){return t.$refs.avatarInput.click()}}},[i("v-icon",[t._v("mdi-plus")])],1),i("div",{staticClass:"px-2"}),i("v-card",{staticClass:"full-width",attrs:{height:"200",img:t.coverUrl||""}},[i("v-card-text",[i("v-chip",{attrs:{small:""}},[t._v("Cover Image Preview Pane")])],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{dark:"",fab:"",large:""},on:{click:function(e){return t.$refs.coverInput.click()}}},[i("v-icon",[t._v("mdi-plus-circle")])],1)],1)],1)],1)]),i("div",{staticClass:"overline pb-2"},[i("div",[t._v("profile category")]),i("v-divider")],1),i("div",{staticClass:"profile-category"},[i("div",{staticClass:"d-flex justify-space-between"},[i("div",[i("div",{staticClass:"form-header"},[t._v("NSFW")]),i("div",{staticClass:"form-description"},[t._v(" This content is NSFW (may contain nudity, pornography, profanity or inappropriate content for those under 18) ")])]),i("div",[i("v-switch",{attrs:{inset:"",color:"primary"},on:{change:function(e){return t.patchAccount({profile:{adult_content:t.profile.adult_content}})}},model:{value:t.profile.adult_content,callback:function(e){t.$set(t.profile,"adult_content",e)},expression:"profile.adult_content"}})],1)])]),i("div",{staticClass:"overline pb-2"},[i("div",[t._v("advanced")]),i("v-divider")],1),i("div",{staticClass:"advanced"},[i("div",{staticClass:"d-flex justify-space-between"},[i("div",[i("div",{staticClass:"form-header"},[t._v("Allow people to follow you")]),i("div",{staticClass:"form-description"},[t._v(" Followers will be notified about posts you make to your profile and see them in their home feed. ")])]),i("div",[i("v-switch",{attrs:{inset:"",color:"primary"},on:{change:function(e){return t.patchAccount({profile:{allow_follow:t.profile.allow_follow}})}},model:{value:t.profile.allow_follow,callback:function(e){t.$set(t.profile,"allow_follow",e)},expression:"profile.allow_follow"}})],1)]),i("div",{staticClass:"d-flex justify-space-between"},[i("div",[i("div",{staticClass:"form-header"},[t._v("Content visibility")]),i("div",{staticClass:"form-description"},[t._v(" Posts to this profile can appear in "),i("a",{attrs:{href:""}},[t._v("w/all")]),t._v(" and your profile can be discovered in "),i("a",{attrs:{href:""}},[t._v("/users")])])]),i("div",[i("v-switch",{attrs:{inset:"",color:"primary"},on:{change:function(e){return t.patchAccount({profile:{content_visibility:t.profile.content_visibility}})}},model:{value:t.profile.content_visibility,callback:function(e){t.$set(t.profile,"content_visibility",e)},expression:"profile.content_visibility"}})],1)]),i("div",{staticClass:"d-flex justify-space-between"},[i("div",[i("div",{staticClass:"form-header"},[t._v("Active in communities visibility")]),i("div",{staticClass:"form-description"},[t._v(" Show which communities I am active in on my profile ")])]),i("div",[i("v-switch",{attrs:{inset:"",color:"primary"},on:{change:function(e){return t.patchAccount({profile:{communities_visibility:t.profile.communities_visibility}})}},model:{value:t.profile.communities_visibility,callback:function(e){t.$set(t.profile,"communities_visibility",e)},expression:"profile.communities_visibility"}})],1)])])]),i("v-card-actions",{staticClass:"pb-0 pt-4"})],1)},s=[],n=i("5530"),o=i("2f62"),r=i("9258"),c=i("ef9e"),l=i("f17d"),u={name:"Profile",mixins:[r["a"],c["a"],l["a"]],data:function(){return{profile:{bio:null,display_name:null,allow_follow:!0,content_visibility:!0,communities_visibility:!0,adult_content:!1}}},computed:Object(n["a"])({},Object(o["b"])({user:"user/current"})),created:function(){this.populate(),this.$store.dispatch("publication/setInView",null),this.$store.dispatch("community/setToView",null),this.$store.dispatch("user/setInView",this.user)},methods:{populate:function(){this.profile={bio:this.user.profile.bio,display_name:this.user.profile.display_name,allow_follow:this.user.profile.allow_follow,content_visibility:this.user.profile.content_visibility,communities_visibility:this.user.profile.communities_visibility,adult_content:this.user.profile.adult_content}}}},d=u,h=(i("96d2"),i("2877")),p=i("6544"),f=i.n(p),v=i("8336"),m=i("b0af"),g=i("99d9"),b=i("cc20"),y=i("ce7e"),w=i("132d"),C=i("2fa4"),_=i("b73d"),x=Object(h["a"])(d,a,s,!1,null,"454a60a2",null);e["default"]=x.exports;f()(x,{VBtn:v["a"],VCard:m["a"],VCardActions:g["a"],VCardText:g["c"],VCardTitle:g["d"],VChip:b["a"],VDivider:y["a"],VIcon:w["a"],VSpacer:C["a"],VSwitch:_["a"]})},5802:function(t,e,i){"use strict";var a=i("1da1"),s=i("5530"),n=(i("d3b7"),i("159b"),i("96cf"),i("c473")),o=i("2f62"),r={mixins:[n["a"]],emits:["refreshMe","refreshCommunity","startNew"],data:function(){return{confirmSuccess:!1,confirmErrors:{},confirmResponse:null}},computed:Object(s["a"])({},Object(o["b"])("confirmDialog",["dialogState","dialogMessage","dialogMethod","dialogUrl","dialogPayload","dialogParams","dialogSuccessEvents","dialogSuccessMessage","dialogFailureMessage"])),methods:{closeConfirmDialog:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("confirmDialog/close");case 2:case"end":return e.stop()}}),e)})))()},proceedConfirmDialog:function(){var t=this;this.$axios.send(this.dialogMethod,this.dialogUrl,this.dialogPayload,this.dialogParams).then(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.confirmResponse=i,t.confirmSuccess=!0,t.confirmErrors={},t.openSuccessSnack(t.dialogSuccessMessage),t.dialogSuccessEvents.forEach((function(e){t.$emit(e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){var i;console.debug(e),t.confirmResponse=e.response,t.confirmSuccess=!1,t.confirmErrors=null===(i=e.response)||void 0===i?void 0:i.data,t.openSnack(t.dialogFailureMessage)})).finally(Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.closeConfirmDialog();case 2:case"end":return e.stop()}}),e)}))))},openConfirmDialog:function(t){var e=arguments,i=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){var s,n,o,r,c,l,u;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=e.length>1&&void 0!==e[1]?e[1]:"",n=e.length>2?e[2]:void 0,o=e.length>3?e[3]:void 0,r=e.length>4?e[4]:void 0,c=e.length>5?e[5]:void 0,l=e.length>6&&void 0!==e[6]?e[6]:null,u=e.length>7&&void 0!==e[7]?e[7]:null,a.next=9,i.$store.dispatch("confirmDialog/setDialogMessage",t);case 9:return a.next=11,i.$store.dispatch("confirmDialog/setMethod",s.toUpperCase());case 11:return a.next=13,i.$store.dispatch("confirmDialog/setUrl",n);case 13:return a.next=15,i.$store.dispatch("confirmDialog/setSuccessEvents",o);case 15:return a.next=17,i.$store.dispatch("confirmDialog/setSuccessMessage",r);case 17:return a.next=19,i.$store.dispatch("confirmDialog/setFailureMessage",c);case 19:if(!l){a.next=22;break}return a.next=22,i.$store.dispatch("confirmDialog/setPayload",l);case 22:if(!u){a.next=25;break}return a.next=25,i.$store.dispatch("confirmDialog/setParams",u);case 25:return a.next=27,i.$store.dispatch("confirmDialog/setDialog",!0);case 27:case"end":return a.stop()}}),a)})))()}}};e["a"]=r},8547:function(t,e,i){"use strict";var a=i("2b0e"),s=i("80d2");e["a"]=a["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:s["k"]}}})},"8adc":function(t,e,i){},"8ce9":function(t,e,i){},"96d2":function(t,e,i){"use strict";i("da24")},"9d01":function(t,e,i){},"9d26":function(t,e,i){"use strict";var a=i("132d");e["a"]=a["a"]},b73d:function(t,e,i){"use strict";var a=i("15fd"),s=i("5530"),n=(i("0481"),i("4069"),i("ec29"),i("9d01"),i("fe09")),o=i("c37a"),r=i("c3f0"),c=i("0789"),l=i("490a"),u=i("80d2"),d=["title"];e["a"]=n["a"].extend({name:"v-switch",directives:{Touch:r["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(a["a"])(t,d));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(s["a"])(Object(s["a"])({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(s["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(s["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(c["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(l["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===u["z"].left&&this.isActive||t.keyCode===u["z"].right&&!this.isActive)&&this.onChange()}}})},c3f0:function(t,e,i){"use strict";i("d3b7"),i("159b");var a=i("80d2"),s=function(t){var e=t.touchstartX,i=t.touchendX,a=t.touchstartY,s=t.touchendY,n=.5,o=16;t.offsetX=i-e,t.offsetY=s-a,Math.abs(t.offsetY)<n*Math.abs(t.offsetX)&&(t.left&&i<e-o&&t.left(t),t.right&&i>e+o&&t.right(t)),Math.abs(t.offsetX)<n*Math.abs(t.offsetY)&&(t.up&&s<a-o&&t.up(t),t.down&&s>a+o&&t.down(t))};function n(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function o(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),s(e)}function r(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function c(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return n(t,e)},touchend:function(t){return o(t,e)},touchmove:function(t){return r(t,e)}}}function l(t,e,i){var s=e.value,n=s.parent?t.parentElement:t,o=s.options||{passive:!0};if(n){var r=c(e.value);n._touchHandlers=Object(n._touchHandlers),n._touchHandlers[i.context._uid]=r,Object(a["A"])(r).forEach((function(t){n.addEventListener(t,r[t],o)}))}}function u(t,e,i){var s=e.value.parent?t.parentElement:t;if(s&&s._touchHandlers){var n=s._touchHandlers[i.context._uid];Object(a["A"])(n).forEach((function(t){s.removeEventListener(t,n[t])})),delete s._touchHandlers[i.context._uid]}}var d={inserted:l,unbind:u};e["a"]=d},cc20:function(t,e,i){"use strict";var a=i("3835"),s=i("5530"),n=(i("d3b7"),i("4de4"),i("8adc"),i("58df")),o=i("0789"),r=i("9d26"),c=i("a9ad"),l=i("4e82c"),u=i("7560"),d=i("f2e7"),h=i("1c87"),p=i("af2b"),f=i("d9bd");e["a"]=Object(n["a"])(c["a"],p["a"],h["a"],u["a"],Object(l["a"])("chipGroup"),Object(d["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({"v-chip":!0},h["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(h["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var i=Object(a["a"])(e,2),s=i[0],n=i[1];t.$attrs.hasOwnProperty(s)&&Object(f["a"])(s,n,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(r["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(o["b"],t)},genClose:function(){var t=this;return this.$createElement(r["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],i=this.generateRouteLink(),a=i.tag,n=i.data;n.attrs=Object(s["a"])(Object(s["a"])({},n.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:n.attrs.tabindex}),n.directives.push({name:"show",value:this.active}),n=this.setBackgroundColor(this.color,n);var o=this.textColor||this.outlined&&this.color;return t(a,this.setTextColor(o,n),e)}})},ce7e:function(t,e,i){"use strict";var a=i("5530"),s=(i("8ce9"),i("7560"));e["a"]=s["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(a["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(a["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},da24:function(t,e,i){},ef9e:function(t,e,i){"use strict";i("d3b7");var a={data:function(){return{patchInstance:null,patchErrors:{},patching:!1,patchSuccess:!1}},methods:{patch:function(t,e){var i=this;return this.patching=!0,this.$axios.patch(t,e).then((function(t){i.patchSuccess=!0,i.patchInstance=t,i.patchErrors={}})).catch((function(t){console.debug(t),i.patchSuccess=!1,i.patchErrors=t.response.data})).finally((function(){i.patching=!1}))}}};e["a"]=a},f17d:function(t,e,i){"use strict";var a=i("5802"),s=i("ef9e"),n=i("c473"),o=i("6397"),r={data:function(){return{countries:[],payload:{country:null},editEmail:!1,emailToUpdate:null,deactivate:{mode:!1,reason:null}}},mixins:[a["a"],s["a"],n["a"],o["a"]],methods:{addEmail:function(){this.editEmail=!this.editEmail,this.emailToUpdate=null},changeEmail:function(){this.editEmail=!0,this.emailToUpdate=this.user.email},patchAccount:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.patch(this.$urls.user.updateMe,e).then((function(){t.patchSuccess?(t.refreshMe(),t.openSuccessSnack("Account information updated successfully.")):t.openSnack("Something went wrong, please try again.")}))},deactivateMyAccountConfirm:function(){var t=this.$urls.user.deactivateMe;this.openConfirmDialog("Are you sure you want to deactivate your account?","POST",t,["refresh"],"Account deactivated.","Sorry, something went wrong.",{deactivation_reason:this.deactivate.reason})},reActivateMe:function(){var t=this.$urls.user.activateMe;this.openConfirmDialog("Are you sure you want to activate your account?","POST",t,["refresh"],"Account activated.","Sorry, something went wrong.")}}};e["a"]=r}}]);
//# sourceMappingURL=chunk-32a5ce50.95b11253.js.map