import axios from "axios"
import $helper from "@/helper"
const BACKEND_HOST = process.env.VUE_APP_BACKEND_HOST

const AXIOS = {
	setHeaders: function (contentType) {
		return axios.create({
			baseURL: `${BACKEND_HOST}/api/`,
			headers: {
				"Content-Type": contentType || "application/json",
				Accept: "*/*",
				Authorization:
					typeof $helper.getAccessToken() !== "string"
						? null
						: `Token ${$helper.getAccessToken()}`
			}
		})
	},
	async get(target) {
		try {
			const instance = await this.setHeaders()
			const response = await instance.get(target)
			return response.data
		} catch (e) {
			throw e
		}
	},
	async getWithPayload(target, payload) {
		try {
			const instance = await this.setHeaders()
			const response = await instance.get(target, { params: payload })
			return response.data
		} catch (e) {
			throw e
		}
	},
	async post(target, body, contentType) {
		try {
			const instance = await this.setHeaders(contentType)
			const response = await instance.post(target, body)
			return response.data
		} catch (e) {
			throw e
		}
	},
	async put(target, body, contentType) {
		try {
			const instance = await this.setHeaders(contentType)
			const response = await instance.put(target, body)
			return response.data
		} catch (e) {
			throw e
		}
	},
	async patch(target, body, contentType) {
		try {
			const instance = await this.setHeaders(contentType)
			const response = await instance.patch(target, body)
			return response.data
		} catch (e) {
			throw e
		}
	},
	async delete(target) {
		try {
			const instance = await this.setHeaders()
			const response = await instance.delete(target)
			return response.data
		} catch (e) {
			throw e
		}
	}
}

export default AXIOS
