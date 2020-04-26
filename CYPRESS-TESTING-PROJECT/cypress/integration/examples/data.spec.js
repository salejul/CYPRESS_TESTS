describe('Write / Read Data to JSON / Text File', () => {
    it('Should write data into JSON', () => {
        cy.writeFile('log.json', { name: "Michael", age: 27 })
    })

    it('Should write data into txt file', () => {
        cy.writeFile('log.txt', "This is some text.")
    })

    it('It should read and verify data from JSON file', () => {
        cy.readFile('log.json').its('age').should('eq', 27)
    })

    it('It should read and verify data from TXT file', () => {
        cy.readFile('log.txt').should('eq', 'This is some text.')
    })

    it('Should read and verify browser document content', () => {
        cy.visit('https://example.com')
        //cy.wait(2000)
        cy.document().its('contentType').should('eq', 'text/html')
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    })

})