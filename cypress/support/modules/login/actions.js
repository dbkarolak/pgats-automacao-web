import { loginElements as le } from './elements'

export const loginActions = {
  preencherLogin(usuario) {
    cy.get(le.email).type(`${usuario.email}`)
    cy.get(le.password).type(`${usuario.senha}`)
    cy.get(le.loginButton).click()
  }
}