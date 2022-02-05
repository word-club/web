describe("Filter with skip", () => {
	it("should execute", () => {
		cy.log("hello there!")
	})
	it("should execute too", () => {
		cy.log("how you doing?")
	})
	it.skip("should not execute", () => {
		cy.log("i will be skipped.")
	})
})
