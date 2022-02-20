(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a89c8d8","chunk-b5db89f6","chunk-77bfe4d8","chunk-1abc17a0","chunk-3cd5a351"],{"0389":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card-text",{staticClass:"d-flex align-center pa-1 px-2 flex-wrap justify-space-between grey lighten-4 rounded-t"},[t.item.community&&"Community"!==t.$route.name?i("community-hover-box",{attrs:{community:t.item.community}}):t._e(),t.item.community&&"Community"!==t.$route.name?i("v-icon",{staticStyle:{width:"20px"}},[t._v(" mdi-circle-small ")]):t._e(),i("div",{staticClass:"pl-1 pr-2 info-text"},[t._v(" Posted by ")]),i("user-hover-box",{attrs:{user:t.item.created_by}}),i("div",{staticClass:"info-text pl-2 pr-1"},[t._v(" "+t._s(t.$moment(t.item.timestamp).fromNow())+" ")]),"link"===t.item.type?i("v-icon",{staticClass:"px-1"},[t._v("mdi-link")]):t._e(),t._l(t.item.hashtags,(function(e){return i("v-chip",{key:e.id,staticClass:"text-lowercase px12 mx-1",attrs:{outlined:"","x-small":"",color:t.theme},on:{click:function(i){return t.tagFilter(e.hashtag.id)}}},[i("v-icon",{attrs:{size:"12",left:""}},[t._v("mdi-pound")]),i("span",{staticStyle:{"padding-bottom":"2px"}},[t._v(t._s(e.hashtag.tag))])],1)})),i("v-spacer"),i("v-menu",{attrs:{"offset-y":"","nudge-top":"-5","nudge-right":"-110",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),s),[i("v-icon",[t._v("mdi-dots-horizontal")])],1)]}}])},[i("v-list",{attrs:{dense:""}},[t.$helper.ifCurrentUserIs(t.item.created_by)?i("v-list-item",{attrs:{to:{name:"Submit",params:{toEdit:t.item.id,type:t.item.type}}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",{attrs:{color:"primary lighten-1"}},[t._v("mdi-pencil")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Edit Publication")])],1)],1):t._e(),t.$helper.ifCurrentUserIs(t.item.created_by)?i("v-divider"):t._e(),t.$helper.ifCurrentUserIs(t.item.created_by)?i("v-list-item",{on:{click:function(e){return t.deletePublication()}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",{attrs:{color:"red lighten-1"}},[t._v("mdi-delete")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Delete Publication")])],1)],1):t._e(),t.$helper.ifCurrentUserIs(t.item.created_by)?i("v-divider"):t._e(),t.$helper.ifCurrentUserIs(t.item.created_by)?t._e():i("v-list-item",{on:{click:function(e){return t.ignoreAuthor()}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-eye-off")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Ignore this author")])],1)],1),i("v-list-item",{on:{click:function(e){return t.copyPublicationLink()}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-content-copy")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Copy URL")])],1)],1)],1)],1)],2)},n=[],a=(i("d3b7"),i("3ca3"),i("ddb0"),{name:"ItemHeader",props:{item:{type:Object,default:function(){}}},components:{UserHoverBox:function(){return i.e("chunk-6e7bd574").then(i.bind(null,"8503"))},CommunityHoverBox:function(){return i.e("chunk-7e167594").then(i.bind(null,"2a89"))}},computed:{theme:function(){return!!this.item.community&&this.item.community.theme.color}},methods:{deletePublication:function(){var t=this.$util.format(this.$urls.publication.detail,this.item.id);this.$axios.delete(t)},ignoreAuthor:function(){},copyPublicationLink:function(){},tagFilter:function(){}}}),r=a,o=(i("703c"),i("2877")),l=i("6544"),c=i.n(l),u=i("8336"),h=i("99d9"),d=i("cc20"),p=i("ce7e"),v=i("132d"),f=i("8860"),m=i("da13"),g=i("5d23"),b=i("34c3"),y=i("e449"),C=i("2fa4"),x=Object(o["a"])(r,s,n,!1,null,"542fa088",null);e["default"]=x.exports;c()(x,{VBtn:u["a"],VCardText:h["c"],VChip:d["a"],VDivider:p["a"],VIcon:v["a"],VList:f["a"],VListItem:m["a"],VListItemContent:g["a"],VListItemIcon:b["a"],VListItemTitle:g["c"],VMenu:y["a"],VSpacer:C["a"]})},"132d":function(t,e,i){"use strict";var s,n=i("5530"),a=(i("c96a"),i("d3b7"),i("caad"),i("2532"),i("ac1f"),i("00b4"),i("a9e3"),i("498a"),i("7db0"),i("fb6a"),i("4804"),i("7e2b")),r=i("a9ad"),o=i("af2b"),l=i("7560"),c=i("80d2"),u=i("2b0e"),h=i("58df");function d(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}function p(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(s||(s={}));var v=Object(h["a"])(a["a"],r["a"],o["a"],l["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(c["y"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(c["v"])(t).find((function(e){return t[e]}));return e&&s[e]||Object(c["g"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(n["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=Object(n["a"])(Object(n["a"])({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=Object(n["a"])(Object(n["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var i=[],s=this.getDefaultData(),n="material-icons",a=t.indexOf("-"),r=a<=-1;r?i.push(t):(n=t.slice(0,a),d(n)&&(n="")),s.class[n]=!0,s.class[t]=!r;var o=this.getSize();return o&&(s.style={fontSize:o}),this.applyColors(s),e(this.hasClickListener?"button":this.tag,s,i)},renderSvgIcon:function(t,e){var i={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},s=this.getSize();return s&&(i.style={fontSize:s,height:s,width:s}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",i,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var i={class:{"v-icon__component":!0}},s=this.getSize();s&&(i.style={fontSize:s,height:s,width:s}),this.applyColors(i);var n=t.component;return i.props=t.props,i.nativeOn=i.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(n,i)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?p(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=u["a"].extend({name:"v-icon",$_wrapperFor:v,functional:!0,render:function(t,e){var i=e.data,s=e.children,n="";return i.domProps&&(n=i.domProps.textContent||i.domProps.innerHTML||n,delete i.domProps.textContent,delete i.domProps.innerHTML),t(v,i,n?[n]:s)}})},"166a":function(t,e,i){},1800:function(t,e,i){"use strict";i("4de4"),i("d3b7");var s=i("2b0e");e["a"]=s["a"].extend({name:"v-list-item-action",functional:!0,render:function(t,e){var i=e.data,s=e.children,n=void 0===s?[]:s;i.staticClass=i.staticClass?"v-list-item__action ".concat(i.staticClass):"v-list-item__action";var a=n.filter((function(t){return!1===t.isComment&&" "!==t.text}));return a.length>1&&(i.staticClass+=" v-list-item__action--stack"),t("div",i,n)}})},"1baa":function(t,e,i){"use strict";var s=i("5530"),n=(i("899c"),i("604c")),a=i("a9ad"),r=i("58df");e["a"]=Object(r["a"])(n["a"],a["a"]).extend({name:"v-list-item-group",provide:function(){return{isInGroup:!0,listItemGroup:this}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-list-item-group":!0})}},methods:{genData:function(){return this.setTextColor(this.color,Object(s["a"])(Object(s["a"])({},n["a"].options.methods.genData.call(this)),{},{attrs:{role:"listbox"}}))}}})},"2c3e":function(t,e,i){var s=i("da84"),n=i("83ab"),a=i("9f7f").MISSED_STICKY,r=i("c6b6"),o=i("9bf2").f,l=i("69f3").get,c=RegExp.prototype,u=s.TypeError;n&&a&&o(c,"sticky",{configurable:!0,get:function(){if(this!==c){if("RegExp"===r(this))return!!l(this).sticky;throw u("Incompatible receiver, RegExp required")}}})},3408:function(t,e,i){},"34c3":function(t,e,i){"use strict";i("498a");var s=i("2b0e");e["a"]=s["a"].extend({name:"v-list-item-icon",functional:!0,render:function(t,e){var i=e.data,s=e.children;return i.staticClass="v-list-item__icon ".concat(i.staticClass||"").trim(),t("div",i,s)}})},"3ad0":function(t,e,i){},4804:function(t,e,i){},"4d63":function(t,e,i){var s=i("83ab"),n=i("da84"),a=i("e330"),r=i("94ca"),o=i("7156"),l=i("9112"),c=i("9bf2").f,u=i("241c").f,h=i("3a9b"),d=i("44e7"),p=i("577e"),v=i("ad6d"),f=i("9f7f"),m=i("6eeb"),g=i("d039"),b=i("1a2d"),y=i("69f3").enforce,C=i("2626"),x=i("b622"),I=i("fce3"),_=i("107c"),O=x("match"),k=n.RegExp,$=k.prototype,j=n.SyntaxError,S=a(v),B=a($.exec),V=a("".charAt),A=a("".replace),w=a("".indexOf),L=a("".slice),E=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,z=/a/g,D=/a/g,R=new k(z)!==z,G=f.MISSED_STICKY,P=f.UNSUPPORTED_Y,M=s&&(!R||G||I||_||g((function(){return D[O]=!1,k(z)!=z||k(D)==D||"/a/i"!=k(z,"i")}))),T=function(t){for(var e,i=t.length,s=0,n="",a=!1;s<=i;s++)e=V(t,s),"\\"!==e?a||"."!==e?("["===e?a=!0:"]"===e&&(a=!1),n+=e):n+="[\\s\\S]":n+=e+V(t,++s);return n},N=function(t){for(var e,i=t.length,s=0,n="",a=[],r={},o=!1,l=!1,c=0,u="";s<=i;s++){if(e=V(t,s),"\\"===e)e+=V(t,++s);else if("]"===e)o=!1;else if(!o)switch(!0){case"["===e:o=!0;break;case"("===e:B(E,L(t,s+1))&&(s+=2,l=!0),n+=e,c++;continue;case">"===e&&l:if(""===u||b(r,u))throw new j("Invalid capture group name");r[u]=!0,a[a.length]=[u,c],l=!1,u="";continue}l?u+=e:n+=e}return[n,a]};if(r("RegExp",M)){for(var U=function(t,e){var i,s,n,a,r,c,u=h($,this),v=d(t),f=void 0===e,m=[],g=t;if(!u&&v&&f&&t.constructor===U)return t;if((v||h($,t))&&(t=t.source,f&&(e="flags"in g?g.flags:S(g))),t=void 0===t?"":p(t),e=void 0===e?"":p(e),g=t,I&&"dotAll"in z&&(s=!!e&&w(e,"s")>-1,s&&(e=A(e,/s/g,""))),i=e,G&&"sticky"in z&&(n=!!e&&w(e,"y")>-1,n&&P&&(e=A(e,/y/g,""))),_&&(a=N(t),t=a[0],m=a[1]),r=o(k(t,e),u?this:$,U),(s||n||m.length)&&(c=y(r),s&&(c.dotAll=!0,c.raw=U(T(t),i)),n&&(c.sticky=!0),m.length&&(c.groups=m)),t!==g)try{l(r,"source",""===g?"(?:)":g)}catch(b){}return r},F=function(t){t in U||c(U,t,{configurable:!0,get:function(){return k[t]},set:function(e){k[t]=e}})},H=u(k),q=0;H.length>q;)F(H[q++]);$.constructor=U,U.prototype=$,m(n,"RegExp",U)}C("RegExp")},"5d23":function(t,e,i){"use strict";i.d(e,"a",(function(){return O})),i.d(e,"c",(function(){return k})),i.d(e,"b",(function(){return $}));var s=i("80d2"),n=i("8860"),a=i("5530"),r=i("ade3"),o=(i("4d63"),i("c607"),i("ac1f"),i("2c3e"),i("25f0"),i("466d"),i("db42"),i("9d26")),l=i("da13"),c=i("34c3"),u=i("7e2b"),h=i("9d65"),d=i("a9ad"),p=i("f2e7"),v=i("3206"),f=i("5607"),m=i("0789"),g=i("58df"),b=Object(g["a"])(u["a"],h["a"],d["a"],Object(v["a"])("list"),p["a"]),y=b.extend().extend({name:"v-list-group",directives:{ripple:f["a"]},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:[String,RegExp],noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes:function(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive:function(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created:function(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy:function(){this.list&&this.list.unregister(this)},methods:{click:function(t){var e=this;this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick((function(){return e.isActive=!e.isActive})))},genIcon:function(t){return this.$createElement(o["a"],t)},genAppendIcon:function(){var t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(c["a"],{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader:function(){return this.$createElement(l["a"],{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:Object(r["a"])({},this.activeClass,this.isActive),props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object(a["a"])(Object(a["a"])({},this.listeners$),{},{click:this.click})},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:t.isActive}]},Object(s["p"])(t))]}))},genPrependIcon:function(){var t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(c["a"],{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange:function(t){if(this.group){var e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e}},toggle:function(t){var e=this,i=this._uid===t;i&&(this.isBooted=!0),this.$nextTick((function(){return e.isActive=i}))},matchRoute:function(t){return null!==t.match(this.group)}},render:function(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(m["a"],this.genItems())])}}),C=i("1baa"),x=i("1800"),I=i("8270"),_=Object(s["i"])("v-list-item__action-text","span"),O=Object(s["i"])("v-list-item__content","div"),k=Object(s["i"])("v-list-item__title","div"),$=Object(s["i"])("v-list-item__subtitle","div");n["a"],l["a"],x["a"],I["a"],C["a"],c["a"]},"604c":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var s=i("5530"),n=(i("a9e3"),i("4de4"),i("d3b7"),i("a434"),i("159b"),i("fb6a"),i("7db0"),i("c740"),i("166a"),i("8547")),a=i("a452"),r=i("7560"),o=i("58df"),l=i("d9bd"),c=Object(o["a"])(n["a"],a["a"],r["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(s["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,i){return t.toggleMethod(t.getValue(e,i))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.valueComparator(t.internalValue,e)};var e=this.internalValue;return Array.isArray(e)?function(i){return e.some((function(e){return t.valueComparator(e,i)}))}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(l["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return void 0===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,i=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,i)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);var s=this.selectedValues.indexOf(i);if(!(s<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==i})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var i=e.find((function(t){return!t.disabled}));if(i){var s=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,s))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),s=i.findIndex((function(e){return e===t}));this.mandatory&&s>-1&&i.length-1<1||null!=this.max&&s<0&&i.length+1>this.max||(s>-1?i.splice(s,1):i.push(t),this.internalValue=i)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t(this.tag,this.genData(),this.$slots.default)}});c.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},"61d2":function(t,e,i){},"703c":function(t,e,i){"use strict";i("f42a")},"713a":function(t,e,i){"use strict";var s=i("8212");e["a"]=s["a"]},8212:function(t,e,i){"use strict";var s=i("5530"),n=(i("a9e3"),i("3408"),i("a9ad")),a=i("24b2"),r=i("a236"),o=i("80d2"),l=i("58df");e["a"]=Object(l["a"])(n["a"],a["a"],r["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(s["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(s["a"])({height:Object(o["g"])(this.size),minWidth:Object(o["g"])(this.size),width:Object(o["g"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}})},8270:function(t,e,i){"use strict";var s=i("5530"),n=(i("a9e3"),i("713a"));e["a"]=n["a"].extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-list-item__avatar--horizontal":this.horizontal},n["a"].options.computed.classes.call(this)),{},{"v-avatar--tile":this.tile||this.horizontal})}},render:function(t){var e=n["a"].options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}})},8547:function(t,e,i){"use strict";var s=i("2b0e"),n=i("80d2");e["a"]=s["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:n["j"]}}})},8860:function(t,e,i){"use strict";var s=i("b85c"),n=i("5530"),a=(i("0481"),i("4069"),i("c740"),i("a434"),i("3ad0"),i("8dd9"));e["a"]=a["a"].extend().extend({name:"v-list",provide:function(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:function(){return{groups:[]}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine})}},methods:{register:function(t){this.groups.push(t)},unregister:function(t){var e=this.groups.findIndex((function(e){return e._uid===t._uid}));e>-1&&this.groups.splice(e,1)},listClick:function(t){if(!this.expand){var e,i=Object(s["a"])(this.groups);try{for(i.s();!(e=i.n()).done;){var n=e.value;n.toggle(t)}}catch(a){i.e(a)}finally{i.f()}}}},render:function(t){var e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:Object(n["a"])({role:this.isInNav||this.isInMenu?void 0:"list"},this.attrs$)};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})},"899c":function(t,e,i){},"8adc":function(t,e,i){},"8ce9":function(t,e,i){},"9d26":function(t,e,i){"use strict";var s=i("132d");e["a"]=s["a"]},c607:function(t,e,i){var s=i("da84"),n=i("83ab"),a=i("fce3"),r=i("c6b6"),o=i("9bf2").f,l=i("69f3").get,c=RegExp.prototype,u=s.TypeError;n&&a&&o(c,"dotAll",{configurable:!0,get:function(){if(this!==c){if("RegExp"===r(this))return!!l(this).dotAll;throw u("Incompatible receiver, RegExp required")}}})},c740:function(t,e,i){"use strict";var s=i("23e7"),n=i("b727").findIndex,a=i("44d2"),r="findIndex",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),s({target:"Array",proto:!0,forced:o},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a(r)},cc20:function(t,e,i){"use strict";var s=i("3835"),n=i("5530"),a=(i("d3b7"),i("4de4"),i("8adc"),i("58df")),r=i("0789"),o=i("9d26"),l=i("a9ad"),c=i("4e82c"),u=i("7560"),h=i("f2e7"),d=i("1c87"),p=i("af2b"),v=i("d9bd");e["a"]=Object(a["a"])(l["a"],p["a"],d["a"],u["a"],Object(c["a"])("chipGroup"),Object(h["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({"v-chip":!0},d["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(d["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var i=Object(s["a"])(e,2),n=i[0],a=i[1];t.$attrs.hasOwnProperty(n)&&Object(v["a"])(n,a,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(o["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(r["b"],t)},genClose:function(){var t=this;return this.$createElement(o["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],i=this.generateRouteLink(),s=i.tag,a=i.data;a.attrs=Object(n["a"])(Object(n["a"])({},a.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:a.attrs.tabindex}),a.directives.push({name:"show",value:this.active}),a=this.setBackgroundColor(this.color,a);var r=this.textColor||this.outlined&&this.color;return t(s,this.setTextColor(r,a),e)}})},ce7e:function(t,e,i){"use strict";var s=i("5530"),n=(i("8ce9"),i("7560"));e["a"]=n["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(s["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(s["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},da13:function(t,e,i){"use strict";var s=i("5530"),n=(i("61d2"),i("a9ad")),a=i("1c87"),r=i("4e82c"),o=i("7560"),l=i("f2e7"),c=i("5607"),u=i("80d2"),h=i("d9bd"),d=i("58df"),p=Object(d["a"])(n["a"],a["a"],o["a"],Object(r["a"])("listItemGroup"),Object(l["b"])("inputValue"));e["a"]=p.extend().extend({name:"v-list-item",directives:{Ripple:c["a"]},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default:function(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:function(){return{proxyClass:"v-list-item--active"}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-list-item":!0},a["a"].options.computed.classes.call(this)),{},{"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine},this.themeClasses)},isClickable:function(){return Boolean(a["a"].options.computed.isClickable.call(this)||this.listItemGroup)}},created:function(){this.$attrs.hasOwnProperty("avatar")&&Object(h["e"])("avatar",this)},methods:{click:function(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs:function(){var t=Object(s["a"])({"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1},this.$attrs);return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||"list-item-".concat(this._uid)):this.isInList&&(t.role="listitem")),t},toggle:function(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render:function(t){var e=this,i=this.generateRouteLink(),n=i.tag,a=i.data;a.attrs=Object(s["a"])(Object(s["a"])({},a.attrs),this.genAttrs()),a[this.to?"nativeOn":"on"]=Object(s["a"])(Object(s["a"])({},a[this.to?"nativeOn":"on"]),{},{keydown:function(t){t.keyCode===u["u"].enter&&e.click(t),e.$emit("keydown",t)}}),this.inactive&&(n="div"),this.inactive&&this.to&&(a.on=a.nativeOn,delete a.nativeOn);var r=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(n,this.isActive?this.setTextColor(this.color,a):a,r)}})},db42:function(t,e,i){},f42a:function(t,e,i){}}]);
//# sourceMappingURL=chunk-5a89c8d8.41be404a.js.map