(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fd2826b"],{"013e":function(t,e,n){"use strict";var r={computed:{xs:function(){return this.$vuetify.breakpoint.xs},sm:function(){return this.$vuetify.breakpoint.sm},smAndDown:function(){return this.$vuetify.breakpoint.smAndDown},smAndUp:function(){return this.$vuetify.breakpoint.smAndUp},mdAndUp:function(){return this.$vuetify.breakpoint.mdAndUp},lgAndUp:function(){return this.$vuetify.breakpoint.lgAndUp},viewportWidth:function(){return this.$vuetify.breakpoint.width}},methods:{}};e["a"]=r},"132d":function(t,e,n){"use strict";var r,i=n("5530"),s=(n("c96a"),n("d3b7"),n("caad"),n("2532"),n("ac1f"),n("00b4"),n("a9e3"),n("498a"),n("7db0"),n("fb6a"),n("4804"),n("7e2b")),o=n("a9ad"),a=n("af2b"),c=n("7560"),l=n("80d2"),u=n("2b0e"),h=n("58df");function d(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}function p(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(r||(r={}));var m=Object(h["a"])(s["a"],o["a"],a["a"],c["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l["y"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l["v"])(t).find((function(e){return t[e]}));return e&&r[e]||Object(l["g"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(i["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=Object(i["a"])(Object(i["a"])({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=Object(i["a"])(Object(i["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var n=[],r=this.getDefaultData(),i="material-icons",s=t.indexOf("-"),o=s<=-1;o?n.push(t):(i=t.slice(0,s),d(i)&&(i="")),r.class[i]=!0,r.class[t]=!o;var a=this.getSize();return a&&(r.style={fontSize:a}),this.applyColors(r),e(this.hasClickListener?"button":this.tag,r,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},r=this.getSize();return r&&(n.style={fontSize:r,height:r,width:r}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var n={class:{"v-icon__component":!0}},r=this.getSize();r&&(n.style={fontSize:r,height:r,width:r}),this.applyColors(n);var i=t.component;return n.props=t.props,n.nativeOn=n.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(i,n)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?p(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=u["a"].extend({name:"v-icon",$_wrapperFor:m,functional:!0,render:function(t,e){var n=e.data,r=e.children,i="";return n.domProps&&(i=n.domProps.textContent||n.domProps.innerHTML||i,delete n.domProps.textContent,delete n.domProps.innerHTML),t(m,n,i?[i]:r)}})},3298:function(t,e,n){},"36a7":function(t,e,n){},"3a66":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("fe6c"),i=n("58df");function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(i["a"])(Object(r["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,n=e.length;t<n;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},4804:function(t,e,n){},"5e23":function(t,e,n){},6554:function(t,e,n){"use strict";var r=n("1da1"),i=(n("96cf"),{methods:{toPublicationDetail:function(t,e){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n.$router.push({name:"Publication",params:{id:t,view:e}});case 2:case"end":return r.stop()}}),r)})))()},toCommunityDetail:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$router.push({name:"Community Detail",params:{id:t}});case 2:case"end":return n.stop()}}),n)})))()},toCommunityWiki:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$router.push({name:"Community Detail Wiki",params:{id:t}});case 2:case"end":return n.stop()}}),n)})))()},toCommunityModmail:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$router.push({name:"Community Detail Modmail",params:{id:t}});case 2:case"end":return n.stop()}}),n)})))()},toRegisterCommunity:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Community Mainframe"});case 2:case"end":return e.stop()}}),e)})))()},toRegisterCommunityTheme:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Community Display"});case 2:case"end":return e.stop()}}),e)})))()},toRegisterCommunityRules:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Community Rules"});case 2:case"end":return e.stop()}}),e)})))()},toRegisterCommunityTags:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Community Hashtags"});case 2:case"end":return e.stop()}}),e)})))()},toRegisterCommunityAuthorization:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Community Authorization"});case 2:case"end":return e.stop()}}),e)})))()},toRegisterCommunityAdmin:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Community Administration"});case 2:case"end":return e.stop()}}),e)})))()},toHome:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push("/");case 2:case"end":return e.stop()}}),e)})))()},toUserOverview:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$router.push({name:"User Overview",params:{username:t}});case 2:case"end":return n.stop()}}),n)})))()},toUserPosts:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$router.push({name:"User Posts",params:{username:t}});case 2:case"end":return n.stop()}}),n)})))()},toUserComments:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$router.push({name:"User Comments",params:{username:t}});case 2:case"end":return n.stop()}}),n)})))()},toUserAwards:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$router.push({name:"User Awards",params:{username:t}});case 2:case"end":return n.stop()}}),n)})))()},toProfileOverview:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Profile Overview"});case 2:case"end":return e.stop()}}),e)})))()},toProfilePosts:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Profile Posts"});case 2:case"end":return e.stop()}}),e)})))()},toProfileComments:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Profile Comments"});case 2:case"end":return e.stop()}}),e)})))()},toProfileSaved:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Profile Saved"});case 2:case"end":return e.stop()}}),e)})))()},toProfileHidden:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Profile Hidden"});case 2:case"end":return e.stop()}}),e)})))()},toProfileUpVoted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Profile Upvoted"});case 2:case"end":return e.stop()}}),e)})))()},toProfileDownVoted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Profile Downvoted"});case 2:case"end":return e.stop()}}),e)})))()},toProfileShares:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Profile Shares"});case 2:case"end":return e.stop()}}),e)})))()},toCreatePost:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Submit"});case 2:case"end":return e.stop()}}),e)})))()}}});e["a"]=i},"6a6d":function(t,e,n){"use strict";n("3298")},"6b53":function(t,e,n){"use strict";n("a9e3"),n("36a7");var r=n("24b2"),i=n("58df");e["a"]=Object(i["a"])(r["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}})},"78d7":function(t,e,n){"use strict";var r=n("6b53");e["a"]=r["a"]},"8a79":function(t,e,n){"use strict";var r=n("23e7"),i=n("e330"),s=n("06cf").f,o=n("50c4"),a=n("577e"),c=n("5a34"),l=n("1d80"),u=n("ab13"),h=n("c430"),d=i("".endsWith),p=i("".slice),m=Math.min,f=u("endsWith"),g=!h&&!f&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();r({target:"String",proto:!0,forced:!g&&!f},{endsWith:function(t){var e=a(l(this));c(t);var n=arguments.length>1?arguments[1]:void 0,r=e.length,i=void 0===n?r:m(o(n),r),s=a(t);return d?d(e,s,i):p(e,i-s.length,i)===s}})},"8b0d":function(t,e,n){},"8efc":function(t,e,n){},adda:function(t,e,n){"use strict";var r=n("53ca"),i=(n("a9e3"),n("a15b"),n("8a79"),n("2ca0"),n("8efc"),n("90a2")),s=n("78d7"),o=n("7560"),a=n("58df"),c=n("d9f7"),l=n("d9bd"),u="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(a["a"])(s["a"],o["a"]).extend({name:"v-img",directives:{intersect:i["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(r["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var n=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[n]):n}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,n){if(!u||n||this.eager){if(this.normalisedSrc.lazySrc){var r=new Image;r.src=this.normalisedSrc.lazySrc,this.pollForSize(r,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(l["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=function r(){var i=t.naturalHeight,s=t.naturalWidth;i||s?(e.naturalWidth=s,e.calculatedAspectRatio=s/i):t.complete||!e.isLoading||e.hasError||null==n||setTimeout(r,n)};r()},genContent:function(){var t=s["a"].options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=s["a"].options.render.call(this,t),n=Object(c["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:u?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,n,e.children)}})},afec:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{staticClass:"the-app-bar",attrs:{flat:"",color:"white",height:"auto","clipped-right":"","clipped-left":""},scopedSlots:t._u([t.criticalWidth?null:{key:"extension",fn:function(){return[n("publication-search"),n("tooltip-icon-btn",{attrs:{tooltip:"Sidebar",icon:"mdi-page-layout-sidebar-right"},on:{click:function(e){return t.SET_SIDEBAR_STATE(!t.sidebarState)}}})]},proxy:!0}],null,!0)},[n("div",{staticClass:"d-flex align-center px-2"},[t.$vuetify.breakpoint.smAndDown?n("v-btn",{staticClass:"the-app-bar--toggle",attrs:{icon:""},on:{click:t.toggleDrawer}},[t.$store.getters.mainDrawerState?n("v-icon",[t._v("mdi-menu-close")]):n("v-icon",[t._v("mdi-menu-open")])],1):t._e(),n("div",{staticClass:"the-app-bar--site-title",on:{click:t.toHome}},[t._v("WordClub")])],1),t.smAndUp?n("community-search"):t._e(),t.criticalWidth?n("publication-search"):t._e(),n("v-spacer"),t.currentUser&&t.smAndUp?n("tooltip-icon-btn",{attrs:{id:"popular",size:"40",icon:"mdi-finance",tooltip:"Popular",to:{name:"Home",params:{sortBy:"popular"}}}}):t._e(),t.currentUser&&t.smAndUp?n("tooltip-icon-btn",{attrs:{id:"top-discussed",size:"40",icon:"mdi-chart-gantt",tooltip:"Top Discussed",to:{name:"Home",params:{sortBy:"discussed"}}}}):t._e(),t.currentUser&&t.smAndUp?n("tooltip-icon-btn",{attrs:{id:"create-publication",size:"40",icon:"mdi-plus",tooltip:"Create Publication",to:{name:"Submit"}}}):t._e(),t.currentUser&&t.viewportWidth>310?n("notification-menu"):t._e(),n("div",{staticClass:"pl-5"}),t.currentUser?n("profile-drop"):t._e(),t.currentUser?t._e():n("v-btn",{staticClass:"mx-1 signup-btn",attrs:{outlined:"",color:"primary",rounded:""},on:{click:t.signUp}},[t._v(" Sign Up ")]),t.currentUser?t._e():n("v-btn",{staticClass:"mx-1 login-btn",attrs:{color:"primary",dark:"",rounded:""},on:{click:t.login}},[t._v(" Login ")]),n("auth-dialog")],1)},i=[],s=n("5530"),o=(n("d3b7"),n("3ca3"),n("ddb0"),n("2f62")),a=n("6554"),c=n("013e"),l={name:"TheAppBar",mixins:[a["a"],c["a"]],components:{AuthDialog:function(){return Promise.all([n.e("chunk-c062940c"),n.e("chunk-6f3a4341"),n.e("chunk-82448334")]).then(n.bind(null,"ef0e"))},ProfileDrop:function(){return Promise.all([n.e("chunk-22a38430"),n.e("chunk-8af747d8"),n.e("chunk-6f3a4341"),n.e("chunk-1fcc9eab")]).then(n.bind(null,"9170"))},TooltipIconBtn:function(){return n.e("chunk-67a0b816").then(n.bind(null,"b03e"))},CommunitySearch:function(){return Promise.all([n.e("chunk-ec2a30da"),n.e("chunk-7100faa4")]).then(n.bind(null,"5fc0"))},NotificationMenu:function(){return Promise.all([n.e("chunk-22a38430"),n.e("chunk-1bb85f0e")]).then(n.bind(null,"7a16"))},PublicationSearch:function(){return Promise.all([n.e("chunk-ec2a30da"),n.e("chunk-11473110")]).then(n.bind(null,"7b5e"))}},data:function(){return{searchCommunities:"",searchPublications:""}},computed:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(o["b"])(["sidebarState"])),Object(o["b"])({currentUser:"user/current"})),{},{criticalWidth:function(){return this.viewportWidth>=850}}),methods:Object(s["a"])(Object(s["a"])({},Object(o["c"])(["SET_DRAWER_STATE","SET_SIDEBAR_STATE"])),{},{toggleDrawer:function(){this.SET_DRAWER_STATE(!this.$store.getters.mainDrawerState)},login:function(){this.$store.dispatch("setAuthMode",{state:!0,mode:"login"})},signUp:function(){this.$store.dispatch("setAuthMode",{state:!0,mode:"signup"})}})},u=l,h=(n("6a6d"),n("2877")),d=n("6544"),p=n.n(d),m=(n("c7cd"),n("a9e3"),n("8b0d"),n("3835")),f=(n("0481"),n("4069"),n("5e23"),n("8dd9")),g=n("adda"),v=n("80d2"),b=n("d9bd"),S=f["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(s["a"])(Object(s["a"])({},f["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(s["a"])(Object(s["a"])({},this.measurableStyles),{},{height:Object(v["g"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var n=Object(m["a"])(e,2),r=n[0],i=n[1];t.$attrs.hasOwnProperty(r)&&Object(b["a"])(r,i,t)}))},methods:{genBackground:function(){var t={height:Object(v["g"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(g["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(v["g"])(this.computedContentHeight)}},Object(v["p"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(v["g"])(this.extensionHeight)}},Object(v["p"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],n=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,n,e)}}),w=n("f977"),x=n("3a66"),O=n("2b0e"),y=O["a"].extend({name:"scrollable",directives:{Scroll:w["a"]},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(b["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),R=n("d10f"),k=n("f2e7"),C=n("58df"),j=Object(C["a"])(S,y,R["a"],k["a"],Object(x["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"])),_=j.extend({name:"v-app-bar",directives:{Scroll:w["b"]},provide:function(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return y.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(s["a"])(Object(s["a"])({},S.options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},scrollRatio:function(){var t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight:function(){if(!this.shrinkOnScroll)return S.options.computed.computedContentHeight.call(this);var t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize:function(){if(this.isProminent){var t=1.25,e=1.5;return t+(e-t)*this.scrollRatio}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight:function(){var t=S.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:S.options.computed.isCollapsed.call(this)},isProminent:function(){return S.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(s["a"])(Object(s["a"])({},S.options.computed.styles.call(this)),{},{fontSize:Object(v["g"])(this.computedFontSize,"rem"),marginTop:Object(v["g"])(this.computedMarginTop),transform:"translateY(".concat(Object(v["g"])(this.computedTransform),")"),left:Object(v["g"])(this.computedLeft),right:Object(v["g"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll:function(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=S.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=S.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),$=n("8336"),A=n("132d"),P=n("2fa4"),T=Object(h["a"])(u,r,i,!1,null,"2c420e33",null);e["default"]=T.exports;p()(T,{VAppBar:_,VBtn:$["a"],VIcon:A["a"],VSpacer:P["a"]})},f977:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("53ca");function i(t,e,n){var i=e.modifiers||{},s=i.self,o=void 0!==s&&s,a=e.value,c="object"===Object(r["a"])(a)&&a.options||{passive:!0},l="function"===typeof a||"handleEvent"in a?a:a.handler,u=o?t:e.arg?document.querySelector(e.arg):window;u&&(u.addEventListener("scroll",l,c),t._onScroll=Object(t._onScroll),t._onScroll[n.context._uid]={handler:l,options:c,target:o?void 0:u})}function s(t,e,n){var r;if(null!=(r=t._onScroll)&&r[n.context._uid]){var i=t._onScroll[n.context._uid],s=i.handler,o=i.options,a=i.target,c=void 0===a?t:a;c.removeEventListener("scroll",s,o),delete t._onScroll[n.context._uid]}}var o={inserted:i,unbind:s};e["b"]=o}}]);
//# sourceMappingURL=chunk-2fd2826b.4439515b.js.map