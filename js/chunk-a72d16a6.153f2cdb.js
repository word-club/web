(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a72d16a6","chunk-2d0e6c6b","chunk-2d0e6c6b"],{"1f4f":function(t,e,a){"use strict";var s=a("5530"),i=(a("a9e3"),a("8b37"),a("80d2")),r=a("7560"),n=a("58df");e["a"]=Object(n["a"])(r["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(s["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(i["h"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},3408:function(t,e,a){},8212:function(t,e,a){"use strict";var s=a("5530"),i=(a("a9e3"),a("3408"),a("a9ad")),r=a("24b2"),n=a("a236"),o=a("80d2"),c=a("58df");e["a"]=Object(c["a"])(i["a"],r["a"],n["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(s["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(s["a"])({height:Object(o["h"])(this.size),minWidth:Object(o["h"])(this.size),width:Object(o["h"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}})},"8b37":function(t,e,a){},"8ce9":function(t,e,a){},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"d",(function(){return c}));var s=a("b0af"),i=a("80d2"),r=Object(i["j"])("v-card__actions"),n=Object(i["j"])("v-card__subtitle"),o=Object(i["j"])("v-card__text"),c=Object(i["j"])("v-card__title");s["a"]},a1c7:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{outlined:""}},[a("v-card-title",{staticClass:"pa-2 pt-4"},[a("v-avatar",{attrs:{size:"35",color:"grey darken-1"}}),a("span",{staticClass:"pl-3 px16 weight-400 grey--text"},[t._v("Posting to WordClub")])],1),a("v-divider",{staticClass:"mx-2"}),a("v-card-text",{staticClass:"pa-2 pt-0"},[a("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",t._l(t.instructions,(function(e,s){return a("tr",{key:e},[a("td",{staticClass:"weight-500"},[t._v(" "+t._s(s+1)+" ")]),a("td",{staticClass:"weight-500"},[t._v(" "+t._s(e)+" ")])])})),0)]},proxy:!0}])})],1)],1)},i=[],r={name:"PostingToWordClub",computed:{instructions:function(){return["Remember to be human","Behave like you would in real life","Look for the original source of content","Search for duplicates before posting","Read the community rules"]}}},n=r,o=a("2877"),c=a("6544"),l=a.n(c),d=a("8212"),h=a("b0af"),u=a("99d9"),v=a("ce7e"),f=a("1f4f"),b=Object(o["a"])(n,s,i,!1,null,null,null);e["default"]=b.exports;l()(b,{VAvatar:d["a"],VCard:h["a"],VCardText:u["c"],VCardTitle:u["d"],VDivider:v["a"],VSimpleTable:f["a"]})},ce7e:function(t,e,a){"use strict";var s=a("5530"),i=(a("8ce9"),a("7560"));e["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(s["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(s["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-a72d16a6.153f2cdb.js.map