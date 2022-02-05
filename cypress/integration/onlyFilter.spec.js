describe("Filter with only", () => {
	it.only("should execute", () => {
		cy.log("this is the only test that will execute.")
	})
	it("should not execute", () => {
		cy.log("i will not be executed.")
	})
	it("should not execute either", () => {
		cy.log("i will not be executed.")
	})
})
