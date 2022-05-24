context('Blog tests', () => {
    it('Open homepage', () => {
        cy.visit('/');
        cy.get('.blog-title').should('contain.text', "Agile Coding")
    });

    it("Search article", () => {
        cy.visit('/');
        cy.get('[data-title="Search"]').click()
        cy.get('input[placeholder*="Type"]').type("Hello")
        cy.get('input[placeholder*="Type"]').parent().siblings().children('a').first().click()
        cy.get('[data-query="post-title"]').should('have.text', 'Hello AgileCoding.io')
    })
})
