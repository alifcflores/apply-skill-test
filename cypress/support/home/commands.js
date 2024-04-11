import { home } from "../../fixtures/urls";

class Home {
    acessPage(){
        cy.visit(home);
    }

    skipHalfwayDownThePage(){
        cy.scrollTo('center');
    }

    findAProductByDescription(productDesc){
        cy.get('p').contains(productDesc).parentsUntil('.product-image-wrapper').siblings('.choose').find('a').click();
    }
} 

export default new Home();