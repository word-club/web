(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ba4982c","chunk-1abc17a0"],{"166a":function(t,e,i){},1800:function(t,e,i){"use strict";i("4de4"),i("d3b7");var n=i("2b0e");e["a"]=n["a"].extend({name:"v-list-item-action",functional:!0,render:function(t,e){var i=e.data,n=e.children,r=void 0===n?[]:n;i.staticClass=i.staticClass?"v-list-item__action ".concat(i.staticClass):"v-list-item__action";var a=r.filter((function(t){return!1===t.isComment&&" "!==t.text}));return a.length>1&&(i.staticClass+=" v-list-item__action--stack"),t("div",i,r)}})},"1baa":function(t,e,i){"use strict";var n=i("5530"),r=(i("899c"),i("604c")),a=i("a9ad"),s=i("58df");e["a"]=Object(s["a"])(r["a"],a["a"]).extend({name:"v-list-item-group",provide:function(){return{isInGroup:!0,listItemGroup:this}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-list-item-group":!0})}},methods:{genData:function(){return this.setTextColor(this.color,Object(n["a"])(Object(n["a"])({},r["a"].options.methods.genData.call(this)),{},{attrs:{role:"listbox"}}))}}})},"269a":function(t,e){t.exports=function(t,e){var i="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var n in"function"===typeof t.exports&&(i.directives=t.exports.options.directives),i.directives=i.directives||{},e)i.directives[n]=i.directives[n]||e[n]}},"2c3e":function(t,e,i){var n=i("da84"),r=i("83ab"),a=i("9f7f").MISSED_STICKY,s=i("c6b6"),o=i("9bf2").f,u=i("69f3").get,c=RegExp.prototype,l=n.TypeError;r&&a&&o(c,"sticky",{configurable:!0,get:function(){if(this!==c){if("RegExp"===s(this))return!!u(this).sticky;throw l("Incompatible receiver, RegExp required")}}})},3408:function(t,e,i){},"34c3":function(t,e,i){"use strict";i("498a");var n=i("2b0e");e["a"]=n["a"].extend({name:"v-list-item-icon",functional:!0,render:function(t,e){var i=e.data,n=e.children;return i.staticClass="v-list-item__icon ".concat(i.staticClass||"").trim(),t("div",i,n)}})},"3ad0":function(t,e,i){},"4d63":function(t,e,i){var n=i("83ab"),r=i("da84"),a=i("e330"),s=i("94ca"),o=i("7156"),u=i("9112"),c=i("9bf2").f,l=i("241c").f,d=i("3a9b"),h=i("44e7"),m=i("577e"),p=i("ad6d"),v=i("9f7f"),f=i("6eeb"),g=i("d039"),b=i("1a2d"),x=i("69f3").enforce,w=i("2626"),y=i("b622"),C=i("fce3"),O=i("107c"),_=y("match"),R=r.RegExp,j=R.prototype,I=r.SyntaxError,k=a(p),$=a(j.exec),V=a("".charAt),A=a("".replace),S=a("".indexOf),B=a("".slice),P=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,E=/a/g,D=/a/g,M=new R(E)!==E,L=v.MISSED_STICKY,z=v.UNSUPPORTED_Y,T=n&&(!M||L||C||O||g((function(){return D[_]=!1,R(E)!=E||R(D)==D||"/a/i"!=R(E,"i")}))),U=function(t){for(var e,i=t.length,n=0,r="",a=!1;n<=i;n++)e=V(t,n),"\\"!==e?a||"."!==e?("["===e?a=!0:"]"===e&&(a=!1),r+=e):r+="[\\s\\S]":r+=e+V(t,++n);return r},G=function(t){for(var e,i=t.length,n=0,r="",a=[],s={},o=!1,u=!1,c=0,l="";n<=i;n++){if(e=V(t,n),"\\"===e)e+=V(t,++n);else if("]"===e)o=!1;else if(!o)switch(!0){case"["===e:o=!0;break;case"("===e:$(P,B(t,n+1))&&(n+=2,u=!0),r+=e,c++;continue;case">"===e&&u:if(""===l||b(s,l))throw new I("Invalid capture group name");s[l]=!0,a[a.length]=[l,c],u=!1,l="";continue}u?l+=e:r+=e}return[r,a]};if(s("RegExp",T)){for(var N=function(t,e){var i,n,r,a,s,c,l=d(j,this),p=h(t),v=void 0===e,f=[],g=t;if(!l&&p&&v&&t.constructor===N)return t;if((p||d(j,t))&&(t=t.source,v&&(e="flags"in g?g.flags:k(g))),t=void 0===t?"":m(t),e=void 0===e?"":m(e),g=t,C&&"dotAll"in E&&(n=!!e&&S(e,"s")>-1,n&&(e=A(e,/s/g,""))),i=e,L&&"sticky"in E&&(r=!!e&&S(e,"y")>-1,r&&z&&(e=A(e,/y/g,""))),O&&(a=G(t),t=a[0],f=a[1]),s=o(R(t,e),l?this:j,N),(n||r||f.length)&&(c=x(s),n&&(c.dotAll=!0,c.raw=N(U(t),i)),r&&(c.sticky=!0),f.length&&(c.groups=f)),t!==g)try{u(s,"source",""===g?"(?:)":g)}catch(b){}return s},H=function(t){t in N||c(N,t,{configurable:!0,get:function(){return R[t]},set:function(e){R[t]=e}})},q=l(R),W=0;q.length>W;)H(q[W++]);j.constructor=N,N.prototype=j,f(r,"RegExp",N)}w("RegExp")},"5d23":function(t,e,i){"use strict";i.d(e,"a",(function(){return _})),i.d(e,"c",(function(){return R})),i.d(e,"b",(function(){return j}));var n=i("80d2"),r=i("8860"),a=i("5530"),s=i("ade3"),o=(i("4d63"),i("c607"),i("ac1f"),i("2c3e"),i("25f0"),i("466d"),i("db42"),i("9d26")),u=i("da13"),c=i("34c3"),l=i("7e2b"),d=i("9d65"),h=i("a9ad"),m=i("f2e7"),p=i("3206"),v=i("5607"),f=i("0789"),g=i("58df"),b=Object(g["a"])(l["a"],d["a"],h["a"],Object(p["a"])("list"),m["a"]),x=b.extend().extend({name:"v-list-group",directives:{ripple:v["a"]},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:[String,RegExp],noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes:function(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive:function(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created:function(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy:function(){this.list&&this.list.unregister(this)},methods:{click:function(t){var e=this;this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick((function(){return e.isActive=!e.isActive})))},genIcon:function(t){return this.$createElement(o["a"],t)},genAppendIcon:function(){var t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(c["a"],{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader:function(){return this.$createElement(u["a"],{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:Object(s["a"])({},this.activeClass,this.isActive),props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object(a["a"])(Object(a["a"])({},this.listeners$),{},{click:this.click})},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:t.isActive}]},Object(n["p"])(t))]}))},genPrependIcon:function(){var t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(c["a"],{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange:function(t){if(this.group){var e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e}},toggle:function(t){var e=this,i=this._uid===t;i&&(this.isBooted=!0),this.$nextTick((function(){return e.isActive=i}))},matchRoute:function(t){return null!==t.match(this.group)}},render:function(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(f["a"],this.genItems())])}}),w=i("1baa"),y=i("1800"),C=i("8270"),O=Object(n["i"])("v-list-item__action-text","span"),_=Object(n["i"])("v-list-item__content","div"),R=Object(n["i"])("v-list-item__title","div"),j=Object(n["i"])("v-list-item__subtitle","div");r["a"],u["a"],y["a"],C["a"],w["a"],c["a"]},"604c":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n=i("5530"),r=(i("a9e3"),i("4de4"),i("d3b7"),i("a434"),i("159b"),i("fb6a"),i("7db0"),i("c740"),i("166a"),i("8547")),a=i("a452"),s=i("7560"),o=i("58df"),u=i("d9bd"),c=Object(o["a"])(r["a"],a["a"],s["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(n["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,i){return t.toggleMethod(t.getValue(e,i))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.valueComparator(t.internalValue,e)};var e=this.internalValue;return Array.isArray(e)?function(i){return e.some((function(e){return t.valueComparator(e,i)}))}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(u["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return void 0===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,i=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,i)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);var n=this.selectedValues.indexOf(i);if(!(n<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==i})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var i=e.find((function(t){return!t.disabled}));if(i){var n=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,n))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),n=i.findIndex((function(e){return e===t}));this.mandatory&&n>-1&&i.length-1<1||null!=this.max&&n<0&&i.length+1>this.max||(n>-1?i.splice(n,1):i.push(t),this.internalValue=i)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t(this.tag,this.genData(),this.$slots.default)}});c.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},"61d2":function(t,e,i){},6554:function(t,e,i){"use strict";var n=i("1da1"),r=(i("96cf"),{methods:{toPublicationDetail:function(t,e){var i=this;return Object(n["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,i.$router.push({name:"Publication",params:{id:t,view:e}});case 2:case"end":return n.stop()}}),n)})))()},toCommunityDetail:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$router.push({name:"Community Detail",params:{id:t}});case 2:case"end":return i.stop()}}),i)})))()},toCommunityWiki:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$router.push({name:"Community Detail Wiki",params:{id:t}});case 2:case"end":return i.stop()}}),i)})))()},toCommunityModmail:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$router.push({name:"Community Detail Modmail",params:{id:t}});case 2:case"end":return i.stop()}}),i)})))()},toRegisterCommunity:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Community Mainframe"});case 2:case"end":return e.stop()}}),e)})))()},toRegisterCommunityTheme:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Community Display"});case 2:case"end":return e.stop()}}),e)})))()},toRegisterCommunityRules:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Community Rules"});case 2:case"end":return e.stop()}}),e)})))()},toRegisterCommunityTags:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Community Hashtags"});case 2:case"end":return e.stop()}}),e)})))()},toRegisterCommunityAuthorization:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Community Authorization"});case 2:case"end":return e.stop()}}),e)})))()},toRegisterCommunityAdmin:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Community Administration"});case 2:case"end":return e.stop()}}),e)})))()},toHome:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push("/");case 2:case"end":return e.stop()}}),e)})))()},toUserOverview:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$router.push({name:"User Overview",params:{username:t}});case 2:case"end":return i.stop()}}),i)})))()},toUserPosts:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$router.push({name:"User Posts",params:{username:t}});case 2:case"end":return i.stop()}}),i)})))()},toUserComments:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$router.push({name:"User Comments",params:{username:t}});case 2:case"end":return i.stop()}}),i)})))()},toUserAwards:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$router.push({name:"User Awards",params:{username:t}});case 2:case"end":return i.stop()}}),i)})))()},toProfileOverview:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Profile Overview"});case 2:case"end":return e.stop()}}),e)})))()},toProfilePosts:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Profile Posts"});case 2:case"end":return e.stop()}}),e)})))()},toProfileComments:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Profile Comments"});case 2:case"end":return e.stop()}}),e)})))()},toProfileSaved:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Profile Saved"});case 2:case"end":return e.stop()}}),e)})))()},toProfileHidden:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Profile Hidden"});case 2:case"end":return e.stop()}}),e)})))()},toProfileUpVoted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Profile Upvoted"});case 2:case"end":return e.stop()}}),e)})))()},toProfileDownVoted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Profile Downvoted"});case 2:case"end":return e.stop()}}),e)})))()},toProfileShares:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Profile Shares"});case 2:case"end":return e.stop()}}),e)})))()},toCreatePost:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push({name:"Submit"});case 2:case"end":return e.stop()}}),e)})))()}}});e["a"]=r},"713a":function(t,e,i){"use strict";var n=i("8212");e["a"]=n["a"]},8212:function(t,e,i){"use strict";var n=i("5530"),r=(i("a9e3"),i("3408"),i("a9ad")),a=i("24b2"),s=i("a236"),o=i("80d2"),u=i("58df");e["a"]=Object(u["a"])(r["a"],a["a"],s["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(n["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(n["a"])({height:Object(o["g"])(this.size),minWidth:Object(o["g"])(this.size),width:Object(o["g"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}})},8270:function(t,e,i){"use strict";var n=i("5530"),r=(i("a9e3"),i("713a"));e["a"]=r["a"].extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({"v-list-item__avatar--horizontal":this.horizontal},r["a"].options.computed.classes.call(this)),{},{"v-avatar--tile":this.tile||this.horizontal})}},render:function(t){var e=r["a"].options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}})},8547:function(t,e,i){"use strict";var n=i("2b0e"),r=i("80d2");e["a"]=n["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:r["j"]}}})},8860:function(t,e,i){"use strict";var n=i("b85c"),r=i("5530"),a=(i("0481"),i("4069"),i("c740"),i("a434"),i("3ad0"),i("8dd9"));e["a"]=a["a"].extend().extend({name:"v-list",provide:function(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:function(){return{groups:[]}},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine})}},methods:{register:function(t){this.groups.push(t)},unregister:function(t){var e=this.groups.findIndex((function(e){return e._uid===t._uid}));e>-1&&this.groups.splice(e,1)},listClick:function(t){if(!this.expand){var e,i=Object(n["a"])(this.groups);try{for(i.s();!(e=i.n()).done;){var r=e.value;r.toggle(t)}}catch(a){i.e(a)}finally{i.f()}}}},render:function(t){var e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:Object(r["a"])({role:this.isInNav||this.isInMenu?void 0:"list"},this.attrs$)};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})},"899c":function(t,e,i){},"8b6e":function(t,e,i){"use strict";i("b929")},"8ce9":function(t,e,i){},"9d26":function(t,e,i){"use strict";var n=i("132d");e["a"]=n["a"]},b929:function(t,e,i){},c607:function(t,e,i){var n=i("da84"),r=i("83ab"),a=i("fce3"),s=i("c6b6"),o=i("9bf2").f,u=i("69f3").get,c=RegExp.prototype,l=n.TypeError;r&&a&&o(c,"dotAll",{configurable:!0,get:function(){if(this!==c){if("RegExp"===s(this))return!!u(this).dotAll;throw l("Incompatible receiver, RegExp required")}}})},c740:function(t,e,i){"use strict";var n=i("23e7"),r=i("b727").findIndex,a=i("44d2"),s="findIndex",o=!0;s in[]&&Array(1)[s]((function(){o=!1})),n({target:"Array",proto:!0,forced:o},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a(s)},ce7e:function(t,e,i){"use strict";var n=i("5530"),r=(i("8ce9"),i("7560"));e["a"]=r["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(n["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(n["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},da13:function(t,e,i){"use strict";var n=i("5530"),r=(i("61d2"),i("a9ad")),a=i("1c87"),s=i("4e82c"),o=i("7560"),u=i("f2e7"),c=i("5607"),l=i("80d2"),d=i("d9bd"),h=i("58df"),m=Object(h["a"])(r["a"],a["a"],o["a"],Object(s["a"])("listItemGroup"),Object(u["b"])("inputValue"));e["a"]=m.extend().extend({name:"v-list-item",directives:{Ripple:c["a"]},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default:function(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:function(){return{proxyClass:"v-list-item--active"}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({"v-list-item":!0},a["a"].options.computed.classes.call(this)),{},{"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine},this.themeClasses)},isClickable:function(){return Boolean(a["a"].options.computed.isClickable.call(this)||this.listItemGroup)}},created:function(){this.$attrs.hasOwnProperty("avatar")&&Object(d["e"])("avatar",this)},methods:{click:function(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs:function(){var t=Object(n["a"])({"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1},this.$attrs);return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||"list-item-".concat(this._uid)):this.isInList&&(t.role="listitem")),t},toggle:function(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render:function(t){var e=this,i=this.generateRouteLink(),r=i.tag,a=i.data;a.attrs=Object(n["a"])(Object(n["a"])({},a.attrs),this.genAttrs()),a[this.to?"nativeOn":"on"]=Object(n["a"])(Object(n["a"])({},a[this.to?"nativeOn":"on"]),{},{keydown:function(t){t.keyCode===l["u"].enter&&e.click(t),e.$emit("keydown",t)}}),this.inactive&&(r="div"),this.inactive&&this.to&&(a.on=a.nativeOn,delete a.nativeOn);var s=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(r,this.isActive?this.setTextColor(this.color,a):a,s)}})},db42:function(t,e,i){},f485:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"feeds-comment-item",attrs:{outlined:""}},[i("v-card-text",{staticClass:"pa-2 d-flex"},[i("v-icon",[t._v("mdi-comment")]),i("div",{staticClass:"px-2"},[i("div",{staticClass:"d-flex"},[i("div",{staticClass:"px14"},[i("span",{staticClass:"cursor primary--text hover-underline",on:{click:function(e){return t.toUserOverview(t.createdBy.username)}}},[t._v(" u/"+t._s(t.createdBy.username)+" ")]),i("span",{staticClass:"px-1"},[t._v("commented on")]),i("span",{staticClass:"cursor weight-500 hover-underline",on:{click:function(e){return t.toPublicationDetail(t.publication.id)}}},[t._v(" "+t._s(t.publication.title)+" ")])]),t.community?i("v-icon",[t._v("mdi-circle-small")]):t._e(),t.community?i("div",{staticClass:"px14 weight-600 cursor hover-underline",class:t.community.theme.color+"--text",on:{click:function(e){return t.toCommunityDetail(t.community.id)}}},[t._v(" "+t._s(t.community.unique_id)+" ")]):t._e()],1),i("div",{staticClass:"px14 weight-400"},[t._v(" Posted by "),i("span",{staticClass:"cursor hover-underline weight-600",on:{click:function(e){return t.toUserOverview(t.publication.created_by.username)}}},[t._v(" "+t._s(t.publication.created_by.username)+" ")])])])],1),i("v-divider",{staticClass:"mx-2 pb-1"}),i("div",{staticClass:"comment-item-wrapper"},[i("v-card",{staticClass:"item-card",attrs:{flat:"",color:"grey lighten-3"}},[i("v-card-subtitle",{staticClass:"d-flex py-0 pt-1 px14"},[i("div",{staticClass:"cursor hover-underline",on:{click:function(e){return t.toUserOverview(t.createdBy.username)}}},[t._v(" u/"+t._s(t.createdBy.username)+" ")]),i("v-icon",[t._v("mdi-circle-small")]),i("div",[t._v(t._s(t.$moment(t.comment.timestamp).fromNow()))])],1),i("v-card-text",{staticClass:"py-0 px16 black--text"},[t._v(" "+t._s(t.comment.comment)+" ")]),i("v-card-actions",{staticClass:"pa-2 pt-0"},[i("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"action-btn cursor"},[t._v(" Reply ")]),i("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"action-btn cursor"},[t._v(" Share ")]),i("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.attrs,r=e.on;return[i("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),r),[i("v-icon",[t._v("mdi-dots-horizontal")])],1)]}}])},[i("v-list",{attrs:{dense:""}},[i("v-list-item",[i("v-list-item-icon",[i("v-icon",[t._v("mdi-flag-outline")]),i("v-list-item-title",{staticClass:"pl-2"},[t._v(" Report ")])],1)],1),i("v-divider"),i("v-list-item",[i("v-list-item-icon",[i("v-icon",[t._v("mdi-bookmark-outline")]),i("v-list-item-title",{staticClass:"pl-2"},[t._v(" Save ")])],1)],1)],1)],1),i("v-spacer"),i("v-btn",{attrs:{small:"",icon:""}},[i("v-icon",[t._v("mdi-arrow-up-bold")])],1),i("div",[t._v(t._s(t.comment.popularity))]),i("v-btn",{attrs:{icon:"",small:""}},[i("v-icon",[t._v("mdi-arrow-down-bold")])],1)],1)],1)],1)],1)},r=[],a=i("5530"),s=i("6554"),o=i("2f62"),u={name:"CommentInstance",mixins:[s["a"]],props:{comment:{type:Object,default:function(){return{publication:{community:null,created_by:null}}}}},computed:Object(a["a"])(Object(a["a"])({},Object(o["b"])({userInView:"user/inView"})),{},{publication:function(){return this.comment.publication},community:function(){return this.publication.community},createdBy:function(){return this.comment.created_by?this.comment.created_by:{username:this.userInView.username}}})},c=u,l=(i("8b6e"),i("2877")),d=i("6544"),h=i.n(d),m=i("8336"),p=i("b0af"),v=i("99d9"),f=i("ce7e"),g=i("132d"),b=i("8860"),x=i("da13"),w=i("34c3"),y=i("5d23"),C=i("e449"),O=i("2fa4"),_=i("269a"),R=i.n(_),j=i("5607"),I=Object(l["a"])(c,n,r,!1,null,"31bed58d",null);e["default"]=I.exports;h()(I,{VBtn:m["a"],VCard:p["a"],VCardActions:v["a"],VCardSubtitle:v["b"],VCardText:v["c"],VDivider:f["a"],VIcon:g["a"],VList:b["a"],VListItem:x["a"],VListItemIcon:w["a"],VListItemTitle:y["c"],VMenu:C["a"],VSpacer:O["a"]}),R()(I,{Ripple:j["a"]})}}]);
//# sourceMappingURL=chunk-7ba4982c.150117bf.js.map