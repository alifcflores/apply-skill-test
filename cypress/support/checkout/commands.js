class Checkout {
    
    includeCommentInOrder(text){
        cy.get('#ordermsg').children('textarea').type(text)
    }
}

export default new Checkout();