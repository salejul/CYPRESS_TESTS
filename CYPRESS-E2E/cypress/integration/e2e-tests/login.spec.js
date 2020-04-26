describe('Login/Logout Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    })

    it('Should try to login with invalid data', () => {
        cy.get('#user_login').type('some invalid text')
        cy.get('#user_password').type('some invalid password')
        cy.get('#user_remember_me').click()
        cy.xpath('//input[@name="submit"]').click()
    })

    it('Should display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
    })

    it('Should successfully login to application', () => {
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pass

            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
        })

        cy.get('#user_remember_me').click()
        cy.xpath('//input[@name="submit"]').click()
        cy.get('ul.nav-tabs').should('be.visible')
    })

    it('Should logout from the application', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.url().should('include', 'index.html')
    })
})
