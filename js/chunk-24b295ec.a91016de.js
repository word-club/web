(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24b295ec"],{"061f":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.hides.length?t._e():n("v-card",{attrs:{height:"86vh",flat:""}},[n("v-card-title",{staticClass:"empty-content"},[t._v(" hmm... looks like you haven't hidden anything yet ")])],1),t._l(t.hides,(function(e){return n("div",{key:e.id,staticClass:"pb-4"},[e.publication?n("publication-instance",{attrs:{publication:e.publication},on:{init:function(e){return t.refreshProfile()}}}):n("comment-instance",{attrs:{comment:e.comment}})],1)}))],2)},s=[],r=n("5530"),a=(n("38e8"),n("2f62")),c=n("ece1"),o={name:"Hidden",mixins:[c["a"]],computed:Object(r["a"])(Object(r["a"])({},Object(a["b"])({user:"user/inView"})),{},{hides:function(){return this.user&&this.user.my_hides?this.user.my_hides:[]}})},u=o,h=n("2877"),d=n("6544"),l=n.n(d),m=n("b0af"),f=n("99d9"),b=Object(h["a"])(u,i,s,!1,null,"54b25456",null);e["default"]=b.exports;l()(b,{VCard:m["a"],VCardTitle:f["d"]})},"38e8":function(t,e,n){"use strict";n("99af"),n("4e82");var i={data:function(){return{items:[],sorting:null}},methods:{handler:function(){var t=this;this.refreshMe().then((function(){t.sortItems()}))},sortItems:function(){var t=this;this.sorting=!0;var e=this.comments.concat(this.publications);e.length&&e.sort((function(e,n){var i=t.$moment(e["created_at"]).unix(),s=t.$moment(n["created_at"]).unix();return s-i})),this.items=e,this.sorting=!1}}};e["a"]=i}}]);
//# sourceMappingURL=chunk-24b295ec.a91016de.js.map