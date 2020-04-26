describe('Working with inputs', () => {
    it('Should override the current time', () => {
        const date = new Date(2020, 4, 15).getTime()
        cy.clock(date)
        cy.log(date)
    })

    it('Should load login page', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.clearCookies({ log: true })
        cy.clearLocalStorage('your item', { log: true })
        cy.url().should('include', 'login.html')
        cy.title().should('include', 'Zero - Log in')
    })

    it('Should fill username', () => {
        cy.get('#user_login').as('username')
        cy.get('@username').clear()
        cy.get('@username').type('some invalid username', { delay: 20 })
    })

    it('Should fill password', () => {
        cy.get('#user_password').as('user_password')
        cy.get('@user_password').clear()
        cy.get('@user_password').type('some invalid password')
    })

    it('Should mark the checkbox', () => {
        cy.viewport(1920, 1080)
        cy.get('#user_remember_me').click()
        //cy.wait(4000)
    })

    it('Submitting the form', () => {
        cy.contains('Sign in').click()
    })

    it('Should display error message', () => {
        cy.get('.alert').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
    })



})
