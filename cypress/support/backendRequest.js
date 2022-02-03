const backendUrl = Cypress.env("BACKEND_URL")

Cypress.Commands.add("backendRequest", ({
	method = "GET",
	url = "",
	body = null,
	headers = {},
	failOnStatusCode = true,
	as = 'backendRequest'
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
	method = 'GET',
	url = '',
	body = null,
	as = 'adminRequest'
} = {}) => {
	if (!Cypress.env('admin_token')) {
		cy.request("POST", backendUrl + "login/", {
			username: "admin",
			password: "admin"
		}).then(response => {
			Cypress.env('admin_token', response.body.token)
		})
	}
	return cy.request({
		method: method,
		url: backendUrl + url,
		headers: {
			Authorization: "Token " + Cypress.env('admin_token')
		}
	}).as(as)
})
