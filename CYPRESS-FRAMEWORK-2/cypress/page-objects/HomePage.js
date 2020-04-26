import BasePage from "./BasePage";
import { BASE_URL } from '../../config'

export default class HomePage extends BasePage {

    static visit() {
        cy.visit(BASE_URL)
    }

    static carouselIsVisible() {
        cy.get('#carousel').should('be.visible')
    }

    static clickOnHomeMenuLink() {
        cy.get('#homeMenu').click()
    }

    static clickOnOnlineBankingLink() {
        cy.get('#onlineBankingMenu').click()
    }

    static clickOnFeedBackLink() {
        cy.get('#feedback').click()
    }
}