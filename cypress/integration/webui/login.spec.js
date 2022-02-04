describe("Login feature", () => {
	const actor = {
		first_name: "Alice",
		username: "alice",
		password: "XYBV123456789!@#",
	}
	before(() => {
		cy.intercept("POST", Cypress.env("BACKEND_URL") + "login/")
			.as("login")
		// cypress custom commands
		// delete user to be created before hand if already present
		cy.deleteUserIfPresent(actor.username)
		// create user to be used in tests
		cy.createUser(actor)
	})
	it("should display the login page", () => {
		cy.visit("/")
		cy.get(".login-btn")
			.should("be.visible")
			.click()
		cy.get(".auth-card")
			.should("be.visible")
		cy.contains("Login to WordClub")
		cy.get("#username-field")
			.should("be.visible")
			.find("input")
			.type(actor.username)
		cy.get("#password-field")
			.should("be.visible")
			.find("input")
			.type(actor.password)
		cy.get("#submit-login").click()
		cy.wait("@login")
		cy.get(".auth-card")
			.should("not.be.visible")
		cy.get(".v-snack__content")
			.should("be.visible")
			.contains(`Welcome ${actor.first_name}!`)
		cy.get(".v-snack__content", { timeout: 5000 })
			.should("not.be.visible")
	})
})
