(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f9171298"],{"36a7":function(t,i,e){},"41bc":function(t,i,e){},"6b53":function(t,i,e){"use strict";e("a9e3"),e("36a7");var s=e("24b2"),a=e("58df");i["a"]=Object(a["a"])(s["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}})},"78d7":function(t,i,e){"use strict";var s=e("6b53");i["a"]=s["a"]},"8a79":function(t,i,e){"use strict";var s=e("23e7"),a=e("e330"),n=e("06cf").f,r=e("50c4"),c=e("577e"),o=e("5a34"),l=e("1d80"),d=e("ab13"),h=e("c430"),u=a("".endsWith),m=a("".slice),g=Math.min,p=d("endsWith"),v=!h&&!p&&!!function(){var t=n(String.prototype,"endsWith");return t&&!t.writable}();s({target:"String",proto:!0,forced:!v&&!p},{endsWith:function(t){var i=c(l(this));o(t);var e=arguments.length>1?arguments[1]:void 0,s=i.length,a=void 0===e?s:g(r(e),s),n=c(t);return u?u(i,n,a):m(i,a-n.length,a)===n}})},"8efc":function(t,i,e){},a9e8:function(t,i,e){"use strict";e("41bc")},adda:function(t,i,e){"use strict";var s=e("53ca"),a=(e("a9e3"),e("a15b"),e("8a79"),e("2ca0"),e("8efc"),e("90a2")),n=e("78d7"),r=e("7560"),c=e("58df"),o=e("d9f7"),l=e("d9bd"),d="undefined"!==typeof window&&"IntersectionObserver"in window;i["a"]=Object(c["a"])(n["a"],r["a"]).extend({name:"v-img",directives:{intersect:a["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(s["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],i=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),i&&t.push('url("'.concat(i,'")'));var e=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[e]):e}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,i,e){if(!d||e||this.eager){if(this.normalisedSrc.lazySrc){var s=new Image;s.src=this.normalisedSrc.lazySrc,this.pollForSize(s,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,i=new Image;this.image=i,i.onload=function(){i.decode?i.decode().catch((function(i){Object(l["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(i.message?"\nOriginal error: ".concat(i.message):""),t)})).then(t.onLoad):t.onLoad()},i.onerror=this.onError,this.hasError=!1,this.sizes&&(i.sizes=this.sizes),this.normalisedSrc.srcset&&(i.srcset=this.normalisedSrc.srcset),i.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(i),this.getSrc()},pollForSize:function(t){var i=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var a=t.naturalHeight,n=t.naturalWidth;a||n?(i.naturalWidth=n,i.calculatedAspectRatio=n/a):t.complete||!i.isLoading||i.hasError||null==e||setTimeout(s,e)};s()},genContent:function(){var t=n["a"].options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var i=n["a"].options.render.call(this,t),e=Object(o["a"])(i.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return i.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(i.tag,e,i.children)}})},b477:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-card-text",{staticClass:"pa-2"},[e("v-card",[e("v-card-title",[t._v(t._s(t.link.title))]),t.link.description?e("v-card-subtitle",[t._v(t._s(t.link.description))]):t._e(),t.link.image?e("v-card-text",{staticClass:"px-0 pb-0"},[e("v-img",{attrs:{src:t.link.image,height:"200"}}),e("v-list-item",{staticClass:"item-link",attrs:{tile:"",outlined:"",href:t.link.link,target:"_blank"}},[e("v-list-item-content",{staticClass:"py-10"},[e("v-list-item-title",{staticClass:"px16 weight-500"},[t._v(" "+t._s(t.link.title)+" ")])],1),e("v-list-item-action",[e("v-btn",{attrs:{small:"",fab:"",outlined:"",depressed:""}},[e("v-icon",[t._v("mdi-link")])],1)],1)],1)],1):e("v-card",{staticClass:"rounded-t-0 d-flex justify-center align-center",attrs:{flat:"",color:"grey lighten-3"}},[e("v-list-item",{attrs:{href:t.link.link,target:"_blank"}},[e("v-list-item-avatar",{attrs:{size:"80",color:"white"}},[e("div",{staticClass:"full-width text-center px22"},[t._v(" "+t._s(t.link.title[0].toUpperCase())+" ")])]),e("v-list-item-title",{staticClass:"weight-400 px18 text-decoration-underline"},[t._v(t._s(t.link.title))]),t.link.description?e("v-list-item-subtitle",[t._v(t._s(t.link.description))]):t._e()],1)],1)],1)],1)},a=[],n={name:"ItemLink",props:{link:{type:Object,default:function(){}}}},r=n,c=(e("a9e8"),e("2877")),o=e("6544"),l=e.n(o),d=e("8336"),h=e("b0af"),u=e("99d9"),m=e("132d"),g=e("adda"),p=e("da13"),v=e("1800"),f=e("8270"),S=e("5d23"),_=Object(c["a"])(r,s,a,!1,null,"421e2a36",null);i["default"]=_.exports;l()(_,{VBtn:d["a"],VCard:h["a"],VCardSubtitle:u["b"],VCardText:u["c"],VCardTitle:u["d"],VIcon:m["a"],VImg:g["a"],VListItem:p["a"],VListItemAction:v["a"],VListItemAvatar:f["a"],VListItemContent:S["a"],VListItemSubtitle:S["b"],VListItemTitle:S["c"]})}}]);
//# sourceMappingURL=chunk-f9171298.ae52345b.js.map