(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a17d6be2","chunk-2b06b954"],{"013e":function(t,e,i){"use strict";var n={computed:{xs:function(){return this.$vuetify.breakpoint.xs},md:function(){return this.$vuetify.breakpoint.md},smAndDown:function(){return this.$vuetify.breakpoint.smAndDown},smAndUp:function(){return this.$vuetify.breakpoint.smAndUp},mdAndUp:function(){return this.$vuetify.breakpoint.mdAndUp},lgAndUp:function(){return this.$vuetify.breakpoint.lgAndUp},viewportWidth:function(){return this.$vuetify.breakpoint.width}},methods:{}};e["a"]=n},"3d81":function(t,e,i){},"3e9a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"rounded-t-0",attrs:{color:"grey lighten-4",flat:""}},[i("v-divider"),i("v-card-actions",{staticClass:"flex-wrap",class:{"justify-space-evenly":t.smAndDown}},[i("v-btn",{staticClass:"item-action-btn to-comments",attrs:{small:t.smAndDown,outlined:"",color:"grey darken-1"},on:{click:t.routeToPublicationDetailComments}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-comment-outline")]),t._v(" "+t._s(t.item["discussions"])+" Comments ")],1),i("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[t.smAndDown?t._e():i("v-btn",t._g(t._b({staticClass:"item-action-btn share-action",attrs:{outlined:"",color:"grey darken-1"}},"v-btn",o,!1),n),[i("v-icon",{attrs:{left:""}},[t._v("mdi-share-outline")]),t._v("Share ")],1)]}}])},[i("v-list",{attrs:{dense:""}},[i("v-list-item",{staticClass:"menu-item copy-action",on:{click:t.copyLink},model:{value:t.clipboardContent,callback:function(e){t.clipboardContent=e},expression:"clipboardContent"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",{attrs:{color:"grey"}},[t._v("mdi-link")])],1),t._v(" Copy Link ")],1),t.isMyItem?t._e():i("v-divider"),t.isMyItem?t._e():i("v-list-item",{staticClass:"menu-item cross-post-action",on:{click:function(e){return t.createShare()}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",{attrs:{color:"grey"}},[t._v("mdi-source-branch")])],1),t._v(" Cross Post ")],1)],1)],1),i("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[t.isMyItem?t._e():i("v-btn",t._g(t._b({staticClass:"more-actions",attrs:{icon:"",outlined:"",color:"grey darken-1"}},"v-btn",o,!1),n),[i("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[i("v-list",{attrs:{dense:""}},[i("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[t.smAndDown?i("v-list-item",t._g(t._b({staticClass:"menu-item share-action"},"v-list-item",o,!1),n),[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-share-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Share")])],1)],1):t._e()]}}])},[i("v-list",{attrs:{dense:""}},[i("v-list-item",{staticClass:"menu-item copy-action",on:{click:function(e){return t.copyLink()}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",{attrs:{color:"grey"}},[t._v("mdi-link")])],1),t._v(" Copy link ")],1),i("v-divider"),i("v-list-item",{staticClass:"menu-item cross-post-action",on:{click:function(e){return t.createShare()}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",{attrs:{color:"grey"}},[t._v("mdi-post")])],1),t._v(" CrossPost ")],1)],1)],1),t.smAndDown?i("v-divider"):t._e(),i("v-list-item",{staticClass:"menu-item bookmark-action",class:{"menu-item-active":t.myBookmark},attrs:{"active-class":"menu-item-active"},on:{click:function(e){return t.bookmark()}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-bookmark-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Bookmark")])],1)],1),i("v-divider"),i("v-list-item",{staticClass:"menu-item hide-action",class:{"menu-item-active":t.myHide},attrs:{"active-class":"menu-item-active"},on:{click:function(e){return t.hide()}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-eye-off-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Hide")])],1)],1),i("v-divider"),i("v-list-item",{staticClass:"menu-item report-action",on:{click:function(e){return t.addReport()}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-flag-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Report")])],1)],1)],1)],1),t.smAndDown?t._e():i("v-spacer"),0===t.reactions?i("v-chip",{staticClass:"mx-1 add-first-reaction",attrs:{color:"primary",small:""}},[t._v(" Add First Reaction ")]):t._e(),i("v-btn",{staticClass:"mx-0 upvote-action",attrs:{icon:"",color:"primary",value:t.myUpVote},on:{click:function(e){return t.sendUpVote()}}},[i("v-icon",[t._v(" mdi-arrow-up-bold"+t._s(t.myUpVote?"":"-outline")+" ")])],1),t.reactions>0?i("div",{staticClass:"grey--text text--darken-3 weight-500 px-1 reactions-count"},[t._v(" "+t._s(t.reactions)+" ")]):t._e(),i("v-btn",{staticClass:"mx-0 downvote-action",attrs:{icon:"",color:"grey darken-2",value:t.myDownVote},on:{click:function(e){return t.sendDownVote()}}},[i("v-icon",[t._v(" mdi-arrow-down-bold"+t._s(t.myDownVote?"":"-outline")+" ")])],1)],1)],1)},o=[],r=i("5530"),s=i("2f62"),c=i("6554"),a=i("013e"),u=i("1da1"),d=(i("96cf"),i("7db0"),i("d3b7"),i("c473")),l=i("9ede"),m=i("5987"),v="publication",h={mixins:[d["a"],l["a"],m["a"]],data:function(){return{clipboardContent:null}},computed:{reactions:function(){return this.item["popularity"]+this.item["dislikes"]},isMyItem:function(){return!!this.currentUser&&(!this.item.created_by||this.item.created_by.id===this.currentUser.id)},myUpVote:function(){var t=this;return!!this.currentUser&&this.currentUser["my_votes"].find((function(e){var i;return e.up&&(null===(i=e[v])||void 0===i?void 0:i.id)===t.item.id}))},myDownVote:function(){var t=this;return!!this.currentUser&&this.currentUser["my_votes"].find((function(e){var i;return!e.up&&(null===(i=e[v])||void 0===i?void 0:i.id)===t.item.id}))},myHide:function(){var t=this;return!!this.currentUser&&this.currentUser["my_hides"].find((function(e){var i;return(null===(i=e[v])||void 0===i?void 0:i.id)===t.item.id}))},myBookmark:function(){var t=this;return!!this.currentUser&&this.currentUser["my_bookmarks"].find((function(e){var i;return(null===(i=e[v])||void 0===i?void 0:i.id)===t.item.id}))}},methods:{getLink:function(){return"something"},copyLink:function(){var t=this;navigator.clipboard.writeText(this.getLink()).then((function(){t.clipboardContent=!0,t.openSnack("Publication link copied to the clipboard",{color:"success"})}))},bookmark:function(){this.sendActionRequest({action:"bookmark",revoke:!!this.myBookmark,id:this.myBookmark?this.myBookmark.id:this.item.id})},hide:function(){this.sendActionRequest({action:"hide",revoke:!!this.myHide,id:this.myHide?this.myHide.id:this.item.id})},addReport:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.openReportDialog(v,t.item);case 2:case"end":return e.stop()}}),e)})))()},sendUpVote:function(){var t=this.myUpVote;this.sendActionRequest({action:t?"vote":"up-vote",revoke:!!t,id:t?t.id:this.item.id})},sendDownVote:function(){var t=this.myDownVote;this.sendActionRequest({action:t?"vote":"down-vote",revoke:!!t,id:t?t.id:this.item.id})},createShare:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.item,e.next=3,t.$store.dispatch("dialog/clearDialog");case 3:return e.next=5,t.$store.dispatch("dialog/setShareInView",{model:"publication",object:i});case 5:case"end":return e.stop()}}),e)})))()}}},p=h,f={name:"ItemActions",mixins:[c["a"],a["a"],p],props:{item:{type:Object,default:function(){}}},computed:Object(r["a"])({},Object(s["b"])({currentUser:"user/current"})),methods:{routeToPublicationDetailComments:function(){this.toPublicationDetail(this.item.id,"comments")}}},b=f,k=(i("abfd"),i("2877")),_=i("6544"),y=i.n(_),g=i("8336"),w=i("b0af"),C=i("99d9"),S=i("cc20"),x=i("ce7e"),R=i("132d"),T=i("8860"),E=i("da13"),O=i("5d23"),U=i("34c3"),V=i("e449"),j=i("2fa4"),A=Object(k["a"])(b,n,o,!1,null,"7a6cba4e",null);e["default"]=A.exports;y()(A,{VBtn:g["a"],VCard:w["a"],VCardActions:C["a"],VChip:S["a"],VDivider:x["a"],VIcon:R["a"],VList:T["a"],VListItem:E["a"],VListItemContent:O["b"],VListItemIcon:U["a"],VListItemTitle:O["d"],VMenu:V["a"],VSpacer:j["a"]})},5987:function(t,e,i){"use strict";var n=i("1da1"),o=i("5530"),r=(i("99af"),i("96cf"),i("2f62")),s=i("5f3b"),c=i("c473"),a={mixins:[s["a"],c["a"]],data:function(){return{reportPayload:{title:null,content:null},resolvePayload:{resolve_text:null}}},computed:Object(o["a"])({dialog:{get:function(){return this.$store.getters["dialog/report"]},set:function(t){this.SET_REPORT(!!t)}}},Object(r["b"])({toReport:"dialog/object",model:"dialog/model",mod:"dialog/mod"})),methods:Object(o["a"])(Object(o["a"])({},Object(r["c"])("dialog",["SET_REPORT"])),{},{openReportDialog:function(t,e){var i=this;return Object(n["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,i.$store.dispatch("dialog/setReportInView",{model:t,object:e});case 2:case"end":return n.stop()}}),n)})))()},closeReportDialog:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("dialog/clearDialog");case 2:case"end":return e.stop()}}),e)})))()},submitReport:function(){var t=this,e=this.model,i=this.toReport,r="".concat(e,"/").concat(i.id,"/report/");this.post(r,Object(o["a"])({},this.reportPayload)).then(Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.success){e.next=7;break}return t.openSuccessSnack("Report added successfully."),t.reason=null,e.next=5,t.closeReportDialog();case 5:e.next=8;break;case 7:t.openSnack("Sorry, your report could not be posted.");case 8:case"end":return e.stop()}}),e)}))))}})};e["a"]=a},"5f3b":function(t,e,i){"use strict";i("d3b7");var n={data:function(){return{posting:!1,postInstance:null,formErrors:{},statusCode:null,success:!1}},methods:{post:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.posting=!0,this.$axios.send("POST",t,i,n).then((function(t){e.success=!0,e.postInstance=t.data,e.formErrors={}})).catch((function(t){console.debug(t),e.success=!1,e.postInstance=null,e.statusCode=t.response.status,e.formErrors=t.response.data})).finally((function(){e.posting=!1}))}}};e["a"]=n},6397:function(t,e,i){"use strict";var n=i("1da1"),o=i("5530"),r=(i("96cf"),i("2f62")),s={data:function(){return{refreshing:!1}},computed:Object(o["a"])({},Object(r["b"])({me:"user/current"})),methods:{refreshMe:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null===(i=t.me)||void 0===i||!i.id){e.next=12;break}return t.refreshing=!0,e.prev=2,e.next=5,t.$axios.get(t.$urls.user.me);case 5:return n=e.sent,t.$helper.setCurrentUser(n),e.next=9,t.$store.dispatch("user/setCurrentUser",n);case 9:return e.prev=9,t.refreshing=!1,e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[2,,9,12]])})))()}}};e["a"]=s},"9ede":function(t,e,i){"use strict";var n=i("1da1"),o=(i("96cf"),i("99af"),i("6397")),r={mixins:[o["a"]],methods:{sendActionRequest:function(t){var e=this,i=t.id,o=t.payload,r=t.action,s=t.revoke,c=void 0!==s&&s,a=t.model,u=void 0===a?"publication":a,d=c?"".concat(r,"/").concat(i,"/"):"".concat(u,"/").concat(i,"/").concat(r,"/"),l=c?"DELETE":"POST";this.$axios.send(l,d,o).then(Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$emit("init"),t.next=3,e.refreshMe();case 3:case"end":return t.stop()}}),t)})))).catch((function(){e.openSnack("Something went wrong.")}))}}};e["a"]=r},abfd:function(t,e,i){"use strict";i("3d81")},c473:function(t,e,i){"use strict";var n=i("5530"),o=i("2f62"),r={methods:Object(n["a"])(Object(n["a"])({},Object(o["c"])("snack",["SET_SNACK","SET_COLOR","SET_TEXT","SET_LINE","SET_TIMEOUT"])),{},{openSnack:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.color,n=void 0===i?"error":i,o=e.timeout,r=void 0===o?3e3:o,s=e.multiline,c=void 0!==s&&s;this.SET_SNACK(!0),this.SET_TIMEOUT(r),this.SET_LINE(c),this.SET_TEXT(t),this.SET_COLOR(n)},openSuccessSnack:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.color,n=void 0===i?"success":i,o=e.timeout,r=void 0===o?3e3:o,s=e.multiline,c=void 0!==s&&s;this.SET_SNACK(!0),this.SET_TIMEOUT(r),this.SET_LINE(c),this.SET_TEXT(t),this.SET_COLOR(n)}})};e["a"]=r}}]);
//# sourceMappingURL=chunk-a17d6be2.7250f2c4.js.map