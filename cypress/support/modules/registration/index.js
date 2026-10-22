export const registrationElements = {
    signupName: '[data-qa="signup-name"]',
    signupEmail: '[data-qa="signup-email"]',
    signupButton: '[data-qa="signup-button"]',
    existingEmailError: 'form[action*="signup"] p',

    genderMrs: '#id_gender2',
    password: '[data-qa="password"]',
    dayOfBirth: '[data-qa="days"]',
    newsletter: '#newsletter',

    firstName: '[data-qa="first_name"]',
    lastName: '[data-qa="last_name"]',
    company: '[data-qa="company"]',
    address: '[data-qa="address"]',
    country: '[data-qa="country"]',
    state: '[data-qa="state"]',
    city: '[data-qa="city"]',
    zipcode: '[data-qa="zipcode"]',
    mobileNumber: '[data-qa="mobile_number"]',

    createAccountButton: '[data-qa="create-account"]',
    accountCreated: '[data-qa="account-created"]',
    continueButton: '[data-qa="continue-button"]',

    deleteAccountLink: 'a[href="/delete_account"]',
    accountDeleted: '[data-qa="account-deleted"]'
}

export const registrationActions = {
    preencherSignup(usuario) {
        cy.get(registrationElements.signupName).type(`${usuario.nome}`)
        cy.get(registrationElements.signupEmail).type(`${usuario.email}`)
        cy.get(registrationElements.signupButton).click()
    },

    preencherDadosConta(usuario) {
        cy.get(registrationElements.genderMrs).check()
        cy.get(registrationElements.password).type(`${usuario.senha}`)
        cy.get(registrationElements.dayOfBirth).select(`${usuario.diaNascimento}`)
        cy.get(registrationElements.newsletter).check()
     },

    preencherDadosEndereco(usuario) {
        cy.get(registrationElements.firstName).type(`${usuario.primeiroNome}`)
        cy.get(registrationElements.lastName).type(`${usuario.sobrenome}`)
        cy.get(registrationElements.company).type(`${usuario.empresa}`)
        cy.get(registrationElements.address).type(`${usuario.endereco}`)
        cy.get(registrationElements.country).select(`${usuario.pais}`)
        cy.get(registrationElements.state).type(`${usuario.estado}`)
        cy.get(registrationElements.city).type(`${usuario.cidade}`)
        cy.get(registrationElements.zipcode).type(`${usuario.cep}`)
        cy.get(registrationElements.mobileNumber).type(`${usuario.telefone}`)
    },

    criarConta() {
        cy.get(registrationElements.createAccountButton).click()
    },

    continuar() {
        cy.get(registrationElements.continueButton).click()
    },

    cadastrarUsuario(usuario) {
        cy.visit('/login')
        this.preencherSignup(usuario)
        this.preencherDadosConta(usuario)
        this.preencherDadosEndereco(usuario)
        this.criarConta()
    },

    excluirConta() {
        cy.get(registrationElements.deleteAccountLink).click()
    }
}

export const registrationAssertions = {
    validarPaginaCadastro() {
        cy.get(registrationElements.signupName).should('be.visible')
        cy.get(registrationElements.signupEmail).should('be.visible')
        cy.get(registrationElements.signupButton).should('be.visible')
    },

    validarFormularioDadosConta() {
        cy.get(registrationElements.password).should('be.visible')
        cy.get(registrationElements.createAccountButton).should('be.visible')
    },

    validarContaCriada() {
        cy.get(registrationElements.accountCreated).should('be.visible')
    },

    validarEmailJaExistente() {
        cy.get(registrationElements.existingEmailError).should('exist').should('be.visible').should('contain', 'Email Address already exist!')
    },

    validarContaExcluida() {
        cy.get(registrationElements.accountDeleted).should('be.visible')
    }
}