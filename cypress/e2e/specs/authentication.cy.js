import { criarUsuario } from '../../support/data/user.data'
import { registrationActions } from '../../support/modules/registration/actions'
import { registrationAssertions } from '../../support/modules/registration/assertions'
import { loginActions } from '../../support/modules/login/actions'
import { loginAssertions } from '../../support/modules/login/assertions'

describe('Autenticação de usuários', () => {

  it('Efetuar login de usuário com email e senha corretos', () => {
    const usuario = criarUsuario()
    registrationActions.cadastrarUsuario(usuario)
    registrationAssertions.validarContaCriada()
    cy.clearCookies() // mantive a limpeza do cookie aqui para nao precisar fazer logoff após o signup, já que o TC04 efetiva o teste do logoff
    cy.visit('/login')
    loginActions.preencherLogin(usuario)
    loginAssertions.validarUsuarioLogado(usuario)
  })
})