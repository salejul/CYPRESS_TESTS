describe('Password Tests', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should click the sign in button', () => {
        cy.get('#signin_button').click()
    })

    it('Should click the forgotten password link', () => {
        cy.get('.offset3  > a').click()
    })

    it('Should fill the e-mail form', () => {
        cy.get('#user_email').type('my_email@example.com')
    })

    it('Should submit the form', () => {
        cy.contains('Send Password').click()
        cy.get('h3').should('be.visible').and('have.text', 'Forgotten Password')
    })
})
