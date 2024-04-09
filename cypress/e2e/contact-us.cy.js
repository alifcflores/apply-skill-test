/// <reference types="cypress" />

import home from '../support/home/commands';
import contactUs from '../support/contact-us/commands'

describe('Contact Us Page', ()=>{

    before('Access Home Page', ()=>{
        home.acessPage();
    });

    it('Fill Contact Us Form', ()=>{
        cy.clickInMenuOption('Contact us');
        contactUs.fillPersonalInfosInForm();
        contactUs.submitForm();
        contactUs.validateSuccessfullSubmit();
    })    
});