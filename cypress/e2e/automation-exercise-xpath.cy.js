/// <reference types="cypress" />
describe('Automation Exercise', () => {
    const email = `pgats-aut-test_101-${Date.now()}@mail.com`
    const senha = '12345'
    it('Cadastrar um novo usuario com sucesso',() => {
        cy.visit('https://automationexercise.com')
        cy.xpath("//a[contains(@href,'login')]").should('be.visible').click()
        cy.xpath('//*[@data-qa="signup-name"]').type('PGATS AUT 101')
        cy.xpath('//*[@data-qa="signup-email"]').type(`${email}`)
        cy.xpath('//button[@data-qa="signup-button"]').click()
        cy.xpath('//*[@id="id_gender2"]').check()
        cy.xpath('//*[@data-qa="password"]').type(`${senha}`)
        //cy.xpath('//*[@data-qa="days"]').select('1')
        cy.xpath('//select[@data-qa="days"]').select('1')
        cy.xpath('//*[@id="newsletter"]').check()
        cy.xpath('//*[@data-qa="first_name"]').type('PGATS')
        cy.xpath('//*[@data-qa="last_name"]').type('Aut')
        cy.xpath('//*[@data-qa="company"]').type('PGATS')
        cy.xpath('//*[@data-qa="address"]').type('Example Address')
        cy.xpath('//select[@data-qa="country"]').select('United States')
        cy.xpath('//*[@data-qa="state"]').type('California')
        cy.xpath('//*[@data-qa="city"]').type('San Francisco')
        cy.xpath('//*[@data-qa="zipcode"]').type('12345')
        cy.xpath('//*[@data-qa="mobile_number"]').type('999999999')
        cy.xpath('//button[@data-qa="create-account"]').click()
        cy.xpath('//*[@data-qa="continue-button"]').click()
    });
    it('Efetuar login de usuário com email e senha corretos',() => {
        cy.visit('https://automationexercise.com/login')
        cy.xpath('//*[@data-qa="login-email"]').type(`${email}`)
        cy.xpath('//*[@data-qa="login-password"]').type(`${senha}`)
        cy.xpath('//button[@data-qa="login-button"]').click()
        cy.xpath('//a/b').should('contain', 'PGATS AUT 101')
    });
    it('Efetuar login de usuario com email ou senha INCORRETOS',() => {
        cy.visit('https://automationexercise.com/login')
        cy.xpath('//*[@data-qa="login-email"]').type(`${email}`)
        cy.xpath('//*[@data-qa="login-password"]').type('654321')
        cy.xpath('//button[@data-qa="login-button"]').click()
        cy.xpath("//form[contains(@action,'login')]/p").should('contain', 'Your email or password is incorrect!')        
    });
    it('Efetuar logout',() => {
        cy.visit('https://automationexercise.com/login')
        cy.xpath('//*[@data-qa="login-email"]').type(`${email}`)

        cy.xpath('//*[@data-qa="login-password"]').type(`${senha}`)
        cy.xpath('//button[@data-qa="login-button"]').click()
        cy.xpath("//a[contains(@href,'logout')]").should('be.visible').click()
        cy.xpath("//*[contains(@class,'login-form')]/h2").should('be.visible')
        cy.xpath("//a[contains(@href,'logout')]").should('not.exist')
        cy.xpath("//form[contains(@action,'login')]").should('be.visible')
        cy.url().should('include','login')
    });
    it('Tentar cadastrar um usuario com email já cadastrado',() => {
        cy.visit('https://automationexercise.com')
        cy.xpath("//a[contains(@href,'login')]").should('be.visible').click()
        cy.xpath('//*[@data-qa="signup-name"]').type('PGATS AUT 101')
        cy.xpath('//*[@data-qa="signup-email"]').type(`${email}`)
        cy.xpath('//button[@data-qa="signup-button"]').click()
        cy.xpath("//form[contains(@action,'signup')]//p").should('exist').should('be.visible').should('contain', 'Email Address already exist!').and('contain.text', 'Email Address already exist!')
    });
    
});