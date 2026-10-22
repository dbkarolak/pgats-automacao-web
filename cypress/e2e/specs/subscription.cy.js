import { criarUsuario } from '../../support/data/user.data'
import { subscriptionActions, subscriptionAssertions} from '../../support/modules/subscription'

describe('Inscrição', () => {
    const usuario = criarUsuario()
    it('Verificar inscrição na página inicial', () => {
        subscriptionActions.acessarSubscription()
        subscriptionAssertions.validarSecaoSubscription()
        subscriptionActions.realizarInscricao(usuario.email)
        subscriptionAssertions.validarInscricaoRealizada()
    })
})