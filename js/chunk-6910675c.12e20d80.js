(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6910675c","chunk-62fc4076","chunk-99611e36","chunk-2d0e6c6b","chunk-2d0e6c6b"],{"3db1":function(e,t,n){"use strict";var r={computed:{editorContent:function(){try{return JSON.parse(this.publication.content)}catch(e){return{blocks:[{type:"paragraph",data:{text:this.publication.content}}]}}}}};t["a"]=r},"45ae":function(e,t,n){},6554:function(e,t,n){"use strict";var r=n("1da1"),i=(n("b0c0"),n("96cf"),{methods:{toPublicationDetail:function(e,t){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n.$router.push({name:"Publication",params:{id:e,view:t}});case 2:case"end":return r.stop()}}),r)})))()},toCommunityDetail:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$router.push({name:"Community Detail",params:{uniqueId:e}});case 2:case"end":return n.stop()}}),n)})))()},toCommunityWiki:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$router.push({name:"Community Detail Wiki",params:{id:e}});case 2:case"end":return n.stop()}}),n)})))()},toCommunityModmail:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$router.push({name:"Community Detail Modmail",params:{id:e}});case 2:case"end":return n.stop()}}),n)})))()},toRegisterCommunity:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Register Community"});case 2:case"end":return t.stop()}}),t)})))()},toRegisterCommunityTheme:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Community Display"});case 2:case"end":return t.stop()}}),t)})))()},toHome:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("Home"!==e.$route.name){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$router.push("/");case 4:case"end":return t.stop()}}),t)})))()},toUserOverview:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$router.push({name:"User Overview",params:{username:e}});case 2:case"end":return n.stop()}}),n)})))()},toUserPosts:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$router.push({name:"User Posts",params:{username:e}});case 2:case"end":return n.stop()}}),n)})))()},toUserComments:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$router.push({name:"User Comments",params:{username:e}});case 2:case"end":return n.stop()}}),n)})))()},toProfileOverview:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Overview"});case 2:case"end":return t.stop()}}),t)})))()},toProfilePosts:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Posts"});case 2:case"end":return t.stop()}}),t)})))()},toProfileComments:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Comments"});case 2:case"end":return t.stop()}}),t)})))()},toProfileSaved:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Saved"});case 2:case"end":return t.stop()}}),t)})))()},toProfileHidden:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Hidden"});case 2:case"end":return t.stop()}}),t)})))()},toProfileUpVoted:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Upvoted"});case 2:case"end":return t.stop()}}),t)})))()},toProfileDownVoted:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Downvoted"});case 2:case"end":return t.stop()}}),t)})))()},toProfileShares:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Profile Shares"});case 2:case"end":return t.stop()}}),t)})))()},toCreatePost:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"Submit",params:{type:"editor"}});case 2:case"end":return t.stop()}}),t)})))()}}});t["a"]=i},"979f":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"feed-item",attrs:{outlined:""}},[n("item-header",{attrs:{item:e.publication}}),n("v-card-title",{staticClass:"py-0 pb-2 px-2 cursor publication-title grey lighten-4",on:{click:function(t){return e.toPublicationDetail(e.publication.id)}}},[n("h4",[e._v(e._s(e.publication.title))])]),"media"===e.publication.type?n("item-images",{attrs:{item:e.publication}}):e._e(),"link"===e.publication.type?n("item-link",{attrs:{link:e.publication.links}}):e._e(),"editor"===e.publication.type?n("item-content",{attrs:{content:e.editorContent}}):e._e(),n("item-actions",{attrs:{item:e.publication},on:{init:function(t){return e.$emit("init")}}})],1)},i=[],u=(n("d3b7"),n("3ca3"),n("ddb0"),n("6554")),a=n("3db1"),o={name:"PublicationInstance",props:{publication:{type:Object,required:!0}},mixins:[u["a"],a["a"]],components:{ItemHeader:function(){return Promise.all([n.e("chunk-e1736d86"),n.e("chunk-712cea33")]).then(n.bind(null,"0389"))},ItemImages:function(){return Promise.all([n.e("chunk-a6e11f12"),n.e("chunk-b28166d2")]).then(n.bind(null,"9a87"))},ItemLink:function(){return Promise.all([n.e("chunk-e1736d86"),n.e("chunk-566dd8d7")]).then(n.bind(null,"b477"))},ItemContent:function(){return Promise.all([n.e("chunk-e1736d86"),n.e("chunk-88dcff1c")]).then(n.bind(null,"9c8f"))},ItemActions:function(){return Promise.all([n.e("chunk-e1736d86"),n.e("chunk-105cf660")]).then(n.bind(null,"3e9a"))}}},c=o,s=(n("ed22"),n("2877")),m=n("6544"),p=n.n(m),h=n("b0af"),f=n("99d9"),l=Object(s["a"])(c,r,i,!1,null,"2c4574af",null);t["default"]=l.exports;p()(l,{VCard:h["a"],VCardTitle:f["d"]})},"99d9":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c}));var r=n("b0af"),i=n("80d2"),u=Object(i["j"])("v-card__actions"),a=Object(i["j"])("v-card__subtitle"),o=Object(i["j"])("v-card__text"),c=Object(i["j"])("v-card__title");r["a"]},ed22:function(e,t,n){"use strict";n("45ae")}}]);
//# sourceMappingURL=chunk-6910675c.12e20d80.js.map