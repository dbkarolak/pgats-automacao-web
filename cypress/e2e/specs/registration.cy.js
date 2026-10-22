import { criarUsuario } from '../../support/data/user.data'
import { registrationActions } from '../../support/modules/registration/actions'
import { registrationAssertions } from '../../support/modules/registration/assertions'

describe('Cadastro de usuário', () => {

  it('Cadastrar um novo usuario com sucesso', () => {
    const usuario = criarUsuario()
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
})