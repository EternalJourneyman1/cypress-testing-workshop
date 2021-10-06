describe("Cypress Custom Commands", () => {
    it('Add Shopping List ', () => {
        cy.visit('/')

        cy.findByRole('textbox', {name: 'title'})
            .type('Gallon of Milk')

        cy.findByRole('textbox', {name: 'description'})
            .type('3')

        cy.findByRole('button', {name: 'Add Todo'})
            .click()

        cy.findByRole('textbox', {name: 'title'})
            .type('Loaf og Bread')

        cy.findByRole('textbox', {name: 'description'})
            .type('1')

        cy.findByRole('button', {name: 'Add Todo'})
            .click()

        cy.findByRole('textbox', {name: 'title'})
            .type('Honey Nut Cherrios')

        cy.findByRole('textbox', {name: 'description'})
            .type('7')

        cy.findByRole('button', {name: 'Add Todo'})
            .click()

        cy.reload()
    });
})
