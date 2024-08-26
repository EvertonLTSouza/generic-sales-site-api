export class OfertaService {
    constructor(ofertaModel, clienteModel, produtoModel, tipoOfertaModel) {
      this.ofertaModel = ofertaModel;
      this.clienteModel = clienteModel;
      this.produtoModel = produtoModel;
      this.tipoOfertaModel = tipoOfertaModel;
    }
  
    async getOfertas(filtro) {
      return this.ofertaModel.getOfertas(filtro);
    }
  
    async createOferta(ofertaData) {
      const { id_cliente, id_produto, id_tipo_oferta } = ofertaData;
  
      // Validações
      const cliente = await this.clienteModel.obterClientePorId(id_cliente);
      if (!cliente) throw new Error('Cliente inválido.');
  
      const produto = await this.produtoModel.getProdutoById(id_produto);
      if (!produto) throw new Error('Produto inválido.');
  
      const tipoOferta = await this.tipoOfertaModel.getTipoOfertaById(id_tipo_oferta);
      if (!tipoOferta) throw new Error('Tipo de oferta inválido.');
  
      const ofertaExistente = await this.ofertaModel.ofertaExists(id_cliente, id_produto);
      if (ofertaExistente) throw new Error('Oferta já existente para este cliente e produto.');
  
      return this.ofertaModel.createOferta(ofertaData);
    }
  
    async deleteOferta(id_cliente, id_produto) {
      return this.ofertaModel.deleteOferta(id_cliente, id_produto);
    }
  }
  