(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76b3c422"],{3408:function(t,i,a){},"5e4f":function(t,i,a){},"6b50":function(t,i,a){"use strict";var n={computed:{},methods:{unSubscribe:function(t){console.log(t)},subscribe:function(t){console.log(t)},disableNotification:function(t){console.log(t)},enableNotification:function(t){console.log(t)}}};i["a"]=n},8212:function(t,i,a){"use strict";var n=a("5530"),e=(a("a9e3"),a("3408"),a("a9ad")),c=a("24b2"),o=a("a236"),s=a("80d2"),r=a("58df");i["a"]=Object(r["a"])(e["a"],c["a"],o["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(n["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(n["a"])({height:Object(s["g"])(this.size),minWidth:Object(s["g"])(this.size),width:Object(s["g"])(this.size)},this.measurableStyles)}},render:function(t){var i={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,i),this.$slots.default)}})},ad1a:function(t,i,a){"use strict";a("5e4f")},f442:function(t,i,a){"use strict";a.r(i);var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-card-title",{staticClass:"pa-0 white"},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"800",width:"800",flat:"",color:"white"}},[a("v-card-text",{staticClass:"pa-3 pt-0 pb-1 d-flex align-center",staticStyle:{width:"100%"}},[a("v-avatar",{staticClass:"community-avatar",attrs:{size:"80",color:t.community.avatar?"white":t.community.theme.color}},[t.community.avatar?a("v-img",{attrs:{src:t.$link(t.community.avatar.image)}}):a("div",{staticClass:"full-width display-1 text-center white--text"},[t._v(" "+t._s(t.community.name[0].toUpperCase())+" ")])],1),a("div",{staticClass:"px-2"}),a("div",{staticClass:"px24"},[t._v(" "+t._s(t.community.name)+" ")]),a("v-spacer"),a("div",{staticClass:"px-2"}),t.subscription&&t.subscription.is_approved?a("v-btn",{attrs:{rounded:"",depressed:"",color:t.community.theme.color,dark:""},on:{click:function(i){return t.unSubscribe(t.community)}}},[t._v(" Joined ")]):a("v-btn",{attrs:{outlined:"",rounded:"",color:t.community.theme.color,dark:""},on:{click:function(i){return t.subscribe(t.community)}}},[t._v(" Join ")]),a("div",{staticClass:"px-2"}),t.subscription&&!t.subscription.disable_notification?a("v-btn",{attrs:{icon:"",color:t.community.theme.color},on:{click:function(i){return t.disableNotification(t.community)}}},[a("v-icon",[t._v("mdi-bell")])],1):a("v-btn",{attrs:{icon:"",color:t.community.theme.color},on:{click:function(i){return t.enableNotification(t.community)}}},[a("v-icon",[t._v("mdi-bell-outline")])],1)],1),a("community-tab")],1)],1)},e=[],c=a("5530"),o=(a("d3b7"),a("3ca3"),a("ddb0"),a("2f62")),s=a("6b50"),r={name:"DetailTitle",mixins:[s["a"]],components:{CommunityTab:function(){return a.e("chunk-2bebea6e").then(a.bind(null,"ff48"))}},computed:Object(c["a"])(Object(c["a"])({},Object(o["b"])({community:"community/inView"})),{},{subscription:function(){return!!this.community&&this.community.subscription}})},u=r,l=(a("ad1a"),a("2877")),m=a("6544"),d=a.n(m),b=a("8212"),f=a("8336"),v=a("b0af"),h=a("99d9"),p=a("132d"),y=a("adda"),g=a("2fa4"),C=Object(l["a"])(u,n,e,!1,null,"4bd32f6e",null);i["default"]=C.exports;d()(C,{VAvatar:b["a"],VBtn:f["a"],VCard:v["a"],VCardText:h["c"],VCardTitle:h["d"],VIcon:p["a"],VImg:y["a"],VSpacer:g["a"]})}}]);
//# sourceMappingURL=chunk-76b3c422.9fa97f48.js.map