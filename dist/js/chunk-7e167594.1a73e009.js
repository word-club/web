(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e167594"],{"2a89":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-menu",{staticClass:"community-hover-box",attrs:{"open-on-hover":"","nudge-top":"-30","nudge-left":"-34","close-delay":"200","open-delay":"200","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(i){var s=i.on,a=i.attrs;return[e("div",t._g(t._b({staticClass:"d-flex align-center"},"div",a,!1),s),[e("v-avatar",{staticClass:"rounded cursor",attrs:{size:"25",tile:"",color:t.community.avatar?"transparent":t.community.theme.color},on:{click:function(i){return t.toCommunityDetail(t.community.id)}}},[t.community.avatar?e("v-img",{attrs:{src:t.$link(t.community.avatar)}}):e("div",{staticClass:"full-width white--text weight-500 px18 text-center"},[t._v(" "+t._s(t.community.name[0].toUpperCase())+" ")])],1),e("div",{staticClass:"px-1"}),e("div",{staticClass:"px14 weight-600 cursor hover-underline",class:t.community.theme.color+"--text",on:{click:function(i){return t.toCommunityDetail(t.community.id)}}},[t._v(" "+t._s(t.community.name)+" ")])],1)]}}])},[e("community-peek",{attrs:{community:t.community}})],1)},a=[],n=(e("d3b7"),e("3ca3"),e("ddb0"),e("6554")),r={name:"CommunityHoverBox",components:{CommunityPeek:function(){return Promise.all([e.e("chunk-8af747d8"),e.e("chunk-4ea5522e")]).then(e.bind(null,"0313"))}},mixins:[n["a"]],props:{community:{type:Object,required:!0}}},c=r,o=e("2877"),h=e("6544"),l=e.n(h),d=e("8212"),u=e("adda"),m=e("e449"),g=Object(o["a"])(c,s,a,!1,null,"2f4f68f8",null);i["default"]=g.exports;l()(g,{VAvatar:d["a"],VImg:u["a"],VMenu:m["a"]})},"36a7":function(t,i,e){},"6b53":function(t,i,e){"use strict";e("a9e3"),e("36a7");var s=e("24b2"),a=e("58df");i["a"]=Object(a["a"])(s["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}})},"78d7":function(t,i,e){"use strict";var s=e("6b53");i["a"]=s["a"]},"8a79":function(t,i,e){"use strict";var s=e("23e7"),a=e("e330"),n=e("06cf").f,r=e("50c4"),c=e("577e"),o=e("5a34"),h=e("1d80"),l=e("ab13"),d=e("c430"),u=a("".endsWith),m=a("".slice),g=Math.min,p=l("endsWith"),v=!d&&!p&&!!function(){var t=n(String.prototype,"endsWith");return t&&!t.writable}();s({target:"String",proto:!0,forced:!v&&!p},{endsWith:function(t){var i=c(h(this));o(t);var e=arguments.length>1?arguments[1]:void 0,s=i.length,a=void 0===e?s:g(r(e),s),n=c(t);return u?u(i,n,a):m(i,a-n.length,a)===n}})},"8efc":function(t,i,e){},adda:function(t,i,e){"use strict";var s=e("53ca"),a=(e("a9e3"),e("a15b"),e("8a79"),e("2ca0"),e("8efc"),e("90a2")),n=e("78d7"),r=e("7560"),c=e("58df"),o=e("d9f7"),h=e("d9bd"),l="undefined"!==typeof window&&"IntersectionObserver"in window;i["a"]=Object(c["a"])(n["a"],r["a"]).extend({name:"v-img",directives:{intersect:a["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(s["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],i=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),i&&t.push('url("'.concat(i,'")'));var e=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[e]):e}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,i,e){if(!l||e||this.eager){if(this.normalisedSrc.lazySrc){var s=new Image;s.src=this.normalisedSrc.lazySrc,this.pollForSize(s,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,i=new Image;this.image=i,i.onload=function(){i.decode?i.decode().catch((function(i){Object(h["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(i.message?"\nOriginal error: ".concat(i.message):""),t)})).then(t.onLoad):t.onLoad()},i.onerror=this.onError,this.hasError=!1,this.sizes&&(i.sizes=this.sizes),this.normalisedSrc.srcset&&(i.srcset=this.normalisedSrc.srcset),i.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(i),this.getSrc()},pollForSize:function(t){var i=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var a=t.naturalHeight,n=t.naturalWidth;a||n?(i.naturalWidth=n,i.calculatedAspectRatio=n/a):t.complete||!i.isLoading||i.hasError||null==e||setTimeout(s,e)};s()},genContent:function(){var t=n["a"].options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var i=n["a"].options.render.call(this,t),e=Object(o["a"])(i.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:l?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return i.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(i.tag,e,i.children)}})}}]);
//# sourceMappingURL=chunk-7e167594.1a73e009.js.map