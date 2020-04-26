const URL = 'http://zero.webappsecurity.com/login.html';
const USER_NAME = '#user_login'
const USER_PASSWORD = '#user_password'
const SUBMIT_BUTTON = 'input[name="submit"]'
const ERROR_MESSAGE = '.alert-error'


class LoginPage {
    static visitLoginPage() {
        cy.visit(URL)
    }

    static fillUserName(username) {
        cy.get(USER_NAME).type(username)
    }

    static fillPassword(password) {
        cy.get(USER_PASSWORD).type(password)
    }

    static submitForm() {
        cy.get(SUBMIT_BUTTON).click()
    }

    static shouldDisplayErrorMessage() {
        cy.get(ERROR_MESSAGE).contains('Login and/or password are wrong')
    }
}

export default LoginPage