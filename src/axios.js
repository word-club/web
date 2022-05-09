import axios from "axios"
import $helper from "@/helper.js";



const BASE_URL = $helper.getBackendUrl()


const AXIOS = {
	setHeaders: function (headers = {}) {
		const HEADERS = {
			"Content-Type": "application/json",
			Accept: "application/json",
			...headers,
		}
		if (typeof $helper.getAccessToken() === "string") {
			HEADERS["Authorization"] = `Token ${$helper.getAccessToken()}`
		}
		return axios.create({
			baseURL: `${BASE_URL}/api/`,
			headers: HEADERS
		})
	},
	send(method, url, data = {}, params = {}) {
		const opts = {
			method: method,
			url: `${BASE_URL}/api/${url}`,
		}
		if (data) opts.data =  data
		if (params) opts.params = params

		opts.headers = {
			"Content-Type": "application/json",
			Accept: "application/json",
		}
		if (typeof $helper.getAccessToken() === "string") {
			opts.headers["Authorization"] = `Token ${$helper.getAccessToken()}`
		}

		return axios(opts)
	},
	async get(target) {
		const instance = await this.setHeaders()
		const response = await instance.get(target)
		return response.data
	},
	async getWithPayload(target, payload) {
		const instance = await this.setHeaders()
		const response = await instance.get(target, {params: payload})
		return response.data
	},
	async post(target, body, headers) {
		const instance = await this.setHeaders(headers)
		const response = await instance.post(target, body)
		return response.data
	},
	async patch(target, body, headers) {
		const instance = await this.setHeaders(headers)
		const response = await instance.patch(target, body)
		return response.data
	},
	async delete(target) {
		const instance = await this.setHeaders()
		const response = await instance.delete(target)
		return response.data
	}
}

export default AXIOS
