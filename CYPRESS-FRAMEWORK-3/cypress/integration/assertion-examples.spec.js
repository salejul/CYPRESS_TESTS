describe('Assertions examples', () => {
    it('tips and ideas', () => {

        //retry until we find 5 matching list elements
        cy.get('li.selected').should('have.length', 5)

        //check for the state - retry until input has class disabled!
        cy.get('form').find('input').should('not.have.class', 'disabled')

        //retry until fixed area has a correct value
        cy.get('textarea').should('have.value', 'Placeholder')

        //retry until span does not contain 'Click me' text
        cy.get('a').parent('span').should('not.contain', 'Click me')

        //retry until element(button) is visible
        cy.get('button').should('be.visible')

        //retry until loading spinner is not longer visible
        cy.get('.spinner').should('not.exist')
    })
})
