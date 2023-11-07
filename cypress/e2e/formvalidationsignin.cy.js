const url = "/"
const idForm = "#signin"

describe("Test form", () => {
    it("Have an h1 tittle, h1 ID and an actions div with ID", () => {
        cy.visit(url)
        cy.get(idForm).get("form").get("h1")
        cy.get(idForm).get("form").get("#actions")
    })
})