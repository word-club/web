(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bfb52a3","chunk-1abc17a0","chunk-2d0e6c6b"],{"0744":function(t,e,i){},"166a":function(t,e,i){},1800:function(t,e,i){"use strict";i("4de4"),i("d3b7");var s=i("2b0e");e["a"]=s["a"].extend({name:"v-list-item-action",functional:!0,render:function(t,e){var i=e.data,s=e.children,n=void 0===s?[]:s;i.staticClass=i.staticClass?"v-list-item__action ".concat(i.staticClass):"v-list-item__action";var a=n.filter((function(t){return!1===t.isComment&&" "!==t.text}));return a.length>1&&(i.staticClass+=" v-list-item__action--stack"),t("div",i,n)}})},"1baa":function(t,e,i){"use strict";var s=i("5530"),n=(i("899c"),i("604c")),a=i("a9ad"),r=i("58df");e["a"]=Object(r["a"])(n["a"],a["a"]).extend({name:"v-list-item-group",provide:function(){return{isInGroup:!0,listItemGroup:this}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-list-item-group":!0})}},methods:{genData:function(){return this.setTextColor(this.color,Object(s["a"])(Object(s["a"])({},n["a"].options.methods.genData.call(this)),{},{attrs:{role:"listbox"}}))}}})},"2c3e":function(t,e,i){var s=i("da84"),n=i("83ab"),a=i("9f7f").MISSED_STICKY,r=i("c6b6"),o=i("9bf2").f,c=i("69f3").get,l=RegExp.prototype,u=s.TypeError;n&&a&&o(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===r(this))return!!c(this).sticky;throw u("Incompatible receiver, RegExp required")}}})},3408:function(t,e,i){},"34c3":function(t,e,i){"use strict";i("498a");var s=i("2b0e");e["a"]=s["a"].extend({name:"v-list-item-icon",functional:!0,render:function(t,e){var i=e.data,s=e.children;return i.staticClass="v-list-item__icon ".concat(i.staticClass||"").trim(),t("div",i,s)}})},"3ad0":function(t,e,i){},"4d63":function(t,e,i){var s=i("83ab"),n=i("da84"),a=i("e330"),r=i("94ca"),o=i("7156"),c=i("9112"),l=i("9bf2").f,u=i("241c").f,d=i("3a9b"),h=i("44e7"),v=i("577e"),f=i("ad6d"),p=i("9f7f"),m=i("6eeb"),g=i("d039"),b=i("1a2d"),y=i("69f3").enforce,_=i("2626"),I=i("b622"),x=i("fce3"),C=i("107c"),O=I("match"),j=n.RegExp,V=j.prototype,k=n.SyntaxError,A=a(f),$=a(V.exec),S=a("".charAt),w=a("".replace),B=a("".indexOf),R=a("".slice),E=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,L=/a/g,M=/a/g,T=new j(L)!==L,z=p.MISSED_STICKY,G=p.UNSUPPORTED_Y,D=s&&(!T||z||x||C||g((function(){return M[O]=!1,j(L)!=L||j(M)==M||"/a/i"!=j(L,"i")}))),N=function(t){for(var e,i=t.length,s=0,n="",a=!1;s<=i;s++)e=S(t,s),"\\"!==e?a||"."!==e?("["===e?a=!0:"]"===e&&(a=!1),n+=e):n+="[\\s\\S]":n+=e+S(t,++s);return n},P=function(t){for(var e,i=t.length,s=0,n="",a=[],r={},o=!1,c=!1,l=0,u="";s<=i;s++){if(e=S(t,s),"\\"===e)e+=S(t,++s);else if("]"===e)o=!1;else if(!o)switch(!0){case"["===e:o=!0;break;case"("===e:$(E,R(t,s+1))&&(s+=2,c=!0),n+=e,l++;continue;case">"===e&&c:if(""===u||b(r,u))throw new k("Invalid capture group name");r[u]=!0,a[a.length]=[u,l],c=!1,u="";continue}c?u+=e:n+=e}return[n,a]};if(r("RegExp",D)){for(var U=function(t,e){var i,s,n,a,r,l,u=d(V,this),f=h(t),p=void 0===e,m=[],g=t;if(!u&&f&&p&&t.constructor===U)return t;if((f||d(V,t))&&(t=t.source,p&&(e="flags"in g?g.flags:A(g))),t=void 0===t?"":v(t),e=void 0===e?"":v(e),g=t,x&&"dotAll"in L&&(s=!!e&&B(e,"s")>-1,s&&(e=w(e,/s/g,""))),i=e,z&&"sticky"in L&&(n=!!e&&B(e,"y")>-1,n&&G&&(e=w(e,/y/g,""))),C&&(a=P(t),t=a[0],m=a[1]),r=o(j(t,e),u?this:V,U),(s||n||m.length)&&(l=y(r),s&&(l.dotAll=!0,l.raw=U(N(t),i)),n&&(l.sticky=!0),m.length&&(l.groups=m)),t!==g)try{c(r,"source",""===g?"(?:)":g)}catch(b){}return r},W=function(t){t in U||l(U,t,{configurable:!0,get:function(){return j[t]},set:function(e){j[t]=e}})},Y=u(j),q=0;Y.length>q;)W(Y[q++]);V.constructor=U,U.prototype=V,m(n,"RegExp",U)}_("RegExp")},"5d23":function(t,e,i){"use strict";i.d(e,"a",(function(){return O})),i.d(e,"c",(function(){return j})),i.d(e,"b",(function(){return V}));var s=i("80d2"),n=i("8860"),a=i("5530"),r=i("ade3"),o=(i("4d63"),i("c607"),i("ac1f"),i("2c3e"),i("25f0"),i("466d"),i("db42"),i("9d26")),c=i("da13"),l=i("34c3"),u=i("7e2b"),d=i("9d65"),h=i("a9ad"),v=i("f2e7"),f=i("3206"),p=i("5607"),m=i("0789"),g=i("58df"),b=Object(g["a"])(u["a"],d["a"],h["a"],Object(f["a"])("list"),v["a"]),y=b.extend().extend({name:"v-list-group",directives:{ripple:p["a"]},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:[String,RegExp],noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes:function(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive:function(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created:function(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy:function(){this.list&&this.list.unregister(this)},methods:{click:function(t){var e=this;this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick((function(){return e.isActive=!e.isActive})))},genIcon:function(t){return this.$createElement(o["a"],t)},genAppendIcon:function(){var t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(l["a"],{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader:function(){return this.$createElement(c["a"],{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:Object(r["a"])({},this.activeClass,this.isActive),props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object(a["a"])(Object(a["a"])({},this.listeners$),{},{click:this.click})},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:t.isActive}]},Object(s["p"])(t))]}))},genPrependIcon:function(){var t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(l["a"],{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange:function(t){if(this.group){var e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e}},toggle:function(t){var e=this,i=this._uid===t;i&&(this.isBooted=!0),this.$nextTick((function(){return e.isActive=i}))},matchRoute:function(t){return null!==t.match(this.group)}},render:function(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(m["a"],this.genItems())])}}),_=i("1baa"),I=i("1800"),x=i("8270"),C=Object(s["i"])("v-list-item__action-text","span"),O=Object(s["i"])("v-list-item__content","div"),j=Object(s["i"])("v-list-item__title","div"),V=Object(s["i"])("v-list-item__subtitle","div");n["a"],c["a"],I["a"],x["a"],_["a"],l["a"]},"604c":function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var s=i("5530"),n=(i("a9e3"),i("4de4"),i("d3b7"),i("a434"),i("159b"),i("fb6a"),i("7db0"),i("c740"),i("166a"),i("8547")),a=i("a452"),r=i("7560"),o=i("58df"),c=i("d9bd"),l=Object(o["a"])(n["a"],a["a"],r["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(s["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,i){return t.toggleMethod(t.getValue(e,i))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.valueComparator(t.internalValue,e)};var e=this.internalValue;return Array.isArray(e)?function(i){return e.some((function(e){return t.valueComparator(e,i)}))}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(c["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return void 0===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,i=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,i)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);var s=this.selectedValues.indexOf(i);if(!(s<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==i})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var i=e.find((function(t){return!t.disabled}));if(i){var s=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,s))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),s=i.findIndex((function(e){return e===t}));this.mandatory&&s>-1&&i.length-1<1||null!=this.max&&s<0&&i.length+1>this.max||(s>-1?i.splice(s,1):i.push(t),this.internalValue=i)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t(this.tag,this.genData(),this.$slots.default)}});l.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},"61d2":function(t,e,i){},"713a":function(t,e,i){"use strict";var s=i("8212");e["a"]=s["a"]},8212:function(t,e,i){"use strict";var s=i("5530"),n=(i("a9e3"),i("3408"),i("a9ad")),a=i("24b2"),r=i("a236"),o=i("80d2"),c=i("58df");e["a"]=Object(c["a"])(n["a"],a["a"],r["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(s["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(s["a"])({height:Object(o["g"])(this.size),minWidth:Object(o["g"])(this.size),width:Object(o["g"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}})},8270:function(t,e,i){"use strict";var s=i("5530"),n=(i("a9e3"),i("713a"));e["a"]=n["a"].extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-list-item__avatar--horizontal":this.horizontal},n["a"].options.computed.classes.call(this)),{},{"v-avatar--tile":this.tile||this.horizontal})}},render:function(t){var e=n["a"].options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}})},8547:function(t,e,i){"use strict";var s=i("2b0e"),n=i("80d2");e["a"]=s["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:n["j"]}}})},8860:function(t,e,i){"use strict";var s=i("b85c"),n=i("5530"),a=(i("0481"),i("4069"),i("c740"),i("a434"),i("3ad0"),i("8dd9"));e["a"]=a["a"].extend().extend({name:"v-list",provide:function(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:function(){return{groups:[]}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine})}},methods:{register:function(t){this.groups.push(t)},unregister:function(t){var e=this.groups.findIndex((function(e){return e._uid===t._uid}));e>-1&&this.groups.splice(e,1)},listClick:function(t){if(!this.expand){var e,i=Object(s["a"])(this.groups);try{for(i.s();!(e=i.n()).done;){var n=e.value;n.toggle(t)}}catch(a){i.e(a)}finally{i.f()}}}},render:function(t){var e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:Object(n["a"])({role:this.isInNav||this.isInMenu?void 0:"list"},this.attrs$)};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})},"899c":function(t,e,i){},"8ce9":function(t,e,i){},"98ee":function(t,e,i){"use strict";i("0744")},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"d",(function(){return c}));var s=i("b0af"),n=i("80d2"),a=Object(n["i"])("v-card__actions"),r=Object(n["i"])("v-card__subtitle"),o=Object(n["i"])("v-card__text"),c=Object(n["i"])("v-card__title");s["a"]},"9d26":function(t,e,i){"use strict";var s=i("132d");e["a"]=s["a"]},c607:function(t,e,i){var s=i("da84"),n=i("83ab"),a=i("fce3"),r=i("c6b6"),o=i("9bf2").f,c=i("69f3").get,l=RegExp.prototype,u=s.TypeError;n&&a&&o(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===r(this))return!!c(this).dotAll;throw u("Incompatible receiver, RegExp required")}}})},c740:function(t,e,i){"use strict";var s=i("23e7"),n=i("b727").findIndex,a=i("44d2"),r="findIndex",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),s({target:"Array",proto:!0,forced:o},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a(r)},ce7e:function(t,e,i){"use strict";var s=i("5530"),n=(i("8ce9"),i("7560"));e["a"]=n["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(s["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(s["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},da13:function(t,e,i){"use strict";var s=i("5530"),n=(i("61d2"),i("a9ad")),a=i("1c87"),r=i("4e82c"),o=i("7560"),c=i("f2e7"),l=i("5607"),u=i("80d2"),d=i("d9bd"),h=i("58df"),v=Object(h["a"])(n["a"],a["a"],o["a"],Object(r["a"])("listItemGroup"),Object(c["b"])("inputValue"));e["a"]=v.extend().extend({name:"v-list-item",directives:{Ripple:l["a"]},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default:function(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:function(){return{proxyClass:"v-list-item--active"}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-list-item":!0},a["a"].options.computed.classes.call(this)),{},{"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine},this.themeClasses)},isClickable:function(){return Boolean(a["a"].options.computed.isClickable.call(this)||this.listItemGroup)}},created:function(){this.$attrs.hasOwnProperty("avatar")&&Object(d["e"])("avatar",this)},methods:{click:function(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs:function(){var t=Object(s["a"])({"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1},this.$attrs);return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||"list-item-".concat(this._uid)):this.isInList&&(t.role="listitem")),t},toggle:function(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render:function(t){var e=this,i=this.generateRouteLink(),n=i.tag,a=i.data;a.attrs=Object(s["a"])(Object(s["a"])({},a.attrs),this.genAttrs()),a[this.to?"nativeOn":"on"]=Object(s["a"])(Object(s["a"])({},a[this.to?"nativeOn":"on"]),{},{keydown:function(t){t.keyCode===u["u"].enter&&e.click(t),e.$emit("keydown",t)}}),this.inactive&&(n="div"),this.inactive&&this.to&&(a.on=a.nativeOn,delete a.nativeOn);var r=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(n,this.isActive?this.setTextColor(this.color,a):a,r)}})},db42:function(t,e,i){},f140:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{flat:""}},[i("rule-dialog"),i("v-card-actions",{staticClass:"grey lighten-5"},[i("v-spacer"),i("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),s),[i("v-icon",[t._v("mdi-dots-horizontal")])],1)]}}])},[i("v-list",{attrs:{dense:""}},[i("v-list-item",{on:{click:function(e){return t.$store.dispatch("setRuleState",!0)}}},[t._v(" New Rule ")]),i("v-divider"),i("v-list-item",[t._v("Copy URL")])],1)],1)],1),i("v-card-text",[i("v-card",{attrs:{flat:"",color:"grey lighten-4"}},[i("v-card-title",{staticClass:"table-of-content"},[t._v("Table of content")]),i("v-card-text",[i("v-card",{attrs:{outlined:"",flat:""}},[i("v-card-title",{staticClass:"content-item px18"},[t._v(" Welcome to "+t._s(t.community.name)+"! ")]),i("v-card-text",{staticClass:"py-1 px16 weight-500"},[t._v(" Rules ")]),i("v-list",{staticClass:"content-item-list",attrs:{dense:""}},t._l(t.community.rules,(function(e,s){return i("v-list-item",{key:e.id,staticClass:"content-item align-center pl-5"},[i("v-list-item-avatar",{attrs:{size:"12",tile:""}},[i("div",{staticClass:"full-width text-center"},[t._v(t._s(s+1)+".")])]),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)],1),i("v-card-text",[t._v(" "+t._s(t.community.welcome_text)+" ")]),i("v-card-text",{staticClass:"py-0"},[i("v-card-title",{staticClass:"py-0"},[t._v("Rules")])],1),t._l(t.community.rules,(function(e,s){return i("v-card-text",{key:e.id,staticClass:"py-0"},[i("v-card-title",{class:{"pt-0":0!==s}},[t._v(" "+t._s(e.title)+" "),i("v-spacer"),i("v-btn",{attrs:{icon:"",color:t.community.theme.color},on:{click:function(i){return t.$store.dispatch("setRuleInEdit",e)}}},[i("v-icon",[t._v("mdi-pencil")])],1),i("v-btn",{attrs:{icon:"",color:"error"}},[i("v-icon",[t._v("mdi-delete")])],1)],1),i("v-card-subtitle",[t._v(t._s(e.description))])],1)}))],2)],1)],1)},n=[],a=i("5530"),r=(i("d3b7"),i("3ca3"),i("ddb0"),i("2f62")),o={name:"WikiPage",components:{RuleDialog:function(){return i.e("chunk-40822e9e").then(i.bind(null,"9e6b"))}},data:function(){return{options:{lineNumbers:!1}}},computed:Object(a["a"])({},Object(r["b"])({community:"community/inView"})),methods:{}},c=o,l=(i("98ee"),i("2877")),u=i("6544"),d=i.n(u),h=i("8336"),v=i("b0af"),f=i("99d9"),p=i("ce7e"),m=i("132d"),g=i("8860"),b=i("da13"),y=i("8270"),_=i("5d23"),I=i("e449"),x=i("2fa4"),C=Object(l["a"])(c,s,n,!1,null,"06dc5f80",null);e["default"]=C.exports;d()(C,{VBtn:h["a"],VCard:v["a"],VCardActions:f["a"],VCardSubtitle:f["b"],VCardText:f["c"],VCardTitle:f["d"],VDivider:p["a"],VIcon:m["a"],VList:g["a"],VListItem:b["a"],VListItemAvatar:y["a"],VListItemContent:_["a"],VListItemTitle:_["c"],VMenu:I["a"],VSpacer:x["a"]})}}]);
//# sourceMappingURL=chunk-6bfb52a3.edede7db.js.map