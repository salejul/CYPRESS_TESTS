const pages = ['https://www.example.com', 'http://books.toscrape.com/index.html']

const sizes = ['iphone-6', 'ipad-2', [1200, 800]]


describe('Visual Regression', () => {
    sizes.forEach(size => {
        pages.forEach(page => {
            it(`Should match ${page} in resolution of ${size}`, () => {
                let currentTime = new Date(Date.UTC(2020, 4, 23)).getDate()
                cy.clock(currentTime)
                cy.setResolution(size)
                cy.visit(page)
                cy.matchImageSnapshot()
            })
        })
    })
})

describe('Single element snapshot', () => {
    it('Should match a single element on the webpage', () => {
        cy.visit('https://www.example.com')
        cy.get('h1').matchImageSnapshot()
    })
})

