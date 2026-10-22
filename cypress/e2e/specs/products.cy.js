import { productActions, productAssertions } from '../../support/modules/products'

describe('Produtos', () => {
    it('Verificar a página de todos os produtos e detalhe de produtos', () => {
        productActions.acessarProdutos()
        productAssertions.validarPaginaProdutos()
        productActions.abrirPrimeiroProduto()
        productAssertions.validarDetalhesProduto()
    })
    
    it('Pesquisar produto com sucesso', () => {
        productActions.acessarProdutos()
        productAssertions.validarPaginaProdutos()
        productActions.pesquisarProduto('Tshirt')
        productAssertions.validarResultadoPesquisa('Tshirt')
    })
})