export class EstoqueController {
  constructor(estoqueService) {
    this.estoqueService = estoqueService;
  }

  async getEstoque(req, res) {
    try {
      const agrupamento = req.query.agrupamento || 'cliente';
      const estoque = await this.estoqueService.getEstoque(agrupamento);
      res.json(estoque);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter estoque' });
    }
  }

  async getProdutosPorCliente(req, res) {
    try {
      const clienteId = req.params.clienteId;
      const produtos = await this.estoqueService.getProdutosPorCliente(clienteId);
      res.json(produtos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter produtos por cliente' });
    }
  }

  async getClientesPorProduto(req, res) {
    try {
      const produtoId = req.params.produtoId;
      const clientes = await this.estoqueService.getClientesPorProduto(produtoId);
      res.json(clientes);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter clientes por produto' });
    }
  }

  async atualizarEstoque(req, res) {
    try {
      const { clienteId, produtoId, quantidade } = req.body;
      const result = await this.estoqueService.atualizarEstoque(clienteId, produtoId, quantidade);
      if (result > 0) {
        res.json({ message: 'Estoque atualizado com sucesso' });
      } else {
        res.status(404).json({ error: 'Cliente ou produto não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar o estoque' });
    }
  }
}
