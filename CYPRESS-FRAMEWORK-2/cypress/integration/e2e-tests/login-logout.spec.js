import HomePage from "../../page-objects/HomePage"
import Navbar from "../../page-objects/components/Navbar"
import LoginPage from "../../page-objects/LoginPage"
import { LOGIN_USERNAME, LOGIN_PASSWORD } from '../../../config'

describe('Login/Logout Tests', () => {
    before(() => {
        HomePage.visit()
        Navbar.clickSignInButton()
    })

    after(() => {
        //Navbar.logOut()
        Navbar.clickOnHomePageLogo()
    })

    it('Should successfully login to an app', () => {
        LoginPage.verifySuccessfullyLoadedLoginPage()
        LoginPage.enterLoginCredentials(LOGIN_USERNAME, LOGIN_PASSWORD)
        LoginPage.submitLoginForm()
        LoginPage.successfulLogin()
    })

    it.only('Should display an error message after unsuccessful login', () => {
        LoginPage.verifySuccessfullyLoadedLoginPage()
        LoginPage.enterLoginCredentials('wrong_user', ' not_so_secure_password')
        LoginPage.submitLoginForm()
        LoginPage.displayErrorMessage()
    })

})
