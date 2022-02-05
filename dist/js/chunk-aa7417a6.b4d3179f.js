(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aa7417a6","chunk-1abc17a0"],{1044:function(t,e,i){"use strict";var n={computed:{},methods:{getTypeString:function(t){return"editor"===t?null:"link"===t?"LINK":"media"===t?"MEDIA":"poll"===t?"POLL":null}}};e["a"]=n},"166a":function(t,e,i){},"169a":function(t,e,i){"use strict";var n=i("5530"),s=i("2909"),a=i("ade3"),o=(i("a9e3"),i("498a"),i("caad"),i("2532"),i("d3b7"),i("7db0"),i("368e"),i("480e")),r=i("4ad4"),c=i("b848"),l=i("75eb"),u=i("e707"),d=i("e4d3"),h=i("21be"),v=i("f2e7"),f=i("a293"),m=i("58df"),p=i("d9bd"),b=i("80d2"),g=Object(m["a"])(r["a"],c["a"],l["a"],u["a"],d["a"],h["a"],v["a"]);e["a"]=g.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(a["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(a["a"])(t,"v-dialog--active",this.isActive),Object(a["a"])(t,"v-dialog--persistent",this.persistent),Object(a["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(a["a"])(t,"v-dialog--scrollable",this.scrollable),Object(a["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(p["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):u["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.$refs.content.contains(document.activeElement)||(t.previousActiveElement=document.activeElement,t.$refs.content.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===b["u"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(s["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(n["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(n["a"])(Object(n["a"])({},t.style),{},{maxWidth:Object(b["g"])(this.maxWidth),width:Object(b["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},1800:function(t,e,i){"use strict";i("4de4"),i("d3b7");var n=i("2b0e");e["a"]=n["a"].extend({name:"v-list-item-action",functional:!0,render:function(t,e){var i=e.data,n=e.children,s=void 0===n?[]:n;i.staticClass=i.staticClass?"v-list-item__action ".concat(i.staticClass):"v-list-item__action";var a=s.filter((function(t){return!1===t.isComment&&" "!==t.text}));return a.length>1&&(i.staticClass+=" v-list-item__action--stack"),t("div",i,s)}})},"1baa":function(t,e,i){"use strict";var n=i("5530"),s=(i("899c"),i("604c")),a=i("a9ad"),o=i("58df");e["a"]=Object(o["a"])(s["a"],a["a"]).extend({name:"v-list-item-group",provide:function(){return{isInGroup:!0,listItemGroup:this}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-list-item-group":!0})}},methods:{genData:function(){return this.setTextColor(this.color,Object(n["a"])(Object(n["a"])({},s["a"].options.methods.genData.call(this)),{},{attrs:{role:"listbox"}}))}}})},"2c3e":function(t,e,i){var n=i("da84"),s=i("83ab"),a=i("9f7f").MISSED_STICKY,o=i("c6b6"),r=i("9bf2").f,c=i("69f3").get,l=RegExp.prototype,u=n.TypeError;s&&a&&r(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===o(this))return!!c(this).sticky;throw u("Incompatible receiver, RegExp required")}}})},3408:function(t,e,i){},"34c3":function(t,e,i){"use strict";i("498a");var n=i("2b0e");e["a"]=n["a"].extend({name:"v-list-item-icon",functional:!0,render:function(t,e){var i=e.data,n=e.children;return i.staticClass="v-list-item__icon ".concat(i.staticClass||"").trim(),t("div",i,n)}})},"368e":function(t,e,i){},"3c93":function(t,e,i){},"3e9a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"rounded-t-0",attrs:{color:"grey lighten-4",flat:""}},[i("v-dialog",{attrs:{"max-width":"600",scrollable:""},model:{value:t.shareMode,callback:function(e){t.shareMode=e},expression:"shareMode"}},[i("v-card",{attrs:{color:"primary",dark:""}},[i("v-card-title",[t._v(" Share details "),i("v-spacer"),i("v-icon",[t._v("mdi-share")])],1),i("v-divider"),i("div",{staticClass:"py-2"}),i("v-card-text",[i("v-text-field",{attrs:{outlined:"","hide-details":"auto",name:"title","prepend-inner-icon":"mdi-format-title",label:"TITLE","error-messages":t.formErrors["title"]},model:{value:t.share.title,callback:function(e){t.$set(t.share,"title",e)},expression:"share.title"}})],1),i("v-card-text",{staticClass:"share-scrollbar",staticStyle:{"max-height":"400px"}},[i("v-card",{attrs:{outlined:"",light:""}},[i("item-header",{attrs:{item:t.publication}}),i("v-divider"),i("v-card-title",[t._v(" "+t._s(t.publication.title)+" "),i("v-spacer"),t.getTypeString(t.publication.type)?i("v-chip",{attrs:{outlined:""}},[t._v(t._s(t.getTypeString(t.publication.type)))]):t._e()],1),"media"===t.publication.type?i("item-images",{attrs:{item:t.publication}}):t._e(),"link"===t.publication.type?i("item-link",{attrs:{link:t.publication.link}}):t._e(),"editor"===t.publication.type?i("item-content",{attrs:{content:JSON.parse(t.publication.content)}}):t._e(),i("v-card-text",{staticClass:"grey lighten-4 d-flex flex-wrap align-center pa-2"},[i("div",{staticClass:"pa-1"},[t._v(t._s(t.publication.view_count)+" Views")]),i("v-icon",[t._v("mdi-circle-small")]),i("div",{staticClass:"pa-1"},[t._v(t._s(t.publication.discussions)+" Comments")])],1)],1)],1),i("v-card-actions",{staticClass:"primary lighten-3"},[i("v-btn",{attrs:{block:"",color:"primary"},on:{click:t.createShare}},[t._v("Share")])],1)],1)],1),i("v-divider"),i("v-card-actions",{staticClass:"flex-wrap",class:{"justify-space-evenly":t.smAndDown}},[i("v-btn",{staticClass:"item-action-btn to-comments",attrs:{small:t.smAndDown,outlined:"",color:"grey darken-1"},on:{click:t.routeToPublicationDetailComments}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-comment-outline")]),t._v(" "+t._s(t.publication.discussions)+" Comments ")],1),i("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[t.smAndDown?t._e():i("v-btn",t._g(t._b({staticClass:"item-action-btn share-action",attrs:{outlined:"",color:"grey darken-1"}},"v-btn",s,!1),n),[i("v-icon",{attrs:{left:""}},[t._v("mdi-share-outline")]),t._v("Share ")],1)]}}])},[i("v-list",{attrs:{dense:""}},[i("v-list-item",{staticClass:"menu-item copy-action",on:{click:t.copyLink},model:{value:t.clipboardContent,callback:function(e){t.clipboardContent=e},expression:"clipboardContent"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",{attrs:{color:"grey"}},[t._v("mdi-link")])],1),t._v(" Copy Link ")],1),t.isMyPublication?t._e():i("v-divider"),t.isMyPublication?t._e():i("v-list-item",{staticClass:"menu-item cross-post-action",on:{click:function(e){t.shareMode=!0}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",{attrs:{color:"grey"}},[t._v("mdi-source-branch")])],1),t._v(" Cross Post ")],1)],1)],1),i("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[t.isMyPublication?t._e():i("v-btn",t._g(t._b({staticClass:"more-actions",attrs:{icon:"",outlined:"",color:"grey darken-1"}},"v-btn",s,!1),n),[i("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[i("v-list",{attrs:{dense:""}},[i("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[t.smAndDown?i("v-list-item",t._g(t._b({staticClass:"menu-item share-action"},"v-list-item",s,!1),n),[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-share-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Share")])],1)],1):t._e()]}}])},[i("v-list",{attrs:{dense:""}},[i("v-list-item",{staticClass:"menu-item copy-action",on:{click:t.copyLink}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",{attrs:{color:"grey"}},[t._v("mdi-link")])],1),t._v(" Copy link ")],1),i("v-divider"),i("v-list-item",{staticClass:"menu-item cross-post-action",on:{click:function(e){t.shareMode=!0}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",{attrs:{color:"grey"}},[t._v("mdi-post")])],1),t._v(" CrossPost ")],1)],1)],1),t.smAndDown?i("v-divider"):t._e(),i("v-list-item",{staticClass:"menu-item bookmark-action",class:{"menu-item-active":t.bookmarkStatus},attrs:{"active-class":"menu-item-active"},on:{click:function(e){return t.bookmark()}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-bookmark-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Bookmark")])],1)],1),i("v-divider"),i("v-list-item",{staticClass:"menu-item hide-action",class:{"menu-item-active":t.hiddenStatus},attrs:{"active-class":"menu-item-active"},on:{click:function(e){return t.hide()}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-eye-off-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Hide")])],1)],1),i("v-divider"),i("v-list-item",{staticClass:"menu-item report-action",on:{click:function(e){return t.report()}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-flag-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Report")])],1)],1)],1)],1),t.smAndDown?t._e():i("v-spacer"),0===t.reactions?i("v-chip",{staticClass:"mx-1 add-first-reaction",attrs:{color:"primary",small:""}},[t._v(" Add First Reaction ")]):t._e(),i("v-btn",{staticClass:"mx-0 upvote-action",attrs:{icon:"",color:"primary",value:t.upVote},on:{click:function(e){return t.sendUpVote()}}},[i("v-icon",[t._v(" mdi-arrow-up-bold"+t._s(t.upVote?"":"-outline")+" ")])],1),t.reactions>0?i("div",{staticClass:"grey--text text--darken-3 weight-500 px-1 reactions-count"},[t._v(" "+t._s(t.reactions)+" ")]):t._e(),i("v-btn",{staticClass:"mx-0 downvote-action",attrs:{icon:"",color:"grey darken-2",value:t.downVote},on:{click:function(e){return t.sendDownVote()}}},[i("v-icon",[t._v(" mdi-arrow-down-bold"+t._s(t.downVote?"":"-outline")+" ")])],1)],1)],1)},s=[],a=i("5530"),o=(i("d3b7"),i("3ca3"),i("ddb0"),i("1044")),r=i("c473"),c=i("5f3b"),l=i("2f62"),u=i("6554"),d=i("6397"),h={name:"ItemActions",components:{ItemContent:function(){return i.e("chunk-0231c06e").then(i.bind(null,"9c8f"))},ItemLink:function(){return i.e("chunk-f9171298").then(i.bind(null,"b477"))},ItemImages:function(){return i.e("chunk-ab85411c").then(i.bind(null,"9a87"))},ItemHeader:function(){return i.e("chunk-08958888").then(i.bind(null,"0389"))}},mixins:[o["a"],r["a"],c["a"],u["a"],d["a"]],props:{publication:{type:Object,default:function(){}}},data:function(){return{clipboardContent:null,shareMode:!1,share:{title:null},reportMessage:null}},computed:Object(a["a"])(Object(a["a"])({},Object(l["b"])({currentUser:"user/current"})),{},{getLink:function(){return"something"},smAndDown:function(){return this.$vuetify.breakpoint.width<600},reactions:function(){return this.publication.popularity+this.publication.dislikes},isMyPublication:function(){return this.$helper.ifCurrentUserIs(this.publication.created_by)},upVote:function(){return this.publication.up_vote},downVote:function(){return this.publication.down_vote},hiddenStatus:function(){return this.publication.hidden_status},bookmarkStatus:function(){return this.publication.bookmark_status}}),methods:{copyLink:function(){var t=this;navigator.clipboard.writeText(this.getLink).then((function(){t.clipboardContent=!0,t.openSnack("Publication link copied to the clipboard",{color:"success"})}))},sendActionRequest:function(t){var e=this,i=t.id,n=t.payload,s=t.action,a=t.revoke,o=void 0!==a&&a,r=this.$util.format(this.$urls.publication[s],i||this.publication.id);o?this.$axios.delete(r).then((function(){e.$emit("init"),e.refreshMe()})):this.post(r,n).then((function(){e.success&&(e.$emit("init"),e.refreshMe())}))},bookmark:function(){this.sendActionRequest({action:this.bookmarkStatus?"bookmarkDetail":"addBookmark",revoke:!!this.bookmarkStatus,id:this.bookmarkStatus?this.bookmarkStatus.id:null})},hide:function(){this.sendActionRequest({action:"addHiddenStatus"})},report:function(){this.sendActionRequest({action:"addReport",payload:{title:this.reportMessage}})},sendUpVote:function(){this.sendActionRequest({action:this.upVote?"removeUpVote":"addUpVote",revoke:!!this.upVote,id:this.upVote?this.upVote.id:null})},sendDownVote:function(){this.sendActionRequest({action:this.downVote?"removeDownVote":"addDownVote",revoke:!!this.downVote,id:this.downVote?this.downVote.id:null})},createShare:function(){this.sendActionRequest({action:"share",payload:Object(a["a"])({},this.share)})},routeToPublicationDetailComments:function(){this.toPublicationDetail(this.publication.id,"comments")}}},v=h,f=(i("9152"),i("2877")),m=i("6544"),p=i.n(m),b=i("8336"),g=i("b0af"),y=i("99d9"),_=i("cc20"),k=i("169a"),C=i("ce7e"),w=i("132d"),x=i("8860"),S=i("da13"),O=i("5d23"),I=i("34c3"),A=i("e449"),E=i("2fa4"),$=i("8654"),V=Object(f["a"])(v,n,s,!1,null,"61e4fe4e",null);e["default"]=V.exports;p()(V,{VBtn:b["a"],VCard:g["a"],VCardActions:y["a"],VCardText:y["c"],VCardTitle:y["d"],VChip:_["a"],VDialog:k["a"],VDivider:C["a"],VIcon:w["a"],VList:x["a"],VListItem:S["a"],VListItemContent:O["a"],VListItemIcon:I["a"],VListItemTitle:O["c"],VMenu:A["a"],VSpacer:E["a"],VTextField:$["a"]})},"4d63":function(t,e,i){var n=i("83ab"),s=i("da84"),a=i("e330"),o=i("94ca"),r=i("7156"),c=i("9112"),l=i("9bf2").f,u=i("241c").f,d=i("3a9b"),h=i("44e7"),v=i("577e"),f=i("ad6d"),m=i("9f7f"),p=i("6eeb"),b=i("d039"),g=i("1a2d"),y=i("69f3").enforce,_=i("2626"),k=i("b622"),C=i("fce3"),w=i("107c"),x=k("match"),S=s.RegExp,O=S.prototype,I=s.SyntaxError,A=a(f),E=a(O.exec),$=a("".charAt),V=a("".replace),T=a("".indexOf),j=a("".slice),L=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,D=/a/g,M=/a/g,R=new S(D)!==D,B=m.MISSED_STICKY,N=m.UNSUPPORTED_Y,P=n&&(!R||B||C||w||b((function(){return M[x]=!1,S(D)!=D||S(M)==M||"/a/i"!=S(D,"i")}))),z=function(t){for(var e,i=t.length,n=0,s="",a=!1;n<=i;n++)e=$(t,n),"\\"!==e?a||"."!==e?("["===e?a=!0:"]"===e&&(a=!1),s+=e):s+="[\\s\\S]":s+=e+$(t,++n);return s},U=function(t){for(var e,i=t.length,n=0,s="",a=[],o={},r=!1,c=!1,l=0,u="";n<=i;n++){if(e=$(t,n),"\\"===e)e+=$(t,++n);else if("]"===e)r=!1;else if(!r)switch(!0){case"["===e:r=!0;break;case"("===e:E(L,j(t,n+1))&&(n+=2,c=!0),s+=e,l++;continue;case">"===e&&c:if(""===u||g(o,u))throw new I("Invalid capture group name");o[u]=!0,a[a.length]=[u,l],c=!1,u="";continue}c?u+=e:s+=e}return[s,a]};if(o("RegExp",P)){for(var F=function(t,e){var i,n,s,a,o,l,u=d(O,this),f=h(t),m=void 0===e,p=[],b=t;if(!u&&f&&m&&t.constructor===F)return t;if((f||d(O,t))&&(t=t.source,m&&(e="flags"in b?b.flags:A(b))),t=void 0===t?"":v(t),e=void 0===e?"":v(e),b=t,C&&"dotAll"in D&&(n=!!e&&T(e,"s")>-1,n&&(e=V(e,/s/g,""))),i=e,B&&"sticky"in D&&(s=!!e&&T(e,"y")>-1,s&&N&&(e=V(e,/y/g,""))),w&&(a=U(t),t=a[0],p=a[1]),o=r(S(t,e),u?this:O,F),(n||s||p.length)&&(l=y(o),n&&(l.dotAll=!0,l.raw=F(z(t),i)),s&&(l.sticky=!0),p.length&&(l.groups=p)),t!==b)try{c(o,"source",""===b?"(?:)":b)}catch(g){}return o},q=function(t){t in F||l(F,t,{configurable:!0,get:function(){return S[t]},set:function(e){S[t]=e}})},H=u(S),K=0;H.length>K;)q(H[K++]);O.constructor=F,F.prototype=O,p(s,"RegExp",F)}_("RegExp")},"5d23":function(t,e,i){"use strict";i.d(e,"a",(function(){return x})),i.d(e,"c",(function(){return S})),i.d(e,"b",(function(){return O}));var n=i("80d2"),s=i("8860"),a=i("5530"),o=i("ade3"),r=(i("4d63"),i("c607"),i("ac1f"),i("2c3e"),i("25f0"),i("466d"),i("db42"),i("9d26")),c=i("da13"),l=i("34c3"),u=i("7e2b"),d=i("9d65"),h=i("a9ad"),v=i("f2e7"),f=i("3206"),m=i("5607"),p=i("0789"),b=i("58df"),g=Object(b["a"])(u["a"],d["a"],h["a"],Object(f["a"])("list"),v["a"]),y=g.extend().extend({name:"v-list-group",directives:{ripple:m["a"]},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:[String,RegExp],noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes:function(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive:function(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created:function(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy:function(){this.list&&this.list.unregister(this)},methods:{click:function(t){var e=this;this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick((function(){return e.isActive=!e.isActive})))},genIcon:function(t){return this.$createElement(r["a"],t)},genAppendIcon:function(){var t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(l["a"],{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader:function(){return this.$createElement(c["a"],{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:Object(o["a"])({},this.activeClass,this.isActive),props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object(a["a"])(Object(a["a"])({},this.listeners$),{},{click:this.click})},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:t.isActive}]},Object(n["p"])(t))]}))},genPrependIcon:function(){var t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(l["a"],{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange:function(t){if(this.group){var e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e}},toggle:function(t){var e=this,i=this._uid===t;i&&(this.isBooted=!0),this.$nextTick((function(){return e.isActive=i}))},matchRoute:function(t){return null!==t.match(this.group)}},render:function(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(p["a"],this.genItems())])}}),_=i("1baa"),k=i("1800"),C=i("8270"),w=Object(n["i"])("v-list-item__action-text","span"),x=Object(n["i"])("v-list-item__content","div"),S=Object(n["i"])("v-list-item__title","div"),O=Object(n["i"])("v-list-item__subtitle","div");s["a"],c["a"],k["a"],C["a"],_["a"],l["a"]},"5f3b":function(t,e,i){"use strict";i("d3b7");var n={data:function(){return{posting:!1,postInstance:null,formErrors:{},statusCode:null,success:!1}},methods:{post:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.posting=!0,this.$axios.post(t,i).then((function(t){e.success=!0,e.postInstance=t})).catch((function(t){e.statusCode=t.response.status,e.formErrors=t.response.data})).finally((function(){e.posting=!1}))}}};e["a"]=n},"604c":function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var n=i("5530"),s=(i("a9e3"),i("4de4"),i("d3b7"),i("a434"),i("159b"),i("fb6a"),i("7db0"),i("c740"),i("166a"),i("8547")),a=i("a452"),o=i("7560"),r=i("58df"),c=i("d9bd"),l=Object(r["a"])(s["a"],a["a"],o["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(n["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,i){return t.toggleMethod(t.getValue(e,i))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.valueComparator(t.internalValue,e)};var e=this.internalValue;return Array.isArray(e)?function(i){return e.some((function(e){return t.valueComparator(e,i)}))}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(c["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return void 0===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,i=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,i)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);var n=this.selectedValues.indexOf(i);if(!(n<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==i})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var i=e.find((function(t){return!t.disabled}));if(i){var n=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,n))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),n=i.findIndex((function(e){return e===t}));this.mandatory&&n>-1&&i.length-1<1||null!=this.max&&n<0&&i.length+1>this.max||(n>-1?i.splice(n,1):i.push(t),this.internalValue=i)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t(this.tag,this.genData(),this.$slots.default)}});l.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},6397:function(t,e,i){"use strict";var n=i("1da1"),s=(i("96cf"),{data:function(){return{refreshing:!1}},methods:{refreshMe:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.refreshing=!0,e.prev=1,e.next=4,t.$axios.get(t.$urls.user.me);case 4:return i=e.sent,t.$helper.setCurrentUser(i),e.next=8,t.$store.dispatch("user/setCurrentUser",i);case 8:return e.next=10,t.$store.dispatch("user/setInView",i);case 10:return e.prev=10,t.refreshing=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,,10,13]])})))()}}});e["a"]=s},"713a":function(t,e,i){"use strict";var n=i("8212");e["a"]=n["a"]},8212:function(t,e,i){"use strict";var n=i("5530"),s=(i("a9e3"),i("3408"),i("a9ad")),a=i("24b2"),o=i("a236"),r=i("80d2"),c=i("58df");e["a"]=Object(c["a"])(s["a"],a["a"],o["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(n["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(n["a"])({height:Object(r["g"])(this.size),minWidth:Object(r["g"])(this.size),width:Object(r["g"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}})},8270:function(t,e,i){"use strict";var n=i("5530"),s=(i("a9e3"),i("713a"));e["a"]=s["a"].extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({"v-list-item__avatar--horizontal":this.horizontal},s["a"].options.computed.classes.call(this)),{},{"v-avatar--tile":this.tile||this.horizontal})}},render:function(t){var e=s["a"].options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}})},8547:function(t,e,i){"use strict";var n=i("2b0e"),s=i("80d2");e["a"]=n["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:s["j"]}}})},"899c":function(t,e,i){},9152:function(t,e,i){"use strict";i("9430")},9430:function(t,e,i){},c473:function(t,e,i){"use strict";var n=i("5530"),s=i("2f62"),a={methods:Object(n["a"])(Object(n["a"])({},Object(s["c"])("snack",["SET_SNACK","SET_COLOR","SET_TEXT","SET_LINE","SET_TIMEOUT"])),{},{openSnack:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.color,n=void 0===i?"error":i,s=e.timeout,a=void 0===s?3e3:s,o=e.multiline,r=void 0!==o&&o;this.SET_SNACK(!0),this.SET_TIMEOUT(a),this.SET_LINE(r),this.SET_TEXT(t),this.SET_COLOR(n)},openSuccessSnack:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.color,n=void 0===i?"success":i,s=e.timeout,a=void 0===s?3e3:s,o=e.multiline,r=void 0!==o&&o;this.SET_SNACK(!0),this.SET_TIMEOUT(a),this.SET_LINE(r),this.SET_TEXT(t),this.SET_COLOR(n)}})};e["a"]=a},c607:function(t,e,i){var n=i("da84"),s=i("83ab"),a=i("fce3"),o=i("c6b6"),r=i("9bf2").f,c=i("69f3").get,l=RegExp.prototype,u=n.TypeError;s&&a&&r(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===o(this))return!!c(this).dotAll;throw u("Incompatible receiver, RegExp required")}}})},db42:function(t,e,i){},e707:function(t,e,i){"use strict";i("a9e3"),i("caad"),i("2532");var n=i("5530"),s=(i("3c93"),i("a9ad")),a=i("7560"),o=i("f2e7"),r=i("58df"),c=Object(r["a"])(s["a"],a["a"],o["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(n["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),l=c,u=i("80d2"),d=i("2b0e");e["a"]=d["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new l({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(u["r"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(u["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[u["u"].up,u["u"].pageup],i=[u["u"].down,u["u"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var i,n,s=e.shiftKey||e.deltaX?"x":"y",a="y"===s?e.deltaY:e.deltaX||e.deltaY;"y"===s?(i=0===t.scrollTop,n=t.scrollTop+t.clientHeight===t.scrollHeight):(i=0===t.scrollLeft,n=t.scrollLeft+t.clientWidth===t.scrollWidth);var o=a<0,r=a>0;return!(i||!o)||(!(n||!r)||!(!i&&!n)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=Object(u["f"])(t);if("keydown"===t.type&&e[0]===document.body){var i=this.$refs.dialog,n=window.getSelection().anchorNode;return!(i&&this.hasScrollbar(i)&&this.isInside(n,i))||!this.shouldScroll(i,t)}for(var s=0;s<e.length;s++){var a=e[s];if(a===document)return!0;if(a===document.documentElement)return!0;if(a===this.$refs.content)return!0;if(this.hasScrollbar(a))return!this.shouldScroll(a,t)}return!0},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(u["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})}}]);
//# sourceMappingURL=chunk-aa7417a6.b4d3179f.js.map