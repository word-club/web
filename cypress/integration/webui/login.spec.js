describe("Login feature", () => {
	before(() => {
		cy.intercept("POST", "https://wordclub.foodswipe.com.np/api/login").as("login");
	})
	it("should display the login page", () => {
		cy.visit("/");
		cy.get('.login-btn')
			.should("be.visible")
			.click()
			cy.get('.auth-card')
				.should("be.visible")
			cy.contains("Login to WordClub")
		cy.get('#username-field')
			.should('be.visible')
			.find('input')
			.type('admin')
		cy.get('#password-field')
			.should('be.visible')
			.find('input')
			.type('admin')
		cy.get('#submit-login').click()
		cy.wait("@login")
		cy.get('.auth-card')
			.should("not.exist")
	})
})
