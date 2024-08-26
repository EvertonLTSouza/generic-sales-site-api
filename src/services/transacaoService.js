export class TransacaoService {
    constructor(transacaoModel, ofertaModel, estoqueModel) {
      this.transacaoModel = transacaoModel;
      this.ofertaModel = ofertaModel;
      this.estoqueModel = estoqueModel;
    }
  
    async getTransacoesByCliente(clienteId) {
      return this.transacaoModel.getTransacoesByCliente(clienteId);
    }
  
    async processarTransacao(clienteId, ofertaId) {
      const oferta = await this.ofertaModel.getOfertaById(ofertaId);
  
      if (!oferta) {
        throw new Error('Oferta não encontrada.');
      }
  
      const { idCliente, idProduto, idTipoOferta, quantidade, valorUnitario } = oferta;
      const tipoOferta = idTipoOferta === 1 ? 'VENDA' : 'COMPRA';
  
      let vendedorId, compradorId;
  
      if (tipoOferta === 'VENDA') {
        vendedorId = idCliente;
        compradorId = clienteId;
      } else {
        vendedorId = clienteId;
        compradorId = idCliente;
      }
  
      const estoqueVendedor = await this.estoqueModel.getEstoqueByClienteAndProduto(vendedorId, idProduto);
  
      if (tipoOferta === 'VENDA' && estoqueVendedor.quantidade < quantidade) {
        throw new Error('Estoque insuficiente para realizar a venda.');
      }
  
      await this.transacaoModel.createTransacao(vendedorId, compradorId, idProduto, quantidade, valorUnitario);
  
      await this.ofertaModel.deleteOfertaPorId(ofertaId);
  
      if (tipoOferta === 'VENDA') {
        await this.estoqueModel.atualizarEstoque(vendedorId, idProduto, -quantidade);
      } else {
        await this.estoqueModel.atualizarEstoque(compradorId, idProduto, quantidade);
      }
    }
  }
  