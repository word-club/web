(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-060abe6a"],{"166a":function(e,t,r){},"269a":function(e,t){e.exports=function(e,t){var r="function"===typeof e.exports?e.exports.extendOptions:e.options;for(var n in"function"===typeof e.exports&&(r.directives=e.exports.options.directives),r.directives=r.directives||{},t)r.directives[n]=r.directives[n]||t[n]}},3408:function(e,t,r){},"59a6":function(e,t,r){"use strict";r("9da2")},"604c":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("5530"),i=(r("a9e3"),r("4de4"),r("d3b7"),r("caad"),r("2532"),r("a434"),r("159b"),r("fb6a"),r("7db0"),r("c740"),r("166a"),r("a452")),a=r("7560"),s=r("58df"),u=r("d9bd"),o=Object(s["a"])(i["a"],a["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(n["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var e=this;return this.items.filter((function(t,r){return e.toggleMethod(e.getValue(t,r))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var e=this;if(!this.multiple)return function(t){return e.internalValue===t};var t=this.internalValue;return Array.isArray(t)?function(e){return t.includes(e)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(u["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(e,t){return null==e.value||""===e.value?t:e.value},onClick:function(e){this.updateInternalValue(this.getValue(e,this.items.indexOf(e)))},register:function(e){var t=this,r=this.items.push(e)-1;e.$on("change",(function(){return t.onClick(e)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(e,r)},unregister:function(e){if(!this._isDestroyed){var t=this.items.indexOf(e),r=this.getValue(e,t);this.items.splice(t,1);var n=this.selectedValues.indexOf(r);if(!(n<0)){if(!this.mandatory)return this.updateInternalValue(r);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(e){return e!==r})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(e,t){var r=this.getValue(e,t);e.isActive=this.toggleMethod(r)},updateItemsState:function(){var e=this;this.$nextTick((function(){if(e.mandatory&&!e.selectedItems.length)return e.updateMandatory();e.items.forEach(e.updateItem)}))},updateInternalValue:function(e){this.multiple?this.updateMultiple(e):this.updateSingle(e)},updateMandatory:function(e){if(this.items.length){var t=this.items.slice();e&&t.reverse();var r=t.find((function(e){return!e.disabled}));if(r){var n=this.items.indexOf(r);this.updateInternalValue(this.getValue(r,n))}}},updateMultiple:function(e){var t=Array.isArray(this.internalValue)?this.internalValue:[],r=t.slice(),n=r.findIndex((function(t){return t===e}));this.mandatory&&n>-1&&r.length-1<1||null!=this.max&&n<0&&r.length+1>this.max||(n>-1?r.splice(n,1):r.push(e),this.internalValue=r)},updateSingle:function(e){var t=e===this.internalValue;this.mandatory&&t||(this.internalValue=t?void 0:e)}},render:function(e){return e(this.tag,this.genData(),this.$slots.default)}});o.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},6554:function(e,t,r){"use strict";var n=r("1da1"),i=(r("96cf"),{methods:{toPublicationDetail:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"Publication",params:{id:e}});case 2:case"end":return r.stop()}}),r)})))()},toCommunityDetail:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"Community Detail",params:{id:e}});case 2:case"end":return r.stop()}}),r)})))()},toCommunityWiki:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"Community Detail Wiki",params:{id:e}});case 2:case"end":return r.stop()}}),r)})))()},toCommunityModmail:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"Community Detail Modmail",params:{id:e}});case 2:case"end":return r.stop()}}),r)})))()},toRegisterCommunity:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Community Mainframe"});case 2:case"end":return t.stop()}}),t)})))()},toRegisterCommunityTheme:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Community Display"});case 2:case"end":return t.stop()}}),t)})))()},toRegisterCommunityRules:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Community Rules"});case 2:case"end":return t.stop()}}),t)})))()},toRegisterCommunityTags:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Community Hashtags"});case 2:case"end":return t.stop()}}),t)})))()},toRegisterCommunityAuthorization:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Community Authorization"});case 2:case"end":return t.stop()}}),t)})))()},toRegisterCommunityAdmin:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Community Administration"});case 2:case"end":return t.stop()}}),t)})))()},toHome:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push("/");case 2:case"end":return t.stop()}}),t)})))()},toUserOverview:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"User Overview",params:{username:e}});case 2:case"end":return r.stop()}}),r)})))()},toUserPosts:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"User Posts",params:{username:e}});case 2:case"end":return r.stop()}}),r)})))()},toUserComments:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"User Comments",params:{username:e}});case 2:case"end":return r.stop()}}),r)})))()},toUserAwards:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"User Awards",params:{username:e}});case 2:case"end":return r.stop()}}),r)})))()},toProfileOverview:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Overview"});case 2:case"end":return t.stop()}}),t)})))()},toProfilePosts:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Posts"});case 2:case"end":return t.stop()}}),t)})))()},toProfileComments:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Comments"});case 2:case"end":return t.stop()}}),t)})))()},toProfileSaved:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Saved"});case 2:case"end":return t.stop()}}),t)})))()},toProfileHidden:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Hidden"});case 2:case"end":return t.stop()}}),t)})))()},toProfileUpVoted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Upvoted"});case 2:case"end":return t.stop()}}),t)})))()},toProfileDownVoted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Downvoted"});case 2:case"end":return t.stop()}}),t)})))()},toProfileShares:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Shares"});case 2:case"end":return t.stop()}}),t)})))()},toCreatePost:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Submit"});case 2:case"end":return t.stop()}}),t)})))()}}});t["a"]=i},8212:function(e,t,r){"use strict";var n=r("5530"),i=(r("a9e3"),r("3408"),r("a9ad")),a=r("24b2"),s=r("a236"),u=r("80d2"),o=r("58df");t["a"]=Object(o["a"])(i["a"],a["a"],s["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(n["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(n["a"])({height:Object(u["g"])(this.size),minWidth:Object(u["g"])(this.size),width:Object(u["g"])(this.size)},this.measurableStyles)}},render:function(e){var t={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return e("div",this.setBackgroundColor(this.color,t),this.$slots.default)}})},"8ce9":function(e,t,r){},"9d26":function(e,t,r){"use strict";var n=r("132d");t["a"]=n["a"]},"9da2":function(e,t,r){},c740:function(e,t,r){"use strict";var n=r("23e7"),i=r("b727").findIndex,a=r("44d2"),s="findIndex",u=!0;s in[]&&Array(1)[s]((function(){u=!1})),n({target:"Array",proto:!0,forced:u},{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a(s)},ce7e:function(e,t,r){"use strict";var n=r("5530"),i=(r("8ce9"),r("7560"));t["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:Object(n["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(n["a"])({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}})},f485:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"feeds-comment-item",attrs:{outlined:""}},[r("v-card-text",{staticClass:"pa-2 d-flex"},[r("v-icon",[e._v("mdi-comment")]),r("div",{staticClass:"px-2"},[r("div",{staticClass:"d-flex"},[r("div",{staticClass:"px14"},[r("span",{staticClass:"cursor primary--text hover-underline",on:{click:function(t){return e.toUserOverview(e.createdBy.username)}}},[e._v(" u/"+e._s(e.createdBy.username)+" ")]),r("span",{staticClass:"px-1"},[e._v("commented on")]),r("span",{staticClass:"cursor weight-500 hover-underline",on:{click:function(t){return e.toPublicationDetail(e.publication.id)}}},[e._v(" "+e._s(e.publication.title)+" ")])]),e.community?r("v-icon",[e._v("mdi-circle-small")]):e._e(),e.community?r("div",{staticClass:"px14 weight-600 cursor hover-underline",class:e.community.theme.color+"--text",on:{click:function(t){return e.toCommunityDetail(e.community.id)}}},[e._v(" "+e._s(e.community.unique_id)+" ")]):e._e()],1),r("div",{staticClass:"px14 weight-400"},[e._v(" Posted by "),r("span",{staticClass:"cursor hover-underline weight-600",on:{click:function(t){return e.toUserOverview(e.publication.created_by.username)}}},[e._v(" "+e._s(e.publication.created_by.username)+" ")])])])],1),r("v-divider",{staticClass:"mx-2 pb-1"}),r("div",{staticClass:"comment-item-wrapper"},[r("v-card",{staticClass:"item-card",attrs:{flat:"",color:"grey lighten-3"}},[r("v-card-subtitle",{staticClass:"d-flex py-0 pt-1 px14"},[r("div",{staticClass:"cursor hover-underline",on:{click:function(t){return e.toUserOverview(e.createdBy.username)}}},[e._v(" u/"+e._s(e.createdBy.username)+" ")]),r("v-icon",[e._v("mdi-circle-small")]),r("div",[e._v(e._s(e.$moment(e.comment.timestamp).fromNow()))])],1),r("v-card-text",{staticClass:"py-0 px16 black--text"},[e._v(" "+e._s(e.comment.comment)+" ")]),r("v-card-actions",{staticClass:"pa-2 pt-0"},[r("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"action-btn cursor"},[e._v(" Reply ")]),r("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"action-btn cursor"},[e._v(" Share ")]),r("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.attrs,i=t.on;return[r("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",n,!1),i),[r("v-icon",[e._v("mdi-dots-horizontal")])],1)]}}])},[r("v-list",{attrs:{dense:""}},[r("v-list-item",[r("v-list-item-icon",[r("v-icon",[e._v("mdi-flag-outline")]),r("v-list-item-title",{staticClass:"pl-2"},[e._v(" Report ")])],1)],1),r("v-divider"),r("v-list-item",[r("v-list-item-icon",[r("v-icon",[e._v("mdi-bookmark-outline")]),r("v-list-item-title",{staticClass:"pl-2"},[e._v(" Save ")])],1)],1)],1)],1),r("v-spacer"),r("v-btn",{attrs:{small:"",icon:""}},[r("v-icon",[e._v("mdi-arrow-up-bold")])],1),r("div",[e._v(e._s(e.comment.reactions.total))]),r("v-btn",{attrs:{icon:"",small:""}},[r("v-icon",[e._v("mdi-arrow-down-bold")])],1)],1)],1)],1)],1)},i=[],a=r("5530"),s=r("6554"),u=r("2f62"),o={name:"CommentInstance",mixins:[s["a"]],props:{comment:{type:Object,default:function(){return{publication:{community:null,created_by:null}}}}},computed:Object(a["a"])(Object(a["a"])({},Object(u["b"])({userInView:"user/inView"})),{},{publication:function(){return this.comment.publication},community:function(){return this.publication.community},createdBy:function(){return this.comment.created_by?this.comment.created_by:{username:this.userInView.username}}})},c=o,l=(r("59a6"),r("2877")),m=r("6544"),d=r.n(m),h=r("8336"),p=r("b0af"),v=r("99d9"),f=r("ce7e"),g=r("132d"),w=r("8860"),b=r("da13"),x=r("34c3"),y=r("5d23"),C=r("e449"),R=r("2fa4"),O=r("269a"),V=r.n(O),_=r("5607"),k=Object(l["a"])(c,n,i,!1,null,"84e961bc",null);t["default"]=k.exports;d()(k,{VBtn:h["a"],VCard:p["a"],VCardActions:v["a"],VCardSubtitle:v["b"],VCardText:v["c"],VDivider:f["a"],VIcon:g["a"],VList:w["a"],VListItem:b["a"],VListItemIcon:x["a"],VListItemTitle:y["c"],VMenu:C["a"],VSpacer:R["a"]}),V()(k,{Ripple:_["a"]})}}]);
//# sourceMappingURL=chunk-060abe6a.984fd5a2.js.map