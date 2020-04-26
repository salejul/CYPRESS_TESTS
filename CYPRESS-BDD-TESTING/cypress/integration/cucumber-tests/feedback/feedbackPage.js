const URL = 'http://zero.webappsecurity.com/feedback.html'
const NAME_INPUT = '#name'
const EMAIL_INPUT = '#email'
const SUBJECT_INPUT = '#subject'
const COMMENT_INPUT = '#comment'
const SUBMIT_BUTTON = 'input[type="submit"]'

class FeedBackPage {
    static visitPage() {
        cy.visit(URL)
    }

    static fillFeedbackForm() {
        cy.get(NAME_INPUT).type('My first name')
        cy.get(EMAIL_INPUT).type('incredimail@email.com')
        cy.get(SUBJECT_INPUT).type('Just some random question')
        cy.get(COMMENT_INPUT).type('My text goes here.........')
    }

    static submitFeedback() {
        cy.get(SUBMIT_BUTTON).click()
    }
}

export default FeedBackPage