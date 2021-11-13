import Vue from "vue"
import App from "./App"
import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"
import "@mdi/font/css/materialdesignicons.css"
import moment from "moment"

import AXIOS from "@/axios"
import helper from "@/helper"

Vue.config.productionTip = false

Vue.use(moment)

function generateFullLink(link) {
	if (link.startsWith("http://localhost:8000")) return link
	return "http://localhost:8000" + link
}

Vue.prototype.$axios = AXIOS
Vue.prototype.$moment = moment
Vue.prototype.$helper = helper
Vue.prototype.$urls = require("@/urls.json")
Vue.prototype.$util = require("util")
Vue.prototype.$link = generateFullLink


Vue.component("HomeSmallFooter", () => import("@/components/footer/HomeSmallFooter"))


new Vue({
	router,
	store,
	vuetify,
	render: function (h) { return h(App) }
}).$mount("#app")
