(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c70a7c7"],{a583:function(t,e,i){"use strict";i("a434"),i("d3b7"),i("159b"),i("3ca3"),i("ddb0"),i("2b3d"),i("9861"),i("a630");var s={data:function(){return{files:[],fileUrls:[],totalSize:null}},methods:{clearFiles:function(){this.files=[],this.fileUrls=[],this.totalSize=null},removeFile:function(t,e){this.files.splice(e,1),this.fileUrls.splice(e,1),this.totalSize-=t.size},addTargetFilesToList:function(t){var e=this;t.forEach((function(t){e.files.push(t),e.fileUrls.push(URL.createObjectURL(t)),e.totalSize+=t.size}))},fileInputChanged:function(t){var e=Array.from(t.target.files);this.addTargetFilesToList(e)},dragFile:function(t){var e=Array.from(t.dataTransfer.files);this.addTargetFilesToList(e)}}};e["a"]=s},a6a9:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-scale-transition",[t.files.length?i("v-col",{attrs:{cols:"12"}},[i("v-row",{staticClass:"ma-0 pa-0"},t._l(t.fileUrls,(function(e,s){return i("v-col",{key:s,attrs:{cols:"4"}},[i("card-img",{attrs:{"max-width":"400",contain:"",height:"150",src:e}},[i("div",{staticClass:"d-flex"},[i("v-btn",{staticClass:"clear-btn",attrs:{icon:"",color:"error"},on:{click:function(i){return t.removeFile(e,s)}}},[i("v-icon",[t._v("mdi-close-circle")])],1),i("v-btn",{staticClass:"post-btn",attrs:{icon:"",color:"success",disabled:!t.payload.title},on:{click:function(i){return t.postImage(e,s)}}},[i("v-icon",[t._v("mdi-check-circle")])],1)],1)])],1)})),1)],1):t._e()],1),i("v-card",{staticClass:"d-flex align-center justify-center flex-wrap",class:t.theme.color+"-border",attrs:{"min-height":t.files.length?100:200,flat:""},on:{drop:t.dragFile}},[i("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"fileInput",staticClass:"file-input",attrs:{id:"file-input",type:"file",multiple:"",accept:"image/*"},on:{change:t.fileInputChanged}}),i("div",{staticClass:"weight-500 text-center",class:t.theme.color+"--text"},[t._v(" Drag and drop images or ")]),i("div",{staticClass:"px-2"},[i("v-btn",{staticClass:"weight-700",attrs:{outlined:"",color:t.theme.color,rounded:""},on:{click:function(e){return t.$refs.fileInput.click()}}},[t._v(" Upload ")])],1)])],1)},a=[],r=i("5530"),l=i("2f62"),n=i("5f3b"),c=i("a583"),o=i("c473"),f={name:"SubmitMedia",mixins:[n["a"],c["a"],o["a"]],props:{theme:{type:Object,required:!0},payload:{type:Object,required:!0}},computed:Object(r["a"])({},Object(l["b"])("publication",["inProgress"])),methods:{postImage:function(t,e){var i=this,s=this.inProgress.id,a=this.$util.format(this.$urls.image.publication,s),r=this.$helper.createFormData({image:this.files[e]});this.post(a,r).then((function(){i.success?(i.removeFile(t,e),i.$emit("refresh")):i.openSnack("Sorry, something went wrong.")}))}}},d=f,u=i("2877"),h=i("6544"),p=i.n(h),m=i("8336"),v=i("b0af"),g=i("62ad"),b=i("132d"),w=i("0fd9"),C=i("0789"),k=Object(u["a"])(d,s,a,!1,null,"1170ed34",null);e["default"]=k.exports;p()(k,{VBtn:m["a"],VCard:v["a"],VCol:g["a"],VIcon:b["a"],VRow:w["a"],VScaleTransition:C["e"]})}}]);
//# sourceMappingURL=chunk-3c70a7c7.fd8d92c5.js.map