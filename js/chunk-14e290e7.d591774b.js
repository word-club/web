(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14e290e7"],{"2bfd":function(e,t,n){},"98ad":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-autocomplete",{attrs:{"search-input":e.search,value:e.value,attach:"",items:e.users,loading:e.isLoading,outlined:"",dense:"",chips:"","small-chips":"",clearable:"","deletable-chips":"","item-value":"id","item-text":"username",color:e.color,"hide-details":"auto",multiple:e.multiple,"background-color":e.bg,"prepend-inner-icon":e.icon,"error-messages":e.getErrorMessage,label:e.label.toUpperCase(),placeholder:e.placeholder},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t},input:function(t){return e.$emit("input",t)},change:function(t){return e.$emit("change",t)}}})},s=[],a=(n("d3b7"),n("ecb7")),l=n("c473"),r={name:"UserSelect",mixins:[a["a"],l["a"]],props:{bg:{type:String,default:"white"},url:{type:String,required:!0},icon:{type:String,default:"mdi-account"},label:{type:String,default:"User"},value:{required:!0},color:{type:String,default:"primary"},errors:{type:Object,default:function(){}},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:"Start typing"}},emits:["input","change"],data:function(){return{name:"user",isLoading:!1,search:null,users:[]}},watch:{search:function(e){var t=this;this.isLoading||(this.isLoading=!0,this.$axios.get(this.url,{search:e}).then((function(e){t.users=e})).catch((function(){t.openSnack("Something went wrong.")})).finally((function(){return t.isLoading=!1})))}}},c=r,o=n("2877"),u=n("6544"),h=n.n(u),d=n("c6a6"),p=Object(o["a"])(c,i,s,!1,null,null,null);t["default"]=p.exports;h()(p,{VAutocomplete:d["a"]})},c473:function(e,t,n){"use strict";var i=n("5530"),s=n("2f62"),a={methods:Object(i["a"])(Object(i["a"])({},Object(s["c"])("snack",["SET_SNACK","SET_COLOR","SET_TEXT","SET_LINE","SET_TIMEOUT"])),{},{openSnack:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.color,i=void 0===n?"error":n,s=t.timeout,a=void 0===s?3e3:s,l=t.multiline,r=void 0!==l&&l;this.SET_SNACK(!0),this.SET_TIMEOUT(a),this.SET_LINE(r),this.SET_TEXT(e),this.SET_COLOR(i)},openSuccessSnack:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.color,i=void 0===n?"success":n,s=t.timeout,a=void 0===s?3e3:s,l=t.multiline,r=void 0!==l&&l;this.SET_SNACK(!0),this.SET_TIMEOUT(a),this.SET_LINE(r),this.SET_TEXT(e),this.SET_COLOR(i)}})};t["a"]=a},c6a6:function(e,t,n){"use strict";var i=n("5530"),s=(n("d81d"),n("d3b7"),n("4de4"),n("498a"),n("7db0"),n("c740"),n("caad"),n("2532"),n("2bfd"),n("b974")),a=n("8654"),l=n("d9f7"),r=n("80d2"),c=Object(i["a"])(Object(i["a"])({},s["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t["a"]=s["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:s["a"].options.props.menuProps.type,default:function(){return c}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(r["s"])(t,e.itemText),i=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),i)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=s["a"].options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),Object(i["a"])(Object(i["a"])({},c),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(t){return e.valueComparator(e.getValue(t),e.getValue(e.internalValue))}))},listData:function(){var e=s["a"].options.computed.listData.call(this);return e.props=Object(i["a"])(Object(i["a"])({},e.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var i=t[this.$refs.menu.listIndex];i?this.setMenuIndex(e.findIndex((function(e){return e===i}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===r["z"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===r["z"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==r["z"].backspace&&e!==r["z"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var i=this.selectedItems.length,s=e!==i-1?e:e-1,a=this.selectedItems[s];a?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=s}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,s["a"].options.methods.clearableCallback.call(this)},genInput:function(){var e=a["a"].options.methods.genInput.call(this);return e.data=Object(l["a"])(e.data,{attrs:{"aria-activedescendant":Object(r["q"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(r["q"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot:function(){var e=s["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections:function(){return this.hasSlot||this.multiple?s["a"].options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[r["z"].home,r["z"].end].includes(t)||s["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){s["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){s["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){s["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var i=this.selectedItems[this.selectedIndex],s=this.getText(i);null==(t=e.clipboardData)||t.setData("text/plain",s),null==(n=e.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",s),e.preventDefault()}}}})},ecb7:function(e,t,n){"use strict";n("b0c0");var i=n("c473"),s={mixins:[i["a"]],computed:{getErrorMessage:function(){return this.errors?this.errors[this.name]?this.errors[this.name][0]:this.errors["non_field_errors"]?void this.openSnack(this.errors["non_field_errors"][0]):null:null}}};t["a"]=s}}]);
//# sourceMappingURL=chunk-14e290e7.d591774b.js.map