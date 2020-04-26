import HomePage from "../../page-objects/HomePage"
import Navbar from "../../page-objects/components/Navbar"
import LoginPage from "../../page-objects/LoginPage"
import ForgottenPasswordPage from "../../page-objects/ForgottenPasswordPage"
import DataGenerator from "../../fixtures/DataGenerator"

const EMAIL = DataGenerator.generateEmail()

describe('Forgotten Password Page Test', () => {

    before(() => {
        HomePage.visit()
        Navbar.clickSignInButton()
    })

    after(() => {
        Navbar.clickOnHomePageLogo()
    })

    it('Should navigate to Forgotten Password Page', () => {
        LoginPage.verifySuccessfullyLoadedLoginPage()
        LoginPage.clickForgottenPasswordLink()
    })

    it('Should enter email on Forgotten password page', () => {
        ForgottenPasswordPage.validateSuccessfullyLoadedForgottenPasswordPage()
        ForgottenPasswordPage.enterEmail(EMAIL)
    })

    it('Should successfully send an email', () => {
        ForgottenPasswordPage.sendAndVerifySuccessfullySentEmail(EMAIL)
    })
})
