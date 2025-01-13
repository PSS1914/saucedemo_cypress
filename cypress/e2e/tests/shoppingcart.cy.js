import ShoppingCartPage from "../pages/ShoppingCartPage";
import LoginPage from "../pages/LoginPage";

describe('Carrinho de Compras', () => {
  const loginAndVisitInventory = () => {
    LoginPage.visit('/');
    cy.fixture('users').then(users => {
      LoginPage.login(users.standard_user.username, users.standard_user.password);
    });
    cy.url().should('include', '/inventory');
  };

  beforeEach(() => {
    loginAndVisitInventory();
  });

  it('Adicionar produto e verificar carrinho', () => {
    const productSelector = "[data-test='add-to-cart-sauce-labs-backpack']";
    const expectedProductName = 'Sauce Labs Backpack';

    ShoppingCartPage.addProduct(productSelector);
    ShoppingCartPage.openCart();
    cy.url().should('include', '/cart');
    ShoppingCartPage.verifyProductInCart(expectedProductName);
  });

  it('Adicionar multiplos produtos', () => {
    const products = [
      { selector: "[data-test='add-to-cart-sauce-labs-backpack']", name: 'Sauce Labs Backpack' },
      { selector: "[data-test='add-to-cart-sauce-labs-bike-light']", name: 'Sauce Labs Bike Light' },
      { selector: "[data-test='add-to-cart-sauce-labs-bolt-t-shirt']", name: 'Sauce Labs Bolt T-Shirt' }
    ];

    products.forEach(product => ShoppingCartPage.addProduct(product.selector));

    ShoppingCartPage.openCart();
    cy.url().should('include', '/cart');
    products.forEach(product => ShoppingCartPage.verifyProductInCart(product.name));
  });

  it('Remover produto do carrinho', () => {
    const products = [
      { selector: "[data-test='add-to-cart-sauce-labs-backpack']", name: 'Sauce Labs Backpack', removeSelector: "[data-test='remove-sauce-labs-backpack']" },
      { selector: "[data-test='add-to-cart-sauce-labs-bike-light']", name: 'Sauce Labs Bike Light', removeSelector: "[data-test='remove-sauce-labs-bike-light']" },
      { selector: "[data-test='add-to-cart-sauce-labs-bolt-t-shirt']", name: 'Sauce Labs Bolt T-Shirt', removeSelector: "[data-test='remove-sauce-labs-bolt-t-shirt']" }
    ];

    // Adicionando produtos ao carrinho
    products.forEach(product => ShoppingCartPage.addProduct(product.selector));

    // Verificando carrinho
    ShoppingCartPage.openCart();
    cy.url().should('include', '/cart');
    products.forEach(product => ShoppingCartPage.verifyProductInCart(product.name));

    // Removendo um produto e validando atualização do carrinho
    const productToRemove = products[0];
    ShoppingCartPage.removeProduct(productToRemove.removeSelector);
    ShoppingCartPage.verifyCartItemCount(products.length - 1);
  });
});
