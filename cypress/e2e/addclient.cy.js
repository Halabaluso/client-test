// https://on.cypress.io/api


describe("Sing In works fine", () => {
    it("Open modal of form", () => {
        cy.visit("/")
        cy.get("#action").click()
        cy.get("#newclientheader").click()
        cy.get("#my_modal_1")
        cy.log("Modal is open")
    })

    it("Modal have a form with a submit", () => {
        cy.get("#signin").get("#addclientaction")
    })

    it("Take an error with anything is typing", () => {
        cy.get("#signin").get("#addclientaction").click()
        cy.contains("p", "Campos vacíos o demasiado cortos.")
    })

    it("Form work when user and password is wrong", () => {
        cy.get("#nameclient").type("Test")
        cy.get("#lastnameclient").type("Test Test")
        cy.get("#numberclient").type(678908909)
        cy.get("#addressclient").type("Test Address")
        cy.get("#signin").get("#addclientaction").click()
        cy.contains("p", "Cliente nuevo añadido.")
    })
})
