describe("Profile Avatar (Correct Usage)", () => {
	let expectedUser
	before(() => {
		cy.interceptFilter()
		cy.fixture("loginResponse")
			.then(data => {
				expectedUser = data.user
				cy.mockLogin(data)
			})
		cy.visit("/")
		cy.wait("@list")
	})
	it("should set capitalized first letter of username on profile avatar", () => {
		let avatarTextContent = null
		let hasClassTextUppercase = null

		cy.get(".profile-avatar") // added to the command queue
			.should("be.visible") // pushed to the queue
			.find(".profile-avatar__username") // queued
			.then($span => {
				avatarTextContent = $span.text() // queued after parent .then
				hasClassTextUppercase = $span.hasClass("text-uppercase") // queued after parent .then
			})

		// this is a normal javascript expression
		// it will execute before the chain placed above
		// it will fail as "expectedUser" is still undefined
		const expectedText = expectedUser.username[0]
		// the following code will never run
		expect(avatarTextContent).to.equal(expectedText)
		expect(hasClassTextUppercase).to.be.true
	})

	// Ok, the test function has finished executing...
	// Test runner has queued all of these commands and now
	// It will begin running them in order!
})
