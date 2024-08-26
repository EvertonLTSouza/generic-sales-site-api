export class TipoOfertaService {
    constructor(tipoOfertaModel) {
      this.tipoOfertaModel = tipoOfertaModel;
    }
  
    async getAllTiposOferta() {
      return this.tipoOfertaModel.getAllTiposOferta();
    }
  }
  