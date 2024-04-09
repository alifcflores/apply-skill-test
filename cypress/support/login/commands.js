import { login } from '../../fixtures/urls';
import { user } from '../../fixtures/user';

class Login {

    acessPage(){
        cy.visit(login);
    }

    loginDefaultUser(){
        this.credentials(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    }

    loginIntoCreatedAccount(){
        this.credentials(user.email, user.password);
    }

    credentials(email, password){
        cy.get('[data-qa="login-email"]').type(email);
        cy.get('[data-qa="login-password"]').type(password);
        cy.get('[data-qa="login-button"]').click({force: true});
    }

    createNewUser(){
        cy.get('[data-qa="signup-name"]').type(user.fullName);
        cy.get('[data-qa="signup-email"]').type(user.email);
        cy.get('[data-qa="signup-button"]').click();
    }
    
}

export default new Login();