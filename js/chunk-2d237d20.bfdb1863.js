(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d237d20"],{fd6b:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-scale-transition",[e.inProgress&&e.inProgress["images"]&&e.inProgress["images"].length?r("v-col",{staticClass:"pa-0",attrs:{cols:"12"}},[r("v-row",{staticClass:"ma-0 pa-0"},e._l(e.inProgress.images,(function(t){return r("v-col",{key:t.id,attrs:{cols:"4"}},[r("card-img",{attrs:{"max-width":"400",src:e.$link(t.image)}},[r("v-btn",{attrs:{icon:"",color:"error"},on:{click:function(r){return e.deleteImage(t.id)}}},[r("v-icon",[e._v("mdi-delete")])],1)],1)],1)})),1),r("confirm-dialog",{on:{refresh:function(t){return e.$emit("refresh")}}})],1):e._e()],1)},i=[],n=r("5530"),a=r("2f62"),o=r("5802"),c={name:"ImageList",mixins:[o["a"]],computed:Object(n["a"])({},Object(a["b"])({inProgress:"publication/inProgress"})),methods:{deleteImage:function(e){var t=this.$util.format(this.$urls.image.detail,e);this.openConfirmDialog("Are you sure you want to delete this image?","DELETE",t,["refresh"],"Image removed successfully.","Image could not be removed.")}}},l=c,m=r("2877"),u=r("6544"),d=r.n(u),g=r("8336"),f=r("62ad"),h=r("132d"),v=r("0fd9"),b=r("0789"),p=Object(m["a"])(l,s,i,!1,null,"03ccb46a",null);t["default"]=p.exports;d()(p,{VBtn:g["a"],VCol:f["a"],VIcon:h["a"],VRow:v["a"],VScaleTransition:b["e"]})}}]);
//# sourceMappingURL=chunk-2d237d20.bfdb1863.js.map