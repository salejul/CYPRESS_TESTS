import BasePage from "./BasePage"

export default class FeedBackPage extends BasePage {

    static clickOnFeedbackLink() {
        cy.get('#feedback').click()
    }

    static submitFeedback() {
        cy.fixture('feedback').then(data => {
            const f_name = data.name
            const f_email = data.email
            const f_subject = data.subject
            const f_message = data.message
            cy.get('#name').type(f_name)
            cy.get('#email').type(f_email)
            cy.get('#subject').type(f_subject)
            cy.get('#comment').type(f_message)

            cy.contains('Send Message').click()
        })

    }

    static postSendCheck() {
        cy.url().should('include', 'sendFeedback.html')
        cy.get('h3').should('be.visible')

    }

}