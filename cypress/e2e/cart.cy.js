import login from '../support/login/commands'
import home from '../support/home/commands';
import productDetails from '../support/product-details/commands'
import payment from '../support/payment/commands'
import checkout from '../support/checkout/commands'

describe('All Test Cases to Cart', ()=>{

    context('Managing Cart', ()=>{

        beforeEach('Realize Login', ()=>{
            login.acessPage();
            login.loginDefaultUser();
        });

        it('Insert Product Into Cart', ()=>{
            home.skipHalfwayDownThePage();
            home.findAProductByDescription('Green Side Placket Detail T-Shirt');
            productDetails.insertProductIntoCart(30);
            cy.clickOnLinkByText('View Cart');
        });
    
        it.skip('Remove Product Into Cart', ()=>{
            
        })
    });

    context('Checkout', ()=>{

        before('Login and Insert Product Into Cart', ()=>{
            login.acessPage();
            login.loginDefaultUser();
            productDetails.acessPageByProductID(2);
            productDetails.insertProductIntoCart(10);
            cy.clickOnLinkByText('View Cart');
        });
    
        it('Complete Product Checkout', ()=>{
            cy.clickOnLinkByText('Proceed To Checkout');
            checkout.includeCommentInOrder('please send immediately!')
            cy.clickOnLinkByText('Place Order');
    
            payment.fillCreditCardInfo();
            payment.payConfirmOrder();
            cy.shouldSuccessMessage('Order Placed!');
            cy.clickOnLinkByText('Continue');
        }); 
    })
});









