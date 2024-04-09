Cypress.Commands.add('clickOnLinkByText', (text) => { 
    cy.get('a').contains(text).click();
})

Cypress.Commands.add('clickInMenuOption', (text) => { 
    cy.get('[class="shop-menu pull-right"]').find('a').contains(text).parent().click();
})

Cypress.Commands.add('shouldSuccessMessage', (text) => { 
    cy.get('#form').find('b').should('have.text', text);
})




