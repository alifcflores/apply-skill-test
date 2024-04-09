import { user } from '../../fixtures/user';
import { accountCreated } from '../../fixtures/urls';

class Register {

    fillPersonalInformations(){
        cy.get('#id_gender1').check();
        cy.get('[data-qa="password"]').type(user.password)

        cy.get('[data-qa="days"]').select('22');
        cy.get('[data-qa="months"]').select('November');
        cy.get('[data-qa="years"]').select('1990');

        cy.get('#newsletter').check();
        cy.get('#optin').check();
    }

    fillAddressInformations(){
        cy.get('[data-qa="first_name"]').type(user.firstName);
        cy.get('[data-qa="last_name"]').type(user.lastName);
        cy.get('[data-qa="company"]').type(user.company);
        cy.get('[data-qa="address"]').type(user.address);
        cy.get('[data-qa="address2"]').type(user.addressTwo);
        cy.get('[data-qa="country"]').select(user.country);
        cy.get('[data-qa="state"]').type(user.state);
        cy.get('[data-qa="city"]').type(user.city);
        cy.get('[data-qa="zipcode"]').type(user.zipcode);
        cy.get('[data-qa="mobile_number"]').type(user.mobile);
    }

    submitSignUpForm(){
        cy.intercept(accountCreated).as('account-created');
        cy.get('button').contains('Create Account').click();
        cy.wait('@account-created').then((xhr)=>{
            expect(xhr.response.statusCode).to.be.equal(200); 
        });
    }
}

export default new Register();