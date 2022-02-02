describe("Login feature", () => {
	before(() => {

	})
	it("should display the login page", () => {
		cy.visit("/");
		cy.get('.login-btn')
			.should("be.visible")
			.click()
		cy.get('#username-field')
			.should('be.visible')
			.find('input')
			.type('admin')
		cy.get('#password-field')
			.should('be.visible')
			.find('input')
			.type('admin')
		cy.get('#submit-login')
	})
})
