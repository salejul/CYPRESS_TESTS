import BasePage from "./BasePage";

export default class LoginPage extends BasePage {

    static verifySuccessfullyLoadedLoginPage() {
        cy.url().should('include', 'login.html')
        cy.title().should('include', 'Zero - Log in')
        cy.get('h3').should('contain.text', 'Log in to ZeroBank')
        cy.get('#login_form').should('be.visible')
    }

    static enterLoginCredentials(username, password) {
        cy.get('#user_login').type(username)
        cy.get('#user_password').type(password)
        cy.get('#user_remember_me').click()
    }

    static clickForgottenPasswordLink() {
        cy.contains('Forgot your password ?').click()
    }

    static submitLoginForm() {
        cy.get('input[type="submit"]').click()
    }

    static displayErrorMessage() {
        cy.get('.alert').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
    }

    static successfulLogin() {
        cy.url().should('include', 'account-summary.html')
        cy.get('.offset2 ').should('be.visible')
    }
}