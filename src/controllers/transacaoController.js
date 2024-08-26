export class TransacaoController {
    constructor(transacaoService) {
      this.transacaoService = transacaoService;
    }
  
    async getTransacoesByCliente(req, res) {
      const { clienteId } = req.params;
      try {
        const transacoes = await this.transacaoService.getTransacoesByCliente(clienteId);
        res.json(transacoes);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async processarTransacao(req, res) {
      const { clienteId, ofertaId } = req.body;
      try {
        await this.transacaoService.processarTransacao(clienteId, ofertaId);
        res.status(201).json({ message: 'Transação realizada com sucesso.' });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  }
  