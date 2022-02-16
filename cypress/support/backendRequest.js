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
			Authorization: "Token e8bbf801b2a5549769b12e18ef1a025200ef4fa2"
		}, body: body
	}).as(as)
})
