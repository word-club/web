(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fcd453c","chunk-2d0e6c6b"],{"38e8":function(t,e,n){"use strict";n("99af"),n("4e82");var i={data:function(){return{items:[],sorting:null}},methods:{handler:function(){var t=this;this.refreshMe().then((function(){t.sortItems()}))},sortItems:function(){var t=this;this.sorting=!0;var e=this.comments.concat(this.publications);e.length&&e.sort((function(e,n){var i=t.$moment(e.timestamp).unix(),s=t.$moment(n.timestamp).unix();return s-i})),this.items=e,this.sorting=!1}}};e["a"]=i},"4de8":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.items.length?t._e():n("v-card",{attrs:{height:"86vh",flat:""}},[n("v-card-title",{staticClass:"empty-content"},[t._v(" hmm... looks like you haven't shared anything yet ")])],1),t._l(t.items,(function(e){return n("div",{key:e.id,staticClass:"pb-4"},[Array.isArray(e.comments)?n("publication-instance",{attrs:{publication:e},on:{init:t.handler}}):n("comment-instance",{attrs:{comment:e}})],1)}))],2)},s=[],r=n("5530"),c=n("38e8"),a=n("2f62"),u={name:"Shares",mixins:[c["a"]],computed:Object(r["a"])(Object(r["a"])({},Object(a["b"])({user:"user/inView"})),{},{publications:function(){return this.user||this.user.shared_publications?this.user.shared_publications:[]},comments:function(){return this.user||this.user.shared_comments?this.user.shared_comments:[]}}),created:function(){this.sortItems()}},o=u,h=n("2877"),d=n("6544"),m=n.n(d),l=n("b0af"),f=n("99d9"),b=Object(h["a"])(o,i,s,!1,null,"7668209c",null);e["default"]=b.exports;m()(b,{VCard:l["a"],VCardTitle:f["d"]})},"99d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return u}));var i=n("b0af"),s=n("80d2"),r=Object(s["i"])("v-card__actions"),c=Object(s["i"])("v-card__subtitle"),a=Object(s["i"])("v-card__text"),u=Object(s["i"])("v-card__title");i["a"]}}]);
//# sourceMappingURL=chunk-7fcd453c.a71e93b4.js.map