(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7aecc2fc"],{"061d":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{outlined:""}},[i("v-card-title",{staticClass:"about-community",class:t.community.theme.color},[i("div",{staticClass:"about-community--title"},[t._v(" About Community ")]),i("v-menu",{attrs:{bottom:"","nudge-bottom":"30"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[t.isCommunityManager?i("v-btn",t._g(t._b({attrs:{icon:"",small:"",dark:""}},"v-btn",n,!1),s),[i("v-icon",[t._v("mdi-dots-horizontal")])],1):t._e()]}}])},[i("v-list",{attrs:{dense:"",outlined:""}},[i("v-list-item",{on:{click:function(e){return t.$router.push({name:"Community MOD Settings Reports"})}}},[i("v-list-item-icon",[i("v-icon",[t._v("mdi-cog")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("MOD Tools")])],1)],1)],1)],1)],1),i("v-card-text",{staticClass:"pa-3"},[t.community.description?i("div",{staticClass:"about-community--quote"},[t._v(" "+t._s(t.community.description)+" ")]):i("text-area",{attrs:{name:"description",label:"Community Quote",icon:"mdi-format-quote-close",counter:"256"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),t.description?i("v-btn",{attrs:{block:"",dark:"",color:t.community.theme.color},on:{click:t.patchQuote}},[t._v(" Update ")]):t._e()],1),i("v-card-text",{staticClass:"d-flex align-center pa-3 weight-500 justify-space-between"},[i("div",[i("div",{staticClass:"px18"},[t._v(" "+t._s(t.community.subscriptions.subscribers)+" ")]),i("div",{staticClass:"px14"},[t._v(" "+t._s(t.community.theme.to_call_subscriber)+" ")])]),i("div",{staticClass:"px-1"}),i("div",[i("div",{staticClass:"px18"},[t._v(" "+t._s(t.community.subscriptions.notification_disables)+" ")]),i("div",{staticClass:"px14"},[t._v(" "+t._s(t.community.theme.state_after_subscription)+" ")])])]),i("v-divider"),i("v-card-text",{staticClass:"pa-3 d-flex align-center"},[i("v-icon",[t._v(" mdi-routes-clock ")]),i("div",{staticClass:"px-2 px16 weight-500"},[t._v(" Created "+t._s(t.$moment(t.community.date_of_registration).fromNow())+" ")])],1),i("v-card-text",{staticClass:"pa-3"},[i("v-btn",{attrs:{block:"",rounded:"",color:t.community.theme.color,depressed:"",dark:""}},[t._v(" Create Post ")])],1),i("v-divider"),i("v-card-text",[i("v-btn",{attrs:{depressed:"",small:"",rounded:"",block:""},on:{click:function(e){t.options=!t.options}},scopedSlots:t._u([{key:"default",fn:function(){return[i("div",{staticClass:"d-flex align-center justify-space-between px-4",staticStyle:{width:"100%"}},[i("div",[t._v("Community options")]),i("v-icon",[t._v("mdi-chevron-down")])],1)]},proxy:!0}])})],1),i("v-slide-y-transition",[t.options?i("v-card-actions",[i("v-card",{staticClass:"full-width",attrs:{outlined:"",rounded:"lg"}},[i("v-list-item",[i("v-list-item-icon",[i("v-icon",[t._v("mdi-eye-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Community Theme")])],1),i("v-list-item-action",[i("v-switch",{attrs:{color:t.community.theme.color},model:{value:t.seeTheme,callback:function(e){t.seeTheme=e},expression:"seeTheme"}})],1)],1)],1)],1):t._e()],1)],1)},n=[],a=i("5530"),o=(i("a4d3"),i("e01a"),i("2f62")),c=i("b6ae"),r=i("ef9e"),u=i("c473"),l={name:"AboutCommunity",mixins:[c["a"],r["a"],u["a"]],data:function(){return{description:null,options:!1,seeTheme:!0}},computed:Object(a["a"])({},Object(o["b"])({community:"community/inView",currentUser:"user/current"})),methods:{patchQuote:function(){var t=this;this.patch(this.$util.format(this.$urls.community.detail,this.community.id),{description:this.description}).then((function(){t.patchSuccess?t.openSuccessSnack("Community quote updated!"):t.openSnack("Community quote update failed.")}))}}},h=l,d=(i("a9ac"),i("2877")),v=i("6544"),f=i.n(v),m=i("8336"),b=i("b0af"),p=i("99d9"),g=i("ce7e"),_=i("132d"),C=i("8860"),S=i("da13"),y=i("1800"),x=i("5d23"),w=i("34c3"),O=i("e449"),E=i("0789"),T=i("b73d"),k=Object(d["a"])(h,s,n,!1,null,"66d07c64",null);e["default"]=k.exports;f()(k,{VBtn:m["a"],VCard:b["a"],VCardActions:p["a"],VCardText:p["c"],VCardTitle:p["d"],VDivider:g["a"],VIcon:_["a"],VList:C["a"],VListItem:S["a"],VListItemAction:y["a"],VListItemContent:x["a"],VListItemIcon:w["a"],VListItemTitle:x["c"],VMenu:O["a"],VSlideYTransition:E["h"],VSwitch:T["a"]})},3206:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var s=i("ade3"),n=(i("99af"),i("2b0e")),a=i("d9bd");function o(t,e){return function(){return Object(a["c"])("The ".concat(t," component must be used inside a ").concat(e))}}function c(t,e,i){var a=e&&i?{register:o(e,i),unregister:o(e,i)}:null;return n["a"].extend({name:"registrable-inject",inject:Object(s["a"])({},t,{default:a})})}},"490a":function(t,e,i){"use strict";i("a9e3"),i("99af"),i("8d4f");var s=i("90a2"),n=i("a9ad"),a=i("80d2");e["a"]=n["a"].extend({name:"v-progress-circular",directives:{intersect:s["a"]},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20,isVisible:!0}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(a["g"])(this.calculatedSize),width:Object(a["g"])(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve:function(t,e,i){this.isVisible=i}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},"4e82c":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var s=i("ade3"),n=i("3206");function a(t,e,i){return Object(n["a"])(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?Object(s["a"])({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}a("itemGroup")},8336:function(t,e,i){"use strict";var s=i("53ca"),n=i("3835"),a=i("5530"),o=(i("c7cd"),i("a9e3"),i("d3b7"),i("caad"),i("e9c4"),i("86cc"),i("10d2")),c=i("490a"),r=c["a"],u=i("4e82c"),l=i("f2e7"),h=i("c995"),d=i("fe6c"),v=i("1c87"),f=i("af2b"),m=i("58df"),b=i("d9bd"),p=Object(m["a"])(o["a"],v["a"],d["a"],f["a"],Object(u["a"])("btnToggle"),Object(l["b"])("inputValue"));e["a"]=p.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({"v-btn":!0},v["a"].options.computed.classes.call(this)),{},{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses),this.groupClasses),this.elevationClasses),this.sizeableClasses)},computedElevation:function(){if(!this.disabled)return h["a"].options.computed.computedElevation.call(this)},computedRipple:function(){var t,e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg:function(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated:function(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return Object(a["a"])({},this.measurableStyles)}},created:function(){var t=this,e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((function(e){var i=Object(n["a"])(e,2),s=i[0],a=i[1];t.$attrs.hasOwnProperty(s)&&Object(b["a"])(s,a,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(r,{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],i=this.generateRouteLink(),n=i.tag,a=i.data,o=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===n&&(a.attrs.type=this.type,a.attrs.disabled=this.disabled),a.attrs.value=["string","number"].includes(Object(s["a"])(this.value))?this.value:JSON.stringify(this.value),t(n,this.disabled?a:o(this.color,a),e)}})},"86cc":function(t,e,i){},"8d4f":function(t,e,i){},"9d01":function(t,e,i){},a9ac:function(t,e,i){"use strict";i("bad3")},af2b:function(t,e,i){"use strict";i("c96a");var s=i("2b0e");e["a"]=s["a"].extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},b73d:function(t,e,i){"use strict";var s=i("15fd"),n=i("5530"),a=(i("0481"),i("4069"),i("ec29"),i("9d01"),i("fe09")),o=i("c37a"),c=i("c3f0"),r=i("0789"),u=i("490a"),l=i("80d2"),h=["title"];e["a"]=a["a"].extend({name:"v-switch",directives:{Touch:c["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(s["a"])(t,h));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(n["a"])(Object(n["a"])({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(n["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(n["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(r["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(u["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===l["u"].left&&this.isActive||t.keyCode===l["u"].right&&!this.isActive)&&this.onChange()}}})},bad3:function(t,e,i){},c3f0:function(t,e,i){"use strict";i("d3b7"),i("159b");var s=i("80d2"),n=function(t){var e=t.touchstartX,i=t.touchendX,s=t.touchstartY,n=t.touchendY,a=.5,o=16;t.offsetX=i-e,t.offsetY=n-s,Math.abs(t.offsetY)<a*Math.abs(t.offsetX)&&(t.left&&i<e-o&&t.left(t),t.right&&i>e+o&&t.right(t)),Math.abs(t.offsetX)<a*Math.abs(t.offsetY)&&(t.up&&n<s-o&&t.up(t),t.down&&n>s+o&&t.down(t))};function a(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function o(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),n(e)}function c(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function r(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return a(t,e)},touchend:function(t){return o(t,e)},touchmove:function(t){return c(t,e)}}}function u(t,e,i){var n=e.value,a=n.parent?t.parentElement:t,o=n.options||{passive:!0};if(a){var c=r(e.value);a._touchHandlers=Object(a._touchHandlers),a._touchHandlers[i.context._uid]=c,Object(s["v"])(c).forEach((function(t){a.addEventListener(t,c[t],o)}))}}function l(t,e,i){var n=e.value.parent?t.parentElement:t;if(n&&n._touchHandlers){var a=n._touchHandlers[i.context._uid];Object(s["v"])(a).forEach((function(t){n.removeEventListener(t,a[t])})),delete n._touchHandlers[i.context._uid]}}var h={inserted:u,unbind:l};e["a"]=h},c473:function(t,e,i){"use strict";var s=i("5530"),n=i("2f62"),a={methods:Object(s["a"])(Object(s["a"])({},Object(n["c"])("snack",["SET_SNACK","SET_COLOR","SET_TEXT","SET_LINE","SET_TIMEOUT"])),{},{openSnack:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.color,s=void 0===i?"error":i,n=e.timeout,a=void 0===n?3e3:n,o=e.multiline,c=void 0!==o&&o;this.SET_SNACK(!0),this.SET_TIMEOUT(a),this.SET_LINE(c),this.SET_TEXT(t),this.SET_COLOR(s)},openSuccessSnack:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.color,s=void 0===i?"success":i,n=e.timeout,a=void 0===n?3e3:n,o=e.multiline,c=void 0!==o&&o;this.SET_SNACK(!0),this.SET_TIMEOUT(a),this.SET_LINE(c),this.SET_TEXT(t),this.SET_COLOR(s)}})};e["a"]=a},c96a:function(t,e,i){"use strict";var s=i("23e7"),n=i("857a"),a=i("af03");s({target:"String",proto:!0,forced:a("small")},{small:function(){return n(this,"small","","")}})},ef9e:function(t,e,i){"use strict";i("d3b7");var s={data:function(){return{patchInstance:null,patchErrors:{},patching:!1,patchSuccess:!1}},methods:{patch:function(t,e){var i=this;return this.patching=!0,this.$axios.patch(t,e).then((function(t){i.patchSuccess=!0,i.patchInstance=t,i.patchErrors={}})).catch((function(t){i.patchErrors=t.response.data})).finally((function(){i.patching=!1}))}}};e["a"]=s},f2e7:function(t,e,i){"use strict";i.d(e,"b",(function(){return a}));var s=i("ade3"),n=i("2b0e");function a(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return n["a"].extend({name:"toggleable",model:{prop:e,event:i},props:Object(s["a"])({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},Object(s["a"])(t,e,(function(t){this.isActive=!!t})),Object(s["a"])(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(i,t)})),t)})}var o=a();e["a"]=o}}]);
//# sourceMappingURL=chunk-7aecc2fc.5e5e9ceb.js.map