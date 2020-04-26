import { URL, LOGIN_USERNAME, LOGIN_PASSWORD } from '../../../config'
import Navbar from '../../page-objects/components/Navbar'
import LoginPage from '../../page-objects/pages/LoginPage'
import AccountLinks from '../../page-objects/components/AccountLinks'


describe('Login Failed Test', () => {
    before(() => {
        cy.visit(URL)
        Navbar.clickSignIn()
    })

    it('Should try to login with invalid credentials', () => {
        LoginPage.login('invalid username', 'invalid password')
    })

    it('Should display an error message', () => {
        LoginPage.displayErrorMessage()
    })
})



describe('Login Success Test', () => {
    before(() => {
        cy.visit(URL)
        Navbar.clickSignIn()
    })


    it('Should try to login with valid credentials', () => {
        LoginPage.login(LOGIN_USERNAME, LOGIN_PASSWORD)
        AccountLinks.clickPayBillsTab()
        AccountLinks.clickOnlineStatementsTab()
        AccountLinks.clickSummaryTab()
    })

    // it('Switch different tabs', () => {

    // })

    it('Logout from the application', () => {
        Navbar.logOut()
        Navbar.displaySignInButton()
    })
})
