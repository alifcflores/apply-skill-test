import { creditCard } from "./data";
import { user } from '../../fixtures/user';

class Payment {
    fillCreditCardInfo(){
        cy.get('[data-qa="name-on-card"]').type(user.fullName);
        cy.get('[data-qa="card-number"]').type(creditCard.number);
        cy.get('[data-qa="cvc"]').type(creditCard.cvv);
        cy.get('[data-qa="expiry-month"]').type(creditCard.expiration.month);
        cy.get('[data-qa="expiry-year"]').type(creditCard.expiration.year);
    }

    payConfirmOrder(){
        cy.intercept('/payment_done/**').as('payment-done');
        cy.get('button').contains('Pay and Confirm Order').click();
        cy.wait('@payment-done').then((xhr)=>{
            expect(xhr.response.statusCode).to.be.equal(200);
        })
    }
}

export default new Payment();