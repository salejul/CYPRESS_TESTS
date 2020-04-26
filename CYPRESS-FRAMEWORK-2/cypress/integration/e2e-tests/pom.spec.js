import HomePage from "../../page-objects/HomePage"
import FeedbackPage from "../../page-objects/FeedbackPage"
import Navbar from "../../page-objects/components/Navbar"
import SearchResultsPage from "../../page-objects/SearchResultsPage"

// describe('HomePage Tests', () => {
//     it('HomePage should work', () => {
//         HomePage.visit()
//         HomePage.pause(2.3)
//         HomePage.carouselIsVisible()
//     })
// })

describe('Feedback Tests', () => {

    before(() => {
        HomePage.visit()
        HomePage.clickOnFeedBackLink()
    })

    after(() => {
        Navbar.clickOnHomePageLogo()
    })

    it('Should successfully submit feedback form', () => {
        FeedbackPage.properlyLoaded()
        FeedbackPage.fillFeedbackForm()
        FeedbackPage.submitFeedbackForm()
    })
})

describe('Search test', () => {
    it('Should search some terms', () => {
        HomePage.visit()
        Navbar.search('Online banking')
        SearchResultsPage.displayResults()
        Navbar.clickOnHomePageLogo()
    })
})


