(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32eeb76a"],{"169a":function(e,t,i){"use strict";var n=i("5530"),o=i("2909"),a=i("ade3"),s=(i("a9e3"),i("498a"),i("caad"),i("2532"),i("d3b7"),i("7db0"),i("368e"),i("480e")),r=i("4ad4"),l=i("b848"),c=i("75eb"),d=i("e707"),u=i("e4d3"),h=i("21be"),v=i("f2e7"),f=i("a293"),m=i("58df"),y=i("d9bd"),g=i("80d2"),p=Object(m["a"])(r["a"],l["a"],c["a"],d["a"],u["a"],h["a"],v["a"]);t["a"]=p.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var e;return e={},Object(a["a"])(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(a["a"])(e,"v-dialog--active",this.isActive),Object(a["a"])(e,"v-dialog--persistent",this.persistent),Object(a["a"])(e,"v-dialog--fullscreen",this.fullscreen),Object(a["a"])(e,"v-dialog--scrollable",this.scrollable),Object(a["a"])(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){var t;e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(t=this.previousActiveElement)||t.focus())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(y["e"])("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d["a"].options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$nextTick((function(){e.$refs.content.contains(document.activeElement)||(e.previousActiveElement=document.activeElement,e.$refs.content.focus()),e.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===g["u"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&![document,this.$refs.content].includes(t)&&!this.$refs.content.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(o["a"])(i).find((function(e){return!e.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var e=this;return this.showLazyContent((function(){return[e.$createElement(s["a"],{props:{root:!0,light:e.light,dark:e.dark}},[e.$createElement("div",{class:e.contentClasses,attrs:Object(n["a"])({role:"document",tabindex:e.isActive?0:void 0},e.getScopeIdAttrs()),on:{keydown:e.onKeydown},style:{zIndex:e.activeZIndex},ref:"content"},[e.genTransition()])])]}))},genTransition:function(){var e=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[e]):e},genInnerContent:function(){var e={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(e.style=Object(n["a"])(Object(n["a"])({},e.style),{},{maxWidth:Object(g["g"])(this.maxWidth),width:Object(g["g"])(this.width)})),this.$createElement("div",e,this.getContentSlot())}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"368e":function(e,t,i){},"3c93":function(e,t,i){},"96ec":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-dialog",{attrs:{value:e.dialogState,persistent:""}},[i("v-card",[i("v-card-title",[e._v(" CONFIRMATION "),i("v-spacer"),i("v-btn",{attrs:{fab:"",small:""},on:{click:e.closeDialog}},[i("v-icon",[e._v("mdi-close")])],1)],1),i("v-card-text",[i("h3",{domProps:{innerHTML:e._s(e.dialogMessage)}})]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"error"},on:{click:e.closeDialog}},[e._v("Cancel")]),i("v-btn",{attrs:{color:"success"},on:{click:e.proceedDialog}},[e._v("Proceed")])],1)],1)],1)},o=[],a=i("5530"),s=(i("d3b7"),i("159b"),i("2f62")),r=i("bc3a"),l=i.n(r),c=i("c473"),d={name:"ConfirmDialog",mixins:[c["a"]],emits:["refreshMe","refreshCommunity"],computed:Object(a["a"])({},Object(s["b"])("confirmDialog",["dialogState","dialogMessage","dialogMethod","dialogUrl","dialogSuccessEvents","dialogSuccessMessage","dialogFailureMessage"])),methods:{closeDialog:function(){this.$store.dispatch("confirmDialog/close")},proceedDialog:function(){var e=this,t="https://wordclub.foodswipe.com.np";l()({headers:{Authorization:"Token "+this.$helper.getAccessToken()},method:this.dialogMethod,url:"".concat(t,"/api/")+this.dialogUrl}).then((function(){e.openSuccessSnack(e.dialogSuccessMessage),e.dialogSuccessEvents.forEach((function(t){e.$emit(t)})),e.closeDialog()})).catch((function(){e.openSnack(e.dialogFailureMessage)}))}}},u=d,h=i("2877"),v=i("6544"),f=i.n(v),m=i("8336"),y=i("b0af"),g=i("99d9"),p=i("169a"),b=i("132d"),w=i("2fa4"),O=Object(h["a"])(u,n,o,!1,null,"7951a38d",null);t["default"]=O.exports;f()(O,{VBtn:m["a"],VCard:y["a"],VCardActions:g["a"],VCardText:g["c"],VCardTitle:g["d"],VDialog:p["a"],VIcon:b["a"],VSpacer:w["a"]})},e707:function(e,t,i){"use strict";i("a9e3"),i("caad"),i("2532");var n=i("5530"),o=(i("3c93"),i("a9ad")),a=i("7560"),s=i("f2e7"),r=i("58df"),l=Object(r["a"])(o["a"],a["a"],s["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes:function(){return Object(n["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(e){var t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},t)}}),c=l,d=i("80d2"),u=i("2b0e");t["a"]=u["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(e){this.isActive&&(e?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var e=new c({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});e.$mount();var t=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");t&&t.insertBefore(e.$el,t.firstChild),this.overlay=e},genOverlay:function(){var e=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){e.overlay&&(void 0!==e.activeZIndex?e.overlay.zIndex=String(e.activeZIndex-1):e.$el&&(e.overlay.zIndex=Object(d["r"])(e.$el)),e.overlay.value=!0)})),!0},removeOverlay:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(d["a"])(this.overlay.$el,"transitionend",(function(){e.overlay&&e.overlay.$el&&e.overlay.$el.parentNode&&!e.overlay.value&&!e.isActive&&(e.overlay.$el.parentNode.removeChild(e.overlay.$el),e.overlay.$destroy(),e.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener:function(e){if("keydown"===e.type){if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||e.target.isContentEditable)return;var t=[d["u"].up,d["u"].pageup],i=[d["u"].down,d["u"].pagedown];if(t.includes(e.keyCode))e.deltaY=-1;else{if(!i.includes(e.keyCode))return;e.deltaY=1}}(e.target===this.overlay||"keydown"!==e.type&&e.target===document.body||this.checkPath(e))&&e.preventDefault()},hasScrollbar:function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e);return(["auto","scroll"].includes(t.overflowY)||"SELECT"===e.tagName)&&e.scrollHeight>e.clientHeight||["auto","scroll"].includes(t.overflowX)&&e.scrollWidth>e.clientWidth},shouldScroll:function(e,t){if(e.hasAttribute("data-app"))return!1;var i,n,o=t.shiftKey||t.deltaX?"x":"y",a="y"===o?t.deltaY:t.deltaX||t.deltaY;"y"===o?(i=0===e.scrollTop,n=e.scrollTop+e.clientHeight===e.scrollHeight):(i=0===e.scrollLeft,n=e.scrollLeft+e.clientWidth===e.scrollWidth);var s=a<0,r=a>0;return!(i||!s)||(!(n||!r)||!(!i&&!n)&&this.shouldScroll(e.parentNode,t))},isInside:function(e,t){return e===t||null!==e&&e!==document.body&&this.isInside(e.parentNode,t)},checkPath:function(e){var t=Object(d["f"])(e);if("keydown"===e.type&&t[0]===document.body){var i=this.$refs.dialog,n=window.getSelection().anchorNode;return!(i&&this.hasScrollbar(i)&&this.isInside(n,i))||!this.shouldScroll(i,e)}for(var o=0;o<t.length;o++){var a=t[o];if(a===document)return!0;if(a===document.documentElement)return!0;if(a===this.$refs.content)return!0;if(this.hasScrollbar(a))return!this.shouldScroll(a,e)}return!0},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(d["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})}}]);
//# sourceMappingURL=chunk-32eeb76a.77e11c78.js.map