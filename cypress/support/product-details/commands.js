import { productDetails } from '../../fixtures/urls'

class ProductDetails {
    
    acessPageByProductID(productID){
        cy.visit(productDetails + productID)
    }

    insertProductIntoCart(quantity){
        cy.get('#quantity').clear().type(quantity);
        cy.get('button').contains('Add to cart').click();
    }
}

export default new ProductDetails();