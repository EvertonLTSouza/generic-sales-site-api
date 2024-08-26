export class OfertaController {
    constructor(ofertaService) {
      this.ofertaService = ofertaService;
    }
  
    async getOfertas(req, res) {
      try {
        const filtro = {
          clienteId: req.query.clienteId,
          produtoId: req.query.produtoId
        };
        const ofertas = await this.ofertaService.getOfertas(filtro);
        res.json(ofertas);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async createOferta(req, res) {
      try {
        const ofertaData = req.body;
        const ofertaId = await this.ofertaService.createOferta(ofertaData);
        res.status(201).json({ id: ofertaId });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async deleteOferta(req, res) {
      try {
        const { id_cliente, id_produto } = req.params;
        await this.ofertaService.deleteOferta(id_cliente, id_produto);
        res.status(204).send();
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
  