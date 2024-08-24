import * as ClienteService from '../services/clienteService.js';

export const criarCliente = async (req, res) => {
    try {
        const clienteId = await ClienteService.criarCliente(req.body);
        res.status(201).json({ id: clienteId, ...req.body });
    } catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
};

export const obterClientes = async (req, res) => {
    try {
        const clientes = await ClienteService.obterClientes();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ mensagem: error.message });
    }
};

export const obterClientePorId = async (req, res) => {
    try {
        const cliente = await ClienteService.obterClientePorId(req.params.id);
        if (!cliente) return res.status(404).json({ mensagem: 'Cliente não encontrado' });
        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({ mensagem: error.message });
    }
};

export const atualizarCliente = async (req, res) => {
    try {
        await ClienteService.atualizarCliente(req.params.id, req.body);
        res.status(200).json({ id: req.params.id, ...req.body });
    } catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
};

export const deletarCliente = async (req, res) => {
    try {
        await ClienteService.deletarCliente(req.params.id);
        res.status(200).json({ mensagem: 'Cliente deletado' });
    } catch (error) {
        res.status(500).json({ mensagem: error.message });
    }
};
