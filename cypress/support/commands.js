Cypress.Commands.add("deleteUserIfPresent", (username) => {
	cy.backendRequest({
		url: `user/${username}/`,
		failOnStatusCode: false,
		as: 'searchAlice'
	})
	cy.get("@searchAlice").then(response => {
		if (response.status === 200) {
			cy.adminRequest({
				method: "DELETE",
				url: `users/${response.body.id}/`,
			})
		}
	})
})

Cypress.Commands.add("createUser", ({
	username = 'alice',
	password = "XYBV123456789!@#",
	first_name = "Alice",
	last_name = "Hansen",
	profile = { birth_date: "2000-01-01" }
} = {}) => {
	cy.backendRequest({
		method: "POST",
		url: "register/",
		body: {
			username: username,
			password: password,
			first_name: first_name,
			last_name: last_name,
			profile: profile
		},
		as: 'registerAlice'
	})
})
