export const checkoutElements = {
    firstProduct: '.features_items .productinfo a[data-product-id="1"]',
    secondProduct: '.features_items .productinfo a[data-product-id="2"]',
    closeModal: '.close-modal',
    cartLink: '.shop-menu a[href="/view_cart"]',
    cartInfo: '#cart_info',
    checkoutButton: '.check_out',
    message: 'textarea[name="message"]',
    paymentLink: 'a[href="/payment"]',
    nameOnCard: '[data-qa="name-on-card"]',
    cardNumber: '[data-qa="card-number"]',
    cvc: '[data-qa="cvc"]',
    expiryMonth: '[data-qa="expiry-month"]',
    expiryYear: '[data-qa="expiry-year"]',
    payButton: '[data-qa="pay-button"]',
    orderPlaced: '[data-qa="order-placed"]'
}

export const checkoutActions = {
    adicionarProdutosAoCarrinho() {
        cy.get(checkoutElements.firstProduct).click({ force: true }) // passando o parametro force para evitar erros de duplicidade do site
        cy.get(checkoutElements.closeModal).click()
        cy.get(checkoutElements.secondProduct).click({ force: true }) // passando o parametro force para evitar erros de duplicidade do site
        cy.get(checkoutElements.closeModal).click()
    },

    acessarCarrinho() {
        cy.get(checkoutElements.cartLink).click()
    },

    iniciarCheckout() {
        cy.get(checkoutElements.checkoutButton).click()
    },

    informarMensagem(mensagem) {
        cy.get(checkoutElements.message).type(`${mensagem}`)
        cy.get(checkoutElements.paymentLink).click()
    },

    preencherPagamento(pagamento) {
        cy.get(checkoutElements.nameOnCard).type(`${pagamento.nomeCartao}`)
        cy.get(checkoutElements.cardNumber).type(`${pagamento.numeroCartao}`)
        cy.get(checkoutElements.cvc).type(`${pagamento.cvc}`)
        cy.get(checkoutElements.expiryMonth).type(`${pagamento.mesExpiracao}`)
        cy.get(checkoutElements.expiryYear).type(`${pagamento.anoExpiracao}`)
        cy.get(checkoutElements.payButton).click()
    }
}

export const checkoutAssertions = {
    validarCarrinho() {
        cy.url().should('include', '/view_cart')
        cy.get(checkoutElements.cartInfo).should('be.visible')
    },

    validarCheckout() {
        cy.contains('Address Details').should('be.visible')
        cy.contains('Review Your Order').should('be.visible')
    },

    validarPedidoRealizado() {
        cy.get(checkoutElements.orderPlaced).should('be.visible')
    }
}