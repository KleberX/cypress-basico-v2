Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Kleber')
    cy.get('#lastName').type('Junior')
    cy.get('#email').type('kleber@example.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()

})