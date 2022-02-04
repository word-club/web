const backendUrl = Cypress.env("BACKEND_URL")

Cypress.Commands.add("backendRequest", ({
	method = "GET",
	url = "",
	body = null,
	headers = {},
	failOnStatusCode = true,
	as = "backendRequest"
} = {}) => {
	return cy.request({
		method: method,
		url: backendUrl + url,
		body: body,
		headers: headers,
		failOnStatusCode: failOnStatusCode
	}).as(as)
})


Cypress.Commands.add("adminRequest", ({
	method = "GET",
	url = "",
	body = null,
	as = "adminRequest"
} = {}) => {
	cy.request("POST", backendUrl + "login/", {
		username: "admin",
		password: "admin"
	}).its("body.token").then(token => {
		cy.request({
			method: method,
			url: backendUrl + url,
			headers: {
				Authorization: "Token " + token
			}
		}).as(as)
	})
})