(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c342cffa","chunk-2d0e6c6b","chunk-2d0e6c6b"],{"0fd9":function(t,e,n){"use strict";var r=n("ade3"),a=n("5530"),i=(n("d3b7"),n("caad"),n("2532"),n("99af"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("3ca3"),n("ddb0"),n("159b"),n("4b85"),n("2b0e")),o=n("d9f7"),c=n("80d2"),u=["sm","md","lg","xl"],s=["start","end","center"];function l(t,e){return u.reduce((function(n,r){return n[t+Object(c["H"])(r)]=e(),n}),{})}var d=function(t){return[].concat(s,["baseline","stretch"]).includes(t)},f=l("align",(function(){return{type:String,default:null,validator:d}})),v=function(t){return[].concat(s,["space-between","space-around"]).includes(t)},b=l("justify",(function(){return{type:String,default:null,validator:v}})),p=function(t){return[].concat(s,["space-between","space-around","stretch"]).includes(t)},g=l("alignContent",(function(){return{type:String,default:null,validator:p}})),h={align:Object.keys(f),justify:Object.keys(b),alignContent:Object.keys(g)},y={align:"align",justify:"justify",alignContent:"align-content"};function j(t,e,n){var r=y[t];if(null!=n){if(e){var a=e.replace(t,"");r+="-".concat(a)}return r+="-".concat(n),r.toLowerCase()}}var O=new Map;e["a"]=i["a"].extend({name:"v-row",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:v}},b),{},{alignContent:{type:String,default:null,validator:p}},g),render:function(t,e){var n=e.props,a=e.data,i=e.children,c="";for(var u in n)c+=String(n[u]);var s=O.get(c);return s||function(){var t,e;for(e in s=[],h)h[e].forEach((function(t){var r=n[t],a=j(e,t,r);a&&s.push(a)}));s.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r["a"])(t,"align-".concat(n.align),n.align),Object(r["a"])(t,"justify-".concat(n.justify),n.justify),Object(r["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),O.set(c,s)}(),t(n.tag,Object(o["a"])(a,{staticClass:"row",class:s}),i)}})},"4b85":function(t,e,n){},"4ec9":function(t,e,n){"use strict";var r=n("6d61"),a=n("6566");r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),a)},"62ad":function(t,e,n){"use strict";var r=n("ade3"),a=n("5530"),i=(n("d3b7"),n("a9e3"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("3ca3"),n("ddb0"),n("caad"),n("159b"),n("2ca0"),n("4b85"),n("2b0e")),o=n("d9f7"),c=n("80d2"),u=["sm","md","lg","xl"],s=function(){return u.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),l=function(){return u.reduce((function(t,e){return t["offset"+Object(c["H"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return u.reduce((function(t,e){return t["order"+Object(c["H"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(s),offset:Object.keys(l),order:Object.keys(d)};function v(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var a=e.replace(t,"");r+="-".concat(a)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n),r.toLowerCase()):r.toLowerCase()}}var b=new Map;e["a"]=i["a"].extend({name:"v-col",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({cols:{type:[Boolean,String,Number],default:!1}},s),{},{offset:{type:[String,Number],default:null}},l),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,a=e.data,i=e.children,c=(e.parent,"");for(var u in n)c+=String(n[u]);var s=b.get(c);return s||function(){var t,e;for(e in s=[],f)f[e].forEach((function(t){var r=n[t],a=v(e,t,r);a&&s.push(a)}));var a=s.some((function(t){return t.startsWith("col-")}));s.push((t={col:!a||!n.cols},Object(r["a"])(t,"col-".concat(n.cols),n.cols),Object(r["a"])(t,"offset-".concat(n.offset),n.offset),Object(r["a"])(t,"order-".concat(n.order),n.order),Object(r["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),b.set(c,s)}(),t(n.tag,Object(o["a"])(a,{class:s}),i)}})},6566:function(t,e,n){"use strict";var r=n("9bf2").f,a=n("7c73"),i=n("e2cc"),o=n("0366"),c=n("19aa"),u=n("2266"),s=n("7dd0"),l=n("2626"),d=n("83ab"),f=n("f183").fastKey,v=n("69f3"),b=v.set,p=v.getterFor;t.exports={getConstructor:function(t,e,n,s){var l=t((function(t,r){c(t,v),b(t,{type:e,index:a(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=r&&u(r,t[s],{that:t,AS_ENTRIES:n})})),v=l.prototype,g=p(e),h=function(t,e,n){var r,a,i=g(t),o=y(t,e);return o?o.value=n:(i.last=o={index:a=f(e,!0),key:e,value:n,previous:r=i.last,next:void 0,removed:!1},i.first||(i.first=o),r&&(r.next=o),d?i.size++:t.size++,"F"!==a&&(i.index[a]=o)),t},y=function(t,e){var n,r=g(t),a=f(e);if("F"!==a)return r.index[a];for(n=r.first;n;n=n.next)if(n.key==e)return n};return i(v,{clear:function(){var t=this,e=g(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=g(e),r=y(e,t);if(r){var a=r.next,i=r.previous;delete n.index[r.index],r.removed=!0,i&&(i.next=a),a&&(a.previous=i),n.first==r&&(n.first=a),n.last==r&&(n.last=i),d?n.size--:e.size--}return!!r},forEach:function(t){var e,n=g(this),r=o(t,arguments.length>1?arguments[1]:void 0);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!y(this,t)}}),i(v,n?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return h(this,0===t?0:t,e)}}:{add:function(t){return h(this,t=0===t?0:t,t)}}),d&&r(v,"size",{get:function(){return g(this).size}}),l},setStrong:function(t,e,n){var r=e+" Iterator",a=p(e),i=p(r);s(t,e,(function(t,e){b(this,{type:r,target:t,state:a(t),kind:e,last:void 0})}),(function(){var t=i(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},"6d61":function(t,e,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("e330"),o=n("94ca"),c=n("6eeb"),u=n("f183"),s=n("2266"),l=n("19aa"),d=n("1626"),f=n("861d"),v=n("d039"),b=n("1c7e"),p=n("d44e"),g=n("7156");t.exports=function(t,e,n){var h=-1!==t.indexOf("Map"),y=-1!==t.indexOf("Weak"),j=h?"set":"add",O=a[t],x=O&&O.prototype,w=O,m={},S=function(t){var e=i(x[t]);c(x,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(y&&!f(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return y&&!f(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!f(t))&&e(this,0===t?0:t)}:function(t,n){return e(this,0===t?0:t,n),this})},_=o(t,!d(O)||!(y||x.forEach&&!v((function(){(new O).entries().next()}))));if(_)w=n.getConstructor(e,t,h,j),u.enable();else if(o(t,!0)){var C=new w,k=C[j](y?{}:-0,1)!=C,z=v((function(){C.has(1)})),E=b((function(t){new O(t)})),N=!y&&v((function(){var t=new O,e=5;while(e--)t[j](e,e);return!t.has(-0)}));E||(w=e((function(t,e){l(t,x);var n=g(new O,t,w);return void 0!=e&&s(e,n[j],{that:n,AS_ENTRIES:h}),n})),w.prototype=x,x.constructor=w),(z||N)&&(S("delete"),S("has"),h&&S("get")),(N||k)&&S(j),y&&x.clear&&delete x.clear}return m[t]=w,r({global:!0,forced:w!=O},m),p(w,t),y||n.setStrong(w,t,h),w}},"99d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return u}));var r=n("b0af"),a=n("80d2"),i=Object(a["j"])("v-card__actions"),o=Object(a["j"])("v-card__subtitle"),c=Object(a["j"])("v-card__text"),u=Object(a["j"])("v-card__title");r["a"]},e64e:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{outlined:""}},[n("v-card-text",{staticClass:"pa-2"},[n("v-row",[n("v-col",{staticClass:"footer-items",attrs:{cols:"6"}},[n("div",[t._v("Help")]),n("div",[t._v("WordClub Coins")]),n("div",[t._v("WordClub Premium")]),n("div",[t._v("WordClub Gifts")])]),n("v-col",{staticClass:"footer-items",attrs:{cols:"6"}},[n("div",[t._v("About")]),n("div",[t._v("Careers")]),n("div",[t._v("Press")]),n("div",[t._v("Advertise")]),n("div",[t._v("Blog")]),n("div",[t._v("Terms")]),n("div",[t._v("Content Policy")]),n("div",[t._v("Privacy Policy")]),n("div",[t._v("Mod Policy")])]),n("v-col",{attrs:{cols:"12"}},[t._v(" WordClub Inc © 2021. All rights reserved ")])],1)],1)],1)},a=[],i={name:"HomeSmallFooter"},o=i,c=n("2877"),u=n("6544"),s=n.n(u),l=n("b0af"),d=n("99d9"),f=n("62ad"),v=n("0fd9"),b=Object(c["a"])(o,r,a,!1,null,"95a6f5c4",null);e["default"]=b.exports;s()(b,{VCard:l["a"],VCardText:d["c"],VCol:f["a"],VRow:v["a"]})}}]);
//# sourceMappingURL=chunk-c342cffa.3cbbfb9c.js.map