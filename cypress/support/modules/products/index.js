export const productElements = {
    homeLink: 'a[href="/"]',
    productsLink: 'a[href="/products"]',
    title: '.title',
    productsList: '.features_items',
    productDetailsLink: 'a[href*="/product_details/"]',
    productInformation: '.product-information',
    productName: '.product-information h2',
    searchInput: '#search_product',
    searchButton: '#submit_search',
    searchResult: '.productinfo p'
}

export const productActions = {
    acessarProdutos() {
        cy.visit('/')
        cy.get(productElements.homeLink).should('be.visible')
        cy.get(productElements.productsLink).click()
    },

    abrirPrimeiroProduto() {
        cy.get(productElements.productDetailsLink).first().should('be.visible').click()
    },

    pesquisarProduto(produto) {
        cy.get(productElements.searchInput).should('be.visible').type(`${produto}`)
        cy.get(productElements.searchButton).click()
    }
}

export const productAssertions = {
    validarPaginaProdutos() {
        cy.url().should('include', '/products')
        cy.get(productElements.title).should('contain', 'All Products').and('be.visible')
        cy.get(productElements.productsList).should('be.visible')
    },

    validarDetalhesProduto() {
        cy.url().should('include', 'product_details')
        cy.get(productElements.productInformation).should('be.visible')
        cy.get(productElements.productName).should('be.visible')
        cy.get(productElements.productInformation).should('contain', 'Category:').and('contain', 'Rs.').and('contain', 'Availability:').and('contain', 'Condition:').and('contain', 'Brand:')
    },

    validarResultadoPesquisa(produto) {
        cy.get(productElements.title).should('contain', 'Searched Products').and('be.visible')
        cy.get('.productinfo p').should('be.visible').and('contain.text', produto)
    }
}