export const subscriptionElements = {
    footer: '#footer',
    title: '.single-widget h2',
    emailInput: '#susbscribe_email',
    subscribeButton: '#subscribe',
    successAlert: '.alert-success',
    homeLink: 'a[href="/"]'
}

export const subscriptionActions = {
    acessarSubscription() {
        cy.visit('/')
        cy.get(subscriptionElements.homeLink).should('be.visible')
        cy.get(subscriptionElements.footer).scrollIntoView()
    },

    realizarInscricao(email) {
        cy.get(subscriptionElements.emailInput).should('be.visible').type(`${email}`)
        cy.get(subscriptionElements.subscribeButton).should('be.visible').click()
    }
}

export const subscriptionAssertions = {
    validarSecaoSubscription() {
        cy.get(subscriptionElements.title).should('contain', 'Subscription').and('be.visible')
    },

    validarInscricaoRealizada() {
        cy.get(subscriptionElements.successAlert).should('contain', 'You have been successfully subscribed!').and('be.visible')
    }
}