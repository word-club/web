(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e279696"],{"169a":function(t,e,i){"use strict";var n=i("5530"),s=i("2909"),o=i("ade3"),a=(i("a9e3"),i("498a"),i("caad"),i("2532"),i("d3b7"),i("7db0"),i("368e"),i("480e")),r=i("4ad4"),l=i("b848"),c=i("75eb"),d=i("e707"),u=i("e4d3"),h=i("21be"),v=i("f2e7"),f=i("a293"),m=i("58df"),y=i("d9bd"),p=i("80d2"),g=Object(m["a"])(r["a"],l["a"],c["a"],d["a"],u["a"],h["a"],v["a"]);e["a"]=g.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(o["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o["a"])(t,"v-dialog--active",this.isActive),Object(o["a"])(t,"v-dialog--persistent",this.persistent),Object(o["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(o["a"])(t,"v-dialog--scrollable",this.scrollable),Object(o["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(y["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.$refs.content.contains(document.activeElement)||(t.previousActiveElement=document.activeElement,t.$refs.content.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===p["u"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(s["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(a["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(n["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(n["a"])(Object(n["a"])({},t.style),{},{maxWidth:Object(p["g"])(this.maxWidth),width:Object(p["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"368e":function(t,e,i){},"3c93":function(t,e,i){},"9c50":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{"max-width":"600"},model:{value:t.draftDialog,callback:function(e){t.draftDialog=e},expression:"draftDialog"}},[i("v-card",[i("v-card-title",[t._v("Your Drafts")]),i("v-card-text",[t.drafts.results?i("v-list",t._l(t.drafts.results,(function(e,n){return i("v-list-item",{key:e.id},[i("v-list-item-avatar",{staticClass:"d-flex align-center justify-center",attrs:{color:"error lighten-5"}},[i("v-btn",{attrs:{color:"error",icon:""},on:{click:function(i){return t.deleteDraft(e.id,n)}}},[i("v-icon",[t._v("mdi-delete")])],1)],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.title))]),i("v-list-item-subtitle",[i("span",[i("b",[t._v("Type:")]),t._v(" "+t._s(e.type.replace(/^\w/,(function(t){return t.toUpperCase()}))))]),i("v-icon",[t._v("mdi-circle-small")]),i("span",[i("b",[t._v("In behalf of:")]),t._v(" "+t._s(e.community?e.community.name:"Yourself"))])],1),i("v-list-item-subtitle",[i("span",[i("b",[t._v("Last updated:")]),t._v(" "+t._s(t.$moment(e.timestamp).fromNow()))])])],1),i("v-list-item-action",[i("v-btn",{attrs:{rounded:"",color:e.community?e.community.theme.color:"primary",disabled:t.inProgress&&t.inProgress.id===e.id},on:{click:function(i){return t.startEditingDraft(e)}}},[t._v(" "+t._s(t.inProgress&&t.inProgress.id===e.id?"In Progress":"Start Editing")+" ")])],1)],1)})),1):i("div",[t._v("No drafts saved yet.")])],1)],1)],1)},s=[],o=i("5530"),a=i("2f62"),r=i("c473"),l={name:"DraftsDialog",mixins:[r["a"]],computed:Object(o["a"])(Object(o["a"])({},Object(a["b"])({inProgress:"publication/inProgress",drafts:"publication/draftList"})),{},{draftDialog:{get:function(){return this.$store.getters.draftState},set:function(t){this.$store.dispatch("setDraftState",t)}}}),methods:{startEditingDraft:function(t){this.inProgress&&this.inProgress.id===t.id||(this.$store.dispatch("publication/setInProgress",t),this.draftDialog=!1,this.$emit("initDraft"))},deleteDraft:function(t){var e=this,i=this.$util.format(this.$urls.publication.detail,t);this.$axios.delete(i).then((function(){t===e.inProgress.id&&(e.$store.dispatch("publication/setInProgress",null),e.$emit("startNew")),e.$store.dispatch("publication/removeDraftItem",t).then((function(){0===e.drafts.count&&(e.draftDialog=!1)})),e.openSuccessSnack("Draft deleted successfully.")})).catch((function(){e.openSnack("Something went wrong. Please try again.")}))}}},c=l,d=i("2877"),u=i("6544"),h=i.n(u),v=i("8336"),f=i("b0af"),m=i("99d9"),y=i("169a"),p=i("132d"),g=i("8860"),b=i("da13"),w=i("1800"),O=i("8270"),$=i("5d23"),C=Object(d["a"])(c,n,s,!1,null,"18e46ec6",null);e["default"]=C.exports;h()(C,{VBtn:v["a"],VCard:f["a"],VCardText:m["c"],VCardTitle:m["d"],VDialog:y["a"],VIcon:p["a"],VList:g["a"],VListItem:b["a"],VListItemAction:w["a"],VListItemAvatar:O["a"],VListItemContent:$["a"],VListItemSubtitle:$["b"],VListItemTitle:$["c"]})},e707:function(t,e,i){"use strict";i("a9e3"),i("caad"),i("2532");var n=i("5530"),s=(i("3c93"),i("a9ad")),o=i("7560"),a=i("f2e7"),r=i("58df"),l=Object(r["a"])(s["a"],o["a"],a["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(n["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),c=l,d=i("80d2"),u=i("2b0e");e["a"]=u["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new c({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(d["r"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(d["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[d["u"].up,d["u"].pageup],i=[d["u"].down,d["u"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var i,n,s=e.shiftKey||e.deltaX?"x":"y",o="y"===s?e.deltaY:e.deltaX||e.deltaY;"y"===s?(i=0===t.scrollTop,n=t.scrollTop+t.clientHeight===t.scrollHeight):(i=0===t.scrollLeft,n=t.scrollLeft+t.clientWidth===t.scrollWidth);var a=o<0,r=o>0;return!(i||!a)||(!(n||!r)||!(!i&&!n)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=Object(d["f"])(t);if("keydown"===t.type&&e[0]===document.body){var i=this.$refs.dialog,n=window.getSelection().anchorNode;return!(i&&this.hasScrollbar(i)&&this.isInside(n,i))||!this.shouldScroll(i,t)}for(var s=0;s<e.length;s++){var o=e[s];if(o===document)return!0;if(o===document.documentElement)return!0;if(o===this.$refs.content)return!0;if(this.hasScrollbar(o))return!this.shouldScroll(o,t)}return!0},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(d["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})}}]);
//# sourceMappingURL=chunk-2e279696.a4939b8b.js.map