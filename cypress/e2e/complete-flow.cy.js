/// <reference types="cypress" />

import register from '../support/register/commands';
import home from '../support/home/commands';
import productDetails from '../support/product-details/commands'
import login from '../support/login/commands'
import checkout from '../support/checkout/commands'
import payment from '../support/payment/commands'
import contactUs from '../support/contact-us/commands'

describe('Testing Complete Flow of User', ()=>{

    before('Acess Page and Skip Half Down', ()=>{
        home.acessPage();
        home.skipHalfwayDownThePage();
    });

    it('Test covering all principal pages', ()=>{
        home.findAProductByDescription('Green Side Placket Detail T-Shirt');
        productDetails.insertProductIntoCart(30);
        cy.clickOnLinkByText('View Cart');
        cy.clickOnLinkByText('Proceed To Checkout');

        cy.clickOnLinkByText('Register / Login');
        login.createNewUser();  
        register.fillPersonalInformations();
        register.fillAddressInformations();
        register.submitSignUpForm();
        cy.shouldSuccessMessage('Account Created!');
        
        cy.clickOnLinkByText('Continue');
        cy.clickInMenuOption('Cart');
        cy.clickOnLinkByText('Proceed To Checkout');
        checkout.includeCommentInOrder('please send immediately!')
        cy.clickOnLinkByText('Place Order');
        payment.fillCreditCardInfo();
        payment.payConfirmOrder();
        cy.shouldSuccessMessage('Order Placed!');
        cy.clickOnLinkByText('Continue');
        cy.clickInMenuOption('Logout');

        login.LoginIntoAccount();
        cy.clickInMenuOption('Contact us');
        contactUs.fillPersonalInfosInForm();
        contactUs.submitForm();
        contactUs.validateSuccessfullSubmit();
        cy.clickInMenuOption('Logout');
    });   
});