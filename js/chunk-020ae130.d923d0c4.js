(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-020ae130"],{"3db1":function(t,n,i){"use strict";i("fb6a");var e={data:function(){return{mini:!1}},computed:{editorContent:function(){if(!this.publication)return{blocks:[]};try{if(this.mini){var t=JSON.parse(this.publication.content);return t.blocks=t.blocks.slice(0,2),t}return JSON.parse(this.publication.content)}catch(n){return{blocks:[{type:"paragraph",data:{text:this.publication.content}}]}}}}};n["a"]=e},"46bd":function(t,n,i){},"4afb":function(t,n,i){"use strict";i("46bd")},"979f":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-card",{class:{"feed-item-ban":t.publication.ban,"feed-item":!t.publication.ban},attrs:{outlined:""}},[i("item-header",{attrs:{item:t.publication}}),i("v-card-title",{staticClass:"publication-title",class:{"grey--text":t.publication.ban},on:{click:function(n){return t.toPublicationDetail(t.publication.id)}}},[i("h4",[t._v(t._s(t.publication.title))])]),"media"===t.publication.type?i("item-images",{attrs:{item:t.publication}}):t._e(),"link"===t.publication.type?i("item-link",{attrs:{link:t.publication.links}}):t._e(),"editor"===t.publication.type?i("item-content",{attrs:{content:t.editorContent}}):t._e(),t.publication.ban?t._e():i("item-actions",{attrs:{item:t.publication},on:{init:function(n){return t.$emit("init")}}})],1)},a=[],c=(i("d3b7"),i("3ca3"),i("ddb0"),i("6554")),u=i("3db1"),o={name:"PublicationInstance",props:{publication:{type:Object,required:!0}},mixins:[c["a"],u["a"]],components:{ItemHeader:function(){return Promise.all([i.e("chunk-e1736d86"),i.e("chunk-0bad1d76")]).then(i.bind(null,"0389"))},ItemImages:function(){return Promise.all([i.e("chunk-a6e11f12"),i.e("chunk-b28166d2")]).then(i.bind(null,"9a87"))},ItemLink:function(){return Promise.all([i.e("chunk-e1736d86"),i.e("chunk-566dd8d7")]).then(i.bind(null,"b477"))},ItemContent:function(){return Promise.all([i.e("chunk-e1736d86"),i.e("chunk-45c5e649")]).then(i.bind(null,"9c8f"))},ItemActions:function(){return Promise.all([i.e("chunk-e1736d86"),i.e("chunk-963eb992")]).then(i.bind(null,"3e9a"))}},created:function(){this.mini=!0}},l=o,r=(i("4afb"),i("2877")),b=i("6544"),s=i.n(b),d=i("b0af"),p=i("99d9"),m=Object(r["a"])(l,e,a,!1,null,"28b44b76",null);n["default"]=m.exports;s()(m,{VCard:d["a"],VCardTitle:p["d"]})}}]);
//# sourceMappingURL=chunk-020ae130.d923d0c4.js.map