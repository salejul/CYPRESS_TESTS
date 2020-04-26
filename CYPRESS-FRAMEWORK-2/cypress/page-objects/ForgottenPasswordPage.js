import BasePage from "./BasePage";

export default class ForgottenPasswordPage extends BasePage {

    static validateSuccessfullyLoadedForgottenPasswordPage() {
        cy.url().should('include', 'forgot-password.html')
        cy.title().should('include', 'Zero - Forgotten Password')
        cy.get('h3').should('be.visible')
        cy.get('#user_email').should('be.visible')
    }

    static enterEmail(email) {
        cy.get('#user_email').type(email)
    }

    static sendAndVerifySuccessfullySentEmail(email) {
        cy.get('input[type="submit"]').click()
        cy.url().should('include', 'forgotten-password-send.html')
        cy.get('.offset3').should('contain.text', `Your password will be sent to the following email: ${email}`)
    }

}