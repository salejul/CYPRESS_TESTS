import BasePage from "./BasePage"
import DataGenerator from "../fixtures/DataGenerator"

const NAME = DataGenerator.generateRandomName()
const EMAIL = DataGenerator.generateEmail()
const SUBJECT = DataGenerator.generateNumbers()

export default class FeedbackPage extends BasePage {

    static properlyLoaded() {
        cy.url().should('include', 'feedback.html')
        cy.title().should('include', 'Zero - Contact Us')
        cy.get('#feedback-title').should('be.visible')
        cy.get('form').should('be.visible')
    }

    static fillFeedbackForm() {
        cy.get('#name').type(NAME)
        cy.get('#email').type(EMAIL)
        cy.get('#subject').type(SUBJECT)
        cy.get('#comment').type('LKJASOILKJASLKASOIASJHKAJSUGKJABKSJOJLKJLAKSJLKJASIUYKAJSH')

    }

    static submitFeedbackForm() {
        cy.get('input[type="submit"]').click()
        cy.url().should('include', 'sendFeedback.html')
        cy.title().should('include', 'Zero - Contact Us')
        cy.get('#feedback-title').should('be.visible')
        cy.get('.offset3').should('contain.text', `Thank you for your comments, ${NAME}.`)
        //cy.get('.offset3').contains(`Thank you for your comments, ${NAME}.`)
    }

}