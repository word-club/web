(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ae7f673"],{c019:function(t,i,e){},c683:function(t,i,e){"use strict";e("c019")},e587:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"submit-tab"},t._l(t.tabItems,(function(i,s){return e("div",{key:s,staticClass:"submit-tab-item",class:{"submit-tab-item-active":i.active,"submit-tab-item-disabled":i.disabled},on:{click:function(e){return t.setActiveTab(i)}}},[e("v-icon",{staticClass:"submit-tab-item-icon",attrs:{color:i.active?t.theme.color:""}},[t._v(" "+t._s(i.icon)+" ")]),t.$vuetify.breakpoint.width>300?e("div",{staticClass:"submit-tab-item-title",class:i.active?t.theme.color+"--text":""},[t._v(" "+t._s(i.title)+" ")]):t._e(),e("v-scale-transition",[i.active?e("v-card",{staticClass:"submit-tab-item-active-line rounded-b-0 rounded-tl-xl rounded-tr-xl",attrs:{flat:"",color:t.theme.color}}):t._e()],1)],1)})),0)},a=[],n=e("5530"),c=e("2f62"),o={name:"SubmitTab",props:{payload:{type:Object,default:function(){}},theme:{type:Object,default:function(){return{color:"primary"}}}},computed:Object(n["a"])(Object(n["a"])({},Object(c["b"])({inProgress:"publication/inProgress"})),{},{publicationTypes:function(){return this.$constants.PUBLICATION_TYPE},tabItems:function(){return[{type:"editor",title:"Post",icon:"mdi-post",active:this.payload.type===this.publicationTypes.EDITOR,to:{name:"Submit",params:{type:this.publicationTypes.EDITOR}},disabled:this.inProgress&&this.inProgress.type!==this.publicationTypes.EDITOR},{type:"media",title:"Media",icon:"mdi-image-size-select-actual",active:this.payload.type===this.publicationTypes.MEDIA,to:{name:"Submit",params:{type:this.publicationTypes.MEDIA}},disabled:this.inProgress&&this.inProgress.type!==this.publicationTypes.MEDIA},{type:"link",title:"Link",icon:"mdi-link-variant",active:this.payload.type===this.publicationTypes.LINK,to:{name:"Submit",params:{type:this.publicationTypes.LINK}},disabled:this.inProgress&&this.inProgress.type!==this.publicationTypes.LINK},{type:"poll",title:"Poll",icon:"mdi-chart-box-outline",disabled:!0,active:!1,to:{name:"Submit",params:{type:this.publicationTypes.POLL}}}]}}),methods:{setActiveTab:function(t){this.$emit("setType",t.type),this.$router.push(t.to)}}},l=o,r=(e("c683"),e("2877")),p=e("6544"),u=e.n(p),b=e("b0af"),d=e("132d"),m=e("0789"),y=Object(r["a"])(l,s,a,!1,null,"3c5e3d88",null);i["default"]=y.exports;u()(y,{VCard:b["a"],VIcon:d["a"],VScaleTransition:m["e"]})}}]);
//# sourceMappingURL=chunk-1ae7f673.2c929fbd.js.map