(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d7d39f5"],{"028a":function(t,e,i){"use strict";i("4bf3")},"132d":function(t,e,i){"use strict";var n,a=i("5530"),s=(i("c96a"),i("d3b7"),i("caad"),i("2532"),i("ac1f"),i("00b4"),i("a9e3"),i("498a"),i("7db0"),i("fb6a"),i("4804"),i("7e2b")),r=i("a9ad"),o=i("af2b"),c=i("7560"),l=i("80d2"),u=i("2b0e"),m=i("58df");function d(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}function h(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(n||(n={}));var f=Object(m["a"])(s["a"],r["a"],o["a"],c["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l["D"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l["A"])(t).find((function(e){return t[e]}));return e&&n[e]||Object(l["h"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(a["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=Object(a["a"])(Object(a["a"])({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=Object(a["a"])(Object(a["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var i=[],n=this.getDefaultData(),a="material-icons",s=t.indexOf("-"),r=s<=-1;r?i.push(t):(a=t.slice(0,s),d(a)&&(a="")),n.class[a]=!0,n.class[t]=!r;var o=this.getSize();return o&&(n.style={fontSize:o}),this.applyColors(n),e(this.hasClickListener?"button":this.tag,n,i)},renderSvgIcon:function(t,e){var i={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},n=this.getSize();return n&&(i.style={fontSize:n,height:n,width:n}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",i,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var i={class:{"v-icon__component":!0}},n=this.getSize();n&&(i.style={fontSize:n,height:n,width:n}),this.applyColors(i);var a=t.component;return i.props=t.props,i.nativeOn=i.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(a,i)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?h(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=u["a"].extend({name:"v-icon",$_wrapperFor:f,functional:!0,render:function(t,e){var i=e.data,n=e.children,a="";return i.domProps&&(a=i.domProps.textContent||i.domProps.innerHTML||a,delete i.domProps.textContent,delete i.domProps.innerHTML),t(f,i,a?[a]:n)}})},4804:function(t,e,i){},"4bf3":function(t,e,i){},"6d8a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.community?i("div",{staticClass:"community-breadcrumb"},[i("div",{staticClass:"community-breadcrumb--item",on:{click:function(e){return t.$router.push(t.communityItem.to)}}},[i("v-icon",{staticClass:"community-breadcrumb--item--avatar",attrs:{size:"20",color:t.community.theme.color}},[t._v(" mdi-label ")]),i("div",{staticClass:"community-breadcrumb--item--title",class:t.community.theme.color+"--text"},[t._v(" "+t._s(t.communityItem.text)+" ")])],1),i("div",{staticClass:"community-breadcrumb--divider"},[t._v("/")]),i("div",{staticClass:"community-breadcrumb--c-item"},[i("div",{staticClass:"community-breadcrumb--c-item--title"},[t._v(" "+t._s(t.currentItem.text)+" ")])])]):t._e()},a=[],s=i("5530"),r=(i("ac1f"),i("1276"),i("b0c0"),i("2f62")),o={name:"CommunityBreadcrumb",computed:Object(s["a"])(Object(s["a"])({},Object(r["b"])({community:"community/inView"})),{},{communityItem:function(){var t;return{exact:!0,disabled:!1,text:this.community.unique_id,avatar:null===(t=this.community.avatar)||void 0===t?void 0:t.image,to:{name:"Community Detail",params:{id:this.community.id}}}},currentItem:function(){return{disabled:!0,text:this.$route.name.split("Community MOD Settings ")[1]}}})},c=o,l=(i("028a"),i("2877")),u=i("6544"),m=i.n(u),d=i("132d"),h=Object(l["a"])(c,n,a,!1,null,"f34420c4",null);e["default"]=h.exports;m()(h,{VIcon:d["a"]})},af2b:function(t,e,i){"use strict";i("c96a");var n=i("2b0e");e["a"]=n["a"].extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},c96a:function(t,e,i){"use strict";var n=i("23e7"),a=i("857a"),s=i("af03");n({target:"String",proto:!0,forced:s("small")},{small:function(){return a(this,"small","","")}})}}]);
//# sourceMappingURL=chunk-7d7d39f5.1baa6469.js.map