(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0b8c"],{"68d8":function(i,e,n){"use strict";n.r(e);var t=function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("text-field",{attrs:{label:"Link Url",icon:"mdi-link",name:"link",dense:!1,errors:i.formErrors,color:i.theme.color,disabled:!i.payload.title},on:{change:i.createLink},model:{value:i.linkUrl,callback:function(e){i.linkUrl=e},expression:"linkUrl"}})},l=[],r=n("5530"),s=(n("9911"),n("5f3b")),o=n("ef9e"),a=n("2f62"),c={name:"UploadLink",props:{theme:{type:Object,required:!0},payload:{type:Object,required:!0}},data:function(){return{linkUrl:null}},mixins:[s["a"],o["a"]],computed:Object(r["a"])({},Object(a["b"])("publication",["inProgress"])),methods:{createLink:function(){var i=this;if(this.linkUrl)if(this.inProgress&&this.inProgress.link){var e=this.$util.format(this.$urls.link.detail,this.inProgress.link.id);this.patch(e,{link:this.linkUrl}).then((function(){i.patchSuccess&&(i.linkUrl=null,i.$emit("refresh"))}))}else{var n=this.$util.format(this.$urls.link.publication,this.inProgress.id);this.post(n,{link:this.linkUrl}).then((function(){i.success&&(i.linkUrl=null,i.$emit("refresh"))}))}else this.formErrors={}}}},u=c,h=n("2877"),k=Object(h["a"])(u,t,l,!1,null,"65a8f8f7",null);e["default"]=k.exports}}]);
//# sourceMappingURL=chunk-2d0d0b8c.65dbc2f3.js.map