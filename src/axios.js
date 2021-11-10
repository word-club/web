import axios from "axios"
// import $helper from "@/helper"

const BACKEND_HOST = "http://localhost:8000"

const AXIOS = {
	setHeaders: function (contentType) {
		return axios.create({
			baseURL: `${BACKEND_HOST}/api/`,
			headers: {
				"Content-Type": contentType || "application/json",
				Accept: "*/*",
				Authorization: "Token b577d1dd0f62a2d7a2baacc72965167caa4bf24e"
			}
		})
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
	async post(target, body, contentType) {
		const instance = await this.setHeaders(contentType)
		const response = await instance.post(target, body)
		return response.data
	},
	async put(target, body, contentType) {
		const instance = await this.setHeaders(contentType)
		const response = await instance.put(target, body)
		return response.data
	},
	async patch(target, body, contentType) {
		const instance = await this.setHeaders(contentType)
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
