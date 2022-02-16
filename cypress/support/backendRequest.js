const backendUrl = Cypress.env("BACKEND_URL") + "/api/"

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
	cy.request({
		method: method,
		url: backendUrl + url,
		headers: {
			Authorization: "Token 187f36f6d5d9e31ef91e3804672f186e2dbe3d12"
		}, body: body
	}).as(as)
})
