import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import FeedBackPage from './feedbackPage'


Given('I open feedback page', () => {
    FeedBackPage.visitPage()
})

When('I fill feedback form', () => {
    FeedBackPage.fillFeedbackForm()
})

When('I click the send button', () => {
    FeedBackPage.submitFeedback()
})