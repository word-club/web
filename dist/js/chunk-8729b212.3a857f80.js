(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8729b212","chunk-2d0e6c6b"],{3408:function(e,t,r){},"4fc4":function(e,t,r){"use strict";var n=r("1da1"),a=(r("96cf"),r("7db0"),r("d3b7"),r("159b"),r("a15b"),r("5f3b")),i=r("6554"),s=r("c473"),o={mixins:[a["a"],i["a"],s["a"]],computed:{state:function(){var e=this;return this.community.create_progress.find((function(t){return t.state===e.stateCode}))}},methods:{checkRequired:function(){var e=this,t=[];return Array.isArray(this.requiredFields)?(this.requiredFields.forEach((function(r){e.community[r]||t.push("Community ".concat(r," is not set."))})),this.isValid||t.push(this.invalidMessage),t):t},afterRequestAction:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$helper.setCommunityInProgress(e.postInstance),"5"!==e.stateCode){t.next=4;break}return t.next=4,e.toCommunityDetail(e.community.id);case 4:if(!e.nextRoute){t.next=7;break}return t.next=7,e.$router.push({name:e.nextRoute});case 7:case"end":return t.stop()}}),t)})))()},skip:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.state.is_skipped){t.next=6;break}return t.next=3,e.post(e.$util.format(e.$urls.community.skipProgress,e.state.id));case 3:if(!e.success){t.next=6;break}return t.next=6,e.afterRequestAction();case 6:case"end":return t.stop()}}),t)})))()},next:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.checkRequired(),!(r.length>=1)){t.next=5;break}e.openSnack(r.join("\n"),{multiline:!0}),t.next=10;break;case 5:return t.next=7,e.post(e.$util.format(e.$urls.community.completeProgress,e.state.id));case 7:if(!e.success){t.next=10;break}return t.next=10,e.afterRequestAction();case 10:case"end":return t.stop()}}),t)})))()}}};t["a"]=o},"5f3b":function(e,t,r){"use strict";r("d3b7");var n={data:function(){return{posting:!1,postInstance:null,formErrors:{},statusCode:null,success:!1}},methods:{post:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.posting=!0,this.$axios.post(e,r).then((function(e){t.success=!0,t.postInstance=e})).catch((function(e){t.statusCode=e.response.status,t.formErrors=e.response.data})).finally((function(){t.posting=!1}))}}};t["a"]=n},6554:function(e,t,r){"use strict";var n=r("1da1"),a=(r("96cf"),{methods:{toPublicationDetail:function(e,t){var r=this;return Object(n["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,r.$router.push({name:"Publication",params:{id:e,view:t}});case 2:case"end":return n.stop()}}),n)})))()},toCommunityDetail:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"Community Detail",params:{id:e}});case 2:case"end":return r.stop()}}),r)})))()},toCommunityWiki:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"Community Detail Wiki",params:{id:e}});case 2:case"end":return r.stop()}}),r)})))()},toCommunityModmail:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"Community Detail Modmail",params:{id:e}});case 2:case"end":return r.stop()}}),r)})))()},toRegisterCommunity:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Community Mainframe"});case 2:case"end":return t.stop()}}),t)})))()},toRegisterCommunityTheme:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Community Display"});case 2:case"end":return t.stop()}}),t)})))()},toRegisterCommunityRules:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Community Rules"});case 2:case"end":return t.stop()}}),t)})))()},toRegisterCommunityTags:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Community Hashtags"});case 2:case"end":return t.stop()}}),t)})))()},toRegisterCommunityAuthorization:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Community Authorization"});case 2:case"end":return t.stop()}}),t)})))()},toRegisterCommunityAdmin:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Community Administration"});case 2:case"end":return t.stop()}}),t)})))()},toHome:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push("/");case 2:case"end":return t.stop()}}),t)})))()},toUserOverview:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"User Overview",params:{username:e}});case 2:case"end":return r.stop()}}),r)})))()},toUserPosts:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"User Posts",params:{username:e}});case 2:case"end":return r.stop()}}),r)})))()},toUserComments:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"User Comments",params:{username:e}});case 2:case"end":return r.stop()}}),r)})))()},toUserAwards:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"User Awards",params:{username:e}});case 2:case"end":return r.stop()}}),r)})))()},toProfileOverview:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Overview"});case 2:case"end":return t.stop()}}),t)})))()},toProfilePosts:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Posts"});case 2:case"end":return t.stop()}}),t)})))()},toProfileComments:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Comments"});case 2:case"end":return t.stop()}}),t)})))()},toProfileSaved:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Saved"});case 2:case"end":return t.stop()}}),t)})))()},toProfileHidden:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Hidden"});case 2:case"end":return t.stop()}}),t)})))()},toProfileUpVoted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Upvoted"});case 2:case"end":return t.stop()}}),t)})))()},toProfileDownVoted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Downvoted"});case 2:case"end":return t.stop()}}),t)})))()},toProfileShares:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Shares"});case 2:case"end":return t.stop()}}),t)})))()},toCreatePost:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Submit"});case 2:case"end":return t.stop()}}),t)})))()}}});t["a"]=a},8212:function(e,t,r){"use strict";var n=r("5530"),a=(r("a9e3"),r("3408"),r("a9ad")),i=r("24b2"),s=r("a236"),o=r("80d2"),u=r("58df");t["a"]=Object(u["a"])(a["a"],i["a"],s["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(n["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(n["a"])({height:Object(o["g"])(this.size),minWidth:Object(o["g"])(this.size),width:Object(o["g"])(this.size)},this.measurableStyles)}},render:function(e){var t={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return e("div",this.setBackgroundColor(this.color,t),this.$slots.default)}})},"8ce9":function(e,t,r){},"99d9":function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return u}));var n=r("b0af"),a=r("80d2"),i=Object(a["i"])("v-card__actions"),s=Object(a["i"])("v-card__subtitle"),o=Object(a["i"])("v-card__text"),u=Object(a["i"])("v-card__title");n["a"]},abd1:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{attrs:{flat:"",color:"transparent"}},[r("v-card-text",[r("v-card",{attrs:{dark:""}},[r("v-card-actions",[r("v-icon",{attrs:{"x-large":""}},[e._v("mdi-pound-box")]),r("v-card-title",[e._v(" Give identity for your community using tags ")])],1)],1)],1),r("v-card-text",[r("div",{staticClass:"d-flex align-center"},[r("tag-field",{attrs:{errors:e.formErrors,color:e.community.theme.color},model:{value:e.payload.tags,callback:function(t){e.$set(e.payload,"tags",t)},expression:"payload.tags"}}),r("v-fab-transition",[e.payload.tags.length>0?r("v-btn",{staticClass:"ml-2",attrs:{icon:"",large:"",color:e.community.theme.color+" lighten-2"},on:{click:e.addHahstags}},[r("v-icon",[e._v("mdi-send")])],1):e._e()],1)],1)]),r("v-card-actions",[r("v-avatar",{staticClass:"rounded",attrs:{color:"grey",tile:""}},[r("v-icon",{attrs:{dark:""}},[e._v("mdi-help")])],1),r("div",{staticClass:"px-4 px13"},[e._v(" Set your hashtags which precisely describes your community. Hashtags will represent your publication preference. It will be used for user recommendations too. ")])],1),r("div",{staticClass:"pt-4 pb-2"},[r("v-divider")],1),r("v-card-actions",[r("v-btn",{attrs:{color:"grey darken-3",dark:"",outlined:"",to:{name:"Community Rules"}}},[e._v(" rules ")]),r("v-spacer"),r("v-btn",{attrs:{color:"grey lighten-1",dark:"",depressed:""},on:{click:e.skip}},[e._v("skip")]),r("v-btn",{attrs:{color:e.community.theme.color,dark:""},on:{click:e.next}},[e._v(" Next ")])],1)],1)},a=[],i=r("5530"),s=(r("d3b7"),r("159b"),r("b0c0"),r("2f62")),o=r("5f3b"),u=r("4fc4"),c={name:"Hashtags",mixins:[o["a"],u["a"]],data:function(){return{payload:{tags:[]},stateCode:"3",nextRoute:"Community Authorization",requiredFields:[],invalidMessage:"You must add at least one tag to proceed into the next step."}},computed:Object(i["a"])(Object(i["a"])({},Object(s["b"])({community:"community/inProgress"})),{},{isValid:function(){return this.community.hashtags.length>=1}}),created:function(){this.populateSavedTags()},methods:{populateSavedTags:function(){var e=this;this.community.hashtags.length&&this.community.hashtags.forEach((function(t){e.payload.tags.push({id:t.tag,tag:t.name})}))},addHahstags:function(){var e=this;this.post(this.$util.format(this.$urls.community.addHashtag,this.community.id),{tags:this.payload.tags}).then((function(){e.success&&(e.$helper.setCommunityInProgress(e.postInstance),e.$store.dispatch("community/setInProgress",e.postInstance),e.openSuccessSnack("Hashtags assigned successfully."))}))}}},m=c,h=r("2877"),d=r("6544"),l=r.n(d),p=r("8212"),f=r("8336"),v=r("b0af"),g=r("99d9"),w=r("ce7e"),b=r("0789"),x=r("132d"),R=r("2fa4"),y=Object(h["a"])(m,n,a,!1,null,"d1c93f70",null);t["default"]=y.exports;l()(y,{VAvatar:p["a"],VBtn:f["a"],VCard:v["a"],VCardActions:g["a"],VCardText:g["c"],VCardTitle:g["d"],VDivider:w["a"],VFabTransition:b["c"],VIcon:x["a"],VSpacer:R["a"]})},c473:function(e,t,r){"use strict";var n=r("5530"),a=r("2f62"),i={methods:Object(n["a"])(Object(n["a"])({},Object(a["c"])("snack",["SET_SNACK","SET_COLOR","SET_TEXT","SET_LINE","SET_TIMEOUT"])),{},{openSnack:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.color,n=void 0===r?"error":r,a=t.timeout,i=void 0===a?3e3:a,s=t.multiline,o=void 0!==s&&s;this.SET_SNACK(!0),this.SET_TIMEOUT(i),this.SET_LINE(o),this.SET_TEXT(e),this.SET_COLOR(n)},openSuccessSnack:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.color,n=void 0===r?"success":r,a=t.timeout,i=void 0===a?3e3:a,s=t.multiline,o=void 0!==s&&s;this.SET_SNACK(!0),this.SET_TIMEOUT(i),this.SET_LINE(o),this.SET_TEXT(e),this.SET_COLOR(n)}})};t["a"]=i},ce7e:function(e,t,r){"use strict";var n=r("5530"),a=(r("8ce9"),r("7560"));t["a"]=a["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:Object(n["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(n["a"])({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-8729b212.3a857f80.js.map