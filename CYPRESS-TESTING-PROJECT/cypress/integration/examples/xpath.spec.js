describe('XPath exercise', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should click on an element using xpath', () => {
        cy.xpath("//button[@id='signin_button']").should('be.visible')
        cy.xpath("//button[@id='signin_button']").click()
    })

    it('Should display the login form', () => {
        cy.xpath('//form').should('have.length', 1)
    })
})
