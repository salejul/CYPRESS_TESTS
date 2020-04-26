describe('Devices tests', () => {
    it('Tests 720p resolution', () => {
        cy.viewport(1280, 720)
        cy.visit('http://www.example.com')
        cy.wait(3000)
    })

    it('Tests 1080p resolution', () => {
        cy.viewport(1920, 1080)
        cy.visit('http://www.example.com')
        cy.wait(3000)
    })

    it('Tests mobile iphone 5', () => {
        cy.viewport('iphone-5')
        cy.visit('http://www.example.com')
        cy.wait(3000)
    })

    it('Tests mobile iphone 6', () => {
        cy.viewport('iphone-6')
        cy.visit('http://www.example.com')
        cy.wait(3000)
    })

    it('Tests Samsung Note-9', () => {
        cy.viewport('samsung-note9')
        cy.visit('http://www.example.com')
        cy.wait(3000)
    })

    it('Tests ipad Mini', () => {
        cy.viewport('ipad-mini')
        cy.visit('http://www.example.com')
        cy.wait(3000)
    })

    it('Tests Samsung s10', () => {
        cy.viewport('samsung-s10')
        cy.visit('http://www.example.com')
        cy.wait(3000)
    })
})
