class BasePage {
    static loadHomePage() {
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }

    static wait(time) {
        cy.wait(time * 1000)
    }
}

class HomePage extends BasePage {

    static scrollToBottom() {
        cy.get('#submit-button').scrollIntoView()
    }

    static scrollToTop() {
        cy.get('header').scrollIntoView()
    }
}



describe('Abstraction with Classes', () => {

    before(() => {
        //BEFORE ALL
        //runs BEFORE all tests inside describe block
        //setup test data or test content
        //seed or reset the database
        HomePage.loadHomePage()
    })

    after(() => {
        //AFTER ALL
        //cleans up the local storage or/and cookies
        //test clean up
        //runs AFTER all tests inside describe block
    })

    beforeEach(() => {
        //5 its -----> runs 5 times
        //runs BEFORE EACH IT block
    })

    afterEach(() => {
        //runs AFTER EACH IT block
    })


    //skip and only
    it('Should scroll up and down on a webpage FIRST IT', () => {

        HomePage.scrollToBottom()
        HomePage.wait(5)
        HomePage.scrollToTop()
    })

    it.only('Should scroll up and down on a webpage SECOND IT', () => {

        HomePage.scrollToBottom()
        HomePage.wait(5)
        HomePage.scrollToTop()
    })
})
