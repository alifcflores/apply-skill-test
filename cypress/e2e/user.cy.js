import register from '../support/register/commands';
import login from '../support/login/commands'

beforeEach('Access Page', ()=>{
    login.acessPage();
})

context('Managing User', ()=>{
    
    it('Create New User', ()=>{
        cy.clickInMenuOption('Signup / Login');
        login.createNewUser();  
        register.fillPersonalInformations();
        register.fillAddressInformations();
        register.submitSignUpForm();
        cy.shouldSuccessMessage('Account Created!');
    });

    it.skip('Update User', ()=>{

    });
});

context('Login', ()=>{
    it('Login with created user and logout', ()=>{
        cy.clickInMenuOption('Signup / Login');
        login.loginIntoCreatedAccount();
        cy.reload();
        cy.clickInMenuOption('Logout');
    })
});

