class ProductDetails {
    
    insertProductIntoCart(quantity){
        cy.get('#quantity').clear().type(quantity);
        cy.get('button').contains('Add to cart').click();
    }
}

export default new ProductDetails();