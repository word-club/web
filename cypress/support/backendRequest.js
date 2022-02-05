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
	cy.request({
		method: method,
		url: backendUrl + url,
		headers: {
			Authorization: "Token 46a3fc00d15b90c5dffb42e9de9de0876e90649a"
		}, body: body
	}).as(as)
})
