import { criarUsuario } from '../../support/data/user.data'
import { registrationActions, registrationAssertions } from '../../support/modules/registration'
import { iniciarCadastro } from '../../support/helpers/registration.helper'

describe('Cadastro de usuários', () => {
    const usuario = criarUsuario()
    it('Cadastrar um novo usuario com sucesso', () => {
        iniciarCadastro(usuario)
        registrationAssertions.validarFormularioDadosConta()
        registrationActions.preencherDadosConta(usuario)
        registrationActions.preencherDadosEndereco(usuario)
        registrationActions.criarConta()
        registrationAssertions.validarContaCriada()
        registrationActions.continuar()
    })
    it('Tentar cadastrar um usuario com email já cadastrado', () => {
        iniciarCadastro(usuario)
        registrationAssertions.validarEmailJaExistente()
    })
})