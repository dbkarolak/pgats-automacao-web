import { registrationActions, registrationAssertions } from '../modules/registration'

export const prepararUsuarioParaLogin = (usuario) => {
  registrationActions.cadastrarUsuario(usuario)
  registrationAssertions.validarContaCriada()

  cy.clearCookies()
  cy.visit('/login')
}