export class TipoOfertaController {
    constructor(tipoOfertaService) {
      this.tipoOfertaService = tipoOfertaService;
    }
  
    async getTiposOferta(req, res) {
      try {
        const tiposOferta = await this.tipoOfertaService.getAllTiposOferta();
        res.json(tiposOferta);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
  