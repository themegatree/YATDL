describe('Feature Test: ', function(){
    it('Can we add a test here later', function(){
        cy.visit('/')
        cy.get('inputField').type('My first todo!')
        cy.get('save').click()
        cy.get('inputField').type('Another Todo, what a surprise!')
        cy.get('save').click()
        cy.get('inputField').type('Completed! yay')
        cy.get('save').click()
        cy.get('#list').should('contain', 'My first todo!')
        cy.get('#list').should('contain', 'Another Todo, what a surprise!')
        cy.get('#list').should('contain', 'Completed!, yay')
        cy.get('#list3').click();
        expect('#list3').to.have.css('text-decoration-line', 'line-through')
        // Test clear
    })
})