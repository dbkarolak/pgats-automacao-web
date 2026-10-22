/// <reference types="cypress" />
describe('Automation Exercise', () => {
    const email = `pgats-aut-test_101-${Date.now()}@mail.com`
    const senha = '12345'
    // Test Case 1: Register User
    it('Cadastrar um novo usuario com sucesso',() => {
        cy.visit('https://automationexercise.com')
        cy.get('a[href*=login]').click()
        cy.get('[data-qa="signup-name"]').type(`PGATS AUT 101`)
        //cy.get('[data-qa="signup-email"]').type(`pgats-aut-test_101@mail.com`)
        //cy.get('[data-qa="signup-email"]').type(`pgats-aut-test_101-${Date.now()}@mail.com`)
        cy.get('[data-qa="signup-email"]').type(`${email}`)
        cy.get('[data-qa="signup-button"]').click()
        cy.get('#id_gender2').check()
        cy.get('[data-qa="password"]').type(`${senha}`)
        cy.get('[data-qa="days"]').select('1')
        cy.get('#newsletter').check()

        cy.get('[data-qa="first_name"]').type('PGATS')
        cy.get('[data-qa="last_name"]').type('Aut')
        cy.get('[data-qa="company"]').type('PGATS')
        cy.get('[data-qa="address"]').type('Example Address')
        cy.get('[data-qa="country"]').select('United States')
        cy.get('[data-qa="state"]').type('California')
        cy.get('[data-qa="city"]').type('San Francisco')
        cy.get('[data-qa="zipcode"]').type('12345')
        cy.get('[data-qa="mobile_number"]').type(999999999)
        cy.get('[data-qa="create-account"]').click()
        cy.get('[data-qa="continue-button"]').click()
    });
    // Test Case 2: Login User with correct email and password
    it('Efetuar login de usuário com email e senha corretos',() => {
        cy.visit('https://automationexercise.com/login')
        cy.get('[data-qa="login-email"]').type(`${email}`)
        cy.get('[data-qa="login-password"]').type(`${senha}`)
        cy.get('[data-qa="login-button"]').click()
        cy.get('a > b').should('contain','PGATS AUT 101')
    });
    // Test Case 3: Login User with incorrect email and password
    it('Efetuar login de usuario com email ou senha INCORRETOS',() => {
        cy.visit('https://automationexercise.com/login')
        cy.get('[data-qa="login-email"]').type(`${email}`)
        cy.get('[data-qa="login-password"]').type('654321')
        cy.get('[data-qa="login-button"]').click()
        cy.get('form[action*="login"] > p').should('contain','Your email or password is incorrect!')        
    });
    // Test Case 4: Logout User
    it('Efetuar logout',() => {
        cy.visit('https://automationexercise.com/login')
        cy.get('[data-qa="login-email"]').type(`${email}`)
        cy.get('[data-qa="login-password"]').type(`${senha}`)
        cy.get('[data-qa="login-button"]').click()

        cy.get('a[href*="logout"]').should('be.visible').click()
        cy.get('.login-form > h2').should('be.visible')
        cy.get('a[href*="logout"]').should('not.exist')
        cy.get('[action*="login"]').should('be.visible')
        cy.url().should('include','login')

    });
    // Test Case 5: Register User with existing email
    it('Tentar cadastrar um usuario com email já cadastrado',() => {
        cy.visit('https://automationexercise.com')
        cy.get('a[href*=login]').click()
        cy.get('[data-qa="signup-name"]').type(`PGATS AUT 101`)
        cy.get('[data-qa="signup-email"]').type(`${email}`)
        cy.get('[data-qa="signup-button"]').click()
        cy.get('form[action*=signup] p').should('exist').should('be.visible').should('contain', 'Email Address already exist!').and('contain.text','Email Address already exist!')

    });
    // Test Case 8: Verify All Products and product detail page
    it('Verificar a página de todos os produtos e detalhe de produtos', () => {
        cy.visit('https://automationexercise.com')
        cy.get('a[href="/"]').should('be.visible')
        cy.get('a[href="/products"]').click()
        cy.url().should('include', '/products')
        cy.get('.title').should('contain', 'All Products').and('be.visible')
        cy.get('.features_items').should('be.visible')
        cy.get('a[href*="/product_details/"]').first().should('be.visible').click()
        cy.url().should('include', 'product_details')
        cy.get('.product-information').should('be.visible')
        cy.get('.product-information h2').should('be.visible')
        cy.get('.product-information').should('contain', 'Category:').and('contain', 'Rs.').and('contain', 'Availability:').and('contain', 'Condition:').and('contain', 'Brand:')
    });
    // Test Case 9: Search Product
    it('Pesquisar produto com sucesso', () => {
        cy.visit('https://automationexercise.com')
        cy.get('a[href="/"]').should('be.visible')
        cy.get('a[href="/products"]').click()
        cy.url().should('include', '/products')
        cy.get('.title').should('contain', 'All Products').and('be.visible')
        cy.get('#search_product').should('be.visible').type('Tshirt')
        cy.get('#submit_search').click()
        cy.get('.title').should('contain', 'Searched Products').and('be.visible')
        cy.get('.productinfo p').should('be.visible').and('contain.text', 'Tshirt')
    });
    // Test Case 10: Verify Subscription in home page
    it('Verificar inscrição na página inicial', () => {
        cy.visit('https://automationexercise.com')
        cy.get('a[href="/"]').should('be.visible')
        cy.get('#footer').scrollIntoView()
        cy.get('.single-widget h2').should('contain', 'Subscription').and('be.visible')
        cy.get('#susbscribe_email').should('be.visible').type(`${email}`)
        cy.get('#subscribe').should('be.visible').click()
        cy.get('.alert-success').should('contain', 'You have been successfully subscribed!').and('be.visible')
    });
    // Test Case 15: Place Order: Register before Checkout
    it('Realizar pedido cadastrando usuário antes do checkout', () => {
        cy.visit('https://automationexercise.com')
        cy.get('.logo').should('be.visible')
        cy.get('a[href*="login"]').click()

        cy.get('[data-qa="signup-name"]').type('PGATS AUT 101')
        cy.get('[data-qa="signup-email"]').type('pgats-aut-test_102-1792601504531@mail.com')
        cy.get('[data-qa="signup-button"]').click()

        cy.get('#id_gender2').check()
        cy.get('[data-qa="password"]').type(`${senha}`)
        cy.get('[data-qa="days"]').select('1')
        cy.get('#newsletter').check()
        cy.get('[data-qa="first_name"]').type('PGATS')
        cy.get('[data-qa="last_name"]').type('Aut')
        cy.get('[data-qa="company"]').type('PGATS')
        cy.get('[data-qa="address"]').type('Example Address')
        cy.get('[data-qa="country"]').select('United States')
        cy.get('[data-qa="state"]').type('California')
        cy.get('[data-qa="city"]').type('San Francisco')
        cy.get('[data-qa="zipcode"]').type('12345')
        cy.get('[data-qa="mobile_number"]').type('999999999')
        cy.get('[data-qa="create-account"]').click()

        cy.get('[data-qa="account-created"]').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
        cy.get('a > b').should('contain', 'PGATS AUT 101')

        cy.get('.features_items .productinfo a[data-product-id="1"]').click()
        cy.get('.close-modal').click()
        cy.get('.features_items .productinfo a[data-product-id="2"]').click()
        cy.get('.close-modal').click()

        cy.get('.shop-menu a[href="/view_cart"]').click()
        cy.url().should('include', '/view_cart')
        cy.get('#cart_info').should('be.visible')

        cy.get('.check_out').click()
        cy.contains('Address Details').should('be.visible')
        cy.contains('Review Your Order').should('be.visible')

        cy.get('textarea[name="message"]').type('Realizando pedido teste')
        cy.get('a[href="/payment"]').click()

        cy.get('[data-qa="name-on-card"]').type('PGATS AUT')
        cy.get('[data-qa="card-number"]').type('1111111111111111')
        cy.get('[data-qa="cvc"]').type('123')
        cy.get('[data-qa="expiry-month"]').type('12')
        cy.get('[data-qa="expiry-year"]').type('2030')
        cy.get('[data-qa="pay-button"]').click()

        cy.get('[data-qa="order-placed"]').should('be.visible')
        cy.get('a[href="/delete_account"]').click()
        cy.get('[data-qa="account-deleted"]').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
    });
    // Test Case 16: Place Order: Login before Checkout
    it('Realizar pedido efetuando login antes do checkout', () => {
        cy.visit('https://automationexercise.com')
        cy.get('.logo').should('be.visible')
        cy.get('a[href*="login"]').click()

        cy.get('[data-qa="login-email"]').type('pgats-aut-test_101-1792601888189@mail.com')
        cy.get('[data-qa="login-password"]').type('12345')
        cy.get('[data-qa="login-button"]').click()
        cy.get('a > b').should('contain', 'PGATS AUT 101')

        cy.get('.features_items .productinfo a[data-product-id="1"]').click()
        cy.get('.close-modal').click()
        cy.get('.features_items .productinfo a[data-product-id="2"]').click()
        cy.get('.close-modal').click()

        cy.get('.shop-menu a[href="/view_cart"]').click()
        cy.url().should('include', '/view_cart')
        cy.get('#cart_info').should('be.visible')

        cy.get('.check_out').click()
        cy.contains('Address Details').should('be.visible')
        cy.contains('Review Your Order').should('be.visible')

        cy.get('textarea[name="message"]').type('Realizando pedido teste')
        cy.get('a[href="/payment"]').click()

        cy.get('[data-qa="name-on-card"]').type('PGATS AUT')
        cy.get('[data-qa="card-number"]').type('1111111111111111')
        cy.get('[data-qa="cvc"]').type('123')
        cy.get('[data-qa="expiry-month"]').type('12')
        cy.get('[data-qa="expiry-year"]').type('2030')
        cy.get('[data-qa="pay-button"]').click()

        cy.get('[data-qa="order-placed"]').should('be.visible')

        cy.get('a[href="/delete_account"]').click()
        cy.get('[data-qa="account-deleted"]').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
    });
    
});