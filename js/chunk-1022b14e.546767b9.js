(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1022b14e"],{"169a":function(t,e,i){"use strict";var n=i("5530"),s=i("2909"),o=i("ade3"),a=(i("a9e3"),i("498a"),i("caad"),i("2532"),i("d3b7"),i("7db0"),i("368e"),i("480e")),r=i("4ad4"),l=i("b848"),c=i("75eb"),u=i("e707"),d=i("e4d3"),h=i("21be"),v=i("f2e7"),f=i("a293"),m=i("58df"),p=i("d9bd"),y=i("80d2"),g=Object(m["a"])(r["a"],l["a"],c["a"],u["a"],d["a"],h["a"],v["a"]);e["a"]=g.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(o["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o["a"])(t,"v-dialog--active",this.isActive),Object(o["a"])(t,"v-dialog--persistent",this.persistent),Object(o["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(o["a"])(t,"v-dialog--scrollable",this.scrollable),Object(o["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(p["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):u["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.$refs.content.contains(document.activeElement)||(t.previousActiveElement=document.activeElement,t.$refs.content.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===y["z"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(s["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(a["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(n["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(n["a"])(Object(n["a"])({},t.style),{},{maxWidth:Object(y["h"])(this.maxWidth),width:Object(y["h"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"368e":function(t,e,i){},"3c93":function(t,e,i){},"3f95":function(t,e,i){"use strict";i("d3b7");var n={data:function(){return{deleteErrors:{},deleted:!1,deleting:!1,deleteResponse:null}},methods:{delete:function(t){var e=this;return this.deleting=!0,this.$axios.delete(t).then((function(t){e.deleted=!0,e.deleteResponse=t})).catch((function(t){e.deleteErrors=t.response.data})).finally((function(){e.deleting=!1}))}}};e["a"]=n},"5f3b":function(t,e,i){"use strict";i("d3b7");var n={data:function(){return{posting:!1,postInstance:null,formErrors:{},statusCode:null,success:!1}},methods:{post:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.posting=!0,this.$axios.send("POST",t,i,n).then((function(t){e.success=!0,e.postInstance=t.data,e.formErrors={}})).catch((function(t){console.debug(t),e.success=!1,e.postInstance=null,e.statusCode=t.response.status,e.formErrors=t.response.data})).finally((function(){e.posting=!1}))}}};e["a"]=n},"9e6b":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{"max-width":"500",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",[t._v(" "+t._s(t.ruleInEdit?"Edit Rule":"Add Rule")+" "),i("v-spacer"),i("v-btn",{attrs:{icon:""},on:{click:t.closeDialog}},[i("v-icon",[t._v("mdi-close")])],1)],1),i("v-divider"),i("div",{staticClass:"py-2"}),i("v-card-text",[i("text-field",{attrs:{icon:"mdi-format-title",label:"Rule Title",name:"title",errors:t.formErrors},model:{value:t.rule.title,callback:function(e){t.$set(t.rule,"title",e)},expression:"rule.title"}}),i("div",{staticClass:"py-4"}),i("text-area",{attrs:{icon:"mdi-subtitles",label:"Rule Description",name:"description",counter:"512",errors:t.formErrors},model:{value:t.rule.description,callback:function(e){t.$set(t.rule,"description",e)},expression:"rule.description"}})],1),i("v-card-actions",[i("v-btn",{attrs:{depressed:"",color:"error"},on:{click:t.closeDialog}},[t._v("Cancel")]),i("v-spacer"),t.ruleInEdit?i("v-btn",{attrs:{dark:"",color:t.community.theme.color},on:{click:t.updateRule}},[t._v(" Save ")]):i("v-btn",{attrs:{dark:"",color:t.community.theme.color},on:{click:t.newRule}},[t._v(" Add ")])],1)],1)],1)},s=[],o=i("5530"),a=(i("a4d3"),i("e01a"),i("2f62")),r=i("5f3b"),l=i("3f95"),c=i("ef9e"),u={data:function(){return{rule:{title:null,description:null}}},mixins:[r["a"],l["a"],c["a"]],methods:{deleteRule:function(t){return this.delete(this.$util.format(this.$urls.community.removeRule,t))},patchRule:function(t,e){return this.patch(this.$util.format(this.$urls.community.ruleDetail,t),e)},saveRule:function(){return this.post(this.$util.format(this.$urls.community.addRule,this.community.id),Object(o["a"])({},this.rule))}}},d=u,h={name:"RuleDialog",mixins:[d],computed:Object(o["a"])(Object(o["a"])({},Object(a["b"])({community:"community/inView",ruleInEdit:"ruleInEdit"})),{},{dialog:{get:function(){return this.$store.getters.ruleState},set:function(t){this.$store.dispatch("setRuleState",t)}}}),watch:{ruleInEdit:function(t){t&&(this.dialog=!0,this.rule=Object(o["a"])({},t))}},methods:{closeDialog:function(){this.rule={title:null,description:null},this.$store.dispatch("setRuleState",!1),this.$store.dispatch("setRuleInEdit",null)},updateRule:function(){var t=this;this.patchRule(this.ruleInEdit.id,{title:this.rule.title,description:this.rule.description}).then((function(){t.patchSuccess?t.closeDialog():t.openSnack("Rule update failed. Please try again.")}))},newRule:function(){var t=this;this.saveRule().then((function(){t.success?t.closeDialog():t.openSnack("Rule create failed. Please try again.")}))}}},v=h,f=i("2877"),m=i("6544"),p=i.n(m),y=i("8336"),g=i("b0af"),b=i("99d9"),w=i("169a"),O=i("ce7e"),$=i("132d"),E=i("2fa4"),k=Object(f["a"])(v,n,s,!1,null,"5c6be634",null);e["default"]=k.exports;p()(k,{VBtn:y["a"],VCard:g["a"],VCardActions:b["a"],VCardText:b["c"],VCardTitle:b["d"],VDialog:w["a"],VDivider:O["a"],VIcon:$["a"],VSpacer:E["a"]})},e707:function(t,e,i){"use strict";i("a9e3"),i("caad"),i("2532");var n=i("5530"),s=(i("3c93"),i("a9ad")),o=i("7560"),a=i("f2e7"),r=i("58df"),l=Object(r["a"])(s["a"],o["a"],a["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(n["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),c=l,u=i("80d2"),d=i("2b0e");e["a"]=d["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new c({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(u["v"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(u["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[u["z"].up,u["z"].pageup],i=[u["z"].down,u["z"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var i,n,s=e.shiftKey||e.deltaX?"x":"y",o="y"===s?e.deltaY:e.deltaX||e.deltaY;"y"===s?(i=0===t.scrollTop,n=t.scrollTop+t.clientHeight===t.scrollHeight):(i=0===t.scrollLeft,n=t.scrollLeft+t.clientWidth===t.scrollWidth);var a=o<0,r=o>0;return!(i||!a)||(!(n||!r)||!(!i&&!n)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=Object(u["g"])(t);if("keydown"===t.type&&e[0]===document.body){var i=this.$refs.dialog,n=window.getSelection().anchorNode;return!(i&&this.hasScrollbar(i)&&this.isInside(n,i))||!this.shouldScroll(i,t)}for(var s=0;s<e.length;s++){var o=e[s];if(o===document)return!0;if(o===document.documentElement)return!0;if(o===this.$refs.content)return!0;if(this.hasScrollbar(o))return!this.shouldScroll(o,t)}return!0},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(u["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},ef9e:function(t,e,i){"use strict";i("d3b7");var n={data:function(){return{patchInstance:null,patchErrors:{},patching:!1,patchSuccess:!1}},methods:{patch:function(t,e){var i=this;return this.patching=!0,this.$axios.patch(t,e).then((function(t){i.patchSuccess=!0,i.patchInstance=t,i.patchErrors={}})).catch((function(t){console.debug(t),i.patchSuccess=!1,i.patchErrors=t.response.data})).finally((function(){i.patching=!1}))}}};e["a"]=n}}]);
//# sourceMappingURL=chunk-1022b14e.546767b9.js.map