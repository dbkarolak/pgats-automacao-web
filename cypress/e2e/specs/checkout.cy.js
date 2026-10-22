import { criarUsuario } from '../../support/data/user.data'
import { pagamento } from '../../support/data/payment.data'

import { registrationActions, registrationAssertions } from '../../support/modules/registration'

import { loginAssertions } from '../../support/modules/login'

import { checkoutActions, checkoutAssertions } from '../../support/modules/checkout'

describe('Checkout', () => {

    it('Realizar pedido cadastrando usuário antes do checkout', () => {
        const usuario = criarUsuario()

        registrationActions.cadastrarUsuario(usuario)
        registrationAssertions.validarContaCriada()
        registrationActions.continuar()

        loginAssertions.validarUsuarioLogado(usuario)

        checkoutActions.adicionarProdutosAoCarrinho()
        checkoutActions.acessarCarrinho()
        checkoutAssertions.validarCarrinho()

        checkoutActions.iniciarCheckout()
        checkoutAssertions.validarCheckout()

        checkoutActions.informarMensagem(pagamento.mensagemPedido)
        checkoutActions.preencherPagamento(pagamento)

        checkoutAssertions.validarPedidoRealizado()

        registrationActions.excluirConta()
        registrationAssertions.validarContaExcluida()
        registrationActions.continuar()
    })

})