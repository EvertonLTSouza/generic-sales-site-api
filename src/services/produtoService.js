export class ProdutoService {
    constructor(produtoModel) {
      this.produtoModel = produtoModel;
    }
  
    async getAllProdutos() {
      return this.produtoModel.getAllProdutos();
    }
  
    async getProdutoById(id) {
      return this.produtoModel.getProdutoById(id);
    }
  
    async createProduto(produtoData) {
      return this.produtoModel.createProduto(produtoData);
    }
  
    async updateProduto(id, produtoData) {
      return this.produtoModel.updateProduto(id, produtoData);
    }
  
    async deleteProduto(id) {
      return this.produtoModel.deleteProduto(id);
    }
  
    async deleteProdutos(ids) {
      return this.produtoModel.deleteProdutos(ids);
    }
  }
  