(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fcac0f4","chunk-2d0e6c6b","chunk-2d0e6c6b"],{"061f":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.hides.length?t._e():e("v-card",{attrs:{height:"86vh",flat:""}},[e("v-card-title",{staticClass:"empty-content"},[t._v(" hmm... looks like you haven't hidden anything yet ")])],1),t._l(t.hides,(function(n){return e("div",{key:n.id,staticClass:"pb-4"},[n.publication?e("publication-instance",{attrs:{publication:n.publication},on:{init:t.handler}}):e("comment-instance",{attrs:{comment:n.comment}})],1)}))],2)},c=[],s=e("5530"),a=e("38e8"),r=e("2f62"),u={name:"Hidden",mixins:[a["a"]],computed:Object(s["a"])(Object(s["a"])({},Object(r["b"])({user:"user/inView"})),{},{hides:function(){return this.user&&this.user.my_hides?this.user.my_hides:[]}})},o=u,d=e("2877"),h=e("6544"),l=e.n(h),f=e("b0af"),m=e("99d9"),b=Object(d["a"])(o,i,c,!1,null,"5dfc931d",null);n["default"]=b.exports;l()(b,{VCard:f["a"],VCardTitle:m["d"]})},"38e8":function(t,n,e){"use strict";e("99af"),e("4e82");var i={data:function(){return{items:[],sorting:null}},methods:{handler:function(){var t=this;this.refreshMe().then((function(){t.sortItems()}))},sortItems:function(){var t=this;this.sorting=!0;var n=this.comments.concat(this.publications);n.length&&n.sort((function(n,e){var i=t.$moment(n["created_at"]).unix(),c=t.$moment(e["created_at"]).unix();return c-i})),this.items=n,this.sorting=!1}}};n["a"]=i},"99d9":function(t,n,e){"use strict";e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"d",(function(){return u}));var i=e("b0af"),c=e("80d2"),s=Object(c["j"])("v-card__actions"),a=Object(c["j"])("v-card__subtitle"),r=Object(c["j"])("v-card__text"),u=Object(c["j"])("v-card__title");i["a"]}}]);
//# sourceMappingURL=chunk-7fcac0f4.98d00ddd.js.map