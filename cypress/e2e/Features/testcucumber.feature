Feature: Testar o cucumber
    Scenario: Pesquisa Google
        Given que o usuario esta no Google
        When ele pesquisa por imagem
        Then a imagem e exibida
        