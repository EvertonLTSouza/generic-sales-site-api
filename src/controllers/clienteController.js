export class ClienteController {
    constructor(clientService) {
        this.clienteService = clientService;
    }

    criarCliente = async (req, res) => {
        try {
            const clienteId = await this.clienteService.criarCliente(req.body);
            res.status(201).json({ id: clienteId, ...req.body });
        } catch (error) {
            res.status(400).json({ mensagem: error.message });
        }
    };
    
    obterClientes = async (req, res) => {
        try {
            const clientes = await this.clienteService.obterClientes();
            res.status(200).json(clientes);
        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    };
    
    obterClientePorId = async (req, res) => {
        try {
            const cliente = await this.clienteService.obterClientePorId(req.params.id);
            if (!cliente) return res.status(404).json({ mensagem: 'Cliente não encontrado' });
            res.status(200).json(cliente);
        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    };
    
    atualizarCliente = async (req, res) => {
        try {
            await this.clienteService.atualizarCliente(req.params.id, req.body);
            res.status(200).json({ id: req.params.id, ...req.body });
        } catch (error) {
            res.status(400).json({ mensagem: error.message });
        }
    };
    
    deletarCliente = async (req, res) => {
        try {
            await this.clienteService.deletarCliente(req.params.id);
            res.status(200).json({ mensagem: 'Cliente deletado' });
        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    };
}
