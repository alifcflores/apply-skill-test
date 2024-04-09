import { user } from "../../fixtures/user";
import { contact } from "./data";

class ContactUs {
    fillPersonalInfosInForm(){
        cy.get('[data-qa="name"]').type(user.fullName);
        cy.get('[data-qa="email"]').type(user.email);
        cy.get('[data-qa="subject"]').type(contact.subject);
        cy.get('[data-qa="message"]').type(contact.message);
        cy.get('[name="upload_file"]').selectFile('cypress/fixtures/example.pdf');
    }

    submitForm(){
        cy.get('[data-qa="submit-button"]').click();
    }

    validateSuccessfullSubmit(){
        cy.get('.contact-form').find('.status').should('have.text', 'Success! Your details have been submitted successfully.');   
    }
}

export default new ContactUs();