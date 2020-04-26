import { URL } from '../../../config'
import FeedBackPage from '../../page-objects/pages/FeedBackPage'
import Navbar from '../../page-objects/components/Navbar'

describe('Sending Feedback Test With Fixtures', () => {
    before(() => {
        cy.visit(URL)
        FeedBackPage.clickOnFeedbackLink()
    })

    after(() => {
        Navbar.clickOnLogo()
    })

    it('Should send feedback successfully', () => {
        FeedBackPage.submitFeedback()
    })

    it('Health check', () => {
        FeedBackPage.postSendCheck()
    })
})
