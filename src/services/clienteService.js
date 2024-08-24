import * as ClienteModel from '../models/clienteModel.js';

export const criarCliente = async (cliente) => {
    return await ClienteModel.criarCliente(cliente);
};

export const obterClientes = async () => {
    return await ClienteModel.obterClientes();
};

export const obterClientePorId = async (id) => {
    return await ClienteModel.obterClientePorId(id);
};

export const atualizarCliente = async (id, cliente) => {
    await ClienteModel.atualizarCliente(id, cliente);
};

export const deletarCliente = async (id) => {
    await ClienteModel.deletarCliente(id);
};
