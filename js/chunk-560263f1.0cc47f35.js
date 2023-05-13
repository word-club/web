(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-560263f1"],{"3f95":function(t,e,n){"use strict";n("d3b7");var i={data:function(){return{deleteErrors:{},deleted:!1,deleting:!1,deleteResponse:null}},methods:{delete:function(t){var e=this;return this.deleting=!0,this.$axios.delete(t).then((function(t){e.deleted=!0,e.deleteResponse=t})).catch((function(t){e.deleteErrors=t.response.data})).finally((function(){e.deleting=!1}))}}};e["a"]=i},"59d0":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{flat:"",color:"transparent"}},[n("v-card-title",[t._v(" Top "+t._s(t.administrationData?t.administrationData.top_count:"")+" Communities ")]),n("v-card-text",[t.topCommunities?n("v-list",{staticClass:"py-0",attrs:{outlined:""}},t._l(t.topCommunities,(function(e,i){return n("v-list-item",{key:e.id,class:{"border-bottom":t.topCommunities.length!==i+1},attrs:{link:""}},[n("v-list-item-avatar",[n("wc-avatar",{attrs:{size:"40",color:e.theme.color,src:e.avatar,text:e.name,"span-class":"white--text font-weight-500 px22"}})],1),n("v-list-item-content",{on:{click:function(n){return t.$router.push({name:"Community Detail",params:{id:e.id}})}}},[n("v-list-item-title",{staticClass:"py-1 px16 weight-500"},[t._v(t._s(e.name))]),n("v-list-item-subtitle",[n("v-chip",{attrs:{small:"",color:e.theme.color,outlined:""}},[n("v-icon",{attrs:{left:"",size:"20"}},[t._v("mdi-eye")]),n("b",[t._v(t._s(e.views))]),n("span",{staticClass:"pl-1"},[t._v("Views")])],1),n("v-chip",{staticClass:"mx-1",attrs:{small:"",color:e.theme.color,outlined:""}},[n("v-icon",{attrs:{left:"",size:"20"}},[t._v("mdi-arrow-up")]),n("b",[t._v(t._s(e.popularity))]),n("span",{staticClass:"pl-1"},[t._v("Popularity")])],1)],1)],1),n("v-list-item-action",[t.isSubscribed(e)?n("v-btn",{attrs:{rounded:"",depressed:"",dark:"",color:e.theme.color},on:{click:function(n){return t.unSubscribe(e)}}},[t._v(" unsubscribe ")]):n("v-btn",{attrs:{rounded:"",depressed:"",dark:"",color:e.theme.color},on:{click:function(n){return t.subscribe(e)}}},[t._v(" subscribe ")])],1)],1)})),1):t._e()],1),n("confirm-dialog",{on:{refreshMe:function(e){return t.refreshMe()}}})],1)},r=[],o=n("6b50"),s=n("ad9b"),a={name:"TopCommunities",mixins:[o["a"],s["a"]],computed:{topCommunities:function(){return this.topItems["communities"]}}},c=a,u=n("2877"),l=n("6544"),m=n.n(l),d=n("8336"),f=n("b0af"),h=n("99d9"),p=n("cc20"),b=n("132d"),v=n("8860"),y=n("da13"),w=n("1800"),C=n("8270"),g=n("5d23"),_=Object(u["a"])(c,i,r,!1,null,"1344a233",null);e["default"]=_.exports;m()(_,{VBtn:d["a"],VCard:f["a"],VCardText:h["c"],VCardTitle:h["d"],VChip:p["a"],VIcon:b["a"],VList:v["a"],VListItem:y["a"],VListItemAction:w["a"],VListItemAvatar:C["a"],VListItemContent:g["a"],VListItemSubtitle:g["b"],VListItemTitle:g["c"]})},"5f3b":function(t,e,n){"use strict";n("d3b7");var i={data:function(){return{posting:!1,postInstance:null,formErrors:{},statusCode:null,success:!1}},methods:{post:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.posting=!0,this.$axios.send("POST",t,n,i).then((function(t){e.success=!0,e.postInstance=t.data,e.formErrors={}})).catch((function(t){console.debug(t),e.success=!1,e.postInstance=null,e.statusCode=t.response.status,e.formErrors=t.response.data})).finally((function(){e.posting=!1}))}}};e["a"]=i},"6b50":function(t,e,n){"use strict";var i=n("1da1"),r=n("5530"),o=(n("96cf"),n("b0c0"),n("5f3b")),s=n("c473"),a=n("6397"),c=n("e943"),u=n("2f62"),l=n("3f95"),m=n("5802"),d={mixins:[o["a"],s["a"],a["a"],c["a"],l["a"],m["a"]],methods:Object(r["a"])(Object(r["a"])({},Object(u["c"])("community",["SET_TO_VIEW"])),{},{unSubscribe:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.openConfirmDialog("Are you sure you want to revoke your subscription for community <code><b>".concat(t.community.name,"</b></code>?"),"DELETE",e.$util.format(e.$urls.community.subscription.detail,t.id),["refreshMe","refreshCommunity"],"Cheers! Subscription revoked successfully!","Sorry! Subscription couldn't be revoked!");case 2:case"end":return n.stop()}}),n)})))()},subscribe:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.openConfirmDialog("Are you sure you want to subscribe this community?","POST",e.$util.format(e.$urls.community.subscription.add,t.id),["refreshMe","refreshCommunity"],"Cheers! Subscription added successfully!","Sorry! Subscription couldn't be added!");case 2:case"end":return n.stop()}}),n)})))()},disableNotification:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.openConfirmDialog("Are you sure you want to disable notifications for the community <code>".concat(t.community.name,"</code>?"),"POST",e.$util.format(e.$urls.community.subscription.notifications.disable,t.id),["refreshMe","refreshCommunity"],"Cheers! Notifications for the community ".concat(t.community.name," is disabled successfully!"),"Sorry! Notifications couldn't be disabled!");case 2:case"end":return n.stop()}}),n)})))()},enableNotification:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.openConfirmDialog("Are you sure you want to enable notifications for the community <code>".concat(t.community.name,"</code>?"),"DELETE",e.$util.format(e.$urls.community.subscription.notifications.removeDisable,t.id),["refreshMe","refreshCommunity"],"Cheers! Notifications for the community ".concat(t.community.name," is enabled successfully!"),"Sorry! Notifications couldn't be enabled!");case 2:case"end":return n.stop()}}),n)})))()},reportCommunity:function(){}})};e["a"]=d},e943:function(t,e,n){"use strict";n("d3b7");var i={name:"FetchMixin",data:function(){return{loading:!0,fetchErr:null,fetchRes:null,setToView:!0,clearToView:!0}},beforeRouteLeave:function(t,e,n){this.clearToView&&this.SET_TO_VIEW(null),n()},methods:{fetchDetail:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.pk,r=void 0===i?null:i;this.loading=!0;var o=this.$route.params.id||this.$route.params.username||this.$route.params.uniqueId,s=this.$urls[t]["view"]||this.$urls[t]["retrieve"]||this.$urls[t]["detail"];return this.$axios.get(this.$util.format(s,r||o)).then((function(t){e.setToView&&e.SET_TO_VIEW(t),e.fetchRes=t})).catch((function(t){e.fetchErr=t})).finally((function(){e.loading=!1}))}}};e["a"]=i}}]);
//# sourceMappingURL=chunk-560263f1.0cc47f35.js.map