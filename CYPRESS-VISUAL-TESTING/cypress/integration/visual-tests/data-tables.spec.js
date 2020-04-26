describe('Visual Regression - Data Tables', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#signin_button').click()
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.get('#user_remember_me').click()
        cy.get('input[name="submit"]').click()
    })

    it('Should load account activity', () => {
        cy.get('#account_activity_tab').click()
    })

    it('Take the table snapshot', () => {
        cy.matchImageSnapshot()
    })
})
