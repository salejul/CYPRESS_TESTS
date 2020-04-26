describe('Screenshots', () => {
    it('Full page screenshot', () => {
        cy.viewport(1366, 768)
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.screenshot({ capture: "fullPage" })
    })

    it('Single element screenshot', () => {
        cy.get('header').screenshot()
        cy.get('#populate').screenshot()
    })
})
