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

Vue.prototype.$axios = AXIOS
Vue.prototype.$moment = moment
Vue.prototype.$helper = helper
Vue.prototype.$urls = require("@/urls.json")



new Vue({
	router,
	store,
	vuetify,
	render: function (h) { return h(App) }
}).$mount("#app")
