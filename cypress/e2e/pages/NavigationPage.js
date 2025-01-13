class NavigationPage {
    getProducts() {
      return cy.get('.inventory_item');
    }
  
    verifyProductsPresence() {
      this.getProducts().should('have.length.greaterThan', 0);
    }
  
    applyProductFilter(filterOption) {
      cy.get('.product_sort_container')
        .should('be.visible')
        .select(filterOption);
      cy.log(`Filtro aplicado: ${filterOption}`);
    }
  
    validateProductPricesAscending() {
      cy.get('.inventory_item_price')
        .then(prices => {
          const priceValues = [...prices].map(price => parseFloat(price.innerText.replace('$', '')));
          const isSorted = priceValues.every((val, i, arr) => !i || arr[i - 1] <= val);
          expect(isSorted, 'Preços devem estar em ordem crescente').to.be.true;
        });
    }
  
    clickProduct(productSelector) {
      cy.get(productSelector)
        .should('be.visible')
        .click();
      cy.log(`Produto clicado: ${productSelector}`);
    }
  
    validateProductDetail(expectedProductName) {
      cy.get('.inventory_details_name')
        .should('be.visible')
        .and('contain', expectedProductName);
      cy.log(`Página de detalhes validada para o produto: ${expectedProductName}`);
    }
  }
  
  export default new NavigationPage();
  