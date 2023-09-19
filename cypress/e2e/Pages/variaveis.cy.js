it('Exercicio 2 e 3',()=>{
    cy.visit("https://www.madeiramadeira.com.br/");
    cy.get('[id="searchAutoComplete"]').eq(1).click();
    cy.get('[id="searchAutoComplete"]').eq(1).type("Armário").type("{ENTER}")
    cy.get('[class="cav--c-lesPJm cav--c-eittNB cav--c-hsAhXH"]').eq(0).click();
    cy.get('[class="cav--c-iOefvc cav--c-iOefvc-kAkgtL-variant-secondary cav--c-iOefvc-icLCAaD-css"]', {timeout:5000}).click({force: true});
    cy.get('[class="svg-inline--fa fa-shopping-cart fa-w-18 "]').eq(0).click();
    cy.get('[class="cav--c-fcCJfA cav--c-fcCJfA-bICGYT-orientation-horizontal"]').eq(0).click();
})
})

describe( "Exercicios",() =>{ 
    it('Exercicio 1',()=>{
        const URL = "https://www.google.com";
        const campoDePesquisa = '[class="gLFyf"]';
        const conteudo = "Casa na natureza";
        const imagem = '[class="uhHOwf BYbUcd"]';
        const validadorDaPesquisa = 'Airbnb Newsroom';
        cy.visit(URL);
        cy.get(campoDePesquisa).click();
        cy.get(campoDePesquisa).type(conteudo).type("{ENTER}");
        cy.get(imagem).eq(0).click();
        cy.contains(validadorDaPesquisa).should('be.visible');
    })