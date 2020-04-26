describe('Feedback test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Feedback').click()
    })


    it('Should click the Feedback link', () => {
        cy.url().should('include', 'feedback.html')
        cy.get('form').should('be.visible')
    })

    it('Should fill feedback form', () => {
        cy.get('#name').type('My full name')
        cy.get('#email').type('mail@example.com')
        cy.get('#subject').type('Question about Corona')
        cy.get('#comment').type('Some text about Corona')

    })

    it('Should submit the form', () => {
        cy.contains('Send Message').click()
    })

    it('Should display the feedback message', () => {
        cy.url().should('include', 'sendFeedback.html')
        cy.get('h3').should('be.visible')
        cy.get('#feedback-title').should('have.text', 'Feedback')


    })

})