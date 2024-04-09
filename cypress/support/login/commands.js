import { user } from '../../fixtures/user';

class Login {

    LoginIntoAccount(){
        cy.get('[data-qa="login-email"]').type(user.email);
        cy.get('[data-qa="login-password"]').type(user.password);
        cy.get('[data-qa="login-button"]').click({force: true});
    }

    createNewUser(){
        cy.get('[data-qa="signup-name"]').type(user.fullName);
        cy.get('[data-qa="signup-email"]').type(user.email);
        cy.get('[data-qa="signup-button"]').click();
    }
    
}

export default new Login();