import { registrationActions, registrationAssertions } from '../modules/registration'

export const iniciarCadastro = (usuario) => {
  cy.visit('/')
  cy.get('a[href*="login"]').click()

  registrationAssertions.validarPaginaCadastro()
  registrationActions.preencherSignup(usuario)
}