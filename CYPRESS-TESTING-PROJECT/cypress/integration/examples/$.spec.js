describe('Cypress $ function', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Expose jQuery element in current window', () => {
        const signInButton = Cypress.$('#signin_button')
        signInButton.click()
    })

})