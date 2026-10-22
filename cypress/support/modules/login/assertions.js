import { loginElements as el } from './elements'

export const loginAssertions = {
  validarUsuarioLogado(usuario) {
    cy.get(el.loggedUser)
      .should('be.visible')
      .and('contain', usuario.nome)
  }
}