// https://on.cypress.io/api


describe("Sing In works fine", () => {
    it("Form have user and password", () => {
        cy.visit("/")
        cy.get("#username")
        cy.get("#userpassword")
    })

    it("Form have an actio button with id", () => {
        cy.visit("/")
        cy.get("#signin").get("button").get("#action")
    })

    it("Form button work when anythin is typing", () => {
        cy.visit("/")
        cy.get("#signin").get("button").get("#action").click()
        cy.get("p").contains("Campos vacios o demasiado cortos.")
    })

    it("Form work when user and password is wrong", () => {
        cy.visit("/")
        cy.get("#username").type("asasdasdasdasd")
        cy.get("#userpassword").type("asdasdasdasd")
        cy.get("#signin").get("button").get("#action").click()
        cy.get("p").contains("Usuario no encontrado.")
    })
})
