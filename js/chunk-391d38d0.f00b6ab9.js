(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-391d38d0","chunk-b28166d2","chunk-5c045b8d","chunk-2d0e6c6b","chunk-2d0e6c6b"],{"132d":function(t,e,i){"use strict";var s,n=i("5530"),a=(i("c96a"),i("d3b7"),i("caad"),i("2532"),i("ac1f"),i("00b4"),i("a9e3"),i("498a"),i("7db0"),i("fb6a"),i("4804"),i("7e2b")),r=i("a9ad"),o=i("af2b"),l=i("7560"),c=i("80d2"),u=i("2b0e"),d=i("58df");function h(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}function f(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(s||(s={}));var v=Object(d["a"])(a["a"],r["a"],o["a"],l["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(c["D"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(c["A"])(t).find((function(e){return t[e]}));return e&&s[e]||Object(c["h"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(n["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=Object(n["a"])(Object(n["a"])({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=Object(n["a"])(Object(n["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var i=[],s=this.getDefaultData(),n="material-icons",a=t.indexOf("-"),r=a<=-1;r?i.push(t):(n=t.slice(0,a),h(n)&&(n="")),s.class[n]=!0,s.class[t]=!r;var o=this.getSize();return o&&(s.style={fontSize:o}),this.applyColors(s),e(this.hasClickListener?"button":this.tag,s,i)},renderSvgIcon:function(t,e){var i={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},s=this.getSize();return s&&(i.style={fontSize:s,height:s,width:s}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",i,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var i={class:{"v-icon__component":!0}},s=this.getSize();s&&(i.style={fontSize:s,height:s,width:s}),this.applyColors(i);var n=t.component;return i.props=t.props,i.nativeOn=i.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(n,i)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?f(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=u["a"].extend({name:"v-icon",$_wrapperFor:v,functional:!0,render:function(t,e){var i=e.data,s=e.children,n="";return i.domProps&&(n=i.domProps.textContent||i.domProps.innerHTML||n,delete i.domProps.textContent,delete i.domProps.innerHTML),t(v,i,n?[n]:s)}})},3206:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var s=i("ade3"),n=(i("99af"),i("2b0e")),a=i("d9bd");function r(t,e){return function(){return Object(a["c"])("The ".concat(t," component must be used inside a ").concat(e))}}function o(t,e,i){var a=e&&i?{register:r(e,i),unregister:r(e,i)}:null;return n["a"].extend({name:"registrable-inject",inject:Object(s["a"])({},t,{default:a})})}},"3ad0":function(t,e,i){},4804:function(t,e,i){},"490a":function(t,e,i){"use strict";i("a9e3"),i("99af"),i("8d4f");var s=i("90a2"),n=i("a9ad"),a=i("80d2");e["a"]=n["a"].extend({name:"v-progress-circular",directives:{intersect:s["a"]},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20,isVisible:!0}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(a["h"])(this.calculatedSize),width:Object(a["h"])(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve:function(t,e,i){this.isVisible=i}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},"4e82c":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var s=i("ade3"),n=i("3206");function a(t,e,i){return Object(n["a"])(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?Object(s["a"])({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}a("itemGroup")},"61d2":function(t,e,i){},8336:function(t,e,i){"use strict";var s=i("53ca"),n=i("3835"),a=i("5530"),r=(i("c7cd"),i("a9e3"),i("d3b7"),i("caad"),i("e9c4"),i("86cc"),i("10d2")),o=i("490a"),l=o["a"],c=i("4e82c"),u=i("f2e7"),d=i("c995"),h=i("fe6c"),f=i("1c87"),v=i("af2b"),b=i("58df"),p=i("d9bd"),m=Object(b["a"])(r["a"],f["a"],h["a"],v["a"],Object(c["a"])("btnToggle"),Object(u["b"])("inputValue"));e["a"]=m.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({"v-btn":!0},f["a"].options.computed.classes.call(this)),{},{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses),this.groupClasses),this.elevationClasses),this.sizeableClasses)},computedElevation:function(){if(!this.disabled)return d["a"].options.computed.computedElevation.call(this)},computedRipple:function(){var t,e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg:function(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated:function(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return Object(a["a"])({},this.measurableStyles)}},created:function(){var t=this,e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((function(e){var i=Object(n["a"])(e,2),s=i[0],a=i[1];t.$attrs.hasOwnProperty(s)&&Object(p["a"])(s,a,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(l,{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],i=this.generateRouteLink(),n=i.tag,a=i.data,r=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===n&&(a.attrs.type=this.type,a.attrs.disabled=this.disabled),a.attrs.value=["string","number"].includes(Object(s["a"])(this.value))?this.value:JSON.stringify(this.value),t(n,this.disabled?a:r(this.color,a),e)}})},"86cc":function(t,e,i){},8860:function(t,e,i){"use strict";var s=i("b85c"),n=i("5530"),a=(i("0481"),i("4069"),i("c740"),i("a434"),i("3ad0"),i("8dd9"));e["a"]=a["a"].extend().extend({name:"v-list",provide:function(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:function(){return{groups:[]}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine})}},methods:{register:function(t){this.groups.push(t)},unregister:function(t){var e=this.groups.findIndex((function(e){return e._uid===t._uid}));e>-1&&this.groups.splice(e,1)},listClick:function(t){if(!this.expand){var e,i=Object(s["a"])(this.groups);try{for(i.s();!(e=i.n()).done;){var n=e.value;n.toggle(t)}}catch(a){i.e(a)}finally{i.f()}}}},render:function(t){var e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:Object(n["a"])({role:this.isInNav||this.isInMenu?void 0:"list"},this.attrs$)};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})},"8d4f":function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"d",(function(){return l}));var s=i("b0af"),n=i("80d2"),a=Object(n["j"])("v-card__actions"),r=Object(n["j"])("v-card__subtitle"),o=Object(n["j"])("v-card__text"),l=Object(n["j"])("v-card__title");s["a"]},"9d26":function(t,e,i){"use strict";var s=i("132d");e["a"]=s["a"]},"9d65":function(t,e,i){"use strict";var s=i("d9bd"),n=i("2b0e");e["a"]=n["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&Object(s["e"])("lazy",this)},methods:{showLazyContent:function(t){return this.hasContent&&t?t():[this.$createElement()]}}})},a434:function(t,e,i){"use strict";var s=i("23e7"),n=i("da84"),a=i("23cb"),r=i("5926"),o=i("07fa"),l=i("7b0b"),c=i("65f0"),u=i("8418"),d=i("1dde"),h=d("splice"),f=n.TypeError,v=Math.max,b=Math.min,p=9007199254740991,m="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!h},{splice:function(t,e){var i,s,n,d,h,g,x=l(this),C=o(x),O=a(t,C),y=arguments.length;if(0===y?i=s=0:1===y?(i=0,s=C-O):(i=y-2,s=b(v(r(e),0),C-O)),C+i-s>p)throw f(m);for(n=c(x,s),d=0;d<s;d++)h=O+d,h in x&&u(n,d,x[h]);if(n.length=s,i<s){for(d=O;d<C-s;d++)h=d+s,g=d+i,h in x?x[g]=x[h]:delete x[g];for(d=C;d>C-s+i;d--)delete x[d-1]}else if(i>s)for(d=C-s;d>O;d--)h=d+s-1,g=d+i-1,h in x?x[g]=x[h]:delete x[g];for(d=0;d<i;d++)x[d+O]=arguments[d+2];return x.length=C-s+i,n}})},af2b:function(t,e,i){"use strict";i("c96a");var s=i("2b0e");e["a"]=s["a"].extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},c740:function(t,e,i){"use strict";var s=i("23e7"),n=i("b727").findIndex,a=i("44d2"),r="findIndex",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),s({target:"Array",proto:!0,forced:o},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a(r)},c96a:function(t,e,i){"use strict";var s=i("23e7"),n=i("857a"),a=i("af03");s({target:"String",proto:!0,forced:a("small")},{small:function(){return n(this,"small","","")}})},da13:function(t,e,i){"use strict";var s=i("5530"),n=(i("61d2"),i("a9ad")),a=i("1c87"),r=i("4e82c"),o=i("7560"),l=i("f2e7"),c=i("5607"),u=i("80d2"),d=i("d9bd"),h=i("58df"),f=Object(h["a"])(n["a"],a["a"],o["a"],Object(r["a"])("listItemGroup"),Object(l["b"])("inputValue"));e["a"]=f.extend().extend({name:"v-list-item",directives:{Ripple:c["a"]},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default:function(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:function(){return{proxyClass:"v-list-item--active"}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-list-item":!0},a["a"].options.computed.classes.call(this)),{},{"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine},this.themeClasses)},isClickable:function(){return Boolean(a["a"].options.computed.isClickable.call(this)||this.listItemGroup)}},created:function(){this.$attrs.hasOwnProperty("avatar")&&Object(d["e"])("avatar",this)},methods:{click:function(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs:function(){var t=Object(s["a"])({"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1},this.$attrs);return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||"list-item-".concat(this._uid)):this.isInList&&(t.role="listitem")),t},toggle:function(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render:function(t){var e=this,i=this.generateRouteLink(),n=i.tag,a=i.data;a.attrs=Object(s["a"])(Object(s["a"])({},a.attrs),this.genAttrs()),a[this.to?"nativeOn":"on"]=Object(s["a"])(Object(s["a"])({},a[this.to?"nativeOn":"on"]),{},{keydown:function(t){t.keyCode===u["z"].enter&&e.click(t),e.$emit("keydown",t)}}),this.inactive&&(n="div"),this.inactive&&this.to&&(a.on=a.nativeOn,delete a.nativeOn);var r=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(n,this.isActive?this.setTextColor(this.color,a):a,r)}})},e827:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{outlined:""}},[i("v-list-item",{attrs:{"two-line":""}},[i("v-list-item-icon",[i("v-icon",{attrs:{color:"orange"}},[t._v(" mdi-apple-keyboard-command ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" WordClub Premium ")]),i("v-list-item-subtitle",{staticClass:"normal-whitespace"},[t._v(" The best WordClub experience, with monthly Coins ")])],1)],1),i("v-card-actions",[i("v-btn",{attrs:{depressed:"",dark:"",block:"",rounded:"",color:"orange"}},[t._v(" Try Now ")])],1)],1)},n=[],a={name:"TryWordClubPremium",props:{},data:function(){return{}},computed:{},methods:{}},r=a,o=i("2877"),l=i("6544"),c=i.n(l),u=i("8336"),d=i("b0af"),h=i("99d9"),f=i("132d"),v=i("da13"),b=i("5d23"),p=i("34c3"),m=Object(o["a"])(r,s,n,!1,null,"655d6c44",null);e["default"]=m.exports;c()(m,{VBtn:u["a"],VCard:d["a"],VCardActions:h["a"],VIcon:f["a"],VListItem:v["a"],VListItemContent:b["b"],VListItemIcon:p["a"],VListItemSubtitle:b["c"],VListItemTitle:b["d"]})},f2e7:function(t,e,i){"use strict";i.d(e,"b",(function(){return a}));var s=i("ade3"),n=i("2b0e");function a(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return n["a"].extend({name:"toggleable",model:{prop:e,event:i},props:Object(s["a"])({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},Object(s["a"])(t,e,(function(t){this.isActive=!!t})),Object(s["a"])(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(i,t)})),t)})}var r=a();e["a"]=r}}]);
//# sourceMappingURL=chunk-391d38d0.f00b6ab9.js.map