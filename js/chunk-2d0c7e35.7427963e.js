(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c7e35"],{5312:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.inProgress&&t.inProgress.links?i("v-card",{staticClass:"mb-6"},[i("v-card-text",[i("v-list-item",[i("v-list-item-avatar",[i("wc-avatar",{attrs:{color:t.theme.color,src:t.inProgress.links.image,text:t.inProgress.links.title,"span-class":"white--text px22 mb-1 full-width text-center"}})],1),i("v-list-item-content",[i("v-list-item-title",[i("a",{attrs:{href:t.inProgress.links.link,target:"_blank"}},[t._v(t._s(t.inProgress.links.title))])]),i("v-list-item-subtitle",[t._v(t._s(t.inProgress.links.description))])],1),i("v-list-item-action",[i("v-btn",{attrs:{icon:"",color:"error"},on:{click:function(e){return t.removeLink()}}},[i("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1),i("confirm-dialog",{on:{refresh:function(e){return t.$emit("refresh")}}})],1):t._e()},r=[],n=i("5530"),o=(i("9911"),i("2f62")),a=i("5802"),l={name:"LinkPreview",props:{theme:{type:Object,required:!0}},mixins:[a["a"]],computed:Object(n["a"])({},Object(o["b"])({inProgress:"publication/inProgress"})),methods:{removeLink:function(){var t=this.$util.format(this.$urls.link.detail,this.inProgress.links.id);this.openConfirmDialog("Are you sure you want to remove this link?","DELETE",t,["refresh"],"Link removed successfully.","Link removal failed.")}}},c=l,m=i("2877"),u=i("6544"),d=i.n(u),v=i("8336"),k=i("b0af"),f=i("99d9"),h=i("132d"),b=i("da13"),p=i("1800"),g=i("8270"),L=i("5d23"),w=Object(m["a"])(c,s,r,!1,null,null,null);e["default"]=w.exports;d()(w,{VBtn:v["a"],VCard:k["a"],VCardText:f["c"],VIcon:h["a"],VListItem:b["a"],VListItemAction:p["a"],VListItemAvatar:g["a"],VListItemContent:L["b"],VListItemSubtitle:L["c"],VListItemTitle:L["d"]})}}]);
//# sourceMappingURL=chunk-2d0c7e35.7427963e.js.map