describe("Profile Avatar (Correct Usage)", () => {
	let expectedUser
	before(() => {
		cy.interceptFilter()
		cy.fixture("loginResponse")
			.then(data => {
				expectedUser = data.user
				cy.mockLogin(data)
				cy.wait("@list")
			})
	})
	it("should set capitalized first letter of username on profile avatar", () => {
		let avatarTextContent = null
		let hasClassTextUppercase = null

		cy.get(".profile-avatar") // added to the command queue
			.should("be.visible") // pushed to the queue
			.find(".profile-avatar__username") // queued
			.then($span => {
				// queued after parent .then
				avatarTextContent = $span.text()
				hasClassTextUppercase = $span.hasClass("text-uppercase")
				const expectedText = expectedUser.username[0]
				expect(avatarTextContent).to.equal(expectedText)
				expect(hasClassTextUppercase).to.be.true
			})
	})

	// Ok, the test function has finished executing...
	// Test runner has queued all of these commands and now
	// It will begin running them in order!
})
