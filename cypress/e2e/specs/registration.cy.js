import { criarUsuario } from '../../support/data/user.data'
import { registrationActions } from '../../support/modules/registration/actions'
import { registrationAssertions } from '../../support/modules/registration/assertions'

describe('Cadastro de usuário', () => {
    const usuario = criarUsuario()
    it('Cadastrar um novo usuario com sucesso', () => {
        cy.visit('/')
        cy.get('a[href*="login"]').click()
        registrationAssertions.validarPaginaCadastro()
        registrationActions.preencherSignup(usuario)
        registrationAssertions.validarFormularioDadosConta()
        registrationActions.preencherDadosConta(usuario)
        registrationActions.preencherDadosEndereco(usuario)
        registrationActions.criarConta()
        registrationAssertions.validarContaCriada()
        registrationActions.continuar()
    })
    it('Tentar cadastrar um usuario com email já cadastrado', () => {
        cy.visit('/')
        cy.get('a[href*="login"]').click()
        registrationAssertions.validarPaginaCadastro()
        registrationActions.preencherSignup(usuario)
        registrationAssertions.validarEmailJaExistente()
    })
})