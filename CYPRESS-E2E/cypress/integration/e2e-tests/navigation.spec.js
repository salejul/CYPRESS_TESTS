describe('Navbar test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should display Online Banking content', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
    })

    it('Should display Feedback content', () => {
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('h3').should('be.visible')
    })

    it('Should display Home Page content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
    })
})
