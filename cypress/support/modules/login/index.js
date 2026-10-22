export const loginElements = {
  email: '[data-qa="login-email"]',
  password: '[data-qa="login-password"]',
  loginButton: '[data-qa="login-button"]',
  loggedUser: 'a > b',
  loginError: 'form[action*="login"] > p'
}
export const loginActions = {
  preencherLogin(usuario) {
    cy.get(loginElements.email).type(`${usuario.email}`)
    cy.get(loginElements.password).type(`${usuario.senha}`)
    cy.get(loginElements.loginButton).click()
  },
  preencherLoginComSenhaIncorreta(emailIncorreto, senhaIncorreta) {
    cy.visit('/login')
    cy.get(loginElements.email).type(`${emailIncorreto}`)
    cy.get(loginElements.password).type(`${senhaIncorreta}`)
    cy.get(loginElements.loginButton).click()
  }
}
export const loginAssertions = {
  validarUsuarioLogado(usuario) {
    cy.get(loginElements.loggedUser).should('be.visible').and('contain', usuario.nome)
  },
  validarLoginIncorreto() {
    cy.get(loginElements.loginError).should('be.visible').and('contain', 'Your email or password is incorrect!')
  }
}