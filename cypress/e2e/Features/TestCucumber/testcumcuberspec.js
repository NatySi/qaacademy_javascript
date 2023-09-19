/// <reference types="Cypress" />
import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"

Given('que o usuario esta no Google', function () {
    const URL = "https://www.google.com";
    cy.visit(URL);
});

When('ele pesquisa por imagem', function () {
    const campoDePesquisa = '[class="gLFyf"]';
    const conteudo = "Casa na natureza";
    cy.get(campoDePesquisa).click();
    cy.get(campoDePesquisa).type(conteudo).type("{ENTER}");
});

Then('a imagem e exibida', function () {
    const imagem = '[class="uhHOwf BYbUcd"]';
    const validadorDaPesquisa = 'Airbnb Newsroom';
    cy.get(imagem).eq(0).click();
    cy.contains(validadorDaPesquisa).should('be.visible');
});