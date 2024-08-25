export class EstoqueService {
  constructor(estoqueModel) {
    this.estoqueModel = estoqueModel;
  }

  async getEstoque(agrupamento) {
    return this.estoqueModel.getEstoque(agrupamento);
  }

  async getProdutosPorCliente(clienteId) {
    return this.estoqueModel.getProdutosPorCliente(clienteId);
  }

  async getClientesPorProduto(produtoId) {
    return this.estoqueModel.getClientesPorProduto(produtoId);
  }

  async atualizarEstoque(clienteId, produtoId, quantidade) {
    return this.estoqueModel.atualizarEstoque(clienteId, produtoId, quantidade);
  }
}
