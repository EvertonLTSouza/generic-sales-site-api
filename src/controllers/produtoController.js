export class ProdutoController {
    constructor(produtoService) {
      this.produtoService = produtoService;
    }
  
    async getAllProdutos(req, res) {
      try {
        const produtos = await this.produtoService.getAllProdutos();
        res.json(produtos);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao obter produtos' });
      }
    }
  
    async getProdutoById(req, res) {
      try {
        const produto = await this.produtoService.getProdutoById(req.params.id);
        if (produto) {
          res.json(produto);
        } else {
          res.status(404).json({ error: 'Produto não encontrado' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Erro ao obter o produto' });
      }
    }
  
    async createProduto(req, res) {
      try {
        const produtoId = await this.produtoService.createProduto(req.body);
        res.status(201).json({ id: produtoId });
      } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o produto' });
      }
    }
  
    async updateProduto(req, res) {
      try {
        const updatedRows = await this.produtoService.updateProduto(req.params.id, req.body);
        if (updatedRows > 0) {
          res.json({ message: 'Produto atualizado com sucesso' });
        } else {
          res.status(404).json({ error: 'Produto não encontrado' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar o produto' });
      }
    }
  
    async deleteProduto(req, res) {
      try {
        const deletedRows = await this.produtoService.deleteProduto(req.params.id);
        if (deletedRows > 0) {
          res.json({ message: 'Produto deletado com sucesso' });
        } else {
          res.status(404).json({ error: 'Produto não encontrado' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar o produto' });
      }
    }
  
    async deleteProdutos(req, res) {
      try {
        const ids = req.body.ids;
        const deletedRows = await this.produtoService.deleteProdutos(ids);
        if (deletedRows > 0) {
          res.json({ message: `${deletedRows} produtos deletados com sucesso` });
        } else {
          res.status(404).json({ error: 'Nenhum produto encontrado para deletar' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar produtos' });
      }
    }
  }
  