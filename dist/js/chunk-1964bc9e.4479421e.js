(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1964bc9e","chunk-2d0e6c6b"],{3408:function(t,e,i){},3469:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{flat:"",color:"transparent"}},[i("v-card-title",[t._v("Customize profile")]),i("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"avatarInput",staticClass:"file-input",attrs:{id:"avatar-input",type:"file",accept:"image/*"},on:{change:t.avatarInputChanged}}),i("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"coverInput",staticClass:"file-input",attrs:{id:"cover-input",type:"file",accept:"image/*"},on:{change:t.coverInputChanged}}),i("v-card-text",[i("div",{staticClass:"overline pb-2"},[i("div",[t._v("profile information")]),i("v-divider")],1),i("div",{staticClass:"display-name"},[i("div",{staticClass:"form-header"},[t._v("Display name (optional)")]),i("div",{staticClass:"form-description"},[t._v("Set a display name. This does not change your username")]),i("text-field",{attrs:{icon:"mdi-account-box",label:"Display name (optional)",counter:"30",name:"display_name",errors:t.patchErrors},model:{value:t.profile.display_name,callback:function(e){t.$set(t.profile,"display_name",e)},expression:"profile.display_name"}})],1),i("div",{staticClass:"user-bio"},[i("div",{staticClass:"form-header"},[t._v("About (optional)")]),i("div",{staticClass:"form-description"},[t._v("A brief description of yourself shown on your profile")]),i("text-area",{attrs:{icon:"mdi-card-text",label:"About (optional)",counter:"200",name:"bio",errors:t.patchErrors},model:{value:t.profile.bio,callback:function(e){t.$set(t.profile,"bio",e)},expression:"profile.bio"}})],1),i("div",{staticClass:"overline pb-2"},[i("div",[t._v("images")]),i("v-divider")],1),i("div",{staticClass:"avatar-banner"},[i("div",{staticClass:"form-header"},[t._v("Avatar and banner image")]),i("div",{staticClass:"form-description"},[t._v("Images must be .png or .jpg format")]),i("div",{staticClass:"actions"},[i("v-avatar",{attrs:{size:"200",color:t.avatarUrl?"":"primary"}},[t.avatarUrl?i("v-img",{attrs:{src:t.avatarUrl}}):i("div",{staticClass:"full-width text-center display-3"},[t._v(t._s(t.user.username[0].toUpperCase()))])],1),i("v-btn",{staticClass:"avatar-add",attrs:{fab:"",dark:"",color:"grey"},on:{click:function(e){return t.$refs.avatarInput.click()}}},[i("v-icon",[t._v("mdi-plus")])],1),i("div",{staticClass:"px-2"}),i("v-card",{staticClass:"full-width",attrs:{height:"200",img:t.coverUrl||""}},[i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{dark:"",fab:"",large:""},on:{click:function(e){return t.$refs.coverInput.click()}}},[i("v-icon",[t._v("mdi-plus-circle")])],1)],1)],1)],1)]),i("div",{staticClass:"overline pb-2"},[i("div",[t._v("profile category")]),i("v-divider")],1),i("div",{staticClass:"profile-category"},[i("div",{staticClass:"d-flex justify-space-between"},[i("div",[i("div",{staticClass:"form-header"},[t._v("NSFW")]),i("div",{staticClass:"form-description"},[t._v(" This content is NSFW (may contain nudity, pornography, profanity or inappropriate content for those under 18) ")])]),i("div",[i("v-switch",{attrs:{inset:"",color:"primary"},model:{value:t.profile.adult_content,callback:function(e){t.$set(t.profile,"adult_content",e)},expression:"profile.adult_content"}})],1)])]),i("div",{staticClass:"overline pb-2"},[i("div",[t._v("advanced")]),i("v-divider")],1),i("div",{staticClass:"advanced"},[i("div",{staticClass:"d-flex justify-space-between"},[i("div",[i("div",{staticClass:"form-header"},[t._v("Allow people to follow you")]),i("div",{staticClass:"form-description"},[t._v(" Followers will be notified about posts you make to your profile and see them in their home feed. ")])]),i("div",[i("v-switch",{attrs:{inset:"",color:"primary"},model:{value:t.profile.allow_follow,callback:function(e){t.$set(t.profile,"allow_follow",e)},expression:"profile.allow_follow"}})],1)]),i("div",{staticClass:"d-flex justify-space-between"},[i("div",[i("div",{staticClass:"form-header"},[t._v("Content visibility")]),i("div",{staticClass:"form-description"},[t._v(" Posts to this profile can appear in "),i("a",{attrs:{href:""}},[t._v("w/all")]),t._v(" and your profile can be discovered in "),i("a",{attrs:{href:""}},[t._v("/users")])])]),i("div",[i("v-switch",{attrs:{inset:"",color:"primary"},model:{value:t.profile.content_visibility,callback:function(e){t.$set(t.profile,"content_visibility",e)},expression:"profile.content_visibility"}})],1)]),i("div",{staticClass:"d-flex justify-space-between"},[i("div",[i("div",{staticClass:"form-header"},[t._v("Active in communities visibility")]),i("div",{staticClass:"form-description"},[t._v(" Show which communities I am active in on my profile ")])]),i("div",[i("v-switch",{attrs:{inset:"",color:"primary"},model:{value:t.profile.communities_visibility,callback:function(e){t.$set(t.profile,"communities_visibility",e)},expression:"profile.communities_visibility"}})],1)])])]),i("v-card-actions",{staticClass:"pb-0 pt-4"})],1)},a=[],n=i("5530"),r=i("2f62"),o=i("9258"),c=i("ef9e"),l={name:"Profile",mixins:[o["a"],c["a"]],data:function(){return{profile:{bio:null,display_name:null,allow_follow:!0,content_visibility:!0,communities_visibility:!0,adult_content:!1}}},computed:Object(n["a"])({},Object(r["b"])({user:"user/current"})),created:function(){},methods:{}},d=l,h=(i("adad"),i("2877")),u=i("6544"),v=i.n(u),f=i("8212"),p=i("8336"),m=i("b0af"),g=i("99d9"),b=i("ce7e"),_=i("132d"),y=i("adda"),S=i("2fa4"),C=i("b73d"),w=Object(h["a"])(d,s,a,!1,null,"8ffc339c",null);e["default"]=w.exports;v()(w,{VAvatar:f["a"],VBtn:p["a"],VCard:m["a"],VCardActions:g["a"],VCardText:g["c"],VCardTitle:g["d"],VDivider:b["a"],VIcon:_["a"],VImg:y["a"],VSpacer:S["a"],VSwitch:C["a"]})},"36a7":function(t,e,i){},"6b53":function(t,e,i){"use strict";i("a9e3"),i("36a7");var s=i("24b2"),a=i("58df");e["a"]=Object(a["a"])(s["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}})},"78d7":function(t,e,i){"use strict";var s=i("6b53");e["a"]=s["a"]},8212:function(t,e,i){"use strict";var s=i("5530"),a=(i("a9e3"),i("3408"),i("a9ad")),n=i("24b2"),r=i("a236"),o=i("80d2"),c=i("58df");e["a"]=Object(c["a"])(a["a"],n["a"],r["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(s["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(s["a"])({height:Object(o["g"])(this.size),minWidth:Object(o["g"])(this.size),width:Object(o["g"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}})},8547:function(t,e,i){"use strict";var s=i("2b0e"),a=i("80d2");e["a"]=s["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:a["j"]}}})},"8a79":function(t,e,i){"use strict";var s=i("23e7"),a=i("e330"),n=i("06cf").f,r=i("50c4"),o=i("577e"),c=i("5a34"),l=i("1d80"),d=i("ab13"),h=i("c430"),u=a("".endsWith),v=a("".slice),f=Math.min,p=d("endsWith"),m=!h&&!p&&!!function(){var t=n(String.prototype,"endsWith");return t&&!t.writable}();s({target:"String",proto:!0,forced:!m&&!p},{endsWith:function(t){var e=o(l(this));c(t);var i=arguments.length>1?arguments[1]:void 0,s=e.length,a=void 0===i?s:f(r(i),s),n=o(t);return u?u(e,n,a):v(e,a-n.length,a)===n}})},"8ce9":function(t,e,i){},"8efc":function(t,e,i){},9258:function(t,e,i){"use strict";var s=i("a583"),a={mixins:[s["a"]],data:function(){return{uploadMode:null}},computed:{avatarMode:function(){return"avatar"===this.uploadMode},coverMode:function(){return"cover"===this.uploadMode},avatarUrl:function(){return this.avatarMode&&this.fileUrls.length?this.fileUrls[0]:!(!this.user||!this.user.profile.avatar)&&this.$link(this.user.profile.avatar.image)},coverUrl:function(){return this.coverMode&&this.fileUrls.length?this.fileUrls[0]:!(!this.user||!this.user.profile.cover)&&this.$link(this.user.profile.cover.image)}},methods:{avatarInputChanged:function(t){this.fileInputChanged(t),this.uploadMode="avatar"},coverInputChanged:function(t){this.fileInputChanged(t),this.uploadMode="cover"},successCleanup:function(){this.clearFiles(),this.uploadMode=null,this.$store.dispatch("user/setCurrentUser",this.postInstance).then((function(){})),this.$helper.setCurrentUser(this.postInstance)},save:function(){"avatar"===this.uploadMode?this.addAvatar():"cover"===this.uploadMode&&this.addCover()},addAvatar:function(){var t=this,e=this.$helper.createFormData({image:this.files[0]});this.post(this.$urls.user.addAvatar,e).then((function(){t.success?(t.openSuccessSnack("Avatar added successfully."),t.successCleanup()):t.openSnack("Sorry, something went wrong.")}))},addCover:function(){var t=this,e=this.$helper.createFormData({image:this.files[0]});this.post(this.$urls.user.addCover,e).then((function(){t.success?(t.openSuccessSnack("Cover added successfully."),t.successCleanup()):t.openSnack("Sorry, something went wrong.")}))}}};e["a"]=a},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"d",(function(){return c}));var s=i("b0af"),a=i("80d2"),n=Object(a["i"])("v-card__actions"),r=Object(a["i"])("v-card__subtitle"),o=Object(a["i"])("v-card__text"),c=Object(a["i"])("v-card__title");s["a"]},"9d01":function(t,e,i){},"9d26":function(t,e,i){"use strict";var s=i("132d");e["a"]=s["a"]},a583:function(t,e,i){"use strict";i("a434"),i("d3b7"),i("159b"),i("3ca3"),i("ddb0"),i("2b3d"),i("9861"),i("a630");var s={data:function(){return{files:[],fileUrls:[],totalSize:null}},methods:{clearFiles:function(){this.files=[],this.fileUrls=[],this.totalSize=null},removeFile:function(t,e){this.files.splice(e,1),this.fileUrls.splice(e,1),this.totalSize-=t.size},addTargetFilesToList:function(t){var e=this;t.forEach((function(t){e.files.push(t),e.fileUrls.push(URL.createObjectURL(t)),e.totalSize+=t.size}))},fileInputChanged:function(t){var e=Array.from(t.target.files);this.addTargetFilesToList(e)},dragFile:function(t){var e=Array.from(t.dataTransfer.files);this.addTargetFilesToList(e)}}};e["a"]=s},adad:function(t,e,i){"use strict";i("f5730")},adda:function(t,e,i){"use strict";var s=i("53ca"),a=(i("a9e3"),i("a15b"),i("8a79"),i("2ca0"),i("8efc"),i("90a2")),n=i("78d7"),r=i("7560"),o=i("58df"),c=i("d9f7"),l=i("d9bd"),d="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(o["a"])(n["a"],r["a"]).extend({name:"v-img",directives:{intersect:a["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(s["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!d||i||this.eager){if(this.normalisedSrc.lazySrc){var s=new Image;s.src=this.normalisedSrc.lazySrc,this.pollForSize(s,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(l["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var a=t.naturalHeight,n=t.naturalWidth;a||n?(e.naturalWidth=n,e.calculatedAspectRatio=n/a):t.complete||!e.isLoading||e.hasError||null==i||setTimeout(s,i)};s()},genContent:function(){var t=n["a"].options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=n["a"].options.render.call(this,t),i=Object(c["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},b73d:function(t,e,i){"use strict";var s=i("15fd"),a=i("5530"),n=(i("0481"),i("4069"),i("ec29"),i("9d01"),i("fe09")),r=i("c37a"),o=i("c3f0"),c=i("0789"),l=i("490a"),d=i("80d2"),h=["title"];e["a"]=n["a"].extend({name:"v-switch",directives:{Touch:o["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(s["a"])(t,h));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(a["a"])(Object(a["a"])({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(c["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(l["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===d["u"].left&&this.isActive||t.keyCode===d["u"].right&&!this.isActive)&&this.onChange()}}})},c3f0:function(t,e,i){"use strict";i("d3b7"),i("159b");var s=i("80d2"),a=function(t){var e=t.touchstartX,i=t.touchendX,s=t.touchstartY,a=t.touchendY,n=.5,r=16;t.offsetX=i-e,t.offsetY=a-s,Math.abs(t.offsetY)<n*Math.abs(t.offsetX)&&(t.left&&i<e-r&&t.left(t),t.right&&i>e+r&&t.right(t)),Math.abs(t.offsetX)<n*Math.abs(t.offsetY)&&(t.up&&a<s-r&&t.up(t),t.down&&a>s+r&&t.down(t))};function n(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function r(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),a(e)}function o(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function c(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return n(t,e)},touchend:function(t){return r(t,e)},touchmove:function(t){return o(t,e)}}}function l(t,e,i){var a=e.value,n=a.parent?t.parentElement:t,r=a.options||{passive:!0};if(n){var o=c(e.value);n._touchHandlers=Object(n._touchHandlers),n._touchHandlers[i.context._uid]=o,Object(s["v"])(o).forEach((function(t){n.addEventListener(t,o[t],r)}))}}function d(t,e,i){var a=e.value.parent?t.parentElement:t;if(a&&a._touchHandlers){var n=a._touchHandlers[i.context._uid];Object(s["v"])(n).forEach((function(t){a.removeEventListener(t,n[t])})),delete a._touchHandlers[i.context._uid]}}var h={inserted:l,unbind:d};e["a"]=h},ce7e:function(t,e,i){"use strict";var s=i("5530"),a=(i("8ce9"),i("7560"));e["a"]=a["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(s["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(s["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},ef9e:function(t,e,i){"use strict";i("d3b7");var s={data:function(){return{patchInstance:null,patchErrors:{},patching:!1,patchSuccess:!1}},methods:{patch:function(t,e){var i=this;return this.patching=!0,this.$axios.patch(t,e).then((function(t){i.patchSuccess=!0,i.patchInstance=t,i.patchErrors={}})).catch((function(t){i.patchErrors=t.response.data})).finally((function(){i.patching=!1}))}}};e["a"]=s},f5730:function(t,e,i){}}]);
//# sourceMappingURL=chunk-1964bc9e.4479421e.js.map