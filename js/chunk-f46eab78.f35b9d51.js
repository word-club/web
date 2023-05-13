(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f46eab78"],{1044:function(t,e,n){"use strict";var r={computed:{},methods:{getTypeString:function(t){return t===this.$constants.PUBLICATION_TYPE.EDITOR?null:t===this.$constants.PUBLICATION_TYPE.LINK?"LINK":t===this.$constants.PUBLICATION_TYPE.MEDIA?"MEDIA":t===this.$constants.PUBLICATION_TYPE.POLL?"POLL":null}}};e["a"]=r},3312:function(t,e,n){"use strict";n("89b7")},"4c81":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{flat:"",color:"transparent"}},[n("v-scale-transition",[t.isLoading?n("v-card",[n("v-card-text",[n("v-card-title",[t._v(" We're fetching publications. Just a moment... ")]),n("v-card-subtitle",[n("v-progress-linear",{attrs:{indeterminate:"",height:"6",rounded:""}})],1)],1)],1):n("div",[t.publications.results.length?n("v-card",{staticClass:"publication-list",attrs:{flat:"",color:"primary",loading:t.fetchingPubs,"loader-height":"6"}},t._l(t.publications.results,(function(e){return n("publication-instance",{key:e.id,staticClass:"mb-4 publication-item",attrs:{id:"publication-"+e.id,publication:e},on:{init:t.getPublications}})})),1):n("v-card",{staticClass:"pt-16",attrs:{outlined:"","min-height":"70vh"}},[n("v-card-text",{staticClass:"px16 weight-500 text-center pt-16"},[t._v(" Hmm... Sorry we're out of posts. Please visit us later :) ")])],1)],1)],1)],1)},i=[],a=n("1da1"),s=n("5530"),c=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2f62")),u=n("6554"),o=n("1044"),d=n("7ba7"),l=n("6397"),b={name:"FeedList",components:{PublicationInstance:function(){return n.e("chunk-81964478").then(n.bind(null,"979f"))}},mixins:[u["a"],o["a"],d["a"],l["a"]],props:{payload:{required:!1,default:function(){}}},data:function(){return{isLoading:!1}},computed:Object(s["a"])({},Object(c["b"])({publications:"publication/list",communityInView:"community/inView"})),created:function(){var t,e=this;this.isLoading=!(null!==(t=this.publications)&&void 0!==t&&t.count),setTimeout((function(){e.getPublications({payload:e.payload}).then((function(){e.isLoading=!1}))}),2e3)},watch:{"$route.params.sortBy":{handler:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.getPublications(t);case 2:case"end":return n.stop()}}),n)})))()}}},methods:{getPublications:function(){var t=arguments,e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,i,a,c,u,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:{},i=r.sortString,a=void 0===i?"best":i,c=r.payload,u=void 0===c?{}:c,"Community Detail"===e.$route.name&&(u["community"]=e.communityInView.id),o=e.$route.params.sortBy,o&&(a=o),a=e.$helper.parseSortString(a),n.next=7,e.$store.dispatch("publication/setFilterset",a);case 7:return n.next=9,e.refreshMe();case 9:return n.next=11,e.fetchPublications(Object(s["a"])({sort_by:a},u));case 11:case"end":return n.stop()}}),n)})))()}}},f=b,h=(n("3312"),n("2877")),p=n("6544"),m=n.n(p),v=n("b0af"),g=n("99d9"),w=n("8e36"),P=n("0789"),O=Object(h["a"])(f,r,i,!1,null,"2e2ead51",null);e["default"]=O.exports;m()(O,{VCard:v["a"],VCardSubtitle:g["b"],VCardText:g["c"],VCardTitle:g["d"],VProgressLinear:w["a"],VScaleTransition:P["e"]})},6397:function(t,e,n){"use strict";var r=n("1da1"),i=n("5530"),a=(n("96cf"),n("2f62")),s={data:function(){return{refreshing:!1}},computed:Object(i["a"])({},Object(a["b"])({me:"user/current"})),methods:{refreshMe:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null===(n=t.me)||void 0===n||!n.id){e.next=12;break}return t.refreshing=!0,e.prev=2,e.next=5,t.$axios.get(t.$urls.user.me);case 5:return r=e.sent,t.$helper.setCurrentUser(r),e.next=9,t.$store.dispatch("user/setCurrentUser",r);case 9:return e.prev=9,t.refreshing=!1,e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[2,,9,12]])})))()}}};e["a"]=s},"7ba7":function(t,e,n){"use strict";var r=n("5530"),i=n("1da1"),a=(n("96cf"),{data:function(){return{fetchingPubs:!1}},methods:{fetchPublications:function(){var t=arguments,e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=t.length>0&&void 0!==t[0]?t[0]:{},e.fetchingPubs=!0,i=Object(r["a"])({is_published:!0,depth:3,asc:0},i),n.next=5,e.$store.dispatch("publication/filter",i);case 5:e.fetchingPubs=!1;case 6:case"end":return n.stop()}}),n)})))()}}});e["a"]=a},"89b7":function(t,e,n){},"99d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return u}));var r=n("b0af"),i=n("80d2"),a=Object(i["j"])("v-card__actions"),s=Object(i["j"])("v-card__subtitle"),c=Object(i["j"])("v-card__text"),u=Object(i["j"])("v-card__title");r["a"]}}]);
//# sourceMappingURL=chunk-f46eab78.f35b9d51.js.map