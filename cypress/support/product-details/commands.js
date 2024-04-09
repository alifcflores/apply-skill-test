class ProductDetails {
    
    acessPageByProductID(productID){
        cy.visit('/product_details/' + productID)
    }

    insertProductIntoCart(quantity){
        cy.get('#quantity').clear().type(quantity);
        cy.get('button').contains('Add to cart').click();
    }
}

export default new ProductDetails();