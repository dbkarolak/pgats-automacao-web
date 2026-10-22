import { registrationElements as el } from './elements'

export const registrationAssertions = {
  validarPaginaCadastro() {
    cy.get(el.signupName).should('be.visible')
    cy.get(el.signupEmail).should('be.visible')
    cy.get(el.signupButton).should('be.visible')
  },
  validarFormularioDadosConta() {
    cy.get(el.password).should('be.visible')
    cy.get(el.createAccountButton).should('be.visible')
  },
  validarContaCriada() {
    cy.get(el.accountCreated).should('be.visible')
  },
  validarEmailJaExistente() {
  cy.get(el.existingEmailError)
    .should('exist')
    .should('be.visible')
    .should('contain', 'Email Address already exist!')
  }
}