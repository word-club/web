import Vue from "vue"
import App from "./App"
import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"
import "@mdi/font/css/materialdesignicons.css"
import moment from "moment"
import AXIOS from "@/axios"
import helper from "@/helper"
import {generateFullLink} from "@/utils.js";

Vue.config.productionTip = false

Vue.use(moment)

Vue.prototype.$axios = AXIOS
Vue.prototype.$moment = moment
Vue.prototype.$helper = helper
Vue.prototype.$urls = require("@/urls.json")
Vue.prototype.$util = require("util")
Vue.prototype.$link = generateFullLink


Vue.component("HomeSmallFooter", () => import("@/components/footer/HomeSmallFooter"))
Vue.component("TextField", () => import("@/components/form/TextField"))
Vue.component("TextArea", () => import("@/components/form/TextArea"))
Vue.component("CheckBox", () => import("@/components/form/CheckBox"))
Vue.component("CommunitySelect", () => import("@/components/form/CommunitySelect"))
Vue.component("DatePicker", () => import("@/components/form/DatePicker"))
Vue.component("TagField", () => import("@/components/form/TagField"))
Vue.component("UserSelect", () => import("@/components/form/UserSelect"))
Vue.component("FileField", () => import("@/components/form/FileField"))
Vue.component("SelectField", () => import("@/components/form/SelectField"))
Vue.component("CardImg", () => import("@/components/utils/CardImage"))
Vue.component("HotBar", () => import("@/views/home/user/components/HotBar"))
Vue.component("CommentInstance", () => import("@/views/home/components/CommentInstance"))
Vue.component("PublicationInstance", () => import("@/views/home/components/PublicationInstance"))

new Vue({
	router,
	store,
	vuetify,
	render: function (h) { return h(App) }
}).$mount("#app")
