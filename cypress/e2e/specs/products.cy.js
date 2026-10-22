import { productActions, productAssertions } from '../../support/modules/products'

describe('Produtos', () => {
    it('Verificar a página de todos os produtos e detalhe de produtos', () => {
        productActions.acessarProdutos()
        productAssertions.validarPaginaProdutos()
        productActions.abrirPrimeiroProduto()
        productAssertions.validarDetalhesProduto()
    })
})