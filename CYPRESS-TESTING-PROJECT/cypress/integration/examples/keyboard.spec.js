describe('Keyboard press simulation', () => {
    it('Should simulate submitting searchbox with pressing enter', () => {
        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#searchTerm').type('Laptops{enter}')
    })
})
