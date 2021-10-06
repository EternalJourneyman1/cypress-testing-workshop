describe("Cypress Stubs and Spies", () => {
    it('Stub out getTodos route with no todos', () => {
        cy.visit('/')

        cy.findByRole('heading', {name: 'Cypress Todos'}).should('exist')

        //  Get title input
        cy.findByRole('textbox', {name: 'title'}).should('exist')
        // Type the words `First Todo` into title input

        //  Get description input
        cy.findByRole('textbox', {name: 'description'})
            .type('Complete Cypress workshop')

        //   Get Add Todo button
        cy.findByRole('button', {name: 'Add Todo'})
    });

    it('Stub out getTodos route with todos ', () =>  {
        cy.visit('/')

        cy.findByRole('textbox', {name: 'title'})
            // Type the words `First Todo` into title input
        //    Get description input
        cy.findByRole('textbox', {name: 'description'})
            .type('Complete Cypress workshop')
        //    Get Add Todo button
        cy.findByRole('button', {name: 'Add Todo'})
        // click Add Todo button

        cy.findByLabelText('Stub SaveTodo #1')
        cy.findByLabelText('Stub SaveTodo #2')
    });
})

// NOTE:
// https://docs.cypress.io/api/commands/intercept
