describe('Just slider tests', () => {
    it('Tests the slider', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.get('#tried-test-cafe').click()
        cy.get('.ui-slider-handle').type('{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow')
    })
})
