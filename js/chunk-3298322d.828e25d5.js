(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3298322d","chunk-2d0e6c6b","chunk-2d0e6c6b"],{1044:function(e,t,r){"use strict";var n={computed:{},methods:{getTypeString:function(e){return e===this.$constants.PUBLICATION_TYPE.EDITOR?null:e===this.$constants.PUBLICATION_TYPE.LINK?"LINK":e===this.$constants.PUBLICATION_TYPE.MEDIA?"MEDIA":e===this.$constants.PUBLICATION_TYPE.POLL?"POLL":null}}};t["a"]=n},3312:function(e,t,r){"use strict";r("89b7")},"4c81":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{attrs:{flat:"",color:"transparent"}},[r("v-scale-transition",[e.isLoading?r("v-card",[r("v-card-text",[r("v-card-title",[e._v(" We're fetching publications. Just a moment... ")]),r("v-card-subtitle",[r("v-progress-linear",{attrs:{indeterminate:"",height:"6",rounded:""}})],1)],1)],1):r("div",[e.publications.results.length?r("v-card",{staticClass:"publication-list",attrs:{flat:"",color:"primary",loading:e.fetchingPubs,"loader-height":"6"}},e._l(e.publications.results,(function(t){return r("publication-instance",{key:t.id,staticClass:"mb-4 publication-item",attrs:{id:"publication-"+t.id,publication:t},on:{init:e.getPublications}})})),1):r("v-card",{staticClass:"pt-16",attrs:{outlined:"","min-height":"70vh"}},[r("v-card-text",{staticClass:"px16 weight-500 text-center pt-16"},[e._v(" Hmm... Sorry we're out of posts. Please visit us later :) ")])],1)],1)],1)],1)},a=[],i=r("1da1"),u=r("5530"),o=(r("96cf"),r("d3b7"),r("3ca3"),r("ddb0"),r("b0c0"),r("2f62")),s=r("6554"),c=r("1044"),m=r("7ba7"),p=r("6397"),h={name:"FeedList",components:{PublicationInstance:function(){return r.e("chunk-99611e36").then(r.bind(null,"979f"))}},mixins:[s["a"],c["a"],m["a"],p["a"]],props:{payload:{required:!1,default:function(){}}},data:function(){return{isLoading:!1}},computed:Object(u["a"])({},Object(o["b"])({publications:"publication/list",communityInView:"community/inView"})),created:function(){var e,t=this;this.isLoading=!(null!==(e=this.publications)&&void 0!==e&&e.count),setTimeout((function(){t.getPublications({payload:t.payload}).then((function(){t.isLoading=!1}))}),2e3)},watch:{"$route.params.sortBy":{handler:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.getPublications(e);case 2:case"end":return r.stop()}}),r)})))()}}},methods:{getPublications:function(){var e=arguments,t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a,i,o,s,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:{},a=n.sortString,i=void 0===a?"best":a,o=n.payload,s=void 0===o?{}:o,"Community Detail"===t.$route.name&&(s["community"]=t.communityInView.id),c=t.$route.params.sortBy,c&&(i=c),i=t.$helper.parseSortString(i),r.next=7,t.$store.dispatch("publication/setFilterset",i);case 7:return r.next=9,t.refreshMe();case 9:return r.next=11,t.fetchPublications(Object(u["a"])({sort_by:i},s));case 11:case"end":return r.stop()}}),r)})))()}}},f=h,l=(r("3312"),r("2877")),d=r("6544"),v=r.n(d),b=r("b0af"),w=r("99d9"),g=r("8e36"),x=r("0789"),R=Object(l["a"])(f,n,a,!1,null,"2e2ead51",null);t["default"]=R.exports;v()(R,{VCard:b["a"],VCardSubtitle:w["b"],VCardText:w["c"],VCardTitle:w["d"],VProgressLinear:g["a"],VScaleTransition:x["e"]})},6397:function(e,t,r){"use strict";var n=r("1da1"),a=r("5530"),i=(r("96cf"),r("2f62")),u={data:function(){return{refreshing:!1}},computed:Object(a["a"])({},Object(i["b"])({me:"user/current"})),methods:{refreshMe:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null===(r=e.me)||void 0===r||!r.id){t.next=12;break}return e.refreshing=!0,t.prev=2,t.next=5,e.$axios.get(e.$urls.user.me);case 5:return n=t.sent,e.$helper.setCurrentUser(n),t.next=9,e.$store.dispatch("user/setCurrentUser",n);case 9:return t.prev=9,e.refreshing=!1,t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[2,,9,12]])})))()}}};t["a"]=u},6554:function(e,t,r){"use strict";var n=r("1da1"),a=(r("b0c0"),r("96cf"),{methods:{toPublicationDetail:function(e,t){var r=this;return Object(n["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,r.$router.push({name:"Publication",params:{id:e,view:t}});case 2:case"end":return n.stop()}}),n)})))()},toCommunityDetail:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"Community Detail",params:{uniqueId:e}});case 2:case"end":return r.stop()}}),r)})))()},toCommunityWiki:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"Community Detail Wiki",params:{id:e}});case 2:case"end":return r.stop()}}),r)})))()},toCommunityModmail:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"Community Detail Modmail",params:{id:e}});case 2:case"end":return r.stop()}}),r)})))()},toRegisterCommunity:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Register Community"});case 2:case"end":return t.stop()}}),t)})))()},toRegisterCommunityTheme:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Community Display"});case 2:case"end":return t.stop()}}),t)})))()},toHome:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("Home"!==e.$route.name){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$router.push("/");case 4:case"end":return t.stop()}}),t)})))()},toUserOverview:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"User Overview",params:{username:e}});case 2:case"end":return r.stop()}}),r)})))()},toUserPosts:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"User Posts",params:{username:e}});case 2:case"end":return r.stop()}}),r)})))()},toUserComments:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"User Comments",params:{username:e}});case 2:case"end":return r.stop()}}),r)})))()},toProfileOverview:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Overview"});case 2:case"end":return t.stop()}}),t)})))()},toProfilePosts:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Posts"});case 2:case"end":return t.stop()}}),t)})))()},toProfileComments:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Comments"});case 2:case"end":return t.stop()}}),t)})))()},toProfileSaved:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Saved"});case 2:case"end":return t.stop()}}),t)})))()},toProfileHidden:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Hidden"});case 2:case"end":return t.stop()}}),t)})))()},toProfileUpVoted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Upvoted"});case 2:case"end":return t.stop()}}),t)})))()},toProfileDownVoted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Downvoted"});case 2:case"end":return t.stop()}}),t)})))()},toProfileShares:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Shares"});case 2:case"end":return t.stop()}}),t)})))()},toCreatePost:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Submit",params:{type:"editor"}});case 2:case"end":return t.stop()}}),t)})))()}}});t["a"]=a},"7ba7":function(e,t,r){"use strict";var n=r("5530"),a=r("1da1"),i=(r("96cf"),{data:function(){return{fetchingPubs:!1}},methods:{fetchPublications:function(){var e=arguments,t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.length>0&&void 0!==e[0]?e[0]:{},t.fetchingPubs=!0,a=Object(n["a"])({is_published:!0,depth:3,asc:0},a),r.next=5,t.$store.dispatch("publication/filter",a);case 5:t.fetchingPubs=!1;case 6:case"end":return r.stop()}}),r)})))()}}});t["a"]=i},"89b7":function(e,t,r){},"99d9":function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return s}));var n=r("b0af"),a=r("80d2"),i=Object(a["j"])("v-card__actions"),u=Object(a["j"])("v-card__subtitle"),o=Object(a["j"])("v-card__text"),s=Object(a["j"])("v-card__title");n["a"]}}]);
//# sourceMappingURL=chunk-3298322d.828e25d5.js.map