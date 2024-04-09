class Home {
    acessPage(){
        cy.visit('/');
    }

    skipHalfwayDownThePage(){
        cy.get('body').invoke('prop', 'scrollHeight').then((length)=>{
            cy.scrollTo(0, length / 2);
        });
    }

    findAProductByDescription(productDesc){
        cy.get('p').contains(productDesc).parentsUntil('.product-image-wrapper').siblings('.choose').find('a').click();
    }
} 

export default new Home();