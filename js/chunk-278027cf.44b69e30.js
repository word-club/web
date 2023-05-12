(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-278027cf","chunk-2d0e6c6b","chunk-2d0e6c6b"],{"3ffc":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"mx-auto transparent",attrs:{flat:"",loading:e.loading}},[r("div",[e.modRoutes?e._e():r("community-cover"),e.modRoutes?r("community-breadcrumb"):r("detail-title",{on:{refresh:e.refreshCommunity}}),r("v-card-text",{staticClass:"pt-4"},[e.community?r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"800",flat:"",color:"transparent"}},[r("v-slide-x-transition",[r("transition",{attrs:{name:"view"}},[r("router-view")],1)],1)],1):e._e()],1)],1)])},i=[],u=r("5530"),a=(r("d3b7"),r("3ca3"),r("ddb0"),r("caad"),r("2532"),r("b0c0"),r("159b"),r("2f62")),o=r("6554"),c=r("e943"),s={name:"Community",components:{CommunityCover:function(){return r.e("chunk-825744a0").then(r.bind(null,"29ad"))},DetailTitle:function(){return r.e("chunk-42fee352").then(r.bind(null,"8d01"))},CommunityBreadcrumb:function(){return r.e("chunk-7d7d39f5").then(r.bind(null,"6d8a"))}},mixins:[o["a"],c["a"]],data:function(){return{model:"community"}},computed:Object(u["a"])(Object(u["a"])({},Object(a["b"])({community:"community/inView"})),{},{coverHeight:function(){return this.$route.name.includes("Community MOD Settings")?100:this.community.cover?300:100},modRoutes:function(){return this.$route.matched.some((function(e){return e.meta["community_mod"]}))}}),created:function(){this.$store.dispatch("user/setInView",null),this.$store.dispatch("publication/setInView",null),this.refreshCommunity()},methods:Object(u["a"])(Object(u["a"])({},Object(a["c"])("community",["SET_TO_VIEW"])),{},{refreshCommunity:function(){var e=this;this.setToView=!0,this.fetchDetail("community").then((function(){e.setTabListeners(e.community.theme.color)}))},setTabListeners:function(e){function t(t){t.target.classList.add("".concat(e,"--text"))}function r(t){t.target.classList.remove("".concat(e,"--text"))}var n=document.querySelectorAll(".community-top-button");n.forEach((function(e){e.addEventListener("mouseover",t),e.addEventListener("mouseout",r)}))}})},m=s,h=r("2877"),f=r("6544"),d=r.n(f),l=r("b0af"),p=r("99d9"),v=r("0789"),w=Object(h["a"])(m,n,i,!1,null,null,null);t["default"]=w.exports;d()(w,{VCard:l["a"],VCardText:p["c"],VSlideXTransition:v["g"]})},6554:function(e,t,r){"use strict";var n=r("1da1"),i=(r("b0c0"),r("96cf"),{methods:{toPublicationDetail:function(e,t){var r=this;return Object(n["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,r.$router.push({name:"Publication",params:{id:e,view:t}});case 2:case"end":return n.stop()}}),n)})))()},toCommunityDetail:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"Community Detail",params:{uniqueId:e}});case 2:case"end":return r.stop()}}),r)})))()},toCommunityWiki:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"Community Detail Wiki",params:{id:e}});case 2:case"end":return r.stop()}}),r)})))()},toCommunityModmail:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"Community Detail Modmail",params:{id:e}});case 2:case"end":return r.stop()}}),r)})))()},toRegisterCommunity:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Register Community"});case 2:case"end":return t.stop()}}),t)})))()},toRegisterCommunityTheme:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Community Display"});case 2:case"end":return t.stop()}}),t)})))()},toHome:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("Home"!==e.$route.name){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$router.push("/");case 4:case"end":return t.stop()}}),t)})))()},toUserOverview:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"User Overview",params:{username:e}});case 2:case"end":return r.stop()}}),r)})))()},toUserPosts:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"User Posts",params:{username:e}});case 2:case"end":return r.stop()}}),r)})))()},toUserComments:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$router.push({name:"User Comments",params:{username:e}});case 2:case"end":return r.stop()}}),r)})))()},toProfileOverview:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Overview"});case 2:case"end":return t.stop()}}),t)})))()},toProfilePosts:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Posts"});case 2:case"end":return t.stop()}}),t)})))()},toProfileComments:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Comments"});case 2:case"end":return t.stop()}}),t)})))()},toProfileSaved:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Saved"});case 2:case"end":return t.stop()}}),t)})))()},toProfileHidden:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Hidden"});case 2:case"end":return t.stop()}}),t)})))()},toProfileUpVoted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Upvoted"});case 2:case"end":return t.stop()}}),t)})))()},toProfileDownVoted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Downvoted"});case 2:case"end":return t.stop()}}),t)})))()},toProfileShares:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Shares"});case 2:case"end":return t.stop()}}),t)})))()},toCreatePost:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Submit",params:{type:"editor"}});case 2:case"end":return t.stop()}}),t)})))()}}});t["a"]=i},"99d9":function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return c}));var n=r("b0af"),i=r("80d2"),u=Object(i["j"])("v-card__actions"),a=Object(i["j"])("v-card__subtitle"),o=Object(i["j"])("v-card__text"),c=Object(i["j"])("v-card__title");n["a"]},e943:function(e,t,r){"use strict";r("d3b7");var n={name:"FetchMixin",data:function(){return{loading:!0,fetchErr:null,fetchRes:null,setToView:!0,clearToView:!0}},beforeRouteLeave:function(e,t,r){this.clearToView&&this.SET_TO_VIEW(null),r()},methods:{fetchDetail:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.pk,i=void 0===n?null:n;this.loading=!0;var u=this.$route.params.id||this.$route.params.username||this.$route.params.uniqueId,a=this.$urls[e]["view"]||this.$urls[e]["retrieve"]||this.$urls[e]["detail"];return this.$axios.get(this.$util.format(a,i||u)).then((function(e){t.setToView&&t.SET_TO_VIEW(e),t.fetchRes=e})).catch((function(e){t.fetchErr=e})).finally((function(){t.loading=!1}))}}};t["a"]=n}}]);
//# sourceMappingURL=chunk-278027cf.44b69e30.js.map