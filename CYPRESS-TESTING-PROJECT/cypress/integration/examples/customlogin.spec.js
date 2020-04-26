describe('Login with custom commands', () => {
    it('Should try to login with custom data', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.login('username', 'password')

    })
})