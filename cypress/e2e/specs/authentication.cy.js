import { criarUsuario, emailIncorreto, senhaIncorreta } from '../../support/data/user.data'
import { loginActions, loginAssertions } from '../../support/modules/login'
import { prepararUsuarioParaLogin } from '../../support/helpers/authentication.helper'

describe('Autenticação de usuários', () => {
  const usuario = criarUsuario()
  it('Efetuar login de usuário com email e senha corretos', () => {
    prepararUsuarioParaLogin(usuario)
    loginActions.preencherLogin(usuario)
    loginAssertions.validarUsuarioLogado(usuario)
  })
  
  it('Impedir login de usuário com email ou senha incorretos', () => {
    loginActions.preencherLoginComSenhaIncorreta(emailIncorreto,senhaIncorreta)
    loginAssertions.validarLoginIncorreto()
  })
})