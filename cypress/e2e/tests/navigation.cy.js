import NavigationPage from "../pages/NavigationPage";
import LoginPage from "../pages/LoginPage";

describe('Teste de navegação da loja', () => {
  beforeEach(() => {
    LoginPage.visit('/');
    cy.fixture('users').then(users => {
      LoginPage.login(users.standard_user.username, users.standard_user.password);
    });

    cy.url().should('include', '/inventory');
  });

  it('Verificar se há produtos na tela.', () => {
    NavigationPage.getProducts().should('have.length.greaterThan', 0); // Verifica se existe pelo menos um produto
  });

  it('Filtro “Low to High” e verificar a ordem de preço crescente.', () => {
    const filterOption = 'Price (low to high)';
    NavigationPage.applyProductFilter(filterOption);
    NavigationPage.validateProductPricesAscending();
  });

  it('Selecionar um produto', () => {
    const productSelector = '[data-test="item-4-title-link"]';
    const expectedProductName = 'Sauce Labs Backpack';

    NavigationPage.clickProduct(productSelector);
    NavigationPage.validateProductDetail(expectedProductName);
  });
});
