/// <reference types="cypress" />

describe("Trying out the new module", () => {

    it("Should open the new module webpage", () => {
        cy.viewport(1920, 1080)
        cy.visit("https://demo.nopcommerce.com/")
        cy.get(".menu-toggle").click()
        cy.get(".mobile > :nth-child(1) > .sublist-toggle").click()
        cy.get(".mobile > :nth-child(1) > .sublist > :nth-child(2) > a").click()
        cy.get(':nth-child(2) > .product-item > .picture > a > img').click()
        cy.get(':nth-child(4) > .product-item > .picture > a > img').click()
        cy.get('.short-description').should('have.text', 'Lenovo Thinkpad X1 Carbon Touch Intel Core i7 14 Ultrabook')
    })
})