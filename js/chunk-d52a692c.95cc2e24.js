(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d52a692c","chunk-2d0e6c6b","chunk-2d0e6c6b"],{"5abd":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("hot-bar"),r("div",{staticClass:"py-2"}),t.publications.length?t._e():r("v-card",{attrs:{flat:"","min-height":"79vh"}},[r("v-card-title",{staticClass:"empty-content"},[t._v(" "+t._s(t.emptyText)+" ")])],1),t._l(t.publications,(function(e){return r("div",{key:e.id,staticClass:"pb-4"},[Array.isArray(e.comments)?r("publication-instance",{attrs:{publication:e},on:{init:function(e){return t.refreshMe()}}}):t._e()],1)}))],2)},s=[],i=r("5530"),a=(r("b0c0"),r("caad"),r("2532"),r("2f62")),c=r("6397"),u={name:"Posts",mixins:[c["a"]],computed:Object(i["a"])(Object(i["a"])({},Object(a["b"])({user:"user/inView"})),{},{publications:function(){return this.user&&this.user["my_publications"]?this.user["my_publications"]:[]},drafts:function(){return this.user||this.user.drafts?this.user.drafts:[]},emptyText:function(){var t=this.$route.name,e=t.includes("Profile")?"you":"the user";return"hmm... looks like ".concat(e," haven't posted anything yet")}})},o=u,d=r("2877"),f=r("6544"),b=r.n(f),l=r("b0af"),h=r("99d9"),p=Object(d["a"])(o,n,s,!1,null,"3b3b0d80",null);e["default"]=p.exports;b()(p,{VCard:l["a"],VCardTitle:h["d"]})},6397:function(t,e,r){"use strict";var n=r("1da1"),s=r("5530"),i=(r("96cf"),r("2f62")),a={data:function(){return{refreshing:!1}},computed:Object(s["a"])({},Object(i["b"])({me:"user/current"})),methods:{refreshMe:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null===(r=t.me)||void 0===r||!r.id){e.next=12;break}return t.refreshing=!0,e.prev=2,e.next=5,t.$axios.get(t.$urls.user.me);case 5:return n=e.sent,t.$helper.setCurrentUser(n),e.next=9,t.$store.dispatch("user/setCurrentUser",n);case 9:return e.prev=9,t.refreshing=!1,e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[2,,9,12]])})))()}}};e["a"]=a},"99d9":function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return c})),r.d(e,"d",(function(){return u}));var n=r("b0af"),s=r("80d2"),i=Object(s["j"])("v-card__actions"),a=Object(s["j"])("v-card__subtitle"),c=Object(s["j"])("v-card__text"),u=Object(s["j"])("v-card__title");n["a"]}}]);
//# sourceMappingURL=chunk-d52a692c.95cc2e24.js.map