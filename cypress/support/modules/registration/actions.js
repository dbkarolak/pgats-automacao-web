import { registrationElements as el } from './elements'

export const registrationActions = {

  preencherSignup(usuario) {
    cy.get(el.signupName).type(`${usuario.nome}`)
    cy.get(el.signupEmail).type(`${usuario.email}`)
    cy.get(el.signupButton).click()
  },

  preencherDadosConta(usuario) {
    cy.get(el.genderMrs).check()
    cy.get(el.password).type(`${usuario.senha}`)
    cy.get(el.dayOfBirth).select(`${usuario.diaNascimento}`)
    cy.get(el.newsletter).check()
  },

  preencherDadosEndereco(usuario) {
    cy.get(el.firstName).type(`${usuario.primeiroNome}`)
    cy.get(el.lastName).type(`${usuario.sobrenome}`)
    cy.get(el.company).type(`${usuario.empresa}`)
    cy.get(el.address).type(`${usuario.endereco}`)
    cy.get(el.country).select(`${usuario.pais}`)
    cy.get(el.state).type(`${usuario.estado}`)
    cy.get(el.city).type(`${usuario.cidade}`)
    cy.get(el.zipcode).type(`${usuario.cep}`)
    cy.get(el.mobileNumber).type(`${usuario.telefone}`)
  },

  criarConta() {
    cy.get(el.createAccountButton).click()
  },

  continuar() {
    cy.get(el.continueButton).click()
  }
}