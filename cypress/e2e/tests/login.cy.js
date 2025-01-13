import LoginPage from "../pages/LoginPage";

describe('Cenários de Login - Validação de Acesso', () => {
  beforeEach(() => {
    LoginPage.visit('/');
  });

  it('Login com credenciais válidas', () => {
    cy.fixture('users').then(users => {
      LoginPage.fillUsername(users.standard_user.username);
      LoginPage.fillPassword(users.standard_user.password);
      LoginPage.clickLogin();
      cy.url().should('include', '/inventory');
    });
  });

  it('Login bloqueado para o usuário "locked_out_user"', () => {
    cy.fixture('users').then(users => {
      LoginPage.fillUsername(users.locked_out_user.username);
      LoginPage.fillPassword(users.locked_out_user.password);
      LoginPage.clickLogin();
      cy.get('[data-test="error"]').should('be.visible')
        .and('contain', 'Epic sadface: Sorry, this user has been locked out'); 
    });
  });

  it('Login com credenciais do usuário "problem_user"', () => {
    cy.fixture('users').then(users => {
      LoginPage.fillUsername(users.problem_user.username);
      LoginPage.fillPassword(users.problem_user.password);
      LoginPage.clickLogin();
      cy.url().should('include', '/inventory');
    });
  });

  it('Login com credenciais inválidas', () => {
    LoginPage.fillUsername('invalid_user');
    LoginPage.fillPassword('invalid_password');
    LoginPage.clickLogin();
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Epic sadface: Username and password do not match any user in this service');
  });
});
